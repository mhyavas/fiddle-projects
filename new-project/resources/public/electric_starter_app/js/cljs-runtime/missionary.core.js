goog.provide('missionary.core');
/**
 * 
 * Same as `via`, except the expression to evaluate is provided as a zero-arity function on second argument.
 * 
 * Not supported on clojurescript.
 * 
 * ```clojure
 * (? (via-call blk read-line))
 * ;; reads a line from stdin and returns it
 * ```
 */
missionary.core.via_call = (function missionary$core$via_call(e,t){
return (function (s,f){
throw (new Error("Unsupported operation."));
});
});
/**
 * 
 * Returns a task completing with given value (nil if not provided) after given duration (in milliseconds).
 * 
 * Cancelling a sleep task makes it fail immediately.
 * 
 * Example :
 * ```clojure
 * (? (sleep 1000 42))
 * #_=> 42               ;; 1 second later
 * ```
 */
missionary.core.sleep = (function missionary$core$sleep(var_args){
var G__47425 = arguments.length;
switch (G__47425) {
case 1:
return missionary.core.sleep.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return missionary.core.sleep.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(missionary.core.sleep.cljs$core$IFn$_invoke$arity$1 = (function (d){
return missionary.core.sleep.cljs$core$IFn$_invoke$arity$2(d,null);
}));

(missionary.core.sleep.cljs$core$IFn$_invoke$arity$2 = (function (d,x){
return (function (s,f){
return missionary.impl.Sleep.run(d,x,s,f);
});
}));

(missionary.core.sleep.cljs$lang$maxFixedArity = 2);

/**
 * 
 * Returns a task running given `tasks` concurrently.
 * 
 * If every task succeeds, `join` completes with the result of applying `f` to these results.
 * 
 * If any task fails, others are cancelled then `join` fails with this error.
 * 
 * Cancelling propagates to children tasks.
 * 
 * Example :
 * ```clojure
 * (? (join vector (sleep 1000 1) (sleep 1000 2)))
 * #_=> [1 2]            ;; 1 second later
 * ```
 */
missionary.core.join = (function missionary$core$join(var_args){
var G__47431 = arguments.length;
switch (G__47431) {
case 1:
return missionary.core.join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5747__auto__ = [];
var len__5722__auto___47564 = arguments.length;
var i__5723__auto___47565 = (0);
while(true){
if((i__5723__auto___47565 < len__5722__auto___47564)){
args_arr__5747__auto__.push((arguments[i__5723__auto___47565]));

var G__47566 = (i__5723__auto___47565 + (1));
i__5723__auto___47565 = G__47566;
continue;
} else {
}
break;
}

var argseq__5748__auto__ = ((((1) < args_arr__5747__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5747__auto__.slice((1)),(0),null)):null);
return missionary.core.join.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5748__auto__);

}
});

(missionary.core.join.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (function (s,_){
var G__47432_47567 = (c.cljs$core$IFn$_invoke$arity$0 ? c.cljs$core$IFn$_invoke$arity$0() : c.call(null));
(s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(G__47432_47567) : s.call(null,G__47432_47567));

return (function (){
return null;
});
});
}));

(missionary.core.join.cljs$core$IFn$_invoke$arity$variadic = (function (c,ts){
return (function (s,f){
return missionary.impl.RaceJoin.run(false,c,ts,s,f);
});
}));

/** @this {Function} */
(missionary.core.join.cljs$lang$applyTo = (function (seq47429){
var G__47430 = cljs.core.first(seq47429);
var seq47429__$1 = cljs.core.next(seq47429);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47430,seq47429__$1);
}));

(missionary.core.join.cljs$lang$maxFixedArity = (1));

missionary.core.race_failure = (function missionary$core$race_failure(var_args){
var args__5728__auto__ = [];
var len__5722__auto___47571 = arguments.length;
var i__5723__auto___47572 = (0);
while(true){
if((i__5723__auto___47572 < len__5722__auto___47571)){
args__5728__auto__.push((arguments[i__5723__auto___47572]));

var G__47573 = (i__5723__auto___47572 + (1));
i__5723__auto___47572 = G__47573;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return missionary.core.race_failure.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(missionary.core.race_failure.cljs$core$IFn$_invoke$arity$variadic = (function (errors){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Race failure.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("missionary.core","errors","missionary.core/errors",-661055151),errors], null));
}));

(missionary.core.race_failure.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(missionary.core.race_failure.cljs$lang$applyTo = (function (seq47434){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47434));
}));

/**
 * 
 * Returns a task running given `tasks` concurrently.
 * 
 * If any task succeeds, others are cancelled then `race` completes with this result.
 * 
 * If every task fails, `race` fails.
 * 
 * Cancelling propagates to children tasks.
 * 
 * Example :
 * ```clojure
 * (? (race (sleep 1000 1) (sleep 2000 2)))
 * #_=> 1                 ;; 1 second later
 * ```
 */
missionary.core.race = (function missionary$core$race(var_args){
var G__47437 = arguments.length;
switch (G__47437) {
case 0:
return missionary.core.race.cljs$core$IFn$_invoke$arity$0();

break;
default:
var args_arr__5747__auto__ = [];
var len__5722__auto___47575 = arguments.length;
var i__5723__auto___47576 = (0);
while(true){
if((i__5723__auto___47576 < len__5722__auto___47575)){
args_arr__5747__auto__.push((arguments[i__5723__auto___47576]));

var G__47577 = (i__5723__auto___47576 + (1));
i__5723__auto___47576 = G__47577;
continue;
} else {
}
break;
}

var argseq__5748__auto__ = ((((0) < args_arr__5747__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5747__auto__.slice((0)),(0),null)):null);
return missionary.core.race.cljs$core$IFn$_invoke$arity$variadic(argseq__5748__auto__);

}
});

(missionary.core.race.cljs$core$IFn$_invoke$arity$0 = (function (){
return (function (_,f){
var G__47438_47580 = missionary.core.race_failure();
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__47438_47580) : f.call(null,G__47438_47580));

return (function (){
return null;
});
});
}));

(missionary.core.race.cljs$core$IFn$_invoke$arity$variadic = (function (ts){
return (function (s,f){
return missionary.impl.RaceJoin.run(true,missionary.core.race_failure,ts,s,f);
});
}));

/** @this {Function} */
(missionary.core.race.cljs$lang$applyTo = (function (seq47436){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47436));
}));

(missionary.core.race.cljs$lang$maxFixedArity = (0));

/**
 * 
 * Returns a task always succeeding with result of given `task` wrapped in a zero-argument function returning result if successful or throwing exception if failed.
 */
missionary.core.attempt = (function missionary$core$attempt(task){
return (function (s,_){
var G__47447 = (function (x){
var G__47449 = (function (){
return x;
});
return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(G__47449) : s.call(null,G__47449));
});
var G__47448 = (function (e){
var G__47450 = (function (){
throw e;
});
return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(G__47450) : s.call(null,G__47450));
});
return (task.cljs$core$IFn$_invoke$arity$2 ? task.cljs$core$IFn$_invoke$arity$2(G__47447,G__47448) : task.call(null,G__47447,G__47448));
});
});
/**
 * 
 * Returns a task running given `task` completing with a zero-argument function and completing with the result of this function call.
 */
missionary.core.absolve = (function missionary$core$absolve(task){
return (function (s,f){
var G__47455 = (function (t){
try{var G__47458 = (t.cljs$core$IFn$_invoke$arity$0 ? t.cljs$core$IFn$_invoke$arity$0() : t.call(null));
return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(G__47458) : s.call(null,G__47458));
}catch (e47457){var e = e47457;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null,e));
}});
var G__47456 = f;
return (task.cljs$core$IFn$_invoke$arity$2 ? task.cljs$core$IFn$_invoke$arity$2(G__47455,G__47456) : task.call(null,G__47455,G__47456));
});
});
/**
 * 
 * Returns a task running given `task` and completing with its result if available within specified `delay` (in
 * milliseconds). Otherwise, input is cancelled and the process succeeds with `value`, or `nil` if not provided.
 * 
 * ```clojure
 * (m/? (m/timeout (m/sleep 20 :a) 25 :b)) ;; :a after 20ms
 * (m/? (m/timeout (m/sleep 20 :a) 15 :b)) ;; :b after 15ms
 * (m/? (m/timeout (m/sleep 20 :a) 15))    ;; nil after 15ms
 * ```
 */
missionary.core.timeout = (function() {
var missionary$core$timeout = null;
var missionary$core$timeout__2 = (function (task,delay){
return missionary$core$timeout.cljs$core$IFn$_invoke$arity$3(task,delay,null);
});
var missionary$core$timeout__3 = (function (task,delay,value){
return missionary.core.absolve(missionary.core.race.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missionary.core.attempt(task),missionary.core.sleep.cljs$core$IFn$_invoke$arity$2(delay,(function (){
return value;
}))], 0)));
});
missionary$core$timeout = function(task,delay,value){
switch(arguments.length){
case 2:
return missionary$core$timeout__2.call(this,task,delay);
case 3:
return missionary$core$timeout__3.call(this,task,delay,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
missionary$core$timeout.cljs$core$IFn$_invoke$arity$2 = missionary$core$timeout__2;
missionary$core$timeout.cljs$core$IFn$_invoke$arity$3 = missionary$core$timeout__3;
return missionary$core$timeout;
})()
;
missionary.core.check = (function missionary$core$check(){
return missionary.impl.Fiber.current().missionary$impl$Fiber$Fiber$check$arity$1(null);
});
missionary.core.park = (function missionary$core$park(task){
return missionary.impl.Fiber.current().missionary$impl$Fiber$Fiber$park$arity$2(null,task);
});
missionary.core.switch$ = (function missionary$core$switch(flow){
return missionary.impl.Fiber.current().missionary$impl$Fiber$Fiber$swich$arity$2(null,flow);
});
missionary.core.fork = (function missionary$core$fork(par,flow){
if((par > (0))){
} else {
throw (new Error(["Assert failed: ","Non-positive parallelism.","\n","(pos? par)"].join('')));
}

return missionary.impl.Fiber.current().missionary$impl$Fiber$Fiber$fork$arity$3(null,par,flow);
});
missionary.core.unpark = (function missionary$core$unpark(){
return missionary.impl.Fiber.current().missionary$impl$Fiber$Fiber$unpark$arity$1(null);
});
missionary.core.sp_run = (function missionary$core$sp_run(c,s,f){
return missionary.impl.Sequential.run(c,s,f);
});
missionary.core.ap_run = (function missionary$core$ap_run(c,n,t){
return missionary.impl.Ambiguous.run(c,n,t);
});
missionary.core.cp_STAR_ = (function missionary$core$cp_STAR_(cr){
return (missionary.impl.Continuous.flow.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Continuous.flow.cljs$core$IFn$_invoke$arity$1(cr) : missionary.impl.Continuous.flow.call(null,cr));
});
/**
 * 
 * Inhibits cancellation signal of given `task`.
 */
missionary.core.compel = (function missionary$core$compel(task){
return (function (s,f){
(task.cljs$core$IFn$_invoke$arity$2 ? task.cljs$core$IFn$_invoke$arity$2(s,f) : task.call(null,s,f));

return (function (){
return null;
});
});
});
/**
 * 
 * Creates an instance of dataflow variable (aka single-assignment).
 * 
 * A dataflow variable is a function implementing `assign` on 1-arity and `deref` on 2-arity (as task). `assign` immediately binds the variable to given value if not already bound and returns bound value. `deref` is a task completing with the value bound to the variable as soon as it's available.
 * 
 * Cancelling a `deref` task makes it fail immediately.
 * ```
 */
missionary.core.dfv = (function missionary$core$dfv(){
return missionary.impl.Dataflow.make();
});
/**
 * 
 * Creates an instance of mailbox.
 * 
 * A mailbox is a function implementing `post` on 1-arity and `fetch` on 2-arity (as task). `post` immediately pushes given value to mailbox and returns nil. `fetch` is a task pulling a value from mailbox as soon as it's non-empty and completing with this value.
 * 
 * Cancelling a `fetch` task makes it fail immediately.
 * 
 * Example : an actor is a mailbox associated with a process consuming messages.
 * ```clojure
 * (defn crash [^Throwable e]                                ;; let it crash philosophy
 *   (.printStackTrace e)
 *   (System/exit -1))
 * 
 * (defn actor
 *   ([init] (actor init crash))
 *   ([init fail]
 * (let [self (mbx)]
 *   ((sp
 *      (loop [b init]
 *        (recur (b self (? self)))))
 *     nil fail)
 *   self)))
 * 
 * (def counter
 *   (actor
 *  ((fn beh [n]
 *     (fn [self cust]
 *       (cust n)
 *       (beh (inc n)))) 0)))
 * 
 * (counter prn)                                             ;; prints 0
 * (counter prn)                                             ;; prints 1
 * (counter prn)                                             ;; prints 2
 * ```
 */
missionary.core.mbx = (function missionary$core$mbx(){
return missionary.impl.Mailbox.make();
});
/**
 * 
 * Creates an instance of synchronous rendez-vous.
 * 
 * A synchronous rendez-vous is a function implementing `give` on its 1-arity and `take` on its 2-arity (as task). `give` takes a value to be transferred and returns a task completing with nil as soon as a taker is available. `take` is a task completing with transferred value as soon as a giver is available.
 * 
 * Cancelling `give` and `take` tasks makes them fail immediately.
 * 
 * Example : producer / consumer stream communication
 * ```clojure
 * (defn reducer [rf i take]
 *   (sp
 *  (loop [r i]
 *    (let [x (? take)]
 *      (if (identical? x take)
 *        r (recur (rf r x)))))))
 * 
 * (defn iterator [give xs]
 *   (sp
 *  (loop [xs (seq xs)]
 *    (if-some [[x & xs] xs]
 *      (do (? (give x))
 *          (recur xs))
 *      (? (give give))))))
 * 
 * (def stream (rdv))
 * 
 * (? (join {} (iterator stream (range 100)) (reducer + 0 stream)))      ;; returns 4950
 * ```
 */
missionary.core.rdv = (function missionary$core$rdv(){
return missionary.impl.Rendezvous.make();
});
/**
 * 
 * Creates a semaphore initialized with n tokens (1 if not provided, aka mutex).
 * 
 * A semaphore is a function implementing `release` on 0-arity and `acquire` on 2-arity (as task). `release` immediately makes a token available and returns nil. `acquire` is a task completing with nil as soon as a token is available.
 * 
 * Cancelling an `acquire` task makes it fail immediately.
 * 
 * Example : dining philosophers
 * ```clojure
 * (defn phil [name f1 f2]
 *   (sp
 *  (while true
 *    (prn name :thinking)
 *    (? (sleep 500))
 *    (holding f1
 *      (holding f2
 *        (prn name :eating)
 *        (? (sleep 600)))))))
 * 
 * (def forks (vec (repeatedly 5 sem)))
 * 
 * (? (timeout 10000
 *   (join vector
 *     (phil "descartes" (forks 0) (forks 1))
 *     (phil "hume"      (forks 1) (forks 2))
 *     (phil "plato"     (forks 2) (forks 3))
 *     (phil "nietzsche" (forks 3) (forks 4))
 *     (phil "kant"      (forks 0) (forks 4)))))
 * ```
 */
missionary.core.sem = (function missionary$core$sem(var_args){
var G__47472 = arguments.length;
switch (G__47472) {
case 0:
return missionary.core.sem.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return missionary.core.sem.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(missionary.core.sem.cljs$core$IFn$_invoke$arity$0 = (function (){
return missionary.core.sem.cljs$core$IFn$_invoke$arity$1((1));
}));

(missionary.core.sem.cljs$core$IFn$_invoke$arity$1 = (function (n){
return missionary.impl.Semaphore.make(n);
}));

(missionary.core.sem.cljs$lang$maxFixedArity = 1);

missionary.core.never = cljs.core.with_meta((function missionary$core$never(_,f){
return missionary.impl.Never.run(f);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"static","static",1214358571),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"\nA task never succeeding. Cancelling makes it fail immediately."], null));
/**
 * 
 * The empty flow. Doesn't produce any value and terminates immediately. Cancelling has no effect.
 * 
 * Example :
 * ```clojure
 * (? (reduce conj none))
 * #_=> []
 * ```
 */
missionary.core.none = (function missionary$core$none(_,t){
(t.cljs$core$IFn$_invoke$arity$0 ? t.cljs$core$IFn$_invoke$arity$0() : t.call(null));

return (function (){
return null;
});
});
/**
 * 
 * Returns a discrete flow producing values from given `collection`. Cancelling before having reached the end makes the flow fail immediately.
 */
missionary.core.seed = (function missionary$core$seed(coll){
return (function (n,t){
return missionary.impl.Seed.run(coll,n,t);
});
});
/**
 * Alias for `seed`
 */
missionary.core.enumerate = missionary.core.seed;
/**
 * 
 * Returns a task reducing values produced by given discrete `flow` with `rf`, starting with `init` (or, if not provided, the result of calling `rf` with no argument).
 * 
 * Cancelling propagates to upstream flow. Early termination by `rf` (via `reduced` or throwing) cancels upstream flow.
 * 
 * Example :
 * ```clojure
 * (? (reduce + (seed (range 10))))
 * #_=> 45
 * ```
 */
missionary.core.reduce = (function missionary$core$reduce(var_args){
var G__47488 = arguments.length;
switch (G__47488) {
case 2:
return missionary.core.reduce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return missionary.core.reduce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(missionary.core.reduce.cljs$core$IFn$_invoke$arity$2 = (function (rf,flow){
return (function (s,f){
return missionary.impl.Reduce.run(rf,flow,s,f);
});
}));

(missionary.core.reduce.cljs$core$IFn$_invoke$arity$3 = (function (rf,i,flow){
return missionary.core.reduce.cljs$core$IFn$_invoke$arity$2((function() {
var G__47602 = null;
var G__47602__0 = (function (){
return i;
});
var G__47602__2 = (function (r,x){
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(r,x) : rf.call(null,r,x));
});
G__47602 = function(r,x){
switch(arguments.length){
case 0:
return G__47602__0.call(this);
case 2:
return G__47602__2.call(this,r,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47602.cljs$core$IFn$_invoke$arity$0 = G__47602__0;
G__47602.cljs$core$IFn$_invoke$arity$2 = G__47602__2;
return G__47602;
})()
,flow);
}));

(missionary.core.reduce.cljs$lang$maxFixedArity = 3);

/**
 * Alias for `reduce`
 */
missionary.core.aggregate = missionary.core.reduce;
/**
 * 
 * Returns a continuous flow reflecting the current state of a reference type. `reference` must support `add-watch`,
 * `remove-watch` and `deref`. On initialization, the process is ready to transfer. On transfer, the current state is
 * returned. Whenever the state of the reference changes and a transfer is not pending, the process becomes ready to
 * transfer again. Cancelling the process makes it fail immediately with an instance of `missionary.Cancelled` and
 * terminates the process.
 */
missionary.core.watch = (function missionary$core$watch(r){
return (function (n,t){
return missionary.impl.Watch.run(r,n,t);
});
});
/**
 * 
 * Returns a discrete flow observing values produced by a non-backpressured subject. `subject` must be a function taking a
 * callback and returning a cleanup thunk. On initialization, the process calls the subject with a fresh callback. Passing
 * a value to the callback makes the process ready to transfer this value. Cancelling the process makes it fail immediately
 * with an instance of `missionary.Cancelled` and terminates the process. The cleanup thunk is called on termination. The
 * callback throws an `Error` if the process is cancelled or terminated, or if a transfer is pending.
 */
missionary.core.observe = (function missionary$core$observe(s){
return (function (n,t){
return missionary.impl.Observe.run(s,n,t);
});
});
/**
 * 
 * Returns a discrete flow running given discrete `flow` and transforming values with the composition of given transducers `xf*`.
 * 
 * Cancelling propagates to upstream flow. Early termination by the transducing stage (via `reduced` or throwing) cancels upstream flow.
 * 
 * Example :
 * ```clojure
 * (? (->> (seed (range 10))
 *      (eduction (filter odd?) (mapcat range) (partition-all 4))
 *      (reduce conj)))
 * #_=> [[0 0 1 2] [0 1 2 3] [4 0 1 2] [3 4 5 6] [0 1 2 3] [4 5 6 7] [8]]
 * ```
 * @param {...*} var_args
 */
missionary.core.eduction = (function() {
var missionary$core$e = null;
var missionary$core$e__1 = (function (f){
return f;
});
var missionary$core$e__2 = (function (x,f){
return (function (n,t){
return missionary.impl.Eduction.run(x,f,n,t);
});
});
var missionary$core$e__3 = (function() { 
var G__47604__delegate = function (x,y,zs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(missionary$core$e,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(x,y),zs);
};
var G__47604 = function (x,y,var_args){
var zs = null;
if (arguments.length > 2) {
var G__47605__i = 0, G__47605__a = new Array(arguments.length -  2);
while (G__47605__i < G__47605__a.length) {G__47605__a[G__47605__i] = arguments[G__47605__i + 2]; ++G__47605__i;}
  zs = new cljs.core.IndexedSeq(G__47605__a,0,null);
} 
return G__47604__delegate.call(this,x,y,zs);};
G__47604.cljs$lang$maxFixedArity = 2;
G__47604.cljs$lang$applyTo = (function (arglist__47606){
var x = cljs.core.first(arglist__47606);
arglist__47606 = cljs.core.next(arglist__47606);
var y = cljs.core.first(arglist__47606);
var zs = cljs.core.rest(arglist__47606);
return G__47604__delegate(x,y,zs);
});
G__47604.cljs$core$IFn$_invoke$arity$variadic = G__47604__delegate;
return G__47604;
})()
;
missionary$core$e = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 1:
return missionary$core$e__1.call(this,x);
case 2:
return missionary$core$e__2.call(this,x,y);
default:
var G__47608 = null;
if (arguments.length > 2) {
var G__47609__i = 0, G__47609__a = new Array(arguments.length -  2);
while (G__47609__i < G__47609__a.length) {G__47609__a[G__47609__i] = arguments[G__47609__i + 2]; ++G__47609__i;}
G__47608 = new cljs.core.IndexedSeq(G__47609__a,0,null);
}
return missionary$core$e__3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__47608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
missionary$core$e.cljs$lang$maxFixedArity = 2;
missionary$core$e.cljs$lang$applyTo = missionary$core$e__3.cljs$lang$applyTo;
missionary$core$e.cljs$core$IFn$_invoke$arity$1 = missionary$core$e__1;
missionary$core$e.cljs$core$IFn$_invoke$arity$2 = missionary$core$e__2;
missionary$core$e.cljs$core$IFn$_invoke$arity$variadic = missionary$core$e__3.cljs$core$IFn$_invoke$arity$variadic;
return missionary$core$e;
})()
;
/**
 * Alias for `eduction`
 */
missionary.core.transform = missionary.core.eduction;
/**
 * 
 * Returns a discrete flow running given discrete `flow` and emitting given `init` value (or, if not provided, the result of calling `rf` with no argument) followed by successive reductions (by rf) of upstream values with previously emitted value.
 * 
 * Cancelling propagates to upstream flow. Early termination by `rf` (via `reduced` or throwing) cancels upstream flow.
 * 
 * Example :
 * ```clojure
 * (? (->> [1 2 3 4 5]
 *      (seed)
 *      (reductions +)
 *      (reduce conj)))
 * #_=> [0 1 3 6 10 15]
 * ```
 */
missionary.core.reductions = (function missionary$core$reductions(var_args){
var G__47503 = arguments.length;
switch (G__47503) {
case 2:
return missionary.core.reductions.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return missionary.core.reductions.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(missionary.core.reductions.cljs$core$IFn$_invoke$arity$2 = (function (rf,f){
return (function (n,t){
return missionary.impl.Reductions.run(rf,f,n,t);
});
}));

(missionary.core.reductions.cljs$core$IFn$_invoke$arity$3 = (function (rf,i,f){
return missionary.core.reductions.cljs$core$IFn$_invoke$arity$2((function() {
var G__47611 = null;
var G__47611__0 = (function (){
return i;
});
var G__47611__2 = (function (r,x){
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(r,x) : rf.call(null,r,x));
});
G__47611 = function(r,x){
switch(arguments.length){
case 0:
return G__47611__0.call(this);
case 2:
return G__47611__2.call(this,r,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47611.cljs$core$IFn$_invoke$arity$0 = G__47611__0;
G__47611.cljs$core$IFn$_invoke$arity$2 = G__47611__2;
return G__47611;
})()
,f);
}));

(missionary.core.reductions.cljs$lang$maxFixedArity = 3);

/**
 * Alias for `reductions`
 */
missionary.core.integrate = missionary.core.reductions;
/**
 * 
 * Returns a `org.reactivestreams.Publisher` running given discrete `flow` on each subscription.
 */
missionary.core.publisher = (function missionary$core$publisher(f){
throw (new Error("Unsupported operation."));
});
/**
 * 
 * Returns a discrete flow subscribing to given `org.reactivestreams.Publisher`.
 */
missionary.core.subscribe = (function missionary$core$subscribe(pub){
throw (new Error("Unsupported operation."));
});
/**
 * 
 * Returns a flow consuming input `flow` as fast as possible and producing aggregates of successive values according to
 * downstream transfer rate. The set of transferred values must form a semigroup with given function `sg` as the internal
 * binary operation, i.e. `sg` must be associative. If `sg` is not provided, `{}` is used by default, i.e. all values but
 * the latest are discarded.
 * 
 * Cancelling propagates to upstream. If `sg` throws, upstream `flow` is cancelled.
 * 
 * Example :
 * ```clojure
 * ;; Delays each `input` value by `delay` milliseconds
 * (defn delay-each [delay input]
 *   (ap (? (sleep delay (?> input)))))
 * 
 * (? (->> (ap (let [n (?> (seed [24 79 67 34 18 9 99 37]))]
 *            (? (sleep n n))))
 *      (relieve +)
 *      (delay-each 80)
 *      (reduce conj)))
 * #_=> [24 79 67 61 99 37]
 * ```
 */
missionary.core.relieve = (function() {
var missionary$core$relieve = null;
var missionary$core$relieve__1 = (function (f){
return (function (n,t){
return missionary.impl.Relieve.run(cljs.core.PersistentArrayMap.EMPTY,f,n,t);
});
});
var missionary$core$relieve__2 = (function (sg,f){
return (function (n,t){
return missionary.impl.Relieve.run(sg,f,n,t);
});
});
missionary$core$relieve = function(sg,f){
switch(arguments.length){
case 1:
return missionary$core$relieve__1.call(this,sg);
case 2:
return missionary$core$relieve__2.call(this,sg,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
missionary$core$relieve.cljs$core$IFn$_invoke$arity$1 = missionary$core$relieve__1;
missionary$core$relieve.cljs$core$IFn$_invoke$arity$2 = missionary$core$relieve__2;
return missionary$core$relieve;
})()
;
/**
 * 
 * Returns a discrete flow producing values emitted by given discrete `flow`, accumulating upstream overflow up to `capacity` items.
 */
missionary.core.buffer = (function missionary$core$buffer(c,f){
if((c > (0))){
} else {
throw (new Error(["Assert failed: ","Non-positive buffer capacity.","\n","(pos? c)"].join('')));
}

return (missionary.impl.Buffer.flow.cljs$core$IFn$_invoke$arity$2 ? missionary.impl.Buffer.flow.cljs$core$IFn$_invoke$arity$2(c,f) : missionary.impl.Buffer.flow.call(null,c,f));
});
/**
 * 
 * Returns a flow running an arbitrary number of flows concurrently. The process is ready to transfer when at least one
 * input is ready to transfer. On transfer, all ready inputs are transferred, the function is called with the latest
 * value of each input and the result is returned. If an input emits consecutive values, all of them are transferred and
 * only the latest one is retained. Each input must be initially ready.
 * 
 * Input failures and exceptions thrown by `f` cancel the process and propagate the error. The process terminates when all
 * inputs are terminated. Cancelling the process cancels all inputs.
 * 
 * ```clojure
 * (defn sleep-emit [delays]
 *   (reductions {} 0
 *  (ap (let [n (?> (seed delays))]
 *        (? (sleep n n))))))
 * 
 * (defn delay-each [delay input]
 *   (ap (? (sleep delay (?> input)))))
 * 
 * (? (->> (latest vector
 *        (sleep-emit [24 79 67 34])
 *        (sleep-emit [86 12 37 93]))
 *      (delay-each 50)
 *      (reduce conj)))
 * 
 * #_=> [[0 0] [24 0] [24 86] [79 12] [79 37] [67 37] [34 93]]
 * ```
 * @param {...*} var_args
 */
missionary.core.latest = (function() { 
var missionary$core$latest__delegate = function (c,fs){
return (function (n,t){
return missionary.impl.Latest.run(c,fs,n,t);
});
};
var missionary$core$latest = function (c,var_args){
var fs = null;
if (arguments.length > 1) {
var G__47620__i = 0, G__47620__a = new Array(arguments.length -  1);
while (G__47620__i < G__47620__a.length) {G__47620__a[G__47620__i] = arguments[G__47620__i + 1]; ++G__47620__i;}
  fs = new cljs.core.IndexedSeq(G__47620__a,0,null);
} 
return missionary$core$latest__delegate.call(this,c,fs);};
missionary$core$latest.cljs$lang$maxFixedArity = 1;
missionary$core$latest.cljs$lang$applyTo = (function (arglist__47621){
var c = cljs.core.first(arglist__47621);
var fs = cljs.core.rest(arglist__47621);
return missionary$core$latest__delegate(c,fs);
});
missionary$core$latest.cljs$core$IFn$_invoke$arity$variadic = missionary$core$latest__delegate;
return missionary$core$latest;
})()
;
/**
 * 
 * Returns a flow running an arbitrary number of sampled flows concurrently with a sampler flow. The process is ready to
 * transfer when the sampler is ready to transfer. On transfer, all ready inputs are transferred, the function is called
 * with the latest value of each input and the result is returned. If a sampled input emits consecutive values, all of
 * them are transferred and only the latest one is retained. Each sampled input must be initially ready.
 * 
 * When the sampler input terminates, all sampled inputs are cancelled. Input failures and exceptions thrown by `f` cancel
 * the process, and propagate the error. The process terminates when all input flows are terminated. Cancelling the process
 * cancels the sampler input.
 * 
 * Example :
 * ```clojure
 * (defn sleep-emit [delays]
 *   (ap (let [n (?> (seed delays))]
 *      (? (sleep n n)))))
 * 
 * (defn delay-each [delay input]
 *   (ap (? (sleep delay (?> input)))))
 * 
 * (m/? (->> (m/sample vector
 *          (m/reductions {} 0 (sleep-emit [24 79 67 34]))
 *          (sleep-emit [86 12 37 93]))
 *     (delay-each 50)
 *     (m/reduce conj)))
 * 
 * #_=> [[24 86] [24 12] [79 37] [67 93]]
 * ```
 * @param {...*} var_args
 */
missionary.core.sample = (function() { 
var missionary$core$sample__delegate = function (c,f,fs){
return (function (n,t){
return missionary.impl.Sample.run(c,f,fs,n,t);
});
};
var missionary$core$sample = function (c,f,var_args){
var fs = null;
if (arguments.length > 2) {
var G__47622__i = 0, G__47622__a = new Array(arguments.length -  2);
while (G__47622__i < G__47622__a.length) {G__47622__a[G__47622__i] = arguments[G__47622__i + 2]; ++G__47622__i;}
  fs = new cljs.core.IndexedSeq(G__47622__a,0,null);
} 
return missionary$core$sample__delegate.call(this,c,f,fs);};
missionary$core$sample.cljs$lang$maxFixedArity = 2;
missionary$core$sample.cljs$lang$applyTo = (function (arglist__47624){
var c = cljs.core.first(arglist__47624);
arglist__47624 = cljs.core.next(arglist__47624);
var f = cljs.core.first(arglist__47624);
var fs = cljs.core.rest(arglist__47624);
return missionary$core$sample__delegate(c,f,fs);
});
missionary$core$sample.cljs$core$IFn$_invoke$arity$variadic = missionary$core$sample__delegate;
return missionary$core$sample;
})()
;
/**
 * 
 * Returns a discrete flow running given discrete `flows` concurrently and emitting the result of applying `f` to the set of first values emitted by each upstream flow, followed by the result of applying `f` to the set of second values and so on, until any upstream flow terminates, at which point the flow will cancel all other upstream flows and wait for their termination.
 * 
 * Cancelling propagates to every upstream flow. If any upstream flow fails or if `f` throws, the flow is cancelled.
 * 
 * Example :
 * ```clojure
 * (m/? (->> (m/zip vector
 *               (m/seed [1 2 3])
 *               (m/seed [:a :b :c]))
 *        (m/reduce conj)))
 * #_=> [[1 :a] [2 :b] [3 :c]]
 * ```
 */
missionary.core.zip = (function missionary$core$zip(var_args){
var args__5728__auto__ = [];
var len__5722__auto___47626 = arguments.length;
var i__5723__auto___47627 = (0);
while(true){
if((i__5723__auto___47627 < len__5722__auto___47626)){
args__5728__auto__.push((arguments[i__5723__auto___47627]));

var G__47628 = (i__5723__auto___47627 + (1));
i__5723__auto___47627 = G__47628;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((2) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((2)),(0),null)):null);
return missionary.core.zip.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5729__auto__);
});

(missionary.core.zip.cljs$core$IFn$_invoke$arity$variadic = (function (c,f,fs){
return (function (n,t){
return missionary.impl.Zip.run(c,cljs.core.cons(f,fs),n,t);
});
}));

(missionary.core.zip.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(missionary.core.zip.cljs$lang$applyTo = (function (seq47509){
var G__47510 = cljs.core.first(seq47509);
var seq47509__$1 = cljs.core.next(seq47509);
var G__47511 = cljs.core.first(seq47509__$1);
var seq47509__$2 = cljs.core.next(seq47509__$1);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47510,G__47511,seq47509__$2);
}));

/**
 * 
 * Returns a discrete flow running given discrete flow, calling given key function on each produced value, grouping values
 * according to keys returned by the function, and producing a key-group pair for each grouping found. A group is a flow
 * consuming values matching a key. Upstream values are dispatched in constant time to their group consumer.
 * 
 * Cancelling a group consumer makes it fail immediately. If a value is subsequently found for the same grouping, the
 * key-group pair is produced again, including in the special case where the consumer is cancelled while a transfer was
 * pending. Cancelling a group consumer has no effect when the main process is cancelled.
 * 
 * If upstream fails, or if the key function throws, then upstream is cancelled and flushed and the error is propagated
 * downstream.
 * 
 * When the last upstream value is consumed, downstream terminates along with each active consumer and subsequent ones.
 * 
 * Concurrent consumers on a single group are not allowed, attempting to do so will fail the latest consumer.
 * 
 * Example :
 * ```clojure
 * (def words ["Air" "Bud" "Cup" "Awake" "Break" "Chunk" "Ant" "Big" "Check"])
 * (def groups
 *   (m/ap (let [[k >x] (m/?= (m/group-by (juxt first count) (m/seed words)))]
 *        [k (m/? (m/reduce conj >x))])))
 * (m/? (m/reduce conj {} groups))
 * #_=> {[\C 3] ["Cup"],
 *    [\B 5] ["Break"],
 *    [\A 5] ["Awake"],
 *    [\B 3] ["Bud" "Big"],
 *    [\A 3] ["Air" "Ant"],
 *    [\C 5] ["Chunk" "Check"]}
 * ```
 */
missionary.core.group_by = (function missionary$core$group_by(kf,f){
return (function (n,t){
return missionary.impl.GroupBy.run(kf,f,n,t);
});
});
/**
 * Use lazy publishers instead - memo, stream, signal.
 */
missionary.core.reactor_call = (function missionary$core$reactor_call(i){
return (function (s,f){
return missionary.impl.Reactor.run(i,s,f);
});
});
/**
 * Use stream instead.
 */
missionary.core.stream_BANG_ = (function missionary$core$stream_BANG_(f){
return missionary.impl.Reactor.publish(f,false);
});
/**
 * Use signal instead.
 */
missionary.core.signal_BANG_ = (function missionary$core$signal_BANG_(f){
return missionary.impl.Reactor.publish(f,true);
});
/**
 * 
 * Returns a new publisher memoizing the result of task `t`.
 * 
 * As long as the task process did not terminate spontaneously, running the publisher as a task registers a subscription.
 * Cancelling a subscription deregisters it. A new task process is spawned when the first subscription is registered and
 * cancelled when the last subscription is deregistered. After the task process terminated spontaneously, every registered
 * subscription and any subsequent subscription terminates immediately with the process result.
 * 
 * Example :
 * ```clojure
 * (require '[missionary.core :as m])
 * 
 * (def fib42
 *   (m/memo
 *  (m/via m/cpu
 *    (println "Computing 42th fibonacci...")
 *    ((fn fib [n]
 *       (case n
 *         0 0
 *         1 1
 *         (+ (fib (dec n))
 *            (fib (dec (dec n))))))
 *     42))))
 * 
 * (fib42 prn prn)                 ;; expensive computation starts here, result is eventually printed
 * (fib42 prn prn)                 ;; expensive computation doesn't run again, previous result is reused
 * ```
 */
missionary.core.memo = (function (){var run = (function missionary$core$run(){
return null;
});
var sub = (function missionary$core$sub(){
var temp__5820__auto__ = missionary.impl.Propagator.getp();
if((temp__5820__auto__ == null)){
return null;
} else {
var f = temp__5820__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}
});
var success = (function missionary$core$success(x){
missionary.impl.Propagator.resolve();

missionary.impl.Propagator.setp((function (){
return missionary.impl.Propagator.success(x);
}));

return missionary.impl.Propagator.schedule();
});
var failure = (function missionary$core$failure(x){
missionary.impl.Propagator.resolve();

missionary.impl.Propagator.setp((function (){
return missionary.impl.Propagator.failure(x);
}));

return missionary.impl.Propagator.schedule();
});
var tick = (function missionary$core$tick(){
return missionary.impl.Propagator.waiting(missionary.impl.Propagator.getp());
});
return (function (task){
return missionary.impl.Propagator.task(null,null,run,sub,success,failure,tick,task);
});
})();
/**
 * 
 * Returns a new publisher distributing successive items emitted by flow `f` while collecting subscribers' backpressure.
 * 
 * As long as the flow process did not terminate spontaneously, running the publisher as a flow registers a subscription.
 * Cancelling a subscription deregisters it. A new flow process is spawned when the first subscription is registered and
 * cancelled when the last subscription is deregistered. After the flow process has terminated spontaneously, every
 * registered subscription and any subsequent subscription terminates immediately after consuming the current item, if any.
 * 
 * Example :
 * ```clojure
 * (require '[missionary.core :as m])
 * 
 * (def >clock                                               ;; A shared process emitting `nil` every second.
 *   (m/stream
 *  (m/ap
 *    (loop [i 0]
 *      (m/amb
 *        (m/? (m/sleep 1000))
 *        (recur (inc i)))))))
 * 
 * (defn counter [r _] (inc r))                              ;; A reducing function counting the number of items.
 * 
 * ((m/join vector
 * (m/reduce counter 0 (m/eduction (take 3) >clock))
 * (m/reduce counter 0 (m/eduction (take 4) >clock)))
 *  prn prn)                                                 ;; After 4 seconds, prints [3 4]
 * ```
 */
missionary.core.stream = (function (){var slot_ready = (0);
var slot_failed = (1);
var slot_done = (2);
var slot_value = (3);
var slot_pending = (4);
var slot_thread = (5);
var slot_time = (6);
var slots = (7);
var reject = (function missionary$core$reject(){
return ack(missionary.impl.Propagator.getp());
});
var step = (function missionary$core$step(){
return missionary.impl.Propagator.schedule();
});
var accept = (function missionary$core$accept(){
var state = missionary.impl.Propagator.getp();
var x = (state[slot_value]);
if((x === state)){
try{var x__$1 = missionary.impl.Propagator.transfer();
(state[slot_value] = x__$1);

ack(state);

return x__$1;
}catch (e47559){var e = e47559;
(state[slot_failed] = true);

(state[slot_value] = e);

ack(state);

throw e;
}} else {
if(cljs.core.truth_((state[slot_done]))){
missionary.impl.Propagator.done();
} else {
}

ack(state);

if(cljs.core.truth_((state[slot_failed]))){
throw x;
} else {
return x;
}
}
});
var propagate_step = (function missionary$core$propagate_step(){
var state = missionary.impl.Propagator.getp();
(state[slot_pending] = ((state[slot_pending]) + (1)));

return missionary.impl.Propagator.step();
});
var tick = (function missionary$core$tick(){
var state = missionary.impl.Propagator.getp();
(state[slot_ready] = true);

if(((state[slot_pending]) === (0))){
return emit(state);
} else {
return null;
}
});
var run = (function missionary$core$run(){
var state = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(slots);
(state[slot_ready] = false);

(state[slot_failed] = false);

(state[slot_done] = false);

(state[slot_pending] = (0));

(state[slot_time] = (-1));

return missionary.impl.Propagator.setp(state);
});
var done = (function missionary$core$done(){
missionary.impl.Propagator.resolve();

var state = missionary.impl.Propagator.getp();
(state[slot_done] = true);

return missionary.impl.Propagator.waiting(propagate_done);
});
var propagate_done = (function missionary$core$propagate_done(){
return missionary.impl.Propagator.done();
});
var sub = (function missionary$core$sub(){
var state = missionary.impl.Propagator.getp();
if((thread() === (state[slot_thread]))){
if((missionary.impl.Propagator.time() === (state[slot_time]))){
(state[slot_pending] = ((state[slot_pending]) + (1)));

return missionary.impl.Propagator.step();
} else {
return null;
}
} else {
return null;
}
});
var thread = (function missionary$core$thread(){
return null;
});
var ack = (function missionary$core$ack(state){
if(((state[slot_pending] = ((state[slot_pending]) - (1))) === (0))){
if(cljs.core.truth_((state[slot_ready]))){
return emit(state);
} else {
return null;
}
} else {
return null;
}
});
var emit = (function missionary$core$emit(state){
(state[slot_value] = state);

(state[slot_ready] = false);

(state[slot_thread] = thread());

(state[slot_time] = missionary.impl.Propagator.time());

return missionary.impl.Propagator.waiting(propagate_step);
});
return (function (flow){
return missionary.impl.Propagator.flow(null,null,run,sub,step,done,tick,accept,reject,flow);
});
})();
/**
 * 
 * Returns a new publisher exposing successive values of `flow` regardless of subscribers' sampling rate. The set of
 * transferred values must form a semigroup with given function `sg` as the internal binary operation, i.e. `sg` must be
 * associative. If `sg` is not provided, `{}` is used by default, i.e. all values but the latest are discarded.
 * 
 * As long as the flow process did not terminate spontaneously, running the publisher as a flow registers a subscription.
 * Cancelling a subscription deregisters it. A new flow process is spawned when the first subscription is registered and
 * cancelled when the last subscription is deregistered. After the flow process has terminated spontaneously, every
 * registered subscription and any subsequent subscription terminates immediately after consuming the latest item.
 * 
 * Example :
 * ```clojure
 * (require '[missionary.core :as m])
 * 
 * (def !input (atom 1))
 * (def main                                      ; this is a reactive computation, the println reacts to input changes
 *   (let [<x (m/signal (m/watch !input))         ; continuous signal reflecting atom state
 *      <y (m/signal (m/latest + <x <x))]      ; derived computation, diamond shape
 *  (m/reduce (fn [_ x] (prn x)) nil <y)))     ; discrete effect performed on successive values
 * 
 * (def dispose!
 *   (main
 *  #(prn ::success %)
 *  #(prn ::crash %)))                         ; prints 2
 * (swap! !input inc)                             ; prints 4
 *                                             ; Each change on the input propagates atomically through the graph.
 *                                             ; 3 is an inconsistent state and is therefore not computed.
 * 
 * (dispose!)                                     ; cleanup, deregisters the atom watch
 * ```
 */
missionary.core.signal = (function (){var slot_sg = (0);
var slot_done = (1);
var slot_busy = (2);
var slot_failed = (3);
var slot_value = (4);
var slots = (5);
var reject = (function missionary$core$reject(){
return null;
});
var step = (function missionary$core$step(){
var state = missionary.impl.Propagator.getp();
if(cljs.core.truth_((state[slot_busy] = cljs.core.not((state[slot_busy]))))){
return missionary.impl.Propagator.schedule();
} else {
return null;
}
});
var accept = (function missionary$core$accept(){
var state = missionary.impl.Propagator.getp();
var y = missionary.impl.Propagator.gets();
missionary.impl.Propagator.sets(state);

if(cljs.core.truth_((state[slot_busy]))){
try{var y__$1 = y;
while(true){
var r = (state[slot_value]);
(state[slot_value] = missionary.impl.Propagator.transfer());

missionary.impl.Propagator.pending(collapse);

var f = (state[slot_sg]);
var x = (state[slot_value]);
var y__$2 = (((y__$1 === state))?x:(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(y__$1,x) : f.call(null,y__$1,x)));
if((r === state)){
} else {
(state[slot_value] = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(r,x) : f.call(null,r,x)));
}

if(cljs.core.truth_((state[slot_busy] = cljs.core.not((state[slot_busy]))))){
var G__47650 = y__$2;
y__$1 = G__47650;
continue;
} else {
return y__$2;
}
break;
}
}catch (e47561){var e = e47561;
(state[slot_failed] = true);

(state[slot_value] = e);

throw e;
}} else {
if(cljs.core.truth_((state[slot_done]))){
missionary.impl.Propagator.done();
} else {
}

if(cljs.core.truth_((state[slot_failed]))){
throw (state[slot_value]);
} else {
return y;
}
}
});
var propagate_step = (function missionary$core$propagate_step(){
return missionary.impl.Propagator.step();
});
var tick = (function missionary$core$tick(){
var state = missionary.impl.Propagator.getp();
return missionary.impl.Propagator.waiting((cljs.core.truth_((state[slot_done]))?propagate_done:propagate_step));
});
var run = (function missionary$core$run(){
var state = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(slots);
(state[slot_sg] = missionary.impl.Propagator.getp());

(state[slot_done] = false);

(state[slot_busy] = false);

(state[slot_failed] = false);

(state[slot_value] = state);

return missionary.impl.Propagator.setp(state);
});
var done = (function missionary$core$done(){
missionary.impl.Propagator.resolve();

var state = missionary.impl.Propagator.getp();
(state[slot_done] = true);

return missionary.impl.Propagator.schedule();
});
var propagate_done = (function missionary$core$propagate_done(){
return missionary.impl.Propagator.done();
});
var sub = (function missionary$core$sub(){
var state = missionary.impl.Propagator.getp();
missionary.impl.Propagator.sets((state[slot_value]));

return missionary.impl.Propagator.step();
});
var collapse = (function missionary$core$collapse(){
var state = missionary.impl.Propagator.getp();
var f = (state[slot_sg]);
var x = (state[slot_value]);
var r = missionary.impl.Propagator.gets();
return missionary.impl.Propagator.sets((((r === state))?x:(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(r,x) : f.call(null,r,x))));
});
return (function() {
var G__47659 = null;
var G__47659__1 = (function (flow){
return missionary.impl.Propagator.flow(cljs.core.PersistentArrayMap.EMPTY,null,run,sub,step,done,tick,accept,reject,flow);
});
var G__47659__2 = (function (sg,flow){
return missionary.impl.Propagator.flow(sg,null,run,sub,step,done,tick,accept,reject,flow);
});
G__47659 = function(sg,flow){
switch(arguments.length){
case 1:
return G__47659__1.call(this,sg);
case 2:
return G__47659__2.call(this,sg,flow);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47659.cljs$core$IFn$_invoke$arity$1 = G__47659__1;
G__47659.cljs$core$IFn$_invoke$arity$2 = G__47659__2;
return G__47659;
})()
})();

//# sourceMappingURL=missionary.core.js.map
