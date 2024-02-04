goog.provide('hyperfiddle.history2');

/**
 * @interface
 */
hyperfiddle.history2.IHistory = function(){};

var hyperfiddle$history2$IHistory$navigate_BANG_$dyn_34892 = (function (this$,route){
var x__5346__auto__ = (((this$ == null))?null:this$);
var m__5347__auto__ = (hyperfiddle.history2.navigate_BANG_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$2(this$,route) : m__5347__auto__.call(null,this$,route));
} else {
var m__5345__auto__ = (hyperfiddle.history2.navigate_BANG_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$2(this$,route) : m__5345__auto__.call(null,this$,route));
} else {
throw cljs.core.missing_protocol("IHistory.navigate!",this$);
}
}
});
hyperfiddle.history2.navigate_BANG_ = (function hyperfiddle$history2$navigate_BANG_(this$,route){
if((((!((this$ == null)))) && ((!((this$.hyperfiddle$history2$IHistory$navigate_BANG_$arity$2 == null)))))){
return this$.hyperfiddle$history2$IHistory$navigate_BANG_$arity$2(this$,route);
} else {
return hyperfiddle$history2$IHistory$navigate_BANG_$dyn_34892(this$,route);
}
});

var hyperfiddle$history2$IHistory$back_BANG_$dyn_34893 = (function (this$){
var x__5346__auto__ = (((this$ == null))?null:this$);
var m__5347__auto__ = (hyperfiddle.history2.back_BANG_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5347__auto__.call(null,this$));
} else {
var m__5345__auto__ = (hyperfiddle.history2.back_BANG_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5345__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IHistory.back!",this$);
}
}
});
hyperfiddle.history2.back_BANG_ = (function hyperfiddle$history2$back_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.hyperfiddle$history2$IHistory$back_BANG_$arity$1 == null)))))){
return this$.hyperfiddle$history2$IHistory$back_BANG_$arity$1(this$);
} else {
return hyperfiddle$history2$IHistory$back_BANG_$dyn_34893(this$);
}
});

var hyperfiddle$history2$IHistory$forward_BANG_$dyn_34894 = (function (this$){
var x__5346__auto__ = (((this$ == null))?null:this$);
var m__5347__auto__ = (hyperfiddle.history2.forward_BANG_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5347__auto__.call(null,this$));
} else {
var m__5345__auto__ = (hyperfiddle.history2.forward_BANG_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5345__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IHistory.forward!",this$);
}
}
});
hyperfiddle.history2.forward_BANG_ = (function hyperfiddle$history2$forward_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.hyperfiddle$history2$IHistory$forward_BANG_$arity$1 == null)))))){
return this$.hyperfiddle$history2$IHistory$forward_BANG_$arity$1(this$);
} else {
return hyperfiddle$history2$IHistory$forward_BANG_$dyn_34894(this$);
}
});

var hyperfiddle$history2$IHistory$replace_state_BANG_$dyn_34895 = (function (this$,new_state){
var x__5346__auto__ = (((this$ == null))?null:this$);
var m__5347__auto__ = (hyperfiddle.history2.replace_state_BANG_[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$2(this$,new_state) : m__5347__auto__.call(null,this$,new_state));
} else {
var m__5345__auto__ = (hyperfiddle.history2.replace_state_BANG_["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$2(this$,new_state) : m__5345__auto__.call(null,this$,new_state));
} else {
throw cljs.core.missing_protocol("IHistory.replace-state!",this$);
}
}
});
hyperfiddle.history2.replace_state_BANG_ = (function hyperfiddle$history2$replace_state_BANG_(this$,new_state){
if((((!((this$ == null)))) && ((!((this$.hyperfiddle$history2$IHistory$replace_state_BANG_$arity$2 == null)))))){
return this$.hyperfiddle$history2$IHistory$replace_state_BANG_$arity$2(this$,new_state);
} else {
return hyperfiddle$history2$IHistory$replace_state_BANG_$dyn_34895(this$,new_state);
}
});

hyperfiddle.history2.updatef = (function hyperfiddle$history2$updatef(p__34747,f){
var vec__34748 = p__34747;
var history__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34748,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34748,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$3(history__$1,idx,f),idx], null);
});
hyperfiddle.history2.notify_watches = (function hyperfiddle$history2$notify_watches(this$,p__34765){
var vec__34766 = p__34765;
var oldstate = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34766,(0),null);
var newstate = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34766,(1),null);
var oldval = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.get,oldstate);
var newval = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.get,newstate);
var seq__34770 = cljs.core.seq(cljs.core.deref(new cljs.core.Keyword(null,"watches","watches",-273097535).cljs$core$IFn$_invoke$arity$1(this$)));
var chunk__34771 = null;
var count__34772 = (0);
var i__34773 = (0);
while(true){
if((i__34773 < count__34772)){
var vec__34782 = chunk__34771.cljs$core$IIndexed$_nth$arity$2(null,i__34773);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34782,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34782,(1),null);
(callback.cljs$core$IFn$_invoke$arity$4 ? callback.cljs$core$IFn$_invoke$arity$4(key,this$,oldval,newval) : callback.call(null,key,this$,oldval,newval));


var G__34896 = seq__34770;
var G__34897 = chunk__34771;
var G__34898 = count__34772;
var G__34899 = (i__34773 + (1));
seq__34770 = G__34896;
chunk__34771 = G__34897;
count__34772 = G__34898;
i__34773 = G__34899;
continue;
} else {
var temp__5816__auto__ = cljs.core.seq(seq__34770);
if(temp__5816__auto__){
var seq__34770__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34770__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__34770__$1);
var G__34900 = cljs.core.chunk_rest(seq__34770__$1);
var G__34901 = c__5521__auto__;
var G__34902 = cljs.core.count(c__5521__auto__);
var G__34903 = (0);
seq__34770 = G__34900;
chunk__34771 = G__34901;
count__34772 = G__34902;
i__34773 = G__34903;
continue;
} else {
var vec__34790 = cljs.core.first(seq__34770__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34790,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34790,(1),null);
(callback.cljs$core$IFn$_invoke$arity$4 ? callback.cljs$core$IFn$_invoke$arity$4(key,this$,oldval,newval) : callback.call(null,key,this$,oldval,newval));


var G__34904 = cljs.core.next(seq__34770__$1);
var G__34905 = null;
var G__34906 = (0);
var G__34907 = (0);
seq__34770 = G__34904;
chunk__34771 = G__34905;
count__34772 = G__34906;
i__34773 = G__34907;
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
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
hyperfiddle.history2.AtomHistory = (function (state,watches,max_size,__meta,__extmap,__hash){
this.state = state;
this.watches = watches;
this.max_size = max_size;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230748938;
this.cljs$lang$protocol_mask$partition1$ = 253954;
});
(hyperfiddle.history2.AtomHistory.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5296__auto__,k__5297__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
return this__5296__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5297__auto__,null);
}));

(hyperfiddle.history2.AtomHistory.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5298__auto__,k34803,else__5299__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
var G__34815 = k34803;
var G__34815__$1 = (((G__34815 instanceof cljs.core.Keyword))?G__34815.fqn:null);
switch (G__34815__$1) {
case "state":
return self__.state;

break;
case "watches":
return self__.watches;

break;
case "max-size":
return self__.max_size;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34803,else__5299__auto__);

}
}));

(hyperfiddle.history2.AtomHistory.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5316__auto__,f__5317__auto__,init__5318__auto__){
var self__ = this;
var this__5316__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5319__auto__,p__34816){
var vec__34817 = p__34816;
var k__5320__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34817,(0),null);
var v__5321__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34817,(1),null);
return (f__5317__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5317__auto__.cljs$core$IFn$_invoke$arity$3(ret__5319__auto__,k__5320__auto__,v__5321__auto__) : f__5317__auto__.call(null,ret__5319__auto__,k__5320__auto__,v__5321__auto__));
}),init__5318__auto__,this__5316__auto____$1);
}));

(hyperfiddle.history2.AtomHistory.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5311__auto__,writer__5312__auto__,opts__5313__auto__){
var self__ = this;
var this__5311__auto____$1 = this;
var pr_pair__5314__auto__ = (function (keyval__5315__auto__){
return cljs.core.pr_sequential_writer(writer__5312__auto__,cljs.core.pr_writer,""," ","",opts__5313__auto__,keyval__5315__auto__);
});
return cljs.core.pr_sequential_writer(writer__5312__auto__,pr_pair__5314__auto__,"#hyperfiddle.history2.AtomHistory{",", ","}",opts__5313__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"watches","watches",-273097535),self__.watches],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-size","max-size",-874966132),self__.max_size],null))], null),self__.__extmap));
}));

(hyperfiddle.history2.AtomHistory.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34802){
var self__ = this;
var G__34802__$1 = this;
return (new cljs.core.RecordIter((0),G__34802__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"watches","watches",-273097535),new cljs.core.Keyword(null,"max-size","max-size",-874966132)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(hyperfiddle.history2.AtomHistory.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5294__auto__){
var self__ = this;
var this__5294__auto____$1 = this;
return self__.__meta;
}));

(hyperfiddle.history2.AtomHistory.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5291__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
return (new hyperfiddle.history2.AtomHistory(self__.state,self__.watches,self__.max_size,self__.__meta,self__.__extmap,self__.__hash));
}));

(hyperfiddle.history2.AtomHistory.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5300__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(hyperfiddle.history2.AtomHistory.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5292__auto__){
var self__ = this;
var this__5292__auto____$1 = this;
var h__5107__auto__ = self__.__hash;
if((!((h__5107__auto__ == null)))){
return h__5107__auto__;
} else {
var h__5107__auto____$1 = (function (coll__5293__auto__){
return (2127799715 ^ cljs.core.hash_unordered_coll(coll__5293__auto__));
})(this__5292__auto____$1);
(self__.__hash = h__5107__auto____$1);

return h__5107__auto____$1;
}
}));

(hyperfiddle.history2.AtomHistory.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34804,other34805){
var self__ = this;
var this34804__$1 = this;
return (((!((other34805 == null)))) && ((((this34804__$1.constructor === other34805.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34804__$1.state,other34805.state)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34804__$1.watches,other34805.watches)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34804__$1.max_size,other34805.max_size)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34804__$1.__extmap,other34805.__extmap)))))))))));
}));

(hyperfiddle.history2.AtomHistory.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$ISwap$_swap_BANG_$arity$2(null,cljs.core.constantly(newval));
}));

(hyperfiddle.history2.AtomHistory.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return hyperfiddle.history2.notify_watches(this$__$1,cljs.core.swap_vals_BANG_.cljs$core$IFn$_invoke$arity$3(self__.state,hyperfiddle.history2.updatef,f));
}));

(hyperfiddle.history2.AtomHistory.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,arg){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$ISwap$_swap_BANG_$arity$2(null,(function (p1__34799_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__34799_SHARP_,arg) : f.call(null,p1__34799_SHARP_,arg));
}));
}));

(hyperfiddle.history2.AtomHistory.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,arg1,arg2){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$ISwap$_swap_BANG_$arity$2(null,(function (p1__34800_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(p1__34800_SHARP_,arg1,arg2) : f.call(null,p1__34800_SHARP_,arg1,arg2));
}));
}));

(hyperfiddle.history2.AtomHistory.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,x,y,args){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$ISwap$_swap_BANG_$arity$2(null,(function (p1__34801_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,p1__34801_SHARP_,x,y,args);
}));
}));

(hyperfiddle.history2.AtomHistory.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5306__auto__,k__5307__auto__){
var self__ = this;
var this__5306__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"watches","watches",-273097535),null,new cljs.core.Keyword(null,"max-size","max-size",-874966132),null,new cljs.core.Keyword(null,"state","state",-1988618099),null], null), null),k__5307__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5306__auto____$1),self__.__meta),k__5307__auto__);
} else {
return (new hyperfiddle.history2.AtomHistory(self__.state,self__.watches,self__.max_size,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5307__auto__)),null));
}
}));

(hyperfiddle.history2.AtomHistory.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5303__auto__,k34803){
var self__ = this;
var this__5303__auto____$1 = this;
var G__34820 = k34803;
var G__34820__$1 = (((G__34820 instanceof cljs.core.Keyword))?G__34820.fqn:null);
switch (G__34820__$1) {
case "state":
case "watches":
case "max-size":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34803);

}
}));

(hyperfiddle.history2.AtomHistory.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5304__auto__,k__5305__auto__,G__34802){
var self__ = this;
var this__5304__auto____$1 = this;
var pred__34821 = cljs.core.keyword_identical_QMARK_;
var expr__34822 = k__5305__auto__;
if(cljs.core.truth_((pred__34821.cljs$core$IFn$_invoke$arity$2 ? pred__34821.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state","state",-1988618099),expr__34822) : pred__34821.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__34822)))){
return (new hyperfiddle.history2.AtomHistory(G__34802,self__.watches,self__.max_size,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34821.cljs$core$IFn$_invoke$arity$2 ? pred__34821.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"watches","watches",-273097535),expr__34822) : pred__34821.call(null,new cljs.core.Keyword(null,"watches","watches",-273097535),expr__34822)))){
return (new hyperfiddle.history2.AtomHistory(self__.state,G__34802,self__.max_size,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34821.cljs$core$IFn$_invoke$arity$2 ? pred__34821.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"max-size","max-size",-874966132),expr__34822) : pred__34821.call(null,new cljs.core.Keyword(null,"max-size","max-size",-874966132),expr__34822)))){
return (new hyperfiddle.history2.AtomHistory(self__.state,self__.watches,G__34802,self__.__meta,self__.__extmap,null));
} else {
return (new hyperfiddle.history2.AtomHistory(self__.state,self__.watches,self__.max_size,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5305__auto__,G__34802),null));
}
}
}
}));

(hyperfiddle.history2.AtomHistory.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5309__auto__){
var self__ = this;
var this__5309__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state","state",-1988618099),self__.state,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"watches","watches",-273097535),self__.watches,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"max-size","max-size",-874966132),self__.max_size,null))], null),self__.__extmap));
}));

(hyperfiddle.history2.AtomHistory.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,callback){
var self__ = this;
var this$__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.watches,cljs.core.assoc,key,callback);

return this$__$1;
}));

(hyperfiddle.history2.AtomHistory.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (_,key){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.watches,cljs.core.dissoc,key);
}));

(hyperfiddle.history2.AtomHistory.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5295__auto__,G__34802){
var self__ = this;
var this__5295__auto____$1 = this;
return (new hyperfiddle.history2.AtomHistory(self__.state,self__.watches,self__.max_size,G__34802,self__.__extmap,self__.__hash));
}));

(hyperfiddle.history2.AtomHistory.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5301__auto__,entry__5302__auto__){
var self__ = this;
var this__5301__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5302__auto__)){
return this__5301__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5302__auto__,(0)),cljs.core._nth(entry__5302__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5301__auto____$1,entry__5302__auto__);
}
}));

(hyperfiddle.history2.AtomHistory.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var vec__34824 = cljs.core.deref(self__.state);
var history__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34824,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34824,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(history__$1,idx);
}));

(hyperfiddle.history2.AtomHistory.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.Symbol(null,"max-size","max-size",765565395,null)], null);
}));

(hyperfiddle.history2.AtomHistory.cljs$lang$type = true);

(hyperfiddle.history2.AtomHistory.cljs$lang$ctorPrSeq = (function (this__5342__auto__){
return (new cljs.core.List(null,"hyperfiddle.history2/AtomHistory",null,(1),null));
}));

(hyperfiddle.history2.AtomHistory.cljs$lang$ctorPrWriter = (function (this__5342__auto__,writer__5343__auto__){
return cljs.core._write(writer__5343__auto__,"hyperfiddle.history2/AtomHistory");
}));

/**
 * Positional factory function for hyperfiddle.history2/AtomHistory.
 */
hyperfiddle.history2.__GT_AtomHistory = (function hyperfiddle$history2$__GT_AtomHistory(state,watches,max_size){
return (new hyperfiddle.history2.AtomHistory(state,watches,max_size,null,null,null));
});

/**
 * Factory function for hyperfiddle.history2/AtomHistory, taking a map of keywords to field values.
 */
hyperfiddle.history2.map__GT_AtomHistory = (function hyperfiddle$history2$map__GT_AtomHistory(G__34808){
var extmap__5338__auto__ = (function (){var G__34827 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34808,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"watches","watches",-273097535),new cljs.core.Keyword(null,"max-size","max-size",-874966132)], 0));
if(cljs.core.record_QMARK_(G__34808)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34827);
} else {
return G__34827;
}
})();
return (new hyperfiddle.history2.AtomHistory(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__34808),new cljs.core.Keyword(null,"watches","watches",-273097535).cljs$core$IFn$_invoke$arity$1(G__34808),new cljs.core.Keyword(null,"max-size","max-size",-874966132).cljs$core$IFn$_invoke$arity$1(G__34808),null,cljs.core.not_empty(extmap__5338__auto__),null));
});

(hyperfiddle.history2.AtomHistory.prototype.hyperfiddle$history2$IHistory$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.history2.AtomHistory.prototype.hyperfiddle$history2$IHistory$navigate_BANG_$arity$2 = (function (this$,route){
var this$__$1 = this;
return hyperfiddle.history2.notify_watches(this$__$1,cljs.core.swap_vals_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1.state,(function (p__34828){
var vec__34829 = p__34828;
var history__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34829,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34829,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(history__$1),this$__$1.max_size)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(history__$1,(1)),route),idx], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(history__$1,(0),(idx + (1))),route),(idx + (1))], null);
}
})));
}));

(hyperfiddle.history2.AtomHistory.prototype.hyperfiddle$history2$IHistory$back_BANG_$arity$1 = (function (this$){
var this$__$1 = this;
return hyperfiddle.history2.notify_watches(this$__$1,cljs.core.swap_vals_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1.state,(function (p__34832){
var vec__34833 = p__34832;
var history__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34833,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34833,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [history__$1,(function (){var x__5083__auto__ = (idx - (1));
var y__5084__auto__ = (0);
return ((x__5083__auto__ > y__5084__auto__) ? x__5083__auto__ : y__5084__auto__);
})()], null);
})));
}));

(hyperfiddle.history2.AtomHistory.prototype.hyperfiddle$history2$IHistory$forward_BANG_$arity$1 = (function (this$){
var this$__$1 = this;
return hyperfiddle.history2.notify_watches(this$__$1,cljs.core.swap_vals_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1.state,(function (p__34836){
var vec__34837 = p__34836;
var history__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34837,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34837,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [history__$1,(function (){var x__5086__auto__ = (idx + (1));
var y__5087__auto__ = (cljs.core.count(history__$1) - (1));
return ((x__5086__auto__ < y__5087__auto__) ? x__5086__auto__ : y__5087__auto__);
})()], null);
})));
}));

(hyperfiddle.history2.AtomHistory.prototype.hyperfiddle$history2$IHistory$replace_state_BANG_$arity$2 = (function (this$,new_state){
var this$__$1 = this;
return cljs.core.reset_BANG_(this$__$1,new_state);
}));
/**
 * Return a new IHistory instance backed by an atom.
 *   Initial history state can be provided with `initial-state`.
 *   Default history size is unbounded and can be constrained to `max-size` elements in a FIFO way.
 *   A negative value or 0 has no effect.
 */
hyperfiddle.history2.atom_history = (function hyperfiddle$history2$atom_history(var_args){
var G__34841 = arguments.length;
switch (G__34841) {
case 0:
return hyperfiddle.history2.atom_history.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return hyperfiddle.history2.atom_history.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hyperfiddle.history2.atom_history.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.history2.atom_history.cljs$core$IFn$_invoke$arity$0 = (function (){
return hyperfiddle.history2.atom_history.cljs$core$IFn$_invoke$arity$2(null,(0));
}));

(hyperfiddle.history2.atom_history.cljs$core$IFn$_invoke$arity$1 = (function (initial_state){
return hyperfiddle.history2.atom_history.cljs$core$IFn$_invoke$arity$2(initial_state,(0));
}));

(hyperfiddle.history2.atom_history.cljs$core$IFn$_invoke$arity$2 = (function (initial_state,max_size){
return hyperfiddle.history2.__GT_AtomHistory(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [initial_state], null),(0)], null)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),max_size);
}));

(hyperfiddle.history2.atom_history.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
hyperfiddle.history2.ProxyHistory = (function (parent,state,__meta,__extmap,__hash){
this.parent = parent;
this.state = state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230748938;
this.cljs$lang$protocol_mask$partition1$ = 253954;
});
(hyperfiddle.history2.ProxyHistory.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5296__auto__,k__5297__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
return this__5296__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5297__auto__,null);
}));

(hyperfiddle.history2.ProxyHistory.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5298__auto__,k34843,else__5299__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
var G__34847 = k34843;
var G__34847__$1 = (((G__34847 instanceof cljs.core.Keyword))?G__34847.fqn:null);
switch (G__34847__$1) {
case "parent":
return self__.parent;

break;
case "state":
return self__.state;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34843,else__5299__auto__);

}
}));

(hyperfiddle.history2.ProxyHistory.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5316__auto__,f__5317__auto__,init__5318__auto__){
var self__ = this;
var this__5316__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5319__auto__,p__34848){
var vec__34849 = p__34848;
var k__5320__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34849,(0),null);
var v__5321__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34849,(1),null);
return (f__5317__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5317__auto__.cljs$core$IFn$_invoke$arity$3(ret__5319__auto__,k__5320__auto__,v__5321__auto__) : f__5317__auto__.call(null,ret__5319__auto__,k__5320__auto__,v__5321__auto__));
}),init__5318__auto__,this__5316__auto____$1);
}));

(hyperfiddle.history2.ProxyHistory.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5311__auto__,writer__5312__auto__,opts__5313__auto__){
var self__ = this;
var this__5311__auto____$1 = this;
var pr_pair__5314__auto__ = (function (keyval__5315__auto__){
return cljs.core.pr_sequential_writer(writer__5312__auto__,cljs.core.pr_writer,""," ","",opts__5313__auto__,keyval__5315__auto__);
});
return cljs.core.pr_sequential_writer(writer__5312__auto__,pr_pair__5314__auto__,"#hyperfiddle.history2.ProxyHistory{",", ","}",opts__5313__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null))], null),self__.__extmap));
}));

(hyperfiddle.history2.ProxyHistory.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34842){
var self__ = this;
var G__34842__$1 = this;
return (new cljs.core.RecordIter((0),G__34842__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"state","state",-1988618099)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(hyperfiddle.history2.ProxyHistory.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5294__auto__){
var self__ = this;
var this__5294__auto____$1 = this;
return self__.__meta;
}));

(hyperfiddle.history2.ProxyHistory.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5291__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
return (new hyperfiddle.history2.ProxyHistory(self__.parent,self__.state,self__.__meta,self__.__extmap,self__.__hash));
}));

(hyperfiddle.history2.ProxyHistory.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5300__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(hyperfiddle.history2.ProxyHistory.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5292__auto__){
var self__ = this;
var this__5292__auto____$1 = this;
var h__5107__auto__ = self__.__hash;
if((!((h__5107__auto__ == null)))){
return h__5107__auto__;
} else {
var h__5107__auto____$1 = (function (coll__5293__auto__){
return (-921410015 ^ cljs.core.hash_unordered_coll(coll__5293__auto__));
})(this__5292__auto____$1);
(self__.__hash = h__5107__auto____$1);

return h__5107__auto____$1;
}
}));

(hyperfiddle.history2.ProxyHistory.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34844,other34845){
var self__ = this;
var this34844__$1 = this;
return (((!((other34845 == null)))) && ((((this34844__$1.constructor === other34845.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34844__$1.parent,other34845.parent)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34844__$1.state,other34845.state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34844__$1.__extmap,other34845.__extmap)))))))));
}));

(hyperfiddle.history2.ProxyHistory.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_(self__.state,newval);
}));

(hyperfiddle.history2.ProxyHistory.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.state,f);
}));

(hyperfiddle.history2.ProxyHistory.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,arg){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.state,f,arg);
}));

(hyperfiddle.history2.ProxyHistory.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,arg1,arg2){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,f,arg1,arg2);
}));

(hyperfiddle.history2.ProxyHistory.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,x,y,args){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.swap_BANG_,self__.state,f,x,y,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
}));

(hyperfiddle.history2.ProxyHistory.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5306__auto__,k__5307__auto__){
var self__ = this;
var this__5306__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"state","state",-1988618099),null], null), null),k__5307__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5306__auto____$1),self__.__meta),k__5307__auto__);
} else {
return (new hyperfiddle.history2.ProxyHistory(self__.parent,self__.state,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5307__auto__)),null));
}
}));

(hyperfiddle.history2.ProxyHistory.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5303__auto__,k34843){
var self__ = this;
var this__5303__auto____$1 = this;
var G__34852 = k34843;
var G__34852__$1 = (((G__34852 instanceof cljs.core.Keyword))?G__34852.fqn:null);
switch (G__34852__$1) {
case "parent":
case "state":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34843);

}
}));

(hyperfiddle.history2.ProxyHistory.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5304__auto__,k__5305__auto__,G__34842){
var self__ = this;
var this__5304__auto____$1 = this;
var pred__34853 = cljs.core.keyword_identical_QMARK_;
var expr__34854 = k__5305__auto__;
if(cljs.core.truth_((pred__34853.cljs$core$IFn$_invoke$arity$2 ? pred__34853.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),expr__34854) : pred__34853.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__34854)))){
return (new hyperfiddle.history2.ProxyHistory(G__34842,self__.state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34853.cljs$core$IFn$_invoke$arity$2 ? pred__34853.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state","state",-1988618099),expr__34854) : pred__34853.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__34854)))){
return (new hyperfiddle.history2.ProxyHistory(self__.parent,G__34842,self__.__meta,self__.__extmap,null));
} else {
return (new hyperfiddle.history2.ProxyHistory(self__.parent,self__.state,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5305__auto__,G__34842),null));
}
}
}));

(hyperfiddle.history2.ProxyHistory.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5309__auto__){
var self__ = this;
var this__5309__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state","state",-1988618099),self__.state,null))], null),self__.__extmap));
}));

(hyperfiddle.history2.ProxyHistory.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,callback){
var self__ = this;
var this$__$1 = this;
cljs.core.add_watch(self__.state,key,callback);

return this$__$1;
}));

(hyperfiddle.history2.ProxyHistory.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (_,key){
var self__ = this;
var ___$1 = this;
return cljs.core.remove_watch(self__.state,key);
}));

(hyperfiddle.history2.ProxyHistory.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5295__auto__,G__34842){
var self__ = this;
var this__5295__auto____$1 = this;
return (new hyperfiddle.history2.ProxyHistory(self__.parent,self__.state,G__34842,self__.__extmap,self__.__hash));
}));

(hyperfiddle.history2.ProxyHistory.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5301__auto__,entry__5302__auto__){
var self__ = this;
var this__5301__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5302__auto__)){
return this__5301__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5302__auto__,(0)),cljs.core._nth(entry__5302__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5301__auto____$1,entry__5302__auto__);
}
}));

(hyperfiddle.history2.ProxyHistory.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.state);
}));

(hyperfiddle.history2.ProxyHistory.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"IHistory","IHistory",-501436262,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"IAtom","IAtom",-1411134312,null)], null))], null);
}));

(hyperfiddle.history2.ProxyHistory.cljs$lang$type = true);

(hyperfiddle.history2.ProxyHistory.cljs$lang$ctorPrSeq = (function (this__5342__auto__){
return (new cljs.core.List(null,"hyperfiddle.history2/ProxyHistory",null,(1),null));
}));

(hyperfiddle.history2.ProxyHistory.cljs$lang$ctorPrWriter = (function (this__5342__auto__,writer__5343__auto__){
return cljs.core._write(writer__5343__auto__,"hyperfiddle.history2/ProxyHistory");
}));

/**
 * Positional factory function for hyperfiddle.history2/ProxyHistory.
 */
hyperfiddle.history2.__GT_ProxyHistory = (function hyperfiddle$history2$__GT_ProxyHistory(parent,state){
return (new hyperfiddle.history2.ProxyHistory(parent,state,null,null,null));
});

/**
 * Factory function for hyperfiddle.history2/ProxyHistory, taking a map of keywords to field values.
 */
hyperfiddle.history2.map__GT_ProxyHistory = (function hyperfiddle$history2$map__GT_ProxyHistory(G__34846){
var extmap__5338__auto__ = (function (){var G__34856 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34846,new cljs.core.Keyword(null,"parent","parent",-878878779),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"state","state",-1988618099)], 0));
if(cljs.core.record_QMARK_(G__34846)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34856);
} else {
return G__34856;
}
})();
return (new hyperfiddle.history2.ProxyHistory(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__34846),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__34846),null,cljs.core.not_empty(extmap__5338__auto__),null));
});

(hyperfiddle.history2.ProxyHistory.prototype.hyperfiddle$history2$IHistory$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.history2.ProxyHistory.prototype.hyperfiddle$history2$IHistory$navigate_BANG_$arity$2 = (function (this$,route){
var this$__$1 = this;
return hyperfiddle.history2.navigate_BANG_(this$__$1.parent,route);
}));

(hyperfiddle.history2.ProxyHistory.prototype.hyperfiddle$history2$IHistory$back_BANG_$arity$1 = (function (this$){
var this$__$1 = this;
return hyperfiddle.history2.back_BANG_(this$__$1.parent);
}));

(hyperfiddle.history2.ProxyHistory.prototype.hyperfiddle$history2$IHistory$forward_BANG_$arity$1 = (function (this$){
var this$__$1 = this;
return hyperfiddle.history2.forward_BANG_(this$__$1.parent);
}));

(hyperfiddle.history2.ProxyHistory.prototype.hyperfiddle$history2$IHistory$replace_state_BANG_$arity$2 = (function (this$,new_state){
var this$__$1 = this;
return cljs.core.reset_BANG_(this$__$1,new_state);
}));
/**
 * Return a new IHistory instance backed by an atom.
 *   History state is stored in an atom.
 *   Navigation is forwarded to the `parent` history.
 *   Initial state is provided with `initial-state`. 
 */
hyperfiddle.history2.proxy_history = (function hyperfiddle$history2$proxy_history(var_args){
var G__34858 = arguments.length;
switch (G__34858) {
case 1:
return hyperfiddle.history2.proxy_history.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hyperfiddle.history2.proxy_history.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.history2.proxy_history.cljs$core$IFn$_invoke$arity$1 = (function (parent){
return hyperfiddle.history2.proxy_history.cljs$core$IFn$_invoke$arity$2(parent,null);
}));

(hyperfiddle.history2.proxy_history.cljs$core$IFn$_invoke$arity$2 = (function (parent,initial_state){
return hyperfiddle.history2.__GT_ProxyHistory(parent,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(initial_state));
}));

(hyperfiddle.history2.proxy_history.cljs$lang$maxFixedArity = 2);

hyperfiddle.history2.history_QMARK_ = (function hyperfiddle$history2$history_QMARK_(h){
var and__4996__auto__ = (((!((h == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === h.hyperfiddle$history2$IHistory$))))?true:(((!h.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(hyperfiddle.history2.IHistory,h):false)):cljs.core.native_satisfies_QMARK_(hyperfiddle.history2.IHistory,h));
if(and__4996__auto__){
return (h instanceof cljs.core.IAtom);
} else {
return and__4996__auto__;
}
});
hyperfiddle.history2.history = hyperfiddle.electric.impl.lang.electric_only;

hyperfiddle.history2.history_hf_client_server = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"noutput","noutput",-1074289279),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"ninput","ninput",-424514295),new cljs.core.Keyword(null,"nvariable","nvariable",871604298),new cljs.core.Keyword(null,"nsource","nsource",-745810741),new cljs.core.Keyword(null,"ntarget","ntarget",1744575182),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"var-name","var-name",-574747624),new cljs.core.Keyword(null,"get-used-nodes","get-used-nodes",-687832967),new cljs.core.Keyword(null,"nconstant","nconstant",1375885721)],[(0),(function (){return (function (history_frame,history_vars,history_env){
var history_expr_0 = hyperfiddle.electric.impl.runtime.make_input(history_frame,cljs.core.PersistentVector.EMPTY);
return null;
});
})(),(0),(0),(0),(0),cljs.core.PersistentVector.EMPTY,new cljs.core.Symbol("hyperfiddle.history2","history_hf_client_server","hyperfiddle.history2/history_hf_client_server",16287252,null),(function (){
return cljs.core.PersistentVector.EMPTY;
}),(0)]);

hyperfiddle.history2.history_hf_client_client = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"noutput","noutput",-1074289279),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"ninput","ninput",-424514295),new cljs.core.Keyword(null,"nvariable","nvariable",871604298),new cljs.core.Keyword(null,"nsource","nsource",-745810741),new cljs.core.Keyword(null,"ntarget","ntarget",1744575182),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"var-name","var-name",-574747624),new cljs.core.Keyword(null,"get-used-nodes","get-used-nodes",-687832967),new cljs.core.Keyword(null,"nconstant","nconstant",1375885721)],[(0),(function (){return (function (history_frame,history_vars,history_env){
return hyperfiddle.electric.impl.runtime.pure(null);
});
})(),(0),(0),(0),(0),cljs.core.PersistentVector.EMPTY,new cljs.core.Symbol("hyperfiddle.history2","history_hf_client_client","hyperfiddle.history2/history_hf_client_client",1174173276,null),(function (){
return cljs.core.PersistentVector.EMPTY;
}),(0)]);
hyperfiddle.history2.absolute = (function hyperfiddle$history2$absolute(path){
if(typeof path === 'string'){
} else {
throw (new Error("Assert failed: (string? path)"));
}

return ["/",clojure.string.replace_first(path,/^\/+/,"")].join('');
});
hyperfiddle.history2.throttler = (function hyperfiddle$history2$throttler(rate_ms){
var _BANG_nextf = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var _BANG_running = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function hyperfiddle$history2$throttler_$_rec(f){
if(cljs.core.truth_(cljs.core.deref(_BANG_running))){
return cljs.core.reset_BANG_(_BANG_nextf,f);
} else {
cljs.core.reset_BANG_(_BANG_running,true);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

return window.setTimeout((function (){
cljs.core.reset_BANG_(_BANG_running,false);

var temp__5816__auto__ = cljs.core.deref(_BANG_nextf);
if(cljs.core.truth_(temp__5816__auto__)){
var nextf = temp__5816__auto__;
cljs.core.reset_BANG_(_BANG_nextf,null);

return hyperfiddle$history2$throttler_$_rec(nextf);
} else {
return null;
}
}),rate_ms);
}
});
});

var throttle_34940 = hyperfiddle.history2.throttler((300));
hyperfiddle.history2.replaceState_BANG_ = (function hyperfiddle$history2$replaceState_BANG_(path){
return throttle_34940((function (){
return window.history.replaceState(window.history.state,"",hyperfiddle.history2.absolute(path));
}));
});

hyperfiddle.history2.history_entry_uid = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.swap_BANG_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((Date.now() * (100))),cljs.core.inc);

hyperfiddle.history2.html5_pushState_BANG_ = (function hyperfiddle$history2$html5_pushState_BANG_(next_position,path){
return window.history.pushState(({"position": next_position}),"",hyperfiddle.history2.absolute(path));
});

hyperfiddle.history2.html5_back_BANG_ = (function hyperfiddle$history2$html5_back_BANG_(){
return window.history.back();
});

hyperfiddle.history2.html5_forward_BANG_ = (function hyperfiddle$history2$html5_forward_BANG_(){
return window.history.forward();
});

hyperfiddle.history2.html5_path = (function hyperfiddle$history2$html5_path(){
var loc = window.location;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(loc.pathname),cljs.core.str.cljs$core$IFn$_invoke$arity$1(loc.search),cljs.core.str.cljs$core$IFn$_invoke$arity$1(loc.hash)].join('');
});

hyperfiddle.history2.index_of = (function hyperfiddle$history2$index_of(xs,val){
var i = (0);
var G__34866 = xs;
var vec__34867 = G__34866;
var seq__34868 = cljs.core.seq(vec__34867);
var first__34869 = cljs.core.first(seq__34868);
var seq__34868__$1 = cljs.core.next(seq__34868);
var x = first__34869;
var xs__$1 = seq__34868__$1;
var i__$1 = i;
var G__34866__$1 = G__34866;
while(true){
var i__$2 = i__$1;
var vec__34870 = G__34866__$1;
var seq__34871 = cljs.core.seq(vec__34870);
var first__34872 = cljs.core.first(seq__34871);
var seq__34871__$1 = cljs.core.next(seq__34871);
var x__$1 = first__34872;
var xs__$2 = seq__34871__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,val)){
return i__$2;
} else {
if(cljs.core.seq(xs__$2)){
var G__34941 = (i__$2 + (1));
var G__34942 = xs__$2;
i__$1 = G__34941;
G__34866__$1 = G__34942;
continue;
} else {
return (-1);

}
}
break;
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {hyperfiddle.history2.IHistory}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
hyperfiddle.history2.HTML5History = (function (_BANG_state,_BANG_stack,_BANG_position,__meta,__extmap,__hash){
this._BANG_state = _BANG_state;
this._BANG_stack = _BANG_stack;
this._BANG_position = _BANG_position;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230748938;
this.cljs$lang$protocol_mask$partition1$ = 253954;
});
(hyperfiddle.history2.HTML5History.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5296__auto__,k__5297__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
return this__5296__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5297__auto__,null);
}));

(hyperfiddle.history2.HTML5History.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5298__auto__,k34874,else__5299__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
var G__34878 = k34874;
var G__34878__$1 = (((G__34878 instanceof cljs.core.Keyword))?G__34878.fqn:null);
switch (G__34878__$1) {
case "!state":
return self__._BANG_state;

break;
case "!stack":
return self__._BANG_stack;

break;
case "!position":
return self__._BANG_position;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34874,else__5299__auto__);

}
}));

(hyperfiddle.history2.HTML5History.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5316__auto__,f__5317__auto__,init__5318__auto__){
var self__ = this;
var this__5316__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5319__auto__,p__34879){
var vec__34880 = p__34879;
var k__5320__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34880,(0),null);
var v__5321__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34880,(1),null);
return (f__5317__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5317__auto__.cljs$core$IFn$_invoke$arity$3(ret__5319__auto__,k__5320__auto__,v__5321__auto__) : f__5317__auto__.call(null,ret__5319__auto__,k__5320__auto__,v__5321__auto__));
}),init__5318__auto__,this__5316__auto____$1);
}));

(hyperfiddle.history2.HTML5History.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5311__auto__,writer__5312__auto__,opts__5313__auto__){
var self__ = this;
var this__5311__auto____$1 = this;
var pr_pair__5314__auto__ = (function (keyval__5315__auto__){
return cljs.core.pr_sequential_writer(writer__5312__auto__,cljs.core.pr_writer,""," ","",opts__5313__auto__,keyval__5315__auto__);
});
return cljs.core.pr_sequential_writer(writer__5312__auto__,pr_pair__5314__auto__,"#hyperfiddle.history2.HTML5History{",", ","}",opts__5313__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"!state","!state",1311412932),self__._BANG_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"!stack","!stack",-1500239639),self__._BANG_stack],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"!position","!position",-1373918838),self__._BANG_position],null))], null),self__.__extmap));
}));

(hyperfiddle.history2.HTML5History.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34873){
var self__ = this;
var G__34873__$1 = this;
return (new cljs.core.RecordIter((0),G__34873__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!state","!state",1311412932),new cljs.core.Keyword(null,"!stack","!stack",-1500239639),new cljs.core.Keyword(null,"!position","!position",-1373918838)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(hyperfiddle.history2.HTML5History.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5294__auto__){
var self__ = this;
var this__5294__auto____$1 = this;
return self__.__meta;
}));

(hyperfiddle.history2.HTML5History.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5291__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
return (new hyperfiddle.history2.HTML5History(self__._BANG_state,self__._BANG_stack,self__._BANG_position,self__.__meta,self__.__extmap,self__.__hash));
}));

(hyperfiddle.history2.HTML5History.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5300__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(hyperfiddle.history2.HTML5History.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5292__auto__){
var self__ = this;
var this__5292__auto____$1 = this;
var h__5107__auto__ = self__.__hash;
if((!((h__5107__auto__ == null)))){
return h__5107__auto__;
} else {
var h__5107__auto____$1 = (function (coll__5293__auto__){
return (-775541235 ^ cljs.core.hash_unordered_coll(coll__5293__auto__));
})(this__5292__auto____$1);
(self__.__hash = h__5107__auto____$1);

return h__5107__auto____$1;
}
}));

(hyperfiddle.history2.HTML5History.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34875,other34876){
var self__ = this;
var this34875__$1 = this;
return (((!((other34876 == null)))) && ((((this34875__$1.constructor === other34876.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34875__$1._BANG_state,other34876._BANG_state)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34875__$1._BANG_stack,other34876._BANG_stack)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34875__$1._BANG_position,other34876._BANG_position)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34875__$1.__extmap,other34876.__extmap)))))))))));
}));

(hyperfiddle.history2.HTML5History.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$ISwap$_swap_BANG_$arity$2(null,cljs.core.constantly(newval));
}));

(hyperfiddle.history2.HTML5History.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
var vec__34883 = cljs.core.swap_vals_BANG_.cljs$core$IFn$_invoke$arity$2(self__._BANG_state,f);
var _oldval = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34883,(0),null);
var newval = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34883,(1),null);
hyperfiddle.history2.replaceState_BANG_(newval);

return newval;
}));

(hyperfiddle.history2.HTML5History.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,arg){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$ISwap$_swap_BANG_$arity$2(null,(function (p1__34860_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__34860_SHARP_,arg) : f.call(null,p1__34860_SHARP_,arg));
}));
}));

(hyperfiddle.history2.HTML5History.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,arg1,arg2){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$ISwap$_swap_BANG_$arity$2(null,(function (p1__34861_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(p1__34861_SHARP_,arg1,arg2) : f.call(null,p1__34861_SHARP_,arg1,arg2));
}));
}));

(hyperfiddle.history2.HTML5History.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,x,y,args){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$ISwap$_swap_BANG_$arity$2(null,(function (p1__34862_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,p1__34862_SHARP_,x,y,args);
}));
}));

(hyperfiddle.history2.HTML5History.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5306__auto__,k__5307__auto__){
var self__ = this;
var this__5306__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"!state","!state",1311412932),null,new cljs.core.Keyword(null,"!stack","!stack",-1500239639),null,new cljs.core.Keyword(null,"!position","!position",-1373918838),null], null), null),k__5307__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5306__auto____$1),self__.__meta),k__5307__auto__);
} else {
return (new hyperfiddle.history2.HTML5History(self__._BANG_state,self__._BANG_stack,self__._BANG_position,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5307__auto__)),null));
}
}));

(hyperfiddle.history2.HTML5History.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5303__auto__,k34874){
var self__ = this;
var this__5303__auto____$1 = this;
var G__34886 = k34874;
var G__34886__$1 = (((G__34886 instanceof cljs.core.Keyword))?G__34886.fqn:null);
switch (G__34886__$1) {
case "!state":
case "!stack":
case "!position":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34874);

}
}));

(hyperfiddle.history2.HTML5History.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5304__auto__,k__5305__auto__,G__34873){
var self__ = this;
var this__5304__auto____$1 = this;
var pred__34887 = cljs.core.keyword_identical_QMARK_;
var expr__34888 = k__5305__auto__;
if(cljs.core.truth_((pred__34887.cljs$core$IFn$_invoke$arity$2 ? pred__34887.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"!state","!state",1311412932),expr__34888) : pred__34887.call(null,new cljs.core.Keyword(null,"!state","!state",1311412932),expr__34888)))){
return (new hyperfiddle.history2.HTML5History(G__34873,self__._BANG_stack,self__._BANG_position,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34887.cljs$core$IFn$_invoke$arity$2 ? pred__34887.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"!stack","!stack",-1500239639),expr__34888) : pred__34887.call(null,new cljs.core.Keyword(null,"!stack","!stack",-1500239639),expr__34888)))){
return (new hyperfiddle.history2.HTML5History(self__._BANG_state,G__34873,self__._BANG_position,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34887.cljs$core$IFn$_invoke$arity$2 ? pred__34887.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"!position","!position",-1373918838),expr__34888) : pred__34887.call(null,new cljs.core.Keyword(null,"!position","!position",-1373918838),expr__34888)))){
return (new hyperfiddle.history2.HTML5History(self__._BANG_state,self__._BANG_stack,G__34873,self__.__meta,self__.__extmap,null));
} else {
return (new hyperfiddle.history2.HTML5History(self__._BANG_state,self__._BANG_stack,self__._BANG_position,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5305__auto__,G__34873),null));
}
}
}
}));

(hyperfiddle.history2.HTML5History.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5309__auto__){
var self__ = this;
var this__5309__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"!state","!state",1311412932),self__._BANG_state,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"!stack","!stack",-1500239639),self__._BANG_stack,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"!position","!position",-1373918838),self__._BANG_position,null))], null),self__.__extmap));
}));

(hyperfiddle.history2.HTML5History.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,callback){
var self__ = this;
var this$__$1 = this;
cljs.core.add_watch(self__._BANG_state,key,callback);

return this$__$1;
}));

(hyperfiddle.history2.HTML5History.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (_,key){
var self__ = this;
var ___$1 = this;
return cljs.core.remove_watch(self__._BANG_state,key);
}));

(hyperfiddle.history2.HTML5History.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5295__auto__,G__34873){
var self__ = this;
var this__5295__auto____$1 = this;
return (new hyperfiddle.history2.HTML5History(self__._BANG_state,self__._BANG_stack,self__._BANG_position,G__34873,self__.__extmap,self__.__hash));
}));

(hyperfiddle.history2.HTML5History.prototype.hyperfiddle$history2$IHistory$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.history2.HTML5History.prototype.hyperfiddle$history2$IHistory$navigate_BANG_$arity$2 = (function (this$,route){
var self__ = this;
var this$__$1 = this;
var prev_position_34957 = cljs.core.deref(self__._BANG_position);
var next_position_34958 = hyperfiddle.history2.history_entry_uid();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__._BANG_stack,(function (stack){
var index = hyperfiddle.history2.index_of(stack,prev_position_34957);
var G__34890 = index;
switch (G__34890) {
case (-1):
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,next_position_34958);

break;
default:
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(stack,(0),(index + (1))),next_position_34958);

}
}));

cljs.core.reset_BANG_(self__._BANG_position,next_position_34958);

hyperfiddle.history2.html5_pushState_BANG_(next_position_34958,route);

return cljs.core.reset_BANG_(this$__$1._BANG_state,route);
}));

(hyperfiddle.history2.HTML5History.prototype.hyperfiddle$history2$IHistory$back_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
hyperfiddle.history2.html5_back_BANG_();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__._BANG_position,(function (pos,stack){
var index = hyperfiddle.history2.index_of(stack,pos);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),index)){
return pos;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(stack,(index - (1)));
}
}),cljs.core.deref(self__._BANG_stack));

return cljs.core.reset_BANG_(this$__$1._BANG_state,hyperfiddle.history2.html5_path());
}));

(hyperfiddle.history2.HTML5History.prototype.hyperfiddle$history2$IHistory$forward_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
hyperfiddle.history2.html5_forward_BANG_();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__._BANG_position,(function (pos,stack){
var index = hyperfiddle.history2.index_of(stack,pos);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,(cljs.core.count(stack) - (1)))){
return pos;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(stack,(index + (1)));
}
}),cljs.core.deref(self__._BANG_stack));

return cljs.core.reset_BANG_(this$__$1._BANG_state,hyperfiddle.history2.html5_path());
}));

(hyperfiddle.history2.HTML5History.prototype.hyperfiddle$history2$IHistory$replace_state_BANG_$arity$2 = (function (this$,new_state){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_(this$__$1,new_state);
}));

(hyperfiddle.history2.HTML5History.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5301__auto__,entry__5302__auto__){
var self__ = this;
var this__5301__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5302__auto__)){
return this__5301__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5302__auto__,(0)),cljs.core._nth(entry__5302__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5301__auto____$1,entry__5302__auto__);
}
}));

(hyperfiddle.history2.HTML5History.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__._BANG_state);
}));

(hyperfiddle.history2.HTML5History.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"!state","!state",-1343022837,null),new cljs.core.Symbol(null,"!stack","!stack",140291888,null),new cljs.core.Symbol(null,"!position","!position",266612689,null)], null);
}));

(hyperfiddle.history2.HTML5History.cljs$lang$type = true);

(hyperfiddle.history2.HTML5History.cljs$lang$ctorPrSeq = (function (this__5342__auto__){
return (new cljs.core.List(null,"hyperfiddle.history2/HTML5History",null,(1),null));
}));

(hyperfiddle.history2.HTML5History.cljs$lang$ctorPrWriter = (function (this__5342__auto__,writer__5343__auto__){
return cljs.core._write(writer__5343__auto__,"hyperfiddle.history2/HTML5History");
}));

/**
 * Positional factory function for hyperfiddle.history2/HTML5History.
 */
hyperfiddle.history2.__GT_HTML5History = (function hyperfiddle$history2$__GT_HTML5History(_BANG_state,_BANG_stack,_BANG_position){
return (new hyperfiddle.history2.HTML5History(_BANG_state,_BANG_stack,_BANG_position,null,null,null));
});

/**
 * Factory function for hyperfiddle.history2/HTML5History, taking a map of keywords to field values.
 */
hyperfiddle.history2.map__GT_HTML5History = (function hyperfiddle$history2$map__GT_HTML5History(G__34877){
var extmap__5338__auto__ = (function (){var G__34891 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34877,new cljs.core.Keyword(null,"!state","!state",1311412932),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"!stack","!stack",-1500239639),new cljs.core.Keyword(null,"!position","!position",-1373918838)], 0));
if(cljs.core.record_QMARK_(G__34877)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34891);
} else {
return G__34891;
}
})();
return (new hyperfiddle.history2.HTML5History(new cljs.core.Keyword(null,"!state","!state",1311412932).cljs$core$IFn$_invoke$arity$1(G__34877),new cljs.core.Keyword(null,"!stack","!stack",-1500239639).cljs$core$IFn$_invoke$arity$1(G__34877),new cljs.core.Keyword(null,"!position","!position",-1373918838).cljs$core$IFn$_invoke$arity$1(G__34877),null,cljs.core.not_empty(extmap__5338__auto__),null));
});


hyperfiddle.history2.html5_history = (function hyperfiddle$history2$html5_history(){
var position = (function (){var or__4998__auto__ = (function (){var temp__5816__auto__ = window.history.state;
if(cljs.core.truth_(temp__5816__auto__)){
var state = temp__5816__auto__;
return state.position;
} else {
return null;
}
})();
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return hyperfiddle.history2.history_entry_uid();
}
})();
var stack = (function (){var temp__5814__auto__ = window.sessionStorage.getItem("hyperfiddle_history_stack");
if(cljs.core.truth_(temp__5814__auto__)){
var array = temp__5814__auto__;
return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(array);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [position], null);
}
})();
var _BANG_position = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(position);
var _BANG_stack = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(stack);
window.history.replaceState(({"position": position}),null);

cljs.core.add_watch(_BANG_stack,new cljs.core.Keyword("hyperfiddle.history2","stack","hyperfiddle.history2/stack",337455282),(function (_,___$1,___$2,stack__$1){
return window.sessionStorage.setItem("hyperfiddle_history_stack",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stack__$1], 0)));
}));

return hyperfiddle.history2.__GT_HTML5History(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(hyperfiddle.history2.html5_path()),_BANG_stack,_BANG_position);
});

hyperfiddle.history2._html5_history_get_state = (function hyperfiddle$history2$_html5_history_get_state(this$){
return this$._BANG_state;
});

hyperfiddle.history2.nav_delta = (function hyperfiddle$history2$nav_delta(stack,prev_position,curr_position){
return (hyperfiddle.history2.index_of(stack,curr_position) - hyperfiddle.history2.index_of(stack,prev_position));
});

//# sourceMappingURL=hyperfiddle.history2.js.map
