import { RouterOutlet } from '@angular/router';
import { UpdateComponent } from './patient-management/update/update.component';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UpdateComponent],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title= 'HMS';
}
