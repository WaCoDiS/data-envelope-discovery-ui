import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { ParameterServiceService } from '../parameter-service.service';

@Component({
  selector: 'app-map-application',
  templateUrl: './map-application.component.html',
  styleUrls: ['./map-application.component.scss']
})

export class MapApplicationComponent {


  options = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: 'Open Street Map' })
    ],
    zoom: 15,
    center: L.latLng({ lat: 51.447437, lng: 7.271786 })
  };

  drawOptions = {
    position: 'topleft',
    draw: {
      marker: false,
      polyline: false,
      polygon: false,
      rectangle: { showArea: false},
      circlemarker: false,
      circle: false,
    }
  };

  constructor(public parameterService: ParameterServiceService){};

  /*
  public onDrawCreated(e: any) {
    // tslint:disable-next-line:no-console
    console.log('Draw Created Event!');
  }
  */
  public onDrawStart(e: any) {
    // tslint:disable-next-line:no-console
    console.log('Draw Started Event!');
  }

  public onDrawCreated(e: any) {
       const type = (e as any).layerType,
        layer = (e as any).layer
      if (type === 'rectangle') {
        const coords = layer._latlngs;
        var bbox = [coords[0][0], coords[0][2]];
        console.log(bbox[0].lat);
        this.parameterService.add(bbox[0].lat);
        console.log(bbox);
      }
  }

}
