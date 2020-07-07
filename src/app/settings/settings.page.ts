import { Component, OnInit } from '@angular/core';
import { ModalController, Platform, NavController } from '@ionic/angular';
import { ConfigService } from 'src/providers/config/config.service';
import { LoadingService } from 'src/providers/loading/loading.service';

import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { HttpClient } from '@angular/common/http';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../modals/login/login.page';
import { PrivacyPolicyPage } from '../modals/privacy-policy/privacy-policy.page';
import { TermServicesPage } from '../modals/term-services/term-services.page';
import { RefundPolicyPage } from '../modals/refund-policy/refund-policy.page';
import { AboutUsPage } from '../about-us/about-us.page';
import { LanguagePage } from '../modals/language/language.page';
import { CurrencyListPage } from '../modals/currency-list/currency-list.page';
import { AppEventsService } from 'src/providers/app-events/app-events.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  setting: { [k: string]: any } = {};
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public config: ConfigService,
    private storage: Storage,
    public loading: LoadingService,
    public http: HttpClient,
    public appEventsService: AppEventsService,
    public shared: SharedDataService,
    public iab: InAppBrowser,
    private socialSharing: SocialSharing,
    public plt: Platform,
    private appVersion: AppVersion,
    private oneSignal: OneSignal,
  ) {

  }
  ionViewDidEnter() {
  }


  updateSetting() {
    console.log(this.setting);
    this.storage.set('setting', this.setting);
  }
  async openLoginPage() {
    let modal = await this.modalCtrl.create({
      component: LoginPage,
      componentProps: {
        'hideGuestLogin': true
      }
    });
    return await modal.present();
  }
  logOut() {
    this.shared.logOut();
  }
  openAccountPage() {
    this.navCtrl.navigateForward("tabs/settings/my-account");
  }
  openSite() {
    this.loading.autoHide(2000);
    this.iab.create(this.config.siteUrl, "blank");
  }
  //============================================================================================
  //turning on off local  notification
  onOffPushNotification(value) {
    if (value == false) { this.oneSignal.setSubscription(false); }
    else { this.oneSignal.setSubscription(true); }
    this.updateSetting();
  };
  hideShowFooterMenu() {
    this.appEventsService.publish('setting', this.setting);
    this.updateSetting();
  }
  hideShowCartButton() {
    this.appEventsService.publish('setting', this.setting);
    this.updateSetting();
  }
  async showModal(value) {
    if (value == 'privacyPolicy') {
      let modal = await this.modalCtrl.create({
        component: PrivacyPolicyPage
      });
      return await modal.present();
    }
    else if (value == 'termServices') {
      let modal = await this.modalCtrl.create({
        component: TermServicesPage
      });
      return await modal.present();
    }
    else {
      let modal = await this.modalCtrl.create({
        component: RefundPolicyPage
      });
      return await modal.present();
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
  ionViewDidLoad() {
    this.storage.get('setting').then((val) => {
      if (val != null || val != undefined) {
        this.setting = val;

      }
      else {
        this.setting.localNotification = true;
        this.setting.notification = true;
        this.setting.cartButton = true;
        this.setting.footer = true;
      }
    });
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

  checkAvatar() {
    return this.shared.checkAvatar();
  }
  getNameFirstLetter() {
    return this.shared.getNameFirstLetter();
  }
  ngOnInit() {
  }
  showOption(value) {
    if (this.config.wishListPage && value == "wishListPage" && this.shared.customerData.id != null) { return true; }
    else if (this.config.editProfilePage && value == "editPage" && this.shared.customerData.id != null) { return true; }
    else if (value == "address" && this.shared.customerData.id != null) { return true; }
    else if (this.config.myOrdersPage && value == "myOrdersPage" && this.shared.customerData.id != null) { return true; }
    else if (this.config.contactUsPage && value == "contactPage") { return true; }
    else if (this.config.aboutUsPage && value == "aboutUsPage") { return true; }
    else if (this.config.newsPage && value == "newsPage") { return true; }
    else if (this.config.introPage && value == "introPage") { return true; }
    else if (this.config.shareApp && value == "sharePage") { return true; }
    else if (this.config.rateApp && value == "ratePage") { return true; }
    else if (this.config.settingPage && value == "settingsPage") { return true; }
    else if (this.config.enableWpPointReward && value == "rewardPointsPage" && this.shared.customerData.id != null) { return true; }
    else if (this.config.downloadPage && value == "downloadPage" && this.shared.customerData.id != null) { return true; }
    else if (value == "scratchCardPage" && this.shared.customerData.id != null) { return true; }
    else return false;
  }
  openPage(value) {
    this.navCtrl.navigateForward("tabs/settings/" + value);
  }
}
