(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{156:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return d})),o.d(t,"metadata",(function(){return u})),o.d(t,"rightToc",(function(){return m})),o.d(t,"default",(function(){return O}));var n=o(2),a=o(6),r=o(0),i=o.n(r),c=o(160),l=o(137),p=o.n(l);function b({fontWeight:e,children:t,focusWord:o,highlightWord:n,highlightWords:a}){return i.a.createElement("div",{className:p.a.masterDiv},i.a.createElement("span",{className:p.a.blob}),"h1"==e&&i.a.createElement("h1",null,i.a.createElement(s,{focusWord:o,highlightWord:n,highlightWords:a,childText:t}))||"h2"==e&&i.a.createElement("h2",null,i.a.createElement(s,{focusWord:o,highlightWord:n,highlightWords:a,childText:t}))||"h3"==e&&i.a.createElement("h3",null,i.a.createElement(s,{focusWord:o,highlightWord:n,highlightWords:a,childText:t}))||"h4"==e&&i.a.createElement("h4",null,i.a.createElement(s,{focusWord:o,highlightWord:n,highlightWords:a,childText:t}))||i.a.createElement("p",null,i.a.createElement(s,{focusWord:o,highlightWord:n,highlightWords:a,childText:t})),i.a.createElement("br",null))}function s({focusWord:e,highlightWord:t,highlightWords:o,childText:n}){return i.a.createElement(i.a.Fragment,null,o&&o.forEach(e=>{p.a.highlightWord}),t&&i.a.createElement("span",{className:p.a.highlightWord},t),e&&i.a.createElement("span",{className:p.a.focus},e),n&&n)}var h=o(163),d={id:"module5_prototype",title:"Prototype Inheritance \u26d3",sidebar_label:"Module 5: Prototype"},u={id:"javascript/modules/module5_prototype",title:"Prototype Inheritance \u26d3",description:"1. What is Prototypal inheritance",source:"@site/docs/javascript/modules/m5_prototype.md",permalink:"/docs/javascript/modules/module5_prototype",lastUpdatedBy:"Abhin Pai",lastUpdatedAt:1594222537,sidebar_label:"Module 5: Prototype",sidebar:"docs",previous:{title:"Function",permalink:"/docs/javascript/modules/module4_function"},next:{title:"It's a Classsssss \ud83d\ude0e",permalink:"/docs/javascript/modules/module6_classes"}},m=[{value:"Prototype Inheritance",id:"prototype-inheritance",children:[{value:"Play with prototype",id:"play-with-prototype",children:[]}]},{value:"Prototype methods, objects without <code>__proto__</code>",id:"prototype-methods-objects-without-__proto__",children:[]}],j={rightToc:m};function O(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},j,o,{components:t,mdxType:"MDXLayout"}),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Questions \ud83e\udd14")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("ol",{parentName:"div"},Object(c.b)("li",{parentName:"ol"},"What is Prototypal inheritance"),Object(c.b)("li",{parentName:"ol"},"What is the difference between Prototype and [","[Prototype]","] and ",Object(c.b)("inlineCode",{parentName:"li"},"__proto__")),Object(c.b)("li",{parentName:"ol"},"What happens when you try to use or mutate an object using ",Object(c.b)("inlineCode",{parentName:"li"},"__proto__")," in your production code?"),Object(c.b)("li",{parentName:"ol"},Object(c.b)("strong",{parentName:"li"},"What happens when you call a constructor function with the ",Object(c.b)("inlineCode",{parentName:"strong"},"new")," keyword"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"A new empty object is created"),Object(c.b)("li",{parentName:"ul"},"The context object ",Object(c.b)("inlineCode",{parentName:"li"},"this")," is bound to the new empty object"),Object(c.b)("li",{parentName:"ul"},"The new object is linked to the function\u2019s prototype property"),Object(c.b)("li",{parentName:"ul"},"If we see the empty object prototype it will return its own constructor unless another value is added explicitly to the function "))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("strong",{parentName:"li"},"After an object is created, for example using the ",Object(c.b)("inlineCode",{parentName:"strong"},"new")," keyword, how can we access the prototype object that the instantiated object is linked to?")," ",Object(c.b)("br",null),"\nThere is two way to access a prototype in javascript",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Object.getPrototypeOf(yourObject)"),Object(c.b)("li",{parentName:"ul"},"yourObject.",Object(c.b)("strong",{parentName:"li"},"proto")))),Object(c.b)("li",{parentName:"ol"},"What is the difference between the classical and the prototypical inheritance?")))),Object(c.b)("p",null,"You might of think ",Object(c.b)("inlineCode",{parentName:"p"},"prototypal inheritance")," in javascript is similar to inheritance from any other object-oriented programming language."),Object(c.b)("p",null,"But, the answer is partial YES. ",Object(c.b)("inlineCode",{parentName:"p"},"Prototypal inheritance")," is somewhat similar to other programming languages."),Object(c.b)("p",null,"And the base definition of inheritance remains the same i.e extending base class properties into child class as simple as that."),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"JavaScript had a prototypal inheritance from the beginning. It was one of the core features of the language.")),Object(c.b)("h2",{id:"prototype-inheritance"},"Prototype Inheritance"),Object(c.b)("hr",null),Object(c.b)("p",null,"Have you ever wonder when we create an array, objects, or function how do we get its method on the fly? \ud83e\udd14. Even though we don't specify a method like a length, split, splice, reduce, etc all will be available for us to utilize its kind of magic isn't it \ud83d\udd2e!!! Naah its Javascript prototypal inheritance "),Object(c.b)("p",null,"In JavaScript, every object will be having a special hidden property ",Object(c.b)("inlineCode",{parentName:"p"},"[[Prototype]]"),", that is either ",Object(c.b)("inlineCode",{parentName:"p"},"null")," or references another ",Object(c.b)("inlineCode",{parentName:"p"},"object"),". That object is called a ",Object(c.b)("inlineCode",{parentName:"p"},"prototype")),Object(c.b)("p",null,"Let's see with an example "),Object(c.b)("p",null,'Consider you are manufacturing a laptop (MacbookPro 16") this laptop will have its own features like backlit Keyboard, touch bar, touchid, and many other cool features. '),Object(c.b)("p",null,'And now every MacbookPro 16" that you manufacture should have these features.'),Object(c.b)("p",null,"Now let's assume your constructor function will that will produce a new Macbook every time whenever it calls. Now here comes the ",Object(c.b)("inlineCode",{parentName:"p"},"prototype")," which will help to ensure all the manufactured Macbook will have all the features that we want."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"function Macbook16() { }; // Constructor\n\nMacbook16.prototype // {constructor: \u0192}\n\n// Assigning the feature to the function\nMacbook16.prototype.backlitKeyboard = function () {}\nMacbook16.prototype.touchbar = function () {}\nMacbook16.prototype.touchid = function () {}\n\nMacbook16.prototype // {backlitKeyboard: \u0192, touchbar: \u0192, touchid: \u0192, constructor: \u0192}\n\n// now lets create an instance for Macbook16 (In our case manufacturing Macbook)\nlet mac = new Macbook16();\n// All my instance of Macbook16 will have feature of backlitKeyboard, touchbar and touchid \nmac.__proto__ // {backlitKeyboard: \u0192, touchbar: \u0192, touchid: \u0192, constructor: \u0192}\n")),Object(c.b)("p",{align:"center"},Object(c.b)("img",{className:"gif-img",src:Object(h.a)("https://firebasestorage.googleapis.com/v0/b/pai-profile.appspot.com/o/gifs%2FFunction-prototype.gif?alt=media&token=fbfba218-41fa-4832-bb31-00ece36503c7"),alt:"function-prototype"})),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"The ",Object(c.b)("inlineCode",{parentName:"p"},"prototype")," for a constructor function will be the constructor of its own function itself")),Object(c.b)("p",{align:"center"},Object(c.b)("img",{className:"gif-img",src:Object(h.a)("https://firebasestorage.googleapis.com/v0/b/pai-profile.appspot.com/o/gifs%2Ffunction-ins-proto.gif?alt=media&token=c8ae2cc8-5a63-4bcf-a6a4-8a8ee637de76"),alt:"function-obj-prototype"})),Object(c.b)("p",null,"Now the question is. Why are these features stored in an object called ",Object(c.b)("inlineCode",{parentName:"p"},"__proto__"),", and not stored directly as properties of ",Object(c.b)("inlineCode",{parentName:"p"},"mac")," instance?"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"__proto__")," is an object which will be present in every call instance and which will be referring to the ",Object(c.b)("inlineCode",{parentName:"p"},"prototype")," present "),Object(c.b)("p",null,"In our example ",Object(c.b)("inlineCode",{parentName:"p"},"mac.__proto__")," is referring to the ",Object(c.b)("inlineCode",{parentName:"p"},"Macbook16.prototype")," and thus both hold the same properties whereas ",Object(c.b)("inlineCode",{parentName:"p"},"Macbook.prototype")," is again referring to ",Object(c.b)("inlineCode",{parentName:"p"},"Object.prototype")," thatsol"),Object(c.b)("h4",{id:"mac__proto__-\ufe0f-macbookprototype-\ufe0f-objectprototype-\ufe0f-null"},Object(c.b)("inlineCode",{parentName:"h4"},"mac.__proto__")," \u27a1\ufe0f ",Object(c.b)("inlineCode",{parentName:"h4"},"Macbook.prototype")," \u27a1\ufe0f ",Object(c.b)("inlineCode",{parentName:"h4"},"Object.prototype")," \u27a1\ufe0f ",Object(c.b)("inlineCode",{parentName:"h4"},"null")),Object(c.b)("p",null,"This is nothing but ",Object(c.b)("inlineCode",{parentName:"p"},"PROTOTYPE INHERITANCE")),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Some thoughts \ud83d\udca1")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("ul",{parentName:"div"},Object(c.b)("li",{parentName:"ul"},"ES6 introduced a constructor function which is synthetic sugar(Shorthand for complex structure) for a traditional class"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"__proto__")," is historical getter and setter for ",Object(c.b)("inlineCode",{parentName:"li"},"[[prototype]]")," ")))),Object(c.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),Object(c.b)("strong",{parentName:"h5"},"proto")," and prototype")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Both ",Object(c.b)("inlineCode",{parentName:"p"},"__proto__")," and ",Object(c.b)("inlineCode",{parentName:"p"},"prototype")," belong to the prototypal inheritance but both are not the same."),Object(c.b)("p",{parentName:"div"},Object(c.b)("inlineCode",{parentName:"p"},"__proto__")," is a property of ",Object(c.b)("inlineCode",{parentName:"p"},"class instance")," whereas prototype is a ",Object(c.b)("inlineCode",{parentName:"p"},"property")," of ",Object(c.b)("inlineCode",{parentName:"p"},"class constructor")))),Object(c.b)("p",null,"So far we have seen a prototype inheritance with constructor function and class. So the other way to add a prototype to object is using ",Object(c.b)("inlineCode",{parentName:"p"},"Object.create()")," method. "),Object(c.b)("p",null,"With this method, we can create a new object and specify what prototype of an object we want"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let macbook = {\n    touchbar: function() {},\n    touchId: function() {}\n}\n\nlet mac = Object.create(macbook);\nmac.__proto__; // {touchbar: \u0192, touchId: \u0192}\n")),Object(c.b)("h3",{id:"play-with-prototype"},"Play with prototype"),Object(c.b)("p",null,"We can experiment a lot with the ",Object(c.b)("inlineCode",{parentName:"p"},"prototype"),". let's see with one small example"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'// Lets create two object with different property\nlet MacbookPro = {\n    screenSize: "16",\n    touchId: true,\n    touchBar: true\n}\n\nlet Macbook = {\n     screenSize: "13"\n}\n\n// updating prototype\nMacbook.__proto__ = MacbookPro;\n\nMacbookPro.__proto__ =  // {constructor: \u0192, __defineGetter__: \u0192, __defineSetter__: \u0192, hasOwnProperty: \u0192, __lookupGetter__: \u0192, \u2026}\nMacbook.__proto__ // {screenSize: "16", touchId: true, touchBar: true}\n\nconsole.log(`My macbook screen size is ${Macbook.screenSize}`); // My macbook screen size is 13\nconsole.log(`Do my macbook have touchid ${Macbook.touchId}`); // Do my macbook have touchid\n')),Object(c.b)("p",null,"Whenever we try to access a property on the instance, the engine first searches locally to see if the property is defined on the object itself. if it can't find the property we're trying to access, the engine ",Object(c.b)("strong",{parentName:"p"},"walks down the prototype chain through")," the ",Object(c.b)("inlineCode",{parentName:"p"},"__proto__")," property!"),Object(c.b)("h2",{id:"prototype-methods-objects-without-__proto__"},"Prototype methods, objects without ",Object(c.b)("inlineCode",{parentName:"h2"},"__proto__")),Object(c.b)("hr",null),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"__proto__")," is considered outdated and somewhat deprecated (in browser-only part of the JavaScript standard)"),Object(c.b)(b,{highlightWord:"Object.create(proto[, descriptors])",mdxType:"GlowBullet"}," creates an empty object with given proto as __proto__ and optional property descriptors"),Object(c.b)(b,{highlightWord:"Object.getPrototypeOf(obj)",mdxType:"GlowBullet"}," returns the `__proto__` of obj"),Object(c.b)(b,{highlightWord:"Object.setPrototypeOf(obj, proto)",mdxType:"GlowBullet"}," sets the `__proto__` of obj to proto"),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Things to consider")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("ul",{parentName:"div"},Object(c.b)("li",{parentName:"ul"},"We can save memory by adding properties to the prototype that all instances can share it. instead of creating new properties in each instance"),Object(c.b)("li",{parentName:"ul"},"we should not mess up with instance by manipulating ",Object(c.b)("inlineCode",{parentName:"li"},"__proto__")," resulting in a lag in performance "),Object(c.b)("li",{parentName:"ul"},"We can achieve a circular prototype chain. If we try then JS will throw an error ",Object(c.b)("inlineCode",{parentName:"li"},"TypeError: Cyclic __proto__ value"))))))}O.isMDXComponent=!0},160:function(e,t,o){"use strict";o.d(t,"a",(function(){return s})),o.d(t,"b",(function(){return u}));var n=o(0),a=o.n(n);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},s=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(o),d=n,u=s["".concat(i,".").concat(d)]||s[d]||h[d]||r;return o?a.a.createElement(u,c(c({ref:t},p),{},{components:o})):a.a.createElement(u,c({ref:t},p))}));function u(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<r;p++)i[p]=o[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},161:function(e,t,o){"use strict";var n=o(0),a=o(35);t.a=function(){return Object(n.useContext)(a.a)}},163:function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));var n=o(161);function a(e){const{siteConfig:t}=Object(n.a)(),{baseUrl:o="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?o+e.slice(1):o+e}}}]);