(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{119:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var o=n(2),a=(n(0),n(163));const r={id:"hooks_ctx",title:"useContext a context hook \ud83e\uddf5",sidebar_label:"useContext"},c={id:"react/hooks/hooks_ctx",title:"useContext a context hook \ud83e\uddf5",description:"1. What is the context? Why it is useful?",source:"@site/docs/react/hooks/hooks_ctx.md",permalink:"/docs/react/hooks/hooks_ctx",lastUpdatedBy:"Abhin Pai",lastUpdatedAt:1594030928,sidebar_label:"useContext",sidebar:"docs",previous:{title:"useEffect an effect hook \u26a1\ufe0f",permalink:"/docs/react/hooks/hooks_effect"},next:{title:"useMemo, Memorization hook \ud83d\udcbe",permalink:"/docs/react/hooks/hooks_memo"}},i=[],s={rightToc:i};function l({components:e,...t}){return Object(a.b)("wrapper",Object(o.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Questions \ud83e\udd14")),Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("ol",{parentName:"div"},Object(a.b)("li",{parentName:"ol"},"What is the context? Why it is useful?"),Object(a.b)("li",{parentName:"ol"},"How do you declare context in-class component and how its different using hooks?"),Object(a.b)("li",{parentName:"ol"},"How do you optimize re-rendering when one value of context changes which is unnecessary ")))),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"useContext()")," Accepts a context object (the value returned from ",Object(a.b)("inlineCode",{parentName:"p"},"React.createContext"),") and returns the current context value for that context. The current context value is determined by the value prop of the nearest ",Object(a.b)("inlineCode",{parentName:"p"},"<MyContext.Provider>")," above the calling component in the tree."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"const value = useContext(MyContext);\n")),Object(a.b)("p",null,"When the nearest ",Object(a.b)("inlineCode",{parentName:"p"},"<MyContext.Provider>")," above the component updates, this Hook will trigger a re-render with the latest context value passed to that MyContext provider. Even if an ancestor uses ",Object(a.b)("inlineCode",{parentName:"p"},"React.memo")," or ",Object(a.b)("inlineCode",{parentName:"p"},"shouldComponentUpdate"),", a re-render will still happen to start at the component itself using useContext."),Object(a.b)("p",null,"A component calling ",Object(a.b)("inlineCode",{parentName:"p"},"useContext")," will always re-render when the context value changes. If re-rendering the component is expensive, you can optimize it by using ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/facebook/react/issues/15156#issuecomment-474590693"}),"memoization"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),'const themes = {\n  light: {\n    foreground: "#000000",\n    background: "#eeeeee"\n  },\n  dark: {\n    foreground: "#ffffff",\n    background: "#222222"\n  }\n};\n\nconst ThemeContext = React.createContext(themes.light);\n\nfunction App() {\n  return (\n    <ThemeContext.Provider value={themes.dark}>\n      <Toolbar />\n    </ThemeContext.Provider>\n  );\n}\n\nfunction Toolbar(props) {\n  return (\n    <div>\n      <ThemedButton />\n    </div>\n  );\n}\n\nfunction ThemedButton() {\n  const theme = useContext(ThemeContext);\n  return (\n    <button style={{ background: theme.background, color: theme.foreground }}>\n      I am styled by theme context!\n    </button>\n  );\n}\n')),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Remember")),Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"If you\u2019re familiar with the context API before Hooks, ",Object(a.b)("inlineCode",{parentName:"p"},"useContext(MyContext)")," is equivalent to static ",Object(a.b)("inlineCode",{parentName:"p"},"contextType = MyContext")," in a class, or to ",Object(a.b)("inlineCode",{parentName:"p"},"<MyContext.Consumer>"),"."),Object(a.b)("p",{parentName:"div"},Object(a.b)("inlineCode",{parentName:"p"},"useContext(MyContext)")," only lets you read the context and subscribe to its changes. You still need a ",Object(a.b)("inlineCode",{parentName:"p"},"<MyContext.Provider>")," above in the tree to provide the value for this context."))))}l.isMDXComponent=!0},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=o,m=b["".concat(c,".").concat(d)]||b[d]||u[d]||r;return n?a.a.createElement(m,i(i({ref:t},l),{},{components:n})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<r;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);