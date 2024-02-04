goog.provide('cljs.analyzer.impl.namespaces');
/**
 * Given a libspec return a map of :as-alias alias, if was present. Return the
 * libspec with :as-alias elided. If the libspec was *only* :as-alias do not
 * return it.
 */
cljs.analyzer.impl.namespaces.check_and_remove_as_alias = (function cljs$analyzer$impl$namespaces$check_and_remove_as_alias(libspec){
if((((libspec instanceof cljs.core.Symbol)) || ((libspec instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec], null);
} else {
var vec__43760 = libspec;
var seq__43761 = cljs.core.seq(vec__43760);
var first__43762 = cljs.core.first(seq__43761);
var seq__43761__$1 = cljs.core.next(seq__43761);
var lib = first__43762;
var spec = seq__43761__$1;
var libspec__$1 = vec__43760;
var vec__43763 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43763,(0),null);
var vec__43766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43763,(1),null);
var seq__43767 = cljs.core.seq(vec__43766);
var first__43768 = cljs.core.first(seq__43767);
var seq__43767__$1 = cljs.core.next(seq__43767);
var _ = first__43768;
var first__43768__$1 = cljs.core.first(seq__43767__$1);
var seq__43767__$2 = cljs.core.next(seq__43767__$1);
var alias = first__43768__$1;
var post_spec = seq__43767__$2;
var post = vec__43766;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__43770 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43770,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__43770;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__43778 = cljs.core.seq(new_as_aliases);
var chunk__43779 = null;
var count__43780 = (0);
var i__43781 = (0);
while(true){
if((i__43781 < count__43780)){
var vec__43791 = chunk__43779.cljs$core$IIndexed$_nth$arity$2(null,i__43781);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43791,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43791,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__43869 = seq__43778;
var G__43870 = chunk__43779;
var G__43871 = count__43780;
var G__43872 = (i__43781 + (1));
seq__43778 = G__43869;
chunk__43779 = G__43870;
count__43780 = G__43871;
i__43781 = G__43872;
continue;
} else {
var temp__5816__auto__ = cljs.core.seq(seq__43778);
if(temp__5816__auto__){
var seq__43778__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43778__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__43778__$1);
var G__43873 = cljs.core.chunk_rest(seq__43778__$1);
var G__43874 = c__5521__auto__;
var G__43875 = cljs.core.count(c__5521__auto__);
var G__43876 = (0);
seq__43778 = G__43873;
chunk__43779 = G__43874;
count__43780 = G__43875;
i__43781 = G__43876;
continue;
} else {
var vec__43797 = cljs.core.first(seq__43778__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43797,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43797,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__43877 = cljs.core.next(seq__43778__$1);
var G__43878 = null;
var G__43879 = (0);
var G__43880 = (0);
seq__43778 = G__43877;
chunk__43779 = G__43878;
count__43780 = G__43879;
i__43781 = G__43880;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given libspecs, elide all :as-alias. Return a map of :libspecs (filtered)
 * and :as-aliases.
 */
cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_libspecs(var_args){
var G__43813 = arguments.length;
switch (G__43813) {
case 1:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1 = (function (libspecs){
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2 = (function (libspecs,as_aliases){
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),as_aliases,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__$1,libspec){
var map__43823 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__43823__$1 = cljs.core.__destructure_map(map__43823);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43823__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43823__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__43829 = ret__$1;
var G__43829__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__43829,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__43829);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__43829__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__43829__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__43844,p__43845){
var map__43847 = p__43844;
var map__43847__$1 = cljs.core.__destructure_map(map__43847);
var ret__$1 = map__43847__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43847__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__43848 = p__43845;
var seq__43849 = cljs.core.seq(vec__43848);
var first__43850 = cljs.core.first(seq__43849);
var seq__43849__$1 = cljs.core.next(seq__43849);
var spec_key = first__43850;
var libspecs = seq__43849__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__43853 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__43853__$1 = cljs.core.__destructure_map(map__43853);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43853__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43853__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__43856 = ret__$1;
var G__43856__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__43856,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__43856);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__43856__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__43856__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
