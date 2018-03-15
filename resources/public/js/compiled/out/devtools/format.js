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
var x__9092__auto__ = (((value == null))?null:value);
var m__9093__auto__ = (devtools.format._header[goog.typeOf(x__9092__auto__)]);
if(!((m__9093__auto__ == null))){
return m__9093__auto__.call(null,value);
} else {
var m__9093__auto____$1 = (devtools.format._header["_"]);
if(!((m__9093__auto____$1 == null))){
return m__9093__auto____$1.call(null,value);
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
var x__9092__auto__ = (((value == null))?null:value);
var m__9093__auto__ = (devtools.format._has_body[goog.typeOf(x__9092__auto__)]);
if(!((m__9093__auto__ == null))){
return m__9093__auto__.call(null,value);
} else {
var m__9093__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__9093__auto____$1 == null))){
return m__9093__auto____$1.call(null,value);
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
var x__9092__auto__ = (((value == null))?null:value);
var m__9093__auto__ = (devtools.format._body[goog.typeOf(x__9092__auto__)]);
if(!((m__9093__auto__ == null))){
return m__9093__auto__.call(null,value);
} else {
var m__9093__auto____$1 = (devtools.format._body["_"]);
if(!((m__9093__auto____$1 == null))){
return m__9093__auto____$1.call(null,value);
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
var o23136 = temp__5455__auto__;
var temp__5455__auto____$1 = (o23136["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o23137 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o23137["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o23138 = temp__5455__auto____$2;
return (o23138["make_template"]);
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
var o23139 = temp__5455__auto__;
var temp__5455__auto____$1 = (o23139["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o23140 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o23140["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o23141 = temp__5455__auto____$2;
return (o23141["make_group"]);
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
var o23142 = temp__5455__auto__;
var temp__5455__auto____$1 = (o23142["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o23143 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o23143["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o23144 = temp__5455__auto____$2;
return (o23144["make_reference"]);
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
var o23145 = temp__5455__auto__;
var temp__5455__auto____$1 = (o23145["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o23146 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o23146["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o23147 = temp__5455__auto____$2;
return (o23147["make_surrogate"]);
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
var o23148 = temp__5455__auto__;
var temp__5455__auto____$1 = (o23148["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o23149 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o23149["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o23150 = temp__5455__auto____$2;
return (o23150["render_markup"]);
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
var o23151 = temp__5455__auto__;
var temp__5455__auto____$1 = (o23151["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o23152 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o23152["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o23153 = temp__5455__auto____$2;
return (o23153["_LT_header_GT_"]);
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
var o23154 = temp__5455__auto__;
var temp__5455__auto____$1 = (o23154["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o23155 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o23155["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o23156 = temp__5455__auto____$2;
return (o23156["_LT_standard_body_GT_"]);
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
var args__9643__auto__ = [];
var len__9636__auto___23158 = arguments.length;
var i__9637__auto___23159 = (0);
while(true){
if((i__9637__auto___23159 < len__9636__auto___23158)){
args__9643__auto__.push((arguments[i__9637__auto___23159]));

var G__23160 = (i__9637__auto___23159 + (1));
i__9637__auto___23159 = G__23160;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq23157){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23157));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__9643__auto__ = [];
var len__9636__auto___23162 = arguments.length;
var i__9637__auto___23163 = (0);
while(true){
if((i__9637__auto___23163 < len__9636__auto___23162)){
args__9643__auto__.push((arguments[i__9637__auto___23163]));

var G__23164 = (i__9637__auto___23163 + (1));
i__9637__auto___23163 = G__23164;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq23161){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23161));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__9643__auto__ = [];
var len__9636__auto___23166 = arguments.length;
var i__9637__auto___23167 = (0);
while(true){
if((i__9637__auto___23167 < len__9636__auto___23166)){
args__9643__auto__.push((arguments[i__9637__auto___23167]));

var G__23168 = (i__9637__auto___23167 + (1));
i__9637__auto___23167 = G__23168;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq23165){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23165));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__9643__auto__ = [];
var len__9636__auto___23170 = arguments.length;
var i__9637__auto___23171 = (0);
while(true){
if((i__9637__auto___23171 < len__9636__auto___23170)){
args__9643__auto__.push((arguments[i__9637__auto___23171]));

var G__23172 = (i__9637__auto___23171 + (1));
i__9637__auto___23171 = G__23172;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq23169){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23169));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__9643__auto__ = [];
var len__9636__auto___23174 = arguments.length;
var i__9637__auto___23175 = (0);
while(true){
if((i__9637__auto___23175 < len__9636__auto___23174)){
args__9643__auto__.push((arguments[i__9637__auto___23175]));

var G__23176 = (i__9637__auto___23175 + (1));
i__9637__auto___23175 = G__23176;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq23173){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23173));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__9643__auto__ = [];
var len__9636__auto___23178 = arguments.length;
var i__9637__auto___23179 = (0);
while(true){
if((i__9637__auto___23179 < len__9636__auto___23178)){
args__9643__auto__.push((arguments[i__9637__auto___23179]));

var G__23180 = (i__9637__auto___23179 + (1));
i__9637__auto___23179 = G__23180;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq23177){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23177));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__9643__auto__ = [];
var len__9636__auto___23182 = arguments.length;
var i__9637__auto___23183 = (0);
while(true){
if((i__9637__auto___23183 < len__9636__auto___23182)){
args__9643__auto__.push((arguments[i__9637__auto___23183]));

var G__23184 = (i__9637__auto___23183 + (1));
i__9637__auto___23183 = G__23184;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq23181){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23181));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__9643__auto__ = [];
var len__9636__auto___23192 = arguments.length;
var i__9637__auto___23193 = (0);
while(true){
if((i__9637__auto___23193 < len__9636__auto___23192)){
args__9643__auto__.push((arguments[i__9637__auto___23193]));

var G__23194 = (i__9637__auto___23193 + (1));
i__9637__auto___23193 = G__23194;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((1) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9644__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__23188){
var vec__23189 = p__23188;
var state_override = cljs.core.nth.call(null,vec__23189,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__23189,state_override){
return (function (p1__23185_SHARP_){
return cljs.core.merge.call(null,p1__23185_SHARP_,state_override);
});})(vec__23189,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq23186){
var G__23187 = cljs.core.first.call(null,seq23186);
var seq23186__$1 = cljs.core.next.call(null,seq23186);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__23187,seq23186__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__9643__auto__ = [];
var len__9636__auto___23196 = arguments.length;
var i__9637__auto___23197 = (0);
while(true){
if((i__9637__auto___23197 < len__9636__auto___23196)){
args__9643__auto__.push((arguments[i__9637__auto___23197]));

var G__23198 = (i__9637__auto___23197 + (1));
i__9637__auto___23197 = G__23198;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq23195){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23195));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__9643__auto__ = [];
var len__9636__auto___23201 = arguments.length;
var i__9637__auto___23202 = (0);
while(true){
if((i__9637__auto___23202 < len__9636__auto___23201)){
args__9643__auto__.push((arguments[i__9637__auto___23202]));

var G__23203 = (i__9637__auto___23202 + (1));
i__9637__auto___23202 = G__23203;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((1) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9644__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq23199){
var G__23200 = cljs.core.first.call(null,seq23199);
var seq23199__$1 = cljs.core.next.call(null,seq23199);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__23200,seq23199__$1);
});


//# sourceMappingURL=format.js.map?rel=1521112601716
