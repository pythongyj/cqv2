// 基准大小
const baseSize = 540; // 注意此值要与 postcss.config.js 文件中的 rootValue保持一致
// 设置 rem 函数
export const setRem = () => {
  console.log("wwww", clientMaxWidth >= baseSize);
  // 当前页面宽度相对于 375宽的缩放比例，可根据自己需要修改,一般设计稿都是宽750(图方便可以拿到设计图后改过来)。
  let clientMaxWidth = document.documentElement.clientWidth;
  // const dpr = window.devicePixelRatio
  if (clientMaxWidth >= baseSize) {
    document.querySelector("html").style.fontSize = 54 + "px";
  }
};
