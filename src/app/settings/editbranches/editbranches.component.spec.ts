import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbranchesComponent } from './editbranches.component';

describe('EditbranchesComponent', () => {
  let component: EditbranchesComponent;
  let fixture: ComponentFixture<EditbranchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditbranchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditbranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
