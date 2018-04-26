// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_com.util');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('reagent.ratom');
goog.require('goog.date.DateTime');
goog.require('goog.date.UtcDateTime');
/**
 * Takes a function 'f' amd a map 'm'.  Applies 'f' to each value in 'm' and returns.
 * (fmap  inc  {:a 4  :b 2})   =>   {:a 5  :b 3}
 */
re_com.util.fmap = (function re_com$util$fmap(f,m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__53852__auto__ = (function re_com$util$fmap_$_iter__56156(s__56157){
return (new cljs.core.LazySeq(null,(function (){
var s__56157__$1 = s__56157;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__56157__$1);
if(temp__5457__auto__){
var s__56157__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__56157__$2)){
var c__53850__auto__ = cljs.core.chunk_first.call(null,s__56157__$2);
var size__53851__auto__ = cljs.core.count.call(null,c__53850__auto__);
var b__56159 = cljs.core.chunk_buffer.call(null,size__53851__auto__);
if((function (){var i__56158 = (0);
while(true){
if((i__56158 < size__53851__auto__)){
var vec__56160 = cljs.core._nth.call(null,c__53850__auto__,i__56158);
var k = cljs.core.nth.call(null,vec__56160,(0),null);
var val = cljs.core.nth.call(null,vec__56160,(1),null);
cljs.core.chunk_append.call(null,b__56159,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null));

var G__56166 = (i__56158 + (1));
i__56158 = G__56166;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56159),re_com$util$fmap_$_iter__56156.call(null,cljs.core.chunk_rest.call(null,s__56157__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56159),null);
}
} else {
var vec__56163 = cljs.core.first.call(null,s__56157__$2);
var k = cljs.core.nth.call(null,vec__56163,(0),null);
var val = cljs.core.nth.call(null,vec__56163,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null),re_com$util$fmap_$_iter__56156.call(null,cljs.core.rest.call(null,s__56157__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__53852__auto__.call(null,m);
})());
});
/**
 * Recursively merges maps. If vals are not maps, the last value wins.
 */
re_com.util.deep_merge = (function re_com$util$deep_merge(var_args){
var args__54254__auto__ = [];
var len__54247__auto___56168 = arguments.length;
var i__54248__auto___56169 = (0);
while(true){
if((i__54248__auto___56169 < len__54247__auto___56168)){
args__54254__auto__.push((arguments[i__54248__auto___56169]));

var G__56170 = (i__54248__auto___56169 + (1));
i__54248__auto___56169 = G__56170;
continue;
} else {
}
break;
}

var argseq__54255__auto__ = ((((0) < args__54254__auto__.length))?(new cljs.core.IndexedSeq(args__54254__auto__.slice((0)),(0),null)):null);
return re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__54255__auto__);
});

re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (vals){
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,vals)){
return cljs.core.apply.call(null,cljs.core.merge_with,re_com.util.deep_merge,vals);
} else {
return cljs.core.last.call(null,vals);
}
});

re_com.util.deep_merge.cljs$lang$maxFixedArity = (0);

re_com.util.deep_merge.cljs$lang$applyTo = (function (seq56167){
return re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq56167));
});

/**
 * Takes a value or an atom
 *   If it's a value, returns it
 *   If it's a Reagent object that supports IDeref, returns the value inside it by derefing
 *   
 */
re_com.util.deref_or_value = (function re_com$util$deref_or_value(val_or_atom){
if(((!((val_or_atom == null)))?((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === val_or_atom.cljs$core$IDeref$)))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom))){
return cljs.core.deref.call(null,val_or_atom);
} else {
return val_or_atom;
}
});
/**
 * Takes a value or an atom
 *   If it's a value, returns it
 *   If it's a Reagent object that supports IDeref, returns the value inside it, but WITHOUT derefing
 * 
 *   The arg validation code uses this, since calling deref-or-value adds this arg to the watched ratom list for the component
 *   in question, which in turn can cause different rendering behaviour between dev (where we validate) and prod (where we don't).
 * 
 *   This was experienced in popover-content-wrapper with the position-injected atom which was not derefed there, however
 *   the dev-only validation caused it to be derefed, modifying its render behaviour and causing mayhem and madness for the developer.
 * 
 *   See below that different Reagent types have different ways of retrieving the value without causing capture, although in the case of
 *   Track, we just deref it as there is no peek or state, so hopefully this won't cause issues (surely this is used very rarely).
 *   
 */
re_com.util.deref_or_value_peek = (function re_com$util$deref_or_value_peek(val_or_atom){
if(((!((val_or_atom == null)))?((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === val_or_atom.cljs$core$IDeref$)))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom))){
if((val_or_atom instanceof reagent.ratom.RAtom)){
return val_or_atom.state;
} else {
if((val_or_atom instanceof reagent.ratom.Reaction)){
return val_or_atom._peek_at();
} else {
if((val_or_atom instanceof reagent.ratom.RCursor)){
return val_or_atom._peek();
} else {
if((val_or_atom instanceof reagent.ratom.Track)){
return cljs.core.deref.call(null,val_or_atom);
} else {
if((val_or_atom instanceof reagent.ratom.Wrapper)){
return val_or_atom.state;
} else {
throw (new Error("Unknown reactive data type"));

}
}
}
}
}
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
var args__54254__auto__ = [];
var len__54247__auto___56175 = arguments.length;
var i__54248__auto___56176 = (0);
while(true){
if((i__54248__auto___56176 < len__54247__auto___56175)){
args__54254__auto__.push((arguments[i__54248__auto___56176]));

var G__56177 = (i__54248__auto___56176 + (1));
i__54248__auto___56176 = G__56177;
continue;
} else {
}
break;
}

var argseq__54255__auto__ = ((((1) < args__54254__auto__.length))?(new cljs.core.IndexedSeq(args__54254__auto__.slice((1)),(0),null)):null);
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__54255__auto__);
});

re_com.util.px.cljs$core$IFn$_invoke$arity$variadic = (function (val,negative){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(negative)?(- val):val)),"px"].join('');
});

re_com.util.px.cljs$lang$maxFixedArity = (1);

re_com.util.px.cljs$lang$applyTo = (function (seq56173){
var G__56174 = cljs.core.first.call(null,seq56173);
var seq56173__$1 = cljs.core.next.call(null,seq56173);
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic(G__56174,seq56173__$1);
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
var args__54254__auto__ = [];
var len__54247__auto___56184 = arguments.length;
var i__54248__auto___56185 = (0);
while(true){
if((i__54248__auto___56185 < len__54247__auto___56184)){
args__54254__auto__.push((arguments[i__54248__auto___56185]));

var G__56186 = (i__54248__auto___56185 + (1));
i__54248__auto___56185 = G__56186;
continue;
} else {
}
break;
}

var argseq__54255__auto__ = ((((2) < args__54254__auto__.length))?(new cljs.core.IndexedSeq(args__54254__auto__.slice((2)),(0),null)):null);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__54255__auto__);
});

re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__56181){
var map__56182 = p__56181;
var map__56182__$1 = ((((!((map__56182 == null)))?((((map__56182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56182.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56182):map__56182);
var id_fn = cljs.core.get.call(null,map__56182__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var index_fn = ((function (map__56182,map__56182__$1,id_fn){
return (function (index,item){
if(cljs.core._EQ_.call(null,id_fn.call(null,item),id)){
return index;
} else {
return null;
}
});})(map__56182,map__56182__$1,id_fn))
;
return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,index_fn,v));
});

re_com.util.position_for_id.cljs$lang$maxFixedArity = (2);

re_com.util.position_for_id.cljs$lang$applyTo = (function (seq56178){
var G__56179 = cljs.core.first.call(null,seq56178);
var seq56178__$1 = cljs.core.next.call(null,seq56178);
var G__56180 = cljs.core.first.call(null,seq56178__$1);
var seq56178__$2 = cljs.core.next.call(null,seq56178__$1);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic(G__56179,G__56180,seq56178__$2);
});

/**
 * Takes a vector of maps 'v'. Returns the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.item_for_id = (function re_com$util$item_for_id(var_args){
var args__54254__auto__ = [];
var len__54247__auto___56194 = arguments.length;
var i__54248__auto___56195 = (0);
while(true){
if((i__54248__auto___56195 < len__54247__auto___56194)){
args__54254__auto__.push((arguments[i__54248__auto___56195]));

var G__56196 = (i__54248__auto___56195 + (1));
i__54248__auto___56195 = G__56196;
continue;
} else {
}
break;
}

var argseq__54255__auto__ = ((((2) < args__54254__auto__.length))?(new cljs.core.IndexedSeq(args__54254__auto__.slice((2)),(0),null)):null);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__54255__auto__);
});

re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__56191){
var map__56192 = p__56191;
var map__56192__$1 = ((((!((map__56192 == null)))?((((map__56192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56192.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56192):map__56192);
var id_fn = cljs.core.get.call(null,map__56192__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__56192,map__56192__$1,id_fn){
return (function (p1__56187_SHARP_){
return cljs.core._EQ_.call(null,id_fn.call(null,p1__56187_SHARP_),id);
});})(map__56192,map__56192__$1,id_fn))
,v));
});

re_com.util.item_for_id.cljs$lang$maxFixedArity = (2);

re_com.util.item_for_id.cljs$lang$applyTo = (function (seq56188){
var G__56189 = cljs.core.first.call(null,seq56188);
var seq56188__$1 = cljs.core.next.call(null,seq56188);
var G__56190 = cljs.core.first.call(null,seq56188__$1);
var seq56188__$2 = cljs.core.next.call(null,seq56188__$1);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic(G__56189,G__56190,seq56188__$2);
});

/**
 * Takes a vector of maps 'v', each of which has an id-fn (default :id) key.
 *   Return v where item matching 'id' is excluded
 */
re_com.util.remove_id_item = (function re_com$util$remove_id_item(var_args){
var args__54254__auto__ = [];
var len__54247__auto___56204 = arguments.length;
var i__54248__auto___56205 = (0);
while(true){
if((i__54248__auto___56205 < len__54247__auto___56204)){
args__54254__auto__.push((arguments[i__54248__auto___56205]));

var G__56206 = (i__54248__auto___56205 + (1));
i__54248__auto___56205 = G__56206;
continue;
} else {
}
break;
}

var argseq__54255__auto__ = ((((2) < args__54254__auto__.length))?(new cljs.core.IndexedSeq(args__54254__auto__.slice((2)),(0),null)):null);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__54255__auto__);
});

re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__56201){
var map__56202 = p__56201;
var map__56202__$1 = ((((!((map__56202 == null)))?((((map__56202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56202.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56202):map__56202);
var id_fn = cljs.core.get.call(null,map__56202__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.filterv.call(null,((function (map__56202,map__56202__$1,id_fn){
return (function (p1__56197_SHARP_){
return cljs.core.not_EQ_.call(null,id_fn.call(null,p1__56197_SHARP_),id);
});})(map__56202,map__56202__$1,id_fn))
,v);
});

re_com.util.remove_id_item.cljs$lang$maxFixedArity = (2);

re_com.util.remove_id_item.cljs$lang$applyTo = (function (seq56198){
var G__56199 = cljs.core.first.call(null,seq56198);
var seq56198__$1 = cljs.core.next.call(null,seq56198);
var G__56200 = cljs.core.first.call(null,seq56198__$1);
var seq56198__$2 = cljs.core.next.call(null,seq56198__$1);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic(G__56199,G__56200,seq56198__$2);
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
var G__56207 = current_node.parentNode;
var G__56208 = (sum_scroll_left + current_node.scrollLeft);
var G__56209 = (sum_scroll_top + current_node.scrollTop);
current_node = G__56207;
sum_scroll_left = G__56208;
sum_scroll_top = G__56209;
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

//# sourceMappingURL=util.js.map?rel=1524702415502
