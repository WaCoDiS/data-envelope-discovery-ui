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

  constructor(public parameterService: ParameterService) { }

  ngOnInit() {
    this.dropdownOptionsTime = ["hourly", "daily", "monthly", "yearly"];
    this.dropdownOptionsLayerHourly = this.getLayername(HOURLY);
    this.dropdownOptionsLayerDaily = this.getLayername(DAILY);
    this.dropdownOptionsLayerMonthly = this.getLayername(MONTHLY);
    this.dropdownOptionsLayerYearly = this.getLayername(YEARLY);
  }

  selectionChanged(evt){
    console.log(evt.value);
  }

  config = {
    placeholder:'Select',
    search:true,
    limitTo: this.calcLimit()
  }

  getLayername(timeArray) {
    var layernames: string[] = [];
    for (let i in timeArray) {
      layernames.push(timeArray[i][1])
    }
    return layernames;
  }

  calcLimit(){
    var lengths:number[] = [HOURLY.length, DAILY.length, MONTHLY.length, YEARLY.length];
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

  readServiceUrlDwd(serviceUrl: string){
    this.parameterService.setServiceUrlDwd(serviceUrl);
  }

  readLayerName(layerName: string){
    this.parameterService.setLayerName(layerName);
  }
}
