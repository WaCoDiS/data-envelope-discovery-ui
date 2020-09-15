import { Component, OnInit, PipeTransform, Input } from '@angular/core';
import * as sourceType from '../../../source-type-interfaces';
import { ResultService } from 'src/app/services/result-service/result.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'copernicus-result',
  templateUrl: './copernicus-result.component.html',
  styleUrls: ['./copernicus-result.component.scss']
})

export class CopernicusResultComponent implements OnInit {

  @Input()  dataEnvelopes: sourceType.DataEnvelopeResult[];

  subscription: Subscription;

  previousIdentifier: string;


  ngOnInit() {
    this.subscription = this.resultService.selectedFootprintIdentifier$
      .subscribe(item => {
        if (this.previousIdentifier == null) {  // nothing is selected
          this.hoverHoveredFootprint(item);   // a specific listElement gets a new color
          this.previousIdentifier = item;
        } else if (this.previousIdentifier === item) { // mouseleave
          console.log(document.getElementById(item).getAttribute('aria-expanded'));
          document.getElementById(item).style.backgroundColor = null;    // all listElements become white
          this.previousIdentifier = null;
        } else {   // a new one is selceted
          this.hoverHoveredFootprint(item); // a specific listElement gets a new color
          this.previousIdentifier = item;
      }
    }
      );
  }

  constructor(public resultService: ResultService) {

  }

  selected(dataEnvelope: sourceType.DataEnvelopeResult) {
    this.resultService.colorizeSelected(dataEnvelope);
  }

  hoverHoveredFootprint(identifier: string) {
    document.getElementById(identifier).style.backgroundColor = '#ececec';
  }

}

