import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppoimentSearchComponent } from './appointment-handling/appoiment-search/appoiment-search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AppoimentSearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HMS';
}
