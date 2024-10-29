import { Component } from '@angular/core';
import { DashbordComponent } from './main-dashboard/dashbord/dashbord.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';

@Component({
  selector: 'app-medical-records-handling',
  standalone: true,
  imports: [DashbordComponent],
  templateUrl: './medical-records-handling.component.html',
  styleUrl: './medical-records-handling.component.css'
})
export class MedicalRecordsHandlingComponent {

}
