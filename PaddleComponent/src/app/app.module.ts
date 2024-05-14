import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PaddleInlineCheckoutComponent } from '@components/paddle-inline-checkout/paddle-inline-checkout.component';
import { PaddleModule } from '@paddle/paddle.module';

@NgModule({
  declarations: [AppComponent, PaddleInlineCheckoutComponent],
  imports: [BrowserModule, AppRoutingModule, PaddleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
