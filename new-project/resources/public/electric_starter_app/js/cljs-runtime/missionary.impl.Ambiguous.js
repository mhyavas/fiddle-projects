goog.provide('missionary.impl.Ambiguous');






/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
missionary.impl.Ambiguous.Process = (function (notifier,terminator,head,tail,child){
this.notifier = notifier;
this.terminator = terminator;
this.head = head;
this.tail = tail;
this.child = child;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Ambiguous.Process.prototype.call = (function (unused__18786__auto__){
var self__ = this;
var self__ = this;
var G__45071 = (arguments.length - (1));
switch (G__45071) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Ambiguous.Process.prototype.apply = (function (self__,args45070){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args45070)));
}));

(missionary.impl.Ambiguous.Process.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
(missionary.impl.Ambiguous.kill.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Ambiguous.kill.cljs$core$IFn$_invoke$arity$1(this$) : missionary.impl.Ambiguous.kill.call(null,this$));

return null;
}));

(missionary.impl.Ambiguous.Process.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (missionary.impl.Ambiguous.transfer.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Ambiguous.transfer.cljs$core$IFn$_invoke$arity$1(this$__$1) : missionary.impl.Ambiguous.transfer.call(null,this$__$1));
}));

(missionary.impl.Ambiguous.Process.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null),new cljs.core.Symbol(null,"head","head",869147608,null),new cljs.core.Symbol(null,"tail","tail",494507963,null),new cljs.core.Symbol(null,"child","child",-2030468224,null)], null);
}));

(missionary.impl.Ambiguous.Process.cljs$lang$type = true);

(missionary.impl.Ambiguous.Process.cljs$lang$ctorStr = "missionary.impl.Ambiguous/Process");

(missionary.impl.Ambiguous.Process.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"missionary.impl.Ambiguous/Process");
}));

/**
 * Positional factory function for missionary.impl.Ambiguous/Process.
 */
missionary.impl.Ambiguous.__GT_Process = (function missionary$impl$Ambiguous$__GT_Process(notifier,terminator,head,tail,child){
return (new missionary.impl.Ambiguous.Process(notifier,terminator,head,tail,child));
});


/**
* @constructor
 * @implements {missionary.impl.Fiber.Fiber}
*/
missionary.impl.Ambiguous.Branch = (function (parent,prev,next,queue,choice,current){
this.parent = parent;
this.prev = prev;
this.next = next;
this.queue = queue;
this.choice = choice;
this.current = current;
});
(missionary.impl.Ambiguous.Branch.prototype.missionary$impl$Fiber$Fiber$ = cljs.core.PROTOCOL_SENTINEL);

(missionary.impl.Ambiguous.Branch.prototype.missionary$impl$Fiber$Fiber$check$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.choice.live)){
return null;
} else {
throw (new missionary.Cancelled("Process cancelled."));
}
}));

(missionary.impl.Ambiguous.Branch.prototype.missionary$impl$Fiber$Fiber$park$arity$2 = (function (this$,task){
var self__ = this;
var this$__$1 = this;
return (missionary.impl.Ambiguous.suspend.cljs$core$IFn$_invoke$arity$3 ? missionary.impl.Ambiguous.suspend.cljs$core$IFn$_invoke$arity$3(this$__$1,null,task) : missionary.impl.Ambiguous.suspend.call(null,this$__$1,null,task));
}));

(missionary.impl.Ambiguous.Branch.prototype.missionary$impl$Fiber$Fiber$swich$arity$2 = (function (this$,flow){
var self__ = this;
var this$__$1 = this;
return (missionary.impl.Ambiguous.suspend.cljs$core$IFn$_invoke$arity$3 ? missionary.impl.Ambiguous.suspend.cljs$core$IFn$_invoke$arity$3(this$__$1,(-1),flow) : missionary.impl.Ambiguous.suspend.call(null,this$__$1,(-1),flow));
}));

(missionary.impl.Ambiguous.Branch.prototype.missionary$impl$Fiber$Fiber$fork$arity$3 = (function (this$,par,flow){
var self__ = this;
var this$__$1 = this;
return (missionary.impl.Ambiguous.suspend.cljs$core$IFn$_invoke$arity$3 ? missionary.impl.Ambiguous.suspend.cljs$core$IFn$_invoke$arity$3(this$__$1,par,flow) : missionary.impl.Ambiguous.suspend.call(null,this$__$1,par,flow));
}));

(missionary.impl.Ambiguous.Branch.prototype.missionary$impl$Fiber$Fiber$unpark$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (missionary.impl.Ambiguous.resume.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Ambiguous.resume.cljs$core$IFn$_invoke$arity$1(this$__$1) : missionary.impl.Ambiguous.resume.call(null,this$__$1));
}));

(missionary.impl.Ambiguous.Branch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.Symbol(null,"next","next",1522830042,null),new cljs.core.Symbol(null,"queue","queue",-1198599890,null),new cljs.core.Symbol(null,"choice","choice",265360800,null),new cljs.core.Symbol(null,"current","current",552492924,null)], null);
}));

(missionary.impl.Ambiguous.Branch.cljs$lang$type = true);

(missionary.impl.Ambiguous.Branch.cljs$lang$ctorStr = "missionary.impl.Ambiguous/Branch");

(missionary.impl.Ambiguous.Branch.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"missionary.impl.Ambiguous/Branch");
}));

/**
 * Positional factory function for missionary.impl.Ambiguous/Branch.
 */
missionary.impl.Ambiguous.__GT_Branch = (function missionary$impl$Ambiguous$__GT_Branch(parent,prev,next,queue,choice,current){
return (new missionary.impl.Ambiguous.Branch(parent,prev,next,queue,choice,current));
});


/**
* @constructor
*/
missionary.impl.Ambiguous.Choice = (function (branch,prev,next,coroutine,iterator,parallelism,live,busy,done){
this.branch = branch;
this.prev = prev;
this.next = next;
this.coroutine = coroutine;
this.iterator = iterator;
this.parallelism = parallelism;
this.live = live;
this.busy = busy;
this.done = done;
});

(missionary.impl.Ambiguous.Choice.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"branch","branch",1565897602,null),new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.Symbol(null,"next","next",1522830042,null),new cljs.core.Symbol(null,"coroutine","coroutine",-775901756,null),new cljs.core.Symbol(null,"iterator","iterator",-32550441,null),cljs.core.with_meta(new cljs.core.Symbol(null,"parallelism","parallelism",709609194,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"live","live",30383488,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"busy","busy",1312244726,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"done","done",750687339,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null))], null);
}));

(missionary.impl.Ambiguous.Choice.cljs$lang$type = true);

(missionary.impl.Ambiguous.Choice.cljs$lang$ctorStr = "missionary.impl.Ambiguous/Choice");

(missionary.impl.Ambiguous.Choice.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"missionary.impl.Ambiguous/Choice");
}));

/**
 * Positional factory function for missionary.impl.Ambiguous/Choice.
 */
missionary.impl.Ambiguous.__GT_Choice = (function missionary$impl$Ambiguous$__GT_Choice(branch,prev,next,coroutine,iterator,parallelism,live,busy,done){
return (new missionary.impl.Ambiguous.Choice(branch,prev,next,coroutine,iterator,parallelism,live,busy,done));
});


/**
* @constructor
*/
missionary.impl.Ambiguous.Processor = (function (branch,prev,next,child){
this.branch = branch;
this.prev = prev;
this.next = next;
this.child = child;
});

(missionary.impl.Ambiguous.Processor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"branch","branch",1565897602,null),new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.Symbol(null,"next","next",1522830042,null),new cljs.core.Symbol(null,"child","child",-2030468224,null)], null);
}));

(missionary.impl.Ambiguous.Processor.cljs$lang$type = true);

(missionary.impl.Ambiguous.Processor.cljs$lang$ctorStr = "missionary.impl.Ambiguous/Processor");

(missionary.impl.Ambiguous.Processor.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"missionary.impl.Ambiguous/Processor");
}));

/**
 * Positional factory function for missionary.impl.Ambiguous/Processor.
 */
missionary.impl.Ambiguous.__GT_Processor = (function missionary$impl$Ambiguous$__GT_Processor(branch,prev,next,child){
return (new missionary.impl.Ambiguous.Processor(branch,prev,next,child));
});

missionary.impl.Ambiguous.nop = (function missionary$impl$Ambiguous$nop(){
return null;
});
missionary.impl.Ambiguous.boot = (function missionary$impl$Ambiguous$boot(cr,c){
(c.coroutine = cr);

return (missionary.impl.Ambiguous.ready.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Ambiguous.ready.cljs$core$IFn$_invoke$arity$1(c) : missionary.impl.Ambiguous.ready.call(null,c));
});
missionary.impl.Ambiguous.backtrack = (function missionary$impl$Ambiguous$backtrack(p,b,c){
try{(c.iterator = missionary.impl.Ambiguous.nop);

(b.choice = c);

(b.current = cljs.core.deref(p.iterator));

var fexpr__45098 = p.coroutine;
return (fexpr__45098.cljs$core$IFn$_invoke$arity$2 ? fexpr__45098.cljs$core$IFn$_invoke$arity$2(missionary.impl.Ambiguous.boot,c) : fexpr__45098.call(null,missionary.impl.Ambiguous.boot,c));
}catch (e45096){var e = e45096;
(c.done = true);

(b.current = e);

return missionary.impl.Ambiguous.boot(p.coroutine,c);
}});
missionary.impl.Ambiguous.choose = (function missionary$impl$Ambiguous$choose(p){
var b = p.branch;
var n = p.next;
return missionary.impl.Ambiguous.backtrack(p,b,(n.prev = (p.next = missionary.impl.Ambiguous.__GT_Choice(b,p,n,null,null,null,p.live,false,false))));
});
missionary.impl.Ambiguous.branch = (function missionary$impl$Ambiguous$branch(p){
(p.parallelism = (p.parallelism - (1)));

var parent = p.branch;
var prev = parent.current;
var curr = missionary.impl.Ambiguous.__GT_Processor(parent,null,null,null);
var b = missionary.impl.Ambiguous.__GT_Branch(curr,null,null,null,null,null);
var c = missionary.impl.Ambiguous.__GT_Choice(b,null,null,null,null,null,p.live,false,false);
(parent.current = curr);

if((prev == null)){
(curr.next = (curr.prev = curr));
} else {
var next_45297 = prev.next;
(prev.next = (next_45297.prev = curr));

(curr.prev = prev);

(curr.next = next_45297);
}

(curr.child = (b.next = (b.prev = b)));

return missionary.impl.Ambiguous.backtrack(p,b,(c.next = (c.prev = c)));
});
missionary.impl.Ambiguous.root = (function missionary$impl$Ambiguous$root(b){
var node = b.parent;
while(true){
if((node instanceof missionary.impl.Ambiguous.Processor)){
var G__45299 = node.branch.parent;
node = G__45299;
continue;
} else {
if((node instanceof missionary.impl.Ambiguous.Branch)){
var G__45300 = node.parent;
node = G__45300;
continue;
} else {
return node;
}
}
break;
}
});
missionary.impl.Ambiguous.kill = (function missionary$impl$Ambiguous$kill(ps){
var temp__5820__auto__ = ps.child;
if((temp__5820__auto__ == null)){
return null;
} else {
var b = temp__5820__auto__;
var G__45127 = b.next;
return (missionary.impl.Ambiguous.walk.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Ambiguous.walk.cljs$core$IFn$_invoke$arity$1(G__45127) : missionary.impl.Ambiguous.walk.call(null,G__45127));
}
});
missionary.impl.Ambiguous.cancel = (function missionary$impl$Ambiguous$cancel(c){
var b = c.branch;
var c__$1 = c;
while(true){
if(cljs.core.truth_(c__$1.live)){
(c__$1.live = false);

var fexpr__45140_45304 = c__$1.iterator;
(fexpr__45140_45304.cljs$core$IFn$_invoke$arity$0 ? fexpr__45140_45304.cljs$core$IFn$_invoke$arity$0() : fexpr__45140_45304.call(null));

var temp__5820__auto__ = b.choice;
if((temp__5820__auto__ == null)){
return null;
} else {
var t = temp__5820__auto__;
var c__$2 = (function (){var c__$2 = c__$1;
while(true){
var c__$3 = c__$2.next;
if((c__$3.prev == null)){
var G__45305 = c__$3;
c__$2 = G__45305;
continue;
} else {
return c__$3;
}
break;
}
})();
if((c__$2 === t.next)){
var curr = b.current;
if((curr instanceof missionary.impl.Ambiguous.Processor)){
var pr = curr;
while(true){
var G__45148_45307 = pr.child.next;
(missionary.impl.Ambiguous.walk.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Ambiguous.walk.cljs$core$IFn$_invoke$arity$1(G__45148_45307) : missionary.impl.Ambiguous.walk.call(null,G__45148_45307));

var temp__5820__auto____$1 = b.current;
if((temp__5820__auto____$1 == null)){
return null;
} else {
var curr__$1 = temp__5820__auto____$1;
var pr__$1 = (function (){var pr__$1 = pr;
while(true){
var pr__$2 = pr__$1.next;
if((pr__$2.prev == null)){
var G__45309 = pr__$2;
pr__$1 = G__45309;
continue;
} else {
return pr__$2;
}
break;
}
})();
if((pr__$1 === curr__$1.next)){
return null;
} else {
var G__45310 = pr__$1;
pr = G__45310;
continue;
}
}
break;
}
} else {
if((curr instanceof missionary.impl.Ambiguous.Branch)){
var G__45152 = curr.next;
return (missionary.impl.Ambiguous.walk.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Ambiguous.walk.cljs$core$IFn$_invoke$arity$1(G__45152) : missionary.impl.Ambiguous.walk.call(null,G__45152));
} else {
return null;
}
}
} else {
var G__45313 = c__$2;
c__$1 = G__45313;
continue;
}
}
} else {
return null;
}
break;
}
});
missionary.impl.Ambiguous.walk = (function missionary$impl$Ambiguous$walk(b){
var b__$1 = b;
while(true){
missionary.impl.Ambiguous.cancel(b__$1.choice.next);

var node = b__$1.parent;
var temp__5820__auto__ = (((node instanceof missionary.impl.Ambiguous.Processor))?node.child:(((node instanceof missionary.impl.Ambiguous.Branch))?node.current:node.child));
if((temp__5820__auto__ == null)){
return null;
} else {
var t = temp__5820__auto__;
var b__$2 = (function (){var b__$2 = b__$1;
while(true){
var b__$3 = b__$2.next;
if((b__$3.prev == null)){
var G__45316 = b__$3;
b__$2 = G__45316;
continue;
} else {
return b__$3;
}
break;
}
})();
if((b__$2 === t.next)){
return null;
} else {
var G__45317 = b__$2;
b__$1 = G__45317;
continue;
}
}
break;
}
});
missionary.impl.Ambiguous.move = (function missionary$impl$Ambiguous$move(x,y){
var p_45319 = x.parent;
var b_45320 = y;
while(true){
var b_45322__$1 = b_45320.next;
(b_45322__$1.parent = p_45319);

if((b_45322__$1 === y)){
} else {
var G__45323 = b_45322__$1;
b_45320 = G__45323;
continue;
}
break;
}

var xx = x.next;
var yy = y.next;
(x.next = yy);

(yy.prev = x);

(y.next = xx);

return (xx.prev = y);
});
missionary.impl.Ambiguous.discard = (function missionary$impl$Ambiguous$discard(b){
var parent = b.parent;
var prev = b.prev;
var next = b.next;
(b.prev = null);

(b.choice = null);

(b.current = null);

if((parent instanceof missionary.impl.Ambiguous.Branch)){
var br = parent;
if((b === prev)){
var c = br.choice;
(b.current = null);

if(cljs.core.truth_(c.busy)){
if(cljs.core.truth_(c.done)){
(c.busy = false);

(c.done = false);

return missionary.impl.Ambiguous.choose(c);
} else {
return null;
}
} else {
return null;
}
} else {
(prev.next = next);

(next.prev = prev);

if((b === br.current)){
(br.current = prev);
} else {
}

return null;
}
} else {
if((parent instanceof missionary.impl.Ambiguous.Processor)){
var pr = parent;
if((b === prev)){
var b__$1 = pr.branch;
var c = b__$1.choice;
var p = pr.prev;
var n = pr.next;
(pr.child = null);

(pr.prev = null);

if((pr === p)){
(b__$1.current = null);
} else {
(p.next = n);

(n.prev = p);

(b__$1.current = p);
}

(c.parallelism = (c.parallelism + (1)));

if(cljs.core.truth_(c.busy)){
if(cljs.core.truth_(c.done)){
(c.busy = false);

(c.done = false);

return missionary.impl.Ambiguous.branch(c);
} else {
return null;
}
} else {
return null;
}
} else {
(prev.next = next);

(next.prev = prev);

if((b === pr.child)){
(pr.child = prev);
} else {
}

return null;
}
} else {
var ps = parent;
if((b === prev)){
(ps.child = null);

return ps.terminator;
} else {
(prev.next = next);

(next.prev = prev);

if((b === ps.child)){
(ps.child = prev);
} else {
}

return null;
}
}
}
});
missionary.impl.Ambiguous.ack = (function missionary$impl$Ambiguous$ack(c){
if(cljs.core.truth_(c.busy)){
if(cljs.core.truth_(c.done)){
(c.busy = false);

(c.done = false);

if((c.parallelism < (0))){
return missionary.impl.Ambiguous.choose(c);
} else {
return missionary.impl.Ambiguous.branch(c);
}
} else {
return null;
}
} else {
return null;
}
});
missionary.impl.Ambiguous.done = (function missionary$impl$Ambiguous$done(b){
var c = b.choice;
var p = c.prev;
(c.prev = null);

(b.queue = null);

if((p === c)){
return missionary.impl.Ambiguous.discard(b);
} else {
var n = c.next;
(n.prev = p);

(p.next = n);

(b.choice = p);

(b.current = null);

return missionary.impl.Ambiguous.ack(p);
}
});
missionary.impl.Ambiguous.all = (function missionary$impl$Ambiguous$all(n){
var n__$1 = n;
var cb = null;
while(true){
if((n__$1 == null)){
return cb;
} else {
var G__45333 = n__$1.queue;
var G__45334 = missionary.impl.Ambiguous.done(n__$1);
n__$1 = G__45333;
cb = G__45334;
continue;
}
break;
}
});
missionary.impl.Ambiguous.transfer = (function missionary$impl$Ambiguous$transfer(ps){
var b = ps.head;
var q = b.queue;
var x = b.current;
var temp__5820__auto___45336 = (cljs.core.truth_(b.choice.done)?(function (){
(ps.notifier = null);

missionary.impl.Ambiguous.kill(ps);

var cb = missionary.impl.Ambiguous.done(b);
var cb__$1 = (((cb == null))?missionary.impl.Ambiguous.all(q):cb);
var cb__$2 = (((cb__$1 == null))?missionary.impl.Ambiguous.all(ps.tail):cb__$1);
(ps.head = null);

(ps.tail = null);

return cb__$2;
})()
:(function (){var cb = missionary.impl.Ambiguous.done(b);
if((q == null)){
var temp__5818__auto__ = ps.tail;
if((temp__5818__auto__ == null)){
(ps.head = null);

return cb;
} else {
var prev = temp__5818__auto__;
(ps.tail = null);

(ps.head = (function (){var prev__$1 = prev;
var next = null;
while(true){
var swap = prev__$1.queue;
(prev__$1.queue = next);

if((swap == null)){
return prev__$1;
} else {
var G__45337 = swap;
var G__45338 = prev__$1;
prev__$1 = G__45337;
next = G__45338;
continue;
}
break;
}
})());

return ps.notifier;
}
} else {
(ps.head = q);

return ps.notifier;
}
})());
if((temp__5820__auto___45336 == null)){
} else {
var cb_45345 = temp__5820__auto___45336;
(cb_45345.cljs$core$IFn$_invoke$arity$0 ? cb_45345.cljs$core$IFn$_invoke$arity$0() : cb_45345.call(null));
}

if((ps.notifier == null)){
throw x;
} else {
return x;
}
});
missionary.impl.Ambiguous.ready = (function missionary$impl$Ambiguous$ready(c){
if(cljs.core.truth_((c.busy = cljs.core.not(c.busy)))){
while(true){
var b = c.branch;
var par = c.parallelism;
var curr = b.current;
if((par == null)){
var prev = missionary.impl.Fiber.fiber;
var x = (function (){try{(missionary.impl.Fiber.fiber = b);

var fexpr__45220 = c.coroutine;
return (fexpr__45220.cljs$core$IFn$_invoke$arity$0 ? fexpr__45220.cljs$core$IFn$_invoke$arity$0() : fexpr__45220.call(null));
}catch (e45215){var e = e45215;
(c.done = true);

return e;
}})();
(missionary.impl.Fiber.fiber = prev);

if((x === b)){
if(cljs.core.truth_((c.busy = cljs.core.not(c.busy)))){
continue;
} else {
return null;
}
} else {
var ps = missionary.impl.Ambiguous.root(b);
(b.current = x);

var temp__5818__auto__ = ps.notifier;
if((temp__5818__auto__ == null)){
return missionary.impl.Ambiguous.done(b);
} else {
var n = temp__5818__auto__;
if((ps.head == null)){
(ps.head = b);

return n;
} else {
(b.queue = ps.tail);

(ps.tail = b);

return null;
}
}
}
} else {
if(cljs.core.truth_(c.done)){
var p = c.prev;
(c.prev = null);

if((c === p)){
if((curr instanceof missionary.impl.Ambiguous.Branch)){
missionary.impl.Ambiguous.move(b,curr);
} else {
if((curr instanceof missionary.impl.Ambiguous.Processor)){
var pr_45346 = curr;
while(true){
var pr_45347__$1 = pr_45346.next;
missionary.impl.Ambiguous.move(b,pr_45347__$1.child);

if((pr_45347__$1 === b.current)){
} else {
var G__45348 = pr_45347__$1;
pr_45346 = G__45348;
continue;
}
break;
}
} else {
}
}

return missionary.impl.Ambiguous.discard(b);
} else {
var n = c.next;
(n.prev = p);

(p.next = n);

if((c === b.choice)){
(b.choice = p);

if((curr == null)){
return missionary.impl.Ambiguous.ack(p);
} else {
if((curr instanceof missionary.impl.Ambiguous.Processor)){
var pivot = cljs.core.pr.child;
(b.current = pivot);

(pivot.parent = b);

var pr_45349 = curr;
while(true){
var pr_45350__$1 = pr_45349.next;
if((pr_45350__$1 === curr)){
} else {
missionary.impl.Ambiguous.move(pivot,pr_45350__$1.child);
}
break;
}

(cljs.core.pr.prev = cljs.core.pr);

(cljs.core.pr.next = cljs.core.pr);

return null;
} else {
return null;
}
}
} else {
return null;
}
}
} else {
if((par > (0))){
(c.busy = false);

return missionary.impl.Ambiguous.branch(c);
} else {
if((par < (0))){
if((c === b.choice)){
if((curr == null)){
(c.busy = false);

return missionary.impl.Ambiguous.choose(c);
} else {
(c.done = true);

missionary.impl.Ambiguous.walk(curr.next);

return null;
}
} else {
(c.done = true);

missionary.impl.Ambiguous.cancel(c.next);

return null;
}
} else {
(c.done = true);

return null;
}
}
}
}
break;
}
} else {
return null;
}
});
missionary.impl.Ambiguous.suspend = (function missionary$impl$Ambiguous$suspend(b,par,flow){
var c = b.choice;
(c.parallelism = par);

(c.iterator = (function (){var G__45250 = (function() {
var G__45351 = null;
var G__45351__0 = (function (){
var temp__5820__auto__ = missionary.impl.Ambiguous.ready(c);
if((temp__5820__auto__ == null)){
return null;
} else {
var cb = temp__5820__auto__;
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
}
});
var G__45351__1 = (function (x){
(c.branch.current = x);

var temp__5820__auto__ = missionary.impl.Ambiguous.ready(c);
if((temp__5820__auto__ == null)){
return null;
} else {
var cb = temp__5820__auto__;
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
}
});
G__45351 = function(x){
switch(arguments.length){
case 0:
return G__45351__0.call(this);
case 1:
return G__45351__1.call(this,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45351.cljs$core$IFn$_invoke$arity$0 = G__45351__0;
G__45351.cljs$core$IFn$_invoke$arity$1 = G__45351__1;
return G__45351;
})()
;
var G__45251 = (function() {
var G__45352 = null;
var G__45352__0 = (function (){
(c.done = true);

var temp__5820__auto__ = missionary.impl.Ambiguous.ready(c);
if((temp__5820__auto__ == null)){
return null;
} else {
var cb = temp__5820__auto__;
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
}
});
var G__45352__1 = (function (x){
(c.done = true);

(c.branch.current = x);

var temp__5820__auto__ = missionary.impl.Ambiguous.ready(c);
if((temp__5820__auto__ == null)){
return null;
} else {
var cb = temp__5820__auto__;
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
}
});
G__45352 = function(x){
switch(arguments.length){
case 0:
return G__45352__0.call(this);
case 1:
return G__45352__1.call(this,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45352.cljs$core$IFn$_invoke$arity$0 = G__45352__0;
G__45352.cljs$core$IFn$_invoke$arity$1 = G__45352__1;
return G__45352;
})()
;
return (flow.cljs$core$IFn$_invoke$arity$2 ? flow.cljs$core$IFn$_invoke$arity$2(G__45250,G__45251) : flow.call(null,G__45250,G__45251));
})());

if(cljs.core.truth_(c.live)){
} else {
var fexpr__45266_45354 = c.iterator;
(fexpr__45266_45354.cljs$core$IFn$_invoke$arity$0 ? fexpr__45266_45354.cljs$core$IFn$_invoke$arity$0() : fexpr__45266_45354.call(null));
}

return b;
});
missionary.impl.Ambiguous.resume = (function missionary$impl$Ambiguous$resume(b){
var c = b.choice;
var x = b.current;
(b.current = null);

if(cljs.core.truth_(c.done)){
(c.done = false);

throw x;
} else {
}

return x;
});
missionary.impl.Ambiguous.run = (function missionary$impl$Ambiguous$run(cr,n,t){
var ps = missionary.impl.Ambiguous.__GT_Process(n,t,null,null,null);
var b = missionary.impl.Ambiguous.__GT_Branch(ps,null,null,null,null,null);
var c = missionary.impl.Ambiguous.__GT_Choice(b,null,null,null,missionary.impl.Ambiguous.nop,null,true,false,false);
(ps.child = (b.next = (b.prev = b)));

(b.choice = (c.next = (c.prev = c)));

var temp__5820__auto___45355 = missionary.impl.Ambiguous.boot(cr,c);
if((temp__5820__auto___45355 == null)){
} else {
var cb_45356 = temp__5820__auto___45355;
(cb_45356.cljs$core$IFn$_invoke$arity$0 ? cb_45356.cljs$core$IFn$_invoke$arity$0() : cb_45356.call(null));
}

return ps;
});

//# sourceMappingURL=missionary.impl.Ambiguous.js.map
