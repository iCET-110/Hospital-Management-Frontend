import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevindaComponent } from './devinda.component';

describe('DevindaComponent', () => {
  let component: DevindaComponent;
  let fixture: ComponentFixture<DevindaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevindaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevindaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
