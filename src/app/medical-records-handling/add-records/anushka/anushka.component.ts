import { Component } from '@angular/core';
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
  selector: 'app-anushka',
  templateUrl: './anushka.component.html',
  styleUrls: ['./anushka.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class AnushkaComponent {
  reportDate: string = '';
  showSearch: boolean = false;
  searchReportId: string = '';

  allPdfFiles: PdfFile[] = [
    { 
      id: 1, 
      name: 'General Medical Report.pdf', 
      size: '2.3MB', 
      date: '2024-10-31',
      url: 'sample1.pdf',
      selected: false
    },
    { 
      id: 2, 
      name: 'Blood Test Results.pdf', 
      size: '1.1MB', 
      date: '2024-10-31',
      url: 'sample2.pdf',
      selected: false
    },
    { 
      id: 3, 
      name: 'Chest X-Ray Report.pdf', 
      size: '3.5MB', 
      date: '2024-10-31',
      url: 'sample3.pdf',
      selected: false
    }
  ];

  isDownloading: { [key: number]: boolean } = {};

  get pdfFiles(): PdfFile[] {
    let files = this.allPdfFiles;
    
    if (this.reportDate) {
      files = files.filter(file => file.date === this.reportDate);
    }
    
    if (this.showSearch && this.searchReportId) {
      files = files.filter(file => 
        file.id.toString().includes(this.searchReportId) ||
        file.name.toLowerCase().includes(this.searchReportId.toLowerCase())
      );
    }
    
    return files;
  }

  toggleSearch() {
    this.showSearch = !this.showSearch;
    if (!this.showSearch) {
      this.searchReportId = '';
    }
  }

  handleFileInput(event: any) {
    const file = event.target.files[0];
    if (file) {
      const newFile: PdfFile = {
        id: this.allPdfFiles.length + 1,
        name: file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(1)}MB`,
        date: this.reportDate || new Date().toISOString().split('T')[0],
        url: URL.createObjectURL(file),
        selected: false
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
    this.searchReportId = '';
    this.showSearch = false;
    this.allPdfFiles.forEach(file => file.selected = false);
  }
}