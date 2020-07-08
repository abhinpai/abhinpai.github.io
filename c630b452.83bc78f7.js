(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var o=n(2),r=n(6),a=(n(0),n(160)),c={id:"hooks_rules",title:"Rules of Hooks \ud83d\udccb",sidebar_label:"Hooks Rules"},i={id:"react/hooks/hooks_rules",title:"Rules of Hooks \ud83d\udccb",description:"* Hooks can not be used inside any condition, loops or nested function it has to the at the top-level hooks are unconditionally awesome \ud83d\ude0e",source:"@site/docs/react/hooks/hooks_rules.md",permalink:"/docs/react/hooks/hooks_rules",lastUpdatedBy:"Abhin Pai",lastUpdatedAt:1594031384,sidebar_label:"Hooks Rules",sidebar:"docs",previous:{title:"useReducer a state Hook \u2702\ufe0f",permalink:"/docs/react/hooks/hooks_reducer"},next:{title:"\ud83c\udfa8 UI Resources \ud83d\udd8d",permalink:"/docs/gemBox/ui_res"}},s=[],l={rightToc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Hooks can not be used inside any condition, loops or nested function it has to the at the top-level hooks are unconditionally awesome \ud83d\ude0e"),Object(a.b)("li",{parentName:"ul"},"All the hooks methods are determined by ",Object(a.b)("inlineCode",{parentName:"li"},"use")," as a prefix to the method name"),Object(a.b)("li",{parentName:"ul"},"Hooks can be called only inside the functional component or from custom hooks. Do not call hooks from a regular javascript function")))}u.isMDXComponent=!0},160:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,b=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return n?r.a.createElement(b,i(i({ref:t},l),{},{components:n})):r.a.createElement(b,i({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);