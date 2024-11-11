import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { DulangaComponent } from "./medical-records-handling/view-records-reports/dulanga/dulanga.component";
import { ViewReportsComponent } from './medical-records-handling/view-records-reports/view-reports/view-reports.component';
import { SaradaComponent } from "./medical-records-handling/view-records-reports/sarada/sarada.component";
import { DevindaComponent } from "./medical-records-handling/view-reports/devinda/devinda.component";
import { ViewReportsComponent } from "./medical-records-handling/view-reports/view-reports.component";

import { AppointmentHandlingComponent } from "./appointment-handling/appointment-handling.component";
import { MedicalRecordsHandlingComponent } from "./medical-records-handling/medical-records-handling.component";
import { PatientManagementComponent } from "./patient-management/patient-management.component";
import { PrescriptionManagementComponent } from "./prescription-management/prescription-management.component";
import { AddRecordsComponent } from "./medical-records-handling/add-records/add-records.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, ViewRecordsReportsComponent, SaradaComponent, DevindaComponent, ViewReportsComponent,DulangaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'HMS';
}
