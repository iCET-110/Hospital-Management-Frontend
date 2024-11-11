import { Component } from '@angular/core';
import { DulangaComponent } from './dulanga/dulanga.component';
import { ViewReportsComponent } from './view-reports/view-reports.component';

@Component({
  selector: 'app-view-records-reports',
  standalone: true,
  imports: [DulangaComponent,ViewReportsComponent],
  templateUrl: './view-records-reports.component.html',
  styleUrl: './view-records-reports.component.css'
})
export class ViewRecordsReportsComponent {

}
