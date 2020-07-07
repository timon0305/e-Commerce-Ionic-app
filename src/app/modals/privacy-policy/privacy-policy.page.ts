import { Component, OnInit } from '@angular/core';



import { ModalController } from '@ionic/angular';
import { ConfigService } from 'src/providers/config/config.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.page.html',
  styleUrls: ['./privacy-policy.page.scss'],
})
export class PrivacyPolicyPage implements OnInit {

  constructor(
    public mdCtrl: ModalController,
    public config: ConfigService ) { }

  ngOnInit() {
  }

  // For Modal Dismiss
  dismiss() {
    this.mdCtrl.dismiss();
  }
}
