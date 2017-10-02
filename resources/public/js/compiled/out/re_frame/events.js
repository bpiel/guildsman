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
var make_chain = (function (p1__18834_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__18834_SHARP_));
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

var temp__6738__auto___18835 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__6738__auto___18835)){
var not_i_18836 = temp__6738__auto___18835;
if(cljs.core.fn_QMARK_.call(null,not_i_18836)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_18836);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected interceptors, but got: ",not_i_18836);
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
var _STAR_handling_STAR_18837 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_18838 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__18782__auto___18851 = re_frame.interop.now.call(null);
var duration__18783__auto___18852 = (end__18782__auto___18851 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__18839_18853 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__18840_18854 = null;
var count__18841_18855 = (0);
var i__18842_18856 = (0);
while(true){
if((i__18842_18856 < count__18841_18855)){
var vec__18843_18857 = cljs.core._nth.call(null,chunk__18840_18854,i__18842_18856);
var k__18784__auto___18858 = cljs.core.nth.call(null,vec__18843_18857,(0),null);
var cb__18785__auto___18859 = cljs.core.nth.call(null,vec__18843_18857,(1),null);
try{cb__18785__auto___18859.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__18783__auto___18852,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e18846){if((e18846 instanceof java.lang.Exception)){
var e__18786__auto___18860 = e18846;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__18784__auto___18858,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__18786__auto___18860);
} else {
throw e18846;

}
}
var G__18861 = seq__18839_18853;
var G__18862 = chunk__18840_18854;
var G__18863 = count__18841_18855;
var G__18864 = (i__18842_18856 + (1));
seq__18839_18853 = G__18861;
chunk__18840_18854 = G__18862;
count__18841_18855 = G__18863;
i__18842_18856 = G__18864;
continue;
} else {
var temp__6738__auto___18865 = cljs.core.seq.call(null,seq__18839_18853);
if(temp__6738__auto___18865){
var seq__18839_18866__$1 = temp__6738__auto___18865;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18839_18866__$1)){
var c__10881__auto___18867 = cljs.core.chunk_first.call(null,seq__18839_18866__$1);
var G__18868 = cljs.core.chunk_rest.call(null,seq__18839_18866__$1);
var G__18869 = c__10881__auto___18867;
var G__18870 = cljs.core.count.call(null,c__10881__auto___18867);
var G__18871 = (0);
seq__18839_18853 = G__18868;
chunk__18840_18854 = G__18869;
count__18841_18855 = G__18870;
i__18842_18856 = G__18871;
continue;
} else {
var vec__18847_18872 = cljs.core.first.call(null,seq__18839_18866__$1);
var k__18784__auto___18873 = cljs.core.nth.call(null,vec__18847_18872,(0),null);
var cb__18785__auto___18874 = cljs.core.nth.call(null,vec__18847_18872,(1),null);
try{cb__18785__auto___18874.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__18783__auto___18852,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e18850){if((e18850 instanceof java.lang.Exception)){
var e__18786__auto___18875 = e18850;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__18784__auto___18873,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__18786__auto___18875);
} else {
throw e18850;

}
}
var G__18876 = cljs.core.next.call(null,seq__18839_18866__$1);
var G__18877 = null;
var G__18878 = (0);
var G__18879 = (0);
seq__18839_18853 = G__18876;
chunk__18840_18854 = G__18877;
count__18841_18855 = G__18878;
i__18842_18856 = G__18879;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_18838;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_18837;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1506917870583
