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
var x__53703__auto__ = (((value == null))?null:value);
var m__53704__auto__ = (devtools.format._header[goog.typeOf(x__53703__auto__)]);
if(!((m__53704__auto__ == null))){
return m__53704__auto__.call(null,value);
} else {
var m__53704__auto____$1 = (devtools.format._header["_"]);
if(!((m__53704__auto____$1 == null))){
return m__53704__auto____$1.call(null,value);
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
var x__53703__auto__ = (((value == null))?null:value);
var m__53704__auto__ = (devtools.format._has_body[goog.typeOf(x__53703__auto__)]);
if(!((m__53704__auto__ == null))){
return m__53704__auto__.call(null,value);
} else {
var m__53704__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__53704__auto____$1 == null))){
return m__53704__auto____$1.call(null,value);
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
var x__53703__auto__ = (((value == null))?null:value);
var m__53704__auto__ = (devtools.format._body[goog.typeOf(x__53703__auto__)]);
if(!((m__53704__auto__ == null))){
return m__53704__auto__.call(null,value);
} else {
var m__53704__auto____$1 = (devtools.format._body["_"]);
if(!((m__53704__auto____$1 == null))){
return m__53704__auto____$1.call(null,value);
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
var o67609 = temp__5455__auto__;
var temp__5455__auto____$1 = (o67609["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o67610 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o67610["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o67611 = temp__5455__auto____$2;
return (o67611["make_template"]);
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
var o67612 = temp__5455__auto__;
var temp__5455__auto____$1 = (o67612["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o67613 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o67613["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o67614 = temp__5455__auto____$2;
return (o67614["make_group"]);
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
var o67615 = temp__5455__auto__;
var temp__5455__auto____$1 = (o67615["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o67616 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o67616["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o67617 = temp__5455__auto____$2;
return (o67617["make_reference"]);
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
var o67618 = temp__5455__auto__;
var temp__5455__auto____$1 = (o67618["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o67619 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o67619["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o67620 = temp__5455__auto____$2;
return (o67620["make_surrogate"]);
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
var o67621 = temp__5455__auto__;
var temp__5455__auto____$1 = (o67621["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o67622 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o67622["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o67623 = temp__5455__auto____$2;
return (o67623["render_markup"]);
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
var o67624 = temp__5455__auto__;
var temp__5455__auto____$1 = (o67624["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o67625 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o67625["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o67626 = temp__5455__auto____$2;
return (o67626["_LT_header_GT_"]);
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
var o67627 = temp__5455__auto__;
var temp__5455__auto____$1 = (o67627["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o67628 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o67628["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o67629 = temp__5455__auto____$2;
return (o67629["_LT_standard_body_GT_"]);
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
var args__54254__auto__ = [];
var len__54247__auto___67631 = arguments.length;
var i__54248__auto___67632 = (0);
while(true){
if((i__54248__auto___67632 < len__54247__auto___67631)){
args__54254__auto__.push((arguments[i__54248__auto___67632]));

var G__67633 = (i__54248__auto___67632 + (1));
i__54248__auto___67632 = G__67633;
continue;
} else {
}
break;
}

var argseq__54255__auto__ = ((((0) < args__54254__auto__.length))?(new cljs.core.IndexedSeq(args__54254__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__54255__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq67630){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67630));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__54254__auto__ = [];
var len__54247__auto___67635 = arguments.length;
var i__54248__auto___67636 = (0);
while(true){
if((i__54248__auto___67636 < len__54247__auto___67635)){
args__54254__auto__.push((arguments[i__54248__auto___67636]));

var G__67637 = (i__54248__auto___67636 + (1));
i__54248__auto___67636 = G__67637;
continue;
} else {
}
break;
}

var argseq__54255__auto__ = ((((0) < args__54254__auto__.length))?(new cljs.core.IndexedSeq(args__54254__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__54255__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq67634){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67634));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__54254__auto__ = [];
var len__54247__auto___67639 = arguments.length;
var i__54248__auto___67640 = (0);
while(true){
if((i__54248__auto___67640 < len__54247__auto___67639)){
args__54254__auto__.push((arguments[i__54248__auto___67640]));

var G__67641 = (i__54248__auto___67640 + (1));
i__54248__auto___67640 = G__67641;
continue;
} else {
}
break;
}

var argseq__54255__auto__ = ((((0) < args__54254__auto__.length))?(new cljs.core.IndexedSeq(args__54254__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__54255__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq67638){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67638));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__54254__auto__ = [];
var len__54247__auto___67643 = arguments.length;
var i__54248__auto___67644 = (0);
while(true){
if((i__54248__auto___67644 < len__54247__auto___67643)){
args__54254__auto__.push((arguments[i__54248__auto___67644]));

var G__67645 = (i__54248__auto___67644 + (1));
i__54248__auto___67644 = G__67645;
continue;
} else {
}
break;
}

var argseq__54255__auto__ = ((((0) < args__54254__auto__.length))?(new cljs.core.IndexedSeq(args__54254__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__54255__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq67642){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67642));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__54254__auto__ = [];
var len__54247__auto___67647 = arguments.length;
var i__54248__auto___67648 = (0);
while(true){
if((i__54248__auto___67648 < len__54247__auto___67647)){
args__54254__auto__.push((arguments[i__54248__auto___67648]));

var G__67649 = (i__54248__auto___67648 + (1));
i__54248__auto___67648 = G__67649;
continue;
} else {
}
break;
}

var argseq__54255__auto__ = ((((0) < args__54254__auto__.length))?(new cljs.core.IndexedSeq(args__54254__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__54255__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq67646){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67646));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__54254__auto__ = [];
var len__54247__auto___67651 = arguments.length;
var i__54248__auto___67652 = (0);
while(true){
if((i__54248__auto___67652 < len__54247__auto___67651)){
args__54254__auto__.push((arguments[i__54248__auto___67652]));

var G__67653 = (i__54248__auto___67652 + (1));
i__54248__auto___67652 = G__67653;
continue;
} else {
}
break;
}

var argseq__54255__auto__ = ((((0) < args__54254__auto__.length))?(new cljs.core.IndexedSeq(args__54254__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__54255__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq67650){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67650));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__54254__auto__ = [];
var len__54247__auto___67655 = arguments.length;
var i__54248__auto___67656 = (0);
while(true){
if((i__54248__auto___67656 < len__54247__auto___67655)){
args__54254__auto__.push((arguments[i__54248__auto___67656]));

var G__67657 = (i__54248__auto___67656 + (1));
i__54248__auto___67656 = G__67657;
continue;
} else {
}
break;
}

var argseq__54255__auto__ = ((((0) < args__54254__auto__.length))?(new cljs.core.IndexedSeq(args__54254__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__54255__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq67654){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67654));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__54254__auto__ = [];
var len__54247__auto___67665 = arguments.length;
var i__54248__auto___67666 = (0);
while(true){
if((i__54248__auto___67666 < len__54247__auto___67665)){
args__54254__auto__.push((arguments[i__54248__auto___67666]));

var G__67667 = (i__54248__auto___67666 + (1));
i__54248__auto___67666 = G__67667;
continue;
} else {
}
break;
}

var argseq__54255__auto__ = ((((1) < args__54254__auto__.length))?(new cljs.core.IndexedSeq(args__54254__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__54255__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__67661){
var vec__67662 = p__67661;
var state_override = cljs.core.nth.call(null,vec__67662,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__67662,state_override){
return (function (p1__67658_SHARP_){
return cljs.core.merge.call(null,p1__67658_SHARP_,state_override);
});})(vec__67662,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq67659){
var G__67660 = cljs.core.first.call(null,seq67659);
var seq67659__$1 = cljs.core.next.call(null,seq67659);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__67660,seq67659__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__54254__auto__ = [];
var len__54247__auto___67669 = arguments.length;
var i__54248__auto___67670 = (0);
while(true){
if((i__54248__auto___67670 < len__54247__auto___67669)){
args__54254__auto__.push((arguments[i__54248__auto___67670]));

var G__67671 = (i__54248__auto___67670 + (1));
i__54248__auto___67670 = G__67671;
continue;
} else {
}
break;
}

var argseq__54255__auto__ = ((((0) < args__54254__auto__.length))?(new cljs.core.IndexedSeq(args__54254__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__54255__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq67668){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67668));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__54254__auto__ = [];
var len__54247__auto___67674 = arguments.length;
var i__54248__auto___67675 = (0);
while(true){
if((i__54248__auto___67675 < len__54247__auto___67674)){
args__54254__auto__.push((arguments[i__54248__auto___67675]));

var G__67676 = (i__54248__auto___67675 + (1));
i__54248__auto___67675 = G__67676;
continue;
} else {
}
break;
}

var argseq__54255__auto__ = ((((1) < args__54254__auto__.length))?(new cljs.core.IndexedSeq(args__54254__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__54255__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq67672){
var G__67673 = cljs.core.first.call(null,seq67672);
var seq67672__$1 = cljs.core.next.call(null,seq67672);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__67673,seq67672__$1);
});


//# sourceMappingURL=format.js.map?rel=1524702424930
