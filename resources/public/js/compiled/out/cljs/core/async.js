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
var G__58123 = arguments.length;
switch (G__58123) {
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
if(typeof cljs.core.async.t_cljs$core$async58124 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58124 = (function (f,blockable,meta58125){
this.f = f;
this.blockable = blockable;
this.meta58125 = meta58125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async58124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58126,meta58125__$1){
var self__ = this;
var _58126__$1 = this;
return (new cljs.core.async.t_cljs$core$async58124(self__.f,self__.blockable,meta58125__$1));
});

cljs.core.async.t_cljs$core$async58124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58126){
var self__ = this;
var _58126__$1 = this;
return self__.meta58125;
});

cljs.core.async.t_cljs$core$async58124.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58124.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async58124.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async58124.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async58124.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta58125","meta58125",-1731491610,null)], null);
});

cljs.core.async.t_cljs$core$async58124.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58124.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58124";

cljs.core.async.t_cljs$core$async58124.cljs$lang$ctorPrWriter = (function (this__53641__auto__,writer__53642__auto__,opt__53643__auto__){
return cljs.core._write.call(null,writer__53642__auto__,"cljs.core.async/t_cljs$core$async58124");
});

cljs.core.async.__GT_t_cljs$core$async58124 = (function cljs$core$async$__GT_t_cljs$core$async58124(f__$1,blockable__$1,meta58125){
return (new cljs.core.async.t_cljs$core$async58124(f__$1,blockable__$1,meta58125));
});

}

return (new cljs.core.async.t_cljs$core$async58124(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__58130 = arguments.length;
switch (G__58130) {
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
var G__58133 = arguments.length;
switch (G__58133) {
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
var G__58136 = arguments.length;
switch (G__58136) {
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
var val_58138 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_58138);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_58138,ret){
return (function (){
return fn1.call(null,val_58138);
});})(val_58138,ret))
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
var G__58140 = arguments.length;
switch (G__58140) {
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
var n__54013__auto___58142 = n;
var x_58143 = (0);
while(true){
if((x_58143 < n__54013__auto___58142)){
(a[x_58143] = (0));

var G__58144 = (x_58143 + (1));
x_58143 = G__58144;
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

var G__58145 = (i + (1));
i = G__58145;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async58146 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58146 = (function (flag,meta58147){
this.flag = flag;
this.meta58147 = meta58147;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async58146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_58148,meta58147__$1){
var self__ = this;
var _58148__$1 = this;
return (new cljs.core.async.t_cljs$core$async58146(self__.flag,meta58147__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async58146.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_58148){
var self__ = this;
var _58148__$1 = this;
return self__.meta58147;
});})(flag))
;

cljs.core.async.t_cljs$core$async58146.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58146.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async58146.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async58146.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async58146.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta58147","meta58147",-941215824,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async58146.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58146.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58146";

cljs.core.async.t_cljs$core$async58146.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__53641__auto__,writer__53642__auto__,opt__53643__auto__){
return cljs.core._write.call(null,writer__53642__auto__,"cljs.core.async/t_cljs$core$async58146");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async58146 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async58146(flag__$1,meta58147){
return (new cljs.core.async.t_cljs$core$async58146(flag__$1,meta58147));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async58146(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async58149 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58149 = (function (flag,cb,meta58150){
this.flag = flag;
this.cb = cb;
this.meta58150 = meta58150;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async58149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58151,meta58150__$1){
var self__ = this;
var _58151__$1 = this;
return (new cljs.core.async.t_cljs$core$async58149(self__.flag,self__.cb,meta58150__$1));
});

cljs.core.async.t_cljs$core$async58149.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58151){
var self__ = this;
var _58151__$1 = this;
return self__.meta58150;
});

cljs.core.async.t_cljs$core$async58149.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58149.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async58149.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async58149.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async58149.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta58150","meta58150",589568031,null)], null);
});

cljs.core.async.t_cljs$core$async58149.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58149.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58149";

cljs.core.async.t_cljs$core$async58149.cljs$lang$ctorPrWriter = (function (this__53641__auto__,writer__53642__auto__,opt__53643__auto__){
return cljs.core._write.call(null,writer__53642__auto__,"cljs.core.async/t_cljs$core$async58149");
});

cljs.core.async.__GT_t_cljs$core$async58149 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async58149(flag__$1,cb__$1,meta58150){
return (new cljs.core.async.t_cljs$core$async58149(flag__$1,cb__$1,meta58150));
});

}

return (new cljs.core.async.t_cljs$core$async58149(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__58152_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__58152_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__58153_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__58153_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__52970__auto__ = wport;
if(cljs.core.truth_(or__52970__auto__)){
return or__52970__auto__;
} else {
return port;
}
})()], null));
} else {
var G__58154 = (i + (1));
i = G__58154;
continue;
}
} else {
return null;
}
break;
}
})();
var or__52970__auto__ = ret;
if(cljs.core.truth_(or__52970__auto__)){
return or__52970__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__52958__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__52958__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__52958__auto__;
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
var args__54254__auto__ = [];
var len__54247__auto___58160 = arguments.length;
var i__54248__auto___58161 = (0);
while(true){
if((i__54248__auto___58161 < len__54247__auto___58160)){
args__54254__auto__.push((arguments[i__54248__auto___58161]));

var G__58162 = (i__54248__auto___58161 + (1));
i__54248__auto___58161 = G__58162;
continue;
} else {
}
break;
}

var argseq__54255__auto__ = ((((1) < args__54254__auto__.length))?(new cljs.core.IndexedSeq(args__54254__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__54255__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__58157){
var map__58158 = p__58157;
var map__58158__$1 = ((((!((map__58158 == null)))?((((map__58158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58158.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58158):map__58158);
var opts = map__58158__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq58155){
var G__58156 = cljs.core.first.call(null,seq58155);
var seq58155__$1 = cljs.core.next.call(null,seq58155);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__58156,seq58155__$1);
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
var G__58164 = arguments.length;
switch (G__58164) {
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
var c__58063__auto___58210 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58063__auto___58210){
return (function (){
var f__58064__auto__ = (function (){var switch__57973__auto__ = ((function (c__58063__auto___58210){
return (function (state_58188){
var state_val_58189 = (state_58188[(1)]);
if((state_val_58189 === (7))){
var inst_58184 = (state_58188[(2)]);
var state_58188__$1 = state_58188;
var statearr_58190_58211 = state_58188__$1;
(statearr_58190_58211[(2)] = inst_58184);

(statearr_58190_58211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58189 === (1))){
var state_58188__$1 = state_58188;
var statearr_58191_58212 = state_58188__$1;
(statearr_58191_58212[(2)] = null);

(statearr_58191_58212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58189 === (4))){
var inst_58167 = (state_58188[(7)]);
var inst_58167__$1 = (state_58188[(2)]);
var inst_58168 = (inst_58167__$1 == null);
var state_58188__$1 = (function (){var statearr_58192 = state_58188;
(statearr_58192[(7)] = inst_58167__$1);

return statearr_58192;
})();
if(cljs.core.truth_(inst_58168)){
var statearr_58193_58213 = state_58188__$1;
(statearr_58193_58213[(1)] = (5));

} else {
var statearr_58194_58214 = state_58188__$1;
(statearr_58194_58214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58189 === (13))){
var state_58188__$1 = state_58188;
var statearr_58195_58215 = state_58188__$1;
(statearr_58195_58215[(2)] = null);

(statearr_58195_58215[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58189 === (6))){
var inst_58167 = (state_58188[(7)]);
var state_58188__$1 = state_58188;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58188__$1,(11),to,inst_58167);
} else {
if((state_val_58189 === (3))){
var inst_58186 = (state_58188[(2)]);
var state_58188__$1 = state_58188;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58188__$1,inst_58186);
} else {
if((state_val_58189 === (12))){
var state_58188__$1 = state_58188;
var statearr_58196_58216 = state_58188__$1;
(statearr_58196_58216[(2)] = null);

(statearr_58196_58216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58189 === (2))){
var state_58188__$1 = state_58188;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58188__$1,(4),from);
} else {
if((state_val_58189 === (11))){
var inst_58177 = (state_58188[(2)]);
var state_58188__$1 = state_58188;
if(cljs.core.truth_(inst_58177)){
var statearr_58197_58217 = state_58188__$1;
(statearr_58197_58217[(1)] = (12));

} else {
var statearr_58198_58218 = state_58188__$1;
(statearr_58198_58218[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58189 === (9))){
var state_58188__$1 = state_58188;
var statearr_58199_58219 = state_58188__$1;
(statearr_58199_58219[(2)] = null);

(statearr_58199_58219[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58189 === (5))){
var state_58188__$1 = state_58188;
if(cljs.core.truth_(close_QMARK_)){
var statearr_58200_58220 = state_58188__$1;
(statearr_58200_58220[(1)] = (8));

} else {
var statearr_58201_58221 = state_58188__$1;
(statearr_58201_58221[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58189 === (14))){
var inst_58182 = (state_58188[(2)]);
var state_58188__$1 = state_58188;
var statearr_58202_58222 = state_58188__$1;
(statearr_58202_58222[(2)] = inst_58182);

(statearr_58202_58222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58189 === (10))){
var inst_58174 = (state_58188[(2)]);
var state_58188__$1 = state_58188;
var statearr_58203_58223 = state_58188__$1;
(statearr_58203_58223[(2)] = inst_58174);

(statearr_58203_58223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58189 === (8))){
var inst_58171 = cljs.core.async.close_BANG_.call(null,to);
var state_58188__$1 = state_58188;
var statearr_58204_58224 = state_58188__$1;
(statearr_58204_58224[(2)] = inst_58171);

(statearr_58204_58224[(1)] = (10));


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
});})(c__58063__auto___58210))
;
return ((function (switch__57973__auto__,c__58063__auto___58210){
return (function() {
var cljs$core$async$state_machine__57974__auto__ = null;
var cljs$core$async$state_machine__57974__auto____0 = (function (){
var statearr_58205 = [null,null,null,null,null,null,null,null];
(statearr_58205[(0)] = cljs$core$async$state_machine__57974__auto__);

(statearr_58205[(1)] = (1));

return statearr_58205;
});
var cljs$core$async$state_machine__57974__auto____1 = (function (state_58188){
while(true){
var ret_value__57975__auto__ = (function (){try{while(true){
var result__57976__auto__ = switch__57973__auto__.call(null,state_58188);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57976__auto__;
}
break;
}
}catch (e58206){if((e58206 instanceof Object)){
var ex__57977__auto__ = e58206;
var statearr_58207_58225 = state_58188;
(statearr_58207_58225[(5)] = ex__57977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58226 = state_58188;
state_58188 = G__58226;
continue;
} else {
return ret_value__57975__auto__;
}
break;
}
});
cljs$core$async$state_machine__57974__auto__ = function(state_58188){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57974__auto____1.call(this,state_58188);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57974__auto____0;
cljs$core$async$state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57974__auto____1;
return cljs$core$async$state_machine__57974__auto__;
})()
;})(switch__57973__auto__,c__58063__auto___58210))
})();
var state__58065__auto__ = (function (){var statearr_58208 = f__58064__auto__.call(null);
(statearr_58208[(6)] = c__58063__auto___58210);

return statearr_58208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58065__auto__);
});})(c__58063__auto___58210))
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
return (function (p__58227){
var vec__58228 = p__58227;
var v = cljs.core.nth.call(null,vec__58228,(0),null);
var p = cljs.core.nth.call(null,vec__58228,(1),null);
var job = vec__58228;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__58063__auto___58399 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58063__auto___58399,res,vec__58228,v,p,job,jobs,results){
return (function (){
var f__58064__auto__ = (function (){var switch__57973__auto__ = ((function (c__58063__auto___58399,res,vec__58228,v,p,job,jobs,results){
return (function (state_58235){
var state_val_58236 = (state_58235[(1)]);
if((state_val_58236 === (1))){
var state_58235__$1 = state_58235;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58235__$1,(2),res,v);
} else {
if((state_val_58236 === (2))){
var inst_58232 = (state_58235[(2)]);
var inst_58233 = cljs.core.async.close_BANG_.call(null,res);
var state_58235__$1 = (function (){var statearr_58237 = state_58235;
(statearr_58237[(7)] = inst_58232);

return statearr_58237;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58235__$1,inst_58233);
} else {
return null;
}
}
});})(c__58063__auto___58399,res,vec__58228,v,p,job,jobs,results))
;
return ((function (switch__57973__auto__,c__58063__auto___58399,res,vec__58228,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__57974__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__57974__auto____0 = (function (){
var statearr_58238 = [null,null,null,null,null,null,null,null];
(statearr_58238[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__57974__auto__);

(statearr_58238[(1)] = (1));

return statearr_58238;
});
var cljs$core$async$pipeline_STAR__$_state_machine__57974__auto____1 = (function (state_58235){
while(true){
var ret_value__57975__auto__ = (function (){try{while(true){
var result__57976__auto__ = switch__57973__auto__.call(null,state_58235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57976__auto__;
}
break;
}
}catch (e58239){if((e58239 instanceof Object)){
var ex__57977__auto__ = e58239;
var statearr_58240_58400 = state_58235;
(statearr_58240_58400[(5)] = ex__57977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58401 = state_58235;
state_58235 = G__58401;
continue;
} else {
return ret_value__57975__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__57974__auto__ = function(state_58235){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__57974__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__57974__auto____1.call(this,state_58235);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__57974__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__57974__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__57974__auto__;
})()
;})(switch__57973__auto__,c__58063__auto___58399,res,vec__58228,v,p,job,jobs,results))
})();
var state__58065__auto__ = (function (){var statearr_58241 = f__58064__auto__.call(null);
(statearr_58241[(6)] = c__58063__auto___58399);

return statearr_58241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58065__auto__);
});})(c__58063__auto___58399,res,vec__58228,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__58242){
var vec__58243 = p__58242;
var v = cljs.core.nth.call(null,vec__58243,(0),null);
var p = cljs.core.nth.call(null,vec__58243,(1),null);
var job = vec__58243;
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
var n__54013__auto___58402 = n;
var __58403 = (0);
while(true){
if((__58403 < n__54013__auto___58402)){
var G__58246_58404 = type;
var G__58246_58405__$1 = (((G__58246_58404 instanceof cljs.core.Keyword))?G__58246_58404.fqn:null);
switch (G__58246_58405__$1) {
case "compute":
var c__58063__auto___58407 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__58403,c__58063__auto___58407,G__58246_58404,G__58246_58405__$1,n__54013__auto___58402,jobs,results,process,async){
return (function (){
var f__58064__auto__ = (function (){var switch__57973__auto__ = ((function (__58403,c__58063__auto___58407,G__58246_58404,G__58246_58405__$1,n__54013__auto___58402,jobs,results,process,async){
return (function (state_58259){
var state_val_58260 = (state_58259[(1)]);
if((state_val_58260 === (1))){
var state_58259__$1 = state_58259;
var statearr_58261_58408 = state_58259__$1;
(statearr_58261_58408[(2)] = null);

(statearr_58261_58408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58260 === (2))){
var state_58259__$1 = state_58259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58259__$1,(4),jobs);
} else {
if((state_val_58260 === (3))){
var inst_58257 = (state_58259[(2)]);
var state_58259__$1 = state_58259;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58259__$1,inst_58257);
} else {
if((state_val_58260 === (4))){
var inst_58249 = (state_58259[(2)]);
var inst_58250 = process.call(null,inst_58249);
var state_58259__$1 = state_58259;
if(cljs.core.truth_(inst_58250)){
var statearr_58262_58409 = state_58259__$1;
(statearr_58262_58409[(1)] = (5));

} else {
var statearr_58263_58410 = state_58259__$1;
(statearr_58263_58410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58260 === (5))){
var state_58259__$1 = state_58259;
var statearr_58264_58411 = state_58259__$1;
(statearr_58264_58411[(2)] = null);

(statearr_58264_58411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58260 === (6))){
var state_58259__$1 = state_58259;
var statearr_58265_58412 = state_58259__$1;
(statearr_58265_58412[(2)] = null);

(statearr_58265_58412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58260 === (7))){
var inst_58255 = (state_58259[(2)]);
var state_58259__$1 = state_58259;
var statearr_58266_58413 = state_58259__$1;
(statearr_58266_58413[(2)] = inst_58255);

(statearr_58266_58413[(1)] = (3));


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
});})(__58403,c__58063__auto___58407,G__58246_58404,G__58246_58405__$1,n__54013__auto___58402,jobs,results,process,async))
;
return ((function (__58403,switch__57973__auto__,c__58063__auto___58407,G__58246_58404,G__58246_58405__$1,n__54013__auto___58402,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__57974__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__57974__auto____0 = (function (){
var statearr_58267 = [null,null,null,null,null,null,null];
(statearr_58267[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__57974__auto__);

(statearr_58267[(1)] = (1));

return statearr_58267;
});
var cljs$core$async$pipeline_STAR__$_state_machine__57974__auto____1 = (function (state_58259){
while(true){
var ret_value__57975__auto__ = (function (){try{while(true){
var result__57976__auto__ = switch__57973__auto__.call(null,state_58259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57976__auto__;
}
break;
}
}catch (e58268){if((e58268 instanceof Object)){
var ex__57977__auto__ = e58268;
var statearr_58269_58414 = state_58259;
(statearr_58269_58414[(5)] = ex__57977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58415 = state_58259;
state_58259 = G__58415;
continue;
} else {
return ret_value__57975__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__57974__auto__ = function(state_58259){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__57974__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__57974__auto____1.call(this,state_58259);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__57974__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__57974__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__57974__auto__;
})()
;})(__58403,switch__57973__auto__,c__58063__auto___58407,G__58246_58404,G__58246_58405__$1,n__54013__auto___58402,jobs,results,process,async))
})();
var state__58065__auto__ = (function (){var statearr_58270 = f__58064__auto__.call(null);
(statearr_58270[(6)] = c__58063__auto___58407);

return statearr_58270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58065__auto__);
});})(__58403,c__58063__auto___58407,G__58246_58404,G__58246_58405__$1,n__54013__auto___58402,jobs,results,process,async))
);


break;
case "async":
var c__58063__auto___58416 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__58403,c__58063__auto___58416,G__58246_58404,G__58246_58405__$1,n__54013__auto___58402,jobs,results,process,async){
return (function (){
var f__58064__auto__ = (function (){var switch__57973__auto__ = ((function (__58403,c__58063__auto___58416,G__58246_58404,G__58246_58405__$1,n__54013__auto___58402,jobs,results,process,async){
return (function (state_58283){
var state_val_58284 = (state_58283[(1)]);
if((state_val_58284 === (1))){
var state_58283__$1 = state_58283;
var statearr_58285_58417 = state_58283__$1;
(statearr_58285_58417[(2)] = null);

(statearr_58285_58417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58284 === (2))){
var state_58283__$1 = state_58283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58283__$1,(4),jobs);
} else {
if((state_val_58284 === (3))){
var inst_58281 = (state_58283[(2)]);
var state_58283__$1 = state_58283;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58283__$1,inst_58281);
} else {
if((state_val_58284 === (4))){
var inst_58273 = (state_58283[(2)]);
var inst_58274 = async.call(null,inst_58273);
var state_58283__$1 = state_58283;
if(cljs.core.truth_(inst_58274)){
var statearr_58286_58418 = state_58283__$1;
(statearr_58286_58418[(1)] = (5));

} else {
var statearr_58287_58419 = state_58283__$1;
(statearr_58287_58419[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58284 === (5))){
var state_58283__$1 = state_58283;
var statearr_58288_58420 = state_58283__$1;
(statearr_58288_58420[(2)] = null);

(statearr_58288_58420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58284 === (6))){
var state_58283__$1 = state_58283;
var statearr_58289_58421 = state_58283__$1;
(statearr_58289_58421[(2)] = null);

(statearr_58289_58421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58284 === (7))){
var inst_58279 = (state_58283[(2)]);
var state_58283__$1 = state_58283;
var statearr_58290_58422 = state_58283__$1;
(statearr_58290_58422[(2)] = inst_58279);

(statearr_58290_58422[(1)] = (3));


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
});})(__58403,c__58063__auto___58416,G__58246_58404,G__58246_58405__$1,n__54013__auto___58402,jobs,results,process,async))
;
return ((function (__58403,switch__57973__auto__,c__58063__auto___58416,G__58246_58404,G__58246_58405__$1,n__54013__auto___58402,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__57974__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__57974__auto____0 = (function (){
var statearr_58291 = [null,null,null,null,null,null,null];
(statearr_58291[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__57974__auto__);

(statearr_58291[(1)] = (1));

return statearr_58291;
});
var cljs$core$async$pipeline_STAR__$_state_machine__57974__auto____1 = (function (state_58283){
while(true){
var ret_value__57975__auto__ = (function (){try{while(true){
var result__57976__auto__ = switch__57973__auto__.call(null,state_58283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57976__auto__;
}
break;
}
}catch (e58292){if((e58292 instanceof Object)){
var ex__57977__auto__ = e58292;
var statearr_58293_58423 = state_58283;
(statearr_58293_58423[(5)] = ex__57977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58292;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58424 = state_58283;
state_58283 = G__58424;
continue;
} else {
return ret_value__57975__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__57974__auto__ = function(state_58283){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__57974__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__57974__auto____1.call(this,state_58283);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__57974__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__57974__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__57974__auto__;
})()
;})(__58403,switch__57973__auto__,c__58063__auto___58416,G__58246_58404,G__58246_58405__$1,n__54013__auto___58402,jobs,results,process,async))
})();
var state__58065__auto__ = (function (){var statearr_58294 = f__58064__auto__.call(null);
(statearr_58294[(6)] = c__58063__auto___58416);

return statearr_58294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58065__auto__);
});})(__58403,c__58063__auto___58416,G__58246_58404,G__58246_58405__$1,n__54013__auto___58402,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58246_58405__$1)].join('')));

}

var G__58425 = (__58403 + (1));
__58403 = G__58425;
continue;
} else {
}
break;
}

var c__58063__auto___58426 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58063__auto___58426,jobs,results,process,async){
return (function (){
var f__58064__auto__ = (function (){var switch__57973__auto__ = ((function (c__58063__auto___58426,jobs,results,process,async){
return (function (state_58316){
var state_val_58317 = (state_58316[(1)]);
if((state_val_58317 === (1))){
var state_58316__$1 = state_58316;
var statearr_58318_58427 = state_58316__$1;
(statearr_58318_58427[(2)] = null);

(statearr_58318_58427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58317 === (2))){
var state_58316__$1 = state_58316;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58316__$1,(4),from);
} else {
if((state_val_58317 === (3))){
var inst_58314 = (state_58316[(2)]);
var state_58316__$1 = state_58316;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58316__$1,inst_58314);
} else {
if((state_val_58317 === (4))){
var inst_58297 = (state_58316[(7)]);
var inst_58297__$1 = (state_58316[(2)]);
var inst_58298 = (inst_58297__$1 == null);
var state_58316__$1 = (function (){var statearr_58319 = state_58316;
(statearr_58319[(7)] = inst_58297__$1);

return statearr_58319;
})();
if(cljs.core.truth_(inst_58298)){
var statearr_58320_58428 = state_58316__$1;
(statearr_58320_58428[(1)] = (5));

} else {
var statearr_58321_58429 = state_58316__$1;
(statearr_58321_58429[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58317 === (5))){
var inst_58300 = cljs.core.async.close_BANG_.call(null,jobs);
var state_58316__$1 = state_58316;
var statearr_58322_58430 = state_58316__$1;
(statearr_58322_58430[(2)] = inst_58300);

(statearr_58322_58430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58317 === (6))){
var inst_58302 = (state_58316[(8)]);
var inst_58297 = (state_58316[(7)]);
var inst_58302__$1 = cljs.core.async.chan.call(null,(1));
var inst_58303 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_58304 = [inst_58297,inst_58302__$1];
var inst_58305 = (new cljs.core.PersistentVector(null,2,(5),inst_58303,inst_58304,null));
var state_58316__$1 = (function (){var statearr_58323 = state_58316;
(statearr_58323[(8)] = inst_58302__$1);

return statearr_58323;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58316__$1,(8),jobs,inst_58305);
} else {
if((state_val_58317 === (7))){
var inst_58312 = (state_58316[(2)]);
var state_58316__$1 = state_58316;
var statearr_58324_58431 = state_58316__$1;
(statearr_58324_58431[(2)] = inst_58312);

(statearr_58324_58431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58317 === (8))){
var inst_58302 = (state_58316[(8)]);
var inst_58307 = (state_58316[(2)]);
var state_58316__$1 = (function (){var statearr_58325 = state_58316;
(statearr_58325[(9)] = inst_58307);

return statearr_58325;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58316__$1,(9),results,inst_58302);
} else {
if((state_val_58317 === (9))){
var inst_58309 = (state_58316[(2)]);
var state_58316__$1 = (function (){var statearr_58326 = state_58316;
(statearr_58326[(10)] = inst_58309);

return statearr_58326;
})();
var statearr_58327_58432 = state_58316__$1;
(statearr_58327_58432[(2)] = null);

(statearr_58327_58432[(1)] = (2));


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
});})(c__58063__auto___58426,jobs,results,process,async))
;
return ((function (switch__57973__auto__,c__58063__auto___58426,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__57974__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__57974__auto____0 = (function (){
var statearr_58328 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_58328[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__57974__auto__);

(statearr_58328[(1)] = (1));

return statearr_58328;
});
var cljs$core$async$pipeline_STAR__$_state_machine__57974__auto____1 = (function (state_58316){
while(true){
var ret_value__57975__auto__ = (function (){try{while(true){
var result__57976__auto__ = switch__57973__auto__.call(null,state_58316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57976__auto__;
}
break;
}
}catch (e58329){if((e58329 instanceof Object)){
var ex__57977__auto__ = e58329;
var statearr_58330_58433 = state_58316;
(statearr_58330_58433[(5)] = ex__57977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58434 = state_58316;
state_58316 = G__58434;
continue;
} else {
return ret_value__57975__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__57974__auto__ = function(state_58316){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__57974__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__57974__auto____1.call(this,state_58316);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__57974__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__57974__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__57974__auto__;
})()
;})(switch__57973__auto__,c__58063__auto___58426,jobs,results,process,async))
})();
var state__58065__auto__ = (function (){var statearr_58331 = f__58064__auto__.call(null);
(statearr_58331[(6)] = c__58063__auto___58426);

return statearr_58331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58065__auto__);
});})(c__58063__auto___58426,jobs,results,process,async))
);


var c__58063__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58063__auto__,jobs,results,process,async){
return (function (){
var f__58064__auto__ = (function (){var switch__57973__auto__ = ((function (c__58063__auto__,jobs,results,process,async){
return (function (state_58369){
var state_val_58370 = (state_58369[(1)]);
if((state_val_58370 === (7))){
var inst_58365 = (state_58369[(2)]);
var state_58369__$1 = state_58369;
var statearr_58371_58435 = state_58369__$1;
(statearr_58371_58435[(2)] = inst_58365);

(statearr_58371_58435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58370 === (20))){
var state_58369__$1 = state_58369;
var statearr_58372_58436 = state_58369__$1;
(statearr_58372_58436[(2)] = null);

(statearr_58372_58436[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58370 === (1))){
var state_58369__$1 = state_58369;
var statearr_58373_58437 = state_58369__$1;
(statearr_58373_58437[(2)] = null);

(statearr_58373_58437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58370 === (4))){
var inst_58334 = (state_58369[(7)]);
var inst_58334__$1 = (state_58369[(2)]);
var inst_58335 = (inst_58334__$1 == null);
var state_58369__$1 = (function (){var statearr_58374 = state_58369;
(statearr_58374[(7)] = inst_58334__$1);

return statearr_58374;
})();
if(cljs.core.truth_(inst_58335)){
var statearr_58375_58438 = state_58369__$1;
(statearr_58375_58438[(1)] = (5));

} else {
var statearr_58376_58439 = state_58369__$1;
(statearr_58376_58439[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58370 === (15))){
var inst_58347 = (state_58369[(8)]);
var state_58369__$1 = state_58369;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58369__$1,(18),to,inst_58347);
} else {
if((state_val_58370 === (21))){
var inst_58360 = (state_58369[(2)]);
var state_58369__$1 = state_58369;
var statearr_58377_58440 = state_58369__$1;
(statearr_58377_58440[(2)] = inst_58360);

(statearr_58377_58440[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58370 === (13))){
var inst_58362 = (state_58369[(2)]);
var state_58369__$1 = (function (){var statearr_58378 = state_58369;
(statearr_58378[(9)] = inst_58362);

return statearr_58378;
})();
var statearr_58379_58441 = state_58369__$1;
(statearr_58379_58441[(2)] = null);

(statearr_58379_58441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58370 === (6))){
var inst_58334 = (state_58369[(7)]);
var state_58369__$1 = state_58369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58369__$1,(11),inst_58334);
} else {
if((state_val_58370 === (17))){
var inst_58355 = (state_58369[(2)]);
var state_58369__$1 = state_58369;
if(cljs.core.truth_(inst_58355)){
var statearr_58380_58442 = state_58369__$1;
(statearr_58380_58442[(1)] = (19));

} else {
var statearr_58381_58443 = state_58369__$1;
(statearr_58381_58443[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58370 === (3))){
var inst_58367 = (state_58369[(2)]);
var state_58369__$1 = state_58369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58369__$1,inst_58367);
} else {
if((state_val_58370 === (12))){
var inst_58344 = (state_58369[(10)]);
var state_58369__$1 = state_58369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58369__$1,(14),inst_58344);
} else {
if((state_val_58370 === (2))){
var state_58369__$1 = state_58369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58369__$1,(4),results);
} else {
if((state_val_58370 === (19))){
var state_58369__$1 = state_58369;
var statearr_58382_58444 = state_58369__$1;
(statearr_58382_58444[(2)] = null);

(statearr_58382_58444[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58370 === (11))){
var inst_58344 = (state_58369[(2)]);
var state_58369__$1 = (function (){var statearr_58383 = state_58369;
(statearr_58383[(10)] = inst_58344);

return statearr_58383;
})();
var statearr_58384_58445 = state_58369__$1;
(statearr_58384_58445[(2)] = null);

(statearr_58384_58445[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58370 === (9))){
var state_58369__$1 = state_58369;
var statearr_58385_58446 = state_58369__$1;
(statearr_58385_58446[(2)] = null);

(statearr_58385_58446[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58370 === (5))){
var state_58369__$1 = state_58369;
if(cljs.core.truth_(close_QMARK_)){
var statearr_58386_58447 = state_58369__$1;
(statearr_58386_58447[(1)] = (8));

} else {
var statearr_58387_58448 = state_58369__$1;
(statearr_58387_58448[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58370 === (14))){
var inst_58347 = (state_58369[(8)]);
var inst_58349 = (state_58369[(11)]);
var inst_58347__$1 = (state_58369[(2)]);
var inst_58348 = (inst_58347__$1 == null);
var inst_58349__$1 = cljs.core.not.call(null,inst_58348);
var state_58369__$1 = (function (){var statearr_58388 = state_58369;
(statearr_58388[(8)] = inst_58347__$1);

(statearr_58388[(11)] = inst_58349__$1);

return statearr_58388;
})();
if(inst_58349__$1){
var statearr_58389_58449 = state_58369__$1;
(statearr_58389_58449[(1)] = (15));

} else {
var statearr_58390_58450 = state_58369__$1;
(statearr_58390_58450[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58370 === (16))){
var inst_58349 = (state_58369[(11)]);
var state_58369__$1 = state_58369;
var statearr_58391_58451 = state_58369__$1;
(statearr_58391_58451[(2)] = inst_58349);

(statearr_58391_58451[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58370 === (10))){
var inst_58341 = (state_58369[(2)]);
var state_58369__$1 = state_58369;
var statearr_58392_58452 = state_58369__$1;
(statearr_58392_58452[(2)] = inst_58341);

(statearr_58392_58452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58370 === (18))){
var inst_58352 = (state_58369[(2)]);
var state_58369__$1 = state_58369;
var statearr_58393_58453 = state_58369__$1;
(statearr_58393_58453[(2)] = inst_58352);

(statearr_58393_58453[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58370 === (8))){
var inst_58338 = cljs.core.async.close_BANG_.call(null,to);
var state_58369__$1 = state_58369;
var statearr_58394_58454 = state_58369__$1;
(statearr_58394_58454[(2)] = inst_58338);

(statearr_58394_58454[(1)] = (10));


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
});})(c__58063__auto__,jobs,results,process,async))
;
return ((function (switch__57973__auto__,c__58063__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__57974__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__57974__auto____0 = (function (){
var statearr_58395 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58395[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__57974__auto__);

(statearr_58395[(1)] = (1));

return statearr_58395;
});
var cljs$core$async$pipeline_STAR__$_state_machine__57974__auto____1 = (function (state_58369){
while(true){
var ret_value__57975__auto__ = (function (){try{while(true){
var result__57976__auto__ = switch__57973__auto__.call(null,state_58369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57976__auto__;
}
break;
}
}catch (e58396){if((e58396 instanceof Object)){
var ex__57977__auto__ = e58396;
var statearr_58397_58455 = state_58369;
(statearr_58397_58455[(5)] = ex__57977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58456 = state_58369;
state_58369 = G__58456;
continue;
} else {
return ret_value__57975__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__57974__auto__ = function(state_58369){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__57974__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__57974__auto____1.call(this,state_58369);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__57974__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__57974__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__57974__auto__;
})()
;})(switch__57973__auto__,c__58063__auto__,jobs,results,process,async))
})();
var state__58065__auto__ = (function (){var statearr_58398 = f__58064__auto__.call(null);
(statearr_58398[(6)] = c__58063__auto__);

return statearr_58398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58065__auto__);
});})(c__58063__auto__,jobs,results,process,async))
);

return c__58063__auto__;
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
var G__58458 = arguments.length;
switch (G__58458) {
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
var G__58461 = arguments.length;
switch (G__58461) {
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
var G__58464 = arguments.length;
switch (G__58464) {
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
var c__58063__auto___58513 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58063__auto___58513,tc,fc){
return (function (){
var f__58064__auto__ = (function (){var switch__57973__auto__ = ((function (c__58063__auto___58513,tc,fc){
return (function (state_58490){
var state_val_58491 = (state_58490[(1)]);
if((state_val_58491 === (7))){
var inst_58486 = (state_58490[(2)]);
var state_58490__$1 = state_58490;
var statearr_58492_58514 = state_58490__$1;
(statearr_58492_58514[(2)] = inst_58486);

(statearr_58492_58514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58491 === (1))){
var state_58490__$1 = state_58490;
var statearr_58493_58515 = state_58490__$1;
(statearr_58493_58515[(2)] = null);

(statearr_58493_58515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58491 === (4))){
var inst_58467 = (state_58490[(7)]);
var inst_58467__$1 = (state_58490[(2)]);
var inst_58468 = (inst_58467__$1 == null);
var state_58490__$1 = (function (){var statearr_58494 = state_58490;
(statearr_58494[(7)] = inst_58467__$1);

return statearr_58494;
})();
if(cljs.core.truth_(inst_58468)){
var statearr_58495_58516 = state_58490__$1;
(statearr_58495_58516[(1)] = (5));

} else {
var statearr_58496_58517 = state_58490__$1;
(statearr_58496_58517[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58491 === (13))){
var state_58490__$1 = state_58490;
var statearr_58497_58518 = state_58490__$1;
(statearr_58497_58518[(2)] = null);

(statearr_58497_58518[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58491 === (6))){
var inst_58467 = (state_58490[(7)]);
var inst_58473 = p.call(null,inst_58467);
var state_58490__$1 = state_58490;
if(cljs.core.truth_(inst_58473)){
var statearr_58498_58519 = state_58490__$1;
(statearr_58498_58519[(1)] = (9));

} else {
var statearr_58499_58520 = state_58490__$1;
(statearr_58499_58520[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58491 === (3))){
var inst_58488 = (state_58490[(2)]);
var state_58490__$1 = state_58490;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58490__$1,inst_58488);
} else {
if((state_val_58491 === (12))){
var state_58490__$1 = state_58490;
var statearr_58500_58521 = state_58490__$1;
(statearr_58500_58521[(2)] = null);

(statearr_58500_58521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58491 === (2))){
var state_58490__$1 = state_58490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58490__$1,(4),ch);
} else {
if((state_val_58491 === (11))){
var inst_58467 = (state_58490[(7)]);
var inst_58477 = (state_58490[(2)]);
var state_58490__$1 = state_58490;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58490__$1,(8),inst_58477,inst_58467);
} else {
if((state_val_58491 === (9))){
var state_58490__$1 = state_58490;
var statearr_58501_58522 = state_58490__$1;
(statearr_58501_58522[(2)] = tc);

(statearr_58501_58522[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58491 === (5))){
var inst_58470 = cljs.core.async.close_BANG_.call(null,tc);
var inst_58471 = cljs.core.async.close_BANG_.call(null,fc);
var state_58490__$1 = (function (){var statearr_58502 = state_58490;
(statearr_58502[(8)] = inst_58470);

return statearr_58502;
})();
var statearr_58503_58523 = state_58490__$1;
(statearr_58503_58523[(2)] = inst_58471);

(statearr_58503_58523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58491 === (14))){
var inst_58484 = (state_58490[(2)]);
var state_58490__$1 = state_58490;
var statearr_58504_58524 = state_58490__$1;
(statearr_58504_58524[(2)] = inst_58484);

(statearr_58504_58524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58491 === (10))){
var state_58490__$1 = state_58490;
var statearr_58505_58525 = state_58490__$1;
(statearr_58505_58525[(2)] = fc);

(statearr_58505_58525[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58491 === (8))){
var inst_58479 = (state_58490[(2)]);
var state_58490__$1 = state_58490;
if(cljs.core.truth_(inst_58479)){
var statearr_58506_58526 = state_58490__$1;
(statearr_58506_58526[(1)] = (12));

} else {
var statearr_58507_58527 = state_58490__$1;
(statearr_58507_58527[(1)] = (13));

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
});})(c__58063__auto___58513,tc,fc))
;
return ((function (switch__57973__auto__,c__58063__auto___58513,tc,fc){
return (function() {
var cljs$core$async$state_machine__57974__auto__ = null;
var cljs$core$async$state_machine__57974__auto____0 = (function (){
var statearr_58508 = [null,null,null,null,null,null,null,null,null];
(statearr_58508[(0)] = cljs$core$async$state_machine__57974__auto__);

(statearr_58508[(1)] = (1));

return statearr_58508;
});
var cljs$core$async$state_machine__57974__auto____1 = (function (state_58490){
while(true){
var ret_value__57975__auto__ = (function (){try{while(true){
var result__57976__auto__ = switch__57973__auto__.call(null,state_58490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57976__auto__;
}
break;
}
}catch (e58509){if((e58509 instanceof Object)){
var ex__57977__auto__ = e58509;
var statearr_58510_58528 = state_58490;
(statearr_58510_58528[(5)] = ex__57977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58529 = state_58490;
state_58490 = G__58529;
continue;
} else {
return ret_value__57975__auto__;
}
break;
}
});
cljs$core$async$state_machine__57974__auto__ = function(state_58490){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57974__auto____1.call(this,state_58490);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57974__auto____0;
cljs$core$async$state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57974__auto____1;
return cljs$core$async$state_machine__57974__auto__;
})()
;})(switch__57973__auto__,c__58063__auto___58513,tc,fc))
})();
var state__58065__auto__ = (function (){var statearr_58511 = f__58064__auto__.call(null);
(statearr_58511[(6)] = c__58063__auto___58513);

return statearr_58511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58065__auto__);
});})(c__58063__auto___58513,tc,fc))
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
var c__58063__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58063__auto__){
return (function (){
var f__58064__auto__ = (function (){var switch__57973__auto__ = ((function (c__58063__auto__){
return (function (state_58550){
var state_val_58551 = (state_58550[(1)]);
if((state_val_58551 === (7))){
var inst_58546 = (state_58550[(2)]);
var state_58550__$1 = state_58550;
var statearr_58552_58570 = state_58550__$1;
(statearr_58552_58570[(2)] = inst_58546);

(statearr_58552_58570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58551 === (1))){
var inst_58530 = init;
var state_58550__$1 = (function (){var statearr_58553 = state_58550;
(statearr_58553[(7)] = inst_58530);

return statearr_58553;
})();
var statearr_58554_58571 = state_58550__$1;
(statearr_58554_58571[(2)] = null);

(statearr_58554_58571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58551 === (4))){
var inst_58533 = (state_58550[(8)]);
var inst_58533__$1 = (state_58550[(2)]);
var inst_58534 = (inst_58533__$1 == null);
var state_58550__$1 = (function (){var statearr_58555 = state_58550;
(statearr_58555[(8)] = inst_58533__$1);

return statearr_58555;
})();
if(cljs.core.truth_(inst_58534)){
var statearr_58556_58572 = state_58550__$1;
(statearr_58556_58572[(1)] = (5));

} else {
var statearr_58557_58573 = state_58550__$1;
(statearr_58557_58573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58551 === (6))){
var inst_58530 = (state_58550[(7)]);
var inst_58537 = (state_58550[(9)]);
var inst_58533 = (state_58550[(8)]);
var inst_58537__$1 = f.call(null,inst_58530,inst_58533);
var inst_58538 = cljs.core.reduced_QMARK_.call(null,inst_58537__$1);
var state_58550__$1 = (function (){var statearr_58558 = state_58550;
(statearr_58558[(9)] = inst_58537__$1);

return statearr_58558;
})();
if(inst_58538){
var statearr_58559_58574 = state_58550__$1;
(statearr_58559_58574[(1)] = (8));

} else {
var statearr_58560_58575 = state_58550__$1;
(statearr_58560_58575[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58551 === (3))){
var inst_58548 = (state_58550[(2)]);
var state_58550__$1 = state_58550;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58550__$1,inst_58548);
} else {
if((state_val_58551 === (2))){
var state_58550__$1 = state_58550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58550__$1,(4),ch);
} else {
if((state_val_58551 === (9))){
var inst_58537 = (state_58550[(9)]);
var inst_58530 = inst_58537;
var state_58550__$1 = (function (){var statearr_58561 = state_58550;
(statearr_58561[(7)] = inst_58530);

return statearr_58561;
})();
var statearr_58562_58576 = state_58550__$1;
(statearr_58562_58576[(2)] = null);

(statearr_58562_58576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58551 === (5))){
var inst_58530 = (state_58550[(7)]);
var state_58550__$1 = state_58550;
var statearr_58563_58577 = state_58550__$1;
(statearr_58563_58577[(2)] = inst_58530);

(statearr_58563_58577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58551 === (10))){
var inst_58544 = (state_58550[(2)]);
var state_58550__$1 = state_58550;
var statearr_58564_58578 = state_58550__$1;
(statearr_58564_58578[(2)] = inst_58544);

(statearr_58564_58578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58551 === (8))){
var inst_58537 = (state_58550[(9)]);
var inst_58540 = cljs.core.deref.call(null,inst_58537);
var state_58550__$1 = state_58550;
var statearr_58565_58579 = state_58550__$1;
(statearr_58565_58579[(2)] = inst_58540);

(statearr_58565_58579[(1)] = (10));


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
});})(c__58063__auto__))
;
return ((function (switch__57973__auto__,c__58063__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__57974__auto__ = null;
var cljs$core$async$reduce_$_state_machine__57974__auto____0 = (function (){
var statearr_58566 = [null,null,null,null,null,null,null,null,null,null];
(statearr_58566[(0)] = cljs$core$async$reduce_$_state_machine__57974__auto__);

(statearr_58566[(1)] = (1));

return statearr_58566;
});
var cljs$core$async$reduce_$_state_machine__57974__auto____1 = (function (state_58550){
while(true){
var ret_value__57975__auto__ = (function (){try{while(true){
var result__57976__auto__ = switch__57973__auto__.call(null,state_58550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57976__auto__;
}
break;
}
}catch (e58567){if((e58567 instanceof Object)){
var ex__57977__auto__ = e58567;
var statearr_58568_58580 = state_58550;
(statearr_58568_58580[(5)] = ex__57977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58581 = state_58550;
state_58550 = G__58581;
continue;
} else {
return ret_value__57975__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__57974__auto__ = function(state_58550){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__57974__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__57974__auto____1.call(this,state_58550);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__57974__auto____0;
cljs$core$async$reduce_$_state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__57974__auto____1;
return cljs$core$async$reduce_$_state_machine__57974__auto__;
})()
;})(switch__57973__auto__,c__58063__auto__))
})();
var state__58065__auto__ = (function (){var statearr_58569 = f__58064__auto__.call(null);
(statearr_58569[(6)] = c__58063__auto__);

return statearr_58569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58065__auto__);
});})(c__58063__auto__))
);

return c__58063__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__58063__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58063__auto__,f__$1){
return (function (){
var f__58064__auto__ = (function (){var switch__57973__auto__ = ((function (c__58063__auto__,f__$1){
return (function (state_58587){
var state_val_58588 = (state_58587[(1)]);
if((state_val_58588 === (1))){
var inst_58582 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_58587__$1 = state_58587;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58587__$1,(2),inst_58582);
} else {
if((state_val_58588 === (2))){
var inst_58584 = (state_58587[(2)]);
var inst_58585 = f__$1.call(null,inst_58584);
var state_58587__$1 = state_58587;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58587__$1,inst_58585);
} else {
return null;
}
}
});})(c__58063__auto__,f__$1))
;
return ((function (switch__57973__auto__,c__58063__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__57974__auto__ = null;
var cljs$core$async$transduce_$_state_machine__57974__auto____0 = (function (){
var statearr_58589 = [null,null,null,null,null,null,null];
(statearr_58589[(0)] = cljs$core$async$transduce_$_state_machine__57974__auto__);

(statearr_58589[(1)] = (1));

return statearr_58589;
});
var cljs$core$async$transduce_$_state_machine__57974__auto____1 = (function (state_58587){
while(true){
var ret_value__57975__auto__ = (function (){try{while(true){
var result__57976__auto__ = switch__57973__auto__.call(null,state_58587);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57976__auto__;
}
break;
}
}catch (e58590){if((e58590 instanceof Object)){
var ex__57977__auto__ = e58590;
var statearr_58591_58593 = state_58587;
(statearr_58591_58593[(5)] = ex__57977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58587);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58594 = state_58587;
state_58587 = G__58594;
continue;
} else {
return ret_value__57975__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__57974__auto__ = function(state_58587){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__57974__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__57974__auto____1.call(this,state_58587);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__57974__auto____0;
cljs$core$async$transduce_$_state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__57974__auto____1;
return cljs$core$async$transduce_$_state_machine__57974__auto__;
})()
;})(switch__57973__auto__,c__58063__auto__,f__$1))
})();
var state__58065__auto__ = (function (){var statearr_58592 = f__58064__auto__.call(null);
(statearr_58592[(6)] = c__58063__auto__);

return statearr_58592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58065__auto__);
});})(c__58063__auto__,f__$1))
);

return c__58063__auto__;
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
var G__58596 = arguments.length;
switch (G__58596) {
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
var c__58063__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58063__auto__){
return (function (){
var f__58064__auto__ = (function (){var switch__57973__auto__ = ((function (c__58063__auto__){
return (function (state_58621){
var state_val_58622 = (state_58621[(1)]);
if((state_val_58622 === (7))){
var inst_58603 = (state_58621[(2)]);
var state_58621__$1 = state_58621;
var statearr_58623_58644 = state_58621__$1;
(statearr_58623_58644[(2)] = inst_58603);

(statearr_58623_58644[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58622 === (1))){
var inst_58597 = cljs.core.seq.call(null,coll);
var inst_58598 = inst_58597;
var state_58621__$1 = (function (){var statearr_58624 = state_58621;
(statearr_58624[(7)] = inst_58598);

return statearr_58624;
})();
var statearr_58625_58645 = state_58621__$1;
(statearr_58625_58645[(2)] = null);

(statearr_58625_58645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58622 === (4))){
var inst_58598 = (state_58621[(7)]);
var inst_58601 = cljs.core.first.call(null,inst_58598);
var state_58621__$1 = state_58621;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58621__$1,(7),ch,inst_58601);
} else {
if((state_val_58622 === (13))){
var inst_58615 = (state_58621[(2)]);
var state_58621__$1 = state_58621;
var statearr_58626_58646 = state_58621__$1;
(statearr_58626_58646[(2)] = inst_58615);

(statearr_58626_58646[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58622 === (6))){
var inst_58606 = (state_58621[(2)]);
var state_58621__$1 = state_58621;
if(cljs.core.truth_(inst_58606)){
var statearr_58627_58647 = state_58621__$1;
(statearr_58627_58647[(1)] = (8));

} else {
var statearr_58628_58648 = state_58621__$1;
(statearr_58628_58648[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58622 === (3))){
var inst_58619 = (state_58621[(2)]);
var state_58621__$1 = state_58621;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58621__$1,inst_58619);
} else {
if((state_val_58622 === (12))){
var state_58621__$1 = state_58621;
var statearr_58629_58649 = state_58621__$1;
(statearr_58629_58649[(2)] = null);

(statearr_58629_58649[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58622 === (2))){
var inst_58598 = (state_58621[(7)]);
var state_58621__$1 = state_58621;
if(cljs.core.truth_(inst_58598)){
var statearr_58630_58650 = state_58621__$1;
(statearr_58630_58650[(1)] = (4));

} else {
var statearr_58631_58651 = state_58621__$1;
(statearr_58631_58651[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58622 === (11))){
var inst_58612 = cljs.core.async.close_BANG_.call(null,ch);
var state_58621__$1 = state_58621;
var statearr_58632_58652 = state_58621__$1;
(statearr_58632_58652[(2)] = inst_58612);

(statearr_58632_58652[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58622 === (9))){
var state_58621__$1 = state_58621;
if(cljs.core.truth_(close_QMARK_)){
var statearr_58633_58653 = state_58621__$1;
(statearr_58633_58653[(1)] = (11));

} else {
var statearr_58634_58654 = state_58621__$1;
(statearr_58634_58654[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58622 === (5))){
var inst_58598 = (state_58621[(7)]);
var state_58621__$1 = state_58621;
var statearr_58635_58655 = state_58621__$1;
(statearr_58635_58655[(2)] = inst_58598);

(statearr_58635_58655[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58622 === (10))){
var inst_58617 = (state_58621[(2)]);
var state_58621__$1 = state_58621;
var statearr_58636_58656 = state_58621__$1;
(statearr_58636_58656[(2)] = inst_58617);

(statearr_58636_58656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58622 === (8))){
var inst_58598 = (state_58621[(7)]);
var inst_58608 = cljs.core.next.call(null,inst_58598);
var inst_58598__$1 = inst_58608;
var state_58621__$1 = (function (){var statearr_58637 = state_58621;
(statearr_58637[(7)] = inst_58598__$1);

return statearr_58637;
})();
var statearr_58638_58657 = state_58621__$1;
(statearr_58638_58657[(2)] = null);

(statearr_58638_58657[(1)] = (2));


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
});})(c__58063__auto__))
;
return ((function (switch__57973__auto__,c__58063__auto__){
return (function() {
var cljs$core$async$state_machine__57974__auto__ = null;
var cljs$core$async$state_machine__57974__auto____0 = (function (){
var statearr_58639 = [null,null,null,null,null,null,null,null];
(statearr_58639[(0)] = cljs$core$async$state_machine__57974__auto__);

(statearr_58639[(1)] = (1));

return statearr_58639;
});
var cljs$core$async$state_machine__57974__auto____1 = (function (state_58621){
while(true){
var ret_value__57975__auto__ = (function (){try{while(true){
var result__57976__auto__ = switch__57973__auto__.call(null,state_58621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57976__auto__;
}
break;
}
}catch (e58640){if((e58640 instanceof Object)){
var ex__57977__auto__ = e58640;
var statearr_58641_58658 = state_58621;
(statearr_58641_58658[(5)] = ex__57977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58659 = state_58621;
state_58621 = G__58659;
continue;
} else {
return ret_value__57975__auto__;
}
break;
}
});
cljs$core$async$state_machine__57974__auto__ = function(state_58621){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57974__auto____1.call(this,state_58621);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57974__auto____0;
cljs$core$async$state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57974__auto____1;
return cljs$core$async$state_machine__57974__auto__;
})()
;})(switch__57973__auto__,c__58063__auto__))
})();
var state__58065__auto__ = (function (){var statearr_58642 = f__58064__auto__.call(null);
(statearr_58642[(6)] = c__58063__auto__);

return statearr_58642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58065__auto__);
});})(c__58063__auto__))
);

return c__58063__auto__;
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
var x__53703__auto__ = (((_ == null))?null:_);
var m__53704__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__53703__auto__)]);
if(!((m__53704__auto__ == null))){
return m__53704__auto__.call(null,_);
} else {
var m__53704__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__53704__auto____$1 == null))){
return m__53704__auto____$1.call(null,_);
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
var x__53703__auto__ = (((m == null))?null:m);
var m__53704__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__53703__auto__)]);
if(!((m__53704__auto__ == null))){
return m__53704__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__53704__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__53704__auto____$1 == null))){
return m__53704__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__53703__auto__ = (((m == null))?null:m);
var m__53704__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__53703__auto__)]);
if(!((m__53704__auto__ == null))){
return m__53704__auto__.call(null,m,ch);
} else {
var m__53704__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__53704__auto____$1 == null))){
return m__53704__auto____$1.call(null,m,ch);
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
var x__53703__auto__ = (((m == null))?null:m);
var m__53704__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__53703__auto__)]);
if(!((m__53704__auto__ == null))){
return m__53704__auto__.call(null,m);
} else {
var m__53704__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__53704__auto____$1 == null))){
return m__53704__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async58660 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58660 = (function (ch,cs,meta58661){
this.ch = ch;
this.cs = cs;
this.meta58661 = meta58661;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async58660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_58662,meta58661__$1){
var self__ = this;
var _58662__$1 = this;
return (new cljs.core.async.t_cljs$core$async58660(self__.ch,self__.cs,meta58661__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async58660.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_58662){
var self__ = this;
var _58662__$1 = this;
return self__.meta58661;
});})(cs))
;

cljs.core.async.t_cljs$core$async58660.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58660.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async58660.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58660.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async58660.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async58660.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async58660.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta58661","meta58661",-1379532472,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async58660.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58660.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58660";

cljs.core.async.t_cljs$core$async58660.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__53641__auto__,writer__53642__auto__,opt__53643__auto__){
return cljs.core._write.call(null,writer__53642__auto__,"cljs.core.async/t_cljs$core$async58660");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async58660 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async58660(ch__$1,cs__$1,meta58661){
return (new cljs.core.async.t_cljs$core$async58660(ch__$1,cs__$1,meta58661));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async58660(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__58063__auto___58882 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58063__auto___58882,cs,m,dchan,dctr,done){
return (function (){
var f__58064__auto__ = (function (){var switch__57973__auto__ = ((function (c__58063__auto___58882,cs,m,dchan,dctr,done){
return (function (state_58797){
var state_val_58798 = (state_58797[(1)]);
if((state_val_58798 === (7))){
var inst_58793 = (state_58797[(2)]);
var state_58797__$1 = state_58797;
var statearr_58799_58883 = state_58797__$1;
(statearr_58799_58883[(2)] = inst_58793);

(statearr_58799_58883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58798 === (20))){
var inst_58696 = (state_58797[(7)]);
var inst_58708 = cljs.core.first.call(null,inst_58696);
var inst_58709 = cljs.core.nth.call(null,inst_58708,(0),null);
var inst_58710 = cljs.core.nth.call(null,inst_58708,(1),null);
var state_58797__$1 = (function (){var statearr_58800 = state_58797;
(statearr_58800[(8)] = inst_58709);

return statearr_58800;
})();
if(cljs.core.truth_(inst_58710)){
var statearr_58801_58884 = state_58797__$1;
(statearr_58801_58884[(1)] = (22));

} else {
var statearr_58802_58885 = state_58797__$1;
(statearr_58802_58885[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58798 === (27))){
var inst_58665 = (state_58797[(9)]);
var inst_58740 = (state_58797[(10)]);
var inst_58745 = (state_58797[(11)]);
var inst_58738 = (state_58797[(12)]);
var inst_58745__$1 = cljs.core._nth.call(null,inst_58738,inst_58740);
var inst_58746 = cljs.core.async.put_BANG_.call(null,inst_58745__$1,inst_58665,done);
var state_58797__$1 = (function (){var statearr_58803 = state_58797;
(statearr_58803[(11)] = inst_58745__$1);

return statearr_58803;
})();
if(cljs.core.truth_(inst_58746)){
var statearr_58804_58886 = state_58797__$1;
(statearr_58804_58886[(1)] = (30));

} else {
var statearr_58805_58887 = state_58797__$1;
(statearr_58805_58887[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58798 === (1))){
var state_58797__$1 = state_58797;
var statearr_58806_58888 = state_58797__$1;
(statearr_58806_58888[(2)] = null);

(statearr_58806_58888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58798 === (24))){
var inst_58696 = (state_58797[(7)]);
var inst_58715 = (state_58797[(2)]);
var inst_58716 = cljs.core.next.call(null,inst_58696);
var inst_58674 = inst_58716;
var inst_58675 = null;
var inst_58676 = (0);
var inst_58677 = (0);
var state_58797__$1 = (function (){var statearr_58807 = state_58797;
(statearr_58807[(13)] = inst_58715);

(statearr_58807[(14)] = inst_58677);

(statearr_58807[(15)] = inst_58676);

(statearr_58807[(16)] = inst_58675);

(statearr_58807[(17)] = inst_58674);

return statearr_58807;
})();
var statearr_58808_58889 = state_58797__$1;
(statearr_58808_58889[(2)] = null);

(statearr_58808_58889[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58798 === (39))){
var state_58797__$1 = state_58797;
var statearr_58812_58890 = state_58797__$1;
(statearr_58812_58890[(2)] = null);

(statearr_58812_58890[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58798 === (4))){
var inst_58665 = (state_58797[(9)]);
var inst_58665__$1 = (state_58797[(2)]);
var inst_58666 = (inst_58665__$1 == null);
var state_58797__$1 = (function (){var statearr_58813 = state_58797;
(statearr_58813[(9)] = inst_58665__$1);

return statearr_58813;
})();
if(cljs.core.truth_(inst_58666)){
var statearr_58814_58891 = state_58797__$1;
(statearr_58814_58891[(1)] = (5));

} else {
var statearr_58815_58892 = state_58797__$1;
(statearr_58815_58892[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58798 === (15))){
var inst_58677 = (state_58797[(14)]);
var inst_58676 = (state_58797[(15)]);
var inst_58675 = (state_58797[(16)]);
var inst_58674 = (state_58797[(17)]);
var inst_58692 = (state_58797[(2)]);
var inst_58693 = (inst_58677 + (1));
var tmp58809 = inst_58676;
var tmp58810 = inst_58675;
var tmp58811 = inst_58674;
var inst_58674__$1 = tmp58811;
var inst_58675__$1 = tmp58810;
var inst_58676__$1 = tmp58809;
var inst_58677__$1 = inst_58693;
var state_58797__$1 = (function (){var statearr_58816 = state_58797;
(statearr_58816[(18)] = inst_58692);

(statearr_58816[(14)] = inst_58677__$1);

(statearr_58816[(15)] = inst_58676__$1);

(statearr_58816[(16)] = inst_58675__$1);

(statearr_58816[(17)] = inst_58674__$1);

return statearr_58816;
})();
var statearr_58817_58893 = state_58797__$1;
(statearr_58817_58893[(2)] = null);

(statearr_58817_58893[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58798 === (21))){
var inst_58719 = (state_58797[(2)]);
var state_58797__$1 = state_58797;
var statearr_58821_58894 = state_58797__$1;
(statearr_58821_58894[(2)] = inst_58719);

(statearr_58821_58894[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58798 === (31))){
var inst_58745 = (state_58797[(11)]);
var inst_58749 = done.call(null,null);
var inst_58750 = cljs.core.async.untap_STAR_.call(null,m,inst_58745);
var state_58797__$1 = (function (){var statearr_58822 = state_58797;
(statearr_58822[(19)] = inst_58749);

return statearr_58822;
})();
var statearr_58823_58895 = state_58797__$1;
(statearr_58823_58895[(2)] = inst_58750);

(statearr_58823_58895[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58798 === (32))){
var inst_58739 = (state_58797[(20)]);
var inst_58737 = (state_58797[(21)]);
var inst_58740 = (state_58797[(10)]);
var inst_58738 = (state_58797[(12)]);
var inst_58752 = (state_58797[(2)]);
var inst_58753 = (inst_58740 + (1));
var tmp58818 = inst_58739;
var tmp58819 = inst_58737;
var tmp58820 = inst_58738;
var inst_58737__$1 = tmp58819;
var inst_58738__$1 = tmp58820;
var inst_58739__$1 = tmp58818;
var inst_58740__$1 = inst_58753;
var state_58797__$1 = (function (){var statearr_58824 = state_58797;
(statearr_58824[(20)] = inst_58739__$1);

(statearr_58824[(21)] = inst_58737__$1);

(statearr_58824[(10)] = inst_58740__$1);

(statearr_58824[(22)] = inst_58752);

(statearr_58824[(12)] = inst_58738__$1);

return statearr_58824;
})();
var statearr_58825_58896 = state_58797__$1;
(statearr_58825_58896[(2)] = null);

(statearr_58825_58896[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58798 === (40))){
var inst_58765 = (state_58797[(23)]);
var inst_58769 = done.call(null,null);
var inst_58770 = cljs.core.async.untap_STAR_.call(null,m,inst_58765);
var state_58797__$1 = (function (){var statearr_58826 = state_58797;
(statearr_58826[(24)] = inst_58769);

return statearr_58826;
})();
var statearr_58827_58897 = state_58797__$1;
(statearr_58827_58897[(2)] = inst_58770);

(statearr_58827_58897[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58798 === (33))){
var inst_58756 = (state_58797[(25)]);
var inst_58758 = cljs.core.chunked_seq_QMARK_.call(null,inst_58756);
var state_58797__$1 = state_58797;
if(inst_58758){
var statearr_58828_58898 = state_58797__$1;
(statearr_58828_58898[(1)] = (36));

} else {
var statearr_58829_58899 = state_58797__$1;
(statearr_58829_58899[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58798 === (13))){
var inst_58686 = (state_58797[(26)]);
var inst_58689 = cljs.core.async.close_BANG_.call(null,inst_58686);
var state_58797__$1 = state_58797;
var statearr_58830_58900 = state_58797__$1;
(statearr_58830_58900[(2)] = inst_58689);

(statearr_58830_58900[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58798 === (22))){
var inst_58709 = (state_58797[(8)]);
var inst_58712 = cljs.core.async.close_BANG_.call(null,inst_58709);
var state_58797__$1 = state_58797;
var statearr_58831_58901 = state_58797__$1;
(statearr_58831_58901[(2)] = inst_58712);

(statearr_58831_58901[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58798 === (36))){
var inst_58756 = (state_58797[(25)]);
var inst_58760 = cljs.core.chunk_first.call(null,inst_58756);
var inst_58761 = cljs.core.chunk_rest.call(null,inst_58756);
var inst_58762 = cljs.core.count.call(null,inst_58760);
var inst_58737 = inst_58761;
var inst_58738 = inst_58760;
var inst_58739 = inst_58762;
var inst_58740 = (0);
var state_58797__$1 = (function (){var statearr_58832 = state_58797;
(statearr_58832[(20)] = inst_58739);

(statearr_58832[(21)] = inst_58737);

(statearr_58832[(10)] = inst_58740);

(statearr_58832[(12)] = inst_58738);

return statearr_58832;
})();
var statearr_58833_58902 = state_58797__$1;
(statearr_58833_58902[(2)] = null);

(statearr_58833_58902[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58798 === (41))){
var inst_58756 = (state_58797[(25)]);
var inst_58772 = (state_58797[(2)]);
var inst_58773 = cljs.core.next.call(null,inst_58756);
var inst_58737 = inst_58773;
var inst_58738 = null;
var inst_58739 = (0);
var inst_58740 = (0);
var state_58797__$1 = (function (){var statearr_58834 = state_58797;
(statearr_58834[(20)] = inst_58739);

(statearr_58834[(21)] = inst_58737);

(statearr_58834[(10)] = inst_58740);

(statearr_58834[(27)] = inst_58772);

(statearr_58834[(12)] = inst_58738);

return statearr_58834;
})();
var statearr_58835_58903 = state_58797__$1;
(statearr_58835_58903[(2)] = null);

(statearr_58835_58903[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58798 === (43))){
var state_58797__$1 = state_58797;
var statearr_58836_58904 = state_58797__$1;
(statearr_58836_58904[(2)] = null);

(statearr_58836_58904[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58798 === (29))){
var inst_58781 = (state_58797[(2)]);
var state_58797__$1 = state_58797;
var statearr_58837_58905 = state_58797__$1;
(statearr_58837_58905[(2)] = inst_58781);

(statearr_58837_58905[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58798 === (44))){
var inst_58790 = (state_58797[(2)]);
var state_58797__$1 = (function (){var statearr_58838 = state_58797;
(statearr_58838[(28)] = inst_58790);

return statearr_58838;
})();
var statearr_58839_58906 = state_58797__$1;
(statearr_58839_58906[(2)] = null);

(statearr_58839_58906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58798 === (6))){
var inst_58729 = (state_58797[(29)]);
var inst_58728 = cljs.core.deref.call(null,cs);
var inst_58729__$1 = cljs.core.keys.call(null,inst_58728);
var inst_58730 = cljs.core.count.call(null,inst_58729__$1);
var inst_58731 = cljs.core.reset_BANG_.call(null,dctr,inst_58730);
var inst_58736 = cljs.core.seq.call(null,inst_58729__$1);
var inst_58737 = inst_58736;
var inst_58738 = null;
var inst_58739 = (0);
var inst_58740 = (0);
var state_58797__$1 = (function (){var statearr_58840 = state_58797;
(statearr_58840[(20)] = inst_58739);

(statearr_58840[(21)] = inst_58737);

(statearr_58840[(29)] = inst_58729__$1);

(statearr_58840[(30)] = inst_58731);

(statearr_58840[(10)] = inst_58740);

(statearr_58840[(12)] = inst_58738);

return statearr_58840;
})();
var statearr_58841_58907 = state_58797__$1;
(statearr_58841_58907[(2)] = null);

(statearr_58841_58907[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58798 === (28))){
var inst_58737 = (state_58797[(21)]);
var inst_58756 = (state_58797[(25)]);
var inst_58756__$1 = cljs.core.seq.call(null,inst_58737);
var state_58797__$1 = (function (){var statearr_58842 = state_58797;
(statearr_58842[(25)] = inst_58756__$1);

return statearr_58842;
})();
if(inst_58756__$1){
var statearr_58843_58908 = state_58797__$1;
(statearr_58843_58908[(1)] = (33));

} else {
var statearr_58844_58909 = state_58797__$1;
(statearr_58844_58909[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58798 === (25))){
var inst_58739 = (state_58797[(20)]);
var inst_58740 = (state_58797[(10)]);
var inst_58742 = (inst_58740 < inst_58739);
var inst_58743 = inst_58742;
var state_58797__$1 = state_58797;
if(cljs.core.truth_(inst_58743)){
var statearr_58845_58910 = state_58797__$1;
(statearr_58845_58910[(1)] = (27));

} else {
var statearr_58846_58911 = state_58797__$1;
(statearr_58846_58911[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58798 === (34))){
var state_58797__$1 = state_58797;
var statearr_58847_58912 = state_58797__$1;
(statearr_58847_58912[(2)] = null);

(statearr_58847_58912[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58798 === (17))){
var state_58797__$1 = state_58797;
var statearr_58848_58913 = state_58797__$1;
(statearr_58848_58913[(2)] = null);

(statearr_58848_58913[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58798 === (3))){
var inst_58795 = (state_58797[(2)]);
var state_58797__$1 = state_58797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58797__$1,inst_58795);
} else {
if((state_val_58798 === (12))){
var inst_58724 = (state_58797[(2)]);
var state_58797__$1 = state_58797;
var statearr_58849_58914 = state_58797__$1;
(statearr_58849_58914[(2)] = inst_58724);

(statearr_58849_58914[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58798 === (2))){
var state_58797__$1 = state_58797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58797__$1,(4),ch);
} else {
if((state_val_58798 === (23))){
var state_58797__$1 = state_58797;
var statearr_58850_58915 = state_58797__$1;
(statearr_58850_58915[(2)] = null);

(statearr_58850_58915[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58798 === (35))){
var inst_58779 = (state_58797[(2)]);
var state_58797__$1 = state_58797;
var statearr_58851_58916 = state_58797__$1;
(statearr_58851_58916[(2)] = inst_58779);

(statearr_58851_58916[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58798 === (19))){
var inst_58696 = (state_58797[(7)]);
var inst_58700 = cljs.core.chunk_first.call(null,inst_58696);
var inst_58701 = cljs.core.chunk_rest.call(null,inst_58696);
var inst_58702 = cljs.core.count.call(null,inst_58700);
var inst_58674 = inst_58701;
var inst_58675 = inst_58700;
var inst_58676 = inst_58702;
var inst_58677 = (0);
var state_58797__$1 = (function (){var statearr_58852 = state_58797;
(statearr_58852[(14)] = inst_58677);

(statearr_58852[(15)] = inst_58676);

(statearr_58852[(16)] = inst_58675);

(statearr_58852[(17)] = inst_58674);

return statearr_58852;
})();
var statearr_58853_58917 = state_58797__$1;
(statearr_58853_58917[(2)] = null);

(statearr_58853_58917[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58798 === (11))){
var inst_58696 = (state_58797[(7)]);
var inst_58674 = (state_58797[(17)]);
var inst_58696__$1 = cljs.core.seq.call(null,inst_58674);
var state_58797__$1 = (function (){var statearr_58854 = state_58797;
(statearr_58854[(7)] = inst_58696__$1);

return statearr_58854;
})();
if(inst_58696__$1){
var statearr_58855_58918 = state_58797__$1;
(statearr_58855_58918[(1)] = (16));

} else {
var statearr_58856_58919 = state_58797__$1;
(statearr_58856_58919[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58798 === (9))){
var inst_58726 = (state_58797[(2)]);
var state_58797__$1 = state_58797;
var statearr_58857_58920 = state_58797__$1;
(statearr_58857_58920[(2)] = inst_58726);

(statearr_58857_58920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58798 === (5))){
var inst_58672 = cljs.core.deref.call(null,cs);
var inst_58673 = cljs.core.seq.call(null,inst_58672);
var inst_58674 = inst_58673;
var inst_58675 = null;
var inst_58676 = (0);
var inst_58677 = (0);
var state_58797__$1 = (function (){var statearr_58858 = state_58797;
(statearr_58858[(14)] = inst_58677);

(statearr_58858[(15)] = inst_58676);

(statearr_58858[(16)] = inst_58675);

(statearr_58858[(17)] = inst_58674);

return statearr_58858;
})();
var statearr_58859_58921 = state_58797__$1;
(statearr_58859_58921[(2)] = null);

(statearr_58859_58921[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58798 === (14))){
var state_58797__$1 = state_58797;
var statearr_58860_58922 = state_58797__$1;
(statearr_58860_58922[(2)] = null);

(statearr_58860_58922[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58798 === (45))){
var inst_58787 = (state_58797[(2)]);
var state_58797__$1 = state_58797;
var statearr_58861_58923 = state_58797__$1;
(statearr_58861_58923[(2)] = inst_58787);

(statearr_58861_58923[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58798 === (26))){
var inst_58729 = (state_58797[(29)]);
var inst_58783 = (state_58797[(2)]);
var inst_58784 = cljs.core.seq.call(null,inst_58729);
var state_58797__$1 = (function (){var statearr_58862 = state_58797;
(statearr_58862[(31)] = inst_58783);

return statearr_58862;
})();
if(inst_58784){
var statearr_58863_58924 = state_58797__$1;
(statearr_58863_58924[(1)] = (42));

} else {
var statearr_58864_58925 = state_58797__$1;
(statearr_58864_58925[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58798 === (16))){
var inst_58696 = (state_58797[(7)]);
var inst_58698 = cljs.core.chunked_seq_QMARK_.call(null,inst_58696);
var state_58797__$1 = state_58797;
if(inst_58698){
var statearr_58865_58926 = state_58797__$1;
(statearr_58865_58926[(1)] = (19));

} else {
var statearr_58866_58927 = state_58797__$1;
(statearr_58866_58927[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58798 === (38))){
var inst_58776 = (state_58797[(2)]);
var state_58797__$1 = state_58797;
var statearr_58867_58928 = state_58797__$1;
(statearr_58867_58928[(2)] = inst_58776);

(statearr_58867_58928[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58798 === (30))){
var state_58797__$1 = state_58797;
var statearr_58868_58929 = state_58797__$1;
(statearr_58868_58929[(2)] = null);

(statearr_58868_58929[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58798 === (10))){
var inst_58677 = (state_58797[(14)]);
var inst_58675 = (state_58797[(16)]);
var inst_58685 = cljs.core._nth.call(null,inst_58675,inst_58677);
var inst_58686 = cljs.core.nth.call(null,inst_58685,(0),null);
var inst_58687 = cljs.core.nth.call(null,inst_58685,(1),null);
var state_58797__$1 = (function (){var statearr_58869 = state_58797;
(statearr_58869[(26)] = inst_58686);

return statearr_58869;
})();
if(cljs.core.truth_(inst_58687)){
var statearr_58870_58930 = state_58797__$1;
(statearr_58870_58930[(1)] = (13));

} else {
var statearr_58871_58931 = state_58797__$1;
(statearr_58871_58931[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58798 === (18))){
var inst_58722 = (state_58797[(2)]);
var state_58797__$1 = state_58797;
var statearr_58872_58932 = state_58797__$1;
(statearr_58872_58932[(2)] = inst_58722);

(statearr_58872_58932[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58798 === (42))){
var state_58797__$1 = state_58797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58797__$1,(45),dchan);
} else {
if((state_val_58798 === (37))){
var inst_58665 = (state_58797[(9)]);
var inst_58756 = (state_58797[(25)]);
var inst_58765 = (state_58797[(23)]);
var inst_58765__$1 = cljs.core.first.call(null,inst_58756);
var inst_58766 = cljs.core.async.put_BANG_.call(null,inst_58765__$1,inst_58665,done);
var state_58797__$1 = (function (){var statearr_58873 = state_58797;
(statearr_58873[(23)] = inst_58765__$1);

return statearr_58873;
})();
if(cljs.core.truth_(inst_58766)){
var statearr_58874_58933 = state_58797__$1;
(statearr_58874_58933[(1)] = (39));

} else {
var statearr_58875_58934 = state_58797__$1;
(statearr_58875_58934[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58798 === (8))){
var inst_58677 = (state_58797[(14)]);
var inst_58676 = (state_58797[(15)]);
var inst_58679 = (inst_58677 < inst_58676);
var inst_58680 = inst_58679;
var state_58797__$1 = state_58797;
if(cljs.core.truth_(inst_58680)){
var statearr_58876_58935 = state_58797__$1;
(statearr_58876_58935[(1)] = (10));

} else {
var statearr_58877_58936 = state_58797__$1;
(statearr_58877_58936[(1)] = (11));

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
});})(c__58063__auto___58882,cs,m,dchan,dctr,done))
;
return ((function (switch__57973__auto__,c__58063__auto___58882,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__57974__auto__ = null;
var cljs$core$async$mult_$_state_machine__57974__auto____0 = (function (){
var statearr_58878 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58878[(0)] = cljs$core$async$mult_$_state_machine__57974__auto__);

(statearr_58878[(1)] = (1));

return statearr_58878;
});
var cljs$core$async$mult_$_state_machine__57974__auto____1 = (function (state_58797){
while(true){
var ret_value__57975__auto__ = (function (){try{while(true){
var result__57976__auto__ = switch__57973__auto__.call(null,state_58797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57976__auto__;
}
break;
}
}catch (e58879){if((e58879 instanceof Object)){
var ex__57977__auto__ = e58879;
var statearr_58880_58937 = state_58797;
(statearr_58880_58937[(5)] = ex__57977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58938 = state_58797;
state_58797 = G__58938;
continue;
} else {
return ret_value__57975__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__57974__auto__ = function(state_58797){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__57974__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__57974__auto____1.call(this,state_58797);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__57974__auto____0;
cljs$core$async$mult_$_state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__57974__auto____1;
return cljs$core$async$mult_$_state_machine__57974__auto__;
})()
;})(switch__57973__auto__,c__58063__auto___58882,cs,m,dchan,dctr,done))
})();
var state__58065__auto__ = (function (){var statearr_58881 = f__58064__auto__.call(null);
(statearr_58881[(6)] = c__58063__auto___58882);

return statearr_58881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58065__auto__);
});})(c__58063__auto___58882,cs,m,dchan,dctr,done))
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
var G__58940 = arguments.length;
switch (G__58940) {
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
var x__53703__auto__ = (((m == null))?null:m);
var m__53704__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__53703__auto__)]);
if(!((m__53704__auto__ == null))){
return m__53704__auto__.call(null,m,ch);
} else {
var m__53704__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__53704__auto____$1 == null))){
return m__53704__auto____$1.call(null,m,ch);
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
var x__53703__auto__ = (((m == null))?null:m);
var m__53704__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__53703__auto__)]);
if(!((m__53704__auto__ == null))){
return m__53704__auto__.call(null,m,ch);
} else {
var m__53704__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__53704__auto____$1 == null))){
return m__53704__auto____$1.call(null,m,ch);
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
var x__53703__auto__ = (((m == null))?null:m);
var m__53704__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__53703__auto__)]);
if(!((m__53704__auto__ == null))){
return m__53704__auto__.call(null,m);
} else {
var m__53704__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__53704__auto____$1 == null))){
return m__53704__auto____$1.call(null,m);
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
var x__53703__auto__ = (((m == null))?null:m);
var m__53704__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__53703__auto__)]);
if(!((m__53704__auto__ == null))){
return m__53704__auto__.call(null,m,state_map);
} else {
var m__53704__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__53704__auto____$1 == null))){
return m__53704__auto____$1.call(null,m,state_map);
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
var x__53703__auto__ = (((m == null))?null:m);
var m__53704__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__53703__auto__)]);
if(!((m__53704__auto__ == null))){
return m__53704__auto__.call(null,m,mode);
} else {
var m__53704__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__53704__auto____$1 == null))){
return m__53704__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__54254__auto__ = [];
var len__54247__auto___58952 = arguments.length;
var i__54248__auto___58953 = (0);
while(true){
if((i__54248__auto___58953 < len__54247__auto___58952)){
args__54254__auto__.push((arguments[i__54248__auto___58953]));

var G__58954 = (i__54248__auto___58953 + (1));
i__54248__auto___58953 = G__58954;
continue;
} else {
}
break;
}

var argseq__54255__auto__ = ((((3) < args__54254__auto__.length))?(new cljs.core.IndexedSeq(args__54254__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__54255__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__58946){
var map__58947 = p__58946;
var map__58947__$1 = ((((!((map__58947 == null)))?((((map__58947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58947.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58947):map__58947);
var opts = map__58947__$1;
var statearr_58949_58955 = state;
(statearr_58949_58955[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__58947,map__58947__$1,opts){
return (function (val){
var statearr_58950_58956 = state;
(statearr_58950_58956[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__58947,map__58947__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_58951_58957 = state;
(statearr_58951_58957[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq58942){
var G__58943 = cljs.core.first.call(null,seq58942);
var seq58942__$1 = cljs.core.next.call(null,seq58942);
var G__58944 = cljs.core.first.call(null,seq58942__$1);
var seq58942__$2 = cljs.core.next.call(null,seq58942__$1);
var G__58945 = cljs.core.first.call(null,seq58942__$2);
var seq58942__$3 = cljs.core.next.call(null,seq58942__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__58943,G__58944,G__58945,seq58942__$3);
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
if(typeof cljs.core.async.t_cljs$core$async58958 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58958 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta58959){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta58959 = meta58959;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async58958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_58960,meta58959__$1){
var self__ = this;
var _58960__$1 = this;
return (new cljs.core.async.t_cljs$core$async58958(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta58959__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async58958.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_58960){
var self__ = this;
var _58960__$1 = this;
return self__.meta58959;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async58958.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58958.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async58958.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async58958.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async58958.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async58958.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async58958.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async58958.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async58958.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta58959","meta58959",528648779,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async58958.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async58958.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58958";

cljs.core.async.t_cljs$core$async58958.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__53641__auto__,writer__53642__auto__,opt__53643__auto__){
return cljs.core._write.call(null,writer__53642__auto__,"cljs.core.async/t_cljs$core$async58958");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async58958 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async58958(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta58959){
return (new cljs.core.async.t_cljs$core$async58958(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta58959));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async58958(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__58063__auto___59122 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58063__auto___59122,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__58064__auto__ = (function (){var switch__57973__auto__ = ((function (c__58063__auto___59122,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_59062){
var state_val_59063 = (state_59062[(1)]);
if((state_val_59063 === (7))){
var inst_58977 = (state_59062[(2)]);
var state_59062__$1 = state_59062;
var statearr_59064_59123 = state_59062__$1;
(statearr_59064_59123[(2)] = inst_58977);

(statearr_59064_59123[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59063 === (20))){
var inst_58989 = (state_59062[(7)]);
var state_59062__$1 = state_59062;
var statearr_59065_59124 = state_59062__$1;
(statearr_59065_59124[(2)] = inst_58989);

(statearr_59065_59124[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59063 === (27))){
var state_59062__$1 = state_59062;
var statearr_59066_59125 = state_59062__$1;
(statearr_59066_59125[(2)] = null);

(statearr_59066_59125[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59063 === (1))){
var inst_58964 = (state_59062[(8)]);
var inst_58964__$1 = calc_state.call(null);
var inst_58966 = (inst_58964__$1 == null);
var inst_58967 = cljs.core.not.call(null,inst_58966);
var state_59062__$1 = (function (){var statearr_59067 = state_59062;
(statearr_59067[(8)] = inst_58964__$1);

return statearr_59067;
})();
if(inst_58967){
var statearr_59068_59126 = state_59062__$1;
(statearr_59068_59126[(1)] = (2));

} else {
var statearr_59069_59127 = state_59062__$1;
(statearr_59069_59127[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59063 === (24))){
var inst_59036 = (state_59062[(9)]);
var inst_59022 = (state_59062[(10)]);
var inst_59013 = (state_59062[(11)]);
var inst_59036__$1 = inst_59013.call(null,inst_59022);
var state_59062__$1 = (function (){var statearr_59070 = state_59062;
(statearr_59070[(9)] = inst_59036__$1);

return statearr_59070;
})();
if(cljs.core.truth_(inst_59036__$1)){
var statearr_59071_59128 = state_59062__$1;
(statearr_59071_59128[(1)] = (29));

} else {
var statearr_59072_59129 = state_59062__$1;
(statearr_59072_59129[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59063 === (4))){
var inst_58980 = (state_59062[(2)]);
var state_59062__$1 = state_59062;
if(cljs.core.truth_(inst_58980)){
var statearr_59073_59130 = state_59062__$1;
(statearr_59073_59130[(1)] = (8));

} else {
var statearr_59074_59131 = state_59062__$1;
(statearr_59074_59131[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59063 === (15))){
var inst_59007 = (state_59062[(2)]);
var state_59062__$1 = state_59062;
if(cljs.core.truth_(inst_59007)){
var statearr_59075_59132 = state_59062__$1;
(statearr_59075_59132[(1)] = (19));

} else {
var statearr_59076_59133 = state_59062__$1;
(statearr_59076_59133[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59063 === (21))){
var inst_59012 = (state_59062[(12)]);
var inst_59012__$1 = (state_59062[(2)]);
var inst_59013 = cljs.core.get.call(null,inst_59012__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_59014 = cljs.core.get.call(null,inst_59012__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_59015 = cljs.core.get.call(null,inst_59012__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_59062__$1 = (function (){var statearr_59077 = state_59062;
(statearr_59077[(13)] = inst_59014);

(statearr_59077[(11)] = inst_59013);

(statearr_59077[(12)] = inst_59012__$1);

return statearr_59077;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_59062__$1,(22),inst_59015);
} else {
if((state_val_59063 === (31))){
var inst_59044 = (state_59062[(2)]);
var state_59062__$1 = state_59062;
if(cljs.core.truth_(inst_59044)){
var statearr_59078_59134 = state_59062__$1;
(statearr_59078_59134[(1)] = (32));

} else {
var statearr_59079_59135 = state_59062__$1;
(statearr_59079_59135[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59063 === (32))){
var inst_59021 = (state_59062[(14)]);
var state_59062__$1 = state_59062;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59062__$1,(35),out,inst_59021);
} else {
if((state_val_59063 === (33))){
var inst_59012 = (state_59062[(12)]);
var inst_58989 = inst_59012;
var state_59062__$1 = (function (){var statearr_59080 = state_59062;
(statearr_59080[(7)] = inst_58989);

return statearr_59080;
})();
var statearr_59081_59136 = state_59062__$1;
(statearr_59081_59136[(2)] = null);

(statearr_59081_59136[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59063 === (13))){
var inst_58989 = (state_59062[(7)]);
var inst_58996 = inst_58989.cljs$lang$protocol_mask$partition0$;
var inst_58997 = (inst_58996 & (64));
var inst_58998 = inst_58989.cljs$core$ISeq$;
var inst_58999 = (cljs.core.PROTOCOL_SENTINEL === inst_58998);
var inst_59000 = (inst_58997) || (inst_58999);
var state_59062__$1 = state_59062;
if(cljs.core.truth_(inst_59000)){
var statearr_59082_59137 = state_59062__$1;
(statearr_59082_59137[(1)] = (16));

} else {
var statearr_59083_59138 = state_59062__$1;
(statearr_59083_59138[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59063 === (22))){
var inst_59021 = (state_59062[(14)]);
var inst_59022 = (state_59062[(10)]);
var inst_59020 = (state_59062[(2)]);
var inst_59021__$1 = cljs.core.nth.call(null,inst_59020,(0),null);
var inst_59022__$1 = cljs.core.nth.call(null,inst_59020,(1),null);
var inst_59023 = (inst_59021__$1 == null);
var inst_59024 = cljs.core._EQ_.call(null,inst_59022__$1,change);
var inst_59025 = (inst_59023) || (inst_59024);
var state_59062__$1 = (function (){var statearr_59084 = state_59062;
(statearr_59084[(14)] = inst_59021__$1);

(statearr_59084[(10)] = inst_59022__$1);

return statearr_59084;
})();
if(cljs.core.truth_(inst_59025)){
var statearr_59085_59139 = state_59062__$1;
(statearr_59085_59139[(1)] = (23));

} else {
var statearr_59086_59140 = state_59062__$1;
(statearr_59086_59140[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59063 === (36))){
var inst_59012 = (state_59062[(12)]);
var inst_58989 = inst_59012;
var state_59062__$1 = (function (){var statearr_59087 = state_59062;
(statearr_59087[(7)] = inst_58989);

return statearr_59087;
})();
var statearr_59088_59141 = state_59062__$1;
(statearr_59088_59141[(2)] = null);

(statearr_59088_59141[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59063 === (29))){
var inst_59036 = (state_59062[(9)]);
var state_59062__$1 = state_59062;
var statearr_59089_59142 = state_59062__$1;
(statearr_59089_59142[(2)] = inst_59036);

(statearr_59089_59142[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59063 === (6))){
var state_59062__$1 = state_59062;
var statearr_59090_59143 = state_59062__$1;
(statearr_59090_59143[(2)] = false);

(statearr_59090_59143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59063 === (28))){
var inst_59032 = (state_59062[(2)]);
var inst_59033 = calc_state.call(null);
var inst_58989 = inst_59033;
var state_59062__$1 = (function (){var statearr_59091 = state_59062;
(statearr_59091[(7)] = inst_58989);

(statearr_59091[(15)] = inst_59032);

return statearr_59091;
})();
var statearr_59092_59144 = state_59062__$1;
(statearr_59092_59144[(2)] = null);

(statearr_59092_59144[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59063 === (25))){
var inst_59058 = (state_59062[(2)]);
var state_59062__$1 = state_59062;
var statearr_59093_59145 = state_59062__$1;
(statearr_59093_59145[(2)] = inst_59058);

(statearr_59093_59145[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59063 === (34))){
var inst_59056 = (state_59062[(2)]);
var state_59062__$1 = state_59062;
var statearr_59094_59146 = state_59062__$1;
(statearr_59094_59146[(2)] = inst_59056);

(statearr_59094_59146[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59063 === (17))){
var state_59062__$1 = state_59062;
var statearr_59095_59147 = state_59062__$1;
(statearr_59095_59147[(2)] = false);

(statearr_59095_59147[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59063 === (3))){
var state_59062__$1 = state_59062;
var statearr_59096_59148 = state_59062__$1;
(statearr_59096_59148[(2)] = false);

(statearr_59096_59148[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59063 === (12))){
var inst_59060 = (state_59062[(2)]);
var state_59062__$1 = state_59062;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59062__$1,inst_59060);
} else {
if((state_val_59063 === (2))){
var inst_58964 = (state_59062[(8)]);
var inst_58969 = inst_58964.cljs$lang$protocol_mask$partition0$;
var inst_58970 = (inst_58969 & (64));
var inst_58971 = inst_58964.cljs$core$ISeq$;
var inst_58972 = (cljs.core.PROTOCOL_SENTINEL === inst_58971);
var inst_58973 = (inst_58970) || (inst_58972);
var state_59062__$1 = state_59062;
if(cljs.core.truth_(inst_58973)){
var statearr_59097_59149 = state_59062__$1;
(statearr_59097_59149[(1)] = (5));

} else {
var statearr_59098_59150 = state_59062__$1;
(statearr_59098_59150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59063 === (23))){
var inst_59021 = (state_59062[(14)]);
var inst_59027 = (inst_59021 == null);
var state_59062__$1 = state_59062;
if(cljs.core.truth_(inst_59027)){
var statearr_59099_59151 = state_59062__$1;
(statearr_59099_59151[(1)] = (26));

} else {
var statearr_59100_59152 = state_59062__$1;
(statearr_59100_59152[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59063 === (35))){
var inst_59047 = (state_59062[(2)]);
var state_59062__$1 = state_59062;
if(cljs.core.truth_(inst_59047)){
var statearr_59101_59153 = state_59062__$1;
(statearr_59101_59153[(1)] = (36));

} else {
var statearr_59102_59154 = state_59062__$1;
(statearr_59102_59154[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59063 === (19))){
var inst_58989 = (state_59062[(7)]);
var inst_59009 = cljs.core.apply.call(null,cljs.core.hash_map,inst_58989);
var state_59062__$1 = state_59062;
var statearr_59103_59155 = state_59062__$1;
(statearr_59103_59155[(2)] = inst_59009);

(statearr_59103_59155[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59063 === (11))){
var inst_58989 = (state_59062[(7)]);
var inst_58993 = (inst_58989 == null);
var inst_58994 = cljs.core.not.call(null,inst_58993);
var state_59062__$1 = state_59062;
if(inst_58994){
var statearr_59104_59156 = state_59062__$1;
(statearr_59104_59156[(1)] = (13));

} else {
var statearr_59105_59157 = state_59062__$1;
(statearr_59105_59157[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59063 === (9))){
var inst_58964 = (state_59062[(8)]);
var state_59062__$1 = state_59062;
var statearr_59106_59158 = state_59062__$1;
(statearr_59106_59158[(2)] = inst_58964);

(statearr_59106_59158[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59063 === (5))){
var state_59062__$1 = state_59062;
var statearr_59107_59159 = state_59062__$1;
(statearr_59107_59159[(2)] = true);

(statearr_59107_59159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59063 === (14))){
var state_59062__$1 = state_59062;
var statearr_59108_59160 = state_59062__$1;
(statearr_59108_59160[(2)] = false);

(statearr_59108_59160[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59063 === (26))){
var inst_59022 = (state_59062[(10)]);
var inst_59029 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_59022);
var state_59062__$1 = state_59062;
var statearr_59109_59161 = state_59062__$1;
(statearr_59109_59161[(2)] = inst_59029);

(statearr_59109_59161[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59063 === (16))){
var state_59062__$1 = state_59062;
var statearr_59110_59162 = state_59062__$1;
(statearr_59110_59162[(2)] = true);

(statearr_59110_59162[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59063 === (38))){
var inst_59052 = (state_59062[(2)]);
var state_59062__$1 = state_59062;
var statearr_59111_59163 = state_59062__$1;
(statearr_59111_59163[(2)] = inst_59052);

(statearr_59111_59163[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59063 === (30))){
var inst_59014 = (state_59062[(13)]);
var inst_59022 = (state_59062[(10)]);
var inst_59013 = (state_59062[(11)]);
var inst_59039 = cljs.core.empty_QMARK_.call(null,inst_59013);
var inst_59040 = inst_59014.call(null,inst_59022);
var inst_59041 = cljs.core.not.call(null,inst_59040);
var inst_59042 = (inst_59039) && (inst_59041);
var state_59062__$1 = state_59062;
var statearr_59112_59164 = state_59062__$1;
(statearr_59112_59164[(2)] = inst_59042);

(statearr_59112_59164[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59063 === (10))){
var inst_58964 = (state_59062[(8)]);
var inst_58985 = (state_59062[(2)]);
var inst_58986 = cljs.core.get.call(null,inst_58985,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_58987 = cljs.core.get.call(null,inst_58985,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_58988 = cljs.core.get.call(null,inst_58985,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_58989 = inst_58964;
var state_59062__$1 = (function (){var statearr_59113 = state_59062;
(statearr_59113[(7)] = inst_58989);

(statearr_59113[(16)] = inst_58986);

(statearr_59113[(17)] = inst_58988);

(statearr_59113[(18)] = inst_58987);

return statearr_59113;
})();
var statearr_59114_59165 = state_59062__$1;
(statearr_59114_59165[(2)] = null);

(statearr_59114_59165[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59063 === (18))){
var inst_59004 = (state_59062[(2)]);
var state_59062__$1 = state_59062;
var statearr_59115_59166 = state_59062__$1;
(statearr_59115_59166[(2)] = inst_59004);

(statearr_59115_59166[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59063 === (37))){
var state_59062__$1 = state_59062;
var statearr_59116_59167 = state_59062__$1;
(statearr_59116_59167[(2)] = null);

(statearr_59116_59167[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59063 === (8))){
var inst_58964 = (state_59062[(8)]);
var inst_58982 = cljs.core.apply.call(null,cljs.core.hash_map,inst_58964);
var state_59062__$1 = state_59062;
var statearr_59117_59168 = state_59062__$1;
(statearr_59117_59168[(2)] = inst_58982);

(statearr_59117_59168[(1)] = (10));


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
});})(c__58063__auto___59122,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__57973__auto__,c__58063__auto___59122,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__57974__auto__ = null;
var cljs$core$async$mix_$_state_machine__57974__auto____0 = (function (){
var statearr_59118 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59118[(0)] = cljs$core$async$mix_$_state_machine__57974__auto__);

(statearr_59118[(1)] = (1));

return statearr_59118;
});
var cljs$core$async$mix_$_state_machine__57974__auto____1 = (function (state_59062){
while(true){
var ret_value__57975__auto__ = (function (){try{while(true){
var result__57976__auto__ = switch__57973__auto__.call(null,state_59062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57976__auto__;
}
break;
}
}catch (e59119){if((e59119 instanceof Object)){
var ex__57977__auto__ = e59119;
var statearr_59120_59169 = state_59062;
(statearr_59120_59169[(5)] = ex__57977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59119;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59170 = state_59062;
state_59062 = G__59170;
continue;
} else {
return ret_value__57975__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__57974__auto__ = function(state_59062){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__57974__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__57974__auto____1.call(this,state_59062);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__57974__auto____0;
cljs$core$async$mix_$_state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__57974__auto____1;
return cljs$core$async$mix_$_state_machine__57974__auto__;
})()
;})(switch__57973__auto__,c__58063__auto___59122,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__58065__auto__ = (function (){var statearr_59121 = f__58064__auto__.call(null);
(statearr_59121[(6)] = c__58063__auto___59122);

return statearr_59121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58065__auto__);
});})(c__58063__auto___59122,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__53703__auto__ = (((p == null))?null:p);
var m__53704__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__53703__auto__)]);
if(!((m__53704__auto__ == null))){
return m__53704__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__53704__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__53704__auto____$1 == null))){
return m__53704__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__53703__auto__ = (((p == null))?null:p);
var m__53704__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__53703__auto__)]);
if(!((m__53704__auto__ == null))){
return m__53704__auto__.call(null,p,v,ch);
} else {
var m__53704__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__53704__auto____$1 == null))){
return m__53704__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__59172 = arguments.length;
switch (G__59172) {
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
var x__53703__auto__ = (((p == null))?null:p);
var m__53704__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__53703__auto__)]);
if(!((m__53704__auto__ == null))){
return m__53704__auto__.call(null,p);
} else {
var m__53704__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__53704__auto____$1 == null))){
return m__53704__auto____$1.call(null,p);
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
var x__53703__auto__ = (((p == null))?null:p);
var m__53704__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__53703__auto__)]);
if(!((m__53704__auto__ == null))){
return m__53704__auto__.call(null,p,v);
} else {
var m__53704__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__53704__auto____$1 == null))){
return m__53704__auto____$1.call(null,p,v);
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
var G__59176 = arguments.length;
switch (G__59176) {
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
var or__52970__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__52970__auto__)){
return or__52970__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__52970__auto__,mults){
return (function (p1__59174_SHARP_){
if(cljs.core.truth_(p1__59174_SHARP_.call(null,topic))){
return p1__59174_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__59174_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__52970__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async59177 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59177 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta59178){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta59178 = meta59178;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async59177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_59179,meta59178__$1){
var self__ = this;
var _59179__$1 = this;
return (new cljs.core.async.t_cljs$core$async59177(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta59178__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async59177.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_59179){
var self__ = this;
var _59179__$1 = this;
return self__.meta59178;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async59177.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59177.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async59177.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59177.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async59177.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async59177.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async59177.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async59177.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta59178","meta59178",-1386540626,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async59177.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async59177.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59177";

cljs.core.async.t_cljs$core$async59177.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__53641__auto__,writer__53642__auto__,opt__53643__auto__){
return cljs.core._write.call(null,writer__53642__auto__,"cljs.core.async/t_cljs$core$async59177");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async59177 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async59177(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta59178){
return (new cljs.core.async.t_cljs$core$async59177(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta59178));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async59177(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__58063__auto___59297 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58063__auto___59297,mults,ensure_mult,p){
return (function (){
var f__58064__auto__ = (function (){var switch__57973__auto__ = ((function (c__58063__auto___59297,mults,ensure_mult,p){
return (function (state_59251){
var state_val_59252 = (state_59251[(1)]);
if((state_val_59252 === (7))){
var inst_59247 = (state_59251[(2)]);
var state_59251__$1 = state_59251;
var statearr_59253_59298 = state_59251__$1;
(statearr_59253_59298[(2)] = inst_59247);

(statearr_59253_59298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59252 === (20))){
var state_59251__$1 = state_59251;
var statearr_59254_59299 = state_59251__$1;
(statearr_59254_59299[(2)] = null);

(statearr_59254_59299[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59252 === (1))){
var state_59251__$1 = state_59251;
var statearr_59255_59300 = state_59251__$1;
(statearr_59255_59300[(2)] = null);

(statearr_59255_59300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59252 === (24))){
var inst_59230 = (state_59251[(7)]);
var inst_59239 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_59230);
var state_59251__$1 = state_59251;
var statearr_59256_59301 = state_59251__$1;
(statearr_59256_59301[(2)] = inst_59239);

(statearr_59256_59301[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59252 === (4))){
var inst_59182 = (state_59251[(8)]);
var inst_59182__$1 = (state_59251[(2)]);
var inst_59183 = (inst_59182__$1 == null);
var state_59251__$1 = (function (){var statearr_59257 = state_59251;
(statearr_59257[(8)] = inst_59182__$1);

return statearr_59257;
})();
if(cljs.core.truth_(inst_59183)){
var statearr_59258_59302 = state_59251__$1;
(statearr_59258_59302[(1)] = (5));

} else {
var statearr_59259_59303 = state_59251__$1;
(statearr_59259_59303[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59252 === (15))){
var inst_59224 = (state_59251[(2)]);
var state_59251__$1 = state_59251;
var statearr_59260_59304 = state_59251__$1;
(statearr_59260_59304[(2)] = inst_59224);

(statearr_59260_59304[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59252 === (21))){
var inst_59244 = (state_59251[(2)]);
var state_59251__$1 = (function (){var statearr_59261 = state_59251;
(statearr_59261[(9)] = inst_59244);

return statearr_59261;
})();
var statearr_59262_59305 = state_59251__$1;
(statearr_59262_59305[(2)] = null);

(statearr_59262_59305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59252 === (13))){
var inst_59206 = (state_59251[(10)]);
var inst_59208 = cljs.core.chunked_seq_QMARK_.call(null,inst_59206);
var state_59251__$1 = state_59251;
if(inst_59208){
var statearr_59263_59306 = state_59251__$1;
(statearr_59263_59306[(1)] = (16));

} else {
var statearr_59264_59307 = state_59251__$1;
(statearr_59264_59307[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59252 === (22))){
var inst_59236 = (state_59251[(2)]);
var state_59251__$1 = state_59251;
if(cljs.core.truth_(inst_59236)){
var statearr_59265_59308 = state_59251__$1;
(statearr_59265_59308[(1)] = (23));

} else {
var statearr_59266_59309 = state_59251__$1;
(statearr_59266_59309[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59252 === (6))){
var inst_59232 = (state_59251[(11)]);
var inst_59230 = (state_59251[(7)]);
var inst_59182 = (state_59251[(8)]);
var inst_59230__$1 = topic_fn.call(null,inst_59182);
var inst_59231 = cljs.core.deref.call(null,mults);
var inst_59232__$1 = cljs.core.get.call(null,inst_59231,inst_59230__$1);
var state_59251__$1 = (function (){var statearr_59267 = state_59251;
(statearr_59267[(11)] = inst_59232__$1);

(statearr_59267[(7)] = inst_59230__$1);

return statearr_59267;
})();
if(cljs.core.truth_(inst_59232__$1)){
var statearr_59268_59310 = state_59251__$1;
(statearr_59268_59310[(1)] = (19));

} else {
var statearr_59269_59311 = state_59251__$1;
(statearr_59269_59311[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59252 === (25))){
var inst_59241 = (state_59251[(2)]);
var state_59251__$1 = state_59251;
var statearr_59270_59312 = state_59251__$1;
(statearr_59270_59312[(2)] = inst_59241);

(statearr_59270_59312[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59252 === (17))){
var inst_59206 = (state_59251[(10)]);
var inst_59215 = cljs.core.first.call(null,inst_59206);
var inst_59216 = cljs.core.async.muxch_STAR_.call(null,inst_59215);
var inst_59217 = cljs.core.async.close_BANG_.call(null,inst_59216);
var inst_59218 = cljs.core.next.call(null,inst_59206);
var inst_59192 = inst_59218;
var inst_59193 = null;
var inst_59194 = (0);
var inst_59195 = (0);
var state_59251__$1 = (function (){var statearr_59271 = state_59251;
(statearr_59271[(12)] = inst_59193);

(statearr_59271[(13)] = inst_59217);

(statearr_59271[(14)] = inst_59192);

(statearr_59271[(15)] = inst_59194);

(statearr_59271[(16)] = inst_59195);

return statearr_59271;
})();
var statearr_59272_59313 = state_59251__$1;
(statearr_59272_59313[(2)] = null);

(statearr_59272_59313[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59252 === (3))){
var inst_59249 = (state_59251[(2)]);
var state_59251__$1 = state_59251;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59251__$1,inst_59249);
} else {
if((state_val_59252 === (12))){
var inst_59226 = (state_59251[(2)]);
var state_59251__$1 = state_59251;
var statearr_59273_59314 = state_59251__$1;
(statearr_59273_59314[(2)] = inst_59226);

(statearr_59273_59314[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59252 === (2))){
var state_59251__$1 = state_59251;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59251__$1,(4),ch);
} else {
if((state_val_59252 === (23))){
var state_59251__$1 = state_59251;
var statearr_59274_59315 = state_59251__$1;
(statearr_59274_59315[(2)] = null);

(statearr_59274_59315[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59252 === (19))){
var inst_59232 = (state_59251[(11)]);
var inst_59182 = (state_59251[(8)]);
var inst_59234 = cljs.core.async.muxch_STAR_.call(null,inst_59232);
var state_59251__$1 = state_59251;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59251__$1,(22),inst_59234,inst_59182);
} else {
if((state_val_59252 === (11))){
var inst_59206 = (state_59251[(10)]);
var inst_59192 = (state_59251[(14)]);
var inst_59206__$1 = cljs.core.seq.call(null,inst_59192);
var state_59251__$1 = (function (){var statearr_59275 = state_59251;
(statearr_59275[(10)] = inst_59206__$1);

return statearr_59275;
})();
if(inst_59206__$1){
var statearr_59276_59316 = state_59251__$1;
(statearr_59276_59316[(1)] = (13));

} else {
var statearr_59277_59317 = state_59251__$1;
(statearr_59277_59317[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59252 === (9))){
var inst_59228 = (state_59251[(2)]);
var state_59251__$1 = state_59251;
var statearr_59278_59318 = state_59251__$1;
(statearr_59278_59318[(2)] = inst_59228);

(statearr_59278_59318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59252 === (5))){
var inst_59189 = cljs.core.deref.call(null,mults);
var inst_59190 = cljs.core.vals.call(null,inst_59189);
var inst_59191 = cljs.core.seq.call(null,inst_59190);
var inst_59192 = inst_59191;
var inst_59193 = null;
var inst_59194 = (0);
var inst_59195 = (0);
var state_59251__$1 = (function (){var statearr_59279 = state_59251;
(statearr_59279[(12)] = inst_59193);

(statearr_59279[(14)] = inst_59192);

(statearr_59279[(15)] = inst_59194);

(statearr_59279[(16)] = inst_59195);

return statearr_59279;
})();
var statearr_59280_59319 = state_59251__$1;
(statearr_59280_59319[(2)] = null);

(statearr_59280_59319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59252 === (14))){
var state_59251__$1 = state_59251;
var statearr_59284_59320 = state_59251__$1;
(statearr_59284_59320[(2)] = null);

(statearr_59284_59320[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59252 === (16))){
var inst_59206 = (state_59251[(10)]);
var inst_59210 = cljs.core.chunk_first.call(null,inst_59206);
var inst_59211 = cljs.core.chunk_rest.call(null,inst_59206);
var inst_59212 = cljs.core.count.call(null,inst_59210);
var inst_59192 = inst_59211;
var inst_59193 = inst_59210;
var inst_59194 = inst_59212;
var inst_59195 = (0);
var state_59251__$1 = (function (){var statearr_59285 = state_59251;
(statearr_59285[(12)] = inst_59193);

(statearr_59285[(14)] = inst_59192);

(statearr_59285[(15)] = inst_59194);

(statearr_59285[(16)] = inst_59195);

return statearr_59285;
})();
var statearr_59286_59321 = state_59251__$1;
(statearr_59286_59321[(2)] = null);

(statearr_59286_59321[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59252 === (10))){
var inst_59193 = (state_59251[(12)]);
var inst_59192 = (state_59251[(14)]);
var inst_59194 = (state_59251[(15)]);
var inst_59195 = (state_59251[(16)]);
var inst_59200 = cljs.core._nth.call(null,inst_59193,inst_59195);
var inst_59201 = cljs.core.async.muxch_STAR_.call(null,inst_59200);
var inst_59202 = cljs.core.async.close_BANG_.call(null,inst_59201);
var inst_59203 = (inst_59195 + (1));
var tmp59281 = inst_59193;
var tmp59282 = inst_59192;
var tmp59283 = inst_59194;
var inst_59192__$1 = tmp59282;
var inst_59193__$1 = tmp59281;
var inst_59194__$1 = tmp59283;
var inst_59195__$1 = inst_59203;
var state_59251__$1 = (function (){var statearr_59287 = state_59251;
(statearr_59287[(12)] = inst_59193__$1);

(statearr_59287[(17)] = inst_59202);

(statearr_59287[(14)] = inst_59192__$1);

(statearr_59287[(15)] = inst_59194__$1);

(statearr_59287[(16)] = inst_59195__$1);

return statearr_59287;
})();
var statearr_59288_59322 = state_59251__$1;
(statearr_59288_59322[(2)] = null);

(statearr_59288_59322[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59252 === (18))){
var inst_59221 = (state_59251[(2)]);
var state_59251__$1 = state_59251;
var statearr_59289_59323 = state_59251__$1;
(statearr_59289_59323[(2)] = inst_59221);

(statearr_59289_59323[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59252 === (8))){
var inst_59194 = (state_59251[(15)]);
var inst_59195 = (state_59251[(16)]);
var inst_59197 = (inst_59195 < inst_59194);
var inst_59198 = inst_59197;
var state_59251__$1 = state_59251;
if(cljs.core.truth_(inst_59198)){
var statearr_59290_59324 = state_59251__$1;
(statearr_59290_59324[(1)] = (10));

} else {
var statearr_59291_59325 = state_59251__$1;
(statearr_59291_59325[(1)] = (11));

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
});})(c__58063__auto___59297,mults,ensure_mult,p))
;
return ((function (switch__57973__auto__,c__58063__auto___59297,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__57974__auto__ = null;
var cljs$core$async$state_machine__57974__auto____0 = (function (){
var statearr_59292 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59292[(0)] = cljs$core$async$state_machine__57974__auto__);

(statearr_59292[(1)] = (1));

return statearr_59292;
});
var cljs$core$async$state_machine__57974__auto____1 = (function (state_59251){
while(true){
var ret_value__57975__auto__ = (function (){try{while(true){
var result__57976__auto__ = switch__57973__auto__.call(null,state_59251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57976__auto__;
}
break;
}
}catch (e59293){if((e59293 instanceof Object)){
var ex__57977__auto__ = e59293;
var statearr_59294_59326 = state_59251;
(statearr_59294_59326[(5)] = ex__57977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59327 = state_59251;
state_59251 = G__59327;
continue;
} else {
return ret_value__57975__auto__;
}
break;
}
});
cljs$core$async$state_machine__57974__auto__ = function(state_59251){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57974__auto____1.call(this,state_59251);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57974__auto____0;
cljs$core$async$state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57974__auto____1;
return cljs$core$async$state_machine__57974__auto__;
})()
;})(switch__57973__auto__,c__58063__auto___59297,mults,ensure_mult,p))
})();
var state__58065__auto__ = (function (){var statearr_59295 = f__58064__auto__.call(null);
(statearr_59295[(6)] = c__58063__auto___59297);

return statearr_59295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58065__auto__);
});})(c__58063__auto___59297,mults,ensure_mult,p))
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
var G__59329 = arguments.length;
switch (G__59329) {
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
var G__59332 = arguments.length;
switch (G__59332) {
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
var G__59335 = arguments.length;
switch (G__59335) {
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
var c__58063__auto___59402 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58063__auto___59402,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__58064__auto__ = (function (){var switch__57973__auto__ = ((function (c__58063__auto___59402,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_59374){
var state_val_59375 = (state_59374[(1)]);
if((state_val_59375 === (7))){
var state_59374__$1 = state_59374;
var statearr_59376_59403 = state_59374__$1;
(statearr_59376_59403[(2)] = null);

(statearr_59376_59403[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59375 === (1))){
var state_59374__$1 = state_59374;
var statearr_59377_59404 = state_59374__$1;
(statearr_59377_59404[(2)] = null);

(statearr_59377_59404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59375 === (4))){
var inst_59338 = (state_59374[(7)]);
var inst_59340 = (inst_59338 < cnt);
var state_59374__$1 = state_59374;
if(cljs.core.truth_(inst_59340)){
var statearr_59378_59405 = state_59374__$1;
(statearr_59378_59405[(1)] = (6));

} else {
var statearr_59379_59406 = state_59374__$1;
(statearr_59379_59406[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59375 === (15))){
var inst_59370 = (state_59374[(2)]);
var state_59374__$1 = state_59374;
var statearr_59380_59407 = state_59374__$1;
(statearr_59380_59407[(2)] = inst_59370);

(statearr_59380_59407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59375 === (13))){
var inst_59363 = cljs.core.async.close_BANG_.call(null,out);
var state_59374__$1 = state_59374;
var statearr_59381_59408 = state_59374__$1;
(statearr_59381_59408[(2)] = inst_59363);

(statearr_59381_59408[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59375 === (6))){
var state_59374__$1 = state_59374;
var statearr_59382_59409 = state_59374__$1;
(statearr_59382_59409[(2)] = null);

(statearr_59382_59409[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59375 === (3))){
var inst_59372 = (state_59374[(2)]);
var state_59374__$1 = state_59374;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59374__$1,inst_59372);
} else {
if((state_val_59375 === (12))){
var inst_59360 = (state_59374[(8)]);
var inst_59360__$1 = (state_59374[(2)]);
var inst_59361 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_59360__$1);
var state_59374__$1 = (function (){var statearr_59383 = state_59374;
(statearr_59383[(8)] = inst_59360__$1);

return statearr_59383;
})();
if(cljs.core.truth_(inst_59361)){
var statearr_59384_59410 = state_59374__$1;
(statearr_59384_59410[(1)] = (13));

} else {
var statearr_59385_59411 = state_59374__$1;
(statearr_59385_59411[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59375 === (2))){
var inst_59337 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_59338 = (0);
var state_59374__$1 = (function (){var statearr_59386 = state_59374;
(statearr_59386[(7)] = inst_59338);

(statearr_59386[(9)] = inst_59337);

return statearr_59386;
})();
var statearr_59387_59412 = state_59374__$1;
(statearr_59387_59412[(2)] = null);

(statearr_59387_59412[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59375 === (11))){
var inst_59338 = (state_59374[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_59374,(10),Object,null,(9));
var inst_59347 = chs__$1.call(null,inst_59338);
var inst_59348 = done.call(null,inst_59338);
var inst_59349 = cljs.core.async.take_BANG_.call(null,inst_59347,inst_59348);
var state_59374__$1 = state_59374;
var statearr_59388_59413 = state_59374__$1;
(statearr_59388_59413[(2)] = inst_59349);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59374__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59375 === (9))){
var inst_59338 = (state_59374[(7)]);
var inst_59351 = (state_59374[(2)]);
var inst_59352 = (inst_59338 + (1));
var inst_59338__$1 = inst_59352;
var state_59374__$1 = (function (){var statearr_59389 = state_59374;
(statearr_59389[(7)] = inst_59338__$1);

(statearr_59389[(10)] = inst_59351);

return statearr_59389;
})();
var statearr_59390_59414 = state_59374__$1;
(statearr_59390_59414[(2)] = null);

(statearr_59390_59414[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59375 === (5))){
var inst_59358 = (state_59374[(2)]);
var state_59374__$1 = (function (){var statearr_59391 = state_59374;
(statearr_59391[(11)] = inst_59358);

return statearr_59391;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59374__$1,(12),dchan);
} else {
if((state_val_59375 === (14))){
var inst_59360 = (state_59374[(8)]);
var inst_59365 = cljs.core.apply.call(null,f,inst_59360);
var state_59374__$1 = state_59374;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59374__$1,(16),out,inst_59365);
} else {
if((state_val_59375 === (16))){
var inst_59367 = (state_59374[(2)]);
var state_59374__$1 = (function (){var statearr_59392 = state_59374;
(statearr_59392[(12)] = inst_59367);

return statearr_59392;
})();
var statearr_59393_59415 = state_59374__$1;
(statearr_59393_59415[(2)] = null);

(statearr_59393_59415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59375 === (10))){
var inst_59342 = (state_59374[(2)]);
var inst_59343 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_59374__$1 = (function (){var statearr_59394 = state_59374;
(statearr_59394[(13)] = inst_59342);

return statearr_59394;
})();
var statearr_59395_59416 = state_59374__$1;
(statearr_59395_59416[(2)] = inst_59343);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59374__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59375 === (8))){
var inst_59356 = (state_59374[(2)]);
var state_59374__$1 = state_59374;
var statearr_59396_59417 = state_59374__$1;
(statearr_59396_59417[(2)] = inst_59356);

(statearr_59396_59417[(1)] = (5));


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
});})(c__58063__auto___59402,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__57973__auto__,c__58063__auto___59402,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__57974__auto__ = null;
var cljs$core$async$state_machine__57974__auto____0 = (function (){
var statearr_59397 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59397[(0)] = cljs$core$async$state_machine__57974__auto__);

(statearr_59397[(1)] = (1));

return statearr_59397;
});
var cljs$core$async$state_machine__57974__auto____1 = (function (state_59374){
while(true){
var ret_value__57975__auto__ = (function (){try{while(true){
var result__57976__auto__ = switch__57973__auto__.call(null,state_59374);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57976__auto__;
}
break;
}
}catch (e59398){if((e59398 instanceof Object)){
var ex__57977__auto__ = e59398;
var statearr_59399_59418 = state_59374;
(statearr_59399_59418[(5)] = ex__57977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59419 = state_59374;
state_59374 = G__59419;
continue;
} else {
return ret_value__57975__auto__;
}
break;
}
});
cljs$core$async$state_machine__57974__auto__ = function(state_59374){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57974__auto____1.call(this,state_59374);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57974__auto____0;
cljs$core$async$state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57974__auto____1;
return cljs$core$async$state_machine__57974__auto__;
})()
;})(switch__57973__auto__,c__58063__auto___59402,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__58065__auto__ = (function (){var statearr_59400 = f__58064__auto__.call(null);
(statearr_59400[(6)] = c__58063__auto___59402);

return statearr_59400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58065__auto__);
});})(c__58063__auto___59402,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__59422 = arguments.length;
switch (G__59422) {
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
var c__58063__auto___59476 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58063__auto___59476,out){
return (function (){
var f__58064__auto__ = (function (){var switch__57973__auto__ = ((function (c__58063__auto___59476,out){
return (function (state_59454){
var state_val_59455 = (state_59454[(1)]);
if((state_val_59455 === (7))){
var inst_59433 = (state_59454[(7)]);
var inst_59434 = (state_59454[(8)]);
var inst_59433__$1 = (state_59454[(2)]);
var inst_59434__$1 = cljs.core.nth.call(null,inst_59433__$1,(0),null);
var inst_59435 = cljs.core.nth.call(null,inst_59433__$1,(1),null);
var inst_59436 = (inst_59434__$1 == null);
var state_59454__$1 = (function (){var statearr_59456 = state_59454;
(statearr_59456[(7)] = inst_59433__$1);

(statearr_59456[(9)] = inst_59435);

(statearr_59456[(8)] = inst_59434__$1);

return statearr_59456;
})();
if(cljs.core.truth_(inst_59436)){
var statearr_59457_59477 = state_59454__$1;
(statearr_59457_59477[(1)] = (8));

} else {
var statearr_59458_59478 = state_59454__$1;
(statearr_59458_59478[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59455 === (1))){
var inst_59423 = cljs.core.vec.call(null,chs);
var inst_59424 = inst_59423;
var state_59454__$1 = (function (){var statearr_59459 = state_59454;
(statearr_59459[(10)] = inst_59424);

return statearr_59459;
})();
var statearr_59460_59479 = state_59454__$1;
(statearr_59460_59479[(2)] = null);

(statearr_59460_59479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59455 === (4))){
var inst_59424 = (state_59454[(10)]);
var state_59454__$1 = state_59454;
return cljs.core.async.ioc_alts_BANG_.call(null,state_59454__$1,(7),inst_59424);
} else {
if((state_val_59455 === (6))){
var inst_59450 = (state_59454[(2)]);
var state_59454__$1 = state_59454;
var statearr_59461_59480 = state_59454__$1;
(statearr_59461_59480[(2)] = inst_59450);

(statearr_59461_59480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59455 === (3))){
var inst_59452 = (state_59454[(2)]);
var state_59454__$1 = state_59454;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59454__$1,inst_59452);
} else {
if((state_val_59455 === (2))){
var inst_59424 = (state_59454[(10)]);
var inst_59426 = cljs.core.count.call(null,inst_59424);
var inst_59427 = (inst_59426 > (0));
var state_59454__$1 = state_59454;
if(cljs.core.truth_(inst_59427)){
var statearr_59463_59481 = state_59454__$1;
(statearr_59463_59481[(1)] = (4));

} else {
var statearr_59464_59482 = state_59454__$1;
(statearr_59464_59482[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59455 === (11))){
var inst_59424 = (state_59454[(10)]);
var inst_59443 = (state_59454[(2)]);
var tmp59462 = inst_59424;
var inst_59424__$1 = tmp59462;
var state_59454__$1 = (function (){var statearr_59465 = state_59454;
(statearr_59465[(10)] = inst_59424__$1);

(statearr_59465[(11)] = inst_59443);

return statearr_59465;
})();
var statearr_59466_59483 = state_59454__$1;
(statearr_59466_59483[(2)] = null);

(statearr_59466_59483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59455 === (9))){
var inst_59434 = (state_59454[(8)]);
var state_59454__$1 = state_59454;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59454__$1,(11),out,inst_59434);
} else {
if((state_val_59455 === (5))){
var inst_59448 = cljs.core.async.close_BANG_.call(null,out);
var state_59454__$1 = state_59454;
var statearr_59467_59484 = state_59454__$1;
(statearr_59467_59484[(2)] = inst_59448);

(statearr_59467_59484[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59455 === (10))){
var inst_59446 = (state_59454[(2)]);
var state_59454__$1 = state_59454;
var statearr_59468_59485 = state_59454__$1;
(statearr_59468_59485[(2)] = inst_59446);

(statearr_59468_59485[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59455 === (8))){
var inst_59424 = (state_59454[(10)]);
var inst_59433 = (state_59454[(7)]);
var inst_59435 = (state_59454[(9)]);
var inst_59434 = (state_59454[(8)]);
var inst_59438 = (function (){var cs = inst_59424;
var vec__59429 = inst_59433;
var v = inst_59434;
var c = inst_59435;
return ((function (cs,vec__59429,v,c,inst_59424,inst_59433,inst_59435,inst_59434,state_val_59455,c__58063__auto___59476,out){
return (function (p1__59420_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__59420_SHARP_);
});
;})(cs,vec__59429,v,c,inst_59424,inst_59433,inst_59435,inst_59434,state_val_59455,c__58063__auto___59476,out))
})();
var inst_59439 = cljs.core.filterv.call(null,inst_59438,inst_59424);
var inst_59424__$1 = inst_59439;
var state_59454__$1 = (function (){var statearr_59469 = state_59454;
(statearr_59469[(10)] = inst_59424__$1);

return statearr_59469;
})();
var statearr_59470_59486 = state_59454__$1;
(statearr_59470_59486[(2)] = null);

(statearr_59470_59486[(1)] = (2));


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
});})(c__58063__auto___59476,out))
;
return ((function (switch__57973__auto__,c__58063__auto___59476,out){
return (function() {
var cljs$core$async$state_machine__57974__auto__ = null;
var cljs$core$async$state_machine__57974__auto____0 = (function (){
var statearr_59471 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59471[(0)] = cljs$core$async$state_machine__57974__auto__);

(statearr_59471[(1)] = (1));

return statearr_59471;
});
var cljs$core$async$state_machine__57974__auto____1 = (function (state_59454){
while(true){
var ret_value__57975__auto__ = (function (){try{while(true){
var result__57976__auto__ = switch__57973__auto__.call(null,state_59454);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57976__auto__;
}
break;
}
}catch (e59472){if((e59472 instanceof Object)){
var ex__57977__auto__ = e59472;
var statearr_59473_59487 = state_59454;
(statearr_59473_59487[(5)] = ex__57977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59454);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59472;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59488 = state_59454;
state_59454 = G__59488;
continue;
} else {
return ret_value__57975__auto__;
}
break;
}
});
cljs$core$async$state_machine__57974__auto__ = function(state_59454){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57974__auto____1.call(this,state_59454);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57974__auto____0;
cljs$core$async$state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57974__auto____1;
return cljs$core$async$state_machine__57974__auto__;
})()
;})(switch__57973__auto__,c__58063__auto___59476,out))
})();
var state__58065__auto__ = (function (){var statearr_59474 = f__58064__auto__.call(null);
(statearr_59474[(6)] = c__58063__auto___59476);

return statearr_59474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58065__auto__);
});})(c__58063__auto___59476,out))
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
var G__59490 = arguments.length;
switch (G__59490) {
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
var c__58063__auto___59535 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58063__auto___59535,out){
return (function (){
var f__58064__auto__ = (function (){var switch__57973__auto__ = ((function (c__58063__auto___59535,out){
return (function (state_59514){
var state_val_59515 = (state_59514[(1)]);
if((state_val_59515 === (7))){
var inst_59496 = (state_59514[(7)]);
var inst_59496__$1 = (state_59514[(2)]);
var inst_59497 = (inst_59496__$1 == null);
var inst_59498 = cljs.core.not.call(null,inst_59497);
var state_59514__$1 = (function (){var statearr_59516 = state_59514;
(statearr_59516[(7)] = inst_59496__$1);

return statearr_59516;
})();
if(inst_59498){
var statearr_59517_59536 = state_59514__$1;
(statearr_59517_59536[(1)] = (8));

} else {
var statearr_59518_59537 = state_59514__$1;
(statearr_59518_59537[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59515 === (1))){
var inst_59491 = (0);
var state_59514__$1 = (function (){var statearr_59519 = state_59514;
(statearr_59519[(8)] = inst_59491);

return statearr_59519;
})();
var statearr_59520_59538 = state_59514__$1;
(statearr_59520_59538[(2)] = null);

(statearr_59520_59538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59515 === (4))){
var state_59514__$1 = state_59514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59514__$1,(7),ch);
} else {
if((state_val_59515 === (6))){
var inst_59509 = (state_59514[(2)]);
var state_59514__$1 = state_59514;
var statearr_59521_59539 = state_59514__$1;
(statearr_59521_59539[(2)] = inst_59509);

(statearr_59521_59539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59515 === (3))){
var inst_59511 = (state_59514[(2)]);
var inst_59512 = cljs.core.async.close_BANG_.call(null,out);
var state_59514__$1 = (function (){var statearr_59522 = state_59514;
(statearr_59522[(9)] = inst_59511);

return statearr_59522;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59514__$1,inst_59512);
} else {
if((state_val_59515 === (2))){
var inst_59491 = (state_59514[(8)]);
var inst_59493 = (inst_59491 < n);
var state_59514__$1 = state_59514;
if(cljs.core.truth_(inst_59493)){
var statearr_59523_59540 = state_59514__$1;
(statearr_59523_59540[(1)] = (4));

} else {
var statearr_59524_59541 = state_59514__$1;
(statearr_59524_59541[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59515 === (11))){
var inst_59491 = (state_59514[(8)]);
var inst_59501 = (state_59514[(2)]);
var inst_59502 = (inst_59491 + (1));
var inst_59491__$1 = inst_59502;
var state_59514__$1 = (function (){var statearr_59525 = state_59514;
(statearr_59525[(8)] = inst_59491__$1);

(statearr_59525[(10)] = inst_59501);

return statearr_59525;
})();
var statearr_59526_59542 = state_59514__$1;
(statearr_59526_59542[(2)] = null);

(statearr_59526_59542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59515 === (9))){
var state_59514__$1 = state_59514;
var statearr_59527_59543 = state_59514__$1;
(statearr_59527_59543[(2)] = null);

(statearr_59527_59543[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59515 === (5))){
var state_59514__$1 = state_59514;
var statearr_59528_59544 = state_59514__$1;
(statearr_59528_59544[(2)] = null);

(statearr_59528_59544[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59515 === (10))){
var inst_59506 = (state_59514[(2)]);
var state_59514__$1 = state_59514;
var statearr_59529_59545 = state_59514__$1;
(statearr_59529_59545[(2)] = inst_59506);

(statearr_59529_59545[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59515 === (8))){
var inst_59496 = (state_59514[(7)]);
var state_59514__$1 = state_59514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59514__$1,(11),out,inst_59496);
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
});})(c__58063__auto___59535,out))
;
return ((function (switch__57973__auto__,c__58063__auto___59535,out){
return (function() {
var cljs$core$async$state_machine__57974__auto__ = null;
var cljs$core$async$state_machine__57974__auto____0 = (function (){
var statearr_59530 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59530[(0)] = cljs$core$async$state_machine__57974__auto__);

(statearr_59530[(1)] = (1));

return statearr_59530;
});
var cljs$core$async$state_machine__57974__auto____1 = (function (state_59514){
while(true){
var ret_value__57975__auto__ = (function (){try{while(true){
var result__57976__auto__ = switch__57973__auto__.call(null,state_59514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57976__auto__;
}
break;
}
}catch (e59531){if((e59531 instanceof Object)){
var ex__57977__auto__ = e59531;
var statearr_59532_59546 = state_59514;
(statearr_59532_59546[(5)] = ex__57977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59547 = state_59514;
state_59514 = G__59547;
continue;
} else {
return ret_value__57975__auto__;
}
break;
}
});
cljs$core$async$state_machine__57974__auto__ = function(state_59514){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57974__auto____1.call(this,state_59514);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57974__auto____0;
cljs$core$async$state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57974__auto____1;
return cljs$core$async$state_machine__57974__auto__;
})()
;})(switch__57973__auto__,c__58063__auto___59535,out))
})();
var state__58065__auto__ = (function (){var statearr_59533 = f__58064__auto__.call(null);
(statearr_59533[(6)] = c__58063__auto___59535);

return statearr_59533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58065__auto__);
});})(c__58063__auto___59535,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async59549 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59549 = (function (f,ch,meta59550){
this.f = f;
this.ch = ch;
this.meta59550 = meta59550;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async59549.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59551,meta59550__$1){
var self__ = this;
var _59551__$1 = this;
return (new cljs.core.async.t_cljs$core$async59549(self__.f,self__.ch,meta59550__$1));
});

cljs.core.async.t_cljs$core$async59549.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59551){
var self__ = this;
var _59551__$1 = this;
return self__.meta59550;
});

cljs.core.async.t_cljs$core$async59549.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59549.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async59549.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async59549.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59549.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async59552 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59552 = (function (f,ch,meta59550,_,fn1,meta59553){
this.f = f;
this.ch = ch;
this.meta59550 = meta59550;
this._ = _;
this.fn1 = fn1;
this.meta59553 = meta59553;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async59552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_59554,meta59553__$1){
var self__ = this;
var _59554__$1 = this;
return (new cljs.core.async.t_cljs$core$async59552(self__.f,self__.ch,self__.meta59550,self__._,self__.fn1,meta59553__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async59552.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_59554){
var self__ = this;
var _59554__$1 = this;
return self__.meta59553;
});})(___$1))
;

cljs.core.async.t_cljs$core$async59552.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59552.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async59552.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async59552.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__59548_SHARP_){
return f1.call(null,(((p1__59548_SHARP_ == null))?null:self__.f.call(null,p1__59548_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async59552.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta59550","meta59550",-596316955,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async59549","cljs.core.async/t_cljs$core$async59549",-1199647824,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta59553","meta59553",2138228513,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async59552.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async59552.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59552";

cljs.core.async.t_cljs$core$async59552.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__53641__auto__,writer__53642__auto__,opt__53643__auto__){
return cljs.core._write.call(null,writer__53642__auto__,"cljs.core.async/t_cljs$core$async59552");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async59552 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async59552(f__$1,ch__$1,meta59550__$1,___$2,fn1__$1,meta59553){
return (new cljs.core.async.t_cljs$core$async59552(f__$1,ch__$1,meta59550__$1,___$2,fn1__$1,meta59553));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async59552(self__.f,self__.ch,self__.meta59550,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__52958__auto__ = ret;
if(cljs.core.truth_(and__52958__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__52958__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async59549.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59549.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async59549.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta59550","meta59550",-596316955,null)], null);
});

cljs.core.async.t_cljs$core$async59549.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async59549.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59549";

cljs.core.async.t_cljs$core$async59549.cljs$lang$ctorPrWriter = (function (this__53641__auto__,writer__53642__auto__,opt__53643__auto__){
return cljs.core._write.call(null,writer__53642__auto__,"cljs.core.async/t_cljs$core$async59549");
});

cljs.core.async.__GT_t_cljs$core$async59549 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async59549(f__$1,ch__$1,meta59550){
return (new cljs.core.async.t_cljs$core$async59549(f__$1,ch__$1,meta59550));
});

}

return (new cljs.core.async.t_cljs$core$async59549(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async59555 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59555 = (function (f,ch,meta59556){
this.f = f;
this.ch = ch;
this.meta59556 = meta59556;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async59555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59557,meta59556__$1){
var self__ = this;
var _59557__$1 = this;
return (new cljs.core.async.t_cljs$core$async59555(self__.f,self__.ch,meta59556__$1));
});

cljs.core.async.t_cljs$core$async59555.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59557){
var self__ = this;
var _59557__$1 = this;
return self__.meta59556;
});

cljs.core.async.t_cljs$core$async59555.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59555.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async59555.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59555.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async59555.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59555.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async59555.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta59556","meta59556",-1743148392,null)], null);
});

cljs.core.async.t_cljs$core$async59555.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async59555.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59555";

cljs.core.async.t_cljs$core$async59555.cljs$lang$ctorPrWriter = (function (this__53641__auto__,writer__53642__auto__,opt__53643__auto__){
return cljs.core._write.call(null,writer__53642__auto__,"cljs.core.async/t_cljs$core$async59555");
});

cljs.core.async.__GT_t_cljs$core$async59555 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async59555(f__$1,ch__$1,meta59556){
return (new cljs.core.async.t_cljs$core$async59555(f__$1,ch__$1,meta59556));
});

}

return (new cljs.core.async.t_cljs$core$async59555(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async59558 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59558 = (function (p,ch,meta59559){
this.p = p;
this.ch = ch;
this.meta59559 = meta59559;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async59558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59560,meta59559__$1){
var self__ = this;
var _59560__$1 = this;
return (new cljs.core.async.t_cljs$core$async59558(self__.p,self__.ch,meta59559__$1));
});

cljs.core.async.t_cljs$core$async59558.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59560){
var self__ = this;
var _59560__$1 = this;
return self__.meta59559;
});

cljs.core.async.t_cljs$core$async59558.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59558.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async59558.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async59558.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59558.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async59558.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async59558.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async59558.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta59559","meta59559",755200975,null)], null);
});

cljs.core.async.t_cljs$core$async59558.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async59558.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59558";

cljs.core.async.t_cljs$core$async59558.cljs$lang$ctorPrWriter = (function (this__53641__auto__,writer__53642__auto__,opt__53643__auto__){
return cljs.core._write.call(null,writer__53642__auto__,"cljs.core.async/t_cljs$core$async59558");
});

cljs.core.async.__GT_t_cljs$core$async59558 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async59558(p__$1,ch__$1,meta59559){
return (new cljs.core.async.t_cljs$core$async59558(p__$1,ch__$1,meta59559));
});

}

return (new cljs.core.async.t_cljs$core$async59558(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__59562 = arguments.length;
switch (G__59562) {
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
var c__58063__auto___59602 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58063__auto___59602,out){
return (function (){
var f__58064__auto__ = (function (){var switch__57973__auto__ = ((function (c__58063__auto___59602,out){
return (function (state_59583){
var state_val_59584 = (state_59583[(1)]);
if((state_val_59584 === (7))){
var inst_59579 = (state_59583[(2)]);
var state_59583__$1 = state_59583;
var statearr_59585_59603 = state_59583__$1;
(statearr_59585_59603[(2)] = inst_59579);

(statearr_59585_59603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59584 === (1))){
var state_59583__$1 = state_59583;
var statearr_59586_59604 = state_59583__$1;
(statearr_59586_59604[(2)] = null);

(statearr_59586_59604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59584 === (4))){
var inst_59565 = (state_59583[(7)]);
var inst_59565__$1 = (state_59583[(2)]);
var inst_59566 = (inst_59565__$1 == null);
var state_59583__$1 = (function (){var statearr_59587 = state_59583;
(statearr_59587[(7)] = inst_59565__$1);

return statearr_59587;
})();
if(cljs.core.truth_(inst_59566)){
var statearr_59588_59605 = state_59583__$1;
(statearr_59588_59605[(1)] = (5));

} else {
var statearr_59589_59606 = state_59583__$1;
(statearr_59589_59606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59584 === (6))){
var inst_59565 = (state_59583[(7)]);
var inst_59570 = p.call(null,inst_59565);
var state_59583__$1 = state_59583;
if(cljs.core.truth_(inst_59570)){
var statearr_59590_59607 = state_59583__$1;
(statearr_59590_59607[(1)] = (8));

} else {
var statearr_59591_59608 = state_59583__$1;
(statearr_59591_59608[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59584 === (3))){
var inst_59581 = (state_59583[(2)]);
var state_59583__$1 = state_59583;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59583__$1,inst_59581);
} else {
if((state_val_59584 === (2))){
var state_59583__$1 = state_59583;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59583__$1,(4),ch);
} else {
if((state_val_59584 === (11))){
var inst_59573 = (state_59583[(2)]);
var state_59583__$1 = state_59583;
var statearr_59592_59609 = state_59583__$1;
(statearr_59592_59609[(2)] = inst_59573);

(statearr_59592_59609[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59584 === (9))){
var state_59583__$1 = state_59583;
var statearr_59593_59610 = state_59583__$1;
(statearr_59593_59610[(2)] = null);

(statearr_59593_59610[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59584 === (5))){
var inst_59568 = cljs.core.async.close_BANG_.call(null,out);
var state_59583__$1 = state_59583;
var statearr_59594_59611 = state_59583__$1;
(statearr_59594_59611[(2)] = inst_59568);

(statearr_59594_59611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59584 === (10))){
var inst_59576 = (state_59583[(2)]);
var state_59583__$1 = (function (){var statearr_59595 = state_59583;
(statearr_59595[(8)] = inst_59576);

return statearr_59595;
})();
var statearr_59596_59612 = state_59583__$1;
(statearr_59596_59612[(2)] = null);

(statearr_59596_59612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59584 === (8))){
var inst_59565 = (state_59583[(7)]);
var state_59583__$1 = state_59583;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59583__$1,(11),out,inst_59565);
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
});})(c__58063__auto___59602,out))
;
return ((function (switch__57973__auto__,c__58063__auto___59602,out){
return (function() {
var cljs$core$async$state_machine__57974__auto__ = null;
var cljs$core$async$state_machine__57974__auto____0 = (function (){
var statearr_59597 = [null,null,null,null,null,null,null,null,null];
(statearr_59597[(0)] = cljs$core$async$state_machine__57974__auto__);

(statearr_59597[(1)] = (1));

return statearr_59597;
});
var cljs$core$async$state_machine__57974__auto____1 = (function (state_59583){
while(true){
var ret_value__57975__auto__ = (function (){try{while(true){
var result__57976__auto__ = switch__57973__auto__.call(null,state_59583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57976__auto__;
}
break;
}
}catch (e59598){if((e59598 instanceof Object)){
var ex__57977__auto__ = e59598;
var statearr_59599_59613 = state_59583;
(statearr_59599_59613[(5)] = ex__57977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59614 = state_59583;
state_59583 = G__59614;
continue;
} else {
return ret_value__57975__auto__;
}
break;
}
});
cljs$core$async$state_machine__57974__auto__ = function(state_59583){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57974__auto____1.call(this,state_59583);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57974__auto____0;
cljs$core$async$state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57974__auto____1;
return cljs$core$async$state_machine__57974__auto__;
})()
;})(switch__57973__auto__,c__58063__auto___59602,out))
})();
var state__58065__auto__ = (function (){var statearr_59600 = f__58064__auto__.call(null);
(statearr_59600[(6)] = c__58063__auto___59602);

return statearr_59600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58065__auto__);
});})(c__58063__auto___59602,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__59616 = arguments.length;
switch (G__59616) {
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
var c__58063__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58063__auto__){
return (function (){
var f__58064__auto__ = (function (){var switch__57973__auto__ = ((function (c__58063__auto__){
return (function (state_59679){
var state_val_59680 = (state_59679[(1)]);
if((state_val_59680 === (7))){
var inst_59675 = (state_59679[(2)]);
var state_59679__$1 = state_59679;
var statearr_59681_59719 = state_59679__$1;
(statearr_59681_59719[(2)] = inst_59675);

(statearr_59681_59719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59680 === (20))){
var inst_59645 = (state_59679[(7)]);
var inst_59656 = (state_59679[(2)]);
var inst_59657 = cljs.core.next.call(null,inst_59645);
var inst_59631 = inst_59657;
var inst_59632 = null;
var inst_59633 = (0);
var inst_59634 = (0);
var state_59679__$1 = (function (){var statearr_59682 = state_59679;
(statearr_59682[(8)] = inst_59632);

(statearr_59682[(9)] = inst_59631);

(statearr_59682[(10)] = inst_59634);

(statearr_59682[(11)] = inst_59633);

(statearr_59682[(12)] = inst_59656);

return statearr_59682;
})();
var statearr_59683_59720 = state_59679__$1;
(statearr_59683_59720[(2)] = null);

(statearr_59683_59720[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59680 === (1))){
var state_59679__$1 = state_59679;
var statearr_59684_59721 = state_59679__$1;
(statearr_59684_59721[(2)] = null);

(statearr_59684_59721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59680 === (4))){
var inst_59620 = (state_59679[(13)]);
var inst_59620__$1 = (state_59679[(2)]);
var inst_59621 = (inst_59620__$1 == null);
var state_59679__$1 = (function (){var statearr_59685 = state_59679;
(statearr_59685[(13)] = inst_59620__$1);

return statearr_59685;
})();
if(cljs.core.truth_(inst_59621)){
var statearr_59686_59722 = state_59679__$1;
(statearr_59686_59722[(1)] = (5));

} else {
var statearr_59687_59723 = state_59679__$1;
(statearr_59687_59723[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59680 === (15))){
var state_59679__$1 = state_59679;
var statearr_59691_59724 = state_59679__$1;
(statearr_59691_59724[(2)] = null);

(statearr_59691_59724[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59680 === (21))){
var state_59679__$1 = state_59679;
var statearr_59692_59725 = state_59679__$1;
(statearr_59692_59725[(2)] = null);

(statearr_59692_59725[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59680 === (13))){
var inst_59632 = (state_59679[(8)]);
var inst_59631 = (state_59679[(9)]);
var inst_59634 = (state_59679[(10)]);
var inst_59633 = (state_59679[(11)]);
var inst_59641 = (state_59679[(2)]);
var inst_59642 = (inst_59634 + (1));
var tmp59688 = inst_59632;
var tmp59689 = inst_59631;
var tmp59690 = inst_59633;
var inst_59631__$1 = tmp59689;
var inst_59632__$1 = tmp59688;
var inst_59633__$1 = tmp59690;
var inst_59634__$1 = inst_59642;
var state_59679__$1 = (function (){var statearr_59693 = state_59679;
(statearr_59693[(8)] = inst_59632__$1);

(statearr_59693[(9)] = inst_59631__$1);

(statearr_59693[(10)] = inst_59634__$1);

(statearr_59693[(14)] = inst_59641);

(statearr_59693[(11)] = inst_59633__$1);

return statearr_59693;
})();
var statearr_59694_59726 = state_59679__$1;
(statearr_59694_59726[(2)] = null);

(statearr_59694_59726[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59680 === (22))){
var state_59679__$1 = state_59679;
var statearr_59695_59727 = state_59679__$1;
(statearr_59695_59727[(2)] = null);

(statearr_59695_59727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59680 === (6))){
var inst_59620 = (state_59679[(13)]);
var inst_59629 = f.call(null,inst_59620);
var inst_59630 = cljs.core.seq.call(null,inst_59629);
var inst_59631 = inst_59630;
var inst_59632 = null;
var inst_59633 = (0);
var inst_59634 = (0);
var state_59679__$1 = (function (){var statearr_59696 = state_59679;
(statearr_59696[(8)] = inst_59632);

(statearr_59696[(9)] = inst_59631);

(statearr_59696[(10)] = inst_59634);

(statearr_59696[(11)] = inst_59633);

return statearr_59696;
})();
var statearr_59697_59728 = state_59679__$1;
(statearr_59697_59728[(2)] = null);

(statearr_59697_59728[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59680 === (17))){
var inst_59645 = (state_59679[(7)]);
var inst_59649 = cljs.core.chunk_first.call(null,inst_59645);
var inst_59650 = cljs.core.chunk_rest.call(null,inst_59645);
var inst_59651 = cljs.core.count.call(null,inst_59649);
var inst_59631 = inst_59650;
var inst_59632 = inst_59649;
var inst_59633 = inst_59651;
var inst_59634 = (0);
var state_59679__$1 = (function (){var statearr_59698 = state_59679;
(statearr_59698[(8)] = inst_59632);

(statearr_59698[(9)] = inst_59631);

(statearr_59698[(10)] = inst_59634);

(statearr_59698[(11)] = inst_59633);

return statearr_59698;
})();
var statearr_59699_59729 = state_59679__$1;
(statearr_59699_59729[(2)] = null);

(statearr_59699_59729[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59680 === (3))){
var inst_59677 = (state_59679[(2)]);
var state_59679__$1 = state_59679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59679__$1,inst_59677);
} else {
if((state_val_59680 === (12))){
var inst_59665 = (state_59679[(2)]);
var state_59679__$1 = state_59679;
var statearr_59700_59730 = state_59679__$1;
(statearr_59700_59730[(2)] = inst_59665);

(statearr_59700_59730[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59680 === (2))){
var state_59679__$1 = state_59679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59679__$1,(4),in$);
} else {
if((state_val_59680 === (23))){
var inst_59673 = (state_59679[(2)]);
var state_59679__$1 = state_59679;
var statearr_59701_59731 = state_59679__$1;
(statearr_59701_59731[(2)] = inst_59673);

(statearr_59701_59731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59680 === (19))){
var inst_59660 = (state_59679[(2)]);
var state_59679__$1 = state_59679;
var statearr_59702_59732 = state_59679__$1;
(statearr_59702_59732[(2)] = inst_59660);

(statearr_59702_59732[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59680 === (11))){
var inst_59645 = (state_59679[(7)]);
var inst_59631 = (state_59679[(9)]);
var inst_59645__$1 = cljs.core.seq.call(null,inst_59631);
var state_59679__$1 = (function (){var statearr_59703 = state_59679;
(statearr_59703[(7)] = inst_59645__$1);

return statearr_59703;
})();
if(inst_59645__$1){
var statearr_59704_59733 = state_59679__$1;
(statearr_59704_59733[(1)] = (14));

} else {
var statearr_59705_59734 = state_59679__$1;
(statearr_59705_59734[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59680 === (9))){
var inst_59667 = (state_59679[(2)]);
var inst_59668 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_59679__$1 = (function (){var statearr_59706 = state_59679;
(statearr_59706[(15)] = inst_59667);

return statearr_59706;
})();
if(cljs.core.truth_(inst_59668)){
var statearr_59707_59735 = state_59679__$1;
(statearr_59707_59735[(1)] = (21));

} else {
var statearr_59708_59736 = state_59679__$1;
(statearr_59708_59736[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59680 === (5))){
var inst_59623 = cljs.core.async.close_BANG_.call(null,out);
var state_59679__$1 = state_59679;
var statearr_59709_59737 = state_59679__$1;
(statearr_59709_59737[(2)] = inst_59623);

(statearr_59709_59737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59680 === (14))){
var inst_59645 = (state_59679[(7)]);
var inst_59647 = cljs.core.chunked_seq_QMARK_.call(null,inst_59645);
var state_59679__$1 = state_59679;
if(inst_59647){
var statearr_59710_59738 = state_59679__$1;
(statearr_59710_59738[(1)] = (17));

} else {
var statearr_59711_59739 = state_59679__$1;
(statearr_59711_59739[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59680 === (16))){
var inst_59663 = (state_59679[(2)]);
var state_59679__$1 = state_59679;
var statearr_59712_59740 = state_59679__$1;
(statearr_59712_59740[(2)] = inst_59663);

(statearr_59712_59740[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59680 === (10))){
var inst_59632 = (state_59679[(8)]);
var inst_59634 = (state_59679[(10)]);
var inst_59639 = cljs.core._nth.call(null,inst_59632,inst_59634);
var state_59679__$1 = state_59679;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59679__$1,(13),out,inst_59639);
} else {
if((state_val_59680 === (18))){
var inst_59645 = (state_59679[(7)]);
var inst_59654 = cljs.core.first.call(null,inst_59645);
var state_59679__$1 = state_59679;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59679__$1,(20),out,inst_59654);
} else {
if((state_val_59680 === (8))){
var inst_59634 = (state_59679[(10)]);
var inst_59633 = (state_59679[(11)]);
var inst_59636 = (inst_59634 < inst_59633);
var inst_59637 = inst_59636;
var state_59679__$1 = state_59679;
if(cljs.core.truth_(inst_59637)){
var statearr_59713_59741 = state_59679__$1;
(statearr_59713_59741[(1)] = (10));

} else {
var statearr_59714_59742 = state_59679__$1;
(statearr_59714_59742[(1)] = (11));

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
});})(c__58063__auto__))
;
return ((function (switch__57973__auto__,c__58063__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__57974__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__57974__auto____0 = (function (){
var statearr_59715 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59715[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__57974__auto__);

(statearr_59715[(1)] = (1));

return statearr_59715;
});
var cljs$core$async$mapcat_STAR__$_state_machine__57974__auto____1 = (function (state_59679){
while(true){
var ret_value__57975__auto__ = (function (){try{while(true){
var result__57976__auto__ = switch__57973__auto__.call(null,state_59679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57976__auto__;
}
break;
}
}catch (e59716){if((e59716 instanceof Object)){
var ex__57977__auto__ = e59716;
var statearr_59717_59743 = state_59679;
(statearr_59717_59743[(5)] = ex__57977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59716;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59744 = state_59679;
state_59679 = G__59744;
continue;
} else {
return ret_value__57975__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__57974__auto__ = function(state_59679){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__57974__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__57974__auto____1.call(this,state_59679);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__57974__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__57974__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__57974__auto__;
})()
;})(switch__57973__auto__,c__58063__auto__))
})();
var state__58065__auto__ = (function (){var statearr_59718 = f__58064__auto__.call(null);
(statearr_59718[(6)] = c__58063__auto__);

return statearr_59718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58065__auto__);
});})(c__58063__auto__))
);

return c__58063__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__59746 = arguments.length;
switch (G__59746) {
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
var G__59749 = arguments.length;
switch (G__59749) {
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
var G__59752 = arguments.length;
switch (G__59752) {
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
var c__58063__auto___59799 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58063__auto___59799,out){
return (function (){
var f__58064__auto__ = (function (){var switch__57973__auto__ = ((function (c__58063__auto___59799,out){
return (function (state_59776){
var state_val_59777 = (state_59776[(1)]);
if((state_val_59777 === (7))){
var inst_59771 = (state_59776[(2)]);
var state_59776__$1 = state_59776;
var statearr_59778_59800 = state_59776__$1;
(statearr_59778_59800[(2)] = inst_59771);

(statearr_59778_59800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59777 === (1))){
var inst_59753 = null;
var state_59776__$1 = (function (){var statearr_59779 = state_59776;
(statearr_59779[(7)] = inst_59753);

return statearr_59779;
})();
var statearr_59780_59801 = state_59776__$1;
(statearr_59780_59801[(2)] = null);

(statearr_59780_59801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59777 === (4))){
var inst_59756 = (state_59776[(8)]);
var inst_59756__$1 = (state_59776[(2)]);
var inst_59757 = (inst_59756__$1 == null);
var inst_59758 = cljs.core.not.call(null,inst_59757);
var state_59776__$1 = (function (){var statearr_59781 = state_59776;
(statearr_59781[(8)] = inst_59756__$1);

return statearr_59781;
})();
if(inst_59758){
var statearr_59782_59802 = state_59776__$1;
(statearr_59782_59802[(1)] = (5));

} else {
var statearr_59783_59803 = state_59776__$1;
(statearr_59783_59803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59777 === (6))){
var state_59776__$1 = state_59776;
var statearr_59784_59804 = state_59776__$1;
(statearr_59784_59804[(2)] = null);

(statearr_59784_59804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59777 === (3))){
var inst_59773 = (state_59776[(2)]);
var inst_59774 = cljs.core.async.close_BANG_.call(null,out);
var state_59776__$1 = (function (){var statearr_59785 = state_59776;
(statearr_59785[(9)] = inst_59773);

return statearr_59785;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59776__$1,inst_59774);
} else {
if((state_val_59777 === (2))){
var state_59776__$1 = state_59776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59776__$1,(4),ch);
} else {
if((state_val_59777 === (11))){
var inst_59756 = (state_59776[(8)]);
var inst_59765 = (state_59776[(2)]);
var inst_59753 = inst_59756;
var state_59776__$1 = (function (){var statearr_59786 = state_59776;
(statearr_59786[(7)] = inst_59753);

(statearr_59786[(10)] = inst_59765);

return statearr_59786;
})();
var statearr_59787_59805 = state_59776__$1;
(statearr_59787_59805[(2)] = null);

(statearr_59787_59805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59777 === (9))){
var inst_59756 = (state_59776[(8)]);
var state_59776__$1 = state_59776;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59776__$1,(11),out,inst_59756);
} else {
if((state_val_59777 === (5))){
var inst_59756 = (state_59776[(8)]);
var inst_59753 = (state_59776[(7)]);
var inst_59760 = cljs.core._EQ_.call(null,inst_59756,inst_59753);
var state_59776__$1 = state_59776;
if(inst_59760){
var statearr_59789_59806 = state_59776__$1;
(statearr_59789_59806[(1)] = (8));

} else {
var statearr_59790_59807 = state_59776__$1;
(statearr_59790_59807[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59777 === (10))){
var inst_59768 = (state_59776[(2)]);
var state_59776__$1 = state_59776;
var statearr_59791_59808 = state_59776__$1;
(statearr_59791_59808[(2)] = inst_59768);

(statearr_59791_59808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59777 === (8))){
var inst_59753 = (state_59776[(7)]);
var tmp59788 = inst_59753;
var inst_59753__$1 = tmp59788;
var state_59776__$1 = (function (){var statearr_59792 = state_59776;
(statearr_59792[(7)] = inst_59753__$1);

return statearr_59792;
})();
var statearr_59793_59809 = state_59776__$1;
(statearr_59793_59809[(2)] = null);

(statearr_59793_59809[(1)] = (2));


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
});})(c__58063__auto___59799,out))
;
return ((function (switch__57973__auto__,c__58063__auto___59799,out){
return (function() {
var cljs$core$async$state_machine__57974__auto__ = null;
var cljs$core$async$state_machine__57974__auto____0 = (function (){
var statearr_59794 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59794[(0)] = cljs$core$async$state_machine__57974__auto__);

(statearr_59794[(1)] = (1));

return statearr_59794;
});
var cljs$core$async$state_machine__57974__auto____1 = (function (state_59776){
while(true){
var ret_value__57975__auto__ = (function (){try{while(true){
var result__57976__auto__ = switch__57973__auto__.call(null,state_59776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57976__auto__;
}
break;
}
}catch (e59795){if((e59795 instanceof Object)){
var ex__57977__auto__ = e59795;
var statearr_59796_59810 = state_59776;
(statearr_59796_59810[(5)] = ex__57977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59811 = state_59776;
state_59776 = G__59811;
continue;
} else {
return ret_value__57975__auto__;
}
break;
}
});
cljs$core$async$state_machine__57974__auto__ = function(state_59776){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57974__auto____1.call(this,state_59776);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57974__auto____0;
cljs$core$async$state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57974__auto____1;
return cljs$core$async$state_machine__57974__auto__;
})()
;})(switch__57973__auto__,c__58063__auto___59799,out))
})();
var state__58065__auto__ = (function (){var statearr_59797 = f__58064__auto__.call(null);
(statearr_59797[(6)] = c__58063__auto___59799);

return statearr_59797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58065__auto__);
});})(c__58063__auto___59799,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__59813 = arguments.length;
switch (G__59813) {
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
var c__58063__auto___59879 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58063__auto___59879,out){
return (function (){
var f__58064__auto__ = (function (){var switch__57973__auto__ = ((function (c__58063__auto___59879,out){
return (function (state_59851){
var state_val_59852 = (state_59851[(1)]);
if((state_val_59852 === (7))){
var inst_59847 = (state_59851[(2)]);
var state_59851__$1 = state_59851;
var statearr_59853_59880 = state_59851__$1;
(statearr_59853_59880[(2)] = inst_59847);

(statearr_59853_59880[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59852 === (1))){
var inst_59814 = (new Array(n));
var inst_59815 = inst_59814;
var inst_59816 = (0);
var state_59851__$1 = (function (){var statearr_59854 = state_59851;
(statearr_59854[(7)] = inst_59815);

(statearr_59854[(8)] = inst_59816);

return statearr_59854;
})();
var statearr_59855_59881 = state_59851__$1;
(statearr_59855_59881[(2)] = null);

(statearr_59855_59881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59852 === (4))){
var inst_59819 = (state_59851[(9)]);
var inst_59819__$1 = (state_59851[(2)]);
var inst_59820 = (inst_59819__$1 == null);
var inst_59821 = cljs.core.not.call(null,inst_59820);
var state_59851__$1 = (function (){var statearr_59856 = state_59851;
(statearr_59856[(9)] = inst_59819__$1);

return statearr_59856;
})();
if(inst_59821){
var statearr_59857_59882 = state_59851__$1;
(statearr_59857_59882[(1)] = (5));

} else {
var statearr_59858_59883 = state_59851__$1;
(statearr_59858_59883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59852 === (15))){
var inst_59841 = (state_59851[(2)]);
var state_59851__$1 = state_59851;
var statearr_59859_59884 = state_59851__$1;
(statearr_59859_59884[(2)] = inst_59841);

(statearr_59859_59884[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59852 === (13))){
var state_59851__$1 = state_59851;
var statearr_59860_59885 = state_59851__$1;
(statearr_59860_59885[(2)] = null);

(statearr_59860_59885[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59852 === (6))){
var inst_59816 = (state_59851[(8)]);
var inst_59837 = (inst_59816 > (0));
var state_59851__$1 = state_59851;
if(cljs.core.truth_(inst_59837)){
var statearr_59861_59886 = state_59851__$1;
(statearr_59861_59886[(1)] = (12));

} else {
var statearr_59862_59887 = state_59851__$1;
(statearr_59862_59887[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59852 === (3))){
var inst_59849 = (state_59851[(2)]);
var state_59851__$1 = state_59851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59851__$1,inst_59849);
} else {
if((state_val_59852 === (12))){
var inst_59815 = (state_59851[(7)]);
var inst_59839 = cljs.core.vec.call(null,inst_59815);
var state_59851__$1 = state_59851;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59851__$1,(15),out,inst_59839);
} else {
if((state_val_59852 === (2))){
var state_59851__$1 = state_59851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59851__$1,(4),ch);
} else {
if((state_val_59852 === (11))){
var inst_59831 = (state_59851[(2)]);
var inst_59832 = (new Array(n));
var inst_59815 = inst_59832;
var inst_59816 = (0);
var state_59851__$1 = (function (){var statearr_59863 = state_59851;
(statearr_59863[(7)] = inst_59815);

(statearr_59863[(10)] = inst_59831);

(statearr_59863[(8)] = inst_59816);

return statearr_59863;
})();
var statearr_59864_59888 = state_59851__$1;
(statearr_59864_59888[(2)] = null);

(statearr_59864_59888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59852 === (9))){
var inst_59815 = (state_59851[(7)]);
var inst_59829 = cljs.core.vec.call(null,inst_59815);
var state_59851__$1 = state_59851;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59851__$1,(11),out,inst_59829);
} else {
if((state_val_59852 === (5))){
var inst_59815 = (state_59851[(7)]);
var inst_59824 = (state_59851[(11)]);
var inst_59816 = (state_59851[(8)]);
var inst_59819 = (state_59851[(9)]);
var inst_59823 = (inst_59815[inst_59816] = inst_59819);
var inst_59824__$1 = (inst_59816 + (1));
var inst_59825 = (inst_59824__$1 < n);
var state_59851__$1 = (function (){var statearr_59865 = state_59851;
(statearr_59865[(12)] = inst_59823);

(statearr_59865[(11)] = inst_59824__$1);

return statearr_59865;
})();
if(cljs.core.truth_(inst_59825)){
var statearr_59866_59889 = state_59851__$1;
(statearr_59866_59889[(1)] = (8));

} else {
var statearr_59867_59890 = state_59851__$1;
(statearr_59867_59890[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59852 === (14))){
var inst_59844 = (state_59851[(2)]);
var inst_59845 = cljs.core.async.close_BANG_.call(null,out);
var state_59851__$1 = (function (){var statearr_59869 = state_59851;
(statearr_59869[(13)] = inst_59844);

return statearr_59869;
})();
var statearr_59870_59891 = state_59851__$1;
(statearr_59870_59891[(2)] = inst_59845);

(statearr_59870_59891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59852 === (10))){
var inst_59835 = (state_59851[(2)]);
var state_59851__$1 = state_59851;
var statearr_59871_59892 = state_59851__$1;
(statearr_59871_59892[(2)] = inst_59835);

(statearr_59871_59892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59852 === (8))){
var inst_59815 = (state_59851[(7)]);
var inst_59824 = (state_59851[(11)]);
var tmp59868 = inst_59815;
var inst_59815__$1 = tmp59868;
var inst_59816 = inst_59824;
var state_59851__$1 = (function (){var statearr_59872 = state_59851;
(statearr_59872[(7)] = inst_59815__$1);

(statearr_59872[(8)] = inst_59816);

return statearr_59872;
})();
var statearr_59873_59893 = state_59851__$1;
(statearr_59873_59893[(2)] = null);

(statearr_59873_59893[(1)] = (2));


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
});})(c__58063__auto___59879,out))
;
return ((function (switch__57973__auto__,c__58063__auto___59879,out){
return (function() {
var cljs$core$async$state_machine__57974__auto__ = null;
var cljs$core$async$state_machine__57974__auto____0 = (function (){
var statearr_59874 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59874[(0)] = cljs$core$async$state_machine__57974__auto__);

(statearr_59874[(1)] = (1));

return statearr_59874;
});
var cljs$core$async$state_machine__57974__auto____1 = (function (state_59851){
while(true){
var ret_value__57975__auto__ = (function (){try{while(true){
var result__57976__auto__ = switch__57973__auto__.call(null,state_59851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57976__auto__;
}
break;
}
}catch (e59875){if((e59875 instanceof Object)){
var ex__57977__auto__ = e59875;
var statearr_59876_59894 = state_59851;
(statearr_59876_59894[(5)] = ex__57977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59895 = state_59851;
state_59851 = G__59895;
continue;
} else {
return ret_value__57975__auto__;
}
break;
}
});
cljs$core$async$state_machine__57974__auto__ = function(state_59851){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57974__auto____1.call(this,state_59851);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57974__auto____0;
cljs$core$async$state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57974__auto____1;
return cljs$core$async$state_machine__57974__auto__;
})()
;})(switch__57973__auto__,c__58063__auto___59879,out))
})();
var state__58065__auto__ = (function (){var statearr_59877 = f__58064__auto__.call(null);
(statearr_59877[(6)] = c__58063__auto___59879);

return statearr_59877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58065__auto__);
});})(c__58063__auto___59879,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__59897 = arguments.length;
switch (G__59897) {
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
var c__58063__auto___59967 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__58063__auto___59967,out){
return (function (){
var f__58064__auto__ = (function (){var switch__57973__auto__ = ((function (c__58063__auto___59967,out){
return (function (state_59939){
var state_val_59940 = (state_59939[(1)]);
if((state_val_59940 === (7))){
var inst_59935 = (state_59939[(2)]);
var state_59939__$1 = state_59939;
var statearr_59941_59968 = state_59939__$1;
(statearr_59941_59968[(2)] = inst_59935);

(statearr_59941_59968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59940 === (1))){
var inst_59898 = [];
var inst_59899 = inst_59898;
var inst_59900 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_59939__$1 = (function (){var statearr_59942 = state_59939;
(statearr_59942[(7)] = inst_59899);

(statearr_59942[(8)] = inst_59900);

return statearr_59942;
})();
var statearr_59943_59969 = state_59939__$1;
(statearr_59943_59969[(2)] = null);

(statearr_59943_59969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59940 === (4))){
var inst_59903 = (state_59939[(9)]);
var inst_59903__$1 = (state_59939[(2)]);
var inst_59904 = (inst_59903__$1 == null);
var inst_59905 = cljs.core.not.call(null,inst_59904);
var state_59939__$1 = (function (){var statearr_59944 = state_59939;
(statearr_59944[(9)] = inst_59903__$1);

return statearr_59944;
})();
if(inst_59905){
var statearr_59945_59970 = state_59939__$1;
(statearr_59945_59970[(1)] = (5));

} else {
var statearr_59946_59971 = state_59939__$1;
(statearr_59946_59971[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59940 === (15))){
var inst_59929 = (state_59939[(2)]);
var state_59939__$1 = state_59939;
var statearr_59947_59972 = state_59939__$1;
(statearr_59947_59972[(2)] = inst_59929);

(statearr_59947_59972[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59940 === (13))){
var state_59939__$1 = state_59939;
var statearr_59948_59973 = state_59939__$1;
(statearr_59948_59973[(2)] = null);

(statearr_59948_59973[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59940 === (6))){
var inst_59899 = (state_59939[(7)]);
var inst_59924 = inst_59899.length;
var inst_59925 = (inst_59924 > (0));
var state_59939__$1 = state_59939;
if(cljs.core.truth_(inst_59925)){
var statearr_59949_59974 = state_59939__$1;
(statearr_59949_59974[(1)] = (12));

} else {
var statearr_59950_59975 = state_59939__$1;
(statearr_59950_59975[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59940 === (3))){
var inst_59937 = (state_59939[(2)]);
var state_59939__$1 = state_59939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59939__$1,inst_59937);
} else {
if((state_val_59940 === (12))){
var inst_59899 = (state_59939[(7)]);
var inst_59927 = cljs.core.vec.call(null,inst_59899);
var state_59939__$1 = state_59939;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59939__$1,(15),out,inst_59927);
} else {
if((state_val_59940 === (2))){
var state_59939__$1 = state_59939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59939__$1,(4),ch);
} else {
if((state_val_59940 === (11))){
var inst_59907 = (state_59939[(10)]);
var inst_59903 = (state_59939[(9)]);
var inst_59917 = (state_59939[(2)]);
var inst_59918 = [];
var inst_59919 = inst_59918.push(inst_59903);
var inst_59899 = inst_59918;
var inst_59900 = inst_59907;
var state_59939__$1 = (function (){var statearr_59951 = state_59939;
(statearr_59951[(11)] = inst_59917);

(statearr_59951[(7)] = inst_59899);

(statearr_59951[(12)] = inst_59919);

(statearr_59951[(8)] = inst_59900);

return statearr_59951;
})();
var statearr_59952_59976 = state_59939__$1;
(statearr_59952_59976[(2)] = null);

(statearr_59952_59976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59940 === (9))){
var inst_59899 = (state_59939[(7)]);
var inst_59915 = cljs.core.vec.call(null,inst_59899);
var state_59939__$1 = state_59939;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59939__$1,(11),out,inst_59915);
} else {
if((state_val_59940 === (5))){
var inst_59907 = (state_59939[(10)]);
var inst_59903 = (state_59939[(9)]);
var inst_59900 = (state_59939[(8)]);
var inst_59907__$1 = f.call(null,inst_59903);
var inst_59908 = cljs.core._EQ_.call(null,inst_59907__$1,inst_59900);
var inst_59909 = cljs.core.keyword_identical_QMARK_.call(null,inst_59900,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_59910 = (inst_59908) || (inst_59909);
var state_59939__$1 = (function (){var statearr_59953 = state_59939;
(statearr_59953[(10)] = inst_59907__$1);

return statearr_59953;
})();
if(cljs.core.truth_(inst_59910)){
var statearr_59954_59977 = state_59939__$1;
(statearr_59954_59977[(1)] = (8));

} else {
var statearr_59955_59978 = state_59939__$1;
(statearr_59955_59978[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59940 === (14))){
var inst_59932 = (state_59939[(2)]);
var inst_59933 = cljs.core.async.close_BANG_.call(null,out);
var state_59939__$1 = (function (){var statearr_59957 = state_59939;
(statearr_59957[(13)] = inst_59932);

return statearr_59957;
})();
var statearr_59958_59979 = state_59939__$1;
(statearr_59958_59979[(2)] = inst_59933);

(statearr_59958_59979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59940 === (10))){
var inst_59922 = (state_59939[(2)]);
var state_59939__$1 = state_59939;
var statearr_59959_59980 = state_59939__$1;
(statearr_59959_59980[(2)] = inst_59922);

(statearr_59959_59980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59940 === (8))){
var inst_59907 = (state_59939[(10)]);
var inst_59903 = (state_59939[(9)]);
var inst_59899 = (state_59939[(7)]);
var inst_59912 = inst_59899.push(inst_59903);
var tmp59956 = inst_59899;
var inst_59899__$1 = tmp59956;
var inst_59900 = inst_59907;
var state_59939__$1 = (function (){var statearr_59960 = state_59939;
(statearr_59960[(14)] = inst_59912);

(statearr_59960[(7)] = inst_59899__$1);

(statearr_59960[(8)] = inst_59900);

return statearr_59960;
})();
var statearr_59961_59981 = state_59939__$1;
(statearr_59961_59981[(2)] = null);

(statearr_59961_59981[(1)] = (2));


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
});})(c__58063__auto___59967,out))
;
return ((function (switch__57973__auto__,c__58063__auto___59967,out){
return (function() {
var cljs$core$async$state_machine__57974__auto__ = null;
var cljs$core$async$state_machine__57974__auto____0 = (function (){
var statearr_59962 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59962[(0)] = cljs$core$async$state_machine__57974__auto__);

(statearr_59962[(1)] = (1));

return statearr_59962;
});
var cljs$core$async$state_machine__57974__auto____1 = (function (state_59939){
while(true){
var ret_value__57975__auto__ = (function (){try{while(true){
var result__57976__auto__ = switch__57973__auto__.call(null,state_59939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__57976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__57976__auto__;
}
break;
}
}catch (e59963){if((e59963 instanceof Object)){
var ex__57977__auto__ = e59963;
var statearr_59964_59982 = state_59939;
(statearr_59964_59982[(5)] = ex__57977__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59963;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__57975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59983 = state_59939;
state_59939 = G__59983;
continue;
} else {
return ret_value__57975__auto__;
}
break;
}
});
cljs$core$async$state_machine__57974__auto__ = function(state_59939){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__57974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__57974__auto____1.call(this,state_59939);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__57974__auto____0;
cljs$core$async$state_machine__57974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__57974__auto____1;
return cljs$core$async$state_machine__57974__auto__;
})()
;})(switch__57973__auto__,c__58063__auto___59967,out))
})();
var state__58065__auto__ = (function (){var statearr_59965 = f__58064__auto__.call(null);
(statearr_59965[(6)] = c__58063__auto___59967);

return statearr_59965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__58065__auto__);
});})(c__58063__auto___59967,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1524702417452
