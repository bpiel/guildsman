// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__24573){
var map__24574 = p__24573;
var map__24574__$1 = ((((!((map__24574 == null)))?((((map__24574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24574.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24574):map__24574);
var m = map__24574__$1;
var n = cljs.core.get.call(null,map__24574__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__24574__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__24576_24598 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24577_24599 = null;
var count__24578_24600 = (0);
var i__24579_24601 = (0);
while(true){
if((i__24579_24601 < count__24578_24600)){
var f_24602 = cljs.core._nth.call(null,chunk__24577_24599,i__24579_24601);
cljs.core.println.call(null,"  ",f_24602);

var G__24603 = seq__24576_24598;
var G__24604 = chunk__24577_24599;
var G__24605 = count__24578_24600;
var G__24606 = (i__24579_24601 + (1));
seq__24576_24598 = G__24603;
chunk__24577_24599 = G__24604;
count__24578_24600 = G__24605;
i__24579_24601 = G__24606;
continue;
} else {
var temp__6738__auto___24607 = cljs.core.seq.call(null,seq__24576_24598);
if(temp__6738__auto___24607){
var seq__24576_24608__$1 = temp__6738__auto___24607;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24576_24608__$1)){
var c__10881__auto___24609 = cljs.core.chunk_first.call(null,seq__24576_24608__$1);
var G__24610 = cljs.core.chunk_rest.call(null,seq__24576_24608__$1);
var G__24611 = c__10881__auto___24609;
var G__24612 = cljs.core.count.call(null,c__10881__auto___24609);
var G__24613 = (0);
seq__24576_24598 = G__24610;
chunk__24577_24599 = G__24611;
count__24578_24600 = G__24612;
i__24579_24601 = G__24613;
continue;
} else {
var f_24614 = cljs.core.first.call(null,seq__24576_24608__$1);
cljs.core.println.call(null,"  ",f_24614);

var G__24615 = cljs.core.next.call(null,seq__24576_24608__$1);
var G__24616 = null;
var G__24617 = (0);
var G__24618 = (0);
seq__24576_24598 = G__24615;
chunk__24577_24599 = G__24616;
count__24578_24600 = G__24617;
i__24579_24601 = G__24618;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24619 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__9950__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__9950__auto__)){
return or__9950__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24619);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24619)))?cljs.core.second.call(null,arglists_24619):arglists_24619));
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
var seq__24580_24620 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24581_24621 = null;
var count__24582_24622 = (0);
var i__24583_24623 = (0);
while(true){
if((i__24583_24623 < count__24582_24622)){
var vec__24584_24624 = cljs.core._nth.call(null,chunk__24581_24621,i__24583_24623);
var name_24625 = cljs.core.nth.call(null,vec__24584_24624,(0),null);
var map__24587_24626 = cljs.core.nth.call(null,vec__24584_24624,(1),null);
var map__24587_24627__$1 = ((((!((map__24587_24626 == null)))?((((map__24587_24626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24587_24626.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24587_24626):map__24587_24626);
var doc_24628 = cljs.core.get.call(null,map__24587_24627__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_24629 = cljs.core.get.call(null,map__24587_24627__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_24625);

cljs.core.println.call(null," ",arglists_24629);

if(cljs.core.truth_(doc_24628)){
cljs.core.println.call(null," ",doc_24628);
} else {
}

var G__24630 = seq__24580_24620;
var G__24631 = chunk__24581_24621;
var G__24632 = count__24582_24622;
var G__24633 = (i__24583_24623 + (1));
seq__24580_24620 = G__24630;
chunk__24581_24621 = G__24631;
count__24582_24622 = G__24632;
i__24583_24623 = G__24633;
continue;
} else {
var temp__6738__auto___24634 = cljs.core.seq.call(null,seq__24580_24620);
if(temp__6738__auto___24634){
var seq__24580_24635__$1 = temp__6738__auto___24634;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24580_24635__$1)){
var c__10881__auto___24636 = cljs.core.chunk_first.call(null,seq__24580_24635__$1);
var G__24637 = cljs.core.chunk_rest.call(null,seq__24580_24635__$1);
var G__24638 = c__10881__auto___24636;
var G__24639 = cljs.core.count.call(null,c__10881__auto___24636);
var G__24640 = (0);
seq__24580_24620 = G__24637;
chunk__24581_24621 = G__24638;
count__24582_24622 = G__24639;
i__24583_24623 = G__24640;
continue;
} else {
var vec__24589_24641 = cljs.core.first.call(null,seq__24580_24635__$1);
var name_24642 = cljs.core.nth.call(null,vec__24589_24641,(0),null);
var map__24592_24643 = cljs.core.nth.call(null,vec__24589_24641,(1),null);
var map__24592_24644__$1 = ((((!((map__24592_24643 == null)))?((((map__24592_24643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24592_24643.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24592_24643):map__24592_24643);
var doc_24645 = cljs.core.get.call(null,map__24592_24644__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_24646 = cljs.core.get.call(null,map__24592_24644__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_24642);

cljs.core.println.call(null," ",arglists_24646);

if(cljs.core.truth_(doc_24645)){
cljs.core.println.call(null," ",doc_24645);
} else {
}

var G__24647 = cljs.core.next.call(null,seq__24580_24635__$1);
var G__24648 = null;
var G__24649 = (0);
var G__24650 = (0);
seq__24580_24620 = G__24647;
chunk__24581_24621 = G__24648;
count__24582_24622 = G__24649;
i__24583_24623 = G__24650;
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

var seq__24594 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__24595 = null;
var count__24596 = (0);
var i__24597 = (0);
while(true){
if((i__24597 < count__24596)){
var role = cljs.core._nth.call(null,chunk__24595,i__24597);
var temp__6738__auto___24651__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6738__auto___24651__$1)){
var spec_24652 = temp__6738__auto___24651__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_24652));
} else {
}

var G__24653 = seq__24594;
var G__24654 = chunk__24595;
var G__24655 = count__24596;
var G__24656 = (i__24597 + (1));
seq__24594 = G__24653;
chunk__24595 = G__24654;
count__24596 = G__24655;
i__24597 = G__24656;
continue;
} else {
var temp__6738__auto____$1 = cljs.core.seq.call(null,seq__24594);
if(temp__6738__auto____$1){
var seq__24594__$1 = temp__6738__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24594__$1)){
var c__10881__auto__ = cljs.core.chunk_first.call(null,seq__24594__$1);
var G__24657 = cljs.core.chunk_rest.call(null,seq__24594__$1);
var G__24658 = c__10881__auto__;
var G__24659 = cljs.core.count.call(null,c__10881__auto__);
var G__24660 = (0);
seq__24594 = G__24657;
chunk__24595 = G__24658;
count__24596 = G__24659;
i__24597 = G__24660;
continue;
} else {
var role = cljs.core.first.call(null,seq__24594__$1);
var temp__6738__auto___24661__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6738__auto___24661__$2)){
var spec_24662 = temp__6738__auto___24661__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_24662));
} else {
}

var G__24663 = cljs.core.next.call(null,seq__24594__$1);
var G__24664 = null;
var G__24665 = (0);
var G__24666 = (0);
seq__24594 = G__24663;
chunk__24595 = G__24664;
count__24596 = G__24665;
i__24597 = G__24666;
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

//# sourceMappingURL=repl.js.map?rel=1506917876546
