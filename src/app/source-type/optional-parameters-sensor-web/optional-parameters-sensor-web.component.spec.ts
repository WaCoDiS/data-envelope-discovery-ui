import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionalParametersSensorWebComponent } from './optional-parameters-sensor-web.component';

describe('OptionalParametersSensorWebComponent', () => {
  let component: OptionalParametersSensorWebComponent;
  let fixture: ComponentFixture<OptionalParametersSensorWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionalParametersSensorWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionalParametersSensorWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
