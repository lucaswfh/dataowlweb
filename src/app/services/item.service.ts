import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {Item} from "../model/item";

@Injectable()
export class ItemService {

  URL = 'https://data-owl.herokuapp.com/post';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  }

  constructor(private http: HttpClient) { }

  getItemById(itemId: string) :Observable<Item> {
    return this.http.get<Item>(
      this.URL + '/' + itemId,
      this.httpOptions
    )
  }
}
