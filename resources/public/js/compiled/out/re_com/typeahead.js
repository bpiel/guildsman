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
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__68966){
var map__68967 = p__68966;
var map__68967__$1 = ((((!((map__68967 == null)))?((((map__68967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68967.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68967):map__68967);
var args = map__68967__$1;
var on_change = cljs.core.get.call(null,map__68967__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__68967__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__68967__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var data_source = cljs.core.get.call(null,map__68967__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__68967__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__68967__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__68967__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__68969 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__62761__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__62761__auto__)){
return or__62761__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__68969,external_model_value);
} else {
return G__68969;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__68970,event){
var map__68971 = p__68970;
var map__68971__$1 = ((((!((map__68971 == null)))?((((map__68971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68971.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68971):map__68971);
var state = map__68971__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__68971__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__68971__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__68973 = event;
var G__68973__$1 = (((G__68973 instanceof cljs.core.Keyword))?G__68973.fqn:null);
switch (G__68973__$1) {
case "input-text-blurred":
var and__62749__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__62749__auto__)){
return cljs.core.not.call(null,rigid_QMARK___$1);
} else {
return and__62749__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
case "input-text-changed":
return cljs.core.not.call(null,(function (){var or__62761__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(or__62761__auto__)){
return or__62761__auto__;
} else {
return rigid_QMARK___$1;
}
})());

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68973__$1)].join('')));

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__68975,event){
var map__68976 = p__68975;
var map__68976__$1 = ((((!((map__68976 == null)))?((((map__68976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68976.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68976):map__68976);
var state = map__68976__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__68976__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__68978 = event;
var G__68978__$1 = (((G__68978 instanceof cljs.core.Keyword))?G__68978.fqn:null);
switch (G__68978__$1) {
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
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__68980,new_value){
var map__68981 = p__68980;
var map__68981__$1 = ((((!((map__68981 == null)))?((((map__68981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68981.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68981):map__68981);
var state = map__68981__$1;
var on_change = cljs.core.get.call(null,map__68981__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__68983,suggestion){
var map__68984 = p__68983;
var map__68984__$1 = ((((!((map__68984 == null)))?((((map__68984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68984.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68984):map__68984);
var state = map__68984__$1;
var suggestion_to_string = cljs.core.get.call(null,map__68984__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__68986 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__68986,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__68986;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__68987,index){
var map__68988 = p__68987;
var map__68988__$1 = ((((!((map__68988 == null)))?((((map__68988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68988.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68988):map__68988);
var state = map__68988__$1;
var suggestions = cljs.core.get.call(null,map__68988__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__68990 = state;
var G__68990__$1 = cljs.core.assoc.call(null,G__68990,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__68990__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__68990__$1,suggestion):G__68990__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__68990__$2,suggestion);
} else {
return G__68990__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__68991,index){
var map__68992 = p__68991;
var map__68992__$1 = ((((!((map__68992 == null)))?((((map__68992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68992.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68992):map__68992);
var state = map__68992__$1;
var suggestions = cljs.core.get.call(null,map__68992__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__68994){
var map__68995 = p__68994;
var map__68995__$1 = ((((!((map__68995 == null)))?((((map__68995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68995.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68995):map__68995);
var state = map__68995__$1;
var suggestion_active_index = cljs.core.get.call(null,map__68995__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__68997 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__68997,suggestion_active_index);
} else {
return G__68997;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__68998){
var map__68999 = p__68998;
var map__68999__$1 = ((((!((map__68999 == null)))?((((map__68999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68999.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68999):map__68999);
var state = map__68999__$1;
var suggestions = cljs.core.get.call(null,map__68999__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__68999__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__69001 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__69001,re_com.typeahead.wrap.call(null,((function (){var or__62761__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__62761__auto__)){
return or__62761__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__69001;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__69002){
var map__69003 = p__69002;
var map__69003__$1 = ((((!((map__69003 == null)))?((((map__69003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69003.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69003):map__69003);
var state = map__69003__$1;
var suggestions = cljs.core.get.call(null,map__69003__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__69003__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__69005 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__69005,re_com.typeahead.wrap.call(null,((function (){var or__62761__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__62761__auto__)){
return or__62761__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__69005;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__69006 = state;
var G__69006__$1 = re_com.typeahead.clear_suggestions.call(null,G__69006)
;
var G__69006__$2 = cljs.core.assoc.call(null,G__69006__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__69006__$2,null);
} else {
return G__69006__$2;
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
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__69007){
var map__69008 = p__69007;
var map__69008__$1 = ((((!((map__69008 == null)))?((((map__69008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69008.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69008):map__69008);
var state = map__69008__$1;
var input_text = cljs.core.get.call(null,map__69008__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__69008__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var G__69010 = state;
if(cljs.core.truth_((function (){var and__62749__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__62749__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__62749__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,G__69010,input_text);
} else {
return G__69010;
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
var temp__5455__auto__ = data_source.call(null,text,(function (p1__69011_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__69011_SHARP_);
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
var c__66950__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__66950__auto__){
return (function (){
var f__66951__auto__ = (function (){var switch__66860__auto__ = ((function (c__66950__auto__){
return (function (state_69028){
var state_val_69029 = (state_69028[(1)]);
if((state_val_69029 === (1))){
var state_69028__$1 = state_69028;
var statearr_69030_69042 = state_69028__$1;
(statearr_69030_69042[(2)] = null);

(statearr_69030_69042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69029 === (2))){
var state_69028__$1 = state_69028;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69028__$1,(4),c_search);
} else {
if((state_val_69029 === (3))){
var inst_69026 = (state_69028[(2)]);
var state_69028__$1 = state_69028;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69028__$1,inst_69026);
} else {
if((state_val_69029 === (4))){
var inst_69014 = (state_69028[(7)]);
var inst_69014__$1 = (state_69028[(2)]);
var inst_69015 = cljs.core.deref.call(null,state_atom);
var inst_69016 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_69015);
var inst_69017 = cljs.core._EQ_.call(null,"",inst_69014__$1);
var state_69028__$1 = (function (){var statearr_69031 = state_69028;
(statearr_69031[(7)] = inst_69014__$1);

(statearr_69031[(8)] = inst_69016);

return statearr_69031;
})();
if(inst_69017){
var statearr_69032_69043 = state_69028__$1;
(statearr_69032_69043[(1)] = (5));

} else {
var statearr_69033_69044 = state_69028__$1;
(statearr_69033_69044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69029 === (5))){
var inst_69019 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var state_69028__$1 = state_69028;
var statearr_69034_69045 = state_69028__$1;
(statearr_69034_69045[(2)] = inst_69019);

(statearr_69034_69045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69029 === (6))){
var inst_69014 = (state_69028[(7)]);
var inst_69016 = (state_69028[(8)]);
var inst_69021 = re_com.typeahead.search_data_source_BANG_.call(null,inst_69016,state_atom,inst_69014);
var state_69028__$1 = state_69028;
var statearr_69035_69046 = state_69028__$1;
(statearr_69035_69046[(2)] = inst_69021);

(statearr_69035_69046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69029 === (7))){
var inst_69023 = (state_69028[(2)]);
var state_69028__$1 = (function (){var statearr_69036 = state_69028;
(statearr_69036[(9)] = inst_69023);

return statearr_69036;
})();
var statearr_69037_69047 = state_69028__$1;
(statearr_69037_69047[(2)] = null);

(statearr_69037_69047[(1)] = (2));


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
});})(c__66950__auto__))
;
return ((function (switch__66860__auto__,c__66950__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__66861__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__66861__auto____0 = (function (){
var statearr_69038 = [null,null,null,null,null,null,null,null,null,null];
(statearr_69038[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__66861__auto__);

(statearr_69038[(1)] = (1));

return statearr_69038;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__66861__auto____1 = (function (state_69028){
while(true){
var ret_value__66862__auto__ = (function (){try{while(true){
var result__66863__auto__ = switch__66860__auto__.call(null,state_69028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__66863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66863__auto__;
}
break;
}
}catch (e69039){if((e69039 instanceof Object)){
var ex__66864__auto__ = e69039;
var statearr_69040_69048 = state_69028;
(statearr_69040_69048[(5)] = ex__66864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__66862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69049 = state_69028;
state_69028 = G__69049;
continue;
} else {
return ret_value__66862__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__66861__auto__ = function(state_69028){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__66861__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__66861__auto____1.call(this,state_69028);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__66861__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__66861__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__66861__auto__;
})()
;})(switch__66860__auto__,c__66950__auto__))
})();
var state__66952__auto__ = (function (){var statearr_69041 = f__66951__auto__.call(null);
(statearr_69041[(6)] = c__66950__auto__);

return statearr_69041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__66952__auto__);
});})(c__66950__auto__))
);

return c__66950__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__69051 = cljs.core.deref.call(null,state_atom);
var map__69051__$1 = ((((!((map__69051 == null)))?((((map__69051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69051.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69051):map__69051);
var state = map__69051__$1;
var input_text = cljs.core.get.call(null,map__69051__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__69051__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_.call(null,new_text)){
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);
}

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__69051,map__69051__$1,state,input_text,c_input){
return (function (p1__69050_SHARP_){
var G__69053 = p1__69050_SHARP_;
var G__69053__$1 = cljs.core.assoc.call(null,G__69053,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__69053__$1,new_text);
} else {
return G__69053__$1;
}
});})(map__69051,map__69051__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__69054 = cljs.core._EQ_;
var expr__69055 = event.which;
if(cljs.core.truth_(pred__69054.call(null,goog.events.KeyCodes.UP,expr__69055))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__69054.call(null,goog.events.KeyCodes.DOWN,expr__69055))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__69054.call(null,goog.events.KeyCodes.ENTER,expr__69055))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__69054.call(null,goog.events.KeyCodes.ESC,expr__69055))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_(pred__69054.call(null,goog.events.KeyCodes.TAB,expr__69055))){
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
var args__64045__auto__ = [];
var len__64038__auto___69079 = arguments.length;
var i__64039__auto___69080 = (0);
while(true){
if((i__64039__auto___69080 < len__64038__auto___69079)){
args__64045__auto__.push((arguments[i__64039__auto___69080]));

var G__69081 = (i__64039__auto___69080 + (1));
i__64039__auto___69080 = G__69081;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((0) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__64046__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__69059){
var map__69060 = p__69059;
var map__69060__$1 = ((((!((map__69060 == null)))?((((map__69060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69060.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69060):map__69060);
var args = map__69060__$1;
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__69062 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__69062__$1 = ((((!((map__69062 == null)))?((((map__69062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69062.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69062):map__69062);
var state = map__69062__$1;
var c_search = cljs.core.get.call(null,map__69062__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__69062__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__69062,map__69062__$1,state,c_search,c_input,state_atom,input_text_model,map__69060,map__69060__$1,args){
return (function() { 
var G__69082__delegate = function (p__69064){
var map__69065 = p__69064;
var map__69065__$1 = ((((!((map__69065 == null)))?((((map__69065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69065.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69065):map__69065);
var args__$1 = map__69065__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__69065__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__69065__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__69065__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__69065__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__69065__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.call(null,map__69065__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var _on_change = cljs.core.get.call(null,map__69065__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.call(null,map__69065__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__69065__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.call(null,map__69065__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var width = cljs.core.get.call(null,map__69065__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.call(null,map__69065__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var _rigid_QMARK_ = cljs.core.get.call(null,map__69065__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.call(null,map__69065__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.call(null,map__69065__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var status = cljs.core.get.call(null,map__69065__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__69065__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var _attr = cljs.core.get.call(null,map__69065__$1,new cljs.core.Keyword(null,"_attr","_attr",299438964));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__69067 = cljs.core.deref.call(null,state_atom);
var map__69067__$1 = ((((!((map__69067 == null)))?((((map__69067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69067.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69067):map__69067);
var state__$1 = map__69067__$1;
var suggestions = cljs.core.get.call(null,map__69067__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__69067__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__69067__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__69067__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value.call(null,model);
var width__$1 = (function (){var or__62761__auto__ = width;
if(cljs.core.truth_(or__62761__auto__)){
return or__62761__auto__;
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

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.call(null,re_com.typeahead.input_text_on_key_down_BANG_,state_atom)], null)], null),(cljs.core.truth_((function (){var or__62761__auto__ = cljs.core.not_empty.call(null,suggestions);
if(cljs.core.truth_(or__62761__auto__)){
return or__62761__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__63643__auto__ = ((function (map__69067,map__69067__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__69065,map__69065__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__69062,map__69062__$1,state,c_search,c_input,state_atom,input_text_model,map__69060,map__69060__$1,args){
return (function re_com$typeahead$iter__69069(s__69070){
return (new cljs.core.LazySeq(null,((function (map__69067,map__69067__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__69065,map__69065__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__69062,map__69062__$1,state,c_search,c_input,state_atom,input_text_model,map__69060,map__69060__$1,args){
return (function (){
var s__69070__$1 = s__69070;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__69070__$1);
if(temp__5457__auto__){
var s__69070__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__69070__$2)){
var c__63641__auto__ = cljs.core.chunk_first.call(null,s__69070__$2);
var size__63642__auto__ = cljs.core.count.call(null,c__63641__auto__);
var b__69072 = cljs.core.chunk_buffer.call(null,size__63642__auto__);
if((function (){var i__69071 = (0);
while(true){
if((i__69071 < size__63642__auto__)){
var vec__69073 = cljs.core._nth.call(null,c__63641__auto__,i__69071);
var i = cljs.core.nth.call(null,vec__69073,(0),null);
var s = cljs.core.nth.call(null,vec__69073,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__69072,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__69071,selected_QMARK_,vec__69073,i,s,c__63641__auto__,size__63642__auto__,b__69072,s__69070__$2,temp__5457__auto__,map__69067,map__69067__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__69065,map__69065__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__69062,map__69062__$1,state,c_search,c_input,state_atom,input_text_model,map__69060,map__69060__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__69071,selected_QMARK_,vec__69073,i,s,c__63641__auto__,size__63642__auto__,b__69072,s__69070__$2,temp__5457__auto__,map__69067,map__69067__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__69065,map__69065__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__69062,map__69062__$1,state,c_search,c_input,state_atom,input_text_model,map__69060,map__69060__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__69071,selected_QMARK_,vec__69073,i,s,c__63641__auto__,size__63642__auto__,b__69072,s__69070__$2,temp__5457__auto__,map__69067,map__69067__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__69065,map__69065__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__69062,map__69062__$1,state,c_search,c_input,state_atom,input_text_model,map__69060,map__69060__$1,args){
return (function (p1__69057_SHARP_){
p1__69057_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__69071,selected_QMARK_,vec__69073,i,s,c__63641__auto__,size__63642__auto__,b__69072,s__69070__$2,temp__5457__auto__,map__69067,map__69067__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__69065,map__69065__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__69062,map__69062__$1,state,c_search,c_input,state_atom,input_text_model,map__69060,map__69060__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__69083 = (i__69071 + (1));
i__69071 = G__69083;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__69072),re_com$typeahead$iter__69069.call(null,cljs.core.chunk_rest.call(null,s__69070__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__69072),null);
}
} else {
var vec__69076 = cljs.core.first.call(null,s__69070__$2);
var i = cljs.core.nth.call(null,vec__69076,(0),null);
var s = cljs.core.nth.call(null,vec__69076,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__69076,i,s,s__69070__$2,temp__5457__auto__,map__69067,map__69067__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__69065,map__69065__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__69062,map__69062__$1,state,c_search,c_input,state_atom,input_text_model,map__69060,map__69060__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__69076,i,s,s__69070__$2,temp__5457__auto__,map__69067,map__69067__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__69065,map__69065__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__69062,map__69062__$1,state,c_search,c_input,state_atom,input_text_model,map__69060,map__69060__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__69076,i,s,s__69070__$2,temp__5457__auto__,map__69067,map__69067__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__69065,map__69065__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__69062,map__69062__$1,state,c_search,c_input,state_atom,input_text_model,map__69060,map__69060__$1,args){
return (function (p1__69057_SHARP_){
p1__69057_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__69076,i,s,s__69070__$2,temp__5457__auto__,map__69067,map__69067__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__69065,map__69065__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__69062,map__69062__$1,state,c_search,c_input,state_atom,input_text_model,map__69060,map__69060__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__69069.call(null,cljs.core.rest.call(null,s__69070__$2)));
}
} else {
return null;
}
break;
}
});})(map__69067,map__69067__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__69065,map__69065__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__69062,map__69062__$1,state,c_search,c_input,state_atom,input_text_model,map__69060,map__69060__$1,args))
,null,null));
});})(map__69067,map__69067__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__69065,map__69065__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__69062,map__69062__$1,state,c_search,c_input,state_atom,input_text_model,map__69060,map__69060__$1,args))
;
return iter__63643__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__69082 = function (var_args){
var p__69064 = null;
if (arguments.length > 0) {
var G__69084__i = 0, G__69084__a = new Array(arguments.length -  0);
while (G__69084__i < G__69084__a.length) {G__69084__a[G__69084__i] = arguments[G__69084__i + 0]; ++G__69084__i;}
  p__69064 = new cljs.core.IndexedSeq(G__69084__a,0,null);
} 
return G__69082__delegate.call(this,p__69064);};
G__69082.cljs$lang$maxFixedArity = 0;
G__69082.cljs$lang$applyTo = (function (arglist__69085){
var p__69064 = cljs.core.seq(arglist__69085);
return G__69082__delegate(p__69064);
});
G__69082.cljs$core$IFn$_invoke$arity$variadic = G__69082__delegate;
return G__69082;
})()
;
;})(map__69062,map__69062__$1,state,c_search,c_input,state_atom,input_text_model,map__69060,map__69060__$1,args))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq69058){
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq69058));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__66950__auto___69166 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__66950__auto___69166,out){
return (function (){
var f__66951__auto__ = (function (){var switch__66860__auto__ = ((function (c__66950__auto___69166,out){
return (function (state_69136){
var state_val_69137 = (state_69136[(1)]);
if((state_val_69137 === (7))){
var inst_69091 = (state_69136[(2)]);
var state_69136__$1 = state_69136;
var statearr_69138_69167 = state_69136__$1;
(statearr_69138_69167[(2)] = inst_69091);

(statearr_69138_69167[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69137 === (1))){
var inst_69086 = null;
var state_69136__$1 = (function (){var statearr_69139 = state_69136;
(statearr_69139[(7)] = inst_69086);

return statearr_69139;
})();
var statearr_69140_69168 = state_69136__$1;
(statearr_69140_69168[(2)] = null);

(statearr_69140_69168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69137 === (4))){
var state_69136__$1 = state_69136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69136__$1,(7),in$);
} else {
if((state_val_69137 === (15))){
var inst_69121 = (state_69136[(2)]);
var state_69136__$1 = (function (){var statearr_69141 = state_69136;
(statearr_69141[(8)] = inst_69121);

return statearr_69141;
})();
var statearr_69142_69169 = state_69136__$1;
(statearr_69142_69169[(2)] = null);

(statearr_69142_69169[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69137 === (13))){
var inst_69109 = (state_69136[(9)]);
var inst_69123 = cljs.core._EQ_.call(null,inst_69109,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_69136__$1 = state_69136;
if(inst_69123){
var statearr_69143_69170 = state_69136__$1;
(statearr_69143_69170[(1)] = (16));

} else {
var statearr_69144_69171 = state_69136__$1;
(statearr_69144_69171[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69137 === (6))){
var inst_69095 = (state_69136[(10)]);
var inst_69094 = (state_69136[(2)]);
var inst_69095__$1 = cljs.core.async.timeout.call(null,ms);
var inst_69103 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_69104 = [in$,inst_69095__$1];
var inst_69105 = (new cljs.core.PersistentVector(null,2,(5),inst_69103,inst_69104,null));
var state_69136__$1 = (function (){var statearr_69145 = state_69136;
(statearr_69145[(10)] = inst_69095__$1);

(statearr_69145[(11)] = inst_69094);

return statearr_69145;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_69136__$1,(8),inst_69105);
} else {
if((state_val_69137 === (17))){
var state_69136__$1 = state_69136;
var statearr_69146_69172 = state_69136__$1;
(statearr_69146_69172[(2)] = null);

(statearr_69146_69172[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69137 === (3))){
var inst_69134 = (state_69136[(2)]);
var state_69136__$1 = state_69136;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69136__$1,inst_69134);
} else {
if((state_val_69137 === (12))){
var inst_69094 = (state_69136[(11)]);
var state_69136__$1 = state_69136;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69136__$1,(15),out,inst_69094);
} else {
if((state_val_69137 === (2))){
var inst_69086 = (state_69136[(7)]);
var inst_69088 = (inst_69086 == null);
var state_69136__$1 = state_69136;
if(cljs.core.truth_(inst_69088)){
var statearr_69147_69173 = state_69136__$1;
(statearr_69147_69173[(1)] = (4));

} else {
var statearr_69148_69174 = state_69136__$1;
(statearr_69148_69174[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69137 === (11))){
var inst_69131 = (state_69136[(2)]);
var inst_69086 = inst_69131;
var state_69136__$1 = (function (){var statearr_69149 = state_69136;
(statearr_69149[(7)] = inst_69086);

return statearr_69149;
})();
var statearr_69150_69175 = state_69136__$1;
(statearr_69150_69175[(2)] = null);

(statearr_69150_69175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69137 === (9))){
var inst_69107 = (state_69136[(12)]);
var inst_69115 = cljs.core.nth.call(null,inst_69107,(0),null);
var inst_69116 = cljs.core.nth.call(null,inst_69107,(1),null);
var state_69136__$1 = (function (){var statearr_69151 = state_69136;
(statearr_69151[(13)] = inst_69116);

return statearr_69151;
})();
var statearr_69152_69176 = state_69136__$1;
(statearr_69152_69176[(2)] = inst_69115);

(statearr_69152_69176[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69137 === (5))){
var inst_69086 = (state_69136[(7)]);
var state_69136__$1 = state_69136;
var statearr_69153_69177 = state_69136__$1;
(statearr_69153_69177[(2)] = inst_69086);

(statearr_69153_69177[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69137 === (14))){
var inst_69129 = (state_69136[(2)]);
var state_69136__$1 = state_69136;
var statearr_69154_69178 = state_69136__$1;
(statearr_69154_69178[(2)] = inst_69129);

(statearr_69154_69178[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69137 === (16))){
var inst_69108 = (state_69136[(14)]);
var state_69136__$1 = state_69136;
var statearr_69155_69179 = state_69136__$1;
(statearr_69155_69179[(2)] = inst_69108);

(statearr_69155_69179[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69137 === (10))){
var inst_69095 = (state_69136[(10)]);
var inst_69109 = (state_69136[(9)]);
var inst_69118 = cljs.core._EQ_.call(null,inst_69109,inst_69095);
var state_69136__$1 = state_69136;
if(inst_69118){
var statearr_69156_69180 = state_69136__$1;
(statearr_69156_69180[(1)] = (12));

} else {
var statearr_69157_69181 = state_69136__$1;
(statearr_69157_69181[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69137 === (18))){
var inst_69127 = (state_69136[(2)]);
var state_69136__$1 = state_69136;
var statearr_69158_69182 = state_69136__$1;
(statearr_69158_69182[(2)] = inst_69127);

(statearr_69158_69182[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69137 === (8))){
var inst_69107 = (state_69136[(12)]);
var inst_69109 = (state_69136[(9)]);
var inst_69107__$1 = (state_69136[(2)]);
var inst_69108 = cljs.core.nth.call(null,inst_69107__$1,(0),null);
var inst_69109__$1 = cljs.core.nth.call(null,inst_69107__$1,(1),null);
var inst_69110 = cljs.core._EQ_.call(null,inst_69109__$1,in$);
var state_69136__$1 = (function (){var statearr_69159 = state_69136;
(statearr_69159[(12)] = inst_69107__$1);

(statearr_69159[(14)] = inst_69108);

(statearr_69159[(9)] = inst_69109__$1);

return statearr_69159;
})();
if(inst_69110){
var statearr_69160_69183 = state_69136__$1;
(statearr_69160_69183[(1)] = (9));

} else {
var statearr_69161_69184 = state_69136__$1;
(statearr_69161_69184[(1)] = (10));

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
});})(c__66950__auto___69166,out))
;
return ((function (switch__66860__auto__,c__66950__auto___69166,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__66861__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__66861__auto____0 = (function (){
var statearr_69162 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69162[(0)] = re_com$typeahead$debounce_$_state_machine__66861__auto__);

(statearr_69162[(1)] = (1));

return statearr_69162;
});
var re_com$typeahead$debounce_$_state_machine__66861__auto____1 = (function (state_69136){
while(true){
var ret_value__66862__auto__ = (function (){try{while(true){
var result__66863__auto__ = switch__66860__auto__.call(null,state_69136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__66863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66863__auto__;
}
break;
}
}catch (e69163){if((e69163 instanceof Object)){
var ex__66864__auto__ = e69163;
var statearr_69164_69185 = state_69136;
(statearr_69164_69185[(5)] = ex__66864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__66862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69186 = state_69136;
state_69136 = G__69186;
continue;
} else {
return ret_value__66862__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__66861__auto__ = function(state_69136){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__66861__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__66861__auto____1.call(this,state_69136);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$debounce_$_state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__66861__auto____0;
re_com$typeahead$debounce_$_state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__66861__auto____1;
return re_com$typeahead$debounce_$_state_machine__66861__auto__;
})()
;})(switch__66860__auto__,c__66950__auto___69166,out))
})();
var state__66952__auto__ = (function (){var statearr_69165 = f__66951__auto__.call(null);
(statearr_69165[(6)] = c__66950__auto___69166);

return statearr_69165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__66952__auto__);
});})(c__66950__auto___69166,out))
);


return out;
});

//# sourceMappingURL=typeahead.js.map?rel=1514950327632
