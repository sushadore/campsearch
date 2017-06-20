import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent implements OnInit {
  title: string = 'mapit';
  lat1: number = 43.8041;
  lng1: number = -120.5542;
  // lat2: number = 51.511899;
  // lng2: number = -0.123270;

  constructor() { }

  ngOnInit() {
  }

}
