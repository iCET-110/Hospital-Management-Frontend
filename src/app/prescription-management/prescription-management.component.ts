import { Component } from '@angular/core';
import { PatientInfoComponent } from './component/patient-info/patient-info.component';
import { PrescriptionDataEntryComponent } from './component/prescription-data-entry/prescription-data-entry.component';
import { ReportViewComponent } from './component/report-view/report-view.component';
import { SearchComponent } from './component/search/search.component';
import { ViewRecordsReportsComponent } from "../medical-records-handling/view-records-reports/view-records-reports.component";


@Component({
  selector: 'app-prescription-management',
  standalone: true,
  imports: [PatientInfoComponent, PrescriptionDataEntryComponent, ReportViewComponent, SearchComponent, ViewRecordsReportsComponent],
  templateUrl: './prescription-management.component.html',
  styleUrl: './prescription-management.component.css'
})
export class PrescriptionManagementComponent {

  handleSearch(term: string) {
  }
}
