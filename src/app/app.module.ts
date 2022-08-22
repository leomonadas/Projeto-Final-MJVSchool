import { ContactModule } from './features/contact/contact.module';
import { AboutModule } from './features/about/about.module';
import { LoginModule } from './features/login/login.module';
import { HomeModule } from './features/home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ProductDetailsModule } from './features/product-details/product-details.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,   
    AppRoutingModule,
    HomeModule,
    LoginModule,
    AboutModule,
    ContactModule,
    ProductDetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

