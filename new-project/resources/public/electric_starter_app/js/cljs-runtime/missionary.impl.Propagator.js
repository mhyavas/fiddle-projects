goog.provide('missionary.impl.Propagator');




/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IComparable}
*/
missionary.impl.Propagator.Publisher = (function (ranks,initp,inits,perform,subscribe,lcb,rcb,tick,accept,reject,held,children,effect,current,child,sibling,prop){
this.ranks = ranks;
this.initp = initp;
this.inits = inits;
this.perform = perform;
this.subscribe = subscribe;
this.lcb = lcb;
this.rcb = rcb;
this.tick = tick;
this.accept = accept;
this.reject = reject;
this.held = held;
this.children = children;
this.effect = effect;
this.current = current;
this.child = child;
this.sibling = sibling;
this.prop = prop;
this.cljs$lang$protocol_mask$partition0$ = 1;
this.cljs$lang$protocol_mask$partition1$ = 2048;
});
(missionary.impl.Propagator.Publisher.prototype.call = (function (unused__18786__auto__){
var self__ = this;
var self__ = this;
var G__45480 = (arguments.length - (1));
switch (G__45480) {
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Propagator.Publisher.prototype.apply = (function (self__,args45479){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args45479)));
}));

(missionary.impl.Propagator.Publisher.prototype.cljs$core$IFn$_invoke$arity$2 = (function (l,r){
var self__ = this;
var this$ = this;
return (missionary.impl.Propagator.sub.cljs$core$IFn$_invoke$arity$3 ? missionary.impl.Propagator.sub.cljs$core$IFn$_invoke$arity$3(this$,l,r) : missionary.impl.Propagator.sub.call(null,this$,l,r));
}));

(missionary.impl.Propagator.Publisher.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
if((this$__$1 === that)){
return (0);
} else {
if(cljs.core.truth_((function (){var G__45488 = this$__$1.ranks;
var G__45489 = that.ranks;
return (missionary.impl.Propagator.lt.cljs$core$IFn$_invoke$arity$2 ? missionary.impl.Propagator.lt.cljs$core$IFn$_invoke$arity$2(G__45488,G__45489) : missionary.impl.Propagator.lt.call(null,G__45488,G__45489));
})())){
return (-1);
} else {
return (1);
}
}
}));

(missionary.impl.Propagator.Publisher.getBasis = (function (){
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ranks","ranks",-162053339,null),new cljs.core.Symbol(null,"initp","initp",-910297975,null),new cljs.core.Symbol(null,"inits","inits",805706667,null),new cljs.core.Symbol(null,"perform","perform",25780692,null),new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),new cljs.core.Symbol(null,"lcb","lcb",-1007960090,null),new cljs.core.Symbol(null,"rcb","rcb",-172851131,null),new cljs.core.Symbol(null,"tick","tick",804644551,null),new cljs.core.Symbol(null,"accept","accept",-780305338,null),new cljs.core.Symbol(null,"reject","reject",-1238482656,null),cljs.core.with_meta(new cljs.core.Symbol(null,"held","held",576003250,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null)),new cljs.core.Symbol(null,"effect","effect",1987874816,null),new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Symbol(null,"child","child",-2030468224,null),new cljs.core.Symbol(null,"sibling","sibling",456666527,null),new cljs.core.Symbol(null,"prop","prop",1125363195,null)], null);
}));

(missionary.impl.Propagator.Publisher.cljs$lang$type = true);

(missionary.impl.Propagator.Publisher.cljs$lang$ctorStr = "missionary.impl.Propagator/Publisher");

(missionary.impl.Propagator.Publisher.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"missionary.impl.Propagator/Publisher");
}));

/**
 * Positional factory function for missionary.impl.Propagator/Publisher.
 */
missionary.impl.Propagator.__GT_Publisher = (function missionary$impl$Propagator$__GT_Publisher(ranks,initp,inits,perform,subscribe,lcb,rcb,tick,accept,reject,held,children,effect,current,child,sibling,prop){
return (new missionary.impl.Propagator.Publisher(ranks,initp,inits,perform,subscribe,lcb,rcb,tick,accept,reject,held,children,effect,current,child,sibling,prop));
});


/**
* @constructor
*/
missionary.impl.Propagator.Process = (function (parent,state,process,waiting,pending){
this.parent = parent;
this.state = state;
this.process = process;
this.waiting = waiting;
this.pending = pending;
});

(missionary.impl.Propagator.Process.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"process","process",-1011242831,null),new cljs.core.Symbol(null,"waiting","waiting",-1758529034,null),new cljs.core.Symbol(null,"pending","pending",1420494800,null)], null);
}));

(missionary.impl.Propagator.Process.cljs$lang$type = true);

(missionary.impl.Propagator.Process.cljs$lang$ctorStr = "missionary.impl.Propagator/Process");

(missionary.impl.Propagator.Process.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"missionary.impl.Propagator/Process");
}));

/**
 * Positional factory function for missionary.impl.Propagator/Process.
 */
missionary.impl.Propagator.__GT_Process = (function missionary$impl$Propagator$__GT_Process(parent,state,process,waiting,pending){
return (new missionary.impl.Propagator.Process(parent,state,process,waiting,pending));
});


/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
missionary.impl.Propagator.Subscription = (function (source,target,lcb,rcb,prev,next,prop,state,flag){
this.source = source;
this.target = target;
this.lcb = lcb;
this.rcb = rcb;
this.prev = prev;
this.next = next;
this.prop = prop;
this.state = state;
this.flag = flag;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Propagator.Subscription.prototype.call = (function (unused__18786__auto__){
var self__ = this;
var self__ = this;
var G__45503 = (arguments.length - (1));
switch (G__45503) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Propagator.Subscription.prototype.apply = (function (self__,args45498){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args45498)));
}));

(missionary.impl.Propagator.Subscription.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
return (missionary.impl.Propagator.unsub.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Propagator.unsub.cljs$core$IFn$_invoke$arity$1(this$) : missionary.impl.Propagator.unsub.call(null,this$));
}));

(missionary.impl.Propagator.Subscription.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (missionary.impl.Propagator.accept.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Propagator.accept.cljs$core$IFn$_invoke$arity$1(this$__$1) : missionary.impl.Propagator.accept.call(null,this$__$1));
}));

(missionary.impl.Propagator.Subscription.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"target","target",1893533248,null),new cljs.core.Symbol(null,"lcb","lcb",-1007960090,null),new cljs.core.Symbol(null,"rcb","rcb",-172851131,null),new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.Symbol(null,"next","next",1522830042,null),new cljs.core.Symbol(null,"prop","prop",1125363195,null),new cljs.core.Symbol(null,"state","state",-348086572,null),cljs.core.with_meta(new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null))], null);
}));

(missionary.impl.Propagator.Subscription.cljs$lang$type = true);

(missionary.impl.Propagator.Subscription.cljs$lang$ctorStr = "missionary.impl.Propagator/Subscription");

(missionary.impl.Propagator.Subscription.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"missionary.impl.Propagator/Subscription");
}));

/**
 * Positional factory function for missionary.impl.Propagator/Subscription.
 */
missionary.impl.Propagator.__GT_Subscription = (function missionary$impl$Propagator$__GT_Subscription(source,target,lcb,rcb,prev,next,prop,state,flag){
return (new missionary.impl.Propagator.Subscription(source,target,lcb,rcb,prev,next,prop,state,flag));
});


/**
* @constructor
*/
missionary.impl.Propagator.Context = (function (time,busy,process,sub,emitter,reacted,delayed){
this.time = time;
this.busy = busy;
this.process = process;
this.sub = sub;
this.emitter = emitter;
this.reacted = reacted;
this.delayed = delayed;
});

(missionary.impl.Propagator.Context.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"time","time",-1268547887,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"busy","busy",1312244726,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),new cljs.core.Symbol(null,"process","process",-1011242831,null),new cljs.core.Symbol(null,"sub","sub",-453228498,null),new cljs.core.Symbol(null,"emitter","emitter",1266210944,null),new cljs.core.Symbol(null,"reacted","reacted",-2130950267,null),new cljs.core.Symbol(null,"delayed","delayed",1892523756,null)], null);
}));

(missionary.impl.Propagator.Context.cljs$lang$type = true);

(missionary.impl.Propagator.Context.cljs$lang$ctorStr = "missionary.impl.Propagator/Context");

(missionary.impl.Propagator.Context.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"missionary.impl.Propagator/Context");
}));

/**
 * Positional factory function for missionary.impl.Propagator/Context.
 */
missionary.impl.Propagator.__GT_Context = (function missionary$impl$Propagator$__GT_Context(time,busy,process,sub,emitter,reacted,delayed){
return (new missionary.impl.Propagator.Context(time,busy,process,sub,emitter,reacted,delayed));
});

missionary.impl.Propagator.context = missionary.impl.Propagator.__GT_Context((0),false,null,null,null,null,null);
missionary.impl.Propagator.children = (0);
missionary.impl.Propagator.lt = (function missionary$impl$Propagator$lt(x,y){
var xl = x.length;
var yl = y.length;
var ml = (function (){var x__5086__auto__ = xl;
var y__5087__auto__ = yl;
return ((x__5086__auto__ < y__5087__auto__) ? x__5086__auto__ : y__5087__auto__);
})();
var i = (0);
while(true){
if((i < ml)){
var xi = (x[i]);
var yi = (y[i]);
if((xi === yi)){
var G__45600 = (i + (1));
i = G__45600;
continue;
} else {
return (xi < yi);
}
} else {
return (xl > yl);
}
break;
}
});
missionary.impl.Propagator.link = (function missionary$impl$Propagator$link(x,y){
if(missionary.impl.Propagator.lt(x.ranks,y.ranks)){
(y.sibling = x.child);

(x.child = y);

return x;
} else {
(x.sibling = y.child);

(y.child = x);

return y;
}
});
missionary.impl.Propagator.dequeue = (function missionary$impl$Propagator$dequeue(pub){
var head = pub.child;
(pub.child = null);

var heap = null;
var prev = null;
var head__$1 = head;
while(true){
if((head__$1 == null)){
if((prev == null)){
return heap;
} else {
if((heap == null)){
return prev;
} else {
return missionary.impl.Propagator.link(heap,prev);
}
}
} else {
var next = head__$1.sibling;
(head__$1.sibling = null);

if((prev == null)){
var G__45601 = heap;
var G__45602 = head__$1;
var G__45603 = next;
heap = G__45601;
prev = G__45602;
head__$1 = G__45603;
continue;
} else {
var head__$2 = missionary.impl.Propagator.link(prev,head__$1);
var G__45604 = (((heap == null))?head__$2:missionary.impl.Propagator.link(heap,head__$2));
var G__45605 = null;
var G__45606 = next;
heap = G__45604;
prev = G__45605;
head__$1 = G__45606;
continue;
}
}
break;
}
});
missionary.impl.Propagator.enqueue = (function missionary$impl$Propagator$enqueue(r,p){
if((r == null)){
return p;
} else {
return missionary.impl.Propagator.link(p,r);
}
});
missionary.impl.Propagator.enter = (function missionary$impl$Propagator$enter(pub){
var held = pub.held;
(pub.held = true);

return held;
});
missionary.impl.Propagator.cancel = (function missionary$impl$Propagator$cancel(ps){
(ps.parent.current = null);

var fexpr__45537 = ps.process;
return (fexpr__45537.cljs$core$IFn$_invoke$arity$0 ? fexpr__45537.cljs$core$IFn$_invoke$arity$0() : fexpr__45537.call(null));
});
missionary.impl.Propagator.propagate = (function missionary$impl$Propagator$propagate(ctx,ps,sub){
var pub = ps.parent;
(ctx.sub = null);

var sub__$1 = sub;
while(true){
if((sub__$1 == null)){
return null;
} else {
var cb = (cljs.core.truth_(sub__$1.flag)?sub__$1.lcb:sub__$1.rcb);
var n = sub__$1.prop;
(sub__$1.prop = null);

(ctx.process = sub__$1.source);

if((pub.accept == null)){
var G__45539_45607 = sub__$1.state;
(cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__45539_45607) : cb.call(null,G__45539_45607));
} else {
(cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
}

var G__45608 = n;
sub__$1 = G__45608;
continue;
}
break;
}
});
missionary.impl.Propagator.tick = (function missionary$impl$Propagator$tick(pub,ctx){
(pub.held = true);

var ps = pub.current;
(ctx.reacted = missionary.impl.Propagator.dequeue(pub));

(ctx.emitter = pub);

(ctx.process = ps);

var fexpr__45540_45609 = pub.tick;
(fexpr__45540_45609.cljs$core$IFn$_invoke$arity$0 ? fexpr__45540_45609.cljs$core$IFn$_invoke$arity$0() : fexpr__45540_45609.call(null));

var sub = pub.prop;
(pub.prop = null);

(pub.held = false);

return missionary.impl.Propagator.propagate(ctx,ps,sub);
});
missionary.impl.Propagator.exit = (function missionary$impl$Propagator$exit(ctx,held,b,p,s){
var ps = ctx.process;
var pub = ps.parent;
var sub = ((held)?null:(function (){var sub = pub.prop;
(pub.prop = null);

return sub;
})());
(pub.held = held);

missionary.impl.Propagator.propagate(ctx,ps,sub);

if(b){
} else {
(ctx.sub = null);

while(true){
var temp__5818__auto___45610 = ctx.reacted;
if((temp__5818__auto___45610 == null)){
(ctx.time = (ctx.time + (1)));

var temp__5820__auto___45611 = ctx.delayed;
if((temp__5820__auto___45611 == null)){
} else {
var pub_45612__$1 = temp__5820__auto___45611;
(ctx.delayed = null);

missionary.impl.Propagator.tick(pub_45612__$1,ctx);

continue;
}
} else {
var pub_45613__$1 = temp__5818__auto___45610;
missionary.impl.Propagator.tick(pub_45613__$1,ctx);

continue;
}
break;
}

(ctx.emitter = null);
}

(ctx.busy = b);

(ctx.process = p);

return (ctx.sub = s);
});
missionary.impl.Propagator.attach = (function missionary$impl$Propagator$attach(n,s){
if((n == null)){
(s.prev = s);

return (s.next = s);
} else {
var p = n.prev;
(s.next = n);

(s.prev = p);

(p.next = s);

return (n.prev = s);
}
});
missionary.impl.Propagator.dispatch = (function missionary$impl$Propagator$dispatch(s){
var ps = s.target;
var p = s.prev;
var n = s.next;
(s.prev = null);

(s.next = null);

if((p === s)){
(ps.waiting = null);
} else {
(n.prev = p);

(p.next = n);

(ps.waiting = n);
}

var pub = ps.parent;
(s.prop = pub.prop);

return (pub.prop = s);
});
missionary.impl.Propagator.detach = (function missionary$impl$Propagator$detach(s){
var ps = s.target;
var p = s.prev;
var n = s.next;
(s.prev = null);

(s.next = null);

if((p === s)){
return (ps.pending = null);
} else {
(n.prev = p);

(p.next = n);

return (ps.pending = n);
}
});
missionary.impl.Propagator.foreach = (function missionary$impl$Propagator$foreach(ctx,subs,f){
if((subs == null)){
return null;
} else {
var s = ctx.sub;
var sub_45614 = subs.next;
while(true){
var n_45615 = sub_45614.next;
(ctx.sub = sub_45614);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

if((sub_45614 === subs)){
} else {
var G__45616 = n_45615;
sub_45614 = G__45616;
continue;
}
break;
}

return (ctx.sub = s);
}
});
missionary.impl.Propagator.accept = (function missionary$impl$Propagator$accept(sub){
var ctx = missionary.impl.Propagator.context;
var ps = sub.target;
var pub = ps.parent;
var held = missionary.impl.Propagator.enter(pub);
var b = ctx.busy;
var p = ctx.process;
var s = ctx.sub;
try{(ctx.busy = true);

(ctx.process = ps);

(ctx.sub = sub);

(sub.flag = false);

if((sub.next == null)){
(sub.prop = pub.prop);

(pub.prop = sub);

throw (new missionary.Cancelled("Flow publisher cancelled."));
} else {
missionary.impl.Propagator.detach(sub);

missionary.impl.Propagator.attach(ps.waiting,(ps.waiting = sub));

var fexpr__45545 = pub.accept;
return (fexpr__45545.cljs$core$IFn$_invoke$arity$0 ? fexpr__45545.cljs$core$IFn$_invoke$arity$0() : fexpr__45545.call(null));
}
}finally {missionary.impl.Propagator.exit(ctx,held,b,p,s);
}});
missionary.impl.Propagator.unsub = (function missionary$impl$Propagator$unsub(sub){
var ctx = missionary.impl.Propagator.context;
var ps = sub.target;
var pub = ps.parent;
var held = missionary.impl.Propagator.enter(pub);
var b = ctx.busy;
var p = ctx.process;
var s = ctx.sub;
try{(ctx.busy = true);

(ctx.process = ps);

(ctx.sub = sub);

if((sub.next == null)){
} else {
if((pub.effect == null)){
} else {
if((ps === pub.current)){
if((pub.accept == null)){
if((sub === sub.next)){
missionary.impl.Propagator.cancel(ps);
} else {
(sub.state = (new missionary.Cancelled("Task publisher cancelled.")));

missionary.impl.Propagator.dispatch(sub);
}
} else {
if(cljs.core.truth_(sub.flag)){
if((((sub === sub.next)) && ((ps.waiting == null)))){
missionary.impl.Propagator.cancel(ps);
} else {
missionary.impl.Propagator.detach(sub);

var fexpr__45548_45617 = pub.reject;
(fexpr__45548_45617.cljs$core$IFn$_invoke$arity$0 ? fexpr__45548_45617.cljs$core$IFn$_invoke$arity$0() : fexpr__45548_45617.call(null));
}
} else {
if((((sub === sub.next)) && ((ps.pending == null)))){
missionary.impl.Propagator.cancel(ps);
} else {
(sub.flag = true);

missionary.impl.Propagator.dispatch(sub);
}
}
}
} else {
}
}
}

return null;
}finally {missionary.impl.Propagator.exit(ctx,held,b,p,s);
}});
missionary.impl.Propagator.bind = (function missionary$impl$Propagator$bind(ps,f){
return (function() {
var G__45618 = null;
var G__45618__0 = (function (){
var ctx = missionary.impl.Propagator.context;
var held = missionary.impl.Propagator.enter(ps.parent);
var b = ctx.busy;
var p = ctx.process;
var s = ctx.sub;
try{(ctx.busy = true);

(ctx.process = ps);

(ctx.sub = null);

return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {missionary.impl.Propagator.exit(ctx,held,b,p,s);
}});
var G__45618__1 = (function (x){
var ctx = missionary.impl.Propagator.context;
var held = missionary.impl.Propagator.enter(ps.parent);
var b = ctx.busy;
var p = ctx.process;
var s = ctx.sub;
try{(ctx.busy = true);

(ctx.process = ps);

(ctx.sub = null);

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
}finally {missionary.impl.Propagator.exit(ctx,held,b,p,s);
}});
G__45618 = function(x){
switch(arguments.length){
case 0:
return G__45618__0.call(this);
case 1:
return G__45618__1.call(this,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45618.cljs$core$IFn$_invoke$arity$0 = G__45618__0;
G__45618.cljs$core$IFn$_invoke$arity$1 = G__45618__1;
return G__45618;
})()
});
missionary.impl.Propagator.sub = (function missionary$impl$Propagator$sub(pub,lcb,rcb){
var ctx = missionary.impl.Propagator.context;
var held = missionary.impl.Propagator.enter(pub);
var b = ctx.busy;
var p = ctx.process;
var s = ctx.sub;
try{(ctx.busy = true);

var ps = (function (){var temp__5818__auto__ = pub.current;
if((temp__5818__auto__ == null)){
var ps = missionary.impl.Propagator.__GT_Process(pub,pub.initp,null,null,null);
(pub.current = ps);

(ctx.process = ps);

(ctx.sub = null);

var fexpr__45558_45619 = pub.perform;
(fexpr__45558_45619.cljs$core$IFn$_invoke$arity$0 ? fexpr__45558_45619.cljs$core$IFn$_invoke$arity$0() : fexpr__45558_45619.call(null));

(ps.process = (function (){var G__45560 = missionary.impl.Propagator.bind(ps,pub.lcb);
var G__45561 = missionary.impl.Propagator.bind(ps,pub.rcb);
var fexpr__45559 = pub.effect;
return (fexpr__45559.cljs$core$IFn$_invoke$arity$2 ? fexpr__45559.cljs$core$IFn$_invoke$arity$2(G__45560,G__45561) : fexpr__45559.call(null,G__45560,G__45561));
})());

return ps;
} else {
var ps = temp__5818__auto__;
return (ctx.process = ps);
}
})();
var sub = missionary.impl.Propagator.__GT_Subscription(p,ps,lcb,rcb,null,null,null,pub.inits,false);
missionary.impl.Propagator.attach(ps.waiting,(ps.waiting = sub));

(ctx.sub = sub);

var fexpr__45562_45620 = pub.subscribe;
(fexpr__45562_45620.cljs$core$IFn$_invoke$arity$0 ? fexpr__45562_45620.cljs$core$IFn$_invoke$arity$0() : fexpr__45562_45620.call(null));

return sub;
}finally {missionary.impl.Propagator.exit(ctx,held,b,p,s);
}});
missionary.impl.Propagator.ranks = (function missionary$impl$Propagator$ranks(){
var temp__5818__auto__ = missionary.impl.Propagator.context.process;
if((temp__5818__auto__ == null)){
var G__45564 = [null];
(G__45564[(0)] = (function (){var G__45567 = missionary.impl.Propagator.children;
(missionary.impl.Propagator.children = (G__45567 + (1)));

return G__45567;
})());

return G__45564;
} else {
var ps = temp__5818__auto__;
var p = ps.parent;
var r = p.ranks;
var n = r.length;
var a = (new Array((n + (1))));
var n__5589__auto___45621 = n;
var i_45622 = (0);
while(true){
if((i_45622 < n__5589__auto___45621)){
(a[i_45622] = (r[i_45622]));

var G__45623 = (i_45622 + (1));
i_45622 = G__45623;
continue;
} else {
}
break;
}

var G__45571 = a;
(G__45571[n] = (function (){var G__45572 = p.children;
(p.children = (G__45572 + (1)));

return G__45572;
})());

return G__45571;
}
});
missionary.impl.Propagator.time = (function missionary$impl$Propagator$time(){
return missionary.impl.Propagator.context.time;
});
missionary.impl.Propagator.transfer = (function missionary$impl$Propagator$transfer(){
return cljs.core.deref(missionary.impl.Propagator.context.process.process);
});
missionary.impl.Propagator.getp = (function missionary$impl$Propagator$getp(){
return missionary.impl.Propagator.context.process.state;
});
missionary.impl.Propagator.setp = (function missionary$impl$Propagator$setp(x){
return (missionary.impl.Propagator.context.process.state = x);
});
missionary.impl.Propagator.gets = (function missionary$impl$Propagator$gets(){
return missionary.impl.Propagator.context.sub.state;
});
missionary.impl.Propagator.sets = (function missionary$impl$Propagator$sets(x){
return (missionary.impl.Propagator.context.sub.state = x);
});
missionary.impl.Propagator.success = (function missionary$impl$Propagator$success(x){
var sub = missionary.impl.Propagator.context.sub;
(sub.flag = true);

(sub.state = x);

return missionary.impl.Propagator.dispatch(sub);
});
missionary.impl.Propagator.failure = (function missionary$impl$Propagator$failure(x){
var sub = missionary.impl.Propagator.context.sub;
(sub.state = x);

return missionary.impl.Propagator.dispatch(sub);
});
missionary.impl.Propagator.step = (function missionary$impl$Propagator$step(){
var sub = missionary.impl.Propagator.context.sub;
(sub.flag = true);

missionary.impl.Propagator.dispatch(sub);

var ps = sub.target;
return missionary.impl.Propagator.attach(ps.pending,(ps.pending = sub));
});
missionary.impl.Propagator.done = (function missionary$impl$Propagator$done(){
var sub = missionary.impl.Propagator.context.sub;
return missionary.impl.Propagator.dispatch(sub);
});
missionary.impl.Propagator.waiting = (function missionary$impl$Propagator$waiting(f){
var ctx = missionary.impl.Propagator.context;
return missionary.impl.Propagator.foreach(ctx,ctx.process.waiting,f);
});
missionary.impl.Propagator.pending = (function missionary$impl$Propagator$pending(f){
var ctx = missionary.impl.Propagator.context;
return missionary.impl.Propagator.foreach(ctx,ctx.process.pending,f);
});
missionary.impl.Propagator.schedule = (function missionary$impl$Propagator$schedule(){
var ctx = missionary.impl.Propagator.context;
var ps = ctx.process;
var pub = ps.parent;
if((((ps === pub.current)) && ((!((ps.process == null)))))){
var emitter = ctx.emitter;
if((((emitter == null)) || (missionary.impl.Propagator.lt(emitter.ranks,pub.ranks)))){
return (ctx.reacted = missionary.impl.Propagator.enqueue(ctx.reacted,pub));
} else {
return (ctx.delayed = missionary.impl.Propagator.enqueue(ctx.delayed,pub));
}
} else {
var fexpr__45588 = pub.tick;
return (fexpr__45588.cljs$core$IFn$_invoke$arity$0 ? fexpr__45588.cljs$core$IFn$_invoke$arity$0() : fexpr__45588.call(null));
}
});
missionary.impl.Propagator.resolve = (function missionary$impl$Propagator$resolve(){
var ps = missionary.impl.Propagator.context.process;
var pub = ps.parent;
if((ps === pub.current)){
return (pub.effect = null);
} else {
return null;
}
});
missionary.impl.Propagator.task = (function missionary$impl$Propagator$task(initp,inits,perform,subscribe,success,failure,tick,task){
return missionary.impl.Propagator.__GT_Publisher(missionary.impl.Propagator.ranks(),initp,inits,perform,subscribe,success,failure,tick,null,null,false,(0),task,null,null,null,null);
});
missionary.impl.Propagator.flow = (function missionary$impl$Propagator$flow(initp,inits,perform,subscribe,step,done,tick,accept,reject,flow){
return missionary.impl.Propagator.__GT_Publisher(missionary.impl.Propagator.ranks(),initp,inits,perform,subscribe,step,done,tick,accept,reject,false,(0),flow,null,null,null,null);
});

//# sourceMappingURL=missionary.impl.Propagator.js.map
