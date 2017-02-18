/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../../scripts/modules/app.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/forms/src/directives';
import * as import6 from '@angular/forms/src/form_providers';
import * as import7 from '../../../scripts/modules/footer.module';
import * as import8 from '../../../scripts/modules/shared.module';
import * as import9 from '@angular/router/src/router_module';
import * as import10 from '../../../scripts/modules/header.module';
import * as import11 from '../../../scripts/modules/loader.module';
import * as import12 from '../../../scripts/modules/map.module';
import * as import13 from '@angular/http/src/http_module';
import * as import14 from '../../../scripts/modules/weather.module';
import * as import15 from '../../../scripts/modules/routing.module';
import * as import16 from '@ngrx/store/src/ng2';
import * as import17 from '@ngrx/effects/src/effects.module';
import * as import18 from '@angular/common/src/localization';
import * as import19 from '@angular/core/src/application_init';
import * as import20 from '@angular/core/src/testability/testability';
import * as import21 from '@angular/core/src/application_ref';
import * as import22 from '@angular/core/src/linker/compiler';
import * as import23 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import24 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import25 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import26 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import27 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import28 from '@angular/core/src/linker/view_utils';
import * as import29 from '@angular/platform-browser/src/browser/title';
import * as import30 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import31 from '@angular/forms/src/form_builder';
import * as import32 from '@angular/http/src/backends/browser_xhr';
import * as import33 from '@angular/http/src/base_response_options';
import * as import34 from '@angular/http/src/backends/xhr_backend';
import * as import35 from '@angular/http/src/base_request_options';
import * as import36 from '../../../scripts/services/WeatherDTOtoWeatherConverter';
import * as import37 from '../../../scripts/services/WeatherAPI';
import * as import38 from '../../../scripts/actions/WeatherActions';
import * as import39 from '@angular/router/src/url_tree';
import * as import40 from '@angular/router/src/router_outlet_map';
import * as import41 from '@angular/common/src/location/location';
import * as import42 from '@angular/core/src/linker/system_js_ng_module_factory_loader';
import * as import43 from '../../../scripts/services/WeatherDetailsResolver';
import * as import44 from '@angular/router/src/router_preloader';
import * as import45 from '@ngrx/store/src/dispatcher';
import * as import46 from '@ngrx/effects/src/actions';
import * as import47 from '../../../scripts/actions/CoordinateActions';
import * as import48 from '../../../scripts/actions/LoadingActions';
import * as import49 from '../../../scripts/services/Location';
import * as import50 from '../../../scripts/services/Logger';
import * as import51 from '../../../scripts/effects/CoordinateEffects';
import * as import52 from '@ngrx/effects/src/effects-subscription';
import * as import53 from '../../../scripts/services/Profiler';
import * as import54 from '@angular/core/src/di/injector';
import * as import55 from '../components/mapRouter.component.ngfactory';
import * as import56 from '../components/cityWeatherSectionRouter.component.ngfactory';
import * as import57 from '../components/myCityWeatherDetailsRouter.component.ngfactory';
import * as import58 from '../components/weatherDetails.component.ngfactory';
import * as import59 from '../components/pageNotFound.component.ngfactory';
import * as import60 from '../components/app.component.ngfactory';
import * as import61 from '@angular/core/src/application_tokens';
import * as import62 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import63 from '@angular/platform-browser/src/dom/events/key_events';
import * as import64 from '@angular/core/src/zone/ng_zone';
import * as import65 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import66 from '../../../scripts/components/mapRouter.component';
import * as import67 from '../../../scripts/components/cityWeatherSectionRouter.component';
import * as import68 from '../../../scripts/components/myCityWeatherDetailsRouter.component';
import * as import69 from '../../../scripts/components/weatherDetails.component';
import * as import70 from '../../../scripts/components/pageNotFound.component';
import * as import71 from '@angular/common/src/location/platform_location';
import * as import72 from '@angular/common/src/location/location_strategy';
import * as import73 from '@angular/router/src/url_handling_strategy';
import * as import74 from '../../../scripts/reducers/CoordinateReducer';
import * as import75 from '../../../scripts/reducers/LoadingReducer';
import * as import76 from '../../../scripts/reducers/WeatherListReducer';
import * as import77 from '@ngrx/effects/src/bootstrap-listener';
import * as import78 from '@angular/router/src/router';
import * as import79 from '@angular/core/src/console';
import * as import80 from '@angular/core/src/i18n/tokens';
import * as import81 from '@angular/core/src/error_handler';
import * as import82 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import83 from '@angular/platform-browser/src/dom/animation_driver';
import * as import84 from '@angular/core/src/render/api';
import * as import85 from '@angular/core/src/security';
import * as import86 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import87 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import88 from '@angular/router/src/router_config_loader';
import * as import89 from '@angular/http/src/interfaces';
import * as import90 from '@angular/http/src/http';
import * as import91 from '@angular/core/src/linker/ng_module_factory_loader';
import * as import92 from '@angular/router/src/router_state';
import * as import93 from '@ngrx/store/src/reducer';
import * as import94 from '@ngrx/store/src/state';
import * as import95 from '@ngrx/store/src/store';
class AppModuleInjector extends import0.NgModuleInjector<import1.AppModule> {
  _CommonModule_0:import2.CommonModule;
  _ApplicationModule_1:import3.ApplicationModule;
  _BrowserModule_2:import4.BrowserModule;
  _InternalFormsSharedModule_3:import5.InternalFormsSharedModule;
  _FormsModule_4:import6.FormsModule;
  _ReactiveFormsModule_5:import6.ReactiveFormsModule;
  _FooterModule_6:import7.FooterModule;
  _SharedModule_7:import8.SharedModule;
  _ROUTER_FORROOT_GUARD_8:any;
  _RouterModule_9:import9.RouterModule;
  _HeaderModule_10:import10.HeaderModule;
  _LoaderModule_11:import11.LoaderModule;
  _MapModule_12:import12.MapModule;
  _HttpModule_13:import13.HttpModule;
  _WeatherModule_14:import14.WeatherModule;
  _RoutingModule_15:import15.RoutingModule;
  _StoreModule_16:import16.StoreModule;
  _EffectsModule_17:import17.EffectsModule;
  _AppModule_18:import1.AppModule;
  __LOCALE_ID_19:any;
  __NgLocalization_20:import18.NgLocaleLocalization;
  _ErrorHandler_21:any;
  _ApplicationInitStatus_22:import19.ApplicationInitStatus;
  _Testability_23:import20.Testability;
  _ApplicationRef__24:import21.ApplicationRef_;
  __ApplicationRef_25:any;
  __Compiler_26:import22.Compiler;
  __APP_ID_27:any;
  __DOCUMENT_28:any;
  __HAMMER_GESTURE_CONFIG_29:import23.HammerGestureConfig;
  __EVENT_MANAGER_PLUGINS_30:any[];
  __EventManager_31:import24.EventManager;
  __DomSharedStylesHost_32:import25.DomSharedStylesHost;
  __AnimationDriver_33:any;
  __DomRootRenderer_34:import26.DomRootRenderer_;
  __RootRenderer_35:any;
  __DomSanitizer_36:import27.DomSanitizerImpl;
  __Sanitizer_37:any;
  __ViewUtils_38:import28.ViewUtils;
  __IterableDiffers_39:any;
  __KeyValueDiffers_40:any;
  __SharedStylesHost_41:any;
  __Title_42:import29.Title;
  __RadioControlRegistry_43:import30.RadioControlRegistry;
  __FormBuilder_44:import31.FormBuilder;
  __ROUTES_45:any[];
  __BrowserXhr_46:import32.BrowserXhr;
  __ResponseOptions_47:import33.BaseResponseOptions;
  __XSRFStrategy_48:any;
  __XHRBackend_49:import34.XHRBackend;
  __RequestOptions_50:import35.BaseRequestOptions;
  __Http_51:any;
  __WeatherDTOtoWeatherConverter_52:import36.WeatherDTOtoWeatherConverter;
  __WeatherApiService_53:import37.WeatherApiService;
  __WeatherActions_54:import38.WeatherActions;
  __UrlSerializer_55:import39.DefaultUrlSerializer;
  __RouterOutletMap_56:import40.RouterOutletMap;
  __ROUTER_CONFIGURATION_57:any;
  __LocationStrategy_58:any;
  __Location_59:import41.Location;
  __NgModuleFactoryLoader_60:import42.SystemJsNgModuleLoader;
  __Router_61:any;
  __WeatherDetailsResolver_62:import43.WeatherDetailsResolver;
  __ActivatedRoute_63:any;
  _NoPreloading_64:import44.NoPreloading;
  _PreloadingStrategy_65:any;
  _RouterPreloader_66:import44.RouterPreloader;
  __PreloadAllModules_67:import44.PreloadAllModules;
  __ROUTER_INITIALIZER_68:any;
  __Dispatcher_69:import45.Dispatcher;
  ___INITIAL_REDUCER_70:any;
  __INITIAL_REDUCER_71:any;
  __Reducer_72:any;
  ___INITIAL_STATE_73:any;
  __INITIAL_STATE_74:any;
  __State_75:any;
  __Store_76:any;
  __Actions_77:import46.Actions;
  __CoordinateActions_78:import47.CoordinateActions;
  __LoadingActions_79:import48.LoadingActions;
  __LocationService_80:import49.LocationService;
  __LoggerService_81:import50.LoggerService;
  __CoordinateEffects_82:import51.CoordinateEffects;
  __effects_83:any[];
  _EffectsSubscription_84:import52.EffectsSubscription;
  __APP_BOOTSTRAP_LISTENER_85:any[];
  __Profiler_86:import53.Profiler;
  constructor(parent:import54.Injector) {
    super(parent,[
      import55.MapRouterComponentNgFactory,
      import56.CityWeatherSectionRouterComponentNgFactory,
      import57.MyCityWeatherDetailsRouterComponentNgFactory,
      import58.WeatherDetailsComponentNgFactory,
      import59.PageNotFoundComponentNgFactory,
      import60.AppComponentNgFactory
    ]
    ,[import60.AppComponentNgFactory]);
  }
  get _LOCALE_ID_19():any {
    if ((this.__LOCALE_ID_19 == null)) { (this.__LOCALE_ID_19 = 'en-US'); }
    return this.__LOCALE_ID_19;
  }
  get _NgLocalization_20():import18.NgLocaleLocalization {
    if ((this.__NgLocalization_20 == null)) { (this.__NgLocalization_20 = new import18.NgLocaleLocalization(this._LOCALE_ID_19)); }
    return this.__NgLocalization_20;
  }
  get _ApplicationRef_25():any {
    if ((this.__ApplicationRef_25 == null)) { (this.__ApplicationRef_25 = this._ApplicationRef__24); }
    return this.__ApplicationRef_25;
  }
  get _Compiler_26():import22.Compiler {
    if ((this.__Compiler_26 == null)) { (this.__Compiler_26 = new import22.Compiler()); }
    return this.__Compiler_26;
  }
  get _APP_ID_27():any {
    if ((this.__APP_ID_27 == null)) { (this.__APP_ID_27 = import61._appIdRandomProviderFactory()); }
    return this.__APP_ID_27;
  }
  get _DOCUMENT_28():any {
    if ((this.__DOCUMENT_28 == null)) { (this.__DOCUMENT_28 = import4._document()); }
    return this.__DOCUMENT_28;
  }
  get _HAMMER_GESTURE_CONFIG_29():import23.HammerGestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_29 == null)) { (this.__HAMMER_GESTURE_CONFIG_29 = new import23.HammerGestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_29;
  }
  get _EVENT_MANAGER_PLUGINS_30():any[] {
    if ((this.__EVENT_MANAGER_PLUGINS_30 == null)) { (this.__EVENT_MANAGER_PLUGINS_30 = [
      new import62.DomEventsPlugin(),
      new import63.KeyEventsPlugin(),
      new import23.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_29)
    ]
    ); }
    return this.__EVENT_MANAGER_PLUGINS_30;
  }
  get _EventManager_31():import24.EventManager {
    if ((this.__EventManager_31 == null)) { (this.__EventManager_31 = new import24.EventManager(this._EVENT_MANAGER_PLUGINS_30,this.parent.get(import64.NgZone))); }
    return this.__EventManager_31;
  }
  get _DomSharedStylesHost_32():import25.DomSharedStylesHost {
    if ((this.__DomSharedStylesHost_32 == null)) { (this.__DomSharedStylesHost_32 = new import25.DomSharedStylesHost(this._DOCUMENT_28)); }
    return this.__DomSharedStylesHost_32;
  }
  get _AnimationDriver_33():any {
    if ((this.__AnimationDriver_33 == null)) { (this.__AnimationDriver_33 = import4._resolveDefaultAnimationDriver()); }
    return this.__AnimationDriver_33;
  }
  get _DomRootRenderer_34():import26.DomRootRenderer_ {
    if ((this.__DomRootRenderer_34 == null)) { (this.__DomRootRenderer_34 = new import26.DomRootRenderer_(this._DOCUMENT_28,this._EventManager_31,this._DomSharedStylesHost_32,this._AnimationDriver_33,this._APP_ID_27)); }
    return this.__DomRootRenderer_34;
  }
  get _RootRenderer_35():any {
    if ((this.__RootRenderer_35 == null)) { (this.__RootRenderer_35 = import65._createConditionalRootRenderer(this._DomRootRenderer_34,this.parent.get(import65.NgProbeToken,(null as any)))); }
    return this.__RootRenderer_35;
  }
  get _DomSanitizer_36():import27.DomSanitizerImpl {
    if ((this.__DomSanitizer_36 == null)) { (this.__DomSanitizer_36 = new import27.DomSanitizerImpl()); }
    return this.__DomSanitizer_36;
  }
  get _Sanitizer_37():any {
    if ((this.__Sanitizer_37 == null)) { (this.__Sanitizer_37 = this._DomSanitizer_36); }
    return this.__Sanitizer_37;
  }
  get _ViewUtils_38():import28.ViewUtils {
    if ((this.__ViewUtils_38 == null)) { (this.__ViewUtils_38 = new import28.ViewUtils(this._RootRenderer_35,this._Sanitizer_37)); }
    return this.__ViewUtils_38;
  }
  get _IterableDiffers_39():any {
    if ((this.__IterableDiffers_39 == null)) { (this.__IterableDiffers_39 = import3._iterableDiffersFactory()); }
    return this.__IterableDiffers_39;
  }
  get _KeyValueDiffers_40():any {
    if ((this.__KeyValueDiffers_40 == null)) { (this.__KeyValueDiffers_40 = import3._keyValueDiffersFactory()); }
    return this.__KeyValueDiffers_40;
  }
  get _SharedStylesHost_41():any {
    if ((this.__SharedStylesHost_41 == null)) { (this.__SharedStylesHost_41 = this._DomSharedStylesHost_32); }
    return this.__SharedStylesHost_41;
  }
  get _Title_42():import29.Title {
    if ((this.__Title_42 == null)) { (this.__Title_42 = new import29.Title()); }
    return this.__Title_42;
  }
  get _RadioControlRegistry_43():import30.RadioControlRegistry {
    if ((this.__RadioControlRegistry_43 == null)) { (this.__RadioControlRegistry_43 = new import30.RadioControlRegistry()); }
    return this.__RadioControlRegistry_43;
  }
  get _FormBuilder_44():import31.FormBuilder {
    if ((this.__FormBuilder_44 == null)) { (this.__FormBuilder_44 = new import31.FormBuilder()); }
    return this.__FormBuilder_44;
  }
  get _ROUTES_45():any[] {
    if ((this.__ROUTES_45 == null)) { (this.__ROUTES_45 = [
        [{
          path: 'map',
          component: import66.MapRouterComponent
        }
      ],
      [
        {
          path: 'weather-list',
          component: import67.CityWeatherSectionRouterComponent
        }
        ,
        {
          path: 'myCityDetails',
          component: import68.MyCityWeatherDetailsRouterComponent,
          outlet: 'myCityWeather'
        }
        ,
        {
          path: 'weatherDetails',
            children: [{
              path: ':id',
              component: import69.WeatherDetailsComponent,
              resolve: {weather: import43.WeatherDetailsResolver}
            }
          ]
        }
        ,
        {
          path: 'map',
          loadChildren: './map.module#MapModule'
        }
        ,
        {
          path: '',
          redirectTo: '/weather-list',
          pathMatch: 'full'
        }
        ,
        {
          path: '**',
          component: import70.PageNotFoundComponent
        }

      ]

    ]
    ); }
    return this.__ROUTES_45;
  }
  get _BrowserXhr_46():import32.BrowserXhr {
    if ((this.__BrowserXhr_46 == null)) { (this.__BrowserXhr_46 = new import32.BrowserXhr()); }
    return this.__BrowserXhr_46;
  }
  get _ResponseOptions_47():import33.BaseResponseOptions {
    if ((this.__ResponseOptions_47 == null)) { (this.__ResponseOptions_47 = new import33.BaseResponseOptions()); }
    return this.__ResponseOptions_47;
  }
  get _XSRFStrategy_48():any {
    if ((this.__XSRFStrategy_48 == null)) { (this.__XSRFStrategy_48 = import13._createDefaultCookieXSRFStrategy()); }
    return this.__XSRFStrategy_48;
  }
  get _XHRBackend_49():import34.XHRBackend {
    if ((this.__XHRBackend_49 == null)) { (this.__XHRBackend_49 = new import34.XHRBackend(this._BrowserXhr_46,this._ResponseOptions_47,this._XSRFStrategy_48)); }
    return this.__XHRBackend_49;
  }
  get _RequestOptions_50():import35.BaseRequestOptions {
    if ((this.__RequestOptions_50 == null)) { (this.__RequestOptions_50 = new import35.BaseRequestOptions()); }
    return this.__RequestOptions_50;
  }
  get _Http_51():any {
    if ((this.__Http_51 == null)) { (this.__Http_51 = import13.httpFactory(this._XHRBackend_49,this._RequestOptions_50)); }
    return this.__Http_51;
  }
  get _WeatherDTOtoWeatherConverter_52():import36.WeatherDTOtoWeatherConverter {
    if ((this.__WeatherDTOtoWeatherConverter_52 == null)) { (this.__WeatherDTOtoWeatherConverter_52 = new import36.WeatherDTOtoWeatherConverter()); }
    return this.__WeatherDTOtoWeatherConverter_52;
  }
  get _WeatherApiService_53():import37.WeatherApiService {
    if ((this.__WeatherApiService_53 == null)) { (this.__WeatherApiService_53 = new import37.WeatherApiService(this._WeatherDTOtoWeatherConverter_52,this._Http_51)); }
    return this.__WeatherApiService_53;
  }
  get _WeatherActions_54():import38.WeatherActions {
    if ((this.__WeatherActions_54 == null)) { (this.__WeatherActions_54 = new import38.WeatherActions()); }
    return this.__WeatherActions_54;
  }
  get _UrlSerializer_55():import39.DefaultUrlSerializer {
    if ((this.__UrlSerializer_55 == null)) { (this.__UrlSerializer_55 = new import39.DefaultUrlSerializer()); }
    return this.__UrlSerializer_55;
  }
  get _RouterOutletMap_56():import40.RouterOutletMap {
    if ((this.__RouterOutletMap_56 == null)) { (this.__RouterOutletMap_56 = new import40.RouterOutletMap()); }
    return this.__RouterOutletMap_56;
  }
  get _ROUTER_CONFIGURATION_57():any {
    if ((this.__ROUTER_CONFIGURATION_57 == null)) { (this.__ROUTER_CONFIGURATION_57 = {useHash: true}); }
    return this.__ROUTER_CONFIGURATION_57;
  }
  get _LocationStrategy_58():any {
    if ((this.__LocationStrategy_58 == null)) { (this.__LocationStrategy_58 = import9.provideLocationStrategy(this.parent.get(import71.PlatformLocation),this.parent.get(import72.APP_BASE_HREF,(null as any)),this._ROUTER_CONFIGURATION_57)); }
    return this.__LocationStrategy_58;
  }
  get _Location_59():import41.Location {
    if ((this.__Location_59 == null)) { (this.__Location_59 = new import41.Location(this._LocationStrategy_58)); }
    return this.__Location_59;
  }
  get _NgModuleFactoryLoader_60():import42.SystemJsNgModuleLoader {
    if ((this.__NgModuleFactoryLoader_60 == null)) { (this.__NgModuleFactoryLoader_60 = new import42.SystemJsNgModuleLoader(this._Compiler_26,this.parent.get(import42.SystemJsNgModuleLoaderConfig,(null as any)))); }
    return this.__NgModuleFactoryLoader_60;
  }
  get _Router_61():any {
    if ((this.__Router_61 == null)) { (this.__Router_61 = import9.setupRouter(this._ApplicationRef_25,this._UrlSerializer_55,this._RouterOutletMap_56,this._Location_59,this,this._NgModuleFactoryLoader_60,this._Compiler_26,this._ROUTES_45,this._ROUTER_CONFIGURATION_57,this.parent.get(import73.UrlHandlingStrategy,(null as any)))); }
    return this.__Router_61;
  }
  get _WeatherDetailsResolver_62():import43.WeatherDetailsResolver {
    if ((this.__WeatherDetailsResolver_62 == null)) { (this.__WeatherDetailsResolver_62 = new import43.WeatherDetailsResolver(this._WeatherApiService_53,this._Router_61)); }
    return this.__WeatherDetailsResolver_62;
  }
  get _ActivatedRoute_63():any {
    if ((this.__ActivatedRoute_63 == null)) { (this.__ActivatedRoute_63 = import9.rootRoute(this._Router_61)); }
    return this.__ActivatedRoute_63;
  }
  get _PreloadAllModules_67():import44.PreloadAllModules {
    if ((this.__PreloadAllModules_67 == null)) { (this.__PreloadAllModules_67 = new import44.PreloadAllModules()); }
    return this.__PreloadAllModules_67;
  }
  get _ROUTER_INITIALIZER_68():any {
    if ((this.__ROUTER_INITIALIZER_68 == null)) { (this.__ROUTER_INITIALIZER_68 = import9.initialRouterNavigation(this._Router_61,this._ApplicationRef_25,this._RouterPreloader_66,this._ROUTER_CONFIGURATION_57)); }
    return this.__ROUTER_INITIALIZER_68;
  }
  get _Dispatcher_69():import45.Dispatcher {
    if ((this.__Dispatcher_69 == null)) { (this.__Dispatcher_69 = new import45.Dispatcher()); }
    return this.__Dispatcher_69;
  }
  get __INITIAL_REDUCER_70():any {
    if ((this.___INITIAL_REDUCER_70 == null)) { (this.___INITIAL_REDUCER_70 = {
      coordinate: import74.CoordinateReducer,
      loading: import75.LoadingReducer,
      weatherList: import76.WeatherListReducer
    }
    ); }
    return this.___INITIAL_REDUCER_70;
  }
  get _INITIAL_REDUCER_71():any {
    if ((this.__INITIAL_REDUCER_71 == null)) { (this.__INITIAL_REDUCER_71 = import16._initialReducerFactory(this.__INITIAL_REDUCER_70)); }
    return this.__INITIAL_REDUCER_71;
  }
  get _Reducer_72():any {
    if ((this.__Reducer_72 == null)) { (this.__Reducer_72 = import16._reducerFactory(this._Dispatcher_69,this._INITIAL_REDUCER_71)); }
    return this.__Reducer_72;
  }
  get __INITIAL_STATE_73():any {
    if ((this.___INITIAL_STATE_73 == null)) { (this.___INITIAL_STATE_73 = (undefined as any)); }
    return this.___INITIAL_STATE_73;
  }
  get _INITIAL_STATE_74():any {
    if ((this.__INITIAL_STATE_74 == null)) { (this.__INITIAL_STATE_74 = import16._initialStateFactory(this.__INITIAL_STATE_73,this._INITIAL_REDUCER_71)); }
    return this.__INITIAL_STATE_74;
  }
  get _State_75():any {
    if ((this.__State_75 == null)) { (this.__State_75 = import16._stateFactory(this._INITIAL_STATE_74,this._Dispatcher_69,this._Reducer_72)); }
    return this.__State_75;
  }
  get _Store_76():any {
    if ((this.__Store_76 == null)) { (this.__Store_76 = import16._storeFactory(this._Dispatcher_69,this._Reducer_72,this._State_75)); }
    return this.__Store_76;
  }
  get _Actions_77():import46.Actions {
    if ((this.__Actions_77 == null)) { (this.__Actions_77 = new import46.Actions(this._Dispatcher_69)); }
    return this.__Actions_77;
  }
  get _CoordinateActions_78():import47.CoordinateActions {
    if ((this.__CoordinateActions_78 == null)) { (this.__CoordinateActions_78 = new import47.CoordinateActions()); }
    return this.__CoordinateActions_78;
  }
  get _LoadingActions_79():import48.LoadingActions {
    if ((this.__LoadingActions_79 == null)) { (this.__LoadingActions_79 = new import48.LoadingActions()); }
    return this.__LoadingActions_79;
  }
  get _LocationService_80():import49.LocationService {
    if ((this.__LocationService_80 == null)) { (this.__LocationService_80 = new import49.LocationService()); }
    return this.__LocationService_80;
  }
  get _LoggerService_81():import50.LoggerService {
    if ((this.__LoggerService_81 == null)) { (this.__LoggerService_81 = new import50.LoggerService()); }
    return this.__LoggerService_81;
  }
  get _CoordinateEffects_82():import51.CoordinateEffects {
    if ((this.__CoordinateEffects_82 == null)) { (this.__CoordinateEffects_82 = new import51.CoordinateEffects(this._Actions_77,this._CoordinateActions_78,this._LoadingActions_79,this._LocationService_80,this._LoggerService_81)); }
    return this.__CoordinateEffects_82;
  }
  get _effects_83():any[] {
    if ((this.__effects_83 == null)) { (this.__effects_83 = [this._CoordinateEffects_82]); }
    return this.__effects_83;
  }
  get _APP_BOOTSTRAP_LISTENER_85():any[] {
    if ((this.__APP_BOOTSTRAP_LISTENER_85 == null)) { (this.__APP_BOOTSTRAP_LISTENER_85 = [
      this._ROUTER_INITIALIZER_68,
      import77.runAfterBootstrapEffects(this,this._EffectsSubscription_84)
    ]
    ); }
    return this.__APP_BOOTSTRAP_LISTENER_85;
  }
  get _Profiler_86():import53.Profiler {
    if ((this.__Profiler_86 == null)) { (this.__Profiler_86 = new import53.Profiler(this._LoggerService_81)); }
    return this.__Profiler_86;
  }
  createInternal():import1.AppModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._ApplicationModule_1 = new import3.ApplicationModule();
    this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule,(null as any)));
    this._InternalFormsSharedModule_3 = new import5.InternalFormsSharedModule();
    this._FormsModule_4 = new import6.FormsModule();
    this._ReactiveFormsModule_5 = new import6.ReactiveFormsModule();
    this._FooterModule_6 = new import7.FooterModule();
    this._SharedModule_7 = new import8.SharedModule();
    this._ROUTER_FORROOT_GUARD_8 = import9.provideForRootGuard(this.parent.get(import78.Router,(null as any)));
    this._RouterModule_9 = new import9.RouterModule(this._ROUTER_FORROOT_GUARD_8);
    this._HeaderModule_10 = new import10.HeaderModule();
    this._LoaderModule_11 = new import11.LoaderModule();
    this._MapModule_12 = new import12.MapModule();
    this._HttpModule_13 = new import13.HttpModule();
    this._WeatherModule_14 = new import14.WeatherModule();
    this._RoutingModule_15 = new import15.RoutingModule();
    this._StoreModule_16 = new import16.StoreModule();
    this._EffectsModule_17 = new import17.EffectsModule();
    this._AppModule_18 = new import1.AppModule();
    this._ErrorHandler_21 = import4.errorHandler();
    this._ApplicationInitStatus_22 = new import19.ApplicationInitStatus(this.parent.get(import19.APP_INITIALIZER,(null as any)));
    this._Testability_23 = new import20.Testability(this.parent.get(import64.NgZone));
    this._ApplicationRef__24 = new import21.ApplicationRef_(this.parent.get(import64.NgZone),this.parent.get(import79.Console),this,this._ErrorHandler_21,this,this._ApplicationInitStatus_22,this.parent.get(import20.TestabilityRegistry,(null as any)),this._Testability_23);
    this._NoPreloading_64 = new import44.NoPreloading();
    this._PreloadingStrategy_65 = this._NoPreloading_64;
    this._RouterPreloader_66 = new import44.RouterPreloader(this._Router_61,this._NgModuleFactoryLoader_60,this._Compiler_26,this,this._PreloadingStrategy_65);
    this._EffectsSubscription_84 = new import52.EffectsSubscription(this._Store_76,this.parent.get(import52.EffectsSubscription,(null as any)),this._effects_83);
    return this._AppModule_18;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.ApplicationModule)) { return this._ApplicationModule_1; }
    if ((token === import4.BrowserModule)) { return this._BrowserModule_2; }
    if ((token === import5.InternalFormsSharedModule)) { return this._InternalFormsSharedModule_3; }
    if ((token === import6.FormsModule)) { return this._FormsModule_4; }
    if ((token === import6.ReactiveFormsModule)) { return this._ReactiveFormsModule_5; }
    if ((token === import7.FooterModule)) { return this._FooterModule_6; }
    if ((token === import8.SharedModule)) { return this._SharedModule_7; }
    if ((token === import9.ROUTER_FORROOT_GUARD)) { return this._ROUTER_FORROOT_GUARD_8; }
    if ((token === import9.RouterModule)) { return this._RouterModule_9; }
    if ((token === import10.HeaderModule)) { return this._HeaderModule_10; }
    if ((token === import11.LoaderModule)) { return this._LoaderModule_11; }
    if ((token === import12.MapModule)) { return this._MapModule_12; }
    if ((token === import13.HttpModule)) { return this._HttpModule_13; }
    if ((token === import14.WeatherModule)) { return this._WeatherModule_14; }
    if ((token === import15.RoutingModule)) { return this._RoutingModule_15; }
    if ((token === import16.StoreModule)) { return this._StoreModule_16; }
    if ((token === import17.EffectsModule)) { return this._EffectsModule_17; }
    if ((token === import1.AppModule)) { return this._AppModule_18; }
    if ((token === import80.LOCALE_ID)) { return this._LOCALE_ID_19; }
    if ((token === import18.NgLocalization)) { return this._NgLocalization_20; }
    if ((token === import81.ErrorHandler)) { return this._ErrorHandler_21; }
    if ((token === import19.ApplicationInitStatus)) { return this._ApplicationInitStatus_22; }
    if ((token === import20.Testability)) { return this._Testability_23; }
    if ((token === import21.ApplicationRef_)) { return this._ApplicationRef__24; }
    if ((token === import21.ApplicationRef)) { return this._ApplicationRef_25; }
    if ((token === import22.Compiler)) { return this._Compiler_26; }
    if ((token === import61.APP_ID)) { return this._APP_ID_27; }
    if ((token === import82.DOCUMENT)) { return this._DOCUMENT_28; }
    if ((token === import23.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_29; }
    if ((token === import24.EVENT_MANAGER_PLUGINS)) { return this._EVENT_MANAGER_PLUGINS_30; }
    if ((token === import24.EventManager)) { return this._EventManager_31; }
    if ((token === import25.DomSharedStylesHost)) { return this._DomSharedStylesHost_32; }
    if ((token === import83.AnimationDriver)) { return this._AnimationDriver_33; }
    if ((token === import26.DomRootRenderer)) { return this._DomRootRenderer_34; }
    if ((token === import84.RootRenderer)) { return this._RootRenderer_35; }
    if ((token === import27.DomSanitizer)) { return this._DomSanitizer_36; }
    if ((token === import85.Sanitizer)) { return this._Sanitizer_37; }
    if ((token === import28.ViewUtils)) { return this._ViewUtils_38; }
    if ((token === import86.IterableDiffers)) { return this._IterableDiffers_39; }
    if ((token === import87.KeyValueDiffers)) { return this._KeyValueDiffers_40; }
    if ((token === import25.SharedStylesHost)) { return this._SharedStylesHost_41; }
    if ((token === import29.Title)) { return this._Title_42; }
    if ((token === import30.RadioControlRegistry)) { return this._RadioControlRegistry_43; }
    if ((token === import31.FormBuilder)) { return this._FormBuilder_44; }
    if ((token === import88.ROUTES)) { return this._ROUTES_45; }
    if ((token === import32.BrowserXhr)) { return this._BrowserXhr_46; }
    if ((token === import33.ResponseOptions)) { return this._ResponseOptions_47; }
    if ((token === import89.XSRFStrategy)) { return this._XSRFStrategy_48; }
    if ((token === import34.XHRBackend)) { return this._XHRBackend_49; }
    if ((token === import35.RequestOptions)) { return this._RequestOptions_50; }
    if ((token === import90.Http)) { return this._Http_51; }
    if ((token === import36.WeatherDTOtoWeatherConverter)) { return this._WeatherDTOtoWeatherConverter_52; }
    if ((token === import37.WeatherApiService)) { return this._WeatherApiService_53; }
    if ((token === import38.WeatherActions)) { return this._WeatherActions_54; }
    if ((token === import39.UrlSerializer)) { return this._UrlSerializer_55; }
    if ((token === import40.RouterOutletMap)) { return this._RouterOutletMap_56; }
    if ((token === import9.ROUTER_CONFIGURATION)) { return this._ROUTER_CONFIGURATION_57; }
    if ((token === import72.LocationStrategy)) { return this._LocationStrategy_58; }
    if ((token === import41.Location)) { return this._Location_59; }
    if ((token === import91.NgModuleFactoryLoader)) { return this._NgModuleFactoryLoader_60; }
    if ((token === import78.Router)) { return this._Router_61; }
    if ((token === import43.WeatherDetailsResolver)) { return this._WeatherDetailsResolver_62; }
    if ((token === import92.ActivatedRoute)) { return this._ActivatedRoute_63; }
    if ((token === import44.NoPreloading)) { return this._NoPreloading_64; }
    if ((token === import44.PreloadingStrategy)) { return this._PreloadingStrategy_65; }
    if ((token === import44.RouterPreloader)) { return this._RouterPreloader_66; }
    if ((token === import44.PreloadAllModules)) { return this._PreloadAllModules_67; }
    if ((token === import9.ROUTER_INITIALIZER)) { return this._ROUTER_INITIALIZER_68; }
    if ((token === import45.Dispatcher)) { return this._Dispatcher_69; }
    if ((token === import16._INITIAL_REDUCER)) { return this.__INITIAL_REDUCER_70; }
    if ((token === import16.INITIAL_REDUCER)) { return this._INITIAL_REDUCER_71; }
    if ((token === import93.Reducer)) { return this._Reducer_72; }
    if ((token === import16._INITIAL_STATE)) { return this.__INITIAL_STATE_73; }
    if ((token === import16.INITIAL_STATE)) { return this._INITIAL_STATE_74; }
    if ((token === import94.State)) { return this._State_75; }
    if ((token === import95.Store)) { return this._Store_76; }
    if ((token === import46.Actions)) { return this._Actions_77; }
    if ((token === import47.CoordinateActions)) { return this._CoordinateActions_78; }
    if ((token === import48.LoadingActions)) { return this._LoadingActions_79; }
    if ((token === import49.LocationService)) { return this._LocationService_80; }
    if ((token === import50.LoggerService)) { return this._LoggerService_81; }
    if ((token === import51.CoordinateEffects)) { return this._CoordinateEffects_82; }
    if ((token === import52.effects)) { return this._effects_83; }
    if ((token === import52.EffectsSubscription)) { return this._EffectsSubscription_84; }
    if ((token === import61.APP_BOOTSTRAP_LISTENER)) { return this._APP_BOOTSTRAP_LISTENER_85; }
    if ((token === import53.Profiler)) { return this._Profiler_86; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._ApplicationRef__24.ngOnDestroy();
    this._RouterPreloader_66.ngOnDestroy();
    this._EffectsSubscription_84.ngOnDestroy();
  }
}
export const AppModuleNgFactory:import0.NgModuleFactory<import1.AppModule> = new import0.NgModuleFactory(AppModuleInjector,import1.AppModule);