import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { ConfigService } from 'src/providers/config/config.service';
import { AppEventsService } from 'src/providers/app-events/app-events.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  public slides = [
    { image: "assets/intro/1.gif", title: "Home Page", icon: "home", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus." },
    { image: "assets/intro/2.gif", title: "Category Page", icon: "apps", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus." },
    { image: "assets/intro/3.gif", title: "Shop Page", icon: "share", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus." },
    { image: "assets/intro/4.gif", title: "Cart Page", icon: "basket", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus." },
    { image: "assets/intro/5.gif", title: "Order Page", icon: "calendar", description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus." }
  ];

  constructor(
    public navCtrl: NavController,
    public shared: SharedDataService,
    public config: ConfigService,
    public appEventsService: AppEventsService, ) {
  }
  openHomePage() {
    this.appEventsService.publish("openHomePage", "");
    this.config.checkingNewSettingsFromServer();
  }
  ionViewDidEnter() {
    this.shared.hideSplashScreen();
  }
  ngOnInit() {
  }

}
