import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HackerNewsComponent } from './components/hacker-news/hacker-news.component';

@NgModule({
    declarations: [HackerNewsComponent],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [
        HackerNewsComponent
    ]
})
export class HackerNewsModule { }
