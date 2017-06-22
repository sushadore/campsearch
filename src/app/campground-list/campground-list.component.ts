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
  filterByAmenities: string = "All";
  @Input() lat;
  @Input() lng;
  @Output() sendCamps = new EventEmitter();


  camps;

  constructor(
    private router: Router,
    private cs: CampgroundService
  ) { }

  ngOnChanges() {
    this.getCamps(this.lat, this.lng, this.filterByAmenities);
  }

  getCampDetail(campCode: string, campId: string) {
    this.router.navigate(['campgrounds', campCode, campId])
  }

  getCamps(lat: string, lng: string, option: string) {
    this.cs.getCampsApi(lat, lng, option).subscribe(data => {
      this.camps = data;
      this.sendCamps.emit(this.camps);
    });
  }

  sortByAmenities(optionFromMenu) {
    this.filterByAmenities = optionFromMenu;
    this.getCamps(this.lat, this.lng, this.filterByAmenities);
  }
}
