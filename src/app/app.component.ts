import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppointmentViewComponent } from './appointment-handling/appointment-view/appointment-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AppointmentViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HMS';
}
