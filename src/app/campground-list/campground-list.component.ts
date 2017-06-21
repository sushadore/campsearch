import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CampgroundService } from './../campground.service';
import { campgroundConfig } from './../api-keys';

@Component({
  selector: 'app-campground-list',
  templateUrl: './campground-list.component.html',
  styleUrls: ['./campground-list.component.css'],
  providers: [CampgroundService]
})
export class CampgroundListComponent implements OnInit {
  apiDetailUrl: string;
  apiUrlSearch = `http://api.amp.active.com/camping/campgrounds?landmarkName=true&landmarkLat=45.5231&landmarkLong=-122.6765&xml=true&api_key=${campgroundConfig.apiKey}`;
  camps;

  constructor(
    private router: Router,
    private cs: CampgroundService
  ) { }

  ngOnInit() {
  }

  getCampDetail(campCode: string, campId: string) {
    console.log('clicked');
    this.router.navigate(['campgrounds', campCode, campId])
  }

  getCamps() {
    this.cs.getCampsApi(this.apiUrlSearch).subscribe(data => {
      this.camps = data;
    });
  }

}
