import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as sourceType from '../../source-type-interfaces';

@Injectable({
  providedIn: 'root'
})
export class ParameterService {

  currentSourceType: string;
  dateRange: Date[];
  dateRangeString: String[];
  startDate: string;
  endDate: string;
  timeFrame: sourceType.TimeFrame;
  areaOfInterest: sourceType.AreaOfInterest;
  extent: number[] = new Array(4);

  public sensorWeb: sourceType.SensorWeb = {
    sourceType : "SensorWebDataEnvelope",
    areaOfInterest: null,
    timeFrame: null,
    serviceUrl: null,
    offering: null,
    featureOfInterest: null,
    observedProperty: null,
    procedure: null,
    datasetId: "anyID"
  }
  public copernicus: sourceType.Copernicus = {
    sourceType : "CopernicusDataEnvelope",
    satellite : "sentinel-2",
    cloudCoverage: 100,
    portal: "Code-DE",
    areaOfInterest: null,
    timeFrame: null,
    datasetId: "anyID"
  };
  public gdiDe: sourceType.GdiDe = {
    sourceType : "GdiDeDataEnvelope",
    areaOfInterest: null,
    timeFrame: null,
    //catalogueUrl: null,
    recordRefId: null,
    datasetId: "anyID"
  }
  public dwd: sourceType.Dwd = {
    sourceType: "DwdDataEnvelope",
    datasetId: "anyID",
    areaOfInterest: null,
    timeFrame: null,
    serviceUrl: "https://cdc.dwd.de:443/geoserver/CDC/wfs?",
    layerName: null,
    parameter: null
  };
  public wacodisProducts: sourceType.WacodisProduct;

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


  constructor() {
    this.currentSourceType = "SensorWeb";
  }



  // service command
  changeMinLon(coord: number) {
    this.extent[0] = coord;
    this.minLonSource.next(coord);
  }
  changeMaxLon(coord: number) {
    this.extent[1] = coord;
    this.maxLonSource.next(coord);
  }
  changeMinLat(coord: number) {
    this.extent[2] = coord;
    this.minLatSource.next(coord);
  }
  changeMaxLat(coord: number) {
    this.extent[3] = coord;
    this.maxLatSource.next(coord);
  }



  changeSourceType(choosenSourceType: string){
    console.log(choosenSourceType)
    this.currentSourceType = choosenSourceType;
  }
  // Setters for required Parameters
  setDateRange(dateRange: Date[]){
    this.dateRange = dateRange;
    this.startDate= dateRange[0].toISOString();
    this.endDate= dateRange[1].toISOString();
  }

  // Setters for SensorWeb
  setServiceUrlSensorWeb(serviceUrl: string){
    this.sensorWeb.serviceUrl = serviceUrl;
  }

  setOffering(offering: string){
    this.sensorWeb.offering = offering;
  }

  setFOI(foi: string){
    this.sensorWeb.featureOfInterest = foi;
  }

  setObservedProp(observedProp: string){
    this.sensorWeb.observedProperty = observedProp;
  }

  setProcedure(procedure: string){
    this.sensorWeb.procedure = procedure;
  }

  // Setters for Copernicus
  setSatellite(satellite: string){
    this.copernicus.satellite = satellite;
  }

  setCloudCover(cloudCover: number){
    this.copernicus.cloudCoverage = cloudCover;
  }

  setPortal(portal: string){
    this.copernicus.portal = portal;
  }

  // Setters for GDI-DE
  setCatalogueUrl(catalogueUrl: string){
    //this.gdiDe.catalogueUrl = catalogueUrl;
  }

  setRecordRefId(recordRefId: string){
    this.gdiDe.recordRefId = recordRefId;
  }

  // Setters for DWD
  setServiceUrlDwd(serviceUrlDwd: string){
    this.dwd.serviceUrl = serviceUrlDwd;
  }

  setLayerName(layerName: string){
    this.dwd.layerName = layerName;
  }

  setParameter(parameter: string){
    this.dwd.parameter = parameter;
  }

  // Setters for WacodisProducts
  setProductCollection(productCollection: string){
    this.wacodisProducts.productCollection = productCollection;
  }

  setProductType(productType: string){
    this.wacodisProducts.productType = productType;
  }

  setServiceName(serviceName: string){
    this.wacodisProducts.serviceName = serviceName;
  }


  getDataEnvelope(): sourceType.DataEnvelope{
    this.timeFrame = {
      startTime: this.startDate,
      endTime: this.endDate
    }
    this.areaOfInterest = {
      extent: this.extent
    }

    if (this.currentSourceType == "SensorWeb"){
      this.sensorWeb.timeFrame = this.timeFrame;
      this.sensorWeb.areaOfInterest = this.areaOfInterest;
      return this.sensorWeb
    }
    else if (this.currentSourceType == "Copernicus"){
      this.copernicus.timeFrame = this.timeFrame;
      this.copernicus.areaOfInterest = this.areaOfInterest;
      return this.copernicus
    }
    else if(this.currentSourceType == "DWD"){
      this.dwd.timeFrame = this.timeFrame;
      this.dwd.areaOfInterest = this.areaOfInterest;
      return this.dwd;
    }
    else if(this.currentSourceType == "GDI-DE"){
      this.gdiDe.timeFrame = this.timeFrame;
      this.gdiDe.areaOfInterest = this.areaOfInterest;
      return this.gdiDe;
    }
  }

}
