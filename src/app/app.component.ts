import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { DevindaComponent } from "./medical-records-handling/view-reports/devinda/devinda.component";
import { ViewReportsComponent } from "./medical-records-handling/view-reports/view-reports.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, DevindaComponent, ViewReportsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HMS';
}