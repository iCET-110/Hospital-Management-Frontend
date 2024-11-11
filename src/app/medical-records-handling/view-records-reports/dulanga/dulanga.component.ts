import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dulanga',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dulanga.component.html',
  styleUrl: './dulanga.component.css'
})
export class DulangaComponent {
  isModalOpen = false;
  selectedRecord: { id: string; date: string; time: string } | null = null;

  // Sample records data
  records = [
    { id: 'R001', date: '18/10/2024', time: '6:30 AM' },
    { id: 'R002', date: '19/10/2024', time: '7:00 AM' },
    { id: 'R003', date: '20/10/2024', time: '8:15 AM' },
    { id: 'R004', date: '21/10/2024', time: '9:15 AM' },
    { id: 'R005', date: '22/10/2024', time: '10:15 AM' },
    { id: 'R006', date: '22/10/2024', time: '11:45 AM' },
    { id: 'R007', date: '23/10/2024', time: '13:55 AM' }
  ];

  // Opens the modal with the selected record's details
  openModal(record: { id: string; date: string; time: string }) {
    this.selectedRecord = record;
    this.isModalOpen = true;
  }

  // Closes the modal
  closeModal() {
    this.isModalOpen = false;
    this.selectedRecord = null;
  }
}
