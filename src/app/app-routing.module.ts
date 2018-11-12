import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {WelcomeComponent} from "./welcome/welcome.component";
import {ItemComponent} from "./item/item.component";
import { CallbackComponent } from './callback/callback.component';
import { CheckedComponent } from './checked/checked.component';

const routes: Routes = [
  { path: 'landing',      component: LandingComponent },
  { path: 'checked',      component: LandingComponent },
  { path: 'callback',      component: CallbackComponent },
  { path: 'welcome',      component: WelcomeComponent },
  { path: 'item',         component: ItemComponent },
  { path: 'item/:itemId',         component: ItemComponent },
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
