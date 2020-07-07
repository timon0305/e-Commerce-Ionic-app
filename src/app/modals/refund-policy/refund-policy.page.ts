import { Component, OnInit } from '@angular/core';

import { ConfigService } from 'src/providers/config/config.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-refund-policy',
  templateUrl: './refund-policy.page.html',
  styleUrls: ['./refund-policy.page.scss'],
})
export class RefundPolicyPage implements OnInit {


  constructor(
    public mdCtrl: ModalController,
    public config: ConfigService) { }
  ngOnInit() {
  }

  // For Modal Dismiss
  dismiss() {
    this.mdCtrl.dismiss();
  }

}
