import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyAdsComponent } from './vacancy-ads.component';

describe('VacancyAdsComponent', () => {
  let component: VacancyAdsComponent;
  let fixture: ComponentFixture<VacancyAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacancyAdsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacancyAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
