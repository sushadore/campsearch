import { Pipe, PipeTransform } from '@angular/core';
import { Location } from '@angular/common';
import { Campground } from './campground.model';
import { CampgroundService } from './campground.service';


@Pipe({
  name: 'amenities',
  pure: false
})
export class AmenitiesPipe implements PipeTransform {

  transform(input: any[], desiredAmenity) {
    console.log(input);
    // var output: string[] = [];
    // if(desiredAmenity === "Laundry") {
    //   for (var i = 0; i < input.length; i++) {
    //     if (input[i].includes("Laundry")) {
    //       output.push(input[i]);
    //     }
    //   }
    //   return output;
    // } else if (desiredAmenity === "Restroom and Showers") {
    //   for (var i = 0; i < input.length; i++) {
    //     if (input[i].includes("Restroom and Showers")) {
    //       output.push(input[i]);
    //     }
    //   }
    //   return output;
    //
    // } else if (desiredAmenity === "Cable") {
    //   for (var i = 0; i < input.length; i++) {
    //     if (input[i].includes("Cable")) {
    //       output.push(input[i]);
    //     }
    //   }
    //   return output;
    //
    // } else if (desiredAmenity === "Restrooms") {
    //   for (var i = 0; i < input.length; i++) {
    //     if (input[i].includes("Restrooms")) {
    //       output.push(input[i]);
    //     }
    //   }
    //   return output;
    //
    // } else if (desiredAmenity === "RV Wash") {
    //     for (var i = 0; i < input.length; i++) {
    //       if (input[i].includes("RV Wash")) {
    //         output.push(input[i]);
    //       }
    //     }
    //   return output;
    // } else if (desiredAmenity === "Firewood") {
    //     for (var i = 0; i < input.length; i++) {
    //       if (input[i].includes("Firewood")) {
    //         output.push(input[i]);
    //       }
    //     }
    //   return output;
    // } else if (desiredAmenity === "Yurt") {
    //     for (var i = 0; i < input.length; i++) {
    //       if (input[i].includes("Yurt")) {
    //         output.push(input[i]);
    //       }
    //     }
    //   return output;
    // } else if (desiredAmenity === "Yurt") {
    //     for (var i = 0; i < input.length; i++) {
    //       if (input[i].includes("Yurt")) {
    //         output.push(input[i]);
    //       }
    //     }
    //   return output;
    // } else {
    //   return input;
    // }
  }
}
