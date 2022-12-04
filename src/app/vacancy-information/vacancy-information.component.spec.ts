import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyInformationComponent } from './vacancy-information.component';

describe('VacancyInformationComponent', () => {
  let component: VacancyInformationComponent;
  let fixture: ComponentFixture<VacancyInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacancyInformationComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(VacancyInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
