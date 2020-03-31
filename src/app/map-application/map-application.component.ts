import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { Draw } from 'leaflet';


@Component({
  selector: 'app-map-application',
  templateUrl: './map-application.component.html',
  styleUrls: ['./map-application.component.scss']
})

export class MapApplicationComponent implements AfterViewInit  {
  private map;


  drawOptions = {
    position: 'topright',
  };


  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }


  private initMap():void{
    this.map = L.map('map', {
      center: [ 51.4465,7.2721],
      zoom: 15,
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.map);


    this.createDrawToolbar();
    this.createLayerSelection(tiles);


  }

  private createLayerSelection(tiles: L.TileLayer) {
    var baseMaps = {
      "OSM": tiles
    };

    L.control.layers(baseMaps).addTo(this.map);
  }

  private createDrawToolbar() {
    // FeatureGroup is to store editable layers
    var drawnItems = new L.FeatureGroup();
    this.map.addLayer(drawnItems);

    var drawControl = new L.Control.Draw({
      draw: {
//      polygon: false,
//      polyline: false,
//      circle: false,
//      marker: false,
//      circlemarker: false
      },
      edit: {
        featureGroup: drawnItems
      }
    });
    this.map.addControl(drawControl);
  }

  
  onDrawReady(drawControl: L.Control.Draw) {
    alert("hallo")
  }
}
