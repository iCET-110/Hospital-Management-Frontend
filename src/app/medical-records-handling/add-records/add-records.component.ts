import { Component } from '@angular/core';
import { DilshaniComponent } from './dilshani/dilshani.component';
import { YalinaComponent } from "./yalina/yalina.component";
import { SaradaComponent } from "../view-records-reports/sarada/sarada.component";

@Component({
  selector: 'app-add-records',
  standalone: true,
  imports: [DilshaniComponent, YalinaComponent, SaradaComponent],
  templateUrl: './add-records.component.html',
  styleUrl: './add-records.component.css'
})
export class AddRecordsComponent {

}
