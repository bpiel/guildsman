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
}catch (e75451){if((e75451 instanceof Error)){
var e = e75451;
return "Error: Unable to stringify";
} else {
throw e75451;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__75454 = arguments.length;
switch (G__75454) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__75452_SHARP_){
if(typeof p1__75452_SHARP_ === 'string'){
return p1__75452_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__75452_SHARP_);
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
var args__64045__auto__ = [];
var len__64038__auto___75457 = arguments.length;
var i__64039__auto___75458 = (0);
while(true){
if((i__64039__auto___75458 < len__64038__auto___75457)){
args__64045__auto__.push((arguments[i__64039__auto___75458]));

var G__75459 = (i__64039__auto___75458 + (1));
i__64039__auto___75458 = G__75459;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq75456){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq75456));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__64045__auto__ = [];
var len__64038__auto___75461 = arguments.length;
var i__64039__auto___75462 = (0);
while(true){
if((i__64039__auto___75462 < len__64038__auto___75461)){
args__64045__auto__.push((arguments[i__64039__auto___75462]));

var G__75463 = (i__64039__auto___75462 + (1));
i__64039__auto___75462 = G__75463;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq75460){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq75460));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__75464){
var map__75465 = p__75464;
var map__75465__$1 = ((((!((map__75465 == null)))?((((map__75465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75465.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__75465):map__75465);
var message = cljs.core.get.call(null,map__75465__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__75465__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__62761__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__62761__auto__)){
return or__62761__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__62749__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__62749__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__62749__auto__;
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
var c__66950__auto___75544 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__66950__auto___75544,ch){
return (function (){
var f__66951__auto__ = (function (){var switch__66860__auto__ = ((function (c__66950__auto___75544,ch){
return (function (state_75516){
var state_val_75517 = (state_75516[(1)]);
if((state_val_75517 === (7))){
var inst_75512 = (state_75516[(2)]);
var state_75516__$1 = state_75516;
var statearr_75518_75545 = state_75516__$1;
(statearr_75518_75545[(2)] = inst_75512);

(statearr_75518_75545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75517 === (1))){
var state_75516__$1 = state_75516;
var statearr_75519_75546 = state_75516__$1;
(statearr_75519_75546[(2)] = null);

(statearr_75519_75546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75517 === (4))){
var inst_75469 = (state_75516[(7)]);
var inst_75469__$1 = (state_75516[(2)]);
var state_75516__$1 = (function (){var statearr_75520 = state_75516;
(statearr_75520[(7)] = inst_75469__$1);

return statearr_75520;
})();
if(cljs.core.truth_(inst_75469__$1)){
var statearr_75521_75547 = state_75516__$1;
(statearr_75521_75547[(1)] = (5));

} else {
var statearr_75522_75548 = state_75516__$1;
(statearr_75522_75548[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75517 === (15))){
var inst_75476 = (state_75516[(8)]);
var inst_75491 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_75476);
var inst_75492 = cljs.core.first.call(null,inst_75491);
var inst_75493 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_75492);
var inst_75494 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_75493)].join('');
var inst_75495 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_75494);
var state_75516__$1 = state_75516;
var statearr_75523_75549 = state_75516__$1;
(statearr_75523_75549[(2)] = inst_75495);

(statearr_75523_75549[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75517 === (13))){
var inst_75500 = (state_75516[(2)]);
var state_75516__$1 = state_75516;
var statearr_75524_75550 = state_75516__$1;
(statearr_75524_75550[(2)] = inst_75500);

(statearr_75524_75550[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75517 === (6))){
var state_75516__$1 = state_75516;
var statearr_75525_75551 = state_75516__$1;
(statearr_75525_75551[(2)] = null);

(statearr_75525_75551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75517 === (17))){
var inst_75498 = (state_75516[(2)]);
var state_75516__$1 = state_75516;
var statearr_75526_75552 = state_75516__$1;
(statearr_75526_75552[(2)] = inst_75498);

(statearr_75526_75552[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75517 === (3))){
var inst_75514 = (state_75516[(2)]);
var state_75516__$1 = state_75516;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_75516__$1,inst_75514);
} else {
if((state_val_75517 === (12))){
var inst_75475 = (state_75516[(9)]);
var inst_75489 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_75475,opts);
var state_75516__$1 = state_75516;
if(cljs.core.truth_(inst_75489)){
var statearr_75527_75553 = state_75516__$1;
(statearr_75527_75553[(1)] = (15));

} else {
var statearr_75528_75554 = state_75516__$1;
(statearr_75528_75554[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75517 === (2))){
var state_75516__$1 = state_75516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75516__$1,(4),ch);
} else {
if((state_val_75517 === (11))){
var inst_75476 = (state_75516[(8)]);
var inst_75481 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_75482 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_75476);
var inst_75483 = cljs.core.async.timeout.call(null,(1000));
var inst_75484 = [inst_75482,inst_75483];
var inst_75485 = (new cljs.core.PersistentVector(null,2,(5),inst_75481,inst_75484,null));
var state_75516__$1 = state_75516;
return cljs.core.async.ioc_alts_BANG_.call(null,state_75516__$1,(14),inst_75485);
} else {
if((state_val_75517 === (9))){
var inst_75476 = (state_75516[(8)]);
var inst_75502 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_75503 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_75476);
var inst_75504 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_75503);
var inst_75505 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_75504)].join('');
var inst_75506 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_75505);
var state_75516__$1 = (function (){var statearr_75529 = state_75516;
(statearr_75529[(10)] = inst_75502);

return statearr_75529;
})();
var statearr_75530_75555 = state_75516__$1;
(statearr_75530_75555[(2)] = inst_75506);

(statearr_75530_75555[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75517 === (5))){
var inst_75469 = (state_75516[(7)]);
var inst_75471 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_75472 = (new cljs.core.PersistentArrayMap(null,2,inst_75471,null));
var inst_75473 = (new cljs.core.PersistentHashSet(null,inst_75472,null));
var inst_75474 = figwheel.client.focus_msgs.call(null,inst_75473,inst_75469);
var inst_75475 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_75474);
var inst_75476 = cljs.core.first.call(null,inst_75474);
var inst_75477 = figwheel.client.autoload_QMARK_.call(null);
var state_75516__$1 = (function (){var statearr_75531 = state_75516;
(statearr_75531[(9)] = inst_75475);

(statearr_75531[(8)] = inst_75476);

return statearr_75531;
})();
if(cljs.core.truth_(inst_75477)){
var statearr_75532_75556 = state_75516__$1;
(statearr_75532_75556[(1)] = (8));

} else {
var statearr_75533_75557 = state_75516__$1;
(statearr_75533_75557[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75517 === (14))){
var inst_75487 = (state_75516[(2)]);
var state_75516__$1 = state_75516;
var statearr_75534_75558 = state_75516__$1;
(statearr_75534_75558[(2)] = inst_75487);

(statearr_75534_75558[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75517 === (16))){
var state_75516__$1 = state_75516;
var statearr_75535_75559 = state_75516__$1;
(statearr_75535_75559[(2)] = null);

(statearr_75535_75559[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75517 === (10))){
var inst_75508 = (state_75516[(2)]);
var state_75516__$1 = (function (){var statearr_75536 = state_75516;
(statearr_75536[(11)] = inst_75508);

return statearr_75536;
})();
var statearr_75537_75560 = state_75516__$1;
(statearr_75537_75560[(2)] = null);

(statearr_75537_75560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75517 === (8))){
var inst_75475 = (state_75516[(9)]);
var inst_75479 = figwheel.client.reload_file_state_QMARK_.call(null,inst_75475,opts);
var state_75516__$1 = state_75516;
if(cljs.core.truth_(inst_75479)){
var statearr_75538_75561 = state_75516__$1;
(statearr_75538_75561[(1)] = (11));

} else {
var statearr_75539_75562 = state_75516__$1;
(statearr_75539_75562[(1)] = (12));

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
});})(c__66950__auto___75544,ch))
;
return ((function (switch__66860__auto__,c__66950__auto___75544,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__66861__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__66861__auto____0 = (function (){
var statearr_75540 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75540[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__66861__auto__);

(statearr_75540[(1)] = (1));

return statearr_75540;
});
var figwheel$client$file_reloader_plugin_$_state_machine__66861__auto____1 = (function (state_75516){
while(true){
var ret_value__66862__auto__ = (function (){try{while(true){
var result__66863__auto__ = switch__66860__auto__.call(null,state_75516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__66863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66863__auto__;
}
break;
}
}catch (e75541){if((e75541 instanceof Object)){
var ex__66864__auto__ = e75541;
var statearr_75542_75563 = state_75516;
(statearr_75542_75563[(5)] = ex__66864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_75516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e75541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__66862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75564 = state_75516;
state_75516 = G__75564;
continue;
} else {
return ret_value__66862__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__66861__auto__ = function(state_75516){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__66861__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__66861__auto____1.call(this,state_75516);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__66861__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__66861__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__66861__auto__;
})()
;})(switch__66860__auto__,c__66950__auto___75544,ch))
})();
var state__66952__auto__ = (function (){var statearr_75543 = f__66951__auto__.call(null);
(statearr_75543[(6)] = c__66950__auto___75544);

return statearr_75543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__66952__auto__);
});})(c__66950__auto___75544,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__75565_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__75565_SHARP_));
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
var base_path_75567 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_75567){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e75566){if((e75566 instanceof Error)){
var e = e75566;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_75567], null));
} else {
var e = e75566;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_75567))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__75568){
var map__75569 = p__75568;
var map__75569__$1 = ((((!((map__75569 == null)))?((((map__75569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75569.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__75569):map__75569);
var opts = map__75569__$1;
var build_id = cljs.core.get.call(null,map__75569__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__75569,map__75569__$1,opts,build_id){
return (function (p__75571){
var vec__75572 = p__75571;
var seq__75573 = cljs.core.seq.call(null,vec__75572);
var first__75574 = cljs.core.first.call(null,seq__75573);
var seq__75573__$1 = cljs.core.next.call(null,seq__75573);
var map__75575 = first__75574;
var map__75575__$1 = ((((!((map__75575 == null)))?((((map__75575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75575.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__75575):map__75575);
var msg = map__75575__$1;
var msg_name = cljs.core.get.call(null,map__75575__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__75573__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__75572,seq__75573,first__75574,seq__75573__$1,map__75575,map__75575__$1,msg,msg_name,_,map__75569,map__75569__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__75572,seq__75573,first__75574,seq__75573__$1,map__75575,map__75575__$1,msg,msg_name,_,map__75569,map__75569__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__75569,map__75569__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__75577){
var vec__75578 = p__75577;
var seq__75579 = cljs.core.seq.call(null,vec__75578);
var first__75580 = cljs.core.first.call(null,seq__75579);
var seq__75579__$1 = cljs.core.next.call(null,seq__75579);
var map__75581 = first__75580;
var map__75581__$1 = ((((!((map__75581 == null)))?((((map__75581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75581.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__75581):map__75581);
var msg = map__75581__$1;
var msg_name = cljs.core.get.call(null,map__75581__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__75579__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__75583){
var map__75584 = p__75583;
var map__75584__$1 = ((((!((map__75584 == null)))?((((map__75584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75584.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__75584):map__75584);
var on_compile_warning = cljs.core.get.call(null,map__75584__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__75584__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__75584,map__75584__$1,on_compile_warning,on_compile_fail){
return (function (p__75586){
var vec__75587 = p__75586;
var seq__75588 = cljs.core.seq.call(null,vec__75587);
var first__75589 = cljs.core.first.call(null,seq__75588);
var seq__75588__$1 = cljs.core.next.call(null,seq__75588);
var map__75590 = first__75589;
var map__75590__$1 = ((((!((map__75590 == null)))?((((map__75590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75590.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__75590):map__75590);
var msg = map__75590__$1;
var msg_name = cljs.core.get.call(null,map__75590__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__75588__$1;
var pred__75592 = cljs.core._EQ_;
var expr__75593 = msg_name;
if(cljs.core.truth_(pred__75592.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__75593))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__75592.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__75593))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__75584,map__75584__$1,on_compile_warning,on_compile_fail))
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
var c__66950__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__66950__auto__,msg_hist,msg_names,msg){
return (function (){
var f__66951__auto__ = (function (){var switch__66860__auto__ = ((function (c__66950__auto__,msg_hist,msg_names,msg){
return (function (state_75682){
var state_val_75683 = (state_75682[(1)]);
if((state_val_75683 === (7))){
var inst_75602 = (state_75682[(2)]);
var state_75682__$1 = state_75682;
if(cljs.core.truth_(inst_75602)){
var statearr_75684_75731 = state_75682__$1;
(statearr_75684_75731[(1)] = (8));

} else {
var statearr_75685_75732 = state_75682__$1;
(statearr_75685_75732[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75683 === (20))){
var inst_75676 = (state_75682[(2)]);
var state_75682__$1 = state_75682;
var statearr_75686_75733 = state_75682__$1;
(statearr_75686_75733[(2)] = inst_75676);

(statearr_75686_75733[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75683 === (27))){
var inst_75672 = (state_75682[(2)]);
var state_75682__$1 = state_75682;
var statearr_75687_75734 = state_75682__$1;
(statearr_75687_75734[(2)] = inst_75672);

(statearr_75687_75734[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75683 === (1))){
var inst_75595 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_75682__$1 = state_75682;
if(cljs.core.truth_(inst_75595)){
var statearr_75688_75735 = state_75682__$1;
(statearr_75688_75735[(1)] = (2));

} else {
var statearr_75689_75736 = state_75682__$1;
(statearr_75689_75736[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75683 === (24))){
var inst_75674 = (state_75682[(2)]);
var state_75682__$1 = state_75682;
var statearr_75690_75737 = state_75682__$1;
(statearr_75690_75737[(2)] = inst_75674);

(statearr_75690_75737[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75683 === (4))){
var inst_75680 = (state_75682[(2)]);
var state_75682__$1 = state_75682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_75682__$1,inst_75680);
} else {
if((state_val_75683 === (15))){
var inst_75678 = (state_75682[(2)]);
var state_75682__$1 = state_75682;
var statearr_75691_75738 = state_75682__$1;
(statearr_75691_75738[(2)] = inst_75678);

(statearr_75691_75738[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75683 === (21))){
var inst_75631 = (state_75682[(2)]);
var inst_75632 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_75633 = figwheel.client.auto_jump_to_error.call(null,opts,inst_75632);
var state_75682__$1 = (function (){var statearr_75692 = state_75682;
(statearr_75692[(7)] = inst_75631);

return statearr_75692;
})();
var statearr_75693_75739 = state_75682__$1;
(statearr_75693_75739[(2)] = inst_75633);

(statearr_75693_75739[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75683 === (31))){
var inst_75661 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_75682__$1 = state_75682;
if(cljs.core.truth_(inst_75661)){
var statearr_75694_75740 = state_75682__$1;
(statearr_75694_75740[(1)] = (34));

} else {
var statearr_75695_75741 = state_75682__$1;
(statearr_75695_75741[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75683 === (32))){
var inst_75670 = (state_75682[(2)]);
var state_75682__$1 = state_75682;
var statearr_75696_75742 = state_75682__$1;
(statearr_75696_75742[(2)] = inst_75670);

(statearr_75696_75742[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75683 === (33))){
var inst_75657 = (state_75682[(2)]);
var inst_75658 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_75659 = figwheel.client.auto_jump_to_error.call(null,opts,inst_75658);
var state_75682__$1 = (function (){var statearr_75697 = state_75682;
(statearr_75697[(8)] = inst_75657);

return statearr_75697;
})();
var statearr_75698_75743 = state_75682__$1;
(statearr_75698_75743[(2)] = inst_75659);

(statearr_75698_75743[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75683 === (13))){
var inst_75616 = figwheel.client.heads_up.clear.call(null);
var state_75682__$1 = state_75682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75682__$1,(16),inst_75616);
} else {
if((state_val_75683 === (22))){
var inst_75637 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_75638 = figwheel.client.heads_up.append_warning_message.call(null,inst_75637);
var state_75682__$1 = state_75682;
var statearr_75699_75744 = state_75682__$1;
(statearr_75699_75744[(2)] = inst_75638);

(statearr_75699_75744[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75683 === (36))){
var inst_75668 = (state_75682[(2)]);
var state_75682__$1 = state_75682;
var statearr_75700_75745 = state_75682__$1;
(statearr_75700_75745[(2)] = inst_75668);

(statearr_75700_75745[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75683 === (29))){
var inst_75648 = (state_75682[(2)]);
var inst_75649 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_75650 = figwheel.client.auto_jump_to_error.call(null,opts,inst_75649);
var state_75682__$1 = (function (){var statearr_75701 = state_75682;
(statearr_75701[(9)] = inst_75648);

return statearr_75701;
})();
var statearr_75702_75746 = state_75682__$1;
(statearr_75702_75746[(2)] = inst_75650);

(statearr_75702_75746[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75683 === (6))){
var inst_75597 = (state_75682[(10)]);
var state_75682__$1 = state_75682;
var statearr_75703_75747 = state_75682__$1;
(statearr_75703_75747[(2)] = inst_75597);

(statearr_75703_75747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75683 === (28))){
var inst_75644 = (state_75682[(2)]);
var inst_75645 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_75646 = figwheel.client.heads_up.display_warning.call(null,inst_75645);
var state_75682__$1 = (function (){var statearr_75704 = state_75682;
(statearr_75704[(11)] = inst_75644);

return statearr_75704;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75682__$1,(29),inst_75646);
} else {
if((state_val_75683 === (25))){
var inst_75642 = figwheel.client.heads_up.clear.call(null);
var state_75682__$1 = state_75682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75682__$1,(28),inst_75642);
} else {
if((state_val_75683 === (34))){
var inst_75663 = figwheel.client.heads_up.flash_loaded.call(null);
var state_75682__$1 = state_75682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75682__$1,(37),inst_75663);
} else {
if((state_val_75683 === (17))){
var inst_75622 = (state_75682[(2)]);
var inst_75623 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_75624 = figwheel.client.auto_jump_to_error.call(null,opts,inst_75623);
var state_75682__$1 = (function (){var statearr_75705 = state_75682;
(statearr_75705[(12)] = inst_75622);

return statearr_75705;
})();
var statearr_75706_75748 = state_75682__$1;
(statearr_75706_75748[(2)] = inst_75624);

(statearr_75706_75748[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75683 === (3))){
var inst_75614 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_75682__$1 = state_75682;
if(cljs.core.truth_(inst_75614)){
var statearr_75707_75749 = state_75682__$1;
(statearr_75707_75749[(1)] = (13));

} else {
var statearr_75708_75750 = state_75682__$1;
(statearr_75708_75750[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75683 === (12))){
var inst_75610 = (state_75682[(2)]);
var state_75682__$1 = state_75682;
var statearr_75709_75751 = state_75682__$1;
(statearr_75709_75751[(2)] = inst_75610);

(statearr_75709_75751[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75683 === (2))){
var inst_75597 = (state_75682[(10)]);
var inst_75597__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_75682__$1 = (function (){var statearr_75710 = state_75682;
(statearr_75710[(10)] = inst_75597__$1);

return statearr_75710;
})();
if(cljs.core.truth_(inst_75597__$1)){
var statearr_75711_75752 = state_75682__$1;
(statearr_75711_75752[(1)] = (5));

} else {
var statearr_75712_75753 = state_75682__$1;
(statearr_75712_75753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75683 === (23))){
var inst_75640 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_75682__$1 = state_75682;
if(cljs.core.truth_(inst_75640)){
var statearr_75713_75754 = state_75682__$1;
(statearr_75713_75754[(1)] = (25));

} else {
var statearr_75714_75755 = state_75682__$1;
(statearr_75714_75755[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75683 === (35))){
var state_75682__$1 = state_75682;
var statearr_75715_75756 = state_75682__$1;
(statearr_75715_75756[(2)] = null);

(statearr_75715_75756[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75683 === (19))){
var inst_75635 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_75682__$1 = state_75682;
if(cljs.core.truth_(inst_75635)){
var statearr_75716_75757 = state_75682__$1;
(statearr_75716_75757[(1)] = (22));

} else {
var statearr_75717_75758 = state_75682__$1;
(statearr_75717_75758[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75683 === (11))){
var inst_75606 = (state_75682[(2)]);
var state_75682__$1 = state_75682;
var statearr_75718_75759 = state_75682__$1;
(statearr_75718_75759[(2)] = inst_75606);

(statearr_75718_75759[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75683 === (9))){
var inst_75608 = figwheel.client.heads_up.clear.call(null);
var state_75682__$1 = state_75682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75682__$1,(12),inst_75608);
} else {
if((state_val_75683 === (5))){
var inst_75599 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_75682__$1 = state_75682;
var statearr_75719_75760 = state_75682__$1;
(statearr_75719_75760[(2)] = inst_75599);

(statearr_75719_75760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75683 === (14))){
var inst_75626 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_75682__$1 = state_75682;
if(cljs.core.truth_(inst_75626)){
var statearr_75720_75761 = state_75682__$1;
(statearr_75720_75761[(1)] = (18));

} else {
var statearr_75721_75762 = state_75682__$1;
(statearr_75721_75762[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75683 === (26))){
var inst_75652 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_75682__$1 = state_75682;
if(cljs.core.truth_(inst_75652)){
var statearr_75722_75763 = state_75682__$1;
(statearr_75722_75763[(1)] = (30));

} else {
var statearr_75723_75764 = state_75682__$1;
(statearr_75723_75764[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75683 === (16))){
var inst_75618 = (state_75682[(2)]);
var inst_75619 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_75620 = figwheel.client.heads_up.display_exception.call(null,inst_75619);
var state_75682__$1 = (function (){var statearr_75724 = state_75682;
(statearr_75724[(13)] = inst_75618);

return statearr_75724;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75682__$1,(17),inst_75620);
} else {
if((state_val_75683 === (30))){
var inst_75654 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_75655 = figwheel.client.heads_up.display_warning.call(null,inst_75654);
var state_75682__$1 = state_75682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75682__$1,(33),inst_75655);
} else {
if((state_val_75683 === (10))){
var inst_75612 = (state_75682[(2)]);
var state_75682__$1 = state_75682;
var statearr_75725_75765 = state_75682__$1;
(statearr_75725_75765[(2)] = inst_75612);

(statearr_75725_75765[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75683 === (18))){
var inst_75628 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_75629 = figwheel.client.heads_up.display_exception.call(null,inst_75628);
var state_75682__$1 = state_75682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75682__$1,(21),inst_75629);
} else {
if((state_val_75683 === (37))){
var inst_75665 = (state_75682[(2)]);
var state_75682__$1 = state_75682;
var statearr_75726_75766 = state_75682__$1;
(statearr_75726_75766[(2)] = inst_75665);

(statearr_75726_75766[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75683 === (8))){
var inst_75604 = figwheel.client.heads_up.flash_loaded.call(null);
var state_75682__$1 = state_75682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75682__$1,(11),inst_75604);
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
});})(c__66950__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__66860__auto__,c__66950__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__66861__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__66861__auto____0 = (function (){
var statearr_75727 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75727[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__66861__auto__);

(statearr_75727[(1)] = (1));

return statearr_75727;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__66861__auto____1 = (function (state_75682){
while(true){
var ret_value__66862__auto__ = (function (){try{while(true){
var result__66863__auto__ = switch__66860__auto__.call(null,state_75682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__66863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66863__auto__;
}
break;
}
}catch (e75728){if((e75728 instanceof Object)){
var ex__66864__auto__ = e75728;
var statearr_75729_75767 = state_75682;
(statearr_75729_75767[(5)] = ex__66864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_75682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e75728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__66862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75768 = state_75682;
state_75682 = G__75768;
continue;
} else {
return ret_value__66862__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__66861__auto__ = function(state_75682){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__66861__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__66861__auto____1.call(this,state_75682);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__66861__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__66861__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__66861__auto__;
})()
;})(switch__66860__auto__,c__66950__auto__,msg_hist,msg_names,msg))
})();
var state__66952__auto__ = (function (){var statearr_75730 = f__66951__auto__.call(null);
(statearr_75730[(6)] = c__66950__auto__);

return statearr_75730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__66952__auto__);
});})(c__66950__auto__,msg_hist,msg_names,msg))
);

return c__66950__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__66950__auto___75797 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__66950__auto___75797,ch){
return (function (){
var f__66951__auto__ = (function (){var switch__66860__auto__ = ((function (c__66950__auto___75797,ch){
return (function (state_75783){
var state_val_75784 = (state_75783[(1)]);
if((state_val_75784 === (1))){
var state_75783__$1 = state_75783;
var statearr_75785_75798 = state_75783__$1;
(statearr_75785_75798[(2)] = null);

(statearr_75785_75798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75784 === (2))){
var state_75783__$1 = state_75783;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75783__$1,(4),ch);
} else {
if((state_val_75784 === (3))){
var inst_75781 = (state_75783[(2)]);
var state_75783__$1 = state_75783;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_75783__$1,inst_75781);
} else {
if((state_val_75784 === (4))){
var inst_75771 = (state_75783[(7)]);
var inst_75771__$1 = (state_75783[(2)]);
var state_75783__$1 = (function (){var statearr_75786 = state_75783;
(statearr_75786[(7)] = inst_75771__$1);

return statearr_75786;
})();
if(cljs.core.truth_(inst_75771__$1)){
var statearr_75787_75799 = state_75783__$1;
(statearr_75787_75799[(1)] = (5));

} else {
var statearr_75788_75800 = state_75783__$1;
(statearr_75788_75800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75784 === (5))){
var inst_75771 = (state_75783[(7)]);
var inst_75773 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_75771);
var state_75783__$1 = state_75783;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75783__$1,(8),inst_75773);
} else {
if((state_val_75784 === (6))){
var state_75783__$1 = state_75783;
var statearr_75789_75801 = state_75783__$1;
(statearr_75789_75801[(2)] = null);

(statearr_75789_75801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75784 === (7))){
var inst_75779 = (state_75783[(2)]);
var state_75783__$1 = state_75783;
var statearr_75790_75802 = state_75783__$1;
(statearr_75790_75802[(2)] = inst_75779);

(statearr_75790_75802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75784 === (8))){
var inst_75775 = (state_75783[(2)]);
var state_75783__$1 = (function (){var statearr_75791 = state_75783;
(statearr_75791[(8)] = inst_75775);

return statearr_75791;
})();
var statearr_75792_75803 = state_75783__$1;
(statearr_75792_75803[(2)] = null);

(statearr_75792_75803[(1)] = (2));


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
});})(c__66950__auto___75797,ch))
;
return ((function (switch__66860__auto__,c__66950__auto___75797,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__66861__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__66861__auto____0 = (function (){
var statearr_75793 = [null,null,null,null,null,null,null,null,null];
(statearr_75793[(0)] = figwheel$client$heads_up_plugin_$_state_machine__66861__auto__);

(statearr_75793[(1)] = (1));

return statearr_75793;
});
var figwheel$client$heads_up_plugin_$_state_machine__66861__auto____1 = (function (state_75783){
while(true){
var ret_value__66862__auto__ = (function (){try{while(true){
var result__66863__auto__ = switch__66860__auto__.call(null,state_75783);
if(cljs.core.keyword_identical_QMARK_.call(null,result__66863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66863__auto__;
}
break;
}
}catch (e75794){if((e75794 instanceof Object)){
var ex__66864__auto__ = e75794;
var statearr_75795_75804 = state_75783;
(statearr_75795_75804[(5)] = ex__66864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_75783);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e75794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__66862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75805 = state_75783;
state_75783 = G__75805;
continue;
} else {
return ret_value__66862__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__66861__auto__ = function(state_75783){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__66861__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__66861__auto____1.call(this,state_75783);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__66861__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__66861__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__66861__auto__;
})()
;})(switch__66860__auto__,c__66950__auto___75797,ch))
})();
var state__66952__auto__ = (function (){var statearr_75796 = f__66951__auto__.call(null);
(statearr_75796[(6)] = c__66950__auto___75797);

return statearr_75796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__66952__auto__);
});})(c__66950__auto___75797,ch))
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
var c__66950__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__66950__auto__){
return (function (){
var f__66951__auto__ = (function (){var switch__66860__auto__ = ((function (c__66950__auto__){
return (function (state_75811){
var state_val_75812 = (state_75811[(1)]);
if((state_val_75812 === (1))){
var inst_75806 = cljs.core.async.timeout.call(null,(3000));
var state_75811__$1 = state_75811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75811__$1,(2),inst_75806);
} else {
if((state_val_75812 === (2))){
var inst_75808 = (state_75811[(2)]);
var inst_75809 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_75811__$1 = (function (){var statearr_75813 = state_75811;
(statearr_75813[(7)] = inst_75808);

return statearr_75813;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_75811__$1,inst_75809);
} else {
return null;
}
}
});})(c__66950__auto__))
;
return ((function (switch__66860__auto__,c__66950__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__66861__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__66861__auto____0 = (function (){
var statearr_75814 = [null,null,null,null,null,null,null,null];
(statearr_75814[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__66861__auto__);

(statearr_75814[(1)] = (1));

return statearr_75814;
});
var figwheel$client$enforce_project_plugin_$_state_machine__66861__auto____1 = (function (state_75811){
while(true){
var ret_value__66862__auto__ = (function (){try{while(true){
var result__66863__auto__ = switch__66860__auto__.call(null,state_75811);
if(cljs.core.keyword_identical_QMARK_.call(null,result__66863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66863__auto__;
}
break;
}
}catch (e75815){if((e75815 instanceof Object)){
var ex__66864__auto__ = e75815;
var statearr_75816_75818 = state_75811;
(statearr_75816_75818[(5)] = ex__66864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_75811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e75815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__66862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75819 = state_75811;
state_75811 = G__75819;
continue;
} else {
return ret_value__66862__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__66861__auto__ = function(state_75811){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__66861__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__66861__auto____1.call(this,state_75811);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__66861__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__66861__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__66861__auto__;
})()
;})(switch__66860__auto__,c__66950__auto__))
})();
var state__66952__auto__ = (function (){var statearr_75817 = f__66951__auto__.call(null);
(statearr_75817[(6)] = c__66950__auto__);

return statearr_75817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__66952__auto__);
});})(c__66950__auto__))
);

return c__66950__auto__;
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
var c__66950__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__66950__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__66951__auto__ = (function (){var switch__66860__auto__ = ((function (c__66950__auto__,figwheel_version,temp__5457__auto__){
return (function (state_75826){
var state_val_75827 = (state_75826[(1)]);
if((state_val_75827 === (1))){
var inst_75820 = cljs.core.async.timeout.call(null,(2000));
var state_75826__$1 = state_75826;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_75826__$1,(2),inst_75820);
} else {
if((state_val_75827 === (2))){
var inst_75822 = (state_75826[(2)]);
var inst_75823 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_75824 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_75823);
var state_75826__$1 = (function (){var statearr_75828 = state_75826;
(statearr_75828[(7)] = inst_75822);

return statearr_75828;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_75826__$1,inst_75824);
} else {
return null;
}
}
});})(c__66950__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__66860__auto__,c__66950__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__66861__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__66861__auto____0 = (function (){
var statearr_75829 = [null,null,null,null,null,null,null,null];
(statearr_75829[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__66861__auto__);

(statearr_75829[(1)] = (1));

return statearr_75829;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__66861__auto____1 = (function (state_75826){
while(true){
var ret_value__66862__auto__ = (function (){try{while(true){
var result__66863__auto__ = switch__66860__auto__.call(null,state_75826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__66863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66863__auto__;
}
break;
}
}catch (e75830){if((e75830 instanceof Object)){
var ex__66864__auto__ = e75830;
var statearr_75831_75833 = state_75826;
(statearr_75831_75833[(5)] = ex__66864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_75826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e75830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__66862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75834 = state_75826;
state_75826 = G__75834;
continue;
} else {
return ret_value__66862__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__66861__auto__ = function(state_75826){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__66861__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__66861__auto____1.call(this,state_75826);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__66861__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__66861__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__66861__auto__;
})()
;})(switch__66860__auto__,c__66950__auto__,figwheel_version,temp__5457__auto__))
})();
var state__66952__auto__ = (function (){var statearr_75832 = f__66951__auto__.call(null);
(statearr_75832[(6)] = c__66950__auto__);

return statearr_75832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__66952__auto__);
});})(c__66950__auto__,figwheel_version,temp__5457__auto__))
);

return c__66950__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__75835){
var map__75836 = p__75835;
var map__75836__$1 = ((((!((map__75836 == null)))?((((map__75836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75836.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__75836):map__75836);
var file = cljs.core.get.call(null,map__75836__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__75836__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__75836__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__75838 = "";
var G__75838__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__75838),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__75838);
var G__75838__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__75838__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__75838__$1);
if(cljs.core.truth_((function (){var and__62749__auto__ = line;
if(cljs.core.truth_(and__62749__auto__)){
return column;
} else {
return and__62749__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__75838__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__75838__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__75839){
var map__75840 = p__75839;
var map__75840__$1 = ((((!((map__75840 == null)))?((((map__75840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75840.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__75840):map__75840);
var ed = map__75840__$1;
var formatted_exception = cljs.core.get.call(null,map__75840__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__75840__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__75840__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__75842_75846 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__75843_75847 = null;
var count__75844_75848 = (0);
var i__75845_75849 = (0);
while(true){
if((i__75845_75849 < count__75844_75848)){
var msg_75850 = cljs.core._nth.call(null,chunk__75843_75847,i__75845_75849);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_75850);

var G__75851 = seq__75842_75846;
var G__75852 = chunk__75843_75847;
var G__75853 = count__75844_75848;
var G__75854 = (i__75845_75849 + (1));
seq__75842_75846 = G__75851;
chunk__75843_75847 = G__75852;
count__75844_75848 = G__75853;
i__75845_75849 = G__75854;
continue;
} else {
var temp__5457__auto___75855 = cljs.core.seq.call(null,seq__75842_75846);
if(temp__5457__auto___75855){
var seq__75842_75856__$1 = temp__5457__auto___75855;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75842_75856__$1)){
var c__63692__auto___75857 = cljs.core.chunk_first.call(null,seq__75842_75856__$1);
var G__75858 = cljs.core.chunk_rest.call(null,seq__75842_75856__$1);
var G__75859 = c__63692__auto___75857;
var G__75860 = cljs.core.count.call(null,c__63692__auto___75857);
var G__75861 = (0);
seq__75842_75846 = G__75858;
chunk__75843_75847 = G__75859;
count__75844_75848 = G__75860;
i__75845_75849 = G__75861;
continue;
} else {
var msg_75862 = cljs.core.first.call(null,seq__75842_75856__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_75862);

var G__75863 = cljs.core.next.call(null,seq__75842_75856__$1);
var G__75864 = null;
var G__75865 = (0);
var G__75866 = (0);
seq__75842_75846 = G__75863;
chunk__75843_75847 = G__75864;
count__75844_75848 = G__75865;
i__75845_75849 = G__75866;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__75867){
var map__75868 = p__75867;
var map__75868__$1 = ((((!((map__75868 == null)))?((((map__75868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75868.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__75868):map__75868);
var w = map__75868__$1;
var message = cljs.core.get.call(null,map__75868__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__62749__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__62749__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__62749__auto__;
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
var seq__75870 = cljs.core.seq.call(null,plugins);
var chunk__75871 = null;
var count__75872 = (0);
var i__75873 = (0);
while(true){
if((i__75873 < count__75872)){
var vec__75874 = cljs.core._nth.call(null,chunk__75871,i__75873);
var k = cljs.core.nth.call(null,vec__75874,(0),null);
var plugin = cljs.core.nth.call(null,vec__75874,(1),null);
if(cljs.core.truth_(plugin)){
var pl_75880 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__75870,chunk__75871,count__75872,i__75873,pl_75880,vec__75874,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_75880.call(null,msg_hist);
});})(seq__75870,chunk__75871,count__75872,i__75873,pl_75880,vec__75874,k,plugin))
);
} else {
}

var G__75881 = seq__75870;
var G__75882 = chunk__75871;
var G__75883 = count__75872;
var G__75884 = (i__75873 + (1));
seq__75870 = G__75881;
chunk__75871 = G__75882;
count__75872 = G__75883;
i__75873 = G__75884;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__75870);
if(temp__5457__auto__){
var seq__75870__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75870__$1)){
var c__63692__auto__ = cljs.core.chunk_first.call(null,seq__75870__$1);
var G__75885 = cljs.core.chunk_rest.call(null,seq__75870__$1);
var G__75886 = c__63692__auto__;
var G__75887 = cljs.core.count.call(null,c__63692__auto__);
var G__75888 = (0);
seq__75870 = G__75885;
chunk__75871 = G__75886;
count__75872 = G__75887;
i__75873 = G__75888;
continue;
} else {
var vec__75877 = cljs.core.first.call(null,seq__75870__$1);
var k = cljs.core.nth.call(null,vec__75877,(0),null);
var plugin = cljs.core.nth.call(null,vec__75877,(1),null);
if(cljs.core.truth_(plugin)){
var pl_75889 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__75870,chunk__75871,count__75872,i__75873,pl_75889,vec__75877,k,plugin,seq__75870__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_75889.call(null,msg_hist);
});})(seq__75870,chunk__75871,count__75872,i__75873,pl_75889,vec__75877,k,plugin,seq__75870__$1,temp__5457__auto__))
);
} else {
}

var G__75890 = cljs.core.next.call(null,seq__75870__$1);
var G__75891 = null;
var G__75892 = (0);
var G__75893 = (0);
seq__75870 = G__75890;
chunk__75871 = G__75891;
count__75872 = G__75892;
i__75873 = G__75893;
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
var G__75895 = arguments.length;
switch (G__75895) {
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

var seq__75896_75901 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__75897_75902 = null;
var count__75898_75903 = (0);
var i__75899_75904 = (0);
while(true){
if((i__75899_75904 < count__75898_75903)){
var msg_75905 = cljs.core._nth.call(null,chunk__75897_75902,i__75899_75904);
figwheel.client.socket.handle_incoming_message.call(null,msg_75905);

var G__75906 = seq__75896_75901;
var G__75907 = chunk__75897_75902;
var G__75908 = count__75898_75903;
var G__75909 = (i__75899_75904 + (1));
seq__75896_75901 = G__75906;
chunk__75897_75902 = G__75907;
count__75898_75903 = G__75908;
i__75899_75904 = G__75909;
continue;
} else {
var temp__5457__auto___75910 = cljs.core.seq.call(null,seq__75896_75901);
if(temp__5457__auto___75910){
var seq__75896_75911__$1 = temp__5457__auto___75910;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75896_75911__$1)){
var c__63692__auto___75912 = cljs.core.chunk_first.call(null,seq__75896_75911__$1);
var G__75913 = cljs.core.chunk_rest.call(null,seq__75896_75911__$1);
var G__75914 = c__63692__auto___75912;
var G__75915 = cljs.core.count.call(null,c__63692__auto___75912);
var G__75916 = (0);
seq__75896_75901 = G__75913;
chunk__75897_75902 = G__75914;
count__75898_75903 = G__75915;
i__75899_75904 = G__75916;
continue;
} else {
var msg_75917 = cljs.core.first.call(null,seq__75896_75911__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_75917);

var G__75918 = cljs.core.next.call(null,seq__75896_75911__$1);
var G__75919 = null;
var G__75920 = (0);
var G__75921 = (0);
seq__75896_75901 = G__75918;
chunk__75897_75902 = G__75919;
count__75898_75903 = G__75920;
i__75899_75904 = G__75921;
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
var args__64045__auto__ = [];
var len__64038__auto___75926 = arguments.length;
var i__64039__auto___75927 = (0);
while(true){
if((i__64039__auto___75927 < len__64038__auto___75926)){
args__64045__auto__.push((arguments[i__64039__auto___75927]));

var G__75928 = (i__64039__auto___75927 + (1));
i__64039__auto___75927 = G__75928;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__75923){
var map__75924 = p__75923;
var map__75924__$1 = ((((!((map__75924 == null)))?((((map__75924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75924.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__75924):map__75924);
var opts = map__75924__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq75922){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq75922));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e75929){if((e75929 instanceof Error)){
var e = e75929;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e75929;

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
return (function (p__75930){
var map__75931 = p__75930;
var map__75931__$1 = ((((!((map__75931 == null)))?((((map__75931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75931.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__75931):map__75931);
var msg_name = cljs.core.get.call(null,map__75931__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1514950340912
