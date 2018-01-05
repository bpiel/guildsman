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
var G__76902__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__76902 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__76903__i = 0, G__76903__a = new Array(arguments.length -  0);
while (G__76903__i < G__76903__a.length) {G__76903__a[G__76903__i] = arguments[G__76903__i + 0]; ++G__76903__i;}
  args = new cljs.core.IndexedSeq(G__76903__a,0,null);
} 
return G__76902__delegate.call(this,args);};
G__76902.cljs$lang$maxFixedArity = 0;
G__76902.cljs$lang$applyTo = (function (arglist__76904){
var args = cljs.core.seq(arglist__76904);
return G__76902__delegate(args);
});
G__76902.cljs$core$IFn$_invoke$arity$variadic = G__76902__delegate;
return G__76902;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__76905__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__76905 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__76906__i = 0, G__76906__a = new Array(arguments.length -  0);
while (G__76906__i < G__76906__a.length) {G__76906__a[G__76906__i] = arguments[G__76906__i + 0]; ++G__76906__i;}
  args = new cljs.core.IndexedSeq(G__76906__a,0,null);
} 
return G__76905__delegate.call(this,args);};
G__76905.cljs$lang$maxFixedArity = 0;
G__76905.cljs$lang$applyTo = (function (arglist__76907){
var args = cljs.core.seq(arglist__76907);
return G__76905__delegate(args);
});
G__76905.cljs$core$IFn$_invoke$arity$variadic = G__76905__delegate;
return G__76905;
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

//# sourceMappingURL=debug.js.map?rel=1515122943218
