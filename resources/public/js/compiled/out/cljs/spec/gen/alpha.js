// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__63432__auto__,writer__63433__auto__,opt__63434__auto__){
return cljs.core._write.call(null,writer__63433__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__64045__auto__ = [];
var len__64038__auto___64426 = arguments.length;
var i__64039__auto___64427 = (0);
while(true){
if((i__64039__auto___64427 < len__64038__auto___64426)){
args__64045__auto__.push((arguments[i__64039__auto___64427]));

var G__64428 = (i__64039__auto___64427 + (1));
i__64039__auto___64427 = G__64428;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq64425){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64425));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__64045__auto__ = [];
var len__64038__auto___64430 = arguments.length;
var i__64039__auto___64431 = (0);
while(true){
if((i__64039__auto___64431 < len__64038__auto___64430)){
args__64045__auto__.push((arguments[i__64039__auto___64431]));

var G__64432 = (i__64039__auto___64431 + (1));
i__64039__auto___64431 = G__64432;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq64429){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64429));
});

var g_QMARK__64433 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_64434 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__64433){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__64433))
,null));
var mkg_64435 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__64433,g_64434){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__64433,g_64434))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__64433,g_64434,mkg_64435){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__64433).call(null,x);
});})(g_QMARK__64433,g_64434,mkg_64435))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__64433,g_64434,mkg_64435){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_64435).call(null,gfn);
});})(g_QMARK__64433,g_64434,mkg_64435))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__64433,g_64434,mkg_64435){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_64434).call(null,generator);
});})(g_QMARK__64433,g_64434,mkg_64435))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__64141__auto___64455 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__64141__auto___64455){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__64045__auto__ = [];
var len__64038__auto___64456 = arguments.length;
var i__64039__auto___64457 = (0);
while(true){
if((i__64039__auto___64457 < len__64038__auto___64456)){
args__64045__auto__.push((arguments[i__64039__auto___64457]));

var G__64458 = (i__64039__auto___64457 + (1));
i__64039__auto___64457 = G__64458;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});})(g__64141__auto___64455))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64141__auto___64455){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__64141__auto___64455),args);
});})(g__64141__auto___64455))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__64141__auto___64455){
return (function (seq64436){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64436));
});})(g__64141__auto___64455))
;


var g__64141__auto___64459 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__64141__auto___64459){
return (function cljs$spec$gen$alpha$list(var_args){
var args__64045__auto__ = [];
var len__64038__auto___64460 = arguments.length;
var i__64039__auto___64461 = (0);
while(true){
if((i__64039__auto___64461 < len__64038__auto___64460)){
args__64045__auto__.push((arguments[i__64039__auto___64461]));

var G__64462 = (i__64039__auto___64461 + (1));
i__64039__auto___64461 = G__64462;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});})(g__64141__auto___64459))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64141__auto___64459){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__64141__auto___64459),args);
});})(g__64141__auto___64459))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__64141__auto___64459){
return (function (seq64437){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64437));
});})(g__64141__auto___64459))
;


var g__64141__auto___64463 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__64141__auto___64463){
return (function cljs$spec$gen$alpha$map(var_args){
var args__64045__auto__ = [];
var len__64038__auto___64464 = arguments.length;
var i__64039__auto___64465 = (0);
while(true){
if((i__64039__auto___64465 < len__64038__auto___64464)){
args__64045__auto__.push((arguments[i__64039__auto___64465]));

var G__64466 = (i__64039__auto___64465 + (1));
i__64039__auto___64465 = G__64466;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});})(g__64141__auto___64463))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64141__auto___64463){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__64141__auto___64463),args);
});})(g__64141__auto___64463))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__64141__auto___64463){
return (function (seq64438){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64438));
});})(g__64141__auto___64463))
;


var g__64141__auto___64467 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__64141__auto___64467){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__64045__auto__ = [];
var len__64038__auto___64468 = arguments.length;
var i__64039__auto___64469 = (0);
while(true){
if((i__64039__auto___64469 < len__64038__auto___64468)){
args__64045__auto__.push((arguments[i__64039__auto___64469]));

var G__64470 = (i__64039__auto___64469 + (1));
i__64039__auto___64469 = G__64470;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});})(g__64141__auto___64467))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64141__auto___64467){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__64141__auto___64467),args);
});})(g__64141__auto___64467))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__64141__auto___64467){
return (function (seq64439){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64439));
});})(g__64141__auto___64467))
;


var g__64141__auto___64471 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__64141__auto___64471){
return (function cljs$spec$gen$alpha$set(var_args){
var args__64045__auto__ = [];
var len__64038__auto___64472 = arguments.length;
var i__64039__auto___64473 = (0);
while(true){
if((i__64039__auto___64473 < len__64038__auto___64472)){
args__64045__auto__.push((arguments[i__64039__auto___64473]));

var G__64474 = (i__64039__auto___64473 + (1));
i__64039__auto___64473 = G__64474;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});})(g__64141__auto___64471))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64141__auto___64471){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__64141__auto___64471),args);
});})(g__64141__auto___64471))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__64141__auto___64471){
return (function (seq64440){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64440));
});})(g__64141__auto___64471))
;


var g__64141__auto___64475 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__64141__auto___64475){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__64045__auto__ = [];
var len__64038__auto___64476 = arguments.length;
var i__64039__auto___64477 = (0);
while(true){
if((i__64039__auto___64477 < len__64038__auto___64476)){
args__64045__auto__.push((arguments[i__64039__auto___64477]));

var G__64478 = (i__64039__auto___64477 + (1));
i__64039__auto___64477 = G__64478;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});})(g__64141__auto___64475))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64141__auto___64475){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__64141__auto___64475),args);
});})(g__64141__auto___64475))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__64141__auto___64475){
return (function (seq64441){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64441));
});})(g__64141__auto___64475))
;


var g__64141__auto___64479 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__64141__auto___64479){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__64045__auto__ = [];
var len__64038__auto___64480 = arguments.length;
var i__64039__auto___64481 = (0);
while(true){
if((i__64039__auto___64481 < len__64038__auto___64480)){
args__64045__auto__.push((arguments[i__64039__auto___64481]));

var G__64482 = (i__64039__auto___64481 + (1));
i__64039__auto___64481 = G__64482;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});})(g__64141__auto___64479))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64141__auto___64479){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__64141__auto___64479),args);
});})(g__64141__auto___64479))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__64141__auto___64479){
return (function (seq64442){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64442));
});})(g__64141__auto___64479))
;


var g__64141__auto___64483 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__64141__auto___64483){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__64045__auto__ = [];
var len__64038__auto___64484 = arguments.length;
var i__64039__auto___64485 = (0);
while(true){
if((i__64039__auto___64485 < len__64038__auto___64484)){
args__64045__auto__.push((arguments[i__64039__auto___64485]));

var G__64486 = (i__64039__auto___64485 + (1));
i__64039__auto___64485 = G__64486;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});})(g__64141__auto___64483))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64141__auto___64483){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__64141__auto___64483),args);
});})(g__64141__auto___64483))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__64141__auto___64483){
return (function (seq64443){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64443));
});})(g__64141__auto___64483))
;


var g__64141__auto___64487 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__64141__auto___64487){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__64045__auto__ = [];
var len__64038__auto___64488 = arguments.length;
var i__64039__auto___64489 = (0);
while(true){
if((i__64039__auto___64489 < len__64038__auto___64488)){
args__64045__auto__.push((arguments[i__64039__auto___64489]));

var G__64490 = (i__64039__auto___64489 + (1));
i__64039__auto___64489 = G__64490;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});})(g__64141__auto___64487))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64141__auto___64487){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__64141__auto___64487),args);
});})(g__64141__auto___64487))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__64141__auto___64487){
return (function (seq64444){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64444));
});})(g__64141__auto___64487))
;


var g__64141__auto___64491 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__64141__auto___64491){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__64045__auto__ = [];
var len__64038__auto___64492 = arguments.length;
var i__64039__auto___64493 = (0);
while(true){
if((i__64039__auto___64493 < len__64038__auto___64492)){
args__64045__auto__.push((arguments[i__64039__auto___64493]));

var G__64494 = (i__64039__auto___64493 + (1));
i__64039__auto___64493 = G__64494;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});})(g__64141__auto___64491))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64141__auto___64491){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__64141__auto___64491),args);
});})(g__64141__auto___64491))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__64141__auto___64491){
return (function (seq64445){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64445));
});})(g__64141__auto___64491))
;


var g__64141__auto___64495 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__64141__auto___64495){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__64045__auto__ = [];
var len__64038__auto___64496 = arguments.length;
var i__64039__auto___64497 = (0);
while(true){
if((i__64039__auto___64497 < len__64038__auto___64496)){
args__64045__auto__.push((arguments[i__64039__auto___64497]));

var G__64498 = (i__64039__auto___64497 + (1));
i__64039__auto___64497 = G__64498;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});})(g__64141__auto___64495))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64141__auto___64495){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__64141__auto___64495),args);
});})(g__64141__auto___64495))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__64141__auto___64495){
return (function (seq64446){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64446));
});})(g__64141__auto___64495))
;


var g__64141__auto___64499 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__64141__auto___64499){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__64045__auto__ = [];
var len__64038__auto___64500 = arguments.length;
var i__64039__auto___64501 = (0);
while(true){
if((i__64039__auto___64501 < len__64038__auto___64500)){
args__64045__auto__.push((arguments[i__64039__auto___64501]));

var G__64502 = (i__64039__auto___64501 + (1));
i__64039__auto___64501 = G__64502;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});})(g__64141__auto___64499))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64141__auto___64499){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__64141__auto___64499),args);
});})(g__64141__auto___64499))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__64141__auto___64499){
return (function (seq64447){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64447));
});})(g__64141__auto___64499))
;


var g__64141__auto___64503 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__64141__auto___64503){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__64045__auto__ = [];
var len__64038__auto___64504 = arguments.length;
var i__64039__auto___64505 = (0);
while(true){
if((i__64039__auto___64505 < len__64038__auto___64504)){
args__64045__auto__.push((arguments[i__64039__auto___64505]));

var G__64506 = (i__64039__auto___64505 + (1));
i__64039__auto___64505 = G__64506;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});})(g__64141__auto___64503))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64141__auto___64503){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__64141__auto___64503),args);
});})(g__64141__auto___64503))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__64141__auto___64503){
return (function (seq64448){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64448));
});})(g__64141__auto___64503))
;


var g__64141__auto___64507 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__64141__auto___64507){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__64045__auto__ = [];
var len__64038__auto___64508 = arguments.length;
var i__64039__auto___64509 = (0);
while(true){
if((i__64039__auto___64509 < len__64038__auto___64508)){
args__64045__auto__.push((arguments[i__64039__auto___64509]));

var G__64510 = (i__64039__auto___64509 + (1));
i__64039__auto___64509 = G__64510;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});})(g__64141__auto___64507))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64141__auto___64507){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__64141__auto___64507),args);
});})(g__64141__auto___64507))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__64141__auto___64507){
return (function (seq64449){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64449));
});})(g__64141__auto___64507))
;


var g__64141__auto___64511 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__64141__auto___64511){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__64045__auto__ = [];
var len__64038__auto___64512 = arguments.length;
var i__64039__auto___64513 = (0);
while(true){
if((i__64039__auto___64513 < len__64038__auto___64512)){
args__64045__auto__.push((arguments[i__64039__auto___64513]));

var G__64514 = (i__64039__auto___64513 + (1));
i__64039__auto___64513 = G__64514;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});})(g__64141__auto___64511))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64141__auto___64511){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__64141__auto___64511),args);
});})(g__64141__auto___64511))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__64141__auto___64511){
return (function (seq64450){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64450));
});})(g__64141__auto___64511))
;


var g__64141__auto___64515 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__64141__auto___64515){
return (function cljs$spec$gen$alpha$return(var_args){
var args__64045__auto__ = [];
var len__64038__auto___64516 = arguments.length;
var i__64039__auto___64517 = (0);
while(true){
if((i__64039__auto___64517 < len__64038__auto___64516)){
args__64045__auto__.push((arguments[i__64039__auto___64517]));

var G__64518 = (i__64039__auto___64517 + (1));
i__64039__auto___64517 = G__64518;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});})(g__64141__auto___64515))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64141__auto___64515){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__64141__auto___64515),args);
});})(g__64141__auto___64515))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__64141__auto___64515){
return (function (seq64451){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64451));
});})(g__64141__auto___64515))
;


var g__64141__auto___64519 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__64141__auto___64519){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__64045__auto__ = [];
var len__64038__auto___64520 = arguments.length;
var i__64039__auto___64521 = (0);
while(true){
if((i__64039__auto___64521 < len__64038__auto___64520)){
args__64045__auto__.push((arguments[i__64039__auto___64521]));

var G__64522 = (i__64039__auto___64521 + (1));
i__64039__auto___64521 = G__64522;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});})(g__64141__auto___64519))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64141__auto___64519){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__64141__auto___64519),args);
});})(g__64141__auto___64519))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__64141__auto___64519){
return (function (seq64452){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64452));
});})(g__64141__auto___64519))
;


var g__64141__auto___64523 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__64141__auto___64523){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__64045__auto__ = [];
var len__64038__auto___64524 = arguments.length;
var i__64039__auto___64525 = (0);
while(true){
if((i__64039__auto___64525 < len__64038__auto___64524)){
args__64045__auto__.push((arguments[i__64039__auto___64525]));

var G__64526 = (i__64039__auto___64525 + (1));
i__64039__auto___64525 = G__64526;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});})(g__64141__auto___64523))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64141__auto___64523){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__64141__auto___64523),args);
});})(g__64141__auto___64523))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__64141__auto___64523){
return (function (seq64453){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64453));
});})(g__64141__auto___64523))
;


var g__64141__auto___64527 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__64141__auto___64527){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__64045__auto__ = [];
var len__64038__auto___64528 = arguments.length;
var i__64039__auto___64529 = (0);
while(true){
if((i__64039__auto___64529 < len__64038__auto___64528)){
args__64045__auto__.push((arguments[i__64039__auto___64529]));

var G__64530 = (i__64039__auto___64529 + (1));
i__64039__auto___64529 = G__64530;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});})(g__64141__auto___64527))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64141__auto___64527){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__64141__auto___64527),args);
});})(g__64141__auto___64527))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__64141__auto___64527){
return (function (seq64454){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64454));
});})(g__64141__auto___64527))
;

var g__64154__auto___64552 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__64154__auto___64552){
return (function cljs$spec$gen$alpha$any(var_args){
var args__64045__auto__ = [];
var len__64038__auto___64553 = arguments.length;
var i__64039__auto___64554 = (0);
while(true){
if((i__64039__auto___64554 < len__64038__auto___64553)){
args__64045__auto__.push((arguments[i__64039__auto___64554]));

var G__64555 = (i__64039__auto___64554 + (1));
i__64039__auto___64554 = G__64555;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});})(g__64154__auto___64552))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64154__auto___64552){
return (function (args){
return cljs.core.deref.call(null,g__64154__auto___64552);
});})(g__64154__auto___64552))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__64154__auto___64552){
return (function (seq64531){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64531));
});})(g__64154__auto___64552))
;


var g__64154__auto___64556 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__64154__auto___64556){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__64045__auto__ = [];
var len__64038__auto___64557 = arguments.length;
var i__64039__auto___64558 = (0);
while(true){
if((i__64039__auto___64558 < len__64038__auto___64557)){
args__64045__auto__.push((arguments[i__64039__auto___64558]));

var G__64559 = (i__64039__auto___64558 + (1));
i__64039__auto___64558 = G__64559;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});})(g__64154__auto___64556))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64154__auto___64556){
return (function (args){
return cljs.core.deref.call(null,g__64154__auto___64556);
});})(g__64154__auto___64556))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__64154__auto___64556){
return (function (seq64532){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64532));
});})(g__64154__auto___64556))
;


var g__64154__auto___64560 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__64154__auto___64560){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__64045__auto__ = [];
var len__64038__auto___64561 = arguments.length;
var i__64039__auto___64562 = (0);
while(true){
if((i__64039__auto___64562 < len__64038__auto___64561)){
args__64045__auto__.push((arguments[i__64039__auto___64562]));

var G__64563 = (i__64039__auto___64562 + (1));
i__64039__auto___64562 = G__64563;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});})(g__64154__auto___64560))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64154__auto___64560){
return (function (args){
return cljs.core.deref.call(null,g__64154__auto___64560);
});})(g__64154__auto___64560))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__64154__auto___64560){
return (function (seq64533){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64533));
});})(g__64154__auto___64560))
;


var g__64154__auto___64564 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__64154__auto___64564){
return (function cljs$spec$gen$alpha$char(var_args){
var args__64045__auto__ = [];
var len__64038__auto___64565 = arguments.length;
var i__64039__auto___64566 = (0);
while(true){
if((i__64039__auto___64566 < len__64038__auto___64565)){
args__64045__auto__.push((arguments[i__64039__auto___64566]));

var G__64567 = (i__64039__auto___64566 + (1));
i__64039__auto___64566 = G__64567;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});})(g__64154__auto___64564))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64154__auto___64564){
return (function (args){
return cljs.core.deref.call(null,g__64154__auto___64564);
});})(g__64154__auto___64564))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__64154__auto___64564){
return (function (seq64534){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64534));
});})(g__64154__auto___64564))
;


var g__64154__auto___64568 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__64154__auto___64568){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__64045__auto__ = [];
var len__64038__auto___64569 = arguments.length;
var i__64039__auto___64570 = (0);
while(true){
if((i__64039__auto___64570 < len__64038__auto___64569)){
args__64045__auto__.push((arguments[i__64039__auto___64570]));

var G__64571 = (i__64039__auto___64570 + (1));
i__64039__auto___64570 = G__64571;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});})(g__64154__auto___64568))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64154__auto___64568){
return (function (args){
return cljs.core.deref.call(null,g__64154__auto___64568);
});})(g__64154__auto___64568))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__64154__auto___64568){
return (function (seq64535){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64535));
});})(g__64154__auto___64568))
;


var g__64154__auto___64572 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__64154__auto___64572){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__64045__auto__ = [];
var len__64038__auto___64573 = arguments.length;
var i__64039__auto___64574 = (0);
while(true){
if((i__64039__auto___64574 < len__64038__auto___64573)){
args__64045__auto__.push((arguments[i__64039__auto___64574]));

var G__64575 = (i__64039__auto___64574 + (1));
i__64039__auto___64574 = G__64575;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});})(g__64154__auto___64572))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64154__auto___64572){
return (function (args){
return cljs.core.deref.call(null,g__64154__auto___64572);
});})(g__64154__auto___64572))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__64154__auto___64572){
return (function (seq64536){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64536));
});})(g__64154__auto___64572))
;


var g__64154__auto___64576 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__64154__auto___64576){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__64045__auto__ = [];
var len__64038__auto___64577 = arguments.length;
var i__64039__auto___64578 = (0);
while(true){
if((i__64039__auto___64578 < len__64038__auto___64577)){
args__64045__auto__.push((arguments[i__64039__auto___64578]));

var G__64579 = (i__64039__auto___64578 + (1));
i__64039__auto___64578 = G__64579;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});})(g__64154__auto___64576))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64154__auto___64576){
return (function (args){
return cljs.core.deref.call(null,g__64154__auto___64576);
});})(g__64154__auto___64576))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__64154__auto___64576){
return (function (seq64537){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64537));
});})(g__64154__auto___64576))
;


var g__64154__auto___64580 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__64154__auto___64580){
return (function cljs$spec$gen$alpha$double(var_args){
var args__64045__auto__ = [];
var len__64038__auto___64581 = arguments.length;
var i__64039__auto___64582 = (0);
while(true){
if((i__64039__auto___64582 < len__64038__auto___64581)){
args__64045__auto__.push((arguments[i__64039__auto___64582]));

var G__64583 = (i__64039__auto___64582 + (1));
i__64039__auto___64582 = G__64583;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});})(g__64154__auto___64580))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64154__auto___64580){
return (function (args){
return cljs.core.deref.call(null,g__64154__auto___64580);
});})(g__64154__auto___64580))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__64154__auto___64580){
return (function (seq64538){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64538));
});})(g__64154__auto___64580))
;


var g__64154__auto___64584 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__64154__auto___64584){
return (function cljs$spec$gen$alpha$int(var_args){
var args__64045__auto__ = [];
var len__64038__auto___64585 = arguments.length;
var i__64039__auto___64586 = (0);
while(true){
if((i__64039__auto___64586 < len__64038__auto___64585)){
args__64045__auto__.push((arguments[i__64039__auto___64586]));

var G__64587 = (i__64039__auto___64586 + (1));
i__64039__auto___64586 = G__64587;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});})(g__64154__auto___64584))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64154__auto___64584){
return (function (args){
return cljs.core.deref.call(null,g__64154__auto___64584);
});})(g__64154__auto___64584))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__64154__auto___64584){
return (function (seq64539){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64539));
});})(g__64154__auto___64584))
;


var g__64154__auto___64588 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__64154__auto___64588){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__64045__auto__ = [];
var len__64038__auto___64589 = arguments.length;
var i__64039__auto___64590 = (0);
while(true){
if((i__64039__auto___64590 < len__64038__auto___64589)){
args__64045__auto__.push((arguments[i__64039__auto___64590]));

var G__64591 = (i__64039__auto___64590 + (1));
i__64039__auto___64590 = G__64591;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});})(g__64154__auto___64588))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64154__auto___64588){
return (function (args){
return cljs.core.deref.call(null,g__64154__auto___64588);
});})(g__64154__auto___64588))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__64154__auto___64588){
return (function (seq64540){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64540));
});})(g__64154__auto___64588))
;


var g__64154__auto___64592 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__64154__auto___64592){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__64045__auto__ = [];
var len__64038__auto___64593 = arguments.length;
var i__64039__auto___64594 = (0);
while(true){
if((i__64039__auto___64594 < len__64038__auto___64593)){
args__64045__auto__.push((arguments[i__64039__auto___64594]));

var G__64595 = (i__64039__auto___64594 + (1));
i__64039__auto___64594 = G__64595;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});})(g__64154__auto___64592))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64154__auto___64592){
return (function (args){
return cljs.core.deref.call(null,g__64154__auto___64592);
});})(g__64154__auto___64592))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__64154__auto___64592){
return (function (seq64541){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64541));
});})(g__64154__auto___64592))
;


var g__64154__auto___64596 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__64154__auto___64596){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__64045__auto__ = [];
var len__64038__auto___64597 = arguments.length;
var i__64039__auto___64598 = (0);
while(true){
if((i__64039__auto___64598 < len__64038__auto___64597)){
args__64045__auto__.push((arguments[i__64039__auto___64598]));

var G__64599 = (i__64039__auto___64598 + (1));
i__64039__auto___64598 = G__64599;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});})(g__64154__auto___64596))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64154__auto___64596){
return (function (args){
return cljs.core.deref.call(null,g__64154__auto___64596);
});})(g__64154__auto___64596))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__64154__auto___64596){
return (function (seq64542){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64542));
});})(g__64154__auto___64596))
;


var g__64154__auto___64600 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__64154__auto___64600){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__64045__auto__ = [];
var len__64038__auto___64601 = arguments.length;
var i__64039__auto___64602 = (0);
while(true){
if((i__64039__auto___64602 < len__64038__auto___64601)){
args__64045__auto__.push((arguments[i__64039__auto___64602]));

var G__64603 = (i__64039__auto___64602 + (1));
i__64039__auto___64602 = G__64603;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});})(g__64154__auto___64600))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64154__auto___64600){
return (function (args){
return cljs.core.deref.call(null,g__64154__auto___64600);
});})(g__64154__auto___64600))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__64154__auto___64600){
return (function (seq64543){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64543));
});})(g__64154__auto___64600))
;


var g__64154__auto___64604 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__64154__auto___64604){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__64045__auto__ = [];
var len__64038__auto___64605 = arguments.length;
var i__64039__auto___64606 = (0);
while(true){
if((i__64039__auto___64606 < len__64038__auto___64605)){
args__64045__auto__.push((arguments[i__64039__auto___64606]));

var G__64607 = (i__64039__auto___64606 + (1));
i__64039__auto___64606 = G__64607;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});})(g__64154__auto___64604))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64154__auto___64604){
return (function (args){
return cljs.core.deref.call(null,g__64154__auto___64604);
});})(g__64154__auto___64604))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__64154__auto___64604){
return (function (seq64544){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64544));
});})(g__64154__auto___64604))
;


var g__64154__auto___64608 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__64154__auto___64608){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__64045__auto__ = [];
var len__64038__auto___64609 = arguments.length;
var i__64039__auto___64610 = (0);
while(true){
if((i__64039__auto___64610 < len__64038__auto___64609)){
args__64045__auto__.push((arguments[i__64039__auto___64610]));

var G__64611 = (i__64039__auto___64610 + (1));
i__64039__auto___64610 = G__64611;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});})(g__64154__auto___64608))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64154__auto___64608){
return (function (args){
return cljs.core.deref.call(null,g__64154__auto___64608);
});})(g__64154__auto___64608))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__64154__auto___64608){
return (function (seq64545){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64545));
});})(g__64154__auto___64608))
;


var g__64154__auto___64612 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__64154__auto___64612){
return (function cljs$spec$gen$alpha$string(var_args){
var args__64045__auto__ = [];
var len__64038__auto___64613 = arguments.length;
var i__64039__auto___64614 = (0);
while(true){
if((i__64039__auto___64614 < len__64038__auto___64613)){
args__64045__auto__.push((arguments[i__64039__auto___64614]));

var G__64615 = (i__64039__auto___64614 + (1));
i__64039__auto___64614 = G__64615;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});})(g__64154__auto___64612))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64154__auto___64612){
return (function (args){
return cljs.core.deref.call(null,g__64154__auto___64612);
});})(g__64154__auto___64612))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__64154__auto___64612){
return (function (seq64546){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64546));
});})(g__64154__auto___64612))
;


var g__64154__auto___64616 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__64154__auto___64616){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__64045__auto__ = [];
var len__64038__auto___64617 = arguments.length;
var i__64039__auto___64618 = (0);
while(true){
if((i__64039__auto___64618 < len__64038__auto___64617)){
args__64045__auto__.push((arguments[i__64039__auto___64618]));

var G__64619 = (i__64039__auto___64618 + (1));
i__64039__auto___64618 = G__64619;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});})(g__64154__auto___64616))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64154__auto___64616){
return (function (args){
return cljs.core.deref.call(null,g__64154__auto___64616);
});})(g__64154__auto___64616))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__64154__auto___64616){
return (function (seq64547){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64547));
});})(g__64154__auto___64616))
;


var g__64154__auto___64620 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__64154__auto___64620){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__64045__auto__ = [];
var len__64038__auto___64621 = arguments.length;
var i__64039__auto___64622 = (0);
while(true){
if((i__64039__auto___64622 < len__64038__auto___64621)){
args__64045__auto__.push((arguments[i__64039__auto___64622]));

var G__64623 = (i__64039__auto___64622 + (1));
i__64039__auto___64622 = G__64623;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});})(g__64154__auto___64620))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64154__auto___64620){
return (function (args){
return cljs.core.deref.call(null,g__64154__auto___64620);
});})(g__64154__auto___64620))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__64154__auto___64620){
return (function (seq64548){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64548));
});})(g__64154__auto___64620))
;


var g__64154__auto___64624 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__64154__auto___64624){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__64045__auto__ = [];
var len__64038__auto___64625 = arguments.length;
var i__64039__auto___64626 = (0);
while(true){
if((i__64039__auto___64626 < len__64038__auto___64625)){
args__64045__auto__.push((arguments[i__64039__auto___64626]));

var G__64627 = (i__64039__auto___64626 + (1));
i__64039__auto___64626 = G__64627;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});})(g__64154__auto___64624))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64154__auto___64624){
return (function (args){
return cljs.core.deref.call(null,g__64154__auto___64624);
});})(g__64154__auto___64624))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__64154__auto___64624){
return (function (seq64549){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64549));
});})(g__64154__auto___64624))
;


var g__64154__auto___64628 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__64154__auto___64628){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__64045__auto__ = [];
var len__64038__auto___64629 = arguments.length;
var i__64039__auto___64630 = (0);
while(true){
if((i__64039__auto___64630 < len__64038__auto___64629)){
args__64045__auto__.push((arguments[i__64039__auto___64630]));

var G__64631 = (i__64039__auto___64630 + (1));
i__64039__auto___64630 = G__64631;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});})(g__64154__auto___64628))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64154__auto___64628){
return (function (args){
return cljs.core.deref.call(null,g__64154__auto___64628);
});})(g__64154__auto___64628))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__64154__auto___64628){
return (function (seq64550){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64550));
});})(g__64154__auto___64628))
;


var g__64154__auto___64632 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__64154__auto___64632){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__64045__auto__ = [];
var len__64038__auto___64633 = arguments.length;
var i__64039__auto___64634 = (0);
while(true){
if((i__64039__auto___64634 < len__64038__auto___64633)){
args__64045__auto__.push((arguments[i__64039__auto___64634]));

var G__64635 = (i__64039__auto___64634 + (1));
i__64039__auto___64634 = G__64635;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});})(g__64154__auto___64632))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__64154__auto___64632){
return (function (args){
return cljs.core.deref.call(null,g__64154__auto___64632);
});})(g__64154__auto___64632))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__64154__auto___64632){
return (function (seq64551){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64551));
});})(g__64154__auto___64632))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__64045__auto__ = [];
var len__64038__auto___64638 = arguments.length;
var i__64039__auto___64639 = (0);
while(true){
if((i__64039__auto___64639 < len__64038__auto___64638)){
args__64045__auto__.push((arguments[i__64039__auto___64639]));

var G__64640 = (i__64039__auto___64639 + (1));
i__64039__auto___64639 = G__64640;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__64636_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__64636_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq64637){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64637));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__64641_SHARP_){
return (new Date(p1__64641_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1514950321156
