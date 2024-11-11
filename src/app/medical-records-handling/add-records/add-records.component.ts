import { Component } from '@angular/core';
import { DilshaniComponent } from './dilshani/dilshani.component';
import { YalinaComponent } from "./yalina/yalina.component";
import { PawaraComponent } from './pawara/pawara.component';
import { AnushkaComponent } from './anushka/anushka.component';


@Component({
  selector: 'app-add-records',
  standalone: true,
  imports: [YalinaComponent,PawaraComponent,DilshaniComponent,AnushkaComponent],
  templateUrl: './add-records.component.html',
  styleUrl: './add-records.component.css'
})
export class AddRecordsComponent {

}
