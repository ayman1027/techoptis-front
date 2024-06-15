import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class NavbarComponent {

  constructor(private router: Router) {} 

  onSearch(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value;
    console.log('Search term:', searchTerm);
    
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }
}
