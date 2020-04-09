import {Directive, ElementRef, Renderer, HostListener} from '@angular/core';

@Directive({
  selector: '[appBboxValue]',
})
export class BboxValueDirective {

  constructor(private el: ElementRef) {
    // el.nativeElement.style.color = 'red';
    //renderer.setElementStyle(el.nativeElement, 'color', 'red');
    //el.nativeElement.value="42534";
  }



  public changeValue(){
    this.el.nativeElement.value="42534";
  }
}
