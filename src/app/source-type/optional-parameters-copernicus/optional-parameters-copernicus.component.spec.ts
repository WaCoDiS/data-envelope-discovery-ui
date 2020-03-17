import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionalParametersCopernicusComponent } from './optional-parameters-copernicus.component';

describe('OptionalParametersCopernicusComponent', () => {
  let component: OptionalParametersCopernicusComponent;
  let fixture: ComponentFixture<OptionalParametersCopernicusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionalParametersCopernicusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionalParametersCopernicusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
