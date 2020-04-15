import { Component, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { ParameterService } from 'src/app/services/parameter-service/parameter-service.service';

@Component({
  selector: 'app-optional-parameters-wacodis-product',
  templateUrl: './optional-parameters-wacodis-product.component.html',
  styleUrls: ['./optional-parameters-wacodis-product.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class OptionalParametersWacodisProductComponent implements OnInit {

  constructor(public parameterService: ParameterService) { }

  ngOnInit() {
  }

  selectionChanged(evt){
    console.log(evt.value);
  }

  readProductCollection(productCollection: string){
    this.parameterService.setProductCollection(productCollection);
  }

  readProductType(productType: string){
    this.parameterService.setProductType(productType);
  }

  readServiceName(serviceName: string){
    this.parameterService.setServiceName(serviceName);
  }

}
