import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/providers/config/config.service';
import { LoadingService } from 'src/providers/loading/loading.service';
import { ModalController } from '@ionic/angular';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  formData = {
    customers_email_address: '',
  };
  errorMessage = '';
  constructor(
    public loading: LoadingService,
    public http: HttpClient,
    public config: ConfigService,
    public shared: SharedDataService,
    public modalCtrl: ModalController, ) {
  }
  forgetPassword() {
    this.loading.show();
    this.errorMessage = '';
    this.http.get(this.config.url + '/api/appusers/forgot_password/?insecure=cool&email=' + this.formData.customers_email_address).subscribe((data: any) => {
      this.loading.hide();
      console.log(data);
      this.shared.showAlert(data);
      this.dismiss();

    }, error => {
      this.loading.hide();
      if (error.ok == false) {
        console.log(error)
        this.errorMessage = error.error.error;
      }
    });
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
  }

}
