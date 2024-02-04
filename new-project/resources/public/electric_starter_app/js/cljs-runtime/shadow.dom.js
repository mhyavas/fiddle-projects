goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_40859 = (function (this$){
var x__5346__auto__ = (((this$ == null))?null:this$);
var m__5347__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5347__auto__.call(null,this$));
} else {
var m__5345__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5345__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_40859(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_40860 = (function (this$){
var x__5346__auto__ = (((this$ == null))?null:this$);
var m__5347__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5346__auto__)]);
if((!((m__5347__auto__ == null)))){
return (m__5347__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5347__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5347__auto__.call(null,this$));
} else {
var m__5345__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5345__auto__ == null)))){
return (m__5345__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5345__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5345__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_40860(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__39753 = coll;
var G__39754 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__39753,G__39754) : shadow.dom.lazy_native_coll_seq.call(null,G__39753,G__39754));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4998__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5283__auto__,writer__5284__auto__,opt__5285__auto__){
return cljs.core._write(writer__5284__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__39788 = arguments.length;
switch (G__39788) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__39809 = arguments.length;
switch (G__39809) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__39889 = arguments.length;
switch (G__39889) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__39914 = arguments.length;
switch (G__39914) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__39938 = arguments.length;
switch (G__39938) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__39967 = arguments.length;
switch (G__39967) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4998__auto__ = (!((typeof document !== 'undefined')));
if(or__4998__auto__){
return or__4998__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e39985){if((e39985 instanceof Object)){
var e = e39985;
return console.log("didnt support attachEvent",el,e);
} else {
throw e39985;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4998__auto__ = (!((typeof document !== 'undefined')));
if(or__4998__auto__){
return or__4998__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__39994 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__39995 = null;
var count__39996 = (0);
var i__39997 = (0);
while(true){
if((i__39997 < count__39996)){
var el = chunk__39995.cljs$core$IIndexed$_nth$arity$2(null,i__39997);
var handler_40906__$1 = ((function (seq__39994,chunk__39995,count__39996,i__39997,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__39994,chunk__39995,count__39996,i__39997,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_40906__$1);


var G__40907 = seq__39994;
var G__40908 = chunk__39995;
var G__40909 = count__39996;
var G__40910 = (i__39997 + (1));
seq__39994 = G__40907;
chunk__39995 = G__40908;
count__39996 = G__40909;
i__39997 = G__40910;
continue;
} else {
var temp__5816__auto__ = cljs.core.seq(seq__39994);
if(temp__5816__auto__){
var seq__39994__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39994__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__39994__$1);
var G__40911 = cljs.core.chunk_rest(seq__39994__$1);
var G__40912 = c__5521__auto__;
var G__40913 = cljs.core.count(c__5521__auto__);
var G__40914 = (0);
seq__39994 = G__40911;
chunk__39995 = G__40912;
count__39996 = G__40913;
i__39997 = G__40914;
continue;
} else {
var el = cljs.core.first(seq__39994__$1);
var handler_40915__$1 = ((function (seq__39994,chunk__39995,count__39996,i__39997,el,seq__39994__$1,temp__5816__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__39994,chunk__39995,count__39996,i__39997,el,seq__39994__$1,temp__5816__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_40915__$1);


var G__40916 = cljs.core.next(seq__39994__$1);
var G__40917 = null;
var G__40918 = (0);
var G__40919 = (0);
seq__39994 = G__40916;
chunk__39995 = G__40917;
count__39996 = G__40918;
i__39997 = G__40919;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__40035 = arguments.length;
switch (G__40035) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__40068 = cljs.core.seq(events);
var chunk__40070 = null;
var count__40071 = (0);
var i__40073 = (0);
while(true){
if((i__40073 < count__40071)){
var vec__40104 = chunk__40070.cljs$core$IIndexed$_nth$arity$2(null,i__40073);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40104,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40104,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__40921 = seq__40068;
var G__40922 = chunk__40070;
var G__40923 = count__40071;
var G__40924 = (i__40073 + (1));
seq__40068 = G__40921;
chunk__40070 = G__40922;
count__40071 = G__40923;
i__40073 = G__40924;
continue;
} else {
var temp__5816__auto__ = cljs.core.seq(seq__40068);
if(temp__5816__auto__){
var seq__40068__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40068__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__40068__$1);
var G__40925 = cljs.core.chunk_rest(seq__40068__$1);
var G__40926 = c__5521__auto__;
var G__40927 = cljs.core.count(c__5521__auto__);
var G__40928 = (0);
seq__40068 = G__40925;
chunk__40070 = G__40926;
count__40071 = G__40927;
i__40073 = G__40928;
continue;
} else {
var vec__40138 = cljs.core.first(seq__40068__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40138,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40138,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__40929 = cljs.core.next(seq__40068__$1);
var G__40930 = null;
var G__40931 = (0);
var G__40932 = (0);
seq__40068 = G__40929;
chunk__40070 = G__40930;
count__40071 = G__40931;
i__40073 = G__40932;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__40146 = cljs.core.seq(styles);
var chunk__40147 = null;
var count__40148 = (0);
var i__40149 = (0);
while(true){
if((i__40149 < count__40148)){
var vec__40163 = chunk__40147.cljs$core$IIndexed$_nth$arity$2(null,i__40149);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40163,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40163,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__40933 = seq__40146;
var G__40934 = chunk__40147;
var G__40935 = count__40148;
var G__40936 = (i__40149 + (1));
seq__40146 = G__40933;
chunk__40147 = G__40934;
count__40148 = G__40935;
i__40149 = G__40936;
continue;
} else {
var temp__5816__auto__ = cljs.core.seq(seq__40146);
if(temp__5816__auto__){
var seq__40146__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40146__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__40146__$1);
var G__40937 = cljs.core.chunk_rest(seq__40146__$1);
var G__40938 = c__5521__auto__;
var G__40939 = cljs.core.count(c__5521__auto__);
var G__40940 = (0);
seq__40146 = G__40937;
chunk__40147 = G__40938;
count__40148 = G__40939;
i__40149 = G__40940;
continue;
} else {
var vec__40167 = cljs.core.first(seq__40146__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40167,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40167,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__40941 = cljs.core.next(seq__40146__$1);
var G__40942 = null;
var G__40943 = (0);
var G__40944 = (0);
seq__40146 = G__40941;
chunk__40147 = G__40942;
count__40148 = G__40943;
i__40149 = G__40944;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__40175_40945 = key;
var G__40175_40946__$1 = (((G__40175_40945 instanceof cljs.core.Keyword))?G__40175_40945.fqn:null);
switch (G__40175_40946__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_40948 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4998__auto__ = goog.string.startsWith(ks_40948,"data-");
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return goog.string.startsWith(ks_40948,"aria-");
}
})())){
el.setAttribute(ks_40948,value);
} else {
(el[ks_40948] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__40305){
var map__40307 = p__40305;
var map__40307__$1 = cljs.core.__destructure_map(map__40307);
var props = map__40307__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40307__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__40317 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40317,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40317,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40317,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__40326 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__40326,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__40326;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__40329 = arguments.length;
switch (G__40329) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5816__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5816__auto__)){
var n = temp__5816__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5816__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5816__auto__)){
var n = temp__5816__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__40359){
var vec__40360 = p__40359;
var seq__40361 = cljs.core.seq(vec__40360);
var first__40362 = cljs.core.first(seq__40361);
var seq__40361__$1 = cljs.core.next(seq__40361);
var nn = first__40362;
var first__40362__$1 = cljs.core.first(seq__40361__$1);
var seq__40361__$2 = cljs.core.next(seq__40361__$1);
var np = first__40362__$1;
var nc = seq__40361__$2;
var node = vec__40360;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__40363 = nn;
var G__40364 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__40363,G__40364) : create_fn.call(null,G__40363,G__40364));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__40366 = nn;
var G__40367 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__40366,G__40367) : create_fn.call(null,G__40366,G__40367));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__40369 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40369,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40369,(1),null);
var seq__40374_40955 = cljs.core.seq(node_children);
var chunk__40375_40956 = null;
var count__40376_40957 = (0);
var i__40377_40958 = (0);
while(true){
if((i__40377_40958 < count__40376_40957)){
var child_struct_40960 = chunk__40375_40956.cljs$core$IIndexed$_nth$arity$2(null,i__40377_40958);
var children_40962 = shadow.dom.dom_node(child_struct_40960);
if(cljs.core.seq_QMARK_(children_40962)){
var seq__40452_40963 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_40962));
var chunk__40454_40964 = null;
var count__40455_40965 = (0);
var i__40456_40966 = (0);
while(true){
if((i__40456_40966 < count__40455_40965)){
var child_40967 = chunk__40454_40964.cljs$core$IIndexed$_nth$arity$2(null,i__40456_40966);
if(cljs.core.truth_(child_40967)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40967);


var G__40968 = seq__40452_40963;
var G__40969 = chunk__40454_40964;
var G__40970 = count__40455_40965;
var G__40971 = (i__40456_40966 + (1));
seq__40452_40963 = G__40968;
chunk__40454_40964 = G__40969;
count__40455_40965 = G__40970;
i__40456_40966 = G__40971;
continue;
} else {
var G__40972 = seq__40452_40963;
var G__40973 = chunk__40454_40964;
var G__40974 = count__40455_40965;
var G__40975 = (i__40456_40966 + (1));
seq__40452_40963 = G__40972;
chunk__40454_40964 = G__40973;
count__40455_40965 = G__40974;
i__40456_40966 = G__40975;
continue;
}
} else {
var temp__5816__auto___40976 = cljs.core.seq(seq__40452_40963);
if(temp__5816__auto___40976){
var seq__40452_40977__$1 = temp__5816__auto___40976;
if(cljs.core.chunked_seq_QMARK_(seq__40452_40977__$1)){
var c__5521__auto___40978 = cljs.core.chunk_first(seq__40452_40977__$1);
var G__40979 = cljs.core.chunk_rest(seq__40452_40977__$1);
var G__40980 = c__5521__auto___40978;
var G__40981 = cljs.core.count(c__5521__auto___40978);
var G__40982 = (0);
seq__40452_40963 = G__40979;
chunk__40454_40964 = G__40980;
count__40455_40965 = G__40981;
i__40456_40966 = G__40982;
continue;
} else {
var child_40983 = cljs.core.first(seq__40452_40977__$1);
if(cljs.core.truth_(child_40983)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40983);


var G__40984 = cljs.core.next(seq__40452_40977__$1);
var G__40985 = null;
var G__40986 = (0);
var G__40987 = (0);
seq__40452_40963 = G__40984;
chunk__40454_40964 = G__40985;
count__40455_40965 = G__40986;
i__40456_40966 = G__40987;
continue;
} else {
var G__40988 = cljs.core.next(seq__40452_40977__$1);
var G__40989 = null;
var G__40990 = (0);
var G__40991 = (0);
seq__40452_40963 = G__40988;
chunk__40454_40964 = G__40989;
count__40455_40965 = G__40990;
i__40456_40966 = G__40991;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_40962);
}


var G__40992 = seq__40374_40955;
var G__40993 = chunk__40375_40956;
var G__40994 = count__40376_40957;
var G__40995 = (i__40377_40958 + (1));
seq__40374_40955 = G__40992;
chunk__40375_40956 = G__40993;
count__40376_40957 = G__40994;
i__40377_40958 = G__40995;
continue;
} else {
var temp__5816__auto___40996 = cljs.core.seq(seq__40374_40955);
if(temp__5816__auto___40996){
var seq__40374_40997__$1 = temp__5816__auto___40996;
if(cljs.core.chunked_seq_QMARK_(seq__40374_40997__$1)){
var c__5521__auto___40998 = cljs.core.chunk_first(seq__40374_40997__$1);
var G__40999 = cljs.core.chunk_rest(seq__40374_40997__$1);
var G__41000 = c__5521__auto___40998;
var G__41001 = cljs.core.count(c__5521__auto___40998);
var G__41002 = (0);
seq__40374_40955 = G__40999;
chunk__40375_40956 = G__41000;
count__40376_40957 = G__41001;
i__40377_40958 = G__41002;
continue;
} else {
var child_struct_41003 = cljs.core.first(seq__40374_40997__$1);
var children_41004 = shadow.dom.dom_node(child_struct_41003);
if(cljs.core.seq_QMARK_(children_41004)){
var seq__40470_41005 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_41004));
var chunk__40472_41006 = null;
var count__40473_41007 = (0);
var i__40474_41008 = (0);
while(true){
if((i__40474_41008 < count__40473_41007)){
var child_41009 = chunk__40472_41006.cljs$core$IIndexed$_nth$arity$2(null,i__40474_41008);
if(cljs.core.truth_(child_41009)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_41009);


var G__41017 = seq__40470_41005;
var G__41018 = chunk__40472_41006;
var G__41019 = count__40473_41007;
var G__41020 = (i__40474_41008 + (1));
seq__40470_41005 = G__41017;
chunk__40472_41006 = G__41018;
count__40473_41007 = G__41019;
i__40474_41008 = G__41020;
continue;
} else {
var G__41021 = seq__40470_41005;
var G__41022 = chunk__40472_41006;
var G__41023 = count__40473_41007;
var G__41024 = (i__40474_41008 + (1));
seq__40470_41005 = G__41021;
chunk__40472_41006 = G__41022;
count__40473_41007 = G__41023;
i__40474_41008 = G__41024;
continue;
}
} else {
var temp__5816__auto___41025__$1 = cljs.core.seq(seq__40470_41005);
if(temp__5816__auto___41025__$1){
var seq__40470_41026__$1 = temp__5816__auto___41025__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40470_41026__$1)){
var c__5521__auto___41027 = cljs.core.chunk_first(seq__40470_41026__$1);
var G__41028 = cljs.core.chunk_rest(seq__40470_41026__$1);
var G__41029 = c__5521__auto___41027;
var G__41030 = cljs.core.count(c__5521__auto___41027);
var G__41031 = (0);
seq__40470_41005 = G__41028;
chunk__40472_41006 = G__41029;
count__40473_41007 = G__41030;
i__40474_41008 = G__41031;
continue;
} else {
var child_41032 = cljs.core.first(seq__40470_41026__$1);
if(cljs.core.truth_(child_41032)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_41032);


var G__41033 = cljs.core.next(seq__40470_41026__$1);
var G__41034 = null;
var G__41035 = (0);
var G__41036 = (0);
seq__40470_41005 = G__41033;
chunk__40472_41006 = G__41034;
count__40473_41007 = G__41035;
i__40474_41008 = G__41036;
continue;
} else {
var G__41037 = cljs.core.next(seq__40470_41026__$1);
var G__41038 = null;
var G__41039 = (0);
var G__41040 = (0);
seq__40470_41005 = G__41037;
chunk__40472_41006 = G__41038;
count__40473_41007 = G__41039;
i__40474_41008 = G__41040;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_41004);
}


var G__41042 = cljs.core.next(seq__40374_40997__$1);
var G__41043 = null;
var G__41044 = (0);
var G__41045 = (0);
seq__40374_40955 = G__41042;
chunk__40375_40956 = G__41043;
count__40376_40957 = G__41044;
i__40377_40958 = G__41045;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__40483 = cljs.core.seq(node);
var chunk__40484 = null;
var count__40485 = (0);
var i__40486 = (0);
while(true){
if((i__40486 < count__40485)){
var n = chunk__40484.cljs$core$IIndexed$_nth$arity$2(null,i__40486);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__41046 = seq__40483;
var G__41047 = chunk__40484;
var G__41048 = count__40485;
var G__41049 = (i__40486 + (1));
seq__40483 = G__41046;
chunk__40484 = G__41047;
count__40485 = G__41048;
i__40486 = G__41049;
continue;
} else {
var temp__5816__auto__ = cljs.core.seq(seq__40483);
if(temp__5816__auto__){
var seq__40483__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40483__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__40483__$1);
var G__41050 = cljs.core.chunk_rest(seq__40483__$1);
var G__41051 = c__5521__auto__;
var G__41052 = cljs.core.count(c__5521__auto__);
var G__41053 = (0);
seq__40483 = G__41050;
chunk__40484 = G__41051;
count__40485 = G__41052;
i__40486 = G__41053;
continue;
} else {
var n = cljs.core.first(seq__40483__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__41063 = cljs.core.next(seq__40483__$1);
var G__41064 = null;
var G__41065 = (0);
var G__41066 = (0);
seq__40483 = G__41063;
chunk__40484 = G__41064;
count__40485 = G__41065;
i__40486 = G__41066;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__40519 = arguments.length;
switch (G__40519) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__40522 = arguments.length;
switch (G__40522) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__40531 = arguments.length;
switch (G__40531) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4998__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4998__auto__)){
return or__4998__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5728__auto__ = [];
var len__5722__auto___41090 = arguments.length;
var i__5723__auto___41091 = (0);
while(true){
if((i__5723__auto___41091 < len__5722__auto___41090)){
args__5728__auto__.push((arguments[i__5723__auto___41091]));

var G__41092 = (i__5723__auto___41091 + (1));
i__5723__auto___41091 = G__41092;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((0) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5729__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__40578_41093 = cljs.core.seq(nodes);
var chunk__40579_41094 = null;
var count__40580_41095 = (0);
var i__40581_41096 = (0);
while(true){
if((i__40581_41096 < count__40580_41095)){
var node_41098 = chunk__40579_41094.cljs$core$IIndexed$_nth$arity$2(null,i__40581_41096);
fragment.appendChild(shadow.dom._to_dom(node_41098));


var G__41099 = seq__40578_41093;
var G__41100 = chunk__40579_41094;
var G__41101 = count__40580_41095;
var G__41102 = (i__40581_41096 + (1));
seq__40578_41093 = G__41099;
chunk__40579_41094 = G__41100;
count__40580_41095 = G__41101;
i__40581_41096 = G__41102;
continue;
} else {
var temp__5816__auto___41103 = cljs.core.seq(seq__40578_41093);
if(temp__5816__auto___41103){
var seq__40578_41104__$1 = temp__5816__auto___41103;
if(cljs.core.chunked_seq_QMARK_(seq__40578_41104__$1)){
var c__5521__auto___41105 = cljs.core.chunk_first(seq__40578_41104__$1);
var G__41106 = cljs.core.chunk_rest(seq__40578_41104__$1);
var G__41107 = c__5521__auto___41105;
var G__41108 = cljs.core.count(c__5521__auto___41105);
var G__41109 = (0);
seq__40578_41093 = G__41106;
chunk__40579_41094 = G__41107;
count__40580_41095 = G__41108;
i__40581_41096 = G__41109;
continue;
} else {
var node_41111 = cljs.core.first(seq__40578_41104__$1);
fragment.appendChild(shadow.dom._to_dom(node_41111));


var G__41112 = cljs.core.next(seq__40578_41104__$1);
var G__41113 = null;
var G__41114 = (0);
var G__41115 = (0);
seq__40578_41093 = G__41112;
chunk__40579_41094 = G__41113;
count__40580_41095 = G__41114;
i__40581_41096 = G__41115;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq40555){
var self__5708__auto__ = this;
return self__5708__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40555));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__40582_41116 = cljs.core.seq(scripts);
var chunk__40583_41117 = null;
var count__40584_41118 = (0);
var i__40585_41119 = (0);
while(true){
if((i__40585_41119 < count__40584_41118)){
var vec__40592_41120 = chunk__40583_41117.cljs$core$IIndexed$_nth$arity$2(null,i__40585_41119);
var script_tag_41121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40592_41120,(0),null);
var script_body_41122 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40592_41120,(1),null);
eval(script_body_41122);


var G__41123 = seq__40582_41116;
var G__41124 = chunk__40583_41117;
var G__41125 = count__40584_41118;
var G__41126 = (i__40585_41119 + (1));
seq__40582_41116 = G__41123;
chunk__40583_41117 = G__41124;
count__40584_41118 = G__41125;
i__40585_41119 = G__41126;
continue;
} else {
var temp__5816__auto___41127 = cljs.core.seq(seq__40582_41116);
if(temp__5816__auto___41127){
var seq__40582_41128__$1 = temp__5816__auto___41127;
if(cljs.core.chunked_seq_QMARK_(seq__40582_41128__$1)){
var c__5521__auto___41130 = cljs.core.chunk_first(seq__40582_41128__$1);
var G__41131 = cljs.core.chunk_rest(seq__40582_41128__$1);
var G__41132 = c__5521__auto___41130;
var G__41133 = cljs.core.count(c__5521__auto___41130);
var G__41134 = (0);
seq__40582_41116 = G__41131;
chunk__40583_41117 = G__41132;
count__40584_41118 = G__41133;
i__40585_41119 = G__41134;
continue;
} else {
var vec__40595_41136 = cljs.core.first(seq__40582_41128__$1);
var script_tag_41137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40595_41136,(0),null);
var script_body_41138 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40595_41136,(1),null);
eval(script_body_41138);


var G__41139 = cljs.core.next(seq__40582_41128__$1);
var G__41140 = null;
var G__41141 = (0);
var G__41142 = (0);
seq__40582_41116 = G__41139;
chunk__40583_41117 = G__41140;
count__40584_41118 = G__41141;
i__40585_41119 = G__41142;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__40598){
var vec__40599 = p__40598;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40599,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40599,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__40606 = arguments.length;
switch (G__40606) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__40610 = cljs.core.seq(style_keys);
var chunk__40611 = null;
var count__40612 = (0);
var i__40613 = (0);
while(true){
if((i__40613 < count__40612)){
var it = chunk__40611.cljs$core$IIndexed$_nth$arity$2(null,i__40613);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__41158 = seq__40610;
var G__41159 = chunk__40611;
var G__41160 = count__40612;
var G__41161 = (i__40613 + (1));
seq__40610 = G__41158;
chunk__40611 = G__41159;
count__40612 = G__41160;
i__40613 = G__41161;
continue;
} else {
var temp__5816__auto__ = cljs.core.seq(seq__40610);
if(temp__5816__auto__){
var seq__40610__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40610__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__40610__$1);
var G__41162 = cljs.core.chunk_rest(seq__40610__$1);
var G__41163 = c__5521__auto__;
var G__41164 = cljs.core.count(c__5521__auto__);
var G__41165 = (0);
seq__40610 = G__41162;
chunk__40611 = G__41163;
count__40612 = G__41164;
i__40613 = G__41165;
continue;
} else {
var it = cljs.core.first(seq__40610__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__41166 = cljs.core.next(seq__40610__$1);
var G__41167 = null;
var G__41168 = (0);
var G__41169 = (0);
seq__40610 = G__41166;
chunk__40611 = G__41167;
count__40612 = G__41168;
i__40613 = G__41169;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5296__auto__,k__5297__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
return this__5296__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5297__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5298__auto__,k40615,else__5299__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
var G__40622 = k40615;
var G__40622__$1 = (((G__40622 instanceof cljs.core.Keyword))?G__40622.fqn:null);
switch (G__40622__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k40615,else__5299__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5316__auto__,f__5317__auto__,init__5318__auto__){
var self__ = this;
var this__5316__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5319__auto__,p__40623){
var vec__40624 = p__40623;
var k__5320__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40624,(0),null);
var v__5321__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40624,(1),null);
return (f__5317__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5317__auto__.cljs$core$IFn$_invoke$arity$3(ret__5319__auto__,k__5320__auto__,v__5321__auto__) : f__5317__auto__.call(null,ret__5319__auto__,k__5320__auto__,v__5321__auto__));
}),init__5318__auto__,this__5316__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5311__auto__,writer__5312__auto__,opts__5313__auto__){
var self__ = this;
var this__5311__auto____$1 = this;
var pr_pair__5314__auto__ = (function (keyval__5315__auto__){
return cljs.core.pr_sequential_writer(writer__5312__auto__,cljs.core.pr_writer,""," ","",opts__5313__auto__,keyval__5315__auto__);
});
return cljs.core.pr_sequential_writer(writer__5312__auto__,pr_pair__5314__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5313__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40614){
var self__ = this;
var G__40614__$1 = this;
return (new cljs.core.RecordIter((0),G__40614__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5294__auto__){
var self__ = this;
var this__5294__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5291__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5300__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5292__auto__){
var self__ = this;
var this__5292__auto____$1 = this;
var h__5107__auto__ = self__.__hash;
if((!((h__5107__auto__ == null)))){
return h__5107__auto__;
} else {
var h__5107__auto____$1 = (function (coll__5293__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5293__auto__));
})(this__5292__auto____$1);
(self__.__hash = h__5107__auto____$1);

return h__5107__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this40616,other40617){
var self__ = this;
var this40616__$1 = this;
return (((!((other40617 == null)))) && ((((this40616__$1.constructor === other40617.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40616__$1.x,other40617.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40616__$1.y,other40617.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40616__$1.__extmap,other40617.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5306__auto__,k__5307__auto__){
var self__ = this;
var this__5306__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5307__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5306__auto____$1),self__.__meta),k__5307__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5307__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5303__auto__,k40615){
var self__ = this;
var this__5303__auto____$1 = this;
var G__40627 = k40615;
var G__40627__$1 = (((G__40627 instanceof cljs.core.Keyword))?G__40627.fqn:null);
switch (G__40627__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k40615);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5304__auto__,k__5305__auto__,G__40614){
var self__ = this;
var this__5304__auto____$1 = this;
var pred__40628 = cljs.core.keyword_identical_QMARK_;
var expr__40629 = k__5305__auto__;
if(cljs.core.truth_((pred__40628.cljs$core$IFn$_invoke$arity$2 ? pred__40628.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__40629) : pred__40628.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__40629)))){
return (new shadow.dom.Coordinate(G__40614,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__40628.cljs$core$IFn$_invoke$arity$2 ? pred__40628.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__40629) : pred__40628.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__40629)))){
return (new shadow.dom.Coordinate(self__.x,G__40614,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5305__auto__,G__40614),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5309__auto__){
var self__ = this;
var this__5309__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5295__auto__,G__40614){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__40614,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5301__auto__,entry__5302__auto__){
var self__ = this;
var this__5301__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5302__auto__)){
return this__5301__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5302__auto__,(0)),cljs.core._nth(entry__5302__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5301__auto____$1,entry__5302__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5342__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5342__auto__,writer__5343__auto__){
return cljs.core._write(writer__5343__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__40618){
var extmap__5338__auto__ = (function (){var G__40631 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__40618,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__40618)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__40631);
} else {
return G__40631;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__40618),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__40618),null,cljs.core.not_empty(extmap__5338__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5296__auto__,k__5297__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
return this__5296__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5297__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5298__auto__,k40633,else__5299__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
var G__40637 = k40633;
var G__40637__$1 = (((G__40637 instanceof cljs.core.Keyword))?G__40637.fqn:null);
switch (G__40637__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k40633,else__5299__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5316__auto__,f__5317__auto__,init__5318__auto__){
var self__ = this;
var this__5316__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5319__auto__,p__40638){
var vec__40639 = p__40638;
var k__5320__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40639,(0),null);
var v__5321__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40639,(1),null);
return (f__5317__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5317__auto__.cljs$core$IFn$_invoke$arity$3(ret__5319__auto__,k__5320__auto__,v__5321__auto__) : f__5317__auto__.call(null,ret__5319__auto__,k__5320__auto__,v__5321__auto__));
}),init__5318__auto__,this__5316__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5311__auto__,writer__5312__auto__,opts__5313__auto__){
var self__ = this;
var this__5311__auto____$1 = this;
var pr_pair__5314__auto__ = (function (keyval__5315__auto__){
return cljs.core.pr_sequential_writer(writer__5312__auto__,cljs.core.pr_writer,""," ","",opts__5313__auto__,keyval__5315__auto__);
});
return cljs.core.pr_sequential_writer(writer__5312__auto__,pr_pair__5314__auto__,"#shadow.dom.Size{",", ","}",opts__5313__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40632){
var self__ = this;
var G__40632__$1 = this;
return (new cljs.core.RecordIter((0),G__40632__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5294__auto__){
var self__ = this;
var this__5294__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5291__auto__){
var self__ = this;
var this__5291__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5300__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5292__auto__){
var self__ = this;
var this__5292__auto____$1 = this;
var h__5107__auto__ = self__.__hash;
if((!((h__5107__auto__ == null)))){
return h__5107__auto__;
} else {
var h__5107__auto____$1 = (function (coll__5293__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5293__auto__));
})(this__5292__auto____$1);
(self__.__hash = h__5107__auto____$1);

return h__5107__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this40634,other40635){
var self__ = this;
var this40634__$1 = this;
return (((!((other40635 == null)))) && ((((this40634__$1.constructor === other40635.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40634__$1.w,other40635.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40634__$1.h,other40635.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40634__$1.__extmap,other40635.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5306__auto__,k__5307__auto__){
var self__ = this;
var this__5306__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5307__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5306__auto____$1),self__.__meta),k__5307__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5307__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5303__auto__,k40633){
var self__ = this;
var this__5303__auto____$1 = this;
var G__40642 = k40633;
var G__40642__$1 = (((G__40642 instanceof cljs.core.Keyword))?G__40642.fqn:null);
switch (G__40642__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k40633);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5304__auto__,k__5305__auto__,G__40632){
var self__ = this;
var this__5304__auto____$1 = this;
var pred__40643 = cljs.core.keyword_identical_QMARK_;
var expr__40644 = k__5305__auto__;
if(cljs.core.truth_((pred__40643.cljs$core$IFn$_invoke$arity$2 ? pred__40643.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__40644) : pred__40643.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__40644)))){
return (new shadow.dom.Size(G__40632,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__40643.cljs$core$IFn$_invoke$arity$2 ? pred__40643.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__40644) : pred__40643.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__40644)))){
return (new shadow.dom.Size(self__.w,G__40632,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5305__auto__,G__40632),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5309__auto__){
var self__ = this;
var this__5309__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5295__auto__,G__40632){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__40632,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5301__auto__,entry__5302__auto__){
var self__ = this;
var this__5301__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5302__auto__)){
return this__5301__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5302__auto__,(0)),cljs.core._nth(entry__5302__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5301__auto____$1,entry__5302__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5342__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5342__auto__,writer__5343__auto__){
return cljs.core._write(writer__5343__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__40636){
var extmap__5338__auto__ = (function (){var G__40666 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__40636,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__40636)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__40666);
} else {
return G__40666;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__40636),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__40636),null,cljs.core.not_empty(extmap__5338__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5586__auto__ = opts;
var l__5587__auto__ = a__5586__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5587__auto__)){
var G__41230 = (i + (1));
var G__41231 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__41230;
ret = G__41231;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__40677){
var vec__40678 = p__40677;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40678,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40678,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__40682 = arguments.length;
switch (G__40682) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5814__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5814__auto__)){
var child = temp__5814__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__41246 = ps;
var G__41247 = (i + (1));
el__$1 = G__41246;
i = G__41247;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__40719 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40719,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40719,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40719,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__40722_41257 = cljs.core.seq(props);
var chunk__40723_41258 = null;
var count__40724_41259 = (0);
var i__40725_41260 = (0);
while(true){
if((i__40725_41260 < count__40724_41259)){
var vec__40754_41261 = chunk__40723_41258.cljs$core$IIndexed$_nth$arity$2(null,i__40725_41260);
var k_41262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40754_41261,(0),null);
var v_41263 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40754_41261,(1),null);
el.setAttributeNS((function (){var temp__5816__auto__ = cljs.core.namespace(k_41262);
if(cljs.core.truth_(temp__5816__auto__)){
var ns = temp__5816__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_41262),v_41263);


var G__41268 = seq__40722_41257;
var G__41269 = chunk__40723_41258;
var G__41270 = count__40724_41259;
var G__41271 = (i__40725_41260 + (1));
seq__40722_41257 = G__41268;
chunk__40723_41258 = G__41269;
count__40724_41259 = G__41270;
i__40725_41260 = G__41271;
continue;
} else {
var temp__5816__auto___41272 = cljs.core.seq(seq__40722_41257);
if(temp__5816__auto___41272){
var seq__40722_41273__$1 = temp__5816__auto___41272;
if(cljs.core.chunked_seq_QMARK_(seq__40722_41273__$1)){
var c__5521__auto___41274 = cljs.core.chunk_first(seq__40722_41273__$1);
var G__41275 = cljs.core.chunk_rest(seq__40722_41273__$1);
var G__41276 = c__5521__auto___41274;
var G__41277 = cljs.core.count(c__5521__auto___41274);
var G__41278 = (0);
seq__40722_41257 = G__41275;
chunk__40723_41258 = G__41276;
count__40724_41259 = G__41277;
i__40725_41260 = G__41278;
continue;
} else {
var vec__40757_41279 = cljs.core.first(seq__40722_41273__$1);
var k_41280 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40757_41279,(0),null);
var v_41281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40757_41279,(1),null);
el.setAttributeNS((function (){var temp__5816__auto____$1 = cljs.core.namespace(k_41280);
if(cljs.core.truth_(temp__5816__auto____$1)){
var ns = temp__5816__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_41280),v_41281);


var G__41282 = cljs.core.next(seq__40722_41273__$1);
var G__41283 = null;
var G__41284 = (0);
var G__41285 = (0);
seq__40722_41257 = G__41282;
chunk__40723_41258 = G__41283;
count__40724_41259 = G__41284;
i__40725_41260 = G__41285;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__40761 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40761,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40761,(1),null);
var seq__40764_41286 = cljs.core.seq(node_children);
var chunk__40766_41287 = null;
var count__40767_41288 = (0);
var i__40768_41289 = (0);
while(true){
if((i__40768_41289 < count__40767_41288)){
var child_struct_41291 = chunk__40766_41287.cljs$core$IIndexed$_nth$arity$2(null,i__40768_41289);
if((!((child_struct_41291 == null)))){
if(typeof child_struct_41291 === 'string'){
var text_41297 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_41297),child_struct_41291].join(''));
} else {
var children_41298 = shadow.dom.svg_node(child_struct_41291);
if(cljs.core.seq_QMARK_(children_41298)){
var seq__40784_41299 = cljs.core.seq(children_41298);
var chunk__40786_41300 = null;
var count__40787_41301 = (0);
var i__40788_41302 = (0);
while(true){
if((i__40788_41302 < count__40787_41301)){
var child_41303 = chunk__40786_41300.cljs$core$IIndexed$_nth$arity$2(null,i__40788_41302);
if(cljs.core.truth_(child_41303)){
node.appendChild(child_41303);


var G__41304 = seq__40784_41299;
var G__41305 = chunk__40786_41300;
var G__41306 = count__40787_41301;
var G__41307 = (i__40788_41302 + (1));
seq__40784_41299 = G__41304;
chunk__40786_41300 = G__41305;
count__40787_41301 = G__41306;
i__40788_41302 = G__41307;
continue;
} else {
var G__41308 = seq__40784_41299;
var G__41309 = chunk__40786_41300;
var G__41310 = count__40787_41301;
var G__41311 = (i__40788_41302 + (1));
seq__40784_41299 = G__41308;
chunk__40786_41300 = G__41309;
count__40787_41301 = G__41310;
i__40788_41302 = G__41311;
continue;
}
} else {
var temp__5816__auto___41312 = cljs.core.seq(seq__40784_41299);
if(temp__5816__auto___41312){
var seq__40784_41313__$1 = temp__5816__auto___41312;
if(cljs.core.chunked_seq_QMARK_(seq__40784_41313__$1)){
var c__5521__auto___41314 = cljs.core.chunk_first(seq__40784_41313__$1);
var G__41315 = cljs.core.chunk_rest(seq__40784_41313__$1);
var G__41316 = c__5521__auto___41314;
var G__41317 = cljs.core.count(c__5521__auto___41314);
var G__41318 = (0);
seq__40784_41299 = G__41315;
chunk__40786_41300 = G__41316;
count__40787_41301 = G__41317;
i__40788_41302 = G__41318;
continue;
} else {
var child_41319 = cljs.core.first(seq__40784_41313__$1);
if(cljs.core.truth_(child_41319)){
node.appendChild(child_41319);


var G__41320 = cljs.core.next(seq__40784_41313__$1);
var G__41321 = null;
var G__41322 = (0);
var G__41323 = (0);
seq__40784_41299 = G__41320;
chunk__40786_41300 = G__41321;
count__40787_41301 = G__41322;
i__40788_41302 = G__41323;
continue;
} else {
var G__41324 = cljs.core.next(seq__40784_41313__$1);
var G__41325 = null;
var G__41326 = (0);
var G__41327 = (0);
seq__40784_41299 = G__41324;
chunk__40786_41300 = G__41325;
count__40787_41301 = G__41326;
i__40788_41302 = G__41327;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_41298);
}
}


var G__41328 = seq__40764_41286;
var G__41329 = chunk__40766_41287;
var G__41330 = count__40767_41288;
var G__41331 = (i__40768_41289 + (1));
seq__40764_41286 = G__41328;
chunk__40766_41287 = G__41329;
count__40767_41288 = G__41330;
i__40768_41289 = G__41331;
continue;
} else {
var G__41333 = seq__40764_41286;
var G__41334 = chunk__40766_41287;
var G__41335 = count__40767_41288;
var G__41336 = (i__40768_41289 + (1));
seq__40764_41286 = G__41333;
chunk__40766_41287 = G__41334;
count__40767_41288 = G__41335;
i__40768_41289 = G__41336;
continue;
}
} else {
var temp__5816__auto___41339 = cljs.core.seq(seq__40764_41286);
if(temp__5816__auto___41339){
var seq__40764_41340__$1 = temp__5816__auto___41339;
if(cljs.core.chunked_seq_QMARK_(seq__40764_41340__$1)){
var c__5521__auto___41341 = cljs.core.chunk_first(seq__40764_41340__$1);
var G__41342 = cljs.core.chunk_rest(seq__40764_41340__$1);
var G__41343 = c__5521__auto___41341;
var G__41344 = cljs.core.count(c__5521__auto___41341);
var G__41345 = (0);
seq__40764_41286 = G__41342;
chunk__40766_41287 = G__41343;
count__40767_41288 = G__41344;
i__40768_41289 = G__41345;
continue;
} else {
var child_struct_41346 = cljs.core.first(seq__40764_41340__$1);
if((!((child_struct_41346 == null)))){
if(typeof child_struct_41346 === 'string'){
var text_41347 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_41347),child_struct_41346].join(''));
} else {
var children_41348 = shadow.dom.svg_node(child_struct_41346);
if(cljs.core.seq_QMARK_(children_41348)){
var seq__40790_41349 = cljs.core.seq(children_41348);
var chunk__40792_41350 = null;
var count__40793_41351 = (0);
var i__40794_41352 = (0);
while(true){
if((i__40794_41352 < count__40793_41351)){
var child_41353 = chunk__40792_41350.cljs$core$IIndexed$_nth$arity$2(null,i__40794_41352);
if(cljs.core.truth_(child_41353)){
node.appendChild(child_41353);


var G__41354 = seq__40790_41349;
var G__41355 = chunk__40792_41350;
var G__41356 = count__40793_41351;
var G__41357 = (i__40794_41352 + (1));
seq__40790_41349 = G__41354;
chunk__40792_41350 = G__41355;
count__40793_41351 = G__41356;
i__40794_41352 = G__41357;
continue;
} else {
var G__41358 = seq__40790_41349;
var G__41359 = chunk__40792_41350;
var G__41360 = count__40793_41351;
var G__41361 = (i__40794_41352 + (1));
seq__40790_41349 = G__41358;
chunk__40792_41350 = G__41359;
count__40793_41351 = G__41360;
i__40794_41352 = G__41361;
continue;
}
} else {
var temp__5816__auto___41362__$1 = cljs.core.seq(seq__40790_41349);
if(temp__5816__auto___41362__$1){
var seq__40790_41363__$1 = temp__5816__auto___41362__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40790_41363__$1)){
var c__5521__auto___41364 = cljs.core.chunk_first(seq__40790_41363__$1);
var G__41365 = cljs.core.chunk_rest(seq__40790_41363__$1);
var G__41366 = c__5521__auto___41364;
var G__41367 = cljs.core.count(c__5521__auto___41364);
var G__41368 = (0);
seq__40790_41349 = G__41365;
chunk__40792_41350 = G__41366;
count__40793_41351 = G__41367;
i__40794_41352 = G__41368;
continue;
} else {
var child_41369 = cljs.core.first(seq__40790_41363__$1);
if(cljs.core.truth_(child_41369)){
node.appendChild(child_41369);


var G__41370 = cljs.core.next(seq__40790_41363__$1);
var G__41371 = null;
var G__41372 = (0);
var G__41373 = (0);
seq__40790_41349 = G__41370;
chunk__40792_41350 = G__41371;
count__40793_41351 = G__41372;
i__40794_41352 = G__41373;
continue;
} else {
var G__41374 = cljs.core.next(seq__40790_41363__$1);
var G__41375 = null;
var G__41376 = (0);
var G__41377 = (0);
seq__40790_41349 = G__41374;
chunk__40792_41350 = G__41375;
count__40793_41351 = G__41376;
i__40794_41352 = G__41377;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_41348);
}
}


var G__41378 = cljs.core.next(seq__40764_41340__$1);
var G__41379 = null;
var G__41380 = (0);
var G__41381 = (0);
seq__40764_41286 = G__41378;
chunk__40766_41287 = G__41379;
count__40767_41288 = G__41380;
i__40768_41289 = G__41381;
continue;
} else {
var G__41382 = cljs.core.next(seq__40764_41340__$1);
var G__41383 = null;
var G__41384 = (0);
var G__41385 = (0);
seq__40764_41286 = G__41382;
chunk__40766_41287 = G__41383;
count__40767_41288 = G__41384;
i__40768_41289 = G__41385;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5728__auto__ = [];
var len__5722__auto___41386 = arguments.length;
var i__5723__auto___41387 = (0);
while(true){
if((i__5723__auto___41387 < len__5722__auto___41386)){
args__5728__auto__.push((arguments[i__5723__auto___41387]));

var G__41388 = (i__5723__auto___41387 + (1));
i__5723__auto___41387 = G__41388;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((1) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5729__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq40820){
var G__40821 = cljs.core.first(seq40820);
var seq40820__$1 = cljs.core.next(seq40820);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40821,seq40820__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__40824 = arguments.length;
switch (G__40824) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4996__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4996__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4996__auto__;
}
})())){
var c__36440__auto___41390 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36441__auto__ = (function (){var switch__36198__auto__ = (function (state_40829){
var state_val_40830 = (state_40829[(1)]);
if((state_val_40830 === (1))){
var state_40829__$1 = state_40829;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40829__$1,(2),once_or_cleanup);
} else {
if((state_val_40830 === (2))){
var inst_40826 = (state_40829[(2)]);
var inst_40827 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_40829__$1 = (function (){var statearr_40847 = state_40829;
(statearr_40847[(7)] = inst_40826);

return statearr_40847;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40829__$1,inst_40827);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__36199__auto__ = null;
var shadow$dom$state_machine__36199__auto____0 = (function (){
var statearr_40848 = [null,null,null,null,null,null,null,null];
(statearr_40848[(0)] = shadow$dom$state_machine__36199__auto__);

(statearr_40848[(1)] = (1));

return statearr_40848;
});
var shadow$dom$state_machine__36199__auto____1 = (function (state_40829){
while(true){
var ret_value__36200__auto__ = (function (){try{while(true){
var result__36201__auto__ = switch__36198__auto__(state_40829);
if(cljs.core.keyword_identical_QMARK_(result__36201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36201__auto__;
}
break;
}
}catch (e40849){var ex__36202__auto__ = e40849;
var statearr_40850_41397 = state_40829;
(statearr_40850_41397[(2)] = ex__36202__auto__);


if(cljs.core.seq((state_40829[(4)]))){
var statearr_40851_41398 = state_40829;
(statearr_40851_41398[(1)] = cljs.core.first((state_40829[(4)])));

} else {
throw ex__36202__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36200__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41399 = state_40829;
state_40829 = G__41399;
continue;
} else {
return ret_value__36200__auto__;
}
break;
}
});
shadow$dom$state_machine__36199__auto__ = function(state_40829){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__36199__auto____0.call(this);
case 1:
return shadow$dom$state_machine__36199__auto____1.call(this,state_40829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__36199__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__36199__auto____0;
shadow$dom$state_machine__36199__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__36199__auto____1;
return shadow$dom$state_machine__36199__auto__;
})()
})();
var state__36442__auto__ = (function (){var statearr_40852 = f__36441__auto__();
(statearr_40852[(6)] = c__36440__auto___41390);

return statearr_40852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36442__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
