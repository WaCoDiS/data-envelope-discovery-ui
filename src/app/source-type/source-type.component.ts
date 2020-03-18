import { Component } from '@angular/core';
import { SensorWeb } from '../source-type-interfaces';
import { Copernicus } from '../source-type-interfaces';
import { GdiDe } from '../source-type-interfaces';
import { Dwd } from '../source-type-interfaces';
import { WacodisProduct } from '../source-type-interfaces';

@Component({
  selector: 'app-source-type',
  templateUrl: './source-type.component.html',
  styleUrls: ['./source-type.component.scss']
})
export class SourceTypeComponent{
  componentTitel = "Source type"

  sourceTypeSelection = 'SensorWeb';
  //showcontent:boolean=false;


  /*showContent(){
    this.showcontent=this.radioModel;
  }
*/

}
