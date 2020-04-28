import { Component, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { ParameterService } from 'src/app/services/parameter-service/parameter-service.service';

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
  public value: any
  constructor(public parameterService: ParameterService) { }

  ngOnInit() {
    this.dropdownOptionsSatellite = ["Sentinel-1", "Sentinel-2", "Sentinel-3"];
    this.dropdownOptionsPortal = ["CODE-DE", "Sentinel-Hub"];
    //this.value = [0,100];
    this.selectedSatellite = this.dropdownOptionsSatellite[1];
    this.selectedPortal = this.dropdownOptionsPortal[0];
  }

  selectionChanged(evt){
    console.log(evt.value);
  }

  config = {
    placeholder:'Select'
  };

  readSatellite(satellite: string){
    this.parameterService.setSatellite(satellite);
  }

  readCloudCover(cloudCover: number){
    this.parameterService.setCloudCover(cloudCover);
    console.log(this.parameterService.copernicus.cloudCoverage);
  }

  readPortal(portal: string){
    this.parameterService.setPortal(portal);
    console.log(this.parameterService.copernicus.portal);
  }

}
