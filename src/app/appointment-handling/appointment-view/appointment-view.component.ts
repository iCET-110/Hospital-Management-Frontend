import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppoimentSearchComponent } from '../appoiment-search/appoiment-search.component';
@Component({
  selector: 'app-appointment-view',
  standalone: true,
  imports: [CommonModule,AppoimentSearchComponent ],
  templateUrl: './appointment-view.component.html',
  styleUrl: './appointment-view.component.css'
})
export class AppointmentViewComponent {

}
