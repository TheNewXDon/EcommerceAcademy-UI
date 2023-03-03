import { RefundsComponent } from './components/info/refunds/refunds.component';
import { DeliveryComponent } from './components/info/delivery/delivery.component';
import { HelpComponent } from './components/info/help/help.component';
import { FaqsComponent } from './components/info/faqs/faqs.component';
import { TermsComponent } from './components/info/terms/terms.component';
import { PrivacyComponent } from './components/info/privacy/privacy.component';
import { AboutComponent } from './components/info/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:"", component: HomeComponent },
  { path:"about", component: AboutComponent},
  { path:"privacy", component: PrivacyComponent},
  { path:"terms", component: TermsComponent},
  { path:"faqs", component: FaqsComponent},
  { path:"help", component: HelpComponent},
  { path:"delivery", component: DeliveryComponent},
  { path:"refunds", component: RefundsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
