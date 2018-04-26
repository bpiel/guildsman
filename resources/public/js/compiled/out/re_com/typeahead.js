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
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__60079){
var map__60080 = p__60079;
var map__60080__$1 = ((((!((map__60080 == null)))?((((map__60080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60080.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60080):map__60080);
var args = map__60080__$1;
var on_change = cljs.core.get.call(null,map__60080__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__60080__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__60080__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var data_source = cljs.core.get.call(null,map__60080__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__60080__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__60080__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__60080__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__60082 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__52970__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__52970__auto__)){
return or__52970__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__60082,external_model_value);
} else {
return G__60082;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__60083,event){
var map__60084 = p__60083;
var map__60084__$1 = ((((!((map__60084 == null)))?((((map__60084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60084.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60084):map__60084);
var state = map__60084__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__60084__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__60084__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__60086 = event;
var G__60086__$1 = (((G__60086 instanceof cljs.core.Keyword))?G__60086.fqn:null);
switch (G__60086__$1) {
case "input-text-blurred":
var and__52958__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__52958__auto__)){
return cljs.core.not.call(null,rigid_QMARK___$1);
} else {
return and__52958__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
case "input-text-changed":
return cljs.core.not.call(null,(function (){var or__52970__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(or__52970__auto__)){
return or__52970__auto__;
} else {
return rigid_QMARK___$1;
}
})());

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60086__$1)].join('')));

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__60088,event){
var map__60089 = p__60088;
var map__60089__$1 = ((((!((map__60089 == null)))?((((map__60089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60089.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60089):map__60089);
var state = map__60089__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__60089__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__60091 = event;
var G__60091__$1 = (((G__60091 instanceof cljs.core.Keyword))?G__60091.fqn:null);
switch (G__60091__$1) {
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
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__60093,new_value){
var map__60094 = p__60093;
var map__60094__$1 = ((((!((map__60094 == null)))?((((map__60094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60094.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60094):map__60094);
var state = map__60094__$1;
var on_change = cljs.core.get.call(null,map__60094__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__60096,suggestion){
var map__60097 = p__60096;
var map__60097__$1 = ((((!((map__60097 == null)))?((((map__60097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60097.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60097):map__60097);
var state = map__60097__$1;
var suggestion_to_string = cljs.core.get.call(null,map__60097__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__60099 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__60099,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__60099;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__60100,index){
var map__60101 = p__60100;
var map__60101__$1 = ((((!((map__60101 == null)))?((((map__60101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60101.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60101):map__60101);
var state = map__60101__$1;
var suggestions = cljs.core.get.call(null,map__60101__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__60103 = state;
var G__60103__$1 = cljs.core.assoc.call(null,G__60103,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__60103__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__60103__$1,suggestion):G__60103__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__60103__$2,suggestion);
} else {
return G__60103__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__60104,index){
var map__60105 = p__60104;
var map__60105__$1 = ((((!((map__60105 == null)))?((((map__60105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60105.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60105):map__60105);
var state = map__60105__$1;
var suggestions = cljs.core.get.call(null,map__60105__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__60107){
var map__60108 = p__60107;
var map__60108__$1 = ((((!((map__60108 == null)))?((((map__60108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60108.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60108):map__60108);
var state = map__60108__$1;
var suggestion_active_index = cljs.core.get.call(null,map__60108__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__60110 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__60110,suggestion_active_index);
} else {
return G__60110;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__60111){
var map__60112 = p__60111;
var map__60112__$1 = ((((!((map__60112 == null)))?((((map__60112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60112.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60112):map__60112);
var state = map__60112__$1;
var suggestions = cljs.core.get.call(null,map__60112__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__60112__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__60114 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__60114,re_com.typeahead.wrap.call(null,((function (){var or__52970__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__52970__auto__)){
return or__52970__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__60114;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__60115){
var map__60116 = p__60115;
var map__60116__$1 = ((((!((map__60116 == null)))?((((map__60116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60116.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60116):map__60116);
var state = map__60116__$1;
var suggestions = cljs.core.get.call(null,map__60116__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__60116__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__60118 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__60118,re_com.typeahead.wrap.call(null,((function (){var or__52970__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__52970__auto__)){
return or__52970__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__60118;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__60119 = state;
var G__60119__$1 = re_com.typeahead.clear_suggestions.call(null,G__60119)
;
var G__60119__$2 = cljs.core.assoc.call(null,G__60119__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__60119__$2,null);
} else {
return G__60119__$2;
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
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__60120){
var map__60121 = p__60120;
var map__60121__$1 = ((((!((map__60121 == null)))?((((map__60121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60121.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60121):map__60121);
var state = map__60121__$1;
var input_text = cljs.core.get.call(null,map__60121__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__60121__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var G__60123 = state;
if(cljs.core.truth_((function (){var and__52958__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__52958__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__52958__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,G__60123,input_text);
} else {
return G__60123;
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
var temp__5455__auto__ = data_source.call(null,text,(function (p1__60124_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__60124_SHARP_);
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
var c__58063__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58063__auto__){
return (function (){
var f__58064__auto__ = (function (){var switch__57973__auto__ = ((function (c__58063__auto__){
return (function (state_60141){
var state_val_60142 = (state_60141[(1)]);
if((state_val_60142 === (1))){
var state_60141__$1 = state_60141;
var statearr_60143_60155 = state_60141__$1;
(statearr_60143_60155[(2)] = null);

(statearr_60143_60155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60142 === (2))){
var state_60141__$1 = state_60141;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60141__$1,(4),c_search);
} else {
if((state_val_60142 === (3))){
var inst_60139 = (state_60141[(2)]);
var state_60141__$1 = state_60141;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60141__$1,inst_60139);
} else {
if((state_val_60142 === (4))){
var inst_60127 = (state_60141[(7)]);
var inst_60127__$1 = (state_60141[(2)]);
var inst_60128 = cljs.core.deref.call(null,state_atom);
var inst_60129 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_60128);
var inst_60130 = cljs.core._EQ_.call(null,"",inst_60127__$1);
var state_60141__$1 = (function (){var statearr_60144 = state_60141;
(statearr_60144[(8)] = inst_60129);

(statearr_60144[(7)] = inst_60127__$1);

return statearr_60144;
})();
if(inst_60130){
var statearr_60145_60156 = state_60141__$1;
(statearr_60145_60156[(1)] = (5));

} else {
var statearr_60146_60157 = state_60141__$1;
(statearr_60146_60157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60142 === (5))){
var inst_60132 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var state_60141__$1 = state_60141;
var statearr_60147_60158 = state_60141__$1;
(statearr_60147_60158[(2)] = inst_60132);

(statearr_60147_60158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60142 === (6))){
var inst_60129 = (state_60141[(8)]);
var inst_60127 = (state_60141[(7)]);
var inst_60134 = re_com.typeahead.search_data_source_BANG_.call(null,inst_60129,state_atom,inst_60127);
var state_60141__$1 = state_60141;
var statearr_60148_60159 = state_60141__$1;
(statearr_60148_60159[(2)] = inst_60134);

(statearr_60148_60159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60142 === (7))){
var inst_60136 = (state_60141[(2)]);
var state_60141__$1 = (function (){var statearr_60149 = state_60141;
(statearr_60149[(9)] = inst_60136);

return statearr_60149;
})();
var statearr_60150_60160 = state_60141__$1;
(statearr_60150_60160[(2)] = null);

(statearr_60150_60160[(1)] = (2));


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
});})(c__58063__auto__))
;
return ((function (switch__57973__auto__,c__58063__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__57974__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__57974__auto____0 = (function (){
var statearr_60151 = [null,null,null,null,null,null,null,null,null,null];
(statearr_60151[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__57974__auto__);

(statearr_60151[(1)] = (1));

return statearr_60151;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__57974__auto____1 = (function (state_60141){
while(true){
var ret_value__57975__auto__ = (function (){try{while(true){
var result__57976__auto__ = switch__57973__auto__.call(null,state_60141);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57976__auto__;
}
break;
}
}catch (e60152){if((e60152 instanceof Object)){
var ex__57977__auto__ = e60152;
var statearr_60153_60161 = state_60141;
(statearr_60153_60161[(5)] = ex__57977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60141);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60162 = state_60141;
state_60141 = G__60162;
continue;
} else {
return ret_value__57975__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__57974__auto__ = function(state_60141){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__57974__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__57974__auto____1.call(this,state_60141);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__57974__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__57974__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__57974__auto__;
})()
;})(switch__57973__auto__,c__58063__auto__))
})();
var state__58065__auto__ = (function (){var statearr_60154 = f__58064__auto__.call(null);
(statearr_60154[(6)] = c__58063__auto__);

return statearr_60154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58065__auto__);
});})(c__58063__auto__))
);

return c__58063__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__60164 = cljs.core.deref.call(null,state_atom);
var map__60164__$1 = ((((!((map__60164 == null)))?((((map__60164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60164.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60164):map__60164);
var state = map__60164__$1;
var input_text = cljs.core.get.call(null,map__60164__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__60164__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_.call(null,new_text)){
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);
}

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__60164,map__60164__$1,state,input_text,c_input){
return (function (p1__60163_SHARP_){
var G__60166 = p1__60163_SHARP_;
var G__60166__$1 = cljs.core.assoc.call(null,G__60166,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__60166__$1,new_text);
} else {
return G__60166__$1;
}
});})(map__60164,map__60164__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__60167 = cljs.core._EQ_;
var expr__60168 = event.which;
if(cljs.core.truth_(pred__60167.call(null,goog.events.KeyCodes.UP,expr__60168))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__60167.call(null,goog.events.KeyCodes.DOWN,expr__60168))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__60167.call(null,goog.events.KeyCodes.ENTER,expr__60168))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__60167.call(null,goog.events.KeyCodes.ESC,expr__60168))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_(pred__60167.call(null,goog.events.KeyCodes.TAB,expr__60168))){
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
var args__54254__auto__ = [];
var len__54247__auto___60192 = arguments.length;
var i__54248__auto___60193 = (0);
while(true){
if((i__54248__auto___60193 < len__54247__auto___60192)){
args__54254__auto__.push((arguments[i__54248__auto___60193]));

var G__60194 = (i__54248__auto___60193 + (1));
i__54248__auto___60193 = G__60194;
continue;
} else {
}
break;
}

var argseq__54255__auto__ = ((((0) < args__54254__auto__.length))?(new cljs.core.IndexedSeq(args__54254__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__54255__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__60172){
var map__60173 = p__60172;
var map__60173__$1 = ((((!((map__60173 == null)))?((((map__60173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60173.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60173):map__60173);
var args = map__60173__$1;
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__60175 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__60175__$1 = ((((!((map__60175 == null)))?((((map__60175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60175.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60175):map__60175);
var state = map__60175__$1;
var c_search = cljs.core.get.call(null,map__60175__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__60175__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__60175,map__60175__$1,state,c_search,c_input,state_atom,input_text_model,map__60173,map__60173__$1,args){
return (function() { 
var G__60195__delegate = function (p__60177){
var map__60178 = p__60177;
var map__60178__$1 = ((((!((map__60178 == null)))?((((map__60178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60178.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60178):map__60178);
var args__$1 = map__60178__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__60178__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__60178__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__60178__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__60178__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__60178__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.call(null,map__60178__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var _on_change = cljs.core.get.call(null,map__60178__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.call(null,map__60178__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__60178__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.call(null,map__60178__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var width = cljs.core.get.call(null,map__60178__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.call(null,map__60178__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var _rigid_QMARK_ = cljs.core.get.call(null,map__60178__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.call(null,map__60178__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.call(null,map__60178__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var status = cljs.core.get.call(null,map__60178__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__60178__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var _attr = cljs.core.get.call(null,map__60178__$1,new cljs.core.Keyword(null,"_attr","_attr",299438964));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__60180 = cljs.core.deref.call(null,state_atom);
var map__60180__$1 = ((((!((map__60180 == null)))?((((map__60180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60180.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60180):map__60180);
var state__$1 = map__60180__$1;
var suggestions = cljs.core.get.call(null,map__60180__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__60180__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__60180__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__60180__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value.call(null,model);
var width__$1 = (function (){var or__52970__auto__ = width;
if(cljs.core.truth_(or__52970__auto__)){
return or__52970__auto__;
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

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.call(null,re_com.typeahead.input_text_on_key_down_BANG_,state_atom)], null)], null),(cljs.core.truth_((function (){var or__52970__auto__ = cljs.core.not_empty.call(null,suggestions);
if(cljs.core.truth_(or__52970__auto__)){
return or__52970__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__53852__auto__ = ((function (map__60180,map__60180__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__60178,map__60178__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__60175,map__60175__$1,state,c_search,c_input,state_atom,input_text_model,map__60173,map__60173__$1,args){
return (function re_com$typeahead$iter__60182(s__60183){
return (new cljs.core.LazySeq(null,((function (map__60180,map__60180__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__60178,map__60178__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__60175,map__60175__$1,state,c_search,c_input,state_atom,input_text_model,map__60173,map__60173__$1,args){
return (function (){
var s__60183__$1 = s__60183;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__60183__$1);
if(temp__5457__auto__){
var s__60183__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__60183__$2)){
var c__53850__auto__ = cljs.core.chunk_first.call(null,s__60183__$2);
var size__53851__auto__ = cljs.core.count.call(null,c__53850__auto__);
var b__60185 = cljs.core.chunk_buffer.call(null,size__53851__auto__);
if((function (){var i__60184 = (0);
while(true){
if((i__60184 < size__53851__auto__)){
var vec__60186 = cljs.core._nth.call(null,c__53850__auto__,i__60184);
var i = cljs.core.nth.call(null,vec__60186,(0),null);
var s = cljs.core.nth.call(null,vec__60186,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__60185,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__60184,selected_QMARK_,vec__60186,i,s,c__53850__auto__,size__53851__auto__,b__60185,s__60183__$2,temp__5457__auto__,map__60180,map__60180__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__60178,map__60178__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__60175,map__60175__$1,state,c_search,c_input,state_atom,input_text_model,map__60173,map__60173__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__60184,selected_QMARK_,vec__60186,i,s,c__53850__auto__,size__53851__auto__,b__60185,s__60183__$2,temp__5457__auto__,map__60180,map__60180__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__60178,map__60178__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__60175,map__60175__$1,state,c_search,c_input,state_atom,input_text_model,map__60173,map__60173__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__60184,selected_QMARK_,vec__60186,i,s,c__53850__auto__,size__53851__auto__,b__60185,s__60183__$2,temp__5457__auto__,map__60180,map__60180__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__60178,map__60178__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__60175,map__60175__$1,state,c_search,c_input,state_atom,input_text_model,map__60173,map__60173__$1,args){
return (function (p1__60170_SHARP_){
p1__60170_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__60184,selected_QMARK_,vec__60186,i,s,c__53850__auto__,size__53851__auto__,b__60185,s__60183__$2,temp__5457__auto__,map__60180,map__60180__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__60178,map__60178__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__60175,map__60175__$1,state,c_search,c_input,state_atom,input_text_model,map__60173,map__60173__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__60196 = (i__60184 + (1));
i__60184 = G__60196;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__60185),re_com$typeahead$iter__60182.call(null,cljs.core.chunk_rest.call(null,s__60183__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__60185),null);
}
} else {
var vec__60189 = cljs.core.first.call(null,s__60183__$2);
var i = cljs.core.nth.call(null,vec__60189,(0),null);
var s = cljs.core.nth.call(null,vec__60189,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__60189,i,s,s__60183__$2,temp__5457__auto__,map__60180,map__60180__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__60178,map__60178__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__60175,map__60175__$1,state,c_search,c_input,state_atom,input_text_model,map__60173,map__60173__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__60189,i,s,s__60183__$2,temp__5457__auto__,map__60180,map__60180__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__60178,map__60178__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__60175,map__60175__$1,state,c_search,c_input,state_atom,input_text_model,map__60173,map__60173__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__60189,i,s,s__60183__$2,temp__5457__auto__,map__60180,map__60180__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__60178,map__60178__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__60175,map__60175__$1,state,c_search,c_input,state_atom,input_text_model,map__60173,map__60173__$1,args){
return (function (p1__60170_SHARP_){
p1__60170_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__60189,i,s,s__60183__$2,temp__5457__auto__,map__60180,map__60180__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__60178,map__60178__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__60175,map__60175__$1,state,c_search,c_input,state_atom,input_text_model,map__60173,map__60173__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__60182.call(null,cljs.core.rest.call(null,s__60183__$2)));
}
} else {
return null;
}
break;
}
});})(map__60180,map__60180__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__60178,map__60178__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__60175,map__60175__$1,state,c_search,c_input,state_atom,input_text_model,map__60173,map__60173__$1,args))
,null,null));
});})(map__60180,map__60180__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__60178,map__60178__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__60175,map__60175__$1,state,c_search,c_input,state_atom,input_text_model,map__60173,map__60173__$1,args))
;
return iter__53852__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__60195 = function (var_args){
var p__60177 = null;
if (arguments.length > 0) {
var G__60197__i = 0, G__60197__a = new Array(arguments.length -  0);
while (G__60197__i < G__60197__a.length) {G__60197__a[G__60197__i] = arguments[G__60197__i + 0]; ++G__60197__i;}
  p__60177 = new cljs.core.IndexedSeq(G__60197__a,0,null);
} 
return G__60195__delegate.call(this,p__60177);};
G__60195.cljs$lang$maxFixedArity = 0;
G__60195.cljs$lang$applyTo = (function (arglist__60198){
var p__60177 = cljs.core.seq(arglist__60198);
return G__60195__delegate(p__60177);
});
G__60195.cljs$core$IFn$_invoke$arity$variadic = G__60195__delegate;
return G__60195;
})()
;
;})(map__60175,map__60175__$1,state,c_search,c_input,state_atom,input_text_model,map__60173,map__60173__$1,args))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq60171){
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60171));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__58063__auto___60279 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58063__auto___60279,out){
return (function (){
var f__58064__auto__ = (function (){var switch__57973__auto__ = ((function (c__58063__auto___60279,out){
return (function (state_60249){
var state_val_60250 = (state_60249[(1)]);
if((state_val_60250 === (7))){
var inst_60204 = (state_60249[(2)]);
var state_60249__$1 = state_60249;
var statearr_60251_60280 = state_60249__$1;
(statearr_60251_60280[(2)] = inst_60204);

(statearr_60251_60280[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60250 === (1))){
var inst_60199 = null;
var state_60249__$1 = (function (){var statearr_60252 = state_60249;
(statearr_60252[(7)] = inst_60199);

return statearr_60252;
})();
var statearr_60253_60281 = state_60249__$1;
(statearr_60253_60281[(2)] = null);

(statearr_60253_60281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60250 === (4))){
var state_60249__$1 = state_60249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60249__$1,(7),in$);
} else {
if((state_val_60250 === (15))){
var inst_60234 = (state_60249[(2)]);
var state_60249__$1 = (function (){var statearr_60254 = state_60249;
(statearr_60254[(8)] = inst_60234);

return statearr_60254;
})();
var statearr_60255_60282 = state_60249__$1;
(statearr_60255_60282[(2)] = null);

(statearr_60255_60282[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60250 === (13))){
var inst_60222 = (state_60249[(9)]);
var inst_60236 = cljs.core._EQ_.call(null,inst_60222,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_60249__$1 = state_60249;
if(inst_60236){
var statearr_60256_60283 = state_60249__$1;
(statearr_60256_60283[(1)] = (16));

} else {
var statearr_60257_60284 = state_60249__$1;
(statearr_60257_60284[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60250 === (6))){
var inst_60208 = (state_60249[(10)]);
var inst_60207 = (state_60249[(2)]);
var inst_60208__$1 = cljs.core.async.timeout.call(null,ms);
var inst_60216 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_60217 = [in$,inst_60208__$1];
var inst_60218 = (new cljs.core.PersistentVector(null,2,(5),inst_60216,inst_60217,null));
var state_60249__$1 = (function (){var statearr_60258 = state_60249;
(statearr_60258[(10)] = inst_60208__$1);

(statearr_60258[(11)] = inst_60207);

return statearr_60258;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_60249__$1,(8),inst_60218);
} else {
if((state_val_60250 === (17))){
var state_60249__$1 = state_60249;
var statearr_60259_60285 = state_60249__$1;
(statearr_60259_60285[(2)] = null);

(statearr_60259_60285[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60250 === (3))){
var inst_60247 = (state_60249[(2)]);
var state_60249__$1 = state_60249;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60249__$1,inst_60247);
} else {
if((state_val_60250 === (12))){
var inst_60207 = (state_60249[(11)]);
var state_60249__$1 = state_60249;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60249__$1,(15),out,inst_60207);
} else {
if((state_val_60250 === (2))){
var inst_60199 = (state_60249[(7)]);
var inst_60201 = (inst_60199 == null);
var state_60249__$1 = state_60249;
if(cljs.core.truth_(inst_60201)){
var statearr_60260_60286 = state_60249__$1;
(statearr_60260_60286[(1)] = (4));

} else {
var statearr_60261_60287 = state_60249__$1;
(statearr_60261_60287[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60250 === (11))){
var inst_60244 = (state_60249[(2)]);
var inst_60199 = inst_60244;
var state_60249__$1 = (function (){var statearr_60262 = state_60249;
(statearr_60262[(7)] = inst_60199);

return statearr_60262;
})();
var statearr_60263_60288 = state_60249__$1;
(statearr_60263_60288[(2)] = null);

(statearr_60263_60288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60250 === (9))){
var inst_60220 = (state_60249[(12)]);
var inst_60228 = cljs.core.nth.call(null,inst_60220,(0),null);
var inst_60229 = cljs.core.nth.call(null,inst_60220,(1),null);
var state_60249__$1 = (function (){var statearr_60264 = state_60249;
(statearr_60264[(13)] = inst_60229);

return statearr_60264;
})();
var statearr_60265_60289 = state_60249__$1;
(statearr_60265_60289[(2)] = inst_60228);

(statearr_60265_60289[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60250 === (5))){
var inst_60199 = (state_60249[(7)]);
var state_60249__$1 = state_60249;
var statearr_60266_60290 = state_60249__$1;
(statearr_60266_60290[(2)] = inst_60199);

(statearr_60266_60290[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60250 === (14))){
var inst_60242 = (state_60249[(2)]);
var state_60249__$1 = state_60249;
var statearr_60267_60291 = state_60249__$1;
(statearr_60267_60291[(2)] = inst_60242);

(statearr_60267_60291[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60250 === (16))){
var inst_60221 = (state_60249[(14)]);
var state_60249__$1 = state_60249;
var statearr_60268_60292 = state_60249__$1;
(statearr_60268_60292[(2)] = inst_60221);

(statearr_60268_60292[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60250 === (10))){
var inst_60208 = (state_60249[(10)]);
var inst_60222 = (state_60249[(9)]);
var inst_60231 = cljs.core._EQ_.call(null,inst_60222,inst_60208);
var state_60249__$1 = state_60249;
if(inst_60231){
var statearr_60269_60293 = state_60249__$1;
(statearr_60269_60293[(1)] = (12));

} else {
var statearr_60270_60294 = state_60249__$1;
(statearr_60270_60294[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60250 === (18))){
var inst_60240 = (state_60249[(2)]);
var state_60249__$1 = state_60249;
var statearr_60271_60295 = state_60249__$1;
(statearr_60271_60295[(2)] = inst_60240);

(statearr_60271_60295[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60250 === (8))){
var inst_60220 = (state_60249[(12)]);
var inst_60222 = (state_60249[(9)]);
var inst_60220__$1 = (state_60249[(2)]);
var inst_60221 = cljs.core.nth.call(null,inst_60220__$1,(0),null);
var inst_60222__$1 = cljs.core.nth.call(null,inst_60220__$1,(1),null);
var inst_60223 = cljs.core._EQ_.call(null,inst_60222__$1,in$);
var state_60249__$1 = (function (){var statearr_60272 = state_60249;
(statearr_60272[(12)] = inst_60220__$1);

(statearr_60272[(14)] = inst_60221);

(statearr_60272[(9)] = inst_60222__$1);

return statearr_60272;
})();
if(inst_60223){
var statearr_60273_60296 = state_60249__$1;
(statearr_60273_60296[(1)] = (9));

} else {
var statearr_60274_60297 = state_60249__$1;
(statearr_60274_60297[(1)] = (10));

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
});})(c__58063__auto___60279,out))
;
return ((function (switch__57973__auto__,c__58063__auto___60279,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__57974__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__57974__auto____0 = (function (){
var statearr_60275 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60275[(0)] = re_com$typeahead$debounce_$_state_machine__57974__auto__);

(statearr_60275[(1)] = (1));

return statearr_60275;
});
var re_com$typeahead$debounce_$_state_machine__57974__auto____1 = (function (state_60249){
while(true){
var ret_value__57975__auto__ = (function (){try{while(true){
var result__57976__auto__ = switch__57973__auto__.call(null,state_60249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57976__auto__;
}
break;
}
}catch (e60276){if((e60276 instanceof Object)){
var ex__57977__auto__ = e60276;
var statearr_60277_60298 = state_60249;
(statearr_60277_60298[(5)] = ex__57977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60299 = state_60249;
state_60249 = G__60299;
continue;
} else {
return ret_value__57975__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__57974__auto__ = function(state_60249){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__57974__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__57974__auto____1.call(this,state_60249);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$debounce_$_state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__57974__auto____0;
re_com$typeahead$debounce_$_state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__57974__auto____1;
return re_com$typeahead$debounce_$_state_machine__57974__auto__;
})()
;})(switch__57973__auto__,c__58063__auto___60279,out))
})();
var state__58065__auto__ = (function (){var statearr_60278 = f__58064__auto__.call(null);
(statearr_60278[(6)] = c__58063__auto___60279);

return statearr_60278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58065__auto__);
});})(c__58063__auto___60279,out))
);


return out;
});

//# sourceMappingURL=typeahead.js.map?rel=1524702417812
