goog.provide('missionary.impl.Sample');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
missionary.impl.Sample.Process = (function (combinator,notifier,terminator,args,inputs,busy,done,alive){
this.combinator = combinator;
this.notifier = notifier;
this.terminator = terminator;
this.args = args;
this.inputs = inputs;
this.busy = busy;
this.done = done;
this.alive = alive;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Sample.Process.prototype.call = (function (unused__18786__auto__){
var self__ = this;
var self__ = this;
var G__45009 = (arguments.length - (1));
switch (G__45009) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Sample.Process.prototype.apply = (function (self__,args45008){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args45008)));
}));

(missionary.impl.Sample.Process.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
var fexpr__45011 = (self__.inputs[(self__.inputs.length - (1))]);
return (fexpr__45011.cljs$core$IFn$_invoke$arity$0 ? fexpr__45011.cljs$core$IFn$_invoke$arity$0() : fexpr__45011.call(null));
}));

(missionary.impl.Sample.Process.prototype.cljs$core$IDeref$_deref$arity$1 = (function (p){
var self__ = this;
var p__$1 = this;
return (missionary.impl.Sample.transfer.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Sample.transfer.cljs$core$IFn$_invoke$arity$1(p__$1) : missionary.impl.Sample.transfer.call(null,p__$1));
}));

(missionary.impl.Sample.Process.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"combinator","combinator",-746639828,null),new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),cljs.core.with_meta(new cljs.core.Symbol(null,"busy","busy",1312244726,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"done","done",750687339,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"alive","alive",-1229505839,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null))], null);
}));

(missionary.impl.Sample.Process.cljs$lang$type = true);

(missionary.impl.Sample.Process.cljs$lang$ctorStr = "missionary.impl.Sample/Process");

(missionary.impl.Sample.Process.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"missionary.impl.Sample/Process");
}));

/**
 * Positional factory function for missionary.impl.Sample/Process.
 */
missionary.impl.Sample.__GT_Process = (function missionary$impl$Sample$__GT_Process(combinator,notifier,terminator,args,inputs,busy,done,alive){
return (new missionary.impl.Sample.Process(combinator,notifier,terminator,args,inputs,busy,done,alive));
});

missionary.impl.Sample.ready = (function missionary$impl$Sample$ready(ps){
var args = ps.args;
var inputs = ps.inputs;
var sampled = (inputs.length - (1));
var cb = null;
while(true){
if(cljs.core.truth_((ps.busy = cljs.core.not(ps.busy)))){
if(cljs.core.truth_(ps.done)){
var n__5589__auto___45032 = sampled;
var i_45033 = (0);
while(true){
if((i_45033 < n__5589__auto___45032)){
var input_45034 = (inputs[i_45033]);
(input_45034.cljs$core$IFn$_invoke$arity$0 ? input_45034.cljs$core$IFn$_invoke$arity$0() : input_45034.call(null));

if(((args[i_45033]) === args)){
try{cljs.core.deref(input_45034);
}catch (e45014){var __45035 = e45014;
}} else {
(args[i_45033] = args);
}

var G__45036 = (i_45033 + (1));
i_45033 = G__45036;
continue;
} else {
}
break;
}

if(((ps.alive = (ps.alive - (1))) === (0))){
return ps.terminator;
} else {
return null;
}
} else {
if(((args[sampled]) === args)){
try{cljs.core.deref((inputs[sampled]));
}catch (e45015){var __45037 = e45015;
}
var G__45038 = cb;
cb = G__45038;
continue;
} else {
return ps.notifier;
}
}
} else {
return cb;
}
break;
}
});
missionary.impl.Sample.transfer = (function missionary$impl$Sample$transfer(ps){
var c = ps.combinator;
var args = ps.args;
var inputs = ps.inputs;
var sampled = (inputs.length - (1));
var sampler = (inputs[sampled]);
var x = (function (){try{try{if((c == null)){
throw (new Error("Undefined continuous flow."));
} else {
}

var n__5589__auto___45039 = sampled;
var i_45040 = (0);
while(true){
if((i_45040 < n__5589__auto___45039)){
if(((args[i_45040]) === args)){
var input_45041 = (inputs[i_45040]);
while(true){
(args[i_45040] = null);

var x_45042 = cljs.core.deref(input_45041);
if(((args[i_45040]) === args)){
continue;
} else {
(args[i_45040] = x_45042);
}
break;
}
} else {
}

var G__45043 = (i_45040 + (1));
i_45040 = G__45043;
continue;
} else {
}
break;
}
}catch (e45017){var e_45044 = e45017;
try{cljs.core.deref(sampler);
}catch (e45018){var __45045 = e45018;
}
throw e_45044;
}
(args[sampled] = cljs.core.deref(sampler));

return c.apply(null,args);
}catch (e45016){var e = e45016;
(ps.notifier = null);

(sampler.cljs$core$IFn$_invoke$arity$0 ? sampler.cljs$core$IFn$_invoke$arity$0() : sampler.call(null));

(args[sampled] = args);

return e;
}})();
var temp__5820__auto___45046 = missionary.impl.Sample.ready(ps);
if((temp__5820__auto___45046 == null)){
} else {
var cb_45047 = temp__5820__auto___45046;
(cb_45047.cljs$core$IFn$_invoke$arity$0 ? cb_45047.cljs$core$IFn$_invoke$arity$0() : cb_45047.call(null));
}

if((ps.notifier == null)){
throw x;
} else {
return x;
}
});
missionary.impl.Sample.dirty = (function missionary$impl$Sample$dirty(p,i){
var args = p.args;
if(((args[i]) === args)){
try{return cljs.core.deref((p.inputs[i]));
}catch (e45021){var _ = e45021;
return null;
}} else {
return (args[i] = args);
}
});
missionary.impl.Sample.run = (function missionary$impl$Sample$run(c,f,fs,n,t){
var it = cljs.core.iter(fs);
var arity = (cljs.core.count(fs) + (1));
var args = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(arity);
var inputs = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(arity);
var ps = missionary.impl.Sample.__GT_Process(c,n,t,args,inputs,false,false,arity);
var done = (function (){
if(((ps.alive = (ps.alive - (1))) === (0))){
var fexpr__45023 = ps.terminator;
return (fexpr__45023.cljs$core$IFn$_invoke$arity$0 ? fexpr__45023.cljs$core$IFn$_invoke$arity$0() : fexpr__45023.call(null));
} else {
return null;
}
});
var index_45048 = (0);
var flow_45049 = f;
while(true){
if(cljs.core.truth_(it.hasNext())){
(inputs[index_45048] = (function (){var G__45025 = ((function (index_45048,flow_45049,it,arity,args,inputs,ps,done){
return (function (){
return missionary.impl.Sample.dirty(ps,index_45048);
});})(index_45048,flow_45049,it,arity,args,inputs,ps,done))
;
var G__45026 = done;
return (flow_45049.cljs$core$IFn$_invoke$arity$2 ? flow_45049.cljs$core$IFn$_invoke$arity$2(G__45025,G__45026) : flow_45049.call(null,G__45025,G__45026));
})());

if(((args[index_45048]) == null)){
(ps.combinator = null);
} else {
}

var G__45050 = (index_45048 + (1));
var G__45051 = it.next();
index_45048 = G__45050;
flow_45049 = G__45051;
continue;
} else {
(inputs[index_45048] = (function (){var G__45027 = ((function (index_45048,flow_45049,it,arity,args,inputs,ps,done){
return (function (){
var temp__5820__auto__ = missionary.impl.Sample.ready(ps);
if((temp__5820__auto__ == null)){
return null;
} else {
var cb = temp__5820__auto__;
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
}
});})(index_45048,flow_45049,it,arity,args,inputs,ps,done))
;
var G__45028 = ((function (index_45048,flow_45049,G__45027,it,arity,args,inputs,ps,done){
return (function (){
(ps.done = true);

var temp__5820__auto__ = missionary.impl.Sample.ready(ps);
if((temp__5820__auto__ == null)){
return null;
} else {
var cb = temp__5820__auto__;
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
}
});})(index_45048,flow_45049,G__45027,it,arity,args,inputs,ps,done))
;
return (flow_45049.cljs$core$IFn$_invoke$arity$2 ? flow_45049.cljs$core$IFn$_invoke$arity$2(G__45027,G__45028) : flow_45049.call(null,G__45027,G__45028));
})());
}
break;
}

return ps;
});

//# sourceMappingURL=missionary.impl.Sample.js.map
