import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPatientListComponent } from './view-patient-list.component';

describe('ViewPatientListComponent', () => {
  let component: ViewPatientListComponent;
  let fixture: ComponentFixture<ViewPatientListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPatientListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPatientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

