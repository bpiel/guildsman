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

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__9030__auto__,writer__9031__auto__,opt__9032__auto__){
return cljs.core._write.call(null,writer__9031__auto__,"cljs.spec.gen.alpha/LazyVar");
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
var args__9643__auto__ = [];
var len__9636__auto___10083 = arguments.length;
var i__9637__auto___10084 = (0);
while(true){
if((i__9637__auto___10084 < len__9636__auto___10083)){
args__9643__auto__.push((arguments[i__9637__auto___10084]));

var G__10085 = (i__9637__auto___10084 + (1));
i__9637__auto___10084 = G__10085;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq10082){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10082));
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
var args__9643__auto__ = [];
var len__9636__auto___10087 = arguments.length;
var i__9637__auto___10088 = (0);
while(true){
if((i__9637__auto___10088 < len__9636__auto___10087)){
args__9643__auto__.push((arguments[i__9637__auto___10088]));

var G__10089 = (i__9637__auto___10088 + (1));
i__9637__auto___10088 = G__10089;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq10086){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10086));
});

var g_QMARK__10090 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_10091 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__10090){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__10090))
,null));
var mkg_10092 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__10090,g_10091){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__10090,g_10091))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__10090,g_10091,mkg_10092){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__10090).call(null,x);
});})(g_QMARK__10090,g_10091,mkg_10092))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__10090,g_10091,mkg_10092){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_10092).call(null,gfn);
});})(g_QMARK__10090,g_10091,mkg_10092))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__10090,g_10091,mkg_10092){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_10091).call(null,generator);
});})(g_QMARK__10090,g_10091,mkg_10092))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__9798__auto___10112 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__9798__auto___10112){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__9643__auto__ = [];
var len__9636__auto___10113 = arguments.length;
var i__9637__auto___10114 = (0);
while(true){
if((i__9637__auto___10114 < len__9636__auto___10113)){
args__9643__auto__.push((arguments[i__9637__auto___10114]));

var G__10115 = (i__9637__auto___10114 + (1));
i__9637__auto___10114 = G__10115;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});})(g__9798__auto___10112))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9798__auto___10112){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9798__auto___10112),args);
});})(g__9798__auto___10112))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__9798__auto___10112){
return (function (seq10093){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10093));
});})(g__9798__auto___10112))
;


var g__9798__auto___10116 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__9798__auto___10116){
return (function cljs$spec$gen$alpha$list(var_args){
var args__9643__auto__ = [];
var len__9636__auto___10117 = arguments.length;
var i__9637__auto___10118 = (0);
while(true){
if((i__9637__auto___10118 < len__9636__auto___10117)){
args__9643__auto__.push((arguments[i__9637__auto___10118]));

var G__10119 = (i__9637__auto___10118 + (1));
i__9637__auto___10118 = G__10119;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});})(g__9798__auto___10116))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9798__auto___10116){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9798__auto___10116),args);
});})(g__9798__auto___10116))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__9798__auto___10116){
return (function (seq10094){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10094));
});})(g__9798__auto___10116))
;


var g__9798__auto___10120 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__9798__auto___10120){
return (function cljs$spec$gen$alpha$map(var_args){
var args__9643__auto__ = [];
var len__9636__auto___10121 = arguments.length;
var i__9637__auto___10122 = (0);
while(true){
if((i__9637__auto___10122 < len__9636__auto___10121)){
args__9643__auto__.push((arguments[i__9637__auto___10122]));

var G__10123 = (i__9637__auto___10122 + (1));
i__9637__auto___10122 = G__10123;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});})(g__9798__auto___10120))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9798__auto___10120){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9798__auto___10120),args);
});})(g__9798__auto___10120))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__9798__auto___10120){
return (function (seq10095){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10095));
});})(g__9798__auto___10120))
;


var g__9798__auto___10124 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__9798__auto___10124){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__9643__auto__ = [];
var len__9636__auto___10125 = arguments.length;
var i__9637__auto___10126 = (0);
while(true){
if((i__9637__auto___10126 < len__9636__auto___10125)){
args__9643__auto__.push((arguments[i__9637__auto___10126]));

var G__10127 = (i__9637__auto___10126 + (1));
i__9637__auto___10126 = G__10127;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});})(g__9798__auto___10124))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9798__auto___10124){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9798__auto___10124),args);
});})(g__9798__auto___10124))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__9798__auto___10124){
return (function (seq10096){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10096));
});})(g__9798__auto___10124))
;


var g__9798__auto___10128 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__9798__auto___10128){
return (function cljs$spec$gen$alpha$set(var_args){
var args__9643__auto__ = [];
var len__9636__auto___10129 = arguments.length;
var i__9637__auto___10130 = (0);
while(true){
if((i__9637__auto___10130 < len__9636__auto___10129)){
args__9643__auto__.push((arguments[i__9637__auto___10130]));

var G__10131 = (i__9637__auto___10130 + (1));
i__9637__auto___10130 = G__10131;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});})(g__9798__auto___10128))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9798__auto___10128){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9798__auto___10128),args);
});})(g__9798__auto___10128))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__9798__auto___10128){
return (function (seq10097){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10097));
});})(g__9798__auto___10128))
;


var g__9798__auto___10132 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__9798__auto___10132){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__9643__auto__ = [];
var len__9636__auto___10133 = arguments.length;
var i__9637__auto___10134 = (0);
while(true){
if((i__9637__auto___10134 < len__9636__auto___10133)){
args__9643__auto__.push((arguments[i__9637__auto___10134]));

var G__10135 = (i__9637__auto___10134 + (1));
i__9637__auto___10134 = G__10135;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});})(g__9798__auto___10132))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9798__auto___10132){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9798__auto___10132),args);
});})(g__9798__auto___10132))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__9798__auto___10132){
return (function (seq10098){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10098));
});})(g__9798__auto___10132))
;


var g__9798__auto___10136 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__9798__auto___10136){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__9643__auto__ = [];
var len__9636__auto___10137 = arguments.length;
var i__9637__auto___10138 = (0);
while(true){
if((i__9637__auto___10138 < len__9636__auto___10137)){
args__9643__auto__.push((arguments[i__9637__auto___10138]));

var G__10139 = (i__9637__auto___10138 + (1));
i__9637__auto___10138 = G__10139;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});})(g__9798__auto___10136))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9798__auto___10136){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9798__auto___10136),args);
});})(g__9798__auto___10136))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__9798__auto___10136){
return (function (seq10099){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10099));
});})(g__9798__auto___10136))
;


var g__9798__auto___10140 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__9798__auto___10140){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__9643__auto__ = [];
var len__9636__auto___10141 = arguments.length;
var i__9637__auto___10142 = (0);
while(true){
if((i__9637__auto___10142 < len__9636__auto___10141)){
args__9643__auto__.push((arguments[i__9637__auto___10142]));

var G__10143 = (i__9637__auto___10142 + (1));
i__9637__auto___10142 = G__10143;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});})(g__9798__auto___10140))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9798__auto___10140){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9798__auto___10140),args);
});})(g__9798__auto___10140))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__9798__auto___10140){
return (function (seq10100){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10100));
});})(g__9798__auto___10140))
;


var g__9798__auto___10144 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__9798__auto___10144){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__9643__auto__ = [];
var len__9636__auto___10145 = arguments.length;
var i__9637__auto___10146 = (0);
while(true){
if((i__9637__auto___10146 < len__9636__auto___10145)){
args__9643__auto__.push((arguments[i__9637__auto___10146]));

var G__10147 = (i__9637__auto___10146 + (1));
i__9637__auto___10146 = G__10147;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});})(g__9798__auto___10144))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9798__auto___10144){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9798__auto___10144),args);
});})(g__9798__auto___10144))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__9798__auto___10144){
return (function (seq10101){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10101));
});})(g__9798__auto___10144))
;


var g__9798__auto___10148 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__9798__auto___10148){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__9643__auto__ = [];
var len__9636__auto___10149 = arguments.length;
var i__9637__auto___10150 = (0);
while(true){
if((i__9637__auto___10150 < len__9636__auto___10149)){
args__9643__auto__.push((arguments[i__9637__auto___10150]));

var G__10151 = (i__9637__auto___10150 + (1));
i__9637__auto___10150 = G__10151;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});})(g__9798__auto___10148))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9798__auto___10148){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9798__auto___10148),args);
});})(g__9798__auto___10148))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__9798__auto___10148){
return (function (seq10102){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10102));
});})(g__9798__auto___10148))
;


var g__9798__auto___10152 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__9798__auto___10152){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__9643__auto__ = [];
var len__9636__auto___10153 = arguments.length;
var i__9637__auto___10154 = (0);
while(true){
if((i__9637__auto___10154 < len__9636__auto___10153)){
args__9643__auto__.push((arguments[i__9637__auto___10154]));

var G__10155 = (i__9637__auto___10154 + (1));
i__9637__auto___10154 = G__10155;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});})(g__9798__auto___10152))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9798__auto___10152){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9798__auto___10152),args);
});})(g__9798__auto___10152))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__9798__auto___10152){
return (function (seq10103){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10103));
});})(g__9798__auto___10152))
;


var g__9798__auto___10156 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__9798__auto___10156){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__9643__auto__ = [];
var len__9636__auto___10157 = arguments.length;
var i__9637__auto___10158 = (0);
while(true){
if((i__9637__auto___10158 < len__9636__auto___10157)){
args__9643__auto__.push((arguments[i__9637__auto___10158]));

var G__10159 = (i__9637__auto___10158 + (1));
i__9637__auto___10158 = G__10159;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});})(g__9798__auto___10156))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9798__auto___10156){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9798__auto___10156),args);
});})(g__9798__auto___10156))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__9798__auto___10156){
return (function (seq10104){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10104));
});})(g__9798__auto___10156))
;


var g__9798__auto___10160 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__9798__auto___10160){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__9643__auto__ = [];
var len__9636__auto___10161 = arguments.length;
var i__9637__auto___10162 = (0);
while(true){
if((i__9637__auto___10162 < len__9636__auto___10161)){
args__9643__auto__.push((arguments[i__9637__auto___10162]));

var G__10163 = (i__9637__auto___10162 + (1));
i__9637__auto___10162 = G__10163;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});})(g__9798__auto___10160))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9798__auto___10160){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9798__auto___10160),args);
});})(g__9798__auto___10160))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__9798__auto___10160){
return (function (seq10105){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10105));
});})(g__9798__auto___10160))
;


var g__9798__auto___10164 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__9798__auto___10164){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__9643__auto__ = [];
var len__9636__auto___10165 = arguments.length;
var i__9637__auto___10166 = (0);
while(true){
if((i__9637__auto___10166 < len__9636__auto___10165)){
args__9643__auto__.push((arguments[i__9637__auto___10166]));

var G__10167 = (i__9637__auto___10166 + (1));
i__9637__auto___10166 = G__10167;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});})(g__9798__auto___10164))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9798__auto___10164){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9798__auto___10164),args);
});})(g__9798__auto___10164))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__9798__auto___10164){
return (function (seq10106){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10106));
});})(g__9798__auto___10164))
;


var g__9798__auto___10168 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__9798__auto___10168){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__9643__auto__ = [];
var len__9636__auto___10169 = arguments.length;
var i__9637__auto___10170 = (0);
while(true){
if((i__9637__auto___10170 < len__9636__auto___10169)){
args__9643__auto__.push((arguments[i__9637__auto___10170]));

var G__10171 = (i__9637__auto___10170 + (1));
i__9637__auto___10170 = G__10171;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});})(g__9798__auto___10168))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9798__auto___10168){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9798__auto___10168),args);
});})(g__9798__auto___10168))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__9798__auto___10168){
return (function (seq10107){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10107));
});})(g__9798__auto___10168))
;


var g__9798__auto___10172 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__9798__auto___10172){
return (function cljs$spec$gen$alpha$return(var_args){
var args__9643__auto__ = [];
var len__9636__auto___10173 = arguments.length;
var i__9637__auto___10174 = (0);
while(true){
if((i__9637__auto___10174 < len__9636__auto___10173)){
args__9643__auto__.push((arguments[i__9637__auto___10174]));

var G__10175 = (i__9637__auto___10174 + (1));
i__9637__auto___10174 = G__10175;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});})(g__9798__auto___10172))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9798__auto___10172){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9798__auto___10172),args);
});})(g__9798__auto___10172))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__9798__auto___10172){
return (function (seq10108){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10108));
});})(g__9798__auto___10172))
;


var g__9798__auto___10176 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__9798__auto___10176){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__9643__auto__ = [];
var len__9636__auto___10177 = arguments.length;
var i__9637__auto___10178 = (0);
while(true){
if((i__9637__auto___10178 < len__9636__auto___10177)){
args__9643__auto__.push((arguments[i__9637__auto___10178]));

var G__10179 = (i__9637__auto___10178 + (1));
i__9637__auto___10178 = G__10179;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});})(g__9798__auto___10176))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9798__auto___10176){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9798__auto___10176),args);
});})(g__9798__auto___10176))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__9798__auto___10176){
return (function (seq10109){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10109));
});})(g__9798__auto___10176))
;


var g__9798__auto___10180 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__9798__auto___10180){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__9643__auto__ = [];
var len__9636__auto___10181 = arguments.length;
var i__9637__auto___10182 = (0);
while(true){
if((i__9637__auto___10182 < len__9636__auto___10181)){
args__9643__auto__.push((arguments[i__9637__auto___10182]));

var G__10183 = (i__9637__auto___10182 + (1));
i__9637__auto___10182 = G__10183;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});})(g__9798__auto___10180))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9798__auto___10180){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9798__auto___10180),args);
});})(g__9798__auto___10180))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__9798__auto___10180){
return (function (seq10110){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10110));
});})(g__9798__auto___10180))
;


var g__9798__auto___10184 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__9798__auto___10184){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__9643__auto__ = [];
var len__9636__auto___10185 = arguments.length;
var i__9637__auto___10186 = (0);
while(true){
if((i__9637__auto___10186 < len__9636__auto___10185)){
args__9643__auto__.push((arguments[i__9637__auto___10186]));

var G__10187 = (i__9637__auto___10186 + (1));
i__9637__auto___10186 = G__10187;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});})(g__9798__auto___10184))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9798__auto___10184){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9798__auto___10184),args);
});})(g__9798__auto___10184))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__9798__auto___10184){
return (function (seq10111){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10111));
});})(g__9798__auto___10184))
;

var g__9811__auto___10209 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__9811__auto___10209){
return (function cljs$spec$gen$alpha$any(var_args){
var args__9643__auto__ = [];
var len__9636__auto___10210 = arguments.length;
var i__9637__auto___10211 = (0);
while(true){
if((i__9637__auto___10211 < len__9636__auto___10210)){
args__9643__auto__.push((arguments[i__9637__auto___10211]));

var G__10212 = (i__9637__auto___10211 + (1));
i__9637__auto___10211 = G__10212;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});})(g__9811__auto___10209))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9811__auto___10209){
return (function (args){
return cljs.core.deref.call(null,g__9811__auto___10209);
});})(g__9811__auto___10209))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__9811__auto___10209){
return (function (seq10188){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10188));
});})(g__9811__auto___10209))
;


var g__9811__auto___10213 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__9811__auto___10213){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__9643__auto__ = [];
var len__9636__auto___10214 = arguments.length;
var i__9637__auto___10215 = (0);
while(true){
if((i__9637__auto___10215 < len__9636__auto___10214)){
args__9643__auto__.push((arguments[i__9637__auto___10215]));

var G__10216 = (i__9637__auto___10215 + (1));
i__9637__auto___10215 = G__10216;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});})(g__9811__auto___10213))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9811__auto___10213){
return (function (args){
return cljs.core.deref.call(null,g__9811__auto___10213);
});})(g__9811__auto___10213))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__9811__auto___10213){
return (function (seq10189){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10189));
});})(g__9811__auto___10213))
;


var g__9811__auto___10217 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__9811__auto___10217){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__9643__auto__ = [];
var len__9636__auto___10218 = arguments.length;
var i__9637__auto___10219 = (0);
while(true){
if((i__9637__auto___10219 < len__9636__auto___10218)){
args__9643__auto__.push((arguments[i__9637__auto___10219]));

var G__10220 = (i__9637__auto___10219 + (1));
i__9637__auto___10219 = G__10220;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});})(g__9811__auto___10217))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9811__auto___10217){
return (function (args){
return cljs.core.deref.call(null,g__9811__auto___10217);
});})(g__9811__auto___10217))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__9811__auto___10217){
return (function (seq10190){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10190));
});})(g__9811__auto___10217))
;


var g__9811__auto___10221 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__9811__auto___10221){
return (function cljs$spec$gen$alpha$char(var_args){
var args__9643__auto__ = [];
var len__9636__auto___10222 = arguments.length;
var i__9637__auto___10223 = (0);
while(true){
if((i__9637__auto___10223 < len__9636__auto___10222)){
args__9643__auto__.push((arguments[i__9637__auto___10223]));

var G__10224 = (i__9637__auto___10223 + (1));
i__9637__auto___10223 = G__10224;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});})(g__9811__auto___10221))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9811__auto___10221){
return (function (args){
return cljs.core.deref.call(null,g__9811__auto___10221);
});})(g__9811__auto___10221))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__9811__auto___10221){
return (function (seq10191){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10191));
});})(g__9811__auto___10221))
;


var g__9811__auto___10225 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__9811__auto___10225){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__9643__auto__ = [];
var len__9636__auto___10226 = arguments.length;
var i__9637__auto___10227 = (0);
while(true){
if((i__9637__auto___10227 < len__9636__auto___10226)){
args__9643__auto__.push((arguments[i__9637__auto___10227]));

var G__10228 = (i__9637__auto___10227 + (1));
i__9637__auto___10227 = G__10228;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});})(g__9811__auto___10225))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9811__auto___10225){
return (function (args){
return cljs.core.deref.call(null,g__9811__auto___10225);
});})(g__9811__auto___10225))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__9811__auto___10225){
return (function (seq10192){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10192));
});})(g__9811__auto___10225))
;


var g__9811__auto___10229 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__9811__auto___10229){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__9643__auto__ = [];
var len__9636__auto___10230 = arguments.length;
var i__9637__auto___10231 = (0);
while(true){
if((i__9637__auto___10231 < len__9636__auto___10230)){
args__9643__auto__.push((arguments[i__9637__auto___10231]));

var G__10232 = (i__9637__auto___10231 + (1));
i__9637__auto___10231 = G__10232;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});})(g__9811__auto___10229))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9811__auto___10229){
return (function (args){
return cljs.core.deref.call(null,g__9811__auto___10229);
});})(g__9811__auto___10229))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__9811__auto___10229){
return (function (seq10193){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10193));
});})(g__9811__auto___10229))
;


var g__9811__auto___10233 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__9811__auto___10233){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__9643__auto__ = [];
var len__9636__auto___10234 = arguments.length;
var i__9637__auto___10235 = (0);
while(true){
if((i__9637__auto___10235 < len__9636__auto___10234)){
args__9643__auto__.push((arguments[i__9637__auto___10235]));

var G__10236 = (i__9637__auto___10235 + (1));
i__9637__auto___10235 = G__10236;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});})(g__9811__auto___10233))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9811__auto___10233){
return (function (args){
return cljs.core.deref.call(null,g__9811__auto___10233);
});})(g__9811__auto___10233))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__9811__auto___10233){
return (function (seq10194){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10194));
});})(g__9811__auto___10233))
;


var g__9811__auto___10237 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__9811__auto___10237){
return (function cljs$spec$gen$alpha$double(var_args){
var args__9643__auto__ = [];
var len__9636__auto___10238 = arguments.length;
var i__9637__auto___10239 = (0);
while(true){
if((i__9637__auto___10239 < len__9636__auto___10238)){
args__9643__auto__.push((arguments[i__9637__auto___10239]));

var G__10240 = (i__9637__auto___10239 + (1));
i__9637__auto___10239 = G__10240;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});})(g__9811__auto___10237))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9811__auto___10237){
return (function (args){
return cljs.core.deref.call(null,g__9811__auto___10237);
});})(g__9811__auto___10237))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__9811__auto___10237){
return (function (seq10195){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10195));
});})(g__9811__auto___10237))
;


var g__9811__auto___10241 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__9811__auto___10241){
return (function cljs$spec$gen$alpha$int(var_args){
var args__9643__auto__ = [];
var len__9636__auto___10242 = arguments.length;
var i__9637__auto___10243 = (0);
while(true){
if((i__9637__auto___10243 < len__9636__auto___10242)){
args__9643__auto__.push((arguments[i__9637__auto___10243]));

var G__10244 = (i__9637__auto___10243 + (1));
i__9637__auto___10243 = G__10244;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});})(g__9811__auto___10241))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9811__auto___10241){
return (function (args){
return cljs.core.deref.call(null,g__9811__auto___10241);
});})(g__9811__auto___10241))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__9811__auto___10241){
return (function (seq10196){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10196));
});})(g__9811__auto___10241))
;


var g__9811__auto___10245 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__9811__auto___10245){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__9643__auto__ = [];
var len__9636__auto___10246 = arguments.length;
var i__9637__auto___10247 = (0);
while(true){
if((i__9637__auto___10247 < len__9636__auto___10246)){
args__9643__auto__.push((arguments[i__9637__auto___10247]));

var G__10248 = (i__9637__auto___10247 + (1));
i__9637__auto___10247 = G__10248;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});})(g__9811__auto___10245))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9811__auto___10245){
return (function (args){
return cljs.core.deref.call(null,g__9811__auto___10245);
});})(g__9811__auto___10245))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__9811__auto___10245){
return (function (seq10197){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10197));
});})(g__9811__auto___10245))
;


var g__9811__auto___10249 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__9811__auto___10249){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__9643__auto__ = [];
var len__9636__auto___10250 = arguments.length;
var i__9637__auto___10251 = (0);
while(true){
if((i__9637__auto___10251 < len__9636__auto___10250)){
args__9643__auto__.push((arguments[i__9637__auto___10251]));

var G__10252 = (i__9637__auto___10251 + (1));
i__9637__auto___10251 = G__10252;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});})(g__9811__auto___10249))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9811__auto___10249){
return (function (args){
return cljs.core.deref.call(null,g__9811__auto___10249);
});})(g__9811__auto___10249))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__9811__auto___10249){
return (function (seq10198){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10198));
});})(g__9811__auto___10249))
;


var g__9811__auto___10253 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__9811__auto___10253){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__9643__auto__ = [];
var len__9636__auto___10254 = arguments.length;
var i__9637__auto___10255 = (0);
while(true){
if((i__9637__auto___10255 < len__9636__auto___10254)){
args__9643__auto__.push((arguments[i__9637__auto___10255]));

var G__10256 = (i__9637__auto___10255 + (1));
i__9637__auto___10255 = G__10256;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});})(g__9811__auto___10253))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9811__auto___10253){
return (function (args){
return cljs.core.deref.call(null,g__9811__auto___10253);
});})(g__9811__auto___10253))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__9811__auto___10253){
return (function (seq10199){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10199));
});})(g__9811__auto___10253))
;


var g__9811__auto___10257 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__9811__auto___10257){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__9643__auto__ = [];
var len__9636__auto___10258 = arguments.length;
var i__9637__auto___10259 = (0);
while(true){
if((i__9637__auto___10259 < len__9636__auto___10258)){
args__9643__auto__.push((arguments[i__9637__auto___10259]));

var G__10260 = (i__9637__auto___10259 + (1));
i__9637__auto___10259 = G__10260;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});})(g__9811__auto___10257))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9811__auto___10257){
return (function (args){
return cljs.core.deref.call(null,g__9811__auto___10257);
});})(g__9811__auto___10257))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__9811__auto___10257){
return (function (seq10200){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10200));
});})(g__9811__auto___10257))
;


var g__9811__auto___10261 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__9811__auto___10261){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__9643__auto__ = [];
var len__9636__auto___10262 = arguments.length;
var i__9637__auto___10263 = (0);
while(true){
if((i__9637__auto___10263 < len__9636__auto___10262)){
args__9643__auto__.push((arguments[i__9637__auto___10263]));

var G__10264 = (i__9637__auto___10263 + (1));
i__9637__auto___10263 = G__10264;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});})(g__9811__auto___10261))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9811__auto___10261){
return (function (args){
return cljs.core.deref.call(null,g__9811__auto___10261);
});})(g__9811__auto___10261))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__9811__auto___10261){
return (function (seq10201){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10201));
});})(g__9811__auto___10261))
;


var g__9811__auto___10265 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__9811__auto___10265){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__9643__auto__ = [];
var len__9636__auto___10266 = arguments.length;
var i__9637__auto___10267 = (0);
while(true){
if((i__9637__auto___10267 < len__9636__auto___10266)){
args__9643__auto__.push((arguments[i__9637__auto___10267]));

var G__10268 = (i__9637__auto___10267 + (1));
i__9637__auto___10267 = G__10268;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});})(g__9811__auto___10265))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9811__auto___10265){
return (function (args){
return cljs.core.deref.call(null,g__9811__auto___10265);
});})(g__9811__auto___10265))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__9811__auto___10265){
return (function (seq10202){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10202));
});})(g__9811__auto___10265))
;


var g__9811__auto___10269 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__9811__auto___10269){
return (function cljs$spec$gen$alpha$string(var_args){
var args__9643__auto__ = [];
var len__9636__auto___10270 = arguments.length;
var i__9637__auto___10271 = (0);
while(true){
if((i__9637__auto___10271 < len__9636__auto___10270)){
args__9643__auto__.push((arguments[i__9637__auto___10271]));

var G__10272 = (i__9637__auto___10271 + (1));
i__9637__auto___10271 = G__10272;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});})(g__9811__auto___10269))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9811__auto___10269){
return (function (args){
return cljs.core.deref.call(null,g__9811__auto___10269);
});})(g__9811__auto___10269))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__9811__auto___10269){
return (function (seq10203){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10203));
});})(g__9811__auto___10269))
;


var g__9811__auto___10273 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__9811__auto___10273){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__9643__auto__ = [];
var len__9636__auto___10274 = arguments.length;
var i__9637__auto___10275 = (0);
while(true){
if((i__9637__auto___10275 < len__9636__auto___10274)){
args__9643__auto__.push((arguments[i__9637__auto___10275]));

var G__10276 = (i__9637__auto___10275 + (1));
i__9637__auto___10275 = G__10276;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});})(g__9811__auto___10273))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9811__auto___10273){
return (function (args){
return cljs.core.deref.call(null,g__9811__auto___10273);
});})(g__9811__auto___10273))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__9811__auto___10273){
return (function (seq10204){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10204));
});})(g__9811__auto___10273))
;


var g__9811__auto___10277 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__9811__auto___10277){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__9643__auto__ = [];
var len__9636__auto___10278 = arguments.length;
var i__9637__auto___10279 = (0);
while(true){
if((i__9637__auto___10279 < len__9636__auto___10278)){
args__9643__auto__.push((arguments[i__9637__auto___10279]));

var G__10280 = (i__9637__auto___10279 + (1));
i__9637__auto___10279 = G__10280;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});})(g__9811__auto___10277))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9811__auto___10277){
return (function (args){
return cljs.core.deref.call(null,g__9811__auto___10277);
});})(g__9811__auto___10277))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__9811__auto___10277){
return (function (seq10205){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10205));
});})(g__9811__auto___10277))
;


var g__9811__auto___10281 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__9811__auto___10281){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__9643__auto__ = [];
var len__9636__auto___10282 = arguments.length;
var i__9637__auto___10283 = (0);
while(true){
if((i__9637__auto___10283 < len__9636__auto___10282)){
args__9643__auto__.push((arguments[i__9637__auto___10283]));

var G__10284 = (i__9637__auto___10283 + (1));
i__9637__auto___10283 = G__10284;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});})(g__9811__auto___10281))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9811__auto___10281){
return (function (args){
return cljs.core.deref.call(null,g__9811__auto___10281);
});})(g__9811__auto___10281))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__9811__auto___10281){
return (function (seq10206){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10206));
});})(g__9811__auto___10281))
;


var g__9811__auto___10285 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__9811__auto___10285){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__9643__auto__ = [];
var len__9636__auto___10286 = arguments.length;
var i__9637__auto___10287 = (0);
while(true){
if((i__9637__auto___10287 < len__9636__auto___10286)){
args__9643__auto__.push((arguments[i__9637__auto___10287]));

var G__10288 = (i__9637__auto___10287 + (1));
i__9637__auto___10287 = G__10288;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});})(g__9811__auto___10285))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9811__auto___10285){
return (function (args){
return cljs.core.deref.call(null,g__9811__auto___10285);
});})(g__9811__auto___10285))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__9811__auto___10285){
return (function (seq10207){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10207));
});})(g__9811__auto___10285))
;


var g__9811__auto___10289 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__9811__auto___10289){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__9643__auto__ = [];
var len__9636__auto___10290 = arguments.length;
var i__9637__auto___10291 = (0);
while(true){
if((i__9637__auto___10291 < len__9636__auto___10290)){
args__9643__auto__.push((arguments[i__9637__auto___10291]));

var G__10292 = (i__9637__auto___10291 + (1));
i__9637__auto___10291 = G__10292;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});})(g__9811__auto___10289))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9811__auto___10289){
return (function (args){
return cljs.core.deref.call(null,g__9811__auto___10289);
});})(g__9811__auto___10289))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__9811__auto___10289){
return (function (seq10208){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10208));
});})(g__9811__auto___10289))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__9643__auto__ = [];
var len__9636__auto___10295 = arguments.length;
var i__9637__auto___10296 = (0);
while(true){
if((i__9637__auto___10296 < len__9636__auto___10295)){
args__9643__auto__.push((arguments[i__9637__auto___10296]));

var G__10297 = (i__9637__auto___10296 + (1));
i__9637__auto___10296 = G__10297;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__10293_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__10293_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq10294){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10294));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__10298_SHARP_){
return (new Date(p1__10298_SHARP_));
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

//# sourceMappingURL=alpha.js.map?rel=1521112581207
