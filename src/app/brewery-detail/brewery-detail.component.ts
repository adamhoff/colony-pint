import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Brewery } from '../brewery';
import { BreweryService }  from '../brewery.service';


@Component({
  selector: 'app-brewery-detail',
  templateUrl: './brewery-detail.component.html',
  styleUrls: ['./brewery-detail.component.css'],
})
export class BreweryDetailComponent implements OnInit {

  brewery: any[];


  constructor(
    private route: ActivatedRoute,
    private breweryService: BreweryService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getBrewery();
  }

  getBrewery(): void {
    const id = this.route.snapshot.paramMap.get('breweryId');
    this.breweryService.getBrewery(id)
      .subscribe(brewery => this.brewery = brewery.data);
  }

  goBack(): void {
    this.location.back();
  }
}
