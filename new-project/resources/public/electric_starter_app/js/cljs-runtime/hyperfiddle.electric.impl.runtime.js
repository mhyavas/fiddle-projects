goog.provide('hyperfiddle.electric.impl.runtime');
hyperfiddle.electric.impl.runtime.fail = (function hyperfiddle$electric$impl$runtime$fail(exception,_in_scope_stacktrace){
throw exception;
});
hyperfiddle.electric.impl.runtime.failure = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$1((function (p1__47725_SHARP_){
if((p1__47725_SHARP_ instanceof hyperfiddle.electric.Failure)){
return p1__47725_SHARP_;
} else {
return null;
}
}));
hyperfiddle.electric.impl.runtime.pending = (new hyperfiddle.electric.Failure((new hyperfiddle.electric.Pending())));
hyperfiddle.electric.impl.runtime.error = (function hyperfiddle$electric$impl$runtime$error(msg){
return (new Error(msg));
});
hyperfiddle.electric.impl.runtime.pst = (function hyperfiddle$electric$impl$runtime$pst(e){
return console.error(e);
});
hyperfiddle.electric.impl.runtime.select_debug_info = (function hyperfiddle$electric$impl$runtime$select_debug_info(debug_info){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(debug_info,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425)], null)),contrib.data.select_ns(new cljs.core.Keyword(null,"hyperfiddle.electric.debug","hyperfiddle.electric.debug",-987645572),debug_info)], 0));
});
hyperfiddle.electric.impl.runtime.check_failure = (function hyperfiddle$electric$impl$runtime$check_failure(debug_info,_LT_x){
return missionary.core.latest.cljs$core$IFn$_invoke$arity$variadic((function (x){
if((x instanceof hyperfiddle.electric.Failure)){
return hyperfiddle.electric.debug.error.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.runtime.select_debug_info(debug_info),x);
} else {
return x;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_LT_x], 0));
});
hyperfiddle.electric.impl.runtime.handle_apply_error = (function hyperfiddle$electric$impl$runtime$handle_apply_error(debug_info,args,error){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","fail","hyperfiddle.electric.impl.runtime/fail",-1672627762,null),new cljs.core.Keyword("hyperfiddle.electric.debug","name","hyperfiddle.electric.debug/name",-35961215).cljs$core$IFn$_invoke$arity$1(debug_info))){
var vec__47731 = args;
var thrown = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47731,(0),null);
var context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47731,(1),null);
return hyperfiddle.electric.debug.error.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.select_debug_info(debug_info),new cljs.core.Keyword("hyperfiddle.electric.debug","args","hyperfiddle.electric.debug/args",-1101355176),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [thrown], null)),(new hyperfiddle.electric.Failure(error)),context);
} else {
return hyperfiddle.electric.debug.error.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.select_debug_info(debug_info),new cljs.core.Keyword("hyperfiddle.electric.debug","args","hyperfiddle.electric.debug/args",-1101355176),args),(new hyperfiddle.electric.Failure(error)));
}
});
hyperfiddle.electric.impl.runtime.latest_apply = (function hyperfiddle$electric$impl$runtime$latest_apply(var_args){
var args__5728__auto__ = [];
var len__5722__auto___48328 = arguments.length;
var i__5723__auto___48329 = (0);
while(true){
if((i__5723__auto___48329 < len__5722__auto___48328)){
args__5728__auto__.push((arguments[i__5723__auto___48329]));

var G__48330 = (i__5723__auto___48329 + (1));
i__5723__auto___48329 = G__48330;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((1) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((1)),(0),null)):null);
return hyperfiddle.electric.impl.runtime.latest_apply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5729__auto__);
});

(hyperfiddle.electric.impl.runtime.latest_apply.cljs$core$IFn$_invoke$arity$variadic = (function (debug_info,args){
contrib.assert._check(cljs.core.list(new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"some?","some?",234752293,null)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.every_QMARK_,cljs.core.some_QMARK_),new cljs.core.Symbol(null,"args","args",-1338879193,null),args,debug_info);

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(missionary.core.latest,(function() { 
var G__48331__delegate = function (f,args__$1){
var temp__5814__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.failure,f,args__$1);
if(cljs.core.truth_(temp__5814__auto__)){
var err = temp__5814__auto__;
return hyperfiddle.electric.debug.error.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.select_debug_info(debug_info),new cljs.core.Keyword("hyperfiddle.electric.debug","args","hyperfiddle.electric.debug/args",-1101355176),args__$1),err);
} else {
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
}catch (e47741){var e = e47741;
return hyperfiddle.electric.impl.runtime.handle_apply_error(debug_info,args__$1,e);
}}
};
var G__48331 = function (f,var_args){
var args__$1 = null;
if (arguments.length > 1) {
var G__48332__i = 0, G__48332__a = new Array(arguments.length -  1);
while (G__48332__i < G__48332__a.length) {G__48332__a[G__48332__i] = arguments[G__48332__i + 1]; ++G__48332__i;}
  args__$1 = new cljs.core.IndexedSeq(G__48332__a,0,null);
} 
return G__48331__delegate.call(this,f,args__$1);};
G__48331.cljs$lang$maxFixedArity = 1;
G__48331.cljs$lang$applyTo = (function (arglist__48333){
var f = cljs.core.first(arglist__48333);
var args__$1 = cljs.core.rest(arglist__48333);
return G__48331__delegate(f,args__$1);
});
G__48331.cljs$core$IFn$_invoke$arity$variadic = G__48331__delegate;
return G__48331;
})()
,args);
}));

(hyperfiddle.electric.impl.runtime.latest_apply.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(hyperfiddle.electric.impl.runtime.latest_apply.cljs$lang$applyTo = (function (seq47734){
var G__47735 = cljs.core.first(seq47734);
var seq47734__$1 = cljs.core.next(seq47734);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47735,seq47734__$1);
}));

hyperfiddle.electric.impl.runtime.causal = (function hyperfiddle$electric$impl$runtime$causal(debug_info,x,y){
return missionary.core.latest.cljs$core$IFn$_invoke$arity$variadic((function (x__$1,y__$1){
var args = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null);
var temp__5814__auto__ = hyperfiddle.electric.impl.runtime.failure(x__$1,y__$1);
if(cljs.core.truth_(temp__5814__auto__)){
var err = temp__5814__auto__;
return hyperfiddle.electric.debug.error.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(debug_info,new cljs.core.Keyword("hyperfiddle.electric.debug","args","hyperfiddle.electric.debug/args",-1101355176),args),err);
} else {
var fexpr__47744 = cljs.core.PersistentArrayMap.EMPTY;
return (fexpr__47744.cljs$core$IFn$_invoke$arity$2 ? fexpr__47744.cljs$core$IFn$_invoke$arity$2(x__$1,y__$1) : fexpr__47744.call(null,x__$1,y__$1));
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,y], 0));
});
hyperfiddle.electric.impl.runtime.latest_first = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(missionary.core.latest,(function (x,y){
if((y instanceof hyperfiddle.electric.Failure)){
return y;
} else {
return x;
}
}));
hyperfiddle.electric.impl.runtime.pure = (function hyperfiddle$electric$impl$runtime$pure(x){
return missionary.core.cp_STAR_((function (){var cr47751_block_0 = (function hyperfiddle$electric$impl$runtime$pure_$_cr47751_block_0(cr47751_state){
try{var cr47751_place_0 = x;
(cr47751_state[(0)] = null);

return cr47751_place_0;
}catch (e47759){var cr47751_exception = e47759;
(cr47751_state[(0)] = null);

throw cr47751_exception;
}});
return cloroutine.impl.coroutine((function (){var G__47760 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__47760[(0)] = cr47751_block_0);

return G__47760;
})());
})());
});
hyperfiddle.electric.impl.runtime.empty_event = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"acks","acks",707064729),(0),new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"freeze","freeze",2043466309),cljs.core.PersistentHashSet.EMPTY], null);

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
hyperfiddle.electric.impl.runtime.It = (function (state,cancel,transfer){
this.state = state;
this.cancel = cancel;
this.transfer = transfer;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.runtime.It.prototype.call = (function (unused__18786__auto__){
var self__ = this;
var self__ = this;
var G__47792 = (arguments.length - (1));
switch (G__47792) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.runtime.It.prototype.apply = (function (self__,args47761){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args47761)));
}));

(hyperfiddle.electric.impl.runtime.It.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return (self__.cancel.cljs$core$IFn$_invoke$arity$1 ? self__.cancel.cljs$core$IFn$_invoke$arity$1(self__.state) : self__.cancel.call(null,self__.state));
}));

(hyperfiddle.electric.impl.runtime.It.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.transfer.cljs$core$IFn$_invoke$arity$1 ? self__.transfer.cljs$core$IFn$_invoke$arity$1(self__.state) : self__.transfer.call(null,self__.state));
}));

(hyperfiddle.electric.impl.runtime.It.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"cancel","cancel",-323556833,null),new cljs.core.Symbol(null,"transfer","transfer",1967954927,null)], null);
}));

(hyperfiddle.electric.impl.runtime.It.cljs$lang$type = true);

(hyperfiddle.electric.impl.runtime.It.cljs$lang$ctorStr = "hyperfiddle.electric.impl.runtime/It");

(hyperfiddle.electric.impl.runtime.It.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"hyperfiddle.electric.impl.runtime/It");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.runtime/It.
 */
hyperfiddle.electric.impl.runtime.__GT_It = (function hyperfiddle$electric$impl$runtime$__GT_It(state,cancel,transfer){
return (new hyperfiddle.electric.impl.runtime.It(state,cancel,transfer));
});


/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47795 = (function (it,meta47796){
this.it = it;
this.meta47796 = meta47796;
this.cljs$lang$protocol_mask$partition0$ = 425985;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47795.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47797,meta47796__$1){
var self__ = this;
var _47797__$1 = this;
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47795(self__.it,meta47796__$1));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47795.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47797){
var self__ = this;
var _47797__$1 = this;
return self__.meta47796;
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47795.prototype.call = (function (unused__18786__auto__){
var self__ = this;
var self__ = this;
var G__47801 = (arguments.length - (1));
switch (G__47801) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47795.prototype.apply = (function (self__,args47798){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args47798)));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47795.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return (self__.it.cljs$core$IFn$_invoke$arity$0 ? self__.it.cljs$core$IFn$_invoke$arity$0() : self__.it.call(null));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47795.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
try{return cljs.core.deref(self__.it);
}catch (e47804){if((e47804 instanceof missionary.Cancelled)){
var e = e47804;
return (new hyperfiddle.electric.Failure(e));
} else {
throw e47804;

}
}}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47795.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"it","it",-1630841225,null),new cljs.core.Symbol(null,"meta47796","meta47796",1583415477,null)], null);
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47795.cljs$lang$type = true);

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47795.cljs$lang$ctorStr = "hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime47795");

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47795.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime47795");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime47795.
 */
hyperfiddle.electric.impl.runtime.__GT_t_hyperfiddle$electric$impl$runtime47795 = (function hyperfiddle$electric$impl$runtime$__GT_t_hyperfiddle$electric$impl$runtime47795(it,meta47796){
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47795(it,meta47796));
});


hyperfiddle.electric.impl.runtime.lift_cancelled = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,(function (it){
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47795(it,cljs.core.PersistentArrayMap.EMPTY));
}));
hyperfiddle.electric.impl.runtime.signal = (function hyperfiddle$electric$impl$runtime$signal(_LT_x){
return missionary.core.signal_BANG_(hyperfiddle.electric.impl.runtime.lift_cancelled(_LT_x));
});
hyperfiddle.electric.impl.runtime.this$ = cljs.core.volatile_BANG_(null);
hyperfiddle.electric.impl.runtime.context_slot_root = ((0) | (0));
hyperfiddle.electric.impl.runtime.context_slot_local_id = ((1) | (0));
hyperfiddle.electric.impl.runtime.context_slot_remote_id = ((2) | (0));
hyperfiddle.electric.impl.runtime.context_slot_pending_rpos = ((3) | (0));
hyperfiddle.electric.impl.runtime.context_slot_pending_wpos = ((4) | (0));
hyperfiddle.electric.impl.runtime.context_slot_pending_buffer = ((5) | (0));
hyperfiddle.electric.impl.runtime.context_slot_frame_store = ((6) | (0));
hyperfiddle.electric.impl.runtime.context_slot_event = ((7) | (0));
hyperfiddle.electric.impl.runtime.context_slot_check = ((8) | (0));
hyperfiddle.electric.impl.runtime.context_slot_notifier = ((9) | (0));
hyperfiddle.electric.impl.runtime.context_slot_terminator = ((10) | (0));
hyperfiddle.electric.impl.runtime.context_slot_incoming = ((11) | (0));
hyperfiddle.electric.impl.runtime.context_slots = ((12) | (0));
hyperfiddle.electric.impl.runtime.tier_slot_parent = ((0) | (0));
hyperfiddle.electric.impl.runtime.tier_slot_position = ((1) | (0));
hyperfiddle.electric.impl.runtime.tier_slot_buffer = ((2) | (0));
hyperfiddle.electric.impl.runtime.tier_slot_size = ((3) | (0));
hyperfiddle.electric.impl.runtime.tier_slot_foreigns = ((4) | (0));
hyperfiddle.electric.impl.runtime.tier_slot_hooks = ((5) | (0));
hyperfiddle.electric.impl.runtime.tier_slot_vars = ((6) | (0));
hyperfiddle.electric.impl.runtime.tier_slot_remote = ((7) | (0));
hyperfiddle.electric.impl.runtime.tier_slots = ((8) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_context = ((0) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_parent = ((1) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_id = ((2) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_position = ((3) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_foreign = ((4) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_static = ((5) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_dynamic = ((6) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_variables = ((7) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_sources = ((8) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_targets = ((9) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_inputs = ((10) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_tiers = ((11) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_constants = ((12) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_last_variable = ((13) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_last_constant = ((14) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_last_source = ((15) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_last_target = ((16) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_last_input = ((17) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_last_output = ((18) | (0));
hyperfiddle.electric.impl.runtime.frame_slots = ((19) | (0));
hyperfiddle.electric.impl.runtime.input_slot_frame = ((0) | (0));
hyperfiddle.electric.impl.runtime.input_slot_notifier = ((1) | (0));
hyperfiddle.electric.impl.runtime.input_slot_terminator = ((2) | (0));
hyperfiddle.electric.impl.runtime.input_slot_current = ((3) | (0));
hyperfiddle.electric.impl.runtime.input_slot_dirty = ((4) | (0));
hyperfiddle.electric.impl.runtime.input_slot_check = ((5) | (0));
hyperfiddle.electric.impl.runtime.input_slot_pending = ((6) | (0));
hyperfiddle.electric.impl.runtime.input_slot_cancel = ((7) | (0));
hyperfiddle.electric.impl.runtime.input_slots = ((8) | (0));
hyperfiddle.electric.impl.runtime.output_slot_input = ((0) | (0));
hyperfiddle.electric.impl.runtime.output_slot_id = ((1) | (0));
hyperfiddle.electric.impl.runtime.output_slot_iterator = ((2) | (0));
hyperfiddle.electric.impl.runtime.output_slot_current = ((3) | (0));
hyperfiddle.electric.impl.runtime.output_slot_dirty = ((4) | (0));
hyperfiddle.electric.impl.runtime.output_slot_done = ((5) | (0));
hyperfiddle.electric.impl.runtime.output_slot_prev = ((6) | (0));
hyperfiddle.electric.impl.runtime.output_slot_next = ((7) | (0));
hyperfiddle.electric.impl.runtime.output_slot_time = ((8) | (0));
hyperfiddle.electric.impl.runtime.output_slots = ((9) | (0));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47844 = (function (n,t,tier,frame,id,meta47845){
this.n = n;
this.t = t;
this.tier = tier;
this.frame = frame;
this.id = id;
this.meta47845 = meta47845;
this.cljs$lang$protocol_mask$partition0$ = 425985;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47846,meta47845__$1){
var self__ = this;
var _47846__$1 = this;
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47844(self__.n,self__.t,self__.tier,self__.frame,self__.id,meta47845__$1));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47844.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47846){
var self__ = this;
var _47846__$1 = this;
return self__.meta47845;
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47844.prototype.call = (function (unused__18786__auto__){
var self__ = this;
var self__ = this;
var G__47853 = (arguments.length - (1));
switch (G__47853) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47844.prototype.apply = (function (self__,args47848){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args47848)));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47844.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return null;
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47844.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.t.cljs$core$IFn$_invoke$arity$0 ? self__.t.cljs$core$IFn$_invoke$arity$0() : self__.t.call(null));

return self__.id;
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47844.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"t","t",242699008,null),cljs.core.with_meta(new cljs.core.Symbol(null,"tier","tier",568638153,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"objects","objects",-554722035,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"frame","frame",-70551061,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"objects","objects",-554722035,null)], null)),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"meta47845","meta47845",-1258846984,null)], null);
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47844.cljs$lang$type = true);

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47844.cljs$lang$ctorStr = "hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime47844");

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47844.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime47844");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime47844.
 */
hyperfiddle.electric.impl.runtime.__GT_t_hyperfiddle$electric$impl$runtime47844 = (function hyperfiddle$electric$impl$runtime$__GT_t_hyperfiddle$electric$impl$runtime47844(n,t,tier,frame,id,meta47845){
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47844(n,t,tier,frame,id,meta47845));
});


hyperfiddle.electric.impl.runtime.frame_id = (function hyperfiddle$electric$impl$runtime$frame_id(){
return (function (n,t){
var tier = cljs.core.deref(hyperfiddle.electric.impl.runtime.this$);
var frame = (tier[hyperfiddle.electric.impl.runtime.tier_slot_parent]);
var id = (frame[hyperfiddle.electric.impl.runtime.frame_slot_id]);
(n.cljs$core$IFn$_invoke$arity$0 ? n.cljs$core$IFn$_invoke$arity$0() : n.call(null));

return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime47844(n,t,tier,frame,id,cljs.core.PersistentArrayMap.EMPTY));
});
});
hyperfiddle.electric.impl.runtime.aswap = (function hyperfiddle$electric$impl$runtime$aswap(var_args){
var G__47887 = arguments.length;
switch (G__47887) {
case 3:
return hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var args_arr__5747__auto__ = [];
var len__5722__auto___48347 = arguments.length;
var i__5723__auto___48348 = (0);
while(true){
if((i__5723__auto___48348 < len__5722__auto___48347)){
args_arr__5747__auto__.push((arguments[i__5723__auto___48348]));

var G__48349 = (i__5723__auto___48348 + (1));
i__5723__auto___48348 = G__48349;
continue;
} else {
}
break;
}

var argseq__5748__auto__ = ((((6) < args_arr__5747__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5747__auto__.slice((6)),(0),null)):null);
return hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__5748__auto__);

}
});

(hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$3 = (function (arr,slot,f){
return (arr[slot] = (function (){var G__47896 = (arr[slot]);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__47896) : f.call(null,G__47896));
})());
}));

(hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$4 = (function (arr,slot,f,a){
return (arr[slot] = (function (){var G__47899 = (arr[slot]);
var G__47900 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__47899,G__47900) : f.call(null,G__47899,G__47900));
})());
}));

(hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$5 = (function (arr,slot,f,a,b){
return (arr[slot] = (function (){var G__47903 = (arr[slot]);
var G__47904 = a;
var G__47905 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__47903,G__47904,G__47905) : f.call(null,G__47903,G__47904,G__47905));
})());
}));

(hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$6 = (function (arr,slot,f,a,b,c){
return (arr[slot] = (function (){var G__47909 = (arr[slot]);
var G__47910 = a;
var G__47911 = b;
var G__47912 = c;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__47909,G__47910,G__47911,G__47912) : f.call(null,G__47909,G__47910,G__47911,G__47912));
})());
}));

(hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$variadic = (function (arr,slot,f,a,b,c,ds){
return (arr[slot] = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,(arr[slot]),a,b,c,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ds], 0)));
}));

/** @this {Function} */
(hyperfiddle.electric.impl.runtime.aswap.cljs$lang$applyTo = (function (seq47875){
var G__47877 = cljs.core.first(seq47875);
var seq47875__$1 = cljs.core.next(seq47875);
var G__47878 = cljs.core.first(seq47875__$1);
var seq47875__$2 = cljs.core.next(seq47875__$1);
var G__47879 = cljs.core.first(seq47875__$2);
var seq47875__$3 = cljs.core.next(seq47875__$2);
var G__47880 = cljs.core.first(seq47875__$3);
var seq47875__$4 = cljs.core.next(seq47875__$3);
var G__47881 = cljs.core.first(seq47875__$4);
var seq47875__$5 = cljs.core.next(seq47875__$4);
var G__47882 = cljs.core.first(seq47875__$5);
var seq47875__$6 = cljs.core.next(seq47875__$5);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47877,G__47878,G__47879,G__47880,G__47881,G__47882,seq47875__$6);
}));

(hyperfiddle.electric.impl.runtime.aswap.cljs$lang$maxFixedArity = (6));

hyperfiddle.electric.impl.runtime.make_context = (function hyperfiddle$electric$impl$runtime$make_context(){
var G__47929 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.runtime.context_slots);
(G__47929[hyperfiddle.electric.impl.runtime.context_slot_local_id] = cljs.core.identity((0)));

(G__47929[hyperfiddle.electric.impl.runtime.context_slot_remote_id] = cljs.core.identity((0)));

(G__47929[hyperfiddle.electric.impl.runtime.context_slot_pending_rpos] = cljs.core.identity((0)));

(G__47929[hyperfiddle.electric.impl.runtime.context_slot_pending_wpos] = cljs.core.identity((0)));

(G__47929[hyperfiddle.electric.impl.runtime.context_slot_pending_buffer] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2)));

(G__47929[hyperfiddle.electric.impl.runtime.context_slot_frame_store] = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY));

return G__47929;
});
hyperfiddle.electric.impl.runtime.make_tier = (function hyperfiddle$electric$impl$runtime$make_tier(parent,position){
return ((parent[hyperfiddle.electric.impl.runtime.frame_slot_tiers])[(position | (0))] = (function (){var G__47933 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.runtime.tier_slots);
(G__47933[hyperfiddle.electric.impl.runtime.tier_slot_parent] = parent);

(G__47933[hyperfiddle.electric.impl.runtime.tier_slot_position] = position);

(G__47933[hyperfiddle.electric.impl.runtime.tier_slot_buffer] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((8)));

(G__47933[hyperfiddle.electric.impl.runtime.tier_slot_size] = cljs.core.identity(((0) | (0))));

(G__47933[hyperfiddle.electric.impl.runtime.tier_slot_foreigns] = cljs.core.PersistentArrayMap.EMPTY);

(G__47933[hyperfiddle.electric.impl.runtime.tier_slot_hooks] = cljs.core.PersistentArrayMap.EMPTY);

return G__47933;
})());
});
hyperfiddle.electric.impl.runtime.inject_foreigns = (function hyperfiddle$electric$impl$runtime$inject_foreigns(frame,vars,foreign){
return cljs.core.reduce_kv((function (m,sym,_LT_x){
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(vars),sym);
var proc = hyperfiddle.electric.impl.runtime.signal(_LT_x);
((frame[hyperfiddle.electric.impl.runtime.frame_slot_foreign])[cljs.core.count(m)] = proc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(vars,cljs.core.assoc,sym,proc);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,sym,prev);
}),cljs.core.PersistentArrayMap.EMPTY,foreign);
});
hyperfiddle.electric.impl.runtime.undo_foreigns = (function hyperfiddle$electric$impl$runtime$undo_foreigns(vars,prevs){
return cljs.core.reduce_kv((function (vrs,sym,_LT_x){
var G__47945 = vrs;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(G__47945,cljs.core.assoc,sym,_LT_x);

return G__47945;
}),vars,prevs);
});
hyperfiddle.electric.impl.runtime.init_statics = (function hyperfiddle$electric$impl$runtime$init_statics(frame,static$){
return cljs.core.reduce_kv((function (arr,i,_LT_x){
(arr[(i | (0))] = hyperfiddle.electric.impl.runtime.signal(_LT_x));

return arr;
}),(frame[hyperfiddle.electric.impl.runtime.frame_slot_static]),static$);
});
hyperfiddle.electric.impl.runtime.init_dynamic = (function hyperfiddle$electric$impl$runtime$init_dynamic(vars,node_sym,frame){
var temp__5820__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,node_sym);
if((temp__5820__auto__ == null)){
return null;
} else {
var flow = temp__5820__auto__;
return hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$5(frame,hyperfiddle.electric.impl.runtime.frame_slot_dynamic,cljs.core.assoc,node_sym,hyperfiddle.electric.impl.runtime.signal(flow));
}
});
hyperfiddle.electric.impl.runtime.init_dynamics = (function hyperfiddle$electric$impl$runtime$init_dynamics(frame,vars,dynamics){
return cljs.core.run_BANG_((function (p1__47957_SHARP_){
return hyperfiddle.electric.impl.runtime.init_dynamic(cljs.core.deref(vars),p1__47957_SHARP_,frame);
}),dynamics);
});
hyperfiddle.electric.impl.runtime.ensure_node = (function hyperfiddle$electric$impl$runtime$ensure_node(frame,vars,env,node_info){
var node_sym = new cljs.core.Keyword(null,"var-name","var-name",-574747624).cljs$core$IFn$_invoke$arity$1(node_info);
if(cljs.core.contains_QMARK_(cljs.core.deref(vars),node_sym)){
return null;
} else {
hyperfiddle.electric.impl.runtime.init_dynamics(frame,vars,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(node_info));

var flow = (function (){var fexpr__47962 = new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(node_info);
return (fexpr__47962.cljs$core$IFn$_invoke$arity$3 ? fexpr__47962.cljs$core$IFn$_invoke$arity$3(frame,vars,env) : fexpr__47962.call(null,frame,vars,env));
})();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(vars,cljs.core.assoc,node_sym,flow);
}
});
hyperfiddle.electric.impl.runtime.init_nodes = (function hyperfiddle$electric$impl$runtime$init_nodes(frame,vars,env,get_used_nodes){
var seq__47967 = cljs.core.seq((get_used_nodes.cljs$core$IFn$_invoke$arity$0 ? get_used_nodes.cljs$core$IFn$_invoke$arity$0() : get_used_nodes.call(null)));
var chunk__47968 = null;
var count__47969 = (0);
var i__47970 = (0);
while(true){
if((i__47970 < count__47969)){
var info = chunk__47968.cljs$core$IIndexed$_nth$arity$2(null,i__47970);
if(cljs.core.map_QMARK_(info)){
var G__47986_48383 = frame;
var G__47987_48384 = vars;
var G__47988_48385 = env;
var G__47989_48386 = new cljs.core.Keyword(null,"get-used-nodes","get-used-nodes",-687832967).cljs$core$IFn$_invoke$arity$1(info);
(hyperfiddle.electric.impl.runtime.init_nodes.cljs$core$IFn$_invoke$arity$4 ? hyperfiddle.electric.impl.runtime.init_nodes.cljs$core$IFn$_invoke$arity$4(G__47986_48383,G__47987_48384,G__47988_48385,G__47989_48386) : hyperfiddle.electric.impl.runtime.init_nodes.call(null,G__47986_48383,G__47987_48384,G__47988_48385,G__47989_48386));

hyperfiddle.electric.impl.runtime.ensure_node(frame,vars,env,info);
} else {
}


var G__48387 = seq__47967;
var G__48388 = chunk__47968;
var G__48389 = count__47969;
var G__48390 = (i__47970 + (1));
seq__47967 = G__48387;
chunk__47968 = G__48388;
count__47969 = G__48389;
i__47970 = G__48390;
continue;
} else {
var temp__5816__auto__ = cljs.core.seq(seq__47967);
if(temp__5816__auto__){
var seq__47967__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47967__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__47967__$1);
var G__48391 = cljs.core.chunk_rest(seq__47967__$1);
var G__48392 = c__5521__auto__;
var G__48393 = cljs.core.count(c__5521__auto__);
var G__48394 = (0);
seq__47967 = G__48391;
chunk__47968 = G__48392;
count__47969 = G__48393;
i__47970 = G__48394;
continue;
} else {
var info = cljs.core.first(seq__47967__$1);
if(cljs.core.map_QMARK_(info)){
var G__47990_48396 = frame;
var G__47991_48397 = vars;
var G__47992_48398 = env;
var G__47993_48399 = new cljs.core.Keyword(null,"get-used-nodes","get-used-nodes",-687832967).cljs$core$IFn$_invoke$arity$1(info);
(hyperfiddle.electric.impl.runtime.init_nodes.cljs$core$IFn$_invoke$arity$4 ? hyperfiddle.electric.impl.runtime.init_nodes.cljs$core$IFn$_invoke$arity$4(G__47990_48396,G__47991_48397,G__47992_48398,G__47993_48399) : hyperfiddle.electric.impl.runtime.init_nodes.call(null,G__47990_48396,G__47991_48397,G__47992_48398,G__47993_48399));

hyperfiddle.electric.impl.runtime.ensure_node(frame,vars,env,info);
} else {
}


var G__48400 = cljs.core.next(seq__47967__$1);
var G__48401 = null;
var G__48402 = (0);
var G__48403 = (0);
seq__47967 = G__48400;
chunk__47968 = G__48401;
count__47969 = G__48402;
i__47970 = G__48403;
continue;
}
} else {
return null;
}
}
break;
}
});
hyperfiddle.electric.impl.runtime.make_frame = (function hyperfiddle$electric$impl$runtime$make_frame(context,parent,id,position,foreign,static$,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,buffer,vars,boot,get_used_nodes,nm,env){
var tier_count = (variable_count + source_count);
var frame = (function (){var G__47997 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.runtime.frame_slots);
(G__47997[hyperfiddle.electric.impl.runtime.frame_slot_context] = context);

(G__47997[hyperfiddle.electric.impl.runtime.frame_slot_parent] = parent);

(G__47997[hyperfiddle.electric.impl.runtime.frame_slot_id] = id);

(G__47997[hyperfiddle.electric.impl.runtime.frame_slot_position] = position);

(G__47997[hyperfiddle.electric.impl.runtime.frame_slot_foreign] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cljs.core.count(foreign)));

(G__47997[hyperfiddle.electric.impl.runtime.frame_slot_static] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cljs.core.count(static$)));

(G__47997[hyperfiddle.electric.impl.runtime.frame_slot_dynamic] = cljs.core.PersistentArrayMap.EMPTY);

(G__47997[hyperfiddle.electric.impl.runtime.frame_slot_variables] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(variable_count));

(G__47997[hyperfiddle.electric.impl.runtime.frame_slot_sources] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(source_count));

(G__47997[hyperfiddle.electric.impl.runtime.frame_slot_targets] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(target_count));

(G__47997[hyperfiddle.electric.impl.runtime.frame_slot_inputs] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(input_count));

(G__47997[hyperfiddle.electric.impl.runtime.frame_slot_tiers] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(tier_count));

(G__47997[hyperfiddle.electric.impl.runtime.frame_slot_constants] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(constant_count));

(G__47997[hyperfiddle.electric.impl.runtime.frame_slot_last_variable] = (-1));

(G__47997[hyperfiddle.electric.impl.runtime.frame_slot_last_constant] = (-1));

(G__47997[hyperfiddle.electric.impl.runtime.frame_slot_last_source] = (-1));

(G__47997[hyperfiddle.electric.impl.runtime.frame_slot_last_target] = (-1));

(G__47997[hyperfiddle.electric.impl.runtime.frame_slot_last_input] = (-1));

(G__47997[hyperfiddle.electric.impl.runtime.frame_slot_last_output] = (-1));

return G__47997;
})();
var n__5589__auto___48413 = tier_count;
var i_48416 = (0);
while(true){
if((i_48416 < n__5589__auto___48413)){
hyperfiddle.electric.impl.runtime.make_tier(frame,i_48416);

var G__48418 = (i_48416 + (1));
i_48416 = G__48418;
continue;
} else {
}
break;
}

(buffer[(position | (0))] = frame);

hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$5(context,hyperfiddle.electric.impl.runtime.context_slot_frame_store,cljs.core.assoc_BANG_,id,frame);

var prevs = hyperfiddle.electric.impl.runtime.inject_foreigns(frame,vars,foreign);
hyperfiddle.electric.impl.runtime.init_statics(frame,static$);

hyperfiddle.electric.impl.runtime.init_nodes(frame,vars,env,get_used_nodes);

hyperfiddle.electric.impl.runtime.init_dynamics(frame,vars,dynamic);

var result = (boot.cljs$core$IFn$_invoke$arity$3 ? boot.cljs$core$IFn$_invoke$arity$3(frame,vars,env) : boot.call(null,frame,vars,env));
hyperfiddle.electric.impl.runtime.undo_foreigns(vars,prevs);

return result;
});
hyperfiddle.electric.impl.runtime.input_ready = (function hyperfiddle$electric$impl$runtime$input_ready(input){
if(((input[hyperfiddle.electric.impl.runtime.input_slot_cancel]) == null)){
(input[hyperfiddle.electric.impl.runtime.input_slot_cancel] = false);

var fexpr__48011 = (input[hyperfiddle.electric.impl.runtime.input_slot_notifier]);
return (fexpr__48011.cljs$core$IFn$_invoke$arity$0 ? fexpr__48011.cljs$core$IFn$_invoke$arity$0() : fexpr__48011.call(null));
} else {
return null;
}
});
hyperfiddle.electric.impl.runtime.output_dirty = (function hyperfiddle$electric$impl$runtime$output_dirty(output){
var input = (output[hyperfiddle.electric.impl.runtime.output_slot_input]);
var dirty = (input[hyperfiddle.electric.impl.runtime.input_slot_dirty]);
(output[hyperfiddle.electric.impl.runtime.output_slot_dirty] = dirty);

(input[hyperfiddle.electric.impl.runtime.input_slot_dirty] = output);

if((dirty == null)){
if((input === (input[hyperfiddle.electric.impl.runtime.input_slot_check]))){
var frame_48422 = (input[hyperfiddle.electric.impl.runtime.input_slot_frame]);
var context_48423 = (frame_48422[hyperfiddle.electric.impl.runtime.frame_slot_context]);
var check_48424 = (context_48423[hyperfiddle.electric.impl.runtime.context_slot_check]);
(context_48423[hyperfiddle.electric.impl.runtime.context_slot_check] = input);

(input[hyperfiddle.electric.impl.runtime.input_slot_check] = check_48424);

if(((context_48423[hyperfiddle.electric.impl.runtime.context_slot_event]) == null)){
(context_48423[hyperfiddle.electric.impl.runtime.context_slot_event] = hyperfiddle.electric.impl.runtime.empty_event);

var fexpr__48019_48425 = (context_48423[hyperfiddle.electric.impl.runtime.context_slot_notifier]);
(fexpr__48019_48425.cljs$core$IFn$_invoke$arity$0 ? fexpr__48019_48425.cljs$core$IFn$_invoke$arity$0() : fexpr__48019_48425.call(null));
} else {
}
} else {
}
} else {
}

return hyperfiddle.electric.impl.runtime.input_ready(input);
});
hyperfiddle.electric.impl.runtime.output_spawn = (function hyperfiddle$electric$impl$runtime$output_spawn(input,output){
if((output == null)){
} else {
(output[hyperfiddle.electric.impl.runtime.output_slot_input] = input);

(output[hyperfiddle.electric.impl.runtime.output_slot_iterator] = (function (){var G__48022 = (function (){
return hyperfiddle.electric.impl.runtime.output_dirty(output);
});
var G__48023 = (function (){
(output[hyperfiddle.electric.impl.runtime.output_slot_done] = true);

return hyperfiddle.electric.impl.runtime.output_dirty(output);
});
var fexpr__48021 = (output[hyperfiddle.electric.impl.runtime.output_slot_iterator]);
return (fexpr__48021.cljs$core$IFn$_invoke$arity$2 ? fexpr__48021.cljs$core$IFn$_invoke$arity$2(G__48022,G__48023) : fexpr__48021.call(null,G__48022,G__48023));
})());
}

return input;
});
hyperfiddle.electric.impl.runtime.make_output = (function hyperfiddle$electric$impl$runtime$make_output(frame,_LT_x){
var output = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.runtime.output_slots);
var id = hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$3(frame,hyperfiddle.electric.impl.runtime.frame_slot_last_output,cljs.core.inc);
(output[hyperfiddle.electric.impl.runtime.output_slot_id] = id);

(output[hyperfiddle.electric.impl.runtime.output_slot_done] = false);

(output[hyperfiddle.electric.impl.runtime.output_slot_prev] = output);

(output[hyperfiddle.electric.impl.runtime.output_slot_next] = output);

(output[hyperfiddle.electric.impl.runtime.output_slot_dirty] = output);

(output[hyperfiddle.electric.impl.runtime.output_slot_current] = output);

(output[hyperfiddle.electric.impl.runtime.output_slot_iterator] = _LT_x);

return output;
});
hyperfiddle.electric.impl.runtime.input_cancel = (function hyperfiddle$electric$impl$runtime$input_cancel(input){
var c = (input[hyperfiddle.electric.impl.runtime.input_slot_cancel]);
(input[hyperfiddle.electric.impl.runtime.input_slot_cancel] = true);

if((c == null)){
var fexpr__48033 = (input[hyperfiddle.electric.impl.runtime.input_slot_notifier]);
return (fexpr__48033.cljs$core$IFn$_invoke$arity$0 ? fexpr__48033.cljs$core$IFn$_invoke$arity$0() : fexpr__48033.call(null));
} else {
return null;
}
});
hyperfiddle.electric.impl.runtime.input_change = (function hyperfiddle$electric$impl$runtime$input_change(input,x){
(input[hyperfiddle.electric.impl.runtime.input_slot_current] = x);

return hyperfiddle.electric.impl.runtime.input_ready(input);
});
hyperfiddle.electric.impl.runtime.input_freeze = (function hyperfiddle$electric$impl$runtime$input_freeze(input){
(input[hyperfiddle.electric.impl.runtime.input_slot_pending] = (-1));

if(((input[hyperfiddle.electric.impl.runtime.input_slot_cancel]) == null)){
(input[hyperfiddle.electric.impl.runtime.input_slot_cancel] = false);

var fexpr__48043 = (input[hyperfiddle.electric.impl.runtime.input_slot_terminator]);
return (fexpr__48043.cljs$core$IFn$_invoke$arity$0 ? fexpr__48043.cljs$core$IFn$_invoke$arity$0() : fexpr__48043.call(null));
} else {
return null;
}
});
hyperfiddle.electric.impl.runtime.update_event = (function hyperfiddle$electric$impl$runtime$update_event(var_args){
var args__5728__auto__ = [];
var len__5722__auto___48431 = arguments.length;
var i__5723__auto___48432 = (0);
while(true){
if((i__5723__auto___48432 < len__5722__auto___48431)){
args__5728__auto__.push((arguments[i__5723__auto___48432]));

var G__48433 = (i__5723__auto___48432 + (1));
i__5723__auto___48432 = G__48433;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((3) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((3)),(0),null)):null);
return hyperfiddle.electric.impl.runtime.update_event.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5729__auto__);
});

(hyperfiddle.electric.impl.runtime.update_event.cljs$core$IFn$_invoke$arity$variadic = (function (context,k,f,args){
var temp__5818__auto__ = (context[hyperfiddle.electric.impl.runtime.context_slot_event]);
if((temp__5818__auto__ == null)){
(context[hyperfiddle.electric.impl.runtime.context_slot_event] = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update,hyperfiddle.electric.impl.runtime.empty_event,k,f,args));

var fexpr__48054 = (context[hyperfiddle.electric.impl.runtime.context_slot_notifier]);
return (fexpr__48054.cljs$core$IFn$_invoke$arity$0 ? fexpr__48054.cljs$core$IFn$_invoke$arity$0() : fexpr__48054.call(null));
} else {
var event = temp__5818__auto__;
return (context[hyperfiddle.electric.impl.runtime.context_slot_event] = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update,event,k,f,args));
}
}));

(hyperfiddle.electric.impl.runtime.update_event.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(hyperfiddle.electric.impl.runtime.update_event.cljs$lang$applyTo = (function (seq48045){
var G__48046 = cljs.core.first(seq48045);
var seq48045__$1 = cljs.core.next(seq48045);
var G__48047 = cljs.core.first(seq48045__$1);
var seq48045__$2 = cljs.core.next(seq48045__$1);
var G__48048 = cljs.core.first(seq48045__$2);
var seq48045__$3 = cljs.core.next(seq48045__$2);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48046,G__48047,G__48048,seq48045__$3);
}));

hyperfiddle.electric.impl.runtime.input_check = (function hyperfiddle$electric$impl$runtime$input_check(input){
var frame = (input[hyperfiddle.electric.impl.runtime.input_slot_frame]);
var context = (frame[hyperfiddle.electric.impl.runtime.frame_slot_context]);
while(true){
var temp__5818__auto__ = (input[hyperfiddle.electric.impl.runtime.input_slot_dirty]);
if((temp__5818__auto__ == null)){
return null;
} else {
var output = temp__5818__auto__;
var path = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- (frame[hyperfiddle.electric.impl.runtime.frame_slot_id])),(output[hyperfiddle.electric.impl.runtime.output_slot_id])], null);
(input[hyperfiddle.electric.impl.runtime.input_slot_dirty] = (output[hyperfiddle.electric.impl.runtime.output_slot_dirty]));

(output[hyperfiddle.electric.impl.runtime.output_slot_dirty] = output);

if(cljs.core.truth_((output[hyperfiddle.electric.impl.runtime.output_slot_done]))){
hyperfiddle.electric.impl.runtime.update_event.cljs$core$IFn$_invoke$arity$variadic(context,new cljs.core.Keyword(null,"freeze","freeze",2043466309),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));
} else {
var x_48442 = cljs.core.deref((output[hyperfiddle.electric.impl.runtime.output_slot_iterator]));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((output[hyperfiddle.electric.impl.runtime.output_slot_current]),(output[hyperfiddle.electric.impl.runtime.output_slot_current] = x_48442))){
} else {
var buffer_48443 = (context[hyperfiddle.electric.impl.runtime.context_slot_pending_buffer]);
var wpos_48444 = (context[hyperfiddle.electric.impl.runtime.context_slot_pending_wpos]);
var temp__5818__auto___48445__$1 = (output[hyperfiddle.electric.impl.runtime.output_slot_time]);
if((temp__5818__auto___48445__$1 == null)){
hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$3(input,hyperfiddle.electric.impl.runtime.input_slot_pending,cljs.core.inc);
} else {
var t_48446 = temp__5818__auto___48445__$1;
var p_48447 = (output[hyperfiddle.electric.impl.runtime.output_slot_prev]);
var n_48448 = (output[hyperfiddle.electric.impl.runtime.output_slot_next]);
(buffer_48443[t_48446] = (((p_48447 === output))?null:(function (){
(p_48447[hyperfiddle.electric.impl.runtime.output_slot_next] = n_48448);

return (n_48448[hyperfiddle.electric.impl.runtime.output_slot_prev] = p_48447);
})()
));
}

(output[hyperfiddle.electric.impl.runtime.output_slot_time] = wpos_48444);

var temp__5818__auto___48450__$1 = (buffer_48443[wpos_48444]);
if((temp__5818__auto___48450__$1 == null)){
(buffer_48443[wpos_48444] = output);

(output[hyperfiddle.electric.impl.runtime.output_slot_prev] = output);

(output[hyperfiddle.electric.impl.runtime.output_slot_next] = output);
} else {
var p_48451 = temp__5818__auto___48450__$1;
var n_48452 = (p_48451[hyperfiddle.electric.impl.runtime.output_slot_next]);
(p_48451[hyperfiddle.electric.impl.runtime.output_slot_next] = output);

(n_48452[hyperfiddle.electric.impl.runtime.output_slot_prev] = output);

(output[hyperfiddle.electric.impl.runtime.output_slot_prev] = p_48451);

(output[hyperfiddle.electric.impl.runtime.output_slot_next] = n_48452);
}

hyperfiddle.electric.impl.runtime.update_event.cljs$core$IFn$_invoke$arity$variadic(context,new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path,x_48442], 0));
}
}

continue;
}
break;
}
});
hyperfiddle.electric.impl.runtime.input_transfer = (function hyperfiddle$electric$impl$runtime$input_transfer(input){
hyperfiddle.electric.impl.runtime.input_check(input);

if(cljs.core.truth_((input[hyperfiddle.electric.impl.runtime.input_slot_cancel]))){
var fexpr__48068_48458 = (input[hyperfiddle.electric.impl.runtime.input_slot_terminator]);
(fexpr__48068_48458.cljs$core$IFn$_invoke$arity$0 ? fexpr__48068_48458.cljs$core$IFn$_invoke$arity$0() : fexpr__48068_48458.call(null));

throw (new missionary.Cancelled());
} else {
var G__48073 = (input[hyperfiddle.electric.impl.runtime.input_slot_pending]);
switch (G__48073) {
case (-1):
var fexpr__48076_48463 = (input[hyperfiddle.electric.impl.runtime.input_slot_terminator]);
(fexpr__48076_48463.cljs$core$IFn$_invoke$arity$0 ? fexpr__48076_48463.cljs$core$IFn$_invoke$arity$0() : fexpr__48076_48463.call(null));

return (input[hyperfiddle.electric.impl.runtime.input_slot_current]);

break;
case (0):
(input[hyperfiddle.electric.impl.runtime.input_slot_cancel] = null);

return (input[hyperfiddle.electric.impl.runtime.input_slot_current]);

break;
default:
(input[hyperfiddle.electric.impl.runtime.input_slot_cancel] = null);

return hyperfiddle.electric.impl.runtime.pending;

}
}
});
hyperfiddle.electric.impl.runtime.make_input = (function hyperfiddle$electric$impl$runtime$make_input(frame,deps){
var input = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.runtime.input_slots);
(input[hyperfiddle.electric.impl.runtime.input_slot_frame] = frame);

(input[hyperfiddle.electric.impl.runtime.input_slot_pending] = (0));

(input[hyperfiddle.electric.impl.runtime.input_slot_current] = hyperfiddle.electric.impl.runtime.pending);

(input[hyperfiddle.electric.impl.runtime.input_slot_cancel] = false);

(input[hyperfiddle.electric.impl.runtime.input_slot_check] = input);

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.output_spawn,input,deps);
});
hyperfiddle.electric.impl.runtime.input_spawn = (function hyperfiddle$electric$impl$runtime$input_spawn(frame,deps){
var slot = hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$3(frame,hyperfiddle.electric.impl.runtime.frame_slot_last_input,cljs.core.inc);
return missionary.core.signal_BANG_((function (n,t){
var input = hyperfiddle.electric.impl.runtime.make_input(frame,deps);
(input[hyperfiddle.electric.impl.runtime.input_slot_notifier] = n);

(input[hyperfiddle.electric.impl.runtime.input_slot_terminator] = t);

((frame[hyperfiddle.electric.impl.runtime.frame_slot_inputs])[(slot | (0))] = input);

(n.cljs$core$IFn$_invoke$arity$0 ? n.cljs$core$IFn$_invoke$arity$0() : n.call(null));

return hyperfiddle.electric.impl.runtime.__GT_It(input,hyperfiddle.electric.impl.runtime.input_cancel,hyperfiddle.electric.impl.runtime.input_transfer);
}));
});
hyperfiddle.electric.impl.runtime.check_unbound_var = (function hyperfiddle$electric$impl$runtime$check_unbound_var(_debug_info,_LT_x){
return missionary.core.latest.cljs$core$IFn$_invoke$arity$variadic((function (x){
if(((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hyperfiddle.electric.impl.lang","unbound","hyperfiddle.electric.impl.lang/unbound",1959435313),cljs.core.first(x))))){
return (new hyperfiddle.electric.Failure(hyperfiddle.electric.impl.runtime.error(["Unbound electric var `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(x)),"`"].join(''))));
} else {
return x;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_LT_x], 0));
});
hyperfiddle.electric.impl.runtime.static$ = (function hyperfiddle$electric$impl$runtime$static(frame,slot){
return ((frame[hyperfiddle.electric.impl.runtime.frame_slot_static])[(slot | (0))]);
});
hyperfiddle.electric.impl.runtime.dynamic = (function hyperfiddle$electric$impl$runtime$dynamic(frame,symb,debug_info){
return hyperfiddle.electric.impl.runtime.check_unbound_var(debug_info,contrib.assert._check(new cljs.core.Symbol(null,"some?","some?",234752293,null),cljs.core.some_QMARK_,cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),cljs.core.list(new cljs.core.Symbol(null,"aget","aget",1491056546,null),new cljs.core.Symbol(null,"frame","frame",-70551061,null),new cljs.core.Symbol(null,"frame-slot-dynamic","frame-slot-dynamic",1868729820,null)),new cljs.core.Symbol(null,"symb","symb",-1190909377,null)),cljs.core.get.cljs$core$IFn$_invoke$arity$2((frame[hyperfiddle.electric.impl.runtime.frame_slot_dynamic]),symb),debug_info));
});
/**
 * A snapshot of the tree below given frame, as nested vectors. Frame vectors start with their id.
 */
hyperfiddle.electric.impl.runtime.tree = (function hyperfiddle$electric$impl$runtime$tree(f){
var tiers = (f[hyperfiddle.electric.impl.runtime.frame_slot_tiers]);
var v = cljs.core.PersistentVector.EMPTY;
var i = ((0) | (0));
while(true){
if((i === tiers.length)){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),(f[hyperfiddle.electric.impl.runtime.frame_slot_id]),new cljs.core.Keyword(null,"inputs","inputs",865803858),(f[hyperfiddle.electric.impl.runtime.frame_slot_inputs]).length,new cljs.core.Keyword(null,"targets","targets",2014963406),(f[hyperfiddle.electric.impl.runtime.frame_slot_targets]).length,new cljs.core.Keyword(null,"sources","sources",-321166424),(f[hyperfiddle.electric.impl.runtime.frame_slot_sources]).length,new cljs.core.Keyword(null,"tiers","tiers",-46242789),v], null);
} else {
var G__48483 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,(function (){var tier = (tiers[i]);
var buf = (tier[hyperfiddle.electric.impl.runtime.tier_slot_buffer]);
var v__$1 = cljs.core.PersistentVector.EMPTY;
var i__$1 = ((0) | (0));
while(true){
if((i__$1 === (tier[hyperfiddle.electric.impl.runtime.tier_slot_size]))){
return v__$1;
} else {
var G__48487 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v__$1,(function (){var G__48117 = (buf[i__$1]);
return (hyperfiddle.electric.impl.runtime.tree.cljs$core$IFn$_invoke$arity$1 ? hyperfiddle.electric.impl.runtime.tree.cljs$core$IFn$_invoke$arity$1(G__48117) : hyperfiddle.electric.impl.runtime.tree.call(null,G__48117));
})());
var G__48488 = (i__$1 + (1));
v__$1 = G__48487;
i__$1 = G__48488;
continue;
}
break;
}
})());
var G__48484 = (i + (1));
v = G__48483;
i = G__48484;
continue;
}
break;
}
});
hyperfiddle.electric.impl.runtime.find_scope = (function hyperfiddle$electric$impl$runtime$find_scope(f){
var f__$1 = f;
var s = cljs.core.PersistentHashSet.EMPTY;
while(true){
var temp__5818__auto__ = (f__$1[hyperfiddle.electric.impl.runtime.frame_slot_parent]);
if((temp__5818__auto__ == null)){
return s;
} else {
var tier = temp__5818__auto__;
var G__48489 = (tier[hyperfiddle.electric.impl.runtime.tier_slot_parent]);
var G__48490 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(s,cljs.core.keys((tier[hyperfiddle.electric.impl.runtime.tier_slot_hooks])));
f__$1 = G__48489;
s = G__48490;
continue;
}
break;
}
});
hyperfiddle.electric.impl.runtime.frame_walk_tiers = (function hyperfiddle$electric$impl$runtime$frame_walk_tiers(frame,step,k,cb,start){
var tiers = (frame[hyperfiddle.electric.impl.runtime.frame_slot_tiers]);
var size = tiers.length;
var back = (((1) - step) >> (1));
var back_inc_size = (back * (size + (1)));
var stop = (size - back_inc_size);
var i = (((start == null))?(back_inc_size - (1)):start);
while(true){
var i__$1 = (i + step);
if((i__$1 === stop)){
return null;
} else {
var temp__5818__auto__ = (function (){var tier = (tiers[i__$1]);
var temp__5818__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((tier[hyperfiddle.electric.impl.runtime.tier_slot_hooks]),k);
if((temp__5818__auto__ == null)){
return (hyperfiddle.electric.impl.runtime.tier_walk_frames.cljs$core$IFn$_invoke$arity$5 ? hyperfiddle.electric.impl.runtime.tier_walk_frames.cljs$core$IFn$_invoke$arity$5(tier,step,k,cb,null) : hyperfiddle.electric.impl.runtime.tier_walk_frames.call(null,tier,step,k,cb,null));
} else {
var v = temp__5818__auto__;
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(v) : cb.call(null,v));
}
})();
if((temp__5818__auto__ == null)){
var G__48495 = i__$1;
i = G__48495;
continue;
} else {
var x = temp__5818__auto__;
return x;
}
}
break;
}
});
hyperfiddle.electric.impl.runtime.tier_walk_frames = (function hyperfiddle$electric$impl$runtime$tier_walk_frames(tier,step,k,cb,start){
var buf = (tier[hyperfiddle.electric.impl.runtime.tier_slot_buffer]);
var size = (tier[hyperfiddle.electric.impl.runtime.tier_slot_size]);
var back = (((1) - step) >> (1));
var back_inc_size = (back * (size + (1)));
var stop = (size - back_inc_size);
var i = (((start == null))?(back_inc_size - (1)):start);
while(true){
var i__$1 = (i + step);
if((i__$1 === stop)){
return null;
} else {
var temp__5818__auto__ = hyperfiddle.electric.impl.runtime.frame_walk_tiers((buf[i__$1]),step,k,cb,null);
if((temp__5818__auto__ == null)){
var G__48501 = i__$1;
i = G__48501;
continue;
} else {
var x = temp__5818__auto__;
return x;
}
}
break;
}
});
hyperfiddle.electric.impl.runtime.notify_rotate = (function hyperfiddle$electric$impl$runtime$notify_rotate(f,k){
var anchor = (function (){var f__$1 = f;
while(true){
var tier = (f__$1[hyperfiddle.electric.impl.runtime.frame_slot_parent]);
if(cljs.core.contains_QMARK_((tier[hyperfiddle.electric.impl.runtime.tier_slot_hooks]),k)){
return null;
} else {
var temp__5818__auto__ = hyperfiddle.electric.impl.runtime.tier_walk_frames(tier,(1),k,cljs.core.identity,(f__$1[hyperfiddle.electric.impl.runtime.frame_slot_position]));
if((temp__5818__auto__ == null)){
var G__48503 = (tier[hyperfiddle.electric.impl.runtime.tier_slot_parent]);
f__$1 = G__48503;
continue;
} else {
var a = temp__5818__auto__;
return a;
}
}
break;
}
})();
hyperfiddle.electric.impl.runtime.frame_walk_tiers(f,(1),k,(function (target){
return (k.cljs$core$IFn$_invoke$arity$2 ? k.cljs$core$IFn$_invoke$arity$2(target,anchor) : k.call(null,target,anchor));
}),null);

return f;
});
hyperfiddle.electric.impl.runtime.array_call = (function hyperfiddle$electric$impl$runtime$array_call(arr){
var n__5589__auto__ = arr.length;
var i = (0);
while(true){
if((i < n__5589__auto__)){
var fexpr__48131_48504 = (arr[i]);
(fexpr__48131_48504.cljs$core$IFn$_invoke$arity$0 ? fexpr__48131_48504.cljs$core$IFn$_invoke$arity$0() : fexpr__48131_48504.call(null));

var G__48506 = (i + (1));
i = G__48506;
continue;
} else {
return null;
}
break;
}
});
hyperfiddle.electric.impl.runtime.map_vals_call = (function hyperfiddle$electric$impl$runtime$map_vals_call(mp){
return cljs.core.run_BANG_((function (p1__48132_SHARP_){
return (p1__48132_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__48132_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__48132_SHARP_.call(null));
}),cljs.core.vals(mp));
});
hyperfiddle.electric.impl.runtime.frame_dispose = (function hyperfiddle$electric$impl$runtime$frame_dispose(f){
(f[hyperfiddle.electric.impl.runtime.frame_slot_position] = null);

hyperfiddle.electric.impl.runtime.array_call((f[hyperfiddle.electric.impl.runtime.frame_slot_static]));

hyperfiddle.electric.impl.runtime.map_vals_call((f[hyperfiddle.electric.impl.runtime.frame_slot_dynamic]));

hyperfiddle.electric.impl.runtime.array_call((f[hyperfiddle.electric.impl.runtime.frame_slot_foreign]));

hyperfiddle.electric.impl.runtime.array_call((f[hyperfiddle.electric.impl.runtime.frame_slot_variables]));

return hyperfiddle.electric.impl.runtime.array_call((f[hyperfiddle.electric.impl.runtime.frame_slot_constants]));
});
hyperfiddle.electric.impl.runtime.frame_rotate = (function hyperfiddle$electric$impl$runtime$frame_rotate(f,to){
var from = (f[hyperfiddle.electric.impl.runtime.frame_slot_position]);
var step = cljs.core.compare(to,from);
var tier = (f[hyperfiddle.electric.impl.runtime.frame_slot_parent]);
var buf = (tier[hyperfiddle.electric.impl.runtime.tier_slot_buffer]);
if((to === from)){
var size = ((tier[hyperfiddle.electric.impl.runtime.tier_slot_size]) - (1));
var i_48507 = to;
while(true){
if((i_48507 === size)){
} else {
var j_48508 = (i_48507 + (1));
var y_48509 = (buf[(j_48508 | (0))]);
(y_48509[hyperfiddle.electric.impl.runtime.frame_slot_position] = i_48507);

(buf[(i_48507 | (0))] = y_48509);

var G__48510 = j_48508;
i_48507 = G__48510;
continue;
}
break;
}

(tier[hyperfiddle.electric.impl.runtime.tier_slot_size] = size);

(buf[(size | (0))] = null);

return hyperfiddle.electric.impl.runtime.frame_dispose(f);
} else {
var i_48511 = from;
while(true){
var j_48512 = (i_48511 + step);
var y_48513 = (buf[(j_48512 | (0))]);
(y_48513[hyperfiddle.electric.impl.runtime.frame_slot_position] = i_48511);

(buf[(i_48511 | (0))] = y_48513);

if((to === j_48512)){
} else {
var G__48514 = j_48512;
i_48511 = G__48514;
continue;
}
break;
}

(f[hyperfiddle.electric.impl.runtime.frame_slot_position] = to);

(buf[(to | (0))] = f);

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.notify_rotate,f,hyperfiddle.electric.impl.runtime.find_scope(f));
}
});
/**
 * Move a frame. If origin position is equal to target position, frame is removed. Will search and call `hook`.
 */
hyperfiddle.electric.impl.runtime.move = (function hyperfiddle$electric$impl$runtime$move(tier,from,to){
var f = ((tier[hyperfiddle.electric.impl.runtime.tier_slot_buffer])[(from | (0))]);
hyperfiddle.electric.impl.runtime.update_event.cljs$core$IFn$_invoke$arity$variadic((f[hyperfiddle.electric.impl.runtime.frame_slot_context]),new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"rotate","rotate",152705015),new cljs.core.Keyword(null,"frame","frame",-1711082588),(- (f[hyperfiddle.electric.impl.runtime.frame_slot_id])),new cljs.core.Keyword(null,"position","position",-2011731912),to], null)], 0));

return hyperfiddle.electric.impl.runtime.frame_rotate(f,to);
});
hyperfiddle.electric.impl.runtime.frame_cancel = (function hyperfiddle$electric$impl$runtime$frame_cancel(f){
var temp__5820__auto__ = (f[hyperfiddle.electric.impl.runtime.frame_slot_position]);
if((temp__5820__auto__ == null)){
return null;
} else {
var pos = temp__5820__auto__;
hyperfiddle.electric.impl.runtime.update_event.cljs$core$IFn$_invoke$arity$variadic((f[hyperfiddle.electric.impl.runtime.frame_slot_context]),new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"rotate","rotate",152705015),new cljs.core.Keyword(null,"frame","frame",-1711082588),(- (f[hyperfiddle.electric.impl.runtime.frame_slot_id])),new cljs.core.Keyword(null,"position","position",-2011731912),pos], null)], 0));

return hyperfiddle.electric.impl.runtime.frame_rotate(f,pos);
}
});
hyperfiddle.electric.impl.runtime.acopy = (function hyperfiddle$electric$impl$runtime$acopy(src,src_off,dest,dest_off,size){
var n__5589__auto___48517 = size;
var i_48518 = (0);
while(true){
if((i_48518 < n__5589__auto___48517)){
(dest[(dest_off + i_48518)] = (src[(src_off + i_48518)]));

var G__48519 = (i_48518 + (1));
i_48518 = G__48519;
continue;
} else {
}
break;
}

return dest;
});
hyperfiddle.electric.impl.runtime._QMARK_grow_tier_buffer = (function hyperfiddle$electric$impl$runtime$_QMARK_grow_tier_buffer(tier,pos){
var buf = (tier[hyperfiddle.electric.impl.runtime.tier_slot_buffer]);
var cap = buf.length;
if((pos < cap)){
return buf;
} else {
return (tier[hyperfiddle.electric.impl.runtime.tier_slot_buffer] = hyperfiddle.electric.impl.runtime.acopy(buf,(0),cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((cap << (1))),(0),cap));
}
});
hyperfiddle.electric.impl.runtime.constructor$ = (function hyperfiddle$electric$impl$runtime$constructor(dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,boot){
return (function (env,static$){
return (function (tier,id){
var par = (tier[hyperfiddle.electric.impl.runtime.tier_slot_parent]);
var pos = (tier[hyperfiddle.electric.impl.runtime.tier_slot_size]);
var buf = hyperfiddle.electric.impl.runtime._QMARK_grow_tier_buffer(tier,pos);
(tier[hyperfiddle.electric.impl.runtime.tier_slot_size] = (pos + (1)));

return hyperfiddle.electric.impl.runtime.make_frame((par[hyperfiddle.electric.impl.runtime.frame_slot_context]),tier,id,pos,(tier[hyperfiddle.electric.impl.runtime.tier_slot_foreigns]),static$,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,buf,(tier[hyperfiddle.electric.impl.runtime.tier_slot_vars]),boot,(function hyperfiddle$electric$impl$runtime$constructor_$_get_used_nodes(){
return null;
}),new cljs.core.Keyword(null,"constructor","constructor",-1953928811),env);
});
});
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
hyperfiddle.electric.impl.runtime.FrameIterator = (function (f,it){
this.f = f;
this.it = it;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.runtime.FrameIterator.prototype.call = (function (unused__18786__auto__){
var self__ = this;
var self__ = this;
var G__48147 = (arguments.length - (1));
switch (G__48147) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.runtime.FrameIterator.prototype.apply = (function (self__,args48146){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args48146)));
}));

(hyperfiddle.electric.impl.runtime.FrameIterator.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return hyperfiddle.electric.impl.runtime.frame_cancel(self__.f);
}));

(hyperfiddle.electric.impl.runtime.FrameIterator.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.it);
}));

(hyperfiddle.electric.impl.runtime.FrameIterator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)], null);
}));

(hyperfiddle.electric.impl.runtime.FrameIterator.cljs$lang$type = true);

(hyperfiddle.electric.impl.runtime.FrameIterator.cljs$lang$ctorStr = "hyperfiddle.electric.impl.runtime/FrameIterator");

(hyperfiddle.electric.impl.runtime.FrameIterator.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"hyperfiddle.electric.impl.runtime/FrameIterator");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.runtime/FrameIterator.
 */
hyperfiddle.electric.impl.runtime.__GT_FrameIterator = (function hyperfiddle$electric$impl$runtime$__GT_FrameIterator(f,it){
return (new hyperfiddle.electric.impl.runtime.FrameIterator(f,it));
});

hyperfiddle.electric.impl.runtime.constant = (function hyperfiddle$electric$impl$runtime$constant(frame,ctor){
var slot = hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$3(frame,hyperfiddle.electric.impl.runtime.frame_slot_last_constant,cljs.core.inc);
var consts = (frame[hyperfiddle.electric.impl.runtime.frame_slot_constants]);
var context = (frame[hyperfiddle.electric.impl.runtime.frame_slot_context]);
return (consts[slot] = hyperfiddle.electric.impl.runtime.signal(missionary.core.watch(cljs.core.atom.cljs$core$IFn$_invoke$arity$1((function (n,t){
var temp__5818__auto__ = cljs.core.deref(hyperfiddle.electric.impl.runtime.this$);
if((temp__5818__auto__ == null)){
return hyperfiddle.electric.impl.failer.run(hyperfiddle.electric.impl.runtime.error("Unable to build frame - not an object."),n,t);
} else {
var tier = temp__5818__auto__;
var parent = (tier[hyperfiddle.electric.impl.runtime.tier_slot_parent]);
var id = hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$3(context,hyperfiddle.electric.impl.runtime.context_slot_local_id,cljs.core.inc);
hyperfiddle.electric.impl.runtime.update_event.cljs$core$IFn$_invoke$arity$variadic(context,new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- (frame[hyperfiddle.electric.impl.runtime.frame_slot_id])),slot], null),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- (parent[hyperfiddle.electric.impl.runtime.frame_slot_id])),(tier[hyperfiddle.electric.impl.runtime.tier_slot_remote])], null)], null)], 0));

var _LT_x = (ctor.cljs$core$IFn$_invoke$arity$2 ? ctor.cljs$core$IFn$_invoke$arity$2(tier,id) : ctor.call(null,tier,id));
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2((context[hyperfiddle.electric.impl.runtime.context_slot_frame_store]),id);
return hyperfiddle.electric.impl.runtime.__GT_FrameIterator(f,(function (){var G__48148 = n;
var G__48149 = (function (){
hyperfiddle.electric.impl.runtime.frame_cancel(f);

hyperfiddle.electric.impl.runtime.update_event.cljs$core$IFn$_invoke$arity$variadic(context,new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"frame","frame",-1711082588),(- id)], null)], 0));

hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$4(context,hyperfiddle.electric.impl.runtime.context_slot_frame_store,cljs.core.dissoc_BANG_,(f[hyperfiddle.electric.impl.runtime.frame_slot_id]));

return (t.cljs$core$IFn$_invoke$arity$0 ? t.cljs$core$IFn$_invoke$arity$0() : t.call(null));
});
return (_LT_x.cljs$core$IFn$_invoke$arity$2 ? _LT_x.cljs$core$IFn$_invoke$arity$2(G__48148,G__48149) : _LT_x.call(null,G__48148,G__48149));
})());
}
})))));
});
hyperfiddle.electric.impl.runtime.inject = (function hyperfiddle$electric$impl$runtime$inject(v){
return (function (_LT_x,_LT_y){
return (function (n,t){
var temp__5818__auto__ = cljs.core.deref(hyperfiddle.electric.impl.runtime.this$);
if((temp__5818__auto__ == null)){
return hyperfiddle.electric.impl.failer.run(hyperfiddle.electric.impl.runtime.error("Unable to inject - not an object."),n,t);
} else {
var tier = temp__5818__auto__;
var foreigns = (tier[hyperfiddle.electric.impl.runtime.tier_slot_foreigns]);
(tier[hyperfiddle.electric.impl.runtime.tier_slot_foreigns] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(foreigns,v,_LT_y));

try{return (_LT_x.cljs$core$IFn$_invoke$arity$2 ? _LT_x.cljs$core$IFn$_invoke$arity$2(n,t) : _LT_x.call(null,n,t));
}finally {(tier[hyperfiddle.electric.impl.runtime.tier_slot_foreigns] = foreigns);
}}
});
});
});
hyperfiddle.electric.impl.runtime.bind = (function hyperfiddle$electric$impl$runtime$bind(var_args){
var args__5728__auto__ = [];
var len__5722__auto___48535 = arguments.length;
var i__5723__auto___48536 = (0);
while(true){
if((i__5723__auto___48536 < len__5722__auto___48535)){
args__5728__auto__.push((arguments[i__5723__auto___48536]));

var G__48537 = (i__5723__auto___48536 + (1));
i__5723__auto___48536 = G__48537;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((1) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((1)),(0),null)):null);
return hyperfiddle.electric.impl.runtime.bind.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5729__auto__);
});

(hyperfiddle.electric.impl.runtime.bind.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return (function (n,t){
var temp__5818__auto__ = cljs.core.deref(hyperfiddle.electric.impl.runtime.this$);
if((temp__5818__auto__ == null)){
return hyperfiddle.electric.impl.failer.run(hyperfiddle.electric.impl.runtime.error("Unable to bind - not an object."),n,t);
} else {
var tier = temp__5818__auto__;
try{var fexpr__48153 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,tier,args);
return (fexpr__48153.cljs$core$IFn$_invoke$arity$2 ? fexpr__48153.cljs$core$IFn$_invoke$arity$2(n,t) : fexpr__48153.call(null,n,t));
}catch (e48152){var e = e48152;
return hyperfiddle.electric.impl.failer.run(e,n,t);
}}
});
}));

(hyperfiddle.electric.impl.runtime.bind.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(hyperfiddle.electric.impl.runtime.bind.cljs$lang$applyTo = (function (seq48150){
var G__48151 = cljs.core.first(seq48150);
var seq48150__$1 = cljs.core.next(seq48150);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48151,seq48150__$1);
}));

hyperfiddle.electric.impl.runtime.with$ = (function hyperfiddle$electric$impl$runtime$with(tier,_LT_x){
return (function (n,t){
var prev = cljs.core.deref(hyperfiddle.electric.impl.runtime.this$);
cljs.core.vreset_BANG_(hyperfiddle.electric.impl.runtime.this$,tier);

try{return (_LT_x.cljs$core$IFn$_invoke$arity$2 ? _LT_x.cljs$core$IFn$_invoke$arity$2(n,t) : _LT_x.call(null,n,t));
}finally {cljs.core.vreset_BANG_(hyperfiddle.electric.impl.runtime.this$,prev);
}});
});
hyperfiddle.electric.impl.runtime.clause = (function hyperfiddle$electric$impl$runtime$clause(var_args){
var G__48155 = arguments.length;
switch (G__48155) {
case 1:
return hyperfiddle.electric.impl.runtime.clause.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hyperfiddle.electric.impl.runtime.clause.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric.impl.runtime.clause.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (e){
var G__48156 = hyperfiddle.electric.impl.runtime.pure(e);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__48156) : f.call(null,G__48156));
});
}));

(hyperfiddle.electric.impl.runtime.clause.cljs$core$IFn$_invoke$arity$2 = (function (f,c){
return (function (e){
if((hyperfiddle.electric.debug.unwrap(e) instanceof c)){
var G__48157 = hyperfiddle.electric.impl.runtime.pure(e);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__48157) : f.call(null,G__48157));
} else {
return null;
}
});
}));

(hyperfiddle.electric.impl.runtime.clause.cljs$lang$maxFixedArity = 2);

hyperfiddle.electric.impl.runtime.recover = (function hyperfiddle$electric$impl$runtime$recover(tier,catch$,_LT_x){
return hyperfiddle.electric.impl.yield2.yield$((function (x){
if((x instanceof hyperfiddle.electric.Failure)){
var temp__5820__auto__ = (function (){var G__48158 = x.error;
return (catch$.cljs$core$IFn$_invoke$arity$1 ? catch$.cljs$core$IFn$_invoke$arity$1(G__48158) : catch$.call(null,G__48158));
})();
if((temp__5820__auto__ == null)){
return null;
} else {
var _LT_c = temp__5820__auto__;
return hyperfiddle.electric.impl.runtime.with$(tier,_LT_c);
}
} else {
return null;
}
}),_LT_x);
});
hyperfiddle.electric.impl.runtime.variable = (function hyperfiddle$electric$impl$runtime$variable(frame,vars,_LT__LT_x){
var slot = hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$3(frame,hyperfiddle.electric.impl.runtime.frame_slot_last_variable,cljs.core.inc);
var position = (slot + ((frame[hyperfiddle.electric.impl.runtime.frame_slot_last_source]) + (1)));
var tier = ((frame[hyperfiddle.electric.impl.runtime.frame_slot_tiers])[(position | (0))]);
(tier[hyperfiddle.electric.impl.runtime.tier_slot_remote] = slot);

(tier[hyperfiddle.electric.impl.runtime.tier_slot_vars] = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(vars)));

return ((frame[hyperfiddle.electric.impl.runtime.frame_slot_variables])[(slot | (0))] = missionary.core.signal_BANG_(missionary.core.cp_STAR_((function (){var cr48160_block_5 = (function hyperfiddle$electric$impl$runtime$variable_$_cr48160_block_5(cr48160_state){
try{var cr48160_place_14 = null;
(cr48160_state[(0)] = cr48160_block_8);

(cr48160_state[(6)] = cr48160_place_14);

return cr48160_state;
}catch (e48186){var cr48160_exception = e48186;
(cr48160_state[(0)] = cr48160_block_13);

(cr48160_state[(4)] = null);

(cr48160_state[(5)] = null);

(cr48160_state[(6)] = null);

(cr48160_state[(2)] = cr48160_exception);

return cr48160_state;
}});
var cr48160_block_1 = (function hyperfiddle$electric$impl$runtime$variable_$_cr48160_block_1(cr48160_state){
try{var cr48160_place_2 = _LT__LT_x;
(cr48160_state[(0)] = cr48160_block_2);

return missionary.core.switch$(cr48160_place_2);
}catch (e48187){var cr48160_exception = e48187;
(cr48160_state[(0)] = cr48160_block_13);

(cr48160_state[(2)] = cr48160_exception);

return cr48160_state;
}});
var cr48160_block_11 = (function hyperfiddle$electric$impl$runtime$variable_$_cr48160_block_11(cr48160_state){
try{var cr48160_place_3 = (cr48160_state[(3)]);
var cr48160_place_25 = cr48160_place_3;
(cr48160_state[(0)] = cr48160_block_12);

(cr48160_state[(3)] = null);

(cr48160_state[(4)] = cr48160_place_25);

return cr48160_state;
}catch (e48188){var cr48160_exception = e48188;
(cr48160_state[(0)] = cr48160_block_13);

(cr48160_state[(3)] = null);

(cr48160_state[(4)] = null);

(cr48160_state[(2)] = cr48160_exception);

return cr48160_state;
}});
var cr48160_block_9 = (function hyperfiddle$electric$impl$runtime$variable_$_cr48160_block_9(cr48160_state){
try{var cr48160_place_20 = cljs.core.ex_info;
var cr48160_place_21 = "called `new` on nil";
var cr48160_place_22 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr48160_place_23 = (function (){var G__48191 = cr48160_place_21;
var G__48192 = cr48160_place_22;
var fexpr__48190 = cr48160_place_20;
return (fexpr__48190.cljs$core$IFn$_invoke$arity$2 ? fexpr__48190.cljs$core$IFn$_invoke$arity$2(G__48191,G__48192) : fexpr__48190.call(null,G__48191,G__48192));
})();
var cr48160_place_24 = (new hyperfiddle.electric.Failure(cr48160_place_23));
(cr48160_state[(0)] = cr48160_block_10);

(cr48160_state[(5)] = cr48160_place_24);

return cr48160_state;
}catch (e48189){var cr48160_exception = e48189;
(cr48160_state[(0)] = cr48160_block_13);

(cr48160_state[(4)] = null);

(cr48160_state[(5)] = null);

(cr48160_state[(2)] = cr48160_exception);

return cr48160_state;
}});
var cr48160_block_13 = (function hyperfiddle$electric$impl$runtime$variable_$_cr48160_block_13(cr48160_state){
try{var cr48160_place_0 = (cr48160_state[(2)]);
var cr48160_place_26 = cr48160_place_0;
var cr48160_place_27 = cr48160_place_26;
var cr48160_place_28 = (new hyperfiddle.electric.Failure(cr48160_place_27));
(cr48160_state[(0)] = cr48160_block_14);

(cr48160_state[(2)] = cr48160_place_28);

return cr48160_state;
}catch (e48193){var cr48160_exception = e48193;
(cr48160_state[(0)] = cr48160_block_14);

(cr48160_state[(1)] = true);

(cr48160_state[(2)] = cr48160_exception);

return cr48160_state;
}});
var cr48160_block_4 = (function hyperfiddle$electric$impl$runtime$variable_$_cr48160_block_4(cr48160_state){
try{var cr48160_place_12 = new cljs.core.Keyword(null,"else","else",-1508377146);
var cr48160_place_13 = null;
if(cljs.core.truth_(cr48160_place_12)){
(cr48160_state[(0)] = cr48160_block_6);

(cr48160_state[(6)] = cr48160_place_13);

return cr48160_state;
} else {
(cr48160_state[(0)] = cr48160_block_5);

(cr48160_state[(3)] = null);

(cr48160_state[(6)] = cr48160_place_13);

return cr48160_state;
}
}catch (e48194){var cr48160_exception = e48194;
(cr48160_state[(0)] = cr48160_block_13);

(cr48160_state[(3)] = null);

(cr48160_state[(4)] = null);

(cr48160_state[(5)] = null);

(cr48160_state[(2)] = cr48160_exception);

return cr48160_state;
}});
var cr48160_block_2 = (function hyperfiddle$electric$impl$runtime$variable_$_cr48160_block_2(cr48160_state){
try{var cr48160_place_3 = missionary.core.unpark();
var cr48160_place_4 = hyperfiddle.electric.impl.runtime.failure;
var cr48160_place_5 = cr48160_place_3;
var cr48160_place_6 = cr48160_place_4(cr48160_place_5);
var cr48160_place_7 = null;
if(cljs.core.truth_(cr48160_place_6)){
(cr48160_state[(0)] = cr48160_block_11);

(cr48160_state[(3)] = cr48160_place_3);

(cr48160_state[(4)] = cr48160_place_7);

return cr48160_state;
} else {
(cr48160_state[(0)] = cr48160_block_3);

(cr48160_state[(3)] = cr48160_place_3);

(cr48160_state[(4)] = cr48160_place_7);

return cr48160_state;
}
}catch (e48195){var cr48160_exception = e48195;
(cr48160_state[(0)] = cr48160_block_13);

(cr48160_state[(2)] = cr48160_exception);

return cr48160_state;
}});
var cr48160_block_0 = (function hyperfiddle$electric$impl$runtime$variable_$_cr48160_block_0(cr48160_state){
try{var cr48160_place_0 = null;
var cr48160_place_1 = false;
(cr48160_state[(0)] = cr48160_block_1);

(cr48160_state[(2)] = cr48160_place_0);

(cr48160_state[(1)] = cr48160_place_1);

return cr48160_state;
}catch (e48196){var cr48160_exception = e48196;
(cr48160_state[(0)] = null);

throw cr48160_exception;
}});
var cr48160_block_10 = (function hyperfiddle$electric$impl$runtime$variable_$_cr48160_block_10(cr48160_state){
try{var cr48160_place_11 = (cr48160_state[(5)]);
(cr48160_state[(0)] = cr48160_block_12);

(cr48160_state[(5)] = null);

(cr48160_state[(4)] = cr48160_place_11);

return cr48160_state;
}catch (e48197){var cr48160_exception = e48197;
(cr48160_state[(0)] = cr48160_block_13);

(cr48160_state[(4)] = null);

(cr48160_state[(5)] = null);

(cr48160_state[(2)] = cr48160_exception);

return cr48160_state;
}});
var cr48160_block_7 = (function hyperfiddle$electric$impl$runtime$variable_$_cr48160_block_7(cr48160_state){
try{var cr48160_place_19 = missionary.core.unpark();
(cr48160_state[(0)] = cr48160_block_8);

(cr48160_state[(6)] = cr48160_place_19);

return cr48160_state;
}catch (e48198){var cr48160_exception = e48198;
(cr48160_state[(0)] = cr48160_block_13);

(cr48160_state[(4)] = null);

(cr48160_state[(5)] = null);

(cr48160_state[(6)] = null);

(cr48160_state[(2)] = cr48160_exception);

return cr48160_state;
}});
var cr48160_block_8 = (function hyperfiddle$electric$impl$runtime$variable_$_cr48160_block_8(cr48160_state){
try{var cr48160_place_13 = (cr48160_state[(6)]);
(cr48160_state[(0)] = cr48160_block_10);

(cr48160_state[(6)] = null);

(cr48160_state[(5)] = cr48160_place_13);

return cr48160_state;
}catch (e48199){var cr48160_exception = e48199;
(cr48160_state[(0)] = cr48160_block_13);

(cr48160_state[(4)] = null);

(cr48160_state[(5)] = null);

(cr48160_state[(6)] = null);

(cr48160_state[(2)] = cr48160_exception);

return cr48160_state;
}});
var cr48160_block_12 = (function hyperfiddle$electric$impl$runtime$variable_$_cr48160_block_12(cr48160_state){
try{var cr48160_place_7 = (cr48160_state[(4)]);
(cr48160_state[(0)] = cr48160_block_14);

(cr48160_state[(4)] = null);

(cr48160_state[(2)] = cr48160_place_7);

return cr48160_state;
}catch (e48200){var cr48160_exception = e48200;
(cr48160_state[(0)] = cr48160_block_13);

(cr48160_state[(4)] = null);

(cr48160_state[(2)] = cr48160_exception);

return cr48160_state;
}});
var cr48160_block_3 = (function hyperfiddle$electric$impl$runtime$variable_$_cr48160_block_3(cr48160_state){
try{var cr48160_place_3 = (cr48160_state[(3)]);
var cr48160_place_8 = cr48160_place_3;
var cr48160_place_9 = null;
var cr48160_place_10 = (cr48160_place_8 == cr48160_place_9);
var cr48160_place_11 = null;
if(cr48160_place_10){
(cr48160_state[(0)] = cr48160_block_9);

(cr48160_state[(3)] = null);

(cr48160_state[(5)] = cr48160_place_11);

return cr48160_state;
} else {
(cr48160_state[(0)] = cr48160_block_4);

(cr48160_state[(5)] = cr48160_place_11);

return cr48160_state;
}
}catch (e48201){var cr48160_exception = e48201;
(cr48160_state[(0)] = cr48160_block_13);

(cr48160_state[(3)] = null);

(cr48160_state[(4)] = null);

(cr48160_state[(2)] = cr48160_exception);

return cr48160_state;
}});
var cr48160_block_14 = (function hyperfiddle$electric$impl$runtime$variable_$_cr48160_block_14(cr48160_state){
try{var cr48160_place_1 = (cr48160_state[(1)]);
var cr48160_place_0 = (cr48160_state[(2)]);
var cr48160_place_29 = (cljs.core.truth_(cr48160_place_1)?(function(){throw cr48160_place_0})():cr48160_place_0);
(cr48160_state[(0)] = null);

(cr48160_state[(1)] = null);

(cr48160_state[(2)] = null);

return cr48160_place_29;
}catch (e48202){var cr48160_exception = e48202;
(cr48160_state[(0)] = null);

(cr48160_state[(1)] = null);

(cr48160_state[(2)] = null);

throw cr48160_exception;
}});
var cr48160_block_6 = (function hyperfiddle$electric$impl$runtime$variable_$_cr48160_block_6(cr48160_state){
try{var cr48160_place_3 = (cr48160_state[(3)]);
var cr48160_place_15 = hyperfiddle.electric.impl.runtime.with$;
var cr48160_place_16 = tier;
var cr48160_place_17 = cr48160_place_3;
var cr48160_place_18 = (function (){var G__48205 = cr48160_place_16;
var G__48206 = cr48160_place_17;
var fexpr__48204 = cr48160_place_15;
return (fexpr__48204.cljs$core$IFn$_invoke$arity$2 ? fexpr__48204.cljs$core$IFn$_invoke$arity$2(G__48205,G__48206) : fexpr__48204.call(null,G__48205,G__48206));
})();
(cr48160_state[(0)] = cr48160_block_7);

(cr48160_state[(3)] = null);

return missionary.core.switch$(cr48160_place_18);
}catch (e48203){var cr48160_exception = e48203;
(cr48160_state[(0)] = cr48160_block_13);

(cr48160_state[(3)] = null);

(cr48160_state[(4)] = null);

(cr48160_state[(5)] = null);

(cr48160_state[(6)] = null);

(cr48160_state[(2)] = cr48160_exception);

return cr48160_state;
}});
return cloroutine.impl.coroutine((function (){var G__48207 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((7));
(G__48207[(0)] = cr48160_block_0);

return G__48207;
})());
})())));
});
hyperfiddle.electric.impl.runtime.source = (function hyperfiddle$electric$impl$runtime$source(frame,vars){
var slot_48575 = hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$3(frame,hyperfiddle.electric.impl.runtime.frame_slot_last_source,cljs.core.inc);
var position_48576 = (slot_48575 + ((frame[hyperfiddle.electric.impl.runtime.frame_slot_last_variable]) + (1)));
((frame[hyperfiddle.electric.impl.runtime.frame_slot_sources])[(slot_48575 | (0))] = (function (){var G__48208 = ((frame[hyperfiddle.electric.impl.runtime.frame_slot_tiers])[(position_48576 | (0))]);
(G__48208[hyperfiddle.electric.impl.runtime.tier_slot_vars] = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(vars)));

return G__48208;
})());

return null;
});
hyperfiddle.electric.impl.runtime.target = (function hyperfiddle$electric$impl$runtime$target(frame,ctor){
((frame[hyperfiddle.electric.impl.runtime.frame_slot_targets])[(hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$3(frame,hyperfiddle.electric.impl.runtime.frame_slot_last_target,cljs.core.inc) | (0))] = ctor);

return null;
});
hyperfiddle.electric.impl.runtime.hook = (function hyperfiddle$electric$impl$runtime$hook(k,v,_LT_x){
if((!((v == null)))){
} else {
throw (new Error(["Assert failed: ","hook value must be non-nil.","\n","(some? v)"].join('')));
}

return (function (n,t){
var temp__5818__auto__ = cljs.core.deref(hyperfiddle.electric.impl.runtime.this$);
if((temp__5818__auto__ == null)){
return hyperfiddle.electric.impl.failer.run(hyperfiddle.electric.impl.runtime.error("Unable to hook - not an object."),n,t);
} else {
var tier = temp__5818__auto__;
var tier_48583__$1 = tier;
while(true){
var f_48584 = (tier_48583__$1[hyperfiddle.electric.impl.runtime.tier_slot_parent]);
var temp__5818__auto___48585__$1 = hyperfiddle.electric.impl.runtime.frame_walk_tiers(f_48584,(1),k,cljs.core.identity,(tier_48583__$1[hyperfiddle.electric.impl.runtime.tier_slot_position]));
if((temp__5818__auto___48585__$1 == null)){
var temp__5820__auto___48586 = (f_48584[hyperfiddle.electric.impl.runtime.frame_slot_parent]);
if((temp__5820__auto___48586 == null)){
} else {
var tier_48587__$2 = temp__5820__auto___48586;
var temp__5818__auto___48588__$2 = hyperfiddle.electric.impl.runtime.tier_walk_frames(tier_48587__$2,(1),k,cljs.core.identity,(f_48584[hyperfiddle.electric.impl.runtime.frame_slot_position]));
if((temp__5818__auto___48588__$2 == null)){
if(cljs.core.contains_QMARK_((tier_48587__$2[hyperfiddle.electric.impl.runtime.tier_slot_hooks]),k)){
(k.cljs$core$IFn$_invoke$arity$2 ? k.cljs$core$IFn$_invoke$arity$2(v,null) : k.call(null,v,null));
} else {
var G__48593 = tier_48587__$2;
tier_48583__$1 = G__48593;
continue;
}
} else {
var a_48594 = temp__5818__auto___48588__$2;
(k.cljs$core$IFn$_invoke$arity$2 ? k.cljs$core$IFn$_invoke$arity$2(v,a_48594) : k.call(null,v,a_48594));
}
}
} else {
var a_48595 = temp__5818__auto___48585__$1;
(k.cljs$core$IFn$_invoke$arity$2 ? k.cljs$core$IFn$_invoke$arity$2(v,a_48595) : k.call(null,v,a_48595));
}
break;
}

hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$5(tier,hyperfiddle.electric.impl.runtime.tier_slot_hooks,cljs.core.assoc,k,v);

var G__48209 = n;
var G__48210 = (function (){
hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$4(tier,hyperfiddle.electric.impl.runtime.tier_slot_hooks,cljs.core.dissoc,k);

(k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(v) : k.call(null,v));

return (t.cljs$core$IFn$_invoke$arity$0 ? t.cljs$core$IFn$_invoke$arity$0() : t.call(null));
});
return (_LT_x.cljs$core$IFn$_invoke$arity$2 ? _LT_x.cljs$core$IFn$_invoke$arity$2(G__48209,G__48210) : _LT_x.call(null,G__48209,G__48210));
}
});
});
hyperfiddle.electric.impl.runtime.unbound = hyperfiddle.electric.impl.runtime.pure(new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","unbound","hyperfiddle.electric.impl.runtime/unbound",63043117));
hyperfiddle.electric.impl.runtime.subject_at = (function hyperfiddle$electric$impl$runtime$subject_at(arr,slot){
return (function (_BANG_){
(arr[slot] = _BANG_);

return (function (){
return (arr[slot] = null);
});
});
});
hyperfiddle.electric.impl.runtime.context_ack = (function hyperfiddle$electric$impl$runtime$context_ack(context){
var rpos = (context[hyperfiddle.electric.impl.runtime.context_slot_pending_rpos]);
var buffer = (context[hyperfiddle.electric.impl.runtime.context_slot_pending_buffer]);
var output = (buffer[rpos]);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rpos,(context[hyperfiddle.electric.impl.runtime.context_slot_pending_wpos]))){
throw hyperfiddle.electric.impl.runtime.error("Unexpected ack.");
} else {
}

(context[hyperfiddle.electric.impl.runtime.context_slot_pending_rpos] = ((rpos + (1)) & (buffer.length - (1))));

(buffer[rpos] = null);

var output__$1 = output;
while(true){
if((output__$1 == null)){
return null;
} else {
((output__$1[hyperfiddle.electric.impl.runtime.output_slot_prev])[hyperfiddle.electric.impl.runtime.output_slot_next] = null);

(output__$1[hyperfiddle.electric.impl.runtime.output_slot_prev] = null);

(output__$1[hyperfiddle.electric.impl.runtime.output_slot_time] = null);

var input_48600 = (output__$1[hyperfiddle.electric.impl.runtime.output_slot_input]);
if((hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$3(input_48600,hyperfiddle.electric.impl.runtime.input_slot_pending,cljs.core.dec) === (0))){
hyperfiddle.electric.impl.runtime.input_ready(input_48600);
} else {
}

var G__48601 = (output__$1[hyperfiddle.electric.impl.runtime.output_slot_next]);
output__$1 = G__48601;
continue;
}
break;
}
});
hyperfiddle.electric.impl.runtime.context_cancel = (function hyperfiddle$electric$impl$runtime$context_cancel(context){
return hyperfiddle.electric.impl.runtime.update_event(context,new cljs.core.Keyword(null,"cancel","cancel",-1964088360),cljs.core.identity);
});
hyperfiddle.electric.impl.runtime.context_transfer = (function hyperfiddle$electric$impl$runtime$context_transfer(context){
while(true){
var temp__5818__auto__ = (context[hyperfiddle.electric.impl.runtime.context_slot_check]);
if((temp__5818__auto__ == null)){
var event = (context[hyperfiddle.electric.impl.runtime.context_slot_event]);
if(cljs.core.contains_QMARK_(event,new cljs.core.Keyword(null,"cancel","cancel",-1964088360))){
var fexpr__48211_48603 = (context[hyperfiddle.electric.impl.runtime.context_slot_terminator]);
(fexpr__48211_48603.cljs$core$IFn$_invoke$arity$0 ? fexpr__48211_48603.cljs$core$IFn$_invoke$arity$0() : fexpr__48211_48603.call(null));

throw (new missionary.Cancelled());
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"change","change",-1163046502).cljs$core$IFn$_invoke$arity$1(event))){
} else {
var buffer_48604 = (context[hyperfiddle.electric.impl.runtime.context_slot_pending_buffer]);
var size_48605 = buffer_48604.length;
var rpos_48606 = (context[hyperfiddle.electric.impl.runtime.context_slot_pending_rpos]);
var wpos_48607 = (context[hyperfiddle.electric.impl.runtime.context_slot_pending_wpos]);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rpos_48606,(context[hyperfiddle.electric.impl.runtime.context_slot_pending_wpos] = ((wpos_48607 + (1)) & (size_48605 - (1)))))){
var larger_48608 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((size_48605 << (1)));
var split_48609 = (size_48605 - rpos_48606);
hyperfiddle.electric.impl.runtime.acopy(buffer_48604,rpos_48606,larger_48608,(0),split_48609);

hyperfiddle.electric.impl.runtime.acopy(buffer_48604,(0),larger_48608,split_48609,rpos_48606);

var n__5589__auto___48610 = size_48605;
var t_48611 = (0);
while(true){
if((t_48611 < n__5589__auto___48610)){
var temp__5820__auto___48612 = (larger_48608[t_48611]);
if((temp__5820__auto___48612 == null)){
} else {
var output_48613 = temp__5820__auto___48612;
var o_48614 = output_48613;
while(true){
(o_48614[hyperfiddle.electric.impl.runtime.output_slot_time] = t_48611);

var n_48616 = (o_48614[hyperfiddle.electric.impl.runtime.output_slot_next]);
if((n_48616 === output_48613)){
} else {
var G__48617 = n_48616;
o_48614 = G__48617;
continue;
}
break;
}
}

var G__48618 = (t_48611 + (1));
t_48611 = G__48618;
continue;
} else {
}
break;
}

(context[hyperfiddle.electric.impl.runtime.context_slot_pending_buffer] = larger_48608);

(context[hyperfiddle.electric.impl.runtime.context_slot_pending_wpos] = size_48605);

(context[hyperfiddle.electric.impl.runtime.context_slot_pending_rpos] = (0));
} else {
}
}

(context[hyperfiddle.electric.impl.runtime.context_slot_event] = null);

return event;
} else {
var input = temp__5818__auto__;
(context[hyperfiddle.electric.impl.runtime.context_slot_check] = (input[hyperfiddle.electric.impl.runtime.input_slot_check]));

(input[hyperfiddle.electric.impl.runtime.input_slot_check] = input);

hyperfiddle.electric.impl.runtime.input_check(input);

continue;
}
break;
}
});
hyperfiddle.electric.impl.runtime.eval_tree_inst = (function hyperfiddle$electric$impl$runtime$eval_tree_inst(context,inst){
var G__48212_48619 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(inst);
var G__48212_48620__$1 = (((G__48212_48619 instanceof cljs.core.Keyword))?G__48212_48619.fqn:null);
switch (G__48212_48620__$1) {
case "create":
var map__48213_48622 = inst;
var map__48213_48623__$1 = cljs.core.__destructure_map(map__48213_48622);
var vec__48214_48624 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48213_48623__$1,new cljs.core.Keyword(null,"target","target",253001721));
var target_frame_48625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48214_48624,(0),null);
var target_slot_48626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48214_48624,(1),null);
var vec__48217_48627 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48213_48623__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var source_frame_48628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48217_48627,(0),null);
var source_slot_48629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48217_48627,(1),null);
var G__48221_48630 = ((cljs.core.get.cljs$core$IFn$_invoke$arity$2((context[hyperfiddle.electric.impl.runtime.context_slot_frame_store]),source_frame_48628)[hyperfiddle.electric.impl.runtime.frame_slot_sources])[source_slot_48629]);
var G__48222_48631 = hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$3(context,hyperfiddle.electric.impl.runtime.context_slot_remote_id,cljs.core.dec);
var fexpr__48220_48632 = ((cljs.core.get.cljs$core$IFn$_invoke$arity$2((context[hyperfiddle.electric.impl.runtime.context_slot_frame_store]),target_frame_48625)[hyperfiddle.electric.impl.runtime.frame_slot_targets])[target_slot_48626]);
(fexpr__48220_48632.cljs$core$IFn$_invoke$arity$2 ? fexpr__48220_48632.cljs$core$IFn$_invoke$arity$2(G__48221_48630,G__48222_48631) : fexpr__48220_48632.call(null,G__48221_48630,G__48222_48631));

break;
case "rotate":
hyperfiddle.electric.impl.runtime.frame_rotate(cljs.core.get.cljs$core$IFn$_invoke$arity$2((context[hyperfiddle.electric.impl.runtime.context_slot_frame_store]),new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(inst)),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(inst));

break;
case "remove":
hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$4(context,hyperfiddle.electric.impl.runtime.context_slot_frame_store,cljs.core.dissoc_BANG_,new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(inst));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48212_48620__$1)].join('')));

}

return context;
});
hyperfiddle.electric.impl.runtime.eval_change_inst = (function hyperfiddle$electric$impl$runtime$eval_change_inst(context,p__48223,value){
var vec__48224 = p__48223;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48224,(0),null);
var slot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48224,(1),null);
hyperfiddle.electric.impl.runtime.input_change(((cljs.core.get.cljs$core$IFn$_invoke$arity$2((context[hyperfiddle.electric.impl.runtime.context_slot_frame_store]),id)[hyperfiddle.electric.impl.runtime.frame_slot_inputs])[slot]),value);

return context;
});
hyperfiddle.electric.impl.runtime.eval_freeze_inst = (function hyperfiddle$electric$impl$runtime$eval_freeze_inst(context,p__48227){
var vec__48228 = p__48227;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48228,(0),null);
var slot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48228,(1),null);
hyperfiddle.electric.impl.runtime.input_freeze(((cljs.core.get.cljs$core$IFn$_invoke$arity$2((context[hyperfiddle.electric.impl.runtime.context_slot_frame_store]),id)[hyperfiddle.electric.impl.runtime.frame_slot_inputs])[slot]));

return context;
});
hyperfiddle.electric.impl.runtime.parse_event = (function hyperfiddle$electric$impl$runtime$parse_event(context,p__48231){
var map__48232 = p__48231;
var map__48232__$1 = cljs.core.__destructure_map(map__48232);
var acks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48232__$1,new cljs.core.Keyword(null,"acks","acks",707064729));
var tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48232__$1,new cljs.core.Keyword(null,"tree","tree",-196312028));
var change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48232__$1,new cljs.core.Keyword(null,"change","change",-1163046502));
var freeze = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48232__$1,new cljs.core.Keyword(null,"freeze","freeze",2043466309));
try{var n__5589__auto___48634 = acks;
var __48635 = (0);
while(true){
if((__48635 < n__5589__auto___48634)){
hyperfiddle.electric.impl.runtime.context_ack(context);

var G__48636 = (__48635 + (1));
__48635 = G__48636;
continue;
} else {
}
break;
}

cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.eval_tree_inst,context,tree);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,change)){
} else {
hyperfiddle.electric.impl.runtime.update_event(context,new cljs.core.Keyword(null,"acks","acks",707064729),cljs.core.inc);

cljs.core.reduce_kv(hyperfiddle.electric.impl.runtime.eval_change_inst,context,change);
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.eval_freeze_inst,context,freeze);
}catch (e48233){var e = e48233;
console.error(e);

throw e;
}});
hyperfiddle.electric.impl.runtime.process_incoming_events = (function hyperfiddle$electric$impl$runtime$process_incoming_events(context,_GT_incoming){
return missionary.core.sample(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.reduce,hyperfiddle.electric.impl.runtime.parse_event,context),_GT_incoming);
});
hyperfiddle.electric.impl.runtime.write_outgoing_events = (function hyperfiddle$electric$impl$runtime$write_outgoing_events(write,_GT_events){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr48234_block_0 = (function hyperfiddle$electric$impl$runtime$write_outgoing_events_$_cr48234_block_0(cr48234_state){
try{var cr48234_place_0 = (1);
var cr48234_place_1 = _GT_events;
(cr48234_state[(0)] = cr48234_block_1);

return missionary.core.fork(cr48234_place_0,cr48234_place_1);
}catch (e48246){var cr48234_exception = e48246;
(cr48234_state[(0)] = null);

throw cr48234_exception;
}});
var cr48234_block_1 = (function hyperfiddle$electric$impl$runtime$write_outgoing_events_$_cr48234_block_1(cr48234_state){
try{var cr48234_place_2 = missionary.core.unpark();
var cr48234_place_3 = cljs.core._EQ_;
var cr48234_place_4 = cr48234_place_2;
var cr48234_place_5 = hyperfiddle.electric.impl.runtime.empty_event;
var cr48234_place_6 = (function (){var G__48249 = cr48234_place_4;
var G__48250 = cr48234_place_5;
var fexpr__48248 = cr48234_place_3;
return (fexpr__48248.cljs$core$IFn$_invoke$arity$2 ? fexpr__48248.cljs$core$IFn$_invoke$arity$2(G__48249,G__48250) : fexpr__48248.call(null,G__48249,G__48250));
})();
var cr48234_place_7 = null;
if(cljs.core.truth_(cr48234_place_6)){
(cr48234_state[(0)] = cr48234_block_4);

(cr48234_state[(2)] = cr48234_place_7);

return cr48234_state;
} else {
(cr48234_state[(0)] = cr48234_block_2);

(cr48234_state[(1)] = cr48234_place_2);

(cr48234_state[(2)] = cr48234_place_7);

return cr48234_state;
}
}catch (e48247){var cr48234_exception = e48247;
(cr48234_state[(0)] = null);

throw cr48234_exception;
}});
var cr48234_block_2 = (function hyperfiddle$electric$impl$runtime$write_outgoing_events_$_cr48234_block_2(cr48234_state){
try{var cr48234_place_2 = (cr48234_state[(1)]);
var cr48234_place_8 = write;
var cr48234_place_9 = cr48234_place_2;
var cr48234_place_10 = (function (){var G__48253 = cr48234_place_9;
var fexpr__48252 = cr48234_place_8;
return (fexpr__48252.cljs$core$IFn$_invoke$arity$1 ? fexpr__48252.cljs$core$IFn$_invoke$arity$1(G__48253) : fexpr__48252.call(null,G__48253));
})();
(cr48234_state[(0)] = cr48234_block_3);

(cr48234_state[(1)] = null);

return missionary.core.park(cr48234_place_10);
}catch (e48251){var cr48234_exception = e48251;
(cr48234_state[(0)] = null);

(cr48234_state[(1)] = null);

(cr48234_state[(2)] = null);

throw cr48234_exception;
}});
var cr48234_block_3 = (function hyperfiddle$electric$impl$runtime$write_outgoing_events_$_cr48234_block_3(cr48234_state){
try{var cr48234_place_11 = missionary.core.unpark();
(cr48234_state[(0)] = cr48234_block_5);

(cr48234_state[(2)] = cr48234_place_11);

return cr48234_state;
}catch (e48254){var cr48234_exception = e48254;
(cr48234_state[(0)] = null);

(cr48234_state[(2)] = null);

throw cr48234_exception;
}});
var cr48234_block_4 = (function hyperfiddle$electric$impl$runtime$write_outgoing_events_$_cr48234_block_4(cr48234_state){
try{var cr48234_place_12 = null;
(cr48234_state[(0)] = cr48234_block_5);

(cr48234_state[(2)] = cr48234_place_12);

return cr48234_state;
}catch (e48255){var cr48234_exception = e48255;
(cr48234_state[(0)] = null);

(cr48234_state[(2)] = null);

throw cr48234_exception;
}});
var cr48234_block_5 = (function hyperfiddle$electric$impl$runtime$write_outgoing_events_$_cr48234_block_5(cr48234_state){
try{var cr48234_place_7 = (cr48234_state[(2)]);
(cr48234_state[(0)] = null);

(cr48234_state[(2)] = null);

return cr48234_place_7;
}catch (e48256){var cr48234_exception = e48256;
(cr48234_state[(0)] = null);

(cr48234_state[(2)] = null);

throw cr48234_exception;
}});
return cloroutine.impl.coroutine((function (){var G__48257 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3));
(G__48257[(0)] = cr48234_block_0);

return G__48257;
})());
})(),missionary.core.ap_run);
});
hyperfiddle.electric.impl.runtime.peer = (function hyperfiddle$electric$impl$runtime$peer(dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,ctor,get_used_nodes,nm,env){
return (function() {
var hyperfiddle$electric$impl$runtime$peer_$_rec = null;
var hyperfiddle$electric$impl$runtime$peer_$_rec__2 = (function (write,_QMARK_read){
return hyperfiddle$electric$impl$runtime$peer_$_rec.cljs$core$IFn$_invoke$arity$3(write,_QMARK_read,hyperfiddle.electric.impl.runtime.pst);
});
var hyperfiddle$electric$impl$runtime$peer_$_rec__3 = (function (write,_QMARK_read,on_error){
return missionary.core.reactor_call((function (){
var context = hyperfiddle.electric.impl.runtime.make_context();
missionary.core.stream_BANG_(hyperfiddle.electric.impl.runtime.write_outgoing_events(write,missionary.core.stream_BANG_((function (n,t){
(context[hyperfiddle.electric.impl.runtime.context_slot_notifier] = n);

(context[hyperfiddle.electric.impl.runtime.context_slot_terminator] = t);

var temp__5820__auto___48641 = (function (){try{return hyperfiddle.electric.impl.runtime.make_frame(context,null,(0),(0),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,context,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),ctor,get_used_nodes,nm,env);
}catch (e48258){var e = e48258;
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));

throw e;
}})();
if((temp__5820__auto___48641 == null)){
} else {
var _LT_main_48643 = temp__5820__auto___48641;
try{missionary.core.stream_BANG_(missionary.core.latest.cljs$core$IFn$_invoke$arity$variadic((function (x){
if((x instanceof hyperfiddle.electric.Failure)){
var G__48260 = x.error;
return (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(G__48260) : on_error.call(null,G__48260));
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_LT_main_48643], 0)));
}catch (e48259){var e_48644 = e48259;
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e_48644], 0));

throw e_48644;
}}

return hyperfiddle.electric.impl.runtime.__GT_It(context,hyperfiddle.electric.impl.runtime.context_cancel,hyperfiddle.electric.impl.runtime.context_transfer);
}))));

return missionary.core.stream_BANG_(hyperfiddle.electric.impl.runtime.process_incoming_events(context,missionary.core.stream_BANG_(missionary.core.relieve.cljs$core$IFn$_invoke$arity$2(cljs.core.into,missionary.core.sample(cljs.core.vector,missionary.core.observe(_QMARK_read))))));
}));
});
hyperfiddle$electric$impl$runtime$peer_$_rec = function(write,_QMARK_read,on_error){
switch(arguments.length){
case 2:
return hyperfiddle$electric$impl$runtime$peer_$_rec__2.call(this,write,_QMARK_read);
case 3:
return hyperfiddle$electric$impl$runtime$peer_$_rec__3.call(this,write,_QMARK_read,on_error);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hyperfiddle$electric$impl$runtime$peer_$_rec.cljs$core$IFn$_invoke$arity$2 = hyperfiddle$electric$impl$runtime$peer_$_rec__2;
hyperfiddle$electric$impl$runtime$peer_$_rec.cljs$core$IFn$_invoke$arity$3 = hyperfiddle$electric$impl$runtime$peer_$_rec__3;
return hyperfiddle$electric$impl$runtime$peer_$_rec;
})()
});
hyperfiddle.electric.impl.runtime.collapse = (function hyperfiddle$electric$impl$runtime$collapse(var_args){
var args__5728__auto__ = [];
var len__5722__auto___48645 = arguments.length;
var i__5723__auto___48646 = (0);
while(true){
if((i__5723__auto___48646 < len__5722__auto___48645)){
args__5728__auto__.push((arguments[i__5723__auto___48646]));

var G__48647 = (i__5723__auto___48646 + (1));
i__5723__auto___48646 = G__48647;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((3) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((3)),(0),null)):null);
return hyperfiddle.electric.impl.runtime.collapse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5729__auto__);
});

(hyperfiddle.electric.impl.runtime.collapse.cljs$core$IFn$_invoke$arity$variadic = (function (s,n,f,args){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.iterate(cljs.core.pop,s),n),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.peek),cljs.core.take.cljs$core$IFn$_invoke$arity$1(n)),cljs.core.conj,args,cljs.core.iterate(cljs.core.pop,s))));
}));

(hyperfiddle.electric.impl.runtime.collapse.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(hyperfiddle.electric.impl.runtime.collapse.cljs$lang$applyTo = (function (seq48261){
var G__48262 = cljs.core.first(seq48261);
var seq48261__$1 = cljs.core.next(seq48261);
var G__48263 = cljs.core.first(seq48261__$1);
var seq48261__$2 = cljs.core.next(seq48261__$1);
var G__48264 = cljs.core.first(seq48261__$2);
var seq48261__$3 = cljs.core.next(seq48261__$2);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48262,G__48263,G__48264,seq48261__$3);
}));

hyperfiddle.electric.impl.runtime.snapshot = (function hyperfiddle$electric$impl$runtime$snapshot(var_args){
var args__5728__auto__ = [];
var len__5722__auto___48665 = arguments.length;
var i__5723__auto___48666 = (0);
while(true){
if((i__5723__auto___48666 < len__5722__auto___48665)){
args__5728__auto__.push((arguments[i__5723__auto___48666]));

var G__48667 = (i__5723__auto___48666 + (1));
i__5723__auto___48666 = G__48667;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((2) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((2)),(0),null)):null);
return hyperfiddle.electric.impl.runtime.snapshot.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5729__auto__);
});

(hyperfiddle.electric.impl.runtime.snapshot.cljs$core$IFn$_invoke$arity$variadic = (function (env,f,args){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,env,args));
}));

(hyperfiddle.electric.impl.runtime.snapshot.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(hyperfiddle.electric.impl.runtime.snapshot.cljs$lang$applyTo = (function (seq48265){
var G__48266 = cljs.core.first(seq48265);
var seq48265__$1 = cljs.core.next(seq48265);
var G__48267 = cljs.core.first(seq48265__$1);
var seq48265__$2 = cljs.core.next(seq48265__$1);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48266,G__48267,seq48265__$2);
}));

hyperfiddle.electric.impl.runtime.reverse_index = (function hyperfiddle$electric$impl$runtime$reverse_index(m){
return cljs.core.reduce_kv((function (v,x,i){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,i,x);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(m),null)),m);
});
hyperfiddle.electric.impl.runtime.empty_frame = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"free","free",801364328),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"static","static",1214358571),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"target","target",253001721)],[(0),cljs.core.PersistentHashSet.EMPTY,(0),cljs.core.PersistentArrayMap.EMPTY,(0),(0),cljs.core.PersistentArrayMap.EMPTY,(0),(0)]);
hyperfiddle.electric.impl.runtime.sym = (function hyperfiddle$electric$impl$runtime$sym(var_args){
var args__5728__auto__ = [];
var len__5722__auto___48669 = arguments.length;
var i__5723__auto___48670 = (0);
while(true){
if((i__5723__auto___48670 < len__5722__auto___48669)){
args__5728__auto__.push((arguments[i__5723__auto___48670]));

var G__48677 = (i__5723__auto___48670 + (1));
i__5723__auto___48670 = G__48677;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",args));
}));

(hyperfiddle.electric.impl.runtime.sym.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hyperfiddle.electric.impl.runtime.sym.cljs$lang$applyTo = (function (seq48268){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48268));
}));

hyperfiddle.electric.impl.runtime.find_nodes = (function hyperfiddle$electric$impl$runtime$find_nodes(ir){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.distinct.cljs$core$IFn$_invoke$arity$0(),cljs.core.completing.cljs$core$IFn$_invoke$arity$1((function (ac,nx){
var G__48269 = ac;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hyperfiddle.electric.impl.ir","node","hyperfiddle.electric.impl.ir/node",1672712002),new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425).cljs$core$IFn$_invoke$arity$1(nx))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__48269,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","slot","hyperfiddle.electric.impl.ir/slot",1432523351).cljs$core$IFn$_invoke$arity$1(nx));
} else {
return G__48269;
}
})),cljs.core.PersistentVector.EMPTY,hyperfiddle.electric.impl.ir_utils.__GT_reducible(ir));
});
hyperfiddle.electric.impl.runtime.remove_dep_nodes = (function hyperfiddle$electric$impl$runtime$remove_dep_nodes(ir){
return hyperfiddle.electric.impl.ir_utils.postwalk(ir,(function (v){
var G__48271 = v;
if(cljs.core.truth_(new cljs.core.Keyword("hyperfiddle.electric.impl.ir","deps","hyperfiddle.electric.impl.ir/deps",-1313673773).cljs$core$IFn$_invoke$arity$1(v))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__48271,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","deps","hyperfiddle.electric.impl.ir/deps",-1313673773),(function (p1__48270_SHARP_){
return cljs.core.filterv(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.electric.impl.ir","node","hyperfiddle.electric.impl.ir/node",1672712002),null], null), null),new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425)),p1__48270_SHARP_);
}));
} else {
return G__48271;
}
}));
});
hyperfiddle.electric.impl.runtime.tag_sym = (function hyperfiddle$electric$impl$runtime$tag_sym(sym,jvm_hint,js_hint){
if(cljs.core.truth_(js_hint)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(sym,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),js_hint);
} else {
return null;
}
});
hyperfiddle.electric.impl.runtime.compile = (function hyperfiddle$electric$impl$runtime$compile(prefix,inst,e){
var nodes = hyperfiddle.electric.impl.runtime.find_nodes(inst);
var inst__$1 = hyperfiddle.electric.impl.runtime.remove_dep_nodes(inst);
var frame = hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"frame","frame",-70551061,null)], 0));
var vars = hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"vars","vars",-406425690,null)], 0));
var ctor_at = (function (i){
return hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"ctor","ctor",-903570967,null),i], 0));
});
var expr_at = (function (i){
return hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"expr","expr",-1908713478,null),i], 0));
});
var restore_free = (function (env,free){
return cljs.core.reduce_kv((function (env__$1,i,f){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,f,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aget","cljs.core/aget",6345791,null),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"env","env",-175281708,null)], 0)),(new cljs.core.List(null,i,null,(1),null)),(2),null)),(3),null)));
}),env,free);
});
var capture_free = (function (env,free){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","doto","cljs.core/doto",-1284816239,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","object-array","cljs.core/object-array",613323432,null),null,(1),null)),(new cljs.core.List(null,cljs.core.count(free),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (i,f){
return (new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aset","cljs.core/aset",-898215545,null),(new cljs.core.List(null,i,(new cljs.core.List(null,(env.cljs$core$IFn$_invoke$arity$1 ? env.cljs$core$IFn$_invoke$arity$1(f) : env.call(null,f)),null,(1),null)),(2),null)),(3),null));
})),free], 0))], 0))));
});
var emit_exprs = (function (exprs){
return (new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frame,vars,hyperfiddle.electric.impl.runtime.tag_sym(hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"env","env",-175281708,null)], 0)),"[Ljava.lang.Object;",null)], null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),(new cljs.core.List(null,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (i,expr){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [expr_at(i),expr], null);
})),cljs.core.cat),cljs.core.pop(exprs)),(new cljs.core.List(null,cljs.core.peek(exprs),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null));
});
var update_current = (function() { 
var G__48688__delegate = function (ctors,f,args){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(ctors),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,cljs.core.peek(ctors),args));
};
var G__48688 = function (ctors,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__48689__i = 0, G__48689__a = new Array(arguments.length -  2);
while (G__48689__i < G__48689__a.length) {G__48689__a[G__48689__i] = arguments[G__48689__i + 2]; ++G__48689__i;}
  args = new cljs.core.IndexedSeq(G__48689__a,0,null);
} 
return G__48688__delegate.call(this,ctors,f,args);};
G__48688.cljs$lang$maxFixedArity = 2;
G__48688.cljs$lang$applyTo = (function (arglist__48690){
var ctors = cljs.core.first(arglist__48690);
arglist__48690 = cljs.core.next(arglist__48690);
var f = cljs.core.first(arglist__48690);
var args = cljs.core.rest(arglist__48690);
return G__48688__delegate(ctors,f,args);
});
G__48688.cljs$core$IFn$_invoke$arity$variadic = G__48688__delegate;
return G__48688;
})()
;
var from_last_expr = (function() { 
var G__48691__delegate = function (exprs,f,args){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(exprs,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,expr_at((cljs.core.count(exprs) - (1))),args));
};
var G__48691 = function (exprs,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__48692__i = 0, G__48692__a = new Array(arguments.length -  2);
while (G__48692__i < G__48692__a.length) {G__48692__a[G__48692__i] = arguments[G__48692__i + 2]; ++G__48692__i;}
  args = new cljs.core.IndexedSeq(G__48692__a,0,null);
} 
return G__48691__delegate.call(this,exprs,f,args);};
G__48691.cljs$lang$maxFixedArity = 2;
G__48691.cljs$lang$applyTo = (function (arglist__48693){
var exprs = cljs.core.first(arglist__48693);
arglist__48693 = cljs.core.next(arglist__48693);
var f = cljs.core.first(arglist__48693);
var args = cljs.core.rest(arglist__48693);
return G__48691__delegate(exprs,f,args);
});
G__48691.cljs$core$IFn$_invoke$arity$variadic = G__48691__delegate;
return G__48691;
})()
;
var add_many = (function (ctors,env,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__48274,arg){
var vec__48275 = p__48274;
var ctors__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48275,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48275,(1),null);
var ctors__$2 = (arg.cljs$core$IFn$_invoke$arity$2 ? arg.cljs$core$IFn$_invoke$arity$2(ctors__$1,env) : arg.call(null,ctors__$1,env));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctors__$2,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(args__$1,expr_at((cljs.core.count(cljs.core.peek(ctors__$2)) - (1))))], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctors,cljs.core.PersistentVector.EMPTY], null),args);
});
return cljs.core.peek(hyperfiddle.electric.impl.runtime.collapse(new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot((function hyperfiddle$electric$impl$runtime$compile_$_walk(env,off,idx,dyn,inst__$2){
var G__48278 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425).cljs$core$IFn$_invoke$arity$1(inst__$2);
var G__48278__$1 = (((G__48278 instanceof cljs.core.Keyword))?G__48278.fqn:null);
switch (G__48278__$1) {
case "hyperfiddle.electric.impl.ir/nop":
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,(function (ctors,_env){
return update_current(ctors,cljs.core.conj,null);
}));

break;
case "hyperfiddle.electric.impl.ir/sub":
var p = (idx - new cljs.core.Keyword("hyperfiddle.electric.impl.ir","index","hyperfiddle.electric.impl.ir/index",1690646129).cljs$core$IFn$_invoke$arity$1(inst__$2));
if((p < off)){
var f = new cljs.core.Keyword(null,"static","static",1214358571).cljs$core$IFn$_invoke$arity$1(env);
var i = (function (){var G__48279 = p;
var G__48280 = cljs.core.count(f);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__48279,G__48280) : f.call(null,G__48279,G__48280));
})();
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"free","free",801364328),cljs.core.conj,p),new cljs.core.Keyword(null,"static","static",1214358571),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,p,i)),new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,(function (ctors,_env){
return update_current(ctors,cljs.core.conj,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","static","hyperfiddle.electric.impl.runtime/static",-547873025,null),null,(1),null)),(new cljs.core.List(null,frame,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,i,null,(1),null))], 0)))));
}));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,(function (ctors,env__$1){
return update_current(ctors,cljs.core.conj,(env__$1.cljs$core$IFn$_invoke$arity$1 ? env__$1.cljs$core$IFn$_invoke$arity$1(p) : env__$1.call(null,p)));
}));
}

break;
case "hyperfiddle.electric.impl.ir/pub":
return cljs.core.update.cljs$core$IFn$_invoke$arity$6(hyperfiddle$electric$impl$runtime$compile_$_walk(hyperfiddle$electric$impl$runtime$compile_$_walk(env,off,idx,dyn,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","init","hyperfiddle.electric.impl.ir/init",-819637966).cljs$core$IFn$_invoke$arity$1(inst__$2)),off,(idx + (1)),dyn,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","inst","hyperfiddle.electric.impl.ir/inst",-420394775).cljs$core$IFn$_invoke$arity$1(inst__$2)),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(2),(function (form,cont,idx__$1){
return (function (ctors,env__$1){
var ctors__$1 = (form.cljs$core$IFn$_invoke$arity$2 ? form.cljs$core$IFn$_invoke$arity$2(ctors,env__$1) : form.call(null,ctors,env__$1));
var G__48281 = update_current(ctors__$1,from_last_expr,(function (x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","signal","hyperfiddle.electric.impl.runtime/signal",340452693,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
}));
var G__48282 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,idx__$1,expr_at(cljs.core.count(cljs.core.peek(ctors__$1))));
return (cont.cljs$core$IFn$_invoke$arity$2 ? cont.cljs$core$IFn$_invoke$arity$2(G__48281,G__48282) : cont.call(null,G__48281,G__48282));
});
}),idx);

break;
case "hyperfiddle.electric.impl.ir/do":
var deps = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","deps","hyperfiddle.electric.impl.ir/deps",-1313673773).cljs$core$IFn$_invoke$arity$1(inst__$2);
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(hyperfiddle$electric$impl$runtime$compile_$_walk(cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (env__$1,arg){
return hyperfiddle$electric$impl$runtime$compile_$_walk(env__$1,off,idx,dyn,arg);
}),env,deps),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,cljs.core.count(deps),cljs.core.vector),off,idx,dyn,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","inst","hyperfiddle.electric.impl.ir/inst",-420394775).cljs$core$IFn$_invoke$arity$1(inst__$2)),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(2),(function (deps__$1,form){
return (function (ctors,env__$1){
var vec__48283 = add_many(ctors,env__$1,deps__$1);
var ctors__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48283,(0),null);
var deps__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48283,(1),null);
var G__48286 = update_current(ctors__$1,cljs.core.conj,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","make-input","hyperfiddle.electric.impl.runtime/make-input",566179856,null),null,(1),null)),(new cljs.core.List(null,frame,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,deps__$2,null,(1),null))], 0)))));
var G__48287 = env__$1;
return (form.cljs$core$IFn$_invoke$arity$2 ? form.cljs$core$IFn$_invoke$arity$2(G__48286,G__48287) : form.call(null,G__48286,G__48287));
});
}));

break;
case "hyperfiddle.electric.impl.ir/def":
var symb = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","slot","hyperfiddle.electric.impl.ir/slot",1432523351).cljs$core$IFn$_invoke$arity$1(inst__$2);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,(function (ctors,_env){
return update_current(ctors,cljs.core.conj,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","inject","hyperfiddle.electric.impl.runtime/inject",-834159193,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,symb,null,(1),null))))),null,(1),null))))),null,(1),null))))));
}));

break;
case "hyperfiddle.electric.impl.ir/lift":
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(hyperfiddle$electric$impl$runtime$compile_$_walk(env,off,idx,dyn,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","init","hyperfiddle.electric.impl.ir/init",-819637966).cljs$core$IFn$_invoke$arity$1(inst__$2)),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(1),(function (f){
return (function (ctors,env__$1){
return update_current((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(ctors,env__$1) : f.call(null,ctors,env__$1)),from_last_expr,(function (x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
}));
});
}));

break;
case "hyperfiddle.electric.impl.ir/eval":
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,(function (ctors,_env){
return update_current(ctors,cljs.core.conj,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","form","hyperfiddle.electric.impl.ir/form",-534651915).cljs$core$IFn$_invoke$arity$1(inst__$2),null,(1),null))))));
}));

break;
case "hyperfiddle.electric.impl.ir/node":
var symb = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","slot","hyperfiddle.electric.impl.ir/slot",1432523351).cljs$core$IFn$_invoke$arity$1(inst__$2);
if(cljs.core.truth_((dyn.cljs$core$IFn$_invoke$arity$1 ? dyn.cljs$core$IFn$_invoke$arity$1(symb) : dyn.call(null,symb)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,(function (ctors,_env){
return update_current(ctors,cljs.core.conj,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),null,(1),null)),(new cljs.core.List(null,vars,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,symb,null,(1),null))))),null,(1),null))], 0)))));
}));
} else {
var d = new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(env);
var i = (function (){var G__48288 = symb;
var G__48289 = cljs.core.count(d);
return (d.cljs$core$IFn$_invoke$arity$2 ? d.cljs$core$IFn$_invoke$arity$2(G__48288,G__48289) : d.call(null,G__48288,G__48289));
})();
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,symb,i)),new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,(function (ctors,_env){
return update_current(ctors,cljs.core.conj,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","dynamic","hyperfiddle.electric.impl.runtime/dynamic",1076292141,null),null,(1),null)),(new cljs.core.List(null,frame,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,symb,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle.electric.impl.runtime.select_debug_info(inst__$2),new cljs.core.Keyword("hyperfiddle.electric.debug","sym","hyperfiddle.electric.debug/sym",972043575),symb,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("hyperfiddle.electric.debug","slot","hyperfiddle.electric.debug/slot",1583396651),i], 0)),null,(1),null))))),null,(1),null))], 0)))));
}));
}

break;
case "hyperfiddle.electric.impl.ir/bind":
var v = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","slot","hyperfiddle.electric.impl.ir/slot",1432523351).cljs$core$IFn$_invoke$arity$1(inst__$2);
return cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle$electric$impl$runtime$compile_$_walk(env,off,idx,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(dyn,v),new cljs.core.Keyword("hyperfiddle.electric.impl.ir","inst","hyperfiddle.electric.impl.ir/inst",-420394775).cljs$core$IFn$_invoke$arity$1(inst__$2)),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(1),(function (form,symb,idx__$1){
return (function (ctors,env__$1){
return update_current(update_current((function (){var G__48290 = update_current(ctors,cljs.core.conj,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),null,(1),null)),(new cljs.core.List(null,vars,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,symb,null,(1),null))))),null,(1),null))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","swap!","cljs.core/swap!",-2144679919,null),null,(1),null)),(new cljs.core.List(null,vars,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,symb,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,(env__$1.cljs$core$IFn$_invoke$arity$1 ? env__$1.cljs$core$IFn$_invoke$arity$1(idx__$1) : env__$1.call(null,idx__$1)),null,(1),null))], 0)))));
var G__48291 = env__$1;
return (form.cljs$core$IFn$_invoke$arity$2 ? form.cljs$core$IFn$_invoke$arity$2(G__48290,G__48291) : form.call(null,G__48290,G__48291));
})(),cljs.core.conj,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","swap!","cljs.core/swap!",-2144679919,null),null,(1),null)),(new cljs.core.List(null,vars,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,symb,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,expr_at(cljs.core.count(cljs.core.peek(ctors))),null,(1),null))], 0))))),(function (exprs){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(exprs,expr_at((cljs.core.count(exprs) - (2))));
}));
});
}),v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(idx - new cljs.core.Keyword("hyperfiddle.electric.impl.ir","index","hyperfiddle.electric.impl.ir/index",1690646129).cljs$core$IFn$_invoke$arity$1(inst__$2))], 0));

break;
case "hyperfiddle.electric.impl.ir/apply":
var f = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","fn","hyperfiddle.electric.impl.ir/fn",1996468864).cljs$core$IFn$_invoke$arity$1(inst__$2);
var args = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","args","hyperfiddle.electric.impl.ir/args",291275628).cljs$core$IFn$_invoke$arity$1(inst__$2);
var debug_info = hyperfiddle.electric.impl.runtime.select_debug_info((function (){var f__$1 = f;
while(true){
var G__48292 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425).cljs$core$IFn$_invoke$arity$1(f__$1);
var G__48292__$1 = (((G__48292 instanceof cljs.core.Keyword))?G__48292.fqn:null);
switch (G__48292__$1) {
case "hyperfiddle.electric.impl.ir/global":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(f__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),new cljs.core.Keyword(null,"apply","apply",1320385493),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("hyperfiddle.electric.debug","name","hyperfiddle.electric.debug/name",-35961215),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("hyperfiddle.electric.impl.ir","name","hyperfiddle.electric.impl.ir/name",655661733).cljs$core$IFn$_invoke$arity$1(f__$1))], 0));

break;
case "hyperfiddle.electric.impl.ir/node":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),new cljs.core.Keyword(null,"apply","apply",1320385493));

break;
case "hyperfiddle.electric.impl.ir/eval":
var G__48293 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),new cljs.core.Keyword(null,"eval","eval",-1103567905));
if(cljs.core.not(new cljs.core.Keyword("hyperfiddle.electric.debug","fn","hyperfiddle.electric.debug/fn",167892636).cljs$core$IFn$_invoke$arity$1(f__$1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48293,new cljs.core.Keyword("hyperfiddle.electric.debug","fn","hyperfiddle.electric.debug/fn",167892636),new cljs.core.Keyword("hyperfiddle.electric.impl.ir","form","hyperfiddle.electric.impl.ir/form",-534651915).cljs$core$IFn$_invoke$arity$1(f__$1));
} else {
return G__48293;
}

break;
case "hyperfiddle.electric.impl.ir/sub":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),new cljs.core.Keyword(null,"apply","apply",1320385493));

break;
case "hyperfiddle.electric.impl.ir/input":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),new cljs.core.Keyword(null,"apply","apply",1320385493));

break;
case "hyperfiddle.electric.impl.ir/apply":
var G__48707 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","fn","hyperfiddle.electric.impl.ir/fn",1996468864).cljs$core$IFn$_invoke$arity$1(f__$1);
f__$1 = G__48707;
continue;

break;
default:
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),new cljs.core.Keyword(null,"unknown-apply","unknown-apply",-1407042085),new cljs.core.Keyword(null,"op","op",-1882987955),f__$1], null);

}
break;
}
})());
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.ir.eval(cljs.core.PersistentArrayMap.EMPTY),f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(args))))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (env__$1,inst__$3){
return hyperfiddle$electric$impl$runtime$compile_$_walk(env__$1,off,idx,dyn,inst__$3);
}),env,args),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(2),(function (a,b){
return (function (ctors,env__$1){
var vec__48294 = add_many(ctors,env__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null));
var ctors__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48294,(0),null);
var vec__48297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48294,(1),null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48297,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48297,(1),null);
return update_current(ctors__$1,cljs.core.conj,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","causal","hyperfiddle.electric.impl.runtime/causal",-1350198178,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,debug_info,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,a__$1,null,(1),null)),(new cljs.core.List(null,b__$1,null,(1),null))], 0)))));
});
}));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (env__$1,inst__$3){
return hyperfiddle$electric$impl$runtime$compile_$_walk(env__$1,off,idx,dyn,inst__$3);
}),env,cljs.core.cons(f,args)),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(cljs.core.count(args) + (1)),(function() { 
var G__48713__delegate = function (forms){
return (function (ctors,env__$1){
var vec__48300 = add_many(ctors,env__$1,forms);
var ctors__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48300,(0),null);
var forms__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48300,(1),null);
return update_current(ctors__$1,cljs.core.conj,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","latest-apply","hyperfiddle.electric.impl.runtime/latest-apply",694267757,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,debug_info,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([forms__$1], 0)))));
});
};
var G__48713 = function (var_args){
var forms = null;
if (arguments.length > 0) {
var G__48714__i = 0, G__48714__a = new Array(arguments.length -  0);
while (G__48714__i < G__48714__a.length) {G__48714__a[G__48714__i] = arguments[G__48714__i + 0]; ++G__48714__i;}
  forms = new cljs.core.IndexedSeq(G__48714__a,0,null);
} 
return G__48713__delegate.call(this,forms);};
G__48713.cljs$lang$maxFixedArity = 0;
G__48713.cljs$lang$applyTo = (function (arglist__48715){
var forms = cljs.core.seq(arglist__48715);
return G__48713__delegate(forms);
});
G__48713.cljs$core$IFn$_invoke$arity$variadic = G__48713__delegate;
return G__48713;
})()
);
}

break;
case "hyperfiddle.electric.impl.ir/input":
var deps = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","deps","hyperfiddle.electric.impl.ir/deps",-1313673773).cljs$core$IFn$_invoke$arity$1(inst__$2);
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (env__$1,arg){
return hyperfiddle$electric$impl$runtime$compile_$_walk(env__$1,off,idx,dyn,arg);
}),env,deps),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,cljs.core.count(deps),cljs.core.vector),new cljs.core.Keyword(null,"input","input",556931961),cljs.core.inc),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(1),(function (deps__$1){
return (function (ctors,env__$1){
var vec__48303 = add_many(ctors,env__$1,deps__$1);
var ctors__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48303,(0),null);
var deps__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48303,(1),null);
return update_current(ctors__$1,cljs.core.conj,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","input-spawn","hyperfiddle.electric.impl.runtime/input-spawn",1447350587,null),null,(1),null)),(new cljs.core.List(null,frame,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,deps__$2,null,(1),null))], 0)))));
});
}));

break;
case "hyperfiddle.electric.impl.ir/output":
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$3(hyperfiddle$electric$impl$runtime$compile_$_walk(env,off,idx,dyn,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","init","hyperfiddle.electric.impl.ir/init",-819637966).cljs$core$IFn$_invoke$arity$1(inst__$2)),new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.inc),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(1),(function (form){
return (function (ctors,env__$1){
return update_current((form.cljs$core$IFn$_invoke$arity$2 ? form.cljs$core$IFn$_invoke$arity$2(ctors,env__$1) : form.call(null,ctors,env__$1)),from_last_expr,(function (x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","make-output","hyperfiddle.electric.impl.runtime/make-output",1149148798,null),null,(1),null)),(new cljs.core.List(null,frame,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","check-failure","hyperfiddle.electric.impl.runtime/check-failure",-1123078405,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.select_debug_info(inst__$2),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,x,null,(1),null))], 0)))),null,(1),null))], 0))));
}));
});
}));

break;
case "hyperfiddle.electric.impl.ir/variable":
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$3(hyperfiddle$electric$impl$runtime$compile_$_walk(env,off,idx,dyn,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","init","hyperfiddle.electric.impl.ir/init",-819637966).cljs$core$IFn$_invoke$arity$1(inst__$2)),new cljs.core.Keyword(null,"variable","variable",-281346492),cljs.core.inc),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(1),(function (form){
return (function (ctors,env__$1){
return update_current((form.cljs$core$IFn$_invoke$arity$2 ? form.cljs$core$IFn$_invoke$arity$2(ctors,env__$1) : form.call(null,ctors,env__$1)),from_last_expr,(function (x){
return (new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","variable","hyperfiddle.electric.impl.runtime/variable",510769532,null),(new cljs.core.List(null,frame,(new cljs.core.List(null,vars,(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null)),(4),null));
}));
});
}));

break;
case "hyperfiddle.electric.impl.ir/source":
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"source","source",-433931539),cljs.core.inc),new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,(function (ctors,_env){
return update_current(ctors,cljs.core.conj,(new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","source","hyperfiddle.electric.impl.runtime/source",-2004538047,null),(new cljs.core.List(null,frame,(new cljs.core.List(null,vars,null,(1),null)),(2),null)),(3),null)));
}));

break;
case "hyperfiddle.electric.impl.ir/constant":
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle$electric$impl$runtime$compile_$_walk(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,hyperfiddle.electric.impl.runtime.empty_frame], 0)),idx,idx,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","init","hyperfiddle.electric.impl.ir/init",-819637966).cljs$core$IFn$_invoke$arity$1(inst__$2)),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,new cljs.core.Keyword(null,"free","free",801364328))),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.runtime.reverse_index,new cljs.core.Keyword(null,"static","static",1214358571))),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.runtime.reverse_index,new cljs.core.Keyword(null,"dynamic","dynamic",704819571))),new cljs.core.Keyword(null,"variable","variable",-281346492)),new cljs.core.Keyword(null,"source","source",-433931539)),new cljs.core.Keyword(null,"constant","constant",-379609303)),new cljs.core.Keyword(null,"target","target",253001721)),new cljs.core.Keyword(null,"output","output",-1105869043)),new cljs.core.Keyword(null,"input","input",556931961)),new cljs.core.Keyword(null,"free","free",801364328),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.into,new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(env),cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__48272_SHARP_){
return (p1__48272_SHARP_ < off);
})))),cljs.core.select_keys(env,cljs.core.keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.runtime.empty_frame,new cljs.core.Keyword(null,"free","free",801364328))))], 0)),new cljs.core.Keyword(null,"constant","constant",-379609303),cljs.core.inc),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(10),(function (form,free,static$,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count){
return (function (ctors,env__$1){
var exprs = cljs.core.peek(ctors);
var ctors__$1 = (function (){var G__48306 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(ctors),cljs.core.PersistentVector.EMPTY);
var G__48307 = restore_free(env__$1,free);
return (form.cljs$core$IFn$_invoke$arity$2 ? form.cljs$core$IFn$_invoke$arity$2(G__48306,G__48307) : form.call(null,G__48306,G__48307));
})();
return update_current(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(update_current(update_current(ctors__$1,from_last_expr,(function (x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","check-failure","hyperfiddle.electric.impl.runtime/check-failure",-1123078405,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.select_debug_info(inst__$2),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,x,null,(1),null))], 0))));
})),(function (exprs__$1){
return (new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constructor","hyperfiddle.electric.impl.runtime/constructor",-1501318103,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,dynamic,null,(1),null)),(2),null)),(new cljs.core.List(null,variable_count,(new cljs.core.List(null,source_count,(new cljs.core.List(null,constant_count,(new cljs.core.List(null,target_count,(new cljs.core.List(null,output_count,(new cljs.core.List(null,input_count,(new cljs.core.List(null,emit_exprs(exprs__$1),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),(7),null)),(8),null)),(9),null));
})),exprs),cljs.core.conj,(new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constant","hyperfiddle.electric.impl.runtime/constant",73011709,null),(new cljs.core.List(null,frame,(new cljs.core.List(null,(new cljs.core.List(null,ctor_at((cljs.core.count(ctors__$1) - (1))),(new cljs.core.List(null,capture_free(env__$1,free),(new cljs.core.List(null,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(env__$1,static$),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)));
});
}));

break;
case "hyperfiddle.electric.impl.ir/target":
var deps = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","deps","hyperfiddle.electric.impl.ir/deps",-1313673773).cljs$core$IFn$_invoke$arity$1(inst__$2);
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (env__$1,inst__$3){
return hyperfiddle$electric$impl$runtime$compile_$_walk(env__$1,idx,idx,cljs.core.PersistentHashSet.EMPTY,inst__$3);
}),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,hyperfiddle.electric.impl.runtime.empty_frame], 0)),deps),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,cljs.core.count(deps),cljs.core.vector),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,new cljs.core.Keyword(null,"free","free",801364328))),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.runtime.reverse_index,new cljs.core.Keyword(null,"static","static",1214358571))),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.runtime.reverse_index,new cljs.core.Keyword(null,"dynamic","dynamic",704819571))),new cljs.core.Keyword(null,"variable","variable",-281346492)),new cljs.core.Keyword(null,"source","source",-433931539)),new cljs.core.Keyword(null,"constant","constant",-379609303)),new cljs.core.Keyword(null,"target","target",253001721)),new cljs.core.Keyword(null,"output","output",-1105869043)),new cljs.core.Keyword(null,"input","input",556931961)),new cljs.core.Keyword(null,"free","free",801364328),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.into,new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(env),cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__48273_SHARP_){
return (p1__48273_SHARP_ < off);
})))),cljs.core.select_keys(env,cljs.core.keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.runtime.empty_frame,new cljs.core.Keyword(null,"free","free",801364328))))], 0)),new cljs.core.Keyword(null,"target","target",253001721),cljs.core.inc),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(10),(function (deps__$1,free,static$,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count){
return (function (ctors,env__$1){
var exprs = cljs.core.peek(ctors);
var vec__48308 = add_many(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(ctors),cljs.core.PersistentVector.EMPTY),restore_free(env__$1,free),deps__$1);
var ctors__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48308,(0),null);
var deps__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48308,(1),null);
return update_current(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(update_current(update_current(ctors__$1,cljs.core.conj,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","make-input","hyperfiddle.electric.impl.runtime/make-input",566179856,null),null,(1),null)),(new cljs.core.List(null,frame,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,deps__$2,null,(1),null))], 0))))),(function (exprs__$1){
return (new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constructor","hyperfiddle.electric.impl.runtime/constructor",-1501318103,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,dynamic,null,(1),null)),(2),null)),(new cljs.core.List(null,variable_count,(new cljs.core.List(null,source_count,(new cljs.core.List(null,constant_count,(new cljs.core.List(null,target_count,(new cljs.core.List(null,output_count,(new cljs.core.List(null,input_count,(new cljs.core.List(null,emit_exprs(exprs__$1),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),(7),null)),(8),null)),(9),null));
})),exprs),cljs.core.conj,(new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","target","hyperfiddle.electric.impl.runtime/target",1172525771,null),(new cljs.core.List(null,frame,(new cljs.core.List(null,(new cljs.core.List(null,ctor_at((cljs.core.count(ctors__$1) - (1))),(new cljs.core.List(null,capture_free(env__$1,free),(new cljs.core.List(null,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(env__$1,static$),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)));
});
}));

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["unknown instruction: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst__$2)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inst","inst",645962501),inst__$2], null));

}
})(hyperfiddle.electric.impl.runtime.empty_frame,(0),(0),cljs.core.PersistentHashSet.EMPTY,inst__$1),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.runtime.reverse_index,new cljs.core.Keyword(null,"dynamic","dynamic",704819571))),new cljs.core.Keyword(null,"variable","variable",-281346492)),new cljs.core.Keyword(null,"source","source",-433931539)),new cljs.core.Keyword(null,"constant","constant",-379609303)),new cljs.core.Keyword(null,"target","target",253001721)),new cljs.core.Keyword(null,"output","output",-1105869043)),new cljs.core.Keyword(null,"input","input",556931961))),(8),(function (form,dynamic,nvariable,nsource,nconstant,ntarget,noutput,ninput){
var code = (function (){var ctors = (function (){var G__48311 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
var G__48312 = cljs.core.PersistentArrayMap.EMPTY;
return (form.cljs$core$IFn$_invoke$arity$2 ? form.cljs$core$IFn$_invoke$arity$2(G__48311,G__48312) : form.call(null,G__48311,G__48312));
})();
return (new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),(new cljs.core.List(null,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (i,ctor){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctor_at(i),ctor], null);
})),cljs.core.cat),cljs.core.pop(ctors)),(new cljs.core.List(null,emit_exprs(cljs.core.peek(ctors)),null,(1),null)),(2),null)),(3),null));
})();
if(cljs.core.truth_(new cljs.core.Keyword("hyperfiddle.electric.impl.lang","pprint-source","hyperfiddle.electric.impl.lang/pprint-source",1072598730).cljs$core$IFn$_invoke$arity$1(e))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["---",new cljs.core.Keyword("hyperfiddle.electric.impl.lang","sym","hyperfiddle.electric.impl.lang/sym",1747327200).cljs$core$IFn$_invoke$arity$1(e),"SOURCE ---"], 0));

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(code);
} else {
}

return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"noutput","noutput",-1074289279),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"ninput","ninput",-424514295),new cljs.core.Keyword(null,"nvariable","nvariable",871604298),new cljs.core.Keyword(null,"nsource","nsource",-745810741),new cljs.core.Keyword(null,"ntarget","ntarget",1744575182),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"get-used-nodes","get-used-nodes",-687832967),new cljs.core.Keyword(null,"nconstant","nconstant",1375885721)],[noutput,code,ninput,nvariable,nsource,ntarget,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,dynamic,null,(1),null))))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,nodes,null,(1),null))], 0)))),nconstant]);
})));
});
hyperfiddle.electric.impl.runtime.get_used_nodes_recursively = (function hyperfiddle$electric$impl$runtime$get_used_nodes_recursively(info){
var walked = cljs.core.PersistentHashSet.EMPTY;
var unwalked = cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [info], null));
while(true){
var temp__5818__auto__ = unwalked;
if((temp__5818__auto__ == null)){
return walked;
} else {
var vec__48317 = temp__5818__auto__;
var seq__48318 = cljs.core.seq(vec__48317);
var first__48319 = cljs.core.first(seq__48318);
var seq__48318__$1 = cljs.core.next(seq__48318);
var to_walk = first__48319;
var unwalked__$1 = seq__48318__$1;
if(cljs.core.map_QMARK_(to_walk)){
if(cljs.core.truth_((walked.cljs$core$IFn$_invoke$arity$1 ? walked.cljs$core$IFn$_invoke$arity$1(to_walk) : walked.call(null,to_walk)))){
var G__48737 = walked;
var G__48738 = unwalked__$1;
walked = G__48737;
unwalked = G__48738;
continue;
} else {
var G__48739 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(walked,to_walk);
var G__48740 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(unwalked__$1,(function (){var fexpr__48320 = new cljs.core.Keyword(null,"get-used-nodes","get-used-nodes",-687832967).cljs$core$IFn$_invoke$arity$1(to_walk);
return (fexpr__48320.cljs$core$IFn$_invoke$arity$0 ? fexpr__48320.cljs$core$IFn$_invoke$arity$0() : fexpr__48320.call(null));
})());
walked = G__48739;
unwalked = G__48740;
continue;
}
} else {
var G__48741 = walked;
var G__48742 = unwalked__$1;
walked = G__48741;
unwalked = G__48742;
continue;
}
}
break;
}
});
hyperfiddle.electric.impl.runtime.main = (function hyperfiddle$electric$impl$runtime$main(info){
var info__$1 = (function (){var G__48323 = info;
if(cljs.core.var_QMARK_(info)){
return cljs.core.deref(G__48323);
} else {
return G__48323;
}
})();
var all_nodes = hyperfiddle.electric.impl.runtime.get_used_nodes_recursively(info__$1);
var map__48322 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,cljs.core._PLUS_,cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__48321_SHARP_){
return cljs.core.select_keys(p1__48321_SHARP_,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nvariable","nvariable",871604298),new cljs.core.Keyword(null,"nsource","nsource",-745810741),new cljs.core.Keyword(null,"nconstant","nconstant",1375885721),new cljs.core.Keyword(null,"ntarget","ntarget",1744575182),new cljs.core.Keyword(null,"noutput","noutput",-1074289279),new cljs.core.Keyword(null,"ninput","ninput",-424514295)], null));
})),all_nodes], 0)));
var map__48322__$1 = cljs.core.__destructure_map(map__48322);
var nvariable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48322__$1,new cljs.core.Keyword(null,"nvariable","nvariable",871604298));
var nsource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48322__$1,new cljs.core.Keyword(null,"nsource","nsource",-745810741));
var nconstant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48322__$1,new cljs.core.Keyword(null,"nconstant","nconstant",1375885721));
var ntarget = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48322__$1,new cljs.core.Keyword(null,"ntarget","ntarget",1744575182));
var noutput = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48322__$1,new cljs.core.Keyword(null,"noutput","noutput",-1074289279));
var ninput = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48322__$1,new cljs.core.Keyword(null,"ninput","ninput",-424514295));
return hyperfiddle.electric.impl.runtime.peer(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info__$1),nvariable,nsource,nconstant,ntarget,noutput,ninput,new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(info__$1),new cljs.core.Keyword(null,"get-used-nodes","get-used-nodes",-687832967).cljs$core$IFn$_invoke$arity$1(info__$1),new cljs.core.Keyword(null,"var-name","var-name",-574747624).cljs$core$IFn$_invoke$arity$1(info__$1),null);
});
hyperfiddle.electric.impl.runtime.case_default_throw = (function hyperfiddle$electric$impl$runtime$case_default_throw(v){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
});
hyperfiddle.electric.impl.runtime.pick_case_branch = (function hyperfiddle$electric$impl$runtime$pick_case_branch(var_args){
var args__5728__auto__ = [];
var len__5722__auto___48745 = arguments.length;
var i__5723__auto___48746 = (0);
while(true){
if((i__5723__auto___48746 < len__5722__auto___48745)){
args__5728__auto__.push((arguments[i__5723__auto___48746]));

var G__48747 = (i__5723__auto___48746 + (1));
i__5723__auto___48746 = G__48747;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((3) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((3)),(0),null)):null);
return hyperfiddle.electric.impl.runtime.pick_case_branch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5729__auto__);
});

(hyperfiddle.electric.impl.runtime.pick_case_branch.cljs$core$IFn$_invoke$arity$variadic = (function (picker_map,v,default_branch,branches){
var temp__5818__auto__ = (picker_map.cljs$core$IFn$_invoke$arity$1 ? picker_map.cljs$core$IFn$_invoke$arity$1(v) : picker_map.call(null,v));
if((temp__5818__auto__ == null)){
return default_branch;
} else {
var i = temp__5818__auto__;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(branches,i);
}
}));

(hyperfiddle.electric.impl.runtime.pick_case_branch.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(hyperfiddle.electric.impl.runtime.pick_case_branch.cljs$lang$applyTo = (function (seq48324){
var G__48325 = cljs.core.first(seq48324);
var seq48324__$1 = cljs.core.next(seq48324);
var G__48326 = cljs.core.first(seq48324__$1);
var seq48324__$2 = cljs.core.next(seq48324__$1);
var G__48327 = cljs.core.first(seq48324__$2);
var seq48324__$3 = cljs.core.next(seq48324__$2);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48325,G__48326,G__48327,seq48324__$3);
}));


//# sourceMappingURL=hyperfiddle.electric.impl.runtime.js.map
