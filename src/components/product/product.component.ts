import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

import { ToastController, ModalController, NavController } from '@ionic/angular';
import { ConfigService } from 'src/providers/config/config.service';

import { LoadingService } from 'src/providers/loading/loading.service';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage';
import { AppEventsService } from 'src/providers/app-events/app-events.service';
@Component({
  selector: 'app-product',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  @Input('data') p;//product data
  @Input('type') type;
  public isLiked = 0;
  public wishArray = [];
  cartQuantity = 0;
  constructor(
    public config: ConfigService,
    public shared: SharedDataService,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public appEventsService: AppEventsService,
    private storage: Storage,
    public loading: LoadingService,

  ) {

    let wishListUpdate = this.appEventsService.subscribe("wishListUpdate");
    wishListUpdate.subscriptions.add(wishListUpdate.event.subscribe(data => {
      if (data.id == this.p.id) this.isLiked = data.value;
    }));


    this.storage.get('wishListProducts').then((val) => {
      this.wishArray = val;
      this.checkWishList();
    });


  }
  checkWishList() {
    //getting wishList items from local storage
    let count = 0;
    if (this.wishArray != null)
      for (let value of this.wishArray) {
        if (value.id == this.p.id) count++;
      }
    if (count != 0) this.isLiked = 1; else this.isLiked = 0;

  }
  pDiscount() {
    if (!this.p.on_sale)
      return false;
    var rtn = "";
    var p1 = parseInt(this.p.regular_price);
    var p2 = parseInt(this.p.price);
    if (p1 == 0 || p2 == null || p2 == undefined || p2 == 0) {
      return false;
    }
    var result = Math.abs((p1 - p2) / p1 * 100);
    result = parseInt(result.toString());
    if (result == 0) { return false }
    rtn = result + '%';
    return rtn;
  }

  showProductDetail() {
    this.shared.singleProductPageData.push(this.p);
    this.navCtrl.navigateForward(this.config.currentRoute + "/product-detail/" + this.p.id);

    if (this.type != 'recent') {
      this.shared.addToRecent(this.p);
    }

  }

  checkProductNew() {
    var pDate = new Date(this.p.date_created);
    var date = pDate.getTime() + this.config.newProductDuration * 86400000;
    var todayDate = new Date().getTime();
    if (date > todayDate)
      return true;
    else
      return false
  }

  addToCart() {
    this.shared.addToCart(this.p, null, null, null);
    //this.navCtrl.push(CartPage); 
  }

  isInCart() {
    var found = false;

    for (let value of this.shared.cartProducts) {
      if (value.product_id == this.p.id) { found = true; }
    }

    if (found == true) return true;
    else return false;
  }
  removeRecent() {
    this.shared.removeRecent(this.p);
  }

  clickWishList() {
    // this.loading.autoHide(500);
    if (this.isLiked == 0) { this.addWishList(); }
    else { this.removeWishList(); }
  }

  getProductImage() {
    if (this.p.images.length != 0) return this.p.images[0].src;
    else return "assets/woocommerce-placeholder.png";
  }

  getHeartName() {
    if (this.isLiked == 0) return "heart-outline";
    else return "heart";
  }

  removeProduct(type) {
    if (type == "recent") { this.removeRecent(); }
    else if (type == "wishList") { this.removeWishList(); }
  }

  getButtonText() {
    let r = "";
    if (this.p.stock_status == 'instock' && this.p.type == 'simple')
      r = 'ADD TO CART';

    if (this.p.stock_status == 'instock' && this.p.type != 'simple')
      r = 'DETAILS';

    if (this.p.stock_status != 'instock')
      r = 'OUT OF STOCK';
    return r;
  }

  buttonClick() {
    if (this.getButtonText() == 'ADD TO CART') this.addToCart();
    if (this.getButtonText() == 'DETAILS') this.showProductDetail();
  }


  getButtonColor() {
    if (this.getButtonText() == 'ADD TO CART') return 'secondary';
    else if (this.getButtonText() == 'DETAILS') return 'secondary';
    else if (this.getButtonText() == 'OUT OF STOCK') return 'danger';
  }

  getCategoryName() {
    if (this.p.categories.length != 0)
      return this.p.categories[0].name;
  }
  addWishList() {
    this.shared.addWishList(this.p);
  }
  removeWishList() {
    this.shared.removeWishList(this.p);
  }

  ngOnInit() {
  }

  getRating() {
    return (this.p.average_rating / 0.05) + '%'
  }
  getParsedRating() {
    return parseInt(this.p.average_rating).toFixed(1);
  }
  ngDoCheck() {

    this.shared.cartProducts.forEach(element => {
      if (element.product_id == this.p.id) {
        this.cartQuantity = element.quantity;
      }
    });
  }

  addingToCart() {
    if (this.getButtonText() == "ADD TO CART") {

      if (this.cartQuantity == 0) {
        this.addToCart();
      }
      else {
        this.shared.cartProducts.forEach(element => {
          if (element.product_id == this.p.id) {
            this.qunatityPlus(element);
          }
        });
      }

    }
    else {
      this.buttonClick();
    }
  }
  removingToCart() {
    this.shared.cartProducts.forEach(element => {
      if (element.product_id == this.p.id) {
        this.qunatityMinus(element);
      }
    });
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
    if (p.quantity == 1) {
      this.removeCartItem(p.cart_id);
      this.cartQuantity = 0;
    }

  }

  removeCartItem(id) {

    this.shared.cartProducts.forEach((value, index) => {

      if (value.cart_id == id) {
        this.shared.cartProducts.splice(index, 1);
        console.log("removing" + id);
      }
    });
    this.shared.removeCart(this.shared.cartProducts);

  }

  updateCart() {
    this.shared.removeCart(this.shared.cartProducts);
  }

}
