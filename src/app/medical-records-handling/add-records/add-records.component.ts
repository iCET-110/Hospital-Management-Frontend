import { Component } from '@angular/core';
import { YalinaComponent } from "./yalina/yalina.component";
import { PawaraComponent } from './pawara/pawara.component';

@Component({
  selector: 'app-add-records',
  standalone: true,
  imports: [YalinaComponent,PawaraComponent],
  templateUrl: './add-records.component.html',
  styleUrl: './add-records.component.css'
})
export class AddRecordsComponent {

}
