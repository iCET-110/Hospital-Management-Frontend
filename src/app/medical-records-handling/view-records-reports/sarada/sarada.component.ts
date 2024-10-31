import { Component } from '@angular/core';

@Component({
  selector: 'app-sarada',
  standalone: true,
  imports: [],
  templateUrl: './sarada.component.html',
  styleUrl: './sarada.component.css'
})
export class SaradaComponent {
  recordId: string | null = null;
  date: string | null = null;

   applyForm() {
  
   }

  clearForm() {

    this.recordId = null;
    this.date = null;

    (document.getElementById('record-id') as HTMLInputElement).value = '';
    (document.getElementById('date') as HTMLInputElement).value = '';
    
  }
}




