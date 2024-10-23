import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { AppointmentHandlingComponent } from "./appointment-handling/appointment-handling.component";
import { MedicalRecordsHandlingComponent } from "./medical-records-handling/medical-records-handling.component";
import { PatientManagementComponent } from "./patient-management/patient-management.component";
import { PrescriptionManagementComponent } from "./prescription-management/prescription-management.component";
import { ViewRecordsReportsComponent } from "./medical-records-handling/view-records-reports/view-records-reports.component";
import { DulangaComponent } from "./medical-records-handling/view-records-reports/dulanga/dulanga.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, AppointmentHandlingComponent, MedicalRecordsHandlingComponent, PatientManagementComponent, PrescriptionManagementComponent, ViewRecordsReportsComponent, DulangaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HMS';
}
