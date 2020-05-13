import { Component, OnInit, PipeTransform } from '@angular/core';
import * as sourceType from '../../source-type-interfaces';
import { HttpService } from 'src/app/services/http/http.service';
import { ParameterService } from 'src/app/services/parameter-service/parameter-service.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})

export class ResultComponent implements OnInit {
  dataEnvelopes: sourceType.DataEnvelopeResult[];
  filter = new FormControl('');

  resultPressed = false;

  constructor(private httpService: HttpService, private parameterService: ParameterService) {

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
    console.log(this.dataEnvelopes);
  }

}

