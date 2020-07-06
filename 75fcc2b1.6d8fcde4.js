(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),o=(n(0),n(157)),i={id:"hooks_state",title:"useState a state hook \ud83d\udccc",sidebar_label:"useState"},s={id:"react/hooks/hooks_state",title:"useState a state hook \ud83d\udccc",description:"1. What do we pass to useState as an argument?",source:"@site/docs/react/hooks/hooks_state.md",permalink:"/docs/react/hooks/hooks_state",lastUpdatedBy:"Abhin Pai",lastUpdatedAt:1594031384,sidebar_label:"useState",sidebar:"docs",previous:{title:"React Hooks Introduction \ud83c\udfa3",permalink:"/docs/react/hooks/hooks_intro"},next:{title:"useEffect an effect hook \u26a1\ufe0f",permalink:"/docs/react/hooks/hooks_effect"}},c=[{value:"Lazy initial state",id:"lazy-initial-state",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Questions \ud83e\udd14")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("ol",{parentName:"div"},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"What do we pass to useState as an argument?")," ",Object(o.b)("br",null),"\nAccording to the React Doc useState allow only argument to set the initial state. Unlike classes, the state doesn\u2019t have to be an object.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"What does useState return?")," ",Object(o.b)("br",null),"\nIt returns a pair of values, The current state and a function that updates its current state"))))),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"useState()")," is a replacement for the traditional way to declare a state inside the class constructor. This hook method lets you add React state to function components."),Object(o.b)("p",null,"Returns a stateful value, and a function to update it."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{2,11}","{2,11}":!0}),"export default function App() {\n  const [name, setName] = useState('Anonymous');\n\n  useEffect(() => {\n    document.title = name;\n  });\n\n  return (\n    <div>\n      <h2>{name}</h2>\n      <input type=\"text\" onChange={(e) => setName(e.target.value)}/>\n    </div>\n  );\n}\n")),Object(o.b)("p",null,"alternate using class "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"class App extends Component {\n  constructor(props) {\n    super(props);\n    // highlight-start\n    this.state = {\n      name: 'Anonymous',\n    };\n    // highlight-end\n  }\n\n  render() {\n    return (\n      <div>\n        <h2>{name}</h2>\n        //  highlight-next-line\n        <input type='text' onChange={(e) => this.setState({name: e.target.value})} />\n      </div>\n    );\n  }\n}\n")),Object(o.b)("p",null,'In the above example, we declare a new state variable, which I called "name". '),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"useState")," method return array, In that first subscript value, states (name) and the second value is a method to mutate that state (setName) and we used Javascript ",Object(o.b)("inlineCode",{parentName:"p"},"Array Destructing")," "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"let stateResult =  useState('Anonymous');\nconst name = stateResult[0];\nconst setName = stateResult[1];\n")),Object(o.b)("p",null,"In React state variables are preserved. They do not vanish like they normally would when a function exits."),Object(o.b)("h2",{id:"lazy-initial-state"},"Lazy initial state"),Object(o.b)("p",null,"The initialState argument is the state used during the initial render. In subsequent renders, it is disregarded. If the initial state is the result of an expensive computation, you may provide a function instead, which will be executed only on the initial render"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const [state, setState] = useState(() => {\n  const initialState = someComputation(props);\n  return initialState;\n});\n\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Remember ")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"React guarantees that setState function identity is stable and won\u2019t change on re-renders. This is why it\u2019s safe to omit from the useEffect or useCallback dependency list."))))}u.isMDXComponent=!0},157:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?r.a.createElement(m,s(s({ref:t},l),{},{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);