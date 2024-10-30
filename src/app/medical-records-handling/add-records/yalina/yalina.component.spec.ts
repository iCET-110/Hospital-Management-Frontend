import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YalinaComponent } from './yalina.component';

describe('YalinaComponent', () => {
  let component: YalinaComponent;
  let fixture: ComponentFixture<YalinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YalinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YalinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
