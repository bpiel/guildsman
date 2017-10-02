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
re_com.typeahead.typeahead_args_desc = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"string -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," when the use chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", invoke it on every character typed.)"], null)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"object | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"The initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),")."]),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(250),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"After receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"render fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"suggestion -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"When a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.input_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"250px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed"], null)], null)], null);

/**
 * Return an initial value for the typeahead state, given `args`.
 */
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__17276){
var map__17277 = p__17276;
var map__17277__$1 = ((((!((map__17277 == null)))?((((map__17277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17277.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17277):map__17277);
var args = map__17277__$1;
var on_change = cljs.core.get.call(null,map__17277__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__17277__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__17277__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var data_source = cljs.core.get.call(null,map__17277__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__17277__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__17277__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__17277__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__17279 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__9810__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__9810__auto__)){
return or__9810__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__17279,external_model_value);
} else {
return G__17279;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__17280,event){
var map__17281 = p__17280;
var map__17281__$1 = ((((!((map__17281 == null)))?((((map__17281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17281.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17281):map__17281);
var state = map__17281__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__17281__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__17281__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__17283 = event;
var G__17283__$1 = (((G__17283 instanceof cljs.core.Keyword))?G__17283.fqn:null);
switch (G__17283__$1) {
case "input-text-blurred":
var and__9798__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__9798__auto__)){
return cljs.core.not.call(null,rigid_QMARK___$1);
} else {
return and__9798__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
case "input-text-changed":
return cljs.core.not.call(null,(function (){var or__9810__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(or__9810__auto__)){
return or__9810__auto__;
} else {
return rigid_QMARK___$1;
}
})());

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17283__$1)].join('')));

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__17285,event){
var map__17286 = p__17285;
var map__17286__$1 = ((((!((map__17286 == null)))?((((map__17286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17286.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17286):map__17286);
var state = map__17286__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__17286__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__17288 = event;
var G__17288__$1 = (((G__17288 instanceof cljs.core.Keyword))?G__17288.fqn:null);
switch (G__17288__$1) {
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
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__17290,new_value){
var map__17291 = p__17290;
var map__17291__$1 = ((((!((map__17291 == null)))?((((map__17291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17291.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17291):map__17291);
var state = map__17291__$1;
var on_change = cljs.core.get.call(null,map__17291__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__17293,suggestion){
var map__17294 = p__17293;
var map__17294__$1 = ((((!((map__17294 == null)))?((((map__17294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17294.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17294):map__17294);
var state = map__17294__$1;
var suggestion_to_string = cljs.core.get.call(null,map__17294__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__17296 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__17296,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__17296;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__17297,index){
var map__17298 = p__17297;
var map__17298__$1 = ((((!((map__17298 == null)))?((((map__17298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17298.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17298):map__17298);
var state = map__17298__$1;
var suggestions = cljs.core.get.call(null,map__17298__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__17300 = state;
var G__17300__$1 = cljs.core.assoc.call(null,G__17300,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__17300__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__17300__$1,suggestion):G__17300__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__17300__$2,suggestion);
} else {
return G__17300__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__17301,index){
var map__17302 = p__17301;
var map__17302__$1 = ((((!((map__17302 == null)))?((((map__17302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17302.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17302):map__17302);
var state = map__17302__$1;
var suggestions = cljs.core.get.call(null,map__17302__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__17304){
var map__17305 = p__17304;
var map__17305__$1 = ((((!((map__17305 == null)))?((((map__17305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17305.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17305):map__17305);
var state = map__17305__$1;
var suggestion_active_index = cljs.core.get.call(null,map__17305__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__17307 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__17307,suggestion_active_index);
} else {
return G__17307;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__17308){
var map__17309 = p__17308;
var map__17309__$1 = ((((!((map__17309 == null)))?((((map__17309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17309.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17309):map__17309);
var state = map__17309__$1;
var suggestions = cljs.core.get.call(null,map__17309__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__17309__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__17311 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__17311,re_com.typeahead.wrap.call(null,((function (){var or__9810__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__9810__auto__)){
return or__9810__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__17311;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__17312){
var map__17313 = p__17312;
var map__17313__$1 = ((((!((map__17313 == null)))?((((map__17313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17313.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17313):map__17313);
var state = map__17313__$1;
var suggestions = cljs.core.get.call(null,map__17313__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__17313__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__17315 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__17315,re_com.typeahead.wrap.call(null,((function (){var or__9810__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__9810__auto__)){
return or__9810__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__17315;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__17316 = state;
var G__17316__$1 = re_com.typeahead.clear_suggestions.call(null,G__17316)
;
var G__17316__$2 = cljs.core.assoc.call(null,G__17316__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__17316__$2,null);
} else {
return G__17316__$2;
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
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__17317){
var map__17318 = p__17317;
var map__17318__$1 = ((((!((map__17318 == null)))?((((map__17318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17318.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17318):map__17318);
var state = map__17318__$1;
var input_text = cljs.core.get.call(null,map__17318__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__17318__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var G__17320 = state;
if(cljs.core.truth_((function (){var and__9798__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__9798__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__9798__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,G__17320,input_text);
} else {
return G__17320;
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
var temp__6736__auto__ = data_source.call(null,text,(function (p1__17321_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__17321_SHARP_);
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
var c__15288__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15288__auto__){
return (function (){
var f__15289__auto__ = (function (){var switch__15198__auto__ = ((function (c__15288__auto__){
return (function (state_17338){
var state_val_17339 = (state_17338[(1)]);
if((state_val_17339 === (1))){
var state_17338__$1 = state_17338;
var statearr_17340_17352 = state_17338__$1;
(statearr_17340_17352[(2)] = null);

(statearr_17340_17352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17339 === (2))){
var state_17338__$1 = state_17338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17338__$1,(4),c_search);
} else {
if((state_val_17339 === (3))){
var inst_17336 = (state_17338[(2)]);
var state_17338__$1 = state_17338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17338__$1,inst_17336);
} else {
if((state_val_17339 === (4))){
var inst_17324 = (state_17338[(7)]);
var inst_17324__$1 = (state_17338[(2)]);
var inst_17325 = cljs.core.deref.call(null,state_atom);
var inst_17326 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_17325);
var inst_17327 = cljs.core._EQ_.call(null,"",inst_17324__$1);
var state_17338__$1 = (function (){var statearr_17341 = state_17338;
(statearr_17341[(8)] = inst_17326);

(statearr_17341[(7)] = inst_17324__$1);

return statearr_17341;
})();
if(inst_17327){
var statearr_17342_17353 = state_17338__$1;
(statearr_17342_17353[(1)] = (5));

} else {
var statearr_17343_17354 = state_17338__$1;
(statearr_17343_17354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17339 === (5))){
var inst_17329 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var state_17338__$1 = state_17338;
var statearr_17344_17355 = state_17338__$1;
(statearr_17344_17355[(2)] = inst_17329);

(statearr_17344_17355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17339 === (6))){
var inst_17326 = (state_17338[(8)]);
var inst_17324 = (state_17338[(7)]);
var inst_17331 = re_com.typeahead.search_data_source_BANG_.call(null,inst_17326,state_atom,inst_17324);
var state_17338__$1 = state_17338;
var statearr_17345_17356 = state_17338__$1;
(statearr_17345_17356[(2)] = inst_17331);

(statearr_17345_17356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17339 === (7))){
var inst_17333 = (state_17338[(2)]);
var state_17338__$1 = (function (){var statearr_17346 = state_17338;
(statearr_17346[(9)] = inst_17333);

return statearr_17346;
})();
var statearr_17347_17357 = state_17338__$1;
(statearr_17347_17357[(2)] = null);

(statearr_17347_17357[(1)] = (2));


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
});})(c__15288__auto__))
;
return ((function (switch__15198__auto__,c__15288__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__15199__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__15199__auto____0 = (function (){
var statearr_17348 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17348[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__15199__auto__);

(statearr_17348[(1)] = (1));

return statearr_17348;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__15199__auto____1 = (function (state_17338){
while(true){
var ret_value__15200__auto__ = (function (){try{while(true){
var result__15201__auto__ = switch__15198__auto__.call(null,state_17338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15201__auto__;
}
break;
}
}catch (e17349){if((e17349 instanceof Object)){
var ex__15202__auto__ = e17349;
var statearr_17350_17358 = state_17338;
(statearr_17350_17358[(5)] = ex__15202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17359 = state_17338;
state_17338 = G__17359;
continue;
} else {
return ret_value__15200__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__15199__auto__ = function(state_17338){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__15199__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__15199__auto____1.call(this,state_17338);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__15199__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__15199__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__15199__auto__;
})()
;})(switch__15198__auto__,c__15288__auto__))
})();
var state__15290__auto__ = (function (){var statearr_17351 = f__15289__auto__.call(null);
(statearr_17351[(6)] = c__15288__auto__);

return statearr_17351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15290__auto__);
});})(c__15288__auto__))
);

return c__15288__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__17361 = cljs.core.deref.call(null,state_atom);
var map__17361__$1 = ((((!((map__17361 == null)))?((((map__17361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17361.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17361):map__17361);
var state = map__17361__$1;
var input_text = cljs.core.get.call(null,map__17361__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__17361__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_.call(null,new_text)){
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);
}

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__17361,map__17361__$1,state,input_text,c_input){
return (function (p1__17360_SHARP_){
var G__17363 = p1__17360_SHARP_;
var G__17363__$1 = cljs.core.assoc.call(null,G__17363,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__17363__$1,new_text);
} else {
return G__17363__$1;
}
});})(map__17361,map__17361__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__17364 = cljs.core._EQ_;
var expr__17365 = event.which;
if(cljs.core.truth_(pred__17364.call(null,goog.events.KeyCodes.UP,expr__17365))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__17364.call(null,goog.events.KeyCodes.DOWN,expr__17365))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__17364.call(null,goog.events.KeyCodes.ENTER,expr__17365))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__17364.call(null,goog.events.KeyCodes.ESC,expr__17365))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_(pred__17364.call(null,goog.events.KeyCodes.TAB,expr__17365))){
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
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__11094__auto__ = [];
var len__11087__auto___17389 = arguments.length;
var i__11088__auto___17390 = (0);
while(true){
if((i__11088__auto___17390 < len__11087__auto___17389)){
args__11094__auto__.push((arguments[i__11088__auto___17390]));

var G__17391 = (i__11088__auto___17390 + (1));
i__11088__auto___17390 = G__17391;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((0) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__11095__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__17369){
var map__17370 = p__17369;
var map__17370__$1 = ((((!((map__17370 == null)))?((((map__17370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17370.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17370):map__17370);
var args = map__17370__$1;
var data_source = cljs.core.get.call(null,map__17370__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var on_change = cljs.core.get.call(null,map__17370__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__17370__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__17370__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__17372 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__17372__$1 = ((((!((map__17372 == null)))?((((map__17372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17372.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17372):map__17372);
var state = map__17372__$1;
var c_search = cljs.core.get.call(null,map__17372__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__17372__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__17372,map__17372__$1,state,c_search,c_input,state_atom,input_text_model,map__17370,map__17370__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function() { 
var G__17392__delegate = function (p__17374){
var map__17375 = p__17374;
var map__17375__$1 = ((((!((map__17375 == null)))?((((map__17375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17375.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17375):map__17375);
var args__$1 = map__17375__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__17375__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__17375__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__17375__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__17375__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__17375__$1,new cljs.core.Keyword(null,"model","model",331153215));
var suggestion_to_string = cljs.core.get.call(null,map__17375__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var placeholder = cljs.core.get.call(null,map__17375__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__17375__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var rigid_QMARK___$1 = cljs.core.get.call(null,map__17375__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var width = cljs.core.get.call(null,map__17375__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source__$1 = cljs.core.get.call(null,map__17375__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var style = cljs.core.get.call(null,map__17375__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var status = cljs.core.get.call(null,map__17375__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__17375__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__17377 = cljs.core.deref.call(null,state_atom);
var map__17377__$1 = ((((!((map__17377 == null)))?((((map__17377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17377.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17377):map__17377);
var state__$1 = map__17377__$1;
var suggestions = cljs.core.get.call(null,map__17377__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__17377__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__17377__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__17377__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value.call(null,model);
var width__$1 = (function (){var or__9810__auto__ = width;
if(cljs.core.truth_(or__9810__auto__)){
return or__9810__auto__;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.call(null,last_data_source,data_source__$1)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.change_data_source,data_source__$1);
} else {
}

if(cljs.core.not_EQ_.call(null,latest_external_model,external_model)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.external_model_changed,latest_external_model);
} else {
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.call(null,re_com.typeahead.input_text_on_key_down_BANG_,state_atom)], null)], null),(cljs.core.truth_((function (){var or__9810__auto__ = cljs.core.not_empty.call(null,suggestions);
if(cljs.core.truth_(or__9810__auto__)){
return or__9810__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__10692__auto__ = ((function (map__17377,map__17377__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17375,map__17375__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__17372,map__17372__$1,state,c_search,c_input,state_atom,input_text_model,map__17370,map__17370__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function re_com$typeahead$iter__17379(s__17380){
return (new cljs.core.LazySeq(null,((function (map__17377,map__17377__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17375,map__17375__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__17372,map__17372__$1,state,c_search,c_input,state_atom,input_text_model,map__17370,map__17370__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (){
var s__17380__$1 = s__17380;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__17380__$1);
if(temp__6738__auto__){
var s__17380__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17380__$2)){
var c__10690__auto__ = cljs.core.chunk_first.call(null,s__17380__$2);
var size__10691__auto__ = cljs.core.count.call(null,c__10690__auto__);
var b__17382 = cljs.core.chunk_buffer.call(null,size__10691__auto__);
if((function (){var i__17381 = (0);
while(true){
if((i__17381 < size__10691__auto__)){
var vec__17383 = cljs.core._nth.call(null,c__10690__auto__,i__17381);
var i = cljs.core.nth.call(null,vec__17383,(0),null);
var s = cljs.core.nth.call(null,vec__17383,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__17382,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__17381,selected_QMARK_,vec__17383,i,s,c__10690__auto__,size__10691__auto__,b__17382,s__17380__$2,temp__6738__auto__,map__17377,map__17377__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17375,map__17375__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__17372,map__17372__$1,state,c_search,c_input,state_atom,input_text_model,map__17370,map__17370__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__17381,selected_QMARK_,vec__17383,i,s,c__10690__auto__,size__10691__auto__,b__17382,s__17380__$2,temp__6738__auto__,map__17377,map__17377__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17375,map__17375__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__17372,map__17372__$1,state,c_search,c_input,state_atom,input_text_model,map__17370,map__17370__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__17381,selected_QMARK_,vec__17383,i,s,c__10690__auto__,size__10691__auto__,b__17382,s__17380__$2,temp__6738__auto__,map__17377,map__17377__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17375,map__17375__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__17372,map__17372__$1,state,c_search,c_input,state_atom,input_text_model,map__17370,map__17370__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (p1__17367_SHARP_){
p1__17367_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__17381,selected_QMARK_,vec__17383,i,s,c__10690__auto__,size__10691__auto__,b__17382,s__17380__$2,temp__6738__auto__,map__17377,map__17377__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17375,map__17375__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__17372,map__17372__$1,state,c_search,c_input,state_atom,input_text_model,map__17370,map__17370__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__17393 = (i__17381 + (1));
i__17381 = G__17393;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17382),re_com$typeahead$iter__17379.call(null,cljs.core.chunk_rest.call(null,s__17380__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17382),null);
}
} else {
var vec__17386 = cljs.core.first.call(null,s__17380__$2);
var i = cljs.core.nth.call(null,vec__17386,(0),null);
var s = cljs.core.nth.call(null,vec__17386,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__17386,i,s,s__17380__$2,temp__6738__auto__,map__17377,map__17377__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17375,map__17375__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__17372,map__17372__$1,state,c_search,c_input,state_atom,input_text_model,map__17370,map__17370__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__17386,i,s,s__17380__$2,temp__6738__auto__,map__17377,map__17377__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17375,map__17375__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__17372,map__17372__$1,state,c_search,c_input,state_atom,input_text_model,map__17370,map__17370__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__17386,i,s,s__17380__$2,temp__6738__auto__,map__17377,map__17377__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17375,map__17375__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__17372,map__17372__$1,state,c_search,c_input,state_atom,input_text_model,map__17370,map__17370__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_){
return (function (p1__17367_SHARP_){
p1__17367_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__17386,i,s,s__17380__$2,temp__6738__auto__,map__17377,map__17377__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17375,map__17375__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__17372,map__17372__$1,state,c_search,c_input,state_atom,input_text_model,map__17370,map__17370__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__17379.call(null,cljs.core.rest.call(null,s__17380__$2)));
}
} else {
return null;
}
break;
}
});})(map__17377,map__17377__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17375,map__17375__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__17372,map__17372__$1,state,c_search,c_input,state_atom,input_text_model,map__17370,map__17370__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
,null,null));
});})(map__17377,map__17377__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__17375,map__17375__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,suggestion_to_string,placeholder,render_suggestion,rigid_QMARK___$1,width,data_source__$1,style,status,class$,map__17372,map__17372__$1,state,c_search,c_input,state_atom,input_text_model,map__17370,map__17370__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
;
return iter__10692__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null):null)], null)], null);
};
var G__17392 = function (var_args){
var p__17374 = null;
if (arguments.length > 0) {
var G__17394__i = 0, G__17394__a = new Array(arguments.length -  0);
while (G__17394__i < G__17394__a.length) {G__17394__a[G__17394__i] = arguments[G__17394__i + 0]; ++G__17394__i;}
  p__17374 = new cljs.core.IndexedSeq(G__17394__a,0,null);
} 
return G__17392__delegate.call(this,p__17374);};
G__17392.cljs$lang$maxFixedArity = 0;
G__17392.cljs$lang$applyTo = (function (arglist__17395){
var p__17374 = cljs.core.seq(arglist__17395);
return G__17392__delegate(p__17374);
});
G__17392.cljs$core$IFn$_invoke$arity$variadic = G__17392__delegate;
return G__17392;
})()
;
;})(map__17372,map__17372__$1,state,c_search,c_input,state_atom,input_text_model,map__17370,map__17370__$1,args,data_source,on_change,rigid_QMARK_,change_on_blur_QMARK_))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq17368){
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17368));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__15288__auto___17476 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15288__auto___17476,out){
return (function (){
var f__15289__auto__ = (function (){var switch__15198__auto__ = ((function (c__15288__auto___17476,out){
return (function (state_17446){
var state_val_17447 = (state_17446[(1)]);
if((state_val_17447 === (7))){
var inst_17401 = (state_17446[(2)]);
var state_17446__$1 = state_17446;
var statearr_17448_17477 = state_17446__$1;
(statearr_17448_17477[(2)] = inst_17401);

(statearr_17448_17477[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17447 === (1))){
var inst_17396 = null;
var state_17446__$1 = (function (){var statearr_17449 = state_17446;
(statearr_17449[(7)] = inst_17396);

return statearr_17449;
})();
var statearr_17450_17478 = state_17446__$1;
(statearr_17450_17478[(2)] = null);

(statearr_17450_17478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17447 === (4))){
var state_17446__$1 = state_17446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17446__$1,(7),in$);
} else {
if((state_val_17447 === (15))){
var inst_17431 = (state_17446[(2)]);
var state_17446__$1 = (function (){var statearr_17451 = state_17446;
(statearr_17451[(8)] = inst_17431);

return statearr_17451;
})();
var statearr_17452_17479 = state_17446__$1;
(statearr_17452_17479[(2)] = null);

(statearr_17452_17479[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17447 === (13))){
var inst_17419 = (state_17446[(9)]);
var inst_17433 = cljs.core._EQ_.call(null,inst_17419,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_17446__$1 = state_17446;
if(inst_17433){
var statearr_17453_17480 = state_17446__$1;
(statearr_17453_17480[(1)] = (16));

} else {
var statearr_17454_17481 = state_17446__$1;
(statearr_17454_17481[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17447 === (6))){
var inst_17405 = (state_17446[(10)]);
var inst_17404 = (state_17446[(2)]);
var inst_17405__$1 = cljs.core.async.timeout.call(null,ms);
var inst_17413 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17414 = [in$,inst_17405__$1];
var inst_17415 = (new cljs.core.PersistentVector(null,2,(5),inst_17413,inst_17414,null));
var state_17446__$1 = (function (){var statearr_17455 = state_17446;
(statearr_17455[(11)] = inst_17404);

(statearr_17455[(10)] = inst_17405__$1);

return statearr_17455;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_17446__$1,(8),inst_17415);
} else {
if((state_val_17447 === (17))){
var state_17446__$1 = state_17446;
var statearr_17456_17482 = state_17446__$1;
(statearr_17456_17482[(2)] = null);

(statearr_17456_17482[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17447 === (3))){
var inst_17444 = (state_17446[(2)]);
var state_17446__$1 = state_17446;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17446__$1,inst_17444);
} else {
if((state_val_17447 === (12))){
var inst_17404 = (state_17446[(11)]);
var state_17446__$1 = state_17446;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17446__$1,(15),out,inst_17404);
} else {
if((state_val_17447 === (2))){
var inst_17396 = (state_17446[(7)]);
var inst_17398 = (inst_17396 == null);
var state_17446__$1 = state_17446;
if(cljs.core.truth_(inst_17398)){
var statearr_17457_17483 = state_17446__$1;
(statearr_17457_17483[(1)] = (4));

} else {
var statearr_17458_17484 = state_17446__$1;
(statearr_17458_17484[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17447 === (11))){
var inst_17441 = (state_17446[(2)]);
var inst_17396 = inst_17441;
var state_17446__$1 = (function (){var statearr_17459 = state_17446;
(statearr_17459[(7)] = inst_17396);

return statearr_17459;
})();
var statearr_17460_17485 = state_17446__$1;
(statearr_17460_17485[(2)] = null);

(statearr_17460_17485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17447 === (9))){
var inst_17417 = (state_17446[(12)]);
var inst_17425 = cljs.core.nth.call(null,inst_17417,(0),null);
var inst_17426 = cljs.core.nth.call(null,inst_17417,(1),null);
var state_17446__$1 = (function (){var statearr_17461 = state_17446;
(statearr_17461[(13)] = inst_17426);

return statearr_17461;
})();
var statearr_17462_17486 = state_17446__$1;
(statearr_17462_17486[(2)] = inst_17425);

(statearr_17462_17486[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17447 === (5))){
var inst_17396 = (state_17446[(7)]);
var state_17446__$1 = state_17446;
var statearr_17463_17487 = state_17446__$1;
(statearr_17463_17487[(2)] = inst_17396);

(statearr_17463_17487[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17447 === (14))){
var inst_17439 = (state_17446[(2)]);
var state_17446__$1 = state_17446;
var statearr_17464_17488 = state_17446__$1;
(statearr_17464_17488[(2)] = inst_17439);

(statearr_17464_17488[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17447 === (16))){
var inst_17418 = (state_17446[(14)]);
var state_17446__$1 = state_17446;
var statearr_17465_17489 = state_17446__$1;
(statearr_17465_17489[(2)] = inst_17418);

(statearr_17465_17489[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17447 === (10))){
var inst_17419 = (state_17446[(9)]);
var inst_17405 = (state_17446[(10)]);
var inst_17428 = cljs.core._EQ_.call(null,inst_17419,inst_17405);
var state_17446__$1 = state_17446;
if(inst_17428){
var statearr_17466_17490 = state_17446__$1;
(statearr_17466_17490[(1)] = (12));

} else {
var statearr_17467_17491 = state_17446__$1;
(statearr_17467_17491[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17447 === (18))){
var inst_17437 = (state_17446[(2)]);
var state_17446__$1 = state_17446;
var statearr_17468_17492 = state_17446__$1;
(statearr_17468_17492[(2)] = inst_17437);

(statearr_17468_17492[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17447 === (8))){
var inst_17417 = (state_17446[(12)]);
var inst_17419 = (state_17446[(9)]);
var inst_17417__$1 = (state_17446[(2)]);
var inst_17418 = cljs.core.nth.call(null,inst_17417__$1,(0),null);
var inst_17419__$1 = cljs.core.nth.call(null,inst_17417__$1,(1),null);
var inst_17420 = cljs.core._EQ_.call(null,inst_17419__$1,in$);
var state_17446__$1 = (function (){var statearr_17469 = state_17446;
(statearr_17469[(14)] = inst_17418);

(statearr_17469[(12)] = inst_17417__$1);

(statearr_17469[(9)] = inst_17419__$1);

return statearr_17469;
})();
if(inst_17420){
var statearr_17470_17493 = state_17446__$1;
(statearr_17470_17493[(1)] = (9));

} else {
var statearr_17471_17494 = state_17446__$1;
(statearr_17471_17494[(1)] = (10));

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
});})(c__15288__auto___17476,out))
;
return ((function (switch__15198__auto__,c__15288__auto___17476,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__15199__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__15199__auto____0 = (function (){
var statearr_17472 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17472[(0)] = re_com$typeahead$debounce_$_state_machine__15199__auto__);

(statearr_17472[(1)] = (1));

return statearr_17472;
});
var re_com$typeahead$debounce_$_state_machine__15199__auto____1 = (function (state_17446){
while(true){
var ret_value__15200__auto__ = (function (){try{while(true){
var result__15201__auto__ = switch__15198__auto__.call(null,state_17446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15201__auto__;
}
break;
}
}catch (e17473){if((e17473 instanceof Object)){
var ex__15202__auto__ = e17473;
var statearr_17474_17495 = state_17446;
(statearr_17474_17495[(5)] = ex__15202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17496 = state_17446;
state_17446 = G__17496;
continue;
} else {
return ret_value__15200__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__15199__auto__ = function(state_17446){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__15199__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__15199__auto____1.call(this,state_17446);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_com$typeahead$debounce_$_state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__15199__auto____0;
re_com$typeahead$debounce_$_state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__15199__auto____1;
return re_com$typeahead$debounce_$_state_machine__15199__auto__;
})()
;})(switch__15198__auto__,c__15288__auto___17476,out))
})();
var state__15290__auto__ = (function (){var statearr_17475 = f__15289__auto__.call(null);
(statearr_17475[(6)] = c__15288__auto___17476);

return statearr_17475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15290__auto__);
});})(c__15288__auto___17476,out))
);


return out;
});

//# sourceMappingURL=typeahead.js.map?rel=1506896675328
