// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.protocols');
goog.require('cljs.core');

/**
 * Marker protocol indicating a devtools template.
 * @interface
 */
devtools.protocols.ITemplate = function(){};


/**
 * Marker protocol indicating a devtools group.
 * @interface
 */
devtools.protocols.IGroup = function(){};


/**
 * Marker protocol indicating a devtools surrogate object.
 * @interface
 */
devtools.protocols.ISurrogate = function(){};


/**
 * @interface
 */
devtools.protocols.IFormat = function(){};

devtools.protocols._header = (function devtools$protocols$_header(value){
if((!((value == null))) && (!((value.devtools$protocols$IFormat$_header$arity$1 == null)))){
return value.devtools$protocols$IFormat$_header$arity$1(value);
} else {
var x__63494__auto__ = (((value == null))?null:value);
var m__63495__auto__ = (devtools.protocols._header[goog.typeOf(x__63494__auto__)]);
if(!((m__63495__auto__ == null))){
return m__63495__auto__.call(null,value);
} else {
var m__63495__auto____$1 = (devtools.protocols._header["_"]);
if(!((m__63495__auto____$1 == null))){
return m__63495__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IFormat.-header",value);
}
}
}
});

devtools.protocols._has_body = (function devtools$protocols$_has_body(value){
if((!((value == null))) && (!((value.devtools$protocols$IFormat$_has_body$arity$1 == null)))){
return value.devtools$protocols$IFormat$_has_body$arity$1(value);
} else {
var x__63494__auto__ = (((value == null))?null:value);
var m__63495__auto__ = (devtools.protocols._has_body[goog.typeOf(x__63494__auto__)]);
if(!((m__63495__auto__ == null))){
return m__63495__auto__.call(null,value);
} else {
var m__63495__auto____$1 = (devtools.protocols._has_body["_"]);
if(!((m__63495__auto____$1 == null))){
return m__63495__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IFormat.-has-body",value);
}
}
}
});

devtools.protocols._body = (function devtools$protocols$_body(value){
if((!((value == null))) && (!((value.devtools$protocols$IFormat$_body$arity$1 == null)))){
return value.devtools$protocols$IFormat$_body$arity$1(value);
} else {
var x__63494__auto__ = (((value == null))?null:value);
var m__63495__auto__ = (devtools.protocols._body[goog.typeOf(x__63494__auto__)]);
if(!((m__63495__auto__ == null))){
return m__63495__auto__.call(null,value);
} else {
var m__63495__auto____$1 = (devtools.protocols._body["_"]);
if(!((m__63495__auto____$1 == null))){
return m__63495__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IFormat.-body",value);
}
}
}
});


//# sourceMappingURL=protocols.js.map?rel=1514950331546
