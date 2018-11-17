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

  addAdmin(access_token: string, id_token: string, target_email: string): Observable<any> {
    return this.http.put<any>(
      'http://localhost:3000/private/cradmin',
      {
        'access_token': access_token,
        'target_email': target_email,
        'id_token': id_token
      },
      {
        headers: new HttpHeaders()
          .set('Authorization', access_token)
      }
    );
  }

  getUserByEmail(email: string) :Observable<User> {
    return this.http.get<User>(
      this.URL + '/' + email,
      this.httpOptions
    )
  }

  getAllUsers() :Observable<any> {
    return this.http.get<any>(
        this.URL + '/allusers',
      this.httpOptions
    )
  }

  updateType
}
