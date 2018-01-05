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
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__81105){
var map__81106 = p__81105;
var map__81106__$1 = ((((!((map__81106 == null)))?((((map__81106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81106.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81106):map__81106);
var args = map__81106__$1;
var on_change = cljs.core.get.call(null,map__81106__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__81106__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__81106__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var data_source = cljs.core.get.call(null,map__81106__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__81106__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__81106__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__81106__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__81108 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__74901__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__74901__auto__)){
return or__74901__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__81108,external_model_value);
} else {
return G__81108;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__81109,event){
var map__81110 = p__81109;
var map__81110__$1 = ((((!((map__81110 == null)))?((((map__81110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81110.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81110):map__81110);
var state = map__81110__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__81110__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__81110__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__81112 = event;
var G__81112__$1 = (((G__81112 instanceof cljs.core.Keyword))?G__81112.fqn:null);
switch (G__81112__$1) {
case "input-text-blurred":
var and__74889__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__74889__auto__)){
return cljs.core.not.call(null,rigid_QMARK___$1);
} else {
return and__74889__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
case "input-text-changed":
return cljs.core.not.call(null,(function (){var or__74901__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(or__74901__auto__)){
return or__74901__auto__;
} else {
return rigid_QMARK___$1;
}
})());

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__81112__$1)].join('')));

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__81114,event){
var map__81115 = p__81114;
var map__81115__$1 = ((((!((map__81115 == null)))?((((map__81115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81115.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81115):map__81115);
var state = map__81115__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__81115__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__81117 = event;
var G__81117__$1 = (((G__81117 instanceof cljs.core.Keyword))?G__81117.fqn:null);
switch (G__81117__$1) {
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
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__81119,new_value){
var map__81120 = p__81119;
var map__81120__$1 = ((((!((map__81120 == null)))?((((map__81120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81120.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81120):map__81120);
var state = map__81120__$1;
var on_change = cljs.core.get.call(null,map__81120__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__81122,suggestion){
var map__81123 = p__81122;
var map__81123__$1 = ((((!((map__81123 == null)))?((((map__81123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81123.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81123):map__81123);
var state = map__81123__$1;
var suggestion_to_string = cljs.core.get.call(null,map__81123__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__81125 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__81125,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__81125;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__81126,index){
var map__81127 = p__81126;
var map__81127__$1 = ((((!((map__81127 == null)))?((((map__81127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81127.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81127):map__81127);
var state = map__81127__$1;
var suggestions = cljs.core.get.call(null,map__81127__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__81129 = state;
var G__81129__$1 = cljs.core.assoc.call(null,G__81129,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__81129__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__81129__$1,suggestion):G__81129__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__81129__$2,suggestion);
} else {
return G__81129__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__81130,index){
var map__81131 = p__81130;
var map__81131__$1 = ((((!((map__81131 == null)))?((((map__81131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81131.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81131):map__81131);
var state = map__81131__$1;
var suggestions = cljs.core.get.call(null,map__81131__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__81133){
var map__81134 = p__81133;
var map__81134__$1 = ((((!((map__81134 == null)))?((((map__81134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81134.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81134):map__81134);
var state = map__81134__$1;
var suggestion_active_index = cljs.core.get.call(null,map__81134__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__81136 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__81136,suggestion_active_index);
} else {
return G__81136;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__81137){
var map__81138 = p__81137;
var map__81138__$1 = ((((!((map__81138 == null)))?((((map__81138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81138.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81138):map__81138);
var state = map__81138__$1;
var suggestions = cljs.core.get.call(null,map__81138__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__81138__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__81140 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__81140,re_com.typeahead.wrap.call(null,((function (){var or__74901__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__74901__auto__)){
return or__74901__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__81140;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__81141){
var map__81142 = p__81141;
var map__81142__$1 = ((((!((map__81142 == null)))?((((map__81142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81142.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81142):map__81142);
var state = map__81142__$1;
var suggestions = cljs.core.get.call(null,map__81142__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__81142__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__81144 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__81144,re_com.typeahead.wrap.call(null,((function (){var or__74901__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__74901__auto__)){
return or__74901__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__81144;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__81145 = state;
var G__81145__$1 = re_com.typeahead.clear_suggestions.call(null,G__81145)
;
var G__81145__$2 = cljs.core.assoc.call(null,G__81145__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__81145__$2,null);
} else {
return G__81145__$2;
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
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__81146){
var map__81147 = p__81146;
var map__81147__$1 = ((((!((map__81147 == null)))?((((map__81147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81147.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81147):map__81147);
var state = map__81147__$1;
var input_text = cljs.core.get.call(null,map__81147__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__81147__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var G__81149 = state;
if(cljs.core.truth_((function (){var and__74889__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__74889__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__74889__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,G__81149,input_text);
} else {
return G__81149;
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
var temp__5455__auto__ = data_source.call(null,text,(function (p1__81150_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__81150_SHARP_);
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
var c__79089__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__79089__auto__){
return (function (){
var f__79090__auto__ = (function (){var switch__78999__auto__ = ((function (c__79089__auto__){
return (function (state_81167){
var state_val_81168 = (state_81167[(1)]);
if((state_val_81168 === (1))){
var state_81167__$1 = state_81167;
var statearr_81169_81181 = state_81167__$1;
(statearr_81169_81181[(2)] = null);

(statearr_81169_81181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81168 === (2))){
var state_81167__$1 = state_81167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81167__$1,(4),c_search);
} else {
if((state_val_81168 === (3))){
var inst_81165 = (state_81167[(2)]);
var state_81167__$1 = state_81167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81167__$1,inst_81165);
} else {
if((state_val_81168 === (4))){
var inst_81153 = (state_81167[(7)]);
var inst_81153__$1 = (state_81167[(2)]);
var inst_81154 = cljs.core.deref.call(null,state_atom);
var inst_81155 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_81154);
var inst_81156 = cljs.core._EQ_.call(null,"",inst_81153__$1);
var state_81167__$1 = (function (){var statearr_81170 = state_81167;
(statearr_81170[(7)] = inst_81153__$1);

(statearr_81170[(8)] = inst_81155);

return statearr_81170;
})();
if(inst_81156){
var statearr_81171_81182 = state_81167__$1;
(statearr_81171_81182[(1)] = (5));

} else {
var statearr_81172_81183 = state_81167__$1;
(statearr_81172_81183[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81168 === (5))){
var inst_81158 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var state_81167__$1 = state_81167;
var statearr_81173_81184 = state_81167__$1;
(statearr_81173_81184[(2)] = inst_81158);

(statearr_81173_81184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81168 === (6))){
var inst_81153 = (state_81167[(7)]);
var inst_81155 = (state_81167[(8)]);
var inst_81160 = re_com.typeahead.search_data_source_BANG_.call(null,inst_81155,state_atom,inst_81153);
var state_81167__$1 = state_81167;
var statearr_81174_81185 = state_81167__$1;
(statearr_81174_81185[(2)] = inst_81160);

(statearr_81174_81185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81168 === (7))){
var inst_81162 = (state_81167[(2)]);
var state_81167__$1 = (function (){var statearr_81175 = state_81167;
(statearr_81175[(9)] = inst_81162);

return statearr_81175;
})();
var statearr_81176_81186 = state_81167__$1;
(statearr_81176_81186[(2)] = null);

(statearr_81176_81186[(1)] = (2));


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
});})(c__79089__auto__))
;
return ((function (switch__78999__auto__,c__79089__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__79000__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__79000__auto____0 = (function (){
var statearr_81177 = [null,null,null,null,null,null,null,null,null,null];
(statearr_81177[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__79000__auto__);

(statearr_81177[(1)] = (1));

return statearr_81177;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__79000__auto____1 = (function (state_81167){
while(true){
var ret_value__79001__auto__ = (function (){try{while(true){
var result__79002__auto__ = switch__78999__auto__.call(null,state_81167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__79002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__79002__auto__;
}
break;
}
}catch (e81178){if((e81178 instanceof Object)){
var ex__79003__auto__ = e81178;
var statearr_81179_81187 = state_81167;
(statearr_81179_81187[(5)] = ex__79003__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e81178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__79001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81188 = state_81167;
state_81167 = G__81188;
continue;
} else {
return ret_value__79001__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__79000__auto__ = function(state_81167){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__79000__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__79000__auto____1.call(this,state_81167);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__79000__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__79000__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__79000__auto__;
})()
;})(switch__78999__auto__,c__79089__auto__))
})();
var state__79091__auto__ = (function (){var statearr_81180 = f__79090__auto__.call(null);
(statearr_81180[(6)] = c__79089__auto__);

return statearr_81180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__79091__auto__);
});})(c__79089__auto__))
);

return c__79089__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__81190 = cljs.core.deref.call(null,state_atom);
var map__81190__$1 = ((((!((map__81190 == null)))?((((map__81190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81190.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81190):map__81190);
var state = map__81190__$1;
var input_text = cljs.core.get.call(null,map__81190__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__81190__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_.call(null,new_text)){
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);
}

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__81190,map__81190__$1,state,input_text,c_input){
return (function (p1__81189_SHARP_){
var G__81192 = p1__81189_SHARP_;
var G__81192__$1 = cljs.core.assoc.call(null,G__81192,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__81192__$1,new_text);
} else {
return G__81192__$1;
}
});})(map__81190,map__81190__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__81193 = cljs.core._EQ_;
var expr__81194 = event.which;
if(cljs.core.truth_(pred__81193.call(null,goog.events.KeyCodes.UP,expr__81194))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__81193.call(null,goog.events.KeyCodes.DOWN,expr__81194))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__81193.call(null,goog.events.KeyCodes.ENTER,expr__81194))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__81193.call(null,goog.events.KeyCodes.ESC,expr__81194))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_(pred__81193.call(null,goog.events.KeyCodes.TAB,expr__81194))){
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
var args__76185__auto__ = [];
var len__76178__auto___81218 = arguments.length;
var i__76179__auto___81219 = (0);
while(true){
if((i__76179__auto___81219 < len__76178__auto___81218)){
args__76185__auto__.push((arguments[i__76179__auto___81219]));

var G__81220 = (i__76179__auto___81219 + (1));
i__76179__auto___81219 = G__81220;
continue;
} else {
}
break;
}

var argseq__76186__auto__ = ((((0) < args__76185__auto__.length))?(new cljs.core.IndexedSeq(args__76185__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__76186__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__81198){
var map__81199 = p__81198;
var map__81199__$1 = ((((!((map__81199 == null)))?((((map__81199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81199.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81199):map__81199);
var args = map__81199__$1;
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__81201 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__81201__$1 = ((((!((map__81201 == null)))?((((map__81201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81201.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81201):map__81201);
var state = map__81201__$1;
var c_search = cljs.core.get.call(null,map__81201__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__81201__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__81201,map__81201__$1,state,c_search,c_input,state_atom,input_text_model,map__81199,map__81199__$1,args){
return (function() { 
var G__81221__delegate = function (p__81203){
var map__81204 = p__81203;
var map__81204__$1 = ((((!((map__81204 == null)))?((((map__81204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81204.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81204):map__81204);
var args__$1 = map__81204__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__81204__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__81204__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__81204__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__81204__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__81204__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.call(null,map__81204__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var _on_change = cljs.core.get.call(null,map__81204__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.call(null,map__81204__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__81204__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.call(null,map__81204__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var width = cljs.core.get.call(null,map__81204__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.call(null,map__81204__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var _rigid_QMARK_ = cljs.core.get.call(null,map__81204__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.call(null,map__81204__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.call(null,map__81204__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var status = cljs.core.get.call(null,map__81204__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__81204__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var _attr = cljs.core.get.call(null,map__81204__$1,new cljs.core.Keyword(null,"_attr","_attr",299438964));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__81206 = cljs.core.deref.call(null,state_atom);
var map__81206__$1 = ((((!((map__81206 == null)))?((((map__81206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__81206.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81206):map__81206);
var state__$1 = map__81206__$1;
var suggestions = cljs.core.get.call(null,map__81206__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__81206__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__81206__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__81206__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value.call(null,model);
var width__$1 = (function (){var or__74901__auto__ = width;
if(cljs.core.truth_(or__74901__auto__)){
return or__74901__auto__;
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

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.call(null,re_com.typeahead.input_text_on_key_down_BANG_,state_atom)], null)], null),(cljs.core.truth_((function (){var or__74901__auto__ = cljs.core.not_empty.call(null,suggestions);
if(cljs.core.truth_(or__74901__auto__)){
return or__74901__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__75783__auto__ = ((function (map__81206,map__81206__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__81204,map__81204__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__81201,map__81201__$1,state,c_search,c_input,state_atom,input_text_model,map__81199,map__81199__$1,args){
return (function re_com$typeahead$iter__81208(s__81209){
return (new cljs.core.LazySeq(null,((function (map__81206,map__81206__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__81204,map__81204__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__81201,map__81201__$1,state,c_search,c_input,state_atom,input_text_model,map__81199,map__81199__$1,args){
return (function (){
var s__81209__$1 = s__81209;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__81209__$1);
if(temp__5457__auto__){
var s__81209__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__81209__$2)){
var c__75781__auto__ = cljs.core.chunk_first.call(null,s__81209__$2);
var size__75782__auto__ = cljs.core.count.call(null,c__75781__auto__);
var b__81211 = cljs.core.chunk_buffer.call(null,size__75782__auto__);
if((function (){var i__81210 = (0);
while(true){
if((i__81210 < size__75782__auto__)){
var vec__81212 = cljs.core._nth.call(null,c__75781__auto__,i__81210);
var i = cljs.core.nth.call(null,vec__81212,(0),null);
var s = cljs.core.nth.call(null,vec__81212,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__81211,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__81210,selected_QMARK_,vec__81212,i,s,c__75781__auto__,size__75782__auto__,b__81211,s__81209__$2,temp__5457__auto__,map__81206,map__81206__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__81204,map__81204__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__81201,map__81201__$1,state,c_search,c_input,state_atom,input_text_model,map__81199,map__81199__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__81210,selected_QMARK_,vec__81212,i,s,c__75781__auto__,size__75782__auto__,b__81211,s__81209__$2,temp__5457__auto__,map__81206,map__81206__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__81204,map__81204__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__81201,map__81201__$1,state,c_search,c_input,state_atom,input_text_model,map__81199,map__81199__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__81210,selected_QMARK_,vec__81212,i,s,c__75781__auto__,size__75782__auto__,b__81211,s__81209__$2,temp__5457__auto__,map__81206,map__81206__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__81204,map__81204__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__81201,map__81201__$1,state,c_search,c_input,state_atom,input_text_model,map__81199,map__81199__$1,args){
return (function (p1__81196_SHARP_){
p1__81196_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__81210,selected_QMARK_,vec__81212,i,s,c__75781__auto__,size__75782__auto__,b__81211,s__81209__$2,temp__5457__auto__,map__81206,map__81206__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__81204,map__81204__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__81201,map__81201__$1,state,c_search,c_input,state_atom,input_text_model,map__81199,map__81199__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__81222 = (i__81210 + (1));
i__81210 = G__81222;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__81211),re_com$typeahead$iter__81208.call(null,cljs.core.chunk_rest.call(null,s__81209__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__81211),null);
}
} else {
var vec__81215 = cljs.core.first.call(null,s__81209__$2);
var i = cljs.core.nth.call(null,vec__81215,(0),null);
var s = cljs.core.nth.call(null,vec__81215,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__81215,i,s,s__81209__$2,temp__5457__auto__,map__81206,map__81206__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__81204,map__81204__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__81201,map__81201__$1,state,c_search,c_input,state_atom,input_text_model,map__81199,map__81199__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__81215,i,s,s__81209__$2,temp__5457__auto__,map__81206,map__81206__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__81204,map__81204__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__81201,map__81201__$1,state,c_search,c_input,state_atom,input_text_model,map__81199,map__81199__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__81215,i,s,s__81209__$2,temp__5457__auto__,map__81206,map__81206__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__81204,map__81204__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__81201,map__81201__$1,state,c_search,c_input,state_atom,input_text_model,map__81199,map__81199__$1,args){
return (function (p1__81196_SHARP_){
p1__81196_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__81215,i,s,s__81209__$2,temp__5457__auto__,map__81206,map__81206__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__81204,map__81204__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__81201,map__81201__$1,state,c_search,c_input,state_atom,input_text_model,map__81199,map__81199__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__81208.call(null,cljs.core.rest.call(null,s__81209__$2)));
}
} else {
return null;
}
break;
}
});})(map__81206,map__81206__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__81204,map__81204__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__81201,map__81201__$1,state,c_search,c_input,state_atom,input_text_model,map__81199,map__81199__$1,args))
,null,null));
});})(map__81206,map__81206__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__81204,map__81204__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__81201,map__81201__$1,state,c_search,c_input,state_atom,input_text_model,map__81199,map__81199__$1,args))
;
return iter__75783__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__81221 = function (var_args){
var p__81203 = null;
if (arguments.length > 0) {
var G__81223__i = 0, G__81223__a = new Array(arguments.length -  0);
while (G__81223__i < G__81223__a.length) {G__81223__a[G__81223__i] = arguments[G__81223__i + 0]; ++G__81223__i;}
  p__81203 = new cljs.core.IndexedSeq(G__81223__a,0,null);
} 
return G__81221__delegate.call(this,p__81203);};
G__81221.cljs$lang$maxFixedArity = 0;
G__81221.cljs$lang$applyTo = (function (arglist__81224){
var p__81203 = cljs.core.seq(arglist__81224);
return G__81221__delegate(p__81203);
});
G__81221.cljs$core$IFn$_invoke$arity$variadic = G__81221__delegate;
return G__81221;
})()
;
;})(map__81201,map__81201__$1,state,c_search,c_input,state_atom,input_text_model,map__81199,map__81199__$1,args))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq81197){
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq81197));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__79089__auto___81305 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__79089__auto___81305,out){
return (function (){
var f__79090__auto__ = (function (){var switch__78999__auto__ = ((function (c__79089__auto___81305,out){
return (function (state_81275){
var state_val_81276 = (state_81275[(1)]);
if((state_val_81276 === (7))){
var inst_81230 = (state_81275[(2)]);
var state_81275__$1 = state_81275;
var statearr_81277_81306 = state_81275__$1;
(statearr_81277_81306[(2)] = inst_81230);

(statearr_81277_81306[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81276 === (1))){
var inst_81225 = null;
var state_81275__$1 = (function (){var statearr_81278 = state_81275;
(statearr_81278[(7)] = inst_81225);

return statearr_81278;
})();
var statearr_81279_81307 = state_81275__$1;
(statearr_81279_81307[(2)] = null);

(statearr_81279_81307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81276 === (4))){
var state_81275__$1 = state_81275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_81275__$1,(7),in$);
} else {
if((state_val_81276 === (15))){
var inst_81260 = (state_81275[(2)]);
var state_81275__$1 = (function (){var statearr_81280 = state_81275;
(statearr_81280[(8)] = inst_81260);

return statearr_81280;
})();
var statearr_81281_81308 = state_81275__$1;
(statearr_81281_81308[(2)] = null);

(statearr_81281_81308[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81276 === (13))){
var inst_81248 = (state_81275[(9)]);
var inst_81262 = cljs.core._EQ_.call(null,inst_81248,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_81275__$1 = state_81275;
if(inst_81262){
var statearr_81282_81309 = state_81275__$1;
(statearr_81282_81309[(1)] = (16));

} else {
var statearr_81283_81310 = state_81275__$1;
(statearr_81283_81310[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81276 === (6))){
var inst_81234 = (state_81275[(10)]);
var inst_81233 = (state_81275[(2)]);
var inst_81234__$1 = cljs.core.async.timeout.call(null,ms);
var inst_81242 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_81243 = [in$,inst_81234__$1];
var inst_81244 = (new cljs.core.PersistentVector(null,2,(5),inst_81242,inst_81243,null));
var state_81275__$1 = (function (){var statearr_81284 = state_81275;
(statearr_81284[(11)] = inst_81233);

(statearr_81284[(10)] = inst_81234__$1);

return statearr_81284;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_81275__$1,(8),inst_81244);
} else {
if((state_val_81276 === (17))){
var state_81275__$1 = state_81275;
var statearr_81285_81311 = state_81275__$1;
(statearr_81285_81311[(2)] = null);

(statearr_81285_81311[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81276 === (3))){
var inst_81273 = (state_81275[(2)]);
var state_81275__$1 = state_81275;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81275__$1,inst_81273);
} else {
if((state_val_81276 === (12))){
var inst_81233 = (state_81275[(11)]);
var state_81275__$1 = state_81275;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81275__$1,(15),out,inst_81233);
} else {
if((state_val_81276 === (2))){
var inst_81225 = (state_81275[(7)]);
var inst_81227 = (inst_81225 == null);
var state_81275__$1 = state_81275;
if(cljs.core.truth_(inst_81227)){
var statearr_81286_81312 = state_81275__$1;
(statearr_81286_81312[(1)] = (4));

} else {
var statearr_81287_81313 = state_81275__$1;
(statearr_81287_81313[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81276 === (11))){
var inst_81270 = (state_81275[(2)]);
var inst_81225 = inst_81270;
var state_81275__$1 = (function (){var statearr_81288 = state_81275;
(statearr_81288[(7)] = inst_81225);

return statearr_81288;
})();
var statearr_81289_81314 = state_81275__$1;
(statearr_81289_81314[(2)] = null);

(statearr_81289_81314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81276 === (9))){
var inst_81246 = (state_81275[(12)]);
var inst_81254 = cljs.core.nth.call(null,inst_81246,(0),null);
var inst_81255 = cljs.core.nth.call(null,inst_81246,(1),null);
var state_81275__$1 = (function (){var statearr_81290 = state_81275;
(statearr_81290[(13)] = inst_81255);

return statearr_81290;
})();
var statearr_81291_81315 = state_81275__$1;
(statearr_81291_81315[(2)] = inst_81254);

(statearr_81291_81315[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81276 === (5))){
var inst_81225 = (state_81275[(7)]);
var state_81275__$1 = state_81275;
var statearr_81292_81316 = state_81275__$1;
(statearr_81292_81316[(2)] = inst_81225);

(statearr_81292_81316[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81276 === (14))){
var inst_81268 = (state_81275[(2)]);
var state_81275__$1 = state_81275;
var statearr_81293_81317 = state_81275__$1;
(statearr_81293_81317[(2)] = inst_81268);

(statearr_81293_81317[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81276 === (16))){
var inst_81247 = (state_81275[(14)]);
var state_81275__$1 = state_81275;
var statearr_81294_81318 = state_81275__$1;
(statearr_81294_81318[(2)] = inst_81247);

(statearr_81294_81318[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81276 === (10))){
var inst_81248 = (state_81275[(9)]);
var inst_81234 = (state_81275[(10)]);
var inst_81257 = cljs.core._EQ_.call(null,inst_81248,inst_81234);
var state_81275__$1 = state_81275;
if(inst_81257){
var statearr_81295_81319 = state_81275__$1;
(statearr_81295_81319[(1)] = (12));

} else {
var statearr_81296_81320 = state_81275__$1;
(statearr_81296_81320[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81276 === (18))){
var inst_81266 = (state_81275[(2)]);
var state_81275__$1 = state_81275;
var statearr_81297_81321 = state_81275__$1;
(statearr_81297_81321[(2)] = inst_81266);

(statearr_81297_81321[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81276 === (8))){
var inst_81246 = (state_81275[(12)]);
var inst_81248 = (state_81275[(9)]);
var inst_81246__$1 = (state_81275[(2)]);
var inst_81247 = cljs.core.nth.call(null,inst_81246__$1,(0),null);
var inst_81248__$1 = cljs.core.nth.call(null,inst_81246__$1,(1),null);
var inst_81249 = cljs.core._EQ_.call(null,inst_81248__$1,in$);
var state_81275__$1 = (function (){var statearr_81298 = state_81275;
(statearr_81298[(12)] = inst_81246__$1);

(statearr_81298[(9)] = inst_81248__$1);

(statearr_81298[(14)] = inst_81247);

return statearr_81298;
})();
if(inst_81249){
var statearr_81299_81322 = state_81275__$1;
(statearr_81299_81322[(1)] = (9));

} else {
var statearr_81300_81323 = state_81275__$1;
(statearr_81300_81323[(1)] = (10));

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
});})(c__79089__auto___81305,out))
;
return ((function (switch__78999__auto__,c__79089__auto___81305,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__79000__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__79000__auto____0 = (function (){
var statearr_81301 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_81301[(0)] = re_com$typeahead$debounce_$_state_machine__79000__auto__);

(statearr_81301[(1)] = (1));

return statearr_81301;
});
var re_com$typeahead$debounce_$_state_machine__79000__auto____1 = (function (state_81275){
while(true){
var ret_value__79001__auto__ = (function (){try{while(true){
var result__79002__auto__ = switch__78999__auto__.call(null,state_81275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__79002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__79002__auto__;
}
break;
}
}catch (e81302){if((e81302 instanceof Object)){
var ex__79003__auto__ = e81302;
var statearr_81303_81324 = state_81275;
(statearr_81303_81324[(5)] = ex__79003__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e81302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__79001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81325 = state_81275;
state_81275 = G__81325;
continue;
} else {
return ret_value__79001__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__79000__auto__ = function(state_81275){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__79000__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__79000__auto____1.call(this,state_81275);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$debounce_$_state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__79000__auto____0;
re_com$typeahead$debounce_$_state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__79000__auto____1;
return re_com$typeahead$debounce_$_state_machine__79000__auto__;
})()
;})(switch__78999__auto__,c__79089__auto___81305,out))
})();
var state__79091__auto__ = (function (){var statearr_81304 = f__79090__auto__.call(null);
(statearr_81304[(6)] = c__79089__auto___81305);

return statearr_81304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__79091__auto__);
});})(c__79089__auto___81305,out))
);


return out;
});

//# sourceMappingURL=typeahead.js.map?rel=1515122949231
