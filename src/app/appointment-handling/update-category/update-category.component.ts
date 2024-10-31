import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-category',
  standalone: true,
  imports: [],
  templateUrl: './update-category.component.html',
  styleUrl: './update-category.component.css'
})
export class UpdateCategoryComponent implements OnInit {

  ngOnInit(): void {
    document.body.style.backgroundColor =  '#E6FFE8';
  }

}
