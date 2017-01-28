/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../scripts/components/cityForm.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/change_detection';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../css/weatherTable.css.shim';
import * as import9 from '../../node_modules/@angular/forms/src/directives/ng_form.ngfactory';
import * as import10 from '../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import11 from '../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import12 from '../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import13 from '@angular/core/src/linker/element_ref';
import * as import14 from '@angular/forms/src/directives/default_value_accessor';
import * as import15 from '@angular/forms/src/directives/control_value_accessor';
import * as import16 from '@angular/forms/src/directives/ng_model';
import * as import17 from '@angular/forms/src/directives/ng_control';
import * as import18 from '@angular/forms/src/directives/ng_control_status';
import * as import19 from '@angular/forms/src/directives/ng_form';
import * as import20 from '@angular/forms/src/directives/control_container';
export class Wrapper_CityFormComponent {
  /*private*/ _eventHandler:Function;
  context:import0.CityFormComponent;
  /*private*/ _changed:boolean;
  subscription0:any;
  constructor() {
    this._changed = false;
    this.context = new import0.CityFormComponent();
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any,emit0:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.addNotify.subscribe(_eventHandler.bind(view,'addNotify'))); }
  }
}
var renderType_CityFormComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_CityFormComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.CityFormComponent>;
  _CityFormComponent_0_3:Wrapper_CityFormComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_CityFormComponent_Host0,renderType_CityFormComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'city-form',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_CityFormComponent0(this.viewUtils,this,0,this._el_0);
    this._CityFormComponent_0_3 = new Wrapper_CityFormComponent();
    this.compView_0.create(this._CityFormComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._CityFormComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.CityFormComponent) && (0 === requestNodeIndex))) { return this._CityFormComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._CityFormComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._CityFormComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const CityFormComponentNgFactory:import7.ComponentFactory<import0.CityFormComponent> = new import7.ComponentFactory<import0.CityFormComponent>('city-form',View_CityFormComponent_Host0,import0.CityFormComponent);
const styles_CityFormComponent:any[] = [import8.styles];
var renderType_CityFormComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.Emulated,styles_CityFormComponent,{});
export class View_CityFormComponent0 extends import1.AppView<import0.CityFormComponent> {
  _el_0:any;
  _NgForm_0_3:import9.Wrapper_NgForm;
  _ControlContainer_0_4:any;
  _NgControlStatusGroup_0_5:import10.Wrapper_NgControlStatusGroup;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _DefaultValueAccessor_5_3:import11.Wrapper_DefaultValueAccessor;
  _NG_VALUE_ACCESSOR_5_4:any[];
  _NgModel_5_5:import12.Wrapper_NgModel;
  _NgControl_5_6:any;
  _NgControlStatus_5_7:import10.Wrapper_NgControlStatus;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _text_9:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_CityFormComponent0,renderType_CityFormComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckOnce);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'form',new import3.InlineArray2(2,'class','city-form'),(null as any));
    this._NgForm_0_3 = new import9.Wrapper_NgForm((null as any),(null as any));
    this._ControlContainer_0_4 = this._NgForm_0_3.context;
    this._NgControlStatusGroup_0_5 = new import10.Wrapper_NgControlStatusGroup(this._ControlContainer_0_4);
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'label',new import3.InlineArray2(2,'for','city'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'City',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_0,'input',new import3.InlineArray4(4,'name','city','type','text'),(null as any));
    this._DefaultValueAccessor_5_3 = new import11.Wrapper_DefaultValueAccessor(this.renderer,new import13.ElementRef(this._el_5));
    this._NG_VALUE_ACCESSOR_5_4 = [this._DefaultValueAccessor_5_3.context];
    this._NgModel_5_5 = new import12.Wrapper_NgModel(this._ControlContainer_0_4,(null as any),(null as any),this._NG_VALUE_ACCESSOR_5_4);
    this._NgControl_5_6 = this._NgModel_5_5.context;
    this._NgControlStatus_5_7 = new import10.Wrapper_NgControlStatus(this._NgControl_5_6);
    this._text_6 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_7 = import3.createRenderElement(this.renderer,this._el_0,'button',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_8 = this.renderer.createText(this._el_7,'Add',(null as any));
    this._text_9 = this.renderer.createText(this._el_0,'\n',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray4(4,'submit',(null as any),'reset',(null as any)),this.eventHandler(this.handleEvent_0));
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_5,new import3.InlineArray8(6,'ngModelChange',(null as any),'input',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_5));
    this._NgModel_5_5.subscribe(this,this.eventHandler(this.handleEvent_5),true);
    var disposable_2:Function = import3.subscribeToRenderElement(this,this._el_7,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_7));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._text_9
    ]
    ),[
      disposable_0,
      disposable_1,
      disposable_2
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.DefaultValueAccessor) && (5 === requestNodeIndex))) { return this._DefaultValueAccessor_5_3.context; }
    if (((token === import15.NG_VALUE_ACCESSOR) && (5 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_5_4; }
    if (((token === import16.NgModel) && (5 === requestNodeIndex))) { return this._NgModel_5_5.context; }
    if (((token === import17.NgControl) && (5 === requestNodeIndex))) { return this._NgControl_5_6; }
    if (((token === import18.NgControlStatus) && (5 === requestNodeIndex))) { return this._NgControlStatus_5_7.context; }
    if (((token === import19.NgForm) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._NgForm_0_3.context; }
    if (((token === import20.ControlContainer) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._ControlContainer_0_4; }
    if (((token === import18.NgControlStatusGroup) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._NgControlStatusGroup_0_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._NgForm_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this._NgControlStatusGroup_0_5.ngDoCheck(this,this._el_0,throwOnChange);
    this._DefaultValueAccessor_5_3.ngDoCheck(this,this._el_5,throwOnChange);
    const currVal_5_1_0:any = 'city';
    this._NgModel_5_5.check_name(currVal_5_1_0,throwOnChange,false);
    const currVal_5_1_1:any = this.context.city;
    this._NgModel_5_5.check_model(currVal_5_1_1,throwOnChange,false);
    this._NgModel_5_5.ngDoCheck(this,this._el_5,throwOnChange);
    this._NgControlStatus_5_7.ngDoCheck(this,this._el_5,throwOnChange);
    this._NgControlStatusGroup_0_5.checkHost(this,this,this._el_0,throwOnChange);
    this._NgControlStatus_5_7.checkHost(this,this,this._el_5,throwOnChange);
  }
  destroyInternal():void {
    this._NgModel_5_5.ngOnDestroy();
    this._NgForm_0_3.ngOnDestroy();
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._NgForm_0_3.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_5(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._DefaultValueAccessor_5_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'ngModelChange')) {
      const pd_sub_0:any = ((<any>(this.context.city = $event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_7(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.add()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}