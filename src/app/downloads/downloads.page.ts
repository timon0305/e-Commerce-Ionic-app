import { Component, OnInit, ApplicationRef } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { ConfigService } from 'src/providers/config/config.service';
import { LoadingService } from 'src/providers/loading/loading.service';
import { AppEventsService } from 'src/providers/app-events/app-events.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.page.html',
  styleUrls: ['./downloads.page.scss'],
})
export class DownloadsPage implements OnInit {

  downloads = [];
  httpLoading = true;
  constructor(
    public navCtrl: NavController,
    public loading: LoadingService,
    public shared: SharedDataService,
    public config: ConfigService,
    public appEventsService: AppEventsService,
    private applicationRef: ApplicationRef,
    public iab: InAppBrowser) {
    this.getDownloads();
  }
  getDownloads() {
    this.httpLoading = true;
    this.loading.show();
    this.config.getWoo("customers/" + this.shared.customerData.id + "/downloads" + "?" + this.config.productsArguments).then((data: any) => {
      this.httpLoading = false;
      this.loading.hide();
      let dat = data
      this.downloads = dat;
      console.log(dat);
      this.applicationRef.tick();
    });
  }

  downloadFile(value) {
    this.iab.create(value.download_url, '_system');
    this.loading.autoHide(1000);
    this.appEventsService.publish("openHomePage", "");
  }
  openShop() {
    this.navCtrl.navigateForward("tabs/" + this.config.getCurrentHomePage());
  }
  refreshPage() {
    this.getDownloads();
  }

  ngOnInit() {
  }

}
