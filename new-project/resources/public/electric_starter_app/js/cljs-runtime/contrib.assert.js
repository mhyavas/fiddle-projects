goog.provide('contrib.assert');
contrib.assert.error_BANG_ = (function contrib$assert$error_BANG_(pred_expr,v_expr,v,ex_data){
var msg = ["check failed: (",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pred_expr], 0))," ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_expr], 0)),") for ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))].join('');
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(msg,ex_data);
});
contrib.assert._check = (function contrib$assert$_check(pred_expr,pred,v_expr,v,ex_data){
if((pred instanceof cljs.core.Keyword)){
if(cljs.core.truth_((function (){var or__4998__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pred,v);
if(or__4998__auto__){
return or__4998__auto__;
} else {
return pred.cljs$core$IFn$_invoke$arity$1(v);
}
})())){
} else {
contrib.assert.error_BANG_(pred_expr,v_expr,v,ex_data);
}
} else {
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(v) : pred.call(null,v)))){
} else {
contrib.assert.error_BANG_(pred_expr,v_expr,v,ex_data);
}

}

return v;
});

//# sourceMappingURL=contrib.assert.js.map
