(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),i=n(6),c=(n(0),n(157)),s={id:"module7_classes",title:"It's a Classsssss \ud83d\ude0e",sidebar_label:"Module 6: Class"},o={id:"javascript/modules/module7_classes",title:"It's a Classsssss \ud83d\ude0e",description:"1. Is it possible to have multiple constructors in a class?",source:"@site/docs/javascript/modules/m6_classes.md",permalink:"/docs/javascript/modules/module7_classes",lastUpdatedBy:"Abhin Pai",lastUpdatedAt:1594029730,sidebar_label:"Module 6: Class",sidebar:"docs",previous:{title:"Prototype Inheritance \u26d3",permalink:"/docs/javascript/modules/module6_prototype"},next:{title:"Destructor \ud83d\udd28",permalink:"/docs/javascript/modules/module8_destruct"}},l=[{value:"Synthetic Sugar \ud83e\udd14",id:"synthetic-sugar-",children:[]},{value:"Defining Class",id:"defining-class",children:[]},{value:"Constructor \ud83c\udfd7",id:"constructor-",children:[]},{value:"Fields",id:"fields",children:[{value:"Public instance",id:"public-instance",children:[]},{value:"Private instance",id:"private-instance",children:[]},{value:"Public static instance",id:"public-static-instance",children:[]},{value:"Private static instance",id:"private-static-instance",children:[]},{value:"Protected",id:"protected",children:[]}]},{value:"Methods",id:"methods",children:[{value:"Instance Methods",id:"instance-methods",children:[]},{value:"Getter and Setter",id:"getter-and-setter",children:[]},{value:"Static Methods",id:"static-methods",children:[]},{value:"Computed Method Name",id:"computed-method-name",children:[]},{value:"Bound Method with class",id:"bound-method-with-class",children:[]}]},{value:"Inheritance \ud83d\udc74\ud83c\udffb \u2b05\ufe0f \ud83e\uddd4\ud83c\udffb \u2b05\ufe0f \ud83d\udc66\ud83c\udffb \u2b05\ufe0f \ud83d\udc76\ud83c\udffb",id:"inheritance--\ufe0f-\ud83e\uddd4-\ufe0f--\ufe0f-",children:[{value:"Parent Constructor: <code>Super()</code> \ud83d\udc4c\ud83c\udffc",id:"parent-constructor-super-",children:[]},{value:"Parent Instance: <code>Super()</code> in method",id:"parent-instance-super-in-method",children:[]}]}],r={rightToc:l};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},r,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Questions \ud83e\udd14")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("ol",{parentName:"div"},Object(c.b)("li",{parentName:"ol"},"Is it possible to have multiple constructors in a class?"),Object(c.b)("li",{parentName:"ol"},"How do you declare private and static fields in the class"),Object(c.b)("li",{parentName:"ol"},"How static fields work behind the scene"),Object(c.b)("li",{parentName:"ol"},"How do you access instance fields from the static method?"),Object(c.b)("li",{parentName:"ol"},"How to achieve protect fields in js?"),Object(c.b)("li",{parentName:"ol"},"What do you mean by synthetic sugar?")))),Object(c.b)("h2",{id:"synthetic-sugar-"},"Synthetic Sugar \ud83e\udd14"),Object(c.b)("hr",null),Object(c.b)("p",null,"Syntactic sugar is shorthand for communicating a larger thought in a programming language."),Object(c.b)("p",null,"In laymen term. At first, sight if you see any acronym it may blow out your mind thinking about what it is. ex, ",Object(c.b)("inlineCode",{parentName:"p"},"lol")," which means ",Object(c.b)("inlineCode",{parentName:"p"},"Laughing Out loud")," similarly in the programming language we often use ",Object(c.b)("inlineCode",{parentName:"p"},"...")," spread or rest operator if you don't know what will you call it then how will you search? \ud83e\uddd0"),Object(c.b)("p",null,"You may search something like this - ",Object(c.b)("inlineCode",{parentName:"p"},"js curly braces with 3 dots in front of object")," woooow \ud83e\udd26\ud83c\udffb\u200d\u2642\ufe0f"),Object(c.b)("p",null,"To solve this problem programming community provided some shorthand solution that is nothing but ",Object(c.b)("inlineCode",{parentName:"p"},"SYNTHETIC SUGAR")),Object(c.b)("p",null,"it\u2019s a balancing act between actually being concise, and making your code readable for others and your future self."),Object(c.b)("h2",{id:"defining-class"},"Defining Class"),Object(c.b)("hr",null),Object(c.b)("p",null,"Just like any other programming language class is a blueprint for an object which can be created using ",Object(c.b)("inlineCode",{parentName:"p"},"class")," keyword."),Object(c.b)("p",null,"In javascript its ",Object(c.b)("inlineCode",{parentName:"p"},"synthetic sugar")," over ",Object(c.b)("inlineCode",{parentName:"p"},"prototypal inheritance")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class Developer {\n  // CLass body\n}\n")),Object(c.b)("p",null,"In javascript class can be initialized to a variable"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const DeveloperClass = class Developer {\n  // CLass body\n};\n")),Object(c.b)("p",null,"and we can export a class as well"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"export default class Developer {\n  // CLass body\n}\n")),Object(c.b)("p",null,"In order to create an instance, ",Object(c.b)("inlineCode",{parentName:"p"},"new")," keyword will be used"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class Developer {\n  // CLass body\n}\n\nconst dev = new Developer();\nconsole.log(dev instanceof Developer); // True\n")),Object(c.b)("p",null,"After the ",Object(c.b)("inlineCode",{parentName:"p"},"new Developer")," object is created, when we call its method, it\u2019s taken from the ",Object(c.b)("inlineCode",{parentName:"p"},"prototype"),", So the object has access to class methods."),Object(c.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"danger")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Add class to prototype picture"))),Object(c.b)("h2",{id:"constructor-"},"Constructor \ud83c\udfd7"),Object(c.b)("hr",null),Object(c.b)("p",null,"A constructor is a special method in a body of class that initializes the instances. In the constructor, we usually initialize a variable or any kind of object setup (ex. Dependency Injection)"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"class Developer {\n  constructor() {\n    console.log(this); // Developer {}\n  }\n}\n\nconst dev = new Developer();\n")),Object(c.b)("p",null,"In the above code, you can notice I am printing ",Object(c.b)("inlineCode",{parentName:"p"},"this")," which is referring to the instance of Developer class, not a global object"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'class Developer {\n  constructor(name) {\n    this.name = name;\n  }\n}\n\nconst dev = new Developer("Abhin Pai");\nconsole.log(typeOf(dev)); // "Object"\n')),Object(c.b)("p",null,"Here we have passed name as an argument to the constructor and inside the constructor body ",Object(c.b)("inlineCode",{parentName:"p"},"name")," is assigning to the ",Object(c.b)("inlineCode",{parentName:"p"},"this.name"),". Behind the scene, it will create ",Object(c.b)("inlineCode",{parentName:"p"},"Developer")," class object and then it will add ",Object(c.b)("inlineCode",{parentName:"p"},"name")," as property"),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Remember")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("ul",{parentName:"div"},Object(c.b)("li",{parentName:"ul"},"By default, javascript will create an empty constructor if we don't add any constructor explicitly"),Object(c.b)("li",{parentName:"ul"},"We can have multiple constructors in a class")))),Object(c.b)("h2",{id:"fields"},"Fields"),Object(c.b)("hr",null),Object(c.b)("p",null,"Class fields are the variables that can hold some value"),Object(c.b)("h3",{id:"public-instance"},"Public instance"),Object(c.b)("p",null,"Let's take the above example. We have initialized the name to the ",Object(c.b)("inlineCode",{parentName:"p"},"Developer")," class instance and that property can be access outside the class which means its publicly available"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'class Developer {\n  constructor(name) {\n    this.name = name;\n  }\n}\n\nconst dev = new Developer("Abhin Pai");\nconsole.log(dev.name); // "Abhin Pai"\n')),Object(c.b)("p",null,"But it's not recommend way to directly initialize variable without declaring by which we may lose the accountability of the variable. Instead, we can declare it first and then assign it"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'class Developer {\n    let name;\n    constructor(name) {\n        this.name = name;\n    }\n}\n\nconst dev = new Developer("Abhin Pai");\nconsole.log(dev.name); // "Abhin Pai"\n')),Object(c.b)("h3",{id:"private-instance"},"Private instance"),Object(c.b)("p",null,"Encapsulation is one of the most important aspects of Object Orient Programming to hide the internal feature of the class."),Object(c.b)("p",null,"One should be able to access the encapsulated fields only via an interface provided by the class."),Object(c.b)("p",null,"To achieve this functionality ",Object(c.b)("inlineCode",{parentName:"p"},"Private")," field is JOHN RAY. These fields can be manipulated only by its parent class and for outer worlds these fields are anonymous"),Object(c.b)("p",null,"In Javascript to declare ",Object(c.b)("inlineCode",{parentName:"p"},"Private")," field, we have special symbol i.e ",Object(c.b)("inlineCode",{parentName:"p"},"#")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"#")," prefix must be present whenever you deal with private field be it update, delete or read"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class Developer {\n    #name;\n    _age;\n    constructor(name, age) {\n        this.#name = name;\n        this._age = age;\n    }\n    console.log(#name); // Abhin Pai\n    console.log(_age); // \ud83e\udd2b\n}\n\nconst dev = new Developer(\"Abhin Pai\", \ud83e\udd2b);\nconsole.log(dev.#name); // SyntaxError: Private field '#name' must be declared in an enclosing class.\n")),Object(c.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Remember")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"This is a recent addition to the language. ",Object(c.b)("inlineCode",{parentName:"p"},"Not supported in JavaScript engines"),", or supported ",Object(c.b)("inlineCode",{parentName:"p"},"partially yet"),", requires polyfilling."),Object(c.b)("ul",{parentName:"div"},Object(c.b)("li",{parentName:"ul"},"Private fields can only be declared up-front in a field declaration."),Object(c.b)("li",{parentName:"ul"},"Private fields cannot be created later through assigning to them, the way that normal properties can."),Object(c.b)("li",{parentName:"ul"},"We can't have both public and private fields in a single class")))),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Some Interesting Gyan \ud83d\ude07")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("h3",Object(a.a)({parentName:"div"},{id:"why-was-the-sigil--chosen-among-all-the-unicode-code-points"}),"Why was the sigil # chosen, among all the Unicode code points?"),Object(c.b)("p",{parentName:"div"},Object(c.b)("inlineCode",{parentName:"p"},"@")," was the initial favorite, but it was taken by ",Object(c.b)("inlineCode",{parentName:"p"},"decorators"),". TC39 considered swapping decorators and private state sigils, but the committee decided to defer to the existing usage of transpiler users."),Object(c.b)("p",{parentName:"div"},Object(c.b)("inlineCode",{parentName:"p"},"_")," would cause compatibility issues with existing JavaScript code, which has allowed ",Object(c.b)("inlineCode",{parentName:"p"},"_")," at the start of an identifier or (public) property name for a long time."),Object(c.b)("p",{parentName:"div"},"And then what vote went to ",Object(c.b)("inlineCode",{parentName:"p"},"#")," \ud83c\udfc6"),Object(c.b)("p",{parentName:"div"},"This proposal reached Stage 3 in July 2017. Since that time, there has been extensive thought and lengthy discussion about various alternatives. In the end, this thought process and continued community engagement led to a renewed consensus on the proposal in this repository. Based on that consensus, implementations are moving forward on this proposal."),Object(c.b)("p",{parentName:"div"},Object(c.b)("strong",{parentName:"p"},"Reference"),"\n",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://caniuse.com/#feat=mdn-javascript_classes_private_class_fields"}),"https://caniuse.com/#feat=mdn-javascript_classes_private_class_fields")))),Object(c.b)("h3",{id:"public-static-instance"},"Public static instance"),Object(c.b)("p",null,"If we want to access some class property without creating a class instance ",Object(c.b)("inlineCode",{parentName:"p"},"static")," field can help you with this."),Object(c.b)("p",null,"For example, if we want to have some class constant we can declare field with ",Object(c.b)("inlineCode",{parentName:"p"},"static")," and done you can access it without even creating a new instance"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"static")," fields will be added to the class constructor at the time of class evaluation using ",Object(c.b)("inlineCode",{parentName:"p"},"Object.defineProperty()")," and the same will be accessed by the ",Object(c.b)("inlineCode",{parentName:"p"},"constructor")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class Theme {\n    static ACTIVE_THEME = 'dark';\n}\nconsole.log(`What is the active theme ${Theme.ACTIVE_THEME}`); // What is the active theme dark\n")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"static")," fields are useful when you want a field to exist only once per class, not on every class instance you create. This is useful for ",Object(c.b)("inlineCode",{parentName:"p"},"caches"),", ",Object(c.b)("inlineCode",{parentName:"p"},"fixed-configuration"),", or any other data you don't need to be replicated across instances."),Object(c.b)("h3",{id:"private-static-instance"},"Private static instance"),Object(c.b)("p",null,"Sometime you may find use case to hide the implementation of a static field. In this regard, you can make the static field private"),Object(c.b)("p",null,"To make the static field private, prefix the field name with ",Object(c.b)("inlineCode",{parentName:"p"},"#")," "),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class Theme {\n    static #CLASS_CONFIG = 'active';\n}\n")),Object(c.b)("h3",{id:"protected"},"Protected"),Object(c.b)("p",null,"In many other languages there also exist ",Object(c.b)("inlineCode",{parentName:"p"},"protected")," fields: accessible only from inside the class and those extending it (like private, but plus access from inheriting classes). "),Object(c.b)("p",null,"They are also useful for the internal interface. They are in a sense more widespread than ",Object(c.b)("inlineCode",{parentName:"p"},"private")," ones because we usually want to inherit classes to gain access to them."),Object(c.b)("p",null,"Protected fields are not implemented in JavaScript on the language level, but in practice, they are very convenient, so they are emulated."),Object(c.b)("h4",{id:"protected-properties-are-usually-prefixed-with-an-underscore-_"},"Protected properties are usually prefixed with an underscore ",Object(c.b)("inlineCode",{parentName:"h4"},"_")),Object(c.b)("p",null,"That is not enforced on the language level, but there\u2019s a well-known convention between programmers that such properties and methods should not be accessed from the outside."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'class PowerHouse {\n    _powerState = "OFF";\n\n    get powerState() {\n        return this._powerState;\n    }\n\n    set powerState(state) {\n        this._powerState = state;\n    }\n}\n\nlet state = new PowerHouse();\nstate.powerState = "ON";\nconsole.log(state.powerState); // ON\n')),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"instance-methods"},"Instance Methods"),Object(c.b)("p",null,"The instance method can be called via class instance and do the business operations. "),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'class Developer {\n    #name = "Anonymous";\n\n    constructor(name) {\n        this.#name = name;\n    }\n\n    getName() {\n        return this.#name;\n    }\n}\nlet dev = new Developer("Abhin Pai"); \nconsole.log(dev.getName()); // Abhin Pai\n')),Object(c.b)("p",null,"We can also make a method as private similar to the field by using ",Object(c.b)("inlineCode",{parentName:"p"},"#")," as a prefix to the method"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'class Developer {\n    #name = "Anonymous";\n\n    constructor(name) {\n        this.#name = name;\n    }\n\n    #getName() {\n        return this.#name;\n    }\n\n    getBio() {\n        console.log(this.#getName()); // Abhin Pai\n    }\n}\nlet dev = new Developer("Abhin Pai"); \ndev.getBio();\n')),Object(c.b)("h3",{id:"getter-and-setter"},"Getter and Setter"),Object(c.b)("p",null,"Getter and Setters. Getters and setters allow you to define Object Accessors "),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"get")," syntax binds an object property to a function that will be called when that property is looked up."),Object(c.b)("p",null,"The set syntax binds an object property to a function to be called when there is an attempt to set that property."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'class Developer {\n    #name = "Anonymous";\n\n    get Name() {\n        return this.#name;\n    }\n\n    set Name(name) {\n        this.#name = name;\n    }\n}\nlet dev = new Developer(); \nconsole.log(dev.Name); // Anonymous\ndev.Name = "Abhin Pai"; // set the value using setter\nconsole.log("Abhin Pai"); // Abhin Pai used getter\n')),Object(c.b)("h3",{id:"static-methods"},"Static Methods"),Object(c.b)("p",null,"The static methods are functions attached directly to the class. They hold logic related to the class, rather than to the instance of the class."),Object(c.b)("p",null,"To create a static method use the keyword ",Object(c.b)("inlineCode",{parentName:"p"},"static"),". The behavior of the static method is similar to the static field"),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Remember")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Thumb rule of static method"),Object(c.b)("ol",{parentName:"div"},Object(c.b)("li",{parentName:"ol"},"A static method can access static fields"),Object(c.b)("li",{parentName:"ol"},"A static method cannot access instance fields.")))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'class ThemeConfig() {\n    static ACTIVE_THEME = "dark";\n\n    static toggleTheme(theme) {\n        ACTIVE_THEME = theme;\n        console.log(ACTIVE_THEME); // light\n    }\n}\nThemeConfig.toggleTheme("light");\n')),Object(c.b)("p",null,"A static method can be private again they will follow the rules of encapsulation"),Object(c.b)("h3",{id:"computed-method-name"},"Computed Method Name"),Object(c.b)("p",null,"computed method name using brackets ","[...]"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class ThemeConfig() {\n    let theme = \"dark\";\n\n    ['active'+'theme']() {\n        console.log(this.theme); // light\n    }\n}\nlet config = new ThemeConfig();\nconfig.activetheme();\n")),Object(c.b)("h3",{id:"bound-method-with-class"},"Bound Method with class"),Object(c.b)("p",null,"Sometime we may be required to bind a method to a class to access class fields. Its depends on the context of a call"),Object(c.b)("p",null,"This is the least elegant solution, but it works. "),Object(c.b)("p",null,"Drawbacks include having to keep track of which methods use this and need to be bound, or ensuring every method is bound, remembering to ",Object(c.b)("inlineCode",{parentName:"p"},".bind")," new methods as they are added, and removing ",Object(c.b)("inlineCode",{parentName:"p"},".bind")," statements for methods that are removed"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'class Select {\n  constructor(value) {\n    this.value = value;\n  }\n\n  click = () => {\n    console.log(this.value);\n  }\n}\n\nlet select = new Select("hello");\nselect.click // undefined\n')),Object(c.b)("p",null,"The problem is called ",Object(c.b)("inlineCode",{parentName:"p"},"losing this"),". to solve it bind the method to object, e.g. in the constructor"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'class Select {\n  constructor(value) {\n    this.value = value;\n    this.click = this.click.bind(this);\n  }\n\n  click = () => {\n    console.log(this.value);\n  }\n}\n\nlet select = new Select("hello");\nselect.click // hello\n')),Object(c.b)("h4",{id:"auto-bind"},"Auto Bind"),Object(c.b)("p",null,"A similar but less painful approach is using a module that takes care of this on our behalf. Auto-bind goes through an object\u2019s methods and binds them to itself."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'class Select {\n  constructor(value) {\n    this.value = value;\n    autoBind(this);\n  }\n\n  click = () => {\n    console.log(this.value);\n  }\n}\n\nlet select = new Select("hello");\nselect.click // hello\n')),Object(c.b)("h2",{id:"inheritance--\ufe0f-\ud83e\uddd4-\ufe0f--\ufe0f-"},"Inheritance \ud83d\udc74\ud83c\udffb \u2b05\ufe0f \ud83e\uddd4\ud83c\udffb \u2b05\ufe0f \ud83d\udc66\ud83c\udffb \u2b05\ufe0f \ud83d\udc76\ud83c\udffb"),Object(c.b)("hr",null),Object(c.b)("p",null,"Class inheritance is a way for one class to extend another class. So we can create new functionality on top of the existing."),Object(c.b)("p",null,"JavaScript support single inheritance using the ",Object(c.b)("inlineCode",{parentName:"p"},"extends")," keyword"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'class Professional {\n    let developerName = "Abhin Pai";\n    constructor(name) {\n        this.developerName = developerName;\n    }\n}\n\nclass Bio extends Professional {\n    let hobby = ["Gaming", "Travelling" "etc"];\n}\n\nlet user = new Bio();\nconsole.log(user.hobby); // ["Gaming", "Travelling" "etc"]\nconsole.log(user.developerName); // Abhin Pai\n')),Object(c.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"danger")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Add the working illustration of ",Object(c.b)("inlineCode",{parentName:"p"},"extends")))),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"remember")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"The class syntax allows specifying not just a class, but any expression after ",Object(c.b)("inlineCode",{parentName:"p"},"extends")),Object(c.b)("p",{parentName:"div"},"For instance, a function call that generates the parent class:"),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function user(name) {\n    console.log(name);\n}\n\nclass Developer extends user("Abhin Pai") {\n    // Class body\n}\n')),Object(c.b)("p",{parentName:"div"},"This might be useful for advance programming when some want to create class dynamically on the fly"))),Object(c.b)("h3",{id:"parent-constructor-super-"},"Parent Constructor: ",Object(c.b)("inlineCode",{parentName:"h3"},"Super()")," \ud83d\udc4c\ud83c\udffc"),Object(c.b)("p",null,"If you\u2019d like to call the parent constructor in a child class, you need to use the ",Object(c.b)("inlineCode",{parentName:"p"},"super()")," "),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'class Professional {\n    let developerName;\n    constructor(name) {\n        this.developerName = developerName;\n    }\n}\n\nclass Bio extends Professional {\n    let hobby = ["Gaming", "Travelling" "etc"];\n    constructor(name) {\n        super(name); // Calling constructor of parent class\n    }\n}\n\nlet user = new Bio("Abhin Pai");\nconsole.log(user.hobby); // ["Gaming", "Travelling" "etc"]\nconsole.log(user.developerName); // Abhin Pai\n')),Object(c.b)("h3",{id:"parent-instance-super-in-method"},"Parent Instance: ",Object(c.b)("inlineCode",{parentName:"h3"},"Super()")," in method"),Object(c.b)("p",null,"If you\u2019d like to access the parent method inside of a child method, you can use the special shortcut ",Object(c.b)("inlineCode",{parentName:"p"},"super"),"."),Object(c.b)("p",null,"We can also override a method of the parent class"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'class Professional {\n    let developerName;\n    constructor(name) {\n        this.developerName = developerName;\n    }\n\n    get Name() {\n        return this.developerName;\n    }\n}\n\nclass Bio extends Professional {\n    let hobby = ["Gaming", "Travelling" "etc"];\n    constructor(name) {\n        super(name); // Calling constructor of parent class\n    }\n\n    get Name(){ // override the method of parent class\n        console.log(super.Name); // called parent method using super\n    }\n\n}\n\nlet user = new Bio("Abhin Pai");\nconsole.log(user.hobby); // ["Gaming", "Travelling" "etc"]\nconsole.log(user.Name); // Abhin Pai\n')),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Arrow functions do not have ",Object(c.b)("inlineCode",{parentName:"p"},"super"),".")))}b.isMDXComponent=!0},157:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var r=i.a.createContext({}),b=function(e){var t=i.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=b(e.components);return i.a.createElement(r.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,r=l(e,["components","mdxType","originalType","parentName"]),d=b(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||c;return n?i.a.createElement(h,o(o({ref:t},r),{},{components:n})):i.a.createElement(h,o({ref:t},r))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,s=new Array(c);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var r=2;r<c;r++)s[r]=n[r];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);