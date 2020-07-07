import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from 'src/providers/loading/loading.service';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { ConfigService } from 'src/providers/config/config.service';

@Component({
  selector: 'app-reward-points',
  templateUrl: './reward-points.page.html',
  styleUrls: ['./reward-points.page.scss'],
})
export class RewardPointsPage implements OnInit {

  rewards = [];
  httpLoading = true;
  constructor(public navCtrl: NavController,
    public http: HttpClient,
    public loading: LoadingService,
    public shared: SharedDataService,
    public config: ConfigService) {
    this.getRewards();
  }
  getRewards() {
    this.httpLoading = true;
    this.loading.show();
    this.http.get(this.config.url + '/api/appusers/ionic_reward_points/?insecure=cool&user_id=' + this.shared.customerData.id).subscribe((data: any) => {
      this.httpLoading = false;
      this.loading.hide();
      let dat = data.data;
      this.rewards = dat;
      console.log(dat);
    });
  }

  openShop() {
    this.navCtrl.navigateForward("tabs/" + this.config.getCurrentHomePage());
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RewardPointsPage');
  }
  refreshPage() {
    this.getRewards();
  }
  totalPoints() {
    let t = 0;
    for (let v of this.rewards) {
      t = t + parseInt(v.points);
    }
    return t;
  }


  ngOnInit() {
  }

}
