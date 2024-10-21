import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentHandlingComponent } from './appointment-handling.component';

describe('AppointmentHandlingComponent', () => {
  let component: AppointmentHandlingComponent;
  let fixture: ComponentFixture<AppointmentHandlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentHandlingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
