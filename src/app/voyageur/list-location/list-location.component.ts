import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Property, ImmobilierService } from '../../immobilier.service';

@Component({
  selector: 'app-list-location',
  templateUrl: './list-location.component.html',
  styleUrls: ['./list-location.component.css'],
  standalone: true,
  imports: [CommonModule] 
})
export class ListLocationComponent implements OnInit {
  searchTerm: string = '';
  searchResults: Property[] = [];

  constructor(
    private route: ActivatedRoute,
    private immobilierService: ImmobilierService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['query'] || '';
      this.search();
    });
  }

  search(): void {
    if (this.searchTerm) {
      this.searchResults = this.immobilierService.getProperties().filter(property =>
        property.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.searchResults = this.immobilierService.getProperties();
    }
  }
}
