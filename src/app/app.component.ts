import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppointmentHandlingComponent } from './appointment-handling/appointment-handling.component';
import { DeleteAppointmentComponent } from './appointment-handling/delete-appointment/delete-appointment.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DeleteAppointmentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HMS';
}
