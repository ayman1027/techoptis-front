import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule] 
})
export class NavbarComponent {
  searchQuery: string = '';

  constructor(private router: Router) {}

  onSearch(event: Event): void {
    event.preventDefault();
    this.router.navigate(['/voyageur/list-location'], { queryParams: { query: this.searchQuery } });
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }
}
