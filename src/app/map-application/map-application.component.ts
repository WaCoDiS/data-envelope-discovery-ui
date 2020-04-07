import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { Draw } from 'leaflet';
import 'leaflet-draw';

@Component({
  selector: 'app-map-application',
  templateUrl: './map-application.component.html',
  styleUrls: ['./map-application.component.scss']
})

export class MapApplicationComponent implements AfterViewInit  {
  private map;
  private drawnItems;
  private drawControl;


  drawOptions = {
    draw: {
//      polygon: false,
//      polyline: false,
//      circle: false,
//      marker: false,
//      circlemarker: false
    },
    edit: {
      featureGroup: this.drawnItems
    }
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


    var polygon = L.polygon([
      [51.509, -0.08],
      [51.503, -0.06],
      [51.51, -0.047]
    ]).addTo(this.map);


  }


  private createLayerSelection(tiles: L.TileLayer) {
    var baseMaps = {
      "OSM": tiles
    };

    L.control.layers(baseMaps).addTo(this.map);
  }



  private createDrawToolbar() {

    // FeatureGroup is to store editable layers
    this.drawnItems = new L.FeatureGroup();
    this.map.addLayer(this.drawnItems);

    // Initialise the draw control and pass it the FeatureGroup of editable layers
    this.drawControl = new L.Control.Draw(this.drawOptions);
    this.map.addControl(this.drawControl);



    this.map.on(L.Draw.Event.CREATED, function (e) {
      //var layers = e.layers;
      var type = e.layerType;
      alert(type);
      var layer = e.layer;
      alert(layer);
      //this.map.addLayer(layer);
      //this.map.addLayer(this.drawnItems);
      this.drawnItems.addLayer(layer)
      layer.addTo(this.drawnItems);
      layer.addTo(this.map);
  });


    this.map.on('click', function(ev) {
      //alert(ev.latlng); // ev is an event object (MouseEvent in this case)
    });

  }


  onDrawReady(drawControl: L.Control.Draw) {
    alert("hallo")
  }
}
