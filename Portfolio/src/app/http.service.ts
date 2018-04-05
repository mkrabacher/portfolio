import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

    constructor(private _http: HttpClient) { }

    mail(mail) {
        console.log('mailing in service');
        return this._http.post('/mailer', mail);
    }
}
