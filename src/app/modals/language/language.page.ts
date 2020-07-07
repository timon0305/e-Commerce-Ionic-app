import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { LoadingService } from 'src/providers/loading/loading.service';
import { ConfigService } from 'src/providers/config/config.service';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
})
export class LanguagePage implements OnInit {


  language: any;

  currentLanguageCode = localStorage.languageCode;
  languageList = [
    { "name": "English", "code": "en", "image": "assets/flags/english.jpg", "direction": "ltr" },
    { "name": "Arabic", "code": "ar", "image": "assets/flags/uae.jpg", "direction": "rtl" }]
  constructor(
    public loading: LoadingService,
    public modalCont: ModalController,
    public config: ConfigService,
    public shared: SharedDataService) {

    this.languageList.forEach(val => {
      if (val.code == this.currentLanguageCode)
        this.language = val;
    });
  }

  updateLanguage(event) {
    let v = event.detail.value;
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
  }
  //close modal
  dismiss() {
    this.modalCont.dismiss();
  }

  ngOnInit() {
  }

}
