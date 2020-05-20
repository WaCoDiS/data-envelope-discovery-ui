import { Component, EventEmitter, Output} from '@angular/core';
import { ParameterService } from '../services/parameter-service/parameter-service.service';
import * as sourceType from '../source-type-interfaces';
import { HttpService } from 'src/app/services/http/http.service';
import {ResultService} from 'src/app/services/result/result.service';
import {MapApplicationComponent} from '../map-application/map-application.component';

@Component({
  selector: 'app-source-type',
  templateUrl: './source-type.component.html',
  styleUrls: ['./source-type.component.scss']
})
export class SourceTypeComponent{
  componentTitel = "Source type"
  sourceTypeSelection = 'SensorWeb';
  resultPressed = false;

  @Output() results = new EventEmitter<sourceType.DataEnvelopeResult[]>();

constructor(public parameterService: ParameterService, private httpService: HttpService, private resultService: ResultService) { }

  sendChoosenSourceType(event: any){
   this.parameterService.changeSourceType(event);
  }


  sendRequest() {
    this.resultPressed = true;
    console.log(this.parameterService.getDataEnvelope())
    var ergebnis = this.httpService.searchDataEnvelope(this.parameterService.getDataEnvelope());
    ergebnis.subscribe(val => console.log(val));
    ergebnis.subscribe(dataEnvelope => this.resultService.addResult(dataEnvelope));
    this.results.emit(this.resultService.getResults());
  }

}