import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BaseService {

    constructor(public http: HttpClient) {
    }

    /** GET by id. Will 404 if id not found */
    basicGet(): Observable<any[]> {
        return this.http.get<any[]>(`${this.service()}/identity`).pipe(
            tap(),
            catchError(this.handleError<any[]>(`base service get`))
        );
    }

     /** GET by id. Will 404 if id not found */
     basicGetUnlocked(): Observable<any[]> {
        return this.http.get<any[]>(`${this.service()}/values`).pipe(
            tap(),
            catchError(this.handleError<any[]>(`base service get`))
        );
    }

    protected log(message: string) {
        message = message;
    }
    /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
    protected handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    service(): string {
        // A regra aqui é: se terminar com / a rotina retira essa barra
        var url = environment.api.endsWith("/") ?
            environment.api.substring(0, environment.api.length - 1) : environment.api;

        return url;
    }
}