import { Medication } from "./medication";

describe('Medication', () => {
  it('should create a Medication instance with given properties', () => {
    const medication = new Medication('Aspirin', '100mg', 'Once a day');

    expect(medication).toBeTruthy();
    expect(medication.drugName).toBe('Aspirin');
    expect(medication.dosage).toBe('100mg');
    expect(medication.frequency).toBe('Once a day');
  });

  it('should correctly assign properties through the constructor', () => {
    const medication = new Medication('Ibuprofen', '200mg', 'Twice a day');

    expect(medication.drugName).toEqual('Ibuprofen');
    expect(medication.dosage).toEqual('200mg');
    expect(medication.frequency).toEqual('Twice a day');
  });

  it('should handle empty string values for drugName, dosage, and frequency', () => {
    const medication = new Medication('', '', '');

    expect(medication.drugName).toBe('');
    expect(medication.dosage).toBe('');
    expect(medication.frequency).toBe('');
  });
});
