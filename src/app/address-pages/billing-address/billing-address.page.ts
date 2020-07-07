import { Component, OnInit, ApplicationRef } from '@angular/core';


import { ConfigService } from 'src/providers/config/config.service';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { ModalController, NavController } from '@ionic/angular';
import { LocationDataService } from 'src/providers/location-data/location-data.service';
import { SelectCountryPage } from 'src/app/modals/select-country/select-country.page';
import { SelectZonesPage } from 'src/app/modals/select-zones/select-zones.page';
@Component({
  selector: 'app-billing-address',
  templateUrl: './billing-address.page.html',
  styleUrls: ['./billing-address.page.scss'],
})
export class BillingAddressPage implements OnInit {
  defaultAddress = false;
  constructor(
    public config: ConfigService,
    public shared: SharedDataService,
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public location: LocationDataService,
    private applicationRef: ApplicationRef,
    // public loading: LoadingProvider, 
  ) {
    if (this.shared.customerData.id != null) {
      this.shared.billing = this.shared.customerData.billing;
      this.shared.billing.email = this.shared.customerData.email;
      this.shared.billingCountryName = this.location.getCountryName(this.shared.customerData.billing.country);
      this.shared.billingStateName = this.location.getStateName(this.shared.customerData.billing.country, this.shared.customerData.billing.state);
    }
    if (this.shared.billingCountryName == "" || this.shared.billingCountryName == null) this.shared.billingStateName = "";
  }
  // <!-- 2.0 updates -->
  setAddress(value) {
    if (this.defaultAddress == false) this.defaultAddress = true;
    else this.defaultAddress = false;
    this.shared.sameAddress = this.defaultAddress;
    console.log(this.defaultAddress);
    if (this.defaultAddress == true) {
      console.log(" billing ==shipping");
      this.shared.billing.first_name = this.shared.shipping.first_name;
      this.shared.billing.last_name = this.shared.shipping.last_name;
      this.shared.billing.state = this.shared.shipping.state;
      this.shared.billing.postcode = this.shared.shipping.postcode;
      this.shared.billing.country = this.shared.shipping.country;
      this.shared.billing.address_1 = this.shared.shipping.address_1;
      this.shared.billing.address_2 = this.shared.shipping.address_2;
      this.shared.billing.city = this.shared.shipping.city;
      this.shared.billing.company = this.shared.shipping.company;
      this.shared.billingCountryName = this.shared.shippingCountryName;
      this.shared.billingStateName = this.shared.shippingStateName;
    }
    else {
      if (this.shared.customerData.id != null) {
        console.log("changing customer data billing");
        console.log(this.shared.customerData);
        this.shared.billing = this.shared.customerData.billing;
        this.shared.billingCountryName = this.location.getCountryName(this.shared.customerData.billing.country);
        this.shared.billingStateName = this.location.getStateName(this.shared.customerData.billing.country, this.shared.customerData.billing.state);
      }
      else {
        console.log("changing customer data to null for guest");
        this.shared.billing.first_name = '';
        this.shared.billing.last_name = '';
        this.shared.billing.state = '';
        this.shared.billing.postcode = '';
        this.shared.billing.country = '';
        this.shared.billing.address_1 = '';
        this.shared.billing.address_2 = '';
        this.shared.billing.city = '';
        this.shared.billing.company = '';
        this.shared.billingCountryName = "";
        this.shared.billingStateName = "";
      }
    }
    this.applicationRef.tick();
  }
  submit() {
    if (this.config.appNavigationTabs)
      this.navCtrl.navigateForward(this.config.currentRoute + "/shipping-method");
    else
      this.navCtrl.navigateForward("shipping-method");

    this.applicationRef.tick();
  }

  async selectCountryPage() {
    let modal = await this.modalCtrl.create({
      component: SelectCountryPage,
      componentProps: { page: 'billing' }
    });
    return await modal.present();
  }

  async selectZonePage() {
    let modal = await this.modalCtrl.create({
      component: SelectZonesPage,
      componentProps: { page: 'billing', id: this.shared.billing.country }
    });
    return await modal.present();
  }
  disableButton() {
    if (
      this.shared.billing.first_name == ""
      || this.shared.billing.last_name == ""
      || this.shared.billing.city == ""
      || this.shared.billing.postcode == ""
      || this.shared.billing.state == ""
      || this.shared.billing.country == ""
      || this.shared.billing.address_1 == ""
      || this.shared.billing.phone == ""
      || this.shared.billing.email == ""
      || this.shared.billing.state == null
      || this.shared.billing.city == null
      || this.shared.billing.postcode == null
      || this.shared.billing.phone == null
    ) {
      return true;
    }
    else
      return false;
  }
  ngOnInit() { }

}
