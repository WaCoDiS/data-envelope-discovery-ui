import { Component, OnInit, PipeTransform, Input } from '@angular/core';
import * as sourceType from '../../source-type-interfaces';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})

export class ResultComponent implements OnInit {

  @Input()  dataEnvelopes: sourceType.DataEnvelopeResult[];


  ngOnInit() {
  }



}

