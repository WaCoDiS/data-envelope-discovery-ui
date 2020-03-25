import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SourceTypeComponent } from './source-type/source-type.component';
import { RequiredParametersComponent } from './source-type/required-parameters/required-parameters.component';
import { OptionalParametersCopernicusComponent } from './source-type/optional-parameters-copernicus/optional-parameters-copernicus.component';
import { OptionalParametersSensorWebComponent } from './source-type/optional-parameters-sensor-web/optional-parameters-sensor-web.component';
import { OptionalParametersGdiDeComponent } from './source-type/optional-parameters-gdi-de/optional-parameters-gdi-de.component';
import { OptionalParametersDwdComponent } from './source-type/optional-parameters-dwd/optional-parameters-dwd.component';
import { OptionalParametersWacodisProductComponent } from './source-type/optional-parameters-wacodis-product/optional-parameters-wacodis-product.component'


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CollapseModule} from 'ngx-bootstrap/collapse';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { HeaderComponent } from './header/header.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { MapApplicationComponent } from './map-application/map-application.component';




@NgModule({
  declarations: [
    AppComponent,
    SourceTypeComponent,
    RequiredParametersComponent,
    HeaderComponent,
    OptionalParametersCopernicusComponent,
    OptionalParametersSensorWebComponent,
    OptionalParametersGdiDeComponent,
    OptionalParametersDwdComponent,
    OptionalParametersWacodisProductComponent,
    MapApplicationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    ButtonsModule.forRoot(),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CollapseModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    SelectDropDownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
