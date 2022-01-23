import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptorInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
        const cloned = request.clone({
          headers: request.headers.set("Authorization", "Bearer " + token),
          
        });

        return next.handle(cloned).pipe(
          catchError((error: HttpErrorResponse) => {
              let errorMsg = '';
              if (error.error instanceof ErrorEvent) {
                  console.log('This is client side error');
                  errorMsg = `Error: ${error.error.message}`;
              } else {
                  console.log('This is server side error');
                  errorMsg = `Error Code: ${error.status},  Message: ${error.error.message}`;
              }
              if(error.error.message == undefined ){
                localStorage.removeItem('token')
                window.alert("Wrong credentials")
                this.router.navigate(['']);}
              else
              window.alert(error.error.message)
              return throwError(errorMsg);
          })
      );
    }
    
}
