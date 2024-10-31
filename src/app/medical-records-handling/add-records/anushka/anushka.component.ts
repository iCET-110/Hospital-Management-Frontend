import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface MedicalRecord {
  name: string;
  size: string;
  type: string;
}

@Component({
  selector: 'app-anushka',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './anushka.component.html',
  styleUrls: ['./anushka.component.css']
})
export class AnushkaComponent {
  selectedDate: string = new Date().toISOString().split('T')[0];
  
  records: MedicalRecord[] = [
    { name: 'General Medical Report.pdf', size: '2.3MB', type: 'pdf' },
    { name: 'Blood Test Results.pdf', size: '1.1MB', type: 'pdf' },
    { name: 'Chest X-Ray Report.pdf', size: '3.5MB', type: 'pdf' }
  ];

  clearDate() {
    this.selectedDate = '';
  }

  downloadRecord(record: MedicalRecord) {
    console.log(`Downloading ${record.name}`);
    // Implement actual download logic here
  }
}