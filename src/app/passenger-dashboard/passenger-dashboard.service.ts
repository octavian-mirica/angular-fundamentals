import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';

import { Passenger } from './models/passenger.interface';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const PASSENGER_API: string = `${environment.apiUrl}/passengers`;

@Injectable()
export class PassengerDahsboardService {
    constructor(private http: Http) {
    }

    getPassengers(): Observable<Passenger[]> {
        return this.http
            .get(PASSENGER_API)
            .pipe(
                map((response: Response) => response.json()),
                catchError((error: any) => Observable.throw(error.json()))
            );
    }

    getPassenger(id: number): Observable<Passenger> {
        return this.http
            .get(`${PASSENGER_API}/${id}`)
            .pipe(
                map((response: Response) => response.json()),
                catchError((error: any) => Observable.throw(error.json()))
            );
    }

    updatePassenger(passenger: Passenger): Observable<Passenger> {
        const headers = new Headers({
            'Content-Type': 'application/json'
        });

        const options = new RequestOptions({
            headers: headers
        });

        return this.http
            .put(`${PASSENGER_API}/${passenger.id}`, passenger, options)
            .pipe(
                map((response: Response) => response.json()),
                catchError((error: any) => Observable.throw(error.json()))
            );
    }

    removePassenger(passenger: Passenger): Observable<Passenger> {
        return this.http
            .delete(`${PASSENGER_API}/${passenger.id}`)
            .pipe(
                map((response: Response) => response.json()),
                catchError((error: any) => Observable.throw(error.json()))
            );
    }
}
