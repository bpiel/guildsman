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
var G__79149 = arguments.length;
switch (G__79149) {
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
if(typeof cljs.core.async.t_cljs$core$async79150 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async79150 = (function (f,blockable,meta79151){
this.f = f;
this.blockable = blockable;
this.meta79151 = meta79151;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async79150.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_79152,meta79151__$1){
var self__ = this;
var _79152__$1 = this;
return (new cljs.core.async.t_cljs$core$async79150(self__.f,self__.blockable,meta79151__$1));
});

cljs.core.async.t_cljs$core$async79150.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_79152){
var self__ = this;
var _79152__$1 = this;
return self__.meta79151;
});

cljs.core.async.t_cljs$core$async79150.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async79150.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async79150.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async79150.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async79150.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta79151","meta79151",-1749371229,null)], null);
});

cljs.core.async.t_cljs$core$async79150.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async79150.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async79150";

cljs.core.async.t_cljs$core$async79150.cljs$lang$ctorPrWriter = (function (this__75572__auto__,writer__75573__auto__,opt__75574__auto__){
return cljs.core._write.call(null,writer__75573__auto__,"cljs.core.async/t_cljs$core$async79150");
});

cljs.core.async.__GT_t_cljs$core$async79150 = (function cljs$core$async$__GT_t_cljs$core$async79150(f__$1,blockable__$1,meta79151){
return (new cljs.core.async.t_cljs$core$async79150(f__$1,blockable__$1,meta79151));
});

}

return (new cljs.core.async.t_cljs$core$async79150(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__79156 = arguments.length;
switch (G__79156) {
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
var G__79159 = arguments.length;
switch (G__79159) {
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
var G__79162 = arguments.length;
switch (G__79162) {
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
var val_79164 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_79164);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_79164,ret){
return (function (){
return fn1.call(null,val_79164);
});})(val_79164,ret))
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
var G__79166 = arguments.length;
switch (G__79166) {
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
var n__75944__auto___79168 = n;
var x_79169 = (0);
while(true){
if((x_79169 < n__75944__auto___79168)){
(a[x_79169] = (0));

var G__79170 = (x_79169 + (1));
x_79169 = G__79170;
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

var G__79171 = (i + (1));
i = G__79171;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async79172 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async79172 = (function (flag,meta79173){
this.flag = flag;
this.meta79173 = meta79173;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async79172.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_79174,meta79173__$1){
var self__ = this;
var _79174__$1 = this;
return (new cljs.core.async.t_cljs$core$async79172(self__.flag,meta79173__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async79172.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_79174){
var self__ = this;
var _79174__$1 = this;
return self__.meta79173;
});})(flag))
;

cljs.core.async.t_cljs$core$async79172.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async79172.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async79172.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async79172.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async79172.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta79173","meta79173",759216785,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async79172.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async79172.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async79172";

cljs.core.async.t_cljs$core$async79172.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__75572__auto__,writer__75573__auto__,opt__75574__auto__){
return cljs.core._write.call(null,writer__75573__auto__,"cljs.core.async/t_cljs$core$async79172");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async79172 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async79172(flag__$1,meta79173){
return (new cljs.core.async.t_cljs$core$async79172(flag__$1,meta79173));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async79172(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async79175 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async79175 = (function (flag,cb,meta79176){
this.flag = flag;
this.cb = cb;
this.meta79176 = meta79176;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async79175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_79177,meta79176__$1){
var self__ = this;
var _79177__$1 = this;
return (new cljs.core.async.t_cljs$core$async79175(self__.flag,self__.cb,meta79176__$1));
});

cljs.core.async.t_cljs$core$async79175.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_79177){
var self__ = this;
var _79177__$1 = this;
return self__.meta79176;
});

cljs.core.async.t_cljs$core$async79175.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async79175.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async79175.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async79175.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async79175.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta79176","meta79176",-813861804,null)], null);
});

cljs.core.async.t_cljs$core$async79175.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async79175.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async79175";

cljs.core.async.t_cljs$core$async79175.cljs$lang$ctorPrWriter = (function (this__75572__auto__,writer__75573__auto__,opt__75574__auto__){
return cljs.core._write.call(null,writer__75573__auto__,"cljs.core.async/t_cljs$core$async79175");
});

cljs.core.async.__GT_t_cljs$core$async79175 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async79175(flag__$1,cb__$1,meta79176){
return (new cljs.core.async.t_cljs$core$async79175(flag__$1,cb__$1,meta79176));
});

}

return (new cljs.core.async.t_cljs$core$async79175(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__79178_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__79178_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__79179_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__79179_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__74901__auto__ = wport;
if(cljs.core.truth_(or__74901__auto__)){
return or__74901__auto__;
} else {
return port;
}
})()], null));
} else {
var G__79180 = (i + (1));
i = G__79180;
continue;
}
} else {
return null;
}
break;
}
})();
var or__74901__auto__ = ret;
if(cljs.core.truth_(or__74901__auto__)){
return or__74901__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__74889__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__74889__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__74889__auto__;
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
var args__76185__auto__ = [];
var len__76178__auto___79186 = arguments.length;
var i__76179__auto___79187 = (0);
while(true){
if((i__76179__auto___79187 < len__76178__auto___79186)){
args__76185__auto__.push((arguments[i__76179__auto___79187]));

var G__79188 = (i__76179__auto___79187 + (1));
i__76179__auto___79187 = G__79188;
continue;
} else {
}
break;
}

var argseq__76186__auto__ = ((((1) < args__76185__auto__.length))?(new cljs.core.IndexedSeq(args__76185__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__76186__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__79183){
var map__79184 = p__79183;
var map__79184__$1 = ((((!((map__79184 == null)))?((((map__79184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79184.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79184):map__79184);
var opts = map__79184__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq79181){
var G__79182 = cljs.core.first.call(null,seq79181);
var seq79181__$1 = cljs.core.next.call(null,seq79181);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__79182,seq79181__$1);
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
var G__79190 = arguments.length;
switch (G__79190) {
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
var c__79089__auto___79236 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__79089__auto___79236){
return (function (){
var f__79090__auto__ = (function (){var switch__78999__auto__ = ((function (c__79089__auto___79236){
return (function (state_79214){
var state_val_79215 = (state_79214[(1)]);
if((state_val_79215 === (7))){
var inst_79210 = (state_79214[(2)]);
var state_79214__$1 = state_79214;
var statearr_79216_79237 = state_79214__$1;
(statearr_79216_79237[(2)] = inst_79210);

(statearr_79216_79237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79215 === (1))){
var state_79214__$1 = state_79214;
var statearr_79217_79238 = state_79214__$1;
(statearr_79217_79238[(2)] = null);

(statearr_79217_79238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79215 === (4))){
var inst_79193 = (state_79214[(7)]);
var inst_79193__$1 = (state_79214[(2)]);
var inst_79194 = (inst_79193__$1 == null);
var state_79214__$1 = (function (){var statearr_79218 = state_79214;
(statearr_79218[(7)] = inst_79193__$1);

return statearr_79218;
})();
if(cljs.core.truth_(inst_79194)){
var statearr_79219_79239 = state_79214__$1;
(statearr_79219_79239[(1)] = (5));

} else {
var statearr_79220_79240 = state_79214__$1;
(statearr_79220_79240[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79215 === (13))){
var state_79214__$1 = state_79214;
var statearr_79221_79241 = state_79214__$1;
(statearr_79221_79241[(2)] = null);

(statearr_79221_79241[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79215 === (6))){
var inst_79193 = (state_79214[(7)]);
var state_79214__$1 = state_79214;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_79214__$1,(11),to,inst_79193);
} else {
if((state_val_79215 === (3))){
var inst_79212 = (state_79214[(2)]);
var state_79214__$1 = state_79214;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79214__$1,inst_79212);
} else {
if((state_val_79215 === (12))){
var state_79214__$1 = state_79214;
var statearr_79222_79242 = state_79214__$1;
(statearr_79222_79242[(2)] = null);

(statearr_79222_79242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79215 === (2))){
var state_79214__$1 = state_79214;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79214__$1,(4),from);
} else {
if((state_val_79215 === (11))){
var inst_79203 = (state_79214[(2)]);
var state_79214__$1 = state_79214;
if(cljs.core.truth_(inst_79203)){
var statearr_79223_79243 = state_79214__$1;
(statearr_79223_79243[(1)] = (12));

} else {
var statearr_79224_79244 = state_79214__$1;
(statearr_79224_79244[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79215 === (9))){
var state_79214__$1 = state_79214;
var statearr_79225_79245 = state_79214__$1;
(statearr_79225_79245[(2)] = null);

(statearr_79225_79245[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79215 === (5))){
var state_79214__$1 = state_79214;
if(cljs.core.truth_(close_QMARK_)){
var statearr_79226_79246 = state_79214__$1;
(statearr_79226_79246[(1)] = (8));

} else {
var statearr_79227_79247 = state_79214__$1;
(statearr_79227_79247[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79215 === (14))){
var inst_79208 = (state_79214[(2)]);
var state_79214__$1 = state_79214;
var statearr_79228_79248 = state_79214__$1;
(statearr_79228_79248[(2)] = inst_79208);

(statearr_79228_79248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79215 === (10))){
var inst_79200 = (state_79214[(2)]);
var state_79214__$1 = state_79214;
var statearr_79229_79249 = state_79214__$1;
(statearr_79229_79249[(2)] = inst_79200);

(statearr_79229_79249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79215 === (8))){
var inst_79197 = cljs.core.async.close_BANG_.call(null,to);
var state_79214__$1 = state_79214;
var statearr_79230_79250 = state_79214__$1;
(statearr_79230_79250[(2)] = inst_79197);

(statearr_79230_79250[(1)] = (10));


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
});})(c__79089__auto___79236))
;
return ((function (switch__78999__auto__,c__79089__auto___79236){
return (function() {
var cljs$core$async$state_machine__79000__auto__ = null;
var cljs$core$async$state_machine__79000__auto____0 = (function (){
var statearr_79231 = [null,null,null,null,null,null,null,null];
(statearr_79231[(0)] = cljs$core$async$state_machine__79000__auto__);

(statearr_79231[(1)] = (1));

return statearr_79231;
});
var cljs$core$async$state_machine__79000__auto____1 = (function (state_79214){
while(true){
var ret_value__79001__auto__ = (function (){try{while(true){
var result__79002__auto__ = switch__78999__auto__.call(null,state_79214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__79002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__79002__auto__;
}
break;
}
}catch (e79232){if((e79232 instanceof Object)){
var ex__79003__auto__ = e79232;
var statearr_79233_79251 = state_79214;
(statearr_79233_79251[(5)] = ex__79003__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__79001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79252 = state_79214;
state_79214 = G__79252;
continue;
} else {
return ret_value__79001__auto__;
}
break;
}
});
cljs$core$async$state_machine__79000__auto__ = function(state_79214){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__79000__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__79000__auto____1.call(this,state_79214);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__79000__auto____0;
cljs$core$async$state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__79000__auto____1;
return cljs$core$async$state_machine__79000__auto__;
})()
;})(switch__78999__auto__,c__79089__auto___79236))
})();
var state__79091__auto__ = (function (){var statearr_79234 = f__79090__auto__.call(null);
(statearr_79234[(6)] = c__79089__auto___79236);

return statearr_79234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__79091__auto__);
});})(c__79089__auto___79236))
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
return (function (p__79253){
var vec__79254 = p__79253;
var v = cljs.core.nth.call(null,vec__79254,(0),null);
var p = cljs.core.nth.call(null,vec__79254,(1),null);
var job = vec__79254;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__79089__auto___79425 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__79089__auto___79425,res,vec__79254,v,p,job,jobs,results){
return (function (){
var f__79090__auto__ = (function (){var switch__78999__auto__ = ((function (c__79089__auto___79425,res,vec__79254,v,p,job,jobs,results){
return (function (state_79261){
var state_val_79262 = (state_79261[(1)]);
if((state_val_79262 === (1))){
var state_79261__$1 = state_79261;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_79261__$1,(2),res,v);
} else {
if((state_val_79262 === (2))){
var inst_79258 = (state_79261[(2)]);
var inst_79259 = cljs.core.async.close_BANG_.call(null,res);
var state_79261__$1 = (function (){var statearr_79263 = state_79261;
(statearr_79263[(7)] = inst_79258);

return statearr_79263;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79261__$1,inst_79259);
} else {
return null;
}
}
});})(c__79089__auto___79425,res,vec__79254,v,p,job,jobs,results))
;
return ((function (switch__78999__auto__,c__79089__auto___79425,res,vec__79254,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__79000__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__79000__auto____0 = (function (){
var statearr_79264 = [null,null,null,null,null,null,null,null];
(statearr_79264[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__79000__auto__);

(statearr_79264[(1)] = (1));

return statearr_79264;
});
var cljs$core$async$pipeline_STAR__$_state_machine__79000__auto____1 = (function (state_79261){
while(true){
var ret_value__79001__auto__ = (function (){try{while(true){
var result__79002__auto__ = switch__78999__auto__.call(null,state_79261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__79002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__79002__auto__;
}
break;
}
}catch (e79265){if((e79265 instanceof Object)){
var ex__79003__auto__ = e79265;
var statearr_79266_79426 = state_79261;
(statearr_79266_79426[(5)] = ex__79003__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__79001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79427 = state_79261;
state_79261 = G__79427;
continue;
} else {
return ret_value__79001__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__79000__auto__ = function(state_79261){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__79000__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__79000__auto____1.call(this,state_79261);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__79000__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__79000__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__79000__auto__;
})()
;})(switch__78999__auto__,c__79089__auto___79425,res,vec__79254,v,p,job,jobs,results))
})();
var state__79091__auto__ = (function (){var statearr_79267 = f__79090__auto__.call(null);
(statearr_79267[(6)] = c__79089__auto___79425);

return statearr_79267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__79091__auto__);
});})(c__79089__auto___79425,res,vec__79254,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__79268){
var vec__79269 = p__79268;
var v = cljs.core.nth.call(null,vec__79269,(0),null);
var p = cljs.core.nth.call(null,vec__79269,(1),null);
var job = vec__79269;
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
var n__75944__auto___79428 = n;
var __79429 = (0);
while(true){
if((__79429 < n__75944__auto___79428)){
var G__79272_79430 = type;
var G__79272_79431__$1 = (((G__79272_79430 instanceof cljs.core.Keyword))?G__79272_79430.fqn:null);
switch (G__79272_79431__$1) {
case "compute":
var c__79089__auto___79433 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__79429,c__79089__auto___79433,G__79272_79430,G__79272_79431__$1,n__75944__auto___79428,jobs,results,process,async){
return (function (){
var f__79090__auto__ = (function (){var switch__78999__auto__ = ((function (__79429,c__79089__auto___79433,G__79272_79430,G__79272_79431__$1,n__75944__auto___79428,jobs,results,process,async){
return (function (state_79285){
var state_val_79286 = (state_79285[(1)]);
if((state_val_79286 === (1))){
var state_79285__$1 = state_79285;
var statearr_79287_79434 = state_79285__$1;
(statearr_79287_79434[(2)] = null);

(statearr_79287_79434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79286 === (2))){
var state_79285__$1 = state_79285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79285__$1,(4),jobs);
} else {
if((state_val_79286 === (3))){
var inst_79283 = (state_79285[(2)]);
var state_79285__$1 = state_79285;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79285__$1,inst_79283);
} else {
if((state_val_79286 === (4))){
var inst_79275 = (state_79285[(2)]);
var inst_79276 = process.call(null,inst_79275);
var state_79285__$1 = state_79285;
if(cljs.core.truth_(inst_79276)){
var statearr_79288_79435 = state_79285__$1;
(statearr_79288_79435[(1)] = (5));

} else {
var statearr_79289_79436 = state_79285__$1;
(statearr_79289_79436[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79286 === (5))){
var state_79285__$1 = state_79285;
var statearr_79290_79437 = state_79285__$1;
(statearr_79290_79437[(2)] = null);

(statearr_79290_79437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79286 === (6))){
var state_79285__$1 = state_79285;
var statearr_79291_79438 = state_79285__$1;
(statearr_79291_79438[(2)] = null);

(statearr_79291_79438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79286 === (7))){
var inst_79281 = (state_79285[(2)]);
var state_79285__$1 = state_79285;
var statearr_79292_79439 = state_79285__$1;
(statearr_79292_79439[(2)] = inst_79281);

(statearr_79292_79439[(1)] = (3));


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
});})(__79429,c__79089__auto___79433,G__79272_79430,G__79272_79431__$1,n__75944__auto___79428,jobs,results,process,async))
;
return ((function (__79429,switch__78999__auto__,c__79089__auto___79433,G__79272_79430,G__79272_79431__$1,n__75944__auto___79428,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__79000__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__79000__auto____0 = (function (){
var statearr_79293 = [null,null,null,null,null,null,null];
(statearr_79293[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__79000__auto__);

(statearr_79293[(1)] = (1));

return statearr_79293;
});
var cljs$core$async$pipeline_STAR__$_state_machine__79000__auto____1 = (function (state_79285){
while(true){
var ret_value__79001__auto__ = (function (){try{while(true){
var result__79002__auto__ = switch__78999__auto__.call(null,state_79285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__79002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__79002__auto__;
}
break;
}
}catch (e79294){if((e79294 instanceof Object)){
var ex__79003__auto__ = e79294;
var statearr_79295_79440 = state_79285;
(statearr_79295_79440[(5)] = ex__79003__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79294;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__79001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79441 = state_79285;
state_79285 = G__79441;
continue;
} else {
return ret_value__79001__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__79000__auto__ = function(state_79285){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__79000__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__79000__auto____1.call(this,state_79285);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__79000__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__79000__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__79000__auto__;
})()
;})(__79429,switch__78999__auto__,c__79089__auto___79433,G__79272_79430,G__79272_79431__$1,n__75944__auto___79428,jobs,results,process,async))
})();
var state__79091__auto__ = (function (){var statearr_79296 = f__79090__auto__.call(null);
(statearr_79296[(6)] = c__79089__auto___79433);

return statearr_79296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__79091__auto__);
});})(__79429,c__79089__auto___79433,G__79272_79430,G__79272_79431__$1,n__75944__auto___79428,jobs,results,process,async))
);


break;
case "async":
var c__79089__auto___79442 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__79429,c__79089__auto___79442,G__79272_79430,G__79272_79431__$1,n__75944__auto___79428,jobs,results,process,async){
return (function (){
var f__79090__auto__ = (function (){var switch__78999__auto__ = ((function (__79429,c__79089__auto___79442,G__79272_79430,G__79272_79431__$1,n__75944__auto___79428,jobs,results,process,async){
return (function (state_79309){
var state_val_79310 = (state_79309[(1)]);
if((state_val_79310 === (1))){
var state_79309__$1 = state_79309;
var statearr_79311_79443 = state_79309__$1;
(statearr_79311_79443[(2)] = null);

(statearr_79311_79443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79310 === (2))){
var state_79309__$1 = state_79309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79309__$1,(4),jobs);
} else {
if((state_val_79310 === (3))){
var inst_79307 = (state_79309[(2)]);
var state_79309__$1 = state_79309;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79309__$1,inst_79307);
} else {
if((state_val_79310 === (4))){
var inst_79299 = (state_79309[(2)]);
var inst_79300 = async.call(null,inst_79299);
var state_79309__$1 = state_79309;
if(cljs.core.truth_(inst_79300)){
var statearr_79312_79444 = state_79309__$1;
(statearr_79312_79444[(1)] = (5));

} else {
var statearr_79313_79445 = state_79309__$1;
(statearr_79313_79445[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79310 === (5))){
var state_79309__$1 = state_79309;
var statearr_79314_79446 = state_79309__$1;
(statearr_79314_79446[(2)] = null);

(statearr_79314_79446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79310 === (6))){
var state_79309__$1 = state_79309;
var statearr_79315_79447 = state_79309__$1;
(statearr_79315_79447[(2)] = null);

(statearr_79315_79447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79310 === (7))){
var inst_79305 = (state_79309[(2)]);
var state_79309__$1 = state_79309;
var statearr_79316_79448 = state_79309__$1;
(statearr_79316_79448[(2)] = inst_79305);

(statearr_79316_79448[(1)] = (3));


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
});})(__79429,c__79089__auto___79442,G__79272_79430,G__79272_79431__$1,n__75944__auto___79428,jobs,results,process,async))
;
return ((function (__79429,switch__78999__auto__,c__79089__auto___79442,G__79272_79430,G__79272_79431__$1,n__75944__auto___79428,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__79000__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__79000__auto____0 = (function (){
var statearr_79317 = [null,null,null,null,null,null,null];
(statearr_79317[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__79000__auto__);

(statearr_79317[(1)] = (1));

return statearr_79317;
});
var cljs$core$async$pipeline_STAR__$_state_machine__79000__auto____1 = (function (state_79309){
while(true){
var ret_value__79001__auto__ = (function (){try{while(true){
var result__79002__auto__ = switch__78999__auto__.call(null,state_79309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__79002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__79002__auto__;
}
break;
}
}catch (e79318){if((e79318 instanceof Object)){
var ex__79003__auto__ = e79318;
var statearr_79319_79449 = state_79309;
(statearr_79319_79449[(5)] = ex__79003__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__79001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79450 = state_79309;
state_79309 = G__79450;
continue;
} else {
return ret_value__79001__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__79000__auto__ = function(state_79309){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__79000__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__79000__auto____1.call(this,state_79309);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__79000__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__79000__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__79000__auto__;
})()
;})(__79429,switch__78999__auto__,c__79089__auto___79442,G__79272_79430,G__79272_79431__$1,n__75944__auto___79428,jobs,results,process,async))
})();
var state__79091__auto__ = (function (){var statearr_79320 = f__79090__auto__.call(null);
(statearr_79320[(6)] = c__79089__auto___79442);

return statearr_79320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__79091__auto__);
});})(__79429,c__79089__auto___79442,G__79272_79430,G__79272_79431__$1,n__75944__auto___79428,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__79272_79431__$1)].join('')));

}

var G__79451 = (__79429 + (1));
__79429 = G__79451;
continue;
} else {
}
break;
}

var c__79089__auto___79452 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__79089__auto___79452,jobs,results,process,async){
return (function (){
var f__79090__auto__ = (function (){var switch__78999__auto__ = ((function (c__79089__auto___79452,jobs,results,process,async){
return (function (state_79342){
var state_val_79343 = (state_79342[(1)]);
if((state_val_79343 === (1))){
var state_79342__$1 = state_79342;
var statearr_79344_79453 = state_79342__$1;
(statearr_79344_79453[(2)] = null);

(statearr_79344_79453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79343 === (2))){
var state_79342__$1 = state_79342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79342__$1,(4),from);
} else {
if((state_val_79343 === (3))){
var inst_79340 = (state_79342[(2)]);
var state_79342__$1 = state_79342;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79342__$1,inst_79340);
} else {
if((state_val_79343 === (4))){
var inst_79323 = (state_79342[(7)]);
var inst_79323__$1 = (state_79342[(2)]);
var inst_79324 = (inst_79323__$1 == null);
var state_79342__$1 = (function (){var statearr_79345 = state_79342;
(statearr_79345[(7)] = inst_79323__$1);

return statearr_79345;
})();
if(cljs.core.truth_(inst_79324)){
var statearr_79346_79454 = state_79342__$1;
(statearr_79346_79454[(1)] = (5));

} else {
var statearr_79347_79455 = state_79342__$1;
(statearr_79347_79455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79343 === (5))){
var inst_79326 = cljs.core.async.close_BANG_.call(null,jobs);
var state_79342__$1 = state_79342;
var statearr_79348_79456 = state_79342__$1;
(statearr_79348_79456[(2)] = inst_79326);

(statearr_79348_79456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79343 === (6))){
var inst_79323 = (state_79342[(7)]);
var inst_79328 = (state_79342[(8)]);
var inst_79328__$1 = cljs.core.async.chan.call(null,(1));
var inst_79329 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_79330 = [inst_79323,inst_79328__$1];
var inst_79331 = (new cljs.core.PersistentVector(null,2,(5),inst_79329,inst_79330,null));
var state_79342__$1 = (function (){var statearr_79349 = state_79342;
(statearr_79349[(8)] = inst_79328__$1);

return statearr_79349;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_79342__$1,(8),jobs,inst_79331);
} else {
if((state_val_79343 === (7))){
var inst_79338 = (state_79342[(2)]);
var state_79342__$1 = state_79342;
var statearr_79350_79457 = state_79342__$1;
(statearr_79350_79457[(2)] = inst_79338);

(statearr_79350_79457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79343 === (8))){
var inst_79328 = (state_79342[(8)]);
var inst_79333 = (state_79342[(2)]);
var state_79342__$1 = (function (){var statearr_79351 = state_79342;
(statearr_79351[(9)] = inst_79333);

return statearr_79351;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_79342__$1,(9),results,inst_79328);
} else {
if((state_val_79343 === (9))){
var inst_79335 = (state_79342[(2)]);
var state_79342__$1 = (function (){var statearr_79352 = state_79342;
(statearr_79352[(10)] = inst_79335);

return statearr_79352;
})();
var statearr_79353_79458 = state_79342__$1;
(statearr_79353_79458[(2)] = null);

(statearr_79353_79458[(1)] = (2));


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
});})(c__79089__auto___79452,jobs,results,process,async))
;
return ((function (switch__78999__auto__,c__79089__auto___79452,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__79000__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__79000__auto____0 = (function (){
var statearr_79354 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_79354[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__79000__auto__);

(statearr_79354[(1)] = (1));

return statearr_79354;
});
var cljs$core$async$pipeline_STAR__$_state_machine__79000__auto____1 = (function (state_79342){
while(true){
var ret_value__79001__auto__ = (function (){try{while(true){
var result__79002__auto__ = switch__78999__auto__.call(null,state_79342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__79002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__79002__auto__;
}
break;
}
}catch (e79355){if((e79355 instanceof Object)){
var ex__79003__auto__ = e79355;
var statearr_79356_79459 = state_79342;
(statearr_79356_79459[(5)] = ex__79003__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__79001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79460 = state_79342;
state_79342 = G__79460;
continue;
} else {
return ret_value__79001__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__79000__auto__ = function(state_79342){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__79000__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__79000__auto____1.call(this,state_79342);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__79000__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__79000__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__79000__auto__;
})()
;})(switch__78999__auto__,c__79089__auto___79452,jobs,results,process,async))
})();
var state__79091__auto__ = (function (){var statearr_79357 = f__79090__auto__.call(null);
(statearr_79357[(6)] = c__79089__auto___79452);

return statearr_79357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__79091__auto__);
});})(c__79089__auto___79452,jobs,results,process,async))
);


var c__79089__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__79089__auto__,jobs,results,process,async){
return (function (){
var f__79090__auto__ = (function (){var switch__78999__auto__ = ((function (c__79089__auto__,jobs,results,process,async){
return (function (state_79395){
var state_val_79396 = (state_79395[(1)]);
if((state_val_79396 === (7))){
var inst_79391 = (state_79395[(2)]);
var state_79395__$1 = state_79395;
var statearr_79397_79461 = state_79395__$1;
(statearr_79397_79461[(2)] = inst_79391);

(statearr_79397_79461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79396 === (20))){
var state_79395__$1 = state_79395;
var statearr_79398_79462 = state_79395__$1;
(statearr_79398_79462[(2)] = null);

(statearr_79398_79462[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79396 === (1))){
var state_79395__$1 = state_79395;
var statearr_79399_79463 = state_79395__$1;
(statearr_79399_79463[(2)] = null);

(statearr_79399_79463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79396 === (4))){
var inst_79360 = (state_79395[(7)]);
var inst_79360__$1 = (state_79395[(2)]);
var inst_79361 = (inst_79360__$1 == null);
var state_79395__$1 = (function (){var statearr_79400 = state_79395;
(statearr_79400[(7)] = inst_79360__$1);

return statearr_79400;
})();
if(cljs.core.truth_(inst_79361)){
var statearr_79401_79464 = state_79395__$1;
(statearr_79401_79464[(1)] = (5));

} else {
var statearr_79402_79465 = state_79395__$1;
(statearr_79402_79465[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79396 === (15))){
var inst_79373 = (state_79395[(8)]);
var state_79395__$1 = state_79395;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_79395__$1,(18),to,inst_79373);
} else {
if((state_val_79396 === (21))){
var inst_79386 = (state_79395[(2)]);
var state_79395__$1 = state_79395;
var statearr_79403_79466 = state_79395__$1;
(statearr_79403_79466[(2)] = inst_79386);

(statearr_79403_79466[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79396 === (13))){
var inst_79388 = (state_79395[(2)]);
var state_79395__$1 = (function (){var statearr_79404 = state_79395;
(statearr_79404[(9)] = inst_79388);

return statearr_79404;
})();
var statearr_79405_79467 = state_79395__$1;
(statearr_79405_79467[(2)] = null);

(statearr_79405_79467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79396 === (6))){
var inst_79360 = (state_79395[(7)]);
var state_79395__$1 = state_79395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79395__$1,(11),inst_79360);
} else {
if((state_val_79396 === (17))){
var inst_79381 = (state_79395[(2)]);
var state_79395__$1 = state_79395;
if(cljs.core.truth_(inst_79381)){
var statearr_79406_79468 = state_79395__$1;
(statearr_79406_79468[(1)] = (19));

} else {
var statearr_79407_79469 = state_79395__$1;
(statearr_79407_79469[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79396 === (3))){
var inst_79393 = (state_79395[(2)]);
var state_79395__$1 = state_79395;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79395__$1,inst_79393);
} else {
if((state_val_79396 === (12))){
var inst_79370 = (state_79395[(10)]);
var state_79395__$1 = state_79395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79395__$1,(14),inst_79370);
} else {
if((state_val_79396 === (2))){
var state_79395__$1 = state_79395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79395__$1,(4),results);
} else {
if((state_val_79396 === (19))){
var state_79395__$1 = state_79395;
var statearr_79408_79470 = state_79395__$1;
(statearr_79408_79470[(2)] = null);

(statearr_79408_79470[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79396 === (11))){
var inst_79370 = (state_79395[(2)]);
var state_79395__$1 = (function (){var statearr_79409 = state_79395;
(statearr_79409[(10)] = inst_79370);

return statearr_79409;
})();
var statearr_79410_79471 = state_79395__$1;
(statearr_79410_79471[(2)] = null);

(statearr_79410_79471[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79396 === (9))){
var state_79395__$1 = state_79395;
var statearr_79411_79472 = state_79395__$1;
(statearr_79411_79472[(2)] = null);

(statearr_79411_79472[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79396 === (5))){
var state_79395__$1 = state_79395;
if(cljs.core.truth_(close_QMARK_)){
var statearr_79412_79473 = state_79395__$1;
(statearr_79412_79473[(1)] = (8));

} else {
var statearr_79413_79474 = state_79395__$1;
(statearr_79413_79474[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79396 === (14))){
var inst_79373 = (state_79395[(8)]);
var inst_79375 = (state_79395[(11)]);
var inst_79373__$1 = (state_79395[(2)]);
var inst_79374 = (inst_79373__$1 == null);
var inst_79375__$1 = cljs.core.not.call(null,inst_79374);
var state_79395__$1 = (function (){var statearr_79414 = state_79395;
(statearr_79414[(8)] = inst_79373__$1);

(statearr_79414[(11)] = inst_79375__$1);

return statearr_79414;
})();
if(inst_79375__$1){
var statearr_79415_79475 = state_79395__$1;
(statearr_79415_79475[(1)] = (15));

} else {
var statearr_79416_79476 = state_79395__$1;
(statearr_79416_79476[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79396 === (16))){
var inst_79375 = (state_79395[(11)]);
var state_79395__$1 = state_79395;
var statearr_79417_79477 = state_79395__$1;
(statearr_79417_79477[(2)] = inst_79375);

(statearr_79417_79477[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79396 === (10))){
var inst_79367 = (state_79395[(2)]);
var state_79395__$1 = state_79395;
var statearr_79418_79478 = state_79395__$1;
(statearr_79418_79478[(2)] = inst_79367);

(statearr_79418_79478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79396 === (18))){
var inst_79378 = (state_79395[(2)]);
var state_79395__$1 = state_79395;
var statearr_79419_79479 = state_79395__$1;
(statearr_79419_79479[(2)] = inst_79378);

(statearr_79419_79479[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79396 === (8))){
var inst_79364 = cljs.core.async.close_BANG_.call(null,to);
var state_79395__$1 = state_79395;
var statearr_79420_79480 = state_79395__$1;
(statearr_79420_79480[(2)] = inst_79364);

(statearr_79420_79480[(1)] = (10));


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
});})(c__79089__auto__,jobs,results,process,async))
;
return ((function (switch__78999__auto__,c__79089__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__79000__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__79000__auto____0 = (function (){
var statearr_79421 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_79421[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__79000__auto__);

(statearr_79421[(1)] = (1));

return statearr_79421;
});
var cljs$core$async$pipeline_STAR__$_state_machine__79000__auto____1 = (function (state_79395){
while(true){
var ret_value__79001__auto__ = (function (){try{while(true){
var result__79002__auto__ = switch__78999__auto__.call(null,state_79395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__79002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__79002__auto__;
}
break;
}
}catch (e79422){if((e79422 instanceof Object)){
var ex__79003__auto__ = e79422;
var statearr_79423_79481 = state_79395;
(statearr_79423_79481[(5)] = ex__79003__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__79001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79482 = state_79395;
state_79395 = G__79482;
continue;
} else {
return ret_value__79001__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__79000__auto__ = function(state_79395){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__79000__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__79000__auto____1.call(this,state_79395);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__79000__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__79000__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__79000__auto__;
})()
;})(switch__78999__auto__,c__79089__auto__,jobs,results,process,async))
})();
var state__79091__auto__ = (function (){var statearr_79424 = f__79090__auto__.call(null);
(statearr_79424[(6)] = c__79089__auto__);

return statearr_79424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__79091__auto__);
});})(c__79089__auto__,jobs,results,process,async))
);

return c__79089__auto__;
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
var G__79484 = arguments.length;
switch (G__79484) {
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
var G__79487 = arguments.length;
switch (G__79487) {
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
var G__79490 = arguments.length;
switch (G__79490) {
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
var c__79089__auto___79539 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__79089__auto___79539,tc,fc){
return (function (){
var f__79090__auto__ = (function (){var switch__78999__auto__ = ((function (c__79089__auto___79539,tc,fc){
return (function (state_79516){
var state_val_79517 = (state_79516[(1)]);
if((state_val_79517 === (7))){
var inst_79512 = (state_79516[(2)]);
var state_79516__$1 = state_79516;
var statearr_79518_79540 = state_79516__$1;
(statearr_79518_79540[(2)] = inst_79512);

(statearr_79518_79540[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79517 === (1))){
var state_79516__$1 = state_79516;
var statearr_79519_79541 = state_79516__$1;
(statearr_79519_79541[(2)] = null);

(statearr_79519_79541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79517 === (4))){
var inst_79493 = (state_79516[(7)]);
var inst_79493__$1 = (state_79516[(2)]);
var inst_79494 = (inst_79493__$1 == null);
var state_79516__$1 = (function (){var statearr_79520 = state_79516;
(statearr_79520[(7)] = inst_79493__$1);

return statearr_79520;
})();
if(cljs.core.truth_(inst_79494)){
var statearr_79521_79542 = state_79516__$1;
(statearr_79521_79542[(1)] = (5));

} else {
var statearr_79522_79543 = state_79516__$1;
(statearr_79522_79543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79517 === (13))){
var state_79516__$1 = state_79516;
var statearr_79523_79544 = state_79516__$1;
(statearr_79523_79544[(2)] = null);

(statearr_79523_79544[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79517 === (6))){
var inst_79493 = (state_79516[(7)]);
var inst_79499 = p.call(null,inst_79493);
var state_79516__$1 = state_79516;
if(cljs.core.truth_(inst_79499)){
var statearr_79524_79545 = state_79516__$1;
(statearr_79524_79545[(1)] = (9));

} else {
var statearr_79525_79546 = state_79516__$1;
(statearr_79525_79546[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79517 === (3))){
var inst_79514 = (state_79516[(2)]);
var state_79516__$1 = state_79516;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79516__$1,inst_79514);
} else {
if((state_val_79517 === (12))){
var state_79516__$1 = state_79516;
var statearr_79526_79547 = state_79516__$1;
(statearr_79526_79547[(2)] = null);

(statearr_79526_79547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79517 === (2))){
var state_79516__$1 = state_79516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79516__$1,(4),ch);
} else {
if((state_val_79517 === (11))){
var inst_79493 = (state_79516[(7)]);
var inst_79503 = (state_79516[(2)]);
var state_79516__$1 = state_79516;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_79516__$1,(8),inst_79503,inst_79493);
} else {
if((state_val_79517 === (9))){
var state_79516__$1 = state_79516;
var statearr_79527_79548 = state_79516__$1;
(statearr_79527_79548[(2)] = tc);

(statearr_79527_79548[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79517 === (5))){
var inst_79496 = cljs.core.async.close_BANG_.call(null,tc);
var inst_79497 = cljs.core.async.close_BANG_.call(null,fc);
var state_79516__$1 = (function (){var statearr_79528 = state_79516;
(statearr_79528[(8)] = inst_79496);

return statearr_79528;
})();
var statearr_79529_79549 = state_79516__$1;
(statearr_79529_79549[(2)] = inst_79497);

(statearr_79529_79549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79517 === (14))){
var inst_79510 = (state_79516[(2)]);
var state_79516__$1 = state_79516;
var statearr_79530_79550 = state_79516__$1;
(statearr_79530_79550[(2)] = inst_79510);

(statearr_79530_79550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79517 === (10))){
var state_79516__$1 = state_79516;
var statearr_79531_79551 = state_79516__$1;
(statearr_79531_79551[(2)] = fc);

(statearr_79531_79551[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79517 === (8))){
var inst_79505 = (state_79516[(2)]);
var state_79516__$1 = state_79516;
if(cljs.core.truth_(inst_79505)){
var statearr_79532_79552 = state_79516__$1;
(statearr_79532_79552[(1)] = (12));

} else {
var statearr_79533_79553 = state_79516__$1;
(statearr_79533_79553[(1)] = (13));

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
});})(c__79089__auto___79539,tc,fc))
;
return ((function (switch__78999__auto__,c__79089__auto___79539,tc,fc){
return (function() {
var cljs$core$async$state_machine__79000__auto__ = null;
var cljs$core$async$state_machine__79000__auto____0 = (function (){
var statearr_79534 = [null,null,null,null,null,null,null,null,null];
(statearr_79534[(0)] = cljs$core$async$state_machine__79000__auto__);

(statearr_79534[(1)] = (1));

return statearr_79534;
});
var cljs$core$async$state_machine__79000__auto____1 = (function (state_79516){
while(true){
var ret_value__79001__auto__ = (function (){try{while(true){
var result__79002__auto__ = switch__78999__auto__.call(null,state_79516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__79002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__79002__auto__;
}
break;
}
}catch (e79535){if((e79535 instanceof Object)){
var ex__79003__auto__ = e79535;
var statearr_79536_79554 = state_79516;
(statearr_79536_79554[(5)] = ex__79003__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__79001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79555 = state_79516;
state_79516 = G__79555;
continue;
} else {
return ret_value__79001__auto__;
}
break;
}
});
cljs$core$async$state_machine__79000__auto__ = function(state_79516){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__79000__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__79000__auto____1.call(this,state_79516);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__79000__auto____0;
cljs$core$async$state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__79000__auto____1;
return cljs$core$async$state_machine__79000__auto__;
})()
;})(switch__78999__auto__,c__79089__auto___79539,tc,fc))
})();
var state__79091__auto__ = (function (){var statearr_79537 = f__79090__auto__.call(null);
(statearr_79537[(6)] = c__79089__auto___79539);

return statearr_79537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__79091__auto__);
});})(c__79089__auto___79539,tc,fc))
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
var c__79089__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__79089__auto__){
return (function (){
var f__79090__auto__ = (function (){var switch__78999__auto__ = ((function (c__79089__auto__){
return (function (state_79576){
var state_val_79577 = (state_79576[(1)]);
if((state_val_79577 === (7))){
var inst_79572 = (state_79576[(2)]);
var state_79576__$1 = state_79576;
var statearr_79578_79596 = state_79576__$1;
(statearr_79578_79596[(2)] = inst_79572);

(statearr_79578_79596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79577 === (1))){
var inst_79556 = init;
var state_79576__$1 = (function (){var statearr_79579 = state_79576;
(statearr_79579[(7)] = inst_79556);

return statearr_79579;
})();
var statearr_79580_79597 = state_79576__$1;
(statearr_79580_79597[(2)] = null);

(statearr_79580_79597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79577 === (4))){
var inst_79559 = (state_79576[(8)]);
var inst_79559__$1 = (state_79576[(2)]);
var inst_79560 = (inst_79559__$1 == null);
var state_79576__$1 = (function (){var statearr_79581 = state_79576;
(statearr_79581[(8)] = inst_79559__$1);

return statearr_79581;
})();
if(cljs.core.truth_(inst_79560)){
var statearr_79582_79598 = state_79576__$1;
(statearr_79582_79598[(1)] = (5));

} else {
var statearr_79583_79599 = state_79576__$1;
(statearr_79583_79599[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79577 === (6))){
var inst_79563 = (state_79576[(9)]);
var inst_79556 = (state_79576[(7)]);
var inst_79559 = (state_79576[(8)]);
var inst_79563__$1 = f.call(null,inst_79556,inst_79559);
var inst_79564 = cljs.core.reduced_QMARK_.call(null,inst_79563__$1);
var state_79576__$1 = (function (){var statearr_79584 = state_79576;
(statearr_79584[(9)] = inst_79563__$1);

return statearr_79584;
})();
if(inst_79564){
var statearr_79585_79600 = state_79576__$1;
(statearr_79585_79600[(1)] = (8));

} else {
var statearr_79586_79601 = state_79576__$1;
(statearr_79586_79601[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79577 === (3))){
var inst_79574 = (state_79576[(2)]);
var state_79576__$1 = state_79576;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79576__$1,inst_79574);
} else {
if((state_val_79577 === (2))){
var state_79576__$1 = state_79576;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79576__$1,(4),ch);
} else {
if((state_val_79577 === (9))){
var inst_79563 = (state_79576[(9)]);
var inst_79556 = inst_79563;
var state_79576__$1 = (function (){var statearr_79587 = state_79576;
(statearr_79587[(7)] = inst_79556);

return statearr_79587;
})();
var statearr_79588_79602 = state_79576__$1;
(statearr_79588_79602[(2)] = null);

(statearr_79588_79602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79577 === (5))){
var inst_79556 = (state_79576[(7)]);
var state_79576__$1 = state_79576;
var statearr_79589_79603 = state_79576__$1;
(statearr_79589_79603[(2)] = inst_79556);

(statearr_79589_79603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79577 === (10))){
var inst_79570 = (state_79576[(2)]);
var state_79576__$1 = state_79576;
var statearr_79590_79604 = state_79576__$1;
(statearr_79590_79604[(2)] = inst_79570);

(statearr_79590_79604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79577 === (8))){
var inst_79563 = (state_79576[(9)]);
var inst_79566 = cljs.core.deref.call(null,inst_79563);
var state_79576__$1 = state_79576;
var statearr_79591_79605 = state_79576__$1;
(statearr_79591_79605[(2)] = inst_79566);

(statearr_79591_79605[(1)] = (10));


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
});})(c__79089__auto__))
;
return ((function (switch__78999__auto__,c__79089__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__79000__auto__ = null;
var cljs$core$async$reduce_$_state_machine__79000__auto____0 = (function (){
var statearr_79592 = [null,null,null,null,null,null,null,null,null,null];
(statearr_79592[(0)] = cljs$core$async$reduce_$_state_machine__79000__auto__);

(statearr_79592[(1)] = (1));

return statearr_79592;
});
var cljs$core$async$reduce_$_state_machine__79000__auto____1 = (function (state_79576){
while(true){
var ret_value__79001__auto__ = (function (){try{while(true){
var result__79002__auto__ = switch__78999__auto__.call(null,state_79576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__79002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__79002__auto__;
}
break;
}
}catch (e79593){if((e79593 instanceof Object)){
var ex__79003__auto__ = e79593;
var statearr_79594_79606 = state_79576;
(statearr_79594_79606[(5)] = ex__79003__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__79001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79607 = state_79576;
state_79576 = G__79607;
continue;
} else {
return ret_value__79001__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__79000__auto__ = function(state_79576){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__79000__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__79000__auto____1.call(this,state_79576);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__79000__auto____0;
cljs$core$async$reduce_$_state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__79000__auto____1;
return cljs$core$async$reduce_$_state_machine__79000__auto__;
})()
;})(switch__78999__auto__,c__79089__auto__))
})();
var state__79091__auto__ = (function (){var statearr_79595 = f__79090__auto__.call(null);
(statearr_79595[(6)] = c__79089__auto__);

return statearr_79595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__79091__auto__);
});})(c__79089__auto__))
);

return c__79089__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__79089__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__79089__auto__,f__$1){
return (function (){
var f__79090__auto__ = (function (){var switch__78999__auto__ = ((function (c__79089__auto__,f__$1){
return (function (state_79613){
var state_val_79614 = (state_79613[(1)]);
if((state_val_79614 === (1))){
var inst_79608 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_79613__$1 = state_79613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79613__$1,(2),inst_79608);
} else {
if((state_val_79614 === (2))){
var inst_79610 = (state_79613[(2)]);
var inst_79611 = f__$1.call(null,inst_79610);
var state_79613__$1 = state_79613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79613__$1,inst_79611);
} else {
return null;
}
}
});})(c__79089__auto__,f__$1))
;
return ((function (switch__78999__auto__,c__79089__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__79000__auto__ = null;
var cljs$core$async$transduce_$_state_machine__79000__auto____0 = (function (){
var statearr_79615 = [null,null,null,null,null,null,null];
(statearr_79615[(0)] = cljs$core$async$transduce_$_state_machine__79000__auto__);

(statearr_79615[(1)] = (1));

return statearr_79615;
});
var cljs$core$async$transduce_$_state_machine__79000__auto____1 = (function (state_79613){
while(true){
var ret_value__79001__auto__ = (function (){try{while(true){
var result__79002__auto__ = switch__78999__auto__.call(null,state_79613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__79002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__79002__auto__;
}
break;
}
}catch (e79616){if((e79616 instanceof Object)){
var ex__79003__auto__ = e79616;
var statearr_79617_79619 = state_79613;
(statearr_79617_79619[(5)] = ex__79003__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__79001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79620 = state_79613;
state_79613 = G__79620;
continue;
} else {
return ret_value__79001__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__79000__auto__ = function(state_79613){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__79000__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__79000__auto____1.call(this,state_79613);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__79000__auto____0;
cljs$core$async$transduce_$_state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__79000__auto____1;
return cljs$core$async$transduce_$_state_machine__79000__auto__;
})()
;})(switch__78999__auto__,c__79089__auto__,f__$1))
})();
var state__79091__auto__ = (function (){var statearr_79618 = f__79090__auto__.call(null);
(statearr_79618[(6)] = c__79089__auto__);

return statearr_79618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__79091__auto__);
});})(c__79089__auto__,f__$1))
);

return c__79089__auto__;
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
var G__79622 = arguments.length;
switch (G__79622) {
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
var c__79089__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__79089__auto__){
return (function (){
var f__79090__auto__ = (function (){var switch__78999__auto__ = ((function (c__79089__auto__){
return (function (state_79647){
var state_val_79648 = (state_79647[(1)]);
if((state_val_79648 === (7))){
var inst_79629 = (state_79647[(2)]);
var state_79647__$1 = state_79647;
var statearr_79649_79670 = state_79647__$1;
(statearr_79649_79670[(2)] = inst_79629);

(statearr_79649_79670[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79648 === (1))){
var inst_79623 = cljs.core.seq.call(null,coll);
var inst_79624 = inst_79623;
var state_79647__$1 = (function (){var statearr_79650 = state_79647;
(statearr_79650[(7)] = inst_79624);

return statearr_79650;
})();
var statearr_79651_79671 = state_79647__$1;
(statearr_79651_79671[(2)] = null);

(statearr_79651_79671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79648 === (4))){
var inst_79624 = (state_79647[(7)]);
var inst_79627 = cljs.core.first.call(null,inst_79624);
var state_79647__$1 = state_79647;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_79647__$1,(7),ch,inst_79627);
} else {
if((state_val_79648 === (13))){
var inst_79641 = (state_79647[(2)]);
var state_79647__$1 = state_79647;
var statearr_79652_79672 = state_79647__$1;
(statearr_79652_79672[(2)] = inst_79641);

(statearr_79652_79672[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79648 === (6))){
var inst_79632 = (state_79647[(2)]);
var state_79647__$1 = state_79647;
if(cljs.core.truth_(inst_79632)){
var statearr_79653_79673 = state_79647__$1;
(statearr_79653_79673[(1)] = (8));

} else {
var statearr_79654_79674 = state_79647__$1;
(statearr_79654_79674[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79648 === (3))){
var inst_79645 = (state_79647[(2)]);
var state_79647__$1 = state_79647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79647__$1,inst_79645);
} else {
if((state_val_79648 === (12))){
var state_79647__$1 = state_79647;
var statearr_79655_79675 = state_79647__$1;
(statearr_79655_79675[(2)] = null);

(statearr_79655_79675[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79648 === (2))){
var inst_79624 = (state_79647[(7)]);
var state_79647__$1 = state_79647;
if(cljs.core.truth_(inst_79624)){
var statearr_79656_79676 = state_79647__$1;
(statearr_79656_79676[(1)] = (4));

} else {
var statearr_79657_79677 = state_79647__$1;
(statearr_79657_79677[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79648 === (11))){
var inst_79638 = cljs.core.async.close_BANG_.call(null,ch);
var state_79647__$1 = state_79647;
var statearr_79658_79678 = state_79647__$1;
(statearr_79658_79678[(2)] = inst_79638);

(statearr_79658_79678[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79648 === (9))){
var state_79647__$1 = state_79647;
if(cljs.core.truth_(close_QMARK_)){
var statearr_79659_79679 = state_79647__$1;
(statearr_79659_79679[(1)] = (11));

} else {
var statearr_79660_79680 = state_79647__$1;
(statearr_79660_79680[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79648 === (5))){
var inst_79624 = (state_79647[(7)]);
var state_79647__$1 = state_79647;
var statearr_79661_79681 = state_79647__$1;
(statearr_79661_79681[(2)] = inst_79624);

(statearr_79661_79681[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79648 === (10))){
var inst_79643 = (state_79647[(2)]);
var state_79647__$1 = state_79647;
var statearr_79662_79682 = state_79647__$1;
(statearr_79662_79682[(2)] = inst_79643);

(statearr_79662_79682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79648 === (8))){
var inst_79624 = (state_79647[(7)]);
var inst_79634 = cljs.core.next.call(null,inst_79624);
var inst_79624__$1 = inst_79634;
var state_79647__$1 = (function (){var statearr_79663 = state_79647;
(statearr_79663[(7)] = inst_79624__$1);

return statearr_79663;
})();
var statearr_79664_79683 = state_79647__$1;
(statearr_79664_79683[(2)] = null);

(statearr_79664_79683[(1)] = (2));


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
});})(c__79089__auto__))
;
return ((function (switch__78999__auto__,c__79089__auto__){
return (function() {
var cljs$core$async$state_machine__79000__auto__ = null;
var cljs$core$async$state_machine__79000__auto____0 = (function (){
var statearr_79665 = [null,null,null,null,null,null,null,null];
(statearr_79665[(0)] = cljs$core$async$state_machine__79000__auto__);

(statearr_79665[(1)] = (1));

return statearr_79665;
});
var cljs$core$async$state_machine__79000__auto____1 = (function (state_79647){
while(true){
var ret_value__79001__auto__ = (function (){try{while(true){
var result__79002__auto__ = switch__78999__auto__.call(null,state_79647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__79002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__79002__auto__;
}
break;
}
}catch (e79666){if((e79666 instanceof Object)){
var ex__79003__auto__ = e79666;
var statearr_79667_79684 = state_79647;
(statearr_79667_79684[(5)] = ex__79003__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__79001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79685 = state_79647;
state_79647 = G__79685;
continue;
} else {
return ret_value__79001__auto__;
}
break;
}
});
cljs$core$async$state_machine__79000__auto__ = function(state_79647){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__79000__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__79000__auto____1.call(this,state_79647);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__79000__auto____0;
cljs$core$async$state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__79000__auto____1;
return cljs$core$async$state_machine__79000__auto__;
})()
;})(switch__78999__auto__,c__79089__auto__))
})();
var state__79091__auto__ = (function (){var statearr_79668 = f__79090__auto__.call(null);
(statearr_79668[(6)] = c__79089__auto__);

return statearr_79668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__79091__auto__);
});})(c__79089__auto__))
);

return c__79089__auto__;
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
var x__75634__auto__ = (((_ == null))?null:_);
var m__75635__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__75634__auto__)]);
if(!((m__75635__auto__ == null))){
return m__75635__auto__.call(null,_);
} else {
var m__75635__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__75635__auto____$1 == null))){
return m__75635__auto____$1.call(null,_);
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
var x__75634__auto__ = (((m == null))?null:m);
var m__75635__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__75634__auto__)]);
if(!((m__75635__auto__ == null))){
return m__75635__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__75635__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__75635__auto____$1 == null))){
return m__75635__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__75634__auto__ = (((m == null))?null:m);
var m__75635__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__75634__auto__)]);
if(!((m__75635__auto__ == null))){
return m__75635__auto__.call(null,m,ch);
} else {
var m__75635__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__75635__auto____$1 == null))){
return m__75635__auto____$1.call(null,m,ch);
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
var x__75634__auto__ = (((m == null))?null:m);
var m__75635__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__75634__auto__)]);
if(!((m__75635__auto__ == null))){
return m__75635__auto__.call(null,m);
} else {
var m__75635__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__75635__auto____$1 == null))){
return m__75635__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async79686 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async79686 = (function (ch,cs,meta79687){
this.ch = ch;
this.cs = cs;
this.meta79687 = meta79687;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async79686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_79688,meta79687__$1){
var self__ = this;
var _79688__$1 = this;
return (new cljs.core.async.t_cljs$core$async79686(self__.ch,self__.cs,meta79687__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async79686.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_79688){
var self__ = this;
var _79688__$1 = this;
return self__.meta79687;
});})(cs))
;

cljs.core.async.t_cljs$core$async79686.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async79686.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async79686.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async79686.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async79686.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async79686.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async79686.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta79687","meta79687",1717679669,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async79686.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async79686.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async79686";

cljs.core.async.t_cljs$core$async79686.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__75572__auto__,writer__75573__auto__,opt__75574__auto__){
return cljs.core._write.call(null,writer__75573__auto__,"cljs.core.async/t_cljs$core$async79686");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async79686 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async79686(ch__$1,cs__$1,meta79687){
return (new cljs.core.async.t_cljs$core$async79686(ch__$1,cs__$1,meta79687));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async79686(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__79089__auto___79908 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__79089__auto___79908,cs,m,dchan,dctr,done){
return (function (){
var f__79090__auto__ = (function (){var switch__78999__auto__ = ((function (c__79089__auto___79908,cs,m,dchan,dctr,done){
return (function (state_79823){
var state_val_79824 = (state_79823[(1)]);
if((state_val_79824 === (7))){
var inst_79819 = (state_79823[(2)]);
var state_79823__$1 = state_79823;
var statearr_79825_79909 = state_79823__$1;
(statearr_79825_79909[(2)] = inst_79819);

(statearr_79825_79909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (20))){
var inst_79722 = (state_79823[(7)]);
var inst_79734 = cljs.core.first.call(null,inst_79722);
var inst_79735 = cljs.core.nth.call(null,inst_79734,(0),null);
var inst_79736 = cljs.core.nth.call(null,inst_79734,(1),null);
var state_79823__$1 = (function (){var statearr_79826 = state_79823;
(statearr_79826[(8)] = inst_79735);

return statearr_79826;
})();
if(cljs.core.truth_(inst_79736)){
var statearr_79827_79910 = state_79823__$1;
(statearr_79827_79910[(1)] = (22));

} else {
var statearr_79828_79911 = state_79823__$1;
(statearr_79828_79911[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (27))){
var inst_79764 = (state_79823[(9)]);
var inst_79771 = (state_79823[(10)]);
var inst_79766 = (state_79823[(11)]);
var inst_79691 = (state_79823[(12)]);
var inst_79771__$1 = cljs.core._nth.call(null,inst_79764,inst_79766);
var inst_79772 = cljs.core.async.put_BANG_.call(null,inst_79771__$1,inst_79691,done);
var state_79823__$1 = (function (){var statearr_79829 = state_79823;
(statearr_79829[(10)] = inst_79771__$1);

return statearr_79829;
})();
if(cljs.core.truth_(inst_79772)){
var statearr_79830_79912 = state_79823__$1;
(statearr_79830_79912[(1)] = (30));

} else {
var statearr_79831_79913 = state_79823__$1;
(statearr_79831_79913[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (1))){
var state_79823__$1 = state_79823;
var statearr_79832_79914 = state_79823__$1;
(statearr_79832_79914[(2)] = null);

(statearr_79832_79914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (24))){
var inst_79722 = (state_79823[(7)]);
var inst_79741 = (state_79823[(2)]);
var inst_79742 = cljs.core.next.call(null,inst_79722);
var inst_79700 = inst_79742;
var inst_79701 = null;
var inst_79702 = (0);
var inst_79703 = (0);
var state_79823__$1 = (function (){var statearr_79833 = state_79823;
(statearr_79833[(13)] = inst_79741);

(statearr_79833[(14)] = inst_79700);

(statearr_79833[(15)] = inst_79702);

(statearr_79833[(16)] = inst_79701);

(statearr_79833[(17)] = inst_79703);

return statearr_79833;
})();
var statearr_79834_79915 = state_79823__$1;
(statearr_79834_79915[(2)] = null);

(statearr_79834_79915[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (39))){
var state_79823__$1 = state_79823;
var statearr_79838_79916 = state_79823__$1;
(statearr_79838_79916[(2)] = null);

(statearr_79838_79916[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (4))){
var inst_79691 = (state_79823[(12)]);
var inst_79691__$1 = (state_79823[(2)]);
var inst_79692 = (inst_79691__$1 == null);
var state_79823__$1 = (function (){var statearr_79839 = state_79823;
(statearr_79839[(12)] = inst_79691__$1);

return statearr_79839;
})();
if(cljs.core.truth_(inst_79692)){
var statearr_79840_79917 = state_79823__$1;
(statearr_79840_79917[(1)] = (5));

} else {
var statearr_79841_79918 = state_79823__$1;
(statearr_79841_79918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (15))){
var inst_79700 = (state_79823[(14)]);
var inst_79702 = (state_79823[(15)]);
var inst_79701 = (state_79823[(16)]);
var inst_79703 = (state_79823[(17)]);
var inst_79718 = (state_79823[(2)]);
var inst_79719 = (inst_79703 + (1));
var tmp79835 = inst_79700;
var tmp79836 = inst_79702;
var tmp79837 = inst_79701;
var inst_79700__$1 = tmp79835;
var inst_79701__$1 = tmp79837;
var inst_79702__$1 = tmp79836;
var inst_79703__$1 = inst_79719;
var state_79823__$1 = (function (){var statearr_79842 = state_79823;
(statearr_79842[(18)] = inst_79718);

(statearr_79842[(14)] = inst_79700__$1);

(statearr_79842[(15)] = inst_79702__$1);

(statearr_79842[(16)] = inst_79701__$1);

(statearr_79842[(17)] = inst_79703__$1);

return statearr_79842;
})();
var statearr_79843_79919 = state_79823__$1;
(statearr_79843_79919[(2)] = null);

(statearr_79843_79919[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (21))){
var inst_79745 = (state_79823[(2)]);
var state_79823__$1 = state_79823;
var statearr_79847_79920 = state_79823__$1;
(statearr_79847_79920[(2)] = inst_79745);

(statearr_79847_79920[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (31))){
var inst_79771 = (state_79823[(10)]);
var inst_79775 = done.call(null,null);
var inst_79776 = cljs.core.async.untap_STAR_.call(null,m,inst_79771);
var state_79823__$1 = (function (){var statearr_79848 = state_79823;
(statearr_79848[(19)] = inst_79775);

return statearr_79848;
})();
var statearr_79849_79921 = state_79823__$1;
(statearr_79849_79921[(2)] = inst_79776);

(statearr_79849_79921[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (32))){
var inst_79764 = (state_79823[(9)]);
var inst_79766 = (state_79823[(11)]);
var inst_79763 = (state_79823[(20)]);
var inst_79765 = (state_79823[(21)]);
var inst_79778 = (state_79823[(2)]);
var inst_79779 = (inst_79766 + (1));
var tmp79844 = inst_79764;
var tmp79845 = inst_79763;
var tmp79846 = inst_79765;
var inst_79763__$1 = tmp79845;
var inst_79764__$1 = tmp79844;
var inst_79765__$1 = tmp79846;
var inst_79766__$1 = inst_79779;
var state_79823__$1 = (function (){var statearr_79850 = state_79823;
(statearr_79850[(9)] = inst_79764__$1);

(statearr_79850[(11)] = inst_79766__$1);

(statearr_79850[(22)] = inst_79778);

(statearr_79850[(20)] = inst_79763__$1);

(statearr_79850[(21)] = inst_79765__$1);

return statearr_79850;
})();
var statearr_79851_79922 = state_79823__$1;
(statearr_79851_79922[(2)] = null);

(statearr_79851_79922[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (40))){
var inst_79791 = (state_79823[(23)]);
var inst_79795 = done.call(null,null);
var inst_79796 = cljs.core.async.untap_STAR_.call(null,m,inst_79791);
var state_79823__$1 = (function (){var statearr_79852 = state_79823;
(statearr_79852[(24)] = inst_79795);

return statearr_79852;
})();
var statearr_79853_79923 = state_79823__$1;
(statearr_79853_79923[(2)] = inst_79796);

(statearr_79853_79923[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (33))){
var inst_79782 = (state_79823[(25)]);
var inst_79784 = cljs.core.chunked_seq_QMARK_.call(null,inst_79782);
var state_79823__$1 = state_79823;
if(inst_79784){
var statearr_79854_79924 = state_79823__$1;
(statearr_79854_79924[(1)] = (36));

} else {
var statearr_79855_79925 = state_79823__$1;
(statearr_79855_79925[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (13))){
var inst_79712 = (state_79823[(26)]);
var inst_79715 = cljs.core.async.close_BANG_.call(null,inst_79712);
var state_79823__$1 = state_79823;
var statearr_79856_79926 = state_79823__$1;
(statearr_79856_79926[(2)] = inst_79715);

(statearr_79856_79926[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (22))){
var inst_79735 = (state_79823[(8)]);
var inst_79738 = cljs.core.async.close_BANG_.call(null,inst_79735);
var state_79823__$1 = state_79823;
var statearr_79857_79927 = state_79823__$1;
(statearr_79857_79927[(2)] = inst_79738);

(statearr_79857_79927[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (36))){
var inst_79782 = (state_79823[(25)]);
var inst_79786 = cljs.core.chunk_first.call(null,inst_79782);
var inst_79787 = cljs.core.chunk_rest.call(null,inst_79782);
var inst_79788 = cljs.core.count.call(null,inst_79786);
var inst_79763 = inst_79787;
var inst_79764 = inst_79786;
var inst_79765 = inst_79788;
var inst_79766 = (0);
var state_79823__$1 = (function (){var statearr_79858 = state_79823;
(statearr_79858[(9)] = inst_79764);

(statearr_79858[(11)] = inst_79766);

(statearr_79858[(20)] = inst_79763);

(statearr_79858[(21)] = inst_79765);

return statearr_79858;
})();
var statearr_79859_79928 = state_79823__$1;
(statearr_79859_79928[(2)] = null);

(statearr_79859_79928[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (41))){
var inst_79782 = (state_79823[(25)]);
var inst_79798 = (state_79823[(2)]);
var inst_79799 = cljs.core.next.call(null,inst_79782);
var inst_79763 = inst_79799;
var inst_79764 = null;
var inst_79765 = (0);
var inst_79766 = (0);
var state_79823__$1 = (function (){var statearr_79860 = state_79823;
(statearr_79860[(9)] = inst_79764);

(statearr_79860[(11)] = inst_79766);

(statearr_79860[(20)] = inst_79763);

(statearr_79860[(27)] = inst_79798);

(statearr_79860[(21)] = inst_79765);

return statearr_79860;
})();
var statearr_79861_79929 = state_79823__$1;
(statearr_79861_79929[(2)] = null);

(statearr_79861_79929[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (43))){
var state_79823__$1 = state_79823;
var statearr_79862_79930 = state_79823__$1;
(statearr_79862_79930[(2)] = null);

(statearr_79862_79930[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (29))){
var inst_79807 = (state_79823[(2)]);
var state_79823__$1 = state_79823;
var statearr_79863_79931 = state_79823__$1;
(statearr_79863_79931[(2)] = inst_79807);

(statearr_79863_79931[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (44))){
var inst_79816 = (state_79823[(2)]);
var state_79823__$1 = (function (){var statearr_79864 = state_79823;
(statearr_79864[(28)] = inst_79816);

return statearr_79864;
})();
var statearr_79865_79932 = state_79823__$1;
(statearr_79865_79932[(2)] = null);

(statearr_79865_79932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (6))){
var inst_79755 = (state_79823[(29)]);
var inst_79754 = cljs.core.deref.call(null,cs);
var inst_79755__$1 = cljs.core.keys.call(null,inst_79754);
var inst_79756 = cljs.core.count.call(null,inst_79755__$1);
var inst_79757 = cljs.core.reset_BANG_.call(null,dctr,inst_79756);
var inst_79762 = cljs.core.seq.call(null,inst_79755__$1);
var inst_79763 = inst_79762;
var inst_79764 = null;
var inst_79765 = (0);
var inst_79766 = (0);
var state_79823__$1 = (function (){var statearr_79866 = state_79823;
(statearr_79866[(30)] = inst_79757);

(statearr_79866[(9)] = inst_79764);

(statearr_79866[(11)] = inst_79766);

(statearr_79866[(20)] = inst_79763);

(statearr_79866[(29)] = inst_79755__$1);

(statearr_79866[(21)] = inst_79765);

return statearr_79866;
})();
var statearr_79867_79933 = state_79823__$1;
(statearr_79867_79933[(2)] = null);

(statearr_79867_79933[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (28))){
var inst_79763 = (state_79823[(20)]);
var inst_79782 = (state_79823[(25)]);
var inst_79782__$1 = cljs.core.seq.call(null,inst_79763);
var state_79823__$1 = (function (){var statearr_79868 = state_79823;
(statearr_79868[(25)] = inst_79782__$1);

return statearr_79868;
})();
if(inst_79782__$1){
var statearr_79869_79934 = state_79823__$1;
(statearr_79869_79934[(1)] = (33));

} else {
var statearr_79870_79935 = state_79823__$1;
(statearr_79870_79935[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (25))){
var inst_79766 = (state_79823[(11)]);
var inst_79765 = (state_79823[(21)]);
var inst_79768 = (inst_79766 < inst_79765);
var inst_79769 = inst_79768;
var state_79823__$1 = state_79823;
if(cljs.core.truth_(inst_79769)){
var statearr_79871_79936 = state_79823__$1;
(statearr_79871_79936[(1)] = (27));

} else {
var statearr_79872_79937 = state_79823__$1;
(statearr_79872_79937[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (34))){
var state_79823__$1 = state_79823;
var statearr_79873_79938 = state_79823__$1;
(statearr_79873_79938[(2)] = null);

(statearr_79873_79938[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (17))){
var state_79823__$1 = state_79823;
var statearr_79874_79939 = state_79823__$1;
(statearr_79874_79939[(2)] = null);

(statearr_79874_79939[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (3))){
var inst_79821 = (state_79823[(2)]);
var state_79823__$1 = state_79823;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_79823__$1,inst_79821);
} else {
if((state_val_79824 === (12))){
var inst_79750 = (state_79823[(2)]);
var state_79823__$1 = state_79823;
var statearr_79875_79940 = state_79823__$1;
(statearr_79875_79940[(2)] = inst_79750);

(statearr_79875_79940[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (2))){
var state_79823__$1 = state_79823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79823__$1,(4),ch);
} else {
if((state_val_79824 === (23))){
var state_79823__$1 = state_79823;
var statearr_79876_79941 = state_79823__$1;
(statearr_79876_79941[(2)] = null);

(statearr_79876_79941[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (35))){
var inst_79805 = (state_79823[(2)]);
var state_79823__$1 = state_79823;
var statearr_79877_79942 = state_79823__$1;
(statearr_79877_79942[(2)] = inst_79805);

(statearr_79877_79942[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (19))){
var inst_79722 = (state_79823[(7)]);
var inst_79726 = cljs.core.chunk_first.call(null,inst_79722);
var inst_79727 = cljs.core.chunk_rest.call(null,inst_79722);
var inst_79728 = cljs.core.count.call(null,inst_79726);
var inst_79700 = inst_79727;
var inst_79701 = inst_79726;
var inst_79702 = inst_79728;
var inst_79703 = (0);
var state_79823__$1 = (function (){var statearr_79878 = state_79823;
(statearr_79878[(14)] = inst_79700);

(statearr_79878[(15)] = inst_79702);

(statearr_79878[(16)] = inst_79701);

(statearr_79878[(17)] = inst_79703);

return statearr_79878;
})();
var statearr_79879_79943 = state_79823__$1;
(statearr_79879_79943[(2)] = null);

(statearr_79879_79943[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (11))){
var inst_79722 = (state_79823[(7)]);
var inst_79700 = (state_79823[(14)]);
var inst_79722__$1 = cljs.core.seq.call(null,inst_79700);
var state_79823__$1 = (function (){var statearr_79880 = state_79823;
(statearr_79880[(7)] = inst_79722__$1);

return statearr_79880;
})();
if(inst_79722__$1){
var statearr_79881_79944 = state_79823__$1;
(statearr_79881_79944[(1)] = (16));

} else {
var statearr_79882_79945 = state_79823__$1;
(statearr_79882_79945[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (9))){
var inst_79752 = (state_79823[(2)]);
var state_79823__$1 = state_79823;
var statearr_79883_79946 = state_79823__$1;
(statearr_79883_79946[(2)] = inst_79752);

(statearr_79883_79946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (5))){
var inst_79698 = cljs.core.deref.call(null,cs);
var inst_79699 = cljs.core.seq.call(null,inst_79698);
var inst_79700 = inst_79699;
var inst_79701 = null;
var inst_79702 = (0);
var inst_79703 = (0);
var state_79823__$1 = (function (){var statearr_79884 = state_79823;
(statearr_79884[(14)] = inst_79700);

(statearr_79884[(15)] = inst_79702);

(statearr_79884[(16)] = inst_79701);

(statearr_79884[(17)] = inst_79703);

return statearr_79884;
})();
var statearr_79885_79947 = state_79823__$1;
(statearr_79885_79947[(2)] = null);

(statearr_79885_79947[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (14))){
var state_79823__$1 = state_79823;
var statearr_79886_79948 = state_79823__$1;
(statearr_79886_79948[(2)] = null);

(statearr_79886_79948[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (45))){
var inst_79813 = (state_79823[(2)]);
var state_79823__$1 = state_79823;
var statearr_79887_79949 = state_79823__$1;
(statearr_79887_79949[(2)] = inst_79813);

(statearr_79887_79949[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (26))){
var inst_79755 = (state_79823[(29)]);
var inst_79809 = (state_79823[(2)]);
var inst_79810 = cljs.core.seq.call(null,inst_79755);
var state_79823__$1 = (function (){var statearr_79888 = state_79823;
(statearr_79888[(31)] = inst_79809);

return statearr_79888;
})();
if(inst_79810){
var statearr_79889_79950 = state_79823__$1;
(statearr_79889_79950[(1)] = (42));

} else {
var statearr_79890_79951 = state_79823__$1;
(statearr_79890_79951[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (16))){
var inst_79722 = (state_79823[(7)]);
var inst_79724 = cljs.core.chunked_seq_QMARK_.call(null,inst_79722);
var state_79823__$1 = state_79823;
if(inst_79724){
var statearr_79891_79952 = state_79823__$1;
(statearr_79891_79952[(1)] = (19));

} else {
var statearr_79892_79953 = state_79823__$1;
(statearr_79892_79953[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (38))){
var inst_79802 = (state_79823[(2)]);
var state_79823__$1 = state_79823;
var statearr_79893_79954 = state_79823__$1;
(statearr_79893_79954[(2)] = inst_79802);

(statearr_79893_79954[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (30))){
var state_79823__$1 = state_79823;
var statearr_79894_79955 = state_79823__$1;
(statearr_79894_79955[(2)] = null);

(statearr_79894_79955[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (10))){
var inst_79701 = (state_79823[(16)]);
var inst_79703 = (state_79823[(17)]);
var inst_79711 = cljs.core._nth.call(null,inst_79701,inst_79703);
var inst_79712 = cljs.core.nth.call(null,inst_79711,(0),null);
var inst_79713 = cljs.core.nth.call(null,inst_79711,(1),null);
var state_79823__$1 = (function (){var statearr_79895 = state_79823;
(statearr_79895[(26)] = inst_79712);

return statearr_79895;
})();
if(cljs.core.truth_(inst_79713)){
var statearr_79896_79956 = state_79823__$1;
(statearr_79896_79956[(1)] = (13));

} else {
var statearr_79897_79957 = state_79823__$1;
(statearr_79897_79957[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (18))){
var inst_79748 = (state_79823[(2)]);
var state_79823__$1 = state_79823;
var statearr_79898_79958 = state_79823__$1;
(statearr_79898_79958[(2)] = inst_79748);

(statearr_79898_79958[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (42))){
var state_79823__$1 = state_79823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_79823__$1,(45),dchan);
} else {
if((state_val_79824 === (37))){
var inst_79791 = (state_79823[(23)]);
var inst_79691 = (state_79823[(12)]);
var inst_79782 = (state_79823[(25)]);
var inst_79791__$1 = cljs.core.first.call(null,inst_79782);
var inst_79792 = cljs.core.async.put_BANG_.call(null,inst_79791__$1,inst_79691,done);
var state_79823__$1 = (function (){var statearr_79899 = state_79823;
(statearr_79899[(23)] = inst_79791__$1);

return statearr_79899;
})();
if(cljs.core.truth_(inst_79792)){
var statearr_79900_79959 = state_79823__$1;
(statearr_79900_79959[(1)] = (39));

} else {
var statearr_79901_79960 = state_79823__$1;
(statearr_79901_79960[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79824 === (8))){
var inst_79702 = (state_79823[(15)]);
var inst_79703 = (state_79823[(17)]);
var inst_79705 = (inst_79703 < inst_79702);
var inst_79706 = inst_79705;
var state_79823__$1 = state_79823;
if(cljs.core.truth_(inst_79706)){
var statearr_79902_79961 = state_79823__$1;
(statearr_79902_79961[(1)] = (10));

} else {
var statearr_79903_79962 = state_79823__$1;
(statearr_79903_79962[(1)] = (11));

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
});})(c__79089__auto___79908,cs,m,dchan,dctr,done))
;
return ((function (switch__78999__auto__,c__79089__auto___79908,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__79000__auto__ = null;
var cljs$core$async$mult_$_state_machine__79000__auto____0 = (function (){
var statearr_79904 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_79904[(0)] = cljs$core$async$mult_$_state_machine__79000__auto__);

(statearr_79904[(1)] = (1));

return statearr_79904;
});
var cljs$core$async$mult_$_state_machine__79000__auto____1 = (function (state_79823){
while(true){
var ret_value__79001__auto__ = (function (){try{while(true){
var result__79002__auto__ = switch__78999__auto__.call(null,state_79823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__79002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__79002__auto__;
}
break;
}
}catch (e79905){if((e79905 instanceof Object)){
var ex__79003__auto__ = e79905;
var statearr_79906_79963 = state_79823;
(statearr_79906_79963[(5)] = ex__79003__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_79823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__79001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__79964 = state_79823;
state_79823 = G__79964;
continue;
} else {
return ret_value__79001__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__79000__auto__ = function(state_79823){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__79000__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__79000__auto____1.call(this,state_79823);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__79000__auto____0;
cljs$core$async$mult_$_state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__79000__auto____1;
return cljs$core$async$mult_$_state_machine__79000__auto__;
})()
;})(switch__78999__auto__,c__79089__auto___79908,cs,m,dchan,dctr,done))
})();
var state__79091__auto__ = (function (){var statearr_79907 = f__79090__auto__.call(null);
(statearr_79907[(6)] = c__79089__auto___79908);

return statearr_79907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__79091__auto__);
});})(c__79089__auto___79908,cs,m,dchan,dctr,done))
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
var G__79966 = arguments.length;
switch (G__79966) {
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
var x__75634__auto__ = (((m == null))?null:m);
var m__75635__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__75634__auto__)]);
if(!((m__75635__auto__ == null))){
return m__75635__auto__.call(null,m,ch);
} else {
var m__75635__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__75635__auto____$1 == null))){
return m__75635__auto____$1.call(null,m,ch);
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
var x__75634__auto__ = (((m == null))?null:m);
var m__75635__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__75634__auto__)]);
if(!((m__75635__auto__ == null))){
return m__75635__auto__.call(null,m,ch);
} else {
var m__75635__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__75635__auto____$1 == null))){
return m__75635__auto____$1.call(null,m,ch);
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
var x__75634__auto__ = (((m == null))?null:m);
var m__75635__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__75634__auto__)]);
if(!((m__75635__auto__ == null))){
return m__75635__auto__.call(null,m);
} else {
var m__75635__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__75635__auto____$1 == null))){
return m__75635__auto____$1.call(null,m);
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
var x__75634__auto__ = (((m == null))?null:m);
var m__75635__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__75634__auto__)]);
if(!((m__75635__auto__ == null))){
return m__75635__auto__.call(null,m,state_map);
} else {
var m__75635__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__75635__auto____$1 == null))){
return m__75635__auto____$1.call(null,m,state_map);
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
var x__75634__auto__ = (((m == null))?null:m);
var m__75635__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__75634__auto__)]);
if(!((m__75635__auto__ == null))){
return m__75635__auto__.call(null,m,mode);
} else {
var m__75635__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__75635__auto____$1 == null))){
return m__75635__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__76185__auto__ = [];
var len__76178__auto___79978 = arguments.length;
var i__76179__auto___79979 = (0);
while(true){
if((i__76179__auto___79979 < len__76178__auto___79978)){
args__76185__auto__.push((arguments[i__76179__auto___79979]));

var G__79980 = (i__76179__auto___79979 + (1));
i__76179__auto___79979 = G__79980;
continue;
} else {
}
break;
}

var argseq__76186__auto__ = ((((3) < args__76185__auto__.length))?(new cljs.core.IndexedSeq(args__76185__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__76186__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__79972){
var map__79973 = p__79972;
var map__79973__$1 = ((((!((map__79973 == null)))?((((map__79973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79973.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79973):map__79973);
var opts = map__79973__$1;
var statearr_79975_79981 = state;
(statearr_79975_79981[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__79973,map__79973__$1,opts){
return (function (val){
var statearr_79976_79982 = state;
(statearr_79976_79982[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__79973,map__79973__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_79977_79983 = state;
(statearr_79977_79983[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq79968){
var G__79969 = cljs.core.first.call(null,seq79968);
var seq79968__$1 = cljs.core.next.call(null,seq79968);
var G__79970 = cljs.core.first.call(null,seq79968__$1);
var seq79968__$2 = cljs.core.next.call(null,seq79968__$1);
var G__79971 = cljs.core.first.call(null,seq79968__$2);
var seq79968__$3 = cljs.core.next.call(null,seq79968__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__79969,G__79970,G__79971,seq79968__$3);
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
if(typeof cljs.core.async.t_cljs$core$async79984 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async79984 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta79985){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta79985 = meta79985;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async79984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_79986,meta79985__$1){
var self__ = this;
var _79986__$1 = this;
return (new cljs.core.async.t_cljs$core$async79984(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta79985__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async79984.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_79986){
var self__ = this;
var _79986__$1 = this;
return self__.meta79985;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async79984.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async79984.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async79984.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async79984.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async79984.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async79984.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async79984.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async79984.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async79984.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta79985","meta79985",1380080683,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async79984.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async79984.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async79984";

cljs.core.async.t_cljs$core$async79984.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__75572__auto__,writer__75573__auto__,opt__75574__auto__){
return cljs.core._write.call(null,writer__75573__auto__,"cljs.core.async/t_cljs$core$async79984");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async79984 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async79984(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta79985){
return (new cljs.core.async.t_cljs$core$async79984(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta79985));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async79984(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__79089__auto___80148 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__79089__auto___80148,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__79090__auto__ = (function (){var switch__78999__auto__ = ((function (c__79089__auto___80148,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_80088){
var state_val_80089 = (state_80088[(1)]);
if((state_val_80089 === (7))){
var inst_80003 = (state_80088[(2)]);
var state_80088__$1 = state_80088;
var statearr_80090_80149 = state_80088__$1;
(statearr_80090_80149[(2)] = inst_80003);

(statearr_80090_80149[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80089 === (20))){
var inst_80015 = (state_80088[(7)]);
var state_80088__$1 = state_80088;
var statearr_80091_80150 = state_80088__$1;
(statearr_80091_80150[(2)] = inst_80015);

(statearr_80091_80150[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80089 === (27))){
var state_80088__$1 = state_80088;
var statearr_80092_80151 = state_80088__$1;
(statearr_80092_80151[(2)] = null);

(statearr_80092_80151[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80089 === (1))){
var inst_79990 = (state_80088[(8)]);
var inst_79990__$1 = calc_state.call(null);
var inst_79992 = (inst_79990__$1 == null);
var inst_79993 = cljs.core.not.call(null,inst_79992);
var state_80088__$1 = (function (){var statearr_80093 = state_80088;
(statearr_80093[(8)] = inst_79990__$1);

return statearr_80093;
})();
if(inst_79993){
var statearr_80094_80152 = state_80088__$1;
(statearr_80094_80152[(1)] = (2));

} else {
var statearr_80095_80153 = state_80088__$1;
(statearr_80095_80153[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80089 === (24))){
var inst_80048 = (state_80088[(9)]);
var inst_80039 = (state_80088[(10)]);
var inst_80062 = (state_80088[(11)]);
var inst_80062__$1 = inst_80039.call(null,inst_80048);
var state_80088__$1 = (function (){var statearr_80096 = state_80088;
(statearr_80096[(11)] = inst_80062__$1);

return statearr_80096;
})();
if(cljs.core.truth_(inst_80062__$1)){
var statearr_80097_80154 = state_80088__$1;
(statearr_80097_80154[(1)] = (29));

} else {
var statearr_80098_80155 = state_80088__$1;
(statearr_80098_80155[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80089 === (4))){
var inst_80006 = (state_80088[(2)]);
var state_80088__$1 = state_80088;
if(cljs.core.truth_(inst_80006)){
var statearr_80099_80156 = state_80088__$1;
(statearr_80099_80156[(1)] = (8));

} else {
var statearr_80100_80157 = state_80088__$1;
(statearr_80100_80157[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80089 === (15))){
var inst_80033 = (state_80088[(2)]);
var state_80088__$1 = state_80088;
if(cljs.core.truth_(inst_80033)){
var statearr_80101_80158 = state_80088__$1;
(statearr_80101_80158[(1)] = (19));

} else {
var statearr_80102_80159 = state_80088__$1;
(statearr_80102_80159[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80089 === (21))){
var inst_80038 = (state_80088[(12)]);
var inst_80038__$1 = (state_80088[(2)]);
var inst_80039 = cljs.core.get.call(null,inst_80038__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_80040 = cljs.core.get.call(null,inst_80038__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_80041 = cljs.core.get.call(null,inst_80038__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_80088__$1 = (function (){var statearr_80103 = state_80088;
(statearr_80103[(10)] = inst_80039);

(statearr_80103[(13)] = inst_80040);

(statearr_80103[(12)] = inst_80038__$1);

return statearr_80103;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_80088__$1,(22),inst_80041);
} else {
if((state_val_80089 === (31))){
var inst_80070 = (state_80088[(2)]);
var state_80088__$1 = state_80088;
if(cljs.core.truth_(inst_80070)){
var statearr_80104_80160 = state_80088__$1;
(statearr_80104_80160[(1)] = (32));

} else {
var statearr_80105_80161 = state_80088__$1;
(statearr_80105_80161[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80089 === (32))){
var inst_80047 = (state_80088[(14)]);
var state_80088__$1 = state_80088;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80088__$1,(35),out,inst_80047);
} else {
if((state_val_80089 === (33))){
var inst_80038 = (state_80088[(12)]);
var inst_80015 = inst_80038;
var state_80088__$1 = (function (){var statearr_80106 = state_80088;
(statearr_80106[(7)] = inst_80015);

return statearr_80106;
})();
var statearr_80107_80162 = state_80088__$1;
(statearr_80107_80162[(2)] = null);

(statearr_80107_80162[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80089 === (13))){
var inst_80015 = (state_80088[(7)]);
var inst_80022 = inst_80015.cljs$lang$protocol_mask$partition0$;
var inst_80023 = (inst_80022 & (64));
var inst_80024 = inst_80015.cljs$core$ISeq$;
var inst_80025 = (cljs.core.PROTOCOL_SENTINEL === inst_80024);
var inst_80026 = (inst_80023) || (inst_80025);
var state_80088__$1 = state_80088;
if(cljs.core.truth_(inst_80026)){
var statearr_80108_80163 = state_80088__$1;
(statearr_80108_80163[(1)] = (16));

} else {
var statearr_80109_80164 = state_80088__$1;
(statearr_80109_80164[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80089 === (22))){
var inst_80048 = (state_80088[(9)]);
var inst_80047 = (state_80088[(14)]);
var inst_80046 = (state_80088[(2)]);
var inst_80047__$1 = cljs.core.nth.call(null,inst_80046,(0),null);
var inst_80048__$1 = cljs.core.nth.call(null,inst_80046,(1),null);
var inst_80049 = (inst_80047__$1 == null);
var inst_80050 = cljs.core._EQ_.call(null,inst_80048__$1,change);
var inst_80051 = (inst_80049) || (inst_80050);
var state_80088__$1 = (function (){var statearr_80110 = state_80088;
(statearr_80110[(9)] = inst_80048__$1);

(statearr_80110[(14)] = inst_80047__$1);

return statearr_80110;
})();
if(cljs.core.truth_(inst_80051)){
var statearr_80111_80165 = state_80088__$1;
(statearr_80111_80165[(1)] = (23));

} else {
var statearr_80112_80166 = state_80088__$1;
(statearr_80112_80166[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80089 === (36))){
var inst_80038 = (state_80088[(12)]);
var inst_80015 = inst_80038;
var state_80088__$1 = (function (){var statearr_80113 = state_80088;
(statearr_80113[(7)] = inst_80015);

return statearr_80113;
})();
var statearr_80114_80167 = state_80088__$1;
(statearr_80114_80167[(2)] = null);

(statearr_80114_80167[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80089 === (29))){
var inst_80062 = (state_80088[(11)]);
var state_80088__$1 = state_80088;
var statearr_80115_80168 = state_80088__$1;
(statearr_80115_80168[(2)] = inst_80062);

(statearr_80115_80168[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80089 === (6))){
var state_80088__$1 = state_80088;
var statearr_80116_80169 = state_80088__$1;
(statearr_80116_80169[(2)] = false);

(statearr_80116_80169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80089 === (28))){
var inst_80058 = (state_80088[(2)]);
var inst_80059 = calc_state.call(null);
var inst_80015 = inst_80059;
var state_80088__$1 = (function (){var statearr_80117 = state_80088;
(statearr_80117[(15)] = inst_80058);

(statearr_80117[(7)] = inst_80015);

return statearr_80117;
})();
var statearr_80118_80170 = state_80088__$1;
(statearr_80118_80170[(2)] = null);

(statearr_80118_80170[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80089 === (25))){
var inst_80084 = (state_80088[(2)]);
var state_80088__$1 = state_80088;
var statearr_80119_80171 = state_80088__$1;
(statearr_80119_80171[(2)] = inst_80084);

(statearr_80119_80171[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80089 === (34))){
var inst_80082 = (state_80088[(2)]);
var state_80088__$1 = state_80088;
var statearr_80120_80172 = state_80088__$1;
(statearr_80120_80172[(2)] = inst_80082);

(statearr_80120_80172[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80089 === (17))){
var state_80088__$1 = state_80088;
var statearr_80121_80173 = state_80088__$1;
(statearr_80121_80173[(2)] = false);

(statearr_80121_80173[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80089 === (3))){
var state_80088__$1 = state_80088;
var statearr_80122_80174 = state_80088__$1;
(statearr_80122_80174[(2)] = false);

(statearr_80122_80174[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80089 === (12))){
var inst_80086 = (state_80088[(2)]);
var state_80088__$1 = state_80088;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80088__$1,inst_80086);
} else {
if((state_val_80089 === (2))){
var inst_79990 = (state_80088[(8)]);
var inst_79995 = inst_79990.cljs$lang$protocol_mask$partition0$;
var inst_79996 = (inst_79995 & (64));
var inst_79997 = inst_79990.cljs$core$ISeq$;
var inst_79998 = (cljs.core.PROTOCOL_SENTINEL === inst_79997);
var inst_79999 = (inst_79996) || (inst_79998);
var state_80088__$1 = state_80088;
if(cljs.core.truth_(inst_79999)){
var statearr_80123_80175 = state_80088__$1;
(statearr_80123_80175[(1)] = (5));

} else {
var statearr_80124_80176 = state_80088__$1;
(statearr_80124_80176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80089 === (23))){
var inst_80047 = (state_80088[(14)]);
var inst_80053 = (inst_80047 == null);
var state_80088__$1 = state_80088;
if(cljs.core.truth_(inst_80053)){
var statearr_80125_80177 = state_80088__$1;
(statearr_80125_80177[(1)] = (26));

} else {
var statearr_80126_80178 = state_80088__$1;
(statearr_80126_80178[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80089 === (35))){
var inst_80073 = (state_80088[(2)]);
var state_80088__$1 = state_80088;
if(cljs.core.truth_(inst_80073)){
var statearr_80127_80179 = state_80088__$1;
(statearr_80127_80179[(1)] = (36));

} else {
var statearr_80128_80180 = state_80088__$1;
(statearr_80128_80180[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80089 === (19))){
var inst_80015 = (state_80088[(7)]);
var inst_80035 = cljs.core.apply.call(null,cljs.core.hash_map,inst_80015);
var state_80088__$1 = state_80088;
var statearr_80129_80181 = state_80088__$1;
(statearr_80129_80181[(2)] = inst_80035);

(statearr_80129_80181[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80089 === (11))){
var inst_80015 = (state_80088[(7)]);
var inst_80019 = (inst_80015 == null);
var inst_80020 = cljs.core.not.call(null,inst_80019);
var state_80088__$1 = state_80088;
if(inst_80020){
var statearr_80130_80182 = state_80088__$1;
(statearr_80130_80182[(1)] = (13));

} else {
var statearr_80131_80183 = state_80088__$1;
(statearr_80131_80183[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80089 === (9))){
var inst_79990 = (state_80088[(8)]);
var state_80088__$1 = state_80088;
var statearr_80132_80184 = state_80088__$1;
(statearr_80132_80184[(2)] = inst_79990);

(statearr_80132_80184[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80089 === (5))){
var state_80088__$1 = state_80088;
var statearr_80133_80185 = state_80088__$1;
(statearr_80133_80185[(2)] = true);

(statearr_80133_80185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80089 === (14))){
var state_80088__$1 = state_80088;
var statearr_80134_80186 = state_80088__$1;
(statearr_80134_80186[(2)] = false);

(statearr_80134_80186[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80089 === (26))){
var inst_80048 = (state_80088[(9)]);
var inst_80055 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_80048);
var state_80088__$1 = state_80088;
var statearr_80135_80187 = state_80088__$1;
(statearr_80135_80187[(2)] = inst_80055);

(statearr_80135_80187[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80089 === (16))){
var state_80088__$1 = state_80088;
var statearr_80136_80188 = state_80088__$1;
(statearr_80136_80188[(2)] = true);

(statearr_80136_80188[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80089 === (38))){
var inst_80078 = (state_80088[(2)]);
var state_80088__$1 = state_80088;
var statearr_80137_80189 = state_80088__$1;
(statearr_80137_80189[(2)] = inst_80078);

(statearr_80137_80189[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80089 === (30))){
var inst_80048 = (state_80088[(9)]);
var inst_80039 = (state_80088[(10)]);
var inst_80040 = (state_80088[(13)]);
var inst_80065 = cljs.core.empty_QMARK_.call(null,inst_80039);
var inst_80066 = inst_80040.call(null,inst_80048);
var inst_80067 = cljs.core.not.call(null,inst_80066);
var inst_80068 = (inst_80065) && (inst_80067);
var state_80088__$1 = state_80088;
var statearr_80138_80190 = state_80088__$1;
(statearr_80138_80190[(2)] = inst_80068);

(statearr_80138_80190[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80089 === (10))){
var inst_79990 = (state_80088[(8)]);
var inst_80011 = (state_80088[(2)]);
var inst_80012 = cljs.core.get.call(null,inst_80011,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_80013 = cljs.core.get.call(null,inst_80011,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_80014 = cljs.core.get.call(null,inst_80011,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_80015 = inst_79990;
var state_80088__$1 = (function (){var statearr_80139 = state_80088;
(statearr_80139[(16)] = inst_80014);

(statearr_80139[(7)] = inst_80015);

(statearr_80139[(17)] = inst_80012);

(statearr_80139[(18)] = inst_80013);

return statearr_80139;
})();
var statearr_80140_80191 = state_80088__$1;
(statearr_80140_80191[(2)] = null);

(statearr_80140_80191[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80089 === (18))){
var inst_80030 = (state_80088[(2)]);
var state_80088__$1 = state_80088;
var statearr_80141_80192 = state_80088__$1;
(statearr_80141_80192[(2)] = inst_80030);

(statearr_80141_80192[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80089 === (37))){
var state_80088__$1 = state_80088;
var statearr_80142_80193 = state_80088__$1;
(statearr_80142_80193[(2)] = null);

(statearr_80142_80193[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80089 === (8))){
var inst_79990 = (state_80088[(8)]);
var inst_80008 = cljs.core.apply.call(null,cljs.core.hash_map,inst_79990);
var state_80088__$1 = state_80088;
var statearr_80143_80194 = state_80088__$1;
(statearr_80143_80194[(2)] = inst_80008);

(statearr_80143_80194[(1)] = (10));


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
});})(c__79089__auto___80148,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__78999__auto__,c__79089__auto___80148,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__79000__auto__ = null;
var cljs$core$async$mix_$_state_machine__79000__auto____0 = (function (){
var statearr_80144 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_80144[(0)] = cljs$core$async$mix_$_state_machine__79000__auto__);

(statearr_80144[(1)] = (1));

return statearr_80144;
});
var cljs$core$async$mix_$_state_machine__79000__auto____1 = (function (state_80088){
while(true){
var ret_value__79001__auto__ = (function (){try{while(true){
var result__79002__auto__ = switch__78999__auto__.call(null,state_80088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__79002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__79002__auto__;
}
break;
}
}catch (e80145){if((e80145 instanceof Object)){
var ex__79003__auto__ = e80145;
var statearr_80146_80195 = state_80088;
(statearr_80146_80195[(5)] = ex__79003__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80145;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__79001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80196 = state_80088;
state_80088 = G__80196;
continue;
} else {
return ret_value__79001__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__79000__auto__ = function(state_80088){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__79000__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__79000__auto____1.call(this,state_80088);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__79000__auto____0;
cljs$core$async$mix_$_state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__79000__auto____1;
return cljs$core$async$mix_$_state_machine__79000__auto__;
})()
;})(switch__78999__auto__,c__79089__auto___80148,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__79091__auto__ = (function (){var statearr_80147 = f__79090__auto__.call(null);
(statearr_80147[(6)] = c__79089__auto___80148);

return statearr_80147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__79091__auto__);
});})(c__79089__auto___80148,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__75634__auto__ = (((p == null))?null:p);
var m__75635__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__75634__auto__)]);
if(!((m__75635__auto__ == null))){
return m__75635__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__75635__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__75635__auto____$1 == null))){
return m__75635__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__75634__auto__ = (((p == null))?null:p);
var m__75635__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__75634__auto__)]);
if(!((m__75635__auto__ == null))){
return m__75635__auto__.call(null,p,v,ch);
} else {
var m__75635__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__75635__auto____$1 == null))){
return m__75635__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__80198 = arguments.length;
switch (G__80198) {
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
var x__75634__auto__ = (((p == null))?null:p);
var m__75635__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__75634__auto__)]);
if(!((m__75635__auto__ == null))){
return m__75635__auto__.call(null,p);
} else {
var m__75635__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__75635__auto____$1 == null))){
return m__75635__auto____$1.call(null,p);
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
var x__75634__auto__ = (((p == null))?null:p);
var m__75635__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__75634__auto__)]);
if(!((m__75635__auto__ == null))){
return m__75635__auto__.call(null,p,v);
} else {
var m__75635__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__75635__auto____$1 == null))){
return m__75635__auto____$1.call(null,p,v);
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
var G__80202 = arguments.length;
switch (G__80202) {
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
var or__74901__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__74901__auto__)){
return or__74901__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__74901__auto__,mults){
return (function (p1__80200_SHARP_){
if(cljs.core.truth_(p1__80200_SHARP_.call(null,topic))){
return p1__80200_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__80200_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__74901__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async80203 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async80203 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta80204){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta80204 = meta80204;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async80203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_80205,meta80204__$1){
var self__ = this;
var _80205__$1 = this;
return (new cljs.core.async.t_cljs$core$async80203(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta80204__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async80203.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_80205){
var self__ = this;
var _80205__$1 = this;
return self__.meta80204;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async80203.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async80203.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async80203.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async80203.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async80203.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async80203.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async80203.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async80203.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta80204","meta80204",-438080990,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async80203.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async80203.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async80203";

cljs.core.async.t_cljs$core$async80203.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__75572__auto__,writer__75573__auto__,opt__75574__auto__){
return cljs.core._write.call(null,writer__75573__auto__,"cljs.core.async/t_cljs$core$async80203");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async80203 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async80203(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta80204){
return (new cljs.core.async.t_cljs$core$async80203(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta80204));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async80203(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__79089__auto___80323 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__79089__auto___80323,mults,ensure_mult,p){
return (function (){
var f__79090__auto__ = (function (){var switch__78999__auto__ = ((function (c__79089__auto___80323,mults,ensure_mult,p){
return (function (state_80277){
var state_val_80278 = (state_80277[(1)]);
if((state_val_80278 === (7))){
var inst_80273 = (state_80277[(2)]);
var state_80277__$1 = state_80277;
var statearr_80279_80324 = state_80277__$1;
(statearr_80279_80324[(2)] = inst_80273);

(statearr_80279_80324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80278 === (20))){
var state_80277__$1 = state_80277;
var statearr_80280_80325 = state_80277__$1;
(statearr_80280_80325[(2)] = null);

(statearr_80280_80325[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80278 === (1))){
var state_80277__$1 = state_80277;
var statearr_80281_80326 = state_80277__$1;
(statearr_80281_80326[(2)] = null);

(statearr_80281_80326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80278 === (24))){
var inst_80256 = (state_80277[(7)]);
var inst_80265 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_80256);
var state_80277__$1 = state_80277;
var statearr_80282_80327 = state_80277__$1;
(statearr_80282_80327[(2)] = inst_80265);

(statearr_80282_80327[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80278 === (4))){
var inst_80208 = (state_80277[(8)]);
var inst_80208__$1 = (state_80277[(2)]);
var inst_80209 = (inst_80208__$1 == null);
var state_80277__$1 = (function (){var statearr_80283 = state_80277;
(statearr_80283[(8)] = inst_80208__$1);

return statearr_80283;
})();
if(cljs.core.truth_(inst_80209)){
var statearr_80284_80328 = state_80277__$1;
(statearr_80284_80328[(1)] = (5));

} else {
var statearr_80285_80329 = state_80277__$1;
(statearr_80285_80329[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80278 === (15))){
var inst_80250 = (state_80277[(2)]);
var state_80277__$1 = state_80277;
var statearr_80286_80330 = state_80277__$1;
(statearr_80286_80330[(2)] = inst_80250);

(statearr_80286_80330[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80278 === (21))){
var inst_80270 = (state_80277[(2)]);
var state_80277__$1 = (function (){var statearr_80287 = state_80277;
(statearr_80287[(9)] = inst_80270);

return statearr_80287;
})();
var statearr_80288_80331 = state_80277__$1;
(statearr_80288_80331[(2)] = null);

(statearr_80288_80331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80278 === (13))){
var inst_80232 = (state_80277[(10)]);
var inst_80234 = cljs.core.chunked_seq_QMARK_.call(null,inst_80232);
var state_80277__$1 = state_80277;
if(inst_80234){
var statearr_80289_80332 = state_80277__$1;
(statearr_80289_80332[(1)] = (16));

} else {
var statearr_80290_80333 = state_80277__$1;
(statearr_80290_80333[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80278 === (22))){
var inst_80262 = (state_80277[(2)]);
var state_80277__$1 = state_80277;
if(cljs.core.truth_(inst_80262)){
var statearr_80291_80334 = state_80277__$1;
(statearr_80291_80334[(1)] = (23));

} else {
var statearr_80292_80335 = state_80277__$1;
(statearr_80292_80335[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80278 === (6))){
var inst_80258 = (state_80277[(11)]);
var inst_80208 = (state_80277[(8)]);
var inst_80256 = (state_80277[(7)]);
var inst_80256__$1 = topic_fn.call(null,inst_80208);
var inst_80257 = cljs.core.deref.call(null,mults);
var inst_80258__$1 = cljs.core.get.call(null,inst_80257,inst_80256__$1);
var state_80277__$1 = (function (){var statearr_80293 = state_80277;
(statearr_80293[(11)] = inst_80258__$1);

(statearr_80293[(7)] = inst_80256__$1);

return statearr_80293;
})();
if(cljs.core.truth_(inst_80258__$1)){
var statearr_80294_80336 = state_80277__$1;
(statearr_80294_80336[(1)] = (19));

} else {
var statearr_80295_80337 = state_80277__$1;
(statearr_80295_80337[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80278 === (25))){
var inst_80267 = (state_80277[(2)]);
var state_80277__$1 = state_80277;
var statearr_80296_80338 = state_80277__$1;
(statearr_80296_80338[(2)] = inst_80267);

(statearr_80296_80338[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80278 === (17))){
var inst_80232 = (state_80277[(10)]);
var inst_80241 = cljs.core.first.call(null,inst_80232);
var inst_80242 = cljs.core.async.muxch_STAR_.call(null,inst_80241);
var inst_80243 = cljs.core.async.close_BANG_.call(null,inst_80242);
var inst_80244 = cljs.core.next.call(null,inst_80232);
var inst_80218 = inst_80244;
var inst_80219 = null;
var inst_80220 = (0);
var inst_80221 = (0);
var state_80277__$1 = (function (){var statearr_80297 = state_80277;
(statearr_80297[(12)] = inst_80221);

(statearr_80297[(13)] = inst_80218);

(statearr_80297[(14)] = inst_80219);

(statearr_80297[(15)] = inst_80220);

(statearr_80297[(16)] = inst_80243);

return statearr_80297;
})();
var statearr_80298_80339 = state_80277__$1;
(statearr_80298_80339[(2)] = null);

(statearr_80298_80339[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80278 === (3))){
var inst_80275 = (state_80277[(2)]);
var state_80277__$1 = state_80277;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80277__$1,inst_80275);
} else {
if((state_val_80278 === (12))){
var inst_80252 = (state_80277[(2)]);
var state_80277__$1 = state_80277;
var statearr_80299_80340 = state_80277__$1;
(statearr_80299_80340[(2)] = inst_80252);

(statearr_80299_80340[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80278 === (2))){
var state_80277__$1 = state_80277;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80277__$1,(4),ch);
} else {
if((state_val_80278 === (23))){
var state_80277__$1 = state_80277;
var statearr_80300_80341 = state_80277__$1;
(statearr_80300_80341[(2)] = null);

(statearr_80300_80341[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80278 === (19))){
var inst_80258 = (state_80277[(11)]);
var inst_80208 = (state_80277[(8)]);
var inst_80260 = cljs.core.async.muxch_STAR_.call(null,inst_80258);
var state_80277__$1 = state_80277;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80277__$1,(22),inst_80260,inst_80208);
} else {
if((state_val_80278 === (11))){
var inst_80232 = (state_80277[(10)]);
var inst_80218 = (state_80277[(13)]);
var inst_80232__$1 = cljs.core.seq.call(null,inst_80218);
var state_80277__$1 = (function (){var statearr_80301 = state_80277;
(statearr_80301[(10)] = inst_80232__$1);

return statearr_80301;
})();
if(inst_80232__$1){
var statearr_80302_80342 = state_80277__$1;
(statearr_80302_80342[(1)] = (13));

} else {
var statearr_80303_80343 = state_80277__$1;
(statearr_80303_80343[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80278 === (9))){
var inst_80254 = (state_80277[(2)]);
var state_80277__$1 = state_80277;
var statearr_80304_80344 = state_80277__$1;
(statearr_80304_80344[(2)] = inst_80254);

(statearr_80304_80344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80278 === (5))){
var inst_80215 = cljs.core.deref.call(null,mults);
var inst_80216 = cljs.core.vals.call(null,inst_80215);
var inst_80217 = cljs.core.seq.call(null,inst_80216);
var inst_80218 = inst_80217;
var inst_80219 = null;
var inst_80220 = (0);
var inst_80221 = (0);
var state_80277__$1 = (function (){var statearr_80305 = state_80277;
(statearr_80305[(12)] = inst_80221);

(statearr_80305[(13)] = inst_80218);

(statearr_80305[(14)] = inst_80219);

(statearr_80305[(15)] = inst_80220);

return statearr_80305;
})();
var statearr_80306_80345 = state_80277__$1;
(statearr_80306_80345[(2)] = null);

(statearr_80306_80345[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80278 === (14))){
var state_80277__$1 = state_80277;
var statearr_80310_80346 = state_80277__$1;
(statearr_80310_80346[(2)] = null);

(statearr_80310_80346[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80278 === (16))){
var inst_80232 = (state_80277[(10)]);
var inst_80236 = cljs.core.chunk_first.call(null,inst_80232);
var inst_80237 = cljs.core.chunk_rest.call(null,inst_80232);
var inst_80238 = cljs.core.count.call(null,inst_80236);
var inst_80218 = inst_80237;
var inst_80219 = inst_80236;
var inst_80220 = inst_80238;
var inst_80221 = (0);
var state_80277__$1 = (function (){var statearr_80311 = state_80277;
(statearr_80311[(12)] = inst_80221);

(statearr_80311[(13)] = inst_80218);

(statearr_80311[(14)] = inst_80219);

(statearr_80311[(15)] = inst_80220);

return statearr_80311;
})();
var statearr_80312_80347 = state_80277__$1;
(statearr_80312_80347[(2)] = null);

(statearr_80312_80347[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80278 === (10))){
var inst_80221 = (state_80277[(12)]);
var inst_80218 = (state_80277[(13)]);
var inst_80219 = (state_80277[(14)]);
var inst_80220 = (state_80277[(15)]);
var inst_80226 = cljs.core._nth.call(null,inst_80219,inst_80221);
var inst_80227 = cljs.core.async.muxch_STAR_.call(null,inst_80226);
var inst_80228 = cljs.core.async.close_BANG_.call(null,inst_80227);
var inst_80229 = (inst_80221 + (1));
var tmp80307 = inst_80218;
var tmp80308 = inst_80219;
var tmp80309 = inst_80220;
var inst_80218__$1 = tmp80307;
var inst_80219__$1 = tmp80308;
var inst_80220__$1 = tmp80309;
var inst_80221__$1 = inst_80229;
var state_80277__$1 = (function (){var statearr_80313 = state_80277;
(statearr_80313[(12)] = inst_80221__$1);

(statearr_80313[(13)] = inst_80218__$1);

(statearr_80313[(14)] = inst_80219__$1);

(statearr_80313[(17)] = inst_80228);

(statearr_80313[(15)] = inst_80220__$1);

return statearr_80313;
})();
var statearr_80314_80348 = state_80277__$1;
(statearr_80314_80348[(2)] = null);

(statearr_80314_80348[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80278 === (18))){
var inst_80247 = (state_80277[(2)]);
var state_80277__$1 = state_80277;
var statearr_80315_80349 = state_80277__$1;
(statearr_80315_80349[(2)] = inst_80247);

(statearr_80315_80349[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80278 === (8))){
var inst_80221 = (state_80277[(12)]);
var inst_80220 = (state_80277[(15)]);
var inst_80223 = (inst_80221 < inst_80220);
var inst_80224 = inst_80223;
var state_80277__$1 = state_80277;
if(cljs.core.truth_(inst_80224)){
var statearr_80316_80350 = state_80277__$1;
(statearr_80316_80350[(1)] = (10));

} else {
var statearr_80317_80351 = state_80277__$1;
(statearr_80317_80351[(1)] = (11));

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
});})(c__79089__auto___80323,mults,ensure_mult,p))
;
return ((function (switch__78999__auto__,c__79089__auto___80323,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__79000__auto__ = null;
var cljs$core$async$state_machine__79000__auto____0 = (function (){
var statearr_80318 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_80318[(0)] = cljs$core$async$state_machine__79000__auto__);

(statearr_80318[(1)] = (1));

return statearr_80318;
});
var cljs$core$async$state_machine__79000__auto____1 = (function (state_80277){
while(true){
var ret_value__79001__auto__ = (function (){try{while(true){
var result__79002__auto__ = switch__78999__auto__.call(null,state_80277);
if(cljs.core.keyword_identical_QMARK_.call(null,result__79002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__79002__auto__;
}
break;
}
}catch (e80319){if((e80319 instanceof Object)){
var ex__79003__auto__ = e80319;
var statearr_80320_80352 = state_80277;
(statearr_80320_80352[(5)] = ex__79003__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__79001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80353 = state_80277;
state_80277 = G__80353;
continue;
} else {
return ret_value__79001__auto__;
}
break;
}
});
cljs$core$async$state_machine__79000__auto__ = function(state_80277){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__79000__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__79000__auto____1.call(this,state_80277);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__79000__auto____0;
cljs$core$async$state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__79000__auto____1;
return cljs$core$async$state_machine__79000__auto__;
})()
;})(switch__78999__auto__,c__79089__auto___80323,mults,ensure_mult,p))
})();
var state__79091__auto__ = (function (){var statearr_80321 = f__79090__auto__.call(null);
(statearr_80321[(6)] = c__79089__auto___80323);

return statearr_80321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__79091__auto__);
});})(c__79089__auto___80323,mults,ensure_mult,p))
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
var G__80355 = arguments.length;
switch (G__80355) {
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
var G__80358 = arguments.length;
switch (G__80358) {
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
var G__80361 = arguments.length;
switch (G__80361) {
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
var c__79089__auto___80428 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__79089__auto___80428,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__79090__auto__ = (function (){var switch__78999__auto__ = ((function (c__79089__auto___80428,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_80400){
var state_val_80401 = (state_80400[(1)]);
if((state_val_80401 === (7))){
var state_80400__$1 = state_80400;
var statearr_80402_80429 = state_80400__$1;
(statearr_80402_80429[(2)] = null);

(statearr_80402_80429[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80401 === (1))){
var state_80400__$1 = state_80400;
var statearr_80403_80430 = state_80400__$1;
(statearr_80403_80430[(2)] = null);

(statearr_80403_80430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80401 === (4))){
var inst_80364 = (state_80400[(7)]);
var inst_80366 = (inst_80364 < cnt);
var state_80400__$1 = state_80400;
if(cljs.core.truth_(inst_80366)){
var statearr_80404_80431 = state_80400__$1;
(statearr_80404_80431[(1)] = (6));

} else {
var statearr_80405_80432 = state_80400__$1;
(statearr_80405_80432[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80401 === (15))){
var inst_80396 = (state_80400[(2)]);
var state_80400__$1 = state_80400;
var statearr_80406_80433 = state_80400__$1;
(statearr_80406_80433[(2)] = inst_80396);

(statearr_80406_80433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80401 === (13))){
var inst_80389 = cljs.core.async.close_BANG_.call(null,out);
var state_80400__$1 = state_80400;
var statearr_80407_80434 = state_80400__$1;
(statearr_80407_80434[(2)] = inst_80389);

(statearr_80407_80434[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80401 === (6))){
var state_80400__$1 = state_80400;
var statearr_80408_80435 = state_80400__$1;
(statearr_80408_80435[(2)] = null);

(statearr_80408_80435[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80401 === (3))){
var inst_80398 = (state_80400[(2)]);
var state_80400__$1 = state_80400;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80400__$1,inst_80398);
} else {
if((state_val_80401 === (12))){
var inst_80386 = (state_80400[(8)]);
var inst_80386__$1 = (state_80400[(2)]);
var inst_80387 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_80386__$1);
var state_80400__$1 = (function (){var statearr_80409 = state_80400;
(statearr_80409[(8)] = inst_80386__$1);

return statearr_80409;
})();
if(cljs.core.truth_(inst_80387)){
var statearr_80410_80436 = state_80400__$1;
(statearr_80410_80436[(1)] = (13));

} else {
var statearr_80411_80437 = state_80400__$1;
(statearr_80411_80437[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80401 === (2))){
var inst_80363 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_80364 = (0);
var state_80400__$1 = (function (){var statearr_80412 = state_80400;
(statearr_80412[(9)] = inst_80363);

(statearr_80412[(7)] = inst_80364);

return statearr_80412;
})();
var statearr_80413_80438 = state_80400__$1;
(statearr_80413_80438[(2)] = null);

(statearr_80413_80438[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80401 === (11))){
var inst_80364 = (state_80400[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_80400,(10),Object,null,(9));
var inst_80373 = chs__$1.call(null,inst_80364);
var inst_80374 = done.call(null,inst_80364);
var inst_80375 = cljs.core.async.take_BANG_.call(null,inst_80373,inst_80374);
var state_80400__$1 = state_80400;
var statearr_80414_80439 = state_80400__$1;
(statearr_80414_80439[(2)] = inst_80375);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80400__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80401 === (9))){
var inst_80364 = (state_80400[(7)]);
var inst_80377 = (state_80400[(2)]);
var inst_80378 = (inst_80364 + (1));
var inst_80364__$1 = inst_80378;
var state_80400__$1 = (function (){var statearr_80415 = state_80400;
(statearr_80415[(10)] = inst_80377);

(statearr_80415[(7)] = inst_80364__$1);

return statearr_80415;
})();
var statearr_80416_80440 = state_80400__$1;
(statearr_80416_80440[(2)] = null);

(statearr_80416_80440[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80401 === (5))){
var inst_80384 = (state_80400[(2)]);
var state_80400__$1 = (function (){var statearr_80417 = state_80400;
(statearr_80417[(11)] = inst_80384);

return statearr_80417;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80400__$1,(12),dchan);
} else {
if((state_val_80401 === (14))){
var inst_80386 = (state_80400[(8)]);
var inst_80391 = cljs.core.apply.call(null,f,inst_80386);
var state_80400__$1 = state_80400;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80400__$1,(16),out,inst_80391);
} else {
if((state_val_80401 === (16))){
var inst_80393 = (state_80400[(2)]);
var state_80400__$1 = (function (){var statearr_80418 = state_80400;
(statearr_80418[(12)] = inst_80393);

return statearr_80418;
})();
var statearr_80419_80441 = state_80400__$1;
(statearr_80419_80441[(2)] = null);

(statearr_80419_80441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80401 === (10))){
var inst_80368 = (state_80400[(2)]);
var inst_80369 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_80400__$1 = (function (){var statearr_80420 = state_80400;
(statearr_80420[(13)] = inst_80368);

return statearr_80420;
})();
var statearr_80421_80442 = state_80400__$1;
(statearr_80421_80442[(2)] = inst_80369);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80400__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80401 === (8))){
var inst_80382 = (state_80400[(2)]);
var state_80400__$1 = state_80400;
var statearr_80422_80443 = state_80400__$1;
(statearr_80422_80443[(2)] = inst_80382);

(statearr_80422_80443[(1)] = (5));


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
});})(c__79089__auto___80428,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__78999__auto__,c__79089__auto___80428,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__79000__auto__ = null;
var cljs$core$async$state_machine__79000__auto____0 = (function (){
var statearr_80423 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_80423[(0)] = cljs$core$async$state_machine__79000__auto__);

(statearr_80423[(1)] = (1));

return statearr_80423;
});
var cljs$core$async$state_machine__79000__auto____1 = (function (state_80400){
while(true){
var ret_value__79001__auto__ = (function (){try{while(true){
var result__79002__auto__ = switch__78999__auto__.call(null,state_80400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__79002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__79002__auto__;
}
break;
}
}catch (e80424){if((e80424 instanceof Object)){
var ex__79003__auto__ = e80424;
var statearr_80425_80444 = state_80400;
(statearr_80425_80444[(5)] = ex__79003__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__79001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80445 = state_80400;
state_80400 = G__80445;
continue;
} else {
return ret_value__79001__auto__;
}
break;
}
});
cljs$core$async$state_machine__79000__auto__ = function(state_80400){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__79000__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__79000__auto____1.call(this,state_80400);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__79000__auto____0;
cljs$core$async$state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__79000__auto____1;
return cljs$core$async$state_machine__79000__auto__;
})()
;})(switch__78999__auto__,c__79089__auto___80428,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__79091__auto__ = (function (){var statearr_80426 = f__79090__auto__.call(null);
(statearr_80426[(6)] = c__79089__auto___80428);

return statearr_80426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__79091__auto__);
});})(c__79089__auto___80428,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__80448 = arguments.length;
switch (G__80448) {
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
var c__79089__auto___80502 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__79089__auto___80502,out){
return (function (){
var f__79090__auto__ = (function (){var switch__78999__auto__ = ((function (c__79089__auto___80502,out){
return (function (state_80480){
var state_val_80481 = (state_80480[(1)]);
if((state_val_80481 === (7))){
var inst_80460 = (state_80480[(7)]);
var inst_80459 = (state_80480[(8)]);
var inst_80459__$1 = (state_80480[(2)]);
var inst_80460__$1 = cljs.core.nth.call(null,inst_80459__$1,(0),null);
var inst_80461 = cljs.core.nth.call(null,inst_80459__$1,(1),null);
var inst_80462 = (inst_80460__$1 == null);
var state_80480__$1 = (function (){var statearr_80482 = state_80480;
(statearr_80482[(7)] = inst_80460__$1);

(statearr_80482[(9)] = inst_80461);

(statearr_80482[(8)] = inst_80459__$1);

return statearr_80482;
})();
if(cljs.core.truth_(inst_80462)){
var statearr_80483_80503 = state_80480__$1;
(statearr_80483_80503[(1)] = (8));

} else {
var statearr_80484_80504 = state_80480__$1;
(statearr_80484_80504[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80481 === (1))){
var inst_80449 = cljs.core.vec.call(null,chs);
var inst_80450 = inst_80449;
var state_80480__$1 = (function (){var statearr_80485 = state_80480;
(statearr_80485[(10)] = inst_80450);

return statearr_80485;
})();
var statearr_80486_80505 = state_80480__$1;
(statearr_80486_80505[(2)] = null);

(statearr_80486_80505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80481 === (4))){
var inst_80450 = (state_80480[(10)]);
var state_80480__$1 = state_80480;
return cljs.core.async.ioc_alts_BANG_.call(null,state_80480__$1,(7),inst_80450);
} else {
if((state_val_80481 === (6))){
var inst_80476 = (state_80480[(2)]);
var state_80480__$1 = state_80480;
var statearr_80487_80506 = state_80480__$1;
(statearr_80487_80506[(2)] = inst_80476);

(statearr_80487_80506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80481 === (3))){
var inst_80478 = (state_80480[(2)]);
var state_80480__$1 = state_80480;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80480__$1,inst_80478);
} else {
if((state_val_80481 === (2))){
var inst_80450 = (state_80480[(10)]);
var inst_80452 = cljs.core.count.call(null,inst_80450);
var inst_80453 = (inst_80452 > (0));
var state_80480__$1 = state_80480;
if(cljs.core.truth_(inst_80453)){
var statearr_80489_80507 = state_80480__$1;
(statearr_80489_80507[(1)] = (4));

} else {
var statearr_80490_80508 = state_80480__$1;
(statearr_80490_80508[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80481 === (11))){
var inst_80450 = (state_80480[(10)]);
var inst_80469 = (state_80480[(2)]);
var tmp80488 = inst_80450;
var inst_80450__$1 = tmp80488;
var state_80480__$1 = (function (){var statearr_80491 = state_80480;
(statearr_80491[(11)] = inst_80469);

(statearr_80491[(10)] = inst_80450__$1);

return statearr_80491;
})();
var statearr_80492_80509 = state_80480__$1;
(statearr_80492_80509[(2)] = null);

(statearr_80492_80509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80481 === (9))){
var inst_80460 = (state_80480[(7)]);
var state_80480__$1 = state_80480;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80480__$1,(11),out,inst_80460);
} else {
if((state_val_80481 === (5))){
var inst_80474 = cljs.core.async.close_BANG_.call(null,out);
var state_80480__$1 = state_80480;
var statearr_80493_80510 = state_80480__$1;
(statearr_80493_80510[(2)] = inst_80474);

(statearr_80493_80510[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80481 === (10))){
var inst_80472 = (state_80480[(2)]);
var state_80480__$1 = state_80480;
var statearr_80494_80511 = state_80480__$1;
(statearr_80494_80511[(2)] = inst_80472);

(statearr_80494_80511[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80481 === (8))){
var inst_80460 = (state_80480[(7)]);
var inst_80450 = (state_80480[(10)]);
var inst_80461 = (state_80480[(9)]);
var inst_80459 = (state_80480[(8)]);
var inst_80464 = (function (){var cs = inst_80450;
var vec__80455 = inst_80459;
var v = inst_80460;
var c = inst_80461;
return ((function (cs,vec__80455,v,c,inst_80460,inst_80450,inst_80461,inst_80459,state_val_80481,c__79089__auto___80502,out){
return (function (p1__80446_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__80446_SHARP_);
});
;})(cs,vec__80455,v,c,inst_80460,inst_80450,inst_80461,inst_80459,state_val_80481,c__79089__auto___80502,out))
})();
var inst_80465 = cljs.core.filterv.call(null,inst_80464,inst_80450);
var inst_80450__$1 = inst_80465;
var state_80480__$1 = (function (){var statearr_80495 = state_80480;
(statearr_80495[(10)] = inst_80450__$1);

return statearr_80495;
})();
var statearr_80496_80512 = state_80480__$1;
(statearr_80496_80512[(2)] = null);

(statearr_80496_80512[(1)] = (2));


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
});})(c__79089__auto___80502,out))
;
return ((function (switch__78999__auto__,c__79089__auto___80502,out){
return (function() {
var cljs$core$async$state_machine__79000__auto__ = null;
var cljs$core$async$state_machine__79000__auto____0 = (function (){
var statearr_80497 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_80497[(0)] = cljs$core$async$state_machine__79000__auto__);

(statearr_80497[(1)] = (1));

return statearr_80497;
});
var cljs$core$async$state_machine__79000__auto____1 = (function (state_80480){
while(true){
var ret_value__79001__auto__ = (function (){try{while(true){
var result__79002__auto__ = switch__78999__auto__.call(null,state_80480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__79002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__79002__auto__;
}
break;
}
}catch (e80498){if((e80498 instanceof Object)){
var ex__79003__auto__ = e80498;
var statearr_80499_80513 = state_80480;
(statearr_80499_80513[(5)] = ex__79003__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__79001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80514 = state_80480;
state_80480 = G__80514;
continue;
} else {
return ret_value__79001__auto__;
}
break;
}
});
cljs$core$async$state_machine__79000__auto__ = function(state_80480){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__79000__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__79000__auto____1.call(this,state_80480);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__79000__auto____0;
cljs$core$async$state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__79000__auto____1;
return cljs$core$async$state_machine__79000__auto__;
})()
;})(switch__78999__auto__,c__79089__auto___80502,out))
})();
var state__79091__auto__ = (function (){var statearr_80500 = f__79090__auto__.call(null);
(statearr_80500[(6)] = c__79089__auto___80502);

return statearr_80500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__79091__auto__);
});})(c__79089__auto___80502,out))
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
var G__80516 = arguments.length;
switch (G__80516) {
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
var c__79089__auto___80561 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__79089__auto___80561,out){
return (function (){
var f__79090__auto__ = (function (){var switch__78999__auto__ = ((function (c__79089__auto___80561,out){
return (function (state_80540){
var state_val_80541 = (state_80540[(1)]);
if((state_val_80541 === (7))){
var inst_80522 = (state_80540[(7)]);
var inst_80522__$1 = (state_80540[(2)]);
var inst_80523 = (inst_80522__$1 == null);
var inst_80524 = cljs.core.not.call(null,inst_80523);
var state_80540__$1 = (function (){var statearr_80542 = state_80540;
(statearr_80542[(7)] = inst_80522__$1);

return statearr_80542;
})();
if(inst_80524){
var statearr_80543_80562 = state_80540__$1;
(statearr_80543_80562[(1)] = (8));

} else {
var statearr_80544_80563 = state_80540__$1;
(statearr_80544_80563[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80541 === (1))){
var inst_80517 = (0);
var state_80540__$1 = (function (){var statearr_80545 = state_80540;
(statearr_80545[(8)] = inst_80517);

return statearr_80545;
})();
var statearr_80546_80564 = state_80540__$1;
(statearr_80546_80564[(2)] = null);

(statearr_80546_80564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80541 === (4))){
var state_80540__$1 = state_80540;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80540__$1,(7),ch);
} else {
if((state_val_80541 === (6))){
var inst_80535 = (state_80540[(2)]);
var state_80540__$1 = state_80540;
var statearr_80547_80565 = state_80540__$1;
(statearr_80547_80565[(2)] = inst_80535);

(statearr_80547_80565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80541 === (3))){
var inst_80537 = (state_80540[(2)]);
var inst_80538 = cljs.core.async.close_BANG_.call(null,out);
var state_80540__$1 = (function (){var statearr_80548 = state_80540;
(statearr_80548[(9)] = inst_80537);

return statearr_80548;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80540__$1,inst_80538);
} else {
if((state_val_80541 === (2))){
var inst_80517 = (state_80540[(8)]);
var inst_80519 = (inst_80517 < n);
var state_80540__$1 = state_80540;
if(cljs.core.truth_(inst_80519)){
var statearr_80549_80566 = state_80540__$1;
(statearr_80549_80566[(1)] = (4));

} else {
var statearr_80550_80567 = state_80540__$1;
(statearr_80550_80567[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80541 === (11))){
var inst_80517 = (state_80540[(8)]);
var inst_80527 = (state_80540[(2)]);
var inst_80528 = (inst_80517 + (1));
var inst_80517__$1 = inst_80528;
var state_80540__$1 = (function (){var statearr_80551 = state_80540;
(statearr_80551[(8)] = inst_80517__$1);

(statearr_80551[(10)] = inst_80527);

return statearr_80551;
})();
var statearr_80552_80568 = state_80540__$1;
(statearr_80552_80568[(2)] = null);

(statearr_80552_80568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80541 === (9))){
var state_80540__$1 = state_80540;
var statearr_80553_80569 = state_80540__$1;
(statearr_80553_80569[(2)] = null);

(statearr_80553_80569[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80541 === (5))){
var state_80540__$1 = state_80540;
var statearr_80554_80570 = state_80540__$1;
(statearr_80554_80570[(2)] = null);

(statearr_80554_80570[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80541 === (10))){
var inst_80532 = (state_80540[(2)]);
var state_80540__$1 = state_80540;
var statearr_80555_80571 = state_80540__$1;
(statearr_80555_80571[(2)] = inst_80532);

(statearr_80555_80571[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80541 === (8))){
var inst_80522 = (state_80540[(7)]);
var state_80540__$1 = state_80540;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80540__$1,(11),out,inst_80522);
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
});})(c__79089__auto___80561,out))
;
return ((function (switch__78999__auto__,c__79089__auto___80561,out){
return (function() {
var cljs$core$async$state_machine__79000__auto__ = null;
var cljs$core$async$state_machine__79000__auto____0 = (function (){
var statearr_80556 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_80556[(0)] = cljs$core$async$state_machine__79000__auto__);

(statearr_80556[(1)] = (1));

return statearr_80556;
});
var cljs$core$async$state_machine__79000__auto____1 = (function (state_80540){
while(true){
var ret_value__79001__auto__ = (function (){try{while(true){
var result__79002__auto__ = switch__78999__auto__.call(null,state_80540);
if(cljs.core.keyword_identical_QMARK_.call(null,result__79002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__79002__auto__;
}
break;
}
}catch (e80557){if((e80557 instanceof Object)){
var ex__79003__auto__ = e80557;
var statearr_80558_80572 = state_80540;
(statearr_80558_80572[(5)] = ex__79003__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__79001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80573 = state_80540;
state_80540 = G__80573;
continue;
} else {
return ret_value__79001__auto__;
}
break;
}
});
cljs$core$async$state_machine__79000__auto__ = function(state_80540){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__79000__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__79000__auto____1.call(this,state_80540);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__79000__auto____0;
cljs$core$async$state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__79000__auto____1;
return cljs$core$async$state_machine__79000__auto__;
})()
;})(switch__78999__auto__,c__79089__auto___80561,out))
})();
var state__79091__auto__ = (function (){var statearr_80559 = f__79090__auto__.call(null);
(statearr_80559[(6)] = c__79089__auto___80561);

return statearr_80559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__79091__auto__);
});})(c__79089__auto___80561,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async80575 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async80575 = (function (f,ch,meta80576){
this.f = f;
this.ch = ch;
this.meta80576 = meta80576;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async80575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_80577,meta80576__$1){
var self__ = this;
var _80577__$1 = this;
return (new cljs.core.async.t_cljs$core$async80575(self__.f,self__.ch,meta80576__$1));
});

cljs.core.async.t_cljs$core$async80575.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_80577){
var self__ = this;
var _80577__$1 = this;
return self__.meta80576;
});

cljs.core.async.t_cljs$core$async80575.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async80575.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async80575.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async80575.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async80575.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async80578 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async80578 = (function (f,ch,meta80576,_,fn1,meta80579){
this.f = f;
this.ch = ch;
this.meta80576 = meta80576;
this._ = _;
this.fn1 = fn1;
this.meta80579 = meta80579;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async80578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_80580,meta80579__$1){
var self__ = this;
var _80580__$1 = this;
return (new cljs.core.async.t_cljs$core$async80578(self__.f,self__.ch,self__.meta80576,self__._,self__.fn1,meta80579__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async80578.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_80580){
var self__ = this;
var _80580__$1 = this;
return self__.meta80579;
});})(___$1))
;

cljs.core.async.t_cljs$core$async80578.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async80578.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async80578.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async80578.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__80574_SHARP_){
return f1.call(null,(((p1__80574_SHARP_ == null))?null:self__.f.call(null,p1__80574_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async80578.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta80576","meta80576",-789321971,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async80575","cljs.core.async/t_cljs$core$async80575",-1566521746,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta80579","meta80579",-1062950140,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async80578.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async80578.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async80578";

cljs.core.async.t_cljs$core$async80578.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__75572__auto__,writer__75573__auto__,opt__75574__auto__){
return cljs.core._write.call(null,writer__75573__auto__,"cljs.core.async/t_cljs$core$async80578");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async80578 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async80578(f__$1,ch__$1,meta80576__$1,___$2,fn1__$1,meta80579){
return (new cljs.core.async.t_cljs$core$async80578(f__$1,ch__$1,meta80576__$1,___$2,fn1__$1,meta80579));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async80578(self__.f,self__.ch,self__.meta80576,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__74889__auto__ = ret;
if(cljs.core.truth_(and__74889__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__74889__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async80575.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async80575.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async80575.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta80576","meta80576",-789321971,null)], null);
});

cljs.core.async.t_cljs$core$async80575.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async80575.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async80575";

cljs.core.async.t_cljs$core$async80575.cljs$lang$ctorPrWriter = (function (this__75572__auto__,writer__75573__auto__,opt__75574__auto__){
return cljs.core._write.call(null,writer__75573__auto__,"cljs.core.async/t_cljs$core$async80575");
});

cljs.core.async.__GT_t_cljs$core$async80575 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async80575(f__$1,ch__$1,meta80576){
return (new cljs.core.async.t_cljs$core$async80575(f__$1,ch__$1,meta80576));
});

}

return (new cljs.core.async.t_cljs$core$async80575(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async80581 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async80581 = (function (f,ch,meta80582){
this.f = f;
this.ch = ch;
this.meta80582 = meta80582;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async80581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_80583,meta80582__$1){
var self__ = this;
var _80583__$1 = this;
return (new cljs.core.async.t_cljs$core$async80581(self__.f,self__.ch,meta80582__$1));
});

cljs.core.async.t_cljs$core$async80581.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_80583){
var self__ = this;
var _80583__$1 = this;
return self__.meta80582;
});

cljs.core.async.t_cljs$core$async80581.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async80581.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async80581.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async80581.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async80581.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async80581.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async80581.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta80582","meta80582",-2008096588,null)], null);
});

cljs.core.async.t_cljs$core$async80581.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async80581.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async80581";

cljs.core.async.t_cljs$core$async80581.cljs$lang$ctorPrWriter = (function (this__75572__auto__,writer__75573__auto__,opt__75574__auto__){
return cljs.core._write.call(null,writer__75573__auto__,"cljs.core.async/t_cljs$core$async80581");
});

cljs.core.async.__GT_t_cljs$core$async80581 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async80581(f__$1,ch__$1,meta80582){
return (new cljs.core.async.t_cljs$core$async80581(f__$1,ch__$1,meta80582));
});

}

return (new cljs.core.async.t_cljs$core$async80581(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async80584 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async80584 = (function (p,ch,meta80585){
this.p = p;
this.ch = ch;
this.meta80585 = meta80585;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async80584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_80586,meta80585__$1){
var self__ = this;
var _80586__$1 = this;
return (new cljs.core.async.t_cljs$core$async80584(self__.p,self__.ch,meta80585__$1));
});

cljs.core.async.t_cljs$core$async80584.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_80586){
var self__ = this;
var _80586__$1 = this;
return self__.meta80585;
});

cljs.core.async.t_cljs$core$async80584.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async80584.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async80584.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async80584.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async80584.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async80584.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async80584.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async80584.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta80585","meta80585",-832229896,null)], null);
});

cljs.core.async.t_cljs$core$async80584.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async80584.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async80584";

cljs.core.async.t_cljs$core$async80584.cljs$lang$ctorPrWriter = (function (this__75572__auto__,writer__75573__auto__,opt__75574__auto__){
return cljs.core._write.call(null,writer__75573__auto__,"cljs.core.async/t_cljs$core$async80584");
});

cljs.core.async.__GT_t_cljs$core$async80584 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async80584(p__$1,ch__$1,meta80585){
return (new cljs.core.async.t_cljs$core$async80584(p__$1,ch__$1,meta80585));
});

}

return (new cljs.core.async.t_cljs$core$async80584(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__80588 = arguments.length;
switch (G__80588) {
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
var c__79089__auto___80628 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__79089__auto___80628,out){
return (function (){
var f__79090__auto__ = (function (){var switch__78999__auto__ = ((function (c__79089__auto___80628,out){
return (function (state_80609){
var state_val_80610 = (state_80609[(1)]);
if((state_val_80610 === (7))){
var inst_80605 = (state_80609[(2)]);
var state_80609__$1 = state_80609;
var statearr_80611_80629 = state_80609__$1;
(statearr_80611_80629[(2)] = inst_80605);

(statearr_80611_80629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80610 === (1))){
var state_80609__$1 = state_80609;
var statearr_80612_80630 = state_80609__$1;
(statearr_80612_80630[(2)] = null);

(statearr_80612_80630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80610 === (4))){
var inst_80591 = (state_80609[(7)]);
var inst_80591__$1 = (state_80609[(2)]);
var inst_80592 = (inst_80591__$1 == null);
var state_80609__$1 = (function (){var statearr_80613 = state_80609;
(statearr_80613[(7)] = inst_80591__$1);

return statearr_80613;
})();
if(cljs.core.truth_(inst_80592)){
var statearr_80614_80631 = state_80609__$1;
(statearr_80614_80631[(1)] = (5));

} else {
var statearr_80615_80632 = state_80609__$1;
(statearr_80615_80632[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80610 === (6))){
var inst_80591 = (state_80609[(7)]);
var inst_80596 = p.call(null,inst_80591);
var state_80609__$1 = state_80609;
if(cljs.core.truth_(inst_80596)){
var statearr_80616_80633 = state_80609__$1;
(statearr_80616_80633[(1)] = (8));

} else {
var statearr_80617_80634 = state_80609__$1;
(statearr_80617_80634[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80610 === (3))){
var inst_80607 = (state_80609[(2)]);
var state_80609__$1 = state_80609;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80609__$1,inst_80607);
} else {
if((state_val_80610 === (2))){
var state_80609__$1 = state_80609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80609__$1,(4),ch);
} else {
if((state_val_80610 === (11))){
var inst_80599 = (state_80609[(2)]);
var state_80609__$1 = state_80609;
var statearr_80618_80635 = state_80609__$1;
(statearr_80618_80635[(2)] = inst_80599);

(statearr_80618_80635[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80610 === (9))){
var state_80609__$1 = state_80609;
var statearr_80619_80636 = state_80609__$1;
(statearr_80619_80636[(2)] = null);

(statearr_80619_80636[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80610 === (5))){
var inst_80594 = cljs.core.async.close_BANG_.call(null,out);
var state_80609__$1 = state_80609;
var statearr_80620_80637 = state_80609__$1;
(statearr_80620_80637[(2)] = inst_80594);

(statearr_80620_80637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80610 === (10))){
var inst_80602 = (state_80609[(2)]);
var state_80609__$1 = (function (){var statearr_80621 = state_80609;
(statearr_80621[(8)] = inst_80602);

return statearr_80621;
})();
var statearr_80622_80638 = state_80609__$1;
(statearr_80622_80638[(2)] = null);

(statearr_80622_80638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80610 === (8))){
var inst_80591 = (state_80609[(7)]);
var state_80609__$1 = state_80609;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80609__$1,(11),out,inst_80591);
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
});})(c__79089__auto___80628,out))
;
return ((function (switch__78999__auto__,c__79089__auto___80628,out){
return (function() {
var cljs$core$async$state_machine__79000__auto__ = null;
var cljs$core$async$state_machine__79000__auto____0 = (function (){
var statearr_80623 = [null,null,null,null,null,null,null,null,null];
(statearr_80623[(0)] = cljs$core$async$state_machine__79000__auto__);

(statearr_80623[(1)] = (1));

return statearr_80623;
});
var cljs$core$async$state_machine__79000__auto____1 = (function (state_80609){
while(true){
var ret_value__79001__auto__ = (function (){try{while(true){
var result__79002__auto__ = switch__78999__auto__.call(null,state_80609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__79002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__79002__auto__;
}
break;
}
}catch (e80624){if((e80624 instanceof Object)){
var ex__79003__auto__ = e80624;
var statearr_80625_80639 = state_80609;
(statearr_80625_80639[(5)] = ex__79003__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80624;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__79001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80640 = state_80609;
state_80609 = G__80640;
continue;
} else {
return ret_value__79001__auto__;
}
break;
}
});
cljs$core$async$state_machine__79000__auto__ = function(state_80609){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__79000__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__79000__auto____1.call(this,state_80609);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__79000__auto____0;
cljs$core$async$state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__79000__auto____1;
return cljs$core$async$state_machine__79000__auto__;
})()
;})(switch__78999__auto__,c__79089__auto___80628,out))
})();
var state__79091__auto__ = (function (){var statearr_80626 = f__79090__auto__.call(null);
(statearr_80626[(6)] = c__79089__auto___80628);

return statearr_80626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__79091__auto__);
});})(c__79089__auto___80628,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__80642 = arguments.length;
switch (G__80642) {
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
var c__79089__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__79089__auto__){
return (function (){
var f__79090__auto__ = (function (){var switch__78999__auto__ = ((function (c__79089__auto__){
return (function (state_80705){
var state_val_80706 = (state_80705[(1)]);
if((state_val_80706 === (7))){
var inst_80701 = (state_80705[(2)]);
var state_80705__$1 = state_80705;
var statearr_80707_80745 = state_80705__$1;
(statearr_80707_80745[(2)] = inst_80701);

(statearr_80707_80745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80706 === (20))){
var inst_80671 = (state_80705[(7)]);
var inst_80682 = (state_80705[(2)]);
var inst_80683 = cljs.core.next.call(null,inst_80671);
var inst_80657 = inst_80683;
var inst_80658 = null;
var inst_80659 = (0);
var inst_80660 = (0);
var state_80705__$1 = (function (){var statearr_80708 = state_80705;
(statearr_80708[(8)] = inst_80682);

(statearr_80708[(9)] = inst_80657);

(statearr_80708[(10)] = inst_80659);

(statearr_80708[(11)] = inst_80660);

(statearr_80708[(12)] = inst_80658);

return statearr_80708;
})();
var statearr_80709_80746 = state_80705__$1;
(statearr_80709_80746[(2)] = null);

(statearr_80709_80746[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80706 === (1))){
var state_80705__$1 = state_80705;
var statearr_80710_80747 = state_80705__$1;
(statearr_80710_80747[(2)] = null);

(statearr_80710_80747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80706 === (4))){
var inst_80646 = (state_80705[(13)]);
var inst_80646__$1 = (state_80705[(2)]);
var inst_80647 = (inst_80646__$1 == null);
var state_80705__$1 = (function (){var statearr_80711 = state_80705;
(statearr_80711[(13)] = inst_80646__$1);

return statearr_80711;
})();
if(cljs.core.truth_(inst_80647)){
var statearr_80712_80748 = state_80705__$1;
(statearr_80712_80748[(1)] = (5));

} else {
var statearr_80713_80749 = state_80705__$1;
(statearr_80713_80749[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80706 === (15))){
var state_80705__$1 = state_80705;
var statearr_80717_80750 = state_80705__$1;
(statearr_80717_80750[(2)] = null);

(statearr_80717_80750[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80706 === (21))){
var state_80705__$1 = state_80705;
var statearr_80718_80751 = state_80705__$1;
(statearr_80718_80751[(2)] = null);

(statearr_80718_80751[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80706 === (13))){
var inst_80657 = (state_80705[(9)]);
var inst_80659 = (state_80705[(10)]);
var inst_80660 = (state_80705[(11)]);
var inst_80658 = (state_80705[(12)]);
var inst_80667 = (state_80705[(2)]);
var inst_80668 = (inst_80660 + (1));
var tmp80714 = inst_80657;
var tmp80715 = inst_80659;
var tmp80716 = inst_80658;
var inst_80657__$1 = tmp80714;
var inst_80658__$1 = tmp80716;
var inst_80659__$1 = tmp80715;
var inst_80660__$1 = inst_80668;
var state_80705__$1 = (function (){var statearr_80719 = state_80705;
(statearr_80719[(9)] = inst_80657__$1);

(statearr_80719[(10)] = inst_80659__$1);

(statearr_80719[(14)] = inst_80667);

(statearr_80719[(11)] = inst_80660__$1);

(statearr_80719[(12)] = inst_80658__$1);

return statearr_80719;
})();
var statearr_80720_80752 = state_80705__$1;
(statearr_80720_80752[(2)] = null);

(statearr_80720_80752[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80706 === (22))){
var state_80705__$1 = state_80705;
var statearr_80721_80753 = state_80705__$1;
(statearr_80721_80753[(2)] = null);

(statearr_80721_80753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80706 === (6))){
var inst_80646 = (state_80705[(13)]);
var inst_80655 = f.call(null,inst_80646);
var inst_80656 = cljs.core.seq.call(null,inst_80655);
var inst_80657 = inst_80656;
var inst_80658 = null;
var inst_80659 = (0);
var inst_80660 = (0);
var state_80705__$1 = (function (){var statearr_80722 = state_80705;
(statearr_80722[(9)] = inst_80657);

(statearr_80722[(10)] = inst_80659);

(statearr_80722[(11)] = inst_80660);

(statearr_80722[(12)] = inst_80658);

return statearr_80722;
})();
var statearr_80723_80754 = state_80705__$1;
(statearr_80723_80754[(2)] = null);

(statearr_80723_80754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80706 === (17))){
var inst_80671 = (state_80705[(7)]);
var inst_80675 = cljs.core.chunk_first.call(null,inst_80671);
var inst_80676 = cljs.core.chunk_rest.call(null,inst_80671);
var inst_80677 = cljs.core.count.call(null,inst_80675);
var inst_80657 = inst_80676;
var inst_80658 = inst_80675;
var inst_80659 = inst_80677;
var inst_80660 = (0);
var state_80705__$1 = (function (){var statearr_80724 = state_80705;
(statearr_80724[(9)] = inst_80657);

(statearr_80724[(10)] = inst_80659);

(statearr_80724[(11)] = inst_80660);

(statearr_80724[(12)] = inst_80658);

return statearr_80724;
})();
var statearr_80725_80755 = state_80705__$1;
(statearr_80725_80755[(2)] = null);

(statearr_80725_80755[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80706 === (3))){
var inst_80703 = (state_80705[(2)]);
var state_80705__$1 = state_80705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80705__$1,inst_80703);
} else {
if((state_val_80706 === (12))){
var inst_80691 = (state_80705[(2)]);
var state_80705__$1 = state_80705;
var statearr_80726_80756 = state_80705__$1;
(statearr_80726_80756[(2)] = inst_80691);

(statearr_80726_80756[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80706 === (2))){
var state_80705__$1 = state_80705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80705__$1,(4),in$);
} else {
if((state_val_80706 === (23))){
var inst_80699 = (state_80705[(2)]);
var state_80705__$1 = state_80705;
var statearr_80727_80757 = state_80705__$1;
(statearr_80727_80757[(2)] = inst_80699);

(statearr_80727_80757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80706 === (19))){
var inst_80686 = (state_80705[(2)]);
var state_80705__$1 = state_80705;
var statearr_80728_80758 = state_80705__$1;
(statearr_80728_80758[(2)] = inst_80686);

(statearr_80728_80758[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80706 === (11))){
var inst_80671 = (state_80705[(7)]);
var inst_80657 = (state_80705[(9)]);
var inst_80671__$1 = cljs.core.seq.call(null,inst_80657);
var state_80705__$1 = (function (){var statearr_80729 = state_80705;
(statearr_80729[(7)] = inst_80671__$1);

return statearr_80729;
})();
if(inst_80671__$1){
var statearr_80730_80759 = state_80705__$1;
(statearr_80730_80759[(1)] = (14));

} else {
var statearr_80731_80760 = state_80705__$1;
(statearr_80731_80760[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80706 === (9))){
var inst_80693 = (state_80705[(2)]);
var inst_80694 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_80705__$1 = (function (){var statearr_80732 = state_80705;
(statearr_80732[(15)] = inst_80693);

return statearr_80732;
})();
if(cljs.core.truth_(inst_80694)){
var statearr_80733_80761 = state_80705__$1;
(statearr_80733_80761[(1)] = (21));

} else {
var statearr_80734_80762 = state_80705__$1;
(statearr_80734_80762[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80706 === (5))){
var inst_80649 = cljs.core.async.close_BANG_.call(null,out);
var state_80705__$1 = state_80705;
var statearr_80735_80763 = state_80705__$1;
(statearr_80735_80763[(2)] = inst_80649);

(statearr_80735_80763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80706 === (14))){
var inst_80671 = (state_80705[(7)]);
var inst_80673 = cljs.core.chunked_seq_QMARK_.call(null,inst_80671);
var state_80705__$1 = state_80705;
if(inst_80673){
var statearr_80736_80764 = state_80705__$1;
(statearr_80736_80764[(1)] = (17));

} else {
var statearr_80737_80765 = state_80705__$1;
(statearr_80737_80765[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80706 === (16))){
var inst_80689 = (state_80705[(2)]);
var state_80705__$1 = state_80705;
var statearr_80738_80766 = state_80705__$1;
(statearr_80738_80766[(2)] = inst_80689);

(statearr_80738_80766[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80706 === (10))){
var inst_80660 = (state_80705[(11)]);
var inst_80658 = (state_80705[(12)]);
var inst_80665 = cljs.core._nth.call(null,inst_80658,inst_80660);
var state_80705__$1 = state_80705;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80705__$1,(13),out,inst_80665);
} else {
if((state_val_80706 === (18))){
var inst_80671 = (state_80705[(7)]);
var inst_80680 = cljs.core.first.call(null,inst_80671);
var state_80705__$1 = state_80705;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80705__$1,(20),out,inst_80680);
} else {
if((state_val_80706 === (8))){
var inst_80659 = (state_80705[(10)]);
var inst_80660 = (state_80705[(11)]);
var inst_80662 = (inst_80660 < inst_80659);
var inst_80663 = inst_80662;
var state_80705__$1 = state_80705;
if(cljs.core.truth_(inst_80663)){
var statearr_80739_80767 = state_80705__$1;
(statearr_80739_80767[(1)] = (10));

} else {
var statearr_80740_80768 = state_80705__$1;
(statearr_80740_80768[(1)] = (11));

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
});})(c__79089__auto__))
;
return ((function (switch__78999__auto__,c__79089__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__79000__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__79000__auto____0 = (function (){
var statearr_80741 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_80741[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__79000__auto__);

(statearr_80741[(1)] = (1));

return statearr_80741;
});
var cljs$core$async$mapcat_STAR__$_state_machine__79000__auto____1 = (function (state_80705){
while(true){
var ret_value__79001__auto__ = (function (){try{while(true){
var result__79002__auto__ = switch__78999__auto__.call(null,state_80705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__79002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__79002__auto__;
}
break;
}
}catch (e80742){if((e80742 instanceof Object)){
var ex__79003__auto__ = e80742;
var statearr_80743_80769 = state_80705;
(statearr_80743_80769[(5)] = ex__79003__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__79001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80770 = state_80705;
state_80705 = G__80770;
continue;
} else {
return ret_value__79001__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__79000__auto__ = function(state_80705){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__79000__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__79000__auto____1.call(this,state_80705);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__79000__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__79000__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__79000__auto__;
})()
;})(switch__78999__auto__,c__79089__auto__))
})();
var state__79091__auto__ = (function (){var statearr_80744 = f__79090__auto__.call(null);
(statearr_80744[(6)] = c__79089__auto__);

return statearr_80744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__79091__auto__);
});})(c__79089__auto__))
);

return c__79089__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__80772 = arguments.length;
switch (G__80772) {
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
var G__80775 = arguments.length;
switch (G__80775) {
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
var G__80778 = arguments.length;
switch (G__80778) {
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
var c__79089__auto___80825 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__79089__auto___80825,out){
return (function (){
var f__79090__auto__ = (function (){var switch__78999__auto__ = ((function (c__79089__auto___80825,out){
return (function (state_80802){
var state_val_80803 = (state_80802[(1)]);
if((state_val_80803 === (7))){
var inst_80797 = (state_80802[(2)]);
var state_80802__$1 = state_80802;
var statearr_80804_80826 = state_80802__$1;
(statearr_80804_80826[(2)] = inst_80797);

(statearr_80804_80826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80803 === (1))){
var inst_80779 = null;
var state_80802__$1 = (function (){var statearr_80805 = state_80802;
(statearr_80805[(7)] = inst_80779);

return statearr_80805;
})();
var statearr_80806_80827 = state_80802__$1;
(statearr_80806_80827[(2)] = null);

(statearr_80806_80827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80803 === (4))){
var inst_80782 = (state_80802[(8)]);
var inst_80782__$1 = (state_80802[(2)]);
var inst_80783 = (inst_80782__$1 == null);
var inst_80784 = cljs.core.not.call(null,inst_80783);
var state_80802__$1 = (function (){var statearr_80807 = state_80802;
(statearr_80807[(8)] = inst_80782__$1);

return statearr_80807;
})();
if(inst_80784){
var statearr_80808_80828 = state_80802__$1;
(statearr_80808_80828[(1)] = (5));

} else {
var statearr_80809_80829 = state_80802__$1;
(statearr_80809_80829[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80803 === (6))){
var state_80802__$1 = state_80802;
var statearr_80810_80830 = state_80802__$1;
(statearr_80810_80830[(2)] = null);

(statearr_80810_80830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80803 === (3))){
var inst_80799 = (state_80802[(2)]);
var inst_80800 = cljs.core.async.close_BANG_.call(null,out);
var state_80802__$1 = (function (){var statearr_80811 = state_80802;
(statearr_80811[(9)] = inst_80799);

return statearr_80811;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80802__$1,inst_80800);
} else {
if((state_val_80803 === (2))){
var state_80802__$1 = state_80802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80802__$1,(4),ch);
} else {
if((state_val_80803 === (11))){
var inst_80782 = (state_80802[(8)]);
var inst_80791 = (state_80802[(2)]);
var inst_80779 = inst_80782;
var state_80802__$1 = (function (){var statearr_80812 = state_80802;
(statearr_80812[(10)] = inst_80791);

(statearr_80812[(7)] = inst_80779);

return statearr_80812;
})();
var statearr_80813_80831 = state_80802__$1;
(statearr_80813_80831[(2)] = null);

(statearr_80813_80831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80803 === (9))){
var inst_80782 = (state_80802[(8)]);
var state_80802__$1 = state_80802;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80802__$1,(11),out,inst_80782);
} else {
if((state_val_80803 === (5))){
var inst_80782 = (state_80802[(8)]);
var inst_80779 = (state_80802[(7)]);
var inst_80786 = cljs.core._EQ_.call(null,inst_80782,inst_80779);
var state_80802__$1 = state_80802;
if(inst_80786){
var statearr_80815_80832 = state_80802__$1;
(statearr_80815_80832[(1)] = (8));

} else {
var statearr_80816_80833 = state_80802__$1;
(statearr_80816_80833[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80803 === (10))){
var inst_80794 = (state_80802[(2)]);
var state_80802__$1 = state_80802;
var statearr_80817_80834 = state_80802__$1;
(statearr_80817_80834[(2)] = inst_80794);

(statearr_80817_80834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80803 === (8))){
var inst_80779 = (state_80802[(7)]);
var tmp80814 = inst_80779;
var inst_80779__$1 = tmp80814;
var state_80802__$1 = (function (){var statearr_80818 = state_80802;
(statearr_80818[(7)] = inst_80779__$1);

return statearr_80818;
})();
var statearr_80819_80835 = state_80802__$1;
(statearr_80819_80835[(2)] = null);

(statearr_80819_80835[(1)] = (2));


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
});})(c__79089__auto___80825,out))
;
return ((function (switch__78999__auto__,c__79089__auto___80825,out){
return (function() {
var cljs$core$async$state_machine__79000__auto__ = null;
var cljs$core$async$state_machine__79000__auto____0 = (function (){
var statearr_80820 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_80820[(0)] = cljs$core$async$state_machine__79000__auto__);

(statearr_80820[(1)] = (1));

return statearr_80820;
});
var cljs$core$async$state_machine__79000__auto____1 = (function (state_80802){
while(true){
var ret_value__79001__auto__ = (function (){try{while(true){
var result__79002__auto__ = switch__78999__auto__.call(null,state_80802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__79002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__79002__auto__;
}
break;
}
}catch (e80821){if((e80821 instanceof Object)){
var ex__79003__auto__ = e80821;
var statearr_80822_80836 = state_80802;
(statearr_80822_80836[(5)] = ex__79003__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__79001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80837 = state_80802;
state_80802 = G__80837;
continue;
} else {
return ret_value__79001__auto__;
}
break;
}
});
cljs$core$async$state_machine__79000__auto__ = function(state_80802){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__79000__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__79000__auto____1.call(this,state_80802);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__79000__auto____0;
cljs$core$async$state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__79000__auto____1;
return cljs$core$async$state_machine__79000__auto__;
})()
;})(switch__78999__auto__,c__79089__auto___80825,out))
})();
var state__79091__auto__ = (function (){var statearr_80823 = f__79090__auto__.call(null);
(statearr_80823[(6)] = c__79089__auto___80825);

return statearr_80823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__79091__auto__);
});})(c__79089__auto___80825,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__80839 = arguments.length;
switch (G__80839) {
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
var c__79089__auto___80905 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__79089__auto___80905,out){
return (function (){
var f__79090__auto__ = (function (){var switch__78999__auto__ = ((function (c__79089__auto___80905,out){
return (function (state_80877){
var state_val_80878 = (state_80877[(1)]);
if((state_val_80878 === (7))){
var inst_80873 = (state_80877[(2)]);
var state_80877__$1 = state_80877;
var statearr_80879_80906 = state_80877__$1;
(statearr_80879_80906[(2)] = inst_80873);

(statearr_80879_80906[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80878 === (1))){
var inst_80840 = (new Array(n));
var inst_80841 = inst_80840;
var inst_80842 = (0);
var state_80877__$1 = (function (){var statearr_80880 = state_80877;
(statearr_80880[(7)] = inst_80841);

(statearr_80880[(8)] = inst_80842);

return statearr_80880;
})();
var statearr_80881_80907 = state_80877__$1;
(statearr_80881_80907[(2)] = null);

(statearr_80881_80907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80878 === (4))){
var inst_80845 = (state_80877[(9)]);
var inst_80845__$1 = (state_80877[(2)]);
var inst_80846 = (inst_80845__$1 == null);
var inst_80847 = cljs.core.not.call(null,inst_80846);
var state_80877__$1 = (function (){var statearr_80882 = state_80877;
(statearr_80882[(9)] = inst_80845__$1);

return statearr_80882;
})();
if(inst_80847){
var statearr_80883_80908 = state_80877__$1;
(statearr_80883_80908[(1)] = (5));

} else {
var statearr_80884_80909 = state_80877__$1;
(statearr_80884_80909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80878 === (15))){
var inst_80867 = (state_80877[(2)]);
var state_80877__$1 = state_80877;
var statearr_80885_80910 = state_80877__$1;
(statearr_80885_80910[(2)] = inst_80867);

(statearr_80885_80910[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80878 === (13))){
var state_80877__$1 = state_80877;
var statearr_80886_80911 = state_80877__$1;
(statearr_80886_80911[(2)] = null);

(statearr_80886_80911[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80878 === (6))){
var inst_80842 = (state_80877[(8)]);
var inst_80863 = (inst_80842 > (0));
var state_80877__$1 = state_80877;
if(cljs.core.truth_(inst_80863)){
var statearr_80887_80912 = state_80877__$1;
(statearr_80887_80912[(1)] = (12));

} else {
var statearr_80888_80913 = state_80877__$1;
(statearr_80888_80913[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80878 === (3))){
var inst_80875 = (state_80877[(2)]);
var state_80877__$1 = state_80877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80877__$1,inst_80875);
} else {
if((state_val_80878 === (12))){
var inst_80841 = (state_80877[(7)]);
var inst_80865 = cljs.core.vec.call(null,inst_80841);
var state_80877__$1 = state_80877;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80877__$1,(15),out,inst_80865);
} else {
if((state_val_80878 === (2))){
var state_80877__$1 = state_80877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80877__$1,(4),ch);
} else {
if((state_val_80878 === (11))){
var inst_80857 = (state_80877[(2)]);
var inst_80858 = (new Array(n));
var inst_80841 = inst_80858;
var inst_80842 = (0);
var state_80877__$1 = (function (){var statearr_80889 = state_80877;
(statearr_80889[(7)] = inst_80841);

(statearr_80889[(8)] = inst_80842);

(statearr_80889[(10)] = inst_80857);

return statearr_80889;
})();
var statearr_80890_80914 = state_80877__$1;
(statearr_80890_80914[(2)] = null);

(statearr_80890_80914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80878 === (9))){
var inst_80841 = (state_80877[(7)]);
var inst_80855 = cljs.core.vec.call(null,inst_80841);
var state_80877__$1 = state_80877;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80877__$1,(11),out,inst_80855);
} else {
if((state_val_80878 === (5))){
var inst_80850 = (state_80877[(11)]);
var inst_80841 = (state_80877[(7)]);
var inst_80842 = (state_80877[(8)]);
var inst_80845 = (state_80877[(9)]);
var inst_80849 = (inst_80841[inst_80842] = inst_80845);
var inst_80850__$1 = (inst_80842 + (1));
var inst_80851 = (inst_80850__$1 < n);
var state_80877__$1 = (function (){var statearr_80891 = state_80877;
(statearr_80891[(11)] = inst_80850__$1);

(statearr_80891[(12)] = inst_80849);

return statearr_80891;
})();
if(cljs.core.truth_(inst_80851)){
var statearr_80892_80915 = state_80877__$1;
(statearr_80892_80915[(1)] = (8));

} else {
var statearr_80893_80916 = state_80877__$1;
(statearr_80893_80916[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80878 === (14))){
var inst_80870 = (state_80877[(2)]);
var inst_80871 = cljs.core.async.close_BANG_.call(null,out);
var state_80877__$1 = (function (){var statearr_80895 = state_80877;
(statearr_80895[(13)] = inst_80870);

return statearr_80895;
})();
var statearr_80896_80917 = state_80877__$1;
(statearr_80896_80917[(2)] = inst_80871);

(statearr_80896_80917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80878 === (10))){
var inst_80861 = (state_80877[(2)]);
var state_80877__$1 = state_80877;
var statearr_80897_80918 = state_80877__$1;
(statearr_80897_80918[(2)] = inst_80861);

(statearr_80897_80918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80878 === (8))){
var inst_80850 = (state_80877[(11)]);
var inst_80841 = (state_80877[(7)]);
var tmp80894 = inst_80841;
var inst_80841__$1 = tmp80894;
var inst_80842 = inst_80850;
var state_80877__$1 = (function (){var statearr_80898 = state_80877;
(statearr_80898[(7)] = inst_80841__$1);

(statearr_80898[(8)] = inst_80842);

return statearr_80898;
})();
var statearr_80899_80919 = state_80877__$1;
(statearr_80899_80919[(2)] = null);

(statearr_80899_80919[(1)] = (2));


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
});})(c__79089__auto___80905,out))
;
return ((function (switch__78999__auto__,c__79089__auto___80905,out){
return (function() {
var cljs$core$async$state_machine__79000__auto__ = null;
var cljs$core$async$state_machine__79000__auto____0 = (function (){
var statearr_80900 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_80900[(0)] = cljs$core$async$state_machine__79000__auto__);

(statearr_80900[(1)] = (1));

return statearr_80900;
});
var cljs$core$async$state_machine__79000__auto____1 = (function (state_80877){
while(true){
var ret_value__79001__auto__ = (function (){try{while(true){
var result__79002__auto__ = switch__78999__auto__.call(null,state_80877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__79002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__79002__auto__;
}
break;
}
}catch (e80901){if((e80901 instanceof Object)){
var ex__79003__auto__ = e80901;
var statearr_80902_80920 = state_80877;
(statearr_80902_80920[(5)] = ex__79003__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__79001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80921 = state_80877;
state_80877 = G__80921;
continue;
} else {
return ret_value__79001__auto__;
}
break;
}
});
cljs$core$async$state_machine__79000__auto__ = function(state_80877){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__79000__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__79000__auto____1.call(this,state_80877);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__79000__auto____0;
cljs$core$async$state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__79000__auto____1;
return cljs$core$async$state_machine__79000__auto__;
})()
;})(switch__78999__auto__,c__79089__auto___80905,out))
})();
var state__79091__auto__ = (function (){var statearr_80903 = f__79090__auto__.call(null);
(statearr_80903[(6)] = c__79089__auto___80905);

return statearr_80903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__79091__auto__);
});})(c__79089__auto___80905,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__80923 = arguments.length;
switch (G__80923) {
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
var c__79089__auto___80993 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__79089__auto___80993,out){
return (function (){
var f__79090__auto__ = (function (){var switch__78999__auto__ = ((function (c__79089__auto___80993,out){
return (function (state_80965){
var state_val_80966 = (state_80965[(1)]);
if((state_val_80966 === (7))){
var inst_80961 = (state_80965[(2)]);
var state_80965__$1 = state_80965;
var statearr_80967_80994 = state_80965__$1;
(statearr_80967_80994[(2)] = inst_80961);

(statearr_80967_80994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80966 === (1))){
var inst_80924 = [];
var inst_80925 = inst_80924;
var inst_80926 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_80965__$1 = (function (){var statearr_80968 = state_80965;
(statearr_80968[(7)] = inst_80926);

(statearr_80968[(8)] = inst_80925);

return statearr_80968;
})();
var statearr_80969_80995 = state_80965__$1;
(statearr_80969_80995[(2)] = null);

(statearr_80969_80995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80966 === (4))){
var inst_80929 = (state_80965[(9)]);
var inst_80929__$1 = (state_80965[(2)]);
var inst_80930 = (inst_80929__$1 == null);
var inst_80931 = cljs.core.not.call(null,inst_80930);
var state_80965__$1 = (function (){var statearr_80970 = state_80965;
(statearr_80970[(9)] = inst_80929__$1);

return statearr_80970;
})();
if(inst_80931){
var statearr_80971_80996 = state_80965__$1;
(statearr_80971_80996[(1)] = (5));

} else {
var statearr_80972_80997 = state_80965__$1;
(statearr_80972_80997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80966 === (15))){
var inst_80955 = (state_80965[(2)]);
var state_80965__$1 = state_80965;
var statearr_80973_80998 = state_80965__$1;
(statearr_80973_80998[(2)] = inst_80955);

(statearr_80973_80998[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80966 === (13))){
var state_80965__$1 = state_80965;
var statearr_80974_80999 = state_80965__$1;
(statearr_80974_80999[(2)] = null);

(statearr_80974_80999[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80966 === (6))){
var inst_80925 = (state_80965[(8)]);
var inst_80950 = inst_80925.length;
var inst_80951 = (inst_80950 > (0));
var state_80965__$1 = state_80965;
if(cljs.core.truth_(inst_80951)){
var statearr_80975_81000 = state_80965__$1;
(statearr_80975_81000[(1)] = (12));

} else {
var statearr_80976_81001 = state_80965__$1;
(statearr_80976_81001[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80966 === (3))){
var inst_80963 = (state_80965[(2)]);
var state_80965__$1 = state_80965;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80965__$1,inst_80963);
} else {
if((state_val_80966 === (12))){
var inst_80925 = (state_80965[(8)]);
var inst_80953 = cljs.core.vec.call(null,inst_80925);
var state_80965__$1 = state_80965;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80965__$1,(15),out,inst_80953);
} else {
if((state_val_80966 === (2))){
var state_80965__$1 = state_80965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80965__$1,(4),ch);
} else {
if((state_val_80966 === (11))){
var inst_80929 = (state_80965[(9)]);
var inst_80933 = (state_80965[(10)]);
var inst_80943 = (state_80965[(2)]);
var inst_80944 = [];
var inst_80945 = inst_80944.push(inst_80929);
var inst_80925 = inst_80944;
var inst_80926 = inst_80933;
var state_80965__$1 = (function (){var statearr_80977 = state_80965;
(statearr_80977[(7)] = inst_80926);

(statearr_80977[(11)] = inst_80945);

(statearr_80977[(8)] = inst_80925);

(statearr_80977[(12)] = inst_80943);

return statearr_80977;
})();
var statearr_80978_81002 = state_80965__$1;
(statearr_80978_81002[(2)] = null);

(statearr_80978_81002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80966 === (9))){
var inst_80925 = (state_80965[(8)]);
var inst_80941 = cljs.core.vec.call(null,inst_80925);
var state_80965__$1 = state_80965;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80965__$1,(11),out,inst_80941);
} else {
if((state_val_80966 === (5))){
var inst_80929 = (state_80965[(9)]);
var inst_80933 = (state_80965[(10)]);
var inst_80926 = (state_80965[(7)]);
var inst_80933__$1 = f.call(null,inst_80929);
var inst_80934 = cljs.core._EQ_.call(null,inst_80933__$1,inst_80926);
var inst_80935 = cljs.core.keyword_identical_QMARK_.call(null,inst_80926,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_80936 = (inst_80934) || (inst_80935);
var state_80965__$1 = (function (){var statearr_80979 = state_80965;
(statearr_80979[(10)] = inst_80933__$1);

return statearr_80979;
})();
if(cljs.core.truth_(inst_80936)){
var statearr_80980_81003 = state_80965__$1;
(statearr_80980_81003[(1)] = (8));

} else {
var statearr_80981_81004 = state_80965__$1;
(statearr_80981_81004[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80966 === (14))){
var inst_80958 = (state_80965[(2)]);
var inst_80959 = cljs.core.async.close_BANG_.call(null,out);
var state_80965__$1 = (function (){var statearr_80983 = state_80965;
(statearr_80983[(13)] = inst_80958);

return statearr_80983;
})();
var statearr_80984_81005 = state_80965__$1;
(statearr_80984_81005[(2)] = inst_80959);

(statearr_80984_81005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80966 === (10))){
var inst_80948 = (state_80965[(2)]);
var state_80965__$1 = state_80965;
var statearr_80985_81006 = state_80965__$1;
(statearr_80985_81006[(2)] = inst_80948);

(statearr_80985_81006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80966 === (8))){
var inst_80929 = (state_80965[(9)]);
var inst_80933 = (state_80965[(10)]);
var inst_80925 = (state_80965[(8)]);
var inst_80938 = inst_80925.push(inst_80929);
var tmp80982 = inst_80925;
var inst_80925__$1 = tmp80982;
var inst_80926 = inst_80933;
var state_80965__$1 = (function (){var statearr_80986 = state_80965;
(statearr_80986[(7)] = inst_80926);

(statearr_80986[(14)] = inst_80938);

(statearr_80986[(8)] = inst_80925__$1);

return statearr_80986;
})();
var statearr_80987_81007 = state_80965__$1;
(statearr_80987_81007[(2)] = null);

(statearr_80987_81007[(1)] = (2));


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
});})(c__79089__auto___80993,out))
;
return ((function (switch__78999__auto__,c__79089__auto___80993,out){
return (function() {
var cljs$core$async$state_machine__79000__auto__ = null;
var cljs$core$async$state_machine__79000__auto____0 = (function (){
var statearr_80988 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_80988[(0)] = cljs$core$async$state_machine__79000__auto__);

(statearr_80988[(1)] = (1));

return statearr_80988;
});
var cljs$core$async$state_machine__79000__auto____1 = (function (state_80965){
while(true){
var ret_value__79001__auto__ = (function (){try{while(true){
var result__79002__auto__ = switch__78999__auto__.call(null,state_80965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__79002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__79002__auto__;
}
break;
}
}catch (e80989){if((e80989 instanceof Object)){
var ex__79003__auto__ = e80989;
var statearr_80990_81008 = state_80965;
(statearr_80990_81008[(5)] = ex__79003__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__79001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81009 = state_80965;
state_80965 = G__81009;
continue;
} else {
return ret_value__79001__auto__;
}
break;
}
});
cljs$core$async$state_machine__79000__auto__ = function(state_80965){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__79000__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__79000__auto____1.call(this,state_80965);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__79000__auto____0;
cljs$core$async$state_machine__79000__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__79000__auto____1;
return cljs$core$async$state_machine__79000__auto__;
})()
;})(switch__78999__auto__,c__79089__auto___80993,out))
})();
var state__79091__auto__ = (function (){var statearr_80991 = f__79090__auto__.call(null);
(statearr_80991[(6)] = c__79089__auto___80993);

return statearr_80991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__79091__auto__);
});})(c__79089__auto___80993,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1515122948439
