!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"));else if("function"==typeof define&&define.amd)define(["react"],t);else{var n="object"==typeof exports?t(require("react")):t(e.react);for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(self,(e=>(()=>{"use strict";var t={933:(e,t,n)=>{n.r(t)},630:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});var u=i(n(155));function a(e){var t=e.content,n=void 0===t?[]:t,r=e.writeSpeed,o=void 0===r?1e3:r,i=e.deleteSpeed,a=void 0===i?200:i,l=e.waitTime,f=void 0===l?4e3:l,c=e.delay,d=void 0===c?200:c,s=e.delayToStart,p=void 0===s?0:s,v=(0,u.useState)(""),b=v[0],m=v[1],y=(0,u.useState)(!1),g=y[0],_=y[1],h=(0,u.useState)(0),S=h[0],j=h[1],O=(0,u.useState)(p),x=O[0],T=O[1],w=(0,u.useState)(null),M=w[0],P=w[1],E=(0,u.useCallback)((function(){M&&clearInterval(M)}),[M]),I=(0,u.useCallback)((function(){j((function(e){return e>=n.length-1?0:e+1}))}),[n.length]);function k(){var e=b.length;if(1!==n.length||b!==n[0])var t=setInterval((function(){0===e?(clearInterval(t),setTimeout((function(){_(!0)}),d)):(m((function(t){return t.substring(0,e-1)})),e--)}),a)}return(0,u.useEffect)((function(){0===x&&(g?function(){if(0!==n.length){var e=0,t=n[S];if(!t)return E(),I(),void _(!1);var r=setInterval((function(){e>=t.length?(clearInterval(r),n.length>1&&setTimeout((function(){I(),_(!1)}),f)):(m((function(n){return n+t[e-1]})),e++)}),o);P(r)}}():k())}),[g]),(0,u.useEffect)((function(){E(),n.length>0&&(j(0),setTimeout((function(){T(0),g?_(!1):k()}),x))}),[n]),u.default.createElement(u.default.Fragment,null,b.split("\n").map((function(e,t){return u.default.createElement("span",{key:e},e,t===b.split("\n").length-1?null:u.default.createElement("br",null)," ")})),u.default.createElement("span",{className:"blinking-cursor"},"|"))}n(933),t.default=function(e){var t=e.content,n=void 0===t?[]:t,r=e.writeSpeed,o=void 0===r?1e3:r,i=e.deleteSpeed,l=void 0===i?200:i,f=e.waitTime,c=void 0===f?4e3:f,d=e.delay,s=void 0===d?0:d,p=(0,u.useMemo)((function(){return u.default.createElement(a,{content:n,writeSpeed:o,deleteSpeed:l,waitTime:c,delay:s})}),[n,o,l,c,s]);return u.default.createElement(u.default.Fragment,null,p)}},900:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TypeWriter=void 0;var o=n(630);Object.defineProperty(t,"TypeWriter",{enumerable:!0,get:function(){return r(o).default}})},155:t=>{t.exports=e}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,r),i.exports}return r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(900)})()));