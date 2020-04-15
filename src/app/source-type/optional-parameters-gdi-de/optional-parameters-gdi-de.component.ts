import { Component, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { ParameterService } from 'src/app/services/parameter-service/parameter-service.service';

@Component({
  selector: 'app-optional-parameters-gdi-de',
  templateUrl: './optional-parameters-gdi-de.component.html',
  styleUrls: ['./optional-parameters-gdi-de.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class OptionalParametersGdiDeComponent implements OnInit {

  constructor(public parameterService: ParameterService) { }

  ngOnInit() {
  }

  selectionChanged(evt){
    console.log(evt.value);
  }

  readCatalogueUrl(catalogueUrl: string){
    this.parameterService.setCatalogueUrl(catalogueUrl);
  }

  readRecordRefId(recordRefId: string){
    this.parameterService.setRecordRefId(recordRefId);
  }

}
