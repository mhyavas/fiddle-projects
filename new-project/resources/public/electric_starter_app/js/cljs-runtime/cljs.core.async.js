goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36508 = (function (f,blockable,meta36509){
this.f = f;
this.blockable = blockable;
this.meta36509 = meta36509;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36510,meta36509__$1){
var self__ = this;
var _36510__$1 = this;
return (new cljs.core.async.t_cljs$core$async36508(self__.f,self__.blockable,meta36509__$1));
}));

(cljs.core.async.t_cljs$core$async36508.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36510){
var self__ = this;
var _36510__$1 = this;
return self__.meta36509;
}));

(cljs.core.async.t_cljs$core$async36508.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36508.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36508.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async36508.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async36508.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta36509","meta36509",-1182308911,null)], null);
}));

(cljs.core.async.t_cljs$core$async36508.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36508.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36508");

(cljs.core.async.t_cljs$core$async36508.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"cljs.core.async/t_cljs$core$async36508");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36508.
 */
cljs.core.async.__GT_t_cljs$core$async36508 = (function cljs$core$async$__GT_t_cljs$core$async36508(f,blockable,meta36509){
return (new cljs.core.async.t_cljs$core$async36508(f,blockable,meta36509));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__36506 = arguments.length;
switch (G__36506) {
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

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async36508(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__36517 = arguments.length;
switch (G__36517) {
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

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__36527 = arguments.length;
switch (G__36527) {
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

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__36529 = arguments.length;
switch (G__36529) {
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

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_39739 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_39739) : fn1.call(null,val_39739));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_39739) : fn1.call(null,val_39739));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__36537 = arguments.length;
switch (G__36537) {
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

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5814__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5814__auto__)){
var ret = temp__5814__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5814__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5814__auto__)){
var retb = temp__5814__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5589__auto___39750 = n;
var x_39751 = (0);
while(true){
if((x_39751 < n__5589__auto___39750)){
(a[x_39751] = x_39751);

var G__39752 = (x_39751 + (1));
x_39751 = G__39752;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36540 = (function (flag,meta36541){
this.flag = flag;
this.meta36541 = meta36541;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36542,meta36541__$1){
var self__ = this;
var _36542__$1 = this;
return (new cljs.core.async.t_cljs$core$async36540(self__.flag,meta36541__$1));
}));

(cljs.core.async.t_cljs$core$async36540.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36542){
var self__ = this;
var _36542__$1 = this;
return self__.meta36541;
}));

(cljs.core.async.t_cljs$core$async36540.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36540.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async36540.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36540.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async36540.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta36541","meta36541",-606269877,null)], null);
}));

(cljs.core.async.t_cljs$core$async36540.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36540.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36540");

(cljs.core.async.t_cljs$core$async36540.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"cljs.core.async/t_cljs$core$async36540");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36540.
 */
cljs.core.async.__GT_t_cljs$core$async36540 = (function cljs$core$async$__GT_t_cljs$core$async36540(flag,meta36541){
return (new cljs.core.async.t_cljs$core$async36540(flag,meta36541));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async36540(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36554 = (function (flag,cb,meta36555){
this.flag = flag;
this.cb = cb;
this.meta36555 = meta36555;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36556,meta36555__$1){
var self__ = this;
var _36556__$1 = this;
return (new cljs.core.async.t_cljs$core$async36554(self__.flag,self__.cb,meta36555__$1));
}));

(cljs.core.async.t_cljs$core$async36554.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36556){
var self__ = this;
var _36556__$1 = this;
return self__.meta36555;
}));

(cljs.core.async.t_cljs$core$async36554.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36554.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async36554.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36554.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async36554.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta36555","meta36555",-1324876343,null)], null);
}));

(cljs.core.async.t_cljs$core$async36554.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36554.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36554");

(cljs.core.async.t_cljs$core$async36554.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"cljs.core.async/t_cljs$core$async36554");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36554.
 */
cljs.core.async.__GT_t_cljs$core$async36554 = (function cljs$core$async$__GT_t_cljs$core$async36554(flag,cb,meta36555){
return (new cljs.core.async.t_cljs$core$async36554(flag,cb,meta36555));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async36554(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__36572_SHARP_){
var G__36586 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36572_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__36586) : fret.call(null,G__36586));
});})(i,val,idx,port,wport,flag,ports__$1,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__36573_SHARP_){
var G__36591 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36573_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__36591) : fret.call(null,G__36591));
});})(i,idx,port,wport,flag,ports__$1,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4998__auto__ = wport;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return port;
}
})()], null));
} else {
var G__39768 = (i + (1));
i = G__39768;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4998__auto__ = ret;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5816__auto__ = (function (){var and__4996__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4996__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4996__auto__;
}
})();
if(cljs.core.truth_(temp__5816__auto__)){
var got = temp__5816__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__5728__auto__ = [];
var len__5722__auto___39769 = arguments.length;
var i__5723__auto___39770 = (0);
while(true){
if((i__5723__auto___39770 < len__5722__auto___39769)){
args__5728__auto__.push((arguments[i__5723__auto___39770]));

var G__39773 = (i__5723__auto___39770 + (1));
i__5723__auto___39770 = G__39773;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((1) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5729__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__36613){
var map__36614 = p__36613;
var map__36614__$1 = cljs.core.__destructure_map(map__36614);
var opts = map__36614__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq36604){
var G__36605 = cljs.core.first(seq36604);
var seq36604__$1 = cljs.core.next(seq36604);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36605,seq36604__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__36632 = arguments.length;
switch (G__36632) {
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

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__36440__auto___39777 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36441__auto__ = (function (){var switch__36198__auto__ = (function (state_36707){
var state_val_36708 = (state_36707[(1)]);
if((state_val_36708 === (7))){
var inst_36697 = (state_36707[(2)]);
var state_36707__$1 = state_36707;
var statearr_36724_39779 = state_36707__$1;
(statearr_36724_39779[(2)] = inst_36697);

(statearr_36724_39779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36708 === (1))){
var state_36707__$1 = state_36707;
var statearr_36725_39783 = state_36707__$1;
(statearr_36725_39783[(2)] = null);

(statearr_36725_39783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36708 === (4))){
var inst_36673 = (state_36707[(7)]);
var inst_36673__$1 = (state_36707[(2)]);
var inst_36678 = (inst_36673__$1 == null);
var state_36707__$1 = (function (){var statearr_36736 = state_36707;
(statearr_36736[(7)] = inst_36673__$1);

return statearr_36736;
})();
if(cljs.core.truth_(inst_36678)){
var statearr_36737_39784 = state_36707__$1;
(statearr_36737_39784[(1)] = (5));

} else {
var statearr_36738_39785 = state_36707__$1;
(statearr_36738_39785[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36708 === (13))){
var state_36707__$1 = state_36707;
var statearr_36740_39787 = state_36707__$1;
(statearr_36740_39787[(2)] = null);

(statearr_36740_39787[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36708 === (6))){
var inst_36673 = (state_36707[(7)]);
var state_36707__$1 = state_36707;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36707__$1,(11),to,inst_36673);
} else {
if((state_val_36708 === (3))){
var inst_36704 = (state_36707[(2)]);
var state_36707__$1 = state_36707;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36707__$1,inst_36704);
} else {
if((state_val_36708 === (12))){
var state_36707__$1 = state_36707;
var statearr_36744_39789 = state_36707__$1;
(statearr_36744_39789[(2)] = null);

(statearr_36744_39789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36708 === (2))){
var state_36707__$1 = state_36707;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36707__$1,(4),from);
} else {
if((state_val_36708 === (11))){
var inst_36690 = (state_36707[(2)]);
var state_36707__$1 = state_36707;
if(cljs.core.truth_(inst_36690)){
var statearr_36745_39792 = state_36707__$1;
(statearr_36745_39792[(1)] = (12));

} else {
var statearr_36746_39793 = state_36707__$1;
(statearr_36746_39793[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36708 === (9))){
var state_36707__$1 = state_36707;
var statearr_36747_39794 = state_36707__$1;
(statearr_36747_39794[(2)] = null);

(statearr_36747_39794[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36708 === (5))){
var state_36707__$1 = state_36707;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36749_39796 = state_36707__$1;
(statearr_36749_39796[(1)] = (8));

} else {
var statearr_36750_39797 = state_36707__$1;
(statearr_36750_39797[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36708 === (14))){
var inst_36695 = (state_36707[(2)]);
var state_36707__$1 = state_36707;
var statearr_36753_39801 = state_36707__$1;
(statearr_36753_39801[(2)] = inst_36695);

(statearr_36753_39801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36708 === (10))){
var inst_36687 = (state_36707[(2)]);
var state_36707__$1 = state_36707;
var statearr_36754_39804 = state_36707__$1;
(statearr_36754_39804[(2)] = inst_36687);

(statearr_36754_39804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36708 === (8))){
var inst_36684 = cljs.core.async.close_BANG_(to);
var state_36707__$1 = state_36707;
var statearr_36755_39806 = state_36707__$1;
(statearr_36755_39806[(2)] = inst_36684);

(statearr_36755_39806[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__36199__auto__ = null;
var cljs$core$async$state_machine__36199__auto____0 = (function (){
var statearr_36762 = [null,null,null,null,null,null,null,null];
(statearr_36762[(0)] = cljs$core$async$state_machine__36199__auto__);

(statearr_36762[(1)] = (1));

return statearr_36762;
});
var cljs$core$async$state_machine__36199__auto____1 = (function (state_36707){
while(true){
var ret_value__36200__auto__ = (function (){try{while(true){
var result__36201__auto__ = switch__36198__auto__(state_36707);
if(cljs.core.keyword_identical_QMARK_(result__36201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36201__auto__;
}
break;
}
}catch (e36763){var ex__36202__auto__ = e36763;
var statearr_36764_39808 = state_36707;
(statearr_36764_39808[(2)] = ex__36202__auto__);


if(cljs.core.seq((state_36707[(4)]))){
var statearr_36765_39810 = state_36707;
(statearr_36765_39810[(1)] = cljs.core.first((state_36707[(4)])));

} else {
throw ex__36202__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39811 = state_36707;
state_36707 = G__39811;
continue;
} else {
return ret_value__36200__auto__;
}
break;
}
});
cljs$core$async$state_machine__36199__auto__ = function(state_36707){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36199__auto____1.call(this,state_36707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36199__auto____0;
cljs$core$async$state_machine__36199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36199__auto____1;
return cljs$core$async$state_machine__36199__auto__;
})()
})();
var state__36442__auto__ = (function (){var statearr_36766 = f__36441__auto__();
(statearr_36766[(6)] = c__36440__auto___39777);

return statearr_36766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36442__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__36769){
var vec__36770 = p__36769;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36770,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36770,(1),null);
var job = vec__36770;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__36440__auto___39814 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36441__auto__ = (function (){var switch__36198__auto__ = (function (state_36783){
var state_val_36784 = (state_36783[(1)]);
if((state_val_36784 === (1))){
var state_36783__$1 = state_36783;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36783__$1,(2),res,v);
} else {
if((state_val_36784 === (2))){
var inst_36779 = (state_36783[(2)]);
var inst_36781 = cljs.core.async.close_BANG_(res);
var state_36783__$1 = (function (){var statearr_36785 = state_36783;
(statearr_36785[(7)] = inst_36779);

return statearr_36785;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36783__$1,inst_36781);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36199__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36199__auto____0 = (function (){
var statearr_36788 = [null,null,null,null,null,null,null,null];
(statearr_36788[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36199__auto__);

(statearr_36788[(1)] = (1));

return statearr_36788;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36199__auto____1 = (function (state_36783){
while(true){
var ret_value__36200__auto__ = (function (){try{while(true){
var result__36201__auto__ = switch__36198__auto__(state_36783);
if(cljs.core.keyword_identical_QMARK_(result__36201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36201__auto__;
}
break;
}
}catch (e36789){var ex__36202__auto__ = e36789;
var statearr_36790_39815 = state_36783;
(statearr_36790_39815[(2)] = ex__36202__auto__);


if(cljs.core.seq((state_36783[(4)]))){
var statearr_36792_39816 = state_36783;
(statearr_36792_39816[(1)] = cljs.core.first((state_36783[(4)])));

} else {
throw ex__36202__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39818 = state_36783;
state_36783 = G__39818;
continue;
} else {
return ret_value__36200__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36199__auto__ = function(state_36783){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36199__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36199__auto____1.call(this,state_36783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36199__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36199__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36199__auto__;
})()
})();
var state__36442__auto__ = (function (){var statearr_36797 = f__36441__auto__();
(statearr_36797[(6)] = c__36440__auto___39814);

return statearr_36797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36442__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__36799){
var vec__36800 = p__36799;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36800,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36800,(1),null);
var job = vec__36800;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5589__auto___39820 = n;
var __39821 = (0);
while(true){
if((__39821 < n__5589__auto___39820)){
var G__36814_39822 = type;
var G__36814_39823__$1 = (((G__36814_39822 instanceof cljs.core.Keyword))?G__36814_39822.fqn:null);
switch (G__36814_39823__$1) {
case "compute":
var c__36440__auto___39825 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__39821,c__36440__auto___39825,G__36814_39822,G__36814_39823__$1,n__5589__auto___39820,jobs,results,process__$1,async){
return (function (){
var f__36441__auto__ = (function (){var switch__36198__auto__ = ((function (__39821,c__36440__auto___39825,G__36814_39822,G__36814_39823__$1,n__5589__auto___39820,jobs,results,process__$1,async){
return (function (state_36833){
var state_val_36834 = (state_36833[(1)]);
if((state_val_36834 === (1))){
var state_36833__$1 = state_36833;
var statearr_36840_39829 = state_36833__$1;
(statearr_36840_39829[(2)] = null);

(statearr_36840_39829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36834 === (2))){
var state_36833__$1 = state_36833;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36833__$1,(4),jobs);
} else {
if((state_val_36834 === (3))){
var inst_36831 = (state_36833[(2)]);
var state_36833__$1 = state_36833;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36833__$1,inst_36831);
} else {
if((state_val_36834 === (4))){
var inst_36821 = (state_36833[(2)]);
var inst_36822 = process__$1(inst_36821);
var state_36833__$1 = state_36833;
if(cljs.core.truth_(inst_36822)){
var statearr_36850_39833 = state_36833__$1;
(statearr_36850_39833[(1)] = (5));

} else {
var statearr_36851_39834 = state_36833__$1;
(statearr_36851_39834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36834 === (5))){
var state_36833__$1 = state_36833;
var statearr_36855_39835 = state_36833__$1;
(statearr_36855_39835[(2)] = null);

(statearr_36855_39835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36834 === (6))){
var state_36833__$1 = state_36833;
var statearr_36869_39836 = state_36833__$1;
(statearr_36869_39836[(2)] = null);

(statearr_36869_39836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36834 === (7))){
var inst_36829 = (state_36833[(2)]);
var state_36833__$1 = state_36833;
var statearr_36875_39837 = state_36833__$1;
(statearr_36875_39837[(2)] = inst_36829);

(statearr_36875_39837[(1)] = (3));


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
});})(__39821,c__36440__auto___39825,G__36814_39822,G__36814_39823__$1,n__5589__auto___39820,jobs,results,process__$1,async))
;
return ((function (__39821,switch__36198__auto__,c__36440__auto___39825,G__36814_39822,G__36814_39823__$1,n__5589__auto___39820,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36199__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36199__auto____0 = (function (){
var statearr_36876 = [null,null,null,null,null,null,null];
(statearr_36876[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36199__auto__);

(statearr_36876[(1)] = (1));

return statearr_36876;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36199__auto____1 = (function (state_36833){
while(true){
var ret_value__36200__auto__ = (function (){try{while(true){
var result__36201__auto__ = switch__36198__auto__(state_36833);
if(cljs.core.keyword_identical_QMARK_(result__36201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36201__auto__;
}
break;
}
}catch (e36877){var ex__36202__auto__ = e36877;
var statearr_36878_39845 = state_36833;
(statearr_36878_39845[(2)] = ex__36202__auto__);


if(cljs.core.seq((state_36833[(4)]))){
var statearr_36879_39851 = state_36833;
(statearr_36879_39851[(1)] = cljs.core.first((state_36833[(4)])));

} else {
throw ex__36202__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39858 = state_36833;
state_36833 = G__39858;
continue;
} else {
return ret_value__36200__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36199__auto__ = function(state_36833){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36199__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36199__auto____1.call(this,state_36833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36199__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36199__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36199__auto__;
})()
;})(__39821,switch__36198__auto__,c__36440__auto___39825,G__36814_39822,G__36814_39823__$1,n__5589__auto___39820,jobs,results,process__$1,async))
})();
var state__36442__auto__ = (function (){var statearr_36883 = f__36441__auto__();
(statearr_36883[(6)] = c__36440__auto___39825);

return statearr_36883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36442__auto__);
});})(__39821,c__36440__auto___39825,G__36814_39822,G__36814_39823__$1,n__5589__auto___39820,jobs,results,process__$1,async))
);


break;
case "async":
var c__36440__auto___39862 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__39821,c__36440__auto___39862,G__36814_39822,G__36814_39823__$1,n__5589__auto___39820,jobs,results,process__$1,async){
return (function (){
var f__36441__auto__ = (function (){var switch__36198__auto__ = ((function (__39821,c__36440__auto___39862,G__36814_39822,G__36814_39823__$1,n__5589__auto___39820,jobs,results,process__$1,async){
return (function (state_36901){
var state_val_36902 = (state_36901[(1)]);
if((state_val_36902 === (1))){
var state_36901__$1 = state_36901;
var statearr_36905_39892 = state_36901__$1;
(statearr_36905_39892[(2)] = null);

(statearr_36905_39892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36902 === (2))){
var state_36901__$1 = state_36901;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36901__$1,(4),jobs);
} else {
if((state_val_36902 === (3))){
var inst_36899 = (state_36901[(2)]);
var state_36901__$1 = state_36901;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36901__$1,inst_36899);
} else {
if((state_val_36902 === (4))){
var inst_36888 = (state_36901[(2)]);
var inst_36892 = async(inst_36888);
var state_36901__$1 = state_36901;
if(cljs.core.truth_(inst_36892)){
var statearr_36917_39899 = state_36901__$1;
(statearr_36917_39899[(1)] = (5));

} else {
var statearr_36919_39900 = state_36901__$1;
(statearr_36919_39900[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36902 === (5))){
var state_36901__$1 = state_36901;
var statearr_36920_39901 = state_36901__$1;
(statearr_36920_39901[(2)] = null);

(statearr_36920_39901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36902 === (6))){
var state_36901__$1 = state_36901;
var statearr_36921_39902 = state_36901__$1;
(statearr_36921_39902[(2)] = null);

(statearr_36921_39902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36902 === (7))){
var inst_36897 = (state_36901[(2)]);
var state_36901__$1 = state_36901;
var statearr_36927_39903 = state_36901__$1;
(statearr_36927_39903[(2)] = inst_36897);

(statearr_36927_39903[(1)] = (3));


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
});})(__39821,c__36440__auto___39862,G__36814_39822,G__36814_39823__$1,n__5589__auto___39820,jobs,results,process__$1,async))
;
return ((function (__39821,switch__36198__auto__,c__36440__auto___39862,G__36814_39822,G__36814_39823__$1,n__5589__auto___39820,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36199__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36199__auto____0 = (function (){
var statearr_36928 = [null,null,null,null,null,null,null];
(statearr_36928[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36199__auto__);

(statearr_36928[(1)] = (1));

return statearr_36928;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36199__auto____1 = (function (state_36901){
while(true){
var ret_value__36200__auto__ = (function (){try{while(true){
var result__36201__auto__ = switch__36198__auto__(state_36901);
if(cljs.core.keyword_identical_QMARK_(result__36201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36201__auto__;
}
break;
}
}catch (e36929){var ex__36202__auto__ = e36929;
var statearr_36930_39904 = state_36901;
(statearr_36930_39904[(2)] = ex__36202__auto__);


if(cljs.core.seq((state_36901[(4)]))){
var statearr_36932_39905 = state_36901;
(statearr_36932_39905[(1)] = cljs.core.first((state_36901[(4)])));

} else {
throw ex__36202__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39910 = state_36901;
state_36901 = G__39910;
continue;
} else {
return ret_value__36200__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36199__auto__ = function(state_36901){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36199__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36199__auto____1.call(this,state_36901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36199__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36199__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36199__auto__;
})()
;})(__39821,switch__36198__auto__,c__36440__auto___39862,G__36814_39822,G__36814_39823__$1,n__5589__auto___39820,jobs,results,process__$1,async))
})();
var state__36442__auto__ = (function (){var statearr_36936 = f__36441__auto__();
(statearr_36936[(6)] = c__36440__auto___39862);

return statearr_36936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36442__auto__);
});})(__39821,c__36440__auto___39862,G__36814_39822,G__36814_39823__$1,n__5589__auto___39820,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36814_39823__$1)].join('')));

}

var G__39911 = (__39821 + (1));
__39821 = G__39911;
continue;
} else {
}
break;
}

var c__36440__auto___39912 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36441__auto__ = (function (){var switch__36198__auto__ = (function (state_36960){
var state_val_36961 = (state_36960[(1)]);
if((state_val_36961 === (7))){
var inst_36956 = (state_36960[(2)]);
var state_36960__$1 = state_36960;
var statearr_36967_39913 = state_36960__$1;
(statearr_36967_39913[(2)] = inst_36956);

(statearr_36967_39913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36961 === (1))){
var state_36960__$1 = state_36960;
var statearr_36969_39915 = state_36960__$1;
(statearr_36969_39915[(2)] = null);

(statearr_36969_39915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36961 === (4))){
var inst_36941 = (state_36960[(7)]);
var inst_36941__$1 = (state_36960[(2)]);
var inst_36942 = (inst_36941__$1 == null);
var state_36960__$1 = (function (){var statearr_36971 = state_36960;
(statearr_36971[(7)] = inst_36941__$1);

return statearr_36971;
})();
if(cljs.core.truth_(inst_36942)){
var statearr_36972_39916 = state_36960__$1;
(statearr_36972_39916[(1)] = (5));

} else {
var statearr_36974_39917 = state_36960__$1;
(statearr_36974_39917[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36961 === (6))){
var inst_36941 = (state_36960[(7)]);
var inst_36946 = (state_36960[(8)]);
var inst_36946__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_36947 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36948 = [inst_36941,inst_36946__$1];
var inst_36949 = (new cljs.core.PersistentVector(null,2,(5),inst_36947,inst_36948,null));
var state_36960__$1 = (function (){var statearr_36980 = state_36960;
(statearr_36980[(8)] = inst_36946__$1);

return statearr_36980;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36960__$1,(8),jobs,inst_36949);
} else {
if((state_val_36961 === (3))){
var inst_36958 = (state_36960[(2)]);
var state_36960__$1 = state_36960;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36960__$1,inst_36958);
} else {
if((state_val_36961 === (2))){
var state_36960__$1 = state_36960;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36960__$1,(4),from);
} else {
if((state_val_36961 === (9))){
var inst_36953 = (state_36960[(2)]);
var state_36960__$1 = (function (){var statearr_36990 = state_36960;
(statearr_36990[(9)] = inst_36953);

return statearr_36990;
})();
var statearr_36992_39928 = state_36960__$1;
(statearr_36992_39928[(2)] = null);

(statearr_36992_39928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36961 === (5))){
var inst_36944 = cljs.core.async.close_BANG_(jobs);
var state_36960__$1 = state_36960;
var statearr_37001_39929 = state_36960__$1;
(statearr_37001_39929[(2)] = inst_36944);

(statearr_37001_39929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36961 === (8))){
var inst_36946 = (state_36960[(8)]);
var inst_36951 = (state_36960[(2)]);
var state_36960__$1 = (function (){var statearr_37009 = state_36960;
(statearr_37009[(10)] = inst_36951);

return statearr_37009;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36960__$1,(9),results,inst_36946);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36199__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36199__auto____0 = (function (){
var statearr_37010 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37010[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36199__auto__);

(statearr_37010[(1)] = (1));

return statearr_37010;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36199__auto____1 = (function (state_36960){
while(true){
var ret_value__36200__auto__ = (function (){try{while(true){
var result__36201__auto__ = switch__36198__auto__(state_36960);
if(cljs.core.keyword_identical_QMARK_(result__36201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36201__auto__;
}
break;
}
}catch (e37011){var ex__36202__auto__ = e37011;
var statearr_37012_39934 = state_36960;
(statearr_37012_39934[(2)] = ex__36202__auto__);


if(cljs.core.seq((state_36960[(4)]))){
var statearr_37013_39935 = state_36960;
(statearr_37013_39935[(1)] = cljs.core.first((state_36960[(4)])));

} else {
throw ex__36202__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39937 = state_36960;
state_36960 = G__39937;
continue;
} else {
return ret_value__36200__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36199__auto__ = function(state_36960){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36199__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36199__auto____1.call(this,state_36960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36199__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36199__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36199__auto__;
})()
})();
var state__36442__auto__ = (function (){var statearr_37014 = f__36441__auto__();
(statearr_37014[(6)] = c__36440__auto___39912);

return statearr_37014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36442__auto__);
}));


var c__36440__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36441__auto__ = (function (){var switch__36198__auto__ = (function (state_37061){
var state_val_37062 = (state_37061[(1)]);
if((state_val_37062 === (7))){
var inst_37056 = (state_37061[(2)]);
var state_37061__$1 = state_37061;
var statearr_37065_39944 = state_37061__$1;
(statearr_37065_39944[(2)] = inst_37056);

(statearr_37065_39944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37062 === (20))){
var state_37061__$1 = state_37061;
var statearr_37066_39945 = state_37061__$1;
(statearr_37066_39945[(2)] = null);

(statearr_37066_39945[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37062 === (1))){
var state_37061__$1 = state_37061;
var statearr_37068_39946 = state_37061__$1;
(statearr_37068_39946[(2)] = null);

(statearr_37068_39946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37062 === (4))){
var inst_37018 = (state_37061[(7)]);
var inst_37018__$1 = (state_37061[(2)]);
var inst_37020 = (inst_37018__$1 == null);
var state_37061__$1 = (function (){var statearr_37070 = state_37061;
(statearr_37070[(7)] = inst_37018__$1);

return statearr_37070;
})();
if(cljs.core.truth_(inst_37020)){
var statearr_37071_39949 = state_37061__$1;
(statearr_37071_39949[(1)] = (5));

} else {
var statearr_37072_39950 = state_37061__$1;
(statearr_37072_39950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37062 === (15))){
var inst_37036 = (state_37061[(8)]);
var state_37061__$1 = state_37061;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37061__$1,(18),to,inst_37036);
} else {
if((state_val_37062 === (21))){
var inst_37051 = (state_37061[(2)]);
var state_37061__$1 = state_37061;
var statearr_37074_39952 = state_37061__$1;
(statearr_37074_39952[(2)] = inst_37051);

(statearr_37074_39952[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37062 === (13))){
var inst_37053 = (state_37061[(2)]);
var state_37061__$1 = (function (){var statearr_37077 = state_37061;
(statearr_37077[(9)] = inst_37053);

return statearr_37077;
})();
var statearr_37079_39953 = state_37061__$1;
(statearr_37079_39953[(2)] = null);

(statearr_37079_39953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37062 === (6))){
var inst_37018 = (state_37061[(7)]);
var state_37061__$1 = state_37061;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37061__$1,(11),inst_37018);
} else {
if((state_val_37062 === (17))){
var inst_37046 = (state_37061[(2)]);
var state_37061__$1 = state_37061;
if(cljs.core.truth_(inst_37046)){
var statearr_37083_39955 = state_37061__$1;
(statearr_37083_39955[(1)] = (19));

} else {
var statearr_37085_39956 = state_37061__$1;
(statearr_37085_39956[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37062 === (3))){
var inst_37058 = (state_37061[(2)]);
var state_37061__$1 = state_37061;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37061__$1,inst_37058);
} else {
if((state_val_37062 === (12))){
var inst_37031 = (state_37061[(10)]);
var state_37061__$1 = state_37061;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37061__$1,(14),inst_37031);
} else {
if((state_val_37062 === (2))){
var state_37061__$1 = state_37061;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37061__$1,(4),results);
} else {
if((state_val_37062 === (19))){
var state_37061__$1 = state_37061;
var statearr_37088_39958 = state_37061__$1;
(statearr_37088_39958[(2)] = null);

(statearr_37088_39958[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37062 === (11))){
var inst_37031 = (state_37061[(2)]);
var state_37061__$1 = (function (){var statearr_37091 = state_37061;
(statearr_37091[(10)] = inst_37031);

return statearr_37091;
})();
var statearr_37092_39959 = state_37061__$1;
(statearr_37092_39959[(2)] = null);

(statearr_37092_39959[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37062 === (9))){
var state_37061__$1 = state_37061;
var statearr_37093_39962 = state_37061__$1;
(statearr_37093_39962[(2)] = null);

(statearr_37093_39962[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37062 === (5))){
var state_37061__$1 = state_37061;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37096_39964 = state_37061__$1;
(statearr_37096_39964[(1)] = (8));

} else {
var statearr_37097_39965 = state_37061__$1;
(statearr_37097_39965[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37062 === (14))){
var inst_37036 = (state_37061[(8)]);
var inst_37038 = (state_37061[(11)]);
var inst_37036__$1 = (state_37061[(2)]);
var inst_37037 = (inst_37036__$1 == null);
var inst_37038__$1 = cljs.core.not(inst_37037);
var state_37061__$1 = (function (){var statearr_37106 = state_37061;
(statearr_37106[(8)] = inst_37036__$1);

(statearr_37106[(11)] = inst_37038__$1);

return statearr_37106;
})();
if(inst_37038__$1){
var statearr_37112_39968 = state_37061__$1;
(statearr_37112_39968[(1)] = (15));

} else {
var statearr_37119_39969 = state_37061__$1;
(statearr_37119_39969[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37062 === (16))){
var inst_37038 = (state_37061[(11)]);
var state_37061__$1 = state_37061;
var statearr_37126_39970 = state_37061__$1;
(statearr_37126_39970[(2)] = inst_37038);

(statearr_37126_39970[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37062 === (10))){
var inst_37027 = (state_37061[(2)]);
var state_37061__$1 = state_37061;
var statearr_37127_39976 = state_37061__$1;
(statearr_37127_39976[(2)] = inst_37027);

(statearr_37127_39976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37062 === (18))){
var inst_37042 = (state_37061[(2)]);
var state_37061__$1 = state_37061;
var statearr_37128_39978 = state_37061__$1;
(statearr_37128_39978[(2)] = inst_37042);

(statearr_37128_39978[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37062 === (8))){
var inst_37023 = cljs.core.async.close_BANG_(to);
var state_37061__$1 = state_37061;
var statearr_37131_39979 = state_37061__$1;
(statearr_37131_39979[(2)] = inst_37023);

(statearr_37131_39979[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36199__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36199__auto____0 = (function (){
var statearr_37135 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37135[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36199__auto__);

(statearr_37135[(1)] = (1));

return statearr_37135;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36199__auto____1 = (function (state_37061){
while(true){
var ret_value__36200__auto__ = (function (){try{while(true){
var result__36201__auto__ = switch__36198__auto__(state_37061);
if(cljs.core.keyword_identical_QMARK_(result__36201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36201__auto__;
}
break;
}
}catch (e37136){var ex__36202__auto__ = e37136;
var statearr_37139_39980 = state_37061;
(statearr_37139_39980[(2)] = ex__36202__auto__);


if(cljs.core.seq((state_37061[(4)]))){
var statearr_37141_39981 = state_37061;
(statearr_37141_39981[(1)] = cljs.core.first((state_37061[(4)])));

} else {
throw ex__36202__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39982 = state_37061;
state_37061 = G__39982;
continue;
} else {
return ret_value__36200__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36199__auto__ = function(state_37061){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36199__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36199__auto____1.call(this,state_37061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36199__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36199__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36199__auto__;
})()
})();
var state__36442__auto__ = (function (){var statearr_37145 = f__36441__auto__();
(statearr_37145[(6)] = c__36440__auto__);

return statearr_37145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36442__auto__);
}));

return c__36440__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__37192 = arguments.length;
switch (G__37192) {
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

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__37264 = arguments.length;
switch (G__37264) {
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

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__37278 = arguments.length;
switch (G__37278) {
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

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__36440__auto___39989 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36441__auto__ = (function (){var switch__36198__auto__ = (function (state_37308){
var state_val_37309 = (state_37308[(1)]);
if((state_val_37309 === (7))){
var inst_37304 = (state_37308[(2)]);
var state_37308__$1 = state_37308;
var statearr_37314_39991 = state_37308__$1;
(statearr_37314_39991[(2)] = inst_37304);

(statearr_37314_39991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37309 === (1))){
var state_37308__$1 = state_37308;
var statearr_37317_39992 = state_37308__$1;
(statearr_37317_39992[(2)] = null);

(statearr_37317_39992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37309 === (4))){
var inst_37283 = (state_37308[(7)]);
var inst_37283__$1 = (state_37308[(2)]);
var inst_37284 = (inst_37283__$1 == null);
var state_37308__$1 = (function (){var statearr_37319 = state_37308;
(statearr_37319[(7)] = inst_37283__$1);

return statearr_37319;
})();
if(cljs.core.truth_(inst_37284)){
var statearr_37320_39993 = state_37308__$1;
(statearr_37320_39993[(1)] = (5));

} else {
var statearr_37321_39998 = state_37308__$1;
(statearr_37321_39998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37309 === (13))){
var state_37308__$1 = state_37308;
var statearr_37322_39999 = state_37308__$1;
(statearr_37322_39999[(2)] = null);

(statearr_37322_39999[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37309 === (6))){
var inst_37283 = (state_37308[(7)]);
var inst_37289 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_37283) : p.call(null,inst_37283));
var state_37308__$1 = state_37308;
if(cljs.core.truth_(inst_37289)){
var statearr_37323_40000 = state_37308__$1;
(statearr_37323_40000[(1)] = (9));

} else {
var statearr_37324_40001 = state_37308__$1;
(statearr_37324_40001[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37309 === (3))){
var inst_37306 = (state_37308[(2)]);
var state_37308__$1 = state_37308;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37308__$1,inst_37306);
} else {
if((state_val_37309 === (12))){
var state_37308__$1 = state_37308;
var statearr_37325_40002 = state_37308__$1;
(statearr_37325_40002[(2)] = null);

(statearr_37325_40002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37309 === (2))){
var state_37308__$1 = state_37308;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37308__$1,(4),ch);
} else {
if((state_val_37309 === (11))){
var inst_37283 = (state_37308[(7)]);
var inst_37295 = (state_37308[(2)]);
var state_37308__$1 = state_37308;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37308__$1,(8),inst_37295,inst_37283);
} else {
if((state_val_37309 === (9))){
var state_37308__$1 = state_37308;
var statearr_37326_40007 = state_37308__$1;
(statearr_37326_40007[(2)] = tc);

(statearr_37326_40007[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37309 === (5))){
var inst_37286 = cljs.core.async.close_BANG_(tc);
var inst_37287 = cljs.core.async.close_BANG_(fc);
var state_37308__$1 = (function (){var statearr_37327 = state_37308;
(statearr_37327[(8)] = inst_37286);

return statearr_37327;
})();
var statearr_37328_40009 = state_37308__$1;
(statearr_37328_40009[(2)] = inst_37287);

(statearr_37328_40009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37309 === (14))){
var inst_37302 = (state_37308[(2)]);
var state_37308__$1 = state_37308;
var statearr_37330_40013 = state_37308__$1;
(statearr_37330_40013[(2)] = inst_37302);

(statearr_37330_40013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37309 === (10))){
var state_37308__$1 = state_37308;
var statearr_37333_40015 = state_37308__$1;
(statearr_37333_40015[(2)] = fc);

(statearr_37333_40015[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37309 === (8))){
var inst_37297 = (state_37308[(2)]);
var state_37308__$1 = state_37308;
if(cljs.core.truth_(inst_37297)){
var statearr_37335_40016 = state_37308__$1;
(statearr_37335_40016[(1)] = (12));

} else {
var statearr_37336_40017 = state_37308__$1;
(statearr_37336_40017[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__36199__auto__ = null;
var cljs$core$async$state_machine__36199__auto____0 = (function (){
var statearr_37337 = [null,null,null,null,null,null,null,null,null];
(statearr_37337[(0)] = cljs$core$async$state_machine__36199__auto__);

(statearr_37337[(1)] = (1));

return statearr_37337;
});
var cljs$core$async$state_machine__36199__auto____1 = (function (state_37308){
while(true){
var ret_value__36200__auto__ = (function (){try{while(true){
var result__36201__auto__ = switch__36198__auto__(state_37308);
if(cljs.core.keyword_identical_QMARK_(result__36201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36201__auto__;
}
break;
}
}catch (e37338){var ex__36202__auto__ = e37338;
var statearr_37339_40018 = state_37308;
(statearr_37339_40018[(2)] = ex__36202__auto__);


if(cljs.core.seq((state_37308[(4)]))){
var statearr_37340_40019 = state_37308;
(statearr_37340_40019[(1)] = cljs.core.first((state_37308[(4)])));

} else {
throw ex__36202__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40020 = state_37308;
state_37308 = G__40020;
continue;
} else {
return ret_value__36200__auto__;
}
break;
}
});
cljs$core$async$state_machine__36199__auto__ = function(state_37308){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36199__auto____1.call(this,state_37308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36199__auto____0;
cljs$core$async$state_machine__36199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36199__auto____1;
return cljs$core$async$state_machine__36199__auto__;
})()
})();
var state__36442__auto__ = (function (){var statearr_37341 = f__36441__auto__();
(statearr_37341[(6)] = c__36440__auto___39989);

return statearr_37341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36442__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__36440__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36441__auto__ = (function (){var switch__36198__auto__ = (function (state_37365){
var state_val_37366 = (state_37365[(1)]);
if((state_val_37366 === (7))){
var inst_37361 = (state_37365[(2)]);
var state_37365__$1 = state_37365;
var statearr_37367_40021 = state_37365__$1;
(statearr_37367_40021[(2)] = inst_37361);

(statearr_37367_40021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37366 === (1))){
var inst_37342 = init;
var inst_37343 = inst_37342;
var state_37365__$1 = (function (){var statearr_37368 = state_37365;
(statearr_37368[(7)] = inst_37343);

return statearr_37368;
})();
var statearr_37369_40027 = state_37365__$1;
(statearr_37369_40027[(2)] = null);

(statearr_37369_40027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37366 === (4))){
var inst_37346 = (state_37365[(8)]);
var inst_37346__$1 = (state_37365[(2)]);
var inst_37347 = (inst_37346__$1 == null);
var state_37365__$1 = (function (){var statearr_37370 = state_37365;
(statearr_37370[(8)] = inst_37346__$1);

return statearr_37370;
})();
if(cljs.core.truth_(inst_37347)){
var statearr_37373_40028 = state_37365__$1;
(statearr_37373_40028[(1)] = (5));

} else {
var statearr_37374_40029 = state_37365__$1;
(statearr_37374_40029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37366 === (6))){
var inst_37343 = (state_37365[(7)]);
var inst_37346 = (state_37365[(8)]);
var inst_37350 = (state_37365[(9)]);
var inst_37350__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_37343,inst_37346) : f.call(null,inst_37343,inst_37346));
var inst_37351 = cljs.core.reduced_QMARK_(inst_37350__$1);
var state_37365__$1 = (function (){var statearr_37375 = state_37365;
(statearr_37375[(9)] = inst_37350__$1);

return statearr_37375;
})();
if(inst_37351){
var statearr_37376_40033 = state_37365__$1;
(statearr_37376_40033[(1)] = (8));

} else {
var statearr_37377_40034 = state_37365__$1;
(statearr_37377_40034[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37366 === (3))){
var inst_37363 = (state_37365[(2)]);
var state_37365__$1 = state_37365;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37365__$1,inst_37363);
} else {
if((state_val_37366 === (2))){
var state_37365__$1 = state_37365;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37365__$1,(4),ch);
} else {
if((state_val_37366 === (9))){
var inst_37350 = (state_37365[(9)]);
var inst_37343 = inst_37350;
var state_37365__$1 = (function (){var statearr_37380 = state_37365;
(statearr_37380[(7)] = inst_37343);

return statearr_37380;
})();
var statearr_37381_40037 = state_37365__$1;
(statearr_37381_40037[(2)] = null);

(statearr_37381_40037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37366 === (5))){
var inst_37343 = (state_37365[(7)]);
var state_37365__$1 = state_37365;
var statearr_37382_40038 = state_37365__$1;
(statearr_37382_40038[(2)] = inst_37343);

(statearr_37382_40038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37366 === (10))){
var inst_37359 = (state_37365[(2)]);
var state_37365__$1 = state_37365;
var statearr_37383_40040 = state_37365__$1;
(statearr_37383_40040[(2)] = inst_37359);

(statearr_37383_40040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37366 === (8))){
var inst_37350 = (state_37365[(9)]);
var inst_37355 = cljs.core.deref(inst_37350);
var state_37365__$1 = state_37365;
var statearr_37384_40041 = state_37365__$1;
(statearr_37384_40041[(2)] = inst_37355);

(statearr_37384_40041[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__36199__auto__ = null;
var cljs$core$async$reduce_$_state_machine__36199__auto____0 = (function (){
var statearr_37385 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37385[(0)] = cljs$core$async$reduce_$_state_machine__36199__auto__);

(statearr_37385[(1)] = (1));

return statearr_37385;
});
var cljs$core$async$reduce_$_state_machine__36199__auto____1 = (function (state_37365){
while(true){
var ret_value__36200__auto__ = (function (){try{while(true){
var result__36201__auto__ = switch__36198__auto__(state_37365);
if(cljs.core.keyword_identical_QMARK_(result__36201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36201__auto__;
}
break;
}
}catch (e37386){var ex__36202__auto__ = e37386;
var statearr_37387_40043 = state_37365;
(statearr_37387_40043[(2)] = ex__36202__auto__);


if(cljs.core.seq((state_37365[(4)]))){
var statearr_37388_40044 = state_37365;
(statearr_37388_40044[(1)] = cljs.core.first((state_37365[(4)])));

} else {
throw ex__36202__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40045 = state_37365;
state_37365 = G__40045;
continue;
} else {
return ret_value__36200__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__36199__auto__ = function(state_37365){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__36199__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__36199__auto____1.call(this,state_37365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__36199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__36199__auto____0;
cljs$core$async$reduce_$_state_machine__36199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__36199__auto____1;
return cljs$core$async$reduce_$_state_machine__36199__auto__;
})()
})();
var state__36442__auto__ = (function (){var statearr_37390 = f__36441__auto__();
(statearr_37390[(6)] = c__36440__auto__);

return statearr_37390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36442__auto__);
}));

return c__36440__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__36440__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36441__auto__ = (function (){var switch__36198__auto__ = (function (state_37396){
var state_val_37397 = (state_37396[(1)]);
if((state_val_37397 === (1))){
var inst_37391 = cljs.core.async.reduce(f__$1,init,ch);
var state_37396__$1 = state_37396;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37396__$1,(2),inst_37391);
} else {
if((state_val_37397 === (2))){
var inst_37393 = (state_37396[(2)]);
var inst_37394 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_37393) : f__$1.call(null,inst_37393));
var state_37396__$1 = state_37396;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37396__$1,inst_37394);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__36199__auto__ = null;
var cljs$core$async$transduce_$_state_machine__36199__auto____0 = (function (){
var statearr_37398 = [null,null,null,null,null,null,null];
(statearr_37398[(0)] = cljs$core$async$transduce_$_state_machine__36199__auto__);

(statearr_37398[(1)] = (1));

return statearr_37398;
});
var cljs$core$async$transduce_$_state_machine__36199__auto____1 = (function (state_37396){
while(true){
var ret_value__36200__auto__ = (function (){try{while(true){
var result__36201__auto__ = switch__36198__auto__(state_37396);
if(cljs.core.keyword_identical_QMARK_(result__36201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36201__auto__;
}
break;
}
}catch (e37400){var ex__36202__auto__ = e37400;
var statearr_37401_40059 = state_37396;
(statearr_37401_40059[(2)] = ex__36202__auto__);


if(cljs.core.seq((state_37396[(4)]))){
var statearr_37402_40060 = state_37396;
(statearr_37402_40060[(1)] = cljs.core.first((state_37396[(4)])));

} else {
throw ex__36202__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40061 = state_37396;
state_37396 = G__40061;
continue;
} else {
return ret_value__36200__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__36199__auto__ = function(state_37396){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__36199__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__36199__auto____1.call(this,state_37396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__36199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__36199__auto____0;
cljs$core$async$transduce_$_state_machine__36199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__36199__auto____1;
return cljs$core$async$transduce_$_state_machine__36199__auto__;
})()
})();
var state__36442__auto__ = (function (){var statearr_37403 = f__36441__auto__();
(statearr_37403[(6)] = c__36440__auto__);

return statearr_37403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36442__auto__);
}));

return c__36440__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__37414 = arguments.length;
switch (G__37414) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__36440__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36441__auto__ = (function (){var switch__36198__auto__ = (function (state_37440){
var state_val_37441 = (state_37440[(1)]);
if((state_val_37441 === (7))){
var inst_37422 = (state_37440[(2)]);
var state_37440__$1 = state_37440;
var statearr_37446_40088 = state_37440__$1;
(statearr_37446_40088[(2)] = inst_37422);

(statearr_37446_40088[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (1))){
var inst_37415 = cljs.core.seq(coll);
var inst_37416 = inst_37415;
var state_37440__$1 = (function (){var statearr_37447 = state_37440;
(statearr_37447[(7)] = inst_37416);

return statearr_37447;
})();
var statearr_37448_40096 = state_37440__$1;
(statearr_37448_40096[(2)] = null);

(statearr_37448_40096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (4))){
var inst_37416 = (state_37440[(7)]);
var inst_37420 = cljs.core.first(inst_37416);
var state_37440__$1 = state_37440;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37440__$1,(7),ch,inst_37420);
} else {
if((state_val_37441 === (13))){
var inst_37434 = (state_37440[(2)]);
var state_37440__$1 = state_37440;
var statearr_37449_40100 = state_37440__$1;
(statearr_37449_40100[(2)] = inst_37434);

(statearr_37449_40100[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (6))){
var inst_37425 = (state_37440[(2)]);
var state_37440__$1 = state_37440;
if(cljs.core.truth_(inst_37425)){
var statearr_37450_40101 = state_37440__$1;
(statearr_37450_40101[(1)] = (8));

} else {
var statearr_37451_40102 = state_37440__$1;
(statearr_37451_40102[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (3))){
var inst_37438 = (state_37440[(2)]);
var state_37440__$1 = state_37440;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37440__$1,inst_37438);
} else {
if((state_val_37441 === (12))){
var state_37440__$1 = state_37440;
var statearr_37452_40103 = state_37440__$1;
(statearr_37452_40103[(2)] = null);

(statearr_37452_40103[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (2))){
var inst_37416 = (state_37440[(7)]);
var state_37440__$1 = state_37440;
if(cljs.core.truth_(inst_37416)){
var statearr_37454_40107 = state_37440__$1;
(statearr_37454_40107[(1)] = (4));

} else {
var statearr_37457_40108 = state_37440__$1;
(statearr_37457_40108[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (11))){
var inst_37431 = cljs.core.async.close_BANG_(ch);
var state_37440__$1 = state_37440;
var statearr_37458_40117 = state_37440__$1;
(statearr_37458_40117[(2)] = inst_37431);

(statearr_37458_40117[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (9))){
var state_37440__$1 = state_37440;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37460_40118 = state_37440__$1;
(statearr_37460_40118[(1)] = (11));

} else {
var statearr_37461_40119 = state_37440__$1;
(statearr_37461_40119[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (5))){
var inst_37416 = (state_37440[(7)]);
var state_37440__$1 = state_37440;
var statearr_37462_40126 = state_37440__$1;
(statearr_37462_40126[(2)] = inst_37416);

(statearr_37462_40126[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (10))){
var inst_37436 = (state_37440[(2)]);
var state_37440__$1 = state_37440;
var statearr_37470_40127 = state_37440__$1;
(statearr_37470_40127[(2)] = inst_37436);

(statearr_37470_40127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37441 === (8))){
var inst_37416 = (state_37440[(7)]);
var inst_37427 = cljs.core.next(inst_37416);
var inst_37416__$1 = inst_37427;
var state_37440__$1 = (function (){var statearr_37471 = state_37440;
(statearr_37471[(7)] = inst_37416__$1);

return statearr_37471;
})();
var statearr_37472_40128 = state_37440__$1;
(statearr_37472_40128[(2)] = null);

(statearr_37472_40128[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__36199__auto__ = null;
var cljs$core$async$state_machine__36199__auto____0 = (function (){
var statearr_37480 = [null,null,null,null,null,null,null,null];
(statearr_37480[(0)] = cljs$core$async$state_machine__36199__auto__);

(statearr_37480[(1)] = (1));

return statearr_37480;
});
var cljs$core$async$state_machine__36199__auto____1 = (function (state_37440){
while(true){
var ret_value__36200__auto__ = (function (){try{while(true){
var result__36201__auto__ = switch__36198__auto__(state_37440);
if(cljs.core.keyword_identical_QMARK_(result__36201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36201__auto__;
}
break;
}
}catch (e37481){var ex__36202__auto__ = e37481;
var statearr_37482_40135 = state_37440;
(statearr_37482_40135[(2)] = ex__36202__auto__);


if(cljs.core.seq((state_37440[(4)]))){
var statearr_37483_40136 = state_37440;
(statearr_37483_40136[(1)] = cljs.core.first((state_37440[(4)])));

} else {
throw ex__36202__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40137 = state_37440;
state_37440 = G__40137;
continue;
} else {
return ret_value__36200__auto__;
}
break;
}
});
cljs$core$async$state_machine__36199__auto__ = function(state_37440){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36199__auto____1.call(this,state_37440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36199__auto____0;
cljs$core$async$state_machine__36199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36199__auto____1;
return cljs$core$async$state_machine__36199__auto__;
})()
})();
var state__36442__auto__ = (function (){var statearr_37487 = f__36441__auto__();
(statearr_37487[(6)] = c__36440__auto__);

return statearr_37487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36442__auto__);
}));

return c__36440__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__37498 = arguments.length;
switch (G__37498) {
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

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_40145 = (function (_){
var x__5346__auto__ = (((_ == null))?null:_);
var m__5347__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5347__auto__.call(null,_));
} else {
var m__5345__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5345__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_40145(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_40153 = (function (m,ch,close_QMARK_){
var x__5346__auto__ = (((m == null))?null:m);
var m__5347__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5347__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5345__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5345__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_40153(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_40159 = (function (m,ch){
var x__5346__auto__ = (((m == null))?null:m);
var m__5347__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5347__auto__.call(null,m,ch));
} else {
var m__5345__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5345__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_40159(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_40161 = (function (m){
var x__5346__auto__ = (((m == null))?null:m);
var m__5347__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5347__auto__.call(null,m));
} else {
var m__5345__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5345__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_40161(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37519 = (function (ch,cs,meta37520){
this.ch = ch;
this.cs = cs;
this.meta37520 = meta37520;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37521,meta37520__$1){
var self__ = this;
var _37521__$1 = this;
return (new cljs.core.async.t_cljs$core$async37519(self__.ch,self__.cs,meta37520__$1));
}));

(cljs.core.async.t_cljs$core$async37519.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37521){
var self__ = this;
var _37521__$1 = this;
return self__.meta37520;
}));

(cljs.core.async.t_cljs$core$async37519.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37519.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async37519.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37519.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async37519.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async37519.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async37519.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta37520","meta37520",-1340503353,null)], null);
}));

(cljs.core.async.t_cljs$core$async37519.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37519.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37519");

(cljs.core.async.t_cljs$core$async37519.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"cljs.core.async/t_cljs$core$async37519");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37519.
 */
cljs.core.async.__GT_t_cljs$core$async37519 = (function cljs$core$async$__GT_t_cljs$core$async37519(ch,cs,meta37520){
return (new cljs.core.async.t_cljs$core$async37519(ch,cs,meta37520));
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async37519(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__36440__auto___40173 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36441__auto__ = (function (){var switch__36198__auto__ = (function (state_37719){
var state_val_37720 = (state_37719[(1)]);
if((state_val_37720 === (7))){
var inst_37715 = (state_37719[(2)]);
var state_37719__$1 = state_37719;
var statearr_37724_40174 = state_37719__$1;
(statearr_37724_40174[(2)] = inst_37715);

(statearr_37724_40174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (20))){
var inst_37596 = (state_37719[(7)]);
var inst_37618 = cljs.core.first(inst_37596);
var inst_37619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37618,(0),null);
var inst_37620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37618,(1),null);
var state_37719__$1 = (function (){var statearr_37728 = state_37719;
(statearr_37728[(8)] = inst_37619);

return statearr_37728;
})();
if(cljs.core.truth_(inst_37620)){
var statearr_37731_40176 = state_37719__$1;
(statearr_37731_40176[(1)] = (22));

} else {
var statearr_37732_40177 = state_37719__$1;
(statearr_37732_40177[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (27))){
var inst_37651 = (state_37719[(9)]);
var inst_37653 = (state_37719[(10)]);
var inst_37660 = (state_37719[(11)]);
var inst_37560 = (state_37719[(12)]);
var inst_37660__$1 = cljs.core._nth(inst_37651,inst_37653);
var inst_37665 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37660__$1,inst_37560,done);
var state_37719__$1 = (function (){var statearr_37741 = state_37719;
(statearr_37741[(11)] = inst_37660__$1);

return statearr_37741;
})();
if(cljs.core.truth_(inst_37665)){
var statearr_37742_40179 = state_37719__$1;
(statearr_37742_40179[(1)] = (30));

} else {
var statearr_37743_40180 = state_37719__$1;
(statearr_37743_40180[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (1))){
var state_37719__$1 = state_37719;
var statearr_37744_40181 = state_37719__$1;
(statearr_37744_40181[(2)] = null);

(statearr_37744_40181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (24))){
var inst_37596 = (state_37719[(7)]);
var inst_37626 = (state_37719[(2)]);
var inst_37627 = cljs.core.next(inst_37596);
var inst_37569 = inst_37627;
var inst_37570 = null;
var inst_37571 = (0);
var inst_37572 = (0);
var state_37719__$1 = (function (){var statearr_37745 = state_37719;
(statearr_37745[(13)] = inst_37626);

(statearr_37745[(14)] = inst_37569);

(statearr_37745[(15)] = inst_37570);

(statearr_37745[(16)] = inst_37571);

(statearr_37745[(17)] = inst_37572);

return statearr_37745;
})();
var statearr_37762_40182 = state_37719__$1;
(statearr_37762_40182[(2)] = null);

(statearr_37762_40182[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (39))){
var state_37719__$1 = state_37719;
var statearr_37791_40183 = state_37719__$1;
(statearr_37791_40183[(2)] = null);

(statearr_37791_40183[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (4))){
var inst_37560 = (state_37719[(12)]);
var inst_37560__$1 = (state_37719[(2)]);
var inst_37561 = (inst_37560__$1 == null);
var state_37719__$1 = (function (){var statearr_37799 = state_37719;
(statearr_37799[(12)] = inst_37560__$1);

return statearr_37799;
})();
if(cljs.core.truth_(inst_37561)){
var statearr_37800_40184 = state_37719__$1;
(statearr_37800_40184[(1)] = (5));

} else {
var statearr_37801_40185 = state_37719__$1;
(statearr_37801_40185[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (15))){
var inst_37572 = (state_37719[(17)]);
var inst_37569 = (state_37719[(14)]);
var inst_37570 = (state_37719[(15)]);
var inst_37571 = (state_37719[(16)]);
var inst_37589 = (state_37719[(2)]);
var inst_37591 = (inst_37572 + (1));
var tmp37763 = inst_37569;
var tmp37764 = inst_37570;
var tmp37765 = inst_37571;
var inst_37569__$1 = tmp37763;
var inst_37570__$1 = tmp37764;
var inst_37571__$1 = tmp37765;
var inst_37572__$1 = inst_37591;
var state_37719__$1 = (function (){var statearr_37802 = state_37719;
(statearr_37802[(18)] = inst_37589);

(statearr_37802[(14)] = inst_37569__$1);

(statearr_37802[(15)] = inst_37570__$1);

(statearr_37802[(16)] = inst_37571__$1);

(statearr_37802[(17)] = inst_37572__$1);

return statearr_37802;
})();
var statearr_37803_40186 = state_37719__$1;
(statearr_37803_40186[(2)] = null);

(statearr_37803_40186[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (21))){
var inst_37630 = (state_37719[(2)]);
var state_37719__$1 = state_37719;
var statearr_37809_40187 = state_37719__$1;
(statearr_37809_40187[(2)] = inst_37630);

(statearr_37809_40187[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (31))){
var inst_37660 = (state_37719[(11)]);
var inst_37668 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37660);
var state_37719__$1 = state_37719;
var statearr_37813_40188 = state_37719__$1;
(statearr_37813_40188[(2)] = inst_37668);

(statearr_37813_40188[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (32))){
var inst_37653 = (state_37719[(10)]);
var inst_37650 = (state_37719[(19)]);
var inst_37651 = (state_37719[(9)]);
var inst_37652 = (state_37719[(20)]);
var inst_37670 = (state_37719[(2)]);
var inst_37671 = (inst_37653 + (1));
var tmp37805 = inst_37650;
var tmp37806 = inst_37651;
var tmp37807 = inst_37652;
var inst_37650__$1 = tmp37805;
var inst_37651__$1 = tmp37806;
var inst_37652__$1 = tmp37807;
var inst_37653__$1 = inst_37671;
var state_37719__$1 = (function (){var statearr_37817 = state_37719;
(statearr_37817[(21)] = inst_37670);

(statearr_37817[(19)] = inst_37650__$1);

(statearr_37817[(9)] = inst_37651__$1);

(statearr_37817[(20)] = inst_37652__$1);

(statearr_37817[(10)] = inst_37653__$1);

return statearr_37817;
})();
var statearr_37818_40189 = state_37719__$1;
(statearr_37818_40189[(2)] = null);

(statearr_37818_40189[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (40))){
var inst_37684 = (state_37719[(22)]);
var inst_37689 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37684);
var state_37719__$1 = state_37719;
var statearr_37828_40193 = state_37719__$1;
(statearr_37828_40193[(2)] = inst_37689);

(statearr_37828_40193[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (33))){
var inst_37674 = (state_37719[(23)]);
var inst_37677 = cljs.core.chunked_seq_QMARK_(inst_37674);
var state_37719__$1 = state_37719;
if(inst_37677){
var statearr_37831_40194 = state_37719__$1;
(statearr_37831_40194[(1)] = (36));

} else {
var statearr_37832_40195 = state_37719__$1;
(statearr_37832_40195[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (13))){
var inst_37582 = (state_37719[(24)]);
var inst_37585 = cljs.core.async.close_BANG_(inst_37582);
var state_37719__$1 = state_37719;
var statearr_37833_40196 = state_37719__$1;
(statearr_37833_40196[(2)] = inst_37585);

(statearr_37833_40196[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (22))){
var inst_37619 = (state_37719[(8)]);
var inst_37623 = cljs.core.async.close_BANG_(inst_37619);
var state_37719__$1 = state_37719;
var statearr_37835_40197 = state_37719__$1;
(statearr_37835_40197[(2)] = inst_37623);

(statearr_37835_40197[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (36))){
var inst_37674 = (state_37719[(23)]);
var inst_37679 = cljs.core.chunk_first(inst_37674);
var inst_37680 = cljs.core.chunk_rest(inst_37674);
var inst_37681 = cljs.core.count(inst_37679);
var inst_37650 = inst_37680;
var inst_37651 = inst_37679;
var inst_37652 = inst_37681;
var inst_37653 = (0);
var state_37719__$1 = (function (){var statearr_37836 = state_37719;
(statearr_37836[(19)] = inst_37650);

(statearr_37836[(9)] = inst_37651);

(statearr_37836[(20)] = inst_37652);

(statearr_37836[(10)] = inst_37653);

return statearr_37836;
})();
var statearr_37837_40198 = state_37719__$1;
(statearr_37837_40198[(2)] = null);

(statearr_37837_40198[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (41))){
var inst_37674 = (state_37719[(23)]);
var inst_37691 = (state_37719[(2)]);
var inst_37693 = cljs.core.next(inst_37674);
var inst_37650 = inst_37693;
var inst_37651 = null;
var inst_37652 = (0);
var inst_37653 = (0);
var state_37719__$1 = (function (){var statearr_37840 = state_37719;
(statearr_37840[(25)] = inst_37691);

(statearr_37840[(19)] = inst_37650);

(statearr_37840[(9)] = inst_37651);

(statearr_37840[(20)] = inst_37652);

(statearr_37840[(10)] = inst_37653);

return statearr_37840;
})();
var statearr_37844_40199 = state_37719__$1;
(statearr_37844_40199[(2)] = null);

(statearr_37844_40199[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (43))){
var state_37719__$1 = state_37719;
var statearr_37847_40200 = state_37719__$1;
(statearr_37847_40200[(2)] = null);

(statearr_37847_40200[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (29))){
var inst_37701 = (state_37719[(2)]);
var state_37719__$1 = state_37719;
var statearr_37851_40201 = state_37719__$1;
(statearr_37851_40201[(2)] = inst_37701);

(statearr_37851_40201[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (44))){
var inst_37711 = (state_37719[(2)]);
var state_37719__$1 = (function (){var statearr_37853 = state_37719;
(statearr_37853[(26)] = inst_37711);

return statearr_37853;
})();
var statearr_37854_40202 = state_37719__$1;
(statearr_37854_40202[(2)] = null);

(statearr_37854_40202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (6))){
var inst_37640 = (state_37719[(27)]);
var inst_37639 = cljs.core.deref(cs);
var inst_37640__$1 = cljs.core.keys(inst_37639);
var inst_37641 = cljs.core.count(inst_37640__$1);
var inst_37642 = cljs.core.reset_BANG_(dctr,inst_37641);
var inst_37648 = cljs.core.seq(inst_37640__$1);
var inst_37650 = inst_37648;
var inst_37651 = null;
var inst_37652 = (0);
var inst_37653 = (0);
var state_37719__$1 = (function (){var statearr_37856 = state_37719;
(statearr_37856[(27)] = inst_37640__$1);

(statearr_37856[(28)] = inst_37642);

(statearr_37856[(19)] = inst_37650);

(statearr_37856[(9)] = inst_37651);

(statearr_37856[(20)] = inst_37652);

(statearr_37856[(10)] = inst_37653);

return statearr_37856;
})();
var statearr_37861_40203 = state_37719__$1;
(statearr_37861_40203[(2)] = null);

(statearr_37861_40203[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (28))){
var inst_37650 = (state_37719[(19)]);
var inst_37674 = (state_37719[(23)]);
var inst_37674__$1 = cljs.core.seq(inst_37650);
var state_37719__$1 = (function (){var statearr_37862 = state_37719;
(statearr_37862[(23)] = inst_37674__$1);

return statearr_37862;
})();
if(inst_37674__$1){
var statearr_37863_40204 = state_37719__$1;
(statearr_37863_40204[(1)] = (33));

} else {
var statearr_37864_40205 = state_37719__$1;
(statearr_37864_40205[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (25))){
var inst_37653 = (state_37719[(10)]);
var inst_37652 = (state_37719[(20)]);
var inst_37657 = (inst_37653 < inst_37652);
var inst_37658 = inst_37657;
var state_37719__$1 = state_37719;
if(cljs.core.truth_(inst_37658)){
var statearr_37865_40206 = state_37719__$1;
(statearr_37865_40206[(1)] = (27));

} else {
var statearr_37872_40207 = state_37719__$1;
(statearr_37872_40207[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (34))){
var state_37719__$1 = state_37719;
var statearr_37874_40208 = state_37719__$1;
(statearr_37874_40208[(2)] = null);

(statearr_37874_40208[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (17))){
var state_37719__$1 = state_37719;
var statearr_37875_40209 = state_37719__$1;
(statearr_37875_40209[(2)] = null);

(statearr_37875_40209[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (3))){
var inst_37717 = (state_37719[(2)]);
var state_37719__$1 = state_37719;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37719__$1,inst_37717);
} else {
if((state_val_37720 === (12))){
var inst_37635 = (state_37719[(2)]);
var state_37719__$1 = state_37719;
var statearr_37876_40210 = state_37719__$1;
(statearr_37876_40210[(2)] = inst_37635);

(statearr_37876_40210[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (2))){
var state_37719__$1 = state_37719;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37719__$1,(4),ch);
} else {
if((state_val_37720 === (23))){
var state_37719__$1 = state_37719;
var statearr_37877_40211 = state_37719__$1;
(statearr_37877_40211[(2)] = null);

(statearr_37877_40211[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (35))){
var inst_37699 = (state_37719[(2)]);
var state_37719__$1 = state_37719;
var statearr_37884_40212 = state_37719__$1;
(statearr_37884_40212[(2)] = inst_37699);

(statearr_37884_40212[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (19))){
var inst_37596 = (state_37719[(7)]);
var inst_37610 = cljs.core.chunk_first(inst_37596);
var inst_37611 = cljs.core.chunk_rest(inst_37596);
var inst_37612 = cljs.core.count(inst_37610);
var inst_37569 = inst_37611;
var inst_37570 = inst_37610;
var inst_37571 = inst_37612;
var inst_37572 = (0);
var state_37719__$1 = (function (){var statearr_37886 = state_37719;
(statearr_37886[(14)] = inst_37569);

(statearr_37886[(15)] = inst_37570);

(statearr_37886[(16)] = inst_37571);

(statearr_37886[(17)] = inst_37572);

return statearr_37886;
})();
var statearr_37892_40213 = state_37719__$1;
(statearr_37892_40213[(2)] = null);

(statearr_37892_40213[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (11))){
var inst_37569 = (state_37719[(14)]);
var inst_37596 = (state_37719[(7)]);
var inst_37596__$1 = cljs.core.seq(inst_37569);
var state_37719__$1 = (function (){var statearr_37893 = state_37719;
(statearr_37893[(7)] = inst_37596__$1);

return statearr_37893;
})();
if(inst_37596__$1){
var statearr_37894_40214 = state_37719__$1;
(statearr_37894_40214[(1)] = (16));

} else {
var statearr_37896_40215 = state_37719__$1;
(statearr_37896_40215[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (9))){
var inst_37637 = (state_37719[(2)]);
var state_37719__$1 = state_37719;
var statearr_37898_40216 = state_37719__$1;
(statearr_37898_40216[(2)] = inst_37637);

(statearr_37898_40216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (5))){
var inst_37567 = cljs.core.deref(cs);
var inst_37568 = cljs.core.seq(inst_37567);
var inst_37569 = inst_37568;
var inst_37570 = null;
var inst_37571 = (0);
var inst_37572 = (0);
var state_37719__$1 = (function (){var statearr_37905 = state_37719;
(statearr_37905[(14)] = inst_37569);

(statearr_37905[(15)] = inst_37570);

(statearr_37905[(16)] = inst_37571);

(statearr_37905[(17)] = inst_37572);

return statearr_37905;
})();
var statearr_37906_40217 = state_37719__$1;
(statearr_37906_40217[(2)] = null);

(statearr_37906_40217[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (14))){
var state_37719__$1 = state_37719;
var statearr_37913_40218 = state_37719__$1;
(statearr_37913_40218[(2)] = null);

(statearr_37913_40218[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (45))){
var inst_37707 = (state_37719[(2)]);
var state_37719__$1 = state_37719;
var statearr_37914_40219 = state_37719__$1;
(statearr_37914_40219[(2)] = inst_37707);

(statearr_37914_40219[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (26))){
var inst_37640 = (state_37719[(27)]);
var inst_37703 = (state_37719[(2)]);
var inst_37704 = cljs.core.seq(inst_37640);
var state_37719__$1 = (function (){var statearr_37915 = state_37719;
(statearr_37915[(29)] = inst_37703);

return statearr_37915;
})();
if(inst_37704){
var statearr_37916_40220 = state_37719__$1;
(statearr_37916_40220[(1)] = (42));

} else {
var statearr_37917_40221 = state_37719__$1;
(statearr_37917_40221[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (16))){
var inst_37596 = (state_37719[(7)]);
var inst_37600 = cljs.core.chunked_seq_QMARK_(inst_37596);
var state_37719__$1 = state_37719;
if(inst_37600){
var statearr_37919_40222 = state_37719__$1;
(statearr_37919_40222[(1)] = (19));

} else {
var statearr_37920_40223 = state_37719__$1;
(statearr_37920_40223[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (38))){
var inst_37696 = (state_37719[(2)]);
var state_37719__$1 = state_37719;
var statearr_37925_40224 = state_37719__$1;
(statearr_37925_40224[(2)] = inst_37696);

(statearr_37925_40224[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (30))){
var state_37719__$1 = state_37719;
var statearr_37926_40225 = state_37719__$1;
(statearr_37926_40225[(2)] = null);

(statearr_37926_40225[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (10))){
var inst_37570 = (state_37719[(15)]);
var inst_37572 = (state_37719[(17)]);
var inst_37580 = cljs.core._nth(inst_37570,inst_37572);
var inst_37582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37580,(0),null);
var inst_37583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37580,(1),null);
var state_37719__$1 = (function (){var statearr_37927 = state_37719;
(statearr_37927[(24)] = inst_37582);

return statearr_37927;
})();
if(cljs.core.truth_(inst_37583)){
var statearr_37931_40226 = state_37719__$1;
(statearr_37931_40226[(1)] = (13));

} else {
var statearr_37932_40227 = state_37719__$1;
(statearr_37932_40227[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (18))){
var inst_37633 = (state_37719[(2)]);
var state_37719__$1 = state_37719;
var statearr_37933_40228 = state_37719__$1;
(statearr_37933_40228[(2)] = inst_37633);

(statearr_37933_40228[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (42))){
var state_37719__$1 = state_37719;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37719__$1,(45),dchan);
} else {
if((state_val_37720 === (37))){
var inst_37674 = (state_37719[(23)]);
var inst_37684 = (state_37719[(22)]);
var inst_37560 = (state_37719[(12)]);
var inst_37684__$1 = cljs.core.first(inst_37674);
var inst_37685 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37684__$1,inst_37560,done);
var state_37719__$1 = (function (){var statearr_37950 = state_37719;
(statearr_37950[(22)] = inst_37684__$1);

return statearr_37950;
})();
if(cljs.core.truth_(inst_37685)){
var statearr_37951_40229 = state_37719__$1;
(statearr_37951_40229[(1)] = (39));

} else {
var statearr_37952_40230 = state_37719__$1;
(statearr_37952_40230[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (8))){
var inst_37572 = (state_37719[(17)]);
var inst_37571 = (state_37719[(16)]);
var inst_37574 = (inst_37572 < inst_37571);
var inst_37575 = inst_37574;
var state_37719__$1 = state_37719;
if(cljs.core.truth_(inst_37575)){
var statearr_37955_40231 = state_37719__$1;
(statearr_37955_40231[(1)] = (10));

} else {
var statearr_37956_40232 = state_37719__$1;
(statearr_37956_40232[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__36199__auto__ = null;
var cljs$core$async$mult_$_state_machine__36199__auto____0 = (function (){
var statearr_37957 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37957[(0)] = cljs$core$async$mult_$_state_machine__36199__auto__);

(statearr_37957[(1)] = (1));

return statearr_37957;
});
var cljs$core$async$mult_$_state_machine__36199__auto____1 = (function (state_37719){
while(true){
var ret_value__36200__auto__ = (function (){try{while(true){
var result__36201__auto__ = switch__36198__auto__(state_37719);
if(cljs.core.keyword_identical_QMARK_(result__36201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36201__auto__;
}
break;
}
}catch (e37959){var ex__36202__auto__ = e37959;
var statearr_37960_40233 = state_37719;
(statearr_37960_40233[(2)] = ex__36202__auto__);


if(cljs.core.seq((state_37719[(4)]))){
var statearr_37961_40234 = state_37719;
(statearr_37961_40234[(1)] = cljs.core.first((state_37719[(4)])));

} else {
throw ex__36202__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40235 = state_37719;
state_37719 = G__40235;
continue;
} else {
return ret_value__36200__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__36199__auto__ = function(state_37719){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__36199__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__36199__auto____1.call(this,state_37719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__36199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__36199__auto____0;
cljs$core$async$mult_$_state_machine__36199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__36199__auto____1;
return cljs$core$async$mult_$_state_machine__36199__auto__;
})()
})();
var state__36442__auto__ = (function (){var statearr_37965 = f__36441__auto__();
(statearr_37965[(6)] = c__36440__auto___40173);

return statearr_37965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36442__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__37969 = arguments.length;
switch (G__37969) {
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

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_40237 = (function (m,ch){
var x__5346__auto__ = (((m == null))?null:m);
var m__5347__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5347__auto__.call(null,m,ch));
} else {
var m__5345__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5345__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_40237(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_40238 = (function (m,ch){
var x__5346__auto__ = (((m == null))?null:m);
var m__5347__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5347__auto__.call(null,m,ch));
} else {
var m__5345__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5345__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_40238(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_40239 = (function (m){
var x__5346__auto__ = (((m == null))?null:m);
var m__5347__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5347__auto__.call(null,m));
} else {
var m__5345__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5345__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_40239(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_40241 = (function (m,state_map){
var x__5346__auto__ = (((m == null))?null:m);
var m__5347__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5347__auto__.call(null,m,state_map));
} else {
var m__5345__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5345__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_40241(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_40242 = (function (m,mode){
var x__5346__auto__ = (((m == null))?null:m);
var m__5347__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5347__auto__.call(null,m,mode));
} else {
var m__5345__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5345__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_40242(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5728__auto__ = [];
var len__5722__auto___40243 = arguments.length;
var i__5723__auto___40244 = (0);
while(true){
if((i__5723__auto___40244 < len__5722__auto___40243)){
args__5728__auto__.push((arguments[i__5723__auto___40244]));

var G__40245 = (i__5723__auto___40244 + (1));
i__5723__auto___40244 = G__40245;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((3) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5729__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__38022){
var map__38024 = p__38022;
var map__38024__$1 = cljs.core.__destructure_map(map__38024);
var opts = map__38024__$1;
var statearr_38025_40246 = state;
(statearr_38025_40246[(1)] = cont_block);


var temp__5816__auto__ = cljs.core.async.do_alts((function (val){
var statearr_38026_40248 = state;
(statearr_38026_40248[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5816__auto__)){
var cb = temp__5816__auto__;
var statearr_38029_40249 = state;
(statearr_38029_40249[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq38015){
var G__38016 = cljs.core.first(seq38015);
var seq38015__$1 = cljs.core.next(seq38015);
var G__38017 = cljs.core.first(seq38015__$1);
var seq38015__$2 = cljs.core.next(seq38015__$1);
var G__38018 = cljs.core.first(seq38015__$2);
var seq38015__$3 = cljs.core.next(seq38015__$2);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38016,G__38017,G__38018,seq38015__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38038 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta38039){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta38039 = meta38039;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38040,meta38039__$1){
var self__ = this;
var _38040__$1 = this;
return (new cljs.core.async.t_cljs$core$async38038(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta38039__$1));
}));

(cljs.core.async.t_cljs$core$async38038.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38040){
var self__ = this;
var _38040__$1 = this;
return self__.meta38039;
}));

(cljs.core.async.t_cljs$core$async38038.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38038.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async38038.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38038.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38038.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38038.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38038.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38038.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38038.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta38039","meta38039",595677393,null)], null);
}));

(cljs.core.async.t_cljs$core$async38038.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38038.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38038");

(cljs.core.async.t_cljs$core$async38038.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"cljs.core.async/t_cljs$core$async38038");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38038.
 */
cljs.core.async.__GT_t_cljs$core$async38038 = (function cljs$core$async$__GT_t_cljs$core$async38038(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta38039){
return (new cljs.core.async.t_cljs$core$async38038(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta38039));
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async38038(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__36440__auto___40263 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36441__auto__ = (function (){var switch__36198__auto__ = (function (state_38143){
var state_val_38144 = (state_38143[(1)]);
if((state_val_38144 === (7))){
var inst_38099 = (state_38143[(2)]);
var state_38143__$1 = state_38143;
if(cljs.core.truth_(inst_38099)){
var statearr_38146_40264 = state_38143__$1;
(statearr_38146_40264[(1)] = (8));

} else {
var statearr_38147_40265 = state_38143__$1;
(statearr_38147_40265[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38144 === (20))){
var inst_38092 = (state_38143[(7)]);
var state_38143__$1 = state_38143;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38143__$1,(23),out,inst_38092);
} else {
if((state_val_38144 === (1))){
var inst_38065 = calc_state();
var inst_38066 = cljs.core.__destructure_map(inst_38065);
var inst_38067 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38066,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38069 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38066,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38070 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38066,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_38071 = inst_38065;
var state_38143__$1 = (function (){var statearr_38149 = state_38143;
(statearr_38149[(8)] = inst_38067);

(statearr_38149[(9)] = inst_38069);

(statearr_38149[(10)] = inst_38070);

(statearr_38149[(11)] = inst_38071);

return statearr_38149;
})();
var statearr_38150_40266 = state_38143__$1;
(statearr_38150_40266[(2)] = null);

(statearr_38150_40266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38144 === (24))){
var inst_38077 = (state_38143[(12)]);
var inst_38071 = inst_38077;
var state_38143__$1 = (function (){var statearr_38152 = state_38143;
(statearr_38152[(11)] = inst_38071);

return statearr_38152;
})();
var statearr_38153_40267 = state_38143__$1;
(statearr_38153_40267[(2)] = null);

(statearr_38153_40267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38144 === (4))){
var inst_38092 = (state_38143[(7)]);
var inst_38094 = (state_38143[(13)]);
var inst_38091 = (state_38143[(2)]);
var inst_38092__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38091,(0),null);
var inst_38093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38091,(1),null);
var inst_38094__$1 = (inst_38092__$1 == null);
var state_38143__$1 = (function (){var statearr_38154 = state_38143;
(statearr_38154[(7)] = inst_38092__$1);

(statearr_38154[(14)] = inst_38093);

(statearr_38154[(13)] = inst_38094__$1);

return statearr_38154;
})();
if(cljs.core.truth_(inst_38094__$1)){
var statearr_38155_40268 = state_38143__$1;
(statearr_38155_40268[(1)] = (5));

} else {
var statearr_38156_40269 = state_38143__$1;
(statearr_38156_40269[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38144 === (15))){
var inst_38081 = (state_38143[(15)]);
var inst_38113 = (state_38143[(16)]);
var inst_38113__$1 = cljs.core.empty_QMARK_(inst_38081);
var state_38143__$1 = (function (){var statearr_38157 = state_38143;
(statearr_38157[(16)] = inst_38113__$1);

return statearr_38157;
})();
if(inst_38113__$1){
var statearr_38158_40270 = state_38143__$1;
(statearr_38158_40270[(1)] = (17));

} else {
var statearr_38159_40271 = state_38143__$1;
(statearr_38159_40271[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38144 === (21))){
var inst_38077 = (state_38143[(12)]);
var inst_38071 = inst_38077;
var state_38143__$1 = (function (){var statearr_38160 = state_38143;
(statearr_38160[(11)] = inst_38071);

return statearr_38160;
})();
var statearr_38162_40272 = state_38143__$1;
(statearr_38162_40272[(2)] = null);

(statearr_38162_40272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38144 === (13))){
var inst_38106 = (state_38143[(2)]);
var inst_38107 = calc_state();
var inst_38071 = inst_38107;
var state_38143__$1 = (function (){var statearr_38163 = state_38143;
(statearr_38163[(17)] = inst_38106);

(statearr_38163[(11)] = inst_38071);

return statearr_38163;
})();
var statearr_38164_40274 = state_38143__$1;
(statearr_38164_40274[(2)] = null);

(statearr_38164_40274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38144 === (22))){
var inst_38133 = (state_38143[(2)]);
var state_38143__$1 = state_38143;
var statearr_38165_40275 = state_38143__$1;
(statearr_38165_40275[(2)] = inst_38133);

(statearr_38165_40275[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38144 === (6))){
var inst_38093 = (state_38143[(14)]);
var inst_38097 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38093,change);
var state_38143__$1 = state_38143;
var statearr_38166_40276 = state_38143__$1;
(statearr_38166_40276[(2)] = inst_38097);

(statearr_38166_40276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38144 === (25))){
var state_38143__$1 = state_38143;
var statearr_38167_40277 = state_38143__$1;
(statearr_38167_40277[(2)] = null);

(statearr_38167_40277[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38144 === (17))){
var inst_38082 = (state_38143[(18)]);
var inst_38093 = (state_38143[(14)]);
var inst_38115 = (inst_38082.cljs$core$IFn$_invoke$arity$1 ? inst_38082.cljs$core$IFn$_invoke$arity$1(inst_38093) : inst_38082.call(null,inst_38093));
var inst_38116 = cljs.core.not(inst_38115);
var state_38143__$1 = state_38143;
var statearr_38169_40278 = state_38143__$1;
(statearr_38169_40278[(2)] = inst_38116);

(statearr_38169_40278[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38144 === (3))){
var inst_38137 = (state_38143[(2)]);
var state_38143__$1 = state_38143;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38143__$1,inst_38137);
} else {
if((state_val_38144 === (12))){
var state_38143__$1 = state_38143;
var statearr_38172_40279 = state_38143__$1;
(statearr_38172_40279[(2)] = null);

(statearr_38172_40279[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38144 === (2))){
var inst_38071 = (state_38143[(11)]);
var inst_38077 = (state_38143[(12)]);
var inst_38077__$1 = cljs.core.__destructure_map(inst_38071);
var inst_38081 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38077__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38082 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38077__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38086 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38077__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_38143__$1 = (function (){var statearr_38176 = state_38143;
(statearr_38176[(12)] = inst_38077__$1);

(statearr_38176[(15)] = inst_38081);

(statearr_38176[(18)] = inst_38082);

return statearr_38176;
})();
return cljs.core.async.ioc_alts_BANG_(state_38143__$1,(4),inst_38086);
} else {
if((state_val_38144 === (23))){
var inst_38124 = (state_38143[(2)]);
var state_38143__$1 = state_38143;
if(cljs.core.truth_(inst_38124)){
var statearr_38177_40280 = state_38143__$1;
(statearr_38177_40280[(1)] = (24));

} else {
var statearr_38179_40281 = state_38143__$1;
(statearr_38179_40281[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38144 === (19))){
var inst_38119 = (state_38143[(2)]);
var state_38143__$1 = state_38143;
var statearr_38181_40284 = state_38143__$1;
(statearr_38181_40284[(2)] = inst_38119);

(statearr_38181_40284[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38144 === (11))){
var inst_38093 = (state_38143[(14)]);
var inst_38103 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_38093);
var state_38143__$1 = state_38143;
var statearr_38183_40285 = state_38143__$1;
(statearr_38183_40285[(2)] = inst_38103);

(statearr_38183_40285[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38144 === (9))){
var inst_38081 = (state_38143[(15)]);
var inst_38093 = (state_38143[(14)]);
var inst_38110 = (state_38143[(19)]);
var inst_38110__$1 = (inst_38081.cljs$core$IFn$_invoke$arity$1 ? inst_38081.cljs$core$IFn$_invoke$arity$1(inst_38093) : inst_38081.call(null,inst_38093));
var state_38143__$1 = (function (){var statearr_38184 = state_38143;
(statearr_38184[(19)] = inst_38110__$1);

return statearr_38184;
})();
if(cljs.core.truth_(inst_38110__$1)){
var statearr_38185_40290 = state_38143__$1;
(statearr_38185_40290[(1)] = (14));

} else {
var statearr_38186_40291 = state_38143__$1;
(statearr_38186_40291[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38144 === (5))){
var inst_38094 = (state_38143[(13)]);
var state_38143__$1 = state_38143;
var statearr_38187_40292 = state_38143__$1;
(statearr_38187_40292[(2)] = inst_38094);

(statearr_38187_40292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38144 === (14))){
var inst_38110 = (state_38143[(19)]);
var state_38143__$1 = state_38143;
var statearr_38189_40293 = state_38143__$1;
(statearr_38189_40293[(2)] = inst_38110);

(statearr_38189_40293[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38144 === (26))){
var inst_38129 = (state_38143[(2)]);
var state_38143__$1 = state_38143;
var statearr_38190_40294 = state_38143__$1;
(statearr_38190_40294[(2)] = inst_38129);

(statearr_38190_40294[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38144 === (16))){
var inst_38121 = (state_38143[(2)]);
var state_38143__$1 = state_38143;
if(cljs.core.truth_(inst_38121)){
var statearr_38191_40297 = state_38143__$1;
(statearr_38191_40297[(1)] = (20));

} else {
var statearr_38192_40298 = state_38143__$1;
(statearr_38192_40298[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38144 === (10))){
var inst_38135 = (state_38143[(2)]);
var state_38143__$1 = state_38143;
var statearr_38193_40299 = state_38143__$1;
(statearr_38193_40299[(2)] = inst_38135);

(statearr_38193_40299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38144 === (18))){
var inst_38113 = (state_38143[(16)]);
var state_38143__$1 = state_38143;
var statearr_38194_40300 = state_38143__$1;
(statearr_38194_40300[(2)] = inst_38113);

(statearr_38194_40300[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38144 === (8))){
var inst_38092 = (state_38143[(7)]);
var inst_38101 = (inst_38092 == null);
var state_38143__$1 = state_38143;
if(cljs.core.truth_(inst_38101)){
var statearr_38196_40301 = state_38143__$1;
(statearr_38196_40301[(1)] = (11));

} else {
var statearr_38197_40302 = state_38143__$1;
(statearr_38197_40302[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__36199__auto__ = null;
var cljs$core$async$mix_$_state_machine__36199__auto____0 = (function (){
var statearr_38202 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38202[(0)] = cljs$core$async$mix_$_state_machine__36199__auto__);

(statearr_38202[(1)] = (1));

return statearr_38202;
});
var cljs$core$async$mix_$_state_machine__36199__auto____1 = (function (state_38143){
while(true){
var ret_value__36200__auto__ = (function (){try{while(true){
var result__36201__auto__ = switch__36198__auto__(state_38143);
if(cljs.core.keyword_identical_QMARK_(result__36201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36201__auto__;
}
break;
}
}catch (e38203){var ex__36202__auto__ = e38203;
var statearr_38204_40303 = state_38143;
(statearr_38204_40303[(2)] = ex__36202__auto__);


if(cljs.core.seq((state_38143[(4)]))){
var statearr_38206_40304 = state_38143;
(statearr_38206_40304[(1)] = cljs.core.first((state_38143[(4)])));

} else {
throw ex__36202__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40306 = state_38143;
state_38143 = G__40306;
continue;
} else {
return ret_value__36200__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__36199__auto__ = function(state_38143){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__36199__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__36199__auto____1.call(this,state_38143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__36199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__36199__auto____0;
cljs$core$async$mix_$_state_machine__36199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__36199__auto____1;
return cljs$core$async$mix_$_state_machine__36199__auto__;
})()
})();
var state__36442__auto__ = (function (){var statearr_38208 = f__36441__auto__();
(statearr_38208[(6)] = c__36440__auto___40263);

return statearr_38208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36442__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_40321 = (function (p,v,ch,close_QMARK_){
var x__5346__auto__ = (((p == null))?null:p);
var m__5347__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5347__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5345__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5345__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_40321(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_40327 = (function (p,v,ch){
var x__5346__auto__ = (((p == null))?null:p);
var m__5347__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5347__auto__.call(null,p,v,ch));
} else {
var m__5345__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5345__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_40327(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_40330 = (function() {
var G__40331 = null;
var G__40331__1 = (function (p){
var x__5346__auto__ = (((p == null))?null:p);
var m__5347__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5347__auto__.call(null,p));
} else {
var m__5345__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5345__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__40331__2 = (function (p,v){
var x__5346__auto__ = (((p == null))?null:p);
var m__5347__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5347__auto__.call(null,p,v));
} else {
var m__5345__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5345__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__40331 = function(p,v){
switch(arguments.length){
case 1:
return G__40331__1.call(this,p);
case 2:
return G__40331__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40331.cljs$core$IFn$_invoke$arity$1 = G__40331__1;
G__40331.cljs$core$IFn$_invoke$arity$2 = G__40331__2;
return G__40331;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__38239 = arguments.length;
switch (G__38239) {
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

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_40330(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_40330(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38258 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta38259){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta38259 = meta38259;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38260,meta38259__$1){
var self__ = this;
var _38260__$1 = this;
return (new cljs.core.async.t_cljs$core$async38258(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta38259__$1));
}));

(cljs.core.async.t_cljs$core$async38258.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38260){
var self__ = this;
var _38260__$1 = this;
return self__.meta38259;
}));

(cljs.core.async.t_cljs$core$async38258.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38258.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async38258.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38258.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async38258.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5816__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5816__auto__)){
var m = temp__5816__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async38258.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async38258.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async38258.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta38259","meta38259",-393859938,null)], null);
}));

(cljs.core.async.t_cljs$core$async38258.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38258.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38258");

(cljs.core.async.t_cljs$core$async38258.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"cljs.core.async/t_cljs$core$async38258");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38258.
 */
cljs.core.async.__GT_t_cljs$core$async38258 = (function cljs$core$async$__GT_t_cljs$core$async38258(ch,topic_fn,buf_fn,mults,ensure_mult,meta38259){
return (new cljs.core.async.t_cljs$core$async38258(ch,topic_fn,buf_fn,mults,ensure_mult,meta38259));
});


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
var G__38247 = arguments.length;
switch (G__38247) {
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

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4998__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__38243_SHARP_){
if(cljs.core.truth_((p1__38243_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__38243_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__38243_SHARP_.call(null,topic)))){
return p1__38243_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38243_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async38258(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__36440__auto___40336 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36441__auto__ = (function (){var switch__36198__auto__ = (function (state_38353){
var state_val_38354 = (state_38353[(1)]);
if((state_val_38354 === (7))){
var inst_38349 = (state_38353[(2)]);
var state_38353__$1 = state_38353;
var statearr_38356_40337 = state_38353__$1;
(statearr_38356_40337[(2)] = inst_38349);

(statearr_38356_40337[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38354 === (20))){
var state_38353__$1 = state_38353;
var statearr_38357_40338 = state_38353__$1;
(statearr_38357_40338[(2)] = null);

(statearr_38357_40338[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38354 === (1))){
var state_38353__$1 = state_38353;
var statearr_38358_40339 = state_38353__$1;
(statearr_38358_40339[(2)] = null);

(statearr_38358_40339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38354 === (24))){
var inst_38332 = (state_38353[(7)]);
var inst_38341 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_38332);
var state_38353__$1 = state_38353;
var statearr_38359_40340 = state_38353__$1;
(statearr_38359_40340[(2)] = inst_38341);

(statearr_38359_40340[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38354 === (4))){
var inst_38278 = (state_38353[(8)]);
var inst_38278__$1 = (state_38353[(2)]);
var inst_38279 = (inst_38278__$1 == null);
var state_38353__$1 = (function (){var statearr_38360 = state_38353;
(statearr_38360[(8)] = inst_38278__$1);

return statearr_38360;
})();
if(cljs.core.truth_(inst_38279)){
var statearr_38361_40341 = state_38353__$1;
(statearr_38361_40341[(1)] = (5));

} else {
var statearr_38362_40342 = state_38353__$1;
(statearr_38362_40342[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38354 === (15))){
var inst_38323 = (state_38353[(2)]);
var state_38353__$1 = state_38353;
var statearr_38363_40343 = state_38353__$1;
(statearr_38363_40343[(2)] = inst_38323);

(statearr_38363_40343[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38354 === (21))){
var inst_38346 = (state_38353[(2)]);
var state_38353__$1 = (function (){var statearr_38365 = state_38353;
(statearr_38365[(9)] = inst_38346);

return statearr_38365;
})();
var statearr_38366_40344 = state_38353__$1;
(statearr_38366_40344[(2)] = null);

(statearr_38366_40344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38354 === (13))){
var inst_38303 = (state_38353[(10)]);
var inst_38305 = cljs.core.chunked_seq_QMARK_(inst_38303);
var state_38353__$1 = state_38353;
if(inst_38305){
var statearr_38367_40345 = state_38353__$1;
(statearr_38367_40345[(1)] = (16));

} else {
var statearr_38368_40346 = state_38353__$1;
(statearr_38368_40346[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38354 === (22))){
var inst_38338 = (state_38353[(2)]);
var state_38353__$1 = state_38353;
if(cljs.core.truth_(inst_38338)){
var statearr_38369_40347 = state_38353__$1;
(statearr_38369_40347[(1)] = (23));

} else {
var statearr_38370_40348 = state_38353__$1;
(statearr_38370_40348[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38354 === (6))){
var inst_38278 = (state_38353[(8)]);
var inst_38332 = (state_38353[(7)]);
var inst_38334 = (state_38353[(11)]);
var inst_38332__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_38278) : topic_fn.call(null,inst_38278));
var inst_38333 = cljs.core.deref(mults);
var inst_38334__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38333,inst_38332__$1);
var state_38353__$1 = (function (){var statearr_38374 = state_38353;
(statearr_38374[(7)] = inst_38332__$1);

(statearr_38374[(11)] = inst_38334__$1);

return statearr_38374;
})();
if(cljs.core.truth_(inst_38334__$1)){
var statearr_38376_40350 = state_38353__$1;
(statearr_38376_40350[(1)] = (19));

} else {
var statearr_38377_40351 = state_38353__$1;
(statearr_38377_40351[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38354 === (25))){
var inst_38343 = (state_38353[(2)]);
var state_38353__$1 = state_38353;
var statearr_38379_40352 = state_38353__$1;
(statearr_38379_40352[(2)] = inst_38343);

(statearr_38379_40352[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38354 === (17))){
var inst_38303 = (state_38353[(10)]);
var inst_38313 = cljs.core.first(inst_38303);
var inst_38314 = cljs.core.async.muxch_STAR_(inst_38313);
var inst_38315 = cljs.core.async.close_BANG_(inst_38314);
var inst_38316 = cljs.core.next(inst_38303);
var inst_38288 = inst_38316;
var inst_38289 = null;
var inst_38290 = (0);
var inst_38291 = (0);
var state_38353__$1 = (function (){var statearr_38383 = state_38353;
(statearr_38383[(12)] = inst_38315);

(statearr_38383[(13)] = inst_38288);

(statearr_38383[(14)] = inst_38289);

(statearr_38383[(15)] = inst_38290);

(statearr_38383[(16)] = inst_38291);

return statearr_38383;
})();
var statearr_38384_40353 = state_38353__$1;
(statearr_38384_40353[(2)] = null);

(statearr_38384_40353[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38354 === (3))){
var inst_38351 = (state_38353[(2)]);
var state_38353__$1 = state_38353;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38353__$1,inst_38351);
} else {
if((state_val_38354 === (12))){
var inst_38325 = (state_38353[(2)]);
var state_38353__$1 = state_38353;
var statearr_38385_40354 = state_38353__$1;
(statearr_38385_40354[(2)] = inst_38325);

(statearr_38385_40354[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38354 === (2))){
var state_38353__$1 = state_38353;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38353__$1,(4),ch);
} else {
if((state_val_38354 === (23))){
var state_38353__$1 = state_38353;
var statearr_38387_40355 = state_38353__$1;
(statearr_38387_40355[(2)] = null);

(statearr_38387_40355[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38354 === (19))){
var inst_38334 = (state_38353[(11)]);
var inst_38278 = (state_38353[(8)]);
var inst_38336 = cljs.core.async.muxch_STAR_(inst_38334);
var state_38353__$1 = state_38353;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38353__$1,(22),inst_38336,inst_38278);
} else {
if((state_val_38354 === (11))){
var inst_38288 = (state_38353[(13)]);
var inst_38303 = (state_38353[(10)]);
var inst_38303__$1 = cljs.core.seq(inst_38288);
var state_38353__$1 = (function (){var statearr_38388 = state_38353;
(statearr_38388[(10)] = inst_38303__$1);

return statearr_38388;
})();
if(inst_38303__$1){
var statearr_38389_40357 = state_38353__$1;
(statearr_38389_40357[(1)] = (13));

} else {
var statearr_38390_40358 = state_38353__$1;
(statearr_38390_40358[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38354 === (9))){
var inst_38327 = (state_38353[(2)]);
var state_38353__$1 = state_38353;
var statearr_38392_40368 = state_38353__$1;
(statearr_38392_40368[(2)] = inst_38327);

(statearr_38392_40368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38354 === (5))){
var inst_38285 = cljs.core.deref(mults);
var inst_38286 = cljs.core.vals(inst_38285);
var inst_38287 = cljs.core.seq(inst_38286);
var inst_38288 = inst_38287;
var inst_38289 = null;
var inst_38290 = (0);
var inst_38291 = (0);
var state_38353__$1 = (function (){var statearr_38393 = state_38353;
(statearr_38393[(13)] = inst_38288);

(statearr_38393[(14)] = inst_38289);

(statearr_38393[(15)] = inst_38290);

(statearr_38393[(16)] = inst_38291);

return statearr_38393;
})();
var statearr_38394_40372 = state_38353__$1;
(statearr_38394_40372[(2)] = null);

(statearr_38394_40372[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38354 === (14))){
var state_38353__$1 = state_38353;
var statearr_38401_40373 = state_38353__$1;
(statearr_38401_40373[(2)] = null);

(statearr_38401_40373[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38354 === (16))){
var inst_38303 = (state_38353[(10)]);
var inst_38308 = cljs.core.chunk_first(inst_38303);
var inst_38309 = cljs.core.chunk_rest(inst_38303);
var inst_38310 = cljs.core.count(inst_38308);
var inst_38288 = inst_38309;
var inst_38289 = inst_38308;
var inst_38290 = inst_38310;
var inst_38291 = (0);
var state_38353__$1 = (function (){var statearr_38404 = state_38353;
(statearr_38404[(13)] = inst_38288);

(statearr_38404[(14)] = inst_38289);

(statearr_38404[(15)] = inst_38290);

(statearr_38404[(16)] = inst_38291);

return statearr_38404;
})();
var statearr_38405_40378 = state_38353__$1;
(statearr_38405_40378[(2)] = null);

(statearr_38405_40378[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38354 === (10))){
var inst_38289 = (state_38353[(14)]);
var inst_38291 = (state_38353[(16)]);
var inst_38288 = (state_38353[(13)]);
var inst_38290 = (state_38353[(15)]);
var inst_38296 = cljs.core._nth(inst_38289,inst_38291);
var inst_38297 = cljs.core.async.muxch_STAR_(inst_38296);
var inst_38298 = cljs.core.async.close_BANG_(inst_38297);
var inst_38300 = (inst_38291 + (1));
var tmp38396 = inst_38288;
var tmp38397 = inst_38289;
var tmp38398 = inst_38290;
var inst_38288__$1 = tmp38396;
var inst_38289__$1 = tmp38397;
var inst_38290__$1 = tmp38398;
var inst_38291__$1 = inst_38300;
var state_38353__$1 = (function (){var statearr_38406 = state_38353;
(statearr_38406[(17)] = inst_38298);

(statearr_38406[(13)] = inst_38288__$1);

(statearr_38406[(14)] = inst_38289__$1);

(statearr_38406[(15)] = inst_38290__$1);

(statearr_38406[(16)] = inst_38291__$1);

return statearr_38406;
})();
var statearr_38412_40385 = state_38353__$1;
(statearr_38412_40385[(2)] = null);

(statearr_38412_40385[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38354 === (18))){
var inst_38319 = (state_38353[(2)]);
var state_38353__$1 = state_38353;
var statearr_38415_40386 = state_38353__$1;
(statearr_38415_40386[(2)] = inst_38319);

(statearr_38415_40386[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38354 === (8))){
var inst_38291 = (state_38353[(16)]);
var inst_38290 = (state_38353[(15)]);
var inst_38293 = (inst_38291 < inst_38290);
var inst_38294 = inst_38293;
var state_38353__$1 = state_38353;
if(cljs.core.truth_(inst_38294)){
var statearr_38416_40387 = state_38353__$1;
(statearr_38416_40387[(1)] = (10));

} else {
var statearr_38417_40388 = state_38353__$1;
(statearr_38417_40388[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__36199__auto__ = null;
var cljs$core$async$state_machine__36199__auto____0 = (function (){
var statearr_38418 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38418[(0)] = cljs$core$async$state_machine__36199__auto__);

(statearr_38418[(1)] = (1));

return statearr_38418;
});
var cljs$core$async$state_machine__36199__auto____1 = (function (state_38353){
while(true){
var ret_value__36200__auto__ = (function (){try{while(true){
var result__36201__auto__ = switch__36198__auto__(state_38353);
if(cljs.core.keyword_identical_QMARK_(result__36201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36201__auto__;
}
break;
}
}catch (e38419){var ex__36202__auto__ = e38419;
var statearr_38421_40389 = state_38353;
(statearr_38421_40389[(2)] = ex__36202__auto__);


if(cljs.core.seq((state_38353[(4)]))){
var statearr_38422_40390 = state_38353;
(statearr_38422_40390[(1)] = cljs.core.first((state_38353[(4)])));

} else {
throw ex__36202__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40391 = state_38353;
state_38353 = G__40391;
continue;
} else {
return ret_value__36200__auto__;
}
break;
}
});
cljs$core$async$state_machine__36199__auto__ = function(state_38353){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36199__auto____1.call(this,state_38353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36199__auto____0;
cljs$core$async$state_machine__36199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36199__auto____1;
return cljs$core$async$state_machine__36199__auto__;
})()
})();
var state__36442__auto__ = (function (){var statearr_38423 = f__36441__auto__();
(statearr_38423[(6)] = c__36440__auto___40336);

return statearr_38423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36442__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__38431 = arguments.length;
switch (G__38431) {
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

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__38434 = arguments.length;
switch (G__38434) {
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

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__38438 = arguments.length;
switch (G__38438) {
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

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__36440__auto___40395 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36441__auto__ = (function (){var switch__36198__auto__ = (function (state_38505){
var state_val_38506 = (state_38505[(1)]);
if((state_val_38506 === (7))){
var state_38505__$1 = state_38505;
var statearr_38510_40396 = state_38505__$1;
(statearr_38510_40396[(2)] = null);

(statearr_38510_40396[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38506 === (1))){
var state_38505__$1 = state_38505;
var statearr_38511_40397 = state_38505__$1;
(statearr_38511_40397[(2)] = null);

(statearr_38511_40397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38506 === (4))){
var inst_38451 = (state_38505[(7)]);
var inst_38450 = (state_38505[(8)]);
var inst_38453 = (inst_38451 < inst_38450);
var state_38505__$1 = state_38505;
if(cljs.core.truth_(inst_38453)){
var statearr_38512_40398 = state_38505__$1;
(statearr_38512_40398[(1)] = (6));

} else {
var statearr_38513_40399 = state_38505__$1;
(statearr_38513_40399[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38506 === (15))){
var inst_38488 = (state_38505[(9)]);
var inst_38493 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_38488);
var state_38505__$1 = state_38505;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38505__$1,(17),out,inst_38493);
} else {
if((state_val_38506 === (13))){
var inst_38488 = (state_38505[(9)]);
var inst_38488__$1 = (state_38505[(2)]);
var inst_38489 = cljs.core.some(cljs.core.nil_QMARK_,inst_38488__$1);
var state_38505__$1 = (function (){var statearr_38519 = state_38505;
(statearr_38519[(9)] = inst_38488__$1);

return statearr_38519;
})();
if(cljs.core.truth_(inst_38489)){
var statearr_38522_40400 = state_38505__$1;
(statearr_38522_40400[(1)] = (14));

} else {
var statearr_38523_40401 = state_38505__$1;
(statearr_38523_40401[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38506 === (6))){
var state_38505__$1 = state_38505;
var statearr_38524_40402 = state_38505__$1;
(statearr_38524_40402[(2)] = null);

(statearr_38524_40402[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38506 === (17))){
var inst_38495 = (state_38505[(2)]);
var state_38505__$1 = (function (){var statearr_38542 = state_38505;
(statearr_38542[(10)] = inst_38495);

return statearr_38542;
})();
var statearr_38543_40403 = state_38505__$1;
(statearr_38543_40403[(2)] = null);

(statearr_38543_40403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38506 === (3))){
var inst_38500 = (state_38505[(2)]);
var state_38505__$1 = state_38505;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38505__$1,inst_38500);
} else {
if((state_val_38506 === (12))){
var _ = (function (){var statearr_38546 = state_38505;
(statearr_38546[(4)] = cljs.core.rest((state_38505[(4)])));

return statearr_38546;
})();
var state_38505__$1 = state_38505;
var ex38540 = (state_38505__$1[(2)]);
var statearr_38549_40404 = state_38505__$1;
(statearr_38549_40404[(5)] = ex38540);


if((ex38540 instanceof Object)){
var statearr_38550_40405 = state_38505__$1;
(statearr_38550_40405[(1)] = (11));

(statearr_38550_40405[(5)] = null);

} else {
throw ex38540;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38506 === (2))){
var inst_38445 = cljs.core.reset_BANG_(dctr,cnt);
var inst_38450 = cnt;
var inst_38451 = (0);
var state_38505__$1 = (function (){var statearr_38555 = state_38505;
(statearr_38555[(11)] = inst_38445);

(statearr_38555[(8)] = inst_38450);

(statearr_38555[(7)] = inst_38451);

return statearr_38555;
})();
var statearr_38556_40406 = state_38505__$1;
(statearr_38556_40406[(2)] = null);

(statearr_38556_40406[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38506 === (11))){
var inst_38462 = (state_38505[(2)]);
var inst_38464 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_38505__$1 = (function (){var statearr_38561 = state_38505;
(statearr_38561[(12)] = inst_38462);

return statearr_38561;
})();
var statearr_38562_40407 = state_38505__$1;
(statearr_38562_40407[(2)] = inst_38464);

(statearr_38562_40407[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38506 === (9))){
var inst_38451 = (state_38505[(7)]);
var _ = (function (){var statearr_38577 = state_38505;
(statearr_38577[(4)] = cljs.core.cons((12),(state_38505[(4)])));

return statearr_38577;
})();
var inst_38474 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_38451) : chs__$1.call(null,inst_38451));
var inst_38475 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_38451) : done.call(null,inst_38451));
var inst_38476 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_38474,inst_38475);
var ___$1 = (function (){var statearr_38580 = state_38505;
(statearr_38580[(4)] = cljs.core.rest((state_38505[(4)])));

return statearr_38580;
})();
var state_38505__$1 = state_38505;
var statearr_38582_40408 = state_38505__$1;
(statearr_38582_40408[(2)] = inst_38476);

(statearr_38582_40408[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38506 === (5))){
var inst_38486 = (state_38505[(2)]);
var state_38505__$1 = (function (){var statearr_38589 = state_38505;
(statearr_38589[(13)] = inst_38486);

return statearr_38589;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38505__$1,(13),dchan);
} else {
if((state_val_38506 === (14))){
var inst_38491 = cljs.core.async.close_BANG_(out);
var state_38505__$1 = state_38505;
var statearr_38590_40409 = state_38505__$1;
(statearr_38590_40409[(2)] = inst_38491);

(statearr_38590_40409[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38506 === (16))){
var inst_38498 = (state_38505[(2)]);
var state_38505__$1 = state_38505;
var statearr_38592_40410 = state_38505__$1;
(statearr_38592_40410[(2)] = inst_38498);

(statearr_38592_40410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38506 === (10))){
var inst_38451 = (state_38505[(7)]);
var inst_38479 = (state_38505[(2)]);
var inst_38480 = (inst_38451 + (1));
var inst_38451__$1 = inst_38480;
var state_38505__$1 = (function (){var statearr_38595 = state_38505;
(statearr_38595[(14)] = inst_38479);

(statearr_38595[(7)] = inst_38451__$1);

return statearr_38595;
})();
var statearr_38598_40411 = state_38505__$1;
(statearr_38598_40411[(2)] = null);

(statearr_38598_40411[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38506 === (8))){
var inst_38484 = (state_38505[(2)]);
var state_38505__$1 = state_38505;
var statearr_38600_40412 = state_38505__$1;
(statearr_38600_40412[(2)] = inst_38484);

(statearr_38600_40412[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__36199__auto__ = null;
var cljs$core$async$state_machine__36199__auto____0 = (function (){
var statearr_38604 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38604[(0)] = cljs$core$async$state_machine__36199__auto__);

(statearr_38604[(1)] = (1));

return statearr_38604;
});
var cljs$core$async$state_machine__36199__auto____1 = (function (state_38505){
while(true){
var ret_value__36200__auto__ = (function (){try{while(true){
var result__36201__auto__ = switch__36198__auto__(state_38505);
if(cljs.core.keyword_identical_QMARK_(result__36201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36201__auto__;
}
break;
}
}catch (e38606){var ex__36202__auto__ = e38606;
var statearr_38607_40413 = state_38505;
(statearr_38607_40413[(2)] = ex__36202__auto__);


if(cljs.core.seq((state_38505[(4)]))){
var statearr_38609_40414 = state_38505;
(statearr_38609_40414[(1)] = cljs.core.first((state_38505[(4)])));

} else {
throw ex__36202__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40415 = state_38505;
state_38505 = G__40415;
continue;
} else {
return ret_value__36200__auto__;
}
break;
}
});
cljs$core$async$state_machine__36199__auto__ = function(state_38505){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36199__auto____1.call(this,state_38505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36199__auto____0;
cljs$core$async$state_machine__36199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36199__auto____1;
return cljs$core$async$state_machine__36199__auto__;
})()
})();
var state__36442__auto__ = (function (){var statearr_38613 = f__36441__auto__();
(statearr_38613[(6)] = c__36440__auto___40395);

return statearr_38613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36442__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__38621 = arguments.length;
switch (G__38621) {
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

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36440__auto___40417 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36441__auto__ = (function (){var switch__36198__auto__ = (function (state_38667){
var state_val_38668 = (state_38667[(1)]);
if((state_val_38668 === (7))){
var inst_38639 = (state_38667[(7)]);
var inst_38640 = (state_38667[(8)]);
var inst_38639__$1 = (state_38667[(2)]);
var inst_38640__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38639__$1,(0),null);
var inst_38641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38639__$1,(1),null);
var inst_38643 = (inst_38640__$1 == null);
var state_38667__$1 = (function (){var statearr_38675 = state_38667;
(statearr_38675[(7)] = inst_38639__$1);

(statearr_38675[(8)] = inst_38640__$1);

(statearr_38675[(9)] = inst_38641);

return statearr_38675;
})();
if(cljs.core.truth_(inst_38643)){
var statearr_38679_40418 = state_38667__$1;
(statearr_38679_40418[(1)] = (8));

} else {
var statearr_38680_40419 = state_38667__$1;
(statearr_38680_40419[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38668 === (1))){
var inst_38627 = cljs.core.vec(chs);
var inst_38628 = inst_38627;
var state_38667__$1 = (function (){var statearr_38683 = state_38667;
(statearr_38683[(10)] = inst_38628);

return statearr_38683;
})();
var statearr_38684_40420 = state_38667__$1;
(statearr_38684_40420[(2)] = null);

(statearr_38684_40420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38668 === (4))){
var inst_38628 = (state_38667[(10)]);
var state_38667__$1 = state_38667;
return cljs.core.async.ioc_alts_BANG_(state_38667__$1,(7),inst_38628);
} else {
if((state_val_38668 === (6))){
var inst_38661 = (state_38667[(2)]);
var state_38667__$1 = state_38667;
var statearr_38690_40421 = state_38667__$1;
(statearr_38690_40421[(2)] = inst_38661);

(statearr_38690_40421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38668 === (3))){
var inst_38663 = (state_38667[(2)]);
var state_38667__$1 = state_38667;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38667__$1,inst_38663);
} else {
if((state_val_38668 === (2))){
var inst_38628 = (state_38667[(10)]);
var inst_38631 = cljs.core.count(inst_38628);
var inst_38632 = (inst_38631 > (0));
var state_38667__$1 = state_38667;
if(cljs.core.truth_(inst_38632)){
var statearr_38699_40422 = state_38667__$1;
(statearr_38699_40422[(1)] = (4));

} else {
var statearr_38700_40423 = state_38667__$1;
(statearr_38700_40423[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38668 === (11))){
var inst_38628 = (state_38667[(10)]);
var inst_38653 = (state_38667[(2)]);
var tmp38695 = inst_38628;
var inst_38628__$1 = tmp38695;
var state_38667__$1 = (function (){var statearr_38703 = state_38667;
(statearr_38703[(11)] = inst_38653);

(statearr_38703[(10)] = inst_38628__$1);

return statearr_38703;
})();
var statearr_38704_40424 = state_38667__$1;
(statearr_38704_40424[(2)] = null);

(statearr_38704_40424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38668 === (9))){
var inst_38640 = (state_38667[(8)]);
var state_38667__$1 = state_38667;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38667__$1,(11),out,inst_38640);
} else {
if((state_val_38668 === (5))){
var inst_38659 = cljs.core.async.close_BANG_(out);
var state_38667__$1 = state_38667;
var statearr_38715_40425 = state_38667__$1;
(statearr_38715_40425[(2)] = inst_38659);

(statearr_38715_40425[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38668 === (10))){
var inst_38657 = (state_38667[(2)]);
var state_38667__$1 = state_38667;
var statearr_38717_40426 = state_38667__$1;
(statearr_38717_40426[(2)] = inst_38657);

(statearr_38717_40426[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38668 === (8))){
var inst_38628 = (state_38667[(10)]);
var inst_38639 = (state_38667[(7)]);
var inst_38640 = (state_38667[(8)]);
var inst_38641 = (state_38667[(9)]);
var inst_38646 = (function (){var cs = inst_38628;
var vec__38634 = inst_38639;
var v = inst_38640;
var c = inst_38641;
return (function (p1__38617_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__38617_SHARP_);
});
})();
var inst_38647 = cljs.core.filterv(inst_38646,inst_38628);
var inst_38628__$1 = inst_38647;
var state_38667__$1 = (function (){var statearr_38721 = state_38667;
(statearr_38721[(10)] = inst_38628__$1);

return statearr_38721;
})();
var statearr_38723_40427 = state_38667__$1;
(statearr_38723_40427[(2)] = null);

(statearr_38723_40427[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__36199__auto__ = null;
var cljs$core$async$state_machine__36199__auto____0 = (function (){
var statearr_38727 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38727[(0)] = cljs$core$async$state_machine__36199__auto__);

(statearr_38727[(1)] = (1));

return statearr_38727;
});
var cljs$core$async$state_machine__36199__auto____1 = (function (state_38667){
while(true){
var ret_value__36200__auto__ = (function (){try{while(true){
var result__36201__auto__ = switch__36198__auto__(state_38667);
if(cljs.core.keyword_identical_QMARK_(result__36201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36201__auto__;
}
break;
}
}catch (e38728){var ex__36202__auto__ = e38728;
var statearr_38729_40428 = state_38667;
(statearr_38729_40428[(2)] = ex__36202__auto__);


if(cljs.core.seq((state_38667[(4)]))){
var statearr_38730_40429 = state_38667;
(statearr_38730_40429[(1)] = cljs.core.first((state_38667[(4)])));

} else {
throw ex__36202__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40430 = state_38667;
state_38667 = G__40430;
continue;
} else {
return ret_value__36200__auto__;
}
break;
}
});
cljs$core$async$state_machine__36199__auto__ = function(state_38667){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36199__auto____1.call(this,state_38667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36199__auto____0;
cljs$core$async$state_machine__36199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36199__auto____1;
return cljs$core$async$state_machine__36199__auto__;
})()
})();
var state__36442__auto__ = (function (){var statearr_38737 = f__36441__auto__();
(statearr_38737[(6)] = c__36440__auto___40417);

return statearr_38737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36442__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__38748 = arguments.length;
switch (G__38748) {
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

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36440__auto___40432 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36441__auto__ = (function (){var switch__36198__auto__ = (function (state_38781){
var state_val_38783 = (state_38781[(1)]);
if((state_val_38783 === (7))){
var inst_38761 = (state_38781[(7)]);
var inst_38761__$1 = (state_38781[(2)]);
var inst_38763 = (inst_38761__$1 == null);
var inst_38764 = cljs.core.not(inst_38763);
var state_38781__$1 = (function (){var statearr_38799 = state_38781;
(statearr_38799[(7)] = inst_38761__$1);

return statearr_38799;
})();
if(inst_38764){
var statearr_38800_40433 = state_38781__$1;
(statearr_38800_40433[(1)] = (8));

} else {
var statearr_38801_40434 = state_38781__$1;
(statearr_38801_40434[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38783 === (1))){
var inst_38755 = (0);
var state_38781__$1 = (function (){var statearr_38805 = state_38781;
(statearr_38805[(8)] = inst_38755);

return statearr_38805;
})();
var statearr_38809_40435 = state_38781__$1;
(statearr_38809_40435[(2)] = null);

(statearr_38809_40435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38783 === (4))){
var state_38781__$1 = state_38781;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38781__$1,(7),ch);
} else {
if((state_val_38783 === (6))){
var inst_38775 = (state_38781[(2)]);
var state_38781__$1 = state_38781;
var statearr_38810_40436 = state_38781__$1;
(statearr_38810_40436[(2)] = inst_38775);

(statearr_38810_40436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38783 === (3))){
var inst_38777 = (state_38781[(2)]);
var inst_38778 = cljs.core.async.close_BANG_(out);
var state_38781__$1 = (function (){var statearr_38811 = state_38781;
(statearr_38811[(9)] = inst_38777);

return statearr_38811;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38781__$1,inst_38778);
} else {
if((state_val_38783 === (2))){
var inst_38755 = (state_38781[(8)]);
var inst_38757 = (inst_38755 < n);
var state_38781__$1 = state_38781;
if(cljs.core.truth_(inst_38757)){
var statearr_38812_40437 = state_38781__$1;
(statearr_38812_40437[(1)] = (4));

} else {
var statearr_38813_40438 = state_38781__$1;
(statearr_38813_40438[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38783 === (11))){
var inst_38755 = (state_38781[(8)]);
var inst_38767 = (state_38781[(2)]);
var inst_38768 = (inst_38755 + (1));
var inst_38755__$1 = inst_38768;
var state_38781__$1 = (function (){var statearr_38815 = state_38781;
(statearr_38815[(10)] = inst_38767);

(statearr_38815[(8)] = inst_38755__$1);

return statearr_38815;
})();
var statearr_38816_40439 = state_38781__$1;
(statearr_38816_40439[(2)] = null);

(statearr_38816_40439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38783 === (9))){
var state_38781__$1 = state_38781;
var statearr_38817_40440 = state_38781__$1;
(statearr_38817_40440[(2)] = null);

(statearr_38817_40440[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38783 === (5))){
var state_38781__$1 = state_38781;
var statearr_38818_40441 = state_38781__$1;
(statearr_38818_40441[(2)] = null);

(statearr_38818_40441[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38783 === (10))){
var inst_38772 = (state_38781[(2)]);
var state_38781__$1 = state_38781;
var statearr_38819_40442 = state_38781__$1;
(statearr_38819_40442[(2)] = inst_38772);

(statearr_38819_40442[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38783 === (8))){
var inst_38761 = (state_38781[(7)]);
var state_38781__$1 = state_38781;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38781__$1,(11),out,inst_38761);
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
});
return (function() {
var cljs$core$async$state_machine__36199__auto__ = null;
var cljs$core$async$state_machine__36199__auto____0 = (function (){
var statearr_38826 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38826[(0)] = cljs$core$async$state_machine__36199__auto__);

(statearr_38826[(1)] = (1));

return statearr_38826;
});
var cljs$core$async$state_machine__36199__auto____1 = (function (state_38781){
while(true){
var ret_value__36200__auto__ = (function (){try{while(true){
var result__36201__auto__ = switch__36198__auto__(state_38781);
if(cljs.core.keyword_identical_QMARK_(result__36201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36201__auto__;
}
break;
}
}catch (e38828){var ex__36202__auto__ = e38828;
var statearr_38830_40443 = state_38781;
(statearr_38830_40443[(2)] = ex__36202__auto__);


if(cljs.core.seq((state_38781[(4)]))){
var statearr_38831_40444 = state_38781;
(statearr_38831_40444[(1)] = cljs.core.first((state_38781[(4)])));

} else {
throw ex__36202__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40445 = state_38781;
state_38781 = G__40445;
continue;
} else {
return ret_value__36200__auto__;
}
break;
}
});
cljs$core$async$state_machine__36199__auto__ = function(state_38781){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36199__auto____1.call(this,state_38781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36199__auto____0;
cljs$core$async$state_machine__36199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36199__auto____1;
return cljs$core$async$state_machine__36199__auto__;
})()
})();
var state__36442__auto__ = (function (){var statearr_38836 = f__36441__auto__();
(statearr_38836[(6)] = c__36440__auto___40432);

return statearr_38836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36442__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38861 = (function (f,ch,meta38844,_,fn1,meta38862){
this.f = f;
this.ch = ch;
this.meta38844 = meta38844;
this._ = _;
this.fn1 = fn1;
this.meta38862 = meta38862;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38863,meta38862__$1){
var self__ = this;
var _38863__$1 = this;
return (new cljs.core.async.t_cljs$core$async38861(self__.f,self__.ch,self__.meta38844,self__._,self__.fn1,meta38862__$1));
}));

(cljs.core.async.t_cljs$core$async38861.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38863){
var self__ = this;
var _38863__$1 = this;
return self__.meta38862;
}));

(cljs.core.async.t_cljs$core$async38861.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38861.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async38861.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38861.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__38838_SHARP_){
var G__38887 = (((p1__38838_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__38838_SHARP_) : self__.f.call(null,p1__38838_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__38887) : f1.call(null,G__38887));
});
}));

(cljs.core.async.t_cljs$core$async38861.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38844","meta38844",-1127419038,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async38843","cljs.core.async/t_cljs$core$async38843",981704868,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta38862","meta38862",70303555,null)], null);
}));

(cljs.core.async.t_cljs$core$async38861.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38861.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38861");

(cljs.core.async.t_cljs$core$async38861.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"cljs.core.async/t_cljs$core$async38861");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38861.
 */
cljs.core.async.__GT_t_cljs$core$async38861 = (function cljs$core$async$__GT_t_cljs$core$async38861(f,ch,meta38844,_,fn1,meta38862){
return (new cljs.core.async.t_cljs$core$async38861(f,ch,meta38844,_,fn1,meta38862));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38843 = (function (f,ch,meta38844){
this.f = f;
this.ch = ch;
this.meta38844 = meta38844;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38845,meta38844__$1){
var self__ = this;
var _38845__$1 = this;
return (new cljs.core.async.t_cljs$core$async38843(self__.f,self__.ch,meta38844__$1));
}));

(cljs.core.async.t_cljs$core$async38843.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38845){
var self__ = this;
var _38845__$1 = this;
return self__.meta38844;
}));

(cljs.core.async.t_cljs$core$async38843.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38843.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38843.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38843.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38843.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async38861(self__.f,self__.ch,self__.meta38844,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__4996__auto__ = ret;
if(cljs.core.truth_(and__4996__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4996__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__38899 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__38899) : self__.f.call(null,G__38899));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async38843.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38843.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async38843.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38844","meta38844",-1127419038,null)], null);
}));

(cljs.core.async.t_cljs$core$async38843.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38843.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38843");

(cljs.core.async.t_cljs$core$async38843.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"cljs.core.async/t_cljs$core$async38843");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38843.
 */
cljs.core.async.__GT_t_cljs$core$async38843 = (function cljs$core$async$__GT_t_cljs$core$async38843(f,ch,meta38844){
return (new cljs.core.async.t_cljs$core$async38843(f,ch,meta38844));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async38843(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38920 = (function (f,ch,meta38921){
this.f = f;
this.ch = ch;
this.meta38921 = meta38921;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38922,meta38921__$1){
var self__ = this;
var _38922__$1 = this;
return (new cljs.core.async.t_cljs$core$async38920(self__.f,self__.ch,meta38921__$1));
}));

(cljs.core.async.t_cljs$core$async38920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38922){
var self__ = this;
var _38922__$1 = this;
return self__.meta38921;
}));

(cljs.core.async.t_cljs$core$async38920.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38920.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38920.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38920.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async38920.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38920.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async38920.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38921","meta38921",464179592,null)], null);
}));

(cljs.core.async.t_cljs$core$async38920.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38920.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38920");

(cljs.core.async.t_cljs$core$async38920.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"cljs.core.async/t_cljs$core$async38920");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38920.
 */
cljs.core.async.__GT_t_cljs$core$async38920 = (function cljs$core$async$__GT_t_cljs$core$async38920(f,ch,meta38921){
return (new cljs.core.async.t_cljs$core$async38920(f,ch,meta38921));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async38920(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39009 = (function (p,ch,meta39010){
this.p = p;
this.ch = ch;
this.meta39010 = meta39010;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39011,meta39010__$1){
var self__ = this;
var _39011__$1 = this;
return (new cljs.core.async.t_cljs$core$async39009(self__.p,self__.ch,meta39010__$1));
}));

(cljs.core.async.t_cljs$core$async39009.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39011){
var self__ = this;
var _39011__$1 = this;
return self__.meta39010;
}));

(cljs.core.async.t_cljs$core$async39009.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39009.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39009.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39009.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39009.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async39009.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39009.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async39009.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39010","meta39010",1843629403,null)], null);
}));

(cljs.core.async.t_cljs$core$async39009.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39009.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39009");

(cljs.core.async.t_cljs$core$async39009.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"cljs.core.async/t_cljs$core$async39009");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39009.
 */
cljs.core.async.__GT_t_cljs$core$async39009 = (function cljs$core$async$__GT_t_cljs$core$async39009(p,ch,meta39010){
return (new cljs.core.async.t_cljs$core$async39009(p,ch,meta39010));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async39009(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__39039 = arguments.length;
switch (G__39039) {
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

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36440__auto___40459 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36441__auto__ = (function (){var switch__36198__auto__ = (function (state_39060){
var state_val_39061 = (state_39060[(1)]);
if((state_val_39061 === (7))){
var inst_39056 = (state_39060[(2)]);
var state_39060__$1 = state_39060;
var statearr_39067_40460 = state_39060__$1;
(statearr_39067_40460[(2)] = inst_39056);

(statearr_39067_40460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39061 === (1))){
var state_39060__$1 = state_39060;
var statearr_39068_40461 = state_39060__$1;
(statearr_39068_40461[(2)] = null);

(statearr_39068_40461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39061 === (4))){
var inst_39042 = (state_39060[(7)]);
var inst_39042__$1 = (state_39060[(2)]);
var inst_39043 = (inst_39042__$1 == null);
var state_39060__$1 = (function (){var statearr_39069 = state_39060;
(statearr_39069[(7)] = inst_39042__$1);

return statearr_39069;
})();
if(cljs.core.truth_(inst_39043)){
var statearr_39070_40462 = state_39060__$1;
(statearr_39070_40462[(1)] = (5));

} else {
var statearr_39071_40463 = state_39060__$1;
(statearr_39071_40463[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39061 === (6))){
var inst_39042 = (state_39060[(7)]);
var inst_39047 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_39042) : p.call(null,inst_39042));
var state_39060__$1 = state_39060;
if(cljs.core.truth_(inst_39047)){
var statearr_39072_40464 = state_39060__$1;
(statearr_39072_40464[(1)] = (8));

} else {
var statearr_39073_40465 = state_39060__$1;
(statearr_39073_40465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39061 === (3))){
var inst_39058 = (state_39060[(2)]);
var state_39060__$1 = state_39060;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39060__$1,inst_39058);
} else {
if((state_val_39061 === (2))){
var state_39060__$1 = state_39060;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39060__$1,(4),ch);
} else {
if((state_val_39061 === (11))){
var inst_39050 = (state_39060[(2)]);
var state_39060__$1 = state_39060;
var statearr_39083_40466 = state_39060__$1;
(statearr_39083_40466[(2)] = inst_39050);

(statearr_39083_40466[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39061 === (9))){
var state_39060__$1 = state_39060;
var statearr_39092_40467 = state_39060__$1;
(statearr_39092_40467[(2)] = null);

(statearr_39092_40467[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39061 === (5))){
var inst_39045 = cljs.core.async.close_BANG_(out);
var state_39060__$1 = state_39060;
var statearr_39093_40468 = state_39060__$1;
(statearr_39093_40468[(2)] = inst_39045);

(statearr_39093_40468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39061 === (10))){
var inst_39053 = (state_39060[(2)]);
var state_39060__$1 = (function (){var statearr_39094 = state_39060;
(statearr_39094[(8)] = inst_39053);

return statearr_39094;
})();
var statearr_39095_40469 = state_39060__$1;
(statearr_39095_40469[(2)] = null);

(statearr_39095_40469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39061 === (8))){
var inst_39042 = (state_39060[(7)]);
var state_39060__$1 = state_39060;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39060__$1,(11),out,inst_39042);
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
});
return (function() {
var cljs$core$async$state_machine__36199__auto__ = null;
var cljs$core$async$state_machine__36199__auto____0 = (function (){
var statearr_39132 = [null,null,null,null,null,null,null,null,null];
(statearr_39132[(0)] = cljs$core$async$state_machine__36199__auto__);

(statearr_39132[(1)] = (1));

return statearr_39132;
});
var cljs$core$async$state_machine__36199__auto____1 = (function (state_39060){
while(true){
var ret_value__36200__auto__ = (function (){try{while(true){
var result__36201__auto__ = switch__36198__auto__(state_39060);
if(cljs.core.keyword_identical_QMARK_(result__36201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36201__auto__;
}
break;
}
}catch (e39133){var ex__36202__auto__ = e39133;
var statearr_39135_40476 = state_39060;
(statearr_39135_40476[(2)] = ex__36202__auto__);


if(cljs.core.seq((state_39060[(4)]))){
var statearr_39136_40477 = state_39060;
(statearr_39136_40477[(1)] = cljs.core.first((state_39060[(4)])));

} else {
throw ex__36202__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40478 = state_39060;
state_39060 = G__40478;
continue;
} else {
return ret_value__36200__auto__;
}
break;
}
});
cljs$core$async$state_machine__36199__auto__ = function(state_39060){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36199__auto____1.call(this,state_39060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36199__auto____0;
cljs$core$async$state_machine__36199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36199__auto____1;
return cljs$core$async$state_machine__36199__auto__;
})()
})();
var state__36442__auto__ = (function (){var statearr_39138 = f__36441__auto__();
(statearr_39138[(6)] = c__36440__auto___40459);

return statearr_39138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36442__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__39140 = arguments.length;
switch (G__39140) {
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

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__36440__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36441__auto__ = (function (){var switch__36198__auto__ = (function (state_39218){
var state_val_39219 = (state_39218[(1)]);
if((state_val_39219 === (7))){
var inst_39212 = (state_39218[(2)]);
var state_39218__$1 = state_39218;
var statearr_39221_40480 = state_39218__$1;
(statearr_39221_40480[(2)] = inst_39212);

(statearr_39221_40480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39219 === (20))){
var inst_39178 = (state_39218[(7)]);
var inst_39193 = (state_39218[(2)]);
var inst_39194 = cljs.core.next(inst_39178);
var inst_39163 = inst_39194;
var inst_39164 = null;
var inst_39165 = (0);
var inst_39166 = (0);
var state_39218__$1 = (function (){var statearr_39225 = state_39218;
(statearr_39225[(8)] = inst_39193);

(statearr_39225[(9)] = inst_39163);

(statearr_39225[(10)] = inst_39164);

(statearr_39225[(11)] = inst_39165);

(statearr_39225[(12)] = inst_39166);

return statearr_39225;
})();
var statearr_39226_40482 = state_39218__$1;
(statearr_39226_40482[(2)] = null);

(statearr_39226_40482[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39219 === (1))){
var state_39218__$1 = state_39218;
var statearr_39227_40487 = state_39218__$1;
(statearr_39227_40487[(2)] = null);

(statearr_39227_40487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39219 === (4))){
var inst_39148 = (state_39218[(13)]);
var inst_39148__$1 = (state_39218[(2)]);
var inst_39150 = (inst_39148__$1 == null);
var state_39218__$1 = (function (){var statearr_39229 = state_39218;
(statearr_39229[(13)] = inst_39148__$1);

return statearr_39229;
})();
if(cljs.core.truth_(inst_39150)){
var statearr_39230_40488 = state_39218__$1;
(statearr_39230_40488[(1)] = (5));

} else {
var statearr_39231_40489 = state_39218__$1;
(statearr_39231_40489[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39219 === (15))){
var state_39218__$1 = state_39218;
var statearr_39236_40490 = state_39218__$1;
(statearr_39236_40490[(2)] = null);

(statearr_39236_40490[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39219 === (21))){
var state_39218__$1 = state_39218;
var statearr_39237_40491 = state_39218__$1;
(statearr_39237_40491[(2)] = null);

(statearr_39237_40491[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39219 === (13))){
var inst_39166 = (state_39218[(12)]);
var inst_39163 = (state_39218[(9)]);
var inst_39164 = (state_39218[(10)]);
var inst_39165 = (state_39218[(11)]);
var inst_39173 = (state_39218[(2)]);
var inst_39175 = (inst_39166 + (1));
var tmp39232 = inst_39164;
var tmp39233 = inst_39165;
var tmp39234 = inst_39163;
var inst_39163__$1 = tmp39234;
var inst_39164__$1 = tmp39232;
var inst_39165__$1 = tmp39233;
var inst_39166__$1 = inst_39175;
var state_39218__$1 = (function (){var statearr_39249 = state_39218;
(statearr_39249[(14)] = inst_39173);

(statearr_39249[(9)] = inst_39163__$1);

(statearr_39249[(10)] = inst_39164__$1);

(statearr_39249[(11)] = inst_39165__$1);

(statearr_39249[(12)] = inst_39166__$1);

return statearr_39249;
})();
var statearr_39250_40492 = state_39218__$1;
(statearr_39250_40492[(2)] = null);

(statearr_39250_40492[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39219 === (22))){
var state_39218__$1 = state_39218;
var statearr_39251_40493 = state_39218__$1;
(statearr_39251_40493[(2)] = null);

(statearr_39251_40493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39219 === (6))){
var inst_39148 = (state_39218[(13)]);
var inst_39161 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_39148) : f.call(null,inst_39148));
var inst_39162 = cljs.core.seq(inst_39161);
var inst_39163 = inst_39162;
var inst_39164 = null;
var inst_39165 = (0);
var inst_39166 = (0);
var state_39218__$1 = (function (){var statearr_39252 = state_39218;
(statearr_39252[(9)] = inst_39163);

(statearr_39252[(10)] = inst_39164);

(statearr_39252[(11)] = inst_39165);

(statearr_39252[(12)] = inst_39166);

return statearr_39252;
})();
var statearr_39253_40494 = state_39218__$1;
(statearr_39253_40494[(2)] = null);

(statearr_39253_40494[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39219 === (17))){
var inst_39178 = (state_39218[(7)]);
var inst_39186 = cljs.core.chunk_first(inst_39178);
var inst_39187 = cljs.core.chunk_rest(inst_39178);
var inst_39188 = cljs.core.count(inst_39186);
var inst_39163 = inst_39187;
var inst_39164 = inst_39186;
var inst_39165 = inst_39188;
var inst_39166 = (0);
var state_39218__$1 = (function (){var statearr_39254 = state_39218;
(statearr_39254[(9)] = inst_39163);

(statearr_39254[(10)] = inst_39164);

(statearr_39254[(11)] = inst_39165);

(statearr_39254[(12)] = inst_39166);

return statearr_39254;
})();
var statearr_39255_40495 = state_39218__$1;
(statearr_39255_40495[(2)] = null);

(statearr_39255_40495[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39219 === (3))){
var inst_39215 = (state_39218[(2)]);
var state_39218__$1 = state_39218;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39218__$1,inst_39215);
} else {
if((state_val_39219 === (12))){
var inst_39202 = (state_39218[(2)]);
var state_39218__$1 = state_39218;
var statearr_39265_40496 = state_39218__$1;
(statearr_39265_40496[(2)] = inst_39202);

(statearr_39265_40496[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39219 === (2))){
var state_39218__$1 = state_39218;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39218__$1,(4),in$);
} else {
if((state_val_39219 === (23))){
var inst_39210 = (state_39218[(2)]);
var state_39218__$1 = state_39218;
var statearr_39269_40497 = state_39218__$1;
(statearr_39269_40497[(2)] = inst_39210);

(statearr_39269_40497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39219 === (19))){
var inst_39197 = (state_39218[(2)]);
var state_39218__$1 = state_39218;
var statearr_39270_40498 = state_39218__$1;
(statearr_39270_40498[(2)] = inst_39197);

(statearr_39270_40498[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39219 === (11))){
var inst_39163 = (state_39218[(9)]);
var inst_39178 = (state_39218[(7)]);
var inst_39178__$1 = cljs.core.seq(inst_39163);
var state_39218__$1 = (function (){var statearr_39271 = state_39218;
(statearr_39271[(7)] = inst_39178__$1);

return statearr_39271;
})();
if(inst_39178__$1){
var statearr_39272_40499 = state_39218__$1;
(statearr_39272_40499[(1)] = (14));

} else {
var statearr_39274_40500 = state_39218__$1;
(statearr_39274_40500[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39219 === (9))){
var inst_39204 = (state_39218[(2)]);
var inst_39205 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_39218__$1 = (function (){var statearr_39275 = state_39218;
(statearr_39275[(15)] = inst_39204);

return statearr_39275;
})();
if(cljs.core.truth_(inst_39205)){
var statearr_39276_40501 = state_39218__$1;
(statearr_39276_40501[(1)] = (21));

} else {
var statearr_39277_40502 = state_39218__$1;
(statearr_39277_40502[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39219 === (5))){
var inst_39155 = cljs.core.async.close_BANG_(out);
var state_39218__$1 = state_39218;
var statearr_39278_40503 = state_39218__$1;
(statearr_39278_40503[(2)] = inst_39155);

(statearr_39278_40503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39219 === (14))){
var inst_39178 = (state_39218[(7)]);
var inst_39182 = cljs.core.chunked_seq_QMARK_(inst_39178);
var state_39218__$1 = state_39218;
if(inst_39182){
var statearr_39280_40504 = state_39218__$1;
(statearr_39280_40504[(1)] = (17));

} else {
var statearr_39281_40505 = state_39218__$1;
(statearr_39281_40505[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39219 === (16))){
var inst_39200 = (state_39218[(2)]);
var state_39218__$1 = state_39218;
var statearr_39283_40506 = state_39218__$1;
(statearr_39283_40506[(2)] = inst_39200);

(statearr_39283_40506[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39219 === (10))){
var inst_39164 = (state_39218[(10)]);
var inst_39166 = (state_39218[(12)]);
var inst_39171 = cljs.core._nth(inst_39164,inst_39166);
var state_39218__$1 = state_39218;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39218__$1,(13),out,inst_39171);
} else {
if((state_val_39219 === (18))){
var inst_39178 = (state_39218[(7)]);
var inst_39191 = cljs.core.first(inst_39178);
var state_39218__$1 = state_39218;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39218__$1,(20),out,inst_39191);
} else {
if((state_val_39219 === (8))){
var inst_39166 = (state_39218[(12)]);
var inst_39165 = (state_39218[(11)]);
var inst_39168 = (inst_39166 < inst_39165);
var inst_39169 = inst_39168;
var state_39218__$1 = state_39218;
if(cljs.core.truth_(inst_39169)){
var statearr_39290_40507 = state_39218__$1;
(statearr_39290_40507[(1)] = (10));

} else {
var statearr_39291_40508 = state_39218__$1;
(statearr_39291_40508[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__36199__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__36199__auto____0 = (function (){
var statearr_39292 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39292[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__36199__auto__);

(statearr_39292[(1)] = (1));

return statearr_39292;
});
var cljs$core$async$mapcat_STAR__$_state_machine__36199__auto____1 = (function (state_39218){
while(true){
var ret_value__36200__auto__ = (function (){try{while(true){
var result__36201__auto__ = switch__36198__auto__(state_39218);
if(cljs.core.keyword_identical_QMARK_(result__36201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36201__auto__;
}
break;
}
}catch (e39293){var ex__36202__auto__ = e39293;
var statearr_39294_40509 = state_39218;
(statearr_39294_40509[(2)] = ex__36202__auto__);


if(cljs.core.seq((state_39218[(4)]))){
var statearr_39295_40510 = state_39218;
(statearr_39295_40510[(1)] = cljs.core.first((state_39218[(4)])));

} else {
throw ex__36202__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40511 = state_39218;
state_39218 = G__40511;
continue;
} else {
return ret_value__36200__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__36199__auto__ = function(state_39218){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__36199__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__36199__auto____1.call(this,state_39218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__36199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__36199__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__36199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__36199__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__36199__auto__;
})()
})();
var state__36442__auto__ = (function (){var statearr_39296 = f__36441__auto__();
(statearr_39296[(6)] = c__36440__auto__);

return statearr_39296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36442__auto__);
}));

return c__36440__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__39298 = arguments.length;
switch (G__39298) {
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

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__39303 = arguments.length;
switch (G__39303) {
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

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__39310 = arguments.length;
switch (G__39310) {
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

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36440__auto___40515 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36441__auto__ = (function (){var switch__36198__auto__ = (function (state_39336){
var state_val_39337 = (state_39336[(1)]);
if((state_val_39337 === (7))){
var inst_39331 = (state_39336[(2)]);
var state_39336__$1 = state_39336;
var statearr_39350_40516 = state_39336__$1;
(statearr_39350_40516[(2)] = inst_39331);

(statearr_39350_40516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39337 === (1))){
var inst_39312 = null;
var state_39336__$1 = (function (){var statearr_39353 = state_39336;
(statearr_39353[(7)] = inst_39312);

return statearr_39353;
})();
var statearr_39354_40517 = state_39336__$1;
(statearr_39354_40517[(2)] = null);

(statearr_39354_40517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39337 === (4))){
var inst_39316 = (state_39336[(8)]);
var inst_39316__$1 = (state_39336[(2)]);
var inst_39317 = (inst_39316__$1 == null);
var inst_39318 = cljs.core.not(inst_39317);
var state_39336__$1 = (function (){var statearr_39358 = state_39336;
(statearr_39358[(8)] = inst_39316__$1);

return statearr_39358;
})();
if(inst_39318){
var statearr_39359_40520 = state_39336__$1;
(statearr_39359_40520[(1)] = (5));

} else {
var statearr_39360_40523 = state_39336__$1;
(statearr_39360_40523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39337 === (6))){
var state_39336__$1 = state_39336;
var statearr_39361_40524 = state_39336__$1;
(statearr_39361_40524[(2)] = null);

(statearr_39361_40524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39337 === (3))){
var inst_39333 = (state_39336[(2)]);
var inst_39334 = cljs.core.async.close_BANG_(out);
var state_39336__$1 = (function (){var statearr_39363 = state_39336;
(statearr_39363[(9)] = inst_39333);

return statearr_39363;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39336__$1,inst_39334);
} else {
if((state_val_39337 === (2))){
var state_39336__$1 = state_39336;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39336__$1,(4),ch);
} else {
if((state_val_39337 === (11))){
var inst_39316 = (state_39336[(8)]);
var inst_39325 = (state_39336[(2)]);
var inst_39312 = inst_39316;
var state_39336__$1 = (function (){var statearr_39369 = state_39336;
(statearr_39369[(10)] = inst_39325);

(statearr_39369[(7)] = inst_39312);

return statearr_39369;
})();
var statearr_39370_40525 = state_39336__$1;
(statearr_39370_40525[(2)] = null);

(statearr_39370_40525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39337 === (9))){
var inst_39316 = (state_39336[(8)]);
var state_39336__$1 = state_39336;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39336__$1,(11),out,inst_39316);
} else {
if((state_val_39337 === (5))){
var inst_39316 = (state_39336[(8)]);
var inst_39312 = (state_39336[(7)]);
var inst_39320 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39316,inst_39312);
var state_39336__$1 = state_39336;
if(inst_39320){
var statearr_39380_40526 = state_39336__$1;
(statearr_39380_40526[(1)] = (8));

} else {
var statearr_39381_40527 = state_39336__$1;
(statearr_39381_40527[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39337 === (10))){
var inst_39328 = (state_39336[(2)]);
var state_39336__$1 = state_39336;
var statearr_39382_40528 = state_39336__$1;
(statearr_39382_40528[(2)] = inst_39328);

(statearr_39382_40528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39337 === (8))){
var inst_39312 = (state_39336[(7)]);
var tmp39379 = inst_39312;
var inst_39312__$1 = tmp39379;
var state_39336__$1 = (function (){var statearr_39383 = state_39336;
(statearr_39383[(7)] = inst_39312__$1);

return statearr_39383;
})();
var statearr_39384_40529 = state_39336__$1;
(statearr_39384_40529[(2)] = null);

(statearr_39384_40529[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__36199__auto__ = null;
var cljs$core$async$state_machine__36199__auto____0 = (function (){
var statearr_39385 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39385[(0)] = cljs$core$async$state_machine__36199__auto__);

(statearr_39385[(1)] = (1));

return statearr_39385;
});
var cljs$core$async$state_machine__36199__auto____1 = (function (state_39336){
while(true){
var ret_value__36200__auto__ = (function (){try{while(true){
var result__36201__auto__ = switch__36198__auto__(state_39336);
if(cljs.core.keyword_identical_QMARK_(result__36201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36201__auto__;
}
break;
}
}catch (e39387){var ex__36202__auto__ = e39387;
var statearr_39392_40532 = state_39336;
(statearr_39392_40532[(2)] = ex__36202__auto__);


if(cljs.core.seq((state_39336[(4)]))){
var statearr_39393_40533 = state_39336;
(statearr_39393_40533[(1)] = cljs.core.first((state_39336[(4)])));

} else {
throw ex__36202__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40534 = state_39336;
state_39336 = G__40534;
continue;
} else {
return ret_value__36200__auto__;
}
break;
}
});
cljs$core$async$state_machine__36199__auto__ = function(state_39336){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36199__auto____1.call(this,state_39336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36199__auto____0;
cljs$core$async$state_machine__36199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36199__auto____1;
return cljs$core$async$state_machine__36199__auto__;
})()
})();
var state__36442__auto__ = (function (){var statearr_39394 = f__36441__auto__();
(statearr_39394[(6)] = c__36440__auto___40515);

return statearr_39394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36442__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__39396 = arguments.length;
switch (G__39396) {
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

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36440__auto___40536 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36441__auto__ = (function (){var switch__36198__auto__ = (function (state_39441){
var state_val_39442 = (state_39441[(1)]);
if((state_val_39442 === (7))){
var inst_39437 = (state_39441[(2)]);
var state_39441__$1 = state_39441;
var statearr_39443_40537 = state_39441__$1;
(statearr_39443_40537[(2)] = inst_39437);

(statearr_39443_40537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39442 === (1))){
var inst_39401 = (new Array(n));
var inst_39402 = inst_39401;
var inst_39403 = (0);
var state_39441__$1 = (function (){var statearr_39452 = state_39441;
(statearr_39452[(7)] = inst_39402);

(statearr_39452[(8)] = inst_39403);

return statearr_39452;
})();
var statearr_39453_40538 = state_39441__$1;
(statearr_39453_40538[(2)] = null);

(statearr_39453_40538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39442 === (4))){
var inst_39406 = (state_39441[(9)]);
var inst_39406__$1 = (state_39441[(2)]);
var inst_39407 = (inst_39406__$1 == null);
var inst_39408 = cljs.core.not(inst_39407);
var state_39441__$1 = (function (){var statearr_39458 = state_39441;
(statearr_39458[(9)] = inst_39406__$1);

return statearr_39458;
})();
if(inst_39408){
var statearr_39459_40539 = state_39441__$1;
(statearr_39459_40539[(1)] = (5));

} else {
var statearr_39460_40540 = state_39441__$1;
(statearr_39460_40540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39442 === (15))){
var inst_39431 = (state_39441[(2)]);
var state_39441__$1 = state_39441;
var statearr_39463_40541 = state_39441__$1;
(statearr_39463_40541[(2)] = inst_39431);

(statearr_39463_40541[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39442 === (13))){
var state_39441__$1 = state_39441;
var statearr_39465_40542 = state_39441__$1;
(statearr_39465_40542[(2)] = null);

(statearr_39465_40542[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39442 === (6))){
var inst_39403 = (state_39441[(8)]);
var inst_39427 = (inst_39403 > (0));
var state_39441__$1 = state_39441;
if(cljs.core.truth_(inst_39427)){
var statearr_39470_40543 = state_39441__$1;
(statearr_39470_40543[(1)] = (12));

} else {
var statearr_39471_40544 = state_39441__$1;
(statearr_39471_40544[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39442 === (3))){
var inst_39439 = (state_39441[(2)]);
var state_39441__$1 = state_39441;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39441__$1,inst_39439);
} else {
if((state_val_39442 === (12))){
var inst_39402 = (state_39441[(7)]);
var inst_39429 = cljs.core.vec(inst_39402);
var state_39441__$1 = state_39441;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39441__$1,(15),out,inst_39429);
} else {
if((state_val_39442 === (2))){
var state_39441__$1 = state_39441;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39441__$1,(4),ch);
} else {
if((state_val_39442 === (11))){
var inst_39421 = (state_39441[(2)]);
var inst_39422 = (new Array(n));
var inst_39402 = inst_39422;
var inst_39403 = (0);
var state_39441__$1 = (function (){var statearr_39478 = state_39441;
(statearr_39478[(10)] = inst_39421);

(statearr_39478[(7)] = inst_39402);

(statearr_39478[(8)] = inst_39403);

return statearr_39478;
})();
var statearr_39479_40545 = state_39441__$1;
(statearr_39479_40545[(2)] = null);

(statearr_39479_40545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39442 === (9))){
var inst_39402 = (state_39441[(7)]);
var inst_39419 = cljs.core.vec(inst_39402);
var state_39441__$1 = state_39441;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39441__$1,(11),out,inst_39419);
} else {
if((state_val_39442 === (5))){
var inst_39402 = (state_39441[(7)]);
var inst_39403 = (state_39441[(8)]);
var inst_39406 = (state_39441[(9)]);
var inst_39414 = (state_39441[(11)]);
var inst_39413 = (inst_39402[inst_39403] = inst_39406);
var inst_39414__$1 = (inst_39403 + (1));
var inst_39415 = (inst_39414__$1 < n);
var state_39441__$1 = (function (){var statearr_39482 = state_39441;
(statearr_39482[(12)] = inst_39413);

(statearr_39482[(11)] = inst_39414__$1);

return statearr_39482;
})();
if(cljs.core.truth_(inst_39415)){
var statearr_39487_40546 = state_39441__$1;
(statearr_39487_40546[(1)] = (8));

} else {
var statearr_39488_40547 = state_39441__$1;
(statearr_39488_40547[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39442 === (14))){
var inst_39434 = (state_39441[(2)]);
var inst_39435 = cljs.core.async.close_BANG_(out);
var state_39441__$1 = (function (){var statearr_39495 = state_39441;
(statearr_39495[(13)] = inst_39434);

return statearr_39495;
})();
var statearr_39497_40548 = state_39441__$1;
(statearr_39497_40548[(2)] = inst_39435);

(statearr_39497_40548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39442 === (10))){
var inst_39425 = (state_39441[(2)]);
var state_39441__$1 = state_39441;
var statearr_39500_40549 = state_39441__$1;
(statearr_39500_40549[(2)] = inst_39425);

(statearr_39500_40549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39442 === (8))){
var inst_39402 = (state_39441[(7)]);
var inst_39414 = (state_39441[(11)]);
var tmp39491 = inst_39402;
var inst_39402__$1 = tmp39491;
var inst_39403 = inst_39414;
var state_39441__$1 = (function (){var statearr_39504 = state_39441;
(statearr_39504[(7)] = inst_39402__$1);

(statearr_39504[(8)] = inst_39403);

return statearr_39504;
})();
var statearr_39505_40550 = state_39441__$1;
(statearr_39505_40550[(2)] = null);

(statearr_39505_40550[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__36199__auto__ = null;
var cljs$core$async$state_machine__36199__auto____0 = (function (){
var statearr_39509 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39509[(0)] = cljs$core$async$state_machine__36199__auto__);

(statearr_39509[(1)] = (1));

return statearr_39509;
});
var cljs$core$async$state_machine__36199__auto____1 = (function (state_39441){
while(true){
var ret_value__36200__auto__ = (function (){try{while(true){
var result__36201__auto__ = switch__36198__auto__(state_39441);
if(cljs.core.keyword_identical_QMARK_(result__36201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36201__auto__;
}
break;
}
}catch (e39510){var ex__36202__auto__ = e39510;
var statearr_39511_40551 = state_39441;
(statearr_39511_40551[(2)] = ex__36202__auto__);


if(cljs.core.seq((state_39441[(4)]))){
var statearr_39514_40552 = state_39441;
(statearr_39514_40552[(1)] = cljs.core.first((state_39441[(4)])));

} else {
throw ex__36202__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40553 = state_39441;
state_39441 = G__40553;
continue;
} else {
return ret_value__36200__auto__;
}
break;
}
});
cljs$core$async$state_machine__36199__auto__ = function(state_39441){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36199__auto____1.call(this,state_39441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36199__auto____0;
cljs$core$async$state_machine__36199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36199__auto____1;
return cljs$core$async$state_machine__36199__auto__;
})()
})();
var state__36442__auto__ = (function (){var statearr_39516 = f__36441__auto__();
(statearr_39516[(6)] = c__36440__auto___40536);

return statearr_39516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36442__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__39524 = arguments.length;
switch (G__39524) {
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

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__36440__auto___40556 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36441__auto__ = (function (){var switch__36198__auto__ = (function (state_39578){
var state_val_39579 = (state_39578[(1)]);
if((state_val_39579 === (7))){
var inst_39574 = (state_39578[(2)]);
var state_39578__$1 = state_39578;
var statearr_39593_40557 = state_39578__$1;
(statearr_39593_40557[(2)] = inst_39574);

(statearr_39593_40557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39579 === (1))){
var inst_39534 = [];
var inst_39535 = inst_39534;
var inst_39536 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_39578__$1 = (function (){var statearr_39600 = state_39578;
(statearr_39600[(7)] = inst_39535);

(statearr_39600[(8)] = inst_39536);

return statearr_39600;
})();
var statearr_39601_40558 = state_39578__$1;
(statearr_39601_40558[(2)] = null);

(statearr_39601_40558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39579 === (4))){
var inst_39539 = (state_39578[(9)]);
var inst_39539__$1 = (state_39578[(2)]);
var inst_39540 = (inst_39539__$1 == null);
var inst_39541 = cljs.core.not(inst_39540);
var state_39578__$1 = (function (){var statearr_39602 = state_39578;
(statearr_39602[(9)] = inst_39539__$1);

return statearr_39602;
})();
if(inst_39541){
var statearr_39603_40559 = state_39578__$1;
(statearr_39603_40559[(1)] = (5));

} else {
var statearr_39604_40560 = state_39578__$1;
(statearr_39604_40560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39579 === (15))){
var inst_39535 = (state_39578[(7)]);
var inst_39566 = cljs.core.vec(inst_39535);
var state_39578__$1 = state_39578;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39578__$1,(18),out,inst_39566);
} else {
if((state_val_39579 === (13))){
var inst_39561 = (state_39578[(2)]);
var state_39578__$1 = state_39578;
var statearr_39616_40561 = state_39578__$1;
(statearr_39616_40561[(2)] = inst_39561);

(statearr_39616_40561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39579 === (6))){
var inst_39535 = (state_39578[(7)]);
var inst_39563 = inst_39535.length;
var inst_39564 = (inst_39563 > (0));
var state_39578__$1 = state_39578;
if(cljs.core.truth_(inst_39564)){
var statearr_39617_40562 = state_39578__$1;
(statearr_39617_40562[(1)] = (15));

} else {
var statearr_39618_40563 = state_39578__$1;
(statearr_39618_40563[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39579 === (17))){
var inst_39571 = (state_39578[(2)]);
var inst_39572 = cljs.core.async.close_BANG_(out);
var state_39578__$1 = (function (){var statearr_39622 = state_39578;
(statearr_39622[(10)] = inst_39571);

return statearr_39622;
})();
var statearr_39623_40564 = state_39578__$1;
(statearr_39623_40564[(2)] = inst_39572);

(statearr_39623_40564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39579 === (3))){
var inst_39576 = (state_39578[(2)]);
var state_39578__$1 = state_39578;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39578__$1,inst_39576);
} else {
if((state_val_39579 === (12))){
var inst_39535 = (state_39578[(7)]);
var inst_39554 = cljs.core.vec(inst_39535);
var state_39578__$1 = state_39578;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39578__$1,(14),out,inst_39554);
} else {
if((state_val_39579 === (2))){
var state_39578__$1 = state_39578;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39578__$1,(4),ch);
} else {
if((state_val_39579 === (11))){
var inst_39535 = (state_39578[(7)]);
var inst_39539 = (state_39578[(9)]);
var inst_39543 = (state_39578[(11)]);
var inst_39551 = inst_39535.push(inst_39539);
var tmp39625 = inst_39535;
var inst_39535__$1 = tmp39625;
var inst_39536 = inst_39543;
var state_39578__$1 = (function (){var statearr_39626 = state_39578;
(statearr_39626[(12)] = inst_39551);

(statearr_39626[(7)] = inst_39535__$1);

(statearr_39626[(8)] = inst_39536);

return statearr_39626;
})();
var statearr_39627_40565 = state_39578__$1;
(statearr_39627_40565[(2)] = null);

(statearr_39627_40565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39579 === (9))){
var inst_39536 = (state_39578[(8)]);
var inst_39547 = cljs.core.keyword_identical_QMARK_(inst_39536,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_39578__$1 = state_39578;
var statearr_39628_40566 = state_39578__$1;
(statearr_39628_40566[(2)] = inst_39547);

(statearr_39628_40566[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39579 === (5))){
var inst_39539 = (state_39578[(9)]);
var inst_39543 = (state_39578[(11)]);
var inst_39536 = (state_39578[(8)]);
var inst_39544 = (state_39578[(13)]);
var inst_39543__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_39539) : f.call(null,inst_39539));
var inst_39544__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39543__$1,inst_39536);
var state_39578__$1 = (function (){var statearr_39630 = state_39578;
(statearr_39630[(11)] = inst_39543__$1);

(statearr_39630[(13)] = inst_39544__$1);

return statearr_39630;
})();
if(inst_39544__$1){
var statearr_39631_40567 = state_39578__$1;
(statearr_39631_40567[(1)] = (8));

} else {
var statearr_39635_40568 = state_39578__$1;
(statearr_39635_40568[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39579 === (14))){
var inst_39539 = (state_39578[(9)]);
var inst_39543 = (state_39578[(11)]);
var inst_39556 = (state_39578[(2)]);
var inst_39557 = [];
var inst_39558 = inst_39557.push(inst_39539);
var inst_39535 = inst_39557;
var inst_39536 = inst_39543;
var state_39578__$1 = (function (){var statearr_39636 = state_39578;
(statearr_39636[(14)] = inst_39556);

(statearr_39636[(15)] = inst_39558);

(statearr_39636[(7)] = inst_39535);

(statearr_39636[(8)] = inst_39536);

return statearr_39636;
})();
var statearr_39637_40569 = state_39578__$1;
(statearr_39637_40569[(2)] = null);

(statearr_39637_40569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39579 === (16))){
var state_39578__$1 = state_39578;
var statearr_39638_40570 = state_39578__$1;
(statearr_39638_40570[(2)] = null);

(statearr_39638_40570[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39579 === (10))){
var inst_39549 = (state_39578[(2)]);
var state_39578__$1 = state_39578;
if(cljs.core.truth_(inst_39549)){
var statearr_39639_40571 = state_39578__$1;
(statearr_39639_40571[(1)] = (11));

} else {
var statearr_39640_40572 = state_39578__$1;
(statearr_39640_40572[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39579 === (18))){
var inst_39568 = (state_39578[(2)]);
var state_39578__$1 = state_39578;
var statearr_39643_40573 = state_39578__$1;
(statearr_39643_40573[(2)] = inst_39568);

(statearr_39643_40573[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39579 === (8))){
var inst_39544 = (state_39578[(13)]);
var state_39578__$1 = state_39578;
var statearr_39644_40574 = state_39578__$1;
(statearr_39644_40574[(2)] = inst_39544);

(statearr_39644_40574[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__36199__auto__ = null;
var cljs$core$async$state_machine__36199__auto____0 = (function (){
var statearr_39645 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39645[(0)] = cljs$core$async$state_machine__36199__auto__);

(statearr_39645[(1)] = (1));

return statearr_39645;
});
var cljs$core$async$state_machine__36199__auto____1 = (function (state_39578){
while(true){
var ret_value__36200__auto__ = (function (){try{while(true){
var result__36201__auto__ = switch__36198__auto__(state_39578);
if(cljs.core.keyword_identical_QMARK_(result__36201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36201__auto__;
}
break;
}
}catch (e39646){var ex__36202__auto__ = e39646;
var statearr_39648_40575 = state_39578;
(statearr_39648_40575[(2)] = ex__36202__auto__);


if(cljs.core.seq((state_39578[(4)]))){
var statearr_39676_40576 = state_39578;
(statearr_39676_40576[(1)] = cljs.core.first((state_39578[(4)])));

} else {
throw ex__36202__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40577 = state_39578;
state_39578 = G__40577;
continue;
} else {
return ret_value__36200__auto__;
}
break;
}
});
cljs$core$async$state_machine__36199__auto__ = function(state_39578){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36199__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36199__auto____1.call(this,state_39578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36199__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36199__auto____0;
cljs$core$async$state_machine__36199__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36199__auto____1;
return cljs$core$async$state_machine__36199__auto__;
})()
})();
var state__36442__auto__ = (function (){var statearr_39677 = f__36441__auto__();
(statearr_39677[(6)] = c__36440__auto___40556);

return statearr_39677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36442__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
