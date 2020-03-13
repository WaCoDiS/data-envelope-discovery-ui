import { Component, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-optional-parameters',
  templateUrl: './optional-parameters.component.html',
  styleUrls: ['./optional-parameters.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class OptionalParametersComponent implements OnInit {

  public dataModel: any;

  text: string;

  constructor() { }

  ngOnInit() {
    this.dataModel = ["Sentinel-1", "Sentinel-2"];
  }

  changeAction(obj) {
    this.text = obj;
  }

  selectionChanged(evt){
    console.log(evt.value);
  }
}
