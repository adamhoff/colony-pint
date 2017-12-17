import { Component, OnInit } from '@angular/core';
import { Brewery } from '../brewery';
import { BreweryService } from '../brewery.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  breweries: any[];

  constructor(private breweryService: BreweryService) { }

  ngOnInit() {
    this.getBreweries();
  }

  getBreweries(): void {
    this.breweryService.getBreweries().subscribe(res => {
       this.breweries = res.data;
    });
  }

  getBreweries2(): void {
    this.breweryService.getBreweries2().subscribe(res => {
      this.breweries = res.data;
    });
  }
  getBreweries3(): void {
    this.breweryService.getBreweries3().subscribe(res => {
      this.breweries = res.data;
    });
  }
  getBreweries4(): void {
    this.breweryService.getBreweries4().subscribe(res => {
      this.breweries = res.data;
    });
  }
  getBreweries5(): void {
    this.breweryService.getBreweries5().subscribe(res => {
      this.breweries = res.data;
    });
  }

}
