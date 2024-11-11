import { Medication } from "./medication";

export class HoldPrescription {
  patientId: number;
  patientName: string;
  appointmentId: number;
  medications: Medication[];

  constructor(patientId: number, patientName: string, appointmentId: number, medications: Medication[]) {
    this.patientId = patientId;
    this.patientName = patientName;
    this.appointmentId = appointmentId;
    this.medications = medications;
  }
}

