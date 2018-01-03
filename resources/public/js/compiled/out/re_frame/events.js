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
var make_chain = (function (p1__70113_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__70113_SHARP_));
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

var temp__5457__auto___70114 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__5457__auto___70114)){
var not_i_70115 = temp__5457__auto___70114;
if(cljs.core.fn_QMARK_.call(null,not_i_70115)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_70115);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected interceptors, but got: ",not_i_70115);
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
var _STAR_handling_STAR_70116 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_70117 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__70061__auto___70130 = re_frame.interop.now.call(null);
var duration__70062__auto___70131 = (end__70061__auto___70130 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__70118_70132 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__70119_70133 = null;
var count__70120_70134 = (0);
var i__70121_70135 = (0);
while(true){
if((i__70121_70135 < count__70120_70134)){
var vec__70122_70136 = cljs.core._nth.call(null,chunk__70119_70133,i__70121_70135);
var k__70063__auto___70137 = cljs.core.nth.call(null,vec__70122_70136,(0),null);
var cb__70064__auto___70138 = cljs.core.nth.call(null,vec__70122_70136,(1),null);
try{cb__70064__auto___70138.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__70062__auto___70131,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e70125){if((e70125 instanceof java.lang.Exception)){
var e__70065__auto___70139 = e70125;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__70063__auto___70137,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__70065__auto___70139);
} else {
throw e70125;

}
}
var G__70140 = seq__70118_70132;
var G__70141 = chunk__70119_70133;
var G__70142 = count__70120_70134;
var G__70143 = (i__70121_70135 + (1));
seq__70118_70132 = G__70140;
chunk__70119_70133 = G__70141;
count__70120_70134 = G__70142;
i__70121_70135 = G__70143;
continue;
} else {
var temp__5457__auto___70144 = cljs.core.seq.call(null,seq__70118_70132);
if(temp__5457__auto___70144){
var seq__70118_70145__$1 = temp__5457__auto___70144;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70118_70145__$1)){
var c__63692__auto___70146 = cljs.core.chunk_first.call(null,seq__70118_70145__$1);
var G__70147 = cljs.core.chunk_rest.call(null,seq__70118_70145__$1);
var G__70148 = c__63692__auto___70146;
var G__70149 = cljs.core.count.call(null,c__63692__auto___70146);
var G__70150 = (0);
seq__70118_70132 = G__70147;
chunk__70119_70133 = G__70148;
count__70120_70134 = G__70149;
i__70121_70135 = G__70150;
continue;
} else {
var vec__70126_70151 = cljs.core.first.call(null,seq__70118_70145__$1);
var k__70063__auto___70152 = cljs.core.nth.call(null,vec__70126_70151,(0),null);
var cb__70064__auto___70153 = cljs.core.nth.call(null,vec__70126_70151,(1),null);
try{cb__70064__auto___70153.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__70062__auto___70131,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e70129){if((e70129 instanceof java.lang.Exception)){
var e__70065__auto___70154 = e70129;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__70063__auto___70152,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__70065__auto___70154);
} else {
throw e70129;

}
}
var G__70155 = cljs.core.next.call(null,seq__70118_70145__$1);
var G__70156 = null;
var G__70157 = (0);
var G__70158 = (0);
seq__70118_70132 = G__70155;
chunk__70119_70133 = G__70156;
count__70120_70134 = G__70157;
i__70121_70135 = G__70158;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_70117;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_70116;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1514950330684
