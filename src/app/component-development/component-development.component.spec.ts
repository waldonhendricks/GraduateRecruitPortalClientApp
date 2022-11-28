import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDevelopmentComponent } from './component-development.component';

describe('ComponentDevelopmentComponent', () => {
  let component: ComponentDevelopmentComponent;
  let fixture: ComponentFixture<ComponentDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentDevelopmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
