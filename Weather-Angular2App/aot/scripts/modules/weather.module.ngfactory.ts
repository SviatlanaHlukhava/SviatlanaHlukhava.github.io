/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../../scripts/modules/weather.module';
import * as import2 from '@angular/forms/src/directives';
import * as import3 from '@angular/forms/src/form_providers';
import * as import4 from '@angular/http/src/http_module';
import * as import5 from '@angular/common/src/common_module';
import * as import6 from '../../../scripts/modules/shared.module';
import * as import7 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import8 from '@angular/http/src/backends/browser_xhr';
import * as import9 from '@angular/http/src/base_response_options';
import * as import10 from '@angular/http/src/backends/xhr_backend';
import * as import11 from '@angular/http/src/base_request_options';
import * as import12 from '@angular/forms/src/form_builder';
import * as import13 from '@angular/common/src/localization';
import * as import14 from '../../../scripts/services/WeatherDTOtoWeatherConverter';
import * as import15 from '../../../scripts/services/WeatherAPI';
import * as import16 from '../../../scripts/actions/WeatherActions';
import * as import17 from '@angular/core/src/di/injector';
import * as import18 from '@angular/core/src/i18n/tokens';
import * as import19 from '@angular/http/src/interfaces';
import * as import20 from '@angular/http/src/http';
class WeatherModuleInjector extends import0.NgModuleInjector<import1.WeatherModule> {
  _InternalFormsSharedModule_0:import2.InternalFormsSharedModule;
  _FormsModule_1:import3.FormsModule;
  _HttpModule_2:import4.HttpModule;
  _ReactiveFormsModule_3:import3.ReactiveFormsModule;
  _CommonModule_4:import5.CommonModule;
  _SharedModule_5:import6.SharedModule;
  _WeatherModule_6:import1.WeatherModule;
  __RadioControlRegistry_7:import7.RadioControlRegistry;
  __BrowserXhr_8:import8.BrowserXhr;
  __ResponseOptions_9:import9.BaseResponseOptions;
  __XSRFStrategy_10:any;
  __XHRBackend_11:import10.XHRBackend;
  __RequestOptions_12:import11.BaseRequestOptions;
  __Http_13:any;
  __FormBuilder_14:import12.FormBuilder;
  __NgLocalization_15:import13.NgLocaleLocalization;
  __WeatherDTOtoWeatherConverter_16:import14.WeatherDTOtoWeatherConverter;
  __WeatherApiService_17:import15.WeatherApiService;
  __WeatherActions_18:import16.WeatherActions;
  constructor(parent:import17.Injector) {
    super(parent,([] as any[]),([] as any[]));
  }
  get _RadioControlRegistry_7():import7.RadioControlRegistry {
    if ((this.__RadioControlRegistry_7 == null)) { (this.__RadioControlRegistry_7 = new import7.RadioControlRegistry()); }
    return this.__RadioControlRegistry_7;
  }
  get _BrowserXhr_8():import8.BrowserXhr {
    if ((this.__BrowserXhr_8 == null)) { (this.__BrowserXhr_8 = new import8.BrowserXhr()); }
    return this.__BrowserXhr_8;
  }
  get _ResponseOptions_9():import9.BaseResponseOptions {
    if ((this.__ResponseOptions_9 == null)) { (this.__ResponseOptions_9 = new import9.BaseResponseOptions()); }
    return this.__ResponseOptions_9;
  }
  get _XSRFStrategy_10():any {
    if ((this.__XSRFStrategy_10 == null)) { (this.__XSRFStrategy_10 = import4._createDefaultCookieXSRFStrategy()); }
    return this.__XSRFStrategy_10;
  }
  get _XHRBackend_11():import10.XHRBackend {
    if ((this.__XHRBackend_11 == null)) { (this.__XHRBackend_11 = new import10.XHRBackend(this._BrowserXhr_8,this._ResponseOptions_9,this._XSRFStrategy_10)); }
    return this.__XHRBackend_11;
  }
  get _RequestOptions_12():import11.BaseRequestOptions {
    if ((this.__RequestOptions_12 == null)) { (this.__RequestOptions_12 = new import11.BaseRequestOptions()); }
    return this.__RequestOptions_12;
  }
  get _Http_13():any {
    if ((this.__Http_13 == null)) { (this.__Http_13 = import4.httpFactory(this._XHRBackend_11,this._RequestOptions_12)); }
    return this.__Http_13;
  }
  get _FormBuilder_14():import12.FormBuilder {
    if ((this.__FormBuilder_14 == null)) { (this.__FormBuilder_14 = new import12.FormBuilder()); }
    return this.__FormBuilder_14;
  }
  get _NgLocalization_15():import13.NgLocaleLocalization {
    if ((this.__NgLocalization_15 == null)) { (this.__NgLocalization_15 = new import13.NgLocaleLocalization(this.parent.get(import18.LOCALE_ID))); }
    return this.__NgLocalization_15;
  }
  get _WeatherDTOtoWeatherConverter_16():import14.WeatherDTOtoWeatherConverter {
    if ((this.__WeatherDTOtoWeatherConverter_16 == null)) { (this.__WeatherDTOtoWeatherConverter_16 = new import14.WeatherDTOtoWeatherConverter()); }
    return this.__WeatherDTOtoWeatherConverter_16;
  }
  get _WeatherApiService_17():import15.WeatherApiService {
    if ((this.__WeatherApiService_17 == null)) { (this.__WeatherApiService_17 = new import15.WeatherApiService(this._WeatherDTOtoWeatherConverter_16,this._Http_13)); }
    return this.__WeatherApiService_17;
  }
  get _WeatherActions_18():import16.WeatherActions {
    if ((this.__WeatherActions_18 == null)) { (this.__WeatherActions_18 = new import16.WeatherActions()); }
    return this.__WeatherActions_18;
  }
  createInternal():import1.WeatherModule {
    this._InternalFormsSharedModule_0 = new import2.InternalFormsSharedModule();
    this._FormsModule_1 = new import3.FormsModule();
    this._HttpModule_2 = new import4.HttpModule();
    this._ReactiveFormsModule_3 = new import3.ReactiveFormsModule();
    this._CommonModule_4 = new import5.CommonModule();
    this._SharedModule_5 = new import6.SharedModule();
    this._WeatherModule_6 = new import1.WeatherModule();
    return this._WeatherModule_6;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.InternalFormsSharedModule)) { return this._InternalFormsSharedModule_0; }
    if ((token === import3.FormsModule)) { return this._FormsModule_1; }
    if ((token === import4.HttpModule)) { return this._HttpModule_2; }
    if ((token === import3.ReactiveFormsModule)) { return this._ReactiveFormsModule_3; }
    if ((token === import5.CommonModule)) { return this._CommonModule_4; }
    if ((token === import6.SharedModule)) { return this._SharedModule_5; }
    if ((token === import1.WeatherModule)) { return this._WeatherModule_6; }
    if ((token === import7.RadioControlRegistry)) { return this._RadioControlRegistry_7; }
    if ((token === import8.BrowserXhr)) { return this._BrowserXhr_8; }
    if ((token === import9.ResponseOptions)) { return this._ResponseOptions_9; }
    if ((token === import19.XSRFStrategy)) { return this._XSRFStrategy_10; }
    if ((token === import10.XHRBackend)) { return this._XHRBackend_11; }
    if ((token === import11.RequestOptions)) { return this._RequestOptions_12; }
    if ((token === import20.Http)) { return this._Http_13; }
    if ((token === import12.FormBuilder)) { return this._FormBuilder_14; }
    if ((token === import13.NgLocalization)) { return this._NgLocalization_15; }
    if ((token === import14.WeatherDTOtoWeatherConverter)) { return this._WeatherDTOtoWeatherConverter_16; }
    if ((token === import15.WeatherApiService)) { return this._WeatherApiService_17; }
    if ((token === import16.WeatherActions)) { return this._WeatherActions_18; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const WeatherModuleNgFactory:import0.NgModuleFactory<import1.WeatherModule> = new import0.NgModuleFactory(WeatherModuleInjector,import1.WeatherModule);