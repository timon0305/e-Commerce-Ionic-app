import { Component, OnInit } from '@angular/core';


import { ConfigService } from 'src/providers/config/config.service';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { ModalController, NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from 'src/providers/loading/loading.service';
import { UserAddressService } from 'src/providers/user-address/user-address.service';
import { LocationDataService } from 'src/providers/location-data/location-data.service';
import { SelectCountryPage } from 'src/app/modals/select-country/select-country.page';
import { SelectZonesPage } from 'src/app/modals/select-zones/select-zones.page';
@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.page.html',
  styleUrls: ['./shipping-address.page.scss'],
})
export class ShippingAddressPage implements OnInit {
  constructor(
    public navCtrl: NavController,
    public config: ConfigService,
    public http: HttpClient,
    public shared: SharedDataService,
    public modalCtrl: ModalController,
    public loading: LoadingService,
    public userAddress: UserAddressService,
    public location: LocationDataService) {

    if (this.shared.customerData.id != null) {
      this.shared.shipping = this.shared.customerData.shipping;
      this.shared.shippingCountryName = this.location.getCountryName(this.shared.customerData.shipping.country);
      this.shared.shippingStateName = this.location.getStateName(this.shared.customerData.shipping.country, this.shared.customerData.shipping.state);
    }
    if (this.shared.shippingCountryName == "" || this.shared.shippingCountryName == null) this.shared.shippingStateName = "";
  }
  disableButton() {

    if (
      this.shared.shipping.first_name == ""
      || this.shared.shipping.last_name == ""
      || this.shared.shipping.city == ""
      || this.shared.shipping.postcode == ""
      || this.shared.shipping.state == ""
      || this.shared.shipping.country == ""
      || this.shared.shipping.address_1 == ""
      || this.shared.shipping.state == null
      || this.shared.shipping.city == null
      || this.shared.shipping.postcode == null
    ) {
      return true;
    }
    else
      return false;
  }
  submit() {
    if (this.config.appNavigationTabs)
      this.navCtrl.navigateForward(this.config.currentRoute + "/billing-address");
    else
      this.navCtrl.navigateForward("/billing-address");
  }

  async selectCountryPage() {
    let modal = await this.modalCtrl.create({
      component: SelectCountryPage,
      componentProps: {
        page: 'shipping'
      }
    });
    return await modal.present();
  }

  async selectZonePage() {
    let modal = await this.modalCtrl.create({
      component: SelectZonesPage,
      componentProps: {
        page: 'shipping'
      }
    });
    return await modal.present();
  }

  getLocationAddress() {
    this.loading.show();
    this.userAddress.getAddress().then((value: any) => {
      this.shared.shipping.country = value.countryCode;
      this.shared.shipping.city = value.locality;
      this.shared.shipping.postcode = value.postalCode;
      this.shared.shipping.state = this.location.getStateCode(value.countryCode, value.administrativeArea);
      this.shared.shippingStateName = value.administrativeArea;
      this.shared.shippingCountryName = value.countryName;
      this.shared.shipping.address_1 = value.subLocality;
      this.loading.hide();
    });
  }
  ngOnInit() {
  }


}
