import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SourceTypeComponent } from './source-type/source-type.component';
import { RequiredParametersComponent } from './source-type/required-parameters/required-parameters.component';
import { OptionalParametersComponent } from './source-type/optional-parameters/optional-parameters.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CollapseModule} from 'ngx-bootstrap/collapse';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { HeaderComponent } from './header/header.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SelectDropDownModule } from 'ngx-select-dropdown'




@NgModule({
  declarations: [
    AppComponent,
    SourceTypeComponent,
    RequiredParametersComponent,
    OptionalParametersComponent,
    HeaderComponent
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
