import { HttpClientModule } from '@angular/common/http';
import { async, TestBed } from '@angular/core/testing';
import { HackerNewsProxyService } from './hacker-news-proxy.service';


describe('HackerNewsProxyService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientModule],
        providers: [HackerNewsProxyService]
    }));

    it('should be created', () => {
        const service: HackerNewsProxyService = TestBed.get(HackerNewsProxyService);
        expect(service).toBeTruthy();
    });

    it('should get Hacker News from server', async(() => {
        const proxy: HackerNewsProxyService = TestBed.get(HackerNewsProxyService);
        proxy.getHackerNews().subscribe(
            response => {
                expect(response.body).not.toBeNull();
            }
        );
    }));
});
