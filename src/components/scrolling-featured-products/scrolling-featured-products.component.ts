import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfigService } from 'src/providers/config/config.service';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-scrolling-featured-products',
  templateUrl: './scrolling-featured-products.component.html',
  styleUrls: ['./scrolling-featured-products.component.scss'],
})
export class ScrollingFeaturedProductsComponent implements OnInit {
  @ViewChild(IonInfiniteScroll, { static: false }) infinite: IonInfiniteScroll;
  // For products
  products: any = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  selected = '';
  page = 1;
  count = 0;
  loadingServerData = false;

  constructor(
    public config: ConfigService,
    public shared: SharedDataService, ) {
  }

  getProducts() {
    if (this.loadingServerData) return 0;
    if (this.page == 1) {

      this.count++;
      this.loadingServerData = false;
    }
    this.loadingServerData = true;
    let query = 'products?' + 'page=' + this.page;
    if (this.selected != '')
      query = 'products?page=' + this.page;
    query = query + "&status=publish" + "&" + this.config.productsArguments
    this.config.getWoo(query).then((data: any) => {

      let dat = data;

      this.infinite.disabled = false;
      if (this.page == 1) {
        this.products = new Array;

      }
      if (dat.length != 0) {
        this.page++;
        for (let value of dat) {
          this.products.push(value);
        }
      }
      if (dat.length == 0) { this.infinite.disabled = true; }
      this.loadingServerData = false;
    });
  }

  ngOnInit() {
    this.getProducts();
  }
}
