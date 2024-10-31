import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.css'
})
export class MainDashboardComponent {ngOnInit(): void {
  document.body.style.backgroundColor = '#E6FFE8';
}

}