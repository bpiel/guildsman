// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.formatters.budgeting');
goog.require('cljs.core');
goog.require('devtools.formatters.templating');
goog.require('devtools.formatters.state');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.markup');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = ((typeof WeakSet !== 'undefined')?(new WeakSet()):cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.conj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__61839__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__61839__auto__["add"]).call(o__61839__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.disj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__61839__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__61839__auto__["delete"]).call(o__61839__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__61839__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__61839__auto__["has"]).call(o__61839__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
return (cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
if(cljs.core.truth_(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml))){
return true;
} else {
return cljs.core.some.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if(!((depth_budget < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second.call(null,object_reference);
var _ = ((cljs.core.object_QMARK_.call(null,data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = (data["config"]);
var G__69311 = data;
var target__61844__auto__ = G__69311;
if(cljs.core.truth_(target__61844__auto__)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["unable to locate object path ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(null)," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__69311)].join('')),"\n","target__61844__auto__"].join('')));
}

(target__61844__auto__["config"] = devtools.formatters.state.set_depth_budget.call(null,config,depth_budget));

return G__69311;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if(!((depth_budget < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_.call(null,json_ml)){
var new_depth_budget_69316 = (depth_budget - (1));
if(cljs.core.truth_(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml))){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_.call(null,json_ml,new_depth_budget_69316);
} else {
var seq__69312_69317 = cljs.core.seq.call(null,json_ml);
var chunk__69313_69318 = null;
var count__69314_69319 = (0);
var i__69315_69320 = (0);
while(true){
if((i__69315_69320 < count__69314_69319)){
var item_69321 = cljs.core._nth.call(null,chunk__69313_69318,i__69315_69320);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_69321,new_depth_budget_69316);

var G__69322 = seq__69312_69317;
var G__69323 = chunk__69313_69318;
var G__69324 = count__69314_69319;
var G__69325 = (i__69315_69320 + (1));
seq__69312_69317 = G__69322;
chunk__69313_69318 = G__69323;
count__69314_69319 = G__69324;
i__69315_69320 = G__69325;
continue;
} else {
var temp__5457__auto___69326 = cljs.core.seq.call(null,seq__69312_69317);
if(temp__5457__auto___69326){
var seq__69312_69327__$1 = temp__5457__auto___69326;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__69312_69327__$1)){
var c__53901__auto___69328 = cljs.core.chunk_first.call(null,seq__69312_69327__$1);
var G__69329 = cljs.core.chunk_rest.call(null,seq__69312_69327__$1);
var G__69330 = c__53901__auto___69328;
var G__69331 = cljs.core.count.call(null,c__53901__auto___69328);
var G__69332 = (0);
seq__69312_69317 = G__69329;
chunk__69313_69318 = G__69330;
count__69314_69319 = G__69331;
i__69315_69320 = G__69332;
continue;
} else {
var item_69333 = cljs.core.first.call(null,seq__69312_69327__$1);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_69333,new_depth_budget_69316);

var G__69334 = cljs.core.next.call(null,seq__69312_69327__$1);
var G__69335 = null;
var G__69336 = (0);
var G__69337 = (0);
seq__69312_69317 = G__69334;
chunk__69313_69318 = G__69335;
count__69314_69319 = G__69336;
i__69315_69320 = G__69337;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_.call(null,value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_.call(null,value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__5455__auto__ = devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__5455__auto__)){
var initial_hierarchy_depth_budget = temp__5455__auto__;
var remaining_depth_budget = (function (){var or__52970__auto__ = devtools.formatters.state.get_depth_budget.call(null);
if(cljs.core.truth_(or__52970__auto__)){
return or__52970__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth.call(null,json_ml);
var final_QMARK_ = cljs.core.not.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_.call(null,json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_.call(null,json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup.call(null,devtools.formatters.markup._LT_header_expander_GT_.call(null,value));
devtools.formatters.budgeting.add_over_budget_value_BANG_.call(null,value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=budgeting.js.map?rel=1524702426978
