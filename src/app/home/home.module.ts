import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { AuthGuard } from '../guards/auth.guard';

import { UserDataResolver } from '../resolvers/user-data.resolver';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: 'home',
                component: HomePage,
                canActivate: [AuthGuard],
                resolve: {
                    userData: UserDataResolver
                }
                // there alls router with user authenticated
            }
        ])
    ],
    declarations: [HomePage]
})
export class HomePageModule { }
