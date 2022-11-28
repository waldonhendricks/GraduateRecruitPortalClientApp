import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectVacancyComponent } from './direct-vacancy.component';

describe('DirectVacancyComponent', () => {
  let component: DirectVacancyComponent;
  let fixture: ComponentFixture<DirectVacancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectVacancyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectVacancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
