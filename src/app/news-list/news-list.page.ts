import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { IonInfiniteScroll, NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { ConfigService } from 'src/providers/config/config.service';
import { LoadingService } from 'src/providers/loading/loading.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-news-list',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './news-list.page.html',
  styleUrls: ['./news-list.page.scss'],
})
export class NewsListPage implements OnInit {
  @ViewChild(IonInfiniteScroll, { static: false }) infinite: IonInfiniteScroll;
  name;
  id;
  page = 1;
  posts = new Array;
  loadingServerData = true;
  constructor(
    public navCtrl: NavController,
    public http: HttpClient,
    public shared: SharedDataService,
    public config: ConfigService,
    public loading: LoadingService,
    private activatedRoute: ActivatedRoute) {
    this.name = this.activatedRoute.snapshot.paramMap.get('name');
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getPosts();
  }
  showPostDetail(post) {
    this.shared.singlePostData = post;
    this.navCtrl.navigateForward(this.config.currentRoute + "/news-detail");
  };

  getImagePost(post) {
    post.image = "assets/placeholder.png";
    if (post._links["wp:featuredmedia"])
      this.config.getWithUrl(post._links["wp:featuredmedia"][0].href).then((data: any) => {
        post.image = data.source_url;
      });
  }

  //============================================================================================  
  //getting list of posts
  getPosts() {
    if (this.page == 1) { this.loading.show(); this.loadingServerData = false; }
    this.config.getWithUrl(this.config.url + '/wp-json/wp/v2/posts/?page=' + this.page + "&categories=" + this.id + "&" + this.config.productsArguments).then((data: any) => {

      this.infinite.complete();//stopping infinite scroll loader
      if (this.page == 1) {
        this.posts = []; this.infinite.disabled = false;
        this.loading.hide();
      }

      this.page++;
      data.forEach((value, index) => {
        this.getImagePost(value);
        this.posts.push(value);
      });

      if (data.length < 9) {// if we get less than 10 products then infinite scroll will de disabled

        this.infinite.disabled = true;//disabling infinite scroll
        if (this.posts.length != 0) {
          // this.shared.toast("All Posts Loaded!");
        }
      }
      this.loadingServerData = true;
    }, err => {
      this.infinite.disabled = true;
      // console.log("Error while loading posts from the server");
      // console.log(response);
    });
  };

  ngOnInit() {
  }

}
