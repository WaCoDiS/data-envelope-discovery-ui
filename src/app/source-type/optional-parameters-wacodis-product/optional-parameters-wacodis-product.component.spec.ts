import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionalParametersWacodisProductComponent } from './optional-parameters-wacodis-product.component';

describe('OptionalParametersWacodisProductComponent', () => {
  let component: OptionalParametersWacodisProductComponent;
  let fixture: ComponentFixture<OptionalParametersWacodisProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionalParametersWacodisProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionalParametersWacodisProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
