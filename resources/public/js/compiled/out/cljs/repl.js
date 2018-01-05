// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__87302){
var map__87303 = p__87302;
var map__87303__$1 = ((((!((map__87303 == null)))?((((map__87303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87303.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87303):map__87303);
var m = map__87303__$1;
var n = cljs.core.get.call(null,map__87303__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__87303__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__87305_87327 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__87306_87328 = null;
var count__87307_87329 = (0);
var i__87308_87330 = (0);
while(true){
if((i__87308_87330 < count__87307_87329)){
var f_87331 = cljs.core._nth.call(null,chunk__87306_87328,i__87308_87330);
cljs.core.println.call(null,"  ",f_87331);

var G__87332 = seq__87305_87327;
var G__87333 = chunk__87306_87328;
var G__87334 = count__87307_87329;
var G__87335 = (i__87308_87330 + (1));
seq__87305_87327 = G__87332;
chunk__87306_87328 = G__87333;
count__87307_87329 = G__87334;
i__87308_87330 = G__87335;
continue;
} else {
var temp__5457__auto___87336 = cljs.core.seq.call(null,seq__87305_87327);
if(temp__5457__auto___87336){
var seq__87305_87337__$1 = temp__5457__auto___87336;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__87305_87337__$1)){
var c__75832__auto___87338 = cljs.core.chunk_first.call(null,seq__87305_87337__$1);
var G__87339 = cljs.core.chunk_rest.call(null,seq__87305_87337__$1);
var G__87340 = c__75832__auto___87338;
var G__87341 = cljs.core.count.call(null,c__75832__auto___87338);
var G__87342 = (0);
seq__87305_87327 = G__87339;
chunk__87306_87328 = G__87340;
count__87307_87329 = G__87341;
i__87308_87330 = G__87342;
continue;
} else {
var f_87343 = cljs.core.first.call(null,seq__87305_87337__$1);
cljs.core.println.call(null,"  ",f_87343);

var G__87344 = cljs.core.next.call(null,seq__87305_87337__$1);
var G__87345 = null;
var G__87346 = (0);
var G__87347 = (0);
seq__87305_87327 = G__87344;
chunk__87306_87328 = G__87345;
count__87307_87329 = G__87346;
i__87308_87330 = G__87347;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_87348 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__74901__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__74901__auto__)){
return or__74901__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_87348);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_87348)))?cljs.core.second.call(null,arglists_87348):arglists_87348));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__87309_87349 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__87310_87350 = null;
var count__87311_87351 = (0);
var i__87312_87352 = (0);
while(true){
if((i__87312_87352 < count__87311_87351)){
var vec__87313_87353 = cljs.core._nth.call(null,chunk__87310_87350,i__87312_87352);
var name_87354 = cljs.core.nth.call(null,vec__87313_87353,(0),null);
var map__87316_87355 = cljs.core.nth.call(null,vec__87313_87353,(1),null);
var map__87316_87356__$1 = ((((!((map__87316_87355 == null)))?((((map__87316_87355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87316_87355.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87316_87355):map__87316_87355);
var doc_87357 = cljs.core.get.call(null,map__87316_87356__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_87358 = cljs.core.get.call(null,map__87316_87356__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_87354);

cljs.core.println.call(null," ",arglists_87358);

if(cljs.core.truth_(doc_87357)){
cljs.core.println.call(null," ",doc_87357);
} else {
}

var G__87359 = seq__87309_87349;
var G__87360 = chunk__87310_87350;
var G__87361 = count__87311_87351;
var G__87362 = (i__87312_87352 + (1));
seq__87309_87349 = G__87359;
chunk__87310_87350 = G__87360;
count__87311_87351 = G__87361;
i__87312_87352 = G__87362;
continue;
} else {
var temp__5457__auto___87363 = cljs.core.seq.call(null,seq__87309_87349);
if(temp__5457__auto___87363){
var seq__87309_87364__$1 = temp__5457__auto___87363;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__87309_87364__$1)){
var c__75832__auto___87365 = cljs.core.chunk_first.call(null,seq__87309_87364__$1);
var G__87366 = cljs.core.chunk_rest.call(null,seq__87309_87364__$1);
var G__87367 = c__75832__auto___87365;
var G__87368 = cljs.core.count.call(null,c__75832__auto___87365);
var G__87369 = (0);
seq__87309_87349 = G__87366;
chunk__87310_87350 = G__87367;
count__87311_87351 = G__87368;
i__87312_87352 = G__87369;
continue;
} else {
var vec__87318_87370 = cljs.core.first.call(null,seq__87309_87364__$1);
var name_87371 = cljs.core.nth.call(null,vec__87318_87370,(0),null);
var map__87321_87372 = cljs.core.nth.call(null,vec__87318_87370,(1),null);
var map__87321_87373__$1 = ((((!((map__87321_87372 == null)))?((((map__87321_87372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87321_87372.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87321_87372):map__87321_87372);
var doc_87374 = cljs.core.get.call(null,map__87321_87373__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_87375 = cljs.core.get.call(null,map__87321_87373__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_87371);

cljs.core.println.call(null," ",arglists_87375);

if(cljs.core.truth_(doc_87374)){
cljs.core.println.call(null," ",doc_87374);
} else {
}

var G__87376 = cljs.core.next.call(null,seq__87309_87364__$1);
var G__87377 = null;
var G__87378 = (0);
var G__87379 = (0);
seq__87309_87349 = G__87376;
chunk__87310_87350 = G__87377;
count__87311_87351 = G__87378;
i__87312_87352 = G__87379;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__87323 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__87324 = null;
var count__87325 = (0);
var i__87326 = (0);
while(true){
if((i__87326 < count__87325)){
var role = cljs.core._nth.call(null,chunk__87324,i__87326);
var temp__5457__auto___87380__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___87380__$1)){
var spec_87381 = temp__5457__auto___87380__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_87381));
} else {
}

var G__87382 = seq__87323;
var G__87383 = chunk__87324;
var G__87384 = count__87325;
var G__87385 = (i__87326 + (1));
seq__87323 = G__87382;
chunk__87324 = G__87383;
count__87325 = G__87384;
i__87326 = G__87385;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__87323);
if(temp__5457__auto____$1){
var seq__87323__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__87323__$1)){
var c__75832__auto__ = cljs.core.chunk_first.call(null,seq__87323__$1);
var G__87386 = cljs.core.chunk_rest.call(null,seq__87323__$1);
var G__87387 = c__75832__auto__;
var G__87388 = cljs.core.count.call(null,c__75832__auto__);
var G__87389 = (0);
seq__87323 = G__87386;
chunk__87324 = G__87387;
count__87325 = G__87388;
i__87326 = G__87389;
continue;
} else {
var role = cljs.core.first.call(null,seq__87323__$1);
var temp__5457__auto___87390__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___87390__$2)){
var spec_87391 = temp__5457__auto___87390__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_87391));
} else {
}

var G__87392 = cljs.core.next.call(null,seq__87323__$1);
var G__87393 = null;
var G__87394 = (0);
var G__87395 = (0);
seq__87323 = G__87392;
chunk__87324 = G__87393;
count__87325 = G__87394;
i__87326 = G__87395;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1515122961294
