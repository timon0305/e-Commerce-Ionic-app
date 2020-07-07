// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/
import { Injectable, ApplicationRef, ChangeDetectorRef } from '@angular/core';
import { ConfigService } from '../config/config.service';

import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from '../loading/loading.service';
import { Platform, ToastController, AlertController } from '@ionic/angular';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { AppEventsService } from '../app-events/app-events.service';
import { InAppBrowserOptions, InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Injectable()
export class SharedDataService {

  public banners = [];
  public tab1: any = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  public tab2: any = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  public tab3: any = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  public vendors = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  public allCategories: any = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  public categories: any = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  public subCategories: any = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  public customerData: { [k: string]: any } = {};
  public recentViewedProducts = new Array();
  public wishListProducts = new Array();
  public cartProducts = new Array();
  public couponArray = new Array();
  public cartquantity;
  public wishList = new Array();
  public tempdata: { [k: string]: any } = {};
  public dir = "ltr";
  public selectedFooterPage = "HomePage";
  public cartTempProducts = [];
  public translationListArray = [];
  billing = {
    first_name: '',
    last_name: '',
    company: '',
    address_1: '',
    address_2: '',
    city: '',
    state: '',
    postcode: '',
    country: '',
    email: '',
    phone: ''
  };
  billingCountryName = "";
  billingStateName = "";
  shipping = {
    first_name: '',
    last_name: '',
    company: '',
    address_1: '',
    address_2: '',
    city: '',
    state: '',
    postcode: '',
    country: ''
  };
  shippingCountryName = "";
  shippingStateName = "";
  shipping_lines = [];
  listTaxRates = [];
  sameAddress = false;
  checkOutPageText = "Place Your Order";
  public device = '';
  public attributes = [];
  public headerHexColor = "#51688F";
  public headerHexColorContrast = "#ffffff";
  singlePostData: any;
  singleProductPageData = [];
  myOrderDetialPageData: { [k: string]: any; };
  storePageData = [];

  constructor(private http: HttpClient,
    public config: ConfigService,
    private storage: Storage,
    public loading: LoadingService,
    public appEventsService: AppEventsService,
    public platform: Platform,
    private spinnerDialog: SpinnerDialog,
    private oneSignal: OneSignal,
    public alertCtrl: AlertController,
    private toastCtrl: ToastController,
    public iab: InAppBrowser,
    private applicationRef: ApplicationRef,
    public splashScreen: SplashScreen, ) {



    this.http.get('assets/i18n/' + localStorage.languageCode + ".json").subscribe((data: any) => {
      this.translationListArray = data;
      this.applicationRef.tick();
    });

    let settingsLoaded = this.appEventsService.subscribe("settingsLoaded");
    settingsLoaded.subscriptions.add(settingsLoaded.event.subscribe(data => {
      this.onStart();
    }));

    //getting translation of the 
    this.translateString(this.checkOutPageText).then((res: string) => { this.checkOutPageText = res; });

    //update settings before calling

    //getting recent viewed items from local storage
    storage.get('customerData').then((val) => {
      if (val != null || val != undefined) this.customerData = val;
    });

    //getting recent viewed items from local storage
    storage.get('recentViewedProducts').then((val) => {
      if (val != null) this.recentViewedProducts = val;
    });

    //getting cart from local storage
    storage.get('cartProducts').then((val) => {
      if (val != null) this.cartProducts = val;
      this.cartTotalItems();
    });
    this.cartTotalItems();

    //getting wishList items from local storage
    storage.get('wishListProducts').then((val) => {
      if (val != null) this.wishListProducts = val;
      // console.log(val);
    });
    //---------------- end -----------------
  }
  public splashScreenHide = false;
  hideSplashScreen() {
    if (this.platform.is('cordova')) {
      if (!this.splashScreenHide) { this.splashScreen.hide(); this.splashScreenHide = true; }
    }
  }
  onStart() {
    //banners
    this.config.getWithUrl(this.config.url + '/api/appsettings/get_all_banners/?insecure=cool').then((data: any) => {
      this.banners = data.data;
    });
    // //getting tab 1 products?status=publish
    this.config.getWoo("products?status=publish" + "&" + this.config.productsArguments).then((data: any) => {
      this.tab1 = data
      this.applicationRef.tick();
    });
    //getting tab 2
    this.config.getWoo("products?on_sale=true&status=publish" + "&" + this.config.productsArguments).then((data: any) => {
      this.tab2 = data
      this.applicationRef.tick();
    });
    //getting tab 3
    this.config.getWoo("products?featured=true&status=publish" + "&" + this.config.productsArguments).then((data: any) => {
      this.tab3 = data
      this.applicationRef.tick();
    });
    let url = this.config.url + '/wp-json/wp/v2/pages/';
    if (this.config.appSettings.about_page_id != undefined) {
      let ids = this.config.appSettings.about_page_id + "," + this.config.appSettings.refund_page_id + "," + this.config.appSettings.terms_page_id + "," + this.config.appSettings.privacy_page_id;
      url = url + '?include=' + ids;
    }
    //content pages
    this.config.getWithUrl(url).then((data: any) => {
      let d = data;
      for (let value of d) {
        if (this.config.appSettings.about_page_id == value.id) { this.config.aboutUs = value.content.rendered; }
        if (this.config.appSettings.refund_page_id == value.id) this.config.refundPolicy = value.content.rendered;
        if (this.config.appSettings.terms_page_id == value.id) this.config.termServices = value.content.rendered;
        if (this.config.appSettings.privacy_page_id == value.id) this.config.privacyPolicy = value.content.rendered;
      }
    });
    //getting all allCategories
    this.getAllCategories(1);
  }

  getVendorList() {
    if (this.config.showVendorInfo) {
      this.config.getWithUrl(this.config.url + "/api/appsettings/get_featured_dokan_vendors_list/?insecure=cool").then((data: any) => {
        if (this.vendors[0] == 1) this.vendors = [];

        for (let d of data.data) {
          if (d.banner == false)
            d.banner = "assets/placeholder-v.png";//;
          if (d.meta[0].store_name != '') d.name = d.meta[0].store_name;
          else d.name = d.first_name + " " + d.last_name;
          //console.log(d.name);
          this.vendors.push(d);
        }
        this.applicationRef.tick();
      });
      //console.log("dokan is enabled");
    }
    else if (this.config.showWcVendorInfo) {
      this.config.getWithUrl(this.config.url + "/api/appsettings/get_featured_wcvendors_list/?insecure=cool").then((data: any) => {
        if (this.vendors[0] == 1) this.vendors = [];
        //console.log(data.data)
        if (data.data == null) data.data = [];
        for (let d of data.data) {
          if (d.banner == false)
            d.banner = "assets/placeholder-wc.png";//;
          if (d.meta.pv_shop_name != '') d.name = d.meta.pv_shop_name;
          else d.name = d.first_name + " " + d.last_name;
          // console.log(d.name);
          this.vendors.push(d);
        }
        this.applicationRef.tick();
      });
    }
  }
  getAllCategories(page) {
    //if (dat.length != 0) { this.getAllTaxRates(page + 1); }
    this.config.getWoo("products/categories?per_page=50&page=" + page + "&" + this.config.productsArguments).then((data: any) => {
      let dat = data
      if (this.allCategories[0] == 1) {
        this.allCategories = [];
        this.categories = [];
        this.subCategories = [];
      }
      for (let value of dat) {
        if (value.count != 0) {
          value.name = this.removeHtmlEntites(value.name);
          this.allCategories.push(value);
          if (value.parent == 0)
            this.categories.push(value);
          else
            this.subCategories.push(value);
        }
      }
      if (dat.length == 50) { this.getAllCategories(page + 1); }
      if (dat.length == 0) { this.appEventsService.publish("openDeepLink", "openCategoryInShop"); }




      this.applicationRef.tick();
    });
  }

  removeHtmlEntites(value) {
    var multiple = {
      '&nbsp;': ' ',
      '&lt;': '<',
      '&gt;': '>',
      '&amp;': '&',
      '&quot;': '"',
      '&apos;': '\'',
      '&cent;': '¢',
      '&pound;': '£',
      '&yen;': '¥',
      '&euro;': '€',
      '&copy;': '©',
      '&reg;': '®',
      '&#160;': ' ',
      '&#60;': '<',
      '&#62;': '>',
      '&#38;': '&',
      '&#34;': '"',
      '&#39;': '\'',
      '&#162;': '¢',
      '&#163;': '£',
      '&#165;': '¥',
      '&#8364;': '€',
      '&#169;': '©',
      '&#174;': '®',

    };
    for (var char in multiple) {
      var before = char;
      var after = multiple[char];
      var pattern = new RegExp(before, 'g');
      value = value.replace(pattern, after);
    }
    return value;
  }

  //adding into recent array products
  addToRecent(p) {
    let found = false;
    for (let value of this.recentViewedProducts) {
      if (value.id == p.id) { found = true; }
    }
    if (found == false) {
      this.recentViewedProducts.push(p);
      this.storage.set('recentViewedProducts', this.recentViewedProducts);
    }
  }
  //removing from recent array products
  removeRecent(p) {
    this.recentViewedProducts.forEach((value, index) => {
      if (value.id == p.id) {
        this.recentViewedProducts.splice(index, 1);
        this.storage.set('recentViewedProducts', this.recentViewedProducts);
      }
    });
  }
  //adding into cart array products
  addToCart(product, variation, quantity: any, metaData: any) {

    if (!this.checkCart(product, quantity)) return 0;
    if (this.alreadyInCart(product, variation, quantity)) return 0;

    var p: { [k: string]: any } = {};
    p.product_id = product.id;
    p.name = product.name;
    if (quantity == null || quantity == "null") p.quantity = 1;
    else { p.quantity = quantity; console.log(quantity); console.log("quantity not null"); };
    var seconds = new Date().getTime();
    p.cart_id = product.id + seconds;
    if (product.images.length != 0)
      p.image = product.images[0].src;
    else p.image = "assets/woocommerce-placeholder.png"
    //console.log(p.image)
    p.stock_quantity = product.stock_quantity;
    p.tax_class = product.tax_class;
    p.tax_status = product.tax_status;
    p.price = product.price;
    p.price_html = product.price_html;
    p.subtotal = parseFloat(product.price) * parseInt(p.quantity);
    p.total = parseFloat(product.price) * parseInt(p.quantity);
    p.on_sale = product.on_sale;
    p.categories = product.categories;

    if (metaData != null) p.meta_data = metaData;
    p.sold_individually = product.sold_individually;

    if (product.type == 'variable' && variation != null) {
      p.variation_id = variation.id;
      p.price = parseFloat(variation.price);
      p.subtotal = parseFloat(variation.price) * parseInt(p.quantity);
      p.total = parseFloat(variation.price) * parseInt(p.quantity);
      p.name = variation.name;
      p.stock_quantity = variation.stock_quantity;
      p.tax_status = variation.tax_status;
      if (variation.image) p.image = variation.image.src;
      else p.image = variation.images[0].src;

    }
    console.log(p);
    this.cartProducts.push(p);
    this.storage.set('cartProducts', this.cartProducts);

    this.cartTotalItems();
    this.applicationRef.tick();
    // console.log(this.cartProducts);
    //console.log(this.cartProducts);
    this.toast("Added To Cart!");
  }
  checkCart(p, quantity) {
    let name = null;
    let onlyOneAllowed = true;
    let quantityCheck = true;
    //check for only one item is allowed
    for (let value of this.cartProducts) {
      if (value.sold_individually == true && p.id == value.product_id) { onlyOneAllowed = false; name = value.name; }
    }
    if (onlyOneAllowed == false) this.showAlertWithTitle(name, "Only One Item Allowed");

    //check for product quantity
    if (quantity == null) quantity = 1;

    if (p.stock_quantity == null || p.stock_quantity > quantity) quantityCheck = true;
    else if (p.stock_quantity < quantity) {
      quantityCheck = false;
      this.showAlert("Product Quantity is Limited!");
    }

    if (onlyOneAllowed && quantityCheck) return true;
    else return false;
  }
  alreadyInCart(p, vId, quantity) {

    let count = 0;
    for (let value of this.cartProducts) {
      //console.log(value.variation_id + "  " + vId.id + "  " + value.product_id + "  " + p.id);
      if (p.type != 'variable' && value.product_id == p.id) { count++; value.quantity = parseInt(value.quantity) + parseInt(quantity); }
      else if (value.product_id == p.id && value.variation_id == vId.id) { count++; value.quantity = parseInt(value.quantity) + parseInt(quantity); }
    }


    this.storage.set('cartProducts', this.cartProducts);
    this.cartTotalItems();
    if (count != 0) return true;
    else return false;
  }
  //removing from recent array products
  removeCart(p) {
    //console.log(value);
    this.cartProducts = p;
    this.storage.set('cartProducts', this.cartProducts);
    // this.storage.get('cartProducts').then((val) => {
    //   //console.log(val);
    // });
    this.cartTotalItems();
  }
  emptyCart() {
    this.cartProducts = [];
    this.storage.set('cartProducts', this.cartProducts);
    this.cartTotalItems();
  }
  emptyRecentViewed() {
    this.recentViewedProducts = [];
    this.storage.set('recentViewedProducts', this.recentViewedProducts);
  }

  //Function calcualte the total items of cart
  cartTotalItems = function () {
    this.appEventsService.publish('cartChange');
    let total = 0;
    for (let value of this.cartProducts) {
      total += parseInt(value.quantity);
    }
    this.cartquantity = total;
    // this.applicationRef.tick();
    return total;
  };
  productsTotal() {
    let total = 0;
    for (let value of this.cartProducts) {
      total = total + parseFloat(value.total);
    }
    return total;
  }
  removeWishList(p) {
    this.wishListProducts.forEach((value, index) => {
      if (value.id == p.id) {
        this.wishListProducts.splice(index, 1);
        this.storage.set('wishListProducts', this.wishListProducts);
      }
    });
    this.appEventsService.publish('wishListUpdate', { id: p.id, value: 0 });
    this.toast("Removed From Wish List!");
    this.applicationRef.tick();
  }
  addWishList(p) {
    this.wishListProducts.push(p);
    this.storage.set('wishListProducts', this.wishListProducts);
    this.appEventsService.publish('wishListUpdate', { id: p.id, value: 1 });
    this.toast("Added To Wish List!");
    this.applicationRef.tick();
  }


  login(data) {
    console.log(data);
    this.customerData = data;
    this.storage.set('customerData', this.customerData);
    this.subscribePush();
    this.appEventsService.publish("updateSideMenu", '');
  }
  logOut() {
    this.loading.autoHide(500);
    this.customerData = {};
    this.storage.set('customerData', this.customerData);
    this.resetData();
    this.appEventsService.publish("updateSideMenu", '');
    // this.fb.logout();
  }
  //============================================================================================
  //getting token and passing to server
  subscribePush() {
    if (this.platform.is('cordova') && this.config.onesignalAppId != "") {
      this.oneSignal.startInit(this.config.onesignalAppId, this.config.onesignalSenderId);
      this.oneSignal.endInit();
      this.oneSignal.getIds().then((data: any) => {
        // alert("registration" + data.userId);
        // console.log(data.userId);
        //this.storage.set('registrationId', token);
      })
    }
  }


  showAd() {
    if (this.platform.is('cordova')) {
      this.appEventsService.publish('showAd', "");
    }
  }
  orderComplete() {
    this.cartProducts = [];
    this.couponArray = [];
    this.storage.set('cartProducts', []);
    this.shipping_lines = [];
    this.cartTotalItems();
    console.log("order complete");
  }
  // <!-- 2.0 updates -->
  onePageCheckOut() {

    let customer_id = 0;
    let token = null;
    let biling = this.billing;
    let shiping = this.shipping;

    if (this.customerData.id != null) {
      customer_id = this.customerData.id;
      token = this.customerData.cookie;
      biling = this.customerData.billing
      shiping = this.customerData.shipping;
    }
    let onePage = this.config.checkOutPage;

    var data = {
      token: token,
      billing_info: biling,
      shipping_info: shiping,
      products: this.getProducts(),
      //shipping_ids: this.shipping_lines,
      coupons: this.getCoupons(),
      customer_note: "",
      customer_id: customer_id,
      //sameAddress: this.sameAddress
      one_page: onePage,
      platform: this.device,
    };
    console.log(data);
    this.openCheckoutWebview(data);

  }

  //=================================================================================================================================
  // <!-- 2.0 updates -->
  getProducts() {
    var data = [];
    for (let v of this.cartProducts) {
      var obj = { quantity: v.quantity, product_id: v.product_id, total: v.total.toString() };
      if (v.variation_id) Object.assign(obj, { variation_id: v.variation_id })
      //if (v.meta_data) Object.assign(obj, { meta_data: v.meta_data })
      data.push(obj);
    }
    return data;
  }
  //=================================================================================================================================
  //Object.assign(c, data
  // <!-- 2.0 updates -->
  getCoupons() {
    var data = [];
    for (let v of this.couponArray) {
      data.push({ code: v.code, discount: v.amount });
    }
    return data;
  }
  //=================================================================================================================================
  // <!-- 2.0 updates -->
  getShippingLines() {
    var data = [];
    for (let v of this.shipping_lines) {
      data.push({ code: v.code, discount: v.amount });
    }
    return data;
  }
  resetData() {
    this.billing = {
      first_name: '',
      last_name: '',
      company: '',
      address_1: '',
      address_2: '',
      city: '',
      state: '',
      postcode: '',
      country: '',
      email: '',
      phone: ''
    };
    this.billingCountryName = "";
    this.billingStateName = "";
    this.shipping = {
      first_name: '',
      last_name: '',
      company: '',
      address_1: '',
      address_2: '',
      city: '',
      state: '',
      postcode: '',
      country: ''
    };
    this.shippingCountryName = "";
    this.shippingStateName = "";
  }
  toast(msg) {
    this.translateString(msg).then(async (res: string) => {
      const toast = await this.toastCtrl.create({
        message: res,
        duration: 2500,
        position: 'bottom'
      });
      toast.present();
    });
  }
  uploadDataToServer(data) {
    this.loading.show();
    // var uri = encodeURIComponent(JSON.stringify(data));
    // let d = { "order_link": data };
    return new Promise(resolve => {
      this.http.post(this.config.url + '/api/appsettings/ionic_data_link/?insecure=cool', data).subscribe(dat => {
        console.log(dat);
        resolve(dat);
        this.loading.hide();
      });

    });
  }
  //=================================================================================================================================
  openCheckoutWebview(data) {

    // let options: InAppBrowserOptions = {
    //   toolbarposition: "top",
    //   toolbarcolor: this.headerHexColor,
    //   location: "yes",
    //   hideurlbar: "yes",
    //   hidenavigationbuttons: "yes",
    //   zoom: "no",
    //   //usewkwebview: "yes",
    //   closebuttoncolor: this.headerHexColorContrast
    // }


    let options: InAppBrowserOptions = {
      toolbarposition: "top",
      location: 'yes',//Or 'no' 
      clearcache: 'yes',
      clearsessioncache: 'yes',
      hideurlbar: "yes",
      zoom: 'no',//Android only ,shows browser zoom controls 
      closebuttoncolor: this.headerHexColorContrast,
      toolbarcolor: this.headerHexColor,
      toolbar: 'yes', //iOS only 
    };
    console.log(options);
    this.uploadDataToServer(data).then((id) => {
      console.log("id from data = " + id);
      const b = this.iab.create(this.config.url + "/mobile-checkout/?order_id=" + id, '_blank', options);
      let orderPlaced = false;
      b.on('loadstart').subscribe(res => {
        this.translateString('Loading').then((res: string) => {
          this.spinnerDialog.show("", res, true, { overlayOpacity: 1.00 });
          setTimeout(() => {
            this.spinnerDialog.hide();
          }, 5000);
        });

        if (res.url.indexOf('order-received') != -1) {
          console.log(res.url);
          orderPlaced = true;
          b.close();
          this.appEventsService.publish('openThankYouPage', "");
        } else if (res.url.indexOf('cancel_order=true') != -1) {
          b.close();
        }

      });
      b.on('loadstop').subscribe(res => {
        console.log('loadstop');
      });

      b.on('exit').subscribe(res => {
        if (orderPlaced) this.appEventsService.publish('openThankYouPage', "");
      });
    });
  }

  checkAvatar() {
    let result = "";
    if (this.customerData.id != null) {
      if (this.customerData.avatar_url.indexOf('693fe9695abfa1fd64191cdd36fdc310') != -1) {
        result = "avatar";
      }
      else if (this.customerData.avatar_url.indexOf('693fe9695abfa1fd64191cdd36fdc310') == -1) {
        result = "image"
      }
    }
    else result = "false"
    return result;
  }
  getNameFirstLetter() {
    return this.customerData.first_name.charAt(0);
  }
  //categories page

  getCategoriesPageItems(parent) {
    let c = [];
    if (parent == undefined)
      c = this.categories;
    else {
      for (let v of this.allCategories) {
        if (v.parent == parent) {
          c.push(v);
        }
      }
    }
    return c;
  }

  // translation services
  translateString(value) {
    return new Promise(resolve => {
      resolve(this.translationListArray[value]);
    });
  }
  translateArray(value) {
    return new Promise(resolve => {
      let tempArray = [];
      value.forEach(element => {
        if (this.translationListArray[element] != undefined)
          tempArray[element] = this.translationListArray[element];
        else
          tempArray[element] = element;
      });
      resolve(tempArray);
    });
  }
  //=================================================

  showAlert(text) {
    this.translateArray([text, "ok", "Alert"]).then(async (res) => {
      console.log(res);
      const alert = await this.alertCtrl.create({
        header: res["Alert"],
        message: res[text],
        buttons: [res["ok"]]
      });
      await alert.present();
    });
  }

  showAlertWithTitle(text, title) {
    this.translateArray([text, "ok", title]).then(async (res) => {
      let alert = await this.alertCtrl.create({
        header: res[title],
        message: res[text],
        buttons: [res["ok"]]
      });
      await alert.present();
    });
  }


  //==================================== functions to invert the hexcolor =============================


  invertColor(hex) {
    if (hex.indexOf('#') === 0) {
      hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
      throw new Error('Invalid HEX color.');
    }
    // invert color components
    var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
      g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
      b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
    // pad each with zeros and return
    return '#' + this.padZero(r) + this.padZero(g) + this.padZero(b);
  }

  padZero(str) {
    let len = 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
  }

  getBrowserHeaderColorFromAppHeader() {
    var toolbar = document.getElementsByTagName("ion-toolbar");
    var style = getComputedStyle(toolbar[0]);
    var color = style.getPropertyValue("--ion-color-primary") || undefined;
    this.headerHexColorContrast = style.getPropertyValue("--ion-color-primary-contrast") || undefined;
    this.headerHexColor = color.toString();
    if (this.headerHexColorContrast == undefined)
      this.headerHexColorContrast = this.invertColor(this.headerHexColor).toString();

    this.headerHexColorContrast = this.headerHexColorContrast.trim();
    this.headerHexColor = this.headerHexColor.trim();
    console.log("browser Header Colors", this.headerHexColor, this.headerHexColorContrast);
  }
}
