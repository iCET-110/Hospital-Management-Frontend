import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Medication } from '../../../model/medication';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-confirmation-popup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './confirmation-popup.component.html',
  styleUrl: './confirmation-popup.component.css'
})
export class ConfirmationPopupComponent {

  public drugData: Medication[]=[];

  constructor(private http:HttpClient){

    this.drugData.push(new Medication("ss","aa","aa"));
    //this.loadDrugsTable();
  }

  loadDrugsTable(){
    this.http.get<Medication[]>("#").subscribe(res=>{
      this.drugData=res;
      console.log(res);
    })
  }
}
