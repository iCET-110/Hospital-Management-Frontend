import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppointmentSearchComponent } from './appointment-handling/appointment-search/appointment-search.component';
import { AppoimentSearchComponent } from './appointment-handling/appoiment-search/appoiment-search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavBarComponent,AppoimentSearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HMS';
}
