import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppointmentSearchComponent } from './appointment-handling/appointment-search/appointment-search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AppointmentSearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HMS';
}
