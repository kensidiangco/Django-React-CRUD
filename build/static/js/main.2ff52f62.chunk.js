(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{22:function(t,e,n){},24:function(t,e,n){},42:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var c=n(0),s=n(2),a=n.n(s),r=n(14),o=n.n(r),i=(n(22),n(5)),l=n.n(i),d=n(15),j=n(3),u=(n(24),n(16)),p=n.n(u);n(42);function h(t){var e=t.id,n=t.title,s=t.text,a=t.postDelete,r=t.postUpdate;return Object(c.jsx)("div",{className:"posts",children:Object(c.jsxs)("div",{className:"post__card",children:[Object(c.jsxs)("div",{className:"post__button",children:[Object(c.jsx)("button",{className:"deleteButton",onClick:a,children:"Delete"}),Object(c.jsx)("button",{className:"editButton",onClick:r,children:"Edit"})]}),Object(c.jsxs)("div",{className:"card__header",children:[Object(c.jsx)("label",{for:"title",children:Object(c.jsx)("small",{children:"Title:"})}),Object(c.jsx)("h3",{name:"title",children:n})]}),Object(c.jsxs)("div",{className:"card__body",children:[Object(c.jsx)("label",{for:"text",children:Object(c.jsx)("small",{children:"Text:"})}),Object(c.jsx)("p",{name:"text",children:s})]})]},e)})}var b=function(){var t=Object(s.useState)(""),e=Object(j.a)(t,2),n=e[0],a=e[1],r=Object(s.useState)(""),o=Object(j.a)(r,2),i=o[0],u=o[1],b=Object(s.useState)([]),x=Object(j.a)(b,2),O=x[0],f=x[1],m=Object(s.useState)([]),v=Object(j.a)(m,2),g=v[0],N=v[1],_=Object(s.useState)(!1),k=Object(j.a)(_,2),T=k[0],C=k[1];Object(s.useEffect)((function(){(function(){var t=Object(d.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p()("https://django-reactjs-crud.herokuapp.com/api/posts-list/");case 2:e=t.sent,f(e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[O]);var S=function(t){var e=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),c=0;c<n.length;c++){var s=n[c].trim();if(s.substring(0,t.length+1)===t+"="){e=decodeURIComponent(s.substring(t.length+1));break}}return e};return Object(c.jsxs)("div",{id:"top",className:"App",children:[Object(c.jsxs)("div",{className:"app__content",children:[Object(c.jsx)("div",{className:"app__header",children:Object(c.jsx)("h1",{children:"Post app"})}),Object(c.jsx)("div",{className:"post__formbase",children:Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e=S("csrftoken"),c="https://django-reactjs-crud.herokuapp.com/api/post-create/";!0===T&&(c="https://django-reactjs-crud.herokuapp.com/api/post-update/".concat(g.id,"/"),C(!1)),fetch(c,{method:"POST",headers:{"Content-type":"application/json","X-CSRFToken":e},body:JSON.stringify({title:n,text:i})}).then((function(t){a(""),u("")})).catch((function(t){console.log("ERROR:",t)}))},children:[Object(c.jsx)("label",{for:"title",children:"Title"}),Object(c.jsx)("input",{type:"text",id:"title",name:"title",placeholder:"Title",onChange:function(t){return a(t.target.value)},value:n,required:!0}),Object(c.jsx)("label",{for:"text",children:"Text"}),Object(c.jsx)("textarea",{rows:"5",cols:"25",id:"text",name:"text",placeholder:"Text",onChange:function(t){return u(t.target.value)},value:i,required:!0}),Object(c.jsx)("div",{className:"b",children:Object(c.jsx)("button",{className:"submitButton",type:"submit",children:"Post"})})]})})]}),0===O.length?Object(c.jsx)("div",{className:"post__header",children:Object(c.jsx)("h2",{children:"No post."})}):Object(c.jsx)("div",{className:"post__header",children:Object(c.jsx)("h2",{children:"Posts"})}),O.map((function(t){return Object(c.jsx)(h,{id:t.id,title:t.title,text:t.text,postDelete:function(){return function(t){var e=S("csrftoken");fetch("https://django-reactjs-crud.herokuapp.com/api/post-delete/".concat(t.id,"/"),{method:"DELETE",headers:{"Content-type":"application/json","X-CSRFToken":e}})}(t)},postUpdate:function(){return function(t){N(t),C(!0),a(t.title),u(t.text)}(t)}})})),Object(c.jsx)("a",{href:"#top",className:"toTopButton",children:"UP"})]})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,a=e.getLCP,r=e.getTTFB;n(t),c(t),s(t),a(t),r(t)}))};o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(b,{})}),document.getElementById("root")),x()}},[[43,1,2]]]);
//# sourceMappingURL=main.2ff52f62.chunk.js.map