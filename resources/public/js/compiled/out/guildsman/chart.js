// Compiled by ClojureScript 1.9.908 {}
goog.provide('guildsman.chart');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('re_com.core');
guildsman.chart.chart_state__GT_bb_gen_map = (function guildsman$chart$chart_state__GT_bb_gen_map(state,p__19628){
var map__19629 = p__19628;
var map__19629__$1 = ((((!((map__19629 == null)))?((((map__19629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19629.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19629):map__19629);
var id = cljs.core.get.call(null,map__19629__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var config = cljs.core.get.call(null,map__19629__$1,new cljs.core.Keyword(null,"config","config",994861415));
var data = cljs.core.get.call(null,map__19629__$1,new cljs.core.Keyword(null,"data","data",-232669377));
cljs.core.println.call(null,"!!!!!!!!1 chart-state->bb-gen-map !!!!!!!!");

return cljs.core.clj__GT_js.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"duration","duration",1444101068),(0)], null),new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"bindto","bindto",583512213),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))].join('')));
});
guildsman.chart.chart_comp_did_mount = (function guildsman$chart$chart_comp_did_mount(state,value,this$){
return cljs.core._vreset_BANG_.call(null,state,(function (p__19631){
var map__19632 = p__19631;
var map__19632__$1 = ((((!((map__19632 == null)))?((((map__19632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19632.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19632):map__19632);
var id = cljs.core.get.call(null,map__19632__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.assoc.call(null,value,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"instance","instance",-2121349050),bb.generate(guildsman.chart.chart_state__GT_bb_gen_map.call(null,state,value)));
}).call(null,cljs.core._deref.call(null,state)));
});
guildsman.chart.chart_reagent_render = (function guildsman$chart$chart_reagent_render(state,value){
var map__19634 = cljs.core.deref.call(null,state);
var map__19634__$1 = ((((!((map__19634 == null)))?((((map__19634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19634.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19634):map__19634);
var id = cljs.core.get.call(null,map__19634__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.println.call(null,"chart-reagent-render");

cljs.core.println.call(null,id);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], null);
});
guildsman.chart.chart_comp_will_update = (function guildsman$chart$chart_comp_will_update(state,this$,p__19636){
var vec__19637 = p__19636;
var _ = cljs.core.nth.call(null,vec__19637,(0),null);
var new_value = cljs.core.nth.call(null,vec__19637,(1),null);
return cljs.core._vreset_BANG_.call(null,state,((function (vec__19637,_,new_value){
return (function (p__19640){
var map__19641 = p__19640;
var map__19641__$1 = ((((!((map__19641 == null)))?((((map__19641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19641.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19641):map__19641);
var id = cljs.core.get.call(null,map__19641__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var instance = cljs.core.get.call(null,map__19641__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
return cljs.core.assoc.call(null,new_value,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"instance","instance",-2121349050),instance);
});})(vec__19637,_,new_value))
.call(null,cljs.core._deref.call(null,state)));
});
guildsman.chart.chart_comp_did_update = (function guildsman$chart$chart_comp_did_update(state,this$,p__19643){
var vec__19644 = p__19643;
var _ = cljs.core.nth.call(null,vec__19644,(0),null);
var map__19647 = cljs.core.nth.call(null,vec__19644,(1),null);
var map__19647__$1 = ((((!((map__19647 == null)))?((((map__19647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19647.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19647):map__19647);
var old_val = map__19647__$1;
var config = cljs.core.get.call(null,map__19647__$1,new cljs.core.Keyword(null,"config","config",994861415));
var data = cljs.core.get.call(null,map__19647__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var highlighted = cljs.core.get.call(null,map__19647__$1,new cljs.core.Keyword(null,"highlighted","highlighted",1723498733));
var selected = cljs.core.get.call(null,map__19647__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var map__19649 = cljs.core.deref.call(null,state);
var map__19649__$1 = ((((!((map__19649 == null)))?((((map__19649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19649.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19649):map__19649);
var state_SINGLEQUOTE_ = map__19649__$1;
var instance = cljs.core.get.call(null,map__19649__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
if(cljs.core.not_EQ_.call(null,config,new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(state_SINGLEQUOTE_))){
cljs.core.println.call(null,"generate");

return cljs.core._vreset_BANG_.call(null,state,cljs.core.assoc.call(null,cljs.core._deref.call(null,state),new cljs.core.Keyword(null,"instance","instance",-2121349050),bb.generate(guildsman.chart.chart_state__GT_bb_gen_map.call(null,state,state_SINGLEQUOTE_))));
} else {
if(cljs.core.not_EQ_.call(null,data,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(state_SINGLEQUOTE_))){
cljs.core.println.call(null,"load");

return instance.load(cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(state_SINGLEQUOTE_),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unload","unload",-1943436244),true], null))));
} else {
if(cljs.core.not_EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [highlighted,selected], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"highlighted","highlighted",1723498733).cljs$core$IFn$_invoke$arity$1(state_SINGLEQUOTE_),new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(state_SINGLEQUOTE_)], null))){
return instance.flush();
} else {
return null;
}
}
}
});
guildsman.chart.chart = (function guildsman$chart$chart(value){
cljs.core.println.call(null,"chart/chart");

var state = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,"chart"))].join('')], null));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),cljs.core.partial.call(null,guildsman.chart.chart_comp_did_mount,state,value),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),cljs.core.partial.call(null,guildsman.chart.chart_comp_did_update,state),new cljs.core.Keyword(null,"component-will-update","component-will-update",335247566),cljs.core.partial.call(null,guildsman.chart.chart_comp_will_update,state),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),cljs.core.partial.call(null,guildsman.chart.chart_reagent_render,state)], null));
});

//# sourceMappingURL=chart.js.map?rel=1521112596062
