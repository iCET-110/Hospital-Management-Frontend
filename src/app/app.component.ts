import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { DulangaComponent } from "./medical-records-handling/view-records-reports/dulanga/dulanga.component";
import { ViewReportsComponent } from './medical-records-handling/view-records-reports/view-reports/view-reports.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, DulangaComponent,ViewReportsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HMS';
}