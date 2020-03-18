import { Component, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-optional-parameters-gdi-de',
  templateUrl: './optional-parameters-gdi-de.component.html',
  styleUrls: ['./optional-parameters-gdi-de.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class OptionalParametersGdiDeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectionChanged(evt){
    console.log(evt.value);
  }

}
