import { Component } from '@angular/core';
import { SearchBarComponent } from './search-components/search-bar/search-bar.component';

@Component({
  selector: 'app-prescription-management',
  standalone: true,
  imports: [SearchBarComponent],
  templateUrl: './prescription-management.component.html',
  styleUrl: './prescription-management.component.css'
})
export class PrescriptionManagementComponent {

}
