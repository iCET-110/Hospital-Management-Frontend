import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DulangaComponent } from './dulanga.component';

describe('DulangaComponent', () => {
  let component: DulangaComponent;
  let fixture: ComponentFixture<DulangaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DulangaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DulangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
