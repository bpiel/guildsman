// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.13";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e87590){if((e87590 instanceof Error)){
var e = e87590;
return "Error: Unable to stringify";
} else {
throw e87590;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__87593 = arguments.length;
switch (G__87593) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__87591_SHARP_){
if(typeof p1__87591_SHARP_ === 'string'){
return p1__87591_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__87591_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__76185__auto__ = [];
var len__76178__auto___87596 = arguments.length;
var i__76179__auto___87597 = (0);
while(true){
if((i__76179__auto___87597 < len__76178__auto___87596)){
args__76185__auto__.push((arguments[i__76179__auto___87597]));

var G__87598 = (i__76179__auto___87597 + (1));
i__76179__auto___87597 = G__87598;
continue;
} else {
}
break;
}

var argseq__76186__auto__ = ((((0) < args__76185__auto__.length))?(new cljs.core.IndexedSeq(args__76185__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__76186__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq87595){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq87595));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__76185__auto__ = [];
var len__76178__auto___87600 = arguments.length;
var i__76179__auto___87601 = (0);
while(true){
if((i__76179__auto___87601 < len__76178__auto___87600)){
args__76185__auto__.push((arguments[i__76179__auto___87601]));

var G__87602 = (i__76179__auto___87601 + (1));
i__76179__auto___87601 = G__87602;
continue;
} else {
}
break;
}

var argseq__76186__auto__ = ((((0) < args__76185__auto__.length))?(new cljs.core.IndexedSeq(args__76185__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__76186__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq87599){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq87599));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__87603){
var map__87604 = p__87603;
var map__87604__$1 = ((((!((map__87604 == null)))?((((map__87604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87604.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87604):map__87604);
var message = cljs.core.get.call(null,map__87604__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__87604__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__74901__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__74901__auto__)){
return or__74901__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__74889__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__74889__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__74889__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__79089__auto___87683 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__79089__auto___87683,ch){
return (function (){
var f__79090__auto__ = (function (){var switch__78999__auto__ = ((function (c__79089__auto___87683,ch){
return (function (state_87655){
var state_val_87656 = (state_87655[(1)]);
if((state_val_87656 === (7))){
var inst_87651 = (state_87655[(2)]);
var state_87655__$1 = state_87655;
var statearr_87657_87684 = state_87655__$1;
(statearr_87657_87684[(2)] = inst_87651);

(statearr_87657_87684[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87656 === (1))){
var state_87655__$1 = state_87655;
var statearr_87658_87685 = state_87655__$1;
(statearr_87658_87685[(2)] = null);

(statearr_87658_87685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87656 === (4))){
var inst_87608 = (state_87655[(7)]);
var inst_87608__$1 = (state_87655[(2)]);
var state_87655__$1 = (function (){var statearr_87659 = state_87655;
(statearr_87659[(7)] = inst_87608__$1);

return statearr_87659;
})();
if(cljs.core.truth_(inst_87608__$1)){
var statearr_87660_87686 = state_87655__$1;
(statearr_87660_87686[(1)] = (5));

} else {
var statearr_87661_87687 = state_87655__$1;
(statearr_87661_87687[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87656 === (15))){
var inst_87615 = (state_87655[(8)]);
var inst_87630 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_87615);
var inst_87631 = cljs.core.first.call(null,inst_87630);
var inst_87632 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_87631);
var inst_87633 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_87632)].join('');
var inst_87634 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_87633);
var state_87655__$1 = state_87655;
var statearr_87662_87688 = state_87655__$1;
(statearr_87662_87688[(2)] = inst_87634);

(statearr_87662_87688[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87656 === (13))){
var inst_87639 = (state_87655[(2)]);
var state_87655__$1 = state_87655;
var statearr_87663_87689 = state_87655__$1;
(statearr_87663_87689[(2)] = inst_87639);

(statearr_87663_87689[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87656 === (6))){
var state_87655__$1 = state_87655;
var statearr_87664_87690 = state_87655__$1;
(statearr_87664_87690[(2)] = null);

(statearr_87664_87690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87656 === (17))){
var inst_87637 = (state_87655[(2)]);
var state_87655__$1 = state_87655;
var statearr_87665_87691 = state_87655__$1;
(statearr_87665_87691[(2)] = inst_87637);

(statearr_87665_87691[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87656 === (3))){
var inst_87653 = (state_87655[(2)]);
var state_87655__$1 = state_87655;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_87655__$1,inst_87653);
} else {
if((state_val_87656 === (12))){
var inst_87614 = (state_87655[(9)]);
var inst_87628 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_87614,opts);
var state_87655__$1 = state_87655;
if(cljs.core.truth_(inst_87628)){
var statearr_87666_87692 = state_87655__$1;
(statearr_87666_87692[(1)] = (15));

} else {
var statearr_87667_87693 = state_87655__$1;
(statearr_87667_87693[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87656 === (2))){
var state_87655__$1 = state_87655;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87655__$1,(4),ch);
} else {
if((state_val_87656 === (11))){
var inst_87615 = (state_87655[(8)]);
var inst_87620 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_87621 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_87615);
var inst_87622 = cljs.core.async.timeout.call(null,(1000));
var inst_87623 = [inst_87621,inst_87622];
var inst_87624 = (new cljs.core.PersistentVector(null,2,(5),inst_87620,inst_87623,null));
var state_87655__$1 = state_87655;
return cljs.core.async.ioc_alts_BANG_.call(null,state_87655__$1,(14),inst_87624);
} else {
if((state_val_87656 === (9))){
var inst_87615 = (state_87655[(8)]);
var inst_87641 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_87642 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_87615);
var inst_87643 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_87642);
var inst_87644 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_87643)].join('');
var inst_87645 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_87644);
var state_87655__$1 = (function (){var statearr_87668 = state_87655;
(statearr_87668[(10)] = inst_87641);

return statearr_87668;
})();
var statearr_87669_87694 = state_87655__$1;
(statearr_87669_87694[(2)] = inst_87645);

(statearr_87669_87694[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87656 === (5))){
var inst_87608 = (state_87655[(7)]);
var inst_87610 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_87611 = (new cljs.core.PersistentArrayMap(null,2,inst_87610,null));
var inst_87612 = (new cljs.core.PersistentHashSet(null,inst_87611,null));
var inst_87613 = figwheel.client.focus_msgs.call(null,inst_87612,inst_87608);
var inst_87614 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_87613);
var inst_87615 = cljs.core.first.call(null,inst_87613);
var inst_87616 = figwheel.client.autoload_QMARK_.call(null);
var state_87655__$1 = (function (){var statearr_87670 = state_87655;
(statearr_87670[(8)] = inst_87615);

(statearr_87670[(9)] = inst_87614);

return statearr_87670;
})();
if(cljs.core.truth_(inst_87616)){
var statearr_87671_87695 = state_87655__$1;
(statearr_87671_87695[(1)] = (8));

} else {
var statearr_87672_87696 = state_87655__$1;
(statearr_87672_87696[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87656 === (14))){
var inst_87626 = (state_87655[(2)]);
var state_87655__$1 = state_87655;
var statearr_87673_87697 = state_87655__$1;
(statearr_87673_87697[(2)] = inst_87626);

(statearr_87673_87697[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87656 === (16))){
var state_87655__$1 = state_87655;
var statearr_87674_87698 = state_87655__$1;
(statearr_87674_87698[(2)] = null);

(statearr_87674_87698[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87656 === (10))){
var inst_87647 = (state_87655[(2)]);
var state_87655__$1 = (function (){var statearr_87675 = state_87655;
(statearr_87675[(11)] = inst_87647);

return statearr_87675;
})();
var statearr_87676_87699 = state_87655__$1;
(statearr_87676_87699[(2)] = null);

(statearr_87676_87699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87656 === (8))){
var inst_87614 = (state_87655[(9)]);
var inst_87618 = figwheel.client.reload_file_state_QMARK_.call(null,inst_87614,opts);
var state_87655__$1 = state_87655;
if(cljs.core.truth_(inst_87618)){
var statearr_87677_87700 = state_87655__$1;
(statearr_87677_87700[(1)] = (11));

} else {
var statearr_87678_87701 = state_87655__$1;
(statearr_87678_87701[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__79089__auto___87683,ch))
;
return ((function (switch__78999__auto__,c__79089__auto___87683,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__79000__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__79000__auto____0 = (function (){
var statearr_87679 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_87679[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__79000__auto__);

(statearr_87679[(1)] = (1));

return statearr_87679;
});
var figwheel$client$file_reloader_plugin_$_state_machine__79000__auto____1 = (function (state_87655){
while(true){
var ret_value__79001__auto__ = (function (){try{while(true){
var result__79002__auto__ = switch__78999__auto__.call(null,state_87655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__79002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__79002__auto__;
}
break;
}
}catch (e87680){if((e87680 instanceof Object)){
var ex__79003__auto__ = e87680;
var statearr_87681_87702 = state_87655;
(statearr_87681_87702[(5)] = ex__79003__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__79001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87703 = state_87655;
state_87655 = G__87703;
continue;
} else {
return ret_value__79001__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__79000__auto__ = function(state_87655){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__79000__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__79000__auto____1.call(this,state_87655);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__79000__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__79000__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__79000__auto__;
})()
;})(switch__78999__auto__,c__79089__auto___87683,ch))
})();
var state__79091__auto__ = (function (){var statearr_87682 = f__79090__auto__.call(null);
(statearr_87682[(6)] = c__79089__auto___87683);

return statearr_87682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__79091__auto__);
});})(c__79089__auto___87683,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__87704_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__87704_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_87706 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_87706){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e87705){if((e87705 instanceof Error)){
var e = e87705;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_87706], null));
} else {
var e = e87705;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_87706))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__87707){
var map__87708 = p__87707;
var map__87708__$1 = ((((!((map__87708 == null)))?((((map__87708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87708.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87708):map__87708);
var opts = map__87708__$1;
var build_id = cljs.core.get.call(null,map__87708__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__87708,map__87708__$1,opts,build_id){
return (function (p__87710){
var vec__87711 = p__87710;
var seq__87712 = cljs.core.seq.call(null,vec__87711);
var first__87713 = cljs.core.first.call(null,seq__87712);
var seq__87712__$1 = cljs.core.next.call(null,seq__87712);
var map__87714 = first__87713;
var map__87714__$1 = ((((!((map__87714 == null)))?((((map__87714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87714.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87714):map__87714);
var msg = map__87714__$1;
var msg_name = cljs.core.get.call(null,map__87714__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__87712__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__87711,seq__87712,first__87713,seq__87712__$1,map__87714,map__87714__$1,msg,msg_name,_,map__87708,map__87708__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__87711,seq__87712,first__87713,seq__87712__$1,map__87714,map__87714__$1,msg,msg_name,_,map__87708,map__87708__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__87708,map__87708__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__87716){
var vec__87717 = p__87716;
var seq__87718 = cljs.core.seq.call(null,vec__87717);
var first__87719 = cljs.core.first.call(null,seq__87718);
var seq__87718__$1 = cljs.core.next.call(null,seq__87718);
var map__87720 = first__87719;
var map__87720__$1 = ((((!((map__87720 == null)))?((((map__87720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87720.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87720):map__87720);
var msg = map__87720__$1;
var msg_name = cljs.core.get.call(null,map__87720__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__87718__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__87722){
var map__87723 = p__87722;
var map__87723__$1 = ((((!((map__87723 == null)))?((((map__87723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87723.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87723):map__87723);
var on_compile_warning = cljs.core.get.call(null,map__87723__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__87723__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__87723,map__87723__$1,on_compile_warning,on_compile_fail){
return (function (p__87725){
var vec__87726 = p__87725;
var seq__87727 = cljs.core.seq.call(null,vec__87726);
var first__87728 = cljs.core.first.call(null,seq__87727);
var seq__87727__$1 = cljs.core.next.call(null,seq__87727);
var map__87729 = first__87728;
var map__87729__$1 = ((((!((map__87729 == null)))?((((map__87729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87729.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87729):map__87729);
var msg = map__87729__$1;
var msg_name = cljs.core.get.call(null,map__87729__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__87727__$1;
var pred__87731 = cljs.core._EQ_;
var expr__87732 = msg_name;
if(cljs.core.truth_(pred__87731.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__87732))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__87731.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__87732))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__87723,map__87723__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__79089__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__79089__auto__,msg_hist,msg_names,msg){
return (function (){
var f__79090__auto__ = (function (){var switch__78999__auto__ = ((function (c__79089__auto__,msg_hist,msg_names,msg){
return (function (state_87821){
var state_val_87822 = (state_87821[(1)]);
if((state_val_87822 === (7))){
var inst_87741 = (state_87821[(2)]);
var state_87821__$1 = state_87821;
if(cljs.core.truth_(inst_87741)){
var statearr_87823_87870 = state_87821__$1;
(statearr_87823_87870[(1)] = (8));

} else {
var statearr_87824_87871 = state_87821__$1;
(statearr_87824_87871[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87822 === (20))){
var inst_87815 = (state_87821[(2)]);
var state_87821__$1 = state_87821;
var statearr_87825_87872 = state_87821__$1;
(statearr_87825_87872[(2)] = inst_87815);

(statearr_87825_87872[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87822 === (27))){
var inst_87811 = (state_87821[(2)]);
var state_87821__$1 = state_87821;
var statearr_87826_87873 = state_87821__$1;
(statearr_87826_87873[(2)] = inst_87811);

(statearr_87826_87873[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87822 === (1))){
var inst_87734 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_87821__$1 = state_87821;
if(cljs.core.truth_(inst_87734)){
var statearr_87827_87874 = state_87821__$1;
(statearr_87827_87874[(1)] = (2));

} else {
var statearr_87828_87875 = state_87821__$1;
(statearr_87828_87875[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87822 === (24))){
var inst_87813 = (state_87821[(2)]);
var state_87821__$1 = state_87821;
var statearr_87829_87876 = state_87821__$1;
(statearr_87829_87876[(2)] = inst_87813);

(statearr_87829_87876[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87822 === (4))){
var inst_87819 = (state_87821[(2)]);
var state_87821__$1 = state_87821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_87821__$1,inst_87819);
} else {
if((state_val_87822 === (15))){
var inst_87817 = (state_87821[(2)]);
var state_87821__$1 = state_87821;
var statearr_87830_87877 = state_87821__$1;
(statearr_87830_87877[(2)] = inst_87817);

(statearr_87830_87877[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87822 === (21))){
var inst_87770 = (state_87821[(2)]);
var inst_87771 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_87772 = figwheel.client.auto_jump_to_error.call(null,opts,inst_87771);
var state_87821__$1 = (function (){var statearr_87831 = state_87821;
(statearr_87831[(7)] = inst_87770);

return statearr_87831;
})();
var statearr_87832_87878 = state_87821__$1;
(statearr_87832_87878[(2)] = inst_87772);

(statearr_87832_87878[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87822 === (31))){
var inst_87800 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_87821__$1 = state_87821;
if(cljs.core.truth_(inst_87800)){
var statearr_87833_87879 = state_87821__$1;
(statearr_87833_87879[(1)] = (34));

} else {
var statearr_87834_87880 = state_87821__$1;
(statearr_87834_87880[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87822 === (32))){
var inst_87809 = (state_87821[(2)]);
var state_87821__$1 = state_87821;
var statearr_87835_87881 = state_87821__$1;
(statearr_87835_87881[(2)] = inst_87809);

(statearr_87835_87881[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87822 === (33))){
var inst_87796 = (state_87821[(2)]);
var inst_87797 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_87798 = figwheel.client.auto_jump_to_error.call(null,opts,inst_87797);
var state_87821__$1 = (function (){var statearr_87836 = state_87821;
(statearr_87836[(8)] = inst_87796);

return statearr_87836;
})();
var statearr_87837_87882 = state_87821__$1;
(statearr_87837_87882[(2)] = inst_87798);

(statearr_87837_87882[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87822 === (13))){
var inst_87755 = figwheel.client.heads_up.clear.call(null);
var state_87821__$1 = state_87821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87821__$1,(16),inst_87755);
} else {
if((state_val_87822 === (22))){
var inst_87776 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_87777 = figwheel.client.heads_up.append_warning_message.call(null,inst_87776);
var state_87821__$1 = state_87821;
var statearr_87838_87883 = state_87821__$1;
(statearr_87838_87883[(2)] = inst_87777);

(statearr_87838_87883[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87822 === (36))){
var inst_87807 = (state_87821[(2)]);
var state_87821__$1 = state_87821;
var statearr_87839_87884 = state_87821__$1;
(statearr_87839_87884[(2)] = inst_87807);

(statearr_87839_87884[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87822 === (29))){
var inst_87787 = (state_87821[(2)]);
var inst_87788 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_87789 = figwheel.client.auto_jump_to_error.call(null,opts,inst_87788);
var state_87821__$1 = (function (){var statearr_87840 = state_87821;
(statearr_87840[(9)] = inst_87787);

return statearr_87840;
})();
var statearr_87841_87885 = state_87821__$1;
(statearr_87841_87885[(2)] = inst_87789);

(statearr_87841_87885[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87822 === (6))){
var inst_87736 = (state_87821[(10)]);
var state_87821__$1 = state_87821;
var statearr_87842_87886 = state_87821__$1;
(statearr_87842_87886[(2)] = inst_87736);

(statearr_87842_87886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87822 === (28))){
var inst_87783 = (state_87821[(2)]);
var inst_87784 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_87785 = figwheel.client.heads_up.display_warning.call(null,inst_87784);
var state_87821__$1 = (function (){var statearr_87843 = state_87821;
(statearr_87843[(11)] = inst_87783);

return statearr_87843;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87821__$1,(29),inst_87785);
} else {
if((state_val_87822 === (25))){
var inst_87781 = figwheel.client.heads_up.clear.call(null);
var state_87821__$1 = state_87821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87821__$1,(28),inst_87781);
} else {
if((state_val_87822 === (34))){
var inst_87802 = figwheel.client.heads_up.flash_loaded.call(null);
var state_87821__$1 = state_87821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87821__$1,(37),inst_87802);
} else {
if((state_val_87822 === (17))){
var inst_87761 = (state_87821[(2)]);
var inst_87762 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_87763 = figwheel.client.auto_jump_to_error.call(null,opts,inst_87762);
var state_87821__$1 = (function (){var statearr_87844 = state_87821;
(statearr_87844[(12)] = inst_87761);

return statearr_87844;
})();
var statearr_87845_87887 = state_87821__$1;
(statearr_87845_87887[(2)] = inst_87763);

(statearr_87845_87887[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87822 === (3))){
var inst_87753 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_87821__$1 = state_87821;
if(cljs.core.truth_(inst_87753)){
var statearr_87846_87888 = state_87821__$1;
(statearr_87846_87888[(1)] = (13));

} else {
var statearr_87847_87889 = state_87821__$1;
(statearr_87847_87889[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87822 === (12))){
var inst_87749 = (state_87821[(2)]);
var state_87821__$1 = state_87821;
var statearr_87848_87890 = state_87821__$1;
(statearr_87848_87890[(2)] = inst_87749);

(statearr_87848_87890[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87822 === (2))){
var inst_87736 = (state_87821[(10)]);
var inst_87736__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_87821__$1 = (function (){var statearr_87849 = state_87821;
(statearr_87849[(10)] = inst_87736__$1);

return statearr_87849;
})();
if(cljs.core.truth_(inst_87736__$1)){
var statearr_87850_87891 = state_87821__$1;
(statearr_87850_87891[(1)] = (5));

} else {
var statearr_87851_87892 = state_87821__$1;
(statearr_87851_87892[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87822 === (23))){
var inst_87779 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_87821__$1 = state_87821;
if(cljs.core.truth_(inst_87779)){
var statearr_87852_87893 = state_87821__$1;
(statearr_87852_87893[(1)] = (25));

} else {
var statearr_87853_87894 = state_87821__$1;
(statearr_87853_87894[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87822 === (35))){
var state_87821__$1 = state_87821;
var statearr_87854_87895 = state_87821__$1;
(statearr_87854_87895[(2)] = null);

(statearr_87854_87895[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87822 === (19))){
var inst_87774 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_87821__$1 = state_87821;
if(cljs.core.truth_(inst_87774)){
var statearr_87855_87896 = state_87821__$1;
(statearr_87855_87896[(1)] = (22));

} else {
var statearr_87856_87897 = state_87821__$1;
(statearr_87856_87897[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87822 === (11))){
var inst_87745 = (state_87821[(2)]);
var state_87821__$1 = state_87821;
var statearr_87857_87898 = state_87821__$1;
(statearr_87857_87898[(2)] = inst_87745);

(statearr_87857_87898[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87822 === (9))){
var inst_87747 = figwheel.client.heads_up.clear.call(null);
var state_87821__$1 = state_87821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87821__$1,(12),inst_87747);
} else {
if((state_val_87822 === (5))){
var inst_87738 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_87821__$1 = state_87821;
var statearr_87858_87899 = state_87821__$1;
(statearr_87858_87899[(2)] = inst_87738);

(statearr_87858_87899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87822 === (14))){
var inst_87765 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_87821__$1 = state_87821;
if(cljs.core.truth_(inst_87765)){
var statearr_87859_87900 = state_87821__$1;
(statearr_87859_87900[(1)] = (18));

} else {
var statearr_87860_87901 = state_87821__$1;
(statearr_87860_87901[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87822 === (26))){
var inst_87791 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_87821__$1 = state_87821;
if(cljs.core.truth_(inst_87791)){
var statearr_87861_87902 = state_87821__$1;
(statearr_87861_87902[(1)] = (30));

} else {
var statearr_87862_87903 = state_87821__$1;
(statearr_87862_87903[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87822 === (16))){
var inst_87757 = (state_87821[(2)]);
var inst_87758 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_87759 = figwheel.client.heads_up.display_exception.call(null,inst_87758);
var state_87821__$1 = (function (){var statearr_87863 = state_87821;
(statearr_87863[(13)] = inst_87757);

return statearr_87863;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87821__$1,(17),inst_87759);
} else {
if((state_val_87822 === (30))){
var inst_87793 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_87794 = figwheel.client.heads_up.display_warning.call(null,inst_87793);
var state_87821__$1 = state_87821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87821__$1,(33),inst_87794);
} else {
if((state_val_87822 === (10))){
var inst_87751 = (state_87821[(2)]);
var state_87821__$1 = state_87821;
var statearr_87864_87904 = state_87821__$1;
(statearr_87864_87904[(2)] = inst_87751);

(statearr_87864_87904[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87822 === (18))){
var inst_87767 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_87768 = figwheel.client.heads_up.display_exception.call(null,inst_87767);
var state_87821__$1 = state_87821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87821__$1,(21),inst_87768);
} else {
if((state_val_87822 === (37))){
var inst_87804 = (state_87821[(2)]);
var state_87821__$1 = state_87821;
var statearr_87865_87905 = state_87821__$1;
(statearr_87865_87905[(2)] = inst_87804);

(statearr_87865_87905[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87822 === (8))){
var inst_87743 = figwheel.client.heads_up.flash_loaded.call(null);
var state_87821__$1 = state_87821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87821__$1,(11),inst_87743);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__79089__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__78999__auto__,c__79089__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__79000__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__79000__auto____0 = (function (){
var statearr_87866 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_87866[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__79000__auto__);

(statearr_87866[(1)] = (1));

return statearr_87866;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__79000__auto____1 = (function (state_87821){
while(true){
var ret_value__79001__auto__ = (function (){try{while(true){
var result__79002__auto__ = switch__78999__auto__.call(null,state_87821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__79002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__79002__auto__;
}
break;
}
}catch (e87867){if((e87867 instanceof Object)){
var ex__79003__auto__ = e87867;
var statearr_87868_87906 = state_87821;
(statearr_87868_87906[(5)] = ex__79003__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__79001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87907 = state_87821;
state_87821 = G__87907;
continue;
} else {
return ret_value__79001__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__79000__auto__ = function(state_87821){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__79000__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__79000__auto____1.call(this,state_87821);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__79000__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__79000__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__79000__auto__;
})()
;})(switch__78999__auto__,c__79089__auto__,msg_hist,msg_names,msg))
})();
var state__79091__auto__ = (function (){var statearr_87869 = f__79090__auto__.call(null);
(statearr_87869[(6)] = c__79089__auto__);

return statearr_87869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__79091__auto__);
});})(c__79089__auto__,msg_hist,msg_names,msg))
);

return c__79089__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__79089__auto___87936 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__79089__auto___87936,ch){
return (function (){
var f__79090__auto__ = (function (){var switch__78999__auto__ = ((function (c__79089__auto___87936,ch){
return (function (state_87922){
var state_val_87923 = (state_87922[(1)]);
if((state_val_87923 === (1))){
var state_87922__$1 = state_87922;
var statearr_87924_87937 = state_87922__$1;
(statearr_87924_87937[(2)] = null);

(statearr_87924_87937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87923 === (2))){
var state_87922__$1 = state_87922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87922__$1,(4),ch);
} else {
if((state_val_87923 === (3))){
var inst_87920 = (state_87922[(2)]);
var state_87922__$1 = state_87922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_87922__$1,inst_87920);
} else {
if((state_val_87923 === (4))){
var inst_87910 = (state_87922[(7)]);
var inst_87910__$1 = (state_87922[(2)]);
var state_87922__$1 = (function (){var statearr_87925 = state_87922;
(statearr_87925[(7)] = inst_87910__$1);

return statearr_87925;
})();
if(cljs.core.truth_(inst_87910__$1)){
var statearr_87926_87938 = state_87922__$1;
(statearr_87926_87938[(1)] = (5));

} else {
var statearr_87927_87939 = state_87922__$1;
(statearr_87927_87939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87923 === (5))){
var inst_87910 = (state_87922[(7)]);
var inst_87912 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_87910);
var state_87922__$1 = state_87922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87922__$1,(8),inst_87912);
} else {
if((state_val_87923 === (6))){
var state_87922__$1 = state_87922;
var statearr_87928_87940 = state_87922__$1;
(statearr_87928_87940[(2)] = null);

(statearr_87928_87940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87923 === (7))){
var inst_87918 = (state_87922[(2)]);
var state_87922__$1 = state_87922;
var statearr_87929_87941 = state_87922__$1;
(statearr_87929_87941[(2)] = inst_87918);

(statearr_87929_87941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87923 === (8))){
var inst_87914 = (state_87922[(2)]);
var state_87922__$1 = (function (){var statearr_87930 = state_87922;
(statearr_87930[(8)] = inst_87914);

return statearr_87930;
})();
var statearr_87931_87942 = state_87922__$1;
(statearr_87931_87942[(2)] = null);

(statearr_87931_87942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__79089__auto___87936,ch))
;
return ((function (switch__78999__auto__,c__79089__auto___87936,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__79000__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__79000__auto____0 = (function (){
var statearr_87932 = [null,null,null,null,null,null,null,null,null];
(statearr_87932[(0)] = figwheel$client$heads_up_plugin_$_state_machine__79000__auto__);

(statearr_87932[(1)] = (1));

return statearr_87932;
});
var figwheel$client$heads_up_plugin_$_state_machine__79000__auto____1 = (function (state_87922){
while(true){
var ret_value__79001__auto__ = (function (){try{while(true){
var result__79002__auto__ = switch__78999__auto__.call(null,state_87922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__79002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__79002__auto__;
}
break;
}
}catch (e87933){if((e87933 instanceof Object)){
var ex__79003__auto__ = e87933;
var statearr_87934_87943 = state_87922;
(statearr_87934_87943[(5)] = ex__79003__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__79001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87944 = state_87922;
state_87922 = G__87944;
continue;
} else {
return ret_value__79001__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__79000__auto__ = function(state_87922){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__79000__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__79000__auto____1.call(this,state_87922);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__79000__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__79000__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__79000__auto__;
})()
;})(switch__78999__auto__,c__79089__auto___87936,ch))
})();
var state__79091__auto__ = (function (){var statearr_87935 = f__79090__auto__.call(null);
(statearr_87935[(6)] = c__79089__auto___87936);

return statearr_87935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__79091__auto__);
});})(c__79089__auto___87936,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__79089__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__79089__auto__){
return (function (){
var f__79090__auto__ = (function (){var switch__78999__auto__ = ((function (c__79089__auto__){
return (function (state_87950){
var state_val_87951 = (state_87950[(1)]);
if((state_val_87951 === (1))){
var inst_87945 = cljs.core.async.timeout.call(null,(3000));
var state_87950__$1 = state_87950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87950__$1,(2),inst_87945);
} else {
if((state_val_87951 === (2))){
var inst_87947 = (state_87950[(2)]);
var inst_87948 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_87950__$1 = (function (){var statearr_87952 = state_87950;
(statearr_87952[(7)] = inst_87947);

return statearr_87952;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_87950__$1,inst_87948);
} else {
return null;
}
}
});})(c__79089__auto__))
;
return ((function (switch__78999__auto__,c__79089__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__79000__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__79000__auto____0 = (function (){
var statearr_87953 = [null,null,null,null,null,null,null,null];
(statearr_87953[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__79000__auto__);

(statearr_87953[(1)] = (1));

return statearr_87953;
});
var figwheel$client$enforce_project_plugin_$_state_machine__79000__auto____1 = (function (state_87950){
while(true){
var ret_value__79001__auto__ = (function (){try{while(true){
var result__79002__auto__ = switch__78999__auto__.call(null,state_87950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__79002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__79002__auto__;
}
break;
}
}catch (e87954){if((e87954 instanceof Object)){
var ex__79003__auto__ = e87954;
var statearr_87955_87957 = state_87950;
(statearr_87955_87957[(5)] = ex__79003__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87954;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__79001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87958 = state_87950;
state_87950 = G__87958;
continue;
} else {
return ret_value__79001__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__79000__auto__ = function(state_87950){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__79000__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__79000__auto____1.call(this,state_87950);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__79000__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__79000__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__79000__auto__;
})()
;})(switch__78999__auto__,c__79089__auto__))
})();
var state__79091__auto__ = (function (){var statearr_87956 = f__79090__auto__.call(null);
(statearr_87956[(6)] = c__79089__auto__);

return statearr_87956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__79091__auto__);
});})(c__79089__auto__))
);

return c__79089__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__79089__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__79089__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__79090__auto__ = (function (){var switch__78999__auto__ = ((function (c__79089__auto__,figwheel_version,temp__5457__auto__){
return (function (state_87965){
var state_val_87966 = (state_87965[(1)]);
if((state_val_87966 === (1))){
var inst_87959 = cljs.core.async.timeout.call(null,(2000));
var state_87965__$1 = state_87965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87965__$1,(2),inst_87959);
} else {
if((state_val_87966 === (2))){
var inst_87961 = (state_87965[(2)]);
var inst_87962 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_87963 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_87962);
var state_87965__$1 = (function (){var statearr_87967 = state_87965;
(statearr_87967[(7)] = inst_87961);

return statearr_87967;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_87965__$1,inst_87963);
} else {
return null;
}
}
});})(c__79089__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__78999__auto__,c__79089__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__79000__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__79000__auto____0 = (function (){
var statearr_87968 = [null,null,null,null,null,null,null,null];
(statearr_87968[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__79000__auto__);

(statearr_87968[(1)] = (1));

return statearr_87968;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__79000__auto____1 = (function (state_87965){
while(true){
var ret_value__79001__auto__ = (function (){try{while(true){
var result__79002__auto__ = switch__78999__auto__.call(null,state_87965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__79002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__79002__auto__;
}
break;
}
}catch (e87969){if((e87969 instanceof Object)){
var ex__79003__auto__ = e87969;
var statearr_87970_87972 = state_87965;
(statearr_87970_87972[(5)] = ex__79003__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__79001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87973 = state_87965;
state_87965 = G__87973;
continue;
} else {
return ret_value__79001__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__79000__auto__ = function(state_87965){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__79000__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__79000__auto____1.call(this,state_87965);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__79000__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__79000__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__79000__auto__;
})()
;})(switch__78999__auto__,c__79089__auto__,figwheel_version,temp__5457__auto__))
})();
var state__79091__auto__ = (function (){var statearr_87971 = f__79090__auto__.call(null);
(statearr_87971[(6)] = c__79089__auto__);

return statearr_87971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__79091__auto__);
});})(c__79089__auto__,figwheel_version,temp__5457__auto__))
);

return c__79089__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__87974){
var map__87975 = p__87974;
var map__87975__$1 = ((((!((map__87975 == null)))?((((map__87975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87975.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87975):map__87975);
var file = cljs.core.get.call(null,map__87975__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__87975__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__87975__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__87977 = "";
var G__87977__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__87977),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__87977);
var G__87977__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__87977__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__87977__$1);
if(cljs.core.truth_((function (){var and__74889__auto__ = line;
if(cljs.core.truth_(and__74889__auto__)){
return column;
} else {
return and__74889__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__87977__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__87977__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__87978){
var map__87979 = p__87978;
var map__87979__$1 = ((((!((map__87979 == null)))?((((map__87979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87979.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87979):map__87979);
var ed = map__87979__$1;
var formatted_exception = cljs.core.get.call(null,map__87979__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__87979__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__87979__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__87981_87985 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__87982_87986 = null;
var count__87983_87987 = (0);
var i__87984_87988 = (0);
while(true){
if((i__87984_87988 < count__87983_87987)){
var msg_87989 = cljs.core._nth.call(null,chunk__87982_87986,i__87984_87988);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_87989);

var G__87990 = seq__87981_87985;
var G__87991 = chunk__87982_87986;
var G__87992 = count__87983_87987;
var G__87993 = (i__87984_87988 + (1));
seq__87981_87985 = G__87990;
chunk__87982_87986 = G__87991;
count__87983_87987 = G__87992;
i__87984_87988 = G__87993;
continue;
} else {
var temp__5457__auto___87994 = cljs.core.seq.call(null,seq__87981_87985);
if(temp__5457__auto___87994){
var seq__87981_87995__$1 = temp__5457__auto___87994;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__87981_87995__$1)){
var c__75832__auto___87996 = cljs.core.chunk_first.call(null,seq__87981_87995__$1);
var G__87997 = cljs.core.chunk_rest.call(null,seq__87981_87995__$1);
var G__87998 = c__75832__auto___87996;
var G__87999 = cljs.core.count.call(null,c__75832__auto___87996);
var G__88000 = (0);
seq__87981_87985 = G__87997;
chunk__87982_87986 = G__87998;
count__87983_87987 = G__87999;
i__87984_87988 = G__88000;
continue;
} else {
var msg_88001 = cljs.core.first.call(null,seq__87981_87995__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_88001);

var G__88002 = cljs.core.next.call(null,seq__87981_87995__$1);
var G__88003 = null;
var G__88004 = (0);
var G__88005 = (0);
seq__87981_87985 = G__88002;
chunk__87982_87986 = G__88003;
count__87983_87987 = G__88004;
i__87984_87988 = G__88005;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__88006){
var map__88007 = p__88006;
var map__88007__$1 = ((((!((map__88007 == null)))?((((map__88007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88007.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88007):map__88007);
var w = map__88007__$1;
var message = cljs.core.get.call(null,map__88007__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__74889__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__74889__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__74889__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__88009 = cljs.core.seq.call(null,plugins);
var chunk__88010 = null;
var count__88011 = (0);
var i__88012 = (0);
while(true){
if((i__88012 < count__88011)){
var vec__88013 = cljs.core._nth.call(null,chunk__88010,i__88012);
var k = cljs.core.nth.call(null,vec__88013,(0),null);
var plugin = cljs.core.nth.call(null,vec__88013,(1),null);
if(cljs.core.truth_(plugin)){
var pl_88019 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__88009,chunk__88010,count__88011,i__88012,pl_88019,vec__88013,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_88019.call(null,msg_hist);
});})(seq__88009,chunk__88010,count__88011,i__88012,pl_88019,vec__88013,k,plugin))
);
} else {
}

var G__88020 = seq__88009;
var G__88021 = chunk__88010;
var G__88022 = count__88011;
var G__88023 = (i__88012 + (1));
seq__88009 = G__88020;
chunk__88010 = G__88021;
count__88011 = G__88022;
i__88012 = G__88023;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__88009);
if(temp__5457__auto__){
var seq__88009__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__88009__$1)){
var c__75832__auto__ = cljs.core.chunk_first.call(null,seq__88009__$1);
var G__88024 = cljs.core.chunk_rest.call(null,seq__88009__$1);
var G__88025 = c__75832__auto__;
var G__88026 = cljs.core.count.call(null,c__75832__auto__);
var G__88027 = (0);
seq__88009 = G__88024;
chunk__88010 = G__88025;
count__88011 = G__88026;
i__88012 = G__88027;
continue;
} else {
var vec__88016 = cljs.core.first.call(null,seq__88009__$1);
var k = cljs.core.nth.call(null,vec__88016,(0),null);
var plugin = cljs.core.nth.call(null,vec__88016,(1),null);
if(cljs.core.truth_(plugin)){
var pl_88028 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__88009,chunk__88010,count__88011,i__88012,pl_88028,vec__88016,k,plugin,seq__88009__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_88028.call(null,msg_hist);
});})(seq__88009,chunk__88010,count__88011,i__88012,pl_88028,vec__88016,k,plugin,seq__88009__$1,temp__5457__auto__))
);
} else {
}

var G__88029 = cljs.core.next.call(null,seq__88009__$1);
var G__88030 = null;
var G__88031 = (0);
var G__88032 = (0);
seq__88009 = G__88029;
chunk__88010 = G__88030;
count__88011 = G__88031;
i__88012 = G__88032;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__88034 = arguments.length;
switch (G__88034) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__88035_88040 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__88036_88041 = null;
var count__88037_88042 = (0);
var i__88038_88043 = (0);
while(true){
if((i__88038_88043 < count__88037_88042)){
var msg_88044 = cljs.core._nth.call(null,chunk__88036_88041,i__88038_88043);
figwheel.client.socket.handle_incoming_message.call(null,msg_88044);

var G__88045 = seq__88035_88040;
var G__88046 = chunk__88036_88041;
var G__88047 = count__88037_88042;
var G__88048 = (i__88038_88043 + (1));
seq__88035_88040 = G__88045;
chunk__88036_88041 = G__88046;
count__88037_88042 = G__88047;
i__88038_88043 = G__88048;
continue;
} else {
var temp__5457__auto___88049 = cljs.core.seq.call(null,seq__88035_88040);
if(temp__5457__auto___88049){
var seq__88035_88050__$1 = temp__5457__auto___88049;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__88035_88050__$1)){
var c__75832__auto___88051 = cljs.core.chunk_first.call(null,seq__88035_88050__$1);
var G__88052 = cljs.core.chunk_rest.call(null,seq__88035_88050__$1);
var G__88053 = c__75832__auto___88051;
var G__88054 = cljs.core.count.call(null,c__75832__auto___88051);
var G__88055 = (0);
seq__88035_88040 = G__88052;
chunk__88036_88041 = G__88053;
count__88037_88042 = G__88054;
i__88038_88043 = G__88055;
continue;
} else {
var msg_88056 = cljs.core.first.call(null,seq__88035_88050__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_88056);

var G__88057 = cljs.core.next.call(null,seq__88035_88050__$1);
var G__88058 = null;
var G__88059 = (0);
var G__88060 = (0);
seq__88035_88040 = G__88057;
chunk__88036_88041 = G__88058;
count__88037_88042 = G__88059;
i__88038_88043 = G__88060;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__76185__auto__ = [];
var len__76178__auto___88065 = arguments.length;
var i__76179__auto___88066 = (0);
while(true){
if((i__76179__auto___88066 < len__76178__auto___88065)){
args__76185__auto__.push((arguments[i__76179__auto___88066]));

var G__88067 = (i__76179__auto___88066 + (1));
i__76179__auto___88066 = G__88067;
continue;
} else {
}
break;
}

var argseq__76186__auto__ = ((((0) < args__76185__auto__.length))?(new cljs.core.IndexedSeq(args__76185__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__76186__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__88062){
var map__88063 = p__88062;
var map__88063__$1 = ((((!((map__88063 == null)))?((((map__88063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88063.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88063):map__88063);
var opts = map__88063__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq88061){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq88061));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e88068){if((e88068 instanceof Error)){
var e = e88068;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e88068;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__88069){
var map__88070 = p__88069;
var map__88070__$1 = ((((!((map__88070 == null)))?((((map__88070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88070.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__88070):map__88070);
var msg_name = cljs.core.get.call(null,map__88070__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1515122962115
