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
var G__55614__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__55614 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55615__i = 0, G__55615__a = new Array(arguments.length -  0);
while (G__55615__i < G__55615__a.length) {G__55615__a[G__55615__i] = arguments[G__55615__i + 0]; ++G__55615__i;}
  args = new cljs.core.IndexedSeq(G__55615__a,0,null);
} 
return G__55614__delegate.call(this,args);};
G__55614.cljs$lang$maxFixedArity = 0;
G__55614.cljs$lang$applyTo = (function (arglist__55616){
var args = cljs.core.seq(arglist__55616);
return G__55614__delegate(args);
});
G__55614.cljs$core$IFn$_invoke$arity$variadic = G__55614__delegate;
return G__55614;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__55617__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__55617 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55618__i = 0, G__55618__a = new Array(arguments.length -  0);
while (G__55618__i < G__55618__a.length) {G__55618__a[G__55618__i] = arguments[G__55618__i + 0]; ++G__55618__i;}
  args = new cljs.core.IndexedSeq(G__55618__a,0,null);
} 
return G__55617__delegate.call(this,args);};
G__55617.cljs$lang$maxFixedArity = 0;
G__55617.cljs$lang$applyTo = (function (arglist__55619){
var args = cljs.core.seq(arglist__55619);
return G__55617__delegate(args);
});
G__55617.cljs$core$IFn$_invoke$arity$variadic = G__55617__delegate;
return G__55617;
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

//# sourceMappingURL=debug.js.map?rel=1524702414910
