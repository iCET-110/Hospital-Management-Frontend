import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sachini',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sachini.component.html',
  styleUrls: ['./sachini.component.css'],
})
export class SachiniComponent {

  clearForm() {
    console.log('Hello');
    let recordIdInput = document.getElementById('recordId') as HTMLInputElement;
    let dateInput = document.getElementById('date') as HTMLInputElement;

    if (recordIdInput) {
      recordIdInput.value = '';
    }

    if (dateInput) {
      dateInput.value = '';
    }
  }
}
