import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopernicusResultComponent } from './copernicus-result.component';

describe('CopernicusResultComponent', () => {
  let component: CopernicusResultComponent;
  let fixture: ComponentFixture<CopernicusResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopernicusResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopernicusResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
