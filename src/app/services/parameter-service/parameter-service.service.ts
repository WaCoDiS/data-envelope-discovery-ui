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

  public sensorWeb: sourceType.SensorWeb;
  public copernicus: sourceType.Copernicus = {
    sourceType : "CopernicusDataEnvelope",
    satellite : "sentinel-2",
    cloudCoverage: 100,
    portal: "Code-DE",
    areaOfInterest: null,
    timeFrame: null,
    datasetId: "anyID"
  };
  public gdiDe: sourceType.GdiDe;
  public dwd: sourceType.Dwd;
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

  constructor() {
    //this.copernicus = new sourceType.Copernicus();
  }

  changeSourceType(choosenSourceType: string){
    console.log(choosenSourceType)
    this.currentSourceType = choosenSourceType;
    console.log(this.currentSourceType)
  }
  // Setters for required Parameters
  setDateRange(dateRange: Date[]){
    this.dateRange = dateRange;
    this.startDate= dateRange[0].toISOString();
    this.endDate= dateRange[1].toISOString();
  }

  // Setters for SensorWeb
  setServiceUrlSensorWeb(serviceUrl: string){
    this.sensorWeb.serviceUrlSensorWeb = serviceUrl;
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
    this.gdiDe.catalogueUrl = catalogueUrl;
  }

  setRecordRefId(recordRefId: string){
    this.gdiDe.recordRefId = recordRefId;
  }

  // Setters for DWD
  setServiceUrlDwd(serviceUrlDwd: string){
    this.dwd.serviceUrlDwd = serviceUrlDwd;
  }

  setLayerName(layerName: string){
    this.dwd.layerName = layerName;
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
    this.copernicus.areaOfInterest = {
      extent: this.extent
    }

    console.log(this.currentSourceType)
    if (this.currentSourceType == "SensorWeb"){

    }
    else if (this.currentSourceType == "Copernicus"){
      this.copernicus.timeFrame = this.timeFrame;
      this.copernicus.areaOfInterest = this.areaOfInterest;
      console.log(this.copernicus)
      return this.copernicus
    }
  }

}
