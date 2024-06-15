import { Routes } from '@angular/router';
import { ImmobillierComponent } from './immobillier/immobillier.component';
import { CalendarImmobillierComponent } from './immobillier/calendar-immobillier/calendar-immobillier.component';
import { EditImmobillierComponent } from './immobillier/edit-immobillier/edit-immobillier.component';
import { ListImmobillierComponent } from './immobillier/list-immobillier/list-immobillier.component';
import { ManageImmobillierComponent } from './immobillier/manage-immobillier/manage-immobillier.component';
import { ServiceImmobillierComponent } from './immobillier/service-immobillier/service-immobillier.component';
import { EditComponent } from './immobillier/edit/edit.component';

const routes: Routes = [
  {
    path: 'immobilier', component: ImmobillierComponent, children: [
      { path: 'calendar', component: CalendarImmobillierComponent },
      { path: 'edit', component: EditComponent },
      { path: 'edit/:id', component: EditImmobillierComponent },
      { path: 'list', component: ListImmobillierComponent },
      { path: 'manage/:id', component: ManageImmobillierComponent },
      { path: 'service', component: ServiceImmobillierComponent },
    ]
  },
  { path: '', redirectTo: '/immobilier/list', pathMatch: 'full' },
  { path: '**', redirectTo: '/immobilier/list' }
];

export { routes };
