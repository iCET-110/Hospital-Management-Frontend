import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { SachiniComponent } from "./medical-records-handling/view-records-reports/sachini/sachini.component";
import { DulangaComponent } from "./medical-records-handling/view-records-reports/dulanga/dulanga.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, SachiniComponent, DulangaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HMS';
}