goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5728__auto__ = [];
var len__5722__auto___44127 = arguments.length;
var i__5723__auto___44128 = (0);
while(true){
if((i__5723__auto___44128 < len__5722__auto___44127)){
args__5728__auto__.push((arguments[i__5723__auto___44128]));

var G__44129 = (i__5723__auto___44128 + (1));
i__5723__auto___44128 = G__44129;
continue;
} else {
}
break;
}

var argseq__5729__auto__ = ((((1) < args__5728__auto__.length))?(new cljs.core.IndexedSeq(args__5728__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5729__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq43602){
var G__43603 = cljs.core.first(seq43602);
var seq43602__$1 = cljs.core.next(seq43602);
var self__5707__auto__ = this;
return self__5707__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43603,seq43602__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__43606 = cljs.core.seq(sources);
var chunk__43607 = null;
var count__43608 = (0);
var i__43609 = (0);
while(true){
if((i__43609 < count__43608)){
var map__43614 = chunk__43607.cljs$core$IIndexed$_nth$arity$2(null,i__43609);
var map__43614__$1 = cljs.core.__destructure_map(map__43614);
var src = map__43614__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43614__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43614__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43614__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43614__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e43615){var e_44130 = e43615;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_44130);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_44130.message)].join('')));
}

var G__44131 = seq__43606;
var G__44132 = chunk__43607;
var G__44133 = count__43608;
var G__44134 = (i__43609 + (1));
seq__43606 = G__44131;
chunk__43607 = G__44132;
count__43608 = G__44133;
i__43609 = G__44134;
continue;
} else {
var temp__5816__auto__ = cljs.core.seq(seq__43606);
if(temp__5816__auto__){
var seq__43606__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43606__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__43606__$1);
var G__44135 = cljs.core.chunk_rest(seq__43606__$1);
var G__44136 = c__5521__auto__;
var G__44137 = cljs.core.count(c__5521__auto__);
var G__44138 = (0);
seq__43606 = G__44135;
chunk__43607 = G__44136;
count__43608 = G__44137;
i__43609 = G__44138;
continue;
} else {
var map__43645 = cljs.core.first(seq__43606__$1);
var map__43645__$1 = cljs.core.__destructure_map(map__43645);
var src = map__43645__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43645__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43645__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43645__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43645__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e43648){var e_44139 = e43648;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_44139);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_44139.message)].join('')));
}

var G__44140 = cljs.core.next(seq__43606__$1);
var G__44141 = null;
var G__44142 = (0);
var G__44143 = (0);
seq__43606 = G__44140;
chunk__43607 = G__44141;
count__43608 = G__44142;
i__43609 = G__44143;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__43650 = cljs.core.seq(js_requires);
var chunk__43651 = null;
var count__43652 = (0);
var i__43653 = (0);
while(true){
if((i__43653 < count__43652)){
var js_ns = chunk__43651.cljs$core$IIndexed$_nth$arity$2(null,i__43653);
var require_str_44145 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_44145);


var G__44146 = seq__43650;
var G__44147 = chunk__43651;
var G__44148 = count__43652;
var G__44149 = (i__43653 + (1));
seq__43650 = G__44146;
chunk__43651 = G__44147;
count__43652 = G__44148;
i__43653 = G__44149;
continue;
} else {
var temp__5816__auto__ = cljs.core.seq(seq__43650);
if(temp__5816__auto__){
var seq__43650__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43650__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__43650__$1);
var G__44150 = cljs.core.chunk_rest(seq__43650__$1);
var G__44151 = c__5521__auto__;
var G__44152 = cljs.core.count(c__5521__auto__);
var G__44153 = (0);
seq__43650 = G__44150;
chunk__43651 = G__44151;
count__43652 = G__44152;
i__43653 = G__44153;
continue;
} else {
var js_ns = cljs.core.first(seq__43650__$1);
var require_str_44154 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_44154);


var G__44155 = cljs.core.next(seq__43650__$1);
var G__44156 = null;
var G__44157 = (0);
var G__44158 = (0);
seq__43650 = G__44155;
chunk__43651 = G__44156;
count__43652 = G__44157;
i__43653 = G__44158;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__43673){
var map__43674 = p__43673;
var map__43674__$1 = cljs.core.__destructure_map(map__43674);
var msg = map__43674__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43674__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43674__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5476__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43675(s__43676){
return (new cljs.core.LazySeq(null,(function (){
var s__43676__$1 = s__43676;
while(true){
var temp__5816__auto__ = cljs.core.seq(s__43676__$1);
if(temp__5816__auto__){
var xs__6374__auto__ = temp__5816__auto__;
var map__43682 = cljs.core.first(xs__6374__auto__);
var map__43682__$1 = cljs.core.__destructure_map(map__43682);
var src = map__43682__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43682__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43682__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5472__auto__ = ((function (s__43676__$1,map__43682,map__43682__$1,src,resource_name,warnings,xs__6374__auto__,temp__5816__auto__,map__43674,map__43674__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43675_$_iter__43677(s__43678){
return (new cljs.core.LazySeq(null,((function (s__43676__$1,map__43682,map__43682__$1,src,resource_name,warnings,xs__6374__auto__,temp__5816__auto__,map__43674,map__43674__$1,msg,info,reload_info){
return (function (){
var s__43678__$1 = s__43678;
while(true){
var temp__5816__auto____$1 = cljs.core.seq(s__43678__$1);
if(temp__5816__auto____$1){
var s__43678__$2 = temp__5816__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__43678__$2)){
var c__5474__auto__ = cljs.core.chunk_first(s__43678__$2);
var size__5475__auto__ = cljs.core.count(c__5474__auto__);
var b__43680 = cljs.core.chunk_buffer(size__5475__auto__);
if((function (){var i__43679 = (0);
while(true){
if((i__43679 < size__5475__auto__)){
var warning = cljs.core._nth(c__5474__auto__,i__43679);
cljs.core.chunk_append(b__43680,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__44161 = (i__43679 + (1));
i__43679 = G__44161;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43680),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43675_$_iter__43677(cljs.core.chunk_rest(s__43678__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43680),null);
}
} else {
var warning = cljs.core.first(s__43678__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43675_$_iter__43677(cljs.core.rest(s__43678__$2)));
}
} else {
return null;
}
break;
}
});})(s__43676__$1,map__43682,map__43682__$1,src,resource_name,warnings,xs__6374__auto__,temp__5816__auto__,map__43674,map__43674__$1,msg,info,reload_info))
,null,null));
});})(s__43676__$1,map__43682,map__43682__$1,src,resource_name,warnings,xs__6374__auto__,temp__5816__auto__,map__43674,map__43674__$1,msg,info,reload_info))
;
var fs__5473__auto__ = cljs.core.seq(iterys__5472__auto__(warnings));
if(fs__5473__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5473__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43675(cljs.core.rest(s__43676__$1)));
} else {
var G__44162 = cljs.core.rest(s__43676__$1);
s__43676__$1 = G__44162;
continue;
}
} else {
var G__44163 = cljs.core.rest(s__43676__$1);
s__43676__$1 = G__44163;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5476__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__43684_44164 = cljs.core.seq(warnings);
var chunk__43685_44165 = null;
var count__43686_44166 = (0);
var i__43687_44167 = (0);
while(true){
if((i__43687_44167 < count__43686_44166)){
var map__43690_44168 = chunk__43685_44165.cljs$core$IIndexed$_nth$arity$2(null,i__43687_44167);
var map__43690_44169__$1 = cljs.core.__destructure_map(map__43690_44168);
var w_44170 = map__43690_44169__$1;
var msg_44171__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43690_44169__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_44172 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43690_44169__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_44173 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43690_44169__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_44174 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43690_44169__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_44174)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_44172),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_44173),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_44171__$1)].join(''));


var G__44175 = seq__43684_44164;
var G__44176 = chunk__43685_44165;
var G__44177 = count__43686_44166;
var G__44178 = (i__43687_44167 + (1));
seq__43684_44164 = G__44175;
chunk__43685_44165 = G__44176;
count__43686_44166 = G__44177;
i__43687_44167 = G__44178;
continue;
} else {
var temp__5816__auto___44179 = cljs.core.seq(seq__43684_44164);
if(temp__5816__auto___44179){
var seq__43684_44180__$1 = temp__5816__auto___44179;
if(cljs.core.chunked_seq_QMARK_(seq__43684_44180__$1)){
var c__5521__auto___44181 = cljs.core.chunk_first(seq__43684_44180__$1);
var G__44182 = cljs.core.chunk_rest(seq__43684_44180__$1);
var G__44183 = c__5521__auto___44181;
var G__44184 = cljs.core.count(c__5521__auto___44181);
var G__44185 = (0);
seq__43684_44164 = G__44182;
chunk__43685_44165 = G__44183;
count__43686_44166 = G__44184;
i__43687_44167 = G__44185;
continue;
} else {
var map__43691_44186 = cljs.core.first(seq__43684_44180__$1);
var map__43691_44187__$1 = cljs.core.__destructure_map(map__43691_44186);
var w_44188 = map__43691_44187__$1;
var msg_44189__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43691_44187__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_44190 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43691_44187__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_44191 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43691_44187__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_44192 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43691_44187__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_44192)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_44190),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_44191),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_44189__$1)].join(''));


var G__44193 = cljs.core.next(seq__43684_44180__$1);
var G__44194 = null;
var G__44195 = (0);
var G__44196 = (0);
seq__43684_44164 = G__44193;
chunk__43685_44165 = G__44194;
count__43686_44166 = G__44195;
i__43687_44167 = G__44196;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__43672_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__43672_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4996__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4996__auto__){
var and__4996__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4996__auto____$1){
return new$;
} else {
return and__4996__auto____$1;
}
} else {
return and__4996__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__43693){
var map__43694 = p__43693;
var map__43694__$1 = cljs.core.__destructure_map(map__43694);
var msg = map__43694__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43694__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43694__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__43695 = cljs.core.seq(updates);
var chunk__43697 = null;
var count__43698 = (0);
var i__43699 = (0);
while(true){
if((i__43699 < count__43698)){
var path = chunk__43697.cljs$core$IIndexed$_nth$arity$2(null,i__43699);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__43938_44199 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__43942_44200 = null;
var count__43943_44201 = (0);
var i__43944_44202 = (0);
while(true){
if((i__43944_44202 < count__43943_44201)){
var node_44203 = chunk__43942_44200.cljs$core$IIndexed$_nth$arity$2(null,i__43944_44202);
if(cljs.core.not(node_44203.shadow$old)){
var path_match_44204 = shadow.cljs.devtools.client.browser.match_paths(node_44203.getAttribute("href"),path);
if(cljs.core.truth_(path_match_44204)){
var new_link_44205 = (function (){var G__43983 = node_44203.cloneNode(true);
G__43983.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_44204),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__43983;
})();
(node_44203.shadow$old = true);

(new_link_44205.onload = ((function (seq__43938_44199,chunk__43942_44200,count__43943_44201,i__43944_44202,seq__43695,chunk__43697,count__43698,i__43699,new_link_44205,path_match_44204,node_44203,path,map__43694,map__43694__$1,msg,updates,reload_info){
return (function (e){
var seq__43985_44206 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__43987_44207 = null;
var count__43988_44208 = (0);
var i__43989_44209 = (0);
while(true){
if((i__43989_44209 < count__43988_44208)){
var map__43999_44210 = chunk__43987_44207.cljs$core$IIndexed$_nth$arity$2(null,i__43989_44209);
var map__43999_44211__$1 = cljs.core.__destructure_map(map__43999_44210);
var task_44212 = map__43999_44211__$1;
var fn_str_44213 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43999_44211__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44214 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43999_44211__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44215 = goog.getObjectByName(fn_str_44213,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44214)].join(''));

(fn_obj_44215.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44215.cljs$core$IFn$_invoke$arity$2(path,new_link_44205) : fn_obj_44215.call(null,path,new_link_44205));


var G__44216 = seq__43985_44206;
var G__44217 = chunk__43987_44207;
var G__44218 = count__43988_44208;
var G__44219 = (i__43989_44209 + (1));
seq__43985_44206 = G__44216;
chunk__43987_44207 = G__44217;
count__43988_44208 = G__44218;
i__43989_44209 = G__44219;
continue;
} else {
var temp__5816__auto___44220 = cljs.core.seq(seq__43985_44206);
if(temp__5816__auto___44220){
var seq__43985_44221__$1 = temp__5816__auto___44220;
if(cljs.core.chunked_seq_QMARK_(seq__43985_44221__$1)){
var c__5521__auto___44222 = cljs.core.chunk_first(seq__43985_44221__$1);
var G__44223 = cljs.core.chunk_rest(seq__43985_44221__$1);
var G__44224 = c__5521__auto___44222;
var G__44225 = cljs.core.count(c__5521__auto___44222);
var G__44226 = (0);
seq__43985_44206 = G__44223;
chunk__43987_44207 = G__44224;
count__43988_44208 = G__44225;
i__43989_44209 = G__44226;
continue;
} else {
var map__44005_44227 = cljs.core.first(seq__43985_44221__$1);
var map__44005_44228__$1 = cljs.core.__destructure_map(map__44005_44227);
var task_44229 = map__44005_44228__$1;
var fn_str_44230 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44005_44228__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44231 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44005_44228__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44232 = goog.getObjectByName(fn_str_44230,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44231)].join(''));

(fn_obj_44232.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44232.cljs$core$IFn$_invoke$arity$2(path,new_link_44205) : fn_obj_44232.call(null,path,new_link_44205));


var G__44233 = cljs.core.next(seq__43985_44221__$1);
var G__44234 = null;
var G__44235 = (0);
var G__44236 = (0);
seq__43985_44206 = G__44233;
chunk__43987_44207 = G__44234;
count__43988_44208 = G__44235;
i__43989_44209 = G__44236;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_44203);
});})(seq__43938_44199,chunk__43942_44200,count__43943_44201,i__43944_44202,seq__43695,chunk__43697,count__43698,i__43699,new_link_44205,path_match_44204,node_44203,path,map__43694,map__43694__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_44204], 0));

goog.dom.insertSiblingAfter(new_link_44205,node_44203);


var G__44237 = seq__43938_44199;
var G__44238 = chunk__43942_44200;
var G__44239 = count__43943_44201;
var G__44240 = (i__43944_44202 + (1));
seq__43938_44199 = G__44237;
chunk__43942_44200 = G__44238;
count__43943_44201 = G__44239;
i__43944_44202 = G__44240;
continue;
} else {
var G__44241 = seq__43938_44199;
var G__44242 = chunk__43942_44200;
var G__44243 = count__43943_44201;
var G__44244 = (i__43944_44202 + (1));
seq__43938_44199 = G__44241;
chunk__43942_44200 = G__44242;
count__43943_44201 = G__44243;
i__43944_44202 = G__44244;
continue;
}
} else {
var G__44245 = seq__43938_44199;
var G__44246 = chunk__43942_44200;
var G__44247 = count__43943_44201;
var G__44248 = (i__43944_44202 + (1));
seq__43938_44199 = G__44245;
chunk__43942_44200 = G__44246;
count__43943_44201 = G__44247;
i__43944_44202 = G__44248;
continue;
}
} else {
var temp__5816__auto___44249 = cljs.core.seq(seq__43938_44199);
if(temp__5816__auto___44249){
var seq__43938_44250__$1 = temp__5816__auto___44249;
if(cljs.core.chunked_seq_QMARK_(seq__43938_44250__$1)){
var c__5521__auto___44251 = cljs.core.chunk_first(seq__43938_44250__$1);
var G__44252 = cljs.core.chunk_rest(seq__43938_44250__$1);
var G__44253 = c__5521__auto___44251;
var G__44254 = cljs.core.count(c__5521__auto___44251);
var G__44255 = (0);
seq__43938_44199 = G__44252;
chunk__43942_44200 = G__44253;
count__43943_44201 = G__44254;
i__43944_44202 = G__44255;
continue;
} else {
var node_44256 = cljs.core.first(seq__43938_44250__$1);
if(cljs.core.not(node_44256.shadow$old)){
var path_match_44257 = shadow.cljs.devtools.client.browser.match_paths(node_44256.getAttribute("href"),path);
if(cljs.core.truth_(path_match_44257)){
var new_link_44259 = (function (){var G__44010 = node_44256.cloneNode(true);
G__44010.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_44257),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__44010;
})();
(node_44256.shadow$old = true);

(new_link_44259.onload = ((function (seq__43938_44199,chunk__43942_44200,count__43943_44201,i__43944_44202,seq__43695,chunk__43697,count__43698,i__43699,new_link_44259,path_match_44257,node_44256,seq__43938_44250__$1,temp__5816__auto___44249,path,map__43694,map__43694__$1,msg,updates,reload_info){
return (function (e){
var seq__44011_44261 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__44013_44262 = null;
var count__44014_44263 = (0);
var i__44015_44264 = (0);
while(true){
if((i__44015_44264 < count__44014_44263)){
var map__44020_44265 = chunk__44013_44262.cljs$core$IIndexed$_nth$arity$2(null,i__44015_44264);
var map__44020_44266__$1 = cljs.core.__destructure_map(map__44020_44265);
var task_44267 = map__44020_44266__$1;
var fn_str_44268 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44020_44266__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44269 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44020_44266__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44270 = goog.getObjectByName(fn_str_44268,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44269)].join(''));

(fn_obj_44270.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44270.cljs$core$IFn$_invoke$arity$2(path,new_link_44259) : fn_obj_44270.call(null,path,new_link_44259));


var G__44271 = seq__44011_44261;
var G__44272 = chunk__44013_44262;
var G__44273 = count__44014_44263;
var G__44274 = (i__44015_44264 + (1));
seq__44011_44261 = G__44271;
chunk__44013_44262 = G__44272;
count__44014_44263 = G__44273;
i__44015_44264 = G__44274;
continue;
} else {
var temp__5816__auto___44275__$1 = cljs.core.seq(seq__44011_44261);
if(temp__5816__auto___44275__$1){
var seq__44011_44276__$1 = temp__5816__auto___44275__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44011_44276__$1)){
var c__5521__auto___44277 = cljs.core.chunk_first(seq__44011_44276__$1);
var G__44278 = cljs.core.chunk_rest(seq__44011_44276__$1);
var G__44279 = c__5521__auto___44277;
var G__44280 = cljs.core.count(c__5521__auto___44277);
var G__44281 = (0);
seq__44011_44261 = G__44278;
chunk__44013_44262 = G__44279;
count__44014_44263 = G__44280;
i__44015_44264 = G__44281;
continue;
} else {
var map__44021_44282 = cljs.core.first(seq__44011_44276__$1);
var map__44021_44283__$1 = cljs.core.__destructure_map(map__44021_44282);
var task_44284 = map__44021_44283__$1;
var fn_str_44285 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44021_44283__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44286 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44021_44283__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44287 = goog.getObjectByName(fn_str_44285,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44286)].join(''));

(fn_obj_44287.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44287.cljs$core$IFn$_invoke$arity$2(path,new_link_44259) : fn_obj_44287.call(null,path,new_link_44259));


var G__44288 = cljs.core.next(seq__44011_44276__$1);
var G__44289 = null;
var G__44290 = (0);
var G__44291 = (0);
seq__44011_44261 = G__44288;
chunk__44013_44262 = G__44289;
count__44014_44263 = G__44290;
i__44015_44264 = G__44291;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_44256);
});})(seq__43938_44199,chunk__43942_44200,count__43943_44201,i__43944_44202,seq__43695,chunk__43697,count__43698,i__43699,new_link_44259,path_match_44257,node_44256,seq__43938_44250__$1,temp__5816__auto___44249,path,map__43694,map__43694__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_44257], 0));

goog.dom.insertSiblingAfter(new_link_44259,node_44256);


var G__44292 = cljs.core.next(seq__43938_44250__$1);
var G__44293 = null;
var G__44294 = (0);
var G__44295 = (0);
seq__43938_44199 = G__44292;
chunk__43942_44200 = G__44293;
count__43943_44201 = G__44294;
i__43944_44202 = G__44295;
continue;
} else {
var G__44296 = cljs.core.next(seq__43938_44250__$1);
var G__44297 = null;
var G__44298 = (0);
var G__44299 = (0);
seq__43938_44199 = G__44296;
chunk__43942_44200 = G__44297;
count__43943_44201 = G__44298;
i__43944_44202 = G__44299;
continue;
}
} else {
var G__44300 = cljs.core.next(seq__43938_44250__$1);
var G__44301 = null;
var G__44302 = (0);
var G__44303 = (0);
seq__43938_44199 = G__44300;
chunk__43942_44200 = G__44301;
count__43943_44201 = G__44302;
i__43944_44202 = G__44303;
continue;
}
}
} else {
}
}
break;
}


var G__44304 = seq__43695;
var G__44305 = chunk__43697;
var G__44306 = count__43698;
var G__44307 = (i__43699 + (1));
seq__43695 = G__44304;
chunk__43697 = G__44305;
count__43698 = G__44306;
i__43699 = G__44307;
continue;
} else {
var G__44308 = seq__43695;
var G__44309 = chunk__43697;
var G__44310 = count__43698;
var G__44311 = (i__43699 + (1));
seq__43695 = G__44308;
chunk__43697 = G__44309;
count__43698 = G__44310;
i__43699 = G__44311;
continue;
}
} else {
var temp__5816__auto__ = cljs.core.seq(seq__43695);
if(temp__5816__auto__){
var seq__43695__$1 = temp__5816__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43695__$1)){
var c__5521__auto__ = cljs.core.chunk_first(seq__43695__$1);
var G__44312 = cljs.core.chunk_rest(seq__43695__$1);
var G__44313 = c__5521__auto__;
var G__44314 = cljs.core.count(c__5521__auto__);
var G__44315 = (0);
seq__43695 = G__44312;
chunk__43697 = G__44313;
count__43698 = G__44314;
i__43699 = G__44315;
continue;
} else {
var path = cljs.core.first(seq__43695__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__44029_44316 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__44033_44317 = null;
var count__44034_44318 = (0);
var i__44035_44319 = (0);
while(true){
if((i__44035_44319 < count__44034_44318)){
var node_44320 = chunk__44033_44317.cljs$core$IIndexed$_nth$arity$2(null,i__44035_44319);
if(cljs.core.not(node_44320.shadow$old)){
var path_match_44321 = shadow.cljs.devtools.client.browser.match_paths(node_44320.getAttribute("href"),path);
if(cljs.core.truth_(path_match_44321)){
var new_link_44322 = (function (){var G__44085 = node_44320.cloneNode(true);
G__44085.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_44321),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__44085;
})();
(node_44320.shadow$old = true);

(new_link_44322.onload = ((function (seq__44029_44316,chunk__44033_44317,count__44034_44318,i__44035_44319,seq__43695,chunk__43697,count__43698,i__43699,new_link_44322,path_match_44321,node_44320,path,seq__43695__$1,temp__5816__auto__,map__43694,map__43694__$1,msg,updates,reload_info){
return (function (e){
var seq__44087_44323 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__44089_44324 = null;
var count__44090_44325 = (0);
var i__44091_44326 = (0);
while(true){
if((i__44091_44326 < count__44090_44325)){
var map__44095_44327 = chunk__44089_44324.cljs$core$IIndexed$_nth$arity$2(null,i__44091_44326);
var map__44095_44328__$1 = cljs.core.__destructure_map(map__44095_44327);
var task_44329 = map__44095_44328__$1;
var fn_str_44330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44095_44328__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44331 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44095_44328__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44332 = goog.getObjectByName(fn_str_44330,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44331)].join(''));

(fn_obj_44332.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44332.cljs$core$IFn$_invoke$arity$2(path,new_link_44322) : fn_obj_44332.call(null,path,new_link_44322));


var G__44333 = seq__44087_44323;
var G__44334 = chunk__44089_44324;
var G__44335 = count__44090_44325;
var G__44336 = (i__44091_44326 + (1));
seq__44087_44323 = G__44333;
chunk__44089_44324 = G__44334;
count__44090_44325 = G__44335;
i__44091_44326 = G__44336;
continue;
} else {
var temp__5816__auto___44337__$1 = cljs.core.seq(seq__44087_44323);
if(temp__5816__auto___44337__$1){
var seq__44087_44338__$1 = temp__5816__auto___44337__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44087_44338__$1)){
var c__5521__auto___44339 = cljs.core.chunk_first(seq__44087_44338__$1);
var G__44340 = cljs.core.chunk_rest(seq__44087_44338__$1);
var G__44341 = c__5521__auto___44339;
var G__44342 = cljs.core.count(c__5521__auto___44339);
var G__44343 = (0);
seq__44087_44323 = G__44340;
chunk__44089_44324 = G__44341;
count__44090_44325 = G__44342;
i__44091_44326 = G__44343;
continue;
} else {
var map__44096_44344 = cljs.core.first(seq__44087_44338__$1);
var map__44096_44345__$1 = cljs.core.__destructure_map(map__44096_44344);
var task_44346 = map__44096_44345__$1;
var fn_str_44347 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44096_44345__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44348 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44096_44345__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44349 = goog.getObjectByName(fn_str_44347,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44348)].join(''));

(fn_obj_44349.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44349.cljs$core$IFn$_invoke$arity$2(path,new_link_44322) : fn_obj_44349.call(null,path,new_link_44322));


var G__44350 = cljs.core.next(seq__44087_44338__$1);
var G__44351 = null;
var G__44352 = (0);
var G__44353 = (0);
seq__44087_44323 = G__44350;
chunk__44089_44324 = G__44351;
count__44090_44325 = G__44352;
i__44091_44326 = G__44353;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_44320);
});})(seq__44029_44316,chunk__44033_44317,count__44034_44318,i__44035_44319,seq__43695,chunk__43697,count__43698,i__43699,new_link_44322,path_match_44321,node_44320,path,seq__43695__$1,temp__5816__auto__,map__43694,map__43694__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_44321], 0));

goog.dom.insertSiblingAfter(new_link_44322,node_44320);


var G__44354 = seq__44029_44316;
var G__44355 = chunk__44033_44317;
var G__44356 = count__44034_44318;
var G__44357 = (i__44035_44319 + (1));
seq__44029_44316 = G__44354;
chunk__44033_44317 = G__44355;
count__44034_44318 = G__44356;
i__44035_44319 = G__44357;
continue;
} else {
var G__44358 = seq__44029_44316;
var G__44359 = chunk__44033_44317;
var G__44360 = count__44034_44318;
var G__44361 = (i__44035_44319 + (1));
seq__44029_44316 = G__44358;
chunk__44033_44317 = G__44359;
count__44034_44318 = G__44360;
i__44035_44319 = G__44361;
continue;
}
} else {
var G__44362 = seq__44029_44316;
var G__44363 = chunk__44033_44317;
var G__44364 = count__44034_44318;
var G__44365 = (i__44035_44319 + (1));
seq__44029_44316 = G__44362;
chunk__44033_44317 = G__44363;
count__44034_44318 = G__44364;
i__44035_44319 = G__44365;
continue;
}
} else {
var temp__5816__auto___44366__$1 = cljs.core.seq(seq__44029_44316);
if(temp__5816__auto___44366__$1){
var seq__44029_44367__$1 = temp__5816__auto___44366__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44029_44367__$1)){
var c__5521__auto___44368 = cljs.core.chunk_first(seq__44029_44367__$1);
var G__44369 = cljs.core.chunk_rest(seq__44029_44367__$1);
var G__44370 = c__5521__auto___44368;
var G__44371 = cljs.core.count(c__5521__auto___44368);
var G__44372 = (0);
seq__44029_44316 = G__44369;
chunk__44033_44317 = G__44370;
count__44034_44318 = G__44371;
i__44035_44319 = G__44372;
continue;
} else {
var node_44373 = cljs.core.first(seq__44029_44367__$1);
if(cljs.core.not(node_44373.shadow$old)){
var path_match_44374 = shadow.cljs.devtools.client.browser.match_paths(node_44373.getAttribute("href"),path);
if(cljs.core.truth_(path_match_44374)){
var new_link_44375 = (function (){var G__44098 = node_44373.cloneNode(true);
G__44098.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_44374),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__44098;
})();
(node_44373.shadow$old = true);

(new_link_44375.onload = ((function (seq__44029_44316,chunk__44033_44317,count__44034_44318,i__44035_44319,seq__43695,chunk__43697,count__43698,i__43699,new_link_44375,path_match_44374,node_44373,seq__44029_44367__$1,temp__5816__auto___44366__$1,path,seq__43695__$1,temp__5816__auto__,map__43694,map__43694__$1,msg,updates,reload_info){
return (function (e){
var seq__44099_44377 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__44101_44378 = null;
var count__44102_44379 = (0);
var i__44103_44380 = (0);
while(true){
if((i__44103_44380 < count__44102_44379)){
var map__44107_44381 = chunk__44101_44378.cljs$core$IIndexed$_nth$arity$2(null,i__44103_44380);
var map__44107_44382__$1 = cljs.core.__destructure_map(map__44107_44381);
var task_44383 = map__44107_44382__$1;
var fn_str_44384 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44107_44382__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44385 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44107_44382__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44386 = goog.getObjectByName(fn_str_44384,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44385)].join(''));

(fn_obj_44386.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44386.cljs$core$IFn$_invoke$arity$2(path,new_link_44375) : fn_obj_44386.call(null,path,new_link_44375));


var G__44387 = seq__44099_44377;
var G__44388 = chunk__44101_44378;
var G__44389 = count__44102_44379;
var G__44390 = (i__44103_44380 + (1));
seq__44099_44377 = G__44387;
chunk__44101_44378 = G__44388;
count__44102_44379 = G__44389;
i__44103_44380 = G__44390;
continue;
} else {
var temp__5816__auto___44391__$2 = cljs.core.seq(seq__44099_44377);
if(temp__5816__auto___44391__$2){
var seq__44099_44392__$1 = temp__5816__auto___44391__$2;
if(cljs.core.chunked_seq_QMARK_(seq__44099_44392__$1)){
var c__5521__auto___44393 = cljs.core.chunk_first(seq__44099_44392__$1);
var G__44394 = cljs.core.chunk_rest(seq__44099_44392__$1);
var G__44395 = c__5521__auto___44393;
var G__44396 = cljs.core.count(c__5521__auto___44393);
var G__44397 = (0);
seq__44099_44377 = G__44394;
chunk__44101_44378 = G__44395;
count__44102_44379 = G__44396;
i__44103_44380 = G__44397;
continue;
} else {
var map__44108_44398 = cljs.core.first(seq__44099_44392__$1);
var map__44108_44399__$1 = cljs.core.__destructure_map(map__44108_44398);
var task_44400 = map__44108_44399__$1;
var fn_str_44401 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44108_44399__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44402 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44108_44399__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44403 = goog.getObjectByName(fn_str_44401,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44402)].join(''));

(fn_obj_44403.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44403.cljs$core$IFn$_invoke$arity$2(path,new_link_44375) : fn_obj_44403.call(null,path,new_link_44375));


var G__44404 = cljs.core.next(seq__44099_44392__$1);
var G__44405 = null;
var G__44406 = (0);
var G__44407 = (0);
seq__44099_44377 = G__44404;
chunk__44101_44378 = G__44405;
count__44102_44379 = G__44406;
i__44103_44380 = G__44407;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_44373);
});})(seq__44029_44316,chunk__44033_44317,count__44034_44318,i__44035_44319,seq__43695,chunk__43697,count__43698,i__43699,new_link_44375,path_match_44374,node_44373,seq__44029_44367__$1,temp__5816__auto___44366__$1,path,seq__43695__$1,temp__5816__auto__,map__43694,map__43694__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_44374], 0));

goog.dom.insertSiblingAfter(new_link_44375,node_44373);


var G__44408 = cljs.core.next(seq__44029_44367__$1);
var G__44409 = null;
var G__44410 = (0);
var G__44411 = (0);
seq__44029_44316 = G__44408;
chunk__44033_44317 = G__44409;
count__44034_44318 = G__44410;
i__44035_44319 = G__44411;
continue;
} else {
var G__44412 = cljs.core.next(seq__44029_44367__$1);
var G__44413 = null;
var G__44414 = (0);
var G__44415 = (0);
seq__44029_44316 = G__44412;
chunk__44033_44317 = G__44413;
count__44034_44318 = G__44414;
i__44035_44319 = G__44415;
continue;
}
} else {
var G__44416 = cljs.core.next(seq__44029_44367__$1);
var G__44417 = null;
var G__44418 = (0);
var G__44419 = (0);
seq__44029_44316 = G__44416;
chunk__44033_44317 = G__44417;
count__44034_44318 = G__44418;
i__44035_44319 = G__44419;
continue;
}
}
} else {
}
}
break;
}


var G__44421 = cljs.core.next(seq__43695__$1);
var G__44422 = null;
var G__44423 = (0);
var G__44424 = (0);
seq__43695 = G__44421;
chunk__43697 = G__44422;
count__43698 = G__44423;
i__43699 = G__44424;
continue;
} else {
var G__44425 = cljs.core.next(seq__43695__$1);
var G__44426 = null;
var G__44427 = (0);
var G__44428 = (0);
seq__43695 = G__44425;
chunk__43697 = G__44426;
count__43698 = G__44427;
i__43699 = G__44428;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__44109){
var map__44110 = p__44109;
var map__44110__$1 = cljs.core.__destructure_map(map__44110);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44110__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__44111,done,error){
var map__44112 = p__44111;
var map__44112__$1 = cljs.core.__destructure_map(map__44112);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44112__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__44113,done,error){
var map__44114 = p__44113;
var map__44114__$1 = cljs.core.__destructure_map(map__44114);
var msg = map__44114__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44114__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44114__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44114__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__44115){
var map__44116 = p__44115;
var map__44116__$1 = cljs.core.__destructure_map(map__44116);
var src = map__44116__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44116__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4996__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4996__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4996__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__44117 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__44117) : done.call(null,G__44117));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__44118){
var map__44119 = p__44118;
var map__44119__$1 = cljs.core.__destructure_map(map__44119);
var msg__$1 = map__44119__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44119__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e44120){var ex = e44120;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__44121){
var map__44122 = p__44121;
var map__44122__$1 = cljs.core.__destructure_map(map__44122);
var env = map__44122__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44122__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__44123){
var map__44124 = p__44123;
var map__44124__$1 = cljs.core.__destructure_map(map__44124);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44124__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44124__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__44125){
var map__44126 = p__44125;
var map__44126__$1 = cljs.core.__destructure_map(map__44126);
var svc = map__44126__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44126__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
