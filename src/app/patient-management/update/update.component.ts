import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  patient = {
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
  };

  saveChanges() {
    // Logic to save changes
    console.log("okay");
  }
}
