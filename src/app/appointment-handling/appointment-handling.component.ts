import { Component } from '@angular/core';
import { DeleteAppointmentComponent } from "./delete-appointment/delete-appointment.component";

@Component({
  selector: 'app-appointment-handling',
  standalone: true,
  imports: [DeleteAppointmentComponent],
  templateUrl: './appointment-handling.component.html',
  styleUrl: './appointment-handling.component.css'
})
export class AppointmentHandlingComponent {

}
