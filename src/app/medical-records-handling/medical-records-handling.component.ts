import { Component } from '@angular/core';
import { ViewRecordsReportsComponent } from './view-records-reports/view-records-reports.component';

@Component({
  selector: 'app-medical-records-handling',
  standalone: true,
  imports: [ViewRecordsReportsComponent],
  templateUrl: './medical-records-handling.component.html',
  styleUrl: './medical-records-handling.component.css'
})
export class MedicalRecordsHandlingComponent {

}
