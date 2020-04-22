import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as sourceType from '../../source-type-interfaces';

@Injectable({
  providedIn: 'root'
})
export class ParameterService {

  dateRange: Date[] = [];
  dateRangeString: String[] = [];

  public sensorWeb: sourceType.SensorWeb;

  public copernicus: sourceType.Copernicus = new class implements sourceType.Copernicus {
    timeFrame: sourceType.TimeFrame = new class implements sourceType.TimeFrame {
      endTime: String;
      starTime: String;
    }
    areaOfInterest: sourceType.AreaOfInterest = new class implements sourceType.AreaOfInterest {
      extend: number[];
    }
    cloudCover: number[] =[0,100];
    portal = "CODE-DE";
    satellite = "Sentinel-2";
  }

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

  // Setters for required Parameters
  setDateRange(dateRange: Date[]){
    this.dateRange = dateRange;
    this.dateRangeString[0] = dateRange[0].toISOString();
    this.dateRangeString[1] = dateRange[1].toISOString();
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

  setCloudCover(cloudCover: number[]){
    this.copernicus.cloudCover = cloudCover;
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
    this.copernicus.timeFrame.starTime = this.dateRangeString[0];
    this.copernicus.timeFrame.endTime = this.dateRangeString[1];
    this.copernicus.areaOfInterest = null;
    console.log(this.copernicus)
    return this.copernicus;
  }

}
