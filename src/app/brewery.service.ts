import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';

import { Brewery } from './brewery';
import { BREWERIES } from './mock-breweries';

interface BreweryResponse{
  data: any[];
}

@Injectable()
export class BreweryService {

  breweries: any[];

  constructor(private http: HttpClient) { }
  breweriesUrl = 'http://api.brewerydb.com/v2/locations/?locality=fredericksburg&key=0d33597fb6cd3ec12459d2c8a84dd0db';
  KEY = 'key=0d33597fb6cd3ec12459d2c8a84dd0db';

  getBreweries() {
   return this.http.get<BreweryResponse>(this.breweriesUrl);
  }

  getBrewery(id: number): Observable<Brewery> {
    return of(BREWERIES.find(brewery => brewery.id === id));
  }
}
