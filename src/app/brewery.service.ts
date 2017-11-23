import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';

import { Brewery } from './brewery';

interface BreweryResponse{
  data: any[];
}

@Injectable()
export class BreweryService {

  breweries: any[];

  constructor(private http: HttpClient) {}
  locality = 'locations/?locality=fredericksburg';
  region = 'locations/?region=virginia';
  breweriesUrl = 'http://api.brewerydb.com/v2/';

  KEY = '&key=0d33597fb6cd3ec12459d2c8a84dd0db';
  key = '0d33597fb6cd3ec12459d2c8a84dd0db';

  key2 = '0fa7baec79a40f0c5270d7dbfcce4a52'
  KEY2 = '&key=0fa7baec79a40f0c5270d7dbfcce4a52'

  getBreweries() {
   return this.http.get<BreweryResponse>(this.breweriesUrl + this.region + this.KEY);
  }

  getBrewery(id: string) {
    return this.http.get<BreweryResponse>(this.breweriesUrl + `brewery/${id}/?key=` + this.key);
  }

  getBeer(id: string) {
    return this.http.get<BreweryResponse>(this.breweriesUrl + `brewery/${id}/beers/?key=` + this.key);
  }
}
