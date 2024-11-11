import { Component } from '@angular/core';
import { DulangaComponent } from './dulanga/dulanga.component';
import { ViewReportsComponent } from './view-reports/view-reports.component';
import { DulangaComponent } from './dulanga/dulanga.component';
import { SaradaComponent } from './sarada/sarada.component';


@Component({
  selector: 'app-view-records-reports',
  standalone: true,
  imports: [SachiniComponent, DulangaComponent,SaradaComponent],
  templateUrl: './view-records-reports.component.html',
  styleUrl: './view-records-reports.component.css'
})

export class ViewRecordsReportsComponent {

}
