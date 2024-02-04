goog.provide('hyperfiddle.electric.impl.lang');
/**
 * In a `catch` block, bound by the runtime to the current stacktrace. An Electric stacktrace is an ExceptionInfo. Use `hyperfiddle.electric.debug/stack-trace` to get a string representation.
 */
hyperfiddle.electric.impl.lang.trace = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"noutput","noutput",-1074289279),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"ninput","ninput",-424514295),new cljs.core.Keyword(null,"nvariable","nvariable",871604298),new cljs.core.Keyword(null,"nsource","nsource",-745810741),new cljs.core.Keyword(null,"ntarget","ntarget",1744575182),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"var-name","var-name",-574747624),new cljs.core.Keyword(null,"get-used-nodes","get-used-nodes",-687832967),new cljs.core.Keyword(null,"nconstant","nconstant",1375885721)],[(0),(function (_frame,_vars,_env){
return hyperfiddle.electric.impl.runtime.pure(null);
}),(0),(0),(0),(0),cljs.core.PersistentVector.EMPTY,new cljs.core.Symbol("hyperfiddle.electric.impl.lang","trace","hyperfiddle.electric.impl.lang/trace",1736047271,null),(function (){
return cljs.core.List.EMPTY;
}),(0)]);
hyperfiddle.electric.impl.lang.electric_only = (function hyperfiddle$electric$impl$lang$electric_only(var_args){
var args__5728__auto__ = [];
var len__5722__auto___48363 = arguments.length;
var i__5723__auto___48364 = (0);
while(true){
if((i__5723__auto___48364 < len__5722__auto___48363)){
args__5728__auto__.push((arguments[i__5723__auto___48364]));

var G__48365 = (i__5723__auto___48364 + (1));
i__5723__auto___48364 = G__48365;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return hyperfiddle.electric.impl.lang.electric_only.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(hyperfiddle.electric.impl.lang.electric_only.cljs$core$IFn$_invoke$arity$variadic = (function (args){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("I'm an electric value and you called me outside of electric.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}));

(hyperfiddle.electric.impl.lang.electric_only.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hyperfiddle.electric.impl.lang.electric_only.cljs$lang$applyTo = (function (seq48340){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48340));
}));


//# sourceMappingURL=hyperfiddle.electric.impl.lang.js.map
