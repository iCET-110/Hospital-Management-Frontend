import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define the Patient interface
interface Patient {
  name: string;
  nic: string;
  dob: string;
  gender: string;
  contact: string;
  address: string;
  guardian: string;
  guardianContact: string;
}

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  // Replace with your actual API URL
  private apiUrl = 'https://your-api-url.com/api/patients';

  // Inject HttpClient in the constructor
  constructor(private http: HttpClient) { }

  // Method to get all patients from the API
  getAllPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.apiUrl);
  }
}