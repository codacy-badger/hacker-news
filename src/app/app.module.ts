import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HackerNewsModule } from './modules/hacker-news/hacker-news.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HackerNewsModule,
        BrowserAnimationsModule     
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
