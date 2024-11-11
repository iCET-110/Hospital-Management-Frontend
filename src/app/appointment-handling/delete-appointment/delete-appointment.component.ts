import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../../common/nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete-appointment',
  standalone: true,
  imports: [CommonModule, NavBarComponent, FormsModule],
  templateUrl: './delete-appointment.component.html',
  styleUrls: ['./delete-appointment.component.css']
})
export class DeleteAppointmentComponent implements OnInit {
  searchQuery: string = '';
  selectedAppointment: any = {};

  appointment = {
    appointmentId: '',
    name: '',
    NIC: '',
    mobileNumber: '',
    emailAddress: '',
    gender: 'male',
    date: '',
    time: '',
    description: '',
    category: ''
  };

  appointmentList = [
    {
      appointmentId: "A0001",
      name: "Saman",
      NIC: "199846513V",
      mobileNumber: "0714526889",
      emailAddress: "saman.kumara@gmail.com",
      gender: "male",
      date: "2022-01-01",
      time: "13:00:00",
      description: "General checkup",
      category: "General"
    },
    {
      appointmentId: "A0002",
      name: "Kumara",
      NIC: "200056498655",
      mobileNumber: "0761234986",
      emailAddress: "kumara.kumara@gmail.com",
      gender: "male",
      date: "2023-01-01",
      time: "10:00:00",
      description: "Eye consultation",
      category: "Consultation"
    },
    {
      appointmentId: "A0003",
      name: "Himesh",
      NIC: "199307852V",
      mobileNumber: "0774526938",
      emailAddress: "himesh.perera@yahoo.com",
      gender: "male",
      date: "2023-05-18",
      time: "09:30:00",
      description: "Follow-up on surgery",
      category: "Surgery"
    },
    {
      appointmentId: "A0004",
      name: "Janith",
      NIC: "199105624V",
      mobileNumber: "0713489762",
      emailAddress: "janith.ranasinghe@hotmail.com",
      gender: "male",
      date: "2024-03-14",
      time: "11:00:00",
      description: "Heart consultation",
      category: "Consultation"
    },
    {
      appointmentId: "A0005",
      name: "Kushan",
      NIC: "198906357V",
      mobileNumber: "0772567841",
      emailAddress: "kushan.fernando@gmail.com",
      gender: "male",
      date: "2024-08-22",
      time: "14:00:00",
      description: "Routine blood test",
      category: "General"
    },
    {
      appointmentId: "A0006",
      name: "Hareen",
      NIC: "200109756V",
      mobileNumber: "0751234578",
      emailAddress: "hareen.silva@gmail.com",
      gender: "male",
      date: "2024-09-10",
      time: "12:45:00",
      description: "Orthopedic consultation",
      category: "Consultation"
    },
    {
      appointmentId: "A0007",
      name: "Mahinda",
      NIC: "196405687V",
      mobileNumber: "0715672345",
      emailAddress: "mahinda.weerasinghe@yahoo.com",
      gender: "male",
      date: "2024-07-05",
      time: "15:30:00",
      description: "Post-surgery follow-up",
      category: "Surgery"
    },
    {
      appointmentId: "A0008",
      name: "Tharindu",
      NIC: "199207856V",
      mobileNumber: "0709876543",
      emailAddress: "tharindu.jayasinghe@hotmail.com",
      gender: "male",
      date: "2024-02-11",
      time: "16:00:00",
      description: "General health checkup",
      category: "General"
    },
    {
      appointmentId: "A0009",
      name: "Anushka",
      NIC: "198506421V",
      mobileNumber: "0723451234",
      emailAddress: "anushka.wickrama@gmail.com",
      gender: "female",
      date: "2023-12-25",
      time: "10:15:00",
      description: "Eye checkup",
      category: "Consultation"
    },
    {
      appointmentId: "A0010",
      name: "Nimasha",
      NIC: "199808752V",
      mobileNumber: "0772349876",
      emailAddress: "nimasha.fernando@gmail.com",
      gender: "female",
      date: "2023-11-18",
      time: "08:00:00",
      description: "Surgery pre-op assessment",
      category: "Surgery"
    }
  ];

  onSearchInput() {
    if (this.searchQuery.trim() === '') {
      this.selectedAppointment = {};
    } else {
      this.selectedAppointment = this.appointmentList.find(appointment =>
        appointment.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        appointment.NIC.toLowerCase().includes(this.searchQuery.toLowerCase())
      ) || {};
    }
  }

  delete() {
    if (this.selectedAppointment && this.selectedAppointment.appointmentId) {
      const appointmentId = this.selectedAppointment.appointmentId;

      this.appointmentList = this.appointmentList.filter(
        appointment => appointment.appointmentId !== appointmentId
      );

      this.selectedAppointment = {};
      this.searchQuery = '';

      console.log(`Appointment with ID ${appointmentId} has been deleted.`);
    } else {
      console.log("No appointment selected for deletion.");
    }
  }

  resetForm(): void {
    this.appointment = {
      appointmentId: '',
      name: '',
      NIC: '',
      mobileNumber: '',
      emailAddress: '',
      gender: 'male',
      date: '',
      time: '',
      description: '',
      category: ''
    };
    this.searchQuery = '';
    this.selectedAppointment = {};
  }

  ngOnInit(): void {
    document.body.style.backgroundColor = '#E6FFE8';
  }
}
