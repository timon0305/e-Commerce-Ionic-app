import { Component, OnInit, Input, ViewChild, ApplicationRef } from '@angular/core';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { ConfigService } from 'src/providers/config/config.service';
import { LoadingService } from 'src/providers/loading/loading.service';


@Component({
  selector: 'app-sliding-tabs',
  templateUrl: './sliding-tabs.component.html',
  styleUrls: ['./sliding-tabs.component.scss'],
})
export class SlidingTabsComponent implements OnInit {
  @ViewChild(IonInfiniteScroll, { static: false }) infinite: IonInfiniteScroll;


  sliderConfig = {
    slidesPerView: "auto"
  }

  @Input('type') type;//product data
  products: any = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  selected = '0';
  page = 1;
  count = 0;
  loadingServerData = false;
  constructor(
    public shared: SharedDataService,
    public config: ConfigService,
    public loading: LoadingService,
    private applicationRef: ApplicationRef
  ) {

  }
  getProducts(infiniteScroll) {
    if (this.loadingServerData) return 0;
    if (this.page == 1) {

      this.count++;
      this.loadingServerData = false;
    }
    this.loadingServerData = true;
    let query = 'products?' + 'page=' + this.page;
    if (this.selected != '0')
      query = 'products?category=' + this.selected + '&page=' + this.page;
    query = query + "&status=publish" + "&" + this.config.productsArguments
    if (this.page == 1) { this.products = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]; }
    this.config.getWoo(query).then((data: any) => {

      let dat = data

      this.infinite.complete();
      if (this.page == 1) {
        this.products = new Array;
      }
      if (dat.length != 0) {
        this.page++;
        for (let value of dat) {
          this.products.push(value);
        }
      }
      if (dat.length < 10) { this.infinite.disabled = true; }
      this.loadingServerData = false;
      this.applicationRef.tick();
    });
  }

  //changing tab
  changeTab(c) {
    this.infinite.disabled = false;
    this.page = 1;
    if (c == '0') this.selected = c
    else this.selected = c.id;
    this.getProducts(null);
    //this.loading.autoHide(700);
  }


  ngOnInit() {
    this.getProducts(null);
  }

}
