import { Component, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import {HOURLY, DAILY, MONTHLY, YEARLY} from './optional-parameters-dwd.layernames';
import { ParameterService } from 'src/app/services/parameter-service/parameter-service.service';

@Component({
  selector: 'app-optional-parameters-dwd',
  templateUrl: './optional-parameters-dwd.component.html',
  styleUrls: ['./optional-parameters-dwd.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class OptionalParametersDwdComponent implements OnInit {

  private dropdownOptionsTime: any
  private dropdownOptionsLayer: any
  private dropdownOptionsLayerHourly: any
  private dropdownOptionsLayerDaily: any
  private dropdownOptionsLayerMonthly: any
  private dropdownOptionsLayerYearly: any
  private selectedInterval: any

  constructor(public parameterService: ParameterService) { }

  ngOnInit() {
    this.dropdownOptionsTime = ["hourly", "daily", "monthly", "yearly"];
    this.dropdownOptionsLayerHourly = Array.from(HOURLY.keys());// this.getLayername(HOURLY);
    this.dropdownOptionsLayerDaily = Array.from(DAILY.keys());
    this.dropdownOptionsLayerMonthly = Array.from(MONTHLY.keys());
    this.dropdownOptionsLayerYearly = Array.from(YEARLY.keys());
  }

  selectionChanged(evt){
    console.log(evt.value);
  }

  config = {
    placeholder:'Select',
    search:true,
    limitTo: this.calcLimit()
  }

  calcLimit(){
    var lengths:number[] = [HOURLY.size, DAILY.size, MONTHLY.size, YEARLY.size];
    var sortedLenghts:number[] = lengths.sort((n1,n2) => n1 - n2);
    return sortedLenghts.pop();
  }

  availableLayerNames(selectedTimeIntervall){
    if (selectedTimeIntervall.value == "hourly"){
      this.dropdownOptionsLayer = this.dropdownOptionsLayerHourly;
    }
    if (selectedTimeIntervall.value == "daily"){
      this.dropdownOptionsLayer = this.dropdownOptionsLayerDaily;
    }
    if (selectedTimeIntervall.value == "monthly"){
      this.dropdownOptionsLayer = this.dropdownOptionsLayerMonthly;
    }
    if (selectedTimeIntervall.value == "yearly"){
      this.dropdownOptionsLayer = this.dropdownOptionsLayerYearly;
    }
  }

  determineSelectedInterval(selected: string){
    this.selectedInterval = selected;
  }

  readParameter(parameter: string){
    this.parameterService.setParameter(parameter);

    if(this.selectedInterval == "hourly"){
     this.parameterService.setLayerName(HOURLY.get(parameter));
    }

    if(this.selectedInterval == "daily"){
      this.parameterService.setLayerName(DAILY.get(parameter));
    }

    if(this.selectedInterval == "monthly"){
      this.parameterService.setLayerName(MONTHLY.get(parameter));
    }

    if(this.selectedInterval == "yearly"){
      this.parameterService.setLayerName(YEARLY.get(parameter));
    }
  }
}
