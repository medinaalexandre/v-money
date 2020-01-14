(function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.VMoney=n():e.VMoney=n()})(this,function(){return function(e){function n(o){if(t[o])return t[o].exports;var u=t[o]={i:o,l:!1,exports:{}};return e[o].call(u.exports,u,u.exports,n),u.l=!0,u.exports}var t={};return n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p=".",n(n.s=9)}([function(e,n,t){"use strict";n.a={prefix:"",suffix:"",thousands:",",decimal:".",precision:2,allowBlank:!1}},function(e,n,t){"use strict";var o=t(2),u=t(5),r=t(0);n.a=function(e,n){if(n.value){var i=t.i(u.a)(r.a,n.value);if("INPUT"!==e.tagName.toLocaleUpperCase()){var a=e.getElementsByTagName("input");1!==a.length||(e=a[0])}e.onkeydown=function(n){var u=8==n.which||46==n.which,r=e.value.length-e.selectionEnd==0;i.allowBlank&&u&&r&&0===t.i(o.a)(e.value,0)&&(e.value="",e.dispatchEvent(t.i(o.b)("change")))},e.oninput=function(){var n=e.value.length-e.selectionEnd;console.log("oninput",e.value),e.value=t.i(o.c)(e.value,i),n=Math.max(n,i.suffix.length),n=e.value.length-n,n=Math.max(n,i.prefix.length+1),t.i(o.d)(e,n),e.dispatchEvent(t.i(o.b)("change"))},e.onfocus=function(){t.i(o.d)(e,e.value.length-i.suffix.length)},e.oninput()}}},function(e,n,t){"use strict";function o(e,n,t){return Math.max(e,Math.min(n,t))}function u(e){return e?e.toString():""}function r(e){return!(arguments.length>1&&void 0!==arguments[1]?arguments[1]:v.a).allowBlank||""!==e&&null!==e?u(e).replace(/\D+/g,"")||null:e}function i(e){return o(0,e,20)}function a(e,n){var t=Math.pow(10,n);return(parseFloat(e)/t).toFixed(i(n))}function c(e,n){return e.replace(/(\d)(?=(?:\d{3})+\b)/gm,"$1"+n)}function l(e,n,t){return n?e+t+n:e}function f(e,n){var t=function(){e.setSelectionRange(n,n)};e===document.activeElement&&(t(),setTimeout(t,1))}function s(e){var n=document.createEvent("Event");return n.initEvent(e,!0,!0),n}function d(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v.a;if(n.allowBlank&&(""===e||null===e))return e;var t=r(e),o=a(t,n.precision),i=u(o).split("."),f=i[0],s=i[1];return f=c(f,n.thousands),n.prefix+l(f,s,n.decimal)+n.suffix}function p(e,n){if(""===e||null===e)return null;var t=r(e),o=a(t,n);return parseFloat(o)}t.d(n,"c",function(){return d}),t.d(n,"a",function(){return p}),t.d(n,"d",function(){return f}),t.d(n,"b",function(){return s}),t.d(n,"e",function(){return r});var v=t(0)},function(e,n,t){"use strict";function o(e,n){n&&Object.keys(n).map(function(e){a.a[e]=n[e]}),e.directive("money",i.a),e.component("money",r.a)}Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"VERSION",function(){return c});var u=t(6),r=t.n(u),i=t(1),a=t(0);t.d(n,"Money",function(){return r.a}),t.d(n,"VMoney",function(){return i.a}),t.d(n,"options",function(){return a.a});var c="0.8.3";n.default=o,"undefined"!=typeof window&&window.Vue&&window.Vue.use(o)},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(1),u=t(0),r=t(2);n.default={name:"Money",props:{value:{required:!1,default:null},precision:{type:Number,default:function(){return u.a.precision}},decimal:{type:String,default:function(){return u.a.decimal}},thousands:{type:String,default:function(){return u.a.thousands}},prefix:{type:String,default:function(){return u.a.prefix}},suffix:{type:String,default:function(){return u.a.suffix}},allowBlank:{type:Boolean,default:function(){return u.a.allowBlank}}},directives:{money:o.a},data:function(){return{formattedValue:this.$props.value}},watch:{formattedValue:function(e,n){console.log("new v-money value",this.formattedValue,e),n!==e&&this.$emit("input",t.i(r.e)(e))}}}},function(e,n,t){"use strict";n.a=function(e,n){return e=e||{},n=n||{},Object.keys(e).concat(Object.keys(n)).reduce(function(t,o){return t[o]=void 0===n[o]?e[o]:n[o],t},{})}},function(e,n,t){var o=t(7)(t(4),t(8),null,null);e.exports=o.exports},function(e,n){e.exports=function(e,n,t,o){var u,r=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(u=e,r=e.default);var a="function"==typeof r?r.options:r;if(n&&(a.render=n.render,a.staticRenderFns=n.staticRenderFns),t&&(a._scopeId=t),o){var c=a.computed||(a.computed={});Object.keys(o).forEach(function(e){var n=o[e];c[e]=function(){return n}})}return{esModule:u,exports:r,options:a}}},function(e,n){e.exports={render:function(){var e=this,n=e.$createElement;return(e._self._c||n)("input",{directives:[{name:"model",rawName:"v-model",value:e.formattedValue,expression:"formattedValue"},{name:"money",rawName:"v-money",value:{precision:e.precision,decimal:e.decimal,thousands:e.thousands,prefix:e.prefix,suffix:e.suffix,allowBlank:e.allowBlank},expression:"{precision, decimal, thousands, prefix, suffix, allowBlank}"}],staticClass:"v-money",attrs:{type:"tel"},domProps:{value:e.formattedValue},on:{input:function(n){n.target.composing||(e.formattedValue=n.target.value)}}})},staticRenderFns:[]}},function(e,n,t){e.exports=t(3)}])});