import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as sourceType from '../../source-type-interfaces';

@Injectable({
  providedIn: 'root'
})
export class ParameterService {

  dateRange: Date[] = [];
  dateRangeString: String[] = [];

  public sensorWeb: sourceType.SensorWeb = new class implements sourceType.SensorWeb {
    dateRange: Date[];
    dateRangeString: String[];
    serviceUrlSensorWeb: string;
    featureOfInterest: string;
    observedProperty: string;
    offering: string;
  }

  public copernicus: sourceType.Copernicus = new class implements sourceType.Copernicus {
    dateRange: Date[];
    dateRangeString: String[];
    portal = "CODE-DE";
    satellite = "Sentinel-2";
  }

  public gdiDe: sourceType.GdiDe = new class implements sourceType.GdiDe {
    dateRange: Date[];
    dateRangeString: String[];
    catalogueUrl: string;
    recordRefId: string;
  }

  public dwd: sourceType.Dwd = new class implements sourceType.Dwd {
    dateRange: Date[];
    dateRangeString: String[];
    layerName: string;
    serviceUrlDwd: string;
  }

  public wacodisProducts: sourceType.WacodisProduct = new class implements sourceType.WacodisProduct {
    dateRange: Date[];
    dateRangeString: String[];
    productCollection: string;
    productType: string;
    serviceName: string;
  }

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

}
