import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppointmentSearchComponent } from './appointment-search/appointment-search.component';
import { AppointmentViewComponent } from './appointment-view/appointment-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AppointmentSearchComponent,AppointmentViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HMS';
}
