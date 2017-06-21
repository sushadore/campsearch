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


// import { Component, NgModule, NgZone, OnInit, ViewChild, ElementRef } from '@angular/core';
// import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
// import { BrowserModule } from "@angular/platform-browser";
// import { AgmCoreModule, MapsAPILoader } from 'angular2-google-maps/core';
//
//
//
// @Component({
//   selector: 'app-google-maps',
//   templateUrl: './google-maps.component.html',
//   styleUrls: ['./google-maps.component.css'],
// })
// export class GoogleMapsComponent implements OnInit {
//   allCity = [];
//   current_city = null;
//   selected_city: string = null;
//   name = ""
//   lat = 0
//   lng = 0
//   total = 0
//   title: string = 'mapit';
//   lat1: number = 43.8041;
//   lng1: number = -120.5542;
//
//
//   // lat2: number = 51.511899;
//   // lng2: number = -0.123270;
//   public latitude: number;
//   public longitude: number;
//   public searchControl: FormControl;
//   public zoom: number;
//
//   @ViewChild("search")
//   public searchElementRef: ElementRef;
//
//   constructor(
//     private mapsAPILoader: MapsAPILoader,
//     private ngZone: NgZone
//   ) {}
//
//   ngOnInit() {
//     //set google maps defaults
//     this.zoom = 4;
//     this.latitude = 39.8282;
//     this.longitude = -98.5795;
//
//     //create search FormControl
//     this.searchControl = new FormControl();
//
//     //set current position
//     this.setCurrentPosition();
//
//     //load Places Autocomplete
//     this.mapsAPILoader.load().then(() => {
//       let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
//         types: ["address"]
//       });
//       autocomplete.addListener("place_changed", () => {
//         this.ngZone.run(() => {
//           //get the place result
//           let place: google.maps.places.PlaceResult = autocomplete.getPlace();
//
//           //verify result
//           if (place.geometry === undefined || place.geometry === null) {
//             return;
//           }
//
//           //set latitude, longitude and zoom
//           this.latitude = place.geometry.location.lat();
//           this.longitude = place.geometry.location.lng();
//           this.zoom = 12;
//         });
//       });
//     });
//   }
//
//   private setCurrentPosition() {
//     if ("geolocation" in navigator) {
//       navigator.geolocation.getCurrentPosition((position) => {
//         this.latitude = position.coords.latitude;
//         this.longitude = position.coords.longitude;
//         this.zoom = 12;
//       });
//     }
//   }
// }
