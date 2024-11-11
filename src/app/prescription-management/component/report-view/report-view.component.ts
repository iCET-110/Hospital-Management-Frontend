import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import jsPDF from 'jspdf';
import { ReportServiceService } from '../../service/report-service.service';


@Component({
  selector: 'app-report-view',
  standalone: true,
  imports: [HttpClientModule,RouterOutlet, NgFor],
  templateUrl: './report-view.component.html',
  styleUrls: ['./report-view.component.css']
})
export class ReportViewComponent implements OnInit {
  constructor(private reportService: ReportServiceService) { }

  public productList: any = [];

  ngOnInit(): void {
    this.fetchReport();
  }

  public fetchReport() {
    this.reportService.getProducts().subscribe((data: any) => {
      console.log(data);
      this.productList = data;
    });
  }

  async downloadPDF(report: any) {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;
    const centerText = (text: string, y: number) => {
      const textWidth = doc.getTextWidth(text);
      const x = (pageWidth - textWidth) / 2;
      doc.text(text, x, y);
    };
    doc.setFontSize(16);
    centerText(`ID: ${report.id}`, 20);            
    doc.setFontSize(14);
    centerText(`Title: ${report.title}`, 30);     
    doc.setFontSize(12);
    const descriptionLines = doc.splitTextToSize(`Description: ${report.description}`, pageWidth - 20);
    doc.text(descriptionLines, pageWidth / 2, 40, { align: 'center', maxWidth: pageWidth - 20 });
    const lastY = 40 + (descriptionLines.length * 5);
    centerText(`Price: $${report.price}`, lastY + 10);    
    try {
      const imgData = await this.getBase64Image(report.image);     
      const imgWidth = 50;
      const imgHeight = 50;
      const imgX = (pageWidth - imgWidth) / 2;
      const imgY = lastY + 20;
      doc.addImage(imgData, 'JPEG', imgX, imgY, imgWidth, imgHeight);
    } catch (error) {
      console.error('Error loading image:', error);
      centerText('Image not available', lastY + 20);     
    }
    doc.save(`product-details-${report.id}.pdf`);         
  }

  private getBase64Image(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'Anonymous';
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0);
        const dataURL = canvas.toDataURL('image/jpeg');
        resolve(dataURL);
      };
      img.onerror = error => reject(error);
      img.src = url;
    });
  }
}
