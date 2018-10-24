import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyexpensesComponent } from './monthlyexpenses.component';

describe('MonthlyexpensesComponent', () => {
  let component: MonthlyexpensesComponent;
  let fixture: ComponentFixture<MonthlyexpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyexpensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyexpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
