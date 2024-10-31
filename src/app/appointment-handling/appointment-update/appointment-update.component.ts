import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from "../../common/nav-bar/nav-bar.component";
import { FormsModule, NgModel} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { clear } from 'console';

@Component({
  selector: 'app-appointment-update',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './appointment-update.component.html',
  styleUrl: './appointment-update.component.css'
})
export class AppointmentUpdateComponent implements OnInit {

  public searchText:any=""; 

  ngOnInit(): void {
    document.body.style.backgroundColor = '#E6FFE8';
  }

  public testAppointments = [
    {
      appointmentId: '123',
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

  searchPatient(){
    let apponitmentId = document.querySelector(".apponitmentId") as HTMLInputElement;
    let txtName = document.querySelector(".txtName") as HTMLInputElement;
    let txtNic = document.querySelector(".txtNic") as HTMLInputElement;
    let txtMobile = document.querySelector(".txtMobile") as HTMLInputElement;
    let txtEmail = document.querySelector(".txtEmail") as HTMLInputElement;
    let aptDate = document.querySelector(".aptDate") as HTMLInputElement;
    let aptTime = document.querySelector(".aptTime") as HTMLInputElement;
    let txtCategory = document.querySelector(".txtCategory") as HTMLInputElement;
    let txtDesc = document.querySelector(".txtDesc") as HTMLInputElement;
    let genderChckBox = document.querySelector(".genderChckBox") as HTMLInputElement;

    const foundAppointment = this.testAppointments.find(appointment => 
      appointment.appointmentId === this.searchText || appointment.name === this.searchText
    );
    if (foundAppointment) {
      apponitmentId.value = foundAppointment.appointmentId;
      txtName.value = foundAppointment.name;
      txtNic.value = foundAppointment.nic;
      txtMobile.value = foundAppointment.mobile;
      txtEmail.value = foundAppointment.email;
      aptDate.value = foundAppointment.date;
      aptTime.value = foundAppointment.time;
      txtCategory.value = foundAppointment.category;
      txtDesc.value = foundAppointment.description;
      genderChckBox.checked = foundAppointment.gender;
      txtNic.disabled = true;
      txtMobile.disabled = true;
      txtEmail.disabled = true;
      this.searchText = "";
    } else {
      console.log("Appointment not found");
      this.searchText = "";
    }
  }

  update(){
    let apponitmentId = document.querySelector(".apponitmentId") as HTMLInputElement;
    let txtName = document.querySelector(".txtName") as HTMLInputElement;
    let txtNic = document.querySelector(".txtNic") as HTMLInputElement;
    let txtMobile = document.querySelector(".txtMobile") as HTMLInputElement;
    let txtEmail = document.querySelector(".txtEmail") as HTMLInputElement;
    let aptDate = document.querySelector(".aptDate") as HTMLInputElement;
    let aptTime = document.querySelector(".aptTime") as HTMLInputElement;
    let txtCategory = document.querySelector(".txtCategory") as HTMLInputElement;
    let txtDesc = document.querySelector(".txtDesc") as HTMLInputElement;
    let genderChckBox = document.querySelector(".genderChckBox") as HTMLInputElement;

    const foundAppointmentIndex = this.testAppointments.findIndex(appointment => 
      appointment.appointmentId === apponitmentId.value
    );
    if (foundAppointmentIndex !== -1) {
      this.testAppointments[foundAppointmentIndex] = {
        appointmentId: apponitmentId.value,
        name: txtName.value,
        nic: txtNic.value,
        mobile: txtMobile.value,
        email: txtEmail.value,
        date: aptDate.value,
        time: aptTime.value,
        category: txtCategory.value,
        description: txtDesc.value,
        gender: genderChckBox.checked,
      };
      apponitmentId.value = "";
      txtName.value = "";
      txtNic.value = "";
      txtMobile.value = "";
      txtEmail.value = "";
      aptDate.value = "";
      aptTime.value = "";
      txtCategory.value = "";
      txtDesc.value = "";
      genderChckBox.checked = false;
      this.searchText = "";
    } else {
      console.log("Appointment not found");
      this.searchText = "";
    }
  }
}
