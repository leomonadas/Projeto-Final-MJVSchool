import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacyComponent } from './pages/privacy/privacy.component';



@NgModule({
  declarations: [
    PrivacyComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PrivacyComponent
  ]
})
export class PrivacyModule { }
