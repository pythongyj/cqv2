import Vue from "vue";
import Vuex from "vuex";

import globals from "./globals/index";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    globals,
  },
});
