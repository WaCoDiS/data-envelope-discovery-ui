import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapApplicationComponent } from './map-application.component';

describe('MapApplicationComponent', () => {
  let component: MapApplicationComponent;
  let fixture: ComponentFixture<MapApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
