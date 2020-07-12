(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{136:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),i=(a(0),a(164)),o=a(170),c={id:"module15_async_await",title:"A story of Async and Await \ud83e\udd70",sidebar_label:"Module 16: Async Await"},s={id:"javascript/modules/module15_async_await",title:"A story of Async and Await \ud83e\udd70",description:"1. How async-await is different from Promise",source:"@site/docs/javascript/modules/m15_async_await.md",permalink:"/docs/javascript/modules/module15_async_await",lastUpdatedBy:"Abhin Pai",lastUpdatedAt:1594183488,sidebar_label:"Module 16: Async Await",sidebar:"docs",previous:{title:"Map and WeakMap",permalink:"/docs/javascript/modules/module14_map_weakmap"},next:{title:"Profiling React Application \ud83d\udd0e",permalink:"/docs/react/react_profile"}},l=[{value:"Comparing Promise and Async/Await",id:"comparing-promise-and-asyncawait",children:[]},{value:"Other async function syntax",id:"other-async-function-syntax",children:[{value:"Arrow functions",id:"arrow-functions",children:[]},{value:"Object methods",id:"object-methods",children:[]},{value:"Class methods",id:"class-methods",children:[]}]},{value:"Error Handling",id:"error-handling",children:[]}],b={rightToc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Questions \ud83e\udd14")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ol",{parentName:"div"},Object(i.b)("li",{parentName:"ol"},"How async-await is different from Promise"),Object(i.b)("li",{parentName:"ol"},"In what scenario we should use async and await\\")))),Object(i.b)("p",null,"Async/Await is a special syntax to work with Promise in a smart manner. This is being introduced by ES7 which provides the same essence of Promise. "),Object(i.b)("p",null,'They allow you to write promise-based code as if it were synchronous, but without blocking the main thread. They make your asynchronous code less "clever" and more readable.'),Object(i.b)("p",null,"In a simple word Async/Await quite frankly marvelous"),Object(i.b)("p",null,"In order to make function as async, we have to start a function with ",Object(i.b)("inlineCode",{parentName:"p"},"async")," keyword but only with ",Object(i.b)("inlineCode",{parentName:"p"},"async")," keyword this function won't work effectively but if you use ",Object(i.b)("inlineCode",{parentName:"p"},"await")," keyword along with ",Object(i.b)("inlineCode",{parentName:"p"},"async")," you can see the magic of these keywords"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:"{1-2}","{1-2}":!0}),"async function buyMeCoffee() {\n  let coffee = await buy();\n  console.log(coffee);\n}\n")),Object(i.b)("p",null,"If you use the ",Object(i.b)("inlineCode",{parentName:"p"},"async")," keyword before a function definition, you can then use ",Object(i.b)("inlineCode",{parentName:"p"},"await")," within the function. When you ",Object(i.b)("inlineCode",{parentName:"p"},"await")," a promise, the function is paused in a non-blocking way until the promise settles. If the promise fulfills, you get the value back. If the promise rejects, the rejected value is thrown."),Object(i.b)("h3",{id:"comparing-promise-and-asyncawait"},"Comparing Promise and Async/Await"),Object(i.b)("p",null,"Promise code snippet"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'let buyMeCoffee = function Promise((resolve, reject) =>{\n    resolve("Capitano");\n});\n\nbuyMeCoffee.then(res =>{\n    console,log(res);\n});\n')),Object(i.b)("p",null,"Async/Await code snippet"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"async function buyMeCoffee() {\n  let coffee = await buy();\n  console.log(coffee);\n}\n")),Object(i.b)("p",null,"It's the same number of lines, but all the callbacks are gone. This makes it way easier to read"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Tip")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Anything you await is passed through Promise.resolve(), so you can safely await non-native promises."))),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Remember ")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"It's not possible to use ",Object(i.b)("inlineCode",{parentName:"li"},"await")," keyword inside a regular function (Without ",Object(i.b)("inlineCode",{parentName:"li"},"async"),"). If we try to use then an error will be thrown"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"await")," won\u2019t work in the top-level code. It has to be wrapped inside the ",Object(i.b)("inlineCode",{parentName:"li"},"async")," function")))),Object(i.b)("h2",{id:"other-async-function-syntax"},"Other async function syntax"),Object(i.b)("p",null,"We've seen ",Object(i.b)("inlineCode",{parentName:"p"},"async function() {}")," already, but the async keyword can be used with another function syntax"),Object(i.b)("h3",{id:"arrow-functions"},"Arrow functions"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// map some URLs to json-promises\nconst jsonPromises = urls.map(async url => {\n  const response = await fetch(url);\n  return response.json();\n});\n")),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Remember")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},Object(i.b)("inlineCode",{parentName:"p"},"array.map(func)")," doesn't care that I gave it an async function, it just sees it as a function that returns a promise. It won't wait for the first function to complete before calling the second."))),Object(i.b)("h3",{id:"object-methods"},"Object methods"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:"{2-3}","{2-3}":!0}),"const superHero = {\n  async getHero(name) {\n    const hero = await db.getHero(name);\n    return hero;\n  }\n};\n\nsuperHero.getHero('Iron Man').then(\u2026);\n")),Object(i.b)("h3",{id:"class-methods"},"Class methods"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'class SuperHero {\n    constructor(name) {\n        this.heroName = name;\n        this.hero = db.getHero(name);\n    }\n\n    async getHero(){\n        return await this.hero;\n    }\n}\nlet hero = new SuperHero("Hulk");\nhero.getHero();\n')),Object(i.b)("h2",{id:"error-handling"},"Error Handling"),Object(i.b)("hr",null),Object(i.b)("p",null,"If a promise resolves normally, then await promise returns the result. But in the case of a rejection, it throws the error, just as if there were a throw statement at that line."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'async function f() {\n  await Promise.reject(new Error("Whoops!"));\n}\n')),Object(i.b)("p",null,"\u2026is the same as this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'async function f() {\n  throw new Error("Whoops!");\n}\n')),Object(i.b)("p",null,"We can also use ",Object(i.b)("inlineCode",{parentName:"p"},"try-catch")," block to handle exceptions or errors"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Promise.all for async")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},Object(i.b)("inlineCode",{parentName:"p"},"async/await")," works well with ",Object(i.b)("inlineCode",{parentName:"p"},"Promise.all"),". When we need to wait for multiple promises, we can wrap them in ",Object(i.b)("inlineCode",{parentName:"p"},"Promise.all")," and then await"),Object(i.b)("p",{parentName:"div"},"In the case of an error, it propagates as usual, from the failed promise to Promise.all, and then becomes an exception that we can catch using try..catch around the call."))),Object(i.b)(o.a,{styleClass:"heading-1",mdxType:"CustomText"},"Reference"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://javascript.info/async-await"}),"Javascript Info")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke"}),"Lydia Hallie Blog"))))}p.isMDXComponent=!0},164:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(a),d=n,u=p["".concat(o,".").concat(d)]||p[d]||m[d]||i;return a?r.a.createElement(u,c(c({ref:t},l),{},{components:a})):r.a.createElement(u,c({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},170:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=({children:e,styleClass:t})=>r.a.createElement("p",{className:t},e)}}]);