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
var seq__18954 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__18955 = null;
var count__18956 = (0);
var i__18957 = (0);
while(true){
if((i__18957 < count__18956)){
var vec__18958 = cljs.core._nth.call(null,chunk__18955,i__18957);
var effect_key = cljs.core.nth.call(null,vec__18958,(0),null);
var effect_value = cljs.core.nth.call(null,vec__18958,(1),null);
var temp__6736__auto___18964 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__6736__auto___18964)){
var effect_fn_18965 = temp__6736__auto___18964;
effect_fn_18965.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__18966 = seq__18954;
var G__18967 = chunk__18955;
var G__18968 = count__18956;
var G__18969 = (i__18957 + (1));
seq__18954 = G__18966;
chunk__18955 = G__18967;
count__18956 = G__18968;
i__18957 = G__18969;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__18954);
if(temp__6738__auto__){
var seq__18954__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18954__$1)){
var c__10881__auto__ = cljs.core.chunk_first.call(null,seq__18954__$1);
var G__18970 = cljs.core.chunk_rest.call(null,seq__18954__$1);
var G__18971 = c__10881__auto__;
var G__18972 = cljs.core.count.call(null,c__10881__auto__);
var G__18973 = (0);
seq__18954 = G__18970;
chunk__18955 = G__18971;
count__18956 = G__18972;
i__18957 = G__18973;
continue;
} else {
var vec__18961 = cljs.core.first.call(null,seq__18954__$1);
var effect_key = cljs.core.nth.call(null,vec__18961,(0),null);
var effect_value = cljs.core.nth.call(null,vec__18961,(1),null);
var temp__6736__auto___18974 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__6736__auto___18974)){
var effect_fn_18975 = temp__6736__auto___18974;
effect_fn_18975.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__18976 = cljs.core.next.call(null,seq__18954__$1);
var G__18977 = null;
var G__18978 = (0);
var G__18979 = (0);
seq__18954 = G__18976;
chunk__18955 = G__18977;
count__18956 = G__18978;
i__18957 = G__18979;
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
var seq__18980 = cljs.core.seq.call(null,value);
var chunk__18981 = null;
var count__18982 = (0);
var i__18983 = (0);
while(true){
if((i__18983 < count__18982)){
var map__18984 = cljs.core._nth.call(null,chunk__18981,i__18983);
var map__18984__$1 = ((((!((map__18984 == null)))?((((map__18984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18984.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18984):map__18984);
var effect = map__18984__$1;
var ms = cljs.core.get.call(null,map__18984__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__18984__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__18980,chunk__18981,count__18982,i__18983,map__18984,map__18984__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__18980,chunk__18981,count__18982,i__18983,map__18984,map__18984__$1,effect,ms,dispatch))
,ms);
}

var G__18988 = seq__18980;
var G__18989 = chunk__18981;
var G__18990 = count__18982;
var G__18991 = (i__18983 + (1));
seq__18980 = G__18988;
chunk__18981 = G__18989;
count__18982 = G__18990;
i__18983 = G__18991;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__18980);
if(temp__6738__auto__){
var seq__18980__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18980__$1)){
var c__10881__auto__ = cljs.core.chunk_first.call(null,seq__18980__$1);
var G__18992 = cljs.core.chunk_rest.call(null,seq__18980__$1);
var G__18993 = c__10881__auto__;
var G__18994 = cljs.core.count.call(null,c__10881__auto__);
var G__18995 = (0);
seq__18980 = G__18992;
chunk__18981 = G__18993;
count__18982 = G__18994;
i__18983 = G__18995;
continue;
} else {
var map__18986 = cljs.core.first.call(null,seq__18980__$1);
var map__18986__$1 = ((((!((map__18986 == null)))?((((map__18986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18986.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18986):map__18986);
var effect = map__18986__$1;
var ms = cljs.core.get.call(null,map__18986__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__18986__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__18980,chunk__18981,count__18982,i__18983,map__18986,map__18986__$1,effect,ms,dispatch,seq__18980__$1,temp__6738__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__18980,chunk__18981,count__18982,i__18983,map__18986,map__18986__$1,effect,ms,dispatch,seq__18980__$1,temp__6738__auto__))
,ms);
}

var G__18996 = cljs.core.next.call(null,seq__18980__$1);
var G__18997 = null;
var G__18998 = (0);
var G__18999 = (0);
seq__18980 = G__18996;
chunk__18981 = G__18997;
count__18982 = G__18998;
i__18983 = G__18999;
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
var seq__19000 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__19001 = null;
var count__19002 = (0);
var i__19003 = (0);
while(true){
if((i__19003 < count__19002)){
var event = cljs.core._nth.call(null,chunk__19001,i__19003);
re_frame.router.dispatch.call(null,event);

var G__19004 = seq__19000;
var G__19005 = chunk__19001;
var G__19006 = count__19002;
var G__19007 = (i__19003 + (1));
seq__19000 = G__19004;
chunk__19001 = G__19005;
count__19002 = G__19006;
i__19003 = G__19007;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__19000);
if(temp__6738__auto__){
var seq__19000__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19000__$1)){
var c__10881__auto__ = cljs.core.chunk_first.call(null,seq__19000__$1);
var G__19008 = cljs.core.chunk_rest.call(null,seq__19000__$1);
var G__19009 = c__10881__auto__;
var G__19010 = cljs.core.count.call(null,c__10881__auto__);
var G__19011 = (0);
seq__19000 = G__19008;
chunk__19001 = G__19009;
count__19002 = G__19010;
i__19003 = G__19011;
continue;
} else {
var event = cljs.core.first.call(null,seq__19000__$1);
re_frame.router.dispatch.call(null,event);

var G__19012 = cljs.core.next.call(null,seq__19000__$1);
var G__19013 = null;
var G__19014 = (0);
var G__19015 = (0);
seq__19000 = G__19012;
chunk__19001 = G__19013;
count__19002 = G__19014;
i__19003 = G__19015;
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
var seq__19016 = cljs.core.seq.call(null,value);
var chunk__19017 = null;
var count__19018 = (0);
var i__19019 = (0);
while(true){
if((i__19019 < count__19018)){
var event = cljs.core._nth.call(null,chunk__19017,i__19019);
clear_event.call(null,event);

var G__19020 = seq__19016;
var G__19021 = chunk__19017;
var G__19022 = count__19018;
var G__19023 = (i__19019 + (1));
seq__19016 = G__19020;
chunk__19017 = G__19021;
count__19018 = G__19022;
i__19019 = G__19023;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__19016);
if(temp__6738__auto__){
var seq__19016__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19016__$1)){
var c__10881__auto__ = cljs.core.chunk_first.call(null,seq__19016__$1);
var G__19024 = cljs.core.chunk_rest.call(null,seq__19016__$1);
var G__19025 = c__10881__auto__;
var G__19026 = cljs.core.count.call(null,c__10881__auto__);
var G__19027 = (0);
seq__19016 = G__19024;
chunk__19017 = G__19025;
count__19018 = G__19026;
i__19019 = G__19027;
continue;
} else {
var event = cljs.core.first.call(null,seq__19016__$1);
clear_event.call(null,event);

var G__19028 = cljs.core.next.call(null,seq__19016__$1);
var G__19029 = null;
var G__19030 = (0);
var G__19031 = (0);
seq__19016 = G__19028;
chunk__19017 = G__19029;
count__19018 = G__19030;
i__19019 = G__19031;
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

//# sourceMappingURL=fx.js.map?rel=1506917870752
