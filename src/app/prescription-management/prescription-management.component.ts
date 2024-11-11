import { Component } from '@angular/core';
import { SearchBarComponent } from './search-components/search-bar/search-bar.component';

import { PrescriptionDataEntryComponent } from './component/prescription-data-entry/prescription-data-entry.component';

import { ReportViewComponent } from './component/report-view/report-view.component';
import { HoldPatientComponent } from './component/hold-patient/hold-patient.component';


@Component({
  selector: 'app-prescription-management',
  standalone: true,
  imports: [ReportViewComponent,HoldPatientComponent],
  templateUrl: './prescription-management.component.html',
  styleUrl: './prescription-management.component.css'
})
export class PrescriptionManagementComponent {

}
