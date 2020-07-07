import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {
  post: any;
  constructor(public shared: SharedDataService) {

  }

  ngOnInit() {
    this.post = this.shared.singlePostData;
  }

}
