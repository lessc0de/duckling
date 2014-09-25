// Compiled by ClojureScript 0.0-2311
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10815 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10815 = (function (f,fn_handler,meta10816){
this.f = f;
this.fn_handler = fn_handler;
this.meta10816 = meta10816;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10815.cljs$lang$type = true;
cljs.core.async.t10815.cljs$lang$ctorStr = "cljs.core.async/t10815";
cljs.core.async.t10815.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t10815");
});
cljs.core.async.t10815.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10815.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10815.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10815.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10817){var self__ = this;
var _10817__$1 = this;return self__.meta10816;
});
cljs.core.async.t10815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10817,meta10816__$1){var self__ = this;
var _10817__$1 = this;return (new cljs.core.async.t10815(self__.f,self__.fn_handler,meta10816__$1));
});
cljs.core.async.__GT_t10815 = (function __GT_t10815(f__$1,fn_handler__$1,meta10816){return (new cljs.core.async.t10815(f__$1,fn_handler__$1,meta10816));
});
}
return (new cljs.core.async.t10815(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10819 = buff;if(G__10819)
{var bit__4203__auto__ = null;if(cljs.core.truth_((function (){var or__3553__auto__ = bit__4203__auto__;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return G__10819.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10819.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10819);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10819);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_10820 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10820);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_10820,ret){
return (function (){return fn1.call(null,val_10820);
});})(val_10820,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3541__auto__ = ret;if(cljs.core.truth_(and__3541__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3541__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4409__auto___10821 = n;var x_10822 = (0);while(true){
if((x_10822 < n__4409__auto___10821))
{(a[x_10822] = (0));
{
var G__10823 = (x_10822 + (1));
x_10822 = G__10823;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__10824 = (i + (1));
i = G__10824;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10828 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10828 = (function (flag,alt_flag,meta10829){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10829 = meta10829;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10828.cljs$lang$type = true;
cljs.core.async.t10828.cljs$lang$ctorStr = "cljs.core.async/t10828";
cljs.core.async.t10828.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t10828");
});})(flag))
;
cljs.core.async.t10828.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10828.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t10828.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t10828.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10830){var self__ = this;
var _10830__$1 = this;return self__.meta10829;
});})(flag))
;
cljs.core.async.t10828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10830,meta10829__$1){var self__ = this;
var _10830__$1 = this;return (new cljs.core.async.t10828(self__.flag,self__.alt_flag,meta10829__$1));
});})(flag))
;
cljs.core.async.__GT_t10828 = ((function (flag){
return (function __GT_t10828(flag__$1,alt_flag__$1,meta10829){return (new cljs.core.async.t10828(flag__$1,alt_flag__$1,meta10829));
});})(flag))
;
}
return (new cljs.core.async.t10828(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10834 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10834 = (function (cb,flag,alt_handler,meta10835){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10835 = meta10835;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10834.cljs$lang$type = true;
cljs.core.async.t10834.cljs$lang$ctorStr = "cljs.core.async/t10834";
cljs.core.async.t10834.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t10834");
});
cljs.core.async.t10834.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10834.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10834.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10834.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10836){var self__ = this;
var _10836__$1 = this;return self__.meta10835;
});
cljs.core.async.t10834.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10836,meta10835__$1){var self__ = this;
var _10836__$1 = this;return (new cljs.core.async.t10834(self__.cb,self__.flag,self__.alt_handler,meta10835__$1));
});
cljs.core.async.__GT_t10834 = (function __GT_t10834(cb__$1,flag__$1,alt_handler__$1,meta10835){return (new cljs.core.async.t10834(cb__$1,flag__$1,alt_handler__$1,meta10835));
});
}
return (new cljs.core.async.t10834(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10837_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10837_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3553__auto__ = wport;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__10838 = (i + (1));
i = G__10838;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3553__auto__ = ret;if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3541__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3541__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3541__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__10839){var map__10841 = p__10839;var map__10841__$1 = ((cljs.core.seq_QMARK_.call(null,map__10841))?cljs.core.apply.call(null,cljs.core.hash_map,map__10841):map__10841);var opts = map__10841__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__10839 = null;if (arguments.length > 1) {
  p__10839 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10839);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10842){
var ports = cljs.core.first(arglist__10842);
var p__10839 = cljs.core.rest(arglist__10842);
return alts_BANG___delegate(ports,p__10839);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10850 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10850 = (function (ch,f,map_LT_,meta10851){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10851 = meta10851;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10850.cljs$lang$type = true;
cljs.core.async.t10850.cljs$lang$ctorStr = "cljs.core.async/t10850";
cljs.core.async.t10850.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t10850");
});
cljs.core.async.t10850.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10850.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t10850.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10850.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10853 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10853 = (function (fn1,_,meta10851,ch,f,map_LT_,meta10854){
this.fn1 = fn1;
this._ = _;
this.meta10851 = meta10851;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10854 = meta10854;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10853.cljs$lang$type = true;
cljs.core.async.t10853.cljs$lang$ctorStr = "cljs.core.async/t10853";
cljs.core.async.t10853.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t10853");
});})(___$1))
;
cljs.core.async.t10853.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10853.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10853.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t10853.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__10843_SHARP_){return f1.call(null,(((p1__10843_SHARP_ == null))?null:self__.f.call(null,p1__10843_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t10853.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_10855){var self__ = this;
var _10855__$1 = this;return self__.meta10854;
});})(___$1))
;
cljs.core.async.t10853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_10855,meta10854__$1){var self__ = this;
var _10855__$1 = this;return (new cljs.core.async.t10853(self__.fn1,self__._,self__.meta10851,self__.ch,self__.f,self__.map_LT_,meta10854__$1));
});})(___$1))
;
cljs.core.async.__GT_t10853 = ((function (___$1){
return (function __GT_t10853(fn1__$1,___$2,meta10851__$1,ch__$2,f__$2,map_LT___$2,meta10854){return (new cljs.core.async.t10853(fn1__$1,___$2,meta10851__$1,ch__$2,f__$2,map_LT___$2,meta10854));
});})(___$1))
;
}
return (new cljs.core.async.t10853(fn1,___$1,self__.meta10851,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3541__auto__ = ret;if(cljs.core.truth_(and__3541__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3541__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t10850.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10850.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10850.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10852){var self__ = this;
var _10852__$1 = this;return self__.meta10851;
});
cljs.core.async.t10850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10852,meta10851__$1){var self__ = this;
var _10852__$1 = this;return (new cljs.core.async.t10850(self__.ch,self__.f,self__.map_LT_,meta10851__$1));
});
cljs.core.async.__GT_t10850 = (function __GT_t10850(ch__$1,f__$1,map_LT___$1,meta10851){return (new cljs.core.async.t10850(ch__$1,f__$1,map_LT___$1,meta10851));
});
}
return (new cljs.core.async.t10850(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10859 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10859 = (function (ch,f,map_GT_,meta10860){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10860 = meta10860;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10859.cljs$lang$type = true;
cljs.core.async.t10859.cljs$lang$ctorStr = "cljs.core.async/t10859";
cljs.core.async.t10859.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t10859");
});
cljs.core.async.t10859.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10859.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t10859.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10859.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10859.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10859.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10859.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10861){var self__ = this;
var _10861__$1 = this;return self__.meta10860;
});
cljs.core.async.t10859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10861,meta10860__$1){var self__ = this;
var _10861__$1 = this;return (new cljs.core.async.t10859(self__.ch,self__.f,self__.map_GT_,meta10860__$1));
});
cljs.core.async.__GT_t10859 = (function __GT_t10859(ch__$1,f__$1,map_GT___$1,meta10860){return (new cljs.core.async.t10859(ch__$1,f__$1,map_GT___$1,meta10860));
});
}
return (new cljs.core.async.t10859(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10865 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10865 = (function (ch,p,filter_GT_,meta10866){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10866 = meta10866;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10865.cljs$lang$type = true;
cljs.core.async.t10865.cljs$lang$ctorStr = "cljs.core.async/t10865";
cljs.core.async.t10865.cljs$lang$ctorPrWriter = (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t10865");
});
cljs.core.async.t10865.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10865.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t10865.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10865.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10865.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10865.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10865.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10867){var self__ = this;
var _10867__$1 = this;return self__.meta10866;
});
cljs.core.async.t10865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10867,meta10866__$1){var self__ = this;
var _10867__$1 = this;return (new cljs.core.async.t10865(self__.ch,self__.p,self__.filter_GT_,meta10866__$1));
});
cljs.core.async.__GT_t10865 = (function __GT_t10865(ch__$1,p__$1,filter_GT___$1,meta10866){return (new cljs.core.async.t10865(ch__$1,p__$1,filter_GT___$1,meta10866));
});
}
return (new cljs.core.async.t10865(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6355__auto___10950 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6355__auto___10950,out){
return (function (){var f__6356__auto__ = (function (){var switch__6340__auto__ = ((function (c__6355__auto___10950,out){
return (function (state_10929){var state_val_10930 = (state_10929[(1)]);if((state_val_10930 === (7)))
{var inst_10925 = (state_10929[(2)]);var state_10929__$1 = state_10929;var statearr_10931_10951 = state_10929__$1;(statearr_10931_10951[(2)] = inst_10925);
(statearr_10931_10951[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10930 === (1)))
{var state_10929__$1 = state_10929;var statearr_10932_10952 = state_10929__$1;(statearr_10932_10952[(2)] = null);
(statearr_10932_10952[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10930 === (4)))
{var inst_10911 = (state_10929[(7)]);var inst_10911__$1 = (state_10929[(2)]);var inst_10912 = (inst_10911__$1 == null);var state_10929__$1 = (function (){var statearr_10933 = state_10929;(statearr_10933[(7)] = inst_10911__$1);
return statearr_10933;
})();if(cljs.core.truth_(inst_10912))
{var statearr_10934_10953 = state_10929__$1;(statearr_10934_10953[(1)] = (5));
} else
{var statearr_10935_10954 = state_10929__$1;(statearr_10935_10954[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10930 === (6)))
{var inst_10911 = (state_10929[(7)]);var inst_10916 = p.call(null,inst_10911);var state_10929__$1 = state_10929;if(cljs.core.truth_(inst_10916))
{var statearr_10936_10955 = state_10929__$1;(statearr_10936_10955[(1)] = (8));
} else
{var statearr_10937_10956 = state_10929__$1;(statearr_10937_10956[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10930 === (3)))
{var inst_10927 = (state_10929[(2)]);var state_10929__$1 = state_10929;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10929__$1,inst_10927);
} else
{if((state_val_10930 === (2)))
{var state_10929__$1 = state_10929;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10929__$1,(4),ch);
} else
{if((state_val_10930 === (11)))
{var inst_10919 = (state_10929[(2)]);var state_10929__$1 = state_10929;var statearr_10938_10957 = state_10929__$1;(statearr_10938_10957[(2)] = inst_10919);
(statearr_10938_10957[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10930 === (9)))
{var state_10929__$1 = state_10929;var statearr_10939_10958 = state_10929__$1;(statearr_10939_10958[(2)] = null);
(statearr_10939_10958[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10930 === (5)))
{var inst_10914 = cljs.core.async.close_BANG_.call(null,out);var state_10929__$1 = state_10929;var statearr_10940_10959 = state_10929__$1;(statearr_10940_10959[(2)] = inst_10914);
(statearr_10940_10959[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10930 === (10)))
{var inst_10922 = (state_10929[(2)]);var state_10929__$1 = (function (){var statearr_10941 = state_10929;(statearr_10941[(8)] = inst_10922);
return statearr_10941;
})();var statearr_10942_10960 = state_10929__$1;(statearr_10942_10960[(2)] = null);
(statearr_10942_10960[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10930 === (8)))
{var inst_10911 = (state_10929[(7)]);var state_10929__$1 = state_10929;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10929__$1,(11),out,inst_10911);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6355__auto___10950,out))
;return ((function (switch__6340__auto__,c__6355__auto___10950,out){
return (function() {
var state_machine__6341__auto__ = null;
var state_machine__6341__auto____0 = (function (){var statearr_10946 = [null,null,null,null,null,null,null,null,null];(statearr_10946[(0)] = state_machine__6341__auto__);
(statearr_10946[(1)] = (1));
return statearr_10946;
});
var state_machine__6341__auto____1 = (function (state_10929){while(true){
var ret_value__6342__auto__ = (function (){try{while(true){
var result__6343__auto__ = switch__6340__auto__.call(null,state_10929);if(cljs.core.keyword_identical_QMARK_.call(null,result__6343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6343__auto__;
}
break;
}
}catch (e10947){if((e10947 instanceof Object))
{var ex__6344__auto__ = e10947;var statearr_10948_10961 = state_10929;(statearr_10948_10961[(5)] = ex__6344__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10929);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10947;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10962 = state_10929;
state_10929 = G__10962;
continue;
}
} else
{return ret_value__6342__auto__;
}
break;
}
});
state_machine__6341__auto__ = function(state_10929){
switch(arguments.length){
case 0:
return state_machine__6341__auto____0.call(this);
case 1:
return state_machine__6341__auto____1.call(this,state_10929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6341__auto____0;
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6341__auto____1;
return state_machine__6341__auto__;
})()
;})(switch__6340__auto__,c__6355__auto___10950,out))
})();var state__6357__auto__ = (function (){var statearr_10949 = f__6356__auto__.call(null);(statearr_10949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6355__auto___10950);
return statearr_10949;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6357__auto__);
});})(c__6355__auto___10950,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6355__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6355__auto__){
return (function (){var f__6356__auto__ = (function (){var switch__6340__auto__ = ((function (c__6355__auto__){
return (function (state_11114){var state_val_11115 = (state_11114[(1)]);if((state_val_11115 === (7)))
{var inst_11110 = (state_11114[(2)]);var state_11114__$1 = state_11114;var statearr_11116_11153 = state_11114__$1;(statearr_11116_11153[(2)] = inst_11110);
(statearr_11116_11153[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11115 === (20)))
{var inst_11085 = (state_11114[(7)]);var inst_11096 = (state_11114[(2)]);var inst_11097 = cljs.core.next.call(null,inst_11085);var inst_11071 = inst_11097;var inst_11072 = null;var inst_11073 = (0);var inst_11074 = (0);var state_11114__$1 = (function (){var statearr_11117 = state_11114;(statearr_11117[(8)] = inst_11071);
(statearr_11117[(9)] = inst_11096);
(statearr_11117[(10)] = inst_11074);
(statearr_11117[(11)] = inst_11072);
(statearr_11117[(12)] = inst_11073);
return statearr_11117;
})();var statearr_11118_11154 = state_11114__$1;(statearr_11118_11154[(2)] = null);
(statearr_11118_11154[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11115 === (1)))
{var state_11114__$1 = state_11114;var statearr_11119_11155 = state_11114__$1;(statearr_11119_11155[(2)] = null);
(statearr_11119_11155[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11115 === (4)))
{var inst_11060 = (state_11114[(13)]);var inst_11060__$1 = (state_11114[(2)]);var inst_11061 = (inst_11060__$1 == null);var state_11114__$1 = (function (){var statearr_11123 = state_11114;(statearr_11123[(13)] = inst_11060__$1);
return statearr_11123;
})();if(cljs.core.truth_(inst_11061))
{var statearr_11124_11156 = state_11114__$1;(statearr_11124_11156[(1)] = (5));
} else
{var statearr_11125_11157 = state_11114__$1;(statearr_11125_11157[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11115 === (15)))
{var state_11114__$1 = state_11114;var statearr_11126_11158 = state_11114__$1;(statearr_11126_11158[(2)] = null);
(statearr_11126_11158[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11115 === (13)))
{var inst_11071 = (state_11114[(8)]);var inst_11074 = (state_11114[(10)]);var inst_11072 = (state_11114[(11)]);var inst_11073 = (state_11114[(12)]);var inst_11081 = (state_11114[(2)]);var inst_11082 = (inst_11074 + (1));var tmp11120 = inst_11071;var tmp11121 = inst_11072;var tmp11122 = inst_11073;var inst_11071__$1 = tmp11120;var inst_11072__$1 = tmp11121;var inst_11073__$1 = tmp11122;var inst_11074__$1 = inst_11082;var state_11114__$1 = (function (){var statearr_11127 = state_11114;(statearr_11127[(8)] = inst_11071__$1);
(statearr_11127[(10)] = inst_11074__$1);
(statearr_11127[(14)] = inst_11081);
(statearr_11127[(11)] = inst_11072__$1);
(statearr_11127[(12)] = inst_11073__$1);
return statearr_11127;
})();var statearr_11128_11159 = state_11114__$1;(statearr_11128_11159[(2)] = null);
(statearr_11128_11159[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11115 === (6)))
{var inst_11060 = (state_11114[(13)]);var inst_11065 = f.call(null,inst_11060);var inst_11070 = cljs.core.seq.call(null,inst_11065);var inst_11071 = inst_11070;var inst_11072 = null;var inst_11073 = (0);var inst_11074 = (0);var state_11114__$1 = (function (){var statearr_11129 = state_11114;(statearr_11129[(8)] = inst_11071);
(statearr_11129[(10)] = inst_11074);
(statearr_11129[(11)] = inst_11072);
(statearr_11129[(12)] = inst_11073);
return statearr_11129;
})();var statearr_11130_11160 = state_11114__$1;(statearr_11130_11160[(2)] = null);
(statearr_11130_11160[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11115 === (17)))
{var inst_11085 = (state_11114[(7)]);var inst_11089 = cljs.core.chunk_first.call(null,inst_11085);var inst_11090 = cljs.core.chunk_rest.call(null,inst_11085);var inst_11091 = cljs.core.count.call(null,inst_11089);var inst_11071 = inst_11090;var inst_11072 = inst_11089;var inst_11073 = inst_11091;var inst_11074 = (0);var state_11114__$1 = (function (){var statearr_11131 = state_11114;(statearr_11131[(8)] = inst_11071);
(statearr_11131[(10)] = inst_11074);
(statearr_11131[(11)] = inst_11072);
(statearr_11131[(12)] = inst_11073);
return statearr_11131;
})();var statearr_11132_11161 = state_11114__$1;(statearr_11132_11161[(2)] = null);
(statearr_11132_11161[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11115 === (3)))
{var inst_11112 = (state_11114[(2)]);var state_11114__$1 = state_11114;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11114__$1,inst_11112);
} else
{if((state_val_11115 === (12)))
{var inst_11105 = (state_11114[(2)]);var state_11114__$1 = state_11114;var statearr_11133_11162 = state_11114__$1;(statearr_11133_11162[(2)] = inst_11105);
(statearr_11133_11162[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11115 === (2)))
{var state_11114__$1 = state_11114;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11114__$1,(4),in$);
} else
{if((state_val_11115 === (19)))
{var inst_11100 = (state_11114[(2)]);var state_11114__$1 = state_11114;var statearr_11134_11163 = state_11114__$1;(statearr_11134_11163[(2)] = inst_11100);
(statearr_11134_11163[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11115 === (11)))
{var inst_11071 = (state_11114[(8)]);var inst_11085 = (state_11114[(7)]);var inst_11085__$1 = cljs.core.seq.call(null,inst_11071);var state_11114__$1 = (function (){var statearr_11135 = state_11114;(statearr_11135[(7)] = inst_11085__$1);
return statearr_11135;
})();if(inst_11085__$1)
{var statearr_11136_11164 = state_11114__$1;(statearr_11136_11164[(1)] = (14));
} else
{var statearr_11137_11165 = state_11114__$1;(statearr_11137_11165[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11115 === (9)))
{var inst_11107 = (state_11114[(2)]);var state_11114__$1 = (function (){var statearr_11138 = state_11114;(statearr_11138[(15)] = inst_11107);
return statearr_11138;
})();var statearr_11139_11166 = state_11114__$1;(statearr_11139_11166[(2)] = null);
(statearr_11139_11166[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11115 === (5)))
{var inst_11063 = cljs.core.async.close_BANG_.call(null,out);var state_11114__$1 = state_11114;var statearr_11140_11167 = state_11114__$1;(statearr_11140_11167[(2)] = inst_11063);
(statearr_11140_11167[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11115 === (14)))
{var inst_11085 = (state_11114[(7)]);var inst_11087 = cljs.core.chunked_seq_QMARK_.call(null,inst_11085);var state_11114__$1 = state_11114;if(inst_11087)
{var statearr_11141_11168 = state_11114__$1;(statearr_11141_11168[(1)] = (17));
} else
{var statearr_11142_11169 = state_11114__$1;(statearr_11142_11169[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11115 === (16)))
{var inst_11103 = (state_11114[(2)]);var state_11114__$1 = state_11114;var statearr_11143_11170 = state_11114__$1;(statearr_11143_11170[(2)] = inst_11103);
(statearr_11143_11170[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11115 === (10)))
{var inst_11074 = (state_11114[(10)]);var inst_11072 = (state_11114[(11)]);var inst_11079 = cljs.core._nth.call(null,inst_11072,inst_11074);var state_11114__$1 = state_11114;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11114__$1,(13),out,inst_11079);
} else
{if((state_val_11115 === (18)))
{var inst_11085 = (state_11114[(7)]);var inst_11094 = cljs.core.first.call(null,inst_11085);var state_11114__$1 = state_11114;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11114__$1,(20),out,inst_11094);
} else
{if((state_val_11115 === (8)))
{var inst_11074 = (state_11114[(10)]);var inst_11073 = (state_11114[(12)]);var inst_11076 = (inst_11074 < inst_11073);var inst_11077 = inst_11076;var state_11114__$1 = state_11114;if(cljs.core.truth_(inst_11077))
{var statearr_11144_11171 = state_11114__$1;(statearr_11144_11171[(1)] = (10));
} else
{var statearr_11145_11172 = state_11114__$1;(statearr_11145_11172[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6355__auto__))
;return ((function (switch__6340__auto__,c__6355__auto__){
return (function() {
var state_machine__6341__auto__ = null;
var state_machine__6341__auto____0 = (function (){var statearr_11149 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11149[(0)] = state_machine__6341__auto__);
(statearr_11149[(1)] = (1));
return statearr_11149;
});
var state_machine__6341__auto____1 = (function (state_11114){while(true){
var ret_value__6342__auto__ = (function (){try{while(true){
var result__6343__auto__ = switch__6340__auto__.call(null,state_11114);if(cljs.core.keyword_identical_QMARK_.call(null,result__6343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6343__auto__;
}
break;
}
}catch (e11150){if((e11150 instanceof Object))
{var ex__6344__auto__ = e11150;var statearr_11151_11173 = state_11114;(statearr_11151_11173[(5)] = ex__6344__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11114);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11150;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11174 = state_11114;
state_11114 = G__11174;
continue;
}
} else
{return ret_value__6342__auto__;
}
break;
}
});
state_machine__6341__auto__ = function(state_11114){
switch(arguments.length){
case 0:
return state_machine__6341__auto____0.call(this);
case 1:
return state_machine__6341__auto____1.call(this,state_11114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6341__auto____0;
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6341__auto____1;
return state_machine__6341__auto__;
})()
;})(switch__6340__auto__,c__6355__auto__))
})();var state__6357__auto__ = (function (){var statearr_11152 = f__6356__auto__.call(null);(statearr_11152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6355__auto__);
return statearr_11152;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6357__auto__);
});})(c__6355__auto__))
);
return c__6355__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6355__auto___11255 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6355__auto___11255){
return (function (){var f__6356__auto__ = (function (){var switch__6340__auto__ = ((function (c__6355__auto___11255){
return (function (state_11234){var state_val_11235 = (state_11234[(1)]);if((state_val_11235 === (7)))
{var inst_11230 = (state_11234[(2)]);var state_11234__$1 = state_11234;var statearr_11236_11256 = state_11234__$1;(statearr_11236_11256[(2)] = inst_11230);
(statearr_11236_11256[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11235 === (1)))
{var state_11234__$1 = state_11234;var statearr_11237_11257 = state_11234__$1;(statearr_11237_11257[(2)] = null);
(statearr_11237_11257[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11235 === (4)))
{var inst_11217 = (state_11234[(7)]);var inst_11217__$1 = (state_11234[(2)]);var inst_11218 = (inst_11217__$1 == null);var state_11234__$1 = (function (){var statearr_11238 = state_11234;(statearr_11238[(7)] = inst_11217__$1);
return statearr_11238;
})();if(cljs.core.truth_(inst_11218))
{var statearr_11239_11258 = state_11234__$1;(statearr_11239_11258[(1)] = (5));
} else
{var statearr_11240_11259 = state_11234__$1;(statearr_11240_11259[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11235 === (6)))
{var inst_11217 = (state_11234[(7)]);var state_11234__$1 = state_11234;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11234__$1,(11),to,inst_11217);
} else
{if((state_val_11235 === (3)))
{var inst_11232 = (state_11234[(2)]);var state_11234__$1 = state_11234;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11234__$1,inst_11232);
} else
{if((state_val_11235 === (2)))
{var state_11234__$1 = state_11234;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11234__$1,(4),from);
} else
{if((state_val_11235 === (11)))
{var inst_11227 = (state_11234[(2)]);var state_11234__$1 = (function (){var statearr_11241 = state_11234;(statearr_11241[(8)] = inst_11227);
return statearr_11241;
})();var statearr_11242_11260 = state_11234__$1;(statearr_11242_11260[(2)] = null);
(statearr_11242_11260[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11235 === (9)))
{var state_11234__$1 = state_11234;var statearr_11243_11261 = state_11234__$1;(statearr_11243_11261[(2)] = null);
(statearr_11243_11261[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11235 === (5)))
{var state_11234__$1 = state_11234;if(cljs.core.truth_(close_QMARK_))
{var statearr_11244_11262 = state_11234__$1;(statearr_11244_11262[(1)] = (8));
} else
{var statearr_11245_11263 = state_11234__$1;(statearr_11245_11263[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11235 === (10)))
{var inst_11224 = (state_11234[(2)]);var state_11234__$1 = state_11234;var statearr_11246_11264 = state_11234__$1;(statearr_11246_11264[(2)] = inst_11224);
(statearr_11246_11264[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11235 === (8)))
{var inst_11221 = cljs.core.async.close_BANG_.call(null,to);var state_11234__$1 = state_11234;var statearr_11247_11265 = state_11234__$1;(statearr_11247_11265[(2)] = inst_11221);
(statearr_11247_11265[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6355__auto___11255))
;return ((function (switch__6340__auto__,c__6355__auto___11255){
return (function() {
var state_machine__6341__auto__ = null;
var state_machine__6341__auto____0 = (function (){var statearr_11251 = [null,null,null,null,null,null,null,null,null];(statearr_11251[(0)] = state_machine__6341__auto__);
(statearr_11251[(1)] = (1));
return statearr_11251;
});
var state_machine__6341__auto____1 = (function (state_11234){while(true){
var ret_value__6342__auto__ = (function (){try{while(true){
var result__6343__auto__ = switch__6340__auto__.call(null,state_11234);if(cljs.core.keyword_identical_QMARK_.call(null,result__6343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6343__auto__;
}
break;
}
}catch (e11252){if((e11252 instanceof Object))
{var ex__6344__auto__ = e11252;var statearr_11253_11266 = state_11234;(statearr_11253_11266[(5)] = ex__6344__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11234);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11252;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11267 = state_11234;
state_11234 = G__11267;
continue;
}
} else
{return ret_value__6342__auto__;
}
break;
}
});
state_machine__6341__auto__ = function(state_11234){
switch(arguments.length){
case 0:
return state_machine__6341__auto____0.call(this);
case 1:
return state_machine__6341__auto____1.call(this,state_11234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6341__auto____0;
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6341__auto____1;
return state_machine__6341__auto__;
})()
;})(switch__6340__auto__,c__6355__auto___11255))
})();var state__6357__auto__ = (function (){var statearr_11254 = f__6356__auto__.call(null);(statearr_11254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6355__auto___11255);
return statearr_11254;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6357__auto__);
});})(c__6355__auto___11255))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6355__auto___11354 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6355__auto___11354,tc,fc){
return (function (){var f__6356__auto__ = (function (){var switch__6340__auto__ = ((function (c__6355__auto___11354,tc,fc){
return (function (state_11332){var state_val_11333 = (state_11332[(1)]);if((state_val_11333 === (7)))
{var inst_11328 = (state_11332[(2)]);var state_11332__$1 = state_11332;var statearr_11334_11355 = state_11332__$1;(statearr_11334_11355[(2)] = inst_11328);
(statearr_11334_11355[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11333 === (1)))
{var state_11332__$1 = state_11332;var statearr_11335_11356 = state_11332__$1;(statearr_11335_11356[(2)] = null);
(statearr_11335_11356[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11333 === (4)))
{var inst_11313 = (state_11332[(7)]);var inst_11313__$1 = (state_11332[(2)]);var inst_11314 = (inst_11313__$1 == null);var state_11332__$1 = (function (){var statearr_11336 = state_11332;(statearr_11336[(7)] = inst_11313__$1);
return statearr_11336;
})();if(cljs.core.truth_(inst_11314))
{var statearr_11337_11357 = state_11332__$1;(statearr_11337_11357[(1)] = (5));
} else
{var statearr_11338_11358 = state_11332__$1;(statearr_11338_11358[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11333 === (6)))
{var inst_11313 = (state_11332[(7)]);var inst_11319 = p.call(null,inst_11313);var state_11332__$1 = state_11332;if(cljs.core.truth_(inst_11319))
{var statearr_11339_11359 = state_11332__$1;(statearr_11339_11359[(1)] = (9));
} else
{var statearr_11340_11360 = state_11332__$1;(statearr_11340_11360[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11333 === (3)))
{var inst_11330 = (state_11332[(2)]);var state_11332__$1 = state_11332;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11332__$1,inst_11330);
} else
{if((state_val_11333 === (2)))
{var state_11332__$1 = state_11332;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11332__$1,(4),ch);
} else
{if((state_val_11333 === (11)))
{var inst_11313 = (state_11332[(7)]);var inst_11323 = (state_11332[(2)]);var state_11332__$1 = state_11332;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11332__$1,(8),inst_11323,inst_11313);
} else
{if((state_val_11333 === (9)))
{var state_11332__$1 = state_11332;var statearr_11341_11361 = state_11332__$1;(statearr_11341_11361[(2)] = tc);
(statearr_11341_11361[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11333 === (5)))
{var inst_11316 = cljs.core.async.close_BANG_.call(null,tc);var inst_11317 = cljs.core.async.close_BANG_.call(null,fc);var state_11332__$1 = (function (){var statearr_11342 = state_11332;(statearr_11342[(8)] = inst_11316);
return statearr_11342;
})();var statearr_11343_11362 = state_11332__$1;(statearr_11343_11362[(2)] = inst_11317);
(statearr_11343_11362[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11333 === (10)))
{var state_11332__$1 = state_11332;var statearr_11344_11363 = state_11332__$1;(statearr_11344_11363[(2)] = fc);
(statearr_11344_11363[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11333 === (8)))
{var inst_11325 = (state_11332[(2)]);var state_11332__$1 = (function (){var statearr_11345 = state_11332;(statearr_11345[(9)] = inst_11325);
return statearr_11345;
})();var statearr_11346_11364 = state_11332__$1;(statearr_11346_11364[(2)] = null);
(statearr_11346_11364[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6355__auto___11354,tc,fc))
;return ((function (switch__6340__auto__,c__6355__auto___11354,tc,fc){
return (function() {
var state_machine__6341__auto__ = null;
var state_machine__6341__auto____0 = (function (){var statearr_11350 = [null,null,null,null,null,null,null,null,null,null];(statearr_11350[(0)] = state_machine__6341__auto__);
(statearr_11350[(1)] = (1));
return statearr_11350;
});
var state_machine__6341__auto____1 = (function (state_11332){while(true){
var ret_value__6342__auto__ = (function (){try{while(true){
var result__6343__auto__ = switch__6340__auto__.call(null,state_11332);if(cljs.core.keyword_identical_QMARK_.call(null,result__6343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6343__auto__;
}
break;
}
}catch (e11351){if((e11351 instanceof Object))
{var ex__6344__auto__ = e11351;var statearr_11352_11365 = state_11332;(statearr_11352_11365[(5)] = ex__6344__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11332);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11351;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11366 = state_11332;
state_11332 = G__11366;
continue;
}
} else
{return ret_value__6342__auto__;
}
break;
}
});
state_machine__6341__auto__ = function(state_11332){
switch(arguments.length){
case 0:
return state_machine__6341__auto____0.call(this);
case 1:
return state_machine__6341__auto____1.call(this,state_11332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6341__auto____0;
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6341__auto____1;
return state_machine__6341__auto__;
})()
;})(switch__6340__auto__,c__6355__auto___11354,tc,fc))
})();var state__6357__auto__ = (function (){var statearr_11353 = f__6356__auto__.call(null);(statearr_11353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6355__auto___11354);
return statearr_11353;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6357__auto__);
});})(c__6355__auto___11354,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6355__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6355__auto__){
return (function (){var f__6356__auto__ = (function (){var switch__6340__auto__ = ((function (c__6355__auto__){
return (function (state_11413){var state_val_11414 = (state_11413[(1)]);if((state_val_11414 === (7)))
{var inst_11409 = (state_11413[(2)]);var state_11413__$1 = state_11413;var statearr_11415_11431 = state_11413__$1;(statearr_11415_11431[(2)] = inst_11409);
(statearr_11415_11431[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11414 === (6)))
{var inst_11402 = (state_11413[(7)]);var inst_11399 = (state_11413[(8)]);var inst_11406 = f.call(null,inst_11399,inst_11402);var inst_11399__$1 = inst_11406;var state_11413__$1 = (function (){var statearr_11416 = state_11413;(statearr_11416[(8)] = inst_11399__$1);
return statearr_11416;
})();var statearr_11417_11432 = state_11413__$1;(statearr_11417_11432[(2)] = null);
(statearr_11417_11432[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11414 === (5)))
{var inst_11399 = (state_11413[(8)]);var state_11413__$1 = state_11413;var statearr_11418_11433 = state_11413__$1;(statearr_11418_11433[(2)] = inst_11399);
(statearr_11418_11433[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11414 === (4)))
{var inst_11402 = (state_11413[(7)]);var inst_11402__$1 = (state_11413[(2)]);var inst_11403 = (inst_11402__$1 == null);var state_11413__$1 = (function (){var statearr_11419 = state_11413;(statearr_11419[(7)] = inst_11402__$1);
return statearr_11419;
})();if(cljs.core.truth_(inst_11403))
{var statearr_11420_11434 = state_11413__$1;(statearr_11420_11434[(1)] = (5));
} else
{var statearr_11421_11435 = state_11413__$1;(statearr_11421_11435[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11414 === (3)))
{var inst_11411 = (state_11413[(2)]);var state_11413__$1 = state_11413;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11413__$1,inst_11411);
} else
{if((state_val_11414 === (2)))
{var state_11413__$1 = state_11413;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11413__$1,(4),ch);
} else
{if((state_val_11414 === (1)))
{var inst_11399 = init;var state_11413__$1 = (function (){var statearr_11422 = state_11413;(statearr_11422[(8)] = inst_11399);
return statearr_11422;
})();var statearr_11423_11436 = state_11413__$1;(statearr_11423_11436[(2)] = null);
(statearr_11423_11436[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__6355__auto__))
;return ((function (switch__6340__auto__,c__6355__auto__){
return (function() {
var state_machine__6341__auto__ = null;
var state_machine__6341__auto____0 = (function (){var statearr_11427 = [null,null,null,null,null,null,null,null,null];(statearr_11427[(0)] = state_machine__6341__auto__);
(statearr_11427[(1)] = (1));
return statearr_11427;
});
var state_machine__6341__auto____1 = (function (state_11413){while(true){
var ret_value__6342__auto__ = (function (){try{while(true){
var result__6343__auto__ = switch__6340__auto__.call(null,state_11413);if(cljs.core.keyword_identical_QMARK_.call(null,result__6343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6343__auto__;
}
break;
}
}catch (e11428){if((e11428 instanceof Object))
{var ex__6344__auto__ = e11428;var statearr_11429_11437 = state_11413;(statearr_11429_11437[(5)] = ex__6344__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11413);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11428;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11438 = state_11413;
state_11413 = G__11438;
continue;
}
} else
{return ret_value__6342__auto__;
}
break;
}
});
state_machine__6341__auto__ = function(state_11413){
switch(arguments.length){
case 0:
return state_machine__6341__auto____0.call(this);
case 1:
return state_machine__6341__auto____1.call(this,state_11413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6341__auto____0;
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6341__auto____1;
return state_machine__6341__auto__;
})()
;})(switch__6340__auto__,c__6355__auto__))
})();var state__6357__auto__ = (function (){var statearr_11430 = f__6356__auto__.call(null);(statearr_11430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6355__auto__);
return statearr_11430;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6357__auto__);
});})(c__6355__auto__))
);
return c__6355__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6355__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6355__auto__){
return (function (){var f__6356__auto__ = (function (){var switch__6340__auto__ = ((function (c__6355__auto__){
return (function (state_11500){var state_val_11501 = (state_11500[(1)]);if((state_val_11501 === (7)))
{var inst_11481 = (state_11500[(7)]);var inst_11486 = (state_11500[(2)]);var inst_11487 = cljs.core.next.call(null,inst_11481);var inst_11481__$1 = inst_11487;var state_11500__$1 = (function (){var statearr_11502 = state_11500;(statearr_11502[(8)] = inst_11486);
(statearr_11502[(7)] = inst_11481__$1);
return statearr_11502;
})();var statearr_11503_11521 = state_11500__$1;(statearr_11503_11521[(2)] = null);
(statearr_11503_11521[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11501 === (1)))
{var inst_11480 = cljs.core.seq.call(null,coll);var inst_11481 = inst_11480;var state_11500__$1 = (function (){var statearr_11504 = state_11500;(statearr_11504[(7)] = inst_11481);
return statearr_11504;
})();var statearr_11505_11522 = state_11500__$1;(statearr_11505_11522[(2)] = null);
(statearr_11505_11522[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11501 === (4)))
{var inst_11481 = (state_11500[(7)]);var inst_11484 = cljs.core.first.call(null,inst_11481);var state_11500__$1 = state_11500;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11500__$1,(7),ch,inst_11484);
} else
{if((state_val_11501 === (6)))
{var inst_11496 = (state_11500[(2)]);var state_11500__$1 = state_11500;var statearr_11506_11523 = state_11500__$1;(statearr_11506_11523[(2)] = inst_11496);
(statearr_11506_11523[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11501 === (3)))
{var inst_11498 = (state_11500[(2)]);var state_11500__$1 = state_11500;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11500__$1,inst_11498);
} else
{if((state_val_11501 === (2)))
{var inst_11481 = (state_11500[(7)]);var state_11500__$1 = state_11500;if(cljs.core.truth_(inst_11481))
{var statearr_11507_11524 = state_11500__$1;(statearr_11507_11524[(1)] = (4));
} else
{var statearr_11508_11525 = state_11500__$1;(statearr_11508_11525[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11501 === (9)))
{var state_11500__$1 = state_11500;var statearr_11509_11526 = state_11500__$1;(statearr_11509_11526[(2)] = null);
(statearr_11509_11526[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11501 === (5)))
{var state_11500__$1 = state_11500;if(cljs.core.truth_(close_QMARK_))
{var statearr_11510_11527 = state_11500__$1;(statearr_11510_11527[(1)] = (8));
} else
{var statearr_11511_11528 = state_11500__$1;(statearr_11511_11528[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11501 === (10)))
{var inst_11494 = (state_11500[(2)]);var state_11500__$1 = state_11500;var statearr_11512_11529 = state_11500__$1;(statearr_11512_11529[(2)] = inst_11494);
(statearr_11512_11529[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11501 === (8)))
{var inst_11491 = cljs.core.async.close_BANG_.call(null,ch);var state_11500__$1 = state_11500;var statearr_11513_11530 = state_11500__$1;(statearr_11513_11530[(2)] = inst_11491);
(statearr_11513_11530[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});})(c__6355__auto__))
;return ((function (switch__6340__auto__,c__6355__auto__){
return (function() {
var state_machine__6341__auto__ = null;
var state_machine__6341__auto____0 = (function (){var statearr_11517 = [null,null,null,null,null,null,null,null,null];(statearr_11517[(0)] = state_machine__6341__auto__);
(statearr_11517[(1)] = (1));
return statearr_11517;
});
var state_machine__6341__auto____1 = (function (state_11500){while(true){
var ret_value__6342__auto__ = (function (){try{while(true){
var result__6343__auto__ = switch__6340__auto__.call(null,state_11500);if(cljs.core.keyword_identical_QMARK_.call(null,result__6343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6343__auto__;
}
break;
}
}catch (e11518){if((e11518 instanceof Object))
{var ex__6344__auto__ = e11518;var statearr_11519_11531 = state_11500;(statearr_11519_11531[(5)] = ex__6344__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11500);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11518;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11532 = state_11500;
state_11500 = G__11532;
continue;
}
} else
{return ret_value__6342__auto__;
}
break;
}
});
state_machine__6341__auto__ = function(state_11500){
switch(arguments.length){
case 0:
return state_machine__6341__auto____0.call(this);
case 1:
return state_machine__6341__auto____1.call(this,state_11500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6341__auto____0;
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6341__auto____1;
return state_machine__6341__auto__;
})()
;})(switch__6340__auto__,c__6355__auto__))
})();var state__6357__auto__ = (function (){var statearr_11520 = f__6356__auto__.call(null);(statearr_11520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6355__auto__);
return statearr_11520;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6357__auto__);
});})(c__6355__auto__))
);
return c__6355__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj11534 = {};return obj11534;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3541__auto__ = _;if(and__3541__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3541__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4180__auto__ = (((_ == null))?null:_);return (function (){var or__3553__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11536 = {};return obj11536;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11760 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11760 = (function (cs,ch,mult,meta11761){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11761 = meta11761;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11760.cljs$lang$type = true;
cljs.core.async.t11760.cljs$lang$ctorStr = "cljs.core.async/t11760";
cljs.core.async.t11760.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t11760");
});})(cs))
;
cljs.core.async.t11760.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11760.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11760.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11760.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11760.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11760.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11760.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11762){var self__ = this;
var _11762__$1 = this;return self__.meta11761;
});})(cs))
;
cljs.core.async.t11760.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11762,meta11761__$1){var self__ = this;
var _11762__$1 = this;return (new cljs.core.async.t11760(self__.cs,self__.ch,self__.mult,meta11761__$1));
});})(cs))
;
cljs.core.async.__GT_t11760 = ((function (cs){
return (function __GT_t11760(cs__$1,ch__$1,mult__$1,meta11761){return (new cljs.core.async.t11760(cs__$1,ch__$1,mult__$1,meta11761));
});})(cs))
;
}
return (new cljs.core.async.t11760(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6355__auto___11983 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6355__auto___11983,cs,m,dchan,dctr,done){
return (function (){var f__6356__auto__ = (function (){var switch__6340__auto__ = ((function (c__6355__auto___11983,cs,m,dchan,dctr,done){
return (function (state_11897){var state_val_11898 = (state_11897[(1)]);if((state_val_11898 === (7)))
{var inst_11893 = (state_11897[(2)]);var state_11897__$1 = state_11897;var statearr_11899_11984 = state_11897__$1;(statearr_11899_11984[(2)] = inst_11893);
(statearr_11899_11984[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11898 === (20)))
{var inst_11794 = (state_11897[(7)]);var inst_11804 = cljs.core.first.call(null,inst_11794);var inst_11805 = cljs.core.nth.call(null,inst_11804,(0),null);var inst_11806 = cljs.core.nth.call(null,inst_11804,(1),null);var state_11897__$1 = (function (){var statearr_11900 = state_11897;(statearr_11900[(8)] = inst_11805);
return statearr_11900;
})();if(cljs.core.truth_(inst_11806))
{var statearr_11901_11985 = state_11897__$1;(statearr_11901_11985[(1)] = (22));
} else
{var statearr_11902_11986 = state_11897__$1;(statearr_11902_11986[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11898 === (27)))
{var inst_11834 = (state_11897[(9)]);var inst_11836 = (state_11897[(10)]);var inst_11841 = cljs.core._nth.call(null,inst_11834,inst_11836);var state_11897__$1 = (function (){var statearr_11903 = state_11897;(statearr_11903[(11)] = inst_11841);
return statearr_11903;
})();var statearr_11904_11987 = state_11897__$1;(statearr_11904_11987[(2)] = null);
(statearr_11904_11987[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11898 === (1)))
{var state_11897__$1 = state_11897;var statearr_11905_11988 = state_11897__$1;(statearr_11905_11988[(2)] = null);
(statearr_11905_11988[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11898 === (24)))
{var inst_11794 = (state_11897[(7)]);var inst_11811 = (state_11897[(2)]);var inst_11812 = cljs.core.next.call(null,inst_11794);var inst_11774 = inst_11812;var inst_11775 = null;var inst_11776 = (0);var inst_11777 = (0);var state_11897__$1 = (function (){var statearr_11906 = state_11897;(statearr_11906[(12)] = inst_11775);
(statearr_11906[(13)] = inst_11774);
(statearr_11906[(14)] = inst_11777);
(statearr_11906[(15)] = inst_11811);
(statearr_11906[(16)] = inst_11776);
return statearr_11906;
})();var statearr_11907_11989 = state_11897__$1;(statearr_11907_11989[(2)] = null);
(statearr_11907_11989[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11898 === (39)))
{var inst_11854 = (state_11897[(17)]);var inst_11872 = (state_11897[(2)]);var inst_11873 = cljs.core.next.call(null,inst_11854);var inst_11833 = inst_11873;var inst_11834 = null;var inst_11835 = (0);var inst_11836 = (0);var state_11897__$1 = (function (){var statearr_11911 = state_11897;(statearr_11911[(9)] = inst_11834);
(statearr_11911[(18)] = inst_11872);
(statearr_11911[(19)] = inst_11833);
(statearr_11911[(20)] = inst_11835);
(statearr_11911[(10)] = inst_11836);
return statearr_11911;
})();var statearr_11912_11990 = state_11897__$1;(statearr_11912_11990[(2)] = null);
(statearr_11912_11990[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11898 === (4)))
{var inst_11765 = (state_11897[(21)]);var inst_11765__$1 = (state_11897[(2)]);var inst_11766 = (inst_11765__$1 == null);var state_11897__$1 = (function (){var statearr_11913 = state_11897;(statearr_11913[(21)] = inst_11765__$1);
return statearr_11913;
})();if(cljs.core.truth_(inst_11766))
{var statearr_11914_11991 = state_11897__$1;(statearr_11914_11991[(1)] = (5));
} else
{var statearr_11915_11992 = state_11897__$1;(statearr_11915_11992[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11898 === (15)))
{var inst_11775 = (state_11897[(12)]);var inst_11774 = (state_11897[(13)]);var inst_11777 = (state_11897[(14)]);var inst_11776 = (state_11897[(16)]);var inst_11790 = (state_11897[(2)]);var inst_11791 = (inst_11777 + (1));var tmp11908 = inst_11775;var tmp11909 = inst_11774;var tmp11910 = inst_11776;var inst_11774__$1 = tmp11909;var inst_11775__$1 = tmp11908;var inst_11776__$1 = tmp11910;var inst_11777__$1 = inst_11791;var state_11897__$1 = (function (){var statearr_11916 = state_11897;(statearr_11916[(12)] = inst_11775__$1);
(statearr_11916[(13)] = inst_11774__$1);
(statearr_11916[(14)] = inst_11777__$1);
(statearr_11916[(16)] = inst_11776__$1);
(statearr_11916[(22)] = inst_11790);
return statearr_11916;
})();var statearr_11917_11993 = state_11897__$1;(statearr_11917_11993[(2)] = null);
(statearr_11917_11993[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11898 === (21)))
{var inst_11815 = (state_11897[(2)]);var state_11897__$1 = state_11897;var statearr_11918_11994 = state_11897__$1;(statearr_11918_11994[(2)] = inst_11815);
(statearr_11918_11994[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11898 === (31)))
{var inst_11841 = (state_11897[(11)]);var inst_11842 = (state_11897[(2)]);var inst_11843 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11844 = cljs.core.async.untap_STAR_.call(null,m,inst_11841);var state_11897__$1 = (function (){var statearr_11919 = state_11897;(statearr_11919[(23)] = inst_11842);
(statearr_11919[(24)] = inst_11843);
return statearr_11919;
})();var statearr_11920_11995 = state_11897__$1;(statearr_11920_11995[(2)] = inst_11844);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11897__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11898 === (32)))
{var inst_11765 = (state_11897[(21)]);var inst_11841 = (state_11897[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11897,(31),Object,null,(30));var inst_11848 = cljs.core.async.put_BANG_.call(null,inst_11841,inst_11765,done);var state_11897__$1 = state_11897;var statearr_11921_11996 = state_11897__$1;(statearr_11921_11996[(2)] = inst_11848);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11897__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11898 === (40)))
{var inst_11863 = (state_11897[(25)]);var inst_11864 = (state_11897[(2)]);var inst_11865 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11866 = cljs.core.async.untap_STAR_.call(null,m,inst_11863);var state_11897__$1 = (function (){var statearr_11922 = state_11897;(statearr_11922[(26)] = inst_11865);
(statearr_11922[(27)] = inst_11864);
return statearr_11922;
})();var statearr_11923_11997 = state_11897__$1;(statearr_11923_11997[(2)] = inst_11866);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11897__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11898 === (33)))
{var inst_11854 = (state_11897[(17)]);var inst_11856 = cljs.core.chunked_seq_QMARK_.call(null,inst_11854);var state_11897__$1 = state_11897;if(inst_11856)
{var statearr_11924_11998 = state_11897__$1;(statearr_11924_11998[(1)] = (36));
} else
{var statearr_11925_11999 = state_11897__$1;(statearr_11925_11999[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11898 === (13)))
{var inst_11784 = (state_11897[(28)]);var inst_11787 = cljs.core.async.close_BANG_.call(null,inst_11784);var state_11897__$1 = state_11897;var statearr_11926_12000 = state_11897__$1;(statearr_11926_12000[(2)] = inst_11787);
(statearr_11926_12000[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11898 === (22)))
{var inst_11805 = (state_11897[(8)]);var inst_11808 = cljs.core.async.close_BANG_.call(null,inst_11805);var state_11897__$1 = state_11897;var statearr_11927_12001 = state_11897__$1;(statearr_11927_12001[(2)] = inst_11808);
(statearr_11927_12001[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11898 === (36)))
{var inst_11854 = (state_11897[(17)]);var inst_11858 = cljs.core.chunk_first.call(null,inst_11854);var inst_11859 = cljs.core.chunk_rest.call(null,inst_11854);var inst_11860 = cljs.core.count.call(null,inst_11858);var inst_11833 = inst_11859;var inst_11834 = inst_11858;var inst_11835 = inst_11860;var inst_11836 = (0);var state_11897__$1 = (function (){var statearr_11928 = state_11897;(statearr_11928[(9)] = inst_11834);
(statearr_11928[(19)] = inst_11833);
(statearr_11928[(20)] = inst_11835);
(statearr_11928[(10)] = inst_11836);
return statearr_11928;
})();var statearr_11929_12002 = state_11897__$1;(statearr_11929_12002[(2)] = null);
(statearr_11929_12002[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11898 === (41)))
{var inst_11765 = (state_11897[(21)]);var inst_11863 = (state_11897[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11897,(40),Object,null,(39));var inst_11870 = cljs.core.async.put_BANG_.call(null,inst_11863,inst_11765,done);var state_11897__$1 = state_11897;var statearr_11930_12003 = state_11897__$1;(statearr_11930_12003[(2)] = inst_11870);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11897__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11898 === (43)))
{var state_11897__$1 = state_11897;var statearr_11931_12004 = state_11897__$1;(statearr_11931_12004[(2)] = null);
(statearr_11931_12004[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11898 === (29)))
{var inst_11881 = (state_11897[(2)]);var state_11897__$1 = state_11897;var statearr_11932_12005 = state_11897__$1;(statearr_11932_12005[(2)] = inst_11881);
(statearr_11932_12005[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11898 === (44)))
{var inst_11890 = (state_11897[(2)]);var state_11897__$1 = (function (){var statearr_11933 = state_11897;(statearr_11933[(29)] = inst_11890);
return statearr_11933;
})();var statearr_11934_12006 = state_11897__$1;(statearr_11934_12006[(2)] = null);
(statearr_11934_12006[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11898 === (6)))
{var inst_11825 = (state_11897[(30)]);var inst_11824 = cljs.core.deref.call(null,cs);var inst_11825__$1 = cljs.core.keys.call(null,inst_11824);var inst_11826 = cljs.core.count.call(null,inst_11825__$1);var inst_11827 = cljs.core.reset_BANG_.call(null,dctr,inst_11826);var inst_11832 = cljs.core.seq.call(null,inst_11825__$1);var inst_11833 = inst_11832;var inst_11834 = null;var inst_11835 = (0);var inst_11836 = (0);var state_11897__$1 = (function (){var statearr_11935 = state_11897;(statearr_11935[(9)] = inst_11834);
(statearr_11935[(30)] = inst_11825__$1);
(statearr_11935[(31)] = inst_11827);
(statearr_11935[(19)] = inst_11833);
(statearr_11935[(20)] = inst_11835);
(statearr_11935[(10)] = inst_11836);
return statearr_11935;
})();var statearr_11936_12007 = state_11897__$1;(statearr_11936_12007[(2)] = null);
(statearr_11936_12007[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11898 === (28)))
{var inst_11833 = (state_11897[(19)]);var inst_11854 = (state_11897[(17)]);var inst_11854__$1 = cljs.core.seq.call(null,inst_11833);var state_11897__$1 = (function (){var statearr_11937 = state_11897;(statearr_11937[(17)] = inst_11854__$1);
return statearr_11937;
})();if(inst_11854__$1)
{var statearr_11938_12008 = state_11897__$1;(statearr_11938_12008[(1)] = (33));
} else
{var statearr_11939_12009 = state_11897__$1;(statearr_11939_12009[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11898 === (25)))
{var inst_11835 = (state_11897[(20)]);var inst_11836 = (state_11897[(10)]);var inst_11838 = (inst_11836 < inst_11835);var inst_11839 = inst_11838;var state_11897__$1 = state_11897;if(cljs.core.truth_(inst_11839))
{var statearr_11940_12010 = state_11897__$1;(statearr_11940_12010[(1)] = (27));
} else
{var statearr_11941_12011 = state_11897__$1;(statearr_11941_12011[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11898 === (34)))
{var state_11897__$1 = state_11897;var statearr_11942_12012 = state_11897__$1;(statearr_11942_12012[(2)] = null);
(statearr_11942_12012[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11898 === (17)))
{var state_11897__$1 = state_11897;var statearr_11943_12013 = state_11897__$1;(statearr_11943_12013[(2)] = null);
(statearr_11943_12013[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11898 === (3)))
{var inst_11895 = (state_11897[(2)]);var state_11897__$1 = state_11897;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11897__$1,inst_11895);
} else
{if((state_val_11898 === (12)))
{var inst_11820 = (state_11897[(2)]);var state_11897__$1 = state_11897;var statearr_11944_12014 = state_11897__$1;(statearr_11944_12014[(2)] = inst_11820);
(statearr_11944_12014[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11898 === (2)))
{var state_11897__$1 = state_11897;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11897__$1,(4),ch);
} else
{if((state_val_11898 === (23)))
{var state_11897__$1 = state_11897;var statearr_11945_12015 = state_11897__$1;(statearr_11945_12015[(2)] = null);
(statearr_11945_12015[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11898 === (35)))
{var inst_11879 = (state_11897[(2)]);var state_11897__$1 = state_11897;var statearr_11946_12016 = state_11897__$1;(statearr_11946_12016[(2)] = inst_11879);
(statearr_11946_12016[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11898 === (19)))
{var inst_11794 = (state_11897[(7)]);var inst_11798 = cljs.core.chunk_first.call(null,inst_11794);var inst_11799 = cljs.core.chunk_rest.call(null,inst_11794);var inst_11800 = cljs.core.count.call(null,inst_11798);var inst_11774 = inst_11799;var inst_11775 = inst_11798;var inst_11776 = inst_11800;var inst_11777 = (0);var state_11897__$1 = (function (){var statearr_11947 = state_11897;(statearr_11947[(12)] = inst_11775);
(statearr_11947[(13)] = inst_11774);
(statearr_11947[(14)] = inst_11777);
(statearr_11947[(16)] = inst_11776);
return statearr_11947;
})();var statearr_11948_12017 = state_11897__$1;(statearr_11948_12017[(2)] = null);
(statearr_11948_12017[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11898 === (11)))
{var inst_11794 = (state_11897[(7)]);var inst_11774 = (state_11897[(13)]);var inst_11794__$1 = cljs.core.seq.call(null,inst_11774);var state_11897__$1 = (function (){var statearr_11949 = state_11897;(statearr_11949[(7)] = inst_11794__$1);
return statearr_11949;
})();if(inst_11794__$1)
{var statearr_11950_12018 = state_11897__$1;(statearr_11950_12018[(1)] = (16));
} else
{var statearr_11951_12019 = state_11897__$1;(statearr_11951_12019[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11898 === (9)))
{var inst_11822 = (state_11897[(2)]);var state_11897__$1 = state_11897;var statearr_11952_12020 = state_11897__$1;(statearr_11952_12020[(2)] = inst_11822);
(statearr_11952_12020[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11898 === (5)))
{var inst_11772 = cljs.core.deref.call(null,cs);var inst_11773 = cljs.core.seq.call(null,inst_11772);var inst_11774 = inst_11773;var inst_11775 = null;var inst_11776 = (0);var inst_11777 = (0);var state_11897__$1 = (function (){var statearr_11953 = state_11897;(statearr_11953[(12)] = inst_11775);
(statearr_11953[(13)] = inst_11774);
(statearr_11953[(14)] = inst_11777);
(statearr_11953[(16)] = inst_11776);
return statearr_11953;
})();var statearr_11954_12021 = state_11897__$1;(statearr_11954_12021[(2)] = null);
(statearr_11954_12021[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11898 === (14)))
{var state_11897__$1 = state_11897;var statearr_11955_12022 = state_11897__$1;(statearr_11955_12022[(2)] = null);
(statearr_11955_12022[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11898 === (45)))
{var inst_11887 = (state_11897[(2)]);var state_11897__$1 = state_11897;var statearr_11956_12023 = state_11897__$1;(statearr_11956_12023[(2)] = inst_11887);
(statearr_11956_12023[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11898 === (26)))
{var inst_11825 = (state_11897[(30)]);var inst_11883 = (state_11897[(2)]);var inst_11884 = cljs.core.seq.call(null,inst_11825);var state_11897__$1 = (function (){var statearr_11957 = state_11897;(statearr_11957[(32)] = inst_11883);
return statearr_11957;
})();if(inst_11884)
{var statearr_11958_12024 = state_11897__$1;(statearr_11958_12024[(1)] = (42));
} else
{var statearr_11959_12025 = state_11897__$1;(statearr_11959_12025[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11898 === (16)))
{var inst_11794 = (state_11897[(7)]);var inst_11796 = cljs.core.chunked_seq_QMARK_.call(null,inst_11794);var state_11897__$1 = state_11897;if(inst_11796)
{var statearr_11963_12026 = state_11897__$1;(statearr_11963_12026[(1)] = (19));
} else
{var statearr_11964_12027 = state_11897__$1;(statearr_11964_12027[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11898 === (38)))
{var inst_11876 = (state_11897[(2)]);var state_11897__$1 = state_11897;var statearr_11965_12028 = state_11897__$1;(statearr_11965_12028[(2)] = inst_11876);
(statearr_11965_12028[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11898 === (30)))
{var inst_11834 = (state_11897[(9)]);var inst_11833 = (state_11897[(19)]);var inst_11835 = (state_11897[(20)]);var inst_11836 = (state_11897[(10)]);var inst_11850 = (state_11897[(2)]);var inst_11851 = (inst_11836 + (1));var tmp11960 = inst_11834;var tmp11961 = inst_11833;var tmp11962 = inst_11835;var inst_11833__$1 = tmp11961;var inst_11834__$1 = tmp11960;var inst_11835__$1 = tmp11962;var inst_11836__$1 = inst_11851;var state_11897__$1 = (function (){var statearr_11966 = state_11897;(statearr_11966[(9)] = inst_11834__$1);
(statearr_11966[(33)] = inst_11850);
(statearr_11966[(19)] = inst_11833__$1);
(statearr_11966[(20)] = inst_11835__$1);
(statearr_11966[(10)] = inst_11836__$1);
return statearr_11966;
})();var statearr_11967_12029 = state_11897__$1;(statearr_11967_12029[(2)] = null);
(statearr_11967_12029[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11898 === (10)))
{var inst_11775 = (state_11897[(12)]);var inst_11777 = (state_11897[(14)]);var inst_11783 = cljs.core._nth.call(null,inst_11775,inst_11777);var inst_11784 = cljs.core.nth.call(null,inst_11783,(0),null);var inst_11785 = cljs.core.nth.call(null,inst_11783,(1),null);var state_11897__$1 = (function (){var statearr_11968 = state_11897;(statearr_11968[(28)] = inst_11784);
return statearr_11968;
})();if(cljs.core.truth_(inst_11785))
{var statearr_11969_12030 = state_11897__$1;(statearr_11969_12030[(1)] = (13));
} else
{var statearr_11970_12031 = state_11897__$1;(statearr_11970_12031[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11898 === (18)))
{var inst_11818 = (state_11897[(2)]);var state_11897__$1 = state_11897;var statearr_11971_12032 = state_11897__$1;(statearr_11971_12032[(2)] = inst_11818);
(statearr_11971_12032[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11898 === (42)))
{var state_11897__$1 = state_11897;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11897__$1,(45),dchan);
} else
{if((state_val_11898 === (37)))
{var inst_11854 = (state_11897[(17)]);var inst_11863 = cljs.core.first.call(null,inst_11854);var state_11897__$1 = (function (){var statearr_11972 = state_11897;(statearr_11972[(25)] = inst_11863);
return statearr_11972;
})();var statearr_11973_12033 = state_11897__$1;(statearr_11973_12033[(2)] = null);
(statearr_11973_12033[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11898 === (8)))
{var inst_11777 = (state_11897[(14)]);var inst_11776 = (state_11897[(16)]);var inst_11779 = (inst_11777 < inst_11776);var inst_11780 = inst_11779;var state_11897__$1 = state_11897;if(cljs.core.truth_(inst_11780))
{var statearr_11974_12034 = state_11897__$1;(statearr_11974_12034[(1)] = (10));
} else
{var statearr_11975_12035 = state_11897__$1;(statearr_11975_12035[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6355__auto___11983,cs,m,dchan,dctr,done))
;return ((function (switch__6340__auto__,c__6355__auto___11983,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6341__auto__ = null;
var state_machine__6341__auto____0 = (function (){var statearr_11979 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11979[(0)] = state_machine__6341__auto__);
(statearr_11979[(1)] = (1));
return statearr_11979;
});
var state_machine__6341__auto____1 = (function (state_11897){while(true){
var ret_value__6342__auto__ = (function (){try{while(true){
var result__6343__auto__ = switch__6340__auto__.call(null,state_11897);if(cljs.core.keyword_identical_QMARK_.call(null,result__6343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6343__auto__;
}
break;
}
}catch (e11980){if((e11980 instanceof Object))
{var ex__6344__auto__ = e11980;var statearr_11981_12036 = state_11897;(statearr_11981_12036[(5)] = ex__6344__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11897);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11980;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12037 = state_11897;
state_11897 = G__12037;
continue;
}
} else
{return ret_value__6342__auto__;
}
break;
}
});
state_machine__6341__auto__ = function(state_11897){
switch(arguments.length){
case 0:
return state_machine__6341__auto____0.call(this);
case 1:
return state_machine__6341__auto____1.call(this,state_11897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6341__auto____0;
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6341__auto____1;
return state_machine__6341__auto__;
})()
;})(switch__6340__auto__,c__6355__auto___11983,cs,m,dchan,dctr,done))
})();var state__6357__auto__ = (function (){var statearr_11982 = f__6356__auto__.call(null);(statearr_11982[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6355__auto___11983);
return statearr_11982;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6357__auto__);
});})(c__6355__auto___11983,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj12039 = {};return obj12039;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3541__auto__ = m;if(and__3541__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4180__auto__ = (((m == null))?null:m);return (function (){var or__3553__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12149 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12149 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12150){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12150 = meta12150;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12149.cljs$lang$type = true;
cljs.core.async.t12149.cljs$lang$ctorStr = "cljs.core.async/t12149";
cljs.core.async.t12149.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t12149");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12149.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12149.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12149.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12149.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12149.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12149.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12149.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12149.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12149.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12151){var self__ = this;
var _12151__$1 = this;return self__.meta12150;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12151,meta12150__$1){var self__ = this;
var _12151__$1 = this;return (new cljs.core.async.t12149(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12150__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12149 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12149(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12150){return (new cljs.core.async.t12149(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12150));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12149(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6355__auto___12258 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6355__auto___12258,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6356__auto__ = (function (){var switch__6340__auto__ = ((function (c__6355__auto___12258,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12216){var state_val_12217 = (state_12216[(1)]);if((state_val_12217 === (7)))
{var inst_12165 = (state_12216[(7)]);var inst_12170 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12165);var state_12216__$1 = state_12216;var statearr_12218_12259 = state_12216__$1;(statearr_12218_12259[(2)] = inst_12170);
(statearr_12218_12259[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12217 === (20)))
{var inst_12180 = (state_12216[(8)]);var state_12216__$1 = state_12216;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12216__$1,(23),out,inst_12180);
} else
{if((state_val_12217 === (1)))
{var inst_12155 = (state_12216[(9)]);var inst_12155__$1 = calc_state.call(null);var inst_12156 = cljs.core.seq_QMARK_.call(null,inst_12155__$1);var state_12216__$1 = (function (){var statearr_12219 = state_12216;(statearr_12219[(9)] = inst_12155__$1);
return statearr_12219;
})();if(inst_12156)
{var statearr_12220_12260 = state_12216__$1;(statearr_12220_12260[(1)] = (2));
} else
{var statearr_12221_12261 = state_12216__$1;(statearr_12221_12261[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12217 === (4)))
{var inst_12155 = (state_12216[(9)]);var inst_12161 = (state_12216[(2)]);var inst_12162 = cljs.core.get.call(null,inst_12161,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12163 = cljs.core.get.call(null,inst_12161,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12164 = cljs.core.get.call(null,inst_12161,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_12165 = inst_12155;var state_12216__$1 = (function (){var statearr_12222 = state_12216;(statearr_12222[(10)] = inst_12164);
(statearr_12222[(11)] = inst_12163);
(statearr_12222[(7)] = inst_12165);
(statearr_12222[(12)] = inst_12162);
return statearr_12222;
})();var statearr_12223_12262 = state_12216__$1;(statearr_12223_12262[(2)] = null);
(statearr_12223_12262[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12217 === (15)))
{var state_12216__$1 = state_12216;var statearr_12224_12263 = state_12216__$1;(statearr_12224_12263[(2)] = null);
(statearr_12224_12263[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12217 === (21)))
{var state_12216__$1 = state_12216;var statearr_12225_12264 = state_12216__$1;(statearr_12225_12264[(2)] = null);
(statearr_12225_12264[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12217 === (13)))
{var inst_12212 = (state_12216[(2)]);var state_12216__$1 = state_12216;var statearr_12226_12265 = state_12216__$1;(statearr_12226_12265[(2)] = inst_12212);
(statearr_12226_12265[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12217 === (22)))
{var inst_12173 = (state_12216[(13)]);var inst_12209 = (state_12216[(2)]);var inst_12165 = inst_12173;var state_12216__$1 = (function (){var statearr_12227 = state_12216;(statearr_12227[(14)] = inst_12209);
(statearr_12227[(7)] = inst_12165);
return statearr_12227;
})();var statearr_12228_12266 = state_12216__$1;(statearr_12228_12266[(2)] = null);
(statearr_12228_12266[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12217 === (6)))
{var inst_12214 = (state_12216[(2)]);var state_12216__$1 = state_12216;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12216__$1,inst_12214);
} else
{if((state_val_12217 === (17)))
{var inst_12195 = (state_12216[(15)]);var state_12216__$1 = state_12216;var statearr_12229_12267 = state_12216__$1;(statearr_12229_12267[(2)] = inst_12195);
(statearr_12229_12267[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12217 === (3)))
{var inst_12155 = (state_12216[(9)]);var state_12216__$1 = state_12216;var statearr_12230_12268 = state_12216__$1;(statearr_12230_12268[(2)] = inst_12155);
(statearr_12230_12268[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12217 === (12)))
{var inst_12181 = (state_12216[(16)]);var inst_12195 = (state_12216[(15)]);var inst_12176 = (state_12216[(17)]);var inst_12195__$1 = inst_12176.call(null,inst_12181);var state_12216__$1 = (function (){var statearr_12231 = state_12216;(statearr_12231[(15)] = inst_12195__$1);
return statearr_12231;
})();if(cljs.core.truth_(inst_12195__$1))
{var statearr_12232_12269 = state_12216__$1;(statearr_12232_12269[(1)] = (17));
} else
{var statearr_12233_12270 = state_12216__$1;(statearr_12233_12270[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12217 === (2)))
{var inst_12155 = (state_12216[(9)]);var inst_12158 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12155);var state_12216__$1 = state_12216;var statearr_12234_12271 = state_12216__$1;(statearr_12234_12271[(2)] = inst_12158);
(statearr_12234_12271[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12217 === (23)))
{var inst_12206 = (state_12216[(2)]);var state_12216__$1 = state_12216;var statearr_12235_12272 = state_12216__$1;(statearr_12235_12272[(2)] = inst_12206);
(statearr_12235_12272[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12217 === (19)))
{var inst_12203 = (state_12216[(2)]);var state_12216__$1 = state_12216;if(cljs.core.truth_(inst_12203))
{var statearr_12236_12273 = state_12216__$1;(statearr_12236_12273[(1)] = (20));
} else
{var statearr_12237_12274 = state_12216__$1;(statearr_12237_12274[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12217 === (11)))
{var inst_12180 = (state_12216[(8)]);var inst_12186 = (inst_12180 == null);var state_12216__$1 = state_12216;if(cljs.core.truth_(inst_12186))
{var statearr_12238_12275 = state_12216__$1;(statearr_12238_12275[(1)] = (14));
} else
{var statearr_12239_12276 = state_12216__$1;(statearr_12239_12276[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12217 === (9)))
{var inst_12173 = (state_12216[(13)]);var inst_12173__$1 = (state_12216[(2)]);var inst_12174 = cljs.core.get.call(null,inst_12173__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12175 = cljs.core.get.call(null,inst_12173__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12176 = cljs.core.get.call(null,inst_12173__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_12216__$1 = (function (){var statearr_12240 = state_12216;(statearr_12240[(13)] = inst_12173__$1);
(statearr_12240[(18)] = inst_12175);
(statearr_12240[(17)] = inst_12176);
return statearr_12240;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12216__$1,(10),inst_12174);
} else
{if((state_val_12217 === (5)))
{var inst_12165 = (state_12216[(7)]);var inst_12168 = cljs.core.seq_QMARK_.call(null,inst_12165);var state_12216__$1 = state_12216;if(inst_12168)
{var statearr_12241_12277 = state_12216__$1;(statearr_12241_12277[(1)] = (7));
} else
{var statearr_12242_12278 = state_12216__$1;(statearr_12242_12278[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12217 === (14)))
{var inst_12181 = (state_12216[(16)]);var inst_12188 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12181);var state_12216__$1 = state_12216;var statearr_12243_12279 = state_12216__$1;(statearr_12243_12279[(2)] = inst_12188);
(statearr_12243_12279[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12217 === (16)))
{var inst_12191 = (state_12216[(2)]);var inst_12192 = calc_state.call(null);var inst_12165 = inst_12192;var state_12216__$1 = (function (){var statearr_12244 = state_12216;(statearr_12244[(19)] = inst_12191);
(statearr_12244[(7)] = inst_12165);
return statearr_12244;
})();var statearr_12245_12280 = state_12216__$1;(statearr_12245_12280[(2)] = null);
(statearr_12245_12280[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12217 === (10)))
{var inst_12181 = (state_12216[(16)]);var inst_12180 = (state_12216[(8)]);var inst_12179 = (state_12216[(2)]);var inst_12180__$1 = cljs.core.nth.call(null,inst_12179,(0),null);var inst_12181__$1 = cljs.core.nth.call(null,inst_12179,(1),null);var inst_12182 = (inst_12180__$1 == null);var inst_12183 = cljs.core._EQ_.call(null,inst_12181__$1,change);var inst_12184 = (inst_12182) || (inst_12183);var state_12216__$1 = (function (){var statearr_12246 = state_12216;(statearr_12246[(16)] = inst_12181__$1);
(statearr_12246[(8)] = inst_12180__$1);
return statearr_12246;
})();if(cljs.core.truth_(inst_12184))
{var statearr_12247_12281 = state_12216__$1;(statearr_12247_12281[(1)] = (11));
} else
{var statearr_12248_12282 = state_12216__$1;(statearr_12248_12282[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12217 === (18)))
{var inst_12181 = (state_12216[(16)]);var inst_12175 = (state_12216[(18)]);var inst_12176 = (state_12216[(17)]);var inst_12198 = cljs.core.empty_QMARK_.call(null,inst_12176);var inst_12199 = inst_12175.call(null,inst_12181);var inst_12200 = cljs.core.not.call(null,inst_12199);var inst_12201 = (inst_12198) && (inst_12200);var state_12216__$1 = state_12216;var statearr_12249_12283 = state_12216__$1;(statearr_12249_12283[(2)] = inst_12201);
(statearr_12249_12283[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12217 === (8)))
{var inst_12165 = (state_12216[(7)]);var state_12216__$1 = state_12216;var statearr_12250_12284 = state_12216__$1;(statearr_12250_12284[(2)] = inst_12165);
(statearr_12250_12284[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6355__auto___12258,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6340__auto__,c__6355__auto___12258,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6341__auto__ = null;
var state_machine__6341__auto____0 = (function (){var statearr_12254 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12254[(0)] = state_machine__6341__auto__);
(statearr_12254[(1)] = (1));
return statearr_12254;
});
var state_machine__6341__auto____1 = (function (state_12216){while(true){
var ret_value__6342__auto__ = (function (){try{while(true){
var result__6343__auto__ = switch__6340__auto__.call(null,state_12216);if(cljs.core.keyword_identical_QMARK_.call(null,result__6343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6343__auto__;
}
break;
}
}catch (e12255){if((e12255 instanceof Object))
{var ex__6344__auto__ = e12255;var statearr_12256_12285 = state_12216;(statearr_12256_12285[(5)] = ex__6344__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12216);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12255;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12286 = state_12216;
state_12216 = G__12286;
continue;
}
} else
{return ret_value__6342__auto__;
}
break;
}
});
state_machine__6341__auto__ = function(state_12216){
switch(arguments.length){
case 0:
return state_machine__6341__auto____0.call(this);
case 1:
return state_machine__6341__auto____1.call(this,state_12216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6341__auto____0;
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6341__auto____1;
return state_machine__6341__auto__;
})()
;})(switch__6340__auto__,c__6355__auto___12258,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6357__auto__ = (function (){var statearr_12257 = f__6356__auto__.call(null);(statearr_12257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6355__auto___12258);
return statearr_12257;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6357__auto__);
});})(c__6355__auto___12258,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj12288 = {};return obj12288;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3541__auto__ = p;if(and__3541__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3541__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4180__auto__ = (((p == null))?null:p);return (function (){var or__3553__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3541__auto__ = p;if(and__3541__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3541__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4180__auto__ = (((p == null))?null:p);return (function (){var or__3553__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3541__auto__ = p;if(and__3541__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3541__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4180__auto__ = (((p == null))?null:p);return (function (){var or__3553__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3541__auto__ = p;if(and__3541__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3541__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4180__auto__ = (((p == null))?null:p);return (function (){var or__3553__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4180__auto__)]);if(or__3553__auto__)
{return or__3553__auto__;
} else
{var or__3553__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3553__auto____$1)
{return or__3553__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3553__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3553__auto__))
{return or__3553__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3553__auto__,mults){
return (function (p1__12289_SHARP_){if(cljs.core.truth_(p1__12289_SHARP_.call(null,topic)))
{return p1__12289_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12289_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3553__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12414 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12414 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12415){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12415 = meta12415;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12414.cljs$lang$type = true;
cljs.core.async.t12414.cljs$lang$ctorStr = "cljs.core.async/t12414";
cljs.core.async.t12414.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4120__auto__,writer__4121__auto__,opt__4122__auto__){return cljs.core._write.call(null,writer__4121__auto__,"cljs.core.async/t12414");
});})(mults,ensure_mult))
;
cljs.core.async.t12414.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12414.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12414.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12414.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12414.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12414.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12414.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12414.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12416){var self__ = this;
var _12416__$1 = this;return self__.meta12415;
});})(mults,ensure_mult))
;
cljs.core.async.t12414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12416,meta12415__$1){var self__ = this;
var _12416__$1 = this;return (new cljs.core.async.t12414(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12415__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12414 = ((function (mults,ensure_mult){
return (function __GT_t12414(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12415){return (new cljs.core.async.t12414(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12415));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12414(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6355__auto___12538 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6355__auto___12538,mults,ensure_mult,p){
return (function (){var f__6356__auto__ = (function (){var switch__6340__auto__ = ((function (c__6355__auto___12538,mults,ensure_mult,p){
return (function (state_12490){var state_val_12491 = (state_12490[(1)]);if((state_val_12491 === (7)))
{var inst_12486 = (state_12490[(2)]);var state_12490__$1 = state_12490;var statearr_12492_12539 = state_12490__$1;(statearr_12492_12539[(2)] = inst_12486);
(statearr_12492_12539[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (20)))
{var state_12490__$1 = state_12490;var statearr_12493_12540 = state_12490__$1;(statearr_12493_12540[(2)] = null);
(statearr_12493_12540[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (1)))
{var state_12490__$1 = state_12490;var statearr_12494_12541 = state_12490__$1;(statearr_12494_12541[(2)] = null);
(statearr_12494_12541[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (24)))
{var inst_12419 = (state_12490[(7)]);var inst_12469 = (state_12490[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12490,(23),Object,null,(22));var inst_12476 = cljs.core.async.muxch_STAR_.call(null,inst_12469);var state_12490__$1 = state_12490;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12490__$1,(25),inst_12476,inst_12419);
} else
{if((state_val_12491 === (4)))
{var inst_12419 = (state_12490[(7)]);var inst_12419__$1 = (state_12490[(2)]);var inst_12420 = (inst_12419__$1 == null);var state_12490__$1 = (function (){var statearr_12495 = state_12490;(statearr_12495[(7)] = inst_12419__$1);
return statearr_12495;
})();if(cljs.core.truth_(inst_12420))
{var statearr_12496_12542 = state_12490__$1;(statearr_12496_12542[(1)] = (5));
} else
{var statearr_12497_12543 = state_12490__$1;(statearr_12497_12543[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (15)))
{var inst_12461 = (state_12490[(2)]);var state_12490__$1 = state_12490;var statearr_12498_12544 = state_12490__$1;(statearr_12498_12544[(2)] = inst_12461);
(statearr_12498_12544[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (21)))
{var inst_12483 = (state_12490[(2)]);var state_12490__$1 = (function (){var statearr_12499 = state_12490;(statearr_12499[(9)] = inst_12483);
return statearr_12499;
})();var statearr_12500_12545 = state_12490__$1;(statearr_12500_12545[(2)] = null);
(statearr_12500_12545[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (13)))
{var inst_12443 = (state_12490[(10)]);var inst_12445 = cljs.core.chunked_seq_QMARK_.call(null,inst_12443);var state_12490__$1 = state_12490;if(inst_12445)
{var statearr_12501_12546 = state_12490__$1;(statearr_12501_12546[(1)] = (16));
} else
{var statearr_12502_12547 = state_12490__$1;(statearr_12502_12547[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (22)))
{var inst_12480 = (state_12490[(2)]);var state_12490__$1 = state_12490;var statearr_12503_12548 = state_12490__$1;(statearr_12503_12548[(2)] = inst_12480);
(statearr_12503_12548[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (6)))
{var inst_12419 = (state_12490[(7)]);var inst_12467 = (state_12490[(11)]);var inst_12469 = (state_12490[(8)]);var inst_12467__$1 = topic_fn.call(null,inst_12419);var inst_12468 = cljs.core.deref.call(null,mults);var inst_12469__$1 = cljs.core.get.call(null,inst_12468,inst_12467__$1);var state_12490__$1 = (function (){var statearr_12504 = state_12490;(statearr_12504[(11)] = inst_12467__$1);
(statearr_12504[(8)] = inst_12469__$1);
return statearr_12504;
})();if(cljs.core.truth_(inst_12469__$1))
{var statearr_12505_12549 = state_12490__$1;(statearr_12505_12549[(1)] = (19));
} else
{var statearr_12506_12550 = state_12490__$1;(statearr_12506_12550[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (25)))
{var inst_12478 = (state_12490[(2)]);var state_12490__$1 = state_12490;var statearr_12507_12551 = state_12490__$1;(statearr_12507_12551[(2)] = inst_12478);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12490__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (17)))
{var inst_12443 = (state_12490[(10)]);var inst_12452 = cljs.core.first.call(null,inst_12443);var inst_12453 = cljs.core.async.muxch_STAR_.call(null,inst_12452);var inst_12454 = cljs.core.async.close_BANG_.call(null,inst_12453);var inst_12455 = cljs.core.next.call(null,inst_12443);var inst_12429 = inst_12455;var inst_12430 = null;var inst_12431 = (0);var inst_12432 = (0);var state_12490__$1 = (function (){var statearr_12508 = state_12490;(statearr_12508[(12)] = inst_12432);
(statearr_12508[(13)] = inst_12454);
(statearr_12508[(14)] = inst_12431);
(statearr_12508[(15)] = inst_12430);
(statearr_12508[(16)] = inst_12429);
return statearr_12508;
})();var statearr_12509_12552 = state_12490__$1;(statearr_12509_12552[(2)] = null);
(statearr_12509_12552[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (3)))
{var inst_12488 = (state_12490[(2)]);var state_12490__$1 = state_12490;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12490__$1,inst_12488);
} else
{if((state_val_12491 === (12)))
{var inst_12463 = (state_12490[(2)]);var state_12490__$1 = state_12490;var statearr_12510_12553 = state_12490__$1;(statearr_12510_12553[(2)] = inst_12463);
(statearr_12510_12553[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (2)))
{var state_12490__$1 = state_12490;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12490__$1,(4),ch);
} else
{if((state_val_12491 === (23)))
{var inst_12467 = (state_12490[(11)]);var inst_12471 = (state_12490[(2)]);var inst_12472 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12467);var state_12490__$1 = (function (){var statearr_12511 = state_12490;(statearr_12511[(17)] = inst_12471);
return statearr_12511;
})();var statearr_12512_12554 = state_12490__$1;(statearr_12512_12554[(2)] = inst_12472);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12490__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (19)))
{var state_12490__$1 = state_12490;var statearr_12513_12555 = state_12490__$1;(statearr_12513_12555[(2)] = null);
(statearr_12513_12555[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (11)))
{var inst_12443 = (state_12490[(10)]);var inst_12429 = (state_12490[(16)]);var inst_12443__$1 = cljs.core.seq.call(null,inst_12429);var state_12490__$1 = (function (){var statearr_12514 = state_12490;(statearr_12514[(10)] = inst_12443__$1);
return statearr_12514;
})();if(inst_12443__$1)
{var statearr_12515_12556 = state_12490__$1;(statearr_12515_12556[(1)] = (13));
} else
{var statearr_12516_12557 = state_12490__$1;(statearr_12516_12557[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (9)))
{var inst_12465 = (state_12490[(2)]);var state_12490__$1 = state_12490;var statearr_12517_12558 = state_12490__$1;(statearr_12517_12558[(2)] = inst_12465);
(statearr_12517_12558[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (5)))
{var inst_12426 = cljs.core.deref.call(null,mults);var inst_12427 = cljs.core.vals.call(null,inst_12426);var inst_12428 = cljs.core.seq.call(null,inst_12427);var inst_12429 = inst_12428;var inst_12430 = null;var inst_12431 = (0);var inst_12432 = (0);var state_12490__$1 = (function (){var statearr_12518 = state_12490;(statearr_12518[(12)] = inst_12432);
(statearr_12518[(14)] = inst_12431);
(statearr_12518[(15)] = inst_12430);
(statearr_12518[(16)] = inst_12429);
return statearr_12518;
})();var statearr_12519_12559 = state_12490__$1;(statearr_12519_12559[(2)] = null);
(statearr_12519_12559[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (14)))
{var state_12490__$1 = state_12490;var statearr_12523_12560 = state_12490__$1;(statearr_12523_12560[(2)] = null);
(statearr_12523_12560[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (16)))
{var inst_12443 = (state_12490[(10)]);var inst_12447 = cljs.core.chunk_first.call(null,inst_12443);var inst_12448 = cljs.core.chunk_rest.call(null,inst_12443);var inst_12449 = cljs.core.count.call(null,inst_12447);var inst_12429 = inst_12448;var inst_12430 = inst_12447;var inst_12431 = inst_12449;var inst_12432 = (0);var state_12490__$1 = (function (){var statearr_12524 = state_12490;(statearr_12524[(12)] = inst_12432);
(statearr_12524[(14)] = inst_12431);
(statearr_12524[(15)] = inst_12430);
(statearr_12524[(16)] = inst_12429);
return statearr_12524;
})();var statearr_12525_12561 = state_12490__$1;(statearr_12525_12561[(2)] = null);
(statearr_12525_12561[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (10)))
{var inst_12432 = (state_12490[(12)]);var inst_12431 = (state_12490[(14)]);var inst_12430 = (state_12490[(15)]);var inst_12429 = (state_12490[(16)]);var inst_12437 = cljs.core._nth.call(null,inst_12430,inst_12432);var inst_12438 = cljs.core.async.muxch_STAR_.call(null,inst_12437);var inst_12439 = cljs.core.async.close_BANG_.call(null,inst_12438);var inst_12440 = (inst_12432 + (1));var tmp12520 = inst_12431;var tmp12521 = inst_12430;var tmp12522 = inst_12429;var inst_12429__$1 = tmp12522;var inst_12430__$1 = tmp12521;var inst_12431__$1 = tmp12520;var inst_12432__$1 = inst_12440;var state_12490__$1 = (function (){var statearr_12526 = state_12490;(statearr_12526[(12)] = inst_12432__$1);
(statearr_12526[(14)] = inst_12431__$1);
(statearr_12526[(15)] = inst_12430__$1);
(statearr_12526[(18)] = inst_12439);
(statearr_12526[(16)] = inst_12429__$1);
return statearr_12526;
})();var statearr_12527_12562 = state_12490__$1;(statearr_12527_12562[(2)] = null);
(statearr_12527_12562[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (18)))
{var inst_12458 = (state_12490[(2)]);var state_12490__$1 = state_12490;var statearr_12528_12563 = state_12490__$1;(statearr_12528_12563[(2)] = inst_12458);
(statearr_12528_12563[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12491 === (8)))
{var inst_12432 = (state_12490[(12)]);var inst_12431 = (state_12490[(14)]);var inst_12434 = (inst_12432 < inst_12431);var inst_12435 = inst_12434;var state_12490__$1 = state_12490;if(cljs.core.truth_(inst_12435))
{var statearr_12529_12564 = state_12490__$1;(statearr_12529_12564[(1)] = (10));
} else
{var statearr_12530_12565 = state_12490__$1;(statearr_12530_12565[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6355__auto___12538,mults,ensure_mult,p))
;return ((function (switch__6340__auto__,c__6355__auto___12538,mults,ensure_mult,p){
return (function() {
var state_machine__6341__auto__ = null;
var state_machine__6341__auto____0 = (function (){var statearr_12534 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12534[(0)] = state_machine__6341__auto__);
(statearr_12534[(1)] = (1));
return statearr_12534;
});
var state_machine__6341__auto____1 = (function (state_12490){while(true){
var ret_value__6342__auto__ = (function (){try{while(true){
var result__6343__auto__ = switch__6340__auto__.call(null,state_12490);if(cljs.core.keyword_identical_QMARK_.call(null,result__6343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6343__auto__;
}
break;
}
}catch (e12535){if((e12535 instanceof Object))
{var ex__6344__auto__ = e12535;var statearr_12536_12566 = state_12490;(statearr_12536_12566[(5)] = ex__6344__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12490);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12535;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12567 = state_12490;
state_12490 = G__12567;
continue;
}
} else
{return ret_value__6342__auto__;
}
break;
}
});
state_machine__6341__auto__ = function(state_12490){
switch(arguments.length){
case 0:
return state_machine__6341__auto____0.call(this);
case 1:
return state_machine__6341__auto____1.call(this,state_12490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6341__auto____0;
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6341__auto____1;
return state_machine__6341__auto__;
})()
;})(switch__6340__auto__,c__6355__auto___12538,mults,ensure_mult,p))
})();var state__6357__auto__ = (function (){var statearr_12537 = f__6356__auto__.call(null);(statearr_12537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6355__auto___12538);
return statearr_12537;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6357__auto__);
});})(c__6355__auto___12538,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6355__auto___12704 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6355__auto___12704,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6356__auto__ = (function (){var switch__6340__auto__ = ((function (c__6355__auto___12704,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12674){var state_val_12675 = (state_12674[(1)]);if((state_val_12675 === (7)))
{var state_12674__$1 = state_12674;var statearr_12676_12705 = state_12674__$1;(statearr_12676_12705[(2)] = null);
(statearr_12676_12705[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12675 === (1)))
{var state_12674__$1 = state_12674;var statearr_12677_12706 = state_12674__$1;(statearr_12677_12706[(2)] = null);
(statearr_12677_12706[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12675 === (4)))
{var inst_12638 = (state_12674[(7)]);var inst_12640 = (inst_12638 < cnt);var state_12674__$1 = state_12674;if(cljs.core.truth_(inst_12640))
{var statearr_12678_12707 = state_12674__$1;(statearr_12678_12707[(1)] = (6));
} else
{var statearr_12679_12708 = state_12674__$1;(statearr_12679_12708[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12675 === (15)))
{var inst_12670 = (state_12674[(2)]);var state_12674__$1 = state_12674;var statearr_12680_12709 = state_12674__$1;(statearr_12680_12709[(2)] = inst_12670);
(statearr_12680_12709[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12675 === (13)))
{var inst_12663 = cljs.core.async.close_BANG_.call(null,out);var state_12674__$1 = state_12674;var statearr_12681_12710 = state_12674__$1;(statearr_12681_12710[(2)] = inst_12663);
(statearr_12681_12710[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12675 === (6)))
{var state_12674__$1 = state_12674;var statearr_12682_12711 = state_12674__$1;(statearr_12682_12711[(2)] = null);
(statearr_12682_12711[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12675 === (3)))
{var inst_12672 = (state_12674[(2)]);var state_12674__$1 = state_12674;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12674__$1,inst_12672);
} else
{if((state_val_12675 === (12)))
{var inst_12660 = (state_12674[(8)]);var inst_12660__$1 = (state_12674[(2)]);var inst_12661 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12660__$1);var state_12674__$1 = (function (){var statearr_12683 = state_12674;(statearr_12683[(8)] = inst_12660__$1);
return statearr_12683;
})();if(cljs.core.truth_(inst_12661))
{var statearr_12684_12712 = state_12674__$1;(statearr_12684_12712[(1)] = (13));
} else
{var statearr_12685_12713 = state_12674__$1;(statearr_12685_12713[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12675 === (2)))
{var inst_12637 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12638 = (0);var state_12674__$1 = (function (){var statearr_12686 = state_12674;(statearr_12686[(9)] = inst_12637);
(statearr_12686[(7)] = inst_12638);
return statearr_12686;
})();var statearr_12687_12714 = state_12674__$1;(statearr_12687_12714[(2)] = null);
(statearr_12687_12714[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12675 === (11)))
{var inst_12638 = (state_12674[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12674,(10),Object,null,(9));var inst_12647 = chs__$1.call(null,inst_12638);var inst_12648 = done.call(null,inst_12638);var inst_12649 = cljs.core.async.take_BANG_.call(null,inst_12647,inst_12648);var state_12674__$1 = state_12674;var statearr_12688_12715 = state_12674__$1;(statearr_12688_12715[(2)] = inst_12649);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12674__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12675 === (9)))
{var inst_12638 = (state_12674[(7)]);var inst_12651 = (state_12674[(2)]);var inst_12652 = (inst_12638 + (1));var inst_12638__$1 = inst_12652;var state_12674__$1 = (function (){var statearr_12689 = state_12674;(statearr_12689[(10)] = inst_12651);
(statearr_12689[(7)] = inst_12638__$1);
return statearr_12689;
})();var statearr_12690_12716 = state_12674__$1;(statearr_12690_12716[(2)] = null);
(statearr_12690_12716[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12675 === (5)))
{var inst_12658 = (state_12674[(2)]);var state_12674__$1 = (function (){var statearr_12691 = state_12674;(statearr_12691[(11)] = inst_12658);
return statearr_12691;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12674__$1,(12),dchan);
} else
{if((state_val_12675 === (14)))
{var inst_12660 = (state_12674[(8)]);var inst_12665 = cljs.core.apply.call(null,f,inst_12660);var state_12674__$1 = state_12674;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12674__$1,(16),out,inst_12665);
} else
{if((state_val_12675 === (16)))
{var inst_12667 = (state_12674[(2)]);var state_12674__$1 = (function (){var statearr_12692 = state_12674;(statearr_12692[(12)] = inst_12667);
return statearr_12692;
})();var statearr_12693_12717 = state_12674__$1;(statearr_12693_12717[(2)] = null);
(statearr_12693_12717[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12675 === (10)))
{var inst_12642 = (state_12674[(2)]);var inst_12643 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12674__$1 = (function (){var statearr_12694 = state_12674;(statearr_12694[(13)] = inst_12642);
return statearr_12694;
})();var statearr_12695_12718 = state_12674__$1;(statearr_12695_12718[(2)] = inst_12643);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12674__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12675 === (8)))
{var inst_12656 = (state_12674[(2)]);var state_12674__$1 = state_12674;var statearr_12696_12719 = state_12674__$1;(statearr_12696_12719[(2)] = inst_12656);
(statearr_12696_12719[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6355__auto___12704,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6340__auto__,c__6355__auto___12704,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6341__auto__ = null;
var state_machine__6341__auto____0 = (function (){var statearr_12700 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12700[(0)] = state_machine__6341__auto__);
(statearr_12700[(1)] = (1));
return statearr_12700;
});
var state_machine__6341__auto____1 = (function (state_12674){while(true){
var ret_value__6342__auto__ = (function (){try{while(true){
var result__6343__auto__ = switch__6340__auto__.call(null,state_12674);if(cljs.core.keyword_identical_QMARK_.call(null,result__6343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6343__auto__;
}
break;
}
}catch (e12701){if((e12701 instanceof Object))
{var ex__6344__auto__ = e12701;var statearr_12702_12720 = state_12674;(statearr_12702_12720[(5)] = ex__6344__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12674);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12701;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12721 = state_12674;
state_12674 = G__12721;
continue;
}
} else
{return ret_value__6342__auto__;
}
break;
}
});
state_machine__6341__auto__ = function(state_12674){
switch(arguments.length){
case 0:
return state_machine__6341__auto____0.call(this);
case 1:
return state_machine__6341__auto____1.call(this,state_12674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6341__auto____0;
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6341__auto____1;
return state_machine__6341__auto__;
})()
;})(switch__6340__auto__,c__6355__auto___12704,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6357__auto__ = (function (){var statearr_12703 = f__6356__auto__.call(null);(statearr_12703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6355__auto___12704);
return statearr_12703;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6357__auto__);
});})(c__6355__auto___12704,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6355__auto___12829 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6355__auto___12829,out){
return (function (){var f__6356__auto__ = (function (){var switch__6340__auto__ = ((function (c__6355__auto___12829,out){
return (function (state_12805){var state_val_12806 = (state_12805[(1)]);if((state_val_12806 === (7)))
{var inst_12784 = (state_12805[(7)]);var inst_12785 = (state_12805[(8)]);var inst_12784__$1 = (state_12805[(2)]);var inst_12785__$1 = cljs.core.nth.call(null,inst_12784__$1,(0),null);var inst_12786 = cljs.core.nth.call(null,inst_12784__$1,(1),null);var inst_12787 = (inst_12785__$1 == null);var state_12805__$1 = (function (){var statearr_12807 = state_12805;(statearr_12807[(9)] = inst_12786);
(statearr_12807[(7)] = inst_12784__$1);
(statearr_12807[(8)] = inst_12785__$1);
return statearr_12807;
})();if(cljs.core.truth_(inst_12787))
{var statearr_12808_12830 = state_12805__$1;(statearr_12808_12830[(1)] = (8));
} else
{var statearr_12809_12831 = state_12805__$1;(statearr_12809_12831[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12806 === (1)))
{var inst_12776 = cljs.core.vec.call(null,chs);var inst_12777 = inst_12776;var state_12805__$1 = (function (){var statearr_12810 = state_12805;(statearr_12810[(10)] = inst_12777);
return statearr_12810;
})();var statearr_12811_12832 = state_12805__$1;(statearr_12811_12832[(2)] = null);
(statearr_12811_12832[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12806 === (4)))
{var inst_12777 = (state_12805[(10)]);var state_12805__$1 = state_12805;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12805__$1,(7),inst_12777);
} else
{if((state_val_12806 === (6)))
{var inst_12801 = (state_12805[(2)]);var state_12805__$1 = state_12805;var statearr_12812_12833 = state_12805__$1;(statearr_12812_12833[(2)] = inst_12801);
(statearr_12812_12833[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12806 === (3)))
{var inst_12803 = (state_12805[(2)]);var state_12805__$1 = state_12805;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12805__$1,inst_12803);
} else
{if((state_val_12806 === (2)))
{var inst_12777 = (state_12805[(10)]);var inst_12779 = cljs.core.count.call(null,inst_12777);var inst_12780 = (inst_12779 > (0));var state_12805__$1 = state_12805;if(cljs.core.truth_(inst_12780))
{var statearr_12814_12834 = state_12805__$1;(statearr_12814_12834[(1)] = (4));
} else
{var statearr_12815_12835 = state_12805__$1;(statearr_12815_12835[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12806 === (11)))
{var inst_12777 = (state_12805[(10)]);var inst_12794 = (state_12805[(2)]);var tmp12813 = inst_12777;var inst_12777__$1 = tmp12813;var state_12805__$1 = (function (){var statearr_12816 = state_12805;(statearr_12816[(10)] = inst_12777__$1);
(statearr_12816[(11)] = inst_12794);
return statearr_12816;
})();var statearr_12817_12836 = state_12805__$1;(statearr_12817_12836[(2)] = null);
(statearr_12817_12836[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12806 === (9)))
{var inst_12785 = (state_12805[(8)]);var state_12805__$1 = state_12805;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12805__$1,(11),out,inst_12785);
} else
{if((state_val_12806 === (5)))
{var inst_12799 = cljs.core.async.close_BANG_.call(null,out);var state_12805__$1 = state_12805;var statearr_12818_12837 = state_12805__$1;(statearr_12818_12837[(2)] = inst_12799);
(statearr_12818_12837[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12806 === (10)))
{var inst_12797 = (state_12805[(2)]);var state_12805__$1 = state_12805;var statearr_12819_12838 = state_12805__$1;(statearr_12819_12838[(2)] = inst_12797);
(statearr_12819_12838[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12806 === (8)))
{var inst_12786 = (state_12805[(9)]);var inst_12777 = (state_12805[(10)]);var inst_12784 = (state_12805[(7)]);var inst_12785 = (state_12805[(8)]);var inst_12789 = (function (){var c = inst_12786;var v = inst_12785;var vec__12782 = inst_12784;var cs = inst_12777;return ((function (c,v,vec__12782,cs,inst_12786,inst_12777,inst_12784,inst_12785,state_val_12806,c__6355__auto___12829,out){
return (function (p1__12722_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12722_SHARP_);
});
;})(c,v,vec__12782,cs,inst_12786,inst_12777,inst_12784,inst_12785,state_val_12806,c__6355__auto___12829,out))
})();var inst_12790 = cljs.core.filterv.call(null,inst_12789,inst_12777);var inst_12777__$1 = inst_12790;var state_12805__$1 = (function (){var statearr_12820 = state_12805;(statearr_12820[(10)] = inst_12777__$1);
return statearr_12820;
})();var statearr_12821_12839 = state_12805__$1;(statearr_12821_12839[(2)] = null);
(statearr_12821_12839[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6355__auto___12829,out))
;return ((function (switch__6340__auto__,c__6355__auto___12829,out){
return (function() {
var state_machine__6341__auto__ = null;
var state_machine__6341__auto____0 = (function (){var statearr_12825 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12825[(0)] = state_machine__6341__auto__);
(statearr_12825[(1)] = (1));
return statearr_12825;
});
var state_machine__6341__auto____1 = (function (state_12805){while(true){
var ret_value__6342__auto__ = (function (){try{while(true){
var result__6343__auto__ = switch__6340__auto__.call(null,state_12805);if(cljs.core.keyword_identical_QMARK_.call(null,result__6343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6343__auto__;
}
break;
}
}catch (e12826){if((e12826 instanceof Object))
{var ex__6344__auto__ = e12826;var statearr_12827_12840 = state_12805;(statearr_12827_12840[(5)] = ex__6344__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12805);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12826;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12841 = state_12805;
state_12805 = G__12841;
continue;
}
} else
{return ret_value__6342__auto__;
}
break;
}
});
state_machine__6341__auto__ = function(state_12805){
switch(arguments.length){
case 0:
return state_machine__6341__auto____0.call(this);
case 1:
return state_machine__6341__auto____1.call(this,state_12805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6341__auto____0;
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6341__auto____1;
return state_machine__6341__auto__;
})()
;})(switch__6340__auto__,c__6355__auto___12829,out))
})();var state__6357__auto__ = (function (){var statearr_12828 = f__6356__auto__.call(null);(statearr_12828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6355__auto___12829);
return statearr_12828;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6357__auto__);
});})(c__6355__auto___12829,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6355__auto___12934 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6355__auto___12934,out){
return (function (){var f__6356__auto__ = (function (){var switch__6340__auto__ = ((function (c__6355__auto___12934,out){
return (function (state_12911){var state_val_12912 = (state_12911[(1)]);if((state_val_12912 === (7)))
{var inst_12893 = (state_12911[(7)]);var inst_12893__$1 = (state_12911[(2)]);var inst_12894 = (inst_12893__$1 == null);var inst_12895 = cljs.core.not.call(null,inst_12894);var state_12911__$1 = (function (){var statearr_12913 = state_12911;(statearr_12913[(7)] = inst_12893__$1);
return statearr_12913;
})();if(inst_12895)
{var statearr_12914_12935 = state_12911__$1;(statearr_12914_12935[(1)] = (8));
} else
{var statearr_12915_12936 = state_12911__$1;(statearr_12915_12936[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12912 === (1)))
{var inst_12888 = (0);var state_12911__$1 = (function (){var statearr_12916 = state_12911;(statearr_12916[(8)] = inst_12888);
return statearr_12916;
})();var statearr_12917_12937 = state_12911__$1;(statearr_12917_12937[(2)] = null);
(statearr_12917_12937[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12912 === (4)))
{var state_12911__$1 = state_12911;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12911__$1,(7),ch);
} else
{if((state_val_12912 === (6)))
{var inst_12906 = (state_12911[(2)]);var state_12911__$1 = state_12911;var statearr_12918_12938 = state_12911__$1;(statearr_12918_12938[(2)] = inst_12906);
(statearr_12918_12938[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12912 === (3)))
{var inst_12908 = (state_12911[(2)]);var inst_12909 = cljs.core.async.close_BANG_.call(null,out);var state_12911__$1 = (function (){var statearr_12919 = state_12911;(statearr_12919[(9)] = inst_12908);
return statearr_12919;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12911__$1,inst_12909);
} else
{if((state_val_12912 === (2)))
{var inst_12888 = (state_12911[(8)]);var inst_12890 = (inst_12888 < n);var state_12911__$1 = state_12911;if(cljs.core.truth_(inst_12890))
{var statearr_12920_12939 = state_12911__$1;(statearr_12920_12939[(1)] = (4));
} else
{var statearr_12921_12940 = state_12911__$1;(statearr_12921_12940[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12912 === (11)))
{var inst_12888 = (state_12911[(8)]);var inst_12898 = (state_12911[(2)]);var inst_12899 = (inst_12888 + (1));var inst_12888__$1 = inst_12899;var state_12911__$1 = (function (){var statearr_12922 = state_12911;(statearr_12922[(10)] = inst_12898);
(statearr_12922[(8)] = inst_12888__$1);
return statearr_12922;
})();var statearr_12923_12941 = state_12911__$1;(statearr_12923_12941[(2)] = null);
(statearr_12923_12941[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12912 === (9)))
{var state_12911__$1 = state_12911;var statearr_12924_12942 = state_12911__$1;(statearr_12924_12942[(2)] = null);
(statearr_12924_12942[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12912 === (5)))
{var state_12911__$1 = state_12911;var statearr_12925_12943 = state_12911__$1;(statearr_12925_12943[(2)] = null);
(statearr_12925_12943[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12912 === (10)))
{var inst_12903 = (state_12911[(2)]);var state_12911__$1 = state_12911;var statearr_12926_12944 = state_12911__$1;(statearr_12926_12944[(2)] = inst_12903);
(statearr_12926_12944[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12912 === (8)))
{var inst_12893 = (state_12911[(7)]);var state_12911__$1 = state_12911;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12911__$1,(11),out,inst_12893);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6355__auto___12934,out))
;return ((function (switch__6340__auto__,c__6355__auto___12934,out){
return (function() {
var state_machine__6341__auto__ = null;
var state_machine__6341__auto____0 = (function (){var statearr_12930 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12930[(0)] = state_machine__6341__auto__);
(statearr_12930[(1)] = (1));
return statearr_12930;
});
var state_machine__6341__auto____1 = (function (state_12911){while(true){
var ret_value__6342__auto__ = (function (){try{while(true){
var result__6343__auto__ = switch__6340__auto__.call(null,state_12911);if(cljs.core.keyword_identical_QMARK_.call(null,result__6343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6343__auto__;
}
break;
}
}catch (e12931){if((e12931 instanceof Object))
{var ex__6344__auto__ = e12931;var statearr_12932_12945 = state_12911;(statearr_12932_12945[(5)] = ex__6344__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12911);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12931;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12946 = state_12911;
state_12911 = G__12946;
continue;
}
} else
{return ret_value__6342__auto__;
}
break;
}
});
state_machine__6341__auto__ = function(state_12911){
switch(arguments.length){
case 0:
return state_machine__6341__auto____0.call(this);
case 1:
return state_machine__6341__auto____1.call(this,state_12911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6341__auto____0;
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6341__auto____1;
return state_machine__6341__auto__;
})()
;})(switch__6340__auto__,c__6355__auto___12934,out))
})();var state__6357__auto__ = (function (){var statearr_12933 = f__6356__auto__.call(null);(statearr_12933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6355__auto___12934);
return statearr_12933;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6357__auto__);
});})(c__6355__auto___12934,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6355__auto___13043 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6355__auto___13043,out){
return (function (){var f__6356__auto__ = (function (){var switch__6340__auto__ = ((function (c__6355__auto___13043,out){
return (function (state_13018){var state_val_13019 = (state_13018[(1)]);if((state_val_13019 === (7)))
{var inst_13013 = (state_13018[(2)]);var state_13018__$1 = state_13018;var statearr_13020_13044 = state_13018__$1;(statearr_13020_13044[(2)] = inst_13013);
(statearr_13020_13044[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13019 === (1)))
{var inst_12995 = null;var state_13018__$1 = (function (){var statearr_13021 = state_13018;(statearr_13021[(7)] = inst_12995);
return statearr_13021;
})();var statearr_13022_13045 = state_13018__$1;(statearr_13022_13045[(2)] = null);
(statearr_13022_13045[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13019 === (4)))
{var inst_12998 = (state_13018[(8)]);var inst_12998__$1 = (state_13018[(2)]);var inst_12999 = (inst_12998__$1 == null);var inst_13000 = cljs.core.not.call(null,inst_12999);var state_13018__$1 = (function (){var statearr_13023 = state_13018;(statearr_13023[(8)] = inst_12998__$1);
return statearr_13023;
})();if(inst_13000)
{var statearr_13024_13046 = state_13018__$1;(statearr_13024_13046[(1)] = (5));
} else
{var statearr_13025_13047 = state_13018__$1;(statearr_13025_13047[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13019 === (6)))
{var state_13018__$1 = state_13018;var statearr_13026_13048 = state_13018__$1;(statearr_13026_13048[(2)] = null);
(statearr_13026_13048[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13019 === (3)))
{var inst_13015 = (state_13018[(2)]);var inst_13016 = cljs.core.async.close_BANG_.call(null,out);var state_13018__$1 = (function (){var statearr_13027 = state_13018;(statearr_13027[(9)] = inst_13015);
return statearr_13027;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13018__$1,inst_13016);
} else
{if((state_val_13019 === (2)))
{var state_13018__$1 = state_13018;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13018__$1,(4),ch);
} else
{if((state_val_13019 === (11)))
{var inst_12998 = (state_13018[(8)]);var inst_13007 = (state_13018[(2)]);var inst_12995 = inst_12998;var state_13018__$1 = (function (){var statearr_13028 = state_13018;(statearr_13028[(10)] = inst_13007);
(statearr_13028[(7)] = inst_12995);
return statearr_13028;
})();var statearr_13029_13049 = state_13018__$1;(statearr_13029_13049[(2)] = null);
(statearr_13029_13049[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13019 === (9)))
{var inst_12998 = (state_13018[(8)]);var state_13018__$1 = state_13018;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13018__$1,(11),out,inst_12998);
} else
{if((state_val_13019 === (5)))
{var inst_12995 = (state_13018[(7)]);var inst_12998 = (state_13018[(8)]);var inst_13002 = cljs.core._EQ_.call(null,inst_12998,inst_12995);var state_13018__$1 = state_13018;if(inst_13002)
{var statearr_13031_13050 = state_13018__$1;(statearr_13031_13050[(1)] = (8));
} else
{var statearr_13032_13051 = state_13018__$1;(statearr_13032_13051[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13019 === (10)))
{var inst_13010 = (state_13018[(2)]);var state_13018__$1 = state_13018;var statearr_13033_13052 = state_13018__$1;(statearr_13033_13052[(2)] = inst_13010);
(statearr_13033_13052[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13019 === (8)))
{var inst_12995 = (state_13018[(7)]);var tmp13030 = inst_12995;var inst_12995__$1 = tmp13030;var state_13018__$1 = (function (){var statearr_13034 = state_13018;(statearr_13034[(7)] = inst_12995__$1);
return statearr_13034;
})();var statearr_13035_13053 = state_13018__$1;(statearr_13035_13053[(2)] = null);
(statearr_13035_13053[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6355__auto___13043,out))
;return ((function (switch__6340__auto__,c__6355__auto___13043,out){
return (function() {
var state_machine__6341__auto__ = null;
var state_machine__6341__auto____0 = (function (){var statearr_13039 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13039[(0)] = state_machine__6341__auto__);
(statearr_13039[(1)] = (1));
return statearr_13039;
});
var state_machine__6341__auto____1 = (function (state_13018){while(true){
var ret_value__6342__auto__ = (function (){try{while(true){
var result__6343__auto__ = switch__6340__auto__.call(null,state_13018);if(cljs.core.keyword_identical_QMARK_.call(null,result__6343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6343__auto__;
}
break;
}
}catch (e13040){if((e13040 instanceof Object))
{var ex__6344__auto__ = e13040;var statearr_13041_13054 = state_13018;(statearr_13041_13054[(5)] = ex__6344__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13018);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13040;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13055 = state_13018;
state_13018 = G__13055;
continue;
}
} else
{return ret_value__6342__auto__;
}
break;
}
});
state_machine__6341__auto__ = function(state_13018){
switch(arguments.length){
case 0:
return state_machine__6341__auto____0.call(this);
case 1:
return state_machine__6341__auto____1.call(this,state_13018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6341__auto____0;
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6341__auto____1;
return state_machine__6341__auto__;
})()
;})(switch__6340__auto__,c__6355__auto___13043,out))
})();var state__6357__auto__ = (function (){var statearr_13042 = f__6356__auto__.call(null);(statearr_13042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6355__auto___13043);
return statearr_13042;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6357__auto__);
});})(c__6355__auto___13043,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6355__auto___13190 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6355__auto___13190,out){
return (function (){var f__6356__auto__ = (function (){var switch__6340__auto__ = ((function (c__6355__auto___13190,out){
return (function (state_13160){var state_val_13161 = (state_13160[(1)]);if((state_val_13161 === (7)))
{var inst_13156 = (state_13160[(2)]);var state_13160__$1 = state_13160;var statearr_13162_13191 = state_13160__$1;(statearr_13162_13191[(2)] = inst_13156);
(statearr_13162_13191[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13161 === (1)))
{var inst_13123 = (new Array(n));var inst_13124 = inst_13123;var inst_13125 = (0);var state_13160__$1 = (function (){var statearr_13163 = state_13160;(statearr_13163[(7)] = inst_13125);
(statearr_13163[(8)] = inst_13124);
return statearr_13163;
})();var statearr_13164_13192 = state_13160__$1;(statearr_13164_13192[(2)] = null);
(statearr_13164_13192[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13161 === (4)))
{var inst_13128 = (state_13160[(9)]);var inst_13128__$1 = (state_13160[(2)]);var inst_13129 = (inst_13128__$1 == null);var inst_13130 = cljs.core.not.call(null,inst_13129);var state_13160__$1 = (function (){var statearr_13165 = state_13160;(statearr_13165[(9)] = inst_13128__$1);
return statearr_13165;
})();if(inst_13130)
{var statearr_13166_13193 = state_13160__$1;(statearr_13166_13193[(1)] = (5));
} else
{var statearr_13167_13194 = state_13160__$1;(statearr_13167_13194[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13161 === (15)))
{var inst_13150 = (state_13160[(2)]);var state_13160__$1 = state_13160;var statearr_13168_13195 = state_13160__$1;(statearr_13168_13195[(2)] = inst_13150);
(statearr_13168_13195[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13161 === (13)))
{var state_13160__$1 = state_13160;var statearr_13169_13196 = state_13160__$1;(statearr_13169_13196[(2)] = null);
(statearr_13169_13196[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13161 === (6)))
{var inst_13125 = (state_13160[(7)]);var inst_13146 = (inst_13125 > (0));var state_13160__$1 = state_13160;if(cljs.core.truth_(inst_13146))
{var statearr_13170_13197 = state_13160__$1;(statearr_13170_13197[(1)] = (12));
} else
{var statearr_13171_13198 = state_13160__$1;(statearr_13171_13198[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13161 === (3)))
{var inst_13158 = (state_13160[(2)]);var state_13160__$1 = state_13160;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13160__$1,inst_13158);
} else
{if((state_val_13161 === (12)))
{var inst_13124 = (state_13160[(8)]);var inst_13148 = cljs.core.vec.call(null,inst_13124);var state_13160__$1 = state_13160;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13160__$1,(15),out,inst_13148);
} else
{if((state_val_13161 === (2)))
{var state_13160__$1 = state_13160;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13160__$1,(4),ch);
} else
{if((state_val_13161 === (11)))
{var inst_13140 = (state_13160[(2)]);var inst_13141 = (new Array(n));var inst_13124 = inst_13141;var inst_13125 = (0);var state_13160__$1 = (function (){var statearr_13172 = state_13160;(statearr_13172[(10)] = inst_13140);
(statearr_13172[(7)] = inst_13125);
(statearr_13172[(8)] = inst_13124);
return statearr_13172;
})();var statearr_13173_13199 = state_13160__$1;(statearr_13173_13199[(2)] = null);
(statearr_13173_13199[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13161 === (9)))
{var inst_13124 = (state_13160[(8)]);var inst_13138 = cljs.core.vec.call(null,inst_13124);var state_13160__$1 = state_13160;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13160__$1,(11),out,inst_13138);
} else
{if((state_val_13161 === (5)))
{var inst_13133 = (state_13160[(11)]);var inst_13125 = (state_13160[(7)]);var inst_13128 = (state_13160[(9)]);var inst_13124 = (state_13160[(8)]);var inst_13132 = (inst_13124[inst_13125] = inst_13128);var inst_13133__$1 = (inst_13125 + (1));var inst_13134 = (inst_13133__$1 < n);var state_13160__$1 = (function (){var statearr_13174 = state_13160;(statearr_13174[(11)] = inst_13133__$1);
(statearr_13174[(12)] = inst_13132);
return statearr_13174;
})();if(cljs.core.truth_(inst_13134))
{var statearr_13175_13200 = state_13160__$1;(statearr_13175_13200[(1)] = (8));
} else
{var statearr_13176_13201 = state_13160__$1;(statearr_13176_13201[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13161 === (14)))
{var inst_13153 = (state_13160[(2)]);var inst_13154 = cljs.core.async.close_BANG_.call(null,out);var state_13160__$1 = (function (){var statearr_13178 = state_13160;(statearr_13178[(13)] = inst_13153);
return statearr_13178;
})();var statearr_13179_13202 = state_13160__$1;(statearr_13179_13202[(2)] = inst_13154);
(statearr_13179_13202[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13161 === (10)))
{var inst_13144 = (state_13160[(2)]);var state_13160__$1 = state_13160;var statearr_13180_13203 = state_13160__$1;(statearr_13180_13203[(2)] = inst_13144);
(statearr_13180_13203[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13161 === (8)))
{var inst_13133 = (state_13160[(11)]);var inst_13124 = (state_13160[(8)]);var tmp13177 = inst_13124;var inst_13124__$1 = tmp13177;var inst_13125 = inst_13133;var state_13160__$1 = (function (){var statearr_13181 = state_13160;(statearr_13181[(7)] = inst_13125);
(statearr_13181[(8)] = inst_13124__$1);
return statearr_13181;
})();var statearr_13182_13204 = state_13160__$1;(statearr_13182_13204[(2)] = null);
(statearr_13182_13204[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6355__auto___13190,out))
;return ((function (switch__6340__auto__,c__6355__auto___13190,out){
return (function() {
var state_machine__6341__auto__ = null;
var state_machine__6341__auto____0 = (function (){var statearr_13186 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13186[(0)] = state_machine__6341__auto__);
(statearr_13186[(1)] = (1));
return statearr_13186;
});
var state_machine__6341__auto____1 = (function (state_13160){while(true){
var ret_value__6342__auto__ = (function (){try{while(true){
var result__6343__auto__ = switch__6340__auto__.call(null,state_13160);if(cljs.core.keyword_identical_QMARK_.call(null,result__6343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6343__auto__;
}
break;
}
}catch (e13187){if((e13187 instanceof Object))
{var ex__6344__auto__ = e13187;var statearr_13188_13205 = state_13160;(statearr_13188_13205[(5)] = ex__6344__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13160);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13187;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13206 = state_13160;
state_13160 = G__13206;
continue;
}
} else
{return ret_value__6342__auto__;
}
break;
}
});
state_machine__6341__auto__ = function(state_13160){
switch(arguments.length){
case 0:
return state_machine__6341__auto____0.call(this);
case 1:
return state_machine__6341__auto____1.call(this,state_13160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6341__auto____0;
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6341__auto____1;
return state_machine__6341__auto__;
})()
;})(switch__6340__auto__,c__6355__auto___13190,out))
})();var state__6357__auto__ = (function (){var statearr_13189 = f__6356__auto__.call(null);(statearr_13189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6355__auto___13190);
return statearr_13189;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6357__auto__);
});})(c__6355__auto___13190,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6355__auto___13349 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6355__auto___13349,out){
return (function (){var f__6356__auto__ = (function (){var switch__6340__auto__ = ((function (c__6355__auto___13349,out){
return (function (state_13319){var state_val_13320 = (state_13319[(1)]);if((state_val_13320 === (7)))
{var inst_13315 = (state_13319[(2)]);var state_13319__$1 = state_13319;var statearr_13321_13350 = state_13319__$1;(statearr_13321_13350[(2)] = inst_13315);
(statearr_13321_13350[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13320 === (1)))
{var inst_13278 = [];var inst_13279 = inst_13278;var inst_13280 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_13319__$1 = (function (){var statearr_13322 = state_13319;(statearr_13322[(7)] = inst_13279);
(statearr_13322[(8)] = inst_13280);
return statearr_13322;
})();var statearr_13323_13351 = state_13319__$1;(statearr_13323_13351[(2)] = null);
(statearr_13323_13351[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13320 === (4)))
{var inst_13283 = (state_13319[(9)]);var inst_13283__$1 = (state_13319[(2)]);var inst_13284 = (inst_13283__$1 == null);var inst_13285 = cljs.core.not.call(null,inst_13284);var state_13319__$1 = (function (){var statearr_13324 = state_13319;(statearr_13324[(9)] = inst_13283__$1);
return statearr_13324;
})();if(inst_13285)
{var statearr_13325_13352 = state_13319__$1;(statearr_13325_13352[(1)] = (5));
} else
{var statearr_13326_13353 = state_13319__$1;(statearr_13326_13353[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13320 === (15)))
{var inst_13309 = (state_13319[(2)]);var state_13319__$1 = state_13319;var statearr_13327_13354 = state_13319__$1;(statearr_13327_13354[(2)] = inst_13309);
(statearr_13327_13354[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13320 === (13)))
{var state_13319__$1 = state_13319;var statearr_13328_13355 = state_13319__$1;(statearr_13328_13355[(2)] = null);
(statearr_13328_13355[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13320 === (6)))
{var inst_13279 = (state_13319[(7)]);var inst_13304 = inst_13279.length;var inst_13305 = (inst_13304 > (0));var state_13319__$1 = state_13319;if(cljs.core.truth_(inst_13305))
{var statearr_13329_13356 = state_13319__$1;(statearr_13329_13356[(1)] = (12));
} else
{var statearr_13330_13357 = state_13319__$1;(statearr_13330_13357[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13320 === (3)))
{var inst_13317 = (state_13319[(2)]);var state_13319__$1 = state_13319;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13319__$1,inst_13317);
} else
{if((state_val_13320 === (12)))
{var inst_13279 = (state_13319[(7)]);var inst_13307 = cljs.core.vec.call(null,inst_13279);var state_13319__$1 = state_13319;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13319__$1,(15),out,inst_13307);
} else
{if((state_val_13320 === (2)))
{var state_13319__$1 = state_13319;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13319__$1,(4),ch);
} else
{if((state_val_13320 === (11)))
{var inst_13287 = (state_13319[(10)]);var inst_13283 = (state_13319[(9)]);var inst_13297 = (state_13319[(2)]);var inst_13298 = [];var inst_13299 = inst_13298.push(inst_13283);var inst_13279 = inst_13298;var inst_13280 = inst_13287;var state_13319__$1 = (function (){var statearr_13331 = state_13319;(statearr_13331[(7)] = inst_13279);
(statearr_13331[(8)] = inst_13280);
(statearr_13331[(11)] = inst_13297);
(statearr_13331[(12)] = inst_13299);
return statearr_13331;
})();var statearr_13332_13358 = state_13319__$1;(statearr_13332_13358[(2)] = null);
(statearr_13332_13358[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13320 === (9)))
{var inst_13279 = (state_13319[(7)]);var inst_13295 = cljs.core.vec.call(null,inst_13279);var state_13319__$1 = state_13319;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13319__$1,(11),out,inst_13295);
} else
{if((state_val_13320 === (5)))
{var inst_13287 = (state_13319[(10)]);var inst_13283 = (state_13319[(9)]);var inst_13280 = (state_13319[(8)]);var inst_13287__$1 = f.call(null,inst_13283);var inst_13288 = cljs.core._EQ_.call(null,inst_13287__$1,inst_13280);var inst_13289 = cljs.core.keyword_identical_QMARK_.call(null,inst_13280,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_13290 = (inst_13288) || (inst_13289);var state_13319__$1 = (function (){var statearr_13333 = state_13319;(statearr_13333[(10)] = inst_13287__$1);
return statearr_13333;
})();if(cljs.core.truth_(inst_13290))
{var statearr_13334_13359 = state_13319__$1;(statearr_13334_13359[(1)] = (8));
} else
{var statearr_13335_13360 = state_13319__$1;(statearr_13335_13360[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13320 === (14)))
{var inst_13312 = (state_13319[(2)]);var inst_13313 = cljs.core.async.close_BANG_.call(null,out);var state_13319__$1 = (function (){var statearr_13337 = state_13319;(statearr_13337[(13)] = inst_13312);
return statearr_13337;
})();var statearr_13338_13361 = state_13319__$1;(statearr_13338_13361[(2)] = inst_13313);
(statearr_13338_13361[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13320 === (10)))
{var inst_13302 = (state_13319[(2)]);var state_13319__$1 = state_13319;var statearr_13339_13362 = state_13319__$1;(statearr_13339_13362[(2)] = inst_13302);
(statearr_13339_13362[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13320 === (8)))
{var inst_13279 = (state_13319[(7)]);var inst_13287 = (state_13319[(10)]);var inst_13283 = (state_13319[(9)]);var inst_13292 = inst_13279.push(inst_13283);var tmp13336 = inst_13279;var inst_13279__$1 = tmp13336;var inst_13280 = inst_13287;var state_13319__$1 = (function (){var statearr_13340 = state_13319;(statearr_13340[(7)] = inst_13279__$1);
(statearr_13340[(8)] = inst_13280);
(statearr_13340[(14)] = inst_13292);
return statearr_13340;
})();var statearr_13341_13363 = state_13319__$1;(statearr_13341_13363[(2)] = null);
(statearr_13341_13363[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6355__auto___13349,out))
;return ((function (switch__6340__auto__,c__6355__auto___13349,out){
return (function() {
var state_machine__6341__auto__ = null;
var state_machine__6341__auto____0 = (function (){var statearr_13345 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13345[(0)] = state_machine__6341__auto__);
(statearr_13345[(1)] = (1));
return statearr_13345;
});
var state_machine__6341__auto____1 = (function (state_13319){while(true){
var ret_value__6342__auto__ = (function (){try{while(true){
var result__6343__auto__ = switch__6340__auto__.call(null,state_13319);if(cljs.core.keyword_identical_QMARK_.call(null,result__6343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6343__auto__;
}
break;
}
}catch (e13346){if((e13346 instanceof Object))
{var ex__6344__auto__ = e13346;var statearr_13347_13364 = state_13319;(statearr_13347_13364[(5)] = ex__6344__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13319);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13346;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13365 = state_13319;
state_13319 = G__13365;
continue;
}
} else
{return ret_value__6342__auto__;
}
break;
}
});
state_machine__6341__auto__ = function(state_13319){
switch(arguments.length){
case 0:
return state_machine__6341__auto____0.call(this);
case 1:
return state_machine__6341__auto____1.call(this,state_13319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6341__auto____0;
state_machine__6341__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6341__auto____1;
return state_machine__6341__auto__;
})()
;})(switch__6340__auto__,c__6355__auto___13349,out))
})();var state__6357__auto__ = (function (){var statearr_13348 = f__6356__auto__.call(null);(statearr_13348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6355__auto___13349);
return statearr_13348;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6357__auto__);
});})(c__6355__auto___13349,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map