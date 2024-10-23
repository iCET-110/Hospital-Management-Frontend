import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  patientForm: FormGroup;
  bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  constructor(private fb: FormBuilder) {
    this.patientForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['male', Validators.required],
      nic: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      contact: ['', [Validators.required, Validators.pattern(/^07[0-9]{8}$/)]],
      residentAddress: ['', Validators.required],
      guardian: ['', Validators.required],
      guardianContact: ['', [Validators.required, Validators.pattern(/^07[0-9]{8}$/)]],
      bloodType: ['', Validators.required],
      allergies: [''],
      remarks: ['']
    });
  }

  onSubmit() {
    if (this.patientForm.valid) {
      console.log('Form submitted:', this.patientForm.value);
      
    } else {
      this.markFormGroupTouched(this.patientForm);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}