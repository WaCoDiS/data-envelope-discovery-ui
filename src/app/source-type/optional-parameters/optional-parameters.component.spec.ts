import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionalParametersComponent } from './optional-parameters.component';

describe('OptionalParametersComponent', () => {
  let component: OptionalParametersComponent;
  let fixture: ComponentFixture<OptionalParametersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionalParametersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionalParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
