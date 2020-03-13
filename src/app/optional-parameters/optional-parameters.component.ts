import { Component, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-optional-parameters',
  templateUrl: './optional-parameters.component.html',
  styleUrls: ['./optional-parameters.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class OptionalParametersComponent implements OnInit {

  text: string;

  constructor() { }

  ngOnInit() {
  }

  changeAction(obj) {
    this.text = obj;
  }
  }

  changeAction(obj) {
    this.text = obj.valueOf();
  }
}
