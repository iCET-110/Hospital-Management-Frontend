
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HoldPrescription } from '../model/hold-prescription';

@Injectable({
  providedIn: 'root'
})

export class HoldPatientService {
    private apiUrl = 'https://your-backend-api-url.com/patients/hold';

    constructor(private http: HttpClient) {}
  
    holdPatientData(patient: HoldPrescription): Observable<HoldPrescription> {
      return this.http.post<HoldPrescription>(this.apiUrl, patient);
    }
}
