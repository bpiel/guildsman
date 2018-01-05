// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__82372 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__82373 = null;
var count__82374 = (0);
var i__82375 = (0);
while(true){
if((i__82375 < count__82374)){
var vec__82376 = cljs.core._nth.call(null,chunk__82373,i__82375);
var effect_key = cljs.core.nth.call(null,vec__82376,(0),null);
var effect_value = cljs.core.nth.call(null,vec__82376,(1),null);
var temp__5455__auto___82382 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___82382)){
var effect_fn_82383 = temp__5455__auto___82382;
effect_fn_82383.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__82384 = seq__82372;
var G__82385 = chunk__82373;
var G__82386 = count__82374;
var G__82387 = (i__82375 + (1));
seq__82372 = G__82384;
chunk__82373 = G__82385;
count__82374 = G__82386;
i__82375 = G__82387;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__82372);
if(temp__5457__auto__){
var seq__82372__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__82372__$1)){
var c__75832__auto__ = cljs.core.chunk_first.call(null,seq__82372__$1);
var G__82388 = cljs.core.chunk_rest.call(null,seq__82372__$1);
var G__82389 = c__75832__auto__;
var G__82390 = cljs.core.count.call(null,c__75832__auto__);
var G__82391 = (0);
seq__82372 = G__82388;
chunk__82373 = G__82389;
count__82374 = G__82390;
i__82375 = G__82391;
continue;
} else {
var vec__82379 = cljs.core.first.call(null,seq__82372__$1);
var effect_key = cljs.core.nth.call(null,vec__82379,(0),null);
var effect_value = cljs.core.nth.call(null,vec__82379,(1),null);
var temp__5455__auto___82392 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___82392)){
var effect_fn_82393 = temp__5455__auto___82392;
effect_fn_82393.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__82394 = cljs.core.next.call(null,seq__82372__$1);
var G__82395 = null;
var G__82396 = (0);
var G__82397 = (0);
seq__82372 = G__82394;
chunk__82373 = G__82395;
count__82374 = G__82396;
i__82375 = G__82397;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__82398 = cljs.core.seq.call(null,value);
var chunk__82399 = null;
var count__82400 = (0);
var i__82401 = (0);
while(true){
if((i__82401 < count__82400)){
var map__82402 = cljs.core._nth.call(null,chunk__82399,i__82401);
var map__82402__$1 = ((((!((map__82402 == null)))?((((map__82402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82402.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82402):map__82402);
var effect = map__82402__$1;
var ms = cljs.core.get.call(null,map__82402__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__82402__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__82398,chunk__82399,count__82400,i__82401,map__82402,map__82402__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__82398,chunk__82399,count__82400,i__82401,map__82402,map__82402__$1,effect,ms,dispatch))
,ms);
}

var G__82406 = seq__82398;
var G__82407 = chunk__82399;
var G__82408 = count__82400;
var G__82409 = (i__82401 + (1));
seq__82398 = G__82406;
chunk__82399 = G__82407;
count__82400 = G__82408;
i__82401 = G__82409;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__82398);
if(temp__5457__auto__){
var seq__82398__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__82398__$1)){
var c__75832__auto__ = cljs.core.chunk_first.call(null,seq__82398__$1);
var G__82410 = cljs.core.chunk_rest.call(null,seq__82398__$1);
var G__82411 = c__75832__auto__;
var G__82412 = cljs.core.count.call(null,c__75832__auto__);
var G__82413 = (0);
seq__82398 = G__82410;
chunk__82399 = G__82411;
count__82400 = G__82412;
i__82401 = G__82413;
continue;
} else {
var map__82404 = cljs.core.first.call(null,seq__82398__$1);
var map__82404__$1 = ((((!((map__82404 == null)))?((((map__82404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82404.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__82404):map__82404);
var effect = map__82404__$1;
var ms = cljs.core.get.call(null,map__82404__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__82404__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__82398,chunk__82399,count__82400,i__82401,map__82404,map__82404__$1,effect,ms,dispatch,seq__82398__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__82398,chunk__82399,count__82400,i__82401,map__82404,map__82404__$1,effect,ms,dispatch,seq__82398__$1,temp__5457__auto__))
,ms);
}

var G__82414 = cljs.core.next.call(null,seq__82398__$1);
var G__82415 = null;
var G__82416 = (0);
var G__82417 = (0);
seq__82398 = G__82414;
chunk__82399 = G__82415;
count__82400 = G__82416;
i__82401 = G__82417;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__82418 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__82419 = null;
var count__82420 = (0);
var i__82421 = (0);
while(true){
if((i__82421 < count__82420)){
var event = cljs.core._nth.call(null,chunk__82419,i__82421);
re_frame.router.dispatch.call(null,event);

var G__82422 = seq__82418;
var G__82423 = chunk__82419;
var G__82424 = count__82420;
var G__82425 = (i__82421 + (1));
seq__82418 = G__82422;
chunk__82419 = G__82423;
count__82420 = G__82424;
i__82421 = G__82425;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__82418);
if(temp__5457__auto__){
var seq__82418__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__82418__$1)){
var c__75832__auto__ = cljs.core.chunk_first.call(null,seq__82418__$1);
var G__82426 = cljs.core.chunk_rest.call(null,seq__82418__$1);
var G__82427 = c__75832__auto__;
var G__82428 = cljs.core.count.call(null,c__75832__auto__);
var G__82429 = (0);
seq__82418 = G__82426;
chunk__82419 = G__82427;
count__82420 = G__82428;
i__82421 = G__82429;
continue;
} else {
var event = cljs.core.first.call(null,seq__82418__$1);
re_frame.router.dispatch.call(null,event);

var G__82430 = cljs.core.next.call(null,seq__82418__$1);
var G__82431 = null;
var G__82432 = (0);
var G__82433 = (0);
seq__82418 = G__82430;
chunk__82419 = G__82431;
count__82420 = G__82432;
i__82421 = G__82433;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__82434 = cljs.core.seq.call(null,value);
var chunk__82435 = null;
var count__82436 = (0);
var i__82437 = (0);
while(true){
if((i__82437 < count__82436)){
var event = cljs.core._nth.call(null,chunk__82435,i__82437);
clear_event.call(null,event);

var G__82438 = seq__82434;
var G__82439 = chunk__82435;
var G__82440 = count__82436;
var G__82441 = (i__82437 + (1));
seq__82434 = G__82438;
chunk__82435 = G__82439;
count__82436 = G__82440;
i__82437 = G__82441;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__82434);
if(temp__5457__auto__){
var seq__82434__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__82434__$1)){
var c__75832__auto__ = cljs.core.chunk_first.call(null,seq__82434__$1);
var G__82442 = cljs.core.chunk_rest.call(null,seq__82434__$1);
var G__82443 = c__75832__auto__;
var G__82444 = cljs.core.count.call(null,c__75832__auto__);
var G__82445 = (0);
seq__82434 = G__82442;
chunk__82435 = G__82443;
count__82436 = G__82444;
i__82437 = G__82445;
continue;
} else {
var event = cljs.core.first.call(null,seq__82434__$1);
clear_event.call(null,event);

var G__82446 = cljs.core.next.call(null,seq__82434__$1);
var G__82447 = null;
var G__82448 = (0);
var G__82449 = (0);
seq__82434 = G__82446;
chunk__82435 = G__82447;
count__82436 = G__82448;
i__82437 = G__82449;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1515122952515
