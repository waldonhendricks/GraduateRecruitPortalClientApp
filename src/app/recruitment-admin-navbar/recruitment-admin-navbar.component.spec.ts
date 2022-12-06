import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitmentAdminNavbarComponent } from './recruitment-admin-navbar.component';

describe('RecruitmentAdminNavbarComponent', () => {
  let component: RecruitmentAdminNavbarComponent;
  let fixture: ComponentFixture<RecruitmentAdminNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruitmentAdminNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruitmentAdminNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
