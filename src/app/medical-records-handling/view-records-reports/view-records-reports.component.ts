import { Component } from '@angular/core';
import { SaradaComponent } from './sarada/sarada.component';

@Component({
  selector: 'app-view-records-reports',
  standalone: true,
  imports: [SaradaComponent],
  templateUrl: './view-records-reports.component.html',
  styleUrl: './view-records-reports.component.css'
})
export class ViewRecordsReportsComponent {

}
