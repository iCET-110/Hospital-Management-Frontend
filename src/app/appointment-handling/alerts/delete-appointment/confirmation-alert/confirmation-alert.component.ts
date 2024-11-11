import { Component } from '@angular/core';

@Component({
  selector: 'app-confirmation-alert',
  standalone: true,
  imports: [],
  templateUrl: './confirmation-alert.component.html',
  styleUrl: './confirmation-alert.component.css'
})
export class ConfirmationAlertComponent {
  closeAlert() {
    console.log('close alert');
  }
  viewAppointment(){
    console.log('view appointment');
  }
  
}
