import { Injectable } from '@angular/core';
import * as sourceType from '../../source-type-interfaces';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultService {


  // selectedEnvelope: sourceType.DataEnvelopeResult;

  constructor() { }



  // Observable source
  private selectedEnvelope = new Subject<sourceType.DataEnvelopeResult>();
  private selectedFootprintIdentifier =  new Subject<string>();


  // Observable stream
  selectedEnvelope$ = this.selectedEnvelope.asObservable();
  selectedFootprintIdentifier$ = this.selectedFootprintIdentifier.asObservable();



  colorizeSelected(selectedEnvelope: sourceType.DataEnvelopeResult) {
    this.selectedEnvelope.next(selectedEnvelope);
  }

  colorizeListElement(identifier: string) {
    this.selectedFootprintIdentifier.next(identifier);
  }

}
