"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-type-animation";
exports.ids = ["vendor-chunks/react-type-animation"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-type-animation/dist/esm/index.es.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-type-animation/dist/esm/index.es.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TypeAnimation: () => (/* binding */ m)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction i(e,t,r,n){return new(r||(r=Promise))((function(o,a){function i(e){try{c(n.next(e))}catch(e){a(e)}}function u(e){try{c(n.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,u)}c((n=n.apply(e,t||[])).next())}))}function u(e,t){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},\"function\"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(r)throw new TypeError(\"Generator is already executing.\");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}}function c(e){var t=\"function\"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&\"number\"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?\"Object is not iterable.\":\"Symbol.iterator is not defined.\")}function l(e,t){var r=\"function\"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,a=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)i.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return i}function s(e,t,r){if(r||2===arguments.length)for(var n,o=0,a=t.length;o<a;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}function f(e,t,r,n,o){for(var a=[],f=5;f<arguments.length;f++)a[f-5]=arguments[f];return i(this,void 0,void 0,(function(){var i,f,h,y,v,b;return u(this,(function(u){switch(u.label){case 0:u.trys.push([0,12,13,14]),i=c(a),f=i.next(),u.label=1;case 1:if(f.done)return[3,11];switch(h=f.value,typeof h){case\"string\":return[3,2];case\"number\":return[3,4];case\"function\":return[3,6]}return[3,8];case 2:return[4,d(e,t,h,r,n,o)];case 3:return u.sent(),[3,10];case 4:return[4,p(h)];case 5:return u.sent(),[3,10];case 6:return[4,h.apply(void 0,s([e,t,r,n,o],l(a),!1))];case 7:return u.sent(),[3,10];case 8:return[4,h];case 9:u.sent(),u.label=10;case 10:return f=i.next(),[3,1];case 11:return[3,14];case 12:return y=u.sent(),v={error:y},[3,14];case 13:try{f&&!f.done&&(b=i.return)&&b.call(i)}finally{if(v)throw v.error}return[7];case 14:return[2]}}))}))}function d(e,t,r,n,o,a){return i(this,void 0,void 0,(function(){var i,c;return u(this,(function(u){switch(u.label){case 0:return i=e.textContent||\"\",c=function(e,t){var r=l(t).slice(0);return s(s([],l(e),!1),[NaN],!1).findIndex((function(e,t){return r[t]!==e}))}(i,r),[4,h(e,s(s([],l(v(i,t,c)),!1),l(y(r,t,c)),!1),n,o,a)];case 1:return u.sent(),[2]}}))}))}function p(e){return i(this,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,new Promise((function(t){return setTimeout(t,e)}))];case 1:return t.sent(),[2]}}))}))}function h(e,t,r,n,o){return i(this,void 0,void 0,(function(){var a,i,s,f,d,h,y,v,b,m,w,g,x;return u(this,(function(S){switch(S.label){case 0:if(a=t,o){for(i=0,s=1;s<t.length;s++)if(f=l([t[s-1],t[s]],2),d=f[0],(h=f[1]).length>d.length||\"\"===h){i=s;break}a=t.slice(i,t.length)}S.label=1;case 1:S.trys.push([1,6,7,8]),y=c(function(e){var t,r,n,o,a,i,l;return u(this,(function(s){switch(s.label){case 0:t=function(e){return u(this,(function(t){switch(t.label){case 0:return[4,{op:function(t){return requestAnimationFrame((function(){return t.textContent=e}))},opCode:function(t){var r=t.textContent||\"\";return\"\"===e||r.length>e.length?\"DELETE\":\"WRITING\"}}];case 1:return t.sent(),[2]}}))},s.label=1;case 1:s.trys.push([1,6,7,8]),r=c(e),n=r.next(),s.label=2;case 2:return n.done?[3,5]:(o=n.value,[5,t(o)]);case 3:s.sent(),s.label=4;case 4:return n=r.next(),[3,2];case 5:return[3,8];case 6:return a=s.sent(),i={error:a},[3,8];case 7:try{n&&!n.done&&(l=r.return)&&l.call(r)}finally{if(i)throw i.error}return[7];case 8:return[2]}}))}(a)),v=y.next(),S.label=2;case 2:return v.done?[3,5]:(b=v.value,m=\"WRITING\"===b.opCode(e)?r+r*(Math.random()-.5):n+n*(Math.random()-.5),b.op(e),[4,p(m)]);case 3:S.sent(),S.label=4;case 4:return v=y.next(),[3,2];case 5:return[3,8];case 6:return w=S.sent(),g={error:w},[3,8];case 7:try{v&&!v.done&&(x=y.return)&&x.call(y)}finally{if(g)throw g.error}return[7];case 8:return[2]}}))}))}function y(e,t,r){var n,o;return void 0===r&&(r=0),u(this,(function(a){switch(a.label){case 0:n=t(e),o=n.length,a.label=1;case 1:return r<o?[4,n.slice(0,++r).join(\"\")]:[3,3];case 2:return a.sent(),[3,1];case 3:return[2]}}))}function v(e,t,r){var n,o;return void 0===r&&(r=0),u(this,(function(a){switch(a.label){case 0:n=t(e),o=n.length,a.label=1;case 1:return o>r?[4,n.slice(0,--o).join(\"\")]:[3,3];case 2:return a.sent(),[3,1];case 3:return[2]}}))}var b=\"index-module_type__E-SaG\";!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&\"undefined\"!=typeof document){var n=document.head||document.getElementsByTagName(\"head\")[0],o=document.createElement(\"style\");o.type=\"text/css\",\"top\"===r&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(\".index-module_type__E-SaG::after {\\n  content: '|';\\n  animation: index-module_cursor__PQg0P 1.1s infinite step-start;\\n}\\n\\n@keyframes index-module_cursor__PQg0P {\\n  50% {\\n    opacity: 0;\\n  }\\n}\\n\");var m=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function(o,a){var i=o.sequence,u=o.repeat,c=o.className,d=o.speed,p=void 0===d?40:d,h=o.deletionSpeed,y=o.omitDeletionAnimation,v=void 0!==y&&y,m=o.preRenderFirstString,w=void 0!==m&&m,g=o.wrapper,x=void 0===g?\"span\":g,S=o.splitter,E=void 0===S?function(e){return s([],l(e),!1)}:S,_=o.cursor,k=void 0===_||_,O=o.style,T=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&\"function\"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(o,[\"sequence\",\"repeat\",\"className\",\"speed\",\"deletionSpeed\",\"omitDeletionAnimation\",\"preRenderFirstString\",\"wrapper\",\"splitter\",\"cursor\",\"style\"]),A=T[\"aria-label\"],C=T[\"aria-hidden\"],N=T.role;h||(h=p);var P=new Array(2).fill(40);[p,h].forEach((function(e,t){switch(typeof e){case\"number\":P[t]=Math.abs(e-100);break;case\"object\":var r=e.type,n=e.value;if(\"number\"!=typeof n)break;if(\"keyStrokeDelayInMs\"===r)P[t]=n}}));var j,I,G,D,M,R,q=P[0],F=P[1],B=function(e,r){void 0===r&&(r=null);var o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(r);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){e&&(\"function\"==typeof e?e(o.current):e.current=o.current)}),[e]),o}(a),Q=b;j=c?\"\".concat(k?Q+\" \":\"\").concat(c):k?Q:\"\",I=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)((function(){var e,t=i;u===1/0?e=f:\"number\"==typeof u&&(t=Array(1+u).fill(i).flat());var r=e?s(s([],l(t),!1),[e],!1):s([],l(t),!1);return f.apply(void 0,s([B.current,E,q,F,v],l(r),!1)),function(){B.current}})),G=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),D=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),M=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),R=l((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),2)[1],D.current&&(M.current=!0),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){return D.current||(G.current=I.current(),D.current=!0),R((function(e){return e+1})),function(){M.current&&G.current&&G.current()}}),[]);var W=x,L=w?i.find((function(e){return\"string\"==typeof e}))||\"\":null;return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(W,{\"aria-hidden\":C,\"aria-label\":A,role:N,style:O,className:j,children:A?react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\",{\"aria-hidden\":\"true\",ref:B,children:L}):L,ref:A?void 0:B})})),(function(e,t){return!0}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtdHlwZS1hbmltYXRpb24vZGlzdC9lc20vaW5kZXguZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlGLG9CQUFvQiwwQ0FBMEMsY0FBYyxJQUFJLGFBQWEsU0FBUyxNQUFNLGNBQWMsSUFBSSxjQUFjLFNBQVMsTUFBTSxjQUFjLE1BQU0saUVBQWlFLEtBQUssY0FBYywrQkFBK0IsR0FBRyxnQkFBZ0IsZUFBZSx3QkFBd0IscUJBQXFCLFlBQVksaUJBQWlCLFVBQVUsaUNBQWlDLDJEQUEyRCxZQUFZLElBQUksY0FBYyxtQkFBbUIsbUJBQW1CLDREQUE0RCxLQUFLLEVBQUUsS0FBSyxrSEFBa0gseUNBQXlDLGtCQUFrQixNQUFNLHlCQUF5QixvQkFBb0IsOEJBQThCLFNBQVMsa0NBQWtDLFNBQVMsMEVBQTBFLElBQUksU0FBUyx5Q0FBeUMsYUFBYSxNQUFNLDJCQUEyQixpQkFBaUIsTUFBTSxvQkFBb0IsMkJBQTJCLE1BQU0sK0JBQStCLFNBQVMsY0FBYyxTQUFTLFlBQVksUUFBUSxNQUFNLHFCQUFxQixPQUFPLGdDQUFnQyxVQUFVLGNBQWMsK0RBQStELHNCQUFzQix1Q0FBdUMsZ0JBQWdCLG1DQUFtQywyQkFBMkIsbUZBQW1GLGdCQUFnQixvREFBb0QsZUFBZSx5QkFBeUIsSUFBSSxLQUFLLHlDQUF5QyxpQkFBaUIsU0FBUyxHQUFHLFNBQVMsUUFBUSxJQUFJLG9DQUFvQyxRQUFRLG9CQUFvQixTQUFTLGtCQUFrQixvREFBb0QsSUFBSSxxRUFBcUUsa0RBQWtELHNCQUFzQixpQkFBaUIsbUJBQW1CLHdCQUF3Qix3Q0FBd0MsZ0JBQWdCLDJCQUEyQixnQkFBZ0IsNkRBQTZELDhCQUE4QiwyQkFBMkIseUJBQXlCLHlCQUF5QiwyQkFBMkIsWUFBWSxnQ0FBZ0MsOEJBQThCLHNCQUFzQiw4QkFBOEIsd0RBQXdELDhCQUE4QixtQkFBbUIsMkJBQTJCLGdDQUFnQyxxQkFBcUIsNkJBQTZCLFFBQVEsUUFBUSxZQUFZLG9DQUFvQyxRQUFRLG1CQUFtQixVQUFVLG1CQUFtQixHQUFHLEdBQUcsd0JBQXdCLHdDQUF3QyxRQUFRLDJCQUEyQixnQkFBZ0Isa0RBQWtELG9CQUFvQiwwREFBMEQsZ0JBQWdCLEdBQUcsNERBQTRELDRCQUE0QixHQUFHLEdBQUcsY0FBYyx3Q0FBd0MsMkJBQTJCLGdCQUFnQix5Q0FBeUMsdUJBQXVCLElBQUksNEJBQTRCLEdBQUcsR0FBRyxzQkFBc0Isd0NBQXdDLDhCQUE4QiwyQkFBMkIsZ0JBQWdCLGlCQUFpQixZQUFZLFdBQVcscUVBQXFFLElBQUksTUFBTSxzQkFBc0IsVUFBVSw4Q0FBOEMsa0JBQWtCLDJCQUEyQixnQkFBZ0IscUJBQXFCLDJCQUEyQixnQkFBZ0IsaUJBQWlCLGVBQWUseUNBQXlDLHVCQUF1QixHQUFHLG9CQUFvQix3QkFBd0Isb0RBQW9ELEVBQUUsNEJBQTRCLEdBQUcsV0FBVywwREFBMEQsZ0RBQWdELDBCQUEwQiwrQkFBK0IsbUJBQW1CLDRCQUE0QixRQUFRLE9BQU8sV0FBVyxvQ0FBb0MsUUFBUSxtQkFBbUIsVUFBVSxrQkFBa0IsR0FBRywwQkFBMEIsZ0lBQWdJLDBCQUEwQiwrQkFBK0IsbUJBQW1CLDRCQUE0QixRQUFRLE9BQU8sV0FBVyxvQ0FBb0MsUUFBUSxtQkFBbUIsVUFBVSxrQkFBa0IsR0FBRyxHQUFHLGtCQUFrQixRQUFRLDZDQUE2QyxnQkFBZ0IsbUNBQW1DLG9EQUFvRCw2QkFBNkIsa0JBQWtCLEdBQUcsa0JBQWtCLFFBQVEsNkNBQTZDLGdCQUFnQixtQ0FBbUMsb0RBQW9ELDZCQUE2QixrQkFBa0IsR0FBRyxpQ0FBaUMsZUFBZSxpQkFBaUIsRUFBRSxpQkFBaUIsb0NBQW9DLGdHQUFnRyx5S0FBeUssb0NBQW9DLGlCQUFpQixtRUFBbUUsR0FBRywyQ0FBMkMsU0FBUyxpQkFBaUIsS0FBSyxHQUFHLEtBQUssTUFBTSwyQ0FBQyxDQUFDLGlEQUFDLGdCQUFnQixtUEFBbVAscUJBQXFCLHdEQUF3RCxTQUFTLHNGQUFzRiw2REFBNkQsUUFBUSxzQ0FBc0MsV0FBVyw2RkFBNkYsU0FBUyxpTUFBaU0sU0FBUyw0QkFBNEIsNkJBQTZCLGlCQUFpQixrQ0FBa0MsTUFBTSxvQ0FBb0MsNEJBQTRCLG9DQUFvQyxHQUFHLDhDQUE4QyxxQkFBcUIsTUFBTSw2Q0FBQyxJQUFJLE9BQU8sZ0RBQUMsYUFBYSwyREFBMkQsU0FBUyxRQUFRLDZDQUE2Qyw2Q0FBQyxhQUFhLFVBQVUsOERBQThELDhDQUE4QyxpRUFBaUUsV0FBVyxLQUFLLDZDQUFDLEtBQUssNkNBQUMsT0FBTyw2Q0FBQyxTQUFTLCtDQUFDLG9DQUFvQyxnREFBQyxhQUFhLHNFQUFzRSxXQUFXLGNBQWMsbUNBQW1DLE1BQU0sZ0NBQWdDLHlCQUF5QixZQUFZLE9BQU8sMERBQWUsSUFBSSxxRUFBcUUsMERBQWUsU0FBUyxzQ0FBc0MsbUJBQW1CLEVBQUUsa0JBQWtCLFNBQVMsR0FBOEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvcmVhY3QtdHlwZS1hbmltYXRpb24vZGlzdC9lc20vaW5kZXguZXMuanM/Y2YyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZSx7dXNlUmVmIGFzIHQsdXNlU3RhdGUgYXMgcix1c2VFZmZlY3QgYXMgbixmb3J3YXJkUmVmIGFzIG8sbWVtbyBhcyBhfWZyb21cInJlYWN0XCI7ZnVuY3Rpb24gaShlLHQscixuKXtyZXR1cm4gbmV3KHJ8fChyPVByb21pc2UpKSgoZnVuY3Rpb24obyxhKXtmdW5jdGlvbiBpKGUpe3RyeXtjKG4ubmV4dChlKSl9Y2F0Y2goZSl7YShlKX19ZnVuY3Rpb24gdShlKXt0cnl7YyhuLnRocm93KGUpKX1jYXRjaChlKXthKGUpfX1mdW5jdGlvbiBjKGUpe3ZhciB0O2UuZG9uZT9vKGUudmFsdWUpOih0PWUudmFsdWUsdCBpbnN0YW5jZW9mIHI/dDpuZXcgcigoZnVuY3Rpb24oZSl7ZSh0KX0pKSkudGhlbihpLHUpfWMoKG49bi5hcHBseShlLHR8fFtdKSkubmV4dCgpKX0pKX1mdW5jdGlvbiB1KGUsdCl7dmFyIHIsbixvLGEsaT17bGFiZWw6MCxzZW50OmZ1bmN0aW9uKCl7aWYoMSZvWzBdKXRocm93IG9bMV07cmV0dXJuIG9bMV19LHRyeXM6W10sb3BzOltdfTtyZXR1cm4gYT17bmV4dDp1KDApLHRocm93OnUoMSkscmV0dXJuOnUoMil9LFwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmKGFbU3ltYm9sLml0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfSksYTtmdW5jdGlvbiB1KGEpe3JldHVybiBmdW5jdGlvbih1KXtyZXR1cm4gZnVuY3Rpb24oYSl7aWYocil0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtmb3IoO2k7KXRyeXtpZihyPTEsbiYmKG89MiZhWzBdP24ucmV0dXJuOmFbMF0/bi50aHJvd3x8KChvPW4ucmV0dXJuKSYmby5jYWxsKG4pLDApOm4ubmV4dCkmJiEobz1vLmNhbGwobixhWzFdKSkuZG9uZSlyZXR1cm4gbztzd2l0Y2gobj0wLG8mJihhPVsyJmFbMF0sby52YWx1ZV0pLGFbMF0pe2Nhc2UgMDpjYXNlIDE6bz1hO2JyZWFrO2Nhc2UgNDpyZXR1cm4gaS5sYWJlbCsrLHt2YWx1ZTphWzFdLGRvbmU6ITF9O2Nhc2UgNTppLmxhYmVsKyssbj1hWzFdLGE9WzBdO2NvbnRpbnVlO2Nhc2UgNzphPWkub3BzLnBvcCgpLGkudHJ5cy5wb3AoKTtjb250aW51ZTtkZWZhdWx0OmlmKCEobz1pLnRyeXMsKG89by5sZW5ndGg+MCYmb1tvLmxlbmd0aC0xXSl8fDYhPT1hWzBdJiYyIT09YVswXSkpe2k9MDtjb250aW51ZX1pZigzPT09YVswXSYmKCFvfHxhWzFdPm9bMF0mJmFbMV08b1szXSkpe2kubGFiZWw9YVsxXTticmVha31pZig2PT09YVswXSYmaS5sYWJlbDxvWzFdKXtpLmxhYmVsPW9bMV0sbz1hO2JyZWFrfWlmKG8mJmkubGFiZWw8b1syXSl7aS5sYWJlbD1vWzJdLGkub3BzLnB1c2goYSk7YnJlYWt9b1syXSYmaS5vcHMucG9wKCksaS50cnlzLnBvcCgpO2NvbnRpbnVlfWE9dC5jYWxsKGUsaSl9Y2F0Y2goZSl7YT1bNixlXSxuPTB9ZmluYWxseXtyPW89MH1pZig1JmFbMF0pdGhyb3cgYVsxXTtyZXR1cm57dmFsdWU6YVswXT9hWzFdOnZvaWQgMCxkb25lOiEwfX0oW2EsdV0pfX19ZnVuY3Rpb24gYyhlKXt2YXIgdD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5pdGVyYXRvcixyPXQmJmVbdF0sbj0wO2lmKHIpcmV0dXJuIHIuY2FsbChlKTtpZihlJiZcIm51bWJlclwiPT10eXBlb2YgZS5sZW5ndGgpcmV0dXJue25leHQ6ZnVuY3Rpb24oKXtyZXR1cm4gZSYmbj49ZS5sZW5ndGgmJihlPXZvaWQgMCkse3ZhbHVlOmUmJmVbbisrXSxkb25lOiFlfX19O3Rocm93IG5ldyBUeXBlRXJyb3IodD9cIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCI6XCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpfWZ1bmN0aW9uIGwoZSx0KXt2YXIgcj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmVbU3ltYm9sLml0ZXJhdG9yXTtpZighcilyZXR1cm4gZTt2YXIgbixvLGE9ci5jYWxsKGUpLGk9W107dHJ5e2Zvcig7KHZvaWQgMD09PXR8fHQtLSA+MCkmJiEobj1hLm5leHQoKSkuZG9uZTspaS5wdXNoKG4udmFsdWUpfWNhdGNoKGUpe289e2Vycm9yOmV9fWZpbmFsbHl7dHJ5e24mJiFuLmRvbmUmJihyPWEucmV0dXJuKSYmci5jYWxsKGEpfWZpbmFsbHl7aWYobyl0aHJvdyBvLmVycm9yfX1yZXR1cm4gaX1mdW5jdGlvbiBzKGUsdCxyKXtpZihyfHwyPT09YXJndW1lbnRzLmxlbmd0aClmb3IodmFyIG4sbz0wLGE9dC5sZW5ndGg7bzxhO28rKykhbiYmbyBpbiB0fHwobnx8KG49QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodCwwLG8pKSxuW29dPXRbb10pO3JldHVybiBlLmNvbmNhdChufHxBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0KSl9ZnVuY3Rpb24gZihlLHQscixuLG8pe2Zvcih2YXIgYT1bXSxmPTU7Zjxhcmd1bWVudHMubGVuZ3RoO2YrKylhW2YtNV09YXJndW1lbnRzW2ZdO3JldHVybiBpKHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24oKXt2YXIgaSxmLGgseSx2LGI7cmV0dXJuIHUodGhpcywoZnVuY3Rpb24odSl7c3dpdGNoKHUubGFiZWwpe2Nhc2UgMDp1LnRyeXMucHVzaChbMCwxMiwxMywxNF0pLGk9YyhhKSxmPWkubmV4dCgpLHUubGFiZWw9MTtjYXNlIDE6aWYoZi5kb25lKXJldHVyblszLDExXTtzd2l0Y2goaD1mLnZhbHVlLHR5cGVvZiBoKXtjYXNlXCJzdHJpbmdcIjpyZXR1cm5bMywyXTtjYXNlXCJudW1iZXJcIjpyZXR1cm5bMyw0XTtjYXNlXCJmdW5jdGlvblwiOnJldHVyblszLDZdfXJldHVyblszLDhdO2Nhc2UgMjpyZXR1cm5bNCxkKGUsdCxoLHIsbixvKV07Y2FzZSAzOnJldHVybiB1LnNlbnQoKSxbMywxMF07Y2FzZSA0OnJldHVybls0LHAoaCldO2Nhc2UgNTpyZXR1cm4gdS5zZW50KCksWzMsMTBdO2Nhc2UgNjpyZXR1cm5bNCxoLmFwcGx5KHZvaWQgMCxzKFtlLHQscixuLG9dLGwoYSksITEpKV07Y2FzZSA3OnJldHVybiB1LnNlbnQoKSxbMywxMF07Y2FzZSA4OnJldHVybls0LGhdO2Nhc2UgOTp1LnNlbnQoKSx1LmxhYmVsPTEwO2Nhc2UgMTA6cmV0dXJuIGY9aS5uZXh0KCksWzMsMV07Y2FzZSAxMTpyZXR1cm5bMywxNF07Y2FzZSAxMjpyZXR1cm4geT11LnNlbnQoKSx2PXtlcnJvcjp5fSxbMywxNF07Y2FzZSAxMzp0cnl7ZiYmIWYuZG9uZSYmKGI9aS5yZXR1cm4pJiZiLmNhbGwoaSl9ZmluYWxseXtpZih2KXRocm93IHYuZXJyb3J9cmV0dXJuWzddO2Nhc2UgMTQ6cmV0dXJuWzJdfX0pKX0pKX1mdW5jdGlvbiBkKGUsdCxyLG4sbyxhKXtyZXR1cm4gaSh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKCl7dmFyIGksYztyZXR1cm4gdSh0aGlzLChmdW5jdGlvbih1KXtzd2l0Y2godS5sYWJlbCl7Y2FzZSAwOnJldHVybiBpPWUudGV4dENvbnRlbnR8fFwiXCIsYz1mdW5jdGlvbihlLHQpe3ZhciByPWwodCkuc2xpY2UoMCk7cmV0dXJuIHMocyhbXSxsKGUpLCExKSxbTmFOXSwhMSkuZmluZEluZGV4KChmdW5jdGlvbihlLHQpe3JldHVybiByW3RdIT09ZX0pKX0oaSxyKSxbNCxoKGUscyhzKFtdLGwodihpLHQsYykpLCExKSxsKHkocix0LGMpKSwhMSksbixvLGEpXTtjYXNlIDE6cmV0dXJuIHUuc2VudCgpLFsyXX19KSl9KSl9ZnVuY3Rpb24gcChlKXtyZXR1cm4gaSh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKCl7cmV0dXJuIHUodGhpcywoZnVuY3Rpb24odCl7c3dpdGNoKHQubGFiZWwpe2Nhc2UgMDpyZXR1cm5bNCxuZXcgUHJvbWlzZSgoZnVuY3Rpb24odCl7cmV0dXJuIHNldFRpbWVvdXQodCxlKX0pKV07Y2FzZSAxOnJldHVybiB0LnNlbnQoKSxbMl19fSkpfSkpfWZ1bmN0aW9uIGgoZSx0LHIsbixvKXtyZXR1cm4gaSh0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKCl7dmFyIGEsaSxzLGYsZCxoLHksdixiLG0sdyxnLHg7cmV0dXJuIHUodGhpcywoZnVuY3Rpb24oUyl7c3dpdGNoKFMubGFiZWwpe2Nhc2UgMDppZihhPXQsbyl7Zm9yKGk9MCxzPTE7czx0Lmxlbmd0aDtzKyspaWYoZj1sKFt0W3MtMV0sdFtzXV0sMiksZD1mWzBdLChoPWZbMV0pLmxlbmd0aD5kLmxlbmd0aHx8XCJcIj09PWgpe2k9czticmVha31hPXQuc2xpY2UoaSx0Lmxlbmd0aCl9Uy5sYWJlbD0xO2Nhc2UgMTpTLnRyeXMucHVzaChbMSw2LDcsOF0pLHk9YyhmdW5jdGlvbihlKXt2YXIgdCxyLG4sbyxhLGksbDtyZXR1cm4gdSh0aGlzLChmdW5jdGlvbihzKXtzd2l0Y2gocy5sYWJlbCl7Y2FzZSAwOnQ9ZnVuY3Rpb24oZSl7cmV0dXJuIHUodGhpcywoZnVuY3Rpb24odCl7c3dpdGNoKHQubGFiZWwpe2Nhc2UgMDpyZXR1cm5bNCx7b3A6ZnVuY3Rpb24odCl7cmV0dXJuIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoZnVuY3Rpb24oKXtyZXR1cm4gdC50ZXh0Q29udGVudD1lfSkpfSxvcENvZGU6ZnVuY3Rpb24odCl7dmFyIHI9dC50ZXh0Q29udGVudHx8XCJcIjtyZXR1cm5cIlwiPT09ZXx8ci5sZW5ndGg+ZS5sZW5ndGg/XCJERUxFVEVcIjpcIldSSVRJTkdcIn19XTtjYXNlIDE6cmV0dXJuIHQuc2VudCgpLFsyXX19KSl9LHMubGFiZWw9MTtjYXNlIDE6cy50cnlzLnB1c2goWzEsNiw3LDhdKSxyPWMoZSksbj1yLm5leHQoKSxzLmxhYmVsPTI7Y2FzZSAyOnJldHVybiBuLmRvbmU/WzMsNV06KG89bi52YWx1ZSxbNSx0KG8pXSk7Y2FzZSAzOnMuc2VudCgpLHMubGFiZWw9NDtjYXNlIDQ6cmV0dXJuIG49ci5uZXh0KCksWzMsMl07Y2FzZSA1OnJldHVyblszLDhdO2Nhc2UgNjpyZXR1cm4gYT1zLnNlbnQoKSxpPXtlcnJvcjphfSxbMyw4XTtjYXNlIDc6dHJ5e24mJiFuLmRvbmUmJihsPXIucmV0dXJuKSYmbC5jYWxsKHIpfWZpbmFsbHl7aWYoaSl0aHJvdyBpLmVycm9yfXJldHVybls3XTtjYXNlIDg6cmV0dXJuWzJdfX0pKX0oYSkpLHY9eS5uZXh0KCksUy5sYWJlbD0yO2Nhc2UgMjpyZXR1cm4gdi5kb25lP1szLDVdOihiPXYudmFsdWUsbT1cIldSSVRJTkdcIj09PWIub3BDb2RlKGUpP3IrciooTWF0aC5yYW5kb20oKS0uNSk6bituKihNYXRoLnJhbmRvbSgpLS41KSxiLm9wKGUpLFs0LHAobSldKTtjYXNlIDM6Uy5zZW50KCksUy5sYWJlbD00O2Nhc2UgNDpyZXR1cm4gdj15Lm5leHQoKSxbMywyXTtjYXNlIDU6cmV0dXJuWzMsOF07Y2FzZSA2OnJldHVybiB3PVMuc2VudCgpLGc9e2Vycm9yOnd9LFszLDhdO2Nhc2UgNzp0cnl7diYmIXYuZG9uZSYmKHg9eS5yZXR1cm4pJiZ4LmNhbGwoeSl9ZmluYWxseXtpZihnKXRocm93IGcuZXJyb3J9cmV0dXJuWzddO2Nhc2UgODpyZXR1cm5bMl19fSkpfSkpfWZ1bmN0aW9uIHkoZSx0LHIpe3ZhciBuLG87cmV0dXJuIHZvaWQgMD09PXImJihyPTApLHUodGhpcywoZnVuY3Rpb24oYSl7c3dpdGNoKGEubGFiZWwpe2Nhc2UgMDpuPXQoZSksbz1uLmxlbmd0aCxhLmxhYmVsPTE7Y2FzZSAxOnJldHVybiByPG8/WzQsbi5zbGljZSgwLCsrcikuam9pbihcIlwiKV06WzMsM107Y2FzZSAyOnJldHVybiBhLnNlbnQoKSxbMywxXTtjYXNlIDM6cmV0dXJuWzJdfX0pKX1mdW5jdGlvbiB2KGUsdCxyKXt2YXIgbixvO3JldHVybiB2b2lkIDA9PT1yJiYocj0wKSx1KHRoaXMsKGZ1bmN0aW9uKGEpe3N3aXRjaChhLmxhYmVsKXtjYXNlIDA6bj10KGUpLG89bi5sZW5ndGgsYS5sYWJlbD0xO2Nhc2UgMTpyZXR1cm4gbz5yP1s0LG4uc2xpY2UoMCwtLW8pLmpvaW4oXCJcIildOlszLDNdO2Nhc2UgMjpyZXR1cm4gYS5zZW50KCksWzMsMV07Y2FzZSAzOnJldHVyblsyXX19KSl9dmFyIGI9XCJpbmRleC1tb2R1bGVfdHlwZV9fRS1TYUdcIjshZnVuY3Rpb24oZSx0KXt2b2lkIDA9PT10JiYodD17fSk7dmFyIHI9dC5pbnNlcnRBdDtpZihlJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQpe3ZhciBuPWRvY3VtZW50LmhlYWR8fGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXSxvPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtvLnR5cGU9XCJ0ZXh0L2Nzc1wiLFwidG9wXCI9PT1yJiZuLmZpcnN0Q2hpbGQ/bi5pbnNlcnRCZWZvcmUobyxuLmZpcnN0Q2hpbGQpOm4uYXBwZW5kQ2hpbGQobyksby5zdHlsZVNoZWV0P28uc3R5bGVTaGVldC5jc3NUZXh0PWU6by5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShlKSl9fShcIi5pbmRleC1tb2R1bGVfdHlwZV9fRS1TYUc6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICd8JztcXG4gIGFuaW1hdGlvbjogaW5kZXgtbW9kdWxlX2N1cnNvcl9fUFFnMFAgMS4xcyBpbmZpbml0ZSBzdGVwLXN0YXJ0O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGluZGV4LW1vZHVsZV9jdXJzb3JfX1BRZzBQIHtcXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcblwiKTt2YXIgbT1hKG8oKGZ1bmN0aW9uKG8sYSl7dmFyIGk9by5zZXF1ZW5jZSx1PW8ucmVwZWF0LGM9by5jbGFzc05hbWUsZD1vLnNwZWVkLHA9dm9pZCAwPT09ZD80MDpkLGg9by5kZWxldGlvblNwZWVkLHk9by5vbWl0RGVsZXRpb25BbmltYXRpb24sdj12b2lkIDAhPT15JiZ5LG09by5wcmVSZW5kZXJGaXJzdFN0cmluZyx3PXZvaWQgMCE9PW0mJm0sZz1vLndyYXBwZXIseD12b2lkIDA9PT1nP1wic3BhblwiOmcsUz1vLnNwbGl0dGVyLEU9dm9pZCAwPT09Uz9mdW5jdGlvbihlKXtyZXR1cm4gcyhbXSxsKGUpLCExKX06UyxfPW8uY3Vyc29yLGs9dm9pZCAwPT09X3x8XyxPPW8uc3R5bGUsVD1mdW5jdGlvbihlLHQpe3ZhciByPXt9O2Zvcih2YXIgbiBpbiBlKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLG4pJiZ0LmluZGV4T2Yobik8MCYmKHJbbl09ZVtuXSk7aWYobnVsbCE9ZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyl7dmFyIG89MDtmb3Iobj1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpO288bi5sZW5ndGg7bysrKXQuaW5kZXhPZihuW29dKTwwJiZPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoZSxuW29dKSYmKHJbbltvXV09ZVtuW29dXSl9cmV0dXJuIHJ9KG8sW1wic2VxdWVuY2VcIixcInJlcGVhdFwiLFwiY2xhc3NOYW1lXCIsXCJzcGVlZFwiLFwiZGVsZXRpb25TcGVlZFwiLFwib21pdERlbGV0aW9uQW5pbWF0aW9uXCIsXCJwcmVSZW5kZXJGaXJzdFN0cmluZ1wiLFwid3JhcHBlclwiLFwic3BsaXR0ZXJcIixcImN1cnNvclwiLFwic3R5bGVcIl0pLEE9VFtcImFyaWEtbGFiZWxcIl0sQz1UW1wiYXJpYS1oaWRkZW5cIl0sTj1ULnJvbGU7aHx8KGg9cCk7dmFyIFA9bmV3IEFycmF5KDIpLmZpbGwoNDApO1twLGhdLmZvckVhY2goKGZ1bmN0aW9uKGUsdCl7c3dpdGNoKHR5cGVvZiBlKXtjYXNlXCJudW1iZXJcIjpQW3RdPU1hdGguYWJzKGUtMTAwKTticmVhaztjYXNlXCJvYmplY3RcIjp2YXIgcj1lLnR5cGUsbj1lLnZhbHVlO2lmKFwibnVtYmVyXCIhPXR5cGVvZiBuKWJyZWFrO2lmKFwia2V5U3Ryb2tlRGVsYXlJbk1zXCI9PT1yKVBbdF09bn19KSk7dmFyIGosSSxHLEQsTSxSLHE9UFswXSxGPVBbMV0sQj1mdW5jdGlvbihlLHIpe3ZvaWQgMD09PXImJihyPW51bGwpO3ZhciBvPXQocik7cmV0dXJuIG4oKGZ1bmN0aW9uKCl7ZSYmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGU/ZShvLmN1cnJlbnQpOmUuY3VycmVudD1vLmN1cnJlbnQpfSksW2VdKSxvfShhKSxRPWI7aj1jP1wiXCIuY29uY2F0KGs/UStcIiBcIjpcIlwiKS5jb25jYXQoYyk6az9ROlwiXCIsST10KChmdW5jdGlvbigpe3ZhciBlLHQ9aTt1PT09MS8wP2U9ZjpcIm51bWJlclwiPT10eXBlb2YgdSYmKHQ9QXJyYXkoMSt1KS5maWxsKGkpLmZsYXQoKSk7dmFyIHI9ZT9zKHMoW10sbCh0KSwhMSksW2VdLCExKTpzKFtdLGwodCksITEpO3JldHVybiBmLmFwcGx5KHZvaWQgMCxzKFtCLmN1cnJlbnQsRSxxLEYsdl0sbChyKSwhMSkpLGZ1bmN0aW9uKCl7Qi5jdXJyZW50fX0pKSxHPXQoKSxEPXQoITEpLE09dCghMSksUj1sKHIoMCksMilbMV0sRC5jdXJyZW50JiYoTS5jdXJyZW50PSEwKSxuKChmdW5jdGlvbigpe3JldHVybiBELmN1cnJlbnR8fChHLmN1cnJlbnQ9SS5jdXJyZW50KCksRC5jdXJyZW50PSEwKSxSKChmdW5jdGlvbihlKXtyZXR1cm4gZSsxfSkpLGZ1bmN0aW9uKCl7TS5jdXJyZW50JiZHLmN1cnJlbnQmJkcuY3VycmVudCgpfX0pLFtdKTt2YXIgVz14LEw9dz9pLmZpbmQoKGZ1bmN0aW9uKGUpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlfSkpfHxcIlwiOm51bGw7cmV0dXJuIGUuY3JlYXRlRWxlbWVudChXLHtcImFyaWEtaGlkZGVuXCI6QyxcImFyaWEtbGFiZWxcIjpBLHJvbGU6TixzdHlsZTpPLGNsYXNzTmFtZTpqLGNoaWxkcmVuOkE/ZS5jcmVhdGVFbGVtZW50KFwic3BhblwiLHtcImFyaWEtaGlkZGVuXCI6XCJ0cnVlXCIscmVmOkIsY2hpbGRyZW46TH0pOkwscmVmOkE/dm9pZCAwOkJ9KX0pKSwoZnVuY3Rpb24oZSx0KXtyZXR1cm4hMH0pKTtleHBvcnR7bSBhcyBUeXBlQW5pbWF0aW9ufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-type-animation/dist/esm/index.es.js\n");

/***/ })

};
;