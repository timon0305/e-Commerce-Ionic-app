import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/providers/config/config.service';
import { NavController } from '@ionic/angular';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';

@Component({
  selector: 'app-home4',
  templateUrl: './home4.page.html',
  styleUrls: ['./home4.page.scss'],
})
export class Home4Page implements OnInit {
  sliderConfig = {
    slidesPerView: this.config.productSlidesPerPage,
    spaceBetween: 0
  }
  constructor(
    public nav: NavController,
    public config: ConfigService,
    public shared: SharedDataService,
  ) { }

  ionViewDidEnter() {
    this.shared.hideSplashScreen();

  }
  ionViewWillEnter() {
    this.config.setCardStyle("9");
  }
  openSubCategories(parent) {
    let count = 0;
    for (let value of this.shared.allCategories) {
      console.log()
      if (value.parent == parent.id) { count++; console.log(value) }
    }
    if (count != 0)
      this.nav.navigateForward(this.config.currentRoute + "/categories/" + parent.id + "/" + parent.name);
    else
      this.nav.navigateForward(this.config.currentRoute + "/products/" + parent.id + "/" + parent.name + "/newest");
  }
  openProducts(value) {
    this.nav.navigateForward("/products/0/0/" + value);
  }
  ngOnInit() {
  }

}
