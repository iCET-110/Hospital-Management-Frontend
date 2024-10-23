import { Component } from '@angular/core';
import { AppointmentSearchComponent } from "./appointment-search/appointment-search.component";

@Component({
  selector: 'app-appointment-handling',
  standalone: true,
  imports: [AppointmentSearchComponent],
  templateUrl: './appointment-handling.component.html',
  styleUrl: './appointment-handling.component.css'
})
export class AppointmentHandlingComponent {

}
