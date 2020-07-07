import { Component, OnInit, ApplicationRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/providers/config/config.service';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { Platform, NavController } from '@ionic/angular';
import { LoadingService } from 'src/providers/loading/loading.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss'],
})
export class MyAccountPage implements OnInit {

  myAccountData: { [k: string]: any } = {};
  password = '';
  constructor(
    public http: HttpClient,
    public config: ConfigService,
    public shared: SharedDataService,
    public platform: Platform,
    public navCtrl: NavController,
    public applicationRef: ApplicationRef,
    public loading: LoadingService) {
  }

  //============================================================================================  
  //function updating user information
  updateInfo = function () {
    this.loading.show();
    if (this.password != '') this.myAccountData.password = this.password;
    this.config.putAsync("customers/" + this.shared.customerData.id, this.myAccountData).then((data:any) => {
      this.loading.hide();
      this.shared.login(data);
      this.applicationRef.tick();
      this.nav.navigateRoot("/settings");
        this.shared.toast("Data Updated!");
    }, (err) => { this.shared.toast("Error Updating Data!"); });
  }


  ionViewWillEnter() {
    this.myAccountData.first_name = this.shared.customerData.first_name;
    this.myAccountData.last_name = this.shared.customerData.last_name;
  }

  ngOnInit() {
  }

}
