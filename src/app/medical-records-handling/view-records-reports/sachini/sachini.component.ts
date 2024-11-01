import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-sachini',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sachini.component.html',
  styleUrl: './sachini.component.css'
})
export class SachiniComponent {
  isModalOpen = false;
  selectedRecord: { id: string; date: string; time: string } | null = null;
} 
