goog.provide('hyperfiddle.electric.impl.array_fields');
hyperfiddle.electric.impl.array_fields.swap = (function hyperfiddle$electric$impl$array_fields$swap(var_args){
var G__45557 = arguments.length;
switch (G__45557) {
case 3:
return hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var args_arr__5747__auto__ = [];
var len__5722__auto___45585 = arguments.length;
var i__5723__auto___45586 = (0);
while(true){
if((i__5723__auto___45586 < len__5722__auto___45585)){
args_arr__5747__auto__.push((arguments[i__5723__auto___45586]));

var G__45587 = (i__5723__auto___45586 + (1));
i__5723__auto___45586 = G__45587;
continue;
} else {
}
break;
}

var argseq__5748__auto__ = ((((6) < args_arr__5747__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5747__auto__.slice((6)),(0),null)):null);
return hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__5748__auto__);

}
});

(hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$3 = (function (a,k,f){
return (a[k] = (function (){var G__45563 = (a[k]);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__45563) : f.call(null,G__45563));
})());
}));

(hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$4 = (function (a,k,f,x){
return (a[k] = (function (){var G__45565 = (a[k]);
var G__45566 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__45565,G__45566) : f.call(null,G__45565,G__45566));
})());
}));

(hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$5 = (function (a,k,f,x,y){
return (a[k] = (function (){var G__45568 = (a[k]);
var G__45569 = x;
var G__45570 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__45568,G__45569,G__45570) : f.call(null,G__45568,G__45569,G__45570));
})());
}));

(hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$6 = (function (a,k,f,x,y,z){
return (a[k] = (function (){var G__45573 = (a[k]);
var G__45574 = x;
var G__45575 = y;
var G__45576 = z;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__45573,G__45574,G__45575,G__45576) : f.call(null,G__45573,G__45574,G__45575,G__45576));
})());
}));

(hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$variadic = (function (a,k,f,x,y,z,more){
return (a[k] = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,(a[k]),x,y,z,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0)));
}));

/** @this {Function} */
(hyperfiddle.electric.impl.array_fields.swap.cljs$lang$applyTo = (function (seq45550){
var G__45551 = cljs.core.first(seq45550);
var seq45550__$1 = cljs.core.next(seq45550);
var G__45552 = cljs.core.first(seq45550__$1);
var seq45550__$2 = cljs.core.next(seq45550__$1);
var G__45553 = cljs.core.first(seq45550__$2);
var seq45550__$3 = cljs.core.next(seq45550__$2);
var G__45554 = cljs.core.first(seq45550__$3);
var seq45550__$4 = cljs.core.next(seq45550__$3);
var G__45555 = cljs.core.first(seq45550__$4);
var seq45550__$5 = cljs.core.next(seq45550__$4);
var G__45556 = cljs.core.first(seq45550__$5);
var seq45550__$6 = cljs.core.next(seq45550__$5);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45551,G__45552,G__45553,G__45554,G__45555,G__45556,seq45550__$6);
}));

(hyperfiddle.electric.impl.array_fields.swap.cljs$lang$maxFixedArity = (6));

hyperfiddle.electric.impl.array_fields.get = (function hyperfiddle$electric$impl$array_fields$get(a,k){
return (a[k]);
});
hyperfiddle.electric.impl.array_fields.getset = (function hyperfiddle$electric$impl$array_fields$getset(a,k,v){
var ret = (a[k]);
(a[k] = v);

return ret;
});
hyperfiddle.electric.impl.array_fields.getswap = (function hyperfiddle$electric$impl$array_fields$getswap(a,k,f){
var ret = (a[k]);
hyperfiddle.electric.impl.array_fields.swap.cljs$core$IFn$_invoke$arity$3(a,k,f);

return ret;
});

/**
* @constructor
*/
hyperfiddle.electric.impl.array_fields.P = (function (state_){
this.state_ = state_;
});

(hyperfiddle.electric.impl.array_fields.P.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state-","state-",-416998234,null)], null);
}));

(hyperfiddle.electric.impl.array_fields.P.cljs$lang$type = true);

(hyperfiddle.electric.impl.array_fields.P.cljs$lang$ctorStr = "hyperfiddle.electric.impl.array-fields/P");

(hyperfiddle.electric.impl.array_fields.P.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"hyperfiddle.electric.impl.array-fields/P");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.array-fields/P.
 */
hyperfiddle.electric.impl.array_fields.__GT_P = (function hyperfiddle$electric$impl$array_fields$__GT_P(state_){
return (new hyperfiddle.electric.impl.array_fields.P(state_));
});


//# sourceMappingURL=hyperfiddle.electric.impl.array_fields.js.map
