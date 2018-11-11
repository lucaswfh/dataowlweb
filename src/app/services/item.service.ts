import { Post } from './../model/post';
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {Item} from "../model/item";

@Injectable()
export class ItemService {

  // BASE_URL = 'http://localhost:3000/';
  BASE_URL = 'https://data-owl.herokuapp.com/';

  URL         = this.BASE_URL + 'post/';
  PRIVATE_URL = this.BASE_URL + 'private/post/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  getPostById(itemId: string): Observable<Post> {
    return this.http.get<Post>(
      this.URL + itemId,
      this.httpOptions
    );
  }

  getImageById(_imageId: string): Observable<any> {
    return this.http.get<any>(
      this.URL + 'image/' + _imageId,
      this.httpOptions
    );
  }

  getPlantTypes(): Observable<any> {
    return this.http.get<any>(
      this.BASE_URL + 'planttypes',
      this.httpOptions
    );
  }

  updateType(newType: string, post: Post, access_token: string): Observable<Post> {
    console.log(access_token);
    return this.http.put<Post>(
      this.URL + 'updatetype',
      {
        imageid: post._imageIds[0],
        newtype: newType
      },
      {
        headers: new HttpHeaders()
          .set('Authorization', `Bearer ${localStorage.getItem('access_token')}`)
      }
    );
  }

}
