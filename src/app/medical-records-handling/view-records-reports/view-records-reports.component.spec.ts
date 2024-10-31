import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRecordsReportsComponent } from './view-records-reports.component';

describe('ViewRecordsReportsComponent', () => {
  let component: ViewRecordsReportsComponent;
  let fixture: ComponentFixture<ViewRecordsReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewRecordsReportsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRecordsReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
