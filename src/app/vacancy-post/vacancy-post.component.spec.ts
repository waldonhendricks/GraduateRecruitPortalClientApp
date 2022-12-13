import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyPostComponent } from './vacancy-post.component';

describe('VacancyPostComponent', () => {
  let component: VacancyPostComponent;
  let fixture: ComponentFixture<VacancyPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacancyPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacancyPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
