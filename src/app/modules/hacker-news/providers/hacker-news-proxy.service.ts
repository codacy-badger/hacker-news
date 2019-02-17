import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StorageService } from '../../shared/providers/storage.service';

@Injectable({
    providedIn: 'root'
})
export class HackerNewsProxyService {

    api = `${environment.api}/hacker-news`;

    constructor(private http: HttpClient, private storageService: StorageService) { 
        this.api = `${this.api}/${storageService.getItem('hn-token')}`;
    }

    getHackerNews(): Observable<HttpResponse<any>> {
        return this.http.get<any>(this.api, { observe: 'response' });
    }

    delete(objectId: string): Observable<HttpResponse<any>> {
        return this.http.get<any>(`${this.api}/delete/${objectId}`, { observe: 'response' });
    }
}
