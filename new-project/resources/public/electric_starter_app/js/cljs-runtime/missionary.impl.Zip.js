goog.provide('missionary.impl.Zip');


/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
missionary.impl.Zip.Process = (function (combinator,notifier,flusher,iterators,results,pending){
this.combinator = combinator;
this.notifier = notifier;
this.flusher = flusher;
this.iterators = iterators;
this.results = results;
this.pending = pending;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Zip.Process.prototype.call = (function (unused__18786__auto__){
var self__ = this;
var self__ = this;
var G__45474 = (arguments.length - (1));
switch (G__45474) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Zip.Process.prototype.apply = (function (self__,args45472){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args45472)));
}));

(missionary.impl.Zip.Process.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var z = this;
return (missionary.impl.Zip.cancel.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Zip.cancel.cljs$core$IFn$_invoke$arity$1(z) : missionary.impl.Zip.cancel.call(null,z));
}));

(missionary.impl.Zip.Process.prototype.cljs$core$IDeref$_deref$arity$1 = (function (z){
var self__ = this;
var z__$1 = this;
return (missionary.impl.Zip.transfer.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Zip.transfer.cljs$core$IFn$_invoke$arity$1(z__$1) : missionary.impl.Zip.transfer.call(null,z__$1));
}));

(missionary.impl.Zip.Process.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"combinator","combinator",-746639828,null),new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"flusher","flusher",1361929109,null),new cljs.core.Symbol(null,"iterators","iterators",58622696,null),new cljs.core.Symbol(null,"results","results",506361414,null),cljs.core.with_meta(new cljs.core.Symbol(null,"pending","pending",1420494800,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null))], null);
}));

(missionary.impl.Zip.Process.cljs$lang$type = true);

(missionary.impl.Zip.Process.cljs$lang$ctorStr = "missionary.impl.Zip/Process");

(missionary.impl.Zip.Process.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"missionary.impl.Zip/Process");
}));

/**
 * Positional factory function for missionary.impl.Zip/Process.
 */
missionary.impl.Zip.__GT_Process = (function missionary$impl$Zip$__GT_Process(combinator,notifier,flusher,iterators,results,pending){
return (new missionary.impl.Zip.Process(combinator,notifier,flusher,iterators,results,pending));
});

missionary.impl.Zip.cancel = (function missionary$impl$Zip$cancel(z){
var its = z.iterators;
var n__5589__auto__ = its.length;
var i = (0);
while(true){
if((i < n__5589__auto__)){
var temp__5820__auto___45516 = (its[i]);
if((temp__5820__auto___45516 == null)){
} else {
var it_45517 = temp__5820__auto___45516;
(it_45517.cljs$core$IFn$_invoke$arity$0 ? it_45517.cljs$core$IFn$_invoke$arity$0() : it_45517.call(null));
}

var G__45518 = (i + (1));
i = G__45518;
continue;
} else {
return null;
}
break;
}
});
missionary.impl.Zip.transfer = (function missionary$impl$Zip$transfer(z){
var its = z.iterators;
var res = z.results;
try{(z.pending = (z.pending - (1)));

var n__5589__auto___45520 = its.length;
var i_45521 = (0);
while(true){
if((i_45521 < n__5589__auto___45520)){
(z.pending = (z.pending + (1)));

(res[i_45521] = cljs.core.deref((its[i_45521])));

var G__45522 = (i_45521 + (1));
i_45521 = G__45522;
continue;
} else {
}
break;
}

return z.combinator.apply(null,res);
}catch (e45494){var e = e45494;
(z.notifier = z.flusher);

throw e;
}finally {(z.pending = (z.pending + (1)));

if((z.pending === (0))){
var fexpr__45492_45523 = z.notifier;
(fexpr__45492_45523.cljs$core$IFn$_invoke$arity$0 ? fexpr__45492_45523.cljs$core$IFn$_invoke$arity$0() : fexpr__45492_45523.call(null));
} else {
}

if((z.notifier === z.flusher)){
missionary.impl.Zip.cancel(z);
} else {
}
}});
missionary.impl.Zip.run = (function missionary$impl$Zip$run(f,fs,n,t){
var c = cljs.core.count(fs);
var i = cljs.core.iter(fs);
var z = missionary.impl.Zip.__GT_Process(f,n,null,cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(c),cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(c),(0));
(z.flusher = (function (){
var its = z.iterators;
var cnt = its.length;
while(true){
var flushed = (function (){var i__$1 = (0);
var f__$1 = (0);
while(true){
if((i__$1 < cnt)){
var G__45524 = (i__$1 + (1));
var G__45525 = (function (){var temp__5818__auto__ = (its[i__$1]);
if((temp__5818__auto__ == null)){
return f__$1;
} else {
var it = temp__5818__auto__;
try{cljs.core.deref(it);
}catch (e45502){var __45526 = e45502;
}
return (f__$1 + (1));
}
})();
i__$1 = G__45524;
f__$1 = G__45525;
continue;
} else {
return f__$1;
}
break;
}
})();
if((flushed === (0))){
return (t.cljs$core$IFn$_invoke$arity$0 ? t.cljs$core$IFn$_invoke$arity$0() : t.call(null));
} else {
if(((z.pending = (z.pending + flushed)) === (0))){
continue;
} else {
return null;
}
}
break;
}
}));

var index_45528 = (0);
while(true){
(z.iterators[index_45528] = (function (){var G__45506 = ((function (index_45528,c,i,z){
return (function (){
var p = (z.pending - (1));
(z.pending = p);

if((p === (0))){
var fexpr__45508 = z.notifier;
return (fexpr__45508.cljs$core$IFn$_invoke$arity$0 ? fexpr__45508.cljs$core$IFn$_invoke$arity$0() : fexpr__45508.call(null));
} else {
return null;
}
});})(index_45528,c,i,z))
;
var G__45507 = ((function (index_45528,G__45506,c,i,z){
return (function (){
(z.iterators[index_45528] = null);

(z.notifier = z.flusher);

var p = (z.pending = (z.pending - (1)));
if((p < (0))){
return null;
} else {
missionary.impl.Zip.cancel(z);

if((p === (0))){
var fexpr__45510 = z.notifier;
return (fexpr__45510.cljs$core$IFn$_invoke$arity$0 ? fexpr__45510.cljs$core$IFn$_invoke$arity$0() : fexpr__45510.call(null));
} else {
return null;
}
}
});})(index_45528,G__45506,c,i,z))
;
var fexpr__45505 = i.next();
return (fexpr__45505.cljs$core$IFn$_invoke$arity$2 ? fexpr__45505.cljs$core$IFn$_invoke$arity$2(G__45506,G__45507) : fexpr__45505.call(null,G__45506,G__45507));
})());

if(cljs.core.truth_(i.hasNext())){
var G__45529 = (index_45528 + (1));
index_45528 = G__45529;
continue;
} else {
}
break;
}

if(((z.pending = (z.pending + c)) === (0))){
var fexpr__45511_45530 = z.notifier;
(fexpr__45511_45530.cljs$core$IFn$_invoke$arity$0 ? fexpr__45511_45530.cljs$core$IFn$_invoke$arity$0() : fexpr__45511_45530.call(null));
} else {
}

return z;
});

//# sourceMappingURL=missionary.impl.Zip.js.map
