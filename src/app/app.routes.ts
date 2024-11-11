import { Routes } from '@angular/router';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { DashBordPageComponent } from './dash-bord-page/dash-bord-page.component';
import { ViewPatientListComponent } from './patient-management/view-patient-list/view-patient-list.component';
import { PatientManagementComponent } from './patient-management/patient-management.component';
import { SearchComponent } from './patient-management/search/search.component';
import { AddComponent } from './patient-management/add/add.component';


export const routes: Routes = [
    {
        path:'dash-bord',
        component:DashBordPageComponent,
        children:[
            {
                path:"view-patient",
                component:ViewPatientListComponent
            },
            {
                path:"search-patient",
                component:SearchComponent
            },
            {
                path:"add-patient",
                component:AddComponent
            }
        ]
    },
];
