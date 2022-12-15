import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduateInformationComponent } from './graduate-information.component';

describe('GraduateInformationComponent', () => {
  let component: GraduateInformationComponent;
  let fixture: ComponentFixture<GraduateInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraduateInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraduateInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
