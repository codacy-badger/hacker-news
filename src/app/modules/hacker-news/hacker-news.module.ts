import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';
import { HackerNewsComponent } from './components/hacker-news/hacker-news.component';

@NgModule({
    declarations: [HackerNewsComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatTableModule,
        SharedModule,
        MatToolbarModule
    ],
    exports: [
        HackerNewsComponent
    ]
})
export class HackerNewsModule { }
