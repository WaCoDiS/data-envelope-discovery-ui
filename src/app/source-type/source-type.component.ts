import { Component} from '@angular/core';
import { SensorWeb } from '../source-type-interfaces';
import { Copernicus } from '../source-type-interfaces';
import { GdiDe } from '../source-type-interfaces';
import { Dwd } from '../source-type-interfaces';
import { WacodisProduct } from '../source-type-interfaces';
import { ParameterService } from '../services/parameter-service/parameter-service.service';

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

constructor(public parameterService: ParameterService) { }
  sendChoosenSourceType(event: any){
   this.parameterService.changeSourceType(event);
  }

}