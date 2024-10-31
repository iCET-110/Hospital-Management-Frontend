import { Component } from '@angular/core';
import { NavBarComponent } from '../../common/nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import './Patient';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-update',
  standalone: true,
  imports: [NavBarComponent,FormsModule,NgFor], 
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})


export class UpdateComponent {
  searchTerm: string = '';
  filteredPatients: Patient[] = [];
  patients: Patient[] = [
    {
      firstName: 'Shane',
      lastName: 'Ranasinghe',
      nic: '200322450315',
      dob: '2003-10-20',
      contact: '078 817 9855',
      address: '21/A, Cinnamon watta Road, Colombo 07',
      guardian: 'Mr. Ranasinghe',
      guardianContact: '071 172 9692',
      gender: 'male',
      bloodType: 'O+',
      admitted: true,
      allergies: 'allergic to pineapple & pretty girls',
      remarks: 'left wrist fracture, undergone leg surgery in 2020 & a broken heart.'
    },
    
  ];

 
  constructor() {
    this.filteredPatients = this.patients; 
  }
  search() {
    this.filteredPatients = this.patients.filter(patient =>
      `${patient.firstName} ${patient.lastName}`.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  saveChanges() {
    console.log("save changes");
  }
}
