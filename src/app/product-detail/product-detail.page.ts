import { Component, OnInit, ApplicationRef, ViewEncapsulation } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { ConfigService } from 'src/providers/config/config.service';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { LoadingService } from 'src/providers/loading/loading.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


import { HttpClient } from '@angular/common/http';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Storage } from '@ionic/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { DomSanitizer } from '@angular/platform-browser';
import { AppEventsService } from 'src/providers/app-events/app-events.service';

@Component({
  selector: 'app-product-detail',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  public product;

  selectAttributes = new Array;
  selectedVariation = null;
  quantity = 1;
  discount_price;
  product_price;
  releatedItems = []; // <!-- 2.0 updates -->
  reviews = [];// <!-- 2.0 updates -->
  ratingStarsValue = null;// <!-- 2.0 updates -->
  allVariableAttributes = [];
  tempAllVariableAttributes = [];
  attributes = [];
  public isLiked = 0;
  public wishArray = [];
  public disableCartButton = false;
  public variations = new Array;
  public groupProducts = new Array;
  public variationPrice = null;
  public loaderWcVendorInfo = false;
  public wcVendorInfo: any;
  public loaderProductVariations = false;
  pId: any;
  sliderConfigReleatedItems = {
    slidesPerView: this.config.productSlidesPerPage,
    spaceBetween: 0
  }
  sliderConfig = {
    zoom: true
  }

  public setDefaultFirstTime = true;

  constructor(
    public navCtrl: NavController,
    public config: ConfigService,
    public shared: SharedDataService,
    public modalCtrl: ModalController,
    public loading: LoadingService,
    public iab: InAppBrowser,
    public appEventsService: AppEventsService,
    private storage: Storage,
    public http: HttpClient,
    private photoViewer: PhotoViewer,
    private applicationRef: ApplicationRef,
    private socialSharing: SocialSharing,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private router: Router) {
    //this.removeDiacritics("KOLOR");
    this.pId = this.activatedRoute.snapshot.paramMap.get('id');
    this.product = JSON.parse(JSON.stringify(this.getProductData(this.pId)));
    this.attributes = JSON.parse(JSON.stringify(this.product.attributes));


    let wishListUpdate = this.appEventsService.subscribe("wishListUpdate");
    wishListUpdate.subscriptions.add(wishListUpdate.event.subscribe(data => {
      if (data.id == this.product.id) this.isLiked = data.value;
    }));


    this.storage.get('wishListProducts').then((val) => {
      this.wishArray = val;
      this.checkWishList();
    });
    this.enableDisbaleCartButton();
    if (this.product.type == 'variable') { this.getVariations(); }
    if (this.product.type == 'grouped') { this.getGroupProducts(); }
    this.getRelatedItems();
    this.getProductReviews();
    this.product.short_description = this.sanitizer.bypassSecurityTrustHtml(this.product.short_description);
    if (this.config.showWcVendorInfo) this.getWcVendorInfo();
  }
  checkOptionSelected(value, key, ind) {
    let color = "primary";
    this.selectAttributes.forEach(e => {
      if (this.removeDiacritics(e.key) == this.removeDiacritics(key) &&
        this.removeDiacritics(e.value) == this.removeDiacritics(value)
      )
        color = "secondary";
    });
    return color;
  }
  ionViewWillEnter() {
    this.enableDisbaleCartButton();
  }
  zoomImage(img) {
    this.photoViewer.show(img);
  }
  getProductData(id) {
    let p;
    this.shared.singleProductPageData.forEach(element => {
      if (element.id == id) {
        p = element;
      }
    });
    return p;
  }
  ngOnInit() {

  }
  //=================================================================================================================================================================================
  getGroupProducts() {
    //this.loading.show();
    let count = 0;
    for (let value of this.product.grouped_products) {
      count++;
      this.config.getWoo("products/" + value + "?" + this.config.productsArguments).then(data => {
        this.groupProducts.push(Object.assign(data, { quantity: 0 }));
        this.applicationRef.tick();
      });
      if (count == this.product.grouped_products.length) {
        //this.loading.hide();
      }
    }
  }
  //===============================================================================================================================
  getVariations() {
    // let count = 0;
    // this.loaderProductVariations = true;
    // this.config.getWoo("products/" + this.product.id + "/variations?per_page=" + this.product.variations.length).then((data: any) => {
    //   let d = data
    //   this.variations = d;
    //   this.variations.forEach(element => {
    //     this.initializeAllVariationAttributes(element);
    //   });
    //   this.loaderProductVariations = false;

    //   this.product.default_attributes.forEach((e, ind) => {
    //     this.fillAttributes(e.option, e.name, ind);
    //   });
    //   this.setDefaultFirstTime = false;

    // });

    let count = 0;
    this.loaderProductVariations = true;
    for (let value of this.product.variations) {
      this.config.getWoo("products/" + value + "?" + this.config.productsArguments).then(data => {
        count++;
        let d = data
        this.variations.push(d);
        this.initializeAllVariationAttributes(d);
        //console.log(count);
        if (count == this.product.variations.length) {
          this.loaderProductVariations = false;

          this.product.default_attributes.forEach((e, ind) => {
            this.fillAttributes(e.option, e.name, ind);
          });
        }
      });
    }
  }
  //===============================================================================================================================
  initializeAllVariationAttributes(p) {
    let ob: { [k: string]: any } = {};
    ob.id = p.id;
    ob.select = false;
    for (let val of this.attributes) {
      if (val.variation == false) continue;
      ob[val.name] = 'any';
      for (let v2 of p.attributes) {
        if (this.removeDiacritics(val.name) == this.removeDiacritics(v2.name))
          ob[val.name] = this.removeDiacritics(v2.option);
      }
    }
    this.allVariableAttributes.push(ob);
    if (this.allVariableAttributes.length == this.product.variations.length) this.sortAllVariationAttributes();
    console.log(this.allVariableAttributes);
  }

  checkDefaultAttribute(value) {
    if (this.setDefaultFirstTime) {
      let a = false;
      const new_str = this.removeDiacritics(value);
      this.product.default_attributes.forEach(element => {
        //console.log(element.option+" "+ value);
        const str = value;
        if (this.removeDiacritics(element.option) == new_str) { a = true; };
        //console.log(element.option + " " + new_str);
      });
      //console.log("slected default " + value + " " + a);
      //console.log(value);
      return a;
    }
  }

  //===============================================================================================================================
  sortAllVariationAttributes() {
    let array = [];
    for (let val of this.product.variations) {
      for (let v2 of this.allVariableAttributes) {
        if (val == v2.id) array.push(v2);
      }
    }
    this.allVariableAttributes = array;
    //console.log(this.allVariableAttributes);
  }
  availableOption(name, val) {
    if (this.selectAttributes.length == 0) return true;
    for (let value of this.tempAllVariableAttributes) {
      if (value.select == true) {
        if (value[name] == 'any') return true;
        if (this.removeDiacritics(value[name]) == this.removeDiacritics(val)) return true;
      }
    }
  }


  //checking avalability of option in all variations
  sortAttributes() {
    this.tempAllVariableAttributes = JSON.parse(JSON.stringify(this.allVariableAttributes));
    let count = 0;
    //console.log(this.tempAllVariableAttributes);
    //console.log(this.selectAttributes);
    for (let x of this.selectAttributes) {
      for (let y of this.tempAllVariableAttributes) {
        //converting object into array
        let keyOfY = "";
        var _this = this;
        Object.keys(y).forEach(function (yKeys) {
          let v1 = _this.removeDiacritics(x.key);
          let v2 = _this.removeDiacritics(yKeys);
          if (v1 == v2) {
            keyOfY = yKeys;
            //console.log(x.key + " found  " + yKeys);
          }
        });
        if (this.removeDiacritics(y[keyOfY]) == this.removeDiacritics(x.value) || y[keyOfY] == 'any') {
          if (count == 0) { y.select = true; }
          else {
            if (y.select == true) y.select = true;
            else y.select = false;
          }
          //console.log(y[x.key] + "   ---  " + x.value);
        }
        else y.select = false;

      }
      count++;
    }
    //console.log("attributes after select");
    console.log(this.tempAllVariableAttributes);
  }



  // reset attributes and selection
  resetAttributes() {
    //console.log("reset att");
    this.tempAllVariableAttributes = JSON.parse(JSON.stringify(this.allVariableAttributes));
    this.selectAttributes = [];
    this.attributes = JSON.parse(JSON.stringify(this.product.attributes));
    this.selectedVariation = null;
    this.enableDisbaleCartButton();
    this.product = JSON.parse(JSON.stringify(this.getProductData(this.pId)));
  }
  //===============================================================================================================================
  getAttributesLength() {
    let count = 0;
    for (let a of this.attributes) {
      if (a.variation) count++;
    }
    return count;
  }

  //===============================================================================================================================
  enableDisbaleCartButton() {
    // if (this.product.type == 'external') this.disableCartButton = true;
    // else
    if (this.product.type != 'variable' && this.product.stock_status == 'instock') this.disableCartButton = false;
    else if (this.selectAttributes.length == this.getAttributesLength() && this.product.stock_status == 'instock')
      this.disableCartButton = false; else this.disableCartButton = true;
    //console.log("disbale cart button " + this.disableCartButton);
    this.applicationRef.tick();
  }
  //===============================================================================================================================
  checkWishList() {
    //getting wishList items from local storage
    let count = 0;
    if (this.wishArray != null)
      for (let value of this.wishArray) {
        if (value.id == this.product.id) count++;
      }
    if (count != 0) this.isLiked = 1; else this.isLiked = 0;

  }
  //===============================================================================================================================
  openProduct() {
    this.loading.autoHide(2000);
    this.iab.create(this.product.external_url, "blank");
  }

  addToCartProduct() {
    let total = 0;

    //this.loading.autoHide(500);
    //console.log(this.selectAttributes);
    if (this.product.type == 'variable') {
      this.shared.addToCart(this.product, this.selectedVariation, this.quantity, this.selectAttributes);
      this.navCtrl.pop();
      //this.navCtrl.push(CartPage);
    }
    if (this.product.type == 'simple') {
      this.shared.addToCart(this.product, null, this.quantity, null);
      this.navCtrl.pop();
      //this.navCtrl.push(CartPage);
    }
    if (this.product.type == 'grouped') {

      for (let a of this.groupProducts) {
        total = total + a.quantity;
      }
      if (total == 0) this.shared.translateString("Please Add Quantity").then((res) => { this.shared.showAlert(res); });
      else
        for (let value of this.groupProducts) {
          if (value.quantity != 0) this.shared.addToCart(value, null, value.quantity, null);
        }
      if (total != 0) {
        this.navCtrl.pop();
        //this.navCtrl.push(CartPage);
      }
    }
  }

  //===============================================================================================================================
  //function adding attibute into array
  fillAttributes = function (val, key, position) {
    //console.log(key + "  " + val + " " + position);
    let count = 0;
    this.selectAttributes.forEach((value, index) => {
      if (value.position == position) { value.value = val; count++; }
      if (val == 'choose' && value.position == position) {
        this.selectAttributes.splice(index, 1); console.log("splice " + value.key + "  " + value.value);
      }
      if (this.removeDiacritics(value.key) == this.removeDiacritics(key)) {
        value.value = val; count++;
      }
    });

    if (count == 0 && val != "choose")
      this.selectAttributes.push({
        key: this.removeDiacritics(key),
        value: this.removeDiacritics(val),
        position: position
      });
    this.sortAttributes();
    if (this.getAttributesLength() == this.selectAttributes.length)
      this.selectVariation();
    if (this.selectAttributes.length != this.getAttributesLength()) {
      this.updateProductDetail(JSON.parse(JSON.stringify(this.getProductData(this.pId))));
      this.variationPrice = null;
    }
    this.enableDisbaleCartButton();
    // console.log("onFill end");
    // console.log(this.selectAttributes);
  }

  //===============================================================================================================================
  selectVariation() {
    console.log(this.tempAllVariableAttributes);
    let pId = null;
    for (let i of this.tempAllVariableAttributes) {
      if (i.select == true) { pId = i.id; break; }
    }
    for (let i of this.variations) {
      if (i.id == pId) { this.selectedVariation = i; break; }
    }
    if (this.selectAttributes != null)
      this.updateProductDetail(this.selectedVariation);
  }
  //===============================================================================================================================
  updateProductDetail(p) {
    if (p.images) {
      this.product.images = p.images;
    }
    else {
      let pImges = [];
      pImges.push(p.image);
      //console.log(pImges);
      this.product.images = this.removeDuplication(pImges.concat(this.product.images));
    }
  }
  removeDuplication(array) {
    var a = array.concat();
    // console.log(a);
    for (var i = 0; i < a.length; ++i) {
      for (var j = i + 1; j < a.length; ++j) {
        if (a[i].src === a[j].src)
          a.splice(j--, 1);
      }
    }
    //console.log(a);
    return a;
  }
  //==============================================================================================================================================  
  //calculating total price  
  calculatingTotalPrice = function () {
    var price = parseFloat(this.product.products_price.toString());
    if (this.product.discount_price != null || this.product.discount_price != undefined)
      price = this.product.discount_price;
    var totalPrice = this.shared.calculateFinalPriceService(this.attributes) + parseFloat(price.toString());

    if (this.product.discount_price != null || this.product.discount_price != undefined)
      this.discount_price = totalPrice;
    else
      this.product_price = totalPrice;
    //  console.log(totalPrice);
  };
  //===============================================================================================================================
  checkProductNew() {
    var pDate = new Date(this.product.date_created);
    var date = pDate.getTime() + this.config.newProductDuration * 86400000;
    var todayDate = new Date().getTime();
    if (date > todayDate)
      return true;
    else
      return false
  }
  //===============================================================================================================================
  qunatityGroupPlus = function (p) {
    //console.log(p.quantity);
    if (p.stock_quantity == null || p.stock_quantity > p.quantity) p.quantity++;
    else if (p.stock_quantity == p.quantity)
      this.shared.translateString("Product Quantity is Limited!").then((res) => { this.shared.showAlert(res); });
    this.applicationRef.tick();
    // console.log(p);
  }
  //===============================================================================================================================
  //function decreasing the quantity
  qunatityGroupMinus = function (p) {
    if (p.quantity != 0) {
      p.quantity--;
    }
    this.applicationRef.tick();
  }
  //===============================================================================================================================
  qunatityPlus = function () {
    if (this.product.stock_quantity == null || this.product.stock_quantity > this.quantity) this.quantity++;
    else if (this.product.stock_quantity == this.quantity)
      this.shared.translateString("Product Quantity is Limited!").then((res) => { this.shared.showAlert(res); });
    this.applicationRef.tick();
  }
  //===============================================================================================================================
  //function decreasing the quantity
  qunatityMinus = function () {
    if (this.quantity != 1) {
      this.quantity--;
    }
    this.applicationRef.tick();
  }

  quantityChange() {
    console.log("quantity updated");

    if (this.product.stock_quantity == null) { console.log("quantity is unlimited"); }
    else if (this.product.stock_quantity > this.quantity) { console.log("quantity is less than stock quantity"); }
    else if (this.product.stock_quantity < this.quantity) {
      this.shared.translateString("Product Quantity is Limited!").then((res) => {
        if (this.product.stock_quantity == null)
          this.quantity = 1;
        else
          this.quantity = parseInt(this.product.stock_quantity);
        this.shared.showAlert(res);
      })
    }
    if (this.quantity == null || this.quantity == 0 || this.quantity < 0) { this.quantity = 1; }
    this.applicationRef.tick();
  }

  //===============================================================================================================================
  showProductDetail(id) {

    this.loading.show();
    this.config.getWoo("products/" + id + "?" + this.config.productsArguments).then((data: any) => {
      //this.shared.showAlert("loaded");
      this.loading.hide();
      let p = data
      this.shared.singleProductPageData.push(p);
      this.navCtrl.navigateForward(this.config.currentRoute + "/product-detail/" + p.id);
    }, err => {
      this.loading.hide();
      console.log(err);
    });

    this.shared.addToRecent(this.product);

  }
  //===============================================================================================================================
  share() {
    this.loading.autoHide(1000);
    // Share via email
    let img = "";
    if (this.product.images.length != 0)
      img = this.product.images[0].src
    this.socialSharing.share(
      this.product.name,
      this.product.name,
      img,
      this.product.permalink);
  }
  //===============================================================================================================================
  clickWishList() {

    if (this.isLiked == 0) { this.addWishList(); }
    else { this.removeWishList(); }
  }
  //===============================================================================================================================
  addWishList() {
    this.shared.addWishList(this.product);
  }
  //===============================================================================================================================
  removeWishList() {
    this.shared.removeWishList(this.product);
  }
  //===============================================================================================================================
  // <!-- 2.0 updates -->
  getRelatedItems() {
    this.config.getWoo("products/?include=" + this.product.related_ids + "&" + this.config.productsArguments).then((data: any) => {
      this.releatedItems = data
      this.applicationRef.tick();
    });
  }
  //===============================================================================================================================
  // <!-- 2.0 updates -->
  getProductReviews() {
    this.config.getWoo("products/reviews/?" + this.config.productsArguments + "&product=" + [this.pId]).then((data: any) => {
      this.reviews = data
      this.applicationRef.tick();
      this.totalRating();
    });
  }
  //===============================================================================================================================
  // <!-- 2.0 updates -->
  openReviewsPage() {
    this.navCtrl.navigateForward(this.config.currentRoute + "/reviews/" + this.product.id);
  }
  //===============================================================================================================================
  // <!-- 2.0 updates -->
  totalRating() {
    let total = 0;
    for (let value of this.reviews) {
      total = total + value.rating;
    }

    let result = (total / this.reviews.length) * 20;
    if (total == 0) result = 0;
    this.ratingStarsValue = result;
    this.applicationRef.tick();


    //return result;
  }

  //==============================================================
  openStore(value) {
    if (this.config.showWcVendorInfo) {

      this.shared.storePageData.push(value);
      let id;
      if (value.ID) id = value.ID; if (value.id) id = value.id;
      this.navCtrl.navigateForward(this.config.currentRoute + "/store/" + id);

    }
    else {
      this.loading.show();
      this.config.getWithUrl(this.config.url + "/wp-json/dokan/v1/stores/" + this.product.store.id).then((data: any) => {
        this.loading.hide();
        let d = data;

        this.shared.storePageData.push(d);
        let id;
        if (d.ID) id = d.ID; if (d.id) id = d.id;
        this.navCtrl.navigateForward(this.config.currentRoute + "/store/" + id);

        this.applicationRef.tick();
      });
    }
  }

  getWcVendorInfo() {
    this.loaderWcVendorInfo = true;
    this.config.getWithUrl(this.config.url + "/api/appsettings/get_vendor_info/?insecure=cool&product_id=" + this.product.id).then((data: any) => {
      this.loaderWcVendorInfo = false;
      let d = data;
      this.wcVendorInfo = data.data[0];
      this.applicationRef.tick();
    });
  }


  //=========================================================================================
  removeDiacritics(str) {
    var defaultDiacriticsRemovalMap = [
      { 'base': 'A', 'letters': /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g },
      { 'base': 'AA', 'letters': /[\uA732]/g },
      { 'base': 'AE', 'letters': /[\u00C6\u01FC\u01E2]/g },
      { 'base': 'AO', 'letters': /[\uA734]/g },
      { 'base': 'AU', 'letters': /[\uA736]/g },
      { 'base': 'AV', 'letters': /[\uA738\uA73A]/g },
      { 'base': 'AY', 'letters': /[\uA73C]/g },
      { 'base': 'B', 'letters': /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g },
      { 'base': 'C', 'letters': /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g },
      { 'base': 'D', 'letters': /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g },
      { 'base': 'DZ', 'letters': /[\u01F1\u01C4]/g },
      { 'base': 'Dz', 'letters': /[\u01F2\u01C5]/g },
      { 'base': 'E', 'letters': /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g },
      { 'base': 'F', 'letters': /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g },
      { 'base': 'G', 'letters': /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g },
      { 'base': 'H', 'letters': /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g },
      { 'base': 'I', 'letters': /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g },
      { 'base': 'J', 'letters': /[\u004A\u24BF\uFF2A\u0134\u0248]/g },
      { 'base': 'K', 'letters': /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g },
      { 'base': 'L', 'letters': /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g },
      { 'base': 'LJ', 'letters': /[\u01C7]/g },
      { 'base': 'Lj', 'letters': /[\u01C8]/g },
      { 'base': 'M', 'letters': /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g },
      { 'base': 'N', 'letters': /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g },
      { 'base': 'NJ', 'letters': /[\u01CA]/g },
      { 'base': 'Nj', 'letters': /[\u01CB]/g },
      { 'base': 'O', 'letters': /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g },
      { 'base': 'OI', 'letters': /[\u01A2]/g },
      { 'base': 'OO', 'letters': /[\uA74E]/g },
      { 'base': 'OU', 'letters': /[\u0222]/g },
      { 'base': 'P', 'letters': /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g },
      { 'base': 'Q', 'letters': /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g },
      { 'base': 'R', 'letters': /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g },
      { 'base': 'S', 'letters': /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g },
      { 'base': 'T', 'letters': /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g },
      { 'base': 'TZ', 'letters': /[\uA728]/g },
      { 'base': 'U', 'letters': /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g },
      { 'base': 'V', 'letters': /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g },
      { 'base': 'VY', 'letters': /[\uA760]/g },
      { 'base': 'W', 'letters': /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g },
      { 'base': 'X', 'letters': /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g },
      { 'base': 'Y', 'letters': /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g },
      { 'base': 'Z', 'letters': /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g },
      { 'base': 'a', 'letters': /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g },
      { 'base': 'aa', 'letters': /[\uA733]/g },
      { 'base': 'ae', 'letters': /[\u00E6\u01FD\u01E3]/g },
      { 'base': 'ao', 'letters': /[\uA735]/g },
      { 'base': 'au', 'letters': /[\uA737]/g },
      { 'base': 'av', 'letters': /[\uA739\uA73B]/g },
      { 'base': 'ay', 'letters': /[\uA73D]/g },
      { 'base': 'b', 'letters': /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g },
      { 'base': 'c', 'letters': /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g },
      { 'base': 'd', 'letters': /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g },
      { 'base': 'dz', 'letters': /[\u01F3\u01C6]/g },
      { 'base': 'e', 'letters': /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g },
      { 'base': 'f', 'letters': /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g },
      { 'base': 'g', 'letters': /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g },
      { 'base': 'h', 'letters': /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g },
      { 'base': 'hv', 'letters': /[\u0195]/g },
      { 'base': 'i', 'letters': /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g },
      { 'base': 'j', 'letters': /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g },
      { 'base': 'k', 'letters': /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g },
      { 'base': 'l', 'letters': /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g },
      { 'base': 'lj', 'letters': /[\u01C9]/g },
      { 'base': 'm', 'letters': /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g },
      { 'base': 'n', 'letters': /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g },
      { 'base': 'nj', 'letters': /[\u01CC]/g },
      { 'base': 'o', 'letters': /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g },
      { 'base': 'oi', 'letters': /[\u01A3]/g },
      { 'base': 'ou', 'letters': /[\u0223]/g },
      { 'base': 'oo', 'letters': /[\uA74F]/g },
      { 'base': 'p', 'letters': /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g },
      { 'base': 'q', 'letters': /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g },
      { 'base': 'r', 'letters': /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g },
      { 'base': 's', 'letters': /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g },
      { 'base': 't', 'letters': /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g },
      { 'base': 'tz', 'letters': /[\uA729]/g },
      { 'base': 'u', 'letters': /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g },
      { 'base': 'v', 'letters': /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g },
      { 'base': 'vy', 'letters': /[\uA761]/g },
      { 'base': 'w', 'letters': /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g },
      { 'base': 'x', 'letters': /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g },
      { 'base': 'y', 'letters': /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g },
      { 'base': 'z', 'letters': /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g }
    ];
    for (var i = 0; i < defaultDiacriticsRemovalMap.length; i++) {
      str = str.replace(defaultDiacriticsRemovalMap[i].letters, defaultDiacriticsRemovalMap[i].base);
    }
    return str.toUpperCase();

  }
}
