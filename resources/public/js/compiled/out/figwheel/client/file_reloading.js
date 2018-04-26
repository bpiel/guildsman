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
var or__52970__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__52970__auto__){
return or__52970__auto__;
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
var or__52970__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__52970__auto__)){
return or__52970__auto__;
} else {
var or__52970__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__52970__auto____$1)){
return or__52970__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__65075_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__65075_SHARP_));
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
var seq__65076 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__65077 = null;
var count__65078 = (0);
var i__65079 = (0);
while(true){
if((i__65079 < count__65078)){
var n = cljs.core._nth.call(null,chunk__65077,i__65079);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__65080 = seq__65076;
var G__65081 = chunk__65077;
var G__65082 = count__65078;
var G__65083 = (i__65079 + (1));
seq__65076 = G__65080;
chunk__65077 = G__65081;
count__65078 = G__65082;
i__65079 = G__65083;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__65076);
if(temp__5457__auto__){
var seq__65076__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65076__$1)){
var c__53901__auto__ = cljs.core.chunk_first.call(null,seq__65076__$1);
var G__65084 = cljs.core.chunk_rest.call(null,seq__65076__$1);
var G__65085 = c__53901__auto__;
var G__65086 = cljs.core.count.call(null,c__53901__auto__);
var G__65087 = (0);
seq__65076 = G__65084;
chunk__65077 = G__65085;
count__65078 = G__65086;
i__65079 = G__65087;
continue;
} else {
var n = cljs.core.first.call(null,seq__65076__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__65088 = cljs.core.next.call(null,seq__65076__$1);
var G__65089 = null;
var G__65090 = (0);
var G__65091 = (0);
seq__65076 = G__65088;
chunk__65077 = G__65089;
count__65078 = G__65090;
i__65079 = G__65091;
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

var seq__65101_65109 = cljs.core.seq.call(null,deps);
var chunk__65102_65110 = null;
var count__65103_65111 = (0);
var i__65104_65112 = (0);
while(true){
if((i__65104_65112 < count__65103_65111)){
var dep_65113 = cljs.core._nth.call(null,chunk__65102_65110,i__65104_65112);
topo_sort_helper_STAR_.call(null,dep_65113,(depth + (1)),state);

var G__65114 = seq__65101_65109;
var G__65115 = chunk__65102_65110;
var G__65116 = count__65103_65111;
var G__65117 = (i__65104_65112 + (1));
seq__65101_65109 = G__65114;
chunk__65102_65110 = G__65115;
count__65103_65111 = G__65116;
i__65104_65112 = G__65117;
continue;
} else {
var temp__5457__auto___65118 = cljs.core.seq.call(null,seq__65101_65109);
if(temp__5457__auto___65118){
var seq__65101_65119__$1 = temp__5457__auto___65118;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65101_65119__$1)){
var c__53901__auto___65120 = cljs.core.chunk_first.call(null,seq__65101_65119__$1);
var G__65121 = cljs.core.chunk_rest.call(null,seq__65101_65119__$1);
var G__65122 = c__53901__auto___65120;
var G__65123 = cljs.core.count.call(null,c__53901__auto___65120);
var G__65124 = (0);
seq__65101_65109 = G__65121;
chunk__65102_65110 = G__65122;
count__65103_65111 = G__65123;
i__65104_65112 = G__65124;
continue;
} else {
var dep_65125 = cljs.core.first.call(null,seq__65101_65119__$1);
topo_sort_helper_STAR_.call(null,dep_65125,(depth + (1)),state);

var G__65126 = cljs.core.next.call(null,seq__65101_65119__$1);
var G__65127 = null;
var G__65128 = (0);
var G__65129 = (0);
seq__65101_65109 = G__65126;
chunk__65102_65110 = G__65127;
count__65103_65111 = G__65128;
i__65104_65112 = G__65129;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__65105){
var vec__65106 = p__65105;
var seq__65107 = cljs.core.seq.call(null,vec__65106);
var first__65108 = cljs.core.first.call(null,seq__65107);
var seq__65107__$1 = cljs.core.next.call(null,seq__65107);
var x = first__65108;
var xs = seq__65107__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__65106,seq__65107,first__65108,seq__65107__$1,x,xs,get_deps__$1){
return (function (p1__65092_SHARP_){
return clojure.set.difference.call(null,p1__65092_SHARP_,x);
});})(vec__65106,seq__65107,first__65108,seq__65107__$1,x,xs,get_deps__$1))
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
var seq__65130 = cljs.core.seq.call(null,provides);
var chunk__65131 = null;
var count__65132 = (0);
var i__65133 = (0);
while(true){
if((i__65133 < count__65132)){
var prov = cljs.core._nth.call(null,chunk__65131,i__65133);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__65134_65142 = cljs.core.seq.call(null,requires);
var chunk__65135_65143 = null;
var count__65136_65144 = (0);
var i__65137_65145 = (0);
while(true){
if((i__65137_65145 < count__65136_65144)){
var req_65146 = cljs.core._nth.call(null,chunk__65135_65143,i__65137_65145);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_65146,prov);

var G__65147 = seq__65134_65142;
var G__65148 = chunk__65135_65143;
var G__65149 = count__65136_65144;
var G__65150 = (i__65137_65145 + (1));
seq__65134_65142 = G__65147;
chunk__65135_65143 = G__65148;
count__65136_65144 = G__65149;
i__65137_65145 = G__65150;
continue;
} else {
var temp__5457__auto___65151 = cljs.core.seq.call(null,seq__65134_65142);
if(temp__5457__auto___65151){
var seq__65134_65152__$1 = temp__5457__auto___65151;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65134_65152__$1)){
var c__53901__auto___65153 = cljs.core.chunk_first.call(null,seq__65134_65152__$1);
var G__65154 = cljs.core.chunk_rest.call(null,seq__65134_65152__$1);
var G__65155 = c__53901__auto___65153;
var G__65156 = cljs.core.count.call(null,c__53901__auto___65153);
var G__65157 = (0);
seq__65134_65142 = G__65154;
chunk__65135_65143 = G__65155;
count__65136_65144 = G__65156;
i__65137_65145 = G__65157;
continue;
} else {
var req_65158 = cljs.core.first.call(null,seq__65134_65152__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_65158,prov);

var G__65159 = cljs.core.next.call(null,seq__65134_65152__$1);
var G__65160 = null;
var G__65161 = (0);
var G__65162 = (0);
seq__65134_65142 = G__65159;
chunk__65135_65143 = G__65160;
count__65136_65144 = G__65161;
i__65137_65145 = G__65162;
continue;
}
} else {
}
}
break;
}

var G__65163 = seq__65130;
var G__65164 = chunk__65131;
var G__65165 = count__65132;
var G__65166 = (i__65133 + (1));
seq__65130 = G__65163;
chunk__65131 = G__65164;
count__65132 = G__65165;
i__65133 = G__65166;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__65130);
if(temp__5457__auto__){
var seq__65130__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65130__$1)){
var c__53901__auto__ = cljs.core.chunk_first.call(null,seq__65130__$1);
var G__65167 = cljs.core.chunk_rest.call(null,seq__65130__$1);
var G__65168 = c__53901__auto__;
var G__65169 = cljs.core.count.call(null,c__53901__auto__);
var G__65170 = (0);
seq__65130 = G__65167;
chunk__65131 = G__65168;
count__65132 = G__65169;
i__65133 = G__65170;
continue;
} else {
var prov = cljs.core.first.call(null,seq__65130__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__65138_65171 = cljs.core.seq.call(null,requires);
var chunk__65139_65172 = null;
var count__65140_65173 = (0);
var i__65141_65174 = (0);
while(true){
if((i__65141_65174 < count__65140_65173)){
var req_65175 = cljs.core._nth.call(null,chunk__65139_65172,i__65141_65174);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_65175,prov);

var G__65176 = seq__65138_65171;
var G__65177 = chunk__65139_65172;
var G__65178 = count__65140_65173;
var G__65179 = (i__65141_65174 + (1));
seq__65138_65171 = G__65176;
chunk__65139_65172 = G__65177;
count__65140_65173 = G__65178;
i__65141_65174 = G__65179;
continue;
} else {
var temp__5457__auto___65180__$1 = cljs.core.seq.call(null,seq__65138_65171);
if(temp__5457__auto___65180__$1){
var seq__65138_65181__$1 = temp__5457__auto___65180__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65138_65181__$1)){
var c__53901__auto___65182 = cljs.core.chunk_first.call(null,seq__65138_65181__$1);
var G__65183 = cljs.core.chunk_rest.call(null,seq__65138_65181__$1);
var G__65184 = c__53901__auto___65182;
var G__65185 = cljs.core.count.call(null,c__53901__auto___65182);
var G__65186 = (0);
seq__65138_65171 = G__65183;
chunk__65139_65172 = G__65184;
count__65140_65173 = G__65185;
i__65141_65174 = G__65186;
continue;
} else {
var req_65187 = cljs.core.first.call(null,seq__65138_65181__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_65187,prov);

var G__65188 = cljs.core.next.call(null,seq__65138_65181__$1);
var G__65189 = null;
var G__65190 = (0);
var G__65191 = (0);
seq__65138_65171 = G__65188;
chunk__65139_65172 = G__65189;
count__65140_65173 = G__65190;
i__65141_65174 = G__65191;
continue;
}
} else {
}
}
break;
}

var G__65192 = cljs.core.next.call(null,seq__65130__$1);
var G__65193 = null;
var G__65194 = (0);
var G__65195 = (0);
seq__65130 = G__65192;
chunk__65131 = G__65193;
count__65132 = G__65194;
i__65133 = G__65195;
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
var seq__65196_65200 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__65197_65201 = null;
var count__65198_65202 = (0);
var i__65199_65203 = (0);
while(true){
if((i__65199_65203 < count__65198_65202)){
var ns_65204 = cljs.core._nth.call(null,chunk__65197_65201,i__65199_65203);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_65204);

var G__65205 = seq__65196_65200;
var G__65206 = chunk__65197_65201;
var G__65207 = count__65198_65202;
var G__65208 = (i__65199_65203 + (1));
seq__65196_65200 = G__65205;
chunk__65197_65201 = G__65206;
count__65198_65202 = G__65207;
i__65199_65203 = G__65208;
continue;
} else {
var temp__5457__auto___65209 = cljs.core.seq.call(null,seq__65196_65200);
if(temp__5457__auto___65209){
var seq__65196_65210__$1 = temp__5457__auto___65209;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65196_65210__$1)){
var c__53901__auto___65211 = cljs.core.chunk_first.call(null,seq__65196_65210__$1);
var G__65212 = cljs.core.chunk_rest.call(null,seq__65196_65210__$1);
var G__65213 = c__53901__auto___65211;
var G__65214 = cljs.core.count.call(null,c__53901__auto___65211);
var G__65215 = (0);
seq__65196_65200 = G__65212;
chunk__65197_65201 = G__65213;
count__65198_65202 = G__65214;
i__65199_65203 = G__65215;
continue;
} else {
var ns_65216 = cljs.core.first.call(null,seq__65196_65210__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_65216);

var G__65217 = cljs.core.next.call(null,seq__65196_65210__$1);
var G__65218 = null;
var G__65219 = (0);
var G__65220 = (0);
seq__65196_65200 = G__65217;
chunk__65197_65201 = G__65218;
count__65198_65202 = G__65219;
i__65199_65203 = G__65220;
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
goog.require_figwheel_backup_ = (function (){var or__52970__auto__ = goog.require__;
if(cljs.core.truth_(or__52970__auto__)){
return or__52970__auto__;
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
var G__65221__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__65221 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65222__i = 0, G__65222__a = new Array(arguments.length -  0);
while (G__65222__i < G__65222__a.length) {G__65222__a[G__65222__i] = arguments[G__65222__i + 0]; ++G__65222__i;}
  args = new cljs.core.IndexedSeq(G__65222__a,0,null);
} 
return G__65221__delegate.call(this,args);};
G__65221.cljs$lang$maxFixedArity = 0;
G__65221.cljs$lang$applyTo = (function (arglist__65223){
var args = cljs.core.seq(arglist__65223);
return G__65221__delegate(args);
});
G__65221.cljs$core$IFn$_invoke$arity$variadic = G__65221__delegate;
return G__65221;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__65224_SHARP_,p2__65225_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__65224_SHARP_)].join('')),p2__65225_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__65226_SHARP_,p2__65227_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__65226_SHARP_)].join(''),p2__65227_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__65228 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__65228.addCallback(((function (G__65228){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__65228))
);

G__65228.addErrback(((function (G__65228){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__65228))
);

return G__65228;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__65229 = cljs.core._EQ_;
var expr__65230 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__65229.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__65230))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__65229,expr__65230){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__65229,expr__65230))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__65229,expr__65230){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e65232){if((e65232 instanceof Error)){
var e = e65232;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e65232;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__65229,expr__65230))
} else {
if(cljs.core.truth_(pred__65229.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__65230))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__65229.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__65230))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__65229.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__65230))){
return ((function (pred__65229,expr__65230){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e65233){if((e65233 instanceof Error)){
var e = e65233;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e65233;

}
}})());
});
;})(pred__65229,expr__65230))
} else {
return ((function (pred__65229,expr__65230){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__65229,expr__65230))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__65234,callback){
var map__65235 = p__65234;
var map__65235__$1 = ((((!((map__65235 == null)))?((((map__65235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65235.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65235):map__65235);
var file_msg = map__65235__$1;
var request_url = cljs.core.get.call(null,map__65235__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__65235,map__65235__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__65235,map__65235__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__58063__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58063__auto__){
return (function (){
var f__58064__auto__ = (function (){var switch__57973__auto__ = ((function (c__58063__auto__){
return (function (state_65259){
var state_val_65260 = (state_65259[(1)]);
if((state_val_65260 === (7))){
var inst_65255 = (state_65259[(2)]);
var state_65259__$1 = state_65259;
var statearr_65261_65278 = state_65259__$1;
(statearr_65261_65278[(2)] = inst_65255);

(statearr_65261_65278[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65260 === (1))){
var state_65259__$1 = state_65259;
var statearr_65262_65279 = state_65259__$1;
(statearr_65262_65279[(2)] = null);

(statearr_65262_65279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65260 === (4))){
var inst_65239 = (state_65259[(7)]);
var inst_65239__$1 = (state_65259[(2)]);
var state_65259__$1 = (function (){var statearr_65263 = state_65259;
(statearr_65263[(7)] = inst_65239__$1);

return statearr_65263;
})();
if(cljs.core.truth_(inst_65239__$1)){
var statearr_65264_65280 = state_65259__$1;
(statearr_65264_65280[(1)] = (5));

} else {
var statearr_65265_65281 = state_65259__$1;
(statearr_65265_65281[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65260 === (6))){
var state_65259__$1 = state_65259;
var statearr_65266_65282 = state_65259__$1;
(statearr_65266_65282[(2)] = null);

(statearr_65266_65282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65260 === (3))){
var inst_65257 = (state_65259[(2)]);
var state_65259__$1 = state_65259;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65259__$1,inst_65257);
} else {
if((state_val_65260 === (2))){
var state_65259__$1 = state_65259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65259__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_65260 === (11))){
var inst_65251 = (state_65259[(2)]);
var state_65259__$1 = (function (){var statearr_65267 = state_65259;
(statearr_65267[(8)] = inst_65251);

return statearr_65267;
})();
var statearr_65268_65283 = state_65259__$1;
(statearr_65268_65283[(2)] = null);

(statearr_65268_65283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65260 === (9))){
var inst_65243 = (state_65259[(9)]);
var inst_65245 = (state_65259[(10)]);
var inst_65247 = inst_65245.call(null,inst_65243);
var state_65259__$1 = state_65259;
var statearr_65269_65284 = state_65259__$1;
(statearr_65269_65284[(2)] = inst_65247);

(statearr_65269_65284[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65260 === (5))){
var inst_65239 = (state_65259[(7)]);
var inst_65241 = figwheel.client.file_reloading.blocking_load.call(null,inst_65239);
var state_65259__$1 = state_65259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65259__$1,(8),inst_65241);
} else {
if((state_val_65260 === (10))){
var inst_65243 = (state_65259[(9)]);
var inst_65249 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_65243);
var state_65259__$1 = state_65259;
var statearr_65270_65285 = state_65259__$1;
(statearr_65270_65285[(2)] = inst_65249);

(statearr_65270_65285[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65260 === (8))){
var inst_65239 = (state_65259[(7)]);
var inst_65245 = (state_65259[(10)]);
var inst_65243 = (state_65259[(2)]);
var inst_65244 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_65245__$1 = cljs.core.get.call(null,inst_65244,inst_65239);
var state_65259__$1 = (function (){var statearr_65271 = state_65259;
(statearr_65271[(9)] = inst_65243);

(statearr_65271[(10)] = inst_65245__$1);

return statearr_65271;
})();
if(cljs.core.truth_(inst_65245__$1)){
var statearr_65272_65286 = state_65259__$1;
(statearr_65272_65286[(1)] = (9));

} else {
var statearr_65273_65287 = state_65259__$1;
(statearr_65273_65287[(1)] = (10));

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
});})(c__58063__auto__))
;
return ((function (switch__57973__auto__,c__58063__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__57974__auto__ = null;
var figwheel$client$file_reloading$state_machine__57974__auto____0 = (function (){
var statearr_65274 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_65274[(0)] = figwheel$client$file_reloading$state_machine__57974__auto__);

(statearr_65274[(1)] = (1));

return statearr_65274;
});
var figwheel$client$file_reloading$state_machine__57974__auto____1 = (function (state_65259){
while(true){
var ret_value__57975__auto__ = (function (){try{while(true){
var result__57976__auto__ = switch__57973__auto__.call(null,state_65259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57976__auto__;
}
break;
}
}catch (e65275){if((e65275 instanceof Object)){
var ex__57977__auto__ = e65275;
var statearr_65276_65288 = state_65259;
(statearr_65276_65288[(5)] = ex__57977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65275;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65289 = state_65259;
state_65259 = G__65289;
continue;
} else {
return ret_value__57975__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__57974__auto__ = function(state_65259){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__57974__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__57974__auto____1.call(this,state_65259);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__57974__auto____0;
figwheel$client$file_reloading$state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__57974__auto____1;
return figwheel$client$file_reloading$state_machine__57974__auto__;
})()
;})(switch__57973__auto__,c__58063__auto__))
})();
var state__58065__auto__ = (function (){var statearr_65277 = f__58064__auto__.call(null);
(statearr_65277[(6)] = c__58063__auto__);

return statearr_65277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58065__auto__);
});})(c__58063__auto__))
);

return c__58063__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__65290,callback){
var map__65291 = p__65290;
var map__65291__$1 = ((((!((map__65291 == null)))?((((map__65291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65291.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65291):map__65291);
var file_msg = map__65291__$1;
var namespace = cljs.core.get.call(null,map__65291__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__65291,map__65291__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__65291,map__65291__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__65293){
var map__65294 = p__65293;
var map__65294__$1 = ((((!((map__65294 == null)))?((((map__65294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65294.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65294):map__65294);
var file_msg = map__65294__$1;
var namespace = cljs.core.get.call(null,map__65294__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__65296){
var map__65297 = p__65296;
var map__65297__$1 = ((((!((map__65297 == null)))?((((map__65297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65297.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65297):map__65297);
var file_msg = map__65297__$1;
var namespace = cljs.core.get.call(null,map__65297__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__52958__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__52958__auto__){
var or__52970__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__52970__auto__)){
return or__52970__auto__;
} else {
var or__52970__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__52970__auto____$1)){
return or__52970__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__52958__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__65299,callback){
var map__65300 = p__65299;
var map__65300__$1 = ((((!((map__65300 == null)))?((((map__65300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65300.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65300):map__65300);
var file_msg = map__65300__$1;
var request_url = cljs.core.get.call(null,map__65300__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__65300__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__58063__auto___65350 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58063__auto___65350,out){
return (function (){
var f__58064__auto__ = (function (){var switch__57973__auto__ = ((function (c__58063__auto___65350,out){
return (function (state_65335){
var state_val_65336 = (state_65335[(1)]);
if((state_val_65336 === (1))){
var inst_65309 = cljs.core.seq.call(null,files);
var inst_65310 = cljs.core.first.call(null,inst_65309);
var inst_65311 = cljs.core.next.call(null,inst_65309);
var inst_65312 = files;
var state_65335__$1 = (function (){var statearr_65337 = state_65335;
(statearr_65337[(7)] = inst_65310);

(statearr_65337[(8)] = inst_65311);

(statearr_65337[(9)] = inst_65312);

return statearr_65337;
})();
var statearr_65338_65351 = state_65335__$1;
(statearr_65338_65351[(2)] = null);

(statearr_65338_65351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65336 === (2))){
var inst_65312 = (state_65335[(9)]);
var inst_65318 = (state_65335[(10)]);
var inst_65317 = cljs.core.seq.call(null,inst_65312);
var inst_65318__$1 = cljs.core.first.call(null,inst_65317);
var inst_65319 = cljs.core.next.call(null,inst_65317);
var inst_65320 = (inst_65318__$1 == null);
var inst_65321 = cljs.core.not.call(null,inst_65320);
var state_65335__$1 = (function (){var statearr_65339 = state_65335;
(statearr_65339[(11)] = inst_65319);

(statearr_65339[(10)] = inst_65318__$1);

return statearr_65339;
})();
if(inst_65321){
var statearr_65340_65352 = state_65335__$1;
(statearr_65340_65352[(1)] = (4));

} else {
var statearr_65341_65353 = state_65335__$1;
(statearr_65341_65353[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65336 === (3))){
var inst_65333 = (state_65335[(2)]);
var state_65335__$1 = state_65335;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65335__$1,inst_65333);
} else {
if((state_val_65336 === (4))){
var inst_65318 = (state_65335[(10)]);
var inst_65323 = figwheel.client.file_reloading.reload_js_file.call(null,inst_65318);
var state_65335__$1 = state_65335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65335__$1,(7),inst_65323);
} else {
if((state_val_65336 === (5))){
var inst_65329 = cljs.core.async.close_BANG_.call(null,out);
var state_65335__$1 = state_65335;
var statearr_65342_65354 = state_65335__$1;
(statearr_65342_65354[(2)] = inst_65329);

(statearr_65342_65354[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65336 === (6))){
var inst_65331 = (state_65335[(2)]);
var state_65335__$1 = state_65335;
var statearr_65343_65355 = state_65335__$1;
(statearr_65343_65355[(2)] = inst_65331);

(statearr_65343_65355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65336 === (7))){
var inst_65319 = (state_65335[(11)]);
var inst_65325 = (state_65335[(2)]);
var inst_65326 = cljs.core.async.put_BANG_.call(null,out,inst_65325);
var inst_65312 = inst_65319;
var state_65335__$1 = (function (){var statearr_65344 = state_65335;
(statearr_65344[(9)] = inst_65312);

(statearr_65344[(12)] = inst_65326);

return statearr_65344;
})();
var statearr_65345_65356 = state_65335__$1;
(statearr_65345_65356[(2)] = null);

(statearr_65345_65356[(1)] = (2));


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
});})(c__58063__auto___65350,out))
;
return ((function (switch__57973__auto__,c__58063__auto___65350,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__57974__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__57974__auto____0 = (function (){
var statearr_65346 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65346[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__57974__auto__);

(statearr_65346[(1)] = (1));

return statearr_65346;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__57974__auto____1 = (function (state_65335){
while(true){
var ret_value__57975__auto__ = (function (){try{while(true){
var result__57976__auto__ = switch__57973__auto__.call(null,state_65335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57976__auto__;
}
break;
}
}catch (e65347){if((e65347 instanceof Object)){
var ex__57977__auto__ = e65347;
var statearr_65348_65357 = state_65335;
(statearr_65348_65357[(5)] = ex__57977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65358 = state_65335;
state_65335 = G__65358;
continue;
} else {
return ret_value__57975__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__57974__auto__ = function(state_65335){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__57974__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__57974__auto____1.call(this,state_65335);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__57974__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__57974__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__57974__auto__;
})()
;})(switch__57973__auto__,c__58063__auto___65350,out))
})();
var state__58065__auto__ = (function (){var statearr_65349 = f__58064__auto__.call(null);
(statearr_65349[(6)] = c__58063__auto___65350);

return statearr_65349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58065__auto__);
});})(c__58063__auto___65350,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__65359,opts){
var map__65360 = p__65359;
var map__65360__$1 = ((((!((map__65360 == null)))?((((map__65360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65360.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65360):map__65360);
var eval_body = cljs.core.get.call(null,map__65360__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__65360__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__52958__auto__ = eval_body;
if(cljs.core.truth_(and__52958__auto__)){
return typeof eval_body === 'string';
} else {
return and__52958__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e65362){var e = e65362;
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
return (function (p1__65363_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__65363_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__65364){
var vec__65365 = p__65364;
var k = cljs.core.nth.call(null,vec__65365,(0),null);
var v = cljs.core.nth.call(null,vec__65365,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__65368){
var vec__65369 = p__65368;
var k = cljs.core.nth.call(null,vec__65369,(0),null);
var v = cljs.core.nth.call(null,vec__65369,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__65375,p__65376){
var map__65377 = p__65375;
var map__65377__$1 = ((((!((map__65377 == null)))?((((map__65377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65377.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65377):map__65377);
var opts = map__65377__$1;
var before_jsload = cljs.core.get.call(null,map__65377__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__65377__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__65377__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__65378 = p__65376;
var map__65378__$1 = ((((!((map__65378 == null)))?((((map__65378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65378.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65378):map__65378);
var msg = map__65378__$1;
var files = cljs.core.get.call(null,map__65378__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__65378__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__65378__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__58063__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58063__auto__,map__65377,map__65377__$1,opts,before_jsload,on_jsload,reload_dependents,map__65378,map__65378__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__58064__auto__ = (function (){var switch__57973__auto__ = ((function (c__58063__auto__,map__65377,map__65377__$1,opts,before_jsload,on_jsload,reload_dependents,map__65378,map__65378__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_65532){
var state_val_65533 = (state_65532[(1)]);
if((state_val_65533 === (7))){
var inst_65395 = (state_65532[(7)]);
var inst_65392 = (state_65532[(8)]);
var inst_65393 = (state_65532[(9)]);
var inst_65394 = (state_65532[(10)]);
var inst_65400 = cljs.core._nth.call(null,inst_65393,inst_65395);
var inst_65401 = figwheel.client.file_reloading.eval_body.call(null,inst_65400,opts);
var inst_65402 = (inst_65395 + (1));
var tmp65534 = inst_65392;
var tmp65535 = inst_65393;
var tmp65536 = inst_65394;
var inst_65392__$1 = tmp65534;
var inst_65393__$1 = tmp65535;
var inst_65394__$1 = tmp65536;
var inst_65395__$1 = inst_65402;
var state_65532__$1 = (function (){var statearr_65537 = state_65532;
(statearr_65537[(7)] = inst_65395__$1);

(statearr_65537[(11)] = inst_65401);

(statearr_65537[(8)] = inst_65392__$1);

(statearr_65537[(9)] = inst_65393__$1);

(statearr_65537[(10)] = inst_65394__$1);

return statearr_65537;
})();
var statearr_65538_65621 = state_65532__$1;
(statearr_65538_65621[(2)] = null);

(statearr_65538_65621[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65533 === (20))){
var inst_65435 = (state_65532[(12)]);
var inst_65443 = figwheel.client.file_reloading.sort_files.call(null,inst_65435);
var state_65532__$1 = state_65532;
var statearr_65539_65622 = state_65532__$1;
(statearr_65539_65622[(2)] = inst_65443);

(statearr_65539_65622[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65533 === (27))){
var state_65532__$1 = state_65532;
var statearr_65540_65623 = state_65532__$1;
(statearr_65540_65623[(2)] = null);

(statearr_65540_65623[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65533 === (1))){
var inst_65384 = (state_65532[(13)]);
var inst_65381 = before_jsload.call(null,files);
var inst_65382 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_65383 = (function (){return ((function (inst_65384,inst_65381,inst_65382,state_val_65533,c__58063__auto__,map__65377,map__65377__$1,opts,before_jsload,on_jsload,reload_dependents,map__65378,map__65378__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__65372_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__65372_SHARP_);
});
;})(inst_65384,inst_65381,inst_65382,state_val_65533,c__58063__auto__,map__65377,map__65377__$1,opts,before_jsload,on_jsload,reload_dependents,map__65378,map__65378__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_65384__$1 = cljs.core.filter.call(null,inst_65383,files);
var inst_65385 = cljs.core.not_empty.call(null,inst_65384__$1);
var state_65532__$1 = (function (){var statearr_65541 = state_65532;
(statearr_65541[(14)] = inst_65382);

(statearr_65541[(13)] = inst_65384__$1);

(statearr_65541[(15)] = inst_65381);

return statearr_65541;
})();
if(cljs.core.truth_(inst_65385)){
var statearr_65542_65624 = state_65532__$1;
(statearr_65542_65624[(1)] = (2));

} else {
var statearr_65543_65625 = state_65532__$1;
(statearr_65543_65625[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65533 === (24))){
var state_65532__$1 = state_65532;
var statearr_65544_65626 = state_65532__$1;
(statearr_65544_65626[(2)] = null);

(statearr_65544_65626[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65533 === (39))){
var inst_65485 = (state_65532[(16)]);
var state_65532__$1 = state_65532;
var statearr_65545_65627 = state_65532__$1;
(statearr_65545_65627[(2)] = inst_65485);

(statearr_65545_65627[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65533 === (46))){
var inst_65527 = (state_65532[(2)]);
var state_65532__$1 = state_65532;
var statearr_65546_65628 = state_65532__$1;
(statearr_65546_65628[(2)] = inst_65527);

(statearr_65546_65628[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65533 === (4))){
var inst_65429 = (state_65532[(2)]);
var inst_65430 = cljs.core.List.EMPTY;
var inst_65431 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_65430);
var inst_65432 = (function (){return ((function (inst_65429,inst_65430,inst_65431,state_val_65533,c__58063__auto__,map__65377,map__65377__$1,opts,before_jsload,on_jsload,reload_dependents,map__65378,map__65378__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__65373_SHARP_){
var and__52958__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__65373_SHARP_);
if(cljs.core.truth_(and__52958__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__65373_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__65373_SHARP_)));
} else {
return and__52958__auto__;
}
});
;})(inst_65429,inst_65430,inst_65431,state_val_65533,c__58063__auto__,map__65377,map__65377__$1,opts,before_jsload,on_jsload,reload_dependents,map__65378,map__65378__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_65433 = cljs.core.filter.call(null,inst_65432,files);
var inst_65434 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_65435 = cljs.core.concat.call(null,inst_65433,inst_65434);
var state_65532__$1 = (function (){var statearr_65547 = state_65532;
(statearr_65547[(17)] = inst_65429);

(statearr_65547[(18)] = inst_65431);

(statearr_65547[(12)] = inst_65435);

return statearr_65547;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_65548_65629 = state_65532__$1;
(statearr_65548_65629[(1)] = (16));

} else {
var statearr_65549_65630 = state_65532__$1;
(statearr_65549_65630[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65533 === (15))){
var inst_65419 = (state_65532[(2)]);
var state_65532__$1 = state_65532;
var statearr_65550_65631 = state_65532__$1;
(statearr_65550_65631[(2)] = inst_65419);

(statearr_65550_65631[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65533 === (21))){
var inst_65445 = (state_65532[(19)]);
var inst_65445__$1 = (state_65532[(2)]);
var inst_65446 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_65445__$1);
var state_65532__$1 = (function (){var statearr_65551 = state_65532;
(statearr_65551[(19)] = inst_65445__$1);

return statearr_65551;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65532__$1,(22),inst_65446);
} else {
if((state_val_65533 === (31))){
var inst_65530 = (state_65532[(2)]);
var state_65532__$1 = state_65532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65532__$1,inst_65530);
} else {
if((state_val_65533 === (32))){
var inst_65485 = (state_65532[(16)]);
var inst_65490 = inst_65485.cljs$lang$protocol_mask$partition0$;
var inst_65491 = (inst_65490 & (64));
var inst_65492 = inst_65485.cljs$core$ISeq$;
var inst_65493 = (cljs.core.PROTOCOL_SENTINEL === inst_65492);
var inst_65494 = (inst_65491) || (inst_65493);
var state_65532__$1 = state_65532;
if(cljs.core.truth_(inst_65494)){
var statearr_65552_65632 = state_65532__$1;
(statearr_65552_65632[(1)] = (35));

} else {
var statearr_65553_65633 = state_65532__$1;
(statearr_65553_65633[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65533 === (40))){
var inst_65507 = (state_65532[(20)]);
var inst_65506 = (state_65532[(2)]);
var inst_65507__$1 = cljs.core.get.call(null,inst_65506,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_65508 = cljs.core.get.call(null,inst_65506,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_65509 = cljs.core.not_empty.call(null,inst_65507__$1);
var state_65532__$1 = (function (){var statearr_65554 = state_65532;
(statearr_65554[(20)] = inst_65507__$1);

(statearr_65554[(21)] = inst_65508);

return statearr_65554;
})();
if(cljs.core.truth_(inst_65509)){
var statearr_65555_65634 = state_65532__$1;
(statearr_65555_65634[(1)] = (41));

} else {
var statearr_65556_65635 = state_65532__$1;
(statearr_65556_65635[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65533 === (33))){
var state_65532__$1 = state_65532;
var statearr_65557_65636 = state_65532__$1;
(statearr_65557_65636[(2)] = false);

(statearr_65557_65636[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65533 === (13))){
var inst_65405 = (state_65532[(22)]);
var inst_65409 = cljs.core.chunk_first.call(null,inst_65405);
var inst_65410 = cljs.core.chunk_rest.call(null,inst_65405);
var inst_65411 = cljs.core.count.call(null,inst_65409);
var inst_65392 = inst_65410;
var inst_65393 = inst_65409;
var inst_65394 = inst_65411;
var inst_65395 = (0);
var state_65532__$1 = (function (){var statearr_65558 = state_65532;
(statearr_65558[(7)] = inst_65395);

(statearr_65558[(8)] = inst_65392);

(statearr_65558[(9)] = inst_65393);

(statearr_65558[(10)] = inst_65394);

return statearr_65558;
})();
var statearr_65559_65637 = state_65532__$1;
(statearr_65559_65637[(2)] = null);

(statearr_65559_65637[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65533 === (22))){
var inst_65453 = (state_65532[(23)]);
var inst_65449 = (state_65532[(24)]);
var inst_65445 = (state_65532[(19)]);
var inst_65448 = (state_65532[(25)]);
var inst_65448__$1 = (state_65532[(2)]);
var inst_65449__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_65448__$1);
var inst_65450 = (function (){var all_files = inst_65445;
var res_SINGLEQUOTE_ = inst_65448__$1;
var res = inst_65449__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_65453,inst_65449,inst_65445,inst_65448,inst_65448__$1,inst_65449__$1,state_val_65533,c__58063__auto__,map__65377,map__65377__$1,opts,before_jsload,on_jsload,reload_dependents,map__65378,map__65378__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__65374_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__65374_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_65453,inst_65449,inst_65445,inst_65448,inst_65448__$1,inst_65449__$1,state_val_65533,c__58063__auto__,map__65377,map__65377__$1,opts,before_jsload,on_jsload,reload_dependents,map__65378,map__65378__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_65451 = cljs.core.filter.call(null,inst_65450,inst_65448__$1);
var inst_65452 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_65453__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_65452);
var inst_65454 = cljs.core.not_empty.call(null,inst_65453__$1);
var state_65532__$1 = (function (){var statearr_65560 = state_65532;
(statearr_65560[(23)] = inst_65453__$1);

(statearr_65560[(24)] = inst_65449__$1);

(statearr_65560[(26)] = inst_65451);

(statearr_65560[(25)] = inst_65448__$1);

return statearr_65560;
})();
if(cljs.core.truth_(inst_65454)){
var statearr_65561_65638 = state_65532__$1;
(statearr_65561_65638[(1)] = (23));

} else {
var statearr_65562_65639 = state_65532__$1;
(statearr_65562_65639[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65533 === (36))){
var state_65532__$1 = state_65532;
var statearr_65563_65640 = state_65532__$1;
(statearr_65563_65640[(2)] = false);

(statearr_65563_65640[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65533 === (41))){
var inst_65507 = (state_65532[(20)]);
var inst_65511 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_65512 = cljs.core.map.call(null,inst_65511,inst_65507);
var inst_65513 = cljs.core.pr_str.call(null,inst_65512);
var inst_65514 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_65513)].join('');
var inst_65515 = figwheel.client.utils.log.call(null,inst_65514);
var state_65532__$1 = state_65532;
var statearr_65564_65641 = state_65532__$1;
(statearr_65564_65641[(2)] = inst_65515);

(statearr_65564_65641[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65533 === (43))){
var inst_65508 = (state_65532[(21)]);
var inst_65518 = (state_65532[(2)]);
var inst_65519 = cljs.core.not_empty.call(null,inst_65508);
var state_65532__$1 = (function (){var statearr_65565 = state_65532;
(statearr_65565[(27)] = inst_65518);

return statearr_65565;
})();
if(cljs.core.truth_(inst_65519)){
var statearr_65566_65642 = state_65532__$1;
(statearr_65566_65642[(1)] = (44));

} else {
var statearr_65567_65643 = state_65532__$1;
(statearr_65567_65643[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65533 === (29))){
var inst_65485 = (state_65532[(16)]);
var inst_65453 = (state_65532[(23)]);
var inst_65449 = (state_65532[(24)]);
var inst_65445 = (state_65532[(19)]);
var inst_65451 = (state_65532[(26)]);
var inst_65448 = (state_65532[(25)]);
var inst_65481 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_65484 = (function (){var all_files = inst_65445;
var res_SINGLEQUOTE_ = inst_65448;
var res = inst_65449;
var files_not_loaded = inst_65451;
var dependencies_that_loaded = inst_65453;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_65485,inst_65453,inst_65449,inst_65445,inst_65451,inst_65448,inst_65481,state_val_65533,c__58063__auto__,map__65377,map__65377__$1,opts,before_jsload,on_jsload,reload_dependents,map__65378,map__65378__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__65483){
var map__65568 = p__65483;
var map__65568__$1 = ((((!((map__65568 == null)))?((((map__65568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65568.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65568):map__65568);
var namespace = cljs.core.get.call(null,map__65568__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_65485,inst_65453,inst_65449,inst_65445,inst_65451,inst_65448,inst_65481,state_val_65533,c__58063__auto__,map__65377,map__65377__$1,opts,before_jsload,on_jsload,reload_dependents,map__65378,map__65378__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_65485__$1 = cljs.core.group_by.call(null,inst_65484,inst_65451);
var inst_65487 = (inst_65485__$1 == null);
var inst_65488 = cljs.core.not.call(null,inst_65487);
var state_65532__$1 = (function (){var statearr_65570 = state_65532;
(statearr_65570[(28)] = inst_65481);

(statearr_65570[(16)] = inst_65485__$1);

return statearr_65570;
})();
if(inst_65488){
var statearr_65571_65644 = state_65532__$1;
(statearr_65571_65644[(1)] = (32));

} else {
var statearr_65572_65645 = state_65532__$1;
(statearr_65572_65645[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65533 === (44))){
var inst_65508 = (state_65532[(21)]);
var inst_65521 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_65508);
var inst_65522 = cljs.core.pr_str.call(null,inst_65521);
var inst_65523 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_65522)].join('');
var inst_65524 = figwheel.client.utils.log.call(null,inst_65523);
var state_65532__$1 = state_65532;
var statearr_65573_65646 = state_65532__$1;
(statearr_65573_65646[(2)] = inst_65524);

(statearr_65573_65646[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65533 === (6))){
var inst_65426 = (state_65532[(2)]);
var state_65532__$1 = state_65532;
var statearr_65574_65647 = state_65532__$1;
(statearr_65574_65647[(2)] = inst_65426);

(statearr_65574_65647[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65533 === (28))){
var inst_65451 = (state_65532[(26)]);
var inst_65478 = (state_65532[(2)]);
var inst_65479 = cljs.core.not_empty.call(null,inst_65451);
var state_65532__$1 = (function (){var statearr_65575 = state_65532;
(statearr_65575[(29)] = inst_65478);

return statearr_65575;
})();
if(cljs.core.truth_(inst_65479)){
var statearr_65576_65648 = state_65532__$1;
(statearr_65576_65648[(1)] = (29));

} else {
var statearr_65577_65649 = state_65532__$1;
(statearr_65577_65649[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65533 === (25))){
var inst_65449 = (state_65532[(24)]);
var inst_65465 = (state_65532[(2)]);
var inst_65466 = cljs.core.not_empty.call(null,inst_65449);
var state_65532__$1 = (function (){var statearr_65578 = state_65532;
(statearr_65578[(30)] = inst_65465);

return statearr_65578;
})();
if(cljs.core.truth_(inst_65466)){
var statearr_65579_65650 = state_65532__$1;
(statearr_65579_65650[(1)] = (26));

} else {
var statearr_65580_65651 = state_65532__$1;
(statearr_65580_65651[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65533 === (34))){
var inst_65501 = (state_65532[(2)]);
var state_65532__$1 = state_65532;
if(cljs.core.truth_(inst_65501)){
var statearr_65581_65652 = state_65532__$1;
(statearr_65581_65652[(1)] = (38));

} else {
var statearr_65582_65653 = state_65532__$1;
(statearr_65582_65653[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65533 === (17))){
var state_65532__$1 = state_65532;
var statearr_65583_65654 = state_65532__$1;
(statearr_65583_65654[(2)] = recompile_dependents);

(statearr_65583_65654[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65533 === (3))){
var state_65532__$1 = state_65532;
var statearr_65584_65655 = state_65532__$1;
(statearr_65584_65655[(2)] = null);

(statearr_65584_65655[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65533 === (12))){
var inst_65422 = (state_65532[(2)]);
var state_65532__$1 = state_65532;
var statearr_65585_65656 = state_65532__$1;
(statearr_65585_65656[(2)] = inst_65422);

(statearr_65585_65656[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65533 === (2))){
var inst_65384 = (state_65532[(13)]);
var inst_65391 = cljs.core.seq.call(null,inst_65384);
var inst_65392 = inst_65391;
var inst_65393 = null;
var inst_65394 = (0);
var inst_65395 = (0);
var state_65532__$1 = (function (){var statearr_65586 = state_65532;
(statearr_65586[(7)] = inst_65395);

(statearr_65586[(8)] = inst_65392);

(statearr_65586[(9)] = inst_65393);

(statearr_65586[(10)] = inst_65394);

return statearr_65586;
})();
var statearr_65587_65657 = state_65532__$1;
(statearr_65587_65657[(2)] = null);

(statearr_65587_65657[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65533 === (23))){
var inst_65453 = (state_65532[(23)]);
var inst_65449 = (state_65532[(24)]);
var inst_65445 = (state_65532[(19)]);
var inst_65451 = (state_65532[(26)]);
var inst_65448 = (state_65532[(25)]);
var inst_65456 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_65458 = (function (){var all_files = inst_65445;
var res_SINGLEQUOTE_ = inst_65448;
var res = inst_65449;
var files_not_loaded = inst_65451;
var dependencies_that_loaded = inst_65453;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_65453,inst_65449,inst_65445,inst_65451,inst_65448,inst_65456,state_val_65533,c__58063__auto__,map__65377,map__65377__$1,opts,before_jsload,on_jsload,reload_dependents,map__65378,map__65378__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__65457){
var map__65588 = p__65457;
var map__65588__$1 = ((((!((map__65588 == null)))?((((map__65588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65588.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65588):map__65588);
var request_url = cljs.core.get.call(null,map__65588__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_65453,inst_65449,inst_65445,inst_65451,inst_65448,inst_65456,state_val_65533,c__58063__auto__,map__65377,map__65377__$1,opts,before_jsload,on_jsload,reload_dependents,map__65378,map__65378__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_65459 = cljs.core.reverse.call(null,inst_65453);
var inst_65460 = cljs.core.map.call(null,inst_65458,inst_65459);
var inst_65461 = cljs.core.pr_str.call(null,inst_65460);
var inst_65462 = figwheel.client.utils.log.call(null,inst_65461);
var state_65532__$1 = (function (){var statearr_65590 = state_65532;
(statearr_65590[(31)] = inst_65456);

return statearr_65590;
})();
var statearr_65591_65658 = state_65532__$1;
(statearr_65591_65658[(2)] = inst_65462);

(statearr_65591_65658[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65533 === (35))){
var state_65532__$1 = state_65532;
var statearr_65592_65659 = state_65532__$1;
(statearr_65592_65659[(2)] = true);

(statearr_65592_65659[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65533 === (19))){
var inst_65435 = (state_65532[(12)]);
var inst_65441 = figwheel.client.file_reloading.expand_files.call(null,inst_65435);
var state_65532__$1 = state_65532;
var statearr_65593_65660 = state_65532__$1;
(statearr_65593_65660[(2)] = inst_65441);

(statearr_65593_65660[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65533 === (11))){
var state_65532__$1 = state_65532;
var statearr_65594_65661 = state_65532__$1;
(statearr_65594_65661[(2)] = null);

(statearr_65594_65661[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65533 === (9))){
var inst_65424 = (state_65532[(2)]);
var state_65532__$1 = state_65532;
var statearr_65595_65662 = state_65532__$1;
(statearr_65595_65662[(2)] = inst_65424);

(statearr_65595_65662[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65533 === (5))){
var inst_65395 = (state_65532[(7)]);
var inst_65394 = (state_65532[(10)]);
var inst_65397 = (inst_65395 < inst_65394);
var inst_65398 = inst_65397;
var state_65532__$1 = state_65532;
if(cljs.core.truth_(inst_65398)){
var statearr_65596_65663 = state_65532__$1;
(statearr_65596_65663[(1)] = (7));

} else {
var statearr_65597_65664 = state_65532__$1;
(statearr_65597_65664[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65533 === (14))){
var inst_65405 = (state_65532[(22)]);
var inst_65414 = cljs.core.first.call(null,inst_65405);
var inst_65415 = figwheel.client.file_reloading.eval_body.call(null,inst_65414,opts);
var inst_65416 = cljs.core.next.call(null,inst_65405);
var inst_65392 = inst_65416;
var inst_65393 = null;
var inst_65394 = (0);
var inst_65395 = (0);
var state_65532__$1 = (function (){var statearr_65598 = state_65532;
(statearr_65598[(7)] = inst_65395);

(statearr_65598[(8)] = inst_65392);

(statearr_65598[(9)] = inst_65393);

(statearr_65598[(10)] = inst_65394);

(statearr_65598[(32)] = inst_65415);

return statearr_65598;
})();
var statearr_65599_65665 = state_65532__$1;
(statearr_65599_65665[(2)] = null);

(statearr_65599_65665[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65533 === (45))){
var state_65532__$1 = state_65532;
var statearr_65600_65666 = state_65532__$1;
(statearr_65600_65666[(2)] = null);

(statearr_65600_65666[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65533 === (26))){
var inst_65453 = (state_65532[(23)]);
var inst_65449 = (state_65532[(24)]);
var inst_65445 = (state_65532[(19)]);
var inst_65451 = (state_65532[(26)]);
var inst_65448 = (state_65532[(25)]);
var inst_65468 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_65470 = (function (){var all_files = inst_65445;
var res_SINGLEQUOTE_ = inst_65448;
var res = inst_65449;
var files_not_loaded = inst_65451;
var dependencies_that_loaded = inst_65453;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_65453,inst_65449,inst_65445,inst_65451,inst_65448,inst_65468,state_val_65533,c__58063__auto__,map__65377,map__65377__$1,opts,before_jsload,on_jsload,reload_dependents,map__65378,map__65378__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__65469){
var map__65601 = p__65469;
var map__65601__$1 = ((((!((map__65601 == null)))?((((map__65601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65601.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65601):map__65601);
var namespace = cljs.core.get.call(null,map__65601__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__65601__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_65453,inst_65449,inst_65445,inst_65451,inst_65448,inst_65468,state_val_65533,c__58063__auto__,map__65377,map__65377__$1,opts,before_jsload,on_jsload,reload_dependents,map__65378,map__65378__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_65471 = cljs.core.map.call(null,inst_65470,inst_65449);
var inst_65472 = cljs.core.pr_str.call(null,inst_65471);
var inst_65473 = figwheel.client.utils.log.call(null,inst_65472);
var inst_65474 = (function (){var all_files = inst_65445;
var res_SINGLEQUOTE_ = inst_65448;
var res = inst_65449;
var files_not_loaded = inst_65451;
var dependencies_that_loaded = inst_65453;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_65453,inst_65449,inst_65445,inst_65451,inst_65448,inst_65468,inst_65470,inst_65471,inst_65472,inst_65473,state_val_65533,c__58063__auto__,map__65377,map__65377__$1,opts,before_jsload,on_jsload,reload_dependents,map__65378,map__65378__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_65453,inst_65449,inst_65445,inst_65451,inst_65448,inst_65468,inst_65470,inst_65471,inst_65472,inst_65473,state_val_65533,c__58063__auto__,map__65377,map__65377__$1,opts,before_jsload,on_jsload,reload_dependents,map__65378,map__65378__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_65475 = setTimeout(inst_65474,(10));
var state_65532__$1 = (function (){var statearr_65603 = state_65532;
(statearr_65603[(33)] = inst_65468);

(statearr_65603[(34)] = inst_65473);

return statearr_65603;
})();
var statearr_65604_65667 = state_65532__$1;
(statearr_65604_65667[(2)] = inst_65475);

(statearr_65604_65667[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65533 === (16))){
var state_65532__$1 = state_65532;
var statearr_65605_65668 = state_65532__$1;
(statearr_65605_65668[(2)] = reload_dependents);

(statearr_65605_65668[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65533 === (38))){
var inst_65485 = (state_65532[(16)]);
var inst_65503 = cljs.core.apply.call(null,cljs.core.hash_map,inst_65485);
var state_65532__$1 = state_65532;
var statearr_65606_65669 = state_65532__$1;
(statearr_65606_65669[(2)] = inst_65503);

(statearr_65606_65669[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65533 === (30))){
var state_65532__$1 = state_65532;
var statearr_65607_65670 = state_65532__$1;
(statearr_65607_65670[(2)] = null);

(statearr_65607_65670[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65533 === (10))){
var inst_65405 = (state_65532[(22)]);
var inst_65407 = cljs.core.chunked_seq_QMARK_.call(null,inst_65405);
var state_65532__$1 = state_65532;
if(inst_65407){
var statearr_65608_65671 = state_65532__$1;
(statearr_65608_65671[(1)] = (13));

} else {
var statearr_65609_65672 = state_65532__$1;
(statearr_65609_65672[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65533 === (18))){
var inst_65439 = (state_65532[(2)]);
var state_65532__$1 = state_65532;
if(cljs.core.truth_(inst_65439)){
var statearr_65610_65673 = state_65532__$1;
(statearr_65610_65673[(1)] = (19));

} else {
var statearr_65611_65674 = state_65532__$1;
(statearr_65611_65674[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65533 === (42))){
var state_65532__$1 = state_65532;
var statearr_65612_65675 = state_65532__$1;
(statearr_65612_65675[(2)] = null);

(statearr_65612_65675[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65533 === (37))){
var inst_65498 = (state_65532[(2)]);
var state_65532__$1 = state_65532;
var statearr_65613_65676 = state_65532__$1;
(statearr_65613_65676[(2)] = inst_65498);

(statearr_65613_65676[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65533 === (8))){
var inst_65392 = (state_65532[(8)]);
var inst_65405 = (state_65532[(22)]);
var inst_65405__$1 = cljs.core.seq.call(null,inst_65392);
var state_65532__$1 = (function (){var statearr_65614 = state_65532;
(statearr_65614[(22)] = inst_65405__$1);

return statearr_65614;
})();
if(inst_65405__$1){
var statearr_65615_65677 = state_65532__$1;
(statearr_65615_65677[(1)] = (10));

} else {
var statearr_65616_65678 = state_65532__$1;
(statearr_65616_65678[(1)] = (11));

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
});})(c__58063__auto__,map__65377,map__65377__$1,opts,before_jsload,on_jsload,reload_dependents,map__65378,map__65378__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__57973__auto__,c__58063__auto__,map__65377,map__65377__$1,opts,before_jsload,on_jsload,reload_dependents,map__65378,map__65378__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__57974__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__57974__auto____0 = (function (){
var statearr_65617 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65617[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__57974__auto__);

(statearr_65617[(1)] = (1));

return statearr_65617;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__57974__auto____1 = (function (state_65532){
while(true){
var ret_value__57975__auto__ = (function (){try{while(true){
var result__57976__auto__ = switch__57973__auto__.call(null,state_65532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57976__auto__;
}
break;
}
}catch (e65618){if((e65618 instanceof Object)){
var ex__57977__auto__ = e65618;
var statearr_65619_65679 = state_65532;
(statearr_65619_65679[(5)] = ex__57977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65680 = state_65532;
state_65532 = G__65680;
continue;
} else {
return ret_value__57975__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__57974__auto__ = function(state_65532){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__57974__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__57974__auto____1.call(this,state_65532);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__57974__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__57974__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__57974__auto__;
})()
;})(switch__57973__auto__,c__58063__auto__,map__65377,map__65377__$1,opts,before_jsload,on_jsload,reload_dependents,map__65378,map__65378__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__58065__auto__ = (function (){var statearr_65620 = f__58064__auto__.call(null);
(statearr_65620[(6)] = c__58063__auto__);

return statearr_65620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58065__auto__);
});})(c__58063__auto__,map__65377,map__65377__$1,opts,before_jsload,on_jsload,reload_dependents,map__65378,map__65378__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__58063__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__65683,link){
var map__65684 = p__65683;
var map__65684__$1 = ((((!((map__65684 == null)))?((((map__65684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65684.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65684):map__65684);
var file = cljs.core.get.call(null,map__65684__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__65684,map__65684__$1,file){
return (function (p1__65681_SHARP_,p2__65682_SHARP_){
if(cljs.core._EQ_.call(null,p1__65681_SHARP_,p2__65682_SHARP_)){
return p1__65681_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__65684,map__65684__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__65687){
var map__65688 = p__65687;
var map__65688__$1 = ((((!((map__65688 == null)))?((((map__65688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65688.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65688):map__65688);
var match_length = cljs.core.get.call(null,map__65688__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__65688__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__65686_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__65686_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__65690_SHARP_,p2__65691_SHARP_){
return cljs.core.assoc.call(null,p1__65690_SHARP_,cljs.core.get.call(null,p2__65691_SHARP_,key),p2__65691_SHARP_);
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
var loaded_f_datas_65692 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_65692);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_65692);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__65693,p__65694){
var map__65695 = p__65693;
var map__65695__$1 = ((((!((map__65695 == null)))?((((map__65695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65695.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65695):map__65695);
var on_cssload = cljs.core.get.call(null,map__65695__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__65696 = p__65694;
var map__65696__$1 = ((((!((map__65696 == null)))?((((map__65696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65696.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65696):map__65696);
var files_msg = map__65696__$1;
var files = cljs.core.get.call(null,map__65696__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1524702423037
