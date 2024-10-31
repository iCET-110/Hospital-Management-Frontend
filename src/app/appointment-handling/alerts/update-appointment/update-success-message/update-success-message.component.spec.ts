import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSuccessMessageComponent } from './update-success-message.component';

describe('UpdateSuccessMessageComponent', () => {
  let component: UpdateSuccessMessageComponent;
  let fixture: ComponentFixture<UpdateSuccessMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateSuccessMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSuccessMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
