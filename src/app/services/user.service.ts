import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {Item} from "../model/item";
import {User} from "../model/user";

@Injectable()
export class UserService {

  URL = 'https://data-owl.herokuapp.com/user';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  }

  constructor(private http: HttpClient) { }

  getUserByEmail(email: string) :Observable<User> {
    return this.http.get<User>(
      this.URL + '/' + email,
      this.httpOptions
    )
  }
}
