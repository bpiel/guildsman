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
var make_chain = (function (p1__16407_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__16407_SHARP_));
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

var temp__5457__auto___16408 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__5457__auto___16408)){
var not_i_16409 = temp__5457__auto___16408;
if(cljs.core.fn_QMARK_.call(null,not_i_16409)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_16409);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected interceptors, but got: ",not_i_16409);
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
var _STAR_handling_STAR_16410 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_16411 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__16355__auto___16424 = re_frame.interop.now.call(null);
var duration__16356__auto___16425 = (end__16355__auto___16424 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__16412_16426 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__16413_16427 = null;
var count__16414_16428 = (0);
var i__16415_16429 = (0);
while(true){
if((i__16415_16429 < count__16414_16428)){
var vec__16416_16430 = cljs.core._nth.call(null,chunk__16413_16427,i__16415_16429);
var k__16357__auto___16431 = cljs.core.nth.call(null,vec__16416_16430,(0),null);
var cb__16358__auto___16432 = cljs.core.nth.call(null,vec__16416_16430,(1),null);
try{cb__16358__auto___16432.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__16356__auto___16425,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e16419){if((e16419 instanceof java.lang.Exception)){
var e__16359__auto___16433 = e16419;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__16357__auto___16431,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__16359__auto___16433);
} else {
throw e16419;

}
}
var G__16434 = seq__16412_16426;
var G__16435 = chunk__16413_16427;
var G__16436 = count__16414_16428;
var G__16437 = (i__16415_16429 + (1));
seq__16412_16426 = G__16434;
chunk__16413_16427 = G__16435;
count__16414_16428 = G__16436;
i__16415_16429 = G__16437;
continue;
} else {
var temp__5457__auto___16438 = cljs.core.seq.call(null,seq__16412_16426);
if(temp__5457__auto___16438){
var seq__16412_16439__$1 = temp__5457__auto___16438;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16412_16439__$1)){
var c__9290__auto___16440 = cljs.core.chunk_first.call(null,seq__16412_16439__$1);
var G__16441 = cljs.core.chunk_rest.call(null,seq__16412_16439__$1);
var G__16442 = c__9290__auto___16440;
var G__16443 = cljs.core.count.call(null,c__9290__auto___16440);
var G__16444 = (0);
seq__16412_16426 = G__16441;
chunk__16413_16427 = G__16442;
count__16414_16428 = G__16443;
i__16415_16429 = G__16444;
continue;
} else {
var vec__16420_16445 = cljs.core.first.call(null,seq__16412_16439__$1);
var k__16357__auto___16446 = cljs.core.nth.call(null,vec__16420_16445,(0),null);
var cb__16358__auto___16447 = cljs.core.nth.call(null,vec__16420_16445,(1),null);
try{cb__16358__auto___16447.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__16356__auto___16425,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e16423){if((e16423 instanceof java.lang.Exception)){
var e__16359__auto___16448 = e16423;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__16357__auto___16446,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__16359__auto___16448);
} else {
throw e16423;

}
}
var G__16449 = cljs.core.next.call(null,seq__16412_16439__$1);
var G__16450 = null;
var G__16451 = (0);
var G__16452 = (0);
seq__16412_16426 = G__16449;
chunk__16413_16427 = G__16450;
count__16414_16428 = G__16451;
i__16415_16429 = G__16452;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_16411;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_16410;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1521112590697
