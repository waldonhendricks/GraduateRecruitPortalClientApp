import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-error-interceptor',
  templateUrl: './error-interceptor.component.html',
  styleUrls: ['./error-interceptor.component.css']
})

@Injectable()
export class ErrorInterceptorComponent implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
    {
        throw new Error('Method not implemented.');
    }

    // constructor(private authenticationService: AuthenticationService) {}

    // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //     return next.handle(request).pipe(catchError(err => {
    //         if (err.status === 401) {
    //             // auto logout if 401 response returned from api
    //             this.authenticationService.logout();
    //             location.reload();
    //         }
            
    //         const error = err.error.message || err.statusText;
    //         return throwError(error);
    //     }))
    // }
}

