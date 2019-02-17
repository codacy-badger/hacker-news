import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HackerNew } from '../../models/hacker-new';
import { HackerNewsService } from '../../providers/hacker-news.service';

@Component({
    selector: 'app-hacker-news',
    templateUrl: './hacker-news.component.html',
    styleUrls: ['./hacker-news.component.css']
})
export class HackerNewsComponent implements OnInit, OnDestroy {

    $hackerNews: HackerNew[];
    subs: Subscription;
    displayedColumns: string[] = ['title', 'author', 'date', 'delete'];

    constructor(private service: HackerNewsService) { }

    ngOnInit() {
        this.getHackerNews();
    }

    getHackerNews(){
        this.subs = this.service.getHackerNews().subscribe(
            hackerNews => {
                this.$hackerNews = hackerNews;
            }
        );
    }

    ngOnDestroy(){
        this.subs.unsubscribe();
    }

    selectRow( hackerNews : HackerNew ){
        window.open(hackerNews.url, '_blank');
    }

    delete($event: any, hackerNews : HackerNew ){
        $event.stopPropagation();
        this.service.delete(hackerNews.objectID).subscribe(
            result => {
                this.getHackerNews();
            }
        );
    }
}
