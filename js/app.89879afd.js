(function(e){function n(n){for(var o,r,u=n[0],c=n[1],l=n[2],s=0,m=[];s<u.length;s++)r=u[s],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&m.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);h&&h(n);while(m.length)m.shift()();return i.push.apply(i,l||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],o=!0,r=1;r<t.length;r++){var u=t[r];0!==a[u]&&(o=!1)}o&&(i.splice(n--,1),e=c(c.s=t[0]))}return e}var o={},r={app:0},a={app:0},i=[];function u(e){return c.p+"js/"+({"home~login":"home~login",home:"home",login:"login"}[e]||e)+"."+{"chunk-5932a2f0":"32e785ea","chunk-70db6ca4":"6751a94b","home~login":"29219695",home:"ec6d82f1",login:"9d955a21"}[e]+".js"}function c(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t={"home~login":1,home:1,login:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var o="css/"+({"home~login":"home~login",home:"home",login:"login"}[e]||e)+"."+{"chunk-5932a2f0":"31d6cfe0","chunk-70db6ca4":"31d6cfe0","home~login":"aba4832e",home:"6369d8e1",login:"eb1282c3"}[e]+".css",a=c.p+o,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var l=i[u],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===o||s===a))return n()}var m=document.getElementsByTagName("style");for(u=0;u<m.length;u++){l=m[u],s=l.getAttribute("data-href");if(s===o||s===a)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var o=n&&n.target&&n.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],h.parentNode.removeChild(h),t(i)},h.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)n.push(o[2]);else{var i=new Promise((function(n,t){o=a[e]=[n,t]}));n.push(o[2]=i);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=u(e);var m=new Error;l=function(n){s.onerror=s.onload=null,clearTimeout(h);var t=a[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;m.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",m.name="ChunkLoadError",m.type=o,m.request=r,t[1](m)}a[e]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(n)},c.m=e,c.c=o,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)c.d(t,o,function(n){return e[n]}.bind(null,o));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=n,l=l.slice();for(var m=0;m<l.length;m++)n(l[m]);var h=s;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},1:function(e,n){},"3bb0":function(e,n,t){},4360:function(e,n,t){"use strict";var o=t("2b0e"),r=t("2f62"),a=t("7f14"),i=function(){return{isLoading:!1,isLogin:!(!Object(a["b"])("token")||!Object(a["b"])("token").token)}},u={getIsLoading:function(e){return e.isLoading},getIsLogin:function(e){return console.log(e,"state"),e.isLogin}},c={isLoading:function(e,n){e.isLoading=n},isLogin:function(e,n){e.isLogin=n}},l={},s={namespaced:!0,state:i,getters:u,actions:l,mutations:c};o["a"].use(r["a"]);n["a"]=new r["a"].Store({modules:{globals:s}})},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},a=[],i={name:"RootPage",data:function(){return{loading:!1}}},u=i,c=t("2877"),l=Object(c["a"])(u,r,a,!1,null,null,null),s=l.exports,m=t("1da1"),h=(t("96cf"),t("b259")),f=t("4360");h["a"].beforeEach(function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(n,t,o){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=f["a"].getters["globals/getIsLogin"],n.meta.requiresAuth&&!r&&o({name:"Login"}),o();case 3:case"end":return e.stop()}}),e)})));return function(n,t,o){return e.apply(this,arguments)}}()),h["a"].afterEach((function(){console.log("afterEach","xx------x")}));var d=h["a"],p=(t("3cc5"),t("c625"),t("b650")),g=(t("b342"),t("ad06")),b=(t("bf24"),t("44bf")),v=(t("578d"),t("ee83")),w=(t("87d0"),t("e41f")),y=(t("1318"),t("ac28")),P=(t("4627"),t("2ed4")),L=(t("3cc4"),t("5596")),O=(t("8d12"),t("2bb1")),k=(t("433b"),t("d399")),j=(t("558f"),t("0b33")),E=(t("8990"),t("5e46")),x=(t("9eda"),t("565f")),S=(t("cd52"),t("e11d")),_=(t("576f"),t("92e2")),A=(t("3ec1"),t("7744")),C=(t("2a53"),t("34e9")),T=(t("9f2d"),t("7278")),I=(t("bca0"),t("543e")),M=(t("8a4e"),t("6e47")),N=(t("da02"),t("6b41"));o["a"].use(p["a"]).use(g["a"]).use(b["a"]).use(v["a"]).use(w["a"]).use(y["a"]).use(P["a"]).use(L["a"]).use(O["a"]).use(k["a"]).use(j["a"]).use(E["a"]).use(x["a"]).use(S["a"]).use(_["a"]).use(A["a"]).use(C["a"]).use(T["a"]).use(I["a"]).use(M["a"]).use(N["a"]);var q=540,B=function(){console.log("wwww",e>=q);var e=document.documentElement.clientWidth;e>=q&&(document.querySelector("html").style.fontSize="54px")};t("c59a"),t("5cfb"),t("6eb7"),t("e4a9"),t("c775"),t("73e6"),t("6096"),t("3bb0");B(),window.onresize=function(){B()},o["a"].config.productionTip=!1,new o["a"]({router:d,store:f["a"],render:function(e){return e(s)}}).$mount("#app")},6096:function(e,n,t){},"6eb7":function(e,n,t){},"73e6":function(e,n,t){},"7f14":function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return u}));var o=t("53ca"),r=t("4328"),a=t.n(r),i=function(e,n){"object"===Object(o["a"])(n)&&(n=a.a.stringify(n)),window.localStorage.setItem(e,n)},u=function(e){return a.a.parse(window.localStorage.getItem(e))}},b259:function(e,n,t){"use strict";var o=t("2b0e"),r=t("8c4f"),a=(t("d3b7"),t("3ca3"),t("ddb0"),[{path:"/",name:"Index",component:function(){return Promise.all([t.e("home~login"),t.e("home")]).then(t.bind(null,"b30e"))},children:[{path:"/",name:"Home",component:function(){return Promise.all([t.e("home~login"),t.e("home")]).then(t.bind(null,"16c0"))},meta:{requiresAuth:!0}},{path:"/discover",name:"Discover",component:function(){return Promise.all([t.e("home~login"),t.e("home")]).then(t.bind(null,"1293"))},children:[{path:"/",name:"Encounter",component:function(){return Promise.all([t.e("home~login"),t.e("home")]).then(t.bind(null,"6651"))}},{path:"/discover/world",name:"World",component:function(){return Promise.all([t.e("home~login"),t.e("home")]).then(t.bind(null,"678f"))}},{path:"/discover/chum",name:"Chum",component:function(){return Promise.all([t.e("home~login"),t.e("home")]).then(t.bind(null,"b888"))}}]},{path:"/message",name:"Message",component:function(){return Promise.all([t.e("home~login"),t.e("home")]).then(t.bind(null,"8fc4"))},children:[{path:"/",name:"MessageChatList",component:function(){return t.e("chunk-5932a2f0").then(t.bind(null,"997f"))}},{path:"/message/list",name:"MessageList",component:function(){return t.e("chunk-70db6ca4").then(t.bind(null,"ee74"))}}]},{path:"/account",name:"Account",component:function(){return Promise.all([t.e("home~login"),t.e("home")]).then(t.bind(null,"da70"))}}]},{path:"/login",name:"Login",component:function(){return Promise.all([t.e("home~login"),t.e("login")]).then(t.bind(null,"d9c9"))}},{path:"/leadone",name:"LeadOne",component:function(){return Promise.all([t.e("home~login"),t.e("login")]).then(t.bind(null,"9568"))}},{path:"/leadtwo",name:"LeadTwo",component:function(){return Promise.all([t.e("home~login"),t.e("login")]).then(t.bind(null,"c559"))}},{path:"/livepeople",name:"LivePeople",component:function(){return Promise.all([t.e("home~login"),t.e("login")]).then(t.bind(null,"82bf"))}},{path:"/chatpublic",name:"ChatPublic",component:function(){return Promise.all([t.e("home~login"),t.e("login")]).then(t.bind(null,"1f6a"))}},{path:"/topicnotice",name:"TopicNotice",component:function(){return Promise.all([t.e("home~login"),t.e("login")]).then(t.bind(null,"ac2b"))}},{path:"/otheracount",name:"OtherAccount",component:function(){return Promise.all([t.e("home~login"),t.e("login")]).then(t.bind(null,"0deb"))}}]);o["a"].use(r["a"]);var i=new r["a"]({mode:"history",base:"/",routes:a});n["a"]=i},c775:function(e,n,t){},e4a9:function(e,n,t){}});
//# sourceMappingURL=app.89879afd.js.map