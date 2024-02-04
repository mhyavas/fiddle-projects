goog.provide('missionary.impl.Reductions');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
missionary.impl.Reductions.Process = (function (reducer,notifier,terminator,result,input,busy,done){
this.reducer = reducer;
this.notifier = notifier;
this.terminator = terminator;
this.result = result;
this.input = input;
this.busy = busy;
this.done = done;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Reductions.Process.prototype.call = (function (unused__18786__auto__){
var self__ = this;
var self__ = this;
var G__44582 = (arguments.length - (1));
switch (G__44582) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Reductions.Process.prototype.apply = (function (self__,args44581){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args44581)));
}));

(missionary.impl.Reductions.Process.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return (self__.input.cljs$core$IFn$_invoke$arity$0 ? self__.input.cljs$core$IFn$_invoke$arity$0() : self__.input.call(null));
}));

(missionary.impl.Reductions.Process.prototype.cljs$core$IDeref$_deref$arity$1 = (function (p){
var self__ = this;
var p__$1 = this;
return (missionary.impl.Reductions.transfer.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Reductions.transfer.cljs$core$IFn$_invoke$arity$1(p__$1) : missionary.impl.Reductions.transfer.call(null,p__$1));
}));

(missionary.impl.Reductions.Process.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reducer","reducer",-948842876,null),new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"input","input",-2097503808,null),cljs.core.with_meta(new cljs.core.Symbol(null,"busy","busy",1312244726,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"done","done",750687339,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null))], null);
}));

(missionary.impl.Reductions.Process.cljs$lang$type = true);

(missionary.impl.Reductions.Process.cljs$lang$ctorStr = "missionary.impl.Reductions/Process");

(missionary.impl.Reductions.Process.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"missionary.impl.Reductions/Process");
}));

/**
 * Positional factory function for missionary.impl.Reductions/Process.
 */
missionary.impl.Reductions.__GT_Process = (function missionary$impl$Reductions$__GT_Process(reducer,notifier,terminator,result,input,busy,done){
return (new missionary.impl.Reductions.Process(reducer,notifier,terminator,result,input,busy,done));
});

missionary.impl.Reductions.ready = (function missionary$impl$Reductions$ready(p){
var cb = null;
while(true){
if(cljs.core.truth_((p.busy = cljs.core.not(p.busy)))){
if(cljs.core.truth_(p.done)){
return p.terminator;
} else {
if((p.reducer == null)){
try{cljs.core.deref(p.input);
}catch (e44593){var __44611 = e44593;
}
var G__44612 = cb;
cb = G__44612;
continue;
} else {
return p.notifier;
}
}
} else {
return cb;
}
break;
}
});
missionary.impl.Reductions.transfer = (function missionary$impl$Reductions$transfer(ps){
try{var f_44613 = ps.reducer;
var r_44614 = ps.result;
var r_44615__$1 = (((r_44614 === ps))?(f_44613.cljs$core$IFn$_invoke$arity$0 ? f_44613.cljs$core$IFn$_invoke$arity$0() : f_44613.call(null)):(function (){var G__44597 = r_44614;
var G__44598 = cljs.core.deref(ps.input);
return (f_44613.cljs$core$IFn$_invoke$arity$2 ? f_44613.cljs$core$IFn$_invoke$arity$2(G__44597,G__44598) : f_44613.call(null,G__44597,G__44598));
})());
(ps.result = ((cljs.core.reduced_QMARK_(r_44615__$1))?(function (){
var fexpr__44599_44616 = ps.input;
(fexpr__44599_44616.cljs$core$IFn$_invoke$arity$0 ? fexpr__44599_44616.cljs$core$IFn$_invoke$arity$0() : fexpr__44599_44616.call(null));

(ps.reducer = null);

return cljs.core.deref(r_44615__$1);
})()
:r_44615__$1));
}catch (e44595){var e_44617 = e44595;
var fexpr__44596_44618 = ps.input;
(fexpr__44596_44618.cljs$core$IFn$_invoke$arity$0 ? fexpr__44596_44618.cljs$core$IFn$_invoke$arity$0() : fexpr__44596_44618.call(null));

(ps.notifier = null);

(ps.reducer = null);

(ps.result = e_44617);
}
var temp__5820__auto___44619 = missionary.impl.Reductions.ready(ps);
if((temp__5820__auto___44619 == null)){
} else {
var cb_44620 = temp__5820__auto___44619;
(cb_44620.cljs$core$IFn$_invoke$arity$0 ? cb_44620.cljs$core$IFn$_invoke$arity$0() : cb_44620.call(null));
}

if((ps.notifier == null)){
throw ps.result;
} else {
return ps.result;
}
});
missionary.impl.Reductions.run = (function missionary$impl$Reductions$run(rf,f,n,t){
var ps = missionary.impl.Reductions.__GT_Process(rf,n,t,null,null,true,false);
(ps.result = ps);

(ps.input = (function (){var G__44606 = (function (){
var temp__5820__auto__ = missionary.impl.Reductions.ready(ps);
if((temp__5820__auto__ == null)){
return null;
} else {
var cb = temp__5820__auto__;
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
}
});
var G__44607 = (function (){
(ps.done = true);

var temp__5820__auto__ = missionary.impl.Reductions.ready(ps);
if((temp__5820__auto__ == null)){
return null;
} else {
var cb = temp__5820__auto__;
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
}
});
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__44606,G__44607) : f.call(null,G__44606,G__44607));
})());

(n.cljs$core$IFn$_invoke$arity$0 ? n.cljs$core$IFn$_invoke$arity$0() : n.call(null));

return ps;
});

//# sourceMappingURL=missionary.impl.Reductions.js.map
