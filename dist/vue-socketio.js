!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueSocketIO=t():e.VueSocketIO=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function o(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=t,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(i,n,function(t){return e[t]}.bind(null,n));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){e.exports=o(1)},function(e,t,o){"use strict";o.r(t);var i={beforeCreate(){if(this.sockets||(this.sockets={}),"object"==typeof this.$vueSocketIo)for(const e of Object.keys(this.$vueSocketIo))this.sockets[e]={subscribe:(t,o)=>{this.$vueSocketIo[e].emitter.addListener(t,o,this)},unsubscribe:t=>{this.$vueSocketIo[e].emitter.removeListener(t,this)}};else this.$vueSocketIo.emitter.addListener(event,callback,this),this.$vueSocketIo.emitter.removeListener(event,this)},mounted(){if(this.$options.sockets)if("object"==typeof this.$vueSocketIo)for(const e of Object.keys(this.$vueSocketIo))this.$options.sockets[e]&&Object.keys(this.$options.sockets[e]).forEach(t=>{"subscribe"!==t&&"unsubscribe"!==t&&this.$vueSocketIo[e].emitter.addListener(t,this.$options.sockets[e][t],this)});else Object.keys(this.$options.sockets).forEach(e=>{"subscribe"!==e&&"unsubscribe"!==e&&this.$vueSocketIo.emitter.addListener(e,this.$options.sockets[e],this)})},beforeDestroy(){if(this.$options.sockets)if("object"==typeof this.$vueSocketIo)for(const e of Object.keys(this.$vueSocketIo))this.$options.sockets[e]&&Object.keys(this.$options.sockets[e]).forEach(t=>{this.$vueSocketIo[e].emitter.removeListener(t,this)});else Object.keys(this.$options.sockets).forEach(e=>{this.$vueSocketIo.emitter.removeListener(e,this)})}};function n(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var s=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.debug=!1,this.prefix="%cVue-Socket.io: "}var t,o,i;return t=e,(o=[{key:"info",value:function(e,t=""){this.debug&&window.console.info(this.prefix+`%c${e}`,"color: blue; font-weight: 600","color: #333333",t)}},{key:"error",value:function(){this.debug&&window.console.error(this.prefix,...arguments)}},{key:"warn",value:function(){this.debug&&window.console.warn(this.prefix,...arguments)}},{key:"event",value:function(e,t=""){this.debug&&window.console.info(this.prefix+`%c${e}`,"color: blue; font-weight: 600","color: #333333",t)}}])&&n(t.prototype,o),i&&n(t,i),e}());function r(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}let c=function(){function e(t,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.io=t,this.register(),this.emitter=o}var t,o,i;return t=e,(o=[{key:"register",value:function(){this.io.onevent=e=>{let[t,...o]=e.data;1===o.length&&(o=o[0]),this.onEvent(t,o)},e.staticEvents.forEach(e=>this.io.on(e,t=>this.onEvent(e,t)))}},{key:"onEvent",value:function(e,t){this.emitter.emit(e,t)}}])&&r(t.prototype,o),i&&r(t,i),e}();var a,u,f;function l(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}f=["onopen","onerror","onmessage","onclose"],(u="staticEvents")in(a=c)?Object.defineProperty(a,u,{value:f,enumerable:!0,configurable:!0,writable:!0}):a[u]=f;let h=function(){function e(t={}){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s.info(t?"Vuex adapter enabled":"Vuex adapter disabled"),s.info(t.mutationPrefix?"Vuex siocket mutations enabled":"Vuex siocket mutations disabled"),s.info(t?"Vuex siocket actions enabled":"Vuex siocket actions disabled"),this.store=t.store,this.actionPrefix=t.actionPrefix?t.actionPrefix:"SOCKET_",this.mutationPrefix=t.mutationPrefix,this.listeners=new Map}var t,o,i;return t=e,(o=[{key:"addListener",value:function(e,t,o){if("function"!=typeof t)throw new Error("callback must be a function");this.listeners.has(e)||this.listeners.set(e,[]),this.listeners.get(e).push({callback:t,component:o}),s.info(`#${e} subscribe, component: ${o.$options.name}`)}},{key:"removeListener",value:function(e,t){if(this.listeners.has(e)){const o=this.listeners.get(e).filter(e=>e.component!==t);o.length>0?this.listeners.set(e,o):this.listeners.delete(e),s.info(`#${e} unsubscribe, component: ${t.$options.name}`)}}},{key:"emit",value:function(e,t){this.listeners.has(e)&&(s.info(`Broadcasting: #${e}, Data:`,t),this.listeners.get(e).forEach(e=>{e.callback.call(e.component,t)})),"ping"!==e&&"pong"!==e&&this.dispatchStore(e,t)}},{key:"dispatchStore",value:function(e,t){if(this.store&&this.store._actions){let o=this.actionPrefix+e;for(let e in this.store._actions)e.split("/").pop()===o&&(s.info(`Dispatching Action: ${e}, Data:`,t),this.store.dispatch(e,t));if(this.mutationPrefix){let o=this.mutationPrefix+e;for(let e in this.store._mutations)e.split("/").pop()===o&&(s.info(`Commiting Mutation: ${e}, Data:`,t),this.store.commit(e,t))}}}}])&&l(t.prototype,o),i&&l(t,i),e}();function p(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}o.d(t,"default",function(){return b});let b=function(){function e({connection:t,vuex:o,debug:i,options:n}){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s.debug=i,this.io=this.connect(t,n),this.useConnectionNamespace=n&&n.useConnectionNamespace,this.namespaceName=n&&n.namespaceName,this.emitter=new h(o),this.listener=new c(this.io,this.emitter)}var t,o,n;return t=e,(o=[{key:"install",value:function(e){const t=this.namespaceName||this.io.nsp.replace("/","");this.useConnectionNamespace?"object"==typeof e.prototype.$socket?(e.prototype.$socket={...e.prototype.$socket,[t]:this.io},e.prototype.$vueSocketIo={...e.prototype.$vueSocketIo,[t]:this}):(e.prototype.$socket={[t]:this.io},e.prototype.$vueSocketIo={[t]:this}):(e.prototype.$socket=this.io,e.prototype.$vueSocketIo=this),e.mixin(i),s.info("Vue-Socket.io plugin enabled")}},{key:"connect",value:function(e,t){if(e&&"object"==typeof e)return s.info("Received socket.io-client instance"),e;if("string"==typeof e){const t=new WebSocket(e);return s.info("Received connection string"),this.io=t}throw new Error("Unsupported connection type")}}])&&p(t.prototype,o),n&&p(t,n),e}()}]).default});