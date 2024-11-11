import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { MedicalRecordsHandlingComponent } from "./medical-records-handling/medical-records-handling.component";
import { PatientManagementComponent } from "./patient-management/patient-management.component";
import { PrescriptionManagementComponent } from "./prescription-management/prescription-management.component";
import { AppointmentHandlingComponent } from './appointment-handling/appointment-handling.component';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { AddAppointmentComponent } from "./appointment-handling/alerts/add-appointment/add-appointment.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppointmentHandlingComponent, MedicalRecordsHandlingComponent, PatientManagementComponent, PrescriptionManagementComponent, NavBarComponent, AddAppointmentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HMS';
}