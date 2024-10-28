import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add',  
  templateUrl: './add.component.html',  
  styleUrls: ['./add.component.scss'],  
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class AddComponent implements OnInit {  
  patientForm!: FormGroup;
  bloodTypes: string[] = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.patientForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      gender: ['', Validators.required],
      nic: ['', [
        Validators.required, 
        Validators.pattern(/^([0-9]{9}[vVxX]|[0-9]{12})$/)
      ]],
      dateOfBirth: ['', Validators.required],
      contact: ['', [
        Validators.required, 
        Validators.pattern(/^(?:7|0|(?:\+94))[0-9]{9,10}$/)
      ]],
      residentAddress: ['', Validators.required],
      guardian: ['', Validators.required],
      guardianContact: ['', [
        Validators.required, 
        Validators.pattern(/^(?:7|0|(?:\+94))[0-9]{9,10}$/)
      ]],
      bloodType: ['', Validators.required],
      allergies: [''],
      remarks: ['']
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.patientForm.valid) {
      const patientData = {
        ...this.patientForm.value,
        dateOfBirth: new Date(this.patientForm.value.dateOfBirth)
      };
      
      console.log('Saving patient:', patientData);
      this.savePatient(patientData);
    } else {
      this.markFormGroupTouched(this.patientForm);
    }
  }

  private savePatient(patient: any): void {
    console.log('Patient data ready for API:', patient);
  }

  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  getErrorMessage(controlName: string): string {
    const control = this.patientForm.get(controlName);
    if (control?.errors && control.touched) {
      if (control.errors['required']) {
        return `${controlName.charAt(0).toUpperCase() + controlName.slice(1)} is required`;
      }
      if (control.errors['minlength']) {
        return `${controlName.charAt(0).toUpperCase() + controlName.slice(1)} must be at least ${control.errors['minlength'].requiredLength} characters`;
      }
      if (control.errors['pattern']) {
        switch (controlName) {
          case 'nic':
            return 'Please enter a valid NIC number';
          case 'contact':
          case 'guardianContact':
            return 'Please enter a valid phone number';
          default:
            return 'Invalid format';
        }
      }
    }
    return '';
  }
}