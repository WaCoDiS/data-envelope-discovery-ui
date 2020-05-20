import { Component } from '@angular/core';
import * as sourceType from './source-type-interfaces'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  results : sourceType.DataEnvelopeResult[];

  onResults(results: sourceType.DataEnvelopeResult[]){
    this.results = results;
  }

}
