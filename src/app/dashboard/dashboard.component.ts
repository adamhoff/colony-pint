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
}
