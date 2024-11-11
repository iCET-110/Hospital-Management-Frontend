import { HoldPrescription } from './hold-prescription';
import { Medication } from './medication';

describe('Patient', () => {
  it('should create a Patient instance with the given properties', () => {
    const medications: Medication[] = [
      new Medication('Aspirin', '100mg', 'Once a day'),
      new Medication('Ibuprofen', '200mg', 'Twice a day')
    ];
    const patient = new HoldPrescription(1, 'John Doe', 101, medications);

    expect(patient).toBeTruthy();
    expect(patient.patientId).toBe(1);
    expect(patient.patientName).toBe('John Doe');
    expect(patient.appointmentId).toBe(101);
    expect(patient.medications.length).toBe(2);
    expect(patient.medications[0].drugName).toBe('Aspirin');
    expect(patient.medications[1].frequency).toBe('Twice a day');
  });

  it('should allow medications to be added and retrieved', () => {
    const medications: Medication[] = [
      new Medication('Paracetamol', '500mg', 'Thrice a day')
    ];
    const patient = new HoldPrescription(2, 'Jane Doe', 102, medications);

    expect(patient.medications.length).toBe(1);
    expect(patient.medications[0].drugName).toBe('Paracetamol');
    expect(patient.medications[0].dosage).toBe('500mg');
    expect(patient.medications[0].frequency).toBe('Thrice a day');
  });

  it('should initialize an empty medication list if not provided', () => {
    const patient = new HoldPrescription(3, 'John Smith', 103, []);
    expect(patient.medications).toEqual([]);
  });
});
