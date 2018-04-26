// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__66276){
var map__66277 = p__66276;
var map__66277__$1 = ((((!((map__66277 == null)))?((((map__66277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66277.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66277):map__66277);
var m = map__66277__$1;
var n = cljs.core.get.call(null,map__66277__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__66277__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__66279_66301 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__66280_66302 = null;
var count__66281_66303 = (0);
var i__66282_66304 = (0);
while(true){
if((i__66282_66304 < count__66281_66303)){
var f_66305 = cljs.core._nth.call(null,chunk__66280_66302,i__66282_66304);
cljs.core.println.call(null,"  ",f_66305);

var G__66306 = seq__66279_66301;
var G__66307 = chunk__66280_66302;
var G__66308 = count__66281_66303;
var G__66309 = (i__66282_66304 + (1));
seq__66279_66301 = G__66306;
chunk__66280_66302 = G__66307;
count__66281_66303 = G__66308;
i__66282_66304 = G__66309;
continue;
} else {
var temp__5457__auto___66310 = cljs.core.seq.call(null,seq__66279_66301);
if(temp__5457__auto___66310){
var seq__66279_66311__$1 = temp__5457__auto___66310;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66279_66311__$1)){
var c__53901__auto___66312 = cljs.core.chunk_first.call(null,seq__66279_66311__$1);
var G__66313 = cljs.core.chunk_rest.call(null,seq__66279_66311__$1);
var G__66314 = c__53901__auto___66312;
var G__66315 = cljs.core.count.call(null,c__53901__auto___66312);
var G__66316 = (0);
seq__66279_66301 = G__66313;
chunk__66280_66302 = G__66314;
count__66281_66303 = G__66315;
i__66282_66304 = G__66316;
continue;
} else {
var f_66317 = cljs.core.first.call(null,seq__66279_66311__$1);
cljs.core.println.call(null,"  ",f_66317);

var G__66318 = cljs.core.next.call(null,seq__66279_66311__$1);
var G__66319 = null;
var G__66320 = (0);
var G__66321 = (0);
seq__66279_66301 = G__66318;
chunk__66280_66302 = G__66319;
count__66281_66303 = G__66320;
i__66282_66304 = G__66321;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_66322 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__52970__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__52970__auto__)){
return or__52970__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_66322);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_66322)))?cljs.core.second.call(null,arglists_66322):arglists_66322));
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
var seq__66283_66323 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__66284_66324 = null;
var count__66285_66325 = (0);
var i__66286_66326 = (0);
while(true){
if((i__66286_66326 < count__66285_66325)){
var vec__66287_66327 = cljs.core._nth.call(null,chunk__66284_66324,i__66286_66326);
var name_66328 = cljs.core.nth.call(null,vec__66287_66327,(0),null);
var map__66290_66329 = cljs.core.nth.call(null,vec__66287_66327,(1),null);
var map__66290_66330__$1 = ((((!((map__66290_66329 == null)))?((((map__66290_66329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66290_66329.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66290_66329):map__66290_66329);
var doc_66331 = cljs.core.get.call(null,map__66290_66330__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_66332 = cljs.core.get.call(null,map__66290_66330__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_66328);

cljs.core.println.call(null," ",arglists_66332);

if(cljs.core.truth_(doc_66331)){
cljs.core.println.call(null," ",doc_66331);
} else {
}

var G__66333 = seq__66283_66323;
var G__66334 = chunk__66284_66324;
var G__66335 = count__66285_66325;
var G__66336 = (i__66286_66326 + (1));
seq__66283_66323 = G__66333;
chunk__66284_66324 = G__66334;
count__66285_66325 = G__66335;
i__66286_66326 = G__66336;
continue;
} else {
var temp__5457__auto___66337 = cljs.core.seq.call(null,seq__66283_66323);
if(temp__5457__auto___66337){
var seq__66283_66338__$1 = temp__5457__auto___66337;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66283_66338__$1)){
var c__53901__auto___66339 = cljs.core.chunk_first.call(null,seq__66283_66338__$1);
var G__66340 = cljs.core.chunk_rest.call(null,seq__66283_66338__$1);
var G__66341 = c__53901__auto___66339;
var G__66342 = cljs.core.count.call(null,c__53901__auto___66339);
var G__66343 = (0);
seq__66283_66323 = G__66340;
chunk__66284_66324 = G__66341;
count__66285_66325 = G__66342;
i__66286_66326 = G__66343;
continue;
} else {
var vec__66292_66344 = cljs.core.first.call(null,seq__66283_66338__$1);
var name_66345 = cljs.core.nth.call(null,vec__66292_66344,(0),null);
var map__66295_66346 = cljs.core.nth.call(null,vec__66292_66344,(1),null);
var map__66295_66347__$1 = ((((!((map__66295_66346 == null)))?((((map__66295_66346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66295_66346.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66295_66346):map__66295_66346);
var doc_66348 = cljs.core.get.call(null,map__66295_66347__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_66349 = cljs.core.get.call(null,map__66295_66347__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_66345);

cljs.core.println.call(null," ",arglists_66349);

if(cljs.core.truth_(doc_66348)){
cljs.core.println.call(null," ",doc_66348);
} else {
}

var G__66350 = cljs.core.next.call(null,seq__66283_66338__$1);
var G__66351 = null;
var G__66352 = (0);
var G__66353 = (0);
seq__66283_66323 = G__66350;
chunk__66284_66324 = G__66351;
count__66285_66325 = G__66352;
i__66286_66326 = G__66353;
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

var seq__66297 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__66298 = null;
var count__66299 = (0);
var i__66300 = (0);
while(true){
if((i__66300 < count__66299)){
var role = cljs.core._nth.call(null,chunk__66298,i__66300);
var temp__5457__auto___66354__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___66354__$1)){
var spec_66355 = temp__5457__auto___66354__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_66355));
} else {
}

var G__66356 = seq__66297;
var G__66357 = chunk__66298;
var G__66358 = count__66299;
var G__66359 = (i__66300 + (1));
seq__66297 = G__66356;
chunk__66298 = G__66357;
count__66299 = G__66358;
i__66300 = G__66359;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__66297);
if(temp__5457__auto____$1){
var seq__66297__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66297__$1)){
var c__53901__auto__ = cljs.core.chunk_first.call(null,seq__66297__$1);
var G__66360 = cljs.core.chunk_rest.call(null,seq__66297__$1);
var G__66361 = c__53901__auto__;
var G__66362 = cljs.core.count.call(null,c__53901__auto__);
var G__66363 = (0);
seq__66297 = G__66360;
chunk__66298 = G__66361;
count__66299 = G__66362;
i__66300 = G__66363;
continue;
} else {
var role = cljs.core.first.call(null,seq__66297__$1);
var temp__5457__auto___66364__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___66364__$2)){
var spec_66365 = temp__5457__auto___66364__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_66365));
} else {
}

var G__66366 = cljs.core.next.call(null,seq__66297__$1);
var G__66367 = null;
var G__66368 = (0);
var G__66369 = (0);
seq__66297 = G__66366;
chunk__66298 = G__66367;
count__66299 = G__66368;
i__66300 = G__66369;
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

//# sourceMappingURL=repl.js.map?rel=1524702423818
