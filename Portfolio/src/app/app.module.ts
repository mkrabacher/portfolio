import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { ScrollService } from './scroll.service';


@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    WorkComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
      ScrollToService,
      ScrollService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
