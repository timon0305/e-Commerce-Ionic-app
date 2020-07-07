import { Component, OnInit, ApplicationRef, ViewChild } from '@angular/core';
import { NavController, ActionSheetController, IonContent } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/providers/config/config.service';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { LoadingService } from 'src/providers/loading/loading.service';

import { CouponService } from 'src/providers/coupon/coupon.service';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  @ViewChild(IonContent, { static: false }) content: IonContent;

  customerNotes;
  discount = 0;
  productsTotal = 0;
  totalAmountWithDisocunt = 0;
  paymentMethods = [];
  selectedPaymentMethod = '';
  selectedPaymentMethodTitle = '';
  order: any;
  tax = 0;
  loaderTaxCalculating: boolean = true;
  loaderPaymentMethods: boolean = true;

  constructor(
    public navCtrl: NavController,

    public http: HttpClient,
    public config: ConfigService,
    public shared: SharedDataService,
    public loading: LoadingService,
    
    public spinnerDialog: SpinnerDialog,
    public couponProvider: CouponService,
    public actionSheetCtrl: ActionSheetController,
    public iab: InAppBrowser,
    public applicationRef: ApplicationRef, ) {
    this.order = {
      token: this.shared.customerData.cookie,
      payment_method: this.selectedPaymentMethod,
      payment_method_title: this.selectedPaymentMethodTitle,
      billing: this.shared.billing,
      shipping: this.shared.shipping,
      line_items: this.shared.cartProducts,
      shipping_lines: this.shared.shipping_lines,
      coupon_lines: this.shared.couponArray,
      customer_note: this.customerNotes,
      customer_id: this.shared.customerData.id,
    };
    //this.productsTotal = this.shared.productsTotal();
    this.calculateDiscount();
    this.calculateTotal();

    // if (this.shared.shipping_lines[0].method_id != "local_pickup")
    this.calculateTax();
  }

  //============================================================================================  
  //placing order
  addOrder = function (nonce) {

    let customer_id = 0;
    if (this.shared.customerData.id != null) customer_id = this.shared.customerData.id;
    let token = null;
    if (this.shared.customerData.cookie != null) token = this.shared.customerData.cookie;
    let onePage = this.config.checkOutPage;

    //this.loading.auto();
    var data = {
      token: token,
      payment_method: this.selectedPaymentMethod,
      payment_method_title: this.selectedPaymentMethodTitle,
      billing_info: this.shared.billing,
      shipping_info: this.shared.shipping,
      products: this.getProducts(),
      shipping_ids: this.shared.shipping_lines,
      coupons: this.getCoupons(),
      customer_note: this.customerNotes,
      customer_id: customer_id,
      one_page: onePage,
      platform: this.shared.device,
    };
    console.log(this.shared.customerData);
    this.shared.openCheckoutWebview(data);
  };

  getProducts() {
    var data = [];
    for (let v of this.shared.cartProducts) {
      var obj = { quantity: v.quantity, product_id: v.product_id, total: v.total.toString(), price: v.price.toString() };
      if (v.variation_id) Object.assign(obj, { variation_id: v.variation_id })
      //if (v.meta_data) Object.assign(obj, { meta_data: v.meta_data })
      data.push(obj);
    }
    return data;
  }
  //Object.assign(c, data
  getCoupons() {
    var data = [];
    for (let v of this.shared.couponArray) {
      data.push({ code: v.code, discount: v.amount });
    }
    return data;
  }
  getShippingLines() {
    var data = [];
    for (let v of this.shared.shipping_lines) {
      data.push({ code: v.code, discount: v.amount });
    }
    return data;
  }

  //============================================================================================  
  //CAlculate Discount total
  calculateDiscount = function () {
    let total = 0;
    for (let value of this.shared.cartProducts) {
      total = total + parseFloat(value.subtotal);
    }
    this.productsTotal = total;
    this.discount = parseFloat(this.shared.productsTotal()) - total;
  };

  //============================================================================================  
  //CAlculate all total
  calculateTotal = function () {
    this.totalAmountWithDisocunt = (parseFloat(this.productsTotal) + parseFloat(this.shared.shipping_lines[0].total)) + parseFloat(this.discount) + parseFloat(this.tax);
  };

  selectPayment(p) {
    this.selectedPaymentMethod = p.id;
    this.selectedPaymentMethodTitle = p.title;
    this.scrollToBottom();
  }

  //========================================================================================
  scrollToBottom() {

    setTimeout(() => {
      this.content.scrollToBottom();
      console.log("botton");
    }, 300);

  }
  ngOnInit() {
    //this.loading.show();

    this.config.getWoo("payment_gateways" + "?" + this.config.productsArguments).then((data: any) => {
      this.loaderPaymentMethods = false;
      this.paymentMethods = data
      this.applicationRef.tick();
    });


  }
  openHomePage() {
    this.navCtrl.navigateRoot("/home");
  }

  calculateTax() {
    var data = {

      billing_info: this.shared.billing,
      shipping_info: this.shared.shipping,
      products: this.getProducts(),
      shipping_ids: this.shared.shipping_lines,

    };

    this.http.get(this.config.url + '/api/appsettings/ionic_get_tax/?insecure=cool&order=' + encodeURIComponent(JSON.stringify(data))).subscribe((data: any) => {
      this.loaderTaxCalculating = false;

      let res = parseFloat(JSON.stringify(data));
      if (res) { console.log("tax " + res); }
      else { console.log("tax err " + res); res = 0; }

      this.tax = res;
      this.calculateTotal();
      this.applicationRef.tick();

    });
  }

}
