import {Component, OnInit, ApplicationRef, ViewEncapsulation} from '@angular/core';


import { ConfigService } from 'src/providers/config/config.service';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { NavController, ModalController, ActionSheetController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from 'src/providers/loading/loading.service';
import { CouponService } from 'src/providers/coupon/coupon.service';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../modals/login/login.page';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CartPage implements OnInit {
  total: any;
  subtotal: any;
  c = '';
  couponArray = [];
  products = [];
  loadingServerData = true;
  constructor(
    public navCtrl: NavController,
    public shared: SharedDataService,
    public config: ConfigService,
    public http: HttpClient,
    public loading: LoadingService,
    private storage: Storage,
    public modalCtrl: ModalController,
    private applicationRef: ApplicationRef,
    public couponProvider: CouponService,
    public actionSheetCtrl: ActionSheetController,
  ) {
  }
  //============================================================================================  
  totalPrice() {
    var price = 0;
    var subPrice = 0;
    for (let value of this.products) {
      subPrice = subPrice + value.subtotal
      price = price + value.total;
    }
    this.subtotal = subPrice;
    this.total = price;
    // console.log(price);
  };
  //============================================================================================  
  getSingleProductDetail(id) {
    this.loading.show();
    this.config.getWoo("products/" + id + "?" + this.config.productsArguments).then((data: any) => {
      this.loading.hide();
      this.shared.singleProductPageData.push(data);
      if (this.config.appNavigationTabs)
        this.navCtrl.navigateForward(this.config.currentRoute + "/product-detail/" + data.id);
      else
        this.navCtrl.navigateForward("/product-detail/" + data.id);

    }, err => {
      this.loading.hide();
      console.log(err);
    });
  }
  //============================================================================================  
  removeCart(id) {

    this.products.forEach((value, index) => {

      if (value.cart_id == id) {
        this.products.splice(index, 1);
        console.log("removing" + id);
      }
    });
    this.shared.removeCart(this.products);
    this.updateCart();
  }
  //============================================================================================  
  qunatityPlus = function (p) {
    if (p.stock_quantity == p.quantity)
      this.shared.showAlert("Product Quantity is Limited!");
    else if (p.stock_quantity == null || p.stock_quantity > p.quantity) {
      p.quantity++;
      p.subtotal = p.subtotal + parseFloat(p.price);
      p.total = p.total + parseFloat(p.price);
      this.updateCart();
    }

  }
  //============================================================================================  
  //function decreasing the quantity
  qunatityMinus = function (p) {
    if (p.quantity != 1) {
      p.quantity--;
      p.subtotal = parseFloat(p.price) * p.quantity;
      p.total = parseFloat(p.price) * p.quantity;
      this.updateCart();
    }

  }

  //============================================================================================  
  async proceedToCheckOut() {
    if (this.shared.customerData.id == null || this.shared.customerData.id == undefined) {

      let modal = await this.modalCtrl.create({
        component: LoginPage,
        componentProps: {
          'hideGuestLogin': true
        }
      });
      await modal.present();
    }
    else {
      // <!-- 2.0 updates -->
      if (this.config.checkOutPage == 1)
        this.shared.onePageCheckOut();
      else {
        if (this.config.appNavigationTabs)
          this.navCtrl.navigateForward(this.config.currentRoute + "/shipping-address");
        else
          this.navCtrl.navigateForward("/shipping-address");
      }

    }
  }
  //============================================================================================  
  openProductsPage() {
    if (this.config.appNavigationTabs)
      this.navCtrl.navigateForward("tabs/" + this.config.getCurrentHomePage());
    else
      this.navCtrl.navigateForward(this.config.getCurrentHomePage());
  }
  //============================================================================================  
  ionViewWillEnter() {
    //if (this.config.admob == 1) this.shared.showAd();
    this.updateCart();
  }
  //============================================================================================  
  updateCart() {

    if (this.shared.cartProducts.length != 0) { this.loading.show(); this.loadingServerData = false; }
    let count = 0;
    this.shared.cartProducts.forEach((value, index) => {

      let id = value.product_id; if (value.variation_id != undefined) id = value.variation_id;
      this.config.getWoo("products/" + id + "?" + this.config.productsArguments).then((data: any) => {
        count++;
        let p = data
        if (p.id == undefined) { this.shared.cartProducts.splice(index, 1); }
        else if (p.status == 'trash') { this.shared.cartProducts.splice(index, 1); }
        else {
          value.price = p.price;
          value.name = p.name;
          value.stock_quantity = p.stock_quantity;
          value.tax_status = p.tax_status;
          //value.image = p.images[0].src;
          value.tax_class = p.tax_class;
          value.tax_status = p.tax_status;
          value.on_sale = p.on_sale;
          value.categories = p.categories;

          if (p.stock_quantity == null) { }
          else if (p.stock_quantity < value.quantity) value.quantity = p.stock_quantity;
          else if (p.stock_status != 'instock') { this.shared.cartProducts.splice(index, 1); }

          value.subtotal = parseFloat(value.price) * value.quantity;
          value.total = parseFloat(value.price) * value.quantity;
        }
        this.applicationRef.tick();
        if (count == this.shared.cartProducts.length) {
          this.changingCart();
          this.loading.hide();
          this.loadingServerData = true;
        }
      });
    });

  }
  //==========================================================================
  changingCart() {
    this.products = this.shared.cartProducts;
    this.storage.set('cartProducts', this.shared.cartProducts);
    this.shared.cartTotalItems();

    this.shared.couponArray.forEach((value) => {
      this.products = this.couponProvider.apply(value, this.shared.cartProducts);
    });

    this.totalPrice();
    this.applicationRef.tick();
  }
  //============================================================================================   
  //getting getMostLikedProducts from the server
  getCoupon = function (code) {
    this.loading.show();

    this.config.getWoo("coupons?code=" + code).then((data: any) => {

      this.loading.hide();
      let d = data
      let coupon = d[0];
      if (d.length == 0)
        this.shared.showAlert("Invalid Coupon Code!");
      else
        this.applyCouponCart(coupon);


    }, error => {
      this.loading.hide();
      console.log(error);
    });
  };
  //============================================================================================  
  //applying coupon on the cart
  applyCouponCart = function (coupon) {
    //checking the coupon is valid or not

    if (this.couponProvider.validateCouponService(coupon, this.products, this.shared.couponArray) == false) {
      return 0;
    } else {
      if (coupon.individual_use == 1) {
        this.products = (JSON.parse(JSON.stringify(this.shared.cartProducts)));
        this.shared.couponArray = [];
        console.log('individual_use');
      }
      var v: { [k: string]: any } = {};
      v.code = coupon.code;
      v.amount = coupon.amount;
      v.product_ids = coupon.product_ids;
      v.excluded_product_ids = coupon.exclude_product_ids;
      v.product_categories = coupon.product_categories;
      v.excluded_product_categories = coupon.excluded_product_categories;
      v.discount = coupon.amount;
      v.individual_use = coupon.individual_use;
      v.free_shipping = coupon.free_shipping;
      v.discount_type = coupon.discount_type;
      // v.limit_usage_to_x_items = coupon.limit_usage_to_x_items;
      // v.usage_limit = coupon.usage_limit;
      // v.used_by = coupon.used_by ;
      // v.usage_limit_per_user = coupon.usage_limit_per_user ;
      // v.exclude_sale_items = coupon.exclude_sale_items;
      this.shared.couponArray.push(coupon);
    }

    //applying coupon service
    this.products = this.couponProvider.apply(coupon, this.products);
    this.updateCart();
  };
  //============================================================================================  
  //delete Coupon
  deleteCoupon = function (code) {
    this.shared.couponArray.forEach((value, index) => {
      if (value.code == code) { this.shared.couponArray.splice(index, 1); return true; }
    });
    this.updateCart();
    console.log(this.shared.couponArray);
  };

  async couponslist() {
    let actionSheet = await this.actionSheetCtrl.create({
      header: 'Demo Coupons',
      buttons: [
        {
          icon: 'arrow-forward',
          text: 'Product Fixed (fp). A fixed total discount for selected products only',
          handler: () => {
            this.c = 'fp';
          }
        },
        {
          icon: 'arrow-forward',
          text: 'Cart Fixed (fc). A fixed total discount for the entire cart',
          handler: () => {
            this.c = 'fc';
          }
        },
        {
          icon: 'arrow-forward',
          text: 'Product Percentage (percentage). A percentage discount for selected products only',
          handler: () => {
            this.c = 'percentage';
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {

          }
        }
      ]
    });
    await actionSheet.present();
  }
  ionViewDidEnter() {
    this.shared.getBrowserHeaderColorFromAppHeader();
  }
  ngOnInit() {
  }

}
