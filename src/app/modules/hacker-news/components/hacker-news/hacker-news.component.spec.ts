import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HackerNewsProxyService } from '../../providers/hacker-news-proxy.service';
import { HackerNewsProxyServiceMock } from '../../providers/hacker-news-proxy.service.mock.spec';
import { HackerNewsService } from '../../providers/hacker-news.service';
import { HackerNewsComponent } from './hacker-news.component';


describe('HackerNewsComponent', () => {
    let component: HackerNewsComponent;
    let fixture: ComponentFixture<HackerNewsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HackerNewsComponent],
            providers: [
                HackerNewsService,
                {provide: HackerNewsProxyService, useClass: HackerNewsProxyServiceMock}
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HackerNewsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    afterEach(() => {
        component.ngOnDestroy();
    });

    it('should set hacker news', () => {
        component.ngOnInit();
        expect(component.$hackerNews[0]).toBeDefined();

    });
});
