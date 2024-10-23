import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-confirmation-popup',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './confirmation-popup.component.html',
  styleUrl: './confirmation-popup.component.css'
})
export class ConfirmationPopupComponent {

  public drugsList = [
    {
      drug: "panadol",
      dosage: "500mg",
      frequency: "Every 6H"
    },
    {
      drug: "panadol",
      dosage: "500mg",
      frequency: "Every 6H"
    },
    {
      drug: "panadol",
      dosage: "500mg",
      frequency: "Every 6H"
    },
    {
      drug: "panadol",
      dosage: "500mg",
      frequency: "Every 6H"
    },
    {
      drug: "panadol",
      dosage: "500mg",
      frequency: "Every 6H"
    },
    {
      drug: "panadol",
      dosage: "500mg",
      frequency: "Every 6H"
    },
    {
      drug: "panadol",
      dosage: "500mg",
      frequency: "Every 6H"
    },
    {
      drug: "panadol",
      dosage: "500mg",
      frequency: "Every 6H"
    }
  ];

}
