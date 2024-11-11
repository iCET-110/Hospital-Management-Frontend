import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PawaraComponent } from './pawara.component';

describe('PawaraComponent', () => {
  let component: PawaraComponent;
  let fixture: ComponentFixture<PawaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PawaraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PawaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
