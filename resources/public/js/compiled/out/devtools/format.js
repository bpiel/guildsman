// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__75634__auto__ = (((value == null))?null:value);
var m__75635__auto__ = (devtools.format._header[goog.typeOf(x__75634__auto__)]);
if(!((m__75635__auto__ == null))){
return m__75635__auto__.call(null,value);
} else {
var m__75635__auto____$1 = (devtools.format._header["_"]);
if(!((m__75635__auto____$1 == null))){
return m__75635__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__75634__auto__ = (((value == null))?null:value);
var m__75635__auto__ = (devtools.format._has_body[goog.typeOf(x__75634__auto__)]);
if(!((m__75635__auto__ == null))){
return m__75635__auto__.call(null,value);
} else {
var m__75635__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__75635__auto____$1 == null))){
return m__75635__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__75634__auto__ = (((value == null))?null:value);
var m__75635__auto__ = (devtools.format._body[goog.typeOf(x__75634__auto__)]);
if(!((m__75635__auto__ == null))){
return m__75635__auto__.call(null,value);
} else {
var m__75635__auto____$1 = (devtools.format._body["_"]);
if(!((m__75635__auto____$1 == null))){
return m__75635__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o88350 = temp__5455__auto__;
var temp__5455__auto____$1 = (o88350["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o88351 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o88351["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o88352 = temp__5455__auto____$2;
return (o88352["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o88353 = temp__5455__auto__;
var temp__5455__auto____$1 = (o88353["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o88354 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o88354["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o88355 = temp__5455__auto____$2;
return (o88355["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o88356 = temp__5455__auto__;
var temp__5455__auto____$1 = (o88356["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o88357 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o88357["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o88358 = temp__5455__auto____$2;
return (o88358["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o88359 = temp__5455__auto__;
var temp__5455__auto____$1 = (o88359["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o88360 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o88360["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o88361 = temp__5455__auto____$2;
return (o88361["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o88362 = temp__5455__auto__;
var temp__5455__auto____$1 = (o88362["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o88363 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o88363["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o88364 = temp__5455__auto____$2;
return (o88364["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o88365 = temp__5455__auto__;
var temp__5455__auto____$1 = (o88365["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o88366 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o88366["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o88367 = temp__5455__auto____$2;
return (o88367["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o88368 = temp__5455__auto__;
var temp__5455__auto____$1 = (o88368["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o88369 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o88369["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o88370 = temp__5455__auto____$2;
return (o88370["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__76185__auto__ = [];
var len__76178__auto___88372 = arguments.length;
var i__76179__auto___88373 = (0);
while(true){
if((i__76179__auto___88373 < len__76178__auto___88372)){
args__76185__auto__.push((arguments[i__76179__auto___88373]));

var G__88374 = (i__76179__auto___88373 + (1));
i__76179__auto___88373 = G__88374;
continue;
} else {
}
break;
}

var argseq__76186__auto__ = ((((0) < args__76185__auto__.length))?(new cljs.core.IndexedSeq(args__76185__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__76186__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq88371){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88371));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__76185__auto__ = [];
var len__76178__auto___88376 = arguments.length;
var i__76179__auto___88377 = (0);
while(true){
if((i__76179__auto___88377 < len__76178__auto___88376)){
args__76185__auto__.push((arguments[i__76179__auto___88377]));

var G__88378 = (i__76179__auto___88377 + (1));
i__76179__auto___88377 = G__88378;
continue;
} else {
}
break;
}

var argseq__76186__auto__ = ((((0) < args__76185__auto__.length))?(new cljs.core.IndexedSeq(args__76185__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__76186__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq88375){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88375));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__76185__auto__ = [];
var len__76178__auto___88380 = arguments.length;
var i__76179__auto___88381 = (0);
while(true){
if((i__76179__auto___88381 < len__76178__auto___88380)){
args__76185__auto__.push((arguments[i__76179__auto___88381]));

var G__88382 = (i__76179__auto___88381 + (1));
i__76179__auto___88381 = G__88382;
continue;
} else {
}
break;
}

var argseq__76186__auto__ = ((((0) < args__76185__auto__.length))?(new cljs.core.IndexedSeq(args__76185__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__76186__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq88379){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88379));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__76185__auto__ = [];
var len__76178__auto___88384 = arguments.length;
var i__76179__auto___88385 = (0);
while(true){
if((i__76179__auto___88385 < len__76178__auto___88384)){
args__76185__auto__.push((arguments[i__76179__auto___88385]));

var G__88386 = (i__76179__auto___88385 + (1));
i__76179__auto___88385 = G__88386;
continue;
} else {
}
break;
}

var argseq__76186__auto__ = ((((0) < args__76185__auto__.length))?(new cljs.core.IndexedSeq(args__76185__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__76186__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq88383){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88383));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__76185__auto__ = [];
var len__76178__auto___88388 = arguments.length;
var i__76179__auto___88389 = (0);
while(true){
if((i__76179__auto___88389 < len__76178__auto___88388)){
args__76185__auto__.push((arguments[i__76179__auto___88389]));

var G__88390 = (i__76179__auto___88389 + (1));
i__76179__auto___88389 = G__88390;
continue;
} else {
}
break;
}

var argseq__76186__auto__ = ((((0) < args__76185__auto__.length))?(new cljs.core.IndexedSeq(args__76185__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__76186__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq88387){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88387));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__76185__auto__ = [];
var len__76178__auto___88392 = arguments.length;
var i__76179__auto___88393 = (0);
while(true){
if((i__76179__auto___88393 < len__76178__auto___88392)){
args__76185__auto__.push((arguments[i__76179__auto___88393]));

var G__88394 = (i__76179__auto___88393 + (1));
i__76179__auto___88393 = G__88394;
continue;
} else {
}
break;
}

var argseq__76186__auto__ = ((((0) < args__76185__auto__.length))?(new cljs.core.IndexedSeq(args__76185__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__76186__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq88391){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88391));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__76185__auto__ = [];
var len__76178__auto___88396 = arguments.length;
var i__76179__auto___88397 = (0);
while(true){
if((i__76179__auto___88397 < len__76178__auto___88396)){
args__76185__auto__.push((arguments[i__76179__auto___88397]));

var G__88398 = (i__76179__auto___88397 + (1));
i__76179__auto___88397 = G__88398;
continue;
} else {
}
break;
}

var argseq__76186__auto__ = ((((0) < args__76185__auto__.length))?(new cljs.core.IndexedSeq(args__76185__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__76186__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq88395){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88395));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__76185__auto__ = [];
var len__76178__auto___88406 = arguments.length;
var i__76179__auto___88407 = (0);
while(true){
if((i__76179__auto___88407 < len__76178__auto___88406)){
args__76185__auto__.push((arguments[i__76179__auto___88407]));

var G__88408 = (i__76179__auto___88407 + (1));
i__76179__auto___88407 = G__88408;
continue;
} else {
}
break;
}

var argseq__76186__auto__ = ((((1) < args__76185__auto__.length))?(new cljs.core.IndexedSeq(args__76185__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__76186__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__88402){
var vec__88403 = p__88402;
var state_override = cljs.core.nth.call(null,vec__88403,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__88403,state_override){
return (function (p1__88399_SHARP_){
return cljs.core.merge.call(null,p1__88399_SHARP_,state_override);
});})(vec__88403,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq88400){
var G__88401 = cljs.core.first.call(null,seq88400);
var seq88400__$1 = cljs.core.next.call(null,seq88400);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__88401,seq88400__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__76185__auto__ = [];
var len__76178__auto___88410 = arguments.length;
var i__76179__auto___88411 = (0);
while(true){
if((i__76179__auto___88411 < len__76178__auto___88410)){
args__76185__auto__.push((arguments[i__76179__auto___88411]));

var G__88412 = (i__76179__auto___88411 + (1));
i__76179__auto___88411 = G__88412;
continue;
} else {
}
break;
}

var argseq__76186__auto__ = ((((0) < args__76185__auto__.length))?(new cljs.core.IndexedSeq(args__76185__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__76186__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq88409){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88409));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__76185__auto__ = [];
var len__76178__auto___88415 = arguments.length;
var i__76179__auto___88416 = (0);
while(true){
if((i__76179__auto___88416 < len__76178__auto___88415)){
args__76185__auto__.push((arguments[i__76179__auto___88416]));

var G__88417 = (i__76179__auto___88416 + (1));
i__76179__auto___88416 = G__88417;
continue;
} else {
}
break;
}

var argseq__76186__auto__ = ((((1) < args__76185__auto__.length))?(new cljs.core.IndexedSeq(args__76185__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__76186__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq88413){
var G__88414 = cljs.core.first.call(null,seq88413);
var seq88413__$1 = cljs.core.next.call(null,seq88413);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__88414,seq88413__$1);
});


//# sourceMappingURL=format.js.map?rel=1515122962983
