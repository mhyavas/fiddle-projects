goog.provide('missionary.impl.Observe');


/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
missionary.impl.Observe.Process = (function (notifier,terminator,unsub,value){
this.notifier = notifier;
this.terminator = terminator;
this.unsub = unsub;
this.value = value;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Observe.Process.prototype.call = (function (unused__18786__auto__){
var self__ = this;
var self__ = this;
var G__45165 = (arguments.length - (1));
switch (G__45165) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Observe.Process.prototype.apply = (function (self__,args45164){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args45164)));
}));

(missionary.impl.Observe.Process.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
(missionary.impl.Observe.kill.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Observe.kill.cljs$core$IFn$_invoke$arity$1(this$) : missionary.impl.Observe.kill.call(null,this$));

return null;
}));

(missionary.impl.Observe.Process.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (missionary.impl.Observe.transfer.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Observe.transfer.cljs$core$IFn$_invoke$arity$1(this$__$1) : missionary.impl.Observe.transfer.call(null,this$__$1));
}));

(missionary.impl.Observe.Process.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null),new cljs.core.Symbol(null,"unsub","unsub",279611419,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(missionary.impl.Observe.Process.cljs$lang$type = true);

(missionary.impl.Observe.Process.cljs$lang$ctorStr = "missionary.impl.Observe/Process");

(missionary.impl.Observe.Process.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"missionary.impl.Observe/Process");
}));

/**
 * Positional factory function for missionary.impl.Observe/Process.
 */
missionary.impl.Observe.__GT_Process = (function missionary$impl$Observe$__GT_Process(notifier,terminator,unsub,value){
return (new missionary.impl.Observe.Process(notifier,terminator,unsub,value));
});

missionary.impl.Observe.kill = (function missionary$impl$Observe$kill(ps){
var temp__5820__auto__ = ps.notifier;
if((temp__5820__auto__ == null)){
return null;
} else {
var cb = temp__5820__auto__;
(ps.notifier = null);

var x = ps.value;
(ps.value = null);

if((x === ps)){
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
} else {
return null;
}
}
});
missionary.impl.Observe.transfer = (function missionary$impl$Observe$transfer(ps){
if((ps.notifier == null)){
var fexpr__45176_45207 = ps.terminator;
(fexpr__45176_45207.cljs$core$IFn$_invoke$arity$0 ? fexpr__45176_45207.cljs$core$IFn$_invoke$arity$0() : fexpr__45176_45207.call(null));

var fexpr__45178_45208 = ps.unsub;
(fexpr__45178_45208.cljs$core$IFn$_invoke$arity$0 ? fexpr__45178_45208.cljs$core$IFn$_invoke$arity$0() : fexpr__45178_45208.call(null));

throw (new missionary.Cancelled("Observe cancelled."));
} else {
var x = ps.value;
(ps.value = ps);

return x;
}
});
missionary.impl.Observe.run = (function missionary$impl$Observe$run(s,n,t){
var ps = missionary.impl.Observe.__GT_Process(n,t,null,null);
(ps.value = ps);

try{(ps.unsub = (function (){var G__45186 = (function (x){
var temp__5820__auto__ = ps.notifier;
if((temp__5820__auto__ == null)){
return null;
} else {
var cb = temp__5820__auto__;
if((ps === ps.value)){
(ps.value = x);

return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
} else {
throw (new Error("Can't process event - consumer is not ready."));
}
}
});
return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(G__45186) : s.call(null,G__45186));
})());
}catch (e45185){var e_45209 = e45185;
(ps.notifier = null);

(ps.unsub = (function (){
throw e_45209;
}));

if((ps === ps.value)){
(n.cljs$core$IFn$_invoke$arity$0 ? n.cljs$core$IFn$_invoke$arity$0() : n.call(null));
} else {
(ps.value = ps);
}
}
return ps;
});

//# sourceMappingURL=missionary.impl.Observe.js.map
