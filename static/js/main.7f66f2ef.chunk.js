(this["webpackJsonpbox-office"]=this["webpackJsonpbox-office"]||[]).push([[0],{37:function(n,e,t){},50:function(n,e,t){"use strict";t.r(e);var r=t(0),i=t(1),c=t(24),a=t.n(c),o=t(10),s=(t(37),t(4)),d=t(2),l=t(6),u=t(3),b=t(25),j=t.n(b);function p(){var n=Object(u.a)(["\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  background-color: ",";\n  clip-path: polygon(\n    50% 0%,\n    61% 35%,\n    98% 35%,\n    68% 57%,\n    79% 91%,\n    50% 70%,\n    21% 91%,\n    32% 57%,\n    2% 35%,\n    39% 35%\n  );\n"]);return p=function(){return n},n}function x(){var n=Object(u.a)(["\n   width: 300px;\n  height: 100%;\n  margin: 0 15px 40px;\n\n  .img-wrapper {\n    width: 100%;\n    border-radius: 40px;\n    height: 420px;\n    overflow: hidden;\n    border: 1px solid #ddd;\n\n    img {\n      object-fit: cover;\n      height: 100%;\n      width: 100%;\n    }\n  }\n\n\n  h1 {\n    margin: 10px 0;\n    font-size: 21px;\n  }\n\n  p {\n    margin: 0;\n  }\n"]);return x=function(){return n},n}function h(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n"]);return h=function(){return n},n}var f=d.b.div(h()),m=Object(d.b)(j.a)(x()),O=d.b.div(p(),(function(n){return n.active?"#ffc806":"#ddd"}));function g(){var n=Object(u.a)(["\n  .deathday {\n    margin: 0;\n    margin-top: 15px;\n    font-weight: bold;\n  }\n"]);return g=function(){return n},n}var v=Object(d.b)(m)(g()),w=function(n){var e=n.image,t=n.name,i=n.gender,c=n.country,a=n.birthday,o=n.deathday;return Object(r.jsxs)(v,{children:[Object(r.jsx)("div",{className:"img-wrapper",children:Object(r.jsx)("img",{src:e,alt:"actor"})}),Object(r.jsxs)("h1",{children:[t," ",i?"(".concat(i,")"):null]}),Object(r.jsx)("p",{children:c?"Comes from ".concat(c):"No country known"}),a?Object(r.jsxs)("p",{children:["Born ",a]}):null,Object(r.jsx)("p",{className:"deathday",children:o?"Died ".concat(o):"Alive"})]})},y=t.p+"static/media/not-found.295cf90a.png",k=function(n){var e=n.data;return Object(r.jsx)(f,{children:e.map((function(n){var e=n.person;return Object(r.jsx)(w,{name:e.name,country:e.country?e.country.name:null,birthday:e.birthday,deathday:e.deathday,gender:e.gender,image:e.image?e.image.medium:y},e.id)}))})},S=t(12),C=t(29);function N(){var n=Object(u.a)(["\n  display: block;\n  position: relative;\n  padding-left: 25px;\n  cursor: pointer;\n  font-size: 13px;\n  user-select: none;\n  font-weight: 700;\n  line-height: 1.65;\n\n  input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n  }\n\n  span {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 16px;\n    width: 16px;\n    background-color: #fff;\n    border: 2px solid ",";\n    border-radius: 50%;\n  }\n\n  input:checked ~ span {\n    background-color: #fff;\n    border: 2px solid ",";\n  }\n\n  span:after {\n    content: '';\n    position: absolute;\n    display: none;\n  }\n\n  input:checked ~ span:after {\n    display: block;\n  }\n\n  span:after {\n    top: 4px;\n    left: 4px;\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background: ",";\n  }\n"]);return N=function(){return n},n}var E=d.b.label(N(),(function(n){return n.theme.mainColors.blue}),(function(n){return n.theme.mainColors.blue}),(function(n){return n.theme.mainColors.blue})),D=function(n){var e=n.label,t=Object(C.a)(n,["label"]);return Object(r.jsxs)(E,{htmlFor:t.id,children:[e,Object(r.jsx)("input",Object(S.a)(Object(S.a)({},t),{},{type:"radio"})),Object(r.jsx)("span",{})]})},I=Object(i.memo)(D);function F(){var n=Object(u.a)(["\n  margin: 0 10px;\n  padding: 3px 15px;\n  position: relative;\n  text-decoration: none;\n  color: ",";\n  &.active {\n    color: ",";\n    &:after {\n      content: '';\n      position: absolute;\n      display: block;\n      height: 2px;\n      left: 0%;\n      bottom: 0;\n      background-color: ",";\n      animation: slide-in 0.3s ease-in forwards;\n      @keyframes slide-in {\n        from {\n          left: 50%;\n          width: 0;\n        }\n        to {\n          left: 0%;\n          width: 100%;\n        }\n      }\n    }\n  }\n"]);return F=function(){return n},n}function A(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  list-style: none;\n  margin: 0 0 30px;\n  padding: 0;\n"]);return A=function(){return n},n}var L=d.b.ul(A()),T=Object(d.b)(o.b)(F(),(function(n){return n.theme.mainColors.gray}),(function(n){return n.theme.mainColors.blue}),(function(n){return n.theme.mainColors.blue})),_=[{to:"/",text:"Home"},{to:"/starred",text:"Starred"}],z=function(){var n=Object(s.f)();return Object(r.jsx)("div",{children:Object(r.jsx)(L,{children:_.map((function(e){return Object(r.jsx)("li",{children:Object(r.jsx)(T,{to:e.to,className:e.to===n.pathname?"active":"",children:e.text})},e.to)}))})})},H=Object(i.memo)(z);function J(){var n=Object(u.a)(["\n  text-align: center;\n  margin: 0 0 40px;\n\n  h1 {\n    color: ",";\n    letter-spacing: 10px;\n    text-transform: uppercase;\n    margin: 0 0 10px;\n  }\n\n  p {\n    color: ",";\n    margin: 0;\n  }\n"]);return J=function(){return n},n}var R=d.b.div(J(),(function(n){return n.theme.mainColors.blue}),(function(n){return n.theme.mainColors.dark})),B=function(n){var e=n.title,t=n.subtitle;return Object(r.jsxs)(R,{children:[Object(r.jsx)("h1",{children:e}),Object(r.jsxs)("p",{children:[" ",t]})]})},P=Object(i.memo)(B),M=function(n){var e=n.children;return Object(r.jsxs)("div",{children:[Object(r.jsx)(H,{}),Object(r.jsx)(P,{title:"Box Office",subtitle:"Are you looking for a movie or an actor?"}),e]})};function V(){var n=Object(u.a)(["\n  .btns {\n    margin-top: 15px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    a {\n      text-decoration-color: #000;\n      color: #000;\n      &:hover {\n        text-decoration-color: blue;\n        color: blue;\n      }\n    }\n    button {\n      outline: none;\n      border: 1px solid #8e8e8e;\n      border-radius: 15px;\n      padding: 5px 20px;\n      background-color: #fff;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      &:hover {\n        cursor: pointer;\n      }\n    }\n  }\n"]);return V=function(){return n},n}var U=Object(d.b)(m)(V()),q=function(n){var e=n.id,t=n.image,i=n.name,c=n.summary,a=n.onStarClick,s=n.isStarred,d=c?"".concat(c.split(" ").slice(0,10).join(" ").replace(/<.+?>/g,""),"..."):"No description";return Object(r.jsxs)(U,{children:[Object(r.jsx)("div",{className:"img-wrapper",children:Object(r.jsx)("img",{src:t,alt:"show"})}),Object(r.jsx)("h1",{children:i}),Object(r.jsx)("p",{children:d}),Object(r.jsxs)("div",{className:"btns",children:[Object(r.jsx)(o.b,{to:"/show/".concat(e),children:"Read more"}),Object(r.jsx)("button",{type:"button",onClick:a,children:Object(r.jsx)(O,{active:s})})]})]})},K=t(31),Q=t(22),G=t.n(Q),W=t(30),X="https://api.tvmaze.com";function Y(n){return Z.apply(this,arguments)}function Z(){return(Z=Object(W.a)(G.a.mark((function n(e){var t;return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(X).concat(e)).then((function(n){return n.json()}));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function $(n,e){switch(e.type){case"ADD":return[].concat(Object(K.a)(n),[e.showId]);case"REMOVE":return n.filter((function(n){return n!==e.showId}));default:return n}}function nn(n,e,t){var r=Object(i.useReducer)(n,e,(function(n){var e=localStorage.getItem(t);return e?JSON.parse(e):n})),c=Object(l.a)(r,2),a=c[0],o=c[1];return Object(i.useEffect)((function(){localStorage.setItem(t,JSON.stringify(a))}),[a,t]),[a,o]}function en(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"show";return nn($,[],n)}var tn=function(n,e){switch(e.type){case"FETCH_SUCCESS":return{isLoading:!1,error:null,show:e.show};case"FETCH_FAILED":return Object(S.a)(Object(S.a)({},n),{},{isLoading:!1,error:e.error});default:return n}};var rn=function(n){var e=n.data,t=en(),c=Object(l.a)(t,2),a=c[0],o=c[1];return Object(r.jsx)(f,{children:e.map((function(n){var e=n.show,t=a.includes(e.id),c=Object(i.useCallback)((function(){o(t?{type:"REMOVE",showId:e.id}:{type:"ADD",showId:e.id})}),[t,e.id]);return Object(r.jsx)(q,{id:e.id,name:e.name,image:e.image?e.image.medium:y,summary:e.summary,onStarClick:c,isStarred:t},e.id)}))})};function cn(){var n=Object(u.a)(["\n  text-align: center;\n  margin-bottom: 35px;\n  \n  button {\n    color: #fff;\n    background-color: ",";\n    margin: auto;\n    padding: 10px 50px;\n    font-size: 15px;\n    border: none;\n    outline: none;\n    border-radius: 12px;\n    &:hover {\n      cursor: pointer;\n    }\n  }\n"]);return cn=function(){return n},n}function an(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  margin: 20px 0;\n\n  div {\n    margin: 0 15px;\n  }\n"]);return an=function(){return n},n}function on(){var n=Object(u.a)(["\n  display: block;\n  font-family: 'Roboto', sans-serif;\n  width: 200px;\n  margin: auto;\n  outline: none;\n  padding: 13px 15px;\n  border: 1px solid #dbdbdb;\n  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);\n  font-size: 14px;\n  border-radius: 12px;\n  color: #8d8d8d;\n\n  &::placeholder {\n    font-weight: 300;\n    color: #8d8d8d;\n  }\n"]);return on=function(){return n},n}var sn=d.b.input(on()),dn=d.b.div(an()),ln=d.b.div(cn(),(function(n){return n.theme.mainColors.blue})),un=function(n){return n&&0===n.length?Object(r.jsx)("div",{children:"No results"}):n&&n.length>0?n[0].show?Object(r.jsx)(rn,{data:n}):Object(r.jsx)(k,{data:n}):null},bn=function(){var n=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"lastQuery",e=Object(i.useState)((function(){var e=sessionStorage.getItem(n);return e?JSON.parse(e):""})),t=Object(l.a)(e,2),r=t[0],c=t[1],a=Object(i.useCallback)((function(e){c(e),sessionStorage.setItem(n,JSON.stringify(e))}),[n]);return[r,a]}(),e=Object(l.a)(n,2),t=e[0],c=e[1],a=Object(i.useState)(null),o=Object(l.a)(a,2),s=o[0],d=o[1],u=Object(i.useState)("shows"),b=Object(l.a)(u,2),j=b[0],p=b[1],x="shows"===j,h=function(){Y("/search/".concat(j,"?q=").concat(t)).then((function(n){d(n)}))},f=Object(i.useCallback)((function(n){c(n.target.value)}),[c]),m=Object(i.useCallback)((function(n){p(n.target.value)}),[]);return Object(r.jsxs)(M,{children:[Object(r.jsx)(sn,{type:"text",placeholder:"Search for",onChange:f,onKeyDown:function(n){13===n.keyCode&&h()},value:t}),Object(r.jsxs)(dn,{children:[Object(r.jsx)("div",{children:Object(r.jsx)(I,{label:"Shows",id:"shows-search",value:"shows",checked:x,onChange:m})}),Object(r.jsx)("div",{children:Object(r.jsx)(I,{label:"Actors",id:"actors-search",type:"radio",value:"people",checked:!x,onChange:m})})]}),Object(r.jsx)(ln,{children:Object(r.jsx)("button",{type:"button",onClick:h,children:"Search"})}),un(s)]})};function jn(){var n=Object(u.a)(["\n  display: flex;\n  flex-wrap: wrap;\n\n  .cast-item {\n    flex: 1 0 50%;\n    display: flex;\n    margin-bottom: 20px;\n    align-items: center;\n\n    @media only screen and (max-width: 768px) {\n      flex: 1 0 100%;\n    }\n  }\n\n  .pic-wrapper {\n    width: 50px;\n    min-width: 50px;\n    height: 50px;\n    overflow: hidden;\n    border-radius: 50%;\n    img {\n      object-fit: cover;\n      width: 100%;\n      height: 100%;\n    }\n  }\n\n  .actor {\n    margin-left: 25px;\n    \n    .bold {\n      font-weight: bold;\n    }\n  }\n"]);return jn=function(){return n},n}var pn=d.b.div(jn()),xn=function(n){var e=n.cast;return Object(r.jsx)(pn,{children:e.map((function(n,e){var t=n.person,i=n.character,c=n.voice;return Object(r.jsxs)("div",{className:"cast-item",children:[Object(r.jsx)("div",{className:"pic-wrapper",children:Object(r.jsx)("img",{src:t.image?t.image.medium:y,alt:"cast-person"})}),Object(r.jsx)("div",{className:"actor",children:Object(r.jsxs)("span",{children:[Object(r.jsx)("span",{className:"bold",children:t.name}),"| ",i.name," ",c?"| Voice":""]})})]},e)}))})};function hn(){var n=Object(u.a)(["\n  p {\n    margin: 5px 0;\n\n    span {\n      font-weight: bold;\n    }\n  }\n"]);return hn=function(){return n},n}var fn=d.b.div(hn()),mn=function(n){var e=n.status,t=n.premiered,i=n.network;return Object(r.jsxs)(fn,{children:[Object(r.jsxs)("p",{children:["Status: ",Object(r.jsx)("span",{children:e})]}),Object(r.jsxs)("p",{children:["Premiered ",t," ",i?"on ".concat(i.name):null]})]})};function On(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n\n  .season-item {\n    display: flex;\n    align-items: center;\n    margin: 10px 0;\n\n    &:last-child {\n      margin-bottom: 0;\n    }\n\n    .left {\n      flex: 0 0 30%;\n      border-right: 1px solid #b0b0b0;\n      padding-right: 20px;\n    }\n\n    .right {\n      padding-left: 20px;\n      flex: 1;\n    }\n  }\n"]);return On=function(){return n},n}function gn(){var n=Object(u.a)(["\n  p {\n    margin: 5px 0;\n  }\n\n  span {\n    font-weight: 700;\n  }\n"]);return gn=function(){return n},n}var vn=d.b.div(gn()),wn=d.b.div(On()),yn=function(n){var e=n.seasons;return Object(r.jsxs)(vn,{children:[Object(r.jsxs)("p",{children:["Seasons in total: ",Object(r.jsx)("span",{children:e.length})]}),Object(r.jsxs)("p",{children:["Episodes in total:"," ",Object(r.jsx)("span",{children:e.reduce((function(n,e){return n+e.episodeOrder}),0)})]}),Object(r.jsx)(wn,{children:e.map((function(n){return Object(r.jsxs)("div",{className:"season-item",children:[Object(r.jsxs)("div",{className:"left",children:[Object(r.jsxs)("p",{children:["Season ",n.number]}),Object(r.jsxs)("p",{children:["Episodes: ",Object(r.jsx)("span",{children:n.episodeOrder})]})]}),Object(r.jsxs)("div",{className:"right",children:["Aired:"," ",Object(r.jsxs)("span",{children:[n.premiereDate," - ",n.endDate]})]})]},n.id)}))})]})};function kn(){var n=Object(u.a)(["\n  display: inline-flex;\n  flex-wrap: wrap;\n\n  span {\n    margin: 6px;\n    margin-bottom: 0;\n    color: blue;\n    background-color: #d0c9ff;\n    padding: 3px 13px;\n    border-radius: 20px;\n    font-size: 14px;\n  }\n"]);return kn=function(){return n},n}function Sn(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n\n  h1 {\n    margin: 0;\n    border-right: 1px solid #ddd;\n    padding-right: 25px;\n    margin-right: 20px;\n  }\n\n  div {\n    display: flex;\n    align-items: center;\n    span {\n      margin-left: 10px;\n    }\n  }\n"]);return Sn=function(){return n},n}function Cn(){var n=Object(u.a)(["\n  display: flex;\n  margin-bottom: 40px;\n\n  img {\n    min-width: 250px;\n    width: 300px;\n    max-height: 450px;\n    border: 1px solid #ddd;\n    border-radius: 40px;\n  }\n\n  .text-side {\n    margin-left: 20px;\n    .summary {\n      color: #5f5f5f;\n      line-height: 1.5;\n    }\n  }\n\n  @media only screen and (max-width: 768px) {\n    flex-wrap: wrap;\n    img {\n      margin-bottom: 20px;\n      margin: auto;\n    }\n    .text-side {\n      margin-left: 0;\n      margin-top: 20px;\n    }\n  }\n"]);return Cn=function(){return n},n}var Nn=d.b.div(Cn()),En=d.b.div(Sn()),Dn=d.b.div(kn()),In=function(n){var e=n.name,t=n.rating,i=n.summary,c=n.tags,a=n.image;return Object(r.jsxs)(Nn,{children:[Object(r.jsx)("img",{src:a?a.original:y,alt:"show-cover"}),Object(r.jsxs)("div",{className:"text-side",children:[Object(r.jsxs)(En,{children:[Object(r.jsx)("h1",{children:e}),Object(r.jsxs)("div",{children:[Object(r.jsx)(O,{active:!0}),Object(r.jsx)("span",{children:t.average||"N/A"})]})]}),Object(r.jsx)("div",{className:"summary",dangerouslySetInnerHTML:{__html:i}}),Object(r.jsxs)("div",{children:["Tags:"," ",Object(r.jsx)(Dn,{children:c.map((function(n,e){return Object(r.jsx)("span",{children:n},e)}))})]})]})]})};function Fn(){var n=Object(u.a)(["\n  margin-bottom: 40px;\n  h2 {\n    margin: 0;\n    margin-bottom: 30px;\n    font-size: 22px;\n  }\n"]);return Fn=function(){return n},n}function An(){var n=Object(u.a)(["\n  padding: 0 20px;\n\n  @media only screen and (min-width: 516px) {\n    padding: 0 40px;\n  }\n\n  @media only screen and (min-width: 768px) {\n    padding: 0 60px;\n  }\n\n  @media only screen and (min-width: 992px) {\n    padding: 0 80px;\n  }\n"]);return An=function(){return n},n}var Ln=d.b.div(An()),Tn=d.b.div(Fn()),_n=function(){var n=function(n){var e=Object(i.useReducer)(tn,{show:null,isLoading:!0,error:null}),t=Object(l.a)(e,2),r=t[0],c=t[1];return Object(i.useEffect)((function(){var e=!0;return Y("/shows/".concat(n,"?embed[]=seasons&embed[]=cast")).then((function(n){e&&c({type:"FETCH_SUCCESS",show:n})})).catch((function(n){e&&c({type:"FETCH_FAILED",error:n.message})})),function(){e=!1}}),[n]),r}(Object(s.g)().id),e=n.show,t=n.isLoading,c=n.error;return t?Object(r.jsx)("div",{children:"Data is being loading"}):c?Object(r.jsxs)("div",{children:["Error occured: ",c]}):Object(r.jsxs)(Ln,{children:[Object(r.jsx)(In,{image:e.image,name:e.name,rating:e.rating,summary:e.summary,tags:e.genres}),Object(r.jsxs)(Tn,{children:[Object(r.jsx)("h2",{children:"Details"}),Object(r.jsx)(mn,{status:e.status,network:e.network,premiered:e.premierred})]}),Object(r.jsxs)(Tn,{children:[Object(r.jsx)("h2",{children:"Seasons"}),Object(r.jsx)(yn,{seasons:e._embedded.seasons})]}),Object(r.jsxs)(Tn,{children:[Object(r.jsx)("h2",{children:"Details"}),Object(r.jsx)(xn,{cast:e._embedded.cast})]})]})},zn=function(){var n=en(),e=Object(l.a)(n,1)[0],t=Object(i.useState)(null),c=Object(l.a)(t,2),a=c[0],o=c[1],s=Object(i.useState)(!0),d=Object(l.a)(s,2),u=d[0],b=d[1],j=Object(i.useState)(null),p=Object(l.a)(j,2),x=p[0],h=p[1];return Object(i.useEffect)((function(){if(e&&e.length>0){var n=e.map((function(n){return Y("/shows/".concat(n))}));Promise.all(n).then((function(n){return n.map((function(n){return{show:n}}))})).then((function(n){o(n),b(!1)})).catch((function(n){h(n.message),b(!1)}))}else b(!1)}),[e]),Object(r.jsxs)(M,{children:[u&&Object(r.jsx)("div",{children:"Shows are still loading"}),x&&Object(r.jsxs)("div",{children:["Error occured: ",x]}),!u&&!a&&Object(r.jsx)("div",{children:"No shows were added"}),!u&&!x&&a&&Object(r.jsx)(rn,{data:a})]})},Hn={mainColors:{blue:"#2400ff",gray:"#c6c6c6",dark:"#353535"}};var Jn=function(){return Object(r.jsx)(d.a,{theme:Hn,children:Object(r.jsxs)(s.c,{children:[Object(r.jsx)(s.a,{exact:!0,path:"/",children:Object(r.jsx)(bn,{})}),Object(r.jsx)(s.a,{exact:!0,path:"/starred",children:Object(r.jsx)(zn,{})}),Object(r.jsx)(s.a,{exact:!0,path:"/show/:id",children:Object(r.jsx)(_n,{})}),Object(r.jsx)(s.a,{children:Object(r.jsx)("div",{children:"not found page"})})]})})},Rn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,51)).then((function(e){var t=e.getCLS,r=e.getFID,i=e.getFCP,c=e.getLCP,a=e.getTTFB;t(n),r(n),i(n),c(n),a(n)}))};a.a.render(Object(r.jsx)(o.a,{children:Object(r.jsx)(Jn,{})}),document.getElementById("root")),Rn()}},[[50,1,2]]]);
//# sourceMappingURL=main.7f66f2ef.chunk.js.map