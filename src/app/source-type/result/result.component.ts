import { Component, OnInit } from '@angular/core';
import * as sourceType from '../../source-type-interfaces';
import { HttpService } from 'src/app/services/http/http.service';
import { ParameterService } from 'src/app/services/parameter-service/parameter-service.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  dataEnvelopes: sourceType.DataEnvelope[];

  constructor(private httpService: HttpService, private parameterService: ParameterService) {
  }

  ngOnInit() {
  }


  sendRequest() {
    this.dataEnvelopes = new Array();
    console.log(this.parameterService.getDataEnvelope())
    var ergebnis = this.httpService.searchDataEnvelope(this.parameterService.getDataEnvelope());
    ergebnis.subscribe(val => console.log(val));
    ergebnis.subscribe(dataEnvelope => this.dataEnvelopes.push(dataEnvelope));
  }
}

