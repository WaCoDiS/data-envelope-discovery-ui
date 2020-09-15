import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LeafletDrawModule } from '@asymmetrik/ngx-leaflet-draw';
// import { BboxValueDirective } from './map-application/bbox-value.directive';
import { NgxBootstrapSliderModule } from 'ngx-bootstrap-slider';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MapApplicationComponent } from './map-application/map-application.component';
import { OptionalParametersCopernicusComponent } from './source-type/optional-parameters-copernicus/optional-parameters-copernicus.component';
import { OptionalParametersDwdComponent } from './source-type/optional-parameters-dwd/optional-parameters-dwd.component';
import { OptionalParametersSensorWebComponent } from './source-type/optional-parameters-sensor-web/optional-parameters-sensor-web.component';
import { OptionalParametersWacodisProductComponent } from './source-type/optional-parameters-wacodis-product/optional-parameters-wacodis-product.component';
import { RequiredParametersComponent } from './source-type/required-parameters/required-parameters.component';
import { CopernicusResultComponent } from './source-type/result/copernicus-result/copernicus-result.component';
import { SourceTypeComponent } from './source-type/source-type.component';
import { WacodisProductResultComponent } from './source-type/result/wacodis-product-result/wacodis-product-result.component';


@NgModule({
  declarations: [
    AppComponent,
    SourceTypeComponent,
    RequiredParametersComponent,
    HeaderComponent,
    OptionalParametersCopernicusComponent,
    OptionalParametersSensorWebComponent,
    OptionalParametersDwdComponent,
    OptionalParametersWacodisProductComponent,
    MapApplicationComponent,
    CopernicusResultComponent,
    WacodisProductResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    BrowserAnimationsModule,

    ButtonsModule.forRoot(),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CollapseModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    SelectDropDownModule,
    LeafletModule.forRoot(),
    LeafletDrawModule.forRoot(),
    NgxBootstrapSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
