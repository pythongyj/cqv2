import { getStorage } from "../../utils/func/storage";

const state = () => ({
  isLoading: false,
  isLogin: getStorage('token') && getStorage('token').token ? true : false,
});

const getters = {
  getIsLoading(state) {
    return state.isLoading;
  },
  getIsLogin(state) {
    console.log(state,'state');
    return state.isLogin;
  },
};

// mutations
const mutations = {
  isLoading(state, isLoading) {
    state.isLoading = isLoading;
  },
  isLogin(state, isLogin) {
    state.isLogin = isLogin;
  },
};

// actions
const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
