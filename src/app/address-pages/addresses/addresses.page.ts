import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ConfigService } from 'src/providers/config/config.service';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { ModalController, NavController } from '@ionic/angular';
import { LoadingService } from 'src/providers/loading/loading.service';
import { LocationDataService } from 'src/providers/location-data/location-data.service';
import { SelectCountryPage } from 'src/app/modals/select-country/select-country.page';
import { SelectZonesPage } from 'src/app/modals/select-zones/select-zones.page';
import { AppEventsService } from 'src/providers/app-events/app-events.service';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.page.html',
  styleUrls: ['./addresses.page.scss'],
})
export class AddressesPage implements OnInit {
  billing = {
    first_name: '',
    last_name: '',
    company: '',
    address_1: '',
    address_2: '',
    city: '',
    state: '',
    postcode: '',
    country: '',
    email: '',
    phone: ''
  };
  billingCountryName = "";
  billingStateName = "";
  shipping = {
    first_name: '',
    last_name: '',
    company: '',
    address_1: '',
    address_2: '',
    city: '',
    state: '',
    postcode: '',
    country: ''
  };
  shippingCountryName = "";
  shippingStateName = "";
  constructor(
    public navCtrl: NavController,
    public shared: SharedDataService,
    public modalCtrl: ModalController,
    public config: ConfigService,
    public storage: Storage,
    public appEventsService: AppEventsService,
    public loading: LoadingService,
    public location: LocationDataService) {


    let countryChange = this.appEventsService.subscribe("countryChange");
    countryChange.subscriptions.add(countryChange.event.subscribe(data => {

      if (data.page == "shippingUpdate") {
        this.shippingCountryName = data.value.name;
        this.shipping.country = data.value.value;
        this.shipping.state = null;
        this.shipping.city = null;
        this.shipping.postcode = null;
        this.shippingStateName = "";

      }
      if (data.page == "billingUpdate") {
        this.billingCountryName = data.value.name;
        this.billing.country = data.value.value;
        this.billing.state = null;
        this.billing.city = null;
        this.billing.postcode = null;
        this.billingStateName = "";
      }
    }));

    let updateSideMenu = this.appEventsService.subscribe("updateSideMenu");
    updateSideMenu.subscriptions.add(updateSideMenu.event.subscribe(data => {
      if (data.page == "shippingUpdate") {
        if (data.value == 'other') {
          console.log(data.page + data.value);
          this.shipping.state = 'other';
          this.shippingStateName = "other";
        }

        else {
          this.shipping.state = data.value.value;
          this.shippingStateName = data.value.name
        }

      }
      if (data.page == "billingUpdate") {
        if (data.value == 'other') {
          this.billing.state = 'other';
          this.billingStateName = "other";
        }

        else {
          this.billing.state = data.value.value;
          this.billingStateName = data.value.name;
        }
      }
    }));

    //state is selected

  }

  updateBillingAddress() {
    this.loading.show();
    var d = {
      billing: this.billing
    };
    this.config.putAsync("customers/" + this.shared.customerData.id, d).then((data: any) => {
      this.loading.hide();
      let dat = data
      this.shared.customerData.billing = dat.billing;
      this.storage.set('customerData', this.shared.customerData);
      this.shared.toast("Billing Address Updated");
    });
  }
  updateShippingAddress() {
    this.loading.show();
    var d = {
      shipping: this.shipping
    };
    this.config.putAsync("customers/" + this.shared.customerData.id, d).then((data: any) => {
      this.loading.hide();
      let dat = data

      this.shared.customerData.shipping = dat.shipping;
      console.log("customer data");
      console.log(this.shared.customerData);
      this.storage.set('customerData', this.shared.customerData);
      this.shared.toast("Shipping Address Updated");
    });
  }
  async selectCountryPage(value) {
    let modal = await this.modalCtrl.create({
      component: SelectCountryPage,
      componentProps: {
        page: value
      }
    });
    return await modal.present();
  }
  async selectZonePage(value) {
    let id = (value == "shippingUpdate") ? this.shipping.country : this.billing.country;

    let modal = await this.modalCtrl.create({
      component: SelectZonesPage,
      componentProps: {
        page: value, id: id
      }
    });
    return await modal.present();
  }
  ionViewWillEnter() {

    if (this.shared.customerData.id != null) {
      this.shipping = this.shared.customerData.shipping;
      this.shippingCountryName = this.location.getCountryName(this.shared.customerData.shipping.country);
      this.shippingStateName = this.location.getStateName(this.shared.customerData.shipping.country, this.shared.customerData.shipping.state);

      this.billing = this.shared.customerData.billing;
      this.billingCountryName = this.location.getCountryName(this.shared.customerData.billing.country);
      this.billingStateName = this.location.getStateName(this.shared.customerData.billing.country, this.shared.customerData.billing.state);
    }
  }
  ngOnInit() {

  }
}
