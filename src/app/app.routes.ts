import { Routes } from '@angular/router';
import { AnushkaComponent } from './medical-records-handling/add-records/anushka/anushka.component';

export const routes: Routes = [
  { path: 'medical-records/add-records', component: AnushkaComponent },
  { path: '', redirectTo: '/medical-records/add-records', pathMatch: 'full' }
];