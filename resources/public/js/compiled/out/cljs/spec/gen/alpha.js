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

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__10621__auto__,writer__10622__auto__,opt__10623__auto__){
return cljs.core._write.call(null,writer__10622__auto__,"cljs.spec.gen.alpha/LazyVar");
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
var args__11234__auto__ = [];
var len__11227__auto___12257 = arguments.length;
var i__11228__auto___12258 = (0);
while(true){
if((i__11228__auto___12258 < len__11227__auto___12257)){
args__11234__auto__.push((arguments[i__11228__auto___12258]));

var G__12259 = (i__11228__auto___12258 + (1));
i__11228__auto___12258 = G__12259;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq12256){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12256));
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
var args__11234__auto__ = [];
var len__11227__auto___12261 = arguments.length;
var i__11228__auto___12262 = (0);
while(true){
if((i__11228__auto___12262 < len__11227__auto___12261)){
args__11234__auto__.push((arguments[i__11228__auto___12262]));

var G__12263 = (i__11228__auto___12262 + (1));
i__11228__auto___12262 = G__12263;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq12260){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12260));
});

var g_QMARK__12264 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_12265 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__12264){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__12264))
,null));
var mkg_12266 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__12264,g_12265){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__12264,g_12265))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__12264,g_12265,mkg_12266){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__12264).call(null,x);
});})(g_QMARK__12264,g_12265,mkg_12266))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__12264,g_12265,mkg_12266){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_12266).call(null,gfn);
});})(g_QMARK__12264,g_12265,mkg_12266))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__12264,g_12265,mkg_12266){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_12265).call(null,generator);
});})(g_QMARK__12264,g_12265,mkg_12266))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__12228__auto___12286 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__12228__auto___12286){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__11234__auto__ = [];
var len__11227__auto___12287 = arguments.length;
var i__11228__auto___12288 = (0);
while(true){
if((i__11228__auto___12288 < len__11227__auto___12287)){
args__11234__auto__.push((arguments[i__11228__auto___12288]));

var G__12289 = (i__11228__auto___12288 + (1));
i__11228__auto___12288 = G__12289;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});})(g__12228__auto___12286))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12228__auto___12286){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12228__auto___12286),args);
});})(g__12228__auto___12286))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__12228__auto___12286){
return (function (seq12267){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12267));
});})(g__12228__auto___12286))
;


var g__12228__auto___12290 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__12228__auto___12290){
return (function cljs$spec$gen$alpha$list(var_args){
var args__11234__auto__ = [];
var len__11227__auto___12291 = arguments.length;
var i__11228__auto___12292 = (0);
while(true){
if((i__11228__auto___12292 < len__11227__auto___12291)){
args__11234__auto__.push((arguments[i__11228__auto___12292]));

var G__12293 = (i__11228__auto___12292 + (1));
i__11228__auto___12292 = G__12293;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});})(g__12228__auto___12290))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12228__auto___12290){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12228__auto___12290),args);
});})(g__12228__auto___12290))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__12228__auto___12290){
return (function (seq12268){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12268));
});})(g__12228__auto___12290))
;


var g__12228__auto___12294 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__12228__auto___12294){
return (function cljs$spec$gen$alpha$map(var_args){
var args__11234__auto__ = [];
var len__11227__auto___12295 = arguments.length;
var i__11228__auto___12296 = (0);
while(true){
if((i__11228__auto___12296 < len__11227__auto___12295)){
args__11234__auto__.push((arguments[i__11228__auto___12296]));

var G__12297 = (i__11228__auto___12296 + (1));
i__11228__auto___12296 = G__12297;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});})(g__12228__auto___12294))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12228__auto___12294){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12228__auto___12294),args);
});})(g__12228__auto___12294))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__12228__auto___12294){
return (function (seq12269){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12269));
});})(g__12228__auto___12294))
;


var g__12228__auto___12298 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__12228__auto___12298){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__11234__auto__ = [];
var len__11227__auto___12299 = arguments.length;
var i__11228__auto___12300 = (0);
while(true){
if((i__11228__auto___12300 < len__11227__auto___12299)){
args__11234__auto__.push((arguments[i__11228__auto___12300]));

var G__12301 = (i__11228__auto___12300 + (1));
i__11228__auto___12300 = G__12301;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});})(g__12228__auto___12298))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12228__auto___12298){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12228__auto___12298),args);
});})(g__12228__auto___12298))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__12228__auto___12298){
return (function (seq12270){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12270));
});})(g__12228__auto___12298))
;


var g__12228__auto___12302 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__12228__auto___12302){
return (function cljs$spec$gen$alpha$set(var_args){
var args__11234__auto__ = [];
var len__11227__auto___12303 = arguments.length;
var i__11228__auto___12304 = (0);
while(true){
if((i__11228__auto___12304 < len__11227__auto___12303)){
args__11234__auto__.push((arguments[i__11228__auto___12304]));

var G__12305 = (i__11228__auto___12304 + (1));
i__11228__auto___12304 = G__12305;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});})(g__12228__auto___12302))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12228__auto___12302){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12228__auto___12302),args);
});})(g__12228__auto___12302))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__12228__auto___12302){
return (function (seq12271){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12271));
});})(g__12228__auto___12302))
;


var g__12228__auto___12306 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__12228__auto___12306){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__11234__auto__ = [];
var len__11227__auto___12307 = arguments.length;
var i__11228__auto___12308 = (0);
while(true){
if((i__11228__auto___12308 < len__11227__auto___12307)){
args__11234__auto__.push((arguments[i__11228__auto___12308]));

var G__12309 = (i__11228__auto___12308 + (1));
i__11228__auto___12308 = G__12309;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});})(g__12228__auto___12306))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12228__auto___12306){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12228__auto___12306),args);
});})(g__12228__auto___12306))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__12228__auto___12306){
return (function (seq12272){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12272));
});})(g__12228__auto___12306))
;


var g__12228__auto___12310 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__12228__auto___12310){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__11234__auto__ = [];
var len__11227__auto___12311 = arguments.length;
var i__11228__auto___12312 = (0);
while(true){
if((i__11228__auto___12312 < len__11227__auto___12311)){
args__11234__auto__.push((arguments[i__11228__auto___12312]));

var G__12313 = (i__11228__auto___12312 + (1));
i__11228__auto___12312 = G__12313;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});})(g__12228__auto___12310))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12228__auto___12310){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12228__auto___12310),args);
});})(g__12228__auto___12310))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__12228__auto___12310){
return (function (seq12273){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12273));
});})(g__12228__auto___12310))
;


var g__12228__auto___12314 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__12228__auto___12314){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__11234__auto__ = [];
var len__11227__auto___12315 = arguments.length;
var i__11228__auto___12316 = (0);
while(true){
if((i__11228__auto___12316 < len__11227__auto___12315)){
args__11234__auto__.push((arguments[i__11228__auto___12316]));

var G__12317 = (i__11228__auto___12316 + (1));
i__11228__auto___12316 = G__12317;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});})(g__12228__auto___12314))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12228__auto___12314){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12228__auto___12314),args);
});})(g__12228__auto___12314))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__12228__auto___12314){
return (function (seq12274){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12274));
});})(g__12228__auto___12314))
;


var g__12228__auto___12318 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__12228__auto___12318){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__11234__auto__ = [];
var len__11227__auto___12319 = arguments.length;
var i__11228__auto___12320 = (0);
while(true){
if((i__11228__auto___12320 < len__11227__auto___12319)){
args__11234__auto__.push((arguments[i__11228__auto___12320]));

var G__12321 = (i__11228__auto___12320 + (1));
i__11228__auto___12320 = G__12321;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});})(g__12228__auto___12318))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12228__auto___12318){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12228__auto___12318),args);
});})(g__12228__auto___12318))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__12228__auto___12318){
return (function (seq12275){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12275));
});})(g__12228__auto___12318))
;


var g__12228__auto___12322 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__12228__auto___12322){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__11234__auto__ = [];
var len__11227__auto___12323 = arguments.length;
var i__11228__auto___12324 = (0);
while(true){
if((i__11228__auto___12324 < len__11227__auto___12323)){
args__11234__auto__.push((arguments[i__11228__auto___12324]));

var G__12325 = (i__11228__auto___12324 + (1));
i__11228__auto___12324 = G__12325;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});})(g__12228__auto___12322))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12228__auto___12322){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12228__auto___12322),args);
});})(g__12228__auto___12322))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__12228__auto___12322){
return (function (seq12276){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12276));
});})(g__12228__auto___12322))
;


var g__12228__auto___12326 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__12228__auto___12326){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__11234__auto__ = [];
var len__11227__auto___12327 = arguments.length;
var i__11228__auto___12328 = (0);
while(true){
if((i__11228__auto___12328 < len__11227__auto___12327)){
args__11234__auto__.push((arguments[i__11228__auto___12328]));

var G__12329 = (i__11228__auto___12328 + (1));
i__11228__auto___12328 = G__12329;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});})(g__12228__auto___12326))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12228__auto___12326){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12228__auto___12326),args);
});})(g__12228__auto___12326))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__12228__auto___12326){
return (function (seq12277){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12277));
});})(g__12228__auto___12326))
;


var g__12228__auto___12330 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__12228__auto___12330){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__11234__auto__ = [];
var len__11227__auto___12331 = arguments.length;
var i__11228__auto___12332 = (0);
while(true){
if((i__11228__auto___12332 < len__11227__auto___12331)){
args__11234__auto__.push((arguments[i__11228__auto___12332]));

var G__12333 = (i__11228__auto___12332 + (1));
i__11228__auto___12332 = G__12333;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});})(g__12228__auto___12330))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12228__auto___12330){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12228__auto___12330),args);
});})(g__12228__auto___12330))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__12228__auto___12330){
return (function (seq12278){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12278));
});})(g__12228__auto___12330))
;


var g__12228__auto___12334 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__12228__auto___12334){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__11234__auto__ = [];
var len__11227__auto___12335 = arguments.length;
var i__11228__auto___12336 = (0);
while(true){
if((i__11228__auto___12336 < len__11227__auto___12335)){
args__11234__auto__.push((arguments[i__11228__auto___12336]));

var G__12337 = (i__11228__auto___12336 + (1));
i__11228__auto___12336 = G__12337;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});})(g__12228__auto___12334))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12228__auto___12334){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12228__auto___12334),args);
});})(g__12228__auto___12334))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__12228__auto___12334){
return (function (seq12279){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12279));
});})(g__12228__auto___12334))
;


var g__12228__auto___12338 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__12228__auto___12338){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__11234__auto__ = [];
var len__11227__auto___12339 = arguments.length;
var i__11228__auto___12340 = (0);
while(true){
if((i__11228__auto___12340 < len__11227__auto___12339)){
args__11234__auto__.push((arguments[i__11228__auto___12340]));

var G__12341 = (i__11228__auto___12340 + (1));
i__11228__auto___12340 = G__12341;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});})(g__12228__auto___12338))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12228__auto___12338){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12228__auto___12338),args);
});})(g__12228__auto___12338))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__12228__auto___12338){
return (function (seq12280){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12280));
});})(g__12228__auto___12338))
;


var g__12228__auto___12342 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__12228__auto___12342){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__11234__auto__ = [];
var len__11227__auto___12343 = arguments.length;
var i__11228__auto___12344 = (0);
while(true){
if((i__11228__auto___12344 < len__11227__auto___12343)){
args__11234__auto__.push((arguments[i__11228__auto___12344]));

var G__12345 = (i__11228__auto___12344 + (1));
i__11228__auto___12344 = G__12345;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});})(g__12228__auto___12342))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12228__auto___12342){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12228__auto___12342),args);
});})(g__12228__auto___12342))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__12228__auto___12342){
return (function (seq12281){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12281));
});})(g__12228__auto___12342))
;


var g__12228__auto___12346 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__12228__auto___12346){
return (function cljs$spec$gen$alpha$return(var_args){
var args__11234__auto__ = [];
var len__11227__auto___12347 = arguments.length;
var i__11228__auto___12348 = (0);
while(true){
if((i__11228__auto___12348 < len__11227__auto___12347)){
args__11234__auto__.push((arguments[i__11228__auto___12348]));

var G__12349 = (i__11228__auto___12348 + (1));
i__11228__auto___12348 = G__12349;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});})(g__12228__auto___12346))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12228__auto___12346){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12228__auto___12346),args);
});})(g__12228__auto___12346))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__12228__auto___12346){
return (function (seq12282){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12282));
});})(g__12228__auto___12346))
;


var g__12228__auto___12350 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__12228__auto___12350){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__11234__auto__ = [];
var len__11227__auto___12351 = arguments.length;
var i__11228__auto___12352 = (0);
while(true){
if((i__11228__auto___12352 < len__11227__auto___12351)){
args__11234__auto__.push((arguments[i__11228__auto___12352]));

var G__12353 = (i__11228__auto___12352 + (1));
i__11228__auto___12352 = G__12353;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});})(g__12228__auto___12350))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12228__auto___12350){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12228__auto___12350),args);
});})(g__12228__auto___12350))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__12228__auto___12350){
return (function (seq12283){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12283));
});})(g__12228__auto___12350))
;


var g__12228__auto___12354 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__12228__auto___12354){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__11234__auto__ = [];
var len__11227__auto___12355 = arguments.length;
var i__11228__auto___12356 = (0);
while(true){
if((i__11228__auto___12356 < len__11227__auto___12355)){
args__11234__auto__.push((arguments[i__11228__auto___12356]));

var G__12357 = (i__11228__auto___12356 + (1));
i__11228__auto___12356 = G__12357;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});})(g__12228__auto___12354))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12228__auto___12354){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12228__auto___12354),args);
});})(g__12228__auto___12354))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__12228__auto___12354){
return (function (seq12284){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12284));
});})(g__12228__auto___12354))
;


var g__12228__auto___12358 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__12228__auto___12358){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__11234__auto__ = [];
var len__11227__auto___12359 = arguments.length;
var i__11228__auto___12360 = (0);
while(true){
if((i__11228__auto___12360 < len__11227__auto___12359)){
args__11234__auto__.push((arguments[i__11228__auto___12360]));

var G__12361 = (i__11228__auto___12360 + (1));
i__11228__auto___12360 = G__12361;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});})(g__12228__auto___12358))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12228__auto___12358){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12228__auto___12358),args);
});})(g__12228__auto___12358))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__12228__auto___12358){
return (function (seq12285){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12285));
});})(g__12228__auto___12358))
;

var g__12241__auto___12383 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__12241__auto___12383){
return (function cljs$spec$gen$alpha$any(var_args){
var args__11234__auto__ = [];
var len__11227__auto___12384 = arguments.length;
var i__11228__auto___12385 = (0);
while(true){
if((i__11228__auto___12385 < len__11227__auto___12384)){
args__11234__auto__.push((arguments[i__11228__auto___12385]));

var G__12386 = (i__11228__auto___12385 + (1));
i__11228__auto___12385 = G__12386;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});})(g__12241__auto___12383))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12241__auto___12383){
return (function (args){
return cljs.core.deref.call(null,g__12241__auto___12383);
});})(g__12241__auto___12383))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__12241__auto___12383){
return (function (seq12362){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12362));
});})(g__12241__auto___12383))
;


var g__12241__auto___12387 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__12241__auto___12387){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__11234__auto__ = [];
var len__11227__auto___12388 = arguments.length;
var i__11228__auto___12389 = (0);
while(true){
if((i__11228__auto___12389 < len__11227__auto___12388)){
args__11234__auto__.push((arguments[i__11228__auto___12389]));

var G__12390 = (i__11228__auto___12389 + (1));
i__11228__auto___12389 = G__12390;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});})(g__12241__auto___12387))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12241__auto___12387){
return (function (args){
return cljs.core.deref.call(null,g__12241__auto___12387);
});})(g__12241__auto___12387))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__12241__auto___12387){
return (function (seq12363){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12363));
});})(g__12241__auto___12387))
;


var g__12241__auto___12391 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__12241__auto___12391){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__11234__auto__ = [];
var len__11227__auto___12392 = arguments.length;
var i__11228__auto___12393 = (0);
while(true){
if((i__11228__auto___12393 < len__11227__auto___12392)){
args__11234__auto__.push((arguments[i__11228__auto___12393]));

var G__12394 = (i__11228__auto___12393 + (1));
i__11228__auto___12393 = G__12394;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});})(g__12241__auto___12391))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12241__auto___12391){
return (function (args){
return cljs.core.deref.call(null,g__12241__auto___12391);
});})(g__12241__auto___12391))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__12241__auto___12391){
return (function (seq12364){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12364));
});})(g__12241__auto___12391))
;


var g__12241__auto___12395 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__12241__auto___12395){
return (function cljs$spec$gen$alpha$char(var_args){
var args__11234__auto__ = [];
var len__11227__auto___12396 = arguments.length;
var i__11228__auto___12397 = (0);
while(true){
if((i__11228__auto___12397 < len__11227__auto___12396)){
args__11234__auto__.push((arguments[i__11228__auto___12397]));

var G__12398 = (i__11228__auto___12397 + (1));
i__11228__auto___12397 = G__12398;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});})(g__12241__auto___12395))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12241__auto___12395){
return (function (args){
return cljs.core.deref.call(null,g__12241__auto___12395);
});})(g__12241__auto___12395))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__12241__auto___12395){
return (function (seq12365){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12365));
});})(g__12241__auto___12395))
;


var g__12241__auto___12399 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__12241__auto___12399){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__11234__auto__ = [];
var len__11227__auto___12400 = arguments.length;
var i__11228__auto___12401 = (0);
while(true){
if((i__11228__auto___12401 < len__11227__auto___12400)){
args__11234__auto__.push((arguments[i__11228__auto___12401]));

var G__12402 = (i__11228__auto___12401 + (1));
i__11228__auto___12401 = G__12402;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});})(g__12241__auto___12399))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12241__auto___12399){
return (function (args){
return cljs.core.deref.call(null,g__12241__auto___12399);
});})(g__12241__auto___12399))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__12241__auto___12399){
return (function (seq12366){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12366));
});})(g__12241__auto___12399))
;


var g__12241__auto___12403 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__12241__auto___12403){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__11234__auto__ = [];
var len__11227__auto___12404 = arguments.length;
var i__11228__auto___12405 = (0);
while(true){
if((i__11228__auto___12405 < len__11227__auto___12404)){
args__11234__auto__.push((arguments[i__11228__auto___12405]));

var G__12406 = (i__11228__auto___12405 + (1));
i__11228__auto___12405 = G__12406;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});})(g__12241__auto___12403))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12241__auto___12403){
return (function (args){
return cljs.core.deref.call(null,g__12241__auto___12403);
});})(g__12241__auto___12403))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__12241__auto___12403){
return (function (seq12367){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12367));
});})(g__12241__auto___12403))
;


var g__12241__auto___12407 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__12241__auto___12407){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__11234__auto__ = [];
var len__11227__auto___12408 = arguments.length;
var i__11228__auto___12409 = (0);
while(true){
if((i__11228__auto___12409 < len__11227__auto___12408)){
args__11234__auto__.push((arguments[i__11228__auto___12409]));

var G__12410 = (i__11228__auto___12409 + (1));
i__11228__auto___12409 = G__12410;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});})(g__12241__auto___12407))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12241__auto___12407){
return (function (args){
return cljs.core.deref.call(null,g__12241__auto___12407);
});})(g__12241__auto___12407))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__12241__auto___12407){
return (function (seq12368){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12368));
});})(g__12241__auto___12407))
;


var g__12241__auto___12411 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__12241__auto___12411){
return (function cljs$spec$gen$alpha$double(var_args){
var args__11234__auto__ = [];
var len__11227__auto___12412 = arguments.length;
var i__11228__auto___12413 = (0);
while(true){
if((i__11228__auto___12413 < len__11227__auto___12412)){
args__11234__auto__.push((arguments[i__11228__auto___12413]));

var G__12414 = (i__11228__auto___12413 + (1));
i__11228__auto___12413 = G__12414;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});})(g__12241__auto___12411))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12241__auto___12411){
return (function (args){
return cljs.core.deref.call(null,g__12241__auto___12411);
});})(g__12241__auto___12411))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__12241__auto___12411){
return (function (seq12369){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12369));
});})(g__12241__auto___12411))
;


var g__12241__auto___12415 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__12241__auto___12415){
return (function cljs$spec$gen$alpha$int(var_args){
var args__11234__auto__ = [];
var len__11227__auto___12416 = arguments.length;
var i__11228__auto___12417 = (0);
while(true){
if((i__11228__auto___12417 < len__11227__auto___12416)){
args__11234__auto__.push((arguments[i__11228__auto___12417]));

var G__12418 = (i__11228__auto___12417 + (1));
i__11228__auto___12417 = G__12418;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});})(g__12241__auto___12415))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12241__auto___12415){
return (function (args){
return cljs.core.deref.call(null,g__12241__auto___12415);
});})(g__12241__auto___12415))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__12241__auto___12415){
return (function (seq12370){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12370));
});})(g__12241__auto___12415))
;


var g__12241__auto___12419 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__12241__auto___12419){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__11234__auto__ = [];
var len__11227__auto___12420 = arguments.length;
var i__11228__auto___12421 = (0);
while(true){
if((i__11228__auto___12421 < len__11227__auto___12420)){
args__11234__auto__.push((arguments[i__11228__auto___12421]));

var G__12422 = (i__11228__auto___12421 + (1));
i__11228__auto___12421 = G__12422;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});})(g__12241__auto___12419))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12241__auto___12419){
return (function (args){
return cljs.core.deref.call(null,g__12241__auto___12419);
});})(g__12241__auto___12419))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__12241__auto___12419){
return (function (seq12371){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12371));
});})(g__12241__auto___12419))
;


var g__12241__auto___12423 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__12241__auto___12423){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__11234__auto__ = [];
var len__11227__auto___12424 = arguments.length;
var i__11228__auto___12425 = (0);
while(true){
if((i__11228__auto___12425 < len__11227__auto___12424)){
args__11234__auto__.push((arguments[i__11228__auto___12425]));

var G__12426 = (i__11228__auto___12425 + (1));
i__11228__auto___12425 = G__12426;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});})(g__12241__auto___12423))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12241__auto___12423){
return (function (args){
return cljs.core.deref.call(null,g__12241__auto___12423);
});})(g__12241__auto___12423))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__12241__auto___12423){
return (function (seq12372){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12372));
});})(g__12241__auto___12423))
;


var g__12241__auto___12427 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__12241__auto___12427){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__11234__auto__ = [];
var len__11227__auto___12428 = arguments.length;
var i__11228__auto___12429 = (0);
while(true){
if((i__11228__auto___12429 < len__11227__auto___12428)){
args__11234__auto__.push((arguments[i__11228__auto___12429]));

var G__12430 = (i__11228__auto___12429 + (1));
i__11228__auto___12429 = G__12430;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});})(g__12241__auto___12427))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12241__auto___12427){
return (function (args){
return cljs.core.deref.call(null,g__12241__auto___12427);
});})(g__12241__auto___12427))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__12241__auto___12427){
return (function (seq12373){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12373));
});})(g__12241__auto___12427))
;


var g__12241__auto___12431 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__12241__auto___12431){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__11234__auto__ = [];
var len__11227__auto___12432 = arguments.length;
var i__11228__auto___12433 = (0);
while(true){
if((i__11228__auto___12433 < len__11227__auto___12432)){
args__11234__auto__.push((arguments[i__11228__auto___12433]));

var G__12434 = (i__11228__auto___12433 + (1));
i__11228__auto___12433 = G__12434;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});})(g__12241__auto___12431))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12241__auto___12431){
return (function (args){
return cljs.core.deref.call(null,g__12241__auto___12431);
});})(g__12241__auto___12431))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__12241__auto___12431){
return (function (seq12374){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12374));
});})(g__12241__auto___12431))
;


var g__12241__auto___12435 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__12241__auto___12435){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__11234__auto__ = [];
var len__11227__auto___12436 = arguments.length;
var i__11228__auto___12437 = (0);
while(true){
if((i__11228__auto___12437 < len__11227__auto___12436)){
args__11234__auto__.push((arguments[i__11228__auto___12437]));

var G__12438 = (i__11228__auto___12437 + (1));
i__11228__auto___12437 = G__12438;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});})(g__12241__auto___12435))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12241__auto___12435){
return (function (args){
return cljs.core.deref.call(null,g__12241__auto___12435);
});})(g__12241__auto___12435))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__12241__auto___12435){
return (function (seq12375){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12375));
});})(g__12241__auto___12435))
;


var g__12241__auto___12439 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__12241__auto___12439){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__11234__auto__ = [];
var len__11227__auto___12440 = arguments.length;
var i__11228__auto___12441 = (0);
while(true){
if((i__11228__auto___12441 < len__11227__auto___12440)){
args__11234__auto__.push((arguments[i__11228__auto___12441]));

var G__12442 = (i__11228__auto___12441 + (1));
i__11228__auto___12441 = G__12442;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});})(g__12241__auto___12439))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12241__auto___12439){
return (function (args){
return cljs.core.deref.call(null,g__12241__auto___12439);
});})(g__12241__auto___12439))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__12241__auto___12439){
return (function (seq12376){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12376));
});})(g__12241__auto___12439))
;


var g__12241__auto___12443 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__12241__auto___12443){
return (function cljs$spec$gen$alpha$string(var_args){
var args__11234__auto__ = [];
var len__11227__auto___12444 = arguments.length;
var i__11228__auto___12445 = (0);
while(true){
if((i__11228__auto___12445 < len__11227__auto___12444)){
args__11234__auto__.push((arguments[i__11228__auto___12445]));

var G__12446 = (i__11228__auto___12445 + (1));
i__11228__auto___12445 = G__12446;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});})(g__12241__auto___12443))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12241__auto___12443){
return (function (args){
return cljs.core.deref.call(null,g__12241__auto___12443);
});})(g__12241__auto___12443))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__12241__auto___12443){
return (function (seq12377){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12377));
});})(g__12241__auto___12443))
;


var g__12241__auto___12447 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__12241__auto___12447){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__11234__auto__ = [];
var len__11227__auto___12448 = arguments.length;
var i__11228__auto___12449 = (0);
while(true){
if((i__11228__auto___12449 < len__11227__auto___12448)){
args__11234__auto__.push((arguments[i__11228__auto___12449]));

var G__12450 = (i__11228__auto___12449 + (1));
i__11228__auto___12449 = G__12450;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});})(g__12241__auto___12447))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12241__auto___12447){
return (function (args){
return cljs.core.deref.call(null,g__12241__auto___12447);
});})(g__12241__auto___12447))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__12241__auto___12447){
return (function (seq12378){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12378));
});})(g__12241__auto___12447))
;


var g__12241__auto___12451 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__12241__auto___12451){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__11234__auto__ = [];
var len__11227__auto___12452 = arguments.length;
var i__11228__auto___12453 = (0);
while(true){
if((i__11228__auto___12453 < len__11227__auto___12452)){
args__11234__auto__.push((arguments[i__11228__auto___12453]));

var G__12454 = (i__11228__auto___12453 + (1));
i__11228__auto___12453 = G__12454;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});})(g__12241__auto___12451))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12241__auto___12451){
return (function (args){
return cljs.core.deref.call(null,g__12241__auto___12451);
});})(g__12241__auto___12451))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__12241__auto___12451){
return (function (seq12379){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12379));
});})(g__12241__auto___12451))
;


var g__12241__auto___12455 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__12241__auto___12455){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__11234__auto__ = [];
var len__11227__auto___12456 = arguments.length;
var i__11228__auto___12457 = (0);
while(true){
if((i__11228__auto___12457 < len__11227__auto___12456)){
args__11234__auto__.push((arguments[i__11228__auto___12457]));

var G__12458 = (i__11228__auto___12457 + (1));
i__11228__auto___12457 = G__12458;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});})(g__12241__auto___12455))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12241__auto___12455){
return (function (args){
return cljs.core.deref.call(null,g__12241__auto___12455);
});})(g__12241__auto___12455))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__12241__auto___12455){
return (function (seq12380){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12380));
});})(g__12241__auto___12455))
;


var g__12241__auto___12459 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__12241__auto___12459){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__11234__auto__ = [];
var len__11227__auto___12460 = arguments.length;
var i__11228__auto___12461 = (0);
while(true){
if((i__11228__auto___12461 < len__11227__auto___12460)){
args__11234__auto__.push((arguments[i__11228__auto___12461]));

var G__12462 = (i__11228__auto___12461 + (1));
i__11228__auto___12461 = G__12462;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});})(g__12241__auto___12459))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12241__auto___12459){
return (function (args){
return cljs.core.deref.call(null,g__12241__auto___12459);
});})(g__12241__auto___12459))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__12241__auto___12459){
return (function (seq12381){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12381));
});})(g__12241__auto___12459))
;


var g__12241__auto___12463 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__12241__auto___12463){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__11234__auto__ = [];
var len__11227__auto___12464 = arguments.length;
var i__11228__auto___12465 = (0);
while(true){
if((i__11228__auto___12465 < len__11227__auto___12464)){
args__11234__auto__.push((arguments[i__11228__auto___12465]));

var G__12466 = (i__11228__auto___12465 + (1));
i__11228__auto___12465 = G__12466;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});})(g__12241__auto___12463))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12241__auto___12463){
return (function (args){
return cljs.core.deref.call(null,g__12241__auto___12463);
});})(g__12241__auto___12463))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__12241__auto___12463){
return (function (seq12382){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12382));
});})(g__12241__auto___12463))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__11234__auto__ = [];
var len__11227__auto___12469 = arguments.length;
var i__11228__auto___12470 = (0);
while(true){
if((i__11228__auto___12470 < len__11227__auto___12469)){
args__11234__auto__.push((arguments[i__11228__auto___12470]));

var G__12471 = (i__11228__auto___12470 + (1));
i__11228__auto___12470 = G__12471;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__12467_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__12467_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq12468){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12468));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__12472_SHARP_){
return (new Date(p1__12472_SHARP_));
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

//# sourceMappingURL=alpha.js.map?rel=1506917863278
