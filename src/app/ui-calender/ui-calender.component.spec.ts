import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCalenderComponent } from './ui-calender.component';

describe('UiCalenderComponent', () => {
  let component: UiCalenderComponent;
  let fixture: ComponentFixture<UiCalenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiCalenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
