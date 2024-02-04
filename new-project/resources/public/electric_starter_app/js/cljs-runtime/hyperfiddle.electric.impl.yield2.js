goog.provide('hyperfiddle.electric.impl.yield2');

hyperfiddle.electric.impl.yield2.input = ((0) | (0));

hyperfiddle.electric.impl.yield2.recover = ((1) | (0));

hyperfiddle.electric.impl.yield2.children = ((2) | (0));

hyperfiddle.electric.impl.yield2.last_in = ((3) | (0));

hyperfiddle.electric.impl.yield2.last_out = ((4) | (0));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
hyperfiddle.electric.impl.yield2.Yield = (function (checker,notifier,terminator,state_){
this.checker = checker;
this.notifier = notifier;
this.terminator = terminator;
this.state_ = state_;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.yield2.Yield.prototype.call = (function (unused__18786__auto__){
var self__ = this;
var self__ = this;
var G__47592 = (arguments.length - (1));
switch (G__47592) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.yield2.Yield.prototype.apply = (function (self__,args47588){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args47588)));
}));

(hyperfiddle.electric.impl.yield2.Yield.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
return (hyperfiddle.electric.impl.yield2.cancel.cljs$core$IFn$_invoke$arity$1 ? hyperfiddle.electric.impl.yield2.cancel.cljs$core$IFn$_invoke$arity$1(this$) : hyperfiddle.electric.impl.yield2.cancel.call(null,this$));
}));

(hyperfiddle.electric.impl.yield2.Yield.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (hyperfiddle.electric.impl.yield2.transfer.cljs$core$IFn$_invoke$arity$1 ? hyperfiddle.electric.impl.yield2.transfer.cljs$core$IFn$_invoke$arity$1(this$__$1) : hyperfiddle.electric.impl.yield2.transfer.call(null,this$__$1));
}));

(hyperfiddle.electric.impl.yield2.Yield.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"checker","checker",2053644407,null),new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null),new cljs.core.Symbol(null,"state-","state-",-416998234,null)], null);
}));

(hyperfiddle.electric.impl.yield2.Yield.cljs$lang$type = true);

(hyperfiddle.electric.impl.yield2.Yield.cljs$lang$ctorStr = "hyperfiddle.electric.impl.yield2/Yield");

(hyperfiddle.electric.impl.yield2.Yield.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"hyperfiddle.electric.impl.yield2/Yield");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.yield2/Yield.
 */
hyperfiddle.electric.impl.yield2.__GT_Yield = (function hyperfiddle$electric$impl$yield2$__GT_Yield(checker,notifier,terminator,state_){
return (new hyperfiddle.electric.impl.yield2.Yield(checker,notifier,terminator,state_));
});

hyperfiddle.electric.impl.yield2.iterator = ((0) | (0));

hyperfiddle.electric.impl.yield2.notified_QMARK_ = ((1) | (0));

hyperfiddle.electric.impl.yield2.on_notify = ((2) | (0));
hyperfiddle.electric.impl.yield2.input_notified = (function hyperfiddle$electric$impl$yield2$input_notified(Y){
if(cljs.core.truth_((function (){var or__4998__auto__ = hyperfiddle.electric.impl.array_fields.getset(hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.input),hyperfiddle.electric.impl.yield2.notified_QMARK_,true);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
var G__47614 = hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.recover);
if((G__47614 == null)){
return null;
} else {
return hyperfiddle.electric.impl.array_fields.get(G__47614,hyperfiddle.electric.impl.yield2.notified_QMARK_);
}
}
})())){
return null;
} else {
var fexpr__47615 = Y.notifier;
return (fexpr__47615.cljs$core$IFn$_invoke$arity$0 ? fexpr__47615.cljs$core$IFn$_invoke$arity$0() : fexpr__47615.call(null));
}
});
hyperfiddle.electric.impl.yield2.recover_notified = (function hyperfiddle$electric$impl$yield2$recover_notified(Y){
if(cljs.core.truth_((function (){var or__4998__auto__ = hyperfiddle.electric.impl.array_fields.getset(hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.recover),hyperfiddle.electric.impl.yield2.notified_QMARK_,true);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return hyperfiddle.electric.impl.array_fields.get(hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.input),hyperfiddle.electric.impl.yield2.notified_QMARK_);
}
})())){
return null;
} else {
var fexpr__47618 = Y.notifier;
return (fexpr__47618.cljs$core$IFn$_invoke$arity$0 ? fexpr__47618.cljs$core$IFn$_invoke$arity$0() : fexpr__47618.call(null));
}
});
hyperfiddle.electric.impl.yield2.terminated = (function hyperfiddle$electric$impl$yield2$terminated(Y){
if((hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$3(Y.state_,hyperfiddle.electric.impl.yield2.children,cljs.core.dec) === (0))){
var fexpr__47623 = Y.terminator;
return (fexpr__47623.cljs$core$IFn$_invoke$arity$0 ? fexpr__47623.cljs$core$IFn$_invoke$arity$0() : fexpr__47623.call(null));
} else {
return null;
}
});
hyperfiddle.electric.impl.yield2.swallow = (function hyperfiddle$electric$impl$yield2$swallow(o){
try{return cljs.core.deref(hyperfiddle.electric.impl.array_fields.get(o,hyperfiddle.electric.impl.yield2.iterator));
}catch (e47630){var _ = e47630;
return null;
}});
hyperfiddle.electric.impl.yield2.trash = (function hyperfiddle$electric$impl$yield2$trash(o){
var arr47632_47687 = o;
(arr47632_47687[hyperfiddle.electric.impl.yield2.on_notify] = cljs.core.identity((function (){
return hyperfiddle.electric.impl.yield2.swallow(o);
})));

var fexpr__47633_47688 = hyperfiddle.electric.impl.array_fields.get(o,hyperfiddle.electric.impl.yield2.iterator);
(fexpr__47633_47688.cljs$core$IFn$_invoke$arity$0 ? fexpr__47633_47688.cljs$core$IFn$_invoke$arity$0() : fexpr__47633_47688.call(null));

if(cljs.core.truth_(hyperfiddle.electric.impl.array_fields.getset(o,hyperfiddle.electric.impl.yield2.notified_QMARK_,false))){
return hyperfiddle.electric.impl.yield2.swallow(o);
} else {
return null;
}
});
hyperfiddle.electric.impl.yield2.cancel = (function hyperfiddle$electric$impl$yield2$cancel(Y){
var fexpr__47639_47690 = hyperfiddle.electric.impl.array_fields.get(hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.input),hyperfiddle.electric.impl.yield2.iterator);
(fexpr__47639_47690.cljs$core$IFn$_invoke$arity$0 ? fexpr__47639_47690.cljs$core$IFn$_invoke$arity$0() : fexpr__47639_47690.call(null));

var temp__5820__auto__ = hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.recover);
if((temp__5820__auto__ == null)){
return null;
} else {
var rec = temp__5820__auto__;
return hyperfiddle.electric.impl.yield2.trash(rec);
}
});
hyperfiddle.electric.impl.yield2.create_recover = (function hyperfiddle$electric$impl$yield2$create_recover(Y,_GT_r){
var temp__5820__auto___47691 = hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.recover);
if((temp__5820__auto___47691 == null)){
} else {
var rec_47692 = temp__5820__auto___47691;
hyperfiddle.electric.impl.yield2.trash(rec_47692);
}

hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$3(Y.state_,hyperfiddle.electric.impl.yield2.children,cljs.core.inc);

var me = (function (){var arr47643 = Y.state_;
return (arr47643[hyperfiddle.electric.impl.yield2.recover] = cljs.core.identity(cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3))));
})();
var arr47644 = me;
(arr47644[hyperfiddle.electric.impl.yield2.on_notify] = cljs.core.identity((function (){
var arr47647 = me;
return (arr47647[hyperfiddle.electric.impl.yield2.notified_QMARK_] = cljs.core.identity(true));
})));

return (arr47644[hyperfiddle.electric.impl.yield2.iterator] = cljs.core.identity((function (){var G__47653 = (function (){
var fexpr__47658 = hyperfiddle.electric.impl.array_fields.get(me,hyperfiddle.electric.impl.yield2.on_notify);
return (fexpr__47658.cljs$core$IFn$_invoke$arity$0 ? fexpr__47658.cljs$core$IFn$_invoke$arity$0() : fexpr__47658.call(null));
});
var G__47654 = (function (){
return hyperfiddle.electric.impl.yield2.terminated(Y);
});
return (_GT_r.cljs$core$IFn$_invoke$arity$2 ? _GT_r.cljs$core$IFn$_invoke$arity$2(G__47653,G__47654) : _GT_r.call(null,G__47653,G__47654));
})()));
});
hyperfiddle.electric.impl.yield2.transfer_loop = (function hyperfiddle$electric$impl$yield2$transfer_loop(o){
while(true){
var arr47661_47695 = o;
(arr47661_47695[hyperfiddle.electric.impl.yield2.notified_QMARK_] = cljs.core.identity(false));

var v = cljs.core.deref(hyperfiddle.electric.impl.array_fields.get(o,hyperfiddle.electric.impl.yield2.iterator));
if(cljs.core.truth_(hyperfiddle.electric.impl.array_fields.get(o,hyperfiddle.electric.impl.yield2.notified_QMARK_))){
var G__47705 = o;
o = G__47705;
continue;
} else {
return v;
}
break;
}
});
hyperfiddle.electric.impl.yield2.transfer_recover = (function hyperfiddle$electric$impl$yield2$transfer_recover(Y){
var arr47664 = Y.state_;
return (arr47664[hyperfiddle.electric.impl.yield2.last_out] = cljs.core.identity(hyperfiddle.electric.impl.yield2.transfer_loop(hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.recover))));
});
hyperfiddle.electric.impl.yield2.transfer_input = (function hyperfiddle$electric$impl$yield2$transfer_input(Y){
var in$ = hyperfiddle.electric.impl.yield2.transfer_loop(hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.input));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in$,hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.last_in))){
if(cljs.core.truth_((function (){var G__47665 = hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.recover);
if((G__47665 == null)){
return null;
} else {
return hyperfiddle.electric.impl.array_fields.get(G__47665,hyperfiddle.electric.impl.yield2.notified_QMARK_);
}
})())){
return hyperfiddle.electric.impl.yield2.transfer_recover(Y);
} else {
return hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.last_out);
}
} else {
var temp__5818__auto__ = (function (){var fexpr__47666 = Y.checker;
return (fexpr__47666.cljs$core$IFn$_invoke$arity$1 ? fexpr__47666.cljs$core$IFn$_invoke$arity$1(in$) : fexpr__47666.call(null,in$));
})();
if((temp__5818__auto__ == null)){
var arr47667_47708 = Y.state_;
(arr47667_47708[hyperfiddle.electric.impl.yield2.last_in] = cljs.core.identity(new cljs.core.Keyword("hyperfiddle.electric.impl.yield2","none","hyperfiddle.electric.impl.yield2/none",934748982)));

var temp__5820__auto___47709 = hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.recover);
if((temp__5820__auto___47709 == null)){
} else {
var rec_47710 = temp__5820__auto___47709;
hyperfiddle.electric.impl.yield2.trash(rec_47710);
}

return in$;
} else {
var _GT_recover = temp__5818__auto__;
var out = (function (){
hyperfiddle.electric.impl.yield2.create_recover(Y,_GT_recover);

return hyperfiddle.electric.impl.yield2.transfer_recover(Y);
})()
;
var arr47668_47711 = hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.recover);
(arr47668_47711[hyperfiddle.electric.impl.yield2.on_notify] = cljs.core.identity((function (){
return hyperfiddle.electric.impl.yield2.recover_notified(Y);
})));

var arr47669 = Y.state_;
(arr47669[hyperfiddle.electric.impl.yield2.last_in] = cljs.core.identity(in$));

return (arr47669[hyperfiddle.electric.impl.yield2.last_out] = cljs.core.identity(out));
}
}
});
hyperfiddle.electric.impl.yield2.transfer = (function hyperfiddle$electric$impl$yield2$transfer(Y){
try{hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$3(Y.state_,hyperfiddle.electric.impl.yield2.children,cljs.core.inc);

if(cljs.core.truth_(hyperfiddle.electric.impl.array_fields.get(hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.input),hyperfiddle.electric.impl.yield2.notified_QMARK_))){
return hyperfiddle.electric.impl.yield2.transfer_input(Y);
} else {
if(cljs.core.truth_(hyperfiddle.electric.impl.array_fields.get(hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.recover),hyperfiddle.electric.impl.yield2.notified_QMARK_))){
return hyperfiddle.electric.impl.yield2.transfer_recover(Y);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("You cannot transfer a value if I haven't notified you",cljs.core.PersistentArrayMap.EMPTY);

}
}
}catch (e47670){var e = e47670;
hyperfiddle.electric.impl.yield2.trash(hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.input));

var temp__5820__auto___47714 = hyperfiddle.electric.impl.array_fields.get(Y.state_,hyperfiddle.electric.impl.yield2.recover);
if((temp__5820__auto___47714 == null)){
} else {
var rec_47715 = temp__5820__auto___47714;
hyperfiddle.electric.impl.yield2.trash(rec_47715);
}

throw e;
}finally {hyperfiddle.electric.impl.yield2.terminated(Y);
}});
hyperfiddle.electric.impl.yield2.yield$ = (function hyperfiddle$electric$impl$yield2$yield(checker,_GT_input){
return (function (n,t){
var Y = hyperfiddle.electric.impl.yield2.__GT_Yield(checker,n,t,cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((5)));
var me = (function (){var arr47671 = Y.state_;
(arr47671[hyperfiddle.electric.impl.yield2.children] = cljs.core.identity((1)));

(arr47671[hyperfiddle.electric.impl.yield2.last_in] = cljs.core.identity(new cljs.core.Keyword("hyperfiddle.electric.impl.yield2","none","hyperfiddle.electric.impl.yield2/none",934748982)));

return (arr47671[hyperfiddle.electric.impl.yield2.input] = cljs.core.identity(cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3))));
})();
var arr47672_47716 = me;
(arr47672_47716[hyperfiddle.electric.impl.yield2.on_notify] = cljs.core.identity((function (){
return hyperfiddle.electric.impl.yield2.input_notified(Y);
})));

(arr47672_47716[hyperfiddle.electric.impl.yield2.iterator] = cljs.core.identity((function (){var G__47673 = (function (){
var fexpr__47675 = hyperfiddle.electric.impl.array_fields.get(me,hyperfiddle.electric.impl.yield2.on_notify);
return (fexpr__47675.cljs$core$IFn$_invoke$arity$0 ? fexpr__47675.cljs$core$IFn$_invoke$arity$0() : fexpr__47675.call(null));
});
var G__47674 = (function (){
return hyperfiddle.electric.impl.yield2.terminated(Y);
});
return (_GT_input.cljs$core$IFn$_invoke$arity$2 ? _GT_input.cljs$core$IFn$_invoke$arity$2(G__47673,G__47674) : _GT_input.call(null,G__47673,G__47674));
})()));

return Y;
});
});

//# sourceMappingURL=hyperfiddle.electric.impl.yield2.js.map
