(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var a=n(2),o=(n(0),n(160));const c={id:"hooks_effect",title:"useEffect an effect hook \u26a1\ufe0f",sidebar_label:"useEffect"},r={id:"react/hooks/hooks_effect",title:"useEffect an effect hook \u26a1\ufe0f",description:"1. Why is useEffect called inside a component?",source:"@site/docs/react/hooks/hooks_effect.md",permalink:"/docs/react/hooks/hooks_effect",lastUpdatedBy:"Abhin Pai",lastUpdatedAt:1594031384,sidebar_label:"useEffect",sidebar:"docs",previous:{title:"useState a state hook \ud83d\udccc",permalink:"/docs/react/hooks/hooks_state"},next:{title:"useContext a context hook \ud83e\uddf5",permalink:"/docs/react/hooks/hooks_ctx"}},i=[{value:"componentDidMount equivalent",id:"componentdidmount-equivalent",children:[]},{value:"componentDidUpdate equivalent",id:"componentdidupdate-equivalent",children:[]},{value:"componentWillUnmount equivalent",id:"componentwillunmount-equivalent",children:[]},{value:"Async Operation using <code>useEffect</code>",id:"async-operation-using-useeffect",children:[]},{value:"Clean up using <code>useEffect</code>",id:"clean-up-using-useeffect",children:[]}],s={rightToc:i};function l({components:e,...t}){return Object(o.b)("wrapper",Object(a.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Questions \ud83e\udd14 ")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("ol",{parentName:"div"},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Why is useEffect called inside a component?")," ",Object(o.b)("br",null),"\nPlacing ",Object(o.b)("inlineCode",{parentName:"p"},"useEffect")," inside the component lets us access the state variable or any props right from the effect. We don\u2019t need a special API to read it \u2014 it\u2019s already in the function scope. Hooks embrace JavaScript closures and avoid introducing React-specific APIs where JavaScript already provides a solution.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Does useEffect run after every render?")," ",Object(o.b)("br",null),"\nYes! By default, it runs both after the first render and after every update. ")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Why did we return a function from our effect?")," ",Object(o.b)("br",null),"\nThis is the optional cleanup mechanism for effects. Every effect may return a function that cleans up after it. This lets us keep the logic for adding and removing subscriptions close to each other. They\u2019re part of the same effect!")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"When exactly does React clean up an effect?")," ",Object(o.b)("br",null),"\nReact performs the cleanup when the component unmounts. However, effects run for every render and not just once. This is why React also cleans up effects from the previous render before running the effects next time."))))),Object(o.b)("p",null,"React's ",Object(o.b)("inlineCode",{parentName:"p"},"useEffect")," hook combines ",Object(o.b)("inlineCode",{parentName:"p"},"componentDidMount"),", ",Object(o.b)("inlineCode",{parentName:"p"},"componentDidUpdate")," and ",Object(o.b)("inlineCode",{parentName:"p"},"componentWillUnmount")," lifecycle methods. This is very useful, which reduces the amount of code, simplifies the code, and allows for multiple ",Object(o.b)("inlineCode",{parentName:"p"},"useEffect")," hooks to be called in a single component."),Object(o.b)("p",null,"Syntax of ",Object(o.b)("inlineCode",{parentName:"p"},"useEffect")," is"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"  useEffect(() => {\n    effect // componentDidMount\n    return () => { // componentWillUnmount\n      cleanup\n    }\n  }, [input]) // ComponentDifUpdate\n")),Object(o.b)("p",null,"Where this method helps to perform a certain action when the component mounts and if the component wants to re-render whenever the input (state/props) changes, in that case, we need to pass that particular input to the use effect as an array. useEffect do have a return statement which will help to take care of some sort of operation when the component will leave the window. "),Object(o.b)("h2",{id:"componentdidmount-equivalent"},"componentDidMount equivalent"),Object(o.b)("p",null,"In order to have this hook run only once (when a component is mounted), we need to set an empty array as a hook dependency."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// Using Hooks\nuseEffect(() => {\n    // ComponentDidMount code\n}, []);\n\n// Using Lifecycle Method\ncomponentDidMount(){\n    // Some business logic\n}\n")),Object(o.b)("h2",{id:"componentdidupdate-equivalent"},"componentDidUpdate equivalent"),Object(o.b)("p",null,"In order to have this hook run when the component is updated (this includes mounting), we need to set at least one variable as hook's dependency. "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// Using Hooks\nuseEffect(() => {\n  // ComponentDidMount code \n}, [input]);\n\n// Using Lifecycle method\ncomponentDidUpdate(prevProps) {\n    return prevProps !== props ? true : false;\n}\n")),Object(o.b)("h2",{id:"componentwillunmount-equivalent"},"componentWillUnmount equivalent"),Object(o.b)("p",null,"In order to have this hook run when the component is unmounted, we need to return a function from the hook. If we want a cleanup function to run only when the component has unmounted, we need to set an empty array. If we set one or more variables in the dependency array, cleanup will run at every re-render."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"useEffect(() => {\n  return () => {\n    // componentWillUnmount code\n  }\n}, []);\n")),Object(o.b)("h2",{id:"async-operation-using-useeffect"},"Async Operation using ",Object(o.b)("inlineCode",{parentName:"h2"},"useEffect")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{4-6}","{4-6}":!0}),"export default function Example() { \n    const [data, setData] = useState(false);\n\n    useEffect(async () => {\n      let response = await fetch('api/data') //Direct call\n      response = await res.json()\n      setData(response)\n    }, []);\n\n  return <div>{data}</div>;\n}\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},'"React Hook Warnings for async function in useEffect: useEffect function must return a cleanup function or nothing"')),Object(o.b)("p",null,"To solve this issue you need to call a Synchronous method. Even if this new one is Async."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{5-10}","{5-10}":!0}),"export default function Example() { \n    const [data, setData] = useState(false);\n\n    useEffect(() => {\n      const runAsync = async () => {\n        let response = await fetch('api/data')\n        response = await res.json()\n        setData(response)\n      };\n      runAsync();\n    }, []);\n\n  return <div>{data}</div>;\n}\n")),Object(o.b)("h2",{id:"clean-up-using-useeffect"},"Clean up using ",Object(o.b)("inlineCode",{parentName:"h2"},"useEffect")),Object(o.b)("p",null,"In the above example, we tried async using react in case if we want to do some sort of cleanup like close connection, reset state, etc we need to add those logics into the anonymous function and should return "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{12}","{12}":!0}),"export default function Example() { \n    const [data, setData] = useState(false);\n\n    useEffect(() => {\n      const runAsync = async () => {\n        let response = await fetch('api/data')\n        response = await res.json()\n        setData(response)\n      };\n      runAsync();\n\n      return () => { cleanup() }\n    }, []);\n\n  return <div>{data}</div>;\n}\n")),Object(o.b)("p",null,"or Cancel fetch with ",Object(o.b)("inlineCode",{parentName:"p"},"AbortController")," from fetch/es6"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"{17, 12}","{17,":!0,"12}":!0}),"export default function Example() { \n    const [data, setData] = useState(false);\n    const abortController = new AbortController();\n\n    useEffect(() => {\n      const runAsync = async () => {\n           // highlight-start\n        try {\n            let response = await fetch('api/data')\n            response = await res.json()\n            setData(response)\n        } catch(ex) {\n           abortController.signal.aborted ?  canceled : throw ex;\n        }\n        // highlight-end\n      };\n      runAsync();\n        // highlight-next-line\n      return () => abortController.abort();\n    }, []);\n\n  return <div>{data}</div>;\n}\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Remember")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"Unlike ",Object(o.b)("inlineCode",{parentName:"li"},"componentDidMount")," or ",Object(o.b)("inlineCode",{parentName:"li"},"componentDidUpdate"),", effects scheduled with ",Object(o.b)("inlineCode",{parentName:"li"},"useEffect")," don\u2019t block the browser from updating the screen. This makes your app feel more responsive. The majority of effects don\u2019t need to happen synchronously. In the uncommon cases where they do (such as measuring the layout), there is a separate ",Object(o.b)("inlineCode",{parentName:"li"},"useLayoutEffect")," Hook with an API identical to useEffect."),Object(o.b)("li",{parentName:"ul"},"We don\u2019t have to return a named function from the effect")))),Object(o.b)("p",null,"For more details refer ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/docs/hooks-effect.html"}),"React Official Doc")))}l.isMDXComponent=!0},160:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var a=n(0),o=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,f=u["".concat(r,".").concat(b)]||u[b]||d[b]||c;return n?o.a.createElement(f,i(i({ref:t},l),{},{components:n})):o.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,r=new Array(c);r[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var l=2;l<c;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);