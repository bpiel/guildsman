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
}catch (e24679){if((e24679 instanceof Error)){
var e = e24679;
return "Error: Unable to stringify";
} else {
throw e24679;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__24682 = arguments.length;
switch (G__24682) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__24680_SHARP_){
if(typeof p1__24680_SHARP_ === 'string'){
return p1__24680_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__24680_SHARP_);
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
var args__11094__auto__ = [];
var len__11087__auto___24685 = arguments.length;
var i__11088__auto___24686 = (0);
while(true){
if((i__11088__auto___24686 < len__11087__auto___24685)){
args__11094__auto__.push((arguments[i__11088__auto___24686]));

var G__24687 = (i__11088__auto___24686 + (1));
i__11088__auto___24686 = G__24687;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((0) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__11095__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq24684){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24684));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__11094__auto__ = [];
var len__11087__auto___24689 = arguments.length;
var i__11088__auto___24690 = (0);
while(true){
if((i__11088__auto___24690 < len__11087__auto___24689)){
args__11094__auto__.push((arguments[i__11088__auto___24690]));

var G__24691 = (i__11088__auto___24690 + (1));
i__11088__auto___24690 = G__24691;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((0) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__11095__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq24688){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24688));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__24692){
var map__24693 = p__24692;
var map__24693__$1 = ((((!((map__24693 == null)))?((((map__24693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24693.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24693):map__24693);
var message = cljs.core.get.call(null,map__24693__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__24693__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__9810__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__9810__auto__)){
return or__9810__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__9798__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__9798__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__9798__auto__;
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
var c__15288__auto___24772 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15288__auto___24772,ch){
return (function (){
var f__15289__auto__ = (function (){var switch__15198__auto__ = ((function (c__15288__auto___24772,ch){
return (function (state_24744){
var state_val_24745 = (state_24744[(1)]);
if((state_val_24745 === (7))){
var inst_24740 = (state_24744[(2)]);
var state_24744__$1 = state_24744;
var statearr_24746_24773 = state_24744__$1;
(statearr_24746_24773[(2)] = inst_24740);

(statearr_24746_24773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24745 === (1))){
var state_24744__$1 = state_24744;
var statearr_24747_24774 = state_24744__$1;
(statearr_24747_24774[(2)] = null);

(statearr_24747_24774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24745 === (4))){
var inst_24697 = (state_24744[(7)]);
var inst_24697__$1 = (state_24744[(2)]);
var state_24744__$1 = (function (){var statearr_24748 = state_24744;
(statearr_24748[(7)] = inst_24697__$1);

return statearr_24748;
})();
if(cljs.core.truth_(inst_24697__$1)){
var statearr_24749_24775 = state_24744__$1;
(statearr_24749_24775[(1)] = (5));

} else {
var statearr_24750_24776 = state_24744__$1;
(statearr_24750_24776[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24745 === (15))){
var inst_24704 = (state_24744[(8)]);
var inst_24719 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24704);
var inst_24720 = cljs.core.first.call(null,inst_24719);
var inst_24721 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_24720);
var inst_24722 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_24721)].join('');
var inst_24723 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_24722);
var state_24744__$1 = state_24744;
var statearr_24751_24777 = state_24744__$1;
(statearr_24751_24777[(2)] = inst_24723);

(statearr_24751_24777[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24745 === (13))){
var inst_24728 = (state_24744[(2)]);
var state_24744__$1 = state_24744;
var statearr_24752_24778 = state_24744__$1;
(statearr_24752_24778[(2)] = inst_24728);

(statearr_24752_24778[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24745 === (6))){
var state_24744__$1 = state_24744;
var statearr_24753_24779 = state_24744__$1;
(statearr_24753_24779[(2)] = null);

(statearr_24753_24779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24745 === (17))){
var inst_24726 = (state_24744[(2)]);
var state_24744__$1 = state_24744;
var statearr_24754_24780 = state_24744__$1;
(statearr_24754_24780[(2)] = inst_24726);

(statearr_24754_24780[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24745 === (3))){
var inst_24742 = (state_24744[(2)]);
var state_24744__$1 = state_24744;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24744__$1,inst_24742);
} else {
if((state_val_24745 === (12))){
var inst_24703 = (state_24744[(9)]);
var inst_24717 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_24703,opts);
var state_24744__$1 = state_24744;
if(cljs.core.truth_(inst_24717)){
var statearr_24755_24781 = state_24744__$1;
(statearr_24755_24781[(1)] = (15));

} else {
var statearr_24756_24782 = state_24744__$1;
(statearr_24756_24782[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24745 === (2))){
var state_24744__$1 = state_24744;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24744__$1,(4),ch);
} else {
if((state_val_24745 === (11))){
var inst_24704 = (state_24744[(8)]);
var inst_24709 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24710 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_24704);
var inst_24711 = cljs.core.async.timeout.call(null,(1000));
var inst_24712 = [inst_24710,inst_24711];
var inst_24713 = (new cljs.core.PersistentVector(null,2,(5),inst_24709,inst_24712,null));
var state_24744__$1 = state_24744;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24744__$1,(14),inst_24713);
} else {
if((state_val_24745 === (9))){
var inst_24704 = (state_24744[(8)]);
var inst_24730 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_24731 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24704);
var inst_24732 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24731);
var inst_24733 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_24732)].join('');
var inst_24734 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_24733);
var state_24744__$1 = (function (){var statearr_24757 = state_24744;
(statearr_24757[(10)] = inst_24730);

return statearr_24757;
})();
var statearr_24758_24783 = state_24744__$1;
(statearr_24758_24783[(2)] = inst_24734);

(statearr_24758_24783[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24745 === (5))){
var inst_24697 = (state_24744[(7)]);
var inst_24699 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_24700 = (new cljs.core.PersistentArrayMap(null,2,inst_24699,null));
var inst_24701 = (new cljs.core.PersistentHashSet(null,inst_24700,null));
var inst_24702 = figwheel.client.focus_msgs.call(null,inst_24701,inst_24697);
var inst_24703 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_24702);
var inst_24704 = cljs.core.first.call(null,inst_24702);
var inst_24705 = figwheel.client.autoload_QMARK_.call(null);
var state_24744__$1 = (function (){var statearr_24759 = state_24744;
(statearr_24759[(8)] = inst_24704);

(statearr_24759[(9)] = inst_24703);

return statearr_24759;
})();
if(cljs.core.truth_(inst_24705)){
var statearr_24760_24784 = state_24744__$1;
(statearr_24760_24784[(1)] = (8));

} else {
var statearr_24761_24785 = state_24744__$1;
(statearr_24761_24785[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24745 === (14))){
var inst_24715 = (state_24744[(2)]);
var state_24744__$1 = state_24744;
var statearr_24762_24786 = state_24744__$1;
(statearr_24762_24786[(2)] = inst_24715);

(statearr_24762_24786[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24745 === (16))){
var state_24744__$1 = state_24744;
var statearr_24763_24787 = state_24744__$1;
(statearr_24763_24787[(2)] = null);

(statearr_24763_24787[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24745 === (10))){
var inst_24736 = (state_24744[(2)]);
var state_24744__$1 = (function (){var statearr_24764 = state_24744;
(statearr_24764[(11)] = inst_24736);

return statearr_24764;
})();
var statearr_24765_24788 = state_24744__$1;
(statearr_24765_24788[(2)] = null);

(statearr_24765_24788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24745 === (8))){
var inst_24703 = (state_24744[(9)]);
var inst_24707 = figwheel.client.reload_file_state_QMARK_.call(null,inst_24703,opts);
var state_24744__$1 = state_24744;
if(cljs.core.truth_(inst_24707)){
var statearr_24766_24789 = state_24744__$1;
(statearr_24766_24789[(1)] = (11));

} else {
var statearr_24767_24790 = state_24744__$1;
(statearr_24767_24790[(1)] = (12));

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
});})(c__15288__auto___24772,ch))
;
return ((function (switch__15198__auto__,c__15288__auto___24772,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__15199__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__15199__auto____0 = (function (){
var statearr_24768 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24768[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__15199__auto__);

(statearr_24768[(1)] = (1));

return statearr_24768;
});
var figwheel$client$file_reloader_plugin_$_state_machine__15199__auto____1 = (function (state_24744){
while(true){
var ret_value__15200__auto__ = (function (){try{while(true){
var result__15201__auto__ = switch__15198__auto__.call(null,state_24744);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15201__auto__;
}
break;
}
}catch (e24769){if((e24769 instanceof Object)){
var ex__15202__auto__ = e24769;
var statearr_24770_24791 = state_24744;
(statearr_24770_24791[(5)] = ex__15202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24744);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24792 = state_24744;
state_24744 = G__24792;
continue;
} else {
return ret_value__15200__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__15199__auto__ = function(state_24744){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__15199__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__15199__auto____1.call(this,state_24744);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__15199__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__15199__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__15199__auto__;
})()
;})(switch__15198__auto__,c__15288__auto___24772,ch))
})();
var state__15290__auto__ = (function (){var statearr_24771 = f__15289__auto__.call(null);
(statearr_24771[(6)] = c__15288__auto___24772);

return statearr_24771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15290__auto__);
});})(c__15288__auto___24772,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__24793_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__24793_SHARP_));
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
var base_path_24795 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_24795){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e24794){if((e24794 instanceof Error)){
var e = e24794;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_24795], null));
} else {
var e = e24794;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_24795))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__24796){
var map__24797 = p__24796;
var map__24797__$1 = ((((!((map__24797 == null)))?((((map__24797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24797.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24797):map__24797);
var opts = map__24797__$1;
var build_id = cljs.core.get.call(null,map__24797__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__24797,map__24797__$1,opts,build_id){
return (function (p__24799){
var vec__24800 = p__24799;
var seq__24801 = cljs.core.seq.call(null,vec__24800);
var first__24802 = cljs.core.first.call(null,seq__24801);
var seq__24801__$1 = cljs.core.next.call(null,seq__24801);
var map__24803 = first__24802;
var map__24803__$1 = ((((!((map__24803 == null)))?((((map__24803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24803.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24803):map__24803);
var msg = map__24803__$1;
var msg_name = cljs.core.get.call(null,map__24803__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__24801__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__24800,seq__24801,first__24802,seq__24801__$1,map__24803,map__24803__$1,msg,msg_name,_,map__24797,map__24797__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__24800,seq__24801,first__24802,seq__24801__$1,map__24803,map__24803__$1,msg,msg_name,_,map__24797,map__24797__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__24797,map__24797__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__24805){
var vec__24806 = p__24805;
var seq__24807 = cljs.core.seq.call(null,vec__24806);
var first__24808 = cljs.core.first.call(null,seq__24807);
var seq__24807__$1 = cljs.core.next.call(null,seq__24807);
var map__24809 = first__24808;
var map__24809__$1 = ((((!((map__24809 == null)))?((((map__24809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24809.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24809):map__24809);
var msg = map__24809__$1;
var msg_name = cljs.core.get.call(null,map__24809__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__24807__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__24811){
var map__24812 = p__24811;
var map__24812__$1 = ((((!((map__24812 == null)))?((((map__24812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24812.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24812):map__24812);
var on_compile_warning = cljs.core.get.call(null,map__24812__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__24812__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__24812,map__24812__$1,on_compile_warning,on_compile_fail){
return (function (p__24814){
var vec__24815 = p__24814;
var seq__24816 = cljs.core.seq.call(null,vec__24815);
var first__24817 = cljs.core.first.call(null,seq__24816);
var seq__24816__$1 = cljs.core.next.call(null,seq__24816);
var map__24818 = first__24817;
var map__24818__$1 = ((((!((map__24818 == null)))?((((map__24818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24818.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24818):map__24818);
var msg = map__24818__$1;
var msg_name = cljs.core.get.call(null,map__24818__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__24816__$1;
var pred__24820 = cljs.core._EQ_;
var expr__24821 = msg_name;
if(cljs.core.truth_(pred__24820.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__24821))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__24820.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__24821))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__24812,map__24812__$1,on_compile_warning,on_compile_fail))
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
var c__15288__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15288__auto__,msg_hist,msg_names,msg){
return (function (){
var f__15289__auto__ = (function (){var switch__15198__auto__ = ((function (c__15288__auto__,msg_hist,msg_names,msg){
return (function (state_24910){
var state_val_24911 = (state_24910[(1)]);
if((state_val_24911 === (7))){
var inst_24830 = (state_24910[(2)]);
var state_24910__$1 = state_24910;
if(cljs.core.truth_(inst_24830)){
var statearr_24912_24959 = state_24910__$1;
(statearr_24912_24959[(1)] = (8));

} else {
var statearr_24913_24960 = state_24910__$1;
(statearr_24913_24960[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24911 === (20))){
var inst_24904 = (state_24910[(2)]);
var state_24910__$1 = state_24910;
var statearr_24914_24961 = state_24910__$1;
(statearr_24914_24961[(2)] = inst_24904);

(statearr_24914_24961[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24911 === (27))){
var inst_24900 = (state_24910[(2)]);
var state_24910__$1 = state_24910;
var statearr_24915_24962 = state_24910__$1;
(statearr_24915_24962[(2)] = inst_24900);

(statearr_24915_24962[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24911 === (1))){
var inst_24823 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_24910__$1 = state_24910;
if(cljs.core.truth_(inst_24823)){
var statearr_24916_24963 = state_24910__$1;
(statearr_24916_24963[(1)] = (2));

} else {
var statearr_24917_24964 = state_24910__$1;
(statearr_24917_24964[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24911 === (24))){
var inst_24902 = (state_24910[(2)]);
var state_24910__$1 = state_24910;
var statearr_24918_24965 = state_24910__$1;
(statearr_24918_24965[(2)] = inst_24902);

(statearr_24918_24965[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24911 === (4))){
var inst_24908 = (state_24910[(2)]);
var state_24910__$1 = state_24910;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24910__$1,inst_24908);
} else {
if((state_val_24911 === (15))){
var inst_24906 = (state_24910[(2)]);
var state_24910__$1 = state_24910;
var statearr_24919_24966 = state_24910__$1;
(statearr_24919_24966[(2)] = inst_24906);

(statearr_24919_24966[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24911 === (21))){
var inst_24859 = (state_24910[(2)]);
var inst_24860 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24861 = figwheel.client.auto_jump_to_error.call(null,opts,inst_24860);
var state_24910__$1 = (function (){var statearr_24920 = state_24910;
(statearr_24920[(7)] = inst_24859);

return statearr_24920;
})();
var statearr_24921_24967 = state_24910__$1;
(statearr_24921_24967[(2)] = inst_24861);

(statearr_24921_24967[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24911 === (31))){
var inst_24889 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_24910__$1 = state_24910;
if(cljs.core.truth_(inst_24889)){
var statearr_24922_24968 = state_24910__$1;
(statearr_24922_24968[(1)] = (34));

} else {
var statearr_24923_24969 = state_24910__$1;
(statearr_24923_24969[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24911 === (32))){
var inst_24898 = (state_24910[(2)]);
var state_24910__$1 = state_24910;
var statearr_24924_24970 = state_24910__$1;
(statearr_24924_24970[(2)] = inst_24898);

(statearr_24924_24970[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24911 === (33))){
var inst_24885 = (state_24910[(2)]);
var inst_24886 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24887 = figwheel.client.auto_jump_to_error.call(null,opts,inst_24886);
var state_24910__$1 = (function (){var statearr_24925 = state_24910;
(statearr_24925[(8)] = inst_24885);

return statearr_24925;
})();
var statearr_24926_24971 = state_24910__$1;
(statearr_24926_24971[(2)] = inst_24887);

(statearr_24926_24971[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24911 === (13))){
var inst_24844 = figwheel.client.heads_up.clear.call(null);
var state_24910__$1 = state_24910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24910__$1,(16),inst_24844);
} else {
if((state_val_24911 === (22))){
var inst_24865 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24866 = figwheel.client.heads_up.append_warning_message.call(null,inst_24865);
var state_24910__$1 = state_24910;
var statearr_24927_24972 = state_24910__$1;
(statearr_24927_24972[(2)] = inst_24866);

(statearr_24927_24972[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24911 === (36))){
var inst_24896 = (state_24910[(2)]);
var state_24910__$1 = state_24910;
var statearr_24928_24973 = state_24910__$1;
(statearr_24928_24973[(2)] = inst_24896);

(statearr_24928_24973[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24911 === (29))){
var inst_24876 = (state_24910[(2)]);
var inst_24877 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24878 = figwheel.client.auto_jump_to_error.call(null,opts,inst_24877);
var state_24910__$1 = (function (){var statearr_24929 = state_24910;
(statearr_24929[(9)] = inst_24876);

return statearr_24929;
})();
var statearr_24930_24974 = state_24910__$1;
(statearr_24930_24974[(2)] = inst_24878);

(statearr_24930_24974[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24911 === (6))){
var inst_24825 = (state_24910[(10)]);
var state_24910__$1 = state_24910;
var statearr_24931_24975 = state_24910__$1;
(statearr_24931_24975[(2)] = inst_24825);

(statearr_24931_24975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24911 === (28))){
var inst_24872 = (state_24910[(2)]);
var inst_24873 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24874 = figwheel.client.heads_up.display_warning.call(null,inst_24873);
var state_24910__$1 = (function (){var statearr_24932 = state_24910;
(statearr_24932[(11)] = inst_24872);

return statearr_24932;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24910__$1,(29),inst_24874);
} else {
if((state_val_24911 === (25))){
var inst_24870 = figwheel.client.heads_up.clear.call(null);
var state_24910__$1 = state_24910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24910__$1,(28),inst_24870);
} else {
if((state_val_24911 === (34))){
var inst_24891 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24910__$1 = state_24910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24910__$1,(37),inst_24891);
} else {
if((state_val_24911 === (17))){
var inst_24850 = (state_24910[(2)]);
var inst_24851 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24852 = figwheel.client.auto_jump_to_error.call(null,opts,inst_24851);
var state_24910__$1 = (function (){var statearr_24933 = state_24910;
(statearr_24933[(12)] = inst_24850);

return statearr_24933;
})();
var statearr_24934_24976 = state_24910__$1;
(statearr_24934_24976[(2)] = inst_24852);

(statearr_24934_24976[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24911 === (3))){
var inst_24842 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_24910__$1 = state_24910;
if(cljs.core.truth_(inst_24842)){
var statearr_24935_24977 = state_24910__$1;
(statearr_24935_24977[(1)] = (13));

} else {
var statearr_24936_24978 = state_24910__$1;
(statearr_24936_24978[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24911 === (12))){
var inst_24838 = (state_24910[(2)]);
var state_24910__$1 = state_24910;
var statearr_24937_24979 = state_24910__$1;
(statearr_24937_24979[(2)] = inst_24838);

(statearr_24937_24979[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24911 === (2))){
var inst_24825 = (state_24910[(10)]);
var inst_24825__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_24910__$1 = (function (){var statearr_24938 = state_24910;
(statearr_24938[(10)] = inst_24825__$1);

return statearr_24938;
})();
if(cljs.core.truth_(inst_24825__$1)){
var statearr_24939_24980 = state_24910__$1;
(statearr_24939_24980[(1)] = (5));

} else {
var statearr_24940_24981 = state_24910__$1;
(statearr_24940_24981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24911 === (23))){
var inst_24868 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_24910__$1 = state_24910;
if(cljs.core.truth_(inst_24868)){
var statearr_24941_24982 = state_24910__$1;
(statearr_24941_24982[(1)] = (25));

} else {
var statearr_24942_24983 = state_24910__$1;
(statearr_24942_24983[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24911 === (35))){
var state_24910__$1 = state_24910;
var statearr_24943_24984 = state_24910__$1;
(statearr_24943_24984[(2)] = null);

(statearr_24943_24984[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24911 === (19))){
var inst_24863 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_24910__$1 = state_24910;
if(cljs.core.truth_(inst_24863)){
var statearr_24944_24985 = state_24910__$1;
(statearr_24944_24985[(1)] = (22));

} else {
var statearr_24945_24986 = state_24910__$1;
(statearr_24945_24986[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24911 === (11))){
var inst_24834 = (state_24910[(2)]);
var state_24910__$1 = state_24910;
var statearr_24946_24987 = state_24910__$1;
(statearr_24946_24987[(2)] = inst_24834);

(statearr_24946_24987[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24911 === (9))){
var inst_24836 = figwheel.client.heads_up.clear.call(null);
var state_24910__$1 = state_24910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24910__$1,(12),inst_24836);
} else {
if((state_val_24911 === (5))){
var inst_24827 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_24910__$1 = state_24910;
var statearr_24947_24988 = state_24910__$1;
(statearr_24947_24988[(2)] = inst_24827);

(statearr_24947_24988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24911 === (14))){
var inst_24854 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_24910__$1 = state_24910;
if(cljs.core.truth_(inst_24854)){
var statearr_24948_24989 = state_24910__$1;
(statearr_24948_24989[(1)] = (18));

} else {
var statearr_24949_24990 = state_24910__$1;
(statearr_24949_24990[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24911 === (26))){
var inst_24880 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_24910__$1 = state_24910;
if(cljs.core.truth_(inst_24880)){
var statearr_24950_24991 = state_24910__$1;
(statearr_24950_24991[(1)] = (30));

} else {
var statearr_24951_24992 = state_24910__$1;
(statearr_24951_24992[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24911 === (16))){
var inst_24846 = (state_24910[(2)]);
var inst_24847 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24848 = figwheel.client.heads_up.display_exception.call(null,inst_24847);
var state_24910__$1 = (function (){var statearr_24952 = state_24910;
(statearr_24952[(13)] = inst_24846);

return statearr_24952;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24910__$1,(17),inst_24848);
} else {
if((state_val_24911 === (30))){
var inst_24882 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24883 = figwheel.client.heads_up.display_warning.call(null,inst_24882);
var state_24910__$1 = state_24910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24910__$1,(33),inst_24883);
} else {
if((state_val_24911 === (10))){
var inst_24840 = (state_24910[(2)]);
var state_24910__$1 = state_24910;
var statearr_24953_24993 = state_24910__$1;
(statearr_24953_24993[(2)] = inst_24840);

(statearr_24953_24993[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24911 === (18))){
var inst_24856 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24857 = figwheel.client.heads_up.display_exception.call(null,inst_24856);
var state_24910__$1 = state_24910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24910__$1,(21),inst_24857);
} else {
if((state_val_24911 === (37))){
var inst_24893 = (state_24910[(2)]);
var state_24910__$1 = state_24910;
var statearr_24954_24994 = state_24910__$1;
(statearr_24954_24994[(2)] = inst_24893);

(statearr_24954_24994[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24911 === (8))){
var inst_24832 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24910__$1 = state_24910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24910__$1,(11),inst_24832);
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
});})(c__15288__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__15198__auto__,c__15288__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__15199__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__15199__auto____0 = (function (){
var statearr_24955 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24955[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__15199__auto__);

(statearr_24955[(1)] = (1));

return statearr_24955;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__15199__auto____1 = (function (state_24910){
while(true){
var ret_value__15200__auto__ = (function (){try{while(true){
var result__15201__auto__ = switch__15198__auto__.call(null,state_24910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15201__auto__;
}
break;
}
}catch (e24956){if((e24956 instanceof Object)){
var ex__15202__auto__ = e24956;
var statearr_24957_24995 = state_24910;
(statearr_24957_24995[(5)] = ex__15202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24996 = state_24910;
state_24910 = G__24996;
continue;
} else {
return ret_value__15200__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__15199__auto__ = function(state_24910){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__15199__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__15199__auto____1.call(this,state_24910);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__15199__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__15199__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__15199__auto__;
})()
;})(switch__15198__auto__,c__15288__auto__,msg_hist,msg_names,msg))
})();
var state__15290__auto__ = (function (){var statearr_24958 = f__15289__auto__.call(null);
(statearr_24958[(6)] = c__15288__auto__);

return statearr_24958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15290__auto__);
});})(c__15288__auto__,msg_hist,msg_names,msg))
);

return c__15288__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__15288__auto___25025 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15288__auto___25025,ch){
return (function (){
var f__15289__auto__ = (function (){var switch__15198__auto__ = ((function (c__15288__auto___25025,ch){
return (function (state_25011){
var state_val_25012 = (state_25011[(1)]);
if((state_val_25012 === (1))){
var state_25011__$1 = state_25011;
var statearr_25013_25026 = state_25011__$1;
(statearr_25013_25026[(2)] = null);

(statearr_25013_25026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25012 === (2))){
var state_25011__$1 = state_25011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25011__$1,(4),ch);
} else {
if((state_val_25012 === (3))){
var inst_25009 = (state_25011[(2)]);
var state_25011__$1 = state_25011;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25011__$1,inst_25009);
} else {
if((state_val_25012 === (4))){
var inst_24999 = (state_25011[(7)]);
var inst_24999__$1 = (state_25011[(2)]);
var state_25011__$1 = (function (){var statearr_25014 = state_25011;
(statearr_25014[(7)] = inst_24999__$1);

return statearr_25014;
})();
if(cljs.core.truth_(inst_24999__$1)){
var statearr_25015_25027 = state_25011__$1;
(statearr_25015_25027[(1)] = (5));

} else {
var statearr_25016_25028 = state_25011__$1;
(statearr_25016_25028[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25012 === (5))){
var inst_24999 = (state_25011[(7)]);
var inst_25001 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24999);
var state_25011__$1 = state_25011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25011__$1,(8),inst_25001);
} else {
if((state_val_25012 === (6))){
var state_25011__$1 = state_25011;
var statearr_25017_25029 = state_25011__$1;
(statearr_25017_25029[(2)] = null);

(statearr_25017_25029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25012 === (7))){
var inst_25007 = (state_25011[(2)]);
var state_25011__$1 = state_25011;
var statearr_25018_25030 = state_25011__$1;
(statearr_25018_25030[(2)] = inst_25007);

(statearr_25018_25030[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25012 === (8))){
var inst_25003 = (state_25011[(2)]);
var state_25011__$1 = (function (){var statearr_25019 = state_25011;
(statearr_25019[(8)] = inst_25003);

return statearr_25019;
})();
var statearr_25020_25031 = state_25011__$1;
(statearr_25020_25031[(2)] = null);

(statearr_25020_25031[(1)] = (2));


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
});})(c__15288__auto___25025,ch))
;
return ((function (switch__15198__auto__,c__15288__auto___25025,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__15199__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__15199__auto____0 = (function (){
var statearr_25021 = [null,null,null,null,null,null,null,null,null];
(statearr_25021[(0)] = figwheel$client$heads_up_plugin_$_state_machine__15199__auto__);

(statearr_25021[(1)] = (1));

return statearr_25021;
});
var figwheel$client$heads_up_plugin_$_state_machine__15199__auto____1 = (function (state_25011){
while(true){
var ret_value__15200__auto__ = (function (){try{while(true){
var result__15201__auto__ = switch__15198__auto__.call(null,state_25011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15201__auto__;
}
break;
}
}catch (e25022){if((e25022 instanceof Object)){
var ex__15202__auto__ = e25022;
var statearr_25023_25032 = state_25011;
(statearr_25023_25032[(5)] = ex__15202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25033 = state_25011;
state_25011 = G__25033;
continue;
} else {
return ret_value__15200__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__15199__auto__ = function(state_25011){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__15199__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__15199__auto____1.call(this,state_25011);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__15199__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__15199__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__15199__auto__;
})()
;})(switch__15198__auto__,c__15288__auto___25025,ch))
})();
var state__15290__auto__ = (function (){var statearr_25024 = f__15289__auto__.call(null);
(statearr_25024[(6)] = c__15288__auto___25025);

return statearr_25024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15290__auto__);
});})(c__15288__auto___25025,ch))
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
var c__15288__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15288__auto__){
return (function (){
var f__15289__auto__ = (function (){var switch__15198__auto__ = ((function (c__15288__auto__){
return (function (state_25039){
var state_val_25040 = (state_25039[(1)]);
if((state_val_25040 === (1))){
var inst_25034 = cljs.core.async.timeout.call(null,(3000));
var state_25039__$1 = state_25039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25039__$1,(2),inst_25034);
} else {
if((state_val_25040 === (2))){
var inst_25036 = (state_25039[(2)]);
var inst_25037 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_25039__$1 = (function (){var statearr_25041 = state_25039;
(statearr_25041[(7)] = inst_25036);

return statearr_25041;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25039__$1,inst_25037);
} else {
return null;
}
}
});})(c__15288__auto__))
;
return ((function (switch__15198__auto__,c__15288__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__15199__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__15199__auto____0 = (function (){
var statearr_25042 = [null,null,null,null,null,null,null,null];
(statearr_25042[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__15199__auto__);

(statearr_25042[(1)] = (1));

return statearr_25042;
});
var figwheel$client$enforce_project_plugin_$_state_machine__15199__auto____1 = (function (state_25039){
while(true){
var ret_value__15200__auto__ = (function (){try{while(true){
var result__15201__auto__ = switch__15198__auto__.call(null,state_25039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15201__auto__;
}
break;
}
}catch (e25043){if((e25043 instanceof Object)){
var ex__15202__auto__ = e25043;
var statearr_25044_25046 = state_25039;
(statearr_25044_25046[(5)] = ex__15202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25047 = state_25039;
state_25039 = G__25047;
continue;
} else {
return ret_value__15200__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__15199__auto__ = function(state_25039){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__15199__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__15199__auto____1.call(this,state_25039);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__15199__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__15199__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__15199__auto__;
})()
;})(switch__15198__auto__,c__15288__auto__))
})();
var state__15290__auto__ = (function (){var statearr_25045 = f__15289__auto__.call(null);
(statearr_25045[(6)] = c__15288__auto__);

return statearr_25045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15290__auto__);
});})(c__15288__auto__))
);

return c__15288__auto__;
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
var temp__6738__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__6738__auto__)){
var figwheel_version = temp__6738__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__15288__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15288__auto__,figwheel_version,temp__6738__auto__){
return (function (){
var f__15289__auto__ = (function (){var switch__15198__auto__ = ((function (c__15288__auto__,figwheel_version,temp__6738__auto__){
return (function (state_25054){
var state_val_25055 = (state_25054[(1)]);
if((state_val_25055 === (1))){
var inst_25048 = cljs.core.async.timeout.call(null,(2000));
var state_25054__$1 = state_25054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25054__$1,(2),inst_25048);
} else {
if((state_val_25055 === (2))){
var inst_25050 = (state_25054[(2)]);
var inst_25051 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_25052 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_25051);
var state_25054__$1 = (function (){var statearr_25056 = state_25054;
(statearr_25056[(7)] = inst_25050);

return statearr_25056;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25054__$1,inst_25052);
} else {
return null;
}
}
});})(c__15288__auto__,figwheel_version,temp__6738__auto__))
;
return ((function (switch__15198__auto__,c__15288__auto__,figwheel_version,temp__6738__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__15199__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__15199__auto____0 = (function (){
var statearr_25057 = [null,null,null,null,null,null,null,null];
(statearr_25057[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__15199__auto__);

(statearr_25057[(1)] = (1));

return statearr_25057;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__15199__auto____1 = (function (state_25054){
while(true){
var ret_value__15200__auto__ = (function (){try{while(true){
var result__15201__auto__ = switch__15198__auto__.call(null,state_25054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15201__auto__;
}
break;
}
}catch (e25058){if((e25058 instanceof Object)){
var ex__15202__auto__ = e25058;
var statearr_25059_25061 = state_25054;
(statearr_25059_25061[(5)] = ex__15202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25062 = state_25054;
state_25054 = G__25062;
continue;
} else {
return ret_value__15200__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__15199__auto__ = function(state_25054){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__15199__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__15199__auto____1.call(this,state_25054);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__15199__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__15199__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__15199__auto__;
})()
;})(switch__15198__auto__,c__15288__auto__,figwheel_version,temp__6738__auto__))
})();
var state__15290__auto__ = (function (){var statearr_25060 = f__15289__auto__.call(null);
(statearr_25060[(6)] = c__15288__auto__);

return statearr_25060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15290__auto__);
});})(c__15288__auto__,figwheel_version,temp__6738__auto__))
);

return c__15288__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__25063){
var map__25064 = p__25063;
var map__25064__$1 = ((((!((map__25064 == null)))?((((map__25064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25064.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25064):map__25064);
var file = cljs.core.get.call(null,map__25064__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__25064__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__25064__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__25066 = "";
var G__25066__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25066),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__25066);
var G__25066__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25066__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__25066__$1);
if(cljs.core.truth_((function (){var and__9798__auto__ = line;
if(cljs.core.truth_(and__9798__auto__)){
return column;
} else {
return and__9798__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25066__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__25066__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__25067){
var map__25068 = p__25067;
var map__25068__$1 = ((((!((map__25068 == null)))?((((map__25068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25068.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25068):map__25068);
var ed = map__25068__$1;
var formatted_exception = cljs.core.get.call(null,map__25068__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__25068__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__25068__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__25070_25074 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__25071_25075 = null;
var count__25072_25076 = (0);
var i__25073_25077 = (0);
while(true){
if((i__25073_25077 < count__25072_25076)){
var msg_25078 = cljs.core._nth.call(null,chunk__25071_25075,i__25073_25077);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25078);

var G__25079 = seq__25070_25074;
var G__25080 = chunk__25071_25075;
var G__25081 = count__25072_25076;
var G__25082 = (i__25073_25077 + (1));
seq__25070_25074 = G__25079;
chunk__25071_25075 = G__25080;
count__25072_25076 = G__25081;
i__25073_25077 = G__25082;
continue;
} else {
var temp__6738__auto___25083 = cljs.core.seq.call(null,seq__25070_25074);
if(temp__6738__auto___25083){
var seq__25070_25084__$1 = temp__6738__auto___25083;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25070_25084__$1)){
var c__10741__auto___25085 = cljs.core.chunk_first.call(null,seq__25070_25084__$1);
var G__25086 = cljs.core.chunk_rest.call(null,seq__25070_25084__$1);
var G__25087 = c__10741__auto___25085;
var G__25088 = cljs.core.count.call(null,c__10741__auto___25085);
var G__25089 = (0);
seq__25070_25074 = G__25086;
chunk__25071_25075 = G__25087;
count__25072_25076 = G__25088;
i__25073_25077 = G__25089;
continue;
} else {
var msg_25090 = cljs.core.first.call(null,seq__25070_25084__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25090);

var G__25091 = cljs.core.next.call(null,seq__25070_25084__$1);
var G__25092 = null;
var G__25093 = (0);
var G__25094 = (0);
seq__25070_25074 = G__25091;
chunk__25071_25075 = G__25092;
count__25072_25076 = G__25093;
i__25073_25077 = G__25094;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__25095){
var map__25096 = p__25095;
var map__25096__$1 = ((((!((map__25096 == null)))?((((map__25096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25096.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25096):map__25096);
var w = map__25096__$1;
var message = cljs.core.get.call(null,map__25096__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__9798__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__9798__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__9798__auto__;
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
var seq__25098 = cljs.core.seq.call(null,plugins);
var chunk__25099 = null;
var count__25100 = (0);
var i__25101 = (0);
while(true){
if((i__25101 < count__25100)){
var vec__25102 = cljs.core._nth.call(null,chunk__25099,i__25101);
var k = cljs.core.nth.call(null,vec__25102,(0),null);
var plugin = cljs.core.nth.call(null,vec__25102,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25108 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25098,chunk__25099,count__25100,i__25101,pl_25108,vec__25102,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_25108.call(null,msg_hist);
});})(seq__25098,chunk__25099,count__25100,i__25101,pl_25108,vec__25102,k,plugin))
);
} else {
}

var G__25109 = seq__25098;
var G__25110 = chunk__25099;
var G__25111 = count__25100;
var G__25112 = (i__25101 + (1));
seq__25098 = G__25109;
chunk__25099 = G__25110;
count__25100 = G__25111;
i__25101 = G__25112;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__25098);
if(temp__6738__auto__){
var seq__25098__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25098__$1)){
var c__10741__auto__ = cljs.core.chunk_first.call(null,seq__25098__$1);
var G__25113 = cljs.core.chunk_rest.call(null,seq__25098__$1);
var G__25114 = c__10741__auto__;
var G__25115 = cljs.core.count.call(null,c__10741__auto__);
var G__25116 = (0);
seq__25098 = G__25113;
chunk__25099 = G__25114;
count__25100 = G__25115;
i__25101 = G__25116;
continue;
} else {
var vec__25105 = cljs.core.first.call(null,seq__25098__$1);
var k = cljs.core.nth.call(null,vec__25105,(0),null);
var plugin = cljs.core.nth.call(null,vec__25105,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25117 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25098,chunk__25099,count__25100,i__25101,pl_25117,vec__25105,k,plugin,seq__25098__$1,temp__6738__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_25117.call(null,msg_hist);
});})(seq__25098,chunk__25099,count__25100,i__25101,pl_25117,vec__25105,k,plugin,seq__25098__$1,temp__6738__auto__))
);
} else {
}

var G__25118 = cljs.core.next.call(null,seq__25098__$1);
var G__25119 = null;
var G__25120 = (0);
var G__25121 = (0);
seq__25098 = G__25118;
chunk__25099 = G__25119;
count__25100 = G__25120;
i__25101 = G__25121;
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
var G__25123 = arguments.length;
switch (G__25123) {
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

var seq__25124_25129 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__25125_25130 = null;
var count__25126_25131 = (0);
var i__25127_25132 = (0);
while(true){
if((i__25127_25132 < count__25126_25131)){
var msg_25133 = cljs.core._nth.call(null,chunk__25125_25130,i__25127_25132);
figwheel.client.socket.handle_incoming_message.call(null,msg_25133);

var G__25134 = seq__25124_25129;
var G__25135 = chunk__25125_25130;
var G__25136 = count__25126_25131;
var G__25137 = (i__25127_25132 + (1));
seq__25124_25129 = G__25134;
chunk__25125_25130 = G__25135;
count__25126_25131 = G__25136;
i__25127_25132 = G__25137;
continue;
} else {
var temp__6738__auto___25138 = cljs.core.seq.call(null,seq__25124_25129);
if(temp__6738__auto___25138){
var seq__25124_25139__$1 = temp__6738__auto___25138;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25124_25139__$1)){
var c__10741__auto___25140 = cljs.core.chunk_first.call(null,seq__25124_25139__$1);
var G__25141 = cljs.core.chunk_rest.call(null,seq__25124_25139__$1);
var G__25142 = c__10741__auto___25140;
var G__25143 = cljs.core.count.call(null,c__10741__auto___25140);
var G__25144 = (0);
seq__25124_25129 = G__25141;
chunk__25125_25130 = G__25142;
count__25126_25131 = G__25143;
i__25127_25132 = G__25144;
continue;
} else {
var msg_25145 = cljs.core.first.call(null,seq__25124_25139__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_25145);

var G__25146 = cljs.core.next.call(null,seq__25124_25139__$1);
var G__25147 = null;
var G__25148 = (0);
var G__25149 = (0);
seq__25124_25129 = G__25146;
chunk__25125_25130 = G__25147;
count__25126_25131 = G__25148;
i__25127_25132 = G__25149;
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
var args__11094__auto__ = [];
var len__11087__auto___25154 = arguments.length;
var i__11088__auto___25155 = (0);
while(true){
if((i__11088__auto___25155 < len__11087__auto___25154)){
args__11094__auto__.push((arguments[i__11088__auto___25155]));

var G__25156 = (i__11088__auto___25155 + (1));
i__11088__auto___25155 = G__25156;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((0) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__11095__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__25151){
var map__25152 = p__25151;
var map__25152__$1 = ((((!((map__25152 == null)))?((((map__25152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25152.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25152):map__25152);
var opts = map__25152__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq25150){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25150));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e25157){if((e25157 instanceof Error)){
var e = e25157;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e25157;

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
return (function (p__25158){
var map__25159 = p__25158;
var map__25159__$1 = ((((!((map__25159 == null)))?((((map__25159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25159.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25159):map__25159);
var msg_name = cljs.core.get.call(null,map__25159__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1506896688072
