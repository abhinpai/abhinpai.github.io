(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{114:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"metadata",(function(){return o})),t.d(a,"rightToc",(function(){return b})),t.d(a,"default",(function(){return s}));var n=t(2),r=t(7),l=(t(0),t(173)),i=t(178),c={id:"module14_map_weakmap",title:"Map and WeakMap",sidebar_label:"Module 14: Map and WeakMap"},o={id:"javascript/modules/module14_map_weakmap",isDocsHomePage:!1,title:"Map and WeakMap",description:"1. Why Map when there is a Object",source:"@site/docs/javascript/modules/m14_map_weakmap.md",permalink:"/docs/javascript/modules/module14_map_weakmap",lastUpdatedBy:"Abhin Pai",lastUpdatedAt:1594401132,sidebar_label:"Module 14: Map and WeakMap",sidebar:"docs",previous:{title:"Set and Weakset",permalink:"/docs/javascript/modules/module13_set_weakset"},next:{title:"A story of Async and Await \ud83e\udd70",permalink:"/docs/javascript/modules/module15_async_await"}},b=[{value:"Map",id:"map",children:[{value:"Methods and properties are",id:"methods-and-properties-are",children:[]},{value:"Salient features of Map",id:"salient-features-of-map",children:[]},{value:"Iteration over Map",id:"iteration-over-map",children:[]},{value:"Object.entries: Map from Object",id:"objectentries-map-from-object",children:[]}]},{value:"WeakMap",id:"weakmap",children:[{value:"WeakMap methods",id:"weakmap-methods",children:[]},{value:"Applications of WeakMap",id:"applications-of-weakmap",children:[]}]}],p={rightToc:b};function s(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},p,t,{components:a,mdxType:"MDXLayout"}),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Questions \ud83e\udd14")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("ol",{parentName:"div"},Object(l.b)("li",{parentName:"ol"},"Why Map when there is a Object"),Object(l.b)("li",{parentName:"ol"},"Do Map allow ",Object(l.b)("inlineCode",{parentName:"li"},"NaN")," as a key?"),Object(l.b)("li",{parentName:"ol"},"Map vs Object"),Object(l.b)("li",{parentName:"ol"},"Map vs WeakMap"),Object(l.b)("li",{parentName:"ol"},"What are the application of WeakMap")))),Object(l.b)("h2",{id:"map"},"Map"),Object(l.b)("hr",null),Object(l.b)("p",null,"Map is a key/value data structure introduced in ES6. Map can use any data type(primitive and objects) as a key and can maintain the order of its entries. Maps have elements of both Objects (a unique key/value pair collection), but are more similar to Objects conceptually."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'let myMap = new Map();\nmyMap.set("myKey", "myValue"); // Key as a primitive datatype (string)\n\nlet myObj = { myKey: "myValue" };\nmyMap.set(myObj, "myValue"); // Key as a Object\n\nmyMap.get("myKey"); // myValue\nmyMap.get(myObj); // myValue\n')),Object(l.b)("h3",{id:"methods-and-properties-are"},"Methods and properties are"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"map.set(key, value)")," \u2013 stores the value by the key"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"map.get(key)")," \u2013 returns the value by the key, undefined if key doesn\u2019t exist in map"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"map.has(key)")," \u2013 returns true if the key exists, false otherwise"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"map.delete(key)")," \u2013 removes the value by the key"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"map.clear()")," \u2013 removes everything from the map"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"map.size")," \u2013 returns the current element count")),Object(l.b)("h3",{id:"salient-features-of-map"},"Salient features of Map"),Object(l.b)("p",null,"\ud83d\udd38 The iteration goes in the same order as the values were inserted. Map preserves this order, unlike a regular Object, So ",Object(l.b)("inlineCode",{parentName:"p"},"[...map]")," or ",Object(l.b)("inlineCode",{parentName:"p"},"[...map.keys()]")," has a particular order ",Object(l.b)("br",null),"\n\ud83d\udd38 Map key comparison is roughly the same as strict equality ",Object(l.b)("inlineCode",{parentName:"p"},"===")," which uses ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://tc39.es/ecma262/#sec-samevaluezero"}),"SameValueZero")," Algorithm, but the difference is that ",Object(l.b)("inlineCode",{parentName:"p"},"NaN")," is considered equal to ",Object(l.b)("inlineCode",{parentName:"p"},"NaN"),". So ",Object(l.b)("inlineCode",{parentName:"p"},"NaN")," can be used as the key as well.  ",Object(l.b)("br",null),"\n\ud83d\udd38 Every ",Object(l.b)("inlineCode",{parentName:"p"},"map.set")," call returns map itself, so we can ",Object(l.b)("inlineCode",{parentName:"p"},"chain")," the calls ",Object(l.b)("br",null)),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"map.set('hero', 'IronMan')\n  .set(InfinityStones, 5)\n  .set(IsIronManAlive, false);\n")),Object(l.b)("h3",{id:"iteration-over-map"},"Iteration over Map"),Object(l.b)("p",null,"For looping over a map, there are 3 methods:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"map.keys()")," \u2013 returns an iterable for keys"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"map.values()")," \u2013 returns an iterable for values"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"map.entries()")," \u2013 returns an iterable for entries ",Object(l.b)("inlineCode",{parentName:"li"},"[key, value]"),", it\u2019s used by default in ",Object(l.b)("inlineCode",{parentName:"li"},"for..of"))),Object(l.b)("h3",{id:"objectentries-map-from-object"},"Object.entries: Map from Object"),Object(l.b)("p",null,"When a Map is created, we can pass an array (or another iterable) with key/value pairs for initialization"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// array of [key, value] pairs\nlet map = new Map([\n  ['hero',  'Batman'],\n  [007,    'James Bond'],\n  [true, 'Indian']\n]);\n\nconsole.log(map.get('1')); // str1\n")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Map"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Object"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Key Type"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Accepts any type as Key"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Only accept string as a key")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Traversal"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Maps are traversal can traverse easily with for...of"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Traversal is possible by obtaining key")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Default Values"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"None"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Inherited keys from object")))),Object(l.b)("h2",{id:"weakmap"},"WeakMap"),Object(l.b)("hr",null),Object(l.b)("p",null,"JavaScript engine stores a value in memory while it is reachable (and can potentially be used)"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:"{5}","{5}":!0}),'let superHero = {name: "Batman"};\nconsole.log(superHero); // Batman\n\n// Override the reference\nsuperHero = null; // This value will be garbage collected\n')),Object(l.b)("p",null,"Usually, properties of an object or elements of an array or another data structure are considered reachable and kept in memory while that data structure is in memory."),Object(l.b)("p",null,"For instance, if we put an object into an array, then while the array is alive, the object will be alive as well, even if there are no other references to it."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:"{5}","{5}":!0}),'let dc = {name: "Batman"};\nlet superHero = [dc];\n\n// Override the reference\ndc = null;\n// dc is stored inside the array, so it won\'t be garbage-collected\n// we can get it as superHero[0]\n')),Object(l.b)("p",null,"Similar to that, if we use an object as the key in a regular Map, then while the Map exists, that object exists as well. It occupies memory and may not be garbage collected."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'let dc = {name: "Batman"};\nlet superHero = new Map();\nsuperHero.set(dc, "----");\n\n// Override the reference\ndc = null;\n// dc is stored inside the map, so it won\'t be garbage-collected\n// we can get it as superHero.keys()\n')),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"WeakMap")," is fundamentally different in this aspect. It doesn\u2019t prevent garbage-collection of key objects"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"WeakMap")," do allow only ",Object(l.b)("inlineCode",{parentName:"p"},"object")," as a key. Primitive values for a key is not acceptable"),Object(l.b)("p",null,"Similarly like ",Object(l.b)("inlineCode",{parentName:"p"},"map")," if we use an object as the key in it, and there are no other references to that object \u2013 it will be removed from memory (and from the map) automatically."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'let dc = {name: "Batman"};\n// highlight-next-line\nlet superHero = new WeakMap();\nsuperHero.set(dc, "----");\n\n// Override the reference\n// highlight-next-line\ndc = null; // dc is garbage garbage-collected\n')),Object(l.b)("h3",{id:"weakmap-methods"},"WeakMap methods"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"weakMap.get(key)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"weakMap.set(key, value)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"weakMap.delete(key)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"weakMap.has(key)"))),Object(l.b)("p",null,"WeakMap does not support iteration methods and property keys(), values(), entries() and size so there\u2019s no way to get all keys/values and total size from it."),Object(l.b)("h3",{id:"applications-of-weakmap"},"Applications of WeakMap"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"WeakMap can be used when there is a limited memory"),Object(l.b)("li",{parentName:"ul"},"This can be used for ",Object(l.b)("inlineCode",{parentName:"li"},"caching"),". Usually in caching service we refresh the contents with new content and delete the older one ")),Object(l.b)("div",{className:"admonition admonition-info alert alert--info"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Some Facts about WeakMap")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("ul",{parentName:"div"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"WeakMap")," in javascript does not hold any keys or values, it just manipulate key value using a unique id and define property to key object. because it define property to key by method Object.defineProperty(), key must not be primitive type.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"WeaKMap does not contain actually key value pairs, we cannot get length property of weakmap.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Manipulated value is assigned back to key, garbage collector easily can collect key if it in no use"))),Object(l.b)("pre",{parentName:"div"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// sample implementation code by Google\n\nif (typeof WeakMap != undefined) {\n  return;\n}\n(function () {\n  var WeakMap = function () {\n    this.__id = '__weakmap__';\n  };\n\n  weakmap.set = function (key, value) {\n    var pVal = key[this.__id];\n    if (pVal && pVal[0] == key) {\n      pVal[1] = value;\n    } else {\n      Object.defineProperty(key, this.__id, { value: [key, value] });\n      return this;\n    }\n  };\n\n  window.WeakMap = WeakMap;\n})();\n\n// https://github.com/googlearchive/WeakMap/blob/master/weakmap.js\n")))),Object(l.b)(i.a,{styleClass:"heading-1",mdxType:"CustomText"},"Reference"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://javascript.info/weakmap-weakset"}),"Javascript  Info")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://stackoverflow.com/a/60108544/8555490"}),"Stackoverflow Answer on Map vs Object"))))}s.isMDXComponent=!0},173:function(e,a,t){"use strict";t.d(a,"a",(function(){return s})),t.d(a,"b",(function(){return d}));var n=t(0),r=t.n(n);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b=r.a.createContext({}),p=function(e){var a=r.a.useContext(b),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},s=function(e){var a=p(e.components);return r.a.createElement(b.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},u=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),s=p(t),u=n,d=s["".concat(i,".").concat(u)]||s[u]||m[u]||l;return t?r.a.createElement(d,c(c({ref:a},b),{},{components:t})):r.a.createElement(d,c({ref:a},b))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,i=new Array(l);i[0]=u;var c={};for(var o in a)hasOwnProperty.call(a,o)&&(c[o]=a[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var b=2;b<l;b++)i[b]=t[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},178:function(e,a,t){"use strict";var n=t(0),r=t.n(n);a.a=({children:e,styleClass:a})=>r.a.createElement("p",{className:a},e)}}]);