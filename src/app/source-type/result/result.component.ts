import { Component, OnInit, PipeTransform, Input } from '@angular/core';
import * as sourceType from '../../source-type-interfaces';
import { ResultService } from 'src/app/services/result-service/result.service';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})

export class ResultComponent implements OnInit {

  @Input()  dataEnvelopes: sourceType.DataEnvelopeResult[];

  ngOnInit() {
  }

  constructor(public resultService: ResultService){

  }

  selected(dataEnvelope: sourceType.DataEnvelopeResult){
    console.log('hover')
    console.log(dataEnvelope)
    this.resultService.colorizeSelected(dataEnvelope);
  }


}

