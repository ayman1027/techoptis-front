import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ImmobilierService, Property } from '../../immobilier.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class EditComponent implements OnInit {
  property: Property = {
    id: 0,
    name: '',
    date: '',
    photo: '',
    price: 0,
    service: '',
    services: {
      menage: true,
      petitDejeuner: true
    },
    description: ''
  };

  constructor(
    private router: Router,
    private immobilierService: ImmobilierService
  ) { }

  ngOnInit(): void {
    // Initialisation
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.property.photo = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit(): void {
    this.immobilierService.addProperty(this.property);
    this.router.navigate(['/immobilier/list']);
  }
}
