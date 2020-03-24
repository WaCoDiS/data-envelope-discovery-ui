import { Component, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import {HOURLY} from './optional-parameters-dwd.layernames';

@Component({
  selector: 'app-optional-parameters-dwd',
  templateUrl: './optional-parameters-dwd.component.html',
  styleUrls: ['./optional-parameters-dwd.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class OptionalParametersDwdComponent implements OnInit {

  public dropdownOptionsTime: any
  public dropdownOptionsLayer: any
  public dropdownOptionsLayerHourly: any

  constructor() { }

  ngOnInit() {
    this.dropdownOptionsTime = ["hourly", "daily", "monthly", "yearly"];
    this.dropdownOptionsLayerHourly= this.getLayername()
  }

  selectionChanged(evt){
    console.log(evt.value);
  }

  config = {
    placeholder:'Select',
    search:true,
    limitTo: HOURLY.length
  }

  getLayername() {
    var layernames: string[] = [];
    for (let i in HOURLY) {
      layernames.push(HOURLY[i][1])
      //alert(HOURLY[i][1])
    }
    return layernames;
  }

  availableLayerNames(selectedTimeIntervall){
    if (selectedTimeIntervall.value == "hourly"){
      this.dropdownOptionsLayer = this.dropdownOptionsLayerHourly;
    }
    if (selectedTimeIntervall.value == "daily"){
      this.dropdownOptionsLayer = ['blub'];
    }
    if (selectedTimeIntervall.value == "monthly"){
      this.dropdownOptionsLayer = ['blub'];
    }
    if (selectedTimeIntervall.value == "yearly"){
      this.dropdownOptionsLayer = ['blub'];
    }
  }
}

