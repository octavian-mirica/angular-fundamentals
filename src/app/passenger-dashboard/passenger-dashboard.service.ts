import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Passenger } from './models/passenger.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const PASSENGER_API: string = '/api/passengers';

@Injectable()
export class PassengerDahsboardService {
    constructor(private http: Http) {
    }

    getPassengers(): Observable<Passenger[]> {
        return this.http
            .get(PASSENGER_API)
            .map((response: Response) => response.json());
    }
}
