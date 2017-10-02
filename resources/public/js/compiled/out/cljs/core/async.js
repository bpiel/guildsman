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
var G__15348 = arguments.length;
switch (G__15348) {
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
if(typeof cljs.core.async.t_cljs$core$async15349 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15349 = (function (f,blockable,meta15350){
this.f = f;
this.blockable = blockable;
this.meta15350 = meta15350;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15351,meta15350__$1){
var self__ = this;
var _15351__$1 = this;
return (new cljs.core.async.t_cljs$core$async15349(self__.f,self__.blockable,meta15350__$1));
});

cljs.core.async.t_cljs$core$async15349.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15351){
var self__ = this;
var _15351__$1 = this;
return self__.meta15350;
});

cljs.core.async.t_cljs$core$async15349.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15349.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15349.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async15349.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async15349.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta15350","meta15350",1550364234,null)], null);
});

cljs.core.async.t_cljs$core$async15349.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15349.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15349";

cljs.core.async.t_cljs$core$async15349.cljs$lang$ctorPrWriter = (function (this__10481__auto__,writer__10482__auto__,opt__10483__auto__){
return cljs.core._write.call(null,writer__10482__auto__,"cljs.core.async/t_cljs$core$async15349");
});

cljs.core.async.__GT_t_cljs$core$async15349 = (function cljs$core$async$__GT_t_cljs$core$async15349(f__$1,blockable__$1,meta15350){
return (new cljs.core.async.t_cljs$core$async15349(f__$1,blockable__$1,meta15350));
});

}

return (new cljs.core.async.t_cljs$core$async15349(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__15355 = arguments.length;
switch (G__15355) {
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
var G__15358 = arguments.length;
switch (G__15358) {
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
var G__15361 = arguments.length;
switch (G__15361) {
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
var val_15363 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_15363);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_15363,ret){
return (function (){
return fn1.call(null,val_15363);
});})(val_15363,ret))
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
var G__15365 = arguments.length;
switch (G__15365) {
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
var n__10853__auto___15367 = n;
var x_15368 = (0);
while(true){
if((x_15368 < n__10853__auto___15367)){
(a[x_15368] = (0));

var G__15369 = (x_15368 + (1));
x_15368 = G__15369;
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

var G__15370 = (i + (1));
i = G__15370;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async15371 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15371 = (function (flag,meta15372){
this.flag = flag;
this.meta15372 = meta15372;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15373,meta15372__$1){
var self__ = this;
var _15373__$1 = this;
return (new cljs.core.async.t_cljs$core$async15371(self__.flag,meta15372__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async15371.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15373){
var self__ = this;
var _15373__$1 = this;
return self__.meta15372;
});})(flag))
;

cljs.core.async.t_cljs$core$async15371.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15371.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async15371.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15371.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15371.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15372","meta15372",-510327629,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async15371.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15371.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15371";

cljs.core.async.t_cljs$core$async15371.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__10481__auto__,writer__10482__auto__,opt__10483__auto__){
return cljs.core._write.call(null,writer__10482__auto__,"cljs.core.async/t_cljs$core$async15371");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async15371 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15371(flag__$1,meta15372){
return (new cljs.core.async.t_cljs$core$async15371(flag__$1,meta15372));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async15371(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async15374 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15374 = (function (flag,cb,meta15375){
this.flag = flag;
this.cb = cb;
this.meta15375 = meta15375;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15376,meta15375__$1){
var self__ = this;
var _15376__$1 = this;
return (new cljs.core.async.t_cljs$core$async15374(self__.flag,self__.cb,meta15375__$1));
});

cljs.core.async.t_cljs$core$async15374.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15376){
var self__ = this;
var _15376__$1 = this;
return self__.meta15375;
});

cljs.core.async.t_cljs$core$async15374.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15374.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async15374.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15374.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async15374.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15375","meta15375",-819719593,null)], null);
});

cljs.core.async.t_cljs$core$async15374.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15374.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15374";

cljs.core.async.t_cljs$core$async15374.cljs$lang$ctorPrWriter = (function (this__10481__auto__,writer__10482__auto__,opt__10483__auto__){
return cljs.core._write.call(null,writer__10482__auto__,"cljs.core.async/t_cljs$core$async15374");
});

cljs.core.async.__GT_t_cljs$core$async15374 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15374(flag__$1,cb__$1,meta15375){
return (new cljs.core.async.t_cljs$core$async15374(flag__$1,cb__$1,meta15375));
});

}

return (new cljs.core.async.t_cljs$core$async15374(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__15377_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15377_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15378_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15378_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__9810__auto__ = wport;
if(cljs.core.truth_(or__9810__auto__)){
return or__9810__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15379 = (i + (1));
i = G__15379;
continue;
}
} else {
return null;
}
break;
}
})();
var or__9810__auto__ = ret;
if(cljs.core.truth_(or__9810__auto__)){
return or__9810__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6738__auto__ = (function (){var and__9798__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__9798__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__9798__auto__;
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
var args__11094__auto__ = [];
var len__11087__auto___15385 = arguments.length;
var i__11088__auto___15386 = (0);
while(true){
if((i__11088__auto___15386 < len__11087__auto___15385)){
args__11094__auto__.push((arguments[i__11088__auto___15386]));

var G__15387 = (i__11088__auto___15386 + (1));
i__11088__auto___15386 = G__15387;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((1) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11095__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15382){
var map__15383 = p__15382;
var map__15383__$1 = ((((!((map__15383 == null)))?((((map__15383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15383.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15383):map__15383);
var opts = map__15383__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15380){
var G__15381 = cljs.core.first.call(null,seq15380);
var seq15380__$1 = cljs.core.next.call(null,seq15380);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15381,seq15380__$1);
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
var G__15389 = arguments.length;
switch (G__15389) {
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
var c__15288__auto___15435 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15288__auto___15435){
return (function (){
var f__15289__auto__ = (function (){var switch__15198__auto__ = ((function (c__15288__auto___15435){
return (function (state_15413){
var state_val_15414 = (state_15413[(1)]);
if((state_val_15414 === (7))){
var inst_15409 = (state_15413[(2)]);
var state_15413__$1 = state_15413;
var statearr_15415_15436 = state_15413__$1;
(statearr_15415_15436[(2)] = inst_15409);

(statearr_15415_15436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15414 === (1))){
var state_15413__$1 = state_15413;
var statearr_15416_15437 = state_15413__$1;
(statearr_15416_15437[(2)] = null);

(statearr_15416_15437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15414 === (4))){
var inst_15392 = (state_15413[(7)]);
var inst_15392__$1 = (state_15413[(2)]);
var inst_15393 = (inst_15392__$1 == null);
var state_15413__$1 = (function (){var statearr_15417 = state_15413;
(statearr_15417[(7)] = inst_15392__$1);

return statearr_15417;
})();
if(cljs.core.truth_(inst_15393)){
var statearr_15418_15438 = state_15413__$1;
(statearr_15418_15438[(1)] = (5));

} else {
var statearr_15419_15439 = state_15413__$1;
(statearr_15419_15439[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15414 === (13))){
var state_15413__$1 = state_15413;
var statearr_15420_15440 = state_15413__$1;
(statearr_15420_15440[(2)] = null);

(statearr_15420_15440[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15414 === (6))){
var inst_15392 = (state_15413[(7)]);
var state_15413__$1 = state_15413;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15413__$1,(11),to,inst_15392);
} else {
if((state_val_15414 === (3))){
var inst_15411 = (state_15413[(2)]);
var state_15413__$1 = state_15413;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15413__$1,inst_15411);
} else {
if((state_val_15414 === (12))){
var state_15413__$1 = state_15413;
var statearr_15421_15441 = state_15413__$1;
(statearr_15421_15441[(2)] = null);

(statearr_15421_15441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15414 === (2))){
var state_15413__$1 = state_15413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15413__$1,(4),from);
} else {
if((state_val_15414 === (11))){
var inst_15402 = (state_15413[(2)]);
var state_15413__$1 = state_15413;
if(cljs.core.truth_(inst_15402)){
var statearr_15422_15442 = state_15413__$1;
(statearr_15422_15442[(1)] = (12));

} else {
var statearr_15423_15443 = state_15413__$1;
(statearr_15423_15443[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15414 === (9))){
var state_15413__$1 = state_15413;
var statearr_15424_15444 = state_15413__$1;
(statearr_15424_15444[(2)] = null);

(statearr_15424_15444[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15414 === (5))){
var state_15413__$1 = state_15413;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15425_15445 = state_15413__$1;
(statearr_15425_15445[(1)] = (8));

} else {
var statearr_15426_15446 = state_15413__$1;
(statearr_15426_15446[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15414 === (14))){
var inst_15407 = (state_15413[(2)]);
var state_15413__$1 = state_15413;
var statearr_15427_15447 = state_15413__$1;
(statearr_15427_15447[(2)] = inst_15407);

(statearr_15427_15447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15414 === (10))){
var inst_15399 = (state_15413[(2)]);
var state_15413__$1 = state_15413;
var statearr_15428_15448 = state_15413__$1;
(statearr_15428_15448[(2)] = inst_15399);

(statearr_15428_15448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15414 === (8))){
var inst_15396 = cljs.core.async.close_BANG_.call(null,to);
var state_15413__$1 = state_15413;
var statearr_15429_15449 = state_15413__$1;
(statearr_15429_15449[(2)] = inst_15396);

(statearr_15429_15449[(1)] = (10));


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
});})(c__15288__auto___15435))
;
return ((function (switch__15198__auto__,c__15288__auto___15435){
return (function() {
var cljs$core$async$state_machine__15199__auto__ = null;
var cljs$core$async$state_machine__15199__auto____0 = (function (){
var statearr_15430 = [null,null,null,null,null,null,null,null];
(statearr_15430[(0)] = cljs$core$async$state_machine__15199__auto__);

(statearr_15430[(1)] = (1));

return statearr_15430;
});
var cljs$core$async$state_machine__15199__auto____1 = (function (state_15413){
while(true){
var ret_value__15200__auto__ = (function (){try{while(true){
var result__15201__auto__ = switch__15198__auto__.call(null,state_15413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15201__auto__;
}
break;
}
}catch (e15431){if((e15431 instanceof Object)){
var ex__15202__auto__ = e15431;
var statearr_15432_15450 = state_15413;
(statearr_15432_15450[(5)] = ex__15202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15451 = state_15413;
state_15413 = G__15451;
continue;
} else {
return ret_value__15200__auto__;
}
break;
}
});
cljs$core$async$state_machine__15199__auto__ = function(state_15413){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15199__auto____1.call(this,state_15413);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15199__auto____0;
cljs$core$async$state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15199__auto____1;
return cljs$core$async$state_machine__15199__auto__;
})()
;})(switch__15198__auto__,c__15288__auto___15435))
})();
var state__15290__auto__ = (function (){var statearr_15433 = f__15289__auto__.call(null);
(statearr_15433[(6)] = c__15288__auto___15435);

return statearr_15433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15290__auto__);
});})(c__15288__auto___15435))
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
return (function (p__15452){
var vec__15453 = p__15452;
var v = cljs.core.nth.call(null,vec__15453,(0),null);
var p = cljs.core.nth.call(null,vec__15453,(1),null);
var job = vec__15453;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__15288__auto___15624 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15288__auto___15624,res,vec__15453,v,p,job,jobs,results){
return (function (){
var f__15289__auto__ = (function (){var switch__15198__auto__ = ((function (c__15288__auto___15624,res,vec__15453,v,p,job,jobs,results){
return (function (state_15460){
var state_val_15461 = (state_15460[(1)]);
if((state_val_15461 === (1))){
var state_15460__$1 = state_15460;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15460__$1,(2),res,v);
} else {
if((state_val_15461 === (2))){
var inst_15457 = (state_15460[(2)]);
var inst_15458 = cljs.core.async.close_BANG_.call(null,res);
var state_15460__$1 = (function (){var statearr_15462 = state_15460;
(statearr_15462[(7)] = inst_15457);

return statearr_15462;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15460__$1,inst_15458);
} else {
return null;
}
}
});})(c__15288__auto___15624,res,vec__15453,v,p,job,jobs,results))
;
return ((function (switch__15198__auto__,c__15288__auto___15624,res,vec__15453,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15199__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15199__auto____0 = (function (){
var statearr_15463 = [null,null,null,null,null,null,null,null];
(statearr_15463[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15199__auto__);

(statearr_15463[(1)] = (1));

return statearr_15463;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15199__auto____1 = (function (state_15460){
while(true){
var ret_value__15200__auto__ = (function (){try{while(true){
var result__15201__auto__ = switch__15198__auto__.call(null,state_15460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15201__auto__;
}
break;
}
}catch (e15464){if((e15464 instanceof Object)){
var ex__15202__auto__ = e15464;
var statearr_15465_15625 = state_15460;
(statearr_15465_15625[(5)] = ex__15202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15626 = state_15460;
state_15460 = G__15626;
continue;
} else {
return ret_value__15200__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15199__auto__ = function(state_15460){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15199__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15199__auto____1.call(this,state_15460);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15199__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15199__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15199__auto__;
})()
;})(switch__15198__auto__,c__15288__auto___15624,res,vec__15453,v,p,job,jobs,results))
})();
var state__15290__auto__ = (function (){var statearr_15466 = f__15289__auto__.call(null);
(statearr_15466[(6)] = c__15288__auto___15624);

return statearr_15466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15290__auto__);
});})(c__15288__auto___15624,res,vec__15453,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__15467){
var vec__15468 = p__15467;
var v = cljs.core.nth.call(null,vec__15468,(0),null);
var p = cljs.core.nth.call(null,vec__15468,(1),null);
var job = vec__15468;
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
var n__10853__auto___15627 = n;
var __15628 = (0);
while(true){
if((__15628 < n__10853__auto___15627)){
var G__15471_15629 = type;
var G__15471_15630__$1 = (((G__15471_15629 instanceof cljs.core.Keyword))?G__15471_15629.fqn:null);
switch (G__15471_15630__$1) {
case "compute":
var c__15288__auto___15632 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15628,c__15288__auto___15632,G__15471_15629,G__15471_15630__$1,n__10853__auto___15627,jobs,results,process,async){
return (function (){
var f__15289__auto__ = (function (){var switch__15198__auto__ = ((function (__15628,c__15288__auto___15632,G__15471_15629,G__15471_15630__$1,n__10853__auto___15627,jobs,results,process,async){
return (function (state_15484){
var state_val_15485 = (state_15484[(1)]);
if((state_val_15485 === (1))){
var state_15484__$1 = state_15484;
var statearr_15486_15633 = state_15484__$1;
(statearr_15486_15633[(2)] = null);

(statearr_15486_15633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15485 === (2))){
var state_15484__$1 = state_15484;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15484__$1,(4),jobs);
} else {
if((state_val_15485 === (3))){
var inst_15482 = (state_15484[(2)]);
var state_15484__$1 = state_15484;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15484__$1,inst_15482);
} else {
if((state_val_15485 === (4))){
var inst_15474 = (state_15484[(2)]);
var inst_15475 = process.call(null,inst_15474);
var state_15484__$1 = state_15484;
if(cljs.core.truth_(inst_15475)){
var statearr_15487_15634 = state_15484__$1;
(statearr_15487_15634[(1)] = (5));

} else {
var statearr_15488_15635 = state_15484__$1;
(statearr_15488_15635[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15485 === (5))){
var state_15484__$1 = state_15484;
var statearr_15489_15636 = state_15484__$1;
(statearr_15489_15636[(2)] = null);

(statearr_15489_15636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15485 === (6))){
var state_15484__$1 = state_15484;
var statearr_15490_15637 = state_15484__$1;
(statearr_15490_15637[(2)] = null);

(statearr_15490_15637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15485 === (7))){
var inst_15480 = (state_15484[(2)]);
var state_15484__$1 = state_15484;
var statearr_15491_15638 = state_15484__$1;
(statearr_15491_15638[(2)] = inst_15480);

(statearr_15491_15638[(1)] = (3));


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
});})(__15628,c__15288__auto___15632,G__15471_15629,G__15471_15630__$1,n__10853__auto___15627,jobs,results,process,async))
;
return ((function (__15628,switch__15198__auto__,c__15288__auto___15632,G__15471_15629,G__15471_15630__$1,n__10853__auto___15627,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15199__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15199__auto____0 = (function (){
var statearr_15492 = [null,null,null,null,null,null,null];
(statearr_15492[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15199__auto__);

(statearr_15492[(1)] = (1));

return statearr_15492;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15199__auto____1 = (function (state_15484){
while(true){
var ret_value__15200__auto__ = (function (){try{while(true){
var result__15201__auto__ = switch__15198__auto__.call(null,state_15484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15201__auto__;
}
break;
}
}catch (e15493){if((e15493 instanceof Object)){
var ex__15202__auto__ = e15493;
var statearr_15494_15639 = state_15484;
(statearr_15494_15639[(5)] = ex__15202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15493;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15640 = state_15484;
state_15484 = G__15640;
continue;
} else {
return ret_value__15200__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15199__auto__ = function(state_15484){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15199__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15199__auto____1.call(this,state_15484);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15199__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15199__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15199__auto__;
})()
;})(__15628,switch__15198__auto__,c__15288__auto___15632,G__15471_15629,G__15471_15630__$1,n__10853__auto___15627,jobs,results,process,async))
})();
var state__15290__auto__ = (function (){var statearr_15495 = f__15289__auto__.call(null);
(statearr_15495[(6)] = c__15288__auto___15632);

return statearr_15495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15290__auto__);
});})(__15628,c__15288__auto___15632,G__15471_15629,G__15471_15630__$1,n__10853__auto___15627,jobs,results,process,async))
);


break;
case "async":
var c__15288__auto___15641 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15628,c__15288__auto___15641,G__15471_15629,G__15471_15630__$1,n__10853__auto___15627,jobs,results,process,async){
return (function (){
var f__15289__auto__ = (function (){var switch__15198__auto__ = ((function (__15628,c__15288__auto___15641,G__15471_15629,G__15471_15630__$1,n__10853__auto___15627,jobs,results,process,async){
return (function (state_15508){
var state_val_15509 = (state_15508[(1)]);
if((state_val_15509 === (1))){
var state_15508__$1 = state_15508;
var statearr_15510_15642 = state_15508__$1;
(statearr_15510_15642[(2)] = null);

(statearr_15510_15642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (2))){
var state_15508__$1 = state_15508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15508__$1,(4),jobs);
} else {
if((state_val_15509 === (3))){
var inst_15506 = (state_15508[(2)]);
var state_15508__$1 = state_15508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15508__$1,inst_15506);
} else {
if((state_val_15509 === (4))){
var inst_15498 = (state_15508[(2)]);
var inst_15499 = async.call(null,inst_15498);
var state_15508__$1 = state_15508;
if(cljs.core.truth_(inst_15499)){
var statearr_15511_15643 = state_15508__$1;
(statearr_15511_15643[(1)] = (5));

} else {
var statearr_15512_15644 = state_15508__$1;
(statearr_15512_15644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (5))){
var state_15508__$1 = state_15508;
var statearr_15513_15645 = state_15508__$1;
(statearr_15513_15645[(2)] = null);

(statearr_15513_15645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (6))){
var state_15508__$1 = state_15508;
var statearr_15514_15646 = state_15508__$1;
(statearr_15514_15646[(2)] = null);

(statearr_15514_15646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (7))){
var inst_15504 = (state_15508[(2)]);
var state_15508__$1 = state_15508;
var statearr_15515_15647 = state_15508__$1;
(statearr_15515_15647[(2)] = inst_15504);

(statearr_15515_15647[(1)] = (3));


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
});})(__15628,c__15288__auto___15641,G__15471_15629,G__15471_15630__$1,n__10853__auto___15627,jobs,results,process,async))
;
return ((function (__15628,switch__15198__auto__,c__15288__auto___15641,G__15471_15629,G__15471_15630__$1,n__10853__auto___15627,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15199__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15199__auto____0 = (function (){
var statearr_15516 = [null,null,null,null,null,null,null];
(statearr_15516[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15199__auto__);

(statearr_15516[(1)] = (1));

return statearr_15516;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15199__auto____1 = (function (state_15508){
while(true){
var ret_value__15200__auto__ = (function (){try{while(true){
var result__15201__auto__ = switch__15198__auto__.call(null,state_15508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15201__auto__;
}
break;
}
}catch (e15517){if((e15517 instanceof Object)){
var ex__15202__auto__ = e15517;
var statearr_15518_15648 = state_15508;
(statearr_15518_15648[(5)] = ex__15202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15649 = state_15508;
state_15508 = G__15649;
continue;
} else {
return ret_value__15200__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15199__auto__ = function(state_15508){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15199__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15199__auto____1.call(this,state_15508);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15199__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15199__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15199__auto__;
})()
;})(__15628,switch__15198__auto__,c__15288__auto___15641,G__15471_15629,G__15471_15630__$1,n__10853__auto___15627,jobs,results,process,async))
})();
var state__15290__auto__ = (function (){var statearr_15519 = f__15289__auto__.call(null);
(statearr_15519[(6)] = c__15288__auto___15641);

return statearr_15519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15290__auto__);
});})(__15628,c__15288__auto___15641,G__15471_15629,G__15471_15630__$1,n__10853__auto___15627,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15471_15630__$1)].join('')));

}

var G__15650 = (__15628 + (1));
__15628 = G__15650;
continue;
} else {
}
break;
}

var c__15288__auto___15651 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15288__auto___15651,jobs,results,process,async){
return (function (){
var f__15289__auto__ = (function (){var switch__15198__auto__ = ((function (c__15288__auto___15651,jobs,results,process,async){
return (function (state_15541){
var state_val_15542 = (state_15541[(1)]);
if((state_val_15542 === (1))){
var state_15541__$1 = state_15541;
var statearr_15543_15652 = state_15541__$1;
(statearr_15543_15652[(2)] = null);

(statearr_15543_15652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15542 === (2))){
var state_15541__$1 = state_15541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15541__$1,(4),from);
} else {
if((state_val_15542 === (3))){
var inst_15539 = (state_15541[(2)]);
var state_15541__$1 = state_15541;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15541__$1,inst_15539);
} else {
if((state_val_15542 === (4))){
var inst_15522 = (state_15541[(7)]);
var inst_15522__$1 = (state_15541[(2)]);
var inst_15523 = (inst_15522__$1 == null);
var state_15541__$1 = (function (){var statearr_15544 = state_15541;
(statearr_15544[(7)] = inst_15522__$1);

return statearr_15544;
})();
if(cljs.core.truth_(inst_15523)){
var statearr_15545_15653 = state_15541__$1;
(statearr_15545_15653[(1)] = (5));

} else {
var statearr_15546_15654 = state_15541__$1;
(statearr_15546_15654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15542 === (5))){
var inst_15525 = cljs.core.async.close_BANG_.call(null,jobs);
var state_15541__$1 = state_15541;
var statearr_15547_15655 = state_15541__$1;
(statearr_15547_15655[(2)] = inst_15525);

(statearr_15547_15655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15542 === (6))){
var inst_15527 = (state_15541[(8)]);
var inst_15522 = (state_15541[(7)]);
var inst_15527__$1 = cljs.core.async.chan.call(null,(1));
var inst_15528 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15529 = [inst_15522,inst_15527__$1];
var inst_15530 = (new cljs.core.PersistentVector(null,2,(5),inst_15528,inst_15529,null));
var state_15541__$1 = (function (){var statearr_15548 = state_15541;
(statearr_15548[(8)] = inst_15527__$1);

return statearr_15548;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15541__$1,(8),jobs,inst_15530);
} else {
if((state_val_15542 === (7))){
var inst_15537 = (state_15541[(2)]);
var state_15541__$1 = state_15541;
var statearr_15549_15656 = state_15541__$1;
(statearr_15549_15656[(2)] = inst_15537);

(statearr_15549_15656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15542 === (8))){
var inst_15527 = (state_15541[(8)]);
var inst_15532 = (state_15541[(2)]);
var state_15541__$1 = (function (){var statearr_15550 = state_15541;
(statearr_15550[(9)] = inst_15532);

return statearr_15550;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15541__$1,(9),results,inst_15527);
} else {
if((state_val_15542 === (9))){
var inst_15534 = (state_15541[(2)]);
var state_15541__$1 = (function (){var statearr_15551 = state_15541;
(statearr_15551[(10)] = inst_15534);

return statearr_15551;
})();
var statearr_15552_15657 = state_15541__$1;
(statearr_15552_15657[(2)] = null);

(statearr_15552_15657[(1)] = (2));


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
});})(c__15288__auto___15651,jobs,results,process,async))
;
return ((function (switch__15198__auto__,c__15288__auto___15651,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15199__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15199__auto____0 = (function (){
var statearr_15553 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15553[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15199__auto__);

(statearr_15553[(1)] = (1));

return statearr_15553;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15199__auto____1 = (function (state_15541){
while(true){
var ret_value__15200__auto__ = (function (){try{while(true){
var result__15201__auto__ = switch__15198__auto__.call(null,state_15541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15201__auto__;
}
break;
}
}catch (e15554){if((e15554 instanceof Object)){
var ex__15202__auto__ = e15554;
var statearr_15555_15658 = state_15541;
(statearr_15555_15658[(5)] = ex__15202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15659 = state_15541;
state_15541 = G__15659;
continue;
} else {
return ret_value__15200__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15199__auto__ = function(state_15541){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15199__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15199__auto____1.call(this,state_15541);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15199__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15199__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15199__auto__;
})()
;})(switch__15198__auto__,c__15288__auto___15651,jobs,results,process,async))
})();
var state__15290__auto__ = (function (){var statearr_15556 = f__15289__auto__.call(null);
(statearr_15556[(6)] = c__15288__auto___15651);

return statearr_15556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15290__auto__);
});})(c__15288__auto___15651,jobs,results,process,async))
);


var c__15288__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15288__auto__,jobs,results,process,async){
return (function (){
var f__15289__auto__ = (function (){var switch__15198__auto__ = ((function (c__15288__auto__,jobs,results,process,async){
return (function (state_15594){
var state_val_15595 = (state_15594[(1)]);
if((state_val_15595 === (7))){
var inst_15590 = (state_15594[(2)]);
var state_15594__$1 = state_15594;
var statearr_15596_15660 = state_15594__$1;
(statearr_15596_15660[(2)] = inst_15590);

(statearr_15596_15660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (20))){
var state_15594__$1 = state_15594;
var statearr_15597_15661 = state_15594__$1;
(statearr_15597_15661[(2)] = null);

(statearr_15597_15661[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (1))){
var state_15594__$1 = state_15594;
var statearr_15598_15662 = state_15594__$1;
(statearr_15598_15662[(2)] = null);

(statearr_15598_15662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (4))){
var inst_15559 = (state_15594[(7)]);
var inst_15559__$1 = (state_15594[(2)]);
var inst_15560 = (inst_15559__$1 == null);
var state_15594__$1 = (function (){var statearr_15599 = state_15594;
(statearr_15599[(7)] = inst_15559__$1);

return statearr_15599;
})();
if(cljs.core.truth_(inst_15560)){
var statearr_15600_15663 = state_15594__$1;
(statearr_15600_15663[(1)] = (5));

} else {
var statearr_15601_15664 = state_15594__$1;
(statearr_15601_15664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (15))){
var inst_15572 = (state_15594[(8)]);
var state_15594__$1 = state_15594;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15594__$1,(18),to,inst_15572);
} else {
if((state_val_15595 === (21))){
var inst_15585 = (state_15594[(2)]);
var state_15594__$1 = state_15594;
var statearr_15602_15665 = state_15594__$1;
(statearr_15602_15665[(2)] = inst_15585);

(statearr_15602_15665[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (13))){
var inst_15587 = (state_15594[(2)]);
var state_15594__$1 = (function (){var statearr_15603 = state_15594;
(statearr_15603[(9)] = inst_15587);

return statearr_15603;
})();
var statearr_15604_15666 = state_15594__$1;
(statearr_15604_15666[(2)] = null);

(statearr_15604_15666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (6))){
var inst_15559 = (state_15594[(7)]);
var state_15594__$1 = state_15594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15594__$1,(11),inst_15559);
} else {
if((state_val_15595 === (17))){
var inst_15580 = (state_15594[(2)]);
var state_15594__$1 = state_15594;
if(cljs.core.truth_(inst_15580)){
var statearr_15605_15667 = state_15594__$1;
(statearr_15605_15667[(1)] = (19));

} else {
var statearr_15606_15668 = state_15594__$1;
(statearr_15606_15668[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (3))){
var inst_15592 = (state_15594[(2)]);
var state_15594__$1 = state_15594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15594__$1,inst_15592);
} else {
if((state_val_15595 === (12))){
var inst_15569 = (state_15594[(10)]);
var state_15594__$1 = state_15594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15594__$1,(14),inst_15569);
} else {
if((state_val_15595 === (2))){
var state_15594__$1 = state_15594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15594__$1,(4),results);
} else {
if((state_val_15595 === (19))){
var state_15594__$1 = state_15594;
var statearr_15607_15669 = state_15594__$1;
(statearr_15607_15669[(2)] = null);

(statearr_15607_15669[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (11))){
var inst_15569 = (state_15594[(2)]);
var state_15594__$1 = (function (){var statearr_15608 = state_15594;
(statearr_15608[(10)] = inst_15569);

return statearr_15608;
})();
var statearr_15609_15670 = state_15594__$1;
(statearr_15609_15670[(2)] = null);

(statearr_15609_15670[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (9))){
var state_15594__$1 = state_15594;
var statearr_15610_15671 = state_15594__$1;
(statearr_15610_15671[(2)] = null);

(statearr_15610_15671[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (5))){
var state_15594__$1 = state_15594;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15611_15672 = state_15594__$1;
(statearr_15611_15672[(1)] = (8));

} else {
var statearr_15612_15673 = state_15594__$1;
(statearr_15612_15673[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (14))){
var inst_15572 = (state_15594[(8)]);
var inst_15574 = (state_15594[(11)]);
var inst_15572__$1 = (state_15594[(2)]);
var inst_15573 = (inst_15572__$1 == null);
var inst_15574__$1 = cljs.core.not.call(null,inst_15573);
var state_15594__$1 = (function (){var statearr_15613 = state_15594;
(statearr_15613[(8)] = inst_15572__$1);

(statearr_15613[(11)] = inst_15574__$1);

return statearr_15613;
})();
if(inst_15574__$1){
var statearr_15614_15674 = state_15594__$1;
(statearr_15614_15674[(1)] = (15));

} else {
var statearr_15615_15675 = state_15594__$1;
(statearr_15615_15675[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (16))){
var inst_15574 = (state_15594[(11)]);
var state_15594__$1 = state_15594;
var statearr_15616_15676 = state_15594__$1;
(statearr_15616_15676[(2)] = inst_15574);

(statearr_15616_15676[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (10))){
var inst_15566 = (state_15594[(2)]);
var state_15594__$1 = state_15594;
var statearr_15617_15677 = state_15594__$1;
(statearr_15617_15677[(2)] = inst_15566);

(statearr_15617_15677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (18))){
var inst_15577 = (state_15594[(2)]);
var state_15594__$1 = state_15594;
var statearr_15618_15678 = state_15594__$1;
(statearr_15618_15678[(2)] = inst_15577);

(statearr_15618_15678[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15595 === (8))){
var inst_15563 = cljs.core.async.close_BANG_.call(null,to);
var state_15594__$1 = state_15594;
var statearr_15619_15679 = state_15594__$1;
(statearr_15619_15679[(2)] = inst_15563);

(statearr_15619_15679[(1)] = (10));


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
});})(c__15288__auto__,jobs,results,process,async))
;
return ((function (switch__15198__auto__,c__15288__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15199__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15199__auto____0 = (function (){
var statearr_15620 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15620[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15199__auto__);

(statearr_15620[(1)] = (1));

return statearr_15620;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15199__auto____1 = (function (state_15594){
while(true){
var ret_value__15200__auto__ = (function (){try{while(true){
var result__15201__auto__ = switch__15198__auto__.call(null,state_15594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15201__auto__;
}
break;
}
}catch (e15621){if((e15621 instanceof Object)){
var ex__15202__auto__ = e15621;
var statearr_15622_15680 = state_15594;
(statearr_15622_15680[(5)] = ex__15202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15681 = state_15594;
state_15594 = G__15681;
continue;
} else {
return ret_value__15200__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15199__auto__ = function(state_15594){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15199__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15199__auto____1.call(this,state_15594);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15199__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15199__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15199__auto__;
})()
;})(switch__15198__auto__,c__15288__auto__,jobs,results,process,async))
})();
var state__15290__auto__ = (function (){var statearr_15623 = f__15289__auto__.call(null);
(statearr_15623[(6)] = c__15288__auto__);

return statearr_15623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15290__auto__);
});})(c__15288__auto__,jobs,results,process,async))
);

return c__15288__auto__;
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
var G__15683 = arguments.length;
switch (G__15683) {
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
var G__15686 = arguments.length;
switch (G__15686) {
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
var G__15689 = arguments.length;
switch (G__15689) {
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
var c__15288__auto___15738 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15288__auto___15738,tc,fc){
return (function (){
var f__15289__auto__ = (function (){var switch__15198__auto__ = ((function (c__15288__auto___15738,tc,fc){
return (function (state_15715){
var state_val_15716 = (state_15715[(1)]);
if((state_val_15716 === (7))){
var inst_15711 = (state_15715[(2)]);
var state_15715__$1 = state_15715;
var statearr_15717_15739 = state_15715__$1;
(statearr_15717_15739[(2)] = inst_15711);

(statearr_15717_15739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15716 === (1))){
var state_15715__$1 = state_15715;
var statearr_15718_15740 = state_15715__$1;
(statearr_15718_15740[(2)] = null);

(statearr_15718_15740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15716 === (4))){
var inst_15692 = (state_15715[(7)]);
var inst_15692__$1 = (state_15715[(2)]);
var inst_15693 = (inst_15692__$1 == null);
var state_15715__$1 = (function (){var statearr_15719 = state_15715;
(statearr_15719[(7)] = inst_15692__$1);

return statearr_15719;
})();
if(cljs.core.truth_(inst_15693)){
var statearr_15720_15741 = state_15715__$1;
(statearr_15720_15741[(1)] = (5));

} else {
var statearr_15721_15742 = state_15715__$1;
(statearr_15721_15742[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15716 === (13))){
var state_15715__$1 = state_15715;
var statearr_15722_15743 = state_15715__$1;
(statearr_15722_15743[(2)] = null);

(statearr_15722_15743[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15716 === (6))){
var inst_15692 = (state_15715[(7)]);
var inst_15698 = p.call(null,inst_15692);
var state_15715__$1 = state_15715;
if(cljs.core.truth_(inst_15698)){
var statearr_15723_15744 = state_15715__$1;
(statearr_15723_15744[(1)] = (9));

} else {
var statearr_15724_15745 = state_15715__$1;
(statearr_15724_15745[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15716 === (3))){
var inst_15713 = (state_15715[(2)]);
var state_15715__$1 = state_15715;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15715__$1,inst_15713);
} else {
if((state_val_15716 === (12))){
var state_15715__$1 = state_15715;
var statearr_15725_15746 = state_15715__$1;
(statearr_15725_15746[(2)] = null);

(statearr_15725_15746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15716 === (2))){
var state_15715__$1 = state_15715;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15715__$1,(4),ch);
} else {
if((state_val_15716 === (11))){
var inst_15692 = (state_15715[(7)]);
var inst_15702 = (state_15715[(2)]);
var state_15715__$1 = state_15715;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15715__$1,(8),inst_15702,inst_15692);
} else {
if((state_val_15716 === (9))){
var state_15715__$1 = state_15715;
var statearr_15726_15747 = state_15715__$1;
(statearr_15726_15747[(2)] = tc);

(statearr_15726_15747[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15716 === (5))){
var inst_15695 = cljs.core.async.close_BANG_.call(null,tc);
var inst_15696 = cljs.core.async.close_BANG_.call(null,fc);
var state_15715__$1 = (function (){var statearr_15727 = state_15715;
(statearr_15727[(8)] = inst_15695);

return statearr_15727;
})();
var statearr_15728_15748 = state_15715__$1;
(statearr_15728_15748[(2)] = inst_15696);

(statearr_15728_15748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15716 === (14))){
var inst_15709 = (state_15715[(2)]);
var state_15715__$1 = state_15715;
var statearr_15729_15749 = state_15715__$1;
(statearr_15729_15749[(2)] = inst_15709);

(statearr_15729_15749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15716 === (10))){
var state_15715__$1 = state_15715;
var statearr_15730_15750 = state_15715__$1;
(statearr_15730_15750[(2)] = fc);

(statearr_15730_15750[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15716 === (8))){
var inst_15704 = (state_15715[(2)]);
var state_15715__$1 = state_15715;
if(cljs.core.truth_(inst_15704)){
var statearr_15731_15751 = state_15715__$1;
(statearr_15731_15751[(1)] = (12));

} else {
var statearr_15732_15752 = state_15715__$1;
(statearr_15732_15752[(1)] = (13));

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
});})(c__15288__auto___15738,tc,fc))
;
return ((function (switch__15198__auto__,c__15288__auto___15738,tc,fc){
return (function() {
var cljs$core$async$state_machine__15199__auto__ = null;
var cljs$core$async$state_machine__15199__auto____0 = (function (){
var statearr_15733 = [null,null,null,null,null,null,null,null,null];
(statearr_15733[(0)] = cljs$core$async$state_machine__15199__auto__);

(statearr_15733[(1)] = (1));

return statearr_15733;
});
var cljs$core$async$state_machine__15199__auto____1 = (function (state_15715){
while(true){
var ret_value__15200__auto__ = (function (){try{while(true){
var result__15201__auto__ = switch__15198__auto__.call(null,state_15715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15201__auto__;
}
break;
}
}catch (e15734){if((e15734 instanceof Object)){
var ex__15202__auto__ = e15734;
var statearr_15735_15753 = state_15715;
(statearr_15735_15753[(5)] = ex__15202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15754 = state_15715;
state_15715 = G__15754;
continue;
} else {
return ret_value__15200__auto__;
}
break;
}
});
cljs$core$async$state_machine__15199__auto__ = function(state_15715){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15199__auto____1.call(this,state_15715);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15199__auto____0;
cljs$core$async$state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15199__auto____1;
return cljs$core$async$state_machine__15199__auto__;
})()
;})(switch__15198__auto__,c__15288__auto___15738,tc,fc))
})();
var state__15290__auto__ = (function (){var statearr_15736 = f__15289__auto__.call(null);
(statearr_15736[(6)] = c__15288__auto___15738);

return statearr_15736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15290__auto__);
});})(c__15288__auto___15738,tc,fc))
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
var c__15288__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15288__auto__){
return (function (){
var f__15289__auto__ = (function (){var switch__15198__auto__ = ((function (c__15288__auto__){
return (function (state_15775){
var state_val_15776 = (state_15775[(1)]);
if((state_val_15776 === (7))){
var inst_15771 = (state_15775[(2)]);
var state_15775__$1 = state_15775;
var statearr_15777_15795 = state_15775__$1;
(statearr_15777_15795[(2)] = inst_15771);

(statearr_15777_15795[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15776 === (1))){
var inst_15755 = init;
var state_15775__$1 = (function (){var statearr_15778 = state_15775;
(statearr_15778[(7)] = inst_15755);

return statearr_15778;
})();
var statearr_15779_15796 = state_15775__$1;
(statearr_15779_15796[(2)] = null);

(statearr_15779_15796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15776 === (4))){
var inst_15758 = (state_15775[(8)]);
var inst_15758__$1 = (state_15775[(2)]);
var inst_15759 = (inst_15758__$1 == null);
var state_15775__$1 = (function (){var statearr_15780 = state_15775;
(statearr_15780[(8)] = inst_15758__$1);

return statearr_15780;
})();
if(cljs.core.truth_(inst_15759)){
var statearr_15781_15797 = state_15775__$1;
(statearr_15781_15797[(1)] = (5));

} else {
var statearr_15782_15798 = state_15775__$1;
(statearr_15782_15798[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15776 === (6))){
var inst_15762 = (state_15775[(9)]);
var inst_15758 = (state_15775[(8)]);
var inst_15755 = (state_15775[(7)]);
var inst_15762__$1 = f.call(null,inst_15755,inst_15758);
var inst_15763 = cljs.core.reduced_QMARK_.call(null,inst_15762__$1);
var state_15775__$1 = (function (){var statearr_15783 = state_15775;
(statearr_15783[(9)] = inst_15762__$1);

return statearr_15783;
})();
if(inst_15763){
var statearr_15784_15799 = state_15775__$1;
(statearr_15784_15799[(1)] = (8));

} else {
var statearr_15785_15800 = state_15775__$1;
(statearr_15785_15800[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15776 === (3))){
var inst_15773 = (state_15775[(2)]);
var state_15775__$1 = state_15775;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15775__$1,inst_15773);
} else {
if((state_val_15776 === (2))){
var state_15775__$1 = state_15775;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15775__$1,(4),ch);
} else {
if((state_val_15776 === (9))){
var inst_15762 = (state_15775[(9)]);
var inst_15755 = inst_15762;
var state_15775__$1 = (function (){var statearr_15786 = state_15775;
(statearr_15786[(7)] = inst_15755);

return statearr_15786;
})();
var statearr_15787_15801 = state_15775__$1;
(statearr_15787_15801[(2)] = null);

(statearr_15787_15801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15776 === (5))){
var inst_15755 = (state_15775[(7)]);
var state_15775__$1 = state_15775;
var statearr_15788_15802 = state_15775__$1;
(statearr_15788_15802[(2)] = inst_15755);

(statearr_15788_15802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15776 === (10))){
var inst_15769 = (state_15775[(2)]);
var state_15775__$1 = state_15775;
var statearr_15789_15803 = state_15775__$1;
(statearr_15789_15803[(2)] = inst_15769);

(statearr_15789_15803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15776 === (8))){
var inst_15762 = (state_15775[(9)]);
var inst_15765 = cljs.core.deref.call(null,inst_15762);
var state_15775__$1 = state_15775;
var statearr_15790_15804 = state_15775__$1;
(statearr_15790_15804[(2)] = inst_15765);

(statearr_15790_15804[(1)] = (10));


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
});})(c__15288__auto__))
;
return ((function (switch__15198__auto__,c__15288__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15199__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15199__auto____0 = (function (){
var statearr_15791 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15791[(0)] = cljs$core$async$reduce_$_state_machine__15199__auto__);

(statearr_15791[(1)] = (1));

return statearr_15791;
});
var cljs$core$async$reduce_$_state_machine__15199__auto____1 = (function (state_15775){
while(true){
var ret_value__15200__auto__ = (function (){try{while(true){
var result__15201__auto__ = switch__15198__auto__.call(null,state_15775);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15201__auto__;
}
break;
}
}catch (e15792){if((e15792 instanceof Object)){
var ex__15202__auto__ = e15792;
var statearr_15793_15805 = state_15775;
(statearr_15793_15805[(5)] = ex__15202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15775);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15792;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15806 = state_15775;
state_15775 = G__15806;
continue;
} else {
return ret_value__15200__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15199__auto__ = function(state_15775){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15199__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15199__auto____1.call(this,state_15775);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15199__auto____0;
cljs$core$async$reduce_$_state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15199__auto____1;
return cljs$core$async$reduce_$_state_machine__15199__auto__;
})()
;})(switch__15198__auto__,c__15288__auto__))
})();
var state__15290__auto__ = (function (){var statearr_15794 = f__15289__auto__.call(null);
(statearr_15794[(6)] = c__15288__auto__);

return statearr_15794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15290__auto__);
});})(c__15288__auto__))
);

return c__15288__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__15288__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15288__auto__,f__$1){
return (function (){
var f__15289__auto__ = (function (){var switch__15198__auto__ = ((function (c__15288__auto__,f__$1){
return (function (state_15812){
var state_val_15813 = (state_15812[(1)]);
if((state_val_15813 === (1))){
var inst_15807 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_15812__$1 = state_15812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15812__$1,(2),inst_15807);
} else {
if((state_val_15813 === (2))){
var inst_15809 = (state_15812[(2)]);
var inst_15810 = f__$1.call(null,inst_15809);
var state_15812__$1 = state_15812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15812__$1,inst_15810);
} else {
return null;
}
}
});})(c__15288__auto__,f__$1))
;
return ((function (switch__15198__auto__,c__15288__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__15199__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15199__auto____0 = (function (){
var statearr_15814 = [null,null,null,null,null,null,null];
(statearr_15814[(0)] = cljs$core$async$transduce_$_state_machine__15199__auto__);

(statearr_15814[(1)] = (1));

return statearr_15814;
});
var cljs$core$async$transduce_$_state_machine__15199__auto____1 = (function (state_15812){
while(true){
var ret_value__15200__auto__ = (function (){try{while(true){
var result__15201__auto__ = switch__15198__auto__.call(null,state_15812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15201__auto__;
}
break;
}
}catch (e15815){if((e15815 instanceof Object)){
var ex__15202__auto__ = e15815;
var statearr_15816_15818 = state_15812;
(statearr_15816_15818[(5)] = ex__15202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15819 = state_15812;
state_15812 = G__15819;
continue;
} else {
return ret_value__15200__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15199__auto__ = function(state_15812){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15199__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15199__auto____1.call(this,state_15812);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15199__auto____0;
cljs$core$async$transduce_$_state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15199__auto____1;
return cljs$core$async$transduce_$_state_machine__15199__auto__;
})()
;})(switch__15198__auto__,c__15288__auto__,f__$1))
})();
var state__15290__auto__ = (function (){var statearr_15817 = f__15289__auto__.call(null);
(statearr_15817[(6)] = c__15288__auto__);

return statearr_15817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15290__auto__);
});})(c__15288__auto__,f__$1))
);

return c__15288__auto__;
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
var G__15821 = arguments.length;
switch (G__15821) {
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
var c__15288__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15288__auto__){
return (function (){
var f__15289__auto__ = (function (){var switch__15198__auto__ = ((function (c__15288__auto__){
return (function (state_15846){
var state_val_15847 = (state_15846[(1)]);
if((state_val_15847 === (7))){
var inst_15828 = (state_15846[(2)]);
var state_15846__$1 = state_15846;
var statearr_15848_15869 = state_15846__$1;
(statearr_15848_15869[(2)] = inst_15828);

(statearr_15848_15869[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15847 === (1))){
var inst_15822 = cljs.core.seq.call(null,coll);
var inst_15823 = inst_15822;
var state_15846__$1 = (function (){var statearr_15849 = state_15846;
(statearr_15849[(7)] = inst_15823);

return statearr_15849;
})();
var statearr_15850_15870 = state_15846__$1;
(statearr_15850_15870[(2)] = null);

(statearr_15850_15870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15847 === (4))){
var inst_15823 = (state_15846[(7)]);
var inst_15826 = cljs.core.first.call(null,inst_15823);
var state_15846__$1 = state_15846;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15846__$1,(7),ch,inst_15826);
} else {
if((state_val_15847 === (13))){
var inst_15840 = (state_15846[(2)]);
var state_15846__$1 = state_15846;
var statearr_15851_15871 = state_15846__$1;
(statearr_15851_15871[(2)] = inst_15840);

(statearr_15851_15871[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15847 === (6))){
var inst_15831 = (state_15846[(2)]);
var state_15846__$1 = state_15846;
if(cljs.core.truth_(inst_15831)){
var statearr_15852_15872 = state_15846__$1;
(statearr_15852_15872[(1)] = (8));

} else {
var statearr_15853_15873 = state_15846__$1;
(statearr_15853_15873[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15847 === (3))){
var inst_15844 = (state_15846[(2)]);
var state_15846__$1 = state_15846;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15846__$1,inst_15844);
} else {
if((state_val_15847 === (12))){
var state_15846__$1 = state_15846;
var statearr_15854_15874 = state_15846__$1;
(statearr_15854_15874[(2)] = null);

(statearr_15854_15874[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15847 === (2))){
var inst_15823 = (state_15846[(7)]);
var state_15846__$1 = state_15846;
if(cljs.core.truth_(inst_15823)){
var statearr_15855_15875 = state_15846__$1;
(statearr_15855_15875[(1)] = (4));

} else {
var statearr_15856_15876 = state_15846__$1;
(statearr_15856_15876[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15847 === (11))){
var inst_15837 = cljs.core.async.close_BANG_.call(null,ch);
var state_15846__$1 = state_15846;
var statearr_15857_15877 = state_15846__$1;
(statearr_15857_15877[(2)] = inst_15837);

(statearr_15857_15877[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15847 === (9))){
var state_15846__$1 = state_15846;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15858_15878 = state_15846__$1;
(statearr_15858_15878[(1)] = (11));

} else {
var statearr_15859_15879 = state_15846__$1;
(statearr_15859_15879[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15847 === (5))){
var inst_15823 = (state_15846[(7)]);
var state_15846__$1 = state_15846;
var statearr_15860_15880 = state_15846__$1;
(statearr_15860_15880[(2)] = inst_15823);

(statearr_15860_15880[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15847 === (10))){
var inst_15842 = (state_15846[(2)]);
var state_15846__$1 = state_15846;
var statearr_15861_15881 = state_15846__$1;
(statearr_15861_15881[(2)] = inst_15842);

(statearr_15861_15881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15847 === (8))){
var inst_15823 = (state_15846[(7)]);
var inst_15833 = cljs.core.next.call(null,inst_15823);
var inst_15823__$1 = inst_15833;
var state_15846__$1 = (function (){var statearr_15862 = state_15846;
(statearr_15862[(7)] = inst_15823__$1);

return statearr_15862;
})();
var statearr_15863_15882 = state_15846__$1;
(statearr_15863_15882[(2)] = null);

(statearr_15863_15882[(1)] = (2));


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
});})(c__15288__auto__))
;
return ((function (switch__15198__auto__,c__15288__auto__){
return (function() {
var cljs$core$async$state_machine__15199__auto__ = null;
var cljs$core$async$state_machine__15199__auto____0 = (function (){
var statearr_15864 = [null,null,null,null,null,null,null,null];
(statearr_15864[(0)] = cljs$core$async$state_machine__15199__auto__);

(statearr_15864[(1)] = (1));

return statearr_15864;
});
var cljs$core$async$state_machine__15199__auto____1 = (function (state_15846){
while(true){
var ret_value__15200__auto__ = (function (){try{while(true){
var result__15201__auto__ = switch__15198__auto__.call(null,state_15846);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15201__auto__;
}
break;
}
}catch (e15865){if((e15865 instanceof Object)){
var ex__15202__auto__ = e15865;
var statearr_15866_15883 = state_15846;
(statearr_15866_15883[(5)] = ex__15202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15884 = state_15846;
state_15846 = G__15884;
continue;
} else {
return ret_value__15200__auto__;
}
break;
}
});
cljs$core$async$state_machine__15199__auto__ = function(state_15846){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15199__auto____1.call(this,state_15846);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15199__auto____0;
cljs$core$async$state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15199__auto____1;
return cljs$core$async$state_machine__15199__auto__;
})()
;})(switch__15198__auto__,c__15288__auto__))
})();
var state__15290__auto__ = (function (){var statearr_15867 = f__15289__auto__.call(null);
(statearr_15867[(6)] = c__15288__auto__);

return statearr_15867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15290__auto__);
});})(c__15288__auto__))
);

return c__15288__auto__;
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
var x__10543__auto__ = (((_ == null))?null:_);
var m__10544__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__10543__auto__)]);
if(!((m__10544__auto__ == null))){
return m__10544__auto__.call(null,_);
} else {
var m__10544__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__10544__auto____$1 == null))){
return m__10544__auto____$1.call(null,_);
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
var x__10543__auto__ = (((m == null))?null:m);
var m__10544__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__10543__auto__)]);
if(!((m__10544__auto__ == null))){
return m__10544__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__10544__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__10544__auto____$1 == null))){
return m__10544__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__10543__auto__ = (((m == null))?null:m);
var m__10544__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__10543__auto__)]);
if(!((m__10544__auto__ == null))){
return m__10544__auto__.call(null,m,ch);
} else {
var m__10544__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__10544__auto____$1 == null))){
return m__10544__auto____$1.call(null,m,ch);
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
var x__10543__auto__ = (((m == null))?null:m);
var m__10544__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__10543__auto__)]);
if(!((m__10544__auto__ == null))){
return m__10544__auto__.call(null,m);
} else {
var m__10544__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__10544__auto____$1 == null))){
return m__10544__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async15885 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15885 = (function (ch,cs,meta15886){
this.ch = ch;
this.cs = cs;
this.meta15886 = meta15886;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15887,meta15886__$1){
var self__ = this;
var _15887__$1 = this;
return (new cljs.core.async.t_cljs$core$async15885(self__.ch,self__.cs,meta15886__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async15885.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15887){
var self__ = this;
var _15887__$1 = this;
return self__.meta15886;
});})(cs))
;

cljs.core.async.t_cljs$core$async15885.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15885.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async15885.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15885.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15885.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15885.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15885.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15886","meta15886",-471719187,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async15885.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15885.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15885";

cljs.core.async.t_cljs$core$async15885.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__10481__auto__,writer__10482__auto__,opt__10483__auto__){
return cljs.core._write.call(null,writer__10482__auto__,"cljs.core.async/t_cljs$core$async15885");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async15885 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async15885(ch__$1,cs__$1,meta15886){
return (new cljs.core.async.t_cljs$core$async15885(ch__$1,cs__$1,meta15886));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async15885(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__15288__auto___16107 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15288__auto___16107,cs,m,dchan,dctr,done){
return (function (){
var f__15289__auto__ = (function (){var switch__15198__auto__ = ((function (c__15288__auto___16107,cs,m,dchan,dctr,done){
return (function (state_16022){
var state_val_16023 = (state_16022[(1)]);
if((state_val_16023 === (7))){
var inst_16018 = (state_16022[(2)]);
var state_16022__$1 = state_16022;
var statearr_16024_16108 = state_16022__$1;
(statearr_16024_16108[(2)] = inst_16018);

(statearr_16024_16108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16023 === (20))){
var inst_15921 = (state_16022[(7)]);
var inst_15933 = cljs.core.first.call(null,inst_15921);
var inst_15934 = cljs.core.nth.call(null,inst_15933,(0),null);
var inst_15935 = cljs.core.nth.call(null,inst_15933,(1),null);
var state_16022__$1 = (function (){var statearr_16025 = state_16022;
(statearr_16025[(8)] = inst_15934);

return statearr_16025;
})();
if(cljs.core.truth_(inst_15935)){
var statearr_16026_16109 = state_16022__$1;
(statearr_16026_16109[(1)] = (22));

} else {
var statearr_16027_16110 = state_16022__$1;
(statearr_16027_16110[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16023 === (27))){
var inst_15970 = (state_16022[(9)]);
var inst_15963 = (state_16022[(10)]);
var inst_15965 = (state_16022[(11)]);
var inst_15890 = (state_16022[(12)]);
var inst_15970__$1 = cljs.core._nth.call(null,inst_15963,inst_15965);
var inst_15971 = cljs.core.async.put_BANG_.call(null,inst_15970__$1,inst_15890,done);
var state_16022__$1 = (function (){var statearr_16028 = state_16022;
(statearr_16028[(9)] = inst_15970__$1);

return statearr_16028;
})();
if(cljs.core.truth_(inst_15971)){
var statearr_16029_16111 = state_16022__$1;
(statearr_16029_16111[(1)] = (30));

} else {
var statearr_16030_16112 = state_16022__$1;
(statearr_16030_16112[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16023 === (1))){
var state_16022__$1 = state_16022;
var statearr_16031_16113 = state_16022__$1;
(statearr_16031_16113[(2)] = null);

(statearr_16031_16113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16023 === (24))){
var inst_15921 = (state_16022[(7)]);
var inst_15940 = (state_16022[(2)]);
var inst_15941 = cljs.core.next.call(null,inst_15921);
var inst_15899 = inst_15941;
var inst_15900 = null;
var inst_15901 = (0);
var inst_15902 = (0);
var state_16022__$1 = (function (){var statearr_16032 = state_16022;
(statearr_16032[(13)] = inst_15940);

(statearr_16032[(14)] = inst_15901);

(statearr_16032[(15)] = inst_15899);

(statearr_16032[(16)] = inst_15900);

(statearr_16032[(17)] = inst_15902);

return statearr_16032;
})();
var statearr_16033_16114 = state_16022__$1;
(statearr_16033_16114[(2)] = null);

(statearr_16033_16114[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16023 === (39))){
var state_16022__$1 = state_16022;
var statearr_16037_16115 = state_16022__$1;
(statearr_16037_16115[(2)] = null);

(statearr_16037_16115[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16023 === (4))){
var inst_15890 = (state_16022[(12)]);
var inst_15890__$1 = (state_16022[(2)]);
var inst_15891 = (inst_15890__$1 == null);
var state_16022__$1 = (function (){var statearr_16038 = state_16022;
(statearr_16038[(12)] = inst_15890__$1);

return statearr_16038;
})();
if(cljs.core.truth_(inst_15891)){
var statearr_16039_16116 = state_16022__$1;
(statearr_16039_16116[(1)] = (5));

} else {
var statearr_16040_16117 = state_16022__$1;
(statearr_16040_16117[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16023 === (15))){
var inst_15901 = (state_16022[(14)]);
var inst_15899 = (state_16022[(15)]);
var inst_15900 = (state_16022[(16)]);
var inst_15902 = (state_16022[(17)]);
var inst_15917 = (state_16022[(2)]);
var inst_15918 = (inst_15902 + (1));
var tmp16034 = inst_15901;
var tmp16035 = inst_15899;
var tmp16036 = inst_15900;
var inst_15899__$1 = tmp16035;
var inst_15900__$1 = tmp16036;
var inst_15901__$1 = tmp16034;
var inst_15902__$1 = inst_15918;
var state_16022__$1 = (function (){var statearr_16041 = state_16022;
(statearr_16041[(18)] = inst_15917);

(statearr_16041[(14)] = inst_15901__$1);

(statearr_16041[(15)] = inst_15899__$1);

(statearr_16041[(16)] = inst_15900__$1);

(statearr_16041[(17)] = inst_15902__$1);

return statearr_16041;
})();
var statearr_16042_16118 = state_16022__$1;
(statearr_16042_16118[(2)] = null);

(statearr_16042_16118[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16023 === (21))){
var inst_15944 = (state_16022[(2)]);
var state_16022__$1 = state_16022;
var statearr_16046_16119 = state_16022__$1;
(statearr_16046_16119[(2)] = inst_15944);

(statearr_16046_16119[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16023 === (31))){
var inst_15970 = (state_16022[(9)]);
var inst_15974 = done.call(null,null);
var inst_15975 = cljs.core.async.untap_STAR_.call(null,m,inst_15970);
var state_16022__$1 = (function (){var statearr_16047 = state_16022;
(statearr_16047[(19)] = inst_15974);

return statearr_16047;
})();
var statearr_16048_16120 = state_16022__$1;
(statearr_16048_16120[(2)] = inst_15975);

(statearr_16048_16120[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16023 === (32))){
var inst_15963 = (state_16022[(10)]);
var inst_15962 = (state_16022[(20)]);
var inst_15964 = (state_16022[(21)]);
var inst_15965 = (state_16022[(11)]);
var inst_15977 = (state_16022[(2)]);
var inst_15978 = (inst_15965 + (1));
var tmp16043 = inst_15963;
var tmp16044 = inst_15962;
var tmp16045 = inst_15964;
var inst_15962__$1 = tmp16044;
var inst_15963__$1 = tmp16043;
var inst_15964__$1 = tmp16045;
var inst_15965__$1 = inst_15978;
var state_16022__$1 = (function (){var statearr_16049 = state_16022;
(statearr_16049[(22)] = inst_15977);

(statearr_16049[(10)] = inst_15963__$1);

(statearr_16049[(20)] = inst_15962__$1);

(statearr_16049[(21)] = inst_15964__$1);

(statearr_16049[(11)] = inst_15965__$1);

return statearr_16049;
})();
var statearr_16050_16121 = state_16022__$1;
(statearr_16050_16121[(2)] = null);

(statearr_16050_16121[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16023 === (40))){
var inst_15990 = (state_16022[(23)]);
var inst_15994 = done.call(null,null);
var inst_15995 = cljs.core.async.untap_STAR_.call(null,m,inst_15990);
var state_16022__$1 = (function (){var statearr_16051 = state_16022;
(statearr_16051[(24)] = inst_15994);

return statearr_16051;
})();
var statearr_16052_16122 = state_16022__$1;
(statearr_16052_16122[(2)] = inst_15995);

(statearr_16052_16122[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16023 === (33))){
var inst_15981 = (state_16022[(25)]);
var inst_15983 = cljs.core.chunked_seq_QMARK_.call(null,inst_15981);
var state_16022__$1 = state_16022;
if(inst_15983){
var statearr_16053_16123 = state_16022__$1;
(statearr_16053_16123[(1)] = (36));

} else {
var statearr_16054_16124 = state_16022__$1;
(statearr_16054_16124[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16023 === (13))){
var inst_15911 = (state_16022[(26)]);
var inst_15914 = cljs.core.async.close_BANG_.call(null,inst_15911);
var state_16022__$1 = state_16022;
var statearr_16055_16125 = state_16022__$1;
(statearr_16055_16125[(2)] = inst_15914);

(statearr_16055_16125[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16023 === (22))){
var inst_15934 = (state_16022[(8)]);
var inst_15937 = cljs.core.async.close_BANG_.call(null,inst_15934);
var state_16022__$1 = state_16022;
var statearr_16056_16126 = state_16022__$1;
(statearr_16056_16126[(2)] = inst_15937);

(statearr_16056_16126[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16023 === (36))){
var inst_15981 = (state_16022[(25)]);
var inst_15985 = cljs.core.chunk_first.call(null,inst_15981);
var inst_15986 = cljs.core.chunk_rest.call(null,inst_15981);
var inst_15987 = cljs.core.count.call(null,inst_15985);
var inst_15962 = inst_15986;
var inst_15963 = inst_15985;
var inst_15964 = inst_15987;
var inst_15965 = (0);
var state_16022__$1 = (function (){var statearr_16057 = state_16022;
(statearr_16057[(10)] = inst_15963);

(statearr_16057[(20)] = inst_15962);

(statearr_16057[(21)] = inst_15964);

(statearr_16057[(11)] = inst_15965);

return statearr_16057;
})();
var statearr_16058_16127 = state_16022__$1;
(statearr_16058_16127[(2)] = null);

(statearr_16058_16127[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16023 === (41))){
var inst_15981 = (state_16022[(25)]);
var inst_15997 = (state_16022[(2)]);
var inst_15998 = cljs.core.next.call(null,inst_15981);
var inst_15962 = inst_15998;
var inst_15963 = null;
var inst_15964 = (0);
var inst_15965 = (0);
var state_16022__$1 = (function (){var statearr_16059 = state_16022;
(statearr_16059[(10)] = inst_15963);

(statearr_16059[(20)] = inst_15962);

(statearr_16059[(21)] = inst_15964);

(statearr_16059[(11)] = inst_15965);

(statearr_16059[(27)] = inst_15997);

return statearr_16059;
})();
var statearr_16060_16128 = state_16022__$1;
(statearr_16060_16128[(2)] = null);

(statearr_16060_16128[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16023 === (43))){
var state_16022__$1 = state_16022;
var statearr_16061_16129 = state_16022__$1;
(statearr_16061_16129[(2)] = null);

(statearr_16061_16129[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16023 === (29))){
var inst_16006 = (state_16022[(2)]);
var state_16022__$1 = state_16022;
var statearr_16062_16130 = state_16022__$1;
(statearr_16062_16130[(2)] = inst_16006);

(statearr_16062_16130[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16023 === (44))){
var inst_16015 = (state_16022[(2)]);
var state_16022__$1 = (function (){var statearr_16063 = state_16022;
(statearr_16063[(28)] = inst_16015);

return statearr_16063;
})();
var statearr_16064_16131 = state_16022__$1;
(statearr_16064_16131[(2)] = null);

(statearr_16064_16131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16023 === (6))){
var inst_15954 = (state_16022[(29)]);
var inst_15953 = cljs.core.deref.call(null,cs);
var inst_15954__$1 = cljs.core.keys.call(null,inst_15953);
var inst_15955 = cljs.core.count.call(null,inst_15954__$1);
var inst_15956 = cljs.core.reset_BANG_.call(null,dctr,inst_15955);
var inst_15961 = cljs.core.seq.call(null,inst_15954__$1);
var inst_15962 = inst_15961;
var inst_15963 = null;
var inst_15964 = (0);
var inst_15965 = (0);
var state_16022__$1 = (function (){var statearr_16065 = state_16022;
(statearr_16065[(29)] = inst_15954__$1);

(statearr_16065[(10)] = inst_15963);

(statearr_16065[(20)] = inst_15962);

(statearr_16065[(21)] = inst_15964);

(statearr_16065[(11)] = inst_15965);

(statearr_16065[(30)] = inst_15956);

return statearr_16065;
})();
var statearr_16066_16132 = state_16022__$1;
(statearr_16066_16132[(2)] = null);

(statearr_16066_16132[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16023 === (28))){
var inst_15981 = (state_16022[(25)]);
var inst_15962 = (state_16022[(20)]);
var inst_15981__$1 = cljs.core.seq.call(null,inst_15962);
var state_16022__$1 = (function (){var statearr_16067 = state_16022;
(statearr_16067[(25)] = inst_15981__$1);

return statearr_16067;
})();
if(inst_15981__$1){
var statearr_16068_16133 = state_16022__$1;
(statearr_16068_16133[(1)] = (33));

} else {
var statearr_16069_16134 = state_16022__$1;
(statearr_16069_16134[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16023 === (25))){
var inst_15964 = (state_16022[(21)]);
var inst_15965 = (state_16022[(11)]);
var inst_15967 = (inst_15965 < inst_15964);
var inst_15968 = inst_15967;
var state_16022__$1 = state_16022;
if(cljs.core.truth_(inst_15968)){
var statearr_16070_16135 = state_16022__$1;
(statearr_16070_16135[(1)] = (27));

} else {
var statearr_16071_16136 = state_16022__$1;
(statearr_16071_16136[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16023 === (34))){
var state_16022__$1 = state_16022;
var statearr_16072_16137 = state_16022__$1;
(statearr_16072_16137[(2)] = null);

(statearr_16072_16137[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16023 === (17))){
var state_16022__$1 = state_16022;
var statearr_16073_16138 = state_16022__$1;
(statearr_16073_16138[(2)] = null);

(statearr_16073_16138[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16023 === (3))){
var inst_16020 = (state_16022[(2)]);
var state_16022__$1 = state_16022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16022__$1,inst_16020);
} else {
if((state_val_16023 === (12))){
var inst_15949 = (state_16022[(2)]);
var state_16022__$1 = state_16022;
var statearr_16074_16139 = state_16022__$1;
(statearr_16074_16139[(2)] = inst_15949);

(statearr_16074_16139[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16023 === (2))){
var state_16022__$1 = state_16022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16022__$1,(4),ch);
} else {
if((state_val_16023 === (23))){
var state_16022__$1 = state_16022;
var statearr_16075_16140 = state_16022__$1;
(statearr_16075_16140[(2)] = null);

(statearr_16075_16140[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16023 === (35))){
var inst_16004 = (state_16022[(2)]);
var state_16022__$1 = state_16022;
var statearr_16076_16141 = state_16022__$1;
(statearr_16076_16141[(2)] = inst_16004);

(statearr_16076_16141[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16023 === (19))){
var inst_15921 = (state_16022[(7)]);
var inst_15925 = cljs.core.chunk_first.call(null,inst_15921);
var inst_15926 = cljs.core.chunk_rest.call(null,inst_15921);
var inst_15927 = cljs.core.count.call(null,inst_15925);
var inst_15899 = inst_15926;
var inst_15900 = inst_15925;
var inst_15901 = inst_15927;
var inst_15902 = (0);
var state_16022__$1 = (function (){var statearr_16077 = state_16022;
(statearr_16077[(14)] = inst_15901);

(statearr_16077[(15)] = inst_15899);

(statearr_16077[(16)] = inst_15900);

(statearr_16077[(17)] = inst_15902);

return statearr_16077;
})();
var statearr_16078_16142 = state_16022__$1;
(statearr_16078_16142[(2)] = null);

(statearr_16078_16142[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16023 === (11))){
var inst_15921 = (state_16022[(7)]);
var inst_15899 = (state_16022[(15)]);
var inst_15921__$1 = cljs.core.seq.call(null,inst_15899);
var state_16022__$1 = (function (){var statearr_16079 = state_16022;
(statearr_16079[(7)] = inst_15921__$1);

return statearr_16079;
})();
if(inst_15921__$1){
var statearr_16080_16143 = state_16022__$1;
(statearr_16080_16143[(1)] = (16));

} else {
var statearr_16081_16144 = state_16022__$1;
(statearr_16081_16144[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16023 === (9))){
var inst_15951 = (state_16022[(2)]);
var state_16022__$1 = state_16022;
var statearr_16082_16145 = state_16022__$1;
(statearr_16082_16145[(2)] = inst_15951);

(statearr_16082_16145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16023 === (5))){
var inst_15897 = cljs.core.deref.call(null,cs);
var inst_15898 = cljs.core.seq.call(null,inst_15897);
var inst_15899 = inst_15898;
var inst_15900 = null;
var inst_15901 = (0);
var inst_15902 = (0);
var state_16022__$1 = (function (){var statearr_16083 = state_16022;
(statearr_16083[(14)] = inst_15901);

(statearr_16083[(15)] = inst_15899);

(statearr_16083[(16)] = inst_15900);

(statearr_16083[(17)] = inst_15902);

return statearr_16083;
})();
var statearr_16084_16146 = state_16022__$1;
(statearr_16084_16146[(2)] = null);

(statearr_16084_16146[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16023 === (14))){
var state_16022__$1 = state_16022;
var statearr_16085_16147 = state_16022__$1;
(statearr_16085_16147[(2)] = null);

(statearr_16085_16147[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16023 === (45))){
var inst_16012 = (state_16022[(2)]);
var state_16022__$1 = state_16022;
var statearr_16086_16148 = state_16022__$1;
(statearr_16086_16148[(2)] = inst_16012);

(statearr_16086_16148[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16023 === (26))){
var inst_15954 = (state_16022[(29)]);
var inst_16008 = (state_16022[(2)]);
var inst_16009 = cljs.core.seq.call(null,inst_15954);
var state_16022__$1 = (function (){var statearr_16087 = state_16022;
(statearr_16087[(31)] = inst_16008);

return statearr_16087;
})();
if(inst_16009){
var statearr_16088_16149 = state_16022__$1;
(statearr_16088_16149[(1)] = (42));

} else {
var statearr_16089_16150 = state_16022__$1;
(statearr_16089_16150[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16023 === (16))){
var inst_15921 = (state_16022[(7)]);
var inst_15923 = cljs.core.chunked_seq_QMARK_.call(null,inst_15921);
var state_16022__$1 = state_16022;
if(inst_15923){
var statearr_16090_16151 = state_16022__$1;
(statearr_16090_16151[(1)] = (19));

} else {
var statearr_16091_16152 = state_16022__$1;
(statearr_16091_16152[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16023 === (38))){
var inst_16001 = (state_16022[(2)]);
var state_16022__$1 = state_16022;
var statearr_16092_16153 = state_16022__$1;
(statearr_16092_16153[(2)] = inst_16001);

(statearr_16092_16153[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16023 === (30))){
var state_16022__$1 = state_16022;
var statearr_16093_16154 = state_16022__$1;
(statearr_16093_16154[(2)] = null);

(statearr_16093_16154[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16023 === (10))){
var inst_15900 = (state_16022[(16)]);
var inst_15902 = (state_16022[(17)]);
var inst_15910 = cljs.core._nth.call(null,inst_15900,inst_15902);
var inst_15911 = cljs.core.nth.call(null,inst_15910,(0),null);
var inst_15912 = cljs.core.nth.call(null,inst_15910,(1),null);
var state_16022__$1 = (function (){var statearr_16094 = state_16022;
(statearr_16094[(26)] = inst_15911);

return statearr_16094;
})();
if(cljs.core.truth_(inst_15912)){
var statearr_16095_16155 = state_16022__$1;
(statearr_16095_16155[(1)] = (13));

} else {
var statearr_16096_16156 = state_16022__$1;
(statearr_16096_16156[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16023 === (18))){
var inst_15947 = (state_16022[(2)]);
var state_16022__$1 = state_16022;
var statearr_16097_16157 = state_16022__$1;
(statearr_16097_16157[(2)] = inst_15947);

(statearr_16097_16157[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16023 === (42))){
var state_16022__$1 = state_16022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16022__$1,(45),dchan);
} else {
if((state_val_16023 === (37))){
var inst_15990 = (state_16022[(23)]);
var inst_15981 = (state_16022[(25)]);
var inst_15890 = (state_16022[(12)]);
var inst_15990__$1 = cljs.core.first.call(null,inst_15981);
var inst_15991 = cljs.core.async.put_BANG_.call(null,inst_15990__$1,inst_15890,done);
var state_16022__$1 = (function (){var statearr_16098 = state_16022;
(statearr_16098[(23)] = inst_15990__$1);

return statearr_16098;
})();
if(cljs.core.truth_(inst_15991)){
var statearr_16099_16158 = state_16022__$1;
(statearr_16099_16158[(1)] = (39));

} else {
var statearr_16100_16159 = state_16022__$1;
(statearr_16100_16159[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16023 === (8))){
var inst_15901 = (state_16022[(14)]);
var inst_15902 = (state_16022[(17)]);
var inst_15904 = (inst_15902 < inst_15901);
var inst_15905 = inst_15904;
var state_16022__$1 = state_16022;
if(cljs.core.truth_(inst_15905)){
var statearr_16101_16160 = state_16022__$1;
(statearr_16101_16160[(1)] = (10));

} else {
var statearr_16102_16161 = state_16022__$1;
(statearr_16102_16161[(1)] = (11));

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
});})(c__15288__auto___16107,cs,m,dchan,dctr,done))
;
return ((function (switch__15198__auto__,c__15288__auto___16107,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15199__auto__ = null;
var cljs$core$async$mult_$_state_machine__15199__auto____0 = (function (){
var statearr_16103 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16103[(0)] = cljs$core$async$mult_$_state_machine__15199__auto__);

(statearr_16103[(1)] = (1));

return statearr_16103;
});
var cljs$core$async$mult_$_state_machine__15199__auto____1 = (function (state_16022){
while(true){
var ret_value__15200__auto__ = (function (){try{while(true){
var result__15201__auto__ = switch__15198__auto__.call(null,state_16022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15201__auto__;
}
break;
}
}catch (e16104){if((e16104 instanceof Object)){
var ex__15202__auto__ = e16104;
var statearr_16105_16162 = state_16022;
(statearr_16105_16162[(5)] = ex__15202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16163 = state_16022;
state_16022 = G__16163;
continue;
} else {
return ret_value__15200__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15199__auto__ = function(state_16022){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15199__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15199__auto____1.call(this,state_16022);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15199__auto____0;
cljs$core$async$mult_$_state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15199__auto____1;
return cljs$core$async$mult_$_state_machine__15199__auto__;
})()
;})(switch__15198__auto__,c__15288__auto___16107,cs,m,dchan,dctr,done))
})();
var state__15290__auto__ = (function (){var statearr_16106 = f__15289__auto__.call(null);
(statearr_16106[(6)] = c__15288__auto___16107);

return statearr_16106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15290__auto__);
});})(c__15288__auto___16107,cs,m,dchan,dctr,done))
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
var G__16165 = arguments.length;
switch (G__16165) {
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
var x__10543__auto__ = (((m == null))?null:m);
var m__10544__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__10543__auto__)]);
if(!((m__10544__auto__ == null))){
return m__10544__auto__.call(null,m,ch);
} else {
var m__10544__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__10544__auto____$1 == null))){
return m__10544__auto____$1.call(null,m,ch);
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
var x__10543__auto__ = (((m == null))?null:m);
var m__10544__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__10543__auto__)]);
if(!((m__10544__auto__ == null))){
return m__10544__auto__.call(null,m,ch);
} else {
var m__10544__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__10544__auto____$1 == null))){
return m__10544__auto____$1.call(null,m,ch);
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
var x__10543__auto__ = (((m == null))?null:m);
var m__10544__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__10543__auto__)]);
if(!((m__10544__auto__ == null))){
return m__10544__auto__.call(null,m);
} else {
var m__10544__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__10544__auto____$1 == null))){
return m__10544__auto____$1.call(null,m);
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
var x__10543__auto__ = (((m == null))?null:m);
var m__10544__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__10543__auto__)]);
if(!((m__10544__auto__ == null))){
return m__10544__auto__.call(null,m,state_map);
} else {
var m__10544__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__10544__auto____$1 == null))){
return m__10544__auto____$1.call(null,m,state_map);
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
var x__10543__auto__ = (((m == null))?null:m);
var m__10544__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__10543__auto__)]);
if(!((m__10544__auto__ == null))){
return m__10544__auto__.call(null,m,mode);
} else {
var m__10544__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__10544__auto____$1 == null))){
return m__10544__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__11094__auto__ = [];
var len__11087__auto___16177 = arguments.length;
var i__11088__auto___16178 = (0);
while(true){
if((i__11088__auto___16178 < len__11087__auto___16177)){
args__11094__auto__.push((arguments[i__11088__auto___16178]));

var G__16179 = (i__11088__auto___16178 + (1));
i__11088__auto___16178 = G__16179;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((3) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11095__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16171){
var map__16172 = p__16171;
var map__16172__$1 = ((((!((map__16172 == null)))?((((map__16172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16172.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16172):map__16172);
var opts = map__16172__$1;
var statearr_16174_16180 = state;
(statearr_16174_16180[(1)] = cont_block);


var temp__6738__auto__ = cljs.core.async.do_alts.call(null,((function (map__16172,map__16172__$1,opts){
return (function (val){
var statearr_16175_16181 = state;
(statearr_16175_16181[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__16172,map__16172__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6738__auto__)){
var cb = temp__6738__auto__;
var statearr_16176_16182 = state;
(statearr_16176_16182[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16167){
var G__16168 = cljs.core.first.call(null,seq16167);
var seq16167__$1 = cljs.core.next.call(null,seq16167);
var G__16169 = cljs.core.first.call(null,seq16167__$1);
var seq16167__$2 = cljs.core.next.call(null,seq16167__$1);
var G__16170 = cljs.core.first.call(null,seq16167__$2);
var seq16167__$3 = cljs.core.next.call(null,seq16167__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16168,G__16169,G__16170,seq16167__$3);
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
if(typeof cljs.core.async.t_cljs$core$async16183 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16183 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta16184){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta16184 = meta16184;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16185,meta16184__$1){
var self__ = this;
var _16185__$1 = this;
return (new cljs.core.async.t_cljs$core$async16183(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta16184__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16183.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16185){
var self__ = this;
var _16185__$1 = this;
return self__.meta16184;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16183.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16183.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16183.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16183.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16183.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16183.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16183.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16183.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async16183.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta16184","meta16184",908182454,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16183.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16183.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16183";

cljs.core.async.t_cljs$core$async16183.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__10481__auto__,writer__10482__auto__,opt__10483__auto__){
return cljs.core._write.call(null,writer__10482__auto__,"cljs.core.async/t_cljs$core$async16183");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async16183 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async16183(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta16184){
return (new cljs.core.async.t_cljs$core$async16183(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta16184));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async16183(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15288__auto___16347 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15288__auto___16347,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15289__auto__ = (function (){var switch__15198__auto__ = ((function (c__15288__auto___16347,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16287){
var state_val_16288 = (state_16287[(1)]);
if((state_val_16288 === (7))){
var inst_16202 = (state_16287[(2)]);
var state_16287__$1 = state_16287;
var statearr_16289_16348 = state_16287__$1;
(statearr_16289_16348[(2)] = inst_16202);

(statearr_16289_16348[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (20))){
var inst_16214 = (state_16287[(7)]);
var state_16287__$1 = state_16287;
var statearr_16290_16349 = state_16287__$1;
(statearr_16290_16349[(2)] = inst_16214);

(statearr_16290_16349[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (27))){
var state_16287__$1 = state_16287;
var statearr_16291_16350 = state_16287__$1;
(statearr_16291_16350[(2)] = null);

(statearr_16291_16350[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (1))){
var inst_16189 = (state_16287[(8)]);
var inst_16189__$1 = calc_state.call(null);
var inst_16191 = (inst_16189__$1 == null);
var inst_16192 = cljs.core.not.call(null,inst_16191);
var state_16287__$1 = (function (){var statearr_16292 = state_16287;
(statearr_16292[(8)] = inst_16189__$1);

return statearr_16292;
})();
if(inst_16192){
var statearr_16293_16351 = state_16287__$1;
(statearr_16293_16351[(1)] = (2));

} else {
var statearr_16294_16352 = state_16287__$1;
(statearr_16294_16352[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (24))){
var inst_16261 = (state_16287[(9)]);
var inst_16247 = (state_16287[(10)]);
var inst_16238 = (state_16287[(11)]);
var inst_16261__$1 = inst_16238.call(null,inst_16247);
var state_16287__$1 = (function (){var statearr_16295 = state_16287;
(statearr_16295[(9)] = inst_16261__$1);

return statearr_16295;
})();
if(cljs.core.truth_(inst_16261__$1)){
var statearr_16296_16353 = state_16287__$1;
(statearr_16296_16353[(1)] = (29));

} else {
var statearr_16297_16354 = state_16287__$1;
(statearr_16297_16354[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (4))){
var inst_16205 = (state_16287[(2)]);
var state_16287__$1 = state_16287;
if(cljs.core.truth_(inst_16205)){
var statearr_16298_16355 = state_16287__$1;
(statearr_16298_16355[(1)] = (8));

} else {
var statearr_16299_16356 = state_16287__$1;
(statearr_16299_16356[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (15))){
var inst_16232 = (state_16287[(2)]);
var state_16287__$1 = state_16287;
if(cljs.core.truth_(inst_16232)){
var statearr_16300_16357 = state_16287__$1;
(statearr_16300_16357[(1)] = (19));

} else {
var statearr_16301_16358 = state_16287__$1;
(statearr_16301_16358[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (21))){
var inst_16237 = (state_16287[(12)]);
var inst_16237__$1 = (state_16287[(2)]);
var inst_16238 = cljs.core.get.call(null,inst_16237__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16239 = cljs.core.get.call(null,inst_16237__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16240 = cljs.core.get.call(null,inst_16237__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16287__$1 = (function (){var statearr_16302 = state_16287;
(statearr_16302[(13)] = inst_16239);

(statearr_16302[(12)] = inst_16237__$1);

(statearr_16302[(11)] = inst_16238);

return statearr_16302;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_16287__$1,(22),inst_16240);
} else {
if((state_val_16288 === (31))){
var inst_16269 = (state_16287[(2)]);
var state_16287__$1 = state_16287;
if(cljs.core.truth_(inst_16269)){
var statearr_16303_16359 = state_16287__$1;
(statearr_16303_16359[(1)] = (32));

} else {
var statearr_16304_16360 = state_16287__$1;
(statearr_16304_16360[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (32))){
var inst_16246 = (state_16287[(14)]);
var state_16287__$1 = state_16287;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16287__$1,(35),out,inst_16246);
} else {
if((state_val_16288 === (33))){
var inst_16237 = (state_16287[(12)]);
var inst_16214 = inst_16237;
var state_16287__$1 = (function (){var statearr_16305 = state_16287;
(statearr_16305[(7)] = inst_16214);

return statearr_16305;
})();
var statearr_16306_16361 = state_16287__$1;
(statearr_16306_16361[(2)] = null);

(statearr_16306_16361[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (13))){
var inst_16214 = (state_16287[(7)]);
var inst_16221 = inst_16214.cljs$lang$protocol_mask$partition0$;
var inst_16222 = (inst_16221 & (64));
var inst_16223 = inst_16214.cljs$core$ISeq$;
var inst_16224 = (cljs.core.PROTOCOL_SENTINEL === inst_16223);
var inst_16225 = (inst_16222) || (inst_16224);
var state_16287__$1 = state_16287;
if(cljs.core.truth_(inst_16225)){
var statearr_16307_16362 = state_16287__$1;
(statearr_16307_16362[(1)] = (16));

} else {
var statearr_16308_16363 = state_16287__$1;
(statearr_16308_16363[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (22))){
var inst_16246 = (state_16287[(14)]);
var inst_16247 = (state_16287[(10)]);
var inst_16245 = (state_16287[(2)]);
var inst_16246__$1 = cljs.core.nth.call(null,inst_16245,(0),null);
var inst_16247__$1 = cljs.core.nth.call(null,inst_16245,(1),null);
var inst_16248 = (inst_16246__$1 == null);
var inst_16249 = cljs.core._EQ_.call(null,inst_16247__$1,change);
var inst_16250 = (inst_16248) || (inst_16249);
var state_16287__$1 = (function (){var statearr_16309 = state_16287;
(statearr_16309[(14)] = inst_16246__$1);

(statearr_16309[(10)] = inst_16247__$1);

return statearr_16309;
})();
if(cljs.core.truth_(inst_16250)){
var statearr_16310_16364 = state_16287__$1;
(statearr_16310_16364[(1)] = (23));

} else {
var statearr_16311_16365 = state_16287__$1;
(statearr_16311_16365[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (36))){
var inst_16237 = (state_16287[(12)]);
var inst_16214 = inst_16237;
var state_16287__$1 = (function (){var statearr_16312 = state_16287;
(statearr_16312[(7)] = inst_16214);

return statearr_16312;
})();
var statearr_16313_16366 = state_16287__$1;
(statearr_16313_16366[(2)] = null);

(statearr_16313_16366[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (29))){
var inst_16261 = (state_16287[(9)]);
var state_16287__$1 = state_16287;
var statearr_16314_16367 = state_16287__$1;
(statearr_16314_16367[(2)] = inst_16261);

(statearr_16314_16367[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (6))){
var state_16287__$1 = state_16287;
var statearr_16315_16368 = state_16287__$1;
(statearr_16315_16368[(2)] = false);

(statearr_16315_16368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (28))){
var inst_16257 = (state_16287[(2)]);
var inst_16258 = calc_state.call(null);
var inst_16214 = inst_16258;
var state_16287__$1 = (function (){var statearr_16316 = state_16287;
(statearr_16316[(15)] = inst_16257);

(statearr_16316[(7)] = inst_16214);

return statearr_16316;
})();
var statearr_16317_16369 = state_16287__$1;
(statearr_16317_16369[(2)] = null);

(statearr_16317_16369[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (25))){
var inst_16283 = (state_16287[(2)]);
var state_16287__$1 = state_16287;
var statearr_16318_16370 = state_16287__$1;
(statearr_16318_16370[(2)] = inst_16283);

(statearr_16318_16370[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (34))){
var inst_16281 = (state_16287[(2)]);
var state_16287__$1 = state_16287;
var statearr_16319_16371 = state_16287__$1;
(statearr_16319_16371[(2)] = inst_16281);

(statearr_16319_16371[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (17))){
var state_16287__$1 = state_16287;
var statearr_16320_16372 = state_16287__$1;
(statearr_16320_16372[(2)] = false);

(statearr_16320_16372[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (3))){
var state_16287__$1 = state_16287;
var statearr_16321_16373 = state_16287__$1;
(statearr_16321_16373[(2)] = false);

(statearr_16321_16373[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (12))){
var inst_16285 = (state_16287[(2)]);
var state_16287__$1 = state_16287;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16287__$1,inst_16285);
} else {
if((state_val_16288 === (2))){
var inst_16189 = (state_16287[(8)]);
var inst_16194 = inst_16189.cljs$lang$protocol_mask$partition0$;
var inst_16195 = (inst_16194 & (64));
var inst_16196 = inst_16189.cljs$core$ISeq$;
var inst_16197 = (cljs.core.PROTOCOL_SENTINEL === inst_16196);
var inst_16198 = (inst_16195) || (inst_16197);
var state_16287__$1 = state_16287;
if(cljs.core.truth_(inst_16198)){
var statearr_16322_16374 = state_16287__$1;
(statearr_16322_16374[(1)] = (5));

} else {
var statearr_16323_16375 = state_16287__$1;
(statearr_16323_16375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (23))){
var inst_16246 = (state_16287[(14)]);
var inst_16252 = (inst_16246 == null);
var state_16287__$1 = state_16287;
if(cljs.core.truth_(inst_16252)){
var statearr_16324_16376 = state_16287__$1;
(statearr_16324_16376[(1)] = (26));

} else {
var statearr_16325_16377 = state_16287__$1;
(statearr_16325_16377[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (35))){
var inst_16272 = (state_16287[(2)]);
var state_16287__$1 = state_16287;
if(cljs.core.truth_(inst_16272)){
var statearr_16326_16378 = state_16287__$1;
(statearr_16326_16378[(1)] = (36));

} else {
var statearr_16327_16379 = state_16287__$1;
(statearr_16327_16379[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (19))){
var inst_16214 = (state_16287[(7)]);
var inst_16234 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16214);
var state_16287__$1 = state_16287;
var statearr_16328_16380 = state_16287__$1;
(statearr_16328_16380[(2)] = inst_16234);

(statearr_16328_16380[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (11))){
var inst_16214 = (state_16287[(7)]);
var inst_16218 = (inst_16214 == null);
var inst_16219 = cljs.core.not.call(null,inst_16218);
var state_16287__$1 = state_16287;
if(inst_16219){
var statearr_16329_16381 = state_16287__$1;
(statearr_16329_16381[(1)] = (13));

} else {
var statearr_16330_16382 = state_16287__$1;
(statearr_16330_16382[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (9))){
var inst_16189 = (state_16287[(8)]);
var state_16287__$1 = state_16287;
var statearr_16331_16383 = state_16287__$1;
(statearr_16331_16383[(2)] = inst_16189);

(statearr_16331_16383[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (5))){
var state_16287__$1 = state_16287;
var statearr_16332_16384 = state_16287__$1;
(statearr_16332_16384[(2)] = true);

(statearr_16332_16384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (14))){
var state_16287__$1 = state_16287;
var statearr_16333_16385 = state_16287__$1;
(statearr_16333_16385[(2)] = false);

(statearr_16333_16385[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (26))){
var inst_16247 = (state_16287[(10)]);
var inst_16254 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16247);
var state_16287__$1 = state_16287;
var statearr_16334_16386 = state_16287__$1;
(statearr_16334_16386[(2)] = inst_16254);

(statearr_16334_16386[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (16))){
var state_16287__$1 = state_16287;
var statearr_16335_16387 = state_16287__$1;
(statearr_16335_16387[(2)] = true);

(statearr_16335_16387[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (38))){
var inst_16277 = (state_16287[(2)]);
var state_16287__$1 = state_16287;
var statearr_16336_16388 = state_16287__$1;
(statearr_16336_16388[(2)] = inst_16277);

(statearr_16336_16388[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (30))){
var inst_16239 = (state_16287[(13)]);
var inst_16247 = (state_16287[(10)]);
var inst_16238 = (state_16287[(11)]);
var inst_16264 = cljs.core.empty_QMARK_.call(null,inst_16238);
var inst_16265 = inst_16239.call(null,inst_16247);
var inst_16266 = cljs.core.not.call(null,inst_16265);
var inst_16267 = (inst_16264) && (inst_16266);
var state_16287__$1 = state_16287;
var statearr_16337_16389 = state_16287__$1;
(statearr_16337_16389[(2)] = inst_16267);

(statearr_16337_16389[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (10))){
var inst_16189 = (state_16287[(8)]);
var inst_16210 = (state_16287[(2)]);
var inst_16211 = cljs.core.get.call(null,inst_16210,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16212 = cljs.core.get.call(null,inst_16210,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16213 = cljs.core.get.call(null,inst_16210,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16214 = inst_16189;
var state_16287__$1 = (function (){var statearr_16338 = state_16287;
(statearr_16338[(16)] = inst_16211);

(statearr_16338[(17)] = inst_16212);

(statearr_16338[(18)] = inst_16213);

(statearr_16338[(7)] = inst_16214);

return statearr_16338;
})();
var statearr_16339_16390 = state_16287__$1;
(statearr_16339_16390[(2)] = null);

(statearr_16339_16390[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (18))){
var inst_16229 = (state_16287[(2)]);
var state_16287__$1 = state_16287;
var statearr_16340_16391 = state_16287__$1;
(statearr_16340_16391[(2)] = inst_16229);

(statearr_16340_16391[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (37))){
var state_16287__$1 = state_16287;
var statearr_16341_16392 = state_16287__$1;
(statearr_16341_16392[(2)] = null);

(statearr_16341_16392[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16288 === (8))){
var inst_16189 = (state_16287[(8)]);
var inst_16207 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16189);
var state_16287__$1 = state_16287;
var statearr_16342_16393 = state_16287__$1;
(statearr_16342_16393[(2)] = inst_16207);

(statearr_16342_16393[(1)] = (10));


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
});})(c__15288__auto___16347,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15198__auto__,c__15288__auto___16347,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15199__auto__ = null;
var cljs$core$async$mix_$_state_machine__15199__auto____0 = (function (){
var statearr_16343 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16343[(0)] = cljs$core$async$mix_$_state_machine__15199__auto__);

(statearr_16343[(1)] = (1));

return statearr_16343;
});
var cljs$core$async$mix_$_state_machine__15199__auto____1 = (function (state_16287){
while(true){
var ret_value__15200__auto__ = (function (){try{while(true){
var result__15201__auto__ = switch__15198__auto__.call(null,state_16287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15201__auto__;
}
break;
}
}catch (e16344){if((e16344 instanceof Object)){
var ex__15202__auto__ = e16344;
var statearr_16345_16394 = state_16287;
(statearr_16345_16394[(5)] = ex__15202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16344;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16395 = state_16287;
state_16287 = G__16395;
continue;
} else {
return ret_value__15200__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15199__auto__ = function(state_16287){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15199__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15199__auto____1.call(this,state_16287);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15199__auto____0;
cljs$core$async$mix_$_state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15199__auto____1;
return cljs$core$async$mix_$_state_machine__15199__auto__;
})()
;})(switch__15198__auto__,c__15288__auto___16347,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15290__auto__ = (function (){var statearr_16346 = f__15289__auto__.call(null);
(statearr_16346[(6)] = c__15288__auto___16347);

return statearr_16346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15290__auto__);
});})(c__15288__auto___16347,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__10543__auto__ = (((p == null))?null:p);
var m__10544__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__10543__auto__)]);
if(!((m__10544__auto__ == null))){
return m__10544__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__10544__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__10544__auto____$1 == null))){
return m__10544__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__10543__auto__ = (((p == null))?null:p);
var m__10544__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__10543__auto__)]);
if(!((m__10544__auto__ == null))){
return m__10544__auto__.call(null,p,v,ch);
} else {
var m__10544__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__10544__auto____$1 == null))){
return m__10544__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16397 = arguments.length;
switch (G__16397) {
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
var x__10543__auto__ = (((p == null))?null:p);
var m__10544__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__10543__auto__)]);
if(!((m__10544__auto__ == null))){
return m__10544__auto__.call(null,p);
} else {
var m__10544__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__10544__auto____$1 == null))){
return m__10544__auto____$1.call(null,p);
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
var x__10543__auto__ = (((p == null))?null:p);
var m__10544__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__10543__auto__)]);
if(!((m__10544__auto__ == null))){
return m__10544__auto__.call(null,p,v);
} else {
var m__10544__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__10544__auto____$1 == null))){
return m__10544__auto____$1.call(null,p,v);
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
var G__16401 = arguments.length;
switch (G__16401) {
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
var or__9810__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__9810__auto__)){
return or__9810__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__9810__auto__,mults){
return (function (p1__16399_SHARP_){
if(cljs.core.truth_(p1__16399_SHARP_.call(null,topic))){
return p1__16399_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__16399_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__9810__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async16402 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16402 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16403){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16403 = meta16403;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16404,meta16403__$1){
var self__ = this;
var _16404__$1 = this;
return (new cljs.core.async.t_cljs$core$async16402(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16403__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16402.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16404){
var self__ = this;
var _16404__$1 = this;
return self__.meta16403;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16402.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16402.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16402.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16402.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16402.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async16402.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16402.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16402.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16403","meta16403",90157260,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16402.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16402.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16402";

cljs.core.async.t_cljs$core$async16402.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__10481__auto__,writer__10482__auto__,opt__10483__auto__){
return cljs.core._write.call(null,writer__10482__auto__,"cljs.core.async/t_cljs$core$async16402");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async16402 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async16402(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16403){
return (new cljs.core.async.t_cljs$core$async16402(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16403));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async16402(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15288__auto___16522 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15288__auto___16522,mults,ensure_mult,p){
return (function (){
var f__15289__auto__ = (function (){var switch__15198__auto__ = ((function (c__15288__auto___16522,mults,ensure_mult,p){
return (function (state_16476){
var state_val_16477 = (state_16476[(1)]);
if((state_val_16477 === (7))){
var inst_16472 = (state_16476[(2)]);
var state_16476__$1 = state_16476;
var statearr_16478_16523 = state_16476__$1;
(statearr_16478_16523[(2)] = inst_16472);

(statearr_16478_16523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (20))){
var state_16476__$1 = state_16476;
var statearr_16479_16524 = state_16476__$1;
(statearr_16479_16524[(2)] = null);

(statearr_16479_16524[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (1))){
var state_16476__$1 = state_16476;
var statearr_16480_16525 = state_16476__$1;
(statearr_16480_16525[(2)] = null);

(statearr_16480_16525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (24))){
var inst_16455 = (state_16476[(7)]);
var inst_16464 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16455);
var state_16476__$1 = state_16476;
var statearr_16481_16526 = state_16476__$1;
(statearr_16481_16526[(2)] = inst_16464);

(statearr_16481_16526[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (4))){
var inst_16407 = (state_16476[(8)]);
var inst_16407__$1 = (state_16476[(2)]);
var inst_16408 = (inst_16407__$1 == null);
var state_16476__$1 = (function (){var statearr_16482 = state_16476;
(statearr_16482[(8)] = inst_16407__$1);

return statearr_16482;
})();
if(cljs.core.truth_(inst_16408)){
var statearr_16483_16527 = state_16476__$1;
(statearr_16483_16527[(1)] = (5));

} else {
var statearr_16484_16528 = state_16476__$1;
(statearr_16484_16528[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (15))){
var inst_16449 = (state_16476[(2)]);
var state_16476__$1 = state_16476;
var statearr_16485_16529 = state_16476__$1;
(statearr_16485_16529[(2)] = inst_16449);

(statearr_16485_16529[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (21))){
var inst_16469 = (state_16476[(2)]);
var state_16476__$1 = (function (){var statearr_16486 = state_16476;
(statearr_16486[(9)] = inst_16469);

return statearr_16486;
})();
var statearr_16487_16530 = state_16476__$1;
(statearr_16487_16530[(2)] = null);

(statearr_16487_16530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (13))){
var inst_16431 = (state_16476[(10)]);
var inst_16433 = cljs.core.chunked_seq_QMARK_.call(null,inst_16431);
var state_16476__$1 = state_16476;
if(inst_16433){
var statearr_16488_16531 = state_16476__$1;
(statearr_16488_16531[(1)] = (16));

} else {
var statearr_16489_16532 = state_16476__$1;
(statearr_16489_16532[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (22))){
var inst_16461 = (state_16476[(2)]);
var state_16476__$1 = state_16476;
if(cljs.core.truth_(inst_16461)){
var statearr_16490_16533 = state_16476__$1;
(statearr_16490_16533[(1)] = (23));

} else {
var statearr_16491_16534 = state_16476__$1;
(statearr_16491_16534[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (6))){
var inst_16455 = (state_16476[(7)]);
var inst_16407 = (state_16476[(8)]);
var inst_16457 = (state_16476[(11)]);
var inst_16455__$1 = topic_fn.call(null,inst_16407);
var inst_16456 = cljs.core.deref.call(null,mults);
var inst_16457__$1 = cljs.core.get.call(null,inst_16456,inst_16455__$1);
var state_16476__$1 = (function (){var statearr_16492 = state_16476;
(statearr_16492[(7)] = inst_16455__$1);

(statearr_16492[(11)] = inst_16457__$1);

return statearr_16492;
})();
if(cljs.core.truth_(inst_16457__$1)){
var statearr_16493_16535 = state_16476__$1;
(statearr_16493_16535[(1)] = (19));

} else {
var statearr_16494_16536 = state_16476__$1;
(statearr_16494_16536[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (25))){
var inst_16466 = (state_16476[(2)]);
var state_16476__$1 = state_16476;
var statearr_16495_16537 = state_16476__$1;
(statearr_16495_16537[(2)] = inst_16466);

(statearr_16495_16537[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (17))){
var inst_16431 = (state_16476[(10)]);
var inst_16440 = cljs.core.first.call(null,inst_16431);
var inst_16441 = cljs.core.async.muxch_STAR_.call(null,inst_16440);
var inst_16442 = cljs.core.async.close_BANG_.call(null,inst_16441);
var inst_16443 = cljs.core.next.call(null,inst_16431);
var inst_16417 = inst_16443;
var inst_16418 = null;
var inst_16419 = (0);
var inst_16420 = (0);
var state_16476__$1 = (function (){var statearr_16496 = state_16476;
(statearr_16496[(12)] = inst_16442);

(statearr_16496[(13)] = inst_16418);

(statearr_16496[(14)] = inst_16417);

(statearr_16496[(15)] = inst_16420);

(statearr_16496[(16)] = inst_16419);

return statearr_16496;
})();
var statearr_16497_16538 = state_16476__$1;
(statearr_16497_16538[(2)] = null);

(statearr_16497_16538[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (3))){
var inst_16474 = (state_16476[(2)]);
var state_16476__$1 = state_16476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16476__$1,inst_16474);
} else {
if((state_val_16477 === (12))){
var inst_16451 = (state_16476[(2)]);
var state_16476__$1 = state_16476;
var statearr_16498_16539 = state_16476__$1;
(statearr_16498_16539[(2)] = inst_16451);

(statearr_16498_16539[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (2))){
var state_16476__$1 = state_16476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16476__$1,(4),ch);
} else {
if((state_val_16477 === (23))){
var state_16476__$1 = state_16476;
var statearr_16499_16540 = state_16476__$1;
(statearr_16499_16540[(2)] = null);

(statearr_16499_16540[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (19))){
var inst_16407 = (state_16476[(8)]);
var inst_16457 = (state_16476[(11)]);
var inst_16459 = cljs.core.async.muxch_STAR_.call(null,inst_16457);
var state_16476__$1 = state_16476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16476__$1,(22),inst_16459,inst_16407);
} else {
if((state_val_16477 === (11))){
var inst_16431 = (state_16476[(10)]);
var inst_16417 = (state_16476[(14)]);
var inst_16431__$1 = cljs.core.seq.call(null,inst_16417);
var state_16476__$1 = (function (){var statearr_16500 = state_16476;
(statearr_16500[(10)] = inst_16431__$1);

return statearr_16500;
})();
if(inst_16431__$1){
var statearr_16501_16541 = state_16476__$1;
(statearr_16501_16541[(1)] = (13));

} else {
var statearr_16502_16542 = state_16476__$1;
(statearr_16502_16542[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (9))){
var inst_16453 = (state_16476[(2)]);
var state_16476__$1 = state_16476;
var statearr_16503_16543 = state_16476__$1;
(statearr_16503_16543[(2)] = inst_16453);

(statearr_16503_16543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (5))){
var inst_16414 = cljs.core.deref.call(null,mults);
var inst_16415 = cljs.core.vals.call(null,inst_16414);
var inst_16416 = cljs.core.seq.call(null,inst_16415);
var inst_16417 = inst_16416;
var inst_16418 = null;
var inst_16419 = (0);
var inst_16420 = (0);
var state_16476__$1 = (function (){var statearr_16504 = state_16476;
(statearr_16504[(13)] = inst_16418);

(statearr_16504[(14)] = inst_16417);

(statearr_16504[(15)] = inst_16420);

(statearr_16504[(16)] = inst_16419);

return statearr_16504;
})();
var statearr_16505_16544 = state_16476__$1;
(statearr_16505_16544[(2)] = null);

(statearr_16505_16544[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (14))){
var state_16476__$1 = state_16476;
var statearr_16509_16545 = state_16476__$1;
(statearr_16509_16545[(2)] = null);

(statearr_16509_16545[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (16))){
var inst_16431 = (state_16476[(10)]);
var inst_16435 = cljs.core.chunk_first.call(null,inst_16431);
var inst_16436 = cljs.core.chunk_rest.call(null,inst_16431);
var inst_16437 = cljs.core.count.call(null,inst_16435);
var inst_16417 = inst_16436;
var inst_16418 = inst_16435;
var inst_16419 = inst_16437;
var inst_16420 = (0);
var state_16476__$1 = (function (){var statearr_16510 = state_16476;
(statearr_16510[(13)] = inst_16418);

(statearr_16510[(14)] = inst_16417);

(statearr_16510[(15)] = inst_16420);

(statearr_16510[(16)] = inst_16419);

return statearr_16510;
})();
var statearr_16511_16546 = state_16476__$1;
(statearr_16511_16546[(2)] = null);

(statearr_16511_16546[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (10))){
var inst_16418 = (state_16476[(13)]);
var inst_16417 = (state_16476[(14)]);
var inst_16420 = (state_16476[(15)]);
var inst_16419 = (state_16476[(16)]);
var inst_16425 = cljs.core._nth.call(null,inst_16418,inst_16420);
var inst_16426 = cljs.core.async.muxch_STAR_.call(null,inst_16425);
var inst_16427 = cljs.core.async.close_BANG_.call(null,inst_16426);
var inst_16428 = (inst_16420 + (1));
var tmp16506 = inst_16418;
var tmp16507 = inst_16417;
var tmp16508 = inst_16419;
var inst_16417__$1 = tmp16507;
var inst_16418__$1 = tmp16506;
var inst_16419__$1 = tmp16508;
var inst_16420__$1 = inst_16428;
var state_16476__$1 = (function (){var statearr_16512 = state_16476;
(statearr_16512[(13)] = inst_16418__$1);

(statearr_16512[(14)] = inst_16417__$1);

(statearr_16512[(17)] = inst_16427);

(statearr_16512[(15)] = inst_16420__$1);

(statearr_16512[(16)] = inst_16419__$1);

return statearr_16512;
})();
var statearr_16513_16547 = state_16476__$1;
(statearr_16513_16547[(2)] = null);

(statearr_16513_16547[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (18))){
var inst_16446 = (state_16476[(2)]);
var state_16476__$1 = state_16476;
var statearr_16514_16548 = state_16476__$1;
(statearr_16514_16548[(2)] = inst_16446);

(statearr_16514_16548[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (8))){
var inst_16420 = (state_16476[(15)]);
var inst_16419 = (state_16476[(16)]);
var inst_16422 = (inst_16420 < inst_16419);
var inst_16423 = inst_16422;
var state_16476__$1 = state_16476;
if(cljs.core.truth_(inst_16423)){
var statearr_16515_16549 = state_16476__$1;
(statearr_16515_16549[(1)] = (10));

} else {
var statearr_16516_16550 = state_16476__$1;
(statearr_16516_16550[(1)] = (11));

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
});})(c__15288__auto___16522,mults,ensure_mult,p))
;
return ((function (switch__15198__auto__,c__15288__auto___16522,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15199__auto__ = null;
var cljs$core$async$state_machine__15199__auto____0 = (function (){
var statearr_16517 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16517[(0)] = cljs$core$async$state_machine__15199__auto__);

(statearr_16517[(1)] = (1));

return statearr_16517;
});
var cljs$core$async$state_machine__15199__auto____1 = (function (state_16476){
while(true){
var ret_value__15200__auto__ = (function (){try{while(true){
var result__15201__auto__ = switch__15198__auto__.call(null,state_16476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15201__auto__;
}
break;
}
}catch (e16518){if((e16518 instanceof Object)){
var ex__15202__auto__ = e16518;
var statearr_16519_16551 = state_16476;
(statearr_16519_16551[(5)] = ex__15202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16552 = state_16476;
state_16476 = G__16552;
continue;
} else {
return ret_value__15200__auto__;
}
break;
}
});
cljs$core$async$state_machine__15199__auto__ = function(state_16476){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15199__auto____1.call(this,state_16476);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15199__auto____0;
cljs$core$async$state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15199__auto____1;
return cljs$core$async$state_machine__15199__auto__;
})()
;})(switch__15198__auto__,c__15288__auto___16522,mults,ensure_mult,p))
})();
var state__15290__auto__ = (function (){var statearr_16520 = f__15289__auto__.call(null);
(statearr_16520[(6)] = c__15288__auto___16522);

return statearr_16520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15290__auto__);
});})(c__15288__auto___16522,mults,ensure_mult,p))
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
var G__16554 = arguments.length;
switch (G__16554) {
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
var G__16557 = arguments.length;
switch (G__16557) {
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
var G__16560 = arguments.length;
switch (G__16560) {
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
var c__15288__auto___16627 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15288__auto___16627,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15289__auto__ = (function (){var switch__15198__auto__ = ((function (c__15288__auto___16627,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16599){
var state_val_16600 = (state_16599[(1)]);
if((state_val_16600 === (7))){
var state_16599__$1 = state_16599;
var statearr_16601_16628 = state_16599__$1;
(statearr_16601_16628[(2)] = null);

(statearr_16601_16628[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16600 === (1))){
var state_16599__$1 = state_16599;
var statearr_16602_16629 = state_16599__$1;
(statearr_16602_16629[(2)] = null);

(statearr_16602_16629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16600 === (4))){
var inst_16563 = (state_16599[(7)]);
var inst_16565 = (inst_16563 < cnt);
var state_16599__$1 = state_16599;
if(cljs.core.truth_(inst_16565)){
var statearr_16603_16630 = state_16599__$1;
(statearr_16603_16630[(1)] = (6));

} else {
var statearr_16604_16631 = state_16599__$1;
(statearr_16604_16631[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16600 === (15))){
var inst_16595 = (state_16599[(2)]);
var state_16599__$1 = state_16599;
var statearr_16605_16632 = state_16599__$1;
(statearr_16605_16632[(2)] = inst_16595);

(statearr_16605_16632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16600 === (13))){
var inst_16588 = cljs.core.async.close_BANG_.call(null,out);
var state_16599__$1 = state_16599;
var statearr_16606_16633 = state_16599__$1;
(statearr_16606_16633[(2)] = inst_16588);

(statearr_16606_16633[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16600 === (6))){
var state_16599__$1 = state_16599;
var statearr_16607_16634 = state_16599__$1;
(statearr_16607_16634[(2)] = null);

(statearr_16607_16634[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16600 === (3))){
var inst_16597 = (state_16599[(2)]);
var state_16599__$1 = state_16599;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16599__$1,inst_16597);
} else {
if((state_val_16600 === (12))){
var inst_16585 = (state_16599[(8)]);
var inst_16585__$1 = (state_16599[(2)]);
var inst_16586 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_16585__$1);
var state_16599__$1 = (function (){var statearr_16608 = state_16599;
(statearr_16608[(8)] = inst_16585__$1);

return statearr_16608;
})();
if(cljs.core.truth_(inst_16586)){
var statearr_16609_16635 = state_16599__$1;
(statearr_16609_16635[(1)] = (13));

} else {
var statearr_16610_16636 = state_16599__$1;
(statearr_16610_16636[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16600 === (2))){
var inst_16562 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_16563 = (0);
var state_16599__$1 = (function (){var statearr_16611 = state_16599;
(statearr_16611[(9)] = inst_16562);

(statearr_16611[(7)] = inst_16563);

return statearr_16611;
})();
var statearr_16612_16637 = state_16599__$1;
(statearr_16612_16637[(2)] = null);

(statearr_16612_16637[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16600 === (11))){
var inst_16563 = (state_16599[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16599,(10),Object,null,(9));
var inst_16572 = chs__$1.call(null,inst_16563);
var inst_16573 = done.call(null,inst_16563);
var inst_16574 = cljs.core.async.take_BANG_.call(null,inst_16572,inst_16573);
var state_16599__$1 = state_16599;
var statearr_16613_16638 = state_16599__$1;
(statearr_16613_16638[(2)] = inst_16574);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16599__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16600 === (9))){
var inst_16563 = (state_16599[(7)]);
var inst_16576 = (state_16599[(2)]);
var inst_16577 = (inst_16563 + (1));
var inst_16563__$1 = inst_16577;
var state_16599__$1 = (function (){var statearr_16614 = state_16599;
(statearr_16614[(10)] = inst_16576);

(statearr_16614[(7)] = inst_16563__$1);

return statearr_16614;
})();
var statearr_16615_16639 = state_16599__$1;
(statearr_16615_16639[(2)] = null);

(statearr_16615_16639[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16600 === (5))){
var inst_16583 = (state_16599[(2)]);
var state_16599__$1 = (function (){var statearr_16616 = state_16599;
(statearr_16616[(11)] = inst_16583);

return statearr_16616;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16599__$1,(12),dchan);
} else {
if((state_val_16600 === (14))){
var inst_16585 = (state_16599[(8)]);
var inst_16590 = cljs.core.apply.call(null,f,inst_16585);
var state_16599__$1 = state_16599;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16599__$1,(16),out,inst_16590);
} else {
if((state_val_16600 === (16))){
var inst_16592 = (state_16599[(2)]);
var state_16599__$1 = (function (){var statearr_16617 = state_16599;
(statearr_16617[(12)] = inst_16592);

return statearr_16617;
})();
var statearr_16618_16640 = state_16599__$1;
(statearr_16618_16640[(2)] = null);

(statearr_16618_16640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16600 === (10))){
var inst_16567 = (state_16599[(2)]);
var inst_16568 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_16599__$1 = (function (){var statearr_16619 = state_16599;
(statearr_16619[(13)] = inst_16567);

return statearr_16619;
})();
var statearr_16620_16641 = state_16599__$1;
(statearr_16620_16641[(2)] = inst_16568);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16599__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16600 === (8))){
var inst_16581 = (state_16599[(2)]);
var state_16599__$1 = state_16599;
var statearr_16621_16642 = state_16599__$1;
(statearr_16621_16642[(2)] = inst_16581);

(statearr_16621_16642[(1)] = (5));


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
});})(c__15288__auto___16627,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15198__auto__,c__15288__auto___16627,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15199__auto__ = null;
var cljs$core$async$state_machine__15199__auto____0 = (function (){
var statearr_16622 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16622[(0)] = cljs$core$async$state_machine__15199__auto__);

(statearr_16622[(1)] = (1));

return statearr_16622;
});
var cljs$core$async$state_machine__15199__auto____1 = (function (state_16599){
while(true){
var ret_value__15200__auto__ = (function (){try{while(true){
var result__15201__auto__ = switch__15198__auto__.call(null,state_16599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15201__auto__;
}
break;
}
}catch (e16623){if((e16623 instanceof Object)){
var ex__15202__auto__ = e16623;
var statearr_16624_16643 = state_16599;
(statearr_16624_16643[(5)] = ex__15202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16623;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16644 = state_16599;
state_16599 = G__16644;
continue;
} else {
return ret_value__15200__auto__;
}
break;
}
});
cljs$core$async$state_machine__15199__auto__ = function(state_16599){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15199__auto____1.call(this,state_16599);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15199__auto____0;
cljs$core$async$state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15199__auto____1;
return cljs$core$async$state_machine__15199__auto__;
})()
;})(switch__15198__auto__,c__15288__auto___16627,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15290__auto__ = (function (){var statearr_16625 = f__15289__auto__.call(null);
(statearr_16625[(6)] = c__15288__auto___16627);

return statearr_16625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15290__auto__);
});})(c__15288__auto___16627,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__16647 = arguments.length;
switch (G__16647) {
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
var c__15288__auto___16701 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15288__auto___16701,out){
return (function (){
var f__15289__auto__ = (function (){var switch__15198__auto__ = ((function (c__15288__auto___16701,out){
return (function (state_16679){
var state_val_16680 = (state_16679[(1)]);
if((state_val_16680 === (7))){
var inst_16658 = (state_16679[(7)]);
var inst_16659 = (state_16679[(8)]);
var inst_16658__$1 = (state_16679[(2)]);
var inst_16659__$1 = cljs.core.nth.call(null,inst_16658__$1,(0),null);
var inst_16660 = cljs.core.nth.call(null,inst_16658__$1,(1),null);
var inst_16661 = (inst_16659__$1 == null);
var state_16679__$1 = (function (){var statearr_16681 = state_16679;
(statearr_16681[(9)] = inst_16660);

(statearr_16681[(7)] = inst_16658__$1);

(statearr_16681[(8)] = inst_16659__$1);

return statearr_16681;
})();
if(cljs.core.truth_(inst_16661)){
var statearr_16682_16702 = state_16679__$1;
(statearr_16682_16702[(1)] = (8));

} else {
var statearr_16683_16703 = state_16679__$1;
(statearr_16683_16703[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16680 === (1))){
var inst_16648 = cljs.core.vec.call(null,chs);
var inst_16649 = inst_16648;
var state_16679__$1 = (function (){var statearr_16684 = state_16679;
(statearr_16684[(10)] = inst_16649);

return statearr_16684;
})();
var statearr_16685_16704 = state_16679__$1;
(statearr_16685_16704[(2)] = null);

(statearr_16685_16704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16680 === (4))){
var inst_16649 = (state_16679[(10)]);
var state_16679__$1 = state_16679;
return cljs.core.async.ioc_alts_BANG_.call(null,state_16679__$1,(7),inst_16649);
} else {
if((state_val_16680 === (6))){
var inst_16675 = (state_16679[(2)]);
var state_16679__$1 = state_16679;
var statearr_16686_16705 = state_16679__$1;
(statearr_16686_16705[(2)] = inst_16675);

(statearr_16686_16705[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16680 === (3))){
var inst_16677 = (state_16679[(2)]);
var state_16679__$1 = state_16679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16679__$1,inst_16677);
} else {
if((state_val_16680 === (2))){
var inst_16649 = (state_16679[(10)]);
var inst_16651 = cljs.core.count.call(null,inst_16649);
var inst_16652 = (inst_16651 > (0));
var state_16679__$1 = state_16679;
if(cljs.core.truth_(inst_16652)){
var statearr_16688_16706 = state_16679__$1;
(statearr_16688_16706[(1)] = (4));

} else {
var statearr_16689_16707 = state_16679__$1;
(statearr_16689_16707[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16680 === (11))){
var inst_16649 = (state_16679[(10)]);
var inst_16668 = (state_16679[(2)]);
var tmp16687 = inst_16649;
var inst_16649__$1 = tmp16687;
var state_16679__$1 = (function (){var statearr_16690 = state_16679;
(statearr_16690[(10)] = inst_16649__$1);

(statearr_16690[(11)] = inst_16668);

return statearr_16690;
})();
var statearr_16691_16708 = state_16679__$1;
(statearr_16691_16708[(2)] = null);

(statearr_16691_16708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16680 === (9))){
var inst_16659 = (state_16679[(8)]);
var state_16679__$1 = state_16679;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16679__$1,(11),out,inst_16659);
} else {
if((state_val_16680 === (5))){
var inst_16673 = cljs.core.async.close_BANG_.call(null,out);
var state_16679__$1 = state_16679;
var statearr_16692_16709 = state_16679__$1;
(statearr_16692_16709[(2)] = inst_16673);

(statearr_16692_16709[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16680 === (10))){
var inst_16671 = (state_16679[(2)]);
var state_16679__$1 = state_16679;
var statearr_16693_16710 = state_16679__$1;
(statearr_16693_16710[(2)] = inst_16671);

(statearr_16693_16710[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16680 === (8))){
var inst_16660 = (state_16679[(9)]);
var inst_16658 = (state_16679[(7)]);
var inst_16649 = (state_16679[(10)]);
var inst_16659 = (state_16679[(8)]);
var inst_16663 = (function (){var cs = inst_16649;
var vec__16654 = inst_16658;
var v = inst_16659;
var c = inst_16660;
return ((function (cs,vec__16654,v,c,inst_16660,inst_16658,inst_16649,inst_16659,state_val_16680,c__15288__auto___16701,out){
return (function (p1__16645_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__16645_SHARP_);
});
;})(cs,vec__16654,v,c,inst_16660,inst_16658,inst_16649,inst_16659,state_val_16680,c__15288__auto___16701,out))
})();
var inst_16664 = cljs.core.filterv.call(null,inst_16663,inst_16649);
var inst_16649__$1 = inst_16664;
var state_16679__$1 = (function (){var statearr_16694 = state_16679;
(statearr_16694[(10)] = inst_16649__$1);

return statearr_16694;
})();
var statearr_16695_16711 = state_16679__$1;
(statearr_16695_16711[(2)] = null);

(statearr_16695_16711[(1)] = (2));


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
});})(c__15288__auto___16701,out))
;
return ((function (switch__15198__auto__,c__15288__auto___16701,out){
return (function() {
var cljs$core$async$state_machine__15199__auto__ = null;
var cljs$core$async$state_machine__15199__auto____0 = (function (){
var statearr_16696 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16696[(0)] = cljs$core$async$state_machine__15199__auto__);

(statearr_16696[(1)] = (1));

return statearr_16696;
});
var cljs$core$async$state_machine__15199__auto____1 = (function (state_16679){
while(true){
var ret_value__15200__auto__ = (function (){try{while(true){
var result__15201__auto__ = switch__15198__auto__.call(null,state_16679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15201__auto__;
}
break;
}
}catch (e16697){if((e16697 instanceof Object)){
var ex__15202__auto__ = e16697;
var statearr_16698_16712 = state_16679;
(statearr_16698_16712[(5)] = ex__15202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16713 = state_16679;
state_16679 = G__16713;
continue;
} else {
return ret_value__15200__auto__;
}
break;
}
});
cljs$core$async$state_machine__15199__auto__ = function(state_16679){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15199__auto____1.call(this,state_16679);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15199__auto____0;
cljs$core$async$state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15199__auto____1;
return cljs$core$async$state_machine__15199__auto__;
})()
;})(switch__15198__auto__,c__15288__auto___16701,out))
})();
var state__15290__auto__ = (function (){var statearr_16699 = f__15289__auto__.call(null);
(statearr_16699[(6)] = c__15288__auto___16701);

return statearr_16699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15290__auto__);
});})(c__15288__auto___16701,out))
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
var G__16715 = arguments.length;
switch (G__16715) {
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
var c__15288__auto___16760 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15288__auto___16760,out){
return (function (){
var f__15289__auto__ = (function (){var switch__15198__auto__ = ((function (c__15288__auto___16760,out){
return (function (state_16739){
var state_val_16740 = (state_16739[(1)]);
if((state_val_16740 === (7))){
var inst_16721 = (state_16739[(7)]);
var inst_16721__$1 = (state_16739[(2)]);
var inst_16722 = (inst_16721__$1 == null);
var inst_16723 = cljs.core.not.call(null,inst_16722);
var state_16739__$1 = (function (){var statearr_16741 = state_16739;
(statearr_16741[(7)] = inst_16721__$1);

return statearr_16741;
})();
if(inst_16723){
var statearr_16742_16761 = state_16739__$1;
(statearr_16742_16761[(1)] = (8));

} else {
var statearr_16743_16762 = state_16739__$1;
(statearr_16743_16762[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16740 === (1))){
var inst_16716 = (0);
var state_16739__$1 = (function (){var statearr_16744 = state_16739;
(statearr_16744[(8)] = inst_16716);

return statearr_16744;
})();
var statearr_16745_16763 = state_16739__$1;
(statearr_16745_16763[(2)] = null);

(statearr_16745_16763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16740 === (4))){
var state_16739__$1 = state_16739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16739__$1,(7),ch);
} else {
if((state_val_16740 === (6))){
var inst_16734 = (state_16739[(2)]);
var state_16739__$1 = state_16739;
var statearr_16746_16764 = state_16739__$1;
(statearr_16746_16764[(2)] = inst_16734);

(statearr_16746_16764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16740 === (3))){
var inst_16736 = (state_16739[(2)]);
var inst_16737 = cljs.core.async.close_BANG_.call(null,out);
var state_16739__$1 = (function (){var statearr_16747 = state_16739;
(statearr_16747[(9)] = inst_16736);

return statearr_16747;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16739__$1,inst_16737);
} else {
if((state_val_16740 === (2))){
var inst_16716 = (state_16739[(8)]);
var inst_16718 = (inst_16716 < n);
var state_16739__$1 = state_16739;
if(cljs.core.truth_(inst_16718)){
var statearr_16748_16765 = state_16739__$1;
(statearr_16748_16765[(1)] = (4));

} else {
var statearr_16749_16766 = state_16739__$1;
(statearr_16749_16766[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16740 === (11))){
var inst_16716 = (state_16739[(8)]);
var inst_16726 = (state_16739[(2)]);
var inst_16727 = (inst_16716 + (1));
var inst_16716__$1 = inst_16727;
var state_16739__$1 = (function (){var statearr_16750 = state_16739;
(statearr_16750[(8)] = inst_16716__$1);

(statearr_16750[(10)] = inst_16726);

return statearr_16750;
})();
var statearr_16751_16767 = state_16739__$1;
(statearr_16751_16767[(2)] = null);

(statearr_16751_16767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16740 === (9))){
var state_16739__$1 = state_16739;
var statearr_16752_16768 = state_16739__$1;
(statearr_16752_16768[(2)] = null);

(statearr_16752_16768[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16740 === (5))){
var state_16739__$1 = state_16739;
var statearr_16753_16769 = state_16739__$1;
(statearr_16753_16769[(2)] = null);

(statearr_16753_16769[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16740 === (10))){
var inst_16731 = (state_16739[(2)]);
var state_16739__$1 = state_16739;
var statearr_16754_16770 = state_16739__$1;
(statearr_16754_16770[(2)] = inst_16731);

(statearr_16754_16770[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16740 === (8))){
var inst_16721 = (state_16739[(7)]);
var state_16739__$1 = state_16739;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16739__$1,(11),out,inst_16721);
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
});})(c__15288__auto___16760,out))
;
return ((function (switch__15198__auto__,c__15288__auto___16760,out){
return (function() {
var cljs$core$async$state_machine__15199__auto__ = null;
var cljs$core$async$state_machine__15199__auto____0 = (function (){
var statearr_16755 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16755[(0)] = cljs$core$async$state_machine__15199__auto__);

(statearr_16755[(1)] = (1));

return statearr_16755;
});
var cljs$core$async$state_machine__15199__auto____1 = (function (state_16739){
while(true){
var ret_value__15200__auto__ = (function (){try{while(true){
var result__15201__auto__ = switch__15198__auto__.call(null,state_16739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15201__auto__;
}
break;
}
}catch (e16756){if((e16756 instanceof Object)){
var ex__15202__auto__ = e16756;
var statearr_16757_16771 = state_16739;
(statearr_16757_16771[(5)] = ex__15202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16772 = state_16739;
state_16739 = G__16772;
continue;
} else {
return ret_value__15200__auto__;
}
break;
}
});
cljs$core$async$state_machine__15199__auto__ = function(state_16739){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15199__auto____1.call(this,state_16739);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15199__auto____0;
cljs$core$async$state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15199__auto____1;
return cljs$core$async$state_machine__15199__auto__;
})()
;})(switch__15198__auto__,c__15288__auto___16760,out))
})();
var state__15290__auto__ = (function (){var statearr_16758 = f__15289__auto__.call(null);
(statearr_16758[(6)] = c__15288__auto___16760);

return statearr_16758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15290__auto__);
});})(c__15288__auto___16760,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async16774 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16774 = (function (f,ch,meta16775){
this.f = f;
this.ch = ch;
this.meta16775 = meta16775;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16776,meta16775__$1){
var self__ = this;
var _16776__$1 = this;
return (new cljs.core.async.t_cljs$core$async16774(self__.f,self__.ch,meta16775__$1));
});

cljs.core.async.t_cljs$core$async16774.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16776){
var self__ = this;
var _16776__$1 = this;
return self__.meta16775;
});

cljs.core.async.t_cljs$core$async16774.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16774.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16774.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16774.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16774.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async16777 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16777 = (function (f,ch,meta16775,_,fn1,meta16778){
this.f = f;
this.ch = ch;
this.meta16775 = meta16775;
this._ = _;
this.fn1 = fn1;
this.meta16778 = meta16778;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_16779,meta16778__$1){
var self__ = this;
var _16779__$1 = this;
return (new cljs.core.async.t_cljs$core$async16777(self__.f,self__.ch,self__.meta16775,self__._,self__.fn1,meta16778__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async16777.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_16779){
var self__ = this;
var _16779__$1 = this;
return self__.meta16778;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16777.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16777.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16777.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16777.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__16773_SHARP_){
return f1.call(null,(((p1__16773_SHARP_ == null))?null:self__.f.call(null,p1__16773_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async16777.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16775","meta16775",1121684545,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16774","cljs.core.async/t_cljs$core$async16774",-794226113,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16778","meta16778",-614263805,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16777.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16777.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16777";

cljs.core.async.t_cljs$core$async16777.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__10481__auto__,writer__10482__auto__,opt__10483__auto__){
return cljs.core._write.call(null,writer__10482__auto__,"cljs.core.async/t_cljs$core$async16777");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async16777 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16777(f__$1,ch__$1,meta16775__$1,___$2,fn1__$1,meta16778){
return (new cljs.core.async.t_cljs$core$async16777(f__$1,ch__$1,meta16775__$1,___$2,fn1__$1,meta16778));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async16777(self__.f,self__.ch,self__.meta16775,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__9798__auto__ = ret;
if(cljs.core.truth_(and__9798__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__9798__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async16774.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16774.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async16774.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16775","meta16775",1121684545,null)], null);
});

cljs.core.async.t_cljs$core$async16774.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16774.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16774";

cljs.core.async.t_cljs$core$async16774.cljs$lang$ctorPrWriter = (function (this__10481__auto__,writer__10482__auto__,opt__10483__auto__){
return cljs.core._write.call(null,writer__10482__auto__,"cljs.core.async/t_cljs$core$async16774");
});

cljs.core.async.__GT_t_cljs$core$async16774 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16774(f__$1,ch__$1,meta16775){
return (new cljs.core.async.t_cljs$core$async16774(f__$1,ch__$1,meta16775));
});

}

return (new cljs.core.async.t_cljs$core$async16774(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async16780 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16780 = (function (f,ch,meta16781){
this.f = f;
this.ch = ch;
this.meta16781 = meta16781;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16782,meta16781__$1){
var self__ = this;
var _16782__$1 = this;
return (new cljs.core.async.t_cljs$core$async16780(self__.f,self__.ch,meta16781__$1));
});

cljs.core.async.t_cljs$core$async16780.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16782){
var self__ = this;
var _16782__$1 = this;
return self__.meta16781;
});

cljs.core.async.t_cljs$core$async16780.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16780.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16780.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16780.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16780.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16780.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async16780.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16781","meta16781",-790353683,null)], null);
});

cljs.core.async.t_cljs$core$async16780.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16780.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16780";

cljs.core.async.t_cljs$core$async16780.cljs$lang$ctorPrWriter = (function (this__10481__auto__,writer__10482__auto__,opt__10483__auto__){
return cljs.core._write.call(null,writer__10482__auto__,"cljs.core.async/t_cljs$core$async16780");
});

cljs.core.async.__GT_t_cljs$core$async16780 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async16780(f__$1,ch__$1,meta16781){
return (new cljs.core.async.t_cljs$core$async16780(f__$1,ch__$1,meta16781));
});

}

return (new cljs.core.async.t_cljs$core$async16780(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async16783 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16783 = (function (p,ch,meta16784){
this.p = p;
this.ch = ch;
this.meta16784 = meta16784;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16785,meta16784__$1){
var self__ = this;
var _16785__$1 = this;
return (new cljs.core.async.t_cljs$core$async16783(self__.p,self__.ch,meta16784__$1));
});

cljs.core.async.t_cljs$core$async16783.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16785){
var self__ = this;
var _16785__$1 = this;
return self__.meta16784;
});

cljs.core.async.t_cljs$core$async16783.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16783.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16783.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16783.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16783.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16783.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16783.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async16783.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16784","meta16784",-658629748,null)], null);
});

cljs.core.async.t_cljs$core$async16783.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16783.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16783";

cljs.core.async.t_cljs$core$async16783.cljs$lang$ctorPrWriter = (function (this__10481__auto__,writer__10482__auto__,opt__10483__auto__){
return cljs.core._write.call(null,writer__10482__auto__,"cljs.core.async/t_cljs$core$async16783");
});

cljs.core.async.__GT_t_cljs$core$async16783 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async16783(p__$1,ch__$1,meta16784){
return (new cljs.core.async.t_cljs$core$async16783(p__$1,ch__$1,meta16784));
});

}

return (new cljs.core.async.t_cljs$core$async16783(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__16787 = arguments.length;
switch (G__16787) {
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
var c__15288__auto___16827 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15288__auto___16827,out){
return (function (){
var f__15289__auto__ = (function (){var switch__15198__auto__ = ((function (c__15288__auto___16827,out){
return (function (state_16808){
var state_val_16809 = (state_16808[(1)]);
if((state_val_16809 === (7))){
var inst_16804 = (state_16808[(2)]);
var state_16808__$1 = state_16808;
var statearr_16810_16828 = state_16808__$1;
(statearr_16810_16828[(2)] = inst_16804);

(statearr_16810_16828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16809 === (1))){
var state_16808__$1 = state_16808;
var statearr_16811_16829 = state_16808__$1;
(statearr_16811_16829[(2)] = null);

(statearr_16811_16829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16809 === (4))){
var inst_16790 = (state_16808[(7)]);
var inst_16790__$1 = (state_16808[(2)]);
var inst_16791 = (inst_16790__$1 == null);
var state_16808__$1 = (function (){var statearr_16812 = state_16808;
(statearr_16812[(7)] = inst_16790__$1);

return statearr_16812;
})();
if(cljs.core.truth_(inst_16791)){
var statearr_16813_16830 = state_16808__$1;
(statearr_16813_16830[(1)] = (5));

} else {
var statearr_16814_16831 = state_16808__$1;
(statearr_16814_16831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16809 === (6))){
var inst_16790 = (state_16808[(7)]);
var inst_16795 = p.call(null,inst_16790);
var state_16808__$1 = state_16808;
if(cljs.core.truth_(inst_16795)){
var statearr_16815_16832 = state_16808__$1;
(statearr_16815_16832[(1)] = (8));

} else {
var statearr_16816_16833 = state_16808__$1;
(statearr_16816_16833[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16809 === (3))){
var inst_16806 = (state_16808[(2)]);
var state_16808__$1 = state_16808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16808__$1,inst_16806);
} else {
if((state_val_16809 === (2))){
var state_16808__$1 = state_16808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16808__$1,(4),ch);
} else {
if((state_val_16809 === (11))){
var inst_16798 = (state_16808[(2)]);
var state_16808__$1 = state_16808;
var statearr_16817_16834 = state_16808__$1;
(statearr_16817_16834[(2)] = inst_16798);

(statearr_16817_16834[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16809 === (9))){
var state_16808__$1 = state_16808;
var statearr_16818_16835 = state_16808__$1;
(statearr_16818_16835[(2)] = null);

(statearr_16818_16835[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16809 === (5))){
var inst_16793 = cljs.core.async.close_BANG_.call(null,out);
var state_16808__$1 = state_16808;
var statearr_16819_16836 = state_16808__$1;
(statearr_16819_16836[(2)] = inst_16793);

(statearr_16819_16836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16809 === (10))){
var inst_16801 = (state_16808[(2)]);
var state_16808__$1 = (function (){var statearr_16820 = state_16808;
(statearr_16820[(8)] = inst_16801);

return statearr_16820;
})();
var statearr_16821_16837 = state_16808__$1;
(statearr_16821_16837[(2)] = null);

(statearr_16821_16837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16809 === (8))){
var inst_16790 = (state_16808[(7)]);
var state_16808__$1 = state_16808;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16808__$1,(11),out,inst_16790);
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
});})(c__15288__auto___16827,out))
;
return ((function (switch__15198__auto__,c__15288__auto___16827,out){
return (function() {
var cljs$core$async$state_machine__15199__auto__ = null;
var cljs$core$async$state_machine__15199__auto____0 = (function (){
var statearr_16822 = [null,null,null,null,null,null,null,null,null];
(statearr_16822[(0)] = cljs$core$async$state_machine__15199__auto__);

(statearr_16822[(1)] = (1));

return statearr_16822;
});
var cljs$core$async$state_machine__15199__auto____1 = (function (state_16808){
while(true){
var ret_value__15200__auto__ = (function (){try{while(true){
var result__15201__auto__ = switch__15198__auto__.call(null,state_16808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15201__auto__;
}
break;
}
}catch (e16823){if((e16823 instanceof Object)){
var ex__15202__auto__ = e16823;
var statearr_16824_16838 = state_16808;
(statearr_16824_16838[(5)] = ex__15202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16839 = state_16808;
state_16808 = G__16839;
continue;
} else {
return ret_value__15200__auto__;
}
break;
}
});
cljs$core$async$state_machine__15199__auto__ = function(state_16808){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15199__auto____1.call(this,state_16808);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15199__auto____0;
cljs$core$async$state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15199__auto____1;
return cljs$core$async$state_machine__15199__auto__;
})()
;})(switch__15198__auto__,c__15288__auto___16827,out))
})();
var state__15290__auto__ = (function (){var statearr_16825 = f__15289__auto__.call(null);
(statearr_16825[(6)] = c__15288__auto___16827);

return statearr_16825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15290__auto__);
});})(c__15288__auto___16827,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16841 = arguments.length;
switch (G__16841) {
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
var c__15288__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15288__auto__){
return (function (){
var f__15289__auto__ = (function (){var switch__15198__auto__ = ((function (c__15288__auto__){
return (function (state_16904){
var state_val_16905 = (state_16904[(1)]);
if((state_val_16905 === (7))){
var inst_16900 = (state_16904[(2)]);
var state_16904__$1 = state_16904;
var statearr_16906_16944 = state_16904__$1;
(statearr_16906_16944[(2)] = inst_16900);

(statearr_16906_16944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (20))){
var inst_16870 = (state_16904[(7)]);
var inst_16881 = (state_16904[(2)]);
var inst_16882 = cljs.core.next.call(null,inst_16870);
var inst_16856 = inst_16882;
var inst_16857 = null;
var inst_16858 = (0);
var inst_16859 = (0);
var state_16904__$1 = (function (){var statearr_16907 = state_16904;
(statearr_16907[(8)] = inst_16859);

(statearr_16907[(9)] = inst_16858);

(statearr_16907[(10)] = inst_16881);

(statearr_16907[(11)] = inst_16856);

(statearr_16907[(12)] = inst_16857);

return statearr_16907;
})();
var statearr_16908_16945 = state_16904__$1;
(statearr_16908_16945[(2)] = null);

(statearr_16908_16945[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (1))){
var state_16904__$1 = state_16904;
var statearr_16909_16946 = state_16904__$1;
(statearr_16909_16946[(2)] = null);

(statearr_16909_16946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (4))){
var inst_16845 = (state_16904[(13)]);
var inst_16845__$1 = (state_16904[(2)]);
var inst_16846 = (inst_16845__$1 == null);
var state_16904__$1 = (function (){var statearr_16910 = state_16904;
(statearr_16910[(13)] = inst_16845__$1);

return statearr_16910;
})();
if(cljs.core.truth_(inst_16846)){
var statearr_16911_16947 = state_16904__$1;
(statearr_16911_16947[(1)] = (5));

} else {
var statearr_16912_16948 = state_16904__$1;
(statearr_16912_16948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (15))){
var state_16904__$1 = state_16904;
var statearr_16916_16949 = state_16904__$1;
(statearr_16916_16949[(2)] = null);

(statearr_16916_16949[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (21))){
var state_16904__$1 = state_16904;
var statearr_16917_16950 = state_16904__$1;
(statearr_16917_16950[(2)] = null);

(statearr_16917_16950[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (13))){
var inst_16859 = (state_16904[(8)]);
var inst_16858 = (state_16904[(9)]);
var inst_16856 = (state_16904[(11)]);
var inst_16857 = (state_16904[(12)]);
var inst_16866 = (state_16904[(2)]);
var inst_16867 = (inst_16859 + (1));
var tmp16913 = inst_16858;
var tmp16914 = inst_16856;
var tmp16915 = inst_16857;
var inst_16856__$1 = tmp16914;
var inst_16857__$1 = tmp16915;
var inst_16858__$1 = tmp16913;
var inst_16859__$1 = inst_16867;
var state_16904__$1 = (function (){var statearr_16918 = state_16904;
(statearr_16918[(14)] = inst_16866);

(statearr_16918[(8)] = inst_16859__$1);

(statearr_16918[(9)] = inst_16858__$1);

(statearr_16918[(11)] = inst_16856__$1);

(statearr_16918[(12)] = inst_16857__$1);

return statearr_16918;
})();
var statearr_16919_16951 = state_16904__$1;
(statearr_16919_16951[(2)] = null);

(statearr_16919_16951[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (22))){
var state_16904__$1 = state_16904;
var statearr_16920_16952 = state_16904__$1;
(statearr_16920_16952[(2)] = null);

(statearr_16920_16952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (6))){
var inst_16845 = (state_16904[(13)]);
var inst_16854 = f.call(null,inst_16845);
var inst_16855 = cljs.core.seq.call(null,inst_16854);
var inst_16856 = inst_16855;
var inst_16857 = null;
var inst_16858 = (0);
var inst_16859 = (0);
var state_16904__$1 = (function (){var statearr_16921 = state_16904;
(statearr_16921[(8)] = inst_16859);

(statearr_16921[(9)] = inst_16858);

(statearr_16921[(11)] = inst_16856);

(statearr_16921[(12)] = inst_16857);

return statearr_16921;
})();
var statearr_16922_16953 = state_16904__$1;
(statearr_16922_16953[(2)] = null);

(statearr_16922_16953[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (17))){
var inst_16870 = (state_16904[(7)]);
var inst_16874 = cljs.core.chunk_first.call(null,inst_16870);
var inst_16875 = cljs.core.chunk_rest.call(null,inst_16870);
var inst_16876 = cljs.core.count.call(null,inst_16874);
var inst_16856 = inst_16875;
var inst_16857 = inst_16874;
var inst_16858 = inst_16876;
var inst_16859 = (0);
var state_16904__$1 = (function (){var statearr_16923 = state_16904;
(statearr_16923[(8)] = inst_16859);

(statearr_16923[(9)] = inst_16858);

(statearr_16923[(11)] = inst_16856);

(statearr_16923[(12)] = inst_16857);

return statearr_16923;
})();
var statearr_16924_16954 = state_16904__$1;
(statearr_16924_16954[(2)] = null);

(statearr_16924_16954[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (3))){
var inst_16902 = (state_16904[(2)]);
var state_16904__$1 = state_16904;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16904__$1,inst_16902);
} else {
if((state_val_16905 === (12))){
var inst_16890 = (state_16904[(2)]);
var state_16904__$1 = state_16904;
var statearr_16925_16955 = state_16904__$1;
(statearr_16925_16955[(2)] = inst_16890);

(statearr_16925_16955[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (2))){
var state_16904__$1 = state_16904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16904__$1,(4),in$);
} else {
if((state_val_16905 === (23))){
var inst_16898 = (state_16904[(2)]);
var state_16904__$1 = state_16904;
var statearr_16926_16956 = state_16904__$1;
(statearr_16926_16956[(2)] = inst_16898);

(statearr_16926_16956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (19))){
var inst_16885 = (state_16904[(2)]);
var state_16904__$1 = state_16904;
var statearr_16927_16957 = state_16904__$1;
(statearr_16927_16957[(2)] = inst_16885);

(statearr_16927_16957[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (11))){
var inst_16870 = (state_16904[(7)]);
var inst_16856 = (state_16904[(11)]);
var inst_16870__$1 = cljs.core.seq.call(null,inst_16856);
var state_16904__$1 = (function (){var statearr_16928 = state_16904;
(statearr_16928[(7)] = inst_16870__$1);

return statearr_16928;
})();
if(inst_16870__$1){
var statearr_16929_16958 = state_16904__$1;
(statearr_16929_16958[(1)] = (14));

} else {
var statearr_16930_16959 = state_16904__$1;
(statearr_16930_16959[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (9))){
var inst_16892 = (state_16904[(2)]);
var inst_16893 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_16904__$1 = (function (){var statearr_16931 = state_16904;
(statearr_16931[(15)] = inst_16892);

return statearr_16931;
})();
if(cljs.core.truth_(inst_16893)){
var statearr_16932_16960 = state_16904__$1;
(statearr_16932_16960[(1)] = (21));

} else {
var statearr_16933_16961 = state_16904__$1;
(statearr_16933_16961[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (5))){
var inst_16848 = cljs.core.async.close_BANG_.call(null,out);
var state_16904__$1 = state_16904;
var statearr_16934_16962 = state_16904__$1;
(statearr_16934_16962[(2)] = inst_16848);

(statearr_16934_16962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (14))){
var inst_16870 = (state_16904[(7)]);
var inst_16872 = cljs.core.chunked_seq_QMARK_.call(null,inst_16870);
var state_16904__$1 = state_16904;
if(inst_16872){
var statearr_16935_16963 = state_16904__$1;
(statearr_16935_16963[(1)] = (17));

} else {
var statearr_16936_16964 = state_16904__$1;
(statearr_16936_16964[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (16))){
var inst_16888 = (state_16904[(2)]);
var state_16904__$1 = state_16904;
var statearr_16937_16965 = state_16904__$1;
(statearr_16937_16965[(2)] = inst_16888);

(statearr_16937_16965[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (10))){
var inst_16859 = (state_16904[(8)]);
var inst_16857 = (state_16904[(12)]);
var inst_16864 = cljs.core._nth.call(null,inst_16857,inst_16859);
var state_16904__$1 = state_16904;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16904__$1,(13),out,inst_16864);
} else {
if((state_val_16905 === (18))){
var inst_16870 = (state_16904[(7)]);
var inst_16879 = cljs.core.first.call(null,inst_16870);
var state_16904__$1 = state_16904;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16904__$1,(20),out,inst_16879);
} else {
if((state_val_16905 === (8))){
var inst_16859 = (state_16904[(8)]);
var inst_16858 = (state_16904[(9)]);
var inst_16861 = (inst_16859 < inst_16858);
var inst_16862 = inst_16861;
var state_16904__$1 = state_16904;
if(cljs.core.truth_(inst_16862)){
var statearr_16938_16966 = state_16904__$1;
(statearr_16938_16966[(1)] = (10));

} else {
var statearr_16939_16967 = state_16904__$1;
(statearr_16939_16967[(1)] = (11));

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
});})(c__15288__auto__))
;
return ((function (switch__15198__auto__,c__15288__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15199__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15199__auto____0 = (function (){
var statearr_16940 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16940[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15199__auto__);

(statearr_16940[(1)] = (1));

return statearr_16940;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15199__auto____1 = (function (state_16904){
while(true){
var ret_value__15200__auto__ = (function (){try{while(true){
var result__15201__auto__ = switch__15198__auto__.call(null,state_16904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15201__auto__;
}
break;
}
}catch (e16941){if((e16941 instanceof Object)){
var ex__15202__auto__ = e16941;
var statearr_16942_16968 = state_16904;
(statearr_16942_16968[(5)] = ex__15202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16969 = state_16904;
state_16904 = G__16969;
continue;
} else {
return ret_value__15200__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15199__auto__ = function(state_16904){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15199__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15199__auto____1.call(this,state_16904);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15199__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15199__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15199__auto__;
})()
;})(switch__15198__auto__,c__15288__auto__))
})();
var state__15290__auto__ = (function (){var statearr_16943 = f__15289__auto__.call(null);
(statearr_16943[(6)] = c__15288__auto__);

return statearr_16943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15290__auto__);
});})(c__15288__auto__))
);

return c__15288__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__16971 = arguments.length;
switch (G__16971) {
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
var G__16974 = arguments.length;
switch (G__16974) {
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
var G__16977 = arguments.length;
switch (G__16977) {
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
var c__15288__auto___17024 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15288__auto___17024,out){
return (function (){
var f__15289__auto__ = (function (){var switch__15198__auto__ = ((function (c__15288__auto___17024,out){
return (function (state_17001){
var state_val_17002 = (state_17001[(1)]);
if((state_val_17002 === (7))){
var inst_16996 = (state_17001[(2)]);
var state_17001__$1 = state_17001;
var statearr_17003_17025 = state_17001__$1;
(statearr_17003_17025[(2)] = inst_16996);

(statearr_17003_17025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17002 === (1))){
var inst_16978 = null;
var state_17001__$1 = (function (){var statearr_17004 = state_17001;
(statearr_17004[(7)] = inst_16978);

return statearr_17004;
})();
var statearr_17005_17026 = state_17001__$1;
(statearr_17005_17026[(2)] = null);

(statearr_17005_17026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17002 === (4))){
var inst_16981 = (state_17001[(8)]);
var inst_16981__$1 = (state_17001[(2)]);
var inst_16982 = (inst_16981__$1 == null);
var inst_16983 = cljs.core.not.call(null,inst_16982);
var state_17001__$1 = (function (){var statearr_17006 = state_17001;
(statearr_17006[(8)] = inst_16981__$1);

return statearr_17006;
})();
if(inst_16983){
var statearr_17007_17027 = state_17001__$1;
(statearr_17007_17027[(1)] = (5));

} else {
var statearr_17008_17028 = state_17001__$1;
(statearr_17008_17028[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17002 === (6))){
var state_17001__$1 = state_17001;
var statearr_17009_17029 = state_17001__$1;
(statearr_17009_17029[(2)] = null);

(statearr_17009_17029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17002 === (3))){
var inst_16998 = (state_17001[(2)]);
var inst_16999 = cljs.core.async.close_BANG_.call(null,out);
var state_17001__$1 = (function (){var statearr_17010 = state_17001;
(statearr_17010[(9)] = inst_16998);

return statearr_17010;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17001__$1,inst_16999);
} else {
if((state_val_17002 === (2))){
var state_17001__$1 = state_17001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17001__$1,(4),ch);
} else {
if((state_val_17002 === (11))){
var inst_16981 = (state_17001[(8)]);
var inst_16990 = (state_17001[(2)]);
var inst_16978 = inst_16981;
var state_17001__$1 = (function (){var statearr_17011 = state_17001;
(statearr_17011[(7)] = inst_16978);

(statearr_17011[(10)] = inst_16990);

return statearr_17011;
})();
var statearr_17012_17030 = state_17001__$1;
(statearr_17012_17030[(2)] = null);

(statearr_17012_17030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17002 === (9))){
var inst_16981 = (state_17001[(8)]);
var state_17001__$1 = state_17001;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17001__$1,(11),out,inst_16981);
} else {
if((state_val_17002 === (5))){
var inst_16978 = (state_17001[(7)]);
var inst_16981 = (state_17001[(8)]);
var inst_16985 = cljs.core._EQ_.call(null,inst_16981,inst_16978);
var state_17001__$1 = state_17001;
if(inst_16985){
var statearr_17014_17031 = state_17001__$1;
(statearr_17014_17031[(1)] = (8));

} else {
var statearr_17015_17032 = state_17001__$1;
(statearr_17015_17032[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17002 === (10))){
var inst_16993 = (state_17001[(2)]);
var state_17001__$1 = state_17001;
var statearr_17016_17033 = state_17001__$1;
(statearr_17016_17033[(2)] = inst_16993);

(statearr_17016_17033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17002 === (8))){
var inst_16978 = (state_17001[(7)]);
var tmp17013 = inst_16978;
var inst_16978__$1 = tmp17013;
var state_17001__$1 = (function (){var statearr_17017 = state_17001;
(statearr_17017[(7)] = inst_16978__$1);

return statearr_17017;
})();
var statearr_17018_17034 = state_17001__$1;
(statearr_17018_17034[(2)] = null);

(statearr_17018_17034[(1)] = (2));


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
});})(c__15288__auto___17024,out))
;
return ((function (switch__15198__auto__,c__15288__auto___17024,out){
return (function() {
var cljs$core$async$state_machine__15199__auto__ = null;
var cljs$core$async$state_machine__15199__auto____0 = (function (){
var statearr_17019 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17019[(0)] = cljs$core$async$state_machine__15199__auto__);

(statearr_17019[(1)] = (1));

return statearr_17019;
});
var cljs$core$async$state_machine__15199__auto____1 = (function (state_17001){
while(true){
var ret_value__15200__auto__ = (function (){try{while(true){
var result__15201__auto__ = switch__15198__auto__.call(null,state_17001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15201__auto__;
}
break;
}
}catch (e17020){if((e17020 instanceof Object)){
var ex__15202__auto__ = e17020;
var statearr_17021_17035 = state_17001;
(statearr_17021_17035[(5)] = ex__15202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17036 = state_17001;
state_17001 = G__17036;
continue;
} else {
return ret_value__15200__auto__;
}
break;
}
});
cljs$core$async$state_machine__15199__auto__ = function(state_17001){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15199__auto____1.call(this,state_17001);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15199__auto____0;
cljs$core$async$state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15199__auto____1;
return cljs$core$async$state_machine__15199__auto__;
})()
;})(switch__15198__auto__,c__15288__auto___17024,out))
})();
var state__15290__auto__ = (function (){var statearr_17022 = f__15289__auto__.call(null);
(statearr_17022[(6)] = c__15288__auto___17024);

return statearr_17022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15290__auto__);
});})(c__15288__auto___17024,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17038 = arguments.length;
switch (G__17038) {
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
var c__15288__auto___17104 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15288__auto___17104,out){
return (function (){
var f__15289__auto__ = (function (){var switch__15198__auto__ = ((function (c__15288__auto___17104,out){
return (function (state_17076){
var state_val_17077 = (state_17076[(1)]);
if((state_val_17077 === (7))){
var inst_17072 = (state_17076[(2)]);
var state_17076__$1 = state_17076;
var statearr_17078_17105 = state_17076__$1;
(statearr_17078_17105[(2)] = inst_17072);

(statearr_17078_17105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17077 === (1))){
var inst_17039 = (new Array(n));
var inst_17040 = inst_17039;
var inst_17041 = (0);
var state_17076__$1 = (function (){var statearr_17079 = state_17076;
(statearr_17079[(7)] = inst_17041);

(statearr_17079[(8)] = inst_17040);

return statearr_17079;
})();
var statearr_17080_17106 = state_17076__$1;
(statearr_17080_17106[(2)] = null);

(statearr_17080_17106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17077 === (4))){
var inst_17044 = (state_17076[(9)]);
var inst_17044__$1 = (state_17076[(2)]);
var inst_17045 = (inst_17044__$1 == null);
var inst_17046 = cljs.core.not.call(null,inst_17045);
var state_17076__$1 = (function (){var statearr_17081 = state_17076;
(statearr_17081[(9)] = inst_17044__$1);

return statearr_17081;
})();
if(inst_17046){
var statearr_17082_17107 = state_17076__$1;
(statearr_17082_17107[(1)] = (5));

} else {
var statearr_17083_17108 = state_17076__$1;
(statearr_17083_17108[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17077 === (15))){
var inst_17066 = (state_17076[(2)]);
var state_17076__$1 = state_17076;
var statearr_17084_17109 = state_17076__$1;
(statearr_17084_17109[(2)] = inst_17066);

(statearr_17084_17109[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17077 === (13))){
var state_17076__$1 = state_17076;
var statearr_17085_17110 = state_17076__$1;
(statearr_17085_17110[(2)] = null);

(statearr_17085_17110[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17077 === (6))){
var inst_17041 = (state_17076[(7)]);
var inst_17062 = (inst_17041 > (0));
var state_17076__$1 = state_17076;
if(cljs.core.truth_(inst_17062)){
var statearr_17086_17111 = state_17076__$1;
(statearr_17086_17111[(1)] = (12));

} else {
var statearr_17087_17112 = state_17076__$1;
(statearr_17087_17112[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17077 === (3))){
var inst_17074 = (state_17076[(2)]);
var state_17076__$1 = state_17076;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17076__$1,inst_17074);
} else {
if((state_val_17077 === (12))){
var inst_17040 = (state_17076[(8)]);
var inst_17064 = cljs.core.vec.call(null,inst_17040);
var state_17076__$1 = state_17076;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17076__$1,(15),out,inst_17064);
} else {
if((state_val_17077 === (2))){
var state_17076__$1 = state_17076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17076__$1,(4),ch);
} else {
if((state_val_17077 === (11))){
var inst_17056 = (state_17076[(2)]);
var inst_17057 = (new Array(n));
var inst_17040 = inst_17057;
var inst_17041 = (0);
var state_17076__$1 = (function (){var statearr_17088 = state_17076;
(statearr_17088[(7)] = inst_17041);

(statearr_17088[(8)] = inst_17040);

(statearr_17088[(10)] = inst_17056);

return statearr_17088;
})();
var statearr_17089_17113 = state_17076__$1;
(statearr_17089_17113[(2)] = null);

(statearr_17089_17113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17077 === (9))){
var inst_17040 = (state_17076[(8)]);
var inst_17054 = cljs.core.vec.call(null,inst_17040);
var state_17076__$1 = state_17076;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17076__$1,(11),out,inst_17054);
} else {
if((state_val_17077 === (5))){
var inst_17041 = (state_17076[(7)]);
var inst_17049 = (state_17076[(11)]);
var inst_17040 = (state_17076[(8)]);
var inst_17044 = (state_17076[(9)]);
var inst_17048 = (inst_17040[inst_17041] = inst_17044);
var inst_17049__$1 = (inst_17041 + (1));
var inst_17050 = (inst_17049__$1 < n);
var state_17076__$1 = (function (){var statearr_17090 = state_17076;
(statearr_17090[(11)] = inst_17049__$1);

(statearr_17090[(12)] = inst_17048);

return statearr_17090;
})();
if(cljs.core.truth_(inst_17050)){
var statearr_17091_17114 = state_17076__$1;
(statearr_17091_17114[(1)] = (8));

} else {
var statearr_17092_17115 = state_17076__$1;
(statearr_17092_17115[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17077 === (14))){
var inst_17069 = (state_17076[(2)]);
var inst_17070 = cljs.core.async.close_BANG_.call(null,out);
var state_17076__$1 = (function (){var statearr_17094 = state_17076;
(statearr_17094[(13)] = inst_17069);

return statearr_17094;
})();
var statearr_17095_17116 = state_17076__$1;
(statearr_17095_17116[(2)] = inst_17070);

(statearr_17095_17116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17077 === (10))){
var inst_17060 = (state_17076[(2)]);
var state_17076__$1 = state_17076;
var statearr_17096_17117 = state_17076__$1;
(statearr_17096_17117[(2)] = inst_17060);

(statearr_17096_17117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17077 === (8))){
var inst_17049 = (state_17076[(11)]);
var inst_17040 = (state_17076[(8)]);
var tmp17093 = inst_17040;
var inst_17040__$1 = tmp17093;
var inst_17041 = inst_17049;
var state_17076__$1 = (function (){var statearr_17097 = state_17076;
(statearr_17097[(7)] = inst_17041);

(statearr_17097[(8)] = inst_17040__$1);

return statearr_17097;
})();
var statearr_17098_17118 = state_17076__$1;
(statearr_17098_17118[(2)] = null);

(statearr_17098_17118[(1)] = (2));


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
});})(c__15288__auto___17104,out))
;
return ((function (switch__15198__auto__,c__15288__auto___17104,out){
return (function() {
var cljs$core$async$state_machine__15199__auto__ = null;
var cljs$core$async$state_machine__15199__auto____0 = (function (){
var statearr_17099 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17099[(0)] = cljs$core$async$state_machine__15199__auto__);

(statearr_17099[(1)] = (1));

return statearr_17099;
});
var cljs$core$async$state_machine__15199__auto____1 = (function (state_17076){
while(true){
var ret_value__15200__auto__ = (function (){try{while(true){
var result__15201__auto__ = switch__15198__auto__.call(null,state_17076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15201__auto__;
}
break;
}
}catch (e17100){if((e17100 instanceof Object)){
var ex__15202__auto__ = e17100;
var statearr_17101_17119 = state_17076;
(statearr_17101_17119[(5)] = ex__15202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17120 = state_17076;
state_17076 = G__17120;
continue;
} else {
return ret_value__15200__auto__;
}
break;
}
});
cljs$core$async$state_machine__15199__auto__ = function(state_17076){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15199__auto____1.call(this,state_17076);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15199__auto____0;
cljs$core$async$state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15199__auto____1;
return cljs$core$async$state_machine__15199__auto__;
})()
;})(switch__15198__auto__,c__15288__auto___17104,out))
})();
var state__15290__auto__ = (function (){var statearr_17102 = f__15289__auto__.call(null);
(statearr_17102[(6)] = c__15288__auto___17104);

return statearr_17102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15290__auto__);
});})(c__15288__auto___17104,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17122 = arguments.length;
switch (G__17122) {
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
var c__15288__auto___17192 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15288__auto___17192,out){
return (function (){
var f__15289__auto__ = (function (){var switch__15198__auto__ = ((function (c__15288__auto___17192,out){
return (function (state_17164){
var state_val_17165 = (state_17164[(1)]);
if((state_val_17165 === (7))){
var inst_17160 = (state_17164[(2)]);
var state_17164__$1 = state_17164;
var statearr_17166_17193 = state_17164__$1;
(statearr_17166_17193[(2)] = inst_17160);

(statearr_17166_17193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17165 === (1))){
var inst_17123 = [];
var inst_17124 = inst_17123;
var inst_17125 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17164__$1 = (function (){var statearr_17167 = state_17164;
(statearr_17167[(7)] = inst_17125);

(statearr_17167[(8)] = inst_17124);

return statearr_17167;
})();
var statearr_17168_17194 = state_17164__$1;
(statearr_17168_17194[(2)] = null);

(statearr_17168_17194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17165 === (4))){
var inst_17128 = (state_17164[(9)]);
var inst_17128__$1 = (state_17164[(2)]);
var inst_17129 = (inst_17128__$1 == null);
var inst_17130 = cljs.core.not.call(null,inst_17129);
var state_17164__$1 = (function (){var statearr_17169 = state_17164;
(statearr_17169[(9)] = inst_17128__$1);

return statearr_17169;
})();
if(inst_17130){
var statearr_17170_17195 = state_17164__$1;
(statearr_17170_17195[(1)] = (5));

} else {
var statearr_17171_17196 = state_17164__$1;
(statearr_17171_17196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17165 === (15))){
var inst_17154 = (state_17164[(2)]);
var state_17164__$1 = state_17164;
var statearr_17172_17197 = state_17164__$1;
(statearr_17172_17197[(2)] = inst_17154);

(statearr_17172_17197[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17165 === (13))){
var state_17164__$1 = state_17164;
var statearr_17173_17198 = state_17164__$1;
(statearr_17173_17198[(2)] = null);

(statearr_17173_17198[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17165 === (6))){
var inst_17124 = (state_17164[(8)]);
var inst_17149 = inst_17124.length;
var inst_17150 = (inst_17149 > (0));
var state_17164__$1 = state_17164;
if(cljs.core.truth_(inst_17150)){
var statearr_17174_17199 = state_17164__$1;
(statearr_17174_17199[(1)] = (12));

} else {
var statearr_17175_17200 = state_17164__$1;
(statearr_17175_17200[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17165 === (3))){
var inst_17162 = (state_17164[(2)]);
var state_17164__$1 = state_17164;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17164__$1,inst_17162);
} else {
if((state_val_17165 === (12))){
var inst_17124 = (state_17164[(8)]);
var inst_17152 = cljs.core.vec.call(null,inst_17124);
var state_17164__$1 = state_17164;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17164__$1,(15),out,inst_17152);
} else {
if((state_val_17165 === (2))){
var state_17164__$1 = state_17164;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17164__$1,(4),ch);
} else {
if((state_val_17165 === (11))){
var inst_17128 = (state_17164[(9)]);
var inst_17132 = (state_17164[(10)]);
var inst_17142 = (state_17164[(2)]);
var inst_17143 = [];
var inst_17144 = inst_17143.push(inst_17128);
var inst_17124 = inst_17143;
var inst_17125 = inst_17132;
var state_17164__$1 = (function (){var statearr_17176 = state_17164;
(statearr_17176[(7)] = inst_17125);

(statearr_17176[(8)] = inst_17124);

(statearr_17176[(11)] = inst_17144);

(statearr_17176[(12)] = inst_17142);

return statearr_17176;
})();
var statearr_17177_17201 = state_17164__$1;
(statearr_17177_17201[(2)] = null);

(statearr_17177_17201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17165 === (9))){
var inst_17124 = (state_17164[(8)]);
var inst_17140 = cljs.core.vec.call(null,inst_17124);
var state_17164__$1 = state_17164;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17164__$1,(11),out,inst_17140);
} else {
if((state_val_17165 === (5))){
var inst_17125 = (state_17164[(7)]);
var inst_17128 = (state_17164[(9)]);
var inst_17132 = (state_17164[(10)]);
var inst_17132__$1 = f.call(null,inst_17128);
var inst_17133 = cljs.core._EQ_.call(null,inst_17132__$1,inst_17125);
var inst_17134 = cljs.core.keyword_identical_QMARK_.call(null,inst_17125,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_17135 = (inst_17133) || (inst_17134);
var state_17164__$1 = (function (){var statearr_17178 = state_17164;
(statearr_17178[(10)] = inst_17132__$1);

return statearr_17178;
})();
if(cljs.core.truth_(inst_17135)){
var statearr_17179_17202 = state_17164__$1;
(statearr_17179_17202[(1)] = (8));

} else {
var statearr_17180_17203 = state_17164__$1;
(statearr_17180_17203[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17165 === (14))){
var inst_17157 = (state_17164[(2)]);
var inst_17158 = cljs.core.async.close_BANG_.call(null,out);
var state_17164__$1 = (function (){var statearr_17182 = state_17164;
(statearr_17182[(13)] = inst_17157);

return statearr_17182;
})();
var statearr_17183_17204 = state_17164__$1;
(statearr_17183_17204[(2)] = inst_17158);

(statearr_17183_17204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17165 === (10))){
var inst_17147 = (state_17164[(2)]);
var state_17164__$1 = state_17164;
var statearr_17184_17205 = state_17164__$1;
(statearr_17184_17205[(2)] = inst_17147);

(statearr_17184_17205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17165 === (8))){
var inst_17124 = (state_17164[(8)]);
var inst_17128 = (state_17164[(9)]);
var inst_17132 = (state_17164[(10)]);
var inst_17137 = inst_17124.push(inst_17128);
var tmp17181 = inst_17124;
var inst_17124__$1 = tmp17181;
var inst_17125 = inst_17132;
var state_17164__$1 = (function (){var statearr_17185 = state_17164;
(statearr_17185[(7)] = inst_17125);

(statearr_17185[(8)] = inst_17124__$1);

(statearr_17185[(14)] = inst_17137);

return statearr_17185;
})();
var statearr_17186_17206 = state_17164__$1;
(statearr_17186_17206[(2)] = null);

(statearr_17186_17206[(1)] = (2));


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
});})(c__15288__auto___17192,out))
;
return ((function (switch__15198__auto__,c__15288__auto___17192,out){
return (function() {
var cljs$core$async$state_machine__15199__auto__ = null;
var cljs$core$async$state_machine__15199__auto____0 = (function (){
var statearr_17187 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17187[(0)] = cljs$core$async$state_machine__15199__auto__);

(statearr_17187[(1)] = (1));

return statearr_17187;
});
var cljs$core$async$state_machine__15199__auto____1 = (function (state_17164){
while(true){
var ret_value__15200__auto__ = (function (){try{while(true){
var result__15201__auto__ = switch__15198__auto__.call(null,state_17164);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15201__auto__;
}
break;
}
}catch (e17188){if((e17188 instanceof Object)){
var ex__15202__auto__ = e17188;
var statearr_17189_17207 = state_17164;
(statearr_17189_17207[(5)] = ex__15202__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17208 = state_17164;
state_17164 = G__17208;
continue;
} else {
return ret_value__15200__auto__;
}
break;
}
});
cljs$core$async$state_machine__15199__auto__ = function(state_17164){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15199__auto____1.call(this,state_17164);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15199__auto____0;
cljs$core$async$state_machine__15199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15199__auto____1;
return cljs$core$async$state_machine__15199__auto__;
})()
;})(switch__15198__auto__,c__15288__auto___17192,out))
})();
var state__15290__auto__ = (function (){var statearr_17190 = f__15289__auto__.call(null);
(statearr_17190[(6)] = c__15288__auto___17192);

return statearr_17190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15290__auto__);
});})(c__15288__auto___17192,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1506896674649
