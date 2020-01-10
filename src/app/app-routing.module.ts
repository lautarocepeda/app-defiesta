import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule),
    data: {
      preload: true
    }
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    data: {
      preload: true
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
