import { Component } from '@angular/core';
import { MedicalRecordsHandlingComponent } from './medical-records-handling/medical-records-handling.component';

@Component({
  selector: 'app-root',
  template: '<app-medical-records-handling></app-medical-records-handling>',
  standalone: true,
  imports: [MedicalRecordsHandlingComponent]
})
export class AppComponent {}