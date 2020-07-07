import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { ConfigService } from 'src/providers/config/config.service';
import { NavController } from '@ionic/angular';
import { LoadingService } from 'src/providers/loading/loading.service';
import { HttpClient } from '@angular/common/http';
declare var google;
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})

export class ContactUsPage implements OnInit {

  @ViewChild('map', { static: false }) mapElement: ElementRef;
  map: any;
  contact = {
    name: '',
    email: '',
    message: ''
  };
  errorMessage = '';

  constructor(
    public http: HttpClient,
    public config: ConfigService,
    public loading: LoadingService,
    public shared: SharedDataService,
  ) {

  }

  ionViewDidLoad() {
    if (this.config.googleMapId != "")
      this.loadMap();
  }
  // <!-- 2.0 updates -->
  submit() {
    this.loading.autoHide(2000);
    var data = {};
    data = this.contact;
    this.http.get(this.config.url + '/api/appusers/send_mail/?insecure=cool&email=' + this.contact.email + '&name=' + this.contact.name + '&message=' + this.contact.message).subscribe((data: any) => {
      console.log(data);

      this.contact.name = '';
      this.contact.email = '';
      this.contact.message = '';
      this.errorMessage = data;
    }, error => {
      this.errorMessage = JSON.parse(error._body).error;
      console.log(this.errorMessage);
    });


  };
  loadMap() {
    const myApiKey = this.config.googleMapId;
    const lat = parseFloat(this.config.latitude);
    const lng = parseFloat(this.config.longitude);
    let content = this.config.address;
    const parentElement = this.mapElement.nativeElement;
    const script = document.createElement('script');

    try {
      script.src = "https://maps.googleapis.com/maps/api/js?key=" + myApiKey;
      script.async = true;
      script.defer = true;
      script.onload = function () {

        let map = new google.maps.Map(parentElement, {
          center: { lat, lng },
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        let marker = new google.maps.Marker({
          map: map,
          animation: google.maps.Animation.DROP,
          position: map.getCenter()
        });

        let infoWindow = new google.maps.InfoWindow({
          content: content
        });

        google.maps.event.addListener(marker, 'click', () => {
          infoWindow.open(map, marker);
        });
      };
      this.mapElement.nativeElement.insertBefore(script, null);
    } catch (error) {

    }
  }
  ngOnInit() {
  }

}
