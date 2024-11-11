export class Prescription {
    id:number;
    issuedDate:Date;
    prescriptionPath:string;

    constructor(id:number,issuedDate:Date,prescriptionPath:string){
        this.id=id;
        this.issuedDate=issuedDate;
        this.prescriptionPath=prescriptionPath;
    }
}
    