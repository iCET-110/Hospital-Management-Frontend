import { Component } from '@angular/core';
import { AppointmentSearchComponent } from '../appointment-search/appointment-search.component';

@Component({
  selector: 'app-appointment-view',
  standalone: true,
  imports: [AppointmentSearchComponent],
  templateUrl: './appointment-view.component.html',
  styleUrl: './appointment-view.component.css'
})
export class AppointmentViewComponent {

}
