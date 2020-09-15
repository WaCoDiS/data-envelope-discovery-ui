import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { ParameterService } from 'src/app/services/parameter-service/parameter-service.service';

export class CopernicusParameters {
  satellite: string;
  portal: string;
  cloudCoverage: number;
}

@Component({
  selector: 'app-optional-parameters-copernicus',
  templateUrl: './optional-parameters-copernicus.component.html',
  styleUrls: ['./optional-parameters-copernicus.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class OptionalParametersCopernicusComponent implements OnInit {
  constructor(public parameterService: ParameterService) { }

  @Output() parametersChanged = new EventEmitter<CopernicusParameters>();

  public dropdownOptionsSatellite: any;
  public dropdownOptionsPortal: any;
  public selectedSatellite: any;
  public selectedPortal: any;
  public value: any;
  public copernicusParameters: CopernicusParameters;

  config = {
    placeholder: 'Select'
  };

  ngOnInit() {

    this.dropdownOptionsSatellite = ['Sentinel-1', 'Sentinel-2', 'Sentinel-3'];
    this.dropdownOptionsPortal = ['CODE-DE', 'Sentinel-Hub'];
    
    this.copernicusParameters = {
      satellite: this.dropdownOptionsSatellite[1],
      portal: this.dropdownOptionsPortal[1],
      cloudCoverage: 100
    };
    this.selectedSatellite = this.dropdownOptionsSatellite[1];
    this.selectedPortal = this.dropdownOptionsPortal[0];
  }

}
