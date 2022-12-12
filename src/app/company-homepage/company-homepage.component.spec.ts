import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyHomepageComponent } from './company-homepage.component';

describe('CompanyHomepageComponent', () => {
  let component: CompanyHomepageComponent;
  let fixture: ComponentFixture<CompanyHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyHomepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
