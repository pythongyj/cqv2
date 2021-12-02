import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store";
import "reset.css";
import "@/vant/index";
import { setRem } from "@/utils/func/rem";
import "vant/lib/icon/local.css";
import "amfe-flexible";

import "./styles/index";

// 初始化
setRem();
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem();
};

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
