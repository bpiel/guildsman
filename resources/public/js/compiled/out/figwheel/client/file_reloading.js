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
var or__62761__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__62761__auto__){
return or__62761__auto__;
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
var or__62761__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__62761__auto__)){
return or__62761__auto__;
} else {
var or__62761__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__62761__auto____$1)){
return or__62761__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__73962_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__73962_SHARP_));
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
var seq__73963 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__73964 = null;
var count__73965 = (0);
var i__73966 = (0);
while(true){
if((i__73966 < count__73965)){
var n = cljs.core._nth.call(null,chunk__73964,i__73966);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__73967 = seq__73963;
var G__73968 = chunk__73964;
var G__73969 = count__73965;
var G__73970 = (i__73966 + (1));
seq__73963 = G__73967;
chunk__73964 = G__73968;
count__73965 = G__73969;
i__73966 = G__73970;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__73963);
if(temp__5457__auto__){
var seq__73963__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73963__$1)){
var c__63692__auto__ = cljs.core.chunk_first.call(null,seq__73963__$1);
var G__73971 = cljs.core.chunk_rest.call(null,seq__73963__$1);
var G__73972 = c__63692__auto__;
var G__73973 = cljs.core.count.call(null,c__63692__auto__);
var G__73974 = (0);
seq__73963 = G__73971;
chunk__73964 = G__73972;
count__73965 = G__73973;
i__73966 = G__73974;
continue;
} else {
var n = cljs.core.first.call(null,seq__73963__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__73975 = cljs.core.next.call(null,seq__73963__$1);
var G__73976 = null;
var G__73977 = (0);
var G__73978 = (0);
seq__73963 = G__73975;
chunk__73964 = G__73976;
count__73965 = G__73977;
i__73966 = G__73978;
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

var seq__73988_73996 = cljs.core.seq.call(null,deps);
var chunk__73989_73997 = null;
var count__73990_73998 = (0);
var i__73991_73999 = (0);
while(true){
if((i__73991_73999 < count__73990_73998)){
var dep_74000 = cljs.core._nth.call(null,chunk__73989_73997,i__73991_73999);
topo_sort_helper_STAR_.call(null,dep_74000,(depth + (1)),state);

var G__74001 = seq__73988_73996;
var G__74002 = chunk__73989_73997;
var G__74003 = count__73990_73998;
var G__74004 = (i__73991_73999 + (1));
seq__73988_73996 = G__74001;
chunk__73989_73997 = G__74002;
count__73990_73998 = G__74003;
i__73991_73999 = G__74004;
continue;
} else {
var temp__5457__auto___74005 = cljs.core.seq.call(null,seq__73988_73996);
if(temp__5457__auto___74005){
var seq__73988_74006__$1 = temp__5457__auto___74005;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73988_74006__$1)){
var c__63692__auto___74007 = cljs.core.chunk_first.call(null,seq__73988_74006__$1);
var G__74008 = cljs.core.chunk_rest.call(null,seq__73988_74006__$1);
var G__74009 = c__63692__auto___74007;
var G__74010 = cljs.core.count.call(null,c__63692__auto___74007);
var G__74011 = (0);
seq__73988_73996 = G__74008;
chunk__73989_73997 = G__74009;
count__73990_73998 = G__74010;
i__73991_73999 = G__74011;
continue;
} else {
var dep_74012 = cljs.core.first.call(null,seq__73988_74006__$1);
topo_sort_helper_STAR_.call(null,dep_74012,(depth + (1)),state);

var G__74013 = cljs.core.next.call(null,seq__73988_74006__$1);
var G__74014 = null;
var G__74015 = (0);
var G__74016 = (0);
seq__73988_73996 = G__74013;
chunk__73989_73997 = G__74014;
count__73990_73998 = G__74015;
i__73991_73999 = G__74016;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__73992){
var vec__73993 = p__73992;
var seq__73994 = cljs.core.seq.call(null,vec__73993);
var first__73995 = cljs.core.first.call(null,seq__73994);
var seq__73994__$1 = cljs.core.next.call(null,seq__73994);
var x = first__73995;
var xs = seq__73994__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__73993,seq__73994,first__73995,seq__73994__$1,x,xs,get_deps__$1){
return (function (p1__73979_SHARP_){
return clojure.set.difference.call(null,p1__73979_SHARP_,x);
});})(vec__73993,seq__73994,first__73995,seq__73994__$1,x,xs,get_deps__$1))
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
var seq__74017 = cljs.core.seq.call(null,provides);
var chunk__74018 = null;
var count__74019 = (0);
var i__74020 = (0);
while(true){
if((i__74020 < count__74019)){
var prov = cljs.core._nth.call(null,chunk__74018,i__74020);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__74021_74029 = cljs.core.seq.call(null,requires);
var chunk__74022_74030 = null;
var count__74023_74031 = (0);
var i__74024_74032 = (0);
while(true){
if((i__74024_74032 < count__74023_74031)){
var req_74033 = cljs.core._nth.call(null,chunk__74022_74030,i__74024_74032);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_74033,prov);

var G__74034 = seq__74021_74029;
var G__74035 = chunk__74022_74030;
var G__74036 = count__74023_74031;
var G__74037 = (i__74024_74032 + (1));
seq__74021_74029 = G__74034;
chunk__74022_74030 = G__74035;
count__74023_74031 = G__74036;
i__74024_74032 = G__74037;
continue;
} else {
var temp__5457__auto___74038 = cljs.core.seq.call(null,seq__74021_74029);
if(temp__5457__auto___74038){
var seq__74021_74039__$1 = temp__5457__auto___74038;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__74021_74039__$1)){
var c__63692__auto___74040 = cljs.core.chunk_first.call(null,seq__74021_74039__$1);
var G__74041 = cljs.core.chunk_rest.call(null,seq__74021_74039__$1);
var G__74042 = c__63692__auto___74040;
var G__74043 = cljs.core.count.call(null,c__63692__auto___74040);
var G__74044 = (0);
seq__74021_74029 = G__74041;
chunk__74022_74030 = G__74042;
count__74023_74031 = G__74043;
i__74024_74032 = G__74044;
continue;
} else {
var req_74045 = cljs.core.first.call(null,seq__74021_74039__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_74045,prov);

var G__74046 = cljs.core.next.call(null,seq__74021_74039__$1);
var G__74047 = null;
var G__74048 = (0);
var G__74049 = (0);
seq__74021_74029 = G__74046;
chunk__74022_74030 = G__74047;
count__74023_74031 = G__74048;
i__74024_74032 = G__74049;
continue;
}
} else {
}
}
break;
}

var G__74050 = seq__74017;
var G__74051 = chunk__74018;
var G__74052 = count__74019;
var G__74053 = (i__74020 + (1));
seq__74017 = G__74050;
chunk__74018 = G__74051;
count__74019 = G__74052;
i__74020 = G__74053;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__74017);
if(temp__5457__auto__){
var seq__74017__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__74017__$1)){
var c__63692__auto__ = cljs.core.chunk_first.call(null,seq__74017__$1);
var G__74054 = cljs.core.chunk_rest.call(null,seq__74017__$1);
var G__74055 = c__63692__auto__;
var G__74056 = cljs.core.count.call(null,c__63692__auto__);
var G__74057 = (0);
seq__74017 = G__74054;
chunk__74018 = G__74055;
count__74019 = G__74056;
i__74020 = G__74057;
continue;
} else {
var prov = cljs.core.first.call(null,seq__74017__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__74025_74058 = cljs.core.seq.call(null,requires);
var chunk__74026_74059 = null;
var count__74027_74060 = (0);
var i__74028_74061 = (0);
while(true){
if((i__74028_74061 < count__74027_74060)){
var req_74062 = cljs.core._nth.call(null,chunk__74026_74059,i__74028_74061);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_74062,prov);

var G__74063 = seq__74025_74058;
var G__74064 = chunk__74026_74059;
var G__74065 = count__74027_74060;
var G__74066 = (i__74028_74061 + (1));
seq__74025_74058 = G__74063;
chunk__74026_74059 = G__74064;
count__74027_74060 = G__74065;
i__74028_74061 = G__74066;
continue;
} else {
var temp__5457__auto___74067__$1 = cljs.core.seq.call(null,seq__74025_74058);
if(temp__5457__auto___74067__$1){
var seq__74025_74068__$1 = temp__5457__auto___74067__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__74025_74068__$1)){
var c__63692__auto___74069 = cljs.core.chunk_first.call(null,seq__74025_74068__$1);
var G__74070 = cljs.core.chunk_rest.call(null,seq__74025_74068__$1);
var G__74071 = c__63692__auto___74069;
var G__74072 = cljs.core.count.call(null,c__63692__auto___74069);
var G__74073 = (0);
seq__74025_74058 = G__74070;
chunk__74026_74059 = G__74071;
count__74027_74060 = G__74072;
i__74028_74061 = G__74073;
continue;
} else {
var req_74074 = cljs.core.first.call(null,seq__74025_74068__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_74074,prov);

var G__74075 = cljs.core.next.call(null,seq__74025_74068__$1);
var G__74076 = null;
var G__74077 = (0);
var G__74078 = (0);
seq__74025_74058 = G__74075;
chunk__74026_74059 = G__74076;
count__74027_74060 = G__74077;
i__74028_74061 = G__74078;
continue;
}
} else {
}
}
break;
}

var G__74079 = cljs.core.next.call(null,seq__74017__$1);
var G__74080 = null;
var G__74081 = (0);
var G__74082 = (0);
seq__74017 = G__74079;
chunk__74018 = G__74080;
count__74019 = G__74081;
i__74020 = G__74082;
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
var seq__74083_74087 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__74084_74088 = null;
var count__74085_74089 = (0);
var i__74086_74090 = (0);
while(true){
if((i__74086_74090 < count__74085_74089)){
var ns_74091 = cljs.core._nth.call(null,chunk__74084_74088,i__74086_74090);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_74091);

var G__74092 = seq__74083_74087;
var G__74093 = chunk__74084_74088;
var G__74094 = count__74085_74089;
var G__74095 = (i__74086_74090 + (1));
seq__74083_74087 = G__74092;
chunk__74084_74088 = G__74093;
count__74085_74089 = G__74094;
i__74086_74090 = G__74095;
continue;
} else {
var temp__5457__auto___74096 = cljs.core.seq.call(null,seq__74083_74087);
if(temp__5457__auto___74096){
var seq__74083_74097__$1 = temp__5457__auto___74096;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__74083_74097__$1)){
var c__63692__auto___74098 = cljs.core.chunk_first.call(null,seq__74083_74097__$1);
var G__74099 = cljs.core.chunk_rest.call(null,seq__74083_74097__$1);
var G__74100 = c__63692__auto___74098;
var G__74101 = cljs.core.count.call(null,c__63692__auto___74098);
var G__74102 = (0);
seq__74083_74087 = G__74099;
chunk__74084_74088 = G__74100;
count__74085_74089 = G__74101;
i__74086_74090 = G__74102;
continue;
} else {
var ns_74103 = cljs.core.first.call(null,seq__74083_74097__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_74103);

var G__74104 = cljs.core.next.call(null,seq__74083_74097__$1);
var G__74105 = null;
var G__74106 = (0);
var G__74107 = (0);
seq__74083_74087 = G__74104;
chunk__74084_74088 = G__74105;
count__74085_74089 = G__74106;
i__74086_74090 = G__74107;
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
goog.require_figwheel_backup_ = (function (){var or__62761__auto__ = goog.require__;
if(cljs.core.truth_(or__62761__auto__)){
return or__62761__auto__;
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
var G__74108__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__74108 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__74109__i = 0, G__74109__a = new Array(arguments.length -  0);
while (G__74109__i < G__74109__a.length) {G__74109__a[G__74109__i] = arguments[G__74109__i + 0]; ++G__74109__i;}
  args = new cljs.core.IndexedSeq(G__74109__a,0,null);
} 
return G__74108__delegate.call(this,args);};
G__74108.cljs$lang$maxFixedArity = 0;
G__74108.cljs$lang$applyTo = (function (arglist__74110){
var args = cljs.core.seq(arglist__74110);
return G__74108__delegate(args);
});
G__74108.cljs$core$IFn$_invoke$arity$variadic = G__74108__delegate;
return G__74108;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__74111_SHARP_,p2__74112_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__74111_SHARP_)].join('')),p2__74112_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__74113_SHARP_,p2__74114_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__74113_SHARP_)].join(''),p2__74114_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__74115 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__74115.addCallback(((function (G__74115){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__74115))
);

G__74115.addErrback(((function (G__74115){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__74115))
);

return G__74115;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__74116 = cljs.core._EQ_;
var expr__74117 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__74116.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__74117))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__74116,expr__74117){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__74116,expr__74117))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__74116,expr__74117){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e74119){if((e74119 instanceof Error)){
var e = e74119;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e74119;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__74116,expr__74117))
} else {
if(cljs.core.truth_(pred__74116.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__74117))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__74116.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__74117))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__74116.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__74117))){
return ((function (pred__74116,expr__74117){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e74120){if((e74120 instanceof Error)){
var e = e74120;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e74120;

}
}})());
});
;})(pred__74116,expr__74117))
} else {
return ((function (pred__74116,expr__74117){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__74116,expr__74117))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__74121,callback){
var map__74122 = p__74121;
var map__74122__$1 = ((((!((map__74122 == null)))?((((map__74122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74122.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74122):map__74122);
var file_msg = map__74122__$1;
var request_url = cljs.core.get.call(null,map__74122__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__74122,map__74122__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__74122,map__74122__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__66950__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__66950__auto__){
return (function (){
var f__66951__auto__ = (function (){var switch__66860__auto__ = ((function (c__66950__auto__){
return (function (state_74146){
var state_val_74147 = (state_74146[(1)]);
if((state_val_74147 === (7))){
var inst_74142 = (state_74146[(2)]);
var state_74146__$1 = state_74146;
var statearr_74148_74165 = state_74146__$1;
(statearr_74148_74165[(2)] = inst_74142);

(statearr_74148_74165[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74147 === (1))){
var state_74146__$1 = state_74146;
var statearr_74149_74166 = state_74146__$1;
(statearr_74149_74166[(2)] = null);

(statearr_74149_74166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74147 === (4))){
var inst_74126 = (state_74146[(7)]);
var inst_74126__$1 = (state_74146[(2)]);
var state_74146__$1 = (function (){var statearr_74150 = state_74146;
(statearr_74150[(7)] = inst_74126__$1);

return statearr_74150;
})();
if(cljs.core.truth_(inst_74126__$1)){
var statearr_74151_74167 = state_74146__$1;
(statearr_74151_74167[(1)] = (5));

} else {
var statearr_74152_74168 = state_74146__$1;
(statearr_74152_74168[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74147 === (6))){
var state_74146__$1 = state_74146;
var statearr_74153_74169 = state_74146__$1;
(statearr_74153_74169[(2)] = null);

(statearr_74153_74169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74147 === (3))){
var inst_74144 = (state_74146[(2)]);
var state_74146__$1 = state_74146;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74146__$1,inst_74144);
} else {
if((state_val_74147 === (2))){
var state_74146__$1 = state_74146;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74146__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_74147 === (11))){
var inst_74138 = (state_74146[(2)]);
var state_74146__$1 = (function (){var statearr_74154 = state_74146;
(statearr_74154[(8)] = inst_74138);

return statearr_74154;
})();
var statearr_74155_74170 = state_74146__$1;
(statearr_74155_74170[(2)] = null);

(statearr_74155_74170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74147 === (9))){
var inst_74132 = (state_74146[(9)]);
var inst_74130 = (state_74146[(10)]);
var inst_74134 = inst_74132.call(null,inst_74130);
var state_74146__$1 = state_74146;
var statearr_74156_74171 = state_74146__$1;
(statearr_74156_74171[(2)] = inst_74134);

(statearr_74156_74171[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74147 === (5))){
var inst_74126 = (state_74146[(7)]);
var inst_74128 = figwheel.client.file_reloading.blocking_load.call(null,inst_74126);
var state_74146__$1 = state_74146;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74146__$1,(8),inst_74128);
} else {
if((state_val_74147 === (10))){
var inst_74130 = (state_74146[(10)]);
var inst_74136 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_74130);
var state_74146__$1 = state_74146;
var statearr_74157_74172 = state_74146__$1;
(statearr_74157_74172[(2)] = inst_74136);

(statearr_74157_74172[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74147 === (8))){
var inst_74132 = (state_74146[(9)]);
var inst_74126 = (state_74146[(7)]);
var inst_74130 = (state_74146[(2)]);
var inst_74131 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_74132__$1 = cljs.core.get.call(null,inst_74131,inst_74126);
var state_74146__$1 = (function (){var statearr_74158 = state_74146;
(statearr_74158[(9)] = inst_74132__$1);

(statearr_74158[(10)] = inst_74130);

return statearr_74158;
})();
if(cljs.core.truth_(inst_74132__$1)){
var statearr_74159_74173 = state_74146__$1;
(statearr_74159_74173[(1)] = (9));

} else {
var statearr_74160_74174 = state_74146__$1;
(statearr_74160_74174[(1)] = (10));

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
});})(c__66950__auto__))
;
return ((function (switch__66860__auto__,c__66950__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__66861__auto__ = null;
var figwheel$client$file_reloading$state_machine__66861__auto____0 = (function (){
var statearr_74161 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_74161[(0)] = figwheel$client$file_reloading$state_machine__66861__auto__);

(statearr_74161[(1)] = (1));

return statearr_74161;
});
var figwheel$client$file_reloading$state_machine__66861__auto____1 = (function (state_74146){
while(true){
var ret_value__66862__auto__ = (function (){try{while(true){
var result__66863__auto__ = switch__66860__auto__.call(null,state_74146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__66863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66863__auto__;
}
break;
}
}catch (e74162){if((e74162 instanceof Object)){
var ex__66864__auto__ = e74162;
var statearr_74163_74175 = state_74146;
(statearr_74163_74175[(5)] = ex__66864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e74162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__66862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74176 = state_74146;
state_74146 = G__74176;
continue;
} else {
return ret_value__66862__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__66861__auto__ = function(state_74146){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__66861__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__66861__auto____1.call(this,state_74146);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__66861__auto____0;
figwheel$client$file_reloading$state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__66861__auto____1;
return figwheel$client$file_reloading$state_machine__66861__auto__;
})()
;})(switch__66860__auto__,c__66950__auto__))
})();
var state__66952__auto__ = (function (){var statearr_74164 = f__66951__auto__.call(null);
(statearr_74164[(6)] = c__66950__auto__);

return statearr_74164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__66952__auto__);
});})(c__66950__auto__))
);

return c__66950__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__74177,callback){
var map__74178 = p__74177;
var map__74178__$1 = ((((!((map__74178 == null)))?((((map__74178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74178.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74178):map__74178);
var file_msg = map__74178__$1;
var namespace = cljs.core.get.call(null,map__74178__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__74178,map__74178__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__74178,map__74178__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__74180){
var map__74181 = p__74180;
var map__74181__$1 = ((((!((map__74181 == null)))?((((map__74181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74181.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74181):map__74181);
var file_msg = map__74181__$1;
var namespace = cljs.core.get.call(null,map__74181__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__74183){
var map__74184 = p__74183;
var map__74184__$1 = ((((!((map__74184 == null)))?((((map__74184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74184.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74184):map__74184);
var file_msg = map__74184__$1;
var namespace = cljs.core.get.call(null,map__74184__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__62749__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__62749__auto__){
var or__62761__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__62761__auto__)){
return or__62761__auto__;
} else {
var or__62761__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__62761__auto____$1)){
return or__62761__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__62749__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__74186,callback){
var map__74187 = p__74186;
var map__74187__$1 = ((((!((map__74187 == null)))?((((map__74187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74187.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74187):map__74187);
var file_msg = map__74187__$1;
var request_url = cljs.core.get.call(null,map__74187__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__74187__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__66950__auto___74237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__66950__auto___74237,out){
return (function (){
var f__66951__auto__ = (function (){var switch__66860__auto__ = ((function (c__66950__auto___74237,out){
return (function (state_74222){
var state_val_74223 = (state_74222[(1)]);
if((state_val_74223 === (1))){
var inst_74196 = cljs.core.seq.call(null,files);
var inst_74197 = cljs.core.first.call(null,inst_74196);
var inst_74198 = cljs.core.next.call(null,inst_74196);
var inst_74199 = files;
var state_74222__$1 = (function (){var statearr_74224 = state_74222;
(statearr_74224[(7)] = inst_74197);

(statearr_74224[(8)] = inst_74198);

(statearr_74224[(9)] = inst_74199);

return statearr_74224;
})();
var statearr_74225_74238 = state_74222__$1;
(statearr_74225_74238[(2)] = null);

(statearr_74225_74238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74223 === (2))){
var inst_74199 = (state_74222[(9)]);
var inst_74205 = (state_74222[(10)]);
var inst_74204 = cljs.core.seq.call(null,inst_74199);
var inst_74205__$1 = cljs.core.first.call(null,inst_74204);
var inst_74206 = cljs.core.next.call(null,inst_74204);
var inst_74207 = (inst_74205__$1 == null);
var inst_74208 = cljs.core.not.call(null,inst_74207);
var state_74222__$1 = (function (){var statearr_74226 = state_74222;
(statearr_74226[(11)] = inst_74206);

(statearr_74226[(10)] = inst_74205__$1);

return statearr_74226;
})();
if(inst_74208){
var statearr_74227_74239 = state_74222__$1;
(statearr_74227_74239[(1)] = (4));

} else {
var statearr_74228_74240 = state_74222__$1;
(statearr_74228_74240[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74223 === (3))){
var inst_74220 = (state_74222[(2)]);
var state_74222__$1 = state_74222;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74222__$1,inst_74220);
} else {
if((state_val_74223 === (4))){
var inst_74205 = (state_74222[(10)]);
var inst_74210 = figwheel.client.file_reloading.reload_js_file.call(null,inst_74205);
var state_74222__$1 = state_74222;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74222__$1,(7),inst_74210);
} else {
if((state_val_74223 === (5))){
var inst_74216 = cljs.core.async.close_BANG_.call(null,out);
var state_74222__$1 = state_74222;
var statearr_74229_74241 = state_74222__$1;
(statearr_74229_74241[(2)] = inst_74216);

(statearr_74229_74241[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74223 === (6))){
var inst_74218 = (state_74222[(2)]);
var state_74222__$1 = state_74222;
var statearr_74230_74242 = state_74222__$1;
(statearr_74230_74242[(2)] = inst_74218);

(statearr_74230_74242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74223 === (7))){
var inst_74206 = (state_74222[(11)]);
var inst_74212 = (state_74222[(2)]);
var inst_74213 = cljs.core.async.put_BANG_.call(null,out,inst_74212);
var inst_74199 = inst_74206;
var state_74222__$1 = (function (){var statearr_74231 = state_74222;
(statearr_74231[(12)] = inst_74213);

(statearr_74231[(9)] = inst_74199);

return statearr_74231;
})();
var statearr_74232_74243 = state_74222__$1;
(statearr_74232_74243[(2)] = null);

(statearr_74232_74243[(1)] = (2));


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
});})(c__66950__auto___74237,out))
;
return ((function (switch__66860__auto__,c__66950__auto___74237,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__66861__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__66861__auto____0 = (function (){
var statearr_74233 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_74233[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__66861__auto__);

(statearr_74233[(1)] = (1));

return statearr_74233;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__66861__auto____1 = (function (state_74222){
while(true){
var ret_value__66862__auto__ = (function (){try{while(true){
var result__66863__auto__ = switch__66860__auto__.call(null,state_74222);
if(cljs.core.keyword_identical_QMARK_.call(null,result__66863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66863__auto__;
}
break;
}
}catch (e74234){if((e74234 instanceof Object)){
var ex__66864__auto__ = e74234;
var statearr_74235_74244 = state_74222;
(statearr_74235_74244[(5)] = ex__66864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e74234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__66862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74245 = state_74222;
state_74222 = G__74245;
continue;
} else {
return ret_value__66862__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__66861__auto__ = function(state_74222){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__66861__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__66861__auto____1.call(this,state_74222);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__66861__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__66861__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__66861__auto__;
})()
;})(switch__66860__auto__,c__66950__auto___74237,out))
})();
var state__66952__auto__ = (function (){var statearr_74236 = f__66951__auto__.call(null);
(statearr_74236[(6)] = c__66950__auto___74237);

return statearr_74236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__66952__auto__);
});})(c__66950__auto___74237,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__74246,opts){
var map__74247 = p__74246;
var map__74247__$1 = ((((!((map__74247 == null)))?((((map__74247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74247.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74247):map__74247);
var eval_body = cljs.core.get.call(null,map__74247__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__74247__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__62749__auto__ = eval_body;
if(cljs.core.truth_(and__62749__auto__)){
return typeof eval_body === 'string';
} else {
return and__62749__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e74249){var e = e74249;
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
return (function (p1__74250_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__74250_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__74251){
var vec__74252 = p__74251;
var k = cljs.core.nth.call(null,vec__74252,(0),null);
var v = cljs.core.nth.call(null,vec__74252,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__74255){
var vec__74256 = p__74255;
var k = cljs.core.nth.call(null,vec__74256,(0),null);
var v = cljs.core.nth.call(null,vec__74256,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__74262,p__74263){
var map__74264 = p__74262;
var map__74264__$1 = ((((!((map__74264 == null)))?((((map__74264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74264.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74264):map__74264);
var opts = map__74264__$1;
var before_jsload = cljs.core.get.call(null,map__74264__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__74264__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__74264__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__74265 = p__74263;
var map__74265__$1 = ((((!((map__74265 == null)))?((((map__74265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74265.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74265):map__74265);
var msg = map__74265__$1;
var files = cljs.core.get.call(null,map__74265__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__74265__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__74265__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__66950__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__66950__auto__,map__74264,map__74264__$1,opts,before_jsload,on_jsload,reload_dependents,map__74265,map__74265__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__66951__auto__ = (function (){var switch__66860__auto__ = ((function (c__66950__auto__,map__74264,map__74264__$1,opts,before_jsload,on_jsload,reload_dependents,map__74265,map__74265__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_74419){
var state_val_74420 = (state_74419[(1)]);
if((state_val_74420 === (7))){
var inst_74279 = (state_74419[(7)]);
var inst_74282 = (state_74419[(8)]);
var inst_74280 = (state_74419[(9)]);
var inst_74281 = (state_74419[(10)]);
var inst_74287 = cljs.core._nth.call(null,inst_74280,inst_74282);
var inst_74288 = figwheel.client.file_reloading.eval_body.call(null,inst_74287,opts);
var inst_74289 = (inst_74282 + (1));
var tmp74421 = inst_74279;
var tmp74422 = inst_74280;
var tmp74423 = inst_74281;
var inst_74279__$1 = tmp74421;
var inst_74280__$1 = tmp74422;
var inst_74281__$1 = tmp74423;
var inst_74282__$1 = inst_74289;
var state_74419__$1 = (function (){var statearr_74424 = state_74419;
(statearr_74424[(11)] = inst_74288);

(statearr_74424[(7)] = inst_74279__$1);

(statearr_74424[(8)] = inst_74282__$1);

(statearr_74424[(9)] = inst_74280__$1);

(statearr_74424[(10)] = inst_74281__$1);

return statearr_74424;
})();
var statearr_74425_74508 = state_74419__$1;
(statearr_74425_74508[(2)] = null);

(statearr_74425_74508[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74420 === (20))){
var inst_74322 = (state_74419[(12)]);
var inst_74330 = figwheel.client.file_reloading.sort_files.call(null,inst_74322);
var state_74419__$1 = state_74419;
var statearr_74426_74509 = state_74419__$1;
(statearr_74426_74509[(2)] = inst_74330);

(statearr_74426_74509[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74420 === (27))){
var state_74419__$1 = state_74419;
var statearr_74427_74510 = state_74419__$1;
(statearr_74427_74510[(2)] = null);

(statearr_74427_74510[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74420 === (1))){
var inst_74271 = (state_74419[(13)]);
var inst_74268 = before_jsload.call(null,files);
var inst_74269 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_74270 = (function (){return ((function (inst_74271,inst_74268,inst_74269,state_val_74420,c__66950__auto__,map__74264,map__74264__$1,opts,before_jsload,on_jsload,reload_dependents,map__74265,map__74265__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__74259_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__74259_SHARP_);
});
;})(inst_74271,inst_74268,inst_74269,state_val_74420,c__66950__auto__,map__74264,map__74264__$1,opts,before_jsload,on_jsload,reload_dependents,map__74265,map__74265__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_74271__$1 = cljs.core.filter.call(null,inst_74270,files);
var inst_74272 = cljs.core.not_empty.call(null,inst_74271__$1);
var state_74419__$1 = (function (){var statearr_74428 = state_74419;
(statearr_74428[(14)] = inst_74268);

(statearr_74428[(13)] = inst_74271__$1);

(statearr_74428[(15)] = inst_74269);

return statearr_74428;
})();
if(cljs.core.truth_(inst_74272)){
var statearr_74429_74511 = state_74419__$1;
(statearr_74429_74511[(1)] = (2));

} else {
var statearr_74430_74512 = state_74419__$1;
(statearr_74430_74512[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74420 === (24))){
var state_74419__$1 = state_74419;
var statearr_74431_74513 = state_74419__$1;
(statearr_74431_74513[(2)] = null);

(statearr_74431_74513[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74420 === (39))){
var inst_74372 = (state_74419[(16)]);
var state_74419__$1 = state_74419;
var statearr_74432_74514 = state_74419__$1;
(statearr_74432_74514[(2)] = inst_74372);

(statearr_74432_74514[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74420 === (46))){
var inst_74414 = (state_74419[(2)]);
var state_74419__$1 = state_74419;
var statearr_74433_74515 = state_74419__$1;
(statearr_74433_74515[(2)] = inst_74414);

(statearr_74433_74515[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74420 === (4))){
var inst_74316 = (state_74419[(2)]);
var inst_74317 = cljs.core.List.EMPTY;
var inst_74318 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_74317);
var inst_74319 = (function (){return ((function (inst_74316,inst_74317,inst_74318,state_val_74420,c__66950__auto__,map__74264,map__74264__$1,opts,before_jsload,on_jsload,reload_dependents,map__74265,map__74265__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__74260_SHARP_){
var and__62749__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__74260_SHARP_);
if(cljs.core.truth_(and__62749__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__74260_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__74260_SHARP_)));
} else {
return and__62749__auto__;
}
});
;})(inst_74316,inst_74317,inst_74318,state_val_74420,c__66950__auto__,map__74264,map__74264__$1,opts,before_jsload,on_jsload,reload_dependents,map__74265,map__74265__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_74320 = cljs.core.filter.call(null,inst_74319,files);
var inst_74321 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_74322 = cljs.core.concat.call(null,inst_74320,inst_74321);
var state_74419__$1 = (function (){var statearr_74434 = state_74419;
(statearr_74434[(17)] = inst_74316);

(statearr_74434[(18)] = inst_74318);

(statearr_74434[(12)] = inst_74322);

return statearr_74434;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_74435_74516 = state_74419__$1;
(statearr_74435_74516[(1)] = (16));

} else {
var statearr_74436_74517 = state_74419__$1;
(statearr_74436_74517[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74420 === (15))){
var inst_74306 = (state_74419[(2)]);
var state_74419__$1 = state_74419;
var statearr_74437_74518 = state_74419__$1;
(statearr_74437_74518[(2)] = inst_74306);

(statearr_74437_74518[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74420 === (21))){
var inst_74332 = (state_74419[(19)]);
var inst_74332__$1 = (state_74419[(2)]);
var inst_74333 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_74332__$1);
var state_74419__$1 = (function (){var statearr_74438 = state_74419;
(statearr_74438[(19)] = inst_74332__$1);

return statearr_74438;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74419__$1,(22),inst_74333);
} else {
if((state_val_74420 === (31))){
var inst_74417 = (state_74419[(2)]);
var state_74419__$1 = state_74419;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74419__$1,inst_74417);
} else {
if((state_val_74420 === (32))){
var inst_74372 = (state_74419[(16)]);
var inst_74377 = inst_74372.cljs$lang$protocol_mask$partition0$;
var inst_74378 = (inst_74377 & (64));
var inst_74379 = inst_74372.cljs$core$ISeq$;
var inst_74380 = (cljs.core.PROTOCOL_SENTINEL === inst_74379);
var inst_74381 = (inst_74378) || (inst_74380);
var state_74419__$1 = state_74419;
if(cljs.core.truth_(inst_74381)){
var statearr_74439_74519 = state_74419__$1;
(statearr_74439_74519[(1)] = (35));

} else {
var statearr_74440_74520 = state_74419__$1;
(statearr_74440_74520[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74420 === (40))){
var inst_74394 = (state_74419[(20)]);
var inst_74393 = (state_74419[(2)]);
var inst_74394__$1 = cljs.core.get.call(null,inst_74393,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_74395 = cljs.core.get.call(null,inst_74393,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_74396 = cljs.core.not_empty.call(null,inst_74394__$1);
var state_74419__$1 = (function (){var statearr_74441 = state_74419;
(statearr_74441[(20)] = inst_74394__$1);

(statearr_74441[(21)] = inst_74395);

return statearr_74441;
})();
if(cljs.core.truth_(inst_74396)){
var statearr_74442_74521 = state_74419__$1;
(statearr_74442_74521[(1)] = (41));

} else {
var statearr_74443_74522 = state_74419__$1;
(statearr_74443_74522[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74420 === (33))){
var state_74419__$1 = state_74419;
var statearr_74444_74523 = state_74419__$1;
(statearr_74444_74523[(2)] = false);

(statearr_74444_74523[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74420 === (13))){
var inst_74292 = (state_74419[(22)]);
var inst_74296 = cljs.core.chunk_first.call(null,inst_74292);
var inst_74297 = cljs.core.chunk_rest.call(null,inst_74292);
var inst_74298 = cljs.core.count.call(null,inst_74296);
var inst_74279 = inst_74297;
var inst_74280 = inst_74296;
var inst_74281 = inst_74298;
var inst_74282 = (0);
var state_74419__$1 = (function (){var statearr_74445 = state_74419;
(statearr_74445[(7)] = inst_74279);

(statearr_74445[(8)] = inst_74282);

(statearr_74445[(9)] = inst_74280);

(statearr_74445[(10)] = inst_74281);

return statearr_74445;
})();
var statearr_74446_74524 = state_74419__$1;
(statearr_74446_74524[(2)] = null);

(statearr_74446_74524[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74420 === (22))){
var inst_74340 = (state_74419[(23)]);
var inst_74335 = (state_74419[(24)]);
var inst_74332 = (state_74419[(19)]);
var inst_74336 = (state_74419[(25)]);
var inst_74335__$1 = (state_74419[(2)]);
var inst_74336__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_74335__$1);
var inst_74337 = (function (){var all_files = inst_74332;
var res_SINGLEQUOTE_ = inst_74335__$1;
var res = inst_74336__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_74340,inst_74335,inst_74332,inst_74336,inst_74335__$1,inst_74336__$1,state_val_74420,c__66950__auto__,map__74264,map__74264__$1,opts,before_jsload,on_jsload,reload_dependents,map__74265,map__74265__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__74261_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__74261_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_74340,inst_74335,inst_74332,inst_74336,inst_74335__$1,inst_74336__$1,state_val_74420,c__66950__auto__,map__74264,map__74264__$1,opts,before_jsload,on_jsload,reload_dependents,map__74265,map__74265__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_74338 = cljs.core.filter.call(null,inst_74337,inst_74335__$1);
var inst_74339 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_74340__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_74339);
var inst_74341 = cljs.core.not_empty.call(null,inst_74340__$1);
var state_74419__$1 = (function (){var statearr_74447 = state_74419;
(statearr_74447[(23)] = inst_74340__$1);

(statearr_74447[(24)] = inst_74335__$1);

(statearr_74447[(26)] = inst_74338);

(statearr_74447[(25)] = inst_74336__$1);

return statearr_74447;
})();
if(cljs.core.truth_(inst_74341)){
var statearr_74448_74525 = state_74419__$1;
(statearr_74448_74525[(1)] = (23));

} else {
var statearr_74449_74526 = state_74419__$1;
(statearr_74449_74526[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74420 === (36))){
var state_74419__$1 = state_74419;
var statearr_74450_74527 = state_74419__$1;
(statearr_74450_74527[(2)] = false);

(statearr_74450_74527[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74420 === (41))){
var inst_74394 = (state_74419[(20)]);
var inst_74398 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_74399 = cljs.core.map.call(null,inst_74398,inst_74394);
var inst_74400 = cljs.core.pr_str.call(null,inst_74399);
var inst_74401 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_74400)].join('');
var inst_74402 = figwheel.client.utils.log.call(null,inst_74401);
var state_74419__$1 = state_74419;
var statearr_74451_74528 = state_74419__$1;
(statearr_74451_74528[(2)] = inst_74402);

(statearr_74451_74528[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74420 === (43))){
var inst_74395 = (state_74419[(21)]);
var inst_74405 = (state_74419[(2)]);
var inst_74406 = cljs.core.not_empty.call(null,inst_74395);
var state_74419__$1 = (function (){var statearr_74452 = state_74419;
(statearr_74452[(27)] = inst_74405);

return statearr_74452;
})();
if(cljs.core.truth_(inst_74406)){
var statearr_74453_74529 = state_74419__$1;
(statearr_74453_74529[(1)] = (44));

} else {
var statearr_74454_74530 = state_74419__$1;
(statearr_74454_74530[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74420 === (29))){
var inst_74372 = (state_74419[(16)]);
var inst_74340 = (state_74419[(23)]);
var inst_74335 = (state_74419[(24)]);
var inst_74332 = (state_74419[(19)]);
var inst_74338 = (state_74419[(26)]);
var inst_74336 = (state_74419[(25)]);
var inst_74368 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_74371 = (function (){var all_files = inst_74332;
var res_SINGLEQUOTE_ = inst_74335;
var res = inst_74336;
var files_not_loaded = inst_74338;
var dependencies_that_loaded = inst_74340;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_74372,inst_74340,inst_74335,inst_74332,inst_74338,inst_74336,inst_74368,state_val_74420,c__66950__auto__,map__74264,map__74264__$1,opts,before_jsload,on_jsload,reload_dependents,map__74265,map__74265__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__74370){
var map__74455 = p__74370;
var map__74455__$1 = ((((!((map__74455 == null)))?((((map__74455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74455.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74455):map__74455);
var namespace = cljs.core.get.call(null,map__74455__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_74372,inst_74340,inst_74335,inst_74332,inst_74338,inst_74336,inst_74368,state_val_74420,c__66950__auto__,map__74264,map__74264__$1,opts,before_jsload,on_jsload,reload_dependents,map__74265,map__74265__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_74372__$1 = cljs.core.group_by.call(null,inst_74371,inst_74338);
var inst_74374 = (inst_74372__$1 == null);
var inst_74375 = cljs.core.not.call(null,inst_74374);
var state_74419__$1 = (function (){var statearr_74457 = state_74419;
(statearr_74457[(16)] = inst_74372__$1);

(statearr_74457[(28)] = inst_74368);

return statearr_74457;
})();
if(inst_74375){
var statearr_74458_74531 = state_74419__$1;
(statearr_74458_74531[(1)] = (32));

} else {
var statearr_74459_74532 = state_74419__$1;
(statearr_74459_74532[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74420 === (44))){
var inst_74395 = (state_74419[(21)]);
var inst_74408 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_74395);
var inst_74409 = cljs.core.pr_str.call(null,inst_74408);
var inst_74410 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_74409)].join('');
var inst_74411 = figwheel.client.utils.log.call(null,inst_74410);
var state_74419__$1 = state_74419;
var statearr_74460_74533 = state_74419__$1;
(statearr_74460_74533[(2)] = inst_74411);

(statearr_74460_74533[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74420 === (6))){
var inst_74313 = (state_74419[(2)]);
var state_74419__$1 = state_74419;
var statearr_74461_74534 = state_74419__$1;
(statearr_74461_74534[(2)] = inst_74313);

(statearr_74461_74534[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74420 === (28))){
var inst_74338 = (state_74419[(26)]);
var inst_74365 = (state_74419[(2)]);
var inst_74366 = cljs.core.not_empty.call(null,inst_74338);
var state_74419__$1 = (function (){var statearr_74462 = state_74419;
(statearr_74462[(29)] = inst_74365);

return statearr_74462;
})();
if(cljs.core.truth_(inst_74366)){
var statearr_74463_74535 = state_74419__$1;
(statearr_74463_74535[(1)] = (29));

} else {
var statearr_74464_74536 = state_74419__$1;
(statearr_74464_74536[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74420 === (25))){
var inst_74336 = (state_74419[(25)]);
var inst_74352 = (state_74419[(2)]);
var inst_74353 = cljs.core.not_empty.call(null,inst_74336);
var state_74419__$1 = (function (){var statearr_74465 = state_74419;
(statearr_74465[(30)] = inst_74352);

return statearr_74465;
})();
if(cljs.core.truth_(inst_74353)){
var statearr_74466_74537 = state_74419__$1;
(statearr_74466_74537[(1)] = (26));

} else {
var statearr_74467_74538 = state_74419__$1;
(statearr_74467_74538[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74420 === (34))){
var inst_74388 = (state_74419[(2)]);
var state_74419__$1 = state_74419;
if(cljs.core.truth_(inst_74388)){
var statearr_74468_74539 = state_74419__$1;
(statearr_74468_74539[(1)] = (38));

} else {
var statearr_74469_74540 = state_74419__$1;
(statearr_74469_74540[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74420 === (17))){
var state_74419__$1 = state_74419;
var statearr_74470_74541 = state_74419__$1;
(statearr_74470_74541[(2)] = recompile_dependents);

(statearr_74470_74541[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74420 === (3))){
var state_74419__$1 = state_74419;
var statearr_74471_74542 = state_74419__$1;
(statearr_74471_74542[(2)] = null);

(statearr_74471_74542[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74420 === (12))){
var inst_74309 = (state_74419[(2)]);
var state_74419__$1 = state_74419;
var statearr_74472_74543 = state_74419__$1;
(statearr_74472_74543[(2)] = inst_74309);

(statearr_74472_74543[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74420 === (2))){
var inst_74271 = (state_74419[(13)]);
var inst_74278 = cljs.core.seq.call(null,inst_74271);
var inst_74279 = inst_74278;
var inst_74280 = null;
var inst_74281 = (0);
var inst_74282 = (0);
var state_74419__$1 = (function (){var statearr_74473 = state_74419;
(statearr_74473[(7)] = inst_74279);

(statearr_74473[(8)] = inst_74282);

(statearr_74473[(9)] = inst_74280);

(statearr_74473[(10)] = inst_74281);

return statearr_74473;
})();
var statearr_74474_74544 = state_74419__$1;
(statearr_74474_74544[(2)] = null);

(statearr_74474_74544[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74420 === (23))){
var inst_74340 = (state_74419[(23)]);
var inst_74335 = (state_74419[(24)]);
var inst_74332 = (state_74419[(19)]);
var inst_74338 = (state_74419[(26)]);
var inst_74336 = (state_74419[(25)]);
var inst_74343 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_74345 = (function (){var all_files = inst_74332;
var res_SINGLEQUOTE_ = inst_74335;
var res = inst_74336;
var files_not_loaded = inst_74338;
var dependencies_that_loaded = inst_74340;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_74340,inst_74335,inst_74332,inst_74338,inst_74336,inst_74343,state_val_74420,c__66950__auto__,map__74264,map__74264__$1,opts,before_jsload,on_jsload,reload_dependents,map__74265,map__74265__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__74344){
var map__74475 = p__74344;
var map__74475__$1 = ((((!((map__74475 == null)))?((((map__74475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74475.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74475):map__74475);
var request_url = cljs.core.get.call(null,map__74475__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_74340,inst_74335,inst_74332,inst_74338,inst_74336,inst_74343,state_val_74420,c__66950__auto__,map__74264,map__74264__$1,opts,before_jsload,on_jsload,reload_dependents,map__74265,map__74265__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_74346 = cljs.core.reverse.call(null,inst_74340);
var inst_74347 = cljs.core.map.call(null,inst_74345,inst_74346);
var inst_74348 = cljs.core.pr_str.call(null,inst_74347);
var inst_74349 = figwheel.client.utils.log.call(null,inst_74348);
var state_74419__$1 = (function (){var statearr_74477 = state_74419;
(statearr_74477[(31)] = inst_74343);

return statearr_74477;
})();
var statearr_74478_74545 = state_74419__$1;
(statearr_74478_74545[(2)] = inst_74349);

(statearr_74478_74545[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74420 === (35))){
var state_74419__$1 = state_74419;
var statearr_74479_74546 = state_74419__$1;
(statearr_74479_74546[(2)] = true);

(statearr_74479_74546[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74420 === (19))){
var inst_74322 = (state_74419[(12)]);
var inst_74328 = figwheel.client.file_reloading.expand_files.call(null,inst_74322);
var state_74419__$1 = state_74419;
var statearr_74480_74547 = state_74419__$1;
(statearr_74480_74547[(2)] = inst_74328);

(statearr_74480_74547[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74420 === (11))){
var state_74419__$1 = state_74419;
var statearr_74481_74548 = state_74419__$1;
(statearr_74481_74548[(2)] = null);

(statearr_74481_74548[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74420 === (9))){
var inst_74311 = (state_74419[(2)]);
var state_74419__$1 = state_74419;
var statearr_74482_74549 = state_74419__$1;
(statearr_74482_74549[(2)] = inst_74311);

(statearr_74482_74549[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74420 === (5))){
var inst_74282 = (state_74419[(8)]);
var inst_74281 = (state_74419[(10)]);
var inst_74284 = (inst_74282 < inst_74281);
var inst_74285 = inst_74284;
var state_74419__$1 = state_74419;
if(cljs.core.truth_(inst_74285)){
var statearr_74483_74550 = state_74419__$1;
(statearr_74483_74550[(1)] = (7));

} else {
var statearr_74484_74551 = state_74419__$1;
(statearr_74484_74551[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74420 === (14))){
var inst_74292 = (state_74419[(22)]);
var inst_74301 = cljs.core.first.call(null,inst_74292);
var inst_74302 = figwheel.client.file_reloading.eval_body.call(null,inst_74301,opts);
var inst_74303 = cljs.core.next.call(null,inst_74292);
var inst_74279 = inst_74303;
var inst_74280 = null;
var inst_74281 = (0);
var inst_74282 = (0);
var state_74419__$1 = (function (){var statearr_74485 = state_74419;
(statearr_74485[(7)] = inst_74279);

(statearr_74485[(8)] = inst_74282);

(statearr_74485[(32)] = inst_74302);

(statearr_74485[(9)] = inst_74280);

(statearr_74485[(10)] = inst_74281);

return statearr_74485;
})();
var statearr_74486_74552 = state_74419__$1;
(statearr_74486_74552[(2)] = null);

(statearr_74486_74552[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74420 === (45))){
var state_74419__$1 = state_74419;
var statearr_74487_74553 = state_74419__$1;
(statearr_74487_74553[(2)] = null);

(statearr_74487_74553[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74420 === (26))){
var inst_74340 = (state_74419[(23)]);
var inst_74335 = (state_74419[(24)]);
var inst_74332 = (state_74419[(19)]);
var inst_74338 = (state_74419[(26)]);
var inst_74336 = (state_74419[(25)]);
var inst_74355 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_74357 = (function (){var all_files = inst_74332;
var res_SINGLEQUOTE_ = inst_74335;
var res = inst_74336;
var files_not_loaded = inst_74338;
var dependencies_that_loaded = inst_74340;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_74340,inst_74335,inst_74332,inst_74338,inst_74336,inst_74355,state_val_74420,c__66950__auto__,map__74264,map__74264__$1,opts,before_jsload,on_jsload,reload_dependents,map__74265,map__74265__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__74356){
var map__74488 = p__74356;
var map__74488__$1 = ((((!((map__74488 == null)))?((((map__74488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74488.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74488):map__74488);
var namespace = cljs.core.get.call(null,map__74488__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__74488__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_74340,inst_74335,inst_74332,inst_74338,inst_74336,inst_74355,state_val_74420,c__66950__auto__,map__74264,map__74264__$1,opts,before_jsload,on_jsload,reload_dependents,map__74265,map__74265__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_74358 = cljs.core.map.call(null,inst_74357,inst_74336);
var inst_74359 = cljs.core.pr_str.call(null,inst_74358);
var inst_74360 = figwheel.client.utils.log.call(null,inst_74359);
var inst_74361 = (function (){var all_files = inst_74332;
var res_SINGLEQUOTE_ = inst_74335;
var res = inst_74336;
var files_not_loaded = inst_74338;
var dependencies_that_loaded = inst_74340;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_74340,inst_74335,inst_74332,inst_74338,inst_74336,inst_74355,inst_74357,inst_74358,inst_74359,inst_74360,state_val_74420,c__66950__auto__,map__74264,map__74264__$1,opts,before_jsload,on_jsload,reload_dependents,map__74265,map__74265__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_74340,inst_74335,inst_74332,inst_74338,inst_74336,inst_74355,inst_74357,inst_74358,inst_74359,inst_74360,state_val_74420,c__66950__auto__,map__74264,map__74264__$1,opts,before_jsload,on_jsload,reload_dependents,map__74265,map__74265__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_74362 = setTimeout(inst_74361,(10));
var state_74419__$1 = (function (){var statearr_74490 = state_74419;
(statearr_74490[(33)] = inst_74360);

(statearr_74490[(34)] = inst_74355);

return statearr_74490;
})();
var statearr_74491_74554 = state_74419__$1;
(statearr_74491_74554[(2)] = inst_74362);

(statearr_74491_74554[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74420 === (16))){
var state_74419__$1 = state_74419;
var statearr_74492_74555 = state_74419__$1;
(statearr_74492_74555[(2)] = reload_dependents);

(statearr_74492_74555[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74420 === (38))){
var inst_74372 = (state_74419[(16)]);
var inst_74390 = cljs.core.apply.call(null,cljs.core.hash_map,inst_74372);
var state_74419__$1 = state_74419;
var statearr_74493_74556 = state_74419__$1;
(statearr_74493_74556[(2)] = inst_74390);

(statearr_74493_74556[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74420 === (30))){
var state_74419__$1 = state_74419;
var statearr_74494_74557 = state_74419__$1;
(statearr_74494_74557[(2)] = null);

(statearr_74494_74557[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74420 === (10))){
var inst_74292 = (state_74419[(22)]);
var inst_74294 = cljs.core.chunked_seq_QMARK_.call(null,inst_74292);
var state_74419__$1 = state_74419;
if(inst_74294){
var statearr_74495_74558 = state_74419__$1;
(statearr_74495_74558[(1)] = (13));

} else {
var statearr_74496_74559 = state_74419__$1;
(statearr_74496_74559[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74420 === (18))){
var inst_74326 = (state_74419[(2)]);
var state_74419__$1 = state_74419;
if(cljs.core.truth_(inst_74326)){
var statearr_74497_74560 = state_74419__$1;
(statearr_74497_74560[(1)] = (19));

} else {
var statearr_74498_74561 = state_74419__$1;
(statearr_74498_74561[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74420 === (42))){
var state_74419__$1 = state_74419;
var statearr_74499_74562 = state_74419__$1;
(statearr_74499_74562[(2)] = null);

(statearr_74499_74562[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74420 === (37))){
var inst_74385 = (state_74419[(2)]);
var state_74419__$1 = state_74419;
var statearr_74500_74563 = state_74419__$1;
(statearr_74500_74563[(2)] = inst_74385);

(statearr_74500_74563[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74420 === (8))){
var inst_74279 = (state_74419[(7)]);
var inst_74292 = (state_74419[(22)]);
var inst_74292__$1 = cljs.core.seq.call(null,inst_74279);
var state_74419__$1 = (function (){var statearr_74501 = state_74419;
(statearr_74501[(22)] = inst_74292__$1);

return statearr_74501;
})();
if(inst_74292__$1){
var statearr_74502_74564 = state_74419__$1;
(statearr_74502_74564[(1)] = (10));

} else {
var statearr_74503_74565 = state_74419__$1;
(statearr_74503_74565[(1)] = (11));

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
});})(c__66950__auto__,map__74264,map__74264__$1,opts,before_jsload,on_jsload,reload_dependents,map__74265,map__74265__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__66860__auto__,c__66950__auto__,map__74264,map__74264__$1,opts,before_jsload,on_jsload,reload_dependents,map__74265,map__74265__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__66861__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__66861__auto____0 = (function (){
var statearr_74504 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_74504[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__66861__auto__);

(statearr_74504[(1)] = (1));

return statearr_74504;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__66861__auto____1 = (function (state_74419){
while(true){
var ret_value__66862__auto__ = (function (){try{while(true){
var result__66863__auto__ = switch__66860__auto__.call(null,state_74419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__66863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66863__auto__;
}
break;
}
}catch (e74505){if((e74505 instanceof Object)){
var ex__66864__auto__ = e74505;
var statearr_74506_74566 = state_74419;
(statearr_74506_74566[(5)] = ex__66864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e74505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__66862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74567 = state_74419;
state_74419 = G__74567;
continue;
} else {
return ret_value__66862__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__66861__auto__ = function(state_74419){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__66861__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__66861__auto____1.call(this,state_74419);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__66861__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__66861__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__66861__auto__;
})()
;})(switch__66860__auto__,c__66950__auto__,map__74264,map__74264__$1,opts,before_jsload,on_jsload,reload_dependents,map__74265,map__74265__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__66952__auto__ = (function (){var statearr_74507 = f__66951__auto__.call(null);
(statearr_74507[(6)] = c__66950__auto__);

return statearr_74507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__66952__auto__);
});})(c__66950__auto__,map__74264,map__74264__$1,opts,before_jsload,on_jsload,reload_dependents,map__74265,map__74265__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__66950__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__74570,link){
var map__74571 = p__74570;
var map__74571__$1 = ((((!((map__74571 == null)))?((((map__74571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74571.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74571):map__74571);
var file = cljs.core.get.call(null,map__74571__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__74571,map__74571__$1,file){
return (function (p1__74568_SHARP_,p2__74569_SHARP_){
if(cljs.core._EQ_.call(null,p1__74568_SHARP_,p2__74569_SHARP_)){
return p1__74568_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__74571,map__74571__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__74574){
var map__74575 = p__74574;
var map__74575__$1 = ((((!((map__74575 == null)))?((((map__74575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74575.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74575):map__74575);
var match_length = cljs.core.get.call(null,map__74575__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__74575__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__74573_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__74573_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__74577_SHARP_,p2__74578_SHARP_){
return cljs.core.assoc.call(null,p1__74577_SHARP_,cljs.core.get.call(null,p2__74578_SHARP_,key),p2__74578_SHARP_);
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
var loaded_f_datas_74579 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_74579);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_74579);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__74580,p__74581){
var map__74582 = p__74580;
var map__74582__$1 = ((((!((map__74582 == null)))?((((map__74582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74582.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74582):map__74582);
var on_cssload = cljs.core.get.call(null,map__74582__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__74583 = p__74581;
var map__74583__$1 = ((((!((map__74583 == null)))?((((map__74583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74583.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74583):map__74583);
var files_msg = map__74583__$1;
var files = cljs.core.get.call(null,map__74583__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1514950338496
