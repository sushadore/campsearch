import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CampgroundService } from './../campground.service';
import { campgroundConfig } from './../api-keys';

@Component({
  selector: 'app-base-camp',
  templateUrl: './base-camp.component.html',
  styleUrls: ['./base-camp.component.css'],
  providers: [CampgroundService]
})
export class BaseCampComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
