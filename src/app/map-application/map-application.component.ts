import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { ParameterService } from '../services/parameter-service/parameter-service.service';
import * as sourceType from '../source-type-interfaces';

@Component({
  selector: 'app-map-application',
  templateUrl: './map-application.component.html',
  styleUrls: ['./map-application.component.scss']
})

export class MapApplicationComponent {

  constructor(public parameterService: ParameterService) { };

  drawnItems: L.FeatureGroup = L.featureGroup();
  footprints: L.FeatureGroup = L.featureGroup();

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
      rectangle: { showArea: false },
      circlemarker: false,
      circle: false,
    },
    edit: {
      featureGroup: this.drawnItems,
      edit: false,
      remove: false
    },
  };

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
    this.drawnItems.clearLayers();
    this.drawnItems.addLayer((e as L.DrawEvents.Created).layer);
    const type = (e as any).layerType,
      layer = (e as any).layer
    if (type === 'rectangle') {
      const coords = layer._latlngs;
      var bbox = [coords[0][0], coords[0][2]];
      console.log(bbox[0].lat);
      console.log(bbox);

      // call service command for updating the observable
      this.parameterService.changeMinLon(bbox[0].lng);
      this.parameterService.changeMinLat(bbox[0].lat);
      this.parameterService.changeMaxLon(bbox[1].lng);
      this.parameterService.changeMaxLat(bbox[1].lat);
    }
  }

  public drawFootprints(dataEnvelopes: sourceType.DataEnvelopeResult[]) {
    /*var extent = dataEnvelopes[0].areaOfInterest.extent
    // xmin xmax ymin ymax
    var min: number[] = [extent[3], extent[0]];
    var max: number[] = [extent[2], extent[1]];*/
    // var bounds: any[] = [min, max];
    var corner1 = L.latLng(51.447437, 7.271786)
    var corner2 = L.latLng(52.00, 7.5)
    var bounds = L.latLngBounds(corner1, corner2);
    // ymin xmin ymax xmax
    this.footprints.addLayer(L.rectangle(bounds))
  }

}
