import { Component, OnInit, ApplicationRef } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ConfigService } from 'src/providers/config/config.service';

import { HttpClient } from '@angular/common/http';
import { LoadingService } from 'src/providers/loading/loading.service';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.page.html',
  styleUrls: ['./add-review.page.scss'],
})
export class AddReviewPage implements OnInit {

  rating = null;
  nonce;
  errorMessage = '';
  id;
  formData = { name: '', email: '', description: '' };

  ratingStars = [
    { value: '1', fill: 'star-outline' },
    { value: '2', fill: 'star-outline' },
    { value: '3', fill: 'star-outline' },
    { value: '4', fill: 'star-outline' },
    { value: '5', fill: 'star-outline' }
  ];
  constructor(
    public navCtrl: NavController,
    public http: HttpClient,
    public config: ConfigService,
    private activatedRoute: ActivatedRoute,
    public loading: LoadingService,
    public shared: SharedDataService,
    private applicationRef: ApplicationRef,
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getNonce();
    this.formData.name = this.shared.customerData.first_name + " " + this.shared.customerData.last_name;
    this.formData.email = this.shared.customerData.email;
  }
  getNonce() {
    this.loading.show();
    this.http.get(this.config.url + "/api/get_nonce/?controller=AppSettings&method=create_product_review").subscribe((data: any) => {
      this.nonce = data.nonce;
      console.log(data);
      this.loading.hide();
    });
  }
  addComment() {
    this.loading.show();
    this.http.get(this.config.url + "/api/appsettings/create_product_review/?insecure=cool&nonce="
      + this.nonce
      + "&author_name=" + this.formData.name
      + "&author_email=" + this.formData.email
      + "&product_id=" + this.id
      + "&author_content=" + this.formData.description
      + "&rate_star=" + this.rating
      + "&user_id=" + this.shared.customerData.id
    ).subscribe((data: any) => {
      this.loading.hide();
      if (data.status == 'ok') {
        this.navCtrl.pop();
      }
      console.log(data);
    }, err => {
      this.errorMessage = err.message;
    });
  }
  selectRating(value) {
    this.rating = value;
    for (let v of this.ratingStars) {
      if (v.value <= value) v.fill = 'star';
      else v.fill = 'star-outline';
    }
    this.applicationRef.tick();
  }
  disbaleButton() {
    //this.applicationRef.tick();
    if (this.rating == null) { return true; }
    else if (this.formData.description == "") { return true; }
    else if (this.formData.name == "") { return true; }
    else if (this.formData.email == "") { return true; }
    else { return false; }
  }
  ngOnInit() {
  }

}
