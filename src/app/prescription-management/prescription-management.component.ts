import { Component } from '@angular/core';
import { PrescriptionDataEntryComponent } from './component/prescription-data-entry/prescription-data-entry.component';

@Component({
  selector: 'app-prescription-management',
  standalone: true,
  imports: [PrescriptionDataEntryComponent ],
  templateUrl: './prescription-management.component.html',
  styleUrl: './prescription-management.component.css'
})
export class PrescriptionManagementComponent {

}
