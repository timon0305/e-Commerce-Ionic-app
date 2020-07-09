import {Component, OnInit, ViewChild, ElementRef, NgZone, AfterContentInit, AfterViewInit} from '@angular/core';
import {SharedDataService} from 'src/providers/shared-data/shared-data.service';
import {ConfigService} from 'src/providers/config/config.service';
import {NavController} from '@ionic/angular';
import {LoadingService} from 'src/providers/loading/loading.service';
import {HttpClient} from '@angular/common/http';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {google} from 'google-maps';

declare var google: any;

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.page.html',
    styleUrls: ['./contact-us.page.scss'],
})

export class ContactUsPage implements OnInit {

    @ViewChild('map', {static: false}) mapElement:ElementRef;
    map: any;
    //
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
        // public zone: NgZone,
        private geolocation: Geolocation
    ) {

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

        // let coords = new google.maps.LatLng(24.774265, 46.738586);
        // let mapOptions: google.maps.MapOptions = {
        //     center: coords,
        //     zoom: 14,
        //     mapTypeId: google.maps.MapTypeId.ROADMAP
        // };
        //
        // this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        // let marker : google.maps.Marker = new google.maps.Marker({
        //     map: this.map,
        //     animation: google.maps.Animation.DROP,
        //     position: coords
        // });
        // google.maps.event.addListener(marker, 'click', () => {
        //     infoWindow.open(map, marker);
        // });
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            center: {lat: 24.774265, lng: 46.738586},
            zoom: 8
        });
        const myApiKey = this.config.googleMapId;
        const lat = parseFloat(this.config.latitude);
        const lng = parseFloat(this.config.longitude);
        let content = this.config.address;
        const parentElement = this.mapElement.nativeElement;
        const script = document.createElement('script');

        console.log(this.config)
        try {
          // script.src = "https://maps.googleapis.com/maps/api/js?key=" + myApiKey;
          script.async = true;
          script.defer = true;
          script.onload = function () {

            let map = new google.maps.Map(parentElement, {
              center: { lat: 24.774265, lng: 46.738586 },
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
        // this.loadMap();
        setTimeout(() => {
            // console.log(this.mapElement.nativeElement);
            this.loadMap()
        }, 3000);
    }

}
