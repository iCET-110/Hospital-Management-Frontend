import { Component } from '@angular/core';
import { PrescriptionManagementComponent } from "../../prescription-management.component";
import { AppointmentHandlingComponent } from "../../../appointment-handling/appointment-handling.component";

@Component({
  selector: 'app-patient-info',
  standalone: true,
  imports: [PrescriptionManagementComponent, AppointmentHandlingComponent],
  templateUrl: './patient-info.component.html',
  styleUrl: './patient-info.component.css'
})
export class PatientInfoComponent {
    patient = {
      id: '#P024',
      name: 'Ruwan Perera',
      gender: 'Male',
      address: '12/17, Asgiriya',
      nic: '1992347658982',
      age: 34,
      dob: '1992-06-24',
      email: 'ruwan.pr@gmail.com',
      phone: '071 3454987',
      remarks: 'Dust Mite Allergy, Food Allergies',
      status: 'Active',
      photo: 'path-to-photo.jpg',
      appointments: 12,
      bloodGroup: 'A+'
    };
}
  

