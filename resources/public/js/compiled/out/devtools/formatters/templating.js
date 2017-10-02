// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x27307_27308 = value;
x27307_27308.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x27310_27311 = value;
x27310_27311.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x27313_27314 = value;
x27313_27314.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__9938__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__9938__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__9938__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__11234__auto__ = [];
var len__11227__auto___27321 = arguments.length;
var i__11228__auto___27322 = (0);
while(true){
if((i__11228__auto___27322 < len__11227__auto___27321)){
args__11234__auto__.push((arguments[i__11228__auto___27322]));

var G__27323 = (i__11228__auto___27322 + (1));
i__11228__auto___27322 = G__27323;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__27317_27324 = cljs.core.seq.call(null,items);
var chunk__27318_27325 = null;
var count__27319_27326 = (0);
var i__27320_27327 = (0);
while(true){
if((i__27320_27327 < count__27319_27326)){
var item_27328 = cljs.core._nth.call(null,chunk__27318_27325,i__27320_27327);
if(!((item_27328 == null))){
if(cljs.core.coll_QMARK_.call(null,item_27328)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_27328)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_27328));
}
} else {
}

var G__27329 = seq__27317_27324;
var G__27330 = chunk__27318_27325;
var G__27331 = count__27319_27326;
var G__27332 = (i__27320_27327 + (1));
seq__27317_27324 = G__27329;
chunk__27318_27325 = G__27330;
count__27319_27326 = G__27331;
i__27320_27327 = G__27332;
continue;
} else {
var temp__6738__auto___27333 = cljs.core.seq.call(null,seq__27317_27324);
if(temp__6738__auto___27333){
var seq__27317_27334__$1 = temp__6738__auto___27333;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27317_27334__$1)){
var c__10881__auto___27335 = cljs.core.chunk_first.call(null,seq__27317_27334__$1);
var G__27336 = cljs.core.chunk_rest.call(null,seq__27317_27334__$1);
var G__27337 = c__10881__auto___27335;
var G__27338 = cljs.core.count.call(null,c__10881__auto___27335);
var G__27339 = (0);
seq__27317_27324 = G__27336;
chunk__27318_27325 = G__27337;
count__27319_27326 = G__27338;
i__27320_27327 = G__27339;
continue;
} else {
var item_27340 = cljs.core.first.call(null,seq__27317_27334__$1);
if(!((item_27340 == null))){
if(cljs.core.coll_QMARK_.call(null,item_27340)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_27340)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_27340));
}
} else {
}

var G__27341 = cljs.core.next.call(null,seq__27317_27334__$1);
var G__27342 = null;
var G__27343 = (0);
var G__27344 = (0);
seq__27317_27324 = G__27341;
chunk__27318_27325 = G__27342;
count__27319_27326 = G__27343;
i__27320_27327 = G__27344;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq27316){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27316));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__11234__auto__ = [];
var len__11227__auto___27352 = arguments.length;
var i__11228__auto___27353 = (0);
while(true){
if((i__11228__auto___27353 < len__11227__auto___27352)){
args__11234__auto__.push((arguments[i__11228__auto___27353]));

var G__27354 = (i__11228__auto___27353 + (1));
i__11228__auto___27353 = G__27354;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((2) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11235__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__27348_27355 = cljs.core.seq.call(null,children);
var chunk__27349_27356 = null;
var count__27350_27357 = (0);
var i__27351_27358 = (0);
while(true){
if((i__27351_27358 < count__27350_27357)){
var child_27359 = cljs.core._nth.call(null,chunk__27349_27356,i__27351_27358);
if(!((child_27359 == null))){
if(cljs.core.coll_QMARK_.call(null,child_27359)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_27359))));
} else {
var temp__6736__auto___27360 = devtools.formatters.helpers.pref.call(null,child_27359);
if(cljs.core.truth_(temp__6736__auto___27360)){
var child_value_27361 = temp__6736__auto___27360;
template.push(child_value_27361);
} else {
}
}
} else {
}

var G__27362 = seq__27348_27355;
var G__27363 = chunk__27349_27356;
var G__27364 = count__27350_27357;
var G__27365 = (i__27351_27358 + (1));
seq__27348_27355 = G__27362;
chunk__27349_27356 = G__27363;
count__27350_27357 = G__27364;
i__27351_27358 = G__27365;
continue;
} else {
var temp__6738__auto___27366 = cljs.core.seq.call(null,seq__27348_27355);
if(temp__6738__auto___27366){
var seq__27348_27367__$1 = temp__6738__auto___27366;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27348_27367__$1)){
var c__10881__auto___27368 = cljs.core.chunk_first.call(null,seq__27348_27367__$1);
var G__27369 = cljs.core.chunk_rest.call(null,seq__27348_27367__$1);
var G__27370 = c__10881__auto___27368;
var G__27371 = cljs.core.count.call(null,c__10881__auto___27368);
var G__27372 = (0);
seq__27348_27355 = G__27369;
chunk__27349_27356 = G__27370;
count__27350_27357 = G__27371;
i__27351_27358 = G__27372;
continue;
} else {
var child_27373 = cljs.core.first.call(null,seq__27348_27367__$1);
if(!((child_27373 == null))){
if(cljs.core.coll_QMARK_.call(null,child_27373)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_27373))));
} else {
var temp__6736__auto___27374 = devtools.formatters.helpers.pref.call(null,child_27373);
if(cljs.core.truth_(temp__6736__auto___27374)){
var child_value_27375 = temp__6736__auto___27374;
template.push(child_value_27375);
} else {
}
}
} else {
}

var G__27376 = cljs.core.next.call(null,seq__27348_27367__$1);
var G__27377 = null;
var G__27378 = (0);
var G__27379 = (0);
seq__27348_27355 = G__27376;
chunk__27349_27356 = G__27377;
count__27350_27357 = G__27378;
i__27351_27358 = G__27379;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq27345){
var G__27346 = cljs.core.first.call(null,seq27345);
var seq27345__$1 = cljs.core.next.call(null,seq27345);
var G__27347 = cljs.core.first.call(null,seq27345__$1);
var seq27345__$2 = cljs.core.next.call(null,seq27345__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__27346,G__27347,seq27345__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__11234__auto__ = [];
var len__11227__auto___27382 = arguments.length;
var i__11228__auto___27383 = (0);
while(true){
if((i__11228__auto___27383 < len__11227__auto___27382)){
args__11234__auto__.push((arguments[i__11228__auto___27383]));

var G__27384 = (i__11228__auto___27383 + (1));
i__11228__auto___27383 = G__27384;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((1) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11235__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq27380){
var G__27381 = cljs.core.first.call(null,seq27380);
var seq27380__$1 = cljs.core.next.call(null,seq27380);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27381,seq27380__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__11234__auto__ = [];
var len__11227__auto___27387 = arguments.length;
var i__11228__auto___27388 = (0);
while(true){
if((i__11228__auto___27388 < len__11227__auto___27387)){
args__11234__auto__.push((arguments[i__11228__auto___27388]));

var G__27389 = (i__11228__auto___27388 + (1));
i__11228__auto___27388 = G__27389;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((1) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11235__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq27385){
var G__27386 = cljs.core.first.call(null,seq27385);
var seq27385__$1 = cljs.core.next.call(null,seq27385);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27386,seq27385__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__27391 = arguments.length;
switch (G__27391) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj27393 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__9950__auto__ = start_index;
if(cljs.core.truth_(or__9950__auto__)){
return or__9950__auto__;
} else {
return (0);
}
})()};
return obj27393;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["target"]);
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["header"]);
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["body"]);
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["startIndex"]);
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__11234__auto__ = [];
var len__11227__auto___27401 = arguments.length;
var i__11228__auto___27402 = (0);
while(true){
if((i__11228__auto___27402 < len__11227__auto___27401)){
args__11234__auto__.push((arguments[i__11228__auto___27402]));

var G__27403 = (i__11228__auto___27402 + (1));
i__11228__auto___27402 = G__27403;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((1) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11235__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__27397){
var vec__27398 = p__27397;
var state_override_fn = cljs.core.nth.call(null,vec__27398,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((!((state_override_fn == null)))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq27395){
var G__27396 = cljs.core.first.call(null,seq27395);
var seq27395__$1 = cljs.core.next.call(null,seq27395);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__27396,seq27395__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_27404 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_27404;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.util.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.util.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"\n","Render path: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),"\n","Render stack:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__27405 = name;
switch (G__27405) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,["no matching special tag name: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"'"].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__27407 = tag;
var html_tag = cljs.core.nth.call(null,vec__27407,(0),null);
var style = cljs.core.nth.call(null,vec__27407,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_27410 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,["invalid json-ml markup at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),":"].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_27410;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_27411 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_27412 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_27412;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_27411;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["result of markup rendering must be a template,\n","resolved to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,value)),"initial value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,initial_value))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__27413 = initial_value;
var G__27414 = value.call(null);
initial_value = G__27413;
value = G__27414;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__27415 = initial_value;
var G__27416 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__27415;
value = G__27416;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__27417 = initial_value;
var G__27418 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__27417;
value = G__27418;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1506917879847
