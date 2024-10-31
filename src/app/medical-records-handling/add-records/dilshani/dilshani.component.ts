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
  constructor(private sharedService: SharedService) {}
  
  ngOnInit(): void {
    this.sharedService.function$.subscribe((report) => this.addReportToRecord(report))
  }

  addReportToRecord(report:any) {
    this.reportList.push(report);
    this.reportNames += (report.name + '\n');    
  }
}
