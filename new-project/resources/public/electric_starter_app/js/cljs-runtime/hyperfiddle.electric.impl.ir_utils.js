goog.provide('hyperfiddle.electric.impl.ir_utils');
hyperfiddle.electric.impl.ir_utils.reduce_STAR_ = (function hyperfiddle$electric$impl$ir_utils$reduce_STAR_(ir,f,init){
var ac = init;
var todos = (new cljs.core.List(null,ir,null,(1),null));
while(true){
if(((cljs.core.reduced_QMARK_(ac)) || (cljs.core.empty_QMARK_(todos)))){
return cljs.core.unreduced(ac);
} else {
var vec__45803 = cljs.core.seq(todos);
var seq__45804 = cljs.core.seq(vec__45803);
var first__45805 = cljs.core.first(seq__45804);
var seq__45804__$1 = cljs.core.next(seq__45804);
var ir__$1 = first__45805;
var todos__$1 = seq__45804__$1;
var G__45806 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425).cljs$core$IFn$_invoke$arity$1(ir__$1);
var G__45806__$1 = (((G__45806 instanceof cljs.core.Keyword))?G__45806.fqn:null);
switch (G__45806__$1) {
case "hyperfiddle.electric.impl.ir/sub":
case "hyperfiddle.electric.impl.ir/global":
case "hyperfiddle.electric.impl.ir/source":
case "hyperfiddle.electric.impl.ir/def":
case "hyperfiddle.electric.impl.ir/eval":
case "hyperfiddle.electric.impl.ir/node":
case "hyperfiddle.electric.impl.ir/nop":
var G__45846 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(ac,ir__$1) : f.call(null,ac,ir__$1));
var G__45847 = todos__$1;
ac = G__45846;
todos = G__45847;
continue;

break;
case "hyperfiddle.electric.impl.ir/target":
case "hyperfiddle.electric.impl.ir/input":
var G__45848 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(ac,ir__$1) : f.call(null,ac,ir__$1));
var G__45849 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hyperfiddle.electric.impl.ir","deps","hyperfiddle.electric.impl.ir/deps",-1313673773).cljs$core$IFn$_invoke$arity$1(ir__$1),todos__$1);
ac = G__45848;
todos = G__45849;
continue;

break;
case "hyperfiddle.electric.impl.ir/pub":
var G__45850 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(ac,ir__$1) : f.call(null,ac,ir__$1));
var G__45851 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(todos__$1,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","inst","hyperfiddle.electric.impl.ir/inst",-420394775).cljs$core$IFn$_invoke$arity$1(ir__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("hyperfiddle.electric.impl.ir","init","hyperfiddle.electric.impl.ir/init",-819637966).cljs$core$IFn$_invoke$arity$1(ir__$1)], 0));
ac = G__45850;
todos = G__45851;
continue;

break;
case "hyperfiddle.electric.impl.ir/constant":
case "hyperfiddle.electric.impl.ir/variable":
case "hyperfiddle.electric.impl.ir/output":
case "hyperfiddle.electric.impl.ir/lift":
var G__45852 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(ac,ir__$1) : f.call(null,ac,ir__$1));
var G__45853 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(todos__$1,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","init","hyperfiddle.electric.impl.ir/init",-819637966).cljs$core$IFn$_invoke$arity$1(ir__$1));
ac = G__45852;
todos = G__45853;
continue;

break;
case "hyperfiddle.electric.impl.ir/apply":
var G__45854 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(ac,ir__$1) : f.call(null,ac,ir__$1));
var G__45855 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","fn","hyperfiddle.electric.impl.ir/fn",1996468864).cljs$core$IFn$_invoke$arity$1(ir__$1),null,(1),null)),new cljs.core.Keyword("hyperfiddle.electric.impl.ir","args","hyperfiddle.electric.impl.ir/args",291275628).cljs$core$IFn$_invoke$arity$1(ir__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([todos__$1], 0));
ac = G__45854;
todos = G__45855;
continue;

break;
case "hyperfiddle.electric.impl.ir/bind":
var G__45856 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(ac,ir__$1) : f.call(null,ac,ir__$1));
var G__45857 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(todos__$1,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","inst","hyperfiddle.electric.impl.ir/inst",-420394775).cljs$core$IFn$_invoke$arity$1(ir__$1));
ac = G__45856;
todos = G__45857;
continue;

break;
case "hyperfiddle.electric.impl.ir/do":
var G__45858 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(ac,ir__$1) : f.call(null,ac,ir__$1));
var G__45859 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("hyperfiddle.electric.impl.ir","deps","hyperfiddle.electric.impl.ir/deps",-1313673773).cljs$core$IFn$_invoke$arity$1(ir__$1),(new cljs.core.List(null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","inst","hyperfiddle.electric.impl.ir/inst",-420394775).cljs$core$IFn$_invoke$arity$1(ir__$1),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([todos__$1], 0));
ac = G__45858;
todos = G__45859;
continue;

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("what IR op is this?",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inst","inst",645962501),ir__$1], null));

}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
hyperfiddle.electric.impl.ir_utils.t_hyperfiddle$electric$impl$ir_utils45808 = (function (ir,meta45809){
this.ir = ir;
this.meta45809 = meta45809;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.ir_utils.t_hyperfiddle$electric$impl$ir_utils45808.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45810,meta45809__$1){
var self__ = this;
var _45810__$1 = this;
return (new hyperfiddle.electric.impl.ir_utils.t_hyperfiddle$electric$impl$ir_utils45808(self__.ir,meta45809__$1));
}));

(hyperfiddle.electric.impl.ir_utils.t_hyperfiddle$electric$impl$ir_utils45808.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45810){
var self__ = this;
var _45810__$1 = this;
return self__.meta45809;
}));

(hyperfiddle.electric.impl.ir_utils.t_hyperfiddle$electric$impl$ir_utils45808.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return hyperfiddle.electric.impl.ir_utils.reduce_STAR_(self__.ir,f,init);
}));

(hyperfiddle.electric.impl.ir_utils.t_hyperfiddle$electric$impl$ir_utils45808.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
return hyperfiddle.electric.impl.ir_utils.reduce_STAR_(self__.ir,f,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}));

(hyperfiddle.electric.impl.ir_utils.t_hyperfiddle$electric$impl$ir_utils45808.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ir","ir",498778850,null),new cljs.core.Symbol(null,"meta45809","meta45809",-456850502,null)], null);
}));

(hyperfiddle.electric.impl.ir_utils.t_hyperfiddle$electric$impl$ir_utils45808.cljs$lang$type = true);

(hyperfiddle.electric.impl.ir_utils.t_hyperfiddle$electric$impl$ir_utils45808.cljs$lang$ctorStr = "hyperfiddle.electric.impl.ir-utils/t_hyperfiddle$electric$impl$ir_utils45808");

(hyperfiddle.electric.impl.ir_utils.t_hyperfiddle$electric$impl$ir_utils45808.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"hyperfiddle.electric.impl.ir-utils/t_hyperfiddle$electric$impl$ir_utils45808");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.ir-utils/t_hyperfiddle$electric$impl$ir_utils45808.
 */
hyperfiddle.electric.impl.ir_utils.__GT_t_hyperfiddle$electric$impl$ir_utils45808 = (function hyperfiddle$electric$impl$ir_utils$__GT_t_hyperfiddle$electric$impl$ir_utils45808(ir,meta45809){
return (new hyperfiddle.electric.impl.ir_utils.t_hyperfiddle$electric$impl$ir_utils45808(ir,meta45809));
});


hyperfiddle.electric.impl.ir_utils.__GT_reducible = (function hyperfiddle$electric$impl$ir_utils$__GT_reducible(ir){
return (new hyperfiddle.electric.impl.ir_utils.t_hyperfiddle$electric$impl$ir_utils45808(ir,cljs.core.PersistentArrayMap.EMPTY));
});
hyperfiddle.electric.impl.ir_utils.unwrite = (function hyperfiddle$electric$impl$ir_utils$unwrite(i){
var ret = (function (){var G__45812 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425).cljs$core$IFn$_invoke$arity$1(i);
var G__45812__$1 = (((G__45812 instanceof cljs.core.Keyword))?G__45812.fqn:null);
switch (G__45812__$1) {
case "hyperfiddle.electric.impl.ir/sub":
return (new cljs.core.List(null,new cljs.core.Symbol("ir","sub","ir/sub",-453228841,null),(new cljs.core.List(null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","index","hyperfiddle.electric.impl.ir/index",1690646129).cljs$core$IFn$_invoke$arity$1(i),null,(1),null)),(2),null));

break;
case "hyperfiddle.electric.impl.ir/pub":
return (new cljs.core.List(null,new cljs.core.Symbol("ir","pub","ir/pub",451390874,null),(new cljs.core.List(null,(function (){var G__45814 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","init","hyperfiddle.electric.impl.ir/init",-819637966).cljs$core$IFn$_invoke$arity$1(i);
return (hyperfiddle.electric.impl.ir_utils.unwrite.cljs$core$IFn$_invoke$arity$1 ? hyperfiddle.electric.impl.ir_utils.unwrite.cljs$core$IFn$_invoke$arity$1(G__45814) : hyperfiddle.electric.impl.ir_utils.unwrite.call(null,G__45814));
})(),(new cljs.core.List(null,(function (){var G__45815 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","inst","hyperfiddle.electric.impl.ir/inst",-420394775).cljs$core$IFn$_invoke$arity$1(i);
return (hyperfiddle.electric.impl.ir_utils.unwrite.cljs$core$IFn$_invoke$arity$1 ? hyperfiddle.electric.impl.ir_utils.unwrite.cljs$core$IFn$_invoke$arity$1(G__45815) : hyperfiddle.electric.impl.ir_utils.unwrite.call(null,G__45815));
})(),null,(1),null)),(2),null)),(3),null));

break;
case "hyperfiddle.electric.impl.ir/constant":
return (new cljs.core.List(null,new cljs.core.Symbol("ir","constant","ir/constant",1260923049,null),(new cljs.core.List(null,(function (){var G__45816 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","init","hyperfiddle.electric.impl.ir/init",-819637966).cljs$core$IFn$_invoke$arity$1(i);
return (hyperfiddle.electric.impl.ir_utils.unwrite.cljs$core$IFn$_invoke$arity$1 ? hyperfiddle.electric.impl.ir_utils.unwrite.cljs$core$IFn$_invoke$arity$1(G__45816) : hyperfiddle.electric.impl.ir_utils.unwrite.call(null,G__45816));
})(),null,(1),null)),(2),null));

break;
case "hyperfiddle.electric.impl.ir/target":
return (new cljs.core.List(null,new cljs.core.Symbol("ir","target","ir/target",1893538687,null),(new cljs.core.List(null,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.ir_utils.unwrite,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","deps","hyperfiddle.electric.impl.ir/deps",-1313673773).cljs$core$IFn$_invoke$arity$1(i)),null,(1),null)),(2),null));

break;
case "hyperfiddle.electric.impl.ir/apply":
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("ir","apply","ir/apply",-1334046411,null),(function (){var G__45817 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","fn","hyperfiddle.electric.impl.ir/fn",1996468864).cljs$core$IFn$_invoke$arity$1(i);
return (hyperfiddle.electric.impl.ir_utils.unwrite.cljs$core$IFn$_invoke$arity$1 ? hyperfiddle.electric.impl.ir_utils.unwrite.cljs$core$IFn$_invoke$arity$1(G__45817) : hyperfiddle.electric.impl.ir_utils.unwrite.call(null,G__45817));
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.ir_utils.unwrite,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","args","hyperfiddle.electric.impl.ir/args",291275628).cljs$core$IFn$_invoke$arity$1(i)));

break;
case "hyperfiddle.electric.impl.ir/global":
return (new cljs.core.List(null,new cljs.core.Symbol("ir","global","ir/global",1734106421,null),(new cljs.core.List(null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","name","hyperfiddle.electric.impl.ir/name",655661733).cljs$core$IFn$_invoke$arity$1(i),null,(1),null)),(2),null));

break;
case "hyperfiddle.electric.impl.ir/variable":
return (new cljs.core.List(null,new cljs.core.Symbol("ir","variable","ir/variable",1359212976,null),(new cljs.core.List(null,(function (){var G__45818 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","init","hyperfiddle.electric.impl.ir/init",-819637966).cljs$core$IFn$_invoke$arity$1(i);
return (hyperfiddle.electric.impl.ir_utils.unwrite.cljs$core$IFn$_invoke$arity$1 ? hyperfiddle.electric.impl.ir_utils.unwrite.cljs$core$IFn$_invoke$arity$1(G__45818) : hyperfiddle.electric.impl.ir_utils.unwrite.call(null,G__45818));
})(),null,(1),null)),(2),null));

break;
case "hyperfiddle.electric.impl.ir/source":
return (new cljs.core.List(null,new cljs.core.Symbol("ir","source","ir/source",1206604813,null),null,(1),null));

break;
case "hyperfiddle.electric.impl.ir/input":
return (new cljs.core.List(null,new cljs.core.Symbol("ir","input","ir/input",-2097456085,null),(new cljs.core.List(null,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.ir_utils.unwrite,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","deps","hyperfiddle.electric.impl.ir/deps",-1313673773).cljs$core$IFn$_invoke$arity$1(i)),null,(1),null)),(2),null));

break;
case "hyperfiddle.electric.impl.ir/output":
return (new cljs.core.List(null,new cljs.core.Symbol("ir","output","ir/output",534671421,null),(new cljs.core.List(null,(function (){var G__45819 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","init","hyperfiddle.electric.impl.ir/init",-819637966).cljs$core$IFn$_invoke$arity$1(i);
return (hyperfiddle.electric.impl.ir_utils.unwrite.cljs$core$IFn$_invoke$arity$1 ? hyperfiddle.electric.impl.ir_utils.unwrite.cljs$core$IFn$_invoke$arity$1(G__45819) : hyperfiddle.electric.impl.ir_utils.unwrite.call(null,G__45819));
})(),null,(1),null)),(2),null));

break;
case "hyperfiddle.electric.impl.ir/def":
return (new cljs.core.List(null,new cljs.core.Symbol("ir","inject","ir/inject",-242092525,null),(new cljs.core.List(null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","slot","hyperfiddle.electric.impl.ir/slot",1432523351).cljs$core$IFn$_invoke$arity$1(i),null,(1),null)),(2),null));

break;
case "hyperfiddle.electric.impl.ir/eval":
return (new cljs.core.List(null,new cljs.core.Symbol("ir","eval","ir/eval",536962317,null),(new cljs.core.List(null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","form","hyperfiddle.electric.impl.ir/form",-534651915).cljs$core$IFn$_invoke$arity$1(i),null,(1),null)),(2),null));

break;
case "hyperfiddle.electric.impl.ir/node":
return (new cljs.core.List(null,new cljs.core.Symbol("ir","node","ir/node",-2073237940,null),(new cljs.core.List(null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","slot","hyperfiddle.electric.impl.ir/slot",1432523351).cljs$core$IFn$_invoke$arity$1(i),null,(1),null)),(2),null));

break;
case "hyperfiddle.electric.impl.ir/bind":
return (new cljs.core.List(null,new cljs.core.Symbol("ir","bind","ir/bind",1527104351,null),(new cljs.core.List(null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","slot","hyperfiddle.electric.impl.ir/slot",1432523351).cljs$core$IFn$_invoke$arity$1(i),(new cljs.core.List(null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","index","hyperfiddle.electric.impl.ir/index",1690646129).cljs$core$IFn$_invoke$arity$1(i),(new cljs.core.List(null,(function (){var G__45824 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","inst","hyperfiddle.electric.impl.ir/inst",-420394775).cljs$core$IFn$_invoke$arity$1(i);
return (hyperfiddle.electric.impl.ir_utils.unwrite.cljs$core$IFn$_invoke$arity$1 ? hyperfiddle.electric.impl.ir_utils.unwrite.cljs$core$IFn$_invoke$arity$1(G__45824) : hyperfiddle.electric.impl.ir_utils.unwrite.call(null,G__45824));
})(),null,(1),null)),(2),null)),(3),null)),(4),null));

break;
case "hyperfiddle.electric.impl.ir/lift":
return (new cljs.core.List(null,new cljs.core.Symbol("ir","lift","ir/lift",-1750800333,null),(new cljs.core.List(null,(function (){var G__45825 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","init","hyperfiddle.electric.impl.ir/init",-819637966).cljs$core$IFn$_invoke$arity$1(i);
return (hyperfiddle.electric.impl.ir_utils.unwrite.cljs$core$IFn$_invoke$arity$1 ? hyperfiddle.electric.impl.ir_utils.unwrite.cljs$core$IFn$_invoke$arity$1(G__45825) : hyperfiddle.electric.impl.ir_utils.unwrite.call(null,G__45825));
})(),null,(1),null)),(2),null));

break;
case "hyperfiddle.electric.impl.ir/do":
return (new cljs.core.List(null,new cljs.core.Symbol("ir","do","ir/do",1686840501,null),(new cljs.core.List(null,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.ir_utils.unwrite,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","deps","hyperfiddle.electric.impl.ir/deps",-1313673773).cljs$core$IFn$_invoke$arity$1(i)),(new cljs.core.List(null,(function (){var G__45831 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","inst","hyperfiddle.electric.impl.ir/inst",-420394775).cljs$core$IFn$_invoke$arity$1(i);
return (hyperfiddle.electric.impl.ir_utils.unwrite.cljs$core$IFn$_invoke$arity$1 ? hyperfiddle.electric.impl.ir_utils.unwrite.cljs$core$IFn$_invoke$arity$1(G__45831) : hyperfiddle.electric.impl.ir_utils.unwrite.call(null,G__45831));
})(),null,(1),null)),(2),null)),(3),null));

break;
case "hyperfiddle.electric.impl.ir/nop":
return (new cljs.core.List(null,new cljs.core.Symbol("ir","nop","ir/nop",-113540880,null),null,(1),null));

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("what IR op is this?",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inst","inst",645962501),i], null));

}
})();
var temp__5818__auto__ = new cljs.core.Keyword("hyperfiddle.electric.impl.lang","form","hyperfiddle.electric.impl.lang/form",1693260784).cljs$core$IFn$_invoke$arity$1(i);
if((temp__5818__auto__ == null)){
return ret;
} else {
var form = temp__5818__auto__;
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(cljs.core.first(ret),new cljs.core.Keyword(null,"form","form",-1624062471),form,cljs.core.next(ret));
}
});
hyperfiddle.electric.impl.ir_utils.postwalk = (function hyperfiddle$electric$impl$ir_utils$postwalk(ir,f){
var G__45835 = (function (){var G__45836 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425).cljs$core$IFn$_invoke$arity$1(ir);
var G__45836__$1 = (((G__45836 instanceof cljs.core.Keyword))?G__45836.fqn:null);
switch (G__45836__$1) {
case "hyperfiddle.electric.impl.ir/sub":
case "hyperfiddle.electric.impl.ir/source":
case "hyperfiddle.electric.impl.ir/def":
case "hyperfiddle.electric.impl.ir/eval":
case "hyperfiddle.electric.impl.ir/node":
case "hyperfiddle.electric.impl.ir/nop":
return ir;

break;
case "hyperfiddle.electric.impl.ir/pub":
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(ir,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","inst","hyperfiddle.electric.impl.ir/inst",-420394775),hyperfiddle.electric.impl.ir_utils.postwalk,f),new cljs.core.Keyword("hyperfiddle.electric.impl.ir","init","hyperfiddle.electric.impl.ir/init",-819637966),hyperfiddle.electric.impl.ir_utils.postwalk,f);

break;
case "hyperfiddle.electric.impl.ir/constant":
case "hyperfiddle.electric.impl.ir/variable":
case "hyperfiddle.electric.impl.ir/output":
case "hyperfiddle.electric.impl.ir/lift":
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ir,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","init","hyperfiddle.electric.impl.ir/init",-819637966),hyperfiddle.electric.impl.ir_utils.postwalk,f);

break;
case "hyperfiddle.electric.impl.ir/target":
case "hyperfiddle.electric.impl.ir/input":
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(ir,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","deps","hyperfiddle.electric.impl.ir/deps",-1313673773),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,(function (p1__45832_SHARP_){
return (hyperfiddle.electric.impl.ir_utils.postwalk.cljs$core$IFn$_invoke$arity$2 ? hyperfiddle.electric.impl.ir_utils.postwalk.cljs$core$IFn$_invoke$arity$2(p1__45832_SHARP_,f) : hyperfiddle.electric.impl.ir_utils.postwalk.call(null,p1__45832_SHARP_,f));
})));

break;
case "hyperfiddle.electric.impl.ir/apply":
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(ir,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","args","hyperfiddle.electric.impl.ir/args",291275628),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,(function (p1__45833_SHARP_){
return (hyperfiddle.electric.impl.ir_utils.postwalk.cljs$core$IFn$_invoke$arity$2 ? hyperfiddle.electric.impl.ir_utils.postwalk.cljs$core$IFn$_invoke$arity$2(p1__45833_SHARP_,f) : hyperfiddle.electric.impl.ir_utils.postwalk.call(null,p1__45833_SHARP_,f));
}))),new cljs.core.Keyword("hyperfiddle.electric.impl.ir","fn","hyperfiddle.electric.impl.ir/fn",1996468864),hyperfiddle.electric.impl.ir_utils.postwalk,f);

break;
case "hyperfiddle.electric.impl.ir/bind":
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ir,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","inst","hyperfiddle.electric.impl.ir/inst",-420394775),hyperfiddle.electric.impl.ir_utils.postwalk,f);

break;
case "hyperfiddle.electric.impl.ir/do":
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(ir,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","deps","hyperfiddle.electric.impl.ir/deps",-1313673773),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,(function (p1__45834_SHARP_){
return (hyperfiddle.electric.impl.ir_utils.postwalk.cljs$core$IFn$_invoke$arity$2 ? hyperfiddle.electric.impl.ir_utils.postwalk.cljs$core$IFn$_invoke$arity$2(p1__45834_SHARP_,f) : hyperfiddle.electric.impl.ir_utils.postwalk.call(null,p1__45834_SHARP_,f));
}))),new cljs.core.Keyword("hyperfiddle.electric.impl.ir","inst","hyperfiddle.electric.impl.ir/inst",-420394775),hyperfiddle.electric.impl.ir_utils.postwalk,f);

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["what IR op is ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ir)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inst","inst",645962501),ir], null));

}
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__45835) : f.call(null,G__45835));
});

//# sourceMappingURL=hyperfiddle.electric.impl.ir_utils.js.map
