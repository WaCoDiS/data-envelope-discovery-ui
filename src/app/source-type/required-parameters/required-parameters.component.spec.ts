import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequiredParametersComponent } from './required-parameters.component';

describe('RequiredParametersComponent', () => {
  let component: RequiredParametersComponent;
  let fixture: ComponentFixture<RequiredParametersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequiredParametersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequiredParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
