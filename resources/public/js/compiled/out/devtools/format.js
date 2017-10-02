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
var x__10543__auto__ = (((value == null))?null:value);
var m__10544__auto__ = (devtools.format._header[goog.typeOf(x__10543__auto__)]);
if(!((m__10544__auto__ == null))){
return m__10544__auto__.call(null,value);
} else {
var m__10544__auto____$1 = (devtools.format._header["_"]);
if(!((m__10544__auto____$1 == null))){
return m__10544__auto____$1.call(null,value);
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
var x__10543__auto__ = (((value == null))?null:value);
var m__10544__auto__ = (devtools.format._has_body[goog.typeOf(x__10543__auto__)]);
if(!((m__10544__auto__ == null))){
return m__10544__auto__.call(null,value);
} else {
var m__10544__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__10544__auto____$1 == null))){
return m__10544__auto____$1.call(null,value);
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
var x__10543__auto__ = (((value == null))?null:value);
var m__10544__auto__ = (devtools.format._body[goog.typeOf(x__10543__auto__)]);
if(!((m__10544__auto__ == null))){
return m__10544__auto__.call(null,value);
} else {
var m__10544__auto____$1 = (devtools.format._body["_"]);
if(!((m__10544__auto____$1 == null))){
return m__10544__auto____$1.call(null,value);
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

devtools.format.make_template_fn = (function (){var temp__6736__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__6736__auto__)){
var o25724 = temp__6736__auto__;
var temp__6736__auto____$1 = (o25724["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o25725 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o25725["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o25726 = temp__6736__auto____$2;
return (o25726["make_template"]);
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

devtools.format.make_group_fn = (function (){var temp__6736__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__6736__auto__)){
var o25727 = temp__6736__auto__;
var temp__6736__auto____$1 = (o25727["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o25728 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o25728["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o25729 = temp__6736__auto____$2;
return (o25729["make_group"]);
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

devtools.format.make_reference_fn = (function (){var temp__6736__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__6736__auto__)){
var o25730 = temp__6736__auto__;
var temp__6736__auto____$1 = (o25730["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o25731 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o25731["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o25732 = temp__6736__auto____$2;
return (o25732["make_reference"]);
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

devtools.format.make_surrogate_fn = (function (){var temp__6736__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__6736__auto__)){
var o25733 = temp__6736__auto__;
var temp__6736__auto____$1 = (o25733["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o25734 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o25734["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o25735 = temp__6736__auto____$2;
return (o25735["make_surrogate"]);
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

devtools.format.render_markup_fn = (function (){var temp__6736__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__6736__auto__)){
var o25736 = temp__6736__auto__;
var temp__6736__auto____$1 = (o25736["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o25737 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o25737["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o25738 = temp__6736__auto____$2;
return (o25738["render_markup"]);
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

devtools.format._LT_header_GT__fn = (function (){var temp__6736__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__6736__auto__)){
var o25739 = temp__6736__auto__;
var temp__6736__auto____$1 = (o25739["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o25740 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o25740["markup"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o25741 = temp__6736__auto____$2;
return (o25741["_LT_header_GT_"]);
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

devtools.format._LT_standard_body_GT__fn = (function (){var temp__6736__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__6736__auto__)){
var o25742 = temp__6736__auto__;
var temp__6736__auto____$1 = (o25742["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o25743 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o25743["markup"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o25744 = temp__6736__auto____$2;
return (o25744["_LT_standard_body_GT_"]);
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
var args__11094__auto__ = [];
var len__11087__auto___25746 = arguments.length;
var i__11088__auto___25747 = (0);
while(true){
if((i__11088__auto___25747 < len__11087__auto___25746)){
args__11094__auto__.push((arguments[i__11088__auto___25747]));

var G__25748 = (i__11088__auto___25747 + (1));
i__11088__auto___25747 = G__25748;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((0) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__11095__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq25745){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25745));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__11094__auto__ = [];
var len__11087__auto___25750 = arguments.length;
var i__11088__auto___25751 = (0);
while(true){
if((i__11088__auto___25751 < len__11087__auto___25750)){
args__11094__auto__.push((arguments[i__11088__auto___25751]));

var G__25752 = (i__11088__auto___25751 + (1));
i__11088__auto___25751 = G__25752;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((0) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__11095__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq25749){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25749));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__11094__auto__ = [];
var len__11087__auto___25754 = arguments.length;
var i__11088__auto___25755 = (0);
while(true){
if((i__11088__auto___25755 < len__11087__auto___25754)){
args__11094__auto__.push((arguments[i__11088__auto___25755]));

var G__25756 = (i__11088__auto___25755 + (1));
i__11088__auto___25755 = G__25756;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((0) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__11095__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq25753){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25753));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__11094__auto__ = [];
var len__11087__auto___25758 = arguments.length;
var i__11088__auto___25759 = (0);
while(true){
if((i__11088__auto___25759 < len__11087__auto___25758)){
args__11094__auto__.push((arguments[i__11088__auto___25759]));

var G__25760 = (i__11088__auto___25759 + (1));
i__11088__auto___25759 = G__25760;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((0) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__11095__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq25757){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25757));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__11094__auto__ = [];
var len__11087__auto___25762 = arguments.length;
var i__11088__auto___25763 = (0);
while(true){
if((i__11088__auto___25763 < len__11087__auto___25762)){
args__11094__auto__.push((arguments[i__11088__auto___25763]));

var G__25764 = (i__11088__auto___25763 + (1));
i__11088__auto___25763 = G__25764;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((0) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__11095__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq25761){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25761));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__11094__auto__ = [];
var len__11087__auto___25766 = arguments.length;
var i__11088__auto___25767 = (0);
while(true){
if((i__11088__auto___25767 < len__11087__auto___25766)){
args__11094__auto__.push((arguments[i__11088__auto___25767]));

var G__25768 = (i__11088__auto___25767 + (1));
i__11088__auto___25767 = G__25768;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((0) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__11095__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq25765){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25765));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__11094__auto__ = [];
var len__11087__auto___25770 = arguments.length;
var i__11088__auto___25771 = (0);
while(true){
if((i__11088__auto___25771 < len__11087__auto___25770)){
args__11094__auto__.push((arguments[i__11088__auto___25771]));

var G__25772 = (i__11088__auto___25771 + (1));
i__11088__auto___25771 = G__25772;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((0) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__11095__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq25769){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25769));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__11094__auto__ = [];
var len__11087__auto___25780 = arguments.length;
var i__11088__auto___25781 = (0);
while(true){
if((i__11088__auto___25781 < len__11087__auto___25780)){
args__11094__auto__.push((arguments[i__11088__auto___25781]));

var G__25782 = (i__11088__auto___25781 + (1));
i__11088__auto___25781 = G__25782;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((1) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11095__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__25776){
var vec__25777 = p__25776;
var state_override = cljs.core.nth.call(null,vec__25777,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__25777,state_override){
return (function (p1__25773_SHARP_){
return cljs.core.merge.call(null,p1__25773_SHARP_,state_override);
});})(vec__25777,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq25774){
var G__25775 = cljs.core.first.call(null,seq25774);
var seq25774__$1 = cljs.core.next.call(null,seq25774);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__25775,seq25774__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__11094__auto__ = [];
var len__11087__auto___25784 = arguments.length;
var i__11088__auto___25785 = (0);
while(true){
if((i__11088__auto___25785 < len__11087__auto___25784)){
args__11094__auto__.push((arguments[i__11088__auto___25785]));

var G__25786 = (i__11088__auto___25785 + (1));
i__11088__auto___25785 = G__25786;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((0) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__11095__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq25783){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25783));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__11094__auto__ = [];
var len__11087__auto___25789 = arguments.length;
var i__11088__auto___25790 = (0);
while(true){
if((i__11088__auto___25790 < len__11087__auto___25789)){
args__11094__auto__.push((arguments[i__11088__auto___25790]));

var G__25791 = (i__11088__auto___25790 + (1));
i__11088__auto___25790 = G__25791;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((1) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11095__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq25787){
var G__25788 = cljs.core.first.call(null,seq25787);
var seq25787__$1 = cljs.core.next.call(null,seq25787);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__25788,seq25787__$1);
});


//# sourceMappingURL=format.js.map?rel=1506896689108
