import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDepartmentsListComponent } from './company-departments-list.component';

describe('CompanyDepartmentsListComponent', () => {
  let component: CompanyDepartmentsListComponent;
  let fixture: ComponentFixture<CompanyDepartmentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyDepartmentsListComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CompanyDepartmentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
