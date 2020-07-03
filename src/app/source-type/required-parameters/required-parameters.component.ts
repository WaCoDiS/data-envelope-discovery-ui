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
  public minLon: number;
  public minLat: number;
  public maxLon: number;
  public maxLat: number;

  constructor(public parameterService: ParameterService) { }

  ngOnInit() {
    this.subscription = this.parameterService.minLon$
      .subscribe(item => {
        this.minLon = Math.round(item * 100000) / 100000;
      });
    this.subscription = this.parameterService.minLat$
      .subscribe(item => {
        this.minLat = Math.round(item * 100000) / 100000;
      });
    this.subscription = this.parameterService.maxLon$
      .subscribe(item => {
        this.maxLon = Math.round(item * 100000) / 100000;
      });
    this.subscription = this.parameterService.maxLat$
      .subscribe(item => {
        this.maxLat = Math.round(item * 100000) / 100000;
      });
  }

  readDateRange(dateRange: Date[]) {
    // console.log(dateRange[1].toISOString());
    this.parameterService.setDateRange(dateRange);
  }

}
