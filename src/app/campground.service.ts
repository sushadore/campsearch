import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import xml2js from 'xml2js';

@Injectable()
export class CampgroundService {
  camps;
  constructor (private http: Http) {}

  ngOnInit() {
  }

  getCampsApi(url) {
    return this.http.get(url).map(res => {
      xml2js.parseString( res.text(), (err, result) => {
        this.camps = result.resultset.result; // JSON object!
      });
      return this.camps;
    });
  }
}
