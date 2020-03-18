import { Component, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import {LayernameI, HOURLY} from './optional-parameters-dwd.layernames';

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
    //this.dropdownOptionsLayerHourly= this.getLayername(HOURLY)
  }

  selectionChanged(evt){
    console.log(evt.value);
  }

  config = {
    placeholder:'Select',
    customComparator: ()=>{
    }
  }

 /*getLayername(time:Layername[]){
    var layernames:string[] = [];
    alert(time.pop())
    for (let layer in time){
      layernames.push(layer.name())
      alert(layer[1])
    }
    return layernames;
  }*/

  /*availableLayerNames(selectedTimeIntervall){
    if (selectedTimeIntervall.value == "hourly"){
      this.dropdownOptionsLayer = ;
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
  }*/

}

export class Layername implements LayernameI{
  get name(): string {
    return this.name;
  }

  get title(): string {
    return this.title;
  }
}

