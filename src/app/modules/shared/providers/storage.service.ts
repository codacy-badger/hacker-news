import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor() {
    }

    setItem(token: string, value: string) {
        localStorage.setItem(token, value);
    }

    getItem(key: string): any {
        return localStorage.getItem(key);
    }

    removeItem(key: string) {
        localStorage.removeItem(key);
    }

}
