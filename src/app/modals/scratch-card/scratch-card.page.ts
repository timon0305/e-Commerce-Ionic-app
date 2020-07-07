import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavController, NavParams, PopoverController } from '@ionic/angular';
import { AppEventsService } from 'src/providers/app-events/app-events.service';

declare var ScratchCard;
declare var SCRATCH_TYPE;

@Component({
  selector: 'app-scratch-card',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './scratch-card.page.html',
  styleUrls: ['./scratch-card.page.scss'],
})
export class ScratchCardPage implements OnInit {

  data: any;
  constructor(
    public navCtrl: NavController,
    public popoverCtrl: PopoverController,
    public navParams: NavParams,
    public appEventsService: AppEventsService,
  ) {
    this.data = this.navParams.get("data");
  }

  ionViewDidLoad() {
  }
  close() {
    this.popoverCtrl.dismiss();
  }
  ionViewDidEnter() {
    this.data = this.navParams.get("data");
    console.log(this.data);
    var _this = this;
    // window.addEventListener('load', function () {

    var html = '<div class="test">' + this.data.message + '<br>(code : <strong>' + this.data.code + ')</strong></div>'
    var scContainer = document.getElementById('js--sc--container');
    var sc = new ScratchCard('#js--sc--container', {
      enabledPercentUpdate: true,
      scratchType: SCRATCH_TYPE.CIRCLE,
      // brushSrc: './images/brush.png',
      containerWidth: scContainer.offsetWidth,
      containerHeight: scContainer.offsetHeight,
      imageForwardSrc: 'assets/scratchcard.png',
      imageBackgroundSrc: '',
      htmlBackground: html,
      clearZoneRadius: 25,
      percentToFinish: 25, // When the percent exceeds 50 on touchend event the callback will be exec.
      nPoints: 30,
      pointSize: 20,
      callback: function () {
        _this.appEventsService.publish('cardScratched', _this.data);
        console.log("Card is scratched");
        //_this.close();
      }
    })
    sc.init();
  }
  ngOnInit() {


  }

}
