import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionaldashboardComponent } from './regionaldashboard.component';

describe('RegionaldashboardComponent', () => {
  let component: RegionaldashboardComponent;
  let fixture: ComponentFixture<RegionaldashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionaldashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionaldashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
