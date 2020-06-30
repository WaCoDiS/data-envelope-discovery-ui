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

  public sensorWeb: sourceType.SensorWebExplore = {
    queryParams: {
      sourceType:{
       comparator: "equals",
       value:"SensorWebDataEnvelope"
      },
      serviceUrl: {
        comparator: "equals",
        value:null
      },
      offering: {
        comparator: "equals",
        value: null
      },
      featureOfInterest: {
        comparator: "equals",
        value: null
      },
      procedure: {
        comparator: "equals",
        value: null
      },
      observedProperty:{
        comparator: "equals",
        value: null
      }
      //datasetId: {
      //  comparator: "equals",
      //  value: "anyID"
      //}
    },
    areaOfInterest: null,
    timeFrame: null    
  }

  public copernicus: sourceType.CopernicusExplore = {
    areaOfInterest: null,
    timeFrame: null,
    queryParams: {
      sourceType:{
        comparator: "equals",
        value:"CopernicusDataEnvelope"
       },
    satellite : {
      comparator: "equals",
      value: "sentinel-2"
    },
    cloudCoverage: {
      comparator: "lesserOrEquals",
      value: 100
    },
    portal: {
    comparator: "equals",
      value: "Code-DE"
    }

  }
};

  public dwd: sourceType.DwdExplore = {
    areaOfInterest: null,
    timeFrame: null,
    queryParams: {
      sourceType:{
        comparator: "equals",
        value:"DwdDataEnvelope"
       },/*
      serviceUrl : {
      comparator: "equals",
      value: "https://cdc.dwd.de:443/geoserver/CDC/wfs?"
    },*/
    layerName: {
      comparator: "equals",
      value: null
    }/*,
    parameter: {
    comparator: "equals",
      value: null
    }
    */
  }
};
  public wacodisProducts: sourceType.WacodisProductExplore  = {
    areaOfInterest: null,
    timeFrame: null,
    queryParams: {
      sourceType:{
        comparator: "equals",
        value:"WacodisProductDataEnvelope"
       },
      productCollection : {
      comparator: "equals",
      value: null
    },
    productType: {
      comparator: "equals",
      value: null
    },
    serviceName: {
    comparator: "equals",
      value: null
    }

  }
};

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
    this.extent[2] = coord;
    this.maxLonSource.next(coord);
  }
  changeMinLat(coord: number) {
    this.extent[1] = coord;
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
    this.sensorWeb.queryParams.serviceUrl.value = serviceUrl;
  }

  setOffering(offering: string){
    this.sensorWeb.queryParams.offering.value = offering;
  }

  setFOI(foi: string){
    this.sensorWeb.queryParams.featureOfInterest.value = foi;
  }

  setObservedProp(observedProp: string){
    this.sensorWeb.queryParams.observedProperty.value = observedProp;
  }

  setProcedure(procedure: string){
    this.sensorWeb.queryParams.procedure.value = procedure;
  }

  // Setters for Copernicus
  setSatellite(satellite: string){
    this.copernicus.queryParams.satellite.value = satellite;
  }

  setCloudCover(cloudCover: number){
    this.copernicus.queryParams.cloudCoverage.value = cloudCover;
  }

  setPortal(portal: string){
    this.copernicus.queryParams.portal.value = portal;
  }


  // Setters for DWD
  setLayerName(layerName: string){
    this.dwd.queryParams.layerName.value = layerName;
  }
  /*
  setParameter(parameter: string){
    this.dwd.queryParams.parameter.value = parameter;
  }
  */
  // Setters for WacodisProducts
  setProductCollection(productCollection: string){
    this.wacodisProducts.queryParams.productCollection.value = productCollection;
  }

  setProductType(productType: string){
    this.wacodisProducts.queryParams.productType.value = productType;
  }

  setServiceName(serviceName: string){
    this.wacodisProducts.queryParams.serviceName.value = serviceName;
  }


  getDataEnvelope(): sourceType.DataEnvelopeExplore{
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
  }

}
