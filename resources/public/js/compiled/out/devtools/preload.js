// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.preload');
goog.require('cljs.core');
goog.require('devtools.prefs');
goog.require('devtools.core');
if(cljs.core.not.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"suppress-preload-install","suppress-preload-install",1724845090)))){
devtools.core.install_BANG_.call(null);
} else {
}

//# sourceMappingURL=preload.js.map?rel=1524702427258
