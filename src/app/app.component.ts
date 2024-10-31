import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { ViewRecordsReportsComponent } from './medical-records-handling/view-records-reports/view-records-reports.component';
import { SaradaComponent } from "./medical-records-handling/view-records-reports/sarada/sarada.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, ViewRecordsReportsComponent, SaradaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HMS';
}