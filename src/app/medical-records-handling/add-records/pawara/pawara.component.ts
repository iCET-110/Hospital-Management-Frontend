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
  public allPrescriptionList = [
    {
      name: "Amlodipine 5mg",
      date: "2024-10-12",
      link: "/resource/Amlodipine_5mg.pdf"
    },
    {
      name: "Metformin 500mg",
      date: "2024-10-10",
      link: "/resource/Metformin_500mg.pdf"
    },
    {
      name: "Levothyroxine 50mcg",
      date: "2024-10-11",
      link: "/resource/Levothyroxine_50mcg.pdf"
    },
    {
      name: "Atorvastatin 20mg",
      date: "2024-10-12",
      link: "/resource/Atorvastatin_20mg.pdf"
    },
    {
      name: "Omeprazole 20mg",
      date: "2024-10-13",
      link: "/resource/Omeprazole_20mg.pdf"
    },
    {
      name: "Sertraline 50mg",
      date: "2024-10-12",
      link: "/resource/Sertraline_50mg.pdf"
    },
    {
      name: "Albuterol Inhaler",
      date: "2024-10-10",
      link: "/resource/Albuterol_Inhaler.pdf"
    },
    {
      name: "Lisinopril 10mg",
      date: "2024-10-13",
      link: "/resource/Lisinopril_10mg.pdf"
    }
  ];

  //For storing display Reports and Prescriptions
  public displayReportList = this.allreportList;
  public displayPrescriptionList = this.allPrescriptionList;
  
  constructor(private sharedService: SharedService){}

  searchReportsByDate(event:Event) {
    let date:string = (event.target as HTMLInputElement).value;
    if(date.length > 0){
      //Change display lists to filtered by date list
      this.displayReportList = this.allreportList.filter(element => element.date == date);
      this.displayPrescriptionList = this.allPrescriptionList.filter(element => element.date == date)
    } else{
      //Display lists back to all list
      this.displayReportList = this.allreportList;
      this.displayPrescriptionList = this.allPrescriptionList;
    }
  }

  addReport(report:any){
    setTimeout(() => {
      //Remove checked report from the list
      this.allreportList = this.allreportList.filter(element => element.name != report.name);
      this.displayReportList = this.allreportList;
      //Reload list to filter by date; If filtered. 
      document.getElementById("reportDate")?.dispatchEvent(new Event("change"));

      let generatedId:string = report.patientId + "XXXX";

      //Call shared service function to send data
      report.name = report.type + " " + generatedId;
      this.sharedService.callFunction({
        doc: report,
        type: "report"
      });
    }, 300);
  }

  addPrescription(prescription:any){
    setTimeout(() => {
      //Remove checked prescription from the list
      this.allPrescriptionList = this.allPrescriptionList.filter(element => element.name != prescription.name);
      this.displayPrescriptionList = this.allPrescriptionList;
      //Reload list to filter by date; If filtered.
      document.getElementById("reportDate")?.dispatchEvent(new Event("change"));

      //Call shared service function to send data
      this.sharedService.callFunction({
        doc: prescription,
        type: "prescription"
      });
    }, 300);
  }
}
