goog.provide('missionary.impl.Sequential');
missionary.impl.Sequential.nop = (function missionary$impl$Sequential$nop(){
return null;
});


/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {missionary.impl.Fiber.Fiber}
*/
missionary.impl.Sequential.Process = (function (coroutine,success,failure,resume,rethrow,busy,failed,current,token){
this.coroutine = coroutine;
this.success = success;
this.failure = failure;
this.resume = resume;
this.rethrow = rethrow;
this.busy = busy;
this.failed = failed;
this.current = current;
this.token = token;
this.cljs$lang$protocol_mask$partition0$ = 1;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Sequential.Process.prototype.call = (function (unused__18786__auto__){
var self__ = this;
var self__ = this;
var G__45065 = (arguments.length - (1));
switch (G__45065) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Sequential.Process.prototype.apply = (function (self__,args45063){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args45063)));
}));

(missionary.impl.Sequential.Process.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
(missionary.impl.Sequential.kill.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Sequential.kill.cljs$core$IFn$_invoke$arity$1(this$) : missionary.impl.Sequential.kill.call(null,this$));

return null;
}));

(missionary.impl.Sequential.Process.prototype.missionary$impl$Fiber$Fiber$ = cljs.core.PROTOCOL_SENTINEL);

(missionary.impl.Sequential.Process.prototype.missionary$impl$Fiber$Fiber$park$arity$2 = (function (this$,task){
var self__ = this;
var this$__$1 = this;
return (missionary.impl.Sequential.suspend.cljs$core$IFn$_invoke$arity$2 ? missionary.impl.Sequential.suspend.cljs$core$IFn$_invoke$arity$2(this$__$1,task) : missionary.impl.Sequential.suspend.call(null,this$__$1,task));
}));

(missionary.impl.Sequential.Process.prototype.missionary$impl$Fiber$Fiber$swich$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
throw (new Error("Unsupported operation."));
}));

(missionary.impl.Sequential.Process.prototype.missionary$impl$Fiber$Fiber$fork$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
throw (new Error("Unsupported operation."));
}));

(missionary.impl.Sequential.Process.prototype.missionary$impl$Fiber$Fiber$check$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if((self__.token == null)){
throw (new missionary.Cancelled("Process cancelled."));
} else {
return null;
}
}));

(missionary.impl.Sequential.Process.prototype.missionary$impl$Fiber$Fiber$unpark$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var x = self__.current;
(this$__$1.current = null);

if(self__.failed){
(this$__$1.failed = false);

throw x;
} else {
}

return x;
}));

(missionary.impl.Sequential.Process.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coroutine","coroutine",-775901756,null),new cljs.core.Symbol(null,"success","success",-763789863,null),new cljs.core.Symbol(null,"failure","failure",-1934019890,null),new cljs.core.Symbol(null,"resume","resume",1521959266,null),new cljs.core.Symbol(null,"rethrow","rethrow",1368492186,null),cljs.core.with_meta(new cljs.core.Symbol(null,"busy","busy",1312244726,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"failed","failed",243105765,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Symbol(null,"token","token",429068312,null)], null);
}));

(missionary.impl.Sequential.Process.cljs$lang$type = true);

(missionary.impl.Sequential.Process.cljs$lang$ctorStr = "missionary.impl.Sequential/Process");

(missionary.impl.Sequential.Process.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"missionary.impl.Sequential/Process");
}));

/**
 * Positional factory function for missionary.impl.Sequential/Process.
 */
missionary.impl.Sequential.__GT_Process = (function missionary$impl$Sequential$__GT_Process(coroutine,success,failure,resume,rethrow,busy,failed,current,token){
return (new missionary.impl.Sequential.Process(coroutine,success,failure,resume,rethrow,busy,failed,current,token));
});

missionary.impl.Sequential.kill = (function missionary$impl$Sequential$kill(ps){
var temp__5820__auto__ = ps.token;
if((temp__5820__auto__ == null)){
return null;
} else {
var c = temp__5820__auto__;
(ps.token = null);

return (c.cljs$core$IFn$_invoke$arity$0 ? c.cljs$core$IFn$_invoke$arity$0() : c.call(null));
}
});
missionary.impl.Sequential.suspend = (function missionary$impl$Sequential$suspend(ps,task){
var c_45089 = (function (){var G__45075 = ps.resume;
var G__45076 = ps.rethrow;
return (task.cljs$core$IFn$_invoke$arity$2 ? task.cljs$core$IFn$_invoke$arity$2(G__45075,G__45076) : task.call(null,G__45075,G__45076));
})();
if((ps.token == null)){
(c_45089.cljs$core$IFn$_invoke$arity$0 ? c_45089.cljs$core$IFn$_invoke$arity$0() : c_45089.call(null));
} else {
(ps.token = c_45089);
}

return ps;
});
missionary.impl.Sequential.step = (function missionary$impl$Sequential$step(ps){
if(cljs.core.truth_((ps.busy = cljs.core.not(ps.busy)))){
var prev = missionary.impl.Fiber.fiber;
(missionary.impl.Fiber.fiber = ps);

try{while(true){
var x_45090 = (function (){var fexpr__45080 = ps.coroutine;
return (fexpr__45080.cljs$core$IFn$_invoke$arity$0 ? fexpr__45080.cljs$core$IFn$_invoke$arity$0() : fexpr__45080.call(null));
})();
if((x_45090 === ps)){
if(cljs.core.truth_((ps.busy = cljs.core.not(ps.busy)))){
continue;
} else {
}
} else {
var fexpr__45081_45091 = ps.success;
(fexpr__45081_45091.cljs$core$IFn$_invoke$arity$1 ? fexpr__45081_45091.cljs$core$IFn$_invoke$arity$1(x_45090) : fexpr__45081_45091.call(null,x_45090));
}
break;
}
}catch (e45077){var e_45092 = e45077;
var fexpr__45078_45093 = ps.failure;
(fexpr__45078_45093.cljs$core$IFn$_invoke$arity$1 ? fexpr__45078_45093.cljs$core$IFn$_invoke$arity$1(e_45092) : fexpr__45078_45093.call(null,e_45092));
}
return (missionary.impl.Fiber.fiber = prev);
} else {
return null;
}
});
missionary.impl.Sequential.run = (function missionary$impl$Sequential$run(cr,s,f){
var ps = missionary.impl.Sequential.__GT_Process(cr,s,f,null,null,false,false,null,missionary.impl.Sequential.nop);
(ps.resume = (function (x){
(ps.current = x);

missionary.impl.Sequential.step(ps);

return null;
}));

(ps.rethrow = (function (e){
(ps.failed = true);

(ps.current = e);

missionary.impl.Sequential.step(ps);

return null;
}));

missionary.impl.Sequential.step(ps);

return ps;
});

//# sourceMappingURL=missionary.impl.Sequential.js.map
