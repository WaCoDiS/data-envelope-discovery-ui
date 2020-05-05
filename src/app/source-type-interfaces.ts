export interface DataEnvelope{
  areaOfInterest: AreaOfInterest;
  timeFrame: TimeFrame;
  sourceType: string;
  datasetId: string;
}


export interface AreaOfInterest{
  extent: number[];
}

export interface TimeFrame{
  startTime: String;
  endTime: String;
}


export interface SensorWeb extends DataEnvelope{
  serviceUrlSensorWeb: string;
  offering: string;
  featureOfInterest: string;
  observedProperty: string;
}

export interface Copernicus extends DataEnvelope {
  satellite: string;
  cloudCoverage: number;
  portal: string;
}

export interface GdiDe extends DataEnvelope{
  catalogueUrl: string;
  recordRefId: string;
}

export interface Dwd extends DataEnvelope{
  serviceUrl: string;
  layerName: string;
  parameter: string;
}
export interface WacodisProduct extends DataEnvelope{
  productCollection: string;
  productType: string;
  serviceName: string;
}
