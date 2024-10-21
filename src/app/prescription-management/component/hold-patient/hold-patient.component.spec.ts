import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoldPatientComponent } from './hold-patient.component';

describe('HoldPatientComponent', () => {
  let component: HoldPatientComponent;
  let fixture: ComponentFixture<HoldPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoldPatientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoldPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
