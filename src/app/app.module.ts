import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { EntyListComponent, EntryComponent, EntryService, EntryCommentFormComponent } from './entries';
import { InMemoryEntryService } from './backend';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryEntryService),
        FormsModule
    ],
    providers: [
        EntryService
    ],
    declarations: [ 
        AppComponent,
        EntryComponent, 
        EntyListComponent,
        EntryCommentFormComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule
{

}