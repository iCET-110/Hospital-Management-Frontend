import { Component } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-hold-patient',
  standalone:true,
  imports: [HoldPatientComponent,HttpClientModule],
  templateUrl: './hold-patient.component.html',
  styleUrls: ['./hold-patient.component.css']
  
})
export class HoldPatientComponent {
  public patientData = { // Change the attributes as needed to match the html file here
    patientId: 'P024',
    name: 'Ruwan Perera',
    gender: 'Male',
    address: '12/17, Agaliya',
    age: 34,
    dob: '1988-08-24',
    nic: '1992347658982',
    email: 'ruwan.pr@gmail.com',
    phone: '0713456987',
    appointments: 12,
    bloodType: 'A+',
    remarks: 'Dust Mite Allergy, Food Allergies',
    status: 'Active'
  };
    //URL- change it to match your localhost address
  private apiUrl = 'http://your-backend-url/api/patients'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  // Method to handle the hold patient button click
  holdPatient() {

    //CODE BLOCK TO PASS THE PATIENT OBJECT TO BACKEND, PROVIDE NECESSARY BACKEND URL TO GET THE METHOD WORKING

    /* this.http.post(`${this.apiUrl}/hold`, this.patientData).subscribe(
      response => {
        console.log('Patient put on hold successfully', response);
      },
      error => {
        console.error('Error holding patient', error);
      }
    );  */

    console.log('Patient Data:', this.patientData);  }
}
