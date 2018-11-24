import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UncheckedComponent} from './unchecked/unchecked.component';
import {WelcomeComponent} from "./welcome/welcome.component";
import {ItemComponent} from "./item/item.component";
import { CallbackComponent } from './callback/callback.component';
import {AdminComponent} from "./admin/admin.component";
import {MapPageComponent} from "./map-page/map-page.component";

const routes: Routes = [
  { path: 'unchecked',      component: UncheckedComponent },
  { path: 'checked',      component: UncheckedComponent },
  { path: 'callback',      component: CallbackComponent },
  { path: 'welcome',      component: WelcomeComponent },
  { path: 'admin',        component: AdminComponent},
  { path: 'item',         component: ItemComponent },
  { path: 'item/:itemId',         component: ItemComponent },
  { path: 'map-page',     component: MapPageComponent},
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
