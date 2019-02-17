import { Directive, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appShowOnFocus]'
})
export class ShowOnFocusDirective {

    @Input() appShowOnFocus: boolean;

    @HostListener('mouseenter') onMouseEnter(){
        this.appShowOnFocus = true;
        console.log('onMouseEnter ', this.appShowOnFocus);
       
    }

    @HostListener('mouseleave') onMouseLeave(){
        this.appShowOnFocus = false;
        console.log('onMouseLeave ', this.appShowOnFocus);
        
    }

    constructor() { 
        console.log('ShowOnFocusDirective ', this.appShowOnFocus);
    }

}
