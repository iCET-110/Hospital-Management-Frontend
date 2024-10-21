import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UpdateComponent } from './patient-management/update/update.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UpdateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HMS';
}
