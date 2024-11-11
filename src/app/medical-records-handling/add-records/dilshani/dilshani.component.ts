import { Component, OnInit } from '@angular/core';
import { SharedService } from '../add-records.component';

@Component({
  selector: 'app-dilshani',
  standalone: true,
  imports: [],
  templateUrl: './dilshani.component.html',
  styleUrl: './dilshani.component.css'
})
export class DilshaniComponent implements OnInit{
  public reportList:any = [];
  public reportNames:string = "";
  public prescriptionList:any = [];
  public prescriptionNames:string = "";
    
  constructor(private sharedService: SharedService) {}
  
  ngOnInit(): void {
    //Subcribed to shared service function to retrive data
    this.sharedService.function$.subscribe((document) => this.updateReportsPrecription(document));
  }

  updateReportsPrecription(document:any){
    if (document.type == "report") {
      //Update report list with new report
      this.reportList.push(document.doc);
      this.reportNames += (document.doc.name + '\n');  
    } else {
      //Update prescription list with new report
      this.prescriptionList.push(document.doc);
      this.prescriptionNames += (document.doc.name + '\n');  
    }
  }
}
