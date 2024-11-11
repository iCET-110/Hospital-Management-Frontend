import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoimentSearchComponent } from './appoiment-search.component';

describe('AppoimentSearchComponent', () => {
  let component: AppoimentSearchComponent;
  let fixture: ComponentFixture<AppoimentSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppoimentSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppoimentSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
