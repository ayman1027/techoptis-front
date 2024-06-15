import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Facture {
  date: string;
  montant: number;
  description: string;
}

export interface Intervention {
  date: string;
  description: string;
}

export interface Property {
  id: number;
  name: string;
  date: string;
  photo: string;
  price: number;
  service: string;
  services: {
    menage: boolean;
    petitDejeuner: boolean;
  };
  description: string;
  factures?: Facture[];
  interventions?: Intervention[];
  revenue?: {
    location: number;
  };
  expenses?: {
    services: number;
  };
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
      services: {
        menage: true,
        petitDejeuner: true
      },
      description: '',
      factures: [
        { date: '2023-01-01', montant: 300, description: 'Loyer Janvier' },
        { date: '2023-02-01', montant: 300, description: 'Loyer Février' }
      ],
      interventions: [
        { date: '2023-03-01', description: 'Réparation de la plomberie' },
        { date: '2023-04-01', description: 'Entretien annuel' }
      ],
      revenue: {
        location: 1200
      },
      expenses: {
        services: 600
      }
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

  addProperty(property: Property): void {
    property.id = this.properties.value.length + 1; // Générer un nouvel ID
    const properties = [...this.properties.value, property];
    this.properties.next(properties);
  }
}


