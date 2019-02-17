import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShowOnFocusDirective } from './directives/show-on-focus.directive';
import { CustomDatePipe } from './pipe/date-pipe.pipe';

@NgModule({
    declarations: [ShowOnFocusDirective, CustomDatePipe],
    imports: [
        CommonModule
    ],
    exports: [
        ShowOnFocusDirective,
        CustomDatePipe
    ]
})
export class SharedModule { }
