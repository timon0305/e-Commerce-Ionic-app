import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-blank-modal',
  templateUrl: './blank-modal.page.html',
  styleUrls: ['./blank-modal.page.scss'],
})
export class BlankModalPage implements OnInit {

  constructor(public modalCont: ModalController,) {

  }

  ngOnInit() {

  }
  ionViewDidEnter() {
    //this.modalCont.dismiss();
  }
}
