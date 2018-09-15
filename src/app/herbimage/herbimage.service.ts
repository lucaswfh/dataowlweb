import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class HerbimageService {

    constructor(private http: HttpClient) { }

    getImages(): Observable<any[]> {
        return this.http.get<any[]>(
            "https://pure-wildwood-74137.herokuapp.com/allimages"
        )
    }

}
