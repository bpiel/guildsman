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
var seq__18830 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__18831 = null;
var count__18832 = (0);
var i__18833 = (0);
while(true){
if((i__18833 < count__18832)){
var vec__18834 = cljs.core._nth.call(null,chunk__18831,i__18833);
var effect_key = cljs.core.nth.call(null,vec__18834,(0),null);
var effect_value = cljs.core.nth.call(null,vec__18834,(1),null);
var temp__6736__auto___18840 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__6736__auto___18840)){
var effect_fn_18841 = temp__6736__auto___18840;
effect_fn_18841.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__18842 = seq__18830;
var G__18843 = chunk__18831;
var G__18844 = count__18832;
var G__18845 = (i__18833 + (1));
seq__18830 = G__18842;
chunk__18831 = G__18843;
count__18832 = G__18844;
i__18833 = G__18845;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__18830);
if(temp__6738__auto__){
var seq__18830__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18830__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__18830__$1);
var G__18846 = cljs.core.chunk_rest.call(null,seq__18830__$1);
var G__18847 = c__10741__auto__;
var G__18848 = cljs.core.count.call(null,c__10741__auto__);
var G__18849 = (0);
seq__18830 = G__18846;
chunk__18831 = G__18847;
count__18832 = G__18848;
i__18833 = G__18849;
continue;
} else {
var vec__18837 = cljs.core.first.call(null,seq__18830__$1);
var effect_key = cljs.core.nth.call(null,vec__18837,(0),null);
var effect_value = cljs.core.nth.call(null,vec__18837,(1),null);
var temp__6736__auto___18850 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__6736__auto___18850)){
var effect_fn_18851 = temp__6736__auto___18850;
effect_fn_18851.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__18852 = cljs.core.next.call(null,seq__18830__$1);
var G__18853 = null;
var G__18854 = (0);
var G__18855 = (0);
seq__18830 = G__18852;
chunk__18831 = G__18853;
count__18832 = G__18854;
i__18833 = G__18855;
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
var seq__18856 = cljs.core.seq.call(null,value);
var chunk__18857 = null;
var count__18858 = (0);
var i__18859 = (0);
while(true){
if((i__18859 < count__18858)){
var map__18860 = cljs.core._nth.call(null,chunk__18857,i__18859);
var map__18860__$1 = ((((!((map__18860 == null)))?((((map__18860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18860.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18860):map__18860);
var effect = map__18860__$1;
var ms = cljs.core.get.call(null,map__18860__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__18860__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__18856,chunk__18857,count__18858,i__18859,map__18860,map__18860__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__18856,chunk__18857,count__18858,i__18859,map__18860,map__18860__$1,effect,ms,dispatch))
,ms);
}

var G__18864 = seq__18856;
var G__18865 = chunk__18857;
var G__18866 = count__18858;
var G__18867 = (i__18859 + (1));
seq__18856 = G__18864;
chunk__18857 = G__18865;
count__18858 = G__18866;
i__18859 = G__18867;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__18856);
if(temp__6738__auto__){
var seq__18856__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18856__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__18856__$1);
var G__18868 = cljs.core.chunk_rest.call(null,seq__18856__$1);
var G__18869 = c__10741__auto__;
var G__18870 = cljs.core.count.call(null,c__10741__auto__);
var G__18871 = (0);
seq__18856 = G__18868;
chunk__18857 = G__18869;
count__18858 = G__18870;
i__18859 = G__18871;
continue;
} else {
var map__18862 = cljs.core.first.call(null,seq__18856__$1);
var map__18862__$1 = ((((!((map__18862 == null)))?((((map__18862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18862.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18862):map__18862);
var effect = map__18862__$1;
var ms = cljs.core.get.call(null,map__18862__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__18862__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__18856,chunk__18857,count__18858,i__18859,map__18862,map__18862__$1,effect,ms,dispatch,seq__18856__$1,temp__6738__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__18856,chunk__18857,count__18858,i__18859,map__18862,map__18862__$1,effect,ms,dispatch,seq__18856__$1,temp__6738__auto__))
,ms);
}

var G__18872 = cljs.core.next.call(null,seq__18856__$1);
var G__18873 = null;
var G__18874 = (0);
var G__18875 = (0);
seq__18856 = G__18872;
chunk__18857 = G__18873;
count__18858 = G__18874;
i__18859 = G__18875;
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
var seq__18876 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__18877 = null;
var count__18878 = (0);
var i__18879 = (0);
while(true){
if((i__18879 < count__18878)){
var event = cljs.core._nth.call(null,chunk__18877,i__18879);
re_frame.router.dispatch.call(null,event);

var G__18880 = seq__18876;
var G__18881 = chunk__18877;
var G__18882 = count__18878;
var G__18883 = (i__18879 + (1));
seq__18876 = G__18880;
chunk__18877 = G__18881;
count__18878 = G__18882;
i__18879 = G__18883;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__18876);
if(temp__6738__auto__){
var seq__18876__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18876__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__18876__$1);
var G__18884 = cljs.core.chunk_rest.call(null,seq__18876__$1);
var G__18885 = c__10741__auto__;
var G__18886 = cljs.core.count.call(null,c__10741__auto__);
var G__18887 = (0);
seq__18876 = G__18884;
chunk__18877 = G__18885;
count__18878 = G__18886;
i__18879 = G__18887;
continue;
} else {
var event = cljs.core.first.call(null,seq__18876__$1);
re_frame.router.dispatch.call(null,event);

var G__18888 = cljs.core.next.call(null,seq__18876__$1);
var G__18889 = null;
var G__18890 = (0);
var G__18891 = (0);
seq__18876 = G__18888;
chunk__18877 = G__18889;
count__18878 = G__18890;
i__18879 = G__18891;
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
var seq__18892 = cljs.core.seq.call(null,value);
var chunk__18893 = null;
var count__18894 = (0);
var i__18895 = (0);
while(true){
if((i__18895 < count__18894)){
var event = cljs.core._nth.call(null,chunk__18893,i__18895);
clear_event.call(null,event);

var G__18896 = seq__18892;
var G__18897 = chunk__18893;
var G__18898 = count__18894;
var G__18899 = (i__18895 + (1));
seq__18892 = G__18896;
chunk__18893 = G__18897;
count__18894 = G__18898;
i__18895 = G__18899;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__18892);
if(temp__6738__auto__){
var seq__18892__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18892__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__18892__$1);
var G__18900 = cljs.core.chunk_rest.call(null,seq__18892__$1);
var G__18901 = c__10741__auto__;
var G__18902 = cljs.core.count.call(null,c__10741__auto__);
var G__18903 = (0);
seq__18892 = G__18900;
chunk__18893 = G__18901;
count__18894 = G__18902;
i__18895 = G__18903;
continue;
} else {
var event = cljs.core.first.call(null,seq__18892__$1);
clear_event.call(null,event);

var G__18904 = cljs.core.next.call(null,seq__18892__$1);
var G__18905 = null;
var G__18906 = (0);
var G__18907 = (0);
seq__18892 = G__18904;
chunk__18893 = G__18905;
count__18894 = G__18906;
i__18895 = G__18907;
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

//# sourceMappingURL=fx.js.map?rel=1506896678507
