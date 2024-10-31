import { Component } from '@angular/core';
import { AppointmentSearchComponent } from "./appointment-search/appointment-search.component";
import { AddCategoryComponent } from './add-category/add-category.component';

@Component({
  selector: 'app-appointment-handling',
  standalone: true,
  imports: [AppointmentSearchComponent,AddCategoryComponent],
  templateUrl: './appointment-handling.component.html',
  styleUrl: './appointment-handling.component.css'
})
export class AppointmentHandlingComponent {

}