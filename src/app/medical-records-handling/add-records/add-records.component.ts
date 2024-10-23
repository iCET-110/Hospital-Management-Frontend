import { Component } from '@angular/core';
import { DilshaniComponent } from './dilshani/dilshani.component';

@Component({
  selector: 'app-add-records',
  standalone: true,
  imports: [DilshaniComponent],
  templateUrl: './add-records.component.html',
  styleUrl: './add-records.component.css'
})
export class AddRecordsComponent {

}
