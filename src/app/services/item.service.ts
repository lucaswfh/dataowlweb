import { Post } from './../model/post';
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/index";

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

  addNewType(access_token: string, type:string): Observable<any> {
    return this.http.post<any>(
      this.BASE_URL + 'private/crplant',
      { 'plant': type, 'access_token': access_token },
      {
        headers: new HttpHeaders()
          .set('Authorization', access_token)
      }
    );
  }

  deleteType(access_token: string, type:string): Observable<any> {
    return this.http.delete<any>(
      this.BASE_URL + 'private/plant/' + type,
      {
        headers: new HttpHeaders()
          .set('Authorization', access_token)
      }
    );
  }

  setChecked(post: Post, access_token: string): Observable<Post> {
    return this.http.put<Post>(
      this.PRIVATE_URL + 'setchecked',
      { 'imageid': post._imageIds[0] },
      {
        headers: new HttpHeaders()
          .set('Authorization', access_token)
      }
    );
  }

  deletePost(post: Post, access_token: string): Observable<string> {
    console.log(post._imageIds[0]);
    return this.http.delete<string>(
      this.PRIVATE_URL + post._imageIds[0],
      {
        headers: new HttpHeaders()
          .set('Authorization', access_token)
      }
    );
  }

  updateType(newType: string, email: string, post: Post, access_token: string): Observable<Post> {
    return this.http.put<Post>(
      this.PRIVATE_URL + 'updatetype',
      {
        imageid: post._imageIds[0],
        newtype: newType,
        email: email
      },
      {
        headers: new HttpHeaders()
          .set('Authorization', access_token)
      }
    );
  }

}
