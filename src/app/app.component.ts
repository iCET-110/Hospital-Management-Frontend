import { RouterOutlet } from '@angular/router';
import { UpdateComponent } from './patient-management/update/update.component';
import { SearchComponent } from './patient-management/search/search.component';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { Component } from '@angular/core';

import { ViewPatientListComponent } from './patient-management/view-patient-list/view-patient-list.component';
@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet,NavBarComponent, AppointmentHandlingComponent, MedicalRecordsHandlingComponent, PatientManagementComponent, PrescriptionManagementComponent, SearchComponent, ViewPatientListComponent],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HMS';
}

