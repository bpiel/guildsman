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
var seq__16527 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__16528 = null;
var count__16529 = (0);
var i__16530 = (0);
while(true){
if((i__16530 < count__16529)){
var vec__16531 = cljs.core._nth.call(null,chunk__16528,i__16530);
var effect_key = cljs.core.nth.call(null,vec__16531,(0),null);
var effect_value = cljs.core.nth.call(null,vec__16531,(1),null);
var temp__5455__auto___16537 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___16537)){
var effect_fn_16538 = temp__5455__auto___16537;
effect_fn_16538.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__16539 = seq__16527;
var G__16540 = chunk__16528;
var G__16541 = count__16529;
var G__16542 = (i__16530 + (1));
seq__16527 = G__16539;
chunk__16528 = G__16540;
count__16529 = G__16541;
i__16530 = G__16542;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__16527);
if(temp__5457__auto__){
var seq__16527__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16527__$1)){
var c__9290__auto__ = cljs.core.chunk_first.call(null,seq__16527__$1);
var G__16543 = cljs.core.chunk_rest.call(null,seq__16527__$1);
var G__16544 = c__9290__auto__;
var G__16545 = cljs.core.count.call(null,c__9290__auto__);
var G__16546 = (0);
seq__16527 = G__16543;
chunk__16528 = G__16544;
count__16529 = G__16545;
i__16530 = G__16546;
continue;
} else {
var vec__16534 = cljs.core.first.call(null,seq__16527__$1);
var effect_key = cljs.core.nth.call(null,vec__16534,(0),null);
var effect_value = cljs.core.nth.call(null,vec__16534,(1),null);
var temp__5455__auto___16547 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___16547)){
var effect_fn_16548 = temp__5455__auto___16547;
effect_fn_16548.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__16549 = cljs.core.next.call(null,seq__16527__$1);
var G__16550 = null;
var G__16551 = (0);
var G__16552 = (0);
seq__16527 = G__16549;
chunk__16528 = G__16550;
count__16529 = G__16551;
i__16530 = G__16552;
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
var seq__16553 = cljs.core.seq.call(null,value);
var chunk__16554 = null;
var count__16555 = (0);
var i__16556 = (0);
while(true){
if((i__16556 < count__16555)){
var map__16557 = cljs.core._nth.call(null,chunk__16554,i__16556);
var map__16557__$1 = ((((!((map__16557 == null)))?((((map__16557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16557.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16557):map__16557);
var effect = map__16557__$1;
var ms = cljs.core.get.call(null,map__16557__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__16557__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__16553,chunk__16554,count__16555,i__16556,map__16557,map__16557__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__16553,chunk__16554,count__16555,i__16556,map__16557,map__16557__$1,effect,ms,dispatch))
,ms);
}

var G__16561 = seq__16553;
var G__16562 = chunk__16554;
var G__16563 = count__16555;
var G__16564 = (i__16556 + (1));
seq__16553 = G__16561;
chunk__16554 = G__16562;
count__16555 = G__16563;
i__16556 = G__16564;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__16553);
if(temp__5457__auto__){
var seq__16553__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16553__$1)){
var c__9290__auto__ = cljs.core.chunk_first.call(null,seq__16553__$1);
var G__16565 = cljs.core.chunk_rest.call(null,seq__16553__$1);
var G__16566 = c__9290__auto__;
var G__16567 = cljs.core.count.call(null,c__9290__auto__);
var G__16568 = (0);
seq__16553 = G__16565;
chunk__16554 = G__16566;
count__16555 = G__16567;
i__16556 = G__16568;
continue;
} else {
var map__16559 = cljs.core.first.call(null,seq__16553__$1);
var map__16559__$1 = ((((!((map__16559 == null)))?((((map__16559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16559.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16559):map__16559);
var effect = map__16559__$1;
var ms = cljs.core.get.call(null,map__16559__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__16559__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__16553,chunk__16554,count__16555,i__16556,map__16559,map__16559__$1,effect,ms,dispatch,seq__16553__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__16553,chunk__16554,count__16555,i__16556,map__16559,map__16559__$1,effect,ms,dispatch,seq__16553__$1,temp__5457__auto__))
,ms);
}

var G__16569 = cljs.core.next.call(null,seq__16553__$1);
var G__16570 = null;
var G__16571 = (0);
var G__16572 = (0);
seq__16553 = G__16569;
chunk__16554 = G__16570;
count__16555 = G__16571;
i__16556 = G__16572;
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
var seq__16573 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__16574 = null;
var count__16575 = (0);
var i__16576 = (0);
while(true){
if((i__16576 < count__16575)){
var event = cljs.core._nth.call(null,chunk__16574,i__16576);
re_frame.router.dispatch.call(null,event);

var G__16577 = seq__16573;
var G__16578 = chunk__16574;
var G__16579 = count__16575;
var G__16580 = (i__16576 + (1));
seq__16573 = G__16577;
chunk__16574 = G__16578;
count__16575 = G__16579;
i__16576 = G__16580;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__16573);
if(temp__5457__auto__){
var seq__16573__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16573__$1)){
var c__9290__auto__ = cljs.core.chunk_first.call(null,seq__16573__$1);
var G__16581 = cljs.core.chunk_rest.call(null,seq__16573__$1);
var G__16582 = c__9290__auto__;
var G__16583 = cljs.core.count.call(null,c__9290__auto__);
var G__16584 = (0);
seq__16573 = G__16581;
chunk__16574 = G__16582;
count__16575 = G__16583;
i__16576 = G__16584;
continue;
} else {
var event = cljs.core.first.call(null,seq__16573__$1);
re_frame.router.dispatch.call(null,event);

var G__16585 = cljs.core.next.call(null,seq__16573__$1);
var G__16586 = null;
var G__16587 = (0);
var G__16588 = (0);
seq__16573 = G__16585;
chunk__16574 = G__16586;
count__16575 = G__16587;
i__16576 = G__16588;
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
var seq__16589 = cljs.core.seq.call(null,value);
var chunk__16590 = null;
var count__16591 = (0);
var i__16592 = (0);
while(true){
if((i__16592 < count__16591)){
var event = cljs.core._nth.call(null,chunk__16590,i__16592);
clear_event.call(null,event);

var G__16593 = seq__16589;
var G__16594 = chunk__16590;
var G__16595 = count__16591;
var G__16596 = (i__16592 + (1));
seq__16589 = G__16593;
chunk__16590 = G__16594;
count__16591 = G__16595;
i__16592 = G__16596;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__16589);
if(temp__5457__auto__){
var seq__16589__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16589__$1)){
var c__9290__auto__ = cljs.core.chunk_first.call(null,seq__16589__$1);
var G__16597 = cljs.core.chunk_rest.call(null,seq__16589__$1);
var G__16598 = c__9290__auto__;
var G__16599 = cljs.core.count.call(null,c__9290__auto__);
var G__16600 = (0);
seq__16589 = G__16597;
chunk__16590 = G__16598;
count__16591 = G__16599;
i__16592 = G__16600;
continue;
} else {
var event = cljs.core.first.call(null,seq__16589__$1);
clear_event.call(null,event);

var G__16601 = cljs.core.next.call(null,seq__16589__$1);
var G__16602 = null;
var G__16603 = (0);
var G__16604 = (0);
seq__16589 = G__16601;
chunk__16590 = G__16602;
count__16591 = G__16603;
i__16592 = G__16604;
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

//# sourceMappingURL=fx.js.map?rel=1521112590944
