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
    console.log("onResults");
    console.log(results[0]);
    this.results = results;
  }

}
