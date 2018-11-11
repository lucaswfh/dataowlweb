import { AuthService } from './auth/auth.service';
import { Component } from '@angular/core';
import { DomSanitizer } from '../../node_modules/@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'DataOwlWeb';

  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }

}
