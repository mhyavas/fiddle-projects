goog.provide('contrib.missionary_contrib');
contrib.missionary_contrib.mix = (function contrib$missionary_contrib$mix(var_args){
var args__5728__auto__ = [];
var len__5722__auto___47934 = arguments.length;
var i__5723__auto___47935 = (0);
while(true){
if((i__5723__auto___47935 < len__5722__auto___47934)){
args__5728__auto__.push((arguments[i__5723__auto___47935]));

var G__47936 = (i__5723__auto___47935 + (1));
i__5723__auto___47935 = G__47936;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return contrib.missionary_contrib.mix.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(contrib.missionary_contrib.mix.cljs$core$IFn$_invoke$arity$variadic = (function (flows){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr47578_block_0 = (function contrib$missionary_contrib$cr47578_block_0(cr47578_state){
try{var cr47578_place_0 = (1);
var cr47578_place_1 = cljs.core.count;
var cr47578_place_2 = flows;
var cr47578_place_3 = (function (){var G__47596 = cr47578_place_2;
var fexpr__47595 = cr47578_place_1;
return (fexpr__47595.cljs$core$IFn$_invoke$arity$1 ? fexpr__47595.cljs$core$IFn$_invoke$arity$1(G__47596) : fexpr__47595.call(null,G__47596));
})();
var cr47578_place_4 = missionary.core.seed;
var cr47578_place_5 = flows;
var cr47578_place_6 = (function (){var G__47599 = cr47578_place_5;
var fexpr__47598 = cr47578_place_4;
return (fexpr__47598.cljs$core$IFn$_invoke$arity$1 ? fexpr__47598.cljs$core$IFn$_invoke$arity$1(G__47599) : fexpr__47598.call(null,G__47599));
})();
(cr47578_state[(0)] = cr47578_block_1);

(cr47578_state[(1)] = cr47578_place_0);

return missionary.core.fork(cr47578_place_3,cr47578_place_6);
}catch (e47594){var cr47578_exception = e47594;
(cr47578_state[(0)] = null);

throw cr47578_exception;
}});
var cr47578_block_1 = (function contrib$missionary_contrib$cr47578_block_1(cr47578_state){
try{var cr47578_place_0 = (cr47578_state[(1)]);
var cr47578_place_7 = missionary.core.unpark();
(cr47578_state[(0)] = cr47578_block_2);

(cr47578_state[(1)] = null);

return missionary.core.fork(cr47578_place_0,cr47578_place_7);
}catch (e47601){var cr47578_exception = e47601;
(cr47578_state[(0)] = null);

(cr47578_state[(1)] = null);

throw cr47578_exception;
}});
var cr47578_block_2 = (function contrib$missionary_contrib$cr47578_block_2(cr47578_state){
try{var cr47578_place_8 = missionary.core.unpark();
(cr47578_state[(0)] = null);

return cr47578_place_8;
}catch (e47603){var cr47578_exception = e47603;
(cr47578_state[(0)] = null);

throw cr47578_exception;
}});
return cloroutine.impl.coroutine((function (){var G__47607 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__47607[(0)] = cr47578_block_0);

return G__47607;
})());
})(),missionary.core.ap_run);
}));

(contrib.missionary_contrib.mix.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(contrib.missionary_contrib.mix.cljs$lang$applyTo = (function (seq47570){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47570));
}));

/**
 * blocking iterable pattern
 */
contrib.missionary_contrib.iterator_consumer = (function contrib$missionary_contrib$iterator_consumer(it){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr47612_block_4 = (function contrib$missionary_contrib$iterator_consumer_$_cr47612_block_4(cr47612_state){
try{var cr47612_place_8 = missionary.core.unpark();
(cr47612_state[(0)] = cr47612_block_12);

(cr47612_state[(1)] = cr47612_place_8);

return cr47612_state;
}catch (e47662){var cr47612_exception = e47662;
(cr47612_state[(0)] = null);

(cr47612_state[(1)] = null);

throw cr47612_exception;
}});
var cr47612_block_10 = (function contrib$missionary_contrib$iterator_consumer_$_cr47612_block_10(cr47612_state){
try{var cr47612_place_15 = (cr47612_state[(1)]);
var cr47612_place_23 = "No matching clause: ";
var cr47612_place_24 = cr47612_place_15;
var cr47612_place_25 = [cr47612_place_23,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr47612_place_24)].join('');
var cr47612_place_26 = (new Error(cr47612_place_25));
var cr47612_place_27 = (function(){throw cr47612_place_26})();
(cr47612_state[(0)] = null);

(cr47612_state[(1)] = null);

return null;
}catch (e47663){var cr47612_exception = e47663;
(cr47612_state[(0)] = null);

(cr47612_state[(1)] = null);

throw cr47612_exception;
}});
var cr47612_block_3 = (function contrib$missionary_contrib$iterator_consumer_$_cr47612_block_3(cr47612_state){
try{var cr47612_place_6 = (1);
var cr47612_place_7 = missionary.core.none;
(cr47612_state[(0)] = cr47612_block_4);

return missionary.core.fork(cr47612_place_6,cr47612_place_7);
}catch (e47677){var cr47612_exception = e47677;
(cr47612_state[(0)] = null);

(cr47612_state[(1)] = null);

throw cr47612_exception;
}});
var cr47612_block_6 = (function contrib$missionary_contrib$iterator_consumer_$_cr47612_block_6(cr47612_state){
try{var cr47612_place_15 = missionary.core.unpark();
var cr47612_place_16 = cr47612_place_15;
var cr47612_place_17 = null;
var G__47679 = cr47612_place_16;
switch (G__47679) {
case (0):
(cr47612_state[(0)] = cr47612_block_7);

(cr47612_state[(2)] = cr47612_place_17);

return cr47612_state;

break;
case (1):
(cr47612_state[(0)] = cr47612_block_9);

(cr47612_state[(1)] = null);

return cr47612_state;

break;
default:
(cr47612_state[(0)] = cr47612_block_10);

(cr47612_state[(1)] = null);

(cr47612_state[(1)] = cr47612_place_15);

return cr47612_state;

}
}catch (e47678){var cr47612_exception = e47678;
(cr47612_state[(0)] = null);

(cr47612_state[(1)] = null);

throw cr47612_exception;
}});
var cr47612_block_12 = (function contrib$missionary_contrib$iterator_consumer_$_cr47612_block_12(cr47612_state){
try{var cr47612_place_5 = (cr47612_state[(1)]);
(cr47612_state[(0)] = null);

(cr47612_state[(1)] = null);

return cr47612_place_5;
}catch (e47681){var cr47612_exception = e47681;
(cr47612_state[(0)] = null);

(cr47612_state[(1)] = null);

throw cr47612_exception;
}});
var cr47612_block_7 = (function contrib$missionary_contrib$iterator_consumer_$_cr47612_block_7(cr47612_state){
try{var cr47612_place_18 = missionary.core.via_call;
var cr47612_place_19 = missionary.core.blk;
var cr47612_place_20 = (function (){
return it.next();
});
var cr47612_place_21 = (function (){var G__47684 = cr47612_place_19;
var G__47685 = cr47612_place_20;
var fexpr__47683 = cr47612_place_18;
return (fexpr__47683.cljs$core$IFn$_invoke$arity$2 ? fexpr__47683.cljs$core$IFn$_invoke$arity$2(G__47684,G__47685) : fexpr__47683.call(null,G__47684,G__47685));
})();
(cr47612_state[(0)] = cr47612_block_8);

return missionary.core.park(cr47612_place_21);
}catch (e47682){var cr47612_exception = e47682;
(cr47612_state[(0)] = null);

(cr47612_state[(2)] = null);

(cr47612_state[(1)] = null);

throw cr47612_exception;
}});
var cr47612_block_11 = (function contrib$missionary_contrib$iterator_consumer_$_cr47612_block_11(cr47612_state){
try{var cr47612_place_17 = (cr47612_state[(2)]);
(cr47612_state[(0)] = cr47612_block_12);

(cr47612_state[(2)] = null);

(cr47612_state[(1)] = cr47612_place_17);

return cr47612_state;
}catch (e47686){var cr47612_exception = e47686;
(cr47612_state[(0)] = null);

(cr47612_state[(2)] = null);

(cr47612_state[(1)] = null);

throw cr47612_exception;
}});
var cr47612_block_8 = (function contrib$missionary_contrib$iterator_consumer_$_cr47612_block_8(cr47612_state){
try{var cr47612_place_22 = missionary.core.unpark();
(cr47612_state[(0)] = cr47612_block_11);

(cr47612_state[(2)] = cr47612_place_22);

return cr47612_state;
}catch (e47689){var cr47612_exception = e47689;
(cr47612_state[(0)] = null);

(cr47612_state[(2)] = null);

(cr47612_state[(1)] = null);

throw cr47612_exception;
}});
var cr47612_block_9 = (function contrib$missionary_contrib$iterator_consumer_$_cr47612_block_9(cr47612_state){
try{(cr47612_state[(0)] = cr47612_block_1);

return cr47612_state;
}catch (e47693){var cr47612_exception = e47693;
(cr47612_state[(0)] = null);

throw cr47612_exception;
}});
var cr47612_block_5 = (function contrib$missionary_contrib$iterator_consumer_$_cr47612_block_5(cr47612_state){
try{var cr47612_place_9 = (1);
var cr47612_place_10 = missionary.core.seed;
var cr47612_place_11 = cljs.core.range;
var cr47612_place_12 = (2);
var cr47612_place_13 = (function (){var G__47697 = cr47612_place_12;
var fexpr__47696 = cr47612_place_11;
return (fexpr__47696.cljs$core$IFn$_invoke$arity$1 ? fexpr__47696.cljs$core$IFn$_invoke$arity$1(G__47697) : fexpr__47696.call(null,G__47697));
})();
var cr47612_place_14 = (function (){var G__47699 = cr47612_place_13;
var fexpr__47698 = cr47612_place_10;
return (fexpr__47698.cljs$core$IFn$_invoke$arity$1 ? fexpr__47698.cljs$core$IFn$_invoke$arity$1(G__47699) : fexpr__47698.call(null,G__47699));
})();
(cr47612_state[(0)] = cr47612_block_6);

return missionary.core.fork(cr47612_place_9,cr47612_place_14);
}catch (e47694){var cr47612_exception = e47694;
(cr47612_state[(0)] = null);

(cr47612_state[(1)] = null);

throw cr47612_exception;
}});
var cr47612_block_0 = (function contrib$missionary_contrib$iterator_consumer_$_cr47612_block_0(cr47612_state){
try{(cr47612_state[(0)] = cr47612_block_1);

return cr47612_state;
}catch (e47700){var cr47612_exception = e47700;
(cr47612_state[(0)] = null);

throw cr47612_exception;
}});
var cr47612_block_1 = (function contrib$missionary_contrib$iterator_consumer_$_cr47612_block_1(cr47612_state){
try{var cr47612_place_0 = missionary.core.via_call;
var cr47612_place_1 = missionary.core.blk;
var cr47612_place_2 = (function (){
return it.hasNext();
});
var cr47612_place_3 = (function (){var G__47703 = cr47612_place_1;
var G__47704 = cr47612_place_2;
var fexpr__47702 = cr47612_place_0;
return (fexpr__47702.cljs$core$IFn$_invoke$arity$2 ? fexpr__47702.cljs$core$IFn$_invoke$arity$2(G__47703,G__47704) : fexpr__47702.call(null,G__47703,G__47704));
})();
(cr47612_state[(0)] = cr47612_block_2);

return missionary.core.park(cr47612_place_3);
}catch (e47701){var cr47612_exception = e47701;
(cr47612_state[(0)] = null);

throw cr47612_exception;
}});
var cr47612_block_2 = (function contrib$missionary_contrib$iterator_consumer_$_cr47612_block_2(cr47612_state){
try{var cr47612_place_4 = missionary.core.unpark();
var cr47612_place_5 = null;
if(cljs.core.truth_(cr47612_place_4)){
(cr47612_state[(0)] = cr47612_block_5);

(cr47612_state[(1)] = cr47612_place_5);

return cr47612_state;
} else {
(cr47612_state[(0)] = cr47612_block_3);

(cr47612_state[(1)] = cr47612_place_5);

return cr47612_state;
}
}catch (e47706){var cr47612_exception = e47706;
(cr47612_state[(0)] = null);

throw cr47612_exception;
}});
return cloroutine.impl.coroutine((function (){var G__47707 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3));
(G__47707[(0)] = cr47612_block_0);

return G__47707;
})());
})(),missionary.core.ap_run);
});
contrib.missionary_contrib.seq_consumer = (function contrib$missionary_contrib$seq_consumer(xs){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr47712_block_1 = (function contrib$missionary_contrib$seq_consumer_$_cr47712_block_1(cr47712_state){
try{var cr47712_place_0 = (cr47712_state[(1)]);
var cr47712_place_1 = missionary.core.via_call;
var cr47712_place_2 = missionary.core.blk;
var cr47712_place_3 = (function (){
return cljs.core.seq(cr47712_place_0);
});
var cr47712_place_4 = (function (){var G__47781 = cr47712_place_2;
var G__47782 = cr47712_place_3;
var fexpr__47780 = cr47712_place_1;
return (fexpr__47780.cljs$core$IFn$_invoke$arity$2 ? fexpr__47780.cljs$core$IFn$_invoke$arity$2(G__47781,G__47782) : fexpr__47780.call(null,G__47781,G__47782));
})();
(cr47712_state[(0)] = cr47712_block_2);

return missionary.core.park(cr47712_place_4);
}catch (e47779){var cr47712_exception = e47779;
(cr47712_state[(0)] = null);

(cr47712_state[(1)] = null);

throw cr47712_exception;
}});
var cr47712_block_6 = (function contrib$missionary_contrib$seq_consumer_$_cr47712_block_6(cr47712_state){
try{var cr47712_place_16 = missionary.core.unpark();
var cr47712_place_17 = cr47712_place_16;
var cr47712_place_18 = null;
var G__47784 = cr47712_place_17;
switch (G__47784) {
case (0):
(cr47712_state[(0)] = cr47712_block_7);

(cr47712_state[(3)] = cr47712_place_18);

return cr47712_state;

break;
case (1):
(cr47712_state[(0)] = cr47712_block_9);

(cr47712_state[(2)] = null);

return cr47712_state;

break;
default:
(cr47712_state[(0)] = cr47712_block_10);

(cr47712_state[(1)] = null);

(cr47712_state[(2)] = null);

(cr47712_state[(1)] = cr47712_place_16);

return cr47712_state;

}
}catch (e47783){var cr47712_exception = e47783;
(cr47712_state[(0)] = null);

(cr47712_state[(1)] = null);

(cr47712_state[(2)] = null);

throw cr47712_exception;
}});
var cr47712_block_4 = (function contrib$missionary_contrib$seq_consumer_$_cr47712_block_4(cr47712_state){
try{var cr47712_place_9 = missionary.core.unpark();
(cr47712_state[(0)] = cr47712_block_12);

(cr47712_state[(2)] = cr47712_place_9);

return cr47712_state;
}catch (e47785){var cr47712_exception = e47785;
(cr47712_state[(0)] = null);

(cr47712_state[(2)] = null);

throw cr47712_exception;
}});
var cr47712_block_0 = (function contrib$missionary_contrib$seq_consumer_$_cr47712_block_0(cr47712_state){
try{var cr47712_place_0 = xs;
(cr47712_state[(0)] = cr47712_block_1);

(cr47712_state[(1)] = cr47712_place_0);

return cr47712_state;
}catch (e47786){var cr47712_exception = e47786;
(cr47712_state[(0)] = null);

throw cr47712_exception;
}});
var cr47712_block_5 = (function contrib$missionary_contrib$seq_consumer_$_cr47712_block_5(cr47712_state){
try{var cr47712_place_10 = (1);
var cr47712_place_11 = missionary.core.seed;
var cr47712_place_12 = cljs.core.range;
var cr47712_place_13 = (2);
var cr47712_place_14 = (function (){var G__47791 = cr47712_place_13;
var fexpr__47790 = cr47712_place_12;
return (fexpr__47790.cljs$core$IFn$_invoke$arity$1 ? fexpr__47790.cljs$core$IFn$_invoke$arity$1(G__47791) : fexpr__47790.call(null,G__47791));
})();
var cr47712_place_15 = (function (){var G__47800 = cr47712_place_14;
var fexpr__47799 = cr47712_place_11;
return (fexpr__47799.cljs$core$IFn$_invoke$arity$1 ? fexpr__47799.cljs$core$IFn$_invoke$arity$1(G__47800) : fexpr__47799.call(null,G__47800));
})();
(cr47712_state[(0)] = cr47712_block_6);

return missionary.core.fork(cr47712_place_10,cr47712_place_15);
}catch (e47789){var cr47712_exception = e47789;
(cr47712_state[(0)] = null);

(cr47712_state[(1)] = null);

(cr47712_state[(2)] = null);

throw cr47712_exception;
}});
var cr47712_block_11 = (function contrib$missionary_contrib$seq_consumer_$_cr47712_block_11(cr47712_state){
try{var cr47712_place_18 = (cr47712_state[(3)]);
(cr47712_state[(0)] = cr47712_block_12);

(cr47712_state[(3)] = null);

(cr47712_state[(2)] = cr47712_place_18);

return cr47712_state;
}catch (e47806){var cr47712_exception = e47806;
(cr47712_state[(0)] = null);

(cr47712_state[(3)] = null);

(cr47712_state[(2)] = null);

throw cr47712_exception;
}});
var cr47712_block_10 = (function contrib$missionary_contrib$seq_consumer_$_cr47712_block_10(cr47712_state){
try{var cr47712_place_16 = (cr47712_state[(1)]);
var cr47712_place_27 = "No matching clause: ";
var cr47712_place_28 = cr47712_place_16;
var cr47712_place_29 = [cr47712_place_27,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr47712_place_28)].join('');
var cr47712_place_30 = (new Error(cr47712_place_29));
var cr47712_place_31 = (function(){throw cr47712_place_30})();
(cr47712_state[(0)] = null);

(cr47712_state[(1)] = null);

return null;
}catch (e47807){var cr47712_exception = e47807;
(cr47712_state[(0)] = null);

(cr47712_state[(1)] = null);

throw cr47712_exception;
}});
var cr47712_block_9 = (function contrib$missionary_contrib$seq_consumer_$_cr47712_block_9(cr47712_state){
try{var cr47712_place_0 = (cr47712_state[(1)]);
var cr47712_place_24 = cljs.core.rest;
var cr47712_place_25 = cr47712_place_0;
var cr47712_place_26 = (function (){var G__47810 = cr47712_place_25;
var fexpr__47809 = cr47712_place_24;
return (fexpr__47809.cljs$core$IFn$_invoke$arity$1 ? fexpr__47809.cljs$core$IFn$_invoke$arity$1(G__47810) : fexpr__47809.call(null,G__47810));
})();
(cr47712_state[(0)] = cr47712_block_1);

(cr47712_state[(1)] = cr47712_place_26);

return cr47712_state;
}catch (e47808){var cr47712_exception = e47808;
(cr47712_state[(0)] = null);

(cr47712_state[(1)] = null);

throw cr47712_exception;
}});
var cr47712_block_2 = (function contrib$missionary_contrib$seq_consumer_$_cr47712_block_2(cr47712_state){
try{var cr47712_place_5 = missionary.core.unpark();
var cr47712_place_6 = null;
if(cljs.core.truth_(cr47712_place_5)){
(cr47712_state[(0)] = cr47712_block_5);

(cr47712_state[(2)] = cr47712_place_6);

return cr47712_state;
} else {
(cr47712_state[(0)] = cr47712_block_3);

(cr47712_state[(1)] = null);

(cr47712_state[(2)] = cr47712_place_6);

return cr47712_state;
}
}catch (e47811){var cr47712_exception = e47811;
(cr47712_state[(0)] = null);

(cr47712_state[(1)] = null);

throw cr47712_exception;
}});
var cr47712_block_3 = (function contrib$missionary_contrib$seq_consumer_$_cr47712_block_3(cr47712_state){
try{var cr47712_place_7 = (1);
var cr47712_place_8 = missionary.core.none;
(cr47712_state[(0)] = cr47712_block_4);

return missionary.core.fork(cr47712_place_7,cr47712_place_8);
}catch (e47812){var cr47712_exception = e47812;
(cr47712_state[(0)] = null);

(cr47712_state[(2)] = null);

throw cr47712_exception;
}});
var cr47712_block_7 = (function contrib$missionary_contrib$seq_consumer_$_cr47712_block_7(cr47712_state){
try{var cr47712_place_0 = (cr47712_state[(1)]);
var cr47712_place_19 = missionary.core.via_call;
var cr47712_place_20 = missionary.core.blk;
var cr47712_place_21 = (function (){
return cljs.core.first(cr47712_place_0);
});
var cr47712_place_22 = (function (){var G__47815 = cr47712_place_20;
var G__47816 = cr47712_place_21;
var fexpr__47814 = cr47712_place_19;
return (fexpr__47814.cljs$core$IFn$_invoke$arity$2 ? fexpr__47814.cljs$core$IFn$_invoke$arity$2(G__47815,G__47816) : fexpr__47814.call(null,G__47815,G__47816));
})();
(cr47712_state[(0)] = cr47712_block_8);

(cr47712_state[(1)] = null);

return missionary.core.park(cr47712_place_22);
}catch (e47813){var cr47712_exception = e47813;
(cr47712_state[(0)] = null);

(cr47712_state[(1)] = null);

(cr47712_state[(3)] = null);

(cr47712_state[(2)] = null);

throw cr47712_exception;
}});
var cr47712_block_8 = (function contrib$missionary_contrib$seq_consumer_$_cr47712_block_8(cr47712_state){
try{var cr47712_place_23 = missionary.core.unpark();
(cr47712_state[(0)] = cr47712_block_11);

(cr47712_state[(3)] = cr47712_place_23);

return cr47712_state;
}catch (e47817){var cr47712_exception = e47817;
(cr47712_state[(0)] = null);

(cr47712_state[(3)] = null);

(cr47712_state[(2)] = null);

throw cr47712_exception;
}});
var cr47712_block_12 = (function contrib$missionary_contrib$seq_consumer_$_cr47712_block_12(cr47712_state){
try{var cr47712_place_6 = (cr47712_state[(2)]);
(cr47712_state[(0)] = null);

(cr47712_state[(2)] = null);

return cr47712_place_6;
}catch (e47818){var cr47712_exception = e47818;
(cr47712_state[(0)] = null);

(cr47712_state[(2)] = null);

throw cr47712_exception;
}});
return cloroutine.impl.coroutine((function (){var G__47820 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((4));
(G__47820[(0)] = cr47712_block_0);

return G__47820;
})());
})(),missionary.core.ap_run);
});
/**
 * derive discrete flow from succession of polled values from a task (or mbox)
 */
contrib.missionary_contrib.poll_task = (function contrib$missionary_contrib$poll_task(task){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr47826_block_2 = (function contrib$missionary_contrib$poll_task_$_cr47826_block_2(cr47826_state){
try{var cr47826_place_2 = (1);
var cr47826_place_3 = missionary.core.seed;
var cr47826_place_4 = cljs.core.range;
var cr47826_place_5 = (2);
var cr47826_place_6 = (function (){var G__47865 = cr47826_place_5;
var fexpr__47864 = cr47826_place_4;
return (fexpr__47864.cljs$core$IFn$_invoke$arity$1 ? fexpr__47864.cljs$core$IFn$_invoke$arity$1(G__47865) : fexpr__47864.call(null,G__47865));
})();
var cr47826_place_7 = (function (){var G__47869 = cr47826_place_6;
var fexpr__47868 = cr47826_place_3;
return (fexpr__47868.cljs$core$IFn$_invoke$arity$1 ? fexpr__47868.cljs$core$IFn$_invoke$arity$1(G__47869) : fexpr__47868.call(null,G__47869));
})();
(cr47826_state[(0)] = cr47826_block_3);

return missionary.core.fork(cr47826_place_2,cr47826_place_7);
}catch (e47862){var cr47826_exception = e47862;
(cr47826_state[(0)] = null);

(cr47826_state[(1)] = null);

throw cr47826_exception;
}});
var cr47826_block_7 = (function contrib$missionary_contrib$poll_task_$_cr47826_block_7(cr47826_state){
try{var cr47826_place_8 = (cr47826_state[(1)]);
var cr47826_place_14 = "No matching clause: ";
var cr47826_place_15 = cr47826_place_8;
var cr47826_place_16 = [cr47826_place_14,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr47826_place_15)].join('');
var cr47826_place_17 = (new Error(cr47826_place_16));
var cr47826_place_18 = (function(){throw cr47826_place_17})();
(cr47826_state[(0)] = null);

(cr47826_state[(1)] = null);

return null;
}catch (e47870){var cr47826_exception = e47870;
(cr47826_state[(0)] = null);

(cr47826_state[(1)] = null);

throw cr47826_exception;
}});
var cr47826_block_0 = (function contrib$missionary_contrib$poll_task_$_cr47826_block_0(cr47826_state){
try{var cr47826_place_0 = task;
(cr47826_state[(0)] = cr47826_block_1);

return missionary.core.park(cr47826_place_0);
}catch (e47876){var cr47826_exception = e47876;
(cr47826_state[(0)] = null);

throw cr47826_exception;
}});
var cr47826_block_3 = (function contrib$missionary_contrib$poll_task_$_cr47826_block_3(cr47826_state){
try{var cr47826_place_8 = missionary.core.unpark();
var cr47826_place_9 = cr47826_place_8;
var cr47826_place_10 = null;
var G__47891 = cr47826_place_9;
switch (G__47891) {
case (0):
(cr47826_state[(0)] = cr47826_block_4);

(cr47826_state[(2)] = cr47826_place_10);

return cr47826_state;

break;
case (1):
(cr47826_state[(0)] = cr47826_block_5);

return cr47826_state;

break;
default:
(cr47826_state[(0)] = cr47826_block_7);

(cr47826_state[(1)] = null);

(cr47826_state[(1)] = cr47826_place_8);

return cr47826_state;

}
}catch (e47890){var cr47826_exception = e47890;
(cr47826_state[(0)] = null);

(cr47826_state[(1)] = null);

throw cr47826_exception;
}});
var cr47826_block_4 = (function contrib$missionary_contrib$poll_task_$_cr47826_block_4(cr47826_state){
try{var cr47826_place_1 = (cr47826_state[(1)]);
var cr47826_place_11 = cr47826_place_1;
(cr47826_state[(0)] = cr47826_block_8);

(cr47826_state[(1)] = null);

(cr47826_state[(2)] = cr47826_place_11);

return cr47826_state;
}catch (e47893){var cr47826_exception = e47893;
(cr47826_state[(0)] = null);

(cr47826_state[(1)] = null);

(cr47826_state[(2)] = null);

throw cr47826_exception;
}});
var cr47826_block_8 = (function contrib$missionary_contrib$poll_task_$_cr47826_block_8(cr47826_state){
try{var cr47826_place_10 = (cr47826_state[(2)]);
(cr47826_state[(0)] = null);

(cr47826_state[(2)] = null);

return cr47826_place_10;
}catch (e47895){var cr47826_exception = e47895;
(cr47826_state[(0)] = null);

(cr47826_state[(2)] = null);

throw cr47826_exception;
}});
var cr47826_block_5 = (function contrib$missionary_contrib$poll_task_$_cr47826_block_5(cr47826_state){
try{var cr47826_place_12 = task;
(cr47826_state[(0)] = cr47826_block_6);

return missionary.core.park(cr47826_place_12);
}catch (e47898){var cr47826_exception = e47898;
(cr47826_state[(0)] = null);

(cr47826_state[(1)] = null);

throw cr47826_exception;
}});
var cr47826_block_6 = (function contrib$missionary_contrib$poll_task_$_cr47826_block_6(cr47826_state){
try{var cr47826_place_13 = missionary.core.unpark();
(cr47826_state[(0)] = cr47826_block_2);

(cr47826_state[(1)] = cr47826_place_13);

return cr47826_state;
}catch (e47902){var cr47826_exception = e47902;
(cr47826_state[(0)] = null);

(cr47826_state[(1)] = null);

throw cr47826_exception;
}});
var cr47826_block_1 = (function contrib$missionary_contrib$poll_task_$_cr47826_block_1(cr47826_state){
try{var cr47826_place_1 = missionary.core.unpark();
(cr47826_state[(0)] = cr47826_block_2);

(cr47826_state[(1)] = cr47826_place_1);

return cr47826_state;
}catch (e47913){var cr47826_exception = e47913;
(cr47826_state[(0)] = null);

throw cr47826_exception;
}});
return cloroutine.impl.coroutine((function (){var G__47916 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3));
(G__47916[(0)] = cr47826_block_0);

return G__47916;
})());
})(),missionary.core.ap_run);
});
/**
 * compare (document log) to (d/entity db eid). if a datomic txn is [op eid a v], 
 * log here is [op a v], or in other words, there is only one entity (the `eid` is 
 * constant) so we are left with not an entity but a document.
 */
contrib.missionary_contrib.document = (function contrib$missionary_contrib$document(_GT_txs){
return missionary.core.reductions.cljs$core$IFn$_invoke$arity$3((function (m,p__47923){
var vec__47924 = p__47923;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47924,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47924,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47924,(2),null);
var G__47927 = op;
var G__47927__$1 = (((G__47927 instanceof cljs.core.Keyword))?G__47927.fqn:null);
switch (G__47927__$1) {
case "contrib.missionary-contrib/add":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,a,v);

break;
case "contrib.missionary-contrib/retract":
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,a);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47927__$1)].join('')));

}
}),cljs.core.PersistentArrayMap.EMPTY,_GT_txs);
});

//# sourceMappingURL=contrib.missionary_contrib.js.map
