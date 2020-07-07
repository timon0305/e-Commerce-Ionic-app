import { Component, OnInit, ViewChild, ApplicationRef } from '@angular/core';
import { IonInfiniteScroll, NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/providers/config/config.service';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';

import { LoadingService } from 'src/providers/loading/loading.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.page.html',
  styleUrls: ['./my-orders.page.scss'],
})
export class MyOrdersPage implements OnInit {

  @ViewChild(IonInfiniteScroll, { static: false }) infinite: IonInfiniteScroll;

  page = 1;
  orders = new Array;
  httpRunning = true;
  constructor(
    public navCtrl: NavController,
    public http: HttpClient,
    public config: ConfigService,
    public shared: SharedDataService,

    public loading: LoadingService,
    private applicationRef: ApplicationRef
  ) {
  }
  getOrders() {
    this.httpRunning = true;
    if (this.page == 1) { this.loading.show(); }

    this.config.getWoo('orders/?' + 'page=' + this.page + "&customer=" + this.shared.customerData.id + "&" + this.config.productsArguments).then((data: any) => {
      this.infinite.complete();
      this.httpRunning = false;
      let dat = data;

      if (this.page == 1) { this.orders = new Array; this.loading.hide(); }
      if (dat.length != 0) {
        this.page++;
        for (let value of dat) {
          this.orders.push(value);
        }
      }

      if (dat.length == 0) { this.infinite.disabled = true; }

      this.applicationRef.tick();
    }, err => {
      this.loading.hide();
      this.shared.showAlert("Server Error while Loading Orders");
    });
  };
  showOrderDetail(order) {
    this.shared.myOrderDetialPageData = order;

    if (this.config.appNavigationTabs)
      this.navCtrl.navigateForward(this.config.currentRoute + "/my-order-detail");
    else
      this.navCtrl.navigateForward("/my-order-detail");
  }
  ionViewDidLoad() {

  }

  openShop() {

    if (this.config.appNavigationTabs)
      this.navCtrl.navigateForward(this.config.currentRoute + "/products/0/0/newest");
    else
      this.navCtrl.navigateForward("/products/0/0/newest");

  }
  refreshPage() {
    this.page = 1;
    this.infinite.disabled = false;
    this.getOrders();
  }
  addCurrecny(order, v2) {
    return order.currency + " " + v2;
  }

  ngOnInit() {
    this.httpRunning = true;
    this.getOrders();
  }

}
