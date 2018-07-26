import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appApplystyle]'
})
export class ApplystyleDirective {

  constructor(private ef: ElementRef) { 
    ef.nativeElement.style.color = "red";
  }

}
