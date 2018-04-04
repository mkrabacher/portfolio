import { Injectable } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Injectable()
export class ScrollService {

    constructor(private _scrollToService: ScrollToService) { }

    public ScrollTo(target) {

        const config: ScrollToConfigOptions = {
            target: target,
            duration: 500,
            easing: 'easeOutCubic',
        };

        this._scrollToService.scrollTo(config);
    }
}
