var slifavo=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){"use strict";(function(t){var n=function(){this.__data__=[],this.size=0};var r=function(t,e){return t===e||t!=t&&e!=e};var o=function(t,e){for(var n=t.length;n--;)if(r(t[n][0],e))return n;return-1},i=Array.prototype.splice;var s=function(t){var e=this.__data__,n=o(e,t);return!(n<0)&&(n==e.length-1?e.pop():i.call(e,n,1),--this.size,!0)};var a=function(t){var e=this.__data__,n=o(e,t);return n<0?void 0:e[n][1]};var c=function(t){return o(this.__data__,t)>-1};var u=function(t,e){var n=this.__data__,r=o(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function l(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}l.prototype.clear=n,l.prototype.delete=s,l.prototype.get=a,l.prototype.has=c,l.prototype.set=u;var p=l;var h=function(){this.__data__=new p,this.size=0};var f=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n};var v=function(t){return this.__data__.get(t)};var d=function(t){return this.__data__.has(t)},y="undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{};function m(t,e){return t(e={exports:{}},e.exports),e.exports}var g="object"==typeof y&&y&&y.Object===Object&&y,b="object"==typeof self&&self&&self.Object===Object&&self,_=g||b||Function("return this")(),w=_.Symbol,j=Object.prototype,O=j.hasOwnProperty,C=j.toString,T=w?w.toStringTag:void 0;var x=function(t){var e=O.call(t,T),n=t[T];try{t[T]=void 0;var r=!0}catch(t){}var o=C.call(t);return r&&(e?t[T]=n:delete t[T]),o},E=Object.prototype.toString;var $=function(t){return E.call(t)},A=w?w.toStringTag:void 0;var S=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":A&&A in Object(t)?x(t):$(t)};var P=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)};var k,I=function(t){if(!P(t))return!1;var e=S(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},z=_["__core-js_shared__"],H=(k=/[^.]+$/.exec(z&&z.keys&&z.keys.IE_PROTO||""))?"Symbol(src)_1."+k:"";var B=function(t){return!!H&&H in t},L=Function.prototype.toString;var M=function(t){if(null!=t){try{return L.call(t)}catch(t){}try{return t+""}catch(t){}}return""},D=/^\[object .+?Constructor\]$/,F=Function.prototype,q=Object.prototype,N=F.toString,U=q.hasOwnProperty,W=RegExp("^"+N.call(U).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var R=function(t){return!(!P(t)||B(t))&&(I(t)?W:D).test(M(t))};var G=function(t,e){return null==t?void 0:t[e]};var V=function(t,e){var n=G(t,e);return R(n)?n:void 0},J=V(_,"Map"),K=V(Object,"create");var Q=function(){this.__data__=K?K(null):{},this.size=0};var X=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},Y=Object.prototype.hasOwnProperty;var Z=function(t){var e=this.__data__;if(K){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return Y.call(e,t)?e[t]:void 0},tt=Object.prototype.hasOwnProperty;var et=function(t){var e=this.__data__;return K?void 0!==e[t]:tt.call(e,t)};var nt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=K&&void 0===e?"__lodash_hash_undefined__":e,this};function rt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}rt.prototype.clear=Q,rt.prototype.delete=X,rt.prototype.get=Z,rt.prototype.has=et,rt.prototype.set=nt;var ot=rt;var it=function(){this.size=0,this.__data__={hash:new ot,map:new(J||p),string:new ot}};var st=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var at=function(t,e){var n=t.__data__;return st(e)?n["string"==typeof e?"string":"hash"]:n.map};var ct=function(t){var e=at(this,t).delete(t);return this.size-=e?1:0,e};var ut=function(t){return at(this,t).get(t)};var lt=function(t){return at(this,t).has(t)};var pt=function(t,e){var n=at(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function ht(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ht.prototype.clear=it,ht.prototype.delete=ct,ht.prototype.get=ut,ht.prototype.has=lt,ht.prototype.set=pt;var ft=ht;var vt=function(t,e){var n=this.__data__;if(n instanceof p){var r=n.__data__;if(!J||r.length<199)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new ft(r)}return n.set(t,e),this.size=n.size,this};function dt(t){var e=this.__data__=new p(t);this.size=e.size}dt.prototype.clear=h,dt.prototype.delete=f,dt.prototype.get=v,dt.prototype.has=d,dt.prototype.set=vt;var yt=dt,mt=function(){try{var t=V(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();var gt=function(t,e,n){"__proto__"==e&&mt?mt(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n};var bt=function(t,e,n){(void 0===n||r(t[e],n))&&(void 0!==n||e in t)||gt(t,e,n)};var _t=function(t){return function(e,n,r){for(var o=-1,i=Object(e),s=r(e),a=s.length;a--;){var c=s[t?a:++o];if(!1===n(i[c],c,i))break}return e}}(),wt=m((function(t,e){var n=e&&!e.nodeType&&e,r=n&&t&&!t.nodeType&&t,o=r&&r.exports===n?_.Buffer:void 0,i=o?o.allocUnsafe:void 0;t.exports=function(t,e){if(e)return t.slice();var n=t.length,r=i?i(n):new t.constructor(n);return t.copy(r),r}})),jt=_.Uint8Array;var Ot=function(t){var e=new t.constructor(t.byteLength);return new jt(e).set(new jt(t)),e};var Ct=function(t,e){var n=e?Ot(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)};var Tt=function(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e},xt=Object.create,Et=function(){function t(){}return function(e){if(!P(e))return{};if(xt)return xt(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();var $t=function(t,e){return function(n){return t(e(n))}}(Object.getPrototypeOf,Object),At=Object.prototype;var St=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||At)};var Pt=function(t){return"function"!=typeof t.constructor||St(t)?{}:Et($t(t))};var kt=function(t){return null!=t&&"object"==typeof t};var It=function(t){return kt(t)&&"[object Arguments]"==S(t)},zt=Object.prototype,Ht=zt.hasOwnProperty,Bt=zt.propertyIsEnumerable,Lt=It(function(){return arguments}())?It:function(t){return kt(t)&&Ht.call(t,"callee")&&!Bt.call(t,"callee")},Mt=Array.isArray;var Dt=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991};var Ft=function(t){return null!=t&&Dt(t.length)&&!I(t)};var qt=function(t){return kt(t)&&Ft(t)};var Nt=function(){return!1},Ut=m((function(t,e){var n=e&&!e.nodeType&&e,r=n&&t&&!t.nodeType&&t,o=r&&r.exports===n?_.Buffer:void 0,i=(o?o.isBuffer:void 0)||Nt;t.exports=i})),Wt=Function.prototype,Rt=Object.prototype,Gt=Wt.toString,Vt=Rt.hasOwnProperty,Jt=Gt.call(Object);var Kt=function(t){if(!kt(t)||"[object Object]"!=S(t))return!1;var e=$t(t);if(null===e)return!0;var n=Vt.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&Gt.call(n)==Jt},Qt={};Qt["[object Float32Array]"]=Qt["[object Float64Array]"]=Qt["[object Int8Array]"]=Qt["[object Int16Array]"]=Qt["[object Int32Array]"]=Qt["[object Uint8Array]"]=Qt["[object Uint8ClampedArray]"]=Qt["[object Uint16Array]"]=Qt["[object Uint32Array]"]=!0,Qt["[object Arguments]"]=Qt["[object Array]"]=Qt["[object ArrayBuffer]"]=Qt["[object Boolean]"]=Qt["[object DataView]"]=Qt["[object Date]"]=Qt["[object Error]"]=Qt["[object Function]"]=Qt["[object Map]"]=Qt["[object Number]"]=Qt["[object Object]"]=Qt["[object RegExp]"]=Qt["[object Set]"]=Qt["[object String]"]=Qt["[object WeakMap]"]=!1;var Xt=function(t){return kt(t)&&Dt(t.length)&&!!Qt[S(t)]};var Yt=function(t){return function(e){return t(e)}},Zt=m((function(t,e){var n=e&&!e.nodeType&&e,r=n&&t&&!t.nodeType&&t,o=r&&r.exports===n&&g.process,i=function(){try{var t=r&&r.require&&r.require("util").types;return t||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=i})),te=Zt&&Zt.isTypedArray,ee=te?Yt(te):Xt;var ne=function(t,e){if("__proto__"!=e)return t[e]},re=Object.prototype.hasOwnProperty;var oe=function(t,e,n){var o=t[e];re.call(t,e)&&r(o,n)&&(void 0!==n||e in t)||gt(t,e,n)};var ie=function(t,e,n,r){var o=!n;n||(n={});for(var i=-1,s=e.length;++i<s;){var a=e[i],c=r?r(n[a],t[a],a,n,t):void 0;void 0===c&&(c=t[a]),o?gt(n,a,c):oe(n,a,c)}return n};var se=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r},ae=/^(?:0|[1-9]\d*)$/;var ce=function(t,e){var n=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&ae.test(t))&&t>-1&&t%1==0&&t<e},ue=Object.prototype.hasOwnProperty;var le=function(t,e){var n=Mt(t),r=!n&&Lt(t),o=!n&&!r&&Ut(t),i=!n&&!r&&!o&&ee(t),s=n||r||o||i,a=s?se(t.length,String):[],c=a.length;for(var u in t)!e&&!ue.call(t,u)||s&&("length"==u||o&&("offset"==u||"parent"==u)||i&&("buffer"==u||"byteLength"==u||"byteOffset"==u)||ce(u,c))||a.push(u);return a};var pe=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e},he=Object.prototype.hasOwnProperty;var fe=function(t){if(!P(t))return pe(t);var e=St(t),n=[];for(var r in t)("constructor"!=r||!e&&he.call(t,r))&&n.push(r);return n};var ve=function(t){return Ft(t)?le(t,!0):fe(t)};var de=function(t){return ie(t,ve(t))};var ye=function(t,e,n,r,o,i,s){var a=ne(t,n),c=ne(e,n),u=s.get(c);if(u)bt(t,n,u);else{var l=i?i(a,c,n+"",t,e,s):void 0,p=void 0===l;if(p){var h=Mt(c),f=!h&&Ut(c),v=!h&&!f&&ee(c);l=c,h||f||v?Mt(a)?l=a:qt(a)?l=Tt(a):f?(p=!1,l=wt(c,!0)):v?(p=!1,l=Ct(c,!0)):l=[]:Kt(c)||Lt(c)?(l=a,Lt(a)?l=de(a):P(a)&&!I(a)||(l=Pt(c))):p=!1}p&&(s.set(c,l),o(l,c,r,i,s),s.delete(c)),bt(t,n,l)}};var me=function t(e,n,r,o,i){e!==n&&_t(n,(function(s,a){if(P(s))i||(i=new yt),ye(e,n,a,r,t,o,i);else{var c=o?o(ne(e,a),s,a+"",e,n,i):void 0;void 0===c&&(c=s),bt(e,a,c)}}),ve)};var ge=function(t){return t};var be=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)},_e=Math.max;var we=function(t,e,n){return e=_e(void 0===e?t.length-1:e,0),function(){for(var r=arguments,o=-1,i=_e(r.length-e,0),s=Array(i);++o<i;)s[o]=r[e+o];o=-1;for(var a=Array(e+1);++o<e;)a[o]=r[o];return a[e]=n(s),be(t,this,a)}};var je=function(t){return function(){return t}},Oe=mt?function(t,e){return mt(t,"toString",{configurable:!0,enumerable:!1,value:je(e),writable:!0})}:ge,Ce=Date.now;var Te=function(t){var e=0,n=0;return function(){var r=Ce(),o=16-(r-n);if(n=r,o>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}(Oe);var xe=function(t,e){return Te(we(t,e,ge),t+"")};var Ee=function(t,e,n){if(!P(n))return!1;var o=typeof e;return!!("number"==o?Ft(n)&&ce(e,n.length):"string"==o&&e in n)&&r(n[e],t)};var $e=function(t){return xe((function(e,n){var r=-1,o=n.length,i=o>1?n[o-1]:void 0,s=o>2?n[2]:void 0;for(i=t.length>3&&"function"==typeof i?(o--,i):void 0,s&&Ee(n[0],n[1],s)&&(i=o<3?void 0:i,o=1),e=Object(e);++r<o;){var a=n[r];a&&t(e,a,r,i)}return e}))}((function(t,e,n){me(t,e,n)})),Ae=function(t){for(var e,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var o=n.flat().map((function(t){return t.split(" ")})).flat();(e=t.classList).add.apply(e,o)},Se=function(){function t(t,e){void 0===e&&(e=""),this.hideEta=0,this.maxHideTime=0,this.previousTimeout=0,this.toastElement=t,this.progressElement=document.createElement("div"),Ae(this.progressElement,e),this.toastElement.insertBefore(this.progressElement,this.toastElement.firstChild)}return t.prototype.update=function(){var t=(this.hideEta-(new Date).getTime())/this.maxHideTime*100;this.progressElement.style.width=t+"%"},t.prototype.start=function(){var t=this;this.reset(this.previousTimeout),this.intervalId=setInterval((function(){return t.update()}),10)},t.prototype.resetWidth=function(){this.progressElement.style.width="0%"},t.prototype.stop=function(){this.maxHideTime=0,this.hideEta=0,this.resetWidth(),clearInterval(this.intervalId)},t.prototype.reset=function(t){this.previousTimeout=t,this.maxHideTime=t,this.hideEta=(new Date).getTime()+this.maxHideTime},t}(),Pe=function(){function t(t){this.toastId=0,this.previousToast=null,this.toastType={info:"info",error:"error",warning:"warning",success:"success"},this.version="3.0.0-alpha.12",this.options={tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:function(){},hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:function(){},closeMethod:!1,closeDuration:!1,closeEasing:!1,closeOnHover:!0,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",escapeHtml:!1,target:"body",closeHtml:'<button type="button">&times;</button>',closeClass:"toast-close-button",newestOnTop:!0,preventDuplicates:!1,progressBar:!1,progressClass:"toast-progress",rtl:!1,onCloseClick:function(){},closeButton:!1,onclick:function(){}},this.$container=document.createElement("div"),this.options=$e({},this.options,t),this.createContainer()}return t.prototype.createContainer=function(){this.$container=document.createElement("div"),this.$container.setAttribute("id",this.options.containerId),Ae(this.$container,this.options.positionClass);var t=document.getElementsByTagName(this.options.target);return t&&t[0]&&t[0].appendChild(this.$container),this.$container},t.prototype.getContainer=function(t,e){void 0===t&&(t=this.options),void 0===e&&(e=null);var n=document.getElementById(t.containerId);return n?(this.$container=n,this.$container):(e&&(this.$container=this.createContainer()),this.$container)},t.prototype.error=function(t,e,n){return this.notify({type:this.toastType.error,iconClass:this.options.iconClasses.error,message:t,optionsOverride:n,title:e})},t.prototype.warning=function(t,e,n){return this.notify({type:this.toastType.warning,iconClass:this.options.iconClasses.warning,message:t,optionsOverride:n,title:e})},t.prototype.success=function(t,e,n){return this.notify({type:this.toastType.success,iconClass:this.options.iconClasses.success,message:t,optionsOverride:n,title:e})},t.prototype.info=function(t,e,n){return this.notify({type:this.toastType.info,iconClass:this.options.iconClasses.info,message:t,optionsOverride:n,title:e})},t.prototype.subscribe=function(t){this.listener=t},t.prototype.publish=function(t){this.listener&&this.listener(t)},t.prototype.clear=function(t,e){this.$container||this.getContainer(this.options),this.clearToast(t,this.options,e)||this.clearContainer(this.options)},t.prototype.remove=function(t){if(this.$container||this.getContainer(this.options),this.$container)if(t&&t!==document.activeElement)this.removeToast(t);else if(!this.$container.hasChildNodes()){var e=this.$container.parentElement;e&&e.removeChild(this.$container)}},t.prototype.removeToast=function(t){this.$container||this.getContainer(),this.$container&&(t.parentNode.removeChild(t),t.offsetWidth>0&&t.offsetHeight>0||this.$container.hasChildNodes()||(this.$container.parentNode&&this.$container.parentNode.removeChild(this.$container),this.previousToast=null))},t.prototype.clearContainer=function(t){if(this.$container)for(var e=this.$container.childNodes,n=e.length-1;n>=0;n-=1)this.clearToast(e[n],t)},t.prototype.clearToast=function(t,e,n){void 0===e&&(e=this.options),void 0===n&&(n=null);var r=!(!n||!n.force)&&n.force;return!(!t||!r&&t===document.activeElement)&&(this.removeToast(t),!0)},t.prototype.notify=function(t){var e=this,n=this.options,r=t.iconClass||this.options.iconClass;if(void 0!==t.optionsOverride&&(n=$e({},n,t.optionsOverride),r=t.optionsOverride.iconClass||r),function(t,n){if(t.preventDuplicates){if(n.message===e.previousToast)return!0;e.previousToast=n.message||""}return!1}(n,t))return null;this.toastId+=1,this.$container=this.getContainer(n,!0);var o=null,i=null,s=document.createElement("div"),a=document.createElement("div"),c=document.createElement("div"),u=document.createElement("div");u.innerHTML=n.closeHtml.trim();var l=u.firstChild,p={toastId:this.toastId,state:"visible",startTime:new Date,endTime:void 0,options:n,map:t},h=function(t){void 0===t&&(t=null),(s!==document.activeElement||t)&&(i&&i.stop(),e.removeToast(s),clearTimeout(o),n.onHidden&&"hidden"!==p.state&&n.onHidden(),p.state="hidden",p.endTime=new Date,e.publish(p))},f=function(t){return(null!==t?t:"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")};return r&&Ae(s,n.toastClass,r),function(){if(t.title){var e=t.title;n.escapeHtml&&(e=f(t.title)),a.innerHTML=e,Ae(a,n.titleClass),s.appendChild(a)}}(),function(){if(t.message){var e=t.message;n.escapeHtml&&(e=f(t.message)),c.innerHTML=e,Ae(c,n.messageClass),s.appendChild(c)}}(),n.closeButton&&(Ae(l,n.closeClass),l.setAttribute("role","button"),s.insertBefore(l,s.firstChild)),n.progressBar&&(i=new Se(s,n.progressClass)),n.rtl&&Ae(s,"rtl"),e.$container&&(n.newestOnTop?e.$container.insertBefore(s,e.$container.firstChild):e.$container.appendChild(s)),function(){var t="";switch(r){case"toast-success":case"toast-info":t="polite";break;default:t="assertive"}s.setAttribute("aria-live",t)}(),n.onShown&&n.onShown(),n.timeOut>0&&(o=setTimeout(h,n.timeOut),i&&(i.reset(n.timeOut),i.start())),n.closeOnHover&&(s.addEventListener("mouseover",(function(){return clearTimeout(o),void(i&&i.stop())})),s.addEventListener("mouseout",(function(){(n.timeOut>0||n.extendedTimeOut>0)&&(o=setTimeout(h,n.extendedTimeOut),i&&(i.reset(n.extendedTimeOut),i.start()))}))),!n.onclick&&n.tapToDismiss&&s.addEventListener("click",h),n.closeButton&&l&&l.addEventListener("click",(function(t){t.stopPropagation?t.stopPropagation():void 0!==t.cancelBubble&&!0!==t.cancelBubble&&(t.cancelBubble=!0),n.onCloseClick&&n.onCloseClick(t),h(!0)})),n.onclick&&s.addEventListener("click",(function(t){n.onclick&&n.onclick(t),h()})),this.publish(p),n.debug&&console&&console.log(p),s},t}();e.a=Pe}).call(this,n(1))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";n.r(e);var r=n(0),o=function(){function t(t,e,n,r){this.canvas=document.createElement("canvas"),this.canvas.classList.add("defanime"),this.canvas.classList.add("panelcanvas"),this.canvas.dataset.index=e.toString(),this.ctx=this.canvas.getContext("2d"),this.panelcount=t,this.index=this.position=e,this.canvas.width=n,this.canvas.height=r,this.makeEmpty()}return t.prototype.drawImage=function(t){var e=this.coord(),n=t.naturalWidth/this.panelcount,r=t.naturalHeight/this.panelcount,o=n*e.x,i=r*e.y;this.ctx.drawImage(t,o,i,n,r,0,0,this.canvas.width,this.canvas.height)},t.prototype.makeEmpty=function(){this.ctx.fillStyle="rgb(120, 120, 120)",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)},t.prototype.coord=function(){var t=new i;return t.x=this.position%this.panelcount,t.y=Math.floor(this.position/this.panelcount),t},t.prototype.isEmpty=function(){return this.panelcount*this.panelcount-1===this.index},t.prototype.isAdjoin=function(t){var e=t.coord(),n=this.coord();return n.x===e.x&&(n.y-1===e.y||n.y+1===e.y)||n.y===e.y&&(n.x-1===e.x||n.x+1===e.x)},t}(),i=function(){},s=function(){function t(t,e,n){var r=this;this.evclickPanelcanvas=function(t){var e=parseInt(t.target.dataset.index);if(r.move(e),r.drawCanvases(),r.isGoal()){document.querySelector(r.cssid_wrappanels).style.display="none";var n=document.querySelector(r.cssid_img);n.style.display="inline",n.classList.add("beforemove"),setTimeout((function(){n.classList.remove("beforemove")}),100),r.goalhandler()}},this.cssid_img=t,this.cssid_wrappanels=e,this.img=document.querySelector(t),this.panelcanvases=[],this.goalhandler=n}return t.prototype.drawCanvases=function(){for(var t=document.querySelector(this.cssid_wrappanels),e=Math.sqrt(this.panelcanvases.length);t.firstChild;)t.removeChild(t.firstChild);for(var n=0,r=0;r<e;r++){for(var o=document.createElement("div"),i=0;i<e;i++)for(var s=0,a=this.panelcanvases;s<a.length;s++){var c=a[s];if(c.position===n){o.append(c.canvas),n++;break}}t.append(o)}},t.prototype.start=function(){for(var t=document.querySelector(this.cssid_wrappanels),e=this.img.width/3,n=this.img.height/3,r=0;r<9;r++){var i=new o(3,r,e,n);i.canvas.addEventListener("click",this.evclickPanelcanvas),8!==r&&i.drawImage(this.img),this.panelcanvases.push(i)}var s=8,a=s;for(r=0;r<300;r++){for(var c=[],u=0,l=this.panelcanvases;u<l.length;u++){var p=l[u],h=this.panelcanvases[s];p.isAdjoin(h)&&p.index!==a&&c.push(p.index)}if(!(c.length<=0)){var f=Math.floor(Math.random()*c.length);console.log(c),console.log(c[f]),this.move(c[f]),a=s,s=c[f]}}this.img.style.display="none",t.style.display="block",this.drawCanvases()},t.prototype.findEmptyPanelcanvasArri=function(){for(var t=0;t<this.panelcanvases.length;t++)if(this.panelcanvases[t].isEmpty())return t;throw new Error("not found empty panel.")},t.prototype.move=function(t){var e=this.findEmptyPanelcanvasArri();if(this.panelcanvases[e].isAdjoin(this.panelcanvases[t])){var n=this.panelcanvases[t].position;this.panelcanvases[t].position=this.panelcanvases[e].position,this.panelcanvases[e].position=n,this.panelcanvases[t].canvas.classList.add("beforemove"),setTimeout((function(){var t=document.querySelector(".panelcanvas.beforemove");null!==t&&t.classList.remove("beforemove")}),100)}},t.prototype.isGoal=function(){for(var t=0,e=this.panelcanvases;t<e.length;t++){var n=e[t];if(n.index!==n.position)return!1}return!0},t}();n.d(e,"init",(function(){return c}));var a=new r.a,c=function(t,e){new s(t,e,(function(){a.success("Congratulations!!")})).start()}}]);
//# sourceMappingURL=bundle.js.map