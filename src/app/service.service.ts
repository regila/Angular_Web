import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _http: HttpClient) { }

  authors(){
    // Getting Author Names.
    return this._http.get('https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=lp9Lj722PA8OI8SRoOjVfkEytQmNkpou')
  }

  displayBooks(){
    //Getting Books data.
    return this._http.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=lp9Lj722PA8OI8SRoOjVfkEytQmNkpou')
  }
}
