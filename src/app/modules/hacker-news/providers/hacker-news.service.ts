import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HackerNew } from '../models/hacker-new';
import { HackerNewsProxyService } from './hacker-news-proxy.service';

@Injectable({
    providedIn: 'root'
})
export class HackerNewsService {

    constructor(private proxy: HackerNewsProxyService) { }

    getHackerNews(): Observable<HackerNew[]>{
        return this.proxy.getHackerNews().pipe(
            map(
                response => {
                    let hackerNewsList: HackerNew[] = [];
                    const data = response.body;
                    data.forEach((d: any) => {
                        const hackerNews: HackerNew = {
                            id: d._id,
                            objectID: d.objectID,
                            title: d.title,
                            author: d.author,
                            url: d.url,
                            createdAt: d.createdAt,
                            show: false
                        };
                        hackerNewsList = [...hackerNewsList, hackerNews];
                    });

                    return hackerNewsList;
                }
            )
        );
    }
}
