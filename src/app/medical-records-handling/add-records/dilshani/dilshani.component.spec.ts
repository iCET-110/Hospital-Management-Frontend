import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DilshaniComponent } from './dilshani.component';

describe('DilshaniComponent', () => {
  let component: DilshaniComponent;
  let fixture: ComponentFixture<DilshaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DilshaniComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DilshaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
