import request from "../../utils/axios/index.js";
import { HOME_API_KEY } from "./keys";

/**
 * 首页card列表接口
 * @param {*} pageSize 一页多少数据
 * @param {*} pageNumber 第几页
 * @returns
 */
export const homeApi = ({ pageSize, pageNumber }) => {
  return request({
    url: HOME_API_KEY,
    params: { pageSize, pageNumber },
  });
};
