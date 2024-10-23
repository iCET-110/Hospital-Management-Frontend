import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PawaraComponent } from "./medical-records-handling/add-records/pawara/pawara.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HMS';
}
