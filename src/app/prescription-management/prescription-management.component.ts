import { Component } from '@angular/core';
import { ReportViewComponent } from './component/report-view/report-view.component';

@Component({
  selector: 'app-prescription-management',
  standalone: true,
  imports: [ReportViewComponent],
  templateUrl: './prescription-management.component.html',
  styleUrl: './prescription-management.component.css'
})
export class PrescriptionManagementComponent {

}
