import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParameterService {

  coords: number[] = [];

  // Observable source
  private minLonSource = new Subject<number>();
  // Observable stream
  minLon$ = this.minLonSource.asObservable();

  // service command
  changeMinLon(coord: number) {
    this.minLonSource.next(coord);
  }

  constructor() { }

  add(coords: number) {
    this.coords.push(coords);
  }

  getCoordinates(): number[] {
    return this.coords;
  }

  clear() {
    this.coords = [];
  }

}
