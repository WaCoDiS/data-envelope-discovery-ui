import { Component, EventEmitter, Output} from '@angular/core';
import { ParameterService } from '../services/parameter-service/parameter-service.service';
import * as sourceType from '../source-type-interfaces';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-source-type',
  templateUrl: './source-type.component.html',
  styleUrls: ['./source-type.component.scss']
})
export class SourceTypeComponent{
  componentTitel = "Source type"
  sourceTypeSelection = 'SensorWeb';
  resultPressed = false;
  dataEnvelopes: sourceType.DataEnvelopeResult[];

  @Output() results: EventEmitter<sourceType.DataEnvelopeResult[]> = new EventEmitter();

constructor(public parameterService: ParameterService, private httpService: HttpService) { }

  sendChoosenSourceType(event: any){
   this.parameterService.changeSourceType(event);
  }


  sendRequest() {
    this.dataEnvelopes =  new Array<sourceType.DataEnvelopeResult>();
    this.resultPressed = true;
    var ergebnis = this.httpService.searchDataEnvelope(this.parameterService.getDataEnvelope());
    ergebnis.subscribe(dataEnvelope => {
      this.dataEnvelopes = dataEnvelope;
      //this.dataEnvelopes.push(dataEnvelope);
    this.results.emit(this.dataEnvelopes);
    });
    
  }

}