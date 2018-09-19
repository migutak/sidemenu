import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitydashboardComponent } from './activitydashboard.component';

describe('ActivitydashboardComponent', () => {
  let component: ActivitydashboardComponent;
  let fixture: ComponentFixture<ActivitydashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitydashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitydashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
