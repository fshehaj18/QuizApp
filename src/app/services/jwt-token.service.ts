import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class JwtTokenService {
  

  constructor(private httpClient: HttpClient, private router: Router) { }

  generateToken(request: any) {

    if(localStorage.getItem('token') || localStorage.getItem('role')){
      localStorage.removeItem('token');
      localStorage.removeItem('role');}
      return this.httpClient.post<any>("http://localhost:8080/login", request, {responseType:'text' as 'json'});
      
  }

  
  getToken(){
    return localStorage.getItem('token');
  }


  loggedIn(){
    return !!localStorage.getItem('token');
  }
}
