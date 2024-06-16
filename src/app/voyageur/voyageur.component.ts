import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-voyageur',
  templateUrl: './voyageur.component.html',
  styleUrls: ['./voyageur.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, NavbarComponent]
})
export class VoyageurComponent {
  searchCriteria = {
    address: '',
    arrival: '',
    departure: '',
    adults: 1,
    children: 0
  };

  constructor(private router: Router) {}

  onSubmit() {
    this.router.navigate(['/voyageur/list-location'], {
      queryParams: {
        address: this.searchCriteria.address,
        arrival: this.searchCriteria.arrival,
        departure: this.searchCriteria.departure,
        adults: this.searchCriteria.adults,
        children: this.searchCriteria.children
      }
    });
  }
}

