import { Component, OnInit, ApplicationRef } from '@angular/core';
import { ConfigService } from 'src/providers/config/config.service';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { LoadingService } from 'src/providers/loading/loading.service';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss'],
})
export class VendorListComponent implements OnInit {
  //for product slider after banner
  sliderConfig = {
    slidesPerView: 2.5,
    spaceBetween: 0
  }
  constructor(
    public navCtrl: NavController,
    public config: ConfigService,
    public shared: SharedDataService,
    public loading: LoadingService,
    public http: HttpClient,
    private applicationRef: ApplicationRef,
  ) {
  }


  openVendorPage(c) {

    if (this.config.showVendorInfo) {
      this.loading.show();
      this.config.getWithUrl(this.config.url + "/wp-json/dokan/v1/stores/" + c.user_id).then((data: any) => {
        this.loading.hide();
        let d = data;
        this.shared.storePageData.push(d);
        let id;
        if (d.ID) id = d.ID; if (d.id) id = d.id;
        this.navCtrl.navigateForward(this.config.currentRoute + "/store/" + id);

        this.applicationRef.tick();
      });
    }
    else if (this.config.showWcVendorInfo) {
      //this.loading.show();
      this.shared.storePageData.push(c);
      console.log(this.shared.storePageData);
      let id;
      if (c.ID) id = c.ID;
      if (c.id) id = c.id;
      if (c.user_id) id = c.user_id;
      this.navCtrl.navigateForward(this.config.currentRoute + "/store/" + id);
      // this.http.get(this.config.url + "/api/appsettings/get_vendor_info/?insecure=cool&product_id=" + c.user_id).map(res => res.json()).subscribe(data => {
      //   this.loading.hide();

      //   this.applicationRef.tick();
      // });
    }
  }

  ngOnInit() { }

}
