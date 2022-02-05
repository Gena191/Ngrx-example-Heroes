import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeroesSmartComponent} from "./heroes/heroes-smart.component";
import {DashboardSmartComponent} from "./dashboard/dashboard-smart.component";
import {HeroesSearchSmartComponent} from "./hero-search/heroes-search-smart.component";
import {NotFound404Component} from "./not-found404/not-found404.component";
const routes: Routes = [
  { path: 'heroes', component: HeroesSmartComponent },
  { path: 'dashboard', component: DashboardSmartComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'search', component: HeroesSearchSmartComponent },
   {path: '404', component: NotFound404Component},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
