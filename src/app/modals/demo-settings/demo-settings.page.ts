import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ConfigService } from 'src/providers/config/config.service';
import { LoadingService } from 'src/providers/loading/loading.service';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';

@Component({
  selector: 'app-demo-settings',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './demo-settings.page.html',
  styleUrls: ['./demo-settings.page.scss'],
})


export class DemoSettingsPage implements OnInit {
  colors = [
    { value: '#51688f', name: 'default' },
    { value: '#ffffff', name: 'white' },
    { value: '#000000', name: 'black' },
    { value: '#EC3F34', name: 'green' },
    { value: '#BF04A0', name: 'red' },
    { value: '#FCAD8E', name: 'magnesium' },
    { value: '#FF8EA6', name: 'salmon' },
    { value: '#44B3FF', name: 'plum' },
    { value: '#9546FE', name: 'blue' },
    { value: '#A6633C', name: 'pink' },
    { value: '#3CA68D', name: 'orange' },
    { value: '#3C51A6', name: 'maroon' },
    { value: '#726DFF', name: 'cayanne' },
    { value: '#FF6D6D', name: 'sea' },
    { value: '#B3182A', name: 'theme15' },
    { value: '#3E5902', name: 'theme16' },
    { value: '#483A6F', name: 'theme17' },
    { value: '#621529', name: 'theme18' },

    // { value: '#76d6ff', name: 'sky' },
    // { value: '#9437ff', name: 'grape' },
  ]
  //#000000, #EC3F34, #BF04A0, #FCAD8E, #FF8EA6, #44B3FF, #9546FE, #A6633C, #3CA68D, #, #, #

  currency: any;
  currencyList = [];
  navigation: any = 'bottom';
  themeMode: any = 'dark';
  loaderLanguages = true;
  loaderCurrecny = true;


  banner = "1";
  constructor(
    public loading: LoadingService,
    public modalCont: ModalController,
    public config: ConfigService,
    public nav: NavController,
    protected cdr: ChangeDetectorRef,
    public shared: SharedDataService) {

    this.getListOfCurrency();

    if (this.config.appNavigationTabs) {
      this.navigation = 'bottom'
    }
    else {
      this.navigation = 'left'
    }

    if (this.config.darkMode) {
      this.themeMode = 'dark'
    }
    else {
      this.themeMode = 'light'
    }
    console.log(this.config.appNavigationTabs, this.navigation);
    console.log(this.config.darkMode, this.themeMode);

    this.settingDefaultLanguage()

    this.banner = this.config.bannerStyle;
  }

  ngAfterViewInit() {
    console.log("chekc");
    this.cdr.markForCheck();
  }

  navigationChange() {
    if (this.navigation == 'bottom') {
      this.config.appNavigationTabs = localStorage.tabsNavigation = true;
      this.config.currentRoute = "tabs/" + this.config.getCurrentHomePage();
      this.nav.navigateRoot(this.config.currentRoute);
    }
    else {
      this.config.appNavigationTabs = localStorage.tabsNavigation = false;
      this.config.currentRoute = "";
      this.nav.navigateRoot('home');
    }
    this.dismiss();
    console.log(localStorage.tabsNavigation);
    console.log(this.navigation);


  }
  modeChange() {
    if (this.themeMode == 'dark') {
      this.config.darkMode = true;
    }
    else {
      this.config.darkMode = false;
    }
    console.log("dasdasdadasd");
    this.cdr.detectChanges();
  }

  language: any;

  currentLanguageCode = localStorage.languageCode;
  languageList = [
    { "name": "English", "code": "en", "image": "assets/flags/english.jpg", "direction": "ltr" },
    { "name": "Arabic", "code": "ar", "image": "assets/flags/uae.jpg", "direction": "rtl" }]

  settingDefaultLanguage() {
    this.languageList.forEach(val => {
      if (val.code == this.currentLanguageCode)
        this.language = val;
    });
  }
  updateLanguage() {
    setTimeout(() => {
      let v = this.language;
      console.log(v.code);
      if (this.currentLanguageCode != v.code) {
        console.log(v.code);
        this.loading.autoHide(1000);
        localStorage.languageCode = v.code;
        localStorage.languageDirection = v.direction;
        this.shared.emptyCart();
        this.shared.emptyRecentViewed();
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    }, 300);
  }
  getListOfCurrency() {
    this.loaderCurrecny = true;
    this.config.getWithUrl(this.config.url + "/api/appsettings/get_all_currencies/?insecure=cool").then((data: any) => {
      this.loaderCurrecny = false;
      this.currencyList = data.data;
      this.currencyList.forEach(val => {

        if (val.symbol == localStorage.currency) {
          console.log(val.symbol);
          this.currency = val;
        }
      });
    });

  }
  updateCurrency() {
    setTimeout(() => {
      if (localStorage.currency != this.currency.code) {
        this.loading.autoHide(1000);
        localStorage.currency = this.currency.symbol;
        localStorage.currencyCode = this.currency.name;
        localStorage.currencyPos = this.currency.position;
        localStorage.decimals = this.currency.decimals;
        this.shared.emptyCart();
        this.shared.emptyRecentViewed();

        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    }, 300);
  }

  setBannerStyle(banner) {
    this.config.setBannerStyle(banner);
    this.config.appSettings.banner_style = banner;

    if (this.navigation == "bottom")
      this.navigation = 'left'
    else
      this.navigation = 'bottom'
    this.navigationChange();

  }
  setCardStyle(card) {
    this.config.setCardStyle(card);
    this.dismiss();
  }
  //close modal
  dismiss() {
    this.modalCont.dismiss();
  }

  ngOnInit() {
  }
  changeAppTheme(value) {
    this.config.appTheme = value;
  }
}
