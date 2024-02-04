goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__41654){
var map__41660 = p__41654;
var map__41660__$1 = cljs.core.__destructure_map(map__41660);
var m = map__41660__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41660__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41660__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4998__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return [(function (){var temp__5816__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5816__auto__)){
var ns = temp__5816__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41670_41987 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41671_41988 = null;
var count__41672_41989 = (0);
var i__41673_41990 = (0);
while(true){
if((i__41673_41990 < count__41672_41989)){
var f_41991 = chunk__41671_41988.cljs$core$IIndexed$_nth$arity$2(null,i__41673_41990);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_41991], 0));


var G__41992 = seq__41670_41987;
var G__41993 = chunk__41671_41988;
var G__41994 = count__41672_41989;
var G__41995 = (i__41673_41990 + (1));
seq__41670_41987 = G__41992;
chunk__41671_41988 = G__41993;
count__41672_41989 = G__41994;
i__41673_41990 = G__41995;
continue;
} else {
var temp__5816__auto___41996 = cljs.core.seq(seq__41670_41987);
if(temp__5816__auto___41996){
var seq__41670_41997__$1 = temp__5816__auto___41996;
if(cljs.core.chunked_seq_QMARK_(seq__41670_41997__$1)){
var c__5521__auto___41998 = cljs.core.chunk_first(seq__41670_41997__$1);
var G__41999 = cljs.core.chunk_rest(seq__41670_41997__$1);
var G__42000 = c__5521__auto___41998;
var G__42001 = cljs.core.count(c__5521__auto___41998);
var G__42002 = (0);
seq__41670_41987 = G__41999;
chunk__41671_41988 = G__42000;
count__41672_41989 = G__42001;
i__41673_41990 = G__42002;
continue;
} else {
var f_42004 = cljs.core.first(seq__41670_41997__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_42004], 0));


var G__42005 = cljs.core.next(seq__41670_41997__$1);
var G__42006 = null;
var G__42007 = (0);
var G__42008 = (0);
seq__41670_41987 = G__42005;
chunk__41671_41988 = G__42006;
count__41672_41989 = G__42007;
i__41673_41990 = G__42008;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_42009 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4998__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_42009], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_42009)))?cljs.core.second(arglists_42009):arglists_42009)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41700_42010 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41701_42011 = null;
var count__41702_42012 = (0);
var i__41703_42013 = (0);
while(true){
if((i__41703_42013 < count__41702_42012)){
var vec__41716_42014 = chunk__41701_42011.cljs$core$IIndexed$_nth$arity$2(null,i__41703_42013);
var name_42015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41716_42014,(0),null);
var map__41719_42016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41716_42014,(1),null);
var map__41719_42017__$1 = cljs.core.__destructure_map(map__41719_42016);
var doc_42018 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41719_42017__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42019 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41719_42017__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_42015], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_42019], 0));

if(cljs.core.truth_(doc_42018)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_42018], 0));
} else {
}


var G__42023 = seq__41700_42010;
var G__42024 = chunk__41701_42011;
var G__42025 = count__41702_42012;
var G__42026 = (i__41703_42013 + (1));
seq__41700_42010 = G__42023;
chunk__41701_42011 = G__42024;
count__41702_42012 = G__42025;
i__41703_42013 = G__42026;
continue;
} else {
var temp__5816__auto___42027 = cljs.core.seq(seq__41700_42010);
if(temp__5816__auto___42027){
var seq__41700_42028__$1 = temp__5816__auto___42027;
if(cljs.core.chunked_seq_QMARK_(seq__41700_42028__$1)){
var c__5521__auto___42029 = cljs.core.chunk_first(seq__41700_42028__$1);
var G__42030 = cljs.core.chunk_rest(seq__41700_42028__$1);
var G__42031 = c__5521__auto___42029;
var G__42032 = cljs.core.count(c__5521__auto___42029);
var G__42033 = (0);
seq__41700_42010 = G__42030;
chunk__41701_42011 = G__42031;
count__41702_42012 = G__42032;
i__41703_42013 = G__42033;
continue;
} else {
var vec__41727_42034 = cljs.core.first(seq__41700_42028__$1);
var name_42035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41727_42034,(0),null);
var map__41730_42036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41727_42034,(1),null);
var map__41730_42037__$1 = cljs.core.__destructure_map(map__41730_42036);
var doc_42038 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41730_42037__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42039 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41730_42037__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_42035], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_42039], 0));

if(cljs.core.truth_(doc_42038)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_42038], 0));
} else {
}


var G__42040 = cljs.core.next(seq__41700_42028__$1);
var G__42041 = null;
var G__42042 = (0);
var G__42043 = (0);
seq__41700_42010 = G__42040;
chunk__41701_42011 = G__42041;
count__41702_42012 = G__42042;
i__41703_42013 = G__42043;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5816__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5816__auto__)){
var fnspec = temp__5816__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__41737 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__41738 = null;
var count__41739 = (0);
var i__41740 = (0);
while(true){
if((i__41740 < count__41739)){
var role = chunk__41738.cljs$core$IIndexed$_nth$arity$2(null,i__41740);
var temp__5816__auto___42045__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5816__auto___42045__$1)){
var spec_42046 = temp__5816__auto___42045__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_42046)], 0));
} else {
}


var G__42047 = seq__41737;
var G__42048 = chunk__41738;
var G__42049 = count__41739;
var G__42050 = (i__41740 + (1));
seq__41737 = G__42047;
chunk__41738 = G__42048;
count__41739 = G__42049;
i__41740 = G__42050;
continue;
} else {
var temp__5816__auto____$1 = cljs.core.seq(seq__41737);
if(temp__5816__auto____$1){
var seq__41737__$1 = temp__5816__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__41737__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__41737__$1);
var G__42051 = cljs.core.chunk_rest(seq__41737__$1);
var G__42052 = c__5521__auto__;
var G__42053 = cljs.core.count(c__5521__auto__);
var G__42054 = (0);
seq__41737 = G__42051;
chunk__41738 = G__42052;
count__41739 = G__42053;
i__41740 = G__42054;
continue;
} else {
var role = cljs.core.first(seq__41737__$1);
var temp__5816__auto___42055__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5816__auto___42055__$2)){
var spec_42056 = temp__5816__auto___42055__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_42056)], 0));
} else {
}


var G__42057 = cljs.core.next(seq__41737__$1);
var G__42058 = null;
var G__42059 = (0);
var G__42060 = (0);
seq__41737 = G__42057;
chunk__41738 = G__42058;
count__41739 = G__42059;
i__41740 = G__42060;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__41867 = datafied_throwable;
var map__41867__$1 = cljs.core.__destructure_map(map__41867);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41867__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41867__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41867__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__41868 = cljs.core.last(via);
var map__41868__$1 = cljs.core.__destructure_map(map__41868);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41868__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41868__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41868__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__41869 = data;
var map__41869__$1 = cljs.core.__destructure_map(map__41869);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41869__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41869__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41869__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__41870 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__41870__$1 = cljs.core.__destructure_map(map__41870);
var top_data = map__41870__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41870__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__41872 = phase;
var G__41872__$1 = (((G__41872 instanceof cljs.core.Keyword))?G__41872.fqn:null);
switch (G__41872__$1) {
case "read-source":
var map__41879 = data;
var map__41879__$1 = cljs.core.__destructure_map(map__41879);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41879__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41879__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__41880 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__41880__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41880,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__41880);
var G__41880__$2 = (cljs.core.truth_((function (){var fexpr__41881 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__41881.cljs$core$IFn$_invoke$arity$1 ? fexpr__41881.cljs$core$IFn$_invoke$arity$1(source) : fexpr__41881.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__41880__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__41880__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41880__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__41880__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__41882 = top_data;
var G__41882__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41882,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__41882);
var G__41882__$2 = (cljs.core.truth_((function (){var fexpr__41883 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__41883.cljs$core$IFn$_invoke$arity$1 ? fexpr__41883.cljs$core$IFn$_invoke$arity$1(source) : fexpr__41883.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__41882__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__41882__$1);
var G__41882__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41882__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__41882__$2);
var G__41882__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41882__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__41882__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41882__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__41882__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__41885 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41885,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41885,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41885,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41885,(3),null);
var G__41888 = top_data;
var G__41888__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41888,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__41888);
var G__41888__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41888__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__41888__$1);
var G__41888__$3 = (cljs.core.truth_((function (){var and__4996__auto__ = source__$1;
if(cljs.core.truth_(and__4996__auto__)){
return method;
} else {
return and__4996__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41888__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__41888__$2);
var G__41888__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41888__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__41888__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41888__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__41888__$4;
}

break;
case "execution":
var vec__41889 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41889,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41889,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41889,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41889,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__41865_SHARP_){
var or__4998__auto__ = (p1__41865_SHARP_ == null);
if(or__4998__auto__){
return or__4998__auto__;
} else {
var fexpr__41896 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__41896.cljs$core$IFn$_invoke$arity$1 ? fexpr__41896.cljs$core$IFn$_invoke$arity$1(p1__41865_SHARP_) : fexpr__41896.call(null,p1__41865_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4998__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return line;
}
})();
var G__41898 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__41898__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41898,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__41898);
var G__41898__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41898__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__41898__$1);
var G__41898__$3 = (cljs.core.truth_((function (){var or__4998__auto__ = fn;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
var and__4996__auto__ = source__$1;
if(cljs.core.truth_(and__4996__auto__)){
return method;
} else {
return and__4996__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41898__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4998__auto__ = fn;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__41898__$2);
var G__41898__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41898__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__41898__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41898__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__41898__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41872__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__41925){
var map__41926 = p__41925;
var map__41926__$1 = cljs.core.__destructure_map(map__41926);
var triage_data = map__41926__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41926__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41926__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41926__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41926__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41926__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41926__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41926__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41926__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4998__auto__ = source;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4998__auto__ = line;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4998__auto__ = class$;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__41929 = phase;
var G__41929__$1 = (((G__41929 instanceof cljs.core.Keyword))?G__41929.fqn:null);
switch (G__41929__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__41930 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__41931 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41932 = loc;
var G__41933 = (cljs.core.truth_(spec)?(function (){var sb__5643__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__41938_42078 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__41939_42079 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__41940_42080 = true;
var _STAR_print_fn_STAR__temp_val__41941_42081 = (function (x__5644__auto__){
return sb__5643__auto__.append(x__5644__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__41940_42080);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__41941_42081);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41918_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__41918_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__41939_42079);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__41938_42078);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5643__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__41930,G__41931,G__41932,G__41933) : format.call(null,G__41930,G__41931,G__41932,G__41933));

break;
case "macroexpansion":
var G__41946 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__41947 = cause_type;
var G__41948 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41949 = loc;
var G__41950 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41946,G__41947,G__41948,G__41949,G__41950) : format.call(null,G__41946,G__41947,G__41948,G__41949,G__41950));

break;
case "compile-syntax-check":
var G__41955 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__41956 = cause_type;
var G__41957 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41958 = loc;
var G__41959 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41955,G__41956,G__41957,G__41958,G__41959) : format.call(null,G__41955,G__41956,G__41957,G__41958,G__41959));

break;
case "compilation":
var G__41960 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__41961 = cause_type;
var G__41962 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41963 = loc;
var G__41964 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41960,G__41961,G__41962,G__41963,G__41964) : format.call(null,G__41960,G__41961,G__41962,G__41963,G__41964));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__41965 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__41966 = symbol;
var G__41967 = loc;
var G__41968 = (function (){var sb__5643__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__41969_42105 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__41970_42106 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__41971_42107 = true;
var _STAR_print_fn_STAR__temp_val__41972_42108 = (function (x__5644__auto__){
return sb__5643__auto__.append(x__5644__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__41971_42107);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__41972_42108);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41919_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__41919_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__41970_42106);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__41969_42105);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5643__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__41965,G__41966,G__41967,G__41968) : format.call(null,G__41965,G__41966,G__41967,G__41968));
} else {
var G__41973 = "Execution error%s at %s(%s).\n%s\n";
var G__41974 = cause_type;
var G__41975 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41976 = loc;
var G__41977 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41973,G__41974,G__41975,G__41976,G__41977) : format.call(null,G__41973,G__41974,G__41975,G__41976,G__41977));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41929__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
