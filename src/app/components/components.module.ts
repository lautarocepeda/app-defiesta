import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { SocialloginComponent } from './sociallogin/sociallogin.component';



@NgModule({
  declarations: [LogoComponent, SocialloginComponent],
  exports: [LogoComponent, SocialloginComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class ComponentsModule { }
