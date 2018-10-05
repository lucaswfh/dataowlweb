import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  URL = 'https://data-owl.herokuapp.com';

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.URL + '/allimages');
  }
}
