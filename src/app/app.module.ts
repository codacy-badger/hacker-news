import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HackerNewsModule } from './modules/hacker-news/hacker-news.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HackerNewsModule    
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
