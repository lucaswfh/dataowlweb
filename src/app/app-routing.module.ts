import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {WelcomeComponent} from "./welcome/welcome.component";

const routes: Routes = [
  { path: 'landing',      component: LandingComponent },
  { path: 'welcome',      component: WelcomeComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full'}
]

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})

export class AppRoutingModule { }