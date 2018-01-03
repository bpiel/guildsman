// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.reporter');
goog.require('cljs.core');
goog.require('devtools.util');
devtools.reporter.issues_url = "https://github.com/binaryage/cljs-devtools/issues";
devtools.reporter.report_internal_error_BANG_ = (function devtools$reporter$report_internal_error_BANG_(var_args){
var args__64045__auto__ = [];
var len__64038__auto___77798 = arguments.length;
var i__64039__auto___77799 = (0);
while(true){
if((i__64039__auto___77799 < len__64038__auto___77798)){
args__64045__auto__.push((arguments[i__64039__auto___77799]));

var G__77800 = (i__64039__auto___77799 + (1));
i__64039__auto___77799 = G__77800;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((1) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((1)),(0),null)):null);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__64046__auto__);
});

devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (e,p__77793){
var vec__77794 = p__77793;
var context = cljs.core.nth.call(null,vec__77794,(0),null);
var footer = cljs.core.nth.call(null,vec__77794,(1),null);
try{var message = (((e instanceof Error))?(function (){var or__62761__auto__ = e.message;
if(cljs.core.truth_(or__62761__auto__)){
return or__62761__auto__;
} else {
return e;
}
})():e);
var header = ["%cCLJS DevTools Error%c%s","background-color:red;color:white;font-weight:bold;padding:0px 3px;border-radius:2px;","color:red",[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('')];
var context_msg = ["In ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.get_lib_info.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(context)?[", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(context),"."].join(''):".")),"\n\n"].join('');
var footer_msg = ((!((footer == null)))?footer:["\n\n","---\n","Please report the issue here: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.reporter.issues_url)].join(''));
var details = [context_msg,e,footer_msg];
var c = console;
var group_collapsed = (c["groupCollapsed"]);
var log = (c["log"]);
var group_end = (c["groupEnd"]);
if(cljs.core.truth_(group_collapsed)){
} else {
throw (new Error("Assert failed: group-collapsed"));
}

if(cljs.core.truth_(log)){
} else {
throw (new Error("Assert failed: log"));
}

if(cljs.core.truth_(group_end)){
} else {
throw (new Error("Assert failed: group-end"));
}

group_collapsed.apply(c,header);

log.apply(c,details);

return group_end.call(c);
}catch (e77797){var e__$1 = e77797;
return console.error("FATAL: report-internal-error! failed",e__$1);
}});

devtools.reporter.report_internal_error_BANG_.cljs$lang$maxFixedArity = (1);

devtools.reporter.report_internal_error_BANG_.cljs$lang$applyTo = (function (seq77791){
var G__77792 = cljs.core.first.call(null,seq77791);
var seq77791__$1 = cljs.core.next.call(null,seq77791);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__77792,seq77791__$1);
});


//# sourceMappingURL=reporter.js.map?rel=1514950345531
