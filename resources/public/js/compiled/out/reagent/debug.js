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
var G__10419__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__10419 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10420__i = 0, G__10420__a = new Array(arguments.length -  0);
while (G__10420__i < G__10420__a.length) {G__10420__a[G__10420__i] = arguments[G__10420__i + 0]; ++G__10420__i;}
  args = new cljs.core.IndexedSeq(G__10420__a,0,null);
} 
return G__10419__delegate.call(this,args);};
G__10419.cljs$lang$maxFixedArity = 0;
G__10419.cljs$lang$applyTo = (function (arglist__10421){
var args = cljs.core.seq(arglist__10421);
return G__10419__delegate(args);
});
G__10419.cljs$core$IFn$_invoke$arity$variadic = G__10419__delegate;
return G__10419;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__10422__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__10422 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10423__i = 0, G__10423__a = new Array(arguments.length -  0);
while (G__10423__i < G__10423__a.length) {G__10423__a[G__10423__i] = arguments[G__10423__i + 0]; ++G__10423__i;}
  args = new cljs.core.IndexedSeq(G__10423__a,0,null);
} 
return G__10422__delegate.call(this,args);};
G__10422.cljs$lang$maxFixedArity = 0;
G__10422.cljs$lang$applyTo = (function (arglist__10424){
var args = cljs.core.seq(arglist__10424);
return G__10422__delegate(args);
});
G__10422.cljs$core$IFn$_invoke$arity$variadic = G__10422__delegate;
return G__10422;
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

//# sourceMappingURL=debug.js.map?rel=1521112581406
