//this class will handle state transitions between different modules(RouterModule helps us manage states and reflect them in URL changes
//tell the router which view to display when different URL's are entered
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HeroesComponent} from './heroes/heroes.component';
import {RouterModule,Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';

const routes: Routes = [
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'heroes',component:HeroesComponent},
  {path:'dashboard',component:DashboardComponent},
  //The colon (:) in the path indicates that :id is a placeholder for a specific hero id
  {path:'detail/:id',component:HeroDetailComponent,}
];
@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
