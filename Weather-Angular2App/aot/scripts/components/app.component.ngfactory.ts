/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../scripts/components/app.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/change_detection';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/core/src/zone/ng_zone';
import * as import9 from '../../../scripts/services/Profiler';
import * as import10 from '@ngrx/store/src/store';
import * as import11 from '../../../scripts/actions/CoordinateActions';
import * as import12 from '../../../scripts/actions/LoadingActions';
import * as import13 from '../../../scripts/services/Location';
import * as import14 from '../../../scripts/services/Logger';
import * as import15 from '../../../scripts/components/loader.component';
import * as import16 from './loader.component.ngfactory';
import * as import17 from '../../../scripts/components/header.component';
import * as import18 from './header.component.ngfactory';
import * as import19 from '@angular/core/src/linker/view_container';
import * as import20 from '../../node_modules/@angular/router/src/directives/router_outlet.ngfactory';
import * as import21 from '../../../scripts/components/footer.component';
import * as import22 from './footer.component.ngfactory';
import * as import23 from '@angular/common/src/pipes/async_pipe';
import * as import24 from '@angular/router/src/router_outlet_map';
import * as import25 from '@angular/core/src/linker/component_factory_resolver';
import * as import26 from '@angular/router/src/directives/router_outlet';
export class Wrapper_AppComponent {
  /*private*/ _eventHandler:Function;
  context:import0.AppComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any,p2:any,p3:any,p4:any,p5:any,p6:any,p7:any) {
    this._changed = false;
    this.context = new import0.AppComponent(p0,p1,p2,p3,p4,p5,p6,p7);
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_AppComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_AppComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.AppComponent>;
  _AppComponent_0_3:Wrapper_AppComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_AppComponent_Host0,renderType_AppComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'app',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_AppComponent0(this.viewUtils,this,0,this._el_0);
    this._AppComponent_0_3 = new Wrapper_AppComponent(this.injectorGet(import8.NgZone,this.parentIndex),this.compView_0.ref,this.injectorGet(import9.Profiler,this.parentIndex),this.injectorGet(import10.Store,this.parentIndex),this.injectorGet(import11.CoordinateActions,this.parentIndex),this.injectorGet(import12.LoadingActions,this.parentIndex),this.injectorGet(import13.LocationService,this.parentIndex),this.injectorGet(import14.LoggerService,this.parentIndex));
    this.compView_0.create(this._AppComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._AppComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.AppComponent) && (0 === requestNodeIndex))) { return this._AppComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._AppComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const AppComponentNgFactory:import7.ComponentFactory<import0.AppComponent> = new import7.ComponentFactory<import0.AppComponent>('app',View_AppComponent_Host0,import0.AppComponent);
const styles_AppComponent:any[] = ([] as any[]);
var renderType_AppComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_AppComponent,{});
export class View_AppComponent0 extends import1.AppView<import0.AppComponent> {
  _el_0:any;
  compView_0:import1.AppView<import15.LoaderComponent>;
  _LoaderComponent_0_3:import16.Wrapper_LoaderComponent;
  _text_1:any;
  _el_2:any;
  compView_2:import1.AppView<import17.HeaderComponent>;
  _HeaderComponent_2_3:import18.Wrapper_HeaderComponent;
  _text_3:any;
  _el_4:any;
  /*private*/ _vc_4:import19.ViewContainer;
  _RouterOutlet_4_5:import20.Wrapper_RouterOutlet;
  _text_5:any;
  _el_6:any;
  /*private*/ _vc_6:import19.ViewContainer;
  _RouterOutlet_6_5:import20.Wrapper_RouterOutlet;
  _text_7:any;
  _el_8:any;
  compView_8:import1.AppView<import21.FooterComponent>;
  _FooterComponent_8_3:import22.Wrapper_FooterComponent;
  _pipe_async_0:import23.AsyncPipe;
  _pipe_async_1:import23.AsyncPipe;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_AppComponent0,renderType_AppComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckOnce);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'loader',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_0 = new import16.View_LoaderComponent0(this.viewUtils,this,0,this._el_0);
    this._LoaderComponent_0_3 = new import16.Wrapper_LoaderComponent();
    this.compView_0.create(this._LoaderComponent_0_3.context);
    this._text_1 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,parentRenderNode,'header',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_2 = new import18.View_HeaderComponent0(this.viewUtils,this,2,this._el_2);
    this._HeaderComponent_2_3 = new import18.Wrapper_HeaderComponent();
    this.compView_2.create(this._HeaderComponent_2_3.context);
    this._text_3 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,parentRenderNode,'router-outlet',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._vc_4 = new import19.ViewContainer(4,(null as any),this,this._el_4);
    this._RouterOutlet_4_5 = new import20.Wrapper_RouterOutlet(this.parentView.injectorGet(import24.RouterOutletMap,this.parentIndex),this._vc_4.vcRef,this.parentView.injectorGet(import25.ComponentFactoryResolver,this.parentIndex),(null as any));
    this._text_5 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,parentRenderNode,'router-outlet',new import3.InlineArray2(2,'name','myCityWeather'),(null as any));
    this._vc_6 = new import19.ViewContainer(6,(null as any),this,this._el_6);
    this._RouterOutlet_6_5 = new import20.Wrapper_RouterOutlet(this.parentView.injectorGet(import24.RouterOutletMap,this.parentIndex),this._vc_6.vcRef,this.parentView.injectorGet(import25.ComponentFactoryResolver,this.parentIndex),'myCityWeather');
    this._text_7 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_8 = import3.createRenderElement(this.renderer,parentRenderNode,'footer',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_8 = new import22.View_FooterComponent0(this.viewUtils,this,8,this._el_8);
    this._FooterComponent_8_3 = new import22.Wrapper_FooterComponent();
    this.compView_8.create(this._FooterComponent_8_3.context);
    this._pipe_async_0 = new import23.AsyncPipe(this.ref);
    this._pipe_async_1 = new import23.AsyncPipe(this.ref);
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._el_8
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import15.LoaderComponent) && (0 === requestNodeIndex))) { return this._LoaderComponent_0_3.context; }
    if (((token === import17.HeaderComponent) && (2 === requestNodeIndex))) { return this._HeaderComponent_2_3.context; }
    if (((token === import26.RouterOutlet) && (4 === requestNodeIndex))) { return this._RouterOutlet_4_5.context; }
    if (((token === import26.RouterOutlet) && (6 === requestNodeIndex))) { return this._RouterOutlet_6_5.context; }
    if (((token === import21.FooterComponent) && (8 === requestNodeIndex))) { return this._FooterComponent_8_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const valUnwrapper:any = new import6.ValueUnwrapper();
    valUnwrapper.reset();
    const currVal_0_0_0:any = valUnwrapper.unwrap(this._pipe_async_0.transform(this.context.isLoading));
    this._LoaderComponent_0_3.check_isLoading(currVal_0_0_0,throwOnChange,valUnwrapper.hasWrappedValue);
    if (this._LoaderComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    valUnwrapper.reset();
    const currVal_2_0_0:any = valUnwrapper.unwrap(this._pipe_async_1.transform(this.context.coordinate));
    this._HeaderComponent_2_3.check_coordinate(currVal_2_0_0,throwOnChange,valUnwrapper.hasWrappedValue);
    if (this._HeaderComponent_2_3.ngDoCheck(this,this._el_2,throwOnChange)) { this.compView_2.markAsCheckOnce(); }
    this._RouterOutlet_4_5.ngDoCheck(this,this._el_4,throwOnChange);
    this._RouterOutlet_6_5.ngDoCheck(this,this._el_6,throwOnChange);
    if (this._FooterComponent_8_3.ngDoCheck(this,this._el_8,throwOnChange)) { this.compView_8.markAsCheckOnce(); }
    this._vc_4.detectChangesInNestedViews(throwOnChange);
    this._vc_6.detectChangesInNestedViews(throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
    this.compView_2.detectChanges(throwOnChange);
    this.compView_8.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_4.destroyNestedViews();
    this._vc_6.destroyNestedViews();
    this.compView_0.destroy();
    this.compView_2.destroy();
    this.compView_8.destroy();
    this._RouterOutlet_4_5.ngOnDestroy();
    this._RouterOutlet_6_5.ngOnDestroy();
    this._pipe_async_0.ngOnDestroy();
    this._pipe_async_1.ngOnDestroy();
  }
}