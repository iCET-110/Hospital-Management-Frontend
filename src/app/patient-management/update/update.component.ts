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
      email :'kusalpranama2003@gmail.com ',
      address: '21/A, Cinnamon watta Road, Colombo 07',
      guardian: 'Mr. Ranasinghe',
      guardianContact: '071 172 9692',
      gender: 'male',
      bloodType: 'O+',
      admitted: true,
      allergies: 'allergic to pineapple & pretty girls',
      remarks: 'left wrist fracture, undergone leg surgery in 2020 & a broken heart.'
    },
    {
      firstName: 'dasun',
      lastName: 'Shanaka',
      nic: '200322450316',
      dob: '2003-10-21',
      contact: '078 817 9856',
      email :'kusalpranama2003@gmail.com ',
      address: '21/A, Cinnamon watta Road, Colombo 08',
      guardian: 'Mr. Ranasinghe2',
      guardianContact: '071 172 9693',
      gender: 'male',
      bloodType: 'A+',
      admitted: true,
      allergies: 'pretty girls',
      remarks: ' undergone leg surgery in 2020 & a broken heart.'
    },
    {
      firstName: 'dasun',
      lastName: 'nihidu',
      nic: '200322450316',
      dob: '2003-10-21',
      contact: '078 817 9856',
      email :'kusalpranama2003@getMaxListeners.com ',
      address: '21/A, Cinnamon watta Road, Colombo 08',
      guardian: 'Mr. Ranasinghe2',
      guardianContact: '071 172 9693',
      gender: 'male',
      bloodType: 'A+',
      admitted: true,
      allergies: 'pretty girls',
      remarks: ' undergone leg surgery in 2020 & a broken heart.'
    },
    {
      firstName: 'Sachin',
      lastName: 'Nithya',
      nic: '200322450316',
      dob: '2003-10-21',
      contact: '078 817 9856',
      email :'kusalpranama2003@getMaxListeners.com ',
      address: '21/A, Cinnamon watta Road, Colombo 08',
      guardian: 'Mr. Ranasinghe2',
      guardianContact: '071 172 9693',
      gender: 'male',
      bloodType: 'A+',
      admitted: true,
      allergies: 'pretty girls',
      remarks: ' undergone leg surgery in 2020 & a broken heart.'
    },
    {
      firstName: 'Chathusha',
      lastName: 'Pehemina',
      nic: '200322450316',
      dob: '2003-10-21',
      contact: '078 817 9856',
      email :'kusalpranama2003@getMaxListeners.com ',
      address: '21/A, Cinnamon watta Road, Colombo 08',
      guardian: 'Mr. Ranasinghe2',
      guardianContact: '071 172 9693',
      gender: 'male',
      bloodType: 'A+',
      admitted: true,
      allergies: 'pretty girls',
      remarks: ' undergone leg surgery in 2020 & a broken heart.'
    },
    {
      firstName: 'Gay',
      lastName: 'Nihindu',
      nic: '200322450316',
      dob: '2003-10-21',
      contact: '078 817 9856',
      email :'kusalpranama2003@getMaxListeners.com ',
      address: '21/A, Cinnamon watta Road, Colombo 08',
      guardian: 'Mr. Ranasinghe2',
      guardianContact: '071 172 9693',
      gender: 'male',
      bloodType: 'A+',
      admitted: true,
      allergies: 'pretty girls',
      remarks: ' undergone leg surgery in 2020 & a broken heart.'
    },
    {
      firstName: 'Naveen',
      lastName: 'anuja',
      nic: '200322450316',
      dob: '2003-10-21',
      contact: '078 817 9856',
      email :'kusalpranama2003@getMaxListeners.com ',
      address: '21/A, Cinnamon watta Road, Colombo 08',
      guardian: 'Mr. Ranasinghe2',
      guardianContact: '071 172 9693',
      gender: 'male',
      bloodType: 'A+',
      admitted: true,
      allergies: 'pretty girls',
      remarks: ' undergone leg surgery in 2020 & a broken heart.'
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
