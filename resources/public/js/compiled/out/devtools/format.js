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
var x__63494__auto__ = (((value == null))?null:value);
var m__63495__auto__ = (devtools.format._header[goog.typeOf(x__63494__auto__)]);
if(!((m__63495__auto__ == null))){
return m__63495__auto__.call(null,value);
} else {
var m__63495__auto____$1 = (devtools.format._header["_"]);
if(!((m__63495__auto____$1 == null))){
return m__63495__auto____$1.call(null,value);
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
var x__63494__auto__ = (((value == null))?null:value);
var m__63495__auto__ = (devtools.format._has_body[goog.typeOf(x__63494__auto__)]);
if(!((m__63495__auto__ == null))){
return m__63495__auto__.call(null,value);
} else {
var m__63495__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__63495__auto____$1 == null))){
return m__63495__auto____$1.call(null,value);
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
var x__63494__auto__ = (((value == null))?null:value);
var m__63495__auto__ = (devtools.format._body[goog.typeOf(x__63494__auto__)]);
if(!((m__63495__auto__ == null))){
return m__63495__auto__.call(null,value);
} else {
var m__63495__auto____$1 = (devtools.format._body["_"]);
if(!((m__63495__auto____$1 == null))){
return m__63495__auto____$1.call(null,value);
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
var o76211 = temp__5455__auto__;
var temp__5455__auto____$1 = (o76211["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o76212 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o76212["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o76213 = temp__5455__auto____$2;
return (o76213["make_template"]);
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
var o76214 = temp__5455__auto__;
var temp__5455__auto____$1 = (o76214["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o76215 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o76215["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o76216 = temp__5455__auto____$2;
return (o76216["make_group"]);
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
var o76217 = temp__5455__auto__;
var temp__5455__auto____$1 = (o76217["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o76218 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o76218["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o76219 = temp__5455__auto____$2;
return (o76219["make_reference"]);
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
var o76220 = temp__5455__auto__;
var temp__5455__auto____$1 = (o76220["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o76221 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o76221["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o76222 = temp__5455__auto____$2;
return (o76222["make_surrogate"]);
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
var o76223 = temp__5455__auto__;
var temp__5455__auto____$1 = (o76223["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o76224 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o76224["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o76225 = temp__5455__auto____$2;
return (o76225["render_markup"]);
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
var o76226 = temp__5455__auto__;
var temp__5455__auto____$1 = (o76226["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o76227 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o76227["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o76228 = temp__5455__auto____$2;
return (o76228["_LT_header_GT_"]);
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
var o76229 = temp__5455__auto__;
var temp__5455__auto____$1 = (o76229["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o76230 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o76230["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o76231 = temp__5455__auto____$2;
return (o76231["_LT_standard_body_GT_"]);
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
var args__64045__auto__ = [];
var len__64038__auto___76233 = arguments.length;
var i__64039__auto___76234 = (0);
while(true){
if((i__64039__auto___76234 < len__64038__auto___76233)){
args__64045__auto__.push((arguments[i__64039__auto___76234]));

var G__76235 = (i__64039__auto___76234 + (1));
i__64039__auto___76234 = G__76235;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq76232){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq76232));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__64045__auto__ = [];
var len__64038__auto___76237 = arguments.length;
var i__64039__auto___76238 = (0);
while(true){
if((i__64039__auto___76238 < len__64038__auto___76237)){
args__64045__auto__.push((arguments[i__64039__auto___76238]));

var G__76239 = (i__64039__auto___76238 + (1));
i__64039__auto___76238 = G__76239;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq76236){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq76236));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__64045__auto__ = [];
var len__64038__auto___76241 = arguments.length;
var i__64039__auto___76242 = (0);
while(true){
if((i__64039__auto___76242 < len__64038__auto___76241)){
args__64045__auto__.push((arguments[i__64039__auto___76242]));

var G__76243 = (i__64039__auto___76242 + (1));
i__64039__auto___76242 = G__76243;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq76240){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq76240));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__64045__auto__ = [];
var len__64038__auto___76245 = arguments.length;
var i__64039__auto___76246 = (0);
while(true){
if((i__64039__auto___76246 < len__64038__auto___76245)){
args__64045__auto__.push((arguments[i__64039__auto___76246]));

var G__76247 = (i__64039__auto___76246 + (1));
i__64039__auto___76246 = G__76247;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq76244){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq76244));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__64045__auto__ = [];
var len__64038__auto___76249 = arguments.length;
var i__64039__auto___76250 = (0);
while(true){
if((i__64039__auto___76250 < len__64038__auto___76249)){
args__64045__auto__.push((arguments[i__64039__auto___76250]));

var G__76251 = (i__64039__auto___76250 + (1));
i__64039__auto___76250 = G__76251;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq76248){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq76248));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__64045__auto__ = [];
var len__64038__auto___76253 = arguments.length;
var i__64039__auto___76254 = (0);
while(true){
if((i__64039__auto___76254 < len__64038__auto___76253)){
args__64045__auto__.push((arguments[i__64039__auto___76254]));

var G__76255 = (i__64039__auto___76254 + (1));
i__64039__auto___76254 = G__76255;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq76252){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq76252));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__64045__auto__ = [];
var len__64038__auto___76257 = arguments.length;
var i__64039__auto___76258 = (0);
while(true){
if((i__64039__auto___76258 < len__64038__auto___76257)){
args__64045__auto__.push((arguments[i__64039__auto___76258]));

var G__76259 = (i__64039__auto___76258 + (1));
i__64039__auto___76258 = G__76259;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq76256){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq76256));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__64045__auto__ = [];
var len__64038__auto___76267 = arguments.length;
var i__64039__auto___76268 = (0);
while(true){
if((i__64039__auto___76268 < len__64038__auto___76267)){
args__64045__auto__.push((arguments[i__64039__auto___76268]));

var G__76269 = (i__64039__auto___76268 + (1));
i__64039__auto___76268 = G__76269;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((1) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__64046__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__76263){
var vec__76264 = p__76263;
var state_override = cljs.core.nth.call(null,vec__76264,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__76264,state_override){
return (function (p1__76260_SHARP_){
return cljs.core.merge.call(null,p1__76260_SHARP_,state_override);
});})(vec__76264,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq76261){
var G__76262 = cljs.core.first.call(null,seq76261);
var seq76261__$1 = cljs.core.next.call(null,seq76261);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__76262,seq76261__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__64045__auto__ = [];
var len__64038__auto___76271 = arguments.length;
var i__64039__auto___76272 = (0);
while(true){
if((i__64039__auto___76272 < len__64038__auto___76271)){
args__64045__auto__.push((arguments[i__64039__auto___76272]));

var G__76273 = (i__64039__auto___76272 + (1));
i__64039__auto___76272 = G__76273;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq76270){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq76270));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__64045__auto__ = [];
var len__64038__auto___76276 = arguments.length;
var i__64039__auto___76277 = (0);
while(true){
if((i__64039__auto___76277 < len__64038__auto___76276)){
args__64045__auto__.push((arguments[i__64039__auto___76277]));

var G__76278 = (i__64039__auto___76277 + (1));
i__64039__auto___76277 = G__76278;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((1) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__64046__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq76274){
var G__76275 = cljs.core.first.call(null,seq76274);
var seq76274__$1 = cljs.core.next.call(null,seq76274);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__76275,seq76274__$1);
});


//# sourceMappingURL=format.js.map?rel=1514950341810
