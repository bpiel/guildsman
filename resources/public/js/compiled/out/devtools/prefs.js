// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.prefs');
goog.require('cljs.core');
goog.require('devtools.defaults');
devtools.prefs.default_config = (new cljs.core.Delay((function (){
return cljs.core.deref.call(null,devtools.defaults.config);
}),null));
devtools.prefs.external_config = (new cljs.core.Delay((function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261),new cljs.core.Keyword(null,"all","all",892129742)], null);
}),null));
devtools.prefs.env_config = (new cljs.core.Delay((function (){
return cljs.core.PersistentArrayMap.EMPTY;
}),null));
devtools.prefs.initial_config = (new cljs.core.Delay((function (){
return cljs.core.merge.call(null,cljs.core.deref.call(null,devtools.prefs.default_config),cljs.core.deref.call(null,devtools.prefs.external_config),cljs.core.deref.call(null,devtools.prefs.env_config));
}),null));
devtools.prefs._STAR_current_config_STAR_ = (new cljs.core.Delay((function (){
return cljs.core.deref.call(null,devtools.prefs.initial_config);
}),null));
devtools.prefs.set_prefs_BANG_ = (function devtools$prefs$set_prefs_BANG_(new_prefs){
return devtools.prefs._STAR_current_config_STAR_ = new_prefs;
});
devtools.prefs.get_prefs = (function devtools$prefs$get_prefs(){
if(cljs.core.delay_QMARK_.call(null,devtools.prefs._STAR_current_config_STAR_)){
devtools.prefs.set_prefs_BANG_.call(null,cljs.core.deref.call(null,devtools.prefs._STAR_current_config_STAR_));
} else {
}

return devtools.prefs._STAR_current_config_STAR_;
});
devtools.prefs.pref = (function devtools$prefs$pref(key){
return key.call(null,devtools.prefs.get_prefs.call(null));
});
devtools.prefs.set_pref_BANG_ = (function devtools$prefs$set_pref_BANG_(key,val){
return devtools.prefs.set_prefs_BANG_.call(null,cljs.core.assoc.call(null,devtools.prefs.get_prefs.call(null),key,val));
});
devtools.prefs.merge_prefs_BANG_ = (function devtools$prefs$merge_prefs_BANG_(m){
return devtools.prefs.set_prefs_BANG_.call(null,cljs.core.merge.call(null,devtools.prefs.get_prefs.call(null),m));
});
devtools.prefs.update_pref_BANG_ = (function devtools$prefs$update_pref_BANG_(var_args){
var args__11234__auto__ = [];
var len__11227__auto___25897 = arguments.length;
var i__11228__auto___25898 = (0);
while(true){
if((i__11228__auto___25898 < len__11227__auto___25897)){
args__11234__auto__.push((arguments[i__11228__auto___25898]));

var G__25899 = (i__11228__auto___25898 + (1));
i__11228__auto___25898 = G__25899;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((2) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((2)),(0),null)):null);
return devtools.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11235__auto__);
});

devtools.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (key,f,args){
var new_val = cljs.core.apply.call(null,f,devtools.prefs.pref.call(null,key),args);
return devtools.prefs.set_pref_BANG_.call(null,key,new_val);
});

devtools.prefs.update_pref_BANG_.cljs$lang$maxFixedArity = (2);

devtools.prefs.update_pref_BANG_.cljs$lang$applyTo = (function (seq25894){
var G__25895 = cljs.core.first.call(null,seq25894);
var seq25894__$1 = cljs.core.next.call(null,seq25894);
var G__25896 = cljs.core.first.call(null,seq25894__$1);
var seq25894__$2 = cljs.core.next.call(null,seq25894__$1);
return devtools.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25895,G__25896,seq25894__$2);
});


//# sourceMappingURL=prefs.js.map?rel=1506917877740
