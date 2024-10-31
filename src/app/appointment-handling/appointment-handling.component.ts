import { Component } from '@angular/core';
import { AppointmentSearchComponent } from "./appointment-search/appointment-search.component";
import { AppointmentUpdateComponent } from "./appointment-update/appointment-update.component";
import { NavBarComponent } from "../common/nav-bar/nav-bar.component";
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';

@Component({
  selector: 'app-appointment-handling',
  standalone: true,
  imports: [AddAppointmentComponent,AppointmentUpdateComponent, NavBarComponent],
  templateUrl: './appointment-handling.component.html',
  styleUrl: './appointment-handling.component.css'
})
export class AppointmentHandlingComponent {

}
