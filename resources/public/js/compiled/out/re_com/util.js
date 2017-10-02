// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_com.util');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('goog.date.DateTime');
goog.require('goog.date.UtcDateTime');
/**
 * Takes a function 'f' amd a map 'm'.  Applies 'f' to each value in 'm' and returns.
 * (fmap  inc  {:a 4  :b 2})   =>   {:a 5  :b 3}
 */
re_com.util.fmap = (function re_com$util$fmap(f,m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__10692__auto__ = (function re_com$util$fmap_$_iter__12395(s__12396){
return (new cljs.core.LazySeq(null,(function (){
var s__12396__$1 = s__12396;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__12396__$1);
if(temp__6738__auto__){
var s__12396__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12396__$2)){
var c__10690__auto__ = cljs.core.chunk_first.call(null,s__12396__$2);
var size__10691__auto__ = cljs.core.count.call(null,c__10690__auto__);
var b__12398 = cljs.core.chunk_buffer.call(null,size__10691__auto__);
if((function (){var i__12397 = (0);
while(true){
if((i__12397 < size__10691__auto__)){
var vec__12399 = cljs.core._nth.call(null,c__10690__auto__,i__12397);
var k = cljs.core.nth.call(null,vec__12399,(0),null);
var val = cljs.core.nth.call(null,vec__12399,(1),null);
cljs.core.chunk_append.call(null,b__12398,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null));

var G__12405 = (i__12397 + (1));
i__12397 = G__12405;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12398),re_com$util$fmap_$_iter__12395.call(null,cljs.core.chunk_rest.call(null,s__12396__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12398),null);
}
} else {
var vec__12402 = cljs.core.first.call(null,s__12396__$2);
var k = cljs.core.nth.call(null,vec__12402,(0),null);
var val = cljs.core.nth.call(null,vec__12402,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null),re_com$util$fmap_$_iter__12395.call(null,cljs.core.rest.call(null,s__12396__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__10692__auto__.call(null,m);
})());
});
/**
 * Recursively merges maps. If vals are not maps, the last value wins.
 */
re_com.util.deep_merge = (function re_com$util$deep_merge(var_args){
var args__11094__auto__ = [];
var len__11087__auto___12407 = arguments.length;
var i__11088__auto___12408 = (0);
while(true){
if((i__11088__auto___12408 < len__11087__auto___12407)){
args__11094__auto__.push((arguments[i__11088__auto___12408]));

var G__12409 = (i__11088__auto___12408 + (1));
i__11088__auto___12408 = G__12409;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((0) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((0)),(0),null)):null);
return re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__11095__auto__);
});

re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (vals){
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,vals)){
return cljs.core.apply.call(null,cljs.core.merge_with,re_com.util.deep_merge,vals);
} else {
return cljs.core.last.call(null,vals);
}
});

re_com.util.deep_merge.cljs$lang$maxFixedArity = (0);

re_com.util.deep_merge.cljs$lang$applyTo = (function (seq12406){
return re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12406));
});

re_com.util.deref_or_value = (function re_com$util$deref_or_value(val_or_atom){
if(((!((val_or_atom == null)))?((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === val_or_atom.cljs$core$IDeref$)))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom))){
return cljs.core.deref.call(null,val_or_atom);
} else {
return val_or_atom;
}
});
re_com.util.get_element_by_id = (function re_com$util$get_element_by_id(id){
return document.getElementById(id);
});
/**
 * Left pad a string 's' with '0', until 's' has length 'len'. Return 's' unchanged, if it is already len or greater
 */
re_com.util.pad_zero = (function re_com$util$pad_zero(s,len){
if((cljs.core.count.call(null,s) < len)){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.take_last.call(null,len,cljs.core.concat.call(null,cljs.core.repeat.call(null,len,"0"),s)));
} else {
return s;
}
});
/**
 * return 'num' as a string of 'len' characters, left padding with '0' as necessary
 */
re_com.util.pad_zero_number = (function re_com$util$pad_zero_number(num,len){
return re_com.util.pad_zero.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)].join(''),len);
});
/**
 * takes a number (and optional :negative keyword to indicate a negative value) and returns that number as a string with 'px' at the end
 */
re_com.util.px = (function re_com$util$px(var_args){
var args__11094__auto__ = [];
var len__11087__auto___12413 = arguments.length;
var i__11088__auto___12414 = (0);
while(true){
if((i__11088__auto___12414 < len__11087__auto___12413)){
args__11094__auto__.push((arguments[i__11088__auto___12414]));

var G__12415 = (i__11088__auto___12414 + (1));
i__11088__auto___12414 = G__12415;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((1) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((1)),(0),null)):null);
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11095__auto__);
});

re_com.util.px.cljs$core$IFn$_invoke$arity$variadic = (function (val,negative){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(negative)?(- val):val)),"px"].join('');
});

re_com.util.px.cljs$lang$maxFixedArity = (1);

re_com.util.px.cljs$lang$applyTo = (function (seq12411){
var G__12412 = cljs.core.first.call(null,seq12411);
var seq12411__$1 = cljs.core.next.call(null,seq12411);
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic(G__12412,seq12411__$1);
});

/**
 * Removes the item at position n from a vector v, returning a shrunk vector
 */
re_com.util.remove_nth = (function re_com$util$remove_nth(v,n){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,v,(0),n),cljs.core.subvec.call(null,v,(n + (1)),cljs.core.count.call(null,v))));
});
re_com.util.insert_nth = (function re_com$util$insert_nth(vect,index,item){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.subvec.call(null,vect,(0),index),item,cljs.core.subvec.call(null,vect,index));
});
/**
 * Takes a vector of maps 'v'. Returns the position of the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.position_for_id = (function re_com$util$position_for_id(var_args){
var args__11094__auto__ = [];
var len__11087__auto___12422 = arguments.length;
var i__11088__auto___12423 = (0);
while(true){
if((i__11088__auto___12423 < len__11087__auto___12422)){
args__11094__auto__.push((arguments[i__11088__auto___12423]));

var G__12424 = (i__11088__auto___12423 + (1));
i__11088__auto___12423 = G__12424;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((2) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((2)),(0),null)):null);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11095__auto__);
});

re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__12419){
var map__12420 = p__12419;
var map__12420__$1 = ((((!((map__12420 == null)))?((((map__12420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12420.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12420):map__12420);
var id_fn = cljs.core.get.call(null,map__12420__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var index_fn = ((function (map__12420,map__12420__$1,id_fn){
return (function (index,item){
if(cljs.core._EQ_.call(null,id_fn.call(null,item),id)){
return index;
} else {
return null;
}
});})(map__12420,map__12420__$1,id_fn))
;
return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,index_fn,v));
});

re_com.util.position_for_id.cljs$lang$maxFixedArity = (2);

re_com.util.position_for_id.cljs$lang$applyTo = (function (seq12416){
var G__12417 = cljs.core.first.call(null,seq12416);
var seq12416__$1 = cljs.core.next.call(null,seq12416);
var G__12418 = cljs.core.first.call(null,seq12416__$1);
var seq12416__$2 = cljs.core.next.call(null,seq12416__$1);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic(G__12417,G__12418,seq12416__$2);
});

/**
 * Takes a vector of maps 'v'. Returns the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.item_for_id = (function re_com$util$item_for_id(var_args){
var args__11094__auto__ = [];
var len__11087__auto___12432 = arguments.length;
var i__11088__auto___12433 = (0);
while(true){
if((i__11088__auto___12433 < len__11087__auto___12432)){
args__11094__auto__.push((arguments[i__11088__auto___12433]));

var G__12434 = (i__11088__auto___12433 + (1));
i__11088__auto___12433 = G__12434;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((2) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((2)),(0),null)):null);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11095__auto__);
});

re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__12429){
var map__12430 = p__12429;
var map__12430__$1 = ((((!((map__12430 == null)))?((((map__12430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12430.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12430):map__12430);
var id_fn = cljs.core.get.call(null,map__12430__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__12430,map__12430__$1,id_fn){
return (function (p1__12425_SHARP_){
return cljs.core._EQ_.call(null,id_fn.call(null,p1__12425_SHARP_),id);
});})(map__12430,map__12430__$1,id_fn))
,v));
});

re_com.util.item_for_id.cljs$lang$maxFixedArity = (2);

re_com.util.item_for_id.cljs$lang$applyTo = (function (seq12426){
var G__12427 = cljs.core.first.call(null,seq12426);
var seq12426__$1 = cljs.core.next.call(null,seq12426);
var G__12428 = cljs.core.first.call(null,seq12426__$1);
var seq12426__$2 = cljs.core.next.call(null,seq12426__$1);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic(G__12427,G__12428,seq12426__$2);
});

/**
 * Takes a vector of maps 'v', each of which has an id-fn (default :id) key.
 *   Return v where item matching 'id' is excluded
 */
re_com.util.remove_id_item = (function re_com$util$remove_id_item(var_args){
var args__11094__auto__ = [];
var len__11087__auto___12442 = arguments.length;
var i__11088__auto___12443 = (0);
while(true){
if((i__11088__auto___12443 < len__11087__auto___12442)){
args__11094__auto__.push((arguments[i__11088__auto___12443]));

var G__12444 = (i__11088__auto___12443 + (1));
i__11088__auto___12443 = G__12444;
continue;
} else {
}
break;
}

var argseq__11095__auto__ = ((((2) < args__11094__auto__.length))?(new cljs.core.IndexedSeq(args__11094__auto__.slice((2)),(0),null)):null);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11095__auto__);
});

re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__12439){
var map__12440 = p__12439;
var map__12440__$1 = ((((!((map__12440 == null)))?((((map__12440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12440.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12440):map__12440);
var id_fn = cljs.core.get.call(null,map__12440__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.filterv.call(null,((function (map__12440,map__12440__$1,id_fn){
return (function (p1__12435_SHARP_){
return cljs.core.not_EQ_.call(null,id_fn.call(null,p1__12435_SHARP_),id);
});})(map__12440,map__12440__$1,id_fn))
,v);
});

re_com.util.remove_id_item.cljs$lang$maxFixedArity = (2);

re_com.util.remove_id_item.cljs$lang$applyTo = (function (seq12436){
var G__12437 = cljs.core.first.call(null,seq12436);
var seq12436__$1 = cljs.core.next.call(null,seq12436);
var G__12438 = cljs.core.first.call(null,seq12436__$1);
var seq12436__$2 = cljs.core.next.call(null,seq12436__$1);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic(G__12437,G__12438,seq12436__$2);
});

/**
 * (for [[index item first? last?] (enumerate coll)] ...)  
 */
re_com.util.enumerate = (function re_com$util$enumerate(coll){
var c = (cljs.core.count.call(null,coll) - (1));
var f = ((function (c){
return (function (index,item){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,item,cljs.core._EQ_.call(null,(0),index),cljs.core._EQ_.call(null,c,index)], null);
});})(c))
;
return cljs.core.map_indexed.call(null,f,coll);
});
/**
 * Given a DOM node, I traverse through all ascendant nodes (until I reach body), summing any scrollLeft and scrollTop values
 * and return these sums in a map
 */
re_com.util.sum_scroll_offsets = (function re_com$util$sum_scroll_offsets(node){
var current_node = node.parentNode;
var sum_scroll_left = (0);
var sum_scroll_top = (0);
while(true){
if(cljs.core.not_EQ_.call(null,current_node.tagName,"BODY")){
var G__12445 = current_node.parentNode;
var G__12446 = (sum_scroll_left + current_node.scrollLeft);
var G__12447 = (sum_scroll_top + current_node.scrollTop);
current_node = G__12445;
sum_scroll_left = G__12446;
sum_scroll_top = G__12447;
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),sum_scroll_left,new cljs.core.Keyword(null,"top","top",-1856271961),sum_scroll_top], null);
}
break;
}
});
/**
 * Answer a goog.date.UtcDateTime based on local date/time.
 */
re_com.util.now__GT_utc = (function re_com$util$now__GT_utc(){
var local_date = (new goog.date.DateTime());
return (new goog.date.UtcDateTime(local_date.getYear(),local_date.getMonth(),local_date.getDate(),(0),(0),(0),(0)));
});

//# sourceMappingURL=util.js.map?rel=1506896669867
