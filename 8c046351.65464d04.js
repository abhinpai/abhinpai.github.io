(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return s}));var a=n(2),o=n(6),r=(n(0),n(164)),i=n(166),c={id:"firebase_Hosting",title:"Hosting Web application into Firebase from VS Code and Github Action",author:"Abhin Pai",author_title:"Abhin Pai",author_url:"https://github.com/abhinpai",author_image_url:"https://avatars1.githubusercontent.com/u/15942876?v=4",tags:["Firebase","vscode","Github-Action"]},l={permalink:"/blog/firebase_Hosting",source:"@site/blog/2020-06-29-firebase-host.md",description:"Recently I have developed a new react application but I was wondering how to host my application by that anybody can access it remotely.",date:"2020-06-29T00:00:00.000Z",tags:[{label:"Firebase",permalink:"/blog/tags/firebase"},{label:"vscode",permalink:"/blog/tags/vscode"},{label:"Github-Action",permalink:"/blog/tags/github-action"}],title:"Hosting Web application into Firebase from VS Code and Github Action",readingTime:3.05,truncated:!0},b=[{value:"Create a Firebase Application",id:"create-a-firebase-application",children:[]},{value:"Hosting Application from VS Code",id:"hosting-application-from-vs-code",children:[]}],p={rightToc:b};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Recently I have developed a new react application but I was wondering how to host my application by that anybody can access it remotely."),Object(r.b)("p",null,"Then I found a very simplest way to host an application using firebase hosting. The same I want to convey every bright developer out there \ud83d\ude0a"),Object(r.b)("h1",{id:"here-is-the-step-by-step-instruction"},"Here is the step by step instruction"),Object(r.b)("h2",{id:"create-a-firebase-application"},"Create a Firebase Application"),Object(r.b)("p",null,"Goto ",Object(r.b)("strong",{parentName:"p"},"Firebase")," then login with you Gmail account after login it will take you to the firebase homepage then click on ",Object(r.b)("strong",{parentName:"p"},"Go to console")," refer below image"),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:Object(i.a)("https://miro.medium.com/max/1400/1*VixKhxqMUl8u-P1f6wKAMQ.png"),alt:"firebase header"})),Object(r.b)("p",null,"After you will land on a Firebase project page where you can see your existing project or can create a new project, now let\u2019s go and create a new project. Click on ",Object(r.b)("strong",{parentName:"p"},"Add Project")),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:Object(i.a)("https://miro.medium.com/max/1400/1*yDpNdh8MX0rr_YomkPXsGA.png"),alt:"firebase"})),Object(r.b)("p",null,"Enter your ",Object(r.b)("strong",{parentName:"p"},"project name")," -> Click continue -> It will ask for the analytics click continue -> Will ask you to select the account select your account and click create a project, hurry you successfully created your firebase project \ud83c\udf89"),Object(r.b)("p",null,"Now you are done with the common step to host from the local machine and Github Action"),Object(r.b)("h2",{id:"hosting-application-from-vs-code"},"Hosting Application from VS Code"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Install Firebase CLI tools in your local machine by the following command")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"npm install -g firebase-tools\n")),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Now let\u2019s link your local app to the Firebase project by running following CMDs. Sign in and test the Firebase CLI\nfirebase login")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"firebase projects:list\n")),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Initialize the Firebase into the project")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"firebase init\n")),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:Object(i.a)("https://miro.medium.com/max/1400/1*ilTlEpAzFpf_2fU_HOHvmg.png"),alt:"firebase"})),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"Then in your terminal or cmd prompt, Firebase CLI will give multiple options like Realtime Database, Firestore, Analytics, Hosting, etc. In that ",Object(r.b)("strong",{parentName:"li"},"select Hosting"))),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:Object(i.a)("https://miro.medium.com/max/1400/1*J4FvNfpeuDIh0PHVF7scHw.png"),alt:"firebase"})),Object(r.b)("ol",{start:5},Object(r.b)("li",{parentName:"ol"},"After selecting Hosting you can see these options, in that select ",Object(r.b)("strong",{parentName:"li"},"Use an existing project"))),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:Object(i.a)("https://miro.medium.com/max/1328/1*CIs7-cFm27_A-XmAkkS-Jw.png"),alt:"firebase"})),Object(r.b)("ol",{start:6},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Once you select the above option you can see all the projects present in your firebase account in that select the project in which you want to host")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"After selection, you will be asked the following questions"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"What do you want to use as your public directory? ",Object(r.b)("strong",{parentName:"li"},"build")),Object(r.b)("li",{parentName:"ul"},"Configure as a single-page app (rewrite all URLs to /index.html)?\n",Object(r.b)("strong",{parentName:"li"},Object(r.b)("em",{parentName:"strong"},"No If index.html it\u2019s already present then you be will ask for do you want to overwrite file then say \u2018no\u2019"))))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Here is your major task is done and you\u2019re just one step behind to go live")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Execute the final deploy command"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"firebase deploy\n")),Object(r.b)("p",null,"Aye Aye Captain you\u2019re application is live now, Kudos \ud83c\udf8a"),Object(r.b)("p",null,"Automating the application hosting using Github Action"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Push all your code to GitHub")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Go to your repository in GitHub and click on ",Object(r.b)("strong",{parentName:"p"},"Action")," and then click on ",Object(r.b)("strong",{parentName:"p"},"Set up a workflow yourself")))),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:Object(i.a)("https://miro.medium.com/max/1400/1*cam0Vs7DyFUouCj3_rzHSA.png"),alt:"firebase"})),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Copy the code from this ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/abhinpai/React-GraphQL-API-Explorer/blob/master/.github/workflows/main.yml"}),"repo")," and copy it in your code pane")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Execute below cmd to get the Firebase Token, it will ask for login and on successful login, you will receive the token in a terminal or in cmd prompt. Copy that token"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"firebase login:ci\n")),Object(r.b)("ol",{start:5},Object(r.b)("li",{parentName:"ol"},"Now you\u2019re almost there, go back to GitHub click on setting > click on the secret tab to add Firebase Token")),Object(r.b)("p",{align:"center"},Object(r.b)("img",{src:Object(i.a)("https://miro.medium.com/max/1400/1*LBTPHdTFvIkZZUAsO0YoXA.png"),alt:"firebase"})),Object(r.b)("p",null,"Bingo you are all done now your deployment process is automated \ud83d\ude0d\nOMG, this is the end of the Story hope you guys find it\u2019s useful.\nFor reference follow my project in GitHub"),Object(r.b)("p",null,"For a reference you can follow this \ud83d\udc49 ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/abhinpai/React-GraphQL-API-Explorer"}),"repo")))}s.isMDXComponent=!0},164:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return j}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),p=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,j=s["".concat(i,".").concat(m)]||s[m]||u[m]||r;return n?o.a.createElement(j,c(c({ref:t},b),{},{components:n})):o.a.createElement(j,c({ref:t},b))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var b=2;b<r;b++)i[b]=n[b];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},165:function(e,t,n){"use strict";var a=n(0),o=n(35);t.a=function(){return Object(a.useContext)(o.a)}},166:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(165);function o(e){const{siteConfig:t}=Object(a.a)(),{baseUrl:n="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}}}]);