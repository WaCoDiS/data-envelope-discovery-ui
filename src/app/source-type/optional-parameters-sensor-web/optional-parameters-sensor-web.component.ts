import { Component, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-optional-parameters-sensor-web',
  templateUrl: './optional-parameters-sensor-web.component.html',
  styleUrls: ['./optional-parameters-sensor-web.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class OptionalParametersSensorWebComponent implements OnInit {

  public dropdownOptionsSatellite: any

  public dropdownOptionsPortal: any

  text: string;

  constructor() { }

  ngOnInit() {
    this.dropdownOptionsSatellite = ["Sentinel-1", "Sentinel-2", "Sentinel-3"];
    this.dropdownOptionsPortal = ["CODE-DE", "Sentinel-Hub"];
  }

  changeAction(obj) {
    this.text = obj;
  }

  selectionChanged(evt){
    console.log(evt.value);
  }


  config = {
    placeholder:'Select'
  }

}
