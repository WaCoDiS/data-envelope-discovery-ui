import {Layername} from './optional-parameters-dwd.component';

export interface LayernameI {
   name: string;
   title: string;
}

export const HOURLY: Layername[] = [
  { name: "F_MN003", title: "Stundenmittel der Stationsmessungen der Windgeschwindigkeit in ca. 10 m Höhe in m/s" },
  { name: "D_MN003", title: "Stundenmittel der Stationsmessungen der Windrichtung in ca. 10 m Höhe in Grad" },
  { name: "TE10_MN002", title: "Stündliche Stationsmessungen der Erdbodentemperatur in 10 cm Tiefe in °C" },
  { name: "TE100_MN002", title: "Stündliche Stationsmessungen der Erdbodentemperatur in 100 cm Tiefe in °C" },
  { name: "TE20_MN002", title: "Stündliche Stationsmessungen der Erdbodentemperatur in 20 cm Tiefe in °C" },
  { name: "TE05_MN002", title: "Stündliche Stationsmessungen der Erdbodentemperatur in 5 cm Tiefe in °C" },
  { name: "TE50_MN002", title: "Stündliche Stationsmessungen der Erdbodentemperatur in 50 cm Tiefe in °C" },
  { name: "TT_TU_MN009", title: "Stündliche Stationsmessungen der Lufttemperatur auf 2 m Höhe in °C" },
  { name: "WRTR_MN008", title: "Stündliche Stationsmessungen der Niederschlagsform (WR-Code)" },
  { name: "R1_MN008", title: "Stündliche Stationsmessungen der Niederschlagshöhe in mm" },
  { name: "TD_MN008", title: "Stündliche Stationsmessungen der Taupunkttemperatur auf 2 m Höhe in °C" },
  { name: "FF_MN008", title: "Stündliche Stationsmessungen der Windgeschwindigkeit in 10 m Höhe in m/s" },
  { name: "DD_MN008", title: "Stündliche Stationsmessungen der Windrichtung in 10 m Höhe in Grad" },
  { name: "RF_TU_MN009", title: "Stündliche Stationsmessungen der relativen Feuchte in %" },
  { name: "N_MN008", title: "Stündliche Stationsmessungen des Bedeckungsgrades in Achtel" },
  { name: "RS_IND_MN008", title: "Stündliche Stationsmessungen des Indikators ob Niederschlag gefallen" },
  { name: "P0_MN008", title: "Stündliche Stationsmessungen des Luftdruckes auf Stationshöhe in hpa" },
  { name: "P_MN008", title: "Stündliche Stationsmessungen des Luftdruckes reduziert auf Meereshöhe in hpa" }
]
