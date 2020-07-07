import { Component, NgZone } from '@angular/core';

import { Platform, NavController, ModalController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


import { ConfigService } from 'src/providers/config/config.service';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { LoadingService } from 'src/providers/loading/loading.service';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Network } from '@ionic-native/network/ngx';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { Storage } from '@ionic/storage';
import * as $ from "jquery";
import { Router } from '@angular/router';
import { LoginPage } from './modals/login/login.page';
import { SignUpPage } from './modals/sign-up/sign-up.page';
import { LanguagePage } from './modals/language/language.page';
import { CurrencyListPage } from './modals/currency-list/currency-list.page';
import { DemoSettingsPage } from './modals/demo-settings/demo-settings.page';
import { AppEventsService } from 'src/providers/app-events/app-events.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  rootPage: any;
  appPages = [];
  // For all pages
  a1 = [
    {
      name: 'Home',
      icon: 'home',
      url: 'home',
      img: 'assets/left-menu-icon/home.png',
      items: [
        { name: "1", url: '/home', },
        { name: "2", url: '/home2', },
        { name: "3", url: '/home3', },
        { name: "4", url: '/home4', },
        { name: "5", url: '/home5', },
        { name: "6", url: '/home6', },
        { name: "7", url: '/home7', },
        { name: "8", url: '/home8', },
        { name: "9", url: '/home9', },
        { name: "10", url: '/home10', }
      ],
      expanded: false
    },
    {
      name: 'Categories',
      icon: 'apps',
      url: 'categories/0/0',
      img: 'assets/left-menu-icon/category.png',
      items: [
        { name: "1", url: '/categories/0/0' },
        { name: "2", url: '/categories2/0/0' },
        { name: "3", url: '/categories3/0/0' },
        { name: "4", url: '/categories4/0/0' },
        { name: "5", url: '/categories5/0/0' },
        { name: "6", url: '/categories6/0/0' }
      ], expanded: false
    },
    {
      name: 'Shop',
      icon: 'cash',
      url: '/products/0/0/newest',
      img: 'assets/left-menu-icon/shop.png',
      items: [
        { name: "Newest", url: '/products/0/0/newest' },
        { name: "On Sale", url: '/products/0/0/sale' },
        { name: "Featured", url: '/products/0/0/featured' },
      ],
      expanded: false
    },
  ];
  a2 = [
    { name: 'Home', icon: 'home', url: 'home', img: 'assets/left-menu-icon/home.png' },
    { name: 'Categories', icon: 'apps', url: 'categories', img: 'assets/left-menu-icon/category.png' },
    {
      name: 'Shop', icon: 'cash', url: '/products', img: 'assets/left-menu-icon/shop.png',
      items: [
        { name: "Newest", url: '/products/0/0/newest' },
        { name: "On Sale", url: '/products/0/0/sale' },
        { name: "Featured", url: '/products/0/0/featured' },
      ],
      expanded: false
    }];
  a3 = [
    { name: 'My Wish List', icon: 'heart', img: 'assets/left-menu-icon/wishlist.png', url: '/wish-list', value: 'wishListPage' },
    { name: 'Contact Us', icon: 'call', img: 'assets/left-menu-icon/phone.png', url: '/contact-us', value: 'contactPage' },
    { name: 'About Us', icon: 'information-circle', img: 'assets/left-menu-icon/about.png', url: '/about-us', value: 'aboutUsPage' },
    { name: 'News', icon: 'newspaper', img: 'assets/left-menu-icon/news.png', url: '/news', value: 'newsPage' },
    { name: 'Intro', icon: 'caret-forward', img: 'assets/left-menu-icon/intro.png', url: '/intro', value: 'introPage' },
    { name: 'Share', icon: 'share', img: 'assets/left-menu-icon/share.png', url: 'share', value: 'sharePage' },
    { name: 'Rate Us', icon: 'star-half', img: 'assets/left-menu-icon/rating.png', url: 'rateUs', value: 'ratePage' },
    { name: 'Settings', icon: 'settings', img: 'assets/left-menu-icon/setting.png', url: '/settings', value: 'settingsPage' }
  ];
  a4 = [
    { name: 'My Wish List', icon: 'heart', img: 'assets/left-menu-icon/wishlist.png', url: '/wish-list', value: 'wishListPage' },
    { name: 'Edit Profile', icon: 'lock-closed', img: 'assets/left-menu-icon/locked.png', url: '/my-account', login: true, value: 'editPage' },
    { name: 'Addresses', icon: 'home', img: 'assets/left-menu-icon/map.png', url: '/addresses', login: true, value: 'addressesPage' },
    { name: 'Downloads', icon: 'download', img: 'assets/left-menu-icon/download.png', url: '/downloads', login: true, value: 'downloadsPage' },
    { name: 'My Orders', icon: 'cart', img: 'assets/left-menu-icon/orders.png', url: '/my-orders', login: true, value: 'myOrdersPage' },
    { name: 'Reward Points', img: 'assets/left-menu-icon/gift.png', icon: 'happy', url: '/reward-points', login: true, value: 'rewardPointsPage' },
    { name: 'Scratch Cards', icon: 'notifications', img: 'assets/left-menu-icon/notifications.png', url: '/notifications', login: true, value: 'scratchCardPage' },
    { name: 'Contact Us', icon: 'call', img: 'assets/left-menu-icon/phone.png', url: '/contact-us', value: 'contactPage' },
    { name: 'About Us', icon: 'information-circle', img: 'assets/left-menu-icon/about.png', url: '/about-us', value: 'aboutUsPage' },
    { name: 'News', icon: 'newspaper', img: 'assets/left-menu-icon/news.png', url: '/news', value: 'newsPage' },
    { name: 'Intro', icon: 'caret-forward', img: 'assets/left-menu-icon/intro.png', url: '/intro', value: 'introPage' },
    { name: 'Share', icon: 'share', img: 'assets/left-menu-icon/share.png', url: 'share', value: 'sharePage' },
    { name: 'Rate Us', icon: 'star-half', img: 'assets/left-menu-icon/rating.png', url: 'rateUs', value: 'ratePage' },
    { name: 'Settings', icon: 'settings', img: 'assets/left-menu-icon/setting.png', url: '/settings', value: 'settingsPage' }
  ];

  constructor(
    public shared: SharedDataService,
    public config: ConfigService,
    public router: Router,
    private navCtrl: NavController,
    public platform: Platform,
    public modalCtrl: ModalController,
    public statusBar: StatusBar,
    public storage: Storage,
    public network: Network,
    public loading: LoadingService,
    private admobFree: AdMobFree,
    public appEventsService: AppEventsService,
    public plt: Platform,
    private appVersion: AppVersion,
    public iab: InAppBrowser,
    private socialSharing: SocialSharing,
    private deeplinks: Deeplinks,
    public menuCtrl: MenuController,
    private zone: NgZone,
  ) {
    this.initializeApp();
    let connectedToInternet = true;
    network.onDisconnect().subscribe(() => {
      connectedToInternet = false;
      this.shared.showAlertWithTitle("Please Connect to the Internet!", "Disconnected");
      //  console.log('network was disconnected :-(');
    });


    network.onConnect().subscribe(() => {
      if (!connectedToInternet) {
        window.location.reload();
        this.shared.showAlertWithTitle("Network connected Reloading Data" + '...', "Connected");
      }
      //connectSubscription.unsubscribe();
    });
    //this.platform.setDir(, true);
    document.documentElement.dir = this.config.appDirection;
    shared.dir = this.config.appDirection;

    let showAd = this.appEventsService.subscribe("showAd");
    showAd.subscriptions.add(showAd.event.subscribe(data => {
      this.showInterstitial();
    }));

    let openThankYouPage = this.appEventsService.subscribe("openThankYouPage");
    openThankYouPage.subscriptions.add(openThankYouPage.event.subscribe(data => {
      this.zone.run(async () => {
        this.navCtrl.navigateRoot("/thank-you");
      });
    }));

    let openShippingAddressPage = this.appEventsService.subscribe("openShippingAddressPage");
    openShippingAddressPage.subscriptions.add(openShippingAddressPage.event.subscribe(data => {
      this.zone.run(async () => {
        if (config.appNavigationTabs)
          this.navCtrl.navigateForward("tabs/cart/shipping-address");
        else
          this.navCtrl.navigateForward("/shipping-address");
      });
    }));


    let openDeepLink = this.appEventsService.subscribe("openDeepLink");
    openDeepLink.subscriptions.add(openDeepLink.event.subscribe(data => {
      this.naviagateDeeplink(data);
    }));

    let openCategoryPage = this.appEventsService.subscribe("openCategoryPage");
    openCategoryPage.subscriptions.add(openCategoryPage.event.subscribe(data => {
      this.openCategoryPage();
    }));


    let openHomePage = this.appEventsService.subscribe("openHomePage");
    openHomePage.subscriptions.add(openHomePage.event.subscribe(data => {
      this.zone.run(async () => {
        this.openHomePage();
      });
    }));

    let openSubcategoryPage = this.appEventsService.subscribe("openSubcategoryPage");
    openSubcategoryPage.subscriptions.add(openSubcategoryPage.event.subscribe(data => {
      this.openSubcategoryPage(data);
    }));

    let updateSideMenu = this.appEventsService.subscribe("updateSideMenu");
    updateSideMenu.subscriptions.add(updateSideMenu.event.subscribe(data => {
      this.getLeftItems();
    }));
  }



  initializeApp() {
    this.platform.ready().then(() => {
      //this.getStatusBarColor()
      this.shared.subscribePush();
      this.runAdmob();
      this.config.siteSetting().then((value) => {
        this.loadHomePage();
        this.shared.getVendorList();
        this.getLeftItems();
      });
      if (this.platform.is('cordova')) {
        this.initializeDeepLinks();
      }

    });

  }

  // loading home page =========================================================================
  loadHomePage() {
    this.storage.get('firsttimeApp').then((val) => {
      let value = val;
      if (this.config.showIntroPage == 0) value = 'firstTime';
      if (value == 'firstTime') {

        this.openHomePage();
        this.config.checkingNewSettingsFromServer();
      }
      else {
        this.navCtrl.navigateRoot("intro");
      }
      this.storage.set('firsttimeApp', 'firstTime');
      setTimeout(() => {
        this.appEventsService.publish("openDeepLink", "");
      }, 500);
    });
  }
  // starting admob =========================================================================
  runAdmob() {
    if (this.plt.is('ios')) {
      if (this.config.admobIos == 1) this.initializeAdmob(this.config.admobBanneridIos, this.config.admobIntidIos);
      this.config.admob = this.config.admobIos;
      this.shared.device = 'ios';
    } else if (this.plt.is('android')) {
      if (this.config.admob == 1) this.initializeAdmob(this.config.admobBannerid, this.config.admobIntid);
      this.shared.device = 'android';
    }
  }
  // preparing admob =========================================================================
  initializeAdmob(bannerId, intId) {
    if (this.platform.is('cordova')) {
      const bannerConfig: AdMobFreeBannerConfig = {
        id: bannerId,
        isTesting: false,
        autoShow: true
      };
      this.admobFree.banner.config(bannerConfig);

      this.admobFree.banner.prepare()
        .then(() => {
          //alert("loaded" +bannerId);
          //this.admobFree.banner.show();
        })
        .catch(e => console.log(e));

      const interstitialConfig: AdMobFreeInterstitialConfig = {
        id: intId,
        isTesting: false,
        autoShow: false
      };
      this.admobFree.interstitial.config(interstitialConfig);
      this.admobFree.interstitial.prepare();
    }
  }
  //=========================================================================
  showInterstitial() {
    if (this.platform.is('cordova')) {
      this.admobFree.interstitial.show();
      //this.admobFree.interstitial.isReady().then(() => { });
      this.admobFree.interstitial.prepare();
    }
  }
  //=========================================================================

  openHomePage() {

    if (this.config.appNavigationTabs) {
      if (this.config.homePage == 1) { this.navCtrl.navigateForward("/tabs/home"); }
      if (this.config.homePage == 2) { this.navCtrl.navigateForward("/tabs/home2"); }
      if (this.config.homePage == 3) { this.navCtrl.navigateForward("/tabs/home3"); }
      if (this.config.homePage == 4) { this.navCtrl.navigateForward("/tabs/home4"); }
      if (this.config.homePage == 5) { this.navCtrl.navigateForward("/tabs/home5"); }
      if (this.config.homePage == 6) this.navCtrl.navigateForward("/tabs/home6");
      if (this.config.homePage == 7) this.navCtrl.navigateForward("/tabs/home7");
      if (this.config.homePage == 8) this.navCtrl.navigateForward("/tabs/home8");
      if (this.config.homePage == 9) this.navCtrl.navigateForward("/tabs/home9");
      if (this.config.homePage == 10) this.navCtrl.navigateForward("/tabs/home10");
    }
    else {
      if (this.config.homePage == 1) { this.navCtrl.navigateRoot("/home"); }
      if (this.config.homePage == 2) { this.navCtrl.navigateRoot("/home2"); }
      if (this.config.homePage == 3) { this.navCtrl.navigateRoot("/home3"); }
      if (this.config.homePage == 4) { this.navCtrl.navigateRoot("/home4"); }
      if (this.config.homePage == 5) { this.navCtrl.navigateRoot("/home5"); }
      if (this.config.homePage == 6) this.navCtrl.navigateRoot("/home6");
      if (this.config.homePage == 7) this.navCtrl.navigateRoot("/home7");
      if (this.config.homePage == 8) this.navCtrl.navigateRoot("/home8");
      if (this.config.homePage == 9) this.navCtrl.navigateRoot("/home9");
      if (this.config.homePage == 10) this.navCtrl.navigateRoot("/home10");
    }
  }
  openCategoryPage() {
    if (this.config.appNavigationTabs) {
      if (this.config.categoryPage == 1) { this.navCtrl.navigateForward(this.config.currentRoute + "/categories/0/0"); }
      if (this.config.categoryPage == 2) { this.navCtrl.navigateForward(this.config.currentRoute + "/categories2/0/0"); }
      if (this.config.categoryPage == 3) { this.navCtrl.navigateForward(this.config.currentRoute + "/categories3/0/0"); }
      if (this.config.categoryPage == 4) { this.navCtrl.navigateForward(this.config.currentRoute + "/categories4/0/0"); }
      if (this.config.categoryPage == 5) { this.navCtrl.navigateForward(this.config.currentRoute + "/categories5/0/0"); }
      if (this.config.categoryPage == 6) { this.navCtrl.navigateForward(this.config.currentRoute + "/categories6/0/0"); }
    }
    else {
      if (this.config.categoryPage == 1) { this.navCtrl.navigateRoot("categories/0/0"); }
      if (this.config.categoryPage == 2) { this.navCtrl.navigateRoot("categories2/0/0"); }
      if (this.config.categoryPage == 3) { this.navCtrl.navigateRoot("categories3/0/0"); }
      if (this.config.categoryPage == 4) { this.navCtrl.navigateRoot("categories4/0/0"); }
      if (this.config.categoryPage == 5) { this.navCtrl.navigateRoot("categories5/0/0"); }
      if (this.config.categoryPage == 6) { this.navCtrl.navigateRoot("categories6/0/0"); }
    }

  }
  openSubcategoryPage(parent) {
    let i = "/" + parent.id + "/" + parent.name;
    if (this.config.appNavigationTabs) {
      if (this.config.categoryPage == 1) { this.navCtrl.navigateForward(this.config.currentRoute + "/categories" + i); }
      if (this.config.categoryPage == 2) { this.navCtrl.navigateForward(this.config.currentRoute + "/categories2" + i); }
      if (this.config.categoryPage == 3) { this.navCtrl.navigateForward(this.config.currentRoute + "/categories3" + i); }
      if (this.config.categoryPage == 4) { this.navCtrl.navigateForward(this.config.currentRoute + "/categories4" + i); }
      if (this.config.categoryPage == 5) { this.navCtrl.navigateForward(this.config.currentRoute + "/categories5" + i); }
      if (this.config.categoryPage == 6) { this.navCtrl.navigateForward(this.config.currentRoute + "/categories6" + i); }
    }
    else {
      if (this.config.categoryPage == 1) { this.navCtrl.navigateForward("categories" + i); }
      if (this.config.categoryPage == 2) { this.navCtrl.navigateForward("categories2" + i); }
      if (this.config.categoryPage == 3) { this.navCtrl.navigateForward("categories3" + i); }
      if (this.config.categoryPage == 4) { this.navCtrl.navigateForward("categories4" + i); }
      if (this.config.categoryPage == 5) { this.navCtrl.navigateForward("categories5" + i); }
      if (this.config.categoryPage == 6) { this.navCtrl.navigateForward("categories6" + i); }
    }
  }


  async openLoginPage() {
    let modal = await this.modalCtrl.create({
      component: LoginPage,
      componentProps: {
        'hideGuestLogin': false
      }
    });
    return await modal.present();
  }
  async openSignUpPage() {
    let modal = await this.modalCtrl.create({
      component: SignUpPage,
    });
    return await modal.present();
  }
  logOut() {
    this.shared.logOut();
  }

  rateUs() {
    this.loading.autoHide(2000);
    if (this.plt.is('ios')) {
      this.iab.create(this.config.packgeName.toString(), "_system");
    } else if (this.plt.is('android')) {
      this.appVersion.getPackageName().then((val) => {
        this.iab.create("https://play.google.com/store/apps/details?id=" + val, "_system");
      });
    }
  }
  share() {
    this.loading.autoHide(2000);
    if (this.plt.is('ios')) {
      this.socialSharing.share(
        this.config.packgeName.toString(),
        this.config.appName,
        this.config.packgeName.toString(),
        this.config.packgeName.toString()
      );
    } else if (this.plt.is('android')) {

      this.appVersion.getPackageName().then((val) => {
        this.socialSharing.share(
          this.config.appName,
          this.config.appName,
          "",
          "https://play.google.com/store/apps/details?id=" + val
        );
      });
    }
  }
  async openLanguagePage() {
    let modal = await this.modalCtrl.create({
      component: LanguagePage,
    });
    return await modal.present();
  }
  async openCurrencyPage() {
    let modal = await this.modalCtrl.create({
      component: CurrencyListPage,
    });
    return await modal.present();
  }

  //=========================================================================
  openPage(page) {
    console.log(page);
    //this.router.navigateByUrl(page);
    if (page == 'home') this.openHomePage();
    else if (page == 'categories') this.openCategoryPage();
    else if (page == '/products/0/0/newest') this.navCtrl.navigateForward(page);
    else if (page == '/products/0/0/sale') this.navCtrl.navigateForward(page);
    else if (page == '/products/0/0/featured') this.navCtrl.navigateForward(page);
    else if (page == 'share') this.share();
    else if (page == 'rateUs') this.rateUs();
    else this.navCtrl.navigateRoot(page);
    this.menuCtrl.toggle();
  }

  getStatusBarColor() {
    let headerColor = $('#primary').css('color');
    let rgb2 = headerColor;
    rgb2 = headerColor.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+)/i);
    this.shared.headerHexColor = (rgb2 && rgb2.length === 4) ? "#" +
      ("0" + parseInt(rgb2[1], 10).toString(16)).slice(-2) +
      ("0" + parseInt(rgb2[2], 10).toString(16)).slice(-2) +
      ("0" + parseInt(rgb2[3], 10).toString(16)).slice(-2) : headerColor;
    console.log(this.shared.headerHexColor);

    let color = $('#my').css('color');
    let rgb = color;
    rgb = color.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+)/i);
    let ret = (rgb && rgb.length === 4) ? "#" +
      ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
      ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
      ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : color;
    console.log(ret);
    this.statusBar.backgroundColorByHexString(ret);
  }
  public link = "empty";
  public linkArgs: any;
  public deepUrl = "";
  initializeDeepLinks() {
    //this.deeplinks.routeWithNavController(this.nav, {
    this.deeplinks.route({
    }).subscribe(match => {
      // match.$route - the route we matched, which is the matched entry from the arguments to route()
      // match.$args - the args passed in the link
      // match.$link - the full link data
      this.deepUrl = match.$link.url;

      this.link = match.$link.path;

      this.linkArgs = match.$args;

      console.log(match);
      console.log(match.$args);
      console.log('Successfully matched route', match);
      //if (this.rootPage != undefined) this.naviagateDeeplink();
    }, nomatch => {
      // nomatch.$link - the full link data
      this.deepUrl = nomatch.$link.url;
      //if (this.rootPage != undefined) this.naviagateDeeplink();
      console.error('Got a deeplink that didn\'t match', nomatch);
    });

  }

  naviagateDeeplink(value: any) {

    //console.log(this.deepUrl)
    if (this.deepUrl.indexOf('/shop') != -1 && value != "openCategoryInShop") {
      this.navCtrl.navigateForward("tabs/search/products/0/0/newest");
      console.log("navigate to Shop");
    }
    if (this.link == "/shop/" && value != "openCategoryInShop") {
      console.log("navigate to Shop with sorting");
    }
    if (this.link == "/product/" && value != "openCategoryInShop") {
      console.log("navigate to product detail");
    }

    if (this.deepUrl.indexOf('product=') != -1 && value != "openCategoryInShop") {
      let linkk = this.deepUrl;
      let arr = linkk.split("=");
      let slug = "";
      for (let val of arr) {
        if (val.indexOf('product') == -1)
          slug = val;

      }
      this.getSingleProductDetail(slug);
      console.log("navigate to product detail with = Slug");
    }

    if (this.deepUrl.indexOf('/product/') != -1 && value != "openCategoryInShop") {
      let arr = this.deepUrl.split("/");
      let count = 0;
      for (let val of arr) {
        count++;
        if (val == "product") { break; }
      }
      let slug = arr[count];

      this.getSingleProductDetail(slug);
      console.log("navigate to product detail with / Slug :" + slug);
    }

    if (this.deepUrl.indexOf('/product-category/') != -1) {
      //'http://vc.com/product-category/watches/gold-watches/ooo'
      let arr = this.deepUrl.split("/");
      let count = 0;
      let arr2 = [];
      for (let val of arr) {
        if (count == 1 && val != "") arr2.push(val);
        if (val == "product-category") count = 1;
      }
      let slug = arr2[(arr2.length) - 1];


      console.log(slug);
      console.log("navigate to shop page with category . Slug :" + slug);
      console.log(value);
      if (value == "openCategoryInShop") {
        for (let val of this.shared.allCategories) {
          console.log(val);
          if (val.slug == slug) {
            console.log("id matched : " + val.id);
            console.log(val);
            this.navCtrl.navigateForward("tabs/search/products/" + val.id + "/0/newest");
          }
        }
      }
    }


  }


  getSingleProductDetail(slug) {
    this.loading.show();
    this.config.getWoo("products/" + "?" + this.config.productsArguments + "&slug=" + slug).then((data: any) => {
      this.loading.hide();
      let p = data;
      this.shared.singleProductPageData.push(p);
      this.navCtrl.navigateForward(this.config.currentRoute + "/product-detail/" + p.id);
    }, err => {
      this.loading.hide();
      console.log(err);
    });
  }

  checkAvatar() {
    return this.shared.checkAvatar();
  }
  getNameFirstLetter() {
    return this.shared.getNameFirstLetter();
  }
  //==============================================================
  //for
  expandItem(i) {
    if (i.expanded == false) i.expanded = true;
    else i.expanded = false;
  }
  showImg() {
    return !this.config.defaultIcons;
  }


  getLeftItems() {
    let tempArray = new Array;
    if (!this.config.appInProduction) {
      this.a1.forEach((v: any, index) => {
        tempArray.push(v);
      });
    } else {
      this.a2.forEach((v: any, index) => {
        tempArray.push(v);
      });

    }

    if (this.shared.customerData.id == null) {
      this.a3.forEach((v: any, index) => {
        tempArray.push(v);
      });
    }
    else {
      this.a4.forEach((v: any, index) => {
        tempArray.push(v);
      });
    }

    tempArray.forEach((v: any, index) => {
      if (this.config.wishListPage == 0 && v.value == "wishListPage") { tempArray.splice(index, 1); }
      if (this.config.editProfilePage == 0 && v.value == "editPage") { tempArray.splice(index, 1); }
      if (this.config.contactUsPage == 0 && v.value == "contactPage") { tempArray.splice(index, 1); }
      if (this.config.downloadPage == false && v.value == "downloadsPage") { tempArray.splice(index, 1); }
      if (this.config.enableWpPointReward == false && v.value == "rewardPointsPage") { tempArray.splice(index, 1); }
      if (this.config.aboutUsPage == 0 && v.value == "aboutUsPage") { tempArray.splice(index, 1); }
      if (this.config.newsPage == 0 && v.value == "newsPage") { tempArray.splice(index, 1); }
      if (this.config.introPage == 0 && v.value == "introPage") { tempArray.splice(index, 1); }
      if (this.config.shareApp == 0 && v.value == "sharePage") { tempArray.splice(index, 1); }
      if (this.config.rateApp == 0 && v.value == "ratePage") { tempArray.splice(index, 1); }
      if (this.config.settingPage == 0 && v.value == "settingsPage") { tempArray.splice(index, 1); }
      if (this.config.myOrdersPage == 0 && v.value == "myOrdersPage") { tempArray.splice(index, 1); }
    });
    this.appPages = tempArray;
    return tempArray;
  }

  async openDemoSettings() {
    let modal = await this.modalCtrl.create({
      component: DemoSettingsPage,
    });
    return await modal.present();
  }
}
