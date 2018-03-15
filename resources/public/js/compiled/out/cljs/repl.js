// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__22088){
var map__22089 = p__22088;
var map__22089__$1 = ((((!((map__22089 == null)))?((((map__22089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22089.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22089):map__22089);
var m = map__22089__$1;
var n = cljs.core.get.call(null,map__22089__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__22089__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__22091_22113 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22092_22114 = null;
var count__22093_22115 = (0);
var i__22094_22116 = (0);
while(true){
if((i__22094_22116 < count__22093_22115)){
var f_22117 = cljs.core._nth.call(null,chunk__22092_22114,i__22094_22116);
cljs.core.println.call(null,"  ",f_22117);

var G__22118 = seq__22091_22113;
var G__22119 = chunk__22092_22114;
var G__22120 = count__22093_22115;
var G__22121 = (i__22094_22116 + (1));
seq__22091_22113 = G__22118;
chunk__22092_22114 = G__22119;
count__22093_22115 = G__22120;
i__22094_22116 = G__22121;
continue;
} else {
var temp__5457__auto___22122 = cljs.core.seq.call(null,seq__22091_22113);
if(temp__5457__auto___22122){
var seq__22091_22123__$1 = temp__5457__auto___22122;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22091_22123__$1)){
var c__9290__auto___22124 = cljs.core.chunk_first.call(null,seq__22091_22123__$1);
var G__22125 = cljs.core.chunk_rest.call(null,seq__22091_22123__$1);
var G__22126 = c__9290__auto___22124;
var G__22127 = cljs.core.count.call(null,c__9290__auto___22124);
var G__22128 = (0);
seq__22091_22113 = G__22125;
chunk__22092_22114 = G__22126;
count__22093_22115 = G__22127;
i__22094_22116 = G__22128;
continue;
} else {
var f_22129 = cljs.core.first.call(null,seq__22091_22123__$1);
cljs.core.println.call(null,"  ",f_22129);

var G__22130 = cljs.core.next.call(null,seq__22091_22123__$1);
var G__22131 = null;
var G__22132 = (0);
var G__22133 = (0);
seq__22091_22113 = G__22130;
chunk__22092_22114 = G__22131;
count__22093_22115 = G__22132;
i__22094_22116 = G__22133;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_22134 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__8359__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__8359__auto__)){
return or__8359__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_22134);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_22134)))?cljs.core.second.call(null,arglists_22134):arglists_22134));
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
var seq__22095_22135 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22096_22136 = null;
var count__22097_22137 = (0);
var i__22098_22138 = (0);
while(true){
if((i__22098_22138 < count__22097_22137)){
var vec__22099_22139 = cljs.core._nth.call(null,chunk__22096_22136,i__22098_22138);
var name_22140 = cljs.core.nth.call(null,vec__22099_22139,(0),null);
var map__22102_22141 = cljs.core.nth.call(null,vec__22099_22139,(1),null);
var map__22102_22142__$1 = ((((!((map__22102_22141 == null)))?((((map__22102_22141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22102_22141.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22102_22141):map__22102_22141);
var doc_22143 = cljs.core.get.call(null,map__22102_22142__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_22144 = cljs.core.get.call(null,map__22102_22142__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_22140);

cljs.core.println.call(null," ",arglists_22144);

if(cljs.core.truth_(doc_22143)){
cljs.core.println.call(null," ",doc_22143);
} else {
}

var G__22145 = seq__22095_22135;
var G__22146 = chunk__22096_22136;
var G__22147 = count__22097_22137;
var G__22148 = (i__22098_22138 + (1));
seq__22095_22135 = G__22145;
chunk__22096_22136 = G__22146;
count__22097_22137 = G__22147;
i__22098_22138 = G__22148;
continue;
} else {
var temp__5457__auto___22149 = cljs.core.seq.call(null,seq__22095_22135);
if(temp__5457__auto___22149){
var seq__22095_22150__$1 = temp__5457__auto___22149;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22095_22150__$1)){
var c__9290__auto___22151 = cljs.core.chunk_first.call(null,seq__22095_22150__$1);
var G__22152 = cljs.core.chunk_rest.call(null,seq__22095_22150__$1);
var G__22153 = c__9290__auto___22151;
var G__22154 = cljs.core.count.call(null,c__9290__auto___22151);
var G__22155 = (0);
seq__22095_22135 = G__22152;
chunk__22096_22136 = G__22153;
count__22097_22137 = G__22154;
i__22098_22138 = G__22155;
continue;
} else {
var vec__22104_22156 = cljs.core.first.call(null,seq__22095_22150__$1);
var name_22157 = cljs.core.nth.call(null,vec__22104_22156,(0),null);
var map__22107_22158 = cljs.core.nth.call(null,vec__22104_22156,(1),null);
var map__22107_22159__$1 = ((((!((map__22107_22158 == null)))?((((map__22107_22158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22107_22158.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22107_22158):map__22107_22158);
var doc_22160 = cljs.core.get.call(null,map__22107_22159__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_22161 = cljs.core.get.call(null,map__22107_22159__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_22157);

cljs.core.println.call(null," ",arglists_22161);

if(cljs.core.truth_(doc_22160)){
cljs.core.println.call(null," ",doc_22160);
} else {
}

var G__22162 = cljs.core.next.call(null,seq__22095_22150__$1);
var G__22163 = null;
var G__22164 = (0);
var G__22165 = (0);
seq__22095_22135 = G__22162;
chunk__22096_22136 = G__22163;
count__22097_22137 = G__22164;
i__22098_22138 = G__22165;
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

var seq__22109 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__22110 = null;
var count__22111 = (0);
var i__22112 = (0);
while(true){
if((i__22112 < count__22111)){
var role = cljs.core._nth.call(null,chunk__22110,i__22112);
var temp__5457__auto___22166__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___22166__$1)){
var spec_22167 = temp__5457__auto___22166__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_22167));
} else {
}

var G__22168 = seq__22109;
var G__22169 = chunk__22110;
var G__22170 = count__22111;
var G__22171 = (i__22112 + (1));
seq__22109 = G__22168;
chunk__22110 = G__22169;
count__22111 = G__22170;
i__22112 = G__22171;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__22109);
if(temp__5457__auto____$1){
var seq__22109__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22109__$1)){
var c__9290__auto__ = cljs.core.chunk_first.call(null,seq__22109__$1);
var G__22172 = cljs.core.chunk_rest.call(null,seq__22109__$1);
var G__22173 = c__9290__auto__;
var G__22174 = cljs.core.count.call(null,c__9290__auto__);
var G__22175 = (0);
seq__22109 = G__22172;
chunk__22110 = G__22173;
count__22111 = G__22174;
i__22112 = G__22175;
continue;
} else {
var role = cljs.core.first.call(null,seq__22109__$1);
var temp__5457__auto___22176__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___22176__$2)){
var spec_22177 = temp__5457__auto___22176__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_22177));
} else {
}

var G__22178 = cljs.core.next.call(null,seq__22109__$1);
var G__22179 = null;
var G__22180 = (0);
var G__22181 = (0);
seq__22109 = G__22178;
chunk__22110 = G__22179;
count__22111 = G__22180;
i__22112 = G__22181;
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

//# sourceMappingURL=repl.js.map?rel=1521112600101
