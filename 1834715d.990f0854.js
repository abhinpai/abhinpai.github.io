(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{111:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(2),r=a(7),i=(a(0),a(173)),o={id:"module13_set_weakset",title:"Set and Weakset",sidebar_label:"Module 13: Set and Weakset"},l={id:"javascript/modules/module13_set_weakset",isDocsHomePage:!1,title:"Set and Weakset",description:"1. How set is different from Map",source:"@site/docs/javascript/modules/m13_set_weakset.md",permalink:"/docs/javascript/modules/module13_set_weakset",lastUpdatedBy:"Abhin Pai",lastUpdatedAt:1594401132,sidebar_label:"Module 13: Set and Weakset",sidebar:"docs",previous:{title:"Module",permalink:"/docs/javascript/modules/module11_module"},next:{title:"Map and WeakMap",permalink:"/docs/javascript/modules/module14_map_weakmap"}},s=[{value:"Set",id:"set",children:[{value:"Salient Features of Set",id:"salient-features-of-set",children:[]},{value:"Set methods",id:"set-methods",children:[]},{value:"Set Iteration Methods",id:"set-iteration-methods",children:[]}]},{value:"WeakSet",id:"weakset",children:[]}],c={rightToc:s};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Questions")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ol",{parentName:"div"},Object(i.b)("li",{parentName:"ol"},"How set is different from Map"),Object(i.b)("li",{parentName:"ol"},"How set is different from Array"),Object(i.b)("li",{parentName:"ol"},"Set vs WeakSet")))),Object(i.b)("h2",{id:"set"},"Set"),Object(i.b)("hr",null),Object(i.b)("p",null,"A set is a special type of collection in Javascript Unless an array set holds only unique values without any ",Object(i.b)("inlineCode",{parentName:"p"},"keys")," where each value occurs only once."),Object(i.b)("h3",{id:"salient-features-of-set"},"Salient Features of Set"),Object(i.b)("h3",{id:"set-methods"},"Set methods"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"new Set(iterable)")," \u2013 creates the set, and if an iterable object is provided (usually an array), copies values from it into the set."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"set.add(value)")," \u2013 adds a value, returns the set itself."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"set.delete(value)")," \u2013 removes the value, returns true if value existed at the moment of the call, otherwise false."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"set.has(value)")," \u2013 returns true if the value exists in the set, otherwise false."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"set.clear()")," \u2013 removes everything from the set."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"set.size")," \u2013 is the elements count.")),Object(i.b)("h3",{id:"set-iteration-methods"},"Set Iteration Methods"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"set.keys()")," \u2013 returns an iterable object for values,"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"set.values()")," \u2013 same as set.keys(), for compatibility with Map,"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"set.entries()")," \u2013 returns an iterable object for entries ","[value, value]",", exists for compatibility with Map.")),Object(i.b)("h2",{id:"weakset"},"WeakSet"),Object(i.b)("hr",null),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"WeakSet")," behave similarly as a ",Object(i.b)("inlineCode",{parentName:"p"},"Set")," but it only allows objects as values, primitive values are not allowed. But WeakSet do not support iteration methods/properties like ",Object(i.b)("inlineCode",{parentName:"p"},"weakSet.keys()")," or ",Object(i.b)("inlineCode",{parentName:"p"},"Size")),Object(i.b)("p",null,"And ",Object(i.b)("inlineCode",{parentName:"p"},"WeakSet")," also has the nature of ",Object(i.b)("inlineCode",{parentName:"p"},"WeakMap")," which is automatic garbage collection if any value in the ",Object(i.b)("inlineCode",{parentName:"p"},"WeakSet")," don't have any references"))}b.isMDXComponent=!0},173:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=b(a),d=n,m=u["".concat(o,".").concat(d)]||u[d]||p[d]||i;return a?r.a.createElement(m,l(l({ref:t},c),{},{components:a})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);