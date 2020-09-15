import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { ParameterService } from '../services/parameter-service/parameter-service.service';
import * as sourceType from '../source-type-interfaces';
import { HttpService } from 'src/app/services/http/http.service';
import { CopernicusParameters, OptionalParametersCopernicusComponent } from './optional-parameters-copernicus/optional-parameters-copernicus.component';
import { OptionalParametersWacodisProductComponent } from './optional-parameters-wacodis-product/optional-parameters-wacodis-product.component';

@Component({
  selector: 'app-source-type',
  templateUrl: './source-type.component.html',
  styleUrls: ['./source-type.component.scss']
})
export class SourceTypeComponent {
  componentTitel = 'Source type';
  sourceTypeSelection = 'SensorWeb';
  resultPressed = false;
  dataEnvelopes: sourceType.DataEnvelopeResult[];

  @Output() results: EventEmitter<sourceType.DataEnvelopeResult[]> = new EventEmitter();

  @ViewChild(OptionalParametersCopernicusComponent)
  private copernicusParametersComp: OptionalParametersCopernicusComponent;

  @ViewChild(OptionalParametersWacodisProductComponent)
  private wacodisParametersComp: OptionalParametersWacodisProductComponent;

  constructor(public parameterService: ParameterService, private httpService: HttpService) { }

  sendChoosenSourceType(event: any) {
    this.parameterService.changeSourceType(event);
  }

  sendRequest() {
    this.dataEnvelopes = new Array<sourceType.DataEnvelopeResult>();
    this.resultPressed = true;
    var explore: sourceType.DataEnvelopeExplore;
    if (this.copernicusParametersComp) {
      console.log(this.copernicusParametersComp.copernicusParameters);
      explore = this.parameterService.getCopernicusExploreDataEnvelope(this.copernicusParametersComp.copernicusParameters);
    } else if (this.wacodisParametersComp) {
      console.log(this.wacodisParametersComp.wacodisProductParameters);
      explore = this.parameterService.getWacodisExploreDataEnvelope(this.wacodisParametersComp.wacodisProductParameters);
    }


    const ergebnis = this.httpService.searchDataEnvelope(explore);
    ergebnis.subscribe(dataEnvelope => {
      this.dataEnvelopes = dataEnvelope;
      // this.dataEnvelopes.push(dataEnvelope);
      this.results.emit(this.dataEnvelopes);
    });

  }

}
