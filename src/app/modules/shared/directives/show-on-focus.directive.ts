import { Directive, HostListener, Input } from '@angular/core';
import { HackerNew } from '../../hacker-news/models/hacker-new';

@Directive({
    selector: '[appShowOnFocus]'
})
export class ShowOnFocusDirective {

    @Input() appShowOnFocus: HackerNew;

    @HostListener('mouseenter') onMouseEnter(){
        this.appShowOnFocus.show = true;
    }

    @HostListener('mouseleave') onMouseLeave(){
        this.appShowOnFocus.show = false;
    }

    constructor(){}

}
