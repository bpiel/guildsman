// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_com.typeahead');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_com.misc');
goog.require('re_com.util');
goog.require('re_com.popover');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('reagent.core');
goog.require('goog.events.KeyCodes');

/**
 * Return an initial value for the typeahead state, given `args`.
 */
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__14963){
var map__14964 = p__14963;
var map__14964__$1 = ((((!((map__14964 == null)))?((((map__14964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14964.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14964):map__14964);
var args = map__14964__$1;
var on_change = cljs.core.get.call(null,map__14964__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__14964__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__14964__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var data_source = cljs.core.get.call(null,map__14964__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__14964__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__14964__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__14964__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__14966 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__8359__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__8359__auto__)){
return or__8359__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__14966,external_model_value);
} else {
return G__14966;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__14967,event){
var map__14968 = p__14967;
var map__14968__$1 = ((((!((map__14968 == null)))?((((map__14968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14968.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14968):map__14968);
var state = map__14968__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__14968__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__14968__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__14970 = event;
var G__14970__$1 = (((G__14970 instanceof cljs.core.Keyword))?G__14970.fqn:null);
switch (G__14970__$1) {
case "input-text-blurred":
var and__8347__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__8347__auto__)){
return cljs.core.not.call(null,rigid_QMARK___$1);
} else {
return and__8347__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
case "input-text-changed":
return cljs.core.not.call(null,(function (){var or__8359__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(or__8359__auto__)){
return or__8359__auto__;
} else {
return rigid_QMARK___$1;
}
})());

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14970__$1)].join('')));

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__14972,event){
var map__14973 = p__14972;
var map__14973__$1 = ((((!((map__14973 == null)))?((((map__14973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14973.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14973):map__14973);
var state = map__14973__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__14973__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__14975 = event;
var G__14975__$1 = (((G__14975 instanceof cljs.core.Keyword))?G__14975.fqn:null);
switch (G__14975__$1) {
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
default:
return false;

}
});
/**
 * Change the `typeahead` `model` value to `new-value`
 */
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__14977,new_value){
var map__14978 = p__14977;
var map__14978__$1 = ((((!((map__14978 == null)))?((((map__14978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14978.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14978):map__14978);
var state = map__14978__$1;
var on_change = cljs.core.get.call(null,map__14978__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__14980,suggestion){
var map__14981 = p__14980;
var map__14981__$1 = ((((!((map__14981 == null)))?((((map__14981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14981.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14981):map__14981);
var state = map__14981__$1;
var suggestion_to_string = cljs.core.get.call(null,map__14981__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__14983 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__14983,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__14983;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__14984,index){
var map__14985 = p__14984;
var map__14985__$1 = ((((!((map__14985 == null)))?((((map__14985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14985.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14985):map__14985);
var state = map__14985__$1;
var suggestions = cljs.core.get.call(null,map__14985__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__14987 = state;
var G__14987__$1 = cljs.core.assoc.call(null,G__14987,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__14987__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__14987__$1,suggestion):G__14987__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__14987__$2,suggestion);
} else {
return G__14987__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__14988,index){
var map__14989 = p__14988;
var map__14989__$1 = ((((!((map__14989 == null)))?((((map__14989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14989.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14989):map__14989);
var state = map__14989__$1;
var suggestions = cljs.core.get.call(null,map__14989__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__14991){
var map__14992 = p__14991;
var map__14992__$1 = ((((!((map__14992 == null)))?((((map__14992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14992.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14992):map__14992);
var state = map__14992__$1;
var suggestion_active_index = cljs.core.get.call(null,map__14992__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__14994 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__14994,suggestion_active_index);
} else {
return G__14994;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__14995){
var map__14996 = p__14995;
var map__14996__$1 = ((((!((map__14996 == null)))?((((map__14996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14996.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14996):map__14996);
var state = map__14996__$1;
var suggestions = cljs.core.get.call(null,map__14996__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__14996__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__14998 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__14998,re_com.typeahead.wrap.call(null,((function (){var or__8359__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__8359__auto__)){
return or__8359__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__14998;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__14999){
var map__15000 = p__14999;
var map__15000__$1 = ((((!((map__15000 == null)))?((((map__15000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15000.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15000):map__15000);
var state = map__15000__$1;
var suggestions = cljs.core.get.call(null,map__15000__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__15000__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__15002 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__15002,re_com.typeahead.wrap.call(null,((function (){var or__8359__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__8359__auto__)){
return or__8359__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__15002;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__15003 = state;
var G__15003__$1 = re_com.typeahead.clear_suggestions.call(null,G__15003)
;
var G__15003__$2 = cljs.core.assoc.call(null,G__15003__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__15003__$2,null);
} else {
return G__15003__$2;
}
});
/**
 * Update state when new suggestions are available
 */
re_com.typeahead.got_suggestions = (function re_com$typeahead$got_suggestions(state,suggestions){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),suggestions,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),null);
});
/**
 * Update state when the `input-text` is about to lose focus.
 */
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__15004){
var map__15005 = p__15004;
var map__15005__$1 = ((((!((map__15005 == null)))?((((map__15005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15005.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15005):map__15005);
var state = map__15005__$1;
var input_text = cljs.core.get.call(null,map__15005__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__15005__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var G__15007 = state;
if(cljs.core.truth_((function (){var and__8347__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__8347__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__8347__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,G__15007,input_text);
} else {
return G__15007;
}
});
/**
 * Update `state` given a new `data-source`. Resets the typeahead since any existing suggestions
 *   came from the old `data-source`.
 */
re_com.typeahead.change_data_source = (function re_com$typeahead$change_data_source(state,data_source){
return cljs.core.assoc.call(null,re_com.typeahead.reset_typeahead.call(null,state),new cljs.core.Keyword(null,"data-source","data-source",-658934676),data_source);
});
/**
 * Update state when the external model value has changed.
 */
re_com.typeahead.external_model_changed = (function re_com$typeahead$external_model_changed(state,new_value){
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,state,new_value),new_value));
});
/**
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__5455__auto__ = data_source.call(null,text,(function (p1__15008_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__15008_SHARP_);
}));
if(cljs.core.truth_(temp__5455__auto__)){
var return_value = temp__5455__auto__;
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__12947__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12947__auto__){
return (function (){
var f__12948__auto__ = (function (){var switch__12857__auto__ = ((function (c__12947__auto__){
return (function (state_15025){
var state_val_15026 = (state_15025[(1)]);
if((state_val_15026 === (1))){
var state_15025__$1 = state_15025;
var statearr_15027_15039 = state_15025__$1;
(statearr_15027_15039[(2)] = null);

(statearr_15027_15039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15026 === (2))){
var state_15025__$1 = state_15025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15025__$1,(4),c_search);
} else {
if((state_val_15026 === (3))){
var inst_15023 = (state_15025[(2)]);
var state_15025__$1 = state_15025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15025__$1,inst_15023);
} else {
if((state_val_15026 === (4))){
var inst_15011 = (state_15025[(7)]);
var inst_15011__$1 = (state_15025[(2)]);
var inst_15012 = cljs.core.deref.call(null,state_atom);
var inst_15013 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_15012);
var inst_15014 = cljs.core._EQ_.call(null,"",inst_15011__$1);
var state_15025__$1 = (function (){var statearr_15028 = state_15025;
(statearr_15028[(8)] = inst_15013);

(statearr_15028[(7)] = inst_15011__$1);

return statearr_15028;
})();
if(inst_15014){
var statearr_15029_15040 = state_15025__$1;
(statearr_15029_15040[(1)] = (5));

} else {
var statearr_15030_15041 = state_15025__$1;
(statearr_15030_15041[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15026 === (5))){
var inst_15016 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var state_15025__$1 = state_15025;
var statearr_15031_15042 = state_15025__$1;
(statearr_15031_15042[(2)] = inst_15016);

(statearr_15031_15042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15026 === (6))){
var inst_15013 = (state_15025[(8)]);
var inst_15011 = (state_15025[(7)]);
var inst_15018 = re_com.typeahead.search_data_source_BANG_.call(null,inst_15013,state_atom,inst_15011);
var state_15025__$1 = state_15025;
var statearr_15032_15043 = state_15025__$1;
(statearr_15032_15043[(2)] = inst_15018);

(statearr_15032_15043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15026 === (7))){
var inst_15020 = (state_15025[(2)]);
var state_15025__$1 = (function (){var statearr_15033 = state_15025;
(statearr_15033[(9)] = inst_15020);

return statearr_15033;
})();
var statearr_15034_15044 = state_15025__$1;
(statearr_15034_15044[(2)] = null);

(statearr_15034_15044[(1)] = (2));


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
});})(c__12947__auto__))
;
return ((function (switch__12857__auto__,c__12947__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__12858__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__12858__auto____0 = (function (){
var statearr_15035 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15035[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__12858__auto__);

(statearr_15035[(1)] = (1));

return statearr_15035;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__12858__auto____1 = (function (state_15025){
while(true){
var ret_value__12859__auto__ = (function (){try{while(true){
var result__12860__auto__ = switch__12857__auto__.call(null,state_15025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12860__auto__;
}
break;
}
}catch (e15036){if((e15036 instanceof Object)){
var ex__12861__auto__ = e15036;
var statearr_15037_15045 = state_15025;
(statearr_15037_15045[(5)] = ex__12861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15046 = state_15025;
state_15025 = G__15046;
continue;
} else {
return ret_value__12859__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__12858__auto__ = function(state_15025){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__12858__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__12858__auto____1.call(this,state_15025);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__12858__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__12858__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__12858__auto__;
})()
;})(switch__12857__auto__,c__12947__auto__))
})();
var state__12949__auto__ = (function (){var statearr_15038 = f__12948__auto__.call(null);
(statearr_15038[(6)] = c__12947__auto__);

return statearr_15038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12949__auto__);
});})(c__12947__auto__))
);

return c__12947__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__15048 = cljs.core.deref.call(null,state_atom);
var map__15048__$1 = ((((!((map__15048 == null)))?((((map__15048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15048.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15048):map__15048);
var state = map__15048__$1;
var input_text = cljs.core.get.call(null,map__15048__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__15048__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_.call(null,new_text)){
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);
}

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__15048,map__15048__$1,state,input_text,c_input){
return (function (p1__15047_SHARP_){
var G__15050 = p1__15047_SHARP_;
var G__15050__$1 = cljs.core.assoc.call(null,G__15050,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__15050__$1,new_text);
} else {
return G__15050__$1;
}
});})(map__15048,map__15048__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__15051 = cljs.core._EQ_;
var expr__15052 = event.which;
if(cljs.core.truth_(pred__15051.call(null,goog.events.KeyCodes.UP,expr__15052))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__15051.call(null,goog.events.KeyCodes.DOWN,expr__15052))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__15051.call(null,goog.events.KeyCodes.ENTER,expr__15052))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__15051.call(null,goog.events.KeyCodes.ESC,expr__15052))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_(pred__15051.call(null,goog.events.KeyCodes.TAB,expr__15052))){
if(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom))))){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);

return event.preventDefault();
} else {
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.input_text_will_blur);
}
} else {
return true;
}
}
}
}
}
});
re_com.typeahead.typeahead_args_desc = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"string -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," when the user chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", invoke it on every character typed.)"], null)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"object | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"The initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),")."]),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(250),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"After receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"render fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"suggestion -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"When a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.input_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"250px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed"], null)], null)], null);
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__9643__auto__ = [];
var len__9636__auto___15076 = arguments.length;
var i__9637__auto___15077 = (0);
while(true){
if((i__9637__auto___15077 < len__9636__auto___15076)){
args__9643__auto__.push((arguments[i__9637__auto___15077]));

var G__15078 = (i__9637__auto___15077 + (1));
i__9637__auto___15077 = G__15078;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((0) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__9644__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__15056){
var map__15057 = p__15056;
var map__15057__$1 = ((((!((map__15057 == null)))?((((map__15057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15057.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15057):map__15057);
var args = map__15057__$1;
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__15059 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__15059__$1 = ((((!((map__15059 == null)))?((((map__15059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15059.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15059):map__15059);
var state = map__15059__$1;
var c_search = cljs.core.get.call(null,map__15059__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__15059__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__15059,map__15059__$1,state,c_search,c_input,state_atom,input_text_model,map__15057,map__15057__$1,args){
return (function() { 
var G__15079__delegate = function (p__15061){
var map__15062 = p__15061;
var map__15062__$1 = ((((!((map__15062 == null)))?((((map__15062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15062.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15062):map__15062);
var args__$1 = map__15062__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__15062__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__15062__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__15062__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__15062__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__15062__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.call(null,map__15062__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var _on_change = cljs.core.get.call(null,map__15062__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.call(null,map__15062__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__15062__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.call(null,map__15062__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var width = cljs.core.get.call(null,map__15062__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.call(null,map__15062__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var _rigid_QMARK_ = cljs.core.get.call(null,map__15062__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.call(null,map__15062__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.call(null,map__15062__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var status = cljs.core.get.call(null,map__15062__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__15062__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var _attr = cljs.core.get.call(null,map__15062__$1,new cljs.core.Keyword(null,"_attr","_attr",299438964));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__15064 = cljs.core.deref.call(null,state_atom);
var map__15064__$1 = ((((!((map__15064 == null)))?((((map__15064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15064.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15064):map__15064);
var state__$1 = map__15064__$1;
var suggestions = cljs.core.get.call(null,map__15064__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__15064__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__15064__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__15064__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value.call(null,model);
var width__$1 = (function (){var or__8359__auto__ = width;
if(cljs.core.truth_(or__8359__auto__)){
return or__8359__auto__;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.call(null,last_data_source,data_source)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.change_data_source,data_source);
} else {
}

if(cljs.core.not_EQ_.call(null,latest_external_model,external_model)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.external_model_changed,latest_external_model);
} else {
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.call(null,re_com.typeahead.input_text_on_key_down_BANG_,state_atom)], null)], null),(cljs.core.truth_((function (){var or__8359__auto__ = cljs.core.not_empty.call(null,suggestions);
if(cljs.core.truth_(or__8359__auto__)){
return or__8359__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__9241__auto__ = ((function (map__15064,map__15064__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__15062,map__15062__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__15059,map__15059__$1,state,c_search,c_input,state_atom,input_text_model,map__15057,map__15057__$1,args){
return (function re_com$typeahead$iter__15066(s__15067){
return (new cljs.core.LazySeq(null,((function (map__15064,map__15064__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__15062,map__15062__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__15059,map__15059__$1,state,c_search,c_input,state_atom,input_text_model,map__15057,map__15057__$1,args){
return (function (){
var s__15067__$1 = s__15067;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__15067__$1);
if(temp__5457__auto__){
var s__15067__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15067__$2)){
var c__9239__auto__ = cljs.core.chunk_first.call(null,s__15067__$2);
var size__9240__auto__ = cljs.core.count.call(null,c__9239__auto__);
var b__15069 = cljs.core.chunk_buffer.call(null,size__9240__auto__);
if((function (){var i__15068 = (0);
while(true){
if((i__15068 < size__9240__auto__)){
var vec__15070 = cljs.core._nth.call(null,c__9239__auto__,i__15068);
var i = cljs.core.nth.call(null,vec__15070,(0),null);
var s = cljs.core.nth.call(null,vec__15070,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__15069,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__15068,selected_QMARK_,vec__15070,i,s,c__9239__auto__,size__9240__auto__,b__15069,s__15067__$2,temp__5457__auto__,map__15064,map__15064__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__15062,map__15062__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__15059,map__15059__$1,state,c_search,c_input,state_atom,input_text_model,map__15057,map__15057__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__15068,selected_QMARK_,vec__15070,i,s,c__9239__auto__,size__9240__auto__,b__15069,s__15067__$2,temp__5457__auto__,map__15064,map__15064__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__15062,map__15062__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__15059,map__15059__$1,state,c_search,c_input,state_atom,input_text_model,map__15057,map__15057__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__15068,selected_QMARK_,vec__15070,i,s,c__9239__auto__,size__9240__auto__,b__15069,s__15067__$2,temp__5457__auto__,map__15064,map__15064__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__15062,map__15062__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__15059,map__15059__$1,state,c_search,c_input,state_atom,input_text_model,map__15057,map__15057__$1,args){
return (function (p1__15054_SHARP_){
p1__15054_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__15068,selected_QMARK_,vec__15070,i,s,c__9239__auto__,size__9240__auto__,b__15069,s__15067__$2,temp__5457__auto__,map__15064,map__15064__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__15062,map__15062__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__15059,map__15059__$1,state,c_search,c_input,state_atom,input_text_model,map__15057,map__15057__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__15080 = (i__15068 + (1));
i__15068 = G__15080;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15069),re_com$typeahead$iter__15066.call(null,cljs.core.chunk_rest.call(null,s__15067__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15069),null);
}
} else {
var vec__15073 = cljs.core.first.call(null,s__15067__$2);
var i = cljs.core.nth.call(null,vec__15073,(0),null);
var s = cljs.core.nth.call(null,vec__15073,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__15073,i,s,s__15067__$2,temp__5457__auto__,map__15064,map__15064__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__15062,map__15062__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__15059,map__15059__$1,state,c_search,c_input,state_atom,input_text_model,map__15057,map__15057__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__15073,i,s,s__15067__$2,temp__5457__auto__,map__15064,map__15064__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__15062,map__15062__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__15059,map__15059__$1,state,c_search,c_input,state_atom,input_text_model,map__15057,map__15057__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__15073,i,s,s__15067__$2,temp__5457__auto__,map__15064,map__15064__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__15062,map__15062__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__15059,map__15059__$1,state,c_search,c_input,state_atom,input_text_model,map__15057,map__15057__$1,args){
return (function (p1__15054_SHARP_){
p1__15054_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__15073,i,s,s__15067__$2,temp__5457__auto__,map__15064,map__15064__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__15062,map__15062__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__15059,map__15059__$1,state,c_search,c_input,state_atom,input_text_model,map__15057,map__15057__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__15066.call(null,cljs.core.rest.call(null,s__15067__$2)));
}
} else {
return null;
}
break;
}
});})(map__15064,map__15064__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__15062,map__15062__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__15059,map__15059__$1,state,c_search,c_input,state_atom,input_text_model,map__15057,map__15057__$1,args))
,null,null));
});})(map__15064,map__15064__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__15062,map__15062__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__15059,map__15059__$1,state,c_search,c_input,state_atom,input_text_model,map__15057,map__15057__$1,args))
;
return iter__9241__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__15079 = function (var_args){
var p__15061 = null;
if (arguments.length > 0) {
var G__15081__i = 0, G__15081__a = new Array(arguments.length -  0);
while (G__15081__i < G__15081__a.length) {G__15081__a[G__15081__i] = arguments[G__15081__i + 0]; ++G__15081__i;}
  p__15061 = new cljs.core.IndexedSeq(G__15081__a,0,null);
} 
return G__15079__delegate.call(this,p__15061);};
G__15079.cljs$lang$maxFixedArity = 0;
G__15079.cljs$lang$applyTo = (function (arglist__15082){
var p__15061 = cljs.core.seq(arglist__15082);
return G__15079__delegate(p__15061);
});
G__15079.cljs$core$IFn$_invoke$arity$variadic = G__15079__delegate;
return G__15079;
})()
;
;})(map__15059,map__15059__$1,state,c_search,c_input,state_atom,input_text_model,map__15057,map__15057__$1,args))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq15055){
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15055));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__12947__auto___15163 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12947__auto___15163,out){
return (function (){
var f__12948__auto__ = (function (){var switch__12857__auto__ = ((function (c__12947__auto___15163,out){
return (function (state_15133){
var state_val_15134 = (state_15133[(1)]);
if((state_val_15134 === (7))){
var inst_15088 = (state_15133[(2)]);
var state_15133__$1 = state_15133;
var statearr_15135_15164 = state_15133__$1;
(statearr_15135_15164[(2)] = inst_15088);

(statearr_15135_15164[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15134 === (1))){
var inst_15083 = null;
var state_15133__$1 = (function (){var statearr_15136 = state_15133;
(statearr_15136[(7)] = inst_15083);

return statearr_15136;
})();
var statearr_15137_15165 = state_15133__$1;
(statearr_15137_15165[(2)] = null);

(statearr_15137_15165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15134 === (4))){
var state_15133__$1 = state_15133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15133__$1,(7),in$);
} else {
if((state_val_15134 === (15))){
var inst_15118 = (state_15133[(2)]);
var state_15133__$1 = (function (){var statearr_15138 = state_15133;
(statearr_15138[(8)] = inst_15118);

return statearr_15138;
})();
var statearr_15139_15166 = state_15133__$1;
(statearr_15139_15166[(2)] = null);

(statearr_15139_15166[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15134 === (13))){
var inst_15106 = (state_15133[(9)]);
var inst_15120 = cljs.core._EQ_.call(null,inst_15106,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_15133__$1 = state_15133;
if(inst_15120){
var statearr_15140_15167 = state_15133__$1;
(statearr_15140_15167[(1)] = (16));

} else {
var statearr_15141_15168 = state_15133__$1;
(statearr_15141_15168[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15134 === (6))){
var inst_15092 = (state_15133[(10)]);
var inst_15091 = (state_15133[(2)]);
var inst_15092__$1 = cljs.core.async.timeout.call(null,ms);
var inst_15100 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15101 = [in$,inst_15092__$1];
var inst_15102 = (new cljs.core.PersistentVector(null,2,(5),inst_15100,inst_15101,null));
var state_15133__$1 = (function (){var statearr_15142 = state_15133;
(statearr_15142[(10)] = inst_15092__$1);

(statearr_15142[(11)] = inst_15091);

return statearr_15142;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_15133__$1,(8),inst_15102);
} else {
if((state_val_15134 === (17))){
var state_15133__$1 = state_15133;
var statearr_15143_15169 = state_15133__$1;
(statearr_15143_15169[(2)] = null);

(statearr_15143_15169[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15134 === (3))){
var inst_15131 = (state_15133[(2)]);
var state_15133__$1 = state_15133;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15133__$1,inst_15131);
} else {
if((state_val_15134 === (12))){
var inst_15091 = (state_15133[(11)]);
var state_15133__$1 = state_15133;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15133__$1,(15),out,inst_15091);
} else {
if((state_val_15134 === (2))){
var inst_15083 = (state_15133[(7)]);
var inst_15085 = (inst_15083 == null);
var state_15133__$1 = state_15133;
if(cljs.core.truth_(inst_15085)){
var statearr_15144_15170 = state_15133__$1;
(statearr_15144_15170[(1)] = (4));

} else {
var statearr_15145_15171 = state_15133__$1;
(statearr_15145_15171[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15134 === (11))){
var inst_15128 = (state_15133[(2)]);
var inst_15083 = inst_15128;
var state_15133__$1 = (function (){var statearr_15146 = state_15133;
(statearr_15146[(7)] = inst_15083);

return statearr_15146;
})();
var statearr_15147_15172 = state_15133__$1;
(statearr_15147_15172[(2)] = null);

(statearr_15147_15172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15134 === (9))){
var inst_15104 = (state_15133[(12)]);
var inst_15112 = cljs.core.nth.call(null,inst_15104,(0),null);
var inst_15113 = cljs.core.nth.call(null,inst_15104,(1),null);
var state_15133__$1 = (function (){var statearr_15148 = state_15133;
(statearr_15148[(13)] = inst_15113);

return statearr_15148;
})();
var statearr_15149_15173 = state_15133__$1;
(statearr_15149_15173[(2)] = inst_15112);

(statearr_15149_15173[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15134 === (5))){
var inst_15083 = (state_15133[(7)]);
var state_15133__$1 = state_15133;
var statearr_15150_15174 = state_15133__$1;
(statearr_15150_15174[(2)] = inst_15083);

(statearr_15150_15174[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15134 === (14))){
var inst_15126 = (state_15133[(2)]);
var state_15133__$1 = state_15133;
var statearr_15151_15175 = state_15133__$1;
(statearr_15151_15175[(2)] = inst_15126);

(statearr_15151_15175[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15134 === (16))){
var inst_15105 = (state_15133[(14)]);
var state_15133__$1 = state_15133;
var statearr_15152_15176 = state_15133__$1;
(statearr_15152_15176[(2)] = inst_15105);

(statearr_15152_15176[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15134 === (10))){
var inst_15106 = (state_15133[(9)]);
var inst_15092 = (state_15133[(10)]);
var inst_15115 = cljs.core._EQ_.call(null,inst_15106,inst_15092);
var state_15133__$1 = state_15133;
if(inst_15115){
var statearr_15153_15177 = state_15133__$1;
(statearr_15153_15177[(1)] = (12));

} else {
var statearr_15154_15178 = state_15133__$1;
(statearr_15154_15178[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15134 === (18))){
var inst_15124 = (state_15133[(2)]);
var state_15133__$1 = state_15133;
var statearr_15155_15179 = state_15133__$1;
(statearr_15155_15179[(2)] = inst_15124);

(statearr_15155_15179[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15134 === (8))){
var inst_15106 = (state_15133[(9)]);
var inst_15104 = (state_15133[(12)]);
var inst_15104__$1 = (state_15133[(2)]);
var inst_15105 = cljs.core.nth.call(null,inst_15104__$1,(0),null);
var inst_15106__$1 = cljs.core.nth.call(null,inst_15104__$1,(1),null);
var inst_15107 = cljs.core._EQ_.call(null,inst_15106__$1,in$);
var state_15133__$1 = (function (){var statearr_15156 = state_15133;
(statearr_15156[(9)] = inst_15106__$1);

(statearr_15156[(14)] = inst_15105);

(statearr_15156[(12)] = inst_15104__$1);

return statearr_15156;
})();
if(inst_15107){
var statearr_15157_15180 = state_15133__$1;
(statearr_15157_15180[(1)] = (9));

} else {
var statearr_15158_15181 = state_15133__$1;
(statearr_15158_15181[(1)] = (10));

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
}
});})(c__12947__auto___15163,out))
;
return ((function (switch__12857__auto__,c__12947__auto___15163,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__12858__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__12858__auto____0 = (function (){
var statearr_15159 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15159[(0)] = re_com$typeahead$debounce_$_state_machine__12858__auto__);

(statearr_15159[(1)] = (1));

return statearr_15159;
});
var re_com$typeahead$debounce_$_state_machine__12858__auto____1 = (function (state_15133){
while(true){
var ret_value__12859__auto__ = (function (){try{while(true){
var result__12860__auto__ = switch__12857__auto__.call(null,state_15133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12860__auto__;
}
break;
}
}catch (e15160){if((e15160 instanceof Object)){
var ex__12861__auto__ = e15160;
var statearr_15161_15182 = state_15133;
(statearr_15161_15182[(5)] = ex__12861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15183 = state_15133;
state_15133 = G__15183;
continue;
} else {
return ret_value__12859__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__12858__auto__ = function(state_15133){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__12858__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__12858__auto____1.call(this,state_15133);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$debounce_$_state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__12858__auto____0;
re_com$typeahead$debounce_$_state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__12858__auto____1;
return re_com$typeahead$debounce_$_state_machine__12858__auto__;
})()
;})(switch__12857__auto__,c__12947__auto___15163,out))
})();
var state__12949__auto__ = (function (){var statearr_15162 = f__12948__auto__.call(null);
(statearr_15162[(6)] = c__12947__auto___15163);

return statearr_15162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12949__auto__);
});})(c__12947__auto___15163,out))
);


return out;
});

//# sourceMappingURL=typeahead.js.map?rel=1521112587478
