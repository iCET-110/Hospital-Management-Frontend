import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Patient {
  name: string;
  nic: string;
  dob: string;
  gender: string;
  contact: string;
  email: string;
  residentAddress: string;
  guardian: string;
  guardianContact: string;
  currentlyAdmitted: boolean;
  medicalInfo: {
    bloodType: string;
    allergies: string[];
    remarks: string;
  }
}

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchTerm: string = '';
  selectedPatient: Patient = {
    name: 'Shane Ranasinghe',
    nic: '200322450351',
    dob: '2003/10/20',
    gender: 'male',
    contact: '078 817 9855',
    email: 'shane@gamil.com',
    residentAddress: '21/A, Cinnamon watta Road, Colombo 07',
    guardian: 'Mr. Ranasinghe',
    guardianContact: '071 172 9692',
    currentlyAdmitted: true,
    medicalInfo: {
      bloodType: 'O+',
      allergies: ['pineapple'],
      remarks: 'left wrist fracture, undergone leg surgery in 2020 & a broken heart.'
    }
  };

  onSearch(): void {
    // Implement search logic here
    console.log('Searching for:', this.searchTerm);
  }

  ngOnInit(): void {
    document.body.style.backgroundColor = '#E6FFE8';
  }
}