import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { PrescriptionDataEntryComponent } from './prescription-management/component/prescription-data-entry/prescription-data-entry.component';
import { Prescription } from './prescription-management/model/prescription';
import { PrescriptionManagementComponent } from './prescription-management/prescription-management.component';

export const routes: Routes = [
  {
    path: '',
    component: PrescriptionManagementComponent 
  },
 
];
