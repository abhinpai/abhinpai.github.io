(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{120:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return b}));var a=t(2),i=t(6),o=(t(0),t(163)),r={id:"module4_function",title:"Function",sidebar_label:"Module 4: Function"},l={id:"javascript/modules/module4_function",title:"Function",description:"1. How arrow function is different from regular function",source:"@site/docs/javascript/modules/m4_function.md",permalink:"/docs/javascript/modules/module4_function",lastUpdatedBy:"Abhin Pai",lastUpdatedAt:1594480361,sidebar_label:"Module 4: Function",sidebar:"docs",previous:{title:"Does type matters \ud83e\udd14",permalink:"/docs/javascript/modules/module3_datatypes"},next:{title:"Prototype Inheritance \u26d3",permalink:"/docs/javascript/modules/module5_prototype"}},c=[{value:"Regular Function",id:"regular-function",children:[{value:"Pure Function",id:"pure-function",children:[]}]},{value:"Function Parameter",id:"function-parameter",children:[{value:"Regular function parameters",id:"regular-function-parameters",children:[]},{value:"Default parameters",id:"default-parameters",children:[]},{value:"Parameter destructuring",id:"parameter-destructuring",children:[]},{value:"Arguments object",id:"arguments-object",children:[]},{value:"Rest parameters",id:"rest-parameters",children:[]}]},{value:"Arrow (Fat Arrow) Function",id:"arrow-fat-arrow-function",children:[]},{value:"<code>IIFE</code> Immediately Invoked Function Expression",id:"iife-immediately-invoked-function-expression",children:[]},{value:"Decorators and forwarding",id:"decorators-and-forwarding",children:[]},{value:"<code>Call</code>, <code>apply</code> and <code>bind</code>",id:"call-apply-and-bind",children:[{value:"<code>call</code> and <code>apply</code> methods also known as <code>Function borrowing</code>",id:"call-and-apply-methods-also-known-as-function-borrowing",children:[]},{value:"<code>bind</code> method",id:"bind-method",children:[]}]},{value:"Method Chaining",id:"method-chaining",children:[]},{value:"Scheduling: <code>setTimeout</code> and <code>setInterval</code>",id:"scheduling-settimeout-and-setinterval",children:[{value:"setTimeout()",id:"settimeout",children:[]},{value:"setInterval()",id:"setinterval",children:[]}]},{value:"Function Composition",id:"function-composition",children:[]},{value:"Function Currying",id:"function-currying",children:[{value:"So why Currying?",id:"so-why-currying",children:[]},{value:"Function currying using <code>function binding</code> method (<code>bind</code>)",id:"function-currying-using-function-binding-method-bind",children:[]}]}],s={rightToc:c};function b(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Questions \ud83e\udd14")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("ol",{parentName:"div"},Object(o.b)("li",{parentName:"ol"},"How arrow function is different from regular function"),Object(o.b)("li",{parentName:"ol"},"Explain ",Object(o.b)("inlineCode",{parentName:"li"},"call"),", ",Object(o.b)("inlineCode",{parentName:"li"},"apply")," and ",Object(o.b)("inlineCode",{parentName:"li"},"bind")),Object(o.b)("li",{parentName:"ol"},"What is IIFE"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"How do you return multiple values from a function"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),' let song = {\n     name: "Jai Ho",\n     composer: "A.R.Rehman",\n     getSong: function () { console.log(this.name)}\n }\n let getSongDetails = () =>  { return ({...song})}\n let {composer, getSong} = getSongDetails();\n getSong(); // Jai Ho\n'))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"How do you use the optional argument with an optional callback"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function sampleMethod(...args) {\n    let message = args[0];\n    console.log(message);\n    let callback = args[2];\n    callback(args[1]); // calling callback method\n}\nlet logError = (err) => console.log(err);\nsampleMethod("Executed Sample Message", "Hey i got a problem", logError);\n// Executed Sample Message\n// Hey i got a problem\n'))),Object(o.b)("li",{parentName:"ol"},"What is the callback function"),Object(o.b)("li",{parentName:"ol"},"What is the benefit of ",Object(o.b)("inlineCode",{parentName:"li"},"IIFE")),Object(o.b)("li",{parentName:"ol"},"What are the different ways to declare a method?"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"setInterval")," vs ",Object(o.b)("inlineCode",{parentName:"li"},"setTimeout")),Object(o.b)("li",{parentName:"ol"},"How do you achieve function chaining "),Object(o.b)("li",{parentName:"ol"},"What is High Order Function")))),Object(o.b)("h2",{id:"regular-function"},"Regular Function"),Object(o.b)("hr",null),Object(o.b)("p",null,"Function in programming is one of the most basic elements. It is a set of statements that perform some activity to get the result. In lots of cases, the action is performed using the data which are provided as input. The statements in the function are executed every time the function is invoked."),Object(o.b)("p",null,"We may define functions in two different ways."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// 1\nfunction sayHi(name) {\n    return 'Hi'+name;\n}\n\n// 2\nvar sayHi = function (name) {\n    return 'Hi' + name;\n}\n\n")),Object(o.b)("h3",{id:"pure-function"},"Pure Function"),Object(o.b)("p",null,"The function always returns the same result if the same arguments are passed in. It does not depend on any state, or data, change during a program\u2019s execution. It must only depend on its input arguments.\nThe function does not produce any observable side effects such as network requests, input and output devices, or data mutation."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const sum = (x, y) => x+y;\n")),Object(o.b)("h2",{id:"function-parameter"},"Function Parameter"),Object(o.b)("hr",null),Object(o.b)("p",null,"The function accesses the outer world using its parameters."),Object(o.b)("h3",{id:"regular-function-parameters"},"Regular function parameters"),Object(o.b)("p",null,"A JavaScript function can have any number of parameters just like any other programming languages"),Object(o.b)("h3",{id:"default-parameters"},"Default parameters"),Object(o.b)("p",null,"The default parameter is very useful in a more complex application. When we don't have any clarity about the parameter what will that be then its better to define a default parameter."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function helloName(name = "Abhin Pai") { console.log(name) }\nhelloName(); // Abhin Pai\n')),Object(o.b)("h3",{id:"parameter-destructuring"},"Parameter destructuring"),Object(o.b)("p",null,"Parameter destructuring one can destructure inline the parameter\u2019s objects or arrays."),Object(o.b)("p",null,"This feature makes it useful to extract just a few properties from the parameter"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function helloDeveloper({ name = "Abhin Pai", from } = {}) { \n    console.log(`${name} from ${from}`) \n}\nhelloDeveloper({from: "India"}); // Abhin Pai from India\n')),Object(o.b)("h3",{id:"arguments-object"},"Arguments object"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Arguments")," is the special object, which holds all the invocation arguments in an array-like object for a function"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function helloDeveloper(){\n    console.log(arguments);\n}\nhelloDeveloper("This is sample arguments"); // Arguments ["This is sample arguments", callee: \u0192, Symbol(Symbol.iterator): \u0192]\n')),Object(o.b)("h3",{id:"rest-parameters"},"Rest parameters"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"rest")," parameter lets you collect all the arguments of the function call into an array."),Object(o.b)("p",null,"Learn more about rest operator from this ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"module8_destruct#rest-operator"}),"link")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'let developerInfo = (...args) => consol.log(`Hi there i am ${args[0]}, I am from ${args[1]}`);\ndeveloperInfo("Abhin Pai",  "India");\n')),Object(o.b)("h2",{id:"arrow-fat-arrow-function"},"Arrow (Fat Arrow) Function"),Object(o.b)("hr",null),Object(o.b)("p",null,"Arrow functions are not just a ",Object(o.b)("inlineCode",{parentName:"p"},"shorthand")," for writing small stuff. They have some very specific and useful features."),Object(o.b)("p",null,"We can come up with various scenario where we can find a function which executes somewhere in our service. In such a case, arrow functions will come handy"),Object(o.b)("p",null,"Its very simple to declare an and use the arrow function"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'let printMessage = () => console.log("Hello Hackers");\nprintMessage(); // Hello Hackers\n')),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Things to remember about Arrow Function")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("ol",{parentName:"div"},Object(o.b)("li",{parentName:"ol"},"An arrow function does not have ",Object(o.b)("inlineCode",{parentName:"li"},"this"),". If we try to access ",Object(o.b)("inlineCode",{parentName:"li"},"this")," inside an arrow function then the function will give result ",Object(o.b)("inlineCode",{parentName:"li"},"undefined"))),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'let MyObject = {\n    name = "Abhin Pai",\n    printMyName = () => { console.log("Hello")}\n}\n\nMyObject.printMyName(); // My name is undefined\\\n')),Object(o.b)("ol",Object(a.a)({parentName:"div"},{start:2}),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Arrow function can't be used as constructor function which you can't create an instance for an arrow function using ",Object(o.b)("inlineCode",{parentName:"p"},"this"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Arrow has no ",Object(o.b)("inlineCode",{parentName:"p"},"arguments")," variable "))),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function regularFunction(arg) { console.log(arguments)}\nregularFunction("Hello There"); // Arguments ["Hello", callee: \u0192, Symbol(Symbol.iterator): \u0192]\n\nlet arrowFunction = (arg) => console.log(arguments);\narrowFunction("Hello There"); // arguments are not defined\n')),Object(o.b)("p",{parentName:"div"},"But this is great for ",Object(o.b)("inlineCode",{parentName:"p"},"decorates"),". when we need to forward a call with the current this and arguments. "),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function decorator(f, ms) {\n  return function() {\n    setTimeout(() => f.apply(this, arguments), ms)\n  };\n}\n\nfunction message(who) {\n  alert('Hello, ' + who);\n}\n\nlet hello = decorator(message, 3000);\nhello(\"People\"); // Hello, People after 2 seconds\n")),Object(o.b)("p",{parentName:"div"},"And the same with arrow function we can trim the no of lines"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function decorator(f, ms) {\n  return function(...args) {\n    let ctx = this;\n    setTimeout(function() {\n      return f.apply(ctx, args);\n    }, ms);\n  };\n}\n")),Object(o.b)("p",{parentName:"div"},"Here we had to create additional variables ",Object(o.b)("inlineCode",{parentName:"p"},"args")," and ",Object(o.b)("inlineCode",{parentName:"p"},"ctx")," so that the function inside setTimeout could take them."))),Object(o.b)("h2",{id:"iife-immediately-invoked-function-expression"},Object(o.b)("inlineCode",{parentName:"h2"},"IIFE")," Immediately Invoked Function Expression"),Object(o.b)("hr",null),Object(o.b)("p",null,"As we know that functions are one of the building blocks of any programming language and JavaScript has taken the Functions to a whole new level."),Object(o.b)("p",null,"Functions that are executed as soon as they are mounted, these functions are known as Immediately Invoked Function Expressions or ",Object(o.b)("inlineCode",{parentName:"p"},"IIFEs"),"."),Object(o.b)("p",null,"The syntax of ",Object(o.b)("inlineCode",{parentName:"p"},"IIFEs")," will be encapsulated inside the parentheses for which explicit function call is not required"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'(function() { console.log("Hello Beautiful People")})(); // Hello beautiful people \n')),Object(o.b)("p",null,"In the above example, we have demonstrated how ",Object(o.b)("inlineCode",{parentName:"p"},"IIFE")," will look like and as soon as we declare and mounted into the stack it will get execute the function body."),Object(o.b)("p",null,"Any regular function we can turn into ",Object(o.b)("inlineCode",{parentName:"p"},"IIFE")),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Things to remember")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("ol",{parentName:"div"},Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"IIFE")," follow their own scope like any other function/variable in JavaScript.")),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function Message() {\n    console.log("This is beginning");\n    (function() { console.log("Hey there"); })();\n    console.log("This is end");\n}\n\nmessage();\n// This is beginning\n// Hey there\n// This is end\n')),Object(o.b)("ol",Object(a.a)({parentName:"div"},{start:2}),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"IIFEs")," have there owned scope i.e. the variables you declare in the Function Expression will not be available outside the function."),Object(o.b)("li",{parentName:"ol"},"Similarly to other function ",Object(o.b)("inlineCode",{parentName:"li"},"IIFEs")," can also be named or anonymous, but even if an ",Object(o.b)("inlineCode",{parentName:"li"},"IIFE")," does have a name it is impossible to refer/invoke it"),Object(o.b)("li",{parentName:"ol"},"IIFEs can also have parameters"),Object(o.b)("li",{parentName:"ol"},"Explicitly it is not required to define return statements to an arrow function. Arrow function will do it for you out of the box")),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"(function WhatsTheTimeNow(date) { console.log()})(new Date().toTimeString());\n")))),Object(o.b)("h2",{id:"decorators-and-forwarding"},"Decorators and forwarding"),Object(o.b)("hr",null),Object(o.b)("p",null,"A decorator is simply a way of wrapping one piece of code with another \u2014 literally ",Object(o.b)("inlineCode",{parentName:"p"},"decorating")," it. This is a concept you might well have heard of previously as functional composition or higher-order functions."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function doSomething(name) { // A usual function\n  console.log('Hello, ' + name);\n}\n\nfunction loggingDecorator(wrapped) { // decorator function\n  return function() {\n    console.log('Starting');\n    const result = wrapped.apply(this, arguments);\n    console.log('Finished');\n    return result;\n  }\n}\n\nlet wrapped = loggingDecorator(doSomething); // calling decorator function by passing a regular function as an argument\nwrapped();\n// Starting\n// Hello, undefined\n// Finished\n")),Object(o.b)("p",null,"Decorator function can also be treated as high order function"),Object(o.b)("p",null,"For more details check out decorator example in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://javascript.info/call-apply-decorators"}),"JavascriptInfo")),Object(o.b)("h2",{id:"call-apply-and-bind"},Object(o.b)("inlineCode",{parentName:"h2"},"Call"),", ",Object(o.b)("inlineCode",{parentName:"h2"},"apply")," and ",Object(o.b)("inlineCode",{parentName:"h2"},"bind")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"call-and-apply-methods-also-known-as-function-borrowing"},Object(o.b)("inlineCode",{parentName:"h3"},"call")," and ",Object(o.b)("inlineCode",{parentName:"h3"},"apply")," methods also known as ",Object(o.b)("inlineCode",{parentName:"h3"},"Function borrowing")),Object(o.b)("p",null,"Every object in the javascript will have access to the call method out of the box which makes developer life easy."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"call")," and ",Object(o.b)("inlineCode",{parentName:"p"},"apply")," are very similar\u2014they invoke a function with a specified context."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"call")," and ",Object(o.b)("inlineCode",{parentName:"p"},"apply")," method is also called as Function borrowing meaning you are borrowing a method from object function or any other function which will then take a context that is passed in the method parameter and on later part we can call the method on behalf of the passed context"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'let developer = {\n  name: "Abhin Pai",\n  url: "www.abhinpai.github.io"\n}\n\nfunction developerDetails() {\n  // highlight-next-line\n  console.log(`${this.name} you can reach me via ${this.url}`)\n}\n\n// highlight-start\ndeveloperDetails.call(developer); // Abhin Pai you can reach me via www.abhinpai.github.io\ndeveloperDetails.apply(developer); // Abhin Pai you can reach me via www.abhinpai.github.io\n// highlight-end\n')),Object(o.b)("p",null,"In the above code ",Object(o.b)("inlineCode",{parentName:"p"},"this")," is referring to the object developer because we have passed developer as a current reference object and the output of call and apply method is same the only difference of ",Object(o.b)("inlineCode",{parentName:"p"},"call")," and ",Object(o.b)("inlineCode",{parentName:"p"},"apply")," is the second argument"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'let developer = {\n  name: "Abhin Pai",\n  url: "www.abhinpai.github.io"\n}\n\nfunction developerDetails(country) {\n  // highlight-next-line\n  console.log(`${this.name} you can reach me via ${this.url} from ${country}`)\n}\n\n// highlight-start\ndeveloperDetails.call(developer, "India"); // Abhin Pai you can reach me via www.abhinpai.github.io from India\ndeveloperDetails.apply(developer, ["India"]); // Abhin Pai you can reach me via www.abhinpai.github.io from India\n// highlight-end\n')),Object(o.b)("p",null,"If you observe the above code snippet ",Object(o.b)("inlineCode",{parentName:"p"},"developerDetails")," is expecting one more additional argument ",Object(o.b)("inlineCode",{parentName:"p"},"country")," which we are passing via ",Object(o.b)("inlineCode",{parentName:"p"},"call")," and ",Object(o.b)("inlineCode",{parentName:"p"},"apply")," method."),Object(o.b)("p",null,"Where ",Object(o.b)("inlineCode",{parentName:"p"},"call")," method allows passing the argument as an independent ",Object(o.b)("inlineCode",{parentName:"p"},"string")," but in ",Object(o.b)("inlineCode",{parentName:"p"},"apply")," method we need to pass 2 and further arguments in an array of string"),Object(o.b)("h3",{id:"bind-method"},Object(o.b)("inlineCode",{parentName:"h3"},"bind")," method"),Object(o.b)("p",null,"Even bind method is similar to the Function borrowing methods but bind method buckle up with an object that passed as an argument to it and return the copy of that method which can be used in later part of code"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),' let developer = {\n  name: "Abhin Pai",\n  url: "www.abhinpai.github.io"\n}\n\nfunction developerDetails(country) {\n  // highlight-next-line\n  console.log(`${this.name} you can reach me via ${this.url} from ${country}`)\n}\n\n// highlight-next-line\nlet devDetails = developerDetails.bind(developer, "India");\ndevDetails(); // Abhin Pai you can reach me via www.abhinpai.github.io from India\n')),Object(o.b)("p",null,"We can also pass the additional parameters via ",Object(o.b)("inlineCode",{parentName:"p"},"bind")," methods like ",Object(o.b)("inlineCode",{parentName:"p"},"call")," and ",Object(o.b)("inlineCode",{parentName:"p"},"apply")),Object(o.b)("h2",{id:"method-chaining"},"Method Chaining"),Object(o.b)("hr",null),Object(o.b)("p",null,"There are different reasons for method chaining for different people. One of the major reasons for chaining methods is to ensure a cleaner and more readable code"),Object(o.b)("p",null,"Method chaining is a mechanism of calling a method on another method of the same object"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class SnacksFactory {\n  constructor() {\n    this.ingredients = [];\n  }\n\n  addIngredient = (ingredient) => {\n    this.ingredients.push(ingredient);\n    // highlight-next-line\n    return this;\n  }\n\n  getIngredients = () => {\n    if (!this.ingredients.length) {\n     console.log('There is no ingredient in this recipe');\n   } else {\n     console.log(this.ingredients.toString());\n   }\n  }\n}\n\n const snacks = new SnacksFactory();\n\n snacks\n .addIngredient(\ud83c\udf5f)\n .addIngredient(\ud83c\udf54)\n .addIngredient(\ud83e\udd6a)\n .getIngredients(); // [\ud83c\udf5f, \ud83c\udf54, \ud83e\udd6a]\n")),Object(o.b)("p",null," In the above example, we highlighted the ",Object(o.b)("inlineCode",{parentName:"p"},"addIngredient")," method which returns the current object i.e ",Object(o.b)("inlineCode",{parentName:"p"},"this")," which enables us to chain the methods. If we don't return ",Object(o.b)("inlineCode",{parentName:"p"},"this")," from the method ",Object(o.b)("inlineCode",{parentName:"p"},"addIngredient")," chining will throw an exception"),Object(o.b)("h2",{id:"scheduling-settimeout-and-setinterval"},"Scheduling: ",Object(o.b)("inlineCode",{parentName:"h2"},"setTimeout")," and ",Object(o.b)("inlineCode",{parentName:"h2"},"setInterval")),Object(o.b)("hr",null),Object(o.b)("p",null," Any activity that is planned at a future time interval is generally referred to as scheduling. Both functions allow you to execute a piece of JavaScript code/function at a certain point in the future."),Object(o.b)("h3",{id:"settimeout"},"setTimeout()"),Object(o.b)("p",null,"The setTimeout() function is used when you wish to run your JavaScript function after a specified number of milliseconds from when the setTimeout() method was called."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"window.setTimeout ( expression, timeout, param1, param2, ... );\n// OR\nsetTimeout(expression, timeout, param1, param2, ...);\n\n// NOTE: the params are optional\n")),Object(o.b)("h4",{id:"settimeout-with-expression"},"setTimeout() with expression"),Object(o.b)("p",null,"where expression is the JavaScript code to run after the timeout milliseconds have elapsed. The params are optional."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"setTimeout(\"console.log('Hello Developer')\", 2000);\n")),Object(o.b)("p",null,"In the above snippet ",Object(o.b)("strong",{parentName:"p"},"Hello Developer")," will print after 2 seconds"),Object(o.b)("h4",{id:"settimeout-with-function"},"setTimeout() with function"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"setTimeout(function() {\n   console.log('Hello Developer \ud83d\ude4b\ud83c\udffb\u200d\u2642\ufe0f');\n }, 4000);\n\n// OR\n\n function message() {\n    console.log('Hello Developer \ud83d\ude4b\ud83c\udffb\u200d\u2642\ufe0f');\n}\n\nsetTimeout(showMotivation, 4000);\n")),Object(o.b)("p",null," ",Object(o.b)("strong",{parentName:"p"},"NOTE"),": The function name 'message' does not have brackets when passed in as a parameter to the setTimeout function."),Object(o.b)("p",null," When we invoke setTimeout it will return unique Id, which can be used for the tracking purpose. If any need to clear the timeout we can use that id to do so"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"let timeoutId = setTimeout(\"console.log('Hello Developer')\", 2000);\n// highlight-next-line\nclearTimeout(timeoutId);\n")),Object(o.b)("h3",{id:"setinterval"},"setInterval()"),Object(o.b)("p",null,"The setInterval() function, as the name suggests is commonly used to set a delay for functions that are executed repeatedly. The setInterval() function is very closely related to setTimeout() and they even have same syntax"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"setInterval ( expression, interval, param1, param2, ... );\n")),Object(o.b)("p",null,"The only difference is,"),Object(o.b)("p",null,"setTimeout() triggers the function call once. While the setInterval() triggers the function repeatedly after the specified interval of time."),Object(o.b)("p",null,"similar to the setTimeout, setInterval function will also return unique id to track which can also be used to create the expression from memory"),Object(o.b)("h2",{id:"function-composition"},"Function Composition"),Object(o.b)("p",null,"We may find a situation where we need to use have a composition of multiple functions to do a job. for example, I want to format a string inside an HTML element by removing all the blank space, converting it to lowercase."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{12}","{12}":!0}),"function trimString(str) {\n  return str.trim();\n}\n\nfunction convertString(str) {\n  return str.toLowerCase();\n}\n\nfunction formatString(str) {\n  return `<div>${str}</div>`;\n}\nlet result = formatString(convertString(trimString('    Hello Hackers     ')));\nconsole.log(result); // \"<div>hello hackers</div>\"\n")),Object(o.b)("p",null,"If you observe above code snippet a ",Object(o.b)("inlineCode",{parentName:"p"},"formatString")," method takes the output from ",Object(o.b)("inlineCode",{parentName:"p"},"convertString")," and which takes the output from ",Object(o.b)("inlineCode",{parentName:"p"},"trimString")," where we pass an actual ",Object(o.b)("inlineCode",{parentName:"p"},"string"),". This is nothing but ",Object(o.b)("inlineCode",{parentName:"p"},"function composition")),Object(o.b)("p",null,"But, there is a problem here this code looks a bit messy and but we can write clean code by using ",Object(o.b)("inlineCode",{parentName:"p"},"Arrow Function")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{5}","{5}":!0}),"const trimString = (str) => str.trim();\nconst convertString = (str) => str.toLowerCase();\nconst formatString = (str) => `<div>${str}</div>`;\n\nlet result = formatString(convertString(trimString('    Hello Hackers     ')));\nconsole.log(result); // \"<div>hello hackers</div>\"\n")),Object(o.b)("p",null,"Now, it looks clean and crystal. but still, we are leaving with one more problem here. That is the readability of code if you see the highlighted code in above code snippet we have to read it from right to left which is kind of weird but we can simplify that as well using ",Object(o.b)("inlineCode",{parentName:"p"},"Lodash")),Object(o.b)("p",null,"A ",Object(o.b)("inlineCode",{parentName:"p"},"Lodash")," is a utility library for a javascript"),Object(o.b)("p",null,"Let's use ",Object(o.b)("inlineCode",{parentName:"p"},"Composition")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Pipe")," from ",Object(o.b)("inlineCode",{parentName:"p"},"Lodash")," Library"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// highlight-next-line\nimport { composition } from 'lodash/fp';\n\nlet trimString = (str) => str.trim();\nlet convertString = (str) => str.toLowerCase();\nlet formatString = (str) => `<div>${str}</div>`;\n\n// highlight-next-line\nconst compositedFunction = composition(formatString, convertString, trimString);\n\n// highlight-next-line\nlet result = compositedFunction('    Hello Hackers     ');\nconsole.log(result);\n")),Object(o.b)("p",null,"In the above example, we used ",Object(o.b)("inlineCode",{parentName:"p"},"composition")," from ",Object(o.b)("inlineCode",{parentName:"p"},"lodash/fp")," where ",Object(o.b)("inlineCode",{parentName:"p"},"fp")," stands for ",Object(o.b)("inlineCode",{parentName:"p"},"Functional Programming"),". "),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"composition")," is a high order function which takes a function as an argument and returns a composited function and later we can use the single composited function in which we need to pass a string"),Object(o.b)("p",null,"But still, we have not our actual problem of readability that we can solve using ",Object(o.b)("inlineCode",{parentName:"p"},"pipe")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// highlight-next-line\nimport { pipe } from 'lodash/fp';\n\nlet trimString = (str) => str.trim();\nlet convertString = (str) => str.toLowerCase();\nlet formatString = (str) => `<div>${str}</div>`;\n\n// highlight-next-line\nconst compositedFunction = pipe(trimString, convertString, formatString);\n\n// highlight-next-line\nlet result = compositedFunction('    Hello Hackers     ');\nconsole.log(result);\n")),Object(o.b)("p",null,"Like ",Object(o.b)("inlineCode",{parentName:"p"},"composition")," ",Object(o.b)("inlineCode",{parentName:"p"},"pipe")," also a high order function which takes functions as arguments but now we solved our problem."),Object(o.b)("h2",{id:"function-currying"},"Function Currying"),Object(o.b)("p",null,"So far we have learned about the function and came to know that the functions are the first-class citizen in the Javascript Programming language. And we also know the one function can accept n number of arguments and we can return almost anything from a function like any primitive values, objects or function itself"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Currying")," is a function of many arguments that are rewritten such that it takes the first argument and returns a function which in turn uses the remaining arguments and returns the value."),Object(o.b)("p",null,"Confused haan!! Lets dive dipper "),Object(o.b)("p",null,"Let's understand using multiplication function"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function Multiplication(value1, value2) {\n  return value1* value2;\n}\n")),Object(o.b)("p",null,"In function currying ",Object(o.b)("inlineCode",{parentName:"p"},"Multiplication")," take one value and return another function"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function Multiplication(value1) {\n  return function (value2) {\n    return value1 * value2;\n  };\n}\nlet mul = Multiplication(2); // Where mul is a function returned by Multiplication\nmul(5); // Return is 10\n")),Object(o.b)("p",null,"If we simplify the above code, we can rewrite something like this "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function Multiplication(value1) {\n  return function (value2) {\n    return value1 * value2;\n  };\n}\nMultiplication(2)(5); // Return is 10\n")),Object(o.b)("h3",{id:"so-why-currying"},"So why Currying?"),Object(o.b)("p",null,"It makes use of code reusability. Less code, Less Error. You may ask how it is less code?"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Yes")," we with the power of Arrow Function we still trim the no of a line to achieve function currying"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const Multiplication = (value1) => (value2) => value1 * value2;\nMultiplication(5)(10); // Return 50\n")),Object(o.b)("p",null,"Woooow, it's just two lines of code that's great \ud83e\udd29"),Object(o.b)("h3",{id:"function-currying-using-function-binding-method-bind"},"Function currying using ",Object(o.b)("inlineCode",{parentName:"h3"},"function binding")," method (",Object(o.b)("inlineCode",{parentName:"h3"},"bind"),")"),Object(o.b)("p",null,"We already came across the ",Object(o.b)("inlineCode",{parentName:"p"},"bind")," method by which we can also achieve currying"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:"{5}","{5}":!0}),"function Multiplication(value1, value2) {\n  return value1 * value2;\n}\n\nlet mul = Multiplication.bind(this, 2);\nmul(5); // Return 10 \n")))}b.isMDXComponent=!0},163:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),b=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=b(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(t),d=a,m=u["".concat(r,".").concat(d)]||u[d]||p[d]||o;return t?i.a.createElement(m,l(l({ref:n},s),{},{components:t})):i.a.createElement(m,l({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=t[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);