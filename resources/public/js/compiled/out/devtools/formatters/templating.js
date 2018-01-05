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
var x89642_89643 = value;
x89642_89643.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


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
var x89645_89646 = value;
x89645_89646.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


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
var x89648_89649 = value;
x89648_89649.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


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
var and__74889__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__74889__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__74889__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__76185__auto__ = [];
var len__76178__auto___89656 = arguments.length;
var i__76179__auto___89657 = (0);
while(true){
if((i__76179__auto___89657 < len__76178__auto___89656)){
args__76185__auto__.push((arguments[i__76179__auto___89657]));

var G__89658 = (i__76179__auto___89657 + (1));
i__76179__auto___89657 = G__89658;
continue;
} else {
}
break;
}

var argseq__76186__auto__ = ((((0) < args__76185__auto__.length))?(new cljs.core.IndexedSeq(args__76185__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__76186__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__89652_89659 = cljs.core.seq.call(null,items);
var chunk__89653_89660 = null;
var count__89654_89661 = (0);
var i__89655_89662 = (0);
while(true){
if((i__89655_89662 < count__89654_89661)){
var item_89663 = cljs.core._nth.call(null,chunk__89653_89660,i__89655_89662);
if(!((item_89663 == null))){
if(cljs.core.coll_QMARK_.call(null,item_89663)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_89663)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_89663));
}
} else {
}

var G__89664 = seq__89652_89659;
var G__89665 = chunk__89653_89660;
var G__89666 = count__89654_89661;
var G__89667 = (i__89655_89662 + (1));
seq__89652_89659 = G__89664;
chunk__89653_89660 = G__89665;
count__89654_89661 = G__89666;
i__89655_89662 = G__89667;
continue;
} else {
var temp__5457__auto___89668 = cljs.core.seq.call(null,seq__89652_89659);
if(temp__5457__auto___89668){
var seq__89652_89669__$1 = temp__5457__auto___89668;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__89652_89669__$1)){
var c__75832__auto___89670 = cljs.core.chunk_first.call(null,seq__89652_89669__$1);
var G__89671 = cljs.core.chunk_rest.call(null,seq__89652_89669__$1);
var G__89672 = c__75832__auto___89670;
var G__89673 = cljs.core.count.call(null,c__75832__auto___89670);
var G__89674 = (0);
seq__89652_89659 = G__89671;
chunk__89653_89660 = G__89672;
count__89654_89661 = G__89673;
i__89655_89662 = G__89674;
continue;
} else {
var item_89675 = cljs.core.first.call(null,seq__89652_89669__$1);
if(!((item_89675 == null))){
if(cljs.core.coll_QMARK_.call(null,item_89675)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_89675)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_89675));
}
} else {
}

var G__89676 = cljs.core.next.call(null,seq__89652_89669__$1);
var G__89677 = null;
var G__89678 = (0);
var G__89679 = (0);
seq__89652_89659 = G__89676;
chunk__89653_89660 = G__89677;
count__89654_89661 = G__89678;
i__89655_89662 = G__89679;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq89651){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq89651));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__76185__auto__ = [];
var len__76178__auto___89687 = arguments.length;
var i__76179__auto___89688 = (0);
while(true){
if((i__76179__auto___89688 < len__76178__auto___89687)){
args__76185__auto__.push((arguments[i__76179__auto___89688]));

var G__89689 = (i__76179__auto___89688 + (1));
i__76179__auto___89688 = G__89689;
continue;
} else {
}
break;
}

var argseq__76186__auto__ = ((((2) < args__76185__auto__.length))?(new cljs.core.IndexedSeq(args__76185__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__76186__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__89683_89690 = cljs.core.seq.call(null,children);
var chunk__89684_89691 = null;
var count__89685_89692 = (0);
var i__89686_89693 = (0);
while(true){
if((i__89686_89693 < count__89685_89692)){
var child_89694 = cljs.core._nth.call(null,chunk__89684_89691,i__89686_89693);
if(!((child_89694 == null))){
if(cljs.core.coll_QMARK_.call(null,child_89694)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_89694))));
} else {
var temp__5455__auto___89695 = devtools.formatters.helpers.pref.call(null,child_89694);
if(cljs.core.truth_(temp__5455__auto___89695)){
var child_value_89696 = temp__5455__auto___89695;
template.push(child_value_89696);
} else {
}
}
} else {
}

var G__89697 = seq__89683_89690;
var G__89698 = chunk__89684_89691;
var G__89699 = count__89685_89692;
var G__89700 = (i__89686_89693 + (1));
seq__89683_89690 = G__89697;
chunk__89684_89691 = G__89698;
count__89685_89692 = G__89699;
i__89686_89693 = G__89700;
continue;
} else {
var temp__5457__auto___89701 = cljs.core.seq.call(null,seq__89683_89690);
if(temp__5457__auto___89701){
var seq__89683_89702__$1 = temp__5457__auto___89701;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__89683_89702__$1)){
var c__75832__auto___89703 = cljs.core.chunk_first.call(null,seq__89683_89702__$1);
var G__89704 = cljs.core.chunk_rest.call(null,seq__89683_89702__$1);
var G__89705 = c__75832__auto___89703;
var G__89706 = cljs.core.count.call(null,c__75832__auto___89703);
var G__89707 = (0);
seq__89683_89690 = G__89704;
chunk__89684_89691 = G__89705;
count__89685_89692 = G__89706;
i__89686_89693 = G__89707;
continue;
} else {
var child_89708 = cljs.core.first.call(null,seq__89683_89702__$1);
if(!((child_89708 == null))){
if(cljs.core.coll_QMARK_.call(null,child_89708)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_89708))));
} else {
var temp__5455__auto___89709 = devtools.formatters.helpers.pref.call(null,child_89708);
if(cljs.core.truth_(temp__5455__auto___89709)){
var child_value_89710 = temp__5455__auto___89709;
template.push(child_value_89710);
} else {
}
}
} else {
}

var G__89711 = cljs.core.next.call(null,seq__89683_89702__$1);
var G__89712 = null;
var G__89713 = (0);
var G__89714 = (0);
seq__89683_89690 = G__89711;
chunk__89684_89691 = G__89712;
count__89685_89692 = G__89713;
i__89686_89693 = G__89714;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq89680){
var G__89681 = cljs.core.first.call(null,seq89680);
var seq89680__$1 = cljs.core.next.call(null,seq89680);
var G__89682 = cljs.core.first.call(null,seq89680__$1);
var seq89680__$2 = cljs.core.next.call(null,seq89680__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__89681,G__89682,seq89680__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__76185__auto__ = [];
var len__76178__auto___89717 = arguments.length;
var i__76179__auto___89718 = (0);
while(true){
if((i__76179__auto___89718 < len__76178__auto___89717)){
args__76185__auto__.push((arguments[i__76179__auto___89718]));

var G__89719 = (i__76179__auto___89718 + (1));
i__76179__auto___89718 = G__89719;
continue;
} else {
}
break;
}

var argseq__76186__auto__ = ((((1) < args__76185__auto__.length))?(new cljs.core.IndexedSeq(args__76185__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__76186__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq89715){
var G__89716 = cljs.core.first.call(null,seq89715);
var seq89715__$1 = cljs.core.next.call(null,seq89715);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__89716,seq89715__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__76185__auto__ = [];
var len__76178__auto___89722 = arguments.length;
var i__76179__auto___89723 = (0);
while(true){
if((i__76179__auto___89723 < len__76178__auto___89722)){
args__76185__auto__.push((arguments[i__76179__auto___89723]));

var G__89724 = (i__76179__auto___89723 + (1));
i__76179__auto___89723 = G__89724;
continue;
} else {
}
break;
}

var argseq__76186__auto__ = ((((1) < args__76185__auto__.length))?(new cljs.core.IndexedSeq(args__76185__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__76186__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq89720){
var G__89721 = cljs.core.first.call(null,seq89720);
var seq89720__$1 = cljs.core.next.call(null,seq89720);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__89721,seq89720__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__89726 = arguments.length;
switch (G__89726) {
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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj89728 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__74901__auto__ = start_index;
if(cljs.core.truth_(or__74901__auto__)){
return or__74901__auto__;
} else {
return (0);
}
})()};
return obj89728;
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
var args__76185__auto__ = [];
var len__76178__auto___89736 = arguments.length;
var i__76179__auto___89737 = (0);
while(true){
if((i__76179__auto___89737 < len__76178__auto___89736)){
args__76185__auto__.push((arguments[i__76179__auto___89737]));

var G__89738 = (i__76179__auto___89737 + (1));
i__76179__auto___89737 = G__89738;
continue;
} else {
}
break;
}

var argseq__76186__auto__ = ((((1) < args__76185__auto__.length))?(new cljs.core.IndexedSeq(args__76185__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__76186__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__89732){
var vec__89733 = p__89732;
var state_override_fn = cljs.core.nth.call(null,vec__89733,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq89730){
var G__89731 = cljs.core.first.call(null,seq89730);
var seq89730__$1 = cljs.core.next.call(null,seq89730);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__89731,seq89730__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_89739 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_89739;
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
var G__89740 = name;
switch (G__89740) {
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
var vec__89742 = tag;
var html_tag = cljs.core.nth.call(null,vec__89742,(0),null);
var style = cljs.core.nth.call(null,vec__89742,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_89745 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_89745;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_89746 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_89747 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_89747;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_89746;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["result of markup rendering must be a template,\n","resolved to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,value)),"initial value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,initial_value))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__89748 = initial_value;
var G__89749 = value.call(null);
initial_value = G__89748;
value = G__89749;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__89750 = initial_value;
var G__89751 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__89750;
value = G__89751;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__89752 = initial_value;
var G__89753 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__89752;
value = G__89753;
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

//# sourceMappingURL=templating.js.map?rel=1515122966263
