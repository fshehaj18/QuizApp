import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  getCategory(): Observable<any>
  {
    let category =  `http://localhost:8080/user/categories`;

    return this.httpClient.get(`${category}`);
  }
}
