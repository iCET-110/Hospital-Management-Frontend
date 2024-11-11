import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnushkaComponent } from './anushka.component';

describe('AnushkaComponent', () => {
  let component: AnushkaComponent;
  let fixture: ComponentFixture<AnushkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnushkaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnushkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
