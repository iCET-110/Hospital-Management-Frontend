import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DevindaComponent } from './medical-records-handling/view-records-reports/devinda/devinda.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DevindaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HMS';
}
