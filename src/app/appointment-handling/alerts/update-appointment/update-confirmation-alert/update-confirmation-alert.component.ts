import { Component } from '@angular/core';

@Component({
  selector: 'app-update-confirmation-alert',
  standalone: true,
  imports: [],
  templateUrl: './update-confirmation-alert.component.html',
  styleUrl: './update-confirmation-alert.component.css'
})
export class UpdateConfirmationAlertComponent {
  viewAppointment(){
    console.log('View Appointment');
  }
  closeAlert(){
    console.log('Close Alert');
  }

}
