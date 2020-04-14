import { Component, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { ParameterService } from 'src/app/services/parameter-service/parameter-service.service';

@Component({
  selector: 'app-optional-parameters-sensor-web',
  templateUrl: './optional-parameters-sensor-web.component.html',
  styleUrls: ['./optional-parameters-sensor-web.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class OptionalParametersSensorWebComponent implements OnInit {

  constructor(public parameterService: ParameterService) { }

  ngOnInit() {
  }

  selectionChanged(evt){
    console.log(evt.value);
  }

  config = {
    placeholder:'Select'
  }

  readServiceUrl(ServicUrl: string){
    console.log(ServicUrl);
    this.parameterService.setServiceUrl(ServicUrl);

}
}
