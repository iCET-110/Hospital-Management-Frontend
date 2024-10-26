import { Component } from '@angular/core';
import { SachiniComponent } from '../../view-records-reports/sachini/sachini.component';
import { DulangaComponent } from './dulanga/dulanga.component';

@Component({
  selector: 'app-view-records-reports',
  standalone: true,
  imports: [SachiniComponent, DulangaComponent],
  templateUrl: './view-records-reports.component.html',
  styleUrl: './view-records-reports.component.css'
})
export class ViewRecordsReportsComponent {

}
