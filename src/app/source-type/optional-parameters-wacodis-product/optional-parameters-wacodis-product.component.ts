import { Component, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { ParameterService } from 'src/app/services/parameter-service/parameter-service.service';

export class WacodisProductParameters {
  productType: string;
}

@Component({
  selector: 'app-optional-parameters-wacodis-product',
  templateUrl: './optional-parameters-wacodis-product.component.html',
  styleUrls: ['./optional-parameters-wacodis-product.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class OptionalParametersWacodisProductComponent implements OnInit {

  public dropdownOptionsProductType: string[];
  public wacodisProductParameters: WacodisProductParameters;

  config = {
    placeholder: 'Select'
  };

  constructor(public parameterService: ParameterService) { }

  ngOnInit() {
    this.dropdownOptionsProductType = ['ndvi', 'land-cover-classification', 'forest_vitality_change', 'sealing-factor', 'vegetation-density-lai'];
    this.wacodisProductParameters = {
      productType: this.dropdownOptionsProductType[0]
    }
  }

  selectionChanged(evt) {
    console.log(evt.value);
  }
}
