import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../../common/nav-bar/nav-bar.component';

interface Patient {
  name: string;
  nic: string;
  dob: string;
  gender: string;
  contact: string;
  address: string;
  guardian: string;
  guardianContact: string;
}

@Component({
  selector: 'app-view-patient-list',
  standalone: true,
  imports: [CommonModule, NavBarComponent],
  templateUrl: './view-patient-list.component.html',
  styleUrls: ['./view-patient-list.component.css']
})
export class ViewPatientListComponent {
  public patients: Patient[] = [
    {
      name: "John Doe",
      nic: "123456789V",
      dob: "1990-05-15",
      gender: "Male",
      contact: "+94 771234567",
      address: "123 Main St, Colombo",
      guardian: "Jane Doe",
      guardianContact: "+94 777654321"
    },
    {
      name: "Alice Smith",
      nic: "987654321V",
      dob: "1985-02-25",
      gender: "Female",
      contact: "+94 777123456",
      address: "456 Elm St, Kandy",
      guardian: "Robert Smith",
      guardianContact: "+94 776543210"
    },
    {
      name: "John Doe",
      nic: "123456789V",
      dob: "1990-05-15",
      gender: "Male",
      contact: "+94 771234567",
      address: "123 Main St, Colombo",
      guardian: "Jane Doe",
      guardianContact: "+94 777654321"
    },
    {
      name: "Alice Smith",
      nic: "987654321V",
      dob: "1985-02-25",
      gender: "Female",
      contact: "+94 777123456",
      address: "456 Elm St, Kandy",
      guardian: "Robert Smith",
      guardianContact: "+94 776543210"
    },
    {
      name: "John Doe",
      nic: "123456789V",
      dob: "1990-05-15",
      gender: "Male",
      contact: "+94 771234567",
      address: "123 Main St, Colombo",
      guardian: "Jane Doe",
      guardianContact: "+94 777654321"
    },
    {
      name: "Alice Smith",
      nic: "987654321V",
      dob: "1985-02-25",
      gender: "Female",
      contact: "+94 777123456",
      address: "456 Elm St, Kandy",
      guardian: "Robert Smith",
      guardianContact: "+94 776543210"
    },
    {
      name: "John Doe",
      nic: "123456789V",
      dob: "1990-05-15",
      gender: "Male",
      contact: "+94 771234567",
      address: "123 Main St, Colombo",
      guardian: "Jane Doe",
      guardianContact: "+94 777654321"
    },
    {
      name: "Alice Smith",
      nic: "987654321V",
      dob: "1985-02-25",
      gender: "Female",
      contact: "+94 777123456",
      address: "456 Elm St, Kandy",
      guardian: "Robert Smith",
      guardianContact: "+94 776543210"
    },
    {
      name: "John Doe",
      nic: "123456789V",
      dob: "1990-05-15",
      gender: "Male",
      contact: "+94 771234567",
      address: "123 Main St, Colombo",
      guardian: "Jane Doe",
      guardianContact: "+94 777654321"
    },
    {
      name: "Alice Smith",
      nic: "987654321V",
      dob: "1985-02-25",
      gender: "Female",
      contact: "+94 777123456",
      address: "456 Elm St, Kandy",
      guardian: "Robert Smith",
      guardianContact: "+94 776543210"
    },
    {
      name: "John Doe",
      nic: "123456789V",
      dob: "1990-05-15",
      gender: "Male",
      contact: "+94 771234567",
      address: "123 Main St, Colombo",
      guardian: "Jane Doe",
      guardianContact: "+94 777654321"
    },
    {
      name: "Alice Smith",
      nic: "987654321V",
      dob: "1985-02-25",
      gender: "Female",
      contact: "+94 777123456",
      address: "456 Elm St, Kandy",
      guardian: "Robert Smith",
      guardianContact: "+94 776543210"
    },
    {
      name: "John Doe",
      nic: "123456789V",
      dob: "1990-05-15",
      gender: "Male",
      contact: "+94 771234567",
      address: "123 Main St, Colombo",
      guardian: "Jane Doe",
      guardianContact: "+94 777654321"
    },
    {
      name: "Alice Smith",
      nic: "987654321V",
      dob: "1985-02-25",
      gender: "Female",
      contact: "+94 777123456",
      address: "456 Elm St, Kandy",
      guardian: "Robert Smith",
      guardianContact: "+94 776543210"
    },
    {
      name: "John Doe",
      nic: "123456789V",
      dob: "1990-05-15",
      gender: "Male",
      contact: "+94 771234567",
      address: "123 Main St, Colombo",
      guardian: "Jane Doe",
      guardianContact: "+94 777654321"
    },
    {
      name: "Alice Smith",
      nic: "987654321V",
      dob: "1985-02-25",
      gender: "Female",
      contact: "+94 777123456",
      address: "456 Elm St, Kandy",
      guardian: "Robert Smith",
      guardianContact: "+94 776543210"
    },
    {
      name: " Doe",
      nic: "123456789V",
      dob: "1990-05-15",
      gender: "Male",
      contact: "+94 771234567",
      address: "123 Main St, Colombo",
      guardian: "Jane Doe",
      guardianContact: "+94 777654321"
    },
    {
      name: "John Doe",
      nic: "123456789V",
      dob: "1990-05-15",
      gender: "Male",
      contact: "+94 771234567",
      address: "123 Main St, Colombo",
      guardian: "Jane Doe",
      guardianContact: "+94 777654321"
    },
    {
      name: "Alice Smith",
      nic: "987654321V",
      dob: "1985-02-25",
      gender: "Female",
      contact: "+94 777123456",
      address: "456 Elm St, Kandy",
      guardian: "Robert Smith",
      guardianContact: "+94 776543210"
    },
    {
      name: "John Doe",
      nic: "123456789V",
      dob: "1990-05-15",
      gender: "Male",
      contact: "+94 771234567",
      address: "123 Main St, Colombo",
      guardian: "Jane Doe",
      guardianContact: "+94 777654321"
    },
    {
      name: "Alice Smith",
      nic: "987654321V",
      dob: "1985-02-25",
      gender: "Female",
      contact: "+94 777123456",
      address: "456 Elm St, Kandy",
      guardian: "Robert Smith",
      guardianContact: "+94 776543210"
    },
    {
      name: "John Doe",
      nic: "123456789V",
      dob: "1990-05-15",
      gender: "Male",
      contact: "+94 771234567",
      address: "123 Main St, Colombo",
      guardian: "Jane Doe",
      guardianContact: "+94 777654321"
    },
    {
      name: "Alice Smith",
      nic: "987654321V",
      dob: "1985-02-25",
      gender: "Female",
      contact: "+94 777123456",
      address: "456 Elm St, Kandy",
      guardian: "Robert Smith",
      guardianContact: "+94 776543210"
    },
    {
      name: "John Doe",
      nic: "123456789V",
      dob: "1990-05-15",
      gender: "Male",
      contact: "+94 771234567",
      address: "123 Main St, Colombo",
      guardian: "Jane Doe",
      guardianContact: "+94 777654321"
    },
    {
      name: "Alice Smith",
      nic: "987654321V",
      dob: "1985-02-25",
      gender: "Female",
      contact: "+94 777123456",
      address: "456 Elm St, Kandy",
      guardian: "Robert Smith",
      guardianContact: "+94 776543210"
    },
    {
      name: "John Doe",
      nic: "123456789V",
      dob: "1990-05-15",
      gender: "Male",
      contact: "+94 771234567",
      address: "123 Main St, Colombo",
      guardian: "Jane Doe",
      guardianContact: "+94 777654321"
    },
    {
      name: "Alice Smith",
      nic: "987654321V",
      dob: "1985-02-25",
      gender: "Female",
      contact: "+94 777123456",
      address: "456 Elm St, Kandy",
      guardian: "Robert Smith",
      guardianContact: "+94 776543210"
    },
    {
      name: "John Doe",
      nic: "123456789V",
      dob: "1990-05-15",
      gender: "Male",
      contact: "+94 771234567",
      address: "123 Main St, Colombo",
      guardian: "Jane Doe",
      guardianContact: "+94 777654321"
    },
    {
      name: "Alice Smith",
      nic: "987654321V",
      dob: "1985-02-25",
      gender: "Female",
      contact: "+94 777123456",
      address: "456 Elm St, Kandy",
      guardian: "Robert Smith",
      guardianContact: "+94 776543210"
    },
    {
      name: "John Doe",
      nic: "123456789V",
      dob: "1990-05-15",
      gender: "Male",
      contact: "+94 771234567",
      address: "123 Main St, Colombo",
      guardian: "Jane Doe",
      guardianContact: "+94 777654321"
    },
    {
      name: "Alice Smith",
      nic: "987654321V",
      dob: "1985-02-25",
      gender: "Female",
      contact: "+94 777123456",
      address: "456 Elm St, Kandy",
      guardian: "Robert Smith",
      guardianContact: "+94 776543210"
    },
    {
      name: "John Doe",
      nic: "123456789V",
      dob: "1990-05-15",
      gender: "Male",
      contact: "+94 771234567",
      address: "123 Main St, Colombo",
      guardian: "Jane Doe",
      guardianContact: "+94 777654321"
    },
    {
      name: "Alice Smith",
      nic: "987654321V",
      dob: "1985-02-25",
      gender: "Female",
      contact: "+94 777123456",
      address: "456 Elm St, Kandy",
      guardian: "Robert Smith",
      guardianContact: "+94 776543210"
    },
    {
      name: " Doe",
      nic: "123456789V",
      dob: "1990-05-15",
      gender: "Male",
      contact: "+94 771234567",
      address: "123 Main St, Colombo",
      guardian: "Jane Doe",
      guardianContact: "+94 777654000"
    }
  ];
}
