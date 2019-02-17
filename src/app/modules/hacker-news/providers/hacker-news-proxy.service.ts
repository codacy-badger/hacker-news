import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class HackerNewsProxyService {

    api = `${environment.api}/hacker-news`;

    constructor(private http: HttpClient) { }

    getHackerNews(): Observable<HttpResponse<any>> {
        return this.http.get<any>(this.api, { observe: 'response' });
    }

}
