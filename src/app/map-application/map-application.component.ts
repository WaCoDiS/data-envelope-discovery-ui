import { Component, AfterViewInit, Input } from '@angular/core';
import * as L from 'leaflet';
import { ParameterService } from '../services/parameter-service/parameter-service.service';
import * as sourceType from '../source-type-interfaces';

@Component({
  selector: 'app-map-application',
  templateUrl: './map-application.component.html',
  styleUrls: ['./map-application.component.scss']
})

export class MapApplicationComponent {

  //@Input() resultEnvelopes: sourceType.DataEnvelopeResult[];

  //private _resultEnvelopes: sourceType.DataEnvelopeResult[];
  @Input() set resultEnvelopes(resultEnvelopes: sourceType.DataEnvelopeResult[]) {
    this.drawFootprints(resultEnvelopes);
 }

  constructor(public parameterService: ParameterService) { };

  drawnItems: L.FeatureGroup = L.featureGroup();
  footprints: L.FeatureGroup = L.featureGroup();

  layersControl = {
    baseLayers: {
    },
    overlays: {
      'Bounding Box': this.drawnItems,
      'Footprints': this.footprints
    }
  }



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
      rectangle: { showArea: false, shapeOptions: {color: "#ff7800", weight: 1}},
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
    var drawnBBoxLayer = (e as L.DrawEvents.Created).layer;
    //drawnBBoxLayer.setOptions(object);//   setStyle({color: "#ff7800", weight: 1});
    this.drawnItems.addLayer(drawnBBoxLayer);
    const type = (e as any).layerType,
    layer = (e as any).layer
    if (type === 'rectangle') {
      const coords = layer._latlngs;
      var bbox = [coords[0][0], coords[0][2]];

      // call service command for updating the observable
      this.parameterService.changeMinLon(bbox[0].lng);
      this.parameterService.changeMinLat(bbox[0].lat);
      this.parameterService.changeMaxLon(bbox[1].lng);
      this.parameterService.changeMaxLat(bbox[1].lat);
    }
  }

  public drawFootprints(dataEnvelopes: sourceType.DataEnvelopeResult[]) {
      for (let i = 0; i < dataEnvelopes.length; i++) {
        var min: number[] = [dataEnvelopes[i].areaOfInterest.extent[3], dataEnvelopes[i].areaOfInterest.extent[0]];
        var max: number[] = [dataEnvelopes[i].areaOfInterest.extent[2], dataEnvelopes[i].areaOfInterest.extent[1]];
        var corner1 = L.latLng(min[0], min[1])
        var corner2 = L.latLng(max[0], max[1])
        var bounds = L.latLngBounds(corner1, corner2);
        // ymin xmin ymax xmax
        this.footprints.addLayer(L.rectangle(bounds))
      }
  }

}