import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Campground } from '../campground.model';
import { CampgroundService } from './../campground.service';

@Component({
  selector: 'app-campground-detail',
  templateUrl: './campground-detail.component.html',
  styleUrls: ['./campground-detail.component.css'],
  providers: [CampgroundService]
})
export class CampgroundDetailComponent implements OnInit {
  campDetail;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private cs: CampgroundService
  ) {}


  ngOnInit() {
    let campgroundId: string = null;
    let campgroundCode: string = null;
    this.route.params.forEach((urlParameters) => {
      campgroundCode = urlParameters['code'];
      campgroundId = urlParameters['id'];
    });

    this.cs.getCampDetailApi(
      campgroundCode,
      campgroundId
    ).subscribe(data => {
      this.campDetail = data;
    });
    console.log('campDetail: ', this.campDetail);
  }

}
