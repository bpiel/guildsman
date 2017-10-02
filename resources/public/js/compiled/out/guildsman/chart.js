// Compiled by ClojureScript 1.9.908 {}
goog.provide('guildsman.chart');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('re_com.core');
guildsman.chart.chart_state__GT_bb_gen_map = (function guildsman$chart$chart_state__GT_bb_gen_map(state,p__22055){
var map__22056 = p__22055;
var map__22056__$1 = ((((!((map__22056 == null)))?((((map__22056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22056.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22056):map__22056);
var id = cljs.core.get.call(null,map__22056__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var config = cljs.core.get.call(null,map__22056__$1,new cljs.core.Keyword(null,"config","config",994861415));
var data = cljs.core.get.call(null,map__22056__$1,new cljs.core.Keyword(null,"data","data",-232669377));
cljs.core.println.call(null,"!!!!!!!!1 chart-state->bb-gen-map !!!!!!!!");

return cljs.core.clj__GT_js.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"duration","duration",1444101068),(0)], null),new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"bindto","bindto",583512213),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)))].join('')));
});
guildsman.chart.chart_comp_did_mount = (function guildsman$chart$chart_comp_did_mount(state,value,this$){
return cljs.core._vreset_BANG_.call(null,state,(function (p__22058){
var map__22059 = p__22058;
var map__22059__$1 = ((((!((map__22059 == null)))?((((map__22059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22059.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22059):map__22059);
var id = cljs.core.get.call(null,map__22059__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.assoc.call(null,value,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"instance","instance",-2121349050),bb.generate(guildsman.chart.chart_state__GT_bb_gen_map.call(null,state,value)));
}).call(null,cljs.core._deref.call(null,state)));
});
guildsman.chart.chart_reagent_render = (function guildsman$chart$chart_reagent_render(state,value){
var map__22061 = cljs.core.deref.call(null,state);
var map__22061__$1 = ((((!((map__22061 == null)))?((((map__22061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22061.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22061):map__22061);
var id = cljs.core.get.call(null,map__22061__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.println.call(null,"chart-reagent-render");

cljs.core.println.call(null,id);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], null);
});
guildsman.chart.chart_comp_will_update = (function guildsman$chart$chart_comp_will_update(state,this$,p__22063){
var vec__22064 = p__22063;
var _ = cljs.core.nth.call(null,vec__22064,(0),null);
var new_value = cljs.core.nth.call(null,vec__22064,(1),null);
return cljs.core._vreset_BANG_.call(null,state,((function (vec__22064,_,new_value){
return (function (p__22067){
var map__22068 = p__22067;
var map__22068__$1 = ((((!((map__22068 == null)))?((((map__22068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22068.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22068):map__22068);
var id = cljs.core.get.call(null,map__22068__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var instance = cljs.core.get.call(null,map__22068__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
return cljs.core.assoc.call(null,new_value,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"instance","instance",-2121349050),instance);
});})(vec__22064,_,new_value))
.call(null,cljs.core._deref.call(null,state)));
});
guildsman.chart.chart_comp_did_update = (function guildsman$chart$chart_comp_did_update(state,this$,p__22070){
var vec__22071 = p__22070;
var _ = cljs.core.nth.call(null,vec__22071,(0),null);
var map__22074 = cljs.core.nth.call(null,vec__22071,(1),null);
var map__22074__$1 = ((((!((map__22074 == null)))?((((map__22074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22074.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22074):map__22074);
var old_val = map__22074__$1;
var config = cljs.core.get.call(null,map__22074__$1,new cljs.core.Keyword(null,"config","config",994861415));
var data = cljs.core.get.call(null,map__22074__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var highlighted = cljs.core.get.call(null,map__22074__$1,new cljs.core.Keyword(null,"highlighted","highlighted",1723498733));
var selected = cljs.core.get.call(null,map__22074__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var map__22076 = cljs.core.deref.call(null,state);
var map__22076__$1 = ((((!((map__22076 == null)))?((((map__22076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22076.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22076):map__22076);
var state_SINGLEQUOTE_ = map__22076__$1;
var instance = cljs.core.get.call(null,map__22076__$1,new cljs.core.Keyword(null,"instance","instance",-2121349050));
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

//# sourceMappingURL=chart.js.map?rel=1506917874002
