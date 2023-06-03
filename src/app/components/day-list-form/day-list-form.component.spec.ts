import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayListFormComponent } from './day-list-form.component';

describe('DayListFormComponent', () => {
  let component: DayListFormComponent;
  let fixture: ComponentFixture<DayListFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayListFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
