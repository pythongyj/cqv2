(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"074c":function(t,e,a){},1293:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cq-home-page root_widht flex flex-column space-between"},[a("div",{staticClass:"flex space-between align-center page_padding"},[a("van-icon",{staticClass:"cqicon",attrs:{"class-prefix":"cq",size:"18",name:"search"}}),a("div",{staticClass:"flex-center-center select-tab-item"},t._l(t.tabData,(function(e){return a("span",{key:e.id,staticClass:"m-x--10",class:{active:e.isActive},on:{click:function(a){return t.onSelectTab(e)}}},[t._v(t._s(e.name))])})),0),a("van-icon",{staticClass:"cqicon",attrs:{"class-prefix":"cq",size:"26",name:"camera-2"}})],1),a("router-view")],1)},i=[],n=(a("d81d"),a("ac1f"),a("5319"),{data:function(){return{isActiveTab:1,tabData:[{id:0,name:"世界",isActive:!1,toName:"World"},{id:1,name:"偶遇",isActive:!0,toName:"Encounter"},{id:2,name:"好友",isActive:!1,toName:"Chum"}]}},methods:{onSelectTab:function(t){this.tabData.map((function(t){return t.isActive=!1})),t.isActive=!t.isActive,this.isActiveTab=t.id,this.$router.replace({name:t.toName})}}}),c=n,r=a("2877"),o=Object(r["a"])(c,s,i,!1,null,null,null);e["default"]=o.exports},"159b":function(t,e,a){var s=a("da84"),i=a("fdbc"),n=a("785a"),c=a("17c2"),r=a("9112"),o=function(t){if(t&&t.forEach!==c)try{r(t,"forEach",c)}catch(e){t.forEach=c}};for(var l in i)i[l]&&o(s[l]&&s[l].prototype);o(n)},"16c0":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cq-home-page root_widht flex flex-column space-between"},[a("div",{staticClass:"flex space-between align-center page_padding"},[a("div",{staticClass:"\n        flex-center-center\n        bg-gray--400\n        p-y--10\n        p-x--20\n        size_12\n        border-radius--20\n      "},[a("van-icon",{staticClass:"cqicon color-999",attrs:{"class-prefix":"cq",size:"18",name:"address"}}),a("span",{staticClass:"size_12 color-999"},[t._v(" 西安市")])],1),a("div",{staticClass:"flex-center-center select-tab-item"},t._l(t.tabData,(function(e){return a("span",{key:e.id,staticClass:"m-r--40",class:{active:e.isActive},on:{click:function(a){return t.onSelectTab(e)}}},[t._v(t._s(e.name))])})),0),a("van-icon",{staticClass:"cqicon",attrs:{"class-prefix":"cq",size:"26",name:"shaixuan"}})],1),0===t.isActiveTab?a("found",{staticClass:"page_padding flex-1"}):t._e(),1===t.isActiveTab?a("near",{staticClass:"page_padding flex-1"}):t._e()],1)},i=[],n=(a("d81d"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"absolute absolute-center-h h-80vh z-index--1"},[a("van-image",{staticStyle:{height:"100%"},attrs:{fit:"cover",radius:"1rem",width:"100%",src:t.image}}),t._m(0)],1)}),c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex-center-center absolute home-near-load-more"},[a("span",[t._v("发现更多有趣的朋友")])])}],r={data:function(){return{image:"http://www.oss.qcwy.org.cn/cq/image/home/faxian.png"}}},o=r,l=(a("82dc"),a("2877")),u=Object(l["a"])(o,n,c,!1,null,null,null),d=u.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("van-swipe",{staticClass:"my-swipe",staticStyle:{height:"60vh"},attrs:{"indicator-color":"white","show-indicators":!1}},t._l(t.initData,(function(t){return a("van-swipe-item",{key:t.id},[a("van-image",{staticStyle:{height:"100%"},attrs:{fit:"cover",radius:"1rem",width:"100%",src:t.images[0]}})],1)})),1),a("home-footer",{staticClass:"page_padding"})],1)},f=[],v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex-center-center"},[t._m(0),a("div",{staticClass:"\n      flex-1 flex-center-center\n      bgc-EFF7FF\n      border-radius--12\n      m-left--10\n      p-r--10\n    "},[a("div",{staticClass:"flex flex-column p-l--20 p-y--20",on:{click:function(e){return t.$router.push({name:"LivePeople"})}}},[a("span",{staticClass:"size_16 mb--10"},[t._v("有趣的人")]),a("span",{staticClass:"size_12"},[t._v("发现有趣的灵魂")])]),a("img",{attrs:{src:"http://www.oss.qcwy.org.cn/cq/image/home/youqu.png",alt:""}})])])},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"\n      flex-1 flex-center-center\n      bgc-F0FFFD\n      border-radius--12\n      m-right--10\n      p-r--10\n    "},[a("div",{staticClass:"flex flex-column p-l--20 p-y--20"},[a("span",{staticClass:"size_16 mb--10"},[t._v("灵魂匹配")]),a("span",{staticClass:"size_12"},[t._v("和懂你的人聊天")])]),a("img",{attrs:{src:"http://www.oss.qcwy.org.cn/cq/image/home/linghun.png",alt:""}})])}],g={},h=g,w=(a("7ed9"),Object(l["a"])(h,v,p,!1,null,null,null)),b=w.exports,_={data:function(){return{initData:[{id:0,images:["http://www.oss.qcwy.org.cn/cq/image/home/1.jpeg"],name:"唐嫣",distance:"9.8km",industry:"互联网",constellation:"射手座",voice:"6"},{id:1,images:["http://www.oss.qcwy.org.cn/cq/image/home/2.jpeg"],name:"唐嫣",distance:"9.8km",industry:"互联网",constellation:"射手座",voice:"6"},{id:2,images:["http://www.oss.qcwy.org.cn/cq/image/home/3.jpeg"],name:"唐嫣",distance:"9.8km",industry:"互联网",constellation:"射手座",voice:"6"}]}},components:{HomeFooter:b}},x=_,C=(a("5c98"),Object(l["a"])(x,m,f,!1,null,null,null)),q=C.exports,y={data:function(){return{isActiveTab:0,tabData:[{id:0,name:"发现",isActive:!0},{id:1,name:"附近",isActive:!1}]}},components:{Found:q,Near:d},methods:{onSelectTab:function(t){console.log(t),this.tabData.map((function(t){return t.isActive=!1})),t.isActive=!t.isActive,this.isActiveTab=t.id}}},D=y,A=Object(l["a"])(D,s,i,!1,null,null,null);e["default"]=A.exports},"17c2":function(t,e,a){"use strict";var s=a("b727").forEach,i=a("a640"),n=i("forEach");t.exports=n?[].forEach:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}},2532:function(t,e,a){"use strict";var s=a("23e7"),i=a("e330"),n=a("5a34"),c=a("1d80"),r=a("577e"),o=a("ab13"),l=i("".indexOf);s({target:"String",proto:!0,forced:!o("includes")},{includes:function(t){return!!~l(r(c(this)),r(n(t)),arguments.length>1?arguments[1]:void 0)}})},"3a9e":function(t,e,a){},"3abd":function(t,e,a){"use strict";a("5854")},"44e7":function(t,e,a){var s=a("861d"),i=a("c6b6"),n=a("b622"),c=n("match");t.exports=function(t){var e;return s(t)&&(void 0!==(e=t[c])?!!e:"RegExp"==i(t))}},5854:function(t,e,a){},"5a34":function(t,e,a){var s=a("da84"),i=a("44e7"),n=s.TypeError;t.exports=function(t){if(i(t))throw n("The method doesn't accept regular expressions");return t}},"5c98":function(t,e,a){"use strict";a("c705")},6651:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page_padding h-80vh overflow-scroll"},t._l(t.initListData,(function(t){return a("user-card",{key:t.id,attrs:{itemData:t}})})),1)},i=[],n=a("1a56"),c={data:function(){return{initListData:[{id:0,name:"刘梅路",userIcon:"http://www.oss.qcwy.org.cn/cq/image/home/discover-1.jpeg",huoyuedu:"今日活跃度，默契值68%",desc:"你总顾及别人，那谁来顾及你",images:["http://www.oss.qcwy.org.cn/cq/image/home/discover-1.jpeg"],targs:["日常","情感"],comments:47,share:23,live:96,message:{pl:"来都来了，说点什么呗～",contnet:""}},{id:1,name:"长情",userIcon:"http://www.oss.qcwy.org.cn/cq/image/home/discover-1.jpeg",huoyuedu:"今日活跃度，默契值68%",desc:"你总顾及别人，那谁来顾及你",images:["http://www.oss.qcwy.org.cn/cq/image/home/discover-1.jpeg"],targs:["日常","情感"],comments:47,share:23,live:96,message:{pl:"来都来了，说点什么呗～",contnet:""}}]}},components:{UserCard:n["a"]}},r=c,o=(a("3abd"),a("2877")),l=Object(o["a"])(r,s,i,!1,null,"3a5d628f",null);e["default"]=l.exports},"678f":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page_padding h-80vh overflow-scroll"},[a("div",{staticClass:"bg-blue border-radius--08"},[a("div",{staticClass:"\n        world-card-bg\n        flex\n        space-between\n        align-center\n        p-x--20\n        opacity-09\n        p-y--20\n        color-fff\n      "},[a("div",{staticClass:"flex-center-center"},[a("van-icon",{staticClass:"cqicon",attrs:{name:"address","class-prefix":"cq"}}),t._m(0)],1),a("div",{staticClass:"flex-center-center"},[a("van-icon",{staticClass:"cqicon",attrs:{name:"address-left","class-prefix":"cq"}}),a("span",[t._v("附近")]),a("van-icon",{staticClass:"cqicon",attrs:{name:"address-right","class-prefix":"cq"}})],1)])]),a("div",{staticClass:"m-top--20 world-pubuliu"},t._l(t.initDataList,(function(e){return a("div",{key:e.id,staticClass:"relative",on:{click:function(a){return t.$router.push({name:"TopicNotice",params:{initData:e}})}}},[a("van-image",{staticClass:"border-radius--08 overflow-hidden",attrs:{src:e.image}}),a("div",{staticClass:"absolute absolute-center color-fff flex-center-center-column"},[a("span",{staticClass:"size_16"},[t._v(t._s(e.title))]),a("span",{staticClass:"size_12"},[t._v("新发布 "+t._s(e.newNumber>999?"999+":e.newNumber)+" ")])])],1)})),0)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-column m-left--10"},[a("span",[t._v("天朗大兴郡 · 西安")]),a("span",[t._v("1689 条动态")])])}],n={data:function(){return{initDataList:[{id:0,image:"http://www.oss.qcwy.org.cn/cq/image/home/sheying.jpeg",title:"摄影",newNumber:1e4},{id:1,image:"http://www.oss.qcwy.org.cn/cq/image/home/chuanda.jpeg",title:"穿搭",newNumber:1e4},{id:2,image:"http://www.oss.qcwy.org.cn/cq/image/home/mao.jpeg",title:"猫",newNumber:1e4},{id:5,image:"http://www.oss.qcwy.org.cn/cq/image/home/1.jpeg",title:"可爱",newNumber:1e4},{id:4,image:"http://www.oss.qcwy.org.cn/cq/image/home/xiari.jpeg",title:"夏日",newNumber:1e4},{id:6,image:"http://www.oss.qcwy.org.cn/cq/image/home/2.jpeg",title:"糖糖",newNumber:1e4},{id:3,image:"http://www.oss.qcwy.org.cn/cq/image/home/richang.jpeg",title:"风景",newNumber:1e4},{id:7,image:"http://www.oss.qcwy.org.cn/cq/image/home/3.jpeg",title:"日常",newNumber:1e4},{id:8,image:"http://www.oss.qcwy.org.cn/cq/image/home/xiari2.jpeg",title:"夏日",newNumber:1e4}]}}},c=n,r=(a("d071"),a("2877")),o=Object(r["a"])(c,s,i,!1,null,null,null);e["default"]=o.exports},"7ed9":function(t,e,a){"use strict";a("fed8")},"82dc":function(t,e,a){"use strict";a("074c")},"8fc4":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cq-message-page"},[a("div",{staticClass:"flex space-between align-center page_padding"},[a("span"),a("div",{staticClass:"flex-center-center select-tab-item"},t._l(t.tabData,(function(e){return a("span",{key:e.id,staticClass:"m-x--10",class:{active:e.isActive},on:{click:function(a){return t.onSelectTab(e)}}},[t._v(t._s(e.name))])})),0),a("van-icon",{staticClass:"cqicon",attrs:{"class-prefix":"cq",size:"26",name:"add"}})],1),a("router-view")],1)},i=[],n=(a("d81d"),a("ac1f"),a("5319"),{data:function(){return{isActiveTab:0,tabData:[{id:0,name:"聊天",isActive:!0,toName:"MessageChatList"},{id:1,name:"列表",isActive:!1,toName:"MessageList"}]}},methods:{onSelectTab:function(t){this.tabData.map((function(t){return t.isActive=!1})),t.isActive=!t.isActive,this.isActiveTab=t.id,this.$router.replace({name:t.toName})}}}),c=n,r=a("2877"),o=Object(r["a"])(c,s,i,!1,null,null,null);e["default"]=o.exports},a5a5:function(t,e,a){},ab13:function(t,e,a){var s=a("b622"),i=s("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(a){try{return e[i]=!1,"/./"[t](e)}catch(s){}}return!1}},b30e:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cq-index flex flex-column h-100vh root_widht"},[a("keep-alive",[a("router-view",{staticClass:"flex-1"})],1),a("van-tabbar",{attrs:{fixed:!1,route:""},on:{change:t.onChange},model:{value:t.activeTabbarIndex,callback:function(e){t.activeTabbarIndex=e},expression:"activeTabbarIndex"}},t._l(t.tabbarData,(function(e){return a("van-tabbar-item",{key:e.id,staticClass:"cqicon",class:e.id==t.activeTabbarIndex?"color-theme":"",attrs:{"icon-prefix":"cq",to:e.to,icon:e.id==t.activeTabbarIndex?e.activeIcon:e.icon}},[t._v(t._s(e.name))])})),1)],1)},i=[],n=(a("d3b7"),a("159b"),a("caad"),a("2532"),{data:function(){return{activeTabbarIndex:1,tabbarData:[{id:0,icon:"home",activeIcon:"home-fill",name:"首页",to:"/"},{id:1,icon:"found",activeIcon:"faxian2",name:"发现",to:"/discover"},{id:2,icon:"message",activeIcon:"message-fill-1",name:"消息",to:"/message"},{id:3,icon:"me-1",activeIcon:"me-fill-1",name:"我的",to:"/account"}]}},created:function(){this.initData()},methods:{onChange:function(t){this.activeTabbarIndex=t},initData:function(){var t=this,e=window.location.pathname;this.tabbarData.forEach((function(a,s){e.includes(a.to)&&(t.activeTabbarIndex=s)}))}}}),c=n,r=a("2877"),o=Object(r["a"])(c,s,i,!1,null,null,null);e["default"]=o.exports},b888:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("好友页面")])},i=[],n={},c=n,r=a("2877"),o=Object(r["a"])(c,s,i,!1,null,null,null);e["default"]=o.exports},c57b:function(t,e,a){},c705:function(t,e,a){},caad:function(t,e,a){"use strict";var s=a("23e7"),i=a("4d64").includes,n=a("44d2");s({target:"Array",proto:!0},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n("includes")},d071:function(t,e,a){"use strict";a("3a9e")},da70:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cq-account-page account-bg h-100vh overflow-scroll"},[a("div",{staticClass:"page_padding"},[a("div",{staticClass:"flex justify-end p-y--20"},[a("van-icon",{staticClass:"cqicon",attrs:{name:"open","class-prefix":"cq",size:"20"}})],1),a("div",{staticClass:"flex align-center space-between m-b--10"},[a("van-image",{staticClass:"account-user-icon-border",attrs:{round:"",src:t.userData.icon}}),a("div",{staticClass:"\n          flex-center-center\n          bg-gray--400\n          p-10\n          border-radius--12\n          border-fff-3\n        "},[a("van-image",{attrs:{width:"20",height:"20",src:"http://www.oss.qcwy.org.cn/cq/image/home/liwu.png"}}),t._m(0),a("van-icon",{staticClass:"cqicon color-gray-1",attrs:{name:"arrow-right","class-prefix":"cq",size:"20"}})],1)],1),a("div",{staticClass:"flex flex-column"},[a("span",{staticClass:"size_20 text-justify",staticStyle:{width:"70px"}},[t._v(t._s(t.userData.userNick))]),a("span",{staticClass:"size_14 color-222 m-t--10"},[t._v(t._s(t.userData.desc))]),a("div",{staticClass:"flex m-top--20"},[a("span",{staticClass:"m-right--10 size_14"},[t._v(t._s(t.userData.focus)+" "),a("span",{staticClass:"size_12"},[t._v("关注")])]),a("span",{staticClass:"m-right--10 size_14"},[t._v(t._s(t.userData.focusForMe)+" "),a("span",{staticClass:"size_12"},[t._v("被关注")])]),a("span",{staticClass:"m-right--10 size_14"},[t._v(t._s(t.userData.look)+" "),a("span",{staticClass:"size_12"},[t._v("看过我")])])])])]),a("div",{staticClass:"bg-fff m-05 page_padding border-radius--12"},[a("div",{staticClass:"flex select-tab-item p-b--10"},t._l(t.tabData,(function(e){return a("span",{key:e.id,staticClass:"m-r--20 size_14",class:{active:e.isActive},on:{click:function(a){return t.onSelectTab(e)}}},[t._v(t._s(e.name))])})),0),t._l(t.dynamicListData,(function(e){return a("account-card",{directives:[{name:"show",rawName:"v-show",value:0==t.isActiveTab,expression:"isActiveTab == 0"}],key:e.id,attrs:{initData:e}})})),a("div",{directives:[{name:"show",rawName:"v-show",value:1==t.isActiveTab,expression:"isActiveTab == 1"}]},[a("span",{staticClass:"size_14"},[t._v("设计图暂时没有，稍后参考其他app添加上")])])],2)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-column m-x--10"},[a("span",{staticClass:"size_14"},[t._v("完善资料70%")]),a("span",{staticClass:"size_12 color-gray-1 m-t--06"},[t._v("完成立即解锁神秘奖励")])])}],n=(a("d81d"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-column"},[a("div",{staticClass:"flex space-between align-center"},[a("span",{staticClass:"account-cart-item relative p-l--10 p-y--10"},[a("span",{staticClass:"size_14"},[t._v(t._s(t.initData.time.day))]),t._v(" "),a("span",{staticClass:"size_12 color-gray-1"},[t._v(t._s(t.initData.time.month)+"月")])]),a("van-icon",{staticClass:"cqicon color-gray-1",attrs:{"class-prefix":"cq",name:"gengduo"}})],1),a("ul",{staticClass:"flex flex-wrap p-y--10"},t._l(t.initData.tags,(function(e,s){return a("li",{key:s,staticClass:"\n        flex-center-center\n        m-right--10\n        bg-gray--400\n        p-x--10\n        p-y--06\n        border-radius--12\n      "},[a("span",{staticClass:"\n          border-radius--50pr\n          color-fff\n          bg-black\n          w-16\n          h-16\n          size_10\n          flex-center-center\n          m-r--06\n        "},[t._v("#")]),a("span",{staticClass:"size_12"},[t._v(t._s(e))])])})),0),a("div",{staticClass:"size_12"},[t._v(" "+t._s(t.initData.desc)+" ")]),a("image-card",{staticClass:"m-y--10",attrs:{imageList:t.initData.images,borderRadius:!0}})],1)}),c=[],r=a("0f6a"),o={props:{initData:{type:[Object],required:!0}},components:{ImageCard:r["a"]}},l=o,u=(a("fff4"),a("2877")),d=Object(u["a"])(l,n,c,!1,null,null,null),m=d.exports,f=a("e1bd"),v={data:function(){return{userData:{icon:"http://www.oss.qcwy.org.cn/logo66.png",userNick:"长情",desc:"你相信什么，你就看到什么",look:26,focus:32,focusForMe:16},dynamicListData:[{id:Object(f["a"])(5),time:{month:3,day:28},tags:["日常","热恋"],desc:"今日审美打卡，暖色系",images:["http://www.oss.qcwy.org.cn/cq/image/home/2.jpeg","http://www.oss.qcwy.org.cn/cq/image/home/3.jpeg","http://www.oss.qcwy.org.cn/cq/image/home/1.jpeg"]},{id:Object(f["a"])(5),time:{month:3,day:24},tags:["可爱","优秀"],desc:"每天最开心的事就是码代码",images:["http://www.oss.qcwy.org.cn/cq/image/home/richang.jpeg","http://www.oss.qcwy.org.cn/cq/image/home/2.jpeg","http://www.oss.qcwy.org.cn/cq/image/home/3.jpeg"]}],isActiveTab:0,tabData:[{id:0,name:"动态",isActive:!0},{id:1,name:"赞过",isActive:!1}]}},components:{AccountCard:m},methods:{onSelectTab:function(t){console.log(t),this.tabData.map((function(t){return t.isActive=!1})),t.isActive=!t.isActive,this.isActiveTab=t.id}}},p=v,g=(a("eb40"),Object(u["a"])(p,s,i,!1,null,null,null));e["default"]=g.exports},eb40:function(t,e,a){"use strict";a("c57b")},fed8:function(t,e,a){},fff4:function(t,e,a){"use strict";a("a5a5")}}]);
//# sourceMappingURL=home.8e0a1d3a.js.map