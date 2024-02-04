goog.provide('contrib.rfc3986');
contrib.rfc3986._sub_delims = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, ["!",null,"$",null,"&",null,"'",null,"(",null,")",null,"*",null,"+",null,",",null,";",null,"=",null], null), null);
contrib.rfc3986._unreserved = clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.char$,"abcdefghijklmnopqrstuvwxyz")),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.char$,"0123456789")),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["-",null,".",null,"~",null,"_",null], null), null)], 0));
contrib.rfc3986._pchar = clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(contrib.rfc3986._unreserved,contrib.rfc3986._sub_delims,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["@",null,":",null], null), null)], 0));
/**
 * percent-encode a url path segment without over-encoding (which many platform url decoders do).
 *   Notably, this impl is compatible with java.net.URI which fails on some chars in the 'unwise set',
 *   which are probably safe today.
 */
contrib.rfc3986.encode_pchar = (function contrib$rfc3986$encode_pchar(s){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
if(cljs.core.truth_((contrib.rfc3986._pchar.cljs$core$IFn$_invoke$arity$1 ? contrib.rfc3986._pchar.cljs$core$IFn$_invoke$arity$1(c) : contrib.rfc3986._pchar.call(null,c)))){
return c;
} else {
return ["%",contrib.char$.char__GT_hex_str(c)].join('');
}
}),s));
});
contrib.rfc3986.decode_pchar = (function contrib$rfc3986$decode_pchar(s){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1((function (){var decoded = cljs.core.PersistentVector.EMPTY;
var G__34495 = s;
var vec__34496 = G__34495;
var seq__34497 = cljs.core.seq(vec__34496);
var first__34498 = cljs.core.first(seq__34497);
var seq__34497__$1 = cljs.core.next(seq__34497);
var c = first__34498;
var ss = seq__34497__$1;
var decoded__$1 = decoded;
var G__34495__$1 = G__34495;
while(true){
var decoded__$2 = decoded__$1;
var vec__34529 = G__34495__$1;
var seq__34530 = cljs.core.seq(vec__34529);
var first__34531 = cljs.core.first(seq__34530);
var seq__34530__$1 = cljs.core.next(seq__34530);
var c__$1 = first__34531;
var ss__$1 = seq__34530__$1;
if(cljs.core.not(c__$1)){
return decoded__$2;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((37),contrib.char$.char_code(c__$1))){
var G__34574 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(decoded__$2,contrib.char$.hex_str__GT_char(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),ss__$1))));
var G__34575 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),ss__$1);
decoded__$1 = G__34574;
G__34495__$1 = G__34575;
continue;
} else {
var G__34576 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(decoded__$2,c__$1);
var G__34577 = ss__$1;
decoded__$1 = G__34576;
G__34495__$1 = G__34577;
continue;
}
}
break;
}
})());
});

//# sourceMappingURL=contrib.rfc3986.js.map
