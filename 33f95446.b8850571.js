(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),o=(n(0),n(140)),i={id:"module8_destruct",title:"Destructor \ud83d\udd28",sidebar_label:"Module 8: Destructor"},l={id:"javascript/modules/module8_destruct",title:"Destructor \ud83d\udd28",description:"1. What is destructing?",source:"@site/docs/javascript/modules/m8_destruct.md",permalink:"/docs/javascript/modules/module8_destruct",lastUpdatedBy:"Abhin Pai",lastUpdatedAt:1593371535,sidebar_label:"Module 8: Destructor",sidebar:"docs",previous:{title:"Does type matters \ud83e\udd14",permalink:"/docs/javascript/modules/module4_datatypes"},next:{title:"\ud83c\udfa8 UI Resources \ud83d\udd8d",permalink:"/docs/ui_res"}},c=[{value:"Destructing Assignment",id:"destructing-assignment",children:[{value:"Destructing an object {...}",id:"destructing-an-object-",children:[]},{value:"Destructing an array ...",id:"destructing-an-array-",children:[]},{value:"Destructing an &quot;string&quot;",id:"destructing-an-string",children:[]},{value:"Destructing an function",id:"destructing-an-function",children:[]},{value:"Swapping variables without using any third variable",id:"swapping-variables-without-using-any-third-variable",children:[]}]},{value:"Spread Operator",id:"spread-operator",children:[{value:"Spread with Arrays",id:"spread-with-arrays",children:[]},{value:"Spread with Object",id:"spread-with-object",children:[]},{value:"Spread with function",id:"spread-with-function",children:[]}]},{value:"Rest Operator",id:"rest-operator",children:[]}],s={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Possible Interview Questions \ud83d\udd0e")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("ol",{parentName:"div"},Object(o.b)("li",{parentName:"ol"},"What is destructing?"),Object(o.b)("li",{parentName:"ol"},"How do you destruct an array?"),Object(o.b)("li",{parentName:"ol"},"How do you destruct an object?"),Object(o.b)("li",{parentName:"ol"},"How do you destruct a string?"),Object(o.b)("li",{parentName:"ol"},"How do you swap an variables?"),Object(o.b)("li",{parentName:"ol"},"Destructuring Functions - Multiple returns and named defaults")))),Object(o.b)("h2",{id:"destructing-assignment"},"Destructing Assignment"),Object(o.b)("hr",null),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Destructuring Assignment")," is a syntax that allows you to assign object properties or array items as variables. "),Object(o.b)("p",null,"This can greatly reduce the lines of code necessary to manipulate data in these structures. "),Object(o.b)("h3",{id:"destructing-an-object-"},"Destructing an object {...}"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Object destructuring")," is a bit different because keys are not necessarily in a specific order."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"let gadgets = { mobile: '\ud83d\udcf1', monitor: '\ud83d\udda5', laptop: '\ud83d\udcbb', printer: '\ud83d\udda8'};\nlet {mobile, monitor} = gadgets;\n\nconsole.log(mobile); // \ud83d\udcf1\nconsole.log(monitor); // \ud83d\udda5\n\n// Shuffling the order \nlet {monitor, mobile} = gadgets;\n\nconsole.log(mobile); // \ud83d\udcf1\nconsole.log(monitor); // \ud83d\udda5\n")),Object(o.b)("h4",{id:"-aliasing-the-property"},"\ud83d\udd38 Aliasing the property"),Object(o.b)("p",null,"It also have an flexibility to Alias a property"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"let gadgets = { mobile: '\ud83d\udcf1', monitor: '\ud83d\udda5', laptop: '\ud83d\udcbb', printer: '\ud83d\udda8'};\nlet {mobile: SmartPhone, monitor: LEDMonitor} = gadgets;\n\nconsole.log(SmartPhone); // \ud83d\udcf1\nconsole.log(LEDMonitor); // \ud83d\udda5\n")),Object(o.b)("h4",{id:"-deep-property-pulling"},"\ud83d\udd38 Deep Property pulling"),Object(o.b)("p",null,"We can also pull a property as deep as we want and we can alias that as well"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"let gadgets = { smartPhone: { iPhone: '\ud83d\udcf1'}, monitor: { ledMonitor: '\ud83d\udda5'}};\nlet {smartPhone: { iPhone }, monitor : { ledMonitor: MyMonitor }} = gadgets;\n\nconsole.log(iPhone); // \ud83d\udcf1\nconsole.log(MyMonitor); // \ud83d\udda5\n")),Object(o.b)("p",null,"By default, properties that aren\u2019t found will be undefined, just like when accessing properties on an object with the dot or bracket notation."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"let gadgets = { mobile: '\ud83d\udcf1', monitor: '\ud83d\udda5', laptop: '\ud83d\udcbb', printer: '\ud83d\udda8'};\nlet {watch} = gadgets;\n\nconsole.log(watch); // undefined\n")),Object(o.b)("h4",{id:"-assigning-default-value"},"\ud83d\udd38 Assigning Default Value"),Object(o.b)("p",null,"To avoid the risk of ",Object(o.b)("inlineCode",{parentName:"p"},"Undefined")," there is something cool feature i.e we can assign a default value. Its useful for the case where the pulled property evaluates to undefined"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"let gadgets = { mobile: '\ud83d\udcf1', monitor: '\ud83d\udda5', laptop: '\ud83d\udcbb', printer: '\ud83d\udda8'};\nlet {watch = '\u231a\ufe0f' } = gadgets;\n\nconsole.log(watch); // \u231a\ufe0f\n")),Object(o.b)("h4",{id:"-pilling-computer-property-name"},"\ud83d\udd38 Pilling Computer Property Name"),Object(o.b)("p",null,"Another convenient aspect of destructuring is the ability to pull keys using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"module3_object#-computed-properties"}),"computed property names"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"let key = 'smartPhone'\nlet { [key]: iPhone } = { smartPhone: '\ud83d\udcf1' }\n\nconsole.log(iPhone) // \ud83d\udcf1\n")),Object(o.b)("h3",{id:"destructing-an-array-"},"Destructing an array ","[...]"),Object(o.b)("p",null,"Array destruction uses square brackets ",Object(o.b)("inlineCode",{parentName:"p"},"[]")," and its very similar to the object destruction "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"let [developer] = [\ud83d\udc68\ud83c\udffb\u200d\ud83d\udcbb];\nconsole.log(developer); // \ud83d\udc68\ud83c\udffb\u200d\ud83d\udcbb\n")),Object(o.b)("p",null,"Here also we can follow the default value and get a same result"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"let [developer] = [];\nconsole.log(developer); // undefined \n\nlet [developer = '\ud83d\udc69\ud83c\udffb\u200d\ud83d\udcbb'] = []; // Assigned a default value\nconsole.log(developer); // \ud83d\udc69\ud83c\udffb\u200d\ud83d\udcbb \n")),Object(o.b)("p",null,"With array we have additional benefit of skipping element"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"let occupation = ['\ud83d\udc69\ud83c\udffb\u200d\ud83d\udd2c', '\ud83e\uddd1\ud83c\udffb\u200d\ud83d\udcbb', '\ud83d\udc68\ud83c\udffb\u200d\ud83c\udfeb'];\nlet [,,teacher] = occupation;\n\nconsole.log(teacher); // \ud83d\udc68\ud83c\udffb\u200d\ud83c\udfeb\n")),Object(o.b)("h4",{id:"-nested-array-destructing"},"\ud83d\udd38 Nested Array Destructing"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"let occupation = [['\ud83d\udc68\ud83c\udffb\u200d\ud83d\udcbb', '\ud83d\udc69\ud83c\udffb\u200d\ud83d\udcbb'],['\ud83d\udc69\ud83c\udffb\u200d\ud83d\udd2c']];\nlet [[maleDeveloper, femaleDeveloper], [scientist]] = occupation;\n\nconsole.log(maleDeveloper);\nconsole.log(femaleDeveloper);\nconsole.log(scientist);\n")),Object(o.b)("h3",{id:"destructing-an-string"},'Destructing an "string"'),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"let message = \"Hello to all developer \ud83d\udc4b\";\nlet [getOneChar = ''] = message;\n\nconsole.log(getOneChar); // H\n")),Object(o.b)("h3",{id:"destructing-an-function"},"Destructing an function"),Object(o.b)("h4",{id:"-destructing-an-function-parameter"},"\ud83d\udd38 Destructing an function parameter"),Object(o.b)("p",null,"Destructuring can also be applied on function parameters to extract values and assign them to local variables"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'let developer = {\n  name: `Abhin Pai`,\n  gadgets: ["\ud83d\udcf1", "\ud83d\udda5", "\ud83d\udcbb", "\ud83d\udda8"],\n  nationality: { india: "\ud83c\uddee\ud83c\uddf3" },\n};\n\nfunction getNameAndAddress({ name, nationality: { india } }) {\n  console.log(`Developer Name is ${name} and he is from ${india}`);\n}\ngetNameAndAddress(developer); // Developer Name is Abhin Pai and he is from \ud83c\uddee\ud83c\uddf3\n')),Object(o.b)("h4",{id:"-returning-multiple-property"},"\ud83d\udd38 Returning multiple property"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function getNameAndAddress() {\n  let developer = {\n    name: `Abhin Pai`,\n    gadgets: ["\ud83d\udcf1", "\ud83d\udda5", "\ud83d\udcbb", "\ud83d\udda8"],\n    nationality: { india: "\ud83c\uddee\ud83c\uddf3" },\n  };\n    return { name, nationality: { india } } = developer\n  }\n  var result = getNameAndAddress(); \n  console.log(`Developer Name is ${result.name} and he is from ${result.india}`);\n')),Object(o.b)("h3",{id:"swapping-variables-without-using-any-third-variable"},"Swapping variables without using any third variable"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Traditional technique\nfunction compute() {\n  let valueA = 500;\n  let valueB = 200;\n  let temp;\n\n  if (valueA > valueB) {\n    temp = valueA;\n    valueA = valueB;\n    valueB = temp;\n  }\n\n  console.log(valueA); // 200\n  console.log(valueB); // 500\n}\ncompute();\n\n\n// Smart way with Destructing\nfunction compute() {\n  let valueA = 500;\n  let valueB = 200;\n\n  [valueA, valueB] = [valueB, valueA];\n  console.log(valueA); // 200\n  console.log(valueB); // 500\n}\ncompute();\n")),Object(o.b)("p",null,"\ud83d\ude0d you can see a drastic amount of logic and number of lines is being reduced "),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Destructing import statement")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Even though import statements don\u2019t follow destructuring rules, they behave a bit similarly. Whenever you\u2019re writing module import statements, you can pull just what you need from a module\u2019s public API"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import {pureComponent, component} from react;\n")),Object(o.b)("p",{parentName:"div"},"import statements have a different syntax. When compared against destructuring, none of the following import statements will work"),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"Use defaults values such as ",Object(o.b)("inlineCode",{parentName:"li"},"import {pureComponent = component} from react")," "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Deep destructuring")," style like ",Object(o.b)("inlineCode",{parentName:"li"},"import {component: { someOtherComponent }} from react")," is not possible "),Object(o.b)("li",{parentName:"ul"},"Aliasing syntax ",Object(o.b)("inlineCode",{parentName:"li"},"import {pureComponent = component} from react"))))),Object(o.b)("h2",{id:"spread-operator"},"Spread Operator"),Object(o.b)("hr",null),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Spread syntax (...)")," is another helpful addition to JavaScript for working with arrays, objects, and function calls. "),Object(o.b)("p",null,"Spread allows objects and iterables (such as arrays) to be unpacked, or expanded, which can be used to make shallow copies of data structures to increase the ease of data manipulation"),Object(o.b)("p",null,"Spear unpack a array or object"),Object(o.b)("h3",{id:"spread-with-arrays"},"Spread with Arrays"),Object(o.b)("p",null,"Spread can simplify common tasks with arrays like concatenating or some other array manipulation "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'// Traditional way to concatenating an array\nlet animals = [\'\ud83e\udd8a\', \'\ud83d\udc3b\', \'\ud83d\udc3c\', \'\ud83d\udc2f\', \'\ud83e\udd81\'];\nlet birds = [\'\ud83e\udd86\', \'\ud83d\udc14\', \'\ud83d\udc27\', \'\ud83d\udc26\', \'\ud83d\udc24\'];\n\nlet leavingBeings = animals.concat(birds);\nconsole.log(leavingBeings); //["\ud83e\udd8a", "\ud83d\udc3b", "\ud83d\udc3c", "\ud83d\udc2f", "\ud83e\udd81", "\ud83e\udd86", "\ud83d\udc14", "\ud83d\udc27", "\ud83d\udc26", "\ud83d\udc24"]\n\n// Concatenating with spread operator \nlet leavingBeings = [...animals, ...birds];\nconsole.log(leavingBeings); //["\ud83e\udd8a", "\ud83d\udc3b", "\ud83d\udc3c", "\ud83d\udc2f", "\ud83e\udd81", "\ud83e\udd86", "\ud83d\udc14", "\ud83d\udc27", "\ud83d\udc26", "\ud83d\udc24"]\n')),Object(o.b)("p",null,"You can also use spread operator with an array. "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"let animals = [ \n  { tiger: '\ud83d\udc2f' },\n  { lion: '\ud83e\udd81' },\n];\n\nlet updateAnimal = [...animals, { wolf: '\ud83e\udd8a' }];\nconsole.log(updateAnimal); // [ {tiger: \"\ud83d\udc2f\"}, {lion: \"\ud83e\udd81\"},  {wolf: \"\ud83e\udd8a\"}]\n")),Object(o.b)("p",null,"Spread can also be used to convert a ",Object(o.b)("inlineCode",{parentName:"p"},"set"),", or any other ",Object(o.b)("inlineCode",{parentName:"p"},"iterable"),", or ",Object(o.b)("inlineCode",{parentName:"p"},"String")," to an ",Object(o.b)("inlineCode",{parentName:"p"},"Array"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Converting set into an array\nlet animals = new Set();\n\nanimals.add('Lion');\nanimals.add('Tiger');\nanimals.add('Wolf');\n\nconsole.log(...animals); // [Lion, Tiger, Wolf]\n\n// Converting an string to an array\nlet animalName = \"Lion\";\nconsole.log(...animalName); // ['L', 'i', 'o', 'n']\n")),Object(o.b)("h3",{id:"spread-with-object"},"Spread with Object"),Object(o.b)("p",null,"When working with objects, spread can be used to shallow copy and update objects."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'// Copying object with Object.Assign();\nlet animals = {tiger: \'\ud83d\udc2f\', lion: \'\ud83e\udd81\' };\nlet copyAnimal = Object.assign({}, animals);\n\nconsole.log(copyAnimal); // {tiger: "\ud83d\udc2f", lion: "\ud83e\udd81"}\n\n// Copy using spread operator \nlet copyAnimal = {...animals};\nconsole.log(copyAnimal); // {tiger: "\ud83d\udc2f", lion: "\ud83e\udd81"}\n')),Object(o.b)("h4",{id:"adding-new-property-into-an-existing-property"},"Adding new property into an existing property"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'let developer = {\n  name: `Abhin Pai`,\n  gadgets: ["\ud83d\udcf1", "\ud83d\udda5", "\ud83d\udcbb", "\ud83d\udda8"],\n  nationality: { india: "\ud83c\uddee\ud83c\uddf3" },\n}\n\nlet userInfo = {...developer, blog: "www.abhinpai.github.io"};\nconsole.log(userInfo); // {name: "Abhin Pai", gadgets: Array(4), nationality: {\u2026}, blog: "www.abhinpai.github.io"}\n')),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Remember")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"One important thing to note with updating objects via spread is that any nested object will have to be spread as well"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'let developer = {\n  name: `Abhin Pai`,\n  gadgets: ["\ud83d\udcf1", "\ud83d\udda5", "\ud83d\udcbb", "\ud83d\udda8"],\n  nationality: { india: "\ud83c\uddee\ud83c\uddf3" },\n}\n\nlet userInfo = {...developer, gadgets: {smartWatch: \'\u231a\ufe0f\'}};\nconsole.log(userInfo); // {name: "Abhin Pai", gadgets: {smartWatch: \'\u231a\ufe0f\'}, nationality: {\u2026}}\n')),Object(o.b)("p",{parentName:"div"},"In the above example i tried to add smart-watch into existing gadget object but guess what it overwrite with the new value and we lost the original content"),Object(o.b)("p",{parentName:"div"},"To achieve our result we can spread inner object as well"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'let developer = {\n  name: `Abhin Pai`,\n  gadgets: ["\ud83d\udcf1", "\ud83d\udda5", "\ud83d\udcbb", "\ud83d\udda8"],\n  nationality: { india: "\ud83c\uddee\ud83c\uddf3" },\n}\n\nlet userInfo = {...developer, gadgets: {smartWatch: \'\u231a\ufe0f\', ...developer.gadgets}};\nconsole.log(userInfo); // {name: "Abhin Pai", gadgets: {\u2026}, nationality: {\u2026}} \n')))),Object(o.b)("h3",{id:"spread-with-function"},"Spread with function"),Object(o.b)("p",null,"We can also take advantage of spread operator in function"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'let developer = [\n  { name: `Abhin Pai` },\n  { gadgets: ["\ud83d\udcf1", "\ud83d\udda5", "\ud83d\udcbb", "\ud83d\udda8"] },\n  { nationality: { india: "\ud83c\uddee\ud83c\uddf3" } },\n];\n\nfunction printUser(name) {\n  console.log(name); // Abhin Pai\n}\n\nprintUser(...developer);\n')),Object(o.b)("h2",{id:"rest-operator"},"Rest Operator"),Object(o.b)("hr",null),Object(o.b)("p",null,"The syntax of rest parameter is same as spread i.e ",Object(o.b)("inlineCode",{parentName:"p"},"...")," but rest do have opposite effect "),Object(o.b)("p",null,"Rest pack an array or object by creating an array of an indefinite number of arguments."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function gadgets(...args) {\n  console.log(args); // ["\ud83d\udcf1", "\ud83d\udda5", "\ud83d\udcbb", "\ud83d\udda8"]\n}\n\ngadgets("\ud83d\udcf1", "\ud83d\udda5", "\ud83d\udcbb", "\ud83d\udda8");\n')),Object(o.b)("p",null,"Rest syntax can be used as the only parameter or as the last parameter in the list. If used as the only parameter, it will gather all arguments, but if it's at the end of a list, it will gather every argument that is remaining."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function gadgets(mobile, monitor, ...args) {\n  console.log(args); // ["\ud83d\udcbb", "\ud83d\udda8"]\n  console.log(mobile);  // \ud83d\udcf1\n  console.log(monitor); // \ud83d\udda5\n}\n\ngadgets("\ud83d\udcf1", "\ud83d\udda5", "\ud83d\udcbb", "\ud83d\udda8");\n')),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Remember")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"One can't use rest in between parameter which will throw an exception")),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function gadgets(...args, mobile) {\n  console.log(args); // SyntaxError: Rest parameter must be last formal parameter\n}\n\ngadgets("\ud83d\udcf1", "\ud83d\udda5", "\ud83d\udcbb", "\ud83d\udda8");\n')),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"Older code, the arguments variable could be used to gather all the arguments passed through to which is not possible now with rest")),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function gadgets() {\n  console.log(arguments); // Arguments(4)\xa0["\ud83d\udcf1", "\ud83d\udda5", "\ud83d\udcbb", "\ud83d\udda8", callee: \u0192, Symbol(Symbol.iterator): \u0192]\n}\n\ngadgets("\ud83d\udcf1", "\ud83d\udda5", "\ud83d\udcbb", "\ud83d\udda8");\n')))))}b.isMDXComponent=!0},140:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,m=p["".concat(i,".").concat(u)]||p[u]||d[u]||o;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);