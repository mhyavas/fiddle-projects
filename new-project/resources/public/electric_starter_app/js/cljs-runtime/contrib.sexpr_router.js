goog.provide('contrib.sexpr_router');
contrib.sexpr_router.encode = (function contrib$sexpr_router$encode(var_args){
var args__5728__auto__ = [];
var len__5722__auto___34809 = arguments.length;
var i__5723__auto___34810 = (0);
while(true){
if((i__5723__auto___34810 < len__5722__auto___34809)){
args__5728__auto__.push((arguments[i__5723__auto___34810]));

var G__34811 = (i__5723__auto___34810 + (1));
i__5723__auto___34810 = G__34811;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((1) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((1)),(0),null)):null);
return contrib.sexpr_router.encode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5729__auto__);
});

(contrib.sexpr_router.encode.cljs$core$IFn$_invoke$arity$variadic = (function (route,p__34751){
var vec__34752 = p__34751;
var home_route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34752,(0),null);
var vec__34755 = route;
var seq__34756 = cljs.core.seq(vec__34755);
var first__34757 = cljs.core.first(seq__34756);
var seq__34756__$1 = cljs.core.next(seq__34756);
var f = first__34757;
var args = seq__34756__$1;
var pred__34760 = cljs.core._EQ_;
var expr__34761 = route;
if(cljs.core.truth_((pred__34760.cljs$core$IFn$_invoke$arity$2 ? pred__34760.cljs$core$IFn$_invoke$arity$2(home_route,expr__34761) : pred__34760.call(null,home_route,expr__34761)))){
return "/";
} else {
return ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(contrib.ednish.encode_uri(f)),"/",(function (){var G__34769 = args;
var G__34769__$1 = (((G__34769 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(contrib.ednish.encode_uri,G__34769));
if((G__34769__$1 == null)){
return null;
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",G__34769__$1);
}
})()].join('');
}
}));

(contrib.sexpr_router.encode.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(contrib.sexpr_router.encode.cljs$lang$applyTo = (function (seq34745){
var G__34746 = cljs.core.first(seq34745);
var seq34745__$1 = cljs.core.next(seq34745);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34746,seq34745__$1);
}));

contrib.sexpr_router.url_regex = /^\/([^\/?#]+\/?)*(\?[^#]*)?(#.*)?$/;
contrib.sexpr_router.decode = (function contrib$sexpr_router$decode(var_args){
var args__5728__auto__ = [];
var len__5722__auto___34812 = arguments.length;
var i__5723__auto___34813 = (0);
while(true){
if((i__5723__auto___34813 < len__5722__auto___34812)){
args__5728__auto__.push((arguments[i__5723__auto___34813]));

var G__34814 = (i__5723__auto___34813 + (1));
i__5723__auto___34813 = G__34814;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((1) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((1)),(0),null)):null);
return contrib.sexpr_router.decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5729__auto__);
});

(contrib.sexpr_router.decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__34785){
var vec__34786 = p__34785;
var home_route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34786,(0),null);
if(typeof s === 'string'){
} else {
throw (new Error("Assert failed: (string? s)"));
}

var temp__5814__auto__ = cljs.core.re_find(contrib.sexpr_router.url_regex,s);
if(cljs.core.truth_(temp__5814__auto__)){
var vec__34789 = temp__5814__auto__;
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34789,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34789,(1),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34789,(2),null);
var hash = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34789,(3),null);
var pred__34795 = cljs.core._EQ_;
var expr__34796 = match;
if(cljs.core.truth_((pred__34795.cljs$core$IFn$_invoke$arity$2 ? pred__34795.cljs$core$IFn$_invoke$arity$2("/",expr__34796) : pred__34795.call(null,"/",expr__34796)))){
return home_route;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(contrib.ednish.decode_uri,cljs.core.rest((function (){var G__34798 = match;
var G__34798__$1 = ((cljs.core.seq(hash))?cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(G__34798,/#/)):G__34798);
var G__34798__$2 = ((cljs.core.seq(query))?cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(G__34798__$1,/\?/)):G__34798__$1);
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(G__34798__$2,/\//);

})()));
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid url: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("contrib.sexpr-router","s","contrib.sexpr-router/s",891924161),s], null));
}
}));

(contrib.sexpr_router.decode.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(contrib.sexpr_router.decode.cljs$lang$applyTo = (function (seq34777){
var G__34778 = cljs.core.first(seq34777);
var seq34777__$1 = cljs.core.next(seq34777);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34778,seq34777__$1);
}));


//# sourceMappingURL=contrib.sexpr_router.js.map
