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
var or__9950__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__9950__auto__){
return or__9950__auto__;
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
var or__9950__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__9950__auto__)){
return or__9950__auto__;
} else {
var or__9950__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__9950__auto____$1)){
return or__9950__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__22741_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__22741_SHARP_));
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
var seq__22742 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__22743 = null;
var count__22744 = (0);
var i__22745 = (0);
while(true){
if((i__22745 < count__22744)){
var n = cljs.core._nth.call(null,chunk__22743,i__22745);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22746 = seq__22742;
var G__22747 = chunk__22743;
var G__22748 = count__22744;
var G__22749 = (i__22745 + (1));
seq__22742 = G__22746;
chunk__22743 = G__22747;
count__22744 = G__22748;
i__22745 = G__22749;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__22742);
if(temp__6738__auto__){
var seq__22742__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22742__$1)){
var c__10881__auto__ = cljs.core.chunk_first.call(null,seq__22742__$1);
var G__22750 = cljs.core.chunk_rest.call(null,seq__22742__$1);
var G__22751 = c__10881__auto__;
var G__22752 = cljs.core.count.call(null,c__10881__auto__);
var G__22753 = (0);
seq__22742 = G__22750;
chunk__22743 = G__22751;
count__22744 = G__22752;
i__22745 = G__22753;
continue;
} else {
var n = cljs.core.first.call(null,seq__22742__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22754 = cljs.core.next.call(null,seq__22742__$1);
var G__22755 = null;
var G__22756 = (0);
var G__22757 = (0);
seq__22742 = G__22754;
chunk__22743 = G__22755;
count__22744 = G__22756;
i__22745 = G__22757;
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

var seq__22767_22775 = cljs.core.seq.call(null,deps);
var chunk__22768_22776 = null;
var count__22769_22777 = (0);
var i__22770_22778 = (0);
while(true){
if((i__22770_22778 < count__22769_22777)){
var dep_22779 = cljs.core._nth.call(null,chunk__22768_22776,i__22770_22778);
topo_sort_helper_STAR_.call(null,dep_22779,(depth + (1)),state);

var G__22780 = seq__22767_22775;
var G__22781 = chunk__22768_22776;
var G__22782 = count__22769_22777;
var G__22783 = (i__22770_22778 + (1));
seq__22767_22775 = G__22780;
chunk__22768_22776 = G__22781;
count__22769_22777 = G__22782;
i__22770_22778 = G__22783;
continue;
} else {
var temp__6738__auto___22784 = cljs.core.seq.call(null,seq__22767_22775);
if(temp__6738__auto___22784){
var seq__22767_22785__$1 = temp__6738__auto___22784;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22767_22785__$1)){
var c__10881__auto___22786 = cljs.core.chunk_first.call(null,seq__22767_22785__$1);
var G__22787 = cljs.core.chunk_rest.call(null,seq__22767_22785__$1);
var G__22788 = c__10881__auto___22786;
var G__22789 = cljs.core.count.call(null,c__10881__auto___22786);
var G__22790 = (0);
seq__22767_22775 = G__22787;
chunk__22768_22776 = G__22788;
count__22769_22777 = G__22789;
i__22770_22778 = G__22790;
continue;
} else {
var dep_22791 = cljs.core.first.call(null,seq__22767_22785__$1);
topo_sort_helper_STAR_.call(null,dep_22791,(depth + (1)),state);

var G__22792 = cljs.core.next.call(null,seq__22767_22785__$1);
var G__22793 = null;
var G__22794 = (0);
var G__22795 = (0);
seq__22767_22775 = G__22792;
chunk__22768_22776 = G__22793;
count__22769_22777 = G__22794;
i__22770_22778 = G__22795;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__22771){
var vec__22772 = p__22771;
var seq__22773 = cljs.core.seq.call(null,vec__22772);
var first__22774 = cljs.core.first.call(null,seq__22773);
var seq__22773__$1 = cljs.core.next.call(null,seq__22773);
var x = first__22774;
var xs = seq__22773__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__22772,seq__22773,first__22774,seq__22773__$1,x,xs,get_deps__$1){
return (function (p1__22758_SHARP_){
return clojure.set.difference.call(null,p1__22758_SHARP_,x);
});})(vec__22772,seq__22773,first__22774,seq__22773__$1,x,xs,get_deps__$1))
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
var seq__22796 = cljs.core.seq.call(null,provides);
var chunk__22797 = null;
var count__22798 = (0);
var i__22799 = (0);
while(true){
if((i__22799 < count__22798)){
var prov = cljs.core._nth.call(null,chunk__22797,i__22799);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22800_22808 = cljs.core.seq.call(null,requires);
var chunk__22801_22809 = null;
var count__22802_22810 = (0);
var i__22803_22811 = (0);
while(true){
if((i__22803_22811 < count__22802_22810)){
var req_22812 = cljs.core._nth.call(null,chunk__22801_22809,i__22803_22811);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22812,prov);

var G__22813 = seq__22800_22808;
var G__22814 = chunk__22801_22809;
var G__22815 = count__22802_22810;
var G__22816 = (i__22803_22811 + (1));
seq__22800_22808 = G__22813;
chunk__22801_22809 = G__22814;
count__22802_22810 = G__22815;
i__22803_22811 = G__22816;
continue;
} else {
var temp__6738__auto___22817 = cljs.core.seq.call(null,seq__22800_22808);
if(temp__6738__auto___22817){
var seq__22800_22818__$1 = temp__6738__auto___22817;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22800_22818__$1)){
var c__10881__auto___22819 = cljs.core.chunk_first.call(null,seq__22800_22818__$1);
var G__22820 = cljs.core.chunk_rest.call(null,seq__22800_22818__$1);
var G__22821 = c__10881__auto___22819;
var G__22822 = cljs.core.count.call(null,c__10881__auto___22819);
var G__22823 = (0);
seq__22800_22808 = G__22820;
chunk__22801_22809 = G__22821;
count__22802_22810 = G__22822;
i__22803_22811 = G__22823;
continue;
} else {
var req_22824 = cljs.core.first.call(null,seq__22800_22818__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22824,prov);

var G__22825 = cljs.core.next.call(null,seq__22800_22818__$1);
var G__22826 = null;
var G__22827 = (0);
var G__22828 = (0);
seq__22800_22808 = G__22825;
chunk__22801_22809 = G__22826;
count__22802_22810 = G__22827;
i__22803_22811 = G__22828;
continue;
}
} else {
}
}
break;
}

var G__22829 = seq__22796;
var G__22830 = chunk__22797;
var G__22831 = count__22798;
var G__22832 = (i__22799 + (1));
seq__22796 = G__22829;
chunk__22797 = G__22830;
count__22798 = G__22831;
i__22799 = G__22832;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__22796);
if(temp__6738__auto__){
var seq__22796__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22796__$1)){
var c__10881__auto__ = cljs.core.chunk_first.call(null,seq__22796__$1);
var G__22833 = cljs.core.chunk_rest.call(null,seq__22796__$1);
var G__22834 = c__10881__auto__;
var G__22835 = cljs.core.count.call(null,c__10881__auto__);
var G__22836 = (0);
seq__22796 = G__22833;
chunk__22797 = G__22834;
count__22798 = G__22835;
i__22799 = G__22836;
continue;
} else {
var prov = cljs.core.first.call(null,seq__22796__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22804_22837 = cljs.core.seq.call(null,requires);
var chunk__22805_22838 = null;
var count__22806_22839 = (0);
var i__22807_22840 = (0);
while(true){
if((i__22807_22840 < count__22806_22839)){
var req_22841 = cljs.core._nth.call(null,chunk__22805_22838,i__22807_22840);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22841,prov);

var G__22842 = seq__22804_22837;
var G__22843 = chunk__22805_22838;
var G__22844 = count__22806_22839;
var G__22845 = (i__22807_22840 + (1));
seq__22804_22837 = G__22842;
chunk__22805_22838 = G__22843;
count__22806_22839 = G__22844;
i__22807_22840 = G__22845;
continue;
} else {
var temp__6738__auto___22846__$1 = cljs.core.seq.call(null,seq__22804_22837);
if(temp__6738__auto___22846__$1){
var seq__22804_22847__$1 = temp__6738__auto___22846__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22804_22847__$1)){
var c__10881__auto___22848 = cljs.core.chunk_first.call(null,seq__22804_22847__$1);
var G__22849 = cljs.core.chunk_rest.call(null,seq__22804_22847__$1);
var G__22850 = c__10881__auto___22848;
var G__22851 = cljs.core.count.call(null,c__10881__auto___22848);
var G__22852 = (0);
seq__22804_22837 = G__22849;
chunk__22805_22838 = G__22850;
count__22806_22839 = G__22851;
i__22807_22840 = G__22852;
continue;
} else {
var req_22853 = cljs.core.first.call(null,seq__22804_22847__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22853,prov);

var G__22854 = cljs.core.next.call(null,seq__22804_22847__$1);
var G__22855 = null;
var G__22856 = (0);
var G__22857 = (0);
seq__22804_22837 = G__22854;
chunk__22805_22838 = G__22855;
count__22806_22839 = G__22856;
i__22807_22840 = G__22857;
continue;
}
} else {
}
}
break;
}

var G__22858 = cljs.core.next.call(null,seq__22796__$1);
var G__22859 = null;
var G__22860 = (0);
var G__22861 = (0);
seq__22796 = G__22858;
chunk__22797 = G__22859;
count__22798 = G__22860;
i__22799 = G__22861;
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
var seq__22862_22866 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__22863_22867 = null;
var count__22864_22868 = (0);
var i__22865_22869 = (0);
while(true){
if((i__22865_22869 < count__22864_22868)){
var ns_22870 = cljs.core._nth.call(null,chunk__22863_22867,i__22865_22869);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22870);

var G__22871 = seq__22862_22866;
var G__22872 = chunk__22863_22867;
var G__22873 = count__22864_22868;
var G__22874 = (i__22865_22869 + (1));
seq__22862_22866 = G__22871;
chunk__22863_22867 = G__22872;
count__22864_22868 = G__22873;
i__22865_22869 = G__22874;
continue;
} else {
var temp__6738__auto___22875 = cljs.core.seq.call(null,seq__22862_22866);
if(temp__6738__auto___22875){
var seq__22862_22876__$1 = temp__6738__auto___22875;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22862_22876__$1)){
var c__10881__auto___22877 = cljs.core.chunk_first.call(null,seq__22862_22876__$1);
var G__22878 = cljs.core.chunk_rest.call(null,seq__22862_22876__$1);
var G__22879 = c__10881__auto___22877;
var G__22880 = cljs.core.count.call(null,c__10881__auto___22877);
var G__22881 = (0);
seq__22862_22866 = G__22878;
chunk__22863_22867 = G__22879;
count__22864_22868 = G__22880;
i__22865_22869 = G__22881;
continue;
} else {
var ns_22882 = cljs.core.first.call(null,seq__22862_22876__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22882);

var G__22883 = cljs.core.next.call(null,seq__22862_22876__$1);
var G__22884 = null;
var G__22885 = (0);
var G__22886 = (0);
seq__22862_22866 = G__22883;
chunk__22863_22867 = G__22884;
count__22864_22868 = G__22885;
i__22865_22869 = G__22886;
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
goog.require_figwheel_backup_ = (function (){var or__9950__auto__ = goog.require__;
if(cljs.core.truth_(or__9950__auto__)){
return or__9950__auto__;
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
var G__22887__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__22887 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22888__i = 0, G__22888__a = new Array(arguments.length -  0);
while (G__22888__i < G__22888__a.length) {G__22888__a[G__22888__i] = arguments[G__22888__i + 0]; ++G__22888__i;}
  args = new cljs.core.IndexedSeq(G__22888__a,0,null);
} 
return G__22887__delegate.call(this,args);};
G__22887.cljs$lang$maxFixedArity = 0;
G__22887.cljs$lang$applyTo = (function (arglist__22889){
var args = cljs.core.seq(arglist__22889);
return G__22887__delegate(args);
});
G__22887.cljs$core$IFn$_invoke$arity$variadic = G__22887__delegate;
return G__22887;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__22890_SHARP_,p2__22891_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22890_SHARP_)].join('')),p2__22891_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__22892_SHARP_,p2__22893_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22892_SHARP_)].join(''),p2__22893_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__22894 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__22894.addCallback(((function (G__22894){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__22894))
);

G__22894.addErrback(((function (G__22894){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__22894))
);

return G__22894;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__22895 = cljs.core._EQ_;
var expr__22896 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__22895.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__22896))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__22895,expr__22896){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__22895,expr__22896))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__22895,expr__22896){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e22898){if((e22898 instanceof Error)){
var e = e22898;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e22898;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__22895,expr__22896))
} else {
if(cljs.core.truth_(pred__22895.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__22896))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__22895.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__22896))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__22895.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__22896))){
return ((function (pred__22895,expr__22896){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e22899){if((e22899 instanceof Error)){
var e = e22899;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e22899;

}
}})());
});
;})(pred__22895,expr__22896))
} else {
return ((function (pred__22895,expr__22896){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__22895,expr__22896))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__22900,callback){
var map__22901 = p__22900;
var map__22901__$1 = ((((!((map__22901 == null)))?((((map__22901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22901.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22901):map__22901);
var file_msg = map__22901__$1;
var request_url = cljs.core.get.call(null,map__22901__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__22901,map__22901__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__22901,map__22901__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__15393__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15393__auto__){
return (function (){
var f__15394__auto__ = (function (){var switch__15303__auto__ = ((function (c__15393__auto__){
return (function (state_22925){
var state_val_22926 = (state_22925[(1)]);
if((state_val_22926 === (7))){
var inst_22921 = (state_22925[(2)]);
var state_22925__$1 = state_22925;
var statearr_22927_22944 = state_22925__$1;
(statearr_22927_22944[(2)] = inst_22921);

(statearr_22927_22944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22926 === (1))){
var state_22925__$1 = state_22925;
var statearr_22928_22945 = state_22925__$1;
(statearr_22928_22945[(2)] = null);

(statearr_22928_22945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22926 === (4))){
var inst_22905 = (state_22925[(7)]);
var inst_22905__$1 = (state_22925[(2)]);
var state_22925__$1 = (function (){var statearr_22929 = state_22925;
(statearr_22929[(7)] = inst_22905__$1);

return statearr_22929;
})();
if(cljs.core.truth_(inst_22905__$1)){
var statearr_22930_22946 = state_22925__$1;
(statearr_22930_22946[(1)] = (5));

} else {
var statearr_22931_22947 = state_22925__$1;
(statearr_22931_22947[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22926 === (6))){
var state_22925__$1 = state_22925;
var statearr_22932_22948 = state_22925__$1;
(statearr_22932_22948[(2)] = null);

(statearr_22932_22948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22926 === (3))){
var inst_22923 = (state_22925[(2)]);
var state_22925__$1 = state_22925;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22925__$1,inst_22923);
} else {
if((state_val_22926 === (2))){
var state_22925__$1 = state_22925;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22925__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_22926 === (11))){
var inst_22917 = (state_22925[(2)]);
var state_22925__$1 = (function (){var statearr_22933 = state_22925;
(statearr_22933[(8)] = inst_22917);

return statearr_22933;
})();
var statearr_22934_22949 = state_22925__$1;
(statearr_22934_22949[(2)] = null);

(statearr_22934_22949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22926 === (9))){
var inst_22909 = (state_22925[(9)]);
var inst_22911 = (state_22925[(10)]);
var inst_22913 = inst_22911.call(null,inst_22909);
var state_22925__$1 = state_22925;
var statearr_22935_22950 = state_22925__$1;
(statearr_22935_22950[(2)] = inst_22913);

(statearr_22935_22950[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22926 === (5))){
var inst_22905 = (state_22925[(7)]);
var inst_22907 = figwheel.client.file_reloading.blocking_load.call(null,inst_22905);
var state_22925__$1 = state_22925;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22925__$1,(8),inst_22907);
} else {
if((state_val_22926 === (10))){
var inst_22909 = (state_22925[(9)]);
var inst_22915 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_22909);
var state_22925__$1 = state_22925;
var statearr_22936_22951 = state_22925__$1;
(statearr_22936_22951[(2)] = inst_22915);

(statearr_22936_22951[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22926 === (8))){
var inst_22905 = (state_22925[(7)]);
var inst_22911 = (state_22925[(10)]);
var inst_22909 = (state_22925[(2)]);
var inst_22910 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_22911__$1 = cljs.core.get.call(null,inst_22910,inst_22905);
var state_22925__$1 = (function (){var statearr_22937 = state_22925;
(statearr_22937[(9)] = inst_22909);

(statearr_22937[(10)] = inst_22911__$1);

return statearr_22937;
})();
if(cljs.core.truth_(inst_22911__$1)){
var statearr_22938_22952 = state_22925__$1;
(statearr_22938_22952[(1)] = (9));

} else {
var statearr_22939_22953 = state_22925__$1;
(statearr_22939_22953[(1)] = (10));

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
});})(c__15393__auto__))
;
return ((function (switch__15303__auto__,c__15393__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__15304__auto__ = null;
var figwheel$client$file_reloading$state_machine__15304__auto____0 = (function (){
var statearr_22940 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22940[(0)] = figwheel$client$file_reloading$state_machine__15304__auto__);

(statearr_22940[(1)] = (1));

return statearr_22940;
});
var figwheel$client$file_reloading$state_machine__15304__auto____1 = (function (state_22925){
while(true){
var ret_value__15305__auto__ = (function (){try{while(true){
var result__15306__auto__ = switch__15303__auto__.call(null,state_22925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15306__auto__;
}
break;
}
}catch (e22941){if((e22941 instanceof Object)){
var ex__15307__auto__ = e22941;
var statearr_22942_22954 = state_22925;
(statearr_22942_22954[(5)] = ex__15307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22955 = state_22925;
state_22925 = G__22955;
continue;
} else {
return ret_value__15305__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__15304__auto__ = function(state_22925){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__15304__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__15304__auto____1.call(this,state_22925);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__15304__auto____0;
figwheel$client$file_reloading$state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__15304__auto____1;
return figwheel$client$file_reloading$state_machine__15304__auto__;
})()
;})(switch__15303__auto__,c__15393__auto__))
})();
var state__15395__auto__ = (function (){var statearr_22943 = f__15394__auto__.call(null);
(statearr_22943[(6)] = c__15393__auto__);

return statearr_22943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15395__auto__);
});})(c__15393__auto__))
);

return c__15393__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__22956,callback){
var map__22957 = p__22956;
var map__22957__$1 = ((((!((map__22957 == null)))?((((map__22957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22957.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22957):map__22957);
var file_msg = map__22957__$1;
var namespace = cljs.core.get.call(null,map__22957__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__22957,map__22957__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__22957,map__22957__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__22959){
var map__22960 = p__22959;
var map__22960__$1 = ((((!((map__22960 == null)))?((((map__22960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22960.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22960):map__22960);
var file_msg = map__22960__$1;
var namespace = cljs.core.get.call(null,map__22960__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__22962){
var map__22963 = p__22962;
var map__22963__$1 = ((((!((map__22963 == null)))?((((map__22963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22963.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22963):map__22963);
var file_msg = map__22963__$1;
var namespace = cljs.core.get.call(null,map__22963__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__9938__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__9938__auto__){
var or__9950__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__9950__auto__)){
return or__9950__auto__;
} else {
var or__9950__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__9950__auto____$1)){
return or__9950__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__9938__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__22965,callback){
var map__22966 = p__22965;
var map__22966__$1 = ((((!((map__22966 == null)))?((((map__22966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22966.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22966):map__22966);
var file_msg = map__22966__$1;
var request_url = cljs.core.get.call(null,map__22966__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__22966__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__15393__auto___23016 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15393__auto___23016,out){
return (function (){
var f__15394__auto__ = (function (){var switch__15303__auto__ = ((function (c__15393__auto___23016,out){
return (function (state_23001){
var state_val_23002 = (state_23001[(1)]);
if((state_val_23002 === (1))){
var inst_22975 = cljs.core.seq.call(null,files);
var inst_22976 = cljs.core.first.call(null,inst_22975);
var inst_22977 = cljs.core.next.call(null,inst_22975);
var inst_22978 = files;
var state_23001__$1 = (function (){var statearr_23003 = state_23001;
(statearr_23003[(7)] = inst_22976);

(statearr_23003[(8)] = inst_22978);

(statearr_23003[(9)] = inst_22977);

return statearr_23003;
})();
var statearr_23004_23017 = state_23001__$1;
(statearr_23004_23017[(2)] = null);

(statearr_23004_23017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23002 === (2))){
var inst_22978 = (state_23001[(8)]);
var inst_22984 = (state_23001[(10)]);
var inst_22983 = cljs.core.seq.call(null,inst_22978);
var inst_22984__$1 = cljs.core.first.call(null,inst_22983);
var inst_22985 = cljs.core.next.call(null,inst_22983);
var inst_22986 = (inst_22984__$1 == null);
var inst_22987 = cljs.core.not.call(null,inst_22986);
var state_23001__$1 = (function (){var statearr_23005 = state_23001;
(statearr_23005[(11)] = inst_22985);

(statearr_23005[(10)] = inst_22984__$1);

return statearr_23005;
})();
if(inst_22987){
var statearr_23006_23018 = state_23001__$1;
(statearr_23006_23018[(1)] = (4));

} else {
var statearr_23007_23019 = state_23001__$1;
(statearr_23007_23019[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23002 === (3))){
var inst_22999 = (state_23001[(2)]);
var state_23001__$1 = state_23001;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23001__$1,inst_22999);
} else {
if((state_val_23002 === (4))){
var inst_22984 = (state_23001[(10)]);
var inst_22989 = figwheel.client.file_reloading.reload_js_file.call(null,inst_22984);
var state_23001__$1 = state_23001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23001__$1,(7),inst_22989);
} else {
if((state_val_23002 === (5))){
var inst_22995 = cljs.core.async.close_BANG_.call(null,out);
var state_23001__$1 = state_23001;
var statearr_23008_23020 = state_23001__$1;
(statearr_23008_23020[(2)] = inst_22995);

(statearr_23008_23020[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23002 === (6))){
var inst_22997 = (state_23001[(2)]);
var state_23001__$1 = state_23001;
var statearr_23009_23021 = state_23001__$1;
(statearr_23009_23021[(2)] = inst_22997);

(statearr_23009_23021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23002 === (7))){
var inst_22985 = (state_23001[(11)]);
var inst_22991 = (state_23001[(2)]);
var inst_22992 = cljs.core.async.put_BANG_.call(null,out,inst_22991);
var inst_22978 = inst_22985;
var state_23001__$1 = (function (){var statearr_23010 = state_23001;
(statearr_23010[(12)] = inst_22992);

(statearr_23010[(8)] = inst_22978);

return statearr_23010;
})();
var statearr_23011_23022 = state_23001__$1;
(statearr_23011_23022[(2)] = null);

(statearr_23011_23022[(1)] = (2));


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
});})(c__15393__auto___23016,out))
;
return ((function (switch__15303__auto__,c__15393__auto___23016,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__15304__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__15304__auto____0 = (function (){
var statearr_23012 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23012[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__15304__auto__);

(statearr_23012[(1)] = (1));

return statearr_23012;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__15304__auto____1 = (function (state_23001){
while(true){
var ret_value__15305__auto__ = (function (){try{while(true){
var result__15306__auto__ = switch__15303__auto__.call(null,state_23001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15306__auto__;
}
break;
}
}catch (e23013){if((e23013 instanceof Object)){
var ex__15307__auto__ = e23013;
var statearr_23014_23023 = state_23001;
(statearr_23014_23023[(5)] = ex__15307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23024 = state_23001;
state_23001 = G__23024;
continue;
} else {
return ret_value__15305__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__15304__auto__ = function(state_23001){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__15304__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__15304__auto____1.call(this,state_23001);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__15304__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__15304__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__15304__auto__;
})()
;})(switch__15303__auto__,c__15393__auto___23016,out))
})();
var state__15395__auto__ = (function (){var statearr_23015 = f__15394__auto__.call(null);
(statearr_23015[(6)] = c__15393__auto___23016);

return statearr_23015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15395__auto__);
});})(c__15393__auto___23016,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__23025,opts){
var map__23026 = p__23025;
var map__23026__$1 = ((((!((map__23026 == null)))?((((map__23026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23026.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23026):map__23026);
var eval_body = cljs.core.get.call(null,map__23026__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__23026__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__9938__auto__ = eval_body;
if(cljs.core.truth_(and__9938__auto__)){
return typeof eval_body === 'string';
} else {
return and__9938__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e23028){var e = e23028;
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
return (function (p1__23029_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23029_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__23030){
var vec__23031 = p__23030;
var k = cljs.core.nth.call(null,vec__23031,(0),null);
var v = cljs.core.nth.call(null,vec__23031,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__23034){
var vec__23035 = p__23034;
var k = cljs.core.nth.call(null,vec__23035,(0),null);
var v = cljs.core.nth.call(null,vec__23035,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__23041,p__23042){
var map__23043 = p__23041;
var map__23043__$1 = ((((!((map__23043 == null)))?((((map__23043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23043.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23043):map__23043);
var opts = map__23043__$1;
var before_jsload = cljs.core.get.call(null,map__23043__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__23043__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__23043__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__23044 = p__23042;
var map__23044__$1 = ((((!((map__23044 == null)))?((((map__23044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23044.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23044):map__23044);
var msg = map__23044__$1;
var files = cljs.core.get.call(null,map__23044__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__23044__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__23044__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__15393__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15393__auto__,map__23043,map__23043__$1,opts,before_jsload,on_jsload,reload_dependents,map__23044,map__23044__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__15394__auto__ = (function (){var switch__15303__auto__ = ((function (c__15393__auto__,map__23043,map__23043__$1,opts,before_jsload,on_jsload,reload_dependents,map__23044,map__23044__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_23198){
var state_val_23199 = (state_23198[(1)]);
if((state_val_23199 === (7))){
var inst_23060 = (state_23198[(7)]);
var inst_23059 = (state_23198[(8)]);
var inst_23061 = (state_23198[(9)]);
var inst_23058 = (state_23198[(10)]);
var inst_23066 = cljs.core._nth.call(null,inst_23059,inst_23061);
var inst_23067 = figwheel.client.file_reloading.eval_body.call(null,inst_23066,opts);
var inst_23068 = (inst_23061 + (1));
var tmp23200 = inst_23060;
var tmp23201 = inst_23059;
var tmp23202 = inst_23058;
var inst_23058__$1 = tmp23202;
var inst_23059__$1 = tmp23201;
var inst_23060__$1 = tmp23200;
var inst_23061__$1 = inst_23068;
var state_23198__$1 = (function (){var statearr_23203 = state_23198;
(statearr_23203[(7)] = inst_23060__$1);

(statearr_23203[(8)] = inst_23059__$1);

(statearr_23203[(11)] = inst_23067);

(statearr_23203[(9)] = inst_23061__$1);

(statearr_23203[(10)] = inst_23058__$1);

return statearr_23203;
})();
var statearr_23204_23287 = state_23198__$1;
(statearr_23204_23287[(2)] = null);

(statearr_23204_23287[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23199 === (20))){
var inst_23101 = (state_23198[(12)]);
var inst_23109 = figwheel.client.file_reloading.sort_files.call(null,inst_23101);
var state_23198__$1 = state_23198;
var statearr_23205_23288 = state_23198__$1;
(statearr_23205_23288[(2)] = inst_23109);

(statearr_23205_23288[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23199 === (27))){
var state_23198__$1 = state_23198;
var statearr_23206_23289 = state_23198__$1;
(statearr_23206_23289[(2)] = null);

(statearr_23206_23289[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23199 === (1))){
var inst_23050 = (state_23198[(13)]);
var inst_23047 = before_jsload.call(null,files);
var inst_23048 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_23049 = (function (){return ((function (inst_23050,inst_23047,inst_23048,state_val_23199,c__15393__auto__,map__23043,map__23043__$1,opts,before_jsload,on_jsload,reload_dependents,map__23044,map__23044__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23038_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23038_SHARP_);
});
;})(inst_23050,inst_23047,inst_23048,state_val_23199,c__15393__auto__,map__23043,map__23043__$1,opts,before_jsload,on_jsload,reload_dependents,map__23044,map__23044__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23050__$1 = cljs.core.filter.call(null,inst_23049,files);
var inst_23051 = cljs.core.not_empty.call(null,inst_23050__$1);
var state_23198__$1 = (function (){var statearr_23207 = state_23198;
(statearr_23207[(13)] = inst_23050__$1);

(statearr_23207[(14)] = inst_23047);

(statearr_23207[(15)] = inst_23048);

return statearr_23207;
})();
if(cljs.core.truth_(inst_23051)){
var statearr_23208_23290 = state_23198__$1;
(statearr_23208_23290[(1)] = (2));

} else {
var statearr_23209_23291 = state_23198__$1;
(statearr_23209_23291[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23199 === (24))){
var state_23198__$1 = state_23198;
var statearr_23210_23292 = state_23198__$1;
(statearr_23210_23292[(2)] = null);

(statearr_23210_23292[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23199 === (39))){
var inst_23151 = (state_23198[(16)]);
var state_23198__$1 = state_23198;
var statearr_23211_23293 = state_23198__$1;
(statearr_23211_23293[(2)] = inst_23151);

(statearr_23211_23293[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23199 === (46))){
var inst_23193 = (state_23198[(2)]);
var state_23198__$1 = state_23198;
var statearr_23212_23294 = state_23198__$1;
(statearr_23212_23294[(2)] = inst_23193);

(statearr_23212_23294[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23199 === (4))){
var inst_23095 = (state_23198[(2)]);
var inst_23096 = cljs.core.List.EMPTY;
var inst_23097 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_23096);
var inst_23098 = (function (){return ((function (inst_23095,inst_23096,inst_23097,state_val_23199,c__15393__auto__,map__23043,map__23043__$1,opts,before_jsload,on_jsload,reload_dependents,map__23044,map__23044__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23039_SHARP_){
var and__9938__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23039_SHARP_);
if(cljs.core.truth_(and__9938__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23039_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__23039_SHARP_)));
} else {
return and__9938__auto__;
}
});
;})(inst_23095,inst_23096,inst_23097,state_val_23199,c__15393__auto__,map__23043,map__23043__$1,opts,before_jsload,on_jsload,reload_dependents,map__23044,map__23044__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23099 = cljs.core.filter.call(null,inst_23098,files);
var inst_23100 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_23101 = cljs.core.concat.call(null,inst_23099,inst_23100);
var state_23198__$1 = (function (){var statearr_23213 = state_23198;
(statearr_23213[(17)] = inst_23095);

(statearr_23213[(18)] = inst_23097);

(statearr_23213[(12)] = inst_23101);

return statearr_23213;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_23214_23295 = state_23198__$1;
(statearr_23214_23295[(1)] = (16));

} else {
var statearr_23215_23296 = state_23198__$1;
(statearr_23215_23296[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23199 === (15))){
var inst_23085 = (state_23198[(2)]);
var state_23198__$1 = state_23198;
var statearr_23216_23297 = state_23198__$1;
(statearr_23216_23297[(2)] = inst_23085);

(statearr_23216_23297[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23199 === (21))){
var inst_23111 = (state_23198[(19)]);
var inst_23111__$1 = (state_23198[(2)]);
var inst_23112 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_23111__$1);
var state_23198__$1 = (function (){var statearr_23217 = state_23198;
(statearr_23217[(19)] = inst_23111__$1);

return statearr_23217;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23198__$1,(22),inst_23112);
} else {
if((state_val_23199 === (31))){
var inst_23196 = (state_23198[(2)]);
var state_23198__$1 = state_23198;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23198__$1,inst_23196);
} else {
if((state_val_23199 === (32))){
var inst_23151 = (state_23198[(16)]);
var inst_23156 = inst_23151.cljs$lang$protocol_mask$partition0$;
var inst_23157 = (inst_23156 & (64));
var inst_23158 = inst_23151.cljs$core$ISeq$;
var inst_23159 = (cljs.core.PROTOCOL_SENTINEL === inst_23158);
var inst_23160 = (inst_23157) || (inst_23159);
var state_23198__$1 = state_23198;
if(cljs.core.truth_(inst_23160)){
var statearr_23218_23298 = state_23198__$1;
(statearr_23218_23298[(1)] = (35));

} else {
var statearr_23219_23299 = state_23198__$1;
(statearr_23219_23299[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23199 === (40))){
var inst_23173 = (state_23198[(20)]);
var inst_23172 = (state_23198[(2)]);
var inst_23173__$1 = cljs.core.get.call(null,inst_23172,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_23174 = cljs.core.get.call(null,inst_23172,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_23175 = cljs.core.not_empty.call(null,inst_23173__$1);
var state_23198__$1 = (function (){var statearr_23220 = state_23198;
(statearr_23220[(20)] = inst_23173__$1);

(statearr_23220[(21)] = inst_23174);

return statearr_23220;
})();
if(cljs.core.truth_(inst_23175)){
var statearr_23221_23300 = state_23198__$1;
(statearr_23221_23300[(1)] = (41));

} else {
var statearr_23222_23301 = state_23198__$1;
(statearr_23222_23301[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23199 === (33))){
var state_23198__$1 = state_23198;
var statearr_23223_23302 = state_23198__$1;
(statearr_23223_23302[(2)] = false);

(statearr_23223_23302[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23199 === (13))){
var inst_23071 = (state_23198[(22)]);
var inst_23075 = cljs.core.chunk_first.call(null,inst_23071);
var inst_23076 = cljs.core.chunk_rest.call(null,inst_23071);
var inst_23077 = cljs.core.count.call(null,inst_23075);
var inst_23058 = inst_23076;
var inst_23059 = inst_23075;
var inst_23060 = inst_23077;
var inst_23061 = (0);
var state_23198__$1 = (function (){var statearr_23224 = state_23198;
(statearr_23224[(7)] = inst_23060);

(statearr_23224[(8)] = inst_23059);

(statearr_23224[(9)] = inst_23061);

(statearr_23224[(10)] = inst_23058);

return statearr_23224;
})();
var statearr_23225_23303 = state_23198__$1;
(statearr_23225_23303[(2)] = null);

(statearr_23225_23303[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23199 === (22))){
var inst_23111 = (state_23198[(19)]);
var inst_23115 = (state_23198[(23)]);
var inst_23114 = (state_23198[(24)]);
var inst_23119 = (state_23198[(25)]);
var inst_23114__$1 = (state_23198[(2)]);
var inst_23115__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23114__$1);
var inst_23116 = (function (){var all_files = inst_23111;
var res_SINGLEQUOTE_ = inst_23114__$1;
var res = inst_23115__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_23111,inst_23115,inst_23114,inst_23119,inst_23114__$1,inst_23115__$1,state_val_23199,c__15393__auto__,map__23043,map__23043__$1,opts,before_jsload,on_jsload,reload_dependents,map__23044,map__23044__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23040_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__23040_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_23111,inst_23115,inst_23114,inst_23119,inst_23114__$1,inst_23115__$1,state_val_23199,c__15393__auto__,map__23043,map__23043__$1,opts,before_jsload,on_jsload,reload_dependents,map__23044,map__23044__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23117 = cljs.core.filter.call(null,inst_23116,inst_23114__$1);
var inst_23118 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_23119__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23118);
var inst_23120 = cljs.core.not_empty.call(null,inst_23119__$1);
var state_23198__$1 = (function (){var statearr_23226 = state_23198;
(statearr_23226[(23)] = inst_23115__$1);

(statearr_23226[(24)] = inst_23114__$1);

(statearr_23226[(26)] = inst_23117);

(statearr_23226[(25)] = inst_23119__$1);

return statearr_23226;
})();
if(cljs.core.truth_(inst_23120)){
var statearr_23227_23304 = state_23198__$1;
(statearr_23227_23304[(1)] = (23));

} else {
var statearr_23228_23305 = state_23198__$1;
(statearr_23228_23305[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23199 === (36))){
var state_23198__$1 = state_23198;
var statearr_23229_23306 = state_23198__$1;
(statearr_23229_23306[(2)] = false);

(statearr_23229_23306[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23199 === (41))){
var inst_23173 = (state_23198[(20)]);
var inst_23177 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_23178 = cljs.core.map.call(null,inst_23177,inst_23173);
var inst_23179 = cljs.core.pr_str.call(null,inst_23178);
var inst_23180 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23179)].join('');
var inst_23181 = figwheel.client.utils.log.call(null,inst_23180);
var state_23198__$1 = state_23198;
var statearr_23230_23307 = state_23198__$1;
(statearr_23230_23307[(2)] = inst_23181);

(statearr_23230_23307[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23199 === (43))){
var inst_23174 = (state_23198[(21)]);
var inst_23184 = (state_23198[(2)]);
var inst_23185 = cljs.core.not_empty.call(null,inst_23174);
var state_23198__$1 = (function (){var statearr_23231 = state_23198;
(statearr_23231[(27)] = inst_23184);

return statearr_23231;
})();
if(cljs.core.truth_(inst_23185)){
var statearr_23232_23308 = state_23198__$1;
(statearr_23232_23308[(1)] = (44));

} else {
var statearr_23233_23309 = state_23198__$1;
(statearr_23233_23309[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23199 === (29))){
var inst_23111 = (state_23198[(19)]);
var inst_23115 = (state_23198[(23)]);
var inst_23114 = (state_23198[(24)]);
var inst_23151 = (state_23198[(16)]);
var inst_23117 = (state_23198[(26)]);
var inst_23119 = (state_23198[(25)]);
var inst_23147 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_23150 = (function (){var all_files = inst_23111;
var res_SINGLEQUOTE_ = inst_23114;
var res = inst_23115;
var files_not_loaded = inst_23117;
var dependencies_that_loaded = inst_23119;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23111,inst_23115,inst_23114,inst_23151,inst_23117,inst_23119,inst_23147,state_val_23199,c__15393__auto__,map__23043,map__23043__$1,opts,before_jsload,on_jsload,reload_dependents,map__23044,map__23044__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23149){
var map__23234 = p__23149;
var map__23234__$1 = ((((!((map__23234 == null)))?((((map__23234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23234.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23234):map__23234);
var namespace = cljs.core.get.call(null,map__23234__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23111,inst_23115,inst_23114,inst_23151,inst_23117,inst_23119,inst_23147,state_val_23199,c__15393__auto__,map__23043,map__23043__$1,opts,before_jsload,on_jsload,reload_dependents,map__23044,map__23044__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23151__$1 = cljs.core.group_by.call(null,inst_23150,inst_23117);
var inst_23153 = (inst_23151__$1 == null);
var inst_23154 = cljs.core.not.call(null,inst_23153);
var state_23198__$1 = (function (){var statearr_23236 = state_23198;
(statearr_23236[(16)] = inst_23151__$1);

(statearr_23236[(28)] = inst_23147);

return statearr_23236;
})();
if(inst_23154){
var statearr_23237_23310 = state_23198__$1;
(statearr_23237_23310[(1)] = (32));

} else {
var statearr_23238_23311 = state_23198__$1;
(statearr_23238_23311[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23199 === (44))){
var inst_23174 = (state_23198[(21)]);
var inst_23187 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23174);
var inst_23188 = cljs.core.pr_str.call(null,inst_23187);
var inst_23189 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23188)].join('');
var inst_23190 = figwheel.client.utils.log.call(null,inst_23189);
var state_23198__$1 = state_23198;
var statearr_23239_23312 = state_23198__$1;
(statearr_23239_23312[(2)] = inst_23190);

(statearr_23239_23312[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23199 === (6))){
var inst_23092 = (state_23198[(2)]);
var state_23198__$1 = state_23198;
var statearr_23240_23313 = state_23198__$1;
(statearr_23240_23313[(2)] = inst_23092);

(statearr_23240_23313[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23199 === (28))){
var inst_23117 = (state_23198[(26)]);
var inst_23144 = (state_23198[(2)]);
var inst_23145 = cljs.core.not_empty.call(null,inst_23117);
var state_23198__$1 = (function (){var statearr_23241 = state_23198;
(statearr_23241[(29)] = inst_23144);

return statearr_23241;
})();
if(cljs.core.truth_(inst_23145)){
var statearr_23242_23314 = state_23198__$1;
(statearr_23242_23314[(1)] = (29));

} else {
var statearr_23243_23315 = state_23198__$1;
(statearr_23243_23315[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23199 === (25))){
var inst_23115 = (state_23198[(23)]);
var inst_23131 = (state_23198[(2)]);
var inst_23132 = cljs.core.not_empty.call(null,inst_23115);
var state_23198__$1 = (function (){var statearr_23244 = state_23198;
(statearr_23244[(30)] = inst_23131);

return statearr_23244;
})();
if(cljs.core.truth_(inst_23132)){
var statearr_23245_23316 = state_23198__$1;
(statearr_23245_23316[(1)] = (26));

} else {
var statearr_23246_23317 = state_23198__$1;
(statearr_23246_23317[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23199 === (34))){
var inst_23167 = (state_23198[(2)]);
var state_23198__$1 = state_23198;
if(cljs.core.truth_(inst_23167)){
var statearr_23247_23318 = state_23198__$1;
(statearr_23247_23318[(1)] = (38));

} else {
var statearr_23248_23319 = state_23198__$1;
(statearr_23248_23319[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23199 === (17))){
var state_23198__$1 = state_23198;
var statearr_23249_23320 = state_23198__$1;
(statearr_23249_23320[(2)] = recompile_dependents);

(statearr_23249_23320[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23199 === (3))){
var state_23198__$1 = state_23198;
var statearr_23250_23321 = state_23198__$1;
(statearr_23250_23321[(2)] = null);

(statearr_23250_23321[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23199 === (12))){
var inst_23088 = (state_23198[(2)]);
var state_23198__$1 = state_23198;
var statearr_23251_23322 = state_23198__$1;
(statearr_23251_23322[(2)] = inst_23088);

(statearr_23251_23322[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23199 === (2))){
var inst_23050 = (state_23198[(13)]);
var inst_23057 = cljs.core.seq.call(null,inst_23050);
var inst_23058 = inst_23057;
var inst_23059 = null;
var inst_23060 = (0);
var inst_23061 = (0);
var state_23198__$1 = (function (){var statearr_23252 = state_23198;
(statearr_23252[(7)] = inst_23060);

(statearr_23252[(8)] = inst_23059);

(statearr_23252[(9)] = inst_23061);

(statearr_23252[(10)] = inst_23058);

return statearr_23252;
})();
var statearr_23253_23323 = state_23198__$1;
(statearr_23253_23323[(2)] = null);

(statearr_23253_23323[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23199 === (23))){
var inst_23111 = (state_23198[(19)]);
var inst_23115 = (state_23198[(23)]);
var inst_23114 = (state_23198[(24)]);
var inst_23117 = (state_23198[(26)]);
var inst_23119 = (state_23198[(25)]);
var inst_23122 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_23124 = (function (){var all_files = inst_23111;
var res_SINGLEQUOTE_ = inst_23114;
var res = inst_23115;
var files_not_loaded = inst_23117;
var dependencies_that_loaded = inst_23119;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23111,inst_23115,inst_23114,inst_23117,inst_23119,inst_23122,state_val_23199,c__15393__auto__,map__23043,map__23043__$1,opts,before_jsload,on_jsload,reload_dependents,map__23044,map__23044__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23123){
var map__23254 = p__23123;
var map__23254__$1 = ((((!((map__23254 == null)))?((((map__23254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23254.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23254):map__23254);
var request_url = cljs.core.get.call(null,map__23254__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23111,inst_23115,inst_23114,inst_23117,inst_23119,inst_23122,state_val_23199,c__15393__auto__,map__23043,map__23043__$1,opts,before_jsload,on_jsload,reload_dependents,map__23044,map__23044__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23125 = cljs.core.reverse.call(null,inst_23119);
var inst_23126 = cljs.core.map.call(null,inst_23124,inst_23125);
var inst_23127 = cljs.core.pr_str.call(null,inst_23126);
var inst_23128 = figwheel.client.utils.log.call(null,inst_23127);
var state_23198__$1 = (function (){var statearr_23256 = state_23198;
(statearr_23256[(31)] = inst_23122);

return statearr_23256;
})();
var statearr_23257_23324 = state_23198__$1;
(statearr_23257_23324[(2)] = inst_23128);

(statearr_23257_23324[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23199 === (35))){
var state_23198__$1 = state_23198;
var statearr_23258_23325 = state_23198__$1;
(statearr_23258_23325[(2)] = true);

(statearr_23258_23325[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23199 === (19))){
var inst_23101 = (state_23198[(12)]);
var inst_23107 = figwheel.client.file_reloading.expand_files.call(null,inst_23101);
var state_23198__$1 = state_23198;
var statearr_23259_23326 = state_23198__$1;
(statearr_23259_23326[(2)] = inst_23107);

(statearr_23259_23326[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23199 === (11))){
var state_23198__$1 = state_23198;
var statearr_23260_23327 = state_23198__$1;
(statearr_23260_23327[(2)] = null);

(statearr_23260_23327[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23199 === (9))){
var inst_23090 = (state_23198[(2)]);
var state_23198__$1 = state_23198;
var statearr_23261_23328 = state_23198__$1;
(statearr_23261_23328[(2)] = inst_23090);

(statearr_23261_23328[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23199 === (5))){
var inst_23060 = (state_23198[(7)]);
var inst_23061 = (state_23198[(9)]);
var inst_23063 = (inst_23061 < inst_23060);
var inst_23064 = inst_23063;
var state_23198__$1 = state_23198;
if(cljs.core.truth_(inst_23064)){
var statearr_23262_23329 = state_23198__$1;
(statearr_23262_23329[(1)] = (7));

} else {
var statearr_23263_23330 = state_23198__$1;
(statearr_23263_23330[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23199 === (14))){
var inst_23071 = (state_23198[(22)]);
var inst_23080 = cljs.core.first.call(null,inst_23071);
var inst_23081 = figwheel.client.file_reloading.eval_body.call(null,inst_23080,opts);
var inst_23082 = cljs.core.next.call(null,inst_23071);
var inst_23058 = inst_23082;
var inst_23059 = null;
var inst_23060 = (0);
var inst_23061 = (0);
var state_23198__$1 = (function (){var statearr_23264 = state_23198;
(statearr_23264[(32)] = inst_23081);

(statearr_23264[(7)] = inst_23060);

(statearr_23264[(8)] = inst_23059);

(statearr_23264[(9)] = inst_23061);

(statearr_23264[(10)] = inst_23058);

return statearr_23264;
})();
var statearr_23265_23331 = state_23198__$1;
(statearr_23265_23331[(2)] = null);

(statearr_23265_23331[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23199 === (45))){
var state_23198__$1 = state_23198;
var statearr_23266_23332 = state_23198__$1;
(statearr_23266_23332[(2)] = null);

(statearr_23266_23332[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23199 === (26))){
var inst_23111 = (state_23198[(19)]);
var inst_23115 = (state_23198[(23)]);
var inst_23114 = (state_23198[(24)]);
var inst_23117 = (state_23198[(26)]);
var inst_23119 = (state_23198[(25)]);
var inst_23134 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_23136 = (function (){var all_files = inst_23111;
var res_SINGLEQUOTE_ = inst_23114;
var res = inst_23115;
var files_not_loaded = inst_23117;
var dependencies_that_loaded = inst_23119;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23111,inst_23115,inst_23114,inst_23117,inst_23119,inst_23134,state_val_23199,c__15393__auto__,map__23043,map__23043__$1,opts,before_jsload,on_jsload,reload_dependents,map__23044,map__23044__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23135){
var map__23267 = p__23135;
var map__23267__$1 = ((((!((map__23267 == null)))?((((map__23267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23267.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23267):map__23267);
var namespace = cljs.core.get.call(null,map__23267__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__23267__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23111,inst_23115,inst_23114,inst_23117,inst_23119,inst_23134,state_val_23199,c__15393__auto__,map__23043,map__23043__$1,opts,before_jsload,on_jsload,reload_dependents,map__23044,map__23044__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23137 = cljs.core.map.call(null,inst_23136,inst_23115);
var inst_23138 = cljs.core.pr_str.call(null,inst_23137);
var inst_23139 = figwheel.client.utils.log.call(null,inst_23138);
var inst_23140 = (function (){var all_files = inst_23111;
var res_SINGLEQUOTE_ = inst_23114;
var res = inst_23115;
var files_not_loaded = inst_23117;
var dependencies_that_loaded = inst_23119;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23111,inst_23115,inst_23114,inst_23117,inst_23119,inst_23134,inst_23136,inst_23137,inst_23138,inst_23139,state_val_23199,c__15393__auto__,map__23043,map__23043__$1,opts,before_jsload,on_jsload,reload_dependents,map__23044,map__23044__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23111,inst_23115,inst_23114,inst_23117,inst_23119,inst_23134,inst_23136,inst_23137,inst_23138,inst_23139,state_val_23199,c__15393__auto__,map__23043,map__23043__$1,opts,before_jsload,on_jsload,reload_dependents,map__23044,map__23044__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23141 = setTimeout(inst_23140,(10));
var state_23198__$1 = (function (){var statearr_23269 = state_23198;
(statearr_23269[(33)] = inst_23139);

(statearr_23269[(34)] = inst_23134);

return statearr_23269;
})();
var statearr_23270_23333 = state_23198__$1;
(statearr_23270_23333[(2)] = inst_23141);

(statearr_23270_23333[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23199 === (16))){
var state_23198__$1 = state_23198;
var statearr_23271_23334 = state_23198__$1;
(statearr_23271_23334[(2)] = reload_dependents);

(statearr_23271_23334[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23199 === (38))){
var inst_23151 = (state_23198[(16)]);
var inst_23169 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23151);
var state_23198__$1 = state_23198;
var statearr_23272_23335 = state_23198__$1;
(statearr_23272_23335[(2)] = inst_23169);

(statearr_23272_23335[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23199 === (30))){
var state_23198__$1 = state_23198;
var statearr_23273_23336 = state_23198__$1;
(statearr_23273_23336[(2)] = null);

(statearr_23273_23336[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23199 === (10))){
var inst_23071 = (state_23198[(22)]);
var inst_23073 = cljs.core.chunked_seq_QMARK_.call(null,inst_23071);
var state_23198__$1 = state_23198;
if(inst_23073){
var statearr_23274_23337 = state_23198__$1;
(statearr_23274_23337[(1)] = (13));

} else {
var statearr_23275_23338 = state_23198__$1;
(statearr_23275_23338[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23199 === (18))){
var inst_23105 = (state_23198[(2)]);
var state_23198__$1 = state_23198;
if(cljs.core.truth_(inst_23105)){
var statearr_23276_23339 = state_23198__$1;
(statearr_23276_23339[(1)] = (19));

} else {
var statearr_23277_23340 = state_23198__$1;
(statearr_23277_23340[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23199 === (42))){
var state_23198__$1 = state_23198;
var statearr_23278_23341 = state_23198__$1;
(statearr_23278_23341[(2)] = null);

(statearr_23278_23341[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23199 === (37))){
var inst_23164 = (state_23198[(2)]);
var state_23198__$1 = state_23198;
var statearr_23279_23342 = state_23198__$1;
(statearr_23279_23342[(2)] = inst_23164);

(statearr_23279_23342[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23199 === (8))){
var inst_23058 = (state_23198[(10)]);
var inst_23071 = (state_23198[(22)]);
var inst_23071__$1 = cljs.core.seq.call(null,inst_23058);
var state_23198__$1 = (function (){var statearr_23280 = state_23198;
(statearr_23280[(22)] = inst_23071__$1);

return statearr_23280;
})();
if(inst_23071__$1){
var statearr_23281_23343 = state_23198__$1;
(statearr_23281_23343[(1)] = (10));

} else {
var statearr_23282_23344 = state_23198__$1;
(statearr_23282_23344[(1)] = (11));

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
});})(c__15393__auto__,map__23043,map__23043__$1,opts,before_jsload,on_jsload,reload_dependents,map__23044,map__23044__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__15303__auto__,c__15393__auto__,map__23043,map__23043__$1,opts,before_jsload,on_jsload,reload_dependents,map__23044,map__23044__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__15304__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__15304__auto____0 = (function (){
var statearr_23283 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23283[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__15304__auto__);

(statearr_23283[(1)] = (1));

return statearr_23283;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__15304__auto____1 = (function (state_23198){
while(true){
var ret_value__15305__auto__ = (function (){try{while(true){
var result__15306__auto__ = switch__15303__auto__.call(null,state_23198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15306__auto__;
}
break;
}
}catch (e23284){if((e23284 instanceof Object)){
var ex__15307__auto__ = e23284;
var statearr_23285_23345 = state_23198;
(statearr_23285_23345[(5)] = ex__15307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23346 = state_23198;
state_23198 = G__23346;
continue;
} else {
return ret_value__15305__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__15304__auto__ = function(state_23198){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__15304__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__15304__auto____1.call(this,state_23198);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__15304__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__15304__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__15304__auto__;
})()
;})(switch__15303__auto__,c__15393__auto__,map__23043,map__23043__$1,opts,before_jsload,on_jsload,reload_dependents,map__23044,map__23044__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__15395__auto__ = (function (){var statearr_23286 = f__15394__auto__.call(null);
(statearr_23286[(6)] = c__15393__auto__);

return statearr_23286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15395__auto__);
});})(c__15393__auto__,map__23043,map__23043__$1,opts,before_jsload,on_jsload,reload_dependents,map__23044,map__23044__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__15393__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__23349,link){
var map__23350 = p__23349;
var map__23350__$1 = ((((!((map__23350 == null)))?((((map__23350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23350.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23350):map__23350);
var file = cljs.core.get.call(null,map__23350__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6738__auto__ = link.href;
if(cljs.core.truth_(temp__6738__auto__)){
var link_href = temp__6738__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6738__auto__,map__23350,map__23350__$1,file){
return (function (p1__23347_SHARP_,p2__23348_SHARP_){
if(cljs.core._EQ_.call(null,p1__23347_SHARP_,p2__23348_SHARP_)){
return p1__23347_SHARP_;
} else {
return false;
}
});})(link_href,temp__6738__auto__,map__23350,map__23350__$1,file))
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
var temp__6738__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__23353){
var map__23354 = p__23353;
var map__23354__$1 = ((((!((map__23354 == null)))?((((map__23354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23354.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23354):map__23354);
var match_length = cljs.core.get.call(null,map__23354__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__23354__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__23352_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__23352_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__23356_SHARP_,p2__23357_SHARP_){
return cljs.core.assoc.call(null,p1__23356_SHARP_,cljs.core.get.call(null,p2__23357_SHARP_,key),p2__23357_SHARP_);
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
var loaded_f_datas_23358 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_23358);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_23358);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__23359,p__23360){
var map__23361 = p__23359;
var map__23361__$1 = ((((!((map__23361 == null)))?((((map__23361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23361.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23361):map__23361);
var on_cssload = cljs.core.get.call(null,map__23361__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__23362 = p__23360;
var map__23362__$1 = ((((!((map__23362 == null)))?((((map__23362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23362.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23362):map__23362);
var files_msg = map__23362__$1;
var files = cljs.core.get.call(null,map__23362__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1506917875405
