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
  copernicusDataEnvelopes: sourceType.DataEnvelope[];

  constructor(private httpService: HttpService, private parameterService: ParameterService) {
  }

  ngOnInit() {
  }


  sendRequest() {
    this.httpService.searchDataEnvelope(this.parameterService.getDataEnvelope())
      .subscribe(dataEnvelope => this.copernicusDataEnvelopes.push(dataEnvelope));
  }
}

