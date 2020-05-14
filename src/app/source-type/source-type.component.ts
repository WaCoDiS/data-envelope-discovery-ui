import { Component} from '@angular/core';
import { SensorWeb } from '../source-type-interfaces';
import { Copernicus } from '../source-type-interfaces';
import { Dwd } from '../source-type-interfaces';
import { WacodisProduct } from '../source-type-interfaces';
import { ParameterService } from '../services/parameter-service/parameter-service.service';
import * as sourceType from '../source-type-interfaces';
import { HttpService } from 'src/app/services/http/http.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-source-type',
  templateUrl: './source-type.component.html',
  styleUrls: ['./source-type.component.scss']
})
export class SourceTypeComponent{
  componentTitel = "Source type"
  sourceTypeSelection = 'SensorWeb';
  dataEnvelopes: sourceType.DataEnvelopeResult[];
  resultPressed = false;

constructor(public parameterService: ParameterService, private httpService: HttpService) { }
  sendChoosenSourceType(event: any){
   this.parameterService.changeSourceType(event);
  }


  sendRequest() {
    this.resultPressed = true;
    this.dataEnvelopes = new Array();
    console.log(this.parameterService.getDataEnvelope())
    var ergebnis = this.httpService.searchDataEnvelope(this.parameterService.getDataEnvelope());
    ergebnis.subscribe(val => console.log(val));
    ergebnis.subscribe(dataEnvelope => this.dataEnvelopes.push(dataEnvelope));
    console.log(this.dataEnvelopes);
  }

}