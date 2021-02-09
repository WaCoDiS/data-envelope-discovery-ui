# WaCoDiS DataEnvelope Discovery UI
User friendly web-based UI for discovering metadata for registrated datasets via 
[WaCoDiS Data Access API](https://github.com/WaCoDiS/data-access-api).

**Table of Content**  
1. [WaCoDiS Project Information](#wacodis-project-information)
2. [Overview](#overview) 
3. [Installation / Building Information](#installation--building-information)
4. [Deployment](#deployment)
5. [User Guide](#user-guide)
6. [Developer Information](#developer-information)
7. [Contact](#contact)
8. [Credits and Contributing Organizations](#credits-and-contributing-organizations)

## WaCoDiS Project Information
<p align="center">
  <img src="https://raw.githubusercontent.com/WaCoDiS/apis-and-workflows/master/misc/logos/wacodis.png" width="200">
</p>
Climate changes and the ongoing intensification of agriculture effect in increased material inputs in watercourses and dams.
Thus, water industry associations, suppliers and municipalities face new challenges. To ensure an efficient and environmentally
friendly water supply for the future, adjustments on changing conditions are necessary. Hence, the research project WaCoDiS
aims to geo-locate and quantify material outputs from agricultural areas and to optimize models for sediment and material
inputs (nutrient contamination) into watercourses and dams. Therefore, approaches for combining heterogeneous data sources,
existing interoperable web based information systems and innovative domain oriented models will be explored.

### Architecture Overview
For a detailed overview about the WaCoDiS system architecture please visit the 
**[WaCoDiS Core Engine](https://github.com/WaCoDiS/core-engine)** repository.  

## Overview  
WaCoDiS DataEnvelope Discovery UI is a light-weight interface which facilitates the communication with its backend, i.e.
[WaCoDiS Data Access API](https://github.com/WaCoDiS/data-access-api). It allows to discover metadata for all registrated 
datasets and datasources in shape of _DataEnvelopes_. 

### Technologies/Dependencies
* __Angular__:
WaCoDiS DataEnvelope Discovery UI is implemented by the use of the web framework [Angular](https://angular.io/).
* __Bootstrap__
The UI style relies on the CSS framework [Bootstrap](https://getbootstrap.com/). We use 
[ngx-bootstrap](https://valor-software.com/ngx-bootstrap/#/) for Angular support of several Bootstrap components.

## Installation / Building Information
### Build from Source
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a
production build.

### Build with Docker
The repository contains a Dockerfile for building a Docker image. Just run `docker build -t wacodis/dataenvelope-discovery-ui .`
from the project root to build the image.

The [deployment section](#run-with-docker) provides helpful information for running the UI as Docker container.

### Configuration
#### Parameters
TODO

## Deployment
### Dependencies
TODO

### Run with Docker
TODO

### Run on development server
Run `ng serve --open` for a dev server and opening a web browser window displaying the UI on http://localhost:4200.

## Developer Information
This section contains information for developers.

### How to Contribute
TODO

### Branching
The master branch provides sources for stable builds. The develop branch represents the latest (maybe unstable) state of
development.

### License and Third Party Lib POM Plugins
[optional]

## Contact
|    Name   |   Organization    |    Mail    |
| :-------------: |:-------------:| :-----:|
| Sebastian Drost | Bochum University of Applied Sciences | sebastian.drost@hs-bochum.de |
| Arne Vogt | Bochum University of Applied Sciences | arne.vogt@hs-bochum.de |
| Andreas Wytzisk  | Bochum University of Applied Sciences | andreas.wytzisk@hs-bochum.de |
| Matthes Rieke | 52° North GmbH | m.rieke@52north.org |

## Credits and Contributing Organizations
- Department of Geodesy, Bochum University of Applied Sciences, Bochum
- 52° North Initiative for Geospatial Open Source Software GmbH, Münster
- Wupperverband, Wuppertal
- EFTAS Fernerkundung Technologietransfer GmbH, Münster

The research project WaCoDiS is funded by the BMVI as part of the [mFund programme](https://www.bmvi.de/DE/Themen/Digitales/mFund/Ueberblick/ueberblick.html)  
<p align="center">
  <img src="https://raw.githubusercontent.com/WaCoDiS/apis-and-workflows/master/misc/logos/mfund.jpg" height="100">
  <img src="https://raw.githubusercontent.com/WaCoDiS/apis-and-workflows/master/misc/logos/bmvi.jpg" height="100">
</p>