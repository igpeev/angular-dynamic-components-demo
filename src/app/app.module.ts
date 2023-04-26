import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppCardComponent } from './app-card/app-card.component';
import { DescriptionComponent } from './description/description.component';


@NgModule({
    declarations: [
        AppComponent,
        AppCardComponent,
        DescriptionComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
