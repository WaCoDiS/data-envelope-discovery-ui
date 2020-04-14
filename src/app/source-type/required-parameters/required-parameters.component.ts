import { Component, OnInit } from '@angular/core';
import { ParameterService } from '../../services/parameter-service/parameter-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-required-parameters',
  templateUrl: './required-parameters.component.html',
  styleUrls: ['./required-parameters.component.scss']
})
export class RequiredParametersComponent implements OnInit {

  subscription: Subscription;
  coords: number[];
  public minLon: number;
  public minLat: number;
  public maxLon: number;
  public maxLat: number;


  constructor(public parameterService: ParameterService) { }

  ngOnInit() {
    this.subscription = this.parameterService.minLon$
      .subscribe(item => {
        this.minLon = item
      })
    this.subscription = this.parameterService.minLat$
      .subscribe(item => {
        this.minLat = item
      })
    this.subscription = this.parameterService.maxLon$
      .subscribe(item => {
        this.maxLon = item
      })
    this.subscription = this.parameterService.maxLat$
      .subscribe(item => {
        this.maxLat = item
      })
  }
  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }

}
