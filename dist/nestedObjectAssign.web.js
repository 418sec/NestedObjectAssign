!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("nestedObjectAssign",[],t):"object"==typeof exports?exports.nestedObjectAssign=t():e.nestedObjectAssign=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e){for(var t=arguments.length,r=Array(t>1?t-1:0),c=1;c<t;c++)r[c-1]=arguments[c];if(!r.length)return e;var u=r.shift();if((0,i.isObject)(e)&&(0,i.isObject)(u))for(var f in u)(0,i.isObject)(u[f])?(e[f]||Object.assign(e,n({},f,{})),o(e[f],u[f])):(0,s.isArray)(u[f])?(e[f]||Object.assign(e,n({},f,[])),e[f]=e[f].concat(u[f])):Object.assign(e,n({},f,u[f]));return o.apply(void 0,[e].concat(r))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var i=r(1),s=r(2);e.exports=t.default},function(e,t){"use strict";function r(e){return e&&"object"===("undefined"==typeof e?"undefined":n(e))&&!Array.isArray(e)}Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.isObject=r},function(e,t){"use strict";function r(e){return e&&Array.isArray(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.isArray=r}])});