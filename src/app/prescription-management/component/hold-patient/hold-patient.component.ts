import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';

@Component({
  selector: 'app-hold-patient',
  standalone:true,
  imports: [HoldPatientComponent],
  templateUrl: './hold-patient.component.html',
  styleUrls: ['./hold-patient.component.css']
  
})
export class HoldPatientComponent {

  constructor(private http: HttpClient) {}

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