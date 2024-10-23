import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SachiniComponent } from './sachini.component';

describe('SachiniComponent', () => {
  let component: SachiniComponent;
  let fixture: ComponentFixture<SachiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SachiniComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SachiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
