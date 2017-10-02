// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__15453 = arguments.length;
switch (G__15453) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async15454 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15454 = (function (f,blockable,meta15455){
this.f = f;
this.blockable = blockable;
this.meta15455 = meta15455;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15456,meta15455__$1){
var self__ = this;
var _15456__$1 = this;
return (new cljs.core.async.t_cljs$core$async15454(self__.f,self__.blockable,meta15455__$1));
});

cljs.core.async.t_cljs$core$async15454.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15456){
var self__ = this;
var _15456__$1 = this;
return self__.meta15455;
});

cljs.core.async.t_cljs$core$async15454.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15454.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15454.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async15454.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async15454.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta15455","meta15455",1523779551,null)], null);
});

cljs.core.async.t_cljs$core$async15454.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15454.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15454";

cljs.core.async.t_cljs$core$async15454.cljs$lang$ctorPrWriter = (function (this__10621__auto__,writer__10622__auto__,opt__10623__auto__){
return cljs.core._write.call(null,writer__10622__auto__,"cljs.core.async/t_cljs$core$async15454");
});

cljs.core.async.__GT_t_cljs$core$async15454 = (function cljs$core$async$__GT_t_cljs$core$async15454(f__$1,blockable__$1,meta15455){
return (new cljs.core.async.t_cljs$core$async15454(f__$1,blockable__$1,meta15455));
});

}

return (new cljs.core.async.t_cljs$core$async15454(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__15460 = arguments.length;
switch (G__15460) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__15463 = arguments.length;
switch (G__15463) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__15466 = arguments.length;
switch (G__15466) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_15468 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_15468);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_15468,ret){
return (function (){
return fn1.call(null,val_15468);
});})(val_15468,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__15470 = arguments.length;
switch (G__15470) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__6736__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__6736__auto__)){
var ret = temp__6736__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__6736__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__6736__auto__)){
var retb = temp__6736__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__6736__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__6736__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__10993__auto___15472 = n;
var x_15473 = (0);
while(true){
if((x_15473 < n__10993__auto___15472)){
(a[x_15473] = (0));

var G__15474 = (x_15473 + (1));
x_15473 = G__15474;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__15475 = (i + (1));
i = G__15475;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async15476 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15476 = (function (flag,meta15477){
this.flag = flag;
this.meta15477 = meta15477;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15478,meta15477__$1){
var self__ = this;
var _15478__$1 = this;
return (new cljs.core.async.t_cljs$core$async15476(self__.flag,meta15477__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async15476.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15478){
var self__ = this;
var _15478__$1 = this;
return self__.meta15477;
});})(flag))
;

cljs.core.async.t_cljs$core$async15476.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15476.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async15476.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15476.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15476.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15477","meta15477",401471061,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async15476.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15476.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15476";

cljs.core.async.t_cljs$core$async15476.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__10621__auto__,writer__10622__auto__,opt__10623__auto__){
return cljs.core._write.call(null,writer__10622__auto__,"cljs.core.async/t_cljs$core$async15476");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async15476 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15476(flag__$1,meta15477){
return (new cljs.core.async.t_cljs$core$async15476(flag__$1,meta15477));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async15476(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async15479 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15479 = (function (flag,cb,meta15480){
this.flag = flag;
this.cb = cb;
this.meta15480 = meta15480;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15481,meta15480__$1){
var self__ = this;
var _15481__$1 = this;
return (new cljs.core.async.t_cljs$core$async15479(self__.flag,self__.cb,meta15480__$1));
});

cljs.core.async.t_cljs$core$async15479.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15481){
var self__ = this;
var _15481__$1 = this;
return self__.meta15480;
});

cljs.core.async.t_cljs$core$async15479.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15479.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async15479.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15479.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async15479.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15480","meta15480",-891958689,null)], null);
});

cljs.core.async.t_cljs$core$async15479.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15479.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15479";

cljs.core.async.t_cljs$core$async15479.cljs$lang$ctorPrWriter = (function (this__10621__auto__,writer__10622__auto__,opt__10623__auto__){
return cljs.core._write.call(null,writer__10622__auto__,"cljs.core.async/t_cljs$core$async15479");
});

cljs.core.async.__GT_t_cljs$core$async15479 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15479(flag__$1,cb__$1,meta15480){
return (new cljs.core.async.t_cljs$core$async15479(flag__$1,cb__$1,meta15480));
});

}

return (new cljs.core.async.t_cljs$core$async15479(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15482_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15482_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15483_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15483_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__9950__auto__ = wport;
if(cljs.core.truth_(or__9950__auto__)){
return or__9950__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15484 = (i + (1));
i = G__15484;
continue;
}
} else {
return null;
}
break;
}
})();
var or__9950__auto__ = ret;
if(cljs.core.truth_(or__9950__auto__)){
return or__9950__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6738__auto__ = (function (){var and__9938__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__9938__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__9938__auto__;
}
})();
if(cljs.core.truth_(temp__6738__auto__)){
var got = temp__6738__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__11234__auto__ = [];
var len__11227__auto___15490 = arguments.length;
var i__11228__auto___15491 = (0);
while(true){
if((i__11228__auto___15491 < len__11227__auto___15490)){
args__11234__auto__.push((arguments[i__11228__auto___15491]));

var G__15492 = (i__11228__auto___15491 + (1));
i__11228__auto___15491 = G__15492;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((1) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11235__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15487){
var map__15488 = p__15487;
var map__15488__$1 = ((((!((map__15488 == null)))?((((map__15488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15488.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15488):map__15488);
var opts = map__15488__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15485){
var G__15486 = cljs.core.first.call(null,seq15485);
var seq15485__$1 = cljs.core.next.call(null,seq15485);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15486,seq15485__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__15494 = arguments.length;
switch (G__15494) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15393__auto___15540 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15393__auto___15540){
return (function (){
var f__15394__auto__ = (function (){var switch__15303__auto__ = ((function (c__15393__auto___15540){
return (function (state_15518){
var state_val_15519 = (state_15518[(1)]);
if((state_val_15519 === (7))){
var inst_15514 = (state_15518[(2)]);
var state_15518__$1 = state_15518;
var statearr_15520_15541 = state_15518__$1;
(statearr_15520_15541[(2)] = inst_15514);

(statearr_15520_15541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15519 === (1))){
var state_15518__$1 = state_15518;
var statearr_15521_15542 = state_15518__$1;
(statearr_15521_15542[(2)] = null);

(statearr_15521_15542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15519 === (4))){
var inst_15497 = (state_15518[(7)]);
var inst_15497__$1 = (state_15518[(2)]);
var inst_15498 = (inst_15497__$1 == null);
var state_15518__$1 = (function (){var statearr_15522 = state_15518;
(statearr_15522[(7)] = inst_15497__$1);

return statearr_15522;
})();
if(cljs.core.truth_(inst_15498)){
var statearr_15523_15543 = state_15518__$1;
(statearr_15523_15543[(1)] = (5));

} else {
var statearr_15524_15544 = state_15518__$1;
(statearr_15524_15544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15519 === (13))){
var state_15518__$1 = state_15518;
var statearr_15525_15545 = state_15518__$1;
(statearr_15525_15545[(2)] = null);

(statearr_15525_15545[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15519 === (6))){
var inst_15497 = (state_15518[(7)]);
var state_15518__$1 = state_15518;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15518__$1,(11),to,inst_15497);
} else {
if((state_val_15519 === (3))){
var inst_15516 = (state_15518[(2)]);
var state_15518__$1 = state_15518;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15518__$1,inst_15516);
} else {
if((state_val_15519 === (12))){
var state_15518__$1 = state_15518;
var statearr_15526_15546 = state_15518__$1;
(statearr_15526_15546[(2)] = null);

(statearr_15526_15546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15519 === (2))){
var state_15518__$1 = state_15518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15518__$1,(4),from);
} else {
if((state_val_15519 === (11))){
var inst_15507 = (state_15518[(2)]);
var state_15518__$1 = state_15518;
if(cljs.core.truth_(inst_15507)){
var statearr_15527_15547 = state_15518__$1;
(statearr_15527_15547[(1)] = (12));

} else {
var statearr_15528_15548 = state_15518__$1;
(statearr_15528_15548[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15519 === (9))){
var state_15518__$1 = state_15518;
var statearr_15529_15549 = state_15518__$1;
(statearr_15529_15549[(2)] = null);

(statearr_15529_15549[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15519 === (5))){
var state_15518__$1 = state_15518;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15530_15550 = state_15518__$1;
(statearr_15530_15550[(1)] = (8));

} else {
var statearr_15531_15551 = state_15518__$1;
(statearr_15531_15551[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15519 === (14))){
var inst_15512 = (state_15518[(2)]);
var state_15518__$1 = state_15518;
var statearr_15532_15552 = state_15518__$1;
(statearr_15532_15552[(2)] = inst_15512);

(statearr_15532_15552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15519 === (10))){
var inst_15504 = (state_15518[(2)]);
var state_15518__$1 = state_15518;
var statearr_15533_15553 = state_15518__$1;
(statearr_15533_15553[(2)] = inst_15504);

(statearr_15533_15553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15519 === (8))){
var inst_15501 = cljs.core.async.close_BANG_.call(null,to);
var state_15518__$1 = state_15518;
var statearr_15534_15554 = state_15518__$1;
(statearr_15534_15554[(2)] = inst_15501);

(statearr_15534_15554[(1)] = (10));


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
});})(c__15393__auto___15540))
;
return ((function (switch__15303__auto__,c__15393__auto___15540){
return (function() {
var cljs$core$async$state_machine__15304__auto__ = null;
var cljs$core$async$state_machine__15304__auto____0 = (function (){
var statearr_15535 = [null,null,null,null,null,null,null,null];
(statearr_15535[(0)] = cljs$core$async$state_machine__15304__auto__);

(statearr_15535[(1)] = (1));

return statearr_15535;
});
var cljs$core$async$state_machine__15304__auto____1 = (function (state_15518){
while(true){
var ret_value__15305__auto__ = (function (){try{while(true){
var result__15306__auto__ = switch__15303__auto__.call(null,state_15518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15306__auto__;
}
break;
}
}catch (e15536){if((e15536 instanceof Object)){
var ex__15307__auto__ = e15536;
var statearr_15537_15555 = state_15518;
(statearr_15537_15555[(5)] = ex__15307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15556 = state_15518;
state_15518 = G__15556;
continue;
} else {
return ret_value__15305__auto__;
}
break;
}
});
cljs$core$async$state_machine__15304__auto__ = function(state_15518){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15304__auto____1.call(this,state_15518);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15304__auto____0;
cljs$core$async$state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15304__auto____1;
return cljs$core$async$state_machine__15304__auto__;
})()
;})(switch__15303__auto__,c__15393__auto___15540))
})();
var state__15395__auto__ = (function (){var statearr_15538 = f__15394__auto__.call(null);
(statearr_15538[(6)] = c__15393__auto___15540);

return statearr_15538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15395__auto__);
});})(c__15393__auto___15540))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__15557){
var vec__15558 = p__15557;
var v = cljs.core.nth.call(null,vec__15558,(0),null);
var p = cljs.core.nth.call(null,vec__15558,(1),null);
var job = vec__15558;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__15393__auto___15729 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15393__auto___15729,res,vec__15558,v,p,job,jobs,results){
return (function (){
var f__15394__auto__ = (function (){var switch__15303__auto__ = ((function (c__15393__auto___15729,res,vec__15558,v,p,job,jobs,results){
return (function (state_15565){
var state_val_15566 = (state_15565[(1)]);
if((state_val_15566 === (1))){
var state_15565__$1 = state_15565;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15565__$1,(2),res,v);
} else {
if((state_val_15566 === (2))){
var inst_15562 = (state_15565[(2)]);
var inst_15563 = cljs.core.async.close_BANG_.call(null,res);
var state_15565__$1 = (function (){var statearr_15567 = state_15565;
(statearr_15567[(7)] = inst_15562);

return statearr_15567;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15565__$1,inst_15563);
} else {
return null;
}
}
});})(c__15393__auto___15729,res,vec__15558,v,p,job,jobs,results))
;
return ((function (switch__15303__auto__,c__15393__auto___15729,res,vec__15558,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15304__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15304__auto____0 = (function (){
var statearr_15568 = [null,null,null,null,null,null,null,null];
(statearr_15568[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15304__auto__);

(statearr_15568[(1)] = (1));

return statearr_15568;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15304__auto____1 = (function (state_15565){
while(true){
var ret_value__15305__auto__ = (function (){try{while(true){
var result__15306__auto__ = switch__15303__auto__.call(null,state_15565);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15306__auto__;
}
break;
}
}catch (e15569){if((e15569 instanceof Object)){
var ex__15307__auto__ = e15569;
var statearr_15570_15730 = state_15565;
(statearr_15570_15730[(5)] = ex__15307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15565);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15569;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15731 = state_15565;
state_15565 = G__15731;
continue;
} else {
return ret_value__15305__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15304__auto__ = function(state_15565){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15304__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15304__auto____1.call(this,state_15565);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15304__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15304__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15304__auto__;
})()
;})(switch__15303__auto__,c__15393__auto___15729,res,vec__15558,v,p,job,jobs,results))
})();
var state__15395__auto__ = (function (){var statearr_15571 = f__15394__auto__.call(null);
(statearr_15571[(6)] = c__15393__auto___15729);

return statearr_15571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15395__auto__);
});})(c__15393__auto___15729,res,vec__15558,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__15572){
var vec__15573 = p__15572;
var v = cljs.core.nth.call(null,vec__15573,(0),null);
var p = cljs.core.nth.call(null,vec__15573,(1),null);
var job = vec__15573;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__10993__auto___15732 = n;
var __15733 = (0);
while(true){
if((__15733 < n__10993__auto___15732)){
var G__15576_15734 = type;
var G__15576_15735__$1 = (((G__15576_15734 instanceof cljs.core.Keyword))?G__15576_15734.fqn:null);
switch (G__15576_15735__$1) {
case "compute":
var c__15393__auto___15737 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15733,c__15393__auto___15737,G__15576_15734,G__15576_15735__$1,n__10993__auto___15732,jobs,results,process,async){
return (function (){
var f__15394__auto__ = (function (){var switch__15303__auto__ = ((function (__15733,c__15393__auto___15737,G__15576_15734,G__15576_15735__$1,n__10993__auto___15732,jobs,results,process,async){
return (function (state_15589){
var state_val_15590 = (state_15589[(1)]);
if((state_val_15590 === (1))){
var state_15589__$1 = state_15589;
var statearr_15591_15738 = state_15589__$1;
(statearr_15591_15738[(2)] = null);

(statearr_15591_15738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15590 === (2))){
var state_15589__$1 = state_15589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15589__$1,(4),jobs);
} else {
if((state_val_15590 === (3))){
var inst_15587 = (state_15589[(2)]);
var state_15589__$1 = state_15589;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15589__$1,inst_15587);
} else {
if((state_val_15590 === (4))){
var inst_15579 = (state_15589[(2)]);
var inst_15580 = process.call(null,inst_15579);
var state_15589__$1 = state_15589;
if(cljs.core.truth_(inst_15580)){
var statearr_15592_15739 = state_15589__$1;
(statearr_15592_15739[(1)] = (5));

} else {
var statearr_15593_15740 = state_15589__$1;
(statearr_15593_15740[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15590 === (5))){
var state_15589__$1 = state_15589;
var statearr_15594_15741 = state_15589__$1;
(statearr_15594_15741[(2)] = null);

(statearr_15594_15741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15590 === (6))){
var state_15589__$1 = state_15589;
var statearr_15595_15742 = state_15589__$1;
(statearr_15595_15742[(2)] = null);

(statearr_15595_15742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15590 === (7))){
var inst_15585 = (state_15589[(2)]);
var state_15589__$1 = state_15589;
var statearr_15596_15743 = state_15589__$1;
(statearr_15596_15743[(2)] = inst_15585);

(statearr_15596_15743[(1)] = (3));


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
});})(__15733,c__15393__auto___15737,G__15576_15734,G__15576_15735__$1,n__10993__auto___15732,jobs,results,process,async))
;
return ((function (__15733,switch__15303__auto__,c__15393__auto___15737,G__15576_15734,G__15576_15735__$1,n__10993__auto___15732,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15304__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15304__auto____0 = (function (){
var statearr_15597 = [null,null,null,null,null,null,null];
(statearr_15597[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15304__auto__);

(statearr_15597[(1)] = (1));

return statearr_15597;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15304__auto____1 = (function (state_15589){
while(true){
var ret_value__15305__auto__ = (function (){try{while(true){
var result__15306__auto__ = switch__15303__auto__.call(null,state_15589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15306__auto__;
}
break;
}
}catch (e15598){if((e15598 instanceof Object)){
var ex__15307__auto__ = e15598;
var statearr_15599_15744 = state_15589;
(statearr_15599_15744[(5)] = ex__15307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15745 = state_15589;
state_15589 = G__15745;
continue;
} else {
return ret_value__15305__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15304__auto__ = function(state_15589){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15304__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15304__auto____1.call(this,state_15589);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15304__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15304__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15304__auto__;
})()
;})(__15733,switch__15303__auto__,c__15393__auto___15737,G__15576_15734,G__15576_15735__$1,n__10993__auto___15732,jobs,results,process,async))
})();
var state__15395__auto__ = (function (){var statearr_15600 = f__15394__auto__.call(null);
(statearr_15600[(6)] = c__15393__auto___15737);

return statearr_15600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15395__auto__);
});})(__15733,c__15393__auto___15737,G__15576_15734,G__15576_15735__$1,n__10993__auto___15732,jobs,results,process,async))
);


break;
case "async":
var c__15393__auto___15746 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15733,c__15393__auto___15746,G__15576_15734,G__15576_15735__$1,n__10993__auto___15732,jobs,results,process,async){
return (function (){
var f__15394__auto__ = (function (){var switch__15303__auto__ = ((function (__15733,c__15393__auto___15746,G__15576_15734,G__15576_15735__$1,n__10993__auto___15732,jobs,results,process,async){
return (function (state_15613){
var state_val_15614 = (state_15613[(1)]);
if((state_val_15614 === (1))){
var state_15613__$1 = state_15613;
var statearr_15615_15747 = state_15613__$1;
(statearr_15615_15747[(2)] = null);

(statearr_15615_15747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15614 === (2))){
var state_15613__$1 = state_15613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15613__$1,(4),jobs);
} else {
if((state_val_15614 === (3))){
var inst_15611 = (state_15613[(2)]);
var state_15613__$1 = state_15613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15613__$1,inst_15611);
} else {
if((state_val_15614 === (4))){
var inst_15603 = (state_15613[(2)]);
var inst_15604 = async.call(null,inst_15603);
var state_15613__$1 = state_15613;
if(cljs.core.truth_(inst_15604)){
var statearr_15616_15748 = state_15613__$1;
(statearr_15616_15748[(1)] = (5));

} else {
var statearr_15617_15749 = state_15613__$1;
(statearr_15617_15749[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15614 === (5))){
var state_15613__$1 = state_15613;
var statearr_15618_15750 = state_15613__$1;
(statearr_15618_15750[(2)] = null);

(statearr_15618_15750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15614 === (6))){
var state_15613__$1 = state_15613;
var statearr_15619_15751 = state_15613__$1;
(statearr_15619_15751[(2)] = null);

(statearr_15619_15751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15614 === (7))){
var inst_15609 = (state_15613[(2)]);
var state_15613__$1 = state_15613;
var statearr_15620_15752 = state_15613__$1;
(statearr_15620_15752[(2)] = inst_15609);

(statearr_15620_15752[(1)] = (3));


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
});})(__15733,c__15393__auto___15746,G__15576_15734,G__15576_15735__$1,n__10993__auto___15732,jobs,results,process,async))
;
return ((function (__15733,switch__15303__auto__,c__15393__auto___15746,G__15576_15734,G__15576_15735__$1,n__10993__auto___15732,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15304__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15304__auto____0 = (function (){
var statearr_15621 = [null,null,null,null,null,null,null];
(statearr_15621[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15304__auto__);

(statearr_15621[(1)] = (1));

return statearr_15621;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15304__auto____1 = (function (state_15613){
while(true){
var ret_value__15305__auto__ = (function (){try{while(true){
var result__15306__auto__ = switch__15303__auto__.call(null,state_15613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15306__auto__;
}
break;
}
}catch (e15622){if((e15622 instanceof Object)){
var ex__15307__auto__ = e15622;
var statearr_15623_15753 = state_15613;
(statearr_15623_15753[(5)] = ex__15307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15622;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15754 = state_15613;
state_15613 = G__15754;
continue;
} else {
return ret_value__15305__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15304__auto__ = function(state_15613){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15304__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15304__auto____1.call(this,state_15613);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15304__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15304__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15304__auto__;
})()
;})(__15733,switch__15303__auto__,c__15393__auto___15746,G__15576_15734,G__15576_15735__$1,n__10993__auto___15732,jobs,results,process,async))
})();
var state__15395__auto__ = (function (){var statearr_15624 = f__15394__auto__.call(null);
(statearr_15624[(6)] = c__15393__auto___15746);

return statearr_15624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15395__auto__);
});})(__15733,c__15393__auto___15746,G__15576_15734,G__15576_15735__$1,n__10993__auto___15732,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15576_15735__$1)].join('')));

}

var G__15755 = (__15733 + (1));
__15733 = G__15755;
continue;
} else {
}
break;
}

var c__15393__auto___15756 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15393__auto___15756,jobs,results,process,async){
return (function (){
var f__15394__auto__ = (function (){var switch__15303__auto__ = ((function (c__15393__auto___15756,jobs,results,process,async){
return (function (state_15646){
var state_val_15647 = (state_15646[(1)]);
if((state_val_15647 === (1))){
var state_15646__$1 = state_15646;
var statearr_15648_15757 = state_15646__$1;
(statearr_15648_15757[(2)] = null);

(statearr_15648_15757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15647 === (2))){
var state_15646__$1 = state_15646;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15646__$1,(4),from);
} else {
if((state_val_15647 === (3))){
var inst_15644 = (state_15646[(2)]);
var state_15646__$1 = state_15646;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15646__$1,inst_15644);
} else {
if((state_val_15647 === (4))){
var inst_15627 = (state_15646[(7)]);
var inst_15627__$1 = (state_15646[(2)]);
var inst_15628 = (inst_15627__$1 == null);
var state_15646__$1 = (function (){var statearr_15649 = state_15646;
(statearr_15649[(7)] = inst_15627__$1);

return statearr_15649;
})();
if(cljs.core.truth_(inst_15628)){
var statearr_15650_15758 = state_15646__$1;
(statearr_15650_15758[(1)] = (5));

} else {
var statearr_15651_15759 = state_15646__$1;
(statearr_15651_15759[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15647 === (5))){
var inst_15630 = cljs.core.async.close_BANG_.call(null,jobs);
var state_15646__$1 = state_15646;
var statearr_15652_15760 = state_15646__$1;
(statearr_15652_15760[(2)] = inst_15630);

(statearr_15652_15760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15647 === (6))){
var inst_15632 = (state_15646[(8)]);
var inst_15627 = (state_15646[(7)]);
var inst_15632__$1 = cljs.core.async.chan.call(null,(1));
var inst_15633 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15634 = [inst_15627,inst_15632__$1];
var inst_15635 = (new cljs.core.PersistentVector(null,2,(5),inst_15633,inst_15634,null));
var state_15646__$1 = (function (){var statearr_15653 = state_15646;
(statearr_15653[(8)] = inst_15632__$1);

return statearr_15653;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15646__$1,(8),jobs,inst_15635);
} else {
if((state_val_15647 === (7))){
var inst_15642 = (state_15646[(2)]);
var state_15646__$1 = state_15646;
var statearr_15654_15761 = state_15646__$1;
(statearr_15654_15761[(2)] = inst_15642);

(statearr_15654_15761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15647 === (8))){
var inst_15632 = (state_15646[(8)]);
var inst_15637 = (state_15646[(2)]);
var state_15646__$1 = (function (){var statearr_15655 = state_15646;
(statearr_15655[(9)] = inst_15637);

return statearr_15655;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15646__$1,(9),results,inst_15632);
} else {
if((state_val_15647 === (9))){
var inst_15639 = (state_15646[(2)]);
var state_15646__$1 = (function (){var statearr_15656 = state_15646;
(statearr_15656[(10)] = inst_15639);

return statearr_15656;
})();
var statearr_15657_15762 = state_15646__$1;
(statearr_15657_15762[(2)] = null);

(statearr_15657_15762[(1)] = (2));


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
});})(c__15393__auto___15756,jobs,results,process,async))
;
return ((function (switch__15303__auto__,c__15393__auto___15756,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15304__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15304__auto____0 = (function (){
var statearr_15658 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15658[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15304__auto__);

(statearr_15658[(1)] = (1));

return statearr_15658;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15304__auto____1 = (function (state_15646){
while(true){
var ret_value__15305__auto__ = (function (){try{while(true){
var result__15306__auto__ = switch__15303__auto__.call(null,state_15646);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15306__auto__;
}
break;
}
}catch (e15659){if((e15659 instanceof Object)){
var ex__15307__auto__ = e15659;
var statearr_15660_15763 = state_15646;
(statearr_15660_15763[(5)] = ex__15307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15646);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15764 = state_15646;
state_15646 = G__15764;
continue;
} else {
return ret_value__15305__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15304__auto__ = function(state_15646){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15304__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15304__auto____1.call(this,state_15646);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15304__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15304__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15304__auto__;
})()
;})(switch__15303__auto__,c__15393__auto___15756,jobs,results,process,async))
})();
var state__15395__auto__ = (function (){var statearr_15661 = f__15394__auto__.call(null);
(statearr_15661[(6)] = c__15393__auto___15756);

return statearr_15661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15395__auto__);
});})(c__15393__auto___15756,jobs,results,process,async))
);


var c__15393__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15393__auto__,jobs,results,process,async){
return (function (){
var f__15394__auto__ = (function (){var switch__15303__auto__ = ((function (c__15393__auto__,jobs,results,process,async){
return (function (state_15699){
var state_val_15700 = (state_15699[(1)]);
if((state_val_15700 === (7))){
var inst_15695 = (state_15699[(2)]);
var state_15699__$1 = state_15699;
var statearr_15701_15765 = state_15699__$1;
(statearr_15701_15765[(2)] = inst_15695);

(statearr_15701_15765[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15700 === (20))){
var state_15699__$1 = state_15699;
var statearr_15702_15766 = state_15699__$1;
(statearr_15702_15766[(2)] = null);

(statearr_15702_15766[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15700 === (1))){
var state_15699__$1 = state_15699;
var statearr_15703_15767 = state_15699__$1;
(statearr_15703_15767[(2)] = null);

(statearr_15703_15767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15700 === (4))){
var inst_15664 = (state_15699[(7)]);
var inst_15664__$1 = (state_15699[(2)]);
var inst_15665 = (inst_15664__$1 == null);
var state_15699__$1 = (function (){var statearr_15704 = state_15699;
(statearr_15704[(7)] = inst_15664__$1);

return statearr_15704;
})();
if(cljs.core.truth_(inst_15665)){
var statearr_15705_15768 = state_15699__$1;
(statearr_15705_15768[(1)] = (5));

} else {
var statearr_15706_15769 = state_15699__$1;
(statearr_15706_15769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15700 === (15))){
var inst_15677 = (state_15699[(8)]);
var state_15699__$1 = state_15699;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15699__$1,(18),to,inst_15677);
} else {
if((state_val_15700 === (21))){
var inst_15690 = (state_15699[(2)]);
var state_15699__$1 = state_15699;
var statearr_15707_15770 = state_15699__$1;
(statearr_15707_15770[(2)] = inst_15690);

(statearr_15707_15770[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15700 === (13))){
var inst_15692 = (state_15699[(2)]);
var state_15699__$1 = (function (){var statearr_15708 = state_15699;
(statearr_15708[(9)] = inst_15692);

return statearr_15708;
})();
var statearr_15709_15771 = state_15699__$1;
(statearr_15709_15771[(2)] = null);

(statearr_15709_15771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15700 === (6))){
var inst_15664 = (state_15699[(7)]);
var state_15699__$1 = state_15699;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15699__$1,(11),inst_15664);
} else {
if((state_val_15700 === (17))){
var inst_15685 = (state_15699[(2)]);
var state_15699__$1 = state_15699;
if(cljs.core.truth_(inst_15685)){
var statearr_15710_15772 = state_15699__$1;
(statearr_15710_15772[(1)] = (19));

} else {
var statearr_15711_15773 = state_15699__$1;
(statearr_15711_15773[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15700 === (3))){
var inst_15697 = (state_15699[(2)]);
var state_15699__$1 = state_15699;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15699__$1,inst_15697);
} else {
if((state_val_15700 === (12))){
var inst_15674 = (state_15699[(10)]);
var state_15699__$1 = state_15699;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15699__$1,(14),inst_15674);
} else {
if((state_val_15700 === (2))){
var state_15699__$1 = state_15699;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15699__$1,(4),results);
} else {
if((state_val_15700 === (19))){
var state_15699__$1 = state_15699;
var statearr_15712_15774 = state_15699__$1;
(statearr_15712_15774[(2)] = null);

(statearr_15712_15774[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15700 === (11))){
var inst_15674 = (state_15699[(2)]);
var state_15699__$1 = (function (){var statearr_15713 = state_15699;
(statearr_15713[(10)] = inst_15674);

return statearr_15713;
})();
var statearr_15714_15775 = state_15699__$1;
(statearr_15714_15775[(2)] = null);

(statearr_15714_15775[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15700 === (9))){
var state_15699__$1 = state_15699;
var statearr_15715_15776 = state_15699__$1;
(statearr_15715_15776[(2)] = null);

(statearr_15715_15776[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15700 === (5))){
var state_15699__$1 = state_15699;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15716_15777 = state_15699__$1;
(statearr_15716_15777[(1)] = (8));

} else {
var statearr_15717_15778 = state_15699__$1;
(statearr_15717_15778[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15700 === (14))){
var inst_15679 = (state_15699[(11)]);
var inst_15677 = (state_15699[(8)]);
var inst_15677__$1 = (state_15699[(2)]);
var inst_15678 = (inst_15677__$1 == null);
var inst_15679__$1 = cljs.core.not.call(null,inst_15678);
var state_15699__$1 = (function (){var statearr_15718 = state_15699;
(statearr_15718[(11)] = inst_15679__$1);

(statearr_15718[(8)] = inst_15677__$1);

return statearr_15718;
})();
if(inst_15679__$1){
var statearr_15719_15779 = state_15699__$1;
(statearr_15719_15779[(1)] = (15));

} else {
var statearr_15720_15780 = state_15699__$1;
(statearr_15720_15780[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15700 === (16))){
var inst_15679 = (state_15699[(11)]);
var state_15699__$1 = state_15699;
var statearr_15721_15781 = state_15699__$1;
(statearr_15721_15781[(2)] = inst_15679);

(statearr_15721_15781[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15700 === (10))){
var inst_15671 = (state_15699[(2)]);
var state_15699__$1 = state_15699;
var statearr_15722_15782 = state_15699__$1;
(statearr_15722_15782[(2)] = inst_15671);

(statearr_15722_15782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15700 === (18))){
var inst_15682 = (state_15699[(2)]);
var state_15699__$1 = state_15699;
var statearr_15723_15783 = state_15699__$1;
(statearr_15723_15783[(2)] = inst_15682);

(statearr_15723_15783[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15700 === (8))){
var inst_15668 = cljs.core.async.close_BANG_.call(null,to);
var state_15699__$1 = state_15699;
var statearr_15724_15784 = state_15699__$1;
(statearr_15724_15784[(2)] = inst_15668);

(statearr_15724_15784[(1)] = (10));


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
}
}
}
});})(c__15393__auto__,jobs,results,process,async))
;
return ((function (switch__15303__auto__,c__15393__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15304__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15304__auto____0 = (function (){
var statearr_15725 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15725[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15304__auto__);

(statearr_15725[(1)] = (1));

return statearr_15725;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15304__auto____1 = (function (state_15699){
while(true){
var ret_value__15305__auto__ = (function (){try{while(true){
var result__15306__auto__ = switch__15303__auto__.call(null,state_15699);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15306__auto__;
}
break;
}
}catch (e15726){if((e15726 instanceof Object)){
var ex__15307__auto__ = e15726;
var statearr_15727_15785 = state_15699;
(statearr_15727_15785[(5)] = ex__15307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15786 = state_15699;
state_15699 = G__15786;
continue;
} else {
return ret_value__15305__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15304__auto__ = function(state_15699){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15304__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15304__auto____1.call(this,state_15699);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15304__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15304__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15304__auto__;
})()
;})(switch__15303__auto__,c__15393__auto__,jobs,results,process,async))
})();
var state__15395__auto__ = (function (){var statearr_15728 = f__15394__auto__.call(null);
(statearr_15728[(6)] = c__15393__auto__);

return statearr_15728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15395__auto__);
});})(c__15393__auto__,jobs,results,process,async))
);

return c__15393__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15788 = arguments.length;
switch (G__15788) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15791 = arguments.length;
switch (G__15791) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15794 = arguments.length;
switch (G__15794) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__15393__auto___15843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15393__auto___15843,tc,fc){
return (function (){
var f__15394__auto__ = (function (){var switch__15303__auto__ = ((function (c__15393__auto___15843,tc,fc){
return (function (state_15820){
var state_val_15821 = (state_15820[(1)]);
if((state_val_15821 === (7))){
var inst_15816 = (state_15820[(2)]);
var state_15820__$1 = state_15820;
var statearr_15822_15844 = state_15820__$1;
(statearr_15822_15844[(2)] = inst_15816);

(statearr_15822_15844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15821 === (1))){
var state_15820__$1 = state_15820;
var statearr_15823_15845 = state_15820__$1;
(statearr_15823_15845[(2)] = null);

(statearr_15823_15845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15821 === (4))){
var inst_15797 = (state_15820[(7)]);
var inst_15797__$1 = (state_15820[(2)]);
var inst_15798 = (inst_15797__$1 == null);
var state_15820__$1 = (function (){var statearr_15824 = state_15820;
(statearr_15824[(7)] = inst_15797__$1);

return statearr_15824;
})();
if(cljs.core.truth_(inst_15798)){
var statearr_15825_15846 = state_15820__$1;
(statearr_15825_15846[(1)] = (5));

} else {
var statearr_15826_15847 = state_15820__$1;
(statearr_15826_15847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15821 === (13))){
var state_15820__$1 = state_15820;
var statearr_15827_15848 = state_15820__$1;
(statearr_15827_15848[(2)] = null);

(statearr_15827_15848[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15821 === (6))){
var inst_15797 = (state_15820[(7)]);
var inst_15803 = p.call(null,inst_15797);
var state_15820__$1 = state_15820;
if(cljs.core.truth_(inst_15803)){
var statearr_15828_15849 = state_15820__$1;
(statearr_15828_15849[(1)] = (9));

} else {
var statearr_15829_15850 = state_15820__$1;
(statearr_15829_15850[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15821 === (3))){
var inst_15818 = (state_15820[(2)]);
var state_15820__$1 = state_15820;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15820__$1,inst_15818);
} else {
if((state_val_15821 === (12))){
var state_15820__$1 = state_15820;
var statearr_15830_15851 = state_15820__$1;
(statearr_15830_15851[(2)] = null);

(statearr_15830_15851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15821 === (2))){
var state_15820__$1 = state_15820;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15820__$1,(4),ch);
} else {
if((state_val_15821 === (11))){
var inst_15797 = (state_15820[(7)]);
var inst_15807 = (state_15820[(2)]);
var state_15820__$1 = state_15820;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15820__$1,(8),inst_15807,inst_15797);
} else {
if((state_val_15821 === (9))){
var state_15820__$1 = state_15820;
var statearr_15831_15852 = state_15820__$1;
(statearr_15831_15852[(2)] = tc);

(statearr_15831_15852[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15821 === (5))){
var inst_15800 = cljs.core.async.close_BANG_.call(null,tc);
var inst_15801 = cljs.core.async.close_BANG_.call(null,fc);
var state_15820__$1 = (function (){var statearr_15832 = state_15820;
(statearr_15832[(8)] = inst_15800);

return statearr_15832;
})();
var statearr_15833_15853 = state_15820__$1;
(statearr_15833_15853[(2)] = inst_15801);

(statearr_15833_15853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15821 === (14))){
var inst_15814 = (state_15820[(2)]);
var state_15820__$1 = state_15820;
var statearr_15834_15854 = state_15820__$1;
(statearr_15834_15854[(2)] = inst_15814);

(statearr_15834_15854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15821 === (10))){
var state_15820__$1 = state_15820;
var statearr_15835_15855 = state_15820__$1;
(statearr_15835_15855[(2)] = fc);

(statearr_15835_15855[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15821 === (8))){
var inst_15809 = (state_15820[(2)]);
var state_15820__$1 = state_15820;
if(cljs.core.truth_(inst_15809)){
var statearr_15836_15856 = state_15820__$1;
(statearr_15836_15856[(1)] = (12));

} else {
var statearr_15837_15857 = state_15820__$1;
(statearr_15837_15857[(1)] = (13));

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
});})(c__15393__auto___15843,tc,fc))
;
return ((function (switch__15303__auto__,c__15393__auto___15843,tc,fc){
return (function() {
var cljs$core$async$state_machine__15304__auto__ = null;
var cljs$core$async$state_machine__15304__auto____0 = (function (){
var statearr_15838 = [null,null,null,null,null,null,null,null,null];
(statearr_15838[(0)] = cljs$core$async$state_machine__15304__auto__);

(statearr_15838[(1)] = (1));

return statearr_15838;
});
var cljs$core$async$state_machine__15304__auto____1 = (function (state_15820){
while(true){
var ret_value__15305__auto__ = (function (){try{while(true){
var result__15306__auto__ = switch__15303__auto__.call(null,state_15820);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15306__auto__;
}
break;
}
}catch (e15839){if((e15839 instanceof Object)){
var ex__15307__auto__ = e15839;
var statearr_15840_15858 = state_15820;
(statearr_15840_15858[(5)] = ex__15307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15859 = state_15820;
state_15820 = G__15859;
continue;
} else {
return ret_value__15305__auto__;
}
break;
}
});
cljs$core$async$state_machine__15304__auto__ = function(state_15820){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15304__auto____1.call(this,state_15820);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15304__auto____0;
cljs$core$async$state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15304__auto____1;
return cljs$core$async$state_machine__15304__auto__;
})()
;})(switch__15303__auto__,c__15393__auto___15843,tc,fc))
})();
var state__15395__auto__ = (function (){var statearr_15841 = f__15394__auto__.call(null);
(statearr_15841[(6)] = c__15393__auto___15843);

return statearr_15841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15395__auto__);
});})(c__15393__auto___15843,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__15393__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15393__auto__){
return (function (){
var f__15394__auto__ = (function (){var switch__15303__auto__ = ((function (c__15393__auto__){
return (function (state_15880){
var state_val_15881 = (state_15880[(1)]);
if((state_val_15881 === (7))){
var inst_15876 = (state_15880[(2)]);
var state_15880__$1 = state_15880;
var statearr_15882_15900 = state_15880__$1;
(statearr_15882_15900[(2)] = inst_15876);

(statearr_15882_15900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15881 === (1))){
var inst_15860 = init;
var state_15880__$1 = (function (){var statearr_15883 = state_15880;
(statearr_15883[(7)] = inst_15860);

return statearr_15883;
})();
var statearr_15884_15901 = state_15880__$1;
(statearr_15884_15901[(2)] = null);

(statearr_15884_15901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15881 === (4))){
var inst_15863 = (state_15880[(8)]);
var inst_15863__$1 = (state_15880[(2)]);
var inst_15864 = (inst_15863__$1 == null);
var state_15880__$1 = (function (){var statearr_15885 = state_15880;
(statearr_15885[(8)] = inst_15863__$1);

return statearr_15885;
})();
if(cljs.core.truth_(inst_15864)){
var statearr_15886_15902 = state_15880__$1;
(statearr_15886_15902[(1)] = (5));

} else {
var statearr_15887_15903 = state_15880__$1;
(statearr_15887_15903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15881 === (6))){
var inst_15863 = (state_15880[(8)]);
var inst_15860 = (state_15880[(7)]);
var inst_15867 = (state_15880[(9)]);
var inst_15867__$1 = f.call(null,inst_15860,inst_15863);
var inst_15868 = cljs.core.reduced_QMARK_.call(null,inst_15867__$1);
var state_15880__$1 = (function (){var statearr_15888 = state_15880;
(statearr_15888[(9)] = inst_15867__$1);

return statearr_15888;
})();
if(inst_15868){
var statearr_15889_15904 = state_15880__$1;
(statearr_15889_15904[(1)] = (8));

} else {
var statearr_15890_15905 = state_15880__$1;
(statearr_15890_15905[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15881 === (3))){
var inst_15878 = (state_15880[(2)]);
var state_15880__$1 = state_15880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15880__$1,inst_15878);
} else {
if((state_val_15881 === (2))){
var state_15880__$1 = state_15880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15880__$1,(4),ch);
} else {
if((state_val_15881 === (9))){
var inst_15867 = (state_15880[(9)]);
var inst_15860 = inst_15867;
var state_15880__$1 = (function (){var statearr_15891 = state_15880;
(statearr_15891[(7)] = inst_15860);

return statearr_15891;
})();
var statearr_15892_15906 = state_15880__$1;
(statearr_15892_15906[(2)] = null);

(statearr_15892_15906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15881 === (5))){
var inst_15860 = (state_15880[(7)]);
var state_15880__$1 = state_15880;
var statearr_15893_15907 = state_15880__$1;
(statearr_15893_15907[(2)] = inst_15860);

(statearr_15893_15907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15881 === (10))){
var inst_15874 = (state_15880[(2)]);
var state_15880__$1 = state_15880;
var statearr_15894_15908 = state_15880__$1;
(statearr_15894_15908[(2)] = inst_15874);

(statearr_15894_15908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15881 === (8))){
var inst_15867 = (state_15880[(9)]);
var inst_15870 = cljs.core.deref.call(null,inst_15867);
var state_15880__$1 = state_15880;
var statearr_15895_15909 = state_15880__$1;
(statearr_15895_15909[(2)] = inst_15870);

(statearr_15895_15909[(1)] = (10));


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
});})(c__15393__auto__))
;
return ((function (switch__15303__auto__,c__15393__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15304__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15304__auto____0 = (function (){
var statearr_15896 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15896[(0)] = cljs$core$async$reduce_$_state_machine__15304__auto__);

(statearr_15896[(1)] = (1));

return statearr_15896;
});
var cljs$core$async$reduce_$_state_machine__15304__auto____1 = (function (state_15880){
while(true){
var ret_value__15305__auto__ = (function (){try{while(true){
var result__15306__auto__ = switch__15303__auto__.call(null,state_15880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15306__auto__;
}
break;
}
}catch (e15897){if((e15897 instanceof Object)){
var ex__15307__auto__ = e15897;
var statearr_15898_15910 = state_15880;
(statearr_15898_15910[(5)] = ex__15307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15911 = state_15880;
state_15880 = G__15911;
continue;
} else {
return ret_value__15305__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15304__auto__ = function(state_15880){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15304__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15304__auto____1.call(this,state_15880);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15304__auto____0;
cljs$core$async$reduce_$_state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15304__auto____1;
return cljs$core$async$reduce_$_state_machine__15304__auto__;
})()
;})(switch__15303__auto__,c__15393__auto__))
})();
var state__15395__auto__ = (function (){var statearr_15899 = f__15394__auto__.call(null);
(statearr_15899[(6)] = c__15393__auto__);

return statearr_15899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15395__auto__);
});})(c__15393__auto__))
);

return c__15393__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__15393__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15393__auto__,f__$1){
return (function (){
var f__15394__auto__ = (function (){var switch__15303__auto__ = ((function (c__15393__auto__,f__$1){
return (function (state_15917){
var state_val_15918 = (state_15917[(1)]);
if((state_val_15918 === (1))){
var inst_15912 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_15917__$1 = state_15917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15917__$1,(2),inst_15912);
} else {
if((state_val_15918 === (2))){
var inst_15914 = (state_15917[(2)]);
var inst_15915 = f__$1.call(null,inst_15914);
var state_15917__$1 = state_15917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15917__$1,inst_15915);
} else {
return null;
}
}
});})(c__15393__auto__,f__$1))
;
return ((function (switch__15303__auto__,c__15393__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__15304__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15304__auto____0 = (function (){
var statearr_15919 = [null,null,null,null,null,null,null];
(statearr_15919[(0)] = cljs$core$async$transduce_$_state_machine__15304__auto__);

(statearr_15919[(1)] = (1));

return statearr_15919;
});
var cljs$core$async$transduce_$_state_machine__15304__auto____1 = (function (state_15917){
while(true){
var ret_value__15305__auto__ = (function (){try{while(true){
var result__15306__auto__ = switch__15303__auto__.call(null,state_15917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15306__auto__;
}
break;
}
}catch (e15920){if((e15920 instanceof Object)){
var ex__15307__auto__ = e15920;
var statearr_15921_15923 = state_15917;
(statearr_15921_15923[(5)] = ex__15307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15924 = state_15917;
state_15917 = G__15924;
continue;
} else {
return ret_value__15305__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15304__auto__ = function(state_15917){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15304__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15304__auto____1.call(this,state_15917);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15304__auto____0;
cljs$core$async$transduce_$_state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15304__auto____1;
return cljs$core$async$transduce_$_state_machine__15304__auto__;
})()
;})(switch__15303__auto__,c__15393__auto__,f__$1))
})();
var state__15395__auto__ = (function (){var statearr_15922 = f__15394__auto__.call(null);
(statearr_15922[(6)] = c__15393__auto__);

return statearr_15922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15395__auto__);
});})(c__15393__auto__,f__$1))
);

return c__15393__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15926 = arguments.length;
switch (G__15926) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15393__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15393__auto__){
return (function (){
var f__15394__auto__ = (function (){var switch__15303__auto__ = ((function (c__15393__auto__){
return (function (state_15951){
var state_val_15952 = (state_15951[(1)]);
if((state_val_15952 === (7))){
var inst_15933 = (state_15951[(2)]);
var state_15951__$1 = state_15951;
var statearr_15953_15974 = state_15951__$1;
(statearr_15953_15974[(2)] = inst_15933);

(statearr_15953_15974[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15952 === (1))){
var inst_15927 = cljs.core.seq.call(null,coll);
var inst_15928 = inst_15927;
var state_15951__$1 = (function (){var statearr_15954 = state_15951;
(statearr_15954[(7)] = inst_15928);

return statearr_15954;
})();
var statearr_15955_15975 = state_15951__$1;
(statearr_15955_15975[(2)] = null);

(statearr_15955_15975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15952 === (4))){
var inst_15928 = (state_15951[(7)]);
var inst_15931 = cljs.core.first.call(null,inst_15928);
var state_15951__$1 = state_15951;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15951__$1,(7),ch,inst_15931);
} else {
if((state_val_15952 === (13))){
var inst_15945 = (state_15951[(2)]);
var state_15951__$1 = state_15951;
var statearr_15956_15976 = state_15951__$1;
(statearr_15956_15976[(2)] = inst_15945);

(statearr_15956_15976[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15952 === (6))){
var inst_15936 = (state_15951[(2)]);
var state_15951__$1 = state_15951;
if(cljs.core.truth_(inst_15936)){
var statearr_15957_15977 = state_15951__$1;
(statearr_15957_15977[(1)] = (8));

} else {
var statearr_15958_15978 = state_15951__$1;
(statearr_15958_15978[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15952 === (3))){
var inst_15949 = (state_15951[(2)]);
var state_15951__$1 = state_15951;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15951__$1,inst_15949);
} else {
if((state_val_15952 === (12))){
var state_15951__$1 = state_15951;
var statearr_15959_15979 = state_15951__$1;
(statearr_15959_15979[(2)] = null);

(statearr_15959_15979[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15952 === (2))){
var inst_15928 = (state_15951[(7)]);
var state_15951__$1 = state_15951;
if(cljs.core.truth_(inst_15928)){
var statearr_15960_15980 = state_15951__$1;
(statearr_15960_15980[(1)] = (4));

} else {
var statearr_15961_15981 = state_15951__$1;
(statearr_15961_15981[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15952 === (11))){
var inst_15942 = cljs.core.async.close_BANG_.call(null,ch);
var state_15951__$1 = state_15951;
var statearr_15962_15982 = state_15951__$1;
(statearr_15962_15982[(2)] = inst_15942);

(statearr_15962_15982[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15952 === (9))){
var state_15951__$1 = state_15951;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15963_15983 = state_15951__$1;
(statearr_15963_15983[(1)] = (11));

} else {
var statearr_15964_15984 = state_15951__$1;
(statearr_15964_15984[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15952 === (5))){
var inst_15928 = (state_15951[(7)]);
var state_15951__$1 = state_15951;
var statearr_15965_15985 = state_15951__$1;
(statearr_15965_15985[(2)] = inst_15928);

(statearr_15965_15985[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15952 === (10))){
var inst_15947 = (state_15951[(2)]);
var state_15951__$1 = state_15951;
var statearr_15966_15986 = state_15951__$1;
(statearr_15966_15986[(2)] = inst_15947);

(statearr_15966_15986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15952 === (8))){
var inst_15928 = (state_15951[(7)]);
var inst_15938 = cljs.core.next.call(null,inst_15928);
var inst_15928__$1 = inst_15938;
var state_15951__$1 = (function (){var statearr_15967 = state_15951;
(statearr_15967[(7)] = inst_15928__$1);

return statearr_15967;
})();
var statearr_15968_15987 = state_15951__$1;
(statearr_15968_15987[(2)] = null);

(statearr_15968_15987[(1)] = (2));


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
});})(c__15393__auto__))
;
return ((function (switch__15303__auto__,c__15393__auto__){
return (function() {
var cljs$core$async$state_machine__15304__auto__ = null;
var cljs$core$async$state_machine__15304__auto____0 = (function (){
var statearr_15969 = [null,null,null,null,null,null,null,null];
(statearr_15969[(0)] = cljs$core$async$state_machine__15304__auto__);

(statearr_15969[(1)] = (1));

return statearr_15969;
});
var cljs$core$async$state_machine__15304__auto____1 = (function (state_15951){
while(true){
var ret_value__15305__auto__ = (function (){try{while(true){
var result__15306__auto__ = switch__15303__auto__.call(null,state_15951);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15306__auto__;
}
break;
}
}catch (e15970){if((e15970 instanceof Object)){
var ex__15307__auto__ = e15970;
var statearr_15971_15988 = state_15951;
(statearr_15971_15988[(5)] = ex__15307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15989 = state_15951;
state_15951 = G__15989;
continue;
} else {
return ret_value__15305__auto__;
}
break;
}
});
cljs$core$async$state_machine__15304__auto__ = function(state_15951){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15304__auto____1.call(this,state_15951);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15304__auto____0;
cljs$core$async$state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15304__auto____1;
return cljs$core$async$state_machine__15304__auto__;
})()
;})(switch__15303__auto__,c__15393__auto__))
})();
var state__15395__auto__ = (function (){var statearr_15972 = f__15394__auto__.call(null);
(statearr_15972[(6)] = c__15393__auto__);

return statearr_15972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15395__auto__);
});})(c__15393__auto__))
);

return c__15393__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__10683__auto__ = (((_ == null))?null:_);
var m__10684__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__10683__auto__)]);
if(!((m__10684__auto__ == null))){
return m__10684__auto__.call(null,_);
} else {
var m__10684__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__10684__auto____$1 == null))){
return m__10684__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__10683__auto__ = (((m == null))?null:m);
var m__10684__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__10683__auto__)]);
if(!((m__10684__auto__ == null))){
return m__10684__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__10684__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__10684__auto____$1 == null))){
return m__10684__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__10683__auto__ = (((m == null))?null:m);
var m__10684__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__10683__auto__)]);
if(!((m__10684__auto__ == null))){
return m__10684__auto__.call(null,m,ch);
} else {
var m__10684__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__10684__auto____$1 == null))){
return m__10684__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__10683__auto__ = (((m == null))?null:m);
var m__10684__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__10683__auto__)]);
if(!((m__10684__auto__ == null))){
return m__10684__auto__.call(null,m);
} else {
var m__10684__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__10684__auto____$1 == null))){
return m__10684__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async15990 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15990 = (function (ch,cs,meta15991){
this.ch = ch;
this.cs = cs;
this.meta15991 = meta15991;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15992,meta15991__$1){
var self__ = this;
var _15992__$1 = this;
return (new cljs.core.async.t_cljs$core$async15990(self__.ch,self__.cs,meta15991__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async15990.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15992){
var self__ = this;
var _15992__$1 = this;
return self__.meta15991;
});})(cs))
;

cljs.core.async.t_cljs$core$async15990.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15990.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async15990.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15990.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15990.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15990.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15990.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15991","meta15991",2077280759,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async15990.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15990.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15990";

cljs.core.async.t_cljs$core$async15990.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__10621__auto__,writer__10622__auto__,opt__10623__auto__){
return cljs.core._write.call(null,writer__10622__auto__,"cljs.core.async/t_cljs$core$async15990");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async15990 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async15990(ch__$1,cs__$1,meta15991){
return (new cljs.core.async.t_cljs$core$async15990(ch__$1,cs__$1,meta15991));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async15990(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__15393__auto___16212 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15393__auto___16212,cs,m,dchan,dctr,done){
return (function (){
var f__15394__auto__ = (function (){var switch__15303__auto__ = ((function (c__15393__auto___16212,cs,m,dchan,dctr,done){
return (function (state_16127){
var state_val_16128 = (state_16127[(1)]);
if((state_val_16128 === (7))){
var inst_16123 = (state_16127[(2)]);
var state_16127__$1 = state_16127;
var statearr_16129_16213 = state_16127__$1;
(statearr_16129_16213[(2)] = inst_16123);

(statearr_16129_16213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16128 === (20))){
var inst_16026 = (state_16127[(7)]);
var inst_16038 = cljs.core.first.call(null,inst_16026);
var inst_16039 = cljs.core.nth.call(null,inst_16038,(0),null);
var inst_16040 = cljs.core.nth.call(null,inst_16038,(1),null);
var state_16127__$1 = (function (){var statearr_16130 = state_16127;
(statearr_16130[(8)] = inst_16039);

return statearr_16130;
})();
if(cljs.core.truth_(inst_16040)){
var statearr_16131_16214 = state_16127__$1;
(statearr_16131_16214[(1)] = (22));

} else {
var statearr_16132_16215 = state_16127__$1;
(statearr_16132_16215[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16128 === (27))){
var inst_16068 = (state_16127[(9)]);
var inst_16070 = (state_16127[(10)]);
var inst_15995 = (state_16127[(11)]);
var inst_16075 = (state_16127[(12)]);
var inst_16075__$1 = cljs.core._nth.call(null,inst_16068,inst_16070);
var inst_16076 = cljs.core.async.put_BANG_.call(null,inst_16075__$1,inst_15995,done);
var state_16127__$1 = (function (){var statearr_16133 = state_16127;
(statearr_16133[(12)] = inst_16075__$1);

return statearr_16133;
})();
if(cljs.core.truth_(inst_16076)){
var statearr_16134_16216 = state_16127__$1;
(statearr_16134_16216[(1)] = (30));

} else {
var statearr_16135_16217 = state_16127__$1;
(statearr_16135_16217[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16128 === (1))){
var state_16127__$1 = state_16127;
var statearr_16136_16218 = state_16127__$1;
(statearr_16136_16218[(2)] = null);

(statearr_16136_16218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16128 === (24))){
var inst_16026 = (state_16127[(7)]);
var inst_16045 = (state_16127[(2)]);
var inst_16046 = cljs.core.next.call(null,inst_16026);
var inst_16004 = inst_16046;
var inst_16005 = null;
var inst_16006 = (0);
var inst_16007 = (0);
var state_16127__$1 = (function (){var statearr_16137 = state_16127;
(statearr_16137[(13)] = inst_16005);

(statearr_16137[(14)] = inst_16004);

(statearr_16137[(15)] = inst_16006);

(statearr_16137[(16)] = inst_16045);

(statearr_16137[(17)] = inst_16007);

return statearr_16137;
})();
var statearr_16138_16219 = state_16127__$1;
(statearr_16138_16219[(2)] = null);

(statearr_16138_16219[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16128 === (39))){
var state_16127__$1 = state_16127;
var statearr_16142_16220 = state_16127__$1;
(statearr_16142_16220[(2)] = null);

(statearr_16142_16220[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16128 === (4))){
var inst_15995 = (state_16127[(11)]);
var inst_15995__$1 = (state_16127[(2)]);
var inst_15996 = (inst_15995__$1 == null);
var state_16127__$1 = (function (){var statearr_16143 = state_16127;
(statearr_16143[(11)] = inst_15995__$1);

return statearr_16143;
})();
if(cljs.core.truth_(inst_15996)){
var statearr_16144_16221 = state_16127__$1;
(statearr_16144_16221[(1)] = (5));

} else {
var statearr_16145_16222 = state_16127__$1;
(statearr_16145_16222[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16128 === (15))){
var inst_16005 = (state_16127[(13)]);
var inst_16004 = (state_16127[(14)]);
var inst_16006 = (state_16127[(15)]);
var inst_16007 = (state_16127[(17)]);
var inst_16022 = (state_16127[(2)]);
var inst_16023 = (inst_16007 + (1));
var tmp16139 = inst_16005;
var tmp16140 = inst_16004;
var tmp16141 = inst_16006;
var inst_16004__$1 = tmp16140;
var inst_16005__$1 = tmp16139;
var inst_16006__$1 = tmp16141;
var inst_16007__$1 = inst_16023;
var state_16127__$1 = (function (){var statearr_16146 = state_16127;
(statearr_16146[(18)] = inst_16022);

(statearr_16146[(13)] = inst_16005__$1);

(statearr_16146[(14)] = inst_16004__$1);

(statearr_16146[(15)] = inst_16006__$1);

(statearr_16146[(17)] = inst_16007__$1);

return statearr_16146;
})();
var statearr_16147_16223 = state_16127__$1;
(statearr_16147_16223[(2)] = null);

(statearr_16147_16223[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16128 === (21))){
var inst_16049 = (state_16127[(2)]);
var state_16127__$1 = state_16127;
var statearr_16151_16224 = state_16127__$1;
(statearr_16151_16224[(2)] = inst_16049);

(statearr_16151_16224[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16128 === (31))){
var inst_16075 = (state_16127[(12)]);
var inst_16079 = done.call(null,null);
var inst_16080 = cljs.core.async.untap_STAR_.call(null,m,inst_16075);
var state_16127__$1 = (function (){var statearr_16152 = state_16127;
(statearr_16152[(19)] = inst_16079);

return statearr_16152;
})();
var statearr_16153_16225 = state_16127__$1;
(statearr_16153_16225[(2)] = inst_16080);

(statearr_16153_16225[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16128 === (32))){
var inst_16068 = (state_16127[(9)]);
var inst_16070 = (state_16127[(10)]);
var inst_16067 = (state_16127[(20)]);
var inst_16069 = (state_16127[(21)]);
var inst_16082 = (state_16127[(2)]);
var inst_16083 = (inst_16070 + (1));
var tmp16148 = inst_16068;
var tmp16149 = inst_16067;
var tmp16150 = inst_16069;
var inst_16067__$1 = tmp16149;
var inst_16068__$1 = tmp16148;
var inst_16069__$1 = tmp16150;
var inst_16070__$1 = inst_16083;
var state_16127__$1 = (function (){var statearr_16154 = state_16127;
(statearr_16154[(9)] = inst_16068__$1);

(statearr_16154[(22)] = inst_16082);

(statearr_16154[(10)] = inst_16070__$1);

(statearr_16154[(20)] = inst_16067__$1);

(statearr_16154[(21)] = inst_16069__$1);

return statearr_16154;
})();
var statearr_16155_16226 = state_16127__$1;
(statearr_16155_16226[(2)] = null);

(statearr_16155_16226[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16128 === (40))){
var inst_16095 = (state_16127[(23)]);
var inst_16099 = done.call(null,null);
var inst_16100 = cljs.core.async.untap_STAR_.call(null,m,inst_16095);
var state_16127__$1 = (function (){var statearr_16156 = state_16127;
(statearr_16156[(24)] = inst_16099);

return statearr_16156;
})();
var statearr_16157_16227 = state_16127__$1;
(statearr_16157_16227[(2)] = inst_16100);

(statearr_16157_16227[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16128 === (33))){
var inst_16086 = (state_16127[(25)]);
var inst_16088 = cljs.core.chunked_seq_QMARK_.call(null,inst_16086);
var state_16127__$1 = state_16127;
if(inst_16088){
var statearr_16158_16228 = state_16127__$1;
(statearr_16158_16228[(1)] = (36));

} else {
var statearr_16159_16229 = state_16127__$1;
(statearr_16159_16229[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16128 === (13))){
var inst_16016 = (state_16127[(26)]);
var inst_16019 = cljs.core.async.close_BANG_.call(null,inst_16016);
var state_16127__$1 = state_16127;
var statearr_16160_16230 = state_16127__$1;
(statearr_16160_16230[(2)] = inst_16019);

(statearr_16160_16230[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16128 === (22))){
var inst_16039 = (state_16127[(8)]);
var inst_16042 = cljs.core.async.close_BANG_.call(null,inst_16039);
var state_16127__$1 = state_16127;
var statearr_16161_16231 = state_16127__$1;
(statearr_16161_16231[(2)] = inst_16042);

(statearr_16161_16231[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16128 === (36))){
var inst_16086 = (state_16127[(25)]);
var inst_16090 = cljs.core.chunk_first.call(null,inst_16086);
var inst_16091 = cljs.core.chunk_rest.call(null,inst_16086);
var inst_16092 = cljs.core.count.call(null,inst_16090);
var inst_16067 = inst_16091;
var inst_16068 = inst_16090;
var inst_16069 = inst_16092;
var inst_16070 = (0);
var state_16127__$1 = (function (){var statearr_16162 = state_16127;
(statearr_16162[(9)] = inst_16068);

(statearr_16162[(10)] = inst_16070);

(statearr_16162[(20)] = inst_16067);

(statearr_16162[(21)] = inst_16069);

return statearr_16162;
})();
var statearr_16163_16232 = state_16127__$1;
(statearr_16163_16232[(2)] = null);

(statearr_16163_16232[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16128 === (41))){
var inst_16086 = (state_16127[(25)]);
var inst_16102 = (state_16127[(2)]);
var inst_16103 = cljs.core.next.call(null,inst_16086);
var inst_16067 = inst_16103;
var inst_16068 = null;
var inst_16069 = (0);
var inst_16070 = (0);
var state_16127__$1 = (function (){var statearr_16164 = state_16127;
(statearr_16164[(27)] = inst_16102);

(statearr_16164[(9)] = inst_16068);

(statearr_16164[(10)] = inst_16070);

(statearr_16164[(20)] = inst_16067);

(statearr_16164[(21)] = inst_16069);

return statearr_16164;
})();
var statearr_16165_16233 = state_16127__$1;
(statearr_16165_16233[(2)] = null);

(statearr_16165_16233[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16128 === (43))){
var state_16127__$1 = state_16127;
var statearr_16166_16234 = state_16127__$1;
(statearr_16166_16234[(2)] = null);

(statearr_16166_16234[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16128 === (29))){
var inst_16111 = (state_16127[(2)]);
var state_16127__$1 = state_16127;
var statearr_16167_16235 = state_16127__$1;
(statearr_16167_16235[(2)] = inst_16111);

(statearr_16167_16235[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16128 === (44))){
var inst_16120 = (state_16127[(2)]);
var state_16127__$1 = (function (){var statearr_16168 = state_16127;
(statearr_16168[(28)] = inst_16120);

return statearr_16168;
})();
var statearr_16169_16236 = state_16127__$1;
(statearr_16169_16236[(2)] = null);

(statearr_16169_16236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16128 === (6))){
var inst_16059 = (state_16127[(29)]);
var inst_16058 = cljs.core.deref.call(null,cs);
var inst_16059__$1 = cljs.core.keys.call(null,inst_16058);
var inst_16060 = cljs.core.count.call(null,inst_16059__$1);
var inst_16061 = cljs.core.reset_BANG_.call(null,dctr,inst_16060);
var inst_16066 = cljs.core.seq.call(null,inst_16059__$1);
var inst_16067 = inst_16066;
var inst_16068 = null;
var inst_16069 = (0);
var inst_16070 = (0);
var state_16127__$1 = (function (){var statearr_16170 = state_16127;
(statearr_16170[(29)] = inst_16059__$1);

(statearr_16170[(30)] = inst_16061);

(statearr_16170[(9)] = inst_16068);

(statearr_16170[(10)] = inst_16070);

(statearr_16170[(20)] = inst_16067);

(statearr_16170[(21)] = inst_16069);

return statearr_16170;
})();
var statearr_16171_16237 = state_16127__$1;
(statearr_16171_16237[(2)] = null);

(statearr_16171_16237[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16128 === (28))){
var inst_16086 = (state_16127[(25)]);
var inst_16067 = (state_16127[(20)]);
var inst_16086__$1 = cljs.core.seq.call(null,inst_16067);
var state_16127__$1 = (function (){var statearr_16172 = state_16127;
(statearr_16172[(25)] = inst_16086__$1);

return statearr_16172;
})();
if(inst_16086__$1){
var statearr_16173_16238 = state_16127__$1;
(statearr_16173_16238[(1)] = (33));

} else {
var statearr_16174_16239 = state_16127__$1;
(statearr_16174_16239[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16128 === (25))){
var inst_16070 = (state_16127[(10)]);
var inst_16069 = (state_16127[(21)]);
var inst_16072 = (inst_16070 < inst_16069);
var inst_16073 = inst_16072;
var state_16127__$1 = state_16127;
if(cljs.core.truth_(inst_16073)){
var statearr_16175_16240 = state_16127__$1;
(statearr_16175_16240[(1)] = (27));

} else {
var statearr_16176_16241 = state_16127__$1;
(statearr_16176_16241[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16128 === (34))){
var state_16127__$1 = state_16127;
var statearr_16177_16242 = state_16127__$1;
(statearr_16177_16242[(2)] = null);

(statearr_16177_16242[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16128 === (17))){
var state_16127__$1 = state_16127;
var statearr_16178_16243 = state_16127__$1;
(statearr_16178_16243[(2)] = null);

(statearr_16178_16243[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16128 === (3))){
var inst_16125 = (state_16127[(2)]);
var state_16127__$1 = state_16127;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16127__$1,inst_16125);
} else {
if((state_val_16128 === (12))){
var inst_16054 = (state_16127[(2)]);
var state_16127__$1 = state_16127;
var statearr_16179_16244 = state_16127__$1;
(statearr_16179_16244[(2)] = inst_16054);

(statearr_16179_16244[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16128 === (2))){
var state_16127__$1 = state_16127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16127__$1,(4),ch);
} else {
if((state_val_16128 === (23))){
var state_16127__$1 = state_16127;
var statearr_16180_16245 = state_16127__$1;
(statearr_16180_16245[(2)] = null);

(statearr_16180_16245[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16128 === (35))){
var inst_16109 = (state_16127[(2)]);
var state_16127__$1 = state_16127;
var statearr_16181_16246 = state_16127__$1;
(statearr_16181_16246[(2)] = inst_16109);

(statearr_16181_16246[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16128 === (19))){
var inst_16026 = (state_16127[(7)]);
var inst_16030 = cljs.core.chunk_first.call(null,inst_16026);
var inst_16031 = cljs.core.chunk_rest.call(null,inst_16026);
var inst_16032 = cljs.core.count.call(null,inst_16030);
var inst_16004 = inst_16031;
var inst_16005 = inst_16030;
var inst_16006 = inst_16032;
var inst_16007 = (0);
var state_16127__$1 = (function (){var statearr_16182 = state_16127;
(statearr_16182[(13)] = inst_16005);

(statearr_16182[(14)] = inst_16004);

(statearr_16182[(15)] = inst_16006);

(statearr_16182[(17)] = inst_16007);

return statearr_16182;
})();
var statearr_16183_16247 = state_16127__$1;
(statearr_16183_16247[(2)] = null);

(statearr_16183_16247[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16128 === (11))){
var inst_16004 = (state_16127[(14)]);
var inst_16026 = (state_16127[(7)]);
var inst_16026__$1 = cljs.core.seq.call(null,inst_16004);
var state_16127__$1 = (function (){var statearr_16184 = state_16127;
(statearr_16184[(7)] = inst_16026__$1);

return statearr_16184;
})();
if(inst_16026__$1){
var statearr_16185_16248 = state_16127__$1;
(statearr_16185_16248[(1)] = (16));

} else {
var statearr_16186_16249 = state_16127__$1;
(statearr_16186_16249[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16128 === (9))){
var inst_16056 = (state_16127[(2)]);
var state_16127__$1 = state_16127;
var statearr_16187_16250 = state_16127__$1;
(statearr_16187_16250[(2)] = inst_16056);

(statearr_16187_16250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16128 === (5))){
var inst_16002 = cljs.core.deref.call(null,cs);
var inst_16003 = cljs.core.seq.call(null,inst_16002);
var inst_16004 = inst_16003;
var inst_16005 = null;
var inst_16006 = (0);
var inst_16007 = (0);
var state_16127__$1 = (function (){var statearr_16188 = state_16127;
(statearr_16188[(13)] = inst_16005);

(statearr_16188[(14)] = inst_16004);

(statearr_16188[(15)] = inst_16006);

(statearr_16188[(17)] = inst_16007);

return statearr_16188;
})();
var statearr_16189_16251 = state_16127__$1;
(statearr_16189_16251[(2)] = null);

(statearr_16189_16251[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16128 === (14))){
var state_16127__$1 = state_16127;
var statearr_16190_16252 = state_16127__$1;
(statearr_16190_16252[(2)] = null);

(statearr_16190_16252[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16128 === (45))){
var inst_16117 = (state_16127[(2)]);
var state_16127__$1 = state_16127;
var statearr_16191_16253 = state_16127__$1;
(statearr_16191_16253[(2)] = inst_16117);

(statearr_16191_16253[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16128 === (26))){
var inst_16059 = (state_16127[(29)]);
var inst_16113 = (state_16127[(2)]);
var inst_16114 = cljs.core.seq.call(null,inst_16059);
var state_16127__$1 = (function (){var statearr_16192 = state_16127;
(statearr_16192[(31)] = inst_16113);

return statearr_16192;
})();
if(inst_16114){
var statearr_16193_16254 = state_16127__$1;
(statearr_16193_16254[(1)] = (42));

} else {
var statearr_16194_16255 = state_16127__$1;
(statearr_16194_16255[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16128 === (16))){
var inst_16026 = (state_16127[(7)]);
var inst_16028 = cljs.core.chunked_seq_QMARK_.call(null,inst_16026);
var state_16127__$1 = state_16127;
if(inst_16028){
var statearr_16195_16256 = state_16127__$1;
(statearr_16195_16256[(1)] = (19));

} else {
var statearr_16196_16257 = state_16127__$1;
(statearr_16196_16257[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16128 === (38))){
var inst_16106 = (state_16127[(2)]);
var state_16127__$1 = state_16127;
var statearr_16197_16258 = state_16127__$1;
(statearr_16197_16258[(2)] = inst_16106);

(statearr_16197_16258[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16128 === (30))){
var state_16127__$1 = state_16127;
var statearr_16198_16259 = state_16127__$1;
(statearr_16198_16259[(2)] = null);

(statearr_16198_16259[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16128 === (10))){
var inst_16005 = (state_16127[(13)]);
var inst_16007 = (state_16127[(17)]);
var inst_16015 = cljs.core._nth.call(null,inst_16005,inst_16007);
var inst_16016 = cljs.core.nth.call(null,inst_16015,(0),null);
var inst_16017 = cljs.core.nth.call(null,inst_16015,(1),null);
var state_16127__$1 = (function (){var statearr_16199 = state_16127;
(statearr_16199[(26)] = inst_16016);

return statearr_16199;
})();
if(cljs.core.truth_(inst_16017)){
var statearr_16200_16260 = state_16127__$1;
(statearr_16200_16260[(1)] = (13));

} else {
var statearr_16201_16261 = state_16127__$1;
(statearr_16201_16261[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16128 === (18))){
var inst_16052 = (state_16127[(2)]);
var state_16127__$1 = state_16127;
var statearr_16202_16262 = state_16127__$1;
(statearr_16202_16262[(2)] = inst_16052);

(statearr_16202_16262[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16128 === (42))){
var state_16127__$1 = state_16127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16127__$1,(45),dchan);
} else {
if((state_val_16128 === (37))){
var inst_16086 = (state_16127[(25)]);
var inst_16095 = (state_16127[(23)]);
var inst_15995 = (state_16127[(11)]);
var inst_16095__$1 = cljs.core.first.call(null,inst_16086);
var inst_16096 = cljs.core.async.put_BANG_.call(null,inst_16095__$1,inst_15995,done);
var state_16127__$1 = (function (){var statearr_16203 = state_16127;
(statearr_16203[(23)] = inst_16095__$1);

return statearr_16203;
})();
if(cljs.core.truth_(inst_16096)){
var statearr_16204_16263 = state_16127__$1;
(statearr_16204_16263[(1)] = (39));

} else {
var statearr_16205_16264 = state_16127__$1;
(statearr_16205_16264[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16128 === (8))){
var inst_16006 = (state_16127[(15)]);
var inst_16007 = (state_16127[(17)]);
var inst_16009 = (inst_16007 < inst_16006);
var inst_16010 = inst_16009;
var state_16127__$1 = state_16127;
if(cljs.core.truth_(inst_16010)){
var statearr_16206_16265 = state_16127__$1;
(statearr_16206_16265[(1)] = (10));

} else {
var statearr_16207_16266 = state_16127__$1;
(statearr_16207_16266[(1)] = (11));

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
}
}
}
}
}
}
}
}
}
});})(c__15393__auto___16212,cs,m,dchan,dctr,done))
;
return ((function (switch__15303__auto__,c__15393__auto___16212,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15304__auto__ = null;
var cljs$core$async$mult_$_state_machine__15304__auto____0 = (function (){
var statearr_16208 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16208[(0)] = cljs$core$async$mult_$_state_machine__15304__auto__);

(statearr_16208[(1)] = (1));

return statearr_16208;
});
var cljs$core$async$mult_$_state_machine__15304__auto____1 = (function (state_16127){
while(true){
var ret_value__15305__auto__ = (function (){try{while(true){
var result__15306__auto__ = switch__15303__auto__.call(null,state_16127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15306__auto__;
}
break;
}
}catch (e16209){if((e16209 instanceof Object)){
var ex__15307__auto__ = e16209;
var statearr_16210_16267 = state_16127;
(statearr_16210_16267[(5)] = ex__15307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16209;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16268 = state_16127;
state_16127 = G__16268;
continue;
} else {
return ret_value__15305__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15304__auto__ = function(state_16127){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15304__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15304__auto____1.call(this,state_16127);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15304__auto____0;
cljs$core$async$mult_$_state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15304__auto____1;
return cljs$core$async$mult_$_state_machine__15304__auto__;
})()
;})(switch__15303__auto__,c__15393__auto___16212,cs,m,dchan,dctr,done))
})();
var state__15395__auto__ = (function (){var statearr_16211 = f__15394__auto__.call(null);
(statearr_16211[(6)] = c__15393__auto___16212);

return statearr_16211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15395__auto__);
});})(c__15393__auto___16212,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__16270 = arguments.length;
switch (G__16270) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__10683__auto__ = (((m == null))?null:m);
var m__10684__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__10683__auto__)]);
if(!((m__10684__auto__ == null))){
return m__10684__auto__.call(null,m,ch);
} else {
var m__10684__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__10684__auto____$1 == null))){
return m__10684__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__10683__auto__ = (((m == null))?null:m);
var m__10684__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__10683__auto__)]);
if(!((m__10684__auto__ == null))){
return m__10684__auto__.call(null,m,ch);
} else {
var m__10684__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__10684__auto____$1 == null))){
return m__10684__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__10683__auto__ = (((m == null))?null:m);
var m__10684__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__10683__auto__)]);
if(!((m__10684__auto__ == null))){
return m__10684__auto__.call(null,m);
} else {
var m__10684__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__10684__auto____$1 == null))){
return m__10684__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__10683__auto__ = (((m == null))?null:m);
var m__10684__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__10683__auto__)]);
if(!((m__10684__auto__ == null))){
return m__10684__auto__.call(null,m,state_map);
} else {
var m__10684__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__10684__auto____$1 == null))){
return m__10684__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__10683__auto__ = (((m == null))?null:m);
var m__10684__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__10683__auto__)]);
if(!((m__10684__auto__ == null))){
return m__10684__auto__.call(null,m,mode);
} else {
var m__10684__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__10684__auto____$1 == null))){
return m__10684__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__11234__auto__ = [];
var len__11227__auto___16282 = arguments.length;
var i__11228__auto___16283 = (0);
while(true){
if((i__11228__auto___16283 < len__11227__auto___16282)){
args__11234__auto__.push((arguments[i__11228__auto___16283]));

var G__16284 = (i__11228__auto___16283 + (1));
i__11228__auto___16283 = G__16284;
continue;
} else {
}
break;
}

var argseq__11235__auto__ = ((((3) < args__11234__auto__.length))?(new cljs.core.IndexedSeq(args__11234__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11235__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16276){
var map__16277 = p__16276;
var map__16277__$1 = ((((!((map__16277 == null)))?((((map__16277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16277.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16277):map__16277);
var opts = map__16277__$1;
var statearr_16279_16285 = state;
(statearr_16279_16285[(1)] = cont_block);


var temp__6738__auto__ = cljs.core.async.do_alts.call(null,((function (map__16277,map__16277__$1,opts){
return (function (val){
var statearr_16280_16286 = state;
(statearr_16280_16286[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__16277,map__16277__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6738__auto__)){
var cb = temp__6738__auto__;
var statearr_16281_16287 = state;
(statearr_16281_16287[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16272){
var G__16273 = cljs.core.first.call(null,seq16272);
var seq16272__$1 = cljs.core.next.call(null,seq16272);
var G__16274 = cljs.core.first.call(null,seq16272__$1);
var seq16272__$2 = cljs.core.next.call(null,seq16272__$1);
var G__16275 = cljs.core.first.call(null,seq16272__$2);
var seq16272__$3 = cljs.core.next.call(null,seq16272__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16273,G__16274,G__16275,seq16272__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async16288 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16288 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta16289){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta16289 = meta16289;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16290,meta16289__$1){
var self__ = this;
var _16290__$1 = this;
return (new cljs.core.async.t_cljs$core$async16288(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta16289__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16288.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16290){
var self__ = this;
var _16290__$1 = this;
return self__.meta16289;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16288.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16288.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16288.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16288.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16288.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16288.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16288.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16288.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16288.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta16289","meta16289",-1908957610,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16288.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16288.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16288";

cljs.core.async.t_cljs$core$async16288.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__10621__auto__,writer__10622__auto__,opt__10623__auto__){
return cljs.core._write.call(null,writer__10622__auto__,"cljs.core.async/t_cljs$core$async16288");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async16288 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async16288(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta16289){
return (new cljs.core.async.t_cljs$core$async16288(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta16289));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async16288(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15393__auto___16452 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15393__auto___16452,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15394__auto__ = (function (){var switch__15303__auto__ = ((function (c__15393__auto___16452,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16392){
var state_val_16393 = (state_16392[(1)]);
if((state_val_16393 === (7))){
var inst_16307 = (state_16392[(2)]);
var state_16392__$1 = state_16392;
var statearr_16394_16453 = state_16392__$1;
(statearr_16394_16453[(2)] = inst_16307);

(statearr_16394_16453[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16393 === (20))){
var inst_16319 = (state_16392[(7)]);
var state_16392__$1 = state_16392;
var statearr_16395_16454 = state_16392__$1;
(statearr_16395_16454[(2)] = inst_16319);

(statearr_16395_16454[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16393 === (27))){
var state_16392__$1 = state_16392;
var statearr_16396_16455 = state_16392__$1;
(statearr_16396_16455[(2)] = null);

(statearr_16396_16455[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16393 === (1))){
var inst_16294 = (state_16392[(8)]);
var inst_16294__$1 = calc_state.call(null);
var inst_16296 = (inst_16294__$1 == null);
var inst_16297 = cljs.core.not.call(null,inst_16296);
var state_16392__$1 = (function (){var statearr_16397 = state_16392;
(statearr_16397[(8)] = inst_16294__$1);

return statearr_16397;
})();
if(inst_16297){
var statearr_16398_16456 = state_16392__$1;
(statearr_16398_16456[(1)] = (2));

} else {
var statearr_16399_16457 = state_16392__$1;
(statearr_16399_16457[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16393 === (24))){
var inst_16343 = (state_16392[(9)]);
var inst_16366 = (state_16392[(10)]);
var inst_16352 = (state_16392[(11)]);
var inst_16366__$1 = inst_16343.call(null,inst_16352);
var state_16392__$1 = (function (){var statearr_16400 = state_16392;
(statearr_16400[(10)] = inst_16366__$1);

return statearr_16400;
})();
if(cljs.core.truth_(inst_16366__$1)){
var statearr_16401_16458 = state_16392__$1;
(statearr_16401_16458[(1)] = (29));

} else {
var statearr_16402_16459 = state_16392__$1;
(statearr_16402_16459[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16393 === (4))){
var inst_16310 = (state_16392[(2)]);
var state_16392__$1 = state_16392;
if(cljs.core.truth_(inst_16310)){
var statearr_16403_16460 = state_16392__$1;
(statearr_16403_16460[(1)] = (8));

} else {
var statearr_16404_16461 = state_16392__$1;
(statearr_16404_16461[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16393 === (15))){
var inst_16337 = (state_16392[(2)]);
var state_16392__$1 = state_16392;
if(cljs.core.truth_(inst_16337)){
var statearr_16405_16462 = state_16392__$1;
(statearr_16405_16462[(1)] = (19));

} else {
var statearr_16406_16463 = state_16392__$1;
(statearr_16406_16463[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16393 === (21))){
var inst_16342 = (state_16392[(12)]);
var inst_16342__$1 = (state_16392[(2)]);
var inst_16343 = cljs.core.get.call(null,inst_16342__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16344 = cljs.core.get.call(null,inst_16342__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16345 = cljs.core.get.call(null,inst_16342__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16392__$1 = (function (){var statearr_16407 = state_16392;
(statearr_16407[(9)] = inst_16343);

(statearr_16407[(12)] = inst_16342__$1);

(statearr_16407[(13)] = inst_16344);

return statearr_16407;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_16392__$1,(22),inst_16345);
} else {
if((state_val_16393 === (31))){
var inst_16374 = (state_16392[(2)]);
var state_16392__$1 = state_16392;
if(cljs.core.truth_(inst_16374)){
var statearr_16408_16464 = state_16392__$1;
(statearr_16408_16464[(1)] = (32));

} else {
var statearr_16409_16465 = state_16392__$1;
(statearr_16409_16465[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16393 === (32))){
var inst_16351 = (state_16392[(14)]);
var state_16392__$1 = state_16392;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16392__$1,(35),out,inst_16351);
} else {
if((state_val_16393 === (33))){
var inst_16342 = (state_16392[(12)]);
var inst_16319 = inst_16342;
var state_16392__$1 = (function (){var statearr_16410 = state_16392;
(statearr_16410[(7)] = inst_16319);

return statearr_16410;
})();
var statearr_16411_16466 = state_16392__$1;
(statearr_16411_16466[(2)] = null);

(statearr_16411_16466[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16393 === (13))){
var inst_16319 = (state_16392[(7)]);
var inst_16326 = inst_16319.cljs$lang$protocol_mask$partition0$;
var inst_16327 = (inst_16326 & (64));
var inst_16328 = inst_16319.cljs$core$ISeq$;
var inst_16329 = (cljs.core.PROTOCOL_SENTINEL === inst_16328);
var inst_16330 = (inst_16327) || (inst_16329);
var state_16392__$1 = state_16392;
if(cljs.core.truth_(inst_16330)){
var statearr_16412_16467 = state_16392__$1;
(statearr_16412_16467[(1)] = (16));

} else {
var statearr_16413_16468 = state_16392__$1;
(statearr_16413_16468[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16393 === (22))){
var inst_16352 = (state_16392[(11)]);
var inst_16351 = (state_16392[(14)]);
var inst_16350 = (state_16392[(2)]);
var inst_16351__$1 = cljs.core.nth.call(null,inst_16350,(0),null);
var inst_16352__$1 = cljs.core.nth.call(null,inst_16350,(1),null);
var inst_16353 = (inst_16351__$1 == null);
var inst_16354 = cljs.core._EQ_.call(null,inst_16352__$1,change);
var inst_16355 = (inst_16353) || (inst_16354);
var state_16392__$1 = (function (){var statearr_16414 = state_16392;
(statearr_16414[(11)] = inst_16352__$1);

(statearr_16414[(14)] = inst_16351__$1);

return statearr_16414;
})();
if(cljs.core.truth_(inst_16355)){
var statearr_16415_16469 = state_16392__$1;
(statearr_16415_16469[(1)] = (23));

} else {
var statearr_16416_16470 = state_16392__$1;
(statearr_16416_16470[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16393 === (36))){
var inst_16342 = (state_16392[(12)]);
var inst_16319 = inst_16342;
var state_16392__$1 = (function (){var statearr_16417 = state_16392;
(statearr_16417[(7)] = inst_16319);

return statearr_16417;
})();
var statearr_16418_16471 = state_16392__$1;
(statearr_16418_16471[(2)] = null);

(statearr_16418_16471[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16393 === (29))){
var inst_16366 = (state_16392[(10)]);
var state_16392__$1 = state_16392;
var statearr_16419_16472 = state_16392__$1;
(statearr_16419_16472[(2)] = inst_16366);

(statearr_16419_16472[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16393 === (6))){
var state_16392__$1 = state_16392;
var statearr_16420_16473 = state_16392__$1;
(statearr_16420_16473[(2)] = false);

(statearr_16420_16473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16393 === (28))){
var inst_16362 = (state_16392[(2)]);
var inst_16363 = calc_state.call(null);
var inst_16319 = inst_16363;
var state_16392__$1 = (function (){var statearr_16421 = state_16392;
(statearr_16421[(15)] = inst_16362);

(statearr_16421[(7)] = inst_16319);

return statearr_16421;
})();
var statearr_16422_16474 = state_16392__$1;
(statearr_16422_16474[(2)] = null);

(statearr_16422_16474[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16393 === (25))){
var inst_16388 = (state_16392[(2)]);
var state_16392__$1 = state_16392;
var statearr_16423_16475 = state_16392__$1;
(statearr_16423_16475[(2)] = inst_16388);

(statearr_16423_16475[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16393 === (34))){
var inst_16386 = (state_16392[(2)]);
var state_16392__$1 = state_16392;
var statearr_16424_16476 = state_16392__$1;
(statearr_16424_16476[(2)] = inst_16386);

(statearr_16424_16476[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16393 === (17))){
var state_16392__$1 = state_16392;
var statearr_16425_16477 = state_16392__$1;
(statearr_16425_16477[(2)] = false);

(statearr_16425_16477[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16393 === (3))){
var state_16392__$1 = state_16392;
var statearr_16426_16478 = state_16392__$1;
(statearr_16426_16478[(2)] = false);

(statearr_16426_16478[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16393 === (12))){
var inst_16390 = (state_16392[(2)]);
var state_16392__$1 = state_16392;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16392__$1,inst_16390);
} else {
if((state_val_16393 === (2))){
var inst_16294 = (state_16392[(8)]);
var inst_16299 = inst_16294.cljs$lang$protocol_mask$partition0$;
var inst_16300 = (inst_16299 & (64));
var inst_16301 = inst_16294.cljs$core$ISeq$;
var inst_16302 = (cljs.core.PROTOCOL_SENTINEL === inst_16301);
var inst_16303 = (inst_16300) || (inst_16302);
var state_16392__$1 = state_16392;
if(cljs.core.truth_(inst_16303)){
var statearr_16427_16479 = state_16392__$1;
(statearr_16427_16479[(1)] = (5));

} else {
var statearr_16428_16480 = state_16392__$1;
(statearr_16428_16480[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16393 === (23))){
var inst_16351 = (state_16392[(14)]);
var inst_16357 = (inst_16351 == null);
var state_16392__$1 = state_16392;
if(cljs.core.truth_(inst_16357)){
var statearr_16429_16481 = state_16392__$1;
(statearr_16429_16481[(1)] = (26));

} else {
var statearr_16430_16482 = state_16392__$1;
(statearr_16430_16482[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16393 === (35))){
var inst_16377 = (state_16392[(2)]);
var state_16392__$1 = state_16392;
if(cljs.core.truth_(inst_16377)){
var statearr_16431_16483 = state_16392__$1;
(statearr_16431_16483[(1)] = (36));

} else {
var statearr_16432_16484 = state_16392__$1;
(statearr_16432_16484[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16393 === (19))){
var inst_16319 = (state_16392[(7)]);
var inst_16339 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16319);
var state_16392__$1 = state_16392;
var statearr_16433_16485 = state_16392__$1;
(statearr_16433_16485[(2)] = inst_16339);

(statearr_16433_16485[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16393 === (11))){
var inst_16319 = (state_16392[(7)]);
var inst_16323 = (inst_16319 == null);
var inst_16324 = cljs.core.not.call(null,inst_16323);
var state_16392__$1 = state_16392;
if(inst_16324){
var statearr_16434_16486 = state_16392__$1;
(statearr_16434_16486[(1)] = (13));

} else {
var statearr_16435_16487 = state_16392__$1;
(statearr_16435_16487[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16393 === (9))){
var inst_16294 = (state_16392[(8)]);
var state_16392__$1 = state_16392;
var statearr_16436_16488 = state_16392__$1;
(statearr_16436_16488[(2)] = inst_16294);

(statearr_16436_16488[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16393 === (5))){
var state_16392__$1 = state_16392;
var statearr_16437_16489 = state_16392__$1;
(statearr_16437_16489[(2)] = true);

(statearr_16437_16489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16393 === (14))){
var state_16392__$1 = state_16392;
var statearr_16438_16490 = state_16392__$1;
(statearr_16438_16490[(2)] = false);

(statearr_16438_16490[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16393 === (26))){
var inst_16352 = (state_16392[(11)]);
var inst_16359 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16352);
var state_16392__$1 = state_16392;
var statearr_16439_16491 = state_16392__$1;
(statearr_16439_16491[(2)] = inst_16359);

(statearr_16439_16491[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16393 === (16))){
var state_16392__$1 = state_16392;
var statearr_16440_16492 = state_16392__$1;
(statearr_16440_16492[(2)] = true);

(statearr_16440_16492[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16393 === (38))){
var inst_16382 = (state_16392[(2)]);
var state_16392__$1 = state_16392;
var statearr_16441_16493 = state_16392__$1;
(statearr_16441_16493[(2)] = inst_16382);

(statearr_16441_16493[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16393 === (30))){
var inst_16343 = (state_16392[(9)]);
var inst_16344 = (state_16392[(13)]);
var inst_16352 = (state_16392[(11)]);
var inst_16369 = cljs.core.empty_QMARK_.call(null,inst_16343);
var inst_16370 = inst_16344.call(null,inst_16352);
var inst_16371 = cljs.core.not.call(null,inst_16370);
var inst_16372 = (inst_16369) && (inst_16371);
var state_16392__$1 = state_16392;
var statearr_16442_16494 = state_16392__$1;
(statearr_16442_16494[(2)] = inst_16372);

(statearr_16442_16494[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16393 === (10))){
var inst_16294 = (state_16392[(8)]);
var inst_16315 = (state_16392[(2)]);
var inst_16316 = cljs.core.get.call(null,inst_16315,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16317 = cljs.core.get.call(null,inst_16315,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16318 = cljs.core.get.call(null,inst_16315,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16319 = inst_16294;
var state_16392__$1 = (function (){var statearr_16443 = state_16392;
(statearr_16443[(16)] = inst_16317);

(statearr_16443[(17)] = inst_16316);

(statearr_16443[(18)] = inst_16318);

(statearr_16443[(7)] = inst_16319);

return statearr_16443;
})();
var statearr_16444_16495 = state_16392__$1;
(statearr_16444_16495[(2)] = null);

(statearr_16444_16495[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16393 === (18))){
var inst_16334 = (state_16392[(2)]);
var state_16392__$1 = state_16392;
var statearr_16445_16496 = state_16392__$1;
(statearr_16445_16496[(2)] = inst_16334);

(statearr_16445_16496[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16393 === (37))){
var state_16392__$1 = state_16392;
var statearr_16446_16497 = state_16392__$1;
(statearr_16446_16497[(2)] = null);

(statearr_16446_16497[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16393 === (8))){
var inst_16294 = (state_16392[(8)]);
var inst_16312 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16294);
var state_16392__$1 = state_16392;
var statearr_16447_16498 = state_16392__$1;
(statearr_16447_16498[(2)] = inst_16312);

(statearr_16447_16498[(1)] = (10));


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
}
}
});})(c__15393__auto___16452,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15303__auto__,c__15393__auto___16452,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15304__auto__ = null;
var cljs$core$async$mix_$_state_machine__15304__auto____0 = (function (){
var statearr_16448 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16448[(0)] = cljs$core$async$mix_$_state_machine__15304__auto__);

(statearr_16448[(1)] = (1));

return statearr_16448;
});
var cljs$core$async$mix_$_state_machine__15304__auto____1 = (function (state_16392){
while(true){
var ret_value__15305__auto__ = (function (){try{while(true){
var result__15306__auto__ = switch__15303__auto__.call(null,state_16392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15306__auto__;
}
break;
}
}catch (e16449){if((e16449 instanceof Object)){
var ex__15307__auto__ = e16449;
var statearr_16450_16499 = state_16392;
(statearr_16450_16499[(5)] = ex__15307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16449;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16500 = state_16392;
state_16392 = G__16500;
continue;
} else {
return ret_value__15305__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15304__auto__ = function(state_16392){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15304__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15304__auto____1.call(this,state_16392);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15304__auto____0;
cljs$core$async$mix_$_state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15304__auto____1;
return cljs$core$async$mix_$_state_machine__15304__auto__;
})()
;})(switch__15303__auto__,c__15393__auto___16452,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15395__auto__ = (function (){var statearr_16451 = f__15394__auto__.call(null);
(statearr_16451[(6)] = c__15393__auto___16452);

return statearr_16451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15395__auto__);
});})(c__15393__auto___16452,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__10683__auto__ = (((p == null))?null:p);
var m__10684__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__10683__auto__)]);
if(!((m__10684__auto__ == null))){
return m__10684__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__10684__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__10684__auto____$1 == null))){
return m__10684__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__10683__auto__ = (((p == null))?null:p);
var m__10684__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__10683__auto__)]);
if(!((m__10684__auto__ == null))){
return m__10684__auto__.call(null,p,v,ch);
} else {
var m__10684__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__10684__auto____$1 == null))){
return m__10684__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16502 = arguments.length;
switch (G__16502) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__10683__auto__ = (((p == null))?null:p);
var m__10684__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__10683__auto__)]);
if(!((m__10684__auto__ == null))){
return m__10684__auto__.call(null,p);
} else {
var m__10684__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__10684__auto____$1 == null))){
return m__10684__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__10683__auto__ = (((p == null))?null:p);
var m__10684__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__10683__auto__)]);
if(!((m__10684__auto__ == null))){
return m__10684__auto__.call(null,p,v);
} else {
var m__10684__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__10684__auto____$1 == null))){
return m__10684__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16506 = arguments.length;
switch (G__16506) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__9950__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__9950__auto__)){
return or__9950__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__9950__auto__,mults){
return (function (p1__16504_SHARP_){
if(cljs.core.truth_(p1__16504_SHARP_.call(null,topic))){
return p1__16504_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__16504_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__9950__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async16507 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16507 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16508){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16508 = meta16508;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16509,meta16508__$1){
var self__ = this;
var _16509__$1 = this;
return (new cljs.core.async.t_cljs$core$async16507(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16508__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16507.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16509){
var self__ = this;
var _16509__$1 = this;
return self__.meta16508;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16507.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16507.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16507.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16507.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16507.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__6738__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__6738__auto__)){
var m = temp__6738__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16507.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16507.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16507.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16508","meta16508",-172264443,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16507.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16507.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16507";

cljs.core.async.t_cljs$core$async16507.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__10621__auto__,writer__10622__auto__,opt__10623__auto__){
return cljs.core._write.call(null,writer__10622__auto__,"cljs.core.async/t_cljs$core$async16507");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async16507 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async16507(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16508){
return (new cljs.core.async.t_cljs$core$async16507(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16508));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async16507(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15393__auto___16627 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15393__auto___16627,mults,ensure_mult,p){
return (function (){
var f__15394__auto__ = (function (){var switch__15303__auto__ = ((function (c__15393__auto___16627,mults,ensure_mult,p){
return (function (state_16581){
var state_val_16582 = (state_16581[(1)]);
if((state_val_16582 === (7))){
var inst_16577 = (state_16581[(2)]);
var state_16581__$1 = state_16581;
var statearr_16583_16628 = state_16581__$1;
(statearr_16583_16628[(2)] = inst_16577);

(statearr_16583_16628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16582 === (20))){
var state_16581__$1 = state_16581;
var statearr_16584_16629 = state_16581__$1;
(statearr_16584_16629[(2)] = null);

(statearr_16584_16629[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16582 === (1))){
var state_16581__$1 = state_16581;
var statearr_16585_16630 = state_16581__$1;
(statearr_16585_16630[(2)] = null);

(statearr_16585_16630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16582 === (24))){
var inst_16560 = (state_16581[(7)]);
var inst_16569 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16560);
var state_16581__$1 = state_16581;
var statearr_16586_16631 = state_16581__$1;
(statearr_16586_16631[(2)] = inst_16569);

(statearr_16586_16631[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16582 === (4))){
var inst_16512 = (state_16581[(8)]);
var inst_16512__$1 = (state_16581[(2)]);
var inst_16513 = (inst_16512__$1 == null);
var state_16581__$1 = (function (){var statearr_16587 = state_16581;
(statearr_16587[(8)] = inst_16512__$1);

return statearr_16587;
})();
if(cljs.core.truth_(inst_16513)){
var statearr_16588_16632 = state_16581__$1;
(statearr_16588_16632[(1)] = (5));

} else {
var statearr_16589_16633 = state_16581__$1;
(statearr_16589_16633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16582 === (15))){
var inst_16554 = (state_16581[(2)]);
var state_16581__$1 = state_16581;
var statearr_16590_16634 = state_16581__$1;
(statearr_16590_16634[(2)] = inst_16554);

(statearr_16590_16634[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16582 === (21))){
var inst_16574 = (state_16581[(2)]);
var state_16581__$1 = (function (){var statearr_16591 = state_16581;
(statearr_16591[(9)] = inst_16574);

return statearr_16591;
})();
var statearr_16592_16635 = state_16581__$1;
(statearr_16592_16635[(2)] = null);

(statearr_16592_16635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16582 === (13))){
var inst_16536 = (state_16581[(10)]);
var inst_16538 = cljs.core.chunked_seq_QMARK_.call(null,inst_16536);
var state_16581__$1 = state_16581;
if(inst_16538){
var statearr_16593_16636 = state_16581__$1;
(statearr_16593_16636[(1)] = (16));

} else {
var statearr_16594_16637 = state_16581__$1;
(statearr_16594_16637[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16582 === (22))){
var inst_16566 = (state_16581[(2)]);
var state_16581__$1 = state_16581;
if(cljs.core.truth_(inst_16566)){
var statearr_16595_16638 = state_16581__$1;
(statearr_16595_16638[(1)] = (23));

} else {
var statearr_16596_16639 = state_16581__$1;
(statearr_16596_16639[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16582 === (6))){
var inst_16512 = (state_16581[(8)]);
var inst_16562 = (state_16581[(11)]);
var inst_16560 = (state_16581[(7)]);
var inst_16560__$1 = topic_fn.call(null,inst_16512);
var inst_16561 = cljs.core.deref.call(null,mults);
var inst_16562__$1 = cljs.core.get.call(null,inst_16561,inst_16560__$1);
var state_16581__$1 = (function (){var statearr_16597 = state_16581;
(statearr_16597[(11)] = inst_16562__$1);

(statearr_16597[(7)] = inst_16560__$1);

return statearr_16597;
})();
if(cljs.core.truth_(inst_16562__$1)){
var statearr_16598_16640 = state_16581__$1;
(statearr_16598_16640[(1)] = (19));

} else {
var statearr_16599_16641 = state_16581__$1;
(statearr_16599_16641[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16582 === (25))){
var inst_16571 = (state_16581[(2)]);
var state_16581__$1 = state_16581;
var statearr_16600_16642 = state_16581__$1;
(statearr_16600_16642[(2)] = inst_16571);

(statearr_16600_16642[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16582 === (17))){
var inst_16536 = (state_16581[(10)]);
var inst_16545 = cljs.core.first.call(null,inst_16536);
var inst_16546 = cljs.core.async.muxch_STAR_.call(null,inst_16545);
var inst_16547 = cljs.core.async.close_BANG_.call(null,inst_16546);
var inst_16548 = cljs.core.next.call(null,inst_16536);
var inst_16522 = inst_16548;
var inst_16523 = null;
var inst_16524 = (0);
var inst_16525 = (0);
var state_16581__$1 = (function (){var statearr_16601 = state_16581;
(statearr_16601[(12)] = inst_16547);

(statearr_16601[(13)] = inst_16524);

(statearr_16601[(14)] = inst_16523);

(statearr_16601[(15)] = inst_16525);

(statearr_16601[(16)] = inst_16522);

return statearr_16601;
})();
var statearr_16602_16643 = state_16581__$1;
(statearr_16602_16643[(2)] = null);

(statearr_16602_16643[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16582 === (3))){
var inst_16579 = (state_16581[(2)]);
var state_16581__$1 = state_16581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16581__$1,inst_16579);
} else {
if((state_val_16582 === (12))){
var inst_16556 = (state_16581[(2)]);
var state_16581__$1 = state_16581;
var statearr_16603_16644 = state_16581__$1;
(statearr_16603_16644[(2)] = inst_16556);

(statearr_16603_16644[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16582 === (2))){
var state_16581__$1 = state_16581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16581__$1,(4),ch);
} else {
if((state_val_16582 === (23))){
var state_16581__$1 = state_16581;
var statearr_16604_16645 = state_16581__$1;
(statearr_16604_16645[(2)] = null);

(statearr_16604_16645[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16582 === (19))){
var inst_16512 = (state_16581[(8)]);
var inst_16562 = (state_16581[(11)]);
var inst_16564 = cljs.core.async.muxch_STAR_.call(null,inst_16562);
var state_16581__$1 = state_16581;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16581__$1,(22),inst_16564,inst_16512);
} else {
if((state_val_16582 === (11))){
var inst_16536 = (state_16581[(10)]);
var inst_16522 = (state_16581[(16)]);
var inst_16536__$1 = cljs.core.seq.call(null,inst_16522);
var state_16581__$1 = (function (){var statearr_16605 = state_16581;
(statearr_16605[(10)] = inst_16536__$1);

return statearr_16605;
})();
if(inst_16536__$1){
var statearr_16606_16646 = state_16581__$1;
(statearr_16606_16646[(1)] = (13));

} else {
var statearr_16607_16647 = state_16581__$1;
(statearr_16607_16647[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16582 === (9))){
var inst_16558 = (state_16581[(2)]);
var state_16581__$1 = state_16581;
var statearr_16608_16648 = state_16581__$1;
(statearr_16608_16648[(2)] = inst_16558);

(statearr_16608_16648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16582 === (5))){
var inst_16519 = cljs.core.deref.call(null,mults);
var inst_16520 = cljs.core.vals.call(null,inst_16519);
var inst_16521 = cljs.core.seq.call(null,inst_16520);
var inst_16522 = inst_16521;
var inst_16523 = null;
var inst_16524 = (0);
var inst_16525 = (0);
var state_16581__$1 = (function (){var statearr_16609 = state_16581;
(statearr_16609[(13)] = inst_16524);

(statearr_16609[(14)] = inst_16523);

(statearr_16609[(15)] = inst_16525);

(statearr_16609[(16)] = inst_16522);

return statearr_16609;
})();
var statearr_16610_16649 = state_16581__$1;
(statearr_16610_16649[(2)] = null);

(statearr_16610_16649[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16582 === (14))){
var state_16581__$1 = state_16581;
var statearr_16614_16650 = state_16581__$1;
(statearr_16614_16650[(2)] = null);

(statearr_16614_16650[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16582 === (16))){
var inst_16536 = (state_16581[(10)]);
var inst_16540 = cljs.core.chunk_first.call(null,inst_16536);
var inst_16541 = cljs.core.chunk_rest.call(null,inst_16536);
var inst_16542 = cljs.core.count.call(null,inst_16540);
var inst_16522 = inst_16541;
var inst_16523 = inst_16540;
var inst_16524 = inst_16542;
var inst_16525 = (0);
var state_16581__$1 = (function (){var statearr_16615 = state_16581;
(statearr_16615[(13)] = inst_16524);

(statearr_16615[(14)] = inst_16523);

(statearr_16615[(15)] = inst_16525);

(statearr_16615[(16)] = inst_16522);

return statearr_16615;
})();
var statearr_16616_16651 = state_16581__$1;
(statearr_16616_16651[(2)] = null);

(statearr_16616_16651[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16582 === (10))){
var inst_16524 = (state_16581[(13)]);
var inst_16523 = (state_16581[(14)]);
var inst_16525 = (state_16581[(15)]);
var inst_16522 = (state_16581[(16)]);
var inst_16530 = cljs.core._nth.call(null,inst_16523,inst_16525);
var inst_16531 = cljs.core.async.muxch_STAR_.call(null,inst_16530);
var inst_16532 = cljs.core.async.close_BANG_.call(null,inst_16531);
var inst_16533 = (inst_16525 + (1));
var tmp16611 = inst_16524;
var tmp16612 = inst_16523;
var tmp16613 = inst_16522;
var inst_16522__$1 = tmp16613;
var inst_16523__$1 = tmp16612;
var inst_16524__$1 = tmp16611;
var inst_16525__$1 = inst_16533;
var state_16581__$1 = (function (){var statearr_16617 = state_16581;
(statearr_16617[(17)] = inst_16532);

(statearr_16617[(13)] = inst_16524__$1);

(statearr_16617[(14)] = inst_16523__$1);

(statearr_16617[(15)] = inst_16525__$1);

(statearr_16617[(16)] = inst_16522__$1);

return statearr_16617;
})();
var statearr_16618_16652 = state_16581__$1;
(statearr_16618_16652[(2)] = null);

(statearr_16618_16652[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16582 === (18))){
var inst_16551 = (state_16581[(2)]);
var state_16581__$1 = state_16581;
var statearr_16619_16653 = state_16581__$1;
(statearr_16619_16653[(2)] = inst_16551);

(statearr_16619_16653[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16582 === (8))){
var inst_16524 = (state_16581[(13)]);
var inst_16525 = (state_16581[(15)]);
var inst_16527 = (inst_16525 < inst_16524);
var inst_16528 = inst_16527;
var state_16581__$1 = state_16581;
if(cljs.core.truth_(inst_16528)){
var statearr_16620_16654 = state_16581__$1;
(statearr_16620_16654[(1)] = (10));

} else {
var statearr_16621_16655 = state_16581__$1;
(statearr_16621_16655[(1)] = (11));

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
}
}
}
}
}
}
}
});})(c__15393__auto___16627,mults,ensure_mult,p))
;
return ((function (switch__15303__auto__,c__15393__auto___16627,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15304__auto__ = null;
var cljs$core$async$state_machine__15304__auto____0 = (function (){
var statearr_16622 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16622[(0)] = cljs$core$async$state_machine__15304__auto__);

(statearr_16622[(1)] = (1));

return statearr_16622;
});
var cljs$core$async$state_machine__15304__auto____1 = (function (state_16581){
while(true){
var ret_value__15305__auto__ = (function (){try{while(true){
var result__15306__auto__ = switch__15303__auto__.call(null,state_16581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15306__auto__;
}
break;
}
}catch (e16623){if((e16623 instanceof Object)){
var ex__15307__auto__ = e16623;
var statearr_16624_16656 = state_16581;
(statearr_16624_16656[(5)] = ex__15307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16623;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16657 = state_16581;
state_16581 = G__16657;
continue;
} else {
return ret_value__15305__auto__;
}
break;
}
});
cljs$core$async$state_machine__15304__auto__ = function(state_16581){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15304__auto____1.call(this,state_16581);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15304__auto____0;
cljs$core$async$state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15304__auto____1;
return cljs$core$async$state_machine__15304__auto__;
})()
;})(switch__15303__auto__,c__15393__auto___16627,mults,ensure_mult,p))
})();
var state__15395__auto__ = (function (){var statearr_16625 = f__15394__auto__.call(null);
(statearr_16625[(6)] = c__15393__auto___16627);

return statearr_16625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15395__auto__);
});})(c__15393__auto___16627,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16659 = arguments.length;
switch (G__16659) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16662 = arguments.length;
switch (G__16662) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16665 = arguments.length;
switch (G__16665) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__15393__auto___16732 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15393__auto___16732,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15394__auto__ = (function (){var switch__15303__auto__ = ((function (c__15393__auto___16732,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16704){
var state_val_16705 = (state_16704[(1)]);
if((state_val_16705 === (7))){
var state_16704__$1 = state_16704;
var statearr_16706_16733 = state_16704__$1;
(statearr_16706_16733[(2)] = null);

(statearr_16706_16733[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16705 === (1))){
var state_16704__$1 = state_16704;
var statearr_16707_16734 = state_16704__$1;
(statearr_16707_16734[(2)] = null);

(statearr_16707_16734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16705 === (4))){
var inst_16668 = (state_16704[(7)]);
var inst_16670 = (inst_16668 < cnt);
var state_16704__$1 = state_16704;
if(cljs.core.truth_(inst_16670)){
var statearr_16708_16735 = state_16704__$1;
(statearr_16708_16735[(1)] = (6));

} else {
var statearr_16709_16736 = state_16704__$1;
(statearr_16709_16736[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16705 === (15))){
var inst_16700 = (state_16704[(2)]);
var state_16704__$1 = state_16704;
var statearr_16710_16737 = state_16704__$1;
(statearr_16710_16737[(2)] = inst_16700);

(statearr_16710_16737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16705 === (13))){
var inst_16693 = cljs.core.async.close_BANG_.call(null,out);
var state_16704__$1 = state_16704;
var statearr_16711_16738 = state_16704__$1;
(statearr_16711_16738[(2)] = inst_16693);

(statearr_16711_16738[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16705 === (6))){
var state_16704__$1 = state_16704;
var statearr_16712_16739 = state_16704__$1;
(statearr_16712_16739[(2)] = null);

(statearr_16712_16739[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16705 === (3))){
var inst_16702 = (state_16704[(2)]);
var state_16704__$1 = state_16704;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16704__$1,inst_16702);
} else {
if((state_val_16705 === (12))){
var inst_16690 = (state_16704[(8)]);
var inst_16690__$1 = (state_16704[(2)]);
var inst_16691 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_16690__$1);
var state_16704__$1 = (function (){var statearr_16713 = state_16704;
(statearr_16713[(8)] = inst_16690__$1);

return statearr_16713;
})();
if(cljs.core.truth_(inst_16691)){
var statearr_16714_16740 = state_16704__$1;
(statearr_16714_16740[(1)] = (13));

} else {
var statearr_16715_16741 = state_16704__$1;
(statearr_16715_16741[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16705 === (2))){
var inst_16667 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_16668 = (0);
var state_16704__$1 = (function (){var statearr_16716 = state_16704;
(statearr_16716[(9)] = inst_16667);

(statearr_16716[(7)] = inst_16668);

return statearr_16716;
})();
var statearr_16717_16742 = state_16704__$1;
(statearr_16717_16742[(2)] = null);

(statearr_16717_16742[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16705 === (11))){
var inst_16668 = (state_16704[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16704,(10),Object,null,(9));
var inst_16677 = chs__$1.call(null,inst_16668);
var inst_16678 = done.call(null,inst_16668);
var inst_16679 = cljs.core.async.take_BANG_.call(null,inst_16677,inst_16678);
var state_16704__$1 = state_16704;
var statearr_16718_16743 = state_16704__$1;
(statearr_16718_16743[(2)] = inst_16679);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16704__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16705 === (9))){
var inst_16668 = (state_16704[(7)]);
var inst_16681 = (state_16704[(2)]);
var inst_16682 = (inst_16668 + (1));
var inst_16668__$1 = inst_16682;
var state_16704__$1 = (function (){var statearr_16719 = state_16704;
(statearr_16719[(10)] = inst_16681);

(statearr_16719[(7)] = inst_16668__$1);

return statearr_16719;
})();
var statearr_16720_16744 = state_16704__$1;
(statearr_16720_16744[(2)] = null);

(statearr_16720_16744[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16705 === (5))){
var inst_16688 = (state_16704[(2)]);
var state_16704__$1 = (function (){var statearr_16721 = state_16704;
(statearr_16721[(11)] = inst_16688);

return statearr_16721;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16704__$1,(12),dchan);
} else {
if((state_val_16705 === (14))){
var inst_16690 = (state_16704[(8)]);
var inst_16695 = cljs.core.apply.call(null,f,inst_16690);
var state_16704__$1 = state_16704;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16704__$1,(16),out,inst_16695);
} else {
if((state_val_16705 === (16))){
var inst_16697 = (state_16704[(2)]);
var state_16704__$1 = (function (){var statearr_16722 = state_16704;
(statearr_16722[(12)] = inst_16697);

return statearr_16722;
})();
var statearr_16723_16745 = state_16704__$1;
(statearr_16723_16745[(2)] = null);

(statearr_16723_16745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16705 === (10))){
var inst_16672 = (state_16704[(2)]);
var inst_16673 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_16704__$1 = (function (){var statearr_16724 = state_16704;
(statearr_16724[(13)] = inst_16672);

return statearr_16724;
})();
var statearr_16725_16746 = state_16704__$1;
(statearr_16725_16746[(2)] = inst_16673);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16704__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16705 === (8))){
var inst_16686 = (state_16704[(2)]);
var state_16704__$1 = state_16704;
var statearr_16726_16747 = state_16704__$1;
(statearr_16726_16747[(2)] = inst_16686);

(statearr_16726_16747[(1)] = (5));


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
});})(c__15393__auto___16732,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15303__auto__,c__15393__auto___16732,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15304__auto__ = null;
var cljs$core$async$state_machine__15304__auto____0 = (function (){
var statearr_16727 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16727[(0)] = cljs$core$async$state_machine__15304__auto__);

(statearr_16727[(1)] = (1));

return statearr_16727;
});
var cljs$core$async$state_machine__15304__auto____1 = (function (state_16704){
while(true){
var ret_value__15305__auto__ = (function (){try{while(true){
var result__15306__auto__ = switch__15303__auto__.call(null,state_16704);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15306__auto__;
}
break;
}
}catch (e16728){if((e16728 instanceof Object)){
var ex__15307__auto__ = e16728;
var statearr_16729_16748 = state_16704;
(statearr_16729_16748[(5)] = ex__15307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16749 = state_16704;
state_16704 = G__16749;
continue;
} else {
return ret_value__15305__auto__;
}
break;
}
});
cljs$core$async$state_machine__15304__auto__ = function(state_16704){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15304__auto____1.call(this,state_16704);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15304__auto____0;
cljs$core$async$state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15304__auto____1;
return cljs$core$async$state_machine__15304__auto__;
})()
;})(switch__15303__auto__,c__15393__auto___16732,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15395__auto__ = (function (){var statearr_16730 = f__15394__auto__.call(null);
(statearr_16730[(6)] = c__15393__auto___16732);

return statearr_16730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15395__auto__);
});})(c__15393__auto___16732,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16752 = arguments.length;
switch (G__16752) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15393__auto___16806 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15393__auto___16806,out){
return (function (){
var f__15394__auto__ = (function (){var switch__15303__auto__ = ((function (c__15393__auto___16806,out){
return (function (state_16784){
var state_val_16785 = (state_16784[(1)]);
if((state_val_16785 === (7))){
var inst_16764 = (state_16784[(7)]);
var inst_16763 = (state_16784[(8)]);
var inst_16763__$1 = (state_16784[(2)]);
var inst_16764__$1 = cljs.core.nth.call(null,inst_16763__$1,(0),null);
var inst_16765 = cljs.core.nth.call(null,inst_16763__$1,(1),null);
var inst_16766 = (inst_16764__$1 == null);
var state_16784__$1 = (function (){var statearr_16786 = state_16784;
(statearr_16786[(9)] = inst_16765);

(statearr_16786[(7)] = inst_16764__$1);

(statearr_16786[(8)] = inst_16763__$1);

return statearr_16786;
})();
if(cljs.core.truth_(inst_16766)){
var statearr_16787_16807 = state_16784__$1;
(statearr_16787_16807[(1)] = (8));

} else {
var statearr_16788_16808 = state_16784__$1;
(statearr_16788_16808[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16785 === (1))){
var inst_16753 = cljs.core.vec.call(null,chs);
var inst_16754 = inst_16753;
var state_16784__$1 = (function (){var statearr_16789 = state_16784;
(statearr_16789[(10)] = inst_16754);

return statearr_16789;
})();
var statearr_16790_16809 = state_16784__$1;
(statearr_16790_16809[(2)] = null);

(statearr_16790_16809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16785 === (4))){
var inst_16754 = (state_16784[(10)]);
var state_16784__$1 = state_16784;
return cljs.core.async.ioc_alts_BANG_.call(null,state_16784__$1,(7),inst_16754);
} else {
if((state_val_16785 === (6))){
var inst_16780 = (state_16784[(2)]);
var state_16784__$1 = state_16784;
var statearr_16791_16810 = state_16784__$1;
(statearr_16791_16810[(2)] = inst_16780);

(statearr_16791_16810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16785 === (3))){
var inst_16782 = (state_16784[(2)]);
var state_16784__$1 = state_16784;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16784__$1,inst_16782);
} else {
if((state_val_16785 === (2))){
var inst_16754 = (state_16784[(10)]);
var inst_16756 = cljs.core.count.call(null,inst_16754);
var inst_16757 = (inst_16756 > (0));
var state_16784__$1 = state_16784;
if(cljs.core.truth_(inst_16757)){
var statearr_16793_16811 = state_16784__$1;
(statearr_16793_16811[(1)] = (4));

} else {
var statearr_16794_16812 = state_16784__$1;
(statearr_16794_16812[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16785 === (11))){
var inst_16754 = (state_16784[(10)]);
var inst_16773 = (state_16784[(2)]);
var tmp16792 = inst_16754;
var inst_16754__$1 = tmp16792;
var state_16784__$1 = (function (){var statearr_16795 = state_16784;
(statearr_16795[(11)] = inst_16773);

(statearr_16795[(10)] = inst_16754__$1);

return statearr_16795;
})();
var statearr_16796_16813 = state_16784__$1;
(statearr_16796_16813[(2)] = null);

(statearr_16796_16813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16785 === (9))){
var inst_16764 = (state_16784[(7)]);
var state_16784__$1 = state_16784;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16784__$1,(11),out,inst_16764);
} else {
if((state_val_16785 === (5))){
var inst_16778 = cljs.core.async.close_BANG_.call(null,out);
var state_16784__$1 = state_16784;
var statearr_16797_16814 = state_16784__$1;
(statearr_16797_16814[(2)] = inst_16778);

(statearr_16797_16814[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16785 === (10))){
var inst_16776 = (state_16784[(2)]);
var state_16784__$1 = state_16784;
var statearr_16798_16815 = state_16784__$1;
(statearr_16798_16815[(2)] = inst_16776);

(statearr_16798_16815[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16785 === (8))){
var inst_16765 = (state_16784[(9)]);
var inst_16754 = (state_16784[(10)]);
var inst_16764 = (state_16784[(7)]);
var inst_16763 = (state_16784[(8)]);
var inst_16768 = (function (){var cs = inst_16754;
var vec__16759 = inst_16763;
var v = inst_16764;
var c = inst_16765;
return ((function (cs,vec__16759,v,c,inst_16765,inst_16754,inst_16764,inst_16763,state_val_16785,c__15393__auto___16806,out){
return (function (p1__16750_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__16750_SHARP_);
});
;})(cs,vec__16759,v,c,inst_16765,inst_16754,inst_16764,inst_16763,state_val_16785,c__15393__auto___16806,out))
})();
var inst_16769 = cljs.core.filterv.call(null,inst_16768,inst_16754);
var inst_16754__$1 = inst_16769;
var state_16784__$1 = (function (){var statearr_16799 = state_16784;
(statearr_16799[(10)] = inst_16754__$1);

return statearr_16799;
})();
var statearr_16800_16816 = state_16784__$1;
(statearr_16800_16816[(2)] = null);

(statearr_16800_16816[(1)] = (2));


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
});})(c__15393__auto___16806,out))
;
return ((function (switch__15303__auto__,c__15393__auto___16806,out){
return (function() {
var cljs$core$async$state_machine__15304__auto__ = null;
var cljs$core$async$state_machine__15304__auto____0 = (function (){
var statearr_16801 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16801[(0)] = cljs$core$async$state_machine__15304__auto__);

(statearr_16801[(1)] = (1));

return statearr_16801;
});
var cljs$core$async$state_machine__15304__auto____1 = (function (state_16784){
while(true){
var ret_value__15305__auto__ = (function (){try{while(true){
var result__15306__auto__ = switch__15303__auto__.call(null,state_16784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15306__auto__;
}
break;
}
}catch (e16802){if((e16802 instanceof Object)){
var ex__15307__auto__ = e16802;
var statearr_16803_16817 = state_16784;
(statearr_16803_16817[(5)] = ex__15307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16818 = state_16784;
state_16784 = G__16818;
continue;
} else {
return ret_value__15305__auto__;
}
break;
}
});
cljs$core$async$state_machine__15304__auto__ = function(state_16784){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15304__auto____1.call(this,state_16784);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15304__auto____0;
cljs$core$async$state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15304__auto____1;
return cljs$core$async$state_machine__15304__auto__;
})()
;})(switch__15303__auto__,c__15393__auto___16806,out))
})();
var state__15395__auto__ = (function (){var statearr_16804 = f__15394__auto__.call(null);
(statearr_16804[(6)] = c__15393__auto___16806);

return statearr_16804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15395__auto__);
});})(c__15393__auto___16806,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16820 = arguments.length;
switch (G__16820) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15393__auto___16865 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15393__auto___16865,out){
return (function (){
var f__15394__auto__ = (function (){var switch__15303__auto__ = ((function (c__15393__auto___16865,out){
return (function (state_16844){
var state_val_16845 = (state_16844[(1)]);
if((state_val_16845 === (7))){
var inst_16826 = (state_16844[(7)]);
var inst_16826__$1 = (state_16844[(2)]);
var inst_16827 = (inst_16826__$1 == null);
var inst_16828 = cljs.core.not.call(null,inst_16827);
var state_16844__$1 = (function (){var statearr_16846 = state_16844;
(statearr_16846[(7)] = inst_16826__$1);

return statearr_16846;
})();
if(inst_16828){
var statearr_16847_16866 = state_16844__$1;
(statearr_16847_16866[(1)] = (8));

} else {
var statearr_16848_16867 = state_16844__$1;
(statearr_16848_16867[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16845 === (1))){
var inst_16821 = (0);
var state_16844__$1 = (function (){var statearr_16849 = state_16844;
(statearr_16849[(8)] = inst_16821);

return statearr_16849;
})();
var statearr_16850_16868 = state_16844__$1;
(statearr_16850_16868[(2)] = null);

(statearr_16850_16868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16845 === (4))){
var state_16844__$1 = state_16844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16844__$1,(7),ch);
} else {
if((state_val_16845 === (6))){
var inst_16839 = (state_16844[(2)]);
var state_16844__$1 = state_16844;
var statearr_16851_16869 = state_16844__$1;
(statearr_16851_16869[(2)] = inst_16839);

(statearr_16851_16869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16845 === (3))){
var inst_16841 = (state_16844[(2)]);
var inst_16842 = cljs.core.async.close_BANG_.call(null,out);
var state_16844__$1 = (function (){var statearr_16852 = state_16844;
(statearr_16852[(9)] = inst_16841);

return statearr_16852;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16844__$1,inst_16842);
} else {
if((state_val_16845 === (2))){
var inst_16821 = (state_16844[(8)]);
var inst_16823 = (inst_16821 < n);
var state_16844__$1 = state_16844;
if(cljs.core.truth_(inst_16823)){
var statearr_16853_16870 = state_16844__$1;
(statearr_16853_16870[(1)] = (4));

} else {
var statearr_16854_16871 = state_16844__$1;
(statearr_16854_16871[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16845 === (11))){
var inst_16821 = (state_16844[(8)]);
var inst_16831 = (state_16844[(2)]);
var inst_16832 = (inst_16821 + (1));
var inst_16821__$1 = inst_16832;
var state_16844__$1 = (function (){var statearr_16855 = state_16844;
(statearr_16855[(8)] = inst_16821__$1);

(statearr_16855[(10)] = inst_16831);

return statearr_16855;
})();
var statearr_16856_16872 = state_16844__$1;
(statearr_16856_16872[(2)] = null);

(statearr_16856_16872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16845 === (9))){
var state_16844__$1 = state_16844;
var statearr_16857_16873 = state_16844__$1;
(statearr_16857_16873[(2)] = null);

(statearr_16857_16873[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16845 === (5))){
var state_16844__$1 = state_16844;
var statearr_16858_16874 = state_16844__$1;
(statearr_16858_16874[(2)] = null);

(statearr_16858_16874[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16845 === (10))){
var inst_16836 = (state_16844[(2)]);
var state_16844__$1 = state_16844;
var statearr_16859_16875 = state_16844__$1;
(statearr_16859_16875[(2)] = inst_16836);

(statearr_16859_16875[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16845 === (8))){
var inst_16826 = (state_16844[(7)]);
var state_16844__$1 = state_16844;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16844__$1,(11),out,inst_16826);
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
});})(c__15393__auto___16865,out))
;
return ((function (switch__15303__auto__,c__15393__auto___16865,out){
return (function() {
var cljs$core$async$state_machine__15304__auto__ = null;
var cljs$core$async$state_machine__15304__auto____0 = (function (){
var statearr_16860 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16860[(0)] = cljs$core$async$state_machine__15304__auto__);

(statearr_16860[(1)] = (1));

return statearr_16860;
});
var cljs$core$async$state_machine__15304__auto____1 = (function (state_16844){
while(true){
var ret_value__15305__auto__ = (function (){try{while(true){
var result__15306__auto__ = switch__15303__auto__.call(null,state_16844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15306__auto__;
}
break;
}
}catch (e16861){if((e16861 instanceof Object)){
var ex__15307__auto__ = e16861;
var statearr_16862_16876 = state_16844;
(statearr_16862_16876[(5)] = ex__15307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16877 = state_16844;
state_16844 = G__16877;
continue;
} else {
return ret_value__15305__auto__;
}
break;
}
});
cljs$core$async$state_machine__15304__auto__ = function(state_16844){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15304__auto____1.call(this,state_16844);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15304__auto____0;
cljs$core$async$state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15304__auto____1;
return cljs$core$async$state_machine__15304__auto__;
})()
;})(switch__15303__auto__,c__15393__auto___16865,out))
})();
var state__15395__auto__ = (function (){var statearr_16863 = f__15394__auto__.call(null);
(statearr_16863[(6)] = c__15393__auto___16865);

return statearr_16863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15395__auto__);
});})(c__15393__auto___16865,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async16879 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16879 = (function (f,ch,meta16880){
this.f = f;
this.ch = ch;
this.meta16880 = meta16880;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16879.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16881,meta16880__$1){
var self__ = this;
var _16881__$1 = this;
return (new cljs.core.async.t_cljs$core$async16879(self__.f,self__.ch,meta16880__$1));
});

cljs.core.async.t_cljs$core$async16879.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16881){
var self__ = this;
var _16881__$1 = this;
return self__.meta16880;
});

cljs.core.async.t_cljs$core$async16879.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16879.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16879.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16879.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16879.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async16882 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16882 = (function (f,ch,meta16880,_,fn1,meta16883){
this.f = f;
this.ch = ch;
this.meta16880 = meta16880;
this._ = _;
this.fn1 = fn1;
this.meta16883 = meta16883;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16882.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_16884,meta16883__$1){
var self__ = this;
var _16884__$1 = this;
return (new cljs.core.async.t_cljs$core$async16882(self__.f,self__.ch,self__.meta16880,self__._,self__.fn1,meta16883__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async16882.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_16884){
var self__ = this;
var _16884__$1 = this;
return self__.meta16883;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16882.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16882.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16882.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16882.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__16878_SHARP_){
return f1.call(null,(((p1__16878_SHARP_ == null))?null:self__.f.call(null,p1__16878_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async16882.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16880","meta16880",-132040635,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16879","cljs.core.async/t_cljs$core$async16879",1889734342,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16883","meta16883",534942695,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16882.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16882.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16882";

cljs.core.async.t_cljs$core$async16882.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__10621__auto__,writer__10622__auto__,opt__10623__auto__){
return cljs.core._write.call(null,writer__10622__auto__,"cljs.core.async/t_cljs$core$async16882");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async16882 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16882(f__$1,ch__$1,meta16880__$1,___$2,fn1__$1,meta16883){
return (new cljs.core.async.t_cljs$core$async16882(f__$1,ch__$1,meta16880__$1,___$2,fn1__$1,meta16883));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async16882(self__.f,self__.ch,self__.meta16880,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__9938__auto__ = ret;
if(cljs.core.truth_(and__9938__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__9938__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async16879.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16879.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async16879.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16880","meta16880",-132040635,null)], null);
});

cljs.core.async.t_cljs$core$async16879.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16879.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16879";

cljs.core.async.t_cljs$core$async16879.cljs$lang$ctorPrWriter = (function (this__10621__auto__,writer__10622__auto__,opt__10623__auto__){
return cljs.core._write.call(null,writer__10622__auto__,"cljs.core.async/t_cljs$core$async16879");
});

cljs.core.async.__GT_t_cljs$core$async16879 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16879(f__$1,ch__$1,meta16880){
return (new cljs.core.async.t_cljs$core$async16879(f__$1,ch__$1,meta16880));
});

}

return (new cljs.core.async.t_cljs$core$async16879(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async16885 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16885 = (function (f,ch,meta16886){
this.f = f;
this.ch = ch;
this.meta16886 = meta16886;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16887,meta16886__$1){
var self__ = this;
var _16887__$1 = this;
return (new cljs.core.async.t_cljs$core$async16885(self__.f,self__.ch,meta16886__$1));
});

cljs.core.async.t_cljs$core$async16885.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16887){
var self__ = this;
var _16887__$1 = this;
return self__.meta16886;
});

cljs.core.async.t_cljs$core$async16885.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16885.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16885.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16885.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16885.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16885.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async16885.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16886","meta16886",-1584728211,null)], null);
});

cljs.core.async.t_cljs$core$async16885.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16885.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16885";

cljs.core.async.t_cljs$core$async16885.cljs$lang$ctorPrWriter = (function (this__10621__auto__,writer__10622__auto__,opt__10623__auto__){
return cljs.core._write.call(null,writer__10622__auto__,"cljs.core.async/t_cljs$core$async16885");
});

cljs.core.async.__GT_t_cljs$core$async16885 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async16885(f__$1,ch__$1,meta16886){
return (new cljs.core.async.t_cljs$core$async16885(f__$1,ch__$1,meta16886));
});

}

return (new cljs.core.async.t_cljs$core$async16885(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async16888 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16888 = (function (p,ch,meta16889){
this.p = p;
this.ch = ch;
this.meta16889 = meta16889;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16890,meta16889__$1){
var self__ = this;
var _16890__$1 = this;
return (new cljs.core.async.t_cljs$core$async16888(self__.p,self__.ch,meta16889__$1));
});

cljs.core.async.t_cljs$core$async16888.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16890){
var self__ = this;
var _16890__$1 = this;
return self__.meta16889;
});

cljs.core.async.t_cljs$core$async16888.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16888.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16888.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16888.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16888.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16888.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16888.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async16888.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16889","meta16889",-295120901,null)], null);
});

cljs.core.async.t_cljs$core$async16888.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16888.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16888";

cljs.core.async.t_cljs$core$async16888.cljs$lang$ctorPrWriter = (function (this__10621__auto__,writer__10622__auto__,opt__10623__auto__){
return cljs.core._write.call(null,writer__10622__auto__,"cljs.core.async/t_cljs$core$async16888");
});

cljs.core.async.__GT_t_cljs$core$async16888 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async16888(p__$1,ch__$1,meta16889){
return (new cljs.core.async.t_cljs$core$async16888(p__$1,ch__$1,meta16889));
});

}

return (new cljs.core.async.t_cljs$core$async16888(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__16892 = arguments.length;
switch (G__16892) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15393__auto___16932 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15393__auto___16932,out){
return (function (){
var f__15394__auto__ = (function (){var switch__15303__auto__ = ((function (c__15393__auto___16932,out){
return (function (state_16913){
var state_val_16914 = (state_16913[(1)]);
if((state_val_16914 === (7))){
var inst_16909 = (state_16913[(2)]);
var state_16913__$1 = state_16913;
var statearr_16915_16933 = state_16913__$1;
(statearr_16915_16933[(2)] = inst_16909);

(statearr_16915_16933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16914 === (1))){
var state_16913__$1 = state_16913;
var statearr_16916_16934 = state_16913__$1;
(statearr_16916_16934[(2)] = null);

(statearr_16916_16934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16914 === (4))){
var inst_16895 = (state_16913[(7)]);
var inst_16895__$1 = (state_16913[(2)]);
var inst_16896 = (inst_16895__$1 == null);
var state_16913__$1 = (function (){var statearr_16917 = state_16913;
(statearr_16917[(7)] = inst_16895__$1);

return statearr_16917;
})();
if(cljs.core.truth_(inst_16896)){
var statearr_16918_16935 = state_16913__$1;
(statearr_16918_16935[(1)] = (5));

} else {
var statearr_16919_16936 = state_16913__$1;
(statearr_16919_16936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16914 === (6))){
var inst_16895 = (state_16913[(7)]);
var inst_16900 = p.call(null,inst_16895);
var state_16913__$1 = state_16913;
if(cljs.core.truth_(inst_16900)){
var statearr_16920_16937 = state_16913__$1;
(statearr_16920_16937[(1)] = (8));

} else {
var statearr_16921_16938 = state_16913__$1;
(statearr_16921_16938[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16914 === (3))){
var inst_16911 = (state_16913[(2)]);
var state_16913__$1 = state_16913;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16913__$1,inst_16911);
} else {
if((state_val_16914 === (2))){
var state_16913__$1 = state_16913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16913__$1,(4),ch);
} else {
if((state_val_16914 === (11))){
var inst_16903 = (state_16913[(2)]);
var state_16913__$1 = state_16913;
var statearr_16922_16939 = state_16913__$1;
(statearr_16922_16939[(2)] = inst_16903);

(statearr_16922_16939[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16914 === (9))){
var state_16913__$1 = state_16913;
var statearr_16923_16940 = state_16913__$1;
(statearr_16923_16940[(2)] = null);

(statearr_16923_16940[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16914 === (5))){
var inst_16898 = cljs.core.async.close_BANG_.call(null,out);
var state_16913__$1 = state_16913;
var statearr_16924_16941 = state_16913__$1;
(statearr_16924_16941[(2)] = inst_16898);

(statearr_16924_16941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16914 === (10))){
var inst_16906 = (state_16913[(2)]);
var state_16913__$1 = (function (){var statearr_16925 = state_16913;
(statearr_16925[(8)] = inst_16906);

return statearr_16925;
})();
var statearr_16926_16942 = state_16913__$1;
(statearr_16926_16942[(2)] = null);

(statearr_16926_16942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16914 === (8))){
var inst_16895 = (state_16913[(7)]);
var state_16913__$1 = state_16913;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16913__$1,(11),out,inst_16895);
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
});})(c__15393__auto___16932,out))
;
return ((function (switch__15303__auto__,c__15393__auto___16932,out){
return (function() {
var cljs$core$async$state_machine__15304__auto__ = null;
var cljs$core$async$state_machine__15304__auto____0 = (function (){
var statearr_16927 = [null,null,null,null,null,null,null,null,null];
(statearr_16927[(0)] = cljs$core$async$state_machine__15304__auto__);

(statearr_16927[(1)] = (1));

return statearr_16927;
});
var cljs$core$async$state_machine__15304__auto____1 = (function (state_16913){
while(true){
var ret_value__15305__auto__ = (function (){try{while(true){
var result__15306__auto__ = switch__15303__auto__.call(null,state_16913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15306__auto__;
}
break;
}
}catch (e16928){if((e16928 instanceof Object)){
var ex__15307__auto__ = e16928;
var statearr_16929_16943 = state_16913;
(statearr_16929_16943[(5)] = ex__15307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16944 = state_16913;
state_16913 = G__16944;
continue;
} else {
return ret_value__15305__auto__;
}
break;
}
});
cljs$core$async$state_machine__15304__auto__ = function(state_16913){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15304__auto____1.call(this,state_16913);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15304__auto____0;
cljs$core$async$state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15304__auto____1;
return cljs$core$async$state_machine__15304__auto__;
})()
;})(switch__15303__auto__,c__15393__auto___16932,out))
})();
var state__15395__auto__ = (function (){var statearr_16930 = f__15394__auto__.call(null);
(statearr_16930[(6)] = c__15393__auto___16932);

return statearr_16930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15395__auto__);
});})(c__15393__auto___16932,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16946 = arguments.length;
switch (G__16946) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__15393__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15393__auto__){
return (function (){
var f__15394__auto__ = (function (){var switch__15303__auto__ = ((function (c__15393__auto__){
return (function (state_17009){
var state_val_17010 = (state_17009[(1)]);
if((state_val_17010 === (7))){
var inst_17005 = (state_17009[(2)]);
var state_17009__$1 = state_17009;
var statearr_17011_17049 = state_17009__$1;
(statearr_17011_17049[(2)] = inst_17005);

(statearr_17011_17049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17010 === (20))){
var inst_16975 = (state_17009[(7)]);
var inst_16986 = (state_17009[(2)]);
var inst_16987 = cljs.core.next.call(null,inst_16975);
var inst_16961 = inst_16987;
var inst_16962 = null;
var inst_16963 = (0);
var inst_16964 = (0);
var state_17009__$1 = (function (){var statearr_17012 = state_17009;
(statearr_17012[(8)] = inst_16961);

(statearr_17012[(9)] = inst_16963);

(statearr_17012[(10)] = inst_16962);

(statearr_17012[(11)] = inst_16964);

(statearr_17012[(12)] = inst_16986);

return statearr_17012;
})();
var statearr_17013_17050 = state_17009__$1;
(statearr_17013_17050[(2)] = null);

(statearr_17013_17050[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17010 === (1))){
var state_17009__$1 = state_17009;
var statearr_17014_17051 = state_17009__$1;
(statearr_17014_17051[(2)] = null);

(statearr_17014_17051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17010 === (4))){
var inst_16950 = (state_17009[(13)]);
var inst_16950__$1 = (state_17009[(2)]);
var inst_16951 = (inst_16950__$1 == null);
var state_17009__$1 = (function (){var statearr_17015 = state_17009;
(statearr_17015[(13)] = inst_16950__$1);

return statearr_17015;
})();
if(cljs.core.truth_(inst_16951)){
var statearr_17016_17052 = state_17009__$1;
(statearr_17016_17052[(1)] = (5));

} else {
var statearr_17017_17053 = state_17009__$1;
(statearr_17017_17053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17010 === (15))){
var state_17009__$1 = state_17009;
var statearr_17021_17054 = state_17009__$1;
(statearr_17021_17054[(2)] = null);

(statearr_17021_17054[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17010 === (21))){
var state_17009__$1 = state_17009;
var statearr_17022_17055 = state_17009__$1;
(statearr_17022_17055[(2)] = null);

(statearr_17022_17055[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17010 === (13))){
var inst_16961 = (state_17009[(8)]);
var inst_16963 = (state_17009[(9)]);
var inst_16962 = (state_17009[(10)]);
var inst_16964 = (state_17009[(11)]);
var inst_16971 = (state_17009[(2)]);
var inst_16972 = (inst_16964 + (1));
var tmp17018 = inst_16961;
var tmp17019 = inst_16963;
var tmp17020 = inst_16962;
var inst_16961__$1 = tmp17018;
var inst_16962__$1 = tmp17020;
var inst_16963__$1 = tmp17019;
var inst_16964__$1 = inst_16972;
var state_17009__$1 = (function (){var statearr_17023 = state_17009;
(statearr_17023[(8)] = inst_16961__$1);

(statearr_17023[(9)] = inst_16963__$1);

(statearr_17023[(10)] = inst_16962__$1);

(statearr_17023[(11)] = inst_16964__$1);

(statearr_17023[(14)] = inst_16971);

return statearr_17023;
})();
var statearr_17024_17056 = state_17009__$1;
(statearr_17024_17056[(2)] = null);

(statearr_17024_17056[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17010 === (22))){
var state_17009__$1 = state_17009;
var statearr_17025_17057 = state_17009__$1;
(statearr_17025_17057[(2)] = null);

(statearr_17025_17057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17010 === (6))){
var inst_16950 = (state_17009[(13)]);
var inst_16959 = f.call(null,inst_16950);
var inst_16960 = cljs.core.seq.call(null,inst_16959);
var inst_16961 = inst_16960;
var inst_16962 = null;
var inst_16963 = (0);
var inst_16964 = (0);
var state_17009__$1 = (function (){var statearr_17026 = state_17009;
(statearr_17026[(8)] = inst_16961);

(statearr_17026[(9)] = inst_16963);

(statearr_17026[(10)] = inst_16962);

(statearr_17026[(11)] = inst_16964);

return statearr_17026;
})();
var statearr_17027_17058 = state_17009__$1;
(statearr_17027_17058[(2)] = null);

(statearr_17027_17058[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17010 === (17))){
var inst_16975 = (state_17009[(7)]);
var inst_16979 = cljs.core.chunk_first.call(null,inst_16975);
var inst_16980 = cljs.core.chunk_rest.call(null,inst_16975);
var inst_16981 = cljs.core.count.call(null,inst_16979);
var inst_16961 = inst_16980;
var inst_16962 = inst_16979;
var inst_16963 = inst_16981;
var inst_16964 = (0);
var state_17009__$1 = (function (){var statearr_17028 = state_17009;
(statearr_17028[(8)] = inst_16961);

(statearr_17028[(9)] = inst_16963);

(statearr_17028[(10)] = inst_16962);

(statearr_17028[(11)] = inst_16964);

return statearr_17028;
})();
var statearr_17029_17059 = state_17009__$1;
(statearr_17029_17059[(2)] = null);

(statearr_17029_17059[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17010 === (3))){
var inst_17007 = (state_17009[(2)]);
var state_17009__$1 = state_17009;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17009__$1,inst_17007);
} else {
if((state_val_17010 === (12))){
var inst_16995 = (state_17009[(2)]);
var state_17009__$1 = state_17009;
var statearr_17030_17060 = state_17009__$1;
(statearr_17030_17060[(2)] = inst_16995);

(statearr_17030_17060[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17010 === (2))){
var state_17009__$1 = state_17009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17009__$1,(4),in$);
} else {
if((state_val_17010 === (23))){
var inst_17003 = (state_17009[(2)]);
var state_17009__$1 = state_17009;
var statearr_17031_17061 = state_17009__$1;
(statearr_17031_17061[(2)] = inst_17003);

(statearr_17031_17061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17010 === (19))){
var inst_16990 = (state_17009[(2)]);
var state_17009__$1 = state_17009;
var statearr_17032_17062 = state_17009__$1;
(statearr_17032_17062[(2)] = inst_16990);

(statearr_17032_17062[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17010 === (11))){
var inst_16961 = (state_17009[(8)]);
var inst_16975 = (state_17009[(7)]);
var inst_16975__$1 = cljs.core.seq.call(null,inst_16961);
var state_17009__$1 = (function (){var statearr_17033 = state_17009;
(statearr_17033[(7)] = inst_16975__$1);

return statearr_17033;
})();
if(inst_16975__$1){
var statearr_17034_17063 = state_17009__$1;
(statearr_17034_17063[(1)] = (14));

} else {
var statearr_17035_17064 = state_17009__$1;
(statearr_17035_17064[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17010 === (9))){
var inst_16997 = (state_17009[(2)]);
var inst_16998 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_17009__$1 = (function (){var statearr_17036 = state_17009;
(statearr_17036[(15)] = inst_16997);

return statearr_17036;
})();
if(cljs.core.truth_(inst_16998)){
var statearr_17037_17065 = state_17009__$1;
(statearr_17037_17065[(1)] = (21));

} else {
var statearr_17038_17066 = state_17009__$1;
(statearr_17038_17066[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17010 === (5))){
var inst_16953 = cljs.core.async.close_BANG_.call(null,out);
var state_17009__$1 = state_17009;
var statearr_17039_17067 = state_17009__$1;
(statearr_17039_17067[(2)] = inst_16953);

(statearr_17039_17067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17010 === (14))){
var inst_16975 = (state_17009[(7)]);
var inst_16977 = cljs.core.chunked_seq_QMARK_.call(null,inst_16975);
var state_17009__$1 = state_17009;
if(inst_16977){
var statearr_17040_17068 = state_17009__$1;
(statearr_17040_17068[(1)] = (17));

} else {
var statearr_17041_17069 = state_17009__$1;
(statearr_17041_17069[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17010 === (16))){
var inst_16993 = (state_17009[(2)]);
var state_17009__$1 = state_17009;
var statearr_17042_17070 = state_17009__$1;
(statearr_17042_17070[(2)] = inst_16993);

(statearr_17042_17070[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17010 === (10))){
var inst_16962 = (state_17009[(10)]);
var inst_16964 = (state_17009[(11)]);
var inst_16969 = cljs.core._nth.call(null,inst_16962,inst_16964);
var state_17009__$1 = state_17009;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17009__$1,(13),out,inst_16969);
} else {
if((state_val_17010 === (18))){
var inst_16975 = (state_17009[(7)]);
var inst_16984 = cljs.core.first.call(null,inst_16975);
var state_17009__$1 = state_17009;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17009__$1,(20),out,inst_16984);
} else {
if((state_val_17010 === (8))){
var inst_16963 = (state_17009[(9)]);
var inst_16964 = (state_17009[(11)]);
var inst_16966 = (inst_16964 < inst_16963);
var inst_16967 = inst_16966;
var state_17009__$1 = state_17009;
if(cljs.core.truth_(inst_16967)){
var statearr_17043_17071 = state_17009__$1;
(statearr_17043_17071[(1)] = (10));

} else {
var statearr_17044_17072 = state_17009__$1;
(statearr_17044_17072[(1)] = (11));

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
}
}
}
}
}
});})(c__15393__auto__))
;
return ((function (switch__15303__auto__,c__15393__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15304__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15304__auto____0 = (function (){
var statearr_17045 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17045[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15304__auto__);

(statearr_17045[(1)] = (1));

return statearr_17045;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15304__auto____1 = (function (state_17009){
while(true){
var ret_value__15305__auto__ = (function (){try{while(true){
var result__15306__auto__ = switch__15303__auto__.call(null,state_17009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15306__auto__;
}
break;
}
}catch (e17046){if((e17046 instanceof Object)){
var ex__15307__auto__ = e17046;
var statearr_17047_17073 = state_17009;
(statearr_17047_17073[(5)] = ex__15307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17046;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17074 = state_17009;
state_17009 = G__17074;
continue;
} else {
return ret_value__15305__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15304__auto__ = function(state_17009){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15304__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15304__auto____1.call(this,state_17009);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15304__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15304__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15304__auto__;
})()
;})(switch__15303__auto__,c__15393__auto__))
})();
var state__15395__auto__ = (function (){var statearr_17048 = f__15394__auto__.call(null);
(statearr_17048[(6)] = c__15393__auto__);

return statearr_17048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15395__auto__);
});})(c__15393__auto__))
);

return c__15393__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17076 = arguments.length;
switch (G__17076) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17079 = arguments.length;
switch (G__17079) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17082 = arguments.length;
switch (G__17082) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15393__auto___17129 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15393__auto___17129,out){
return (function (){
var f__15394__auto__ = (function (){var switch__15303__auto__ = ((function (c__15393__auto___17129,out){
return (function (state_17106){
var state_val_17107 = (state_17106[(1)]);
if((state_val_17107 === (7))){
var inst_17101 = (state_17106[(2)]);
var state_17106__$1 = state_17106;
var statearr_17108_17130 = state_17106__$1;
(statearr_17108_17130[(2)] = inst_17101);

(statearr_17108_17130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17107 === (1))){
var inst_17083 = null;
var state_17106__$1 = (function (){var statearr_17109 = state_17106;
(statearr_17109[(7)] = inst_17083);

return statearr_17109;
})();
var statearr_17110_17131 = state_17106__$1;
(statearr_17110_17131[(2)] = null);

(statearr_17110_17131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17107 === (4))){
var inst_17086 = (state_17106[(8)]);
var inst_17086__$1 = (state_17106[(2)]);
var inst_17087 = (inst_17086__$1 == null);
var inst_17088 = cljs.core.not.call(null,inst_17087);
var state_17106__$1 = (function (){var statearr_17111 = state_17106;
(statearr_17111[(8)] = inst_17086__$1);

return statearr_17111;
})();
if(inst_17088){
var statearr_17112_17132 = state_17106__$1;
(statearr_17112_17132[(1)] = (5));

} else {
var statearr_17113_17133 = state_17106__$1;
(statearr_17113_17133[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17107 === (6))){
var state_17106__$1 = state_17106;
var statearr_17114_17134 = state_17106__$1;
(statearr_17114_17134[(2)] = null);

(statearr_17114_17134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17107 === (3))){
var inst_17103 = (state_17106[(2)]);
var inst_17104 = cljs.core.async.close_BANG_.call(null,out);
var state_17106__$1 = (function (){var statearr_17115 = state_17106;
(statearr_17115[(9)] = inst_17103);

return statearr_17115;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17106__$1,inst_17104);
} else {
if((state_val_17107 === (2))){
var state_17106__$1 = state_17106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17106__$1,(4),ch);
} else {
if((state_val_17107 === (11))){
var inst_17086 = (state_17106[(8)]);
var inst_17095 = (state_17106[(2)]);
var inst_17083 = inst_17086;
var state_17106__$1 = (function (){var statearr_17116 = state_17106;
(statearr_17116[(7)] = inst_17083);

(statearr_17116[(10)] = inst_17095);

return statearr_17116;
})();
var statearr_17117_17135 = state_17106__$1;
(statearr_17117_17135[(2)] = null);

(statearr_17117_17135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17107 === (9))){
var inst_17086 = (state_17106[(8)]);
var state_17106__$1 = state_17106;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17106__$1,(11),out,inst_17086);
} else {
if((state_val_17107 === (5))){
var inst_17083 = (state_17106[(7)]);
var inst_17086 = (state_17106[(8)]);
var inst_17090 = cljs.core._EQ_.call(null,inst_17086,inst_17083);
var state_17106__$1 = state_17106;
if(inst_17090){
var statearr_17119_17136 = state_17106__$1;
(statearr_17119_17136[(1)] = (8));

} else {
var statearr_17120_17137 = state_17106__$1;
(statearr_17120_17137[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17107 === (10))){
var inst_17098 = (state_17106[(2)]);
var state_17106__$1 = state_17106;
var statearr_17121_17138 = state_17106__$1;
(statearr_17121_17138[(2)] = inst_17098);

(statearr_17121_17138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17107 === (8))){
var inst_17083 = (state_17106[(7)]);
var tmp17118 = inst_17083;
var inst_17083__$1 = tmp17118;
var state_17106__$1 = (function (){var statearr_17122 = state_17106;
(statearr_17122[(7)] = inst_17083__$1);

return statearr_17122;
})();
var statearr_17123_17139 = state_17106__$1;
(statearr_17123_17139[(2)] = null);

(statearr_17123_17139[(1)] = (2));


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
});})(c__15393__auto___17129,out))
;
return ((function (switch__15303__auto__,c__15393__auto___17129,out){
return (function() {
var cljs$core$async$state_machine__15304__auto__ = null;
var cljs$core$async$state_machine__15304__auto____0 = (function (){
var statearr_17124 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17124[(0)] = cljs$core$async$state_machine__15304__auto__);

(statearr_17124[(1)] = (1));

return statearr_17124;
});
var cljs$core$async$state_machine__15304__auto____1 = (function (state_17106){
while(true){
var ret_value__15305__auto__ = (function (){try{while(true){
var result__15306__auto__ = switch__15303__auto__.call(null,state_17106);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15306__auto__;
}
break;
}
}catch (e17125){if((e17125 instanceof Object)){
var ex__15307__auto__ = e17125;
var statearr_17126_17140 = state_17106;
(statearr_17126_17140[(5)] = ex__15307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17106);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17141 = state_17106;
state_17106 = G__17141;
continue;
} else {
return ret_value__15305__auto__;
}
break;
}
});
cljs$core$async$state_machine__15304__auto__ = function(state_17106){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15304__auto____1.call(this,state_17106);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15304__auto____0;
cljs$core$async$state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15304__auto____1;
return cljs$core$async$state_machine__15304__auto__;
})()
;})(switch__15303__auto__,c__15393__auto___17129,out))
})();
var state__15395__auto__ = (function (){var statearr_17127 = f__15394__auto__.call(null);
(statearr_17127[(6)] = c__15393__auto___17129);

return statearr_17127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15395__auto__);
});})(c__15393__auto___17129,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17143 = arguments.length;
switch (G__17143) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15393__auto___17209 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15393__auto___17209,out){
return (function (){
var f__15394__auto__ = (function (){var switch__15303__auto__ = ((function (c__15393__auto___17209,out){
return (function (state_17181){
var state_val_17182 = (state_17181[(1)]);
if((state_val_17182 === (7))){
var inst_17177 = (state_17181[(2)]);
var state_17181__$1 = state_17181;
var statearr_17183_17210 = state_17181__$1;
(statearr_17183_17210[(2)] = inst_17177);

(statearr_17183_17210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17182 === (1))){
var inst_17144 = (new Array(n));
var inst_17145 = inst_17144;
var inst_17146 = (0);
var state_17181__$1 = (function (){var statearr_17184 = state_17181;
(statearr_17184[(7)] = inst_17146);

(statearr_17184[(8)] = inst_17145);

return statearr_17184;
})();
var statearr_17185_17211 = state_17181__$1;
(statearr_17185_17211[(2)] = null);

(statearr_17185_17211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17182 === (4))){
var inst_17149 = (state_17181[(9)]);
var inst_17149__$1 = (state_17181[(2)]);
var inst_17150 = (inst_17149__$1 == null);
var inst_17151 = cljs.core.not.call(null,inst_17150);
var state_17181__$1 = (function (){var statearr_17186 = state_17181;
(statearr_17186[(9)] = inst_17149__$1);

return statearr_17186;
})();
if(inst_17151){
var statearr_17187_17212 = state_17181__$1;
(statearr_17187_17212[(1)] = (5));

} else {
var statearr_17188_17213 = state_17181__$1;
(statearr_17188_17213[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17182 === (15))){
var inst_17171 = (state_17181[(2)]);
var state_17181__$1 = state_17181;
var statearr_17189_17214 = state_17181__$1;
(statearr_17189_17214[(2)] = inst_17171);

(statearr_17189_17214[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17182 === (13))){
var state_17181__$1 = state_17181;
var statearr_17190_17215 = state_17181__$1;
(statearr_17190_17215[(2)] = null);

(statearr_17190_17215[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17182 === (6))){
var inst_17146 = (state_17181[(7)]);
var inst_17167 = (inst_17146 > (0));
var state_17181__$1 = state_17181;
if(cljs.core.truth_(inst_17167)){
var statearr_17191_17216 = state_17181__$1;
(statearr_17191_17216[(1)] = (12));

} else {
var statearr_17192_17217 = state_17181__$1;
(statearr_17192_17217[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17182 === (3))){
var inst_17179 = (state_17181[(2)]);
var state_17181__$1 = state_17181;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17181__$1,inst_17179);
} else {
if((state_val_17182 === (12))){
var inst_17145 = (state_17181[(8)]);
var inst_17169 = cljs.core.vec.call(null,inst_17145);
var state_17181__$1 = state_17181;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17181__$1,(15),out,inst_17169);
} else {
if((state_val_17182 === (2))){
var state_17181__$1 = state_17181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17181__$1,(4),ch);
} else {
if((state_val_17182 === (11))){
var inst_17161 = (state_17181[(2)]);
var inst_17162 = (new Array(n));
var inst_17145 = inst_17162;
var inst_17146 = (0);
var state_17181__$1 = (function (){var statearr_17193 = state_17181;
(statearr_17193[(7)] = inst_17146);

(statearr_17193[(8)] = inst_17145);

(statearr_17193[(10)] = inst_17161);

return statearr_17193;
})();
var statearr_17194_17218 = state_17181__$1;
(statearr_17194_17218[(2)] = null);

(statearr_17194_17218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17182 === (9))){
var inst_17145 = (state_17181[(8)]);
var inst_17159 = cljs.core.vec.call(null,inst_17145);
var state_17181__$1 = state_17181;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17181__$1,(11),out,inst_17159);
} else {
if((state_val_17182 === (5))){
var inst_17146 = (state_17181[(7)]);
var inst_17145 = (state_17181[(8)]);
var inst_17154 = (state_17181[(11)]);
var inst_17149 = (state_17181[(9)]);
var inst_17153 = (inst_17145[inst_17146] = inst_17149);
var inst_17154__$1 = (inst_17146 + (1));
var inst_17155 = (inst_17154__$1 < n);
var state_17181__$1 = (function (){var statearr_17195 = state_17181;
(statearr_17195[(12)] = inst_17153);

(statearr_17195[(11)] = inst_17154__$1);

return statearr_17195;
})();
if(cljs.core.truth_(inst_17155)){
var statearr_17196_17219 = state_17181__$1;
(statearr_17196_17219[(1)] = (8));

} else {
var statearr_17197_17220 = state_17181__$1;
(statearr_17197_17220[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17182 === (14))){
var inst_17174 = (state_17181[(2)]);
var inst_17175 = cljs.core.async.close_BANG_.call(null,out);
var state_17181__$1 = (function (){var statearr_17199 = state_17181;
(statearr_17199[(13)] = inst_17174);

return statearr_17199;
})();
var statearr_17200_17221 = state_17181__$1;
(statearr_17200_17221[(2)] = inst_17175);

(statearr_17200_17221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17182 === (10))){
var inst_17165 = (state_17181[(2)]);
var state_17181__$1 = state_17181;
var statearr_17201_17222 = state_17181__$1;
(statearr_17201_17222[(2)] = inst_17165);

(statearr_17201_17222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17182 === (8))){
var inst_17145 = (state_17181[(8)]);
var inst_17154 = (state_17181[(11)]);
var tmp17198 = inst_17145;
var inst_17145__$1 = tmp17198;
var inst_17146 = inst_17154;
var state_17181__$1 = (function (){var statearr_17202 = state_17181;
(statearr_17202[(7)] = inst_17146);

(statearr_17202[(8)] = inst_17145__$1);

return statearr_17202;
})();
var statearr_17203_17223 = state_17181__$1;
(statearr_17203_17223[(2)] = null);

(statearr_17203_17223[(1)] = (2));


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
});})(c__15393__auto___17209,out))
;
return ((function (switch__15303__auto__,c__15393__auto___17209,out){
return (function() {
var cljs$core$async$state_machine__15304__auto__ = null;
var cljs$core$async$state_machine__15304__auto____0 = (function (){
var statearr_17204 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17204[(0)] = cljs$core$async$state_machine__15304__auto__);

(statearr_17204[(1)] = (1));

return statearr_17204;
});
var cljs$core$async$state_machine__15304__auto____1 = (function (state_17181){
while(true){
var ret_value__15305__auto__ = (function (){try{while(true){
var result__15306__auto__ = switch__15303__auto__.call(null,state_17181);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15306__auto__;
}
break;
}
}catch (e17205){if((e17205 instanceof Object)){
var ex__15307__auto__ = e17205;
var statearr_17206_17224 = state_17181;
(statearr_17206_17224[(5)] = ex__15307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17181);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17225 = state_17181;
state_17181 = G__17225;
continue;
} else {
return ret_value__15305__auto__;
}
break;
}
});
cljs$core$async$state_machine__15304__auto__ = function(state_17181){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15304__auto____1.call(this,state_17181);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15304__auto____0;
cljs$core$async$state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15304__auto____1;
return cljs$core$async$state_machine__15304__auto__;
})()
;})(switch__15303__auto__,c__15393__auto___17209,out))
})();
var state__15395__auto__ = (function (){var statearr_17207 = f__15394__auto__.call(null);
(statearr_17207[(6)] = c__15393__auto___17209);

return statearr_17207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15395__auto__);
});})(c__15393__auto___17209,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17227 = arguments.length;
switch (G__17227) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15393__auto___17297 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15393__auto___17297,out){
return (function (){
var f__15394__auto__ = (function (){var switch__15303__auto__ = ((function (c__15393__auto___17297,out){
return (function (state_17269){
var state_val_17270 = (state_17269[(1)]);
if((state_val_17270 === (7))){
var inst_17265 = (state_17269[(2)]);
var state_17269__$1 = state_17269;
var statearr_17271_17298 = state_17269__$1;
(statearr_17271_17298[(2)] = inst_17265);

(statearr_17271_17298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17270 === (1))){
var inst_17228 = [];
var inst_17229 = inst_17228;
var inst_17230 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17269__$1 = (function (){var statearr_17272 = state_17269;
(statearr_17272[(7)] = inst_17229);

(statearr_17272[(8)] = inst_17230);

return statearr_17272;
})();
var statearr_17273_17299 = state_17269__$1;
(statearr_17273_17299[(2)] = null);

(statearr_17273_17299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17270 === (4))){
var inst_17233 = (state_17269[(9)]);
var inst_17233__$1 = (state_17269[(2)]);
var inst_17234 = (inst_17233__$1 == null);
var inst_17235 = cljs.core.not.call(null,inst_17234);
var state_17269__$1 = (function (){var statearr_17274 = state_17269;
(statearr_17274[(9)] = inst_17233__$1);

return statearr_17274;
})();
if(inst_17235){
var statearr_17275_17300 = state_17269__$1;
(statearr_17275_17300[(1)] = (5));

} else {
var statearr_17276_17301 = state_17269__$1;
(statearr_17276_17301[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17270 === (15))){
var inst_17259 = (state_17269[(2)]);
var state_17269__$1 = state_17269;
var statearr_17277_17302 = state_17269__$1;
(statearr_17277_17302[(2)] = inst_17259);

(statearr_17277_17302[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17270 === (13))){
var state_17269__$1 = state_17269;
var statearr_17278_17303 = state_17269__$1;
(statearr_17278_17303[(2)] = null);

(statearr_17278_17303[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17270 === (6))){
var inst_17229 = (state_17269[(7)]);
var inst_17254 = inst_17229.length;
var inst_17255 = (inst_17254 > (0));
var state_17269__$1 = state_17269;
if(cljs.core.truth_(inst_17255)){
var statearr_17279_17304 = state_17269__$1;
(statearr_17279_17304[(1)] = (12));

} else {
var statearr_17280_17305 = state_17269__$1;
(statearr_17280_17305[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17270 === (3))){
var inst_17267 = (state_17269[(2)]);
var state_17269__$1 = state_17269;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17269__$1,inst_17267);
} else {
if((state_val_17270 === (12))){
var inst_17229 = (state_17269[(7)]);
var inst_17257 = cljs.core.vec.call(null,inst_17229);
var state_17269__$1 = state_17269;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17269__$1,(15),out,inst_17257);
} else {
if((state_val_17270 === (2))){
var state_17269__$1 = state_17269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17269__$1,(4),ch);
} else {
if((state_val_17270 === (11))){
var inst_17233 = (state_17269[(9)]);
var inst_17237 = (state_17269[(10)]);
var inst_17247 = (state_17269[(2)]);
var inst_17248 = [];
var inst_17249 = inst_17248.push(inst_17233);
var inst_17229 = inst_17248;
var inst_17230 = inst_17237;
var state_17269__$1 = (function (){var statearr_17281 = state_17269;
(statearr_17281[(7)] = inst_17229);

(statearr_17281[(11)] = inst_17247);

(statearr_17281[(8)] = inst_17230);

(statearr_17281[(12)] = inst_17249);

return statearr_17281;
})();
var statearr_17282_17306 = state_17269__$1;
(statearr_17282_17306[(2)] = null);

(statearr_17282_17306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17270 === (9))){
var inst_17229 = (state_17269[(7)]);
var inst_17245 = cljs.core.vec.call(null,inst_17229);
var state_17269__$1 = state_17269;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17269__$1,(11),out,inst_17245);
} else {
if((state_val_17270 === (5))){
var inst_17233 = (state_17269[(9)]);
var inst_17237 = (state_17269[(10)]);
var inst_17230 = (state_17269[(8)]);
var inst_17237__$1 = f.call(null,inst_17233);
var inst_17238 = cljs.core._EQ_.call(null,inst_17237__$1,inst_17230);
var inst_17239 = cljs.core.keyword_identical_QMARK_.call(null,inst_17230,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_17240 = (inst_17238) || (inst_17239);
var state_17269__$1 = (function (){var statearr_17283 = state_17269;
(statearr_17283[(10)] = inst_17237__$1);

return statearr_17283;
})();
if(cljs.core.truth_(inst_17240)){
var statearr_17284_17307 = state_17269__$1;
(statearr_17284_17307[(1)] = (8));

} else {
var statearr_17285_17308 = state_17269__$1;
(statearr_17285_17308[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17270 === (14))){
var inst_17262 = (state_17269[(2)]);
var inst_17263 = cljs.core.async.close_BANG_.call(null,out);
var state_17269__$1 = (function (){var statearr_17287 = state_17269;
(statearr_17287[(13)] = inst_17262);

return statearr_17287;
})();
var statearr_17288_17309 = state_17269__$1;
(statearr_17288_17309[(2)] = inst_17263);

(statearr_17288_17309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17270 === (10))){
var inst_17252 = (state_17269[(2)]);
var state_17269__$1 = state_17269;
var statearr_17289_17310 = state_17269__$1;
(statearr_17289_17310[(2)] = inst_17252);

(statearr_17289_17310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17270 === (8))){
var inst_17229 = (state_17269[(7)]);
var inst_17233 = (state_17269[(9)]);
var inst_17237 = (state_17269[(10)]);
var inst_17242 = inst_17229.push(inst_17233);
var tmp17286 = inst_17229;
var inst_17229__$1 = tmp17286;
var inst_17230 = inst_17237;
var state_17269__$1 = (function (){var statearr_17290 = state_17269;
(statearr_17290[(7)] = inst_17229__$1);

(statearr_17290[(14)] = inst_17242);

(statearr_17290[(8)] = inst_17230);

return statearr_17290;
})();
var statearr_17291_17311 = state_17269__$1;
(statearr_17291_17311[(2)] = null);

(statearr_17291_17311[(1)] = (2));


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
});})(c__15393__auto___17297,out))
;
return ((function (switch__15303__auto__,c__15393__auto___17297,out){
return (function() {
var cljs$core$async$state_machine__15304__auto__ = null;
var cljs$core$async$state_machine__15304__auto____0 = (function (){
var statearr_17292 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17292[(0)] = cljs$core$async$state_machine__15304__auto__);

(statearr_17292[(1)] = (1));

return statearr_17292;
});
var cljs$core$async$state_machine__15304__auto____1 = (function (state_17269){
while(true){
var ret_value__15305__auto__ = (function (){try{while(true){
var result__15306__auto__ = switch__15303__auto__.call(null,state_17269);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15306__auto__;
}
break;
}
}catch (e17293){if((e17293 instanceof Object)){
var ex__15307__auto__ = e17293;
var statearr_17294_17312 = state_17269;
(statearr_17294_17312[(5)] = ex__15307__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15305__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17313 = state_17269;
state_17269 = G__17313;
continue;
} else {
return ret_value__15305__auto__;
}
break;
}
});
cljs$core$async$state_machine__15304__auto__ = function(state_17269){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15304__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15304__auto____1.call(this,state_17269);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15304__auto____0;
cljs$core$async$state_machine__15304__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15304__auto____1;
return cljs$core$async$state_machine__15304__auto__;
})()
;})(switch__15303__auto__,c__15393__auto___17297,out))
})();
var state__15395__auto__ = (function (){var statearr_17295 = f__15394__auto__.call(null);
(statearr_17295[(6)] = c__15393__auto___17297);

return statearr_17295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15395__auto__);
});})(c__15393__auto___17297,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1506917868042
