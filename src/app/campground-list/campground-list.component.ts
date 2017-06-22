import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CampgroundService } from './../campground.service';
import { campgroundConfig } from './../api-keys';

@Component({
  selector: 'app-campground-list',
  templateUrl: './campground-list.component.html',
  styleUrls: ['./campground-list.component.css'],
  providers: [CampgroundService]
})
export class CampgroundListComponent implements OnChanges {
  @Input() lat;
  @Input() lng;
  @Output() sendCamps = new EventEmitter();

  camps;

  constructor(
    private router: Router,
    private cs: CampgroundService
  ) { }

  ngOnChanges() {
    this.getCamps(this.lat, this.lng);
  }

  getCampDetail(campCode: string, campId: string) {
    this.router.navigate(['campgrounds', campCode, campId])
  }

  getCamps(lat: string, lng: string) {
    this.cs.getCampsApi(lat, lng).subscribe(data => {
      this.camps = data;
      this.sendCamps.emit(this.camps);
    });
  }

}
