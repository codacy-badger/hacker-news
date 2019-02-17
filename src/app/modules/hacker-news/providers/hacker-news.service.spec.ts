import { TestBed } from '@angular/core/testing';
import { HackerNewsProxyService } from './hacker-news-proxy.service';
import { HackerNewsProxyServiceMock } from './hacker-news-proxy.service.mock.spec';
import { HackerNewsService } from './hacker-news.service';


describe('HackerNewsService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        providers: [
            HackerNewsService,
            { provide: HackerNewsProxyService, useClass: HackerNewsProxyServiceMock }
        ]
    }));

    it('should be created', () => {
        const service: HackerNewsService = TestBed.get(HackerNewsService);
        expect(service).toBeTruthy();
    });

    it('should get Hacker News', () => {
        const service: HackerNewsService = TestBed.get(HackerNewsService);
        service.getHackerNews().subscribe(
            hackerNews => {
                expect(hackerNews[0].id).toBeDefined();
                expect(hackerNews[0].objectID).toBeDefined();
                expect(hackerNews[0].title).toBeDefined();
                expect(hackerNews[0].author).toBeDefined();
                expect(hackerNews[0].url).toBeDefined();
                expect(hackerNews[0].createdAt).toBeDefined();
            }
        );
    });
});
