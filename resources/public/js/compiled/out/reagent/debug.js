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
var G__12566__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__12566 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12567__i = 0, G__12567__a = new Array(arguments.length -  0);
while (G__12567__i < G__12567__a.length) {G__12567__a[G__12567__i] = arguments[G__12567__i + 0]; ++G__12567__i;}
  args = new cljs.core.IndexedSeq(G__12567__a,0,null);
} 
return G__12566__delegate.call(this,args);};
G__12566.cljs$lang$maxFixedArity = 0;
G__12566.cljs$lang$applyTo = (function (arglist__12568){
var args = cljs.core.seq(arglist__12568);
return G__12566__delegate(args);
});
G__12566.cljs$core$IFn$_invoke$arity$variadic = G__12566__delegate;
return G__12566;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__12569__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__12569 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12570__i = 0, G__12570__a = new Array(arguments.length -  0);
while (G__12570__i < G__12570__a.length) {G__12570__a[G__12570__i] = arguments[G__12570__i + 0]; ++G__12570__i;}
  args = new cljs.core.IndexedSeq(G__12570__a,0,null);
} 
return G__12569__delegate.call(this,args);};
G__12569.cljs$lang$maxFixedArity = 0;
G__12569.cljs$lang$applyTo = (function (arglist__12571){
var args = cljs.core.seq(arglist__12571);
return G__12569__delegate(args);
});
G__12569.cljs$core$IFn$_invoke$arity$variadic = G__12569__delegate;
return G__12569;
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

//# sourceMappingURL=debug.js.map?rel=1506896669949
