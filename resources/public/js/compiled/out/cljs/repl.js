// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__24391){
var map__24392 = p__24391;
var map__24392__$1 = ((((!((map__24392 == null)))?((((map__24392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24392.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24392):map__24392);
var m = map__24392__$1;
var n = cljs.core.get.call(null,map__24392__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__24392__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__6738__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6738__auto__)){
var ns = temp__6738__auto__;
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
var seq__24394_24416 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24395_24417 = null;
var count__24396_24418 = (0);
var i__24397_24419 = (0);
while(true){
if((i__24397_24419 < count__24396_24418)){
var f_24420 = cljs.core._nth.call(null,chunk__24395_24417,i__24397_24419);
cljs.core.println.call(null,"  ",f_24420);

var G__24421 = seq__24394_24416;
var G__24422 = chunk__24395_24417;
var G__24423 = count__24396_24418;
var G__24424 = (i__24397_24419 + (1));
seq__24394_24416 = G__24421;
chunk__24395_24417 = G__24422;
count__24396_24418 = G__24423;
i__24397_24419 = G__24424;
continue;
} else {
var temp__6738__auto___24425 = cljs.core.seq.call(null,seq__24394_24416);
if(temp__6738__auto___24425){
var seq__24394_24426__$1 = temp__6738__auto___24425;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24394_24426__$1)){
var c__10741__auto___24427 = cljs.core.chunk_first.call(null,seq__24394_24426__$1);
var G__24428 = cljs.core.chunk_rest.call(null,seq__24394_24426__$1);
var G__24429 = c__10741__auto___24427;
var G__24430 = cljs.core.count.call(null,c__10741__auto___24427);
var G__24431 = (0);
seq__24394_24416 = G__24428;
chunk__24395_24417 = G__24429;
count__24396_24418 = G__24430;
i__24397_24419 = G__24431;
continue;
} else {
var f_24432 = cljs.core.first.call(null,seq__24394_24426__$1);
cljs.core.println.call(null,"  ",f_24432);

var G__24433 = cljs.core.next.call(null,seq__24394_24426__$1);
var G__24434 = null;
var G__24435 = (0);
var G__24436 = (0);
seq__24394_24416 = G__24433;
chunk__24395_24417 = G__24434;
count__24396_24418 = G__24435;
i__24397_24419 = G__24436;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24437 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__9810__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__9810__auto__)){
return or__9810__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24437);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24437)))?cljs.core.second.call(null,arglists_24437):arglists_24437));
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
var seq__24398_24438 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24399_24439 = null;
var count__24400_24440 = (0);
var i__24401_24441 = (0);
while(true){
if((i__24401_24441 < count__24400_24440)){
var vec__24402_24442 = cljs.core._nth.call(null,chunk__24399_24439,i__24401_24441);
var name_24443 = cljs.core.nth.call(null,vec__24402_24442,(0),null);
var map__24405_24444 = cljs.core.nth.call(null,vec__24402_24442,(1),null);
var map__24405_24445__$1 = ((((!((map__24405_24444 == null)))?((((map__24405_24444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24405_24444.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24405_24444):map__24405_24444);
var doc_24446 = cljs.core.get.call(null,map__24405_24445__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_24447 = cljs.core.get.call(null,map__24405_24445__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_24443);

cljs.core.println.call(null," ",arglists_24447);

if(cljs.core.truth_(doc_24446)){
cljs.core.println.call(null," ",doc_24446);
} else {
}

var G__24448 = seq__24398_24438;
var G__24449 = chunk__24399_24439;
var G__24450 = count__24400_24440;
var G__24451 = (i__24401_24441 + (1));
seq__24398_24438 = G__24448;
chunk__24399_24439 = G__24449;
count__24400_24440 = G__24450;
i__24401_24441 = G__24451;
continue;
} else {
var temp__6738__auto___24452 = cljs.core.seq.call(null,seq__24398_24438);
if(temp__6738__auto___24452){
var seq__24398_24453__$1 = temp__6738__auto___24452;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24398_24453__$1)){
var c__10741__auto___24454 = cljs.core.chunk_first.call(null,seq__24398_24453__$1);
var G__24455 = cljs.core.chunk_rest.call(null,seq__24398_24453__$1);
var G__24456 = c__10741__auto___24454;
var G__24457 = cljs.core.count.call(null,c__10741__auto___24454);
var G__24458 = (0);
seq__24398_24438 = G__24455;
chunk__24399_24439 = G__24456;
count__24400_24440 = G__24457;
i__24401_24441 = G__24458;
continue;
} else {
var vec__24407_24459 = cljs.core.first.call(null,seq__24398_24453__$1);
var name_24460 = cljs.core.nth.call(null,vec__24407_24459,(0),null);
var map__24410_24461 = cljs.core.nth.call(null,vec__24407_24459,(1),null);
var map__24410_24462__$1 = ((((!((map__24410_24461 == null)))?((((map__24410_24461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24410_24461.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24410_24461):map__24410_24461);
var doc_24463 = cljs.core.get.call(null,map__24410_24462__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_24464 = cljs.core.get.call(null,map__24410_24462__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_24460);

cljs.core.println.call(null," ",arglists_24464);

if(cljs.core.truth_(doc_24463)){
cljs.core.println.call(null," ",doc_24463);
} else {
}

var G__24465 = cljs.core.next.call(null,seq__24398_24453__$1);
var G__24466 = null;
var G__24467 = (0);
var G__24468 = (0);
seq__24398_24438 = G__24465;
chunk__24399_24439 = G__24466;
count__24400_24440 = G__24467;
i__24401_24441 = G__24468;
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
var temp__6738__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6738__auto__)){
var fnspec = temp__6738__auto__;
cljs.core.print.call(null,"Spec");

var seq__24412 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__24413 = null;
var count__24414 = (0);
var i__24415 = (0);
while(true){
if((i__24415 < count__24414)){
var role = cljs.core._nth.call(null,chunk__24413,i__24415);
var temp__6738__auto___24469__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6738__auto___24469__$1)){
var spec_24470 = temp__6738__auto___24469__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_24470));
} else {
}

var G__24471 = seq__24412;
var G__24472 = chunk__24413;
var G__24473 = count__24414;
var G__24474 = (i__24415 + (1));
seq__24412 = G__24471;
chunk__24413 = G__24472;
count__24414 = G__24473;
i__24415 = G__24474;
continue;
} else {
var temp__6738__auto____$1 = cljs.core.seq.call(null,seq__24412);
if(temp__6738__auto____$1){
var seq__24412__$1 = temp__6738__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24412__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__24412__$1);
var G__24475 = cljs.core.chunk_rest.call(null,seq__24412__$1);
var G__24476 = c__10741__auto__;
var G__24477 = cljs.core.count.call(null,c__10741__auto__);
var G__24478 = (0);
seq__24412 = G__24475;
chunk__24413 = G__24476;
count__24414 = G__24477;
i__24415 = G__24478;
continue;
} else {
var role = cljs.core.first.call(null,seq__24412__$1);
var temp__6738__auto___24479__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6738__auto___24479__$2)){
var spec_24480 = temp__6738__auto___24479__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_24480));
} else {
}

var G__24481 = cljs.core.next.call(null,seq__24412__$1);
var G__24482 = null;
var G__24483 = (0);
var G__24484 = (0);
seq__24412 = G__24481;
chunk__24413 = G__24482;
count__24414 = G__24483;
i__24415 = G__24484;
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

//# sourceMappingURL=repl.js.map?rel=1506896687345
