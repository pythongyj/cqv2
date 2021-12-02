export const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import(/* webpackChunkName: "home" */ "../views/Index"),
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import(/* webpackChunkName: "home" */ "../views/Home"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/discover",
        name: "Discover",
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/Discover"),
        children: [
          {
            path: "/",
            name: "Encounter",
            component: () =>
              import(/* webpackChunkName: "home" */ "../views/Encounter"),
          },
          {
            path: "/discover/world",
            name: "World",
            component: () =>
              import(/* webpackChunkName: "home" */ "../views/World"),
          },
          {
            path: "/discover/chum",
            name: "Chum",
            component: () =>
              import(/* webpackChunkName: "home" */ "../views/Chum"),
          },
        ],
      },
      {
        path: "/message",
        name: "Message",
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/Message"),
        children: [
          {
            path: "/",
            name: "MessageChatList",
            component: () => import("../views/Message/pages/chat-list.vue"),
          },
          {
            path: "/message/list",
            name: "MessageList",
            component: () => import("../views/Message/pages/list.vue"),
          },
        ],
      },
      {
        path: "/account",
        name: "Account",
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/Account"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import(/* webpackChunkName: "login" */ "../views/Login"),
  },
  {
    path: "/leadone",
    name: "LeadOne",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Lead/page_one.vue"),
  },
  {
    path: "/leadtwo",
    name: "LeadTwo",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Lead/page_two.vue"),
  },
  {
    path: "/livepeople",
    name: "LivePeople",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LivePeople/index.vue"),
  },
  {
    path: "/chatpublic",
    name: "ChatPublic",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/ChatPublic/index.vue"),
  },
  {
    path: "/topicnotice",
    name: "TopicNotice",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/TopicNotice/index.vue"),
  },
  {
    path: "/otheracount",
    name: "OtherAccount",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/OtherAccount/index.vue"),
  },
];
