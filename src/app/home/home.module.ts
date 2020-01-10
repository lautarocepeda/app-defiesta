import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { AuthGuard } from '../guards/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: 'home',
        component: HomePage,
        canActivate: [AuthGuard]
          // there alls router with user autenticated
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
