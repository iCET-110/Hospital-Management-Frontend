import { Component } from '@angular/core';
import { AddRecordsComponent } from "./add-records/add-records.component";

@Component({
  selector: 'app-medical-records-handling',
  standalone: true,
  imports: [AddRecordsComponent,AddRecordsComponent],
  templateUrl: './medical-records-handling.component.html',
  styleUrl: './medical-records-handling.component.css'
})
export class MedicalRecordsHandlingComponent {

}
