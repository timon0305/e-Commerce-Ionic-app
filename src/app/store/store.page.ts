import { Component, OnInit, ApplicationRef, ViewChild } from '@angular/core';
import { NavController, IonInfiniteScroll } from '@ionic/angular';
import { ConfigService } from 'src/providers/config/config.service';
import { LoadingService } from 'src/providers/loading/loading.service';
import { HttpClient } from '@angular/common/http';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { ActivatedRoute } from '@angular/router';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {

  banner: any;
  page = 1;
  name = "";
  email = "";
  id = null;
  rating = null;
  gravatar = null;
  @ViewChild(IonInfiniteScroll, { static: false }) infinite: IonInfiniteScroll;
  products = [];
  constructor(
    public navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
    public config: ConfigService,
    public loading: LoadingService,
    public http: HttpClient,
    private applicationRef: ApplicationRef,
    private emailComposer: EmailComposer,
    public shared: SharedDataService) {
    let d = this.getData(this.activatedRoute.snapshot.paramMap.get('id'));

    if (d.user_email != undefined) this.email = d.user_email;
    if (d.email) this.email = d.email;
    if (d.rating) this.rating = d.rating;
    if (d.ID) this.id = d.ID;
    if (d.id) this.id = d.id;

    if (d.display_name) {
      this.name = d.display_name;
      this.banner = false;
    }
    else {
      this.name = d.first_name + " " + d.last_name;
      this.banner = d.banner;
      this.gravatar = d.gravatar;
    }

    if (this.config.showWcVendorInfo) {
      console.log(d);
      if (d.meta) this.name = d.meta.pv_shop_name;
      else if (d.first_name) this.name = d.first_name + " " + d.last_name;
      else if (d.display_name) this.name = d.display_name;
      if (d.user_email) this.email = d.user_email;
      if (d.user_id) this.id = d.user_id;
      this.banner = d.banner;
    }
    this.getProducts();
  }

  getData(id) {
    let p;
    this.shared.storePageData.forEach(element => {
      if (element.id) { if (element.id == id) p = element; }
      if (element.ID) { if (element.ID == id) p = element; }
      if (element.user_id) { if (element.user_id == id) p = element; }
    });
    return p;
  }


  getProducts() {
    if (this.page == 1) this.loading.show();
    this.config.getWithUrl(this.config.url + '/api/appsettings/ionic_vendor_products/?insecure=cool&post_author=' + this.id + "&page=" + this.page).then((response: any) => {
      let q = 'products?include=' + response.data + "&status=publish";
      this.config.getWoo(q).then((data: any) => {
        if (this.page == 1) this.loading.hide();
        this.infinite.complete();
        let d = data
        console.log(d);
        if (d.length != 0) {
          this.page++;
          for (let value of d) this.products.push(value);
        }
        if (d.length == 0 || d.length < 10) { this.infinite.disabled = true; }
        this.applicationRef.tick();
      });
    });
  }
  contactUs() {
    let email = {
      to: this.email,
      subject: 'your title',
      body: 'your message'
    };
    this.emailComposer.open(email);
  }

  ngOnInit() {
  }

}
