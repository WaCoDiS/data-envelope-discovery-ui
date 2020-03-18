import { Component, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-optional-parameters-copernicus',
  templateUrl: './optional-parameters-copernicus.component.html',
  styleUrls: ['./optional-parameters-copernicus.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class OptionalParametersCopernicusComponent implements OnInit {

  public dropdownOptionsSatellite: any
  public dropdownOptionsPortal: any
  public selectedSatellite: any
  public selectedPortal: any

  constructor() { }

  ngOnInit() {
    this.dropdownOptionsSatellite = ["Sentinel-1", "Sentinel-2", "Sentinel-3"];
    this.dropdownOptionsPortal = ["CODE-DE", "Sentinel-Hub"];

    this.selectedSatellite = this.dropdownOptionsSatellite[1];
    this.selectedPortal = this.dropdownOptionsPortal[0];
  }

  selectionChanged(evt){
    console.log(evt.value);
  }

  config = {
    placeholder:'Select'
  };

}
