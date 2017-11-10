import { Component, OnInit } from '@angular/core';
import { BreweryService } from '../brewery.service';

@Component({
  selector: 'app-breweries',
  templateUrl: './breweries.component.html',
  styleUrls: ['./breweries.component.css'],
})

export class BreweriesComponent implements OnInit {

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
