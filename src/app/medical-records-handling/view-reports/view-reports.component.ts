import { Component } from '@angular/core';
import { SachiniComponent } from "./sachini/sachini.component";
import { DevindaComponent } from "./devinda/devinda.component";

@Component({
  selector: 'app-view-reports',
  standalone: true,
  imports: [SachiniComponent, DevindaComponent],
  templateUrl: './view-reports.component.html',
  styleUrl: './view-reports.component.css'
})
export class ViewReportsComponent {

}
