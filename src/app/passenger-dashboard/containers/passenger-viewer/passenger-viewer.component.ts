import { Component, OnInit } from '@angular/core';

import { Passenger } from './../../models/passenger.interface';
import { PassengerDahsboardService } from '../../passenger-dashboard.service';

@Component({
    selector: 'app-passenger-viewer',
    styleUrls: ['passenger-viewer.component.scss'],
    template: `
        <div>
            <app-passenger-form
                [detail]="passenger"
                (update)="onUpdatePassenger($event)">
            </app-passenger-form>
        </div>
    `
})
export class PassengerViewerComponent implements OnInit {
    passenger: Passenger;

    constructor(private passengerService: PassengerDahsboardService) {

    }

    ngOnInit() {
        this.passengerService
            .getPassenger(1)
            .subscribe((data: Passenger) => this.passenger = data);
    }

    onUpdatePassenger(event: Passenger) {
        this.passengerService
            .updatePassenger(this.passenger)
            .subscribe((data: Passenger) => this.passenger = Object.assign({}, this.passenger, event));
    }
}
