import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ConfirmationPopupComponent } from './confirmation-popup/confirmation-popup.component';

@Component({
  selector: 'app-prescription-data-entry',
  standalone: true,
  imports: [ConfirmationPopupComponent],
  templateUrl: './prescription-data-entry.component.html',
  styleUrls: ['./prescription-data-entry.component.css']
})
export class PrescriptionDataEntryComponent {
  public drugData: any = {
    DrugName: '',
    Dosage: '',
    Frequency: ''
  };

  public drugsList: any[] = [];
  public editingIndex: number | null = null;


  public add(): void {

    if (!this.drugData.DrugName && !this.drugData.Dosage && !this.drugData.Frequency) {
      alert('At least one field must be filled out before adding to the table.');
      return;
    }

    if (this.editingIndex !== null) {

      this.drugsList[this.editingIndex] = { ...this.drugData };
      this.editingIndex = null;

      this.drugsList.push({ ...this.drugData });
    }
    

    this.drugData = { DrugName: '', Dosage: '', Frequency: '' };
  }


  public edit(index: number): void {
    this.drugData = { ...this.drugsList[index] };
    this.editingIndex = index;
  }


  public delete(index: number): void {
    this.drugsList.splice(index, 1);
    if (this.editingIndex === index) {
      this.drugData = { DrugName: '', Dosage: '', Frequency: '' };
      this.editingIndex = null;
    }
  }
}
