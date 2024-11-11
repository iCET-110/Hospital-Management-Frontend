import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { UpdateComponent } from './patient-management/update/update.component';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { DashBordPageComponent } from './dash-bord-page/dash-bord-page.component';
import { ViewPatientListComponent } from './patient-management/view-patient-list/view-patient-list.component';
import { PatientManagementComponent } from './patient-management/patient-management.component';
import { SearchComponent } from './patient-management/search/search.component';
import { AddComponent } from './patient-management/add/add.component';
import { AddAppointmentComponent } from './appointment-handling/add-appointment/add-appointment.component';
import { DeleteAppointmentComponent } from './appointment-handling/delete-appointment/delete-appointment.component';
import { AppointmentViewComponent } from './appointment-handling/appointment-view/appointment-view.component';
import { AppoimentSearchComponent } from './appointment-handling/appoiment-search/appoiment-search.component';
import { PrescriptionManagementComponent } from './prescription-management/prescription-management.component';

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
            },
            {
                path:"update-patient",
                component:UpdateComponent
            },
            {
                path:"add-appointment",
                component:AddAppointmentComponent
            },
            {
                path:"delete-appointment",
                component:DeleteAppointmentComponent
            },
            {
                path:"view-appointments",
                component:AppointmentViewComponent
            },
            {
                path:"search-appointment",
                component:AppoimentSearchComponent
            },
            {
                path:"prescription-management",
                component:PrescriptionManagementComponent
            }
        ]
    },
];
