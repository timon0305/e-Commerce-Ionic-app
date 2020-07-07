import { Component, OnInit, ApplicationRef } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/providers/config/config.service';
import { LoadingService } from 'src/providers/loading/loading.service';
import { LocationDataService } from 'src/providers/location-data/location-data.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-shipping-method',
  templateUrl: './shipping-method.page.html',
  styleUrls: ['./shipping-method.page.scss'],
})
export class ShippingMethodPage implements OnInit {

  shippingMethod = new Array;
  selectedMethod = true;
  shippingLocations = [];
  constructor(
    public navCtrl: NavController,
    public shared: SharedDataService,
    public http: HttpClient,
    public storage: Storage,
    public spinnerDialog: SpinnerDialog,
    public config: ConfigService,
    public loading: LoadingService,
    public location: LocationDataService,
    private applicationRef: ApplicationRef,
  ) {
    console.log(this.shared.customerData);
    this.shared.translateString(this.shared.checkOutPageText).then((res: string) => { this.shared.checkOutPageText = res; });
    // if (this.shared.customerData.id != null) {
    //   if (this.shared.customerData.billing.first_name == "" &&
    //     this.shared.customerData.shippping.first_name == "" &&
    //     this.shared.customerData.shippping.last_name == "" &&
    //     this.shared.customerData.billing.last_name == ""
    //   ) { this.updateUser(); }
    // }
    this.getShippingZones();
  }
  //=================================================================================================================================
  getShippingZones() {
    this.loading.show();
    this.config.getWoo("shipping/zones" + "?" + this.config.productsArguments).then((data: any) => {
      let d = data
      this.getShippingLocations(d);
    });
  }
  //=================================================================================================================================
  getShippingLocations(array) {
    var count = 0;
    for (let v of array) {
      this.config.getWoo("shipping/zones/" + v.id + "/locations" + "?" + this.config.productsArguments).then((data: any) => {
        count++;
        let d = data
        for (let v2 of d) {
          this.shippingLocations.push(Object.assign(v2, { zoneId: v.id }));
        }
        if (array.length == count) { this.loading.hide(); this.sortArray(this.shippingLocations); }
      });
    }
  }
  //=================================================================================================================================
  sortArray(array) {
    let tempArray = [];
    for (let value of array) {
      if (value.type == "postcode") { tempArray.push(value); }
    }
    for (let value of array) {
      if (value.type == "state") { tempArray.push(value); }
    }
    for (let value of array) {
      if (value.type == "country") { tempArray.push(value); }
    }
    for (let value of array) {
      if (value.type == "continent") { tempArray.push(value); }
    }
    console.log(tempArray);
    this.findZoneId(tempArray);
  }
  //=================================================================================================================================
  findZoneId(array) {
    let zoneId = ""
    for (let value of array) {
      if (value.type == "postcode") {
        if (this.matchPostCode(value)) {
          zoneId = value.zoneId;
          console.log("postcode" + "  " + value.code);
          break;
        }
      }
      else if (value.type == "state") {
        if (this.matchState(value)) {
          console.log("state" + "  " + value.code);
          zoneId = value.zoneId;
          break;
        }
      }
      else if (value.type == "country") {
        if (this.matchCountry(value)) {
          console.log("country" + "  " + value.code)
          zoneId = value.zoneId;
          break;
        }
      }
      else if (value.type == "continent") {
        if (this.matchContinent(value)) {
          console.log("continent" + "  " + value.code);
          zoneId = value.zoneId;
          break;
        }
      }
    }

    this.getShippingMethods(zoneId);
  }
  //=================================================================================================================================
  matchPostCode(value) {

    let postcode = this.shared.shipping.postcode;
    if (value.code.toUpperCase() == postcode.toUpperCase()) return true;
    if (value.code.indexOf("*") > 0) {

      let ind = value.code.indexOf("*");
      let s1 = postcode.substring(0, ind - 1);
      let s2 = value.code.substring(0, ind - 1);

      if (s1.toUpperCase() == s2.toUpperCase()) {
        return true;
      }
    }
    if (value.code.indexOf(".") > 0) {

      let i = value.code.indexOf(".");
      let min = value.code.substring(0, i);
      let max = value.code.substring(i + 3, value.code.length);

      min = parseInt(min);
      let p = parseInt(postcode);
      max = parseInt(max);

      if (p >= min && p <= max) {
        return true;
      }
    }

  }
  //=================================================================================================================================
  matchState(value) {
    let s = this.shared.shipping.country + ":" + this.shared.shipping.state;
    if (s == value.code) {
      return true;
    }
  }
  //=================================================================================================================================
  matchCountry(value) {
    let s = this.shared.shipping.country;
    if (s == value.code) {
      return true;
    }
  }
  //=================================================================================================================================
  matchContinent(value) {
    let s = this.location.getContientCode(this.shared.shipping.country);
    if (s == value.code) return true;
  }
  //=================================================================================================================================
  getShippingMethods(id) {
    if (id == "") id = 0;
    this.loading.show();
    this.config.getWoo("shipping/zones/" + id + "/methods" + "?" + this.config.productsArguments).then((data: any) => {
      this.loading.hide();
      this.shippingMethod = data
      this.applicationRef.tick();
    });

  }
  //=================================================================================================================================
  setMethod(event) {

    let data = event.detail.value;
    
    this.shared.shipping_lines = [];
    var s: { [k: string]: any } = {};
    if (data.method_id == "flat_rate")
      s = {
        ship_id: data.id,
        method_id: data.method_id,
        method_title: data.method_title,
        total: this.calculateFlatRate(data)
      }
    else if (data.settings.cost) {
      let cal = (data.settings.cost.value).toString();
      if (cal == "") cal = "0";
      s = {
        ship_id: data.id,
        method_id: data.method_id,
        method_title: data.method_title,
        total: cal
      }
    }
    else {
      s = {
        ship_id: data.id,
        method_id: data.method_id,
        method_title: data.method_title,
        total: "0"
      }
    }
    console.log(s);
    this.shared.shipping_lines.push(s);
  }
  //===============================================================================
  calculateFlatRate(data) {
    // if (data.settings.cost.value.indexOf("*") > 0) {
    //   let split = data.settings.cost.value.split("*");
    //   let value = parseFloat(split[0]);
    //   let result = value * this.shared.cartTotalItems();
    //   return result.toString();
    // }
    // else 
    let cal = (data.settings.cost.value).toString();
    if (cal == "") cal = "0";
    return cal;

  }
  //=====================================================================================================================
  checkFreeShipping(data) {
    if (data.method_id != "free_shipping") { return true; }

    if (data.settings.requires.value == "") { return true; }

    if (data.settings.requires.value == "coupon") {
      if (this.findFreeShippingCoupon()) return true;
      else return false;

    }
    if (data.settings.requires.value == "both") {
      //console.log("total : " + this.shared.productsTotal() + " coupon min " + data.settings.min_amount.value);
      if (this.shared.productsTotal() >= data.settings.min_amount.value && this.findFreeShippingCoupon()) {
        return true;
      } else return false;
    }
    if (data.settings.requires.value == "either") {
      if (this.shared.productsTotal() >= data.settings.min_amount.value || this.findFreeShippingCoupon()) {
        return true;
      } else return false;
    }
    if (data.settings.requires.value == "min_amount") {
      if (this.shared.productsTotal() >= data.settings.min_amount.value) {
        return true;
      } else return false;
    }

  }
  //=====================================================================================================================
  findFreeShippingCoupon() {
    let found = false;
    if (this.shared.couponArray.length == 0) return false;
    for (let value of this.shared.couponArray) {
      if (value.free_shipping == true) found = true;
    }
    if (found == true) return true;
    else return false;
  }
  proceedOrder() {
    if (this.config.checkOutPage == 2)
      this.navCtrl.navigateForward(this.config.currentRoute + "/order");
    else this.openOrderPage();
  }
  //=====================================================================================================================
  openOrderPage() {
    let customer_id = 0;// <!-- 2.0 updates -->
    if (this.shared.customerData.id != null) customer_id = this.shared.customerData.id;// <!-- 2.0 updates -->
    let token = null;// <!-- 2.0 updates -->
    if (this.shared.customerData.cookie != null) token = this.shared.customerData.cookie;// <!-- 2.0 updates -->
    let onePage = this.config.checkOutPage;

    var data = {
      token: token,// <!-- 2.0 updates -->
      // payment_method: this.selectedPaymentMethod,
      // payment_method_title: this.selectedPaymentMethodTitle,
      billing_info: this.shared.billing,
      shipping_info: this.shared.shipping,
      products: this.getProducts(),
      shipping_ids: this.shared.shipping_lines,
      coupons: this.getCoupons(),
      customer_note: "",
      customer_id: customer_id,// <!-- 2.0 updates -->
      sameAddress: this.shared.sameAddress,
      one_page: onePage,
      platform: this.shared.device,
    };
    console.log(data);
    this.shared.openCheckoutWebview(data);
  }
  //=================================================================================================================================
  getProducts() {
    var data = [];
    for (let v of this.shared.cartProducts) {
      var obj = { quantity: v.quantity, product_id: v.product_id, total: v.total.toString() };
      if (v.variation_id) Object.assign(obj, { variation_id: v.variation_id })
      //if (v.meta_data) Object.assign(obj, { meta_data: v.meta_data })
      data.push(obj);
    }
    return data;
  }
  //=================================================================================================================================
  //Object.assign(c, data
  getCoupons() {
    var data = [];
    for (let v of this.shared.couponArray) {
      data.push({ code: v.code, discount: v.amount });
    }
    return data;
  }
  //=================================================================================================================================
  getShippingLines() {
    var data = [];
    for (let v of this.shared.shipping_lines) {
      data.push({ code: v.code, discount: v.amount });
    }
    return data;
  }
  //=================================================================================================================================
  updateUser() {
    var data = {
      billing: this.shared.billing,
      shipping: this.shared.shipping
    };
    this.config.Woocommerce.putAsync("customers/" + this.shared.customerData.id, data).then((data: any) => {
      let dat = data
      this.shared.customerData.billing = dat.billing;
      this.shared.customerData.shipping = dat.shipping;
      this.storage.set('customerData', this.shared.customerData);
    });
  }
  public resetPage = false;
  //=================================================================================================================================
  ionViewDidEnter() {
    this.resetPage = false;
    setTimeout(() => {
      this.resetPage = true;
    }, 100);
    this.shared.shipping_lines = [];

  }

  ngOnInit() {

  }

}
