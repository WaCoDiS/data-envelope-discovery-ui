import { Data } from 'ngx-bootstrap/positioning/models';

export interface AreaOfInterest {
  extent: number[];
}

export interface TimeFrame {
  startTime: string;
  endTime: string;
}

export interface DataEnvelopeResult {
  areaOfInterest: AreaOfInterest;
  timeFrame: TimeFrame;
  sourceType: string;
  datasetId: string;
  modified: string;
  created: string;
  identifier: string;
}

export interface DataEnvelopeExplore {
  areaOfInterest: AreaOfInterest;
  timeFrame: TimeFrame;
}

export interface Property {
  comparator: 'equals' | 'not' | 'lesser' | 'greater' | 'lesserOrEquals'| 'greaterOrEquals';
  value: string | number;
}

export interface SensorWebExplore extends DataEnvelopeExplore {
  queryParams: {
    sourceType: Property;
    serviceUrl: Property;
    offering: Property;
    featureOfInterest: Property;
    observedProperty: Property;
    procedure: Property;
  };
}

export interface CopernicusExplore extends DataEnvelopeExplore {
  queryParams: {
    sourceType: Property;
    satellite: Property;
    cloudCoverage: Property;
    portal: Property;
  };
}

export interface DwdExplore extends DataEnvelopeExplore {
  queryParams: {
    sourceType: Property;
    // serviceUrl: Property;
    layerName: Property;
    // parameter: Property;
  };
}

export interface WacodisProductExplore extends DataEnvelopeExplore {
  queryParams: {
    sourceType: Property;
    productCollection: Property;
    productType: Property;
    serviceName: Property;
  };
}

export interface SenserWebResult extends DataEnvelopeResult {
  serviceUrl: string;
  offering: string;
  featureOfInterest: string;
  observedProperty: string;
  procedure: string;
}

export interface CopernicusResult extends DataEnvelopeResult {
  satellite: string;
  cloudCoverage: number;
  portal: string;
  footprint: string;
}

export interface DwdResult extends DataEnvelopeResult {
  serviceUrl: string;
  layerName: string;
  parameter: string;
}

export interface WacodisProductResult extends DataEnvelopeResult {
  productCollection: string;
  productType: string;
  serviceName: string;
}
