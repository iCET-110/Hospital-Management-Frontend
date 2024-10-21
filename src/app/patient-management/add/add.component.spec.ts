import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComponent } from './add.component';

describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
// Define an interface for the patient data
interface PatientData {
  firstName: string;
  lastName: string;
  gender: string;
  nic: string;
  dob: string;
  phone: string;
  address: string;
  guardian?: string;
  guardianContact?: string;
  bloodType: string;
  allergies?: string;
  remarks?: string;
}

// Function to handle form submission
document.getElementById('add-patient-form')!.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Collect form data
  const patientData: PatientData = {
      firstName: (document.getElementById('first-name') as HTMLInputElement).value,
      lastName: (document.getElementById('last-name') as HTMLInputElement).value,
      gender: (document.querySelector('input[name="gender"]:checked') as HTMLInputElement).value,
      nic: (document.getElementById('nic') as HTMLInputElement).value,
      dob: (document.getElementById('dob') as HTMLInputElement).value,
      phone: (document.getElementById('phone') as HTMLInputElement).value,
      address: (document.getElementById('address') as HTMLInputElement).value,
      guardian: (document.getElementById('guardian') as HTMLInputElement).value,
      guardianContact: (document.getElementById('guardian-contact') as HTMLInputElement).value,
      bloodType: (document.getElementById('blood-type') as HTMLSelectElement).value,
      allergies: (document.getElementById('allergies') as HTMLInputElement).value,
      remarks: (document.getElementById('remarks') as HTMLTextAreaElement).value,
  };

  // Output patient data to console (You can replace this with actual processing code)
  console.log('Patient Data:', patientData);

  // Show success message
  alert("Patient added successfully!");
});
