import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalRecordsHandlingComponent } from './medical-records-handling.component';

describe('MedicalRecordsHandlingComponent', () => {
  let component: MedicalRecordsHandlingComponent;
  let fixture: ComponentFixture<MedicalRecordsHandlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalRecordsHandlingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalRecordsHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
