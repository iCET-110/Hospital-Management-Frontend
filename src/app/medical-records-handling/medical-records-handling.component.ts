import { Component } from '@angular/core';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { AddRecordsComponent } from "./add-records/add-records.component";
import { NavBarComponent } from "../common/nav-bar/nav-bar.component";
import { ViewRecordsReportsComponent } from "./view-records-reports/view-records-reports.component";

@Component({
  selector: 'app-medical-records-handling',
  standalone: true,
  imports: [AddRecordsComponent, AddRecordsComponent, MainDashboardComponent, NavBarComponent, ViewRecordsReportsComponent],
  templateUrl: './medical-records-handling.component.html',
  styleUrl: './medical-records-handling.component.css'
})
export class MedicalRecordsHandlingComponent {

}
