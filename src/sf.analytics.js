/* eslint-disable */
/* Zepto v1.2.0 - zepto event ajax form ie - zeptojs.com/license */
!function(t,e){"function"==typeof define&&define.amd?define(function(){return e(t)}):e(t)}(this,function(t){var e=function(){function $(t){return null==t?String(t):S[C.call(t)]||"object"}function F(t){return"function"==$(t)}function k(t){return null!=t&&t==t.window}function M(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function R(t){return"object"==$(t)}function Z(t){return R(t)&&!k(t)&&Object.getPrototypeOf(t)==Object.prototype}function z(t){var e=!!t&&"length"in t&&t.length,n=r.type(t);return"function"!=n&&!k(t)&&("array"==n||0===e||"number"==typeof e&&e>0&&e-1 in t)}function q(t){return a.call(t,function(t){return null!=t})}function H(t){return t.length>0?r.fn.concat.apply([],t):t}function I(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function V(t){return t in l?l[t]:l[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function _(t,e){return"number"!=typeof e||h[I(t)]?e:e+"px"}function B(t){var e,n;return c[t]||(e=f.createElement(t),f.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),c[t]=n),c[t]}function U(t){return"children"in t?u.call(t.children):r.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function X(t,e){var n,r=t?t.length:0;for(n=0;r>n;n++)this[n]=t[n];this.length=r,this.selector=e||""}function J(t,r,i){for(n in r)i&&(Z(r[n])||L(r[n]))?(Z(r[n])&&!Z(t[n])&&(t[n]={}),L(r[n])&&!L(t[n])&&(t[n]=[]),J(t[n],r[n],i)):r[n]!==e&&(t[n]=r[n])}function W(t,e){return null==e?r(t):r(t).filter(e)}function Y(t,e,n,r){return F(e)?e.call(t,n,r):e}function G(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function K(t,n){var r=t.className||"",i=r&&r.baseVal!==e;return n===e?i?r.baseVal:r:void(i?r.baseVal=n:t.className=n)}function Q(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?r.parseJSON(t):t):t}catch(e){return t}}function tt(t,e){e(t);for(var n=0,r=t.childNodes.length;r>n;n++)tt(t.childNodes[n],e)}var e,n,r,i,O,P,o=[],s=o.concat,a=o.filter,u=o.slice,f=t.document,c={},l={},h={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},p=/^\s*<(\w+|!)[^>]*>/,d=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,m=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,g=/^(?:body|html)$/i,v=/([A-Z])/g,y=["val","css","html","text","data","width","height","offset"],x=["after","prepend","before","append"],b=f.createElement("table"),E=f.createElement("tr"),j={tr:f.createElement("tbody"),tbody:b,thead:b,tfoot:b,td:E,th:E,"*":f.createElement("div")},w=/complete|loaded|interactive/,T=/^[\w-]*$/,S={},C=S.toString,N={},A=f.createElement("div"),D={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},L=Array.isArray||function(t){return t instanceof Array};return N.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,o=!i;return o&&(i=A).appendChild(t),r=~N.qsa(i,e).indexOf(t),o&&A.removeChild(t),r},O=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},P=function(t){return a.call(t,function(e,n){return t.indexOf(e)==n})},N.fragment=function(t,n,i){var o,s,a;return d.test(t)&&(o=r(f.createElement(RegExp.$1))),o||(t.replace&&(t=t.replace(m,"<$1></$2>")),n===e&&(n=p.test(t)&&RegExp.$1),n in j||(n="*"),a=j[n],a.innerHTML=""+t,o=r.each(u.call(a.childNodes),function(){a.removeChild(this)})),Z(i)&&(s=r(o),r.each(i,function(t,e){y.indexOf(t)>-1?s[t](e):s.attr(t,e)})),o},N.Z=function(t,e){return new X(t,e)},N.isZ=function(t){return t instanceof N.Z},N.init=function(t,n){var i;if(!t)return N.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&p.test(t))i=N.fragment(t,RegExp.$1,n),t=null;else{if(n!==e)return r(n).find(t);i=N.qsa(f,t)}else{if(F(t))return r(f).ready(t);if(N.isZ(t))return t;if(L(t))i=q(t);else if(R(t))i=[t],t=null;else if(p.test(t))i=N.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==e)return r(n).find(t);i=N.qsa(f,t)}}return N.Z(i,t)},r=function(t,e){return N.init(t,e)},r.extend=function(t){var e,n=u.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){J(t,n,e)}),t},N.qsa=function(t,e){var n,r="#"==e[0],i=!r&&"."==e[0],o=r||i?e.slice(1):e,s=T.test(o);return t.getElementById&&s&&r?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:u.call(s&&!r&&t.getElementsByClassName?i?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},r.contains=f.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},r.type=$,r.isFunction=F,r.isWindow=k,r.isArray=L,r.isPlainObject=Z,r.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},r.isNumeric=function(t){var e=Number(t),n=typeof t;return null!=t&&"boolean"!=n&&("string"!=n||t.length)&&!isNaN(e)&&isFinite(e)||!1},r.inArray=function(t,e,n){return o.indexOf.call(e,t,n)},r.camelCase=O,r.trim=function(t){return null==t?"":String.prototype.trim.call(t)},r.uuid=0,r.support={},r.expr={},r.noop=function(){},r.map=function(t,e){var n,i,o,r=[];if(z(t))for(i=0;i<t.length;i++)n=e(t[i],i),null!=n&&r.push(n);else for(o in t)n=e(t[o],o),null!=n&&r.push(n);return H(r)},r.each=function(t,e){var n,r;if(z(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(r in t)if(e.call(t[r],r,t[r])===!1)return t;return t},r.grep=function(t,e){return a.call(t,e)},t.JSON&&(r.parseJSON=JSON.parse),r.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){S["[object "+e+"]"]=e.toLowerCase()}),r.fn={constructor:N.Z,length:0,forEach:o.forEach,reduce:o.reduce,push:o.push,sort:o.sort,splice:o.splice,indexOf:o.indexOf,concat:function(){var t,e,n=[];for(t=0;t<arguments.length;t++)e=arguments[t],n[t]=N.isZ(e)?e.toArray():e;return s.apply(N.isZ(this)?this.toArray():this,n)},map:function(t){return r(r.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return r(u.apply(this,arguments))},ready:function(t){return w.test(f.readyState)&&f.body?t(r):f.addEventListener("DOMContentLoaded",function(){t(r)},!1),this},get:function(t){return t===e?u.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return o.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return F(t)?this.not(this.not(t)):r(a.call(this,function(e){return N.matches(e,t)}))},add:function(t,e){return r(P(this.concat(r(t,e))))},is:function(t){return this.length>0&&N.matches(this[0],t)},not:function(t){var n=[];if(F(t)&&t.call!==e)this.each(function(e){t.call(this,e)||n.push(this)});else{var i="string"==typeof t?this.filter(t):z(t)&&F(t.item)?u.call(t):r(t);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return r(n)},has:function(t){return this.filter(function(){return R(t)?r.contains(this,t):r(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!R(t)?t:r(t)},last:function(){var t=this[this.length-1];return t&&!R(t)?t:r(t)},find:function(t){var e,n=this;return e=t?"object"==typeof t?r(t).filter(function(){var t=this;return o.some.call(n,function(e){return r.contains(e,t)})}):1==this.length?r(N.qsa(this[0],t)):this.map(function(){return N.qsa(this,t)}):r()},closest:function(t,e){var n=[],i="object"==typeof t&&r(t);return this.each(function(r,o){for(;o&&!(i?i.indexOf(o)>=0:N.matches(o,t));)o=o!==e&&!M(o)&&o.parentNode;o&&n.indexOf(o)<0&&n.push(o)}),r(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=r.map(n,function(t){return(t=t.parentNode)&&!M(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return W(e,t)},parent:function(t){return W(P(this.pluck("parentNode")),t)},children:function(t){return W(this.map(function(){return U(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||u.call(this.childNodes)})},siblings:function(t){return W(this.map(function(t,e){return a.call(U(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return r.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=B(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=F(t);if(this[0]&&!e)var n=r(t).get(0),i=n.parentNode||this.length>1;return this.each(function(o){r(this).wrapAll(e?t.call(this,o):i?n.cloneNode(!0):n)})},wrapAll:function(t){if(this[0]){r(this[0]).before(t=r(t));for(var e;(e=t.children()).length;)t=e.first();r(t).append(this)}return this},wrapInner:function(t){var e=F(t);return this.each(function(n){var i=r(this),o=i.contents(),s=e?t.call(this,n):t;o.length?o.wrapAll(s):i.append(s)})},unwrap:function(){return this.parent().each(function(){r(this).replaceWith(r(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var n=r(this);(t===e?"none"==n.css("display"):t)?n.show():n.hide()})},prev:function(t){return r(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return r(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;r(this).empty().append(Y(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=Y(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this.pluck("textContent").join(""):null},attr:function(t,r){var i;return"string"!=typeof t||1 in arguments?this.each(function(e){if(1===this.nodeType)if(R(t))for(n in t)G(this,n,t[n]);else G(this,t,Y(this,r,e,this.getAttribute(t)))}):0 in this&&1==this[0].nodeType&&null!=(i=this[0].getAttribute(t))?i:e},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){G(this,t)},this)})},prop:function(t,e){return t=D[t]||t,1 in arguments?this.each(function(n){this[t]=Y(this,e,n,this[t])}):this[0]&&this[0][t]},removeProp:function(t){return t=D[t]||t,this.each(function(){delete this[t]})},data:function(t,n){var r="data-"+t.replace(v,"-$1").toLowerCase(),i=1 in arguments?this.attr(r,n):this.attr(r);return null!==i?Q(i):e},val:function(t){return 0 in arguments?(null==t&&(t=""),this.each(function(e){this.value=Y(this,t,e,this.value)})):this[0]&&(this[0].multiple?r(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(e){if(e)return this.each(function(t){var n=r(this),i=Y(this,e,t,n.offset()),o=n.offsetParent().offset(),s={top:i.top-o.top,left:i.left-o.left};"static"==n.css("position")&&(s.position="relative"),n.css(s)});if(!this.length)return null;if(f.documentElement!==this[0]&&!r.contains(f.documentElement,this[0]))return{top:0,left:0};var n=this[0].getBoundingClientRect();return{left:n.left+t.pageXOffset,top:n.top+t.pageYOffset,width:Math.round(n.width),height:Math.round(n.height)}},css:function(t,e){if(arguments.length<2){var i=this[0];if("string"==typeof t){if(!i)return;return i.style[O(t)]||getComputedStyle(i,"").getPropertyValue(t)}if(L(t)){if(!i)return;var o={},s=getComputedStyle(i,"");return r.each(t,function(t,e){o[e]=i.style[O(e)]||s.getPropertyValue(e)}),o}}var a="";if("string"==$(t))e||0===e?a=I(t)+":"+_(t,e):this.each(function(){this.style.removeProperty(I(t))});else for(n in t)t[n]||0===t[n]?a+=I(n)+":"+_(n,t[n])+";":this.each(function(){this.style.removeProperty(I(n))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(r(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?o.some.call(this,function(t){return this.test(K(t))},V(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){i=[];var n=K(this),o=Y(this,t,e,n);o.split(/\s+/g).forEach(function(t){r(this).hasClass(t)||i.push(t)},this),i.length&&K(this,n+(n?" ":"")+i.join(" "))}}):this},removeClass:function(t){return this.each(function(n){if("className"in this){if(t===e)return K(this,"");i=K(this),Y(this,t,n,i).split(/\s+/g).forEach(function(t){i=i.replace(V(t)," ")}),K(this,i.trim())}})},toggleClass:function(t,n){return t?this.each(function(i){var o=r(this),s=Y(this,t,i,K(this));s.split(/\s+/g).forEach(function(t){(n===e?!o.hasClass(t):n)?o.addClass(t):o.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var n="scrollTop"in this[0];return t===e?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var n="scrollLeft"in this[0];return t===e?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=g.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(r(t).css("margin-top"))||0,n.left-=parseFloat(r(t).css("margin-left"))||0,i.top+=parseFloat(r(e[0]).css("border-top-width"))||0,i.left+=parseFloat(r(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||f.body;t&&!g.test(t.nodeName)&&"static"==r(t).css("position");)t=t.offsetParent;return t})}},r.fn.detach=r.fn.remove,["width","height"].forEach(function(t){var n=t.replace(/./,function(t){return t[0].toUpperCase()});r.fn[t]=function(i){var o,s=this[0];return i===e?k(s)?s["inner"+n]:M(s)?s.documentElement["scroll"+n]:(o=this.offset())&&o[t]:this.each(function(e){s=r(this),s.css(t,Y(this,i,e,s[t]()))})}}),x.forEach(function(n,i){var o=i%2;r.fn[n]=function(){var n,a,s=r.map(arguments,function(t){var i=[];return n=$(t),"array"==n?(t.forEach(function(t){return t.nodeType!==e?i.push(t):r.zepto.isZ(t)?i=i.concat(t.get()):void(i=i.concat(N.fragment(t)))}),i):"object"==n||null==t?t:N.fragment(t)}),u=this.length>1;return s.length<1?this:this.each(function(e,n){a=o?n:n.parentNode,n=0==i?n.nextSibling:1==i?n.firstChild:2==i?n:null;var c=r.contains(f.documentElement,a);s.forEach(function(e){if(u)e=e.cloneNode(!0);else if(!a)return r(e).remove();a.insertBefore(e,n),c&&tt(e,function(e){if(!(null==e.nodeName||"SCRIPT"!==e.nodeName.toUpperCase()||e.type&&"text/javascript"!==e.type||e.src)){var n=e.ownerDocument?e.ownerDocument.defaultView:t;n.eval.call(n,e.innerHTML)}})})})},r.fn[o?n+"To":"insert"+(i?"Before":"After")]=function(t){return r(t)[n](this),this}}),N.Z.prototype=X.prototype=r.fn,N.uniq=P,N.deserializeValue=Q,r.zepto=N,r}();return t.Zepto=e,void 0===t.$&&(t.$=e),function(e){function h(t){return t._zid||(t._zid=n++)}function p(t,e,n,r){if(e=d(e),e.ns)var i=m(e.ns);return(a[h(t)]||[]).filter(function(t){return t&&(!e.e||t.e==e.e)&&(!e.ns||i.test(t.ns))&&(!n||h(t.fn)===h(n))&&(!r||t.sel==r)})}function d(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function m(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function g(t,e){return t.del&&!f&&t.e in c||!!e}function v(t){return l[t]||f&&c[t]||t}function y(t,n,i,o,s,u,f){var c=h(t),p=a[c]||(a[c]=[]);n.split(/\s/).forEach(function(n){if("ready"==n)return e(document).ready(i);var a=d(n);a.fn=i,a.sel=s,a.e in l&&(i=function(t){var n=t.relatedTarget;return!n||n!==this&&!e.contains(this,n)?a.fn.apply(this,arguments):void 0}),a.del=u;var c=u||i;a.proxy=function(e){if(e=T(e),!e.isImmediatePropagationStopped()){e.data=o;var n=c.apply(t,e._args==r?[e]:[e].concat(e._args));return n===!1&&(e.preventDefault(),e.stopPropagation()),n}},a.i=p.length,p.push(a),"addEventListener"in t&&t.addEventListener(v(a.e),a.proxy,g(a,f))})}function x(t,e,n,r,i){var o=h(t);(e||"").split(/\s/).forEach(function(e){p(t,e,n,r).forEach(function(e){delete a[o][e.i],"removeEventListener"in t&&t.removeEventListener(v(e.e),e.proxy,g(e,i))})})}function T(t,n){return(n||!t.isDefaultPrevented)&&(n||(n=t),e.each(w,function(e,r){var i=n[e];t[e]=function(){return this[r]=b,i&&i.apply(n,arguments)},t[r]=E}),t.timeStamp||(t.timeStamp=Date.now()),(n.defaultPrevented!==r?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(t.isDefaultPrevented=b)),t}function S(t){var e,n={originalEvent:t};for(e in t)j.test(e)||t[e]===r||(n[e]=t[e]);return T(n,t)}var r,n=1,i=Array.prototype.slice,o=e.isFunction,s=function(t){return"string"==typeof t},a={},u={},f="onfocusin"in t,c={focus:"focusin",blur:"focusout"},l={mouseenter:"mouseover",mouseleave:"mouseout"};u.click=u.mousedown=u.mouseup=u.mousemove="MouseEvents",e.event={add:y,remove:x},e.proxy=function(t,n){var r=2 in arguments&&i.call(arguments,2);if(o(t)){var a=function(){return t.apply(n,r?r.concat(i.call(arguments)):arguments)};return a._zid=h(t),a}if(s(n))return r?(r.unshift(t[n],t),e.proxy.apply(null,r)):e.proxy(t[n],t);throw new TypeError("expected function")},e.fn.bind=function(t,e,n){return this.on(t,e,n)},e.fn.unbind=function(t,e){return this.off(t,e)},e.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)};var b=function(){return!0},E=function(){return!1},j=/^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,w={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};e.fn.delegate=function(t,e,n){return this.on(e,t,n)},e.fn.undelegate=function(t,e,n){return this.off(e,t,n)},e.fn.live=function(t,n){return e(document.body).delegate(this.selector,t,n),this},e.fn.die=function(t,n){return e(document.body).undelegate(this.selector,t,n),this},e.fn.on=function(t,n,a,u,f){var c,l,h=this;return t&&!s(t)?(e.each(t,function(t,e){h.on(t,n,a,e,f)}),h):(s(n)||o(u)||u===!1||(u=a,a=n,n=r),(u===r||a===!1)&&(u=a,a=r),u===!1&&(u=E),h.each(function(r,o){f&&(c=function(t){return x(o,t.type,u),u.apply(this,arguments)}),n&&(l=function(t){var r,s=e(t.target).closest(n,o).get(0);return s&&s!==o?(r=e.extend(S(t),{currentTarget:s,liveFired:o}),(c||u).apply(s,[r].concat(i.call(arguments,1)))):void 0}),y(o,t,u,a,n,l||c)}))},e.fn.off=function(t,n,i){var a=this;return t&&!s(t)?(e.each(t,function(t,e){a.off(t,n,e)}),a):(s(n)||o(i)||i===!1||(i=n,n=r),i===!1&&(i=E),a.each(function(){x(this,t,i,n)}))},e.fn.trigger=function(t,n){return t=s(t)||e.isPlainObject(t)?e.Event(t):T(t),t._args=n,this.each(function(){t.type in c&&"function"==typeof this[t.type]?this[t.type]():"dispatchEvent"in this?this.dispatchEvent(t):e(this).triggerHandler(t,n)})},e.fn.triggerHandler=function(t,n){var r,i;return this.each(function(o,a){r=S(s(t)?e.Event(t):t),r._args=n,r.target=a,e.each(p(a,t.type||t),function(t,e){return i=e.proxy(r),r.isImmediatePropagationStopped()?!1:void 0})}),i},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t){e.fn[t]=function(e){return 0 in arguments?this.bind(t,e):this.trigger(t)}}),e.Event=function(t,e){s(t)||(e=t,t=e.type);var n=document.createEvent(u[t]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i];return n.initEvent(t,r,!0),T(n)}}(e),function(e){function p(t,n,r){var i=e.Event(n);return e(t).trigger(i,r),!i.isDefaultPrevented()}function d(t,e,n,i){return t.global?p(e||r,n,i):void 0}function m(t){t.global&&0===e.active++&&d(t,null,"ajaxStart")}function g(t){t.global&&!--e.active&&d(t,null,"ajaxStop")}function v(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||d(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void d(e,n,"ajaxSend",[t,e])}function y(t,e,n,r){var i=n.context,o="success";n.success.call(i,t,o,e),r&&r.resolveWith(i,[t,o,e]),d(n,i,"ajaxSuccess",[e,n,t]),b(o,e,n)}function x(t,e,n,r,i){var o=r.context;r.error.call(o,n,e,t),i&&i.rejectWith(o,[n,e,t]),d(r,o,"ajaxError",[n,r,t||e]),b(e,n,r)}function b(t,e,n){var r=n.context;n.complete.call(r,e,t),d(n,r,"ajaxComplete",[e,n]),g(n)}function E(t,e,n){if(n.dataFilter==j)return t;var r=n.context;return n.dataFilter.call(r,t,e)}function j(){}function w(t){return t&&(t=t.split(";",2)[0]),t&&(t==c?"html":t==f?"json":a.test(t)?"script":u.test(t)&&"xml")||"text"}function T(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function S(t){t.processData&&t.data&&"string"!=e.type(t.data)&&(t.data=e.param(t.data,t.traditional)),!t.data||t.type&&"GET"!=t.type.toUpperCase()&&"jsonp"!=t.dataType||(t.url=T(t.url,t.data),t.data=void 0)}function C(t,n,r,i){return e.isFunction(n)&&(i=r,r=n,n=void 0),e.isFunction(r)||(i=r,r=void 0),{url:t,data:n,success:r,dataType:i}}function O(t,n,r,i){var o,s=e.isArray(n),a=e.isPlainObject(n);e.each(n,function(n,u){o=e.type(u),i&&(n=r?i:i+"["+(a||"object"==o||"array"==o?n:"")+"]"),!i&&s?t.add(u.name,u.value):"array"==o||!r&&"object"==o?O(t,u,r,n):t.add(n,u)})}var i,o,n=+new Date,r=t.document,s=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,a=/^(?:text|application)\/javascript/i,u=/^(?:text|application)\/xml/i,f="application/json",c="text/html",l=/^\s*$/,h=r.createElement("a");h.href=t.location.href,e.active=0,e.ajaxJSONP=function(i,o){if(!("type"in i))return e.ajax(i);var c,p,s=i.jsonpCallback,a=(e.isFunction(s)?s():s)||"Zepto"+n++,u=r.createElement("script"),f=t[a],l=function(t){e(u).triggerHandler("error",t||"abort")},h={abort:l};return o&&o.promise(h),e(u).on("load error",function(n,r){clearTimeout(p),e(u).off().remove(),"error"!=n.type&&c?y(c[0],h,i,o):x(null,r||"error",h,i,o),t[a]=f,c&&e.isFunction(f)&&f(c[0]),f=c=void 0}),v(h,i)===!1?(l("abort"),h):(t[a]=function(){c=arguments},u.src=i.url.replace(/\?(.+)=\?/,"?$1="+a),r.head.appendChild(u),i.timeout>0&&(p=setTimeout(function(){l("timeout")},i.timeout)),h)},e.ajaxSettings={type:"GET",beforeSend:j,success:j,error:j,complete:j,context:null,global:!0,xhr:function(){return new t.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:f,xml:"application/xml, text/xml",html:c,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0,dataFilter:j},e.ajax=function(n){var u,f,s=e.extend({},n||{}),a=e.Deferred&&e.Deferred();for(i in e.ajaxSettings)void 0===s[i]&&(s[i]=e.ajaxSettings[i]);m(s),s.crossDomain||(u=r.createElement("a"),u.href=s.url,u.href=u.href,s.crossDomain=h.protocol+"//"+h.host!=u.protocol+"//"+u.host),s.url||(s.url=t.location.toString()),(f=s.url.indexOf("#"))>-1&&(s.url=s.url.slice(0,f)),S(s);var c=s.dataType,p=/\?.+=\?/.test(s.url);if(p&&(c="jsonp"),s.cache!==!1&&(n&&n.cache===!0||"script"!=c&&"jsonp"!=c)||(s.url=T(s.url,"_="+Date.now())),"jsonp"==c)return p||(s.url=T(s.url,s.jsonp?s.jsonp+"=?":s.jsonp===!1?"":"callback=?")),e.ajaxJSONP(s,a);var P,d=s.accepts[c],g={},b=function(t,e){g[t.toLowerCase()]=[t,e]},C=/^([\w-]+:)\/\//.test(s.url)?RegExp.$1:t.location.protocol,N=s.xhr(),O=N.setRequestHeader;if(a&&a.promise(N),s.crossDomain||b("X-Requested-With","XMLHttpRequest"),b("Accept",d||"*/*"),(d=s.mimeType||d)&&(d.indexOf(",")>-1&&(d=d.split(",",2)[0]),N.overrideMimeType&&N.overrideMimeType(d)),(s.contentType||s.contentType!==!1&&s.data&&"GET"!=s.type.toUpperCase())&&b("Content-Type",s.contentType||"application/x-www-form-urlencoded"),s.headers)for(o in s.headers)b(o,s.headers[o]);if(N.setRequestHeader=b,N.onreadystatechange=function(){if(4==N.readyState){N.onreadystatechange=j,clearTimeout(P);var t,n=!1;if(N.status>=200&&N.status<300||304==N.status||0==N.status&&"file:"==C){if(c=c||w(s.mimeType||N.getResponseHeader("content-type")),"arraybuffer"==N.responseType||"blob"==N.responseType)t=N.response;else{t=N.responseText;try{t=E(t,c,s),"script"==c?(1,eval)(t):"xml"==c?t=N.responseXML:"json"==c&&(t=l.test(t)?null:e.parseJSON(t))}catch(r){n=r}if(n)return x(n,"parsererror",N,s,a)}y(t,N,s,a)}else x(N.statusText||null,N.status?"error":"abort",N,s,a)}},v(N,s)===!1)return N.abort(),x(null,"abort",N,s,a),N;var A="async"in s?s.async:!0;if(N.open(s.type,s.url,A,s.username,s.password),s.xhrFields)for(o in s.xhrFields)N[o]=s.xhrFields[o];for(o in g)O.apply(N,g[o]);return s.timeout>0&&(P=setTimeout(function(){N.onreadystatechange=j,N.abort(),x(null,"timeout",N,s,a)},s.timeout)),N.send(s.data?s.data:null),N},e.get=function(){return e.ajax(C.apply(null,arguments))},e.post=function(){var t=C.apply(null,arguments);return t.type="POST",e.ajax(t)},e.getJSON=function(){var t=C.apply(null,arguments);return t.dataType="json",e.ajax(t)},e.fn.load=function(t,n,r){if(!this.length)return this;var a,i=this,o=t.split(/\s/),u=C(t,n,r),f=u.success;return o.length>1&&(u.url=o[0],a=o[1]),u.success=function(t){i.html(a?e("<div>").html(t.replace(s,"")).find(a):t),f&&f.apply(i,arguments)},e.ajax(u),this};var N=encodeURIComponent;e.param=function(t,n){var r=[];return r.add=function(t,n){e.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(N(t)+"="+N(n))},O(r,t,n),r.join("&").replace(/%20/g,"+")}}(e),function(t){t.fn.serializeArray=function(){var e,n,r=[],i=function(t){return t.forEach?t.forEach(i):void r.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(r,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&i(t(o).val())}),r},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(e),function(){try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;t.getComputedStyle=function(t,e){try{return n(t,e)}catch(r){return null}}}}(),e});

//     Zepto.js
//     (c) 2010-2016 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.

;(function($){
  var zepto = $.zepto, oldQsa = zepto.qsa, oldMatches = zepto.matches

  function visible(elem){
    elem = $(elem)
    return !!(elem.width() || elem.height()) && elem.css("display") !== "none"
  }

  // Implements a subset from:
  // http://api.jquery.com/category/selectors/jquery-selector-extensions/
  //
  // Each filter function receives the current index, all nodes in the
  // considered set, and a value if there were parentheses. The value
  // of `this` is the node currently being considered. The function returns the
  // resulting node(s), null, or undefined.
  //
  // Complex selectors are not supported:
  //   li:has(label:contains("foo")) + li:has(label:contains("bar"))
  //   ul.inner:first > li
  var filters = $.expr[':'] = {
    visible:  function(){ if (visible(this)) return this },
    hidden:   function(){ if (!visible(this)) return this },
    selected: function(){ if (this.selected) return this },
    checked:  function(){ if (this.checked) return this },
    parent:   function(){ return this.parentNode },
    first:    function(idx){ if (idx === 0) return this },
    last:     function(idx, nodes){ if (idx === nodes.length - 1) return this },
    eq:       function(idx, _, value){ if (idx === value) return this },
    contains: function(idx, _, text){ if ($(this).text().indexOf(text) > -1) return this },
    has:      function(idx, _, sel){ if (zepto.qsa(this, sel).length) return this }
  }

  var filterRe = new RegExp('(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*'),
    childRe  = /^\s*>/,
    classTag = 'Zepto' + (+new Date())

  function process(sel, fn) {
    // quote the hash in `a[href^=#]` expression
    sel = sel.replace(/=#\]/g, '="#"]')
    var filter, arg, match = filterRe.exec(sel)
    if (match && match[2] in filters) {
      filter = filters[match[2]], arg = match[3]
      sel = match[1]
      if (arg) {
        var num = Number(arg)
        if (isNaN(num)) arg = arg.replace(/^["']|["']$/g, '')
        else arg = num
      }
    }
    return fn(sel, filter, arg)
  }

  zepto.qsa = function(node, selector) {
    return process(selector, function(sel, filter, arg){
      try {
        var taggedParent
        if (!sel && filter) sel = '*'
        else if (childRe.test(sel))
        // support "> *" child queries by tagging the parent node with a
        // unique class and prepending that classname onto the selector
          taggedParent = $(node).addClass(classTag), sel = '.'+classTag+' '+sel

        var nodes = oldQsa(node, sel)
      } catch(e) {
        console.error('error performing selector: %o', selector)
        throw e
      } finally {
        if (taggedParent) taggedParent.removeClass(classTag)
      }
      return !filter ? nodes :
        zepto.uniq($.map(nodes, function(n, i){ return filter.call(n, i, nodes, arg) }))
    })
  }

  zepto.matches = function(node, selector){
    return process(selector, function(sel, filter, arg){
      return (!sel || oldMatches(node, sel)) &&
        (!filter || filter.call(node, null, arg) === node)
    })
  }
})(Zepto)

if (typeof jQuery !== 'object') {
  jQuery = window.Zepto;
}

if (typeof JSON !== 'object') {
  JSON = {};
}

/* -------------------------------------------------------------------------------- 
   File /system/shared/common/assets/js/jquery/plugins/json.js
   --------------------------------------------------------------------------------
*/
/*
    json2.js
    2013-05-26

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, regexp: true */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

if (typeof JSON !== 'object') {
    JSON = {};
}

(function () {
    'use strict';

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function () {

            return isFinite(this.valueOf())
                ? this.getUTCFullYear()     + '-' +
                    f(this.getUTCMonth() + 1) + '-' +
                    f(this.getUTCDate())      + 'T' +
                    f(this.getUTCHours())     + ':' +
                    f(this.getUTCMinutes())   + ':' +
                    f(this.getUTCSeconds())   + 'Z'
                : null;
        };

        String.prototype.toJSON      =
            Number.prototype.toJSON  =
            Boolean.prototype.toJSON = function () {
                return this.valueOf();
            };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string'
                ? c
                : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0
                    ? '[]'
                    : gap
                    ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
                    : '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === 'string') {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0
                ? '{}'
                : gap
                ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
                : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/
                    .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function'
                    ? walk({'': j}, '')
                    : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());



/**
 jQuery plugin methods interface, in order to keep the backward compatibility
*/




(function($) {

    $.toJSON = function(o)
    {
        if (typeof(JSON) == 'object' && JSON.stringify)
            return JSON.stringify(o);
        
    };


    $.evalJSON = function(src)
    {
        if (typeof(JSON) == 'object' && JSON.parse)
            return JSON.parse(src);
    };
    
    $.secureEvalJSON = function(src)
    {
        if (typeof(JSON) == 'object' && JSON.parse)
            return JSON.parse(src);
        
    };
})(jQuery);

;

/* -------------------------------------------------------------------------------- 
   End /system/shared/common/assets/js/jquery/plugins/json.js
   --------------------------------------------------------------------------------
*/

/* -------------------------------------------------------------------------------- 
   File /system/shared/common/assets/js/utilities/url.js
   --------------------------------------------------------------------------------
*/
/**
*
*  URL encode / decode
*
**/
var Url = {
  encode : function (string) {
    return encodeURI(string);
  }

  ,decode : function (string) {
    return decodeURI(string);
  }

  ,encodeComponent : function (string) {
    return encodeURIComponent(string);
  }

  ,decodeComponent : function (string) {
    return decodeURIComponent(string);
  }

  /* Appends CDN domain if applicable for the file extension and type.  
     Reads from /system/modules/_common/templates/includes/js-settings to get "domainPrefixes" map. 
  */
  ,getFullUrl : function(url) {
    try {
      // ignore URLs that have "http://", "https://" or "//" at the beginning
      var ignoreRegEx = /^(https?:)?\/\//
      var noDomain = (url.match(ignoreRegEx) == null);
      var dotIndex = url.lastIndexOf(".");
      var domainPrefixes = com.salesforce.www.App.config.domainPrefixes;

      if (noDomain && dotIndex > 0 && domainPrefixes != null) {
        var ext = url.substring(dotIndex+1);
        var domainPrefix = domainPrefixes[ext];
        if (domainPrefix != null) {
          // if relative URL, then get the base path name from current page, e.g. image.png --> /path/path/image.png
          if (url.indexOf("/") != 0) {
            var path = document.location.pathname;
            url = path.substring(0, path.lastIndexOf('/')+1) + url; 
          }
          return domainPrefix + url;
        }
      }
    } catch(e) {
      // do nothing
    } 
    return url;
  }

}
;

/* -------------------------------------------------------------------------------- 
   End /system/shared/common/assets/js/utilities/url.js
   --------------------------------------------------------------------------------
*/

/* -------------------------------------------------------------------------------- 
   File /system/shared/common/assets/js/utilities/base64.js
   --------------------------------------------------------------------------------
*/
/**
*
*  Base64 encode / decode
*  http://www.webtoolkit.info/
*
**/
var Base64 = {
  // private property
  _keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

  // public method for encoding
  encode : function (input) {
    var output = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;

    input = Base64._utf8_encode(input);

    while (i < input.length) {
      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);

      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;

      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }

      output = output +
      this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
      this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
    }

    return output;
  },

  // public method for decoding
  decode : function (input) {
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
    
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    
    while (i < input.length) {
      enc1 = this._keyStr.indexOf(input.charAt(i++));
      enc2 = this._keyStr.indexOf(input.charAt(i++));
      enc3 = this._keyStr.indexOf(input.charAt(i++));
      enc4 = this._keyStr.indexOf(input.charAt(i++));
      
      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;
      
      output = output + String.fromCharCode(chr1);
      
      if (enc3 != 64) {
        output = output + String.fromCharCode(chr2);
      }
      if (enc4 != 64) {
        output = output + String.fromCharCode(chr3);
      }
    }

    output = Base64._utf8_decode(output);

    return output;
  },

  // private method for UTF-8 encoding
  _utf8_encode : function (string) {
    string = string.replace(/\r\n/g,"\n");
    var utftext = "";

    for (var n = 0; n < string.length; n++) {
      var c = string.charCodeAt(n);

      if (c < 128) {
        utftext += String.fromCharCode(c);
      } else if ((c > 127) && (c < 2048)) {
        utftext += String.fromCharCode((c >> 6) | 192);
        utftext += String.fromCharCode((c & 63) | 128);
      } else {
        utftext += String.fromCharCode((c >> 12) | 224);
        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
        utftext += String.fromCharCode((c & 63) | 128);
      }
    }

    return utftext;
  },

  // private method for UTF-8 decoding
  _utf8_decode : function (utftext) {
    var string = "";
    var i = 0;
    var c = c1 = c2 = 0;

    while ( i < utftext.length ) {
      c = utftext.charCodeAt(i);

      if (c < 128) {
        string += String.fromCharCode(c);
        i++;
      } else if ((c > 191) && (c < 224)) {
        c2 = utftext.charCodeAt(i+1);
        string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
        i += 2;
      } else {
        c2 = utftext.charCodeAt(i+1);
        c3 = utftext.charCodeAt(i+2);
        string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        i += 3;
      }
    }

    return string;
  }
}
;

/* -------------------------------------------------------------------------------- 
   End /system/shared/common/assets/js/utilities/base64.js
   --------------------------------------------------------------------------------
*/

/* -------------------------------------------------------------------------------- 
   File /system/shared/common/assets/js/utilities/cookieHandler.js
   --------------------------------------------------------------------------------
*/
/**
*
*  Javascript cookies
*  http://www.webtoolkit.info/
*
**/
function CookieHandler() {
  this.setCookie = function (name, value, seconds, domain) {
    domain = domain ? domain : Server.getCookieDomain();
    var expires = "";
    var expiresNow = "";
    var date = new Date();
    date.setTime(date.getTime() + (-1*1000));
    expiresNow = "; expires=" + date.toGMTString();

    if (typeof(seconds) != 'undefined') {
      date.setTime(date.getTime() + (seconds*1000));
      expires = "; expires=" + date.toGMTString();
    }

    // fix production scoping issues
    // keep writing the old cookie, but make it expire
    document.cookie = name + "=" + value + expiresNow + "; path=/";
    // now just set the right one
    document.cookie = name + "=" + value + expires + "; path=/; domain=" + domain;
  }

  this.getCookie = function (name) {
    name = name + "=";
    var carray = document.cookie.split(';');

    for(var i=0;i < carray.length;i++) {
      var c = carray[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }

    return null;
  }
  
  this.deleteCookie = function (name) {
    this.setCookie(name, "", -1);
    this.setCookie(name, "", -1, document.location.hostname);
  }
}
;

/* -------------------------------------------------------------------------------- 
   End /system/shared/common/assets/js/utilities/cookieHandler.js
   --------------------------------------------------------------------------------
*/

/* -------------------------------------------------------------------------------- 
   File /system/shared/common/assets/js/utilities/util.js
   --------------------------------------------------------------------------------
*/
var Util = Util || {} ;

(function($){

    $.extend(Util, {

    ua : navigator.userAgent
    ,isTouch : "createTouch" in document
    
    ,isOkAMO: function (str) {
         return typeof str === 'string'  && str.length <= 100 && /^[a-zA-Z0-9\-@:_]+$/.test(str);
    }

    // client-side redirect w/ cookies
    ,redirect : function (destination) {
      var cookiejar = new CookieHandler();
      var referrer = document.referrer ? document.referrer : '';
      cookiejar.setCookie('referrer',escape(referrer),60); // 60 seconds
      top.location.href = destination;
    }

    ,isValidJson : function (jsonString) {
      if (!jsonString) {
        return false;
      }
      return !(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(jsonString.replace(/"(\\.|[^"\\])*"/g, ''))) && eval('(' + jsonString + ')');
    }

    ,parseJSON : function(str) {
      if (!str) {
        return {};
      }
      return $.secureEvalJSON(str);
    }

    ,toJSON : function(obj) {
      if (!obj) {
        return '';
      }
      return $.toJSON(obj);
    }

    ,stripXssChars : function (original) {
      return original.replace(/[<>:;#$%()]/gi, '');
    }

    ,getCookie : function(cookieName) {
      var cookieVal = (new CookieHandler()).getCookie(cookieName);
      cookieVal = cookieVal == null ? '' : Url.decodeComponent(cookieVal);
      if (this.isValidJson(cookieVal)) {
        return this.parseJSON(cookieVal);
      }
      return cookieVal;
    }

    ,setCookie : function(val, cookieName, expiration, domain) {
      var cookieVal = '';
      if (typeof(val) == 'object') {
        cookieVal = this.toJSON(val);
      } else if (typeof(val) == 'string' || typeof(val) == 'number') {
        cookieVal = val;
      } else {
        return false;
      }
      (new CookieHandler()).setCookie(
        cookieName
        ,Url.encodeComponent(cookieVal)
        ,expiration
        ,domain || ''
      );
    }

    ,deleteCookie : function(cookieName) {
      (new CookieHandler()).deleteCookie(cookieName);
    }

    ,getJSONCookie : function(cookieName) {
      var cookieVal = (new CookieHandler()).getCookie(cookieName);
      cookieVal = cookieVal == null ? '' : Url.decodeComponent(cookieVal);
      if (!this.isValidJson(cookieVal)) {
        return {};
      }
      return this.parseJSON(cookieVal);
    }

    ,setJSONCookie : function(vals, cookieName, expiration, domain) {
      var cookieVal = this.toJSON(vals);
      (new CookieHandler()).setCookie(
        cookieName
        ,Url.encodeComponent(cookieVal)
        ,expiration
        ,domain
      );
    }

    // convert case-sensitve to insensitive ids
    ,convert15To18 : function (id) {
      if (id == null || id.length == 18 || id.indexOf("70") != 0) {
        return id;
      } else if (id.length != 15) {
        return id;
      } else {
        var suffix = "";
        for (var i = 0; i < 3; i++) {
          var flags = 0;
          for (var j = 0; j < 5; j++) {
            var c = id.charAt(i * 5 + j);
            if (c >= 'A' && c <= 'Z') {
              flags += 1 << j;
            }
          }
          if (flags <= 25) {
            suffix += "ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(flags);
          } else {
            suffix += "012345".charAt(flags-26);
          }
        }
        return id + suffix;
      }
    }

    ,getParam : function (name, targetURL) {
      if (!targetURL) {
        targetURL = window.location.href;
        
      } else if (targetURL.indexOf('?') == -1) {
        targetURL = '?' + targetURL;
      }
      /*targetURL = $(targetURL).text();*/
      targetURL = Url.decodeComponent(targetURL);
      var regexS = "[\\?&]+"+name+"=([^&#]*)";
      var regex = new RegExp( regexS, "i" );
      var results = regex.exec( targetURL );
      if( results == null )
        return "";
      else
        return results[1].replace(/^[ \t]+|[ \t]+$/, "");
    }

    ,cleanUrlData : function(val) {
      if (!val) {
        return '';
      }
      val = val.replace(/\+/g, " ");
      val = val.replace(/[',"]/g,"");
      val = val.replace(/\t/g, "");
      val = val.replace(/\n/g, "");
      val = val.toLowerCase();
      return val;
    }

    ,countChars : function(str, chr) {
      var count = 0;
      for (var i=0; i<str.length; i++) {
        if(str.charAt(i) == chr) {
          count++;
        }
      }
      return count;
    }

    ,deDupe : function(list) {
      // accepts only array
      if (!list || typeof(list) == 'string') {
        return '';
      }

      // checks if object is in seen dict, and filters accordingly
      // if already in dict, filter out, if not in dict, add it in
      var seen = {};
      return $(list).filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
      });
    }

    ,getMeta : function (name) {
      var content = '';
      $('meta').each(function(){
        var attr = '';
        if ($(this).attr('name') === name) {
          attr = 'name';
        } else if ($(this).attr('property') === name) {
          attr = 'property';
        }
        if (attr) {
          content = $(this).attr('content');
          return false;
        }
      });
      return content;
    }

    ,isIOS : function() {
      return this.isIPhone() || this.isIPad();
    }

    ,isIPhone : function() {
      return (this.ua.match(/iPhone/i) != null) || (this.ua.match(/iPod/i) != null);
    }

    ,isIPad : function() {
      return (this.ua.match(/iPad/i) != null);
    }

    ,getScreenSize : function() {
      var $w = $(window);
      return [$w.width(), $w.height()];
    }

    ,isRobot : function() {
      return (this.ua.match(/google web preview/i) != null) ||
        (this.ua.match(/gomezagent/i) != null) ||
        (this.ua.match(/dejaclick/i) != null) ||
        (this.ua.match(/KTXN/i) != null);
    }

    ,getHref : function (linkObj) {
      try {
        if (linkObj.href && !(linkObj.href == document.location.href || linkObj.href == '#' || linkObj.href.indexOf(document.location.href + '#') > -1)) {
          return linkObj.href;
        } else if (!(linkObj.getAttribute('sfdc:href') == '' || linkObj.getAttribute('sfdc:href') == null)) {
          return linkObj.getAttribute('sfdc:href');
        } else {
          return '';
        }
      } catch (ex) {
        return '';
      }
    }

    ,getDriver : function (clickedUrl) {
      if (!clickedUrl) {
        return '';
      } else if (Util.getParam('d', clickedUrl).length === 18) {
        clickedUrl = clickedUrl.replace('?d=' + Util.getParam('d', clickedUrl), '?');
        clickedUrl = clickedUrl.replace('&d=' + Util.getParam('d', clickedUrl), '&');
      }
      if (!document.location.search) {
        return clickedUrl;
      }

      var qParams = document.location.search.substring(1).split('&');
      if (clickedUrl.indexOf('?') + 1 === clickedUrl.length) {
        clickedUrl = clickedUrl.substring(0, clickedUrl.length - 1);
      }
      for (var i=0; i<qParams.length; i++) {
        var param = qParams[i].substring(0, qParams[i].indexOf('='));
        if (Util.getParam(param)) {
          // if clickedUrl has this param, replace
          // else append
          var from = param + '=' + this.getParam(param, clickedUrl), to = param + '=' + this.getParam(param);
          if (this.getParam(param, clickedUrl)) {
            clickedUrl = clickedUrl.replace('?' + from, '?' + to);
            clickedUrl = clickedUrl.replace('&' + from, '&' + to);
          } else {
            clickedUrl += (clickedUrl.indexOf('?') > -1 ? '&' : '?') + to;
          }
        }
      }
      if (Util.getParam('d', clickedUrl).length === 18) {
        clickedUrl = clickedUrl.replace(Util.getParam('d', clickedUrl), Util.getParam('d', clickedUrl).substring(0, 15));
      }
      /*if (Util.getParam('d', clickedUrl) && Util.getParam('d', clickedUrl).length !== 15) {
        clickedUrl = clickedUrl.replace('?d=' + Util.getParam('d', clickedUrl), '?');
        clickedUrl = clickedUrl.replace('&d=' + Util.getParam('d', clickedUrl), '&');
      }
      */
      return clickedUrl;
      
    }

    ,ellipsis : function (str, max) {
      if (str.length < max){
        return str;
      }else{
        str = str.substring(0,max-3);
        if (str.indexOf(" ")!=-1){
          if (" "!=str.charAt(str.length)){
            str = str.substring(0,str.lastIndexOf(" "))
          }
        }
        return str + "...";
      }
    }

    ,endsWith : function(val1, val2) {
      if (!(val1 || val2) || val1.indexOf(val2) === -1) {
        return false;
      } else {
        if (val1.indexOf(val2) + val2.length === val1.length) {
          return true;
        }
      }
      return false;
    }

    ,equalHeights : function(elSet) {
      var tallestEl = 0;
      if (typeof elSet !== 'undefined'){
        elSet.each(function() {
          var thisHeight = $(this).height();
          if(thisHeight > tallestEl) {
            tallestEl = thisHeight;
          }
        });
        elSet.height(tallestEl);
      }
    }
    // for the "more" links.  Hides the current link and shows the next sibling span.
    // Usage: <a href="#" onclick="return Util.moreLinkShowNext(this)">...more</a><span style="display:none;">...</span>
    ,moreLinkShowNext : function(el) {
      $(el).hide().next().show();
      return false;
    }
  });

    })(jQuery);   // jQuery, but not necessary $, is defined at this point, especially when including on app pages
;

/* -------------------------------------------------------------------------------- 
   End /system/shared/common/assets/js/utilities/util.js
   --------------------------------------------------------------------------------
*/

/* -------------------------------------------------------------------------------- 
   File /system/shared/common/assets/js/analytics/server.js
   --------------------------------------------------------------------------------
*/
/*
 * shared tracking configuration library that defines site-level parameters
 * see /common/assets/js/analytics for a corresponding site-specific configuration file
 */
var Server = {
  isStaging: false

  ,getAccount: function() {
    if (Util.getParam('trackAccount')) {
      return Util.getParam('trackAccount');
    } else if (Util.isRobot() || !this.isProduction()) {
      return this.stagingAccount;
    } else {
      return this.productionAccount;
    }
  }

  ,isProduction: function() {
    if (Server.isStaging) {
      return false;
    } 
    if (this.productionDomains.length > 0) {
      for (var i in this.productionDomains) {
        if (self.location.href.indexOf(this.productionDomains[i]) > 0) {
          return true;
        }
      }
    }
    if (this.stagingDomains.length > 0) {
      for (var i in this.stagingDomains) {
        if (self.location.href.indexOf(this.stagingDomains[i]) > 0) {
          return false;
        }
      }
    }
    return false;
  }

  // uses sitebean info stored in com.salesforce.www.App.config set by js-settings.jsp
  ,isProductionMachine : function() {
    try {
      return (com.salesforce.www.App.config.isProduction == true);
    } catch(e) {
      return false;
    }
  }

  ,isStage: function() {
    return !this.isProduction();
  }

  ,getExternalDomains: function() {
    return this.externalDomains || [];
  }

  ,getInternalDomains: function() {
    return this.internalDomains || [];
  }
  
  ,getCookieDomain: function() {}
};
;

/* -------------------------------------------------------------------------------- 
   End /system/shared/common/assets/js/analytics/server.js
   --------------------------------------------------------------------------------
*/

/* -------------------------------------------------------------------------------- 
   File /common/assets/js/analytics/server-basic.js
   --------------------------------------------------------------------------------
*/
Server.productionAccount = 'salesforcemarketing';
Server.stagingAccount = 'salesforce';
Server.productionDomains = ['platformtour.salesforce.com'];
Server.stagingDomains = [];
Server.internalDomains = ['platformtour.salesforce.com'];
Server.externalDomains = [];

Server.getCookieDomain = function() {
  return '.salesforce.com';
};


Server.cdnUrlPrefix = document.location.protocol + '//' + (document.location.protocol == 'https:' ? 'secure' : 'www') + '.sfdcstatic.com';
;

/* -------------------------------------------------------------------------------- 
   End /common/assets/js/analytics/server-basic.js
   --------------------------------------------------------------------------------
*/

/* -------------------------------------------------------------------------------- 
   File /system/shared/common/assets/js/analytics/visitorProfile.js
   --------------------------------------------------------------------------------
*/
/*
 * shared utilities for visitor profiling
 * must follow:
 * - a definition of VisitorProfile.prototype.getType
 * - instantiation of a VisitorProfile object named 'vp'
 * optional VisitorProfile.prototype.customSetup() will be called during constructor execution
 * any other custom functions used by your site
 */

/**
* Visitor Profile 
* @since w156.3
* ***********************************************/
function VisitorProfile() {
  this.version = 'w172.1';
  
  // prepare timestamp
  var now = new Date();
  this.timestamp = now.getTime();

  // get all the profile and activity data from cookies
  this.profileData = Util.getCookie('appxud') || {};
  if (typeof(this.profileData) != 'object') {
    this.profileData = {};
    Util.deleteCookie('appxud');
  }
  this.activityData = Util.getCookie('webact') || {};
  if (typeof(this.activityData) != 'object') {
    this.activityData = {};
    Util.deleteCookie('webact');
  }
  
  // update session details
  if (this.isNewSession()) {
    this.activityData['l_vdays'] = this.isNewVisitor() ? -1 : Math.round((this.timestamp - this.lastVisit()) / (1000*60*60*24));
    this.activityData['l_visit'] = this.getSession();
    this.activityData['session'] = this.timestamp;
    this.activityData['l_search'] = '';
    this.activityData['l_dtype'] = ("" != this.activityData['l_dtype'] && typeof(this.activityData['l_dtype']) != "undefined") ? this.activityData['l_dtype'] : '';
    this.activityData['l_page'] = '';
    if (this.lastVisit() >= this.firstVisit()) {
      this.activityData['counter']++;
      this.activityData['pv'] = 0;
    }
  }
  this.idle = this.sessionTimer();
  this.activityData['session'] = this.timestamp;
  
  // set new visitor details
  if (this.isNewVisitor()) {
    this.activityData['counter'] = 0;
    if (this.firstVisit() == 0) {
      this.activityData['f_visit'] = this.timestamp;
      this.activityData['version'] = this.version;
    }
  }
  
  if (typeof(this.customSetup) == 'function') {
    this.customSetup();
  }
  
  /* 
  * If "forceProfile=customer|prospect" param is specified for testing and is different than the current profile,
  * change the profile and skip saving activity data back to the cookie
  */ 
  this.skipSave = false;
  var forceProfile = Util.getParam('forceProfile');
  if ((forceProfile == 'customer' && !this.isCustomer()) || (forceProfile == 'prospect' && this.isCustomer())) {
    this.activityData['customer'] = (forceProfile == 'customer' ? this.timestamp : '');
    this.skipSave = true;
  }
  
  // record unique form complete ID if available
  if (this.getProperty('hash') && (this.getProperty('fcid') || Util.getParam('FormCampaignId'))) {
    this.setFormCompleteId();
  }

  this.saveActivityData();
}

/**
* Cookie / JSON Utils
**************************************************/
VisitorProfile.prototype.getBase64Cookie = function(cookieName) {
  var cd = Util.getCookie(cookieName);
  return (cd == null || !cd) ? '' : Base64.decode(Url.decodeComponent(cd));
}

VisitorProfile.prototype.getWWWCookie = function(cookieName) {
  // look for the server-side-scripted cookie value
  try {
    var cv = wwwCookies[cookieName];
    return Util.isValidJson(cv) ? Util.parseJSON(cv) : '';
  } catch(ex) {
    return '';
  }
}

/**
* Methods for handling activities / profiles
**************************************************/
VisitorProfile.prototype.saveProfileData = function() {
  Util.setJSONCookie(this.profileData, 'appxud', 60*60*24*180); // exp 6 months
  return true;
}

VisitorProfile.prototype.saveActivityData = function() {
  // save is skipped if forceProfile is different from the cookie profile
  if (this.skipSave != true) {
    Util.setJSONCookie(this.activityData, 'webact', 60*60*24*365); // exp 1 year
  }
  return true;
}

VisitorProfile.prototype.getActivity = function(propertyName) {
  // always return an empty string instead of a null
  // so we can safely print back to form values easily
  if (this.activityData != null) {
    return (this.activityData[propertyName] != null ? this.activityData[propertyName] : '');
  } else {
    return '';
  }
}

VisitorProfile.prototype.isCustomer = function() {
  return (this.getActivity('customer') > 0);
}

VisitorProfile.prototype.isDeveloper = function() {
  return (this.getActivity('developer') > 0);
}

VisitorProfile.prototype.isTrialUser = function() {
  return (this.getActivity('trial') > 0);
}

VisitorProfile.prototype.hasCurrentTrial = function() {
  // if trial login within 30 days
  // or if trial form within 30 days
  var converter = 1000 * 60 * 60 * 24;
  if (((this.timestamp - this.getActivity('trial')) / converter) <= 30) {
    return true;
  } else if (((this.timestamp - this.getActivity('signup')) / converter) <= 30) {
    return true;
  } else {
    return false;
  }
}

VisitorProfile.prototype.getVisitNumber = function() {
  return (this.getActivity('counter') > 0 ? this.getActivity('counter') : 0) + 1; // starts from 1
}

VisitorProfile.prototype.isNewVisitor = function() {
  return (this.lastVisit()==0);
}

VisitorProfile.prototype.lastVisit = function() {
  return (this.getActivity('l_visit') > 0 ? this.getActivity('l_visit') : 0);
}

VisitorProfile.prototype.getDaysSinceLastVisit = function() {
  if (this.getActivity('l_vdays') == -1) {
    return 'First Visit';
  } else if (this.getActivity('l_vdays') > -1 && this.getActivity('l_vdays') <= 1) {
    return 'Less than 1 day';
  } else if (this.getActivity('l_vdays') > 1 && this.getActivity('l_vdays') <= 7) {
    return 'Less than 7 days';
  } else if (this.getActivity('l_vdays') > 7 && this.getActivity('l_vdays') <= 30) {
    return 'More than 7 days';
  } else if (this.getActivity('l_vdays') > 30) {
    return 'More than 30 days';
  } else {
    return 'Cookies Not Supported'; 
  }
}

VisitorProfile.prototype.firstVisit = function() {
  return (this.getActivity('f_visit') > 0 ? this.getActivity('f_visit') : 0);
}

VisitorProfile.prototype.getSession = function() {
  return (this.getActivity('session') > 0 ? this.getActivity('session') : 0);
}


VisitorProfile.prototype.isNewSession = function() {
  var sessionLength = 30*60;  // 30 mins
  if (this.sessionTimer() > sessionLength || this.newSession) {
    this.newSession = true;
  } else {
    this.newSession = false;   
  }
  return this.newSession;
}

// returns number of seconds since this session started
VisitorProfile.prototype.sessionTimer = function() {
  return (this.timestamp - this.getSession()) / 1000;
}

VisitorProfile.prototype.getVersion = function() {
  return this.getActivity('version');
}

VisitorProfile.prototype.getFormCompleteId = function() {
  return this.fcid;
}

VisitorProfile.prototype.setFormCompleteId = function() {
  var fcid = Util.getParam('FormCampaignId') || this.getProperty('fcid');
  if (fcid) {
    this.fcid = Util.convert15To18(fcid) + '|' + this.getProperty('hash');
    this.saveProfileData();
  }
}
;

/* -------------------------------------------------------------------------------- 
   End /system/shared/common/assets/js/analytics/visitorProfile.js
   --------------------------------------------------------------------------------
*/

/* -------------------------------------------------------------------------------- 
   File /common/assets/js/analytics/visitorProfile-basic.js
   --------------------------------------------------------------------------------
*/
// precedence is important here!
VisitorProfile.prototype.getType = function() {
  return 'anonymous';
}

VisitorProfile.prototype.getIdleTime = function() {
  var i = vp.idle;
  if (0 == i) {
    return 'No Previous Quip Page';
  } else if (0 < i && i <= 2) {
    return '< 2 Seconds';
  } else if (2 < i && i <= 5) {
    return '2-5 Seconds';
  } else if (5 < i && i <= 10) {
    return '6-10 Seconds';
  } else if (10 < i && i <= 15) {
    return '11-15 Seconds';
  } else if (15 < i && i <= 20) {
    return '16-20 Seconds';
  } else if (20 < i && i <= 30) {
    return '21-30 Seconds';
  } else if (30 < i && i <= 60) {
    return '31-60 Seconds';
  } else if (60 < i && i <= 120) {
    return '1-2 Minutes';
  } else if (120 < i && i <= 180) {
    return '2-3 Minutes';
  } else if (180 < i && i <= 300) {
    return '3-5 Minutes';
  } else {
    return '> 5 Minutes';
  }
}


/**
* Methods for handling profile details
**************************************************/
VisitorProfile.prototype.getProperty = function(propertyName) {
  // always return an empty string instead of a null
  // so we can safely print back to form values easily
  if (this.profileData != null) {
    return (this.profileData[propertyName] != null ? this.profileData[propertyName] : '');
  } else {
    return '';
  }
}

// now instantiate it
var vp = new VisitorProfile();
;

/* -------------------------------------------------------------------------------- 
   End /common/assets/js/analytics/visitorProfile-basic.js
   --------------------------------------------------------------------------------
*/

/* -------------------------------------------------------------------------------- 
   File /system/shared/common/assets/js/analytics/page.js
   --------------------------------------------------------------------------------
*/
/*
 * shared page-level tracking configuration library
 * see /common/assets/js/analytics for a corresponding site-specific configuration file
 */
var Page;
(function($){
Page = {
  name:       null
  ,server:      null
  ,type:        null
  ,driver:      null
  ,previous:      null
  ,locale:      'us'
  ,excludeParams:     ['un', 'pw', 'vysfid', 'vyemail']
  
  ,getName: function() {
    if (this.name == null) {
      this.setName();
    }
    return this.name;
  }

  ,setPrevious: function() {
    this.previous = vp.getActivity('l_page');
    vp.activityData['l_page'] = this.name;
    if (vp.activityData['pv'] == null) {
      vp.activityData['pv'] = 0;
    }
    vp.activityData['pv']++;
    vp.saveActivityData();
    return this.previous;
  }
  
  ,getPrevious: function() {
    if (this.previous == null) {
      this.setPrevious();
    }
    return this.previous == null ? '' : this.previous;
  }
  
  ,getNameNoLocale: function() {
    // replace only first occurrence  
    return this.getName().replace(':' + this.getLocale() + ':', ':');  
  }
  
  ,getPathNode: function(nodeNumber, pageName) {
    var nodes = '';
    if (typeof pageName === 'string') {
      nodes = pageName.split(':');
    } else {
      nodes = !this.name ? (document.location.pathname.substring(1).split('/')) : this.getName().split(':');
    }
    var part = (nodeNumber <= nodes.length ? nodes[nodeNumber] : '');
    if (null != part && "" != part) {
      return part.toString();
    } else {
      return "";
    }
  }
  
  ,getSegment: function() {
    if (vp.getType()=='employee' || vp.getType()=='customer') {
      return vp.getType()  + ':' + this.getLocale();
    } else {
      return 'non-customer' + ':' + this.getLocale();
    }
  }
  
  ,saveDriver: function() {
    vp.activityData['l_dtype'] = this.driver.type;
    // Driver is hardcoded since it is the default driver
    // See JSON below in driverLookup() below to see the driver for Typed/Bookmarked, which should match the one in this block
    if (Page.getDriver() && Page.getDriver()['id'] === "Typed/Bookmarked" && Page.getDriver()['type'] === "Typed/Bookmarked") {
        vp.activityData['d'] = '70130000000sUVq';
    } else {
        vp.activityData['d'] = Util.getParam('d') ? Util.getParam('d') : this.driverLookup.getDefault(this.driver.type, this.driver.id);
    }
    vp.saveActivityData();
  }
  
  ,getDriver: function() {
    if (this.driver) {
      return this.driver;
    } else if (this.hasInternalReferrer()) {
      if (Util.getParam('d')) {
        return { id:(Util.getParam('d').length == 15 ? Util.convert15To18(Util.getParam('d')) : Util.getParam('d')), type:'internal' };
      } else {
        return false;  
      }
    } else if (this.getReferrer() || Util.getParam('d')) {
      var driverID = Util.getParam('d') ? Util.convert15To18(Util.getParam('d')) : '', driver;
      for (var i=0; i<this.driverLookup.types.length; i++) {
        var dt = this.driverLookup.types[i];
        if (dt.qp) {
          var params = dt.qp.split(',');
          isType = true;
          for (var j=0; j<params.length; j++) {
            if (params[j].indexOf('|') > -1) {
              var split = params[j].split('|'), orCheck = false;
              for (var k=0; k<split.length; k++) {
                if (Util.getParam(split[k])) {
                  orCheck = true;
                  break;
                }
              }
              if (!orCheck) {
                isType = false;
              }
            } else if (!Util.getParam(params[j])) {
              isType = false;
              break;
            }
          }
          if (isType && Util.getParam('internal') != 'true') {
            driver = { id:driverID + '|' + dt.name, type:dt.name };
            if (dt.cb) {
              driver = this.driverLookup[dt.cb](driver);
              if (driver) {
                // special case when they have an invalid driver, and no second param
                if (driver.id ==='null|Other') {
                    this.driver = {id: "Typed/Bookmarked", type: "Typed/Bookmarked"};
                } else {
                    this.driver = driver;
                }
                this.saveDriver(driverID);
                return this.driver;
              }
            } else {
              this.driver = driver;
              this.saveDriver(driverID);
              return this.driver;
            }
          }
        } else {
          if (dt.pm) {
            for (var j=0; j<dt.pm.length; j++) {
              var pml = dt.pm[j].ms.split(',');
              isType = false;
              for (var z=0; z<pml.length; z++) {
                if (this.getReferrer().indexOf(pml[z]) > -1) {
                  isType = true;
                  driver = { id:(driverID ? driverID + '|' : '') + dt.name + '|' + dt.pm[j].name, type:dt.name };
                  if (driver) {
                    this.driver = driver;
                    this.saveDriver(driverID);
                    return this.driver;
                  }
                }
              }
            }
          }
          if (dt.cb) {
            // make callback
            driver = { id:(driverID ? driverID + '|' + dt.name : ''), type:dt.name };
            driver = this.driverLookup[dt.cb](driver);
            if (driver) {
              this.driver = driver;
              this.saveDriver(driverID);
              return this.driver;
            }
          }
        }
      }
    }
    this.driver = { id:this.driverLookup.types[this.driverLookup.types.length-1].name, type:this.driverLookup.types[this.driverLookup.types.length-1].name };
    this.saveDriver();
    return this.driver;
  }
  
  ,hasInternalReferrer: function() {
    if (this.hasExternalReferrer()) {
      return false;
    }
    var r = this.getReferrer() ? this.getReferrer() : '', internals = Server.getInternalDomains();
    r = r.indexOf('?') == -1 ? r : r.substring(0, r.indexOf('?'));
    for (var i=0; i<internals.length; i++) {
      if (r.indexOf(internals[i]) > -1) {
        return true;
      }
    }
    
    // catching strays
    if (Util.getParam('internal') == 'true' || (this.getPrevious() && !(Util.getParam('r') || r))) {
      return true;
    }
    
    return false;
  }
  
  ,hasExternalReferrer: function() {
    var r = this.getReferrer() ? this.getReferrer() : '', externals = Server.getExternalDomains();
    if (!r) {
      return true;
    }
    r = r.indexOf('?') == -1 ? r : r.substring(0, r.indexOf('?'));
    for (var i=0; i<externals.length; i++) {
      if (r.indexOf(externals[i]) > -1) {
          return true;
      }
    }
    return false;
  }
  
  ,getReferrer: function() {
    var r = Util.getParam('r');
    if (r) {
      return r.length > 1 ? r : ''; // r=<one-char> is a special case
    }

    r = document.referrer;
    return (this.hasExcludedParam(r) ? r.split('?')[0] : r);
  }

  ,hasExcludedParam: function(url) {
    for (var i=0, len=this.excludeParams.length; i<len; i++) {
      if (Util.getParam(this.excludeParams[i], url)) {
        return true;
      }
    }
    return false;
  }

   /*
  * checks if the transition between the previous page and the current one is
  * one within *.salesforce.com but across different subdomains and the page
  * doesn't have a driver.
  */
    ,hasSFDCNetworkReferrer: function() {
        var internalDomain = '.salesforce.com',
            a = document.createElement('a'),    // this is a JS trick to use an <a> tag's built in location functionality
            areDifferentDomains,
            bothAreInternalSubdomains;

        a.href = document.referrer;
        areDifferentDomains = a.hostname !== location.hostname;
        bothAreInternalSubdomains = a.hostname.indexOf('.salesforce.com') > -1 && location.hostname.indexOf('.salesforce.com') > -1;

        return areDifferentDomains && bothAreInternalSubdomains && !this.getDriver();
    }

    ,getSFDCNetworkReferrer: function() {
        if (!this.hasSFDCNetworkReferrer()) {
            return null;
        }

        return this.lookupDriver(location.href, this.getReferrer());
    }

    // copy of the lookup logic in getDriver. We can refactor that funciton to utilize this later.
    ,lookupDriver: function (url, referrer) {
        var driverID = Util.getParam('d', url) ? Util.convert15To18(Util.getParam('d', url)) : '',
            driver;

        for (var i = 0; i < this.driverLookup.types.length; i++) {
            var dt = this.driverLookup.types[i];
            if (dt.qp) {
                var params = dt.qp.split(',');
                isType = true;
                for (var j = 0; j < params.length; j++) {
                    if (params[j].indexOf('|') > -1) {
                        var split = params[j].split('|'),
                            orCheck = false;
                        for (var k = 0; k < split.length; k++) {
                            if (Util.getParam(split[k], url)) {
                                orCheck = true;
                                break;
                            }
                        }
                        if (!orCheck) {
                            isType = false;
                        }
                    } else if (!Util.getParam(params[j], url)) {
                        isType = false;
                        break;
                    }
                }
                if (isType && Util.getParam('internal', url) !== 'true') {
                    driver = { id:driverID + '|' + dt.name, type: dt.name };
                    if (dt.cb) {
                        driver = this.driverLookup[dt.cb](driver);
                        if (driver) {
                            // special case when they have an invalid driver, and no second param
                            if (driver.id === 'null|Other') {
                                driver = { id: "Typed/Bookmarked", type: "Typed/Bookmarked" };
                            }
                        }
                    }
                    return driver;
                }
            } else {
                if (dt.pm) {
                    for (var j = 0; j < dt.pm.length; j++) {
                        var pml = dt.pm[j].ms.split(',');
                        isType = false;
                        for (var z = 0; z < pml.length; z++) {
                            if (referrer.indexOf(pml[z]) > -1) {
                                isType = true;
                                driver = { id: (driverID ? driverID + '|' : '') + dt.name + '|' + dt.pm[j].name, type: dt.name };
                                if (driver) {
                                    return driver;
                                }
                            }
                        }
                    }
                }
                if (dt.cb) {
                    // make callback
                    driver = { id:(driverID ? driverID + '|' + dt.name : ''), type: dt.name };
                    driver = this.driverLookup[dt.cb](driver);
                    if (driver) {
                        return driver;
                    }
                }
            }
        }
    }

  /*
  * qp: query param, searched for in current URL
  * pm: pattern match
  * ms: matchstring, searched for in referrer
  */
  ,driverLookup: {
    types: [
      { name:'SEM', qp:'d,dcmp', cb:'getSearchData' }
      ,{ name:'Email', qp:'d', cb:'getEmail', d:'70130000000sUfv' }
      ,{ name:'BAN', qp:'d,ban', cb:'getDisplay' }
      ,{ name:'SEO', cb:'getSearchData', d:'70130000000sUVb' }
      ,{ name:'Paid Social Media', qp:'d', cb:'getSocial' }     
      ,{ name:'Social Media', d:'70130000000sUVl', pm:[
        { name:'youtube', ms:'youtube.com' }
        ,{ name:'vidyard', ms:'vidyard.com' }       
        ,{ name:'twitter', ms:'twitter.com,.t.co,/t.co/', d:'70130000000szyK' }
        ,{ name:'linkedin', ms:'linkedin.com,lnkd.in', d:'70130000000szyP' }
        ,{ name:'facebook', ms:'facebook.com', d:'70130000000szyF' }
        ,{ name:'instagram', ms:'instagram.com', d:'701300000025Rrr' }        
        ,{ name:'flickr', ms:'flickr.com,flickr.net' }
        ,{ name:'slideshare', ms:'slideshare.com,slideshare.net' }
        ,{ name:'googleplus', ms:'plus.google.com,plus.url.google.com', d:'70130000000szyU' }
        ,{ name:'vimeo' , ms:'vimeo.com' }
        ,{ name:'pinterest', ms:'pinterest.com,pintrest.com', d:'70130000000szyZ' }
        ,{ name:'foursquare' , ms:'foursquare.com' }
        ,{ name:'stumbleupon' , ms:'stumbleupon.com' }
        ,{ name:'yelp' , ms:'yelp.com' }
        ,{ name:'myspace', ms:'myspace.com' }
        ,{ name:'xing' , ms:'xing.com' }
        ,{ name:'mixi' , ms:'mixi.jp' }
        ,{ name:'viadeo' , ms:'viadeo.com' }
        ,{ name:'friendster' , ms:'friendster.com' }
        ,{ name:'badoo' , ms:'badoo.com' }
        ,{ name:'bebo' , ms:'bebo.com' }
        ,{ name:'hi5' , ms:'hi5.com' }
        ,{ name:'myyearbook' , ms:'myyearbook.com' }
        ,{ name:'nig' , ms:'nig.com' }
        ,{ name:'tumblr' , ms:'tumblr.com' }
        ,{ name:'xanga' , ms:'xanga.com' }
        ,{ name:'yammer' , ms:'yammer.com' }
        ,{ name:'medium' , ms:'medium.com' }
      ]}
      ,{ name:'SFDC Network', d:'70130000000sUW0', pm: [
        { name:'[AppExchange]', ms:'appexchange.salesforce.com,appexchangejp.salesforce.com,sites.secure.force.com/appexchange' }
        ,{ name:'[Community Site]', ms:'success.salesforce.com,sites.secure.force.com' }
        ,{ name:'[DeveloperForce]', ms:'developer.salesforce.com' }
        ,{ name:'[Help&Training]', ms:'help.salesforce.com' }
        ,{ name:'[Foundation]', ms:'foundation.force.com,salesforcefoundation.org' }
        ,{ name:'[VMForce]', ms:'vmforce.com' }
        ,{ name:'[YourServiceCloud.com]', ms:'yourservicecloud.com,yourservicecloud.force.com' }
        ,{ name:'[JoinTheConversations.com]', ms:'jointheconversations.com' }
        ,{ name:'[Chatter.com]', ms:'chatter.com' }
        ,{ name:'[Site.com]', ms:'site.com' }
        ,{ name:'[Work.com]', ms:'work.com' }
        ,{ name:'[Database.com]', ms:'database.force.com,database.com' }
        ,{ name:'[Data.com]', ms:'data.com' }
        ,{ name:'[Jigsaw.com]', ms:'jigsaw.com' }
        ,{ name:'[Force.com]', ms:'www.force.com' }
        ,{ name:'[Force.com Sites]', ms:'.force.com' }
        ,{ name:'[SalesforceMarketingCloud.com]', ms:'salesforcemarketingcloud.com' }
        ,{ name:'[www.salesforce.com]', ms:'www.salesforce.com' }
        ,{ name:'[trust.salesforce.com]', ms:'trust.salesforce.com' }
        ,{ name:'[Salesforce Blogs]', ms:'blogs.salesforce.com, cloudblog.salesforce.com' }
        ,{ name:'[Salesforce.com App]', ms:'.salesforce.com' }
        ,{ name:'[ExactTarget.com]', ms:'.exacttarget.com'}
        ,{ name:'[Desk.com]', ms:'.desk.com'}
        ,{ name:'[Relateiq.com]', ms:'.salesforceiq.com'}     
        ,{ name:'[Steelbrick.com]', ms:'.steelbrick.com, steelbrick.de'}
        ,{ name:'[Marketingcloud]', ms:'.marketingcloud.com' }
        ,{ name:'[Demandware]', ms:'.demandware.com' }
        ,{ name:'[Beyondcore]', ms:'.beyondcore.com,https://beyondcore.com' }
        ,{ name:'[Heywire]', ms:'.heywire.com' }
        ,{ name:'[Quip]', ms:'.quip.com,https://quip.com' }
        ,{ name:'[Krux]', ms:'.krux.com' }
        ,{ name:'[Gravity Tank]', ms:'.gravitytank.com' }         
      ]}
      ,{ name:'External Websites', cb:'getReferredDriver', d:'70130000000sUVv' }
      ,{ name:'Other', qp:'d', cb:'fixInternal' }
      ,{ name:'Typed/Bookmarked', d:'70130000000sUVq' }
    ]
    ,searchEngines: [
      { se:'All The Web', ms:'alltheweb.com', kw:'q,query', dc:'US' }
      ,{ se:'Facebook Graph Search', ms:'facebook.com', kw:'q', dc:'US' }
      ,{ se:'AllSearchEngines', ms:'allsearchengines.co.uk', kw:'query', dc:'United Kingdom' }
      ,{ se:'AltaVista', ms:'altavista.com', kw:'q,r', dc:'US', cl:[
        { cn:'Canada', pre:'ca.' }, { cn:'Denmark', pre:'dk.' }, { cn:'France', pre:'fr.' }, { cn:'Germany', pre:'de.' }, { cn:'Italy', pre:'it.' }
        ,{ cn:'Netherlands', pre:'nl.' }, { cn:'Norway', pre:'no.' }, { cn:'Spain', pre:'es.' }, { cn:'Sweden', pre:'se.' }, { cn:'Switzerland', pre:'ch.' }, { cn:'United Kingdom', pre:'uk.' }
      ]}
      ,{ se:'AOL', ms:'.aol.', kw:'q,query', dc:'US', cl:[
        { cn:'Canada', post:'ca' }, { cn:'France', post:'fr' }, { cn:'Germany', post:'de' }, { cn:'United Kingdom', post:'co.uk' }
      ]}
      ,{ se:'Ask', ms:'ask.com', kw:'q', dc:'US', cl:[
        { cn:'Japan', pre:'jp' }, { cn:'United Kingdom', pre:'uk' }
      ]}
      ,{ se:'Baidu', ms:'baidu.com', kw:'wd,s', dc:'China' }
      ,{ se:'BeGuide.com', ms:'beguide.com', kw:'q,search', dc:'US' }
      ,{ se:'Biglobe', ms:'biglobe.ne.jp', kw:'q', dc:'Japan' }
      ,{ se:'Microsoft Bing', ms:'bing.com', kw:'q', dc:'US' }
      ,{ se:'Blue Window', ms:'search.bluewin.ch', kw:'q,qry', dc:'Switzerland' }
      ,{ se:'Business.com', ms:'business.com', kw:'query', dc:'US' }
      ,{ se:'BuyersIndex', ms:'buyersindex.com', kw:'query', dc:'US' }
      ,{ se:'Chubba', ms:'whatuseek.com', kw:'arg', dc:'US' }
      ,{ se:'CNET', ms:'cnet.com', kw:'query,q', dc:'US' }
      ,{ se:'Debriefing.com', ms:'debriefing.com', kw:'tsearch', dc:'US' }
      ,{ se:'Dmoz', ms:'dmoz.org', kw:'search', dc:'US' }
      ,{ se:'Excite', ms:'excite.com', kw:'q,search', dc:'US', cl:[
        { cn:'Netherlands', post:'.nl' }, { cn:'France', post:'.fr' }, { cn:'Germany', post:'.de' }, { cn:'Japan', post:'.co.jp' }, { cn:'Switzerland', post:'.ch' }
      ]}
      ,{ se:'Fireball', ms:'fireball.de', kw:'q,query', dc:'Germany' }
      ,{ se:'FreshEye', ms:'fresheye.com', kw:'kw,ord', dc:'Japan' }
      ,{ se:'Godado', ms:'godado.it', kw:'key', dc:'Italy' }
      ,{ se:'Goo (Jp.)', ms:'goo.ne.jp', kw:'MT', dc:'Japan' }
      ,{ se:'Google', ms:'.google.,googlesyndication.com', kw:'q', types:[{ tn:'Images', pre:'images' }, { tn:'Video', pre:'video' }], dc:'US', cl:[
        { cn:'Afghanistan', post:'com.af' }, { cn:'American Samoa', post:'as' }, { cn:'Anguilla', post:'com.ai' }, { cn:'Antigua and Barbuda', post:'com.ag' }, { cn:'Argentina', post:'com.ar' }
        ,{ cn:'Armenia', post:'am' }, { cn:'Australia', post:'com.au' }, { cn:'Austria', post:'at' }, { cn:'Azerbaijan', post:'az' }, { cn:'Bahrain', post:'com.bh' }
        ,{ cn:'Bangladesh', post:'com.bd' }, { cn:'Belarus', post:'com.by' }, { cn:'Belgium', post:'be' }, { cn:'Belize', post:'com.bz' }, { cn:'Bolivia', post:'com.bo' }
        ,{ cn:'Bosnia-Hercegovina', post:'ba' }, { cn:'Botswana', post:'co.bw' }, { cn:'Brasil', post:'com.br' }, { cn:'British Virgin Islands', post:'vg' }, { cn:'Brunei', post:'com.bn' }
        ,{ cn:'Bulgaria', post:'bg' }, { cn:'Burundi', post:'bi' }, { cn:'Cambodia', post:'com.kh' }, { cn:'Canada', post:'ca' }, { cn:'Chile', post:'cl' }
        ,{ cn:'China', post:'cn' }, { cn:'Colombia', post:'com.co' }, { cn:'Cook Islands', post:'co.ck' }, { cn:'Costa Rica', post:'co.cr' }, { cn:'Cote D\'Ivoire', post:'ci' }
        ,{ cn:'Croatia', post:'hr' }, { cn:'Cuba', post:'com.cu' }, { cn:'Czech Republic', post:'cz' }, { cn:'Denmark', post:'dk' }, { cn:'Djibouti', post:'dj' }
        ,{ cn:'Dominica', post:'dm' }, { cn:'Dominican Republic', post:'com.do' }, { cn:'Ecuador', post:'com.ec' }, { cn:'Egypt', post:'com.eg' }, { cn:'El Salvador', post:'com.sv' }
        ,{ cn:'Estonia', post:'ee' }, { cn:'Ethiopia', post:'com.et' }, { cn:'Fiji', post:'com.fj' }, { cn:'Finland', post:'fi' }, { cn:'France', post:'fr' }
        ,{ cn:'Germany', post:'de' }, { cn:'Greece', post:'gr' }, { cn:'Greenland', post:'gl' }, { cn:'Guadeloupe', post:'gp' }, { cn:'Guatemala', post:'com.gt' }
        ,{ cn:'Guernsey', post:'gg' }, { cn:'Guyana', post:'gy' }, { cn:'Haiti', post:'ht' }, { cn:'Honduras', post:'hn' }, { cn:'Hong Kong', post:'com.hk' }
        ,{ cn:'Hungary', post:'hu' }, { cn:'India', post:'co.in' }, { cn:'Indonesia', post:'co.id' }, { cn:'Ireland', post:'ie' }, { cn:'Island', post:'is' }
        ,{ cn:'Isle of Gibraltar', post:'com.gi' }, { cn:'Isle of Man', post:'im' }, { cn:'Israel', post:'co.il' }, { cn:'Italy', post:'it' }, { cn:'Jamaica', post:'com.jm' }
        ,{ cn:'Japan', post:'co.jp' }, { cn:'Jersey', post:'je' }, { cn:'Jordan', post:'jo' }, { cn:'Kazakhstan', post:'kz' }, { cn:'Kenya', post:'co.ke' }
        ,{ cn:'Kiribati', post:'ki' }, { cn:'Korea', post:'co.kr' }, { cn:'Kyrgyzstan', post:'kg' }, { cn:'Laos', post:'la' }, { cn:'Latvia', post:'lv' }
        ,{ cn:'Lesotho', post:'co.ls' }, { cn:'Libya', post:'com.ly' }, { cn:'Liechtenstein', post:'li' }, { cn:'Lithuania', post:'lt' }, { cn:'Luxembourg', post:'lu' }
        ,{ cn:'Madagascar', post:'mgz' }, { cn:'Malawi', post:'mw' }, { cn:'Malaysia', post:'com.my' }, { cn:'Maldives', post:'mv' }, { cn:'Malta', post:'com.mt' }, { cn:'Mauritius', post:'mu' }
        ,{ cn:'Mexico', post:'com.mx' }, { cn:'Micronesia', post:'fm' }, { cn:'Moldova', post:'md' }, { cn:'Mongolia', post:'mn' }, { cn:'Montserrat', post:'ms' }
        ,{ cn:'Morocco', post:'co.ma' }, { cn:'Namibia', post:'com.na' }, { cn:'Nauru', post:'nr' }, { cn:'Nepal', post:'com.np' }, { cn:'Netherlands', post:'nl' }
        ,{ cn:'New Zealand', post:'co.nz' }, { cn:'Nicaragua', post:'com.ni' }, { cn:'Nigeria', post:'com.ng' }, { cn:'Niue', post:'nu' }, { cn:'Norfolk Island', post:'com.nf' }
        ,{ cn:'Norway', post:'no' }, { cn:'Oman', post:'com.om' }, { cn:'Pakistan', post:'com.pk' }, { cn:'Panama', post:'com.pa' }, { cn:'Paraguay', post:'com.py' }
        ,{ cn:'Peru', post:'com.pe' }, { cn:'Philippines', post:'com.ph' }, { cn:'Pitcairn Islands', post:'pn' }, { cn:'Poland', post:'pl' }, { cn:'Portugal', post:'pt' }
        ,{ cn:'Puerto Rico', post:'com.pr' }, { cn:'Qatar', post:'com.qa' }, { cn:'Rep. Dem. du Congo', post:'cd' }, { cn:'Rep. du Congo', post:'cg' }, { cn:'Repulic of Georgia', post:'ge' }
        ,{ cn:'Romania', post:'ro' }, { cn:'Russia', post:'ru' }, { cn:'Rwanda', post:'rw' }, { cn:'Saint Helena', post:'sh' }, { cn:'Saint Vincent and the Grenadine', post:'com.vc' }
        ,{ cn:'Samoa', post:'ws' }, { cn:'San Marino', post:'sm' }, { cn:'Sao Tome and Principe', post:'st' }, { cn:'Saudi Arabia', post:'com.sa' }, { cn:'Senegal', post:'sn' }
        ,{ cn:'Seychelles', post:'sc' }, { cn:'Singapore', post:'com.sg' }, { cn:'Slovakia', post:'sk' }, { cn:'Slovenia', post:'si' }, { cn:'Solomon Islands', post:'com.sb' }
        ,{ cn:'South Africa', post:'co.za' }, { cn:'Spain', post:'es' }, { cn:'Sri Lanka', post:'lk' }, { cn:'Sweden', post:'se' }, { cn:'Switzerland', post:'ch' }
        ,{ cn:'Taiwan', post:'com.tw' }, { cn:'Tajikistan', post:'com.tj' }, { cn:'Thailand', post:'co.th' }, { cn:'The Bahamas', post:'bs' }, { cn:'The Gambia', post:'gm' }
        ,{ cn:'Timor-Leste', post:'tp' }, { cn:'Tokelau', post:'tk' }, { cn:'Tonga', post:'to' }, { cn:'Trinidad and Tobago', post:'tt' }, { cn:'Turkey', post:'com.tr' }
        ,{ cn:'Turkmenistan', post:'tm' }, { cn:'Uganda', post:'co.ug' }, { cn:'Ukraine', post:'com.ua' }, { cn:'United Arab Emirates', post:'ae' }, { cn:'United Kingdom', post:'co.uk' }
        ,{ cn:'Uruguay', post:'com.uy' }, { cn:'Uzbekiston', post:'co.uz' }, { cn:'Vanuatu', post:'vu' }, { cn:'Venezuela', post:'co.ve' }, { cn:'Viet Nam', post:'com.vn' }
        ,{ cn:'Virgin Islands', post:'co.vi' }, { cn:'Yugoslavia', post:'co.yu' }, { cn:'Zambia', post:'co.zm' }, { cn:'Zimbabwe', post:'co.zw' }
      ]}
      ,{ se:'Hotbot', ms:'hotbot.com', kw:'query', dc:'US' }
      ,{ se:'ilse.nl', ms:'ilse.nl', kw:'search_for', dc:'Netherlands' }
      ,{ se:'Indeed', ms:'www.indeed.', kw:'q', dc:'US', cl:[
        { cn:'Canada', post:'ca' }, { cn:'India', post:'co.in' }
      ]}
      ,{ se:'InfoSpace', ms:'infospace.com', kw:'', dc:'US' }
      ,{ se:'InfoTiger', ms:'infotiger.com', kw:'qs', dc:'US' }
      ,{ se:'Livedoor', ms:'livedoor.com', kw:'q', dc:'Japan' }
      ,{ se:'Lycos', ms:'.lycos', kw:'query', dc:'US', cl: [
        { cn:'France', post:'.fr' }, { cn:'Germany', post:'.de' }, { cn:'Italy', post:'.it' }, { cn:'Netherlands', post:'.nl' }, { cn:'Spain', post:'.es' }, { cn:'United Kingdom', post:'.co.uk' }
      ]}
      ,{ se:'Metacrawler', ms:'metacrawler.com', kw:'', dc:'US' }
      ,{ se:'Monster Crawler', ms:'monstercrawler.com', kw:'', dc:'US' }
      ,{ se:'myGO', ms:'mygo.com', kw:'', dc:'Taiwan' }
      ,{ se:'Nate.com', ms:'nate.com', kw:'q', dc:'Korea' }
      ,{ se:'Naver', ms:'naver.com', kw:'query', dc:'Korea' }
      ,{ se:'NetSearch', ms:'netscape.com', kw:'qry_str', dc:'US' }
      ,{ se:'Nifty', ms:'nifty.com,search.nifty.com', kw:'q', dc:'Japan' }
      ,{ se:'Oh! New? Mobile', ms:'ohnew.co.jp', kw:'k', dc:'Japan' }
      ,{ se:'OptusZoo', ms:'optuszoo.com.au', kw:'q', dc:'Australia' }
      ,{ se:'Reference.com', ms:'reference.com', kw:'q', dc:'US' }
      ,{ se:'Search.ch', ms:'search.ch', kw:'q', dc:'Switzerland' }
      ,{ se:'Searchalot', ms:'searchalot.com', kw:'q,query', dc:'US' }
      ,{ se:'Tiscali', ms:'tiscali.it', kw:'key', dc:'Italy' }
      ,{ se:'track.nl', ms:'track.nl', kw:'qr', dc:'Netherlands' }
      ,{ se:'Virgilio', ms:'ricerca.virgilio.it,virgilio.it', kw:'qs', dc:'Italy' }
      ,{ se:'Web Wombat', ms:'webwombat.com.au', kw:'ix,I', dc:'Australia' }
      ,{ se:'Web.de', ms:'web.de', kw:'su', dc:'Germany' }
      ,{ se:'Webalta', ms:'webalta.ru', kw:'q', dc:'Russia' }
      ,{ se:'WebCrawler', ms:'webcrawler.com', kw:'', dc:'US' }
      ,{ se:'Yahoo!', ms:'search.yahoo.', kw:'p', dc:'US', cl:[
        { cn:'Argentina', pre:'ar.' }, { cn:'Asia', pre:'asia.' }, { cn:'Australia', pre:'au.' }, { cn:'Austria', pre:'at.' }, { cn:'Brazil', pre:'br.' }
        ,{ cn:'Canada', pre:'ca.' }, { cn:'Canada (French)', pre:'qc.' }, { cn:'Catalan', pre:'ct.' }, { cn:'China', pre:'cn.' }, { cn:'Denmark', pre:'dk.' }
        ,{ cn:'Finland', pre:'fi.' }, { cn:'France', pre:'fr.' }, { cn:'Germany', pre:'de.' }, { cn:'Hong Kong', pre:'hk.' }, { cn:'India', pre:'in.' }
        ,{ cn:'Indonesia', pre:'id.' }, { cn:'Italy', pre:'it.' }, { cn:'Japan', post:'co.jp' }, { cn:'Korea', pre:'kr.' }, { cn:'Malaysia', pre:'malaysia.' }
        ,{ cn:'Mexico', pre:'mx.' }, { cn:'Netherlands', pre:'nl.' }, { cn:'New Zealand', pre:'nz.' }, { cn:'Norway', pre:'no.' }, { cn:'Philippines', pre:'ph.' }
        ,{ cn:'Russia', pre:'ru.' }, { cn:'Singapore', pre:'sg.' }, { cn:'Spain', pre:'es.' }, { cn:'Sweden', pre:'se.' }, { cn:'Switzerland', pre:'ch.' }
        ,{ cn:'Taiwan', pre:'tw.' }, { cn:'Thailand', pre:'th.' }, { cn:'UK and Ireland', pre:'uk.' }, { cn:'Viet Nam', pre:'vn.' }
      ]}
      ,{ se:'Yandex.ru', ms:'yandex.ru', kw:'text', dc:'Russia' }
      ,{ se:'zoeken.nl', ms:'zoeken.nl', kw:'q', dc:'Netherlands' }
      ,{ se:'Duckduckgo', ms:'duckduckgo.com', kw:'q', dc:'US' }
      ,{ se:'Alhea', ms:'alhea.com', kw:'q', dc:'US' }
      ,{ se:'Dogpile', ms:'dogpile.com', kw:'q', dc:'US' }
      ,{ se:'Contenko', ms:'contenko.com', kw:'q', dc:'US' }
      ,{ se:'Info', ms:'info.com', kw:'qkw', dc:'US' }
      ,{ se:'Mywebsearch', ms:'mywebsearch.com', kw:'searchfor', dc:'US' }
      ,{ se:'Wow', ms:'wow.com', kw:'q', dc:'US' }
    ]
    
    ,getReferringDomain: function() {
      var ref = Page.getReferrer(), prefix = '://';
      if (!ref || ref.indexOf('http') != 0) {
        return '';
      }
      ref = ref.indexOf(prefix) > -1 ? ref.substring(ref.indexOf(prefix) + prefix.length) : ref;
      ref = ref.indexOf('/') > -1 ? ref.substring(0, ref.indexOf('/')) : ref;
      ref = ref.indexOf('?') > -1 ? ref.substring(0, ref.indexOf('?')) : ref;
      ref = ref.indexOf('#') > -1 ? ref.substring(0, ref.indexOf('#')) : ref;
      return ref;
      
    }
    
    ,getReferredDriver: function(args) {
      var ref = this.getReferringDomain();
      if (!(args && ref)) {
        return '';
      }
      args.id = (args.id ? args.id : args.type) + '|' + ref;
      return args;
    }
    
    ,fixInternal: function(args) {
      if (!args) {
        return '';
      }
      var forceList = this.types[5]; // force.com
      for (var i=0; i<forceList.pm.length; i++) {
        var pml = forceList.pm[i].ms.split(',');
        for (var j=0; j<pml.length; j++) {
          if (Page.getReferrer().indexOf(pml[j]) > -1) {
            var driver = { id:forceList.name + '|' + forceList.pm[i].name, type:forceList.type, internal:Util.getParam('d') };
            return driver;
          }
        }
      }
      return args;
    }
    
    ,getDefault: function(type, id) {
      if (!type) {
        return '';
      }
      
      for (var i=0; i<this.types.length; i++) {
        var dt = this.types[i];
        if (type == dt.name) {
          if (dt.pm) {
            var name = id.replace(type + '|', '');
            for (var j=0; j<dt.pm.length; j++) {
              if (name == dt.pm[j].name && dt.pm[j].d) {
                return dt.pm[j].d;
              }
            }
          }
          if (dt.d) {
            return dt.d;
          }
        }
      }
      
      return '';
    }
    
    ,getEmail: function(args) {
      var url = document.location.href.toLowerCase();
      if (!(url.indexOf('elq_mid=') > -1 || url.indexOf('eid=') > -1 || url.indexOf('rrid') > -1 || url.indexOf('mkt_tok') > -1)) {
        return '';
      }
      
      return args;
    }
    
    ,getDisplay: function(args) {
      if (!(args && args.id && args.type)) {
        return '';
      }
      
      var ban = Url.decodeComponent(Util.getParam('ban')).replace(/_/g, '|'), pre = 'ban|';
      if (ban.indexOf(pre) == 0 || ban.indexOf(pre.toUpperCase()) == 0) {
        ban = ban.substring(pre.length - 1);
      }
      ban = ban.toLowerCase();
      if (ban.charAt(0) != '|') {
        ban = '|' + ban;
      }
      return { id: args.id + ban, type: args.type };
    }

    ,getSocial: function(args) {
      var soc = Url.decodeComponent(Util.getParam('soc')).toLowerCase();
      if (!(args && soc)) {
        return '';
      }
      args.id += '|' + soc;
      return args;
    }
    
    ,isBaiduSEO : function(ref) {
      if (!ref) {
        return false;
      } else if (ref.indexOf('.baidu.') > -1 && (ref.indexOf('?wd=') > -1 || ref.indexOf('&wd=') > -1)) {
        return true;
      } 
    }   
    
    ,getSearchData: function(args) {
      // check for referrer match
      // then check for keyword match
      var ref = Page.getReferrer(), engine='', country='', keyword='';
      if (!args) {
        return '';
      } else if (!(args.type == 'SEM' || args.type == 'SEO') || (args.type == 'SEO' && args.id)) {
        return '';
      }
      for (var i=0; i<this.searchEngines.length; i++) {
        var ce = this.searchEngines[i], cms = this.searchEngines[i].ms.split(','); // current engine & matchstrings
        for (var j=0; j<cms.length; j++) {
          if (cms[j] && (ref.indexOf(cms[j]) > -1)) {
            // we have a search engine; check for sub-engine (ie Google Images)
            engine = ce.se;
            if (ce.types) {
              for (var t=0; t<ce.types.length; t++) {
                if (ce.types[t].pre && ref.indexOf(ce.types[t].pre + cms[j]) > -1) {
                  engine = engine + ' ' + ce.types[t].tn;
                  break;
                }
                if (ce.types[t].post && ref.indexOf(cms[j] + ce.types[t].post) > -1) {
                  engine = engine + ' ' + ce.types[t].tn;
                  break;
                }
              }
            }
            // check for keyword
            var kwp = ce.kw.split(',');
            for (var k=0; k<kwp.length; k++) {
              keyword = Url.decodeComponent(Util.getParam(kwp[k], ref));
              if (keyword) {
                break;
              }
            }
            if (!keyword) {
              var tmpRef = ref.substring(ref.indexOf('//') + 2);
              if ((ref.indexOf('/url') > -1 && (ref.indexOf('q=&') > -1 || ref.indexOf('?sa=t') > -1)) || (tmpRef.indexOf('/') == -1 || tmpRef.indexOf('/') == tmpRef.length - 1) || this.isBaiduSEO(ref)) {
                keyword = 'no keyword' + (ref.indexOf('https') > -1 ? ' (secure)' : '');
              } else {
                break;
              }
            }
            // check for country
            if (ce.cl) {
              for (var l=0; l<ce.cl.length; l++) {
                if (ce.cl[l].pre && ref.indexOf(ce.cl[l].pre + cms[j]) > -1) {
                  country = ce.cl[l].cn;
                }
                if (ce.cl[l].post && ref.indexOf(cms[j] + ce.cl[l].post) > -1) {
                  country = ce.cl[l].cn;
                }
              }
            }
            if (!country) {
              country = ce.dc || 'US';
            }
          }
        }
      }
      if ((args.id && args.type == 'SEM') || (engine && keyword)) {
        keyword = keyword ? Util.cleanUrlData(keyword) : 'no keyword';
        
        engine = engine ? (country.toUpperCase() != 'US' && country != '' ? engine + ' - ' + country : engine) : 'no search engine';
        if (args.type == 'SEM') {
          args.id += ((engine ? '|' + engine : '') + (keyword ? '|' + keyword : ''));
        }
        return { 'id':(args.id ? args.id : (args.type + '|' + engine + '|' + keyword)), 'type':args.type, 'keyword':keyword, 'engine':engine };
      } else {
        return '';
      }
    }
  }
  
    
  
  ,TrackingPixel: function(rules, render) {
    this.protocol = document.location.protocol;
    this.date = new Date();
    this.current = [];
    this.render = render; // rendering function
    if (typeof(rules) != 'object') {
      return false;
    }
    this.locales = rules.locales ? rules.locales : [];
    if (typeof(rules.show) === 'string') {
      this.show = false;
      this.dynamic = rules.show;  
    } else {
      this.show = rules.show ? rules.show : false;
      this.dynamic = '';
    }
    this.exclusive = rules.exclusive ? rules.exclusive : false;
    this.details = rules.details ? rules.details : { isEmpty : true };
    this.mobile = rules.mobile ? rules.mobile : false;
    this.login = rules.login ? rules.login : false;
    
    this.insertImage = function(url) {
      if (!url) {
        return false;
      }
      (function($){
        $('#conversion-tracking').append('<img width="1" height="1" border="0" src="' + url + '"/>');
      })(jQuery);
    };
  
    this.insertIframe = function(url) {
      if (!url) {
        return false;
      }
      (function($){
        $('#conversion-tracking').append('<iframe width="1" height="1" frameborder="0" scrolling="no" style="visibility:hidden;display:none;" src="' + url + '"></iframe>');
      })(jQuery);
    };
    
    this.insertScript = function(url) {
      try {
        var script = document.createElement('script'), div = document.getElementById('conversion-tracking');
        script.setAttribute('type', 'text/javascript');
        script.setAttribute('src', url);
        div.appendChild(script);
        return true;
      } catch(ex) {
        return false; 
      }
    };
    
    this.getGoogle = function() {
      var pixels = [];
      if (this.getPixelFromMeta()) {
        pixels[pixels.length] = this.getPixelFromMeta();
      }
      for (var i=0; i<this.current.length; i++) {
        if (this.details[this.current[i]] && this.details[this.current[i]].id)
          pixels[pixels.length] = this.details[this.current[i]];
      }
      var tagNumber = 0;
      for (i=0; i<pixels.length; i++) {
        tagNumber++;
        var url = this.protocol + '//www.googleadservices.com/pagead/conversion/' + pixels[i].id + '/?', q = '';
        var params = {
          'random' : this.date.getTime()
          ,'cv' : '6'
          ,'fst' : this.date.getTime()
          ,'num' : tagNumber
          ,'fmt' : pixels[i].format || '1'
          ,'value' : pixels[i].value || '1'
          ,'label' : pixels[i].label || 'lead'
          ,'bg' : 'ffffff'
          ,'hl' : pixels[i].lang || ''
          ,'gl' : pixels[i].country || ''
          ,'guid' : 'ON'
          ,'u_tz' : -this.date.getTimezoneOffset()
          ,'url' : document.location.origin+document.location.pathname
        };
        url += this.toQueryString(params);
        this.insertImage(url);
      }
    };
    
    this.getPixelFromMeta = function() {
      var meta = Util.getMeta('pageMetrics');
      if (!(meta && Util.isValidJson(meta))) {
        return false;
      }
      var metaObj = Util.parseJSON(meta);
      if (!(metaObj.pixel && metaObj.pixel.id)) {
        return false;
      }
      return metaObj.pixel;
    };
    
    this.toQueryString = function(json, delim) {
      delim = delim ? delim : '&';
      var qString = '', j = 0;
      for (var i in json) {
        if (json.hasOwnProperty(i) && typeof(json[i]) != 'function') {
          if (json[i] != '' && json[i] != null) {
            if (j > 0) {
              qString += delim; 
            }
            qString += i + '=' + Url.encodeComponent(json[i]);
            j++;
          }
        }
      }
      return qString;
    };
    
    this.isLogin = function($) {
      try {
        if (Page.isLogin())
          return true;
      } catch(ex) {}
      return false;
    };
    
    this.isMobile = function($) {
      try {
        if (com.salesforce.www.App.cfg('isMobileDevice')){
          return false;
        }
      } catch(ex) {}
      return false;
    };
    
    this.isValid = function($) {
      //if we detect param 'un' or 'pwd', return false
      if (Util.getParam("un") || Util.getParam("pw")){
        return false;
      }else{
        this.current = [];  // reset
        if ((!this.show || (typeof(this.show) == 'function' && !this.show())) && !this.dynamic) {
          return false;
        } else if (!this.login && this.isLogin()) {
          return false;
        } else if (!this.mobile && this.isMobile()) {
          return false;
        } else if ((this.locales && $.inArray(Page.getLocale(), this.locales) > -1 || !this.locales || this.locales.length == 0) && this.details.isEmpty) {
          return true;
        } else if (!this.details.isEmpty && (this.locales.length == 0 || $.inArray(Page.getLocale(), this.locales) > -1)) {
          for (var i=0; i<this.details.length; i++) {
            if ((typeof(this.details[i].locales) == 'undefined' || $.inArray(Page.getLocale(), this.details[i].locales) > -1)
              && (typeof(this.details[i].show) == 'undefined' || 
                ((typeof(this.details[i].show) != 'function' && this.details[i].show) ||
                (typeof(this.details[i].show) == 'function' && this.details[i].show())))) {
              this.current[this.current.length] = i;
              if (this.exclusive) {
                break;
              }
            }
          }
          return this.current.length > 0 ? true : false;
        }
      }
    };
  }

  ,PixelManager: {
    pixels : []
    ,protocol : document.location.protocol
  
    ,newPixel : function(rules, render) {
      if (!(rules && render)) {
        return false;
      }
    
      this.pixels[this.pixels.length] = new Page.TrackingPixel(rules, render);
    }
  
    ,configure : function($) {
      if ($('#conversion-tracking').html() == null) {
        $('body').append('<div id="conversion-tracking"></div>');
      }
    
      for (var i=0; i<this.pixels.length; i++) {
        if (this.pixels[i].isValid($) && !this.pixels[i].dynamic) {
          this.pixels[i].render($); 
        }
      }
    }
    
    ,trackDynamic : function(list) {
      if (typeof(list) !== 'string') {
        return false;
      }
      list = ',' + list + ',';
      for (var i=0; i<this.pixels.length; i++) {
        if (this.pixels[i].dynamic && list.indexOf(this.pixels[i].dynamic) > -1) {
          if (this.pixels[i].isValid($)) {
            this.pixels[i].render($);
          }
        }
      }
    }
  }
};
})(jQuery)   // jQuery, but not necessarily $, is defined at this point, especially when including on app pages
;

/* -------------------------------------------------------------------------------- 
   End /system/shared/common/assets/js/analytics/page.js
   --------------------------------------------------------------------------------
*/

/* -------------------------------------------------------------------------------- 
   File /common/assets/js/analytics/page-basic.js
   --------------------------------------------------------------------------------
*/
jQuery.extend(Page, {
  errorName:  'platformtour:error_404'
  ,leadCaptureForm: null


  ,calculateName: function(name, hostname) {
    const pathName = window.location.pathname.replace('/', '');
    return "platformtour:us:" + (pathName || 'homepage');
  }

  
  ,setName: function(name) {
    
    //calculate pagename
    this.name = this.calculateName(name);
        
    // set cloud/segment in cookie
    vp.activityData['l_cloud'] = this.getCloud();
    vp.activityData['seg'] = this.getSegment();
    
    // set previous page
    this.setPrevious();
    
    return this.name;
  }
  
  ,getLeadCaptureForm : function(pageName) {
    if (this.leadCaptureForm === null) {

      if (jQuery('form[name="signUpForm"]:visible').size() > 0) {
          this.leadCaptureForm = jQuery('form[name="signUpForm"]:visible').get(0);
      }
      
    }
    return this.leadCaptureForm;
  } 
  
  ,hasLeadCaptureForm: function(pageName) {
    return (this.getLeadCaptureForm(pageName) != null);
  } 
    
  ,isHome: function() {
    return this.getName().indexOf('homepage') > -1;
  }
  
  ,isLogin: function() {
    return (this.getName().match(/\:\w{2}\:login/) != null);
  }

  ,is404: function() {
    return this.getName().indexOf('error_404') > -1;  
  }

  ,isError: function() {
    return (this.getName().indexOf('error') != -1 && this.isConfirmation());
  }
  
  ,isTrackedOnLoad: function() {
    return false;
  }
  
  ,isConfirmation: function(pageName) {
    var curName = '';
    if (typeof pageName === 'string') {
       curName = pageName;
    }else {
      curName = this.getName();
    }
    return (((curName.indexOf(':conf:') != -1) ||
      (curName.indexOf('[conf]') != -1) ||
      (Util.endsWith(curName, 'conf')) ||
      this.ajaxFormComplete ||
      (document.location.pathname.indexOf('_conf.jsp') != -1) ||
      (document.location.pathname.indexOf('SignupServlet') != -1) ||
      (document.location.pathname.indexOf('LeadCaptureServlet') != -1)) &&
      (Page.previous != Page.name) &&
      !this.isCareersConfirmation(pageName));
  }
  
  
  ,isValidLocale: function(locale) {
    var validLocales = ['us', 'de', 'uk'];
    for (var i=0; i<validLocales.length; i++) {
      if (locale == validLocales[i]) {
        return true;  
      }
    }
    return false;
  }
  
  ,isValidServer: function(server) {
    var validServers = ['SFDC:products:platform:interactive'];
    for (var i=0; i<validServers.length; i++) {
      if (server == validServers[i]) {
        return true;
      }
    }
    return false;
  }
  
  ,getCloud: function() {
    return 'Sales Cloud';
  }

  ,getLocale: function() {
    var locale = top.location.hostname.split('.').pop();
    if (locale === 'com') {
      locale = 'us';
    }
    return locale;
  }
  
  ,getType: function() {
    return "Content Page";
  }

  ,getSubDomain: function() {
    try {
      var full = window.location.hostname;
      var parts = full.split('.');
      var subdomain = parts[0];
      return subdomain ? subdomain : '';
    } catch (err) {

    } 
  }
  
  ,getChannel: function() {
    return this.getSubDomain();
  }
  
  ,getSection: function() {
    var section = this.getLocale() + ':' + (this.getPathNode(3) ? this.getPathNode(3) : 'other');
    return section;
  }
  
  ,setServer: function(srv) {
    if (srv && this.isValidServer(srv)) {
      this.server = srv;
      return this.server;
    }
    this.server = 'platformtour';
    return this.server;
  }
  
  ,getServer: function() {
    if (this.server == null) {
      this.setServer();
    }
    return this.server;
  }
  
  ,getServerSubDomain: function() {
    return serverSubDomain = this.getServer() + ':' + this.getSubDomain();  
  } 

});
;

/* -------------------------------------------------------------------------------- 
   End /common/assets/js/analytics/page-basic.js
   --------------------------------------------------------------------------------
*/

/* -------------------------------------------------------------------------------- 
   File /system/shared/common/assets/js/analytics/omniConfig-basic.js
   --------------------------------------------------------------------------------
*/
/*
 * shared Omniture tracking configuration library
 * see /common/assets/js/analytics for a corresponding site-specific configuration file
 */
 
var OmniConfig = {
  // custom function used to load site-specific plugins
  loadPlugins: function() {
    try {
      for (var i=0;i<OmniConfig.plugins.length;i++) {
        OmniConfig.plugins[i].call();
      }
    } catch(ex) {
      // will fail if there are no plugins to load
    }
    
  }

  // custom function used by all sites on page load
  ,sharedPageLoad: function() {
    // vars
    // PAGE, CHANNEL, SERVER, LOCALE

    s.pageName=s.pageName?s.pageName:Page.getName();
    s.charSet="UTF-8";
    s.channel=s.eVar6=Page.getChannel();
    s.server=Page.getServer();
    s.eVar3=Page.getLocale();
    
    // previous page
    s.prevPage=Page.getPrevious();
    

    
    // to expire cookies
    s.expDate=new Date();
    s.expDate.setDate(s.expDate.getDate()-1);
    
    // FIX REFERRER IF NECESSARY
    // look for overwrite referrer
    s.referrer=Page.getReferrer();
    
    // BROWSER HEIGHT/WIDTH
    // % page viewed
      

    // override browser h/w on iframes
    try{    
      if(top!=self){
        s.browserWidth=s.browserHeight='';
        s.c_w('s_ppv_x','true');
      }
    }catch(ex){}
    
    // PAGE URL
    var url = window.location.href;
    if (Page.hasExcludedParam(url)){
      s.pageURL=url.split('?')[0];
    }else{
      s.pageURL=url;    
    }   
    
    
    
    //s.prop8=s.pageURL.replace(window.location.search,'');
      
    // PAGE VIEW EVENT / # OF PAGE VIEWS
    s.events=s.events?s.events:'';
    s.events=s.apl(s.events,'',',',2);
    
    // VISITOR TYPE
    s.eVar14=vp.getType();
    s.prop49=Page.getSegment();
  
    
    
    // TIME PARTING
    s.tpDate=new Date();
    s.eVar24=s.getTimeParting('h','-8',s.tpDate.getFullYear());  // hour
    s.eVar25=s.getTimeParting('d','-8',s.tpDate.getFullYear());  // day
    

  
    
    // T&T INTEGRATION/PATHING
    s.tnt=s.deDupe(s.trackTNT(),',');
    
    // PAGELOAD TEST
    if(typeof(s_getLoadTime) === 'function'){
      s.prop4=s_getLoadTime();
      s.eVar11=s.prop4;
    }
    
  
  }
  
  // custom function used by all sites on all clicks
  ,sharedOnClick: function() {
    // FILE DOWNLOADS + ORIGINATION
    if(!s.linkTracked){
      s.downloadUrl=s.linkHandler('','d','',1);
      if(s.downloadUrl){
        s.events = 'event11';
        
        s.downloadUrl=s.downloadUrl.indexOf('#')>-1?s.downloadUrl.substring(0,s.downloadUrl.indexOf('#')):s.downloadUrl;
        s.downloadUrl=s.downloadUrl.toLowerCase();
        s.downloadUrl=s.repl(s.downloadUrl,'https://','');
        s.downloadUrl=s.repl(s.downloadUrl,'http://','');
      
        // new pagename
        s.downloadUrl=s.downloadUrl.substring(s.downloadUrl.indexOf('/')+1);
        s.downloadUrl=s.repl(s.downloadUrl,'/',':').toLowerCase();
        s.pageName=s.server+':'+s.eVar6+':file:'+s.downloadUrl;
        
        s.prop35=Page.setPrevious()?Page.setPrevious():'[NO PREVIOUS PAGE AVAILABLE]';
      }
    }
    
    // DYNAMIC VARIABLE SYNTAX
    s.prop1=s.eVar1='D=g';
    s.prop2=s.eVar3?'D=v3':'';
    s.channel=s.eVar6?'D=v6':'';
    s.prop12=s.eVar12?'D=v12':'';
    s.prop14=s.eVar14?'D=v14':'';
    s.prop18=s.eVar24?'D=v24':'';
    s.prop19=s.eVar25?'D=v25':'';
    s.eVar8=s.pageName?'D=pageName':'';
    
    // always send prop49, eVar34, eVar8
    s.linkTrackVars=s.apl(s.linkTrackVars,'prop49',',',2);
    s.linkTrackVars=s.apl(s.linkTrackVars,'eVar7',',',2);
    s.linkTrackVars=s.apl(s.linkTrackVars,'eVar8',',',2);
    s.linkTrackEvents=s.apl(s.linkTrackEvents,'event7',',',2);
  }

  //signature - OmniConfig.trackPartialPageLoad("some-str", {events:["event16","event17"], properties:{prop22:"prop 22 value", eVar72:"evar 72 value"}});
       ,trackPartialPageLoad: function(userAction, options){
            var self = this;
            //clear all props and vars; if we're sending a subset, we don't want to send the values that were set in the 's' object during the initial page load
            for (var i=0; i < 75; i++) {
                s['prop'+i]='';
                s['eVar'+i]='';
            }
            s.manageVars('clearVars','pageName,events,products');
            
            //reset the session; required to prevent double tracking of new visits for new visitors to a page that calls this method
            if (typeof(vp) !== 'undefined') {
    vp.newSession = false;
            }

            var tempPageName = s.lastPartialPageAction ? Page.getName().replace(":" + s.lastPartialPageAction, '') : Page.getName();

            s.pageName = Page.name = tempPageName + (userAction ? ':' + userAction : '');
            Page.setPrevious();
            //set all necessary vars below
            //sharedPageLoad sets page view vars/events that have the same defintions across report suites
            self.sharedPageLoad();

            var events = options && options.events || [];
            var properties = options && options.properties || {}; // evars and props

            //set events
            for (var i=0; i < events.length; i++) {
                s.events=s.apl(s.events,events[i],',',2);
            }

            //set evars and props
            for (var key in properties) {
                var val = properties[key];
                s[key] = val;
            }

            s.cancelCustomOnClick = true;
            //all vars and events have been set, now create the page load beacon..

            s.t();
            //done calling omniture, remove flag
            s.cancelCustomOnClick = false;

            s.lastPartialPageAction = userAction || '';
        }
        
  //signature - OmniConfig.trackActivity("some-str", {events:["event16","event17"], properties:{prop22:"prop 22 value", eVar72:"evar 72 value"}});        
    ,trackActivity : function(activity, options) {
            if (!activity) {
                return;
            }

            var events = options && options.events || [];
            var properties = options && options.properties || {}; // evars and props
                  

            //set events
            s.linkTrackEvents = s.events = events.join();

      // always send event66 on trackActivity
            s.events=s.apl(s.events,'event66',',',2);
            s.linkTrackEvents=s.apl(s.linkTrackEvents,'event66',',',2);

            s.linkTrackVars = s.apl(s.linkTrackVars, 'events', ',', 2);

            //set evars and props
            for (var key in properties) {
                var val = properties[key];
                s[key] = val;
                s.linkTrackVars = s.apl(s.linkTrackVars, key, ',', 2);
            }

            //flag to prevent customOnClick from running before this link track
            s.linkTracked = s.cancelCustomOnClick = true;
            //do the link track call to omniture
            s.tl(true, 'o', activity);

            // Reset tracking variables from s object.
            s.events="";
            s.linkTrackVars="";
            s.linkTrackEvents="";
            //done calling omniture, remove flag to prevent customOnClick from running
            s.linkTracked = s.cancelCustomOnClick = false;
        }               

  
};
;

/* -------------------------------------------------------------------------------- 
   End /system/shared/common/assets/js/analytics/omniConfig-basic.js
   --------------------------------------------------------------------------------
*/

/* -------------------------------------------------------------------------------- 
   File /common/assets/js/analytics/omniConfig-basic.js
   --------------------------------------------------------------------------------
*/
OmniConfig.defaults = {};
OmniConfig.plugins = [];  


OmniConfig.customPageLoad = function() {
  var self = this;
  
  // CAMPAIGNS
  s.driver=Page.getDriver();
  if(s.driver) {
    if (s.driver.type != 'internal') {
      if (s.driver.type=='Typed/Bookmarked' && s.c_r('v0')) s.driver.id='';
      s.driver.id=s.getValOnce(s.driver.id,'v0',0);

      if(s.driver.id){
        s.campaign=s.driver.id;
        if(s.driver.type=='SEO'){
          s.events=s.apl(s.events,'event15',',',2);
        }else if(s.driver.type=='SEM'){
          s.events=s.apl(s.events,'event14',',',2);
        }
      }
    }
  } 
  
};
  
OmniConfig.customOnClick = function() {

  //if trackPartialPageLoad() was called, don't run this routine as the vars and events are set by the method
  if (s.cancelCustomOnClick) {
    return;
  }

  var self = this;
  
  s.manageVars('clearVars','events,products,eVar22,eVar32,eVar53');
  s.pageName=s.pageName||Page.getName();
  
  //form view
  if(Page.hasLeadCaptureForm()){
              s.events = s.apl(s.events,'event16',',',2);
  }
  

  // ADD EXTRA PARAMETERS ON LINKS
  s.clicked=s.p_go();
  if(s.clicked&&s.clicked.href){
    var trimUrl=s.trimUrl(document.location.href);
    var trimClicked=s.trimUrl(s.clicked.href);
    if((trimUrl!=trimClicked)&&s.getQueryParam('d','',s.clicked.href)&&s.clicked.href.indexOf('internal=true')==-1){
      // internal drivers
      s.clicked.href=s.clicked.href.replace('d='+s.getQueryParam('d','',s.clicked.href),'d='+s.getQueryParam('d','',s.clicked.href)+'&internal=true');
    }
    if(s.pageName.indexOf(':login')>-1){
      s.clicked.href+=(s.clicked.href.indexOf('?')>-1?'&':'?')+'r='+Url.encodeComponent(document.location.href);
    }
    
    if (s.clicked.href.indexOf('#') > -1 && !s.linkTracked) {
      s.linkType='o';
      s.linkName='anchor|'+s.clicked.href;
    }
    s.linkTracked=false;
  }
};
;

/* -------------------------------------------------------------------------------- 
   End /common/assets/js/analytics/omniConfig-basic.js
   --------------------------------------------------------------------------------
*/

/* -------------------------------------------------------------------------------- 
   File /common/assets/js/analytics/pixelManager-basic.js
   --------------------------------------------------------------------------------
*/
/* Omniture */
Page.PixelManager.newPixel(
  {
    show : true
    ,mobile : true
    ,login : true
  }

  ,function() {
    if (!Page.isTrackedOnLoad()) {
      //s.t();
    }
  }
);

// queue up the pixel manager
try {
  jQuery(function(){
    Page.PixelManager.configure(jQuery);
  });
} catch(ex) {}
;

/* -------------------------------------------------------------------------------- 
   End /common/assets/js/analytics/pixelManager-basic.js
   --------------------------------------------------------------------------------
*/

/* -------------------------------------------------------------------------------- 
   File /system/shared/common/assets/thirdparty/omniture/VisitorAPI.js
   --------------------------------------------------------------------------------
*/
/*
 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ============

 Adobe Visitor API for JavaScript version: 1.5.3
 Copyright 1996-2015 Adobe, Inc. All Rights Reserved
 More info available at http://www.omniture.com
*/
function Visitor(m,s){if(!m)throw"Visitor requires Adobe Marketing Cloud Org ID";var a=this;a.version="1.5.3";var l=window,j=l.Visitor;j.version=a.version;l.s_c_in||(l.s_c_il=[],l.s_c_in=0);a._c="Visitor";a._il=l.s_c_il;a._in=l.s_c_in;a._il[a._in]=a;l.s_c_in++;a.pa={Ka:[]};var n=l.document,h=j.Ma;h||(h=null);var x=j.Na;x||(x=void 0);var i=j.ja;i||(i=!0);var k=j.La;k||(k=!1);a.S=function(a){var c=0,b,e;if(a)for(b=0;b<a.length;b++)e=a.charCodeAt(b),c=(c<<5)-c+e,c&=c;return c};a.q=function(a){var c=
"0123456789",b="",e="",f,g=8,i=10,h=10;if(1==a){c+="ABCDEF";for(a=0;16>a;a++)f=Math.floor(Math.random()*g),b+=c.substring(f,f+1),f=Math.floor(Math.random()*g),e+=c.substring(f,f+1),g=16;return b+"-"+e}for(a=0;19>a;a++)f=Math.floor(Math.random()*i),b+=c.substring(f,f+1),0==a&&9==f?i=3:(1==a||2==a)&&10!=i&&2>f?i=10:2<a&&(i=10),f=Math.floor(Math.random()*h),e+=c.substring(f,f+1),0==a&&9==f?h=3:(1==a||2==a)&&10!=h&&2>f?h=10:2<a&&(h=10);return b+e};a.ma=function(){var a;!a&&l.location&&(a=l.location.hostname);
if(a)if(/^[0-9.]+$/.test(a))a="";else{var c=a.split("."),b=c.length-1,e=b-1;1<b&&2>=c[b].length&&(2==c[b-1].length||0>",ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,be,bf,bg,bh,bi,bj,bm,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,cl,cm,cn,co,cr,cu,cv,cw,cx,cz,de,dj,dk,dm,do,dz,ec,ee,eg,es,et,eu,fi,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,im,in,io,iq,ir,is,it,je,jo,jp,kg,ki,km,kn,kp,kr,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,na,nc,ne,nf,ng,nl,no,nr,nu,nz,om,pa,pe,pf,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,yt,".indexOf(","+
c[b]+","))&&e--;if(0<e)for(a="";b>=e;)a=c[b]+(a?".":"")+a,b--}return a};a.cookieRead=function(a){var a=encodeURIComponent(a),c=(";"+n.cookie).split(" ").join(";"),b=c.indexOf(";"+a+"="),e=0>b?b:c.indexOf(";",b+1);return 0>b?"":decodeURIComponent(c.substring(b+2+a.length,0>e?c.length:e))};a.cookieWrite=function(d,c,b){var e=a.cookieLifetime,f,c=""+c,e=e?(""+e).toUpperCase():"";b&&"SESSION"!=e&&"NONE"!=e?(f=""!=c?parseInt(e?e:0,10):-60)?(b=new Date,b.setTime(b.getTime()+1E3*f)):1==b&&(b=new Date,f=
b.getYear(),b.setYear(f+2+(1900>f?1900:0))):b=0;return d&&"NONE"!=e?(n.cookie=encodeURIComponent(d)+"="+encodeURIComponent(c)+"; path=/;"+(b?" expires="+b.toGMTString()+";":"")+(a.cookieDomain?" domain="+a.cookieDomain+";":""),a.cookieRead(d)==c):0};a.g=h;a.O=function(a,c){try{"function"==typeof a?a.apply(l,c):a[1].apply(a[0],c)}catch(b){}};a.ra=function(d,c){c&&(a.g==h&&(a.g={}),a.g[d]==x&&(a.g[d]=[]),a.g[d].push(c))};a.o=function(d,c){if(a.g!=h){var b=a.g[d];if(b)for(;0<b.length;)a.O(b.shift(),
c)}};a.j=h;a.oa=function(d,c,b){var e=0,f=0,g;if(c&&n){for(g=0;!e&&2>g;){try{e=(e=n.getElementsByTagName(0<g?"HEAD":"head"))&&0<e.length?e[0]:0}catch(i){e=0}g++}if(!e)try{n.body&&(e=n.body)}catch(j){e=0}if(e)for(g=0;!f&&2>g;){try{f=n.createElement(0<g?"SCRIPT":"script")}catch(k){f=0}g++}}!c||!e||!f?b&&b():(f.type="text/javascript",f.setAttribute("async","async"),f.src=c,e.firstChild?e.insertBefore(f,e.firstChild):e.appendChild(f),a.pa.Ka.push(c),b&&(a.j==h&&(a.j={}),a.j[d]=setTimeout(b,a.loadTimeout)))};
a.ka=function(d){a.j!=h&&a.j[d]&&(clearTimeout(a.j[d]),a.j[d]=0)};a.T=k;a.U=k;a.isAllowed=function(){if(!a.T&&(a.T=i,a.cookieRead(a.cookieName)||a.cookieWrite(a.cookieName,"T",1)))a.U=i;return a.U};a.a=h;a.d=h;var z=j.$a;z||(z="MC");var q=j.eb;q||(q="MCMID");var A=j.ab;A||(A="MCCIDH");var B=j.cb;B||(B="MCSYNCS");var D=j.bb;D||(D="MCIDTS");var y=j.Ya;y||(y="A");var o=j.Va;o||(o="MCAID");var w=j.Za;w||(w="AAM");var v=j.Xa;v||(v="MCAAMLH");var p=j.Wa;p||(p="MCAAMB");var r=j.fb;r||(r="NONE");a.B=0;a.R=
function(){if(!a.B){var d=a.version;a.audienceManagerServer&&(d+="|"+a.audienceManagerServer);a.audienceManagerServerSecure&&(d+="|"+a.audienceManagerServerSecure);a.B=a.S(d)}return a.B};a.V=k;a.f=function(){if(!a.V){a.V=i;var d=a.R(),c=k,b=a.cookieRead(a.cookieName),e,f,g,j=new Date;a.a==h&&(a.a={});if(b&&"T"!=b){b=b.split("|");b[0].match(/^[\-0-9]+$/)&&(parseInt(b[0],10)!=d&&(c=i),b.shift());1==b.length%2&&b.pop();for(d=0;d<b.length;d+=2)e=b[d].split("-"),f=e[0],g=b[d+1],e=1<e.length?parseInt(e[1],
10):0,c&&(f==A&&(g=""),0<e&&(e=j.getTime()/1E3-60)),f&&g&&(a.c(f,g,1),0<e&&(a.a["expire"+f]=e,j.getTime()>=1E3*e&&(a.d||(a.d={}),a.d[f]=i)))}if(!a.b(o)&&(b=a.cookieRead("s_vi")))b=b.split("|"),1<b.length&&0<=b[0].indexOf("v1")&&(g=b[1],d=g.indexOf("["),0<=d&&(g=g.substring(0,d)),g&&g.match(/^[0-9a-fA-F\-]+$/)&&a.c(o,g))}};a.ta=function(){var d=a.R(),c,b;for(c in a.a)!Object.prototype[c]&&a.a[c]&&"expire"!=c.substring(0,6)&&(b=a.a[c],d+=(d?"|":"")+c+(a.a["expire"+c]?"-"+a.a["expire"+c]:"")+"|"+b);
a.cookieWrite(a.cookieName,d,1)};a.b=function(d,c){return a.a!=h&&(c||!a.d||!a.d[d])?a.a[d]:h};a.c=function(d,c,b){a.a==h&&(a.a={});a.a[d]=c;b||a.ta()};a.na=function(d,c){var b=a.b(d,c);return b?b.split("*"):h};a.sa=function(d,c,b){a.c(d,c?c.join("*"):"",b)};a.Sa=function(d,c){var b=a.na(d,c);if(b){var e={},f;for(f=0;f<b.length;f+=2)e[b[f]]=b[f+1];return e}return h};a.Ua=function(d,c,b){var e=h,f;if(c)for(f in e=[],c)Object.prototype[f]||(e.push(f),e.push(c[f]));a.sa(d,e,b)};a.l=function(d,c){var b=
new Date;b.setTime(b.getTime()+1E3*c);a.a==h&&(a.a={});a.a["expire"+d]=Math.floor(b.getTime()/1E3);0>c?(a.d||(a.d={}),a.d[d]=i):a.d&&(a.d[d]=k)};a.Q=function(a){if(a&&("object"==typeof a&&(a=a.d_mid?a.d_mid:a.visitorID?a.visitorID:a.id?a.id:a.uuid?a.uuid:""+a),a&&(a=a.toUpperCase(),"NOTARGET"==a&&(a=r)),!a||a!=r&&!a.match(/^[0-9a-fA-F\-]+$/)))a="";return a};a.i=function(d,c){a.ka(d);a.h!=h&&(a.h[d]=k);if(d==z){var b=a.b(q);if(!b){b="object"==typeof c&&c.mid?c.mid:a.Q(c);if(!b){if(a.u){a.getAnalyticsVisitorID(h,
k,i);return}b=a.q()}a.c(q,b)}if(!b||b==r)b="";"object"==typeof c&&((c.d_region||c.dcs_region||c.d_blob||c.blob)&&a.i(w,c),a.u&&c.mid&&a.i(y,{id:c.id}));a.o(q,[b])}if(d==w&&"object"==typeof c){b=604800;c.id_sync_ttl!=x&&c.id_sync_ttl&&(b=parseInt(c.id_sync_ttl,10));var e=a.b(v);e||((e=c.d_region)||(e=c.dcs_region),e&&(a.l(v,b),a.c(v,e)));e||(e="");a.o(v,[e]);e=a.b(p);if(c.d_blob||c.blob)(e=c.d_blob)||(e=c.blob),a.l(p,b),a.c(p,e);e||(e="");a.o(p,[e]);!c.error_msg&&a.s&&a.c(A,a.s);a.idSyncDisableSyncs?
t.ba=i:(t.ba=k,b={},b.ibs=c.ibs,b.subdomain=c.subdomain,t.Ia(b))}if(d==y){b=a.b(o);b||((b=a.Q(c))?a.l(p,-1):b=r,a.c(o,b));if(!b||b==r)b="";a.o(o,[b])}};a.h=h;a.r=function(d,c,b,e){var f="",g;if(a.isAllowed()&&(a.f(),f=a.b(d),!f&&(d==q?g=z:d==v||d==p?g=w:d==o&&(g=y),g))){if(c&&(a.h==h||!a.h[g]))a.h==h&&(a.h={}),a.h[g]=i,a.oa(g,c,function(){if(!a.b(d)){var b="";d==q?b=a.q():g==w&&(b={error_msg:"timeout"});a.i(g,b)}});a.ra(d,b);c||a.i(g,{id:r});return""}if((d==q||d==o)&&f==r)f="",e=i;b&&e&&a.O(b,[f]);
return f};a._setMarketingCloudFields=function(d){a.f();a.i(z,d)};a.setMarketingCloudVisitorID=function(d){a._setMarketingCloudFields(d)};a.u=k;a.getMarketingCloudVisitorID=function(d,c){if(a.isAllowed()){a.marketingCloudServer&&0>a.marketingCloudServer.indexOf(".demdex.net")&&(a.u=i);var b=a.A("_setMarketingCloudFields");return a.r(q,b,d,c)}return""};a.qa=function(){a.getAudienceManagerBlob()};j.AuthState={UNKNOWN:0,AUTHENTICATED:1,LOGGED_OUT:2};a.p={};a.P=k;a.s="";a.setCustomerIDs=function(d){if(a.isAllowed()&&
d){a.f();var c,b;for(c in d)if(!Object.prototype[c]&&(b=d[c]))if("object"==typeof b){var e={};b.id&&(e.id=b.id);b.authState!=x&&(e.authState=b.authState);a.p[c]=e}else a.p[c]={id:b};var d=a.getCustomerIDs(),e=a.b(A),f="";e||(e=0);for(c in d)Object.prototype[c]||(b=d[c],f+=(f?"|":"")+c+"|"+(b.id?b.id:"")+(b.authState?b.authState:""));a.s=a.S(f);a.s!=e&&(a.P=i,a.qa())}};a.getCustomerIDs=function(){a.f();var d={},c,b;for(c in a.p)Object.prototype[c]||(b=a.p[c],d[c]||(d[c]={}),b.id&&(d[c].id=b.id),d[c].authState=
b.authState!=x?b.authState:j.AuthState.UNKNOWN);return d};a._setAnalyticsFields=function(d){a.f();a.i(y,d)};a.setAnalyticsVisitorID=function(d){a._setAnalyticsFields(d)};a.getAnalyticsVisitorID=function(d,c,b){if(a.isAllowed()){var e="";b||(e=a.getMarketingCloudVisitorID(function(){a.getAnalyticsVisitorID(d,i)}));if(e||b){var f=b?a.marketingCloudServer:a.trackingServer,g="";a.loadSSL&&(b?a.marketingCloudServerSecure&&(f=a.marketingCloudServerSecure):a.trackingServerSecure&&(f=a.trackingServerSecure));
f&&(g="http"+(a.loadSSL?"s":"")+"://"+f+"/id?d_visid_ver="+a.version+"&callback=s_c_il%5B"+a._in+"%5D._set"+(b?"MarketingCloud":"Analytics")+"Fields&mcorgid="+encodeURIComponent(a.marketingCloudOrgID)+(e?"&mid="+e:"")+(a.idSyncDisable3rdPartySyncing?"&d_coppa=true":""));return a.r(b?q:o,g,d,c)}}return""};a._setAudienceManagerFields=function(d){a.f();a.i(w,d)};a.A=function(d){var c=a.audienceManagerServer,b="",e=a.b(q),f=a.b(p,i),g=a.b(o),g=g&&g!=r?"&d_cid_ic=AVID%01"+encodeURIComponent(g):"";a.loadSSL&&
a.audienceManagerServerSecure&&(c=a.audienceManagerServerSecure);if(c){var b=a.getCustomerIDs(),h,j;if(b)for(h in b)Object.prototype[h]||(j=b[h],g+="&d_cid_ic="+encodeURIComponent(h)+"%01"+encodeURIComponent(j.id?j.id:"")+(j.authState?"%01"+j.authState:""));d||(d="_setAudienceManagerFields");b="http"+(a.loadSSL?"s":"")+"://"+c+"/id?d_visid_ver="+a.version+"&d_rtbd=json&d_ver=2"+(!e&&a.u?"&d_verify=1":"")+"&d_orgid="+encodeURIComponent(a.marketingCloudOrgID)+"&d_nsid="+(a.idSyncContainerID||0)+(e?
"&d_mid="+e:"")+(a.idSyncDisable3rdPartySyncing?"&d_coppa=true":"")+(f?"&d_blob="+encodeURIComponent(f):"")+g+"&d_cb=s_c_il%5B"+a._in+"%5D."+d}return b};a.getAudienceManagerLocationHint=function(d,c){if(a.isAllowed()&&a.getMarketingCloudVisitorID(function(){a.getAudienceManagerLocationHint(d,i)})){var b=a.b(o);b||(b=a.getAnalyticsVisitorID(function(){a.getAudienceManagerLocationHint(d,i)}));if(b)return b=a.A(),a.r(v,b,d,c)}return""};a.getAudienceManagerBlob=function(d,c){if(a.isAllowed()&&a.getMarketingCloudVisitorID(function(){a.getAudienceManagerBlob(d,
i)})){var b=a.b(o);b||(b=a.getAnalyticsVisitorID(function(){a.getAudienceManagerBlob(d,i)}));if(b)return b=a.A(),a.P&&a.l(p,-1),a.r(p,b,d,c)}return""};a.m="";a.t={};a.C="";a.D={};a.getSupplementalDataID=function(d,c){!a.m&&!c&&(a.m=a.q(1));var b=a.m;a.C&&!a.D[d]?(b=a.C,a.D[d]=i):b&&(a.t[d]&&(a.C=a.m,a.D=a.t,a.m=b=!c?a.q(1):"",a.t={}),b&&(a.t[d]=i));return b};var u={k:!!l.postMessage,ha:1,N:864E5};a.Oa=u;a.X={postMessage:function(a,c,b){var e=1;c&&(u.k?b.postMessage(a,c.replace(/([^:]+:\/\/[^\/]+).*/,
"$1")):c&&(b.location=c.replace(/#.*$/,"")+"#"+ +new Date+e++ +"&"+a))},J:function(a,c){var b;try{if(u.k)if(a&&(b=function(b){if("string"===typeof c&&b.origin!==c||"[object Function]"===Object.prototype.toString.call(c)&&!1===c(b.origin))return!1;a(b)}),window.addEventListener)window[a?"addEventListener":"removeEventListener"]("message",b,!1);else window[a?"attachEvent":"detachEvent"]("onmessage",b)}catch(e){}}};var E={Y:function(){if(n.addEventListener)return function(a,c,b){a.addEventListener(c,
function(a){"function"===typeof b&&b(a)},k)};if(n.attachEvent)return function(a,c,b){a.attachEvent("on"+c,function(a){"function"===typeof b&&b(a)})}}(),map:function(a,c){if(Array.prototype.map)return a.map(c);if(void 0===a||a===h)throw new TypeError;var b=Object(a),e=b.length>>>0;if("function"!==typeof c)throw new TypeError;for(var f=Array(e),g=0;g<e;g++)g in b&&(f[g]=c.call(c,b[g],g,b));return f},za:function(a,c){return this.map(a,function(a){return encodeURIComponent(a)}).join(c)}};a.Ta=E;var t=
{ia:3E4,M:649,fa:k,id:h,H:h,aa:function(a){if("string"===typeof a)return a=a.split("/"),a[0]+"//"+a[2]},e:h,url:h,Aa:function(){var d="http://fast.",c="?d_nsid="+a.idSyncContainerID+"#"+encodeURIComponent(n.location.href);this.e||(this.e="nosubdomainreturned");a.loadSSL&&(d=a.idSyncSSLUseAkamai?"https://fast.":"https://");d=d+this.e+".demdex.net/dest5.html"+c;this.H=this.aa(d);this.id="destination_publishing_iframe_"+this.e+"_"+a.idSyncContainerID;return d},va:function(){var d="?d_nsid="+a.idSyncContainerID+
"#"+encodeURIComponent(n.location.href);"string"===typeof a.z&&a.z.length&&(this.id="destination_publishing_iframe_"+(new Date).getTime()+"_"+a.idSyncContainerID,this.H=this.aa(a.z),this.url=a.z+d)},ba:h,G:k,L:k,v:h,gb:h,Ga:h,hb:h,K:k,w:[],Ea:[],Fa:[],ca:u.k?15:100,I:[],Ca:[],$:i,da:k,Z:function(){function a(){e=document.createElement("iframe");e.id=b.id;e.style.cssText="display: none; width: 0; height: 0;";e.src=b.url;b.Ga=i;c();document.body.appendChild(e)}function c(){E.Y(e,"load",function(){e.className=
"aamIframeLoaded";b.v=i;b.n()})}this.L=i;var b=this,e=document.getElementById(this.id);e?"IFRAME"!==e.nodeName?(this.id+="_2",a()):"aamIframeLoaded"!==e.className?c():(this.v=i,this.n()):a();this.Ba=e},n:function(d){var c=this;d===Object(d)&&this.I.push(d);if((this.da||!u.k||this.v)&&this.I.length)this.Ha(this.I.shift()),this.n();!a.idSyncDisableSyncs&&this.v&&this.w.length&&!this.K&&(this.fa||(this.fa=i,setTimeout(function(){c.ca=u.k?15:150},this.ia)),this.K=i,this.ea())},Ha:function(a){var c=encodeURIComponent,
b,e,f,g,h;if((b=a.ibs)&&b instanceof Array&&(e=b.length))for(f=0;f<e;f++)g=b[f],h=[c("ibs"),c(g.id||""),c(g.tag||""),E.za(g.url||[],","),c(g.ttl||""),"","",g.fireURLSync?"true":"false"],this.$?this.F(h.join("|")):g.fireURLSync&&this.wa(g,h.join("|"));this.Ca.push(a)},wa:function(d,c){a.f();var b=a.b(B),e=k,f=k,g=Math.ceil((new Date).getTime()/u.N);if(b){if(b=b.split("*"),f=this.Ja(b,d.id,g),e=f.xa,f=f.ya,!e||!f)this.F(c),b.push(d.id+"-"+(g+Math.ceil(d.ttl/60/24))),this.Da(b),a.c(B,b.join("*"))}else this.F(c),
a.c(B,d.id+"-"+(g+Math.ceil(d.ttl/60/24)))},Ja:function(a,c,b){var e=k,f=k,g,h,j;for(h=0;h<a.length;h++)g=a[h],j=parseInt(g.split("-")[1],10),g.match("^"+c+"-")?(e=i,b<j?f=i:(a.splice(h,1),h--)):b>=j&&(a.splice(h,1),h--);return{xa:e,ya:f}},Da:function(a){if(a.join("*").length>this.M)for(a.sort(function(a,b){return parseInt(a.split("-")[1],10)-parseInt(b.split("-")[1],10)});a.join("*").length>this.M;)a.shift()},F:function(d){var c=encodeURIComponent;this.w.push((a.Qa?c("---destpub-debug---"):c("---destpub---"))+
d)},ea:function(){var d=this,c;this.w.length?(c=this.w.shift(),a.X.postMessage(c,this.url,this.Ba.contentWindow),this.Ea.push(c),setTimeout(function(){d.ea()},this.ca)):this.K=k},J:function(a){var c=/^---destpub-to-parent---/;"string"===typeof a&&c.test(a)&&(c=a.replace(c,"").split("|"),"canSetThirdPartyCookies"===c[0]&&(this.$="true"===c[1]?i:k,this.da=i,this.n()),this.Fa.push(a))},Ia:function(d){this.url===h&&(this.e="string"===typeof a.W&&a.W.length?a.W:d.subdomain||"",this.url=this.Aa());d.ibs instanceof
Array&&d.ibs.length&&(this.G=i);if(!a.idSyncDisable3rdPartySyncing&&(this.G||a.la)&&this.e&&"nosubdomainreturned"!==this.e&&!this.L)(j.ga||"complete"===n.readyState||"loaded"===n.readyState)&&this.Z();"function"===typeof a.idSyncIDCallResult?a.idSyncIDCallResult(d):this.n(d);"function"===typeof a.idSyncAfterIDCallResult&&a.idSyncAfterIDCallResult(d)},ua:function(d,c){return a.Ra||!d||c-d>u.ha}};a.Pa=t;0>m.indexOf("@")&&(m+="@AdobeOrg");a.marketingCloudOrgID=m;a.cookieName="AMCV_"+m;a.cookieDomain=
a.ma();a.cookieDomain==l.location.hostname&&(a.cookieDomain="");a.loadSSL=0<=l.location.protocol.toLowerCase().indexOf("https");a.loadTimeout=500;a.marketingCloudServer=a.audienceManagerServer="dpm.demdex.net";if(s&&"object"==typeof s){for(var C in s)!Object.prototype[C]&&(a[C]=s[C]);a.idSyncContainerID=a.idSyncContainerID||0;a.f();C=a.b(D);var F=Math.ceil((new Date).getTime()/u.N);!a.idSyncDisableSyncs&&t.ua(C,F)&&(a.l(p,-1),a.c(D,F));a.getMarketingCloudVisitorID();a.getAudienceManagerLocationHint();
a.getAudienceManagerBlob()}if(!a.idSyncDisableSyncs){t.va();E.Y(window,"load",function(){var d=t;j.ga=i;!a.idSyncDisable3rdPartySyncing&&(d.G||a.la)&&d.e&&"nosubdomainreturned"!==d.e&&d.url&&!d.L&&d.Z()});try{a.X.J(function(a){t.J(a.data)},t.H)}catch(G){}}}Visitor.getInstance=function(m,s){var a,l=window.s_c_il,j;0>m.indexOf("@")&&(m+="@AdobeOrg");if(l)for(j=0;j<l.length;j++)if((a=l[j])&&"Visitor"==a._c&&a.marketingCloudOrgID==m)return a;return new Visitor(m,s)};
(function(){function m(){s.ga=a}var s=window.Visitor,a=s.ja;a||(a=!0);window.addEventListener?window.addEventListener("load",m):window.attachEvent&&window.attachEvent("onload",m)})();


var visitor = Visitor.getInstance("8D6C67C25245AF020A490D4C@AdobeOrg", {
trackingServer: "omtr1.partners.salesforce.com", // same as s.trackingServer
trackingServerSecure: "omtr2.partners.salesforce.com", //same as s.trackingServerSecure

// To enable CNAME support, add the following configuration variables
// If you are not using CNAME, DO NOT include these variables
marketingCloudServer: "omtr1.partners.salesforce.com",
marketingCloudServerSecure: "omtr2.partners.salesforce.com" //same as s.trackingServerSecure
});
;

/* -------------------------------------------------------------------------------- 
   End /system/shared/common/assets/thirdparty/omniture/VisitorAPI.js
   --------------------------------------------------------------------------------
*/

/* -------------------------------------------------------------------------------- 
   File /system/shared/common/assets/thirdparty/omniture/s_code.js
   --------------------------------------------------------------------------------
*/
/* SiteCatalyst code version: H.27.5.
Copyright 1996-2016 Adobe, Inc. All Rights Reserved
More info available at http://www.omniture.com */

var s_account=Server.getAccount();
var s=s_gi(s_account)
/************************** CONFIG SECTION **************************/
/* You may add or alter any code config here. */
/* Link Tracking Config */
s.trackDownloadLinks=true
s.trackExternalLinks=true
s.trackInlineStats=true
s.linkDownloadFileTypes=".exe,.zip,.wav,.mp3,.mov,.mpg,.avi,.wmv,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.eps"
s.linkInternalFilters="javascript:,.salesforce.com,sfdcstatic.com,.force.com,chatter.com,opinionlab.com,mailto:,"+document.location.hostname
s.linkLeaveQueryString=false
s.linkTrackVars="None"
s.linkTrackEvents="None"
s.fpCookieDomainPeriods=(Util.countChars(document.location.hostname,'.')+1).toString();
/* DynamicObjectIDs config */
function s_getObjectID(o){
  var ID=o.href;
  return ID;
}
s.getObjectID=s_getObjectID

/* Plugin Config */
s.usePlugins=true
function s_doPlugins(s) {
  // track site-specific on-click variables
  OmniConfig.customOnClick();
  
  if (!s.pageLoaded) {
    // track shared page-load variables
    OmniConfig.sharedPageLoad();
    
    // track site-specific page-load variables
    OmniConfig.customPageLoad();
  }
  // track shared on-click variables
  OmniConfig.sharedOnClick();
  
  // at this point the page is always loaded
  s.pageLoaded=true;
}
s.doPlugins=s_doPlugins
/************************** PLUGINS SECTION *************************/
/* You may insert any plugins you wish to use here.                 */
OmniConfig.loadPlugins();

/*
 * Functions defined here for backwards-compatibility
 */
s.trackForm=OmniConfig.trackForm;
s.trackCTAs=OmniConfig.trackCTAs;
s.trackModules=OmniConfig.trackModules;
s.trackChat=OmniConfig.trackChat;

/*
 * Custom Plugin: cvpSimple (a slimmed-down version of crossVisitParticipation)
 */
// "v","cn","ex","ct","dl"
s.cvpSimple = function(v, cn, ex, ct, dl) {
  // if no value, quit
  if (!v) return '';
  ex = ex ? ex : 365; // default 1 year
  var exd = new Date(), cv = s.c_r(cn), na = new Array();
    
  // if value contains [[, convert to new format
  if (cv.indexOf('[[') > -1) {
    var oa = new Array();
    oa = eval(cv);
    for (var i=0; i<oa.length; i++) {
      na[na.length] = oa[i][0];
    }
    exd.setDate(exd.getDate() - 1);
  } else if (cv) {
    na = cv.split('~'); 
  }
  
  // if total length > max, strip first value
  if (na.length >= ct) {
    na.splice(0, 1);
  }
  // add newest value
  na[na.length] = v;
  
  // set new cookie
  exd.setDate(exd.getDate() + ex);
  s.c_w(cn, na.join('~'), exd);
  
  // return delimited value
  return na.join(dl);
};

/*
 * Custom Plugin: trims querystring and anchors from a URL
 */
s.trimUrl=new Function("u",""
+"if(!u){return '';}if(u.indexOf('?')>-1){u=u.substring(0,u.indexOf('"
+"?'));}if(u.indexOf('#')>-1){u=u.substring(0,u.indexOf('#'));}return"
+" u;");

/*
 * Plugin: deDupe (remove duplicates from a list)
 */
s.deDupe=new Function("l","d",""
+"d=d?d:',';if(!(l&&d)){return false;}var a=l.split(d),lv='',i=0;a.so"
+"rt();while(i<a.length){if(a[i]==lv){a.splice(i,1);}else{lv=a[i];i++"
+";}}return a.join(d)");

/*
 * Plugin: getQueryParam 2.4 (custom)
 */
s.getQueryParam=new Function("p","d","u",""
+"var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.locati"
+"on);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p"
+".length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t){t=t.indexOf('#')>-"
+"1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substring(i="
+"=p.length?i:i+1)}return v");
s.p_gpv=new Function("k","u",""
+"var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v"
+"=s.pt(q,'&','p_gvf',k)}return v");
s.p_gvf=new Function("t","k",""
+"if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T"
+"rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s."
+"unescp(v)}return ''");

/*
 * Plugin: getValOnce 0.2 - get a value once per session or number of days
 */
s.getValOnce=new Function("v","c","e",""
+"var s=this,k=s.c_r(c),a=new Date;e=e?e:0;if(v){a.setTime(a.getTime("
+")+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v");

/*
 * Plugin: getPreviousValue_v1.0 - return previous value of designated
 *   variable (requires split utility)
 */
s.getPreviousValue=new Function("v","c","el",""
+"var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el"
+"){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i"
+"){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)"
+":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?"
+"s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");

/*
 * Plugin: getAndPersistValue 0.3 - get a value on every page
 */
s.getAndPersistValue=new Function("v","c","e",""
+"var s=this,a=new Date;e=e?e:0;a.setTime(a.getTime()+e*86400000);if("
+"v)s.c_w(c,v,e?a:0);return s.c_r(c);");

/*
 * Utility manageVars v0.2 - clear variable values (requires split 1.5)
 */
s.manageVars=new Function("c","l","f",""
+"var s=this,vl,la,vla;l=l?l:'';f=f?f:1 ;if(!s[c])return false;vl='pa"
+"geName,purchaseID,channel,server,pageType,campaign,state,zip,events"
+",products,transactionID';for(var n=1;n<75;n++){vl+=',prop'+n+',eVar"
+"'+n+',hier'+n;}if(l&&(f==1||f==2)){if(f==1){vl=l;}if(f==2){la=s.spl"
+"it(l,',');vla=s.split(vl,',');vl='';for(x in la){for(y in vla){if(l"
+"a[x]==vla[y]){vla[y]='';}}}for(y in vla){vl+=vla[y]?','+vla[y]:'';}"
+"}s.pt(vl,',',c,0);return true;}else if(l==''&&f==1){s.pt(vl,',',c,0"
+");return true;}else{return false;}");
s.clearVars=new Function("t","var s=this;s[t]='';");
s.lowercaseVars=new Function("t",""
+"var s=this;if(s[t]){s[t]=s[t].toString();s[t]=s[t].toLowerCase();}");

/*
 * Plugin: linkHandler 0.x - identify and report custom links (modified)
 */
s.linkHandler=new Function("p","t","r","c",""
+"var s=this;var o=s.p_go(),h=o.href;var i,l;var n=p?'':t=='e'?'linkI"
+"nternalFilters':t=='d'?'linkDownloadFileTypes':'';t=t?t:'o';if(!h||"
+"(s.linkType&&(h||s.linkName)))return '';i=h.indexOf('?');h=s.linkLe"
+"aveQueryString||i<0?h:h.substring(0,i);if(n){p=s.rep(s[n],',','|');"
+"}l=s.pt(p,'|','p_gn',h.toLowerCase());if(l&&n!='linkInternalFilters"
+"'||(!l&&n=='linkInternalFilters')){s.linkName=l=='[['?'':l;s.linkTy"
+"pe=t;if(c){s.linkName=s.linkType=s.lnk=s.eo='';}return r?o:h;}retur"
+"n '';");
s.p_gn=new Function("t","h",""
+"var i=t?t.indexOf('~'):-1,n,x;if(t&&h){n=i<0?'':t.substring(0,i);x="
+"t.substring(i+1);if(h.indexOf(x.toLowerCase())>-1)return n?n:'[[';}"
+"return 0;");

/*
 * DynamicObjectIDs v1.4: Setup Dynamic Object IDs based on URL
 */
s.setupDynamicObjectIDs=new Function(""
+"var s=this;if(!s.doi){s.doi=1;if(s.apv>3&&(!s.isie||!s.ismac||s.apv"
+">=5)){if(s.wd.attachEvent)s.wd.attachEvent('onload',s.setOIDs);else"
+" if(s.wd.addEventListener)s.wd.addEventListener('load',s.setOIDs,fa"
+"lse);else{s.doiol=s.wd.onload;s.wd.onload=s.setOIDs}}s.wd.s_semapho"
+"re=1}");
s.setOIDs=new Function("e",""
+"var s=s_c_il["+s._in+"],b=s.eh(s.wd,'onload'),o='onclick',x,l,u,c,i"
+",a=new Array;if(s.doiol){if(b)s[b]=s.wd[b];s.doiol(e)}if(s.d.links)"
+"{for(i=0;i<s.d.links.length;i++){l=s.d.links[i];c=l[o]?''+l[o]:'';b"
+"=s.eh(l,o);z=l[b]?''+l[b]:'';u=s.getObjectID(l);if(u&&c.indexOf('s_"
+"objectID')<0&&z.indexOf('s_objectID')<0){u=s.repl(u,'\"','');u=s.re"
+"pl(u,'\\n','').substring(0,97);l.s_oc=l[o];a[u]=a[u]?a[u]+1:1;x='';"
+"if(c.indexOf('.t(')>=0||c.indexOf('.tl(')>=0||c.indexOf('s_gs(')>=0"
+")x='var x=\".tl(\";';x+='s_objectID=\"'+u+'_'+a[u]+'\";return this."
+"s_oc?this.s_oc(e):true';if(s.isns&&s.apv>=5)l.setAttribute(o,x);l[o"
+"]=new Function('e',x)}}}s.wd.s_semaphore=0;return true");

/*
 * Plugin: getPercentPreviousPageViewed v1.5
 * renamed getPercentPageViewed for backwards compatibility
 */
s.handlePPVevents=new Function("",""
+"var s=s_c_il["+s._in+"];if(!s.getPPVid)return;var dh=Math.max(Math."
+"max(s.d.body.scrollHeight,s.d.documentElement.scrollHeight),Math.ma"
+"x(s.d.body.offsetHeight,s.d.documentElement.offsetHeight),Math.max("
+"s.d.body.clientHeight,s.d.documentElement.clientHeight)),vph=s.wd.i"
+"nnerHeight||(s.d.documentElement.clientHeight||s.d.body.clientHeigh"
+"t),st=s.wd.pageYOffset||(s.wd.document.documentElement.scrollTop||s"
+".wd.document.body.scrollTop),vh=st+vph,pv=Math.min(Math.round(vh/dh"
+"*100),100),c=s.c_r('s_ppv'),a=(c.indexOf(',')>-1)?c.split(',',4):[]"
+",id=(a.length>0)?(a[0]):escape(s.getPPVid),cv=(a.length>1)?parseInt"
+"(a[1]):(0),p0=(a.length>2)?parseInt(a[2]):(pv),cy=(a.length>3)?pars"
+"eInt(a[3]):(0),cn=(pv>0)?(id+','+((pv>cv)?pv:cv)+','+p0+','+((vh>cy"
+")?vh:cy)):'';s.c_w('s_ppv',cn);");
s.getPercentPageViewed=new Function("pid",""
+"pid=pid?pid:'-';var s=this,ist=!s.getPPVid?true:false;if(typeof(s.l"
+"inkType)!='undefined'&&s.linkType!='e')return'';var v=s.c_r('s_ppv'"
+"),a=(v.indexOf(',')>-1)?v.split(',',4):[];if(a.length<4){for(var i="
+"3;i>0;i--){a[i]=(i<a.length)?(a[i-1]):('');}a[0]='';}a[0]=unescape("
+"a[0]);s.getPPVpid=pid;s.c_w('s_ppv',escape(pid));if(ist){s.getPPVid"
+"=(pid)?(pid):(s.pageName?s.pageName:document.location.href);s.c_w('"
+"s_ppv',escape(s.getPPVid));if(s.wd.addEventListener){s.wd.addEventL"
+"istener('load',s.handlePPVevents,false);s.wd.addEventListener('scro"
+"ll',s.handlePPVevents,false);s.wd.addEventListener('resize',s.handl"
+"ePPVevents,false);}else if(s.wd.attachEvent){s.wd.attachEvent('onlo"
+"ad',s.handlePPVevents);s.wd.attachEvent('onscroll',s.handlePPVevent"
+"s);s.wd.attachEvent('onresize',s.handlePPVevents);}}return(pid!='-'"
+")?(a):(a[1]);");

/*
 * Plugin: getTimeParting 1.3 - Set timeparting values based on time zone
 */
s.getTimeParting=new Function("t","z","y",""
+"dc=new Date('1/1/2000');f=15;ne=8;if(dc.getDay()!=6||"
+"dc.getMonth()!=0){return'Data Not Available'}else{;z=parseInt(z);"
+"if(y=='2009'){f=8;ne=1};gmar=new Date('3/1/'+y);dsts=f-gmar.getDay("
+");gnov=new Date('11/1/'+y);dste=ne-gnov.getDay();spr=new Date('3/'"
+"+dsts+'/'+y);fl=new Date('11/'+dste+'/'+y);cd=new Date();"
+"if(cd>spr&&cd<fl){z=z+1}else{z=z};utc=cd.getTime()+(cd.getTimezoneO"
+"ffset()*60000);tz=new Date(utc + (3600000*z));thisy=tz.getFullYear("
+");var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Fr"
+"iday','Saturday'];if(thisy!=y){return'Data Not Available'}else{;thi"
+"sh=tz.getHours();thismin=tz.getMinutes();thisd=tz.getDay();var dow="
+"days[thisd];var ap='AM';var dt='Weekday';var mint='00';if(thismin>3"
+"0){mint='30'}if(thish>=12){ap='PM';thish=thish-12};if (thish==0){th"
+"ish=12};if(thisd==6||thisd==0){dt='Weekend'};var timestring=thish+'"
+":'+mint+ap;var daystring=dow;var endstring=dt;if(t=='h'){return tim"
+"estring}if(t=='d'){return daystring};if(t=='w'){return en"
+"dstring}}};"
);
/*
 * s_getLoadTime v1.36 - Get page load time in units of 1/10 seconds
 */
function s_getLoadTime(){if(!window.s_loadT){var b=new Date().getTime(),o=window.performance?performance.timing:0,a=o?o.requestStart:window.inHeadTS||0;s_loadT=a?Math.round((b-a)/100):''}return s_loadT}


/*
 * TNT Integration Plugin v1.0
 */
s.trackTNT=new Function("v","p","b",""
+"var s=this,n='s_tnt',p=p?p:n,v=v?v:n,r='',pm=false,b=b?b:true;if(s."
+"getQueryParam){pm=s.getQueryParam(p);}if(pm){r+=(pm+',');}if(s.wd[v"
+"]!=undefined){r+=s.wd[v];}if(b){s.wd[v]='';}return r;");

/*
 * p_fo: fire only one
 */
s.p_fo=new Function("n",""
+"var s=this;if(!s.__fo){s.__fo=new Object;}if(!s.__fo[n]){s.__fo[n]="
+"new Object;return 1;}else {return 0;}");

/*
 * Plugin Utility: apl v1.1
 */
s.apl=new Function("l","v","d","u",""
+"var s=this,m=0;if(!l)l='';if(u){var i,n,a=s.split(l,d);for(i=0;i<a."
+"length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas"
+"e()));}}if(!m)l=l?l+d+v:v;return l");

/*
 * Utility: escp 0.1 - ensures encodeURIComponent will be used to encode URL parameters if it exists
 */
s.escp=new Function("x",""
+"var s=this;if(typeof(encodeURIComponent)=='function'&&x)return enco"
+"deURIComponent(s.rep(''+x,'+',' '));else return escape(s.rep(''+x,'"
+"+',' '));");

/*
 * Utility: unescp 0.1 - ensures decodeURIComponent will be used to decode URL parameters if it exists
 */
s.unescp=new Function("x",""
+"var s=this;if(typeof(decodeURIComponent)=='function'&&x)return deco"
+"deURIComponent(s.rep(''+x,'+',' '));else return unescape(s.rep(''+x"
+",'+',' '));");

/*
 * Utility Function: split v1.5 (JS 1.0 compatible)
 */
s.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

/*
 * Plugin Utility: Replace v1.0
 */
s.repl=new Function("x","o","n",""
+"var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x."
+"substring(i+o.length);i=x.indexOf(o,i+l)}return x");

/*
 * Utility Function: Determine If A Particular Value Exists Within An Array
 */
s.ia=new Function("ar","v",""
+"for(var i=0;i<ar.length;i++){if(ar[i]==v)return i}return -1");

/*
 * Utility: inList v1.0 - find out if a value is in a list
 */
s.inList=new Function("v","l","d",""
+"var s=this,ar=Array(),i=0,d=(d)?d:',';if(typeof(l)=='string'){if(s."
+"split)ar=s.split(l,d);else if(l.split)ar=l.split(d);else return-1}e"
+"lse ar=l;while(i<ar.length){if(v==ar[i])return true;i++}return fals"
+"e;");

/*
 * Utility Function: p_go
 */
s.p_go=new Function(""
+"var s=this;if(!s.eo&&!s.lnk)return '';var o=s.eo?s.eo:s.lnk;var y=s"
+".ot(o);var n=s.oid(o);var x=o.s_oidt;if(s.eo&&o==s.eo){while(o&&!n&"
+"&y!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(!o)re"
+"turn '';y=s.ot(o);n=s.oid(o);x=o.s_oidt}}return o?o:'';");

/*
 * s.join: 1.0 - s.join(v,p)
 *
 *  v - Array (may also be array of array)
 *  p - formatting parameters (front, back, delim, wrap)
 *
 */
s.join = new Function("v","p",""
+"var s = this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back"
+":'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0"
+";x<v.length;x++){if(typeof(v[x])=='object' )str+=s.join( v[x],p);el"
+"se str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");

/*
 * Function - read combined cookies v 0.3
 */
if(!s.__ccucr){s.c_rr=s.c_r;s.__ccucr = true;
s.c_r=new Function("k",""
+"var s=this,d=new Date,v=s.c_rr(k),c=s.c_rr('s_pers'),i,m,e;if(v)ret"
+"urn v;k=s.ape(k);i=c.indexOf(' '+k+'=');c=i<0?s.c_rr('s_sess'):c;i="
+"c.indexOf(' '+k+'=');m=i<0?i:c.indexOf('|',i);e=i<0?i:c.indexOf(';'"
+",i);m=m>0?m:e;v=i<0?'':s.epa(c.substring(i+2+k.length,m<0?c.length:"
+"m));if(m>0&&m!=e)if(parseInt(c.substring(m+1,e<0?c.length:e))<d.get"
+"Time()){d.setTime(d.getTime()-60000);s.c_w(s.epa(k),'',d);v='';}ret"
+"urn v;");}
/*
 * Function - write combined cookies v 0.3
 */
if(!s.__ccucw){s.c_wr=s.c_w;s.__ccucw = true;
s.c_w=new Function("k","v","e",""
+"this.new2 = true;"
+"var s=this,d=new Date,ht=0,pn='s_pers',sn='s_sess',pc=0,sc=0,pv,sv,"
+"c,i,t;d.setTime(d.getTime()-60000);if(s.c_rr(k)) s.c_wr(k,'',d);k=s"
+".ape(k);pv=s.c_rr(pn);i=pv.indexOf(' '+k+'=');if(i>-1){pv=pv.substr"
+"ing(0,i)+pv.substring(pv.indexOf(';',i)+1);pc=1;}sv=s.c_rr(sn);i=sv"
+".indexOf(' '+k+'=');if(i>-1){sv=sv.substring(0,i)+sv.substring(sv.i"
+"ndexOf(';',i)+1);sc=1;}d=new Date;if(e){if(e.getTime()>d.getTime())"
+"{pv+=' '+k+'='+s.ape(v)+'|'+e.getTime()+';';pc=1;}}else{sv+=' '+k+'"
+"='+s.ape(v)+';';sc=1;}if(sc) s.c_wr(sn,sv,0);if(pc){t=pv;while(t&&t"
+".indexOf(';')!=-1){var t1=parseInt(t.substring(t.indexOf('|')+1,t.i"
+"ndexOf(';')));t=t.substring(t.indexOf(';')+1);ht=ht<t1?t1:ht;}d.set"
+"Time(ht);s.c_wr(pn,pv,d);}return v==s.c_r(s.epa(k));");}

//patch for when s_sess or s_pers exist, but are empty
//TO-DO, talk to adobe about root cause/fix
var originalc_w = s.c_w;
s.c_w = function(k,v,e) { 
  if (typeof s.c_rr('s_pers') === 'undefined'){
    Util.deleteCookie('s_pers');
  }
  if (typeof s.c_rr('s_sess') === 'undefined'){
    Util.deleteCookie('s_sess');
  }
      return originalc_w.call(this, k,v,e);
}


/* WARNING: Changing any of the below variables will cause drastic
changes to how your visitor data is collected.  Changes should only be
made when instructed to do so by your account manager.*/
s.visitorNamespace="salesforce"
s.trackingServer="omtr1.partners.salesforce.com"
s.trackingServerSecure="omtr2.partners.salesforce.com"
s.visitorMigrationServer="salesforce.122.2o7.net"

if (typeof Visitor !== 'undefined') {
  s.prop57 = 'VisitorAPI Present';
  s.visitor = Visitor.getInstance("8D6C67C25245AF020A490D4C@AdobeOrg");
} else {
  s.prop57 = 'VisitorAPI Missing';
}

/***** UNCOMMENT TO USE THE Media MODULE *****
s.loadModule("Media")
s.Media.onLoad = function(s,m) {
  [INSERT-MEDIA-MODULE-CONFIG-HERE]
};
s.m_Media_c="var m=s.m_i('Media');if(m.completeByCloseOffset==undefined)m.completeByCloseOffset=1;if(m.completeCloseOffsetThreshold==undefined)m.completeCloseOffsetThreshold=1;m.cn=function(n){var m="
+"this;return m.s.rep(m.s.rep(m.s.rep(n,\"\\n\",''),\"\\r\",''),'--**--','')};m.open=function(n,l,p,b){var m=this,i=new Object,tm=new Date,a='',x;n=m.cn(n);if(!l)l=-1;if(n&&p){if(!m.l)m.l=new Object;"
+"if(m.l[n])m.close(n);if(b&&b.id)a=b.id;if(a)for (x in m.l)if(m.l[x]&&m.l[x].a==a)m.close(m.l[x].n);i.n=n;i.l=l;i.o=0;i.x=0;i.p=m.cn(m.playerName?m.playerName:p);i.a=a;i.t=0;i.ts=0;i.s=Math.floor(tm"
+".getTime()/1000);i.lx=0;i.lt=i.s;i.lo=0;i.e='';i.to=-1;i.tc=0;i.fel=new Object;i.vt=0;i.sn=0;i.sx=\"\";i.sl=0;i.sg=0;i.sc=0;i.us=0;i.ad=0;i.adpn;i.adpp;i.adppp;i.clk;i.CPM;i.co=0;i.cot=0;i.lm=0;i.l"
+"om=0;m.l[n]=i}};m.openAd=function(n,l,p,pn,pp,ppp,CPM,b){var m=this,i=new Object;n=m.cn(n);m.open(n,l,p,b);i=m.l[n];if(i){i.ad=1;i.adpn=m.cn(pn);i.adpp=pp;i.adppp=ppp;i.CPM=CPM}};m._delete=function"
+"(n){var m=this,i;n=m.cn(n);i=m.l[n];m.l[n]=0;if(i&&i.m)clearTimeout(i.m.i)};m.close=function(n){this.e(n,0,-1)};m.play=function(n,o,sn,sx,sl){var m=this,i;i=m.e(n,1,o,sn,sx,sl);if(i&&!i.m){i.m=new "
+"Object;i.m.m=new Function('var m=s_c_il['+m._in+'],i;if(m.l){i=m.l[\"'+m.s.rep(i.n,'\"','\\\\\"')+'\"];if(i){if(i.lx==1)m.e(i.n,3,-1);i.m.i=setTimeout(i.m.m,1000)}}');i.m.m()}};m.click=function(n,o"
+"){this.e(n,7,o)};m.complete=function(n,o){this.e(n,5,o)};m.stop=function(n,o){this.e(n,2,o)};m.track=function(n){this.e(n,4,-1)};m.bcd=function(vo,i){var m=this,ns='a.media.',v=vo.linkTrackVars,e=v"
+"o.linkTrackEvents,pe='m_i',pev3,c=vo.contextData,x;if(i.ad){ns+='ad.';if(i.adpn){c['a.media.name']=i.adpn;c[ns+'pod']=i.adpp;c[ns+'podPosition']=i.adppp;}if(!i.vt)c[ns+'CPM']=i.CPM;}if (i.clk) {c[n"
+"s+'clicked']=true;i.clk=0}c['a.contentType']='video'+(i.ad?'Ad':'');c['a.media.channel']=m.channel;c[ns+'name']=i.n;c[ns+'playerName']=i.p;if(i.l>0)c[ns+'length']=i.l;if(Math.floor(i.ts)>0)c[ns+'ti"
+"mePlayed']=Math.floor(i.ts);if(!i.vt){c[ns+'view']=true;pe='m_s';i.vt=1}if(i.sx){c[ns+'segmentNum']=i.sn;c[ns+'segment']=i.sx;if(i.sl>0)c[ns+'segmentLength']=i.sl;if(i.sc&&i.ts>0)c[ns+'segmentView'"
+"]=true}if(!i.cot&&i.co){c[ns+\"complete\"]=true;i.cot=1}if(i.lm>0)c[ns+'milestone']=i.lm;if(i.lom>0)c[ns+'offsetMilestone']=i.lom;if(v)for(x in c)v+=',contextData.'+x;pev3=c['a.contentType'];vo.pe="
+"pe;vo.pev3=pev3;var d=m.contextDataMapping,y,a,l,n;if(d){vo.events2='';if(v)v+=',events';for(x in d){if(x.substring(0,ns.length)==ns)y=x.substring(ns.length);else y=\"\";a=d[x];if(typeof(a)=='strin"
+"g'){l=m.s.sp(a,',');for(n=0;n<l.length;n++){a=l[n];if(x==\"a.contentType\"){if(v)v+=','+a;vo[a]=c[x]}else if(y=='view'||y=='segmentView'||y=='clicked'||y=='complete'||y=='timePlayed'||y=='CPM'){if("
+"e)e+=','+a;if(y=='timePlayed'||y=='CPM'){if(c[x])vo.events2+=(vo.events2?',':'')+a+'='+c[x];}else if(c[x])vo.events2+=(vo.events2?',':'')+a}else if(y=='segment'&&c[x+'Num']){if(v)v+=','+a;vo[a]=c[x"
+"+'Num']+':'+c[x]}else{if(v)v+=','+a;vo[a]=c[x]}}}else if(y=='milestones'||y=='offsetMilestones'){x=x.substring(0,x.length-1);if(c[x]&&d[x+'s'][c[x]]){if(e)e+=','+d[x+'s'][c[x]];vo.events2+=(vo.even"
+"ts2?',':'')+d[x+'s'][c[x]]}}if(c[x])c[x]=undefined;if(y=='segment'&&c[x+'Num'])c[x+\"Num\"]=undefined}}vo.linkTrackVars=v;vo.linkTrackEvents=e};m.bpe=function(vo,i,x,o){var m=this,pe='m_o',pev3,d='"
+"--**--';pe='m_o';if(!i.vt){pe='m_s';i.vt=1}else if(x==4)pe='m_i';pev3=m.s.ape(i.n)+d+Math.floor(i.l>0?i.l:1)+d+m.s.ape(i.p)+d+Math.floor(i.t)+d+i.s+d+(i.to>=0?'L'+Math.floor(i.to):'')+i.e+(x!=0&&x!"
+"=2?'L'+Math.floor(o):'');vo.pe=pe;vo.pev3=pev3};m.e=function(n,x,o,sn,sx,sl,pd){var m=this,i,tm=new Date,ts=Math.floor(tm.getTime()/1000),c,l,v=m.trackVars,e=m.trackEvents,ti=m.trackSeconds,tp=m.tr"
+"ackMilestones,to=m.trackOffsetMilestones,sm=m.segmentByMilestones,so=m.segmentByOffsetMilestones,z=new Array,j,t=1,w=new Object,x,ek,tc,vo=new Object;if(!m.channel)m.channel=m.s.wd.location.hostnam"
+"e;n=m.cn(n);i=n&&m.l&&m.l[n]?m.l[n]:0;if(i){if(i.ad){ti=m.adTrackSeconds;tp=m.adTrackMilestones;to=m.adTrackOffsetMilestones;sm=m.adSegmentByMilestones;so=m.adSegmentByOffsetMilestones}if(o<0){if(i"
+".lx==1&&i.lt>0)o=(ts-i.lt)+i.lo;else o=i.lo}if(i.l>0)o=o<i.l?o:i.l;if(o<0)o=0;i.o=o;if(i.l>0){i.x=(i.o/i.l)*100;i.x=i.x>100?100:i.x}if(i.lo<0)i.lo=o;tc=i.tc;w.name=n;w.ad=i.ad;w.length=i.l;w.openTi"
+"me=new Date;w.openTime.setTime(i.s*1000);w.offset=i.o;w.percent=i.x;w.playerName=i.p;if(i.to<0)w.mediaEvent=w.event='OPEN';else w.mediaEvent=w.event=(x==1?'PLAY':(x==2?'STOP':(x==3?'MONITOR':(x==4?"
+"'TRACK':(x==5?'COMPLETE':(x==7?'CLICK':('CLOSE')))))));if(!pd){if(i.pd)pd=i.pd}else i.pd=pd;w.player=pd;if(x>2||(x!=i.lx&&(x!=2||i.lx==1))) {if(!sx){sn=i.sn;sx=i.sx;sl=i.sl}if(x){if(x==1)i.lo=o;if("
+"(x<=3||x>=5)&&i.to>=0){t=0;v=e=\"None\";if(i.to!=o){l=i.to;if(l>o){l=i.lo;if(l>o)l=o}z=tp?m.s.sp(tp,','):0;if(i.l>0&&z&&o>=l)for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c&&(l/i.l)*100<c"
+"&&i.x>=c){t=1;j=z.length;w.mediaEvent=w.event='MILESTONE';i.lm=w.milestone=c}}z=to?m.s.sp(to,','):0;if(z&&o>=l)for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c&&l<c&&o>=c){t=1;j=z.length;w"
+".mediaEvent=w.event='OFFSET_MILESTONE';i.lom=w.offsetMilestone=c}}}}if(i.sg||!sx){if(sm&&tp&&i.l>0){z=m.s.sp(tp,',');if(z){z[z.length]='100';l=0;for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0"
+";if(c){if(i.x<c){sn=j+1;sx='M:'+l+'-'+c;j=z.length}l=c}}}}else if(so&&to){z=m.s.sp(to,',');if(z){z[z.length]=''+(i.l>0?i.l:'E');l=0;for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c||z[j]=="
+"'E'){if(o<c||z[j]=='E'){sn=j+1;sx='O:'+l+'-'+c;j=z.length}l=c}}}}if(sx)i.sg=1}if((sx||i.sx)&&sx!=i.sx){i.us=1;if(!i.sx){i.sn=sn;i.sx=sx}if(i.to>=0)t=1}if((x>=2||i.x>=100)&&i.lo<o){i.t+=o-i.lo;i.ts+"
+"=o-i.lo}if(x<=2||(x==3&&!i.lx)){i.e+=(x==1||x==3?'S':'E')+Math.floor(o);i.lx=(x==3?1:x)}if(!t&&i.to>=0&&x<=3){ti=ti?ti:0;if(ti&&i.ts>=ti){t=1;w.mediaEvent=w.event='SECONDS'}}i.lt=ts;i.lo=o}if(!x||("
+"x<=3&&i.x>=100)){if(i.lx!=2)i.e+='E'+Math.floor(o);x=0;v=e=\"None\";w.mediaEvent=w.event=\"CLOSE\"}if(x==7){w.clicked=i.clk=1;t=1}if(x==5||(m.completeByCloseOffset&&(!x||i.x>=100)&&i.l>0&&o>=i.l-m."
+"completeCloseOffsetThreshold)){w.complete=i.co=1;t=1}ek=w.mediaEvent;if(ek=='MILESTONE')ek+='_'+w.milestone;else if(ek=='OFFSET_MILESTONE')ek+='_'+w.offsetMilestone;if(!i.fel[ek]) {w.eventFirstTime"
+"=true;i.fel[ek]=1}else w.eventFirstTime=false;w.timePlayed=i.t;w.segmentNum=i.sn;w.segment=i.sx;w.segmentLength=i.sl;if(m.monitor&&x!=4)m.monitor(m.s,w);if(x==0)m._delete(n);if(t&&i.tc==tc){vo=new "
+"Object;vo.contextData=new Object;vo.linkTrackVars=v;vo.linkTrackEvents=e;if(!vo.linkTrackVars)vo.linkTrackVars='';if(!vo.linkTrackEvents)vo.linkTrackEvents='';if(m.trackUsingContextData)m.bcd(vo,i)"
+";else m.bpe(vo,i,x,o);m.s.t(vo);if(i.us){i.sn=sn;i.sx=sx;i.sc=1;i.us=0}else if(i.ts>0)i.sc=0;i.e=\"\";i.lm=i.lom=0;i.ts-=Math.floor(i.ts);i.to=o;i.tc++}}}return i};m.ae=function(n,l,p,x,o,sn,sx,sl,"
+"pd,b){var m=this,r=0;if(n&&(!m.autoTrackMediaLengthRequired||(length&&length>0)) &&p){if(!m.l||!m.l[n]){if(x==1||x==3){m.open(n,l,p,b);r=1}}else r=1;if(r)m.e(n,x,o,sn,sx,sl,pd)}};m.a=function(o,t){"
+"var m=this,i=o.id?o.id:o.name,n=o.name,p=0,v,c,c1,c2,xc=m.s.h,x,e,f1,f2='s_media_'+m._in+'_oc',f3='s_media_'+m._in+'_t',f4='s_media_'+m._in+'_s',f5='s_media_'+m._in+'_l',f6='s_media_'+m._in+'_m',f7"
+"='s_media_'+m._in+'_c',tcf,w;if(!i){if(!m.c)m.c=0;i='s_media_'+m._in+'_'+m.c;m.c++}if(!o.id)o.id=i;if(!o.name)o.name=n=i;if(!m.ol)m.ol=new Object;if(m.ol[i])return;m.ol[i]=o;if(!xc)xc=m.s.b;tcf=new"
+" Function('o','var e,p=0;try{if(o.versionInfo&&o.currentMedia&&o.controls)p=1}catch(e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o','var e,p=0,t;try{t=o.GetQuickTimeVersion();if(t)p=2}catch("
+"e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o','var e,p=0,t;try{t=o.GetVersionInfo();if(t)p=3}catch(e){p=0}return p');p=tcf(o)}}v=\"var m=s_c_il[\"+m._in+\"],o=m.ol['\"+i+\"']\";if(p==1){p="
+"'Windows Media Player '+o.versionInfo;c1=v+',n,p,l,x=-1,cm,c,mn;if(o){cm=o.currentMedia;c=o.controls;if(cm&&c){mn=cm.name?cm.name:c.URL;l=cm.duration;p=c.currentPosition;n=o.playState;if(n){if(n==8"
+")x=0;if(n==3)x=1;if(n==1||n==2||n==4||n==5||n==6)x=2;}';c2='if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,0,\"\",0,0,o)}}';c=c1+c2;if(m.s.isie&&xc){x=m.s.d.createElement('script');x.language='jscript';x."
+"type='text/javascript';x.htmlFor=i;x.event='PlayStateChange(NewState)';x.defer=true;x.text=c;xc.appendChild(x);o[f6]=new Function(c1+'if(n==3){x=3;'+c2+'}setTimeout(o.'+f6+',5000)');o[f6]()}}if(p=="
+"2){p='QuickTime Player '+(o.GetIsQuickTimeRegistered()?'Pro ':'')+o.GetQuickTimeVersion();f1=f2;c=v+',n,x,t,l,p,p2,mn;if(o){mn=o.GetMovieName()?o.GetMovieName():o.GetURL();n=o.GetRate();t=o.GetTime"
+"Scale();l=o.GetDuration()/t;p=o.GetTime()/t;p2=o.'+f5+';if(n!=o.'+f4+'||p<p2||p-p2>5){x=2;if(n!=0)x=1;else if(p>=l)x=0;if(p<p2||p-p2>5)m.ae(mn,l,\"'+p+'\",2,p2,0,\"\",0,0,o);m.ae(mn,l,\"'+p+'\",x,x"
+"!=2?p:-1,0,\"\",0,0,o)}if(n>0&&o.'+f7+'>=10){m.ae(mn,l,\"'+p+'\",3,p,0,\"\",0,0,o);o.'+f7+'=0}o.'+f7+'++;o.'+f4+'=n;o.'+f5+'=p;setTimeout(\"'+v+';o.'+f2+'(0,0)\",500)}';o[f1]=new Function('a','b',c"
+");o[f4]=-1;o[f7]=0;o[f1](0,0)}if(p==3){p='RealPlayer '+o.GetVersionInfo();f1=n+'_OnPlayStateChange';c1=v+',n,x=-1,l,p,mn;if(o){mn=o.GetTitle()?o.GetTitle():o.GetSource();n=o.GetPlayState();l=o.GetL"
+"ength()/1000;p=o.GetPosition()/1000;if(n!=o.'+f4+'){if(n==3)x=1;if(n==0||n==2||n==4||n==5)x=2;if(n==0&&(p>=l||p==0))x=0;if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,0,\"\",0,0,o)}if(n==3&&(o.'+f7+'>=10|"
+"|!o.'+f3+')){m.ae(mn,l,\"'+p+'\",3,p,0,\"\",0,0,o);o.'+f7+'=0}o.'+f7+'++;o.'+f4+'=n;';c2='if(o.'+f2+')o.'+f2+'(o,n)}';if(m.s.wd[f1])o[f2]=m.s.wd[f1];m.s.wd[f1]=new Function('a','b',c1+c2);o[f1]=new"
+" Function('a','b',c1+'setTimeout(\"'+v+';o.'+f1+'(0,0)\",o.'+f3+'?500:5000);'+c2);o[f4]=-1;if(m.s.isie)o[f3]=1;o[f7]=0;o[f1](0,0)}};m.as=new Function('e','var m=s_c_il['+m._in+'],l,n;if(m.autoTrack"
+"&&m.s.d.getElementsByTagName){l=m.s.d.getElementsByTagName(m.s.isie?\"OBJECT\":\"EMBED\");if(l)for(n=0;n<l.length;n++)m.a(l[n]);}');if(s.wd.attachEvent)s.wd.attachEvent('onload',m.as);else if(s.wd."
+"addEventListener)s.wd.addEventListener('load',m.as,false);if(m.onLoad)m.onLoad(s,m)";s.m_i("Media");
**** END Media MODULE COMMENT ***/

/***** UNCOMMENT TO USE THE Integrate MODULE *****
s.loadModule("Integrate")
s.Integrate.onLoad = function(s,m) {
  [INSERT-INTEGRATE-MODULE-CONFIG-HERE]
};
s.m_Integrate_c="var m=s.m_i('Integrate');m.add=function(n,o){var m=this,p;if(!o)o='s_Integrate_'+n;if(!m.s.wd[o])m.s.wd[o]=new Object;m[n]=new Object;p=m[n];p._n=n;p._m=m;p._c=0;p._d=0;p.disable=0;p"
+".get=m.get;p.delay=m.delay;p.ready=m.ready;p.beacon=m.beacon;p.script=m.script;m.l[m.l.length]=n};m._g=function(t){var m=this,s=m.s,i,p,f=(t?'use':'set')+'Vars',tcf;for(i=0;i<m.l.length;i++){p=m[m."
+"l[i]];if(p&&!p.disable&&p[f]){if(s.apv>=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','p','f','var e;try{p[f](s,p)}catch(e){}');tcf(s,p,f)}else p[f](s,p)}}};m._t=function(){this._g(1)};m._fu=func"
+"tion(p,u){var m=this,s=m.s,v,x,y,z,tm=new Date;if(u.toLowerCase().substring(0,4) != 'http')u='http://'+u;if(s.ssl)u=s.rep(u,'http:','https:');p.RAND=Math&&Math.random?Math.floor(Math.random()*10000"
+"000000000):tm.getTime();p.RAND+=Math.floor(tm.getTime()/10800000)%10;x=0;while(x>=0){x=u.indexOf('[',x);if(x>=0){y=u.indexOf(']',x);if(y>x){z=u.substring(x+1,y);if(z.length>2&&z.substring(0,2)=='s."
+"'){v=s[z.substring(2)];if(!v)v=''}else{v=''+p[z];if(!(v==p[z]||parseFloat(v)==p[z]))z=0}if(z) {u=u.substring(0,x)+s.rep(escape(v),'+','%2B')+u.substring(y+1);x=y-(z.length-v.length+1)} else {x=y}}}"
+"}return u};m.get=function(u,v){var p=this,m=p._m;if(!p.disable){if(!v)v='s_'+m._in+'_Integrate_'+p._n+'_get_'+p._c;p._c++;p.VAR=v;p._d++;m.s.loadModule('Integrate:'+v,m._fu(p,u),0,1,p._n)}};m.delay"
+"=function(){var p=this;if(p._d<=0)p._d=1};m.ready=function(){var p=this,m=p._m;p._d=0;if(!p.disable)m.s.dlt()};m._d=function(){var m=this,i,p;for(i=0;i<m.l.length;i++){p=m[m.l[i]];if(p&&!p.disable&"
+"&p._d>0)return 1}return 0};m._x=function(d,n){var p=this[n],x;if(!p.disable){for(x in d)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))p[x]=d[x];p._d--}};m.beacon=function(u){var p=this,m"
+"=p._m,s=m.s,imn='s_i_'+m._in+'_Integrate_'+p._n+'_'+p._c,im;if(!p.disable&&s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){p._c++;im=s.wd[imn]=new Image;im.src=m._fu(p,u)}};m.s"
+"cript=function(u){var p=this,m=p._m;if(!p.disable)m.s.loadModule(0,m._fu(p,u),0,1)};m.l=new Array;if(m.onLoad)m.onLoad(s,m)";s.m_i("Integrate");
**** END Integrate MODULE COMMENT ***/

/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
var s_code='',s_objectID;function s_gi(un,pg,ss){var c="s.version='H.27.5';s.an=s_an;s.logDebug=function(m){var s=this,tcf=new Function('var e;try{console.log(\"'+s.rep(s.rep(s.rep(m,\"\\\\\",\"\\\\"
+"\\\\\"),\"\\n\",\"\\\\n\"),\"\\\"\",\"\\\\\\\"\")+'\");}catch(e){}');tcf()};s.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}retur"
+"n y};s.fl=function(x,l){return x?(''+x).substring(0,l):x};s.co=function(o){return o};s.num=function(x){x=''+x;for(var p=0;p<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;ret"
+"urn 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',f=\"+~!*()'\",i,c=s.charSet,n,l,e,y='';c=c?c.toUpperCase():'';if(x){x=''+x;if(s.em==3){x=encodeURIComponent("
+"x);for(i=0;i<f.length;i++) {n=f.substring(i,i+1);if(x.indexOf(n)>=0)x=s.rep(x,n,\"%\"+n.charCodeAt(0).toString(16).toUpperCase())}}else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.su"
+"bstring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h.substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}x=y}else x=s.rep(escape(''+x),'+"
+"','%2B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00"
+"'+x.substring(i);i=x.indexOf('%',i)}}}return x};s.epa=function(x){var s=this,y,tcf;if(x){x=s.rep(''+x,'+',' ');if(s.em==3){tcf=new Function('x','var y,e;try{y=decodeURIComponent(x)}catch(e){y=unesc"
+"ape(x)}return y');return tcf(x)}else return unescape(x)}return y};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r"
+";z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);c=a.indexOf('=');if(c>=0)a=a.substring(0,c);if(t.substring("
+"0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var s=this;s.fsg='';s.pt(x,',','fsf'"
+",f);return s.fsg};s.mpc=function(m,a){var s=this,c,l,n,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(v&&v=='prerender'){if(!s.mpq){s.mpq=new Array;l=s.sp('webkitvisibilitychange,visi"
+"bilitychange',',');for(n=0;n<l.length;n++){s.d.addEventListener(l[n],new Function('var s=s_c_il['+s._in+'],c,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(s.mpq&&v==\"visible\"){whil"
+"e(s.mpq.length>0){c=s.mpq.shift();s[c.m].apply(s,c.a)}s.mpq=0}'),false)}}c=new Object;c.m=m;c.a=a;s.mpq.push(c);return 1}return 0};s.si=function(){var s=this,i,k,v,c=s_gi+'var s=s_gi(\"'+s.oun+'\")"
+";s.sa(\"'+s.un+'\");';for(i=0;i<s.va_g.length;i++){k=s.va_g[i];v=s[k];if(v!=undefined){if(typeof(v)!='number')c+='s.'+k+'=\"'+s_fe(v)+'\";';else c+='s.'+k+'='+v+';'}}c+=\"s.lnk=s.eo=s.linkName=s.li"
+"nkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';\";return c};s.c_d='';s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var s=this,d=s.wd.location.hostnam"
+"e,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?parseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s.pt(d,'"
+".','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.ape(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s.epa(c.substring(i+2+k.length,e<"
+"0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NONE'){t=(v!=''?parseInt(l?l:0):-6"
+"0);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()+';':'')+(d?' domain='+d+';':''"
+");return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s._in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i].o==o&&l[i].e==e)n=i}if(n<0){n=i"
+";l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if(x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.apv>=5&&(!s.isopera||s.apv>=7)){tc"
+"f=new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return r');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.wd,'onerror',0,o);r=s[f](a);s.eh(s"
+".wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfsoe=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c=s.t();if(c)s.d.write(c);s.etfs=0"
+";return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=this,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs=p;return s.gtfsf(s.tfs)}return "
+"s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=this,l=s.rl[u],n,r;s.rl[u]=0;if(l)fo"
+"r(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,r.t,r.u)}};s.flushBufferedRequests=function(){};s.tagContainerMarker='';s.mr=function(sess,q,rs,ta,u){var s=this,dc=s.dc,t1=s.trackingServer,t2=s.trackingS"
+"erverSecure,tb=s.trackingServerBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Object,l,imn='s_i_'+s._in+'_'+un,im,b,e;if(!rs){if(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.net"
+"';if(dc)dc=(''+dc).toLowerCase();else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s.ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mobi"
+"le?'5.1':'1')+'/'+s.version+(s.tcn?'T':'')+(s.tagContainerMarker?\"-\"+s.tagContainerMarker:\"\")+'/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl(rs,2047)}if(s.d.images&&s.apv"
+">=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if(!s.rc)s.rc=new Object;if(!s.rc[un]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+"
+"'].mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;r.u=un;r.r=rs;l[l.length]=r;return ''}imn+='_'+s.rc[un];s.rc[un]++}if(s.debugTracking){var d='AppMeasurement Debug: '+rs,dl=s.sp(rs,'&'),dln;fo"
+"r(dln=0;dln<dl.length;dln++)d+=\"\\n\\t\"+s.epa(dl[dln]);s.logDebug(d)}im=s.wd[imn];if(!im)im=s.wd[imn]=new Image;im.alt=\"\";im.s_l=0;im.onload=im.onerror=new Function('e','this.s_l=1;var wd=windo"
+"w,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.bcr();s.mrq(\"'+un+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');if(!s.nrs){s.nrs=1;s.m_m('rs')}else s.nrs++;im.src=rs;if(s.useForcedLinkTracking||s.bcf){if(!s."
+"forcedLinkTrackingTimeout)s.forcedLinkTrackingTimeout=250;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'].bcr()',s.forcedLinkTrackingTimeout);}else if((s.lnk||s.eo)&&(!ta||ta=='_self'||ta=='_"
+"top'||ta=='_parent'||(s.wd.name&&ta==s.wd.name))){b=e=new Date;while(!im.s_l&&e.getTime()-b.getTime()<500)e=new Date}return ''}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'"
+"};s.gg=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'+v]};s.glf=function(t,a){if(t.substring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=function(v)"
+"{var s=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,p,l=0,q,a,b='',c='',t;if(x&&x.length>255){y=''+x;i=y.indexOf('?');if(i>0){q=y.substring(i+1);y=y.substring(0,i);h=y.toLo"
+"werCase();j=0;if(h.substring(0,7)=='http://')j+=7;else if(h.substring(0,8)=='https://')j+=8;i=h.indexOf(\"/\",j);if(i>0){h=h.substring(j,i);p=y.substring(i);y=y.substring(0,i);if(h.indexOf('google'"
+")>=0)l=',q,ie,start,search_key,word,kw,cd,';else if(h.indexOf('yahoo.co')>=0)l=',p,ei,';if(l&&q){a=s.sp(q,'&');if(a&&a.length>1){for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(',"
+"'+t.substring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c)q=b+'&'+c;else c=''}i=253-(q.length-c.length)-y.length;x=y+(i>0?p.substring(0,i):'')+'?'+q}}}}return x};s.s2q=function(k,v,vf"
+",vfp,f){var s=this,qs='',sk,sv,sp,ss,nke,nk,nf,nfl=0,nfn,nfm;if(k==\"contextData\")k=\"c\";if(v){for(sk in v)if((!f||sk.substring(0,f.length)==f)&&v[sk]&&(!vf||vf.indexOf(','+(vfp?vfp+'.':'')+sk+',"
+"')>=0)&&(!Object||!Object.prototype||!Object.prototype[sk])){nfm=0;if(nfl)for(nfn=0;nfn<nfl.length;nfn++)if(sk.substring(0,nfl[nfn].length)==nfl[nfn])nfm=1;if(!nfm){if(qs=='')qs+='&'+k+'.';sv=v[sk]"
+";if(f)sk=sk.substring(f.length);if(sk.length>0){nke=sk.indexOf('.');if(nke>0){nk=sk.substring(0,nke);nf=(f?f:'')+nk+'.';if(!nfl)nfl=new Array;nfl[nfl.length]=nf;qs+=s.s2q(nk,v,vf,vfp,nf)}else{if(ty"
+"peof(sv)=='boolean'){if(sv)sv='true';else sv='false'}if(sv){if(vfp=='retrieveLightData'&&f.indexOf('.contextData.')<0){sp=sk.substring(0,4);ss=sk.substring(4);if(sk=='transactionID')sk='xact';else "
+"if(sk=='channel')sk='ch';else if(sk=='campaign')sk='v0';else if(s.num(ss)){if(sp=='prop')sk='c'+ss;else if(sp=='eVar')sk='v'+ss;else if(sp=='list')sk='l'+ss;else if(sp=='hier'){sk='h'+ss;sv=sv.subs"
+"tring(0,255)}}}qs+='&'+s.ape(sk)+'='+s.ape(sv)}}}}}if(qs!='')qs+='&.'+k}return qs};s.hav=function(){var s=this,qs='',l,fv='',fe='',mn,i,e;if(s.lightProfileID){l=s.va_m;fv=s.lightTrackVars;if(fv)fv="
+"','+fv+','+s.vl_mr+','}else{l=s.va_t;if(s.pe||s.linkType){fv=s.linkTrackVars;fe=s.linkTrackEvents;if(s.pe){mn=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].trackVars;fe=s[m"
+"n].trackEvents}}}if(fv)fv=','+fv+','+s.vl_l+','+s.vl_l2;if(fe){fe=','+fe+',';if(fv)fv+=',events,'}if (s.events2)e=(e?',':'')+s.events2}for(i=0;i<l.length;i++){var k=l[i],v=s[k],b=k.substring(0,4),x"
+"=k.substring(4),n=parseInt(x),q=k;if(!v)if(k=='events'&&e){v=e;e=''}if(v&&(!fv||fv.indexOf(','+k+',')>=0)&&k!='linkName'&&k!='linkType'){if(k=='supplementalDataID')q='sdid';else if(k=='timestamp')q"
+"='ts';else if(k=='dynamicVariablePrefix')q='D';else if(k=='visitorID')q='vid';else if(k=='marketingCloudVisitorID')q='mid';else if(k=='analyticsVisitorID')q='aid';else if(k=='audienceManagerLocatio"
+"nHint')q='aamlh';else if(k=='audienceManagerBlob')q='aamb';else if(k=='authState')q='as';else if(k=='pageURL'){q='g';if(v.length>255){s.pageURLRest=v.substring(255);v=v.substring(0,255);}}else if(k"
+"=='pageURLRest')q='-g';else if(k=='referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigrationServer'){q='vmf';if(s.ssl&&s.visitorMigrationS"
+"erverSecure)v=''}else if(k=='visitorMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUpperCase()=='AUTO')v='ISO8859-1';else if(s.em==2||s"
+".em==3)v='UTF-8'}else if(k=='visitorNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='variableProvider')q='vvp';else if(k=='currencyCode')q='"
+"cc';else if(k=='channel')q='ch';else if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDepth')q='c';else if(k=='javascriptVersion')q='j';els"
+"e if(k=='javaEnabled')q='v';else if(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connectionType')q='ct';else if(k=='homepage')q='hp';else"
+" if(k=='plugins')q='p';else if(k=='events'){if(e)v+=(v?',':'')+e;if(fe)v=s.fs(v,fe)}else if(k=='events2')v='';else if(k=='contextData'){qs+=s.s2q('c',s[k],fv,k,0);v=''}else if(k=='lightProfileID')q"
+"='mtp';else if(k=='lightStoreForSeconds'){q='mtss';if(!s.lightProfileID)v=''}else if(k=='lightIncrementBy'){q='mti';if(!s.lightProfileID)v=''}else if(k=='retrieveLightProfiles')q='mtsr';else if(k=="
+"'deleteLightProfiles')q='mtsd';else if(k=='retrieveLightData'){if(s.retrieveLightProfiles)qs+=s.s2q('mts',s[k],fv,k,0);v=''}else if(s.num(x)){if(b=='prop')q='c'+n;else if(b=='eVar')q='v'+n;else if("
+"b=='list')q='l'+n;else if(b=='hier'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+s.ape(q)+'='+(k.substring(0,3)!='pev'?s.ape(v):v)}}return qs};s.ltdf=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase("
+"):'';var qi=h.indexOf('?'),hi=h.indexOf('#');if(qi>=0){if(hi>=0&&hi<qi)qi=hi;}else qi=hi;h=qi>=0?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t)return 1;return 0};s.ltef=functi"
+"on(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';if(t&&h.indexOf(t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef=s.linkExternalFilters,lif=s.linkInternalFi"
+"lters;lif=lif?lif:s.wd.location.hostname;h=h.toLowerCase();if(s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.indexOf('#')!=0&&h.indexOf('about:')!=0&&h.inde"
+"xOf('javascript:')!=0&&(lef||lif)&&(!lef||s.pt(lef,',','ltef',h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new Function('e','var s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.ln"
+"k=this;s.t();s.lnk=0;if(b)return this[b](e);return true');s.bcr=function(){var s=this;if(s.bct&&s.bce)s.bct.dispatchEvent(s.bce);if(s.bcf){if(typeof(s.bcf)=='function')s.bcf();else if(s.bct&&s.bct."
+"href)s.d.location=s.bct.href}s.bct=s.bce=s.bcf=0};s.bc=new Function('e','if(e&&e.s_fe)return;var s=s_c_il['+s._in+'],f,tcf,t,n,nrs,a,h;if(s.d&&s.d.all&&s.d.all.cppXYctnr)return;if(!s.bbc)s.useForce"
+"dLinkTracking=0;else if(!s.useForcedLinkTracking){s.b.removeEventListener(\"click\",s.bc,true);s.bbc=s.useForcedLinkTracking=0;return}else s.b.removeEventListener(\"click\",s.bc,false);s.eo=e.srcEl"
+"ement?e.srcElement:e.target;nrs=s.nrs;s.t();s.eo=0;if(s.nrs>nrs&&s.useForcedLinkTracking&&e.target){a=e.target;while(a&&a!=s.b&&a.tagName.toUpperCase()!=\"A\"&&a.tagName.toUpperCase()!=\"AREA\")a=a"
+".parentNode;if(a){h=a.href;if(h.indexOf(\"#\")==0||h.indexOf(\"about:\")==0||h.indexOf(\"javascript:\")==0)h=0;t=a.target;if(e.target.dispatchEvent&&h&&(!t||t==\"_self\"||t==\"_top\"||t==\"_parent"
+"\"||(s.wd.name&&t==s.wd.name))){tcf=new Function(\"s\",\"var x;try{n=s.d.createEvent(\\\\\"MouseEvents\\\\\")}catch(x){n=new MouseEvent}return n\");n=tcf(s);if(n){tcf=new Function(\"n\",\"e\",\"var"
+" x;try{n.initMouseEvent(\\\\\"click\\\\\",e.bubbles,e.cancelable,e.view,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget)}catch(x){n"
+"=0}return n\");n=tcf(n,e);if(n){n.s_fe=1;e.stopPropagation();if (e.stopImmediatePropagation) {e.stopImmediatePropagation();}e.preventDefault();s.bct=e.target;s.bce=n}}}}}');s.oh=function(o){var s=t"
+"his,l=s.wd.location,h=o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?');k=h.indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o.protocol&&o.protocol.length>1?o.protocol:(l.protocol?l.p"
+"rotocol:'');i=l.pathname.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.host?l.host:''))+(h.substring(0,1)!='/'?l.pathname.substring(0,i<0?0:i)+'/':'')+h}return h};s.ot=function(o){var t=o.tagN"
+"ame;if(o.tagUrn||(o.scopeName&&o.scopeName.toUpperCase()!='HTML'))return '';t=t&&t.toUpperCase?t.toUpperCase():'';if(t=='SHAPE')t='';if(t){if((t=='INPUT'||t=='BUTTON')&&o.type&&o.type.toUpperCase)t"
+"=o.type.toUpperCase();else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=this,t=s.ot(o),p,c,n='',x=0;if(t&&!o.s_oid){p=o.protocol;c=o.onclick;if(o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.toL"
+"owerCase().indexOf('javascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' ','');x=2}else if(t=='INPUT'||t=='SUBMIT'){if(o.value)n=o.value;else if"
+"(o.innerText)n=o.innerText;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t=='IMAGE')n=o.src;if(n){o.s_oid=s.fl(n,100);o.s_oidt=x}}return o.s_oid};s.rqf=function(t,un){var s=this,e=t.inde"
+"xOf('='),u=e>=0?t.substring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&&(','+u+',').indexOf(','+un+',')>=0){if(u!=s.un&&s.un.indexOf(',')>=0)q='&u='+u+q+'&u=0';return q}return ''};s.rq=funct"
+"ion(un){if(!un)un=this.un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&','rqf',un);return s.pt(un,',','rq',0)};s.sqp=function(t,a){var s=this,e=t.indexOf('='),q=e<0?'':s"
+".epa(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return 0};s.sqs=function(un,q){var s=this;s.squ[un]=q;return 0};s.sq=function(q){var s=this,k='s_sq',v=s.c_r(k),x,c=0;s"
+".sqq=new Object;s.squ=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',q);v='';for(x in s.squ)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))s.sqq[s.squ[x]]+=(s.sqq[s.squ[x]"
+"]?',':'')+x;for(x in s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&s.sqq[x]&&(x==q||c<2)){v+=(v?'&':'')+s.sqq[x]+'='+s.ape(x);c++}return s.c_w(k,v,0)};s.wdl=new Function('e','var "
+"s=s_c_il['+s._in+'],r=true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.length;i++){o=s.d.links[i];oc=o.onclick?\"\"+o.onclick:\"\";if((oc.indexOf(\"s_gs(\")<0||oc.indexOf("
+"\".s_oc(\")>=0)&&oc.indexOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=function(){var s=this;if(s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b.attachEvent('onclic"
+"k',s.bc);else if(s.b&&s.b.addEventListener){if(s.n&&((s.n.userAgent.indexOf('WebKit')>=0&&s.d.createEvent)||(s.n.userAgent.indexOf('Firefox/2')>=0&&s.wd.MouseEvent))){s.bbc=1;s.useForcedLinkTrackin"
+"g=1;s.b.addEventListener('click',s.bc,true)}s.b.addEventListener('click',s.bc,false)}else s.eh(s.wd,'onload',0,s.wdl)}};s.vs=function(x){var s=this,v=s.visitorSampling,g=s.visitorSamplingGroup,k='s"
+"_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n){if(!s.c_w(k,x,e))return 0;n=x}if(n%10000>v)return 0}return 1};s.dyasmf=function(t,m)"
+"{if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0&&m){var n=t.substring(0,i),x=t.substring(i+1);if(s.pt(x,',','dyasmf',m))return n}retu"
+"rn 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccountMatch,n,i;s.un=s.un.toLowerCase();if(x&&l){if(!m)m=s.wd.location.host;if(!m.toLowerCase)m=''+m"
+";l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};s.sa=function(un){var s=this;if(s.un&&s.mpc('sa',arguments))return;s"
+".un=un;if(!s.oun)s.oun=un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substring(0,1),r,l,i;if(!s.m_l)s.m_l=new Object;if(!s.m_nl)s.m_nl"
+"=new Array;m=s.m_l[n];if(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c='s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in++;m.s=s;m._n=n;m._l=new Array('_c','_in','_il','_i','_e'"
+",'_d','_dl','s','n','_r','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s.m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r._m=m;l=m._l;for(i=0;i<l.length;i++)if(m[l[i]])r[l[i]]=m["
+"l[i]];r._il[r._in]=r;m=s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_il['+s._in+'],c=s[g+\"_c\"],m,x,f=0;if(s.mpc(\"m_a\",arguments))r"
+"eturn;if(!c)c=s.wd[\"s_\"+g+\"_c\"];if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d(c)));x=s[g];if(!x)x=s.wd[\\'s_\\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if(x&&(!m._i||g!=\"m_\"+n)){m._i=f=1;if((\"\"+x).ind"
+"exOf(\"function\")>=0)x(s);else s.m_m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_'+t;var s=this,i,x,m,f='_'+t,r=0,u;if(s.m_l&&s.m_nl)for(i=0;i<s."
+"m_nl.length;i++){x=s.m_nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m[t]()}}if(u)r=1;u=m[t+1];if(u&&!m[f]){if((''+u).i"
+"ndexOf('function')>=0){if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g=s.m_dl,i,o;if(g)for(i=0;i<g.length;i++){o=g[i];if(o)s.l"
+"oadModule(o.n,o.u,o.d,o.l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){var s=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.indexOf(':');if(i>=0){g=n.substring(i+1);n=n.substring(0,i)}"
+"else g=\"m_\"+n;m=s.m_i(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','https:');i='s_s:'+s._in+':'+n+':'+g;b='var s=s_c_il['+s._i"
+"n+'],o=s.d.getElementById(\"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'')+')}';f2=b+'o.c++;if(!s.maxDelay)s.maxDelay=250"
+";if(!o.l&&o.c<(s.maxDelay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;try{o=s.d.createElement(\"script\");if(o){o.type=\"text/"
+"javascript\";'+(n?'o.id=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,100)':'')+'}}catch(e){o=0}return o');o=tcf(s,c,i,"
+"u,f1,f2)}else{o=new Object;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m=s.m_i(n);m._e=1}return m};s.voa=function(vo,r){v"
+"ar s=this,l=s.va_g,i,k,v,x;for(i=0;i<l.length;i++){k=l[i];v=vo[k];if(v||vo['!'+k]){if(!r&&(k==\"contextData\"||k==\"retrieveLightData\")&&s[k])for(x in s[k])if(!v[x])v[x]=s[k][x];s[k]=v}}};s.vob=fu"
+"nction(vo,onlySet){var s=this,l=s.va_g,i,k;for(i=0;i<l.length;i++){k=l[i];vo[k]=s[k];if(!onlySet&&!vo[k])vo['!'+k]=1}};s.dlt=new Function('var s=s_c_il['+s._in+'],d=new Date,i,vo,f=0;if(s.dll)for(i"
+"=0;i<s.dll.length;i++){vo=s.dll[i];if(vo){if(!s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if(!s.dli)s.dli=setTimeout(s.dlt,s"
+".maxDelay)}else s.dll=0');s.dl=function(vo){var s=this,d=new Date;if(!vo)vo=new Object;s.vob(vo);vo._t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dll.length]=vo;if(!s.maxDelay)s.maxDelay=250;s.d"
+"lt()};s._waitingForMarketingCloudVisitorID = false;s._doneWaitingForMarketingCloudVisitorID = false;s._marketingCloudVisitorIDCallback=function(marketingCloudVisitorID) {var s=this;s.marketingCloud"
+"VisitorID = marketingCloudVisitorID;s._doneWaitingForMarketingCloudVisitorID = true;s._callbackWhenReadyToTrackCheck();};s._waitingForAnalyticsVisitorID = false;s._doneWaitingForAnalyticsVisitorID "
+"= false;s._analyticsVisitorIDCallback=function(analyticsVisitorID) {var s=this;s.analyticsVisitorID = analyticsVisitorID;s._doneWaitingForAnalyticsVisitorID = true;s._callbackWhenReadyToTrackCheck("
+");};s._waitingForAudienceManagerLocationHint = false;s._doneWaitingForAudienceManagerLocationHint = false;s._audienceManagerLocationHintCallback=function(audienceManagerLocationHint) {var s=this;s."
+"audienceManagerLocationHint = audienceManagerLocationHint;s._doneWaitingForAudienceManagerLocationHint = true;s._callbackWhenReadyToTrackCheck();};s._waitingForAudienceManagerBlob = false;s._doneWa"
+"itingForAudienceManagerBlob = false;s._audienceManagerBlobCallback=function(audienceManagerBlob) {var s=this;s.audienceManagerBlob = audienceManagerBlob;s._doneWaitingForAudienceManagerBlob = true;"
+"s._callbackWhenReadyToTrackCheck();};s.isReadyToTrack=function() {var s=this,readyToTrack = true,visitor = s.visitor;if ((visitor) && (visitor.isAllowed())) {if ((!s._waitingForMarketingCloudVisito"
+"rID) && (!s.marketingCloudVisitorID) && (visitor.getMarketingCloudVisitorID)) {s._waitingForMarketingCloudVisitorID = true;s.marketingCloudVisitorID = visitor.getMarketingCloudVisitorID([s,s._marke"
+"tingCloudVisitorIDCallback]);if (s.marketingCloudVisitorID) {s._doneWaitingForMarketingCloudVisitorID = true;}}if ((!s._waitingForAnalyticsVisitorID) && (!s.analyticsVisitorID) && (visitor.getAnaly"
+"ticsVisitorID)) {s._waitingForAnalyticsVisitorID = true;s.analyticsVisitorID = visitor.getAnalyticsVisitorID([s,s._analyticsVisitorIDCallback]);if (s.analyticsVisitorID) {s._doneWaitingForAnalytics"
+"VisitorID = true;}}if ((!s._waitingForAudienceManagerLocationHint) && (!s.audienceManagerLocationHint) && (visitor.getAudienceManagerLocationHint)) {s._waitingForAudienceManagerLocationHint = true;"
+"s.audienceManagerLocationHint = visitor.getAudienceManagerLocationHint([s,s._audienceManagerLocationHintCallback]);if (s.audienceManagerLocationHint) {s._doneWaitingForAudienceManagerLocationHint ="
+" true;}}if ((!s._waitingForAudienceManagerBlob) && (!s.audienceManagerBlob) && (visitor.getAudienceManagerBlob)) {s._waitingForAudienceManagerBlob = true;s.audienceManagerBlob = visitor.getAudience"
+"ManagerBlob([s,s._audienceManagerBlobCallback]);if (s.audienceManagerBlob) {s._doneWaitingForAudienceManagerBlob = true;}}if (((s._waitingForMarketingCloudVisitorID)     && (!s._doneWaitingForMarke"
+"tingCloudVisitorID)     && (!s.marketingCloudVisitorID)) ||((s._waitingForAnalyticsVisitorID)          && (!s._doneWaitingForAnalyticsVisitorID)          && (!s.analyticsVisitorID)) ||((s._waitingF"
+"orAudienceManagerLocationHint) && (!s._doneWaitingForAudienceManagerLocationHint) && (!s.audienceManagerLocationHint)) ||((s._waitingForAudienceManagerBlob)         && (!s._doneWaitingForAudienceMa"
+"nagerBlob)         && (!s.audienceManagerBlob))) {readyToTrack = false;}}return readyToTrack;};s._callbackWhenReadyToTrackQueue = null;s._callbackWhenReadyToTrackInterval = 0;s.callbackWhenReadyToT"
+"rack=function(callbackThis,callback,args) {var s=this,callbackInfo;callbackInfo = {};callbackInfo.callbackThis = callbackThis;callbackInfo.callback     = callback;callbackInfo.args         = args;i"
+"f (s._callbackWhenReadyToTrackQueue == null) {s._callbackWhenReadyToTrackQueue = [];}s._callbackWhenReadyToTrackQueue.push(callbackInfo);if (s._callbackWhenReadyToTrackInterval == 0) {s._callbackWh"
+"enReadyToTrackInterval = setInterval(s._callbackWhenReadyToTrackCheck,100);}};s._callbackWhenReadyToTrackCheck=new Function('var s=s_c_il['+s._in+'],callbackNum,callbackInfo;if (s.isReadyToTrack())"
+" {if (s._callbackWhenReadyToTrackInterval) {clearInterval(s._callbackWhenReadyToTrackInterval);s._callbackWhenReadyToTrackInterval = 0;}if (s._callbackWhenReadyToTrackQueue != null) {while (s._call"
+"backWhenReadyToTrackQueue.length > 0) {callbackInfo = s._callbackWhenReadyToTrackQueue.shift();callbackInfo.callback.apply(callbackInfo.callbackThis,callbackInfo.args);}}}');s._handleNotReadyToTrac"
+"k=function(variableOverrides) {var s=this,args,varKey,variableOverridesCopy = null,setVariables = null;if (!s.isReadyToTrack()) {args = [];if (variableOverrides != null) {variableOverridesCopy = {}"
+";for (varKey in variableOverrides) {variableOverridesCopy[varKey] = variableOverrides[varKey];}}setVariables = {};s.vob(setVariables,true);args.push(variableOverridesCopy);args.push(setVariables);s"
+".callbackWhenReadyToTrack(s,s.track,args);return true;}return false;};s.gfid=function(){var s=this,d='0123456789ABCDEF',k='s_fid',fid=s.c_r(k),h='',l='',i,j,m=8,n=4,e=new Date,y;if(!fid||fid.indexO"
+"f('-')<0){for(i=0;i<16;i++){j=Math.floor(Math.random()*m);h+=d.substring(j,j+1);j=Math.floor(Math.random()*n);l+=d.substring(j,j+1);m=n=16}fid=h+'-'+l;}y=e.getYear();e.setYear(y+2+(y<1900?1900:0));"
+"if(!s.c_w(k,fid,e))fid=0;return fid};s.track=s.t=function(vo,setVariables){var s=this,notReadyToTrack,trk=1,tm=new Date,sed=Math&&Math.random?Math.floor(Math.random()*10000000000000):tm.getTime(),s"
+"ess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y=tm.getYear(),vt=tm.getDate()+'/'+tm.getMonth()+'/'+(y<1900?y+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds()+' '+tm.getDay()+' '"
+"+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta=-1,q='',qs='',code='',vb=new Object;if (s.visitor) {if (s.visitor.getAuthState) {s.authState = s.visitor.getAuthState();}if ((!s.supplementalDataID) && ("
+"s.visitor.getSupplementalDataID)) {s.supplementalDataID = s.visitor.getSupplementalDataID(\"AppMeasurement:\" + s._in,(s.expectSupplementalData ? false : true));}}if(s.mpc('t',arguments))return;s.g"
+"l(s.vl_g);s.uns();s.m_ll();notReadyToTrack = s._handleNotReadyToTrack(vo);if (!notReadyToTrack) {if (setVariables) {s.voa(setVariables);}if(!s.td){var tl=tfs.location,a,o,i,x='',c='',v='',p='',bw='"
+"',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn=0,ps;if(String&&String.prototype){j='1.1';if(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&s.apv>=5)j='1.4';if(pn.to"
+"Precision){j='1.5';a=new Array;if(a.forEach){j='1.6';i=0;o=new Object;tcf=new Function('o','var e,i=0;try{i=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next){j='1.7';if(a.reduce){j='1.8';"
+"if(j.trim){j='1.8.1';if(Date.parse){j='1.8.2';if(Object.create)j='1.8.5'}}}}}}}}}if(s.apv>=4)x=screen.width+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaEnabled()?'Y':'N';if(s.apv"
+">=4){c=screen.pixelDepth;bw=s.wd.innerWidth;bh=s.wd.innerHeight}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){bw=s.d.documentElement.of"
+"fsetWidth;bh=s.d.documentElement.offsetHeight;if(!s.ismac&&s.b){tcf=new Function('s','tl','var e,hp=0;try{s.b.addBehavior(\"#default#homePage\");hp=s.b.isHomePage(tl)?\"Y\":\"N\"}catch(e){}return h"
+"p');hp=tcf(s,tl);tcf=new Function('s','var e,ct=0;try{s.b.addBehavior(\"#default#clientCaps\");ct=s.b.connectionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}if(s.pl)while(pn<s.pl.length&&pn<30)"
+"{ps=s.fl(s.pl[pn].name,100)+';';if(p.indexOf(ps)<0)p+=ps;pn++}s.resolution=x;s.colorDepth=c;s.javascriptVersion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidth=bw;s.browserHeight=bh;s.connectio"
+"nType=ct;s.homepage=hp;s.plugins=p;s.td=1}if(vo){s.vob(vb);s.voa(vo)}if(!s.analyticsVisitorID&&!s.marketingCloudVisitorID)s.fid=s.gfid();if((vo&&vo._t)||!s.m_m('d')){if(s.usePlugins)s.doPlugins(s);"
+"if(!s.abort){var l=s.wd.location,r=tfs.document.referrer;if(!s.pageURL)s.pageURL=l.href?l.href:l;if(!s.referrer&&!s._1_referrer)s.referrer=r;s._1_referrer=1;s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s."
+"eo:s.lnk,p=s.pageName,w=1,t=s.ot(o),n=s.oid(o),x=o.s_oidt,h,l,i,oc;if(s.eo&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(o){t=s.ot(o);n=s.oid(o);x=o.s_oidt}}if"
+"(!n||t=='BODY')o='';if(o){oc=o.onclick?''+o.onclick:'';if((oc.indexOf('s_gs(')>=0&&oc.indexOf('.s_oc(')<0)||oc.indexOf('.tl(')>=0)o=0}}if(o){if(n)ta=o.target;h=s.oh(o);i=h.indexOf('?');h=s.linkLeav"
+"eQueryString||i<0?h:h.substring(0,i);l=s.linkName;t=s.linkType?s.linkType.toLowerCase():s.lt(h);if(t&&(h||l)){s.pe='lnk_'+(t=='d'||t=='e'?t:'o');s.pev1=(h?s.ape(h):'');s.pev2=(l?s.ape(l):'')}else t"
+"rk=0;if(s.trackInlineStats){if(!p){p=s.pageURL;w=0}t=s.ot(o);i=o.sourceIndex;if(o.dataset&&o.dataset.sObjectId){s.wd.s_objectID=o.dataset.sObjectId;}else if(o.getAttribute&&o.getAttribute('data-s-o"
+"bject-id')){s.wd.s_objectID=o.getAttribute('data-s-object-id');}else if(s.useForcedLinkTracking){s.wd.s_objectID='';oc=o.onclick?''+o.onclick:'';if(oc){var ocb=oc.indexOf('s_objectID'),oce,ocq,ocx;"
+"if(ocb>=0){ocb+=10;while(ocb<oc.length&&(\"= \\t\\r\\n\").indexOf(oc.charAt(ocb))>=0)ocb++;if(ocb<oc.length){oce=ocb;ocq=ocx=0;while(oce<oc.length&&(oc.charAt(oce)!=';'||ocq)){if(ocq){if(oc.charAt("
+"oce)==ocq&&!ocx)ocq=0;else if(oc.charAt(oce)==\"\\\\\")ocx=!ocx;else ocx=0;}else{ocq=oc.charAt(oce);if(ocq!='\"'&&ocq!=\"'\")ocq=0}oce++;}oc=oc.substring(ocb,oce);if(oc){o.s_soid=new Function('s','"
+"var e;try{s.wd.s_objectID='+oc+'}catch(e){}');o.s_soid(s)}}}}}if(s.gg('objectID')){n=s.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+("
+"x?'&oidt='+x:'')+'&ot='+s.ape(t)+(i?'&oi='+i:'')}}else trk=0}if(trk||qs){s.sampled=s.vs(sed);if(trk){if(s.sampled)code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq()),0,ta);qs='';s.m_m('"
+"t');if(s.p_r)s.p_r();s.referrer=s.lightProfileID=s.retrieveLightProfiles=s.deleteLightProfiles=''}s.sq(qs)}}}else s.dl(vo);if(vo)s.voa(vb,1);}s.abort=0;s.supplementalDataID=s.pageURLRest=s.lnk=s.eo"
+"=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if(s.pg)s.wd.s_lnk=s.wd.s_eo=s.wd.s_linkName=s.wd.s_linkType='';return code};s.trackLink=s.tl=function(o,t,n,vo,f){var s=th"
+"is;s.lnk=o;s.linkType=t;s.linkName=n;if(f){s.bct=o;s.bcf=f}s.t(vo)};s.trackLight=function(p,ss,i,vo){var s=this;s.lightProfileID=p;s.lightStoreForSeconds=ss;s.lightIncrementBy=i;s.t(vo)};s.setTagCo"
+"ntainer=function(n){var s=this,l=s.wd.s_c_il,i,t,x,y;s.tcn=n;if(l)for(i=0;i<l.length;i++){t=l[i];if(t&&t._c=='s_l'&&t.tagContainerName==n){s.voa(t);if(t.lmq)for(i=0;i<t.lmq.length;i++){x=t.lmq[i];y"
+"='m_'+x.n;if(!s[y]&&!s[y+'_c']){s[y]=t[y];s[y+'_c']=t[y+'_c']}s.loadModule(x.n,x.u,x.d)}if(t.ml)for(x in t.ml)if(s[x]){y=s[x];x=t.ml[x];for(i in x)if(!Object.prototype[i]){if(typeof(x[i])!='functio"
+"n'||(''+x[i]).indexOf('s_c_il')<0)y[i]=x[i]}}if(t.mmq)for(i=0;i<t.mmq.length;i++){x=t.mmq[i];if(s[x.m]){y=s[x.m];if(y[x.f]&&typeof(y[x.f])=='function'){if(x.a)y[x.f].apply(y,x.a);else y[x.f].apply("
+"y)}}}if(t.tq)for(i=0;i<t.tq.length;i++)s.t(t.tq[i]);t.s=s;return}}};s.wd=window;s.ssl=(s.wd.location.protocol.toLowerCase().indexOf('https')>=0);s.d=document;s.b=s.d.body;if(s.d.getElementsByTagNam"
+"e){s.h=s.d.getElementsByTagName('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns6=s.u.indexOf('Netscape6/');var apn=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),o=s.u.indexOf('O"
+"pera '),i;if(v.indexOf('Opera')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer');s.isns=(apn=='Netscape');s.isopera=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseF"
+"loat(s.u.substring(o+6));else if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=parseFloat(i)}else if(s.ns6>0)s.apv=parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;i"
+"f(s.em.toPrecision)s.em=3;else if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpperCase();s.em=(i=='%C4%80'?2:(i=='%U0100'?1:0))}if(s.oun)s.sa(s.oun);s.sa(un);s.vl_l='supplementalData"
+"ID,timestamp,dynamicVariablePrefix,visitorID,marketingCloudVisitorID,analyticsVisitorID,audienceManagerLocationHint,fid,vmk,visitorMigrationKey,visitorMigrationServer,visitorMigrationServerSecure,p"
+"pu,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,pageName,pageURL,referrer,contextData,currencyCode,lightProfileID,lightStoreForSeconds,lightIncrementBy,retrieveLightProfiles,deleteLi"
+"ghtProfiles,retrieveLightData';s.va_l=s.sp(s.vl_l,',');s.vl_mr=s.vl_m='timestamp,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,contextData,lightProfileID,lightStoreForSeconds,lightInc"
+"rementBy';s.vl_t=s.vl_l+',variableProvider,channel,server,pageType,transactionID,purchaseID,campaign,state,zip,events,events2,products,audienceManagerBlob,authState,linkName,linkType';var n;for(n=1"
+";n<=75;n++){s.vl_t+=',prop'+n+',eVar'+n;s.vl_m+=',prop'+n+',eVar'+n}for(n=1;n<=5;n++)s.vl_t+=',hier'+n;for(n=1;n<=3;n++)s.vl_t+=',list'+n;s.va_m=s.sp(s.vl_m,',');s.vl_l2=',tnt,pe,pev1,pev2,pev3,res"
+"olution,colorDepth,javascriptVersion,javaEnabled,cookiesEnabled,browserWidth,browserHeight,connectionType,homepage,pageURLRest,plugins';s.vl_t+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',track"
+"ingServer,trackingServerSecure,trackingServerBase,fpCookieDomainPeriods,disableBufferedRequests,mobile,visitorSampling,visitorSamplingGroup,dynamicAccountSelection,dynamicAccountList,dynamicAccount"
+"Match,trackDownloadLinks,trackExternalLinks,trackInlineStats,linkLeaveQueryString,linkDownloadFileTypes,linkExternalFilters,linkInternalFilters,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,lightT"
+"rackVars,_1_referrer,un';s.va_g=s.sp(s.vl_g,',');s.pg=pg;s.gl(s.vl_g);s.contextData=new Object;s.retrieveLightData=new Object;if(!ss)s.wds();if(pg){s.wd.s_co=function(o){return o};s.wd.s_gs=functio"
+"n(un){s_gi(un,1,1).t()};s.wd.s_dc=function(un){s_gi(un,1).t()}}",
w=window,l=w.s_c_il,n=navigator,u=n.userAgent,v=n.appVersion,e=v.indexOf('MSIE '),m=u.indexOf('Netscape6/'),a,i,j,x,s;if(un){un=un.toLowerCase();if(l)for(j=0;j<2;j++)for(i=0;i<l.length;i++){s=l[i];x=s._c;if((!x||x=='s_c'||(j>0&&x=='s_l'))&&(s.oun==un||(s.fs&&s.sa&&s.fs(s.oun,un)))){if(s.sa)s.sa(un);if(x=='s_c')return s}else s=0}}w.s_an='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
w.s_sp=new Function("x","d","var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.subst"
+"ring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");
w.s_jn=new Function("a","d","var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");
w.s_rep=new Function("x","o","n","return s_jn(s_sp(x,o),n)");
w.s_d=new Function("x","var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d"
+"=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn("
+"x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x");
w.s_fe=new Function("c","return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");
w.s_fa=new Function("f","var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':"
+"a");
w.s_ft=new Function("c","c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){i"
+"f(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")"
+"'+c.substring(e+1);s=c.indexOf('=function(')}return c;");
c=s_d(c);if(e>0){a=parseInt(i=v.substring(e+5));if(a>3)a=parseFloat(i)}else if(m>0)a=parseFloat(u.substring(m+10));else a=parseFloat(v);if(a<5||v.indexOf('Opera')>=0||u.indexOf('Opera')>=0)c=s_ft(c);if(!s){s=new Object;if(!w.s_c_in){w.s_c_il=new Array;w.s_c_in=0}s._il=w.s_c_il;s._in=w.s_c_in;s._il[s._in]=s;w.s_c_in++;}s._c='s_c';(new Function("s","un","pg","ss",c))(s,un,pg,ss);return s}
function s_giqf(){var w=window,q=w.s_giq,i,t,s;if(q)for(i=0;i<q.length;i++){t=q[i];s=s_gi(t.oun);s.sa(t.un);s.setTagContainer(t.tagContainerName)}w.s_giq=0}s_giqf()


;

var curUserIsIE6 = false;
if (/\bMSIE 6/.test(navigator.userAgent)){
  curUserIsIE6 = true;
}


if(!curUserIsIE6){
    // 'Referer' http header is always sent to omniture by the browser
    // Which may carry customer data through queryString which is a security violation.
    // To remove the 'Referer' header, we need to send omniture image/beacon request from a blank iframe.
    // see http://webstersprodigy.net/2013/02/01/stripping-the-referer-in-a-cross-domain-post-request/
    // This code must be defined before OmniConfig.trackPage() to ensure it's available for s.t() and s.tl() calls
    var omnitureBeaconIFrame = document.createElement('iframe');
    omnitureBeaconIFrame.id = "omniture_beacon_iframe";
    omnitureBeaconIFrame.src = 'about:blank';
    omnitureBeaconIFrame.style.display = 'none';
    document.body.appendChild(omnitureBeaconIFrame);

    function createImageInIframe() {
        var doc = omnitureBeaconIFrame.contentDocument || omnitureBeaconIFrame.contentWindow.document;
        return doc.createElement('img');
    }

    // Override Omniture make/return request method
    // So that we'll cache an image created from an iframe in window.s_i_visitorNamespace[_number] variable.
    // In this implementation the image names would look something like "s_i_salesforce", "s_i_salesforce_1","s_i_salesforce_2",...
    // Omniture first looks for an image cache on window object before creating a new dynamic image.
    var oldMR = s.mr;
    s.mr = function(sess,q,rs,ta,u) {
        var ns=s.visitorNamespace,
            un=s.cls(u?u:(ns?ns:s.fun)),
            imn='s_i_'+(un);

        if(s.rc && s.rc[un]) {
            imn+='_'+s.rc[un];
        }
        window[imn] = createImageInIframe();

        return oldMR.call(this,sess,q,rs,ta,u);
    };

}


/* execute */
var _curLocationQuery = window.location.search.toLowerCase();
if (Page.isTrackedOnLoad() && !(_curLocationQuery.indexOf("un%3d") > -1 || _curLocationQuery.indexOf("pw%3d") > -1 || _curLocationQuery.indexOf("un=") > -1 || _curLocationQuery.indexOf("pw=") > -1)){
  // s.t();
}
;

/* -------------------------------------------------------------------------------- 
   End /system/shared/common/assets/thirdparty/omniture/s_code.js
   --------------------------------------------------------------------------------
*/