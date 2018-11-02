import { Passenger } from './../../models/passenger.interface';
import { Component, OnInit } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';
import { PassengerDahsboardService } from '../../passenger-dashboard.service';

@Component({
    selector: 'app-passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template: `
    <div>
        <app-passenger-count
            [items]="passengers">
        </app-passenger-count>

        <div *ngFor="let passenger of passengers">
            {{ passenger.fullname }}
        </div>

        <app-passenger-detail
            *ngFor="let passenger of passengers"
            [detail]="passenger"
            (edit)="handleEdit($event)"
            (remove)="handleRemove($event)">
        </app-passenger-detail>
    </div>
    `
})
export class PassengerDashboardComponent implements OnInit {
    passengers: Passenger[];

    constructor(private passengerService: PassengerDahsboardService) {

    }

    ngOnInit(): void {
        this.passengerService
            .getPassengers()
            .subscribe((data: Passenger[]) => {
                this.passengers = data;
            });
    }

    handleEdit(event: Passenger) {
        this.passengers = this.passengers.map(passenger => {
            if (passenger.id === event.id) {
                passenger = Object.assign({}, passenger, event);
            }

            return passenger;
        });
    }

    handleRemove(event: Passenger) {
        this.passengers = this.passengers.filter(passenger => passenger.id !== event.id);
    }
}
