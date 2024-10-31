import { Component } from '@angular/core';
import { HoldPrescription } from '../../model/hold-prescription';
import { Medication } from '../../model/medication';
import { HoldPatientService } from '../../service/hold-patient-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hold-patient',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './hold-patient.component.html',
  styleUrls: ['./hold-patient.component.css']
})
export class HoldPatientComponent {
  public HoldPatient = [

    {
      "patientID": "P001",
      "patientName": "Kamal",
      "appoinmentID": "A001"
    },
    {
      "patientID": "P002",
      "patientName": "Ann",
      "appoinmentID": "A002"
    },
    {
      "patientID": "P003",
      "patientName": "Nimali",
      "appoinmentID": "A003"
    },
    {
      "patientID": "P004",
      "patientName": "Saman",
      "appoinmentID": "A004"
    },
    {
      "patientID": "P005",
      "patientName": "Andrew",
      "appoinmentID": "A005"
    },
    {
      "patientID": "P006",
      "patientName": "vimal",
      "appoinmentID": "A006"
    },
    {
      "patientID": "P007",
      "patientName": "John",
      "appoinmentID": "A007"
    }
  ];

  patient: HoldPrescription;

  constructor(private HoldPatientService: HoldPatientService) {
    // Initialize the patient object with sample data and an empty medication list
    this.patient = new HoldPrescription(1, 'John Doe', 101, [
      new Medication('Aspirin', '100mg', 'Once a day'),
      new Medication('Ibuprofen', '200mg', 'Twice a day')
    ]);
  }

  holdPatient(): void {
    this.HoldPatientService.holdPatientData(this.patient).subscribe(
      response => {
        console.log('Patient data held successfully:', response);
      },
      error => {
        console.error('Error holding patient data:', error);
      }
    );
  }
}
