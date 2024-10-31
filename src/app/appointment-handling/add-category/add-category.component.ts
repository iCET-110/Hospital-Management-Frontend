import { Component, OnInit } from '@angular/core';
import { log } from 'console';

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
    this.categoryId = '';
    console.log(this.categoryId);
    this.categoryDescription = 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you';
  }
  
  ngOnInit(): void {
    document.body.style.backgroundColor = '#E6FFE8';
    
  }

  

  public testctegory = [{
    categoryId:'C001',
    categoryDescription:'hello'
  },
  {
    categoryId:'C002',
    categoryDescription:'hii'
  },
  {
    categoryId:'C003',
    categoryDescription:'hellow'
  }
];
  generateCategoryId() {
    let lastCategoryId = this.testctegory[this.testctegory.length - 1].categoryId;
    let newId = 'C' + (parseInt(lastCategoryId.substring(1)) + 1).toString().padStart(3, '0');
    return newId;
  }
  addCategory(){
    let categoryId = (document.querySelector(".cardcategoryid") as HTMLInputElement).value;
    let categoryDescription = (document.querySelector(".cardcategorydescription") as HTMLInputElement).value;
    this.testctegory.push({categoryId, categoryDescription});
    console.log(this.testctegory);
    (document.querySelector(".cardcategorydescription") as HTMLInputElement).value = '';
    (document.querySelector(".cardcategoryid") as HTMLInputElement).value = ''; // Clear category description field
  };



  
}