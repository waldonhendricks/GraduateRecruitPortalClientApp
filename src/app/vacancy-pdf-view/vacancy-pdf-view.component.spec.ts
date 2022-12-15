import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyPdfViewComponent } from './vacancy-pdf-view.component';

describe('VacancyPdfViewComponent', () => {
  let component: VacancyPdfViewComponent;
  let fixture: ComponentFixture<VacancyPdfViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacancyPdfViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacancyPdfViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
