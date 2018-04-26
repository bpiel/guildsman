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
var seq__61346 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__61347 = null;
var count__61348 = (0);
var i__61349 = (0);
while(true){
if((i__61349 < count__61348)){
var vec__61350 = cljs.core._nth.call(null,chunk__61347,i__61349);
var effect_key = cljs.core.nth.call(null,vec__61350,(0),null);
var effect_value = cljs.core.nth.call(null,vec__61350,(1),null);
var temp__5455__auto___61356 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___61356)){
var effect_fn_61357 = temp__5455__auto___61356;
effect_fn_61357.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__61358 = seq__61346;
var G__61359 = chunk__61347;
var G__61360 = count__61348;
var G__61361 = (i__61349 + (1));
seq__61346 = G__61358;
chunk__61347 = G__61359;
count__61348 = G__61360;
i__61349 = G__61361;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__61346);
if(temp__5457__auto__){
var seq__61346__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61346__$1)){
var c__53901__auto__ = cljs.core.chunk_first.call(null,seq__61346__$1);
var G__61362 = cljs.core.chunk_rest.call(null,seq__61346__$1);
var G__61363 = c__53901__auto__;
var G__61364 = cljs.core.count.call(null,c__53901__auto__);
var G__61365 = (0);
seq__61346 = G__61362;
chunk__61347 = G__61363;
count__61348 = G__61364;
i__61349 = G__61365;
continue;
} else {
var vec__61353 = cljs.core.first.call(null,seq__61346__$1);
var effect_key = cljs.core.nth.call(null,vec__61353,(0),null);
var effect_value = cljs.core.nth.call(null,vec__61353,(1),null);
var temp__5455__auto___61366 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___61366)){
var effect_fn_61367 = temp__5455__auto___61366;
effect_fn_61367.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__61368 = cljs.core.next.call(null,seq__61346__$1);
var G__61369 = null;
var G__61370 = (0);
var G__61371 = (0);
seq__61346 = G__61368;
chunk__61347 = G__61369;
count__61348 = G__61370;
i__61349 = G__61371;
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
var seq__61372 = cljs.core.seq.call(null,value);
var chunk__61373 = null;
var count__61374 = (0);
var i__61375 = (0);
while(true){
if((i__61375 < count__61374)){
var map__61376 = cljs.core._nth.call(null,chunk__61373,i__61375);
var map__61376__$1 = ((((!((map__61376 == null)))?((((map__61376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61376.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61376):map__61376);
var effect = map__61376__$1;
var ms = cljs.core.get.call(null,map__61376__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__61376__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__61372,chunk__61373,count__61374,i__61375,map__61376,map__61376__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__61372,chunk__61373,count__61374,i__61375,map__61376,map__61376__$1,effect,ms,dispatch))
,ms);
}

var G__61380 = seq__61372;
var G__61381 = chunk__61373;
var G__61382 = count__61374;
var G__61383 = (i__61375 + (1));
seq__61372 = G__61380;
chunk__61373 = G__61381;
count__61374 = G__61382;
i__61375 = G__61383;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__61372);
if(temp__5457__auto__){
var seq__61372__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61372__$1)){
var c__53901__auto__ = cljs.core.chunk_first.call(null,seq__61372__$1);
var G__61384 = cljs.core.chunk_rest.call(null,seq__61372__$1);
var G__61385 = c__53901__auto__;
var G__61386 = cljs.core.count.call(null,c__53901__auto__);
var G__61387 = (0);
seq__61372 = G__61384;
chunk__61373 = G__61385;
count__61374 = G__61386;
i__61375 = G__61387;
continue;
} else {
var map__61378 = cljs.core.first.call(null,seq__61372__$1);
var map__61378__$1 = ((((!((map__61378 == null)))?((((map__61378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61378.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61378):map__61378);
var effect = map__61378__$1;
var ms = cljs.core.get.call(null,map__61378__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__61378__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__61372,chunk__61373,count__61374,i__61375,map__61378,map__61378__$1,effect,ms,dispatch,seq__61372__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__61372,chunk__61373,count__61374,i__61375,map__61378,map__61378__$1,effect,ms,dispatch,seq__61372__$1,temp__5457__auto__))
,ms);
}

var G__61388 = cljs.core.next.call(null,seq__61372__$1);
var G__61389 = null;
var G__61390 = (0);
var G__61391 = (0);
seq__61372 = G__61388;
chunk__61373 = G__61389;
count__61374 = G__61390;
i__61375 = G__61391;
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
var seq__61392 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__61393 = null;
var count__61394 = (0);
var i__61395 = (0);
while(true){
if((i__61395 < count__61394)){
var event = cljs.core._nth.call(null,chunk__61393,i__61395);
re_frame.router.dispatch.call(null,event);

var G__61396 = seq__61392;
var G__61397 = chunk__61393;
var G__61398 = count__61394;
var G__61399 = (i__61395 + (1));
seq__61392 = G__61396;
chunk__61393 = G__61397;
count__61394 = G__61398;
i__61395 = G__61399;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__61392);
if(temp__5457__auto__){
var seq__61392__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61392__$1)){
var c__53901__auto__ = cljs.core.chunk_first.call(null,seq__61392__$1);
var G__61400 = cljs.core.chunk_rest.call(null,seq__61392__$1);
var G__61401 = c__53901__auto__;
var G__61402 = cljs.core.count.call(null,c__53901__auto__);
var G__61403 = (0);
seq__61392 = G__61400;
chunk__61393 = G__61401;
count__61394 = G__61402;
i__61395 = G__61403;
continue;
} else {
var event = cljs.core.first.call(null,seq__61392__$1);
re_frame.router.dispatch.call(null,event);

var G__61404 = cljs.core.next.call(null,seq__61392__$1);
var G__61405 = null;
var G__61406 = (0);
var G__61407 = (0);
seq__61392 = G__61404;
chunk__61393 = G__61405;
count__61394 = G__61406;
i__61395 = G__61407;
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
var seq__61408 = cljs.core.seq.call(null,value);
var chunk__61409 = null;
var count__61410 = (0);
var i__61411 = (0);
while(true){
if((i__61411 < count__61410)){
var event = cljs.core._nth.call(null,chunk__61409,i__61411);
clear_event.call(null,event);

var G__61412 = seq__61408;
var G__61413 = chunk__61409;
var G__61414 = count__61410;
var G__61415 = (i__61411 + (1));
seq__61408 = G__61412;
chunk__61409 = G__61413;
count__61410 = G__61414;
i__61411 = G__61415;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__61408);
if(temp__5457__auto__){
var seq__61408__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61408__$1)){
var c__53901__auto__ = cljs.core.chunk_first.call(null,seq__61408__$1);
var G__61416 = cljs.core.chunk_rest.call(null,seq__61408__$1);
var G__61417 = c__53901__auto__;
var G__61418 = cljs.core.count.call(null,c__53901__auto__);
var G__61419 = (0);
seq__61408 = G__61416;
chunk__61409 = G__61417;
count__61410 = G__61418;
i__61411 = G__61419;
continue;
} else {
var event = cljs.core.first.call(null,seq__61408__$1);
clear_event.call(null,event);

var G__61420 = cljs.core.next.call(null,seq__61408__$1);
var G__61421 = null;
var G__61422 = (0);
var G__61423 = (0);
seq__61408 = G__61420;
chunk__61409 = G__61421;
count__61410 = G__61422;
i__61411 = G__61423;
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

//# sourceMappingURL=fx.js.map?rel=1524702419374
