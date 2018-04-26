// Compiled by ClojureScript 1.9.908 {}
goog.provide('guildsman.histogram_series');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('re_com.core');
guildsman.histogram_series.histos_state__GT_histos_gen_map = (function guildsman$histogram_series$histos_state__GT_histos_gen_map(p__61808){
var map__61809 = p__61808;
var map__61809__$1 = ((((!((map__61809 == null)))?((((map__61809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61809.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61809):map__61809);
var id = cljs.core.get.call(null,map__61809__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var value = cljs.core.get.call(null,map__61809__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,value,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container","container",-1736937707),document.getElementById(id),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),document.getElementById("tooltip")], null)));
});
guildsman.histogram_series.gen_histos = (function guildsman$histogram_series$gen_histos(state_SINGLEQUOTE_){
return histogramSeries(guildsman.histogram_series.histos_state__GT_histos_gen_map.call(null,state_SINGLEQUOTE_));
});
guildsman.histogram_series.histos_comp_did_mount = (function guildsman$histogram_series$histos_comp_did_mount(state,this$){
return cljs.core._vreset_BANG_.call(null,state,cljs.core.assoc.call(null,cljs.core._deref.call(null,state),new cljs.core.Keyword(null,"instance","instance",-2121349050),guildsman.histogram_series.gen_histos.call(null,cljs.core.deref.call(null,state))));
});
guildsman.histogram_series.histos_reagent_render = (function guildsman$histogram_series$histos_reagent_render(state,value){
var map__61811 = cljs.core.deref.call(null,state);
var map__61811__$1 = ((((!((map__61811 == null)))?((((map__61811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61811.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61811):map__61811);
var id = cljs.core.get.call(null,map__61811__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.println.call(null,"histos-reagent-render");

cljs.core.println.call(null,id);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"tooltip"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),"histos"], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"axis x"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"axis y"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"axis y slice"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"stage"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"background"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"x-axis-hover"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"y-axis-hover"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"y-slice-axis-hover"], null)], null)], null)], null)], null);
});
guildsman.histogram_series.histos_comp_will_update = (function guildsman$histogram_series$histos_comp_will_update(state,this$,p__61813){
var vec__61814 = p__61813;
var _ = cljs.core.nth.call(null,vec__61814,(0),null);
var new_value = cljs.core.nth.call(null,vec__61814,(1),null);
return cljs.core._vreset_BANG_.call(null,state,cljs.core.assoc.call(null,cljs.core._deref.call(null,state),new cljs.core.Keyword(null,"value","value",305978217),new_value));
});
guildsman.histogram_series.histos_comp_did_update = (function guildsman$histogram_series$histos_comp_did_update(state,this$,p__61817){
var vec__61818 = p__61817;
var _ = cljs.core.nth.call(null,vec__61818,(0),null);
var old_val = cljs.core.nth.call(null,vec__61818,(1),null);
var map__61821 = cljs.core.deref.call(null,state);
var map__61821__$1 = ((((!((map__61821 == null)))?((((map__61821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61821.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61821):map__61821);
var state_SINGLEQUOTE_ = map__61821__$1;
var value = cljs.core.get.call(null,map__61821__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.not_EQ_.call(null,value,old_val)){
cljs.core.println.call(null,"generate");

return cljs.core._vreset_BANG_.call(null,state,cljs.core.assoc.call(null,cljs.core._deref.call(null,state),new cljs.core.Keyword(null,"instance","instance",-2121349050),guildsman.histogram_series.gen_histos.call(null,state_SINGLEQUOTE_)));
} else {
return null;
}
});
guildsman.histogram_series.histogram_series = (function guildsman$histogram_series$histogram_series(value){
cljs.core.println.call(null,"histos/histos");

var state = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,"histos"))].join(''),new cljs.core.Keyword(null,"value","value",305978217),value], null));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),cljs.core.partial.call(null,guildsman.histogram_series.histos_comp_did_mount,state),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),cljs.core.partial.call(null,guildsman.histogram_series.histos_comp_did_update,state),new cljs.core.Keyword(null,"component-will-update","component-will-update",335247566),cljs.core.partial.call(null,guildsman.histogram_series.histos_comp_will_update,state),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),cljs.core.partial.call(null,guildsman.histogram_series.histos_reagent_render,state)], null));
});

//# sourceMappingURL=histogram_series.js.map?rel=1524702419680
