import { Component, OnInit, ViewChild, ApplicationRef } from '@angular/core';
import { IonInfiniteScroll, NavController, PopoverController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from 'src/providers/loading/loading.service';
import { ConfigService } from 'src/providers/config/config.service';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { ScratchCardPage } from '../modals/scratch-card/scratch-card.page';
import { AppEventsService } from 'src/providers/app-events/app-events.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {


  @ViewChild(IonInfiniteScroll, { static: false }) infinite: IonInfiniteScroll;

  page = 1;
  notifications = new Array;
  httpRunning = true;

  constructor(
    public navCtrl: NavController,
    public shared: SharedDataService,
    public config: ConfigService,
    public http: HttpClient,
    public loading: LoadingService,
    private applicationRef: ApplicationRef,
    public popoverCtrl: PopoverController,
    public appEventsService: AppEventsService,
  ) {
    this.httpRunning = true;
    this.getNotifications();


    let cardScratched = this.appEventsService.subscribe("cardScratched");
    cardScratched.subscriptions.add(cardScratched.event.subscribe(data => {
      this.updateList(data);
    }));
  }
  getNotifications() {
    this.httpRunning = true;
    this.loading.show();
    this.http.get(this.config.url + '/api/appusers/ionic_coupon_notification/?insecure=cool&user_id=' + this.shared.customerData.id).subscribe((data: any) => {
      this.httpRunning = false;
      this.loading.hide();
      let dat = data.data;

      if (this.page == 1) { this.notifications = new Array; }
      if (dat.length != 0) {
        this.page++;
        for (let value of dat) {
          this.notifications.push(value);
        }
      }
      this.infinite.disabled = true;
      if (dat.length == 0) { this.infinite.disabled = true; }

      this.applicationRef.tick();
      console.log(dat);
    });
  }
  async openScratchCard(v) {
    const popoverElement = await this.popoverCtrl.create({
      component: ScratchCardPage,
      event: event,
      componentProps: {
        "data": v
      }
    });
    return await popoverElement.present();
  }
  refreshPage() {
    this.page = 1;
    this.getNotifications();
  }

  openShop() {
    this.navCtrl.navigateForward("tabs/" + this.config.getCurrentHomePage());
  }
  ionViewDidLoad() {

  }

  updateList(data) {
    for (let v of this.notifications) {
      if (v.id == data.id) {
        v.is_view = 1;
        this.shared.toast("Congratulations you Get " + v.message + " use this code : " + v.code);
        this.http.get(this.config.url + '/api/appusers/ionic_notification_update/?insecure=cool&notification_id=' + v.id).subscribe((data: any) => {
          //this.loading.hide();
          let dat = data.data;
          console.log(data);
        });
      }

    }
  }


  ngOnInit() {
  }

}
