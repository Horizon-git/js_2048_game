parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var r,e,t=document.querySelector("tbody"),n=document.querySelector(".button"),o=document.querySelector(".message-start"),a=document.querySelector(".message-lose"),s=document.querySelector(".message-win"),c=document.querySelector(".game-score"),i=4,f=4;function l(){for(var e=0;e<i;e++)for(var t=0;t<f;t++)if(2048===r[e][t])return!0;return!1}function u(r){return JSON.parse(JSON.stringify(r))}function d(e){for(var t=0;t<i;t++)for(var n=0;n<f;n++)if(e[t][n]!==r[t][n])return!0;return!1}function v(r){for(var e=u(r),t=0;t<i;t++){var n=[e[0][t],e[1][t],e[2][t],e[3][t]];n=L(n.reverse()).reverse();for(var o=0;o<n.length;o++)e[o][t]=n[o]}return e}function h(r){for(var e=u(r),t=0;t<i;t++){var n=[e[0][t],e[1][t],e[2][t],e[3][t]];n=L(n);for(var o=0;o<n.length;o++)e[o][t]=n[o]}return e}function m(r){for(var e=u(r),t=0;t<i;t++){var n=e[t];n=L(n);for(var o=0;o<n.length;o++)e[t][o]=n[o]}return e}function g(r){for(var e=u(r),t=0;t<i;t++){var n=e[t];n=L(n.reverse()).reverse();for(var o=0;o<n.length;o++)e[t][o]=n[o]}return e}function L(r){for(var t=w(r),n=t.length;n>0;n--)t[n]===t[n-1]&&(t[n]+=t[n],e+=t[n],t[n-1]=0);return w(t)}function w(r){for(var e=r.filter(function(r){return 0!==r}),t=e.length;t<r.length;t++)e.unshift(0);return e}function y(){for(;;){var e=Math.floor(Math.random()*i),t=Math.floor(Math.random()*f);if(0===r[e][t]){r[e][t]=Math.random()>=.9?4:2;break}}S()}function S(){for(var e=0;e<i;e++)for(var n=0;n<f;n++)t.rows[e].cells[n].className="",t.rows[e].cells[n].classList.add("field-cell"),t.rows[e].cells[n].classList.add("field-cell--".concat(r[e][n])),t.rows[e].cells[n].textContent=r[e][n]||""}n.addEventListener("click",function(){n.classList.contains("start")?(n.classList.remove("start"),n.classList.add("restart"),n.textContent="Restart",o.classList.add("hidden")):(a.classList.add("hidden"),s.classList.add("hidden")),r=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],e=0,c.textContent=e,y(),y()}),document.addEventListener("keydown",function(t){var n=u(r);if(!(d(v(n))||d(h(n))||d(m(n))||d(g(n))))return a.classList.remove("hidden"),!1;switch(t.key){case"ArrowUp":r=u(v(r));break;case"ArrowDown":r=u(h(r));break;case"ArrowRight":r=u(m(r));break;case"ArrowLeft":r=u(g(r))}d(n)&&(y(),c.textContent="".concat(e)),l()&&s.classList.remove("hidden")});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.4b3191e7.js.map