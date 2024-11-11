import { Component } from '@angular/core';
import { HoldPrescription } from '../../model/hold-prescription';
import { Medication } from '../../model/medication';
import { HoldPatientService } from '../../service/hold-patient-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';


@Component({
  selector: 'app-hold-patient',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './hold-patient.component.html',
  styleUrls: ['./hold-patient.component.css']
})
export class HoldPatientComponent {

  private patient: any= {};
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

  constructor(private HoldPatientService: HoldPatientService, private http: HttpClient) {
    this.patient = new HoldPrescription(1, 'John Doe', 101, [
      new Medication('Aspirin', '100mg', 'Once a day'),
      new Medication('Ibuprofen', '200mg', 'Twice a day')
    ]);
    
     private apiUrl = '/api/v1/prescription';

  // Function to handle the "Resume" button click
  async resumePrescription(patientId: number): Promise<void> {
    try {
      // Fetch patient data from API
      const patientData = await firstValueFrom(this.http.get(`${this.apiUrl}/${patientId}`));
      this.displayPatientData(patientData);

      // Delete hold prescription when resume button clicked
      await firstValueFrom(this.http.delete(`${this.apiUrl}/hold-prescription?id=${patientId}`));
       console.log('Patient resumed successfully');

    } catch (error) {
      console.error('Error:', error);
    }
  }
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
   displayPatientData(data: any) {
    // Logic to update patient data on the page
    //
    //
    //
    //insert code to get ID's of text input fields from the html and set values
    //
    //
    console.log('Patient Data:', data);
  }
}