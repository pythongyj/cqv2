import router from "./create";

import store from "../store/index";

// 跳转之前的全局钩子函数
router.beforeEach(async (to, from, next) => {
  // 用户验证 页面是否需要登陆 是否登陆 --> 页面需要登陆 ---> 没有登陆 ---> 登陆页面
  let loginStatus = store.getters["globals/getIsLogin"];
  if (to.meta.requiresAuth && !loginStatus) {
    next({ name: "Login" });
  }
  next();
});
// 路由跳转后的全局钩子
router.afterEach(function () {
  //   console.log(router.app.$i18n.locale, "xx------x");
  console.log("afterEach", "xx------x");
});

export default router;
