import { Component } from '@angular/core';
import { MainDashboardComponent } from "./main-dashboard/main-dashboard.component";

@Component({
  selector: 'app-medical-records-handling',
  standalone: true,
  imports: [MainDashboardComponent],
  templateUrl: './medical-records-handling.component.html',
  styleUrl: './medical-records-handling.component.css'
})
export class MedicalRecordsHandlingComponent {
  
}
