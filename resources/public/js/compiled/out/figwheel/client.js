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
}catch (e24861){if((e24861 instanceof Error)){
var e = e24861;
return "Error: Unable to stringify";
} else {
throw e24861;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__24864 = arguments.length;
switch (G__24864) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__24862_SHARP_){
if(typeof p1__24862_SHARP_ === 'string'){
return p1__24862_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__24862_SHARP_);
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
var args__11234__auto__ = [];
var len__11227__auto___24867 = arguments.length;
var i__11228__auto___24868 = (0);
while(true){
if((i__11228__auto___24868 < len__11227__auto___24867)){
args__11234__auto__.push((arguments[i__11228__auto___24868]));

var G__24869 = (i__11228__auto___24868 + (1));
i__11228__auto___24868 = G__24869;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq24866){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24866));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__11234__auto__ = [];
var len__11227__auto___24871 = arguments.length;
var i__11228__auto___24872 = (0);
while(true){
if((i__11228__auto___24872 < len__11227__auto___24871)){
args__11234__auto__.push((arguments[i__11228__auto___24872]));

var G__24873 = (i__11228__auto___24872 + (1));
i__11228__auto___24872 = G__24873;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq24870){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24870));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__24874){
var map__24875 = p__24874;
var map__24875__$1 = ((((!((map__24875 == null)))?((((map__24875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24875.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24875):map__24875);
var message = cljs.core.get.call(null,map__24875__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__24875__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__9950__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__9950__auto__)){
return or__9950__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__9938__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__9938__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__9938__auto__;
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
var c__15393__auto___24954 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15393__auto___24954,ch){
return (function (){
var f__15394__auto__ = (function (){var switch__15303__auto__ = ((function (c__15393__auto___24954,ch){
return (function (state_24926){
var state_val_24927 = (state_24926[(1)]);
if((state_val_24927 === (7))){
var inst_24922 = (state_24926[(2)]);
var state_24926__$1 = state_24926;
var statearr_24928_24955 = state_24926__$1;
(statearr_24928_24955[(2)] = inst_24922);

(statearr_24928_24955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24927 === (1))){
var state_24926__$1 = state_24926;
var statearr_24929_24956 = state_24926__$1;
(statearr_24929_24956[(2)] = null);

(statearr_24929_24956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24927 === (4))){
var inst_24879 = (state_24926[(7)]);
var inst_24879__$1 = (state_24926[(2)]);
var state_24926__$1 = (function (){var statearr_24930 = state_24926;
(statearr_24930[(7)] = inst_24879__$1);

return statearr_24930;
})();
if(cljs.core.truth_(inst_24879__$1)){
var statearr_24931_24957 = state_24926__$1;
(statearr_24931_24957[(1)] = (5));

} else {
var statearr_24932_24958 = state_24926__$1;
(statearr_24932_24958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24927 === (15))){
var inst_24886 = (state_24926[(8)]);
var inst_24901 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24886);
var inst_24902 = cljs.core.first.call(null,inst_24901);
var inst_24903 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_24902);
var inst_24904 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_24903)].join('');
var inst_24905 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_24904);
var state_24926__$1 = state_24926;
var statearr_24933_24959 = state_24926__$1;
(statearr_24933_24959[(2)] = inst_24905);

(statearr_24933_24959[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24927 === (13))){
var inst_24910 = (state_24926[(2)]);
var state_24926__$1 = state_24926;
var statearr_24934_24960 = state_24926__$1;
(statearr_24934_24960[(2)] = inst_24910);

(statearr_24934_24960[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24927 === (6))){
var state_24926__$1 = state_24926;
var statearr_24935_24961 = state_24926__$1;
(statearr_24935_24961[(2)] = null);

(statearr_24935_24961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24927 === (17))){
var inst_24908 = (state_24926[(2)]);
var state_24926__$1 = state_24926;
var statearr_24936_24962 = state_24926__$1;
(statearr_24936_24962[(2)] = inst_24908);

(statearr_24936_24962[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24927 === (3))){
var inst_24924 = (state_24926[(2)]);
var state_24926__$1 = state_24926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24926__$1,inst_24924);
} else {
if((state_val_24927 === (12))){
var inst_24885 = (state_24926[(9)]);
var inst_24899 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_24885,opts);
var state_24926__$1 = state_24926;
if(cljs.core.truth_(inst_24899)){
var statearr_24937_24963 = state_24926__$1;
(statearr_24937_24963[(1)] = (15));

} else {
var statearr_24938_24964 = state_24926__$1;
(statearr_24938_24964[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24927 === (2))){
var state_24926__$1 = state_24926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24926__$1,(4),ch);
} else {
if((state_val_24927 === (11))){
var inst_24886 = (state_24926[(8)]);
var inst_24891 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24892 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_24886);
var inst_24893 = cljs.core.async.timeout.call(null,(1000));
var inst_24894 = [inst_24892,inst_24893];
var inst_24895 = (new cljs.core.PersistentVector(null,2,(5),inst_24891,inst_24894,null));
var state_24926__$1 = state_24926;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24926__$1,(14),inst_24895);
} else {
if((state_val_24927 === (9))){
var inst_24886 = (state_24926[(8)]);
var inst_24912 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_24913 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24886);
var inst_24914 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24913);
var inst_24915 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_24914)].join('');
var inst_24916 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_24915);
var state_24926__$1 = (function (){var statearr_24939 = state_24926;
(statearr_24939[(10)] = inst_24912);

return statearr_24939;
})();
var statearr_24940_24965 = state_24926__$1;
(statearr_24940_24965[(2)] = inst_24916);

(statearr_24940_24965[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24927 === (5))){
var inst_24879 = (state_24926[(7)]);
var inst_24881 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_24882 = (new cljs.core.PersistentArrayMap(null,2,inst_24881,null));
var inst_24883 = (new cljs.core.PersistentHashSet(null,inst_24882,null));
var inst_24884 = figwheel.client.focus_msgs.call(null,inst_24883,inst_24879);
var inst_24885 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_24884);
var inst_24886 = cljs.core.first.call(null,inst_24884);
var inst_24887 = figwheel.client.autoload_QMARK_.call(null);
var state_24926__$1 = (function (){var statearr_24941 = state_24926;
(statearr_24941[(9)] = inst_24885);

(statearr_24941[(8)] = inst_24886);

return statearr_24941;
})();
if(cljs.core.truth_(inst_24887)){
var statearr_24942_24966 = state_24926__$1;
(statearr_24942_24966[(1)] = (8));

} else {
var statearr_24943_24967 = state_24926__$1;
(statearr_24943_24967[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24927 === (14))){
var inst_24897 = (state_24926[(2)]);
var state_24926__$1 = state_24926;
var statearr_24944_24968 = state_24926__$1;
(statearr_24944_24968[(2)] = inst_24897);

(statearr_24944_24968[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24927 === (16))){
var state_24926__$1 = state_24926;
var statearr_24945_24969 = state_24926__$1;
(statearr_24945_24969[(2)] = null);

(statearr_24945_24969[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24927 === (10))){
var inst_24918 = (state_24926[(2)]);
var state_24926__$1 = (function (){var statearr_24946 = state_24926;
(statearr_24946[(11)] = inst_24918);

return statearr_24946;
})();
var statearr_24947_24970 = state_24926__$1;
(statearr_24947_24970[(2)] = null);

(statearr_24947_24970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24927 === (8))){
var inst_24885 = (state_24926[(9)]);
var inst_24889 = figwheel.client.reload_file_state_QMARK_.call(null,inst_24885,opts);
var state_24926__$1 = state_24926;
if(cljs.core.truth_(inst_24889)){
var statearr_24948_24971 = state_24926__$1;
(statearr_24948_24971[(1)] = (11));

} else {
var statearr_24949_24972 = state_24926__$1;
(statearr_24949_24972[(1)] = (12));

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
});})(c__15393__auto___24954,ch))
;
return ((function (switch__15303__auto__,c__15393__auto___24954,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__15304__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__15304__auto____0 = (function (){
var statearr_24950 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24950[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__15304__auto__);

(statearr_24950[(1)] = (1));

return statearr_24950;
});
var figwheel$client$file_reloader_plugin_$_state_machine__15304__auto____1 = (function (state_24926){
while(true){
var ret_value__15305__auto__ = (function (){try{while(true){
var result__15306__auto__ = switch__15303__auto__.call(null,state_24926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15306__auto__;
}
break;
}
}catch (e24951){if((e24951 instanceof Object)){
var ex__15307__auto__ = e24951;
var statearr_24952_24973 = state_24926;
(statearr_24952_24973[(5)] = ex__15307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24974 = state_24926;
state_24926 = G__24974;
continue;
} else {
return ret_value__15305__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__15304__auto__ = function(state_24926){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__15304__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__15304__auto____1.call(this,state_24926);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__15304__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__15304__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__15304__auto__;
})()
;})(switch__15303__auto__,c__15393__auto___24954,ch))
})();
var state__15395__auto__ = (function (){var statearr_24953 = f__15394__auto__.call(null);
(statearr_24953[(6)] = c__15393__auto___24954);

return statearr_24953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15395__auto__);
});})(c__15393__auto___24954,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__24975_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__24975_SHARP_));
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
var base_path_24977 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_24977){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e24976){if((e24976 instanceof Error)){
var e = e24976;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_24977], null));
} else {
var e = e24976;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_24977))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__24978){
var map__24979 = p__24978;
var map__24979__$1 = ((((!((map__24979 == null)))?((((map__24979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24979.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24979):map__24979);
var opts = map__24979__$1;
var build_id = cljs.core.get.call(null,map__24979__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__24979,map__24979__$1,opts,build_id){
return (function (p__24981){
var vec__24982 = p__24981;
var seq__24983 = cljs.core.seq.call(null,vec__24982);
var first__24984 = cljs.core.first.call(null,seq__24983);
var seq__24983__$1 = cljs.core.next.call(null,seq__24983);
var map__24985 = first__24984;
var map__24985__$1 = ((((!((map__24985 == null)))?((((map__24985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24985.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24985):map__24985);
var msg = map__24985__$1;
var msg_name = cljs.core.get.call(null,map__24985__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__24983__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__24982,seq__24983,first__24984,seq__24983__$1,map__24985,map__24985__$1,msg,msg_name,_,map__24979,map__24979__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__24982,seq__24983,first__24984,seq__24983__$1,map__24985,map__24985__$1,msg,msg_name,_,map__24979,map__24979__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__24979,map__24979__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__24987){
var vec__24988 = p__24987;
var seq__24989 = cljs.core.seq.call(null,vec__24988);
var first__24990 = cljs.core.first.call(null,seq__24989);
var seq__24989__$1 = cljs.core.next.call(null,seq__24989);
var map__24991 = first__24990;
var map__24991__$1 = ((((!((map__24991 == null)))?((((map__24991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24991.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24991):map__24991);
var msg = map__24991__$1;
var msg_name = cljs.core.get.call(null,map__24991__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__24989__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__24993){
var map__24994 = p__24993;
var map__24994__$1 = ((((!((map__24994 == null)))?((((map__24994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24994.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24994):map__24994);
var on_compile_warning = cljs.core.get.call(null,map__24994__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__24994__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__24994,map__24994__$1,on_compile_warning,on_compile_fail){
return (function (p__24996){
var vec__24997 = p__24996;
var seq__24998 = cljs.core.seq.call(null,vec__24997);
var first__24999 = cljs.core.first.call(null,seq__24998);
var seq__24998__$1 = cljs.core.next.call(null,seq__24998);
var map__25000 = first__24999;
var map__25000__$1 = ((((!((map__25000 == null)))?((((map__25000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25000.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25000):map__25000);
var msg = map__25000__$1;
var msg_name = cljs.core.get.call(null,map__25000__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__24998__$1;
var pred__25002 = cljs.core._EQ_;
var expr__25003 = msg_name;
if(cljs.core.truth_(pred__25002.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__25003))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__25002.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25003))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__24994,map__24994__$1,on_compile_warning,on_compile_fail))
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
var c__15393__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15393__auto__,msg_hist,msg_names,msg){
return (function (){
var f__15394__auto__ = (function (){var switch__15303__auto__ = ((function (c__15393__auto__,msg_hist,msg_names,msg){
return (function (state_25092){
var state_val_25093 = (state_25092[(1)]);
if((state_val_25093 === (7))){
var inst_25012 = (state_25092[(2)]);
var state_25092__$1 = state_25092;
if(cljs.core.truth_(inst_25012)){
var statearr_25094_25141 = state_25092__$1;
(statearr_25094_25141[(1)] = (8));

} else {
var statearr_25095_25142 = state_25092__$1;
(statearr_25095_25142[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25093 === (20))){
var inst_25086 = (state_25092[(2)]);
var state_25092__$1 = state_25092;
var statearr_25096_25143 = state_25092__$1;
(statearr_25096_25143[(2)] = inst_25086);

(statearr_25096_25143[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25093 === (27))){
var inst_25082 = (state_25092[(2)]);
var state_25092__$1 = state_25092;
var statearr_25097_25144 = state_25092__$1;
(statearr_25097_25144[(2)] = inst_25082);

(statearr_25097_25144[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25093 === (1))){
var inst_25005 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_25092__$1 = state_25092;
if(cljs.core.truth_(inst_25005)){
var statearr_25098_25145 = state_25092__$1;
(statearr_25098_25145[(1)] = (2));

} else {
var statearr_25099_25146 = state_25092__$1;
(statearr_25099_25146[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25093 === (24))){
var inst_25084 = (state_25092[(2)]);
var state_25092__$1 = state_25092;
var statearr_25100_25147 = state_25092__$1;
(statearr_25100_25147[(2)] = inst_25084);

(statearr_25100_25147[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25093 === (4))){
var inst_25090 = (state_25092[(2)]);
var state_25092__$1 = state_25092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25092__$1,inst_25090);
} else {
if((state_val_25093 === (15))){
var inst_25088 = (state_25092[(2)]);
var state_25092__$1 = state_25092;
var statearr_25101_25148 = state_25092__$1;
(statearr_25101_25148[(2)] = inst_25088);

(statearr_25101_25148[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25093 === (21))){
var inst_25041 = (state_25092[(2)]);
var inst_25042 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25043 = figwheel.client.auto_jump_to_error.call(null,opts,inst_25042);
var state_25092__$1 = (function (){var statearr_25102 = state_25092;
(statearr_25102[(7)] = inst_25041);

return statearr_25102;
})();
var statearr_25103_25149 = state_25092__$1;
(statearr_25103_25149[(2)] = inst_25043);

(statearr_25103_25149[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25093 === (31))){
var inst_25071 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_25092__$1 = state_25092;
if(cljs.core.truth_(inst_25071)){
var statearr_25104_25150 = state_25092__$1;
(statearr_25104_25150[(1)] = (34));

} else {
var statearr_25105_25151 = state_25092__$1;
(statearr_25105_25151[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25093 === (32))){
var inst_25080 = (state_25092[(2)]);
var state_25092__$1 = state_25092;
var statearr_25106_25152 = state_25092__$1;
(statearr_25106_25152[(2)] = inst_25080);

(statearr_25106_25152[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25093 === (33))){
var inst_25067 = (state_25092[(2)]);
var inst_25068 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25069 = figwheel.client.auto_jump_to_error.call(null,opts,inst_25068);
var state_25092__$1 = (function (){var statearr_25107 = state_25092;
(statearr_25107[(8)] = inst_25067);

return statearr_25107;
})();
var statearr_25108_25153 = state_25092__$1;
(statearr_25108_25153[(2)] = inst_25069);

(statearr_25108_25153[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25093 === (13))){
var inst_25026 = figwheel.client.heads_up.clear.call(null);
var state_25092__$1 = state_25092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25092__$1,(16),inst_25026);
} else {
if((state_val_25093 === (22))){
var inst_25047 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25048 = figwheel.client.heads_up.append_warning_message.call(null,inst_25047);
var state_25092__$1 = state_25092;
var statearr_25109_25154 = state_25092__$1;
(statearr_25109_25154[(2)] = inst_25048);

(statearr_25109_25154[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25093 === (36))){
var inst_25078 = (state_25092[(2)]);
var state_25092__$1 = state_25092;
var statearr_25110_25155 = state_25092__$1;
(statearr_25110_25155[(2)] = inst_25078);

(statearr_25110_25155[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25093 === (29))){
var inst_25058 = (state_25092[(2)]);
var inst_25059 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25060 = figwheel.client.auto_jump_to_error.call(null,opts,inst_25059);
var state_25092__$1 = (function (){var statearr_25111 = state_25092;
(statearr_25111[(9)] = inst_25058);

return statearr_25111;
})();
var statearr_25112_25156 = state_25092__$1;
(statearr_25112_25156[(2)] = inst_25060);

(statearr_25112_25156[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25093 === (6))){
var inst_25007 = (state_25092[(10)]);
var state_25092__$1 = state_25092;
var statearr_25113_25157 = state_25092__$1;
(statearr_25113_25157[(2)] = inst_25007);

(statearr_25113_25157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25093 === (28))){
var inst_25054 = (state_25092[(2)]);
var inst_25055 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25056 = figwheel.client.heads_up.display_warning.call(null,inst_25055);
var state_25092__$1 = (function (){var statearr_25114 = state_25092;
(statearr_25114[(11)] = inst_25054);

return statearr_25114;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25092__$1,(29),inst_25056);
} else {
if((state_val_25093 === (25))){
var inst_25052 = figwheel.client.heads_up.clear.call(null);
var state_25092__$1 = state_25092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25092__$1,(28),inst_25052);
} else {
if((state_val_25093 === (34))){
var inst_25073 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25092__$1 = state_25092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25092__$1,(37),inst_25073);
} else {
if((state_val_25093 === (17))){
var inst_25032 = (state_25092[(2)]);
var inst_25033 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25034 = figwheel.client.auto_jump_to_error.call(null,opts,inst_25033);
var state_25092__$1 = (function (){var statearr_25115 = state_25092;
(statearr_25115[(12)] = inst_25032);

return statearr_25115;
})();
var statearr_25116_25158 = state_25092__$1;
(statearr_25116_25158[(2)] = inst_25034);

(statearr_25116_25158[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25093 === (3))){
var inst_25024 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_25092__$1 = state_25092;
if(cljs.core.truth_(inst_25024)){
var statearr_25117_25159 = state_25092__$1;
(statearr_25117_25159[(1)] = (13));

} else {
var statearr_25118_25160 = state_25092__$1;
(statearr_25118_25160[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25093 === (12))){
var inst_25020 = (state_25092[(2)]);
var state_25092__$1 = state_25092;
var statearr_25119_25161 = state_25092__$1;
(statearr_25119_25161[(2)] = inst_25020);

(statearr_25119_25161[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25093 === (2))){
var inst_25007 = (state_25092[(10)]);
var inst_25007__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_25092__$1 = (function (){var statearr_25120 = state_25092;
(statearr_25120[(10)] = inst_25007__$1);

return statearr_25120;
})();
if(cljs.core.truth_(inst_25007__$1)){
var statearr_25121_25162 = state_25092__$1;
(statearr_25121_25162[(1)] = (5));

} else {
var statearr_25122_25163 = state_25092__$1;
(statearr_25122_25163[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25093 === (23))){
var inst_25050 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_25092__$1 = state_25092;
if(cljs.core.truth_(inst_25050)){
var statearr_25123_25164 = state_25092__$1;
(statearr_25123_25164[(1)] = (25));

} else {
var statearr_25124_25165 = state_25092__$1;
(statearr_25124_25165[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25093 === (35))){
var state_25092__$1 = state_25092;
var statearr_25125_25166 = state_25092__$1;
(statearr_25125_25166[(2)] = null);

(statearr_25125_25166[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25093 === (19))){
var inst_25045 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_25092__$1 = state_25092;
if(cljs.core.truth_(inst_25045)){
var statearr_25126_25167 = state_25092__$1;
(statearr_25126_25167[(1)] = (22));

} else {
var statearr_25127_25168 = state_25092__$1;
(statearr_25127_25168[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25093 === (11))){
var inst_25016 = (state_25092[(2)]);
var state_25092__$1 = state_25092;
var statearr_25128_25169 = state_25092__$1;
(statearr_25128_25169[(2)] = inst_25016);

(statearr_25128_25169[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25093 === (9))){
var inst_25018 = figwheel.client.heads_up.clear.call(null);
var state_25092__$1 = state_25092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25092__$1,(12),inst_25018);
} else {
if((state_val_25093 === (5))){
var inst_25009 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_25092__$1 = state_25092;
var statearr_25129_25170 = state_25092__$1;
(statearr_25129_25170[(2)] = inst_25009);

(statearr_25129_25170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25093 === (14))){
var inst_25036 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_25092__$1 = state_25092;
if(cljs.core.truth_(inst_25036)){
var statearr_25130_25171 = state_25092__$1;
(statearr_25130_25171[(1)] = (18));

} else {
var statearr_25131_25172 = state_25092__$1;
(statearr_25131_25172[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25093 === (26))){
var inst_25062 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_25092__$1 = state_25092;
if(cljs.core.truth_(inst_25062)){
var statearr_25132_25173 = state_25092__$1;
(statearr_25132_25173[(1)] = (30));

} else {
var statearr_25133_25174 = state_25092__$1;
(statearr_25133_25174[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25093 === (16))){
var inst_25028 = (state_25092[(2)]);
var inst_25029 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25030 = figwheel.client.heads_up.display_exception.call(null,inst_25029);
var state_25092__$1 = (function (){var statearr_25134 = state_25092;
(statearr_25134[(13)] = inst_25028);

return statearr_25134;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25092__$1,(17),inst_25030);
} else {
if((state_val_25093 === (30))){
var inst_25064 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25065 = figwheel.client.heads_up.display_warning.call(null,inst_25064);
var state_25092__$1 = state_25092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25092__$1,(33),inst_25065);
} else {
if((state_val_25093 === (10))){
var inst_25022 = (state_25092[(2)]);
var state_25092__$1 = state_25092;
var statearr_25135_25175 = state_25092__$1;
(statearr_25135_25175[(2)] = inst_25022);

(statearr_25135_25175[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25093 === (18))){
var inst_25038 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25039 = figwheel.client.heads_up.display_exception.call(null,inst_25038);
var state_25092__$1 = state_25092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25092__$1,(21),inst_25039);
} else {
if((state_val_25093 === (37))){
var inst_25075 = (state_25092[(2)]);
var state_25092__$1 = state_25092;
var statearr_25136_25176 = state_25092__$1;
(statearr_25136_25176[(2)] = inst_25075);

(statearr_25136_25176[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25093 === (8))){
var inst_25014 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25092__$1 = state_25092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25092__$1,(11),inst_25014);
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
});})(c__15393__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__15303__auto__,c__15393__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__15304__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__15304__auto____0 = (function (){
var statearr_25137 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25137[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__15304__auto__);

(statearr_25137[(1)] = (1));

return statearr_25137;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__15304__auto____1 = (function (state_25092){
while(true){
var ret_value__15305__auto__ = (function (){try{while(true){
var result__15306__auto__ = switch__15303__auto__.call(null,state_25092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15306__auto__;
}
break;
}
}catch (e25138){if((e25138 instanceof Object)){
var ex__15307__auto__ = e25138;
var statearr_25139_25177 = state_25092;
(statearr_25139_25177[(5)] = ex__15307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25178 = state_25092;
state_25092 = G__25178;
continue;
} else {
return ret_value__15305__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__15304__auto__ = function(state_25092){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__15304__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__15304__auto____1.call(this,state_25092);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__15304__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__15304__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__15304__auto__;
})()
;})(switch__15303__auto__,c__15393__auto__,msg_hist,msg_names,msg))
})();
var state__15395__auto__ = (function (){var statearr_25140 = f__15394__auto__.call(null);
(statearr_25140[(6)] = c__15393__auto__);

return statearr_25140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15395__auto__);
});})(c__15393__auto__,msg_hist,msg_names,msg))
);

return c__15393__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__15393__auto___25207 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15393__auto___25207,ch){
return (function (){
var f__15394__auto__ = (function (){var switch__15303__auto__ = ((function (c__15393__auto___25207,ch){
return (function (state_25193){
var state_val_25194 = (state_25193[(1)]);
if((state_val_25194 === (1))){
var state_25193__$1 = state_25193;
var statearr_25195_25208 = state_25193__$1;
(statearr_25195_25208[(2)] = null);

(statearr_25195_25208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25194 === (2))){
var state_25193__$1 = state_25193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25193__$1,(4),ch);
} else {
if((state_val_25194 === (3))){
var inst_25191 = (state_25193[(2)]);
var state_25193__$1 = state_25193;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25193__$1,inst_25191);
} else {
if((state_val_25194 === (4))){
var inst_25181 = (state_25193[(7)]);
var inst_25181__$1 = (state_25193[(2)]);
var state_25193__$1 = (function (){var statearr_25196 = state_25193;
(statearr_25196[(7)] = inst_25181__$1);

return statearr_25196;
})();
if(cljs.core.truth_(inst_25181__$1)){
var statearr_25197_25209 = state_25193__$1;
(statearr_25197_25209[(1)] = (5));

} else {
var statearr_25198_25210 = state_25193__$1;
(statearr_25198_25210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25194 === (5))){
var inst_25181 = (state_25193[(7)]);
var inst_25183 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_25181);
var state_25193__$1 = state_25193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25193__$1,(8),inst_25183);
} else {
if((state_val_25194 === (6))){
var state_25193__$1 = state_25193;
var statearr_25199_25211 = state_25193__$1;
(statearr_25199_25211[(2)] = null);

(statearr_25199_25211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25194 === (7))){
var inst_25189 = (state_25193[(2)]);
var state_25193__$1 = state_25193;
var statearr_25200_25212 = state_25193__$1;
(statearr_25200_25212[(2)] = inst_25189);

(statearr_25200_25212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25194 === (8))){
var inst_25185 = (state_25193[(2)]);
var state_25193__$1 = (function (){var statearr_25201 = state_25193;
(statearr_25201[(8)] = inst_25185);

return statearr_25201;
})();
var statearr_25202_25213 = state_25193__$1;
(statearr_25202_25213[(2)] = null);

(statearr_25202_25213[(1)] = (2));


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
});})(c__15393__auto___25207,ch))
;
return ((function (switch__15303__auto__,c__15393__auto___25207,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__15304__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__15304__auto____0 = (function (){
var statearr_25203 = [null,null,null,null,null,null,null,null,null];
(statearr_25203[(0)] = figwheel$client$heads_up_plugin_$_state_machine__15304__auto__);

(statearr_25203[(1)] = (1));

return statearr_25203;
});
var figwheel$client$heads_up_plugin_$_state_machine__15304__auto____1 = (function (state_25193){
while(true){
var ret_value__15305__auto__ = (function (){try{while(true){
var result__15306__auto__ = switch__15303__auto__.call(null,state_25193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15306__auto__;
}
break;
}
}catch (e25204){if((e25204 instanceof Object)){
var ex__15307__auto__ = e25204;
var statearr_25205_25214 = state_25193;
(statearr_25205_25214[(5)] = ex__15307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25215 = state_25193;
state_25193 = G__25215;
continue;
} else {
return ret_value__15305__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__15304__auto__ = function(state_25193){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__15304__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__15304__auto____1.call(this,state_25193);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__15304__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__15304__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__15304__auto__;
})()
;})(switch__15303__auto__,c__15393__auto___25207,ch))
})();
var state__15395__auto__ = (function (){var statearr_25206 = f__15394__auto__.call(null);
(statearr_25206[(6)] = c__15393__auto___25207);

return statearr_25206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15395__auto__);
});})(c__15393__auto___25207,ch))
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
var c__15393__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15393__auto__){
return (function (){
var f__15394__auto__ = (function (){var switch__15303__auto__ = ((function (c__15393__auto__){
return (function (state_25221){
var state_val_25222 = (state_25221[(1)]);
if((state_val_25222 === (1))){
var inst_25216 = cljs.core.async.timeout.call(null,(3000));
var state_25221__$1 = state_25221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25221__$1,(2),inst_25216);
} else {
if((state_val_25222 === (2))){
var inst_25218 = (state_25221[(2)]);
var inst_25219 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_25221__$1 = (function (){var statearr_25223 = state_25221;
(statearr_25223[(7)] = inst_25218);

return statearr_25223;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25221__$1,inst_25219);
} else {
return null;
}
}
});})(c__15393__auto__))
;
return ((function (switch__15303__auto__,c__15393__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__15304__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__15304__auto____0 = (function (){
var statearr_25224 = [null,null,null,null,null,null,null,null];
(statearr_25224[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__15304__auto__);

(statearr_25224[(1)] = (1));

return statearr_25224;
});
var figwheel$client$enforce_project_plugin_$_state_machine__15304__auto____1 = (function (state_25221){
while(true){
var ret_value__15305__auto__ = (function (){try{while(true){
var result__15306__auto__ = switch__15303__auto__.call(null,state_25221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15306__auto__;
}
break;
}
}catch (e25225){if((e25225 instanceof Object)){
var ex__15307__auto__ = e25225;
var statearr_25226_25228 = state_25221;
(statearr_25226_25228[(5)] = ex__15307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25229 = state_25221;
state_25221 = G__25229;
continue;
} else {
return ret_value__15305__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__15304__auto__ = function(state_25221){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__15304__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__15304__auto____1.call(this,state_25221);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__15304__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__15304__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__15304__auto__;
})()
;})(switch__15303__auto__,c__15393__auto__))
})();
var state__15395__auto__ = (function (){var statearr_25227 = f__15394__auto__.call(null);
(statearr_25227[(6)] = c__15393__auto__);

return statearr_25227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15395__auto__);
});})(c__15393__auto__))
);

return c__15393__auto__;
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
var c__15393__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15393__auto__,figwheel_version,temp__6738__auto__){
return (function (){
var f__15394__auto__ = (function (){var switch__15303__auto__ = ((function (c__15393__auto__,figwheel_version,temp__6738__auto__){
return (function (state_25236){
var state_val_25237 = (state_25236[(1)]);
if((state_val_25237 === (1))){
var inst_25230 = cljs.core.async.timeout.call(null,(2000));
var state_25236__$1 = state_25236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25236__$1,(2),inst_25230);
} else {
if((state_val_25237 === (2))){
var inst_25232 = (state_25236[(2)]);
var inst_25233 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_25234 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_25233);
var state_25236__$1 = (function (){var statearr_25238 = state_25236;
(statearr_25238[(7)] = inst_25232);

return statearr_25238;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25236__$1,inst_25234);
} else {
return null;
}
}
});})(c__15393__auto__,figwheel_version,temp__6738__auto__))
;
return ((function (switch__15303__auto__,c__15393__auto__,figwheel_version,temp__6738__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__15304__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__15304__auto____0 = (function (){
var statearr_25239 = [null,null,null,null,null,null,null,null];
(statearr_25239[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__15304__auto__);

(statearr_25239[(1)] = (1));

return statearr_25239;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__15304__auto____1 = (function (state_25236){
while(true){
var ret_value__15305__auto__ = (function (){try{while(true){
var result__15306__auto__ = switch__15303__auto__.call(null,state_25236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15306__auto__;
}
break;
}
}catch (e25240){if((e25240 instanceof Object)){
var ex__15307__auto__ = e25240;
var statearr_25241_25243 = state_25236;
(statearr_25241_25243[(5)] = ex__15307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25244 = state_25236;
state_25236 = G__25244;
continue;
} else {
return ret_value__15305__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__15304__auto__ = function(state_25236){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__15304__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__15304__auto____1.call(this,state_25236);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__15304__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__15304__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__15304__auto__;
})()
;})(switch__15303__auto__,c__15393__auto__,figwheel_version,temp__6738__auto__))
})();
var state__15395__auto__ = (function (){var statearr_25242 = f__15394__auto__.call(null);
(statearr_25242[(6)] = c__15393__auto__);

return statearr_25242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15395__auto__);
});})(c__15393__auto__,figwheel_version,temp__6738__auto__))
);

return c__15393__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__25245){
var map__25246 = p__25245;
var map__25246__$1 = ((((!((map__25246 == null)))?((((map__25246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25246.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25246):map__25246);
var file = cljs.core.get.call(null,map__25246__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__25246__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__25246__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__25248 = "";
var G__25248__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25248),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__25248);
var G__25248__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25248__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__25248__$1);
if(cljs.core.truth_((function (){var and__9938__auto__ = line;
if(cljs.core.truth_(and__9938__auto__)){
return column;
} else {
return and__9938__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25248__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__25248__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__25249){
var map__25250 = p__25249;
var map__25250__$1 = ((((!((map__25250 == null)))?((((map__25250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25250.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25250):map__25250);
var ed = map__25250__$1;
var formatted_exception = cljs.core.get.call(null,map__25250__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__25250__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__25250__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__25252_25256 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__25253_25257 = null;
var count__25254_25258 = (0);
var i__25255_25259 = (0);
while(true){
if((i__25255_25259 < count__25254_25258)){
var msg_25260 = cljs.core._nth.call(null,chunk__25253_25257,i__25255_25259);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25260);

var G__25261 = seq__25252_25256;
var G__25262 = chunk__25253_25257;
var G__25263 = count__25254_25258;
var G__25264 = (i__25255_25259 + (1));
seq__25252_25256 = G__25261;
chunk__25253_25257 = G__25262;
count__25254_25258 = G__25263;
i__25255_25259 = G__25264;
continue;
} else {
var temp__6738__auto___25265 = cljs.core.seq.call(null,seq__25252_25256);
if(temp__6738__auto___25265){
var seq__25252_25266__$1 = temp__6738__auto___25265;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25252_25266__$1)){
var c__10881__auto___25267 = cljs.core.chunk_first.call(null,seq__25252_25266__$1);
var G__25268 = cljs.core.chunk_rest.call(null,seq__25252_25266__$1);
var G__25269 = c__10881__auto___25267;
var G__25270 = cljs.core.count.call(null,c__10881__auto___25267);
var G__25271 = (0);
seq__25252_25256 = G__25268;
chunk__25253_25257 = G__25269;
count__25254_25258 = G__25270;
i__25255_25259 = G__25271;
continue;
} else {
var msg_25272 = cljs.core.first.call(null,seq__25252_25266__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25272);

var G__25273 = cljs.core.next.call(null,seq__25252_25266__$1);
var G__25274 = null;
var G__25275 = (0);
var G__25276 = (0);
seq__25252_25256 = G__25273;
chunk__25253_25257 = G__25274;
count__25254_25258 = G__25275;
i__25255_25259 = G__25276;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__25277){
var map__25278 = p__25277;
var map__25278__$1 = ((((!((map__25278 == null)))?((((map__25278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25278.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25278):map__25278);
var w = map__25278__$1;
var message = cljs.core.get.call(null,map__25278__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__9938__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__9938__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__9938__auto__;
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
var seq__25280 = cljs.core.seq.call(null,plugins);
var chunk__25281 = null;
var count__25282 = (0);
var i__25283 = (0);
while(true){
if((i__25283 < count__25282)){
var vec__25284 = cljs.core._nth.call(null,chunk__25281,i__25283);
var k = cljs.core.nth.call(null,vec__25284,(0),null);
var plugin = cljs.core.nth.call(null,vec__25284,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25290 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25280,chunk__25281,count__25282,i__25283,pl_25290,vec__25284,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_25290.call(null,msg_hist);
});})(seq__25280,chunk__25281,count__25282,i__25283,pl_25290,vec__25284,k,plugin))
);
} else {
}

var G__25291 = seq__25280;
var G__25292 = chunk__25281;
var G__25293 = count__25282;
var G__25294 = (i__25283 + (1));
seq__25280 = G__25291;
chunk__25281 = G__25292;
count__25282 = G__25293;
i__25283 = G__25294;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__25280);
if(temp__6738__auto__){
var seq__25280__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25280__$1)){
var c__10881__auto__ = cljs.core.chunk_first.call(null,seq__25280__$1);
var G__25295 = cljs.core.chunk_rest.call(null,seq__25280__$1);
var G__25296 = c__10881__auto__;
var G__25297 = cljs.core.count.call(null,c__10881__auto__);
var G__25298 = (0);
seq__25280 = G__25295;
chunk__25281 = G__25296;
count__25282 = G__25297;
i__25283 = G__25298;
continue;
} else {
var vec__25287 = cljs.core.first.call(null,seq__25280__$1);
var k = cljs.core.nth.call(null,vec__25287,(0),null);
var plugin = cljs.core.nth.call(null,vec__25287,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25299 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25280,chunk__25281,count__25282,i__25283,pl_25299,vec__25287,k,plugin,seq__25280__$1,temp__6738__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_25299.call(null,msg_hist);
});})(seq__25280,chunk__25281,count__25282,i__25283,pl_25299,vec__25287,k,plugin,seq__25280__$1,temp__6738__auto__))
);
} else {
}

var G__25300 = cljs.core.next.call(null,seq__25280__$1);
var G__25301 = null;
var G__25302 = (0);
var G__25303 = (0);
seq__25280 = G__25300;
chunk__25281 = G__25301;
count__25282 = G__25302;
i__25283 = G__25303;
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
var G__25305 = arguments.length;
switch (G__25305) {
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

var seq__25306_25311 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__25307_25312 = null;
var count__25308_25313 = (0);
var i__25309_25314 = (0);
while(true){
if((i__25309_25314 < count__25308_25313)){
var msg_25315 = cljs.core._nth.call(null,chunk__25307_25312,i__25309_25314);
figwheel.client.socket.handle_incoming_message.call(null,msg_25315);

var G__25316 = seq__25306_25311;
var G__25317 = chunk__25307_25312;
var G__25318 = count__25308_25313;
var G__25319 = (i__25309_25314 + (1));
seq__25306_25311 = G__25316;
chunk__25307_25312 = G__25317;
count__25308_25313 = G__25318;
i__25309_25314 = G__25319;
continue;
} else {
var temp__6738__auto___25320 = cljs.core.seq.call(null,seq__25306_25311);
if(temp__6738__auto___25320){
var seq__25306_25321__$1 = temp__6738__auto___25320;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25306_25321__$1)){
var c__10881__auto___25322 = cljs.core.chunk_first.call(null,seq__25306_25321__$1);
var G__25323 = cljs.core.chunk_rest.call(null,seq__25306_25321__$1);
var G__25324 = c__10881__auto___25322;
var G__25325 = cljs.core.count.call(null,c__10881__auto___25322);
var G__25326 = (0);
seq__25306_25311 = G__25323;
chunk__25307_25312 = G__25324;
count__25308_25313 = G__25325;
i__25309_25314 = G__25326;
continue;
} else {
var msg_25327 = cljs.core.first.call(null,seq__25306_25321__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_25327);

var G__25328 = cljs.core.next.call(null,seq__25306_25321__$1);
var G__25329 = null;
var G__25330 = (0);
var G__25331 = (0);
seq__25306_25311 = G__25328;
chunk__25307_25312 = G__25329;
count__25308_25313 = G__25330;
i__25309_25314 = G__25331;
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
var args__11234__auto__ = [];
var len__11227__auto___25336 = arguments.length;
var i__11228__auto___25337 = (0);
while(true){
if((i__11228__auto___25337 < len__11227__auto___25336)){
args__11234__auto__.push((arguments[i__11228__auto___25337]));

var G__25338 = (i__11228__auto___25337 + (1));
i__11228__auto___25337 = G__25338;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__25333){
var map__25334 = p__25333;
var map__25334__$1 = ((((!((map__25334 == null)))?((((map__25334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25334.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25334):map__25334);
var opts = map__25334__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq25332){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25332));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e25339){if((e25339 instanceof Error)){
var e = e25339;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e25339;

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
return (function (p__25340){
var map__25341 = p__25340;
var map__25341__$1 = ((((!((map__25341 == null)))?((((map__25341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25341.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25341):map__25341);
var msg_name = cljs.core.get.call(null,map__25341__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1506917877025
