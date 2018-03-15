// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__8359__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__8359__auto__){
return or__8359__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__8359__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__8359__auto__)){
return or__8359__auto__;
} else {
var or__8359__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__8359__auto____$1)){
return or__8359__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__20256_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__20256_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__20257 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__20258 = null;
var count__20259 = (0);
var i__20260 = (0);
while(true){
if((i__20260 < count__20259)){
var n = cljs.core._nth.call(null,chunk__20258,i__20260);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__20261 = seq__20257;
var G__20262 = chunk__20258;
var G__20263 = count__20259;
var G__20264 = (i__20260 + (1));
seq__20257 = G__20261;
chunk__20258 = G__20262;
count__20259 = G__20263;
i__20260 = G__20264;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__20257);
if(temp__5457__auto__){
var seq__20257__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20257__$1)){
var c__9290__auto__ = cljs.core.chunk_first.call(null,seq__20257__$1);
var G__20265 = cljs.core.chunk_rest.call(null,seq__20257__$1);
var G__20266 = c__9290__auto__;
var G__20267 = cljs.core.count.call(null,c__9290__auto__);
var G__20268 = (0);
seq__20257 = G__20265;
chunk__20258 = G__20266;
count__20259 = G__20267;
i__20260 = G__20268;
continue;
} else {
var n = cljs.core.first.call(null,seq__20257__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__20269 = cljs.core.next.call(null,seq__20257__$1);
var G__20270 = null;
var G__20271 = (0);
var G__20272 = (0);
seq__20257 = G__20269;
chunk__20258 = G__20270;
count__20259 = G__20271;
i__20260 = G__20272;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__20282_20290 = cljs.core.seq.call(null,deps);
var chunk__20283_20291 = null;
var count__20284_20292 = (0);
var i__20285_20293 = (0);
while(true){
if((i__20285_20293 < count__20284_20292)){
var dep_20294 = cljs.core._nth.call(null,chunk__20283_20291,i__20285_20293);
topo_sort_helper_STAR_.call(null,dep_20294,(depth + (1)),state);

var G__20295 = seq__20282_20290;
var G__20296 = chunk__20283_20291;
var G__20297 = count__20284_20292;
var G__20298 = (i__20285_20293 + (1));
seq__20282_20290 = G__20295;
chunk__20283_20291 = G__20296;
count__20284_20292 = G__20297;
i__20285_20293 = G__20298;
continue;
} else {
var temp__5457__auto___20299 = cljs.core.seq.call(null,seq__20282_20290);
if(temp__5457__auto___20299){
var seq__20282_20300__$1 = temp__5457__auto___20299;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20282_20300__$1)){
var c__9290__auto___20301 = cljs.core.chunk_first.call(null,seq__20282_20300__$1);
var G__20302 = cljs.core.chunk_rest.call(null,seq__20282_20300__$1);
var G__20303 = c__9290__auto___20301;
var G__20304 = cljs.core.count.call(null,c__9290__auto___20301);
var G__20305 = (0);
seq__20282_20290 = G__20302;
chunk__20283_20291 = G__20303;
count__20284_20292 = G__20304;
i__20285_20293 = G__20305;
continue;
} else {
var dep_20306 = cljs.core.first.call(null,seq__20282_20300__$1);
topo_sort_helper_STAR_.call(null,dep_20306,(depth + (1)),state);

var G__20307 = cljs.core.next.call(null,seq__20282_20300__$1);
var G__20308 = null;
var G__20309 = (0);
var G__20310 = (0);
seq__20282_20290 = G__20307;
chunk__20283_20291 = G__20308;
count__20284_20292 = G__20309;
i__20285_20293 = G__20310;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__20286){
var vec__20287 = p__20286;
var seq__20288 = cljs.core.seq.call(null,vec__20287);
var first__20289 = cljs.core.first.call(null,seq__20288);
var seq__20288__$1 = cljs.core.next.call(null,seq__20288);
var x = first__20289;
var xs = seq__20288__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__20287,seq__20288,first__20289,seq__20288__$1,x,xs,get_deps__$1){
return (function (p1__20273_SHARP_){
return clojure.set.difference.call(null,p1__20273_SHARP_,x);
});})(vec__20287,seq__20288,first__20289,seq__20288__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__20311 = cljs.core.seq.call(null,provides);
var chunk__20312 = null;
var count__20313 = (0);
var i__20314 = (0);
while(true){
if((i__20314 < count__20313)){
var prov = cljs.core._nth.call(null,chunk__20312,i__20314);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__20315_20323 = cljs.core.seq.call(null,requires);
var chunk__20316_20324 = null;
var count__20317_20325 = (0);
var i__20318_20326 = (0);
while(true){
if((i__20318_20326 < count__20317_20325)){
var req_20327 = cljs.core._nth.call(null,chunk__20316_20324,i__20318_20326);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_20327,prov);

var G__20328 = seq__20315_20323;
var G__20329 = chunk__20316_20324;
var G__20330 = count__20317_20325;
var G__20331 = (i__20318_20326 + (1));
seq__20315_20323 = G__20328;
chunk__20316_20324 = G__20329;
count__20317_20325 = G__20330;
i__20318_20326 = G__20331;
continue;
} else {
var temp__5457__auto___20332 = cljs.core.seq.call(null,seq__20315_20323);
if(temp__5457__auto___20332){
var seq__20315_20333__$1 = temp__5457__auto___20332;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20315_20333__$1)){
var c__9290__auto___20334 = cljs.core.chunk_first.call(null,seq__20315_20333__$1);
var G__20335 = cljs.core.chunk_rest.call(null,seq__20315_20333__$1);
var G__20336 = c__9290__auto___20334;
var G__20337 = cljs.core.count.call(null,c__9290__auto___20334);
var G__20338 = (0);
seq__20315_20323 = G__20335;
chunk__20316_20324 = G__20336;
count__20317_20325 = G__20337;
i__20318_20326 = G__20338;
continue;
} else {
var req_20339 = cljs.core.first.call(null,seq__20315_20333__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_20339,prov);

var G__20340 = cljs.core.next.call(null,seq__20315_20333__$1);
var G__20341 = null;
var G__20342 = (0);
var G__20343 = (0);
seq__20315_20323 = G__20340;
chunk__20316_20324 = G__20341;
count__20317_20325 = G__20342;
i__20318_20326 = G__20343;
continue;
}
} else {
}
}
break;
}

var G__20344 = seq__20311;
var G__20345 = chunk__20312;
var G__20346 = count__20313;
var G__20347 = (i__20314 + (1));
seq__20311 = G__20344;
chunk__20312 = G__20345;
count__20313 = G__20346;
i__20314 = G__20347;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__20311);
if(temp__5457__auto__){
var seq__20311__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20311__$1)){
var c__9290__auto__ = cljs.core.chunk_first.call(null,seq__20311__$1);
var G__20348 = cljs.core.chunk_rest.call(null,seq__20311__$1);
var G__20349 = c__9290__auto__;
var G__20350 = cljs.core.count.call(null,c__9290__auto__);
var G__20351 = (0);
seq__20311 = G__20348;
chunk__20312 = G__20349;
count__20313 = G__20350;
i__20314 = G__20351;
continue;
} else {
var prov = cljs.core.first.call(null,seq__20311__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__20319_20352 = cljs.core.seq.call(null,requires);
var chunk__20320_20353 = null;
var count__20321_20354 = (0);
var i__20322_20355 = (0);
while(true){
if((i__20322_20355 < count__20321_20354)){
var req_20356 = cljs.core._nth.call(null,chunk__20320_20353,i__20322_20355);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_20356,prov);

var G__20357 = seq__20319_20352;
var G__20358 = chunk__20320_20353;
var G__20359 = count__20321_20354;
var G__20360 = (i__20322_20355 + (1));
seq__20319_20352 = G__20357;
chunk__20320_20353 = G__20358;
count__20321_20354 = G__20359;
i__20322_20355 = G__20360;
continue;
} else {
var temp__5457__auto___20361__$1 = cljs.core.seq.call(null,seq__20319_20352);
if(temp__5457__auto___20361__$1){
var seq__20319_20362__$1 = temp__5457__auto___20361__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20319_20362__$1)){
var c__9290__auto___20363 = cljs.core.chunk_first.call(null,seq__20319_20362__$1);
var G__20364 = cljs.core.chunk_rest.call(null,seq__20319_20362__$1);
var G__20365 = c__9290__auto___20363;
var G__20366 = cljs.core.count.call(null,c__9290__auto___20363);
var G__20367 = (0);
seq__20319_20352 = G__20364;
chunk__20320_20353 = G__20365;
count__20321_20354 = G__20366;
i__20322_20355 = G__20367;
continue;
} else {
var req_20368 = cljs.core.first.call(null,seq__20319_20362__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_20368,prov);

var G__20369 = cljs.core.next.call(null,seq__20319_20362__$1);
var G__20370 = null;
var G__20371 = (0);
var G__20372 = (0);
seq__20319_20352 = G__20369;
chunk__20320_20353 = G__20370;
count__20321_20354 = G__20371;
i__20322_20355 = G__20372;
continue;
}
} else {
}
}
break;
}

var G__20373 = cljs.core.next.call(null,seq__20311__$1);
var G__20374 = null;
var G__20375 = (0);
var G__20376 = (0);
seq__20311 = G__20373;
chunk__20312 = G__20374;
count__20313 = G__20375;
i__20314 = G__20376;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__20377_20381 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__20378_20382 = null;
var count__20379_20383 = (0);
var i__20380_20384 = (0);
while(true){
if((i__20380_20384 < count__20379_20383)){
var ns_20385 = cljs.core._nth.call(null,chunk__20378_20382,i__20380_20384);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_20385);

var G__20386 = seq__20377_20381;
var G__20387 = chunk__20378_20382;
var G__20388 = count__20379_20383;
var G__20389 = (i__20380_20384 + (1));
seq__20377_20381 = G__20386;
chunk__20378_20382 = G__20387;
count__20379_20383 = G__20388;
i__20380_20384 = G__20389;
continue;
} else {
var temp__5457__auto___20390 = cljs.core.seq.call(null,seq__20377_20381);
if(temp__5457__auto___20390){
var seq__20377_20391__$1 = temp__5457__auto___20390;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20377_20391__$1)){
var c__9290__auto___20392 = cljs.core.chunk_first.call(null,seq__20377_20391__$1);
var G__20393 = cljs.core.chunk_rest.call(null,seq__20377_20391__$1);
var G__20394 = c__9290__auto___20392;
var G__20395 = cljs.core.count.call(null,c__9290__auto___20392);
var G__20396 = (0);
seq__20377_20381 = G__20393;
chunk__20378_20382 = G__20394;
count__20379_20383 = G__20395;
i__20380_20384 = G__20396;
continue;
} else {
var ns_20397 = cljs.core.first.call(null,seq__20377_20391__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_20397);

var G__20398 = cljs.core.next.call(null,seq__20377_20391__$1);
var G__20399 = null;
var G__20400 = (0);
var G__20401 = (0);
seq__20377_20381 = G__20398;
chunk__20378_20382 = G__20399;
count__20379_20383 = G__20400;
i__20380_20384 = G__20401;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__8359__auto__ = goog.require__;
if(cljs.core.truth_(or__8359__auto__)){
return or__8359__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__20402__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__20402 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20403__i = 0, G__20403__a = new Array(arguments.length -  0);
while (G__20403__i < G__20403__a.length) {G__20403__a[G__20403__i] = arguments[G__20403__i + 0]; ++G__20403__i;}
  args = new cljs.core.IndexedSeq(G__20403__a,0,null);
} 
return G__20402__delegate.call(this,args);};
G__20402.cljs$lang$maxFixedArity = 0;
G__20402.cljs$lang$applyTo = (function (arglist__20404){
var args = cljs.core.seq(arglist__20404);
return G__20402__delegate(args);
});
G__20402.cljs$core$IFn$_invoke$arity$variadic = G__20402__delegate;
return G__20402;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__20405_SHARP_,p2__20406_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20405_SHARP_)].join('')),p2__20406_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__20407_SHARP_,p2__20408_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20407_SHARP_)].join(''),p2__20408_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__20409 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__20409.addCallback(((function (G__20409){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__20409))
);

G__20409.addErrback(((function (G__20409){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__20409))
);

return G__20409;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__20410 = cljs.core._EQ_;
var expr__20411 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__20410.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__20411))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__20410,expr__20411){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__20410,expr__20411))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__20410,expr__20411){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e20413){if((e20413 instanceof Error)){
var e = e20413;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e20413;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__20410,expr__20411))
} else {
if(cljs.core.truth_(pred__20410.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__20411))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__20410.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__20411))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__20410.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__20411))){
return ((function (pred__20410,expr__20411){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e20414){if((e20414 instanceof Error)){
var e = e20414;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e20414;

}
}})());
});
;})(pred__20410,expr__20411))
} else {
return ((function (pred__20410,expr__20411){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__20410,expr__20411))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__20415,callback){
var map__20416 = p__20415;
var map__20416__$1 = ((((!((map__20416 == null)))?((((map__20416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20416.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20416):map__20416);
var file_msg = map__20416__$1;
var request_url = cljs.core.get.call(null,map__20416__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__20416,map__20416__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__20416,map__20416__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__12947__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12947__auto__){
return (function (){
var f__12948__auto__ = (function (){var switch__12857__auto__ = ((function (c__12947__auto__){
return (function (state_20440){
var state_val_20441 = (state_20440[(1)]);
if((state_val_20441 === (7))){
var inst_20436 = (state_20440[(2)]);
var state_20440__$1 = state_20440;
var statearr_20442_20459 = state_20440__$1;
(statearr_20442_20459[(2)] = inst_20436);

(statearr_20442_20459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20441 === (1))){
var state_20440__$1 = state_20440;
var statearr_20443_20460 = state_20440__$1;
(statearr_20443_20460[(2)] = null);

(statearr_20443_20460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20441 === (4))){
var inst_20420 = (state_20440[(7)]);
var inst_20420__$1 = (state_20440[(2)]);
var state_20440__$1 = (function (){var statearr_20444 = state_20440;
(statearr_20444[(7)] = inst_20420__$1);

return statearr_20444;
})();
if(cljs.core.truth_(inst_20420__$1)){
var statearr_20445_20461 = state_20440__$1;
(statearr_20445_20461[(1)] = (5));

} else {
var statearr_20446_20462 = state_20440__$1;
(statearr_20446_20462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20441 === (6))){
var state_20440__$1 = state_20440;
var statearr_20447_20463 = state_20440__$1;
(statearr_20447_20463[(2)] = null);

(statearr_20447_20463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20441 === (3))){
var inst_20438 = (state_20440[(2)]);
var state_20440__$1 = state_20440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20440__$1,inst_20438);
} else {
if((state_val_20441 === (2))){
var state_20440__$1 = state_20440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20440__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_20441 === (11))){
var inst_20432 = (state_20440[(2)]);
var state_20440__$1 = (function (){var statearr_20448 = state_20440;
(statearr_20448[(8)] = inst_20432);

return statearr_20448;
})();
var statearr_20449_20464 = state_20440__$1;
(statearr_20449_20464[(2)] = null);

(statearr_20449_20464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20441 === (9))){
var inst_20426 = (state_20440[(9)]);
var inst_20424 = (state_20440[(10)]);
var inst_20428 = inst_20426.call(null,inst_20424);
var state_20440__$1 = state_20440;
var statearr_20450_20465 = state_20440__$1;
(statearr_20450_20465[(2)] = inst_20428);

(statearr_20450_20465[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20441 === (5))){
var inst_20420 = (state_20440[(7)]);
var inst_20422 = figwheel.client.file_reloading.blocking_load.call(null,inst_20420);
var state_20440__$1 = state_20440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20440__$1,(8),inst_20422);
} else {
if((state_val_20441 === (10))){
var inst_20424 = (state_20440[(10)]);
var inst_20430 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_20424);
var state_20440__$1 = state_20440;
var statearr_20451_20466 = state_20440__$1;
(statearr_20451_20466[(2)] = inst_20430);

(statearr_20451_20466[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20441 === (8))){
var inst_20420 = (state_20440[(7)]);
var inst_20426 = (state_20440[(9)]);
var inst_20424 = (state_20440[(2)]);
var inst_20425 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_20426__$1 = cljs.core.get.call(null,inst_20425,inst_20420);
var state_20440__$1 = (function (){var statearr_20452 = state_20440;
(statearr_20452[(9)] = inst_20426__$1);

(statearr_20452[(10)] = inst_20424);

return statearr_20452;
})();
if(cljs.core.truth_(inst_20426__$1)){
var statearr_20453_20467 = state_20440__$1;
(statearr_20453_20467[(1)] = (9));

} else {
var statearr_20454_20468 = state_20440__$1;
(statearr_20454_20468[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__12947__auto__))
;
return ((function (switch__12857__auto__,c__12947__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__12858__auto__ = null;
var figwheel$client$file_reloading$state_machine__12858__auto____0 = (function (){
var statearr_20455 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20455[(0)] = figwheel$client$file_reloading$state_machine__12858__auto__);

(statearr_20455[(1)] = (1));

return statearr_20455;
});
var figwheel$client$file_reloading$state_machine__12858__auto____1 = (function (state_20440){
while(true){
var ret_value__12859__auto__ = (function (){try{while(true){
var result__12860__auto__ = switch__12857__auto__.call(null,state_20440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12860__auto__;
}
break;
}
}catch (e20456){if((e20456 instanceof Object)){
var ex__12861__auto__ = e20456;
var statearr_20457_20469 = state_20440;
(statearr_20457_20469[(5)] = ex__12861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20470 = state_20440;
state_20440 = G__20470;
continue;
} else {
return ret_value__12859__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__12858__auto__ = function(state_20440){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__12858__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__12858__auto____1.call(this,state_20440);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__12858__auto____0;
figwheel$client$file_reloading$state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__12858__auto____1;
return figwheel$client$file_reloading$state_machine__12858__auto__;
})()
;})(switch__12857__auto__,c__12947__auto__))
})();
var state__12949__auto__ = (function (){var statearr_20458 = f__12948__auto__.call(null);
(statearr_20458[(6)] = c__12947__auto__);

return statearr_20458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12949__auto__);
});})(c__12947__auto__))
);

return c__12947__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__20471,callback){
var map__20472 = p__20471;
var map__20472__$1 = ((((!((map__20472 == null)))?((((map__20472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20472.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20472):map__20472);
var file_msg = map__20472__$1;
var namespace = cljs.core.get.call(null,map__20472__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__20472,map__20472__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__20472,map__20472__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__20474){
var map__20475 = p__20474;
var map__20475__$1 = ((((!((map__20475 == null)))?((((map__20475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20475.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20475):map__20475);
var file_msg = map__20475__$1;
var namespace = cljs.core.get.call(null,map__20475__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__20477){
var map__20478 = p__20477;
var map__20478__$1 = ((((!((map__20478 == null)))?((((map__20478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20478.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20478):map__20478);
var file_msg = map__20478__$1;
var namespace = cljs.core.get.call(null,map__20478__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__8347__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__8347__auto__){
var or__8359__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__8359__auto__)){
return or__8359__auto__;
} else {
var or__8359__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__8359__auto____$1)){
return or__8359__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__8347__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__20480,callback){
var map__20481 = p__20480;
var map__20481__$1 = ((((!((map__20481 == null)))?((((map__20481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20481.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20481):map__20481);
var file_msg = map__20481__$1;
var request_url = cljs.core.get.call(null,map__20481__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__20481__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__12947__auto___20531 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12947__auto___20531,out){
return (function (){
var f__12948__auto__ = (function (){var switch__12857__auto__ = ((function (c__12947__auto___20531,out){
return (function (state_20516){
var state_val_20517 = (state_20516[(1)]);
if((state_val_20517 === (1))){
var inst_20490 = cljs.core.seq.call(null,files);
var inst_20491 = cljs.core.first.call(null,inst_20490);
var inst_20492 = cljs.core.next.call(null,inst_20490);
var inst_20493 = files;
var state_20516__$1 = (function (){var statearr_20518 = state_20516;
(statearr_20518[(7)] = inst_20492);

(statearr_20518[(8)] = inst_20491);

(statearr_20518[(9)] = inst_20493);

return statearr_20518;
})();
var statearr_20519_20532 = state_20516__$1;
(statearr_20519_20532[(2)] = null);

(statearr_20519_20532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20517 === (2))){
var inst_20499 = (state_20516[(10)]);
var inst_20493 = (state_20516[(9)]);
var inst_20498 = cljs.core.seq.call(null,inst_20493);
var inst_20499__$1 = cljs.core.first.call(null,inst_20498);
var inst_20500 = cljs.core.next.call(null,inst_20498);
var inst_20501 = (inst_20499__$1 == null);
var inst_20502 = cljs.core.not.call(null,inst_20501);
var state_20516__$1 = (function (){var statearr_20520 = state_20516;
(statearr_20520[(10)] = inst_20499__$1);

(statearr_20520[(11)] = inst_20500);

return statearr_20520;
})();
if(inst_20502){
var statearr_20521_20533 = state_20516__$1;
(statearr_20521_20533[(1)] = (4));

} else {
var statearr_20522_20534 = state_20516__$1;
(statearr_20522_20534[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20517 === (3))){
var inst_20514 = (state_20516[(2)]);
var state_20516__$1 = state_20516;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20516__$1,inst_20514);
} else {
if((state_val_20517 === (4))){
var inst_20499 = (state_20516[(10)]);
var inst_20504 = figwheel.client.file_reloading.reload_js_file.call(null,inst_20499);
var state_20516__$1 = state_20516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20516__$1,(7),inst_20504);
} else {
if((state_val_20517 === (5))){
var inst_20510 = cljs.core.async.close_BANG_.call(null,out);
var state_20516__$1 = state_20516;
var statearr_20523_20535 = state_20516__$1;
(statearr_20523_20535[(2)] = inst_20510);

(statearr_20523_20535[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20517 === (6))){
var inst_20512 = (state_20516[(2)]);
var state_20516__$1 = state_20516;
var statearr_20524_20536 = state_20516__$1;
(statearr_20524_20536[(2)] = inst_20512);

(statearr_20524_20536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20517 === (7))){
var inst_20500 = (state_20516[(11)]);
var inst_20506 = (state_20516[(2)]);
var inst_20507 = cljs.core.async.put_BANG_.call(null,out,inst_20506);
var inst_20493 = inst_20500;
var state_20516__$1 = (function (){var statearr_20525 = state_20516;
(statearr_20525[(12)] = inst_20507);

(statearr_20525[(9)] = inst_20493);

return statearr_20525;
})();
var statearr_20526_20537 = state_20516__$1;
(statearr_20526_20537[(2)] = null);

(statearr_20526_20537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__12947__auto___20531,out))
;
return ((function (switch__12857__auto__,c__12947__auto___20531,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__12858__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__12858__auto____0 = (function (){
var statearr_20527 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20527[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__12858__auto__);

(statearr_20527[(1)] = (1));

return statearr_20527;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__12858__auto____1 = (function (state_20516){
while(true){
var ret_value__12859__auto__ = (function (){try{while(true){
var result__12860__auto__ = switch__12857__auto__.call(null,state_20516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12860__auto__;
}
break;
}
}catch (e20528){if((e20528 instanceof Object)){
var ex__12861__auto__ = e20528;
var statearr_20529_20538 = state_20516;
(statearr_20529_20538[(5)] = ex__12861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20539 = state_20516;
state_20516 = G__20539;
continue;
} else {
return ret_value__12859__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__12858__auto__ = function(state_20516){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__12858__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__12858__auto____1.call(this,state_20516);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__12858__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__12858__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__12858__auto__;
})()
;})(switch__12857__auto__,c__12947__auto___20531,out))
})();
var state__12949__auto__ = (function (){var statearr_20530 = f__12948__auto__.call(null);
(statearr_20530[(6)] = c__12947__auto___20531);

return statearr_20530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12949__auto__);
});})(c__12947__auto___20531,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__20540,opts){
var map__20541 = p__20540;
var map__20541__$1 = ((((!((map__20541 == null)))?((((map__20541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20541.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20541):map__20541);
var eval_body = cljs.core.get.call(null,map__20541__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__20541__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__8347__auto__ = eval_body;
if(cljs.core.truth_(and__8347__auto__)){
return typeof eval_body === 'string';
} else {
return and__8347__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e20543){var e = e20543;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__20544_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__20544_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__20545){
var vec__20546 = p__20545;
var k = cljs.core.nth.call(null,vec__20546,(0),null);
var v = cljs.core.nth.call(null,vec__20546,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__20549){
var vec__20550 = p__20549;
var k = cljs.core.nth.call(null,vec__20550,(0),null);
var v = cljs.core.nth.call(null,vec__20550,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__20556,p__20557){
var map__20558 = p__20556;
var map__20558__$1 = ((((!((map__20558 == null)))?((((map__20558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20558.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20558):map__20558);
var opts = map__20558__$1;
var before_jsload = cljs.core.get.call(null,map__20558__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__20558__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__20558__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__20559 = p__20557;
var map__20559__$1 = ((((!((map__20559 == null)))?((((map__20559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20559.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20559):map__20559);
var msg = map__20559__$1;
var files = cljs.core.get.call(null,map__20559__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__20559__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__20559__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__12947__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12947__auto__,map__20558,map__20558__$1,opts,before_jsload,on_jsload,reload_dependents,map__20559,map__20559__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__12948__auto__ = (function (){var switch__12857__auto__ = ((function (c__12947__auto__,map__20558,map__20558__$1,opts,before_jsload,on_jsload,reload_dependents,map__20559,map__20559__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_20713){
var state_val_20714 = (state_20713[(1)]);
if((state_val_20714 === (7))){
var inst_20574 = (state_20713[(7)]);
var inst_20573 = (state_20713[(8)]);
var inst_20575 = (state_20713[(9)]);
var inst_20576 = (state_20713[(10)]);
var inst_20581 = cljs.core._nth.call(null,inst_20574,inst_20576);
var inst_20582 = figwheel.client.file_reloading.eval_body.call(null,inst_20581,opts);
var inst_20583 = (inst_20576 + (1));
var tmp20715 = inst_20574;
var tmp20716 = inst_20573;
var tmp20717 = inst_20575;
var inst_20573__$1 = tmp20716;
var inst_20574__$1 = tmp20715;
var inst_20575__$1 = tmp20717;
var inst_20576__$1 = inst_20583;
var state_20713__$1 = (function (){var statearr_20718 = state_20713;
(statearr_20718[(7)] = inst_20574__$1);

(statearr_20718[(8)] = inst_20573__$1);

(statearr_20718[(11)] = inst_20582);

(statearr_20718[(9)] = inst_20575__$1);

(statearr_20718[(10)] = inst_20576__$1);

return statearr_20718;
})();
var statearr_20719_20802 = state_20713__$1;
(statearr_20719_20802[(2)] = null);

(statearr_20719_20802[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (20))){
var inst_20616 = (state_20713[(12)]);
var inst_20624 = figwheel.client.file_reloading.sort_files.call(null,inst_20616);
var state_20713__$1 = state_20713;
var statearr_20720_20803 = state_20713__$1;
(statearr_20720_20803[(2)] = inst_20624);

(statearr_20720_20803[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (27))){
var state_20713__$1 = state_20713;
var statearr_20721_20804 = state_20713__$1;
(statearr_20721_20804[(2)] = null);

(statearr_20721_20804[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (1))){
var inst_20565 = (state_20713[(13)]);
var inst_20562 = before_jsload.call(null,files);
var inst_20563 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_20564 = (function (){return ((function (inst_20565,inst_20562,inst_20563,state_val_20714,c__12947__auto__,map__20558,map__20558__$1,opts,before_jsload,on_jsload,reload_dependents,map__20559,map__20559__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__20553_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__20553_SHARP_);
});
;})(inst_20565,inst_20562,inst_20563,state_val_20714,c__12947__auto__,map__20558,map__20558__$1,opts,before_jsload,on_jsload,reload_dependents,map__20559,map__20559__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_20565__$1 = cljs.core.filter.call(null,inst_20564,files);
var inst_20566 = cljs.core.not_empty.call(null,inst_20565__$1);
var state_20713__$1 = (function (){var statearr_20722 = state_20713;
(statearr_20722[(13)] = inst_20565__$1);

(statearr_20722[(14)] = inst_20562);

(statearr_20722[(15)] = inst_20563);

return statearr_20722;
})();
if(cljs.core.truth_(inst_20566)){
var statearr_20723_20805 = state_20713__$1;
(statearr_20723_20805[(1)] = (2));

} else {
var statearr_20724_20806 = state_20713__$1;
(statearr_20724_20806[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (24))){
var state_20713__$1 = state_20713;
var statearr_20725_20807 = state_20713__$1;
(statearr_20725_20807[(2)] = null);

(statearr_20725_20807[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (39))){
var inst_20666 = (state_20713[(16)]);
var state_20713__$1 = state_20713;
var statearr_20726_20808 = state_20713__$1;
(statearr_20726_20808[(2)] = inst_20666);

(statearr_20726_20808[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (46))){
var inst_20708 = (state_20713[(2)]);
var state_20713__$1 = state_20713;
var statearr_20727_20809 = state_20713__$1;
(statearr_20727_20809[(2)] = inst_20708);

(statearr_20727_20809[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (4))){
var inst_20610 = (state_20713[(2)]);
var inst_20611 = cljs.core.List.EMPTY;
var inst_20612 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_20611);
var inst_20613 = (function (){return ((function (inst_20610,inst_20611,inst_20612,state_val_20714,c__12947__auto__,map__20558,map__20558__$1,opts,before_jsload,on_jsload,reload_dependents,map__20559,map__20559__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__20554_SHARP_){
var and__8347__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__20554_SHARP_);
if(cljs.core.truth_(and__8347__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__20554_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__20554_SHARP_)));
} else {
return and__8347__auto__;
}
});
;})(inst_20610,inst_20611,inst_20612,state_val_20714,c__12947__auto__,map__20558,map__20558__$1,opts,before_jsload,on_jsload,reload_dependents,map__20559,map__20559__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_20614 = cljs.core.filter.call(null,inst_20613,files);
var inst_20615 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_20616 = cljs.core.concat.call(null,inst_20614,inst_20615);
var state_20713__$1 = (function (){var statearr_20728 = state_20713;
(statearr_20728[(17)] = inst_20612);

(statearr_20728[(18)] = inst_20610);

(statearr_20728[(12)] = inst_20616);

return statearr_20728;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_20729_20810 = state_20713__$1;
(statearr_20729_20810[(1)] = (16));

} else {
var statearr_20730_20811 = state_20713__$1;
(statearr_20730_20811[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (15))){
var inst_20600 = (state_20713[(2)]);
var state_20713__$1 = state_20713;
var statearr_20731_20812 = state_20713__$1;
(statearr_20731_20812[(2)] = inst_20600);

(statearr_20731_20812[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (21))){
var inst_20626 = (state_20713[(19)]);
var inst_20626__$1 = (state_20713[(2)]);
var inst_20627 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_20626__$1);
var state_20713__$1 = (function (){var statearr_20732 = state_20713;
(statearr_20732[(19)] = inst_20626__$1);

return statearr_20732;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20713__$1,(22),inst_20627);
} else {
if((state_val_20714 === (31))){
var inst_20711 = (state_20713[(2)]);
var state_20713__$1 = state_20713;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20713__$1,inst_20711);
} else {
if((state_val_20714 === (32))){
var inst_20666 = (state_20713[(16)]);
var inst_20671 = inst_20666.cljs$lang$protocol_mask$partition0$;
var inst_20672 = (inst_20671 & (64));
var inst_20673 = inst_20666.cljs$core$ISeq$;
var inst_20674 = (cljs.core.PROTOCOL_SENTINEL === inst_20673);
var inst_20675 = (inst_20672) || (inst_20674);
var state_20713__$1 = state_20713;
if(cljs.core.truth_(inst_20675)){
var statearr_20733_20813 = state_20713__$1;
(statearr_20733_20813[(1)] = (35));

} else {
var statearr_20734_20814 = state_20713__$1;
(statearr_20734_20814[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (40))){
var inst_20688 = (state_20713[(20)]);
var inst_20687 = (state_20713[(2)]);
var inst_20688__$1 = cljs.core.get.call(null,inst_20687,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_20689 = cljs.core.get.call(null,inst_20687,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_20690 = cljs.core.not_empty.call(null,inst_20688__$1);
var state_20713__$1 = (function (){var statearr_20735 = state_20713;
(statearr_20735[(21)] = inst_20689);

(statearr_20735[(20)] = inst_20688__$1);

return statearr_20735;
})();
if(cljs.core.truth_(inst_20690)){
var statearr_20736_20815 = state_20713__$1;
(statearr_20736_20815[(1)] = (41));

} else {
var statearr_20737_20816 = state_20713__$1;
(statearr_20737_20816[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (33))){
var state_20713__$1 = state_20713;
var statearr_20738_20817 = state_20713__$1;
(statearr_20738_20817[(2)] = false);

(statearr_20738_20817[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (13))){
var inst_20586 = (state_20713[(22)]);
var inst_20590 = cljs.core.chunk_first.call(null,inst_20586);
var inst_20591 = cljs.core.chunk_rest.call(null,inst_20586);
var inst_20592 = cljs.core.count.call(null,inst_20590);
var inst_20573 = inst_20591;
var inst_20574 = inst_20590;
var inst_20575 = inst_20592;
var inst_20576 = (0);
var state_20713__$1 = (function (){var statearr_20739 = state_20713;
(statearr_20739[(7)] = inst_20574);

(statearr_20739[(8)] = inst_20573);

(statearr_20739[(9)] = inst_20575);

(statearr_20739[(10)] = inst_20576);

return statearr_20739;
})();
var statearr_20740_20818 = state_20713__$1;
(statearr_20740_20818[(2)] = null);

(statearr_20740_20818[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (22))){
var inst_20634 = (state_20713[(23)]);
var inst_20629 = (state_20713[(24)]);
var inst_20626 = (state_20713[(19)]);
var inst_20630 = (state_20713[(25)]);
var inst_20629__$1 = (state_20713[(2)]);
var inst_20630__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_20629__$1);
var inst_20631 = (function (){var all_files = inst_20626;
var res_SINGLEQUOTE_ = inst_20629__$1;
var res = inst_20630__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_20634,inst_20629,inst_20626,inst_20630,inst_20629__$1,inst_20630__$1,state_val_20714,c__12947__auto__,map__20558,map__20558__$1,opts,before_jsload,on_jsload,reload_dependents,map__20559,map__20559__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__20555_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__20555_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_20634,inst_20629,inst_20626,inst_20630,inst_20629__$1,inst_20630__$1,state_val_20714,c__12947__auto__,map__20558,map__20558__$1,opts,before_jsload,on_jsload,reload_dependents,map__20559,map__20559__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_20632 = cljs.core.filter.call(null,inst_20631,inst_20629__$1);
var inst_20633 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_20634__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_20633);
var inst_20635 = cljs.core.not_empty.call(null,inst_20634__$1);
var state_20713__$1 = (function (){var statearr_20741 = state_20713;
(statearr_20741[(26)] = inst_20632);

(statearr_20741[(23)] = inst_20634__$1);

(statearr_20741[(24)] = inst_20629__$1);

(statearr_20741[(25)] = inst_20630__$1);

return statearr_20741;
})();
if(cljs.core.truth_(inst_20635)){
var statearr_20742_20819 = state_20713__$1;
(statearr_20742_20819[(1)] = (23));

} else {
var statearr_20743_20820 = state_20713__$1;
(statearr_20743_20820[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (36))){
var state_20713__$1 = state_20713;
var statearr_20744_20821 = state_20713__$1;
(statearr_20744_20821[(2)] = false);

(statearr_20744_20821[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (41))){
var inst_20688 = (state_20713[(20)]);
var inst_20692 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_20693 = cljs.core.map.call(null,inst_20692,inst_20688);
var inst_20694 = cljs.core.pr_str.call(null,inst_20693);
var inst_20695 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_20694)].join('');
var inst_20696 = figwheel.client.utils.log.call(null,inst_20695);
var state_20713__$1 = state_20713;
var statearr_20745_20822 = state_20713__$1;
(statearr_20745_20822[(2)] = inst_20696);

(statearr_20745_20822[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (43))){
var inst_20689 = (state_20713[(21)]);
var inst_20699 = (state_20713[(2)]);
var inst_20700 = cljs.core.not_empty.call(null,inst_20689);
var state_20713__$1 = (function (){var statearr_20746 = state_20713;
(statearr_20746[(27)] = inst_20699);

return statearr_20746;
})();
if(cljs.core.truth_(inst_20700)){
var statearr_20747_20823 = state_20713__$1;
(statearr_20747_20823[(1)] = (44));

} else {
var statearr_20748_20824 = state_20713__$1;
(statearr_20748_20824[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (29))){
var inst_20632 = (state_20713[(26)]);
var inst_20634 = (state_20713[(23)]);
var inst_20629 = (state_20713[(24)]);
var inst_20626 = (state_20713[(19)]);
var inst_20666 = (state_20713[(16)]);
var inst_20630 = (state_20713[(25)]);
var inst_20662 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_20665 = (function (){var all_files = inst_20626;
var res_SINGLEQUOTE_ = inst_20629;
var res = inst_20630;
var files_not_loaded = inst_20632;
var dependencies_that_loaded = inst_20634;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_20632,inst_20634,inst_20629,inst_20626,inst_20666,inst_20630,inst_20662,state_val_20714,c__12947__auto__,map__20558,map__20558__$1,opts,before_jsload,on_jsload,reload_dependents,map__20559,map__20559__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__20664){
var map__20749 = p__20664;
var map__20749__$1 = ((((!((map__20749 == null)))?((((map__20749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20749.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20749):map__20749);
var namespace = cljs.core.get.call(null,map__20749__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_20632,inst_20634,inst_20629,inst_20626,inst_20666,inst_20630,inst_20662,state_val_20714,c__12947__auto__,map__20558,map__20558__$1,opts,before_jsload,on_jsload,reload_dependents,map__20559,map__20559__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_20666__$1 = cljs.core.group_by.call(null,inst_20665,inst_20632);
var inst_20668 = (inst_20666__$1 == null);
var inst_20669 = cljs.core.not.call(null,inst_20668);
var state_20713__$1 = (function (){var statearr_20751 = state_20713;
(statearr_20751[(28)] = inst_20662);

(statearr_20751[(16)] = inst_20666__$1);

return statearr_20751;
})();
if(inst_20669){
var statearr_20752_20825 = state_20713__$1;
(statearr_20752_20825[(1)] = (32));

} else {
var statearr_20753_20826 = state_20713__$1;
(statearr_20753_20826[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (44))){
var inst_20689 = (state_20713[(21)]);
var inst_20702 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_20689);
var inst_20703 = cljs.core.pr_str.call(null,inst_20702);
var inst_20704 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_20703)].join('');
var inst_20705 = figwheel.client.utils.log.call(null,inst_20704);
var state_20713__$1 = state_20713;
var statearr_20754_20827 = state_20713__$1;
(statearr_20754_20827[(2)] = inst_20705);

(statearr_20754_20827[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (6))){
var inst_20607 = (state_20713[(2)]);
var state_20713__$1 = state_20713;
var statearr_20755_20828 = state_20713__$1;
(statearr_20755_20828[(2)] = inst_20607);

(statearr_20755_20828[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (28))){
var inst_20632 = (state_20713[(26)]);
var inst_20659 = (state_20713[(2)]);
var inst_20660 = cljs.core.not_empty.call(null,inst_20632);
var state_20713__$1 = (function (){var statearr_20756 = state_20713;
(statearr_20756[(29)] = inst_20659);

return statearr_20756;
})();
if(cljs.core.truth_(inst_20660)){
var statearr_20757_20829 = state_20713__$1;
(statearr_20757_20829[(1)] = (29));

} else {
var statearr_20758_20830 = state_20713__$1;
(statearr_20758_20830[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (25))){
var inst_20630 = (state_20713[(25)]);
var inst_20646 = (state_20713[(2)]);
var inst_20647 = cljs.core.not_empty.call(null,inst_20630);
var state_20713__$1 = (function (){var statearr_20759 = state_20713;
(statearr_20759[(30)] = inst_20646);

return statearr_20759;
})();
if(cljs.core.truth_(inst_20647)){
var statearr_20760_20831 = state_20713__$1;
(statearr_20760_20831[(1)] = (26));

} else {
var statearr_20761_20832 = state_20713__$1;
(statearr_20761_20832[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (34))){
var inst_20682 = (state_20713[(2)]);
var state_20713__$1 = state_20713;
if(cljs.core.truth_(inst_20682)){
var statearr_20762_20833 = state_20713__$1;
(statearr_20762_20833[(1)] = (38));

} else {
var statearr_20763_20834 = state_20713__$1;
(statearr_20763_20834[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (17))){
var state_20713__$1 = state_20713;
var statearr_20764_20835 = state_20713__$1;
(statearr_20764_20835[(2)] = recompile_dependents);

(statearr_20764_20835[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (3))){
var state_20713__$1 = state_20713;
var statearr_20765_20836 = state_20713__$1;
(statearr_20765_20836[(2)] = null);

(statearr_20765_20836[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (12))){
var inst_20603 = (state_20713[(2)]);
var state_20713__$1 = state_20713;
var statearr_20766_20837 = state_20713__$1;
(statearr_20766_20837[(2)] = inst_20603);

(statearr_20766_20837[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (2))){
var inst_20565 = (state_20713[(13)]);
var inst_20572 = cljs.core.seq.call(null,inst_20565);
var inst_20573 = inst_20572;
var inst_20574 = null;
var inst_20575 = (0);
var inst_20576 = (0);
var state_20713__$1 = (function (){var statearr_20767 = state_20713;
(statearr_20767[(7)] = inst_20574);

(statearr_20767[(8)] = inst_20573);

(statearr_20767[(9)] = inst_20575);

(statearr_20767[(10)] = inst_20576);

return statearr_20767;
})();
var statearr_20768_20838 = state_20713__$1;
(statearr_20768_20838[(2)] = null);

(statearr_20768_20838[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (23))){
var inst_20632 = (state_20713[(26)]);
var inst_20634 = (state_20713[(23)]);
var inst_20629 = (state_20713[(24)]);
var inst_20626 = (state_20713[(19)]);
var inst_20630 = (state_20713[(25)]);
var inst_20637 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_20639 = (function (){var all_files = inst_20626;
var res_SINGLEQUOTE_ = inst_20629;
var res = inst_20630;
var files_not_loaded = inst_20632;
var dependencies_that_loaded = inst_20634;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_20632,inst_20634,inst_20629,inst_20626,inst_20630,inst_20637,state_val_20714,c__12947__auto__,map__20558,map__20558__$1,opts,before_jsload,on_jsload,reload_dependents,map__20559,map__20559__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__20638){
var map__20769 = p__20638;
var map__20769__$1 = ((((!((map__20769 == null)))?((((map__20769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20769.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20769):map__20769);
var request_url = cljs.core.get.call(null,map__20769__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_20632,inst_20634,inst_20629,inst_20626,inst_20630,inst_20637,state_val_20714,c__12947__auto__,map__20558,map__20558__$1,opts,before_jsload,on_jsload,reload_dependents,map__20559,map__20559__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_20640 = cljs.core.reverse.call(null,inst_20634);
var inst_20641 = cljs.core.map.call(null,inst_20639,inst_20640);
var inst_20642 = cljs.core.pr_str.call(null,inst_20641);
var inst_20643 = figwheel.client.utils.log.call(null,inst_20642);
var state_20713__$1 = (function (){var statearr_20771 = state_20713;
(statearr_20771[(31)] = inst_20637);

return statearr_20771;
})();
var statearr_20772_20839 = state_20713__$1;
(statearr_20772_20839[(2)] = inst_20643);

(statearr_20772_20839[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (35))){
var state_20713__$1 = state_20713;
var statearr_20773_20840 = state_20713__$1;
(statearr_20773_20840[(2)] = true);

(statearr_20773_20840[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (19))){
var inst_20616 = (state_20713[(12)]);
var inst_20622 = figwheel.client.file_reloading.expand_files.call(null,inst_20616);
var state_20713__$1 = state_20713;
var statearr_20774_20841 = state_20713__$1;
(statearr_20774_20841[(2)] = inst_20622);

(statearr_20774_20841[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (11))){
var state_20713__$1 = state_20713;
var statearr_20775_20842 = state_20713__$1;
(statearr_20775_20842[(2)] = null);

(statearr_20775_20842[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (9))){
var inst_20605 = (state_20713[(2)]);
var state_20713__$1 = state_20713;
var statearr_20776_20843 = state_20713__$1;
(statearr_20776_20843[(2)] = inst_20605);

(statearr_20776_20843[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (5))){
var inst_20575 = (state_20713[(9)]);
var inst_20576 = (state_20713[(10)]);
var inst_20578 = (inst_20576 < inst_20575);
var inst_20579 = inst_20578;
var state_20713__$1 = state_20713;
if(cljs.core.truth_(inst_20579)){
var statearr_20777_20844 = state_20713__$1;
(statearr_20777_20844[(1)] = (7));

} else {
var statearr_20778_20845 = state_20713__$1;
(statearr_20778_20845[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (14))){
var inst_20586 = (state_20713[(22)]);
var inst_20595 = cljs.core.first.call(null,inst_20586);
var inst_20596 = figwheel.client.file_reloading.eval_body.call(null,inst_20595,opts);
var inst_20597 = cljs.core.next.call(null,inst_20586);
var inst_20573 = inst_20597;
var inst_20574 = null;
var inst_20575 = (0);
var inst_20576 = (0);
var state_20713__$1 = (function (){var statearr_20779 = state_20713;
(statearr_20779[(7)] = inst_20574);

(statearr_20779[(8)] = inst_20573);

(statearr_20779[(32)] = inst_20596);

(statearr_20779[(9)] = inst_20575);

(statearr_20779[(10)] = inst_20576);

return statearr_20779;
})();
var statearr_20780_20846 = state_20713__$1;
(statearr_20780_20846[(2)] = null);

(statearr_20780_20846[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (45))){
var state_20713__$1 = state_20713;
var statearr_20781_20847 = state_20713__$1;
(statearr_20781_20847[(2)] = null);

(statearr_20781_20847[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (26))){
var inst_20632 = (state_20713[(26)]);
var inst_20634 = (state_20713[(23)]);
var inst_20629 = (state_20713[(24)]);
var inst_20626 = (state_20713[(19)]);
var inst_20630 = (state_20713[(25)]);
var inst_20649 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_20651 = (function (){var all_files = inst_20626;
var res_SINGLEQUOTE_ = inst_20629;
var res = inst_20630;
var files_not_loaded = inst_20632;
var dependencies_that_loaded = inst_20634;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_20632,inst_20634,inst_20629,inst_20626,inst_20630,inst_20649,state_val_20714,c__12947__auto__,map__20558,map__20558__$1,opts,before_jsload,on_jsload,reload_dependents,map__20559,map__20559__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__20650){
var map__20782 = p__20650;
var map__20782__$1 = ((((!((map__20782 == null)))?((((map__20782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20782.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20782):map__20782);
var namespace = cljs.core.get.call(null,map__20782__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__20782__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_20632,inst_20634,inst_20629,inst_20626,inst_20630,inst_20649,state_val_20714,c__12947__auto__,map__20558,map__20558__$1,opts,before_jsload,on_jsload,reload_dependents,map__20559,map__20559__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_20652 = cljs.core.map.call(null,inst_20651,inst_20630);
var inst_20653 = cljs.core.pr_str.call(null,inst_20652);
var inst_20654 = figwheel.client.utils.log.call(null,inst_20653);
var inst_20655 = (function (){var all_files = inst_20626;
var res_SINGLEQUOTE_ = inst_20629;
var res = inst_20630;
var files_not_loaded = inst_20632;
var dependencies_that_loaded = inst_20634;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_20632,inst_20634,inst_20629,inst_20626,inst_20630,inst_20649,inst_20651,inst_20652,inst_20653,inst_20654,state_val_20714,c__12947__auto__,map__20558,map__20558__$1,opts,before_jsload,on_jsload,reload_dependents,map__20559,map__20559__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_20632,inst_20634,inst_20629,inst_20626,inst_20630,inst_20649,inst_20651,inst_20652,inst_20653,inst_20654,state_val_20714,c__12947__auto__,map__20558,map__20558__$1,opts,before_jsload,on_jsload,reload_dependents,map__20559,map__20559__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_20656 = setTimeout(inst_20655,(10));
var state_20713__$1 = (function (){var statearr_20784 = state_20713;
(statearr_20784[(33)] = inst_20654);

(statearr_20784[(34)] = inst_20649);

return statearr_20784;
})();
var statearr_20785_20848 = state_20713__$1;
(statearr_20785_20848[(2)] = inst_20656);

(statearr_20785_20848[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (16))){
var state_20713__$1 = state_20713;
var statearr_20786_20849 = state_20713__$1;
(statearr_20786_20849[(2)] = reload_dependents);

(statearr_20786_20849[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (38))){
var inst_20666 = (state_20713[(16)]);
var inst_20684 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20666);
var state_20713__$1 = state_20713;
var statearr_20787_20850 = state_20713__$1;
(statearr_20787_20850[(2)] = inst_20684);

(statearr_20787_20850[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (30))){
var state_20713__$1 = state_20713;
var statearr_20788_20851 = state_20713__$1;
(statearr_20788_20851[(2)] = null);

(statearr_20788_20851[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (10))){
var inst_20586 = (state_20713[(22)]);
var inst_20588 = cljs.core.chunked_seq_QMARK_.call(null,inst_20586);
var state_20713__$1 = state_20713;
if(inst_20588){
var statearr_20789_20852 = state_20713__$1;
(statearr_20789_20852[(1)] = (13));

} else {
var statearr_20790_20853 = state_20713__$1;
(statearr_20790_20853[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (18))){
var inst_20620 = (state_20713[(2)]);
var state_20713__$1 = state_20713;
if(cljs.core.truth_(inst_20620)){
var statearr_20791_20854 = state_20713__$1;
(statearr_20791_20854[(1)] = (19));

} else {
var statearr_20792_20855 = state_20713__$1;
(statearr_20792_20855[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (42))){
var state_20713__$1 = state_20713;
var statearr_20793_20856 = state_20713__$1;
(statearr_20793_20856[(2)] = null);

(statearr_20793_20856[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (37))){
var inst_20679 = (state_20713[(2)]);
var state_20713__$1 = state_20713;
var statearr_20794_20857 = state_20713__$1;
(statearr_20794_20857[(2)] = inst_20679);

(statearr_20794_20857[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20714 === (8))){
var inst_20573 = (state_20713[(8)]);
var inst_20586 = (state_20713[(22)]);
var inst_20586__$1 = cljs.core.seq.call(null,inst_20573);
var state_20713__$1 = (function (){var statearr_20795 = state_20713;
(statearr_20795[(22)] = inst_20586__$1);

return statearr_20795;
})();
if(inst_20586__$1){
var statearr_20796_20858 = state_20713__$1;
(statearr_20796_20858[(1)] = (10));

} else {
var statearr_20797_20859 = state_20713__$1;
(statearr_20797_20859[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12947__auto__,map__20558,map__20558__$1,opts,before_jsload,on_jsload,reload_dependents,map__20559,map__20559__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__12857__auto__,c__12947__auto__,map__20558,map__20558__$1,opts,before_jsload,on_jsload,reload_dependents,map__20559,map__20559__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__12858__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__12858__auto____0 = (function (){
var statearr_20798 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20798[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__12858__auto__);

(statearr_20798[(1)] = (1));

return statearr_20798;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__12858__auto____1 = (function (state_20713){
while(true){
var ret_value__12859__auto__ = (function (){try{while(true){
var result__12860__auto__ = switch__12857__auto__.call(null,state_20713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12860__auto__;
}
break;
}
}catch (e20799){if((e20799 instanceof Object)){
var ex__12861__auto__ = e20799;
var statearr_20800_20860 = state_20713;
(statearr_20800_20860[(5)] = ex__12861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20861 = state_20713;
state_20713 = G__20861;
continue;
} else {
return ret_value__12859__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__12858__auto__ = function(state_20713){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__12858__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__12858__auto____1.call(this,state_20713);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__12858__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__12858__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__12858__auto__;
})()
;})(switch__12857__auto__,c__12947__auto__,map__20558,map__20558__$1,opts,before_jsload,on_jsload,reload_dependents,map__20559,map__20559__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__12949__auto__ = (function (){var statearr_20801 = f__12948__auto__.call(null);
(statearr_20801[(6)] = c__12947__auto__);

return statearr_20801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12949__auto__);
});})(c__12947__auto__,map__20558,map__20558__$1,opts,before_jsload,on_jsload,reload_dependents,map__20559,map__20559__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__12947__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__20864,link){
var map__20865 = p__20864;
var map__20865__$1 = ((((!((map__20865 == null)))?((((map__20865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20865.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20865):map__20865);
var file = cljs.core.get.call(null,map__20865__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__20865,map__20865__$1,file){
return (function (p1__20862_SHARP_,p2__20863_SHARP_){
if(cljs.core._EQ_.call(null,p1__20862_SHARP_,p2__20863_SHARP_)){
return p1__20862_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__20865,map__20865__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__20868){
var map__20869 = p__20868;
var map__20869__$1 = ((((!((map__20869 == null)))?((((map__20869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20869.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20869):map__20869);
var match_length = cljs.core.get.call(null,map__20869__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__20869__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__20867_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__20867_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__20871_SHARP_,p2__20872_SHARP_){
return cljs.core.assoc.call(null,p1__20871_SHARP_,cljs.core.get.call(null,p2__20872_SHARP_,key),p2__20872_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_20873 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_20873);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_20873);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__20874,p__20875){
var map__20876 = p__20874;
var map__20876__$1 = ((((!((map__20876 == null)))?((((map__20876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20876.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20876):map__20876);
var on_cssload = cljs.core.get.call(null,map__20876__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__20877 = p__20875;
var map__20877__$1 = ((((!((map__20877 == null)))?((((map__20877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20877.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20877):map__20877);
var files_msg = map__20877__$1;
var files = cljs.core.get.call(null,map__20877__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1521112598273
