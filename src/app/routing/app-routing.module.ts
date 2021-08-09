import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'heroes',
    loadChildren: () => import('../component/heroes/heroes.module').then(m => m.HeroesModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('../component/dashboard/dashboard.module').then(m => m.dashboardModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('../component/hero-detail/hero-detail.module').then(m => m.HeroDetailModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }