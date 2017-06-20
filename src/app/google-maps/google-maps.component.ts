import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent implements OnInit {
  title: string = 'My first angular2-google-maps project';
  lat1: number = 51.531826;
  lng1: number = -0.124391;
  lat2: number = 51.511899;
  lng2: number = -0.123270;

  constructor() { }

  ngOnInit() {
  }

}
