import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Property {
  id: number;
  name: string;
  date: string;
  photo: string;
  price: number;
  service: string;
}

@Injectable({
  providedIn: 'root',
})
export class ImmobilierService {
  private properties = new BehaviorSubject<Property[]>([
    {
      id: 1,
      name: 'Appartement Paris',
      date: '2023-06-01',
      photo: 'path/to/photo.jpg',
      price: 1200,
      service: 'Wifi, TV',
    },
    // Ajoutez d'autres propriétés ici
  ]);

  properties$ = this.properties.asObservable();

  getPropertyById(id: number): Property | undefined {
    return this.properties.value.find((property) => property.id === id);
  }

  updateProperty(updatedProperty: Property): void {
    const properties = this.properties.value.map((property) =>
      property.id === updatedProperty.id ? updatedProperty : property
    );
    this.properties.next(properties);
  }
}
