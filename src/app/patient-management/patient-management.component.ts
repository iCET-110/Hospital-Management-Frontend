import { Component } from '@angular/core';
import { ViewPatientListComponent } from './view-patient-list/view-patient-list.component';

@Component({
  selector: 'app-patient-management',
  standalone: true,
  imports: [ViewPatientListComponent],
  templateUrl: './patient-management.component.html',
  styleUrl: './patient-management.component.css'
})
export class PatientManagementComponent {

}
