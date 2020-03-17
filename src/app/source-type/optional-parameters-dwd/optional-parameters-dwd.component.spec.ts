import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionalParametersDwdComponent } from './optional-parameters-dwd.component';

describe('OptionalParametersDwdComponent', () => {
  let component: OptionalParametersDwdComponent;
  let fixture: ComponentFixture<OptionalParametersDwdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionalParametersDwdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionalParametersDwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
