import { Routes } from '@angular/router';
import { MainDashboardComponent } from './medical-records-handling/main-dashboard/main-dashboard.component';
import { AddRecordsComponent } from './medical-records-handling/add-records/add-records.component';
import { ViewRecordsReportsComponent } from './medical-records-handling/view-records-reports/view-records-reports.component';

export const routes: Routes = [
    {
        path: '',
        component: MainDashboardComponent,
    },
          {
            path: 'add-records',
            component: AddRecordsComponent
          },
          {
            path: 'view-records',
            component: ViewRecordsReportsComponent
          }
        ]
      
