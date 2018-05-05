import { Component, OnInit } from '@angular/core';
import { ScrollService } from './scroll.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    aboutActive;
    portfolioActive;
    contactActive;
    constructor(public _scrollService: ScrollService) {
    }

    ngOnInit() {
    }
}
