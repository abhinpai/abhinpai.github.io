(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{95:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(146),c=a(143),i=a(137),m=a(142),o=a(140);var s=function(e){const{metadata:t}=e;return l.a.createElement("nav",{className:"pagination-nav"},l.a.createElement("div",{className:"pagination-nav__item"},t.previous&&l.a.createElement(o.a,{className:"pagination-nav__link",to:t.previous.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Previous"),l.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&l.a.createElement(o.a,{className:"pagination-nav__link",to:t.next.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Next"),l.a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))};var d=function(e,t,a){const[l,r]=Object(n.useState)(void 0);Object(n.useEffect)(()=>{let n=[],c=[];function i(){const i=function(){let e=0,t=null;for(n=document.getElementsByClassName("anchor");e<n.length&&!t;){const l=n[e],{top:r}=l.getBoundingClientRect();r>=0&&r<=a&&(t=l),e+=1}return t}();if(i){let a=0,n=!1;for(c=document.getElementsByClassName(e);a<c.length&&!n;){const e=c[a],{href:m}=e,o=decodeURIComponent(m.substring(m.indexOf("#")+1));i.id===o&&(l&&l.classList.remove(t),e.classList.add(t),r(e),n=!0),a+=1}}}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}})},E=a(139),g=a.n(E),u=a(96),v=a.n(u);function p({headings:e}){return d("table-of-contents__link","table-of-contents__link--active",100),l.a.createElement("div",{className:"col col--3"},l.a.createElement("div",{className:v.a.tableOfContents},l.a.createElement(h,{headings:e})))}function h({headings:e,isChild:t}){return e.length?l.a.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},e.map(e=>l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:"#"+e.id,className:"table-of-contents__link",dangerouslySetInnerHTML:{__html:e.value}}),l.a.createElement(h,{isChild:!0,headings:e.children})))):null}t.default=function(e){const{siteConfig:t={}}=Object(i.a)(),{url:a,title:n}=t,{content:o}=e,{metadata:d}=o,{description:E,title:u,permalink:h,editUrl:_,lastUpdatedAt:f,lastUpdatedBy:N,version:b}=d,{frontMatter:{image:w,keywords:k,hide_title:y,hide_table_of_contents:C}}=o,x=u?`${u} | ${n}`:n;let L=a+Object(m.a)(w);return Object(c.a)(w)||(L=w),l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,null,l.a.createElement("title",null,x),l.a.createElement("meta",{property:"og:title",content:x}),E&&l.a.createElement("meta",{name:"description",content:E}),E&&l.a.createElement("meta",{property:"og:description",content:E}),k&&k.length&&l.a.createElement("meta",{name:"keywords",content:k.join(",")}),w&&l.a.createElement("meta",{property:"og:image",content:L}),w&&l.a.createElement("meta",{property:"twitter:image",content:L}),w&&l.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+u}),h&&l.a.createElement("meta",{property:"og:url",content:a+h}),h&&l.a.createElement("link",{rel:"canonical",href:a+h})),l.a.createElement("div",{className:g()("container padding-vert--lg",v.a.docItemWrapper)},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:g()("col",{[v.a.docItemCol]:!C})},l.a.createElement("div",{className:v.a.docItemContainer},l.a.createElement("article",null,b&&l.a.createElement("div",null,l.a.createElement("span",{className:"badge badge--secondary"},"Version: ",b)),!y&&l.a.createElement("header",null,l.a.createElement("h1",{className:v.a.docTitle},u)),l.a.createElement("div",{className:"markdown"},l.a.createElement(o,null))),(_||f||N)&&l.a.createElement("div",{className:"margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},_&&l.a.createElement("a",{href:_,target:"_blank",rel:"noreferrer noopener"},l.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},l.a.createElement("g",null,l.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(f||N)&&l.a.createElement("div",{className:"col text--right"},l.a.createElement("em",null,l.a.createElement("small",null,"Last updated"," ",f&&l.a.createElement(l.a.Fragment,null,"on"," ",l.a.createElement("time",{dateTime:new Date(1e3*f).toISOString(),className:v.a.docLastUpdatedAt},new Date(1e3*f).toLocaleDateString()),N&&" "),N&&l.a.createElement(l.a.Fragment,null,"by ",l.a.createElement("strong",null,N)),!1))))),l.a.createElement("div",{className:"margin-vert--lg"},l.a.createElement(s,{metadata:d})))),!C&&o.rightToc&&l.a.createElement(p,{headings:o.rightToc}))))}}}]);