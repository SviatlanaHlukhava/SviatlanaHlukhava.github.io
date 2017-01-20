/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../scripts/components/header.component';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../css/header.css.shim';
import * as import9 from '@angular/common/src/pipes/number_pipe';
import * as import10 from '@angular/common/src/pipes/date_pipe';
import * as import11 from '@angular/core/src/i18n/tokens';
export class Wrapper_HeaderComponent {
  /*private*/ _eventHandler:Function;
  context:import0.HeaderComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  constructor() {
    this._changed = false;
    this.context = new import0.HeaderComponent();
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  check_latitude(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.latitude = currValue;
      this._expr_0 = currValue;
    }
  }
  check_longitude(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.longitude = currValue;
      this._expr_1 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_HeaderComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_HeaderComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.HeaderComponent>;
  _HeaderComponent_0_3:Wrapper_HeaderComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_HeaderComponent_Host0,renderType_HeaderComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'header',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_HeaderComponent0(this.viewUtils,this,0,this._el_0);
    this._HeaderComponent_0_3 = new Wrapper_HeaderComponent();
    this.compView_0.create(this._HeaderComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._HeaderComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.HeaderComponent) && (0 === requestNodeIndex))) { return this._HeaderComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._HeaderComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const HeaderComponentNgFactory:import7.ComponentFactory<import0.HeaderComponent> = new import7.ComponentFactory<import0.HeaderComponent>('header',View_HeaderComponent_Host0,import0.HeaderComponent);
const styles_HeaderComponent:any[] = [import8.styles];
var renderType_HeaderComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.Emulated,styles_HeaderComponent,{});
export class View_HeaderComponent0 extends import2.AppView<import0.HeaderComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _text_6:any;
  _el_7:any;
  _el_8:any;
  _text_9:any;
  _text_10:any;
  _text_11:any;
  _el_12:any;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _text_16:any;
  /*private*/ _expr_17:any;
  _pipe_number_0:import9.DecimalPipe;
  _pipe_number_0_0:any;
  _pipe_number_0_1:any;
  /*private*/ _expr_21:any;
  _pipe_date_1:import10.DatePipe;
  _pipe_date_1_0:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_HeaderComponent0,renderType_HeaderComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckOnce);
    this._expr_17 = import1.UNINITIALIZED;
    this._expr_21 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','header'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','links'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_2,'div',new import3.InlineArray2(2,'class','logo'),(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'Weather',(null as any));
    this._text_6 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_7 = import3.createRenderElement(this.renderer,this._el_2,'div',new import3.InlineArray2(2,'class','back'),(null as any));
    this._el_8 = import3.createRenderElement(this.renderer,this._el_7,'a',new import3.InlineArray2(2,'href','./../index.html'),(null as any));
    this._text_9 = this.renderer.createText(this._el_8,'Back',(null as any));
    this._text_10 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._text_11 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_12 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','position'),(null as any));
    this._text_13 = this.renderer.createText(this._el_12,'',(null as any));
    this._el_14 = import3.createRenderElement(this.renderer,this._el_12,'br',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_15 = this.renderer.createText(this._el_12,'',(null as any));
    this._text_16 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._pipe_number_0 = new import9.DecimalPipe(this.parentView.injectorGet(import11.LOCALE_ID,this.parentIndex));
    this._pipe_number_0_0 = import3.pureProxy2(this._pipe_number_0.transform.bind(this._pipe_number_0));
    this._pipe_number_0_1 = import3.pureProxy2(this._pipe_number_0.transform.bind(this._pipe_number_0));
    this._pipe_date_1 = new import10.DatePipe(this.parentView.injectorGet(import11.LOCALE_ID,this.parentIndex));
    this._pipe_date_1_0 = import3.pureProxy2(this._pipe_date_1.transform.bind(this._pipe_date_1));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._el_7,
      this._el_8,
      this._text_9,
      this._text_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._text_16
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const valUnwrapper:any = new import1.ValueUnwrapper();
    valUnwrapper.reset();
    const currVal_17:any = import3.inlineInterpolate(2,'\n        Current position: latitude - ',valUnwrapper.unwrap(import3.castByValue(this._pipe_number_0_0,this._pipe_number_0.transform)(this.context.latitude,'1.0-2')),', longitude - ',valUnwrapper.unwrap(import3.castByValue(this._pipe_number_0_1,this._pipe_number_0.transform)(this.context.longitude,'1.0-2')),'\n        ');
    if ((valUnwrapper.hasWrappedValue || import3.checkBinding(throwOnChange,this._expr_17,currVal_17))) {
      this.renderer.setText(this._text_13,currVal_17);
      this._expr_17 = currVal_17;
    }
    valUnwrapper.reset();
    const currVal_21:any = import3.inlineInterpolate(1,'\n        Current date: ',valUnwrapper.unwrap(import3.castByValue(this._pipe_date_1_0,this._pipe_date_1.transform)(this.context.currentDate,'dd/MM/yyyy HH:mm:ss')),'\n    ');
    if ((valUnwrapper.hasWrappedValue || import3.checkBinding(throwOnChange,this._expr_21,currVal_21))) {
      this.renderer.setText(this._text_15,currVal_21);
      this._expr_21 = currVal_21;
    }
  }
}