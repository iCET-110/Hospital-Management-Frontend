import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { MedicalRecordsHandlingComponent } from "./medical-records-handling/medical-records-handling.component";
import { PatientManagementComponent } from "./patient-management/patient-management.component";
import { PrescriptionManagementComponent } from "./prescription-management/prescription-management.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MedicalRecordsHandlingComponent, PatientManagementComponent, PrescriptionManagementComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HMS';
}
