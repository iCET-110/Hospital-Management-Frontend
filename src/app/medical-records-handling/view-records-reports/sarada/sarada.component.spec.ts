import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaradaComponent } from './sarada.component';

describe('SaradaComponent', () => {
  let component: SaradaComponent;
  let fixture: ComponentFixture<SaradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaradaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
