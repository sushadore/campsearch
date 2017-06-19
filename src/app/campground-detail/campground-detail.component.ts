import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Campground } from '../campground.model';

@Component({
  selector: 'app-campground-detail',
  templateUrl: './campground-detail.component.html',
  styleUrls: ['./campground-detail.component.css']
})
export class CampgroundDetailComponent implements OnInit {
  campgroundId: number = null;

  constructor(private route: ActivatedRoute, private location: Location) {}


  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
    this.campgroundId = parseInt(urlParameters['id']);
    });
  }

}
