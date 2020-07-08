(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{126:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return m}));var n=a(2),o=a(6),i=(a(0),a(160)),l=a(168),r={id:"module11_module",title:"Module",sidebar_label:"Module 11: Module"},s={id:"javascript/modules/module11_module",title:"Module",description:"1. What Happens When a Module Is Imported Twice?",source:"@site/docs/javascript/modules/m11_module.md",permalink:"/docs/javascript/modules/module11_module",lastUpdatedBy:"Abhin Pai",lastUpdatedAt:1594194370,sidebar_label:"Module 11: Module",sidebar:"docs",previous:{title:"Promises its super cool \ud83d\ude0e",permalink:"/docs/javascript/modules/module9_promise"},next:{title:"A story of Async and Await \ud83e\udd70",permalink:"/docs/javascript/modules/module15_async_await"}},c=[{value:"Core module features",id:"core-module-features",children:[{value:"\ud83d\udd38 Always <code>use strict</code>",id:"-always-use-strict",children:[]},{value:"\ud83d\udd38 Module-level scope",id:"-module-level-scope",children:[]},{value:"\ud83d\udd38 A module code is evaluated only the first time when imported",id:"-a-module-code-is-evaluated-only-the-first-time-when-imported",children:[]},{value:"\ud83d\udd38 HTML-style comment syntax is not supported in modules, although it works in classic scripts",id:"-html-style-comment-syntax-is-not-supported-in-modules-although-it-works-in-classic-scripts",children:[]},{value:"\ud83d\udd38 import.meta",id:"-importmeta",children:[]},{value:"\ud83d\udd38 In a module, <code>this</code> is undefined",id:"-in-a-module-this-is-undefined",children:[]},{value:"\ud83d\udd38 No <code>bare</code> modules allowed",id:"-no-bare-modules-allowed",children:[]}]},{value:"Build tools",id:"build-tools",children:[{value:"Build tools anatomy",id:"build-tools-anatomy",children:[]}]},{value:"Export and Import",id:"export-and-import",children:[{value:"Export before declarations",id:"export-before-declarations",children:[]},{value:"Export apart from declarations",id:"export-apart-from-declarations",children:[]},{value:"import <code>*</code>",id:"import-",children:[]},{value:"import <code>as</code>",id:"import-as",children:[]},{value:"Export <code>as</code>",id:"export-as",children:[]},{value:"Default export",id:"default-export",children:[]},{value:"The <code>default</code> name",id:"the-default-name",children:[]}]},{value:"Dynamic Imports",id:"dynamic-imports",children:[]}],p={rightToc:c};function m(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Questions \ud83e\udd14")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ol",{parentName:"div"},Object(i.b)("li",{parentName:"ol"},"What Happens When a Module Is Imported Twice?"),Object(i.b)("li",{parentName:"ol"},"What is the benefit of building tools?"),Object(i.b)("li",{parentName:"ol"},"Is it possible to export const function?"),Object(i.b)("li",{parentName:"ol"},"What is the purpose of modules?"),Object(i.b)("li",{parentName:"ol"},"What are the best practices of modules?")))),Object(i.b)("p",null,"JS modules (also known as \u201cES modules\u201d or \u201cECMAScript modules\u201d) are a major new feature, or rather a collection of new features. As our application grows bigger, we want to split it into multiple files, so-called ",Object(i.b)("inlineCode",{parentName:"p"},"modules"),". A module may contain a class or a library of functions for a specific purpose."),Object(i.b)("p",null,"Within a module, you can use the export keyword to export just about anything. You can export a const, a function, or any other variable binding or declaration. Just prefix the variable statement or declaration with export."),Object(i.b)("h2",{id:"core-module-features"},"Core module features"),Object(i.b)("p",null,"A module is just a file. One script is one module. As simple as that."),Object(i.b)("p",null,"\ud83d\udd38 ",Object(i.b)("inlineCode",{parentName:"p"},"export")," keyword labels variables and functions that should be accessible from outside the current module. ",Object(i.b)("br",null),"\n\ud83d\udd38 ",Object(i.b)("inlineCode",{parentName:"p"},"import")," allows the import of functionality from other modules. ",Object(i.b)("br",null)),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:'title="message.js"',title:'"message.js"'}),"// Exporting function\nexport function conveyMessage(message) {\n    console.log(message);\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:'title="home.js"',title:'"home.js"'}),"// importing function \nimport {conveyMessage} from './message.js'\n\nconveyMessage(\"Hello Beautiful People\");\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"import")," directive loads the module by path ",Object(i.b)("inlineCode",{parentName:"p"},"./message.js")," relative to the current file, and assigns exported function ",Object(i.b)("inlineCode",{parentName:"p"},"conveyMessage")," to the corresponding variable."),Object(i.b)("h3",{id:"-always-use-strict"},"\ud83d\udd38 Always ",Object(i.b)("inlineCode",{parentName:"h3"},"use strict")),Object(i.b)("p",null,"Modules always ",Object(i.b)("inlineCode",{parentName:"p"},"use strict"),", by default"),Object(i.b)("h3",{id:"-module-level-scope"},"\ud83d\udd38 Module-level scope"),Object(i.b)("p",null,"Each module has its own top-level scope. In other words, top-level variables and functions from a module are not accessible from an outside script"),Object(i.b)("p",null,"In order to use we need to export from one script and import it in another."),Object(i.b)("h3",{id:"-a-module-code-is-evaluated-only-the-first-time-when-imported"},"\ud83d\udd38 A module code is evaluated only the first time when imported"),Object(i.b)("p",null,"If the same module is imported into multiple other places or in the same script, its code is executed ",Object(i.b)("inlineCode",{parentName:"p"},"only the first time"),", then exports are given to all importers."),Object(i.b)("h3",{id:"-html-style-comment-syntax-is-not-supported-in-modules-although-it-works-in-classic-scripts"},"\ud83d\udd38 HTML-style comment syntax is not supported in modules, although it works in classic scripts"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Don\u2019t use HTML-style comment syntax in JavaScript!\nconst x = 42; \x3c!-- TODO: Rename x to y.\n// Use a regular single-line comment instead:\nconst x = 42; // TODO: Rename x to y.\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'// message.js\nexport console.log("Hello Hacker \ud83d\udc68\ud83c\udffb\u200d\ud83d\udcbb");\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Importing the same module in two different files\n\n// 1.js\nimport './message.js'; // Module is evaluated\n\n// 2.js\nimport './message.js'; // Ignore (Shows nothing)\n")),Object(i.b)("p",null,"Let's see with another example"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// hero.js\nexport let hero = {}; // waiting to feed object data from outside script\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// ironman.js\nimport { hero } from './hero.js';\nhero.name = 'Iron Man';\n\n// infinityWar.js\nimport { hero } from './hero.js';\nconsole.log(hero); // Iron Man\n")),Object(i.b)("p",null,"Changes made in ",Object(i.b)("inlineCode",{parentName:"p"},"ironman.js")," file are visible in ",Object(i.b)("inlineCode",{parentName:"p"},"infinityWar.js")),Object(i.b)("p",null,"So let's summarize, the module is executed only once. Exports are generated, and then they are shared between importers, so if something changes from one module will reflect in another imported module"),Object(i.b)("h3",{id:"-importmeta"},"\ud83d\udd38 import.meta"),Object(i.b)("p",null,"The object ",Object(i.b)("inlineCode",{parentName:"p"},"import.meta")," contains information about the current module."),Object(i.b)("p",null,"Its content depends on the environment. In the browser, it contains the URL of the script, or a current webpage URL if inside HTML"),Object(i.b)("h3",{id:"-in-a-module-this-is-undefined"},"\ud83d\udd38 In a module, ",Object(i.b)("inlineCode",{parentName:"h3"},"this")," is undefined"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"this")," within modules does not refer to the global ",Object(i.b)("inlineCode",{parentName:"p"},"this"),", and instead is ",Object(i.b)("inlineCode",{parentName:"p"},"undefined"),". (Use ",Object(i.b)("inlineCode",{parentName:"p"},"globalThis")," if you need access to the global this.)"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<script>\n  alert(this); // window\n<\/script>\n\n<script type="module">\n  alert(this); // undefined\n<\/script>\n')),Object(i.b)("p",null,"Compare it to non-module scripts, where this is a global object"),Object(i.b)("h3",{id:"-no-bare-modules-allowed"},"\ud83d\udd38 No ",Object(i.b)("inlineCode",{parentName:"h3"},"bare")," modules allowed"),Object(i.b)("p",null,"In the browser, the import must get either a ",Object(i.b)("inlineCode",{parentName:"p"},"relative")," or ",Object(i.b)("inlineCode",{parentName:"p"},"absolute")," URL. Modules without any path are called ",Object(i.b)("inlineCode",{parentName:"p"},"bare modules"),". Such modules are not allowed in ",Object(i.b)("inlineCode",{parentName:"p"},"import"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import {hero} from `marvel.js`; // Error base module. The import module must have a path\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Certain environments, like Node.js or bundle tools, allow bare modules, without any path, as they have their own ways for finding modules and hooks to fine-tune them. But browsers do not support bare modules yet.")),Object(i.b)("h2",{id:"build-tools"},"Build tools"),Object(i.b)("p",null,"In real-life, browser modules are rarely used in their ",Object(i.b)("inlineCode",{parentName:"p"},"raw")," form. Usually, we bundle them together with a special tool such as ",Object(i.b)("inlineCode",{parentName:"p"},"Webpack")," and deploy it to the production server."),Object(i.b)("p",null,"One of the benefits of using bundlers \u2013 they give more control over how modules are resolved, allowing bare modules and much more, like CSS/HTML modules."),Object(i.b)("h3",{id:"build-tools-anatomy"},"Build tools anatomy"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Take a ",Object(i.b)("inlineCode",{parentName:"li"},"main")," module, the one intended to be put in HTML ",Object(i.b)("inlineCode",{parentName:"li"},'<script type="module">')),Object(i.b)("li",{parentName:"ol"},"Analyze its dependencies: imports and then imports of imports etc."),Object(i.b)("li",{parentName:"ol"},"Build a single file with all modules (or multiple files, that\u2019s tunable), replacing native import calls with 4. 4. bundler functions so that it works. ",Object(i.b)("inlineCode",{parentName:"li"},"Special")," module types like HTML/CSS modules are also supported."),Object(i.b)("li",{parentName:"ol"},"In the process, other transformations and optimizations may be applied"),Object(i.b)("li",{parentName:"ol"},"Unreachable code removed."),Object(i.b)("li",{parentName:"ol"},"Unused exports removed ",Object(i.b)("inlineCode",{parentName:"li"},"tree-shaking"),"."),Object(i.b)("li",{parentName:"ol"},"Development-specific statements like console and debugger removed."),Object(i.b)("li",{parentName:"ol"},"Modern, bleeding-edge JavaScript syntax may be transformed into an older one with similar functionality using Babel."),Object(i.b)("li",{parentName:"ol"},"The resulting file is minified (spaces removed, variables replaced with shorter names, etc)."),Object(i.b)("li",{parentName:"ol"},"If we use bundle tools, then as scripts are bundled together into a single file (or few files), import/export statements inside those scripts are replaced by special bundler functions. So the resulting ",Object(i.b)("inlineCode",{parentName:"li"},"bundled")," script does not contain any import/export, it doesn\u2019t require ",Object(i.b)("inlineCode",{parentName:"li"},'type="module"'))),Object(i.b)("h2",{id:"export-and-import"},"Export and Import"),Object(i.b)("p",null,"Export and import directives have several syntax variants"),Object(i.b)("h3",{id:"export-before-declarations"},"Export before declarations"),Object(i.b)("p",null,"We can label any declaration as exported by placing ",Object(i.b)("inlineCode",{parentName:"p"},"export")," before it, be it a variable, function or a class"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'export let gadget = { laptop: \'MacBook\' }\n\nexport const THEME_COLOR = "#0000";\n\nexport function hello() { console.log("Hello") }\n\nexport class MyClass { }\n')),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Remember")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"We should not use the ",Object(i.b)("inlineCode",{parentName:"p"},"semicolon")," after exporting class/function"))),Object(i.b)("h3",{id:"export-apart-from-declarations"},"Export apart from declarations"),Object(i.b)("p",null,"We can declare class/function in the first place and then we can export them separately in bulk or in single. Or, technically we could put export above functions as well."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'function hello() { console.log("Hello") }\n\nclass MyClass { }\n\nexport {hello, myClass};\n')),Object(i.b)("h3",{id:"import-"},"import ",Object(i.b)("inlineCode",{parentName:"h3"},"*")),Object(i.b)("p",null,"Usually, we use ",Object(i.b)("inlineCode",{parentName:"p"},"{...}")," to import a list of items. If we want to import lots of items then we could probably use ",Object(i.b)("inlineCode",{parentName:"p"},"import *")," or ",Object(i.b)("inlineCode",{parentName:"p"},"import * as <object>")," which will return all the imports in a single object"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Individual Import \nimport {hello, myClass} from './xyz.js';\n\n// Import all together\nimport * from './xyz.js';\n\n// Alias to the imported object \nimport * as myImports  from './xyz.js';\n")),Object(i.b)("h3",{id:"import-as"},"import ",Object(i.b)("inlineCode",{parentName:"h3"},"as")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"as")," keyword can be used in the import statement to alias our import module"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import {hello as messageFunc, myClass as MainClass} from './xyz.js';\nimport * as myImports  from './xyz.js';\n")),Object(i.b)("h3",{id:"export-as"},"Export ",Object(i.b)("inlineCode",{parentName:"h3"},"as")),Object(i.b)("p",null,"Like ",Object(i.b)("inlineCode",{parentName:"p"},"import as")," it's similar to the export directive "),Object(i.b)("h3",{id:"default-export"},"Default export"),Object(i.b)("p",null,"Sometimes we may box all the functions/methods, objects, or constants into a single module to make it more clean and neat in that case ",Object(i.b)("inlineCode",{parentName:"p"},"export default")," is a JOHN RAY to make one thing per module."),Object(i.b)("p",null,"default export is possible with functions, class, objects, enums, etc."),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Remember")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"There can be only one default mode in a single file. But we can have other optional exports into the single file"),Object(i.b)("li",{parentName:"ul"},"If your importing a default module then it's not required to use ",Object(i.b)("inlineCode",{parentName:"li"},"{}"))),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:"{1}","{1}":!0}),"export default class Hero { ... }\n\nimport { Hero } from './Hero.js'; // Throws an error\nimport Hero from './Hero.js';\n")),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"For default export, we can always choose the name when importing but whereas in named export the name has to be same as defined")))),Object(i.b)("h3",{id:"the-default-name"},"The ",Object(i.b)("inlineCode",{parentName:"h3"},"default")," name"),Object(i.b)("p",null,"In some situations, the ",Object(i.b)("inlineCode",{parentName:"p"},"default")," keyword is used to reference the ",Object(i.b)("inlineCode",{parentName:"p"},"default export")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"class Hero { ... }\n\nexport { Hero as default } \n")),Object(i.b)("h2",{id:"dynamic-imports"},"Dynamic Imports"),Object(i.b)("p",null,"So far we have seen the import and export which are called ",Object(i.b)("inlineCode",{parentName:"p"},"Static")," where the syntax of these static import/export in simple but strict"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"import(module)")," expression loads the module and returns a promise that resolves into a module object that contains all its exports. It can be called from any place in the code."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js",metastring:"{7}","{7}":!0}),'let modulePath = prompt("Which module to load?");\n\nimport(modulePath)\n  .then(obj => <module object>)\n  .catch(err => <loading error, e.g. if no such module>)\n\n// Or we also load inside an async function\n\nlet module = await import(modulePath)\n')),Object(i.b)("p",null,"Dynamically importing module using ",Object(i.b)("inlineCode",{parentName:"p"},"Promise.all()")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"Promise.all(\n  ['module1', 'module2', 'module3'].map((x) => System.import(x))\n).then(function ([module1, module2, module3]) {\n  // my code...\n});\n")),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"We can't use static imports anywhere in that. In case if we want to use the imports we can achieve that using ",Object(i.b)("inlineCode",{parentName:"p"},"import(module)"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"webpack has its own version of ",Object(i.b)("inlineCode",{parentName:"p"},"import()")," that cleverly splits the imported module into its own chunk, separate from the main bundle.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Although ",Object(i.b)("inlineCode",{parentName:"p"},"import()")," looks like a function call, it\u2019s a special syntax that just happens to use parentheses (similar to super())."),Object(i.b)("p",{parentName:"li"},"  So we can\u2019t copy ",Object(i.b)("inlineCode",{parentName:"p"},"import")," to a variable or use ",Object(i.b)("inlineCode",{parentName:"p"},"call/apply")," with it. It\u2019s not a function."))))),Object(i.b)(l.a,{styleClass:"heading-1",mdxType:"CustomText"},"Reference"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://v8.dev/features/modules"}),"V8 Blog")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://dmitripavlutin.com/javascript-module-import-twice/"}),"dmitripavlutin"))))}m.isMDXComponent=!0},160:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return u}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,u=m["".concat(l,".").concat(d)]||m[d]||b[d]||i;return a?o.a.createElement(u,r(r({ref:t},c),{},{components:a})):o.a.createElement(u,r({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:n,l[1]=r;for(var c=2;c<i;c++)l[c]=a[c];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},168:function(e,t,a){"use strict";var n=a(0),o=a.n(n);t.a=({children:e,styleClass:t})=>o.a.createElement("p",{className:t},e)}}]);