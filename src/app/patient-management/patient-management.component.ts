import { Component } from '@angular/core';
import { AddComponent } from './add/add.component';
import { ViewPatientListComponent } from './view-patient-list/view-patient-list.component';
import { SearchComponent } from './search/search.component';


@Component({
  selector: 'app-patient-management',
  standalone: true,
  imports: [ViewPatientListComponent, SearchComponent, AddComponent],
  templateUrl: './patient-management.component.html',
  styleUrl: './patient-management.component.css'
})
export class PatientManagementComponent {

}
