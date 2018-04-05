import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { ScrollService } from './scroll.service';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';


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
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
      ScrollToService,
      ScrollService,
      HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
