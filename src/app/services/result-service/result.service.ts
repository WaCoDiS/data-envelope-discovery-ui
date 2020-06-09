import { Injectable } from '@angular/core';
import * as sourceType from '../../source-type-interfaces';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultService {


  //selectedEnvelope: sourceType.DataEnvelopeResult;

  constructor() { }



  // Observable source
  private selectedEnvelope = new Subject<sourceType.DataEnvelopeResult>();


  // Observable stream
  selectedEnvelope$ = this.selectedEnvelope.asObservable();



  colorizeSelected(selectedEnvelope: sourceType.DataEnvelopeResult) {
    console.log("colorizeSelected in Parameterservice")
    this.selectedEnvelope.next(selectedEnvelope);
  }

  getSelectedEnvelope() {
    return this.selectedEnvelope;
  }
}
