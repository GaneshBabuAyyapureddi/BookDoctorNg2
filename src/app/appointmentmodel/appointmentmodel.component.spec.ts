import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentmodelComponent } from './appointmentmodel.component';

describe('AppointmentmodelComponent', () => {
  let component: AppointmentmodelComponent;
  let fixture: ComponentFixture<AppointmentmodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentmodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
