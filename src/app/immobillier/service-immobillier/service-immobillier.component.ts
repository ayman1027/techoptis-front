import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ImmobilierService, Property } from '../../immobilier.service';

@Component({
  selector: 'app-service-immobillier',
  templateUrl: './service-immobillier.component.html',
  styleUrls: ['./service-immobillier.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule],
  providers: [ImmobilierService]
})
export class ServiceImmobillierComponent implements OnInit {
  properties: Property[] = [];

  constructor(private immobilierService: ImmobilierService) { }

  ngOnInit(): void {
    this.immobilierService.properties$.subscribe((properties: Property[]) => {
      this.properties = properties;
    });
  }

  // Ajoutez d'autres méthodes si nécessaire
}
