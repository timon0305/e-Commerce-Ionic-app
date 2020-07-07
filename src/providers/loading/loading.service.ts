import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  loading;
  constructor(
    public loadingCtrl: LoadingController
  ) {

  }

  async show() {
    this.loading = await this.loadingCtrl.create({
      duration: 7000
    });
    this.loading.present();
  }
  hide() {
    try {
      this.loading.dismiss();
    } catch (error) { 

    }
  }
  async autoHide(time) {
    this.loading = await this.loadingCtrl.create({
      duration: time
    });
    this.loading.present();
  }
}
