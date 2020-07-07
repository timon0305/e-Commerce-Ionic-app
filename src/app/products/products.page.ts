import { Component, OnInit, ViewChild, ApplicationRef } from '@angular/core';
import { IonInfiniteScroll, IonContent, IonSlides, NavController, ActionSheetController, MenuController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/providers/config/config.service';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { LoadingService } from 'src/providers/loading/loading.service';
import { HttpClient } from '@angular/common/http';
import { AppEventsService } from 'src/providers/app-events/app-events.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  queryAttributes = "";
  attributes = [];
  tempAttributes = [];
  selectedAttributes = [];
  sliderConfig = {
    slidesPerView: "auto"
  };

  @ViewChild(IonInfiniteScroll, { static: false }) infinite: IonInfiniteScroll;
  @ViewChild(IonContent, { static: false }) content: IonContent;
  @ViewChild(IonSlides, { static: false }) slides: IonSlides;
  scrollTopButton = false;


  //@ViewChild(IonRange) priceRange: IonRange;
  products: any = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  selectedTab = '';
  categoryId = '';
  categoryName = '';
  sortOrder = 'Newest';
  sortArray = ['Newest', 'A - Z', 'Z - A'];
  //, 'A - Z Date', 'Z - A Date'
  //'Latest', 'On Sale', 'Featured'
  page = 1;
  applyFilter = false;
  filters = [];
  selectedFilters = [];
  maxAmount = this.config.filterMaxPrice;
  minAmount = 0;
  price = { lower: 0, upper: this.maxAmount };
  side = "right";
  productView = 'grid';
  on_sale: any;
  featured: any;
  filterOnSale = false;
  filterFeatured = false;
  loadingServerData = true;
  type = "";
  listOfFilteredIdsFromCustom = [];

  constructor(
    public navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
    public config: ConfigService,
    public shared: SharedDataService,
    public loading: LoadingService,
    public http: HttpClient,
    public appEventsService: AppEventsService,
    public actionSheet: ActionSheetController,
    public menuCtrl: MenuController,
    private applicationRef: ApplicationRef,
  ) {
    if (shared.dir == "rtl") this.side = "left";
    if (this.activatedRoute.snapshot.paramMap.get('id') != undefined)
      this.selectedTab = this.categoryId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.activatedRoute.snapshot.paramMap.get('name') != undefined)
      this.categoryName = this.activatedRoute.snapshot.paramMap.get('name');
    if (this.activatedRoute.snapshot.paramMap.get('type') != undefined)
      this.type = this.activatedRoute.snapshot.paramMap.get('type');
    if (parseInt(this.categoryId) == 0) { this.selectedTab = ''; }
    this.applicationRef.tick();
    this.getFilterdProducts("called from constructor");
  }
  ionViewDidEnter() {
    this.enableDisableInfiniteScroll(false);
    this.price.upper = this.maxAmount = this.config.filterMaxPrice;
    try {
      let ind = 0;
      this.shared.allCategories.forEach((value, index) => {
        if (this.selectedTab == value.id) {
          ind = index;
          //console.log("index to go " + ind);
        }
      });
      this.slides.slideTo(ind, 700, true);
    } catch (error) {

    }
  }
  resetProducts() {
    this.products = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    setTimeout(() => {
      this.scrollToTop();
    }, 500);
  }
  enableDisableInfiniteScroll(val) {
    this.infinite.disabled = !val;
  }
  getFilterdProducts(value) {
    //console.log(value);
    if (this.page == 1) {
      this.resetProducts();
      //this.loading.show();
    }
    this.loadingServerData = false;
    let query = '&page=' + this.page;
    if (this.sortOrder == "Newest") query = query + "&order=desc&order_by=date";
    else if (this.sortOrder == "A - Z") query = query + "&order=asc&order_by=title";
    else if (this.sortOrder == "Z - A") query = query + "&order=desc&order_by=title";

    if (this.type == "featured" || this.filterFeatured) { query = query + "&featured=true"; this.filterFeatured = true; }

    if (this.type == "sale" || this.type == "on_sale" || this.filterOnSale) { query = query + "&on_sale=true"; this.filterOnSale = true; }

    if (this.price.lower != this.minAmount && this.applyFilter == true) query = query + "&min_price=" + this.price.lower;
    if (this.price.upper != this.maxAmount && this.applyFilter == true) query = query + "&max_price=" + this.price.upper;
    if (this.selectedTab != '') query = query + '&cat_id=' + this.selectedTab;
    query = query + this.queryAttributes;
    console.log("custom Id = " + query);
    this.getAllAttributes();
    this.config.getWithUrl(this.config.url + '/api/appsettings/ionic_filter_products/?insecure=cool' + query).then((data: any) => {
      if (this.page == 1) this.enableDisableInfiniteScroll(true);
      if (data.data)
        this.listOfFilteredIdsFromCustom = data.data;
      this.applicationRef.tick();
      this.getFilterdProductsFromWoo();
    });

  }

  getFilterdProductsFromWoo() {

    if (this.listOfFilteredIdsFromCustom.length == 0) {
      this.enableDisableInfiniteScroll(false);
      this.loadingServerData = true;
      return 0;
    }
    let q = 'products?include=' + this.listOfFilteredIdsFromCustom + "&status=publish";

    //console.log(this.listOfFilteredIdsFromCustom);
    if (this.sortOrder == "Newest") q = q + "&order=desc&order_by=date";
    else if (this.sortOrder == "A - Z") q = q + "&order=asc&order_by=title";
    else if (this.sortOrder == "Z - A") q = q + "&order=desc&order_by=title";

    // if (this.type == "featured" || this.filterFeatured) { q = q + "&featured=true"; this.filterFeatured = true; }

    // if (this.type == "sale" || this.type == "on_sale" || this.filterOnSale) { q = q + "&on_sale=true"; this.filterOnSale = true; }
    console.log(q);
    this.config.getWoo(q + "&" + this.config.productsArguments).then((data: any) => {
      let dat = data;

      if (this.page == 1) {
        this.emptyProductList();
        this.scrollToTop();
      }
      if (dat.length != 0) {
        this.page++;
        if (this.page == 1) this.enableDisableInfiniteScroll(true);

        for (let value of dat) {
          this.products.push(value);
        }
      }

      if (dat.length == 0 || dat.length < 10) {
        this.enableDisableInfiniteScroll(false)
      }
      this.infinite.complete();
      this.applicationRef.tick();
      this.loadingServerData = true;

    });
  }
  emptyProductList(): any {
    this.products = [];
  }
  //============================================================================================  
  // filling filter array for keyword search 
  fillFilterArray(value, option) {
    this.applyFilters();
    console.log("filter aray called");
  };

  resetFilters() {
    this.reset();
  }

  reset() {
    this.applyFilter = false;
    this.filterFeatured = false;
    this.type = "latest";
    this.sortOrder = "Newest"
    this.filterOnSale = false;
    this.page = 1;
    this.selectedAttributes = [];
    this.queryAttributes = "";
    this.defaultPrice();
    this.getFilterdProducts("called from reset");
  }

  //changing tab
  changeTab(c) {
    if (c == '') this.selectedTab = c
    else this.selectedTab = c.id;
    this.reset();
    this.applicationRef.tick();
  }

  applyFilters() {
    //this.type = "latest";
    this.applyFilter = true;
    //this.enableDisableInfiniteScroll(true)
    this.page = 1;
    //this.getProducts(null);
    this.getFilterdProducts("called from filters");
    this.applicationRef.tick();
    this.closeMenu();
  }
  closeMenu() {
    this.menuCtrl.close("menu2");
  }
  getSortProducts(value) {
    console.log(value);
    // if (value == this.sortOrder) return 0;
    // else {
    this.sortOrder = value;
    //this.enableDisableInfiniteScroll(true)
    this.applyFilter = true;
    this.page = 1;
    this.type = "";
    this.getFilterdProducts("called from  sorted");
    // }
  }

  async openSortBy() {

    var buttonArray = [];
    this.shared.translateArray(this.sortArray).then((res: any) => {
      // console.log(res);

      for (let key in res) {
        buttonArray.push({ text: res[key], handler: () => { this.getSortProducts(key) } });
      }
      this.shared.translateString('Cancel').then(async (res) => {
        buttonArray.push(
          {
            text: res,
            role: 'cancel',
            handler: () => {
              //console.log('Cancel clicked');
            }
          }
        );
        var actionSheet = await this.actionSheet.create({
          buttons: buttonArray
        });
        await actionSheet.present();
      });
    });
  }
  changeLayout() {
    if (this.productView == 'list') this.productView = "grid";
    else this.productView = "list";

    this.scrollToTop();
  }

  scrollToTop() {
    try {
      if (this.content) {
        this.content.scrollToTop(700);
        this.scrollTopButton = false;
      }

    } catch (error) {

    }

  }
  onScroll(e) {
    if (e.scrollTop >= 800) this.scrollTopButton = true;
    if (e.scrollTop < 800) this.scrollTopButton = false;
  }


  removeString(s) {
    //console.log(s.replace('pa_', ''));
    return s.replace('pa_', '');
  }
  //=======================================================================================
  getAllAttributes() {
    // let cat = "&cat_id=" + this.selectedTab;
    // if (this.selectedTab == '') cat = '';
    let query = '';
    if (this.selectedTab != '') query = query + '&cat_id=' + this.selectedTab;


    query = query + this.queryAttributes;
    query = query + "&min_price=" + this.price.lower + "&max_price=" + this.price.upper;
    this.config.getWithUrl(this.config.url + '/api/appsettings/ionic_get_attributes/?insecure=cool' + query).then((data: any) => {
      if (data.attributes) {
        this.attributes = data.attributes;
      }
      else {
        this.attributes = [];
      }
      if (data.min_price != data.max_price) {
        if (this.minAmount != data.min_price) this.minAmount = data.min_price;
        if (this.maxAmount != data.max_price) this.maxAmount = data.max_price;

        if (this.minAmount != this.price.lower) this.price.lower = this.minAmount;
        if (this.maxAmount != this.price.upper) this.price.upper = this.maxAmount;
      }

      if (this.applyFilter == false) {
        this.price = {
          lower: this.minAmount,
          upper: this.maxAmount
        };
      }
      this.on_sale = data.on_sale;
      this.featured = data.featured;
      if (this.featured == null) this.featured = "false";

      this.applicationRef.tick();
    });
  }
  showHidePriceRange() {
    if (this.minAmount == this.maxAmount) { return false; }
    else if (this.price.lower != null || this.price.upper != null) { return true; }
  }
  defaultPrice() {
    this.price = { lower: 0, upper: this.config.filterMaxPrice };
  }
  //=======================================================================================
  selectAttribute(a, v) {
    let found = false;
    this.selectedAttributes.forEach((x, index) => {

      if (x.slug == a.attribute_slug) {
        found = true;
        if (v.value == false) {
          x.list.forEach((y, ind) => {
            if (y == v.name) {
              x.list.splice(ind, 1);
            }
          });

        }
        else {
          let valueFound = false;
          x.list.forEach((y, ind) => {
            if (y == v.name) {
              valueFound = true;
              x.list.splice(ind, 1);
            }
          });
          if (valueFound == false) {
            x.list.push(v.name);
          }
        }
      }

      if (x.list.length == 0) {
        this.selectedAttributes.splice(index, 1);
      }
    });

    if (found == false) this.selectedAttributes.push({ slug: a.attribute_slug, list: [v.name] });
    console.log(this.selectedAttributes);
    this.applicationRef.tick();
    this.queryAttributes = "";
    for (let x of this.selectedAttributes) {
      this.queryAttributes = this.queryAttributes + "&" + x.slug + "="
      for (let y of x.list) {
        this.queryAttributes = this.queryAttributes + y + ","
      }
    }

    this.queryAttributes;
    console.log(this.queryAttributes);
    this.applyFilters();
    console.log("select attribute called");
  }
  //=======================================================================================
  toggleMenu() {
    this.menuCtrl.toggle("menu2");
  }
  //=======================================================================================
  checkAttributeSelected(a, v) {
    let v1 = this.queryAttributes.indexOf(a.attribute_slug);
    let v2 = this.queryAttributes.indexOf(v.name);
    if (v1 != -1 && v2 != -1) { v.value = true; }
  }

  ngOnInit() {

  }
}
// data.attributes.forEach(element => {
//   let variable = { attribute_name: element.attribute_name, attribute_slug: element.attribute_slug };
//   let terms = [];
//   element.attribute_terms.forEach(v => {
//     this.checkAttributeSelected(element, v);
//     terms.push(Object.assign(v, { value: false }));
//   });

//   this.attributes.push(Object.assign(variable, { attribute_terms: terms }));
// });