import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordStrengthValidatorComponent } from './password-strength-validator.component';

describe('PasswordStrengthValidatorComponent', () => {
  let component: PasswordStrengthValidatorComponent;
  let fixture: ComponentFixture<PasswordStrengthValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordStrengthValidatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordStrengthValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
