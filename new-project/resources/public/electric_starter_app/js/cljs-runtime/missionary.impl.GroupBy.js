goog.provide('missionary.impl.GroupBy');





/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
missionary.impl.GroupBy.Process = (function (keyfn,notifier,terminator,key,value,input,table,load,live,busy,done){
this.keyfn = keyfn;
this.notifier = notifier;
this.terminator = terminator;
this.key = key;
this.value = value;
this.input = input;
this.table = table;
this.load = load;
this.live = live;
this.busy = busy;
this.done = done;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.GroupBy.Process.prototype.call = (function (unused__18786__auto__){
var self__ = this;
var self__ = this;
var G__44656 = (arguments.length - (1));
switch (G__44656) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.GroupBy.Process.prototype.apply = (function (self__,args44655){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args44655)));
}));

(missionary.impl.GroupBy.Process.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var p = this;
(missionary.impl.GroupBy.kill.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.GroupBy.kill.cljs$core$IFn$_invoke$arity$1(p) : missionary.impl.GroupBy.kill.call(null,p));

return null;
}));

(missionary.impl.GroupBy.Process.prototype.cljs$core$IFn$_invoke$arity$2 = (function (n,t){
var self__ = this;
var p = this;
return (missionary.impl.GroupBy.group.cljs$core$IFn$_invoke$arity$3 ? missionary.impl.GroupBy.group.cljs$core$IFn$_invoke$arity$3(p,n,t) : missionary.impl.GroupBy.group.call(null,p,n,t));
}));

(missionary.impl.GroupBy.Process.prototype.cljs$core$IDeref$_deref$arity$1 = (function (p){
var self__ = this;
var p__$1 = this;
return (missionary.impl.GroupBy.sample.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.GroupBy.sample.cljs$core$IFn$_invoke$arity$1(p__$1) : missionary.impl.GroupBy.sample.call(null,p__$1));
}));

(missionary.impl.GroupBy.Process.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keyfn","keyfn",-1874375437,null),new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.Symbol(null,"table","table",1075588491,null),cljs.core.with_meta(new cljs.core.Symbol(null,"load","load",321890343,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"live","live",30383488,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"busy","busy",1312244726,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"done","done",750687339,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null))], null);
}));

(missionary.impl.GroupBy.Process.cljs$lang$type = true);

(missionary.impl.GroupBy.Process.cljs$lang$ctorStr = "missionary.impl.GroupBy/Process");

(missionary.impl.GroupBy.Process.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"missionary.impl.GroupBy/Process");
}));

/**
 * Positional factory function for missionary.impl.GroupBy/Process.
 */
missionary.impl.GroupBy.__GT_Process = (function missionary$impl$GroupBy$__GT_Process(keyfn,notifier,terminator,key,value,input,table,load,live,busy,done){
return (new missionary.impl.GroupBy.Process(keyfn,notifier,terminator,key,value,input,table,load,live,busy,done));
});


/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
missionary.impl.GroupBy.Group = (function (process,key,notifier,terminator){
this.process = process;
this.key = key;
this.notifier = notifier;
this.terminator = terminator;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.GroupBy.Group.prototype.call = (function (unused__18786__auto__){
var self__ = this;
var self__ = this;
var G__44659 = (arguments.length - (1));
switch (G__44659) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.GroupBy.Group.prototype.apply = (function (self__,args44658){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args44658)));
}));

(missionary.impl.GroupBy.Group.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var g = this;
(missionary.impl.GroupBy.cancel.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.GroupBy.cancel.cljs$core$IFn$_invoke$arity$1(g) : missionary.impl.GroupBy.cancel.call(null,g));

return null;
}));

(missionary.impl.GroupBy.Group.prototype.cljs$core$IDeref$_deref$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return (missionary.impl.GroupBy.consume.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.GroupBy.consume.cljs$core$IFn$_invoke$arity$1(g__$1) : missionary.impl.GroupBy.consume.call(null,g__$1));
}));

(missionary.impl.GroupBy.Group.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"process","process",-1011242831,null),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null)], null);
}));

(missionary.impl.GroupBy.Group.cljs$lang$type = true);

(missionary.impl.GroupBy.Group.cljs$lang$ctorStr = "missionary.impl.GroupBy/Group");

(missionary.impl.GroupBy.Group.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"missionary.impl.GroupBy/Group");
}));

/**
 * Positional factory function for missionary.impl.GroupBy/Group.
 */
missionary.impl.GroupBy.__GT_Group = (function missionary$impl$GroupBy$__GT_Group(process,key,notifier,terminator){
return (new missionary.impl.GroupBy.Group(process,key,notifier,terminator));
});

missionary.impl.GroupBy.kill = (function missionary$impl$GroupBy$kill(p){
if(cljs.core.truth_(p.live)){
(p.live = false);

var fexpr__44660 = p.input;
return (fexpr__44660.cljs$core$IFn$_invoke$arity$0 ? fexpr__44660.cljs$core$IFn$_invoke$arity$0() : fexpr__44660.call(null));
} else {
return null;
}
});
missionary.impl.GroupBy.step = (function missionary$impl$GroupBy$step(i,m){
return ((i + (1)) & m);
});
missionary.impl.GroupBy.group = (function missionary$impl$GroupBy$group(p,n,t){
var k = p.key;
var g = missionary.impl.GroupBy.__GT_Group(p,k,n,t);
var table = p.table;
if((k === p)){
} else {
(p.key = p);

var s_44693 = table.length;
var m_44694 = (s_44693 - (1));
var i_44695 = (cljs.core.hash(k) & m_44694);
while(true){
var G__44661_44696 = (table[i_44695]);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__44661_44696)){
(table[i_44695] = g);
} else {
var G__44697 = missionary.impl.GroupBy.step(i_44695,m_44694);
i_44695 = G__44697;
continue;

}
break;
}

var ss_44698 = (s_44693 << (1));
if((ss_44698 <= ((3) * (p.load = (p.load + (1)))))){
var mm_44699 = (ss_44698 - (1));
var larger_44700 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(ss_44698);
(p.table = larger_44700);

var n__5589__auto___44701 = s_44693;
var i_44702 = (0);
while(true){
if((i_44702 < n__5589__auto___44701)){
var temp__5820__auto___44703 = (table[i_44702]);
if((temp__5820__auto___44703 == null)){
} else {
var h_44704 = temp__5820__auto___44703;
var j_44705 = (cljs.core.hash(h_44704.key) & mm_44699);
while(true){
var G__44664_44706 = (larger_44700[j_44705]);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__44664_44706)){
(larger_44700[j_44705] = h_44704);
} else {
var G__44708 = missionary.impl.GroupBy.step(j_44705,mm_44699);
j_44705 = G__44708;
continue;

}
break;
}
}

var G__44709 = (i_44702 + (1));
i_44702 = G__44709;
continue;
} else {
}
break;
}
} else {
}
}

(n.cljs$core$IFn$_invoke$arity$0 ? n.cljs$core$IFn$_invoke$arity$0() : n.call(null));

return g;
});
missionary.impl.GroupBy.cancel = (function missionary$impl$GroupBy$cancel(g){
var p = g.process;
var k = g.key;
if(cljs.core.truth_(p.live)){
if((k === p)){
return null;
} else {
(g.key = p);

var table = p.table;
var m = (table.length - (1));
var i = (function (){var i = (cljs.core.hash(k) & m);
while(true){
if((g === (table[i]))){
return i;
} else {
var G__44710 = missionary.impl.GroupBy.step(i,m);
i = G__44710;
continue;
}
break;
}
})();
(table[i] = null);

(p.load = (p.load - (1)));

var i_44711__$1 = missionary.impl.GroupBy.step(i,m);
while(true){
var temp__5820__auto___44712 = (table[i_44711__$1]);
if((temp__5820__auto___44712 == null)){
} else {
var h_44713 = temp__5820__auto___44712;
var j_44714 = (cljs.core.hash(h_44713.key) & m);
if((i_44711__$1 === j_44714)){
} else {
(table[i_44711__$1] = null);

var j_44715__$1 = j_44714;
while(true){
if(((table[j_44715__$1]) == null)){
(table[j_44715__$1] = h_44713);
} else {
var G__44716 = missionary.impl.GroupBy.step(j_44715__$1,m);
j_44715__$1 = G__44716;
continue;
}
break;
}
}

var G__44717 = missionary.impl.GroupBy.step(i_44711__$1,m);
i_44711__$1 = G__44717;
continue;
}
break;
}

var fexpr__44665 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,p.key))?p.notifier:g.notifier);
return (fexpr__44665.cljs$core$IFn$_invoke$arity$0 ? fexpr__44665.cljs$core$IFn$_invoke$arity$0() : fexpr__44665.call(null));
}
} else {
return null;
}
});
missionary.impl.GroupBy.transfer = (function missionary$impl$GroupBy$transfer(p){
while(true){
if(cljs.core.truth_((p.busy = cljs.core.not(p.busy)))){
if(cljs.core.truth_(p.done)){
(p.live = false);

var temp__5820__auto___44718 = p.table;
if((temp__5820__auto___44718 == null)){
} else {
var table_44719 = temp__5820__auto___44718;
(p.table = null);

var n__5589__auto___44720 = table_44719.length;
var i_44721 = (0);
while(true){
if((i_44721 < n__5589__auto___44720)){
var temp__5820__auto___44722__$1 = (table_44719[i_44721]);
if((temp__5820__auto___44722__$1 == null)){
} else {
var g_44723 = temp__5820__auto___44722__$1;
var fexpr__44666_44724 = g_44723.terminator;
(fexpr__44666_44724.cljs$core$IFn$_invoke$arity$0 ? fexpr__44666_44724.cljs$core$IFn$_invoke$arity$0() : fexpr__44666_44724.call(null));
}

var G__44725 = (i_44721 + (1));
i_44721 = G__44725;
continue;
} else {
}
break;
}
}

var fexpr__44667 = p.terminator;
return (fexpr__44667.cljs$core$IFn$_invoke$arity$0 ? fexpr__44667.cljs$core$IFn$_invoke$arity$0() : fexpr__44667.call(null));
} else {
if((p === p.value)){
var table = p.table;
try{var k = (p.key = (function (){var G__44673 = (p.value = cljs.core.deref(p.input));
var fexpr__44672 = p.keyfn;
return (fexpr__44672.cljs$core$IFn$_invoke$arity$1 ? fexpr__44672.cljs$core$IFn$_invoke$arity$1(G__44673) : fexpr__44672.call(null,G__44673));
})());
var m = (table.length - (1));
var i = (cljs.core.hash(k) & m);
while(true){
var temp__5818__auto__ = (table[i]);
if((temp__5818__auto__ == null)){
var fexpr__44674 = p.notifier;
return (fexpr__44674.cljs$core$IFn$_invoke$arity$0 ? fexpr__44674.cljs$core$IFn$_invoke$arity$0() : fexpr__44674.call(null));
} else {
var h = temp__5818__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,h.key)){
var fexpr__44675 = h.notifier;
return (fexpr__44675.cljs$core$IFn$_invoke$arity$0 ? fexpr__44675.cljs$core$IFn$_invoke$arity$0() : fexpr__44675.call(null));
} else {
var G__44727 = missionary.impl.GroupBy.step(i,m);
i = G__44727;
continue;
}
}
break;
}
}catch (e44668){var e = e44668;
(p.value = e);

(p.table = null);

missionary.impl.GroupBy.kill(p);

var n__5589__auto___44730 = table.length;
var i_44731 = (0);
while(true){
if((i_44731 < n__5589__auto___44730)){
var temp__5820__auto___44732 = (table[i_44731]);
if((temp__5820__auto___44732 == null)){
} else {
var g_44733 = temp__5820__auto___44732;
var fexpr__44670_44734 = g_44733.terminator;
(fexpr__44670_44734.cljs$core$IFn$_invoke$arity$0 ? fexpr__44670_44734.cljs$core$IFn$_invoke$arity$0() : fexpr__44670_44734.call(null));
}

var G__44735 = (i_44731 + (1));
i_44731 = G__44735;
continue;
} else {
}
break;
}

var fexpr__44671 = p.notifier;
return (fexpr__44671.cljs$core$IFn$_invoke$arity$0 ? fexpr__44671.cljs$core$IFn$_invoke$arity$0() : fexpr__44671.call(null));
}} else {
try{cljs.core.deref(p.input);
}catch (e44676){var __44736 = e44676;
}
continue;
}
}
} else {
return null;
}
break;
}
});
missionary.impl.GroupBy.sample = (function missionary$impl$GroupBy$sample(p){
var k = p.key;
if((k === p)){
missionary.impl.GroupBy.transfer(p);

throw p.value;
} else {
return cljs.core.__GT_MapEntry(k,p,null);
}
});
missionary.impl.GroupBy.consume = (function missionary$impl$GroupBy$consume(g){
var p = g.process;
if((p === g.key)){
var fexpr__44679_44737 = g.terminator;
(fexpr__44679_44737.cljs$core$IFn$_invoke$arity$0 ? fexpr__44679_44737.cljs$core$IFn$_invoke$arity$0() : fexpr__44679_44737.call(null));

throw (new missionary.Cancelled("Group consumer cancelled."));
} else {
var x = p.value;
(p.value = p);

(p.key = p);

missionary.impl.GroupBy.transfer(p);

return x;
}
});
missionary.impl.GroupBy.run = (function missionary$impl$GroupBy$run(k,f,n,t){
var p = missionary.impl.GroupBy.__GT_Process(k,n,t,null,null,null,cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((8)),(0),true,true,false);
(p.key = p);

(p.value = p);

(p.input = (function (){var G__44683 = (function (){
return missionary.impl.GroupBy.transfer(p);
});
var G__44684 = (function (){
(p.done = true);

return missionary.impl.GroupBy.transfer(p);
});
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__44683,G__44684) : f.call(null,G__44683,G__44684));
})());

missionary.impl.GroupBy.transfer(p);

return p;
});

//# sourceMappingURL=missionary.impl.GroupBy.js.map
