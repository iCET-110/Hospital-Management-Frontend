import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent implements OnInit {
  currentDate: string;
  adminName: string;
  adminRole: string;
  categoryId: string;
  categoryDescription: string;

  constructor() {
    this.currentDate = '10/18/2024'; 
    this.adminName = 'Nisila Perera';
    this.adminRole = 'Admin';
    this.categoryId = 'CA001';
    this.categoryDescription = 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you';
  }

  ngOnInit(): void {
    document.body.style.backgroundColor = '#E6FFE8';
    
  }

  addCategory(): void {
    console.log('Adding category:', this.categoryId, this.categoryDescription);
  }
}
