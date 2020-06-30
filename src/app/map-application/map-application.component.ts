import { Component, AfterViewInit, Input, OnInit, EventEmitter, Output } from '@angular/core';
import * as L from 'leaflet';
import { ParameterService } from '../services/parameter-service/parameter-service.service';
import * as sourceType from '../source-type-interfaces';
import { ResultService } from '../services/result-service/result.service';
import { Subscription } from 'rxjs';
import * as geojson from 'geojson';


@Component({
  selector: 'app-map-application',
  templateUrl: './map-application.component.html',
  styleUrls: ['./map-application.component.scss']
})

export class MapApplicationComponent implements OnInit {

  //@Input() resultEnvelopes: sourceType.DataEnvelopeResult[];

  //private _resultEnvelopes: sourceType.DataEnvelopeResult[];

  subscription: Subscription;
  previousSelectedEnvelope: sourceType.DataEnvelopeResult;
  selectedEnvelope: sourceType.DataEnvelopeResult;
  map = new Map<string, number>();
  theRealMap;


  drawnBBoxLayer: any;
  drawnItems: L.FeatureGroup = L.featureGroup();
  //footprints: L.FeatureGroup = L.featureGroup();
  footprints: L.GeoJSON = L.geoJSON(); //(footprintLayer.toGeoJSON());

  @Input() set resultEnvelopes(resultEnvelopes: sourceType.DataEnvelopeResult[]) {
    if (resultEnvelopes != null) {
      console.log(resultEnvelopes[0])
      this.drawFootprints(resultEnvelopes);
    }
  }
  constructor(public parameterService: ParameterService, public resultService: ResultService) { };


  ngOnInit() {

    this.subscription = this.resultService.selectedEnvelope$
      .subscribe(item => {
        if (this.previousSelectedEnvelope == null) {  //nothing is selected
          this.changeColorOfSelected(item);   // a specific footprint gets a new color
          this.previousSelectedEnvelope = item;
        }
        else if (this.previousSelectedEnvelope.identifier == item.identifier) { //mouseleave
          this.footprints.setStyle({ color: "#ff7800", weight: 1 });    // all footprints become orange
          this.previousSelectedEnvelope = null;
        }
        else {   // a new one is selceted
          this.changeColorOfSelected(item); // a specific footprint gets a new color
          this.previousSelectedEnvelope = item;
        }

      })




  }



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
      rectangle: { showArea: false }, //shapeOptions: {color: "#ff7800", weight: 1}},
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
  }

  public onDrawCreated(e: any) {
    this.drawnItems.clearLayers();
    this.drawnBBoxLayer = (e as L.DrawEvents.Created).layer;
    this.drawnItems.addLayer(this.drawnBBoxLayer);
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


  onMapReady(map: L.Map) {
    // Do stuff with map
    //map.removeLayer(this.drawnBBoxLayer);
    this.theRealMap = map;
  }

  public drawFootprints(dataEnvelopes: sourceType.DataEnvelopeResult[]) {
    this.theRealMap.removeLayer(this.drawnItems);
    this.footprints.clearLayers();
    for (let i = 0; i < dataEnvelopes.length; i++) {
      var min: number[] = [dataEnvelopes[i].areaOfInterest.extent[3], dataEnvelopes[i].areaOfInterest.extent[0]];
      var max: number[] = [dataEnvelopes[i].areaOfInterest.extent[2], dataEnvelopes[i].areaOfInterest.extent[1]];
      var corner1 = L.latLng(min[0], min[1]);
      var corner2 = L.latLng(max[0], max[1]);
      var bounds = L.latLngBounds(corner1, corner2);
      // ymin xmin ymax xmax
      var footprintLayerAlt = L.rectangle(bounds);
      var footprintLayer = L.geoJSON(<geojson.Polygon>{
        type: "Polygon",
        properties: {
          "identifier": dataEnvelopes[i].identifier
        },
        coordinates: [[
          [min[1], min[0]],
          [min[1], max[0]],
          [max[1], max[0]],
          [max[1], min[0]],
          [min[1], min[0]]
        ]]// Note that in GeoJSON, order is [LONG, LAT]
      }
        /*
        ,
        {
          onEachFeature: function (feature, layer) {
            layer.on('click', function (e) {
              console.log(this.resultService.hoverRow("Hallo"));
            })
          }
        }
        */
      );
      console.log(footprintLayer.getLayers()[0])
      footprintLayer.setStyle({ color: "#ff7800", weight: 3, fillOpacity: 0.1 })

      footprintLayer.on('mouseover', function (ev) {
        var layer = ev.target;
        layer.setStyle({ color: "#ff0000", weight: 3 });
        console.log(ev.target.getLayers()[0].feature.geometry.properties.identifier);

      }
      );

      footprintLayer.on('mouseout', function (ev) {
        var layer = ev.target
        layer.setStyle({ color: "#ff7800", weight: 1 })
      }
      );
      this.footprints.addLayer(footprintLayer)
      console.log("Zeichnen fertig: " + dataEnvelopes[i].identifier)
      this.map.set(dataEnvelopes[i].identifier, this.footprints.getLayerId(footprintLayer));
    }
  }


  changeColorOfSelected(dataEnvelope: sourceType.DataEnvelopeResult) {
    var selectedLayer: number = this.map.get(dataEnvelope.identifier); // value ;
    var layer = this.footprints.getLayer(selectedLayer) as L.Rectangle
    layer.setStyle({ color: "#ff0000", weight: 1 })
  }




}