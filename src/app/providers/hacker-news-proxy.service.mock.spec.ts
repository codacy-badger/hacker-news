import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HackerNewsProxyServiceMock {

    LIST_HACKER_NEWS_MOCK = [{
        '_id': '5c6865d75d459f228f247371',
        'objectID': '19180226',
        'title': 'How the vegan food trend made a star of the stinking jackfruit',
        'author': 'hombre_fatal',
        'url': 'https://www.theguardian.com/world/2019/feb/16/jackfruit-stinking-vegan-food-trend-star',
        'createdAt': '2019-02-16T18:50:30.000Z'
    },
    {
        '_id': '5c6865d65d459f228f247370',
        'objectID': '19180463',
        'title': 'Show HN: Easily Manage SSH and FTP Connection with Node.js',
        'author': 'sanketbajoria',
        'url': 'https://www.npmjs.com/package/ssh2-promise',
        'createdAt': '2019-02-16T19:28:01.000Z'
    }];

    constructor() { }

    getHackerNews(): Observable<HttpResponse<any>> {
        const httpResponse = new HttpResponse<any>({
            body: this.LIST_HACKER_NEWS_MOCK
        });
        return of(httpResponse);
    }

}
