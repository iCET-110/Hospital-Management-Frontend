import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-report-view',
  standalone: true,
  imports: [HttpClientModule, RouterOutlet, NgFor],
  templateUrl: './report-view.component.html',
  styleUrls: ['./report-view.component.css'],
})
export class ReportViewComponent implements OnInit {
  constructor(private http: HttpClient) {}

  public productList: any = [];

  ngOnInit(): void {
    this.fetchReport();
  }

  public fetchReport() {
    this.http
      .get('https://fakestoreapi.com/products')
      .subscribe((data: any) => {
        console.log(data);
        this.productList = data;
      });
  }

  async downloadPDF(product: any) {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(`ID: ${product.id}`, 10, 20);
    doc.setFontSize(14);
    doc.text(`Title: ${product.title}`, 10, 30);
    doc.setFontSize(12);
    doc.text(`Description: ${product.description}`, 10, 40, { maxWidth: 180 });
    doc.text(`Price: $${product.price}`, 10, 70);
    try {
      const imgData = await this.getBase64Image(product.image);
      doc.addImage(imgData, 'JPEG', 10, 80, 50, 50);
    } catch (error) {
      console.error('Error loading image:', error);
      doc.text('Image not available', 10, 100);
    }
    doc.save(`product-details-${product.id}.pdf`);
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
      img.onerror = (error) => reject(error);
      img.src = url;
    });
  }
}
