# WaCoDiS DataEnvelope Discovery UI
User friendly web-based UI for discovering metadata for registered datasets via 
[WaCoDiS Data Access API](https://github.com/WaCoDiS/data-access-api).

**Table of Content**  
1. [WaCoDiS Project Information](#wacodis-project-information)
2. [Overview](#overview) 
3. [Installation / Building Information](#installation--building-information)
4. [Deployment](#deployment)
5. [Developer Information](#developer-information)
6. [Contact](#contact)
7. [Credits and Contributing Organizations](#credits-and-contributing-organizations)

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
[WaCoDiS Data Access API](https://github.com/WaCoDiS/data-access-api). It allows to discover metadata for all registered 
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
The repository contains a Dockerfile for building a Docker image. Just run `docker build -t wacodis/data-envelope-discovery-ui .`
from the project root to build the image.

The [deployment section](#run-with-docker) provides helpful information for running the UI as Docker container.

### Configuration
#### Parameters
Adopt the environment files inside the _src/environments/_ folder to your runtime environment specific needs:
* `production`: Indicates whether the environment file should be used in production mode or not
* `local`: Indicates whether the environment file should be used in local mode or not
* `apiUrl`: URL that points to the WaCoDiS DataAccess API

To use the locally running API components, in the file environment.ts, set the parameter `apiUrl` to the relevant URL,
which may point to a locally running instance or to your production service . 

## Deployment
### Dependencies
WaCoDiS DataEnvelope Discovery UI serves as frontend for WaCoDiS Data Access API. Hence, Data Access API must be deployed in
beforehand, otherwise the UI can not send any API requests to it. To install the backend components, follow the instructions as
described here: https://github.com/WaCoDiS/data-access-api. We recommend to run the Data Access API as Docker
container to speed up deployment. Once installed and configured, to use the API on your local system you will need to
configure the Angular app accordingly. Just point the `apiUrl` parameter to your local oder remote API instance.

### Run with Docker
Start the Docker container by running `docker run --rm -it --name app-job-manager-container -e PORT=80 -p 8080:80 wacodis/job-manager-ui`.
The repository also contains a docker-compose file that eases starting the container with `docker-compose up`.
Subsequently, the Job Manager UI is available on http://localhost:8080/. Be sure to have built the docker image previously like described
in the [Build with Docker section](#build-with-docker).

### Run on development server
Run `ng serve --open` for a dev server and opening a web browser window displaying the UI on http://localhost:4200.

## Developer Information
This section contains information for developers.

### How to Contribute
Feel free to implement missing features by creating a pull request or get in touch with our friendly developers.

### Pending developments
Up to now, WaCoDiS DataEnvelope Discovery UI supports the discovery of `CopernicusDataEnvelope` and `WacodisProductDataEnvelope`.
Since DatanAccess API also manages `SensorWebDataEnvelope`, `GdiDeDataEnvelope` and `DwdDataEnvelope`, the UI have to be expanded
by providing additional parameter forms that matches each of the missing _DataEnvelopes_.

### Branching
The master branch provides sources for stable builds. The develop branch represents the latest (maybe unstable) state of
development.

### License and Third Party Lib POM Plugins
[optional]

### Contributing Developers
|    Name   |   Organization    |    GitHub    |
| :-------------: |:-------------:| :-----:|
| Sebastian Drost | 52° North GmbH | [SebaDro](https://github.com/SebaDro) |

## Contact
The WaCoDiS project is maintained by [52°North GmbH](https://52north.org/). If you have any questions about this or any
other repository related to WaCoDiS, please contact wacodis-info@52north.org.

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