goog.provide('hyperfiddle.electric.impl.gather');
hyperfiddle.electric.impl.gather.done_BANG_ = (function hyperfiddle$electric$impl$gather$done_BANG_(main,terminator){
if(((main[((6) | (0))] = ((main[((6) | (0))]) - (1))) === (0))){
return (terminator.cljs$core$IFn$_invoke$arity$0 ? terminator.cljs$core$IFn$_invoke$arity$0() : terminator.call(null));
} else {
return null;
}
});
hyperfiddle.electric.impl.gather.cancel_BANG_ = (function hyperfiddle$electric$impl$gather$cancel_BANG_(main){
var temp__5820__auto__ = (main[((2) | (0))]);
if((temp__5820__auto__ == null)){
return null;
} else {
var item = temp__5820__auto__;
var item_47524__$1 = item;
while(true){
if((item_47524__$1 === main)){
} else {
var n_47525 = (item_47524__$1[((2) | (0))]);
(item_47524__$1[((1) | (0))] = null);

(item_47524__$1[((2) | (0))] = null);

var fexpr__47466_47526 = (item_47524__$1[((0) | (0))]);
(fexpr__47466_47526.cljs$core$IFn$_invoke$arity$0 ? fexpr__47466_47526.cljs$core$IFn$_invoke$arity$0() : fexpr__47466_47526.call(null));

var G__47527 = n_47525;
item_47524__$1 = G__47527;
continue;
}
break;
}

(main[((1) | (0))] = null);

(main[((2) | (0))] = null);

var fexpr__47467 = (main[((0) | (0))]);
return (fexpr__47467.cljs$core$IFn$_invoke$arity$0 ? fexpr__47467.cljs$core$IFn$_invoke$arity$0() : fexpr__47467.call(null));
}
});
hyperfiddle.electric.impl.gather.flush_BANG_ = (function hyperfiddle$electric$impl$gather$flush_BANG_(item){
var item__$1 = item;
while(true){
if((!((item__$1 == null)))){
var next = (function (){var a__8024__auto__ = item__$1;
var i__8025__auto__ = ((3) | (0));
var x__8026__auto__ = (a__8024__auto__[i__8025__auto__]);
(a__8024__auto__[i__8025__auto__] = null);

return x__8026__auto__;
})();
try{cljs.core.deref((item__$1[((0) | (0))]));
}catch (e47471){var __47528 = e47471;
}
var G__47529 = next;
item__$1 = G__47529;
continue;
} else {
return null;
}
break;
}
});
hyperfiddle.electric.impl.gather.fail_BANG_ = (function hyperfiddle$electric$impl$gather$fail_BANG_(main,item,error){
hyperfiddle.electric.impl.gather.cancel_BANG_(main);

hyperfiddle.electric.impl.gather.flush_BANG_((function (){var a__8024__auto__ = main;
var i__8025__auto__ = ((3) | (0));
var x__8026__auto__ = (a__8024__auto__[i__8025__auto__]);
(a__8024__auto__[i__8025__auto__] = null);

return x__8026__auto__;
})());

hyperfiddle.electric.impl.gather.flush_BANG_(item);

throw error;
});
hyperfiddle.electric.impl.gather.sample_BANG_ = (function hyperfiddle$electric$impl$gather$sample_BANG_(main,rf,notifier){
var idle = (function (){var a__8024__auto__ = main;
var i__8025__auto__ = ((5) | (0));
var x__8026__auto__ = (a__8024__auto__[i__8025__auto__]);
(a__8024__auto__[i__8025__auto__] = false);

return x__8026__auto__;
})();
var head = (function (){var a__8024__auto__ = main;
var i__8025__auto__ = ((3) | (0));
var x__8026__auto__ = (a__8024__auto__[i__8025__auto__]);
(a__8024__auto__[i__8025__auto__] = null);

return x__8026__auto__;
})();
var item = (function (){var a__8024__auto__ = head;
var i__8025__auto__ = ((3) | (0));
var x__8026__auto__ = (a__8024__auto__[i__8025__auto__]);
(a__8024__auto__[i__8025__auto__] = null);

return x__8026__auto__;
})();
var r = (function (){try{return cljs.core.deref((head[((0) | (0))]));
}catch (e47489){var e = e47489;
return hyperfiddle.electric.impl.gather.fail_BANG_(main,item,e);
}})();
while(true){
if((item == null)){
if(cljs.core.truth_((main[((5) | (0))]))){
if(idle){
(notifier.cljs$core$IFn$_invoke$arity$0 ? notifier.cljs$core$IFn$_invoke$arity$0() : notifier.call(null));
} else {
}
} else {
(main[((5) | (0))] = idle);
}

return r;
} else {
var next = (function (){var a__8024__auto__ = item;
var i__8025__auto__ = ((3) | (0));
var x__8026__auto__ = (a__8024__auto__[i__8025__auto__]);
(a__8024__auto__[i__8025__auto__] = null);

return x__8026__auto__;
})();
var G__47531 = next;
var G__47532 = (function (){try{var G__47492 = r;
var G__47493 = cljs.core.deref((item[((0) | (0))]));
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__47492,G__47493) : rf.call(null,G__47492,G__47493));
}catch (e47491){var e = e47491;
return hyperfiddle.electric.impl.gather.fail_BANG_(main,next,e);
}})();
item = G__47531;
r = G__47532;
continue;
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
hyperfiddle.electric.impl.gather.It = (function (main,rf,notifier,terminator){
this.main = main;
this.rf = rf;
this.notifier = notifier;
this.terminator = terminator;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.gather.It.prototype.call = (function (unused__18786__auto__){
var self__ = this;
var self__ = this;
var G__47499 = (arguments.length - (1));
switch (G__47499) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.gather.It.prototype.apply = (function (self__,args47497){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args47497)));
}));

(hyperfiddle.electric.impl.gather.It.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var it = this;
return hyperfiddle.electric.impl.gather.cancel_BANG_(self__.main);
}));

(hyperfiddle.electric.impl.gather.It.prototype.cljs$core$IDeref$_deref$arity$1 = (function (it){
var self__ = this;
var it__$1 = this;
return hyperfiddle.electric.impl.gather.sample_BANG_(self__.main,self__.rf,self__.notifier);
}));

(hyperfiddle.electric.impl.gather.It.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"main","main",-477271134,null),new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null)], null);
}));

(hyperfiddle.electric.impl.gather.It.cljs$lang$type = true);

(hyperfiddle.electric.impl.gather.It.cljs$lang$ctorStr = "hyperfiddle.electric.impl.gather/It");

(hyperfiddle.electric.impl.gather.It.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"hyperfiddle.electric.impl.gather/It");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.gather/It.
 */
hyperfiddle.electric.impl.gather.__GT_It = (function hyperfiddle$electric$impl$gather$__GT_It(main,rf,notifier,terminator){
return (new hyperfiddle.electric.impl.gather.It(main,rf,notifier,terminator));
});

hyperfiddle.electric.impl.gather.transfer_BANG_ = (function hyperfiddle$electric$impl$gather$transfer_BANG_(it){
var main = it.main;
while(true){
if(cljs.core.truth_((main[((4) | (0))] = cljs.core.not((main[((4) | (0))]))))){
var temp__5818__auto___47536 = (main[((1) | (0))]);
if((temp__5818__auto___47536 == null)){
try{cljs.core.deref((main[((0) | (0))]));
}catch (e47504){var __47537 = e47504;
}} else {
var prev_47538 = temp__5818__auto___47536;
var item_47539 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(((4) | (0)));
var idle_47540 = (function (){var a__8024__auto__ = main;
var i__8025__auto__ = ((5) | (0));
var x__8026__auto__ = (a__8024__auto__[i__8025__auto__]);
(a__8024__auto__[i__8025__auto__] = false);

return x__8026__auto__;
})();
(main[((6) | (0))] = ((main[((6) | (0))]) + (1)));

(item_47539[((1) | (0))] = prev_47538);

(prev_47538[((2) | (0))] = item_47539);

(main[((1) | (0))] = item_47539);

(item_47539[((2) | (0))] = main);

var n_47541 = ((function (item_47539,idle_47540,prev_47538,temp__5818__auto___47536,main){
return (function (){
if(((item_47539[((1) | (0))]) == null)){
try{return cljs.core.deref((item_47539[((0) | (0))]));
}catch (e47505){var _ = e47505;
return null;
}} else {
var temp__5818__auto____$1 = (function (){var a__8024__auto__ = main;
var i__8025__auto__ = ((3) | (0));
var x__8026__auto__ = (a__8024__auto__[i__8025__auto__]);
(a__8024__auto__[i__8025__auto__] = item_47539);

return x__8026__auto__;
})();
if((temp__5818__auto____$1 == null)){
if(cljs.core.truth_((main[((5) | (0))]))){
var fexpr__47506 = it.notifier;
return (fexpr__47506.cljs$core$IFn$_invoke$arity$0 ? fexpr__47506.cljs$core$IFn$_invoke$arity$0() : fexpr__47506.call(null));
} else {
return (main[((5) | (0))] = true);
}
} else {
var curr = temp__5818__auto____$1;
return (item_47539[((3) | (0))] = curr);
}
}
});})(item_47539,idle_47540,prev_47538,temp__5818__auto___47536,main))
;
var t_47542 = ((function (n_47541,item_47539,idle_47540,prev_47538,temp__5818__auto___47536,main){
return (function (){
var temp__5820__auto___47543 = (item_47539[((1) | (0))]);
if((temp__5820__auto___47543 == null)){
} else {
var prev_47544__$1 = temp__5820__auto___47543;
var next_47545 = (item_47539[((2) | (0))]);
(next_47545[((1) | (0))] = prev_47544__$1);

(prev_47544__$1[((2) | (0))] = next_47545);

(item_47539[((1) | (0))] = null);

(item_47539[((2) | (0))] = null);
}

return hyperfiddle.electric.impl.gather.done_BANG_(main,it.terminator);
});})(n_47541,item_47539,idle_47540,prev_47538,temp__5818__auto___47536,main))
;
(item_47539[((0) | (0))] = (function (){try{var fexpr__47508 = cljs.core.deref((main[((0) | (0))]));
return (fexpr__47508.cljs$core$IFn$_invoke$arity$2 ? fexpr__47508.cljs$core$IFn$_invoke$arity$2(n_47541,t_47542) : fexpr__47508.call(null,n_47541,t_47542));
}catch (e47507){var e = e47507;
return hyperfiddle.electric.impl.failer.run(e,n_47541,t_47542);
}})());

if(cljs.core.truth_((main[((5) | (0))]))){
if(idle_47540){
var fexpr__47512_47548 = it.notifier;
(fexpr__47512_47548.cljs$core$IFn$_invoke$arity$0 ? fexpr__47512_47548.cljs$core$IFn$_invoke$arity$0() : fexpr__47512_47548.call(null));
} else {
}
} else {
(main[((5) | (0))] = idle_47540);
}
}

continue;
} else {
return null;
}
break;
}
});
/**
 * 
 * Given a commutative function and a flow of flows, returns a flow concurrently running the flow with flows produced by
 * this flow and producing values produced by nested flows, reduced by the function if more than one can be transferred
 * simultaneously.
 */
hyperfiddle.electric.impl.gather.gather = (function hyperfiddle$electric$impl$gather$gather(rf,_GT__GT_x){
return (function (n,t){
var main = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(((7) | (0)));
var it = hyperfiddle.electric.impl.gather.__GT_It(main,rf,n,t);
var G__47513_47550 = main;
(G__47513_47550[((1) | (0))] = main);

(G__47513_47550[((2) | (0))] = main);

(G__47513_47550[((4) | (0))] = true);

(G__47513_47550[((5) | (0))] = true);

(G__47513_47550[((6) | (0))] = (1));


(main[((0) | (0))] = (function (){var G__47514 = (function (){
return hyperfiddle.electric.impl.gather.transfer_BANG_(it);
});
var G__47515 = (function (){
return hyperfiddle.electric.impl.gather.done_BANG_(main,t);
});
return (_GT__GT_x.cljs$core$IFn$_invoke$arity$2 ? _GT__GT_x.cljs$core$IFn$_invoke$arity$2(G__47514,G__47515) : _GT__GT_x.call(null,G__47514,G__47515));
})());

hyperfiddle.electric.impl.gather.transfer_BANG_(it);

return it;
});
});

//# sourceMappingURL=hyperfiddle.electric.impl.gather.js.map
