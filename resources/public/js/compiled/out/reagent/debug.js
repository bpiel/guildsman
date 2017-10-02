// Compiled by ClojureScript 1.9.908 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__12593__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__12593 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12594__i = 0, G__12594__a = new Array(arguments.length -  0);
while (G__12594__i < G__12594__a.length) {G__12594__a[G__12594__i] = arguments[G__12594__i + 0]; ++G__12594__i;}
  args = new cljs.core.IndexedSeq(G__12594__a,0,null);
} 
return G__12593__delegate.call(this,args);};
G__12593.cljs$lang$maxFixedArity = 0;
G__12593.cljs$lang$applyTo = (function (arglist__12595){
var args = cljs.core.seq(arglist__12595);
return G__12593__delegate(args);
});
G__12593.cljs$core$IFn$_invoke$arity$variadic = G__12593__delegate;
return G__12593;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__12596__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__12596 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12597__i = 0, G__12597__a = new Array(arguments.length -  0);
while (G__12597__i < G__12597__a.length) {G__12597__a[G__12597__i] = arguments[G__12597__i + 0]; ++G__12597__i;}
  args = new cljs.core.IndexedSeq(G__12597__a,0,null);
} 
return G__12596__delegate.call(this,args);};
G__12596.cljs$lang$maxFixedArity = 0;
G__12596.cljs$lang$applyTo = (function (arglist__12598){
var args = cljs.core.seq(arglist__12598);
return G__12596__delegate(args);
});
G__12596.cljs$core$IFn$_invoke$arity$variadic = G__12596__delegate;
return G__12596;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1506917863455
