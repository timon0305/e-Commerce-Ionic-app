import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/providers/config/config.service';
import { ModalController, Platform } from '@ionic/angular';
import { LoadingService } from 'src/providers/loading/loading.service';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { TermServicesPage } from '../term-services/term-services.page';
import { RefundPolicyPage } from '../refund-policy/refund-policy.page';
import { PrivacyPolicyPage } from '../privacy-policy/privacy-policy.page';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  formData = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    username: '',
    wpgdprc: 1,
    register: 'Register'
  };
  image;
  errorMessage = '';
  constructor(
    public http: HttpClient,
    public config: ConfigService,
    public modalCtrl: ModalController,
    public loading: LoadingService,
    public shared: SharedDataService,
    public platform: Platform,

  ) {
    // /api/appusers/register/?insecure=cool&username=abcd&password=123456&email=abcdxyz@gmail.com&display_name=aopi&nonce=6ad2605198
  }
  createAccount() {
    this.loading.show();
    this.http.get(this.config.url + '/api/get_nonce/?controller=appusers&method=register').subscribe((data: any) => {
      this.signUp(data.nonce);
    });
  }
  signUp(nonce) {
    console.log(nonce);
    this.errorMessage = '';
    var formData = new FormData();
    formData.append("username", this.formData.username);
    formData.append("email", this.formData.email);
    formData.append("display_name", this.formData.first_name + " " + this.formData.last_name);
    formData.append("nonce", nonce);
    formData.append("password", this.formData.password);
    formData.append("first_name", this.formData.first_name);
    formData.append("last_name", this.formData.last_name);
    this.http.post(this.config.url + '/api/appusers/register/?insecure=cool', formData).subscribe((data: any) => {
      this.loading.hide();
      if (data.status == "ok") {
        this.shared.toast("User Created. Login Using your Username & Password");
        this.dismiss();
      }
      else {
        this.errorMessage = data.error;
        console.log(this.errorMessage);
      }

    }, err => {
      this.loading.hide();
      if (err.ok == false) {
        console.log(err)
        this.errorMessage = err.error.error;
      }
    });
  }

  async  openPrivacyPolicyPage() {
    let modal = await this.modalCtrl.create({
      component: PrivacyPolicyPage
    });
    return await modal.present();
  }
  async  openTermServicesPage() {
    let modal = await this.modalCtrl.create({
      component: TermServicesPage
    });
    return await modal.present();
  }
  async  openRefundPolicyPage() {
    let modal = await this.modalCtrl.create({
      component: RefundPolicyPage
    });
    return await modal.present();
  }
  async dismiss() {
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
  }

}
