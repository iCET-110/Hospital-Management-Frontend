import { HttpClient } from '@angular/common/http';
import { Component,OnInit} from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';


@Component({
  selector: 'app-sarada',
  standalone: true,
  imports:[FormsModule],
  templateUrl: './sarada.component.html',
  styleUrl: './sarada.component.css'
}) 
export class SaradaComponent {
  
  constructor(private http:HttpClient){}

  recordId: string | null = null;
  date: string | null = null;
  records: any[] = [];
  recordList:any[] =[];
  ngOnInit(): void {
   //load api get all records
  }
  

   applyForm() {
    this.http.get(`http://localhost:8080/record/all`).subscribe(res=>{
      console.log(res);
      
    })
  
   }

  clearForm() {

    this.recordId = null;
    this.date = null;

    (document.getElementById('record-id') as HTMLInputElement).value = '';
    (document.getElementById('date') as HTMLInputElement).value = '';
    
  }

}




