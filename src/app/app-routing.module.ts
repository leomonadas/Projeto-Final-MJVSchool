import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './features/product-details/pages/product-details/product-details.component';
import { ContactComponent } from './features/contact/pages/contact/contact.component';
import { LoginComponent } from './features/login/pages/login/login.component';
import { AboutComponent } from './features/about/pages/about/about.component';
import { HomeComponent } from './features/home/pages/home/home.component';
import { PrivacyComponent } from './features/privacy/pages/privacy/privacy.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'sobre', component:  AboutComponent},
  { path: 'contato', component:  ContactComponent},
  { path: 'login', component:  LoginComponent},
  { path: 'privacidade', component: PrivacyComponent},
  { path: 'produto/:idproduto', component: ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }