import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { YalinaComponent } from './medical-records-handling/add-records/yalina/yalina.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,YalinaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HMS';
}
