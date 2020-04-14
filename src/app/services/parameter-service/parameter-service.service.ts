import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParameterService {

  coords: number[] = [];

  serviceUrl: string;

  // Observable source
  private minLonSource = new Subject<number>();
  private minLatSource = new Subject<number>();
  private maxLonSource = new Subject<number>();
  private maxLatSource = new Subject<number>();
  // Observable stream
  minLon$ = this.minLonSource.asObservable();
  minLat$ = this.minLatSource.asObservable();
  maxLon$ = this.maxLonSource.asObservable();
  maxLat$ = this.maxLatSource.asObservable();

  // service command
  changeMinLon(coord: number) {
    this.minLonSource.next(coord);
  }
  changeMinLat(coord: number) {
    this.minLatSource.next(coord);
  }
  changeMaxLon(coord: number) {
    this.maxLonSource.next(coord);
  }
  changeMaxLat(coord: number) {
    this.maxLatSource.next(coord);
  }

  constructor() { }

  add(coords: number) {
    this.coords.push(coords);
  }

  getCoordinates(): number[] {
    return this.coords;
  }


  setServiceUrl(serviceUrl: string){
    this.serviceUrl = serviceUrl;
    console.log(serviceUrl);
  }


  clear() {
    this.coords = [];
  }

}
