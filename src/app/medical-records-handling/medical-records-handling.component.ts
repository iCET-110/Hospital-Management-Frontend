import { Component } from '@angular/core';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { AddRecordsComponent } from "./add-records/add-records.component";
import { NavBarComponent } from "../common/nav-bar/nav-bar.component";
import { ViewRecordsReportsComponent } from "./view-records-reports/view-records-reports.component";

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface PdfFile {
  id: number;
  name: string;
  size: string;
  date: string;
  selected?: boolean;
  url?: string;
}

@Component({
  selector: 'app-medical-records-handling',
  templateUrl: './medical-records-handling.component.html',
  styleUrls: ['./medical-records-handling.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class MedicalRecordsHandlingComponent {
  reportDate: string = '';
  allPdfFiles: PdfFile[] = [
    { 
      id: 1, 
      name: 'General Medical Report.pdf', 
      size: '2.3MB', 
      date: '2024-10-31',
      url: 'sample1.pdf'
    },
    { 
      id: 2, 
      name: 'Blood Test Results.pdf', 
      size: '1.1MB', 
      date: '2024-10-31',
      url: 'sample2.pdf'
    },
    { 
      id: 3, 
      name: 'Chest X-Ray Report.pdf', 
      size: '3.5MB', 
      date: '2024-10-31',
      url: 'sample3.pdf'
    }
  ];

  isDownloading: { [key: number]: boolean } = {};

  get pdfFiles(): PdfFile[] {
    if (!this.reportDate) return [];
    return this.allPdfFiles.filter(file => file.date === this.reportDate);
  }

  handleFileInput(event: any) {
    const file = event.target.files[0];
    if (file) {
      const newFile: PdfFile = {
        id: this.allPdfFiles.length + 1,
        name: file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(1)}MB`,
        date: this.reportDate || new Date().toISOString().split('T')[0],
        url: URL.createObjectURL(file)
      };
      this.allPdfFiles.push(newFile);
    }
  }

  async downloadPdf(file: PdfFile) {
    if (!file.url || this.isDownloading[file.id]) return;
    
    this.isDownloading[file.id] = true;
    
    try {
      const response = await fetch(file.url);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = file.name;
      document.body.appendChild(link);
      link.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading file:', error);
    } finally {
      this.isDownloading[file.id] = false;
    }
  }

  resetForm() {
    this.reportDate = '';
    this.allPdfFiles.forEach(file => file.selected = false);
  }
}