import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MedicalRecordsHandlingComponent } from './medical-records-handling/medical-records-handling.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MedicalRecordsHandlingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HMS';
}
