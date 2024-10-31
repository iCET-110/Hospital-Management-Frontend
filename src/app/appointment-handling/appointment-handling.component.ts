import { Component } from '@angular/core';
import { AddAppointmentComponent } from './alerts/add-appointment/add-appointment.component';
import { ConfirmationAlertComponent } from './alerts/delete-appointment/confirmation-alert/confirmation-alert.component';
import { SuccessMessageComponent } from './alerts/delete-appointment/success-message/success-message.component';
import { UpdateConfirmationAlertComponent } from './alerts/update-appointment/update-confirmation-alert/update-confirmation-alert.component';
import { UpdateSuccessMessageComponent } from './alerts/update-appointment/update-success-message/update-success-message.component';

@Component({
  selector: 'app-appointment-handling',
  standalone: true,
  imports: [AddAppointmentComponent,SuccessMessageComponent,ConfirmationAlertComponent,UpdateConfirmationAlertComponent,UpdateSuccessMessageComponent],
  templateUrl: './appointment-handling.component.html',
  styleUrl: './appointment-handling.component.css'
})
export class AppointmentHandlingComponent {

}
