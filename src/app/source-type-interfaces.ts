export interface DataEnvelope{
  areaOfInterest: AreaOfInterest;
  timeFrame: TimeFrame;
  sourceType: string;
  datasetId: string;
}

export interface DataEnvelopeResult{
  areaOfInterest: AreaOfInterest;
  timeFrame: TimeFrame;
  sourceType: string;
  datasetId: string;
  modified: string;
  created: string;
  identifier: string
}


export interface AreaOfInterest{
  extent: number[];
}

export interface TimeFrame{
  startTime: String;
  endTime: String;
}


export interface SensorWeb extends DataEnvelope{
  serviceUrl: string;
  offering: string;
  featureOfInterest: string;
  observedProperty: string;
  procedure: string
}

export interface Copernicus extends DataEnvelope {
  satellite: string;
  cloudCoverage: number;
  portal: string;
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


export interface CopernicusResult extends DataEnvelopeResult {
  satellite: string;
  cloudCoverage: number;
  portal: string;
}