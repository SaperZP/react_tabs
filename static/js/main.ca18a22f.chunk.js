(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{11:function(t,e,c){},13:function(t,e,c){"use strict";c.r(e);var n=c(3),a=c.n(n),i=(c(10),c(5)),s=c(1),b=(c(11),c(4)),l=c.n(b),d=c(0),o=function(t){var e=t.tabs,c=t.selectedTab,n=t.tabSelectHandler;return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"tabs is-boxed",children:Object(d.jsx)("ul",{children:e.map((function(t){return Object(d.jsx)("li",{className:l()({"is-active":t.id===c.id}),children:Object(d.jsx)("a",{href:"#".concat(t.id),onClick:function(){n(t)},children:t.title})},t.id)}))})}),Object(d.jsx)("div",{className:"block","data-cy":"tab-content",children:c.content})]})},r=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],j=function(){var t=Object(s.useState)(r[0]),e=Object(i.a)(t,2),c=e[0],n=e[1];return Object(d.jsxs)("div",{className:"section",children:[Object(d.jsx)("h1",{className:"title",children:"Selected tab is ".concat(c.title)}),Object(d.jsx)(o,{"data-cy":"tab-content",tabs:r,selectedTab:c,tabSelectHandler:function(t){t!==c&&n(t)}})]})};a.a.render(Object(d.jsx)(j,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.ca18a22f.chunk.js.map