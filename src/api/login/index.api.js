import request from "../../utils/axios/index.js";
import { LOGIN_API_KEY, REGISTERE_API_KEY } from "./keys";

/**
 * 登陆
 * @param {*} param0
 * @returns
 */
export const userLogin = ({ username, password }) => {
  console.log(username, password,'---');
  return request({
    url: LOGIN_API_KEY,
    data: { username, password },
  });
};

/**
 * 注册
 * @param {*} param0
 * @returns
 */
export const registereLogin = ({ username, password }) => {
  return request({
    url: REGISTERE_API_KEY,
    data: { username, password },
  });
};
