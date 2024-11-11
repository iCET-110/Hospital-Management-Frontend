import { Component } from '@angular/core';
import { NavBarComponent } from "../common/nav-bar/nav-bar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dash-bord-page',
  standalone: true,
  imports: [NavBarComponent,RouterOutlet],
  templateUrl: './dash-bord-page.component.html',
  styleUrl: './dash-bord-page.component.css'
})
export class DashBordPageComponent {

}
