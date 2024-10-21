import { Component } from '@angular/core';
import { AddComponent } from './add/add.component';

@Component({
  selector: 'app-patient-management',
  standalone: true,
  imports: [AddComponent],
  templateUrl: './patient-management.component.html',
  styleUrl: './patient-management.component.css'
})
export class PatientManagementComponent {

}
