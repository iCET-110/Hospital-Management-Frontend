import { Component } from '@angular/core';
import { UpdateCategoryComponent } from './update-category/update-category.component';

@Component({
  selector: 'app-appointment-handling',
  standalone: true,
  imports: [UpdateCategoryComponent],
  templateUrl: './appointment-handling.component.html',
  styleUrl: './appointment-handling.component.css'
})
export class AppointmentHandlingComponent {

}
