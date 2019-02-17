import { Component, OnInit } from '@angular/core';
import { StorageService } from './modules/shared/providers/storage.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(private storageService: StorageService){
    }

    ngOnInit(){
        const exist = this.storageService.getItem('hn-token');
        if( !exist ){
            const token = (new Date().getUTCMilliseconds().toString() + new Date().getTime().toString()).toString();
            this.storageService.setItem('hn-token', token);            
       }
    }
    
}
