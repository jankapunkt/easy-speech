!function(){"use strict";function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function t(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?e(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function n(){n=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var o=t&&t.prototype instanceof v?t:v,a=Object.create(o.prototype),c=new j(r||[]);return i(a,"_invoke",{value:x(e,n,c)}),a}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var d={};function v(){}function h(){}function p(){}var y={};s(y,a,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(k([])));g&&g!==t&&r.call(g,a)&&(y=g);var b=p.prototype=v.prototype=Object.create(y);function w(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function n(i,o,a,c){var u=f(e[i],e,o);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&r.call(l,"__await")?t.resolve(l.__await).then((function(e){n("next",e,a,c)}),(function(e){n("throw",e,a,c)})):t.resolve(l).then((function(e){s.value=e,a(s)}),(function(e){return n("throw",e,a,c)}))}c(u.arg)}var o;i(this,"_invoke",{value:function(e,r){function i(){return new t((function(t,i){n(e,r,t,i)}))}return o=o?o.then(i,i):i()}})}function x(e,t,n){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return N()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var c=E(a,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=f(e,t,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function E(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var i=f(r,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,d;var o=i.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function k(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:N}}function N(){return{value:void 0,done:!0}}return h.prototype=p,i(b,"constructor",{value:p,configurable:!0}),i(p,"constructor",{value:h,configurable:!0}),h.displayName=s(p,u,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,s(e,u,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},w(S.prototype),s(S.prototype,c,(function(){return this})),e.AsyncIterator=S,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new S(l(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},w(b),s(b,u,"Generator"),s(b,a,(function(){return this})),s(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=k,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;L(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:k(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function i(e,t,n,r,i,o,a){try{var c=e[o](a),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,i)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function c(e){i(a,r,o,c,u,"next",e)}function u(e){i(a,r,o,c,u,"throw",e)}c(void 0)}))}}function a(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o,a,c=[],u=!0,s=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=o.call(n)).done)&&(c.push(r.value),c.length!==t);u=!0);}catch(e){s=!0,i=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw i}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var l=["text","voice","pitch","rate","volume","force","infiniteResume"],f={},d="undefined"==typeof globalThis?window:globalThis,v={status:"created"},h={};f.debug=function(e){p="function"==typeof e?e:function(){}};var p=function(){};f.detect=function(){return y()};var y=function(){var e={};["speechSynthesis","speechSynthesisUtterance","speechSynthesisVoice","speechSynthesisEvent","speechSynthesisErrorEvent"].forEach((function(t){e[t]=O(t)})),e.onvoiceschanged=m(e.speechSynthesis,"onvoiceschanged");var t=m(e.speechSynthesisUtterance,"prototype");return N.forEach((function(n){var r="on".concat(n);e[r]=t&&m(e.speechSynthesisUtterance.prototype,r)})),h.isAndroid=b(),h.isFirefox=S()||w(),h.isSafari=x(),p("is android: ".concat(!!h.isAndroid)),p("is firefox: ".concat(!!h.isFirefox)),p("is safari: ".concat(!!h.isSafari)),e},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return Object.hasOwnProperty.call(e,t)||t in e||!!e[t]},g=function(){return(d.navigator||{}).userAgent||""},b=function(){return/android/i.test(g())},w=function(){return/kaios/i.test(g())},S=function(){return void 0!==d.InstallTrigger||/firefox/i.test(g())},x=function(){return void 0!==d.GestureEvent},E=["webKit","moz","ms","o"],O=function(e){var t,n="".concat((t=e).charAt(0).toUpperCase()).concat(t.slice(1)),r=E.map((function(e){return"".concat(e).concat(n)})),i=[e,n].concat(r).find(L);return d[i]},L=function(e){return d[e]};f.status=function(){return t({},v)};var j=function(e){p(e),v.status=e};f.init=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.maxTimeout,n=void 0===t?5e3:t,r=e.interval,i=void 0===r?250:r,o=e.quiet;return new Promise((function(e,t){if(v.initialized)return e(!1);var r,a;f.reset(),j("init: start");var c=!1,u=function(n){return j("init: failed (".concat(n,")")),clearInterval(r),v.initialized=!1,o?e(!1):t(new Error("EasySpeech: ".concat(n)))},s=function(){if(!c)return j("init: complete"),c=!0,v.initialized=!0,clearInterval(r),h.onvoiceschanged=null,a&&h.removeEventListener("voiceschanged",a),e(!0)},l=y();if(!(!!l.speechSynthesis&&!!l.speechSynthesisUtterance))return u("browser misses features");Object.keys(l).forEach((function(e){v[e]=l[e]}));var h=v.speechSynthesis,p=function(){var e=h.getVoices()||[];if(e.length>0){if(v.voices=e,j("voices loaded: ".concat(e.length)),v.defaultVoice=e.find((function(e){return e.default})),!v.defaultVoice){var t=((d.navigator||{}).language||"").split("-")[0];v.defaultVoice=e.find((function(e){return e.lang&&(e.lang.indexOf("".concat(t,"-"))>-1||e.lang.indexOf("".concat(t,"_"))>-1)}))}return v.defaultVoice||(v.defaultVoice=e[0]),!0}return!1};if(j("init: voices"),p())return s();var g=function(){j("init: voices (timer)");var e=0;r=setInterval((function(){return p()?s():e>n?u("browser has no voices (timeout)"):void(e+=i)}),i)};l.onvoiceschanged?(j("init: voices (onvoiceschanged)"),h.onvoiceschanged=function(){return p()?s():g()},setTimeout((function(){return p()?s():u("browser has no voices (timeout)")}),n)):(m(h,"addEventListener")&&(j("init: voices (addEventListener)"),a=function(){if(p())return s()},h.addEventListener("voiceschanged",a)),g())}))};var k=function(){if(!(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).force&&!v.initialized)throw new Error("EasySpeech: not initialized. Run EasySpeech.init() first")};f.voices=function(){return k(),v.voices},f.on=function(e){return k(),N.forEach((function(t){var n=e[t];P.handler(n)&&(v.handlers[t]=n)})),t({},v.handlers)};var N=["boundary","end","error","mark","pause","resume","start"],P={isNumber:function(e){return"number"==typeof e&&!Number.isNaN(e)},pitch:function(e){return P.isNumber(e)&&e>=0&&e<=2},volume:function(e){return P.isNumber(e)&&e>=0&&e<=1},rate:function(e){return P.isNumber(e)&&e>=.1&&e<=10},text:function(e){return"string"==typeof e},handler:function(e){return"function"==typeof e},voice:function(e){return e&&e.lang&&e.name&&e.voiceURI}};f.defaults=function(e){return k(),e&&(v.defaults=v.defaults||{},["voice","pitch","rate","volume"].forEach((function(t){var n=e[t];(0,P[t])(n)&&(v.defaults[t]=n)}))),t({},v.defaults)};f.speak=function(e){var t=e.text,n=e.voice,r=e.pitch,i=e.rate,o=e.volume,a=e.force,s=e.infiniteResume,f=c(e,l);if(k({force:a}),!P.text(t))throw new Error("EasySpeech: at least some valid text is required to speak");var d=function(e){var t,n=u(Object.entries(e)[0],2),r=n[0],i=n[1];return P[r](i)?i:null===(t=v.defaults)||void 0===t?void 0:t[r]};return new Promise((function(e,a){j("init speak");var c=function(e){return new(0,v.speechSynthesisUtterance)(e)}(t),u=function(e){var t,n;return e||(null===(t=v.defaults)||void 0===t?void 0:t.voice)||v.defaultVoice||(null===(n=v.voices)||void 0===n?void 0:n[0])}(n);u&&(c.voice=u,c.lang=u.lang,c.voiceURI=u.voiceURI),c.text=t,c.pitch=d({pitch:r}),c.rate=d({rate:i}),c.volume=d({volume:o}),I(c),N.forEach((function(e){var t,n=f[e];P.handler(n)&&c.addEventListener(e,n),null!==(t=v.handlers)&&void 0!==t&&t[e]&&c.addEventListener(e,v.handlers[e])})),c.addEventListener("start",(function(){h.paused=!1,h.speaking=!0,("boolean"==typeof s?s:!h.isFirefox&&!h.isSafari&&!0!==h.isAndroid)&&q(c)})),c.addEventListener("end",(function(t){j("speak complete"),h.paused=!1,h.speaking=!1,clearTimeout(T),e(t)})),c.addEventListener("error",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};j("speak failed: ".concat(e.message)),h.paused=!1,h.speaking=!1,clearTimeout(T),a(e)})),clearTimeout(T),v.speechSynthesis.cancel(),setTimeout((function(){v.speechSynthesis.speak(c)}),10)}))};var T,A,C,I=function(e){var t=e.voice,n=e.pitch,r=e.rate,i=e.volume;p("utterance: voice=".concat(null==t?void 0:t.name," volume=").concat(i," rate=").concat(r," pitch=").concat(n))};function q(e){if(!e&&T)return p("force-clear timeout"),d.clearTimeout(T);var t=v.speechSynthesis,n=t.paused,r=t.speaking||h.speaking,i=n||h.paused;p("resumeInfinity isSpeaking=".concat(r," isPaused=").concat(i)),r&&!i&&(v.speechSynthesis.pause(),v.speechSynthesis.resume()),T=d.setTimeout((function(){q(e)}),5e3)}f.cancel=function(){k(),j("cancelling"),v.speechSynthesis.cancel(),h.paused=!1,h.speaking=!1},f.resume=function(){k(),j("resuming"),h.paused=!1,h.speaking=!0,v.speechSynthesis.resume()},f.pause=function(){if(k(),j("pausing"),h.isAndroid)return p("patch pause on Android with cancel"),v.speechSynthesis.cancel();v.speechSynthesis.pause(),h.paused=!0,h.speaking=!1},f.reset=function(){Object.assign(v,{status:"reset",initialized:!1,speechSynthesis:null,speechSynthesisUtterance:null,speechSynthesisVoice:null,speechSynthesisEvent:null,speechSynthesisErrorEvent:null,voices:null,defaultVoice:null,defaults:{pitch:1,rate:1,volume:1,voice:null},handlers:{}})},document.body.onload=o(n().mark((function e(){var t;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R(),$(f.detect()),e.next=4,z();case 4:return t=e.sent,e.next=7,D(t);case 7:return F(t),e.next=10,M(t);case 10:B(t);case 11:case"end":return e.stop()}}),e)})));var _={voice:void 0,rate:void 0,pitch:void 0,volume:void 0,text:void 0},U={volume:void 0,rate:void 0,pitch:void 0,text:void 0,language:void 0,voice:void 0};function F(e){if(e){var t=document.querySelector(".volume-value");U.volume=document.querySelector("#volume-input"),U.volume.disabled=!1,U.volume.addEventListener("change",(function(e){_.volume=Number(e.target.value),t.removeChild(t.firstChild),t.appendChild(document.createTextNode(_.volume))}));var n=document.querySelector(".rate-value");U.rate=document.querySelector("#rate-input"),U.rate.disabled=!1,U.rate.addEventListener("change",(function(e){_.rate=Number(e.target.value)/10,n.removeChild(n.firstChild),n.appendChild(document.createTextNode(_.rate))}));var r=document.querySelector(".pitch-value");U.pitch=document.querySelector("#pitch-input"),U.pitch.disabled=!1,U.pitch.addEventListener("change",(function(e){_.pitch=Number(e.target.value),r.removeChild(r.firstChild),r.appendChild(document.createTextNode(_.pitch))})),U.text=document.querySelector("#text-input"),U.text.disabled=!1}}function R(){A=document.querySelector(".log-body"),f.debug(V)}function V(e){A.appendChild(H(e))}function z(){return G.apply(this,arguments)}function G(){return(G=o(n().mark((function e(){var t,r,i,o,a,c,u,s,l;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.querySelector(".init-status-header"),r=document.querySelector(".init-status-loader"),i=document.querySelector(".init-status-text"),o=document.querySelector(".init-status-body"),e.prev=4,e.next=7,f.init();case 7:a=e.sent,c="Successfully intialized 🎉",u="Successful",e.next=20;break;case 12:e.prev=12,e.t0=e.catch(4),a=!1,c=e.t0.message,u="Failed",(s=document.querySelector(".speak-btn")).classList.add("disabled"),s.setAttribute("disabled","");case 20:return e.prev=20,l=a?"bg-success":"bg-danger",r.classList.add("d-none"),t.classList.remove("bg-info"),t.classList.add(l),i.textContent=u,o.appendChild(H(c)),e.finish(20);case 28:return e.abrupt("return",a);case 29:case"end":return e.stop()}}),e,null,[[4,12,20,28]])})))).apply(this,arguments)}function D(e){return Y.apply(this,arguments)}function Y(){return(Y=o(n().mark((function e(t){var r,i,o,a;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:V("find unique languages..."),r=f.voices(),i=new Set,r.forEach((function(e,t){var n=e.lang.split(/[-_]/)[0];i.add(n),e.default&&(o=n,a=e.voiceURI)})),V("found ".concat(i.size," languages")),V("populate languages to select component"),U.language=document.querySelector("#lang-select"),Array.from(i).sort().forEach((function(e){var t=H(e,"option");t.setAttribute("value",e),o&&e===o&&(t.setAttribute("selected",""),setTimeout((function(){return J(r,e,a)}),250),setTimeout((function(){K(C.findIndex((function(e){return e.voiceURI===a}))+1)}),500)),U.language.appendChild(t)})),V("attach events, cleanup"),U.voice=document.querySelector("#voice-select"),U.language.addEventListener("change",(function(e){return J(r,e.target.value)})),U.voice.addEventListener("change",(function(e){K(Number.parseInt(e.target.value,10))})),U.language.classList.remove("disabled"),U.language.removeAttribute("disabled");case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(e,t,n){for(;U.voice.firstChild;)U.voice.removeChild(U.voice.lastChild);U.voice.appendChild(H("(Select voice)","option")),t?((C="all"===t?e:e.filter((function(e){return e.lang.indexOf("".concat(t,"-"))>-1||e.lang.indexOf("".concat(t,"_"))>-1})).sort((function(e,t){return e.name.localeCompare(t.name)}))).forEach((function(e,t){var r=e.localService?"local":"remote",i=e.default?"[DEFAULT]":"",o="".concat(i).concat(e.name," - ").concat(e.voiceURI," (").concat(r,")"),a=H(o,"option");a.setAttribute("value",t.toString(10)),n&&n===e.voiceURI&&a.setAttribute("selected",""),U.voice.appendChild(a)})),U.voice.classList.remove("disabled"),U.voice.removeAttribute("disabled")):(U.voice.classList.add("disabled"),U.voice.disabled=!0,_.voice=null,C=null)}function K(e){e<0||e>C.length-1?_.voice=void 0:_.voice=(C||[])[e]}function M(e){if(e){var r=document.querySelector(".speak-btn"),i=Object.values(U);r.addEventListener("click",function(){var e=o(n().mark((function e(o){var a,c,u,s,l,d;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.disabled=!0,i.forEach((function(e){e.disabled=!0})),a=t({},_),c=a.pitch,u=a.rate,s=a.voice,l=a.volume,d=U.text.value,e.prev=4,e.next=7,f.speak({text:d,pitch:c,rate:u,voice:s,volume:l});case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(4),V(e.t0.message);case 12:return e.prev=12,r.disabled=!1,i.forEach((function(e){e.disabled=!1})),e.finish(12);case 16:case"end":return e.stop()}}),e,null,[[4,9,12,16]])})));return function(t){return e.apply(this,arguments)}}())}}function $(e){var t=document.querySelector(".features"),n={};Object.entries(e).forEach((function(e){var t=u(e,2),i=t[0],o=t[1];"object"===r(o)?n[i]=o.toString():n[i]="function"==typeof o?o.name:o}));var i=document.createTextNode(JSON.stringify(n,null,2));t.appendChild(i)}function B(e){if(e){var t=function(e){return V("event: ".concat(e.type))};f.on({boundary:t,start:t,end:t,error:t})}}var H=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"div",n=document.createElement(t);return n.appendChild(document.createTextNode(e)),n}}();
