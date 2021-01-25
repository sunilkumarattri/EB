import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppPublicComponent } from './Public/Index';
import { AppPublicHeaderComponent } from './Public/PublicHeader';
import { AppPublicFooterComponent } from './Public/PublicFooter';


@NgModule({
  declarations: [
    AppComponent,
    AppPublicComponent,
    AppPublicHeaderComponent,
    AppPublicFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppPublicComponent]
})
export class AppModule { }
