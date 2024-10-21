import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PatientManagementComponent } from './patient-management/patient-management.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PatientManagementComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HMS';
}
