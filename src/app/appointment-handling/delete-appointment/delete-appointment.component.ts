import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delete-appointment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-appointment.component.html',
  styleUrls: ['./delete-appointment.component.css']
})
export class DeleteAppointmentComponent {
  selectedGender: string = 'Male';

  toggleGender(gender: string) {
    this.selectedGender = gender;
  }
}