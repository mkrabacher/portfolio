import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
    selector: 'app-splash',
    templateUrl: './splash.component.html',
    styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {
    nouns;
    currentNoun;
    display;
    bool;
    context;
    style;

    constructor(public _scrollService: ScrollService) {
        // typer vars
        // tslint:disable-next-line:max-line-length
        this.nouns = ['I am a Full-Stack Web Developer', 'I am a Javascript Enthusiast', 'I Make Scalable Websites', 'I am an Adventurer', 'I Design and Develop Web Apps'];
        this.display = '';
        this.currentNoun = 0;
        this.bool = false;
        this.style = 'white';

        // ball of string vars
    }

    ngOnInit() {
        setInterval(() => {
            this.typeLetter();
        }, 50);
        if (document.getElementById('body').getAttribute('style') === 'background-color: black') {
            document.getElementById('typer').setAttribute('style', 'color: white');
            document.getElementById('about-link').setAttribute('style', 'color: white');
            document.getElementById('work-link').setAttribute('style', 'color: white');
            document.getElementById('contact-link').setAttribute('style', 'color: white');
        }
    }

    typeLetter() {
        if ( this.display.length < this.nouns[this.currentNoun].length) {
            this.display += this.nouns[this.currentNoun][this.display.length];
        } else if (!this.bool) {
            this.bool = true;
            setTimeout(() => {
                if (this.currentNoun >= this.nouns.length - 1) {
                    this.currentNoun = 0;
                } else {
                    this.currentNoun++;
                }
                this.bool = false;
                this.display = '';
            }, 2000);
        }
    }

}
