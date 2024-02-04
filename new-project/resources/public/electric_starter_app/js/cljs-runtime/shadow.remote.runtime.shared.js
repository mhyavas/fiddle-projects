goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__36650){
var map__36651 = p__36650;
var map__36651__$1 = cljs.core.__destructure_map(map__36651);
var runtime = map__36651__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36651__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4998__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_36931 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_36931)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__36661 = runtime;
var G__36662 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_36931);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__36661,G__36662) : shadow.remote.runtime.shared.process.call(null,G__36661,G__36662));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__36666,res){
var map__36668 = p__36666;
var map__36668__$1 = cljs.core.__destructure_map(map__36668);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36668__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36668__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__36671 = res;
var G__36671__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36671,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__36671);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36671__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__36671__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__36683 = arguments.length;
switch (G__36683) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__36703,msg,handlers,timeout_after_ms){
var map__36706 = p__36703;
var map__36706__$1 = cljs.core.__destructure_map(map__36706);
var runtime = map__36706__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36706__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5728__auto__ = [];
var len__5722__auto___36978 = arguments.length;
var i__5723__auto___36979 = (0);
while(true){
if((i__5723__auto___36979 < len__5722__auto___36978)){
args__5728__auto__.push((arguments[i__5723__auto___36979]));

var G__36981 = (i__5723__auto___36979 + (1));
i__5723__auto___36979 = G__36981;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((2) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5729__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__36726,ev,args){
var map__36727 = p__36726;
var map__36727__$1 = cljs.core.__destructure_map(map__36727);
var runtime = map__36727__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36727__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__36728 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__36731 = null;
var count__36732 = (0);
var i__36733 = (0);
while(true){
if((i__36733 < count__36732)){
var ext = chunk__36731.cljs$core$IIndexed$_nth$arity$2(null,i__36733);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__36982 = seq__36728;
var G__36983 = chunk__36731;
var G__36984 = count__36732;
var G__36985 = (i__36733 + (1));
seq__36728 = G__36982;
chunk__36731 = G__36983;
count__36732 = G__36984;
i__36733 = G__36985;
continue;
} else {
var G__36986 = seq__36728;
var G__36987 = chunk__36731;
var G__36988 = count__36732;
var G__36989 = (i__36733 + (1));
seq__36728 = G__36986;
chunk__36731 = G__36987;
count__36732 = G__36988;
i__36733 = G__36989;
continue;
}
} else {
var temp__5816__auto__ = cljs.core.seq(seq__36728);
if(temp__5816__auto__){
var seq__36728__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36728__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__36728__$1);
var G__36993 = cljs.core.chunk_rest(seq__36728__$1);
var G__36994 = c__5521__auto__;
var G__36995 = cljs.core.count(c__5521__auto__);
var G__36996 = (0);
seq__36728 = G__36993;
chunk__36731 = G__36994;
count__36732 = G__36995;
i__36733 = G__36996;
continue;
} else {
var ext = cljs.core.first(seq__36728__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__36997 = cljs.core.next(seq__36728__$1);
var G__36998 = null;
var G__36999 = (0);
var G__37000 = (0);
seq__36728 = G__36997;
chunk__36731 = G__36998;
count__36732 = G__36999;
i__36733 = G__37000;
continue;
} else {
var G__37002 = cljs.core.next(seq__36728__$1);
var G__37003 = null;
var G__37004 = (0);
var G__37005 = (0);
seq__36728 = G__37002;
chunk__36731 = G__37003;
count__36732 = G__37004;
i__36733 = G__37005;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq36717){
var G__36718 = cljs.core.first(seq36717);
var seq36717__$1 = cljs.core.next(seq36717);
var G__36719 = cljs.core.first(seq36717__$1);
var seq36717__$2 = cljs.core.next(seq36717__$1);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36718,G__36719,seq36717__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__36756,p__36757){
var map__36758 = p__36756;
var map__36758__$1 = cljs.core.__destructure_map(map__36758);
var runtime = map__36758__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36758__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__36759 = p__36757;
var map__36759__$1 = cljs.core.__destructure_map(map__36759);
var msg = map__36759__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36759__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__36761 = cljs.core.deref(state_ref);
var map__36761__$1 = cljs.core.__destructure_map(map__36761);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36761__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36761__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__36767,msg){
var map__36768 = p__36767;
var map__36768__$1 = cljs.core.__destructure_map(map__36768);
var runtime = map__36768__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36768__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__36775,key,p__36776){
var map__36777 = p__36775;
var map__36777__$1 = cljs.core.__destructure_map(map__36777);
var state = map__36777__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36777__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__36780 = p__36776;
var map__36780__$1 = cljs.core.__destructure_map(map__36780);
var spec = map__36780__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36780__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__36786,key,spec){
var map__36787 = p__36786;
var map__36787__$1 = cljs.core.__destructure_map(map__36787);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36787__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__36791_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__36791_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__36793_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__36793_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__36794_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__36794_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__36795_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__36795_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__36796_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__36796_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__36835,key){
var map__36836 = p__36835;
var map__36836__$1 = cljs.core.__destructure_map(map__36836);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36836__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__36845,msg){
var map__36849 = p__36845;
var map__36849__$1 = cljs.core.__destructure_map(map__36849);
var runtime = map__36849__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36849__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__36856,p__36857){
var map__36860 = p__36856;
var map__36860__$1 = cljs.core.__destructure_map(map__36860);
var runtime = map__36860__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36860__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__36861 = p__36857;
var map__36861__$1 = cljs.core.__destructure_map(map__36861);
var msg = map__36861__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36861__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36861__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__36863 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__36865 = null;
var count__36866 = (0);
var i__36867 = (0);
while(true){
if((i__36867 < count__36866)){
var map__36903 = chunk__36865.cljs$core$IIndexed$_nth$arity$2(null,i__36867);
var map__36903__$1 = cljs.core.__destructure_map(map__36903);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36903__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__37154 = seq__36863;
var G__37155 = chunk__36865;
var G__37156 = count__36866;
var G__37157 = (i__36867 + (1));
seq__36863 = G__37154;
chunk__36865 = G__37155;
count__36866 = G__37156;
i__36867 = G__37157;
continue;
} else {
var G__37159 = seq__36863;
var G__37160 = chunk__36865;
var G__37161 = count__36866;
var G__37162 = (i__36867 + (1));
seq__36863 = G__37159;
chunk__36865 = G__37160;
count__36866 = G__37161;
i__36867 = G__37162;
continue;
}
} else {
var temp__5816__auto__ = cljs.core.seq(seq__36863);
if(temp__5816__auto__){
var seq__36863__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36863__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__36863__$1);
var G__37176 = cljs.core.chunk_rest(seq__36863__$1);
var G__37177 = c__5521__auto__;
var G__37178 = cljs.core.count(c__5521__auto__);
var G__37179 = (0);
seq__36863 = G__37176;
chunk__36865 = G__37177;
count__36866 = G__37178;
i__36867 = G__37179;
continue;
} else {
var map__36913 = cljs.core.first(seq__36863__$1);
var map__36913__$1 = cljs.core.__destructure_map(map__36913);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36913__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__37184 = cljs.core.next(seq__36863__$1);
var G__37185 = null;
var G__37186 = (0);
var G__37187 = (0);
seq__36863 = G__37184;
chunk__36865 = G__37185;
count__36866 = G__37186;
i__36867 = G__37187;
continue;
} else {
var G__37188 = cljs.core.next(seq__36863__$1);
var G__37189 = null;
var G__37190 = (0);
var G__37191 = (0);
seq__36863 = G__37188;
chunk__36865 = G__37189;
count__36866 = G__37190;
i__36867 = G__37191;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
