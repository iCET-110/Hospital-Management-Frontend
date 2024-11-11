import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionDataEntryComponent } from './prescription-data-entry.component';

describe('PrescriptionDataEntryComponent', () => {
  let component: PrescriptionDataEntryComponent;
  let fixture: ComponentFixture<PrescriptionDataEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrescriptionDataEntryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrescriptionDataEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
