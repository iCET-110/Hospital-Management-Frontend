import { NgFor } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SharedService } from '../add-records.component';

@Component({
  selector: 'app-pawara',
  standalone: true,
  imports: [NgFor],
  templateUrl: './pawara.component.html',
  styleUrl: './pawara.component.css'
})
export class PawaraComponent{
  public allreportList = [
    {
      name: "BloodReport P001",
      type: "BloodReport",
      patientId: "P001",
      link: "/resources/BloodReport P001.pdf",
      date: "2024-10-10"
    },
    {
      name: "X-RayReport P002",
      type: "X-RayReport",
      patientId: "P002",
      link: "/resources/X-RayReport P002.pdf",
      date: "2024-10-12"
    },
    {
      name: "BloodReport P005",
      type: "BloodReport",
      patientId: "P005",
      link: "/resources/BloodReport P005.pdf",
      date: "2024-10-13"
    },{
      name: "BloodReport P002",
      type: "BloodReport",
      patientId: "P002",
      link: "/resources/BloodReport P002.pdf",
      date: "2024-10-10"
    },{
      name: "X-RayReport P001",
      type: "X-RayReport",
      patientId: "P001",
      link: "/resources/X-RayReport P001.pdf",
      date: "2024-10-12"
    }
  ];

  public displayReportList = this.allreportList;
  
  constructor(private sharedService: SharedService){}

  searchReportsByDate(event:Event) {
    let date:string = (event.target as HTMLInputElement).value;
    if(date.length > 0){
      this.displayReportList = this.allreportList.filter(element => element.date == date)
    } else{
      this.displayReportList = this.allreportList;
    }
  }

  addReport(report:any){
    setTimeout(() => {
      this.allreportList = this.allreportList.filter(element => element.name != report.name);
      this.displayReportList = this.allreportList;
      let generatedId:string = report.patientId + "XXXX";

      report.name = report.type + " " + generatedId;
      this.sharedService.callFunction(report);
    }, 500);
    
  }
}
