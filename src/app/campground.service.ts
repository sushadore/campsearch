import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';



@Injectable()
export class CampgroundService {

  constructor (private http: Http) {}

  ngOnInit() {
  }

  getCampsApi(url) {
    return this.http.get(url).map(res => {
        return res;
      }).subscribe(data => {
      });
  }
}
