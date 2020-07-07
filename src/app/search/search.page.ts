import { Component, OnInit, ApplicationRef } from '@angular/core';
import { LoadingService } from 'src/providers/loading/loading.service';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';

import { ConfigService } from 'src/providers/config/config.service';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  search;
  searchResult = [];
  showCategories = true;
  constructor(
    public navCtrl: NavController,
    public config: ConfigService,
    public http: HttpClient,

    public loading: LoadingService,
    public shared: SharedDataService,
    public applicationRef: ApplicationRef) { }
  onChangeKeyword = function (e) {
    //console.log(this.search);
    // if (search != undefined) {
    //rchResult = [];
    //  }
  }
  getSearchData = function () {

    if (this.search != undefined) {
      if (this.search == null || this.search == '') {
        this.shared.toast("Please enter something");
        return 0;
      }
    }
    else {
      this.shared.toast("Please enter something");
      return 0;
    }
    this.loading.show();
    this.config.getWoo("products?status=publish&per_page=50&search=" + this.search + "&" + this.config.productsArguments).then((data: any) => {
      this.loading.hide();
      this.searchResult = data
      this.showCategories = false;
      if (this.searchResult.length == 0) {
        this.shared.toast("No Product found!");
      }
      this.applicationRef.tick();
    });
  };

  openProducts(id, name) {
    this.navCtrl.navigateForward(this.config.currentRoute + "/products/" + id + "/" + name + "/newest");
  }

  ngOnInit() {
  }

}
