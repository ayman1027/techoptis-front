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
  revenue?: { location: number };
  expenses?: { services: number };
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
      description: 'Un bel appartement au cœur de Paris',
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
    {
      id: 2,
      name: 'Maison Bordeaux',
      date: '2023-07-01',
      photo: 'path/to/photo2.jpg',
      price: 1500,
      service: 'Piscine, Jardin',
      services: {
        menage: false,
        petitDejeuner: true
      },
      description: 'Une belle maison à Bordeaux',
      factures: [
        { date: '2023-01-01', montant: 500, description: 'Loyer Janvier' },
        { date: '2023-02-01', montant: 500, description: 'Loyer Février' }
      ],
      interventions: [
        { date: '2023-05-01', description: 'Réparation du toit' },
        { date: '2023-06-01', description: 'Entretien du jardin' }
      ],
      revenue: {
        location: 1500
      },
      expenses: {
        services: 700
      }
    }
    
  ]);

  properties$ = this.properties.asObservable();

  getProperties(): Property[] {
    return this.properties.getValue();
  }

  getPropertyById(id: number): Property | undefined {
    return this.getProperties().find((property) => property.id === id);
  }

  updateProperty(updatedProperty: Property): void {
    const properties = this.getProperties().map((property) =>
      property.id === updatedProperty.id ? updatedProperty : property
    );
    this.properties.next(properties);
  }

  addProperty(property: Property): void {
    property.id = this.getProperties().length + 1; 
    const properties = [...this.getProperties(), property];
    this.properties.next(properties);
  }
}

