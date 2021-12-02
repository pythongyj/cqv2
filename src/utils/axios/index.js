import axios from "axios";
import qs from "qs";
import router from "../../router/create";

import store from "../../store";

import { addStorage, getStorage } from "@/utils/func/storage";

const instance = axios.create({
  baseURL:
    "https://www.fastmock.site/mock/0008c5d141bc3f81fd6118193e6d5f47/cq/api", // 基础路径
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  timeout: 10000,
});

// 取消请求
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

let sources = []; // 定义数组用于存储每个ajax请求的取消函数及对应标识

let removeSource = (config) => {
  for (let source in sources) {
    // 当多次请求相同时，取消之前的请求
    if (sources[source].umet === config.url + "&" + config.method) {
      sources[source].cancel(`取消${config.url}--${config.method}请求`);
      sources.splice(source, 1);
    }
  }
};

let addSource = (config) => {
  config.cancelToken = new CancelToken((c) => {
    // 将取消函数存起来
    sources.push({ umet: config.url + "&" + config.method, cancel: c });
  });
};

let addToken = (config) => {
  // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
  if (!config.headers.common["Authorization"]) {
    if (getStorage("token") && getStorage("token").token) {
      instance.defaults.headers.common["Authorization"] =
        "Bearer " + getStorage("token").token;
      store.commit("globals/isLogin", true);
    } else {
      store.commit("globals/isLogin", false);
      router.push({ name: "Login" });
    }
  }
};

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // config.data = ""; //绕过get请求为undefined时无法设置Content-Type  偷看就随便写了下
    addToken(config);
    // 移除 取消请求——————>>>> 是否重复请求，重复请求的话，取消之前的请求
    removeSource(config);
    // 将请求存起来
    addSource(config);

    if (!store.getters["globals/getIsLoading"]) {
      store.commit("globals/isLoading", true);
    }
    if (
      config.url !== "login" &&
      !(getStorage("token") && getStorage("token").token)
    ) {
      router.push({ name: "Login" });
    }
    if (config.method === "post") {
      config.data = qs.stringify(config.data)
    }
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    removeSource(response.config);
    if (store.getters["globals/getIsLoading"]) {
      store.commit("globals/isLoading", false);
    }
    if (
      response.config.url === "login" &&
      response.status === 200 &&
      response.data.code === "1"
    ) {
      addStorage("token", { token: response.data.data.userInfo.token });
      instance.defaults.auth = {
        ...qs.parse(response.config.data),
      };
      store.commit("globals/isLogin", true);
    }
   
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

function requist({ url, data, params }) {
  let method;
  if (data) {
    method = "post";
  } else if (params) {
    method = "get";
  }
  if (method == "post") {
    return instance({
      method,
      url,
      data,
      cancelToken: source.token,
    }).catch(function (thrown) {
      // 判断是否是因主动取消导致的
      if (axios.isCancel(thrown)) {
        return {
          data: {
            code: "0000",
            msg: thrown.message,
            data: null,
          },
        };
      } else {
        return thrown;
      }
    });
  } else if (method == "get") {
    return instance({
      method,
      url,
      params,
      cancelToken: source.token,
    }).catch(function (thrown) {
      // 判断是否是因主动取消导致的
      if (axios.isCancel(thrown)) {
        return {
          data: {
            code: "1111",
            msg: thrown.message,
            data: null,
          },
        };
      } else {
        return thrown;
      }
    });
  }
}

export default requist;
