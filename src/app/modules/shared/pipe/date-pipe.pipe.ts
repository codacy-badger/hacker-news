import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'customDatePipe'
})
export class CustomDatePipe extends DatePipe implements PipeTransform  {

    transform(value: Date): string {
        let result = '';

        let today = new Date(); 
        today = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        const yesterday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
        const valueDate = new Date(value);
        const date = new Date(valueDate.getFullYear(), valueDate.getMonth(), valueDate.getDate());

        if( date.getTime() === today.getTime() ){
            result = super.transform(value, 'shortTime');
        }
        else if( date.getTime() === yesterday.getTime() ){
            result = 'yesterday';
        }
        else {
            result = super.transform(value, 'MMM d');
        }

        return result;
    }

}
