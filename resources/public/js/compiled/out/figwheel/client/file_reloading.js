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
var or__9810__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__9810__auto__){
return or__9810__auto__;
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
var or__9810__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__9810__auto__)){
return or__9810__auto__;
} else {
var or__9810__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__9810__auto____$1)){
return or__9810__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__22559_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__22559_SHARP_));
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
var seq__22560 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__22561 = null;
var count__22562 = (0);
var i__22563 = (0);
while(true){
if((i__22563 < count__22562)){
var n = cljs.core._nth.call(null,chunk__22561,i__22563);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22564 = seq__22560;
var G__22565 = chunk__22561;
var G__22566 = count__22562;
var G__22567 = (i__22563 + (1));
seq__22560 = G__22564;
chunk__22561 = G__22565;
count__22562 = G__22566;
i__22563 = G__22567;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__22560);
if(temp__6738__auto__){
var seq__22560__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22560__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__22560__$1);
var G__22568 = cljs.core.chunk_rest.call(null,seq__22560__$1);
var G__22569 = c__10741__auto__;
var G__22570 = cljs.core.count.call(null,c__10741__auto__);
var G__22571 = (0);
seq__22560 = G__22568;
chunk__22561 = G__22569;
count__22562 = G__22570;
i__22563 = G__22571;
continue;
} else {
var n = cljs.core.first.call(null,seq__22560__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22572 = cljs.core.next.call(null,seq__22560__$1);
var G__22573 = null;
var G__22574 = (0);
var G__22575 = (0);
seq__22560 = G__22572;
chunk__22561 = G__22573;
count__22562 = G__22574;
i__22563 = G__22575;
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

var seq__22585_22593 = cljs.core.seq.call(null,deps);
var chunk__22586_22594 = null;
var count__22587_22595 = (0);
var i__22588_22596 = (0);
while(true){
if((i__22588_22596 < count__22587_22595)){
var dep_22597 = cljs.core._nth.call(null,chunk__22586_22594,i__22588_22596);
topo_sort_helper_STAR_.call(null,dep_22597,(depth + (1)),state);

var G__22598 = seq__22585_22593;
var G__22599 = chunk__22586_22594;
var G__22600 = count__22587_22595;
var G__22601 = (i__22588_22596 + (1));
seq__22585_22593 = G__22598;
chunk__22586_22594 = G__22599;
count__22587_22595 = G__22600;
i__22588_22596 = G__22601;
continue;
} else {
var temp__6738__auto___22602 = cljs.core.seq.call(null,seq__22585_22593);
if(temp__6738__auto___22602){
var seq__22585_22603__$1 = temp__6738__auto___22602;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22585_22603__$1)){
var c__10741__auto___22604 = cljs.core.chunk_first.call(null,seq__22585_22603__$1);
var G__22605 = cljs.core.chunk_rest.call(null,seq__22585_22603__$1);
var G__22606 = c__10741__auto___22604;
var G__22607 = cljs.core.count.call(null,c__10741__auto___22604);
var G__22608 = (0);
seq__22585_22593 = G__22605;
chunk__22586_22594 = G__22606;
count__22587_22595 = G__22607;
i__22588_22596 = G__22608;
continue;
} else {
var dep_22609 = cljs.core.first.call(null,seq__22585_22603__$1);
topo_sort_helper_STAR_.call(null,dep_22609,(depth + (1)),state);

var G__22610 = cljs.core.next.call(null,seq__22585_22603__$1);
var G__22611 = null;
var G__22612 = (0);
var G__22613 = (0);
seq__22585_22593 = G__22610;
chunk__22586_22594 = G__22611;
count__22587_22595 = G__22612;
i__22588_22596 = G__22613;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__22589){
var vec__22590 = p__22589;
var seq__22591 = cljs.core.seq.call(null,vec__22590);
var first__22592 = cljs.core.first.call(null,seq__22591);
var seq__22591__$1 = cljs.core.next.call(null,seq__22591);
var x = first__22592;
var xs = seq__22591__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__22590,seq__22591,first__22592,seq__22591__$1,x,xs,get_deps__$1){
return (function (p1__22576_SHARP_){
return clojure.set.difference.call(null,p1__22576_SHARP_,x);
});})(vec__22590,seq__22591,first__22592,seq__22591__$1,x,xs,get_deps__$1))
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
var seq__22614 = cljs.core.seq.call(null,provides);
var chunk__22615 = null;
var count__22616 = (0);
var i__22617 = (0);
while(true){
if((i__22617 < count__22616)){
var prov = cljs.core._nth.call(null,chunk__22615,i__22617);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22618_22626 = cljs.core.seq.call(null,requires);
var chunk__22619_22627 = null;
var count__22620_22628 = (0);
var i__22621_22629 = (0);
while(true){
if((i__22621_22629 < count__22620_22628)){
var req_22630 = cljs.core._nth.call(null,chunk__22619_22627,i__22621_22629);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22630,prov);

var G__22631 = seq__22618_22626;
var G__22632 = chunk__22619_22627;
var G__22633 = count__22620_22628;
var G__22634 = (i__22621_22629 + (1));
seq__22618_22626 = G__22631;
chunk__22619_22627 = G__22632;
count__22620_22628 = G__22633;
i__22621_22629 = G__22634;
continue;
} else {
var temp__6738__auto___22635 = cljs.core.seq.call(null,seq__22618_22626);
if(temp__6738__auto___22635){
var seq__22618_22636__$1 = temp__6738__auto___22635;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22618_22636__$1)){
var c__10741__auto___22637 = cljs.core.chunk_first.call(null,seq__22618_22636__$1);
var G__22638 = cljs.core.chunk_rest.call(null,seq__22618_22636__$1);
var G__22639 = c__10741__auto___22637;
var G__22640 = cljs.core.count.call(null,c__10741__auto___22637);
var G__22641 = (0);
seq__22618_22626 = G__22638;
chunk__22619_22627 = G__22639;
count__22620_22628 = G__22640;
i__22621_22629 = G__22641;
continue;
} else {
var req_22642 = cljs.core.first.call(null,seq__22618_22636__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22642,prov);

var G__22643 = cljs.core.next.call(null,seq__22618_22636__$1);
var G__22644 = null;
var G__22645 = (0);
var G__22646 = (0);
seq__22618_22626 = G__22643;
chunk__22619_22627 = G__22644;
count__22620_22628 = G__22645;
i__22621_22629 = G__22646;
continue;
}
} else {
}
}
break;
}

var G__22647 = seq__22614;
var G__22648 = chunk__22615;
var G__22649 = count__22616;
var G__22650 = (i__22617 + (1));
seq__22614 = G__22647;
chunk__22615 = G__22648;
count__22616 = G__22649;
i__22617 = G__22650;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__22614);
if(temp__6738__auto__){
var seq__22614__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22614__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__22614__$1);
var G__22651 = cljs.core.chunk_rest.call(null,seq__22614__$1);
var G__22652 = c__10741__auto__;
var G__22653 = cljs.core.count.call(null,c__10741__auto__);
var G__22654 = (0);
seq__22614 = G__22651;
chunk__22615 = G__22652;
count__22616 = G__22653;
i__22617 = G__22654;
continue;
} else {
var prov = cljs.core.first.call(null,seq__22614__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22622_22655 = cljs.core.seq.call(null,requires);
var chunk__22623_22656 = null;
var count__22624_22657 = (0);
var i__22625_22658 = (0);
while(true){
if((i__22625_22658 < count__22624_22657)){
var req_22659 = cljs.core._nth.call(null,chunk__22623_22656,i__22625_22658);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22659,prov);

var G__22660 = seq__22622_22655;
var G__22661 = chunk__22623_22656;
var G__22662 = count__22624_22657;
var G__22663 = (i__22625_22658 + (1));
seq__22622_22655 = G__22660;
chunk__22623_22656 = G__22661;
count__22624_22657 = G__22662;
i__22625_22658 = G__22663;
continue;
} else {
var temp__6738__auto___22664__$1 = cljs.core.seq.call(null,seq__22622_22655);
if(temp__6738__auto___22664__$1){
var seq__22622_22665__$1 = temp__6738__auto___22664__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22622_22665__$1)){
var c__10741__auto___22666 = cljs.core.chunk_first.call(null,seq__22622_22665__$1);
var G__22667 = cljs.core.chunk_rest.call(null,seq__22622_22665__$1);
var G__22668 = c__10741__auto___22666;
var G__22669 = cljs.core.count.call(null,c__10741__auto___22666);
var G__22670 = (0);
seq__22622_22655 = G__22667;
chunk__22623_22656 = G__22668;
count__22624_22657 = G__22669;
i__22625_22658 = G__22670;
continue;
} else {
var req_22671 = cljs.core.first.call(null,seq__22622_22665__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22671,prov);

var G__22672 = cljs.core.next.call(null,seq__22622_22665__$1);
var G__22673 = null;
var G__22674 = (0);
var G__22675 = (0);
seq__22622_22655 = G__22672;
chunk__22623_22656 = G__22673;
count__22624_22657 = G__22674;
i__22625_22658 = G__22675;
continue;
}
} else {
}
}
break;
}

var G__22676 = cljs.core.next.call(null,seq__22614__$1);
var G__22677 = null;
var G__22678 = (0);
var G__22679 = (0);
seq__22614 = G__22676;
chunk__22615 = G__22677;
count__22616 = G__22678;
i__22617 = G__22679;
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
var seq__22680_22684 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__22681_22685 = null;
var count__22682_22686 = (0);
var i__22683_22687 = (0);
while(true){
if((i__22683_22687 < count__22682_22686)){
var ns_22688 = cljs.core._nth.call(null,chunk__22681_22685,i__22683_22687);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22688);

var G__22689 = seq__22680_22684;
var G__22690 = chunk__22681_22685;
var G__22691 = count__22682_22686;
var G__22692 = (i__22683_22687 + (1));
seq__22680_22684 = G__22689;
chunk__22681_22685 = G__22690;
count__22682_22686 = G__22691;
i__22683_22687 = G__22692;
continue;
} else {
var temp__6738__auto___22693 = cljs.core.seq.call(null,seq__22680_22684);
if(temp__6738__auto___22693){
var seq__22680_22694__$1 = temp__6738__auto___22693;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22680_22694__$1)){
var c__10741__auto___22695 = cljs.core.chunk_first.call(null,seq__22680_22694__$1);
var G__22696 = cljs.core.chunk_rest.call(null,seq__22680_22694__$1);
var G__22697 = c__10741__auto___22695;
var G__22698 = cljs.core.count.call(null,c__10741__auto___22695);
var G__22699 = (0);
seq__22680_22684 = G__22696;
chunk__22681_22685 = G__22697;
count__22682_22686 = G__22698;
i__22683_22687 = G__22699;
continue;
} else {
var ns_22700 = cljs.core.first.call(null,seq__22680_22694__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22700);

var G__22701 = cljs.core.next.call(null,seq__22680_22694__$1);
var G__22702 = null;
var G__22703 = (0);
var G__22704 = (0);
seq__22680_22684 = G__22701;
chunk__22681_22685 = G__22702;
count__22682_22686 = G__22703;
i__22683_22687 = G__22704;
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
goog.require_figwheel_backup_ = (function (){var or__9810__auto__ = goog.require__;
if(cljs.core.truth_(or__9810__auto__)){
return or__9810__auto__;
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
var G__22705__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__22705 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22706__i = 0, G__22706__a = new Array(arguments.length -  0);
while (G__22706__i < G__22706__a.length) {G__22706__a[G__22706__i] = arguments[G__22706__i + 0]; ++G__22706__i;}
  args = new cljs.core.IndexedSeq(G__22706__a,0,null);
} 
return G__22705__delegate.call(this,args);};
G__22705.cljs$lang$maxFixedArity = 0;
G__22705.cljs$lang$applyTo = (function (arglist__22707){
var args = cljs.core.seq(arglist__22707);
return G__22705__delegate(args);
});
G__22705.cljs$core$IFn$_invoke$arity$variadic = G__22705__delegate;
return G__22705;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__22708_SHARP_,p2__22709_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22708_SHARP_)].join('')),p2__22709_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__22710_SHARP_,p2__22711_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22710_SHARP_)].join(''),p2__22711_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__22712 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__22712.addCallback(((function (G__22712){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__22712))
);

G__22712.addErrback(((function (G__22712){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__22712))
);

return G__22712;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__22713 = cljs.core._EQ_;
var expr__22714 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__22713.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__22714))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__22713,expr__22714){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__22713,expr__22714))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__22713,expr__22714){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e22716){if((e22716 instanceof Error)){
var e = e22716;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e22716;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__22713,expr__22714))
} else {
if(cljs.core.truth_(pred__22713.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__22714))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__22713.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__22714))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__22713.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__22714))){
return ((function (pred__22713,expr__22714){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e22717){if((e22717 instanceof Error)){
var e = e22717;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e22717;

}
}})());
});
;})(pred__22713,expr__22714))
} else {
return ((function (pred__22713,expr__22714){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__22713,expr__22714))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__22718,callback){
var map__22719 = p__22718;
var map__22719__$1 = ((((!((map__22719 == null)))?((((map__22719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22719.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22719):map__22719);
var file_msg = map__22719__$1;
var request_url = cljs.core.get.call(null,map__22719__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__22719,map__22719__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__22719,map__22719__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__15288__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15288__auto__){
return (function (){
var f__15289__auto__ = (function (){var switch__15198__auto__ = ((function (c__15288__auto__){
return (function (state_22743){
var state_val_22744 = (state_22743[(1)]);
if((state_val_22744 === (7))){
var inst_22739 = (state_22743[(2)]);
var state_22743__$1 = state_22743;
var statearr_22745_22762 = state_22743__$1;
(statearr_22745_22762[(2)] = inst_22739);

(statearr_22745_22762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22744 === (1))){
var state_22743__$1 = state_22743;
var statearr_22746_22763 = state_22743__$1;
(statearr_22746_22763[(2)] = null);

(statearr_22746_22763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22744 === (4))){
var inst_22723 = (state_22743[(7)]);
var inst_22723__$1 = (state_22743[(2)]);
var state_22743__$1 = (function (){var statearr_22747 = state_22743;
(statearr_22747[(7)] = inst_22723__$1);

return statearr_22747;
})();
if(cljs.core.truth_(inst_22723__$1)){
var statearr_22748_22764 = state_22743__$1;
(statearr_22748_22764[(1)] = (5));

} else {
var statearr_22749_22765 = state_22743__$1;
(statearr_22749_22765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22744 === (6))){
var state_22743__$1 = state_22743;
var statearr_22750_22766 = state_22743__$1;
(statearr_22750_22766[(2)] = null);

(statearr_22750_22766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22744 === (3))){
var inst_22741 = (state_22743[(2)]);
var state_22743__$1 = state_22743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22743__$1,inst_22741);
} else {
if((state_val_22744 === (2))){
var state_22743__$1 = state_22743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22743__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_22744 === (11))){
var inst_22735 = (state_22743[(2)]);
var state_22743__$1 = (function (){var statearr_22751 = state_22743;
(statearr_22751[(8)] = inst_22735);

return statearr_22751;
})();
var statearr_22752_22767 = state_22743__$1;
(statearr_22752_22767[(2)] = null);

(statearr_22752_22767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22744 === (9))){
var inst_22729 = (state_22743[(9)]);
var inst_22727 = (state_22743[(10)]);
var inst_22731 = inst_22729.call(null,inst_22727);
var state_22743__$1 = state_22743;
var statearr_22753_22768 = state_22743__$1;
(statearr_22753_22768[(2)] = inst_22731);

(statearr_22753_22768[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22744 === (5))){
var inst_22723 = (state_22743[(7)]);
var inst_22725 = figwheel.client.file_reloading.blocking_load.call(null,inst_22723);
var state_22743__$1 = state_22743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22743__$1,(8),inst_22725);
} else {
if((state_val_22744 === (10))){
var inst_22727 = (state_22743[(10)]);
var inst_22733 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_22727);
var state_22743__$1 = state_22743;
var statearr_22754_22769 = state_22743__$1;
(statearr_22754_22769[(2)] = inst_22733);

(statearr_22754_22769[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22744 === (8))){
var inst_22729 = (state_22743[(9)]);
var inst_22723 = (state_22743[(7)]);
var inst_22727 = (state_22743[(2)]);
var inst_22728 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_22729__$1 = cljs.core.get.call(null,inst_22728,inst_22723);
var state_22743__$1 = (function (){var statearr_22755 = state_22743;
(statearr_22755[(9)] = inst_22729__$1);

(statearr_22755[(10)] = inst_22727);

return statearr_22755;
})();
if(cljs.core.truth_(inst_22729__$1)){
var statearr_22756_22770 = state_22743__$1;
(statearr_22756_22770[(1)] = (9));

} else {
var statearr_22757_22771 = state_22743__$1;
(statearr_22757_22771[(1)] = (10));

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
});})(c__15288__auto__))
;
return ((function (switch__15198__auto__,c__15288__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__15199__auto__ = null;
var figwheel$client$file_reloading$state_machine__15199__auto____0 = (function (){
var statearr_22758 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22758[(0)] = figwheel$client$file_reloading$state_machine__15199__auto__);

(statearr_22758[(1)] = (1));

return statearr_22758;
});
var figwheel$client$file_reloading$state_machine__15199__auto____1 = (function (state_22743){
while(true){
var ret_value__15200__auto__ = (function (){try{while(true){
var result__15201__auto__ = switch__15198__auto__.call(null,state_22743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15201__auto__;
}
break;
}
}catch (e22759){if((e22759 instanceof Object)){
var ex__15202__auto__ = e22759;
var statearr_22760_22772 = state_22743;
(statearr_22760_22772[(5)] = ex__15202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22773 = state_22743;
state_22743 = G__22773;
continue;
} else {
return ret_value__15200__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__15199__auto__ = function(state_22743){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__15199__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__15199__auto____1.call(this,state_22743);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__15199__auto____0;
figwheel$client$file_reloading$state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__15199__auto____1;
return figwheel$client$file_reloading$state_machine__15199__auto__;
})()
;})(switch__15198__auto__,c__15288__auto__))
})();
var state__15290__auto__ = (function (){var statearr_22761 = f__15289__auto__.call(null);
(statearr_22761[(6)] = c__15288__auto__);

return statearr_22761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15290__auto__);
});})(c__15288__auto__))
);

return c__15288__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__22774,callback){
var map__22775 = p__22774;
var map__22775__$1 = ((((!((map__22775 == null)))?((((map__22775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22775.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22775):map__22775);
var file_msg = map__22775__$1;
var namespace = cljs.core.get.call(null,map__22775__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__22775,map__22775__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__22775,map__22775__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__22777){
var map__22778 = p__22777;
var map__22778__$1 = ((((!((map__22778 == null)))?((((map__22778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22778.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22778):map__22778);
var file_msg = map__22778__$1;
var namespace = cljs.core.get.call(null,map__22778__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__22780){
var map__22781 = p__22780;
var map__22781__$1 = ((((!((map__22781 == null)))?((((map__22781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22781.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22781):map__22781);
var file_msg = map__22781__$1;
var namespace = cljs.core.get.call(null,map__22781__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__9798__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__9798__auto__){
var or__9810__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__9810__auto__)){
return or__9810__auto__;
} else {
var or__9810__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__9810__auto____$1)){
return or__9810__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__9798__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__22783,callback){
var map__22784 = p__22783;
var map__22784__$1 = ((((!((map__22784 == null)))?((((map__22784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22784.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22784):map__22784);
var file_msg = map__22784__$1;
var request_url = cljs.core.get.call(null,map__22784__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__22784__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__15288__auto___22834 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15288__auto___22834,out){
return (function (){
var f__15289__auto__ = (function (){var switch__15198__auto__ = ((function (c__15288__auto___22834,out){
return (function (state_22819){
var state_val_22820 = (state_22819[(1)]);
if((state_val_22820 === (1))){
var inst_22793 = cljs.core.seq.call(null,files);
var inst_22794 = cljs.core.first.call(null,inst_22793);
var inst_22795 = cljs.core.next.call(null,inst_22793);
var inst_22796 = files;
var state_22819__$1 = (function (){var statearr_22821 = state_22819;
(statearr_22821[(7)] = inst_22795);

(statearr_22821[(8)] = inst_22794);

(statearr_22821[(9)] = inst_22796);

return statearr_22821;
})();
var statearr_22822_22835 = state_22819__$1;
(statearr_22822_22835[(2)] = null);

(statearr_22822_22835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22820 === (2))){
var inst_22802 = (state_22819[(10)]);
var inst_22796 = (state_22819[(9)]);
var inst_22801 = cljs.core.seq.call(null,inst_22796);
var inst_22802__$1 = cljs.core.first.call(null,inst_22801);
var inst_22803 = cljs.core.next.call(null,inst_22801);
var inst_22804 = (inst_22802__$1 == null);
var inst_22805 = cljs.core.not.call(null,inst_22804);
var state_22819__$1 = (function (){var statearr_22823 = state_22819;
(statearr_22823[(10)] = inst_22802__$1);

(statearr_22823[(11)] = inst_22803);

return statearr_22823;
})();
if(inst_22805){
var statearr_22824_22836 = state_22819__$1;
(statearr_22824_22836[(1)] = (4));

} else {
var statearr_22825_22837 = state_22819__$1;
(statearr_22825_22837[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22820 === (3))){
var inst_22817 = (state_22819[(2)]);
var state_22819__$1 = state_22819;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22819__$1,inst_22817);
} else {
if((state_val_22820 === (4))){
var inst_22802 = (state_22819[(10)]);
var inst_22807 = figwheel.client.file_reloading.reload_js_file.call(null,inst_22802);
var state_22819__$1 = state_22819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22819__$1,(7),inst_22807);
} else {
if((state_val_22820 === (5))){
var inst_22813 = cljs.core.async.close_BANG_.call(null,out);
var state_22819__$1 = state_22819;
var statearr_22826_22838 = state_22819__$1;
(statearr_22826_22838[(2)] = inst_22813);

(statearr_22826_22838[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22820 === (6))){
var inst_22815 = (state_22819[(2)]);
var state_22819__$1 = state_22819;
var statearr_22827_22839 = state_22819__$1;
(statearr_22827_22839[(2)] = inst_22815);

(statearr_22827_22839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22820 === (7))){
var inst_22803 = (state_22819[(11)]);
var inst_22809 = (state_22819[(2)]);
var inst_22810 = cljs.core.async.put_BANG_.call(null,out,inst_22809);
var inst_22796 = inst_22803;
var state_22819__$1 = (function (){var statearr_22828 = state_22819;
(statearr_22828[(9)] = inst_22796);

(statearr_22828[(12)] = inst_22810);

return statearr_22828;
})();
var statearr_22829_22840 = state_22819__$1;
(statearr_22829_22840[(2)] = null);

(statearr_22829_22840[(1)] = (2));


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
});})(c__15288__auto___22834,out))
;
return ((function (switch__15198__auto__,c__15288__auto___22834,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__15199__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__15199__auto____0 = (function (){
var statearr_22830 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22830[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__15199__auto__);

(statearr_22830[(1)] = (1));

return statearr_22830;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__15199__auto____1 = (function (state_22819){
while(true){
var ret_value__15200__auto__ = (function (){try{while(true){
var result__15201__auto__ = switch__15198__auto__.call(null,state_22819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15201__auto__;
}
break;
}
}catch (e22831){if((e22831 instanceof Object)){
var ex__15202__auto__ = e22831;
var statearr_22832_22841 = state_22819;
(statearr_22832_22841[(5)] = ex__15202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22842 = state_22819;
state_22819 = G__22842;
continue;
} else {
return ret_value__15200__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__15199__auto__ = function(state_22819){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__15199__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__15199__auto____1.call(this,state_22819);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__15199__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__15199__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__15199__auto__;
})()
;})(switch__15198__auto__,c__15288__auto___22834,out))
})();
var state__15290__auto__ = (function (){var statearr_22833 = f__15289__auto__.call(null);
(statearr_22833[(6)] = c__15288__auto___22834);

return statearr_22833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15290__auto__);
});})(c__15288__auto___22834,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__22843,opts){
var map__22844 = p__22843;
var map__22844__$1 = ((((!((map__22844 == null)))?((((map__22844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22844.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22844):map__22844);
var eval_body = cljs.core.get.call(null,map__22844__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__22844__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__9798__auto__ = eval_body;
if(cljs.core.truth_(and__9798__auto__)){
return typeof eval_body === 'string';
} else {
return and__9798__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e22846){var e = e22846;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__6736__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__22847_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22847_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__6736__auto__)){
var file_msg = temp__6736__auto__;
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
return cljs.core.map.call(null,(function (p__22848){
var vec__22849 = p__22848;
var k = cljs.core.nth.call(null,vec__22849,(0),null);
var v = cljs.core.nth.call(null,vec__22849,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__22852){
var vec__22853 = p__22852;
var k = cljs.core.nth.call(null,vec__22853,(0),null);
var v = cljs.core.nth.call(null,vec__22853,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__22859,p__22860){
var map__22861 = p__22859;
var map__22861__$1 = ((((!((map__22861 == null)))?((((map__22861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22861.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22861):map__22861);
var opts = map__22861__$1;
var before_jsload = cljs.core.get.call(null,map__22861__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__22861__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__22861__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__22862 = p__22860;
var map__22862__$1 = ((((!((map__22862 == null)))?((((map__22862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22862.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22862):map__22862);
var msg = map__22862__$1;
var files = cljs.core.get.call(null,map__22862__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__22862__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__22862__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__15288__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15288__auto__,map__22861,map__22861__$1,opts,before_jsload,on_jsload,reload_dependents,map__22862,map__22862__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__15289__auto__ = (function (){var switch__15198__auto__ = ((function (c__15288__auto__,map__22861,map__22861__$1,opts,before_jsload,on_jsload,reload_dependents,map__22862,map__22862__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_23016){
var state_val_23017 = (state_23016[(1)]);
if((state_val_23017 === (7))){
var inst_22877 = (state_23016[(7)]);
var inst_22878 = (state_23016[(8)]);
var inst_22876 = (state_23016[(9)]);
var inst_22879 = (state_23016[(10)]);
var inst_22884 = cljs.core._nth.call(null,inst_22877,inst_22879);
var inst_22885 = figwheel.client.file_reloading.eval_body.call(null,inst_22884,opts);
var inst_22886 = (inst_22879 + (1));
var tmp23018 = inst_22877;
var tmp23019 = inst_22878;
var tmp23020 = inst_22876;
var inst_22876__$1 = tmp23020;
var inst_22877__$1 = tmp23018;
var inst_22878__$1 = tmp23019;
var inst_22879__$1 = inst_22886;
var state_23016__$1 = (function (){var statearr_23021 = state_23016;
(statearr_23021[(11)] = inst_22885);

(statearr_23021[(7)] = inst_22877__$1);

(statearr_23021[(8)] = inst_22878__$1);

(statearr_23021[(9)] = inst_22876__$1);

(statearr_23021[(10)] = inst_22879__$1);

return statearr_23021;
})();
var statearr_23022_23105 = state_23016__$1;
(statearr_23022_23105[(2)] = null);

(statearr_23022_23105[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23017 === (20))){
var inst_22919 = (state_23016[(12)]);
var inst_22927 = figwheel.client.file_reloading.sort_files.call(null,inst_22919);
var state_23016__$1 = state_23016;
var statearr_23023_23106 = state_23016__$1;
(statearr_23023_23106[(2)] = inst_22927);

(statearr_23023_23106[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23017 === (27))){
var state_23016__$1 = state_23016;
var statearr_23024_23107 = state_23016__$1;
(statearr_23024_23107[(2)] = null);

(statearr_23024_23107[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23017 === (1))){
var inst_22868 = (state_23016[(13)]);
var inst_22865 = before_jsload.call(null,files);
var inst_22866 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_22867 = (function (){return ((function (inst_22868,inst_22865,inst_22866,state_val_23017,c__15288__auto__,map__22861,map__22861__$1,opts,before_jsload,on_jsload,reload_dependents,map__22862,map__22862__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22856_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22856_SHARP_);
});
;})(inst_22868,inst_22865,inst_22866,state_val_23017,c__15288__auto__,map__22861,map__22861__$1,opts,before_jsload,on_jsload,reload_dependents,map__22862,map__22862__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22868__$1 = cljs.core.filter.call(null,inst_22867,files);
var inst_22869 = cljs.core.not_empty.call(null,inst_22868__$1);
var state_23016__$1 = (function (){var statearr_23025 = state_23016;
(statearr_23025[(14)] = inst_22866);

(statearr_23025[(15)] = inst_22865);

(statearr_23025[(13)] = inst_22868__$1);

return statearr_23025;
})();
if(cljs.core.truth_(inst_22869)){
var statearr_23026_23108 = state_23016__$1;
(statearr_23026_23108[(1)] = (2));

} else {
var statearr_23027_23109 = state_23016__$1;
(statearr_23027_23109[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23017 === (24))){
var state_23016__$1 = state_23016;
var statearr_23028_23110 = state_23016__$1;
(statearr_23028_23110[(2)] = null);

(statearr_23028_23110[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23017 === (39))){
var inst_22969 = (state_23016[(16)]);
var state_23016__$1 = state_23016;
var statearr_23029_23111 = state_23016__$1;
(statearr_23029_23111[(2)] = inst_22969);

(statearr_23029_23111[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23017 === (46))){
var inst_23011 = (state_23016[(2)]);
var state_23016__$1 = state_23016;
var statearr_23030_23112 = state_23016__$1;
(statearr_23030_23112[(2)] = inst_23011);

(statearr_23030_23112[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23017 === (4))){
var inst_22913 = (state_23016[(2)]);
var inst_22914 = cljs.core.List.EMPTY;
var inst_22915 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_22914);
var inst_22916 = (function (){return ((function (inst_22913,inst_22914,inst_22915,state_val_23017,c__15288__auto__,map__22861,map__22861__$1,opts,before_jsload,on_jsload,reload_dependents,map__22862,map__22862__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22857_SHARP_){
var and__9798__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22857_SHARP_);
if(cljs.core.truth_(and__9798__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22857_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__22857_SHARP_)));
} else {
return and__9798__auto__;
}
});
;})(inst_22913,inst_22914,inst_22915,state_val_23017,c__15288__auto__,map__22861,map__22861__$1,opts,before_jsload,on_jsload,reload_dependents,map__22862,map__22862__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22917 = cljs.core.filter.call(null,inst_22916,files);
var inst_22918 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_22919 = cljs.core.concat.call(null,inst_22917,inst_22918);
var state_23016__$1 = (function (){var statearr_23031 = state_23016;
(statearr_23031[(12)] = inst_22919);

(statearr_23031[(17)] = inst_22915);

(statearr_23031[(18)] = inst_22913);

return statearr_23031;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_23032_23113 = state_23016__$1;
(statearr_23032_23113[(1)] = (16));

} else {
var statearr_23033_23114 = state_23016__$1;
(statearr_23033_23114[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23017 === (15))){
var inst_22903 = (state_23016[(2)]);
var state_23016__$1 = state_23016;
var statearr_23034_23115 = state_23016__$1;
(statearr_23034_23115[(2)] = inst_22903);

(statearr_23034_23115[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23017 === (21))){
var inst_22929 = (state_23016[(19)]);
var inst_22929__$1 = (state_23016[(2)]);
var inst_22930 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_22929__$1);
var state_23016__$1 = (function (){var statearr_23035 = state_23016;
(statearr_23035[(19)] = inst_22929__$1);

return statearr_23035;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23016__$1,(22),inst_22930);
} else {
if((state_val_23017 === (31))){
var inst_23014 = (state_23016[(2)]);
var state_23016__$1 = state_23016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23016__$1,inst_23014);
} else {
if((state_val_23017 === (32))){
var inst_22969 = (state_23016[(16)]);
var inst_22974 = inst_22969.cljs$lang$protocol_mask$partition0$;
var inst_22975 = (inst_22974 & (64));
var inst_22976 = inst_22969.cljs$core$ISeq$;
var inst_22977 = (cljs.core.PROTOCOL_SENTINEL === inst_22976);
var inst_22978 = (inst_22975) || (inst_22977);
var state_23016__$1 = state_23016;
if(cljs.core.truth_(inst_22978)){
var statearr_23036_23116 = state_23016__$1;
(statearr_23036_23116[(1)] = (35));

} else {
var statearr_23037_23117 = state_23016__$1;
(statearr_23037_23117[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23017 === (40))){
var inst_22991 = (state_23016[(20)]);
var inst_22990 = (state_23016[(2)]);
var inst_22991__$1 = cljs.core.get.call(null,inst_22990,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_22992 = cljs.core.get.call(null,inst_22990,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_22993 = cljs.core.not_empty.call(null,inst_22991__$1);
var state_23016__$1 = (function (){var statearr_23038 = state_23016;
(statearr_23038[(21)] = inst_22992);

(statearr_23038[(20)] = inst_22991__$1);

return statearr_23038;
})();
if(cljs.core.truth_(inst_22993)){
var statearr_23039_23118 = state_23016__$1;
(statearr_23039_23118[(1)] = (41));

} else {
var statearr_23040_23119 = state_23016__$1;
(statearr_23040_23119[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23017 === (33))){
var state_23016__$1 = state_23016;
var statearr_23041_23120 = state_23016__$1;
(statearr_23041_23120[(2)] = false);

(statearr_23041_23120[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23017 === (13))){
var inst_22889 = (state_23016[(22)]);
var inst_22893 = cljs.core.chunk_first.call(null,inst_22889);
var inst_22894 = cljs.core.chunk_rest.call(null,inst_22889);
var inst_22895 = cljs.core.count.call(null,inst_22893);
var inst_22876 = inst_22894;
var inst_22877 = inst_22893;
var inst_22878 = inst_22895;
var inst_22879 = (0);
var state_23016__$1 = (function (){var statearr_23042 = state_23016;
(statearr_23042[(7)] = inst_22877);

(statearr_23042[(8)] = inst_22878);

(statearr_23042[(9)] = inst_22876);

(statearr_23042[(10)] = inst_22879);

return statearr_23042;
})();
var statearr_23043_23121 = state_23016__$1;
(statearr_23043_23121[(2)] = null);

(statearr_23043_23121[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23017 === (22))){
var inst_22929 = (state_23016[(19)]);
var inst_22937 = (state_23016[(23)]);
var inst_22932 = (state_23016[(24)]);
var inst_22933 = (state_23016[(25)]);
var inst_22932__$1 = (state_23016[(2)]);
var inst_22933__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_22932__$1);
var inst_22934 = (function (){var all_files = inst_22929;
var res_SINGLEQUOTE_ = inst_22932__$1;
var res = inst_22933__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_22929,inst_22937,inst_22932,inst_22933,inst_22932__$1,inst_22933__$1,state_val_23017,c__15288__auto__,map__22861,map__22861__$1,opts,before_jsload,on_jsload,reload_dependents,map__22862,map__22862__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22858_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__22858_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_22929,inst_22937,inst_22932,inst_22933,inst_22932__$1,inst_22933__$1,state_val_23017,c__15288__auto__,map__22861,map__22861__$1,opts,before_jsload,on_jsload,reload_dependents,map__22862,map__22862__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22935 = cljs.core.filter.call(null,inst_22934,inst_22932__$1);
var inst_22936 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_22937__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_22936);
var inst_22938 = cljs.core.not_empty.call(null,inst_22937__$1);
var state_23016__$1 = (function (){var statearr_23044 = state_23016;
(statearr_23044[(23)] = inst_22937__$1);

(statearr_23044[(24)] = inst_22932__$1);

(statearr_23044[(26)] = inst_22935);

(statearr_23044[(25)] = inst_22933__$1);

return statearr_23044;
})();
if(cljs.core.truth_(inst_22938)){
var statearr_23045_23122 = state_23016__$1;
(statearr_23045_23122[(1)] = (23));

} else {
var statearr_23046_23123 = state_23016__$1;
(statearr_23046_23123[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23017 === (36))){
var state_23016__$1 = state_23016;
var statearr_23047_23124 = state_23016__$1;
(statearr_23047_23124[(2)] = false);

(statearr_23047_23124[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23017 === (41))){
var inst_22991 = (state_23016[(20)]);
var inst_22995 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_22996 = cljs.core.map.call(null,inst_22995,inst_22991);
var inst_22997 = cljs.core.pr_str.call(null,inst_22996);
var inst_22998 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_22997)].join('');
var inst_22999 = figwheel.client.utils.log.call(null,inst_22998);
var state_23016__$1 = state_23016;
var statearr_23048_23125 = state_23016__$1;
(statearr_23048_23125[(2)] = inst_22999);

(statearr_23048_23125[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23017 === (43))){
var inst_22992 = (state_23016[(21)]);
var inst_23002 = (state_23016[(2)]);
var inst_23003 = cljs.core.not_empty.call(null,inst_22992);
var state_23016__$1 = (function (){var statearr_23049 = state_23016;
(statearr_23049[(27)] = inst_23002);

return statearr_23049;
})();
if(cljs.core.truth_(inst_23003)){
var statearr_23050_23126 = state_23016__$1;
(statearr_23050_23126[(1)] = (44));

} else {
var statearr_23051_23127 = state_23016__$1;
(statearr_23051_23127[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23017 === (29))){
var inst_22929 = (state_23016[(19)]);
var inst_22937 = (state_23016[(23)]);
var inst_22932 = (state_23016[(24)]);
var inst_22935 = (state_23016[(26)]);
var inst_22933 = (state_23016[(25)]);
var inst_22969 = (state_23016[(16)]);
var inst_22965 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_22968 = (function (){var all_files = inst_22929;
var res_SINGLEQUOTE_ = inst_22932;
var res = inst_22933;
var files_not_loaded = inst_22935;
var dependencies_that_loaded = inst_22937;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22929,inst_22937,inst_22932,inst_22935,inst_22933,inst_22969,inst_22965,state_val_23017,c__15288__auto__,map__22861,map__22861__$1,opts,before_jsload,on_jsload,reload_dependents,map__22862,map__22862__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22967){
var map__23052 = p__22967;
var map__23052__$1 = ((((!((map__23052 == null)))?((((map__23052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23052.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23052):map__23052);
var namespace = cljs.core.get.call(null,map__23052__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22929,inst_22937,inst_22932,inst_22935,inst_22933,inst_22969,inst_22965,state_val_23017,c__15288__auto__,map__22861,map__22861__$1,opts,before_jsload,on_jsload,reload_dependents,map__22862,map__22862__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22969__$1 = cljs.core.group_by.call(null,inst_22968,inst_22935);
var inst_22971 = (inst_22969__$1 == null);
var inst_22972 = cljs.core.not.call(null,inst_22971);
var state_23016__$1 = (function (){var statearr_23054 = state_23016;
(statearr_23054[(28)] = inst_22965);

(statearr_23054[(16)] = inst_22969__$1);

return statearr_23054;
})();
if(inst_22972){
var statearr_23055_23128 = state_23016__$1;
(statearr_23055_23128[(1)] = (32));

} else {
var statearr_23056_23129 = state_23016__$1;
(statearr_23056_23129[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23017 === (44))){
var inst_22992 = (state_23016[(21)]);
var inst_23005 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_22992);
var inst_23006 = cljs.core.pr_str.call(null,inst_23005);
var inst_23007 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23006)].join('');
var inst_23008 = figwheel.client.utils.log.call(null,inst_23007);
var state_23016__$1 = state_23016;
var statearr_23057_23130 = state_23016__$1;
(statearr_23057_23130[(2)] = inst_23008);

(statearr_23057_23130[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23017 === (6))){
var inst_22910 = (state_23016[(2)]);
var state_23016__$1 = state_23016;
var statearr_23058_23131 = state_23016__$1;
(statearr_23058_23131[(2)] = inst_22910);

(statearr_23058_23131[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23017 === (28))){
var inst_22935 = (state_23016[(26)]);
var inst_22962 = (state_23016[(2)]);
var inst_22963 = cljs.core.not_empty.call(null,inst_22935);
var state_23016__$1 = (function (){var statearr_23059 = state_23016;
(statearr_23059[(29)] = inst_22962);

return statearr_23059;
})();
if(cljs.core.truth_(inst_22963)){
var statearr_23060_23132 = state_23016__$1;
(statearr_23060_23132[(1)] = (29));

} else {
var statearr_23061_23133 = state_23016__$1;
(statearr_23061_23133[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23017 === (25))){
var inst_22933 = (state_23016[(25)]);
var inst_22949 = (state_23016[(2)]);
var inst_22950 = cljs.core.not_empty.call(null,inst_22933);
var state_23016__$1 = (function (){var statearr_23062 = state_23016;
(statearr_23062[(30)] = inst_22949);

return statearr_23062;
})();
if(cljs.core.truth_(inst_22950)){
var statearr_23063_23134 = state_23016__$1;
(statearr_23063_23134[(1)] = (26));

} else {
var statearr_23064_23135 = state_23016__$1;
(statearr_23064_23135[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23017 === (34))){
var inst_22985 = (state_23016[(2)]);
var state_23016__$1 = state_23016;
if(cljs.core.truth_(inst_22985)){
var statearr_23065_23136 = state_23016__$1;
(statearr_23065_23136[(1)] = (38));

} else {
var statearr_23066_23137 = state_23016__$1;
(statearr_23066_23137[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23017 === (17))){
var state_23016__$1 = state_23016;
var statearr_23067_23138 = state_23016__$1;
(statearr_23067_23138[(2)] = recompile_dependents);

(statearr_23067_23138[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23017 === (3))){
var state_23016__$1 = state_23016;
var statearr_23068_23139 = state_23016__$1;
(statearr_23068_23139[(2)] = null);

(statearr_23068_23139[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23017 === (12))){
var inst_22906 = (state_23016[(2)]);
var state_23016__$1 = state_23016;
var statearr_23069_23140 = state_23016__$1;
(statearr_23069_23140[(2)] = inst_22906);

(statearr_23069_23140[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23017 === (2))){
var inst_22868 = (state_23016[(13)]);
var inst_22875 = cljs.core.seq.call(null,inst_22868);
var inst_22876 = inst_22875;
var inst_22877 = null;
var inst_22878 = (0);
var inst_22879 = (0);
var state_23016__$1 = (function (){var statearr_23070 = state_23016;
(statearr_23070[(7)] = inst_22877);

(statearr_23070[(8)] = inst_22878);

(statearr_23070[(9)] = inst_22876);

(statearr_23070[(10)] = inst_22879);

return statearr_23070;
})();
var statearr_23071_23141 = state_23016__$1;
(statearr_23071_23141[(2)] = null);

(statearr_23071_23141[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23017 === (23))){
var inst_22929 = (state_23016[(19)]);
var inst_22937 = (state_23016[(23)]);
var inst_22932 = (state_23016[(24)]);
var inst_22935 = (state_23016[(26)]);
var inst_22933 = (state_23016[(25)]);
var inst_22940 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_22942 = (function (){var all_files = inst_22929;
var res_SINGLEQUOTE_ = inst_22932;
var res = inst_22933;
var files_not_loaded = inst_22935;
var dependencies_that_loaded = inst_22937;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22929,inst_22937,inst_22932,inst_22935,inst_22933,inst_22940,state_val_23017,c__15288__auto__,map__22861,map__22861__$1,opts,before_jsload,on_jsload,reload_dependents,map__22862,map__22862__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22941){
var map__23072 = p__22941;
var map__23072__$1 = ((((!((map__23072 == null)))?((((map__23072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23072.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23072):map__23072);
var request_url = cljs.core.get.call(null,map__23072__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22929,inst_22937,inst_22932,inst_22935,inst_22933,inst_22940,state_val_23017,c__15288__auto__,map__22861,map__22861__$1,opts,before_jsload,on_jsload,reload_dependents,map__22862,map__22862__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22943 = cljs.core.reverse.call(null,inst_22937);
var inst_22944 = cljs.core.map.call(null,inst_22942,inst_22943);
var inst_22945 = cljs.core.pr_str.call(null,inst_22944);
var inst_22946 = figwheel.client.utils.log.call(null,inst_22945);
var state_23016__$1 = (function (){var statearr_23074 = state_23016;
(statearr_23074[(31)] = inst_22940);

return statearr_23074;
})();
var statearr_23075_23142 = state_23016__$1;
(statearr_23075_23142[(2)] = inst_22946);

(statearr_23075_23142[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23017 === (35))){
var state_23016__$1 = state_23016;
var statearr_23076_23143 = state_23016__$1;
(statearr_23076_23143[(2)] = true);

(statearr_23076_23143[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23017 === (19))){
var inst_22919 = (state_23016[(12)]);
var inst_22925 = figwheel.client.file_reloading.expand_files.call(null,inst_22919);
var state_23016__$1 = state_23016;
var statearr_23077_23144 = state_23016__$1;
(statearr_23077_23144[(2)] = inst_22925);

(statearr_23077_23144[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23017 === (11))){
var state_23016__$1 = state_23016;
var statearr_23078_23145 = state_23016__$1;
(statearr_23078_23145[(2)] = null);

(statearr_23078_23145[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23017 === (9))){
var inst_22908 = (state_23016[(2)]);
var state_23016__$1 = state_23016;
var statearr_23079_23146 = state_23016__$1;
(statearr_23079_23146[(2)] = inst_22908);

(statearr_23079_23146[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23017 === (5))){
var inst_22878 = (state_23016[(8)]);
var inst_22879 = (state_23016[(10)]);
var inst_22881 = (inst_22879 < inst_22878);
var inst_22882 = inst_22881;
var state_23016__$1 = state_23016;
if(cljs.core.truth_(inst_22882)){
var statearr_23080_23147 = state_23016__$1;
(statearr_23080_23147[(1)] = (7));

} else {
var statearr_23081_23148 = state_23016__$1;
(statearr_23081_23148[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23017 === (14))){
var inst_22889 = (state_23016[(22)]);
var inst_22898 = cljs.core.first.call(null,inst_22889);
var inst_22899 = figwheel.client.file_reloading.eval_body.call(null,inst_22898,opts);
var inst_22900 = cljs.core.next.call(null,inst_22889);
var inst_22876 = inst_22900;
var inst_22877 = null;
var inst_22878 = (0);
var inst_22879 = (0);
var state_23016__$1 = (function (){var statearr_23082 = state_23016;
(statearr_23082[(32)] = inst_22899);

(statearr_23082[(7)] = inst_22877);

(statearr_23082[(8)] = inst_22878);

(statearr_23082[(9)] = inst_22876);

(statearr_23082[(10)] = inst_22879);

return statearr_23082;
})();
var statearr_23083_23149 = state_23016__$1;
(statearr_23083_23149[(2)] = null);

(statearr_23083_23149[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23017 === (45))){
var state_23016__$1 = state_23016;
var statearr_23084_23150 = state_23016__$1;
(statearr_23084_23150[(2)] = null);

(statearr_23084_23150[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23017 === (26))){
var inst_22929 = (state_23016[(19)]);
var inst_22937 = (state_23016[(23)]);
var inst_22932 = (state_23016[(24)]);
var inst_22935 = (state_23016[(26)]);
var inst_22933 = (state_23016[(25)]);
var inst_22952 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_22954 = (function (){var all_files = inst_22929;
var res_SINGLEQUOTE_ = inst_22932;
var res = inst_22933;
var files_not_loaded = inst_22935;
var dependencies_that_loaded = inst_22937;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22929,inst_22937,inst_22932,inst_22935,inst_22933,inst_22952,state_val_23017,c__15288__auto__,map__22861,map__22861__$1,opts,before_jsload,on_jsload,reload_dependents,map__22862,map__22862__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22953){
var map__23085 = p__22953;
var map__23085__$1 = ((((!((map__23085 == null)))?((((map__23085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23085.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23085):map__23085);
var namespace = cljs.core.get.call(null,map__23085__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__23085__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22929,inst_22937,inst_22932,inst_22935,inst_22933,inst_22952,state_val_23017,c__15288__auto__,map__22861,map__22861__$1,opts,before_jsload,on_jsload,reload_dependents,map__22862,map__22862__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22955 = cljs.core.map.call(null,inst_22954,inst_22933);
var inst_22956 = cljs.core.pr_str.call(null,inst_22955);
var inst_22957 = figwheel.client.utils.log.call(null,inst_22956);
var inst_22958 = (function (){var all_files = inst_22929;
var res_SINGLEQUOTE_ = inst_22932;
var res = inst_22933;
var files_not_loaded = inst_22935;
var dependencies_that_loaded = inst_22937;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22929,inst_22937,inst_22932,inst_22935,inst_22933,inst_22952,inst_22954,inst_22955,inst_22956,inst_22957,state_val_23017,c__15288__auto__,map__22861,map__22861__$1,opts,before_jsload,on_jsload,reload_dependents,map__22862,map__22862__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22929,inst_22937,inst_22932,inst_22935,inst_22933,inst_22952,inst_22954,inst_22955,inst_22956,inst_22957,state_val_23017,c__15288__auto__,map__22861,map__22861__$1,opts,before_jsload,on_jsload,reload_dependents,map__22862,map__22862__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22959 = setTimeout(inst_22958,(10));
var state_23016__$1 = (function (){var statearr_23087 = state_23016;
(statearr_23087[(33)] = inst_22952);

(statearr_23087[(34)] = inst_22957);

return statearr_23087;
})();
var statearr_23088_23151 = state_23016__$1;
(statearr_23088_23151[(2)] = inst_22959);

(statearr_23088_23151[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23017 === (16))){
var state_23016__$1 = state_23016;
var statearr_23089_23152 = state_23016__$1;
(statearr_23089_23152[(2)] = reload_dependents);

(statearr_23089_23152[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23017 === (38))){
var inst_22969 = (state_23016[(16)]);
var inst_22987 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22969);
var state_23016__$1 = state_23016;
var statearr_23090_23153 = state_23016__$1;
(statearr_23090_23153[(2)] = inst_22987);

(statearr_23090_23153[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23017 === (30))){
var state_23016__$1 = state_23016;
var statearr_23091_23154 = state_23016__$1;
(statearr_23091_23154[(2)] = null);

(statearr_23091_23154[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23017 === (10))){
var inst_22889 = (state_23016[(22)]);
var inst_22891 = cljs.core.chunked_seq_QMARK_.call(null,inst_22889);
var state_23016__$1 = state_23016;
if(inst_22891){
var statearr_23092_23155 = state_23016__$1;
(statearr_23092_23155[(1)] = (13));

} else {
var statearr_23093_23156 = state_23016__$1;
(statearr_23093_23156[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23017 === (18))){
var inst_22923 = (state_23016[(2)]);
var state_23016__$1 = state_23016;
if(cljs.core.truth_(inst_22923)){
var statearr_23094_23157 = state_23016__$1;
(statearr_23094_23157[(1)] = (19));

} else {
var statearr_23095_23158 = state_23016__$1;
(statearr_23095_23158[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23017 === (42))){
var state_23016__$1 = state_23016;
var statearr_23096_23159 = state_23016__$1;
(statearr_23096_23159[(2)] = null);

(statearr_23096_23159[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23017 === (37))){
var inst_22982 = (state_23016[(2)]);
var state_23016__$1 = state_23016;
var statearr_23097_23160 = state_23016__$1;
(statearr_23097_23160[(2)] = inst_22982);

(statearr_23097_23160[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23017 === (8))){
var inst_22889 = (state_23016[(22)]);
var inst_22876 = (state_23016[(9)]);
var inst_22889__$1 = cljs.core.seq.call(null,inst_22876);
var state_23016__$1 = (function (){var statearr_23098 = state_23016;
(statearr_23098[(22)] = inst_22889__$1);

return statearr_23098;
})();
if(inst_22889__$1){
var statearr_23099_23161 = state_23016__$1;
(statearr_23099_23161[(1)] = (10));

} else {
var statearr_23100_23162 = state_23016__$1;
(statearr_23100_23162[(1)] = (11));

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
});})(c__15288__auto__,map__22861,map__22861__$1,opts,before_jsload,on_jsload,reload_dependents,map__22862,map__22862__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__15198__auto__,c__15288__auto__,map__22861,map__22861__$1,opts,before_jsload,on_jsload,reload_dependents,map__22862,map__22862__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__15199__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__15199__auto____0 = (function (){
var statearr_23101 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23101[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__15199__auto__);

(statearr_23101[(1)] = (1));

return statearr_23101;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__15199__auto____1 = (function (state_23016){
while(true){
var ret_value__15200__auto__ = (function (){try{while(true){
var result__15201__auto__ = switch__15198__auto__.call(null,state_23016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15201__auto__;
}
break;
}
}catch (e23102){if((e23102 instanceof Object)){
var ex__15202__auto__ = e23102;
var statearr_23103_23163 = state_23016;
(statearr_23103_23163[(5)] = ex__15202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23164 = state_23016;
state_23016 = G__23164;
continue;
} else {
return ret_value__15200__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__15199__auto__ = function(state_23016){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__15199__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__15199__auto____1.call(this,state_23016);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__15199__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__15199__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__15199__auto__;
})()
;})(switch__15198__auto__,c__15288__auto__,map__22861,map__22861__$1,opts,before_jsload,on_jsload,reload_dependents,map__22862,map__22862__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__15290__auto__ = (function (){var statearr_23104 = f__15289__auto__.call(null);
(statearr_23104[(6)] = c__15288__auto__);

return statearr_23104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15290__auto__);
});})(c__15288__auto__,map__22861,map__22861__$1,opts,before_jsload,on_jsload,reload_dependents,map__22862,map__22862__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__15288__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__23167,link){
var map__23168 = p__23167;
var map__23168__$1 = ((((!((map__23168 == null)))?((((map__23168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23168.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23168):map__23168);
var file = cljs.core.get.call(null,map__23168__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6738__auto__ = link.href;
if(cljs.core.truth_(temp__6738__auto__)){
var link_href = temp__6738__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6738__auto__,map__23168,map__23168__$1,file){
return (function (p1__23165_SHARP_,p2__23166_SHARP_){
if(cljs.core._EQ_.call(null,p1__23165_SHARP_,p2__23166_SHARP_)){
return p1__23165_SHARP_;
} else {
return false;
}
});})(link_href,temp__6738__auto__,map__23168,map__23168__$1,file))
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
var temp__6738__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__23171){
var map__23172 = p__23171;
var map__23172__$1 = ((((!((map__23172 == null)))?((((map__23172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23172.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23172):map__23172);
var match_length = cljs.core.get.call(null,map__23172__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__23172__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__23170_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__23170_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__6738__auto__)){
var res = temp__6738__auto__;
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__23174_SHARP_,p2__23175_SHARP_){
return cljs.core.assoc.call(null,p1__23174_SHARP_,cljs.core.get.call(null,p2__23175_SHARP_,key),p2__23175_SHARP_);
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
var temp__6736__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__6736__auto__)){
var link = temp__6736__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__6736__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__6736__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_23176 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_23176);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_23176);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__23177,p__23178){
var map__23179 = p__23177;
var map__23179__$1 = ((((!((map__23179 == null)))?((((map__23179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23179.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23179):map__23179);
var on_cssload = cljs.core.get.call(null,map__23179__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__23180 = p__23178;
var map__23180__$1 = ((((!((map__23180 == null)))?((((map__23180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23180.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23180):map__23180);
var files_msg = map__23180__$1;
var files = cljs.core.get.call(null,map__23180__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__6738__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__6738__auto__)){
var f_datas = temp__6738__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1506896685359
