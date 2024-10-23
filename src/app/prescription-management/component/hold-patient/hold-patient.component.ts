import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hold-patient',
  standalone: true,
  imports: [FormsModule , CommonModule],
  templateUrl: './hold-patient.component.html',
  styleUrl: './hold-patient.component.css'
})
export class HoldPatientComponent {

   public HoldPatient =[
  
    { 
      "patientID":"P001" , 
      "patientName": "Kamal", 
      "appoinmentID":"A001" 
    },
    { 
      "patientID":"P002" , 
      "patientName": "Ann", 
      "appoinmentID":"A002" 
    },
    { 
      "patientID":"P003" , 
      "patientName": "Nimali", 
      "appoinmentID":"A003" 
    },
    { 
      "patientID":"P004" , 
      "patientName": "Saman", 
      "appoinmentID":"A004" 
    },
    { 
      "patientID":"P005" , 
      "patientName": "Andrew", 
      "appoinmentID":"A005" 
    },
    { 
      "patientID":"P006" , 
      "patientName": "vimal", 
      "appoinmentID":"A006" 
    },
    { 
      "patientID":"P007" , 
      "patientName": "John", 
      "appoinmentID":"A007" 
    }
];




}
