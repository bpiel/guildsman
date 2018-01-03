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
var G__67010 = arguments.length;
switch (G__67010) {
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
if(typeof cljs.core.async.t_cljs$core$async67011 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async67011 = (function (f,blockable,meta67012){
this.f = f;
this.blockable = blockable;
this.meta67012 = meta67012;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async67011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67013,meta67012__$1){
var self__ = this;
var _67013__$1 = this;
return (new cljs.core.async.t_cljs$core$async67011(self__.f,self__.blockable,meta67012__$1));
});

cljs.core.async.t_cljs$core$async67011.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67013){
var self__ = this;
var _67013__$1 = this;
return self__.meta67012;
});

cljs.core.async.t_cljs$core$async67011.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async67011.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async67011.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async67011.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async67011.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta67012","meta67012",1194105601,null)], null);
});

cljs.core.async.t_cljs$core$async67011.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async67011.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async67011";

cljs.core.async.t_cljs$core$async67011.cljs$lang$ctorPrWriter = (function (this__63432__auto__,writer__63433__auto__,opt__63434__auto__){
return cljs.core._write.call(null,writer__63433__auto__,"cljs.core.async/t_cljs$core$async67011");
});

cljs.core.async.__GT_t_cljs$core$async67011 = (function cljs$core$async$__GT_t_cljs$core$async67011(f__$1,blockable__$1,meta67012){
return (new cljs.core.async.t_cljs$core$async67011(f__$1,blockable__$1,meta67012));
});

}

return (new cljs.core.async.t_cljs$core$async67011(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__67017 = arguments.length;
switch (G__67017) {
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
var G__67020 = arguments.length;
switch (G__67020) {
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
var G__67023 = arguments.length;
switch (G__67023) {
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
var val_67025 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_67025);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_67025,ret){
return (function (){
return fn1.call(null,val_67025);
});})(val_67025,ret))
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
var G__67027 = arguments.length;
switch (G__67027) {
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
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
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
var n__63804__auto___67029 = n;
var x_67030 = (0);
while(true){
if((x_67030 < n__63804__auto___67029)){
(a[x_67030] = (0));

var G__67031 = (x_67030 + (1));
x_67030 = G__67031;
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

var G__67032 = (i + (1));
i = G__67032;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async67033 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async67033 = (function (flag,meta67034){
this.flag = flag;
this.meta67034 = meta67034;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async67033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_67035,meta67034__$1){
var self__ = this;
var _67035__$1 = this;
return (new cljs.core.async.t_cljs$core$async67033(self__.flag,meta67034__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async67033.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_67035){
var self__ = this;
var _67035__$1 = this;
return self__.meta67034;
});})(flag))
;

cljs.core.async.t_cljs$core$async67033.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async67033.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async67033.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async67033.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async67033.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta67034","meta67034",-438979465,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async67033.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async67033.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async67033";

cljs.core.async.t_cljs$core$async67033.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__63432__auto__,writer__63433__auto__,opt__63434__auto__){
return cljs.core._write.call(null,writer__63433__auto__,"cljs.core.async/t_cljs$core$async67033");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async67033 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async67033(flag__$1,meta67034){
return (new cljs.core.async.t_cljs$core$async67033(flag__$1,meta67034));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async67033(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async67036 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async67036 = (function (flag,cb,meta67037){
this.flag = flag;
this.cb = cb;
this.meta67037 = meta67037;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async67036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67038,meta67037__$1){
var self__ = this;
var _67038__$1 = this;
return (new cljs.core.async.t_cljs$core$async67036(self__.flag,self__.cb,meta67037__$1));
});

cljs.core.async.t_cljs$core$async67036.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67038){
var self__ = this;
var _67038__$1 = this;
return self__.meta67037;
});

cljs.core.async.t_cljs$core$async67036.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async67036.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async67036.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async67036.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async67036.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta67037","meta67037",-406898458,null)], null);
});

cljs.core.async.t_cljs$core$async67036.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async67036.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async67036";

cljs.core.async.t_cljs$core$async67036.cljs$lang$ctorPrWriter = (function (this__63432__auto__,writer__63433__auto__,opt__63434__auto__){
return cljs.core._write.call(null,writer__63433__auto__,"cljs.core.async/t_cljs$core$async67036");
});

cljs.core.async.__GT_t_cljs$core$async67036 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async67036(flag__$1,cb__$1,meta67037){
return (new cljs.core.async.t_cljs$core$async67036(flag__$1,cb__$1,meta67037));
});

}

return (new cljs.core.async.t_cljs$core$async67036(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__67039_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__67039_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__67040_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__67040_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__62761__auto__ = wport;
if(cljs.core.truth_(or__62761__auto__)){
return or__62761__auto__;
} else {
return port;
}
})()], null));
} else {
var G__67041 = (i + (1));
i = G__67041;
continue;
}
} else {
return null;
}
break;
}
})();
var or__62761__auto__ = ret;
if(cljs.core.truth_(or__62761__auto__)){
return or__62761__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__62749__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__62749__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__62749__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
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
var args__64045__auto__ = [];
var len__64038__auto___67047 = arguments.length;
var i__64039__auto___67048 = (0);
while(true){
if((i__64039__auto___67048 < len__64038__auto___67047)){
args__64045__auto__.push((arguments[i__64039__auto___67048]));

var G__67049 = (i__64039__auto___67048 + (1));
i__64039__auto___67048 = G__67049;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((1) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__64046__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__67044){
var map__67045 = p__67044;
var map__67045__$1 = ((((!((map__67045 == null)))?((((map__67045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67045.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67045):map__67045);
var opts = map__67045__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq67042){
var G__67043 = cljs.core.first.call(null,seq67042);
var seq67042__$1 = cljs.core.next.call(null,seq67042);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__67043,seq67042__$1);
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
var G__67051 = arguments.length;
switch (G__67051) {
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
var c__66950__auto___67097 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__66950__auto___67097){
return (function (){
var f__66951__auto__ = (function (){var switch__66860__auto__ = ((function (c__66950__auto___67097){
return (function (state_67075){
var state_val_67076 = (state_67075[(1)]);
if((state_val_67076 === (7))){
var inst_67071 = (state_67075[(2)]);
var state_67075__$1 = state_67075;
var statearr_67077_67098 = state_67075__$1;
(statearr_67077_67098[(2)] = inst_67071);

(statearr_67077_67098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67076 === (1))){
var state_67075__$1 = state_67075;
var statearr_67078_67099 = state_67075__$1;
(statearr_67078_67099[(2)] = null);

(statearr_67078_67099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67076 === (4))){
var inst_67054 = (state_67075[(7)]);
var inst_67054__$1 = (state_67075[(2)]);
var inst_67055 = (inst_67054__$1 == null);
var state_67075__$1 = (function (){var statearr_67079 = state_67075;
(statearr_67079[(7)] = inst_67054__$1);

return statearr_67079;
})();
if(cljs.core.truth_(inst_67055)){
var statearr_67080_67100 = state_67075__$1;
(statearr_67080_67100[(1)] = (5));

} else {
var statearr_67081_67101 = state_67075__$1;
(statearr_67081_67101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67076 === (13))){
var state_67075__$1 = state_67075;
var statearr_67082_67102 = state_67075__$1;
(statearr_67082_67102[(2)] = null);

(statearr_67082_67102[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67076 === (6))){
var inst_67054 = (state_67075[(7)]);
var state_67075__$1 = state_67075;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_67075__$1,(11),to,inst_67054);
} else {
if((state_val_67076 === (3))){
var inst_67073 = (state_67075[(2)]);
var state_67075__$1 = state_67075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67075__$1,inst_67073);
} else {
if((state_val_67076 === (12))){
var state_67075__$1 = state_67075;
var statearr_67083_67103 = state_67075__$1;
(statearr_67083_67103[(2)] = null);

(statearr_67083_67103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67076 === (2))){
var state_67075__$1 = state_67075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67075__$1,(4),from);
} else {
if((state_val_67076 === (11))){
var inst_67064 = (state_67075[(2)]);
var state_67075__$1 = state_67075;
if(cljs.core.truth_(inst_67064)){
var statearr_67084_67104 = state_67075__$1;
(statearr_67084_67104[(1)] = (12));

} else {
var statearr_67085_67105 = state_67075__$1;
(statearr_67085_67105[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67076 === (9))){
var state_67075__$1 = state_67075;
var statearr_67086_67106 = state_67075__$1;
(statearr_67086_67106[(2)] = null);

(statearr_67086_67106[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67076 === (5))){
var state_67075__$1 = state_67075;
if(cljs.core.truth_(close_QMARK_)){
var statearr_67087_67107 = state_67075__$1;
(statearr_67087_67107[(1)] = (8));

} else {
var statearr_67088_67108 = state_67075__$1;
(statearr_67088_67108[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67076 === (14))){
var inst_67069 = (state_67075[(2)]);
var state_67075__$1 = state_67075;
var statearr_67089_67109 = state_67075__$1;
(statearr_67089_67109[(2)] = inst_67069);

(statearr_67089_67109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67076 === (10))){
var inst_67061 = (state_67075[(2)]);
var state_67075__$1 = state_67075;
var statearr_67090_67110 = state_67075__$1;
(statearr_67090_67110[(2)] = inst_67061);

(statearr_67090_67110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67076 === (8))){
var inst_67058 = cljs.core.async.close_BANG_.call(null,to);
var state_67075__$1 = state_67075;
var statearr_67091_67111 = state_67075__$1;
(statearr_67091_67111[(2)] = inst_67058);

(statearr_67091_67111[(1)] = (10));


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
});})(c__66950__auto___67097))
;
return ((function (switch__66860__auto__,c__66950__auto___67097){
return (function() {
var cljs$core$async$state_machine__66861__auto__ = null;
var cljs$core$async$state_machine__66861__auto____0 = (function (){
var statearr_67092 = [null,null,null,null,null,null,null,null];
(statearr_67092[(0)] = cljs$core$async$state_machine__66861__auto__);

(statearr_67092[(1)] = (1));

return statearr_67092;
});
var cljs$core$async$state_machine__66861__auto____1 = (function (state_67075){
while(true){
var ret_value__66862__auto__ = (function (){try{while(true){
var result__66863__auto__ = switch__66860__auto__.call(null,state_67075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__66863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66863__auto__;
}
break;
}
}catch (e67093){if((e67093 instanceof Object)){
var ex__66864__auto__ = e67093;
var statearr_67094_67112 = state_67075;
(statearr_67094_67112[(5)] = ex__66864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__66862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67113 = state_67075;
state_67075 = G__67113;
continue;
} else {
return ret_value__66862__auto__;
}
break;
}
});
cljs$core$async$state_machine__66861__auto__ = function(state_67075){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__66861__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__66861__auto____1.call(this,state_67075);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__66861__auto____0;
cljs$core$async$state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__66861__auto____1;
return cljs$core$async$state_machine__66861__auto__;
})()
;})(switch__66860__auto__,c__66950__auto___67097))
})();
var state__66952__auto__ = (function (){var statearr_67095 = f__66951__auto__.call(null);
(statearr_67095[(6)] = c__66950__auto___67097);

return statearr_67095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__66952__auto__);
});})(c__66950__auto___67097))
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
return (function (p__67114){
var vec__67115 = p__67114;
var v = cljs.core.nth.call(null,vec__67115,(0),null);
var p = cljs.core.nth.call(null,vec__67115,(1),null);
var job = vec__67115;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__66950__auto___67286 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__66950__auto___67286,res,vec__67115,v,p,job,jobs,results){
return (function (){
var f__66951__auto__ = (function (){var switch__66860__auto__ = ((function (c__66950__auto___67286,res,vec__67115,v,p,job,jobs,results){
return (function (state_67122){
var state_val_67123 = (state_67122[(1)]);
if((state_val_67123 === (1))){
var state_67122__$1 = state_67122;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_67122__$1,(2),res,v);
} else {
if((state_val_67123 === (2))){
var inst_67119 = (state_67122[(2)]);
var inst_67120 = cljs.core.async.close_BANG_.call(null,res);
var state_67122__$1 = (function (){var statearr_67124 = state_67122;
(statearr_67124[(7)] = inst_67119);

return statearr_67124;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67122__$1,inst_67120);
} else {
return null;
}
}
});})(c__66950__auto___67286,res,vec__67115,v,p,job,jobs,results))
;
return ((function (switch__66860__auto__,c__66950__auto___67286,res,vec__67115,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__66861__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__66861__auto____0 = (function (){
var statearr_67125 = [null,null,null,null,null,null,null,null];
(statearr_67125[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__66861__auto__);

(statearr_67125[(1)] = (1));

return statearr_67125;
});
var cljs$core$async$pipeline_STAR__$_state_machine__66861__auto____1 = (function (state_67122){
while(true){
var ret_value__66862__auto__ = (function (){try{while(true){
var result__66863__auto__ = switch__66860__auto__.call(null,state_67122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__66863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66863__auto__;
}
break;
}
}catch (e67126){if((e67126 instanceof Object)){
var ex__66864__auto__ = e67126;
var statearr_67127_67287 = state_67122;
(statearr_67127_67287[(5)] = ex__66864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__66862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67288 = state_67122;
state_67122 = G__67288;
continue;
} else {
return ret_value__66862__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__66861__auto__ = function(state_67122){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__66861__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__66861__auto____1.call(this,state_67122);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__66861__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__66861__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__66861__auto__;
})()
;})(switch__66860__auto__,c__66950__auto___67286,res,vec__67115,v,p,job,jobs,results))
})();
var state__66952__auto__ = (function (){var statearr_67128 = f__66951__auto__.call(null);
(statearr_67128[(6)] = c__66950__auto___67286);

return statearr_67128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__66952__auto__);
});})(c__66950__auto___67286,res,vec__67115,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__67129){
var vec__67130 = p__67129;
var v = cljs.core.nth.call(null,vec__67130,(0),null);
var p = cljs.core.nth.call(null,vec__67130,(1),null);
var job = vec__67130;
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
var n__63804__auto___67289 = n;
var __67290 = (0);
while(true){
if((__67290 < n__63804__auto___67289)){
var G__67133_67291 = type;
var G__67133_67292__$1 = (((G__67133_67291 instanceof cljs.core.Keyword))?G__67133_67291.fqn:null);
switch (G__67133_67292__$1) {
case "compute":
var c__66950__auto___67294 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__67290,c__66950__auto___67294,G__67133_67291,G__67133_67292__$1,n__63804__auto___67289,jobs,results,process,async){
return (function (){
var f__66951__auto__ = (function (){var switch__66860__auto__ = ((function (__67290,c__66950__auto___67294,G__67133_67291,G__67133_67292__$1,n__63804__auto___67289,jobs,results,process,async){
return (function (state_67146){
var state_val_67147 = (state_67146[(1)]);
if((state_val_67147 === (1))){
var state_67146__$1 = state_67146;
var statearr_67148_67295 = state_67146__$1;
(statearr_67148_67295[(2)] = null);

(statearr_67148_67295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67147 === (2))){
var state_67146__$1 = state_67146;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67146__$1,(4),jobs);
} else {
if((state_val_67147 === (3))){
var inst_67144 = (state_67146[(2)]);
var state_67146__$1 = state_67146;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67146__$1,inst_67144);
} else {
if((state_val_67147 === (4))){
var inst_67136 = (state_67146[(2)]);
var inst_67137 = process.call(null,inst_67136);
var state_67146__$1 = state_67146;
if(cljs.core.truth_(inst_67137)){
var statearr_67149_67296 = state_67146__$1;
(statearr_67149_67296[(1)] = (5));

} else {
var statearr_67150_67297 = state_67146__$1;
(statearr_67150_67297[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67147 === (5))){
var state_67146__$1 = state_67146;
var statearr_67151_67298 = state_67146__$1;
(statearr_67151_67298[(2)] = null);

(statearr_67151_67298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67147 === (6))){
var state_67146__$1 = state_67146;
var statearr_67152_67299 = state_67146__$1;
(statearr_67152_67299[(2)] = null);

(statearr_67152_67299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67147 === (7))){
var inst_67142 = (state_67146[(2)]);
var state_67146__$1 = state_67146;
var statearr_67153_67300 = state_67146__$1;
(statearr_67153_67300[(2)] = inst_67142);

(statearr_67153_67300[(1)] = (3));


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
});})(__67290,c__66950__auto___67294,G__67133_67291,G__67133_67292__$1,n__63804__auto___67289,jobs,results,process,async))
;
return ((function (__67290,switch__66860__auto__,c__66950__auto___67294,G__67133_67291,G__67133_67292__$1,n__63804__auto___67289,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__66861__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__66861__auto____0 = (function (){
var statearr_67154 = [null,null,null,null,null,null,null];
(statearr_67154[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__66861__auto__);

(statearr_67154[(1)] = (1));

return statearr_67154;
});
var cljs$core$async$pipeline_STAR__$_state_machine__66861__auto____1 = (function (state_67146){
while(true){
var ret_value__66862__auto__ = (function (){try{while(true){
var result__66863__auto__ = switch__66860__auto__.call(null,state_67146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__66863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66863__auto__;
}
break;
}
}catch (e67155){if((e67155 instanceof Object)){
var ex__66864__auto__ = e67155;
var statearr_67156_67301 = state_67146;
(statearr_67156_67301[(5)] = ex__66864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67155;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__66862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67302 = state_67146;
state_67146 = G__67302;
continue;
} else {
return ret_value__66862__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__66861__auto__ = function(state_67146){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__66861__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__66861__auto____1.call(this,state_67146);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__66861__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__66861__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__66861__auto__;
})()
;})(__67290,switch__66860__auto__,c__66950__auto___67294,G__67133_67291,G__67133_67292__$1,n__63804__auto___67289,jobs,results,process,async))
})();
var state__66952__auto__ = (function (){var statearr_67157 = f__66951__auto__.call(null);
(statearr_67157[(6)] = c__66950__auto___67294);

return statearr_67157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__66952__auto__);
});})(__67290,c__66950__auto___67294,G__67133_67291,G__67133_67292__$1,n__63804__auto___67289,jobs,results,process,async))
);


break;
case "async":
var c__66950__auto___67303 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__67290,c__66950__auto___67303,G__67133_67291,G__67133_67292__$1,n__63804__auto___67289,jobs,results,process,async){
return (function (){
var f__66951__auto__ = (function (){var switch__66860__auto__ = ((function (__67290,c__66950__auto___67303,G__67133_67291,G__67133_67292__$1,n__63804__auto___67289,jobs,results,process,async){
return (function (state_67170){
var state_val_67171 = (state_67170[(1)]);
if((state_val_67171 === (1))){
var state_67170__$1 = state_67170;
var statearr_67172_67304 = state_67170__$1;
(statearr_67172_67304[(2)] = null);

(statearr_67172_67304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67171 === (2))){
var state_67170__$1 = state_67170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67170__$1,(4),jobs);
} else {
if((state_val_67171 === (3))){
var inst_67168 = (state_67170[(2)]);
var state_67170__$1 = state_67170;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67170__$1,inst_67168);
} else {
if((state_val_67171 === (4))){
var inst_67160 = (state_67170[(2)]);
var inst_67161 = async.call(null,inst_67160);
var state_67170__$1 = state_67170;
if(cljs.core.truth_(inst_67161)){
var statearr_67173_67305 = state_67170__$1;
(statearr_67173_67305[(1)] = (5));

} else {
var statearr_67174_67306 = state_67170__$1;
(statearr_67174_67306[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67171 === (5))){
var state_67170__$1 = state_67170;
var statearr_67175_67307 = state_67170__$1;
(statearr_67175_67307[(2)] = null);

(statearr_67175_67307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67171 === (6))){
var state_67170__$1 = state_67170;
var statearr_67176_67308 = state_67170__$1;
(statearr_67176_67308[(2)] = null);

(statearr_67176_67308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67171 === (7))){
var inst_67166 = (state_67170[(2)]);
var state_67170__$1 = state_67170;
var statearr_67177_67309 = state_67170__$1;
(statearr_67177_67309[(2)] = inst_67166);

(statearr_67177_67309[(1)] = (3));


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
});})(__67290,c__66950__auto___67303,G__67133_67291,G__67133_67292__$1,n__63804__auto___67289,jobs,results,process,async))
;
return ((function (__67290,switch__66860__auto__,c__66950__auto___67303,G__67133_67291,G__67133_67292__$1,n__63804__auto___67289,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__66861__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__66861__auto____0 = (function (){
var statearr_67178 = [null,null,null,null,null,null,null];
(statearr_67178[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__66861__auto__);

(statearr_67178[(1)] = (1));

return statearr_67178;
});
var cljs$core$async$pipeline_STAR__$_state_machine__66861__auto____1 = (function (state_67170){
while(true){
var ret_value__66862__auto__ = (function (){try{while(true){
var result__66863__auto__ = switch__66860__auto__.call(null,state_67170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__66863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66863__auto__;
}
break;
}
}catch (e67179){if((e67179 instanceof Object)){
var ex__66864__auto__ = e67179;
var statearr_67180_67310 = state_67170;
(statearr_67180_67310[(5)] = ex__66864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__66862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67311 = state_67170;
state_67170 = G__67311;
continue;
} else {
return ret_value__66862__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__66861__auto__ = function(state_67170){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__66861__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__66861__auto____1.call(this,state_67170);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__66861__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__66861__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__66861__auto__;
})()
;})(__67290,switch__66860__auto__,c__66950__auto___67303,G__67133_67291,G__67133_67292__$1,n__63804__auto___67289,jobs,results,process,async))
})();
var state__66952__auto__ = (function (){var statearr_67181 = f__66951__auto__.call(null);
(statearr_67181[(6)] = c__66950__auto___67303);

return statearr_67181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__66952__auto__);
});})(__67290,c__66950__auto___67303,G__67133_67291,G__67133_67292__$1,n__63804__auto___67289,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67133_67292__$1)].join('')));

}

var G__67312 = (__67290 + (1));
__67290 = G__67312;
continue;
} else {
}
break;
}

var c__66950__auto___67313 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__66950__auto___67313,jobs,results,process,async){
return (function (){
var f__66951__auto__ = (function (){var switch__66860__auto__ = ((function (c__66950__auto___67313,jobs,results,process,async){
return (function (state_67203){
var state_val_67204 = (state_67203[(1)]);
if((state_val_67204 === (1))){
var state_67203__$1 = state_67203;
var statearr_67205_67314 = state_67203__$1;
(statearr_67205_67314[(2)] = null);

(statearr_67205_67314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67204 === (2))){
var state_67203__$1 = state_67203;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67203__$1,(4),from);
} else {
if((state_val_67204 === (3))){
var inst_67201 = (state_67203[(2)]);
var state_67203__$1 = state_67203;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67203__$1,inst_67201);
} else {
if((state_val_67204 === (4))){
var inst_67184 = (state_67203[(7)]);
var inst_67184__$1 = (state_67203[(2)]);
var inst_67185 = (inst_67184__$1 == null);
var state_67203__$1 = (function (){var statearr_67206 = state_67203;
(statearr_67206[(7)] = inst_67184__$1);

return statearr_67206;
})();
if(cljs.core.truth_(inst_67185)){
var statearr_67207_67315 = state_67203__$1;
(statearr_67207_67315[(1)] = (5));

} else {
var statearr_67208_67316 = state_67203__$1;
(statearr_67208_67316[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67204 === (5))){
var inst_67187 = cljs.core.async.close_BANG_.call(null,jobs);
var state_67203__$1 = state_67203;
var statearr_67209_67317 = state_67203__$1;
(statearr_67209_67317[(2)] = inst_67187);

(statearr_67209_67317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67204 === (6))){
var inst_67189 = (state_67203[(8)]);
var inst_67184 = (state_67203[(7)]);
var inst_67189__$1 = cljs.core.async.chan.call(null,(1));
var inst_67190 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_67191 = [inst_67184,inst_67189__$1];
var inst_67192 = (new cljs.core.PersistentVector(null,2,(5),inst_67190,inst_67191,null));
var state_67203__$1 = (function (){var statearr_67210 = state_67203;
(statearr_67210[(8)] = inst_67189__$1);

return statearr_67210;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_67203__$1,(8),jobs,inst_67192);
} else {
if((state_val_67204 === (7))){
var inst_67199 = (state_67203[(2)]);
var state_67203__$1 = state_67203;
var statearr_67211_67318 = state_67203__$1;
(statearr_67211_67318[(2)] = inst_67199);

(statearr_67211_67318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67204 === (8))){
var inst_67189 = (state_67203[(8)]);
var inst_67194 = (state_67203[(2)]);
var state_67203__$1 = (function (){var statearr_67212 = state_67203;
(statearr_67212[(9)] = inst_67194);

return statearr_67212;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_67203__$1,(9),results,inst_67189);
} else {
if((state_val_67204 === (9))){
var inst_67196 = (state_67203[(2)]);
var state_67203__$1 = (function (){var statearr_67213 = state_67203;
(statearr_67213[(10)] = inst_67196);

return statearr_67213;
})();
var statearr_67214_67319 = state_67203__$1;
(statearr_67214_67319[(2)] = null);

(statearr_67214_67319[(1)] = (2));


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
});})(c__66950__auto___67313,jobs,results,process,async))
;
return ((function (switch__66860__auto__,c__66950__auto___67313,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__66861__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__66861__auto____0 = (function (){
var statearr_67215 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_67215[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__66861__auto__);

(statearr_67215[(1)] = (1));

return statearr_67215;
});
var cljs$core$async$pipeline_STAR__$_state_machine__66861__auto____1 = (function (state_67203){
while(true){
var ret_value__66862__auto__ = (function (){try{while(true){
var result__66863__auto__ = switch__66860__auto__.call(null,state_67203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__66863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66863__auto__;
}
break;
}
}catch (e67216){if((e67216 instanceof Object)){
var ex__66864__auto__ = e67216;
var statearr_67217_67320 = state_67203;
(statearr_67217_67320[(5)] = ex__66864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67216;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__66862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67321 = state_67203;
state_67203 = G__67321;
continue;
} else {
return ret_value__66862__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__66861__auto__ = function(state_67203){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__66861__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__66861__auto____1.call(this,state_67203);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__66861__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__66861__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__66861__auto__;
})()
;})(switch__66860__auto__,c__66950__auto___67313,jobs,results,process,async))
})();
var state__66952__auto__ = (function (){var statearr_67218 = f__66951__auto__.call(null);
(statearr_67218[(6)] = c__66950__auto___67313);

return statearr_67218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__66952__auto__);
});})(c__66950__auto___67313,jobs,results,process,async))
);


var c__66950__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__66950__auto__,jobs,results,process,async){
return (function (){
var f__66951__auto__ = (function (){var switch__66860__auto__ = ((function (c__66950__auto__,jobs,results,process,async){
return (function (state_67256){
var state_val_67257 = (state_67256[(1)]);
if((state_val_67257 === (7))){
var inst_67252 = (state_67256[(2)]);
var state_67256__$1 = state_67256;
var statearr_67258_67322 = state_67256__$1;
(statearr_67258_67322[(2)] = inst_67252);

(statearr_67258_67322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67257 === (20))){
var state_67256__$1 = state_67256;
var statearr_67259_67323 = state_67256__$1;
(statearr_67259_67323[(2)] = null);

(statearr_67259_67323[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67257 === (1))){
var state_67256__$1 = state_67256;
var statearr_67260_67324 = state_67256__$1;
(statearr_67260_67324[(2)] = null);

(statearr_67260_67324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67257 === (4))){
var inst_67221 = (state_67256[(7)]);
var inst_67221__$1 = (state_67256[(2)]);
var inst_67222 = (inst_67221__$1 == null);
var state_67256__$1 = (function (){var statearr_67261 = state_67256;
(statearr_67261[(7)] = inst_67221__$1);

return statearr_67261;
})();
if(cljs.core.truth_(inst_67222)){
var statearr_67262_67325 = state_67256__$1;
(statearr_67262_67325[(1)] = (5));

} else {
var statearr_67263_67326 = state_67256__$1;
(statearr_67263_67326[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67257 === (15))){
var inst_67234 = (state_67256[(8)]);
var state_67256__$1 = state_67256;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_67256__$1,(18),to,inst_67234);
} else {
if((state_val_67257 === (21))){
var inst_67247 = (state_67256[(2)]);
var state_67256__$1 = state_67256;
var statearr_67264_67327 = state_67256__$1;
(statearr_67264_67327[(2)] = inst_67247);

(statearr_67264_67327[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67257 === (13))){
var inst_67249 = (state_67256[(2)]);
var state_67256__$1 = (function (){var statearr_67265 = state_67256;
(statearr_67265[(9)] = inst_67249);

return statearr_67265;
})();
var statearr_67266_67328 = state_67256__$1;
(statearr_67266_67328[(2)] = null);

(statearr_67266_67328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67257 === (6))){
var inst_67221 = (state_67256[(7)]);
var state_67256__$1 = state_67256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67256__$1,(11),inst_67221);
} else {
if((state_val_67257 === (17))){
var inst_67242 = (state_67256[(2)]);
var state_67256__$1 = state_67256;
if(cljs.core.truth_(inst_67242)){
var statearr_67267_67329 = state_67256__$1;
(statearr_67267_67329[(1)] = (19));

} else {
var statearr_67268_67330 = state_67256__$1;
(statearr_67268_67330[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67257 === (3))){
var inst_67254 = (state_67256[(2)]);
var state_67256__$1 = state_67256;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67256__$1,inst_67254);
} else {
if((state_val_67257 === (12))){
var inst_67231 = (state_67256[(10)]);
var state_67256__$1 = state_67256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67256__$1,(14),inst_67231);
} else {
if((state_val_67257 === (2))){
var state_67256__$1 = state_67256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67256__$1,(4),results);
} else {
if((state_val_67257 === (19))){
var state_67256__$1 = state_67256;
var statearr_67269_67331 = state_67256__$1;
(statearr_67269_67331[(2)] = null);

(statearr_67269_67331[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67257 === (11))){
var inst_67231 = (state_67256[(2)]);
var state_67256__$1 = (function (){var statearr_67270 = state_67256;
(statearr_67270[(10)] = inst_67231);

return statearr_67270;
})();
var statearr_67271_67332 = state_67256__$1;
(statearr_67271_67332[(2)] = null);

(statearr_67271_67332[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67257 === (9))){
var state_67256__$1 = state_67256;
var statearr_67272_67333 = state_67256__$1;
(statearr_67272_67333[(2)] = null);

(statearr_67272_67333[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67257 === (5))){
var state_67256__$1 = state_67256;
if(cljs.core.truth_(close_QMARK_)){
var statearr_67273_67334 = state_67256__$1;
(statearr_67273_67334[(1)] = (8));

} else {
var statearr_67274_67335 = state_67256__$1;
(statearr_67274_67335[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67257 === (14))){
var inst_67236 = (state_67256[(11)]);
var inst_67234 = (state_67256[(8)]);
var inst_67234__$1 = (state_67256[(2)]);
var inst_67235 = (inst_67234__$1 == null);
var inst_67236__$1 = cljs.core.not.call(null,inst_67235);
var state_67256__$1 = (function (){var statearr_67275 = state_67256;
(statearr_67275[(11)] = inst_67236__$1);

(statearr_67275[(8)] = inst_67234__$1);

return statearr_67275;
})();
if(inst_67236__$1){
var statearr_67276_67336 = state_67256__$1;
(statearr_67276_67336[(1)] = (15));

} else {
var statearr_67277_67337 = state_67256__$1;
(statearr_67277_67337[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67257 === (16))){
var inst_67236 = (state_67256[(11)]);
var state_67256__$1 = state_67256;
var statearr_67278_67338 = state_67256__$1;
(statearr_67278_67338[(2)] = inst_67236);

(statearr_67278_67338[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67257 === (10))){
var inst_67228 = (state_67256[(2)]);
var state_67256__$1 = state_67256;
var statearr_67279_67339 = state_67256__$1;
(statearr_67279_67339[(2)] = inst_67228);

(statearr_67279_67339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67257 === (18))){
var inst_67239 = (state_67256[(2)]);
var state_67256__$1 = state_67256;
var statearr_67280_67340 = state_67256__$1;
(statearr_67280_67340[(2)] = inst_67239);

(statearr_67280_67340[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67257 === (8))){
var inst_67225 = cljs.core.async.close_BANG_.call(null,to);
var state_67256__$1 = state_67256;
var statearr_67281_67341 = state_67256__$1;
(statearr_67281_67341[(2)] = inst_67225);

(statearr_67281_67341[(1)] = (10));


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
});})(c__66950__auto__,jobs,results,process,async))
;
return ((function (switch__66860__auto__,c__66950__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__66861__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__66861__auto____0 = (function (){
var statearr_67282 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_67282[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__66861__auto__);

(statearr_67282[(1)] = (1));

return statearr_67282;
});
var cljs$core$async$pipeline_STAR__$_state_machine__66861__auto____1 = (function (state_67256){
while(true){
var ret_value__66862__auto__ = (function (){try{while(true){
var result__66863__auto__ = switch__66860__auto__.call(null,state_67256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__66863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66863__auto__;
}
break;
}
}catch (e67283){if((e67283 instanceof Object)){
var ex__66864__auto__ = e67283;
var statearr_67284_67342 = state_67256;
(statearr_67284_67342[(5)] = ex__66864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__66862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67343 = state_67256;
state_67256 = G__67343;
continue;
} else {
return ret_value__66862__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__66861__auto__ = function(state_67256){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__66861__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__66861__auto____1.call(this,state_67256);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__66861__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__66861__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__66861__auto__;
})()
;})(switch__66860__auto__,c__66950__auto__,jobs,results,process,async))
})();
var state__66952__auto__ = (function (){var statearr_67285 = f__66951__auto__.call(null);
(statearr_67285[(6)] = c__66950__auto__);

return statearr_67285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__66952__auto__);
});})(c__66950__auto__,jobs,results,process,async))
);

return c__66950__auto__;
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
var G__67345 = arguments.length;
switch (G__67345) {
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
var G__67348 = arguments.length;
switch (G__67348) {
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
var G__67351 = arguments.length;
switch (G__67351) {
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
var c__66950__auto___67400 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__66950__auto___67400,tc,fc){
return (function (){
var f__66951__auto__ = (function (){var switch__66860__auto__ = ((function (c__66950__auto___67400,tc,fc){
return (function (state_67377){
var state_val_67378 = (state_67377[(1)]);
if((state_val_67378 === (7))){
var inst_67373 = (state_67377[(2)]);
var state_67377__$1 = state_67377;
var statearr_67379_67401 = state_67377__$1;
(statearr_67379_67401[(2)] = inst_67373);

(statearr_67379_67401[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67378 === (1))){
var state_67377__$1 = state_67377;
var statearr_67380_67402 = state_67377__$1;
(statearr_67380_67402[(2)] = null);

(statearr_67380_67402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67378 === (4))){
var inst_67354 = (state_67377[(7)]);
var inst_67354__$1 = (state_67377[(2)]);
var inst_67355 = (inst_67354__$1 == null);
var state_67377__$1 = (function (){var statearr_67381 = state_67377;
(statearr_67381[(7)] = inst_67354__$1);

return statearr_67381;
})();
if(cljs.core.truth_(inst_67355)){
var statearr_67382_67403 = state_67377__$1;
(statearr_67382_67403[(1)] = (5));

} else {
var statearr_67383_67404 = state_67377__$1;
(statearr_67383_67404[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67378 === (13))){
var state_67377__$1 = state_67377;
var statearr_67384_67405 = state_67377__$1;
(statearr_67384_67405[(2)] = null);

(statearr_67384_67405[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67378 === (6))){
var inst_67354 = (state_67377[(7)]);
var inst_67360 = p.call(null,inst_67354);
var state_67377__$1 = state_67377;
if(cljs.core.truth_(inst_67360)){
var statearr_67385_67406 = state_67377__$1;
(statearr_67385_67406[(1)] = (9));

} else {
var statearr_67386_67407 = state_67377__$1;
(statearr_67386_67407[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67378 === (3))){
var inst_67375 = (state_67377[(2)]);
var state_67377__$1 = state_67377;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67377__$1,inst_67375);
} else {
if((state_val_67378 === (12))){
var state_67377__$1 = state_67377;
var statearr_67387_67408 = state_67377__$1;
(statearr_67387_67408[(2)] = null);

(statearr_67387_67408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67378 === (2))){
var state_67377__$1 = state_67377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67377__$1,(4),ch);
} else {
if((state_val_67378 === (11))){
var inst_67354 = (state_67377[(7)]);
var inst_67364 = (state_67377[(2)]);
var state_67377__$1 = state_67377;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_67377__$1,(8),inst_67364,inst_67354);
} else {
if((state_val_67378 === (9))){
var state_67377__$1 = state_67377;
var statearr_67388_67409 = state_67377__$1;
(statearr_67388_67409[(2)] = tc);

(statearr_67388_67409[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67378 === (5))){
var inst_67357 = cljs.core.async.close_BANG_.call(null,tc);
var inst_67358 = cljs.core.async.close_BANG_.call(null,fc);
var state_67377__$1 = (function (){var statearr_67389 = state_67377;
(statearr_67389[(8)] = inst_67357);

return statearr_67389;
})();
var statearr_67390_67410 = state_67377__$1;
(statearr_67390_67410[(2)] = inst_67358);

(statearr_67390_67410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67378 === (14))){
var inst_67371 = (state_67377[(2)]);
var state_67377__$1 = state_67377;
var statearr_67391_67411 = state_67377__$1;
(statearr_67391_67411[(2)] = inst_67371);

(statearr_67391_67411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67378 === (10))){
var state_67377__$1 = state_67377;
var statearr_67392_67412 = state_67377__$1;
(statearr_67392_67412[(2)] = fc);

(statearr_67392_67412[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67378 === (8))){
var inst_67366 = (state_67377[(2)]);
var state_67377__$1 = state_67377;
if(cljs.core.truth_(inst_67366)){
var statearr_67393_67413 = state_67377__$1;
(statearr_67393_67413[(1)] = (12));

} else {
var statearr_67394_67414 = state_67377__$1;
(statearr_67394_67414[(1)] = (13));

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
});})(c__66950__auto___67400,tc,fc))
;
return ((function (switch__66860__auto__,c__66950__auto___67400,tc,fc){
return (function() {
var cljs$core$async$state_machine__66861__auto__ = null;
var cljs$core$async$state_machine__66861__auto____0 = (function (){
var statearr_67395 = [null,null,null,null,null,null,null,null,null];
(statearr_67395[(0)] = cljs$core$async$state_machine__66861__auto__);

(statearr_67395[(1)] = (1));

return statearr_67395;
});
var cljs$core$async$state_machine__66861__auto____1 = (function (state_67377){
while(true){
var ret_value__66862__auto__ = (function (){try{while(true){
var result__66863__auto__ = switch__66860__auto__.call(null,state_67377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__66863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66863__auto__;
}
break;
}
}catch (e67396){if((e67396 instanceof Object)){
var ex__66864__auto__ = e67396;
var statearr_67397_67415 = state_67377;
(statearr_67397_67415[(5)] = ex__66864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__66862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67416 = state_67377;
state_67377 = G__67416;
continue;
} else {
return ret_value__66862__auto__;
}
break;
}
});
cljs$core$async$state_machine__66861__auto__ = function(state_67377){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__66861__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__66861__auto____1.call(this,state_67377);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__66861__auto____0;
cljs$core$async$state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__66861__auto____1;
return cljs$core$async$state_machine__66861__auto__;
})()
;})(switch__66860__auto__,c__66950__auto___67400,tc,fc))
})();
var state__66952__auto__ = (function (){var statearr_67398 = f__66951__auto__.call(null);
(statearr_67398[(6)] = c__66950__auto___67400);

return statearr_67398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__66952__auto__);
});})(c__66950__auto___67400,tc,fc))
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
var c__66950__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__66950__auto__){
return (function (){
var f__66951__auto__ = (function (){var switch__66860__auto__ = ((function (c__66950__auto__){
return (function (state_67437){
var state_val_67438 = (state_67437[(1)]);
if((state_val_67438 === (7))){
var inst_67433 = (state_67437[(2)]);
var state_67437__$1 = state_67437;
var statearr_67439_67457 = state_67437__$1;
(statearr_67439_67457[(2)] = inst_67433);

(statearr_67439_67457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67438 === (1))){
var inst_67417 = init;
var state_67437__$1 = (function (){var statearr_67440 = state_67437;
(statearr_67440[(7)] = inst_67417);

return statearr_67440;
})();
var statearr_67441_67458 = state_67437__$1;
(statearr_67441_67458[(2)] = null);

(statearr_67441_67458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67438 === (4))){
var inst_67420 = (state_67437[(8)]);
var inst_67420__$1 = (state_67437[(2)]);
var inst_67421 = (inst_67420__$1 == null);
var state_67437__$1 = (function (){var statearr_67442 = state_67437;
(statearr_67442[(8)] = inst_67420__$1);

return statearr_67442;
})();
if(cljs.core.truth_(inst_67421)){
var statearr_67443_67459 = state_67437__$1;
(statearr_67443_67459[(1)] = (5));

} else {
var statearr_67444_67460 = state_67437__$1;
(statearr_67444_67460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67438 === (6))){
var inst_67424 = (state_67437[(9)]);
var inst_67420 = (state_67437[(8)]);
var inst_67417 = (state_67437[(7)]);
var inst_67424__$1 = f.call(null,inst_67417,inst_67420);
var inst_67425 = cljs.core.reduced_QMARK_.call(null,inst_67424__$1);
var state_67437__$1 = (function (){var statearr_67445 = state_67437;
(statearr_67445[(9)] = inst_67424__$1);

return statearr_67445;
})();
if(inst_67425){
var statearr_67446_67461 = state_67437__$1;
(statearr_67446_67461[(1)] = (8));

} else {
var statearr_67447_67462 = state_67437__$1;
(statearr_67447_67462[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67438 === (3))){
var inst_67435 = (state_67437[(2)]);
var state_67437__$1 = state_67437;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67437__$1,inst_67435);
} else {
if((state_val_67438 === (2))){
var state_67437__$1 = state_67437;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67437__$1,(4),ch);
} else {
if((state_val_67438 === (9))){
var inst_67424 = (state_67437[(9)]);
var inst_67417 = inst_67424;
var state_67437__$1 = (function (){var statearr_67448 = state_67437;
(statearr_67448[(7)] = inst_67417);

return statearr_67448;
})();
var statearr_67449_67463 = state_67437__$1;
(statearr_67449_67463[(2)] = null);

(statearr_67449_67463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67438 === (5))){
var inst_67417 = (state_67437[(7)]);
var state_67437__$1 = state_67437;
var statearr_67450_67464 = state_67437__$1;
(statearr_67450_67464[(2)] = inst_67417);

(statearr_67450_67464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67438 === (10))){
var inst_67431 = (state_67437[(2)]);
var state_67437__$1 = state_67437;
var statearr_67451_67465 = state_67437__$1;
(statearr_67451_67465[(2)] = inst_67431);

(statearr_67451_67465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67438 === (8))){
var inst_67424 = (state_67437[(9)]);
var inst_67427 = cljs.core.deref.call(null,inst_67424);
var state_67437__$1 = state_67437;
var statearr_67452_67466 = state_67437__$1;
(statearr_67452_67466[(2)] = inst_67427);

(statearr_67452_67466[(1)] = (10));


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
});})(c__66950__auto__))
;
return ((function (switch__66860__auto__,c__66950__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__66861__auto__ = null;
var cljs$core$async$reduce_$_state_machine__66861__auto____0 = (function (){
var statearr_67453 = [null,null,null,null,null,null,null,null,null,null];
(statearr_67453[(0)] = cljs$core$async$reduce_$_state_machine__66861__auto__);

(statearr_67453[(1)] = (1));

return statearr_67453;
});
var cljs$core$async$reduce_$_state_machine__66861__auto____1 = (function (state_67437){
while(true){
var ret_value__66862__auto__ = (function (){try{while(true){
var result__66863__auto__ = switch__66860__auto__.call(null,state_67437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__66863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66863__auto__;
}
break;
}
}catch (e67454){if((e67454 instanceof Object)){
var ex__66864__auto__ = e67454;
var statearr_67455_67467 = state_67437;
(statearr_67455_67467[(5)] = ex__66864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__66862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67468 = state_67437;
state_67437 = G__67468;
continue;
} else {
return ret_value__66862__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__66861__auto__ = function(state_67437){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__66861__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__66861__auto____1.call(this,state_67437);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__66861__auto____0;
cljs$core$async$reduce_$_state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__66861__auto____1;
return cljs$core$async$reduce_$_state_machine__66861__auto__;
})()
;})(switch__66860__auto__,c__66950__auto__))
})();
var state__66952__auto__ = (function (){var statearr_67456 = f__66951__auto__.call(null);
(statearr_67456[(6)] = c__66950__auto__);

return statearr_67456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__66952__auto__);
});})(c__66950__auto__))
);

return c__66950__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__66950__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__66950__auto__,f__$1){
return (function (){
var f__66951__auto__ = (function (){var switch__66860__auto__ = ((function (c__66950__auto__,f__$1){
return (function (state_67474){
var state_val_67475 = (state_67474[(1)]);
if((state_val_67475 === (1))){
var inst_67469 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_67474__$1 = state_67474;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67474__$1,(2),inst_67469);
} else {
if((state_val_67475 === (2))){
var inst_67471 = (state_67474[(2)]);
var inst_67472 = f__$1.call(null,inst_67471);
var state_67474__$1 = state_67474;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67474__$1,inst_67472);
} else {
return null;
}
}
});})(c__66950__auto__,f__$1))
;
return ((function (switch__66860__auto__,c__66950__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__66861__auto__ = null;
var cljs$core$async$transduce_$_state_machine__66861__auto____0 = (function (){
var statearr_67476 = [null,null,null,null,null,null,null];
(statearr_67476[(0)] = cljs$core$async$transduce_$_state_machine__66861__auto__);

(statearr_67476[(1)] = (1));

return statearr_67476;
});
var cljs$core$async$transduce_$_state_machine__66861__auto____1 = (function (state_67474){
while(true){
var ret_value__66862__auto__ = (function (){try{while(true){
var result__66863__auto__ = switch__66860__auto__.call(null,state_67474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__66863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66863__auto__;
}
break;
}
}catch (e67477){if((e67477 instanceof Object)){
var ex__66864__auto__ = e67477;
var statearr_67478_67480 = state_67474;
(statearr_67478_67480[(5)] = ex__66864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__66862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67481 = state_67474;
state_67474 = G__67481;
continue;
} else {
return ret_value__66862__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__66861__auto__ = function(state_67474){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__66861__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__66861__auto____1.call(this,state_67474);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__66861__auto____0;
cljs$core$async$transduce_$_state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__66861__auto____1;
return cljs$core$async$transduce_$_state_machine__66861__auto__;
})()
;})(switch__66860__auto__,c__66950__auto__,f__$1))
})();
var state__66952__auto__ = (function (){var statearr_67479 = f__66951__auto__.call(null);
(statearr_67479[(6)] = c__66950__auto__);

return statearr_67479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__66952__auto__);
});})(c__66950__auto__,f__$1))
);

return c__66950__auto__;
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
var G__67483 = arguments.length;
switch (G__67483) {
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
var c__66950__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__66950__auto__){
return (function (){
var f__66951__auto__ = (function (){var switch__66860__auto__ = ((function (c__66950__auto__){
return (function (state_67508){
var state_val_67509 = (state_67508[(1)]);
if((state_val_67509 === (7))){
var inst_67490 = (state_67508[(2)]);
var state_67508__$1 = state_67508;
var statearr_67510_67531 = state_67508__$1;
(statearr_67510_67531[(2)] = inst_67490);

(statearr_67510_67531[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67509 === (1))){
var inst_67484 = cljs.core.seq.call(null,coll);
var inst_67485 = inst_67484;
var state_67508__$1 = (function (){var statearr_67511 = state_67508;
(statearr_67511[(7)] = inst_67485);

return statearr_67511;
})();
var statearr_67512_67532 = state_67508__$1;
(statearr_67512_67532[(2)] = null);

(statearr_67512_67532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67509 === (4))){
var inst_67485 = (state_67508[(7)]);
var inst_67488 = cljs.core.first.call(null,inst_67485);
var state_67508__$1 = state_67508;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_67508__$1,(7),ch,inst_67488);
} else {
if((state_val_67509 === (13))){
var inst_67502 = (state_67508[(2)]);
var state_67508__$1 = state_67508;
var statearr_67513_67533 = state_67508__$1;
(statearr_67513_67533[(2)] = inst_67502);

(statearr_67513_67533[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67509 === (6))){
var inst_67493 = (state_67508[(2)]);
var state_67508__$1 = state_67508;
if(cljs.core.truth_(inst_67493)){
var statearr_67514_67534 = state_67508__$1;
(statearr_67514_67534[(1)] = (8));

} else {
var statearr_67515_67535 = state_67508__$1;
(statearr_67515_67535[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67509 === (3))){
var inst_67506 = (state_67508[(2)]);
var state_67508__$1 = state_67508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67508__$1,inst_67506);
} else {
if((state_val_67509 === (12))){
var state_67508__$1 = state_67508;
var statearr_67516_67536 = state_67508__$1;
(statearr_67516_67536[(2)] = null);

(statearr_67516_67536[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67509 === (2))){
var inst_67485 = (state_67508[(7)]);
var state_67508__$1 = state_67508;
if(cljs.core.truth_(inst_67485)){
var statearr_67517_67537 = state_67508__$1;
(statearr_67517_67537[(1)] = (4));

} else {
var statearr_67518_67538 = state_67508__$1;
(statearr_67518_67538[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67509 === (11))){
var inst_67499 = cljs.core.async.close_BANG_.call(null,ch);
var state_67508__$1 = state_67508;
var statearr_67519_67539 = state_67508__$1;
(statearr_67519_67539[(2)] = inst_67499);

(statearr_67519_67539[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67509 === (9))){
var state_67508__$1 = state_67508;
if(cljs.core.truth_(close_QMARK_)){
var statearr_67520_67540 = state_67508__$1;
(statearr_67520_67540[(1)] = (11));

} else {
var statearr_67521_67541 = state_67508__$1;
(statearr_67521_67541[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67509 === (5))){
var inst_67485 = (state_67508[(7)]);
var state_67508__$1 = state_67508;
var statearr_67522_67542 = state_67508__$1;
(statearr_67522_67542[(2)] = inst_67485);

(statearr_67522_67542[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67509 === (10))){
var inst_67504 = (state_67508[(2)]);
var state_67508__$1 = state_67508;
var statearr_67523_67543 = state_67508__$1;
(statearr_67523_67543[(2)] = inst_67504);

(statearr_67523_67543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67509 === (8))){
var inst_67485 = (state_67508[(7)]);
var inst_67495 = cljs.core.next.call(null,inst_67485);
var inst_67485__$1 = inst_67495;
var state_67508__$1 = (function (){var statearr_67524 = state_67508;
(statearr_67524[(7)] = inst_67485__$1);

return statearr_67524;
})();
var statearr_67525_67544 = state_67508__$1;
(statearr_67525_67544[(2)] = null);

(statearr_67525_67544[(1)] = (2));


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
});})(c__66950__auto__))
;
return ((function (switch__66860__auto__,c__66950__auto__){
return (function() {
var cljs$core$async$state_machine__66861__auto__ = null;
var cljs$core$async$state_machine__66861__auto____0 = (function (){
var statearr_67526 = [null,null,null,null,null,null,null,null];
(statearr_67526[(0)] = cljs$core$async$state_machine__66861__auto__);

(statearr_67526[(1)] = (1));

return statearr_67526;
});
var cljs$core$async$state_machine__66861__auto____1 = (function (state_67508){
while(true){
var ret_value__66862__auto__ = (function (){try{while(true){
var result__66863__auto__ = switch__66860__auto__.call(null,state_67508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__66863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66863__auto__;
}
break;
}
}catch (e67527){if((e67527 instanceof Object)){
var ex__66864__auto__ = e67527;
var statearr_67528_67545 = state_67508;
(statearr_67528_67545[(5)] = ex__66864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__66862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67546 = state_67508;
state_67508 = G__67546;
continue;
} else {
return ret_value__66862__auto__;
}
break;
}
});
cljs$core$async$state_machine__66861__auto__ = function(state_67508){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__66861__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__66861__auto____1.call(this,state_67508);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__66861__auto____0;
cljs$core$async$state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__66861__auto____1;
return cljs$core$async$state_machine__66861__auto__;
})()
;})(switch__66860__auto__,c__66950__auto__))
})();
var state__66952__auto__ = (function (){var statearr_67529 = f__66951__auto__.call(null);
(statearr_67529[(6)] = c__66950__auto__);

return statearr_67529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__66952__auto__);
});})(c__66950__auto__))
);

return c__66950__auto__;
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
var x__63494__auto__ = (((_ == null))?null:_);
var m__63495__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__63494__auto__)]);
if(!((m__63495__auto__ == null))){
return m__63495__auto__.call(null,_);
} else {
var m__63495__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__63495__auto____$1 == null))){
return m__63495__auto____$1.call(null,_);
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
var x__63494__auto__ = (((m == null))?null:m);
var m__63495__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__63494__auto__)]);
if(!((m__63495__auto__ == null))){
return m__63495__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__63495__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__63495__auto____$1 == null))){
return m__63495__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__63494__auto__ = (((m == null))?null:m);
var m__63495__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__63494__auto__)]);
if(!((m__63495__auto__ == null))){
return m__63495__auto__.call(null,m,ch);
} else {
var m__63495__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__63495__auto____$1 == null))){
return m__63495__auto____$1.call(null,m,ch);
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
var x__63494__auto__ = (((m == null))?null:m);
var m__63495__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__63494__auto__)]);
if(!((m__63495__auto__ == null))){
return m__63495__auto__.call(null,m);
} else {
var m__63495__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__63495__auto____$1 == null))){
return m__63495__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async67547 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async67547 = (function (ch,cs,meta67548){
this.ch = ch;
this.cs = cs;
this.meta67548 = meta67548;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async67547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_67549,meta67548__$1){
var self__ = this;
var _67549__$1 = this;
return (new cljs.core.async.t_cljs$core$async67547(self__.ch,self__.cs,meta67548__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async67547.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_67549){
var self__ = this;
var _67549__$1 = this;
return self__.meta67548;
});})(cs))
;

cljs.core.async.t_cljs$core$async67547.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async67547.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async67547.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async67547.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async67547.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async67547.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async67547.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta67548","meta67548",1757572773,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async67547.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async67547.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async67547";

cljs.core.async.t_cljs$core$async67547.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__63432__auto__,writer__63433__auto__,opt__63434__auto__){
return cljs.core._write.call(null,writer__63433__auto__,"cljs.core.async/t_cljs$core$async67547");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async67547 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async67547(ch__$1,cs__$1,meta67548){
return (new cljs.core.async.t_cljs$core$async67547(ch__$1,cs__$1,meta67548));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async67547(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__66950__auto___67769 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__66950__auto___67769,cs,m,dchan,dctr,done){
return (function (){
var f__66951__auto__ = (function (){var switch__66860__auto__ = ((function (c__66950__auto___67769,cs,m,dchan,dctr,done){
return (function (state_67684){
var state_val_67685 = (state_67684[(1)]);
if((state_val_67685 === (7))){
var inst_67680 = (state_67684[(2)]);
var state_67684__$1 = state_67684;
var statearr_67686_67770 = state_67684__$1;
(statearr_67686_67770[(2)] = inst_67680);

(statearr_67686_67770[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67685 === (20))){
var inst_67583 = (state_67684[(7)]);
var inst_67595 = cljs.core.first.call(null,inst_67583);
var inst_67596 = cljs.core.nth.call(null,inst_67595,(0),null);
var inst_67597 = cljs.core.nth.call(null,inst_67595,(1),null);
var state_67684__$1 = (function (){var statearr_67687 = state_67684;
(statearr_67687[(8)] = inst_67596);

return statearr_67687;
})();
if(cljs.core.truth_(inst_67597)){
var statearr_67688_67771 = state_67684__$1;
(statearr_67688_67771[(1)] = (22));

} else {
var statearr_67689_67772 = state_67684__$1;
(statearr_67689_67772[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67685 === (27))){
var inst_67632 = (state_67684[(9)]);
var inst_67552 = (state_67684[(10)]);
var inst_67627 = (state_67684[(11)]);
var inst_67625 = (state_67684[(12)]);
var inst_67632__$1 = cljs.core._nth.call(null,inst_67625,inst_67627);
var inst_67633 = cljs.core.async.put_BANG_.call(null,inst_67632__$1,inst_67552,done);
var state_67684__$1 = (function (){var statearr_67690 = state_67684;
(statearr_67690[(9)] = inst_67632__$1);

return statearr_67690;
})();
if(cljs.core.truth_(inst_67633)){
var statearr_67691_67773 = state_67684__$1;
(statearr_67691_67773[(1)] = (30));

} else {
var statearr_67692_67774 = state_67684__$1;
(statearr_67692_67774[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67685 === (1))){
var state_67684__$1 = state_67684;
var statearr_67693_67775 = state_67684__$1;
(statearr_67693_67775[(2)] = null);

(statearr_67693_67775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67685 === (24))){
var inst_67583 = (state_67684[(7)]);
var inst_67602 = (state_67684[(2)]);
var inst_67603 = cljs.core.next.call(null,inst_67583);
var inst_67561 = inst_67603;
var inst_67562 = null;
var inst_67563 = (0);
var inst_67564 = (0);
var state_67684__$1 = (function (){var statearr_67694 = state_67684;
(statearr_67694[(13)] = inst_67561);

(statearr_67694[(14)] = inst_67602);

(statearr_67694[(15)] = inst_67563);

(statearr_67694[(16)] = inst_67562);

(statearr_67694[(17)] = inst_67564);

return statearr_67694;
})();
var statearr_67695_67776 = state_67684__$1;
(statearr_67695_67776[(2)] = null);

(statearr_67695_67776[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67685 === (39))){
var state_67684__$1 = state_67684;
var statearr_67699_67777 = state_67684__$1;
(statearr_67699_67777[(2)] = null);

(statearr_67699_67777[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67685 === (4))){
var inst_67552 = (state_67684[(10)]);
var inst_67552__$1 = (state_67684[(2)]);
var inst_67553 = (inst_67552__$1 == null);
var state_67684__$1 = (function (){var statearr_67700 = state_67684;
(statearr_67700[(10)] = inst_67552__$1);

return statearr_67700;
})();
if(cljs.core.truth_(inst_67553)){
var statearr_67701_67778 = state_67684__$1;
(statearr_67701_67778[(1)] = (5));

} else {
var statearr_67702_67779 = state_67684__$1;
(statearr_67702_67779[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67685 === (15))){
var inst_67561 = (state_67684[(13)]);
var inst_67563 = (state_67684[(15)]);
var inst_67562 = (state_67684[(16)]);
var inst_67564 = (state_67684[(17)]);
var inst_67579 = (state_67684[(2)]);
var inst_67580 = (inst_67564 + (1));
var tmp67696 = inst_67561;
var tmp67697 = inst_67563;
var tmp67698 = inst_67562;
var inst_67561__$1 = tmp67696;
var inst_67562__$1 = tmp67698;
var inst_67563__$1 = tmp67697;
var inst_67564__$1 = inst_67580;
var state_67684__$1 = (function (){var statearr_67703 = state_67684;
(statearr_67703[(13)] = inst_67561__$1);

(statearr_67703[(15)] = inst_67563__$1);

(statearr_67703[(16)] = inst_67562__$1);

(statearr_67703[(17)] = inst_67564__$1);

(statearr_67703[(18)] = inst_67579);

return statearr_67703;
})();
var statearr_67704_67780 = state_67684__$1;
(statearr_67704_67780[(2)] = null);

(statearr_67704_67780[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67685 === (21))){
var inst_67606 = (state_67684[(2)]);
var state_67684__$1 = state_67684;
var statearr_67708_67781 = state_67684__$1;
(statearr_67708_67781[(2)] = inst_67606);

(statearr_67708_67781[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67685 === (31))){
var inst_67632 = (state_67684[(9)]);
var inst_67636 = done.call(null,null);
var inst_67637 = cljs.core.async.untap_STAR_.call(null,m,inst_67632);
var state_67684__$1 = (function (){var statearr_67709 = state_67684;
(statearr_67709[(19)] = inst_67636);

return statearr_67709;
})();
var statearr_67710_67782 = state_67684__$1;
(statearr_67710_67782[(2)] = inst_67637);

(statearr_67710_67782[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67685 === (32))){
var inst_67626 = (state_67684[(20)]);
var inst_67627 = (state_67684[(11)]);
var inst_67624 = (state_67684[(21)]);
var inst_67625 = (state_67684[(12)]);
var inst_67639 = (state_67684[(2)]);
var inst_67640 = (inst_67627 + (1));
var tmp67705 = inst_67626;
var tmp67706 = inst_67624;
var tmp67707 = inst_67625;
var inst_67624__$1 = tmp67706;
var inst_67625__$1 = tmp67707;
var inst_67626__$1 = tmp67705;
var inst_67627__$1 = inst_67640;
var state_67684__$1 = (function (){var statearr_67711 = state_67684;
(statearr_67711[(22)] = inst_67639);

(statearr_67711[(20)] = inst_67626__$1);

(statearr_67711[(11)] = inst_67627__$1);

(statearr_67711[(21)] = inst_67624__$1);

(statearr_67711[(12)] = inst_67625__$1);

return statearr_67711;
})();
var statearr_67712_67783 = state_67684__$1;
(statearr_67712_67783[(2)] = null);

(statearr_67712_67783[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67685 === (40))){
var inst_67652 = (state_67684[(23)]);
var inst_67656 = done.call(null,null);
var inst_67657 = cljs.core.async.untap_STAR_.call(null,m,inst_67652);
var state_67684__$1 = (function (){var statearr_67713 = state_67684;
(statearr_67713[(24)] = inst_67656);

return statearr_67713;
})();
var statearr_67714_67784 = state_67684__$1;
(statearr_67714_67784[(2)] = inst_67657);

(statearr_67714_67784[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67685 === (33))){
var inst_67643 = (state_67684[(25)]);
var inst_67645 = cljs.core.chunked_seq_QMARK_.call(null,inst_67643);
var state_67684__$1 = state_67684;
if(inst_67645){
var statearr_67715_67785 = state_67684__$1;
(statearr_67715_67785[(1)] = (36));

} else {
var statearr_67716_67786 = state_67684__$1;
(statearr_67716_67786[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67685 === (13))){
var inst_67573 = (state_67684[(26)]);
var inst_67576 = cljs.core.async.close_BANG_.call(null,inst_67573);
var state_67684__$1 = state_67684;
var statearr_67717_67787 = state_67684__$1;
(statearr_67717_67787[(2)] = inst_67576);

(statearr_67717_67787[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67685 === (22))){
var inst_67596 = (state_67684[(8)]);
var inst_67599 = cljs.core.async.close_BANG_.call(null,inst_67596);
var state_67684__$1 = state_67684;
var statearr_67718_67788 = state_67684__$1;
(statearr_67718_67788[(2)] = inst_67599);

(statearr_67718_67788[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67685 === (36))){
var inst_67643 = (state_67684[(25)]);
var inst_67647 = cljs.core.chunk_first.call(null,inst_67643);
var inst_67648 = cljs.core.chunk_rest.call(null,inst_67643);
var inst_67649 = cljs.core.count.call(null,inst_67647);
var inst_67624 = inst_67648;
var inst_67625 = inst_67647;
var inst_67626 = inst_67649;
var inst_67627 = (0);
var state_67684__$1 = (function (){var statearr_67719 = state_67684;
(statearr_67719[(20)] = inst_67626);

(statearr_67719[(11)] = inst_67627);

(statearr_67719[(21)] = inst_67624);

(statearr_67719[(12)] = inst_67625);

return statearr_67719;
})();
var statearr_67720_67789 = state_67684__$1;
(statearr_67720_67789[(2)] = null);

(statearr_67720_67789[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67685 === (41))){
var inst_67643 = (state_67684[(25)]);
var inst_67659 = (state_67684[(2)]);
var inst_67660 = cljs.core.next.call(null,inst_67643);
var inst_67624 = inst_67660;
var inst_67625 = null;
var inst_67626 = (0);
var inst_67627 = (0);
var state_67684__$1 = (function (){var statearr_67721 = state_67684;
(statearr_67721[(27)] = inst_67659);

(statearr_67721[(20)] = inst_67626);

(statearr_67721[(11)] = inst_67627);

(statearr_67721[(21)] = inst_67624);

(statearr_67721[(12)] = inst_67625);

return statearr_67721;
})();
var statearr_67722_67790 = state_67684__$1;
(statearr_67722_67790[(2)] = null);

(statearr_67722_67790[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67685 === (43))){
var state_67684__$1 = state_67684;
var statearr_67723_67791 = state_67684__$1;
(statearr_67723_67791[(2)] = null);

(statearr_67723_67791[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67685 === (29))){
var inst_67668 = (state_67684[(2)]);
var state_67684__$1 = state_67684;
var statearr_67724_67792 = state_67684__$1;
(statearr_67724_67792[(2)] = inst_67668);

(statearr_67724_67792[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67685 === (44))){
var inst_67677 = (state_67684[(2)]);
var state_67684__$1 = (function (){var statearr_67725 = state_67684;
(statearr_67725[(28)] = inst_67677);

return statearr_67725;
})();
var statearr_67726_67793 = state_67684__$1;
(statearr_67726_67793[(2)] = null);

(statearr_67726_67793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67685 === (6))){
var inst_67616 = (state_67684[(29)]);
var inst_67615 = cljs.core.deref.call(null,cs);
var inst_67616__$1 = cljs.core.keys.call(null,inst_67615);
var inst_67617 = cljs.core.count.call(null,inst_67616__$1);
var inst_67618 = cljs.core.reset_BANG_.call(null,dctr,inst_67617);
var inst_67623 = cljs.core.seq.call(null,inst_67616__$1);
var inst_67624 = inst_67623;
var inst_67625 = null;
var inst_67626 = (0);
var inst_67627 = (0);
var state_67684__$1 = (function (){var statearr_67727 = state_67684;
(statearr_67727[(20)] = inst_67626);

(statearr_67727[(29)] = inst_67616__$1);

(statearr_67727[(11)] = inst_67627);

(statearr_67727[(21)] = inst_67624);

(statearr_67727[(12)] = inst_67625);

(statearr_67727[(30)] = inst_67618);

return statearr_67727;
})();
var statearr_67728_67794 = state_67684__$1;
(statearr_67728_67794[(2)] = null);

(statearr_67728_67794[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67685 === (28))){
var inst_67624 = (state_67684[(21)]);
var inst_67643 = (state_67684[(25)]);
var inst_67643__$1 = cljs.core.seq.call(null,inst_67624);
var state_67684__$1 = (function (){var statearr_67729 = state_67684;
(statearr_67729[(25)] = inst_67643__$1);

return statearr_67729;
})();
if(inst_67643__$1){
var statearr_67730_67795 = state_67684__$1;
(statearr_67730_67795[(1)] = (33));

} else {
var statearr_67731_67796 = state_67684__$1;
(statearr_67731_67796[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67685 === (25))){
var inst_67626 = (state_67684[(20)]);
var inst_67627 = (state_67684[(11)]);
var inst_67629 = (inst_67627 < inst_67626);
var inst_67630 = inst_67629;
var state_67684__$1 = state_67684;
if(cljs.core.truth_(inst_67630)){
var statearr_67732_67797 = state_67684__$1;
(statearr_67732_67797[(1)] = (27));

} else {
var statearr_67733_67798 = state_67684__$1;
(statearr_67733_67798[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67685 === (34))){
var state_67684__$1 = state_67684;
var statearr_67734_67799 = state_67684__$1;
(statearr_67734_67799[(2)] = null);

(statearr_67734_67799[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67685 === (17))){
var state_67684__$1 = state_67684;
var statearr_67735_67800 = state_67684__$1;
(statearr_67735_67800[(2)] = null);

(statearr_67735_67800[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67685 === (3))){
var inst_67682 = (state_67684[(2)]);
var state_67684__$1 = state_67684;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67684__$1,inst_67682);
} else {
if((state_val_67685 === (12))){
var inst_67611 = (state_67684[(2)]);
var state_67684__$1 = state_67684;
var statearr_67736_67801 = state_67684__$1;
(statearr_67736_67801[(2)] = inst_67611);

(statearr_67736_67801[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67685 === (2))){
var state_67684__$1 = state_67684;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67684__$1,(4),ch);
} else {
if((state_val_67685 === (23))){
var state_67684__$1 = state_67684;
var statearr_67737_67802 = state_67684__$1;
(statearr_67737_67802[(2)] = null);

(statearr_67737_67802[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67685 === (35))){
var inst_67666 = (state_67684[(2)]);
var state_67684__$1 = state_67684;
var statearr_67738_67803 = state_67684__$1;
(statearr_67738_67803[(2)] = inst_67666);

(statearr_67738_67803[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67685 === (19))){
var inst_67583 = (state_67684[(7)]);
var inst_67587 = cljs.core.chunk_first.call(null,inst_67583);
var inst_67588 = cljs.core.chunk_rest.call(null,inst_67583);
var inst_67589 = cljs.core.count.call(null,inst_67587);
var inst_67561 = inst_67588;
var inst_67562 = inst_67587;
var inst_67563 = inst_67589;
var inst_67564 = (0);
var state_67684__$1 = (function (){var statearr_67739 = state_67684;
(statearr_67739[(13)] = inst_67561);

(statearr_67739[(15)] = inst_67563);

(statearr_67739[(16)] = inst_67562);

(statearr_67739[(17)] = inst_67564);

return statearr_67739;
})();
var statearr_67740_67804 = state_67684__$1;
(statearr_67740_67804[(2)] = null);

(statearr_67740_67804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67685 === (11))){
var inst_67561 = (state_67684[(13)]);
var inst_67583 = (state_67684[(7)]);
var inst_67583__$1 = cljs.core.seq.call(null,inst_67561);
var state_67684__$1 = (function (){var statearr_67741 = state_67684;
(statearr_67741[(7)] = inst_67583__$1);

return statearr_67741;
})();
if(inst_67583__$1){
var statearr_67742_67805 = state_67684__$1;
(statearr_67742_67805[(1)] = (16));

} else {
var statearr_67743_67806 = state_67684__$1;
(statearr_67743_67806[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67685 === (9))){
var inst_67613 = (state_67684[(2)]);
var state_67684__$1 = state_67684;
var statearr_67744_67807 = state_67684__$1;
(statearr_67744_67807[(2)] = inst_67613);

(statearr_67744_67807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67685 === (5))){
var inst_67559 = cljs.core.deref.call(null,cs);
var inst_67560 = cljs.core.seq.call(null,inst_67559);
var inst_67561 = inst_67560;
var inst_67562 = null;
var inst_67563 = (0);
var inst_67564 = (0);
var state_67684__$1 = (function (){var statearr_67745 = state_67684;
(statearr_67745[(13)] = inst_67561);

(statearr_67745[(15)] = inst_67563);

(statearr_67745[(16)] = inst_67562);

(statearr_67745[(17)] = inst_67564);

return statearr_67745;
})();
var statearr_67746_67808 = state_67684__$1;
(statearr_67746_67808[(2)] = null);

(statearr_67746_67808[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67685 === (14))){
var state_67684__$1 = state_67684;
var statearr_67747_67809 = state_67684__$1;
(statearr_67747_67809[(2)] = null);

(statearr_67747_67809[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67685 === (45))){
var inst_67674 = (state_67684[(2)]);
var state_67684__$1 = state_67684;
var statearr_67748_67810 = state_67684__$1;
(statearr_67748_67810[(2)] = inst_67674);

(statearr_67748_67810[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67685 === (26))){
var inst_67616 = (state_67684[(29)]);
var inst_67670 = (state_67684[(2)]);
var inst_67671 = cljs.core.seq.call(null,inst_67616);
var state_67684__$1 = (function (){var statearr_67749 = state_67684;
(statearr_67749[(31)] = inst_67670);

return statearr_67749;
})();
if(inst_67671){
var statearr_67750_67811 = state_67684__$1;
(statearr_67750_67811[(1)] = (42));

} else {
var statearr_67751_67812 = state_67684__$1;
(statearr_67751_67812[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67685 === (16))){
var inst_67583 = (state_67684[(7)]);
var inst_67585 = cljs.core.chunked_seq_QMARK_.call(null,inst_67583);
var state_67684__$1 = state_67684;
if(inst_67585){
var statearr_67752_67813 = state_67684__$1;
(statearr_67752_67813[(1)] = (19));

} else {
var statearr_67753_67814 = state_67684__$1;
(statearr_67753_67814[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67685 === (38))){
var inst_67663 = (state_67684[(2)]);
var state_67684__$1 = state_67684;
var statearr_67754_67815 = state_67684__$1;
(statearr_67754_67815[(2)] = inst_67663);

(statearr_67754_67815[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67685 === (30))){
var state_67684__$1 = state_67684;
var statearr_67755_67816 = state_67684__$1;
(statearr_67755_67816[(2)] = null);

(statearr_67755_67816[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67685 === (10))){
var inst_67562 = (state_67684[(16)]);
var inst_67564 = (state_67684[(17)]);
var inst_67572 = cljs.core._nth.call(null,inst_67562,inst_67564);
var inst_67573 = cljs.core.nth.call(null,inst_67572,(0),null);
var inst_67574 = cljs.core.nth.call(null,inst_67572,(1),null);
var state_67684__$1 = (function (){var statearr_67756 = state_67684;
(statearr_67756[(26)] = inst_67573);

return statearr_67756;
})();
if(cljs.core.truth_(inst_67574)){
var statearr_67757_67817 = state_67684__$1;
(statearr_67757_67817[(1)] = (13));

} else {
var statearr_67758_67818 = state_67684__$1;
(statearr_67758_67818[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67685 === (18))){
var inst_67609 = (state_67684[(2)]);
var state_67684__$1 = state_67684;
var statearr_67759_67819 = state_67684__$1;
(statearr_67759_67819[(2)] = inst_67609);

(statearr_67759_67819[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67685 === (42))){
var state_67684__$1 = state_67684;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67684__$1,(45),dchan);
} else {
if((state_val_67685 === (37))){
var inst_67652 = (state_67684[(23)]);
var inst_67552 = (state_67684[(10)]);
var inst_67643 = (state_67684[(25)]);
var inst_67652__$1 = cljs.core.first.call(null,inst_67643);
var inst_67653 = cljs.core.async.put_BANG_.call(null,inst_67652__$1,inst_67552,done);
var state_67684__$1 = (function (){var statearr_67760 = state_67684;
(statearr_67760[(23)] = inst_67652__$1);

return statearr_67760;
})();
if(cljs.core.truth_(inst_67653)){
var statearr_67761_67820 = state_67684__$1;
(statearr_67761_67820[(1)] = (39));

} else {
var statearr_67762_67821 = state_67684__$1;
(statearr_67762_67821[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67685 === (8))){
var inst_67563 = (state_67684[(15)]);
var inst_67564 = (state_67684[(17)]);
var inst_67566 = (inst_67564 < inst_67563);
var inst_67567 = inst_67566;
var state_67684__$1 = state_67684;
if(cljs.core.truth_(inst_67567)){
var statearr_67763_67822 = state_67684__$1;
(statearr_67763_67822[(1)] = (10));

} else {
var statearr_67764_67823 = state_67684__$1;
(statearr_67764_67823[(1)] = (11));

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
});})(c__66950__auto___67769,cs,m,dchan,dctr,done))
;
return ((function (switch__66860__auto__,c__66950__auto___67769,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__66861__auto__ = null;
var cljs$core$async$mult_$_state_machine__66861__auto____0 = (function (){
var statearr_67765 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_67765[(0)] = cljs$core$async$mult_$_state_machine__66861__auto__);

(statearr_67765[(1)] = (1));

return statearr_67765;
});
var cljs$core$async$mult_$_state_machine__66861__auto____1 = (function (state_67684){
while(true){
var ret_value__66862__auto__ = (function (){try{while(true){
var result__66863__auto__ = switch__66860__auto__.call(null,state_67684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__66863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66863__auto__;
}
break;
}
}catch (e67766){if((e67766 instanceof Object)){
var ex__66864__auto__ = e67766;
var statearr_67767_67824 = state_67684;
(statearr_67767_67824[(5)] = ex__66864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__66862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67825 = state_67684;
state_67684 = G__67825;
continue;
} else {
return ret_value__66862__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__66861__auto__ = function(state_67684){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__66861__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__66861__auto____1.call(this,state_67684);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__66861__auto____0;
cljs$core$async$mult_$_state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__66861__auto____1;
return cljs$core$async$mult_$_state_machine__66861__auto__;
})()
;})(switch__66860__auto__,c__66950__auto___67769,cs,m,dchan,dctr,done))
})();
var state__66952__auto__ = (function (){var statearr_67768 = f__66951__auto__.call(null);
(statearr_67768[(6)] = c__66950__auto___67769);

return statearr_67768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__66952__auto__);
});})(c__66950__auto___67769,cs,m,dchan,dctr,done))
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
var G__67827 = arguments.length;
switch (G__67827) {
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
var x__63494__auto__ = (((m == null))?null:m);
var m__63495__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__63494__auto__)]);
if(!((m__63495__auto__ == null))){
return m__63495__auto__.call(null,m,ch);
} else {
var m__63495__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__63495__auto____$1 == null))){
return m__63495__auto____$1.call(null,m,ch);
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
var x__63494__auto__ = (((m == null))?null:m);
var m__63495__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__63494__auto__)]);
if(!((m__63495__auto__ == null))){
return m__63495__auto__.call(null,m,ch);
} else {
var m__63495__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__63495__auto____$1 == null))){
return m__63495__auto____$1.call(null,m,ch);
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
var x__63494__auto__ = (((m == null))?null:m);
var m__63495__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__63494__auto__)]);
if(!((m__63495__auto__ == null))){
return m__63495__auto__.call(null,m);
} else {
var m__63495__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__63495__auto____$1 == null))){
return m__63495__auto____$1.call(null,m);
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
var x__63494__auto__ = (((m == null))?null:m);
var m__63495__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__63494__auto__)]);
if(!((m__63495__auto__ == null))){
return m__63495__auto__.call(null,m,state_map);
} else {
var m__63495__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__63495__auto____$1 == null))){
return m__63495__auto____$1.call(null,m,state_map);
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
var x__63494__auto__ = (((m == null))?null:m);
var m__63495__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__63494__auto__)]);
if(!((m__63495__auto__ == null))){
return m__63495__auto__.call(null,m,mode);
} else {
var m__63495__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__63495__auto____$1 == null))){
return m__63495__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__64045__auto__ = [];
var len__64038__auto___67839 = arguments.length;
var i__64039__auto___67840 = (0);
while(true){
if((i__64039__auto___67840 < len__64038__auto___67839)){
args__64045__auto__.push((arguments[i__64039__auto___67840]));

var G__67841 = (i__64039__auto___67840 + (1));
i__64039__auto___67840 = G__67841;
continue;
} else {
}
break;
}

var argseq__64046__auto__ = ((((3) < args__64045__auto__.length))?(new cljs.core.IndexedSeq(args__64045__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__64046__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__67833){
var map__67834 = p__67833;
var map__67834__$1 = ((((!((map__67834 == null)))?((((map__67834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67834.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67834):map__67834);
var opts = map__67834__$1;
var statearr_67836_67842 = state;
(statearr_67836_67842[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__67834,map__67834__$1,opts){
return (function (val){
var statearr_67837_67843 = state;
(statearr_67837_67843[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__67834,map__67834__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_67838_67844 = state;
(statearr_67838_67844[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq67829){
var G__67830 = cljs.core.first.call(null,seq67829);
var seq67829__$1 = cljs.core.next.call(null,seq67829);
var G__67831 = cljs.core.first.call(null,seq67829__$1);
var seq67829__$2 = cljs.core.next.call(null,seq67829__$1);
var G__67832 = cljs.core.first.call(null,seq67829__$2);
var seq67829__$3 = cljs.core.next.call(null,seq67829__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__67830,G__67831,G__67832,seq67829__$3);
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
if(typeof cljs.core.async.t_cljs$core$async67845 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async67845 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta67846){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta67846 = meta67846;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async67845.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_67847,meta67846__$1){
var self__ = this;
var _67847__$1 = this;
return (new cljs.core.async.t_cljs$core$async67845(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta67846__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async67845.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_67847){
var self__ = this;
var _67847__$1 = this;
return self__.meta67846;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async67845.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async67845.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async67845.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async67845.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async67845.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async67845.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async67845.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async67845.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async67845.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta67846","meta67846",-568667165,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async67845.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async67845.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async67845";

cljs.core.async.t_cljs$core$async67845.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__63432__auto__,writer__63433__auto__,opt__63434__auto__){
return cljs.core._write.call(null,writer__63433__auto__,"cljs.core.async/t_cljs$core$async67845");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async67845 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async67845(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta67846){
return (new cljs.core.async.t_cljs$core$async67845(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta67846));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async67845(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__66950__auto___68009 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__66950__auto___68009,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__66951__auto__ = (function (){var switch__66860__auto__ = ((function (c__66950__auto___68009,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_67949){
var state_val_67950 = (state_67949[(1)]);
if((state_val_67950 === (7))){
var inst_67864 = (state_67949[(2)]);
var state_67949__$1 = state_67949;
var statearr_67951_68010 = state_67949__$1;
(statearr_67951_68010[(2)] = inst_67864);

(statearr_67951_68010[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67950 === (20))){
var inst_67876 = (state_67949[(7)]);
var state_67949__$1 = state_67949;
var statearr_67952_68011 = state_67949__$1;
(statearr_67952_68011[(2)] = inst_67876);

(statearr_67952_68011[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67950 === (27))){
var state_67949__$1 = state_67949;
var statearr_67953_68012 = state_67949__$1;
(statearr_67953_68012[(2)] = null);

(statearr_67953_68012[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67950 === (1))){
var inst_67851 = (state_67949[(8)]);
var inst_67851__$1 = calc_state.call(null);
var inst_67853 = (inst_67851__$1 == null);
var inst_67854 = cljs.core.not.call(null,inst_67853);
var state_67949__$1 = (function (){var statearr_67954 = state_67949;
(statearr_67954[(8)] = inst_67851__$1);

return statearr_67954;
})();
if(inst_67854){
var statearr_67955_68013 = state_67949__$1;
(statearr_67955_68013[(1)] = (2));

} else {
var statearr_67956_68014 = state_67949__$1;
(statearr_67956_68014[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67950 === (24))){
var inst_67909 = (state_67949[(9)]);
var inst_67923 = (state_67949[(10)]);
var inst_67900 = (state_67949[(11)]);
var inst_67923__$1 = inst_67900.call(null,inst_67909);
var state_67949__$1 = (function (){var statearr_67957 = state_67949;
(statearr_67957[(10)] = inst_67923__$1);

return statearr_67957;
})();
if(cljs.core.truth_(inst_67923__$1)){
var statearr_67958_68015 = state_67949__$1;
(statearr_67958_68015[(1)] = (29));

} else {
var statearr_67959_68016 = state_67949__$1;
(statearr_67959_68016[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67950 === (4))){
var inst_67867 = (state_67949[(2)]);
var state_67949__$1 = state_67949;
if(cljs.core.truth_(inst_67867)){
var statearr_67960_68017 = state_67949__$1;
(statearr_67960_68017[(1)] = (8));

} else {
var statearr_67961_68018 = state_67949__$1;
(statearr_67961_68018[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67950 === (15))){
var inst_67894 = (state_67949[(2)]);
var state_67949__$1 = state_67949;
if(cljs.core.truth_(inst_67894)){
var statearr_67962_68019 = state_67949__$1;
(statearr_67962_68019[(1)] = (19));

} else {
var statearr_67963_68020 = state_67949__$1;
(statearr_67963_68020[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67950 === (21))){
var inst_67899 = (state_67949[(12)]);
var inst_67899__$1 = (state_67949[(2)]);
var inst_67900 = cljs.core.get.call(null,inst_67899__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_67901 = cljs.core.get.call(null,inst_67899__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_67902 = cljs.core.get.call(null,inst_67899__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_67949__$1 = (function (){var statearr_67964 = state_67949;
(statearr_67964[(13)] = inst_67901);

(statearr_67964[(12)] = inst_67899__$1);

(statearr_67964[(11)] = inst_67900);

return statearr_67964;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_67949__$1,(22),inst_67902);
} else {
if((state_val_67950 === (31))){
var inst_67931 = (state_67949[(2)]);
var state_67949__$1 = state_67949;
if(cljs.core.truth_(inst_67931)){
var statearr_67965_68021 = state_67949__$1;
(statearr_67965_68021[(1)] = (32));

} else {
var statearr_67966_68022 = state_67949__$1;
(statearr_67966_68022[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67950 === (32))){
var inst_67908 = (state_67949[(14)]);
var state_67949__$1 = state_67949;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_67949__$1,(35),out,inst_67908);
} else {
if((state_val_67950 === (33))){
var inst_67899 = (state_67949[(12)]);
var inst_67876 = inst_67899;
var state_67949__$1 = (function (){var statearr_67967 = state_67949;
(statearr_67967[(7)] = inst_67876);

return statearr_67967;
})();
var statearr_67968_68023 = state_67949__$1;
(statearr_67968_68023[(2)] = null);

(statearr_67968_68023[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67950 === (13))){
var inst_67876 = (state_67949[(7)]);
var inst_67883 = inst_67876.cljs$lang$protocol_mask$partition0$;
var inst_67884 = (inst_67883 & (64));
var inst_67885 = inst_67876.cljs$core$ISeq$;
var inst_67886 = (cljs.core.PROTOCOL_SENTINEL === inst_67885);
var inst_67887 = (inst_67884) || (inst_67886);
var state_67949__$1 = state_67949;
if(cljs.core.truth_(inst_67887)){
var statearr_67969_68024 = state_67949__$1;
(statearr_67969_68024[(1)] = (16));

} else {
var statearr_67970_68025 = state_67949__$1;
(statearr_67970_68025[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67950 === (22))){
var inst_67909 = (state_67949[(9)]);
var inst_67908 = (state_67949[(14)]);
var inst_67907 = (state_67949[(2)]);
var inst_67908__$1 = cljs.core.nth.call(null,inst_67907,(0),null);
var inst_67909__$1 = cljs.core.nth.call(null,inst_67907,(1),null);
var inst_67910 = (inst_67908__$1 == null);
var inst_67911 = cljs.core._EQ_.call(null,inst_67909__$1,change);
var inst_67912 = (inst_67910) || (inst_67911);
var state_67949__$1 = (function (){var statearr_67971 = state_67949;
(statearr_67971[(9)] = inst_67909__$1);

(statearr_67971[(14)] = inst_67908__$1);

return statearr_67971;
})();
if(cljs.core.truth_(inst_67912)){
var statearr_67972_68026 = state_67949__$1;
(statearr_67972_68026[(1)] = (23));

} else {
var statearr_67973_68027 = state_67949__$1;
(statearr_67973_68027[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67950 === (36))){
var inst_67899 = (state_67949[(12)]);
var inst_67876 = inst_67899;
var state_67949__$1 = (function (){var statearr_67974 = state_67949;
(statearr_67974[(7)] = inst_67876);

return statearr_67974;
})();
var statearr_67975_68028 = state_67949__$1;
(statearr_67975_68028[(2)] = null);

(statearr_67975_68028[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67950 === (29))){
var inst_67923 = (state_67949[(10)]);
var state_67949__$1 = state_67949;
var statearr_67976_68029 = state_67949__$1;
(statearr_67976_68029[(2)] = inst_67923);

(statearr_67976_68029[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67950 === (6))){
var state_67949__$1 = state_67949;
var statearr_67977_68030 = state_67949__$1;
(statearr_67977_68030[(2)] = false);

(statearr_67977_68030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67950 === (28))){
var inst_67919 = (state_67949[(2)]);
var inst_67920 = calc_state.call(null);
var inst_67876 = inst_67920;
var state_67949__$1 = (function (){var statearr_67978 = state_67949;
(statearr_67978[(7)] = inst_67876);

(statearr_67978[(15)] = inst_67919);

return statearr_67978;
})();
var statearr_67979_68031 = state_67949__$1;
(statearr_67979_68031[(2)] = null);

(statearr_67979_68031[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67950 === (25))){
var inst_67945 = (state_67949[(2)]);
var state_67949__$1 = state_67949;
var statearr_67980_68032 = state_67949__$1;
(statearr_67980_68032[(2)] = inst_67945);

(statearr_67980_68032[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67950 === (34))){
var inst_67943 = (state_67949[(2)]);
var state_67949__$1 = state_67949;
var statearr_67981_68033 = state_67949__$1;
(statearr_67981_68033[(2)] = inst_67943);

(statearr_67981_68033[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67950 === (17))){
var state_67949__$1 = state_67949;
var statearr_67982_68034 = state_67949__$1;
(statearr_67982_68034[(2)] = false);

(statearr_67982_68034[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67950 === (3))){
var state_67949__$1 = state_67949;
var statearr_67983_68035 = state_67949__$1;
(statearr_67983_68035[(2)] = false);

(statearr_67983_68035[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67950 === (12))){
var inst_67947 = (state_67949[(2)]);
var state_67949__$1 = state_67949;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67949__$1,inst_67947);
} else {
if((state_val_67950 === (2))){
var inst_67851 = (state_67949[(8)]);
var inst_67856 = inst_67851.cljs$lang$protocol_mask$partition0$;
var inst_67857 = (inst_67856 & (64));
var inst_67858 = inst_67851.cljs$core$ISeq$;
var inst_67859 = (cljs.core.PROTOCOL_SENTINEL === inst_67858);
var inst_67860 = (inst_67857) || (inst_67859);
var state_67949__$1 = state_67949;
if(cljs.core.truth_(inst_67860)){
var statearr_67984_68036 = state_67949__$1;
(statearr_67984_68036[(1)] = (5));

} else {
var statearr_67985_68037 = state_67949__$1;
(statearr_67985_68037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67950 === (23))){
var inst_67908 = (state_67949[(14)]);
var inst_67914 = (inst_67908 == null);
var state_67949__$1 = state_67949;
if(cljs.core.truth_(inst_67914)){
var statearr_67986_68038 = state_67949__$1;
(statearr_67986_68038[(1)] = (26));

} else {
var statearr_67987_68039 = state_67949__$1;
(statearr_67987_68039[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67950 === (35))){
var inst_67934 = (state_67949[(2)]);
var state_67949__$1 = state_67949;
if(cljs.core.truth_(inst_67934)){
var statearr_67988_68040 = state_67949__$1;
(statearr_67988_68040[(1)] = (36));

} else {
var statearr_67989_68041 = state_67949__$1;
(statearr_67989_68041[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67950 === (19))){
var inst_67876 = (state_67949[(7)]);
var inst_67896 = cljs.core.apply.call(null,cljs.core.hash_map,inst_67876);
var state_67949__$1 = state_67949;
var statearr_67990_68042 = state_67949__$1;
(statearr_67990_68042[(2)] = inst_67896);

(statearr_67990_68042[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67950 === (11))){
var inst_67876 = (state_67949[(7)]);
var inst_67880 = (inst_67876 == null);
var inst_67881 = cljs.core.not.call(null,inst_67880);
var state_67949__$1 = state_67949;
if(inst_67881){
var statearr_67991_68043 = state_67949__$1;
(statearr_67991_68043[(1)] = (13));

} else {
var statearr_67992_68044 = state_67949__$1;
(statearr_67992_68044[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67950 === (9))){
var inst_67851 = (state_67949[(8)]);
var state_67949__$1 = state_67949;
var statearr_67993_68045 = state_67949__$1;
(statearr_67993_68045[(2)] = inst_67851);

(statearr_67993_68045[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67950 === (5))){
var state_67949__$1 = state_67949;
var statearr_67994_68046 = state_67949__$1;
(statearr_67994_68046[(2)] = true);

(statearr_67994_68046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67950 === (14))){
var state_67949__$1 = state_67949;
var statearr_67995_68047 = state_67949__$1;
(statearr_67995_68047[(2)] = false);

(statearr_67995_68047[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67950 === (26))){
var inst_67909 = (state_67949[(9)]);
var inst_67916 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_67909);
var state_67949__$1 = state_67949;
var statearr_67996_68048 = state_67949__$1;
(statearr_67996_68048[(2)] = inst_67916);

(statearr_67996_68048[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67950 === (16))){
var state_67949__$1 = state_67949;
var statearr_67997_68049 = state_67949__$1;
(statearr_67997_68049[(2)] = true);

(statearr_67997_68049[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67950 === (38))){
var inst_67939 = (state_67949[(2)]);
var state_67949__$1 = state_67949;
var statearr_67998_68050 = state_67949__$1;
(statearr_67998_68050[(2)] = inst_67939);

(statearr_67998_68050[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67950 === (30))){
var inst_67901 = (state_67949[(13)]);
var inst_67909 = (state_67949[(9)]);
var inst_67900 = (state_67949[(11)]);
var inst_67926 = cljs.core.empty_QMARK_.call(null,inst_67900);
var inst_67927 = inst_67901.call(null,inst_67909);
var inst_67928 = cljs.core.not.call(null,inst_67927);
var inst_67929 = (inst_67926) && (inst_67928);
var state_67949__$1 = state_67949;
var statearr_67999_68051 = state_67949__$1;
(statearr_67999_68051[(2)] = inst_67929);

(statearr_67999_68051[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67950 === (10))){
var inst_67851 = (state_67949[(8)]);
var inst_67872 = (state_67949[(2)]);
var inst_67873 = cljs.core.get.call(null,inst_67872,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_67874 = cljs.core.get.call(null,inst_67872,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_67875 = cljs.core.get.call(null,inst_67872,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_67876 = inst_67851;
var state_67949__$1 = (function (){var statearr_68000 = state_67949;
(statearr_68000[(16)] = inst_67873);

(statearr_68000[(7)] = inst_67876);

(statearr_68000[(17)] = inst_67874);

(statearr_68000[(18)] = inst_67875);

return statearr_68000;
})();
var statearr_68001_68052 = state_67949__$1;
(statearr_68001_68052[(2)] = null);

(statearr_68001_68052[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67950 === (18))){
var inst_67891 = (state_67949[(2)]);
var state_67949__$1 = state_67949;
var statearr_68002_68053 = state_67949__$1;
(statearr_68002_68053[(2)] = inst_67891);

(statearr_68002_68053[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67950 === (37))){
var state_67949__$1 = state_67949;
var statearr_68003_68054 = state_67949__$1;
(statearr_68003_68054[(2)] = null);

(statearr_68003_68054[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67950 === (8))){
var inst_67851 = (state_67949[(8)]);
var inst_67869 = cljs.core.apply.call(null,cljs.core.hash_map,inst_67851);
var state_67949__$1 = state_67949;
var statearr_68004_68055 = state_67949__$1;
(statearr_68004_68055[(2)] = inst_67869);

(statearr_68004_68055[(1)] = (10));


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
});})(c__66950__auto___68009,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__66860__auto__,c__66950__auto___68009,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__66861__auto__ = null;
var cljs$core$async$mix_$_state_machine__66861__auto____0 = (function (){
var statearr_68005 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_68005[(0)] = cljs$core$async$mix_$_state_machine__66861__auto__);

(statearr_68005[(1)] = (1));

return statearr_68005;
});
var cljs$core$async$mix_$_state_machine__66861__auto____1 = (function (state_67949){
while(true){
var ret_value__66862__auto__ = (function (){try{while(true){
var result__66863__auto__ = switch__66860__auto__.call(null,state_67949);
if(cljs.core.keyword_identical_QMARK_.call(null,result__66863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66863__auto__;
}
break;
}
}catch (e68006){if((e68006 instanceof Object)){
var ex__66864__auto__ = e68006;
var statearr_68007_68056 = state_67949;
(statearr_68007_68056[(5)] = ex__66864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68006;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__66862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68057 = state_67949;
state_67949 = G__68057;
continue;
} else {
return ret_value__66862__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__66861__auto__ = function(state_67949){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__66861__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__66861__auto____1.call(this,state_67949);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__66861__auto____0;
cljs$core$async$mix_$_state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__66861__auto____1;
return cljs$core$async$mix_$_state_machine__66861__auto__;
})()
;})(switch__66860__auto__,c__66950__auto___68009,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__66952__auto__ = (function (){var statearr_68008 = f__66951__auto__.call(null);
(statearr_68008[(6)] = c__66950__auto___68009);

return statearr_68008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__66952__auto__);
});})(c__66950__auto___68009,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__63494__auto__ = (((p == null))?null:p);
var m__63495__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__63494__auto__)]);
if(!((m__63495__auto__ == null))){
return m__63495__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__63495__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__63495__auto____$1 == null))){
return m__63495__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__63494__auto__ = (((p == null))?null:p);
var m__63495__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__63494__auto__)]);
if(!((m__63495__auto__ == null))){
return m__63495__auto__.call(null,p,v,ch);
} else {
var m__63495__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__63495__auto____$1 == null))){
return m__63495__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__68059 = arguments.length;
switch (G__68059) {
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
var x__63494__auto__ = (((p == null))?null:p);
var m__63495__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__63494__auto__)]);
if(!((m__63495__auto__ == null))){
return m__63495__auto__.call(null,p);
} else {
var m__63495__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__63495__auto____$1 == null))){
return m__63495__auto____$1.call(null,p);
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
var x__63494__auto__ = (((p == null))?null:p);
var m__63495__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__63494__auto__)]);
if(!((m__63495__auto__ == null))){
return m__63495__auto__.call(null,p,v);
} else {
var m__63495__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__63495__auto____$1 == null))){
return m__63495__auto____$1.call(null,p,v);
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
var G__68063 = arguments.length;
switch (G__68063) {
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
var or__62761__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__62761__auto__)){
return or__62761__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__62761__auto__,mults){
return (function (p1__68061_SHARP_){
if(cljs.core.truth_(p1__68061_SHARP_.call(null,topic))){
return p1__68061_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__68061_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__62761__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async68064 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async68064 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta68065){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta68065 = meta68065;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async68064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_68066,meta68065__$1){
var self__ = this;
var _68066__$1 = this;
return (new cljs.core.async.t_cljs$core$async68064(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta68065__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async68064.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_68066){
var self__ = this;
var _68066__$1 = this;
return self__.meta68065;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async68064.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async68064.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async68064.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async68064.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async68064.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async68064.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async68064.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async68064.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta68065","meta68065",1999456920,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async68064.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async68064.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async68064";

cljs.core.async.t_cljs$core$async68064.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__63432__auto__,writer__63433__auto__,opt__63434__auto__){
return cljs.core._write.call(null,writer__63433__auto__,"cljs.core.async/t_cljs$core$async68064");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async68064 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async68064(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta68065){
return (new cljs.core.async.t_cljs$core$async68064(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta68065));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async68064(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__66950__auto___68184 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__66950__auto___68184,mults,ensure_mult,p){
return (function (){
var f__66951__auto__ = (function (){var switch__66860__auto__ = ((function (c__66950__auto___68184,mults,ensure_mult,p){
return (function (state_68138){
var state_val_68139 = (state_68138[(1)]);
if((state_val_68139 === (7))){
var inst_68134 = (state_68138[(2)]);
var state_68138__$1 = state_68138;
var statearr_68140_68185 = state_68138__$1;
(statearr_68140_68185[(2)] = inst_68134);

(statearr_68140_68185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68139 === (20))){
var state_68138__$1 = state_68138;
var statearr_68141_68186 = state_68138__$1;
(statearr_68141_68186[(2)] = null);

(statearr_68141_68186[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68139 === (1))){
var state_68138__$1 = state_68138;
var statearr_68142_68187 = state_68138__$1;
(statearr_68142_68187[(2)] = null);

(statearr_68142_68187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68139 === (24))){
var inst_68117 = (state_68138[(7)]);
var inst_68126 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_68117);
var state_68138__$1 = state_68138;
var statearr_68143_68188 = state_68138__$1;
(statearr_68143_68188[(2)] = inst_68126);

(statearr_68143_68188[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68139 === (4))){
var inst_68069 = (state_68138[(8)]);
var inst_68069__$1 = (state_68138[(2)]);
var inst_68070 = (inst_68069__$1 == null);
var state_68138__$1 = (function (){var statearr_68144 = state_68138;
(statearr_68144[(8)] = inst_68069__$1);

return statearr_68144;
})();
if(cljs.core.truth_(inst_68070)){
var statearr_68145_68189 = state_68138__$1;
(statearr_68145_68189[(1)] = (5));

} else {
var statearr_68146_68190 = state_68138__$1;
(statearr_68146_68190[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68139 === (15))){
var inst_68111 = (state_68138[(2)]);
var state_68138__$1 = state_68138;
var statearr_68147_68191 = state_68138__$1;
(statearr_68147_68191[(2)] = inst_68111);

(statearr_68147_68191[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68139 === (21))){
var inst_68131 = (state_68138[(2)]);
var state_68138__$1 = (function (){var statearr_68148 = state_68138;
(statearr_68148[(9)] = inst_68131);

return statearr_68148;
})();
var statearr_68149_68192 = state_68138__$1;
(statearr_68149_68192[(2)] = null);

(statearr_68149_68192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68139 === (13))){
var inst_68093 = (state_68138[(10)]);
var inst_68095 = cljs.core.chunked_seq_QMARK_.call(null,inst_68093);
var state_68138__$1 = state_68138;
if(inst_68095){
var statearr_68150_68193 = state_68138__$1;
(statearr_68150_68193[(1)] = (16));

} else {
var statearr_68151_68194 = state_68138__$1;
(statearr_68151_68194[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68139 === (22))){
var inst_68123 = (state_68138[(2)]);
var state_68138__$1 = state_68138;
if(cljs.core.truth_(inst_68123)){
var statearr_68152_68195 = state_68138__$1;
(statearr_68152_68195[(1)] = (23));

} else {
var statearr_68153_68196 = state_68138__$1;
(statearr_68153_68196[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68139 === (6))){
var inst_68069 = (state_68138[(8)]);
var inst_68119 = (state_68138[(11)]);
var inst_68117 = (state_68138[(7)]);
var inst_68117__$1 = topic_fn.call(null,inst_68069);
var inst_68118 = cljs.core.deref.call(null,mults);
var inst_68119__$1 = cljs.core.get.call(null,inst_68118,inst_68117__$1);
var state_68138__$1 = (function (){var statearr_68154 = state_68138;
(statearr_68154[(11)] = inst_68119__$1);

(statearr_68154[(7)] = inst_68117__$1);

return statearr_68154;
})();
if(cljs.core.truth_(inst_68119__$1)){
var statearr_68155_68197 = state_68138__$1;
(statearr_68155_68197[(1)] = (19));

} else {
var statearr_68156_68198 = state_68138__$1;
(statearr_68156_68198[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68139 === (25))){
var inst_68128 = (state_68138[(2)]);
var state_68138__$1 = state_68138;
var statearr_68157_68199 = state_68138__$1;
(statearr_68157_68199[(2)] = inst_68128);

(statearr_68157_68199[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68139 === (17))){
var inst_68093 = (state_68138[(10)]);
var inst_68102 = cljs.core.first.call(null,inst_68093);
var inst_68103 = cljs.core.async.muxch_STAR_.call(null,inst_68102);
var inst_68104 = cljs.core.async.close_BANG_.call(null,inst_68103);
var inst_68105 = cljs.core.next.call(null,inst_68093);
var inst_68079 = inst_68105;
var inst_68080 = null;
var inst_68081 = (0);
var inst_68082 = (0);
var state_68138__$1 = (function (){var statearr_68158 = state_68138;
(statearr_68158[(12)] = inst_68079);

(statearr_68158[(13)] = inst_68104);

(statearr_68158[(14)] = inst_68080);

(statearr_68158[(15)] = inst_68082);

(statearr_68158[(16)] = inst_68081);

return statearr_68158;
})();
var statearr_68159_68200 = state_68138__$1;
(statearr_68159_68200[(2)] = null);

(statearr_68159_68200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68139 === (3))){
var inst_68136 = (state_68138[(2)]);
var state_68138__$1 = state_68138;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68138__$1,inst_68136);
} else {
if((state_val_68139 === (12))){
var inst_68113 = (state_68138[(2)]);
var state_68138__$1 = state_68138;
var statearr_68160_68201 = state_68138__$1;
(statearr_68160_68201[(2)] = inst_68113);

(statearr_68160_68201[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68139 === (2))){
var state_68138__$1 = state_68138;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68138__$1,(4),ch);
} else {
if((state_val_68139 === (23))){
var state_68138__$1 = state_68138;
var statearr_68161_68202 = state_68138__$1;
(statearr_68161_68202[(2)] = null);

(statearr_68161_68202[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68139 === (19))){
var inst_68069 = (state_68138[(8)]);
var inst_68119 = (state_68138[(11)]);
var inst_68121 = cljs.core.async.muxch_STAR_.call(null,inst_68119);
var state_68138__$1 = state_68138;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_68138__$1,(22),inst_68121,inst_68069);
} else {
if((state_val_68139 === (11))){
var inst_68079 = (state_68138[(12)]);
var inst_68093 = (state_68138[(10)]);
var inst_68093__$1 = cljs.core.seq.call(null,inst_68079);
var state_68138__$1 = (function (){var statearr_68162 = state_68138;
(statearr_68162[(10)] = inst_68093__$1);

return statearr_68162;
})();
if(inst_68093__$1){
var statearr_68163_68203 = state_68138__$1;
(statearr_68163_68203[(1)] = (13));

} else {
var statearr_68164_68204 = state_68138__$1;
(statearr_68164_68204[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68139 === (9))){
var inst_68115 = (state_68138[(2)]);
var state_68138__$1 = state_68138;
var statearr_68165_68205 = state_68138__$1;
(statearr_68165_68205[(2)] = inst_68115);

(statearr_68165_68205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68139 === (5))){
var inst_68076 = cljs.core.deref.call(null,mults);
var inst_68077 = cljs.core.vals.call(null,inst_68076);
var inst_68078 = cljs.core.seq.call(null,inst_68077);
var inst_68079 = inst_68078;
var inst_68080 = null;
var inst_68081 = (0);
var inst_68082 = (0);
var state_68138__$1 = (function (){var statearr_68166 = state_68138;
(statearr_68166[(12)] = inst_68079);

(statearr_68166[(14)] = inst_68080);

(statearr_68166[(15)] = inst_68082);

(statearr_68166[(16)] = inst_68081);

return statearr_68166;
})();
var statearr_68167_68206 = state_68138__$1;
(statearr_68167_68206[(2)] = null);

(statearr_68167_68206[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68139 === (14))){
var state_68138__$1 = state_68138;
var statearr_68171_68207 = state_68138__$1;
(statearr_68171_68207[(2)] = null);

(statearr_68171_68207[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68139 === (16))){
var inst_68093 = (state_68138[(10)]);
var inst_68097 = cljs.core.chunk_first.call(null,inst_68093);
var inst_68098 = cljs.core.chunk_rest.call(null,inst_68093);
var inst_68099 = cljs.core.count.call(null,inst_68097);
var inst_68079 = inst_68098;
var inst_68080 = inst_68097;
var inst_68081 = inst_68099;
var inst_68082 = (0);
var state_68138__$1 = (function (){var statearr_68172 = state_68138;
(statearr_68172[(12)] = inst_68079);

(statearr_68172[(14)] = inst_68080);

(statearr_68172[(15)] = inst_68082);

(statearr_68172[(16)] = inst_68081);

return statearr_68172;
})();
var statearr_68173_68208 = state_68138__$1;
(statearr_68173_68208[(2)] = null);

(statearr_68173_68208[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68139 === (10))){
var inst_68079 = (state_68138[(12)]);
var inst_68080 = (state_68138[(14)]);
var inst_68082 = (state_68138[(15)]);
var inst_68081 = (state_68138[(16)]);
var inst_68087 = cljs.core._nth.call(null,inst_68080,inst_68082);
var inst_68088 = cljs.core.async.muxch_STAR_.call(null,inst_68087);
var inst_68089 = cljs.core.async.close_BANG_.call(null,inst_68088);
var inst_68090 = (inst_68082 + (1));
var tmp68168 = inst_68079;
var tmp68169 = inst_68080;
var tmp68170 = inst_68081;
var inst_68079__$1 = tmp68168;
var inst_68080__$1 = tmp68169;
var inst_68081__$1 = tmp68170;
var inst_68082__$1 = inst_68090;
var state_68138__$1 = (function (){var statearr_68174 = state_68138;
(statearr_68174[(12)] = inst_68079__$1);

(statearr_68174[(17)] = inst_68089);

(statearr_68174[(14)] = inst_68080__$1);

(statearr_68174[(15)] = inst_68082__$1);

(statearr_68174[(16)] = inst_68081__$1);

return statearr_68174;
})();
var statearr_68175_68209 = state_68138__$1;
(statearr_68175_68209[(2)] = null);

(statearr_68175_68209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68139 === (18))){
var inst_68108 = (state_68138[(2)]);
var state_68138__$1 = state_68138;
var statearr_68176_68210 = state_68138__$1;
(statearr_68176_68210[(2)] = inst_68108);

(statearr_68176_68210[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68139 === (8))){
var inst_68082 = (state_68138[(15)]);
var inst_68081 = (state_68138[(16)]);
var inst_68084 = (inst_68082 < inst_68081);
var inst_68085 = inst_68084;
var state_68138__$1 = state_68138;
if(cljs.core.truth_(inst_68085)){
var statearr_68177_68211 = state_68138__$1;
(statearr_68177_68211[(1)] = (10));

} else {
var statearr_68178_68212 = state_68138__$1;
(statearr_68178_68212[(1)] = (11));

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
});})(c__66950__auto___68184,mults,ensure_mult,p))
;
return ((function (switch__66860__auto__,c__66950__auto___68184,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__66861__auto__ = null;
var cljs$core$async$state_machine__66861__auto____0 = (function (){
var statearr_68179 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_68179[(0)] = cljs$core$async$state_machine__66861__auto__);

(statearr_68179[(1)] = (1));

return statearr_68179;
});
var cljs$core$async$state_machine__66861__auto____1 = (function (state_68138){
while(true){
var ret_value__66862__auto__ = (function (){try{while(true){
var result__66863__auto__ = switch__66860__auto__.call(null,state_68138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__66863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66863__auto__;
}
break;
}
}catch (e68180){if((e68180 instanceof Object)){
var ex__66864__auto__ = e68180;
var statearr_68181_68213 = state_68138;
(statearr_68181_68213[(5)] = ex__66864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__66862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68214 = state_68138;
state_68138 = G__68214;
continue;
} else {
return ret_value__66862__auto__;
}
break;
}
});
cljs$core$async$state_machine__66861__auto__ = function(state_68138){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__66861__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__66861__auto____1.call(this,state_68138);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__66861__auto____0;
cljs$core$async$state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__66861__auto____1;
return cljs$core$async$state_machine__66861__auto__;
})()
;})(switch__66860__auto__,c__66950__auto___68184,mults,ensure_mult,p))
})();
var state__66952__auto__ = (function (){var statearr_68182 = f__66951__auto__.call(null);
(statearr_68182[(6)] = c__66950__auto___68184);

return statearr_68182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__66952__auto__);
});})(c__66950__auto___68184,mults,ensure_mult,p))
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
var G__68216 = arguments.length;
switch (G__68216) {
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
var G__68219 = arguments.length;
switch (G__68219) {
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
var G__68222 = arguments.length;
switch (G__68222) {
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
var c__66950__auto___68289 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__66950__auto___68289,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__66951__auto__ = (function (){var switch__66860__auto__ = ((function (c__66950__auto___68289,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_68261){
var state_val_68262 = (state_68261[(1)]);
if((state_val_68262 === (7))){
var state_68261__$1 = state_68261;
var statearr_68263_68290 = state_68261__$1;
(statearr_68263_68290[(2)] = null);

(statearr_68263_68290[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68262 === (1))){
var state_68261__$1 = state_68261;
var statearr_68264_68291 = state_68261__$1;
(statearr_68264_68291[(2)] = null);

(statearr_68264_68291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68262 === (4))){
var inst_68225 = (state_68261[(7)]);
var inst_68227 = (inst_68225 < cnt);
var state_68261__$1 = state_68261;
if(cljs.core.truth_(inst_68227)){
var statearr_68265_68292 = state_68261__$1;
(statearr_68265_68292[(1)] = (6));

} else {
var statearr_68266_68293 = state_68261__$1;
(statearr_68266_68293[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68262 === (15))){
var inst_68257 = (state_68261[(2)]);
var state_68261__$1 = state_68261;
var statearr_68267_68294 = state_68261__$1;
(statearr_68267_68294[(2)] = inst_68257);

(statearr_68267_68294[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68262 === (13))){
var inst_68250 = cljs.core.async.close_BANG_.call(null,out);
var state_68261__$1 = state_68261;
var statearr_68268_68295 = state_68261__$1;
(statearr_68268_68295[(2)] = inst_68250);

(statearr_68268_68295[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68262 === (6))){
var state_68261__$1 = state_68261;
var statearr_68269_68296 = state_68261__$1;
(statearr_68269_68296[(2)] = null);

(statearr_68269_68296[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68262 === (3))){
var inst_68259 = (state_68261[(2)]);
var state_68261__$1 = state_68261;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68261__$1,inst_68259);
} else {
if((state_val_68262 === (12))){
var inst_68247 = (state_68261[(8)]);
var inst_68247__$1 = (state_68261[(2)]);
var inst_68248 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_68247__$1);
var state_68261__$1 = (function (){var statearr_68270 = state_68261;
(statearr_68270[(8)] = inst_68247__$1);

return statearr_68270;
})();
if(cljs.core.truth_(inst_68248)){
var statearr_68271_68297 = state_68261__$1;
(statearr_68271_68297[(1)] = (13));

} else {
var statearr_68272_68298 = state_68261__$1;
(statearr_68272_68298[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68262 === (2))){
var inst_68224 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_68225 = (0);
var state_68261__$1 = (function (){var statearr_68273 = state_68261;
(statearr_68273[(7)] = inst_68225);

(statearr_68273[(9)] = inst_68224);

return statearr_68273;
})();
var statearr_68274_68299 = state_68261__$1;
(statearr_68274_68299[(2)] = null);

(statearr_68274_68299[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68262 === (11))){
var inst_68225 = (state_68261[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_68261,(10),Object,null,(9));
var inst_68234 = chs__$1.call(null,inst_68225);
var inst_68235 = done.call(null,inst_68225);
var inst_68236 = cljs.core.async.take_BANG_.call(null,inst_68234,inst_68235);
var state_68261__$1 = state_68261;
var statearr_68275_68300 = state_68261__$1;
(statearr_68275_68300[(2)] = inst_68236);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68261__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68262 === (9))){
var inst_68225 = (state_68261[(7)]);
var inst_68238 = (state_68261[(2)]);
var inst_68239 = (inst_68225 + (1));
var inst_68225__$1 = inst_68239;
var state_68261__$1 = (function (){var statearr_68276 = state_68261;
(statearr_68276[(7)] = inst_68225__$1);

(statearr_68276[(10)] = inst_68238);

return statearr_68276;
})();
var statearr_68277_68301 = state_68261__$1;
(statearr_68277_68301[(2)] = null);

(statearr_68277_68301[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68262 === (5))){
var inst_68245 = (state_68261[(2)]);
var state_68261__$1 = (function (){var statearr_68278 = state_68261;
(statearr_68278[(11)] = inst_68245);

return statearr_68278;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68261__$1,(12),dchan);
} else {
if((state_val_68262 === (14))){
var inst_68247 = (state_68261[(8)]);
var inst_68252 = cljs.core.apply.call(null,f,inst_68247);
var state_68261__$1 = state_68261;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_68261__$1,(16),out,inst_68252);
} else {
if((state_val_68262 === (16))){
var inst_68254 = (state_68261[(2)]);
var state_68261__$1 = (function (){var statearr_68279 = state_68261;
(statearr_68279[(12)] = inst_68254);

return statearr_68279;
})();
var statearr_68280_68302 = state_68261__$1;
(statearr_68280_68302[(2)] = null);

(statearr_68280_68302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68262 === (10))){
var inst_68229 = (state_68261[(2)]);
var inst_68230 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_68261__$1 = (function (){var statearr_68281 = state_68261;
(statearr_68281[(13)] = inst_68229);

return statearr_68281;
})();
var statearr_68282_68303 = state_68261__$1;
(statearr_68282_68303[(2)] = inst_68230);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68261__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68262 === (8))){
var inst_68243 = (state_68261[(2)]);
var state_68261__$1 = state_68261;
var statearr_68283_68304 = state_68261__$1;
(statearr_68283_68304[(2)] = inst_68243);

(statearr_68283_68304[(1)] = (5));


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
});})(c__66950__auto___68289,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__66860__auto__,c__66950__auto___68289,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__66861__auto__ = null;
var cljs$core$async$state_machine__66861__auto____0 = (function (){
var statearr_68284 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_68284[(0)] = cljs$core$async$state_machine__66861__auto__);

(statearr_68284[(1)] = (1));

return statearr_68284;
});
var cljs$core$async$state_machine__66861__auto____1 = (function (state_68261){
while(true){
var ret_value__66862__auto__ = (function (){try{while(true){
var result__66863__auto__ = switch__66860__auto__.call(null,state_68261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__66863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66863__auto__;
}
break;
}
}catch (e68285){if((e68285 instanceof Object)){
var ex__66864__auto__ = e68285;
var statearr_68286_68305 = state_68261;
(statearr_68286_68305[(5)] = ex__66864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__66862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68306 = state_68261;
state_68261 = G__68306;
continue;
} else {
return ret_value__66862__auto__;
}
break;
}
});
cljs$core$async$state_machine__66861__auto__ = function(state_68261){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__66861__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__66861__auto____1.call(this,state_68261);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__66861__auto____0;
cljs$core$async$state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__66861__auto____1;
return cljs$core$async$state_machine__66861__auto__;
})()
;})(switch__66860__auto__,c__66950__auto___68289,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__66952__auto__ = (function (){var statearr_68287 = f__66951__auto__.call(null);
(statearr_68287[(6)] = c__66950__auto___68289);

return statearr_68287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__66952__auto__);
});})(c__66950__auto___68289,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__68309 = arguments.length;
switch (G__68309) {
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
var c__66950__auto___68363 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__66950__auto___68363,out){
return (function (){
var f__66951__auto__ = (function (){var switch__66860__auto__ = ((function (c__66950__auto___68363,out){
return (function (state_68341){
var state_val_68342 = (state_68341[(1)]);
if((state_val_68342 === (7))){
var inst_68320 = (state_68341[(7)]);
var inst_68321 = (state_68341[(8)]);
var inst_68320__$1 = (state_68341[(2)]);
var inst_68321__$1 = cljs.core.nth.call(null,inst_68320__$1,(0),null);
var inst_68322 = cljs.core.nth.call(null,inst_68320__$1,(1),null);
var inst_68323 = (inst_68321__$1 == null);
var state_68341__$1 = (function (){var statearr_68343 = state_68341;
(statearr_68343[(7)] = inst_68320__$1);

(statearr_68343[(8)] = inst_68321__$1);

(statearr_68343[(9)] = inst_68322);

return statearr_68343;
})();
if(cljs.core.truth_(inst_68323)){
var statearr_68344_68364 = state_68341__$1;
(statearr_68344_68364[(1)] = (8));

} else {
var statearr_68345_68365 = state_68341__$1;
(statearr_68345_68365[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68342 === (1))){
var inst_68310 = cljs.core.vec.call(null,chs);
var inst_68311 = inst_68310;
var state_68341__$1 = (function (){var statearr_68346 = state_68341;
(statearr_68346[(10)] = inst_68311);

return statearr_68346;
})();
var statearr_68347_68366 = state_68341__$1;
(statearr_68347_68366[(2)] = null);

(statearr_68347_68366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68342 === (4))){
var inst_68311 = (state_68341[(10)]);
var state_68341__$1 = state_68341;
return cljs.core.async.ioc_alts_BANG_.call(null,state_68341__$1,(7),inst_68311);
} else {
if((state_val_68342 === (6))){
var inst_68337 = (state_68341[(2)]);
var state_68341__$1 = state_68341;
var statearr_68348_68367 = state_68341__$1;
(statearr_68348_68367[(2)] = inst_68337);

(statearr_68348_68367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68342 === (3))){
var inst_68339 = (state_68341[(2)]);
var state_68341__$1 = state_68341;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68341__$1,inst_68339);
} else {
if((state_val_68342 === (2))){
var inst_68311 = (state_68341[(10)]);
var inst_68313 = cljs.core.count.call(null,inst_68311);
var inst_68314 = (inst_68313 > (0));
var state_68341__$1 = state_68341;
if(cljs.core.truth_(inst_68314)){
var statearr_68350_68368 = state_68341__$1;
(statearr_68350_68368[(1)] = (4));

} else {
var statearr_68351_68369 = state_68341__$1;
(statearr_68351_68369[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68342 === (11))){
var inst_68311 = (state_68341[(10)]);
var inst_68330 = (state_68341[(2)]);
var tmp68349 = inst_68311;
var inst_68311__$1 = tmp68349;
var state_68341__$1 = (function (){var statearr_68352 = state_68341;
(statearr_68352[(11)] = inst_68330);

(statearr_68352[(10)] = inst_68311__$1);

return statearr_68352;
})();
var statearr_68353_68370 = state_68341__$1;
(statearr_68353_68370[(2)] = null);

(statearr_68353_68370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68342 === (9))){
var inst_68321 = (state_68341[(8)]);
var state_68341__$1 = state_68341;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_68341__$1,(11),out,inst_68321);
} else {
if((state_val_68342 === (5))){
var inst_68335 = cljs.core.async.close_BANG_.call(null,out);
var state_68341__$1 = state_68341;
var statearr_68354_68371 = state_68341__$1;
(statearr_68354_68371[(2)] = inst_68335);

(statearr_68354_68371[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68342 === (10))){
var inst_68333 = (state_68341[(2)]);
var state_68341__$1 = state_68341;
var statearr_68355_68372 = state_68341__$1;
(statearr_68355_68372[(2)] = inst_68333);

(statearr_68355_68372[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68342 === (8))){
var inst_68320 = (state_68341[(7)]);
var inst_68321 = (state_68341[(8)]);
var inst_68311 = (state_68341[(10)]);
var inst_68322 = (state_68341[(9)]);
var inst_68325 = (function (){var cs = inst_68311;
var vec__68316 = inst_68320;
var v = inst_68321;
var c = inst_68322;
return ((function (cs,vec__68316,v,c,inst_68320,inst_68321,inst_68311,inst_68322,state_val_68342,c__66950__auto___68363,out){
return (function (p1__68307_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__68307_SHARP_);
});
;})(cs,vec__68316,v,c,inst_68320,inst_68321,inst_68311,inst_68322,state_val_68342,c__66950__auto___68363,out))
})();
var inst_68326 = cljs.core.filterv.call(null,inst_68325,inst_68311);
var inst_68311__$1 = inst_68326;
var state_68341__$1 = (function (){var statearr_68356 = state_68341;
(statearr_68356[(10)] = inst_68311__$1);

return statearr_68356;
})();
var statearr_68357_68373 = state_68341__$1;
(statearr_68357_68373[(2)] = null);

(statearr_68357_68373[(1)] = (2));


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
});})(c__66950__auto___68363,out))
;
return ((function (switch__66860__auto__,c__66950__auto___68363,out){
return (function() {
var cljs$core$async$state_machine__66861__auto__ = null;
var cljs$core$async$state_machine__66861__auto____0 = (function (){
var statearr_68358 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_68358[(0)] = cljs$core$async$state_machine__66861__auto__);

(statearr_68358[(1)] = (1));

return statearr_68358;
});
var cljs$core$async$state_machine__66861__auto____1 = (function (state_68341){
while(true){
var ret_value__66862__auto__ = (function (){try{while(true){
var result__66863__auto__ = switch__66860__auto__.call(null,state_68341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__66863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66863__auto__;
}
break;
}
}catch (e68359){if((e68359 instanceof Object)){
var ex__66864__auto__ = e68359;
var statearr_68360_68374 = state_68341;
(statearr_68360_68374[(5)] = ex__66864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__66862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68375 = state_68341;
state_68341 = G__68375;
continue;
} else {
return ret_value__66862__auto__;
}
break;
}
});
cljs$core$async$state_machine__66861__auto__ = function(state_68341){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__66861__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__66861__auto____1.call(this,state_68341);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__66861__auto____0;
cljs$core$async$state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__66861__auto____1;
return cljs$core$async$state_machine__66861__auto__;
})()
;})(switch__66860__auto__,c__66950__auto___68363,out))
})();
var state__66952__auto__ = (function (){var statearr_68361 = f__66951__auto__.call(null);
(statearr_68361[(6)] = c__66950__auto___68363);

return statearr_68361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__66952__auto__);
});})(c__66950__auto___68363,out))
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
var G__68377 = arguments.length;
switch (G__68377) {
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
var c__66950__auto___68422 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__66950__auto___68422,out){
return (function (){
var f__66951__auto__ = (function (){var switch__66860__auto__ = ((function (c__66950__auto___68422,out){
return (function (state_68401){
var state_val_68402 = (state_68401[(1)]);
if((state_val_68402 === (7))){
var inst_68383 = (state_68401[(7)]);
var inst_68383__$1 = (state_68401[(2)]);
var inst_68384 = (inst_68383__$1 == null);
var inst_68385 = cljs.core.not.call(null,inst_68384);
var state_68401__$1 = (function (){var statearr_68403 = state_68401;
(statearr_68403[(7)] = inst_68383__$1);

return statearr_68403;
})();
if(inst_68385){
var statearr_68404_68423 = state_68401__$1;
(statearr_68404_68423[(1)] = (8));

} else {
var statearr_68405_68424 = state_68401__$1;
(statearr_68405_68424[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68402 === (1))){
var inst_68378 = (0);
var state_68401__$1 = (function (){var statearr_68406 = state_68401;
(statearr_68406[(8)] = inst_68378);

return statearr_68406;
})();
var statearr_68407_68425 = state_68401__$1;
(statearr_68407_68425[(2)] = null);

(statearr_68407_68425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68402 === (4))){
var state_68401__$1 = state_68401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68401__$1,(7),ch);
} else {
if((state_val_68402 === (6))){
var inst_68396 = (state_68401[(2)]);
var state_68401__$1 = state_68401;
var statearr_68408_68426 = state_68401__$1;
(statearr_68408_68426[(2)] = inst_68396);

(statearr_68408_68426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68402 === (3))){
var inst_68398 = (state_68401[(2)]);
var inst_68399 = cljs.core.async.close_BANG_.call(null,out);
var state_68401__$1 = (function (){var statearr_68409 = state_68401;
(statearr_68409[(9)] = inst_68398);

return statearr_68409;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68401__$1,inst_68399);
} else {
if((state_val_68402 === (2))){
var inst_68378 = (state_68401[(8)]);
var inst_68380 = (inst_68378 < n);
var state_68401__$1 = state_68401;
if(cljs.core.truth_(inst_68380)){
var statearr_68410_68427 = state_68401__$1;
(statearr_68410_68427[(1)] = (4));

} else {
var statearr_68411_68428 = state_68401__$1;
(statearr_68411_68428[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68402 === (11))){
var inst_68378 = (state_68401[(8)]);
var inst_68388 = (state_68401[(2)]);
var inst_68389 = (inst_68378 + (1));
var inst_68378__$1 = inst_68389;
var state_68401__$1 = (function (){var statearr_68412 = state_68401;
(statearr_68412[(10)] = inst_68388);

(statearr_68412[(8)] = inst_68378__$1);

return statearr_68412;
})();
var statearr_68413_68429 = state_68401__$1;
(statearr_68413_68429[(2)] = null);

(statearr_68413_68429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68402 === (9))){
var state_68401__$1 = state_68401;
var statearr_68414_68430 = state_68401__$1;
(statearr_68414_68430[(2)] = null);

(statearr_68414_68430[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68402 === (5))){
var state_68401__$1 = state_68401;
var statearr_68415_68431 = state_68401__$1;
(statearr_68415_68431[(2)] = null);

(statearr_68415_68431[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68402 === (10))){
var inst_68393 = (state_68401[(2)]);
var state_68401__$1 = state_68401;
var statearr_68416_68432 = state_68401__$1;
(statearr_68416_68432[(2)] = inst_68393);

(statearr_68416_68432[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68402 === (8))){
var inst_68383 = (state_68401[(7)]);
var state_68401__$1 = state_68401;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_68401__$1,(11),out,inst_68383);
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
});})(c__66950__auto___68422,out))
;
return ((function (switch__66860__auto__,c__66950__auto___68422,out){
return (function() {
var cljs$core$async$state_machine__66861__auto__ = null;
var cljs$core$async$state_machine__66861__auto____0 = (function (){
var statearr_68417 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_68417[(0)] = cljs$core$async$state_machine__66861__auto__);

(statearr_68417[(1)] = (1));

return statearr_68417;
});
var cljs$core$async$state_machine__66861__auto____1 = (function (state_68401){
while(true){
var ret_value__66862__auto__ = (function (){try{while(true){
var result__66863__auto__ = switch__66860__auto__.call(null,state_68401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__66863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66863__auto__;
}
break;
}
}catch (e68418){if((e68418 instanceof Object)){
var ex__66864__auto__ = e68418;
var statearr_68419_68433 = state_68401;
(statearr_68419_68433[(5)] = ex__66864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__66862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68434 = state_68401;
state_68401 = G__68434;
continue;
} else {
return ret_value__66862__auto__;
}
break;
}
});
cljs$core$async$state_machine__66861__auto__ = function(state_68401){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__66861__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__66861__auto____1.call(this,state_68401);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__66861__auto____0;
cljs$core$async$state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__66861__auto____1;
return cljs$core$async$state_machine__66861__auto__;
})()
;})(switch__66860__auto__,c__66950__auto___68422,out))
})();
var state__66952__auto__ = (function (){var statearr_68420 = f__66951__auto__.call(null);
(statearr_68420[(6)] = c__66950__auto___68422);

return statearr_68420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__66952__auto__);
});})(c__66950__auto___68422,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async68436 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async68436 = (function (f,ch,meta68437){
this.f = f;
this.ch = ch;
this.meta68437 = meta68437;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async68436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68438,meta68437__$1){
var self__ = this;
var _68438__$1 = this;
return (new cljs.core.async.t_cljs$core$async68436(self__.f,self__.ch,meta68437__$1));
});

cljs.core.async.t_cljs$core$async68436.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68438){
var self__ = this;
var _68438__$1 = this;
return self__.meta68437;
});

cljs.core.async.t_cljs$core$async68436.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async68436.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async68436.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async68436.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async68436.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async68439 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async68439 = (function (f,ch,meta68437,_,fn1,meta68440){
this.f = f;
this.ch = ch;
this.meta68437 = meta68437;
this._ = _;
this.fn1 = fn1;
this.meta68440 = meta68440;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async68439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_68441,meta68440__$1){
var self__ = this;
var _68441__$1 = this;
return (new cljs.core.async.t_cljs$core$async68439(self__.f,self__.ch,self__.meta68437,self__._,self__.fn1,meta68440__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async68439.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_68441){
var self__ = this;
var _68441__$1 = this;
return self__.meta68440;
});})(___$1))
;

cljs.core.async.t_cljs$core$async68439.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async68439.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async68439.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async68439.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__68435_SHARP_){
return f1.call(null,(((p1__68435_SHARP_ == null))?null:self__.f.call(null,p1__68435_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async68439.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta68437","meta68437",-2113556306,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async68436","cljs.core.async/t_cljs$core$async68436",1459664766,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta68440","meta68440",1961061574,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async68439.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async68439.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async68439";

cljs.core.async.t_cljs$core$async68439.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__63432__auto__,writer__63433__auto__,opt__63434__auto__){
return cljs.core._write.call(null,writer__63433__auto__,"cljs.core.async/t_cljs$core$async68439");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async68439 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async68439(f__$1,ch__$1,meta68437__$1,___$2,fn1__$1,meta68440){
return (new cljs.core.async.t_cljs$core$async68439(f__$1,ch__$1,meta68437__$1,___$2,fn1__$1,meta68440));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async68439(self__.f,self__.ch,self__.meta68437,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__62749__auto__ = ret;
if(cljs.core.truth_(and__62749__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__62749__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async68436.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async68436.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async68436.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta68437","meta68437",-2113556306,null)], null);
});

cljs.core.async.t_cljs$core$async68436.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async68436.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async68436";

cljs.core.async.t_cljs$core$async68436.cljs$lang$ctorPrWriter = (function (this__63432__auto__,writer__63433__auto__,opt__63434__auto__){
return cljs.core._write.call(null,writer__63433__auto__,"cljs.core.async/t_cljs$core$async68436");
});

cljs.core.async.__GT_t_cljs$core$async68436 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async68436(f__$1,ch__$1,meta68437){
return (new cljs.core.async.t_cljs$core$async68436(f__$1,ch__$1,meta68437));
});

}

return (new cljs.core.async.t_cljs$core$async68436(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async68442 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async68442 = (function (f,ch,meta68443){
this.f = f;
this.ch = ch;
this.meta68443 = meta68443;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async68442.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68444,meta68443__$1){
var self__ = this;
var _68444__$1 = this;
return (new cljs.core.async.t_cljs$core$async68442(self__.f,self__.ch,meta68443__$1));
});

cljs.core.async.t_cljs$core$async68442.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68444){
var self__ = this;
var _68444__$1 = this;
return self__.meta68443;
});

cljs.core.async.t_cljs$core$async68442.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async68442.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async68442.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async68442.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async68442.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async68442.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async68442.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta68443","meta68443",230427399,null)], null);
});

cljs.core.async.t_cljs$core$async68442.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async68442.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async68442";

cljs.core.async.t_cljs$core$async68442.cljs$lang$ctorPrWriter = (function (this__63432__auto__,writer__63433__auto__,opt__63434__auto__){
return cljs.core._write.call(null,writer__63433__auto__,"cljs.core.async/t_cljs$core$async68442");
});

cljs.core.async.__GT_t_cljs$core$async68442 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async68442(f__$1,ch__$1,meta68443){
return (new cljs.core.async.t_cljs$core$async68442(f__$1,ch__$1,meta68443));
});

}

return (new cljs.core.async.t_cljs$core$async68442(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async68445 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async68445 = (function (p,ch,meta68446){
this.p = p;
this.ch = ch;
this.meta68446 = meta68446;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async68445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68447,meta68446__$1){
var self__ = this;
var _68447__$1 = this;
return (new cljs.core.async.t_cljs$core$async68445(self__.p,self__.ch,meta68446__$1));
});

cljs.core.async.t_cljs$core$async68445.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68447){
var self__ = this;
var _68447__$1 = this;
return self__.meta68446;
});

cljs.core.async.t_cljs$core$async68445.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async68445.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async68445.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async68445.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async68445.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async68445.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async68445.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async68445.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta68446","meta68446",-2083572640,null)], null);
});

cljs.core.async.t_cljs$core$async68445.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async68445.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async68445";

cljs.core.async.t_cljs$core$async68445.cljs$lang$ctorPrWriter = (function (this__63432__auto__,writer__63433__auto__,opt__63434__auto__){
return cljs.core._write.call(null,writer__63433__auto__,"cljs.core.async/t_cljs$core$async68445");
});

cljs.core.async.__GT_t_cljs$core$async68445 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async68445(p__$1,ch__$1,meta68446){
return (new cljs.core.async.t_cljs$core$async68445(p__$1,ch__$1,meta68446));
});

}

return (new cljs.core.async.t_cljs$core$async68445(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__68449 = arguments.length;
switch (G__68449) {
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
var c__66950__auto___68489 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__66950__auto___68489,out){
return (function (){
var f__66951__auto__ = (function (){var switch__66860__auto__ = ((function (c__66950__auto___68489,out){
return (function (state_68470){
var state_val_68471 = (state_68470[(1)]);
if((state_val_68471 === (7))){
var inst_68466 = (state_68470[(2)]);
var state_68470__$1 = state_68470;
var statearr_68472_68490 = state_68470__$1;
(statearr_68472_68490[(2)] = inst_68466);

(statearr_68472_68490[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68471 === (1))){
var state_68470__$1 = state_68470;
var statearr_68473_68491 = state_68470__$1;
(statearr_68473_68491[(2)] = null);

(statearr_68473_68491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68471 === (4))){
var inst_68452 = (state_68470[(7)]);
var inst_68452__$1 = (state_68470[(2)]);
var inst_68453 = (inst_68452__$1 == null);
var state_68470__$1 = (function (){var statearr_68474 = state_68470;
(statearr_68474[(7)] = inst_68452__$1);

return statearr_68474;
})();
if(cljs.core.truth_(inst_68453)){
var statearr_68475_68492 = state_68470__$1;
(statearr_68475_68492[(1)] = (5));

} else {
var statearr_68476_68493 = state_68470__$1;
(statearr_68476_68493[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68471 === (6))){
var inst_68452 = (state_68470[(7)]);
var inst_68457 = p.call(null,inst_68452);
var state_68470__$1 = state_68470;
if(cljs.core.truth_(inst_68457)){
var statearr_68477_68494 = state_68470__$1;
(statearr_68477_68494[(1)] = (8));

} else {
var statearr_68478_68495 = state_68470__$1;
(statearr_68478_68495[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68471 === (3))){
var inst_68468 = (state_68470[(2)]);
var state_68470__$1 = state_68470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68470__$1,inst_68468);
} else {
if((state_val_68471 === (2))){
var state_68470__$1 = state_68470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68470__$1,(4),ch);
} else {
if((state_val_68471 === (11))){
var inst_68460 = (state_68470[(2)]);
var state_68470__$1 = state_68470;
var statearr_68479_68496 = state_68470__$1;
(statearr_68479_68496[(2)] = inst_68460);

(statearr_68479_68496[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68471 === (9))){
var state_68470__$1 = state_68470;
var statearr_68480_68497 = state_68470__$1;
(statearr_68480_68497[(2)] = null);

(statearr_68480_68497[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68471 === (5))){
var inst_68455 = cljs.core.async.close_BANG_.call(null,out);
var state_68470__$1 = state_68470;
var statearr_68481_68498 = state_68470__$1;
(statearr_68481_68498[(2)] = inst_68455);

(statearr_68481_68498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68471 === (10))){
var inst_68463 = (state_68470[(2)]);
var state_68470__$1 = (function (){var statearr_68482 = state_68470;
(statearr_68482[(8)] = inst_68463);

return statearr_68482;
})();
var statearr_68483_68499 = state_68470__$1;
(statearr_68483_68499[(2)] = null);

(statearr_68483_68499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68471 === (8))){
var inst_68452 = (state_68470[(7)]);
var state_68470__$1 = state_68470;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_68470__$1,(11),out,inst_68452);
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
});})(c__66950__auto___68489,out))
;
return ((function (switch__66860__auto__,c__66950__auto___68489,out){
return (function() {
var cljs$core$async$state_machine__66861__auto__ = null;
var cljs$core$async$state_machine__66861__auto____0 = (function (){
var statearr_68484 = [null,null,null,null,null,null,null,null,null];
(statearr_68484[(0)] = cljs$core$async$state_machine__66861__auto__);

(statearr_68484[(1)] = (1));

return statearr_68484;
});
var cljs$core$async$state_machine__66861__auto____1 = (function (state_68470){
while(true){
var ret_value__66862__auto__ = (function (){try{while(true){
var result__66863__auto__ = switch__66860__auto__.call(null,state_68470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__66863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66863__auto__;
}
break;
}
}catch (e68485){if((e68485 instanceof Object)){
var ex__66864__auto__ = e68485;
var statearr_68486_68500 = state_68470;
(statearr_68486_68500[(5)] = ex__66864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__66862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68501 = state_68470;
state_68470 = G__68501;
continue;
} else {
return ret_value__66862__auto__;
}
break;
}
});
cljs$core$async$state_machine__66861__auto__ = function(state_68470){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__66861__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__66861__auto____1.call(this,state_68470);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__66861__auto____0;
cljs$core$async$state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__66861__auto____1;
return cljs$core$async$state_machine__66861__auto__;
})()
;})(switch__66860__auto__,c__66950__auto___68489,out))
})();
var state__66952__auto__ = (function (){var statearr_68487 = f__66951__auto__.call(null);
(statearr_68487[(6)] = c__66950__auto___68489);

return statearr_68487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__66952__auto__);
});})(c__66950__auto___68489,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__68503 = arguments.length;
switch (G__68503) {
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
var c__66950__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__66950__auto__){
return (function (){
var f__66951__auto__ = (function (){var switch__66860__auto__ = ((function (c__66950__auto__){
return (function (state_68566){
var state_val_68567 = (state_68566[(1)]);
if((state_val_68567 === (7))){
var inst_68562 = (state_68566[(2)]);
var state_68566__$1 = state_68566;
var statearr_68568_68606 = state_68566__$1;
(statearr_68568_68606[(2)] = inst_68562);

(statearr_68568_68606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68567 === (20))){
var inst_68532 = (state_68566[(7)]);
var inst_68543 = (state_68566[(2)]);
var inst_68544 = cljs.core.next.call(null,inst_68532);
var inst_68518 = inst_68544;
var inst_68519 = null;
var inst_68520 = (0);
var inst_68521 = (0);
var state_68566__$1 = (function (){var statearr_68569 = state_68566;
(statearr_68569[(8)] = inst_68518);

(statearr_68569[(9)] = inst_68520);

(statearr_68569[(10)] = inst_68519);

(statearr_68569[(11)] = inst_68521);

(statearr_68569[(12)] = inst_68543);

return statearr_68569;
})();
var statearr_68570_68607 = state_68566__$1;
(statearr_68570_68607[(2)] = null);

(statearr_68570_68607[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68567 === (1))){
var state_68566__$1 = state_68566;
var statearr_68571_68608 = state_68566__$1;
(statearr_68571_68608[(2)] = null);

(statearr_68571_68608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68567 === (4))){
var inst_68507 = (state_68566[(13)]);
var inst_68507__$1 = (state_68566[(2)]);
var inst_68508 = (inst_68507__$1 == null);
var state_68566__$1 = (function (){var statearr_68572 = state_68566;
(statearr_68572[(13)] = inst_68507__$1);

return statearr_68572;
})();
if(cljs.core.truth_(inst_68508)){
var statearr_68573_68609 = state_68566__$1;
(statearr_68573_68609[(1)] = (5));

} else {
var statearr_68574_68610 = state_68566__$1;
(statearr_68574_68610[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68567 === (15))){
var state_68566__$1 = state_68566;
var statearr_68578_68611 = state_68566__$1;
(statearr_68578_68611[(2)] = null);

(statearr_68578_68611[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68567 === (21))){
var state_68566__$1 = state_68566;
var statearr_68579_68612 = state_68566__$1;
(statearr_68579_68612[(2)] = null);

(statearr_68579_68612[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68567 === (13))){
var inst_68518 = (state_68566[(8)]);
var inst_68520 = (state_68566[(9)]);
var inst_68519 = (state_68566[(10)]);
var inst_68521 = (state_68566[(11)]);
var inst_68528 = (state_68566[(2)]);
var inst_68529 = (inst_68521 + (1));
var tmp68575 = inst_68518;
var tmp68576 = inst_68520;
var tmp68577 = inst_68519;
var inst_68518__$1 = tmp68575;
var inst_68519__$1 = tmp68577;
var inst_68520__$1 = tmp68576;
var inst_68521__$1 = inst_68529;
var state_68566__$1 = (function (){var statearr_68580 = state_68566;
(statearr_68580[(8)] = inst_68518__$1);

(statearr_68580[(14)] = inst_68528);

(statearr_68580[(9)] = inst_68520__$1);

(statearr_68580[(10)] = inst_68519__$1);

(statearr_68580[(11)] = inst_68521__$1);

return statearr_68580;
})();
var statearr_68581_68613 = state_68566__$1;
(statearr_68581_68613[(2)] = null);

(statearr_68581_68613[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68567 === (22))){
var state_68566__$1 = state_68566;
var statearr_68582_68614 = state_68566__$1;
(statearr_68582_68614[(2)] = null);

(statearr_68582_68614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68567 === (6))){
var inst_68507 = (state_68566[(13)]);
var inst_68516 = f.call(null,inst_68507);
var inst_68517 = cljs.core.seq.call(null,inst_68516);
var inst_68518 = inst_68517;
var inst_68519 = null;
var inst_68520 = (0);
var inst_68521 = (0);
var state_68566__$1 = (function (){var statearr_68583 = state_68566;
(statearr_68583[(8)] = inst_68518);

(statearr_68583[(9)] = inst_68520);

(statearr_68583[(10)] = inst_68519);

(statearr_68583[(11)] = inst_68521);

return statearr_68583;
})();
var statearr_68584_68615 = state_68566__$1;
(statearr_68584_68615[(2)] = null);

(statearr_68584_68615[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68567 === (17))){
var inst_68532 = (state_68566[(7)]);
var inst_68536 = cljs.core.chunk_first.call(null,inst_68532);
var inst_68537 = cljs.core.chunk_rest.call(null,inst_68532);
var inst_68538 = cljs.core.count.call(null,inst_68536);
var inst_68518 = inst_68537;
var inst_68519 = inst_68536;
var inst_68520 = inst_68538;
var inst_68521 = (0);
var state_68566__$1 = (function (){var statearr_68585 = state_68566;
(statearr_68585[(8)] = inst_68518);

(statearr_68585[(9)] = inst_68520);

(statearr_68585[(10)] = inst_68519);

(statearr_68585[(11)] = inst_68521);

return statearr_68585;
})();
var statearr_68586_68616 = state_68566__$1;
(statearr_68586_68616[(2)] = null);

(statearr_68586_68616[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68567 === (3))){
var inst_68564 = (state_68566[(2)]);
var state_68566__$1 = state_68566;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68566__$1,inst_68564);
} else {
if((state_val_68567 === (12))){
var inst_68552 = (state_68566[(2)]);
var state_68566__$1 = state_68566;
var statearr_68587_68617 = state_68566__$1;
(statearr_68587_68617[(2)] = inst_68552);

(statearr_68587_68617[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68567 === (2))){
var state_68566__$1 = state_68566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68566__$1,(4),in$);
} else {
if((state_val_68567 === (23))){
var inst_68560 = (state_68566[(2)]);
var state_68566__$1 = state_68566;
var statearr_68588_68618 = state_68566__$1;
(statearr_68588_68618[(2)] = inst_68560);

(statearr_68588_68618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68567 === (19))){
var inst_68547 = (state_68566[(2)]);
var state_68566__$1 = state_68566;
var statearr_68589_68619 = state_68566__$1;
(statearr_68589_68619[(2)] = inst_68547);

(statearr_68589_68619[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68567 === (11))){
var inst_68518 = (state_68566[(8)]);
var inst_68532 = (state_68566[(7)]);
var inst_68532__$1 = cljs.core.seq.call(null,inst_68518);
var state_68566__$1 = (function (){var statearr_68590 = state_68566;
(statearr_68590[(7)] = inst_68532__$1);

return statearr_68590;
})();
if(inst_68532__$1){
var statearr_68591_68620 = state_68566__$1;
(statearr_68591_68620[(1)] = (14));

} else {
var statearr_68592_68621 = state_68566__$1;
(statearr_68592_68621[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68567 === (9))){
var inst_68554 = (state_68566[(2)]);
var inst_68555 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_68566__$1 = (function (){var statearr_68593 = state_68566;
(statearr_68593[(15)] = inst_68554);

return statearr_68593;
})();
if(cljs.core.truth_(inst_68555)){
var statearr_68594_68622 = state_68566__$1;
(statearr_68594_68622[(1)] = (21));

} else {
var statearr_68595_68623 = state_68566__$1;
(statearr_68595_68623[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68567 === (5))){
var inst_68510 = cljs.core.async.close_BANG_.call(null,out);
var state_68566__$1 = state_68566;
var statearr_68596_68624 = state_68566__$1;
(statearr_68596_68624[(2)] = inst_68510);

(statearr_68596_68624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68567 === (14))){
var inst_68532 = (state_68566[(7)]);
var inst_68534 = cljs.core.chunked_seq_QMARK_.call(null,inst_68532);
var state_68566__$1 = state_68566;
if(inst_68534){
var statearr_68597_68625 = state_68566__$1;
(statearr_68597_68625[(1)] = (17));

} else {
var statearr_68598_68626 = state_68566__$1;
(statearr_68598_68626[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68567 === (16))){
var inst_68550 = (state_68566[(2)]);
var state_68566__$1 = state_68566;
var statearr_68599_68627 = state_68566__$1;
(statearr_68599_68627[(2)] = inst_68550);

(statearr_68599_68627[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68567 === (10))){
var inst_68519 = (state_68566[(10)]);
var inst_68521 = (state_68566[(11)]);
var inst_68526 = cljs.core._nth.call(null,inst_68519,inst_68521);
var state_68566__$1 = state_68566;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_68566__$1,(13),out,inst_68526);
} else {
if((state_val_68567 === (18))){
var inst_68532 = (state_68566[(7)]);
var inst_68541 = cljs.core.first.call(null,inst_68532);
var state_68566__$1 = state_68566;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_68566__$1,(20),out,inst_68541);
} else {
if((state_val_68567 === (8))){
var inst_68520 = (state_68566[(9)]);
var inst_68521 = (state_68566[(11)]);
var inst_68523 = (inst_68521 < inst_68520);
var inst_68524 = inst_68523;
var state_68566__$1 = state_68566;
if(cljs.core.truth_(inst_68524)){
var statearr_68600_68628 = state_68566__$1;
(statearr_68600_68628[(1)] = (10));

} else {
var statearr_68601_68629 = state_68566__$1;
(statearr_68601_68629[(1)] = (11));

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
});})(c__66950__auto__))
;
return ((function (switch__66860__auto__,c__66950__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__66861__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__66861__auto____0 = (function (){
var statearr_68602 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_68602[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__66861__auto__);

(statearr_68602[(1)] = (1));

return statearr_68602;
});
var cljs$core$async$mapcat_STAR__$_state_machine__66861__auto____1 = (function (state_68566){
while(true){
var ret_value__66862__auto__ = (function (){try{while(true){
var result__66863__auto__ = switch__66860__auto__.call(null,state_68566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__66863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66863__auto__;
}
break;
}
}catch (e68603){if((e68603 instanceof Object)){
var ex__66864__auto__ = e68603;
var statearr_68604_68630 = state_68566;
(statearr_68604_68630[(5)] = ex__66864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__66862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68631 = state_68566;
state_68566 = G__68631;
continue;
} else {
return ret_value__66862__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__66861__auto__ = function(state_68566){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__66861__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__66861__auto____1.call(this,state_68566);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__66861__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__66861__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__66861__auto__;
})()
;})(switch__66860__auto__,c__66950__auto__))
})();
var state__66952__auto__ = (function (){var statearr_68605 = f__66951__auto__.call(null);
(statearr_68605[(6)] = c__66950__auto__);

return statearr_68605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__66952__auto__);
});})(c__66950__auto__))
);

return c__66950__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__68633 = arguments.length;
switch (G__68633) {
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
var G__68636 = arguments.length;
switch (G__68636) {
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
var G__68639 = arguments.length;
switch (G__68639) {
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
var c__66950__auto___68686 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__66950__auto___68686,out){
return (function (){
var f__66951__auto__ = (function (){var switch__66860__auto__ = ((function (c__66950__auto___68686,out){
return (function (state_68663){
var state_val_68664 = (state_68663[(1)]);
if((state_val_68664 === (7))){
var inst_68658 = (state_68663[(2)]);
var state_68663__$1 = state_68663;
var statearr_68665_68687 = state_68663__$1;
(statearr_68665_68687[(2)] = inst_68658);

(statearr_68665_68687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68664 === (1))){
var inst_68640 = null;
var state_68663__$1 = (function (){var statearr_68666 = state_68663;
(statearr_68666[(7)] = inst_68640);

return statearr_68666;
})();
var statearr_68667_68688 = state_68663__$1;
(statearr_68667_68688[(2)] = null);

(statearr_68667_68688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68664 === (4))){
var inst_68643 = (state_68663[(8)]);
var inst_68643__$1 = (state_68663[(2)]);
var inst_68644 = (inst_68643__$1 == null);
var inst_68645 = cljs.core.not.call(null,inst_68644);
var state_68663__$1 = (function (){var statearr_68668 = state_68663;
(statearr_68668[(8)] = inst_68643__$1);

return statearr_68668;
})();
if(inst_68645){
var statearr_68669_68689 = state_68663__$1;
(statearr_68669_68689[(1)] = (5));

} else {
var statearr_68670_68690 = state_68663__$1;
(statearr_68670_68690[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68664 === (6))){
var state_68663__$1 = state_68663;
var statearr_68671_68691 = state_68663__$1;
(statearr_68671_68691[(2)] = null);

(statearr_68671_68691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68664 === (3))){
var inst_68660 = (state_68663[(2)]);
var inst_68661 = cljs.core.async.close_BANG_.call(null,out);
var state_68663__$1 = (function (){var statearr_68672 = state_68663;
(statearr_68672[(9)] = inst_68660);

return statearr_68672;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68663__$1,inst_68661);
} else {
if((state_val_68664 === (2))){
var state_68663__$1 = state_68663;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68663__$1,(4),ch);
} else {
if((state_val_68664 === (11))){
var inst_68643 = (state_68663[(8)]);
var inst_68652 = (state_68663[(2)]);
var inst_68640 = inst_68643;
var state_68663__$1 = (function (){var statearr_68673 = state_68663;
(statearr_68673[(10)] = inst_68652);

(statearr_68673[(7)] = inst_68640);

return statearr_68673;
})();
var statearr_68674_68692 = state_68663__$1;
(statearr_68674_68692[(2)] = null);

(statearr_68674_68692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68664 === (9))){
var inst_68643 = (state_68663[(8)]);
var state_68663__$1 = state_68663;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_68663__$1,(11),out,inst_68643);
} else {
if((state_val_68664 === (5))){
var inst_68643 = (state_68663[(8)]);
var inst_68640 = (state_68663[(7)]);
var inst_68647 = cljs.core._EQ_.call(null,inst_68643,inst_68640);
var state_68663__$1 = state_68663;
if(inst_68647){
var statearr_68676_68693 = state_68663__$1;
(statearr_68676_68693[(1)] = (8));

} else {
var statearr_68677_68694 = state_68663__$1;
(statearr_68677_68694[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68664 === (10))){
var inst_68655 = (state_68663[(2)]);
var state_68663__$1 = state_68663;
var statearr_68678_68695 = state_68663__$1;
(statearr_68678_68695[(2)] = inst_68655);

(statearr_68678_68695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68664 === (8))){
var inst_68640 = (state_68663[(7)]);
var tmp68675 = inst_68640;
var inst_68640__$1 = tmp68675;
var state_68663__$1 = (function (){var statearr_68679 = state_68663;
(statearr_68679[(7)] = inst_68640__$1);

return statearr_68679;
})();
var statearr_68680_68696 = state_68663__$1;
(statearr_68680_68696[(2)] = null);

(statearr_68680_68696[(1)] = (2));


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
});})(c__66950__auto___68686,out))
;
return ((function (switch__66860__auto__,c__66950__auto___68686,out){
return (function() {
var cljs$core$async$state_machine__66861__auto__ = null;
var cljs$core$async$state_machine__66861__auto____0 = (function (){
var statearr_68681 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_68681[(0)] = cljs$core$async$state_machine__66861__auto__);

(statearr_68681[(1)] = (1));

return statearr_68681;
});
var cljs$core$async$state_machine__66861__auto____1 = (function (state_68663){
while(true){
var ret_value__66862__auto__ = (function (){try{while(true){
var result__66863__auto__ = switch__66860__auto__.call(null,state_68663);
if(cljs.core.keyword_identical_QMARK_.call(null,result__66863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66863__auto__;
}
break;
}
}catch (e68682){if((e68682 instanceof Object)){
var ex__66864__auto__ = e68682;
var statearr_68683_68697 = state_68663;
(statearr_68683_68697[(5)] = ex__66864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68663);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__66862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68698 = state_68663;
state_68663 = G__68698;
continue;
} else {
return ret_value__66862__auto__;
}
break;
}
});
cljs$core$async$state_machine__66861__auto__ = function(state_68663){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__66861__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__66861__auto____1.call(this,state_68663);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__66861__auto____0;
cljs$core$async$state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__66861__auto____1;
return cljs$core$async$state_machine__66861__auto__;
})()
;})(switch__66860__auto__,c__66950__auto___68686,out))
})();
var state__66952__auto__ = (function (){var statearr_68684 = f__66951__auto__.call(null);
(statearr_68684[(6)] = c__66950__auto___68686);

return statearr_68684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__66952__auto__);
});})(c__66950__auto___68686,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__68700 = arguments.length;
switch (G__68700) {
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
var c__66950__auto___68766 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__66950__auto___68766,out){
return (function (){
var f__66951__auto__ = (function (){var switch__66860__auto__ = ((function (c__66950__auto___68766,out){
return (function (state_68738){
var state_val_68739 = (state_68738[(1)]);
if((state_val_68739 === (7))){
var inst_68734 = (state_68738[(2)]);
var state_68738__$1 = state_68738;
var statearr_68740_68767 = state_68738__$1;
(statearr_68740_68767[(2)] = inst_68734);

(statearr_68740_68767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68739 === (1))){
var inst_68701 = (new Array(n));
var inst_68702 = inst_68701;
var inst_68703 = (0);
var state_68738__$1 = (function (){var statearr_68741 = state_68738;
(statearr_68741[(7)] = inst_68703);

(statearr_68741[(8)] = inst_68702);

return statearr_68741;
})();
var statearr_68742_68768 = state_68738__$1;
(statearr_68742_68768[(2)] = null);

(statearr_68742_68768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68739 === (4))){
var inst_68706 = (state_68738[(9)]);
var inst_68706__$1 = (state_68738[(2)]);
var inst_68707 = (inst_68706__$1 == null);
var inst_68708 = cljs.core.not.call(null,inst_68707);
var state_68738__$1 = (function (){var statearr_68743 = state_68738;
(statearr_68743[(9)] = inst_68706__$1);

return statearr_68743;
})();
if(inst_68708){
var statearr_68744_68769 = state_68738__$1;
(statearr_68744_68769[(1)] = (5));

} else {
var statearr_68745_68770 = state_68738__$1;
(statearr_68745_68770[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68739 === (15))){
var inst_68728 = (state_68738[(2)]);
var state_68738__$1 = state_68738;
var statearr_68746_68771 = state_68738__$1;
(statearr_68746_68771[(2)] = inst_68728);

(statearr_68746_68771[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68739 === (13))){
var state_68738__$1 = state_68738;
var statearr_68747_68772 = state_68738__$1;
(statearr_68747_68772[(2)] = null);

(statearr_68747_68772[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68739 === (6))){
var inst_68703 = (state_68738[(7)]);
var inst_68724 = (inst_68703 > (0));
var state_68738__$1 = state_68738;
if(cljs.core.truth_(inst_68724)){
var statearr_68748_68773 = state_68738__$1;
(statearr_68748_68773[(1)] = (12));

} else {
var statearr_68749_68774 = state_68738__$1;
(statearr_68749_68774[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68739 === (3))){
var inst_68736 = (state_68738[(2)]);
var state_68738__$1 = state_68738;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68738__$1,inst_68736);
} else {
if((state_val_68739 === (12))){
var inst_68702 = (state_68738[(8)]);
var inst_68726 = cljs.core.vec.call(null,inst_68702);
var state_68738__$1 = state_68738;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_68738__$1,(15),out,inst_68726);
} else {
if((state_val_68739 === (2))){
var state_68738__$1 = state_68738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68738__$1,(4),ch);
} else {
if((state_val_68739 === (11))){
var inst_68718 = (state_68738[(2)]);
var inst_68719 = (new Array(n));
var inst_68702 = inst_68719;
var inst_68703 = (0);
var state_68738__$1 = (function (){var statearr_68750 = state_68738;
(statearr_68750[(7)] = inst_68703);

(statearr_68750[(8)] = inst_68702);

(statearr_68750[(10)] = inst_68718);

return statearr_68750;
})();
var statearr_68751_68775 = state_68738__$1;
(statearr_68751_68775[(2)] = null);

(statearr_68751_68775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68739 === (9))){
var inst_68702 = (state_68738[(8)]);
var inst_68716 = cljs.core.vec.call(null,inst_68702);
var state_68738__$1 = state_68738;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_68738__$1,(11),out,inst_68716);
} else {
if((state_val_68739 === (5))){
var inst_68703 = (state_68738[(7)]);
var inst_68711 = (state_68738[(11)]);
var inst_68702 = (state_68738[(8)]);
var inst_68706 = (state_68738[(9)]);
var inst_68710 = (inst_68702[inst_68703] = inst_68706);
var inst_68711__$1 = (inst_68703 + (1));
var inst_68712 = (inst_68711__$1 < n);
var state_68738__$1 = (function (){var statearr_68752 = state_68738;
(statearr_68752[(12)] = inst_68710);

(statearr_68752[(11)] = inst_68711__$1);

return statearr_68752;
})();
if(cljs.core.truth_(inst_68712)){
var statearr_68753_68776 = state_68738__$1;
(statearr_68753_68776[(1)] = (8));

} else {
var statearr_68754_68777 = state_68738__$1;
(statearr_68754_68777[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68739 === (14))){
var inst_68731 = (state_68738[(2)]);
var inst_68732 = cljs.core.async.close_BANG_.call(null,out);
var state_68738__$1 = (function (){var statearr_68756 = state_68738;
(statearr_68756[(13)] = inst_68731);

return statearr_68756;
})();
var statearr_68757_68778 = state_68738__$1;
(statearr_68757_68778[(2)] = inst_68732);

(statearr_68757_68778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68739 === (10))){
var inst_68722 = (state_68738[(2)]);
var state_68738__$1 = state_68738;
var statearr_68758_68779 = state_68738__$1;
(statearr_68758_68779[(2)] = inst_68722);

(statearr_68758_68779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68739 === (8))){
var inst_68711 = (state_68738[(11)]);
var inst_68702 = (state_68738[(8)]);
var tmp68755 = inst_68702;
var inst_68702__$1 = tmp68755;
var inst_68703 = inst_68711;
var state_68738__$1 = (function (){var statearr_68759 = state_68738;
(statearr_68759[(7)] = inst_68703);

(statearr_68759[(8)] = inst_68702__$1);

return statearr_68759;
})();
var statearr_68760_68780 = state_68738__$1;
(statearr_68760_68780[(2)] = null);

(statearr_68760_68780[(1)] = (2));


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
});})(c__66950__auto___68766,out))
;
return ((function (switch__66860__auto__,c__66950__auto___68766,out){
return (function() {
var cljs$core$async$state_machine__66861__auto__ = null;
var cljs$core$async$state_machine__66861__auto____0 = (function (){
var statearr_68761 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_68761[(0)] = cljs$core$async$state_machine__66861__auto__);

(statearr_68761[(1)] = (1));

return statearr_68761;
});
var cljs$core$async$state_machine__66861__auto____1 = (function (state_68738){
while(true){
var ret_value__66862__auto__ = (function (){try{while(true){
var result__66863__auto__ = switch__66860__auto__.call(null,state_68738);
if(cljs.core.keyword_identical_QMARK_.call(null,result__66863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66863__auto__;
}
break;
}
}catch (e68762){if((e68762 instanceof Object)){
var ex__66864__auto__ = e68762;
var statearr_68763_68781 = state_68738;
(statearr_68763_68781[(5)] = ex__66864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__66862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68782 = state_68738;
state_68738 = G__68782;
continue;
} else {
return ret_value__66862__auto__;
}
break;
}
});
cljs$core$async$state_machine__66861__auto__ = function(state_68738){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__66861__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__66861__auto____1.call(this,state_68738);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__66861__auto____0;
cljs$core$async$state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__66861__auto____1;
return cljs$core$async$state_machine__66861__auto__;
})()
;})(switch__66860__auto__,c__66950__auto___68766,out))
})();
var state__66952__auto__ = (function (){var statearr_68764 = f__66951__auto__.call(null);
(statearr_68764[(6)] = c__66950__auto___68766);

return statearr_68764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__66952__auto__);
});})(c__66950__auto___68766,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__68784 = arguments.length;
switch (G__68784) {
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
var c__66950__auto___68854 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__66950__auto___68854,out){
return (function (){
var f__66951__auto__ = (function (){var switch__66860__auto__ = ((function (c__66950__auto___68854,out){
return (function (state_68826){
var state_val_68827 = (state_68826[(1)]);
if((state_val_68827 === (7))){
var inst_68822 = (state_68826[(2)]);
var state_68826__$1 = state_68826;
var statearr_68828_68855 = state_68826__$1;
(statearr_68828_68855[(2)] = inst_68822);

(statearr_68828_68855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68827 === (1))){
var inst_68785 = [];
var inst_68786 = inst_68785;
var inst_68787 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_68826__$1 = (function (){var statearr_68829 = state_68826;
(statearr_68829[(7)] = inst_68786);

(statearr_68829[(8)] = inst_68787);

return statearr_68829;
})();
var statearr_68830_68856 = state_68826__$1;
(statearr_68830_68856[(2)] = null);

(statearr_68830_68856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68827 === (4))){
var inst_68790 = (state_68826[(9)]);
var inst_68790__$1 = (state_68826[(2)]);
var inst_68791 = (inst_68790__$1 == null);
var inst_68792 = cljs.core.not.call(null,inst_68791);
var state_68826__$1 = (function (){var statearr_68831 = state_68826;
(statearr_68831[(9)] = inst_68790__$1);

return statearr_68831;
})();
if(inst_68792){
var statearr_68832_68857 = state_68826__$1;
(statearr_68832_68857[(1)] = (5));

} else {
var statearr_68833_68858 = state_68826__$1;
(statearr_68833_68858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68827 === (15))){
var inst_68816 = (state_68826[(2)]);
var state_68826__$1 = state_68826;
var statearr_68834_68859 = state_68826__$1;
(statearr_68834_68859[(2)] = inst_68816);

(statearr_68834_68859[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68827 === (13))){
var state_68826__$1 = state_68826;
var statearr_68835_68860 = state_68826__$1;
(statearr_68835_68860[(2)] = null);

(statearr_68835_68860[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68827 === (6))){
var inst_68786 = (state_68826[(7)]);
var inst_68811 = inst_68786.length;
var inst_68812 = (inst_68811 > (0));
var state_68826__$1 = state_68826;
if(cljs.core.truth_(inst_68812)){
var statearr_68836_68861 = state_68826__$1;
(statearr_68836_68861[(1)] = (12));

} else {
var statearr_68837_68862 = state_68826__$1;
(statearr_68837_68862[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68827 === (3))){
var inst_68824 = (state_68826[(2)]);
var state_68826__$1 = state_68826;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68826__$1,inst_68824);
} else {
if((state_val_68827 === (12))){
var inst_68786 = (state_68826[(7)]);
var inst_68814 = cljs.core.vec.call(null,inst_68786);
var state_68826__$1 = state_68826;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_68826__$1,(15),out,inst_68814);
} else {
if((state_val_68827 === (2))){
var state_68826__$1 = state_68826;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68826__$1,(4),ch);
} else {
if((state_val_68827 === (11))){
var inst_68790 = (state_68826[(9)]);
var inst_68794 = (state_68826[(10)]);
var inst_68804 = (state_68826[(2)]);
var inst_68805 = [];
var inst_68806 = inst_68805.push(inst_68790);
var inst_68786 = inst_68805;
var inst_68787 = inst_68794;
var state_68826__$1 = (function (){var statearr_68838 = state_68826;
(statearr_68838[(11)] = inst_68804);

(statearr_68838[(12)] = inst_68806);

(statearr_68838[(7)] = inst_68786);

(statearr_68838[(8)] = inst_68787);

return statearr_68838;
})();
var statearr_68839_68863 = state_68826__$1;
(statearr_68839_68863[(2)] = null);

(statearr_68839_68863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68827 === (9))){
var inst_68786 = (state_68826[(7)]);
var inst_68802 = cljs.core.vec.call(null,inst_68786);
var state_68826__$1 = state_68826;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_68826__$1,(11),out,inst_68802);
} else {
if((state_val_68827 === (5))){
var inst_68790 = (state_68826[(9)]);
var inst_68794 = (state_68826[(10)]);
var inst_68787 = (state_68826[(8)]);
var inst_68794__$1 = f.call(null,inst_68790);
var inst_68795 = cljs.core._EQ_.call(null,inst_68794__$1,inst_68787);
var inst_68796 = cljs.core.keyword_identical_QMARK_.call(null,inst_68787,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_68797 = (inst_68795) || (inst_68796);
var state_68826__$1 = (function (){var statearr_68840 = state_68826;
(statearr_68840[(10)] = inst_68794__$1);

return statearr_68840;
})();
if(cljs.core.truth_(inst_68797)){
var statearr_68841_68864 = state_68826__$1;
(statearr_68841_68864[(1)] = (8));

} else {
var statearr_68842_68865 = state_68826__$1;
(statearr_68842_68865[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68827 === (14))){
var inst_68819 = (state_68826[(2)]);
var inst_68820 = cljs.core.async.close_BANG_.call(null,out);
var state_68826__$1 = (function (){var statearr_68844 = state_68826;
(statearr_68844[(13)] = inst_68819);

return statearr_68844;
})();
var statearr_68845_68866 = state_68826__$1;
(statearr_68845_68866[(2)] = inst_68820);

(statearr_68845_68866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68827 === (10))){
var inst_68809 = (state_68826[(2)]);
var state_68826__$1 = state_68826;
var statearr_68846_68867 = state_68826__$1;
(statearr_68846_68867[(2)] = inst_68809);

(statearr_68846_68867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68827 === (8))){
var inst_68790 = (state_68826[(9)]);
var inst_68794 = (state_68826[(10)]);
var inst_68786 = (state_68826[(7)]);
var inst_68799 = inst_68786.push(inst_68790);
var tmp68843 = inst_68786;
var inst_68786__$1 = tmp68843;
var inst_68787 = inst_68794;
var state_68826__$1 = (function (){var statearr_68847 = state_68826;
(statearr_68847[(7)] = inst_68786__$1);

(statearr_68847[(8)] = inst_68787);

(statearr_68847[(14)] = inst_68799);

return statearr_68847;
})();
var statearr_68848_68868 = state_68826__$1;
(statearr_68848_68868[(2)] = null);

(statearr_68848_68868[(1)] = (2));


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
});})(c__66950__auto___68854,out))
;
return ((function (switch__66860__auto__,c__66950__auto___68854,out){
return (function() {
var cljs$core$async$state_machine__66861__auto__ = null;
var cljs$core$async$state_machine__66861__auto____0 = (function (){
var statearr_68849 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_68849[(0)] = cljs$core$async$state_machine__66861__auto__);

(statearr_68849[(1)] = (1));

return statearr_68849;
});
var cljs$core$async$state_machine__66861__auto____1 = (function (state_68826){
while(true){
var ret_value__66862__auto__ = (function (){try{while(true){
var result__66863__auto__ = switch__66860__auto__.call(null,state_68826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__66863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66863__auto__;
}
break;
}
}catch (e68850){if((e68850 instanceof Object)){
var ex__66864__auto__ = e68850;
var statearr_68851_68869 = state_68826;
(statearr_68851_68869[(5)] = ex__66864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__66862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68870 = state_68826;
state_68826 = G__68870;
continue;
} else {
return ret_value__66862__auto__;
}
break;
}
});
cljs$core$async$state_machine__66861__auto__ = function(state_68826){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__66861__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__66861__auto____1.call(this,state_68826);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__66861__auto____0;
cljs$core$async$state_machine__66861__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__66861__auto____1;
return cljs$core$async$state_machine__66861__auto__;
})()
;})(switch__66860__auto__,c__66950__auto___68854,out))
})();
var state__66952__auto__ = (function (){var statearr_68852 = f__66951__auto__.call(null);
(statearr_68852[(6)] = c__66950__auto___68854);

return statearr_68852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__66952__auto__);
});})(c__66950__auto___68854,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1514950326754
