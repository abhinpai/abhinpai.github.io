(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{202:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return m})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return u}));var n=a(2),r=a(9),i=a(0),o=a.n(i),l=a(207);function c(e){var t=e.children,a=e.actor;return o.a.createElement("div",null,o.a.createElement("p",{style:{marginBottom:"4px"}},o.a.createElement("span",{className:"story-actor"},a,":"),t))}var s=a(218),b={id:"module9_promise",title:"Promises its super cool \ud83d\ude0e",sidebar_label:"Module 9: Promise"},m={id:"javascript/modules/module9_promise",title:"Promises its super cool \ud83d\ude0e",description:"1. What is callback? how do you pass an argument to a callback?",source:"@site/docs/javascript/modules/m9_promise.md",permalink:"/docs/javascript/modules/module9_promise",lastUpdatedBy:"Abhin Pai",lastUpdatedAt:1594183488,sidebar_label:"Module 9: Promise",sidebar:"docs",previous:{title:"Destructor \ud83d\udd28",permalink:"/docs/javascript/modules/module7_destruct"},next:{title:"Generator and Iterator \u2699\ufe0f",permalink:"/docs/javascript/modules/module10_generator"}},d=[{value:"The Callback",id:"the-callback",children:[{value:"Nested Callback",id:"nested-callback",children:[]}]},{value:"Promise it&#39;s crazy",id:"promise-its-crazy",children:[{value:"Promise Constructor",id:"promise-constructor",children:[]},{value:"Chaining Promise",id:"chaining-promise",children:[]},{value:"Promise APIs",id:"promise-apis",children:[]}]}],p={rightToc:d};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Questions \ud83e\udd14")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("ol",{parentName:"div"},Object(l.b)("li",{parentName:"ol"},"What is callback? how do you pass an argument to a callback?"),Object(l.b)("li",{parentName:"ol"},"How do you save time with the promise"),Object(l.b)("li",{parentName:"ol"},"Callback vs Promise vs Async/Await"),Object(l.b)("li",{parentName:"ol"},"What is the Promise APIs?"),Object(l.b)("li",{parentName:"ol"},"How does Promise work behind the scene? "),Object(l.b)("li",{parentName:"ol"},"What is Microtasks? How does it work?")))),Object(l.b)("h2",{id:"the-callback"},"The Callback"),Object(l.b)("hr",null),Object(l.b)("p",null,"A callback is a simple function which is then passed into an asynchronous function as an argument to perform on a certain event in the future and the return value of callback function will be parameters of called function"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'// highlight-start\nfunction myCallback(arg){\n    console.log("Hey did you called me"+ arg);\n}\n// highlight-end\n\nfunction asyncFunction(arg, callback) {\n    console.log(arg);\n    // highlight-next-line\n    let x =  () => callback(\ud83e\udd14);\n    x();\n}\n\nasyncFunction("Trying callback", myCallback)\n')),Object(l.b)("h3",{id:"nested-callback"},"Nested Callback"),Object(l.b)("p",null,"Consider you want to manufacture a bicycle that involves multiple stages to get one bicycle ready on very high designBiCycle, constructFrame, paintFrame, assembleParts, testingBicycle, releaseBicycle, and many other how do we do it asynchronously Because each function output will be about for another function!. How to chain them now \ud83e\udd14"),Object(l.b)("p",null,"Well it's possible with a callback method chaining to let's see how it looks in code"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"function handleError(err) {\n  throw new Error(err);\n}\n\nfunction designBiCycle('loadDesign.js', (design, err) => {\n  if(error) handleError(err);\n  constructFrame('construct.js', (material, err) =>{\n      if(error) handleError(err);\n      paintFrame('paint.js', (paint, err) =>{\n          if(error) handleError(err);\n          assembleParts('parts.js', (parts, err) => {\n               if(error) handleError(err);\n               testingBicycle('testing.js', (testing, err) =>{\n                   if(error) handleError(err);\n                   releaseBicycle('release.js', (release, err) => {\n                      if(error) handleError(err);\n                      console.log(\"Successfully manufactured Bicycle\"); \n                   })\n               })\n            })\n         })\n      })\n  });\n")),Object(l.b)("p",null,"Finally, we achieved what we were looking for but isn't it messy. If we have some huge scenario then will end up in ",Object(l.b)("inlineCode",{parentName:"p"},"CALLBACK HELL")," where code becomes unreadable and non-maintainable. To get rid of this ES6 introduced ",Object(l.b)("inlineCode",{parentName:"p"},"promise")," to rescue us  "),Object(l.b)("h4",{id:"what-will-be-the-output-of-following-code-block"},"What will be the output of following code block"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'// highlight-start\nfunction myCallback(arg){\n    console.log("Hey did you called me "+ arg);\n}\n// highlight-end\n\nfunction asyncFunction(arg, callback) {\n    console.log(arg);\n\n    // highlight-start\n    setTimeout(() => {console.log("I am timed out"), 0});\n    let x =  () => callback(\'\ud83e\udd14\');\n    x();\n    // highlight-end\n}\n\nasyncFunction("Trying callback", myCallback);\n\n//  Trying callback\n//  Hey did you called me \ud83e\udd14\n//  I am timed out\n')),Object(l.b)("p",null,"Why? if you see the log that printed via our code seems to incorrect isn't it! Actually, the answer is NO the output of the following code is accurate."),Object(l.b)("p",null,"Even though we declare setTimeout before the callback, setTimeout will take its own time to execute and callback takes its own. Both setTimeout and callback jobs will be enqueued into the ",Object(l.b)("inlineCode",{parentName:"p"},"Task Queue")," and ",Object(l.b)("inlineCode",{parentName:"p"},"Microtasks Queue")," accordingly. Since a job in Microtasks Queue will have a high priority ",Object(l.b)("inlineCode",{parentName:"p"},"callback")," will execute before setTimeout."),Object(l.b)("h2",{id:"promise-its-crazy"},"Promise it's crazy"),Object(l.b)("hr",null),Object(l.b)("p",null,"Let's see ",Object(l.b)("inlineCode",{parentName:"p"},"Promise")," with real-life analogies."),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Conversation of Niece \ud83d\udc67\ud83c\udffb and Uncle \ud83d\ude4b\ud83c\udffb\u200d\u2642\ufe0f")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)(c,{actor:"Niece",mdxType:"Story"},"Hey, uncle, On my 5th B'Day, can you gift me a bicycle with Barbies stickers on it? \ud83e\udd7a"),Object(l.b)(c,{actor:"Me",mdxType:"Story"},"Yes Baby anything for you \ud83d\ude0d ",Object(l.b)("b",null,"(Made a promise)")),Object(l.b)(c,{actor:"Niece",mdxType:"Story"},"I'll call all my friends to show my new \ud83d\udeb2. Let me know when you're going to bring it uncle \ud83d\ude1c ",Object(l.b)("b",null,"(promise return value)")),Object(l.b)(c,{actor:"Me",mdxType:"Story"},"Sure, but what if i don't find a bicycle with Barbies stickers on it? \ud83e\udd37\ud83c\udffb\u200d\u2642\ufe0f"),Object(l.b)(c,{actor:"Niece",mdxType:"Story"},"In that case you let me know immediately ",Object(l.b)("b",null,"(failure Callback)"),". In case if you find what I was looking for then bring it on ",Object(l.b)("b",null,"(success callback)")))),Object(l.b)("p",null,"The analogy isn\u2019t terribly accurate, because JavaScript promises are more complex than a simple subscription list: they have additional features and limitations. But it\u2019s fine, to begin with."),Object(l.b)("p",null,"The promise in javascript is something that takes time to get the things done by which it doesn't like to hold others' work. Promise will work independently. all the jobs of the Promise will be enqueued into the Microtasks queue and then it will be dequeued when the task is completed"),Object(l.b)("h3",{id:"promise-constructor"},"Promise Constructor"),Object(l.b)("p",null,"A Promise Constructor hold two properties that is ",Object(l.b)("inlineCode",{parentName:"p"},"PromiseStatus")," ",Object(l.b)("strong",{parentName:"p"},"[","[PromiseStatus]","]")," and ",Object(l.b)("inlineCode",{parentName:"p"},"PromiseValue")," ",Object(l.b)("strong",{parentName:"p"},"[","[PromiseValue]","]")),Object(l.b)("p",null,"\ud83d\udd38 ",Object(l.b)("strong",{parentName:"p"},"PromiseStatus")," represent a status of promise that will be ",Object(l.b)("inlineCode",{parentName:"p"},"fulfilled/resolved"),", ",Object(l.b)("inlineCode",{parentName:"p"},"pending"),", or ",Object(l.b)("inlineCode",{parentName:"p"},"rejected")," ",Object(l.b)("br",null),"\n\ud83d\udd38 ",Object(l.b)("strong",{parentName:"p"},"PromiseValue")," represent a value of the promise that is being ",Object(l.b)("inlineCode",{parentName:"p"},"resolved")," or ",Object(l.b)("inlineCode",{parentName:"p"},"rejected")," ",Object(l.b)("br",null)),Object(l.b)("p",null,"The basic syntax of the promise looks something like this "),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'let myPromise = new Promise((resolve, reject) =>{\n    // Promise body that is "executor"\n})\n')),Object(l.b)("p",null,"The function passed to the new Promise is called the executor. Which run and produce some results eventually."),Object(l.b)("p",null,"Its arguments ",Object(l.b)("inlineCode",{parentName:"p"},"resolve")," and ",Object(l.b)("inlineCode",{parentName:"p"},"reject")," are callbacks provided by JavaScript itself. When the executor obtains the result, be it soon or late, doesn\u2019t matter, it should call one of these callbacks."),Object(l.b)("p",null,"\ud83d\udd38 ",Object(l.b)("inlineCode",{parentName:"p"},"resolve(value)")," \u2014 if the job finished successfully, with result value. ",Object(l.b)("br",null),"\n\ud83d\udd38 ",Object(l.b)("inlineCode",{parentName:"p"},"reject(error)")," \u2014 if an error occurred, error is the error object. ",Object(l.b)("br",null)),Object(l.b)("p",null,"In the above example, ",Object(l.b)("inlineCode",{parentName:"p"},"myPromise")," is an object obtained by Promise constructor. Which will have both status and result."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Initially status of the promise will be ",Object(l.b)("inlineCode",{parentName:"li"},"pending")," and changes to either ",Object(l.b)("inlineCode",{parentName:"li"},"resolved")," or ",Object(l.b)("inlineCode",{parentName:"li"},"rejected")),Object(l.b)("li",{parentName:"ul"},"Initially the value of the result will be  ",Object(l.b)("inlineCode",{parentName:"li"},"undefined")," and eventually it will change to resolved value or rejected error")),Object(l.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Things to remember")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("ul",{parentName:"div"},Object(l.b)("li",{parentName:"ul"},"There can be only a single result or an error. Which means executor can call ",Object(l.b)("inlineCode",{parentName:"li"},"resolve")," or ",Object(l.b)("inlineCode",{parentName:"li"},"reject")," method only once. All further calls of ",Object(l.b)("inlineCode",{parentName:"li"},"resolve")," and ",Object(l.b)("inlineCode",{parentName:"li"},"reject")," will be ignored")),Object(l.b)("pre",{parentName:"div"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let myPromise = new Promise((resolve, reject) => {\n  resolve('I am done');\n  resolve('Done and dusted'); // ignored\n  reject(new Error('I stuck')); // ignored\n});\n")),Object(l.b)("ul",{parentName:"div"},Object(l.b)("li",{parentName:"ul"},"resolve and reject method accept only one argument or none arguments"),Object(l.b)("li",{parentName:"ul"},"If something goes wrong with executor will be notified with reject which accepts any type but the recommendation is to use ",Object(l.b)("inlineCode",{parentName:"li"},"Error Object")),Object(l.b)("li",{parentName:"ul"},"The properties of promise that is ",Object(l.b)("inlineCode",{parentName:"li"},"status")," and ",Object(l.b)("inlineCode",{parentName:"li"},"result")," will be internal. We can't directly access them directly in order to get the value of those properties we should use ",Object(l.b)("inlineCode",{parentName:"li"},"then"),",",Object(l.b)("inlineCode",{parentName:"li"},"catch"),", or ",Object(l.b)("inlineCode",{parentName:"li"},"finally")," ")))),Object(l.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"TBU")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("ul",{parentName:"div"},Object(l.b)("li",{parentName:"ul"},"Add diagram of Promise constructor properties"),Object(l.b)("li",{parentName:"ul"},"Add illustration of how a promise works")))),Object(l.b)("h3",{id:"chaining-promise"},"Chaining Promise"),Object(l.b)("p",null,"In the above callback section, we try to demonstrate a bicycle manufacturing process and we finally came up with a callback solution that is messy and looks very ugly. To solve that problem ES6 also provided a way to chain them using ",Object(l.b)("inlineCode",{parentName:"p"},"promise chining")," "),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"then()")," isn't the end of the story, we can chain thens together to transform values or run additional async actions one after another"),Object(l.b)("p",null,"Let's try to achieve the above solution using Promise chaining"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"function handleError(err) {\n  throw new Error(err);\n}\n\nlet designBiCycle = new Promise((resolve, reject) => {\n  try {\n    resolve('loadDesign.js');\n  } catch (ex) {\n    reject(new Error(ex));\n  }\n});\n\ndesignBiCycle\n  .then((design) => constructFrame(design))\n  .then((material) => paintFrame(material))\n  .then((paint) => assembleParts(paint))\n  .then((parts) => testingBicycle(parts))\n  .then((testing) => releaseBicycle(testing))\n  .then((release) => console.log('Successfully manufactured Bicycle'))\n  .catch((err) => handleError(err));\n")),Object(l.b)("p",null,"Look now how beautifully \ud83d\ude0d we can write code and achieve same requirement using Promise Chaining this is ",Object(l.b)("inlineCode",{parentName:"p"},"Promise Heaven")," \ud83d\ude02"),Object(l.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"TBU")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"Add promise chining illustration"))),Object(l.b)("h3",{id:"promise-apis"},"Promise APIs"),Object(l.b)("p",null,"Promise class contains 5 methods those are "),Object(l.b)("p",null,"\ud83d\udd38",Object(l.b)("strong",{parentName:"p"},"Promise.all")," ",Object(l.b)("br",null),"\nIf we want to execute a number of promise parallelly then we can go ahead with ",Object(l.b)("inlineCode",{parentName:"p"},"promise.all")," which accepts an array of promise and process the contents once all are done "),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"In c# we have ",Object(l.b)("inlineCode",{parentName:"p"},"Task.WhenAll()")," similar to ",Object(l.b)("inlineCode",{parentName:"p"},"Promise.all"))),Object(l.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Remember")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"If one promises rejects, Promise.all immediately reject,completely forgetting about the other ones in the list. Their results are ignored."))),Object(l.b)("p",null,"\ud83d\udd38",Object(l.b)("strong",{parentName:"p"},"Promise.allSettled")," ",Object(l.b)("br",null)),Object(l.b)("p",null,"Since ",Object(l.b)("inlineCode",{parentName:"p"},"Promise.all")," reject a promise if one fails this is good only for ",Object(l.b)("inlineCode",{parentName:"p"},"all/none")," case Whereas ",Object(l.b)("inlineCode",{parentName:"p"},"Promise.allSettled")," methods execute parallelly but even if one method fail it won't boughter it will execute the remaining method until all are completed. So that each promise will have value/error in the response"),Object(l.b)("p",null,"\ud83d\udd38",Object(l.b)("strong",{parentName:"p"},"Promise.race")," ",Object(l.b)("br",null)),Object(l.b)("p",null,"Similar to ",Object(l.b)("inlineCode",{parentName:"p"},"Promise.all"),", but waits only for the first settled promise and gets its result (or error). If anyone promise process fast that became the result and remaining promise will be ignored"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"In c# we have ",Object(l.b)("inlineCode",{parentName:"p"},"Task.WhenAny()")," similar to ",Object(l.b)("inlineCode",{parentName:"p"},"Promise.race"))),Object(l.b)("p",null,"\ud83d\udd38",Object(l.b)("strong",{parentName:"p"},"Promise.resolve")," ",Object(l.b)("br",null),"\nMakes a resolved promise with the given value"),Object(l.b)("p",null,"\ud83d\udd38",Object(l.b)("strong",{parentName:"p"},"Promise.reject")," ",Object(l.b)("br",null),"\nMakes a rejected promise with the given error."),Object(l.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"TBU")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"Add illustration for promise APIs"))),Object(l.b)("p",null,"For more visualized demonstration read the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke"}),"blog")," written by ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://twitter.com/lydiahallie"}),"Lydia Hallie")," "),Object(l.b)(s.a,{styleClass:"heading-1",mdxType:"CustomText"},"Reference"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://web.dev/promises/"}),"Web Dev")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke"}),"Lydia Hallie Blog")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://javascript.info/promise-basics"}),"Javascript Info"))))}u.isMDXComponent=!0},207:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=b(a),p=n,u=m["".concat(o,".").concat(p)]||m[p]||d[p]||i;return a?r.a.createElement(u,l(l({ref:t},s),{},{components:a})):r.a.createElement(u,l({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},218:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.children,a=e.styleClass;return r.a.createElement("p",{className:a},t)}}}]);