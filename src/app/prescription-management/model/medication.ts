export class Medication {

    drug:string;
    dosage:string;
    frequency:string;

    constructor(drug:string,dosage:string,frequency:string){
        this.drug=drug;
        this.dosage=dosage;
        this.frequency=frequency;
    }

    public getDrug(): string {
        return this.drug;
    }
    public getDosage(): string {
        return this.dosage;
    }
    public getFrequency(): string {
        return this.frequency;
    }

    public setDrug(drug: string): void {
        this.drug = drug;
    }
    public setDosage(dosage: string): void {
        this.dosage = dosage;
    }
    public setFrequency(frequency: string): void {
        this.frequency = frequency;
    }
}