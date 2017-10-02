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
var x__10683__auto__ = (((value == null))?null:value);
var m__10684__auto__ = (devtools.format._header[goog.typeOf(x__10683__auto__)]);
if(!((m__10684__auto__ == null))){
return m__10684__auto__.call(null,value);
} else {
var m__10684__auto____$1 = (devtools.format._header["_"]);
if(!((m__10684__auto____$1 == null))){
return m__10684__auto____$1.call(null,value);
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
var x__10683__auto__ = (((value == null))?null:value);
var m__10684__auto__ = (devtools.format._has_body[goog.typeOf(x__10683__auto__)]);
if(!((m__10684__auto__ == null))){
return m__10684__auto__.call(null,value);
} else {
var m__10684__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__10684__auto____$1 == null))){
return m__10684__auto____$1.call(null,value);
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
var x__10683__auto__ = (((value == null))?null:value);
var m__10684__auto__ = (devtools.format._body[goog.typeOf(x__10683__auto__)]);
if(!((m__10684__auto__ == null))){
return m__10684__auto__.call(null,value);
} else {
var m__10684__auto____$1 = (devtools.format._body["_"]);
if(!((m__10684__auto____$1 == null))){
return m__10684__auto____$1.call(null,value);
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
var o25906 = temp__6736__auto__;
var temp__6736__auto____$1 = (o25906["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o25907 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o25907["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o25908 = temp__6736__auto____$2;
return (o25908["make_template"]);
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
var o25909 = temp__6736__auto__;
var temp__6736__auto____$1 = (o25909["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o25910 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o25910["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o25911 = temp__6736__auto____$2;
return (o25911["make_group"]);
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
var o25912 = temp__6736__auto__;
var temp__6736__auto____$1 = (o25912["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o25913 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o25913["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o25914 = temp__6736__auto____$2;
return (o25914["make_reference"]);
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
var o25915 = temp__6736__auto__;
var temp__6736__auto____$1 = (o25915["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o25916 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o25916["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o25917 = temp__6736__auto____$2;
return (o25917["make_surrogate"]);
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
var o25918 = temp__6736__auto__;
var temp__6736__auto____$1 = (o25918["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o25919 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o25919["templating"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o25920 = temp__6736__auto____$2;
return (o25920["render_markup"]);
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
var o25921 = temp__6736__auto__;
var temp__6736__auto____$1 = (o25921["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o25922 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o25922["markup"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o25923 = temp__6736__auto____$2;
return (o25923["_LT_header_GT_"]);
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
var o25924 = temp__6736__auto__;
var temp__6736__auto____$1 = (o25924["formatters"]);
if(cljs.core.truth_(temp__6736__auto____$1)){
var o25925 = temp__6736__auto____$1;
var temp__6736__auto____$2 = (o25925["markup"]);
if(cljs.core.truth_(temp__6736__auto____$2)){
var o25926 = temp__6736__auto____$2;
return (o25926["_LT_standard_body_GT_"]);
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
var args__11234__auto__ = [];
var len__11227__auto___25928 = arguments.length;
var i__11228__auto___25929 = (0);
while(true){
if((i__11228__auto___25929 < len__11227__auto___25928)){
args__11234__auto__.push((arguments[i__11228__auto___25929]));

var G__25930 = (i__11228__auto___25929 + (1));
i__11228__auto___25929 = G__25930;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq25927){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25927));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__11234__auto__ = [];
var len__11227__auto___25932 = arguments.length;
var i__11228__auto___25933 = (0);
while(true){
if((i__11228__auto___25933 < len__11227__auto___25932)){
args__11234__auto__.push((arguments[i__11228__auto___25933]));

var G__25934 = (i__11228__auto___25933 + (1));
i__11228__auto___25933 = G__25934;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq25931){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25931));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__11234__auto__ = [];
var len__11227__auto___25936 = arguments.length;
var i__11228__auto___25937 = (0);
while(true){
if((i__11228__auto___25937 < len__11227__auto___25936)){
args__11234__auto__.push((arguments[i__11228__auto___25937]));

var G__25938 = (i__11228__auto___25937 + (1));
i__11228__auto___25937 = G__25938;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq25935){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25935));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__11234__auto__ = [];
var len__11227__auto___25940 = arguments.length;
var i__11228__auto___25941 = (0);
while(true){
if((i__11228__auto___25941 < len__11227__auto___25940)){
args__11234__auto__.push((arguments[i__11228__auto___25941]));

var G__25942 = (i__11228__auto___25941 + (1));
i__11228__auto___25941 = G__25942;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq25939){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25939));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__11234__auto__ = [];
var len__11227__auto___25944 = arguments.length;
var i__11228__auto___25945 = (0);
while(true){
if((i__11228__auto___25945 < len__11227__auto___25944)){
args__11234__auto__.push((arguments[i__11228__auto___25945]));

var G__25946 = (i__11228__auto___25945 + (1));
i__11228__auto___25945 = G__25946;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq25943){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25943));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__11234__auto__ = [];
var len__11227__auto___25948 = arguments.length;
var i__11228__auto___25949 = (0);
while(true){
if((i__11228__auto___25949 < len__11227__auto___25948)){
args__11234__auto__.push((arguments[i__11228__auto___25949]));

var G__25950 = (i__11228__auto___25949 + (1));
i__11228__auto___25949 = G__25950;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq25947){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25947));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__11234__auto__ = [];
var len__11227__auto___25952 = arguments.length;
var i__11228__auto___25953 = (0);
while(true){
if((i__11228__auto___25953 < len__11227__auto___25952)){
args__11234__auto__.push((arguments[i__11228__auto___25953]));

var G__25954 = (i__11228__auto___25953 + (1));
i__11228__auto___25953 = G__25954;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq25951){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25951));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__11234__auto__ = [];
var len__11227__auto___25962 = arguments.length;
var i__11228__auto___25963 = (0);
while(true){
if((i__11228__auto___25963 < len__11227__auto___25962)){
args__11234__auto__.push((arguments[i__11228__auto___25963]));

var G__25964 = (i__11228__auto___25963 + (1));
i__11228__auto___25963 = G__25964;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((1) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11235__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__25958){
var vec__25959 = p__25958;
var state_override = cljs.core.nth.call(null,vec__25959,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__25959,state_override){
return (function (p1__25955_SHARP_){
return cljs.core.merge.call(null,p1__25955_SHARP_,state_override);
});})(vec__25959,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq25956){
var G__25957 = cljs.core.first.call(null,seq25956);
var seq25956__$1 = cljs.core.next.call(null,seq25956);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__25957,seq25956__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__11234__auto__ = [];
var len__11227__auto___25966 = arguments.length;
var i__11228__auto___25967 = (0);
while(true){
if((i__11228__auto___25967 < len__11227__auto___25966)){
args__11234__auto__.push((arguments[i__11228__auto___25967]));

var G__25968 = (i__11228__auto___25967 + (1));
i__11228__auto___25967 = G__25968;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq25965){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25965));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__11234__auto__ = [];
var len__11227__auto___25971 = arguments.length;
var i__11228__auto___25972 = (0);
while(true){
if((i__11228__auto___25972 < len__11227__auto___25971)){
args__11234__auto__.push((arguments[i__11228__auto___25972]));

var G__25973 = (i__11228__auto___25972 + (1));
i__11228__auto___25972 = G__25973;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((1) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11235__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq25969){
var G__25970 = cljs.core.first.call(null,seq25969);
var seq25969__$1 = cljs.core.next.call(null,seq25969);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__25970,seq25969__$1);
});


//# sourceMappingURL=format.js.map?rel=1506917877829
