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
var make_chain = (function (p1__18710_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__18710_SHARP_));
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

var temp__6738__auto___18711 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__6738__auto___18711)){
var not_i_18712 = temp__6738__auto___18711;
if(cljs.core.fn_QMARK_.call(null,not_i_18712)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_18712);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected interceptors, but got: ",not_i_18712);
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
var temp__6736__auto__ = re_frame.registrar.get_handler.call(null,re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__6736__auto__)){
var interceptors = temp__6736__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: while handling \"",re_frame.events._STAR_handling_STAR_,"\", dispatch-sync was called for \"",event_v,"\". You can't call dispatch-sync within an event handler.");
} else {
var _STAR_handling_STAR_18713 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_18714 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__18658__auto___18727 = re_frame.interop.now.call(null);
var duration__18659__auto___18728 = (end__18658__auto___18727 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__18715_18729 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__18716_18730 = null;
var count__18717_18731 = (0);
var i__18718_18732 = (0);
while(true){
if((i__18718_18732 < count__18717_18731)){
var vec__18719_18733 = cljs.core._nth.call(null,chunk__18716_18730,i__18718_18732);
var k__18660__auto___18734 = cljs.core.nth.call(null,vec__18719_18733,(0),null);
var cb__18661__auto___18735 = cljs.core.nth.call(null,vec__18719_18733,(1),null);
try{cb__18661__auto___18735.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__18659__auto___18728,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e18722){if((e18722 instanceof java.lang.Exception)){
var e__18662__auto___18736 = e18722;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__18660__auto___18734,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__18662__auto___18736);
} else {
throw e18722;

}
}
var G__18737 = seq__18715_18729;
var G__18738 = chunk__18716_18730;
var G__18739 = count__18717_18731;
var G__18740 = (i__18718_18732 + (1));
seq__18715_18729 = G__18737;
chunk__18716_18730 = G__18738;
count__18717_18731 = G__18739;
i__18718_18732 = G__18740;
continue;
} else {
var temp__6738__auto___18741 = cljs.core.seq.call(null,seq__18715_18729);
if(temp__6738__auto___18741){
var seq__18715_18742__$1 = temp__6738__auto___18741;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18715_18742__$1)){
var c__10741__auto___18743 = cljs.core.chunk_first.call(null,seq__18715_18742__$1);
var G__18744 = cljs.core.chunk_rest.call(null,seq__18715_18742__$1);
var G__18745 = c__10741__auto___18743;
var G__18746 = cljs.core.count.call(null,c__10741__auto___18743);
var G__18747 = (0);
seq__18715_18729 = G__18744;
chunk__18716_18730 = G__18745;
count__18717_18731 = G__18746;
i__18718_18732 = G__18747;
continue;
} else {
var vec__18723_18748 = cljs.core.first.call(null,seq__18715_18742__$1);
var k__18660__auto___18749 = cljs.core.nth.call(null,vec__18723_18748,(0),null);
var cb__18661__auto___18750 = cljs.core.nth.call(null,vec__18723_18748,(1),null);
try{cb__18661__auto___18750.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__18659__auto___18728,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e18726){if((e18726 instanceof java.lang.Exception)){
var e__18662__auto___18751 = e18726;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__18660__auto___18749,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__18662__auto___18751);
} else {
throw e18726;

}
}
var G__18752 = cljs.core.next.call(null,seq__18715_18742__$1);
var G__18753 = null;
var G__18754 = (0);
var G__18755 = (0);
seq__18715_18729 = G__18752;
chunk__18716_18730 = G__18753;
count__18717_18731 = G__18754;
i__18718_18732 = G__18755;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_18714;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_18713;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1506896678267
