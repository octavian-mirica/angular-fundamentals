import { Component, OnInit } from '@angular/core';

import { Passenger } from './../../models/passenger.interface';
import { PassengerDahsboardService } from '../../passenger-dashboard.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-passenger-viewer',
    styleUrls: ['passenger-viewer.component.scss'],
    template: `
        <div>
            <button (click)="goBack()">
                &lsaquo; Go back
            </button>
            <app-passenger-form
                [detail]="passenger"
                (update)="onUpdatePassenger($event)">
            </app-passenger-form>
        </div>
    `
})
export class PassengerViewerComponent implements OnInit {
    passenger: Passenger;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private passengerService: PassengerDahsboardService) {

    }

    ngOnInit() {
        this.route.params
            .pipe(
                switchMap((data: Passenger) => this.passengerService.getPassenger(data.id))
            )
            .subscribe((data: Passenger) => this.passenger = data);
    }

    onUpdatePassenger(event: Passenger) {
        this.passengerService
            .updatePassenger(this.passenger)
            .subscribe((data: Passenger) => this.passenger = Object.assign({}, this.passenger, event));
    }

    goBack() {
        this.router.navigate(['/passengers']);
    }
}
