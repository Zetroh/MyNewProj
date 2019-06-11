import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { ProductOneComponent } from './product/product-one/product-one.component';
import { PromotionComponent } from './promotion/promotion/promotion.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ContactUsComponent } from './contact-us/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductOneComponent,
    PromotionComponent,
    HomeComponent,
    ContactUsComponent
  ],
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
    {
      path: 'promotion',
      component: PromotionComponent
    },
    {
      path: 'productOne',
      component: ProductOneComponent
    },
    {
      path: 'contact-us',
      component: ContactUsComponent
    }
    ]),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
