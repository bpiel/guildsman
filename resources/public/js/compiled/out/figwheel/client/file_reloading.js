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
var or__74901__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__74901__auto__){
return or__74901__auto__;
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
var or__74901__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__74901__auto__)){
return or__74901__auto__;
} else {
var or__74901__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__74901__auto____$1)){
return or__74901__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__86101_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__86101_SHARP_));
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
var seq__86102 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__86103 = null;
var count__86104 = (0);
var i__86105 = (0);
while(true){
if((i__86105 < count__86104)){
var n = cljs.core._nth.call(null,chunk__86103,i__86105);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__86106 = seq__86102;
var G__86107 = chunk__86103;
var G__86108 = count__86104;
var G__86109 = (i__86105 + (1));
seq__86102 = G__86106;
chunk__86103 = G__86107;
count__86104 = G__86108;
i__86105 = G__86109;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__86102);
if(temp__5457__auto__){
var seq__86102__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__86102__$1)){
var c__75832__auto__ = cljs.core.chunk_first.call(null,seq__86102__$1);
var G__86110 = cljs.core.chunk_rest.call(null,seq__86102__$1);
var G__86111 = c__75832__auto__;
var G__86112 = cljs.core.count.call(null,c__75832__auto__);
var G__86113 = (0);
seq__86102 = G__86110;
chunk__86103 = G__86111;
count__86104 = G__86112;
i__86105 = G__86113;
continue;
} else {
var n = cljs.core.first.call(null,seq__86102__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__86114 = cljs.core.next.call(null,seq__86102__$1);
var G__86115 = null;
var G__86116 = (0);
var G__86117 = (0);
seq__86102 = G__86114;
chunk__86103 = G__86115;
count__86104 = G__86116;
i__86105 = G__86117;
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

var seq__86127_86135 = cljs.core.seq.call(null,deps);
var chunk__86128_86136 = null;
var count__86129_86137 = (0);
var i__86130_86138 = (0);
while(true){
if((i__86130_86138 < count__86129_86137)){
var dep_86139 = cljs.core._nth.call(null,chunk__86128_86136,i__86130_86138);
topo_sort_helper_STAR_.call(null,dep_86139,(depth + (1)),state);

var G__86140 = seq__86127_86135;
var G__86141 = chunk__86128_86136;
var G__86142 = count__86129_86137;
var G__86143 = (i__86130_86138 + (1));
seq__86127_86135 = G__86140;
chunk__86128_86136 = G__86141;
count__86129_86137 = G__86142;
i__86130_86138 = G__86143;
continue;
} else {
var temp__5457__auto___86144 = cljs.core.seq.call(null,seq__86127_86135);
if(temp__5457__auto___86144){
var seq__86127_86145__$1 = temp__5457__auto___86144;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__86127_86145__$1)){
var c__75832__auto___86146 = cljs.core.chunk_first.call(null,seq__86127_86145__$1);
var G__86147 = cljs.core.chunk_rest.call(null,seq__86127_86145__$1);
var G__86148 = c__75832__auto___86146;
var G__86149 = cljs.core.count.call(null,c__75832__auto___86146);
var G__86150 = (0);
seq__86127_86135 = G__86147;
chunk__86128_86136 = G__86148;
count__86129_86137 = G__86149;
i__86130_86138 = G__86150;
continue;
} else {
var dep_86151 = cljs.core.first.call(null,seq__86127_86145__$1);
topo_sort_helper_STAR_.call(null,dep_86151,(depth + (1)),state);

var G__86152 = cljs.core.next.call(null,seq__86127_86145__$1);
var G__86153 = null;
var G__86154 = (0);
var G__86155 = (0);
seq__86127_86135 = G__86152;
chunk__86128_86136 = G__86153;
count__86129_86137 = G__86154;
i__86130_86138 = G__86155;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__86131){
var vec__86132 = p__86131;
var seq__86133 = cljs.core.seq.call(null,vec__86132);
var first__86134 = cljs.core.first.call(null,seq__86133);
var seq__86133__$1 = cljs.core.next.call(null,seq__86133);
var x = first__86134;
var xs = seq__86133__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__86132,seq__86133,first__86134,seq__86133__$1,x,xs,get_deps__$1){
return (function (p1__86118_SHARP_){
return clojure.set.difference.call(null,p1__86118_SHARP_,x);
});})(vec__86132,seq__86133,first__86134,seq__86133__$1,x,xs,get_deps__$1))
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
var seq__86156 = cljs.core.seq.call(null,provides);
var chunk__86157 = null;
var count__86158 = (0);
var i__86159 = (0);
while(true){
if((i__86159 < count__86158)){
var prov = cljs.core._nth.call(null,chunk__86157,i__86159);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__86160_86168 = cljs.core.seq.call(null,requires);
var chunk__86161_86169 = null;
var count__86162_86170 = (0);
var i__86163_86171 = (0);
while(true){
if((i__86163_86171 < count__86162_86170)){
var req_86172 = cljs.core._nth.call(null,chunk__86161_86169,i__86163_86171);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_86172,prov);

var G__86173 = seq__86160_86168;
var G__86174 = chunk__86161_86169;
var G__86175 = count__86162_86170;
var G__86176 = (i__86163_86171 + (1));
seq__86160_86168 = G__86173;
chunk__86161_86169 = G__86174;
count__86162_86170 = G__86175;
i__86163_86171 = G__86176;
continue;
} else {
var temp__5457__auto___86177 = cljs.core.seq.call(null,seq__86160_86168);
if(temp__5457__auto___86177){
var seq__86160_86178__$1 = temp__5457__auto___86177;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__86160_86178__$1)){
var c__75832__auto___86179 = cljs.core.chunk_first.call(null,seq__86160_86178__$1);
var G__86180 = cljs.core.chunk_rest.call(null,seq__86160_86178__$1);
var G__86181 = c__75832__auto___86179;
var G__86182 = cljs.core.count.call(null,c__75832__auto___86179);
var G__86183 = (0);
seq__86160_86168 = G__86180;
chunk__86161_86169 = G__86181;
count__86162_86170 = G__86182;
i__86163_86171 = G__86183;
continue;
} else {
var req_86184 = cljs.core.first.call(null,seq__86160_86178__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_86184,prov);

var G__86185 = cljs.core.next.call(null,seq__86160_86178__$1);
var G__86186 = null;
var G__86187 = (0);
var G__86188 = (0);
seq__86160_86168 = G__86185;
chunk__86161_86169 = G__86186;
count__86162_86170 = G__86187;
i__86163_86171 = G__86188;
continue;
}
} else {
}
}
break;
}

var G__86189 = seq__86156;
var G__86190 = chunk__86157;
var G__86191 = count__86158;
var G__86192 = (i__86159 + (1));
seq__86156 = G__86189;
chunk__86157 = G__86190;
count__86158 = G__86191;
i__86159 = G__86192;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__86156);
if(temp__5457__auto__){
var seq__86156__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__86156__$1)){
var c__75832__auto__ = cljs.core.chunk_first.call(null,seq__86156__$1);
var G__86193 = cljs.core.chunk_rest.call(null,seq__86156__$1);
var G__86194 = c__75832__auto__;
var G__86195 = cljs.core.count.call(null,c__75832__auto__);
var G__86196 = (0);
seq__86156 = G__86193;
chunk__86157 = G__86194;
count__86158 = G__86195;
i__86159 = G__86196;
continue;
} else {
var prov = cljs.core.first.call(null,seq__86156__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__86164_86197 = cljs.core.seq.call(null,requires);
var chunk__86165_86198 = null;
var count__86166_86199 = (0);
var i__86167_86200 = (0);
while(true){
if((i__86167_86200 < count__86166_86199)){
var req_86201 = cljs.core._nth.call(null,chunk__86165_86198,i__86167_86200);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_86201,prov);

var G__86202 = seq__86164_86197;
var G__86203 = chunk__86165_86198;
var G__86204 = count__86166_86199;
var G__86205 = (i__86167_86200 + (1));
seq__86164_86197 = G__86202;
chunk__86165_86198 = G__86203;
count__86166_86199 = G__86204;
i__86167_86200 = G__86205;
continue;
} else {
var temp__5457__auto___86206__$1 = cljs.core.seq.call(null,seq__86164_86197);
if(temp__5457__auto___86206__$1){
var seq__86164_86207__$1 = temp__5457__auto___86206__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__86164_86207__$1)){
var c__75832__auto___86208 = cljs.core.chunk_first.call(null,seq__86164_86207__$1);
var G__86209 = cljs.core.chunk_rest.call(null,seq__86164_86207__$1);
var G__86210 = c__75832__auto___86208;
var G__86211 = cljs.core.count.call(null,c__75832__auto___86208);
var G__86212 = (0);
seq__86164_86197 = G__86209;
chunk__86165_86198 = G__86210;
count__86166_86199 = G__86211;
i__86167_86200 = G__86212;
continue;
} else {
var req_86213 = cljs.core.first.call(null,seq__86164_86207__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_86213,prov);

var G__86214 = cljs.core.next.call(null,seq__86164_86207__$1);
var G__86215 = null;
var G__86216 = (0);
var G__86217 = (0);
seq__86164_86197 = G__86214;
chunk__86165_86198 = G__86215;
count__86166_86199 = G__86216;
i__86167_86200 = G__86217;
continue;
}
} else {
}
}
break;
}

var G__86218 = cljs.core.next.call(null,seq__86156__$1);
var G__86219 = null;
var G__86220 = (0);
var G__86221 = (0);
seq__86156 = G__86218;
chunk__86157 = G__86219;
count__86158 = G__86220;
i__86159 = G__86221;
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
var seq__86222_86226 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__86223_86227 = null;
var count__86224_86228 = (0);
var i__86225_86229 = (0);
while(true){
if((i__86225_86229 < count__86224_86228)){
var ns_86230 = cljs.core._nth.call(null,chunk__86223_86227,i__86225_86229);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_86230);

var G__86231 = seq__86222_86226;
var G__86232 = chunk__86223_86227;
var G__86233 = count__86224_86228;
var G__86234 = (i__86225_86229 + (1));
seq__86222_86226 = G__86231;
chunk__86223_86227 = G__86232;
count__86224_86228 = G__86233;
i__86225_86229 = G__86234;
continue;
} else {
var temp__5457__auto___86235 = cljs.core.seq.call(null,seq__86222_86226);
if(temp__5457__auto___86235){
var seq__86222_86236__$1 = temp__5457__auto___86235;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__86222_86236__$1)){
var c__75832__auto___86237 = cljs.core.chunk_first.call(null,seq__86222_86236__$1);
var G__86238 = cljs.core.chunk_rest.call(null,seq__86222_86236__$1);
var G__86239 = c__75832__auto___86237;
var G__86240 = cljs.core.count.call(null,c__75832__auto___86237);
var G__86241 = (0);
seq__86222_86226 = G__86238;
chunk__86223_86227 = G__86239;
count__86224_86228 = G__86240;
i__86225_86229 = G__86241;
continue;
} else {
var ns_86242 = cljs.core.first.call(null,seq__86222_86236__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_86242);

var G__86243 = cljs.core.next.call(null,seq__86222_86236__$1);
var G__86244 = null;
var G__86245 = (0);
var G__86246 = (0);
seq__86222_86226 = G__86243;
chunk__86223_86227 = G__86244;
count__86224_86228 = G__86245;
i__86225_86229 = G__86246;
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
goog.require_figwheel_backup_ = (function (){var or__74901__auto__ = goog.require__;
if(cljs.core.truth_(or__74901__auto__)){
return or__74901__auto__;
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
var G__86247__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__86247 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__86248__i = 0, G__86248__a = new Array(arguments.length -  0);
while (G__86248__i < G__86248__a.length) {G__86248__a[G__86248__i] = arguments[G__86248__i + 0]; ++G__86248__i;}
  args = new cljs.core.IndexedSeq(G__86248__a,0,null);
} 
return G__86247__delegate.call(this,args);};
G__86247.cljs$lang$maxFixedArity = 0;
G__86247.cljs$lang$applyTo = (function (arglist__86249){
var args = cljs.core.seq(arglist__86249);
return G__86247__delegate(args);
});
G__86247.cljs$core$IFn$_invoke$arity$variadic = G__86247__delegate;
return G__86247;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__86250_SHARP_,p2__86251_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__86250_SHARP_)].join('')),p2__86251_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__86252_SHARP_,p2__86253_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__86252_SHARP_)].join(''),p2__86253_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__86254 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__86254.addCallback(((function (G__86254){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__86254))
);

G__86254.addErrback(((function (G__86254){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__86254))
);

return G__86254;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__86255 = cljs.core._EQ_;
var expr__86256 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__86255.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__86256))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__86255,expr__86256){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__86255,expr__86256))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__86255,expr__86256){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e86258){if((e86258 instanceof Error)){
var e = e86258;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e86258;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__86255,expr__86256))
} else {
if(cljs.core.truth_(pred__86255.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__86256))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__86255.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__86256))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__86255.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__86256))){
return ((function (pred__86255,expr__86256){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e86259){if((e86259 instanceof Error)){
var e = e86259;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e86259;

}
}})());
});
;})(pred__86255,expr__86256))
} else {
return ((function (pred__86255,expr__86256){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__86255,expr__86256))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__86260,callback){
var map__86261 = p__86260;
var map__86261__$1 = ((((!((map__86261 == null)))?((((map__86261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86261.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86261):map__86261);
var file_msg = map__86261__$1;
var request_url = cljs.core.get.call(null,map__86261__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__86261,map__86261__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__86261,map__86261__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__79089__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__79089__auto__){
return (function (){
var f__79090__auto__ = (function (){var switch__78999__auto__ = ((function (c__79089__auto__){
return (function (state_86285){
var state_val_86286 = (state_86285[(1)]);
if((state_val_86286 === (7))){
var inst_86281 = (state_86285[(2)]);
var state_86285__$1 = state_86285;
var statearr_86287_86304 = state_86285__$1;
(statearr_86287_86304[(2)] = inst_86281);

(statearr_86287_86304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86286 === (1))){
var state_86285__$1 = state_86285;
var statearr_86288_86305 = state_86285__$1;
(statearr_86288_86305[(2)] = null);

(statearr_86288_86305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86286 === (4))){
var inst_86265 = (state_86285[(7)]);
var inst_86265__$1 = (state_86285[(2)]);
var state_86285__$1 = (function (){var statearr_86289 = state_86285;
(statearr_86289[(7)] = inst_86265__$1);

return statearr_86289;
})();
if(cljs.core.truth_(inst_86265__$1)){
var statearr_86290_86306 = state_86285__$1;
(statearr_86290_86306[(1)] = (5));

} else {
var statearr_86291_86307 = state_86285__$1;
(statearr_86291_86307[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86286 === (6))){
var state_86285__$1 = state_86285;
var statearr_86292_86308 = state_86285__$1;
(statearr_86292_86308[(2)] = null);

(statearr_86292_86308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86286 === (3))){
var inst_86283 = (state_86285[(2)]);
var state_86285__$1 = state_86285;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_86285__$1,inst_86283);
} else {
if((state_val_86286 === (2))){
var state_86285__$1 = state_86285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86285__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_86286 === (11))){
var inst_86277 = (state_86285[(2)]);
var state_86285__$1 = (function (){var statearr_86293 = state_86285;
(statearr_86293[(8)] = inst_86277);

return statearr_86293;
})();
var statearr_86294_86309 = state_86285__$1;
(statearr_86294_86309[(2)] = null);

(statearr_86294_86309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86286 === (9))){
var inst_86269 = (state_86285[(9)]);
var inst_86271 = (state_86285[(10)]);
var inst_86273 = inst_86271.call(null,inst_86269);
var state_86285__$1 = state_86285;
var statearr_86295_86310 = state_86285__$1;
(statearr_86295_86310[(2)] = inst_86273);

(statearr_86295_86310[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86286 === (5))){
var inst_86265 = (state_86285[(7)]);
var inst_86267 = figwheel.client.file_reloading.blocking_load.call(null,inst_86265);
var state_86285__$1 = state_86285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86285__$1,(8),inst_86267);
} else {
if((state_val_86286 === (10))){
var inst_86269 = (state_86285[(9)]);
var inst_86275 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_86269);
var state_86285__$1 = state_86285;
var statearr_86296_86311 = state_86285__$1;
(statearr_86296_86311[(2)] = inst_86275);

(statearr_86296_86311[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86286 === (8))){
var inst_86271 = (state_86285[(10)]);
var inst_86265 = (state_86285[(7)]);
var inst_86269 = (state_86285[(2)]);
var inst_86270 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_86271__$1 = cljs.core.get.call(null,inst_86270,inst_86265);
var state_86285__$1 = (function (){var statearr_86297 = state_86285;
(statearr_86297[(9)] = inst_86269);

(statearr_86297[(10)] = inst_86271__$1);

return statearr_86297;
})();
if(cljs.core.truth_(inst_86271__$1)){
var statearr_86298_86312 = state_86285__$1;
(statearr_86298_86312[(1)] = (9));

} else {
var statearr_86299_86313 = state_86285__$1;
(statearr_86299_86313[(1)] = (10));

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
});})(c__79089__auto__))
;
return ((function (switch__78999__auto__,c__79089__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__79000__auto__ = null;
var figwheel$client$file_reloading$state_machine__79000__auto____0 = (function (){
var statearr_86300 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_86300[(0)] = figwheel$client$file_reloading$state_machine__79000__auto__);

(statearr_86300[(1)] = (1));

return statearr_86300;
});
var figwheel$client$file_reloading$state_machine__79000__auto____1 = (function (state_86285){
while(true){
var ret_value__79001__auto__ = (function (){try{while(true){
var result__79002__auto__ = switch__78999__auto__.call(null,state_86285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__79002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__79002__auto__;
}
break;
}
}catch (e86301){if((e86301 instanceof Object)){
var ex__79003__auto__ = e86301;
var statearr_86302_86314 = state_86285;
(statearr_86302_86314[(5)] = ex__79003__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e86301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__79001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__86315 = state_86285;
state_86285 = G__86315;
continue;
} else {
return ret_value__79001__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__79000__auto__ = function(state_86285){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__79000__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__79000__auto____1.call(this,state_86285);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__79000__auto____0;
figwheel$client$file_reloading$state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__79000__auto____1;
return figwheel$client$file_reloading$state_machine__79000__auto__;
})()
;})(switch__78999__auto__,c__79089__auto__))
})();
var state__79091__auto__ = (function (){var statearr_86303 = f__79090__auto__.call(null);
(statearr_86303[(6)] = c__79089__auto__);

return statearr_86303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__79091__auto__);
});})(c__79089__auto__))
);

return c__79089__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__86316,callback){
var map__86317 = p__86316;
var map__86317__$1 = ((((!((map__86317 == null)))?((((map__86317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86317.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86317):map__86317);
var file_msg = map__86317__$1;
var namespace = cljs.core.get.call(null,map__86317__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__86317,map__86317__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__86317,map__86317__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__86319){
var map__86320 = p__86319;
var map__86320__$1 = ((((!((map__86320 == null)))?((((map__86320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86320.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86320):map__86320);
var file_msg = map__86320__$1;
var namespace = cljs.core.get.call(null,map__86320__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__86322){
var map__86323 = p__86322;
var map__86323__$1 = ((((!((map__86323 == null)))?((((map__86323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86323.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86323):map__86323);
var file_msg = map__86323__$1;
var namespace = cljs.core.get.call(null,map__86323__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__74889__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__74889__auto__){
var or__74901__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__74901__auto__)){
return or__74901__auto__;
} else {
var or__74901__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__74901__auto____$1)){
return or__74901__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__74889__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__86325,callback){
var map__86326 = p__86325;
var map__86326__$1 = ((((!((map__86326 == null)))?((((map__86326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86326.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86326):map__86326);
var file_msg = map__86326__$1;
var request_url = cljs.core.get.call(null,map__86326__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__86326__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__79089__auto___86376 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__79089__auto___86376,out){
return (function (){
var f__79090__auto__ = (function (){var switch__78999__auto__ = ((function (c__79089__auto___86376,out){
return (function (state_86361){
var state_val_86362 = (state_86361[(1)]);
if((state_val_86362 === (1))){
var inst_86335 = cljs.core.seq.call(null,files);
var inst_86336 = cljs.core.first.call(null,inst_86335);
var inst_86337 = cljs.core.next.call(null,inst_86335);
var inst_86338 = files;
var state_86361__$1 = (function (){var statearr_86363 = state_86361;
(statearr_86363[(7)] = inst_86338);

(statearr_86363[(8)] = inst_86336);

(statearr_86363[(9)] = inst_86337);

return statearr_86363;
})();
var statearr_86364_86377 = state_86361__$1;
(statearr_86364_86377[(2)] = null);

(statearr_86364_86377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86362 === (2))){
var inst_86338 = (state_86361[(7)]);
var inst_86344 = (state_86361[(10)]);
var inst_86343 = cljs.core.seq.call(null,inst_86338);
var inst_86344__$1 = cljs.core.first.call(null,inst_86343);
var inst_86345 = cljs.core.next.call(null,inst_86343);
var inst_86346 = (inst_86344__$1 == null);
var inst_86347 = cljs.core.not.call(null,inst_86346);
var state_86361__$1 = (function (){var statearr_86365 = state_86361;
(statearr_86365[(11)] = inst_86345);

(statearr_86365[(10)] = inst_86344__$1);

return statearr_86365;
})();
if(inst_86347){
var statearr_86366_86378 = state_86361__$1;
(statearr_86366_86378[(1)] = (4));

} else {
var statearr_86367_86379 = state_86361__$1;
(statearr_86367_86379[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86362 === (3))){
var inst_86359 = (state_86361[(2)]);
var state_86361__$1 = state_86361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_86361__$1,inst_86359);
} else {
if((state_val_86362 === (4))){
var inst_86344 = (state_86361[(10)]);
var inst_86349 = figwheel.client.file_reloading.reload_js_file.call(null,inst_86344);
var state_86361__$1 = state_86361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86361__$1,(7),inst_86349);
} else {
if((state_val_86362 === (5))){
var inst_86355 = cljs.core.async.close_BANG_.call(null,out);
var state_86361__$1 = state_86361;
var statearr_86368_86380 = state_86361__$1;
(statearr_86368_86380[(2)] = inst_86355);

(statearr_86368_86380[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86362 === (6))){
var inst_86357 = (state_86361[(2)]);
var state_86361__$1 = state_86361;
var statearr_86369_86381 = state_86361__$1;
(statearr_86369_86381[(2)] = inst_86357);

(statearr_86369_86381[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86362 === (7))){
var inst_86345 = (state_86361[(11)]);
var inst_86351 = (state_86361[(2)]);
var inst_86352 = cljs.core.async.put_BANG_.call(null,out,inst_86351);
var inst_86338 = inst_86345;
var state_86361__$1 = (function (){var statearr_86370 = state_86361;
(statearr_86370[(12)] = inst_86352);

(statearr_86370[(7)] = inst_86338);

return statearr_86370;
})();
var statearr_86371_86382 = state_86361__$1;
(statearr_86371_86382[(2)] = null);

(statearr_86371_86382[(1)] = (2));


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
});})(c__79089__auto___86376,out))
;
return ((function (switch__78999__auto__,c__79089__auto___86376,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__79000__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__79000__auto____0 = (function (){
var statearr_86372 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_86372[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__79000__auto__);

(statearr_86372[(1)] = (1));

return statearr_86372;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__79000__auto____1 = (function (state_86361){
while(true){
var ret_value__79001__auto__ = (function (){try{while(true){
var result__79002__auto__ = switch__78999__auto__.call(null,state_86361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__79002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__79002__auto__;
}
break;
}
}catch (e86373){if((e86373 instanceof Object)){
var ex__79003__auto__ = e86373;
var statearr_86374_86383 = state_86361;
(statearr_86374_86383[(5)] = ex__79003__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e86373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__79001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__86384 = state_86361;
state_86361 = G__86384;
continue;
} else {
return ret_value__79001__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__79000__auto__ = function(state_86361){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__79000__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__79000__auto____1.call(this,state_86361);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__79000__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__79000__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__79000__auto__;
})()
;})(switch__78999__auto__,c__79089__auto___86376,out))
})();
var state__79091__auto__ = (function (){var statearr_86375 = f__79090__auto__.call(null);
(statearr_86375[(6)] = c__79089__auto___86376);

return statearr_86375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__79091__auto__);
});})(c__79089__auto___86376,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__86385,opts){
var map__86386 = p__86385;
var map__86386__$1 = ((((!((map__86386 == null)))?((((map__86386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86386.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86386):map__86386);
var eval_body = cljs.core.get.call(null,map__86386__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__86386__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__74889__auto__ = eval_body;
if(cljs.core.truth_(and__74889__auto__)){
return typeof eval_body === 'string';
} else {
return and__74889__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e86388){var e = e86388;
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
return (function (p1__86389_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__86389_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__86390){
var vec__86391 = p__86390;
var k = cljs.core.nth.call(null,vec__86391,(0),null);
var v = cljs.core.nth.call(null,vec__86391,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__86394){
var vec__86395 = p__86394;
var k = cljs.core.nth.call(null,vec__86395,(0),null);
var v = cljs.core.nth.call(null,vec__86395,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__86401,p__86402){
var map__86403 = p__86401;
var map__86403__$1 = ((((!((map__86403 == null)))?((((map__86403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86403.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86403):map__86403);
var opts = map__86403__$1;
var before_jsload = cljs.core.get.call(null,map__86403__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__86403__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__86403__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__86404 = p__86402;
var map__86404__$1 = ((((!((map__86404 == null)))?((((map__86404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86404.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86404):map__86404);
var msg = map__86404__$1;
var files = cljs.core.get.call(null,map__86404__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__86404__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__86404__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__79089__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__79089__auto__,map__86403,map__86403__$1,opts,before_jsload,on_jsload,reload_dependents,map__86404,map__86404__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__79090__auto__ = (function (){var switch__78999__auto__ = ((function (c__79089__auto__,map__86403,map__86403__$1,opts,before_jsload,on_jsload,reload_dependents,map__86404,map__86404__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_86558){
var state_val_86559 = (state_86558[(1)]);
if((state_val_86559 === (7))){
var inst_86421 = (state_86558[(7)]);
var inst_86418 = (state_86558[(8)]);
var inst_86420 = (state_86558[(9)]);
var inst_86419 = (state_86558[(10)]);
var inst_86426 = cljs.core._nth.call(null,inst_86419,inst_86421);
var inst_86427 = figwheel.client.file_reloading.eval_body.call(null,inst_86426,opts);
var inst_86428 = (inst_86421 + (1));
var tmp86560 = inst_86418;
var tmp86561 = inst_86420;
var tmp86562 = inst_86419;
var inst_86418__$1 = tmp86560;
var inst_86419__$1 = tmp86562;
var inst_86420__$1 = tmp86561;
var inst_86421__$1 = inst_86428;
var state_86558__$1 = (function (){var statearr_86563 = state_86558;
(statearr_86563[(7)] = inst_86421__$1);

(statearr_86563[(11)] = inst_86427);

(statearr_86563[(8)] = inst_86418__$1);

(statearr_86563[(9)] = inst_86420__$1);

(statearr_86563[(10)] = inst_86419__$1);

return statearr_86563;
})();
var statearr_86564_86647 = state_86558__$1;
(statearr_86564_86647[(2)] = null);

(statearr_86564_86647[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86559 === (20))){
var inst_86461 = (state_86558[(12)]);
var inst_86469 = figwheel.client.file_reloading.sort_files.call(null,inst_86461);
var state_86558__$1 = state_86558;
var statearr_86565_86648 = state_86558__$1;
(statearr_86565_86648[(2)] = inst_86469);

(statearr_86565_86648[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86559 === (27))){
var state_86558__$1 = state_86558;
var statearr_86566_86649 = state_86558__$1;
(statearr_86566_86649[(2)] = null);

(statearr_86566_86649[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86559 === (1))){
var inst_86410 = (state_86558[(13)]);
var inst_86407 = before_jsload.call(null,files);
var inst_86408 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_86409 = (function (){return ((function (inst_86410,inst_86407,inst_86408,state_val_86559,c__79089__auto__,map__86403,map__86403__$1,opts,before_jsload,on_jsload,reload_dependents,map__86404,map__86404__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__86398_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__86398_SHARP_);
});
;})(inst_86410,inst_86407,inst_86408,state_val_86559,c__79089__auto__,map__86403,map__86403__$1,opts,before_jsload,on_jsload,reload_dependents,map__86404,map__86404__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_86410__$1 = cljs.core.filter.call(null,inst_86409,files);
var inst_86411 = cljs.core.not_empty.call(null,inst_86410__$1);
var state_86558__$1 = (function (){var statearr_86567 = state_86558;
(statearr_86567[(13)] = inst_86410__$1);

(statearr_86567[(14)] = inst_86407);

(statearr_86567[(15)] = inst_86408);

return statearr_86567;
})();
if(cljs.core.truth_(inst_86411)){
var statearr_86568_86650 = state_86558__$1;
(statearr_86568_86650[(1)] = (2));

} else {
var statearr_86569_86651 = state_86558__$1;
(statearr_86569_86651[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86559 === (24))){
var state_86558__$1 = state_86558;
var statearr_86570_86652 = state_86558__$1;
(statearr_86570_86652[(2)] = null);

(statearr_86570_86652[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86559 === (39))){
var inst_86511 = (state_86558[(16)]);
var state_86558__$1 = state_86558;
var statearr_86571_86653 = state_86558__$1;
(statearr_86571_86653[(2)] = inst_86511);

(statearr_86571_86653[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86559 === (46))){
var inst_86553 = (state_86558[(2)]);
var state_86558__$1 = state_86558;
var statearr_86572_86654 = state_86558__$1;
(statearr_86572_86654[(2)] = inst_86553);

(statearr_86572_86654[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86559 === (4))){
var inst_86455 = (state_86558[(2)]);
var inst_86456 = cljs.core.List.EMPTY;
var inst_86457 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_86456);
var inst_86458 = (function (){return ((function (inst_86455,inst_86456,inst_86457,state_val_86559,c__79089__auto__,map__86403,map__86403__$1,opts,before_jsload,on_jsload,reload_dependents,map__86404,map__86404__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__86399_SHARP_){
var and__74889__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__86399_SHARP_);
if(cljs.core.truth_(and__74889__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__86399_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__86399_SHARP_)));
} else {
return and__74889__auto__;
}
});
;})(inst_86455,inst_86456,inst_86457,state_val_86559,c__79089__auto__,map__86403,map__86403__$1,opts,before_jsload,on_jsload,reload_dependents,map__86404,map__86404__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_86459 = cljs.core.filter.call(null,inst_86458,files);
var inst_86460 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_86461 = cljs.core.concat.call(null,inst_86459,inst_86460);
var state_86558__$1 = (function (){var statearr_86573 = state_86558;
(statearr_86573[(17)] = inst_86455);

(statearr_86573[(12)] = inst_86461);

(statearr_86573[(18)] = inst_86457);

return statearr_86573;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_86574_86655 = state_86558__$1;
(statearr_86574_86655[(1)] = (16));

} else {
var statearr_86575_86656 = state_86558__$1;
(statearr_86575_86656[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86559 === (15))){
var inst_86445 = (state_86558[(2)]);
var state_86558__$1 = state_86558;
var statearr_86576_86657 = state_86558__$1;
(statearr_86576_86657[(2)] = inst_86445);

(statearr_86576_86657[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86559 === (21))){
var inst_86471 = (state_86558[(19)]);
var inst_86471__$1 = (state_86558[(2)]);
var inst_86472 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_86471__$1);
var state_86558__$1 = (function (){var statearr_86577 = state_86558;
(statearr_86577[(19)] = inst_86471__$1);

return statearr_86577;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86558__$1,(22),inst_86472);
} else {
if((state_val_86559 === (31))){
var inst_86556 = (state_86558[(2)]);
var state_86558__$1 = state_86558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_86558__$1,inst_86556);
} else {
if((state_val_86559 === (32))){
var inst_86511 = (state_86558[(16)]);
var inst_86516 = inst_86511.cljs$lang$protocol_mask$partition0$;
var inst_86517 = (inst_86516 & (64));
var inst_86518 = inst_86511.cljs$core$ISeq$;
var inst_86519 = (cljs.core.PROTOCOL_SENTINEL === inst_86518);
var inst_86520 = (inst_86517) || (inst_86519);
var state_86558__$1 = state_86558;
if(cljs.core.truth_(inst_86520)){
var statearr_86578_86658 = state_86558__$1;
(statearr_86578_86658[(1)] = (35));

} else {
var statearr_86579_86659 = state_86558__$1;
(statearr_86579_86659[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86559 === (40))){
var inst_86533 = (state_86558[(20)]);
var inst_86532 = (state_86558[(2)]);
var inst_86533__$1 = cljs.core.get.call(null,inst_86532,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_86534 = cljs.core.get.call(null,inst_86532,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_86535 = cljs.core.not_empty.call(null,inst_86533__$1);
var state_86558__$1 = (function (){var statearr_86580 = state_86558;
(statearr_86580[(20)] = inst_86533__$1);

(statearr_86580[(21)] = inst_86534);

return statearr_86580;
})();
if(cljs.core.truth_(inst_86535)){
var statearr_86581_86660 = state_86558__$1;
(statearr_86581_86660[(1)] = (41));

} else {
var statearr_86582_86661 = state_86558__$1;
(statearr_86582_86661[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86559 === (33))){
var state_86558__$1 = state_86558;
var statearr_86583_86662 = state_86558__$1;
(statearr_86583_86662[(2)] = false);

(statearr_86583_86662[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86559 === (13))){
var inst_86431 = (state_86558[(22)]);
var inst_86435 = cljs.core.chunk_first.call(null,inst_86431);
var inst_86436 = cljs.core.chunk_rest.call(null,inst_86431);
var inst_86437 = cljs.core.count.call(null,inst_86435);
var inst_86418 = inst_86436;
var inst_86419 = inst_86435;
var inst_86420 = inst_86437;
var inst_86421 = (0);
var state_86558__$1 = (function (){var statearr_86584 = state_86558;
(statearr_86584[(7)] = inst_86421);

(statearr_86584[(8)] = inst_86418);

(statearr_86584[(9)] = inst_86420);

(statearr_86584[(10)] = inst_86419);

return statearr_86584;
})();
var statearr_86585_86663 = state_86558__$1;
(statearr_86585_86663[(2)] = null);

(statearr_86585_86663[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86559 === (22))){
var inst_86471 = (state_86558[(19)]);
var inst_86475 = (state_86558[(23)]);
var inst_86479 = (state_86558[(24)]);
var inst_86474 = (state_86558[(25)]);
var inst_86474__$1 = (state_86558[(2)]);
var inst_86475__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_86474__$1);
var inst_86476 = (function (){var all_files = inst_86471;
var res_SINGLEQUOTE_ = inst_86474__$1;
var res = inst_86475__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_86471,inst_86475,inst_86479,inst_86474,inst_86474__$1,inst_86475__$1,state_val_86559,c__79089__auto__,map__86403,map__86403__$1,opts,before_jsload,on_jsload,reload_dependents,map__86404,map__86404__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__86400_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__86400_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_86471,inst_86475,inst_86479,inst_86474,inst_86474__$1,inst_86475__$1,state_val_86559,c__79089__auto__,map__86403,map__86403__$1,opts,before_jsload,on_jsload,reload_dependents,map__86404,map__86404__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_86477 = cljs.core.filter.call(null,inst_86476,inst_86474__$1);
var inst_86478 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_86479__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_86478);
var inst_86480 = cljs.core.not_empty.call(null,inst_86479__$1);
var state_86558__$1 = (function (){var statearr_86586 = state_86558;
(statearr_86586[(26)] = inst_86477);

(statearr_86586[(23)] = inst_86475__$1);

(statearr_86586[(24)] = inst_86479__$1);

(statearr_86586[(25)] = inst_86474__$1);

return statearr_86586;
})();
if(cljs.core.truth_(inst_86480)){
var statearr_86587_86664 = state_86558__$1;
(statearr_86587_86664[(1)] = (23));

} else {
var statearr_86588_86665 = state_86558__$1;
(statearr_86588_86665[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86559 === (36))){
var state_86558__$1 = state_86558;
var statearr_86589_86666 = state_86558__$1;
(statearr_86589_86666[(2)] = false);

(statearr_86589_86666[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86559 === (41))){
var inst_86533 = (state_86558[(20)]);
var inst_86537 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_86538 = cljs.core.map.call(null,inst_86537,inst_86533);
var inst_86539 = cljs.core.pr_str.call(null,inst_86538);
var inst_86540 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_86539)].join('');
var inst_86541 = figwheel.client.utils.log.call(null,inst_86540);
var state_86558__$1 = state_86558;
var statearr_86590_86667 = state_86558__$1;
(statearr_86590_86667[(2)] = inst_86541);

(statearr_86590_86667[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86559 === (43))){
var inst_86534 = (state_86558[(21)]);
var inst_86544 = (state_86558[(2)]);
var inst_86545 = cljs.core.not_empty.call(null,inst_86534);
var state_86558__$1 = (function (){var statearr_86591 = state_86558;
(statearr_86591[(27)] = inst_86544);

return statearr_86591;
})();
if(cljs.core.truth_(inst_86545)){
var statearr_86592_86668 = state_86558__$1;
(statearr_86592_86668[(1)] = (44));

} else {
var statearr_86593_86669 = state_86558__$1;
(statearr_86593_86669[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86559 === (29))){
var inst_86471 = (state_86558[(19)]);
var inst_86477 = (state_86558[(26)]);
var inst_86511 = (state_86558[(16)]);
var inst_86475 = (state_86558[(23)]);
var inst_86479 = (state_86558[(24)]);
var inst_86474 = (state_86558[(25)]);
var inst_86507 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_86510 = (function (){var all_files = inst_86471;
var res_SINGLEQUOTE_ = inst_86474;
var res = inst_86475;
var files_not_loaded = inst_86477;
var dependencies_that_loaded = inst_86479;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_86471,inst_86477,inst_86511,inst_86475,inst_86479,inst_86474,inst_86507,state_val_86559,c__79089__auto__,map__86403,map__86403__$1,opts,before_jsload,on_jsload,reload_dependents,map__86404,map__86404__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__86509){
var map__86594 = p__86509;
var map__86594__$1 = ((((!((map__86594 == null)))?((((map__86594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86594.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86594):map__86594);
var namespace = cljs.core.get.call(null,map__86594__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_86471,inst_86477,inst_86511,inst_86475,inst_86479,inst_86474,inst_86507,state_val_86559,c__79089__auto__,map__86403,map__86403__$1,opts,before_jsload,on_jsload,reload_dependents,map__86404,map__86404__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_86511__$1 = cljs.core.group_by.call(null,inst_86510,inst_86477);
var inst_86513 = (inst_86511__$1 == null);
var inst_86514 = cljs.core.not.call(null,inst_86513);
var state_86558__$1 = (function (){var statearr_86596 = state_86558;
(statearr_86596[(16)] = inst_86511__$1);

(statearr_86596[(28)] = inst_86507);

return statearr_86596;
})();
if(inst_86514){
var statearr_86597_86670 = state_86558__$1;
(statearr_86597_86670[(1)] = (32));

} else {
var statearr_86598_86671 = state_86558__$1;
(statearr_86598_86671[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86559 === (44))){
var inst_86534 = (state_86558[(21)]);
var inst_86547 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_86534);
var inst_86548 = cljs.core.pr_str.call(null,inst_86547);
var inst_86549 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_86548)].join('');
var inst_86550 = figwheel.client.utils.log.call(null,inst_86549);
var state_86558__$1 = state_86558;
var statearr_86599_86672 = state_86558__$1;
(statearr_86599_86672[(2)] = inst_86550);

(statearr_86599_86672[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86559 === (6))){
var inst_86452 = (state_86558[(2)]);
var state_86558__$1 = state_86558;
var statearr_86600_86673 = state_86558__$1;
(statearr_86600_86673[(2)] = inst_86452);

(statearr_86600_86673[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86559 === (28))){
var inst_86477 = (state_86558[(26)]);
var inst_86504 = (state_86558[(2)]);
var inst_86505 = cljs.core.not_empty.call(null,inst_86477);
var state_86558__$1 = (function (){var statearr_86601 = state_86558;
(statearr_86601[(29)] = inst_86504);

return statearr_86601;
})();
if(cljs.core.truth_(inst_86505)){
var statearr_86602_86674 = state_86558__$1;
(statearr_86602_86674[(1)] = (29));

} else {
var statearr_86603_86675 = state_86558__$1;
(statearr_86603_86675[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86559 === (25))){
var inst_86475 = (state_86558[(23)]);
var inst_86491 = (state_86558[(2)]);
var inst_86492 = cljs.core.not_empty.call(null,inst_86475);
var state_86558__$1 = (function (){var statearr_86604 = state_86558;
(statearr_86604[(30)] = inst_86491);

return statearr_86604;
})();
if(cljs.core.truth_(inst_86492)){
var statearr_86605_86676 = state_86558__$1;
(statearr_86605_86676[(1)] = (26));

} else {
var statearr_86606_86677 = state_86558__$1;
(statearr_86606_86677[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86559 === (34))){
var inst_86527 = (state_86558[(2)]);
var state_86558__$1 = state_86558;
if(cljs.core.truth_(inst_86527)){
var statearr_86607_86678 = state_86558__$1;
(statearr_86607_86678[(1)] = (38));

} else {
var statearr_86608_86679 = state_86558__$1;
(statearr_86608_86679[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86559 === (17))){
var state_86558__$1 = state_86558;
var statearr_86609_86680 = state_86558__$1;
(statearr_86609_86680[(2)] = recompile_dependents);

(statearr_86609_86680[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86559 === (3))){
var state_86558__$1 = state_86558;
var statearr_86610_86681 = state_86558__$1;
(statearr_86610_86681[(2)] = null);

(statearr_86610_86681[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86559 === (12))){
var inst_86448 = (state_86558[(2)]);
var state_86558__$1 = state_86558;
var statearr_86611_86682 = state_86558__$1;
(statearr_86611_86682[(2)] = inst_86448);

(statearr_86611_86682[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86559 === (2))){
var inst_86410 = (state_86558[(13)]);
var inst_86417 = cljs.core.seq.call(null,inst_86410);
var inst_86418 = inst_86417;
var inst_86419 = null;
var inst_86420 = (0);
var inst_86421 = (0);
var state_86558__$1 = (function (){var statearr_86612 = state_86558;
(statearr_86612[(7)] = inst_86421);

(statearr_86612[(8)] = inst_86418);

(statearr_86612[(9)] = inst_86420);

(statearr_86612[(10)] = inst_86419);

return statearr_86612;
})();
var statearr_86613_86683 = state_86558__$1;
(statearr_86613_86683[(2)] = null);

(statearr_86613_86683[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86559 === (23))){
var inst_86471 = (state_86558[(19)]);
var inst_86477 = (state_86558[(26)]);
var inst_86475 = (state_86558[(23)]);
var inst_86479 = (state_86558[(24)]);
var inst_86474 = (state_86558[(25)]);
var inst_86482 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_86484 = (function (){var all_files = inst_86471;
var res_SINGLEQUOTE_ = inst_86474;
var res = inst_86475;
var files_not_loaded = inst_86477;
var dependencies_that_loaded = inst_86479;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_86471,inst_86477,inst_86475,inst_86479,inst_86474,inst_86482,state_val_86559,c__79089__auto__,map__86403,map__86403__$1,opts,before_jsload,on_jsload,reload_dependents,map__86404,map__86404__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__86483){
var map__86614 = p__86483;
var map__86614__$1 = ((((!((map__86614 == null)))?((((map__86614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86614.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86614):map__86614);
var request_url = cljs.core.get.call(null,map__86614__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_86471,inst_86477,inst_86475,inst_86479,inst_86474,inst_86482,state_val_86559,c__79089__auto__,map__86403,map__86403__$1,opts,before_jsload,on_jsload,reload_dependents,map__86404,map__86404__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_86485 = cljs.core.reverse.call(null,inst_86479);
var inst_86486 = cljs.core.map.call(null,inst_86484,inst_86485);
var inst_86487 = cljs.core.pr_str.call(null,inst_86486);
var inst_86488 = figwheel.client.utils.log.call(null,inst_86487);
var state_86558__$1 = (function (){var statearr_86616 = state_86558;
(statearr_86616[(31)] = inst_86482);

return statearr_86616;
})();
var statearr_86617_86684 = state_86558__$1;
(statearr_86617_86684[(2)] = inst_86488);

(statearr_86617_86684[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86559 === (35))){
var state_86558__$1 = state_86558;
var statearr_86618_86685 = state_86558__$1;
(statearr_86618_86685[(2)] = true);

(statearr_86618_86685[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86559 === (19))){
var inst_86461 = (state_86558[(12)]);
var inst_86467 = figwheel.client.file_reloading.expand_files.call(null,inst_86461);
var state_86558__$1 = state_86558;
var statearr_86619_86686 = state_86558__$1;
(statearr_86619_86686[(2)] = inst_86467);

(statearr_86619_86686[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86559 === (11))){
var state_86558__$1 = state_86558;
var statearr_86620_86687 = state_86558__$1;
(statearr_86620_86687[(2)] = null);

(statearr_86620_86687[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86559 === (9))){
var inst_86450 = (state_86558[(2)]);
var state_86558__$1 = state_86558;
var statearr_86621_86688 = state_86558__$1;
(statearr_86621_86688[(2)] = inst_86450);

(statearr_86621_86688[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86559 === (5))){
var inst_86421 = (state_86558[(7)]);
var inst_86420 = (state_86558[(9)]);
var inst_86423 = (inst_86421 < inst_86420);
var inst_86424 = inst_86423;
var state_86558__$1 = state_86558;
if(cljs.core.truth_(inst_86424)){
var statearr_86622_86689 = state_86558__$1;
(statearr_86622_86689[(1)] = (7));

} else {
var statearr_86623_86690 = state_86558__$1;
(statearr_86623_86690[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86559 === (14))){
var inst_86431 = (state_86558[(22)]);
var inst_86440 = cljs.core.first.call(null,inst_86431);
var inst_86441 = figwheel.client.file_reloading.eval_body.call(null,inst_86440,opts);
var inst_86442 = cljs.core.next.call(null,inst_86431);
var inst_86418 = inst_86442;
var inst_86419 = null;
var inst_86420 = (0);
var inst_86421 = (0);
var state_86558__$1 = (function (){var statearr_86624 = state_86558;
(statearr_86624[(32)] = inst_86441);

(statearr_86624[(7)] = inst_86421);

(statearr_86624[(8)] = inst_86418);

(statearr_86624[(9)] = inst_86420);

(statearr_86624[(10)] = inst_86419);

return statearr_86624;
})();
var statearr_86625_86691 = state_86558__$1;
(statearr_86625_86691[(2)] = null);

(statearr_86625_86691[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86559 === (45))){
var state_86558__$1 = state_86558;
var statearr_86626_86692 = state_86558__$1;
(statearr_86626_86692[(2)] = null);

(statearr_86626_86692[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86559 === (26))){
var inst_86471 = (state_86558[(19)]);
var inst_86477 = (state_86558[(26)]);
var inst_86475 = (state_86558[(23)]);
var inst_86479 = (state_86558[(24)]);
var inst_86474 = (state_86558[(25)]);
var inst_86494 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_86496 = (function (){var all_files = inst_86471;
var res_SINGLEQUOTE_ = inst_86474;
var res = inst_86475;
var files_not_loaded = inst_86477;
var dependencies_that_loaded = inst_86479;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_86471,inst_86477,inst_86475,inst_86479,inst_86474,inst_86494,state_val_86559,c__79089__auto__,map__86403,map__86403__$1,opts,before_jsload,on_jsload,reload_dependents,map__86404,map__86404__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__86495){
var map__86627 = p__86495;
var map__86627__$1 = ((((!((map__86627 == null)))?((((map__86627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86627.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86627):map__86627);
var namespace = cljs.core.get.call(null,map__86627__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__86627__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_86471,inst_86477,inst_86475,inst_86479,inst_86474,inst_86494,state_val_86559,c__79089__auto__,map__86403,map__86403__$1,opts,before_jsload,on_jsload,reload_dependents,map__86404,map__86404__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_86497 = cljs.core.map.call(null,inst_86496,inst_86475);
var inst_86498 = cljs.core.pr_str.call(null,inst_86497);
var inst_86499 = figwheel.client.utils.log.call(null,inst_86498);
var inst_86500 = (function (){var all_files = inst_86471;
var res_SINGLEQUOTE_ = inst_86474;
var res = inst_86475;
var files_not_loaded = inst_86477;
var dependencies_that_loaded = inst_86479;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_86471,inst_86477,inst_86475,inst_86479,inst_86474,inst_86494,inst_86496,inst_86497,inst_86498,inst_86499,state_val_86559,c__79089__auto__,map__86403,map__86403__$1,opts,before_jsload,on_jsload,reload_dependents,map__86404,map__86404__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_86471,inst_86477,inst_86475,inst_86479,inst_86474,inst_86494,inst_86496,inst_86497,inst_86498,inst_86499,state_val_86559,c__79089__auto__,map__86403,map__86403__$1,opts,before_jsload,on_jsload,reload_dependents,map__86404,map__86404__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_86501 = setTimeout(inst_86500,(10));
var state_86558__$1 = (function (){var statearr_86629 = state_86558;
(statearr_86629[(33)] = inst_86494);

(statearr_86629[(34)] = inst_86499);

return statearr_86629;
})();
var statearr_86630_86693 = state_86558__$1;
(statearr_86630_86693[(2)] = inst_86501);

(statearr_86630_86693[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86559 === (16))){
var state_86558__$1 = state_86558;
var statearr_86631_86694 = state_86558__$1;
(statearr_86631_86694[(2)] = reload_dependents);

(statearr_86631_86694[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86559 === (38))){
var inst_86511 = (state_86558[(16)]);
var inst_86529 = cljs.core.apply.call(null,cljs.core.hash_map,inst_86511);
var state_86558__$1 = state_86558;
var statearr_86632_86695 = state_86558__$1;
(statearr_86632_86695[(2)] = inst_86529);

(statearr_86632_86695[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86559 === (30))){
var state_86558__$1 = state_86558;
var statearr_86633_86696 = state_86558__$1;
(statearr_86633_86696[(2)] = null);

(statearr_86633_86696[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86559 === (10))){
var inst_86431 = (state_86558[(22)]);
var inst_86433 = cljs.core.chunked_seq_QMARK_.call(null,inst_86431);
var state_86558__$1 = state_86558;
if(inst_86433){
var statearr_86634_86697 = state_86558__$1;
(statearr_86634_86697[(1)] = (13));

} else {
var statearr_86635_86698 = state_86558__$1;
(statearr_86635_86698[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86559 === (18))){
var inst_86465 = (state_86558[(2)]);
var state_86558__$1 = state_86558;
if(cljs.core.truth_(inst_86465)){
var statearr_86636_86699 = state_86558__$1;
(statearr_86636_86699[(1)] = (19));

} else {
var statearr_86637_86700 = state_86558__$1;
(statearr_86637_86700[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86559 === (42))){
var state_86558__$1 = state_86558;
var statearr_86638_86701 = state_86558__$1;
(statearr_86638_86701[(2)] = null);

(statearr_86638_86701[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86559 === (37))){
var inst_86524 = (state_86558[(2)]);
var state_86558__$1 = state_86558;
var statearr_86639_86702 = state_86558__$1;
(statearr_86639_86702[(2)] = inst_86524);

(statearr_86639_86702[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86559 === (8))){
var inst_86431 = (state_86558[(22)]);
var inst_86418 = (state_86558[(8)]);
var inst_86431__$1 = cljs.core.seq.call(null,inst_86418);
var state_86558__$1 = (function (){var statearr_86640 = state_86558;
(statearr_86640[(22)] = inst_86431__$1);

return statearr_86640;
})();
if(inst_86431__$1){
var statearr_86641_86703 = state_86558__$1;
(statearr_86641_86703[(1)] = (10));

} else {
var statearr_86642_86704 = state_86558__$1;
(statearr_86642_86704[(1)] = (11));

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
});})(c__79089__auto__,map__86403,map__86403__$1,opts,before_jsload,on_jsload,reload_dependents,map__86404,map__86404__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__78999__auto__,c__79089__auto__,map__86403,map__86403__$1,opts,before_jsload,on_jsload,reload_dependents,map__86404,map__86404__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__79000__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__79000__auto____0 = (function (){
var statearr_86643 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_86643[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__79000__auto__);

(statearr_86643[(1)] = (1));

return statearr_86643;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__79000__auto____1 = (function (state_86558){
while(true){
var ret_value__79001__auto__ = (function (){try{while(true){
var result__79002__auto__ = switch__78999__auto__.call(null,state_86558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__79002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__79002__auto__;
}
break;
}
}catch (e86644){if((e86644 instanceof Object)){
var ex__79003__auto__ = e86644;
var statearr_86645_86705 = state_86558;
(statearr_86645_86705[(5)] = ex__79003__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e86644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__79001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__86706 = state_86558;
state_86558 = G__86706;
continue;
} else {
return ret_value__79001__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__79000__auto__ = function(state_86558){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__79000__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__79000__auto____1.call(this,state_86558);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__79000__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__79000__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__79000__auto__;
})()
;})(switch__78999__auto__,c__79089__auto__,map__86403,map__86403__$1,opts,before_jsload,on_jsload,reload_dependents,map__86404,map__86404__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__79091__auto__ = (function (){var statearr_86646 = f__79090__auto__.call(null);
(statearr_86646[(6)] = c__79089__auto__);

return statearr_86646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__79091__auto__);
});})(c__79089__auto__,map__86403,map__86403__$1,opts,before_jsload,on_jsload,reload_dependents,map__86404,map__86404__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__79089__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__86709,link){
var map__86710 = p__86709;
var map__86710__$1 = ((((!((map__86710 == null)))?((((map__86710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86710.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86710):map__86710);
var file = cljs.core.get.call(null,map__86710__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__86710,map__86710__$1,file){
return (function (p1__86707_SHARP_,p2__86708_SHARP_){
if(cljs.core._EQ_.call(null,p1__86707_SHARP_,p2__86708_SHARP_)){
return p1__86707_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__86710,map__86710__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__86713){
var map__86714 = p__86713;
var map__86714__$1 = ((((!((map__86714 == null)))?((((map__86714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86714.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86714):map__86714);
var match_length = cljs.core.get.call(null,map__86714__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__86714__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__86712_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__86712_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__86716_SHARP_,p2__86717_SHARP_){
return cljs.core.assoc.call(null,p1__86716_SHARP_,cljs.core.get.call(null,p2__86717_SHARP_,key),p2__86717_SHARP_);
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
var loaded_f_datas_86718 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_86718);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_86718);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__86719,p__86720){
var map__86721 = p__86719;
var map__86721__$1 = ((((!((map__86721 == null)))?((((map__86721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86721.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86721):map__86721);
var on_cssload = cljs.core.get.call(null,map__86721__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__86722 = p__86720;
var map__86722__$1 = ((((!((map__86722 == null)))?((((map__86722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86722.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86722):map__86722);
var files_msg = map__86722__$1;
var files = cljs.core.get.call(null,map__86722__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1515122959698
