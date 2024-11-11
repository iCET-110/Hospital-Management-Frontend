import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { AppointmentHandlingComponent } from "./appointment-handling/appointment-handling.component";
import { MedicalRecordsHandlingComponent } from "./medical-records-handling/medical-records-handling.component";
import { PatientManagementComponent } from "./patient-management/patient-management.component";
import { PrescriptionManagementComponent } from "./prescription-management/prescription-management.component";
import { ReportViewComponent } from "./prescription-management/component/report-view/report-view.component";
import { PatientInfoComponent } from "./prescription-management/component/patient-info/patient-info.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, AppointmentHandlingComponent, MedicalRecordsHandlingComponent, PatientManagementComponent, PrescriptionManagementComponent, ReportViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HMS';
}
