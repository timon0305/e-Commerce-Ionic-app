import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfigService } from 'src/providers/config/config.service';
import { ModalController, IonSearchbar, NavParams } from '@ionic/angular';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { LocationDataService } from 'src/providers/location-data/location-data.service';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from 'src/providers/loading/loading.service';
import { AppEventsService } from 'src/providers/app-events/app-events.service';

@Component({
  selector: 'app-select-country',
  templateUrl: './select-country.page.html',
  styleUrls: ['./select-country.page.scss'],
})
export class SelectCountryPage implements OnInit {
  @ViewChild('Searchbar', { static: false }) searchBar: IonSearchbar;

  searchQuery: string = '';
  items;
  countries = new Array;

  constructor(
    public http: HttpClient,
    public appEventsService: AppEventsService,
    public config: ConfigService,
    public modalCtrl: ModalController,
    public loading: LoadingService,
    public shared: SharedDataService,
    public navParams: NavParams,
    public location: LocationDataService) {


    this.items = this.countries = this.location.data.countries;
    setTimeout(() => { this.searchBar.setFocus(); }, 250);

  }

  initializeItems() {
    this.items = this.countries
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
  selectCountry(c) {
    let page = this.navParams.get('page');
    this.appEventsService.publish("countryChange", { page: page, value: c });
    if (page == 'shipping') {
      this.shared.shippingCountryName = c.name;
      this.shared.shipping.country = c.value;
      this.shared.shipping.state = null;
      this.shared.shipping.city = null;
      this.shared.shipping.postcode = null;
      this.shared.shippingStateName = "";
    }
    else if (page == 'billing') {
      this.shared.billingCountryName = c.name;
      this.shared.billing.country = c.value;
      this.shared.billing.state = null;
      this.shared.billing.city = null;
      this.shared.billing.postcode = null;
      this.shared.billingStateName = "";
    }

    this.dismiss();
  }

  ngOnInit() {
  }

}
