goog.provide('hyperfiddle.electric.debug');
hyperfiddle.electric.debug.__GT_id = (function hyperfiddle$electric$debug$__GT_id(){
return cljs.core.random_uuid();
});
if((typeof hyperfiddle !== 'undefined') && (typeof hyperfiddle.electric !== 'undefined') && (typeof hyperfiddle.electric.debug !== 'undefined') && (typeof hyperfiddle.electric.debug.PEER_ID !== 'undefined')){
} else {
/**
 * A random unique ID generated for each Electric runtime instance (browser tab, jvm). Used to identify origin of a transfered value.
 */
hyperfiddle.electric.debug.PEER_ID = hyperfiddle.electric.debug.__GT_id();
}
hyperfiddle.electric.debug.ex_info_STAR_ = (function hyperfiddle$electric$debug$ex_info_STAR_(var_args){
var G__45722 = arguments.length;
switch (G__45722) {
case 2:
return hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (message,data){
return hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$3(message,data,null);
}));

(hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (message,data,cause){
return hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$4(message,data,cljs.core.str.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.debug.__GT_id()),cause);
}));

(hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (message,data,id,cause){
return (new hyperfiddle.electric.FailureInfo(message,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword("hyperfiddle.electric","type","hyperfiddle.electric/type",1565804079),new cljs.core.Keyword("hyperfiddle.electric.debug","trace","hyperfiddle.electric.debug/trace",1332052033)),id,cause));
}));

(hyperfiddle.electric.debug.ex_info_STAR_.cljs$lang$maxFixedArity = 4);

hyperfiddle.electric.debug.ex_id = (function hyperfiddle$electric$debug$ex_id(ex){
return ex.id;
});
hyperfiddle.electric.debug.add_stack_frame = (function hyperfiddle$electric$debug$add_stack_frame(frame,ex){
var frame__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frame,new cljs.core.Keyword("hyperfiddle.electric.debug","origin","hyperfiddle.electric.debug/origin",-1379474448),hyperfiddle.electric.debug.PEER_ID);
if((ex instanceof hyperfiddle.electric.FailureInfo)){
return hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$4(cljs.core.ex_message(ex),cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.ex_data(ex),new cljs.core.Keyword("hyperfiddle.electric.debug","trace","hyperfiddle.electric.debug/trace",1332052033),cljs.core.conj,frame__$1),hyperfiddle.electric.debug.ex_id(ex),(function (){var or__4998__auto__ = cljs.core.ex_cause(ex);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return ex;
}
})());
} else {
return hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.ex_message(ex),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.electric.debug","trace","hyperfiddle.electric.debug/trace",1332052033),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frame__$1], null)], null),ex);
}
});
hyperfiddle.electric.debug.concat_stacks = (function hyperfiddle$electric$debug$concat_stacks(ex1,ex2){
if((ex1 instanceof hyperfiddle.electric.FailureInfo)){
} else {
throw (new Error("Assert failed: (instance? FailureInfo ex1)"));
}

if((ex2 instanceof hyperfiddle.electric.FailureInfo)){
} else {
throw (new Error("Assert failed: (instance? FailureInfo ex2)"));
}

return hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.ex_message(ex1),cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.ex_data(ex1),new cljs.core.Keyword("hyperfiddle.electric.debug","trace","hyperfiddle.electric.debug/trace",1332052033),cljs.core.into,new cljs.core.Keyword("hyperfiddle.electric.debug","trace","hyperfiddle.electric.debug/trace",1332052033).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(ex2))),(function (){var or__4998__auto__ = cljs.core.ex_cause(ex1);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
var or__4998__auto____$1 = cljs.core.ex_cause(ex2);
if(cljs.core.truth_(or__4998__auto____$1)){
return or__4998__auto____$1;
} else {
return ex2;
}
}
})());
});
hyperfiddle.electric.debug.error = (function hyperfiddle$electric$debug$error(var_args){
var G__45740 = arguments.length;
switch (G__45740) {
case 2:
return hyperfiddle.electric.debug.error.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hyperfiddle.electric.debug.error.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric.debug.error.cljs$core$IFn$_invoke$arity$2 = (function (debug_info,failure){
return hyperfiddle.electric.debug.error.cljs$core$IFn$_invoke$arity$3(debug_info,failure,null);
}));

(hyperfiddle.electric.debug.error.cljs$core$IFn$_invoke$arity$3 = (function (debug_info,failure,context){
var err = failure.error;
if((((err instanceof hyperfiddle.electric.Pending)) || ((err instanceof missionary.Cancelled)))){
return failure;
} else {
return (new hyperfiddle.electric.Failure((function (){var G__45748 = hyperfiddle.electric.debug.add_stack_frame(debug_info,err);
if((!((context == null)))){
return hyperfiddle.electric.debug.concat_stacks(G__45748,context);
} else {
return G__45748;
}
})()));
}
}));

(hyperfiddle.electric.debug.error.cljs$lang$maxFixedArity = 3);

hyperfiddle.electric.debug.render_arg = (function hyperfiddle$electric$debug$render_arg(arg){
if(typeof arg === 'string'){
return arg;
} else {
if(cljs.core.ident_QMARK_(arg)){
return arg;
} else {
if((((arg instanceof hyperfiddle.electric.Failure)) || ((arg instanceof Error)))){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("<exception>");
} else {
var _STAR_print_level_STAR__orig_val__45753 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR__orig_val__45754 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__temp_val__45755 = (1);
var _STAR_print_length_STAR__temp_val__45756 = (4);
(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__45755);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__45756);

try{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg], 0));
}finally {(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__45754);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__45753);
}
}
}
}
});
hyperfiddle.electric.debug.serializable_frame = (function hyperfiddle$electric$debug$serializable_frame(frame){
if(cljs.core.truth_(new cljs.core.Keyword("hyperfiddle.electric.debug","serializable","hyperfiddle.electric.debug/serializable",-2113729763).cljs$core$IFn$_invoke$arity$1(frame))){
return frame;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(frame,new cljs.core.Keyword("hyperfiddle.electric.debug","args","hyperfiddle.electric.debug/args",-1101355176),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,hyperfiddle.electric.debug.render_arg)),new cljs.core.Keyword("hyperfiddle.electric.debug","serializable","hyperfiddle.electric.debug/serializable",-2113729763),true);
}
});
hyperfiddle.electric.debug.serializable = (function hyperfiddle$electric$debug$serializable(map){
if(cljs.core.contains_QMARK_(map,new cljs.core.Keyword("hyperfiddle.electric.debug","trace","hyperfiddle.electric.debug/trace",1332052033))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(map,new cljs.core.Keyword("hyperfiddle.electric.debug","trace","hyperfiddle.electric.debug/trace",1332052033),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,hyperfiddle.electric.debug.serializable_frame));
} else {
return map;
}
});
hyperfiddle.electric.debug.normalize_frame = (function hyperfiddle$electric$debug$normalize_frame(frame){
var meta = new cljs.core.Keyword("hyperfiddle.electric.debug","meta","hyperfiddle.electric.debug/meta",-368038788).cljs$core$IFn$_invoke$arity$1(frame);
var dbg_in_meta = contrib.data.select_ns(new cljs.core.Keyword(null,"hyperfiddle.electric.debug","hyperfiddle.electric.debug",-987645572),new cljs.core.Keyword("hyperfiddle.electric.debug","meta","hyperfiddle.electric.debug/meta",-368038788).cljs$core$IFn$_invoke$arity$1(frame));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frame,dbg_in_meta,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.electric.debug","meta","hyperfiddle.electric.debug/meta",-368038788),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(meta,dbg_in_meta)], null)], 0));
});
/**
 * Turn a stack frame into a sequence of lines to report
 */
hyperfiddle.electric.debug.expand_frame = (function hyperfiddle$electric$debug$expand_frame(frame){
var map__45765 = frame;
var map__45765__$1 = cljs.core.__destructure_map(map__45765);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45765__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45765__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","name","hyperfiddle.electric.debug/name",-35961215));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45765__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","args","hyperfiddle.electric.debug/args",-1101355176));
var G__45766 = type;
var G__45766__$1 = (((G__45766 instanceof cljs.core.Keyword))?G__45766.fqn:null);
switch (G__45766__$1) {
case "apply":
var G__45768 = name;
switch (G__45768) {
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frame], null);

}

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frame], null);

}
});
hyperfiddle.electric.debug.frames = (function hyperfiddle$electric$debug$frames(err){
var G__45772 = new cljs.core.Keyword("hyperfiddle.electric.debug","trace","hyperfiddle.electric.debug/trace",1332052033).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(err));
var G__45772__$1 = (((G__45772 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (frame){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("hyperfiddle.electric.debug","fn","hyperfiddle.electric.debug/fn",167892636).cljs$core$IFn$_invoke$arity$1(frame));
}),G__45772));
var G__45772__$2 = (((G__45772__$1 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),G__45772__$1));
var G__45772__$3 = (((G__45772__$2 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.debug.normalize_frame,G__45772__$2));
if((G__45772__$3 == null)){
return null;
} else {
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle.electric.debug.expand_frame,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__45772__$3], 0));
}
});
hyperfiddle.electric.debug.locate = (function hyperfiddle$electric$debug$locate(frame){
var map__45781 = hyperfiddle.electric.debug.normalize_frame(frame);
var map__45781__$1 = cljs.core.__destructure_map(map__45781);
var frame__$1 = map__45781__$1;
var origin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45781__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","origin","hyperfiddle.electric.debug/origin",-1379474448));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45781__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45781__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","meta","hyperfiddle.electric.debug/meta",-368038788));
var G__45782 = frame__$1;
var G__45782__$1 = ((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.debug.PEER_ID,origin)) && (cljs.core.not((function (){var fexpr__45783 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transfer","transfer",327423400),null,new cljs.core.Keyword(null,"toggle","toggle",1291842030),null], null), null);
return (fexpr__45783.cljs$core$IFn$_invoke$arity$1 ? fexpr__45783.cljs$core$IFn$_invoke$arity$1(type) : fexpr__45783.call(null,type));
})()))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45782,new cljs.core.Keyword("hyperfiddle.electric.debug","remote","hyperfiddle.electric.debug/remote",825539832),true):G__45782);
var G__45782__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(meta))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45782__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","line","hyperfiddle.electric.debug/line",-1668864181),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(meta)):G__45782__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(meta))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45782__$2,new cljs.core.Keyword("hyperfiddle.electric.debug","file","hyperfiddle.electric.debug/file",610261026),new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(meta));
} else {
return G__45782__$2;
}
});
hyperfiddle.electric.debug.fail_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","fail","hyperfiddle.electric.impl.runtime/fail",-1672627762,null),"null"], null), null);
hyperfiddle.electric.debug.render_frame = (function hyperfiddle$electric$debug$render_frame(frame){
var map__45784 = frame;
var map__45784__$1 = cljs.core.__destructure_map(map__45784);
var remote = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45784__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","remote","hyperfiddle.electric.debug/remote",825539832));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45784__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","args","hyperfiddle.electric.debug/args",-1101355176));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45784__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","meta","hyperfiddle.electric.debug/meta",-368038788));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45784__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","name","hyperfiddle.electric.debug/name",-35961215));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45784__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","file","hyperfiddle.electric.debug/file",610261026));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45784__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","params","hyperfiddle.electric.debug/params",-1701534765));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45784__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812));
var scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45784__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","scope","hyperfiddle.electric.debug/scope",-708382234));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45784__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","line","hyperfiddle.electric.debug/line",-1668864181));
var macro = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45784__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","macro","hyperfiddle.electric.debug/macro",-46765604));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["in",(cljs.core.truth_(remote)?"remote":null),(cljs.core.truth_(macro)?"macro":null),(function (){var G__45785 = scope;
var G__45785__$1 = (((G__45785 instanceof cljs.core.Keyword))?G__45785.fqn:null);
switch (G__45785__$1) {
case "lexical":
return "lexically bound";

break;
case "dynamic":
return "dynamically bound";

break;
default:
return null;

}
})(),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",(function (){var G__45786 = type;
var G__45786__$1 = (((G__45786 instanceof cljs.core.Keyword))?G__45786.fqn:null);
switch (G__45786__$1) {
case "apply":
if(cljs.core.truth_((hyperfiddle.electric.debug.fail_QMARK_.cljs$core$IFn$_invoke$arity$1 ? hyperfiddle.electric.debug.fail_QMARK_.cljs$core$IFn$_invoke$arity$1(name) : hyperfiddle.electric.debug.fail_QMARK_.call(null,name)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(throw",(function (){var G__45790 = hyperfiddle.electric.debug.render_arg(cljs.core.first(args));
return (cljs.core.unquote.cljs$core$IFn$_invoke$arity$1 ? cljs.core.unquote.cljs$core$IFn$_invoke$arity$1(G__45790) : cljs.core.unquote.call(null,G__45790));
})(),")"], null);
} else {
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,"(",null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.debug.render_arg,args),(new cljs.core.List(null,")",null,(1),null))], 0)))));
}

break;
case "eval":
if(cljs.core.truth_((function (){var G__45792 = new cljs.core.Keyword("hyperfiddle.electric.debug","fn","hyperfiddle.electric.debug/fn",167892636).cljs$core$IFn$_invoke$arity$1(frame);
return (hyperfiddle.electric.debug.fail_QMARK_.cljs$core$IFn$_invoke$arity$1 ? hyperfiddle.electric.debug.fail_QMARK_.cljs$core$IFn$_invoke$arity$1(G__45792) : hyperfiddle.electric.debug.fail_QMARK_.call(null,G__45792));
})())){
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,"(throw",null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.debug.render_arg(cljs.core.first(args)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,")",null,(1),null))], 0)))));
} else {
var map__45794 = frame;
var map__45794__$1 = cljs.core.__destructure_map(map__45794);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45794__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","action","hyperfiddle.electric.debug/action",1557442480));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45794__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","target","hyperfiddle.electric.debug/target",2130291153));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45794__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","method","hyperfiddle.electric.debug/method",-1822364192));
var args__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45794__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","args","hyperfiddle.electric.debug/args",-1101355176));
var G__45797 = action;
var G__45797__$1 = (((G__45797 instanceof cljs.core.Keyword))?G__45797.fqn:null);
switch (G__45797__$1) {
case "field-access":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",[".-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)].join(''),target,")"], null);

break;
case "static-call":
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,"(",null,(1),null)),(new cljs.core.List(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(target),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)].join(''),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.debug.render_arg,cljs.core.rest(args__$1)),(new cljs.core.List(null,")",null,(1),null))], 0)))));

break;
case "call":
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,"(",null,(1),null)),(new cljs.core.List(null,[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)].join(''),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,target,null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.debug.render_arg,cljs.core.rest(args__$1)),(new cljs.core.List(null,")",null,(1),null))], 0)))));

break;
case "fn-call":
if((!((name == null)))){
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,"(",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(params)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"...","...",-1926939749,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.debug.render_arg,args__$1),(new cljs.core.List(null,")",null,(1),null))], 0)))));
} else {
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,"(",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(params)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"...","...",-1926939749,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.debug.render_arg,args__$1),(new cljs.core.List(null,")",null,(1),null))], 0)))));
}

break;
default:
var f = (function (){var or__4998__auto__ = new cljs.core.Keyword("hyperfiddle.electric.debug","fn","hyperfiddle.electric.debug/fn",167892636).cljs$core$IFn$_invoke$arity$1(frame);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
var or__4998__auto____$1 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","form","hyperfiddle.electric.impl.ir/form",-534651915).cljs$core$IFn$_invoke$arity$1(frame);
if(cljs.core.truth_(or__4998__auto____$1)){
return or__4998__auto____$1;
} else {
return "<unknown>";
}
}
})();
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,"(",null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.debug.render_arg,args__$1),(new cljs.core.List(null,")",null,(1),null))], 0)))));

}
}

break;
case "reactive-fn":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["reactive",(((!((name == null))))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"...","...",-1926939749,null),null,(1),null))], 0)))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"...","...",-1926939749,null),null,(1),null))], 0)))))], null);

break;
case "reactive-defn":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["reactive",cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"defn","defn",-126010802,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"...","...",-1926939749,null),null,(1),null))], 0))))], null);

break;
case "try":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(try ...)"], null);

break;
case "catch":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"catch","catch",-1616370245,null),null,(1),null)),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"...","...",-1926939749,null),null,(1),null))], 0))))], null);

break;
case "finally":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(finally ...)"], null);

break;
case "case-clause":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"case","case",-1510733573,null),null,(1),null)),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"...","...",-1926939749,null),null,(1),null))], 0))))], null);

break;
case "case-default":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["case default branch"], null);

break;
case "transfer":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["transfer to",cljs.core.name(name)], null);

break;
case "toggle":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["transfer"], null);

break;
default:
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,"<unknow frame>",null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425).cljs$core$IFn$_invoke$arity$1(frame),null,(1),null))))));

}
})()),(cljs.core.truth_(file)?["in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null),(cljs.core.truth_(line)?["line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):null)], null)));
});
hyperfiddle.electric.debug.render_stack_trace = (function hyperfiddle$electric$debug$render_stack_trace(err){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.debug.render_frame,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.debug.locate,hyperfiddle.electric.debug.frames(err))));
});
hyperfiddle.electric.debug.stack_trace = (function hyperfiddle$electric$debug$stack_trace(err){
return hyperfiddle.electric.debug.render_stack_trace(err);
});
hyperfiddle.electric.debug.unwrap = (function hyperfiddle$electric$debug$unwrap(exception){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hyperfiddle.electric.debug","trace","hyperfiddle.electric.debug/trace",1332052033),new cljs.core.Keyword("hyperfiddle.electric","type","hyperfiddle.electric/type",1565804079).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(exception)))){
return cljs.core.ex_cause(exception);
} else {
return exception;
}
});

//# sourceMappingURL=hyperfiddle.electric.debug.js.map
