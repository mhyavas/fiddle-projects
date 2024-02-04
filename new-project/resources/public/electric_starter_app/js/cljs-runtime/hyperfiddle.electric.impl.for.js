goog.provide('hyperfiddle.electric.impl.for$');
hyperfiddle.electric.impl.for$.seq_diff = (function hyperfiddle$electric$impl$for$seq_diff(kf){
return (function (rf){
var state = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((4));
var append = (function (o,k){
var next_index = (state[((2) | (0))]);
(state[((2) | (0))] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(next_index,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(next_index,k,cljs.core.PersistentVector.EMPTY),o)));

var temp__5818__auto__ = (state[((3) | (0))]);
if((temp__5818__auto__ == null)){
(o[((0) | (0))] = o);

(o[((1) | (0))] = o);

return (state[((3) | (0))] = o);
} else {
var next_head = temp__5818__auto__;
var next_tail = (next_head[((0) | (0))]);
(o[((0) | (0))] = next_tail);

(o[((1) | (0))] = next_head);

(next_head[((0) | (0))] = o);

return (next_tail[((1) | (0))] = o);
}
});
var scan = (function (r,x){
var k = (kf.cljs$core$IFn$_invoke$arity$1 ? kf.cljs$core$IFn$_invoke$arity$1(x) : kf.call(null,x));
var prev_index = (state[((0) | (0))]);
var prev_head = (state[((1) | (0))]);
var temp__5818__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(prev_index,k);
if((temp__5818__auto__ == null)){
var o = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3));
append(o,k);

var G__48341 = (function (){var G__48344 = r;
var G__48345 = o;
var G__48346 = (o[((2) | (0))] = x);
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(G__48344,G__48345,G__48346) : rf.call(null,G__48344,G__48345,G__48346));
})();
var G__48342 = null;
var G__48343 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,prev_head], null);
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(G__48341,G__48342,G__48343) : rf.call(null,G__48341,G__48342,G__48343));
} else {
var vec__48350 = temp__5818__auto__;
var seq__48351 = cljs.core.seq(vec__48350);
var first__48352 = cljs.core.first(seq__48351);
var seq__48351__$1 = cljs.core.next(seq__48351);
var o = first__48352;
var os = seq__48351__$1;
var prev = (o[((0) | (0))]);
var next = (((o === prev))?null:(prev[((1) | (0))] = (function (){var G__48354 = (o[((1) | (0))]);
(G__48354[((0) | (0))] = prev);

return G__48354;
})()));
var r__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(o[((2) | (0))])))?r:(function (){var G__48355 = r;
var G__48356 = o;
var G__48357 = (o[((2) | (0))] = x);
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(G__48355,G__48356,G__48357) : rf.call(null,G__48355,G__48356,G__48357));
})());
var r__$2 = (((o === prev_head))?(function (){
(state[((1) | (0))] = next);

return r__$1;
})()
:(function (){var G__48358 = r__$1;
var G__48359 = null;
var G__48360 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,prev_head], null);
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(G__48358,G__48359,G__48360) : rf.call(null,G__48358,G__48359,G__48360));
})());
(state[((0) | (0))] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(prev_index,k,os));

append(o,k);

return r__$2;
}
});
return (function() {
var G__48539 = null;
var G__48539__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__48539__1 = (function (r){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(r) : rf.call(null,r));
});
var G__48539__2 = (function (r,xs){
if((xs instanceof hyperfiddle.electric.Failure)){
var temp__5818__auto__ = (state[((1) | (0))]);
if((temp__5818__auto__ == null)){
return r;
} else {
var prev_head = temp__5818__auto__;
var o = prev_head;
var r__$1 = r;
while(true){
var o__$1 = (o[((0) | (0))]);
var r__$2 = (function (){var G__48366 = r__$1;
var G__48367 = o__$1;
var G__48368 = (o__$1[((2) | (0))] = xs);
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(G__48366,G__48367,G__48368) : rf.call(null,G__48366,G__48367,G__48368));
})();
if((o__$1 === prev_head)){
return r__$2;
} else {
var G__48540 = o__$1;
var G__48541 = r__$2;
o = G__48540;
r__$1 = G__48541;
continue;
}
break;
}
}
} else {
var r__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(scan,r,xs);
var r__$2 = (function (){var temp__5818__auto__ = (state[((1) | (0))]);
if((temp__5818__auto__ == null)){
return r__$1;
} else {
var prev_head = temp__5818__auto__;
var o = prev_head;
var r__$2 = r__$1;
while(true){
var o__$1 = (o[((0) | (0))]);
var r__$3 = (function (){var G__48376 = r__$2;
var G__48377 = null;
var G__48378 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o__$1,o__$1], null);
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(G__48376,G__48377,G__48378) : rf.call(null,G__48376,G__48377,G__48378));
})();
if((o__$1 === prev_head)){
return r__$3;
} else {
var G__48544 = o__$1;
var G__48545 = r__$3;
o = G__48544;
r__$2 = G__48545;
continue;
}
break;
}
}
})();
(state[((0) | (0))] = (state[((2) | (0))]));

(state[((1) | (0))] = (state[((3) | (0))]));

(state[((2) | (0))] = null);

(state[((3) | (0))] = null);

return r__$2;
}
});
G__48539 = function(r,xs){
switch(arguments.length){
case 0:
return G__48539__0.call(this);
case 1:
return G__48539__1.call(this,r);
case 2:
return G__48539__2.call(this,r,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__48539.cljs$core$IFn$_invoke$arity$0 = G__48539__0;
G__48539.cljs$core$IFn$_invoke$arity$1 = G__48539__1;
G__48539.cljs$core$IFn$_invoke$arity$2 = G__48539__2;
return G__48539;
})()
});
});
hyperfiddle.electric.impl.for$.entry = (function hyperfiddle$electric$impl$for$entry(k,v){
return cljs.core.__GT_MapEntry(k,v,null);
});
hyperfiddle.electric.impl.for$.insert_before = (function hyperfiddle$electric$impl$for$insert_before(tier){
return (function (rf){
var state = (function (){var G__48404 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__48404[((0) | (0))] = cljs.core.PersistentArrayMap.EMPTY);

(G__48404[((1) | (0))] = cljs.core.PersistentVector.EMPTY);

return G__48404;
})();
return (function() {
var G__48547 = null;
var G__48547__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__48547__1 = (function (r){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(r) : rf.call(null,r));
});
var G__48547__2 = (function (r,p__48408){
var vec__48409 = p__48408;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48409,(0),null);
var anchor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48409,(1),null);
var r__$1 = (function (){var k__GT_p = (state[((0) | (0))]);
if(cljs.core.contains_QMARK_(k__GT_p,target)){
return r;
} else {
(state[((0) | (0))] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(k__GT_p,target,cljs.core.count(k__GT_p)));

(state[((1) | (0))] = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((state[((1) | (0))]),target));

var G__48414 = r;
var G__48415 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [target], null);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__48414,G__48415) : rf.call(null,G__48414,G__48415));
}
})();
var k__GT_p = (state[((0) | (0))]);
var start_position = (k__GT_p.cljs$core$IFn$_invoke$arity$1 ? k__GT_p.cljs$core$IFn$_invoke$arity$1(target) : k__GT_p.call(null,target));
var anchor_position = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(anchor,target))?cljs.core.count(k__GT_p):(function (){var G__48419 = anchor;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__48419)){
return cljs.core.count(k__GT_p);
} else {
return (k__GT_p.cljs$core$IFn$_invoke$arity$1 ? k__GT_p.cljs$core$IFn$_invoke$arity$1(anchor) : k__GT_p.call(null,anchor));

}
})());
var final_position = (((start_position < anchor_position))?(anchor_position - (1)):anchor_position);
var step = cljs.core.compare(final_position,start_position);
var r__$2 = (function (){var G__48421 = step;
switch (G__48421) {
case (0):
return r__$1;

break;
default:
var ks = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [target], null);
var i = start_position;
while(true){
var j = (i + step);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$2((state[((1) | (0))]),j);
var ks__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ks,k);
(state[((0) | (0))] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((state[((0) | (0))]),k,i));

(state[((1) | (0))] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((state[((1) | (0))]),i,k));

if((j === final_position)){
(state[((0) | (0))] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((state[((0) | (0))]),target,j));

(state[((1) | (0))] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((state[((1) | (0))]),j,target));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(r__$1,ks__$1) : rf.call(null,r__$1,ks__$1));
} else {
var G__48551 = ks__$1;
var G__48552 = j;
ks = G__48551;
i = G__48552;
continue;
}
break;
}

}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(anchor,target)){
(state[((0) | (0))] = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((state[((0) | (0))]),target));

(state[((1) | (0))] = cljs.core.pop((state[((1) | (0))])));

hyperfiddle.electric.impl.runtime.move(tier,start_position,start_position);

var G__48429 = r__$2;
var G__48430 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [target], null);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__48429,G__48430) : rf.call(null,G__48429,G__48430));
} else {
if((start_position === final_position)){
} else {
hyperfiddle.electric.impl.runtime.move(tier,start_position,final_position);
}

return r__$2;
}
});
G__48547 = function(r,p__48408){
switch(arguments.length){
case 0:
return G__48547__0.call(this);
case 1:
return G__48547__1.call(this,r);
case 2:
return G__48547__2.call(this,r,p__48408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__48547.cljs$core$IFn$_invoke$arity$0 = G__48547__0;
G__48547.cljs$core$IFn$_invoke$arity$1 = G__48547__1;
G__48547.cljs$core$IFn$_invoke$arity$2 = G__48547__2;
return G__48547;
})()
});
});
hyperfiddle.electric.impl.for$.apply_cycle = (function hyperfiddle$electric$impl$for$apply_cycle(p__48435,p__48436){
var map__48437 = p__48435;
var map__48437__$1 = cljs.core.__destructure_map(map__48437);
var r = map__48437__$1;
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48437__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48437__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var failed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48437__$1,new cljs.core.Keyword(null,"failed","failed",-1397425762));
var vec__48438 = p__48436;
var seq__48439 = cljs.core.seq(vec__48438);
var first__48440 = cljs.core.first(seq__48439);
var seq__48439__$1 = cljs.core.next(seq__48439);
var x = first__48440;
var ys = seq__48439__$1;
var temp__5818__auto__ = ys;
if((temp__5818__auto__ == null)){
var temp__5818__auto____$1 = (index.cljs$core$IFn$_invoke$arity$1 ? index.cljs$core$IFn$_invoke$arity$1(x) : index.call(null,x));
if((temp__5818__auto____$1 == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(r,new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(index,x,cljs.core.count(index)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"vals","vals",768058733),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals,null)], 0));
} else {
var i = temp__5818__auto____$1;
if(((i + (1)) === cljs.core.count(index))){
} else {
throw (new Error("Assert failed: (== (inc i) (count index))"));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(r,new cljs.core.Keyword(null,"failed","failed",-1397425762),cljs.core.disj.cljs$core$IFn$_invoke$arity$2(failed,x),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(index,x),new cljs.core.Keyword(null,"vals","vals",768058733),cljs.core.pop(vals)], 0));
}
} else {
var vec__48453 = temp__5818__auto__;
var seq__48454 = cljs.core.seq(vec__48453);
var first__48455 = cljs.core.first(seq__48454);
var seq__48454__$1 = cljs.core.next(seq__48454);
var y = first__48455;
var ys__$1 = seq__48454__$1;
var i = (index.cljs$core$IFn$_invoke$arity$1 ? index.cljs$core$IFn$_invoke$arity$1(x) : index.call(null,x));
var v = (vals.cljs$core$IFn$_invoke$arity$1 ? vals.cljs$core$IFn$_invoke$arity$1(i) : vals.call(null,i));
var index__$1 = index;
var vals__$1 = vals;
var i__$1 = i;
var y__$1 = y;
var ys__$2 = ys__$1;
while(true){
var j = (index__$1.cljs$core$IFn$_invoke$arity$1 ? index__$1.cljs$core$IFn$_invoke$arity$1(y__$1) : index__$1.call(null,y__$1));
var index__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(index__$1,y__$1,i__$1);
var vals__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(vals__$1,i__$1,(vals__$1.cljs$core$IFn$_invoke$arity$1 ? vals__$1.cljs$core$IFn$_invoke$arity$1(j) : vals__$1.call(null,j)));
var temp__5818__auto____$1 = ys__$2;
if((temp__5818__auto____$1 == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(r,new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(index__$2,x,j),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"vals","vals",768058733),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(vals__$2,j,v)], 0));
} else {
var vec__48471 = temp__5818__auto____$1;
var seq__48472 = cljs.core.seq(vec__48471);
var first__48473 = cljs.core.first(seq__48472);
var seq__48472__$1 = cljs.core.next(seq__48472);
var y__$2 = first__48473;
var ys__$3 = seq__48472__$1;
var G__48558 = index__$2;
var G__48559 = vals__$2;
var G__48560 = j;
var G__48561 = y__$2;
var G__48562 = ys__$3;
index__$1 = G__48558;
vals__$1 = G__48559;
i__$1 = G__48560;
y__$1 = G__48561;
ys__$2 = G__48562;
continue;
}
break;
}
}
});
hyperfiddle.electric.impl.for$.apply_change = (function hyperfiddle$electric$impl$for$apply_change(p__48475,k,v){
var map__48476 = p__48475;
var map__48476__$1 = cljs.core.__destructure_map(map__48476);
var r = map__48476__$1;
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48476__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48476__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var failed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48476__$1,new cljs.core.Keyword(null,"failed","failed",-1397425762));
var temp__5818__auto__ = (index.cljs$core$IFn$_invoke$arity$1 ? index.cljs$core$IFn$_invoke$arity$1(k) : index.call(null,k));
if((temp__5818__auto__ == null)){
return r;
} else {
var i = temp__5818__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(r,new cljs.core.Keyword(null,"vals","vals",768058733),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(vals,i,v),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"failed","failed",-1397425762),(function (){var fexpr__48482 = (((v instanceof hyperfiddle.electric.Failure))?cljs.core.conj:cljs.core.disj);
return (fexpr__48482.cljs$core$IFn$_invoke$arity$2 ? fexpr__48482.cljs$core$IFn$_invoke$arity$2(failed,k) : fexpr__48482.call(null,failed,k));
})()], 0));
}
});
hyperfiddle.electric.impl.for$.values = (function hyperfiddle$electric$impl$for$values(p__48492){
var map__48493 = p__48492;
var map__48493__$1 = cljs.core.__destructure_map(map__48493);
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48493__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48493__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var failed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48493__$1,new cljs.core.Keyword(null,"failed","failed",-1397425762));
var temp__5818__auto__ = cljs.core.seq(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(index,failed)));
if((temp__5818__auto__ == null)){
return vals;
} else {
var vec__48496 = temp__5818__auto__;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48496,(0),null);
return (vals.cljs$core$IFn$_invoke$arity$1 ? vals.cljs$core$IFn$_invoke$arity$1(i) : vals.call(null,i));
}
});
hyperfiddle.electric.impl.for$.seq_patch = (function hyperfiddle$electric$impl$for$seq_patch(var_args){
var G__48502 = arguments.length;
switch (G__48502) {
case 0:
return hyperfiddle.electric.impl.for$.seq_patch.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return hyperfiddle.electric.impl.for$.seq_patch.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hyperfiddle.electric.impl.for$.seq_patch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric.impl.for$.seq_patch.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"vals","vals",768058733),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"failed","failed",-1397425762),cljs.core.PersistentHashSet.EMPTY], null);
}));

(hyperfiddle.electric.impl.for$.seq_patch.cljs$core$IFn$_invoke$arity$1 = (function (r){
return r;
}));

(hyperfiddle.electric.impl.for$.seq_patch.cljs$core$IFn$_invoke$arity$2 = (function (r,diff){
return cljs.core.reduce_kv(hyperfiddle.electric.impl.for$.apply_change,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.for$.apply_cycle,r,cljs.core.get.cljs$core$IFn$_invoke$arity$2(diff,null)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(diff,null));
}));

(hyperfiddle.electric.impl.for$.seq_patch.cljs$lang$maxFixedArity = 2);

/**
 * 
 * Given a function and a continuous flow of collections, returns a continuous flow of vectors of the same size as input
 * collection, where values are produced by the continuous flow returned by the function when called with the continuous
 * flow of values matching the identity provided by key function, defaulting to identity.
 */
hyperfiddle.electric.impl.for$.map_by = (function hyperfiddle$electric$impl$for$map_by(var_args){
var G__48516 = arguments.length;
switch (G__48516) {
case 3:
return hyperfiddle.electric.impl.for$.map_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return hyperfiddle.electric.impl.for$.map_by.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric.impl.for$.map_by.cljs$core$IFn$_invoke$arity$3 = (function (tier,f,_GT_xs){
return hyperfiddle.electric.impl.for$.map_by.cljs$core$IFn$_invoke$arity$4(tier,cljs.core.identity,f,_GT_xs);
}));

(hyperfiddle.electric.impl.for$.map_by.cljs$core$IFn$_invoke$arity$4 = (function (tier,k,f,_GT_xs){
return missionary.core.latest.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle.electric.impl.for$.values,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missionary.core.reductions.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.for$.seq_patch,hyperfiddle.electric.impl.gather.gather(cljs.core.merge,missionary.core.sample((function (p__48521){
var vec__48522 = p__48521;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48522,(0),null);
var _GT_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48522,(1),null);
var G__48525 = id;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__48525)){
return missionary.core.sample(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,id),missionary.core.relieve.cljs$core$IFn$_invoke$arity$2(cljs.core.into,missionary.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.val),hyperfiddle.electric.impl.for$.insert_before(tier),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.vector),_GT_x], 0))));
} else {
return missionary.core.latest.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,id),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.runtime.with$(tier,(function (){var G__48530 = missionary.core.relieve.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,missionary.core.eduction.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.val),_GT_x));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__48530) : f.call(null,G__48530));
})())], 0));

}
}),missionary.core.group_by(cljs.core.key,missionary.core.eduction.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle.electric.impl.for$.seq_diff(k),cljs.core.map.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.for$.entry),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_GT_xs], 0))))))], 0));
}));

(hyperfiddle.electric.impl.for$.map_by.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=hyperfiddle.electric.impl.for.js.map
