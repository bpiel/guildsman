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
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__17390){
var map__17391 = p__17390;
var map__17391__$1 = ((((!((map__17391 == null)))?((((map__17391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17391.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17391):map__17391);
var args = map__17391__$1;
var on_change = cljs.core.get.call(null,map__17391__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__17391__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__17391__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var data_source = cljs.core.get.call(null,map__17391__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__17391__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__17391__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__17391__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__17393 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__9950__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__9950__auto__)){
return or__9950__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__17393,external_model_value);
} else {
return G__17393;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__17394,event){
var map__17395 = p__17394;
var map__17395__$1 = ((((!((map__17395 == null)))?((((map__17395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17395.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17395):map__17395);
var state = map__17395__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__17395__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__17395__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__17397 = event;
var G__17397__$1 = (((G__17397 instanceof cljs.core.Keyword))?G__17397.fqn:null);
switch (G__17397__$1) {
case "input-text-blurred":
var and__9938__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__9938__auto__)){
return cljs.core.not.call(null,rigid_QMARK___$1);
} else {
return and__9938__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
case "input-text-changed":
return cljs.core.not.call(null,(function (){var or__9950__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(or__9950__auto__)){
return or__9950__auto__;
} else {
return rigid_QMARK___$1;
}
})());

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17397__$1)].join('')));

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__17399,event){
var map__17400 = p__17399;
var map__17400__$1 = ((((!((map__17400 == null)))?((((map__17400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17400.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17400):map__17400);
var state = map__17400__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__17400__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__17402 = event;
var G__17402__$1 = (((G__17402 instanceof cljs.core.Keyword))?G__17402.fqn:null);
switch (G__17402__$1) {
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
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__17404,new_value){
var map__17405 = p__17404;
var map__17405__$1 = ((((!((map__17405 == null)))?((((map__17405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17405.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17405):map__17405);
var state = map__17405__$1;
var on_change = cljs.core.get.call(null,map__17405__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__17407,suggestion){
var map__17408 = p__17407;
var map__17408__$1 = ((((!((map__17408 == null)))?((((map__17408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17408.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17408):map__17408);
var state = map__17408__$1;
var suggestion_to_string = cljs.core.get.call(null,map__17408__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__17410 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__17410,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__17410;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__17411,index){
var map__17412 = p__17411;
var map__17412__$1 = ((((!((map__17412 == null)))?((((map__17412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17412.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17412):map__17412);
var state = map__17412__$1;
var suggestions = cljs.core.get.call(null,map__17412__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__17414 = state;
var G__17414__$1 = cljs.core.assoc.call(null,G__17414,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__17414__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__17414__$1,suggestion):G__17414__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__17414__$2,suggestion);
} else {
return G__17414__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__17415,index){
var map__17416 = p__17415;
var map__17416__$1 = ((((!((map__17416 == null)))?((((map__17416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17416.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17416):map__17416);
var state = map__17416__$1;
var suggestions = cljs.core.get.call(null,map__17416__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__17418){
var map__17419 = p__17418;
var map__17419__$1 = ((((!((map__17419 == null)))?((((map__17419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17419.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17419):map__17419);
var state = map__17419__$1;
var suggestion_active_index = cljs.core.get.call(null,map__17419__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__17421 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__17421,suggestion_active_index);
} else {
return G__17421;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__17422){
var map__17423 = p__17422;
var map__17423__$1 = ((((!((map__17423 == null)))?((((map__17423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17423.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17423):map__17423);
var state = map__17423__$1;
var suggestions = cljs.core.get.call(null,map__17423__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__17423__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__17425 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__17425,re_com.typeahead.wrap.call(null,((function (){var or__9950__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__9950__auto__)){
return or__9950__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__17425;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__17426){
var map__17427 = p__17426;
var map__17427__$1 = ((((!((map__17427 == null)))?((((map__17427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17427.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17427):map__17427);
var state = map__17427__$1;
var suggestions = cljs.core.get.call(null,map__17427__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__17427__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__17429 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__17429,re_com.typeahead.wrap.call(null,((function (){var or__9950__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__9950__auto__)){
return or__9950__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__17429;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__17430 = state;
var G__17430__$1 = re_com.typeahead.clear_suggestions.call(null,G__17430)
;
var G__17430__$2 = cljs.core.assoc.call(null,G__17430__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__17430__$2,null);
} else {
return G__17430__$2;
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
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__17431){
var map__17432 = p__17431;
var map__17432__$1 = ((((!((map__17432 == null)))?((((map__17432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17432.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17432):map__17432);
var state = map__17432__$1;
var input_text = cljs.core.get.call(null,map__17432__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__17432__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var G__17434 = state;
if(cljs.core.truth_((function (){var and__9938__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__9938__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__9938__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,G__17434,input_text);
} else {
return G__17434;
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
var temp__6736__auto__ = data_source.call(null,text,(function (p1__17435_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__17435_SHARP_);
}));
if(cljs.core.truth_(temp__6736__auto__)){
var return_value = temp__6736__auto__;
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__15393__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15393__auto__){
return (function (){
var f__15394__auto__ = (function (){var switch__15303__auto__ = ((function (c__15393__auto__){
return (function (state_17452){
var state_val_17453 = (state_17452[(1)]);
if((state_val_17453 === (1))){
var state_17452__$1 = state_17452;
var statearr_17454_17466 = state_17452__$1;
(statearr_17454_17466[(2)] = null);

(statearr_17454_17466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17453 === (2))){
var state_17452__$1 = state_17452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17452__$1,(4),c_search);
} else {
if((state_val_17453 === (3))){
var inst_17450 = (state_17452[(2)]);
var state_17452__$1 = state_17452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17452__$1,inst_17450);
} else {
if((state_val_17453 === (4))){
var inst_17438 = (state_17452[(7)]);
var inst_17438__$1 = (state_17452[(2)]);
var inst_17439 = cljs.core.deref.call(null,state_atom);
var inst_17440 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_17439);
var inst_17441 = cljs.core._EQ_.call(null,"",inst_17438__$1);
var state_17452__$1 = (function (){var statearr_17455 = state_17452;
(statearr_17455[(8)] = inst_17440);

(statearr_17455[(7)] = inst_17438__$1);

return statearr_17455;
})();
if(inst_17441){
var statearr_17456_17467 = state_17452__$1;
(statearr_17456_17467[(1)] = (5));

} else {
var statearr_17457_17468 = state_17452__$1;
(statearr_17457_17468[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17453 === (5))){
var inst_17443 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var state_17452__$1 = state_17452;
var statearr_17458_17469 = state_17452__$1;
(statearr_17458_17469[(2)] = inst_17443);

(statearr_17458_17469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17453 === (6))){
var inst_17440 = (state_17452[(8)]);
var inst_17438 = (state_17452[(7)]);
var inst_17445 = re_com.typeahead.search_data_source_BANG_.call(null,inst_17440,state_atom,inst_17438);
var state_17452__$1 = state_17452;
var statearr_17459_17470 = state_17452__$1;
(statearr_17459_17470[(2)] = inst_17445);

(statearr_17459_17470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17453 === (7))){
var inst_17447 = (state_17452[(2)]);
var state_17452__$1 = (function (){var statearr_17460 = state_17452;
(statearr_17460[(9)] = inst_17447);

return statearr_17460;
})();
var statearr_17461_17471 = state_17452__$1;
(statearr_17461_17471[(2)] = null);

(statearr_17461_17471[(1)] = (2));


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
});})(c__15393__auto__))
;
return ((function (switch__15303__auto__,c__15393__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__15304__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__15304__auto____0 = (function (){
var statearr_17462 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17462[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__15304__auto__);

(statearr_17462[(1)] = (1));

return statearr_17462;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__15304__auto____1 = (function (state_17452){
while(true){
var ret_value__15305__auto__ = (function (){try{while(true){
var result__15306__auto__ = switch__15303__auto__.call(null,state_17452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15306__auto__;
}
break;
}
}catch (e17463){if((e17463 instanceof Object)){
var ex__15307__auto__ = e17463;
var statearr_17464_17472 = state_17452;
(statearr_17464_17472[(5)] = ex__15307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17473 = state_17452;
state_17452 = G__17473;
continue;
} else {
return ret_value__15305__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__15304__auto__ = function(state_17452){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__15304__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__15304__auto____1.call(this,state_17452);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__15304__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__15304__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__15304__auto__;
})()
;})(switch__15303__auto__,c__15393__auto__))
})();
var state__15395__auto__ = (function (){var statearr_17465 = f__15394__auto__.call(null);
(statearr_17465[(6)] = c__15393__auto__);

return statearr_17465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15395__auto__);
});})(c__15393__auto__))
);

return c__15393__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__17475 = cljs.core.deref.call(null,state_atom);
var map__17475__$1 = ((((!((map__17475 == null)))?((((map__17475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17475.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17475):map__17475);
var state = map__17475__$1;
var input_text = cljs.core.get.call(null,map__17475__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__17475__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_.call(null,new_text)){
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);
}

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__17475,map__17475__$1,state,input_text,c_input){
return (function (p1__17474_SHARP_){
var G__17477 = p1__17474_SHARP_;
var G__17477__$1 = cljs.core.assoc.call(null,G__17477,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__17477__$1,new_text);
} else {
return G__17477__$1;
}
});})(map__17475,map__17475__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__17478 = cljs.core._EQ_;
var expr__17479 = event.which;
if(cljs.core.truth_(pred__17478.call(null,goog.events.KeyCodes.UP,expr__17479))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__17478.call(null,goog.events.KeyCodes.DOWN,expr__17479))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__17478.call(null,goog.events.KeyCodes.ENTER,expr__17479))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__17478.call(null,goog.events.KeyCodes.ESC,expr__17479))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_(pred__17478.call(null,goog.events.KeyCodes.TAB,expr__17479))){
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
var args__11234__auto__ = [];
var len__11227__auto___17503 = arguments.length;
var i__11228__auto___17504 = (0);
while(true){
if((i__11228__auto___17504 < len__11227__auto___17503)){
args__11234__auto__.push((arguments[i__11228__auto___17504]));

var G__17505 = (i__11228__auto___17504 + (1));
i__11228__auto___17504 = G__17505;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((0) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__11235__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__17483){
var map__17484 = p__17483;
var map__17484__$1 = ((((!((map__17484 == null)))?((((map__17484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17484.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17484):map__17484);
var args = map__17484__$1;
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__17486 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__17486__$1 = ((((!((map__17486 == null)))?((((map__17486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17486.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17486):map__17486);
var state = map__17486__$1;
var c_search = cljs.core.get.call(null,map__17486__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__17486__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__17486,map__17486__$1,state,c_search,c_input,state_atom,input_text_model,map__17484,map__17484__$1,args){
return (function() { 
var G__17506__delegate = function (p__17488){
var map__17489 = p__17488;
var map__17489__$1 = ((((!((map__17489 == null)))?((((map__17489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17489.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17489):map__17489);
var args__$1 = map__17489__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__17489__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__17489__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__17489__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__17489__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__17489__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.call(null,map__17489__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var _on_change = cljs.core.get.call(null,map__17489__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.call(null,map__17489__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__17489__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.call(null,map__17489__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var width = cljs.core.get.call(null,map__17489__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.call(null,map__17489__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var _rigid_QMARK_ = cljs.core.get.call(null,map__17489__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.call(null,map__17489__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.call(null,map__17489__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var status = cljs.core.get.call(null,map__17489__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__17489__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var _attr = cljs.core.get.call(null,map__17489__$1,new cljs.core.Keyword(null,"_attr","_attr",299438964));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__17491 = cljs.core.deref.call(null,state_atom);
var map__17491__$1 = ((((!((map__17491 == null)))?((((map__17491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17491.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17491):map__17491);
var state__$1 = map__17491__$1;
var suggestions = cljs.core.get.call(null,map__17491__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__17491__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__17491__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__17491__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value.call(null,model);
var width__$1 = (function (){var or__9950__auto__ = width;
if(cljs.core.truth_(or__9950__auto__)){
return or__9950__auto__;
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

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.call(null,re_com.typeahead.input_text_on_key_down_BANG_,state_atom)], null)], null),(cljs.core.truth_((function (){var or__9950__auto__ = cljs.core.not_empty.call(null,suggestions);
if(cljs.core.truth_(or__9950__auto__)){
return or__9950__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__10832__auto__ = ((function (map__17491,map__17491__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17489,map__17489__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__17486,map__17486__$1,state,c_search,c_input,state_atom,input_text_model,map__17484,map__17484__$1,args){
return (function re_com$typeahead$iter__17493(s__17494){
return (new cljs.core.LazySeq(null,((function (map__17491,map__17491__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17489,map__17489__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__17486,map__17486__$1,state,c_search,c_input,state_atom,input_text_model,map__17484,map__17484__$1,args){
return (function (){
var s__17494__$1 = s__17494;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__17494__$1);
if(temp__6738__auto__){
var s__17494__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17494__$2)){
var c__10830__auto__ = cljs.core.chunk_first.call(null,s__17494__$2);
var size__10831__auto__ = cljs.core.count.call(null,c__10830__auto__);
var b__17496 = cljs.core.chunk_buffer.call(null,size__10831__auto__);
if((function (){var i__17495 = (0);
while(true){
if((i__17495 < size__10831__auto__)){
var vec__17497 = cljs.core._nth.call(null,c__10830__auto__,i__17495);
var i = cljs.core.nth.call(null,vec__17497,(0),null);
var s = cljs.core.nth.call(null,vec__17497,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__17496,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__17495,selected_QMARK_,vec__17497,i,s,c__10830__auto__,size__10831__auto__,b__17496,s__17494__$2,temp__6738__auto__,map__17491,map__17491__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17489,map__17489__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__17486,map__17486__$1,state,c_search,c_input,state_atom,input_text_model,map__17484,map__17484__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__17495,selected_QMARK_,vec__17497,i,s,c__10830__auto__,size__10831__auto__,b__17496,s__17494__$2,temp__6738__auto__,map__17491,map__17491__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17489,map__17489__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__17486,map__17486__$1,state,c_search,c_input,state_atom,input_text_model,map__17484,map__17484__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__17495,selected_QMARK_,vec__17497,i,s,c__10830__auto__,size__10831__auto__,b__17496,s__17494__$2,temp__6738__auto__,map__17491,map__17491__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17489,map__17489__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__17486,map__17486__$1,state,c_search,c_input,state_atom,input_text_model,map__17484,map__17484__$1,args){
return (function (p1__17481_SHARP_){
p1__17481_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__17495,selected_QMARK_,vec__17497,i,s,c__10830__auto__,size__10831__auto__,b__17496,s__17494__$2,temp__6738__auto__,map__17491,map__17491__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17489,map__17489__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__17486,map__17486__$1,state,c_search,c_input,state_atom,input_text_model,map__17484,map__17484__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__17507 = (i__17495 + (1));
i__17495 = G__17507;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17496),re_com$typeahead$iter__17493.call(null,cljs.core.chunk_rest.call(null,s__17494__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17496),null);
}
} else {
var vec__17500 = cljs.core.first.call(null,s__17494__$2);
var i = cljs.core.nth.call(null,vec__17500,(0),null);
var s = cljs.core.nth.call(null,vec__17500,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__17500,i,s,s__17494__$2,temp__6738__auto__,map__17491,map__17491__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17489,map__17489__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__17486,map__17486__$1,state,c_search,c_input,state_atom,input_text_model,map__17484,map__17484__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__17500,i,s,s__17494__$2,temp__6738__auto__,map__17491,map__17491__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17489,map__17489__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__17486,map__17486__$1,state,c_search,c_input,state_atom,input_text_model,map__17484,map__17484__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__17500,i,s,s__17494__$2,temp__6738__auto__,map__17491,map__17491__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17489,map__17489__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__17486,map__17486__$1,state,c_search,c_input,state_atom,input_text_model,map__17484,map__17484__$1,args){
return (function (p1__17481_SHARP_){
p1__17481_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__17500,i,s,s__17494__$2,temp__6738__auto__,map__17491,map__17491__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17489,map__17489__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__17486,map__17486__$1,state,c_search,c_input,state_atom,input_text_model,map__17484,map__17484__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__17493.call(null,cljs.core.rest.call(null,s__17494__$2)));
}
} else {
return null;
}
break;
}
});})(map__17491,map__17491__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17489,map__17489__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__17486,map__17486__$1,state,c_search,c_input,state_atom,input_text_model,map__17484,map__17484__$1,args))
,null,null));
});})(map__17491,map__17491__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17489,map__17489__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__17486,map__17486__$1,state,c_search,c_input,state_atom,input_text_model,map__17484,map__17484__$1,args))
;
return iter__10832__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__17506 = function (var_args){
var p__17488 = null;
if (arguments.length > 0) {
var G__17508__i = 0, G__17508__a = new Array(arguments.length -  0);
while (G__17508__i < G__17508__a.length) {G__17508__a[G__17508__i] = arguments[G__17508__i + 0]; ++G__17508__i;}
  p__17488 = new cljs.core.IndexedSeq(G__17508__a,0,null);
} 
return G__17506__delegate.call(this,p__17488);};
G__17506.cljs$lang$maxFixedArity = 0;
G__17506.cljs$lang$applyTo = (function (arglist__17509){
var p__17488 = cljs.core.seq(arglist__17509);
return G__17506__delegate(p__17488);
});
G__17506.cljs$core$IFn$_invoke$arity$variadic = G__17506__delegate;
return G__17506;
})()
;
;})(map__17486,map__17486__$1,state,c_search,c_input,state_atom,input_text_model,map__17484,map__17484__$1,args))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq17482){
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17482));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__15393__auto___17590 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15393__auto___17590,out){
return (function (){
var f__15394__auto__ = (function (){var switch__15303__auto__ = ((function (c__15393__auto___17590,out){
return (function (state_17560){
var state_val_17561 = (state_17560[(1)]);
if((state_val_17561 === (7))){
var inst_17515 = (state_17560[(2)]);
var state_17560__$1 = state_17560;
var statearr_17562_17591 = state_17560__$1;
(statearr_17562_17591[(2)] = inst_17515);

(statearr_17562_17591[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (1))){
var inst_17510 = null;
var state_17560__$1 = (function (){var statearr_17563 = state_17560;
(statearr_17563[(7)] = inst_17510);

return statearr_17563;
})();
var statearr_17564_17592 = state_17560__$1;
(statearr_17564_17592[(2)] = null);

(statearr_17564_17592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (4))){
var state_17560__$1 = state_17560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17560__$1,(7),in$);
} else {
if((state_val_17561 === (15))){
var inst_17545 = (state_17560[(2)]);
var state_17560__$1 = (function (){var statearr_17565 = state_17560;
(statearr_17565[(8)] = inst_17545);

return statearr_17565;
})();
var statearr_17566_17593 = state_17560__$1;
(statearr_17566_17593[(2)] = null);

(statearr_17566_17593[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (13))){
var inst_17533 = (state_17560[(9)]);
var inst_17547 = cljs.core._EQ_.call(null,inst_17533,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_17560__$1 = state_17560;
if(inst_17547){
var statearr_17567_17594 = state_17560__$1;
(statearr_17567_17594[(1)] = (16));

} else {
var statearr_17568_17595 = state_17560__$1;
(statearr_17568_17595[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (6))){
var inst_17519 = (state_17560[(10)]);
var inst_17518 = (state_17560[(2)]);
var inst_17519__$1 = cljs.core.async.timeout.call(null,ms);
var inst_17527 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17528 = [in$,inst_17519__$1];
var inst_17529 = (new cljs.core.PersistentVector(null,2,(5),inst_17527,inst_17528,null));
var state_17560__$1 = (function (){var statearr_17569 = state_17560;
(statearr_17569[(11)] = inst_17518);

(statearr_17569[(10)] = inst_17519__$1);

return statearr_17569;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_17560__$1,(8),inst_17529);
} else {
if((state_val_17561 === (17))){
var state_17560__$1 = state_17560;
var statearr_17570_17596 = state_17560__$1;
(statearr_17570_17596[(2)] = null);

(statearr_17570_17596[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (3))){
var inst_17558 = (state_17560[(2)]);
var state_17560__$1 = state_17560;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17560__$1,inst_17558);
} else {
if((state_val_17561 === (12))){
var inst_17518 = (state_17560[(11)]);
var state_17560__$1 = state_17560;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17560__$1,(15),out,inst_17518);
} else {
if((state_val_17561 === (2))){
var inst_17510 = (state_17560[(7)]);
var inst_17512 = (inst_17510 == null);
var state_17560__$1 = state_17560;
if(cljs.core.truth_(inst_17512)){
var statearr_17571_17597 = state_17560__$1;
(statearr_17571_17597[(1)] = (4));

} else {
var statearr_17572_17598 = state_17560__$1;
(statearr_17572_17598[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (11))){
var inst_17555 = (state_17560[(2)]);
var inst_17510 = inst_17555;
var state_17560__$1 = (function (){var statearr_17573 = state_17560;
(statearr_17573[(7)] = inst_17510);

return statearr_17573;
})();
var statearr_17574_17599 = state_17560__$1;
(statearr_17574_17599[(2)] = null);

(statearr_17574_17599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (9))){
var inst_17531 = (state_17560[(12)]);
var inst_17539 = cljs.core.nth.call(null,inst_17531,(0),null);
var inst_17540 = cljs.core.nth.call(null,inst_17531,(1),null);
var state_17560__$1 = (function (){var statearr_17575 = state_17560;
(statearr_17575[(13)] = inst_17540);

return statearr_17575;
})();
var statearr_17576_17600 = state_17560__$1;
(statearr_17576_17600[(2)] = inst_17539);

(statearr_17576_17600[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (5))){
var inst_17510 = (state_17560[(7)]);
var state_17560__$1 = state_17560;
var statearr_17577_17601 = state_17560__$1;
(statearr_17577_17601[(2)] = inst_17510);

(statearr_17577_17601[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (14))){
var inst_17553 = (state_17560[(2)]);
var state_17560__$1 = state_17560;
var statearr_17578_17602 = state_17560__$1;
(statearr_17578_17602[(2)] = inst_17553);

(statearr_17578_17602[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (16))){
var inst_17532 = (state_17560[(14)]);
var state_17560__$1 = state_17560;
var statearr_17579_17603 = state_17560__$1;
(statearr_17579_17603[(2)] = inst_17532);

(statearr_17579_17603[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (10))){
var inst_17533 = (state_17560[(9)]);
var inst_17519 = (state_17560[(10)]);
var inst_17542 = cljs.core._EQ_.call(null,inst_17533,inst_17519);
var state_17560__$1 = state_17560;
if(inst_17542){
var statearr_17580_17604 = state_17560__$1;
(statearr_17580_17604[(1)] = (12));

} else {
var statearr_17581_17605 = state_17560__$1;
(statearr_17581_17605[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (18))){
var inst_17551 = (state_17560[(2)]);
var state_17560__$1 = state_17560;
var statearr_17582_17606 = state_17560__$1;
(statearr_17582_17606[(2)] = inst_17551);

(statearr_17582_17606[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17561 === (8))){
var inst_17531 = (state_17560[(12)]);
var inst_17533 = (state_17560[(9)]);
var inst_17531__$1 = (state_17560[(2)]);
var inst_17532 = cljs.core.nth.call(null,inst_17531__$1,(0),null);
var inst_17533__$1 = cljs.core.nth.call(null,inst_17531__$1,(1),null);
var inst_17534 = cljs.core._EQ_.call(null,inst_17533__$1,in$);
var state_17560__$1 = (function (){var statearr_17583 = state_17560;
(statearr_17583[(14)] = inst_17532);

(statearr_17583[(12)] = inst_17531__$1);

(statearr_17583[(9)] = inst_17533__$1);

return statearr_17583;
})();
if(inst_17534){
var statearr_17584_17607 = state_17560__$1;
(statearr_17584_17607[(1)] = (9));

} else {
var statearr_17585_17608 = state_17560__$1;
(statearr_17585_17608[(1)] = (10));

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
});})(c__15393__auto___17590,out))
;
return ((function (switch__15303__auto__,c__15393__auto___17590,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__15304__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__15304__auto____0 = (function (){
var statearr_17586 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17586[(0)] = re_com$typeahead$debounce_$_state_machine__15304__auto__);

(statearr_17586[(1)] = (1));

return statearr_17586;
});
var re_com$typeahead$debounce_$_state_machine__15304__auto____1 = (function (state_17560){
while(true){
var ret_value__15305__auto__ = (function (){try{while(true){
var result__15306__auto__ = switch__15303__auto__.call(null,state_17560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15306__auto__;
}
break;
}
}catch (e17587){if((e17587 instanceof Object)){
var ex__15307__auto__ = e17587;
var statearr_17588_17609 = state_17560;
(statearr_17588_17609[(5)] = ex__15307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17610 = state_17560;
state_17560 = G__17610;
continue;
} else {
return ret_value__15305__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__15304__auto__ = function(state_17560){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__15304__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__15304__auto____1.call(this,state_17560);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$debounce_$_state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__15304__auto____0;
re_com$typeahead$debounce_$_state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__15304__auto____1;
return re_com$typeahead$debounce_$_state_machine__15304__auto__;
})()
;})(switch__15303__auto__,c__15393__auto___17590,out))
})();
var state__15395__auto__ = (function (){var statearr_17589 = f__15394__auto__.call(null);
(statearr_17589[(6)] = c__15393__auto___17590);

return statearr_17589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15395__auto__);
});})(c__15393__auto___17590,out))
);


return out;
});

//# sourceMappingURL=typeahead.js.map?rel=1506917868513
