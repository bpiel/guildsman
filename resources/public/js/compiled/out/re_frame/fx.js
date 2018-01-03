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
var seq__70233 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__70234 = null;
var count__70235 = (0);
var i__70236 = (0);
while(true){
if((i__70236 < count__70235)){
var vec__70237 = cljs.core._nth.call(null,chunk__70234,i__70236);
var effect_key = cljs.core.nth.call(null,vec__70237,(0),null);
var effect_value = cljs.core.nth.call(null,vec__70237,(1),null);
var temp__5455__auto___70243 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___70243)){
var effect_fn_70244 = temp__5455__auto___70243;
effect_fn_70244.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__70245 = seq__70233;
var G__70246 = chunk__70234;
var G__70247 = count__70235;
var G__70248 = (i__70236 + (1));
seq__70233 = G__70245;
chunk__70234 = G__70246;
count__70235 = G__70247;
i__70236 = G__70248;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__70233);
if(temp__5457__auto__){
var seq__70233__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70233__$1)){
var c__63692__auto__ = cljs.core.chunk_first.call(null,seq__70233__$1);
var G__70249 = cljs.core.chunk_rest.call(null,seq__70233__$1);
var G__70250 = c__63692__auto__;
var G__70251 = cljs.core.count.call(null,c__63692__auto__);
var G__70252 = (0);
seq__70233 = G__70249;
chunk__70234 = G__70250;
count__70235 = G__70251;
i__70236 = G__70252;
continue;
} else {
var vec__70240 = cljs.core.first.call(null,seq__70233__$1);
var effect_key = cljs.core.nth.call(null,vec__70240,(0),null);
var effect_value = cljs.core.nth.call(null,vec__70240,(1),null);
var temp__5455__auto___70253 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___70253)){
var effect_fn_70254 = temp__5455__auto___70253;
effect_fn_70254.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__70255 = cljs.core.next.call(null,seq__70233__$1);
var G__70256 = null;
var G__70257 = (0);
var G__70258 = (0);
seq__70233 = G__70255;
chunk__70234 = G__70256;
count__70235 = G__70257;
i__70236 = G__70258;
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
var seq__70259 = cljs.core.seq.call(null,value);
var chunk__70260 = null;
var count__70261 = (0);
var i__70262 = (0);
while(true){
if((i__70262 < count__70261)){
var map__70263 = cljs.core._nth.call(null,chunk__70260,i__70262);
var map__70263__$1 = ((((!((map__70263 == null)))?((((map__70263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70263.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70263):map__70263);
var effect = map__70263__$1;
var ms = cljs.core.get.call(null,map__70263__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__70263__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__70259,chunk__70260,count__70261,i__70262,map__70263,map__70263__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__70259,chunk__70260,count__70261,i__70262,map__70263,map__70263__$1,effect,ms,dispatch))
,ms);
}

var G__70267 = seq__70259;
var G__70268 = chunk__70260;
var G__70269 = count__70261;
var G__70270 = (i__70262 + (1));
seq__70259 = G__70267;
chunk__70260 = G__70268;
count__70261 = G__70269;
i__70262 = G__70270;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__70259);
if(temp__5457__auto__){
var seq__70259__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70259__$1)){
var c__63692__auto__ = cljs.core.chunk_first.call(null,seq__70259__$1);
var G__70271 = cljs.core.chunk_rest.call(null,seq__70259__$1);
var G__70272 = c__63692__auto__;
var G__70273 = cljs.core.count.call(null,c__63692__auto__);
var G__70274 = (0);
seq__70259 = G__70271;
chunk__70260 = G__70272;
count__70261 = G__70273;
i__70262 = G__70274;
continue;
} else {
var map__70265 = cljs.core.first.call(null,seq__70259__$1);
var map__70265__$1 = ((((!((map__70265 == null)))?((((map__70265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70265.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70265):map__70265);
var effect = map__70265__$1;
var ms = cljs.core.get.call(null,map__70265__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__70265__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__70259,chunk__70260,count__70261,i__70262,map__70265,map__70265__$1,effect,ms,dispatch,seq__70259__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__70259,chunk__70260,count__70261,i__70262,map__70265,map__70265__$1,effect,ms,dispatch,seq__70259__$1,temp__5457__auto__))
,ms);
}

var G__70275 = cljs.core.next.call(null,seq__70259__$1);
var G__70276 = null;
var G__70277 = (0);
var G__70278 = (0);
seq__70259 = G__70275;
chunk__70260 = G__70276;
count__70261 = G__70277;
i__70262 = G__70278;
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
var seq__70279 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__70280 = null;
var count__70281 = (0);
var i__70282 = (0);
while(true){
if((i__70282 < count__70281)){
var event = cljs.core._nth.call(null,chunk__70280,i__70282);
re_frame.router.dispatch.call(null,event);

var G__70283 = seq__70279;
var G__70284 = chunk__70280;
var G__70285 = count__70281;
var G__70286 = (i__70282 + (1));
seq__70279 = G__70283;
chunk__70280 = G__70284;
count__70281 = G__70285;
i__70282 = G__70286;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__70279);
if(temp__5457__auto__){
var seq__70279__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70279__$1)){
var c__63692__auto__ = cljs.core.chunk_first.call(null,seq__70279__$1);
var G__70287 = cljs.core.chunk_rest.call(null,seq__70279__$1);
var G__70288 = c__63692__auto__;
var G__70289 = cljs.core.count.call(null,c__63692__auto__);
var G__70290 = (0);
seq__70279 = G__70287;
chunk__70280 = G__70288;
count__70281 = G__70289;
i__70282 = G__70290;
continue;
} else {
var event = cljs.core.first.call(null,seq__70279__$1);
re_frame.router.dispatch.call(null,event);

var G__70291 = cljs.core.next.call(null,seq__70279__$1);
var G__70292 = null;
var G__70293 = (0);
var G__70294 = (0);
seq__70279 = G__70291;
chunk__70280 = G__70292;
count__70281 = G__70293;
i__70282 = G__70294;
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
var seq__70295 = cljs.core.seq.call(null,value);
var chunk__70296 = null;
var count__70297 = (0);
var i__70298 = (0);
while(true){
if((i__70298 < count__70297)){
var event = cljs.core._nth.call(null,chunk__70296,i__70298);
clear_event.call(null,event);

var G__70299 = seq__70295;
var G__70300 = chunk__70296;
var G__70301 = count__70297;
var G__70302 = (i__70298 + (1));
seq__70295 = G__70299;
chunk__70296 = G__70300;
count__70297 = G__70301;
i__70298 = G__70302;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__70295);
if(temp__5457__auto__){
var seq__70295__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70295__$1)){
var c__63692__auto__ = cljs.core.chunk_first.call(null,seq__70295__$1);
var G__70303 = cljs.core.chunk_rest.call(null,seq__70295__$1);
var G__70304 = c__63692__auto__;
var G__70305 = cljs.core.count.call(null,c__63692__auto__);
var G__70306 = (0);
seq__70295 = G__70303;
chunk__70296 = G__70304;
count__70297 = G__70305;
i__70298 = G__70306;
continue;
} else {
var event = cljs.core.first.call(null,seq__70295__$1);
clear_event.call(null,event);

var G__70307 = cljs.core.next.call(null,seq__70295__$1);
var G__70308 = null;
var G__70309 = (0);
var G__70310 = (0);
seq__70295 = G__70307;
chunk__70296 = G__70308;
count__70297 = G__70309;
i__70298 = G__70310;
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

//# sourceMappingURL=fx.js.map?rel=1514950330938
