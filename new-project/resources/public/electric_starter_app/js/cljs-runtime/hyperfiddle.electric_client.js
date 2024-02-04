goog.provide('hyperfiddle.electric_client');
/**
 * @define {string}
 */
hyperfiddle.electric_client.ELECTRIC_USER_VERSION = goog.define("hyperfiddle.electric_client.ELECTRIC_USER_VERSION","hyperfiddle_electric_client__dirty");
hyperfiddle.electric_client.server_url = (function hyperfiddle$electric_client$server_url(){
var url = (new URL(window.location));
var proto = url.protocol;
(url.protocol = (function (){var G__48336 = proto;
switch (G__48336) {
case "http:":
return "ws:";

break;
case "https:":
return "wss:";

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unexpected protocol",proto);

}
})());

url.searchParams.set("ELECTRIC_USER_VERSION",hyperfiddle.electric_client.ELECTRIC_USER_VERSION);

(url.hash = "");

return url.toString();
});
hyperfiddle.electric_client._STAR_ws_server_url_STAR_ = hyperfiddle.electric_client.server_url();
hyperfiddle.electric_client.remove_listeners = (function hyperfiddle$electric_client$remove_listeners(ws){
(ws.onopen = null);

return (ws.onclose = null);
});
hyperfiddle.electric_client.connect = (function hyperfiddle$electric_client$connect(url){
return (function (s,f){
try{var ws = (new WebSocket(url));
(ws.binaryType = "arraybuffer");

(ws.onopen = (function (_){
hyperfiddle.electric_client.remove_listeners(ws);

return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(ws) : s.call(null,ws));
}));

(ws.onclose = (function (_){
hyperfiddle.electric_client.remove_listeners(ws);

return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(null) : s.call(null,null));
}));

return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(WebSocket.CONNECTING,ws.readyState)){
return ws.close();
} else {
return null;
}
});
}catch (e48338){var e = e48338;
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null,e));

return (function (){
return cljs.core.List.EMPTY;
});
}});
});
hyperfiddle.electric_client.wait_for_flush = (function hyperfiddle$electric_client$wait_for_flush(ws){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr48353_block_0 = (function hyperfiddle$electric_client$wait_for_flush_$_cr48353_block_0(cr48353_state){
try{(cr48353_state[(0)] = cr48353_block_1);

return cr48353_state;
}catch (e48381){var cr48353_exception = e48381;
(cr48353_state[(0)] = null);

throw cr48353_exception;
}});
var cr48353_block_1 = (function hyperfiddle$electric_client$wait_for_flush_$_cr48353_block_1(cr48353_state){
try{var cr48353_place_0 = (4096);
var cr48353_place_1 = ws;
var cr48353_place_2 = cr48353_place_1.bufferedAmount;
var cr48353_place_3 = (cr48353_place_0 < cr48353_place_2);
var cr48353_place_4 = null;
if(cr48353_place_3){
(cr48353_state[(0)] = cr48353_block_3);

return cr48353_state;
} else {
(cr48353_state[(0)] = cr48353_block_2);

(cr48353_state[(1)] = cr48353_place_4);

return cr48353_state;
}
}catch (e48382){var cr48353_exception = e48382;
(cr48353_state[(0)] = null);

throw cr48353_exception;
}});
var cr48353_block_2 = (function hyperfiddle$electric_client$wait_for_flush_$_cr48353_block_2(cr48353_state){
try{var cr48353_place_5 = null;
(cr48353_state[(0)] = cr48353_block_5);

(cr48353_state[(1)] = cr48353_place_5);

return cr48353_state;
}catch (e48395){var cr48353_exception = e48395;
(cr48353_state[(0)] = null);

(cr48353_state[(1)] = null);

throw cr48353_exception;
}});
var cr48353_block_3 = (function hyperfiddle$electric_client$wait_for_flush_$_cr48353_block_3(cr48353_state){
try{var cr48353_place_6 = missionary.core.sleep;
var cr48353_place_7 = (50);
var cr48353_place_8 = (function (){var G__48407 = cr48353_place_7;
var fexpr__48406 = cr48353_place_6;
return (fexpr__48406.cljs$core$IFn$_invoke$arity$1 ? fexpr__48406.cljs$core$IFn$_invoke$arity$1(G__48407) : fexpr__48406.call(null,G__48407));
})();
(cr48353_state[(0)] = cr48353_block_4);

return missionary.core.park(cr48353_place_8);
}catch (e48405){var cr48353_exception = e48405;
(cr48353_state[(0)] = null);

throw cr48353_exception;
}});
var cr48353_block_4 = (function hyperfiddle$electric_client$wait_for_flush_$_cr48353_block_4(cr48353_state){
try{var cr48353_place_9 = missionary.core.unpark();
(cr48353_state[(0)] = cr48353_block_1);

return cr48353_state;
}catch (e48412){var cr48353_exception = e48412;
(cr48353_state[(0)] = null);

throw cr48353_exception;
}});
var cr48353_block_5 = (function hyperfiddle$electric_client$wait_for_flush_$_cr48353_block_5(cr48353_state){
try{var cr48353_place_4 = (cr48353_state[(1)]);
(cr48353_state[(0)] = null);

(cr48353_state[(1)] = null);

return cr48353_place_4;
}catch (e48417){var cr48353_exception = e48417;
(cr48353_state[(0)] = null);

(cr48353_state[(1)] = null);

throw cr48353_exception;
}});
return cloroutine.impl.coroutine((function (){var G__48420 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__48420[(0)] = cr48353_block_0);

return G__48420;
})());
})(),missionary.core.sp_run);
});
hyperfiddle.electric_client.wait_for_close = (function hyperfiddle$electric_client$wait_for_close(ws){
return (function (s,f){
(ws.onclose = (function (e){
(ws.onclose = null);

var G__48426 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),e.code,new cljs.core.Keyword(null,"reason","reason",-2070751759),e.reason], null);
return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(G__48426) : s.call(null,G__48426));
}));

return (function (){
if((ws.onclose == null)){
return null;
} else {
(ws.onclose = null);

var G__48427 = (new missionary.Cancelled());
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__48427) : f.call(null,G__48427));
}
});
});
});
hyperfiddle.electric_client.payload = (function hyperfiddle$electric_client$payload(x){
return x.data;
});
hyperfiddle.electric_client.send_BANG_ = (function hyperfiddle$electric_client$send_BANG_(ws,msg){
var G__48428 = ws;
G__48428.send(msg);

return G__48428;
});
hyperfiddle.electric_client.send_all = (function hyperfiddle$electric_client$send_all(ws,msgs){
return missionary.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr48434_block_0 = (function hyperfiddle$electric_client$send_all_$_cr48434_block_0(cr48434_state){
try{var cr48434_place_0 = hyperfiddle.electric_client.wait_for_flush;
var cr48434_place_1 = hyperfiddle.electric_client.send_BANG_;
var cr48434_place_2 = ws;
var cr48434_place_3 = hyperfiddle.electric.impl.io.encode;
var cr48434_place_4 = (1);
var cr48434_place_5 = msgs;
(cr48434_state[(0)] = cr48434_block_1);

(cr48434_state[(1)] = cr48434_place_0);

(cr48434_state[(2)] = cr48434_place_1);

(cr48434_state[(3)] = cr48434_place_2);

(cr48434_state[(4)] = cr48434_place_3);

return missionary.core.fork(cr48434_place_4,cr48434_place_5);
}catch (e48470){var cr48434_exception = e48470;
(cr48434_state[(0)] = null);

throw cr48434_exception;
}});
var cr48434_block_1 = (function hyperfiddle$electric_client$send_all_$_cr48434_block_1(cr48434_state){
try{var cr48434_place_0 = (cr48434_state[(1)]);
var cr48434_place_1 = (cr48434_state[(2)]);
var cr48434_place_2 = (cr48434_state[(3)]);
var cr48434_place_3 = (cr48434_state[(4)]);
var cr48434_place_6 = missionary.core.unpark();
var cr48434_place_7 = (function (){var G__48478 = cr48434_place_6;
var fexpr__48477 = cr48434_place_3;
return (fexpr__48477.cljs$core$IFn$_invoke$arity$1 ? fexpr__48477.cljs$core$IFn$_invoke$arity$1(G__48478) : fexpr__48477.call(null,G__48478));
})();
var cr48434_place_8 = (function (){var G__48480 = cr48434_place_2;
var G__48481 = cr48434_place_7;
var fexpr__48479 = cr48434_place_1;
return (fexpr__48479.cljs$core$IFn$_invoke$arity$2 ? fexpr__48479.cljs$core$IFn$_invoke$arity$2(G__48480,G__48481) : fexpr__48479.call(null,G__48480,G__48481));
})();
var cr48434_place_9 = (function (){var G__48486 = cr48434_place_8;
var fexpr__48485 = cr48434_place_0;
return (fexpr__48485.cljs$core$IFn$_invoke$arity$1 ? fexpr__48485.cljs$core$IFn$_invoke$arity$1(G__48486) : fexpr__48485.call(null,G__48486));
})();
(cr48434_state[(0)] = cr48434_block_2);

(cr48434_state[(1)] = null);

(cr48434_state[(2)] = null);

(cr48434_state[(3)] = null);

(cr48434_state[(4)] = null);

return missionary.core.park(cr48434_place_9);
}catch (e48474){var cr48434_exception = e48474;
(cr48434_state[(0)] = null);

(cr48434_state[(1)] = null);

(cr48434_state[(2)] = null);

(cr48434_state[(3)] = null);

(cr48434_state[(4)] = null);

throw cr48434_exception;
}});
var cr48434_block_2 = (function hyperfiddle$electric_client$send_all_$_cr48434_block_2(cr48434_state){
try{var cr48434_place_10 = missionary.core.unpark();
(cr48434_state[(0)] = null);

return cr48434_place_10;
}catch (e48491){var cr48434_exception = e48491;
(cr48434_state[(0)] = null);

throw cr48434_exception;
}});
return cloroutine.impl.coroutine((function (){var G__48494 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((5));
(G__48494[(0)] = cr48434_block_0);

return G__48494;
})());
})(),missionary.core.ap_run));
});
hyperfiddle.electric_client.handle_hf_heartbeat = (function hyperfiddle$electric_client$handle_hf_heartbeat(ws,cb){
return (function (msg){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(msg,"HEARTBEAT")){
return hyperfiddle.electric_client.send_BANG_(ws,"HEARTBEAT");
} else {
var G__48499 = hyperfiddle.electric.impl.io.decode(msg);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__48499) : cb.call(null,G__48499));
}
});
});
/**
 * 
 * server : the server part of the program
 * cb : the callback for incoming messages.
 * msgs : the discrete flow of messages to send, spawned when websocket is connected, cancelled on websocket close.
 * Returns a task producing nil or failing if the websocket was closed before end of reduction. 
 */
hyperfiddle.electric_client.connector = (function hyperfiddle$electric_client$connector(cb,msgs){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr48505_block_6 = (function hyperfiddle$electric_client$connector_$_cr48505_block_6(cr48505_state){
try{var cr48505_place_8 = (cr48505_state[(2)]);
var cr48505_place_32 = cljs.core._EQ_;
var cr48505_place_33 = WebSocket;
var cr48505_place_34 = cr48505_place_33.CLOSED;
var cr48505_place_35 = cr48505_place_8;
var cr48505_place_36 = cr48505_place_35.readyState;
var cr48505_place_37 = (function (){var G__48591 = cr48505_place_34;
var G__48592 = cr48505_place_36;
var fexpr__48590 = cr48505_place_32;
return (fexpr__48590.cljs$core$IFn$_invoke$arity$2 ? fexpr__48590.cljs$core$IFn$_invoke$arity$2(G__48591,G__48592) : fexpr__48590.call(null,G__48591,G__48592));
})();
var cr48505_place_38 = null;
if(cljs.core.truth_(cr48505_place_37)){
(cr48505_state[(0)] = cr48505_block_9);

(cr48505_state[(2)] = null);

(cr48505_state[(5)] = cr48505_place_38);

return cr48505_state;
} else {
(cr48505_state[(0)] = cr48505_block_7);

(cr48505_state[(5)] = cr48505_place_38);

return cr48505_state;
}
}catch (e48589){var cr48505_exception = e48589;
(cr48505_state[(0)] = null);

(cr48505_state[(1)] = null);

(cr48505_state[(2)] = null);

(cr48505_state[(3)] = null);

(cr48505_state[(4)] = null);

throw cr48505_exception;
}});
var cr48505_block_0 = (function hyperfiddle$electric_client$connector_$_cr48505_block_0(cr48505_state){
try{var cr48505_place_0 = hyperfiddle.electric_client.connect;
var cr48505_place_1 = hyperfiddle.electric_client._STAR_ws_server_url_STAR_;
var cr48505_place_2 = (function (){var G__48598 = cr48505_place_1;
var fexpr__48597 = cr48505_place_0;
return (fexpr__48597.cljs$core$IFn$_invoke$arity$1 ? fexpr__48597.cljs$core$IFn$_invoke$arity$1(G__48598) : fexpr__48597.call(null,G__48598));
})();
(cr48505_state[(0)] = cr48505_block_1);

return missionary.core.park(cr48505_place_2);
}catch (e48596){var cr48505_exception = e48596;
(cr48505_state[(0)] = null);

throw cr48505_exception;
}});
var cr48505_block_1 = (function hyperfiddle$electric_client$connector_$_cr48505_block_1(cr48505_state){
try{var cr48505_place_3 = missionary.core.unpark();
var cr48505_place_4 = cr48505_place_3;
var cr48505_place_5 = null;
var cr48505_place_6 = (cr48505_place_4 == cr48505_place_5);
var cr48505_place_7 = null;
if(cr48505_place_6){
(cr48505_state[(0)] = cr48505_block_11);

(cr48505_state[(1)] = cr48505_place_7);

return cr48505_state;
} else {
(cr48505_state[(0)] = cr48505_block_2);

(cr48505_state[(2)] = cr48505_place_3);

(cr48505_state[(1)] = cr48505_place_7);

return cr48505_state;
}
}catch (e48599){var cr48505_exception = e48599;
(cr48505_state[(0)] = null);

throw cr48505_exception;
}});
var cr48505_block_10 = (function hyperfiddle$electric_client$connector_$_cr48505_block_10(cr48505_state){
try{var cr48505_place_10 = (cr48505_state[(3)]);
var cr48505_place_38 = (cr48505_state[(5)]);
var cr48505_place_9 = (cr48505_state[(4)]);
var cr48505_place_46 = (cljs.core.truth_(cr48505_place_10)?(function(){throw cr48505_place_9})():cr48505_place_9);
(cr48505_state[(0)] = cr48505_block_12);

(cr48505_state[(3)] = null);

(cr48505_state[(5)] = null);

(cr48505_state[(4)] = null);

(cr48505_state[(1)] = cr48505_place_46);

return cr48505_state;
}catch (e48602){var cr48505_exception = e48602;
(cr48505_state[(0)] = null);

(cr48505_state[(1)] = null);

(cr48505_state[(3)] = null);

(cr48505_state[(5)] = null);

(cr48505_state[(4)] = null);

throw cr48505_exception;
}});
var cr48505_block_2 = (function hyperfiddle$electric_client$connector_$_cr48505_block_2(cr48505_state){
try{var cr48505_place_3 = (cr48505_state[(2)]);
var cr48505_place_8 = cr48505_place_3;
var cr48505_place_9 = null;
var cr48505_place_10 = false;
(cr48505_state[(0)] = cr48505_block_3);

(cr48505_state[(2)] = null);

(cr48505_state[(2)] = cr48505_place_8);

(cr48505_state[(4)] = cr48505_place_9);

(cr48505_state[(3)] = cr48505_place_10);

return cr48505_state;
}catch (e48615){var cr48505_exception = e48615;
(cr48505_state[(0)] = null);

(cr48505_state[(1)] = null);

(cr48505_state[(2)] = null);

throw cr48505_exception;
}});
var cr48505_block_12 = (function hyperfiddle$electric_client$connector_$_cr48505_block_12(cr48505_state){
try{var cr48505_place_7 = (cr48505_state[(1)]);
(cr48505_state[(0)] = null);

(cr48505_state[(1)] = null);

return cr48505_place_7;
}catch (e48633){var cr48505_exception = e48633;
(cr48505_state[(0)] = null);

(cr48505_state[(1)] = null);

throw cr48505_exception;
}});
var cr48505_block_8 = (function hyperfiddle$electric_client$connector_$_cr48505_block_8(cr48505_state){
try{var cr48505_place_44 = missionary.core.unpark();
(cr48505_state[(0)] = cr48505_block_10);

(cr48505_state[(5)] = cr48505_place_44);

return cr48505_state;
}catch (e48637){var cr48505_exception = e48637;
(cr48505_state[(0)] = null);

(cr48505_state[(1)] = null);

(cr48505_state[(3)] = null);

(cr48505_state[(5)] = null);

(cr48505_state[(4)] = null);

throw cr48505_exception;
}});
var cr48505_block_4 = (function hyperfiddle$electric_client$connector_$_cr48505_block_4(cr48505_state){
try{var cr48505_place_29 = missionary.core.unpark();
(cr48505_state[(0)] = cr48505_block_6);

(cr48505_state[(4)] = cr48505_place_29);

return cr48505_state;
}catch (e48638){var cr48505_exception = e48638;
(cr48505_state[(0)] = cr48505_block_5);

(cr48505_state[(4)] = cr48505_exception);

return cr48505_state;
}});
var cr48505_block_5 = (function hyperfiddle$electric_client$connector_$_cr48505_block_5(cr48505_state){
try{var cr48505_place_9 = (cr48505_state[(4)]);
var cr48505_place_30 = cr48505_place_9;
var cr48505_place_31 = (function(){throw cr48505_place_30})();
(cr48505_state[(0)] = null);

(cr48505_state[(1)] = null);

(cr48505_state[(2)] = null);

(cr48505_state[(3)] = null);

(cr48505_state[(4)] = null);

return null;
}catch (e48639){var cr48505_exception = e48639;
(cr48505_state[(0)] = cr48505_block_6);

(cr48505_state[(3)] = true);

(cr48505_state[(4)] = cr48505_exception);

return cr48505_state;
}});
var cr48505_block_9 = (function hyperfiddle$electric_client$connector_$_cr48505_block_9(cr48505_state){
try{var cr48505_place_45 = null;
(cr48505_state[(0)] = cr48505_block_10);

(cr48505_state[(5)] = cr48505_place_45);

return cr48505_state;
}catch (e48640){var cr48505_exception = e48640;
(cr48505_state[(0)] = null);

(cr48505_state[(1)] = null);

(cr48505_state[(3)] = null);

(cr48505_state[(5)] = null);

(cr48505_state[(4)] = null);

throw cr48505_exception;
}});
var cr48505_block_7 = (function hyperfiddle$electric_client$connector_$_cr48505_block_7(cr48505_state){
try{var cr48505_place_8 = (cr48505_state[(2)]);
var cr48505_place_39 = cr48505_place_8;
var cr48505_place_40 = cr48505_place_39.close();
var cr48505_place_41 = missionary.core.compel;
var cr48505_place_42 = hyperfiddle.electric_client.wait_for_close;
var cr48505_place_43 = (function (){var G__48649 = cr48505_place_42;
var fexpr__48648 = cr48505_place_41;
return (fexpr__48648.cljs$core$IFn$_invoke$arity$1 ? fexpr__48648.cljs$core$IFn$_invoke$arity$1(G__48649) : fexpr__48648.call(null,G__48649));
})();
(cr48505_state[(0)] = cr48505_block_8);

(cr48505_state[(2)] = null);

return missionary.core.park(cr48505_place_43);
}catch (e48642){var cr48505_exception = e48642;
(cr48505_state[(0)] = null);

(cr48505_state[(1)] = null);

(cr48505_state[(2)] = null);

(cr48505_state[(3)] = null);

(cr48505_state[(5)] = null);

(cr48505_state[(4)] = null);

throw cr48505_exception;
}});
var cr48505_block_3 = (function hyperfiddle$electric_client$connector_$_cr48505_block_3(cr48505_state){
try{var cr48505_place_8 = (cr48505_state[(2)]);
var cr48505_place_11 = cr48505_place_8;
var cr48505_place_12 = cljs.core.comp;
var cr48505_place_13 = hyperfiddle.electric_client.handle_hf_heartbeat;
var cr48505_place_14 = cr48505_place_8;
var cr48505_place_15 = cb;
var cr48505_place_16 = (function (){var G__48652 = cr48505_place_14;
var G__48653 = cr48505_place_15;
var fexpr__48651 = cr48505_place_13;
return (fexpr__48651.cljs$core$IFn$_invoke$arity$2 ? fexpr__48651.cljs$core$IFn$_invoke$arity$2(G__48652,G__48653) : fexpr__48651.call(null,G__48652,G__48653));
})();
var cr48505_place_17 = hyperfiddle.electric_client.payload;
var cr48505_place_18 = (function (){var G__48655 = cr48505_place_16;
var G__48656 = cr48505_place_17;
var fexpr__48654 = cr48505_place_12;
return (fexpr__48654.cljs$core$IFn$_invoke$arity$2 ? fexpr__48654.cljs$core$IFn$_invoke$arity$2(G__48655,G__48656) : fexpr__48654.call(null,G__48655,G__48656));
})();
var cr48505_place_19 = (cr48505_place_11.onmessage = cr48505_place_18);
var cr48505_place_20 = missionary.core.race;
var cr48505_place_21 = hyperfiddle.electric_client.send_all;
var cr48505_place_22 = cr48505_place_8;
var cr48505_place_23 = msgs;
var cr48505_place_24 = (function (){var G__48658 = cr48505_place_22;
var G__48659 = cr48505_place_23;
var fexpr__48657 = cr48505_place_21;
return (fexpr__48657.cljs$core$IFn$_invoke$arity$2 ? fexpr__48657.cljs$core$IFn$_invoke$arity$2(G__48658,G__48659) : fexpr__48657.call(null,G__48658,G__48659));
})();
var cr48505_place_25 = hyperfiddle.electric_client.wait_for_close;
var cr48505_place_26 = cr48505_place_8;
var cr48505_place_27 = (function (){var G__48661 = cr48505_place_26;
var fexpr__48660 = cr48505_place_25;
return (fexpr__48660.cljs$core$IFn$_invoke$arity$1 ? fexpr__48660.cljs$core$IFn$_invoke$arity$1(G__48661) : fexpr__48660.call(null,G__48661));
})();
var cr48505_place_28 = (function (){var G__48663 = cr48505_place_24;
var G__48664 = cr48505_place_27;
var fexpr__48662 = cr48505_place_20;
return (fexpr__48662.cljs$core$IFn$_invoke$arity$2 ? fexpr__48662.cljs$core$IFn$_invoke$arity$2(G__48663,G__48664) : fexpr__48662.call(null,G__48663,G__48664));
})();
(cr48505_state[(0)] = cr48505_block_4);

return missionary.core.park(cr48505_place_28);
}catch (e48650){var cr48505_exception = e48650;
(cr48505_state[(0)] = cr48505_block_5);

(cr48505_state[(4)] = cr48505_exception);

return cr48505_state;
}});
var cr48505_block_11 = (function hyperfiddle$electric_client$connector_$_cr48505_block_11(cr48505_state){
try{var cr48505_place_47 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
(cr48505_state[(0)] = cr48505_block_12);

(cr48505_state[(1)] = cr48505_place_47);

return cr48505_state;
}catch (e48668){var cr48505_exception = e48668;
(cr48505_state[(0)] = null);

(cr48505_state[(1)] = null);

throw cr48505_exception;
}});
return cloroutine.impl.coroutine((function (){var G__48671 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((6));
(G__48671[(0)] = cr48505_block_0);

return G__48671;
})());
})(),missionary.core.sp_run);
});
hyperfiddle.electric_client.fib_iter = (function hyperfiddle$electric_client$fib_iter(p__48672){
var vec__48673 = p__48672;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48673,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48673,(1),null);
var G__48676 = b;
switch (G__48676) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,(a + b)], null);

}
});
hyperfiddle.electric_client.fib = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.iterate(hyperfiddle.electric_client.fib_iter,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)));
hyperfiddle.electric_client.retry_delays = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,(100)),hyperfiddle.electric_client.fib);
hyperfiddle.electric_client.boot_with_retry = (function hyperfiddle$electric_client$boot_with_retry(client,conn){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr48678_block_4 = (function hyperfiddle$electric_client$boot_with_retry_$_cr48678_block_4(cr48678_state){
try{var cr48678_place_12 = (cr48678_state[(4)]);
var cr48678_place_52 = cr48678_place_12;
var cr48678_place_53 = (function(){throw cr48678_place_52})();
(cr48678_state[(0)] = null);

(cr48678_state[(3)] = null);

(cr48678_state[(1)] = null);

(cr48678_state[(2)] = null);

(cr48678_state[(4)] = null);

(cr48678_state[(6)] = null);

return null;
}catch (e49001){var cr48678_exception = e49001;
(cr48678_state[(0)] = cr48678_block_5);

(cr48678_state[(3)] = true);

(cr48678_state[(4)] = cr48678_exception);

return cr48678_state;
}});
var cr48678_block_16 = (function hyperfiddle$electric_client$boot_with_retry_$_cr48678_block_16(cr48678_state){
try{var cr48678_place_60 = (cr48678_state[(4)]);
var cr48678_place_108 = cr48678_place_60;
var cr48678_place_109 = null;
var cr48678_place_110 = (cr48678_place_108 == cr48678_place_109);
var cr48678_place_111 = null;
if(cr48678_place_110){
(cr48678_state[(0)] = cr48678_block_19);

(cr48678_state[(1)] = null);

(cr48678_state[(2)] = null);

(cr48678_state[(4)] = null);

(cr48678_state[(1)] = cr48678_place_111);

return cr48678_state;
} else {
(cr48678_state[(0)] = cr48678_block_17);

return cr48678_state;
}
}catch (e49002){var cr48678_exception = e49002;
(cr48678_state[(0)] = null);

(cr48678_state[(1)] = null);

(cr48678_state[(2)] = null);

(cr48678_state[(4)] = null);

throw cr48678_exception;
}});
var cr48678_block_20 = (function hyperfiddle$electric_client$boot_with_retry_$_cr48678_block_20(cr48678_state){
try{var cr48678_place_111 = (cr48678_state[(1)]);
(cr48678_state[(0)] = null);

(cr48678_state[(1)] = null);

return cr48678_place_111;
}catch (e49003){var cr48678_exception = e49003;
(cr48678_state[(0)] = null);

(cr48678_state[(1)] = null);

throw cr48678_exception;
}});
var cr48678_block_10 = (function hyperfiddle$electric_client$boot_with_retry_$_cr48678_block_10(cr48678_state){
try{var cr48678_place_86 = console;
var cr48678_place_87 = "Server timed out, considering this client inactive.";
var cr48678_place_88 = cr48678_place_86.log(cr48678_place_87);
var cr48678_place_89 = cljs.core.seq;
var cr48678_place_90 = hyperfiddle.electric_client.retry_delays;
var cr48678_place_91 = (function (){var G__49006 = cr48678_place_90;
var fexpr__49005 = cr48678_place_89;
return (fexpr__49005.cljs$core$IFn$_invoke$arity$1 ? fexpr__49005.cljs$core$IFn$_invoke$arity$1(G__49006) : fexpr__49005.call(null,G__49006));
})();
(cr48678_state[(0)] = cr48678_block_12);

(cr48678_state[(5)] = cr48678_place_91);

return cr48678_state;
}catch (e49004){var cr48678_exception = e49004;
(cr48678_state[(0)] = null);

(cr48678_state[(5)] = null);

(cr48678_state[(3)] = null);

(cr48678_state[(1)] = null);

(cr48678_state[(2)] = null);

(cr48678_state[(4)] = null);

throw cr48678_exception;
}});
var cr48678_block_1 = (function hyperfiddle$electric_client$boot_with_retry_$_cr48678_block_1(cr48678_state){
try{var cr48678_place_0 = (cr48678_state[(1)]);
var cr48678_place_2 = cljs.core.object_array;
var cr48678_place_3 = (1);
var cr48678_place_4 = (function (){var G__49009 = cr48678_place_3;
var fexpr__49008 = cr48678_place_2;
return (fexpr__49008.cljs$core$IFn$_invoke$arity$1 ? fexpr__49008.cljs$core$IFn$_invoke$arity$1(G__49009) : fexpr__49008.call(null,G__49009));
})();
var cr48678_place_5 = console;
var cr48678_place_6 = "Connecting...";
var cr48678_place_7 = cr48678_place_5.log(cr48678_place_6);
var cr48678_place_8 = hyperfiddle.electric_client._STAR_ws_server_url_STAR_;
var cr48678_place_9 = cr48678_place_0;
var cr48678_place_10 = cr48678_place_9;
var cr48678_place_11 = (hyperfiddle.electric_client._STAR_ws_server_url_STAR_ = cr48678_place_10);
var cr48678_place_12 = null;
var cr48678_place_13 = false;
(cr48678_state[(0)] = cr48678_block_2);

(cr48678_state[(3)] = cr48678_place_13);

(cr48678_state[(4)] = cr48678_place_12);

(cr48678_state[(5)] = cr48678_place_4);

(cr48678_state[(6)] = cr48678_place_8);

return cr48678_state;
}catch (e49007){var cr48678_exception = e49007;
(cr48678_state[(0)] = null);

(cr48678_state[(1)] = null);

(cr48678_state[(2)] = null);

throw cr48678_exception;
}});
var cr48678_block_6 = (function hyperfiddle$electric_client$boot_with_retry_$_cr48678_block_6(cr48678_state){
try{var cr48678_place_56 = (cr48678_state[(3)]);
var cr48678_place_61 = cr48678_place_56;
var cr48678_place_62 = new cljs.core.Keyword(null,"code","code",1586293142);
var cr48678_place_63 = cr48678_place_61;
var cr48678_place_64 = cr48678_place_62.cljs$core$IFn$_invoke$arity$1(cr48678_place_63);
var cr48678_place_65 = cr48678_place_64;
var cr48678_place_66 = null;
var cr48678_place_67 = (cr48678_place_65 == cr48678_place_66);
var cr48678_place_68 = null;
if(cr48678_place_67){
(cr48678_state[(0)] = cr48678_block_13);

(cr48678_state[(3)] = null);

(cr48678_state[(3)] = cr48678_place_68);

return cr48678_state;
} else {
(cr48678_state[(0)] = cr48678_block_7);

(cr48678_state[(3)] = null);

(cr48678_state[(5)] = cr48678_place_61);

(cr48678_state[(6)] = cr48678_place_64);

(cr48678_state[(3)] = cr48678_place_68);

return cr48678_state;
}
}catch (e49010){var cr48678_exception = e49010;
(cr48678_state[(0)] = null);

(cr48678_state[(3)] = null);

(cr48678_state[(1)] = null);

(cr48678_state[(2)] = null);

(cr48678_state[(4)] = null);

throw cr48678_exception;
}});
var cr48678_block_2 = (function hyperfiddle$electric_client$boot_with_retry_$_cr48678_block_2(cr48678_state){
try{var cr48678_place_4 = (cr48678_state[(5)]);
var cr48678_place_14 = (function (x){
var fexpr__48791 = (cr48678_place_4[(0)]);
var G__49013 = x;
var fexpr__49012 = fexpr__48791;
return (fexpr__49012.cljs$core$IFn$_invoke$arity$1 ? fexpr__49012.cljs$core$IFn$_invoke$arity$1(G__49013) : fexpr__49012.call(null,G__49013));
});
var cr48678_place_15 = cljs.core.partial;
var cr48678_place_16 = (function (cr48792_state){
try{(cr48792_state[(0)] = cr48678_place_33);

return cr48792_state;
}catch (e49050){var e48833 = e49050;
var cr48792_exception = e48833;
(cr48792_state[(0)] = null);

(cr48792_state[(1)] = null);

(cr48792_state[(2)] = null);

throw cr48792_exception;
}});
var cr48678_place_17 = (function (cr48792_state){
try{var cr48792_place_0 = console;
var cr48792_place_1 = "Connected.";
var cr48792_place_2 = cr48792_place_0.log(cr48792_place_1);
var cr48792_place_3 = missionary.core.rdv;
var cr48792_place_4 = (function (){var fexpr__48835 = cr48792_place_3;
var fexpr__49052 = fexpr__48835;
return (fexpr__49052.cljs$core$IFn$_invoke$arity$0 ? fexpr__49052.cljs$core$IFn$_invoke$arity$0() : fexpr__49052.call(null));
})();
var cr48792_place_5 = (2);
var cr48792_place_6 = missionary.core.seed;
var cr48792_place_7 = cljs.core.range;
var cr48792_place_8 = (2);
var cr48792_place_9 = (function (){var G__48837 = cr48792_place_8;
var fexpr__48836 = cr48792_place_7;
var G__49054 = G__48837;
var fexpr__49053 = fexpr__48836;
return (fexpr__49053.cljs$core$IFn$_invoke$arity$1 ? fexpr__49053.cljs$core$IFn$_invoke$arity$1(G__49054) : fexpr__49053.call(null,G__49054));
})();
var cr48792_place_10 = (function (){var G__48839 = cr48792_place_9;
var fexpr__48838 = cr48792_place_6;
var G__49056 = G__48839;
var fexpr__49055 = fexpr__48838;
return (fexpr__49055.cljs$core$IFn$_invoke$arity$1 ? fexpr__49055.cljs$core$IFn$_invoke$arity$1(G__49056) : fexpr__49055.call(null,G__49056));
})();
(cr48792_state[(0)] = cr48678_place_27);

(cr48792_state[(1)] = cr48792_place_4);

return missionary.core.fork(cr48792_place_5,cr48792_place_10);
}catch (e49051){var e48834 = e49051;
var cr48792_exception = e48834;
(cr48792_state[(0)] = null);

throw cr48792_exception;
}});
var cr48678_place_32 = (function (cr48792_state){
try{var cr48792_place_33 = (cr48792_state[(4)]);
var cr48792_place_43 = cr48792_place_33;
(cr48792_state[(0)] = cr48678_place_34);

(cr48792_state[(4)] = null);

(cr48792_state[(1)] = cr48792_place_43);

return cr48792_state;
}catch (e49057){var e48866 = e49057;
var cr48792_exception = e48866;
(cr48792_state[(0)] = null);

(cr48792_state[(4)] = null);

(cr48792_state[(1)] = null);

(cr48792_state[(2)] = null);

(cr48792_state[(3)] = null);

throw cr48792_exception;
}});
var cr48678_place_30 = (function (cr48792_state){
try{var cr48792_place_28 = missionary.core.unpark();
var cr48792_place_29 = cr48792_place_28;
var cr48792_place_30 = null;
var cr48792_place_31 = (cr48792_place_29 == cr48792_place_30);
var cr48792_place_32 = null;
if(cr48792_place_31){
(cr48792_state[(0)] = cr48678_place_21);

(cr48792_state[(1)] = null);

(cr48792_state[(3)] = cr48792_place_32);

return cr48792_state;
} else {
(cr48792_state[(0)] = cr48678_place_29);

(cr48792_state[(4)] = cr48792_place_28);

(cr48792_state[(3)] = cr48792_place_32);

return cr48792_state;
}
}catch (e49058){var e48864 = e49058;
var cr48792_exception = e48864;
(cr48792_state[(0)] = null);

(cr48792_state[(1)] = null);

(cr48792_state[(2)] = null);

throw cr48792_exception;
}});
var cr48678_place_18 = (function (cr48792_state){
try{var cr48792_place_11 = (cr48792_state[(1)]);
var cr48792_place_52 = "No matching clause: ";
var cr48792_place_53 = cr48792_place_11;
var cr48792_place_54 = [cr48792_place_52,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr48792_place_53)].join('');
var cr48792_place_55 = (new Error(cr48792_place_54));
var cr48792_place_56 = (function(){throw cr48792_place_55})();
(cr48792_state[(0)] = null);

(cr48792_state[(1)] = null);

return null;
}catch (e49059){var e48840 = e49059;
var cr48792_exception = e48840;
(cr48792_state[(0)] = null);

(cr48792_state[(1)] = null);

throw cr48792_exception;
}});
var cr48678_place_24 = (function (cr48792_state){
try{var cr48792_place_51 = missionary.core.unpark();
(cr48792_state[(0)] = cr48678_place_22);

(cr48792_state[(3)] = cr48792_place_51);

return cr48792_state;
}catch (e49060){var e48853 = e49060;
var cr48792_exception = e48853;
(cr48792_state[(0)] = null);

(cr48792_state[(2)] = null);

(cr48792_state[(3)] = null);

throw cr48792_exception;
}});
var cr48678_place_29 = (function (cr48792_state){
try{var cr48792_place_28 = (cr48792_state[(4)]);
var cr48792_place_33 = cr48792_place_28;
var cr48792_place_34 = (1);
var cr48792_place_35 = missionary.core.seed;
var cr48792_place_36 = cljs.core.range;
var cr48792_place_37 = (2);
var cr48792_place_38 = (function (){var G__48861 = cr48792_place_37;
var fexpr__48860 = cr48792_place_36;
var G__49063 = G__48861;
var fexpr__49062 = fexpr__48860;
return (fexpr__49062.cljs$core$IFn$_invoke$arity$1 ? fexpr__49062.cljs$core$IFn$_invoke$arity$1(G__49063) : fexpr__49062.call(null,G__49063));
})();
var cr48792_place_39 = (function (){var G__48863 = cr48792_place_38;
var fexpr__48862 = cr48792_place_35;
var G__49065 = G__48863;
var fexpr__49064 = fexpr__48862;
return (fexpr__49064.cljs$core$IFn$_invoke$arity$1 ? fexpr__49064.cljs$core$IFn$_invoke$arity$1(G__49065) : fexpr__49064.call(null,G__49065));
})();
(cr48792_state[(0)] = cr48678_place_19);

(cr48792_state[(4)] = null);

(cr48792_state[(4)] = cr48792_place_33);

return missionary.core.fork(cr48792_place_34,cr48792_place_39);
}catch (e49061){var e48859 = e49061;
var cr48792_exception = e48859;
(cr48792_state[(0)] = null);

(cr48792_state[(1)] = null);

(cr48792_state[(2)] = null);

(cr48792_state[(3)] = null);

(cr48792_state[(4)] = null);

throw cr48792_exception;
}});
var cr48678_place_28 = (function (cr48792_state){
try{var cr48792_place_40 = (cr48792_state[(1)]);
var cr48792_place_44 = "No matching clause: ";
var cr48792_place_45 = cr48792_place_40;
var cr48792_place_46 = [cr48792_place_44,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr48792_place_45)].join('');
var cr48792_place_47 = (new Error(cr48792_place_46));
var cr48792_place_48 = (function(){throw cr48792_place_47})();
(cr48792_state[(0)] = null);

(cr48792_state[(1)] = null);

return null;
}catch (e49066){var e48858 = e49066;
var cr48792_exception = e48858;
(cr48792_state[(0)] = null);

(cr48792_state[(1)] = null);

throw cr48792_exception;
}});
var cr48678_place_33 = (function (cr48792_state){
try{var cr48792_place_4 = (cr48792_state[(1)]);
var cr48792_place_27 = cr48792_place_4;
(cr48792_state[(0)] = cr48678_place_30);

return missionary.core.park(cr48792_place_27);
}catch (e49067){var e48867 = e49067;
var cr48792_exception = e48867;
(cr48792_state[(0)] = null);

(cr48792_state[(1)] = null);

(cr48792_state[(2)] = null);

throw cr48792_exception;
}});
var cr48678_place_23 = (function (cr48792_state){
try{(cr48792_state[(0)] = cr48678_place_33);

return cr48792_state;
}catch (e49068){var e48852 = e49068;
var cr48792_exception = e48852;
(cr48792_state[(0)] = null);

(cr48792_state[(1)] = null);

(cr48792_state[(2)] = null);

throw cr48792_exception;
}});
var cr48678_place_34 = (function (cr48792_state){
try{var cr48792_place_42 = (cr48792_state[(1)]);
(cr48792_state[(0)] = cr48678_place_22);

(cr48792_state[(1)] = null);

(cr48792_state[(3)] = cr48792_place_42);

return cr48792_state;
}catch (e49069){var e48868 = e49069;
var cr48792_exception = e48868;
(cr48792_state[(0)] = null);

(cr48792_state[(1)] = null);

(cr48792_state[(2)] = null);

(cr48792_state[(3)] = null);

throw cr48792_exception;
}});
var cr48678_place_25 = (function (cr48792_state){
try{var cr48792_place_23 = missionary.core.unpark();
var cr48792_place_24 = (1);
var cr48792_place_25 = missionary.core.none;
(cr48792_state[(0)] = cr48678_place_31);

return missionary.core.fork(cr48792_place_24,cr48792_place_25);
}catch (e49070){var e48854 = e49070;
var cr48792_exception = e48854;
(cr48792_state[(0)] = null);

(cr48792_state[(2)] = null);

throw cr48792_exception;
}});
var cr48678_place_27 = (function (cr48792_state){
try{var cr48792_place_11 = missionary.core.unpark();
var cr48792_place_12 = cr48792_place_11;
var cr48792_place_13 = null;
var G__48857 = cr48792_place_12;
var G__49072 = G__48857;
switch (G__49072) {
case (0):
(cr48792_state[(0)] = cr48678_place_20);

(cr48792_state[(2)] = cr48792_place_13);

return cr48792_state;

break;
case (1):
(cr48792_state[(0)] = cr48678_place_23);

(cr48792_state[(2)] = cr48792_place_13);

return cr48792_state;

break;
default:
(cr48792_state[(0)] = cr48678_place_18);

(cr48792_state[(1)] = null);

(cr48792_state[(1)] = cr48792_place_11);

return cr48792_state;

}
}catch (e49071){var e48856 = e49071;
var cr48792_exception = e48856;
(cr48792_state[(0)] = null);

(cr48792_state[(1)] = null);

throw cr48792_exception;
}});
var cr48678_place_19 = (function (cr48792_state){
try{var cr48792_place_40 = missionary.core.unpark();
var cr48792_place_41 = cr48792_place_40;
var cr48792_place_42 = null;
var G__48842 = cr48792_place_41;
var G__49074 = G__48842;
switch (G__49074) {
case (0):
(cr48792_state[(0)] = cr48678_place_32);

(cr48792_state[(1)] = null);

(cr48792_state[(1)] = cr48792_place_42);

return cr48792_state;

break;
case (1):
(cr48792_state[(0)] = cr48678_place_16);

(cr48792_state[(4)] = null);

(cr48792_state[(3)] = null);

return cr48792_state;

break;
default:
(cr48792_state[(0)] = cr48678_place_28);

(cr48792_state[(1)] = null);

(cr48792_state[(4)] = null);

(cr48792_state[(2)] = null);

(cr48792_state[(3)] = null);

(cr48792_state[(1)] = cr48792_place_40);

return cr48792_state;

}
}catch (e49073){var e48841 = e49073;
var cr48792_exception = e48841;
(cr48792_state[(0)] = null);

(cr48792_state[(1)] = null);

(cr48792_state[(4)] = null);

(cr48792_state[(2)] = null);

(cr48792_state[(3)] = null);

throw cr48792_exception;
}});
var cr48678_place_31 = (function (cr48792_state){
try{var cr48792_place_26 = missionary.core.unpark();
(cr48792_state[(0)] = cr48678_place_26);

(cr48792_state[(2)] = cr48792_place_26);

return cr48792_state;
}catch (e49075){var e48865 = e49075;
var cr48792_exception = e48865;
(cr48792_state[(0)] = null);

(cr48792_state[(2)] = null);

throw cr48792_exception;
}});
var cr48678_place_20 = (function (cr48792_state){
try{var cr48792_place_4 = (cr48792_state[(1)]);
var cr48792_place_14 = cr48792_place_4;
var cr48792_place_15 = hyperfiddle.electric.impl.runtime.subject_at;
var cr48792_place_16 = cr48678_place_4;
var cr48792_place_17 = (0);
var cr48792_place_18 = (function (){var G__48845 = cr48792_place_16;
var G__48846 = cr48792_place_17;
var fexpr__48844 = cr48792_place_15;
var G__49078 = G__48845;
var G__49079 = G__48846;
var fexpr__49077 = fexpr__48844;
return (fexpr__49077.cljs$core$IFn$_invoke$arity$2 ? fexpr__49077.cljs$core$IFn$_invoke$arity$2(G__49078,G__49079) : fexpr__49077.call(null,G__49078,G__49079));
})();
var cr48792_place_19 = client;
var cr48792_place_20 = cr48792_place_14;
var cr48792_place_21 = cr48792_place_18;
var cr48792_place_22 = (function (){var G__48848 = cr48792_place_20;
var G__48849 = cr48792_place_21;
var fexpr__48847 = cr48792_place_19;
var G__49081 = G__48848;
var G__49082 = G__48849;
var fexpr__49080 = fexpr__48847;
return (fexpr__49080.cljs$core$IFn$_invoke$arity$2 ? fexpr__49080.cljs$core$IFn$_invoke$arity$2(G__49081,G__49082) : fexpr__49080.call(null,G__49081,G__49082));
})();
(cr48792_state[(0)] = cr48678_place_25);

(cr48792_state[(1)] = null);

return missionary.core.park(cr48792_place_22);
}catch (e49076){var e48843 = e49076;
var cr48792_exception = e48843;
(cr48792_state[(0)] = null);

(cr48792_state[(1)] = null);

(cr48792_state[(2)] = null);

throw cr48792_exception;
}});
var cr48678_place_26 = (function (cr48792_state){
try{var cr48792_place_13 = (cr48792_state[(2)]);
(cr48792_state[(0)] = null);

(cr48792_state[(2)] = null);

return cr48792_place_13;
}catch (e49083){var e48855 = e49083;
var cr48792_exception = e48855;
(cr48792_state[(0)] = null);

(cr48792_state[(2)] = null);

throw cr48792_exception;
}});
var cr48678_place_22 = (function (cr48792_state){
try{var cr48792_place_32 = (cr48792_state[(3)]);
(cr48792_state[(0)] = cr48678_place_26);

(cr48792_state[(3)] = null);

(cr48792_state[(2)] = cr48792_place_32);

return cr48792_state;
}catch (e49084){var e48851 = e49084;
var cr48792_exception = e48851;
(cr48792_state[(0)] = null);

(cr48792_state[(2)] = null);

(cr48792_state[(3)] = null);

throw cr48792_exception;
}});
var cr48678_place_21 = (function (cr48792_state){
try{var cr48792_place_49 = (1);
var cr48792_place_50 = missionary.core.none;
(cr48792_state[(0)] = cr48678_place_24);

return missionary.core.fork(cr48792_place_49,cr48792_place_50);
}catch (e49085){var e48850 = e49085;
var cr48792_exception = e48850;
(cr48792_state[(0)] = null);

(cr48792_state[(2)] = null);

(cr48792_state[(3)] = null);

throw cr48792_exception;
}});
var cr48678_place_35 = cloroutine.impl.coroutine;
var cr48678_place_36 = cljs.core.object_array;
var cr48678_place_37 = (5);
var cr48678_place_38 = (function (){var G__49087 = cr48678_place_37;
var fexpr__49086 = cr48678_place_36;
return (fexpr__49086.cljs$core$IFn$_invoke$arity$1 ? fexpr__49086.cljs$core$IFn$_invoke$arity$1(G__49087) : fexpr__49086.call(null,G__49087));
})();
var cr48678_place_39 = cr48678_place_38;
var cr48678_place_40 = (0);
var cr48678_place_41 = cr48678_place_17;
var cr48678_place_42 = (cr48678_place_39[cr48678_place_40] = cr48678_place_41);
var cr48678_place_43 = cr48678_place_38;
var cr48678_place_44 = (function (){var G__49089 = cr48678_place_43;
var fexpr__49088 = cr48678_place_35;
return (fexpr__49088.cljs$core$IFn$_invoke$arity$1 ? fexpr__49088.cljs$core$IFn$_invoke$arity$1(G__49089) : fexpr__49088.call(null,G__49089));
})();
var cr48678_place_45 = missionary.core.ap_run;
var cr48678_place_46 = (function (){var G__49091 = cr48678_place_44;
var G__49092 = cr48678_place_45;
var fexpr__49090 = cr48678_place_15;
return (fexpr__49090.cljs$core$IFn$_invoke$arity$2 ? fexpr__49090.cljs$core$IFn$_invoke$arity$2(G__49091,G__49092) : fexpr__49090.call(null,G__49091,G__49092));
})();
var cr48678_place_47 = conn;
var cr48678_place_48 = cr48678_place_14;
var cr48678_place_49 = cr48678_place_46;
var cr48678_place_50 = (function (){var G__49094 = cr48678_place_48;
var G__49095 = cr48678_place_49;
var fexpr__49093 = cr48678_place_47;
return (fexpr__49093.cljs$core$IFn$_invoke$arity$2 ? fexpr__49093.cljs$core$IFn$_invoke$arity$2(G__49094,G__49095) : fexpr__49093.call(null,G__49094,G__49095));
})();
(cr48678_state[(0)] = cr48678_block_3);

(cr48678_state[(5)] = null);

return missionary.core.park(cr48678_place_50);
}catch (e49011){var cr48678_exception = e49011;
(cr48678_state[(0)] = cr48678_block_4);

(cr48678_state[(5)] = null);

(cr48678_state[(4)] = cr48678_exception);

return cr48678_state;
}});
var cr48678_block_3 = (function hyperfiddle$electric_client$boot_with_retry_$_cr48678_block_3(cr48678_state){
try{var cr48678_place_51 = missionary.core.unpark();
(cr48678_state[(0)] = cr48678_block_5);

(cr48678_state[(4)] = cr48678_place_51);

return cr48678_state;
}catch (e49096){var cr48678_exception = e49096;
(cr48678_state[(0)] = cr48678_block_4);

(cr48678_state[(4)] = cr48678_exception);

return cr48678_state;
}});
var cr48678_block_7 = (function hyperfiddle$electric_client$boot_with_retry_$_cr48678_block_7(cr48678_state){
try{var cr48678_place_64 = (cr48678_state[(6)]);
var cr48678_place_69 = cr48678_place_64;
var cr48678_place_70 = cr48678_place_69;
var cr48678_place_71 = cr48678_place_70;
var cr48678_place_72 = null;
var G__49098 = cr48678_place_71;
switch (G__49098) {
case (1005):
case (1006):
(cr48678_state[(0)] = cr48678_block_8);

(cr48678_state[(5)] = null);

(cr48678_state[(6)] = null);

(cr48678_state[(5)] = cr48678_place_72);

return cr48678_state;

break;
case (1008):
(cr48678_state[(0)] = cr48678_block_9);

(cr48678_state[(3)] = null);

(cr48678_state[(1)] = null);

(cr48678_state[(2)] = null);

(cr48678_state[(5)] = null);

(cr48678_state[(4)] = null);

(cr48678_state[(6)] = null);

return cr48678_state;

break;
case (1013):
(cr48678_state[(0)] = cr48678_block_10);

(cr48678_state[(5)] = null);

(cr48678_state[(6)] = null);

(cr48678_state[(5)] = cr48678_place_72);

return cr48678_state;

break;
default:
(cr48678_state[(0)] = cr48678_block_11);

(cr48678_state[(3)] = null);

(cr48678_state[(1)] = null);

(cr48678_state[(2)] = null);

(cr48678_state[(4)] = null);

(cr48678_state[(6)] = null);

(cr48678_state[(1)] = cr48678_place_69);

return cr48678_state;

}
}catch (e49097){var cr48678_exception = e49097;
(cr48678_state[(0)] = null);

(cr48678_state[(3)] = null);

(cr48678_state[(1)] = null);

(cr48678_state[(2)] = null);

(cr48678_state[(5)] = null);

(cr48678_state[(4)] = null);

(cr48678_state[(6)] = null);

throw cr48678_exception;
}});
var cr48678_block_9 = (function hyperfiddle$electric_client$boot_with_retry_$_cr48678_block_9(cr48678_state){
try{var cr48678_place_79 = cljs.core.ex_info;
var cr48678_place_80 = "Stale client";
var cr48678_place_81 = new cljs.core.Keyword("hyperfiddle.electric","type","hyperfiddle.electric/type",1565804079);
var cr48678_place_82 = new cljs.core.Keyword("hyperfiddle.electric-client","stale-client","hyperfiddle.electric-client/stale-client",-343425405);
var cr48678_place_83 = cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([cr48678_place_81,cr48678_place_82]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr48678_place_84 = (function (){var G__49101 = cr48678_place_80;
var G__49102 = cr48678_place_83;
var fexpr__49100 = cr48678_place_79;
return (fexpr__49100.cljs$core$IFn$_invoke$arity$2 ? fexpr__49100.cljs$core$IFn$_invoke$arity$2(G__49101,G__49102) : fexpr__49100.call(null,G__49101,G__49102));
})();
var cr48678_place_85 = (function(){throw cr48678_place_84})();
(cr48678_state[(0)] = null);

return null;
}catch (e49099){var cr48678_exception = e49099;
(cr48678_state[(0)] = null);

throw cr48678_exception;
}});
var cr48678_block_18 = (function hyperfiddle$electric_client$boot_with_retry_$_cr48678_block_18(cr48678_state){
try{var cr48678_place_136 = missionary.core.unpark();
(cr48678_state[(0)] = cr48678_block_1);

(cr48678_state[(2)] = cr48678_place_136);

return cr48678_state;
}catch (e49103){var cr48678_exception = e49103;
(cr48678_state[(0)] = null);

(cr48678_state[(1)] = null);

(cr48678_state[(2)] = null);

throw cr48678_exception;
}});
var cr48678_block_12 = (function hyperfiddle$electric_client$boot_with_retry_$_cr48678_block_12(cr48678_state){
try{var cr48678_place_72 = (cr48678_state[(5)]);
(cr48678_state[(0)] = cr48678_block_14);

(cr48678_state[(5)] = null);

(cr48678_state[(3)] = cr48678_place_72);

return cr48678_state;
}catch (e49104){var cr48678_exception = e49104;
(cr48678_state[(0)] = null);

(cr48678_state[(5)] = null);

(cr48678_state[(3)] = null);

(cr48678_state[(1)] = null);

(cr48678_state[(2)] = null);

(cr48678_state[(4)] = null);

throw cr48678_exception;
}});
var cr48678_block_13 = (function hyperfiddle$electric_client$boot_with_retry_$_cr48678_block_13(cr48678_state){
try{var cr48678_place_1 = (cr48678_state[(2)]);
var cr48678_place_103 = console;
var cr48678_place_104 = "Failed to connect.";
var cr48678_place_105 = cr48678_place_103.log(cr48678_place_104);
var cr48678_place_106 = cr48678_place_1;
(cr48678_state[(0)] = cr48678_block_14);

(cr48678_state[(3)] = cr48678_place_106);

return cr48678_state;
}catch (e49105){var cr48678_exception = e49105;
(cr48678_state[(0)] = null);

(cr48678_state[(3)] = null);

(cr48678_state[(1)] = null);

(cr48678_state[(2)] = null);

(cr48678_state[(4)] = null);

throw cr48678_exception;
}});
var cr48678_block_8 = (function hyperfiddle$electric_client$boot_with_retry_$_cr48678_block_8(cr48678_state){
try{var cr48678_place_73 = console;
var cr48678_place_74 = "Connection lost.";
var cr48678_place_75 = cr48678_place_73.log(cr48678_place_74);
var cr48678_place_76 = cljs.core.seq;
var cr48678_place_77 = hyperfiddle.electric_client.retry_delays;
var cr48678_place_78 = (function (){var G__49108 = cr48678_place_77;
var fexpr__49107 = cr48678_place_76;
return (fexpr__49107.cljs$core$IFn$_invoke$arity$1 ? fexpr__49107.cljs$core$IFn$_invoke$arity$1(G__49108) : fexpr__49107.call(null,G__49108));
})();
(cr48678_state[(0)] = cr48678_block_12);

(cr48678_state[(5)] = cr48678_place_78);

return cr48678_state;
}catch (e49106){var cr48678_exception = e49106;
(cr48678_state[(0)] = null);

(cr48678_state[(5)] = null);

(cr48678_state[(3)] = null);

(cr48678_state[(1)] = null);

(cr48678_state[(2)] = null);

(cr48678_state[(4)] = null);

throw cr48678_exception;
}});
var cr48678_block_15 = (function hyperfiddle$electric_client$boot_with_retry_$_cr48678_block_15(cr48678_state){
try{var cr48678_place_107 = null;
(cr48678_state[(0)] = cr48678_block_16);

(cr48678_state[(4)] = cr48678_place_107);

return cr48678_state;
}catch (e49109){var cr48678_exception = e49109;
(cr48678_state[(0)] = null);

(cr48678_state[(1)] = null);

(cr48678_state[(2)] = null);

(cr48678_state[(4)] = null);

throw cr48678_exception;
}});
var cr48678_block_17 = (function hyperfiddle$electric_client$boot_with_retry_$_cr48678_block_17(cr48678_state){
try{var cr48678_place_60 = (cr48678_state[(4)]);
var cr48678_place_112 = cr48678_place_60;
var cr48678_place_113 = cljs.core.seq;
var cr48678_place_114 = cr48678_place_112;
var cr48678_place_115 = (function (){var G__49112 = cr48678_place_114;
var fexpr__49111 = cr48678_place_113;
return (fexpr__49111.cljs$core$IFn$_invoke$arity$1 ? fexpr__49111.cljs$core$IFn$_invoke$arity$1(G__49112) : fexpr__49111.call(null,G__49112));
})();
var cr48678_place_116 = cljs.core.first;
var cr48678_place_117 = cr48678_place_115;
var cr48678_place_118 = (function (){var G__49114 = cr48678_place_117;
var fexpr__49113 = cr48678_place_116;
return (fexpr__49113.cljs$core$IFn$_invoke$arity$1 ? fexpr__49113.cljs$core$IFn$_invoke$arity$1(G__49114) : fexpr__49113.call(null,G__49114));
})();
var cr48678_place_119 = cljs.core.next;
var cr48678_place_120 = cr48678_place_115;
var cr48678_place_121 = (function (){var G__49116 = cr48678_place_120;
var fexpr__49115 = cr48678_place_119;
return (fexpr__49115.cljs$core$IFn$_invoke$arity$1 ? fexpr__49115.cljs$core$IFn$_invoke$arity$1(G__49116) : fexpr__49115.call(null,G__49116));
})();
var cr48678_place_122 = cr48678_place_118;
var cr48678_place_123 = cr48678_place_121;
var cr48678_place_124 = console;
var cr48678_place_125 = "Next attempt in ";
var cr48678_place_126 = cr48678_place_122;
var cr48678_place_127 = (1000);
var cr48678_place_128 = (cr48678_place_126 / cr48678_place_127);
var cr48678_place_129 = " seconds.";
var cr48678_place_130 = [cr48678_place_125,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr48678_place_128),cr48678_place_129].join('');
var cr48678_place_131 = cr48678_place_124.log(cr48678_place_130);
var cr48678_place_132 = missionary.core.sleep;
var cr48678_place_133 = cr48678_place_122;
var cr48678_place_134 = cr48678_place_123;
var cr48678_place_135 = (function (){var G__49118 = cr48678_place_133;
var G__49119 = cr48678_place_134;
var fexpr__49117 = cr48678_place_132;
return (fexpr__49117.cljs$core$IFn$_invoke$arity$2 ? fexpr__49117.cljs$core$IFn$_invoke$arity$2(G__49118,G__49119) : fexpr__49117.call(null,G__49118,G__49119));
})();
(cr48678_state[(0)] = cr48678_block_18);

(cr48678_state[(4)] = null);

return missionary.core.park(cr48678_place_135);
}catch (e49110){var cr48678_exception = e49110;
(cr48678_state[(0)] = null);

(cr48678_state[(1)] = null);

(cr48678_state[(2)] = null);

(cr48678_state[(4)] = null);

throw cr48678_exception;
}});
var cr48678_block_14 = (function hyperfiddle$electric_client$boot_with_retry_$_cr48678_block_14(cr48678_state){
try{var cr48678_place_68 = (cr48678_state[(3)]);
(cr48678_state[(0)] = cr48678_block_16);

(cr48678_state[(3)] = null);

(cr48678_state[(4)] = cr48678_place_68);

return cr48678_state;
}catch (e49120){var cr48678_exception = e49120;
(cr48678_state[(0)] = null);

(cr48678_state[(3)] = null);

(cr48678_state[(1)] = null);

(cr48678_state[(2)] = null);

(cr48678_state[(4)] = null);

throw cr48678_exception;
}});
var cr48678_block_5 = (function hyperfiddle$electric_client$boot_with_retry_$_cr48678_block_5(cr48678_state){
try{var cr48678_place_13 = (cr48678_state[(3)]);
var cr48678_place_12 = (cr48678_state[(4)]);
var cr48678_place_8 = (cr48678_state[(6)]);
var cr48678_place_54 = cr48678_place_8;
var cr48678_place_55 = (hyperfiddle.electric_client._STAR_ws_server_url_STAR_ = cr48678_place_54);
var cr48678_place_56 = (cljs.core.truth_(cr48678_place_13)?(function(){throw cr48678_place_12})():cr48678_place_12);
var cr48678_place_57 = cr48678_place_56;
var cr48678_place_58 = null;
var cr48678_place_59 = (cr48678_place_57 == cr48678_place_58);
var cr48678_place_60 = null;
if(cr48678_place_59){
(cr48678_state[(0)] = cr48678_block_15);

(cr48678_state[(3)] = null);

(cr48678_state[(4)] = null);

(cr48678_state[(6)] = null);

(cr48678_state[(4)] = cr48678_place_60);

return cr48678_state;
} else {
(cr48678_state[(0)] = cr48678_block_6);

(cr48678_state[(3)] = null);

(cr48678_state[(4)] = null);

(cr48678_state[(6)] = null);

(cr48678_state[(3)] = cr48678_place_56);

(cr48678_state[(4)] = cr48678_place_60);

return cr48678_state;
}
}catch (e49121){var cr48678_exception = e49121;
(cr48678_state[(0)] = null);

(cr48678_state[(3)] = null);

(cr48678_state[(1)] = null);

(cr48678_state[(2)] = null);

(cr48678_state[(4)] = null);

(cr48678_state[(6)] = null);

throw cr48678_exception;
}});
var cr48678_block_19 = (function hyperfiddle$electric_client$boot_with_retry_$_cr48678_block_19(cr48678_state){
try{var cr48678_place_137 = null;
(cr48678_state[(0)] = cr48678_block_20);

(cr48678_state[(1)] = cr48678_place_137);

return cr48678_state;
}catch (e49122){var cr48678_exception = e49122;
(cr48678_state[(0)] = null);

(cr48678_state[(1)] = null);

throw cr48678_exception;
}});
var cr48678_block_11 = (function hyperfiddle$electric_client$boot_with_retry_$_cr48678_block_11(cr48678_state){
try{var cr48678_place_69 = (cr48678_state[(1)]);
var cr48678_place_61 = (cr48678_state[(5)]);
var cr48678_place_92 = cljs.core.ex_info;
var cr48678_place_93 = "Remote error - ";
var cr48678_place_94 = cr48678_place_69;
var cr48678_place_95 = " ";
var cr48678_place_96 = new cljs.core.Keyword(null,"reason","reason",-2070751759);
var cr48678_place_97 = cr48678_place_61;
var cr48678_place_98 = cr48678_place_96.cljs$core$IFn$_invoke$arity$1(cr48678_place_97);
var cr48678_place_99 = [cr48678_place_93,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr48678_place_94),cr48678_place_95,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr48678_place_98)].join('');
var cr48678_place_100 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr48678_place_101 = (function (){var G__49125 = cr48678_place_99;
var G__49126 = cr48678_place_100;
var fexpr__49124 = cr48678_place_92;
return (fexpr__49124.cljs$core$IFn$_invoke$arity$2 ? fexpr__49124.cljs$core$IFn$_invoke$arity$2(G__49125,G__49126) : fexpr__49124.call(null,G__49125,G__49126));
})();
var cr48678_place_102 = (function(){throw cr48678_place_101})();
(cr48678_state[(0)] = null);

(cr48678_state[(1)] = null);

(cr48678_state[(5)] = null);

return null;
}catch (e49123){var cr48678_exception = e49123;
(cr48678_state[(0)] = null);

(cr48678_state[(1)] = null);

(cr48678_state[(5)] = null);

throw cr48678_exception;
}});
var cr48678_block_0 = (function hyperfiddle$electric_client$boot_with_retry_$_cr48678_block_0(cr48678_state){
try{var cr48678_place_0 = hyperfiddle.electric_client._STAR_ws_server_url_STAR_;
var cr48678_place_1 = hyperfiddle.electric_client.retry_delays;
(cr48678_state[(0)] = cr48678_block_1);

(cr48678_state[(1)] = cr48678_place_0);

(cr48678_state[(2)] = cr48678_place_1);

return cr48678_state;
}catch (e49127){var cr48678_exception = e49127;
(cr48678_state[(0)] = null);

throw cr48678_exception;
}});
return cloroutine.impl.coroutine((function (){var G__49128 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((7));
(G__49128[(0)] = cr48678_block_0);

return G__49128;
})());
})(),missionary.core.sp_run);
});
hyperfiddle.electric_client.reload_when_stale = (function hyperfiddle$electric_client$reload_when_stale(task){
return (function (s,f){
var G__49129 = s;
var G__49130 = (function (error){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hyperfiddle.electric-client","stale-client","hyperfiddle.electric-client/stale-client",-343425405),new cljs.core.Keyword("hyperfiddle.electric","type","hyperfiddle.electric/type",1565804079).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(error)))){
console.log("Server and client version mismatch. Refreshing page.");

window.location.reload();
} else {
}

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(error) : f.call(null,error));
});
return (task.cljs$core$IFn$_invoke$arity$2 ? task.cljs$core$IFn$_invoke$arity$2(G__49129,G__49130) : task.call(null,G__49129,G__49130));
});
});

//# sourceMappingURL=hyperfiddle.electric_client.js.map
