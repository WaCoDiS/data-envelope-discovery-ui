import { Component, OnInit } from '@angular/core';
import { ParameterServiceService } from '../../parameter-service.service';

@Component({
  selector: 'app-required-parameters',
  templateUrl: './required-parameters.component.html',
  styleUrls: ['./required-parameters.component.scss']
})
export class RequiredParametersComponent implements OnInit {

  coords: number[];

  constructor(public parameterService: ParameterServiceService) { }

  ngOnInit() {
  }


  getCoordinates(): void {
    this.coords = this.parameterService.getCoordinates();
  }
  /*
  getCoordinates(): void {
    this.ParameterService.getCoordinates()
      .subscribe(heroes => this.coords = heroes);
  }
  */

}
