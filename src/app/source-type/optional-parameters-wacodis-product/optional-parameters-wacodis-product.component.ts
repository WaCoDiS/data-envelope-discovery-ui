import { Component, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-optional-parameters-wacodis-product',
  templateUrl: './optional-parameters-wacodis-product.component.html',
  styleUrls: ['./optional-parameters-wacodis-product.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class OptionalParametersWacodisProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectionChanged(evt){
    console.log(evt.value);
  }

}
