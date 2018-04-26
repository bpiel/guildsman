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
var make_chain = (function (p1__61226_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__61226_SHARP_));
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

var temp__5457__auto___61227 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__5457__auto___61227)){
var not_i_61228 = temp__5457__auto___61227;
if(cljs.core.fn_QMARK_.call(null,not_i_61228)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_61228);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected interceptors, but got: ",not_i_61228);
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
var _STAR_handling_STAR_61229 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_61230 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__61174__auto___61243 = re_frame.interop.now.call(null);
var duration__61175__auto___61244 = (end__61174__auto___61243 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__61231_61245 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__61232_61246 = null;
var count__61233_61247 = (0);
var i__61234_61248 = (0);
while(true){
if((i__61234_61248 < count__61233_61247)){
var vec__61235_61249 = cljs.core._nth.call(null,chunk__61232_61246,i__61234_61248);
var k__61176__auto___61250 = cljs.core.nth.call(null,vec__61235_61249,(0),null);
var cb__61177__auto___61251 = cljs.core.nth.call(null,vec__61235_61249,(1),null);
try{cb__61177__auto___61251.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__61175__auto___61244,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e61238){if((e61238 instanceof java.lang.Exception)){
var e__61178__auto___61252 = e61238;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__61176__auto___61250,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__61178__auto___61252);
} else {
throw e61238;

}
}
var G__61253 = seq__61231_61245;
var G__61254 = chunk__61232_61246;
var G__61255 = count__61233_61247;
var G__61256 = (i__61234_61248 + (1));
seq__61231_61245 = G__61253;
chunk__61232_61246 = G__61254;
count__61233_61247 = G__61255;
i__61234_61248 = G__61256;
continue;
} else {
var temp__5457__auto___61257 = cljs.core.seq.call(null,seq__61231_61245);
if(temp__5457__auto___61257){
var seq__61231_61258__$1 = temp__5457__auto___61257;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61231_61258__$1)){
var c__53901__auto___61259 = cljs.core.chunk_first.call(null,seq__61231_61258__$1);
var G__61260 = cljs.core.chunk_rest.call(null,seq__61231_61258__$1);
var G__61261 = c__53901__auto___61259;
var G__61262 = cljs.core.count.call(null,c__53901__auto___61259);
var G__61263 = (0);
seq__61231_61245 = G__61260;
chunk__61232_61246 = G__61261;
count__61233_61247 = G__61262;
i__61234_61248 = G__61263;
continue;
} else {
var vec__61239_61264 = cljs.core.first.call(null,seq__61231_61258__$1);
var k__61176__auto___61265 = cljs.core.nth.call(null,vec__61239_61264,(0),null);
var cb__61177__auto___61266 = cljs.core.nth.call(null,vec__61239_61264,(1),null);
try{cb__61177__auto___61266.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__61175__auto___61244,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e61242){if((e61242 instanceof java.lang.Exception)){
var e__61178__auto___61267 = e61242;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__61176__auto___61265,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__61178__auto___61267);
} else {
throw e61242;

}
}
var G__61268 = cljs.core.next.call(null,seq__61231_61258__$1);
var G__61269 = null;
var G__61270 = (0);
var G__61271 = (0);
seq__61231_61245 = G__61268;
chunk__61232_61246 = G__61269;
count__61233_61247 = G__61270;
i__61234_61248 = G__61271;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_61230;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_61229;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1524702419255
