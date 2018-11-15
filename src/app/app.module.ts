import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UncheckedComponent} from './unchecked/unchecked.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';
import { ItemComponent } from './item/item.component';
import {ItemService} from "./services/item.service";
import {UserService} from "./services/user.service";
import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './callback/callback.component';
import { CheckedComponent } from './checked/checked.component';


@NgModule({
  declarations: [
    AppComponent,
    UncheckedComponent,
    NavbarComponent,
    WelcomeComponent,
    FooterComponent,
    ItemComponent,
    CallbackComponent,
    CheckedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ItemService, UserService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
