(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{165:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(194),i=a(174),c=a(175),m=a(177);var o=function(e){const{metadata:t}=e;return l.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},l.a.createElement("div",{className:"pagination-nav__item"},t.previous&&l.a.createElement(m.a,{className:"pagination-nav__link",to:t.previous.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Previous"),l.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&l.a.createElement(m.a,{className:"pagination-nav__link",to:t.next.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Next"),l.a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))};var s=function(e,t,a){const[l,r]=Object(n.useState)(void 0);Object(n.useEffect)(()=>{let n=[],i=[];function c(){const c=function(){let e=0,t=null;for(n=document.getElementsByClassName("anchor");e<n.length&&!t;){const l=n[e],{top:r}=l.getBoundingClientRect();r>=0&&r<=a&&(t=l),e+=1}return t}();if(c){let a=0,n=!1;for(i=document.getElementsByClassName(e);a<i.length&&!n;){const e=i[a],{href:m}=e,o=decodeURIComponent(m.substring(m.indexOf("#")+1));c.id===o&&(l&&l.classList.remove(t),e.classList.add(t),r(e),n=!0),a+=1}}}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}})},d=a(179),E=a(109),g=a.n(E);function u({headings:e}){return s("table-of-contents__link","table-of-contents__link--active",100),l.a.createElement("div",{className:"col col--3"},l.a.createElement("div",{className:g.a.tableOfContents},l.a.createElement(v,{headings:e})))}function v({headings:e,isChild:t}){return e.length?l.a.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},e.map(e=>l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:"#"+e.id,className:"table-of-contents__link",dangerouslySetInnerHTML:{__html:e.value}}),l.a.createElement(v,{isChild:!0,headings:e.children})))):null}t.default=function(e){const{siteConfig:t={}}=Object(i.a)(),{url:a,title:n}=t,{content:s}=e,{metadata:E}=s,{description:v,title:p,permalink:h,editUrl:f,lastUpdatedAt:_,lastUpdatedBy:b,version:N,latestVersionMainDocPermalink:w}=E,{frontMatter:{image:k,keywords:y,hide_title:x,hide_table_of_contents:C}}=s,L=p?`${p} | ${n}`:n,O=Object(c.a)(k,{absolute:!0});return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,null,l.a.createElement("title",null,L),l.a.createElement("meta",{property:"og:title",content:L}),v&&l.a.createElement("meta",{name:"description",content:v}),v&&l.a.createElement("meta",{property:"og:description",content:v}),y&&y.length&&l.a.createElement("meta",{name:"keywords",content:y.join(",")}),k&&l.a.createElement("meta",{property:"og:image",content:O}),k&&l.a.createElement("meta",{property:"twitter:image",content:O}),k&&l.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+p}),h&&l.a.createElement("meta",{property:"og:url",content:a+h}),h&&l.a.createElement("link",{rel:"canonical",href:a+h})),l.a.createElement("div",{className:Object(d.a)("container padding-vert--lg",g.a.docItemWrapper)},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:Object(d.a)("col",{[g.a.docItemCol]:!C})},w&&l.a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},"next"===N?l.a.createElement("div",null,"This is unreleased documentation for ",n," ",l.a.createElement("strong",null,N)," version."):l.a.createElement("div",null,"This is archived documentation for ",n," ",l.a.createElement("strong",null,"v",N),", which is no longer actively maintained."),l.a.createElement("div",{className:"margin-top--md"},"For up-to-date documentation, see the"," ",l.a.createElement("strong",null,l.a.createElement(m.a,{to:w},"latest version")),".")),l.a.createElement("div",{className:g.a.docItemContainer},l.a.createElement("article",null,N&&l.a.createElement("div",null,l.a.createElement("span",{className:"badge badge--secondary"},"Version: ",N)),!x&&l.a.createElement("header",null,l.a.createElement("h1",{className:g.a.docTitle},p)),l.a.createElement("div",{className:"markdown"},l.a.createElement(s,null))),(f||_||b)&&l.a.createElement("div",{className:"margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},f&&l.a.createElement("a",{href:f,target:"_blank",rel:"noreferrer noopener"},l.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},l.a.createElement("g",null,l.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(_||b)&&l.a.createElement("div",{className:"col text--right"},l.a.createElement("em",null,l.a.createElement("small",null,"Last updated"," ",_&&l.a.createElement(l.a.Fragment,null,"on"," ",l.a.createElement("time",{dateTime:new Date(1e3*_).toISOString(),className:g.a.docLastUpdatedAt},new Date(1e3*_).toLocaleDateString()),b&&" "),b&&l.a.createElement(l.a.Fragment,null,"by ",l.a.createElement("strong",null,b)),!1))))),l.a.createElement("div",{className:"margin-vert--lg"},l.a.createElement(o,{metadata:E})))),!C&&s.rightToc&&l.a.createElement(u,{headings:s.rightToc}))))}}}]);