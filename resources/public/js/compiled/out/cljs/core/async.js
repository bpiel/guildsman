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
var G__13007 = arguments.length;
switch (G__13007) {
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
if(typeof cljs.core.async.t_cljs$core$async13008 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13008 = (function (f,blockable,meta13009){
this.f = f;
this.blockable = blockable;
this.meta13009 = meta13009;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13008.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13010,meta13009__$1){
var self__ = this;
var _13010__$1 = this;
return (new cljs.core.async.t_cljs$core$async13008(self__.f,self__.blockable,meta13009__$1));
});

cljs.core.async.t_cljs$core$async13008.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13010){
var self__ = this;
var _13010__$1 = this;
return self__.meta13009;
});

cljs.core.async.t_cljs$core$async13008.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13008.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13008.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async13008.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async13008.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta13009","meta13009",1189898109,null)], null);
});

cljs.core.async.t_cljs$core$async13008.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13008.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13008";

cljs.core.async.t_cljs$core$async13008.cljs$lang$ctorPrWriter = (function (this__9030__auto__,writer__9031__auto__,opt__9032__auto__){
return cljs.core._write.call(null,writer__9031__auto__,"cljs.core.async/t_cljs$core$async13008");
});

cljs.core.async.__GT_t_cljs$core$async13008 = (function cljs$core$async$__GT_t_cljs$core$async13008(f__$1,blockable__$1,meta13009){
return (new cljs.core.async.t_cljs$core$async13008(f__$1,blockable__$1,meta13009));
});

}

return (new cljs.core.async.t_cljs$core$async13008(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__13014 = arguments.length;
switch (G__13014) {
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
var G__13017 = arguments.length;
switch (G__13017) {
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
var G__13020 = arguments.length;
switch (G__13020) {
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
var val_13022 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_13022);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_13022,ret){
return (function (){
return fn1.call(null,val_13022);
});})(val_13022,ret))
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
var G__13024 = arguments.length;
switch (G__13024) {
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
var n__9402__auto___13026 = n;
var x_13027 = (0);
while(true){
if((x_13027 < n__9402__auto___13026)){
(a[x_13027] = (0));

var G__13028 = (x_13027 + (1));
x_13027 = G__13028;
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

var G__13029 = (i + (1));
i = G__13029;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async13030 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13030 = (function (flag,meta13031){
this.flag = flag;
this.meta13031 = meta13031;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_13032,meta13031__$1){
var self__ = this;
var _13032__$1 = this;
return (new cljs.core.async.t_cljs$core$async13030(self__.flag,meta13031__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async13030.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_13032){
var self__ = this;
var _13032__$1 = this;
return self__.meta13031;
});})(flag))
;

cljs.core.async.t_cljs$core$async13030.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13030.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async13030.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13030.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13030.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13031","meta13031",-361005093,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async13030.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13030.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13030";

cljs.core.async.t_cljs$core$async13030.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__9030__auto__,writer__9031__auto__,opt__9032__auto__){
return cljs.core._write.call(null,writer__9031__auto__,"cljs.core.async/t_cljs$core$async13030");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async13030 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async13030(flag__$1,meta13031){
return (new cljs.core.async.t_cljs$core$async13030(flag__$1,meta13031));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async13030(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async13033 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13033 = (function (flag,cb,meta13034){
this.flag = flag;
this.cb = cb;
this.meta13034 = meta13034;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13035,meta13034__$1){
var self__ = this;
var _13035__$1 = this;
return (new cljs.core.async.t_cljs$core$async13033(self__.flag,self__.cb,meta13034__$1));
});

cljs.core.async.t_cljs$core$async13033.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13035){
var self__ = this;
var _13035__$1 = this;
return self__.meta13034;
});

cljs.core.async.t_cljs$core$async13033.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13033.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async13033.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13033.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async13033.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13034","meta13034",-370827908,null)], null);
});

cljs.core.async.t_cljs$core$async13033.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13033.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13033";

cljs.core.async.t_cljs$core$async13033.cljs$lang$ctorPrWriter = (function (this__9030__auto__,writer__9031__auto__,opt__9032__auto__){
return cljs.core._write.call(null,writer__9031__auto__,"cljs.core.async/t_cljs$core$async13033");
});

cljs.core.async.__GT_t_cljs$core$async13033 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async13033(flag__$1,cb__$1,meta13034){
return (new cljs.core.async.t_cljs$core$async13033(flag__$1,cb__$1,meta13034));
});

}

return (new cljs.core.async.t_cljs$core$async13033(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__13036_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13036_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13037_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13037_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__8359__auto__ = wport;
if(cljs.core.truth_(or__8359__auto__)){
return or__8359__auto__;
} else {
return port;
}
})()], null));
} else {
var G__13038 = (i + (1));
i = G__13038;
continue;
}
} else {
return null;
}
break;
}
})();
var or__8359__auto__ = ret;
if(cljs.core.truth_(or__8359__auto__)){
return or__8359__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__8347__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__8347__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__8347__auto__;
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
var args__9643__auto__ = [];
var len__9636__auto___13044 = arguments.length;
var i__9637__auto___13045 = (0);
while(true){
if((i__9637__auto___13045 < len__9636__auto___13044)){
args__9643__auto__.push((arguments[i__9637__auto___13045]));

var G__13046 = (i__9637__auto___13045 + (1));
i__9637__auto___13045 = G__13046;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((1) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9644__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13041){
var map__13042 = p__13041;
var map__13042__$1 = ((((!((map__13042 == null)))?((((map__13042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13042.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13042):map__13042);
var opts = map__13042__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13039){
var G__13040 = cljs.core.first.call(null,seq13039);
var seq13039__$1 = cljs.core.next.call(null,seq13039);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13040,seq13039__$1);
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
var G__13048 = arguments.length;
switch (G__13048) {
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
var c__12947__auto___13094 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12947__auto___13094){
return (function (){
var f__12948__auto__ = (function (){var switch__12857__auto__ = ((function (c__12947__auto___13094){
return (function (state_13072){
var state_val_13073 = (state_13072[(1)]);
if((state_val_13073 === (7))){
var inst_13068 = (state_13072[(2)]);
var state_13072__$1 = state_13072;
var statearr_13074_13095 = state_13072__$1;
(statearr_13074_13095[(2)] = inst_13068);

(statearr_13074_13095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13073 === (1))){
var state_13072__$1 = state_13072;
var statearr_13075_13096 = state_13072__$1;
(statearr_13075_13096[(2)] = null);

(statearr_13075_13096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13073 === (4))){
var inst_13051 = (state_13072[(7)]);
var inst_13051__$1 = (state_13072[(2)]);
var inst_13052 = (inst_13051__$1 == null);
var state_13072__$1 = (function (){var statearr_13076 = state_13072;
(statearr_13076[(7)] = inst_13051__$1);

return statearr_13076;
})();
if(cljs.core.truth_(inst_13052)){
var statearr_13077_13097 = state_13072__$1;
(statearr_13077_13097[(1)] = (5));

} else {
var statearr_13078_13098 = state_13072__$1;
(statearr_13078_13098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13073 === (13))){
var state_13072__$1 = state_13072;
var statearr_13079_13099 = state_13072__$1;
(statearr_13079_13099[(2)] = null);

(statearr_13079_13099[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13073 === (6))){
var inst_13051 = (state_13072[(7)]);
var state_13072__$1 = state_13072;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13072__$1,(11),to,inst_13051);
} else {
if((state_val_13073 === (3))){
var inst_13070 = (state_13072[(2)]);
var state_13072__$1 = state_13072;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13072__$1,inst_13070);
} else {
if((state_val_13073 === (12))){
var state_13072__$1 = state_13072;
var statearr_13080_13100 = state_13072__$1;
(statearr_13080_13100[(2)] = null);

(statearr_13080_13100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13073 === (2))){
var state_13072__$1 = state_13072;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13072__$1,(4),from);
} else {
if((state_val_13073 === (11))){
var inst_13061 = (state_13072[(2)]);
var state_13072__$1 = state_13072;
if(cljs.core.truth_(inst_13061)){
var statearr_13081_13101 = state_13072__$1;
(statearr_13081_13101[(1)] = (12));

} else {
var statearr_13082_13102 = state_13072__$1;
(statearr_13082_13102[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13073 === (9))){
var state_13072__$1 = state_13072;
var statearr_13083_13103 = state_13072__$1;
(statearr_13083_13103[(2)] = null);

(statearr_13083_13103[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13073 === (5))){
var state_13072__$1 = state_13072;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13084_13104 = state_13072__$1;
(statearr_13084_13104[(1)] = (8));

} else {
var statearr_13085_13105 = state_13072__$1;
(statearr_13085_13105[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13073 === (14))){
var inst_13066 = (state_13072[(2)]);
var state_13072__$1 = state_13072;
var statearr_13086_13106 = state_13072__$1;
(statearr_13086_13106[(2)] = inst_13066);

(statearr_13086_13106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13073 === (10))){
var inst_13058 = (state_13072[(2)]);
var state_13072__$1 = state_13072;
var statearr_13087_13107 = state_13072__$1;
(statearr_13087_13107[(2)] = inst_13058);

(statearr_13087_13107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13073 === (8))){
var inst_13055 = cljs.core.async.close_BANG_.call(null,to);
var state_13072__$1 = state_13072;
var statearr_13088_13108 = state_13072__$1;
(statearr_13088_13108[(2)] = inst_13055);

(statearr_13088_13108[(1)] = (10));


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
});})(c__12947__auto___13094))
;
return ((function (switch__12857__auto__,c__12947__auto___13094){
return (function() {
var cljs$core$async$state_machine__12858__auto__ = null;
var cljs$core$async$state_machine__12858__auto____0 = (function (){
var statearr_13089 = [null,null,null,null,null,null,null,null];
(statearr_13089[(0)] = cljs$core$async$state_machine__12858__auto__);

(statearr_13089[(1)] = (1));

return statearr_13089;
});
var cljs$core$async$state_machine__12858__auto____1 = (function (state_13072){
while(true){
var ret_value__12859__auto__ = (function (){try{while(true){
var result__12860__auto__ = switch__12857__auto__.call(null,state_13072);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12860__auto__;
}
break;
}
}catch (e13090){if((e13090 instanceof Object)){
var ex__12861__auto__ = e13090;
var statearr_13091_13109 = state_13072;
(statearr_13091_13109[(5)] = ex__12861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13110 = state_13072;
state_13072 = G__13110;
continue;
} else {
return ret_value__12859__auto__;
}
break;
}
});
cljs$core$async$state_machine__12858__auto__ = function(state_13072){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12858__auto____1.call(this,state_13072);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12858__auto____0;
cljs$core$async$state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12858__auto____1;
return cljs$core$async$state_machine__12858__auto__;
})()
;})(switch__12857__auto__,c__12947__auto___13094))
})();
var state__12949__auto__ = (function (){var statearr_13092 = f__12948__auto__.call(null);
(statearr_13092[(6)] = c__12947__auto___13094);

return statearr_13092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12949__auto__);
});})(c__12947__auto___13094))
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
return (function (p__13111){
var vec__13112 = p__13111;
var v = cljs.core.nth.call(null,vec__13112,(0),null);
var p = cljs.core.nth.call(null,vec__13112,(1),null);
var job = vec__13112;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__12947__auto___13283 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12947__auto___13283,res,vec__13112,v,p,job,jobs,results){
return (function (){
var f__12948__auto__ = (function (){var switch__12857__auto__ = ((function (c__12947__auto___13283,res,vec__13112,v,p,job,jobs,results){
return (function (state_13119){
var state_val_13120 = (state_13119[(1)]);
if((state_val_13120 === (1))){
var state_13119__$1 = state_13119;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13119__$1,(2),res,v);
} else {
if((state_val_13120 === (2))){
var inst_13116 = (state_13119[(2)]);
var inst_13117 = cljs.core.async.close_BANG_.call(null,res);
var state_13119__$1 = (function (){var statearr_13121 = state_13119;
(statearr_13121[(7)] = inst_13116);

return statearr_13121;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13119__$1,inst_13117);
} else {
return null;
}
}
});})(c__12947__auto___13283,res,vec__13112,v,p,job,jobs,results))
;
return ((function (switch__12857__auto__,c__12947__auto___13283,res,vec__13112,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12858__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12858__auto____0 = (function (){
var statearr_13122 = [null,null,null,null,null,null,null,null];
(statearr_13122[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12858__auto__);

(statearr_13122[(1)] = (1));

return statearr_13122;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12858__auto____1 = (function (state_13119){
while(true){
var ret_value__12859__auto__ = (function (){try{while(true){
var result__12860__auto__ = switch__12857__auto__.call(null,state_13119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12860__auto__;
}
break;
}
}catch (e13123){if((e13123 instanceof Object)){
var ex__12861__auto__ = e13123;
var statearr_13124_13284 = state_13119;
(statearr_13124_13284[(5)] = ex__12861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13123;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13285 = state_13119;
state_13119 = G__13285;
continue;
} else {
return ret_value__12859__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12858__auto__ = function(state_13119){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12858__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12858__auto____1.call(this,state_13119);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12858__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12858__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12858__auto__;
})()
;})(switch__12857__auto__,c__12947__auto___13283,res,vec__13112,v,p,job,jobs,results))
})();
var state__12949__auto__ = (function (){var statearr_13125 = f__12948__auto__.call(null);
(statearr_13125[(6)] = c__12947__auto___13283);

return statearr_13125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12949__auto__);
});})(c__12947__auto___13283,res,vec__13112,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__13126){
var vec__13127 = p__13126;
var v = cljs.core.nth.call(null,vec__13127,(0),null);
var p = cljs.core.nth.call(null,vec__13127,(1),null);
var job = vec__13127;
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
var n__9402__auto___13286 = n;
var __13287 = (0);
while(true){
if((__13287 < n__9402__auto___13286)){
var G__13130_13288 = type;
var G__13130_13289__$1 = (((G__13130_13288 instanceof cljs.core.Keyword))?G__13130_13288.fqn:null);
switch (G__13130_13289__$1) {
case "compute":
var c__12947__auto___13291 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13287,c__12947__auto___13291,G__13130_13288,G__13130_13289__$1,n__9402__auto___13286,jobs,results,process,async){
return (function (){
var f__12948__auto__ = (function (){var switch__12857__auto__ = ((function (__13287,c__12947__auto___13291,G__13130_13288,G__13130_13289__$1,n__9402__auto___13286,jobs,results,process,async){
return (function (state_13143){
var state_val_13144 = (state_13143[(1)]);
if((state_val_13144 === (1))){
var state_13143__$1 = state_13143;
var statearr_13145_13292 = state_13143__$1;
(statearr_13145_13292[(2)] = null);

(statearr_13145_13292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13144 === (2))){
var state_13143__$1 = state_13143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13143__$1,(4),jobs);
} else {
if((state_val_13144 === (3))){
var inst_13141 = (state_13143[(2)]);
var state_13143__$1 = state_13143;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13143__$1,inst_13141);
} else {
if((state_val_13144 === (4))){
var inst_13133 = (state_13143[(2)]);
var inst_13134 = process.call(null,inst_13133);
var state_13143__$1 = state_13143;
if(cljs.core.truth_(inst_13134)){
var statearr_13146_13293 = state_13143__$1;
(statearr_13146_13293[(1)] = (5));

} else {
var statearr_13147_13294 = state_13143__$1;
(statearr_13147_13294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13144 === (5))){
var state_13143__$1 = state_13143;
var statearr_13148_13295 = state_13143__$1;
(statearr_13148_13295[(2)] = null);

(statearr_13148_13295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13144 === (6))){
var state_13143__$1 = state_13143;
var statearr_13149_13296 = state_13143__$1;
(statearr_13149_13296[(2)] = null);

(statearr_13149_13296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13144 === (7))){
var inst_13139 = (state_13143[(2)]);
var state_13143__$1 = state_13143;
var statearr_13150_13297 = state_13143__$1;
(statearr_13150_13297[(2)] = inst_13139);

(statearr_13150_13297[(1)] = (3));


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
});})(__13287,c__12947__auto___13291,G__13130_13288,G__13130_13289__$1,n__9402__auto___13286,jobs,results,process,async))
;
return ((function (__13287,switch__12857__auto__,c__12947__auto___13291,G__13130_13288,G__13130_13289__$1,n__9402__auto___13286,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12858__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12858__auto____0 = (function (){
var statearr_13151 = [null,null,null,null,null,null,null];
(statearr_13151[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12858__auto__);

(statearr_13151[(1)] = (1));

return statearr_13151;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12858__auto____1 = (function (state_13143){
while(true){
var ret_value__12859__auto__ = (function (){try{while(true){
var result__12860__auto__ = switch__12857__auto__.call(null,state_13143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12860__auto__;
}
break;
}
}catch (e13152){if((e13152 instanceof Object)){
var ex__12861__auto__ = e13152;
var statearr_13153_13298 = state_13143;
(statearr_13153_13298[(5)] = ex__12861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13299 = state_13143;
state_13143 = G__13299;
continue;
} else {
return ret_value__12859__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12858__auto__ = function(state_13143){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12858__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12858__auto____1.call(this,state_13143);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12858__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12858__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12858__auto__;
})()
;})(__13287,switch__12857__auto__,c__12947__auto___13291,G__13130_13288,G__13130_13289__$1,n__9402__auto___13286,jobs,results,process,async))
})();
var state__12949__auto__ = (function (){var statearr_13154 = f__12948__auto__.call(null);
(statearr_13154[(6)] = c__12947__auto___13291);

return statearr_13154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12949__auto__);
});})(__13287,c__12947__auto___13291,G__13130_13288,G__13130_13289__$1,n__9402__auto___13286,jobs,results,process,async))
);


break;
case "async":
var c__12947__auto___13300 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13287,c__12947__auto___13300,G__13130_13288,G__13130_13289__$1,n__9402__auto___13286,jobs,results,process,async){
return (function (){
var f__12948__auto__ = (function (){var switch__12857__auto__ = ((function (__13287,c__12947__auto___13300,G__13130_13288,G__13130_13289__$1,n__9402__auto___13286,jobs,results,process,async){
return (function (state_13167){
var state_val_13168 = (state_13167[(1)]);
if((state_val_13168 === (1))){
var state_13167__$1 = state_13167;
var statearr_13169_13301 = state_13167__$1;
(statearr_13169_13301[(2)] = null);

(statearr_13169_13301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13168 === (2))){
var state_13167__$1 = state_13167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13167__$1,(4),jobs);
} else {
if((state_val_13168 === (3))){
var inst_13165 = (state_13167[(2)]);
var state_13167__$1 = state_13167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13167__$1,inst_13165);
} else {
if((state_val_13168 === (4))){
var inst_13157 = (state_13167[(2)]);
var inst_13158 = async.call(null,inst_13157);
var state_13167__$1 = state_13167;
if(cljs.core.truth_(inst_13158)){
var statearr_13170_13302 = state_13167__$1;
(statearr_13170_13302[(1)] = (5));

} else {
var statearr_13171_13303 = state_13167__$1;
(statearr_13171_13303[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13168 === (5))){
var state_13167__$1 = state_13167;
var statearr_13172_13304 = state_13167__$1;
(statearr_13172_13304[(2)] = null);

(statearr_13172_13304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13168 === (6))){
var state_13167__$1 = state_13167;
var statearr_13173_13305 = state_13167__$1;
(statearr_13173_13305[(2)] = null);

(statearr_13173_13305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13168 === (7))){
var inst_13163 = (state_13167[(2)]);
var state_13167__$1 = state_13167;
var statearr_13174_13306 = state_13167__$1;
(statearr_13174_13306[(2)] = inst_13163);

(statearr_13174_13306[(1)] = (3));


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
});})(__13287,c__12947__auto___13300,G__13130_13288,G__13130_13289__$1,n__9402__auto___13286,jobs,results,process,async))
;
return ((function (__13287,switch__12857__auto__,c__12947__auto___13300,G__13130_13288,G__13130_13289__$1,n__9402__auto___13286,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12858__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12858__auto____0 = (function (){
var statearr_13175 = [null,null,null,null,null,null,null];
(statearr_13175[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12858__auto__);

(statearr_13175[(1)] = (1));

return statearr_13175;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12858__auto____1 = (function (state_13167){
while(true){
var ret_value__12859__auto__ = (function (){try{while(true){
var result__12860__auto__ = switch__12857__auto__.call(null,state_13167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12860__auto__;
}
break;
}
}catch (e13176){if((e13176 instanceof Object)){
var ex__12861__auto__ = e13176;
var statearr_13177_13307 = state_13167;
(statearr_13177_13307[(5)] = ex__12861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13308 = state_13167;
state_13167 = G__13308;
continue;
} else {
return ret_value__12859__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12858__auto__ = function(state_13167){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12858__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12858__auto____1.call(this,state_13167);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12858__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12858__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12858__auto__;
})()
;})(__13287,switch__12857__auto__,c__12947__auto___13300,G__13130_13288,G__13130_13289__$1,n__9402__auto___13286,jobs,results,process,async))
})();
var state__12949__auto__ = (function (){var statearr_13178 = f__12948__auto__.call(null);
(statearr_13178[(6)] = c__12947__auto___13300);

return statearr_13178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12949__auto__);
});})(__13287,c__12947__auto___13300,G__13130_13288,G__13130_13289__$1,n__9402__auto___13286,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13130_13289__$1)].join('')));

}

var G__13309 = (__13287 + (1));
__13287 = G__13309;
continue;
} else {
}
break;
}

var c__12947__auto___13310 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12947__auto___13310,jobs,results,process,async){
return (function (){
var f__12948__auto__ = (function (){var switch__12857__auto__ = ((function (c__12947__auto___13310,jobs,results,process,async){
return (function (state_13200){
var state_val_13201 = (state_13200[(1)]);
if((state_val_13201 === (1))){
var state_13200__$1 = state_13200;
var statearr_13202_13311 = state_13200__$1;
(statearr_13202_13311[(2)] = null);

(statearr_13202_13311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13201 === (2))){
var state_13200__$1 = state_13200;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13200__$1,(4),from);
} else {
if((state_val_13201 === (3))){
var inst_13198 = (state_13200[(2)]);
var state_13200__$1 = state_13200;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13200__$1,inst_13198);
} else {
if((state_val_13201 === (4))){
var inst_13181 = (state_13200[(7)]);
var inst_13181__$1 = (state_13200[(2)]);
var inst_13182 = (inst_13181__$1 == null);
var state_13200__$1 = (function (){var statearr_13203 = state_13200;
(statearr_13203[(7)] = inst_13181__$1);

return statearr_13203;
})();
if(cljs.core.truth_(inst_13182)){
var statearr_13204_13312 = state_13200__$1;
(statearr_13204_13312[(1)] = (5));

} else {
var statearr_13205_13313 = state_13200__$1;
(statearr_13205_13313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13201 === (5))){
var inst_13184 = cljs.core.async.close_BANG_.call(null,jobs);
var state_13200__$1 = state_13200;
var statearr_13206_13314 = state_13200__$1;
(statearr_13206_13314[(2)] = inst_13184);

(statearr_13206_13314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13201 === (6))){
var inst_13186 = (state_13200[(8)]);
var inst_13181 = (state_13200[(7)]);
var inst_13186__$1 = cljs.core.async.chan.call(null,(1));
var inst_13187 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13188 = [inst_13181,inst_13186__$1];
var inst_13189 = (new cljs.core.PersistentVector(null,2,(5),inst_13187,inst_13188,null));
var state_13200__$1 = (function (){var statearr_13207 = state_13200;
(statearr_13207[(8)] = inst_13186__$1);

return statearr_13207;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13200__$1,(8),jobs,inst_13189);
} else {
if((state_val_13201 === (7))){
var inst_13196 = (state_13200[(2)]);
var state_13200__$1 = state_13200;
var statearr_13208_13315 = state_13200__$1;
(statearr_13208_13315[(2)] = inst_13196);

(statearr_13208_13315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13201 === (8))){
var inst_13186 = (state_13200[(8)]);
var inst_13191 = (state_13200[(2)]);
var state_13200__$1 = (function (){var statearr_13209 = state_13200;
(statearr_13209[(9)] = inst_13191);

return statearr_13209;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13200__$1,(9),results,inst_13186);
} else {
if((state_val_13201 === (9))){
var inst_13193 = (state_13200[(2)]);
var state_13200__$1 = (function (){var statearr_13210 = state_13200;
(statearr_13210[(10)] = inst_13193);

return statearr_13210;
})();
var statearr_13211_13316 = state_13200__$1;
(statearr_13211_13316[(2)] = null);

(statearr_13211_13316[(1)] = (2));


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
});})(c__12947__auto___13310,jobs,results,process,async))
;
return ((function (switch__12857__auto__,c__12947__auto___13310,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12858__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12858__auto____0 = (function (){
var statearr_13212 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13212[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12858__auto__);

(statearr_13212[(1)] = (1));

return statearr_13212;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12858__auto____1 = (function (state_13200){
while(true){
var ret_value__12859__auto__ = (function (){try{while(true){
var result__12860__auto__ = switch__12857__auto__.call(null,state_13200);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12860__auto__;
}
break;
}
}catch (e13213){if((e13213 instanceof Object)){
var ex__12861__auto__ = e13213;
var statearr_13214_13317 = state_13200;
(statearr_13214_13317[(5)] = ex__12861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13200);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13213;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13318 = state_13200;
state_13200 = G__13318;
continue;
} else {
return ret_value__12859__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12858__auto__ = function(state_13200){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12858__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12858__auto____1.call(this,state_13200);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12858__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12858__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12858__auto__;
})()
;})(switch__12857__auto__,c__12947__auto___13310,jobs,results,process,async))
})();
var state__12949__auto__ = (function (){var statearr_13215 = f__12948__auto__.call(null);
(statearr_13215[(6)] = c__12947__auto___13310);

return statearr_13215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12949__auto__);
});})(c__12947__auto___13310,jobs,results,process,async))
);


var c__12947__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12947__auto__,jobs,results,process,async){
return (function (){
var f__12948__auto__ = (function (){var switch__12857__auto__ = ((function (c__12947__auto__,jobs,results,process,async){
return (function (state_13253){
var state_val_13254 = (state_13253[(1)]);
if((state_val_13254 === (7))){
var inst_13249 = (state_13253[(2)]);
var state_13253__$1 = state_13253;
var statearr_13255_13319 = state_13253__$1;
(statearr_13255_13319[(2)] = inst_13249);

(statearr_13255_13319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13254 === (20))){
var state_13253__$1 = state_13253;
var statearr_13256_13320 = state_13253__$1;
(statearr_13256_13320[(2)] = null);

(statearr_13256_13320[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13254 === (1))){
var state_13253__$1 = state_13253;
var statearr_13257_13321 = state_13253__$1;
(statearr_13257_13321[(2)] = null);

(statearr_13257_13321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13254 === (4))){
var inst_13218 = (state_13253[(7)]);
var inst_13218__$1 = (state_13253[(2)]);
var inst_13219 = (inst_13218__$1 == null);
var state_13253__$1 = (function (){var statearr_13258 = state_13253;
(statearr_13258[(7)] = inst_13218__$1);

return statearr_13258;
})();
if(cljs.core.truth_(inst_13219)){
var statearr_13259_13322 = state_13253__$1;
(statearr_13259_13322[(1)] = (5));

} else {
var statearr_13260_13323 = state_13253__$1;
(statearr_13260_13323[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13254 === (15))){
var inst_13231 = (state_13253[(8)]);
var state_13253__$1 = state_13253;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13253__$1,(18),to,inst_13231);
} else {
if((state_val_13254 === (21))){
var inst_13244 = (state_13253[(2)]);
var state_13253__$1 = state_13253;
var statearr_13261_13324 = state_13253__$1;
(statearr_13261_13324[(2)] = inst_13244);

(statearr_13261_13324[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13254 === (13))){
var inst_13246 = (state_13253[(2)]);
var state_13253__$1 = (function (){var statearr_13262 = state_13253;
(statearr_13262[(9)] = inst_13246);

return statearr_13262;
})();
var statearr_13263_13325 = state_13253__$1;
(statearr_13263_13325[(2)] = null);

(statearr_13263_13325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13254 === (6))){
var inst_13218 = (state_13253[(7)]);
var state_13253__$1 = state_13253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13253__$1,(11),inst_13218);
} else {
if((state_val_13254 === (17))){
var inst_13239 = (state_13253[(2)]);
var state_13253__$1 = state_13253;
if(cljs.core.truth_(inst_13239)){
var statearr_13264_13326 = state_13253__$1;
(statearr_13264_13326[(1)] = (19));

} else {
var statearr_13265_13327 = state_13253__$1;
(statearr_13265_13327[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13254 === (3))){
var inst_13251 = (state_13253[(2)]);
var state_13253__$1 = state_13253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13253__$1,inst_13251);
} else {
if((state_val_13254 === (12))){
var inst_13228 = (state_13253[(10)]);
var state_13253__$1 = state_13253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13253__$1,(14),inst_13228);
} else {
if((state_val_13254 === (2))){
var state_13253__$1 = state_13253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13253__$1,(4),results);
} else {
if((state_val_13254 === (19))){
var state_13253__$1 = state_13253;
var statearr_13266_13328 = state_13253__$1;
(statearr_13266_13328[(2)] = null);

(statearr_13266_13328[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13254 === (11))){
var inst_13228 = (state_13253[(2)]);
var state_13253__$1 = (function (){var statearr_13267 = state_13253;
(statearr_13267[(10)] = inst_13228);

return statearr_13267;
})();
var statearr_13268_13329 = state_13253__$1;
(statearr_13268_13329[(2)] = null);

(statearr_13268_13329[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13254 === (9))){
var state_13253__$1 = state_13253;
var statearr_13269_13330 = state_13253__$1;
(statearr_13269_13330[(2)] = null);

(statearr_13269_13330[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13254 === (5))){
var state_13253__$1 = state_13253;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13270_13331 = state_13253__$1;
(statearr_13270_13331[(1)] = (8));

} else {
var statearr_13271_13332 = state_13253__$1;
(statearr_13271_13332[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13254 === (14))){
var inst_13233 = (state_13253[(11)]);
var inst_13231 = (state_13253[(8)]);
var inst_13231__$1 = (state_13253[(2)]);
var inst_13232 = (inst_13231__$1 == null);
var inst_13233__$1 = cljs.core.not.call(null,inst_13232);
var state_13253__$1 = (function (){var statearr_13272 = state_13253;
(statearr_13272[(11)] = inst_13233__$1);

(statearr_13272[(8)] = inst_13231__$1);

return statearr_13272;
})();
if(inst_13233__$1){
var statearr_13273_13333 = state_13253__$1;
(statearr_13273_13333[(1)] = (15));

} else {
var statearr_13274_13334 = state_13253__$1;
(statearr_13274_13334[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13254 === (16))){
var inst_13233 = (state_13253[(11)]);
var state_13253__$1 = state_13253;
var statearr_13275_13335 = state_13253__$1;
(statearr_13275_13335[(2)] = inst_13233);

(statearr_13275_13335[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13254 === (10))){
var inst_13225 = (state_13253[(2)]);
var state_13253__$1 = state_13253;
var statearr_13276_13336 = state_13253__$1;
(statearr_13276_13336[(2)] = inst_13225);

(statearr_13276_13336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13254 === (18))){
var inst_13236 = (state_13253[(2)]);
var state_13253__$1 = state_13253;
var statearr_13277_13337 = state_13253__$1;
(statearr_13277_13337[(2)] = inst_13236);

(statearr_13277_13337[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13254 === (8))){
var inst_13222 = cljs.core.async.close_BANG_.call(null,to);
var state_13253__$1 = state_13253;
var statearr_13278_13338 = state_13253__$1;
(statearr_13278_13338[(2)] = inst_13222);

(statearr_13278_13338[(1)] = (10));


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
});})(c__12947__auto__,jobs,results,process,async))
;
return ((function (switch__12857__auto__,c__12947__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12858__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12858__auto____0 = (function (){
var statearr_13279 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13279[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12858__auto__);

(statearr_13279[(1)] = (1));

return statearr_13279;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12858__auto____1 = (function (state_13253){
while(true){
var ret_value__12859__auto__ = (function (){try{while(true){
var result__12860__auto__ = switch__12857__auto__.call(null,state_13253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12860__auto__;
}
break;
}
}catch (e13280){if((e13280 instanceof Object)){
var ex__12861__auto__ = e13280;
var statearr_13281_13339 = state_13253;
(statearr_13281_13339[(5)] = ex__12861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13340 = state_13253;
state_13253 = G__13340;
continue;
} else {
return ret_value__12859__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12858__auto__ = function(state_13253){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12858__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12858__auto____1.call(this,state_13253);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12858__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12858__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12858__auto__;
})()
;})(switch__12857__auto__,c__12947__auto__,jobs,results,process,async))
})();
var state__12949__auto__ = (function (){var statearr_13282 = f__12948__auto__.call(null);
(statearr_13282[(6)] = c__12947__auto__);

return statearr_13282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12949__auto__);
});})(c__12947__auto__,jobs,results,process,async))
);

return c__12947__auto__;
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
var G__13342 = arguments.length;
switch (G__13342) {
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
var G__13345 = arguments.length;
switch (G__13345) {
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
var G__13348 = arguments.length;
switch (G__13348) {
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
var c__12947__auto___13397 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12947__auto___13397,tc,fc){
return (function (){
var f__12948__auto__ = (function (){var switch__12857__auto__ = ((function (c__12947__auto___13397,tc,fc){
return (function (state_13374){
var state_val_13375 = (state_13374[(1)]);
if((state_val_13375 === (7))){
var inst_13370 = (state_13374[(2)]);
var state_13374__$1 = state_13374;
var statearr_13376_13398 = state_13374__$1;
(statearr_13376_13398[(2)] = inst_13370);

(statearr_13376_13398[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13375 === (1))){
var state_13374__$1 = state_13374;
var statearr_13377_13399 = state_13374__$1;
(statearr_13377_13399[(2)] = null);

(statearr_13377_13399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13375 === (4))){
var inst_13351 = (state_13374[(7)]);
var inst_13351__$1 = (state_13374[(2)]);
var inst_13352 = (inst_13351__$1 == null);
var state_13374__$1 = (function (){var statearr_13378 = state_13374;
(statearr_13378[(7)] = inst_13351__$1);

return statearr_13378;
})();
if(cljs.core.truth_(inst_13352)){
var statearr_13379_13400 = state_13374__$1;
(statearr_13379_13400[(1)] = (5));

} else {
var statearr_13380_13401 = state_13374__$1;
(statearr_13380_13401[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13375 === (13))){
var state_13374__$1 = state_13374;
var statearr_13381_13402 = state_13374__$1;
(statearr_13381_13402[(2)] = null);

(statearr_13381_13402[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13375 === (6))){
var inst_13351 = (state_13374[(7)]);
var inst_13357 = p.call(null,inst_13351);
var state_13374__$1 = state_13374;
if(cljs.core.truth_(inst_13357)){
var statearr_13382_13403 = state_13374__$1;
(statearr_13382_13403[(1)] = (9));

} else {
var statearr_13383_13404 = state_13374__$1;
(statearr_13383_13404[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13375 === (3))){
var inst_13372 = (state_13374[(2)]);
var state_13374__$1 = state_13374;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13374__$1,inst_13372);
} else {
if((state_val_13375 === (12))){
var state_13374__$1 = state_13374;
var statearr_13384_13405 = state_13374__$1;
(statearr_13384_13405[(2)] = null);

(statearr_13384_13405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13375 === (2))){
var state_13374__$1 = state_13374;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13374__$1,(4),ch);
} else {
if((state_val_13375 === (11))){
var inst_13351 = (state_13374[(7)]);
var inst_13361 = (state_13374[(2)]);
var state_13374__$1 = state_13374;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13374__$1,(8),inst_13361,inst_13351);
} else {
if((state_val_13375 === (9))){
var state_13374__$1 = state_13374;
var statearr_13385_13406 = state_13374__$1;
(statearr_13385_13406[(2)] = tc);

(statearr_13385_13406[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13375 === (5))){
var inst_13354 = cljs.core.async.close_BANG_.call(null,tc);
var inst_13355 = cljs.core.async.close_BANG_.call(null,fc);
var state_13374__$1 = (function (){var statearr_13386 = state_13374;
(statearr_13386[(8)] = inst_13354);

return statearr_13386;
})();
var statearr_13387_13407 = state_13374__$1;
(statearr_13387_13407[(2)] = inst_13355);

(statearr_13387_13407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13375 === (14))){
var inst_13368 = (state_13374[(2)]);
var state_13374__$1 = state_13374;
var statearr_13388_13408 = state_13374__$1;
(statearr_13388_13408[(2)] = inst_13368);

(statearr_13388_13408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13375 === (10))){
var state_13374__$1 = state_13374;
var statearr_13389_13409 = state_13374__$1;
(statearr_13389_13409[(2)] = fc);

(statearr_13389_13409[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13375 === (8))){
var inst_13363 = (state_13374[(2)]);
var state_13374__$1 = state_13374;
if(cljs.core.truth_(inst_13363)){
var statearr_13390_13410 = state_13374__$1;
(statearr_13390_13410[(1)] = (12));

} else {
var statearr_13391_13411 = state_13374__$1;
(statearr_13391_13411[(1)] = (13));

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
});})(c__12947__auto___13397,tc,fc))
;
return ((function (switch__12857__auto__,c__12947__auto___13397,tc,fc){
return (function() {
var cljs$core$async$state_machine__12858__auto__ = null;
var cljs$core$async$state_machine__12858__auto____0 = (function (){
var statearr_13392 = [null,null,null,null,null,null,null,null,null];
(statearr_13392[(0)] = cljs$core$async$state_machine__12858__auto__);

(statearr_13392[(1)] = (1));

return statearr_13392;
});
var cljs$core$async$state_machine__12858__auto____1 = (function (state_13374){
while(true){
var ret_value__12859__auto__ = (function (){try{while(true){
var result__12860__auto__ = switch__12857__auto__.call(null,state_13374);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12860__auto__;
}
break;
}
}catch (e13393){if((e13393 instanceof Object)){
var ex__12861__auto__ = e13393;
var statearr_13394_13412 = state_13374;
(statearr_13394_13412[(5)] = ex__12861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13393;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13413 = state_13374;
state_13374 = G__13413;
continue;
} else {
return ret_value__12859__auto__;
}
break;
}
});
cljs$core$async$state_machine__12858__auto__ = function(state_13374){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12858__auto____1.call(this,state_13374);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12858__auto____0;
cljs$core$async$state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12858__auto____1;
return cljs$core$async$state_machine__12858__auto__;
})()
;})(switch__12857__auto__,c__12947__auto___13397,tc,fc))
})();
var state__12949__auto__ = (function (){var statearr_13395 = f__12948__auto__.call(null);
(statearr_13395[(6)] = c__12947__auto___13397);

return statearr_13395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12949__auto__);
});})(c__12947__auto___13397,tc,fc))
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
var c__12947__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12947__auto__){
return (function (){
var f__12948__auto__ = (function (){var switch__12857__auto__ = ((function (c__12947__auto__){
return (function (state_13434){
var state_val_13435 = (state_13434[(1)]);
if((state_val_13435 === (7))){
var inst_13430 = (state_13434[(2)]);
var state_13434__$1 = state_13434;
var statearr_13436_13454 = state_13434__$1;
(statearr_13436_13454[(2)] = inst_13430);

(statearr_13436_13454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13435 === (1))){
var inst_13414 = init;
var state_13434__$1 = (function (){var statearr_13437 = state_13434;
(statearr_13437[(7)] = inst_13414);

return statearr_13437;
})();
var statearr_13438_13455 = state_13434__$1;
(statearr_13438_13455[(2)] = null);

(statearr_13438_13455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13435 === (4))){
var inst_13417 = (state_13434[(8)]);
var inst_13417__$1 = (state_13434[(2)]);
var inst_13418 = (inst_13417__$1 == null);
var state_13434__$1 = (function (){var statearr_13439 = state_13434;
(statearr_13439[(8)] = inst_13417__$1);

return statearr_13439;
})();
if(cljs.core.truth_(inst_13418)){
var statearr_13440_13456 = state_13434__$1;
(statearr_13440_13456[(1)] = (5));

} else {
var statearr_13441_13457 = state_13434__$1;
(statearr_13441_13457[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13435 === (6))){
var inst_13414 = (state_13434[(7)]);
var inst_13421 = (state_13434[(9)]);
var inst_13417 = (state_13434[(8)]);
var inst_13421__$1 = f.call(null,inst_13414,inst_13417);
var inst_13422 = cljs.core.reduced_QMARK_.call(null,inst_13421__$1);
var state_13434__$1 = (function (){var statearr_13442 = state_13434;
(statearr_13442[(9)] = inst_13421__$1);

return statearr_13442;
})();
if(inst_13422){
var statearr_13443_13458 = state_13434__$1;
(statearr_13443_13458[(1)] = (8));

} else {
var statearr_13444_13459 = state_13434__$1;
(statearr_13444_13459[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13435 === (3))){
var inst_13432 = (state_13434[(2)]);
var state_13434__$1 = state_13434;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13434__$1,inst_13432);
} else {
if((state_val_13435 === (2))){
var state_13434__$1 = state_13434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13434__$1,(4),ch);
} else {
if((state_val_13435 === (9))){
var inst_13421 = (state_13434[(9)]);
var inst_13414 = inst_13421;
var state_13434__$1 = (function (){var statearr_13445 = state_13434;
(statearr_13445[(7)] = inst_13414);

return statearr_13445;
})();
var statearr_13446_13460 = state_13434__$1;
(statearr_13446_13460[(2)] = null);

(statearr_13446_13460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13435 === (5))){
var inst_13414 = (state_13434[(7)]);
var state_13434__$1 = state_13434;
var statearr_13447_13461 = state_13434__$1;
(statearr_13447_13461[(2)] = inst_13414);

(statearr_13447_13461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13435 === (10))){
var inst_13428 = (state_13434[(2)]);
var state_13434__$1 = state_13434;
var statearr_13448_13462 = state_13434__$1;
(statearr_13448_13462[(2)] = inst_13428);

(statearr_13448_13462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13435 === (8))){
var inst_13421 = (state_13434[(9)]);
var inst_13424 = cljs.core.deref.call(null,inst_13421);
var state_13434__$1 = state_13434;
var statearr_13449_13463 = state_13434__$1;
(statearr_13449_13463[(2)] = inst_13424);

(statearr_13449_13463[(1)] = (10));


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
});})(c__12947__auto__))
;
return ((function (switch__12857__auto__,c__12947__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__12858__auto__ = null;
var cljs$core$async$reduce_$_state_machine__12858__auto____0 = (function (){
var statearr_13450 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13450[(0)] = cljs$core$async$reduce_$_state_machine__12858__auto__);

(statearr_13450[(1)] = (1));

return statearr_13450;
});
var cljs$core$async$reduce_$_state_machine__12858__auto____1 = (function (state_13434){
while(true){
var ret_value__12859__auto__ = (function (){try{while(true){
var result__12860__auto__ = switch__12857__auto__.call(null,state_13434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12860__auto__;
}
break;
}
}catch (e13451){if((e13451 instanceof Object)){
var ex__12861__auto__ = e13451;
var statearr_13452_13464 = state_13434;
(statearr_13452_13464[(5)] = ex__12861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13465 = state_13434;
state_13434 = G__13465;
continue;
} else {
return ret_value__12859__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__12858__auto__ = function(state_13434){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__12858__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__12858__auto____1.call(this,state_13434);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__12858__auto____0;
cljs$core$async$reduce_$_state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__12858__auto____1;
return cljs$core$async$reduce_$_state_machine__12858__auto__;
})()
;})(switch__12857__auto__,c__12947__auto__))
})();
var state__12949__auto__ = (function (){var statearr_13453 = f__12948__auto__.call(null);
(statearr_13453[(6)] = c__12947__auto__);

return statearr_13453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12949__auto__);
});})(c__12947__auto__))
);

return c__12947__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__12947__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12947__auto__,f__$1){
return (function (){
var f__12948__auto__ = (function (){var switch__12857__auto__ = ((function (c__12947__auto__,f__$1){
return (function (state_13471){
var state_val_13472 = (state_13471[(1)]);
if((state_val_13472 === (1))){
var inst_13466 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_13471__$1 = state_13471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13471__$1,(2),inst_13466);
} else {
if((state_val_13472 === (2))){
var inst_13468 = (state_13471[(2)]);
var inst_13469 = f__$1.call(null,inst_13468);
var state_13471__$1 = state_13471;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13471__$1,inst_13469);
} else {
return null;
}
}
});})(c__12947__auto__,f__$1))
;
return ((function (switch__12857__auto__,c__12947__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__12858__auto__ = null;
var cljs$core$async$transduce_$_state_machine__12858__auto____0 = (function (){
var statearr_13473 = [null,null,null,null,null,null,null];
(statearr_13473[(0)] = cljs$core$async$transduce_$_state_machine__12858__auto__);

(statearr_13473[(1)] = (1));

return statearr_13473;
});
var cljs$core$async$transduce_$_state_machine__12858__auto____1 = (function (state_13471){
while(true){
var ret_value__12859__auto__ = (function (){try{while(true){
var result__12860__auto__ = switch__12857__auto__.call(null,state_13471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12860__auto__;
}
break;
}
}catch (e13474){if((e13474 instanceof Object)){
var ex__12861__auto__ = e13474;
var statearr_13475_13477 = state_13471;
(statearr_13475_13477[(5)] = ex__12861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13474;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13478 = state_13471;
state_13471 = G__13478;
continue;
} else {
return ret_value__12859__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__12858__auto__ = function(state_13471){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__12858__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__12858__auto____1.call(this,state_13471);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__12858__auto____0;
cljs$core$async$transduce_$_state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__12858__auto____1;
return cljs$core$async$transduce_$_state_machine__12858__auto__;
})()
;})(switch__12857__auto__,c__12947__auto__,f__$1))
})();
var state__12949__auto__ = (function (){var statearr_13476 = f__12948__auto__.call(null);
(statearr_13476[(6)] = c__12947__auto__);

return statearr_13476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12949__auto__);
});})(c__12947__auto__,f__$1))
);

return c__12947__auto__;
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
var G__13480 = arguments.length;
switch (G__13480) {
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
var c__12947__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12947__auto__){
return (function (){
var f__12948__auto__ = (function (){var switch__12857__auto__ = ((function (c__12947__auto__){
return (function (state_13505){
var state_val_13506 = (state_13505[(1)]);
if((state_val_13506 === (7))){
var inst_13487 = (state_13505[(2)]);
var state_13505__$1 = state_13505;
var statearr_13507_13528 = state_13505__$1;
(statearr_13507_13528[(2)] = inst_13487);

(statearr_13507_13528[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13506 === (1))){
var inst_13481 = cljs.core.seq.call(null,coll);
var inst_13482 = inst_13481;
var state_13505__$1 = (function (){var statearr_13508 = state_13505;
(statearr_13508[(7)] = inst_13482);

return statearr_13508;
})();
var statearr_13509_13529 = state_13505__$1;
(statearr_13509_13529[(2)] = null);

(statearr_13509_13529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13506 === (4))){
var inst_13482 = (state_13505[(7)]);
var inst_13485 = cljs.core.first.call(null,inst_13482);
var state_13505__$1 = state_13505;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13505__$1,(7),ch,inst_13485);
} else {
if((state_val_13506 === (13))){
var inst_13499 = (state_13505[(2)]);
var state_13505__$1 = state_13505;
var statearr_13510_13530 = state_13505__$1;
(statearr_13510_13530[(2)] = inst_13499);

(statearr_13510_13530[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13506 === (6))){
var inst_13490 = (state_13505[(2)]);
var state_13505__$1 = state_13505;
if(cljs.core.truth_(inst_13490)){
var statearr_13511_13531 = state_13505__$1;
(statearr_13511_13531[(1)] = (8));

} else {
var statearr_13512_13532 = state_13505__$1;
(statearr_13512_13532[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13506 === (3))){
var inst_13503 = (state_13505[(2)]);
var state_13505__$1 = state_13505;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13505__$1,inst_13503);
} else {
if((state_val_13506 === (12))){
var state_13505__$1 = state_13505;
var statearr_13513_13533 = state_13505__$1;
(statearr_13513_13533[(2)] = null);

(statearr_13513_13533[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13506 === (2))){
var inst_13482 = (state_13505[(7)]);
var state_13505__$1 = state_13505;
if(cljs.core.truth_(inst_13482)){
var statearr_13514_13534 = state_13505__$1;
(statearr_13514_13534[(1)] = (4));

} else {
var statearr_13515_13535 = state_13505__$1;
(statearr_13515_13535[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13506 === (11))){
var inst_13496 = cljs.core.async.close_BANG_.call(null,ch);
var state_13505__$1 = state_13505;
var statearr_13516_13536 = state_13505__$1;
(statearr_13516_13536[(2)] = inst_13496);

(statearr_13516_13536[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13506 === (9))){
var state_13505__$1 = state_13505;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13517_13537 = state_13505__$1;
(statearr_13517_13537[(1)] = (11));

} else {
var statearr_13518_13538 = state_13505__$1;
(statearr_13518_13538[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13506 === (5))){
var inst_13482 = (state_13505[(7)]);
var state_13505__$1 = state_13505;
var statearr_13519_13539 = state_13505__$1;
(statearr_13519_13539[(2)] = inst_13482);

(statearr_13519_13539[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13506 === (10))){
var inst_13501 = (state_13505[(2)]);
var state_13505__$1 = state_13505;
var statearr_13520_13540 = state_13505__$1;
(statearr_13520_13540[(2)] = inst_13501);

(statearr_13520_13540[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13506 === (8))){
var inst_13482 = (state_13505[(7)]);
var inst_13492 = cljs.core.next.call(null,inst_13482);
var inst_13482__$1 = inst_13492;
var state_13505__$1 = (function (){var statearr_13521 = state_13505;
(statearr_13521[(7)] = inst_13482__$1);

return statearr_13521;
})();
var statearr_13522_13541 = state_13505__$1;
(statearr_13522_13541[(2)] = null);

(statearr_13522_13541[(1)] = (2));


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
});})(c__12947__auto__))
;
return ((function (switch__12857__auto__,c__12947__auto__){
return (function() {
var cljs$core$async$state_machine__12858__auto__ = null;
var cljs$core$async$state_machine__12858__auto____0 = (function (){
var statearr_13523 = [null,null,null,null,null,null,null,null];
(statearr_13523[(0)] = cljs$core$async$state_machine__12858__auto__);

(statearr_13523[(1)] = (1));

return statearr_13523;
});
var cljs$core$async$state_machine__12858__auto____1 = (function (state_13505){
while(true){
var ret_value__12859__auto__ = (function (){try{while(true){
var result__12860__auto__ = switch__12857__auto__.call(null,state_13505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12860__auto__;
}
break;
}
}catch (e13524){if((e13524 instanceof Object)){
var ex__12861__auto__ = e13524;
var statearr_13525_13542 = state_13505;
(statearr_13525_13542[(5)] = ex__12861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13524;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13543 = state_13505;
state_13505 = G__13543;
continue;
} else {
return ret_value__12859__auto__;
}
break;
}
});
cljs$core$async$state_machine__12858__auto__ = function(state_13505){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12858__auto____1.call(this,state_13505);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12858__auto____0;
cljs$core$async$state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12858__auto____1;
return cljs$core$async$state_machine__12858__auto__;
})()
;})(switch__12857__auto__,c__12947__auto__))
})();
var state__12949__auto__ = (function (){var statearr_13526 = f__12948__auto__.call(null);
(statearr_13526[(6)] = c__12947__auto__);

return statearr_13526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12949__auto__);
});})(c__12947__auto__))
);

return c__12947__auto__;
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
var x__9092__auto__ = (((_ == null))?null:_);
var m__9093__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__9092__auto__)]);
if(!((m__9093__auto__ == null))){
return m__9093__auto__.call(null,_);
} else {
var m__9093__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__9093__auto____$1 == null))){
return m__9093__auto____$1.call(null,_);
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
var x__9092__auto__ = (((m == null))?null:m);
var m__9093__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__9092__auto__)]);
if(!((m__9093__auto__ == null))){
return m__9093__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__9093__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__9093__auto____$1 == null))){
return m__9093__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__9092__auto__ = (((m == null))?null:m);
var m__9093__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__9092__auto__)]);
if(!((m__9093__auto__ == null))){
return m__9093__auto__.call(null,m,ch);
} else {
var m__9093__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__9093__auto____$1 == null))){
return m__9093__auto____$1.call(null,m,ch);
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
var x__9092__auto__ = (((m == null))?null:m);
var m__9093__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__9092__auto__)]);
if(!((m__9093__auto__ == null))){
return m__9093__auto__.call(null,m);
} else {
var m__9093__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__9093__auto____$1 == null))){
return m__9093__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async13544 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13544 = (function (ch,cs,meta13545){
this.ch = ch;
this.cs = cs;
this.meta13545 = meta13545;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13546,meta13545__$1){
var self__ = this;
var _13546__$1 = this;
return (new cljs.core.async.t_cljs$core$async13544(self__.ch,self__.cs,meta13545__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async13544.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13546){
var self__ = this;
var _13546__$1 = this;
return self__.meta13545;
});})(cs))
;

cljs.core.async.t_cljs$core$async13544.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13544.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async13544.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13544.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13544.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13544.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13544.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta13545","meta13545",-1405331163,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async13544.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13544.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13544";

cljs.core.async.t_cljs$core$async13544.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__9030__auto__,writer__9031__auto__,opt__9032__auto__){
return cljs.core._write.call(null,writer__9031__auto__,"cljs.core.async/t_cljs$core$async13544");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async13544 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async13544(ch__$1,cs__$1,meta13545){
return (new cljs.core.async.t_cljs$core$async13544(ch__$1,cs__$1,meta13545));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async13544(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__12947__auto___13766 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12947__auto___13766,cs,m,dchan,dctr,done){
return (function (){
var f__12948__auto__ = (function (){var switch__12857__auto__ = ((function (c__12947__auto___13766,cs,m,dchan,dctr,done){
return (function (state_13681){
var state_val_13682 = (state_13681[(1)]);
if((state_val_13682 === (7))){
var inst_13677 = (state_13681[(2)]);
var state_13681__$1 = state_13681;
var statearr_13683_13767 = state_13681__$1;
(statearr_13683_13767[(2)] = inst_13677);

(statearr_13683_13767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13682 === (20))){
var inst_13580 = (state_13681[(7)]);
var inst_13592 = cljs.core.first.call(null,inst_13580);
var inst_13593 = cljs.core.nth.call(null,inst_13592,(0),null);
var inst_13594 = cljs.core.nth.call(null,inst_13592,(1),null);
var state_13681__$1 = (function (){var statearr_13684 = state_13681;
(statearr_13684[(8)] = inst_13593);

return statearr_13684;
})();
if(cljs.core.truth_(inst_13594)){
var statearr_13685_13768 = state_13681__$1;
(statearr_13685_13768[(1)] = (22));

} else {
var statearr_13686_13769 = state_13681__$1;
(statearr_13686_13769[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13682 === (27))){
var inst_13629 = (state_13681[(9)]);
var inst_13549 = (state_13681[(10)]);
var inst_13622 = (state_13681[(11)]);
var inst_13624 = (state_13681[(12)]);
var inst_13629__$1 = cljs.core._nth.call(null,inst_13622,inst_13624);
var inst_13630 = cljs.core.async.put_BANG_.call(null,inst_13629__$1,inst_13549,done);
var state_13681__$1 = (function (){var statearr_13687 = state_13681;
(statearr_13687[(9)] = inst_13629__$1);

return statearr_13687;
})();
if(cljs.core.truth_(inst_13630)){
var statearr_13688_13770 = state_13681__$1;
(statearr_13688_13770[(1)] = (30));

} else {
var statearr_13689_13771 = state_13681__$1;
(statearr_13689_13771[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13682 === (1))){
var state_13681__$1 = state_13681;
var statearr_13690_13772 = state_13681__$1;
(statearr_13690_13772[(2)] = null);

(statearr_13690_13772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13682 === (24))){
var inst_13580 = (state_13681[(7)]);
var inst_13599 = (state_13681[(2)]);
var inst_13600 = cljs.core.next.call(null,inst_13580);
var inst_13558 = inst_13600;
var inst_13559 = null;
var inst_13560 = (0);
var inst_13561 = (0);
var state_13681__$1 = (function (){var statearr_13691 = state_13681;
(statearr_13691[(13)] = inst_13599);

(statearr_13691[(14)] = inst_13558);

(statearr_13691[(15)] = inst_13559);

(statearr_13691[(16)] = inst_13560);

(statearr_13691[(17)] = inst_13561);

return statearr_13691;
})();
var statearr_13692_13773 = state_13681__$1;
(statearr_13692_13773[(2)] = null);

(statearr_13692_13773[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13682 === (39))){
var state_13681__$1 = state_13681;
var statearr_13696_13774 = state_13681__$1;
(statearr_13696_13774[(2)] = null);

(statearr_13696_13774[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13682 === (4))){
var inst_13549 = (state_13681[(10)]);
var inst_13549__$1 = (state_13681[(2)]);
var inst_13550 = (inst_13549__$1 == null);
var state_13681__$1 = (function (){var statearr_13697 = state_13681;
(statearr_13697[(10)] = inst_13549__$1);

return statearr_13697;
})();
if(cljs.core.truth_(inst_13550)){
var statearr_13698_13775 = state_13681__$1;
(statearr_13698_13775[(1)] = (5));

} else {
var statearr_13699_13776 = state_13681__$1;
(statearr_13699_13776[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13682 === (15))){
var inst_13558 = (state_13681[(14)]);
var inst_13559 = (state_13681[(15)]);
var inst_13560 = (state_13681[(16)]);
var inst_13561 = (state_13681[(17)]);
var inst_13576 = (state_13681[(2)]);
var inst_13577 = (inst_13561 + (1));
var tmp13693 = inst_13558;
var tmp13694 = inst_13559;
var tmp13695 = inst_13560;
var inst_13558__$1 = tmp13693;
var inst_13559__$1 = tmp13694;
var inst_13560__$1 = tmp13695;
var inst_13561__$1 = inst_13577;
var state_13681__$1 = (function (){var statearr_13700 = state_13681;
(statearr_13700[(18)] = inst_13576);

(statearr_13700[(14)] = inst_13558__$1);

(statearr_13700[(15)] = inst_13559__$1);

(statearr_13700[(16)] = inst_13560__$1);

(statearr_13700[(17)] = inst_13561__$1);

return statearr_13700;
})();
var statearr_13701_13777 = state_13681__$1;
(statearr_13701_13777[(2)] = null);

(statearr_13701_13777[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13682 === (21))){
var inst_13603 = (state_13681[(2)]);
var state_13681__$1 = state_13681;
var statearr_13705_13778 = state_13681__$1;
(statearr_13705_13778[(2)] = inst_13603);

(statearr_13705_13778[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13682 === (31))){
var inst_13629 = (state_13681[(9)]);
var inst_13633 = done.call(null,null);
var inst_13634 = cljs.core.async.untap_STAR_.call(null,m,inst_13629);
var state_13681__$1 = (function (){var statearr_13706 = state_13681;
(statearr_13706[(19)] = inst_13633);

return statearr_13706;
})();
var statearr_13707_13779 = state_13681__$1;
(statearr_13707_13779[(2)] = inst_13634);

(statearr_13707_13779[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13682 === (32))){
var inst_13623 = (state_13681[(20)]);
var inst_13621 = (state_13681[(21)]);
var inst_13622 = (state_13681[(11)]);
var inst_13624 = (state_13681[(12)]);
var inst_13636 = (state_13681[(2)]);
var inst_13637 = (inst_13624 + (1));
var tmp13702 = inst_13623;
var tmp13703 = inst_13621;
var tmp13704 = inst_13622;
var inst_13621__$1 = tmp13703;
var inst_13622__$1 = tmp13704;
var inst_13623__$1 = tmp13702;
var inst_13624__$1 = inst_13637;
var state_13681__$1 = (function (){var statearr_13708 = state_13681;
(statearr_13708[(20)] = inst_13623__$1);

(statearr_13708[(21)] = inst_13621__$1);

(statearr_13708[(11)] = inst_13622__$1);

(statearr_13708[(12)] = inst_13624__$1);

(statearr_13708[(22)] = inst_13636);

return statearr_13708;
})();
var statearr_13709_13780 = state_13681__$1;
(statearr_13709_13780[(2)] = null);

(statearr_13709_13780[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13682 === (40))){
var inst_13649 = (state_13681[(23)]);
var inst_13653 = done.call(null,null);
var inst_13654 = cljs.core.async.untap_STAR_.call(null,m,inst_13649);
var state_13681__$1 = (function (){var statearr_13710 = state_13681;
(statearr_13710[(24)] = inst_13653);

return statearr_13710;
})();
var statearr_13711_13781 = state_13681__$1;
(statearr_13711_13781[(2)] = inst_13654);

(statearr_13711_13781[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13682 === (33))){
var inst_13640 = (state_13681[(25)]);
var inst_13642 = cljs.core.chunked_seq_QMARK_.call(null,inst_13640);
var state_13681__$1 = state_13681;
if(inst_13642){
var statearr_13712_13782 = state_13681__$1;
(statearr_13712_13782[(1)] = (36));

} else {
var statearr_13713_13783 = state_13681__$1;
(statearr_13713_13783[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13682 === (13))){
var inst_13570 = (state_13681[(26)]);
var inst_13573 = cljs.core.async.close_BANG_.call(null,inst_13570);
var state_13681__$1 = state_13681;
var statearr_13714_13784 = state_13681__$1;
(statearr_13714_13784[(2)] = inst_13573);

(statearr_13714_13784[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13682 === (22))){
var inst_13593 = (state_13681[(8)]);
var inst_13596 = cljs.core.async.close_BANG_.call(null,inst_13593);
var state_13681__$1 = state_13681;
var statearr_13715_13785 = state_13681__$1;
(statearr_13715_13785[(2)] = inst_13596);

(statearr_13715_13785[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13682 === (36))){
var inst_13640 = (state_13681[(25)]);
var inst_13644 = cljs.core.chunk_first.call(null,inst_13640);
var inst_13645 = cljs.core.chunk_rest.call(null,inst_13640);
var inst_13646 = cljs.core.count.call(null,inst_13644);
var inst_13621 = inst_13645;
var inst_13622 = inst_13644;
var inst_13623 = inst_13646;
var inst_13624 = (0);
var state_13681__$1 = (function (){var statearr_13716 = state_13681;
(statearr_13716[(20)] = inst_13623);

(statearr_13716[(21)] = inst_13621);

(statearr_13716[(11)] = inst_13622);

(statearr_13716[(12)] = inst_13624);

return statearr_13716;
})();
var statearr_13717_13786 = state_13681__$1;
(statearr_13717_13786[(2)] = null);

(statearr_13717_13786[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13682 === (41))){
var inst_13640 = (state_13681[(25)]);
var inst_13656 = (state_13681[(2)]);
var inst_13657 = cljs.core.next.call(null,inst_13640);
var inst_13621 = inst_13657;
var inst_13622 = null;
var inst_13623 = (0);
var inst_13624 = (0);
var state_13681__$1 = (function (){var statearr_13718 = state_13681;
(statearr_13718[(20)] = inst_13623);

(statearr_13718[(21)] = inst_13621);

(statearr_13718[(27)] = inst_13656);

(statearr_13718[(11)] = inst_13622);

(statearr_13718[(12)] = inst_13624);

return statearr_13718;
})();
var statearr_13719_13787 = state_13681__$1;
(statearr_13719_13787[(2)] = null);

(statearr_13719_13787[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13682 === (43))){
var state_13681__$1 = state_13681;
var statearr_13720_13788 = state_13681__$1;
(statearr_13720_13788[(2)] = null);

(statearr_13720_13788[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13682 === (29))){
var inst_13665 = (state_13681[(2)]);
var state_13681__$1 = state_13681;
var statearr_13721_13789 = state_13681__$1;
(statearr_13721_13789[(2)] = inst_13665);

(statearr_13721_13789[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13682 === (44))){
var inst_13674 = (state_13681[(2)]);
var state_13681__$1 = (function (){var statearr_13722 = state_13681;
(statearr_13722[(28)] = inst_13674);

return statearr_13722;
})();
var statearr_13723_13790 = state_13681__$1;
(statearr_13723_13790[(2)] = null);

(statearr_13723_13790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13682 === (6))){
var inst_13613 = (state_13681[(29)]);
var inst_13612 = cljs.core.deref.call(null,cs);
var inst_13613__$1 = cljs.core.keys.call(null,inst_13612);
var inst_13614 = cljs.core.count.call(null,inst_13613__$1);
var inst_13615 = cljs.core.reset_BANG_.call(null,dctr,inst_13614);
var inst_13620 = cljs.core.seq.call(null,inst_13613__$1);
var inst_13621 = inst_13620;
var inst_13622 = null;
var inst_13623 = (0);
var inst_13624 = (0);
var state_13681__$1 = (function (){var statearr_13724 = state_13681;
(statearr_13724[(20)] = inst_13623);

(statearr_13724[(30)] = inst_13615);

(statearr_13724[(21)] = inst_13621);

(statearr_13724[(11)] = inst_13622);

(statearr_13724[(12)] = inst_13624);

(statearr_13724[(29)] = inst_13613__$1);

return statearr_13724;
})();
var statearr_13725_13791 = state_13681__$1;
(statearr_13725_13791[(2)] = null);

(statearr_13725_13791[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13682 === (28))){
var inst_13621 = (state_13681[(21)]);
var inst_13640 = (state_13681[(25)]);
var inst_13640__$1 = cljs.core.seq.call(null,inst_13621);
var state_13681__$1 = (function (){var statearr_13726 = state_13681;
(statearr_13726[(25)] = inst_13640__$1);

return statearr_13726;
})();
if(inst_13640__$1){
var statearr_13727_13792 = state_13681__$1;
(statearr_13727_13792[(1)] = (33));

} else {
var statearr_13728_13793 = state_13681__$1;
(statearr_13728_13793[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13682 === (25))){
var inst_13623 = (state_13681[(20)]);
var inst_13624 = (state_13681[(12)]);
var inst_13626 = (inst_13624 < inst_13623);
var inst_13627 = inst_13626;
var state_13681__$1 = state_13681;
if(cljs.core.truth_(inst_13627)){
var statearr_13729_13794 = state_13681__$1;
(statearr_13729_13794[(1)] = (27));

} else {
var statearr_13730_13795 = state_13681__$1;
(statearr_13730_13795[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13682 === (34))){
var state_13681__$1 = state_13681;
var statearr_13731_13796 = state_13681__$1;
(statearr_13731_13796[(2)] = null);

(statearr_13731_13796[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13682 === (17))){
var state_13681__$1 = state_13681;
var statearr_13732_13797 = state_13681__$1;
(statearr_13732_13797[(2)] = null);

(statearr_13732_13797[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13682 === (3))){
var inst_13679 = (state_13681[(2)]);
var state_13681__$1 = state_13681;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13681__$1,inst_13679);
} else {
if((state_val_13682 === (12))){
var inst_13608 = (state_13681[(2)]);
var state_13681__$1 = state_13681;
var statearr_13733_13798 = state_13681__$1;
(statearr_13733_13798[(2)] = inst_13608);

(statearr_13733_13798[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13682 === (2))){
var state_13681__$1 = state_13681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13681__$1,(4),ch);
} else {
if((state_val_13682 === (23))){
var state_13681__$1 = state_13681;
var statearr_13734_13799 = state_13681__$1;
(statearr_13734_13799[(2)] = null);

(statearr_13734_13799[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13682 === (35))){
var inst_13663 = (state_13681[(2)]);
var state_13681__$1 = state_13681;
var statearr_13735_13800 = state_13681__$1;
(statearr_13735_13800[(2)] = inst_13663);

(statearr_13735_13800[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13682 === (19))){
var inst_13580 = (state_13681[(7)]);
var inst_13584 = cljs.core.chunk_first.call(null,inst_13580);
var inst_13585 = cljs.core.chunk_rest.call(null,inst_13580);
var inst_13586 = cljs.core.count.call(null,inst_13584);
var inst_13558 = inst_13585;
var inst_13559 = inst_13584;
var inst_13560 = inst_13586;
var inst_13561 = (0);
var state_13681__$1 = (function (){var statearr_13736 = state_13681;
(statearr_13736[(14)] = inst_13558);

(statearr_13736[(15)] = inst_13559);

(statearr_13736[(16)] = inst_13560);

(statearr_13736[(17)] = inst_13561);

return statearr_13736;
})();
var statearr_13737_13801 = state_13681__$1;
(statearr_13737_13801[(2)] = null);

(statearr_13737_13801[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13682 === (11))){
var inst_13558 = (state_13681[(14)]);
var inst_13580 = (state_13681[(7)]);
var inst_13580__$1 = cljs.core.seq.call(null,inst_13558);
var state_13681__$1 = (function (){var statearr_13738 = state_13681;
(statearr_13738[(7)] = inst_13580__$1);

return statearr_13738;
})();
if(inst_13580__$1){
var statearr_13739_13802 = state_13681__$1;
(statearr_13739_13802[(1)] = (16));

} else {
var statearr_13740_13803 = state_13681__$1;
(statearr_13740_13803[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13682 === (9))){
var inst_13610 = (state_13681[(2)]);
var state_13681__$1 = state_13681;
var statearr_13741_13804 = state_13681__$1;
(statearr_13741_13804[(2)] = inst_13610);

(statearr_13741_13804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13682 === (5))){
var inst_13556 = cljs.core.deref.call(null,cs);
var inst_13557 = cljs.core.seq.call(null,inst_13556);
var inst_13558 = inst_13557;
var inst_13559 = null;
var inst_13560 = (0);
var inst_13561 = (0);
var state_13681__$1 = (function (){var statearr_13742 = state_13681;
(statearr_13742[(14)] = inst_13558);

(statearr_13742[(15)] = inst_13559);

(statearr_13742[(16)] = inst_13560);

(statearr_13742[(17)] = inst_13561);

return statearr_13742;
})();
var statearr_13743_13805 = state_13681__$1;
(statearr_13743_13805[(2)] = null);

(statearr_13743_13805[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13682 === (14))){
var state_13681__$1 = state_13681;
var statearr_13744_13806 = state_13681__$1;
(statearr_13744_13806[(2)] = null);

(statearr_13744_13806[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13682 === (45))){
var inst_13671 = (state_13681[(2)]);
var state_13681__$1 = state_13681;
var statearr_13745_13807 = state_13681__$1;
(statearr_13745_13807[(2)] = inst_13671);

(statearr_13745_13807[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13682 === (26))){
var inst_13613 = (state_13681[(29)]);
var inst_13667 = (state_13681[(2)]);
var inst_13668 = cljs.core.seq.call(null,inst_13613);
var state_13681__$1 = (function (){var statearr_13746 = state_13681;
(statearr_13746[(31)] = inst_13667);

return statearr_13746;
})();
if(inst_13668){
var statearr_13747_13808 = state_13681__$1;
(statearr_13747_13808[(1)] = (42));

} else {
var statearr_13748_13809 = state_13681__$1;
(statearr_13748_13809[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13682 === (16))){
var inst_13580 = (state_13681[(7)]);
var inst_13582 = cljs.core.chunked_seq_QMARK_.call(null,inst_13580);
var state_13681__$1 = state_13681;
if(inst_13582){
var statearr_13749_13810 = state_13681__$1;
(statearr_13749_13810[(1)] = (19));

} else {
var statearr_13750_13811 = state_13681__$1;
(statearr_13750_13811[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13682 === (38))){
var inst_13660 = (state_13681[(2)]);
var state_13681__$1 = state_13681;
var statearr_13751_13812 = state_13681__$1;
(statearr_13751_13812[(2)] = inst_13660);

(statearr_13751_13812[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13682 === (30))){
var state_13681__$1 = state_13681;
var statearr_13752_13813 = state_13681__$1;
(statearr_13752_13813[(2)] = null);

(statearr_13752_13813[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13682 === (10))){
var inst_13559 = (state_13681[(15)]);
var inst_13561 = (state_13681[(17)]);
var inst_13569 = cljs.core._nth.call(null,inst_13559,inst_13561);
var inst_13570 = cljs.core.nth.call(null,inst_13569,(0),null);
var inst_13571 = cljs.core.nth.call(null,inst_13569,(1),null);
var state_13681__$1 = (function (){var statearr_13753 = state_13681;
(statearr_13753[(26)] = inst_13570);

return statearr_13753;
})();
if(cljs.core.truth_(inst_13571)){
var statearr_13754_13814 = state_13681__$1;
(statearr_13754_13814[(1)] = (13));

} else {
var statearr_13755_13815 = state_13681__$1;
(statearr_13755_13815[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13682 === (18))){
var inst_13606 = (state_13681[(2)]);
var state_13681__$1 = state_13681;
var statearr_13756_13816 = state_13681__$1;
(statearr_13756_13816[(2)] = inst_13606);

(statearr_13756_13816[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13682 === (42))){
var state_13681__$1 = state_13681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13681__$1,(45),dchan);
} else {
if((state_val_13682 === (37))){
var inst_13549 = (state_13681[(10)]);
var inst_13640 = (state_13681[(25)]);
var inst_13649 = (state_13681[(23)]);
var inst_13649__$1 = cljs.core.first.call(null,inst_13640);
var inst_13650 = cljs.core.async.put_BANG_.call(null,inst_13649__$1,inst_13549,done);
var state_13681__$1 = (function (){var statearr_13757 = state_13681;
(statearr_13757[(23)] = inst_13649__$1);

return statearr_13757;
})();
if(cljs.core.truth_(inst_13650)){
var statearr_13758_13817 = state_13681__$1;
(statearr_13758_13817[(1)] = (39));

} else {
var statearr_13759_13818 = state_13681__$1;
(statearr_13759_13818[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13682 === (8))){
var inst_13560 = (state_13681[(16)]);
var inst_13561 = (state_13681[(17)]);
var inst_13563 = (inst_13561 < inst_13560);
var inst_13564 = inst_13563;
var state_13681__$1 = state_13681;
if(cljs.core.truth_(inst_13564)){
var statearr_13760_13819 = state_13681__$1;
(statearr_13760_13819[(1)] = (10));

} else {
var statearr_13761_13820 = state_13681__$1;
(statearr_13761_13820[(1)] = (11));

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
});})(c__12947__auto___13766,cs,m,dchan,dctr,done))
;
return ((function (switch__12857__auto__,c__12947__auto___13766,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__12858__auto__ = null;
var cljs$core$async$mult_$_state_machine__12858__auto____0 = (function (){
var statearr_13762 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13762[(0)] = cljs$core$async$mult_$_state_machine__12858__auto__);

(statearr_13762[(1)] = (1));

return statearr_13762;
});
var cljs$core$async$mult_$_state_machine__12858__auto____1 = (function (state_13681){
while(true){
var ret_value__12859__auto__ = (function (){try{while(true){
var result__12860__auto__ = switch__12857__auto__.call(null,state_13681);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12860__auto__;
}
break;
}
}catch (e13763){if((e13763 instanceof Object)){
var ex__12861__auto__ = e13763;
var statearr_13764_13821 = state_13681;
(statearr_13764_13821[(5)] = ex__12861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13822 = state_13681;
state_13681 = G__13822;
continue;
} else {
return ret_value__12859__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__12858__auto__ = function(state_13681){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__12858__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__12858__auto____1.call(this,state_13681);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__12858__auto____0;
cljs$core$async$mult_$_state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__12858__auto____1;
return cljs$core$async$mult_$_state_machine__12858__auto__;
})()
;})(switch__12857__auto__,c__12947__auto___13766,cs,m,dchan,dctr,done))
})();
var state__12949__auto__ = (function (){var statearr_13765 = f__12948__auto__.call(null);
(statearr_13765[(6)] = c__12947__auto___13766);

return statearr_13765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12949__auto__);
});})(c__12947__auto___13766,cs,m,dchan,dctr,done))
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
var G__13824 = arguments.length;
switch (G__13824) {
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
var x__9092__auto__ = (((m == null))?null:m);
var m__9093__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__9092__auto__)]);
if(!((m__9093__auto__ == null))){
return m__9093__auto__.call(null,m,ch);
} else {
var m__9093__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__9093__auto____$1 == null))){
return m__9093__auto____$1.call(null,m,ch);
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
var x__9092__auto__ = (((m == null))?null:m);
var m__9093__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__9092__auto__)]);
if(!((m__9093__auto__ == null))){
return m__9093__auto__.call(null,m,ch);
} else {
var m__9093__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__9093__auto____$1 == null))){
return m__9093__auto____$1.call(null,m,ch);
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
var x__9092__auto__ = (((m == null))?null:m);
var m__9093__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__9092__auto__)]);
if(!((m__9093__auto__ == null))){
return m__9093__auto__.call(null,m);
} else {
var m__9093__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__9093__auto____$1 == null))){
return m__9093__auto____$1.call(null,m);
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
var x__9092__auto__ = (((m == null))?null:m);
var m__9093__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__9092__auto__)]);
if(!((m__9093__auto__ == null))){
return m__9093__auto__.call(null,m,state_map);
} else {
var m__9093__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__9093__auto____$1 == null))){
return m__9093__auto____$1.call(null,m,state_map);
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
var x__9092__auto__ = (((m == null))?null:m);
var m__9093__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__9092__auto__)]);
if(!((m__9093__auto__ == null))){
return m__9093__auto__.call(null,m,mode);
} else {
var m__9093__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__9093__auto____$1 == null))){
return m__9093__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__9643__auto__ = [];
var len__9636__auto___13836 = arguments.length;
var i__9637__auto___13837 = (0);
while(true){
if((i__9637__auto___13837 < len__9636__auto___13836)){
args__9643__auto__.push((arguments[i__9637__auto___13837]));

var G__13838 = (i__9637__auto___13837 + (1));
i__9637__auto___13837 = G__13838;
continue;
} else {
}
break;
}

var argseq__9644__auto__ = ((((3) < args__9643__auto__.length))?(new cljs.core.IndexedSeq(args__9643__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9644__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__13830){
var map__13831 = p__13830;
var map__13831__$1 = ((((!((map__13831 == null)))?((((map__13831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13831.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13831):map__13831);
var opts = map__13831__$1;
var statearr_13833_13839 = state;
(statearr_13833_13839[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__13831,map__13831__$1,opts){
return (function (val){
var statearr_13834_13840 = state;
(statearr_13834_13840[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__13831,map__13831__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_13835_13841 = state;
(statearr_13835_13841[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq13826){
var G__13827 = cljs.core.first.call(null,seq13826);
var seq13826__$1 = cljs.core.next.call(null,seq13826);
var G__13828 = cljs.core.first.call(null,seq13826__$1);
var seq13826__$2 = cljs.core.next.call(null,seq13826__$1);
var G__13829 = cljs.core.first.call(null,seq13826__$2);
var seq13826__$3 = cljs.core.next.call(null,seq13826__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13827,G__13828,G__13829,seq13826__$3);
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
if(typeof cljs.core.async.t_cljs$core$async13842 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13842 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta13843){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta13843 = meta13843;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13844,meta13843__$1){
var self__ = this;
var _13844__$1 = this;
return (new cljs.core.async.t_cljs$core$async13842(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta13843__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13842.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13844){
var self__ = this;
var _13844__$1 = this;
return self__.meta13843;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13842.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13842.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13842.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13842.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13842.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13842.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13842.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13842.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async13842.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta13843","meta13843",-1167948840,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13842.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13842.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13842";

cljs.core.async.t_cljs$core$async13842.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__9030__auto__,writer__9031__auto__,opt__9032__auto__){
return cljs.core._write.call(null,writer__9031__auto__,"cljs.core.async/t_cljs$core$async13842");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async13842 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async13842(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta13843){
return (new cljs.core.async.t_cljs$core$async13842(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta13843));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async13842(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12947__auto___14006 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12947__auto___14006,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__12948__auto__ = (function (){var switch__12857__auto__ = ((function (c__12947__auto___14006,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13946){
var state_val_13947 = (state_13946[(1)]);
if((state_val_13947 === (7))){
var inst_13861 = (state_13946[(2)]);
var state_13946__$1 = state_13946;
var statearr_13948_14007 = state_13946__$1;
(statearr_13948_14007[(2)] = inst_13861);

(statearr_13948_14007[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (20))){
var inst_13873 = (state_13946[(7)]);
var state_13946__$1 = state_13946;
var statearr_13949_14008 = state_13946__$1;
(statearr_13949_14008[(2)] = inst_13873);

(statearr_13949_14008[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (27))){
var state_13946__$1 = state_13946;
var statearr_13950_14009 = state_13946__$1;
(statearr_13950_14009[(2)] = null);

(statearr_13950_14009[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (1))){
var inst_13848 = (state_13946[(8)]);
var inst_13848__$1 = calc_state.call(null);
var inst_13850 = (inst_13848__$1 == null);
var inst_13851 = cljs.core.not.call(null,inst_13850);
var state_13946__$1 = (function (){var statearr_13951 = state_13946;
(statearr_13951[(8)] = inst_13848__$1);

return statearr_13951;
})();
if(inst_13851){
var statearr_13952_14010 = state_13946__$1;
(statearr_13952_14010[(1)] = (2));

} else {
var statearr_13953_14011 = state_13946__$1;
(statearr_13953_14011[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (24))){
var inst_13906 = (state_13946[(9)]);
var inst_13897 = (state_13946[(10)]);
var inst_13920 = (state_13946[(11)]);
var inst_13920__$1 = inst_13897.call(null,inst_13906);
var state_13946__$1 = (function (){var statearr_13954 = state_13946;
(statearr_13954[(11)] = inst_13920__$1);

return statearr_13954;
})();
if(cljs.core.truth_(inst_13920__$1)){
var statearr_13955_14012 = state_13946__$1;
(statearr_13955_14012[(1)] = (29));

} else {
var statearr_13956_14013 = state_13946__$1;
(statearr_13956_14013[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (4))){
var inst_13864 = (state_13946[(2)]);
var state_13946__$1 = state_13946;
if(cljs.core.truth_(inst_13864)){
var statearr_13957_14014 = state_13946__$1;
(statearr_13957_14014[(1)] = (8));

} else {
var statearr_13958_14015 = state_13946__$1;
(statearr_13958_14015[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (15))){
var inst_13891 = (state_13946[(2)]);
var state_13946__$1 = state_13946;
if(cljs.core.truth_(inst_13891)){
var statearr_13959_14016 = state_13946__$1;
(statearr_13959_14016[(1)] = (19));

} else {
var statearr_13960_14017 = state_13946__$1;
(statearr_13960_14017[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (21))){
var inst_13896 = (state_13946[(12)]);
var inst_13896__$1 = (state_13946[(2)]);
var inst_13897 = cljs.core.get.call(null,inst_13896__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13898 = cljs.core.get.call(null,inst_13896__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13899 = cljs.core.get.call(null,inst_13896__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_13946__$1 = (function (){var statearr_13961 = state_13946;
(statearr_13961[(10)] = inst_13897);

(statearr_13961[(12)] = inst_13896__$1);

(statearr_13961[(13)] = inst_13898);

return statearr_13961;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_13946__$1,(22),inst_13899);
} else {
if((state_val_13947 === (31))){
var inst_13928 = (state_13946[(2)]);
var state_13946__$1 = state_13946;
if(cljs.core.truth_(inst_13928)){
var statearr_13962_14018 = state_13946__$1;
(statearr_13962_14018[(1)] = (32));

} else {
var statearr_13963_14019 = state_13946__$1;
(statearr_13963_14019[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (32))){
var inst_13905 = (state_13946[(14)]);
var state_13946__$1 = state_13946;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13946__$1,(35),out,inst_13905);
} else {
if((state_val_13947 === (33))){
var inst_13896 = (state_13946[(12)]);
var inst_13873 = inst_13896;
var state_13946__$1 = (function (){var statearr_13964 = state_13946;
(statearr_13964[(7)] = inst_13873);

return statearr_13964;
})();
var statearr_13965_14020 = state_13946__$1;
(statearr_13965_14020[(2)] = null);

(statearr_13965_14020[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (13))){
var inst_13873 = (state_13946[(7)]);
var inst_13880 = inst_13873.cljs$lang$protocol_mask$partition0$;
var inst_13881 = (inst_13880 & (64));
var inst_13882 = inst_13873.cljs$core$ISeq$;
var inst_13883 = (cljs.core.PROTOCOL_SENTINEL === inst_13882);
var inst_13884 = (inst_13881) || (inst_13883);
var state_13946__$1 = state_13946;
if(cljs.core.truth_(inst_13884)){
var statearr_13966_14021 = state_13946__$1;
(statearr_13966_14021[(1)] = (16));

} else {
var statearr_13967_14022 = state_13946__$1;
(statearr_13967_14022[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (22))){
var inst_13906 = (state_13946[(9)]);
var inst_13905 = (state_13946[(14)]);
var inst_13904 = (state_13946[(2)]);
var inst_13905__$1 = cljs.core.nth.call(null,inst_13904,(0),null);
var inst_13906__$1 = cljs.core.nth.call(null,inst_13904,(1),null);
var inst_13907 = (inst_13905__$1 == null);
var inst_13908 = cljs.core._EQ_.call(null,inst_13906__$1,change);
var inst_13909 = (inst_13907) || (inst_13908);
var state_13946__$1 = (function (){var statearr_13968 = state_13946;
(statearr_13968[(9)] = inst_13906__$1);

(statearr_13968[(14)] = inst_13905__$1);

return statearr_13968;
})();
if(cljs.core.truth_(inst_13909)){
var statearr_13969_14023 = state_13946__$1;
(statearr_13969_14023[(1)] = (23));

} else {
var statearr_13970_14024 = state_13946__$1;
(statearr_13970_14024[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (36))){
var inst_13896 = (state_13946[(12)]);
var inst_13873 = inst_13896;
var state_13946__$1 = (function (){var statearr_13971 = state_13946;
(statearr_13971[(7)] = inst_13873);

return statearr_13971;
})();
var statearr_13972_14025 = state_13946__$1;
(statearr_13972_14025[(2)] = null);

(statearr_13972_14025[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (29))){
var inst_13920 = (state_13946[(11)]);
var state_13946__$1 = state_13946;
var statearr_13973_14026 = state_13946__$1;
(statearr_13973_14026[(2)] = inst_13920);

(statearr_13973_14026[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (6))){
var state_13946__$1 = state_13946;
var statearr_13974_14027 = state_13946__$1;
(statearr_13974_14027[(2)] = false);

(statearr_13974_14027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (28))){
var inst_13916 = (state_13946[(2)]);
var inst_13917 = calc_state.call(null);
var inst_13873 = inst_13917;
var state_13946__$1 = (function (){var statearr_13975 = state_13946;
(statearr_13975[(15)] = inst_13916);

(statearr_13975[(7)] = inst_13873);

return statearr_13975;
})();
var statearr_13976_14028 = state_13946__$1;
(statearr_13976_14028[(2)] = null);

(statearr_13976_14028[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (25))){
var inst_13942 = (state_13946[(2)]);
var state_13946__$1 = state_13946;
var statearr_13977_14029 = state_13946__$1;
(statearr_13977_14029[(2)] = inst_13942);

(statearr_13977_14029[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (34))){
var inst_13940 = (state_13946[(2)]);
var state_13946__$1 = state_13946;
var statearr_13978_14030 = state_13946__$1;
(statearr_13978_14030[(2)] = inst_13940);

(statearr_13978_14030[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (17))){
var state_13946__$1 = state_13946;
var statearr_13979_14031 = state_13946__$1;
(statearr_13979_14031[(2)] = false);

(statearr_13979_14031[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (3))){
var state_13946__$1 = state_13946;
var statearr_13980_14032 = state_13946__$1;
(statearr_13980_14032[(2)] = false);

(statearr_13980_14032[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (12))){
var inst_13944 = (state_13946[(2)]);
var state_13946__$1 = state_13946;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13946__$1,inst_13944);
} else {
if((state_val_13947 === (2))){
var inst_13848 = (state_13946[(8)]);
var inst_13853 = inst_13848.cljs$lang$protocol_mask$partition0$;
var inst_13854 = (inst_13853 & (64));
var inst_13855 = inst_13848.cljs$core$ISeq$;
var inst_13856 = (cljs.core.PROTOCOL_SENTINEL === inst_13855);
var inst_13857 = (inst_13854) || (inst_13856);
var state_13946__$1 = state_13946;
if(cljs.core.truth_(inst_13857)){
var statearr_13981_14033 = state_13946__$1;
(statearr_13981_14033[(1)] = (5));

} else {
var statearr_13982_14034 = state_13946__$1;
(statearr_13982_14034[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (23))){
var inst_13905 = (state_13946[(14)]);
var inst_13911 = (inst_13905 == null);
var state_13946__$1 = state_13946;
if(cljs.core.truth_(inst_13911)){
var statearr_13983_14035 = state_13946__$1;
(statearr_13983_14035[(1)] = (26));

} else {
var statearr_13984_14036 = state_13946__$1;
(statearr_13984_14036[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (35))){
var inst_13931 = (state_13946[(2)]);
var state_13946__$1 = state_13946;
if(cljs.core.truth_(inst_13931)){
var statearr_13985_14037 = state_13946__$1;
(statearr_13985_14037[(1)] = (36));

} else {
var statearr_13986_14038 = state_13946__$1;
(statearr_13986_14038[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (19))){
var inst_13873 = (state_13946[(7)]);
var inst_13893 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13873);
var state_13946__$1 = state_13946;
var statearr_13987_14039 = state_13946__$1;
(statearr_13987_14039[(2)] = inst_13893);

(statearr_13987_14039[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (11))){
var inst_13873 = (state_13946[(7)]);
var inst_13877 = (inst_13873 == null);
var inst_13878 = cljs.core.not.call(null,inst_13877);
var state_13946__$1 = state_13946;
if(inst_13878){
var statearr_13988_14040 = state_13946__$1;
(statearr_13988_14040[(1)] = (13));

} else {
var statearr_13989_14041 = state_13946__$1;
(statearr_13989_14041[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (9))){
var inst_13848 = (state_13946[(8)]);
var state_13946__$1 = state_13946;
var statearr_13990_14042 = state_13946__$1;
(statearr_13990_14042[(2)] = inst_13848);

(statearr_13990_14042[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (5))){
var state_13946__$1 = state_13946;
var statearr_13991_14043 = state_13946__$1;
(statearr_13991_14043[(2)] = true);

(statearr_13991_14043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (14))){
var state_13946__$1 = state_13946;
var statearr_13992_14044 = state_13946__$1;
(statearr_13992_14044[(2)] = false);

(statearr_13992_14044[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (26))){
var inst_13906 = (state_13946[(9)]);
var inst_13913 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13906);
var state_13946__$1 = state_13946;
var statearr_13993_14045 = state_13946__$1;
(statearr_13993_14045[(2)] = inst_13913);

(statearr_13993_14045[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (16))){
var state_13946__$1 = state_13946;
var statearr_13994_14046 = state_13946__$1;
(statearr_13994_14046[(2)] = true);

(statearr_13994_14046[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (38))){
var inst_13936 = (state_13946[(2)]);
var state_13946__$1 = state_13946;
var statearr_13995_14047 = state_13946__$1;
(statearr_13995_14047[(2)] = inst_13936);

(statearr_13995_14047[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (30))){
var inst_13906 = (state_13946[(9)]);
var inst_13897 = (state_13946[(10)]);
var inst_13898 = (state_13946[(13)]);
var inst_13923 = cljs.core.empty_QMARK_.call(null,inst_13897);
var inst_13924 = inst_13898.call(null,inst_13906);
var inst_13925 = cljs.core.not.call(null,inst_13924);
var inst_13926 = (inst_13923) && (inst_13925);
var state_13946__$1 = state_13946;
var statearr_13996_14048 = state_13946__$1;
(statearr_13996_14048[(2)] = inst_13926);

(statearr_13996_14048[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (10))){
var inst_13848 = (state_13946[(8)]);
var inst_13869 = (state_13946[(2)]);
var inst_13870 = cljs.core.get.call(null,inst_13869,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13871 = cljs.core.get.call(null,inst_13869,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13872 = cljs.core.get.call(null,inst_13869,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_13873 = inst_13848;
var state_13946__$1 = (function (){var statearr_13997 = state_13946;
(statearr_13997[(16)] = inst_13872);

(statearr_13997[(7)] = inst_13873);

(statearr_13997[(17)] = inst_13870);

(statearr_13997[(18)] = inst_13871);

return statearr_13997;
})();
var statearr_13998_14049 = state_13946__$1;
(statearr_13998_14049[(2)] = null);

(statearr_13998_14049[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (18))){
var inst_13888 = (state_13946[(2)]);
var state_13946__$1 = state_13946;
var statearr_13999_14050 = state_13946__$1;
(statearr_13999_14050[(2)] = inst_13888);

(statearr_13999_14050[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (37))){
var state_13946__$1 = state_13946;
var statearr_14000_14051 = state_13946__$1;
(statearr_14000_14051[(2)] = null);

(statearr_14000_14051[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (8))){
var inst_13848 = (state_13946[(8)]);
var inst_13866 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13848);
var state_13946__$1 = state_13946;
var statearr_14001_14052 = state_13946__$1;
(statearr_14001_14052[(2)] = inst_13866);

(statearr_14001_14052[(1)] = (10));


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
});})(c__12947__auto___14006,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__12857__auto__,c__12947__auto___14006,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__12858__auto__ = null;
var cljs$core$async$mix_$_state_machine__12858__auto____0 = (function (){
var statearr_14002 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14002[(0)] = cljs$core$async$mix_$_state_machine__12858__auto__);

(statearr_14002[(1)] = (1));

return statearr_14002;
});
var cljs$core$async$mix_$_state_machine__12858__auto____1 = (function (state_13946){
while(true){
var ret_value__12859__auto__ = (function (){try{while(true){
var result__12860__auto__ = switch__12857__auto__.call(null,state_13946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12860__auto__;
}
break;
}
}catch (e14003){if((e14003 instanceof Object)){
var ex__12861__auto__ = e14003;
var statearr_14004_14053 = state_13946;
(statearr_14004_14053[(5)] = ex__12861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14054 = state_13946;
state_13946 = G__14054;
continue;
} else {
return ret_value__12859__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__12858__auto__ = function(state_13946){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__12858__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__12858__auto____1.call(this,state_13946);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__12858__auto____0;
cljs$core$async$mix_$_state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__12858__auto____1;
return cljs$core$async$mix_$_state_machine__12858__auto__;
})()
;})(switch__12857__auto__,c__12947__auto___14006,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__12949__auto__ = (function (){var statearr_14005 = f__12948__auto__.call(null);
(statearr_14005[(6)] = c__12947__auto___14006);

return statearr_14005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12949__auto__);
});})(c__12947__auto___14006,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__9092__auto__ = (((p == null))?null:p);
var m__9093__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__9092__auto__)]);
if(!((m__9093__auto__ == null))){
return m__9093__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__9093__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__9093__auto____$1 == null))){
return m__9093__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__9092__auto__ = (((p == null))?null:p);
var m__9093__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__9092__auto__)]);
if(!((m__9093__auto__ == null))){
return m__9093__auto__.call(null,p,v,ch);
} else {
var m__9093__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__9093__auto____$1 == null))){
return m__9093__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__14056 = arguments.length;
switch (G__14056) {
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
var x__9092__auto__ = (((p == null))?null:p);
var m__9093__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9092__auto__)]);
if(!((m__9093__auto__ == null))){
return m__9093__auto__.call(null,p);
} else {
var m__9093__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__9093__auto____$1 == null))){
return m__9093__auto____$1.call(null,p);
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
var x__9092__auto__ = (((p == null))?null:p);
var m__9093__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9092__auto__)]);
if(!((m__9093__auto__ == null))){
return m__9093__auto__.call(null,p,v);
} else {
var m__9093__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__9093__auto____$1 == null))){
return m__9093__auto____$1.call(null,p,v);
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
var G__14060 = arguments.length;
switch (G__14060) {
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
var or__8359__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__8359__auto__)){
return or__8359__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__8359__auto__,mults){
return (function (p1__14058_SHARP_){
if(cljs.core.truth_(p1__14058_SHARP_.call(null,topic))){
return p1__14058_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__14058_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__8359__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async14061 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14061 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta14062){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta14062 = meta14062;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14063,meta14062__$1){
var self__ = this;
var _14063__$1 = this;
return (new cljs.core.async.t_cljs$core$async14061(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta14062__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14061.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14063){
var self__ = this;
var _14063__$1 = this;
return self__.meta14062;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14061.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14061.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14061.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14061.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14061.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async14061.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14061.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14061.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta14062","meta14062",-247353854,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14061.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14061.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14061";

cljs.core.async.t_cljs$core$async14061.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__9030__auto__,writer__9031__auto__,opt__9032__auto__){
return cljs.core._write.call(null,writer__9031__auto__,"cljs.core.async/t_cljs$core$async14061");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async14061 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async14061(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14062){
return (new cljs.core.async.t_cljs$core$async14061(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14062));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async14061(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12947__auto___14181 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12947__auto___14181,mults,ensure_mult,p){
return (function (){
var f__12948__auto__ = (function (){var switch__12857__auto__ = ((function (c__12947__auto___14181,mults,ensure_mult,p){
return (function (state_14135){
var state_val_14136 = (state_14135[(1)]);
if((state_val_14136 === (7))){
var inst_14131 = (state_14135[(2)]);
var state_14135__$1 = state_14135;
var statearr_14137_14182 = state_14135__$1;
(statearr_14137_14182[(2)] = inst_14131);

(statearr_14137_14182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (20))){
var state_14135__$1 = state_14135;
var statearr_14138_14183 = state_14135__$1;
(statearr_14138_14183[(2)] = null);

(statearr_14138_14183[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (1))){
var state_14135__$1 = state_14135;
var statearr_14139_14184 = state_14135__$1;
(statearr_14139_14184[(2)] = null);

(statearr_14139_14184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (24))){
var inst_14114 = (state_14135[(7)]);
var inst_14123 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14114);
var state_14135__$1 = state_14135;
var statearr_14140_14185 = state_14135__$1;
(statearr_14140_14185[(2)] = inst_14123);

(statearr_14140_14185[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (4))){
var inst_14066 = (state_14135[(8)]);
var inst_14066__$1 = (state_14135[(2)]);
var inst_14067 = (inst_14066__$1 == null);
var state_14135__$1 = (function (){var statearr_14141 = state_14135;
(statearr_14141[(8)] = inst_14066__$1);

return statearr_14141;
})();
if(cljs.core.truth_(inst_14067)){
var statearr_14142_14186 = state_14135__$1;
(statearr_14142_14186[(1)] = (5));

} else {
var statearr_14143_14187 = state_14135__$1;
(statearr_14143_14187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (15))){
var inst_14108 = (state_14135[(2)]);
var state_14135__$1 = state_14135;
var statearr_14144_14188 = state_14135__$1;
(statearr_14144_14188[(2)] = inst_14108);

(statearr_14144_14188[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (21))){
var inst_14128 = (state_14135[(2)]);
var state_14135__$1 = (function (){var statearr_14145 = state_14135;
(statearr_14145[(9)] = inst_14128);

return statearr_14145;
})();
var statearr_14146_14189 = state_14135__$1;
(statearr_14146_14189[(2)] = null);

(statearr_14146_14189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (13))){
var inst_14090 = (state_14135[(10)]);
var inst_14092 = cljs.core.chunked_seq_QMARK_.call(null,inst_14090);
var state_14135__$1 = state_14135;
if(inst_14092){
var statearr_14147_14190 = state_14135__$1;
(statearr_14147_14190[(1)] = (16));

} else {
var statearr_14148_14191 = state_14135__$1;
(statearr_14148_14191[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (22))){
var inst_14120 = (state_14135[(2)]);
var state_14135__$1 = state_14135;
if(cljs.core.truth_(inst_14120)){
var statearr_14149_14192 = state_14135__$1;
(statearr_14149_14192[(1)] = (23));

} else {
var statearr_14150_14193 = state_14135__$1;
(statearr_14150_14193[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (6))){
var inst_14066 = (state_14135[(8)]);
var inst_14116 = (state_14135[(11)]);
var inst_14114 = (state_14135[(7)]);
var inst_14114__$1 = topic_fn.call(null,inst_14066);
var inst_14115 = cljs.core.deref.call(null,mults);
var inst_14116__$1 = cljs.core.get.call(null,inst_14115,inst_14114__$1);
var state_14135__$1 = (function (){var statearr_14151 = state_14135;
(statearr_14151[(11)] = inst_14116__$1);

(statearr_14151[(7)] = inst_14114__$1);

return statearr_14151;
})();
if(cljs.core.truth_(inst_14116__$1)){
var statearr_14152_14194 = state_14135__$1;
(statearr_14152_14194[(1)] = (19));

} else {
var statearr_14153_14195 = state_14135__$1;
(statearr_14153_14195[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (25))){
var inst_14125 = (state_14135[(2)]);
var state_14135__$1 = state_14135;
var statearr_14154_14196 = state_14135__$1;
(statearr_14154_14196[(2)] = inst_14125);

(statearr_14154_14196[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (17))){
var inst_14090 = (state_14135[(10)]);
var inst_14099 = cljs.core.first.call(null,inst_14090);
var inst_14100 = cljs.core.async.muxch_STAR_.call(null,inst_14099);
var inst_14101 = cljs.core.async.close_BANG_.call(null,inst_14100);
var inst_14102 = cljs.core.next.call(null,inst_14090);
var inst_14076 = inst_14102;
var inst_14077 = null;
var inst_14078 = (0);
var inst_14079 = (0);
var state_14135__$1 = (function (){var statearr_14155 = state_14135;
(statearr_14155[(12)] = inst_14101);

(statearr_14155[(13)] = inst_14078);

(statearr_14155[(14)] = inst_14076);

(statearr_14155[(15)] = inst_14079);

(statearr_14155[(16)] = inst_14077);

return statearr_14155;
})();
var statearr_14156_14197 = state_14135__$1;
(statearr_14156_14197[(2)] = null);

(statearr_14156_14197[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (3))){
var inst_14133 = (state_14135[(2)]);
var state_14135__$1 = state_14135;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14135__$1,inst_14133);
} else {
if((state_val_14136 === (12))){
var inst_14110 = (state_14135[(2)]);
var state_14135__$1 = state_14135;
var statearr_14157_14198 = state_14135__$1;
(statearr_14157_14198[(2)] = inst_14110);

(statearr_14157_14198[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (2))){
var state_14135__$1 = state_14135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14135__$1,(4),ch);
} else {
if((state_val_14136 === (23))){
var state_14135__$1 = state_14135;
var statearr_14158_14199 = state_14135__$1;
(statearr_14158_14199[(2)] = null);

(statearr_14158_14199[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (19))){
var inst_14066 = (state_14135[(8)]);
var inst_14116 = (state_14135[(11)]);
var inst_14118 = cljs.core.async.muxch_STAR_.call(null,inst_14116);
var state_14135__$1 = state_14135;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14135__$1,(22),inst_14118,inst_14066);
} else {
if((state_val_14136 === (11))){
var inst_14090 = (state_14135[(10)]);
var inst_14076 = (state_14135[(14)]);
var inst_14090__$1 = cljs.core.seq.call(null,inst_14076);
var state_14135__$1 = (function (){var statearr_14159 = state_14135;
(statearr_14159[(10)] = inst_14090__$1);

return statearr_14159;
})();
if(inst_14090__$1){
var statearr_14160_14200 = state_14135__$1;
(statearr_14160_14200[(1)] = (13));

} else {
var statearr_14161_14201 = state_14135__$1;
(statearr_14161_14201[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (9))){
var inst_14112 = (state_14135[(2)]);
var state_14135__$1 = state_14135;
var statearr_14162_14202 = state_14135__$1;
(statearr_14162_14202[(2)] = inst_14112);

(statearr_14162_14202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (5))){
var inst_14073 = cljs.core.deref.call(null,mults);
var inst_14074 = cljs.core.vals.call(null,inst_14073);
var inst_14075 = cljs.core.seq.call(null,inst_14074);
var inst_14076 = inst_14075;
var inst_14077 = null;
var inst_14078 = (0);
var inst_14079 = (0);
var state_14135__$1 = (function (){var statearr_14163 = state_14135;
(statearr_14163[(13)] = inst_14078);

(statearr_14163[(14)] = inst_14076);

(statearr_14163[(15)] = inst_14079);

(statearr_14163[(16)] = inst_14077);

return statearr_14163;
})();
var statearr_14164_14203 = state_14135__$1;
(statearr_14164_14203[(2)] = null);

(statearr_14164_14203[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (14))){
var state_14135__$1 = state_14135;
var statearr_14168_14204 = state_14135__$1;
(statearr_14168_14204[(2)] = null);

(statearr_14168_14204[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (16))){
var inst_14090 = (state_14135[(10)]);
var inst_14094 = cljs.core.chunk_first.call(null,inst_14090);
var inst_14095 = cljs.core.chunk_rest.call(null,inst_14090);
var inst_14096 = cljs.core.count.call(null,inst_14094);
var inst_14076 = inst_14095;
var inst_14077 = inst_14094;
var inst_14078 = inst_14096;
var inst_14079 = (0);
var state_14135__$1 = (function (){var statearr_14169 = state_14135;
(statearr_14169[(13)] = inst_14078);

(statearr_14169[(14)] = inst_14076);

(statearr_14169[(15)] = inst_14079);

(statearr_14169[(16)] = inst_14077);

return statearr_14169;
})();
var statearr_14170_14205 = state_14135__$1;
(statearr_14170_14205[(2)] = null);

(statearr_14170_14205[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (10))){
var inst_14078 = (state_14135[(13)]);
var inst_14076 = (state_14135[(14)]);
var inst_14079 = (state_14135[(15)]);
var inst_14077 = (state_14135[(16)]);
var inst_14084 = cljs.core._nth.call(null,inst_14077,inst_14079);
var inst_14085 = cljs.core.async.muxch_STAR_.call(null,inst_14084);
var inst_14086 = cljs.core.async.close_BANG_.call(null,inst_14085);
var inst_14087 = (inst_14079 + (1));
var tmp14165 = inst_14078;
var tmp14166 = inst_14076;
var tmp14167 = inst_14077;
var inst_14076__$1 = tmp14166;
var inst_14077__$1 = tmp14167;
var inst_14078__$1 = tmp14165;
var inst_14079__$1 = inst_14087;
var state_14135__$1 = (function (){var statearr_14171 = state_14135;
(statearr_14171[(13)] = inst_14078__$1);

(statearr_14171[(17)] = inst_14086);

(statearr_14171[(14)] = inst_14076__$1);

(statearr_14171[(15)] = inst_14079__$1);

(statearr_14171[(16)] = inst_14077__$1);

return statearr_14171;
})();
var statearr_14172_14206 = state_14135__$1;
(statearr_14172_14206[(2)] = null);

(statearr_14172_14206[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (18))){
var inst_14105 = (state_14135[(2)]);
var state_14135__$1 = state_14135;
var statearr_14173_14207 = state_14135__$1;
(statearr_14173_14207[(2)] = inst_14105);

(statearr_14173_14207[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (8))){
var inst_14078 = (state_14135[(13)]);
var inst_14079 = (state_14135[(15)]);
var inst_14081 = (inst_14079 < inst_14078);
var inst_14082 = inst_14081;
var state_14135__$1 = state_14135;
if(cljs.core.truth_(inst_14082)){
var statearr_14174_14208 = state_14135__$1;
(statearr_14174_14208[(1)] = (10));

} else {
var statearr_14175_14209 = state_14135__$1;
(statearr_14175_14209[(1)] = (11));

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
});})(c__12947__auto___14181,mults,ensure_mult,p))
;
return ((function (switch__12857__auto__,c__12947__auto___14181,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__12858__auto__ = null;
var cljs$core$async$state_machine__12858__auto____0 = (function (){
var statearr_14176 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14176[(0)] = cljs$core$async$state_machine__12858__auto__);

(statearr_14176[(1)] = (1));

return statearr_14176;
});
var cljs$core$async$state_machine__12858__auto____1 = (function (state_14135){
while(true){
var ret_value__12859__auto__ = (function (){try{while(true){
var result__12860__auto__ = switch__12857__auto__.call(null,state_14135);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12860__auto__;
}
break;
}
}catch (e14177){if((e14177 instanceof Object)){
var ex__12861__auto__ = e14177;
var statearr_14178_14210 = state_14135;
(statearr_14178_14210[(5)] = ex__12861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14177;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14211 = state_14135;
state_14135 = G__14211;
continue;
} else {
return ret_value__12859__auto__;
}
break;
}
});
cljs$core$async$state_machine__12858__auto__ = function(state_14135){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12858__auto____1.call(this,state_14135);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12858__auto____0;
cljs$core$async$state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12858__auto____1;
return cljs$core$async$state_machine__12858__auto__;
})()
;})(switch__12857__auto__,c__12947__auto___14181,mults,ensure_mult,p))
})();
var state__12949__auto__ = (function (){var statearr_14179 = f__12948__auto__.call(null);
(statearr_14179[(6)] = c__12947__auto___14181);

return statearr_14179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12949__auto__);
});})(c__12947__auto___14181,mults,ensure_mult,p))
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
var G__14213 = arguments.length;
switch (G__14213) {
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
var G__14216 = arguments.length;
switch (G__14216) {
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
var G__14219 = arguments.length;
switch (G__14219) {
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
var c__12947__auto___14286 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12947__auto___14286,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__12948__auto__ = (function (){var switch__12857__auto__ = ((function (c__12947__auto___14286,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14258){
var state_val_14259 = (state_14258[(1)]);
if((state_val_14259 === (7))){
var state_14258__$1 = state_14258;
var statearr_14260_14287 = state_14258__$1;
(statearr_14260_14287[(2)] = null);

(statearr_14260_14287[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14259 === (1))){
var state_14258__$1 = state_14258;
var statearr_14261_14288 = state_14258__$1;
(statearr_14261_14288[(2)] = null);

(statearr_14261_14288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14259 === (4))){
var inst_14222 = (state_14258[(7)]);
var inst_14224 = (inst_14222 < cnt);
var state_14258__$1 = state_14258;
if(cljs.core.truth_(inst_14224)){
var statearr_14262_14289 = state_14258__$1;
(statearr_14262_14289[(1)] = (6));

} else {
var statearr_14263_14290 = state_14258__$1;
(statearr_14263_14290[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14259 === (15))){
var inst_14254 = (state_14258[(2)]);
var state_14258__$1 = state_14258;
var statearr_14264_14291 = state_14258__$1;
(statearr_14264_14291[(2)] = inst_14254);

(statearr_14264_14291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14259 === (13))){
var inst_14247 = cljs.core.async.close_BANG_.call(null,out);
var state_14258__$1 = state_14258;
var statearr_14265_14292 = state_14258__$1;
(statearr_14265_14292[(2)] = inst_14247);

(statearr_14265_14292[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14259 === (6))){
var state_14258__$1 = state_14258;
var statearr_14266_14293 = state_14258__$1;
(statearr_14266_14293[(2)] = null);

(statearr_14266_14293[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14259 === (3))){
var inst_14256 = (state_14258[(2)]);
var state_14258__$1 = state_14258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14258__$1,inst_14256);
} else {
if((state_val_14259 === (12))){
var inst_14244 = (state_14258[(8)]);
var inst_14244__$1 = (state_14258[(2)]);
var inst_14245 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14244__$1);
var state_14258__$1 = (function (){var statearr_14267 = state_14258;
(statearr_14267[(8)] = inst_14244__$1);

return statearr_14267;
})();
if(cljs.core.truth_(inst_14245)){
var statearr_14268_14294 = state_14258__$1;
(statearr_14268_14294[(1)] = (13));

} else {
var statearr_14269_14295 = state_14258__$1;
(statearr_14269_14295[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14259 === (2))){
var inst_14221 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_14222 = (0);
var state_14258__$1 = (function (){var statearr_14270 = state_14258;
(statearr_14270[(7)] = inst_14222);

(statearr_14270[(9)] = inst_14221);

return statearr_14270;
})();
var statearr_14271_14296 = state_14258__$1;
(statearr_14271_14296[(2)] = null);

(statearr_14271_14296[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14259 === (11))){
var inst_14222 = (state_14258[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14258,(10),Object,null,(9));
var inst_14231 = chs__$1.call(null,inst_14222);
var inst_14232 = done.call(null,inst_14222);
var inst_14233 = cljs.core.async.take_BANG_.call(null,inst_14231,inst_14232);
var state_14258__$1 = state_14258;
var statearr_14272_14297 = state_14258__$1;
(statearr_14272_14297[(2)] = inst_14233);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14258__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14259 === (9))){
var inst_14222 = (state_14258[(7)]);
var inst_14235 = (state_14258[(2)]);
var inst_14236 = (inst_14222 + (1));
var inst_14222__$1 = inst_14236;
var state_14258__$1 = (function (){var statearr_14273 = state_14258;
(statearr_14273[(10)] = inst_14235);

(statearr_14273[(7)] = inst_14222__$1);

return statearr_14273;
})();
var statearr_14274_14298 = state_14258__$1;
(statearr_14274_14298[(2)] = null);

(statearr_14274_14298[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14259 === (5))){
var inst_14242 = (state_14258[(2)]);
var state_14258__$1 = (function (){var statearr_14275 = state_14258;
(statearr_14275[(11)] = inst_14242);

return statearr_14275;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14258__$1,(12),dchan);
} else {
if((state_val_14259 === (14))){
var inst_14244 = (state_14258[(8)]);
var inst_14249 = cljs.core.apply.call(null,f,inst_14244);
var state_14258__$1 = state_14258;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14258__$1,(16),out,inst_14249);
} else {
if((state_val_14259 === (16))){
var inst_14251 = (state_14258[(2)]);
var state_14258__$1 = (function (){var statearr_14276 = state_14258;
(statearr_14276[(12)] = inst_14251);

return statearr_14276;
})();
var statearr_14277_14299 = state_14258__$1;
(statearr_14277_14299[(2)] = null);

(statearr_14277_14299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14259 === (10))){
var inst_14226 = (state_14258[(2)]);
var inst_14227 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_14258__$1 = (function (){var statearr_14278 = state_14258;
(statearr_14278[(13)] = inst_14226);

return statearr_14278;
})();
var statearr_14279_14300 = state_14258__$1;
(statearr_14279_14300[(2)] = inst_14227);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14258__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14259 === (8))){
var inst_14240 = (state_14258[(2)]);
var state_14258__$1 = state_14258;
var statearr_14280_14301 = state_14258__$1;
(statearr_14280_14301[(2)] = inst_14240);

(statearr_14280_14301[(1)] = (5));


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
});})(c__12947__auto___14286,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__12857__auto__,c__12947__auto___14286,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__12858__auto__ = null;
var cljs$core$async$state_machine__12858__auto____0 = (function (){
var statearr_14281 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14281[(0)] = cljs$core$async$state_machine__12858__auto__);

(statearr_14281[(1)] = (1));

return statearr_14281;
});
var cljs$core$async$state_machine__12858__auto____1 = (function (state_14258){
while(true){
var ret_value__12859__auto__ = (function (){try{while(true){
var result__12860__auto__ = switch__12857__auto__.call(null,state_14258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12860__auto__;
}
break;
}
}catch (e14282){if((e14282 instanceof Object)){
var ex__12861__auto__ = e14282;
var statearr_14283_14302 = state_14258;
(statearr_14283_14302[(5)] = ex__12861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14303 = state_14258;
state_14258 = G__14303;
continue;
} else {
return ret_value__12859__auto__;
}
break;
}
});
cljs$core$async$state_machine__12858__auto__ = function(state_14258){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12858__auto____1.call(this,state_14258);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12858__auto____0;
cljs$core$async$state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12858__auto____1;
return cljs$core$async$state_machine__12858__auto__;
})()
;})(switch__12857__auto__,c__12947__auto___14286,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__12949__auto__ = (function (){var statearr_14284 = f__12948__auto__.call(null);
(statearr_14284[(6)] = c__12947__auto___14286);

return statearr_14284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12949__auto__);
});})(c__12947__auto___14286,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__14306 = arguments.length;
switch (G__14306) {
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
var c__12947__auto___14360 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12947__auto___14360,out){
return (function (){
var f__12948__auto__ = (function (){var switch__12857__auto__ = ((function (c__12947__auto___14360,out){
return (function (state_14338){
var state_val_14339 = (state_14338[(1)]);
if((state_val_14339 === (7))){
var inst_14317 = (state_14338[(7)]);
var inst_14318 = (state_14338[(8)]);
var inst_14317__$1 = (state_14338[(2)]);
var inst_14318__$1 = cljs.core.nth.call(null,inst_14317__$1,(0),null);
var inst_14319 = cljs.core.nth.call(null,inst_14317__$1,(1),null);
var inst_14320 = (inst_14318__$1 == null);
var state_14338__$1 = (function (){var statearr_14340 = state_14338;
(statearr_14340[(9)] = inst_14319);

(statearr_14340[(7)] = inst_14317__$1);

(statearr_14340[(8)] = inst_14318__$1);

return statearr_14340;
})();
if(cljs.core.truth_(inst_14320)){
var statearr_14341_14361 = state_14338__$1;
(statearr_14341_14361[(1)] = (8));

} else {
var statearr_14342_14362 = state_14338__$1;
(statearr_14342_14362[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14339 === (1))){
var inst_14307 = cljs.core.vec.call(null,chs);
var inst_14308 = inst_14307;
var state_14338__$1 = (function (){var statearr_14343 = state_14338;
(statearr_14343[(10)] = inst_14308);

return statearr_14343;
})();
var statearr_14344_14363 = state_14338__$1;
(statearr_14344_14363[(2)] = null);

(statearr_14344_14363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14339 === (4))){
var inst_14308 = (state_14338[(10)]);
var state_14338__$1 = state_14338;
return cljs.core.async.ioc_alts_BANG_.call(null,state_14338__$1,(7),inst_14308);
} else {
if((state_val_14339 === (6))){
var inst_14334 = (state_14338[(2)]);
var state_14338__$1 = state_14338;
var statearr_14345_14364 = state_14338__$1;
(statearr_14345_14364[(2)] = inst_14334);

(statearr_14345_14364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14339 === (3))){
var inst_14336 = (state_14338[(2)]);
var state_14338__$1 = state_14338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14338__$1,inst_14336);
} else {
if((state_val_14339 === (2))){
var inst_14308 = (state_14338[(10)]);
var inst_14310 = cljs.core.count.call(null,inst_14308);
var inst_14311 = (inst_14310 > (0));
var state_14338__$1 = state_14338;
if(cljs.core.truth_(inst_14311)){
var statearr_14347_14365 = state_14338__$1;
(statearr_14347_14365[(1)] = (4));

} else {
var statearr_14348_14366 = state_14338__$1;
(statearr_14348_14366[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14339 === (11))){
var inst_14308 = (state_14338[(10)]);
var inst_14327 = (state_14338[(2)]);
var tmp14346 = inst_14308;
var inst_14308__$1 = tmp14346;
var state_14338__$1 = (function (){var statearr_14349 = state_14338;
(statearr_14349[(11)] = inst_14327);

(statearr_14349[(10)] = inst_14308__$1);

return statearr_14349;
})();
var statearr_14350_14367 = state_14338__$1;
(statearr_14350_14367[(2)] = null);

(statearr_14350_14367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14339 === (9))){
var inst_14318 = (state_14338[(8)]);
var state_14338__$1 = state_14338;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14338__$1,(11),out,inst_14318);
} else {
if((state_val_14339 === (5))){
var inst_14332 = cljs.core.async.close_BANG_.call(null,out);
var state_14338__$1 = state_14338;
var statearr_14351_14368 = state_14338__$1;
(statearr_14351_14368[(2)] = inst_14332);

(statearr_14351_14368[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14339 === (10))){
var inst_14330 = (state_14338[(2)]);
var state_14338__$1 = state_14338;
var statearr_14352_14369 = state_14338__$1;
(statearr_14352_14369[(2)] = inst_14330);

(statearr_14352_14369[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14339 === (8))){
var inst_14319 = (state_14338[(9)]);
var inst_14317 = (state_14338[(7)]);
var inst_14318 = (state_14338[(8)]);
var inst_14308 = (state_14338[(10)]);
var inst_14322 = (function (){var cs = inst_14308;
var vec__14313 = inst_14317;
var v = inst_14318;
var c = inst_14319;
return ((function (cs,vec__14313,v,c,inst_14319,inst_14317,inst_14318,inst_14308,state_val_14339,c__12947__auto___14360,out){
return (function (p1__14304_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__14304_SHARP_);
});
;})(cs,vec__14313,v,c,inst_14319,inst_14317,inst_14318,inst_14308,state_val_14339,c__12947__auto___14360,out))
})();
var inst_14323 = cljs.core.filterv.call(null,inst_14322,inst_14308);
var inst_14308__$1 = inst_14323;
var state_14338__$1 = (function (){var statearr_14353 = state_14338;
(statearr_14353[(10)] = inst_14308__$1);

return statearr_14353;
})();
var statearr_14354_14370 = state_14338__$1;
(statearr_14354_14370[(2)] = null);

(statearr_14354_14370[(1)] = (2));


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
});})(c__12947__auto___14360,out))
;
return ((function (switch__12857__auto__,c__12947__auto___14360,out){
return (function() {
var cljs$core$async$state_machine__12858__auto__ = null;
var cljs$core$async$state_machine__12858__auto____0 = (function (){
var statearr_14355 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14355[(0)] = cljs$core$async$state_machine__12858__auto__);

(statearr_14355[(1)] = (1));

return statearr_14355;
});
var cljs$core$async$state_machine__12858__auto____1 = (function (state_14338){
while(true){
var ret_value__12859__auto__ = (function (){try{while(true){
var result__12860__auto__ = switch__12857__auto__.call(null,state_14338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12860__auto__;
}
break;
}
}catch (e14356){if((e14356 instanceof Object)){
var ex__12861__auto__ = e14356;
var statearr_14357_14371 = state_14338;
(statearr_14357_14371[(5)] = ex__12861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14372 = state_14338;
state_14338 = G__14372;
continue;
} else {
return ret_value__12859__auto__;
}
break;
}
});
cljs$core$async$state_machine__12858__auto__ = function(state_14338){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12858__auto____1.call(this,state_14338);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12858__auto____0;
cljs$core$async$state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12858__auto____1;
return cljs$core$async$state_machine__12858__auto__;
})()
;})(switch__12857__auto__,c__12947__auto___14360,out))
})();
var state__12949__auto__ = (function (){var statearr_14358 = f__12948__auto__.call(null);
(statearr_14358[(6)] = c__12947__auto___14360);

return statearr_14358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12949__auto__);
});})(c__12947__auto___14360,out))
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
var G__14374 = arguments.length;
switch (G__14374) {
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
var c__12947__auto___14419 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12947__auto___14419,out){
return (function (){
var f__12948__auto__ = (function (){var switch__12857__auto__ = ((function (c__12947__auto___14419,out){
return (function (state_14398){
var state_val_14399 = (state_14398[(1)]);
if((state_val_14399 === (7))){
var inst_14380 = (state_14398[(7)]);
var inst_14380__$1 = (state_14398[(2)]);
var inst_14381 = (inst_14380__$1 == null);
var inst_14382 = cljs.core.not.call(null,inst_14381);
var state_14398__$1 = (function (){var statearr_14400 = state_14398;
(statearr_14400[(7)] = inst_14380__$1);

return statearr_14400;
})();
if(inst_14382){
var statearr_14401_14420 = state_14398__$1;
(statearr_14401_14420[(1)] = (8));

} else {
var statearr_14402_14421 = state_14398__$1;
(statearr_14402_14421[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14399 === (1))){
var inst_14375 = (0);
var state_14398__$1 = (function (){var statearr_14403 = state_14398;
(statearr_14403[(8)] = inst_14375);

return statearr_14403;
})();
var statearr_14404_14422 = state_14398__$1;
(statearr_14404_14422[(2)] = null);

(statearr_14404_14422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14399 === (4))){
var state_14398__$1 = state_14398;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14398__$1,(7),ch);
} else {
if((state_val_14399 === (6))){
var inst_14393 = (state_14398[(2)]);
var state_14398__$1 = state_14398;
var statearr_14405_14423 = state_14398__$1;
(statearr_14405_14423[(2)] = inst_14393);

(statearr_14405_14423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14399 === (3))){
var inst_14395 = (state_14398[(2)]);
var inst_14396 = cljs.core.async.close_BANG_.call(null,out);
var state_14398__$1 = (function (){var statearr_14406 = state_14398;
(statearr_14406[(9)] = inst_14395);

return statearr_14406;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14398__$1,inst_14396);
} else {
if((state_val_14399 === (2))){
var inst_14375 = (state_14398[(8)]);
var inst_14377 = (inst_14375 < n);
var state_14398__$1 = state_14398;
if(cljs.core.truth_(inst_14377)){
var statearr_14407_14424 = state_14398__$1;
(statearr_14407_14424[(1)] = (4));

} else {
var statearr_14408_14425 = state_14398__$1;
(statearr_14408_14425[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14399 === (11))){
var inst_14375 = (state_14398[(8)]);
var inst_14385 = (state_14398[(2)]);
var inst_14386 = (inst_14375 + (1));
var inst_14375__$1 = inst_14386;
var state_14398__$1 = (function (){var statearr_14409 = state_14398;
(statearr_14409[(10)] = inst_14385);

(statearr_14409[(8)] = inst_14375__$1);

return statearr_14409;
})();
var statearr_14410_14426 = state_14398__$1;
(statearr_14410_14426[(2)] = null);

(statearr_14410_14426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14399 === (9))){
var state_14398__$1 = state_14398;
var statearr_14411_14427 = state_14398__$1;
(statearr_14411_14427[(2)] = null);

(statearr_14411_14427[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14399 === (5))){
var state_14398__$1 = state_14398;
var statearr_14412_14428 = state_14398__$1;
(statearr_14412_14428[(2)] = null);

(statearr_14412_14428[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14399 === (10))){
var inst_14390 = (state_14398[(2)]);
var state_14398__$1 = state_14398;
var statearr_14413_14429 = state_14398__$1;
(statearr_14413_14429[(2)] = inst_14390);

(statearr_14413_14429[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14399 === (8))){
var inst_14380 = (state_14398[(7)]);
var state_14398__$1 = state_14398;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14398__$1,(11),out,inst_14380);
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
});})(c__12947__auto___14419,out))
;
return ((function (switch__12857__auto__,c__12947__auto___14419,out){
return (function() {
var cljs$core$async$state_machine__12858__auto__ = null;
var cljs$core$async$state_machine__12858__auto____0 = (function (){
var statearr_14414 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14414[(0)] = cljs$core$async$state_machine__12858__auto__);

(statearr_14414[(1)] = (1));

return statearr_14414;
});
var cljs$core$async$state_machine__12858__auto____1 = (function (state_14398){
while(true){
var ret_value__12859__auto__ = (function (){try{while(true){
var result__12860__auto__ = switch__12857__auto__.call(null,state_14398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12860__auto__;
}
break;
}
}catch (e14415){if((e14415 instanceof Object)){
var ex__12861__auto__ = e14415;
var statearr_14416_14430 = state_14398;
(statearr_14416_14430[(5)] = ex__12861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14415;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14431 = state_14398;
state_14398 = G__14431;
continue;
} else {
return ret_value__12859__auto__;
}
break;
}
});
cljs$core$async$state_machine__12858__auto__ = function(state_14398){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12858__auto____1.call(this,state_14398);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12858__auto____0;
cljs$core$async$state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12858__auto____1;
return cljs$core$async$state_machine__12858__auto__;
})()
;})(switch__12857__auto__,c__12947__auto___14419,out))
})();
var state__12949__auto__ = (function (){var statearr_14417 = f__12948__auto__.call(null);
(statearr_14417[(6)] = c__12947__auto___14419);

return statearr_14417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12949__auto__);
});})(c__12947__auto___14419,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async14433 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14433 = (function (f,ch,meta14434){
this.f = f;
this.ch = ch;
this.meta14434 = meta14434;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14435,meta14434__$1){
var self__ = this;
var _14435__$1 = this;
return (new cljs.core.async.t_cljs$core$async14433(self__.f,self__.ch,meta14434__$1));
});

cljs.core.async.t_cljs$core$async14433.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14435){
var self__ = this;
var _14435__$1 = this;
return self__.meta14434;
});

cljs.core.async.t_cljs$core$async14433.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14433.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14433.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14433.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14433.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async14436 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14436 = (function (f,ch,meta14434,_,fn1,meta14437){
this.f = f;
this.ch = ch;
this.meta14434 = meta14434;
this._ = _;
this.fn1 = fn1;
this.meta14437 = meta14437;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14438,meta14437__$1){
var self__ = this;
var _14438__$1 = this;
return (new cljs.core.async.t_cljs$core$async14436(self__.f,self__.ch,self__.meta14434,self__._,self__.fn1,meta14437__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async14436.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14438){
var self__ = this;
var _14438__$1 = this;
return self__.meta14437;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14436.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14436.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14436.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14436.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__14432_SHARP_){
return f1.call(null,(((p1__14432_SHARP_ == null))?null:self__.f.call(null,p1__14432_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async14436.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14434","meta14434",357954804,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async14433","cljs.core.async/t_cljs$core$async14433",-525558817,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta14437","meta14437",-1627874931,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14436.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14436.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14436";

cljs.core.async.t_cljs$core$async14436.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__9030__auto__,writer__9031__auto__,opt__9032__auto__){
return cljs.core._write.call(null,writer__9031__auto__,"cljs.core.async/t_cljs$core$async14436");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async14436 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14436(f__$1,ch__$1,meta14434__$1,___$2,fn1__$1,meta14437){
return (new cljs.core.async.t_cljs$core$async14436(f__$1,ch__$1,meta14434__$1,___$2,fn1__$1,meta14437));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async14436(self__.f,self__.ch,self__.meta14434,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__8347__auto__ = ret;
if(cljs.core.truth_(and__8347__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__8347__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async14433.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14433.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async14433.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14434","meta14434",357954804,null)], null);
});

cljs.core.async.t_cljs$core$async14433.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14433.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14433";

cljs.core.async.t_cljs$core$async14433.cljs$lang$ctorPrWriter = (function (this__9030__auto__,writer__9031__auto__,opt__9032__auto__){
return cljs.core._write.call(null,writer__9031__auto__,"cljs.core.async/t_cljs$core$async14433");
});

cljs.core.async.__GT_t_cljs$core$async14433 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14433(f__$1,ch__$1,meta14434){
return (new cljs.core.async.t_cljs$core$async14433(f__$1,ch__$1,meta14434));
});

}

return (new cljs.core.async.t_cljs$core$async14433(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async14439 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14439 = (function (f,ch,meta14440){
this.f = f;
this.ch = ch;
this.meta14440 = meta14440;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14441,meta14440__$1){
var self__ = this;
var _14441__$1 = this;
return (new cljs.core.async.t_cljs$core$async14439(self__.f,self__.ch,meta14440__$1));
});

cljs.core.async.t_cljs$core$async14439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14441){
var self__ = this;
var _14441__$1 = this;
return self__.meta14440;
});

cljs.core.async.t_cljs$core$async14439.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14439.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14439.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14439.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14439.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14439.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async14439.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14440","meta14440",1090302689,null)], null);
});

cljs.core.async.t_cljs$core$async14439.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14439.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14439";

cljs.core.async.t_cljs$core$async14439.cljs$lang$ctorPrWriter = (function (this__9030__auto__,writer__9031__auto__,opt__9032__auto__){
return cljs.core._write.call(null,writer__9031__auto__,"cljs.core.async/t_cljs$core$async14439");
});

cljs.core.async.__GT_t_cljs$core$async14439 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async14439(f__$1,ch__$1,meta14440){
return (new cljs.core.async.t_cljs$core$async14439(f__$1,ch__$1,meta14440));
});

}

return (new cljs.core.async.t_cljs$core$async14439(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async14442 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14442 = (function (p,ch,meta14443){
this.p = p;
this.ch = ch;
this.meta14443 = meta14443;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14442.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14444,meta14443__$1){
var self__ = this;
var _14444__$1 = this;
return (new cljs.core.async.t_cljs$core$async14442(self__.p,self__.ch,meta14443__$1));
});

cljs.core.async.t_cljs$core$async14442.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14444){
var self__ = this;
var _14444__$1 = this;
return self__.meta14443;
});

cljs.core.async.t_cljs$core$async14442.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14442.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14442.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14442.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14442.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14442.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14442.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async14442.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14443","meta14443",1719367559,null)], null);
});

cljs.core.async.t_cljs$core$async14442.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14442.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14442";

cljs.core.async.t_cljs$core$async14442.cljs$lang$ctorPrWriter = (function (this__9030__auto__,writer__9031__auto__,opt__9032__auto__){
return cljs.core._write.call(null,writer__9031__auto__,"cljs.core.async/t_cljs$core$async14442");
});

cljs.core.async.__GT_t_cljs$core$async14442 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async14442(p__$1,ch__$1,meta14443){
return (new cljs.core.async.t_cljs$core$async14442(p__$1,ch__$1,meta14443));
});

}

return (new cljs.core.async.t_cljs$core$async14442(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__14446 = arguments.length;
switch (G__14446) {
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
var c__12947__auto___14486 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12947__auto___14486,out){
return (function (){
var f__12948__auto__ = (function (){var switch__12857__auto__ = ((function (c__12947__auto___14486,out){
return (function (state_14467){
var state_val_14468 = (state_14467[(1)]);
if((state_val_14468 === (7))){
var inst_14463 = (state_14467[(2)]);
var state_14467__$1 = state_14467;
var statearr_14469_14487 = state_14467__$1;
(statearr_14469_14487[(2)] = inst_14463);

(statearr_14469_14487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (1))){
var state_14467__$1 = state_14467;
var statearr_14470_14488 = state_14467__$1;
(statearr_14470_14488[(2)] = null);

(statearr_14470_14488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (4))){
var inst_14449 = (state_14467[(7)]);
var inst_14449__$1 = (state_14467[(2)]);
var inst_14450 = (inst_14449__$1 == null);
var state_14467__$1 = (function (){var statearr_14471 = state_14467;
(statearr_14471[(7)] = inst_14449__$1);

return statearr_14471;
})();
if(cljs.core.truth_(inst_14450)){
var statearr_14472_14489 = state_14467__$1;
(statearr_14472_14489[(1)] = (5));

} else {
var statearr_14473_14490 = state_14467__$1;
(statearr_14473_14490[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (6))){
var inst_14449 = (state_14467[(7)]);
var inst_14454 = p.call(null,inst_14449);
var state_14467__$1 = state_14467;
if(cljs.core.truth_(inst_14454)){
var statearr_14474_14491 = state_14467__$1;
(statearr_14474_14491[(1)] = (8));

} else {
var statearr_14475_14492 = state_14467__$1;
(statearr_14475_14492[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (3))){
var inst_14465 = (state_14467[(2)]);
var state_14467__$1 = state_14467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14467__$1,inst_14465);
} else {
if((state_val_14468 === (2))){
var state_14467__$1 = state_14467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14467__$1,(4),ch);
} else {
if((state_val_14468 === (11))){
var inst_14457 = (state_14467[(2)]);
var state_14467__$1 = state_14467;
var statearr_14476_14493 = state_14467__$1;
(statearr_14476_14493[(2)] = inst_14457);

(statearr_14476_14493[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (9))){
var state_14467__$1 = state_14467;
var statearr_14477_14494 = state_14467__$1;
(statearr_14477_14494[(2)] = null);

(statearr_14477_14494[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (5))){
var inst_14452 = cljs.core.async.close_BANG_.call(null,out);
var state_14467__$1 = state_14467;
var statearr_14478_14495 = state_14467__$1;
(statearr_14478_14495[(2)] = inst_14452);

(statearr_14478_14495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (10))){
var inst_14460 = (state_14467[(2)]);
var state_14467__$1 = (function (){var statearr_14479 = state_14467;
(statearr_14479[(8)] = inst_14460);

return statearr_14479;
})();
var statearr_14480_14496 = state_14467__$1;
(statearr_14480_14496[(2)] = null);

(statearr_14480_14496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14468 === (8))){
var inst_14449 = (state_14467[(7)]);
var state_14467__$1 = state_14467;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14467__$1,(11),out,inst_14449);
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
});})(c__12947__auto___14486,out))
;
return ((function (switch__12857__auto__,c__12947__auto___14486,out){
return (function() {
var cljs$core$async$state_machine__12858__auto__ = null;
var cljs$core$async$state_machine__12858__auto____0 = (function (){
var statearr_14481 = [null,null,null,null,null,null,null,null,null];
(statearr_14481[(0)] = cljs$core$async$state_machine__12858__auto__);

(statearr_14481[(1)] = (1));

return statearr_14481;
});
var cljs$core$async$state_machine__12858__auto____1 = (function (state_14467){
while(true){
var ret_value__12859__auto__ = (function (){try{while(true){
var result__12860__auto__ = switch__12857__auto__.call(null,state_14467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12860__auto__;
}
break;
}
}catch (e14482){if((e14482 instanceof Object)){
var ex__12861__auto__ = e14482;
var statearr_14483_14497 = state_14467;
(statearr_14483_14497[(5)] = ex__12861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14482;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14498 = state_14467;
state_14467 = G__14498;
continue;
} else {
return ret_value__12859__auto__;
}
break;
}
});
cljs$core$async$state_machine__12858__auto__ = function(state_14467){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12858__auto____1.call(this,state_14467);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12858__auto____0;
cljs$core$async$state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12858__auto____1;
return cljs$core$async$state_machine__12858__auto__;
})()
;})(switch__12857__auto__,c__12947__auto___14486,out))
})();
var state__12949__auto__ = (function (){var statearr_14484 = f__12948__auto__.call(null);
(statearr_14484[(6)] = c__12947__auto___14486);

return statearr_14484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12949__auto__);
});})(c__12947__auto___14486,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__14500 = arguments.length;
switch (G__14500) {
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
var c__12947__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12947__auto__){
return (function (){
var f__12948__auto__ = (function (){var switch__12857__auto__ = ((function (c__12947__auto__){
return (function (state_14563){
var state_val_14564 = (state_14563[(1)]);
if((state_val_14564 === (7))){
var inst_14559 = (state_14563[(2)]);
var state_14563__$1 = state_14563;
var statearr_14565_14603 = state_14563__$1;
(statearr_14565_14603[(2)] = inst_14559);

(statearr_14565_14603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14564 === (20))){
var inst_14529 = (state_14563[(7)]);
var inst_14540 = (state_14563[(2)]);
var inst_14541 = cljs.core.next.call(null,inst_14529);
var inst_14515 = inst_14541;
var inst_14516 = null;
var inst_14517 = (0);
var inst_14518 = (0);
var state_14563__$1 = (function (){var statearr_14566 = state_14563;
(statearr_14566[(8)] = inst_14518);

(statearr_14566[(9)] = inst_14540);

(statearr_14566[(10)] = inst_14516);

(statearr_14566[(11)] = inst_14515);

(statearr_14566[(12)] = inst_14517);

return statearr_14566;
})();
var statearr_14567_14604 = state_14563__$1;
(statearr_14567_14604[(2)] = null);

(statearr_14567_14604[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14564 === (1))){
var state_14563__$1 = state_14563;
var statearr_14568_14605 = state_14563__$1;
(statearr_14568_14605[(2)] = null);

(statearr_14568_14605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14564 === (4))){
var inst_14504 = (state_14563[(13)]);
var inst_14504__$1 = (state_14563[(2)]);
var inst_14505 = (inst_14504__$1 == null);
var state_14563__$1 = (function (){var statearr_14569 = state_14563;
(statearr_14569[(13)] = inst_14504__$1);

return statearr_14569;
})();
if(cljs.core.truth_(inst_14505)){
var statearr_14570_14606 = state_14563__$1;
(statearr_14570_14606[(1)] = (5));

} else {
var statearr_14571_14607 = state_14563__$1;
(statearr_14571_14607[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14564 === (15))){
var state_14563__$1 = state_14563;
var statearr_14575_14608 = state_14563__$1;
(statearr_14575_14608[(2)] = null);

(statearr_14575_14608[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14564 === (21))){
var state_14563__$1 = state_14563;
var statearr_14576_14609 = state_14563__$1;
(statearr_14576_14609[(2)] = null);

(statearr_14576_14609[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14564 === (13))){
var inst_14518 = (state_14563[(8)]);
var inst_14516 = (state_14563[(10)]);
var inst_14515 = (state_14563[(11)]);
var inst_14517 = (state_14563[(12)]);
var inst_14525 = (state_14563[(2)]);
var inst_14526 = (inst_14518 + (1));
var tmp14572 = inst_14516;
var tmp14573 = inst_14515;
var tmp14574 = inst_14517;
var inst_14515__$1 = tmp14573;
var inst_14516__$1 = tmp14572;
var inst_14517__$1 = tmp14574;
var inst_14518__$1 = inst_14526;
var state_14563__$1 = (function (){var statearr_14577 = state_14563;
(statearr_14577[(8)] = inst_14518__$1);

(statearr_14577[(14)] = inst_14525);

(statearr_14577[(10)] = inst_14516__$1);

(statearr_14577[(11)] = inst_14515__$1);

(statearr_14577[(12)] = inst_14517__$1);

return statearr_14577;
})();
var statearr_14578_14610 = state_14563__$1;
(statearr_14578_14610[(2)] = null);

(statearr_14578_14610[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14564 === (22))){
var state_14563__$1 = state_14563;
var statearr_14579_14611 = state_14563__$1;
(statearr_14579_14611[(2)] = null);

(statearr_14579_14611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14564 === (6))){
var inst_14504 = (state_14563[(13)]);
var inst_14513 = f.call(null,inst_14504);
var inst_14514 = cljs.core.seq.call(null,inst_14513);
var inst_14515 = inst_14514;
var inst_14516 = null;
var inst_14517 = (0);
var inst_14518 = (0);
var state_14563__$1 = (function (){var statearr_14580 = state_14563;
(statearr_14580[(8)] = inst_14518);

(statearr_14580[(10)] = inst_14516);

(statearr_14580[(11)] = inst_14515);

(statearr_14580[(12)] = inst_14517);

return statearr_14580;
})();
var statearr_14581_14612 = state_14563__$1;
(statearr_14581_14612[(2)] = null);

(statearr_14581_14612[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14564 === (17))){
var inst_14529 = (state_14563[(7)]);
var inst_14533 = cljs.core.chunk_first.call(null,inst_14529);
var inst_14534 = cljs.core.chunk_rest.call(null,inst_14529);
var inst_14535 = cljs.core.count.call(null,inst_14533);
var inst_14515 = inst_14534;
var inst_14516 = inst_14533;
var inst_14517 = inst_14535;
var inst_14518 = (0);
var state_14563__$1 = (function (){var statearr_14582 = state_14563;
(statearr_14582[(8)] = inst_14518);

(statearr_14582[(10)] = inst_14516);

(statearr_14582[(11)] = inst_14515);

(statearr_14582[(12)] = inst_14517);

return statearr_14582;
})();
var statearr_14583_14613 = state_14563__$1;
(statearr_14583_14613[(2)] = null);

(statearr_14583_14613[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14564 === (3))){
var inst_14561 = (state_14563[(2)]);
var state_14563__$1 = state_14563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14563__$1,inst_14561);
} else {
if((state_val_14564 === (12))){
var inst_14549 = (state_14563[(2)]);
var state_14563__$1 = state_14563;
var statearr_14584_14614 = state_14563__$1;
(statearr_14584_14614[(2)] = inst_14549);

(statearr_14584_14614[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14564 === (2))){
var state_14563__$1 = state_14563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14563__$1,(4),in$);
} else {
if((state_val_14564 === (23))){
var inst_14557 = (state_14563[(2)]);
var state_14563__$1 = state_14563;
var statearr_14585_14615 = state_14563__$1;
(statearr_14585_14615[(2)] = inst_14557);

(statearr_14585_14615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14564 === (19))){
var inst_14544 = (state_14563[(2)]);
var state_14563__$1 = state_14563;
var statearr_14586_14616 = state_14563__$1;
(statearr_14586_14616[(2)] = inst_14544);

(statearr_14586_14616[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14564 === (11))){
var inst_14529 = (state_14563[(7)]);
var inst_14515 = (state_14563[(11)]);
var inst_14529__$1 = cljs.core.seq.call(null,inst_14515);
var state_14563__$1 = (function (){var statearr_14587 = state_14563;
(statearr_14587[(7)] = inst_14529__$1);

return statearr_14587;
})();
if(inst_14529__$1){
var statearr_14588_14617 = state_14563__$1;
(statearr_14588_14617[(1)] = (14));

} else {
var statearr_14589_14618 = state_14563__$1;
(statearr_14589_14618[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14564 === (9))){
var inst_14551 = (state_14563[(2)]);
var inst_14552 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_14563__$1 = (function (){var statearr_14590 = state_14563;
(statearr_14590[(15)] = inst_14551);

return statearr_14590;
})();
if(cljs.core.truth_(inst_14552)){
var statearr_14591_14619 = state_14563__$1;
(statearr_14591_14619[(1)] = (21));

} else {
var statearr_14592_14620 = state_14563__$1;
(statearr_14592_14620[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14564 === (5))){
var inst_14507 = cljs.core.async.close_BANG_.call(null,out);
var state_14563__$1 = state_14563;
var statearr_14593_14621 = state_14563__$1;
(statearr_14593_14621[(2)] = inst_14507);

(statearr_14593_14621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14564 === (14))){
var inst_14529 = (state_14563[(7)]);
var inst_14531 = cljs.core.chunked_seq_QMARK_.call(null,inst_14529);
var state_14563__$1 = state_14563;
if(inst_14531){
var statearr_14594_14622 = state_14563__$1;
(statearr_14594_14622[(1)] = (17));

} else {
var statearr_14595_14623 = state_14563__$1;
(statearr_14595_14623[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14564 === (16))){
var inst_14547 = (state_14563[(2)]);
var state_14563__$1 = state_14563;
var statearr_14596_14624 = state_14563__$1;
(statearr_14596_14624[(2)] = inst_14547);

(statearr_14596_14624[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14564 === (10))){
var inst_14518 = (state_14563[(8)]);
var inst_14516 = (state_14563[(10)]);
var inst_14523 = cljs.core._nth.call(null,inst_14516,inst_14518);
var state_14563__$1 = state_14563;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14563__$1,(13),out,inst_14523);
} else {
if((state_val_14564 === (18))){
var inst_14529 = (state_14563[(7)]);
var inst_14538 = cljs.core.first.call(null,inst_14529);
var state_14563__$1 = state_14563;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14563__$1,(20),out,inst_14538);
} else {
if((state_val_14564 === (8))){
var inst_14518 = (state_14563[(8)]);
var inst_14517 = (state_14563[(12)]);
var inst_14520 = (inst_14518 < inst_14517);
var inst_14521 = inst_14520;
var state_14563__$1 = state_14563;
if(cljs.core.truth_(inst_14521)){
var statearr_14597_14625 = state_14563__$1;
(statearr_14597_14625[(1)] = (10));

} else {
var statearr_14598_14626 = state_14563__$1;
(statearr_14598_14626[(1)] = (11));

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
});})(c__12947__auto__))
;
return ((function (switch__12857__auto__,c__12947__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__12858__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__12858__auto____0 = (function (){
var statearr_14599 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14599[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__12858__auto__);

(statearr_14599[(1)] = (1));

return statearr_14599;
});
var cljs$core$async$mapcat_STAR__$_state_machine__12858__auto____1 = (function (state_14563){
while(true){
var ret_value__12859__auto__ = (function (){try{while(true){
var result__12860__auto__ = switch__12857__auto__.call(null,state_14563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12860__auto__;
}
break;
}
}catch (e14600){if((e14600 instanceof Object)){
var ex__12861__auto__ = e14600;
var statearr_14601_14627 = state_14563;
(statearr_14601_14627[(5)] = ex__12861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14600;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14628 = state_14563;
state_14563 = G__14628;
continue;
} else {
return ret_value__12859__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__12858__auto__ = function(state_14563){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__12858__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__12858__auto____1.call(this,state_14563);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__12858__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__12858__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__12858__auto__;
})()
;})(switch__12857__auto__,c__12947__auto__))
})();
var state__12949__auto__ = (function (){var statearr_14602 = f__12948__auto__.call(null);
(statearr_14602[(6)] = c__12947__auto__);

return statearr_14602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12949__auto__);
});})(c__12947__auto__))
);

return c__12947__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__14630 = arguments.length;
switch (G__14630) {
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
var G__14633 = arguments.length;
switch (G__14633) {
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
var G__14636 = arguments.length;
switch (G__14636) {
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
var c__12947__auto___14683 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12947__auto___14683,out){
return (function (){
var f__12948__auto__ = (function (){var switch__12857__auto__ = ((function (c__12947__auto___14683,out){
return (function (state_14660){
var state_val_14661 = (state_14660[(1)]);
if((state_val_14661 === (7))){
var inst_14655 = (state_14660[(2)]);
var state_14660__$1 = state_14660;
var statearr_14662_14684 = state_14660__$1;
(statearr_14662_14684[(2)] = inst_14655);

(statearr_14662_14684[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14661 === (1))){
var inst_14637 = null;
var state_14660__$1 = (function (){var statearr_14663 = state_14660;
(statearr_14663[(7)] = inst_14637);

return statearr_14663;
})();
var statearr_14664_14685 = state_14660__$1;
(statearr_14664_14685[(2)] = null);

(statearr_14664_14685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14661 === (4))){
var inst_14640 = (state_14660[(8)]);
var inst_14640__$1 = (state_14660[(2)]);
var inst_14641 = (inst_14640__$1 == null);
var inst_14642 = cljs.core.not.call(null,inst_14641);
var state_14660__$1 = (function (){var statearr_14665 = state_14660;
(statearr_14665[(8)] = inst_14640__$1);

return statearr_14665;
})();
if(inst_14642){
var statearr_14666_14686 = state_14660__$1;
(statearr_14666_14686[(1)] = (5));

} else {
var statearr_14667_14687 = state_14660__$1;
(statearr_14667_14687[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14661 === (6))){
var state_14660__$1 = state_14660;
var statearr_14668_14688 = state_14660__$1;
(statearr_14668_14688[(2)] = null);

(statearr_14668_14688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14661 === (3))){
var inst_14657 = (state_14660[(2)]);
var inst_14658 = cljs.core.async.close_BANG_.call(null,out);
var state_14660__$1 = (function (){var statearr_14669 = state_14660;
(statearr_14669[(9)] = inst_14657);

return statearr_14669;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14660__$1,inst_14658);
} else {
if((state_val_14661 === (2))){
var state_14660__$1 = state_14660;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14660__$1,(4),ch);
} else {
if((state_val_14661 === (11))){
var inst_14640 = (state_14660[(8)]);
var inst_14649 = (state_14660[(2)]);
var inst_14637 = inst_14640;
var state_14660__$1 = (function (){var statearr_14670 = state_14660;
(statearr_14670[(10)] = inst_14649);

(statearr_14670[(7)] = inst_14637);

return statearr_14670;
})();
var statearr_14671_14689 = state_14660__$1;
(statearr_14671_14689[(2)] = null);

(statearr_14671_14689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14661 === (9))){
var inst_14640 = (state_14660[(8)]);
var state_14660__$1 = state_14660;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14660__$1,(11),out,inst_14640);
} else {
if((state_val_14661 === (5))){
var inst_14637 = (state_14660[(7)]);
var inst_14640 = (state_14660[(8)]);
var inst_14644 = cljs.core._EQ_.call(null,inst_14640,inst_14637);
var state_14660__$1 = state_14660;
if(inst_14644){
var statearr_14673_14690 = state_14660__$1;
(statearr_14673_14690[(1)] = (8));

} else {
var statearr_14674_14691 = state_14660__$1;
(statearr_14674_14691[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14661 === (10))){
var inst_14652 = (state_14660[(2)]);
var state_14660__$1 = state_14660;
var statearr_14675_14692 = state_14660__$1;
(statearr_14675_14692[(2)] = inst_14652);

(statearr_14675_14692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14661 === (8))){
var inst_14637 = (state_14660[(7)]);
var tmp14672 = inst_14637;
var inst_14637__$1 = tmp14672;
var state_14660__$1 = (function (){var statearr_14676 = state_14660;
(statearr_14676[(7)] = inst_14637__$1);

return statearr_14676;
})();
var statearr_14677_14693 = state_14660__$1;
(statearr_14677_14693[(2)] = null);

(statearr_14677_14693[(1)] = (2));


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
});})(c__12947__auto___14683,out))
;
return ((function (switch__12857__auto__,c__12947__auto___14683,out){
return (function() {
var cljs$core$async$state_machine__12858__auto__ = null;
var cljs$core$async$state_machine__12858__auto____0 = (function (){
var statearr_14678 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14678[(0)] = cljs$core$async$state_machine__12858__auto__);

(statearr_14678[(1)] = (1));

return statearr_14678;
});
var cljs$core$async$state_machine__12858__auto____1 = (function (state_14660){
while(true){
var ret_value__12859__auto__ = (function (){try{while(true){
var result__12860__auto__ = switch__12857__auto__.call(null,state_14660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12860__auto__;
}
break;
}
}catch (e14679){if((e14679 instanceof Object)){
var ex__12861__auto__ = e14679;
var statearr_14680_14694 = state_14660;
(statearr_14680_14694[(5)] = ex__12861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14679;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14695 = state_14660;
state_14660 = G__14695;
continue;
} else {
return ret_value__12859__auto__;
}
break;
}
});
cljs$core$async$state_machine__12858__auto__ = function(state_14660){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12858__auto____1.call(this,state_14660);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12858__auto____0;
cljs$core$async$state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12858__auto____1;
return cljs$core$async$state_machine__12858__auto__;
})()
;})(switch__12857__auto__,c__12947__auto___14683,out))
})();
var state__12949__auto__ = (function (){var statearr_14681 = f__12948__auto__.call(null);
(statearr_14681[(6)] = c__12947__auto___14683);

return statearr_14681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12949__auto__);
});})(c__12947__auto___14683,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__14697 = arguments.length;
switch (G__14697) {
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
var c__12947__auto___14763 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12947__auto___14763,out){
return (function (){
var f__12948__auto__ = (function (){var switch__12857__auto__ = ((function (c__12947__auto___14763,out){
return (function (state_14735){
var state_val_14736 = (state_14735[(1)]);
if((state_val_14736 === (7))){
var inst_14731 = (state_14735[(2)]);
var state_14735__$1 = state_14735;
var statearr_14737_14764 = state_14735__$1;
(statearr_14737_14764[(2)] = inst_14731);

(statearr_14737_14764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14736 === (1))){
var inst_14698 = (new Array(n));
var inst_14699 = inst_14698;
var inst_14700 = (0);
var state_14735__$1 = (function (){var statearr_14738 = state_14735;
(statearr_14738[(7)] = inst_14699);

(statearr_14738[(8)] = inst_14700);

return statearr_14738;
})();
var statearr_14739_14765 = state_14735__$1;
(statearr_14739_14765[(2)] = null);

(statearr_14739_14765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14736 === (4))){
var inst_14703 = (state_14735[(9)]);
var inst_14703__$1 = (state_14735[(2)]);
var inst_14704 = (inst_14703__$1 == null);
var inst_14705 = cljs.core.not.call(null,inst_14704);
var state_14735__$1 = (function (){var statearr_14740 = state_14735;
(statearr_14740[(9)] = inst_14703__$1);

return statearr_14740;
})();
if(inst_14705){
var statearr_14741_14766 = state_14735__$1;
(statearr_14741_14766[(1)] = (5));

} else {
var statearr_14742_14767 = state_14735__$1;
(statearr_14742_14767[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14736 === (15))){
var inst_14725 = (state_14735[(2)]);
var state_14735__$1 = state_14735;
var statearr_14743_14768 = state_14735__$1;
(statearr_14743_14768[(2)] = inst_14725);

(statearr_14743_14768[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14736 === (13))){
var state_14735__$1 = state_14735;
var statearr_14744_14769 = state_14735__$1;
(statearr_14744_14769[(2)] = null);

(statearr_14744_14769[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14736 === (6))){
var inst_14700 = (state_14735[(8)]);
var inst_14721 = (inst_14700 > (0));
var state_14735__$1 = state_14735;
if(cljs.core.truth_(inst_14721)){
var statearr_14745_14770 = state_14735__$1;
(statearr_14745_14770[(1)] = (12));

} else {
var statearr_14746_14771 = state_14735__$1;
(statearr_14746_14771[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14736 === (3))){
var inst_14733 = (state_14735[(2)]);
var state_14735__$1 = state_14735;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14735__$1,inst_14733);
} else {
if((state_val_14736 === (12))){
var inst_14699 = (state_14735[(7)]);
var inst_14723 = cljs.core.vec.call(null,inst_14699);
var state_14735__$1 = state_14735;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14735__$1,(15),out,inst_14723);
} else {
if((state_val_14736 === (2))){
var state_14735__$1 = state_14735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14735__$1,(4),ch);
} else {
if((state_val_14736 === (11))){
var inst_14715 = (state_14735[(2)]);
var inst_14716 = (new Array(n));
var inst_14699 = inst_14716;
var inst_14700 = (0);
var state_14735__$1 = (function (){var statearr_14747 = state_14735;
(statearr_14747[(7)] = inst_14699);

(statearr_14747[(8)] = inst_14700);

(statearr_14747[(10)] = inst_14715);

return statearr_14747;
})();
var statearr_14748_14772 = state_14735__$1;
(statearr_14748_14772[(2)] = null);

(statearr_14748_14772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14736 === (9))){
var inst_14699 = (state_14735[(7)]);
var inst_14713 = cljs.core.vec.call(null,inst_14699);
var state_14735__$1 = state_14735;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14735__$1,(11),out,inst_14713);
} else {
if((state_val_14736 === (5))){
var inst_14699 = (state_14735[(7)]);
var inst_14703 = (state_14735[(9)]);
var inst_14700 = (state_14735[(8)]);
var inst_14708 = (state_14735[(11)]);
var inst_14707 = (inst_14699[inst_14700] = inst_14703);
var inst_14708__$1 = (inst_14700 + (1));
var inst_14709 = (inst_14708__$1 < n);
var state_14735__$1 = (function (){var statearr_14749 = state_14735;
(statearr_14749[(12)] = inst_14707);

(statearr_14749[(11)] = inst_14708__$1);

return statearr_14749;
})();
if(cljs.core.truth_(inst_14709)){
var statearr_14750_14773 = state_14735__$1;
(statearr_14750_14773[(1)] = (8));

} else {
var statearr_14751_14774 = state_14735__$1;
(statearr_14751_14774[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14736 === (14))){
var inst_14728 = (state_14735[(2)]);
var inst_14729 = cljs.core.async.close_BANG_.call(null,out);
var state_14735__$1 = (function (){var statearr_14753 = state_14735;
(statearr_14753[(13)] = inst_14728);

return statearr_14753;
})();
var statearr_14754_14775 = state_14735__$1;
(statearr_14754_14775[(2)] = inst_14729);

(statearr_14754_14775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14736 === (10))){
var inst_14719 = (state_14735[(2)]);
var state_14735__$1 = state_14735;
var statearr_14755_14776 = state_14735__$1;
(statearr_14755_14776[(2)] = inst_14719);

(statearr_14755_14776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14736 === (8))){
var inst_14699 = (state_14735[(7)]);
var inst_14708 = (state_14735[(11)]);
var tmp14752 = inst_14699;
var inst_14699__$1 = tmp14752;
var inst_14700 = inst_14708;
var state_14735__$1 = (function (){var statearr_14756 = state_14735;
(statearr_14756[(7)] = inst_14699__$1);

(statearr_14756[(8)] = inst_14700);

return statearr_14756;
})();
var statearr_14757_14777 = state_14735__$1;
(statearr_14757_14777[(2)] = null);

(statearr_14757_14777[(1)] = (2));


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
});})(c__12947__auto___14763,out))
;
return ((function (switch__12857__auto__,c__12947__auto___14763,out){
return (function() {
var cljs$core$async$state_machine__12858__auto__ = null;
var cljs$core$async$state_machine__12858__auto____0 = (function (){
var statearr_14758 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14758[(0)] = cljs$core$async$state_machine__12858__auto__);

(statearr_14758[(1)] = (1));

return statearr_14758;
});
var cljs$core$async$state_machine__12858__auto____1 = (function (state_14735){
while(true){
var ret_value__12859__auto__ = (function (){try{while(true){
var result__12860__auto__ = switch__12857__auto__.call(null,state_14735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12860__auto__;
}
break;
}
}catch (e14759){if((e14759 instanceof Object)){
var ex__12861__auto__ = e14759;
var statearr_14760_14778 = state_14735;
(statearr_14760_14778[(5)] = ex__12861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14779 = state_14735;
state_14735 = G__14779;
continue;
} else {
return ret_value__12859__auto__;
}
break;
}
});
cljs$core$async$state_machine__12858__auto__ = function(state_14735){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12858__auto____1.call(this,state_14735);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12858__auto____0;
cljs$core$async$state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12858__auto____1;
return cljs$core$async$state_machine__12858__auto__;
})()
;})(switch__12857__auto__,c__12947__auto___14763,out))
})();
var state__12949__auto__ = (function (){var statearr_14761 = f__12948__auto__.call(null);
(statearr_14761[(6)] = c__12947__auto___14763);

return statearr_14761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12949__auto__);
});})(c__12947__auto___14763,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__14781 = arguments.length;
switch (G__14781) {
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
var c__12947__auto___14851 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12947__auto___14851,out){
return (function (){
var f__12948__auto__ = (function (){var switch__12857__auto__ = ((function (c__12947__auto___14851,out){
return (function (state_14823){
var state_val_14824 = (state_14823[(1)]);
if((state_val_14824 === (7))){
var inst_14819 = (state_14823[(2)]);
var state_14823__$1 = state_14823;
var statearr_14825_14852 = state_14823__$1;
(statearr_14825_14852[(2)] = inst_14819);

(statearr_14825_14852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14824 === (1))){
var inst_14782 = [];
var inst_14783 = inst_14782;
var inst_14784 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_14823__$1 = (function (){var statearr_14826 = state_14823;
(statearr_14826[(7)] = inst_14783);

(statearr_14826[(8)] = inst_14784);

return statearr_14826;
})();
var statearr_14827_14853 = state_14823__$1;
(statearr_14827_14853[(2)] = null);

(statearr_14827_14853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14824 === (4))){
var inst_14787 = (state_14823[(9)]);
var inst_14787__$1 = (state_14823[(2)]);
var inst_14788 = (inst_14787__$1 == null);
var inst_14789 = cljs.core.not.call(null,inst_14788);
var state_14823__$1 = (function (){var statearr_14828 = state_14823;
(statearr_14828[(9)] = inst_14787__$1);

return statearr_14828;
})();
if(inst_14789){
var statearr_14829_14854 = state_14823__$1;
(statearr_14829_14854[(1)] = (5));

} else {
var statearr_14830_14855 = state_14823__$1;
(statearr_14830_14855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14824 === (15))){
var inst_14813 = (state_14823[(2)]);
var state_14823__$1 = state_14823;
var statearr_14831_14856 = state_14823__$1;
(statearr_14831_14856[(2)] = inst_14813);

(statearr_14831_14856[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14824 === (13))){
var state_14823__$1 = state_14823;
var statearr_14832_14857 = state_14823__$1;
(statearr_14832_14857[(2)] = null);

(statearr_14832_14857[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14824 === (6))){
var inst_14783 = (state_14823[(7)]);
var inst_14808 = inst_14783.length;
var inst_14809 = (inst_14808 > (0));
var state_14823__$1 = state_14823;
if(cljs.core.truth_(inst_14809)){
var statearr_14833_14858 = state_14823__$1;
(statearr_14833_14858[(1)] = (12));

} else {
var statearr_14834_14859 = state_14823__$1;
(statearr_14834_14859[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14824 === (3))){
var inst_14821 = (state_14823[(2)]);
var state_14823__$1 = state_14823;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14823__$1,inst_14821);
} else {
if((state_val_14824 === (12))){
var inst_14783 = (state_14823[(7)]);
var inst_14811 = cljs.core.vec.call(null,inst_14783);
var state_14823__$1 = state_14823;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14823__$1,(15),out,inst_14811);
} else {
if((state_val_14824 === (2))){
var state_14823__$1 = state_14823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14823__$1,(4),ch);
} else {
if((state_val_14824 === (11))){
var inst_14791 = (state_14823[(10)]);
var inst_14787 = (state_14823[(9)]);
var inst_14801 = (state_14823[(2)]);
var inst_14802 = [];
var inst_14803 = inst_14802.push(inst_14787);
var inst_14783 = inst_14802;
var inst_14784 = inst_14791;
var state_14823__$1 = (function (){var statearr_14835 = state_14823;
(statearr_14835[(7)] = inst_14783);

(statearr_14835[(11)] = inst_14801);

(statearr_14835[(12)] = inst_14803);

(statearr_14835[(8)] = inst_14784);

return statearr_14835;
})();
var statearr_14836_14860 = state_14823__$1;
(statearr_14836_14860[(2)] = null);

(statearr_14836_14860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14824 === (9))){
var inst_14783 = (state_14823[(7)]);
var inst_14799 = cljs.core.vec.call(null,inst_14783);
var state_14823__$1 = state_14823;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14823__$1,(11),out,inst_14799);
} else {
if((state_val_14824 === (5))){
var inst_14791 = (state_14823[(10)]);
var inst_14787 = (state_14823[(9)]);
var inst_14784 = (state_14823[(8)]);
var inst_14791__$1 = f.call(null,inst_14787);
var inst_14792 = cljs.core._EQ_.call(null,inst_14791__$1,inst_14784);
var inst_14793 = cljs.core.keyword_identical_QMARK_.call(null,inst_14784,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_14794 = (inst_14792) || (inst_14793);
var state_14823__$1 = (function (){var statearr_14837 = state_14823;
(statearr_14837[(10)] = inst_14791__$1);

return statearr_14837;
})();
if(cljs.core.truth_(inst_14794)){
var statearr_14838_14861 = state_14823__$1;
(statearr_14838_14861[(1)] = (8));

} else {
var statearr_14839_14862 = state_14823__$1;
(statearr_14839_14862[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14824 === (14))){
var inst_14816 = (state_14823[(2)]);
var inst_14817 = cljs.core.async.close_BANG_.call(null,out);
var state_14823__$1 = (function (){var statearr_14841 = state_14823;
(statearr_14841[(13)] = inst_14816);

return statearr_14841;
})();
var statearr_14842_14863 = state_14823__$1;
(statearr_14842_14863[(2)] = inst_14817);

(statearr_14842_14863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14824 === (10))){
var inst_14806 = (state_14823[(2)]);
var state_14823__$1 = state_14823;
var statearr_14843_14864 = state_14823__$1;
(statearr_14843_14864[(2)] = inst_14806);

(statearr_14843_14864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14824 === (8))){
var inst_14783 = (state_14823[(7)]);
var inst_14791 = (state_14823[(10)]);
var inst_14787 = (state_14823[(9)]);
var inst_14796 = inst_14783.push(inst_14787);
var tmp14840 = inst_14783;
var inst_14783__$1 = tmp14840;
var inst_14784 = inst_14791;
var state_14823__$1 = (function (){var statearr_14844 = state_14823;
(statearr_14844[(7)] = inst_14783__$1);

(statearr_14844[(14)] = inst_14796);

(statearr_14844[(8)] = inst_14784);

return statearr_14844;
})();
var statearr_14845_14865 = state_14823__$1;
(statearr_14845_14865[(2)] = null);

(statearr_14845_14865[(1)] = (2));


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
});})(c__12947__auto___14851,out))
;
return ((function (switch__12857__auto__,c__12947__auto___14851,out){
return (function() {
var cljs$core$async$state_machine__12858__auto__ = null;
var cljs$core$async$state_machine__12858__auto____0 = (function (){
var statearr_14846 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14846[(0)] = cljs$core$async$state_machine__12858__auto__);

(statearr_14846[(1)] = (1));

return statearr_14846;
});
var cljs$core$async$state_machine__12858__auto____1 = (function (state_14823){
while(true){
var ret_value__12859__auto__ = (function (){try{while(true){
var result__12860__auto__ = switch__12857__auto__.call(null,state_14823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12860__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12860__auto__;
}
break;
}
}catch (e14847){if((e14847 instanceof Object)){
var ex__12861__auto__ = e14847;
var statearr_14848_14866 = state_14823;
(statearr_14848_14866[(5)] = ex__12861__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14867 = state_14823;
state_14823 = G__14867;
continue;
} else {
return ret_value__12859__auto__;
}
break;
}
});
cljs$core$async$state_machine__12858__auto__ = function(state_14823){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12858__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12858__auto____1.call(this,state_14823);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12858__auto____0;
cljs$core$async$state_machine__12858__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12858__auto____1;
return cljs$core$async$state_machine__12858__auto__;
})()
;})(switch__12857__auto__,c__12947__auto___14851,out))
})();
var state__12949__auto__ = (function (){var statearr_14849 = f__12948__auto__.call(null);
(statearr_14849[(6)] = c__12947__auto___14851);

return statearr_14849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12949__auto__);
});})(c__12947__auto___14851,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1521112586698
