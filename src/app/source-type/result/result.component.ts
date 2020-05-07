import { Component, OnInit, PipeTransform } from '@angular/core';
import * as sourceType from '../../source-type-interfaces';
import { HttpService } from 'src/app/services/http/http.service';
import { ParameterService } from 'src/app/services/parameter-service/parameter-service.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  providers: [DecimalPipe]
})

export class ResultComponent implements OnInit {
  dataEnvelopes: sourceType.DataEnvelope[];

  dataEnvelopes$: Observable<sourceType.DataEnvelope[]>;
  filter = new FormControl('');

  resultPressed = false;

  constructor(private httpService: HttpService, private parameterService: ParameterService, pipe: DecimalPipe) {
    this.dataEnvelopes$ = this.filter.valueChanges.pipe(
      startWith(''),
     // map(text => this.search(text, pipe))
    );
  }

  ngOnInit() {
  }


  sendRequest() {
    this.resultPressed = true;
    this.dataEnvelopes = new Array();
    console.log(this.parameterService.getDataEnvelope())
    var ergebnis = this.httpService.searchDataEnvelope(this.parameterService.getDataEnvelope());
    ergebnis.subscribe(val => console.log(val));
    ergebnis.subscribe(dataEnvelope => this.dataEnvelopes.push(dataEnvelope));
  }

  /*search(text: string, pipe: PipeTransform): sourceType.DataEnvelope[] {
    return this.dataEnvelopes.filter(dataEnvelope => {
      const term = text.toLowerCase();
      return dataEnvelope.datasetId.toLowerCase().includes(term)
          || pipe.transform(dataEnvelope.timeFrame).includes(term)
          || pipe.transform(dataEnvelope.sourceType).includes(term);
    });
  }*/


}

