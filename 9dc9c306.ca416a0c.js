(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var a=n(2),r=n(6),o=(n(0),n(158)),s={id:"hooks_reducer",title:"useReducer an alternative to useState",sidebar_label:"useReducer"},c={id:"react/hooks/hooks_reducer",title:"useReducer an alternative to useState",description:"1. useReducer over useState",source:"@site/docs/react/hooks/hooks_reducer.md",permalink:"/docs/react/hooks/hooks_reducer",lastUpdatedBy:"Abhin Pai",lastUpdatedAt:1593897919,sidebar_label:"useReducer",sidebar:"docs",previous:{title:"useMemo, Memorization hook",permalink:"/docs/react/hooks/hooks_memo"},next:{title:"Rules of Hooks",permalink:"/docs/react/hooks/hooks_rules"}},i=[{value:"Specifying the initial state",id:"specifying-the-initial-state",children:[]}],u={rightToc:i};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Question \ud83e\udd14")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("ol",{parentName:"div"},Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"useReducer")," over ",Object(o.b)("inlineCode",{parentName:"strong"},"useState")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"It is always better to use this method when the state depends on the previous one. It will give you a more predictable state transition"),Object(o.b)("li",{parentName:"ul"},"When the state consists of more than primitive values, like nested object or arrays"),Object(o.b)("li",{parentName:"ul"},"Reducers are pure functions, and this means they have no side effects and must return the same outcome given the same arguments. It is easier to test them because they do not depend on React.")))))),Object(o.b)("p",null,"An alternative to useState. Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"useReducer")," is usually preferable to ",Object(o.b)("inlineCode",{parentName:"p"},"useState")," when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. ",Object(o.b)("inlineCode",{parentName:"p"},"useReducer")," also lets you ",Object(o.b)("inlineCode",{parentName:"p"},"optimize performance")," for components that trigger deep updates because you can pass dispatch down instead of callbacks."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const userStatus = {status: 'offline'};\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case 'online':\n      return {status: action.type};\n    case 'busy':\n      return {status: action.type};\n    case 'away':\n      return {status: action.type};\n    default:\n      return {status: 'offline'};\n  }\n}\n\nfunction Counter() {\n  const [state, dispatch] = useReducer(reducer, userStatus);\n  return (\n    <>\n      User Status: {state.status}\n      <button onClick={() => dispatch({type: 'online'})}>-</button>\n      <button onClick={() => dispatch({type: 'busy'})}>+</button>\n    </>\n  );\n}\n")),Object(o.b)("h2",{id:"specifying-the-initial-state"},"Specifying the initial state"),Object(o.b)("p",null,"There are two different ways to initialize useReducer state. You may choose either one depending on the use case. The simplest way is to pass the initial state as a second argument:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"  const [state, dispatch] = useReducer(\n    reducer,\n    {state: userStatus}\n  );\n")))}l.isMDXComponent=!0},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),l=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),b=a,m=p["".concat(s,".").concat(b)]||p[b]||d[b]||o;return n?r.a.createElement(m,c(c({ref:t},u),{},{components:n})):r.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var u=2;u<o;u++)s[u]=n[u];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);