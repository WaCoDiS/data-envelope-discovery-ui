import { Injectable } from '@angular/core';
import * as sourceType from '../../source-type-interfaces';
import {MapApplicationComponent} from '../../map-application/map-application.component'

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  dataEnvelopes: sourceType.DataEnvelopeResult[] = new Array();
  mapApp: MapApplicationComponent;
  constructor(/*private mapApp: MapApplicationComponent*/) { }

  addResult(dataEnvelope: sourceType.DataEnvelopeResult){
    this.dataEnvelopes.push(dataEnvelope);
    console.log(this.dataEnvelopes);
    //this.mapApp.drawFootprints(this.dataEnvelopes);
  }

  getResults(){
    return this.dataEnvelopes;
  }

}
