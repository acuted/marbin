import{s as B,n as T,r as D}from"../chunks/scheduler.DtGJeGpk.js";import{S as I,i as O,g as u,s as b,h,j as w,x as y,c as x,f as m,l as E,k as f,a as H,y as p,z as j,A as q,H as P,B as S}from"../chunks/index.0H0jC6Qd.js";function N(l){let e,t="Written text will appear here";return{c(){e=u("p"),e.textContent=t,this.h()},l(a){e=h(a,"P",{style:!0,class:!0,"data-svelte-h":!0}),y(e)!=="svelte-akoflh"&&(e.textContent=t),this.h()},h(){E(e,"text-align","center"),E(e,"color","#cccc"),f(e,"class","svelte-wk0hs6")},m(a,r){H(a,e,r)},p:T,d(a){a&&m(e)}}}function V(l){let e,t,a=z(l[0])+"";return{c(){e=u("p"),t=new P(!1),this.h()},l(r){e=h(r,"P",{class:!0});var n=w(e);t=S(n,!1),n.forEach(m),this.h()},h(){t.a=null,f(e,"class","svelte-wk0hs6")},m(r,n){H(r,e,n),t.m(a,e)},p(r,n){n&1&&a!==(a=z(r[0])+"")&&t.p(a)},d(r){r&&m(e)}}}function W(l){let e,t,a="Marbin",r,n,g,c,_,o,A="Download this file",C,v,L='<div style="text-align: left; margin-top: 60px; border-top: 1px solid #cccc;"><br/> <a style="text-decoration: none;" href="./">A simple text editor that incorporates a bit markdown details.</a></div> <footer style="padding-bottom: 10px; text-align: center;"><p class="svelte-wk0hs6"><small>All rights reserved to <a href="https://github.com/acuted">@acuted</a> © 2024</small></p></footer>',$,M;function U(i,s){return i[0]?V:N}let k=U(l),d=k(l);return{c(){e=u("main"),t=u("h1"),t.textContent=a,r=b(),n=u("div"),d.c(),g=b(),c=u("textarea"),_=b(),o=u("button"),o.textContent=A,C=b(),v=u("div"),v.innerHTML=L,this.h()},l(i){e=h(i,"MAIN",{class:!0});var s=w(e);t=h(s,"H1",{style:!0,"data-svelte-h":!0}),y(t)!=="svelte-1r1hcaq"&&(t.textContent=a),r=x(s),n=h(s,"DIV",{class:!0});var R=w(n);d.l(R),R.forEach(m),g=x(s),c=h(s,"TEXTAREA",{placeholder:!0,class:!0}),w(c).forEach(m),_=x(s),o=h(s,"BUTTON",{class:!0,title:!0,"data-svelte-h":!0}),y(o)!=="svelte-a4gbnh"&&(o.textContent=A),C=x(s),v=h(s,"DIV",{"data-svelte-h":!0}),y(v)!=="svelte-1yzt856"&&(v.innerHTML=L),s.forEach(m),this.h()},h(){E(t,"font-size","40px"),f(n,"class","container-text svelte-wk0hs6"),f(c,"placeholder","Use *asterisks* for bold, _underscores_ for italic, and [text](link url) for links."),f(c,"class","svelte-wk0hs6"),f(o,"class","save-button svelte-wk0hs6"),f(o,"title","Save as Markdown"),f(e,"class","container svelte-wk0hs6")},m(i,s){H(i,e,s),p(e,t),p(e,r),p(e,n),d.m(n,null),p(e,g),p(e,c),j(c,l[0]),p(e,_),p(e,o),p(e,C),p(e,v),$||(M=[q(c,"input",l[2]),q(o,"click",l[1])],$=!0)},p(i,[s]){k===(k=U(i))&&d?d.p(i,s):(d.d(1),d=k(i),d&&(d.c(),d.m(n,null))),s&1&&j(c,i[0])},i:T,o:T,d(i){i&&m(e),d.d(),$=!1,D(M)}}}function z(l){return l=X(l),l.replace(/\*([^*]+)\*/g,"<strong>$1</strong>").replace(/_([^_]+)_/g,"<em>$1</em>").replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')}function X(l){return l.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function F(l,e,t){let a="";function r(){const g=a.replace(/\*(.*?)\*/g,"**$1**").replace(/_(.*?)_/g,"*$1*"),c=new Blob([g],{type:"text/markdown"}),_=URL.createObjectURL(c),o=document.createElement("a");o.href=_,o.download="formatted_text.md",document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(_)}function n(){a=this.value,t(0,a)}return[a,r,n]}class K extends I{constructor(e){super(),O(this,e,F,W,B,{})}}export{K as component};
