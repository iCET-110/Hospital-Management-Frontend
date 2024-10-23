import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from "../../common/nav-bar/nav-bar.component";

@Component({
  selector: 'app-appointment-update',
  standalone: true,
  imports: [],
  templateUrl: './appointment-update.component.html',
  styleUrl: './appointment-update.component.css'
})
export class AppointmentUpdateComponent implements OnInit {
  ngOnInit(): void {
    document.body.style.backgroundColor = '#E6FFE8';
  }

  public testAppointments = [
    {
      appintmentId: '123',
      name: 'John Doe',
      nic: '123456789V',
      mobile: '0712345678',
      email: 'john.doe@example.com',
      gender: true,
      date: '2023-10-01',
      time: '10:00',
      description: 'Regular check-up',
      category: 'General'
    },
    {
      appointmentId: '456',
      name: 'Jane Smith',
      nic: '987654321V',
      mobile: '0723456789',
      email: 'jane.smith@example.com',
      gender: false,
      date: '2023-10-02',
      time: '11:00',
      description: 'Dental appointment',
      category: 'Dental'
    }
  ];
}
