import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyRecruitmentListComponent } from './company-recruitment-list.component';

describe('CompanyRecruitmentListComponent', () => {
  let component: CompanyRecruitmentListComponent;
  let fixture: ComponentFixture<CompanyRecruitmentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyRecruitmentListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyRecruitmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
