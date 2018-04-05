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
    returnMsg;
    returnErrMsg;
    constructor(public _httpService: HttpService) {
        this.mail = {
            fName: '',
            lName: '',
            email: '',
            projectIdea: '',
        };
    }

    ngOnInit() {
    }

    mailThroughService() {
        console.log('sending now');
        const observable = this._httpService.mail(this.mail);
        observable.subscribe(data => {
            console.log(data);
            if (data['yo'] === 'error') {
                this.returnErrMsg = 'We\'re sorry but there seems to have been an error sending your message please try again.';
            } else {
                this.returnMsg = 'Success! Thanks for reaching out. I\'ll be in touch soon.';
            }
        });
    }

}
