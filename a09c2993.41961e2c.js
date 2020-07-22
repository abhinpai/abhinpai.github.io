/*! For license information please see a09c2993.41961e2c.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{168:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return m})),n.d(t,"rightToc",(function(){return y})),n.d(t,"default",(function(){return v}));var r=n(2),a=n(7),o=n(0),c=n.n(o),i=n(173),l=n(186),s=n.n(l),u=n(144),p=n.n(u);function f(){return c.a.createElement("div",null,c.a.createElement("h1",{className:p.a.namaste},c.a.createElement("span",{style:{verticalAlign:"middle"}},"Namaste")," \ud83d\ude4f\ud83c\udffc"),c.a.createElement("p",{className:p.a.intoMsg,style:{paddingTop:"1rem"}},c.a.createElement("a",{href:"https://twitter.com/paiabhin",target:"_blank",className:p.a.twitterNamespace},"@abhinpai")," ","here. As part of my learning activity, I have documented few topics on"," ",c.a.createElement("span",{style:{color:"#e45405"}},"Frontend")," and planning to add few more contents on ",c.a.createElement("span",{style:{color:"#e87604"}},"Backend"),","," ",c.a.createElement("span",{style:{color:"#ed9002"}},"DevOps")," and,"," ",c.a.createElement("span",{style:{color:"#f0ab00"}},"and other concepts")," which may also help you guys to hone your skills"),c.a.createElement("p",{className:s()(p.a.intoMsg,p.a.paddingTop)},"If you find these content useful and want to appreciate my work then please reach me out"," ",c.a.createElement("a",{href:"https://twitter.com/paiabhin",target:"_blank",className:p.a.twitterNamespace},"@abhinpai")),c.a.createElement("p",null))}n(175);var d={id:"introduction",title:" ",sidebar_label:"Introduction"},m={id:"introduction",isDocsHomePage:!0,title:" ",source:"@site/docs/introduction.md",permalink:"/docs/",lastUpdatedBy:"Abhin Pai",lastUpdatedAt:1594349324,sidebar_label:"Introduction",sidebar:"docs",next:{title:"\ud83d\udee1 Javascript Battalion  \ud83d\udee1",permalink:"/docs/javascript/js_index"}},y=[],b={rightToc:y};function v(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(f,{mdxType:"Intro"}))}v.isMDXComponent=!0},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||o;return n?a.a.createElement(m,i(i({ref:t},s),{},{components:n})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},174:function(e,t,n){"use strict";var r=n(0),a=n(35);t.a=function(){return Object(r.useContext)(a.a)}},175:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(174),a=n(176);function o(e,{forcePrependBaseUrl:t=!1,absolute:n=!1}={}){const{siteConfig:{baseUrl:o="/",url:c}={}}=Object(r.a)();if(!e)return e;if(t)return o+e;if(!Object(a.a)(e))return e;const i=o+e.replace(/^\//,"");return n?c+i:i}},176:function(e,t,n){"use strict";function r(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}n.d(t,"a",(function(){return r}))},186:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var c=a.apply(null,r);c&&e.push(c)}else if("object"===o)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()}}]);