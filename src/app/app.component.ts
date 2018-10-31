import { Component } from '@angular/core';

interface Passenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
  checkedInDate: number | null;
}

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      <h3>Airline Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span class="status"
          [ngClass]="{ 'checked-in': passenger.checkedIn }"></span>
          {{ i }}: {{ passenger.fullname }}
          <p>{{ passenger | json }}</p>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  passengers: Passenger[] = [{
    id: 1,
    fullname: 'Stephen',
    checkedIn: true,
    checkedInDate: 1490742000000
  }, {
    id: 2,
    fullname: 'Rose',
    checkedIn: false,
    checkedInDate: null
  }, {
    id: 3,
    fullname: 'James',
    checkedIn: true,
    checkedInDate: 1491602000000
  }, {
    id: 4,
    fullname: 'Louise',
    checkedIn: true,
    checkedInDate: 1488742000000
  }, {
    id: 5,
    fullname: 'Tina',
    checkedIn: false,
    checkedInDate: null
  }];
}
