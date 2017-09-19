
import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Product} from '../products/product.interface';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/shareReplay';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
@Injectable()
export class ProductService {
    private baseUrl: string = "http://storerestservice.azurewebsites.net/api/products/";
    private products$ : Observable<Product[]>;
    constructor(private http: HttpClient) { 
        // ca suffit pour appeller HttpClient
    }
    getProducts (): Observable<Product[]>
    {
        if (!this.products$)
        {
              //cache for faster speed
              this.products$=this.http.get<Product[]>(this.baseUrl)
          
                       .shareReplay()
                       .catch(this.handleError) ;
        }
        return this.products$;
    }
    clearCache () {
        this.products$ = null;
    }
    private handleError(errorResponse: HttpErrorResponse) {
        let errorMsg: string;
        if (errorResponse.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMsg = 'An error occurred:' + errorResponse.error.message;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMsg = `Backend returned code ${errorResponse.status}, body was: ${errorResponse.error}`;
        }
        console.error(errorMsg);
        return Observable.throw(errorMsg);
    }
}