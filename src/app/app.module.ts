import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './components/info/about/about.component';
import { PrivacyComponent } from './components/info/privacy/privacy.component';
import { TermsComponent } from './components/info/terms/terms.component';
import { FaqsComponent } from './components/info/faqs/faqs.component';
import { HelpComponent } from './components/info/help/help.component';
import { DeliveryComponent } from './components/info/delivery/delivery.component';
import { RefundsComponent } from './components/info/refunds/refunds.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    PrivacyComponent,
    TermsComponent,
    FaqsComponent,
    HelpComponent,
    DeliveryComponent,
    RefundsComponent,
    CartComponent,
    ProductInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
