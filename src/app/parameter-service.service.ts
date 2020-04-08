import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParameterServiceService {

  coords: number[] = [];


  constructor() { }

  add(coords: number) {
    this.coords.push(coords);
  }
  /*
  getCoordinates(): Observable<String[]> {
    return of(this.coords);
  }
  */
  getCoordinates(): number[] {
    return this.coords;
  }

  clear() {
    this.coords = [];
  }

}
