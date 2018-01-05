// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages.
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__82252_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__82252_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected a collection of interceptors, got: ",interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", given an empty interceptor chain");
} else {
}

var temp__5457__auto___82253 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__5457__auto___82253)){
var not_i_82254 = temp__5457__auto___82253;
if(cljs.core.fn_QMARK_.call(null,not_i_82254)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_82254);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected interceptors, but got: ",not_i_82254);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * Typically, an `event handler` will be at the end of the chain (wrapped
 * in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler.call(null,re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector `event-v`, look up the associated interceptor chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector.call(null,event_v);
var temp__5455__auto__ = re_frame.registrar.get_handler.call(null,re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__5455__auto__)){
var interceptors = temp__5455__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: while handling \"",re_frame.events._STAR_handling_STAR_,"\", dispatch-sync was called for \"",event_v,"\". You can't call dispatch-sync within an event handler.");
} else {
var _STAR_handling_STAR_82255 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_82256 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__82200__auto___82269 = re_frame.interop.now.call(null);
var duration__82201__auto___82270 = (end__82200__auto___82269 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__82257_82271 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__82258_82272 = null;
var count__82259_82273 = (0);
var i__82260_82274 = (0);
while(true){
if((i__82260_82274 < count__82259_82273)){
var vec__82261_82275 = cljs.core._nth.call(null,chunk__82258_82272,i__82260_82274);
var k__82202__auto___82276 = cljs.core.nth.call(null,vec__82261_82275,(0),null);
var cb__82203__auto___82277 = cljs.core.nth.call(null,vec__82261_82275,(1),null);
try{cb__82203__auto___82277.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__82201__auto___82270,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e82264){if((e82264 instanceof java.lang.Exception)){
var e__82204__auto___82278 = e82264;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__82202__auto___82276,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__82204__auto___82278);
} else {
throw e82264;

}
}
var G__82279 = seq__82257_82271;
var G__82280 = chunk__82258_82272;
var G__82281 = count__82259_82273;
var G__82282 = (i__82260_82274 + (1));
seq__82257_82271 = G__82279;
chunk__82258_82272 = G__82280;
count__82259_82273 = G__82281;
i__82260_82274 = G__82282;
continue;
} else {
var temp__5457__auto___82283 = cljs.core.seq.call(null,seq__82257_82271);
if(temp__5457__auto___82283){
var seq__82257_82284__$1 = temp__5457__auto___82283;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__82257_82284__$1)){
var c__75832__auto___82285 = cljs.core.chunk_first.call(null,seq__82257_82284__$1);
var G__82286 = cljs.core.chunk_rest.call(null,seq__82257_82284__$1);
var G__82287 = c__75832__auto___82285;
var G__82288 = cljs.core.count.call(null,c__75832__auto___82285);
var G__82289 = (0);
seq__82257_82271 = G__82286;
chunk__82258_82272 = G__82287;
count__82259_82273 = G__82288;
i__82260_82274 = G__82289;
continue;
} else {
var vec__82265_82290 = cljs.core.first.call(null,seq__82257_82284__$1);
var k__82202__auto___82291 = cljs.core.nth.call(null,vec__82265_82290,(0),null);
var cb__82203__auto___82292 = cljs.core.nth.call(null,vec__82265_82290,(1),null);
try{cb__82203__auto___82292.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__82201__auto___82270,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e82268){if((e82268 instanceof java.lang.Exception)){
var e__82204__auto___82293 = e82268;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__82202__auto___82291,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__82204__auto___82293);
} else {
throw e82268;

}
}
var G__82294 = cljs.core.next.call(null,seq__82257_82284__$1);
var G__82295 = null;
var G__82296 = (0);
var G__82297 = (0);
seq__82257_82271 = G__82294;
chunk__82258_82272 = G__82295;
count__82259_82273 = G__82296;
i__82260_82274 = G__82297;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_82256;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_82255;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1515122952269
