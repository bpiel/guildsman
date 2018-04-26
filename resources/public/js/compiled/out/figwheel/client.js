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
}catch (e66564){if((e66564 instanceof Error)){
var e = e66564;
return "Error: Unable to stringify";
} else {
throw e66564;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__66567 = arguments.length;
switch (G__66567) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__66565_SHARP_){
if(typeof p1__66565_SHARP_ === 'string'){
return p1__66565_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__66565_SHARP_);
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
var args__54254__auto__ = [];
var len__54247__auto___66570 = arguments.length;
var i__54248__auto___66571 = (0);
while(true){
if((i__54248__auto___66571 < len__54247__auto___66570)){
args__54254__auto__.push((arguments[i__54248__auto___66571]));

var G__66572 = (i__54248__auto___66571 + (1));
i__54248__auto___66571 = G__66572;
continue;
} else {
}
break;
}

var argseq__54255__auto__ = ((((0) < args__54254__auto__.length))?(new cljs.core.IndexedSeq(args__54254__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__54255__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq66569){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66569));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__54254__auto__ = [];
var len__54247__auto___66574 = arguments.length;
var i__54248__auto___66575 = (0);
while(true){
if((i__54248__auto___66575 < len__54247__auto___66574)){
args__54254__auto__.push((arguments[i__54248__auto___66575]));

var G__66576 = (i__54248__auto___66575 + (1));
i__54248__auto___66575 = G__66576;
continue;
} else {
}
break;
}

var argseq__54255__auto__ = ((((0) < args__54254__auto__.length))?(new cljs.core.IndexedSeq(args__54254__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__54255__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq66573){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66573));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__66577){
var map__66578 = p__66577;
var map__66578__$1 = ((((!((map__66578 == null)))?((((map__66578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66578.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66578):map__66578);
var message = cljs.core.get.call(null,map__66578__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__66578__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__52970__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__52970__auto__)){
return or__52970__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__52958__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__52958__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__52958__auto__;
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
var c__58063__auto___66657 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58063__auto___66657,ch){
return (function (){
var f__58064__auto__ = (function (){var switch__57973__auto__ = ((function (c__58063__auto___66657,ch){
return (function (state_66629){
var state_val_66630 = (state_66629[(1)]);
if((state_val_66630 === (7))){
var inst_66625 = (state_66629[(2)]);
var state_66629__$1 = state_66629;
var statearr_66631_66658 = state_66629__$1;
(statearr_66631_66658[(2)] = inst_66625);

(statearr_66631_66658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66630 === (1))){
var state_66629__$1 = state_66629;
var statearr_66632_66659 = state_66629__$1;
(statearr_66632_66659[(2)] = null);

(statearr_66632_66659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66630 === (4))){
var inst_66582 = (state_66629[(7)]);
var inst_66582__$1 = (state_66629[(2)]);
var state_66629__$1 = (function (){var statearr_66633 = state_66629;
(statearr_66633[(7)] = inst_66582__$1);

return statearr_66633;
})();
if(cljs.core.truth_(inst_66582__$1)){
var statearr_66634_66660 = state_66629__$1;
(statearr_66634_66660[(1)] = (5));

} else {
var statearr_66635_66661 = state_66629__$1;
(statearr_66635_66661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66630 === (15))){
var inst_66589 = (state_66629[(8)]);
var inst_66604 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_66589);
var inst_66605 = cljs.core.first.call(null,inst_66604);
var inst_66606 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_66605);
var inst_66607 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_66606)].join('');
var inst_66608 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_66607);
var state_66629__$1 = state_66629;
var statearr_66636_66662 = state_66629__$1;
(statearr_66636_66662[(2)] = inst_66608);

(statearr_66636_66662[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66630 === (13))){
var inst_66613 = (state_66629[(2)]);
var state_66629__$1 = state_66629;
var statearr_66637_66663 = state_66629__$1;
(statearr_66637_66663[(2)] = inst_66613);

(statearr_66637_66663[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66630 === (6))){
var state_66629__$1 = state_66629;
var statearr_66638_66664 = state_66629__$1;
(statearr_66638_66664[(2)] = null);

(statearr_66638_66664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66630 === (17))){
var inst_66611 = (state_66629[(2)]);
var state_66629__$1 = state_66629;
var statearr_66639_66665 = state_66629__$1;
(statearr_66639_66665[(2)] = inst_66611);

(statearr_66639_66665[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66630 === (3))){
var inst_66627 = (state_66629[(2)]);
var state_66629__$1 = state_66629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66629__$1,inst_66627);
} else {
if((state_val_66630 === (12))){
var inst_66588 = (state_66629[(9)]);
var inst_66602 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_66588,opts);
var state_66629__$1 = state_66629;
if(cljs.core.truth_(inst_66602)){
var statearr_66640_66666 = state_66629__$1;
(statearr_66640_66666[(1)] = (15));

} else {
var statearr_66641_66667 = state_66629__$1;
(statearr_66641_66667[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66630 === (2))){
var state_66629__$1 = state_66629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66629__$1,(4),ch);
} else {
if((state_val_66630 === (11))){
var inst_66589 = (state_66629[(8)]);
var inst_66594 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_66595 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_66589);
var inst_66596 = cljs.core.async.timeout.call(null,(1000));
var inst_66597 = [inst_66595,inst_66596];
var inst_66598 = (new cljs.core.PersistentVector(null,2,(5),inst_66594,inst_66597,null));
var state_66629__$1 = state_66629;
return cljs.core.async.ioc_alts_BANG_.call(null,state_66629__$1,(14),inst_66598);
} else {
if((state_val_66630 === (9))){
var inst_66589 = (state_66629[(8)]);
var inst_66615 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_66616 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_66589);
var inst_66617 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_66616);
var inst_66618 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_66617)].join('');
var inst_66619 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_66618);
var state_66629__$1 = (function (){var statearr_66642 = state_66629;
(statearr_66642[(10)] = inst_66615);

return statearr_66642;
})();
var statearr_66643_66668 = state_66629__$1;
(statearr_66643_66668[(2)] = inst_66619);

(statearr_66643_66668[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66630 === (5))){
var inst_66582 = (state_66629[(7)]);
var inst_66584 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_66585 = (new cljs.core.PersistentArrayMap(null,2,inst_66584,null));
var inst_66586 = (new cljs.core.PersistentHashSet(null,inst_66585,null));
var inst_66587 = figwheel.client.focus_msgs.call(null,inst_66586,inst_66582);
var inst_66588 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_66587);
var inst_66589 = cljs.core.first.call(null,inst_66587);
var inst_66590 = figwheel.client.autoload_QMARK_.call(null);
var state_66629__$1 = (function (){var statearr_66644 = state_66629;
(statearr_66644[(9)] = inst_66588);

(statearr_66644[(8)] = inst_66589);

return statearr_66644;
})();
if(cljs.core.truth_(inst_66590)){
var statearr_66645_66669 = state_66629__$1;
(statearr_66645_66669[(1)] = (8));

} else {
var statearr_66646_66670 = state_66629__$1;
(statearr_66646_66670[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66630 === (14))){
var inst_66600 = (state_66629[(2)]);
var state_66629__$1 = state_66629;
var statearr_66647_66671 = state_66629__$1;
(statearr_66647_66671[(2)] = inst_66600);

(statearr_66647_66671[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66630 === (16))){
var state_66629__$1 = state_66629;
var statearr_66648_66672 = state_66629__$1;
(statearr_66648_66672[(2)] = null);

(statearr_66648_66672[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66630 === (10))){
var inst_66621 = (state_66629[(2)]);
var state_66629__$1 = (function (){var statearr_66649 = state_66629;
(statearr_66649[(11)] = inst_66621);

return statearr_66649;
})();
var statearr_66650_66673 = state_66629__$1;
(statearr_66650_66673[(2)] = null);

(statearr_66650_66673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66630 === (8))){
var inst_66588 = (state_66629[(9)]);
var inst_66592 = figwheel.client.reload_file_state_QMARK_.call(null,inst_66588,opts);
var state_66629__$1 = state_66629;
if(cljs.core.truth_(inst_66592)){
var statearr_66651_66674 = state_66629__$1;
(statearr_66651_66674[(1)] = (11));

} else {
var statearr_66652_66675 = state_66629__$1;
(statearr_66652_66675[(1)] = (12));

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
});})(c__58063__auto___66657,ch))
;
return ((function (switch__57973__auto__,c__58063__auto___66657,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__57974__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__57974__auto____0 = (function (){
var statearr_66653 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66653[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__57974__auto__);

(statearr_66653[(1)] = (1));

return statearr_66653;
});
var figwheel$client$file_reloader_plugin_$_state_machine__57974__auto____1 = (function (state_66629){
while(true){
var ret_value__57975__auto__ = (function (){try{while(true){
var result__57976__auto__ = switch__57973__auto__.call(null,state_66629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57976__auto__;
}
break;
}
}catch (e66654){if((e66654 instanceof Object)){
var ex__57977__auto__ = e66654;
var statearr_66655_66676 = state_66629;
(statearr_66655_66676[(5)] = ex__57977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66677 = state_66629;
state_66629 = G__66677;
continue;
} else {
return ret_value__57975__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__57974__auto__ = function(state_66629){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__57974__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__57974__auto____1.call(this,state_66629);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__57974__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__57974__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__57974__auto__;
})()
;})(switch__57973__auto__,c__58063__auto___66657,ch))
})();
var state__58065__auto__ = (function (){var statearr_66656 = f__58064__auto__.call(null);
(statearr_66656[(6)] = c__58063__auto___66657);

return statearr_66656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58065__auto__);
});})(c__58063__auto___66657,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__66678_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__66678_SHARP_));
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
var base_path_66680 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_66680){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e66679){if((e66679 instanceof Error)){
var e = e66679;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_66680], null));
} else {
var e = e66679;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_66680))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__66681){
var map__66682 = p__66681;
var map__66682__$1 = ((((!((map__66682 == null)))?((((map__66682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66682.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66682):map__66682);
var opts = map__66682__$1;
var build_id = cljs.core.get.call(null,map__66682__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__66682,map__66682__$1,opts,build_id){
return (function (p__66684){
var vec__66685 = p__66684;
var seq__66686 = cljs.core.seq.call(null,vec__66685);
var first__66687 = cljs.core.first.call(null,seq__66686);
var seq__66686__$1 = cljs.core.next.call(null,seq__66686);
var map__66688 = first__66687;
var map__66688__$1 = ((((!((map__66688 == null)))?((((map__66688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66688.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66688):map__66688);
var msg = map__66688__$1;
var msg_name = cljs.core.get.call(null,map__66688__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__66686__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__66685,seq__66686,first__66687,seq__66686__$1,map__66688,map__66688__$1,msg,msg_name,_,map__66682,map__66682__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__66685,seq__66686,first__66687,seq__66686__$1,map__66688,map__66688__$1,msg,msg_name,_,map__66682,map__66682__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__66682,map__66682__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__66690){
var vec__66691 = p__66690;
var seq__66692 = cljs.core.seq.call(null,vec__66691);
var first__66693 = cljs.core.first.call(null,seq__66692);
var seq__66692__$1 = cljs.core.next.call(null,seq__66692);
var map__66694 = first__66693;
var map__66694__$1 = ((((!((map__66694 == null)))?((((map__66694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66694.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66694):map__66694);
var msg = map__66694__$1;
var msg_name = cljs.core.get.call(null,map__66694__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__66692__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__66696){
var map__66697 = p__66696;
var map__66697__$1 = ((((!((map__66697 == null)))?((((map__66697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66697.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66697):map__66697);
var on_compile_warning = cljs.core.get.call(null,map__66697__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__66697__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__66697,map__66697__$1,on_compile_warning,on_compile_fail){
return (function (p__66699){
var vec__66700 = p__66699;
var seq__66701 = cljs.core.seq.call(null,vec__66700);
var first__66702 = cljs.core.first.call(null,seq__66701);
var seq__66701__$1 = cljs.core.next.call(null,seq__66701);
var map__66703 = first__66702;
var map__66703__$1 = ((((!((map__66703 == null)))?((((map__66703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66703.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66703):map__66703);
var msg = map__66703__$1;
var msg_name = cljs.core.get.call(null,map__66703__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__66701__$1;
var pred__66705 = cljs.core._EQ_;
var expr__66706 = msg_name;
if(cljs.core.truth_(pred__66705.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__66706))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__66705.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__66706))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__66697,map__66697__$1,on_compile_warning,on_compile_fail))
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
var c__58063__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58063__auto__,msg_hist,msg_names,msg){
return (function (){
var f__58064__auto__ = (function (){var switch__57973__auto__ = ((function (c__58063__auto__,msg_hist,msg_names,msg){
return (function (state_66795){
var state_val_66796 = (state_66795[(1)]);
if((state_val_66796 === (7))){
var inst_66715 = (state_66795[(2)]);
var state_66795__$1 = state_66795;
if(cljs.core.truth_(inst_66715)){
var statearr_66797_66844 = state_66795__$1;
(statearr_66797_66844[(1)] = (8));

} else {
var statearr_66798_66845 = state_66795__$1;
(statearr_66798_66845[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66796 === (20))){
var inst_66789 = (state_66795[(2)]);
var state_66795__$1 = state_66795;
var statearr_66799_66846 = state_66795__$1;
(statearr_66799_66846[(2)] = inst_66789);

(statearr_66799_66846[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66796 === (27))){
var inst_66785 = (state_66795[(2)]);
var state_66795__$1 = state_66795;
var statearr_66800_66847 = state_66795__$1;
(statearr_66800_66847[(2)] = inst_66785);

(statearr_66800_66847[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66796 === (1))){
var inst_66708 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_66795__$1 = state_66795;
if(cljs.core.truth_(inst_66708)){
var statearr_66801_66848 = state_66795__$1;
(statearr_66801_66848[(1)] = (2));

} else {
var statearr_66802_66849 = state_66795__$1;
(statearr_66802_66849[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66796 === (24))){
var inst_66787 = (state_66795[(2)]);
var state_66795__$1 = state_66795;
var statearr_66803_66850 = state_66795__$1;
(statearr_66803_66850[(2)] = inst_66787);

(statearr_66803_66850[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66796 === (4))){
var inst_66793 = (state_66795[(2)]);
var state_66795__$1 = state_66795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66795__$1,inst_66793);
} else {
if((state_val_66796 === (15))){
var inst_66791 = (state_66795[(2)]);
var state_66795__$1 = state_66795;
var statearr_66804_66851 = state_66795__$1;
(statearr_66804_66851[(2)] = inst_66791);

(statearr_66804_66851[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66796 === (21))){
var inst_66744 = (state_66795[(2)]);
var inst_66745 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_66746 = figwheel.client.auto_jump_to_error.call(null,opts,inst_66745);
var state_66795__$1 = (function (){var statearr_66805 = state_66795;
(statearr_66805[(7)] = inst_66744);

return statearr_66805;
})();
var statearr_66806_66852 = state_66795__$1;
(statearr_66806_66852[(2)] = inst_66746);

(statearr_66806_66852[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66796 === (31))){
var inst_66774 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_66795__$1 = state_66795;
if(cljs.core.truth_(inst_66774)){
var statearr_66807_66853 = state_66795__$1;
(statearr_66807_66853[(1)] = (34));

} else {
var statearr_66808_66854 = state_66795__$1;
(statearr_66808_66854[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66796 === (32))){
var inst_66783 = (state_66795[(2)]);
var state_66795__$1 = state_66795;
var statearr_66809_66855 = state_66795__$1;
(statearr_66809_66855[(2)] = inst_66783);

(statearr_66809_66855[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66796 === (33))){
var inst_66770 = (state_66795[(2)]);
var inst_66771 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_66772 = figwheel.client.auto_jump_to_error.call(null,opts,inst_66771);
var state_66795__$1 = (function (){var statearr_66810 = state_66795;
(statearr_66810[(8)] = inst_66770);

return statearr_66810;
})();
var statearr_66811_66856 = state_66795__$1;
(statearr_66811_66856[(2)] = inst_66772);

(statearr_66811_66856[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66796 === (13))){
var inst_66729 = figwheel.client.heads_up.clear.call(null);
var state_66795__$1 = state_66795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66795__$1,(16),inst_66729);
} else {
if((state_val_66796 === (22))){
var inst_66750 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_66751 = figwheel.client.heads_up.append_warning_message.call(null,inst_66750);
var state_66795__$1 = state_66795;
var statearr_66812_66857 = state_66795__$1;
(statearr_66812_66857[(2)] = inst_66751);

(statearr_66812_66857[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66796 === (36))){
var inst_66781 = (state_66795[(2)]);
var state_66795__$1 = state_66795;
var statearr_66813_66858 = state_66795__$1;
(statearr_66813_66858[(2)] = inst_66781);

(statearr_66813_66858[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66796 === (29))){
var inst_66761 = (state_66795[(2)]);
var inst_66762 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_66763 = figwheel.client.auto_jump_to_error.call(null,opts,inst_66762);
var state_66795__$1 = (function (){var statearr_66814 = state_66795;
(statearr_66814[(9)] = inst_66761);

return statearr_66814;
})();
var statearr_66815_66859 = state_66795__$1;
(statearr_66815_66859[(2)] = inst_66763);

(statearr_66815_66859[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66796 === (6))){
var inst_66710 = (state_66795[(10)]);
var state_66795__$1 = state_66795;
var statearr_66816_66860 = state_66795__$1;
(statearr_66816_66860[(2)] = inst_66710);

(statearr_66816_66860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66796 === (28))){
var inst_66757 = (state_66795[(2)]);
var inst_66758 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_66759 = figwheel.client.heads_up.display_warning.call(null,inst_66758);
var state_66795__$1 = (function (){var statearr_66817 = state_66795;
(statearr_66817[(11)] = inst_66757);

return statearr_66817;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66795__$1,(29),inst_66759);
} else {
if((state_val_66796 === (25))){
var inst_66755 = figwheel.client.heads_up.clear.call(null);
var state_66795__$1 = state_66795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66795__$1,(28),inst_66755);
} else {
if((state_val_66796 === (34))){
var inst_66776 = figwheel.client.heads_up.flash_loaded.call(null);
var state_66795__$1 = state_66795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66795__$1,(37),inst_66776);
} else {
if((state_val_66796 === (17))){
var inst_66735 = (state_66795[(2)]);
var inst_66736 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_66737 = figwheel.client.auto_jump_to_error.call(null,opts,inst_66736);
var state_66795__$1 = (function (){var statearr_66818 = state_66795;
(statearr_66818[(12)] = inst_66735);

return statearr_66818;
})();
var statearr_66819_66861 = state_66795__$1;
(statearr_66819_66861[(2)] = inst_66737);

(statearr_66819_66861[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66796 === (3))){
var inst_66727 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_66795__$1 = state_66795;
if(cljs.core.truth_(inst_66727)){
var statearr_66820_66862 = state_66795__$1;
(statearr_66820_66862[(1)] = (13));

} else {
var statearr_66821_66863 = state_66795__$1;
(statearr_66821_66863[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66796 === (12))){
var inst_66723 = (state_66795[(2)]);
var state_66795__$1 = state_66795;
var statearr_66822_66864 = state_66795__$1;
(statearr_66822_66864[(2)] = inst_66723);

(statearr_66822_66864[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66796 === (2))){
var inst_66710 = (state_66795[(10)]);
var inst_66710__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_66795__$1 = (function (){var statearr_66823 = state_66795;
(statearr_66823[(10)] = inst_66710__$1);

return statearr_66823;
})();
if(cljs.core.truth_(inst_66710__$1)){
var statearr_66824_66865 = state_66795__$1;
(statearr_66824_66865[(1)] = (5));

} else {
var statearr_66825_66866 = state_66795__$1;
(statearr_66825_66866[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66796 === (23))){
var inst_66753 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_66795__$1 = state_66795;
if(cljs.core.truth_(inst_66753)){
var statearr_66826_66867 = state_66795__$1;
(statearr_66826_66867[(1)] = (25));

} else {
var statearr_66827_66868 = state_66795__$1;
(statearr_66827_66868[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66796 === (35))){
var state_66795__$1 = state_66795;
var statearr_66828_66869 = state_66795__$1;
(statearr_66828_66869[(2)] = null);

(statearr_66828_66869[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66796 === (19))){
var inst_66748 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_66795__$1 = state_66795;
if(cljs.core.truth_(inst_66748)){
var statearr_66829_66870 = state_66795__$1;
(statearr_66829_66870[(1)] = (22));

} else {
var statearr_66830_66871 = state_66795__$1;
(statearr_66830_66871[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66796 === (11))){
var inst_66719 = (state_66795[(2)]);
var state_66795__$1 = state_66795;
var statearr_66831_66872 = state_66795__$1;
(statearr_66831_66872[(2)] = inst_66719);

(statearr_66831_66872[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66796 === (9))){
var inst_66721 = figwheel.client.heads_up.clear.call(null);
var state_66795__$1 = state_66795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66795__$1,(12),inst_66721);
} else {
if((state_val_66796 === (5))){
var inst_66712 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_66795__$1 = state_66795;
var statearr_66832_66873 = state_66795__$1;
(statearr_66832_66873[(2)] = inst_66712);

(statearr_66832_66873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66796 === (14))){
var inst_66739 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_66795__$1 = state_66795;
if(cljs.core.truth_(inst_66739)){
var statearr_66833_66874 = state_66795__$1;
(statearr_66833_66874[(1)] = (18));

} else {
var statearr_66834_66875 = state_66795__$1;
(statearr_66834_66875[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66796 === (26))){
var inst_66765 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_66795__$1 = state_66795;
if(cljs.core.truth_(inst_66765)){
var statearr_66835_66876 = state_66795__$1;
(statearr_66835_66876[(1)] = (30));

} else {
var statearr_66836_66877 = state_66795__$1;
(statearr_66836_66877[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66796 === (16))){
var inst_66731 = (state_66795[(2)]);
var inst_66732 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_66733 = figwheel.client.heads_up.display_exception.call(null,inst_66732);
var state_66795__$1 = (function (){var statearr_66837 = state_66795;
(statearr_66837[(13)] = inst_66731);

return statearr_66837;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66795__$1,(17),inst_66733);
} else {
if((state_val_66796 === (30))){
var inst_66767 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_66768 = figwheel.client.heads_up.display_warning.call(null,inst_66767);
var state_66795__$1 = state_66795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66795__$1,(33),inst_66768);
} else {
if((state_val_66796 === (10))){
var inst_66725 = (state_66795[(2)]);
var state_66795__$1 = state_66795;
var statearr_66838_66878 = state_66795__$1;
(statearr_66838_66878[(2)] = inst_66725);

(statearr_66838_66878[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66796 === (18))){
var inst_66741 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_66742 = figwheel.client.heads_up.display_exception.call(null,inst_66741);
var state_66795__$1 = state_66795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66795__$1,(21),inst_66742);
} else {
if((state_val_66796 === (37))){
var inst_66778 = (state_66795[(2)]);
var state_66795__$1 = state_66795;
var statearr_66839_66879 = state_66795__$1;
(statearr_66839_66879[(2)] = inst_66778);

(statearr_66839_66879[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66796 === (8))){
var inst_66717 = figwheel.client.heads_up.flash_loaded.call(null);
var state_66795__$1 = state_66795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66795__$1,(11),inst_66717);
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
});})(c__58063__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__57973__auto__,c__58063__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__57974__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__57974__auto____0 = (function (){
var statearr_66840 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66840[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__57974__auto__);

(statearr_66840[(1)] = (1));

return statearr_66840;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__57974__auto____1 = (function (state_66795){
while(true){
var ret_value__57975__auto__ = (function (){try{while(true){
var result__57976__auto__ = switch__57973__auto__.call(null,state_66795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57976__auto__;
}
break;
}
}catch (e66841){if((e66841 instanceof Object)){
var ex__57977__auto__ = e66841;
var statearr_66842_66880 = state_66795;
(statearr_66842_66880[(5)] = ex__57977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66881 = state_66795;
state_66795 = G__66881;
continue;
} else {
return ret_value__57975__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__57974__auto__ = function(state_66795){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__57974__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__57974__auto____1.call(this,state_66795);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__57974__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__57974__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__57974__auto__;
})()
;})(switch__57973__auto__,c__58063__auto__,msg_hist,msg_names,msg))
})();
var state__58065__auto__ = (function (){var statearr_66843 = f__58064__auto__.call(null);
(statearr_66843[(6)] = c__58063__auto__);

return statearr_66843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58065__auto__);
});})(c__58063__auto__,msg_hist,msg_names,msg))
);

return c__58063__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__58063__auto___66910 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58063__auto___66910,ch){
return (function (){
var f__58064__auto__ = (function (){var switch__57973__auto__ = ((function (c__58063__auto___66910,ch){
return (function (state_66896){
var state_val_66897 = (state_66896[(1)]);
if((state_val_66897 === (1))){
var state_66896__$1 = state_66896;
var statearr_66898_66911 = state_66896__$1;
(statearr_66898_66911[(2)] = null);

(statearr_66898_66911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66897 === (2))){
var state_66896__$1 = state_66896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66896__$1,(4),ch);
} else {
if((state_val_66897 === (3))){
var inst_66894 = (state_66896[(2)]);
var state_66896__$1 = state_66896;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66896__$1,inst_66894);
} else {
if((state_val_66897 === (4))){
var inst_66884 = (state_66896[(7)]);
var inst_66884__$1 = (state_66896[(2)]);
var state_66896__$1 = (function (){var statearr_66899 = state_66896;
(statearr_66899[(7)] = inst_66884__$1);

return statearr_66899;
})();
if(cljs.core.truth_(inst_66884__$1)){
var statearr_66900_66912 = state_66896__$1;
(statearr_66900_66912[(1)] = (5));

} else {
var statearr_66901_66913 = state_66896__$1;
(statearr_66901_66913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66897 === (5))){
var inst_66884 = (state_66896[(7)]);
var inst_66886 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_66884);
var state_66896__$1 = state_66896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66896__$1,(8),inst_66886);
} else {
if((state_val_66897 === (6))){
var state_66896__$1 = state_66896;
var statearr_66902_66914 = state_66896__$1;
(statearr_66902_66914[(2)] = null);

(statearr_66902_66914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66897 === (7))){
var inst_66892 = (state_66896[(2)]);
var state_66896__$1 = state_66896;
var statearr_66903_66915 = state_66896__$1;
(statearr_66903_66915[(2)] = inst_66892);

(statearr_66903_66915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66897 === (8))){
var inst_66888 = (state_66896[(2)]);
var state_66896__$1 = (function (){var statearr_66904 = state_66896;
(statearr_66904[(8)] = inst_66888);

return statearr_66904;
})();
var statearr_66905_66916 = state_66896__$1;
(statearr_66905_66916[(2)] = null);

(statearr_66905_66916[(1)] = (2));


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
});})(c__58063__auto___66910,ch))
;
return ((function (switch__57973__auto__,c__58063__auto___66910,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__57974__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__57974__auto____0 = (function (){
var statearr_66906 = [null,null,null,null,null,null,null,null,null];
(statearr_66906[(0)] = figwheel$client$heads_up_plugin_$_state_machine__57974__auto__);

(statearr_66906[(1)] = (1));

return statearr_66906;
});
var figwheel$client$heads_up_plugin_$_state_machine__57974__auto____1 = (function (state_66896){
while(true){
var ret_value__57975__auto__ = (function (){try{while(true){
var result__57976__auto__ = switch__57973__auto__.call(null,state_66896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57976__auto__;
}
break;
}
}catch (e66907){if((e66907 instanceof Object)){
var ex__57977__auto__ = e66907;
var statearr_66908_66917 = state_66896;
(statearr_66908_66917[(5)] = ex__57977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66918 = state_66896;
state_66896 = G__66918;
continue;
} else {
return ret_value__57975__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__57974__auto__ = function(state_66896){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__57974__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__57974__auto____1.call(this,state_66896);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__57974__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__57974__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__57974__auto__;
})()
;})(switch__57973__auto__,c__58063__auto___66910,ch))
})();
var state__58065__auto__ = (function (){var statearr_66909 = f__58064__auto__.call(null);
(statearr_66909[(6)] = c__58063__auto___66910);

return statearr_66909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58065__auto__);
});})(c__58063__auto___66910,ch))
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
var c__58063__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58063__auto__){
return (function (){
var f__58064__auto__ = (function (){var switch__57973__auto__ = ((function (c__58063__auto__){
return (function (state_66924){
var state_val_66925 = (state_66924[(1)]);
if((state_val_66925 === (1))){
var inst_66919 = cljs.core.async.timeout.call(null,(3000));
var state_66924__$1 = state_66924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66924__$1,(2),inst_66919);
} else {
if((state_val_66925 === (2))){
var inst_66921 = (state_66924[(2)]);
var inst_66922 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_66924__$1 = (function (){var statearr_66926 = state_66924;
(statearr_66926[(7)] = inst_66921);

return statearr_66926;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66924__$1,inst_66922);
} else {
return null;
}
}
});})(c__58063__auto__))
;
return ((function (switch__57973__auto__,c__58063__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__57974__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__57974__auto____0 = (function (){
var statearr_66927 = [null,null,null,null,null,null,null,null];
(statearr_66927[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__57974__auto__);

(statearr_66927[(1)] = (1));

return statearr_66927;
});
var figwheel$client$enforce_project_plugin_$_state_machine__57974__auto____1 = (function (state_66924){
while(true){
var ret_value__57975__auto__ = (function (){try{while(true){
var result__57976__auto__ = switch__57973__auto__.call(null,state_66924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57976__auto__;
}
break;
}
}catch (e66928){if((e66928 instanceof Object)){
var ex__57977__auto__ = e66928;
var statearr_66929_66931 = state_66924;
(statearr_66929_66931[(5)] = ex__57977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66932 = state_66924;
state_66924 = G__66932;
continue;
} else {
return ret_value__57975__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__57974__auto__ = function(state_66924){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__57974__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__57974__auto____1.call(this,state_66924);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__57974__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__57974__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__57974__auto__;
})()
;})(switch__57973__auto__,c__58063__auto__))
})();
var state__58065__auto__ = (function (){var statearr_66930 = f__58064__auto__.call(null);
(statearr_66930[(6)] = c__58063__auto__);

return statearr_66930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58065__auto__);
});})(c__58063__auto__))
);

return c__58063__auto__;
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
var c__58063__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58063__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__58064__auto__ = (function (){var switch__57973__auto__ = ((function (c__58063__auto__,figwheel_version,temp__5457__auto__){
return (function (state_66939){
var state_val_66940 = (state_66939[(1)]);
if((state_val_66940 === (1))){
var inst_66933 = cljs.core.async.timeout.call(null,(2000));
var state_66939__$1 = state_66939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66939__$1,(2),inst_66933);
} else {
if((state_val_66940 === (2))){
var inst_66935 = (state_66939[(2)]);
var inst_66936 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_66937 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_66936);
var state_66939__$1 = (function (){var statearr_66941 = state_66939;
(statearr_66941[(7)] = inst_66935);

return statearr_66941;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66939__$1,inst_66937);
} else {
return null;
}
}
});})(c__58063__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__57973__auto__,c__58063__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__57974__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__57974__auto____0 = (function (){
var statearr_66942 = [null,null,null,null,null,null,null,null];
(statearr_66942[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__57974__auto__);

(statearr_66942[(1)] = (1));

return statearr_66942;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__57974__auto____1 = (function (state_66939){
while(true){
var ret_value__57975__auto__ = (function (){try{while(true){
var result__57976__auto__ = switch__57973__auto__.call(null,state_66939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57976__auto__;
}
break;
}
}catch (e66943){if((e66943 instanceof Object)){
var ex__57977__auto__ = e66943;
var statearr_66944_66946 = state_66939;
(statearr_66944_66946[(5)] = ex__57977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66947 = state_66939;
state_66939 = G__66947;
continue;
} else {
return ret_value__57975__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__57974__auto__ = function(state_66939){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__57974__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__57974__auto____1.call(this,state_66939);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__57974__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__57974__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__57974__auto__;
})()
;})(switch__57973__auto__,c__58063__auto__,figwheel_version,temp__5457__auto__))
})();
var state__58065__auto__ = (function (){var statearr_66945 = f__58064__auto__.call(null);
(statearr_66945[(6)] = c__58063__auto__);

return statearr_66945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58065__auto__);
});})(c__58063__auto__,figwheel_version,temp__5457__auto__))
);

return c__58063__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__66948){
var map__66949 = p__66948;
var map__66949__$1 = ((((!((map__66949 == null)))?((((map__66949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66949.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66949):map__66949);
var file = cljs.core.get.call(null,map__66949__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__66949__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__66949__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__66951 = "";
var G__66951__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66951),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__66951);
var G__66951__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66951__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__66951__$1);
if(cljs.core.truth_((function (){var and__52958__auto__ = line;
if(cljs.core.truth_(and__52958__auto__)){
return column;
} else {
return and__52958__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66951__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__66951__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__66952){
var map__66953 = p__66952;
var map__66953__$1 = ((((!((map__66953 == null)))?((((map__66953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66953.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66953):map__66953);
var ed = map__66953__$1;
var formatted_exception = cljs.core.get.call(null,map__66953__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__66953__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__66953__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__66955_66959 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__66956_66960 = null;
var count__66957_66961 = (0);
var i__66958_66962 = (0);
while(true){
if((i__66958_66962 < count__66957_66961)){
var msg_66963 = cljs.core._nth.call(null,chunk__66956_66960,i__66958_66962);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_66963);

var G__66964 = seq__66955_66959;
var G__66965 = chunk__66956_66960;
var G__66966 = count__66957_66961;
var G__66967 = (i__66958_66962 + (1));
seq__66955_66959 = G__66964;
chunk__66956_66960 = G__66965;
count__66957_66961 = G__66966;
i__66958_66962 = G__66967;
continue;
} else {
var temp__5457__auto___66968 = cljs.core.seq.call(null,seq__66955_66959);
if(temp__5457__auto___66968){
var seq__66955_66969__$1 = temp__5457__auto___66968;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66955_66969__$1)){
var c__53901__auto___66970 = cljs.core.chunk_first.call(null,seq__66955_66969__$1);
var G__66971 = cljs.core.chunk_rest.call(null,seq__66955_66969__$1);
var G__66972 = c__53901__auto___66970;
var G__66973 = cljs.core.count.call(null,c__53901__auto___66970);
var G__66974 = (0);
seq__66955_66959 = G__66971;
chunk__66956_66960 = G__66972;
count__66957_66961 = G__66973;
i__66958_66962 = G__66974;
continue;
} else {
var msg_66975 = cljs.core.first.call(null,seq__66955_66969__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_66975);

var G__66976 = cljs.core.next.call(null,seq__66955_66969__$1);
var G__66977 = null;
var G__66978 = (0);
var G__66979 = (0);
seq__66955_66959 = G__66976;
chunk__66956_66960 = G__66977;
count__66957_66961 = G__66978;
i__66958_66962 = G__66979;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__66980){
var map__66981 = p__66980;
var map__66981__$1 = ((((!((map__66981 == null)))?((((map__66981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66981.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66981):map__66981);
var w = map__66981__$1;
var message = cljs.core.get.call(null,map__66981__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__52958__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__52958__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__52958__auto__;
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
var seq__66983 = cljs.core.seq.call(null,plugins);
var chunk__66984 = null;
var count__66985 = (0);
var i__66986 = (0);
while(true){
if((i__66986 < count__66985)){
var vec__66987 = cljs.core._nth.call(null,chunk__66984,i__66986);
var k = cljs.core.nth.call(null,vec__66987,(0),null);
var plugin = cljs.core.nth.call(null,vec__66987,(1),null);
if(cljs.core.truth_(plugin)){
var pl_66993 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__66983,chunk__66984,count__66985,i__66986,pl_66993,vec__66987,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_66993.call(null,msg_hist);
});})(seq__66983,chunk__66984,count__66985,i__66986,pl_66993,vec__66987,k,plugin))
);
} else {
}

var G__66994 = seq__66983;
var G__66995 = chunk__66984;
var G__66996 = count__66985;
var G__66997 = (i__66986 + (1));
seq__66983 = G__66994;
chunk__66984 = G__66995;
count__66985 = G__66996;
i__66986 = G__66997;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__66983);
if(temp__5457__auto__){
var seq__66983__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66983__$1)){
var c__53901__auto__ = cljs.core.chunk_first.call(null,seq__66983__$1);
var G__66998 = cljs.core.chunk_rest.call(null,seq__66983__$1);
var G__66999 = c__53901__auto__;
var G__67000 = cljs.core.count.call(null,c__53901__auto__);
var G__67001 = (0);
seq__66983 = G__66998;
chunk__66984 = G__66999;
count__66985 = G__67000;
i__66986 = G__67001;
continue;
} else {
var vec__66990 = cljs.core.first.call(null,seq__66983__$1);
var k = cljs.core.nth.call(null,vec__66990,(0),null);
var plugin = cljs.core.nth.call(null,vec__66990,(1),null);
if(cljs.core.truth_(plugin)){
var pl_67002 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__66983,chunk__66984,count__66985,i__66986,pl_67002,vec__66990,k,plugin,seq__66983__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_67002.call(null,msg_hist);
});})(seq__66983,chunk__66984,count__66985,i__66986,pl_67002,vec__66990,k,plugin,seq__66983__$1,temp__5457__auto__))
);
} else {
}

var G__67003 = cljs.core.next.call(null,seq__66983__$1);
var G__67004 = null;
var G__67005 = (0);
var G__67006 = (0);
seq__66983 = G__67003;
chunk__66984 = G__67004;
count__66985 = G__67005;
i__66986 = G__67006;
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
var G__67008 = arguments.length;
switch (G__67008) {
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

var seq__67009_67014 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__67010_67015 = null;
var count__67011_67016 = (0);
var i__67012_67017 = (0);
while(true){
if((i__67012_67017 < count__67011_67016)){
var msg_67018 = cljs.core._nth.call(null,chunk__67010_67015,i__67012_67017);
figwheel.client.socket.handle_incoming_message.call(null,msg_67018);

var G__67019 = seq__67009_67014;
var G__67020 = chunk__67010_67015;
var G__67021 = count__67011_67016;
var G__67022 = (i__67012_67017 + (1));
seq__67009_67014 = G__67019;
chunk__67010_67015 = G__67020;
count__67011_67016 = G__67021;
i__67012_67017 = G__67022;
continue;
} else {
var temp__5457__auto___67023 = cljs.core.seq.call(null,seq__67009_67014);
if(temp__5457__auto___67023){
var seq__67009_67024__$1 = temp__5457__auto___67023;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67009_67024__$1)){
var c__53901__auto___67025 = cljs.core.chunk_first.call(null,seq__67009_67024__$1);
var G__67026 = cljs.core.chunk_rest.call(null,seq__67009_67024__$1);
var G__67027 = c__53901__auto___67025;
var G__67028 = cljs.core.count.call(null,c__53901__auto___67025);
var G__67029 = (0);
seq__67009_67014 = G__67026;
chunk__67010_67015 = G__67027;
count__67011_67016 = G__67028;
i__67012_67017 = G__67029;
continue;
} else {
var msg_67030 = cljs.core.first.call(null,seq__67009_67024__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_67030);

var G__67031 = cljs.core.next.call(null,seq__67009_67024__$1);
var G__67032 = null;
var G__67033 = (0);
var G__67034 = (0);
seq__67009_67014 = G__67031;
chunk__67010_67015 = G__67032;
count__67011_67016 = G__67033;
i__67012_67017 = G__67034;
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
var args__54254__auto__ = [];
var len__54247__auto___67039 = arguments.length;
var i__54248__auto___67040 = (0);
while(true){
if((i__54248__auto___67040 < len__54247__auto___67039)){
args__54254__auto__.push((arguments[i__54248__auto___67040]));

var G__67041 = (i__54248__auto___67040 + (1));
i__54248__auto___67040 = G__67041;
continue;
} else {
}
break;
}

var argseq__54255__auto__ = ((((0) < args__54254__auto__.length))?(new cljs.core.IndexedSeq(args__54254__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__54255__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__67036){
var map__67037 = p__67036;
var map__67037__$1 = ((((!((map__67037 == null)))?((((map__67037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67037.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67037):map__67037);
var opts = map__67037__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq67035){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67035));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e67042){if((e67042 instanceof Error)){
var e = e67042;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e67042;

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
return (function (p__67043){
var map__67044 = p__67043;
var map__67044__$1 = ((((!((map__67044 == null)))?((((map__67044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67044.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67044):map__67044);
var msg_name = cljs.core.get.call(null,map__67044__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1524702424207
