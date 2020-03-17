import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionalParametersGdiDeComponent } from './optional-parameters-gdi-de.component';

describe('OptionalParametersGdiDeComponent', () => {
  let component: OptionalParametersGdiDeComponent;
  let fixture: ComponentFixture<OptionalParametersGdiDeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionalParametersGdiDeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionalParametersGdiDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
