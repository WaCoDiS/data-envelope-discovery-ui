export interface SensorWeb {
  serviceUrlSensorWeb: string;
  offering: string;
  featureOfInterest: string;
  observedProperty: string;
}

export interface Copernicus {
  satellite: string;
  cloudCover: number[];
  portal: string;
}

export interface GdiDe {
  catalogueUrl: string;
  recordRefId: string;
}

export interface Dwd {
  serviceUrlDwd: string;
  layerName: string;
}
export interface WacodisProduct {
  productCollection: string;
  productType: string;
  serviceName: string;
}
