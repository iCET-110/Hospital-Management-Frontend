import { Component } from '@angular/core';
import { PawaraComponent } from './pawara/pawara.component';

@Component({
  selector: 'app-add-records',
  standalone: true,
  imports: [PawaraComponent],
  templateUrl: './add-records.component.html',
  styleUrl: './add-records.component.css'
})
export class AddRecordsComponent {

}
