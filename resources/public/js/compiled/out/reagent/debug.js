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
var G__64762__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__64762 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64763__i = 0, G__64763__a = new Array(arguments.length -  0);
while (G__64763__i < G__64763__a.length) {G__64763__a[G__64763__i] = arguments[G__64763__i + 0]; ++G__64763__i;}
  args = new cljs.core.IndexedSeq(G__64763__a,0,null);
} 
return G__64762__delegate.call(this,args);};
G__64762.cljs$lang$maxFixedArity = 0;
G__64762.cljs$lang$applyTo = (function (arglist__64764){
var args = cljs.core.seq(arglist__64764);
return G__64762__delegate(args);
});
G__64762.cljs$core$IFn$_invoke$arity$variadic = G__64762__delegate;
return G__64762;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__64765__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__64765 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64766__i = 0, G__64766__a = new Array(arguments.length -  0);
while (G__64766__i < G__64766__a.length) {G__64766__a[G__64766__i] = arguments[G__64766__i + 0]; ++G__64766__i;}
  args = new cljs.core.IndexedSeq(G__64766__a,0,null);
} 
return G__64765__delegate.call(this,args);};
G__64765.cljs$lang$maxFixedArity = 0;
G__64765.cljs$lang$applyTo = (function (arglist__64767){
var args = cljs.core.seq(arglist__64767);
return G__64765__delegate(args);
});
G__64765.cljs$core$IFn$_invoke$arity$variadic = G__64765__delegate;
return G__64765;
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

//# sourceMappingURL=debug.js.map?rel=1514950321358
