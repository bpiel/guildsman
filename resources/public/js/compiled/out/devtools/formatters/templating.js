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
var x69011_69012 = value;
x69011_69012.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


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
var x69014_69015 = value;
x69014_69015.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


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
var x69017_69018 = value;
x69017_69018.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


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
var and__52958__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__52958__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__52958__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__54254__auto__ = [];
var len__54247__auto___69025 = arguments.length;
var i__54248__auto___69026 = (0);
while(true){
if((i__54248__auto___69026 < len__54247__auto___69025)){
args__54254__auto__.push((arguments[i__54248__auto___69026]));

var G__69027 = (i__54248__auto___69026 + (1));
i__54248__auto___69026 = G__69027;
continue;
} else {
}
break;
}

var argseq__54255__auto__ = ((((0) < args__54254__auto__.length))?(new cljs.core.IndexedSeq(args__54254__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__54255__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__69021_69028 = cljs.core.seq.call(null,items);
var chunk__69022_69029 = null;
var count__69023_69030 = (0);
var i__69024_69031 = (0);
while(true){
if((i__69024_69031 < count__69023_69030)){
var item_69032 = cljs.core._nth.call(null,chunk__69022_69029,i__69024_69031);
if(!((item_69032 == null))){
if(cljs.core.coll_QMARK_.call(null,item_69032)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_69032)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_69032));
}
} else {
}

var G__69033 = seq__69021_69028;
var G__69034 = chunk__69022_69029;
var G__69035 = count__69023_69030;
var G__69036 = (i__69024_69031 + (1));
seq__69021_69028 = G__69033;
chunk__69022_69029 = G__69034;
count__69023_69030 = G__69035;
i__69024_69031 = G__69036;
continue;
} else {
var temp__5457__auto___69037 = cljs.core.seq.call(null,seq__69021_69028);
if(temp__5457__auto___69037){
var seq__69021_69038__$1 = temp__5457__auto___69037;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__69021_69038__$1)){
var c__53901__auto___69039 = cljs.core.chunk_first.call(null,seq__69021_69038__$1);
var G__69040 = cljs.core.chunk_rest.call(null,seq__69021_69038__$1);
var G__69041 = c__53901__auto___69039;
var G__69042 = cljs.core.count.call(null,c__53901__auto___69039);
var G__69043 = (0);
seq__69021_69028 = G__69040;
chunk__69022_69029 = G__69041;
count__69023_69030 = G__69042;
i__69024_69031 = G__69043;
continue;
} else {
var item_69044 = cljs.core.first.call(null,seq__69021_69038__$1);
if(!((item_69044 == null))){
if(cljs.core.coll_QMARK_.call(null,item_69044)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_69044)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_69044));
}
} else {
}

var G__69045 = cljs.core.next.call(null,seq__69021_69038__$1);
var G__69046 = null;
var G__69047 = (0);
var G__69048 = (0);
seq__69021_69028 = G__69045;
chunk__69022_69029 = G__69046;
count__69023_69030 = G__69047;
i__69024_69031 = G__69048;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq69020){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq69020));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__54254__auto__ = [];
var len__54247__auto___69056 = arguments.length;
var i__54248__auto___69057 = (0);
while(true){
if((i__54248__auto___69057 < len__54247__auto___69056)){
args__54254__auto__.push((arguments[i__54248__auto___69057]));

var G__69058 = (i__54248__auto___69057 + (1));
i__54248__auto___69057 = G__69058;
continue;
} else {
}
break;
}

var argseq__54255__auto__ = ((((2) < args__54254__auto__.length))?(new cljs.core.IndexedSeq(args__54254__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__54255__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__69052_69059 = cljs.core.seq.call(null,children);
var chunk__69053_69060 = null;
var count__69054_69061 = (0);
var i__69055_69062 = (0);
while(true){
if((i__69055_69062 < count__69054_69061)){
var child_69063 = cljs.core._nth.call(null,chunk__69053_69060,i__69055_69062);
if(!((child_69063 == null))){
if(cljs.core.coll_QMARK_.call(null,child_69063)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_69063))));
} else {
var temp__5455__auto___69064 = devtools.formatters.helpers.pref.call(null,child_69063);
if(cljs.core.truth_(temp__5455__auto___69064)){
var child_value_69065 = temp__5455__auto___69064;
template.push(child_value_69065);
} else {
}
}
} else {
}

var G__69066 = seq__69052_69059;
var G__69067 = chunk__69053_69060;
var G__69068 = count__69054_69061;
var G__69069 = (i__69055_69062 + (1));
seq__69052_69059 = G__69066;
chunk__69053_69060 = G__69067;
count__69054_69061 = G__69068;
i__69055_69062 = G__69069;
continue;
} else {
var temp__5457__auto___69070 = cljs.core.seq.call(null,seq__69052_69059);
if(temp__5457__auto___69070){
var seq__69052_69071__$1 = temp__5457__auto___69070;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__69052_69071__$1)){
var c__53901__auto___69072 = cljs.core.chunk_first.call(null,seq__69052_69071__$1);
var G__69073 = cljs.core.chunk_rest.call(null,seq__69052_69071__$1);
var G__69074 = c__53901__auto___69072;
var G__69075 = cljs.core.count.call(null,c__53901__auto___69072);
var G__69076 = (0);
seq__69052_69059 = G__69073;
chunk__69053_69060 = G__69074;
count__69054_69061 = G__69075;
i__69055_69062 = G__69076;
continue;
} else {
var child_69077 = cljs.core.first.call(null,seq__69052_69071__$1);
if(!((child_69077 == null))){
if(cljs.core.coll_QMARK_.call(null,child_69077)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_69077))));
} else {
var temp__5455__auto___69078 = devtools.formatters.helpers.pref.call(null,child_69077);
if(cljs.core.truth_(temp__5455__auto___69078)){
var child_value_69079 = temp__5455__auto___69078;
template.push(child_value_69079);
} else {
}
}
} else {
}

var G__69080 = cljs.core.next.call(null,seq__69052_69071__$1);
var G__69081 = null;
var G__69082 = (0);
var G__69083 = (0);
seq__69052_69059 = G__69080;
chunk__69053_69060 = G__69081;
count__69054_69061 = G__69082;
i__69055_69062 = G__69083;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq69049){
var G__69050 = cljs.core.first.call(null,seq69049);
var seq69049__$1 = cljs.core.next.call(null,seq69049);
var G__69051 = cljs.core.first.call(null,seq69049__$1);
var seq69049__$2 = cljs.core.next.call(null,seq69049__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__69050,G__69051,seq69049__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__54254__auto__ = [];
var len__54247__auto___69086 = arguments.length;
var i__54248__auto___69087 = (0);
while(true){
if((i__54248__auto___69087 < len__54247__auto___69086)){
args__54254__auto__.push((arguments[i__54248__auto___69087]));

var G__69088 = (i__54248__auto___69087 + (1));
i__54248__auto___69087 = G__69088;
continue;
} else {
}
break;
}

var argseq__54255__auto__ = ((((1) < args__54254__auto__.length))?(new cljs.core.IndexedSeq(args__54254__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__54255__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq69084){
var G__69085 = cljs.core.first.call(null,seq69084);
var seq69084__$1 = cljs.core.next.call(null,seq69084);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__69085,seq69084__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__54254__auto__ = [];
var len__54247__auto___69091 = arguments.length;
var i__54248__auto___69092 = (0);
while(true){
if((i__54248__auto___69092 < len__54247__auto___69091)){
args__54254__auto__.push((arguments[i__54248__auto___69092]));

var G__69093 = (i__54248__auto___69092 + (1));
i__54248__auto___69092 = G__69093;
continue;
} else {
}
break;
}

var argseq__54255__auto__ = ((((1) < args__54254__auto__.length))?(new cljs.core.IndexedSeq(args__54254__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__54255__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq69089){
var G__69090 = cljs.core.first.call(null,seq69089);
var seq69089__$1 = cljs.core.next.call(null,seq69089);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__69090,seq69089__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__69095 = arguments.length;
switch (G__69095) {
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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj69097 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__52970__auto__ = start_index;
if(cljs.core.truth_(or__52970__auto__)){
return or__52970__auto__;
} else {
return (0);
}
})()};
return obj69097;
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
var args__54254__auto__ = [];
var len__54247__auto___69105 = arguments.length;
var i__54248__auto___69106 = (0);
while(true){
if((i__54248__auto___69106 < len__54247__auto___69105)){
args__54254__auto__.push((arguments[i__54248__auto___69106]));

var G__69107 = (i__54248__auto___69106 + (1));
i__54248__auto___69106 = G__69107;
continue;
} else {
}
break;
}

var argseq__54255__auto__ = ((((1) < args__54254__auto__.length))?(new cljs.core.IndexedSeq(args__54254__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__54255__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__69101){
var vec__69102 = p__69101;
var state_override_fn = cljs.core.nth.call(null,vec__69102,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq69099){
var G__69100 = cljs.core.first.call(null,seq69099);
var seq69099__$1 = cljs.core.next.call(null,seq69099);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__69100,seq69099__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_69108 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_69108;
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
var G__69109 = name;
switch (G__69109) {
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
var vec__69111 = tag;
var html_tag = cljs.core.nth.call(null,vec__69111,(0),null);
var style = cljs.core.nth.call(null,vec__69111,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_69114 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_69114;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_69115 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_69116 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_69116;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_69115;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["result of markup rendering must be a template,\n","resolved to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,value)),"initial value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,initial_value))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__69117 = initial_value;
var G__69118 = value.call(null);
initial_value = G__69117;
value = G__69118;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__69119 = initial_value;
var G__69120 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__69119;
value = G__69120;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__69121 = initial_value;
var G__69122 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__69121;
value = G__69122;
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

//# sourceMappingURL=templating.js.map?rel=1524702426753
