(window.webpackJsonp=window.webpackJsonp||[]).push([[10,8,58],{156:function(e,t,a){"use strict";a.r(t);a(14);var n=a(0),l=a.n(n),r=a(163),c=a(164),i=a(47),s=a(169),o=a(96),m=a(2),d=a(165),u=a.n(d),E=a(195),g=a(198),b=a(199),p=a(197),v=a(167),h=a(173),f=a(108),_=a.n(f);function N({item:e,onItemClick:t,collapsible:a,activePath:r,...c}){const{items:i,href:s,label:o,type:d}=e,[E,g]=Object(n.useState)(e.collapsed),[b,p]=Object(n.useState)(null);e.collapsed!==b&&(p(e.collapsed),g(e.collapsed));const f=Object(n.useCallback)(e=>{e.preventDefault(),e.target.blur(),g(e=>!e)});switch(d){case"category":return i.length>0&&l.a.createElement("li",{className:u()("menu__list-item",{"menu__list-item--collapsed":E}),key:o},l.a.createElement("a",Object(m.a)({className:u()("menu__link",{"menu__link--sublist":a,"menu__link--active":a&&!e.collapsed}),href:"#!",onClick:a?f:void 0},c),o),l.a.createElement("ul",{className:"menu__list"},i.map(e=>l.a.createElement(N,{tabIndex:E?"-1":"0",key:e.label,item:e,onItemClick:t,collapsible:a,activePath:r}))));case"link":default:return l.a.createElement("li",{className:"menu__list-item",key:o},l.a.createElement(v.a,Object(m.a)({className:u()("menu__link",{"menu__link--active":s===r}),to:s},Object(h.a)(s)?{isNavLink:!0,exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"},c),o))}}var k=function(e){const[t,a]=Object(n.useState)(!1),{siteConfig:{themeConfig:{navbar:{title:r,hideOnScroll:i=!1}={}}}={},isClient:s}=Object(c.a)(),{logoLink:o,logoLinkProps:d,logoImageUrl:h,logoAlt:f}=Object(b.a)(),{isAnnouncementBarClosed:k}=Object(E.a)(),{scrollY:C}=Object(p.a)(),{docsSidebars:w,path:y,sidebar:O,sidebarCollapsible:j}=e;if(Object(g.a)(t),!O)return null;const M=w[O];if(!M)throw new Error(`Cannot find the sidebar "${O}" in the sidebar config!`);return j&&M.forEach(e=>function e(t,a){const{items:n,href:l,type:r}=t;switch(r){case"category":{const l=n.map(t=>e(t,a)).filter(e=>e).length>0;return t.collapsed=!l,l}case"link":default:return l===a}}(e,y)),l.a.createElement("div",{className:u()(_.a.sidebar,{[_.a.sidebarWithHideableNavbar]:i})},i&&l.a.createElement(v.a,Object(m.a)({tabIndex:"-1",className:_.a.sidebarLogo,to:o},d),null!=h&&l.a.createElement("img",{key:s,src:h,alt:f}),null!=r&&l.a.createElement("strong",null,r)),l.a.createElement("div",{className:u()("menu","menu--responsive",_.a.menu,{"menu--show":t,[_.a.menuWithAnnouncementBar]:!k&&0===C})},l.a.createElement("button",{"aria-label":t?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{a(!t)}},t?l.a.createElement("span",{className:u()(_.a.sidebarMenuIcon,_.a.sidebarMenuCloseIcon)},"\xd7"):l.a.createElement("svg",{"aria-label":"Menu",className:_.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),l.a.createElement("ul",{className:"menu__list"},M.map(e=>l.a.createElement(N,{key:e.label,item:e,onItemClick:e=>{e.target.blur(),a(!1)},collapsible:j,activePath:y})))))},C=a(184),w=a(192),y=a(177),O=a(113),j=a.n(O);t.default=function(e){const{route:t,docsMetadata:a,location:n,content:m}=e,{permalinkToSidebar:d,docsSidebars:u,version:E,isHomePage:g,homePagePath:b}=a,p=g?{}:t.routes.find(e=>Object(y.a)(n.pathname,e))||{},v=g?m.metadata.sidebar:d[p.path],{siteConfig:{themeConfig:{sidebarCollapsible:h=!0}={}}={},isClient:f}=Object(c.a)();return g||0!==Object.keys(p).length?l.a.createElement(s.a,{version:E,key:f},l.a.createElement("div",{className:j.a.docPage},v&&l.a.createElement("div",{className:j.a.docSidebarContainer},l.a.createElement(k,{docsSidebars:u,path:g?b:p.path,sidebar:v,sidebarCollapsible:h})),l.a.createElement("main",{className:j.a.docMainContainer},l.a.createElement(r.a,{components:C.a},g?l.a.createElement(o.default,{content:m}):Object(i.a)(t.routes))))):l.a.createElement(w.default,e)}},192:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(169);t.default=function(){return l.a.createElement(r.a,{title:"Page Not Found"},l.a.createElement("div",{className:"container margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--6 col--offset-3"},l.a.createElement("h1",{className:"hero__title"},"Page Not Found"),l.a.createElement("p",null,"We could not find what you were looking for."),l.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},96:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(185),c=a(173),i=a(164),s=a(166),o=a(167);var m=function(e){const{metadata:t}=e;return l.a.createElement("nav",{className:"pagination-nav"},l.a.createElement("div",{className:"pagination-nav__item"},t.previous&&l.a.createElement(o.a,{className:"pagination-nav__link",to:t.previous.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Previous"),l.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&l.a.createElement(o.a,{className:"pagination-nav__link",to:t.next.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Next"),l.a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))};var d=function(e,t,a){const[l,r]=Object(n.useState)(void 0);Object(n.useEffect)(()=>{let n=[],c=[];function i(){const i=function(){let e=0,t=null;for(n=document.getElementsByClassName("anchor");e<n.length&&!t;){const l=n[e],{top:r}=l.getBoundingClientRect();r>=0&&r<=a&&(t=l),e+=1}return t}();if(i){let a=0,n=!1;for(c=document.getElementsByClassName(e);a<c.length&&!n;){const e=c[a],{href:s}=e,o=decodeURIComponent(s.substring(s.indexOf("#")+1));i.id===o&&(l&&l.classList.remove(t),e.classList.add(t),r(e),n=!0),a+=1}}}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}})},u=a(165),E=a.n(u),g=a(97),b=a.n(g);function p({headings:e}){return d("table-of-contents__link","table-of-contents__link--active",100),l.a.createElement("div",{className:"col col--3"},l.a.createElement("div",{className:b.a.tableOfContents},l.a.createElement(v,{headings:e})))}function v({headings:e,isChild:t}){return e.length?l.a.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},e.map(e=>l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:"#"+e.id,className:"table-of-contents__link",dangerouslySetInnerHTML:{__html:e.value}}),l.a.createElement(v,{isChild:!0,headings:e.children})))):null}t.default=function(e){const{siteConfig:t={}}=Object(i.a)(),{url:a,title:n}=t,{content:o}=e,{metadata:d}=o,{description:u,title:g,permalink:v,editUrl:h,lastUpdatedAt:f,lastUpdatedBy:_,version:N}=d,{frontMatter:{image:k,keywords:C,hide_title:w,hide_table_of_contents:y}}=o,O=g?`${g} | ${n}`:n;let j=a+Object(s.a)(k);return Object(c.a)(k)||(j=k),l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,null,l.a.createElement("title",null,O),l.a.createElement("meta",{property:"og:title",content:O}),u&&l.a.createElement("meta",{name:"description",content:u}),u&&l.a.createElement("meta",{property:"og:description",content:u}),C&&C.length&&l.a.createElement("meta",{name:"keywords",content:C.join(",")}),k&&l.a.createElement("meta",{property:"og:image",content:j}),k&&l.a.createElement("meta",{property:"twitter:image",content:j}),k&&l.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+g}),v&&l.a.createElement("meta",{property:"og:url",content:a+v}),v&&l.a.createElement("link",{rel:"canonical",href:a+v})),l.a.createElement("div",{className:E()("container padding-vert--lg",b.a.docItemWrapper)},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:E()("col",{[b.a.docItemCol]:!y})},l.a.createElement("div",{className:b.a.docItemContainer},l.a.createElement("article",null,N&&l.a.createElement("div",null,l.a.createElement("span",{className:"badge badge--secondary"},"Version: ",N)),!w&&l.a.createElement("header",null,l.a.createElement("h1",{className:b.a.docTitle},g)),l.a.createElement("div",{className:"markdown"},l.a.createElement(o,null))),(h||f||_)&&l.a.createElement("div",{className:"margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},h&&l.a.createElement("a",{href:h,target:"_blank",rel:"noreferrer noopener"},l.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},l.a.createElement("g",null,l.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(f||_)&&l.a.createElement("div",{className:"col text--right"},l.a.createElement("em",null,l.a.createElement("small",null,"Last updated"," ",f&&l.a.createElement(l.a.Fragment,null,"on"," ",l.a.createElement("time",{dateTime:new Date(1e3*f).toISOString(),className:b.a.docLastUpdatedAt},new Date(1e3*f).toLocaleDateString()),_&&" "),_&&l.a.createElement(l.a.Fragment,null,"by ",l.a.createElement("strong",null,_)),!1))))),l.a.createElement("div",{className:"margin-vert--lg"},l.a.createElement(m,{metadata:d})))),!y&&o.rightToc&&l.a.createElement(p,{headings:o.rightToc}))))}}}]);