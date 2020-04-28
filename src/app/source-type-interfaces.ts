export interface DataEnvelope{
  areaOfInterest: AreaOfInterest;
  timeFrame: TimeFrame;
}


export interface AreaOfInterest{
  extend: number[];
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
  serviceUrlDwd: string;
  layerName: string;
}
export interface WacodisProduct extends DataEnvelope{
  productCollection: string;
  productType: string;
  serviceName: string;
}
