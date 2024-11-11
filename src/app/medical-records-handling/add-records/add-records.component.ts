import { Component, Injectable } from '@angular/core';
import { DilshaniComponent } from './dilshani/dilshani.component';
import { YalinaComponent } from "./yalina/yalina.component";
import { PawaraComponent } from './pawara/pawara.component';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-add-records',
  standalone: true,
  imports: [YalinaComponent,PawaraComponent,DilshaniComponent],
  templateUrl: './add-records.component.html',
  styleUrl: './add-records.component.css'
})
export class AddRecordsComponent {

}

@Injectable({
  providedIn: "root"
})
export class SharedService {
  private functionSource = new Subject<void>();
  function$ = this.functionSource.asObservable();

  callFunction(document:any) {
    this.functionSource.next(document);
  }
}

