import { Routes } from '@angular/router';
import { UpdateComponent } from './patient-management/update/update.component';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
export const routes: Routes = [{ path: 'update-patient', component: UpdateComponent },{
        path:'',
        component:NavBarComponent }
];