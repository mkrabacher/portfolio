import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    mail;
    errorMsg;
    constructor(public _httpService: HttpService) {
        this.mail = {
            fName: '',
            lName: '',
            email: '',
            project: '',
        };
    }

    ngOnInit() {
    }

    mailThroughService() {
        console.log('sending now');
        const observable = this._httpService.mail(this.mail);
        observable.subscribe(data => {
            console.log(data);
        });
    }

}
