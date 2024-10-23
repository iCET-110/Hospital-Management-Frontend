import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-add-appointment',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent {

  selectedGender: string = 'male';  

  selectGender(gender: string) {
    this.selectedGender = gender;  
  }

  isMaleSelected(): boolean {
    return this.selectedGender === 'male';
  }

  isFemaleSelected(): boolean {
    return this.selectedGender === 'female';
  }

}
