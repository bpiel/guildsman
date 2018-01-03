// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if(typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels65546 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels65546 = (function (val,meta65547){
this.val = val;
this.meta65547 = meta65547;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels65546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_65548,meta65547__$1){
var self__ = this;
var _65548__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels65546(self__.val,meta65547__$1));
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels65546.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_65548){
var self__ = this;
var _65548__$1 = this;
return self__.meta65547;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels65546.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels65546.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta65547","meta65547",245225302,null)], null);
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels65546.cljs$lang$type = true;

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels65546.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels65546";

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels65546.cljs$lang$ctorPrWriter = (function (this__63432__auto__,writer__63433__auto__,opt__63434__auto__){
return cljs.core._write.call(null,writer__63433__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels65546");
});

cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels65546 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels65546(val__$1,meta65547){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels65546(val__$1,meta65547));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels65546(val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
});

cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
});

cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__63432__auto__,writer__63433__auto__,opt__63434__auto__){
return cljs.core._write.call(null,writer__63433__auto__,"cljs.core.async.impl.channels/PutBox");
});

cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_.call(null,box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((!((this$ == null))) && (!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
var x__63494__auto__ = (((this$ == null))?null:this$);
var m__63495__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__63494__auto__)]);
if(!((m__63495__auto__ == null))){
return m__63495__auto__.call(null,this$);
} else {
var m__63495__auto____$1 = (cljs.core.async.impl.channels.abort["_"]);
if(!((m__63495__auto____$1 == null))){
return m__63495__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"MMC.abort",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_65560 = self__.puts.pop();
if((putter_65560 == null)){
} else {
var put_handler_65561 = putter_65560.handler;
var val_65562 = putter_65560.val;
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_65561)){
var put_cb_65563 = cljs.core.async.impl.protocols.commit.call(null,put_handler_65561);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_65563,put_handler_65561,val_65562,putter_65560,this$__$1){
return (function (){
return put_cb_65563.call(null,true);
});})(put_cb_65563,put_handler_65561,val_65562,putter_65560,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly.call(null,false));

return cljs.core.async.impl.protocols.close_BANG_.call(null,this$__$1);
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if(!((val == null))){
} else {
throw (new Error(["Assert failed: ","Can't put nil in on a channel","\n","(not (nil? val))"].join('')));
}

var closed__$1 = self__.closed;
if((closed__$1) || (!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))){
return cljs.core.async.impl.channels.box.call(null,!(closed__$1));
} else {
if(cljs.core.truth_((function (){var and__62749__auto__ = self__.buf;
if(cljs.core.truth_(and__62749__auto__)){
return cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf));
} else {
return and__62749__auto__;
}
})())){
cljs.core.async.impl.protocols.commit.call(null,handler);

var done_QMARK_ = cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if(((self__.takes.length > (0))) && ((cljs.core.count.call(null,self__.buf) > (0)))){
var taker = self__.takes.pop();
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker)){
var ret = cljs.core.async.impl.protocols.commit.call(null,taker);
var val__$1 = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var G__65564 = cljs.core.conj.call(null,takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return ret.call(null,val__$1);
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__65564;
continue;
} else {
var G__65565 = takers;
takers = G__65565;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

if(cljs.core.seq.call(null,take_cbs)){
var seq__65549_65566 = cljs.core.seq.call(null,take_cbs);
var chunk__65550_65567 = null;
var count__65551_65568 = (0);
var i__65552_65569 = (0);
while(true){
if((i__65552_65569 < count__65551_65568)){
var f_65570 = cljs.core._nth.call(null,chunk__65550_65567,i__65552_65569);
cljs.core.async.impl.dispatch.run.call(null,f_65570);

var G__65571 = seq__65549_65566;
var G__65572 = chunk__65550_65567;
var G__65573 = count__65551_65568;
var G__65574 = (i__65552_65569 + (1));
seq__65549_65566 = G__65571;
chunk__65550_65567 = G__65572;
count__65551_65568 = G__65573;
i__65552_65569 = G__65574;
continue;
} else {
var temp__5457__auto___65575 = cljs.core.seq.call(null,seq__65549_65566);
if(temp__5457__auto___65575){
var seq__65549_65576__$1 = temp__5457__auto___65575;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65549_65576__$1)){
var c__63692__auto___65577 = cljs.core.chunk_first.call(null,seq__65549_65576__$1);
var G__65578 = cljs.core.chunk_rest.call(null,seq__65549_65576__$1);
var G__65579 = c__63692__auto___65577;
var G__65580 = cljs.core.count.call(null,c__63692__auto___65577);
var G__65581 = (0);
seq__65549_65566 = G__65578;
chunk__65550_65567 = G__65579;
count__65551_65568 = G__65580;
i__65552_65569 = G__65581;
continue;
} else {
var f_65582 = cljs.core.first.call(null,seq__65549_65576__$1);
cljs.core.async.impl.dispatch.run.call(null,f_65582);

var G__65583 = cljs.core.next.call(null,seq__65549_65576__$1);
var G__65584 = null;
var G__65585 = (0);
var G__65586 = (0);
seq__65549_65566 = G__65583;
chunk__65550_65567 = G__65584;
count__65551_65568 = G__65585;
i__65552_65569 = G__65586;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box.call(null,true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit.call(null,taker);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (take_cb,taker,closed__$1,this$__$1){
return (function (){
return take_cb.call(null,val);
});})(take_cb,taker,closed__$1,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,true);
} else {
if((self__.dirty_puts > (64))){
self__.dirty_puts = (0);

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
self__.dirty_puts = (self__.dirty_puts + (1));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.puts.length < (1024))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending puts are allowed on a single channel."," Consider using a windowed buffer."].join('')),"\n","(< (.-length puts) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if(!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler))){
return null;
} else {
if((!((self__.buf == null))) && ((cljs.core.count.call(null,self__.buf) > (0)))){
var temp__5455__auto__ = cljs.core.async.impl.protocols.commit.call(null,handler);
if(cljs.core.truth_(temp__5455__auto__)){
var take_cb = temp__5455__auto__;
var val = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var vec__65553 = (((self__.puts.length > (0)))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = (function (){var and__62749__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler);
if(and__62749__auto__){
return cljs.core.async.impl.protocols.commit.call(null,put_handler);
} else {
return and__62749__auto__;
}
})();
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.call(null,cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val__$1)):null);
if((cljs.core.not.call(null,done_QMARK_)) && (cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf))) && ((self__.puts.length > (0)))){
var G__65587 = cbs__$1;
cbs = G__65587;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.call(null,vec__65553,(0),null);
var cbs = cljs.core.nth.call(null,vec__65553,(1),null);
if(cljs.core.truth_(done_QMARK_)){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

var seq__65556_65588 = cljs.core.seq.call(null,cbs);
var chunk__65557_65589 = null;
var count__65558_65590 = (0);
var i__65559_65591 = (0);
while(true){
if((i__65559_65591 < count__65558_65590)){
var cb_65592 = cljs.core._nth.call(null,chunk__65557_65589,i__65559_65591);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__65556_65588,chunk__65557_65589,count__65558_65590,i__65559_65591,cb_65592,val,vec__65553,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1){
return (function (){
return cb_65592.call(null,true);
});})(seq__65556_65588,chunk__65557_65589,count__65558_65590,i__65559_65591,cb_65592,val,vec__65553,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1))
);

var G__65593 = seq__65556_65588;
var G__65594 = chunk__65557_65589;
var G__65595 = count__65558_65590;
var G__65596 = (i__65559_65591 + (1));
seq__65556_65588 = G__65593;
chunk__65557_65589 = G__65594;
count__65558_65590 = G__65595;
i__65559_65591 = G__65596;
continue;
} else {
var temp__5457__auto___65597 = cljs.core.seq.call(null,seq__65556_65588);
if(temp__5457__auto___65597){
var seq__65556_65598__$1 = temp__5457__auto___65597;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65556_65598__$1)){
var c__63692__auto___65599 = cljs.core.chunk_first.call(null,seq__65556_65598__$1);
var G__65600 = cljs.core.chunk_rest.call(null,seq__65556_65598__$1);
var G__65601 = c__63692__auto___65599;
var G__65602 = cljs.core.count.call(null,c__63692__auto___65599);
var G__65603 = (0);
seq__65556_65588 = G__65600;
chunk__65557_65589 = G__65601;
count__65558_65590 = G__65602;
i__65559_65591 = G__65603;
continue;
} else {
var cb_65604 = cljs.core.first.call(null,seq__65556_65598__$1);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__65556_65588,chunk__65557_65589,count__65558_65590,i__65559_65591,cb_65604,seq__65556_65598__$1,temp__5457__auto___65597,val,vec__65553,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1){
return (function (){
return cb_65604.call(null,true);
});})(seq__65556_65588,chunk__65557_65589,count__65558_65590,i__65559_65591,cb_65604,seq__65556_65598__$1,temp__5457__auto___65597,val,vec__65553,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1))
);

var G__65605 = cljs.core.next.call(null,seq__65556_65598__$1);
var G__65606 = null;
var G__65607 = (0);
var G__65608 = (0);
seq__65556_65588 = G__65605;
chunk__65557_65589 = G__65606;
count__65558_65590 = G__65607;
i__65559_65591 = G__65608;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit.call(null,putter.handler);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (put_cb,putter,this$__$1){
return (function (){
return put_cb.call(null,true);
});})(put_cb,putter,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
self__.add_BANG_.call(null,self__.buf);
} else {
}

if(cljs.core.truth_((function (){var and__62749__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,handler);
if(cljs.core.truth_(and__62749__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,handler);
} else {
return and__62749__auto__;
}
})())){
var has_val = (function (){var and__62749__auto__ = self__.buf;
if(cljs.core.truth_(and__62749__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__62749__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
if((self__.dirty_takes > (64))){
self__.dirty_takes = (0);

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
self__.dirty_takes = (self__.dirty_takes + (1));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.takes.length < (1024))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending takes are allowed on a single channel."].join('')),"\n","(< (.-length takes) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
self__.closed = true;

if(cljs.core.truth_((function (){var and__62749__auto__ = self__.buf;
if(cljs.core.truth_(and__62749__auto__)){
return (self__.puts.length === (0));
} else {
return and__62749__auto__;
}
})())){
self__.add_BANG_.call(null,self__.buf);
} else {
}

while(true){
var taker_65609 = self__.takes.pop();
if((taker_65609 == null)){
} else {
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_65609)){
var take_cb_65610 = cljs.core.async.impl.protocols.commit.call(null,taker_65609);
var val_65611 = (cljs.core.truth_((function (){var and__62749__auto__ = self__.buf;
if(cljs.core.truth_(and__62749__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__62749__auto__;
}
})())?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_65610,val_65611,taker_65609,this$__$1){
return (function (){
return take_cb_65610.call(null,val_65611);
});})(take_cb_65610,val_65611,taker_65609,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
cljs.core.async.impl.protocols.close_buf_BANG_.call(null,self__.buf);
} else {
}

return null;
}
});

cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"takes","takes",298247964,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-takes","dirty-takes",575642138,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"puts","puts",-1883877054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-puts","dirty-puts",57041148,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"closed","closed",720856168,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"add!","add!",2046056845,null)], null);
});

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__63432__auto__,writer__63433__auto__,opt__63434__auto__){
return cljs.core._write.call(null,writer__63433__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});

cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var or__62761__auto__ = exh;
if(cljs.core.truth_(or__62761__auto__)){
return or__62761__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.call(null,buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var G__65613 = arguments.length;
switch (G__65613) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.call(null,buf,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.call(null,buf,xform,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?xform.call(null,cljs.core.async.impl.protocols.add_BANG_):cljs.core.async.impl.protocols.add_BANG_);
return ((function (add_BANG_){
return (function() {
var G__65617 = null;
var G__65617__1 = (function (buf__$1){
try{return add_BANG_.call(null,buf__$1);
}catch (e65614){var t = e65614;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
var G__65617__2 = (function (buf__$1,val){
try{return add_BANG_.call(null,buf__$1,val);
}catch (e65615){var t = e65615;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
G__65617 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__65617__1.call(this,buf__$1);
case 2:
return G__65617__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__65617.cljs$core$IFn$_invoke$arity$1 = G__65617__1;
G__65617.cljs$core$IFn$_invoke$arity$2 = G__65617__2;
return G__65617;
})()
;})(add_BANG_))
})()));
});

cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=channels.js.map?rel=1514950324554
