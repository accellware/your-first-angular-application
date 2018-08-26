import { Entry } from './entry.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class EntryService
{
    constructor(private http: Http)
    {

    }

    getEntries() : Promise<Entry[]>
    {
        return this.http.get('/api/entries')
            .toPromise()
            .then(response => response.json().data as Entry[], error => {throw new Error('Cannot retrieve information.')});
    }

    addComment(entryId: number, comment: {name: string; comment: string;})
    {
        return this.http
            .post(`/app/entries/${entryId}/comments`, comment)
            .toPromise();
    }
}