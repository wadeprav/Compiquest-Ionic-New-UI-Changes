
import { Directive, ElementRef, Input, Component } from '@angular/core';

@Directive({
  selector: '[appMathjax]'
})
export class MathjaxDirective {
  @Input('appMathjax') MathJaxInput: string;
  constructor(private el: ElementRef) {
  }
  ngAfterViewInit() {
    this.el.nativeElement.innerHTML = this.MathJaxInput;
    eval('MathJax.Hub.Queue(["Typeset",MathJax.Hub, this.el.nativeElement])');
    eval('MathJax.Hub.Queue(["Typeset",MathJax.Hub, this.el.nativeElement])');
  }
}
