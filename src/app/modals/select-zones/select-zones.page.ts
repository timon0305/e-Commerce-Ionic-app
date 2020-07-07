import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, NavController } from '@ionic/angular';
import { ConfigService } from 'src/providers/config/config.service';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from 'src/providers/loading/loading.service';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { LocationDataService } from 'src/providers/location-data/location-data.service';
import { AppEventsService } from 'src/providers/app-events/app-events.service';

@Component({
  selector: 'app-select-zones',
  templateUrl: './select-zones.page.html',
  styleUrls: ['./select-zones.page.scss'],
})
export class SelectZonesPage implements OnInit {

  searchQuery: string = '';
  public items = [];
  public zones = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    public appEventsService: AppEventsService,
    public config: ConfigService,
    public modalCtrl: ModalController,
    public loading: LoadingService,
    public shared: SharedDataService,
    public location: LocationDataService) {

    let page = this.navParams.get('page');
    let id = this.navParams.get('id');
    if (page == 'shipping') {
      this.items = this.zones = this.location.data.states[this.shared.shipping.country];
    }
    else { this.items = this.zones = this.location.data.states[this.shared.billing.country]; }

    if (page == 'shippingUpdate' || page == 'billingUpdate') {
      console.log(id);
      this.items = this.zones = this.location.data.states[id];
      if (this.items == undefined) this.items = this.zones = [];
      console.log(this.items);
    }
  }

  initializeItems() {
    this.items = this.zones
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  //close modal
  dismiss() {
    this.modalCtrl.dismiss();
  }

  selectZone(c) {

    let page = this.navParams.get('page');

    this.appEventsService.publish("stateChange", { page: page, value: c });

    if (page == 'shipping') {
      if (c == 'other') {
        this.shared.shipping.state = 'other';
        this.shared.shippingStateName = "other";
      }

      else {
        this.shared.shipping.state = c.value;
        this.shared.shippingStateName = c.name
        // this.shared.orderDetails.tax_zone_id = c.zone_id;
      }
    }
    else {
      if (c == 'other') {
        this.shared.billing.state = 'other';
        this.shared.billingStateName = "other";
      }

      else {
        this.shared.billing.state = c.value;
        this.shared.billingStateName = c.name;
      }
    }
    this.dismiss();
  }
  hideOther() {
    if (this.zones == undefined) this.zones = [];
    if (this.zones.length == 0) return true;
    else return false;
  }
  ngOnInit() {
  }
}
