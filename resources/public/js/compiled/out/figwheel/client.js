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
}catch (e22376){if((e22376 instanceof Error)){
var e = e22376;
return "Error: Unable to stringify";
} else {
throw e22376;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__22379 = arguments.length;
switch (G__22379) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__22377_SHARP_){
if(typeof p1__22377_SHARP_ === 'string'){
return p1__22377_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__22377_SHARP_);
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
var args__9643__auto__ = [];
var len__9636__auto___22382 = arguments.length;
var i__9637__auto___22383 = (0);
while(true){
if((i__9637__auto___22383 < len__9636__auto___22382)){
args__9643__auto__.push((arguments[i__9637__auto___22383]));

var G__22384 = (i__9637__auto___22383 + (1));
i__9637__auto___22383 = G__22384;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq22381){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22381));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__9643__auto__ = [];
var len__9636__auto___22386 = arguments.length;
var i__9637__auto___22387 = (0);
while(true){
if((i__9637__auto___22387 < len__9636__auto___22386)){
args__9643__auto__.push((arguments[i__9637__auto___22387]));

var G__22388 = (i__9637__auto___22387 + (1));
i__9637__auto___22387 = G__22388;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq22385){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22385));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__22389){
var map__22390 = p__22389;
var map__22390__$1 = ((((!((map__22390 == null)))?((((map__22390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22390.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22390):map__22390);
var message = cljs.core.get.call(null,map__22390__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__22390__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__8359__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__8359__auto__)){
return or__8359__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__8347__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__8347__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__8347__auto__;
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
var c__12947__auto___22469 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12947__auto___22469,ch){
return (function (){
var f__12948__auto__ = (function (){var switch__12857__auto__ = ((function (c__12947__auto___22469,ch){
return (function (state_22441){
var state_val_22442 = (state_22441[(1)]);
if((state_val_22442 === (7))){
var inst_22437 = (state_22441[(2)]);
var state_22441__$1 = state_22441;
var statearr_22443_22470 = state_22441__$1;
(statearr_22443_22470[(2)] = inst_22437);

(statearr_22443_22470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22442 === (1))){
var state_22441__$1 = state_22441;
var statearr_22444_22471 = state_22441__$1;
(statearr_22444_22471[(2)] = null);

(statearr_22444_22471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22442 === (4))){
var inst_22394 = (state_22441[(7)]);
var inst_22394__$1 = (state_22441[(2)]);
var state_22441__$1 = (function (){var statearr_22445 = state_22441;
(statearr_22445[(7)] = inst_22394__$1);

return statearr_22445;
})();
if(cljs.core.truth_(inst_22394__$1)){
var statearr_22446_22472 = state_22441__$1;
(statearr_22446_22472[(1)] = (5));

} else {
var statearr_22447_22473 = state_22441__$1;
(statearr_22447_22473[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22442 === (15))){
var inst_22401 = (state_22441[(8)]);
var inst_22416 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_22401);
var inst_22417 = cljs.core.first.call(null,inst_22416);
var inst_22418 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_22417);
var inst_22419 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_22418)].join('');
var inst_22420 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_22419);
var state_22441__$1 = state_22441;
var statearr_22448_22474 = state_22441__$1;
(statearr_22448_22474[(2)] = inst_22420);

(statearr_22448_22474[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22442 === (13))){
var inst_22425 = (state_22441[(2)]);
var state_22441__$1 = state_22441;
var statearr_22449_22475 = state_22441__$1;
(statearr_22449_22475[(2)] = inst_22425);

(statearr_22449_22475[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22442 === (6))){
var state_22441__$1 = state_22441;
var statearr_22450_22476 = state_22441__$1;
(statearr_22450_22476[(2)] = null);

(statearr_22450_22476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22442 === (17))){
var inst_22423 = (state_22441[(2)]);
var state_22441__$1 = state_22441;
var statearr_22451_22477 = state_22441__$1;
(statearr_22451_22477[(2)] = inst_22423);

(statearr_22451_22477[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22442 === (3))){
var inst_22439 = (state_22441[(2)]);
var state_22441__$1 = state_22441;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22441__$1,inst_22439);
} else {
if((state_val_22442 === (12))){
var inst_22400 = (state_22441[(9)]);
var inst_22414 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_22400,opts);
var state_22441__$1 = state_22441;
if(cljs.core.truth_(inst_22414)){
var statearr_22452_22478 = state_22441__$1;
(statearr_22452_22478[(1)] = (15));

} else {
var statearr_22453_22479 = state_22441__$1;
(statearr_22453_22479[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22442 === (2))){
var state_22441__$1 = state_22441;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22441__$1,(4),ch);
} else {
if((state_val_22442 === (11))){
var inst_22401 = (state_22441[(8)]);
var inst_22406 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22407 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_22401);
var inst_22408 = cljs.core.async.timeout.call(null,(1000));
var inst_22409 = [inst_22407,inst_22408];
var inst_22410 = (new cljs.core.PersistentVector(null,2,(5),inst_22406,inst_22409,null));
var state_22441__$1 = state_22441;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22441__$1,(14),inst_22410);
} else {
if((state_val_22442 === (9))){
var inst_22401 = (state_22441[(8)]);
var inst_22427 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_22428 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_22401);
var inst_22429 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_22428);
var inst_22430 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_22429)].join('');
var inst_22431 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_22430);
var state_22441__$1 = (function (){var statearr_22454 = state_22441;
(statearr_22454[(10)] = inst_22427);

return statearr_22454;
})();
var statearr_22455_22480 = state_22441__$1;
(statearr_22455_22480[(2)] = inst_22431);

(statearr_22455_22480[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22442 === (5))){
var inst_22394 = (state_22441[(7)]);
var inst_22396 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_22397 = (new cljs.core.PersistentArrayMap(null,2,inst_22396,null));
var inst_22398 = (new cljs.core.PersistentHashSet(null,inst_22397,null));
var inst_22399 = figwheel.client.focus_msgs.call(null,inst_22398,inst_22394);
var inst_22400 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_22399);
var inst_22401 = cljs.core.first.call(null,inst_22399);
var inst_22402 = figwheel.client.autoload_QMARK_.call(null);
var state_22441__$1 = (function (){var statearr_22456 = state_22441;
(statearr_22456[(8)] = inst_22401);

(statearr_22456[(9)] = inst_22400);

return statearr_22456;
})();
if(cljs.core.truth_(inst_22402)){
var statearr_22457_22481 = state_22441__$1;
(statearr_22457_22481[(1)] = (8));

} else {
var statearr_22458_22482 = state_22441__$1;
(statearr_22458_22482[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22442 === (14))){
var inst_22412 = (state_22441[(2)]);
var state_22441__$1 = state_22441;
var statearr_22459_22483 = state_22441__$1;
(statearr_22459_22483[(2)] = inst_22412);

(statearr_22459_22483[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22442 === (16))){
var state_22441__$1 = state_22441;
var statearr_22460_22484 = state_22441__$1;
(statearr_22460_22484[(2)] = null);

(statearr_22460_22484[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22442 === (10))){
var inst_22433 = (state_22441[(2)]);
var state_22441__$1 = (function (){var statearr_22461 = state_22441;
(statearr_22461[(11)] = inst_22433);

return statearr_22461;
})();
var statearr_22462_22485 = state_22441__$1;
(statearr_22462_22485[(2)] = null);

(statearr_22462_22485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22442 === (8))){
var inst_22400 = (state_22441[(9)]);
var inst_22404 = figwheel.client.reload_file_state_QMARK_.call(null,inst_22400,opts);
var state_22441__$1 = state_22441;
if(cljs.core.truth_(inst_22404)){
var statearr_22463_22486 = state_22441__$1;
(statearr_22463_22486[(1)] = (11));

} else {
var statearr_22464_22487 = state_22441__$1;
(statearr_22464_22487[(1)] = (12));

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
});})(c__12947__auto___22469,ch))
;
return ((function (switch__12857__auto__,c__12947__auto___22469,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__12858__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__12858__auto____0 = (function (){
var statearr_22465 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22465[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__12858__auto__);

(statearr_22465[(1)] = (1));

return statearr_22465;
});
var figwheel$client$file_reloader_plugin_$_state_machine__12858__auto____1 = (function (state_22441){
while(true){
var ret_value__12859__auto__ = (function (){try{while(true){
var result__12860__auto__ = switch__12857__auto__.call(null,state_22441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12860__auto__;
}
break;
}
}catch (e22466){if((e22466 instanceof Object)){
var ex__12861__auto__ = e22466;
var statearr_22467_22488 = state_22441;
(statearr_22467_22488[(5)] = ex__12861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22489 = state_22441;
state_22441 = G__22489;
continue;
} else {
return ret_value__12859__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__12858__auto__ = function(state_22441){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__12858__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__12858__auto____1.call(this,state_22441);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__12858__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__12858__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__12858__auto__;
})()
;})(switch__12857__auto__,c__12947__auto___22469,ch))
})();
var state__12949__auto__ = (function (){var statearr_22468 = f__12948__auto__.call(null);
(statearr_22468[(6)] = c__12947__auto___22469);

return statearr_22468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12949__auto__);
});})(c__12947__auto___22469,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__22490_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__22490_SHARP_));
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
var base_path_22492 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_22492){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e22491){if((e22491 instanceof Error)){
var e = e22491;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_22492], null));
} else {
var e = e22491;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_22492))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__22493){
var map__22494 = p__22493;
var map__22494__$1 = ((((!((map__22494 == null)))?((((map__22494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22494.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22494):map__22494);
var opts = map__22494__$1;
var build_id = cljs.core.get.call(null,map__22494__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__22494,map__22494__$1,opts,build_id){
return (function (p__22496){
var vec__22497 = p__22496;
var seq__22498 = cljs.core.seq.call(null,vec__22497);
var first__22499 = cljs.core.first.call(null,seq__22498);
var seq__22498__$1 = cljs.core.next.call(null,seq__22498);
var map__22500 = first__22499;
var map__22500__$1 = ((((!((map__22500 == null)))?((((map__22500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22500.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22500):map__22500);
var msg = map__22500__$1;
var msg_name = cljs.core.get.call(null,map__22500__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__22498__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__22497,seq__22498,first__22499,seq__22498__$1,map__22500,map__22500__$1,msg,msg_name,_,map__22494,map__22494__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__22497,seq__22498,first__22499,seq__22498__$1,map__22500,map__22500__$1,msg,msg_name,_,map__22494,map__22494__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__22494,map__22494__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__22502){
var vec__22503 = p__22502;
var seq__22504 = cljs.core.seq.call(null,vec__22503);
var first__22505 = cljs.core.first.call(null,seq__22504);
var seq__22504__$1 = cljs.core.next.call(null,seq__22504);
var map__22506 = first__22505;
var map__22506__$1 = ((((!((map__22506 == null)))?((((map__22506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22506.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22506):map__22506);
var msg = map__22506__$1;
var msg_name = cljs.core.get.call(null,map__22506__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__22504__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__22508){
var map__22509 = p__22508;
var map__22509__$1 = ((((!((map__22509 == null)))?((((map__22509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22509.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22509):map__22509);
var on_compile_warning = cljs.core.get.call(null,map__22509__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__22509__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__22509,map__22509__$1,on_compile_warning,on_compile_fail){
return (function (p__22511){
var vec__22512 = p__22511;
var seq__22513 = cljs.core.seq.call(null,vec__22512);
var first__22514 = cljs.core.first.call(null,seq__22513);
var seq__22513__$1 = cljs.core.next.call(null,seq__22513);
var map__22515 = first__22514;
var map__22515__$1 = ((((!((map__22515 == null)))?((((map__22515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22515.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22515):map__22515);
var msg = map__22515__$1;
var msg_name = cljs.core.get.call(null,map__22515__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__22513__$1;
var pred__22517 = cljs.core._EQ_;
var expr__22518 = msg_name;
if(cljs.core.truth_(pred__22517.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__22518))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__22517.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__22518))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__22509,map__22509__$1,on_compile_warning,on_compile_fail))
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
var c__12947__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12947__auto__,msg_hist,msg_names,msg){
return (function (){
var f__12948__auto__ = (function (){var switch__12857__auto__ = ((function (c__12947__auto__,msg_hist,msg_names,msg){
return (function (state_22607){
var state_val_22608 = (state_22607[(1)]);
if((state_val_22608 === (7))){
var inst_22527 = (state_22607[(2)]);
var state_22607__$1 = state_22607;
if(cljs.core.truth_(inst_22527)){
var statearr_22609_22656 = state_22607__$1;
(statearr_22609_22656[(1)] = (8));

} else {
var statearr_22610_22657 = state_22607__$1;
(statearr_22610_22657[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22608 === (20))){
var inst_22601 = (state_22607[(2)]);
var state_22607__$1 = state_22607;
var statearr_22611_22658 = state_22607__$1;
(statearr_22611_22658[(2)] = inst_22601);

(statearr_22611_22658[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22608 === (27))){
var inst_22597 = (state_22607[(2)]);
var state_22607__$1 = state_22607;
var statearr_22612_22659 = state_22607__$1;
(statearr_22612_22659[(2)] = inst_22597);

(statearr_22612_22659[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22608 === (1))){
var inst_22520 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_22607__$1 = state_22607;
if(cljs.core.truth_(inst_22520)){
var statearr_22613_22660 = state_22607__$1;
(statearr_22613_22660[(1)] = (2));

} else {
var statearr_22614_22661 = state_22607__$1;
(statearr_22614_22661[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22608 === (24))){
var inst_22599 = (state_22607[(2)]);
var state_22607__$1 = state_22607;
var statearr_22615_22662 = state_22607__$1;
(statearr_22615_22662[(2)] = inst_22599);

(statearr_22615_22662[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22608 === (4))){
var inst_22605 = (state_22607[(2)]);
var state_22607__$1 = state_22607;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22607__$1,inst_22605);
} else {
if((state_val_22608 === (15))){
var inst_22603 = (state_22607[(2)]);
var state_22607__$1 = state_22607;
var statearr_22616_22663 = state_22607__$1;
(statearr_22616_22663[(2)] = inst_22603);

(statearr_22616_22663[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22608 === (21))){
var inst_22556 = (state_22607[(2)]);
var inst_22557 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22558 = figwheel.client.auto_jump_to_error.call(null,opts,inst_22557);
var state_22607__$1 = (function (){var statearr_22617 = state_22607;
(statearr_22617[(7)] = inst_22556);

return statearr_22617;
})();
var statearr_22618_22664 = state_22607__$1;
(statearr_22618_22664[(2)] = inst_22558);

(statearr_22618_22664[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22608 === (31))){
var inst_22586 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_22607__$1 = state_22607;
if(cljs.core.truth_(inst_22586)){
var statearr_22619_22665 = state_22607__$1;
(statearr_22619_22665[(1)] = (34));

} else {
var statearr_22620_22666 = state_22607__$1;
(statearr_22620_22666[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22608 === (32))){
var inst_22595 = (state_22607[(2)]);
var state_22607__$1 = state_22607;
var statearr_22621_22667 = state_22607__$1;
(statearr_22621_22667[(2)] = inst_22595);

(statearr_22621_22667[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22608 === (33))){
var inst_22582 = (state_22607[(2)]);
var inst_22583 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22584 = figwheel.client.auto_jump_to_error.call(null,opts,inst_22583);
var state_22607__$1 = (function (){var statearr_22622 = state_22607;
(statearr_22622[(8)] = inst_22582);

return statearr_22622;
})();
var statearr_22623_22668 = state_22607__$1;
(statearr_22623_22668[(2)] = inst_22584);

(statearr_22623_22668[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22608 === (13))){
var inst_22541 = figwheel.client.heads_up.clear.call(null);
var state_22607__$1 = state_22607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22607__$1,(16),inst_22541);
} else {
if((state_val_22608 === (22))){
var inst_22562 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22563 = figwheel.client.heads_up.append_warning_message.call(null,inst_22562);
var state_22607__$1 = state_22607;
var statearr_22624_22669 = state_22607__$1;
(statearr_22624_22669[(2)] = inst_22563);

(statearr_22624_22669[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22608 === (36))){
var inst_22593 = (state_22607[(2)]);
var state_22607__$1 = state_22607;
var statearr_22625_22670 = state_22607__$1;
(statearr_22625_22670[(2)] = inst_22593);

(statearr_22625_22670[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22608 === (29))){
var inst_22573 = (state_22607[(2)]);
var inst_22574 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22575 = figwheel.client.auto_jump_to_error.call(null,opts,inst_22574);
var state_22607__$1 = (function (){var statearr_22626 = state_22607;
(statearr_22626[(9)] = inst_22573);

return statearr_22626;
})();
var statearr_22627_22671 = state_22607__$1;
(statearr_22627_22671[(2)] = inst_22575);

(statearr_22627_22671[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22608 === (6))){
var inst_22522 = (state_22607[(10)]);
var state_22607__$1 = state_22607;
var statearr_22628_22672 = state_22607__$1;
(statearr_22628_22672[(2)] = inst_22522);

(statearr_22628_22672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22608 === (28))){
var inst_22569 = (state_22607[(2)]);
var inst_22570 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22571 = figwheel.client.heads_up.display_warning.call(null,inst_22570);
var state_22607__$1 = (function (){var statearr_22629 = state_22607;
(statearr_22629[(11)] = inst_22569);

return statearr_22629;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22607__$1,(29),inst_22571);
} else {
if((state_val_22608 === (25))){
var inst_22567 = figwheel.client.heads_up.clear.call(null);
var state_22607__$1 = state_22607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22607__$1,(28),inst_22567);
} else {
if((state_val_22608 === (34))){
var inst_22588 = figwheel.client.heads_up.flash_loaded.call(null);
var state_22607__$1 = state_22607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22607__$1,(37),inst_22588);
} else {
if((state_val_22608 === (17))){
var inst_22547 = (state_22607[(2)]);
var inst_22548 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22549 = figwheel.client.auto_jump_to_error.call(null,opts,inst_22548);
var state_22607__$1 = (function (){var statearr_22630 = state_22607;
(statearr_22630[(12)] = inst_22547);

return statearr_22630;
})();
var statearr_22631_22673 = state_22607__$1;
(statearr_22631_22673[(2)] = inst_22549);

(statearr_22631_22673[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22608 === (3))){
var inst_22539 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_22607__$1 = state_22607;
if(cljs.core.truth_(inst_22539)){
var statearr_22632_22674 = state_22607__$1;
(statearr_22632_22674[(1)] = (13));

} else {
var statearr_22633_22675 = state_22607__$1;
(statearr_22633_22675[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22608 === (12))){
var inst_22535 = (state_22607[(2)]);
var state_22607__$1 = state_22607;
var statearr_22634_22676 = state_22607__$1;
(statearr_22634_22676[(2)] = inst_22535);

(statearr_22634_22676[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22608 === (2))){
var inst_22522 = (state_22607[(10)]);
var inst_22522__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_22607__$1 = (function (){var statearr_22635 = state_22607;
(statearr_22635[(10)] = inst_22522__$1);

return statearr_22635;
})();
if(cljs.core.truth_(inst_22522__$1)){
var statearr_22636_22677 = state_22607__$1;
(statearr_22636_22677[(1)] = (5));

} else {
var statearr_22637_22678 = state_22607__$1;
(statearr_22637_22678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22608 === (23))){
var inst_22565 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_22607__$1 = state_22607;
if(cljs.core.truth_(inst_22565)){
var statearr_22638_22679 = state_22607__$1;
(statearr_22638_22679[(1)] = (25));

} else {
var statearr_22639_22680 = state_22607__$1;
(statearr_22639_22680[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22608 === (35))){
var state_22607__$1 = state_22607;
var statearr_22640_22681 = state_22607__$1;
(statearr_22640_22681[(2)] = null);

(statearr_22640_22681[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22608 === (19))){
var inst_22560 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_22607__$1 = state_22607;
if(cljs.core.truth_(inst_22560)){
var statearr_22641_22682 = state_22607__$1;
(statearr_22641_22682[(1)] = (22));

} else {
var statearr_22642_22683 = state_22607__$1;
(statearr_22642_22683[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22608 === (11))){
var inst_22531 = (state_22607[(2)]);
var state_22607__$1 = state_22607;
var statearr_22643_22684 = state_22607__$1;
(statearr_22643_22684[(2)] = inst_22531);

(statearr_22643_22684[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22608 === (9))){
var inst_22533 = figwheel.client.heads_up.clear.call(null);
var state_22607__$1 = state_22607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22607__$1,(12),inst_22533);
} else {
if((state_val_22608 === (5))){
var inst_22524 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_22607__$1 = state_22607;
var statearr_22644_22685 = state_22607__$1;
(statearr_22644_22685[(2)] = inst_22524);

(statearr_22644_22685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22608 === (14))){
var inst_22551 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_22607__$1 = state_22607;
if(cljs.core.truth_(inst_22551)){
var statearr_22645_22686 = state_22607__$1;
(statearr_22645_22686[(1)] = (18));

} else {
var statearr_22646_22687 = state_22607__$1;
(statearr_22646_22687[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22608 === (26))){
var inst_22577 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_22607__$1 = state_22607;
if(cljs.core.truth_(inst_22577)){
var statearr_22647_22688 = state_22607__$1;
(statearr_22647_22688[(1)] = (30));

} else {
var statearr_22648_22689 = state_22607__$1;
(statearr_22648_22689[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22608 === (16))){
var inst_22543 = (state_22607[(2)]);
var inst_22544 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22545 = figwheel.client.heads_up.display_exception.call(null,inst_22544);
var state_22607__$1 = (function (){var statearr_22649 = state_22607;
(statearr_22649[(13)] = inst_22543);

return statearr_22649;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22607__$1,(17),inst_22545);
} else {
if((state_val_22608 === (30))){
var inst_22579 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22580 = figwheel.client.heads_up.display_warning.call(null,inst_22579);
var state_22607__$1 = state_22607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22607__$1,(33),inst_22580);
} else {
if((state_val_22608 === (10))){
var inst_22537 = (state_22607[(2)]);
var state_22607__$1 = state_22607;
var statearr_22650_22690 = state_22607__$1;
(statearr_22650_22690[(2)] = inst_22537);

(statearr_22650_22690[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22608 === (18))){
var inst_22553 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22554 = figwheel.client.heads_up.display_exception.call(null,inst_22553);
var state_22607__$1 = state_22607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22607__$1,(21),inst_22554);
} else {
if((state_val_22608 === (37))){
var inst_22590 = (state_22607[(2)]);
var state_22607__$1 = state_22607;
var statearr_22651_22691 = state_22607__$1;
(statearr_22651_22691[(2)] = inst_22590);

(statearr_22651_22691[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22608 === (8))){
var inst_22529 = figwheel.client.heads_up.flash_loaded.call(null);
var state_22607__$1 = state_22607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22607__$1,(11),inst_22529);
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
});})(c__12947__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__12857__auto__,c__12947__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__12858__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__12858__auto____0 = (function (){
var statearr_22652 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22652[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__12858__auto__);

(statearr_22652[(1)] = (1));

return statearr_22652;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__12858__auto____1 = (function (state_22607){
while(true){
var ret_value__12859__auto__ = (function (){try{while(true){
var result__12860__auto__ = switch__12857__auto__.call(null,state_22607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12860__auto__;
}
break;
}
}catch (e22653){if((e22653 instanceof Object)){
var ex__12861__auto__ = e22653;
var statearr_22654_22692 = state_22607;
(statearr_22654_22692[(5)] = ex__12861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22693 = state_22607;
state_22607 = G__22693;
continue;
} else {
return ret_value__12859__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__12858__auto__ = function(state_22607){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__12858__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__12858__auto____1.call(this,state_22607);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__12858__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__12858__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__12858__auto__;
})()
;})(switch__12857__auto__,c__12947__auto__,msg_hist,msg_names,msg))
})();
var state__12949__auto__ = (function (){var statearr_22655 = f__12948__auto__.call(null);
(statearr_22655[(6)] = c__12947__auto__);

return statearr_22655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12949__auto__);
});})(c__12947__auto__,msg_hist,msg_names,msg))
);

return c__12947__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__12947__auto___22722 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12947__auto___22722,ch){
return (function (){
var f__12948__auto__ = (function (){var switch__12857__auto__ = ((function (c__12947__auto___22722,ch){
return (function (state_22708){
var state_val_22709 = (state_22708[(1)]);
if((state_val_22709 === (1))){
var state_22708__$1 = state_22708;
var statearr_22710_22723 = state_22708__$1;
(statearr_22710_22723[(2)] = null);

(statearr_22710_22723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22709 === (2))){
var state_22708__$1 = state_22708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22708__$1,(4),ch);
} else {
if((state_val_22709 === (3))){
var inst_22706 = (state_22708[(2)]);
var state_22708__$1 = state_22708;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22708__$1,inst_22706);
} else {
if((state_val_22709 === (4))){
var inst_22696 = (state_22708[(7)]);
var inst_22696__$1 = (state_22708[(2)]);
var state_22708__$1 = (function (){var statearr_22711 = state_22708;
(statearr_22711[(7)] = inst_22696__$1);

return statearr_22711;
})();
if(cljs.core.truth_(inst_22696__$1)){
var statearr_22712_22724 = state_22708__$1;
(statearr_22712_22724[(1)] = (5));

} else {
var statearr_22713_22725 = state_22708__$1;
(statearr_22713_22725[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22709 === (5))){
var inst_22696 = (state_22708[(7)]);
var inst_22698 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_22696);
var state_22708__$1 = state_22708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22708__$1,(8),inst_22698);
} else {
if((state_val_22709 === (6))){
var state_22708__$1 = state_22708;
var statearr_22714_22726 = state_22708__$1;
(statearr_22714_22726[(2)] = null);

(statearr_22714_22726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22709 === (7))){
var inst_22704 = (state_22708[(2)]);
var state_22708__$1 = state_22708;
var statearr_22715_22727 = state_22708__$1;
(statearr_22715_22727[(2)] = inst_22704);

(statearr_22715_22727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22709 === (8))){
var inst_22700 = (state_22708[(2)]);
var state_22708__$1 = (function (){var statearr_22716 = state_22708;
(statearr_22716[(8)] = inst_22700);

return statearr_22716;
})();
var statearr_22717_22728 = state_22708__$1;
(statearr_22717_22728[(2)] = null);

(statearr_22717_22728[(1)] = (2));


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
});})(c__12947__auto___22722,ch))
;
return ((function (switch__12857__auto__,c__12947__auto___22722,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__12858__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__12858__auto____0 = (function (){
var statearr_22718 = [null,null,null,null,null,null,null,null,null];
(statearr_22718[(0)] = figwheel$client$heads_up_plugin_$_state_machine__12858__auto__);

(statearr_22718[(1)] = (1));

return statearr_22718;
});
var figwheel$client$heads_up_plugin_$_state_machine__12858__auto____1 = (function (state_22708){
while(true){
var ret_value__12859__auto__ = (function (){try{while(true){
var result__12860__auto__ = switch__12857__auto__.call(null,state_22708);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12860__auto__;
}
break;
}
}catch (e22719){if((e22719 instanceof Object)){
var ex__12861__auto__ = e22719;
var statearr_22720_22729 = state_22708;
(statearr_22720_22729[(5)] = ex__12861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22708);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22730 = state_22708;
state_22708 = G__22730;
continue;
} else {
return ret_value__12859__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__12858__auto__ = function(state_22708){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__12858__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__12858__auto____1.call(this,state_22708);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__12858__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__12858__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__12858__auto__;
})()
;})(switch__12857__auto__,c__12947__auto___22722,ch))
})();
var state__12949__auto__ = (function (){var statearr_22721 = f__12948__auto__.call(null);
(statearr_22721[(6)] = c__12947__auto___22722);

return statearr_22721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12949__auto__);
});})(c__12947__auto___22722,ch))
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
var c__12947__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12947__auto__){
return (function (){
var f__12948__auto__ = (function (){var switch__12857__auto__ = ((function (c__12947__auto__){
return (function (state_22736){
var state_val_22737 = (state_22736[(1)]);
if((state_val_22737 === (1))){
var inst_22731 = cljs.core.async.timeout.call(null,(3000));
var state_22736__$1 = state_22736;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22736__$1,(2),inst_22731);
} else {
if((state_val_22737 === (2))){
var inst_22733 = (state_22736[(2)]);
var inst_22734 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_22736__$1 = (function (){var statearr_22738 = state_22736;
(statearr_22738[(7)] = inst_22733);

return statearr_22738;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22736__$1,inst_22734);
} else {
return null;
}
}
});})(c__12947__auto__))
;
return ((function (switch__12857__auto__,c__12947__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__12858__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__12858__auto____0 = (function (){
var statearr_22739 = [null,null,null,null,null,null,null,null];
(statearr_22739[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__12858__auto__);

(statearr_22739[(1)] = (1));

return statearr_22739;
});
var figwheel$client$enforce_project_plugin_$_state_machine__12858__auto____1 = (function (state_22736){
while(true){
var ret_value__12859__auto__ = (function (){try{while(true){
var result__12860__auto__ = switch__12857__auto__.call(null,state_22736);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12860__auto__;
}
break;
}
}catch (e22740){if((e22740 instanceof Object)){
var ex__12861__auto__ = e22740;
var statearr_22741_22743 = state_22736;
(statearr_22741_22743[(5)] = ex__12861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22744 = state_22736;
state_22736 = G__22744;
continue;
} else {
return ret_value__12859__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__12858__auto__ = function(state_22736){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__12858__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__12858__auto____1.call(this,state_22736);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__12858__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__12858__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__12858__auto__;
})()
;})(switch__12857__auto__,c__12947__auto__))
})();
var state__12949__auto__ = (function (){var statearr_22742 = f__12948__auto__.call(null);
(statearr_22742[(6)] = c__12947__auto__);

return statearr_22742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12949__auto__);
});})(c__12947__auto__))
);

return c__12947__auto__;
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
var c__12947__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12947__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__12948__auto__ = (function (){var switch__12857__auto__ = ((function (c__12947__auto__,figwheel_version,temp__5457__auto__){
return (function (state_22751){
var state_val_22752 = (state_22751[(1)]);
if((state_val_22752 === (1))){
var inst_22745 = cljs.core.async.timeout.call(null,(2000));
var state_22751__$1 = state_22751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22751__$1,(2),inst_22745);
} else {
if((state_val_22752 === (2))){
var inst_22747 = (state_22751[(2)]);
var inst_22748 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_22749 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_22748);
var state_22751__$1 = (function (){var statearr_22753 = state_22751;
(statearr_22753[(7)] = inst_22747);

return statearr_22753;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22751__$1,inst_22749);
} else {
return null;
}
}
});})(c__12947__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__12857__auto__,c__12947__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__12858__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__12858__auto____0 = (function (){
var statearr_22754 = [null,null,null,null,null,null,null,null];
(statearr_22754[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__12858__auto__);

(statearr_22754[(1)] = (1));

return statearr_22754;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__12858__auto____1 = (function (state_22751){
while(true){
var ret_value__12859__auto__ = (function (){try{while(true){
var result__12860__auto__ = switch__12857__auto__.call(null,state_22751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12860__auto__;
}
break;
}
}catch (e22755){if((e22755 instanceof Object)){
var ex__12861__auto__ = e22755;
var statearr_22756_22758 = state_22751;
(statearr_22756_22758[(5)] = ex__12861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22759 = state_22751;
state_22751 = G__22759;
continue;
} else {
return ret_value__12859__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__12858__auto__ = function(state_22751){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__12858__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__12858__auto____1.call(this,state_22751);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__12858__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__12858__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__12858__auto__;
})()
;})(switch__12857__auto__,c__12947__auto__,figwheel_version,temp__5457__auto__))
})();
var state__12949__auto__ = (function (){var statearr_22757 = f__12948__auto__.call(null);
(statearr_22757[(6)] = c__12947__auto__);

return statearr_22757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12949__auto__);
});})(c__12947__auto__,figwheel_version,temp__5457__auto__))
);

return c__12947__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__22760){
var map__22761 = p__22760;
var map__22761__$1 = ((((!((map__22761 == null)))?((((map__22761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22761.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22761):map__22761);
var file = cljs.core.get.call(null,map__22761__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__22761__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__22761__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__22763 = "";
var G__22763__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22763),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__22763);
var G__22763__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22763__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__22763__$1);
if(cljs.core.truth_((function (){var and__8347__auto__ = line;
if(cljs.core.truth_(and__8347__auto__)){
return column;
} else {
return and__8347__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22763__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__22763__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__22764){
var map__22765 = p__22764;
var map__22765__$1 = ((((!((map__22765 == null)))?((((map__22765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22765.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22765):map__22765);
var ed = map__22765__$1;
var formatted_exception = cljs.core.get.call(null,map__22765__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__22765__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__22765__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__22767_22771 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__22768_22772 = null;
var count__22769_22773 = (0);
var i__22770_22774 = (0);
while(true){
if((i__22770_22774 < count__22769_22773)){
var msg_22775 = cljs.core._nth.call(null,chunk__22768_22772,i__22770_22774);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_22775);

var G__22776 = seq__22767_22771;
var G__22777 = chunk__22768_22772;
var G__22778 = count__22769_22773;
var G__22779 = (i__22770_22774 + (1));
seq__22767_22771 = G__22776;
chunk__22768_22772 = G__22777;
count__22769_22773 = G__22778;
i__22770_22774 = G__22779;
continue;
} else {
var temp__5457__auto___22780 = cljs.core.seq.call(null,seq__22767_22771);
if(temp__5457__auto___22780){
var seq__22767_22781__$1 = temp__5457__auto___22780;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22767_22781__$1)){
var c__9290__auto___22782 = cljs.core.chunk_first.call(null,seq__22767_22781__$1);
var G__22783 = cljs.core.chunk_rest.call(null,seq__22767_22781__$1);
var G__22784 = c__9290__auto___22782;
var G__22785 = cljs.core.count.call(null,c__9290__auto___22782);
var G__22786 = (0);
seq__22767_22771 = G__22783;
chunk__22768_22772 = G__22784;
count__22769_22773 = G__22785;
i__22770_22774 = G__22786;
continue;
} else {
var msg_22787 = cljs.core.first.call(null,seq__22767_22781__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_22787);

var G__22788 = cljs.core.next.call(null,seq__22767_22781__$1);
var G__22789 = null;
var G__22790 = (0);
var G__22791 = (0);
seq__22767_22771 = G__22788;
chunk__22768_22772 = G__22789;
count__22769_22773 = G__22790;
i__22770_22774 = G__22791;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__22792){
var map__22793 = p__22792;
var map__22793__$1 = ((((!((map__22793 == null)))?((((map__22793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22793.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22793):map__22793);
var w = map__22793__$1;
var message = cljs.core.get.call(null,map__22793__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__8347__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__8347__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__8347__auto__;
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
var seq__22795 = cljs.core.seq.call(null,plugins);
var chunk__22796 = null;
var count__22797 = (0);
var i__22798 = (0);
while(true){
if((i__22798 < count__22797)){
var vec__22799 = cljs.core._nth.call(null,chunk__22796,i__22798);
var k = cljs.core.nth.call(null,vec__22799,(0),null);
var plugin = cljs.core.nth.call(null,vec__22799,(1),null);
if(cljs.core.truth_(plugin)){
var pl_22805 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__22795,chunk__22796,count__22797,i__22798,pl_22805,vec__22799,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_22805.call(null,msg_hist);
});})(seq__22795,chunk__22796,count__22797,i__22798,pl_22805,vec__22799,k,plugin))
);
} else {
}

var G__22806 = seq__22795;
var G__22807 = chunk__22796;
var G__22808 = count__22797;
var G__22809 = (i__22798 + (1));
seq__22795 = G__22806;
chunk__22796 = G__22807;
count__22797 = G__22808;
i__22798 = G__22809;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__22795);
if(temp__5457__auto__){
var seq__22795__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22795__$1)){
var c__9290__auto__ = cljs.core.chunk_first.call(null,seq__22795__$1);
var G__22810 = cljs.core.chunk_rest.call(null,seq__22795__$1);
var G__22811 = c__9290__auto__;
var G__22812 = cljs.core.count.call(null,c__9290__auto__);
var G__22813 = (0);
seq__22795 = G__22810;
chunk__22796 = G__22811;
count__22797 = G__22812;
i__22798 = G__22813;
continue;
} else {
var vec__22802 = cljs.core.first.call(null,seq__22795__$1);
var k = cljs.core.nth.call(null,vec__22802,(0),null);
var plugin = cljs.core.nth.call(null,vec__22802,(1),null);
if(cljs.core.truth_(plugin)){
var pl_22814 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__22795,chunk__22796,count__22797,i__22798,pl_22814,vec__22802,k,plugin,seq__22795__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_22814.call(null,msg_hist);
});})(seq__22795,chunk__22796,count__22797,i__22798,pl_22814,vec__22802,k,plugin,seq__22795__$1,temp__5457__auto__))
);
} else {
}

var G__22815 = cljs.core.next.call(null,seq__22795__$1);
var G__22816 = null;
var G__22817 = (0);
var G__22818 = (0);
seq__22795 = G__22815;
chunk__22796 = G__22816;
count__22797 = G__22817;
i__22798 = G__22818;
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
var G__22820 = arguments.length;
switch (G__22820) {
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

var seq__22821_22826 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__22822_22827 = null;
var count__22823_22828 = (0);
var i__22824_22829 = (0);
while(true){
if((i__22824_22829 < count__22823_22828)){
var msg_22830 = cljs.core._nth.call(null,chunk__22822_22827,i__22824_22829);
figwheel.client.socket.handle_incoming_message.call(null,msg_22830);

var G__22831 = seq__22821_22826;
var G__22832 = chunk__22822_22827;
var G__22833 = count__22823_22828;
var G__22834 = (i__22824_22829 + (1));
seq__22821_22826 = G__22831;
chunk__22822_22827 = G__22832;
count__22823_22828 = G__22833;
i__22824_22829 = G__22834;
continue;
} else {
var temp__5457__auto___22835 = cljs.core.seq.call(null,seq__22821_22826);
if(temp__5457__auto___22835){
var seq__22821_22836__$1 = temp__5457__auto___22835;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22821_22836__$1)){
var c__9290__auto___22837 = cljs.core.chunk_first.call(null,seq__22821_22836__$1);
var G__22838 = cljs.core.chunk_rest.call(null,seq__22821_22836__$1);
var G__22839 = c__9290__auto___22837;
var G__22840 = cljs.core.count.call(null,c__9290__auto___22837);
var G__22841 = (0);
seq__22821_22826 = G__22838;
chunk__22822_22827 = G__22839;
count__22823_22828 = G__22840;
i__22824_22829 = G__22841;
continue;
} else {
var msg_22842 = cljs.core.first.call(null,seq__22821_22836__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_22842);

var G__22843 = cljs.core.next.call(null,seq__22821_22836__$1);
var G__22844 = null;
var G__22845 = (0);
var G__22846 = (0);
seq__22821_22826 = G__22843;
chunk__22822_22827 = G__22844;
count__22823_22828 = G__22845;
i__22824_22829 = G__22846;
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
var args__9643__auto__ = [];
var len__9636__auto___22851 = arguments.length;
var i__9637__auto___22852 = (0);
while(true){
if((i__9637__auto___22852 < len__9636__auto___22851)){
args__9643__auto__.push((arguments[i__9637__auto___22852]));

var G__22853 = (i__9637__auto___22852 + (1));
i__9637__auto___22852 = G__22853;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__22848){
var map__22849 = p__22848;
var map__22849__$1 = ((((!((map__22849 == null)))?((((map__22849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22849.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22849):map__22849);
var opts = map__22849__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq22847){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22847));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e22854){if((e22854 instanceof Error)){
var e = e22854;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e22854;

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
return (function (p__22855){
var map__22856 = p__22855;
var map__22856__$1 = ((((!((map__22856 == null)))?((((map__22856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22856.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22856):map__22856);
var msg_name = cljs.core.get.call(null,map__22856__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1521112600855
