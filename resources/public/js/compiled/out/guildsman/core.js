// Compiled by ClojureScript 1.9.908 {}
goog.provide('guildsman.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('re_com.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('devtools.core');
goog.require('figwheel.client');
goog.require('cognitect.transit');
goog.require('guildsman.chart');
goog.require('guildsman.histogram_series');
goog.require('guildsman.cytoscape');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.History');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"start loading");
guildsman.core.json_writer = cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
guildsman.core.json_reader = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"graph","graph",1558099509),(function (db,_){
return new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"charts","charts",555258811),(function (db,_){
return new cljs.core.Keyword(null,"charts","charts",555258811).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"left-mode","left-mode",-1490619400),(function (db,_){
return new cljs.core.Keyword(null,"left-mode","left-mode",-1490619400).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"form","form",-1624062471),(function (db,_){
return new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(db);
}));
guildsman.core.components = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"chart","chart",-1481210344,null),new cljs.core.Var(function(){return guildsman.chart.chart;},new cljs.core.Symbol("guildsman.chart","chart","guildsman.chart/chart",-1897656850,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"guildsman.chart","guildsman.chart",-2054763477,null),new cljs.core.Symbol(null,"chart","chart",-1481210344,null),"src/cljs/com/billpiel/guildsman/chart.cljs",12,1,58,58,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null)),null,(cljs.core.truth_(guildsman.chart.chart)?guildsman.chart.chart.cljs$lang$test:null)])),new cljs.core.Symbol(null,"histos","histos",1926565943,null),new cljs.core.Var(function(){return guildsman.histogram_series.histogram_series;},new cljs.core.Symbol("guildsman.histogram-series","histogram-series","guildsman.histogram-series/histogram-series",882868166,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"guildsman.histogram-series","guildsman.histogram-series",-1477011424,null),new cljs.core.Symbol(null,"histogram-series","histogram-series",1553154010,null),"src/cljs/com/billpiel/guildsman/histogram_series.cljs",23,1,59,59,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null)),null,(cljs.core.truth_(guildsman.histogram_series.histogram_series)?guildsman.histogram_series.histogram_series.cljs$lang$test:null)])),new cljs.core.Symbol(null,"graph","graph",-1096336260,null),new cljs.core.Var(function(){return guildsman.cytoscape.cytoscape;},new cljs.core.Symbol("guildsman.cytoscape","cytoscape","guildsman.cytoscape/cytoscape",1353209160,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"guildsman.cytoscape","guildsman.cytoscape",-1875550483,null),new cljs.core.Symbol(null,"cytoscape","cytoscape",2032419273,null),"src/cljs/com/billpiel/guildsman/cytoscape.cljs",16,1,309,309,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null)),null,(cljs.core.truth_(guildsman.cytoscape.cytoscape)?guildsman.cytoscape.cytoscape.cljs$lang$test:null)])),new cljs.core.Symbol(null,"v-box","v-box",5238454,null),re_com.core.v_box,new cljs.core.Symbol(null,"h-box","h-box",1637186817,null),re_com.core.h_box], null);
guildsman.core.mk_renderable = (function guildsman$core$mk_renderable(v){
return clojure.walk.prewalk_replace.call(null,guildsman.core.components,v);
});
guildsman.core.dispatch_ws_msg = (function guildsman$core$dispatch_ws_msg(msg){
return reagent.core.render.call(null,guildsman.core.mk_renderable.call(null,msg),document.getElementById("app"));
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"ws-inbound","ws-inbound",994735957),(function (db,p__78223){
var vec__78224 = p__78223;
var _ = cljs.core.nth.call(null,vec__78224,(0),null);
var map__78227 = cljs.core.nth.call(null,vec__78224,(1),null);
var map__78227__$1 = ((((!((map__78227 == null)))?((((map__78227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78227.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78227):map__78227);
var p = map__78227__$1;
var graph = cljs.core.get.call(null,map__78227__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var charts = cljs.core.get.call(null,map__78227__$1,new cljs.core.Keyword(null,"charts","charts",555258811));
var selected = cljs.core.get.call(null,map__78227__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var form = cljs.core.get.call(null,map__78227__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return cljs.core.merge.call(null,db,(cljs.core.truth_(graph)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"graph","graph",1558099509),graph], null):null),(cljs.core.truth_(charts)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"charts","charts",555258811),charts], null):null),(cljs.core.truth_(selected)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),selected], null):null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"node-select","node-select",-1853167377),(function (db,p__78229){
var vec__78230 = p__78229;
var _ = cljs.core.nth.call(null,vec__78230,(0),null);
var node_id = cljs.core.nth.call(null,vec__78230,(1),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws-send","ws-send",-1223872562),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select","select",1147833503),node_id], null)], null));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"selected","selected",574897764),node_id);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"ws-send","ws-send",-1223872562),(function guildsman$core$ws_send(db,p__78233){
var vec__78234 = p__78233;
var _ = cljs.core.nth.call(null,vec__78234,(0),null);
var data = cljs.core.nth.call(null,vec__78234,(1),null);
new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(db).send(cognitect.transit.write.call(null,guildsman.core.json_writer,data));

return db;
}));
guildsman.core.ws_onmessage = (function guildsman$core$ws_onmessage(data){
var d = cognitect.transit.read.call(null,guildsman.core.json_reader,data.data);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws-inbound","ws-inbound",994735957),d], null));
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"ws-init","ws-init",-1786192831),(function (db,_){
var temp__5455__auto__ = (new WebSocket(["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host),"/ws"].join('')));
if(cljs.core.truth_(temp__5455__auto__)){
var ws = temp__5455__auto__;
cljs.core.println.call(null,"ws init'd!");

ws.onmessage = guildsman.core.ws_onmessage;

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"ws","ws",86841443),ws);
} else {
throw (new Error("Websocket connection failed!"));
}
}));
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws");
cljs.core.println.call(null,"done loading.");
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"init-db","init-db",1595181278),(function (db,_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"graph","graph",1558099509),null,new cljs.core.Keyword(null,"charts","charts",555258811),null,new cljs.core.Keyword(null,"left-mode","left-mode",-1490619400),null], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"click-chart","click-chart",1609816313),(function (db,p__78237){
var vec__78238 = p__78237;
var _ = cljs.core.nth.call(null,vec__78238,(0),null);
var idx = cljs.core.nth.call(null,vec__78238,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"left-mode","left-mode",-1490619400),idx);
}));
guildsman.core.graph_view = (function guildsman$core$graph_view(){
var graph = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graph","graph",1558099509)], null)));
if(cljs.core.truth_(graph)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [guildsman.cytoscape.cytoscape,graph], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"no graph"], null);
}
});
guildsman.core.data_point_view = (function guildsman$core$data_point_view(p__78241){
var map__78242 = p__78241;
var map__78242__$1 = ((((!((map__78242 == null)))?((((map__78242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78242.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__78242):map__78242);
var x = cljs.core.get.call(null,map__78242__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var test = cljs.core.get.call(null,map__78242__$1,new cljs.core.Keyword(null,"test","test",577538877));
var train = cljs.core.get.call(null,map__78242__$1,new cljs.core.Keyword(null,"train","train",1181893679));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.last-point","div.last-point",1496924278)], null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(x)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.step","span.step",314999789),"step",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.val","span.val",1534192235),x], null)], null):null),(cljs.core.truth_(train)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.train","span.train",10871663),"train",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.val","span.val",1534192235),goog.string.format("%.3f",train)], null)], null):null),(cljs.core.truth_(test)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.test","span.test",-1360862340),"test",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.val","span.val",1534192235),goog.string.format("%.3f",test)], null)], null):null)], null)));
});
guildsman.core.chart_view = (function guildsman$core$chart_view(ty,title,data){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.summary","div.summary",-765334266),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.title","span.title",-1997593088),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [guildsman.core.data_point_view,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapv.call(null,cljs.core.juxt.call(null,cljs.core.first,cljs.core.last),new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(data))))], null),(function (){var G__78244 = ty;
var G__78244__$1 = (((G__78244 instanceof cljs.core.Keyword))?G__78244.fqn:null);
switch (G__78244__$1) {
case "chart":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [guildsman.chart.chart,data], null);

break;
case "histos":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [guildsman.histogram_series.histogram_series,data], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__78244__$1)].join('')));

}
})()], null);
});
guildsman.core.charts_view = (function guildsman$core$charts_view(){
var charts = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"charts","charts",555258811)], null)));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#summaries","div#summaries",1315999609)], null),cljs.core.map_indexed.call(null,((function (charts){
return (function (i,p__78246){
var vec__78247 = p__78246;
var ty = cljs.core.nth.call(null,vec__78247,(0),null);
var title = cljs.core.nth.call(null,vec__78247,(1),null);
var data = cljs.core.nth.call(null,vec__78247,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.summary-outer","div.summary-outer",575360463),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__78247,ty,title,data,charts){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click-chart","click-chart",1609816313),i], null));
});})(vec__78247,ty,title,data,charts))
], null),guildsman.core.chart_view.call(null,ty,title,data)], null);
});})(charts))
,charts));
});
guildsman.core.left_pane = (function guildsman$core$left_pane(){
var left_mode = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left-mode","left-mode",-1490619400)], null)));
var charts = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"charts","charts",555258811)], null)));
if((left_mode == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [guildsman.core.graph_view], null);
} else {
var vec__78250 = cljs.core.nth.call(null,charts,left_mode);
var ty = cljs.core.nth.call(null,vec__78250,(0),null);
var title = cljs.core.nth.call(null,vec__78250,(1),null);
var data = cljs.core.nth.call(null,vec__78250,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#big-left","div#big-left",1289679938),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.close-btn","span.close-btn",-518484445),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__78250,ty,title,data,left_mode,charts){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click-chart","click-chart",1609816313),null], null));
});})(vec__78250,ty,title,data,left_mode,charts))
], null),"[ X close ]"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [guildsman.core.chart_view,ty,title,data], null)], null);
}
});
guildsman.core.right_pane = (function guildsman$core$right_pane(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [guildsman.core.charts_view], null);
});
guildsman.core.desc = (function guildsman$core$desc(){
var temp__5457__auto__ = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471)], null)));
if(cljs.core.truth_(temp__5457__auto__)){
var vec__78253 = temp__5457__auto__;
var form = cljs.core.nth.call(null,vec__78253,(0),null);
var ns_name = cljs.core.nth.call(null,vec__78253,(1),null);
var pos = cljs.core.nth.call(null,vec__78253,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#desc","div#desc",35489358),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.form","pre.form",1152735580),form], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.loc","div.loc",-2105377277),ns_name," : ",pos], null)], null);
} else {
return null;
}
});
guildsman.core.page = (function guildsman$core$page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"100%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"1 1 80px",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [guildsman.core.desc], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"100 1 500px",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [guildsman.core.left_pane], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"400px",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [guildsman.core.right_pane], null)], null)], null)], null);
});
guildsman.core.init_BANG_ = (function guildsman$core$init_BANG_(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-db","init-db",1595181278)], null));

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws-init","ws-init",-1786192831)], null));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return guildsman.core.page;},new cljs.core.Symbol("guildsman.core","page","guildsman.core/page",-1281679159,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"guildsman.core","guildsman.core",1813441153,null),new cljs.core.Symbol(null,"page","page",-1805363372,null),"src/cljs/com/billpiel/guildsman/core.cljs",11,1,204,204,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(guildsman.core.page)?guildsman.core.page.cljs$lang$test:null)]))], null),document.getElementById("app"));
});
guildsman.core.init_BANG_.call(null);

//# sourceMappingURL=core.js.map?rel=1514950457481
