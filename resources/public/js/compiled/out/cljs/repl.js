// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__75163){
var map__75164 = p__75163;
var map__75164__$1 = ((((!((map__75164 == null)))?((((map__75164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75164.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__75164):map__75164);
var m = map__75164__$1;
var n = cljs.core.get.call(null,map__75164__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__75164__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__75166_75188 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__75167_75189 = null;
var count__75168_75190 = (0);
var i__75169_75191 = (0);
while(true){
if((i__75169_75191 < count__75168_75190)){
var f_75192 = cljs.core._nth.call(null,chunk__75167_75189,i__75169_75191);
cljs.core.println.call(null,"  ",f_75192);

var G__75193 = seq__75166_75188;
var G__75194 = chunk__75167_75189;
var G__75195 = count__75168_75190;
var G__75196 = (i__75169_75191 + (1));
seq__75166_75188 = G__75193;
chunk__75167_75189 = G__75194;
count__75168_75190 = G__75195;
i__75169_75191 = G__75196;
continue;
} else {
var temp__5457__auto___75197 = cljs.core.seq.call(null,seq__75166_75188);
if(temp__5457__auto___75197){
var seq__75166_75198__$1 = temp__5457__auto___75197;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75166_75198__$1)){
var c__63692__auto___75199 = cljs.core.chunk_first.call(null,seq__75166_75198__$1);
var G__75200 = cljs.core.chunk_rest.call(null,seq__75166_75198__$1);
var G__75201 = c__63692__auto___75199;
var G__75202 = cljs.core.count.call(null,c__63692__auto___75199);
var G__75203 = (0);
seq__75166_75188 = G__75200;
chunk__75167_75189 = G__75201;
count__75168_75190 = G__75202;
i__75169_75191 = G__75203;
continue;
} else {
var f_75204 = cljs.core.first.call(null,seq__75166_75198__$1);
cljs.core.println.call(null,"  ",f_75204);

var G__75205 = cljs.core.next.call(null,seq__75166_75198__$1);
var G__75206 = null;
var G__75207 = (0);
var G__75208 = (0);
seq__75166_75188 = G__75205;
chunk__75167_75189 = G__75206;
count__75168_75190 = G__75207;
i__75169_75191 = G__75208;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_75209 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__62761__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__62761__auto__)){
return or__62761__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_75209);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_75209)))?cljs.core.second.call(null,arglists_75209):arglists_75209));
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
var seq__75170_75210 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__75171_75211 = null;
var count__75172_75212 = (0);
var i__75173_75213 = (0);
while(true){
if((i__75173_75213 < count__75172_75212)){
var vec__75174_75214 = cljs.core._nth.call(null,chunk__75171_75211,i__75173_75213);
var name_75215 = cljs.core.nth.call(null,vec__75174_75214,(0),null);
var map__75177_75216 = cljs.core.nth.call(null,vec__75174_75214,(1),null);
var map__75177_75217__$1 = ((((!((map__75177_75216 == null)))?((((map__75177_75216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75177_75216.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__75177_75216):map__75177_75216);
var doc_75218 = cljs.core.get.call(null,map__75177_75217__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_75219 = cljs.core.get.call(null,map__75177_75217__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_75215);

cljs.core.println.call(null," ",arglists_75219);

if(cljs.core.truth_(doc_75218)){
cljs.core.println.call(null," ",doc_75218);
} else {
}

var G__75220 = seq__75170_75210;
var G__75221 = chunk__75171_75211;
var G__75222 = count__75172_75212;
var G__75223 = (i__75173_75213 + (1));
seq__75170_75210 = G__75220;
chunk__75171_75211 = G__75221;
count__75172_75212 = G__75222;
i__75173_75213 = G__75223;
continue;
} else {
var temp__5457__auto___75224 = cljs.core.seq.call(null,seq__75170_75210);
if(temp__5457__auto___75224){
var seq__75170_75225__$1 = temp__5457__auto___75224;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75170_75225__$1)){
var c__63692__auto___75226 = cljs.core.chunk_first.call(null,seq__75170_75225__$1);
var G__75227 = cljs.core.chunk_rest.call(null,seq__75170_75225__$1);
var G__75228 = c__63692__auto___75226;
var G__75229 = cljs.core.count.call(null,c__63692__auto___75226);
var G__75230 = (0);
seq__75170_75210 = G__75227;
chunk__75171_75211 = G__75228;
count__75172_75212 = G__75229;
i__75173_75213 = G__75230;
continue;
} else {
var vec__75179_75231 = cljs.core.first.call(null,seq__75170_75225__$1);
var name_75232 = cljs.core.nth.call(null,vec__75179_75231,(0),null);
var map__75182_75233 = cljs.core.nth.call(null,vec__75179_75231,(1),null);
var map__75182_75234__$1 = ((((!((map__75182_75233 == null)))?((((map__75182_75233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75182_75233.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__75182_75233):map__75182_75233);
var doc_75235 = cljs.core.get.call(null,map__75182_75234__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_75236 = cljs.core.get.call(null,map__75182_75234__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_75232);

cljs.core.println.call(null," ",arglists_75236);

if(cljs.core.truth_(doc_75235)){
cljs.core.println.call(null," ",doc_75235);
} else {
}

var G__75237 = cljs.core.next.call(null,seq__75170_75225__$1);
var G__75238 = null;
var G__75239 = (0);
var G__75240 = (0);
seq__75170_75210 = G__75237;
chunk__75171_75211 = G__75238;
count__75172_75212 = G__75239;
i__75173_75213 = G__75240;
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

var seq__75184 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__75185 = null;
var count__75186 = (0);
var i__75187 = (0);
while(true){
if((i__75187 < count__75186)){
var role = cljs.core._nth.call(null,chunk__75185,i__75187);
var temp__5457__auto___75241__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___75241__$1)){
var spec_75242 = temp__5457__auto___75241__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_75242));
} else {
}

var G__75243 = seq__75184;
var G__75244 = chunk__75185;
var G__75245 = count__75186;
var G__75246 = (i__75187 + (1));
seq__75184 = G__75243;
chunk__75185 = G__75244;
count__75186 = G__75245;
i__75187 = G__75246;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__75184);
if(temp__5457__auto____$1){
var seq__75184__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75184__$1)){
var c__63692__auto__ = cljs.core.chunk_first.call(null,seq__75184__$1);
var G__75247 = cljs.core.chunk_rest.call(null,seq__75184__$1);
var G__75248 = c__63692__auto__;
var G__75249 = cljs.core.count.call(null,c__63692__auto__);
var G__75250 = (0);
seq__75184 = G__75247;
chunk__75185 = G__75248;
count__75186 = G__75249;
i__75187 = G__75250;
continue;
} else {
var role = cljs.core.first.call(null,seq__75184__$1);
var temp__5457__auto___75251__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___75251__$2)){
var spec_75252 = temp__5457__auto___75251__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_75252));
} else {
}

var G__75253 = cljs.core.next.call(null,seq__75184__$1);
var G__75254 = null;
var G__75255 = (0);
var G__75256 = (0);
seq__75184 = G__75253;
chunk__75185 = G__75254;
count__75186 = G__75255;
i__75187 = G__75256;
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

//# sourceMappingURL=repl.js.map?rel=1514950340137
