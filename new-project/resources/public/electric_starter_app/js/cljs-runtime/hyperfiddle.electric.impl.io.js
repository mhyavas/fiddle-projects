goog.provide('hyperfiddle.electric.impl.io');
(com.cognitect.transit.types.UUID.prototype.cljs$core$IUUID$ = cljs.core.PROTOCOL_SENTINEL);
hyperfiddle.electric.impl.io.default_write_handler = cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((function (x){
hyperfiddle.electric.impl.io._last_unserializable_for_repl = x;

console.log("Unserializable reference transfer:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(x)], 0)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));

return "_";
}),(function (x){
return null;
}),(function (_){
return "";
}));
/**
 * Builds a minimal, cljc map/bounded-queue cache.
 *   One slot per key (map).
 *   Reaching `size` pops oldest value (bounded-queue).
 */
hyperfiddle.electric.impl.io.__GT_cache = (function hyperfiddle$electric$impl$io$__GT_cache(size){
var G__47726 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(((size * (2)) + (1)));
var arr47727_48133 = G__47726;
(arr47727_48133[(size * (2))] = cljs.core.identity((0)));

return G__47726;
});
hyperfiddle.electric.impl.io.cache_add = (function hyperfiddle$electric$impl$io$cache_add(cache,k,v){
if(cljs.core.truth_((function (){var i = (0);
while(true){
if((i < (cljs.core.count(cache) - (1)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,hyperfiddle.electric.impl.array_fields.get(cache,i))){
var arr47729_48134 = cache;
(arr47729_48134[(i + (1))] = cljs.core.identity(v));

return true;
} else {
var G__48135 = (i + (2));
i = G__48135;
continue;
}
} else {
return null;
}
break;
}
})())){
return null;
} else {
var widx = hyperfiddle.electric.impl.array_fields.getswap(cache,(cljs.core.count(cache) - (1)),(function (p1__47728_SHARP_){
return cljs.core.mod((p1__47728_SHARP_ + (2)),(cljs.core.count(cache) - (1)));
}));
var arr47730 = cache;
(arr47730[widx] = cljs.core.identity(k));

return (arr47730[(widx + (1))] = cljs.core.identity(v));
}
});
hyperfiddle.electric.impl.io.cache_get = (function hyperfiddle$electric$impl$io$cache_get(cache,k){
var i = (0);
while(true){
if((i < (cljs.core.count(cache) - (1)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,hyperfiddle.electric.impl.array_fields.get(cache,i))){
return hyperfiddle.electric.impl.array_fields.get(cache,(i + (1)));
} else {
var G__48136 = (i + (2));
i = G__48136;
continue;
}
} else {
return null;
}
break;
}
});
hyperfiddle.electric.impl.io.cache__GT_map = (function hyperfiddle$electric$impl$io$cache__GT_map(cache){
var i = (0);
var ac = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < (cljs.core.count(cache) - (1)))){
var G__48137 = (i + (2));
var G__48138 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ac,hyperfiddle.electric.impl.array_fields.get(cache,i),hyperfiddle.electric.impl.array_fields.get(cache,(i + (1))));
i = G__48137;
ac = G__48138;
continue;
} else {
return cljs.core.persistent_BANG_(ac);
}
break;
}
});
hyperfiddle.electric.impl.io._BANG_ex_cache = hyperfiddle.electric.impl.io.__GT_cache((16));
hyperfiddle.electric.impl.io.save_original_ex_BANG_ = (function hyperfiddle$electric$impl$io$save_original_ex_BANG_(fi){
var id = hyperfiddle.electric.debug.ex_id(fi);
var temp__5820__auto___48139 = cljs.core.ex_cause(fi);
if((temp__5820__auto___48139 == null)){
} else {
var cause_48140 = temp__5820__auto___48139;
if((cause_48140 instanceof hyperfiddle.electric.FailureInfo)){
} else {
hyperfiddle.electric.impl.io.cache_add(hyperfiddle.electric.impl.io._BANG_ex_cache,id,cause_48140);
}
}

return id;
});
hyperfiddle.electric.impl.io.get_original_ex = (function hyperfiddle$electric$impl$io$get_original_ex(id){
return hyperfiddle.electric.impl.io.cache_get(hyperfiddle.electric.impl.io._BANG_ex_cache,id);
});
hyperfiddle.electric.impl.io._STAR_write_handlers_STAR_ = null;
hyperfiddle.electric.impl.io.failure_writer = cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((function (_){
return "failure";
}),(function (x){
var err = x.error;
if((err instanceof missionary.Cancelled)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cancelled","cancelled",488726224)], null);
} else {
if((err instanceof hyperfiddle.electric.Pending)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pending","pending",-220036727)], null);
} else {
if((err instanceof hyperfiddle.electric.Remote)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote","remote",-1593576576),hyperfiddle.electric.debug.serializable(cljs.core.ex_data(err))], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exception","exception",-335277064),cljs.core.ex_message(err),hyperfiddle.electric.debug.serializable(cljs.core.ex_data(err)),hyperfiddle.electric.impl.io.save_original_ex_BANG_(err)], null);

}
}
}
}));
hyperfiddle.electric.impl.io.write_opts = (function hyperfiddle$electric$impl$io$write_opts(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.io._STAR_write_handlers_STAR_,cljs.core.PersistentArrayMap.createAsIfByAssoc([hyperfiddle.electric.Failure,hyperfiddle.electric.impl.io.failure_writer,new cljs.core.Keyword(null,"default","default",-1987822328),hyperfiddle.electric.impl.io.default_write_handler])], 0)),new cljs.core.Keyword(null,"default-handler","default-handler",-1028159207),hyperfiddle.electric.impl.io.default_write_handler], null);
});
hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_ = null;
hyperfiddle.electric.impl.io.failure_reader = cognitect.transit.read_handler((function (p__47745){
var vec__47746 = p__47745;
var seq__47747 = cljs.core.seq(vec__47746);
var first__47748 = cljs.core.first(seq__47747);
var seq__47747__$1 = cljs.core.next(seq__47747);
var tag = first__47748;
var args = seq__47747__$1;
var G__47749 = tag;
var G__47749__$1 = (((G__47749 instanceof cljs.core.Keyword))?G__47749.fqn:null);
switch (G__47749__$1) {
case "exception":
var vec__47752 = args;
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47752,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47752,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47752,(2),null);
return (new hyperfiddle.electric.Failure(hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$4(message,data,id,null)));

break;
case "remote":
var vec__47756 = args;
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47756,(0),null);
return (new hyperfiddle.electric.Failure(hyperfiddle.electric.debug.ex_info_STAR_.cljs$core$IFn$_invoke$arity$2("Remote error",(function (){var or__4998__auto__ = data;
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})())));

break;
case "pending":
return (new hyperfiddle.electric.Failure((new hyperfiddle.electric.Pending())));

break;
case "cancelled":
return (new hyperfiddle.electric.Failure((new missionary.Cancelled())));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47749__$1)].join('')));

}
}));
hyperfiddle.electric.impl.io.read_opts = (function hyperfiddle$electric$impl$io$read_opts(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_,new cljs.core.PersistentArrayMap(null, 1, ["failure",hyperfiddle.electric.impl.io.failure_reader], null)], 0))], null);
});
hyperfiddle.electric.impl.io.set_ints = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce_kv,(function (r,i,n){
var offset = (i << (2));
var G__47762 = r;
G__47762.setInt32(offset,n);

return G__47762;
}));
/**
 * Encode a control frame to a binary segment.
 */
hyperfiddle.electric.impl.io.encode_numbers = (function hyperfiddle$electric$impl$io$encode_numbers(xs){
var required = (cljs.core.count(xs) << (2));
var G__47766 = (new ArrayBuffer(required));
hyperfiddle.electric.impl.io.set_ints((new DataView(G__47766)),xs);

return G__47766;
});

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io47768 = (function (b,meta47769){
this.b = b;
this.meta47769 = meta47769;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io47768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47770,meta47769__$1){
var self__ = this;
var _47770__$1 = this;
return (new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io47768(self__.b,meta47769__$1));
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io47768.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47770){
var self__ = this;
var _47770__$1 = this;
return self__.meta47769;
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io47768.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,rf,r){
var self__ = this;
var ___$1 = this;
var l = self__.b.byteLength;
var v = (new DataView(self__.b));
var r__$1 = r;
var i = (0);
while(true){
if((i < l)){
var G__48142 = (function (){var G__47777 = r__$1;
var G__47778 = v.getInt32(i);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__47777,G__47778) : rf.call(null,G__47777,G__47778));
})();
var G__48143 = (i + (4));
r__$1 = G__48142;
i = G__48143;
continue;
} else {
return r__$1;
}
break;
}
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io47768.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"meta47769","meta47769",-577903760,null)], null);
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io47768.cljs$lang$type = true);

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io47768.cljs$lang$ctorStr = "hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io47768");

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io47768.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io47768");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io47768.
 */
hyperfiddle.electric.impl.io.__GT_t_hyperfiddle$electric$impl$io47768 = (function hyperfiddle$electric$impl$io$__GT_t_hyperfiddle$electric$impl$io47768(b,meta47769){
return (new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io47768(b,meta47769));
});


/**
 * Decode a control frame from a binary segment.
 */
hyperfiddle.electric.impl.io.decode_numbers = (function hyperfiddle$electric$impl$io$decode_numbers(b){
return cljs.core.vec((new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io47768(b,cljs.core.PersistentArrayMap.EMPTY)));
});
var _BANG_cache_48144 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write-handlers","write-handlers",-2097288911),hyperfiddle.electric.impl.io._STAR_write_handlers_STAR_,new cljs.core.Keyword(null,"writer","writer",-277568236),null], null));
hyperfiddle.electric.impl.io.transit_writer = (function hyperfiddle$electric$impl$io$transit_writer(){
return new cljs.core.Keyword(null,"writer","writer",-277568236).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_cache_48144,(function (p__47787){
var map__47788 = p__47787;
var map__47788__$1 = cljs.core.__destructure_map(map__47788);
var cache = map__47788__$1;
var write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47788__$1,new cljs.core.Keyword(null,"write-handlers","write-handlers",-2097288911));
var writer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47788__$1,new cljs.core.Keyword(null,"writer","writer",-277568236));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(write_handlers,hyperfiddle.electric.impl.io._STAR_write_handlers_STAR_)){
if(cljs.core.truth_(writer)){
return cache;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,new cljs.core.Keyword(null,"writer","writer",-277568236),cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),hyperfiddle.electric.impl.io.write_opts()));
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write-handlers","write-handlers",-2097288911),hyperfiddle.electric.impl.io._STAR_write_handlers_STAR_,new cljs.core.Keyword(null,"writer","writer",-277568236),cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),hyperfiddle.electric.impl.io.write_opts())], null);
}
})));
});
/**
 * Encode a data frame to transit json
 */
hyperfiddle.electric.impl.io.encode = (function hyperfiddle$electric$impl$io$encode(x){
return cognitect.transit.write(hyperfiddle.electric.impl.io.transit_writer(),x);
});
var _BANG_cache_48145 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-handlers","read-handlers",2109459315),hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_,new cljs.core.Keyword(null,"reader","reader",169660853),null], null));
hyperfiddle.electric.impl.io.transit_reader = (function hyperfiddle$electric$impl$io$transit_reader(){
return new cljs.core.Keyword(null,"reader","reader",169660853).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_cache_48145,(function (p__47793){
var map__47794 = p__47793;
var map__47794__$1 = cljs.core.__destructure_map(map__47794);
var cache = map__47794__$1;
var read_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47794__$1,new cljs.core.Keyword(null,"read-handlers","read-handlers",2109459315));
var reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47794__$1,new cljs.core.Keyword(null,"reader","reader",169660853));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(read_handlers,hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_)){
if(cljs.core.truth_(reader)){
return cache;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,new cljs.core.Keyword(null,"reader","reader",169660853),cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),hyperfiddle.electric.impl.io.read_opts()));
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-handlers","read-handlers",2109459315),hyperfiddle.electric.impl.io._STAR_read_handlers_STAR_,new cljs.core.Keyword(null,"reader","reader",169660853),cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),hyperfiddle.electric.impl.io.read_opts())], null);
}
})));
});
/**
 * Decode a data frame from transit json
 */
hyperfiddle.electric.impl.io.decode = (function hyperfiddle$electric$impl$io$decode(s){
return cognitect.transit.read(hyperfiddle.electric.impl.io.transit_reader(),s);
});
hyperfiddle.electric.impl.io.decode_str = (function hyperfiddle$electric$impl$io$decode_str(x){
try{var G__47803 = hyperfiddle.electric.impl.io.decode(x);
console.debug("\uD83D\uDD3D",G__47803);

return G__47803;
}catch (e47802){var t = e47802;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failed to decode",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),x], null),t);
}});
hyperfiddle.electric.impl.io.chunk_size = ((65536) >> (2));
hyperfiddle.electric.impl.io.message_reader = (function hyperfiddle$electric$impl$io$message_reader(_QMARK_read){

return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr47805_block_1 = (function hyperfiddle$electric$impl$io$message_reader_$_cr47805_block_1(cr47805_state){
try{var cr47805_place_3 = _QMARK_read;
(cr47805_state[(0)] = cr47805_block_2);

return missionary.core.park(cr47805_place_3);
}catch (e47897){var cr47805_exception = e47897;
(cr47805_state[(0)] = null);

(cr47805_state[(1)] = null);

throw cr47805_exception;
}});
var cr47805_block_8 = (function hyperfiddle$electric$impl$io$message_reader_$_cr47805_block_8(cr47805_state){
try{var cr47805_place_8 = (cr47805_state[(1)]);
var cr47805_place_10 = (cr47805_state[(4)]);
var cr47805_place_9 = (cr47805_state[(5)]);
var cr47805_place_28 = (cr47805_state[(2)]);
var cr47805_place_35 = (function (){var G__47907 = cr47805_place_10;
var G__47908 = cr47805_place_28;
var fexpr__47906 = cr47805_place_9;
return (fexpr__47906.cljs$core$IFn$_invoke$arity$2 ? fexpr__47906.cljs$core$IFn$_invoke$arity$2(G__47907,G__47908) : fexpr__47906.call(null,G__47907,G__47908));
})();
var cr47805_place_36 = (function (){var G__47915 = cr47805_place_35;
var fexpr__47914 = cr47805_place_8;
return (fexpr__47914.cljs$core$IFn$_invoke$arity$1 ? fexpr__47914.cljs$core$IFn$_invoke$arity$1(G__47915) : fexpr__47914.call(null,G__47915));
})();
(cr47805_state[(0)] = cr47805_block_10);

(cr47805_state[(1)] = null);

(cr47805_state[(4)] = null);

(cr47805_state[(5)] = null);

(cr47805_state[(2)] = null);

(cr47805_state[(3)] = cr47805_place_36);

return cr47805_state;
}catch (e47901){var cr47805_exception = e47901;
(cr47805_state[(0)] = null);

(cr47805_state[(1)] = null);

(cr47805_state[(4)] = null);

(cr47805_state[(3)] = null);

(cr47805_state[(5)] = null);

(cr47805_state[(2)] = null);

throw cr47805_exception;
}});
var cr47805_block_9 = (function hyperfiddle$electric$impl$io$message_reader_$_cr47805_block_9(cr47805_state){
try{var cr47805_place_4 = (cr47805_state[(2)]);
var cr47805_place_2 = (cr47805_state[(1)]);
var cr47805_place_37 = cljs.core.conj_BANG_;
var cr47805_place_38 = cr47805_place_2;
var cr47805_place_39 = hyperfiddle.electric.impl.io.decode_str;
var cr47805_place_40 = cr47805_place_4;
var cr47805_place_41 = (function (){var G__47919 = cr47805_place_40;
var fexpr__47918 = cr47805_place_39;
return (fexpr__47918.cljs$core$IFn$_invoke$arity$1 ? fexpr__47918.cljs$core$IFn$_invoke$arity$1(G__47919) : fexpr__47918.call(null,G__47919));
})();
var cr47805_place_42 = (function (){var G__47921 = cr47805_place_38;
var G__47922 = cr47805_place_41;
var fexpr__47920 = cr47805_place_37;
return (fexpr__47920.cljs$core$IFn$_invoke$arity$2 ? fexpr__47920.cljs$core$IFn$_invoke$arity$2(G__47921,G__47922) : fexpr__47920.call(null,G__47921,G__47922));
})();
(cr47805_state[(0)] = cr47805_block_1);

(cr47805_state[(2)] = null);

(cr47805_state[(1)] = cr47805_place_42);

return cr47805_state;
}catch (e47917){var cr47805_exception = e47917;
(cr47805_state[(0)] = null);

(cr47805_state[(2)] = null);

(cr47805_state[(1)] = null);

throw cr47805_exception;
}});
var cr47805_block_3 = (function hyperfiddle$electric$impl$io$message_reader_$_cr47805_block_3(cr47805_state){
try{var cr47805_place_4 = (cr47805_state[(2)]);
var cr47805_place_2 = (cr47805_state[(1)]);
var cr47805_place_8 = cljs.core.persistent_BANG_;
var cr47805_place_9 = cljs.core.conj_BANG_;
var cr47805_place_10 = cr47805_place_2;
var cr47805_place_11 = cr47805_place_4;
var cr47805_place_12 = cljs.core.transient$;
var cr47805_place_13 = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IVector], null));
var cr47805_place_14 = (function (){var G__47931 = cr47805_place_13;
var fexpr__47930 = cr47805_place_12;
return (fexpr__47930.cljs$core$IFn$_invoke$arity$1 ? fexpr__47930.cljs$core$IFn$_invoke$arity$1(G__47931) : fexpr__47930.call(null,G__47931));
})();
(cr47805_state[(0)] = cr47805_block_4);

(cr47805_state[(2)] = null);

(cr47805_state[(1)] = null);

(cr47805_state[(1)] = cr47805_place_8);

(cr47805_state[(5)] = cr47805_place_9);

(cr47805_state[(4)] = cr47805_place_10);

(cr47805_state[(6)] = cr47805_place_11);

(cr47805_state[(2)] = cr47805_place_14);

return cr47805_state;
}catch (e47928){var cr47805_exception = e47928;
(cr47805_state[(0)] = null);

(cr47805_state[(2)] = null);

(cr47805_state[(3)] = null);

(cr47805_state[(1)] = null);

throw cr47805_exception;
}});
var cr47805_block_5 = (function hyperfiddle$electric$impl$io$message_reader_$_cr47805_block_5(cr47805_state){
try{var cr47805_place_29 = _QMARK_read;
(cr47805_state[(0)] = cr47805_block_6);

return missionary.core.park(cr47805_place_29);
}catch (e47932){var cr47805_exception = e47932;
(cr47805_state[(0)] = null);

(cr47805_state[(7)] = null);

(cr47805_state[(1)] = null);

(cr47805_state[(2)] = null);

(cr47805_state[(4)] = null);

(cr47805_state[(3)] = null);

(cr47805_state[(5)] = null);

(cr47805_state[(6)] = null);

throw cr47805_exception;
}});
var cr47805_block_6 = (function hyperfiddle$electric$impl$io$message_reader_$_cr47805_block_6(cr47805_state){
try{var cr47805_place_22 = (cr47805_state[(7)]);
var cr47805_place_30 = missionary.core.unpark();
var cr47805_place_31 = cr47805_place_22;
(cr47805_state[(0)] = cr47805_block_4);

(cr47805_state[(7)] = null);

(cr47805_state[(6)] = cr47805_place_30);

(cr47805_state[(2)] = cr47805_place_31);

return cr47805_state;
}catch (e47937){var cr47805_exception = e47937;
(cr47805_state[(0)] = null);

(cr47805_state[(7)] = null);

(cr47805_state[(1)] = null);

(cr47805_state[(2)] = null);

(cr47805_state[(4)] = null);

(cr47805_state[(3)] = null);

(cr47805_state[(5)] = null);

(cr47805_state[(6)] = null);

throw cr47805_exception;
}});
var cr47805_block_0 = (function hyperfiddle$electric$impl$io$message_reader_$_cr47805_block_0(cr47805_state){
try{var cr47805_place_0 = cljs.core.transient$;
var cr47805_place_1 = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IVector], null));
var cr47805_place_2 = (function (){var G__47940 = cr47805_place_1;
var fexpr__47939 = cr47805_place_0;
return (fexpr__47939.cljs$core$IFn$_invoke$arity$1 ? fexpr__47939.cljs$core$IFn$_invoke$arity$1(G__47940) : fexpr__47939.call(null,G__47940));
})();
(cr47805_state[(0)] = cr47805_block_1);

(cr47805_state[(1)] = cr47805_place_2);

return cr47805_state;
}catch (e47938){var cr47805_exception = e47938;
(cr47805_state[(0)] = null);

throw cr47805_exception;
}});
var cr47805_block_7 = (function hyperfiddle$electric$impl$io$message_reader_$_cr47805_block_7(cr47805_state){
try{var cr47805_place_22 = (cr47805_state[(7)]);
var cr47805_place_32 = cljs.core.persistent_BANG_;
var cr47805_place_33 = cr47805_place_22;
var cr47805_place_34 = (function (){var G__47944 = cr47805_place_33;
var fexpr__47943 = cr47805_place_32;
return (fexpr__47943.cljs$core$IFn$_invoke$arity$1 ? fexpr__47943.cljs$core$IFn$_invoke$arity$1(G__47944) : fexpr__47943.call(null,G__47944));
})();
(cr47805_state[(0)] = cr47805_block_8);

(cr47805_state[(7)] = null);

(cr47805_state[(2)] = cr47805_place_34);

return cr47805_state;
}catch (e47941){var cr47805_exception = e47941;
(cr47805_state[(0)] = null);

(cr47805_state[(7)] = null);

(cr47805_state[(1)] = null);

(cr47805_state[(4)] = null);

(cr47805_state[(3)] = null);

(cr47805_state[(5)] = null);

(cr47805_state[(2)] = null);

throw cr47805_exception;
}});
var cr47805_block_4 = (function hyperfiddle$electric$impl$io$message_reader_$_cr47805_block_4(cr47805_state){
try{var cr47805_place_14 = (cr47805_state[(2)]);
var cr47805_place_11 = (cr47805_state[(6)]);
var cr47805_place_15 = hyperfiddle.electric.impl.io.decode_numbers;
var cr47805_place_16 = cr47805_place_11;
var cr47805_place_17 = (function (){var G__47948 = cr47805_place_16;
var fexpr__47947 = cr47805_place_15;
return (fexpr__47947.cljs$core$IFn$_invoke$arity$1 ? fexpr__47947.cljs$core$IFn$_invoke$arity$1(G__47948) : fexpr__47947.call(null,G__47948));
})();
var cr47805_place_18 = cljs.core.reduce;
var cr47805_place_19 = cljs.core.conj_BANG_;
var cr47805_place_20 = cr47805_place_14;
var cr47805_place_21 = cr47805_place_17;
var cr47805_place_22 = (function (){var G__47950 = cr47805_place_19;
var G__47951 = cr47805_place_20;
var G__47952 = cr47805_place_21;
var fexpr__47949 = cr47805_place_18;
return (fexpr__47949.cljs$core$IFn$_invoke$arity$3 ? fexpr__47949.cljs$core$IFn$_invoke$arity$3(G__47950,G__47951,G__47952) : fexpr__47949.call(null,G__47950,G__47951,G__47952));
})();
var cr47805_place_23 = cljs.core.count;
var cr47805_place_24 = cr47805_place_17;
var cr47805_place_25 = (function (){var G__47954 = cr47805_place_24;
var fexpr__47953 = cr47805_place_23;
return (fexpr__47953.cljs$core$IFn$_invoke$arity$1 ? fexpr__47953.cljs$core$IFn$_invoke$arity$1(G__47954) : fexpr__47953.call(null,G__47954));
})();
var cr47805_place_26 = hyperfiddle.electric.impl.io.chunk_size;
var cr47805_place_27 = (cr47805_place_25 < cr47805_place_26);
var cr47805_place_28 = null;
if(cr47805_place_27){
(cr47805_state[(0)] = cr47805_block_7);

(cr47805_state[(2)] = null);

(cr47805_state[(6)] = null);

(cr47805_state[(7)] = cr47805_place_22);

(cr47805_state[(2)] = cr47805_place_28);

return cr47805_state;
} else {
(cr47805_state[(0)] = cr47805_block_5);

(cr47805_state[(7)] = cr47805_place_22);

return cr47805_state;
}
}catch (e47946){var cr47805_exception = e47946;
(cr47805_state[(0)] = null);

(cr47805_state[(1)] = null);

(cr47805_state[(2)] = null);

(cr47805_state[(4)] = null);

(cr47805_state[(3)] = null);

(cr47805_state[(5)] = null);

(cr47805_state[(6)] = null);

throw cr47805_exception;
}});
var cr47805_block_10 = (function hyperfiddle$electric$impl$io$message_reader_$_cr47805_block_10(cr47805_state){
try{var cr47805_place_7 = (cr47805_state[(3)]);
(cr47805_state[(0)] = null);

(cr47805_state[(3)] = null);

return cr47805_place_7;
}catch (e47956){var cr47805_exception = e47956;
(cr47805_state[(0)] = null);

(cr47805_state[(3)] = null);

throw cr47805_exception;
}});
var cr47805_block_2 = (function hyperfiddle$electric$impl$io$message_reader_$_cr47805_block_2(cr47805_state){
try{var cr47805_place_4 = missionary.core.unpark();
var cr47805_place_5 = cr47805_place_4;
var cr47805_place_6 = typeof cr47805_place_5 === 'string';
var cr47805_place_7 = null;
if(cr47805_place_6){
(cr47805_state[(0)] = cr47805_block_9);

(cr47805_state[(2)] = cr47805_place_4);

return cr47805_state;
} else {
(cr47805_state[(0)] = cr47805_block_3);

(cr47805_state[(2)] = cr47805_place_4);

(cr47805_state[(3)] = cr47805_place_7);

return cr47805_state;
}
}catch (e47958){var cr47805_exception = e47958;
(cr47805_state[(0)] = null);

(cr47805_state[(1)] = null);

throw cr47805_exception;
}});
return cloroutine.impl.coroutine((function (){var G__47959 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((8));
(G__47959[(0)] = cr47805_block_0);

return G__47959;
})());
})(),missionary.core.sp_run);
});
/**
 * Returns a function taking an Electric message and returning a task writing it as individual frames using provided
 * function. Might cut a message into chunks if its size would exceed the server payload limit.
 * An empty message (0b) is written to notify the end of frame.
 */
hyperfiddle.electric.impl.io.message_writer = (function hyperfiddle$electric$impl$io$message_writer(write){
return (function (p1__47960_SHARP_){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr47961_block_6 = (function hyperfiddle$electric$impl$io$message_writer_$_cr47961_block_6(cr47961_state){
try{var cr47961_place_21 = (cr47961_state[(3)]);
var cr47961_place_44 = missionary.core.unpark();
var cr47961_place_45 = cr47961_place_21;
(cr47961_state[(0)] = cr47961_block_1);

(cr47961_state[(3)] = null);

(cr47961_state[(1)] = cr47961_place_45);

return cr47961_state;
}catch (e48062){var cr47961_exception = e48062;
(cr47961_state[(0)] = null);

(cr47961_state[(3)] = null);

(cr47961_state[(1)] = null);

throw cr47961_exception;
}});
var cr47961_block_13 = (function hyperfiddle$electric$impl$io$message_writer_$_cr47961_block_13(cr47961_state){
try{var cr47961_place_54 = (cr47961_state[(3)]);
(cr47961_state[(0)] = cr47961_block_14);

(cr47961_state[(3)] = null);

(cr47961_state[(1)] = cr47961_place_54);

return cr47961_state;
}catch (e48063){var cr47961_exception = e48063;
(cr47961_state[(0)] = null);

(cr47961_state[(3)] = null);

(cr47961_state[(1)] = null);

throw cr47961_exception;
}});
var cr47961_block_3 = (function hyperfiddle$electric$impl$io$message_writer_$_cr47961_block_3(cr47961_state){
try{var cr47961_place_20 = (cr47961_state[(4)]);
var cr47961_place_28 = hyperfiddle.electric.impl.io.encode;
var cr47961_place_29 = cr47961_place_20;
var cr47961_place_30 = (function (){var G__48066 = cr47961_place_29;
var fexpr__48065 = cr47961_place_28;
return (fexpr__48065.cljs$core$IFn$_invoke$arity$1 ? fexpr__48065.cljs$core$IFn$_invoke$arity$1(G__48066) : fexpr__48065.call(null,G__48066));
})();
(cr47961_state[(0)] = cr47961_block_5);

(cr47961_state[(4)] = null);

(cr47961_state[(5)] = cr47961_place_30);

return cr47961_state;
}catch (e48064){var cr47961_exception = e48064;
(cr47961_state[(0)] = cr47961_block_4);

(cr47961_state[(5)] = cr47961_exception);

return cr47961_state;
}});
var cr47961_block_11 = (function hyperfiddle$electric$impl$io$message_writer_$_cr47961_block_11(cr47961_state){
try{var cr47961_place_48 = (cr47961_state[(2)]);
var cr47961_place_62 = hyperfiddle.electric.impl.io.encode_numbers;
var cr47961_place_63 = cljs.core.subvec;
var cr47961_place_64 = cr47961_place_48;
var cr47961_place_65 = (0);
var cr47961_place_66 = hyperfiddle.electric.impl.io.chunk_size;
var cr47961_place_67 = (function (){var G__48070 = cr47961_place_64;
var G__48071 = cr47961_place_65;
var G__48072 = cr47961_place_66;
var fexpr__48069 = cr47961_place_63;
return (fexpr__48069.cljs$core$IFn$_invoke$arity$3 ? fexpr__48069.cljs$core$IFn$_invoke$arity$3(G__48070,G__48071,G__48072) : fexpr__48069.call(null,G__48070,G__48071,G__48072));
})();
var cr47961_place_68 = (function (){var G__48075 = cr47961_place_67;
var fexpr__48074 = cr47961_place_62;
return (fexpr__48074.cljs$core$IFn$_invoke$arity$1 ? fexpr__48074.cljs$core$IFn$_invoke$arity$1(G__48075) : fexpr__48074.call(null,G__48075));
})();
var cr47961_place_69 = write;
var cr47961_place_70 = cr47961_place_68;
var cr47961_place_71 = (function (){var G__48078 = cr47961_place_70;
var fexpr__48077 = cr47961_place_69;
return (fexpr__48077.cljs$core$IFn$_invoke$arity$1 ? fexpr__48077.cljs$core$IFn$_invoke$arity$1(G__48078) : fexpr__48077.call(null,G__48078));
})();
(cr47961_state[(0)] = cr47961_block_12);

return missionary.core.park(cr47961_place_71);
}catch (e48067){var cr47961_exception = e48067;
(cr47961_state[(0)] = null);

(cr47961_state[(2)] = null);

(cr47961_state[(1)] = null);

throw cr47961_exception;
}});
var cr47961_block_1 = (function hyperfiddle$electric$impl$io$message_writer_$_cr47961_block_1(cr47961_state){
try{var cr47961_place_4 = (cr47961_state[(1)]);
var cr47961_place_5 = cr47961_place_4;
var cr47961_place_6 = cr47961_place_5;
var cr47961_place_7 = null;
var cr47961_place_8 = (cr47961_place_6 == cr47961_place_7);
var cr47961_place_9 = null;
if(cr47961_place_8){
(cr47961_state[(0)] = cr47961_block_7);

(cr47961_state[(1)] = null);

(cr47961_state[(1)] = cr47961_place_9);

return cr47961_state;
} else {
(cr47961_state[(0)] = cr47961_block_2);

(cr47961_state[(2)] = cr47961_place_5);

return cr47961_state;
}
}catch (e48079){var cr47961_exception = e48079;
(cr47961_state[(0)] = null);

(cr47961_state[(1)] = null);

throw cr47961_exception;
}});
var cr47961_block_9 = (function hyperfiddle$electric$impl$io$message_writer_$_cr47961_block_9(cr47961_state){
try{var cr47961_place_48 = (cr47961_state[(2)]);
var cr47961_place_55 = hyperfiddle.electric.impl.io.encode_numbers;
var cr47961_place_56 = cr47961_place_48;
var cr47961_place_57 = (function (){var G__48082 = cr47961_place_56;
var fexpr__48081 = cr47961_place_55;
return (fexpr__48081.cljs$core$IFn$_invoke$arity$1 ? fexpr__48081.cljs$core$IFn$_invoke$arity$1(G__48082) : fexpr__48081.call(null,G__48082));
})();
var cr47961_place_58 = write;
var cr47961_place_59 = cr47961_place_57;
var cr47961_place_60 = (function (){var G__48084 = cr47961_place_59;
var fexpr__48083 = cr47961_place_58;
return (fexpr__48083.cljs$core$IFn$_invoke$arity$1 ? fexpr__48083.cljs$core$IFn$_invoke$arity$1(G__48084) : fexpr__48083.call(null,G__48084));
})();
(cr47961_state[(0)] = cr47961_block_10);

(cr47961_state[(2)] = null);

return missionary.core.park(cr47961_place_60);
}catch (e48080){var cr47961_exception = e48080;
(cr47961_state[(0)] = null);

(cr47961_state[(2)] = null);

(cr47961_state[(3)] = null);

(cr47961_state[(1)] = null);

throw cr47961_exception;
}});
var cr47961_block_8 = (function hyperfiddle$electric$impl$io$message_writer_$_cr47961_block_8(cr47961_state){
try{var cr47961_place_48 = (cr47961_state[(2)]);
var cr47961_place_49 = cljs.core.count;
var cr47961_place_50 = cr47961_place_48;
var cr47961_place_51 = (function (){var G__48087 = cr47961_place_50;
var fexpr__48086 = cr47961_place_49;
return (fexpr__48086.cljs$core$IFn$_invoke$arity$1 ? fexpr__48086.cljs$core$IFn$_invoke$arity$1(G__48087) : fexpr__48086.call(null,G__48087));
})();
var cr47961_place_52 = hyperfiddle.electric.impl.io.chunk_size;
var cr47961_place_53 = (cr47961_place_51 >= cr47961_place_52);
var cr47961_place_54 = null;
if(cr47961_place_53){
(cr47961_state[(0)] = cr47961_block_11);

return cr47961_state;
} else {
(cr47961_state[(0)] = cr47961_block_9);

(cr47961_state[(3)] = cr47961_place_54);

return cr47961_state;
}
}catch (e48085){var cr47961_exception = e48085;
(cr47961_state[(0)] = null);

(cr47961_state[(2)] = null);

(cr47961_state[(1)] = null);

throw cr47961_exception;
}});
var cr47961_block_0 = (function hyperfiddle$electric$impl$io$message_writer_$_cr47961_block_0(cr47961_state){
try{var cr47961_place_0 = cljs.core.seq;
var cr47961_place_1 = cljs.core.pop;
var cr47961_place_2 = p1__47960_SHARP_;
var cr47961_place_3 = (function (){var G__48090 = cr47961_place_2;
var fexpr__48089 = cr47961_place_1;
return (fexpr__48089.cljs$core$IFn$_invoke$arity$1 ? fexpr__48089.cljs$core$IFn$_invoke$arity$1(G__48090) : fexpr__48089.call(null,G__48090));
})();
var cr47961_place_4 = (function (){var G__48092 = cr47961_place_3;
var fexpr__48091 = cr47961_place_0;
return (fexpr__48091.cljs$core$IFn$_invoke$arity$1 ? fexpr__48091.cljs$core$IFn$_invoke$arity$1(G__48092) : fexpr__48091.call(null,G__48092));
})();
(cr47961_state[(0)] = cr47961_block_1);

(cr47961_state[(1)] = cr47961_place_4);

return cr47961_state;
}catch (e48088){var cr47961_exception = e48088;
(cr47961_state[(0)] = null);

throw cr47961_exception;
}});
var cr47961_block_12 = (function hyperfiddle$electric$impl$io$message_writer_$_cr47961_block_12(cr47961_state){
try{var cr47961_place_48 = (cr47961_state[(2)]);
var cr47961_place_72 = missionary.core.unpark();
var cr47961_place_73 = cljs.core.subvec;
var cr47961_place_74 = cr47961_place_48;
var cr47961_place_75 = hyperfiddle.electric.impl.io.chunk_size;
var cr47961_place_76 = (function (){var G__48095 = cr47961_place_74;
var G__48096 = cr47961_place_75;
var fexpr__48094 = cr47961_place_73;
return (fexpr__48094.cljs$core$IFn$_invoke$arity$2 ? fexpr__48094.cljs$core$IFn$_invoke$arity$2(G__48095,G__48096) : fexpr__48094.call(null,G__48095,G__48096));
})();
(cr47961_state[(0)] = cr47961_block_8);

(cr47961_state[(2)] = cr47961_place_76);

return cr47961_state;
}catch (e48093){var cr47961_exception = e48093;
(cr47961_state[(0)] = null);

(cr47961_state[(2)] = null);

(cr47961_state[(1)] = null);

throw cr47961_exception;
}});
var cr47961_block_2 = (function hyperfiddle$electric$impl$io$message_writer_$_cr47961_block_2(cr47961_state){
try{var cr47961_place_5 = (cr47961_state[(2)]);
var cr47961_place_10 = cr47961_place_5;
var cr47961_place_11 = cljs.core.seq;
var cr47961_place_12 = cr47961_place_10;
var cr47961_place_13 = (function (){var G__48099 = cr47961_place_12;
var fexpr__48098 = cr47961_place_11;
return (fexpr__48098.cljs$core$IFn$_invoke$arity$1 ? fexpr__48098.cljs$core$IFn$_invoke$arity$1(G__48099) : fexpr__48098.call(null,G__48099));
})();
var cr47961_place_14 = cljs.core.first;
var cr47961_place_15 = cr47961_place_13;
var cr47961_place_16 = (function (){var G__48101 = cr47961_place_15;
var fexpr__48100 = cr47961_place_14;
return (fexpr__48100.cljs$core$IFn$_invoke$arity$1 ? fexpr__48100.cljs$core$IFn$_invoke$arity$1(G__48101) : fexpr__48100.call(null,G__48101));
})();
var cr47961_place_17 = cljs.core.next;
var cr47961_place_18 = cr47961_place_13;
var cr47961_place_19 = (function (){var G__48103 = cr47961_place_18;
var fexpr__48102 = cr47961_place_17;
return (fexpr__48102.cljs$core$IFn$_invoke$arity$1 ? fexpr__48102.cljs$core$IFn$_invoke$arity$1(G__48103) : fexpr__48102.call(null,G__48103));
})();
var cr47961_place_20 = cr47961_place_16;
var cr47961_place_21 = cr47961_place_19;
var cr47961_place_22 = console.debug;
var cr47961_place_23 = "\uD83D\uDD3C";
var cr47961_place_24 = cr47961_place_20;
var cr47961_place_25 = (function (){var G__48105 = cr47961_place_23;
var G__48106 = cr47961_place_24;
var fexpr__48104 = cr47961_place_22;
return (fexpr__48104.cljs$core$IFn$_invoke$arity$2 ? fexpr__48104.cljs$core$IFn$_invoke$arity$2(G__48105,G__48106) : fexpr__48104.call(null,G__48105,G__48106));
})();
var cr47961_place_26 = null;
var cr47961_place_27 = false;
(cr47961_state[(0)] = cr47961_block_3);

(cr47961_state[(2)] = null);

(cr47961_state[(2)] = cr47961_place_27);

(cr47961_state[(3)] = cr47961_place_21);

(cr47961_state[(4)] = cr47961_place_20);

(cr47961_state[(5)] = cr47961_place_26);

return cr47961_state;
}catch (e48097){var cr47961_exception = e48097;
(cr47961_state[(0)] = null);

(cr47961_state[(2)] = null);

(cr47961_state[(1)] = null);

throw cr47961_exception;
}});
var cr47961_block_4 = (function hyperfiddle$electric$impl$io$message_writer_$_cr47961_block_4(cr47961_state){
try{var cr47961_place_20 = (cr47961_state[(4)]);
var cr47961_place_26 = (cr47961_state[(5)]);
var cr47961_place_31 = cr47961_place_26;
var cr47961_place_32 = cljs.core.ex_info;
var cr47961_place_33 = "Failed to encode";
var cr47961_place_34 = new cljs.core.Keyword(null,"value","value",305978217);
var cr47961_place_35 = cr47961_place_20;
var cr47961_place_36 = cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([cr47961_place_34,cr47961_place_35]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr47961_place_37 = cr47961_place_31;
var cr47961_place_38 = (function (){var G__48111 = cr47961_place_33;
var G__48112 = cr47961_place_36;
var G__48113 = cr47961_place_37;
var fexpr__48110 = cr47961_place_32;
return (fexpr__48110.cljs$core$IFn$_invoke$arity$3 ? fexpr__48110.cljs$core$IFn$_invoke$arity$3(G__48111,G__48112,G__48113) : fexpr__48110.call(null,G__48111,G__48112,G__48113));
})();
var cr47961_place_39 = (function(){throw cr47961_place_38})();
(cr47961_state[(0)] = null);

(cr47961_state[(2)] = null);

(cr47961_state[(3)] = null);

(cr47961_state[(4)] = null);

(cr47961_state[(1)] = null);

(cr47961_state[(5)] = null);

return null;
}catch (e48107){var cr47961_exception = e48107;
(cr47961_state[(0)] = cr47961_block_5);

(cr47961_state[(4)] = null);

(cr47961_state[(2)] = true);

(cr47961_state[(5)] = cr47961_exception);

return cr47961_state;
}});
var cr47961_block_14 = (function hyperfiddle$electric$impl$io$message_writer_$_cr47961_block_14(cr47961_state){
try{var cr47961_place_9 = (cr47961_state[(1)]);
(cr47961_state[(0)] = null);

(cr47961_state[(1)] = null);

return cr47961_place_9;
}catch (e48114){var cr47961_exception = e48114;
(cr47961_state[(0)] = null);

(cr47961_state[(1)] = null);

throw cr47961_exception;
}});
var cr47961_block_5 = (function hyperfiddle$electric$impl$io$message_writer_$_cr47961_block_5(cr47961_state){
try{var cr47961_place_27 = (cr47961_state[(2)]);
var cr47961_place_26 = (cr47961_state[(5)]);
var cr47961_place_40 = (cljs.core.truth_(cr47961_place_27)?(function(){throw cr47961_place_26})():cr47961_place_26);
var cr47961_place_41 = write;
var cr47961_place_42 = cr47961_place_40;
var cr47961_place_43 = (function (){var G__48119 = cr47961_place_42;
var fexpr__48118 = cr47961_place_41;
return (fexpr__48118.cljs$core$IFn$_invoke$arity$1 ? fexpr__48118.cljs$core$IFn$_invoke$arity$1(G__48119) : fexpr__48118.call(null,G__48119));
})();
(cr47961_state[(0)] = cr47961_block_6);

(cr47961_state[(2)] = null);

(cr47961_state[(5)] = null);

return missionary.core.park(cr47961_place_43);
}catch (e48116){var cr47961_exception = e48116;
(cr47961_state[(0)] = null);

(cr47961_state[(2)] = null);

(cr47961_state[(3)] = null);

(cr47961_state[(1)] = null);

(cr47961_state[(5)] = null);

throw cr47961_exception;
}});
var cr47961_block_7 = (function hyperfiddle$electric$impl$io$message_writer_$_cr47961_block_7(cr47961_state){
try{var cr47961_place_46 = cljs.core.peek;
var cr47961_place_47 = p1__47960_SHARP_;
var cr47961_place_48 = (function (){var G__48122 = cr47961_place_47;
var fexpr__48121 = cr47961_place_46;
return (fexpr__48121.cljs$core$IFn$_invoke$arity$1 ? fexpr__48121.cljs$core$IFn$_invoke$arity$1(G__48122) : fexpr__48121.call(null,G__48122));
})();
(cr47961_state[(0)] = cr47961_block_8);

(cr47961_state[(2)] = cr47961_place_48);

return cr47961_state;
}catch (e48120){var cr47961_exception = e48120;
(cr47961_state[(0)] = null);

(cr47961_state[(1)] = null);

throw cr47961_exception;
}});
var cr47961_block_10 = (function hyperfiddle$electric$impl$io$message_writer_$_cr47961_block_10(cr47961_state){
try{var cr47961_place_61 = missionary.core.unpark();
(cr47961_state[(0)] = cr47961_block_13);

(cr47961_state[(3)] = cr47961_place_61);

return cr47961_state;
}catch (e48123){var cr47961_exception = e48123;
(cr47961_state[(0)] = null);

(cr47961_state[(3)] = null);

(cr47961_state[(1)] = null);

throw cr47961_exception;
}});
return cloroutine.impl.coroutine((function (){var G__48124 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((6));
(G__48124[(0)] = cr47961_block_0);

return G__48124;
})());
})(),missionary.core.sp_run);
});
});
/**
 * A transducer partitioning a sequence of network messages into Electric events.
 */
hyperfiddle.electric.impl.io.decoder = (function hyperfiddle$electric$impl$io$decoder(rf){
var data = (function (){var G__48125 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__48125[(0)] = cljs.core.PersistentVector.EMPTY);

(G__48125[(1)] = cljs.core.PersistentVector.EMPTY);

return G__48125;
})();
return (function() {
var G__48159 = null;
var G__48159__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__48159__1 = (function (r){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.EMPTY,(data[(0)]),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(data[(1)])], 0))){
} else {
throw (new Error("Assert failed: (= [] (aget data 0) (aget data 1))"));
}

return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(r) : rf.call(null,r));
});
var G__48159__2 = (function (r,x){
if(typeof x === 'string'){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(data[(1)]))){
} else {
throw (new Error("Assert failed: (= [] (aget data 1))"));
}

(data[(0)] = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((data[(0)]),hyperfiddle.electric.impl.io.decode_str(x)));

return r;
} else {
var xs = hyperfiddle.electric.impl.io.decode_numbers(x);
(data[(1)] = cljs.core.into.cljs$core$IFn$_invoke$arity$2((data[(1)]),xs));

if((cljs.core.count(xs) < hyperfiddle.electric.impl.io.chunk_size)){
var x__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((data[(0)]),(data[(1)]));
(data[(0)] = cljs.core.PersistentVector.EMPTY);

(data[(1)] = cljs.core.PersistentVector.EMPTY);

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(r,x__$1) : rf.call(null,r,x__$1));
} else {
return r;
}
}
});
G__48159 = function(r,x){
switch(arguments.length){
case 0:
return G__48159__0.call(this);
case 1:
return G__48159__1.call(this,r);
case 2:
return G__48159__2.call(this,r,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__48159.cljs$core$IFn$_invoke$arity$0 = G__48159__0;
G__48159.cljs$core$IFn$_invoke$arity$1 = G__48159__1;
G__48159.cljs$core$IFn$_invoke$arity$2 = G__48159__2;
return G__48159;
})()
});
/**
 * A transducer expanding Electric events to a sequence of network messages.
 */
hyperfiddle.electric.impl.io.encoder = (function hyperfiddle$electric$impl$io$encoder(rf){
return (function() {
var G__48162 = null;
var G__48162__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__48162__1 = (function (r){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(r) : rf.call(null,r));
});
var G__48162__2 = (function (r,x){
var r__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,r,cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.io.encode),cljs.core.pop(x)], 0)));
var r__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,r__$1,cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partition_all.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.io.chunk_size),cljs.core.map.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.io.encode_numbers),cljs.core.peek(x)], 0)));
var G__48126 = cljs.core.mod(cljs.core.count(cljs.core.peek(x)),hyperfiddle.electric.impl.io.chunk_size);
switch (G__48126) {
case (0):
var G__48127 = r__$2;
var G__48128 = hyperfiddle.electric.impl.io.encode_numbers(cljs.core.PersistentVector.EMPTY);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__48127,G__48128) : rf.call(null,G__48127,G__48128));

break;
default:
return r__$2;

}
});
G__48162 = function(r,x){
switch(arguments.length){
case 0:
return G__48162__0.call(this);
case 1:
return G__48162__1.call(this,r);
case 2:
return G__48162__2.call(this,r,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__48162.cljs$core$IFn$_invoke$arity$0 = G__48162__0;
G__48162.cljs$core$IFn$_invoke$arity$1 = G__48162__1;
G__48162.cljs$core$IFn$_invoke$arity$2 = G__48162__2;
return G__48162;
})()
});
hyperfiddle.electric.impl.io.foreach = (function hyperfiddle$electric$impl$io$foreach(var_args){
var G__48130 = arguments.length;
switch (G__48130) {
case 1:
return hyperfiddle.electric.impl.io.foreach.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hyperfiddle.electric.impl.io.foreach.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric.impl.io.foreach.cljs$core$IFn$_invoke$arity$1 = (function (r){
return r;
}));

(hyperfiddle.electric.impl.io.foreach.cljs$core$IFn$_invoke$arity$2 = (function (r,x){
(r.cljs$core$IFn$_invoke$arity$1 ? r.cljs$core$IFn$_invoke$arity$1(x) : r.call(null,x));

return r;
}));

(hyperfiddle.electric.impl.io.foreach.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=hyperfiddle.electric.impl.io.js.map
