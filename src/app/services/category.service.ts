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

  getCategoryAdmin(): Observable<any>
  {
    let category =  `http://localhost:8080/admin/categories`;

    return this.httpClient.get(`${category}`);
  }

  createCategory(categoryName: string)
  {
    return this.httpClient.post(`http://localhost:8080/admin/categories`, categoryName)
  }

  getCategoryByName(name: string)
  {
    return this.httpClient.get(`http://localhost:8080/admin/categories/${name}`)
  }
}
