import { Component } from '@angular/core';
import { ConfirmationPopupComponent } from './confirmation-popup/confirmation-popup.component';

@Component({
  selector: 'app-prescription-data-entry',
  standalone: true,
  imports: [ConfirmationPopupComponent],
  templateUrl: './prescription-data-entry.component.html',
  styleUrl: './prescription-data-entry.component.css'
})
export class PrescriptionDataEntryComponent {

}
