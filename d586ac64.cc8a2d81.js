(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(2),a=(n(0),n(173));n(197);const l={id:"style",title:"Interview questions on Styling (CSS, SCSS & Less)",sidebar_label:"Styling CSS"},o={id:"questions/style",title:"Interview questions on Styling (CSS, SCSS & Less)",description:"\ud83d\udd38 CSS Fundamentals",source:"@site/docs/questions/style.md",permalink:"/docs/questions/style",lastUpdatedBy:"Abhin Pai",lastUpdatedAt:1595020291,sidebar_label:"Styling CSS"},i=[],c={rightToc:i};function s({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\ud83d\udd38 CSS Fundamentals"),Object(a.b)("p",null,"\ud83d\udd38 What are the different ways to apply CSS"),Object(a.b)("p",null,"\ud83d\udd38 What is ",Object(a.b)("inlineCode",{parentName:"p"},"selector")," and how will that solve the problem "),Object(a.b)("p",null,"\ud83d\udd38Selector that match only links ends (.zip, .Zip, .ZIP...)"),Object(a.b)("p",null,"\ud83d\udd38What are the different units available in CSS "),Object(a.b)("p",null,"\ud83d\udd38 Describe float? and its working "))}s.isMDXComponent=!0},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),h=u(n),p=r,f=h["".concat(o,".").concat(p)]||h[p]||d[p]||l;return n?a.a.createElement(f,i(i({ref:t},s),{},{components:n})):a.a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},197:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),a=n.n(r),l=n(98),o=n.n(l);function i({fontWeight:e,children:t,focusWord:n,highlightWord:r,highlightWords:l}){return a.a.createElement("div",{className:o.a.masterDiv},a.a.createElement("span",{className:o.a.blob}),"h1"==e&&a.a.createElement("h1",null,a.a.createElement(c,{focusWord:n,highlightWord:r,highlightWords:l,childText:t}))||"h2"==e&&a.a.createElement("h2",null,a.a.createElement(c,{focusWord:n,highlightWord:r,highlightWords:l,childText:t}))||"h3"==e&&a.a.createElement("h3",null,a.a.createElement(c,{focusWord:n,highlightWord:r,highlightWords:l,childText:t}))||"h4"==e&&a.a.createElement("h4",null,a.a.createElement(c,{focusWord:n,highlightWord:r,highlightWords:l,childText:t}))||a.a.createElement("p",null,a.a.createElement(c,{focusWord:n,highlightWord:r,highlightWords:l,childText:t})),a.a.createElement("br",null))}function c({focusWord:e,highlightWord:t,highlightWords:n,childText:r}){return a.a.createElement(a.a.Fragment,null,n&&n.forEach(e=>{o.a.highlightWord}),t&&a.a.createElement("span",{className:o.a.highlightWord},t),e&&a.a.createElement("span",{className:o.a.focus},e),r&&r)}}}]);